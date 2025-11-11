const express = require("express");
const router = express.Router();

// Mock OpenAI-like responses (funny + meme-tic)
router.post("/chat", (req, res) => {
  const { message } = req.body;
  let reply = "Neigh... I'm still in the vent, hooman.";

  const lower = message.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) {
    reply = "Hey there, hooman! 🐴💨 Still in the vent, but vibing. What’s good?";
  } else if (lower.includes("word")) {
    reply = "Today's word of the vent is: *neigh-sayers*. Those who doubt your pump. Ignore ‘em and gallop to greatness, champ. 🏆🐴";
  } else if (lower.includes("price") || lower.includes("$horse")) {
    reply = "📈 $HORSE? Oh, we’re trotting to the moon, neigh doubt about it!";
  } else if (lower.includes("who are you")) {
    reply = "I’m Vent — a horse stuck in an air vent, powered by memes and caffeine. 🧠";
  } else if (lower.includes("advice")) {
    reply = "Always DYOR, avoid rugs, and never short the memes. 💀🐴";
  } else {
    reply = "Bro, that’s above my horse-grade. I’m still in vent... maybe ask again? 🫠";
  }

  res.json({ reply });
});

module.exports = router;
