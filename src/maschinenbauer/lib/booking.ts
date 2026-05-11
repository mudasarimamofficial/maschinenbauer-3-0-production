"use client";

import { createContext, createElement, useContext, type ReactNode } from "react";
import {
  DEFAULT_COMPANY,
  DEFAULT_MASCHINENBAUER_CONFIG,
  type MaschinenbauerConfig,
} from "@/maschinenbauer/lib/config";

export {
  BOOKING_LABEL,
  BOOKING_MICROCOPY,
  BOOKING_URL,
  COMPANY,
  DEFAULT_COMPANY,
  DEFAULT_MASCHINENBAUER_CONFIG,
} from "@/maschinenbauer/lib/config";
export type { MaschinenbauerConfig };

const MaschinenbauerConfigContext = createContext<MaschinenbauerConfig>(DEFAULT_MASCHINENBAUER_CONFIG);

export function MaschinenbauerConfigProvider({
  config,
  children,
}: {
  config: Partial<MaschinenbauerConfig> | null;
  children: ReactNode;
}) {
  const merged: MaschinenbauerConfig = {
    ...DEFAULT_MASCHINENBAUER_CONFIG,
    ...(config || {}),
    company: {
      ...DEFAULT_COMPANY,
      ...((config?.company || {}) as Partial<typeof DEFAULT_COMPANY>),
    },
  };

  return createElement(MaschinenbauerConfigContext.Provider, { value: merged }, children);
}

export function useMaschinenbauerConfig() {
  return useContext(MaschinenbauerConfigContext);
}
