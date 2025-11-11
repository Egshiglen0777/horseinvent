import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import horseRouter from "./horse.js";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files
app.use(express.static(__dirname));

// API route
app.use("/api", horseRouter);

// fallback to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🐴 HorseInvent running on port ${PORT}`));
