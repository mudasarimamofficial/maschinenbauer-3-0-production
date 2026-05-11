"use client";

import { useEffect, useState } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  DEFAULT_MASCHINENBAUER_CONFIG,
  type MaschinenbauerConfig,
} from "@/maschinenbauer/lib/booking";

type Props = {
  supabase: SupabaseClient;
  onSignOut: () => Promise<void>;
};

export function MaschinenbauerConfigPanel({ supabase, onSignOut }: Props) {
  const [config, setConfig] = useState<MaschinenbauerConfig>(DEFAULT_MASCHINENBAUER_CONFIG);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      setError(null);
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token || "";
      if (!token) {
        setError("Missing admin session");
        setLoading(false);
        return;
      }
      const res = await fetch("/api/admin/maschinenbauer", {
        headers: { authorization: `Bearer ${token}` },
      });
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        config?: MaschinenbauerConfig;
        warning?: string;
        message?: string;
      } | null;
      if (!alive) return;
      if (json?.config) setConfig(json.config);
      if (json?.warning) setMessage(`Using defaults until schema is ready: ${json.warning}`);
      if (!res.ok || json?.ok === false) setError(json?.message || "Failed to load config");
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [supabase]);

  const update = (patch: Partial<MaschinenbauerConfig>) => {
    setConfig((prev) => ({ ...prev, ...patch }));
  };

  const updateCompany = (patch: Partial<MaschinenbauerConfig["company"]>) => {
    setConfig((prev) => ({ ...prev, company: { ...prev.company, ...patch } }));
  };

  const save = async () => {
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token || "";
      const res = await fetch("/api/admin/maschinenbauer", {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(config),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
      if (!res.ok || json?.ok === false) {
        setError(json?.message || "Failed to save config");
      } else {
        setMessage("Maschinenbauer config saved. Live pages revalidated.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-full overflow-y-auto bg-[var(--cf-bg)] px-4 py-5 text-[var(--cf-text)] lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cf-accent)]">
              Maschinenbauer 3.0
            </p>
            <h1 className="mt-2 text-2xl font-bold text-white">Landing & booking config</h1>
            <p className="mt-1 max-w-2xl text-sm text-white/60">
              These controls update the central CTA and company details used by the live
              Maschinenbauer pages. The visual landing itself is the final noll.media frontend.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="/"
              target="_blank"
              className="inline-flex h-10 items-center rounded-xl border border-white/10 px-4 text-sm font-semibold text-white/80 hover:bg-white/10"
            >
              View live page
            </a>
            <Button variant="secondary" className="h-10" onClick={onSignOut}>
              Sign out
            </Button>
          </div>
        </div>

        {loading ? <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">Loading...</div> : null}
        {message ? <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">{message}</div> : null}
        {error ? <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-100">{error}</div> : null}

        <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-bold text-white">Booking CTA</h2>
            <div className="mt-4 grid gap-4">
              <Input
                label="Booking URL"
                value={config.bookingUrl}
                onChange={(e) => update({ bookingUrl: e.target.value })}
                placeholder="https://example.com/booking-placeholder"
              />
              <Input
                label="CTA label"
                value={config.bookingLabel}
                onChange={(e) => update({ bookingLabel: e.target.value })}
              />
              <Input
                label="CTA microcopy"
                value={config.bookingMicrocopy}
                onChange={(e) => update({ bookingMicrocopy: e.target.value })}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-bold text-white">Legal/contact info</h2>
            <div className="mt-4 grid gap-4">
              <Input label="Company" value={config.company.name} onChange={(e) => updateCompany({ name: e.target.value })} />
              <Input label="Phone" value={config.company.phone} onChange={(e) => updateCompany({ phone: e.target.value })} />
              <Input label="Phone href" value={config.company.phoneHref} onChange={(e) => updateCompany({ phoneHref: e.target.value })} />
              <Input label="Email" value={config.company.email} onChange={(e) => updateCompany({ email: e.target.value })} />
              <Input label="Email href" value={config.company.emailHref} onChange={(e) => updateCompany({ emailHref: e.target.value })} />
              <Input label="Street" value={config.company.street} onChange={(e) => updateCompany({ street: e.target.value })} />
              <Input label="City" value={config.company.city} onChange={(e) => updateCompany({ city: e.target.value })} />
              <Input label="Country" value={config.company.country} onChange={(e) => updateCompany({ country: e.target.value })} />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <Button className="h-12 min-w-40" onClick={save} disabled={saving || loading}>
            {saving ? "Saving..." : "Save config"}
          </Button>
        </div>
      </div>
    </div>
  );
}
