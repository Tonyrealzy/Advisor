import { Button } from "@/components/ui/button";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { ArrowRight } from "lucide-react";

const ScreenOne = () => {
  const { navigateToLogin, navigateToSignup } = useNavigateInApp();

  return (
    <section className="py-32 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
          Smart Investment Recommendations, Tailored for You
        </h1>
        
        <p className="text-xl text-grey mb-8 max-w-2xl mx-auto">
          Make informed investment decisions with personalized recommendations
          based on your financial goals, risk tolerance, and investment
          experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
          <Button
            size="lg"
            onClick={navigateToSignup}
            className="text-base px-12"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={navigateToLogin}
            className="text-base px-12"
          >
            Sign In
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScreenOne;
