"use client";

import { useState } from "react";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";

const ResetPasswordPage = () => {
 const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return <StepTwo />;
  } else {
    return <StepOne setIsSubmitted={setIsSubmitted} />;
  }
};

export default ResetPasswordPage;
