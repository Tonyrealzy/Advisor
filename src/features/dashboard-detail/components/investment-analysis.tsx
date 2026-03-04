import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AIServiceRequest } from "@/models/request";
import React from "react";

const InvestmentAnalysis: React.FC<AIServiceRequest> = ({
  investmentHorizon,
  riskTolerance,
  investmentPurpose,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Analysis</CardTitle>
        <CardDescription>
          Our assessment of your investment profile
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed">
          Based on your {riskTolerance} risk tolerance and {investmentHorizon}
          -year investment horizon for {investmentPurpose}, we recommend a
          balanced portfolio with a tilt towards equity index funds for growth
          potential while maintaining stability through bonds.
        </p>
      </CardContent>
    </Card>
  );
};

export default InvestmentAnalysis;
