import swaggerJSDoc from "swagger-jsdoc";
import fs from "fs";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Advisor API",
      version: "1.0.0",
      description: "API documentation for the Advisor backend API service",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
      {
        url: "https://advisor-blush.vercel.app",
        description: "Staging server",
      },
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
  apis: ["./app/api/**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);

const outputPath = path.join(process.cwd(), "public", "swagger.json");

fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));

console.log("Swagger JSON generated at public/swagger.json");
