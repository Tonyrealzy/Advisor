export interface SignUpRequestModel {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  firstName: string;
  lastName: string;
}

export interface LoginRequestModel {
  email: string;
  password: string;
}

export interface EmailRequestModel {
  email: string;
}

export interface ConfirmSignupRequestModel {
  email: string;
  token: string;
}

export interface ChangePasswordRequestModel {
  password: string;
  confirmPassword: string;
}
