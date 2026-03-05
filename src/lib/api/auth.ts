import authAxiosInstance from "../auth-axios";
import axiosInstance from "../axios";

export const AuthApi = {
  signup: async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    userName: string,
  ) => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        email,
        password,
        firstName,
        lastName,
        userName,
      });
      return response.data;
    } catch (error: any) {
      return error;
    }
  },

  confirmSignup: async (email: string, token: string) => {
    try {
      const response = await axiosInstance.post("/auth/confirm-signup", {
        email,
        token,
      });
      return response.data;
    } catch (error: any) {
      return error;
    }
  },

  login: async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      return error;
    }
  },

  logout: async (email: string) => {
    try {
      const response = await authAxiosInstance.post("/auth/logout", {
        email,
      });
      return response.data;
    } catch (error: any) {
      return error;
    }
  },

  resetPassword: async (email: string) => {
    try {
      const response = await axiosInstance.post("/auth/password-reset", {
        email,
      });
      return response.data;
    } catch (error: any) {
      return error;
    }
  },

  resendLink: async (email: string) => {
    try {
      const response = await axiosInstance.post("/auth/resend-link", {
        email,
      });
      return response.data;
    } catch (error: any) {
      return error;
    }
  },
  
  changePassword: async (token: string, newPassword: string) => {
    try {
      const response = await axiosInstance.post("/auth/change-password", {
        token,
        newPassword,
      });
      return response.data;
    } catch (error: any) {
      return error;
    }
  },
};
