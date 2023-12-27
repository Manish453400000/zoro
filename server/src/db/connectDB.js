import mongoose from "mongoose";

export const connectDB = async (MONGO_URI) => {
  return mongoose
    .connect(MONGO_URI)
    .then((res) => {
      console.log("CONNECTED TO DB...");
    })
    .catch((err) => {
      console.log("SOMTHING WENT WRONG WHILE CONNECTING TO DB..", err);
    });
};
