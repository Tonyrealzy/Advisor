import { FileText, LayoutDashboard } from "lucide-react";

export const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  {
    name: "New Inquiry",
    href: "/dashboard/recommendations/new",
    icon: FileText,
  },
];

export const profileData = {
  name: "johndoe",
  email: "user@example.com",
  firstName: "John",
  lastName: "Doe",
  isActive: true,
};
