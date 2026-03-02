"use client";

import dynamic from "next/dynamic";
// import { EnvConfig } from "@/config/env";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

export default function ApiDocs() {
  return <SwaggerUI url="/swagger.json" />;

  // if (EnvConfig.nodeEnv !== "development") {
  //   return <SwaggerUI url="/api/docs" />;
  // } else {
  //   return <SwaggerUI url="/swagger.json" />;
  // }
}
