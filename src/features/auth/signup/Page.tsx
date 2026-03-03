"use client";

import { Button } from "@/components/ui/button";
import { InputField, PasswordInputField } from "@/components/ui/input-group";
import AppLogo from "@/components/ui/logo";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";

const SignupPage = () => {
  const { navigateToLogin } = useNavigateInApp();

  return (
    <div className="w-full h-full p-1 bg-secondary border-none overflow-auto scroll-smooth">
      <aside className="flex flex-col gap-2 md:gap-3 w-full items-center text-center">
        <AppLogo />

        <h1 className="text-xl md:text-2xl text-primary font-bold">
          Create an account
        </h1>
        <p className="text-xs md:text-sm text-grey">
          Get started with personalized investment recommendations
        </p>
      </aside>

      {/* Signup form goes here */}
      <form className="flex flex-col gap-3 md:gap-5 py-4">
        <InputField
          id="firstName"
          label="First Name"
          placeholder="Enter your first name"
        />
        <InputField
          id="lastName"
          label="Last Name"
          placeholder="Enter your last name"
        />
        <InputField id="email" label="Email" placeholder="Enter your email" />
        <InputField
          id="username"
          label="Username"
          placeholder="Enter your username"
        />
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

        <Button className="mt-2">Sign Up</Button>

        <aside className="flex flex-col md:flex-row text-xs md:text-sm px-2 items-center justify-between">
          <span className="flex items-center gap-1 text-grey">
            <p>Already have an account? </p>
            <p className="text-blue cursor-pointer" onClick={navigateToLogin}>
              Login
            </p>
          </span>
        </aside>
      </form>
    </div>
  );
};

export default SignupPage;
