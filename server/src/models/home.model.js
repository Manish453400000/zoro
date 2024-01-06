import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({}, { timestamps: true });

export const Home = mongoose.model("Home", homeSchema);
