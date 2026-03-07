import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { LoginRequestModel } from "@/types/request/auth";
import { loginRequestSchema } from "@/types/validations/auth";
import { AuthApi } from "@/lib/api/auth";
import { LoginResponse, LogoutResponse } from "@/types/response/auth";
import { consoleLog } from "@/utilities/console-logger";
import { useGetProfile } from "../profile/useGetProfile";
import { useNavigateInApp } from "../useNavigateInApp";
import { storage } from "@/lib/session";
import { encryptData } from "@/utilities/encryption";

export const useLogin = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { navigateToDashboard } = useNavigateInApp();
  const token = storage.getToken();
  const isAuthenticated = !!token;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequestModel>({ resolver: yupResolver(loginRequestSchema) });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequestModel) => {
      setLoading(true);
      const response = await AuthApi.login(data.email, data.password);
      if (response?.success === true) {
        return response?.response as LoginResponse;
      } else {
        throw new Error(response?.error || "Login failed");
      }
    },
    onSuccess: (data: LoginResponse) => {
      const accessToken = data?.token;
      const user = data?.user;
      storage.setAuth(encryptData(accessToken), user);
      navigateToDashboard();
      setLoading(false);
    },
    onError: (error: any) => {
      toast.error(error.message || "Login failed");
      consoleLog(error);
      setLoading(false);
    },
  });

  const onSubmit = (formData: LoginRequestModel) => {
    loginMutation.mutate(formData);
  };

  return {
    visible,
    setVisible,
    register,
    errors,
    isAuthenticated,
    handleSubmit: handleSubmit(onSubmit),
    isLoading: loginMutation.isPending || isSubmitting || loading,
  };
};

export const useLogout = () => {
  const { navigateToHome } = useNavigateInApp();
  const { profile } = useGetProfile();
  const [loading, setLoading] = useState(false);
  const email = profile?.email || "";

  const logoutMutation = useMutation({
    mutationFn: async () => {
      setLoading(true);
      const response = await AuthApi.logout(email);
      if (response?.success === true) {
        return response.response as LogoutResponse;
      } else {
        throw new Error(response?.error || "Logout failed");
      }
    },
    onSuccess: (data: LogoutResponse) => {
      setTimeout(() => {
        navigateToHome();
        toast.success(data.message || "Logout successful!");
        storage.clearAuth();
        setLoading(false);
      }, 500);
    },
    onError: (error: any) => {
      setLoading(false);
      toast.error(error.message || "Logout failed");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return {
    handleLogout,
    isLoading: logoutMutation.isPending || loading,
  };
};
