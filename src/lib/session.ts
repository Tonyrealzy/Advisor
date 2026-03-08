import { User } from "@/types/response/profile";

export const storage = {
  getToken: () => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem("token");
  },

  getUser: () => {
    if (typeof window === "undefined") return null;

    const user = sessionStorage.getItem("user");
    
    return user !== null && user !== undefined
      ? (JSON.parse(user) as User)
      : ({
          name: "User",
          email: "",
          firstName: "Unknown",
          lastName: "User",
          isActive: false,
        } as User);
  },

  getEmail: () => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem("email");
  },

  setAuth: (token: string, user: User) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
  },

  setUser: (user: User) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  },

  setEmail: (email: string) => {
    sessionStorage.setItem("email", email);
  },

  setToken: (token: string) => {
    sessionStorage.setItem("token", token);
  },

  clearEmail: () => {
    sessionStorage.removeItem("email");
  },

  clearAuth: () => {
    sessionStorage.clear();
  },
};
