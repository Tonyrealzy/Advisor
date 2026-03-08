"use client";

import { ProfileApi } from "@/lib/api/profile";
import { storage } from "@/lib/session";
import { User } from "@/types/response/profile";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
  const userProfile = storage.getUser();

  const { data, isLoading: profileLoading } = useQuery({
    queryKey: ["user-profile"],
    retry: 1,
    queryFn: async () => {
      const response = await ProfileApi.getProfile();
      if (response?.success === true) {
        const user = response?.response.user as User;
        storage.setUser(user);
        return user;
      }

      const error = response.error || "Failed to fetch profile";
      throw new Error(error);
    },
  });

  const { data: apiHealth, isLoading } = useQuery({
    queryKey: ["api-health"],
    retry: 1,
    queryFn: async () => {
      const response = await ProfileApi.getApiHealth();
      if (response?.success === true) {
        return response;
      }

      const error = response.error || "Failed to fetch API health";
      throw new Error(error);
    },
  });

  return { apiHealth, isLoading, profile: data || userProfile, profileLoading };
};
