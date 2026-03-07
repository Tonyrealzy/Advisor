import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDateTime, getStatusColor } from "@/utilities/helper";
import { Badge } from "@/components/ui/badge";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import ScrollButtons from "@/components/ui/scroll-buttons";
import { useGetAllRecommendations } from "@/hooks/ai/useGetAllRecommendations";

const ResponseTable = () => {
  const { navigateToTableRowView } = useNavigateInApp();
  const { recommendations, nextPage, previousPage, hasNextPage } = useGetAllRecommendations();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>All Recommendations</CardTitle>
        <CardDescription>
          Click "View More" to see detailed recommendations
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S/N</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Data Summary</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {recommendations && recommendations.length > 0 ? (
                recommendations.map((recommendation, index) => (
                  <TableRow key={recommendation.id}>
                    <TableCell className="font-mono text-sm">
                      {index + 1}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(recommendation.status)}>
                        {recommendation.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {formatDateTime(recommendation.createdAt, "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell className="max-w-md overflow-hidden text-ellipsis whitespace-nowrap">
                      <div className="text-sm text-gray-600">
                        {recommendation.data.recommendations[0].provider} •
                        Product:{" "}
                        {recommendation.data.recommendations[0].financial_product.toLocaleString()}{" "}
                        • Return value:{" "}
                        {
                          recommendation.data.recommendations[0]
                            .estimated_return_value
                        }{" "}
                        •{" "}
                        {
                          recommendation.data.recommendations[0]
                            .brief_description
                        }
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          navigateToTableRowView(recommendation.id)
                        }
                      >
                        <Eye className="h-4 w-4" />
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-8 text-gray-500"
                  >
                    No recommendations found. Create your first inquiry to get
                    started!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell colSpan={4} className="h-12"></TableCell>
                <TableCell>
                  {/* Fix this on fetching API data with pagination */}
                  <ScrollButtons
                    previousPage={previousPage}
                    nextPage={nextPage}
                    page={1}
                    hasNextPage={hasNextPage}
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponseTable;
