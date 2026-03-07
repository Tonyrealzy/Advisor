import { Button } from "@/components/ui/button";
import { InputField, PasswordInputField } from "@/components/ui/input-group";
import AppLogo from "@/components/ui/logo";
import { useSignup } from "@/hooks/auth/useSignup";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";

type StepOneProps = {
  setIsSubmitted: (value: boolean) => void;
};
const StepOne = ({ setIsSubmitted }: StepOneProps) => {
  const { navigateToLogin } = useNavigateInApp();
  const {
    register,
    handleSubmit,
    errors,
    isLoading,
    visible,
    setVisible,
    confirmVisible,
    setConfirmVisible,
  } = useSignup({ setIsSubmitted });

  return (
    <div className="w-full h-full p-1 bg-secondary border-none overflow-auto scroll-smooth">
      <aside className="flex flex-col gap-2 md:gap-3 w-full items-center text-center">
        <AppLogo />

        <h1 className="text-xl md:text-2xl text-primary font-bold">
          Create an account
        </h1>
        <p className="text-xs md:text-sm text-grey">
          Get started with personalized investment recommendations
        </p>
      </aside>

      {/* Signup form goes here */}
      <form
        className="flex flex-col gap-3 md:gap-5 py-4"
        onSubmit={handleSubmit}
      >
        <InputField
          id="firstName"
          label="First Name"
          placeholder="Enter your first name"
          hasErrors={!!errors.firstName}
          errorMessage={errors.firstName?.message}
          {...register("firstName")}
        />

        <InputField
          id="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          hasErrors={!!errors.lastName}
          errorMessage={errors.lastName?.message}
          {...register("lastName")}
        />

        <InputField
          id="email"
          label="Email"
          placeholder="Enter your email"
          hasErrors={!!errors.email}
          errorMessage={errors.email?.message}
          {...register("email")}
        />

        <InputField
          id="username"
          label="Username"
          placeholder="Enter your username"
          hasErrors={!!errors.userName}
          errorMessage={errors.userName?.message}
          {...register("userName")}
        />

        <PasswordInputField
          id="password"
          label="Password"
          placeholder="Enter your password"
          visible={visible}
          setVisible={setVisible}
          hasErrors={!!errors.password}
          errorMessage={errors.password?.message}
          {...register("password")}
        />

        <PasswordInputField
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          visible={confirmVisible}
          setVisible={setConfirmVisible}
          hasErrors={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button className="mt-2" type="submit" loading={isLoading}>
          Sign Up
        </Button>

        <aside className="flex flex-col md:flex-row text-xs md:text-sm px-2 items-center justify-between">
          <span className="flex items-center gap-1 text-grey">
            <p>Already have an account? </p>
            <p className="text-blue cursor-pointer" onClick={navigateToLogin}>
              Login
            </p>
          </span>
        </aside>
      </form>
    </div>
  );
};

export default StepOne;
