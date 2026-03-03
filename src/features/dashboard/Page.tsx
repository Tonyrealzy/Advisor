"use client";

import TopScreen from "./components/screen";
import ResponseTable from "./components/table";

const DashboardPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        <TopScreen/>
      <ResponseTable />
    </div>
  );
};

export default DashboardPage;
