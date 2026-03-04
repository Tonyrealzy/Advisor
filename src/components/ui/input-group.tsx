import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PasswordInput from "./password-input";

interface InputGroupProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

interface PasswordInputGroupProps {
  id: string;
  label: string;
  placeholder?: string;
  visible: boolean;
  required?: boolean;
  setVisible: (v: boolean) => void;
}

export function InputField({
  id,
  label,
  placeholder,
  required,
}: InputGroupProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id} className="font-bold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>
      <Input id={id} type="text" placeholder={placeholder} />
    </Field>
  );
}

export function NumberInputField({
  id,
  label,
  placeholder,
  required,
}: InputGroupProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id} className="font-bold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>
      <Input id={id} type="number" placeholder={placeholder} />
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
      />
    </Field>
  );
}
