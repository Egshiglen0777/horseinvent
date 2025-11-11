const express = require("express");
const router = express.Router();

router.post("/chat", (req, res) => {
  const { message } = req.body;
  const lower = message.toLowerCase();
  let reply = "Neigh... Horse’s still in the vent, hooman.";

  if (lower.includes("hello") || lower.includes("hi")) {
    reply = "Yo, it’s Horse 🐴 still in the vent but vibin’. What brings you to my digital stable?";
  } else if (lower.includes("price") || lower.includes("$horse")) {
    reply = "📈 $HORSE chart lookin’ like a gallop to Valhalla, don’t fight the neigh-trend.";
  } else if (lower.includes("who") || lower.includes("what")) {
    reply = "I’m Horse, the meme-core AI stuck in an air vent. Built to neigh wisdom and talk degen. 💨";
  } else if (lower.includes("word")) {
    reply = "Word of the day? 'Neighconomics' — when markets go up for no reason and horses get rich. 🐎💰";
  } else {
    reply = "Still in the vent, hooman. Try askin’ somethin’ juicier 🐴💨";
  }

  res.json({ reply });
});

module.exports = router;
