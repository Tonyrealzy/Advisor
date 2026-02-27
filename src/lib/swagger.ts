import { EnvConfig } from "@/config/env";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Next-Advisor API",
      version: "1.0.0",
      description: "API documentation for Next-Advisor backend API service",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
      //   {
      //     url: "https://next-advisor-backend.onrender.com",
      //     description: "Staging server",
      //   }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  // where your routes are defined
  apis: ["./src/app/api/**/*.ts"],
  // EnvConfig.nodeEnv !== "development"
  //   ? [
  //       path.join(__dirname, "./src/app/api/**/*.js"),
  //       path.join(__dirname, "./src/static/*.js"),
  //     ]
  //   : [
  //       path.join(__dirname, "./src/app/api/**/*.ts"),
  //       path.join(__dirname, "./src/static/*.ts"),
  //     ],
};

export const swaggerSpec = swaggerJSDoc(options);
