"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import InquiryForm from "./components/Form";

const DashboardNewPage = () => {
  const { navigateToDashboard } = useNavigateInApp();
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="w-full">
        <Button variant="ghost" onClick={navigateToDashboard} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <h1 className="text-3xl mb-2">New Investment Inquiry</h1>
        <p className="text-gray-600">
          Answer the following questions to receive personalized investment
          recommendations
        </p>
      </div>

      <InquiryForm />

      {/* Information Card */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> The information you provide will be used to
            generate personalized investment recommendations. All data is
            processed securely and confidentially. Your recommendations will be
            available in your dashboard once processed.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardNewPage;
