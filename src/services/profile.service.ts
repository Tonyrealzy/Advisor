import { getUserByEmail } from "@/repository/user";

export const ProfileService = {
  getProfile: async (email: string) => {
    const existingUser = await getUserByEmail(email);

    const user = {
      name: existingUser.name,
      email: existingUser.email,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      isActive: existingUser.isActive,
    };

    return { message: "Action successful", user };
  },
};
