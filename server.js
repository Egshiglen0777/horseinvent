const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const horseRouter = require("./horse.js");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

// ✅ API route (connects to horse.js)
app.use("/api", horseRouter);

// ✅ Default route (serves index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🐴 HorseInvent running on port ${PORT}`));
