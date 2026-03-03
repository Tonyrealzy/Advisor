import { TableResponse } from "@/models/response";
import { format } from "date-fns";

export const formatDateTime = (date: any, formatString: any) => {
  if (date === "" || date === "N/A") return "--";
  if (date === null) return "--";
  if (date === undefined) return "--";
  const formattedDate =
    typeof date === "string"
      ? format(new Date(date), formatString)
      : format(date, formatString);
  return formattedDate;
};

export const getStatusColor = (status: TableResponse["status"]) => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-500";
    case "PENDING":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};
