import express from "express";
import cookieParser  from "cookie-parser";
import dotenv  from "dotenv";
dotenv.config(); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
//   app.use("/api/v1", router);
  
//   app.use(globalErrorHandler);
//   app.use(notFound);
  export default app;