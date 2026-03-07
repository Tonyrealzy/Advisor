'use client'

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

export function GlobalErrorProvider({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
