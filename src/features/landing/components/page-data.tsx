import { Shield, Target, Zap } from "lucide-react";

export const recommendations = [
  {
    icon: <Target className="h-6 w-6 text-blue" />,
    title: "Personalized Recommendations",
    description:
      "Get investment advice tailored to your unique financial goals, risk tolerance, and investment horizon.",
  },
  {
    icon: <Shield className="h-6 w-6 text-blue" />,
    title: "Risk Assessment",
    description:
      "Understand your risk profile and receive recommendations that match your comfort level.",
  },
  {
    icon: <Zap className="h-6 w-6 text-blue" />,
    title: "Quick & Easy",
    description:
      "Answer a few simple questions and receive comprehensive investment recommendations instantly.",
  },
];

export const benefits = [
  "Data-driven investment insights",
  "Consider your investment knowledge level",
  "Match recommendations to your purpose",
  "Factor in your investment timeline",
  "Accommodate different currencies",
  "Track all your recommendations in one place",
];

export const actionSteps = [
  {
    id: 1,
    title: "Answer questions",
    description:
      "Tell us about your investment goals, experience, and preferences.",
  },
  {
    id: 2,
    title: "Get Recommendations",
    description:
      "Receive personalized investment recommendations based on your profile.",
  },
  {
    id: 3,
    title: "Track & Review",
    description: "Access all your recommendations anytime from your dashboard.",
  },
];
