import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { benefits } from "../components/page-data";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";

const ScreenThree = () => {
  const { navigateToSignup } = useNavigateInApp();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl mb-6">
              Comprehensive Analysis for Better Decisions
            </h2>
            <p className="text-lg text-grey mb-8">
              Our platform analyzes multiple factors including your age,
              location, investment knowledge, purpose, and risk tolerance to
              provide recommendations that truly fit your needs.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-linear-to-br from-blue-600 to-indigo-700 text-white border-0">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-6xl">📊</div>
                <h3 className="text-2xl">Ready to get started?</h3>
                <p className="text-blue-100">
                  Join thousands of investors who trust Advisor for their
                  investment recommendations.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={navigateToSignup}
                  className="w-full"
                >
                  Create Free Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScreenThree;
