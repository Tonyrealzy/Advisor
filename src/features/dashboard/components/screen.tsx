import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText } from "lucide-react";
import { mockRecommendations } from "./page-data";

const TopScreen = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
        <aside>
          <h1 className="text-3xl font-semibold mb-2">Investment Recommendations</h1>
          <p className="text-gray-600">
            View and manage your personalized investment recommendations
          </p>
        </aside>

        <Button className="w-full md:w-32" onClick={() => {}}>
          <FileText className="mr-2 h-4 w-4" />
          New Inquiry
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Recommendations</CardDescription>
            <CardTitle className="text-3xl">
              {mockRecommendations.length}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Completed</CardDescription>
            <CardTitle className="text-3xl">
              {
                mockRecommendations.filter((r) => r.status === "COMPLETED")
                  .length
              }
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>In Progress</CardDescription>
            <CardTitle className="text-3xl">
              {mockRecommendations.filter((r) => r.status === "PENDING").length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default TopScreen;
