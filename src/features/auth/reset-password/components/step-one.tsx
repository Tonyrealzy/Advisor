import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-group";
import AppLogo from "@/components/ui/logo";
import { useResetPassword } from "@/hooks/auth/useResetPassword";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { ArrowLeft } from "lucide-react";

type StepOneProps = {
  setIsSubmitted: (value: boolean) => void;
};
const StepOne = ({ setIsSubmitted }: StepOneProps) => {
  const { navigateToLogin } = useNavigateInApp();
  const { register, handleSubmit, errors, isLoading } = useResetPassword({ setIsSubmitted });

  return (
    <div className="w-full bg-secondary">
      <aside className="flex flex-col gap-2 md:gap-3 w-full items-center text-center">
        <AppLogo />

        <h1 className="text-xl md:text-2xl text-primary font-bold">
          Reset Password
        </h1>
        <p className="text-xs md:text-sm text-grey">
          Enter your email address and we'll send you a reset link
        </p>
      </aside>

      {/* Login form goes here */}
      <form
        className="flex flex-col gap-4 md:gap-6 py-4"
        onSubmit={handleSubmit}
      >
        <InputField
          id="email"
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
          errorMessage={errors.email?.message}
          hasErrors={!!errors.email}
        />

        <Button className="mt-2" loading={isLoading} type="submit">
          Send reset link
        </Button>

        <aside className="flex flex-col md:flex-row text-xs md:text-sm px-2 items-center justify-center">
          <span className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <p className="text-grey cursor-pointer" onClick={navigateToLogin}>
              Back to login
            </p>
          </span>
        </aside>
      </form>
    </div>
  );
};

export default StepOne;
