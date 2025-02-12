const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000", 'http://127.0.0.1:8080'], credentials: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
