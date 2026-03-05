"use client";

import { useParams } from "next/navigation";
import { TableResponse } from "@/models/response";
import { mockRecommendations } from "../dashboard/page-data";
import RecommendationView from "./components/recommendation-view";
import { useGetAllRecommendations } from "@/hooks/ai/useGetAllRecommendations";

const DashboardDetailPage = () => {
  const { id } = useParams();
  const {recommendations} = useGetAllRecommendations();
  const response = mockRecommendations.find((rec) => rec.id === Number(id)) as TableResponse;

  return (
    <div className="p-4 md:px-6 space-y-6 max-w-6xl mx-auto">
      <RecommendationView {...response} />
    </div>
  );
};

export default DashboardDetailPage;
