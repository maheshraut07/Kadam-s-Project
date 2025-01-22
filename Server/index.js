import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

connectDatabase();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
