import { Button } from "@/components/ui/button";
import AppLogo from "@/components/ui/logo";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";

const StepTwo = () => {
  const { navigateToLogin } = useNavigateInApp();

  return (
    <div className="w-full bg-secondary">
      <aside className="flex flex-col gap-3 md:gap-5 w-full items-center text-center">
        <AppLogo />

        <h1 className="text-[27px] md:text-[32px] text-primary font-bold">
          Check your email
        </h1>

        <p className="text-sm md:text-base text-grey">
          We have sent a password reset link to your email address. Please check
          your inbox and follow the instructions to reset your password.
        </p>
      </aside>

      {/* Login form goes here */}
      <section className="flex flex-col gap-4 md:gap-6 py-4">
        <Button className="mt-4" onClick={navigateToLogin}>
          Back to login
        </Button>

        <aside className="flex flex-col md:flex-row text-xs md:text-sm px-2 items-center justify-center">
          <span className="flex items-center gap-1 text-grey">
            <p>Didn't receive the email? </p>
            <p className="text-blue cursor-pointer underline">Resend</p>
          </span>
        </aside>
      </section>
    </div>
  );
};

export default StepTwo;
