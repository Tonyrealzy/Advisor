import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { TableResponse } from "@/models/response";
import { formatDateTime, getStatusColor } from "@/utilities/helper";
import { ArrowLeft } from "lucide-react";
import React from "react";
import InvestmentProfile from "./investment-profile";
import PortfolioRecommendations from "./portfolio-recommendations";
import InvestmentRationale from "./investment-rationale";
import InvestmentAnalysis from "./investment-analysis";

const RecommendationView: React.FC<TableResponse> = ({
  query,
  data,
  id,
  status,
  createdAt,
}) => {
  const { navigateToDashboard } = useNavigateInApp();
  if (!id || !data) {
    return (
      <div className="p-4 lg:p-6">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Recommendation not found
            </p>
            <Button onClick={navigateToDashboard}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Button
            variant="ghost"
            onClick={navigateToDashboard}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <div className="flex items-center gap-3 mb-2">
            <Badge className={getStatusColor(status)}>{status}</Badge>
          </div>
          <p className="text-gray-600">
            Created on {formatDateTime(createdAt, "MMMM dd, yyyy")}
          </p>
        </div>
      </div>

      {/* Investment Profile */}
      <InvestmentProfile {...query} />

      {/* Analysis */}
      <InvestmentAnalysis {...query} />

      {/* Recommendations */}
      <PortfolioRecommendations {...data} />

      {/* Rationale */}
      <InvestmentRationale {...data} />
     

      {/* Disclaimer */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="p-6">
          <p className="text-sm text-gray-700">
            <strong>Disclaimer:</strong> These recommendations are for
            informational purposes only and should not be considered as
            financial advice. Please consult with a licensed financial advisor
            before making any investment decisions. Past performance does not
            guarantee future results.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendationView;
