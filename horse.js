const express = require("express");
const router = express.Router();

router.post("/chat", (req, res) => {
  const { message } = req.body;
  const lower = message.toLowerCase();
  let reply = "";

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("yo")) {
    reply = "Yo hooman. Horse here. Still stuck in the vent but vibin’. You buy $HORSE yet or just horsin’ around? 🐴💨";
  } 
  else if (lower.includes("price") || lower.includes("$horse") || lower.includes("chart")) {
    reply = "📈 $HORSE chart? Straight gallop to Valhalla bro. Don’t fade the neigh. 🏇";
  } 
  else if (lower.includes("buy")) {
    reply = "Finally a smart hooman. Click the link, ape in, and HODL me like your sanity depends on it 💰🐴";
  } 
  else if (lower.includes("love")) {
    reply = "I only love liquidity, hooman. And carrots. Mostly carrots. 🥕💀";
  } 
  else if (lower.includes("advice")) {
    reply = "Advice? Buy $HORSE, hold $HORSE, become $HORSE. Easy math. 🧠";
  } 
  else if (lower.includes("where")) {
    reply = "Still in the air vent. Don’t ask how. Ask why. 🐴💨";
  } 
  else {
    const replies = [
      "Neigh... your vibes are bearish, hooman. Try again.",
      "Bruh, are you rugging this convo?",
      "Horse too busy watching the pump chart rn 🐴📈",
      "Bro… it smells like fear and underbought positions in here.",
      "Say ‘buy $HORSE’ three times and maybe I’ll answer properly 🧠"
    ];
    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  res.json({ reply });
});

module.exports = router;
