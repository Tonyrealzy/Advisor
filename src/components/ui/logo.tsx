import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { TrendingUp } from "lucide-react";

const AppLogo = () => {
  const { navigateToHomeWithCondition } = useNavigateInApp();

  return (
    <div
      className="flex items-center justify-center mb-2 cursor-pointer"
      onClick={navigateToHomeWithCondition}
    >
      <TrendingUp className="h-6 md:h-8 w-6 md:w-8 text-blue mr-1 md:mr-2" />
      <h1 className="text-xl md:text-2xl text-primary font-medium">Advisor</h1>
    </div>
  );
};

export default AppLogo;
