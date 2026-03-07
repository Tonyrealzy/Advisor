"use client";

import { useEffect } from "react";
import disableDevtool from "disable-devtool";
import { EnvConfig } from "@/config/env";

export default function DevtoolGuard() {
    
  useEffect(() => {
    if (EnvConfig.nextEnvironment !== "development") {
      disableDevtool();
    }
  }, []);

  return null;
}
