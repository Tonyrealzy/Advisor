import { Button } from "@/components/ui/button";
import AppLogo from "@/components/ui/logo";
import { useResendSignupLink } from "@/hooks/auth/useResendLink";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { storage } from "@/lib/session";

const StepTwo = () => {
  const email = storage.getEmail();

  const { navigateToLogin } = useNavigateInApp();
  const { handleSubmit, isLoading } = useResendSignupLink();

  return (
    <div className="w-full bg-secondary">
      <aside className="flex flex-col gap-3 md:gap-5 w-full items-center text-center">
        <AppLogo />

        <h1 className="text-[27px] md:text-[32px] text-primary font-bold">
          Check your email
        </h1>

        <p className="text-sm md:text-base text-grey">
          We have sent a link to your email address for account confirmation.
          Please check your inbox and follow the instructions to confirm your
          account.
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
            <Button
              className="text-blue cursor-pointer underline w-fit pl-0"
              disabled={isLoading}
              variant="link"
              onClick={() => handleSubmit({ email: email || "" })}
            >
              {isLoading ? "Resending" : "Resend"}
            </Button>
          </span>
        </aside>
      </section>
    </div>
  );
};

export default StepTwo;
