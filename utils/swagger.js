import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Personal Finance Tracker API",
      version: "1.0.0",
      description: "API documentation for our personal finance tracker backend",
    },
    servers: [
      {
        // url:
        //   process.env.NODE_ENV == "developmentt"
        //     ? "http://localhost:3000"
        //     : "https://task-manager-api-05w1.onrender.com/"
        url: "http://localhost:5000"
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
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"], // Where your route files live
};

export const swaggerSpec = swaggerJSDoc(options);
