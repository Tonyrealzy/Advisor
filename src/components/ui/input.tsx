import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  hasErrors?: boolean;
  errorMessage?: string;
}

function Input({
  className,
  type,
  hasErrors,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <div className="w-full flex flex-col">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-xs shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-xs file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-85 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          hasErrors &&
            "border-destructive ring-destructive/20 focus-visible:border-destructive focus-visible:ring-destructive/40",
          className,
        )}
        {...props}
      />
      {hasErrors && errorMessage && (
        <p className="text-destructive text-[8px] lg:text-[10px] pt-px font-light text-start wrap-break-word">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export { Input };
