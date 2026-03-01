"use client";

import { EnvConfig } from "@/config/env";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function ApiDocs() {
  if (EnvConfig.nodeEnv !== "development") {
    return <SwaggerUI url="/api/docs" />;
  } else {
    return <SwaggerUI url="/swagger.json" />;
  }
}
