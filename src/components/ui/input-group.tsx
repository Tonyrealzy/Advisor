import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PasswordInput from "./password-input";

interface InputGroupProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  hasErrors?: boolean;
  errorMessage?: string;
}

interface PasswordInputGroupProps {
  id: string;
  label: string;
  placeholder?: string;
  visible: boolean;
  required?: boolean;
  hasErrors?: boolean;
  errorMessage?: string;
  setVisible: (v: boolean) => void;
}

export function InputField({
  id,
  label,
  placeholder,
  required,
  hasErrors,
  errorMessage,
}: InputGroupProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id} className="font-bold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>
      <Input
        id={id}
        type="text"
        placeholder={placeholder}
        hasErrors={hasErrors}
        errorMessage={errorMessage}
      />
    </Field>
  );
}

export function NumberInputField({
  id,
  label,
  placeholder,
  required,
  hasErrors,
  errorMessage,
}: InputGroupProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id} className="font-bold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>
      <Input
        id={id}
        type="number"
        placeholder={placeholder}
        hasErrors={hasErrors}
        errorMessage={errorMessage}
      />
    </Field>
  );
}

export function PasswordInputField({
  id,
  label,
  placeholder,
  visible,
  setVisible,
  required,
  hasErrors,
  errorMessage,
}: PasswordInputGroupProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id} className="font-bold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>
      <PasswordInput
        id={id}
        placeholder={placeholder}
        visible={visible}
        setVisible={setVisible}
        hasErrors={hasErrors}
        errorMessage={errorMessage}
      />
    </Field>
  );
}
