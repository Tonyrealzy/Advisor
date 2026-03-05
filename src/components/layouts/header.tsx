"use client";

import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { Button } from "../ui/button";
import { KeyRound, LogOut, Menu } from "lucide-react";
import { profileData } from "./data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useGetProfile } from "@/hooks/profile/useGetProfile";
import { useLogout } from "@/hooks/auth/useLogin";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { navigateToResetPassword } = useNavigateInApp();
  const { profile } = useGetProfile();
  const { handleLogout, isLoading } = useLogout();
  console.log("Profile data in Header:", profile);

  return (
    <div className="sticky top-0 z-40 border-b bg-white p-1">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <div className="flex-1" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                "Logging out..."
              ) : (
                <>
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                    {profileData?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="hidden sm:inline">
                    {profileData?.name
                      ? profileData?.name.toUpperCase()
                      : "USER"}
                  </span>
                </>
              )}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span>
                  {profileData?.name ? profileData?.name.toUpperCase() : "USER"}
                </span>
                <span className="text-sm font-normal text-gray-500">
                  {profileData?.email}
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={navigateToResetPassword}>
              <KeyRound className="mr-2 h-4 w-4" />
              Change Password
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
