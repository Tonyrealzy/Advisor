"use client";

import { Button } from "@/components/ui/button";
import { InputField, PasswordInputField } from "@/components/ui/input-group";
import AppLogo from "@/components/ui/logo";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";

const LoginPage = () => {
    const { navigateToSignup, navigateToResetPassword } = useNavigateInApp();
  
  return (
    <div className="w-full bg-secondary">
      <aside className="flex flex-col gap-2 md:gap-3 w-full items-center text-center">
        <AppLogo />

        <h1 className="text-xl md:text-2xl text-primary font-bold">
          Welcome back
        </h1>
        <p className="text-xs md:text-sm text-grey">
          Enter your credentials to access your account
        </p>
      </aside>

      {/* Login form goes here */}
      <form className="flex flex-col gap-4 md:gap-6 py-4">
        <InputField id="email" label="Email" placeholder="Enter your email" />
        <PasswordInputField
          id="password"
          label="Password"
          placeholder="Enter your password"
          visible={false}
          setVisible={() => {}}
        />

        <Button className="mt-2">Login</Button>

        <aside className="flex flex-col md:flex-row text-xs md:text-sm px-2 items-center justify-between">
          <span className="flex items-center gap-1">
            <p className="text-grey">Don't have an account? </p>
            <p className="cursor-pointer text-blue" onClick={navigateToSignup}>
              Sign up
            </p>
          </span>

          <p className="text-blue cursor-pointer underline" onClick={navigateToResetPassword}>
            Forgot Password?
          </p>
        </aside>
      </form>
    </div>
  );
};

export default LoginPage;
