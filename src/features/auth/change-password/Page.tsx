"use client";

import { Button } from "@/components/ui/button";
import { PasswordInputField } from "@/components/ui/input-group";
import AppLogo from "@/components/ui/logo";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { ArrowLeft } from "lucide-react";

const ChangePasswordPage = () => {
  const { navigateToLogin } = useNavigateInApp();

  return (
    <div className="w-full bg-secondary">
      <aside className="flex flex-col gap-3 md:gap-4 w-full items-center text-center">
        <AppLogo />

        <h1 className="text-xl md:text-2xl text-primary font-bold">
          Change Password
        </h1>
        <p className="text-xs md:text-sm text-grey">
          Enter your new password below to regain access to your account
        </p>
      </aside>

      {/* Login form goes here */}
      <form className="flex flex-col gap-4 md:gap-6 py-4">
        <PasswordInputField
          id="password"
          label="Password"
          placeholder="Enter your password"
          visible={false}
          setVisible={() => {}}
        />
        <PasswordInputField
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          visible={false}
          setVisible={() => {}}
        />

        <Button className="mt-2">Change Password</Button>

        <aside className="flex flex-col md:flex-row text-xs md:text-sm px-2 items-center justify-center">
          <span className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <p className="text-grey cursor-pointer" onClick={navigateToLogin}>
              Back to login
            </p>
          </span>
        </aside>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
