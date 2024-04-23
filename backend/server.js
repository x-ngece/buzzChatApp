import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import connectionToMongoDB from "./db/connectionToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes)

// app.get("/", (req, res) => {
     // root route http://localhost:5000
//     res.send("Welcome to the Buzz Chat App!");
// });

app.listen(PORT, () => {
    connectionToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});