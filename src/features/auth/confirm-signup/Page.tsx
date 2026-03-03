"use client";

import { TrendingUp } from "lucide-react";

const ConfirmSignupPage = () => {
  return (
    <div className="w-full bg-secondary">
      <aside className="flex flex-col gap-3 md:gap-4 w-full items-center text-center">
        <span className="flex items-center justify-center mb-2">
          <TrendingUp className="h-6 md:h-8 w-6 md:w-8 text-blue mr-1 md:mr-2" />
          <h1 className="text-xl md:text-2xl text-primary font-medium">
            Advisor
          </h1>
        </span>
      </aside>

      <section>
        {/* Add the loading state for handling the sign-up confirmation here. You can use a spinner or any loading indicator to show that the confirmation is in progress. Once the confirmation is successful, you can redirect the user to the login page or display a success message. */}
      </section>
    </div>
  );
};

export default ConfirmSignupPage;
