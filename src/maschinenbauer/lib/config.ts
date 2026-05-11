export const DEFAULT_COMPANY = {
  name: "noll.media",
  phone: "+49 2602 9191 500",
  phoneHref: "tel:+4926029191500",
  email: "hallo@noll.media",
  emailHref: "mailto:hallo@noll.media",
  street: "Rudolf-Diesel-Straße 6",
  city: "56410 Montabaur",
  country: "Deutschland",
};

export type MaschinenbauerConfig = {
  bookingUrl: string;
  bookingLabel: string;
  bookingMicrocopy: string;
  company: typeof DEFAULT_COMPANY;
};

export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "https://example.com/booking-placeholder";
export const BOOKING_LABEL = "Erstgespräch buchen";
export const BOOKING_MICROCOPY = "Kostenlos · unverbindlich · 20 Minuten Klarheit";
export const COMPANY = DEFAULT_COMPANY;

export const DEFAULT_MASCHINENBAUER_CONFIG: MaschinenbauerConfig = {
  bookingUrl: BOOKING_URL,
  bookingLabel: BOOKING_LABEL,
  bookingMicrocopy: BOOKING_MICROCOPY,
  company: DEFAULT_COMPANY,
};
