export interface Profile {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

export interface User {
  id?: string;
  email: string;
  password: string;
  name: string;
  firstName: string;
  lastName: string;
}

export interface JwtUserPayload {
  id: string;
  email: string;
  name: string;
}