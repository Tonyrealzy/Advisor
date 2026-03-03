import { EyeIcon, EyeOffIcon } from "lucide-react";
import React from "react";
import { Input } from "./input";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  hasErrors?: boolean;
  errorMessage?: string;
  visible: boolean;
  setVisible: (v: boolean) => void;
};

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      visible,
      setVisible,
      placeholder,
      hasErrors,
      errorMessage,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className="w-full relative cursor-pointer">
        <Input
          type={visible ? "text" : "password"}
          name="password"
          placeholder={placeholder}
          className={`pr-10`}
          hasErrors={hasErrors}
          errorMessage={errorMessage}
          ref={ref}
          {...inputProps}
        />
        <span
          className="absolute top-[35%] right-4"
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <EyeIcon className="h-4" />
          ) : (
            <EyeOffIcon className="h-4" />
          )}
        </span>
      </div>
    );
  }
);

export default PasswordInput;
