import AppLogo from "@/components/ui/logo";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t bg-white py-12 px-4 sm:px-6 lg:px-8">
      <AppLogo />

      <div className="flex items-center justify-center gap-2 mb-4"></div>

      <p className="text-grey text-center text-sm">
        &copy; 2026 Advisor. Empowering smart investment decisions.
      </p>
    </div>
  );
};

export default Footer;
