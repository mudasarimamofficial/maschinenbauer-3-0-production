import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";
import { adminJsonError, requireAdmin } from "@/utils/adminApi";
import { DEFAULT_MASCHINENBAUER_CONFIG } from "@/maschinenbauer/lib/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const configSchema = z.object({
  bookingUrl: z.string().url().or(z.string().startsWith("#")),
  bookingLabel: z.string().min(1).max(80),
  bookingMicrocopy: z.string().min(1).max(160),
  company: z.object({
    name: z.string().min(1).max(120),
    phone: z.string().min(1).max(80),
    phoneHref: z.string().min(1).max(140),
    email: z.string().email(),
    emailHref: z.string().min(1).max(180),
    street: z.string().min(1).max(160),
    city: z.string().min(1).max(120),
    country: z.string().min(1).max(120),
  }),
});

function mergeConfig(raw: unknown) {
  const obj = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const company = obj.company && typeof obj.company === "object" ? (obj.company as Record<string, unknown>) : {};

  return {
    ...DEFAULT_MASCHINENBAUER_CONFIG,
    ...obj,
    company: {
      ...DEFAULT_MASCHINENBAUER_CONFIG.company,
      ...company,
    },
  };
}

export async function GET(req: Request) {
  const gate = await requireAdmin(req);
  if (!gate.ok) return adminJsonError(gate);

  const { data, error } = await gate.supabase
    .from("maschinenbauer_settings")
    .select("config")
    .eq("id", 1)
    .maybeSingle();

  if (error) {
    return NextResponse.json(
      { ok: true, config: DEFAULT_MASCHINENBAUER_CONFIG, warning: error.message },
      { status: 200 },
    );
  }

  return NextResponse.json({ ok: true, config: mergeConfig(data?.config) }, { status: 200 });
}

export async function PATCH(req: Request) {
  const gate = await requireAdmin(req);
  if (!gate.ok) return adminJsonError(gate);

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = configSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Invalid Maschinenbauer config" }, { status: 400 });
  }

  const { error } = await gate.supabase
    .from("maschinenbauer_settings")
    .upsert(
      {
        id: 1,
        admin_email: process.env.ADMIN_NOTIFICATION_EMAIL || "mudasarimamofficial@gmail.com",
        config: parsed.data,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    );

  if (error) return NextResponse.json({ ok: false, message: error.message }, { status: 500 });

  revalidatePath("/");
  revalidatePath("/danke");
  revalidatePath("/impressum");
  revalidatePath("/datenschutz");

  return NextResponse.json({ ok: true, config: parsed.data }, { status: 200 });
}
