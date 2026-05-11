create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists profiles_email_idx on public.profiles (lower(email));

alter table public.profiles enable row level security;

drop policy if exists "authenticated can read own profile" on public.profiles;
create policy "authenticated can read own profile"
on public.profiles for select to authenticated
using (id = auth.uid());

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do update set email = excluded.email, updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

insert into public.profiles (id, email)
select u.id, u.email
from auth.users u
where not exists (select 1 from public.profiles p where p.id = u.id);

update public.profiles
set is_admin = true, updated_at = now()
where lower(email) = 'mudasarimamofficial@gmail.com';

create table if not exists public.maschinenbauer_settings (
  id bigint primary key default 1,
  admin_email text,
  resend_api_key_masked text,
  resend_from_email text,
  resend_sender_status text,
  resend_sender_message text,
  resend_sender_checked_at timestamptz,
  config jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint maschinenbauer_settings_singleton check (id = 1)
);

create table if not exists public.maschinenbauer_secret_settings (
  id bigint primary key default 1,
  resend_api_key text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint maschinenbauer_secret_settings_singleton check (id = 1)
);

create table if not exists public.maschinenbauer_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  business_type text,
  revenue text,
  message text,
  status text not null default 'new' check (status in ('new','contacted','closed'))
);

create table if not exists public.maschinenbauer_homepage_content (
  id bigint primary key default 1,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint maschinenbauer_homepage_content_singleton check (id = 1)
);

