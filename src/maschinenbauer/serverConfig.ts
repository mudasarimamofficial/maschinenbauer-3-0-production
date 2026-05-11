import { createServiceSupabaseClient } from "@/utils/supabase/serviceClient";
import {
  DEFAULT_MASCHINENBAUER_CONFIG,
  type MaschinenbauerConfig,
} from "@/maschinenbauer/lib/config";

function nonEmpty(value: unknown) {
  return typeof value === "string" && value.trim().length ? value.trim() : null;
}

function mergeConfig(raw: unknown): MaschinenbauerConfig {
  const data = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const company = data.company && typeof data.company === "object" ? (data.company as Record<string, unknown>) : {};

  return {
    ...DEFAULT_MASCHINENBAUER_CONFIG,
    bookingUrl: nonEmpty(data.bookingUrl) || DEFAULT_MASCHINENBAUER_CONFIG.bookingUrl,
    bookingLabel: nonEmpty(data.bookingLabel) || DEFAULT_MASCHINENBAUER_CONFIG.bookingLabel,
    bookingMicrocopy: nonEmpty(data.bookingMicrocopy) || DEFAULT_MASCHINENBAUER_CONFIG.bookingMicrocopy,
    company: {
      ...DEFAULT_MASCHINENBAUER_CONFIG.company,
      name: nonEmpty(company.name) || DEFAULT_MASCHINENBAUER_CONFIG.company.name,
      phone: nonEmpty(company.phone) || DEFAULT_MASCHINENBAUER_CONFIG.company.phone,
      phoneHref: nonEmpty(company.phoneHref) || DEFAULT_MASCHINENBAUER_CONFIG.company.phoneHref,
      email: nonEmpty(company.email) || DEFAULT_MASCHINENBAUER_CONFIG.company.email,
      emailHref: nonEmpty(company.emailHref) || DEFAULT_MASCHINENBAUER_CONFIG.company.emailHref,
      street: nonEmpty(company.street) || DEFAULT_MASCHINENBAUER_CONFIG.company.street,
      city: nonEmpty(company.city) || DEFAULT_MASCHINENBAUER_CONFIG.company.city,
      country: nonEmpty(company.country) || DEFAULT_MASCHINENBAUER_CONFIG.company.country,
    },
  };
}

export async function getMaschinenbauerConfig(): Promise<MaschinenbauerConfig> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return DEFAULT_MASCHINENBAUER_CONFIG;
  }

  try {
    const supabase = createServiceSupabaseClient();
    const { data, error } = await supabase
      .from("maschinenbauer_settings")
      .select("config")
      .eq("id", 1)
      .maybeSingle();

    if (error || !data?.config) return DEFAULT_MASCHINENBAUER_CONFIG;
    return mergeConfig(data.config);
  } catch {
    return DEFAULT_MASCHINENBAUER_CONFIG;
  }
}
