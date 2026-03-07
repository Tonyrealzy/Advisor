"use client";

import { useParams } from "next/navigation";
import { TableResponse } from "@/models/response";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import RecommendationView from "./components/recommendation-view";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { useGetAllRecommendations } from "@/hooks/ai/useGetAllRecommendations";
import { Button } from "@/components/ui/button";
import AuthLoader from "@/components/loaders/auth-loading";

const DashboardDetailPage = () => {
  const { id } = useParams();
  const { navigateToDashboard } = useNavigateInApp();
  const { recommendations, isLoading } = useGetAllRecommendations();
  const response =
    recommendations &&
    (recommendations.find((rec) => rec.id === Number(id)) as TableResponse);

  if (isLoading) {
    return <AuthLoader />;
  }

  return (
    <div className="p-4 md:px-6 space-y-6 max-w-6xl mx-auto">
      {response ? (
        <RecommendationView {...response} />
      ) : (
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
      )}
    </div>
  );
};

export default DashboardDetailPage;
