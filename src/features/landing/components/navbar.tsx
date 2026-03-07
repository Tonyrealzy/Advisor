import { Button } from "@/components/ui/button";
import AppLogo from "@/components/ui/logo";
import { useLogin } from "@/hooks/auth/useLogin";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated } = useLogin();
  const { navigateToDashboard, navigateToLogin, navigateToSignup } =
    useNavigateInApp();

  return (
    <div className="flex items-center w-full h-20 px-6 md:px-8 justify-between border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <AppLogo />

      {isAuthenticated ? (
        <Button
          className="text-sm md:text-base w-48"
          onClick={navigateToDashboard}
        >
          <p>Go to Dashboard</p>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      ) : (
        <section className="flex items-center gap-4">
          <Button
            className="text-sm md:text-base w-24 md:w-28"
            onClick={navigateToLogin}
          >
            Login
          </Button>
          <Button
            className="text-sm md:text-base w-24 md:w-28"
            variant="outline"
            onClick={navigateToSignup}
          >
            Get Started
          </Button>
        </section>
      )}
    </div>
  );
};

export default Navbar;
