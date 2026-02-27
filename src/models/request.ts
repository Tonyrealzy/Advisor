export interface AIServiceRequest {
  age: number;
  location: string;
  investmentKnowledge: string;
  investmentPurpose: string;
  investmentHorizon: number;
  riskTolerance: string;
  amount: number;
  currency: string;
}

export interface SignUp {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
}

export interface SendOtpRequest {
  email: string;
  name: string;
  resetLink: string;
}