create table if not exists public.maschinenbauer_homepage_content_drafts (
  id bigint primary key references public.maschinenbauer_homepage_content(id) on delete cascade,
  content jsonb not null default '{}'::jsonb,
  published_updated_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.maschinenbauer_homepage_content_versions (
  id bigserial primary key,
  homepage_id bigint not null references public.maschinenbauer_homepage_content(id) on delete cascade,
  content jsonb not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.maschinenbauer_site_pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  nav_label text,
  show_in_header_nav boolean not null default false,
  show_in_footer_nav boolean not null default false,
  status text not null default 'draft' check (status in ('draft','published')),
  meta_title text,
  meta_description text,
  draft_content jsonb not null default '{}'::jsonb,
  published_content jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.maschinenbauer_site_page_versions (
  id bigserial primary key,
  page_id uuid not null references public.maschinenbauer_site_pages(id) on delete cascade,
  draft_content jsonb not null,
  published_content jsonb not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.maschinenbauer_settings enable row level security;
alter table public.maschinenbauer_secret_settings enable row level security;
alter table public.maschinenbauer_leads enable row level security;
alter table public.maschinenbauer_homepage_content enable row level security;
alter table public.maschinenbauer_homepage_content_drafts enable row level security;
alter table public.maschinenbauer_homepage_content_versions enable row level security;
alter table public.maschinenbauer_site_pages enable row level security;
alter table public.maschinenbauer_site_page_versions enable row level security;

create or replace function public.is_admin_user()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.is_admin = true
  );
$$;

do $$
declare
  t text;
begin
  foreach t in array array[
    'maschinenbauer_settings',
    'maschinenbauer_secret_settings',
    'maschinenbauer_leads',
    'maschinenbauer_homepage_content',
    'maschinenbauer_homepage_content_drafts',
    'maschinenbauer_homepage_content_versions',
    'maschinenbauer_site_pages',
    'maschinenbauer_site_page_versions'
  ]
  loop
    execute format('drop policy if exists "%s_admin_all" on public.%I', t, t);
    execute format('create policy "%s_admin_all" on public.%I for all to authenticated using (public.is_admin_user()) with check (public.is_admin_user())', t, t);
  end loop;
end $$;

drop policy if exists "maschinenbauer_homepage_public_read" on public.maschinenbauer_homepage_content;
create policy "maschinenbauer_homepage_public_read"
on public.maschinenbauer_homepage_content for select to anon
using (id = 1);

drop policy if exists "maschinenbauer_pages_public_read" on public.maschinenbauer_site_pages;
create policy "maschinenbauer_pages_public_read"
on public.maschinenbauer_site_pages for select to anon
using (status = 'published');

grant select on public.profiles to authenticated;
grant select on public.maschinenbauer_homepage_content to anon;
grant select on public.maschinenbauer_site_pages to anon;
grant all privileges on public.maschinenbauer_settings to authenticated;
grant all privileges on public.maschinenbauer_secret_settings to authenticated;
grant all privileges on public.maschinenbauer_leads to authenticated;
grant all privileges on public.maschinenbauer_homepage_content to authenticated;
grant all privileges on public.maschinenbauer_homepage_content_drafts to authenticated;
grant all privileges on public.maschinenbauer_homepage_content_versions to authenticated;
grant all privileges on public.maschinenbauer_site_pages to authenticated;
grant all privileges on public.maschinenbauer_site_page_versions to authenticated;
grant usage, select on sequence public.maschinenbauer_homepage_content_versions_id_seq to authenticated;
grant usage, select on sequence public.maschinenbauer_site_page_versions_id_seq to authenticated;

insert into storage.buckets (id, name, public)
values ('assets', 'assets', true)
on conflict (id) do update set public = true;

insert into public.maschinenbauer_settings (id, admin_email, config)
values (
  1,
  'mudasarimamofficial@gmail.com',
  '{
    "bookingUrl": "https://example.com/booking-placeholder",
    "bookingLabel": "Erstgespräch buchen",
    "bookingMicrocopy": "Kostenlos · unverbindlich · 20 Minuten Klarheit",
    "company": {
      "name": "noll.media",
      "phone": "+49 2602 9191 500",
      "phoneHref": "tel:+4926029191500",
      "email": "hallo@noll.media",
      "emailHref": "mailto:hallo@noll.media",
      "street": "Rudolf-Diesel-Straße 6",
      "city": "56410 Montabaur",
      "country": "Deutschland"
    }
  }'::jsonb
)
on conflict (id) do update
set admin_email = excluded.admin_email,
    config = public.maschinenbauer_settings.config || excluded.config,
    updated_at = now();

insert into public.maschinenbauer_secret_settings (id)
values (1)
on conflict (id) do nothing;

insert into public.maschinenbauer_homepage_content (id, content)
values (1, '{"project":"maschinenbauer-3.0","note":"Public landing is rendered from source components; this row is reserved for future structured editing."}'::jsonb)
on conflict (id) do nothing;

insert into public.maschinenbauer_homepage_content_drafts (id, content)
values (1, '{}'::jsonb)
on conflict (id) do nothing;

insert into public.maschinenbauer_site_pages (
  slug, title, nav_label, show_in_header_nav, show_in_footer_nav, status,
  meta_title, meta_description, draft_content, published_content, published_at
)
values
  (
    'impressum',
    'Impressum',
    'Impressum',
    false,
    true,
    'published',
    'Impressum | noll.media',
    'Impressum fuer noll.media.',
    '{"sections":[{"id":"impressum","type":"rich_text","enabled":true,"settings":{"title":"Impressum","content":"<p>Impressum wird auf /impressum ausgeliefert und kann spaeter erweitert werden.</p>"}}]}'::jsonb,
    '{"sections":[{"id":"impressum","type":"rich_text","enabled":true,"settings":{"title":"Impressum","content":"<p>Impressum wird auf /impressum ausgeliefert und kann spaeter erweitert werden.</p>"}}]}'::jsonb,
    now()
  ),
  (
    'datenschutz',
    'Datenschutz',
    'Datenschutz',
    false,
    true,
    'published',
    'Datenschutz | noll.media',
    'Datenschutz fuer noll.media.',
    '{"sections":[{"id":"datenschutz","type":"rich_text","enabled":true,"settings":{"title":"Datenschutz","content":"<p>Datenschutz wird auf /datenschutz ausgeliefert und kann spaeter erweitert werden.</p>"}}]}'::jsonb,
    '{"sections":[{"id":"datenschutz","type":"rich_text","enabled":true,"settings":{"title":"Datenschutz","content":"<p>Datenschutz wird auf /datenschutz ausgeliefert und kann spaeter erweitert werden.</p>"}}]}'::jsonb,
    now()
  )
on conflict (slug) do nothing;

notify pgrst, 'reload schema';
