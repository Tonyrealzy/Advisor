"use client";

import TopScreen from "./components/screen";
import ResponseTable from "./components/table";

const DashboardPage = () => {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-md md:max-w-6xl mx-auto">
      <TopScreen />
      <ResponseTable />
    </div>
  );
};

export default DashboardPage;
