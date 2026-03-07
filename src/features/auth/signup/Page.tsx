"use client";

import { useState } from "react";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";

const SignupPage = () => {
 const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return <StepTwo />;
  }

  return <StepOne setIsSubmitted={setIsSubmitted} />;
};

export default SignupPage;
