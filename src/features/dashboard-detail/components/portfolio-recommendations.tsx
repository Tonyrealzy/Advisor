import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AIFirstResponse } from "@/models/response";
import React from "react";

const PortfolioRecommendations: React.FC<AIFirstResponse> = ({
  recommendations,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Recommendations</CardTitle>
        <CardDescription>
          Recommended asset allocation based on your profile
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
            >
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2">
                <p className="text-base md:text-lg">
                  {rec.composition}%{" - "}
                  {rec.financial_product}
                </p>
                <p className="text-base md:text-lg">
                  {"("}
                  {rec.ticker}
                  {" by "} {rec.provider}
                  {")"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioRecommendations;
