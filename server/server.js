import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("hello fuckhead");
});

// starting the server
const start = async () => {
  // connect with database
  app.listen(port, () => {
    console.log(`server listening on http://localhost:port`);
  });
};

start();
