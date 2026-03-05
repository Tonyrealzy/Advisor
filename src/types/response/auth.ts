import { User } from "./profile";

export interface LoginResponse {
    user: User;
    token: string;
    message: string;
}