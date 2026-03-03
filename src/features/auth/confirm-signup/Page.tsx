"use client";

import AppLogo from "@/components/ui/logo";

const ConfirmSignupPage = () => {
  return (
    <div className="w-full bg-secondary">
      <aside className="flex flex-col gap-3 md:gap-4 w-full items-center text-center">
        <AppLogo />
      </aside>

      <section>
        {/* Add the loading state for handling the sign-up confirmation here. You can use a spinner or any loading indicator to show that the confirmation is in progress. Once the confirmation is successful, you can redirect the user to the login page or display a success message. */}
      </section>
    </div>
  );
};

export default ConfirmSignupPage;
