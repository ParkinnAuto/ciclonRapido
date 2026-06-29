import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import postRoutes from "./routes/postRoutes";
import driversRoutes from "./routes/driversRoutes"
import carsRoutes from "./routes/carsRoutes"
import authRoutes from "./routes/authRoutes"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ connect DB
connectDB();

// ✅ connect with frontend
app.use(
  cors({
    origin: ["http://localhost:3000",
      "https://ciclonrapido.vercel.app",
      "https://ciclon-rapido-pgca.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ routes (ต้องอยู่ก่อน listen)
app.use("/api/posts", postRoutes);
app.use("/api/drivers", driversRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});