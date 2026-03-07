// components/Providers.tsx
"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

interface ProvidersProps {
  children: ReactNode;
  dehydratedState?: unknown;
}

export function Providers({ children, dehydratedState }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
