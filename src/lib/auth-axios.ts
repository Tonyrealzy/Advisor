import { decryptData } from "@/utilities/encryption";
import axios from "axios";
import { storage } from "./session";

export const authAxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 120000,
});

authAxiosInstance.interceptors.request.use((config) => {
  const token = storage.getToken();
  const accessToken = token ? decryptData(token) : null;
  if (accessToken) {
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});

authAxiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response.data);
  },
);

export default authAxiosInstance;
