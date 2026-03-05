import { User } from "@/types/response/profile";

export const storage = {
  getToken: () => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem("token");
  },

  getUser: () => {
    if (typeof window === "undefined") return null;

    const user = sessionStorage.getItem("user");
    return user ? (JSON.parse(user) as User) : null;
  },

  setAuth: (token: string, user: User) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
  },

  setUser: (user: User) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  },

  setToken: (token: string) => {
    sessionStorage.setItem("token", token);
  },

  clearAuth: () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  },
};
