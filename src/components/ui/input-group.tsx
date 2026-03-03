import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PasswordInput from "./password-input";

interface InputGroupProps {
  id: string;
  label: string;
  placeholder?: string;
}

interface PasswordInputGroupProps {
  id: string;
  label: string;
  placeholder?: string;
  visible: boolean;
  setVisible: (v: boolean) => void;
}

export function InputField({ id, label, placeholder }: InputGroupProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id} className="font-bold">{label}</FieldLabel>
      <Input id={id} type="text" placeholder={placeholder} />
    </Field>
  );
}

export function PasswordInputField({
  id,
  label,
  placeholder,
  visible,
  setVisible,
}: PasswordInputGroupProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id} className="font-bold">{label}</FieldLabel>
      <PasswordInput
        id={id}
        placeholder={placeholder}
        visible={visible}
        setVisible={setVisible}
      />
    </Field>
  );
}
