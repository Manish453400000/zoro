import dotenv from "dotenv";

import { app } from "./app.js";
import { connectDB } from "./db/connectDB.js";

dotenv.config({
    path: "./.env",
});
const port = process.env.PORT || 8000;

// starting the server
const start = async () => {
    try {
        const db = await connectDB(`${process.env.MONGO_URI}/${"zoro"}`);
        app.listen(port, () => {
            console.log(`server listening on http://localhost:${port}`);
        });
    } catch (e) {
        console.log("Server is not running");
    }
};

start();
