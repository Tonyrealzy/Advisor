"use client";

import AuthLoader from "@/components/loaders/auth-loading";
import { useConfirmSignup } from "@/hooks/auth/useSignup";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ConfirmSignupPage = () => {
  const searchParams = useSearchParams();
  const { handleSubmit, isLoading } = useConfirmSignup();

  const email = searchParams.get("email");
  const token = searchParams.get("token");


  useEffect(() => {
    if (email && token) {
      handleSubmit({ email, token });
    }
  }, [email, token]);

  if (isLoading) {
    return <AuthLoader />;
  }

  return null;
};

export default ConfirmSignupPage;
