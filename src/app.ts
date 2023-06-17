import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import httpStatus from "http-status";
import routers from "../src/app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// All Routes
app.use("/api/v1", routers);

// Global Error Handler
app.use(globalErrorHandler);

// Handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
  next();
});

export default app;
