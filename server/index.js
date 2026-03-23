import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import dns from "dns";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();

app.use(  // telling to the backend to allow only this frontend to connect 
  cors({
    origin: "http://localhost:5173",
    credentials: true,      // mandatory for cookies and session 
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());  // telling to the backend to allow json
app.use(cookieParser());  // telling to the backend to allow cookies

// defining the route to handle the request on the specific path 
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "hello backend is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
