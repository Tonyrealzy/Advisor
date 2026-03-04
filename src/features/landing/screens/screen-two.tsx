import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { recommendations } from "../components/page-data";

const ScreenTwo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Why Choose Advisor?</h2>
          <p className="text-xl text-grey max-w-2xl mx-auto">
            We help you make confident investment decisions with data-driven
            insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((feature, index) => (
            <Card key={index} className="cursor-pointer">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenTwo;
