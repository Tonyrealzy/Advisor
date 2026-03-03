import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-group";
import { ArrowLeft, TrendingUp } from "lucide-react";

const StepOne = () => {
  return (
    <div className="w-full bg-secondary">
      <aside className="flex flex-col gap-2 md:gap-3 w-full items-center text-center">
        <span className="flex items-center justify-center mb-2">
          <TrendingUp className="h-6 md:h-8 w-6 md:w-8 text-blue mr-1 md:mr-2" />
          <h1 className="text-xl md:text-2xl text-primary font-medium">
            Advisor
          </h1>
        </span>

        <h1 className="text-xl md:text-2xl text-primary font-bold">
          Reset Password
        </h1>
        <p className="text-xs md:text-sm text-grey">
          Enter your email address and we'll send you a reset link
        </p>
      </aside>

      {/* Login form goes here */}
      <form className="flex flex-col gap-4 md:gap-6 py-4">
        <InputField id="email" label="Email" placeholder="Enter your email" />

        <Button className="mt-2">Send reset link</Button>

        <aside className="flex flex-col md:flex-row text-xs md:text-sm px-2 items-center justify-center">
          <span className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <p className="text-grey cursor-pointer">Back to login </p>
          </span>
        </aside>
      </form>
    </div>
  );
};

export default StepOne;
