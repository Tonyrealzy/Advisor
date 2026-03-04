"use client";

import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";
import { ReactNode, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />

      <div className="flex-1 flex flex-col">
        <Header sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />

        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
