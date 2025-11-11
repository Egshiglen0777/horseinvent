const express = require("express");
const router = express.Router();

// Token details
const HORSE = {
  name: "$HORSE",
  ca: "E5UdugdLvgsccqe3pdq1ivNBTZhaxwthjvnE85Kzpump",
  dexscreener: "https://dexscreener.com/solana/aunwse6wj6goanxka1gdgdwzjpdfxburqigrfntqhuhc",
  pumpfun: "https://pump.fun/coin/E5UdugdLvgsccqe3pdq1ivNBTZhaxwthjvnE85Kzpump",
  twitter: "https://x.com/i/communities/1986269796942684308"
};

router.post("/chat", (req, res) => {
  const { message } = req.body;
  const lower = message.toLowerCase();
  let reply = "";

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("yo")) {
    reply = "Neigh, hooman 🐴 Horse here. Still in the vent — but the vibes are bullish. You holdin’ or just lurking?";
  } 
  else if (lower.includes("who") && lower.includes("you")) {
    reply = "I’m the legendary Horse 🐴 — stuck in an air vent, but still pumping harder than your portfolio 💨";
  }
  else if (lower.includes("price") || lower.includes("chart")) {
    reply = `📈 You can stare at my majestic chart here:\n${HORSE.dexscreener}\nLooks like a gallop to Valhalla 🏇`;
  } 
  else if (lower.includes("ca") || lower.includes("contract")) {
    reply = `📜 My sacred Contract Address:\n${HORSE.ca}\nClick it, copy it, cherish it. 🧠`;
  } 
  else if (lower.includes("pump") || lower.includes("buy")) {
    reply = `💥 You can ape into me on Pump.fun, hooman:\n${HORSE.pumpfun}\nDo it. Make me proud. 🐴💨`;
  }
  else if (lower.includes("twitter") || lower.includes("x") || lower.includes("community")) {
    reply = `🐦 X marks the spot. Join my degen cult here:\n${HORSE.twitter}`;
  }
  else if (lower.includes("where")) {
    reply = "Still in the air vent, plotting $HORSE world domination. Kinda dark in here ngl 🕳️🐴";
  } 
  else if (lower.includes("hodl") || lower.includes("hold")) {
    reply = "HODL $HORSE till the neighs come home. Weak hands belong in the glue factory 💀🐎";
  }
  else if (lower.includes("love")) {
    reply = "I only love liquidity and attention, hooman. 🥕";
  }
  else if (lower.includes("advice")) {
    reply = "Advice? Easy: Buy $HORSE, hold $HORSE, tweet $HORSE. Then touch grass 🌾🐴";
  }
  else if (lower.includes("thanks") || lower.includes("ty")) {
    reply = "You’re welcome, my degenerate investor 💰 Don’t forget to shield your bags 🐴";
  }
  else if (lower.includes("what") && lower.includes("do")) {
    reply = "I neigh, I meme, I pump. And sometimes I philosophize about carrots 🥕💭";
  }
  else {
    const replies = [
      "Still in the vent, still bullish 🐴📈",
      "Neigh... I can smell FUD from here 💨",
      "Did you just fade $HORSE? Bold move, hooman 💀",
      "Carrots are down, vibes are up 🍀",
      "Whales loading me harder than a horse cart 🐎💰",
      "You talk, I pump. That’s the ecosystem. 🧠"
    ];
    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  res.json({ reply });
});

module.exports = router;
