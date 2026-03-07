export interface RecommendationRequest {
  age: number;
  location: string;
  investmentKnowledge: "beginner" | "intermediate" | "advanced";
  investmentPurpose: string;
  investmentHorizon: number;
  riskTolerance: "low" | "medium" | "high";
  amount: number;
  currency: string;
}
