import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { notFoundRoute } from "./app/error/notFoundRoute";
import router from "./app/router";
import { globalErrorHandler } from "./app/error/globalErrorHandler";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

  app.use("/api", router);

app.use(globalErrorHandler);
app.use(notFoundRoute);
export default app;
