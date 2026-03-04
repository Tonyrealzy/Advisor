import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AIFirstResponse } from "@/models/response";

const InvestmentRationale: React.FC<AIFirstResponse> = ({
  recommendations,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Rationale</CardTitle>
        <CardDescription>
          Why we recommend this portfolio allocation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-gray-700">{recommendation.analysis}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default InvestmentRationale;
