import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 120000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response.data);
  },
);

export default axiosInstance;
