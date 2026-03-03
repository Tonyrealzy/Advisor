import { useRouter } from "next/navigation";

export const useNavigateInApp = () => {
  const router = useRouter();

  // AuthRoutes
  const navigateToHome = () => router.replace("/");
  const navigateToLogin = () => router.replace("/login");
  const navigateToSignup = () => router.replace("/signup");
  const navigateToConfirmSignup = () => router.replace("/confirm");
  const navigateToResetPassword = () => router.replace("/reset-password");
  const navigateToPasswordReset = () => router.replace("/password-reset");

  // Logged-in Routes
  const navigateToDashboard = () => router.replace("/dashboard");
  const navigateToNewInquiry = () => router.replace("/dashboard/new");

  return {
    navigateToHome,
    navigateToLogin,
    navigateToSignup,
    navigateToConfirmSignup,
    navigateToResetPassword,
    navigateToPasswordReset,
    navigateToDashboard,
    navigateToNewInquiry,
  };
};
