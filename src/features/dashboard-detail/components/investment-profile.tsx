import {
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  MapPin,
  Target,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { AIServiceRequest } from "@/models/request";

const InvestmentProfile: React.FC<AIServiceRequest> = ({
  age,
  location,
  investmentKnowledge,
  investmentPurpose,
  investmentHorizon,
  riskTolerance,
  currency,
  amount,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Profile</CardTitle>
        <CardDescription>
          Your investment parameters and preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Age</p>
              <p className="text-lg">{age ? `${age} years` : "N/A"}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-lg">{location ? location : "N/A"}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Investment Knowledge</p>
              <p className="text-lg">
                {investmentKnowledge
                  ? investmentKnowledge.toUpperCase()
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Investment Purpose</p>
              <p className="text-lg">{investmentPurpose ? investmentPurpose : "N/A"}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Investment Horizon</p>
              <p className="text-lg">
                {investmentHorizon ? `${investmentHorizon} years` : "N/A"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Risk Tolerance</p>
              <p className="text-lg">
                {riskTolerance ? riskTolerance.toUpperCase() : "N/A"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Investment Amount</p>
              <p className="text-lg">
                {currency} {amount.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentProfile;
