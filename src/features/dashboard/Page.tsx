"use client";

import { useGetAllRecommendations } from "@/hooks/ai/useGetAllRecommendations";
import TopScreen from "./components/screen";
import ResponseTable from "./components/table";
import AuthLoader from "@/components/loaders/loading";

const DashboardPage = () => {
  const { isLoading } = useGetAllRecommendations();

  if (isLoading) {
    return <AuthLoader />;
  }

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-xs [min-width:400px]:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto">
      <TopScreen />
      <ResponseTable />
    </div>
  );
};

export default DashboardPage;
