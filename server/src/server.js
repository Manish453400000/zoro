import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import { userRouter } from "./routes/routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// routes
app.get("/", (req, res) => {
  res.send("hello fuckhead");
});
app.use("/api/v1/user", userRouter);

// starting the server
const start = async () => {
  try {
    await connectDB(`${process.env.MONGO_URI}/${"zoro"}`);
    app.listen(port, () => {
      console.log(`server listening on http://localhost:${port}`);
    });
  } catch (e) {
    console.log("Server is not running");
  }
};

start();
