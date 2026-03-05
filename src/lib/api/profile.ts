import authAxiosInstance from "../auth-axios";
import axiosInstance from "../axios";

export const ProfileApi = {
  getProfile: async () => {
    try {
      const response = await authAxiosInstance.get("/profile");
      return response;
    } catch (error: any) {
      return error;
    }
  },

  getApiHealth: async () => {
    try {
      const response = await axiosInstance.get("/health");
      return response;
    } catch (error: any) {
      return error;
    }
  },
};
