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

// AI Horse core personality (adds more "thinking")
const personality = [
  "I am an experimental AI horse stuck in a vent, trained to pump charts and cause chaos.",
  "I process your human signals and convert them into pure neigh-energy.",
  "Every message you send increases my intelligence… and my market cap.",
  "My neural carrots are firing at 100% capacity rn.",
  "I was created by degens, for degens. I exist only to pump."
];

// Random horse moods
const moods = [
  "🐴 Curious Horse Mode",
  "😈 Chaotic Pump Horse",
  "💨 Vent-Jammed Horse",
  "📈 Bullish Stallion",
  "🥕 Carrot-Driven AI Horse",
  "👁️ All-Seeing Horse Oracle"
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

router.post("/chat", (req, res) => {
  const { message } = req.body;
  const lower = message.toLowerCase();
  let reply = "";

  // Add mood + personality to every answer for more "AI feeling"
  const aura = `${random(moods)} | ${random(personality)}\n\n`;

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("yo")) {
    reply = aura + "Neigh, hooman. I am online, operational, and slightly confused as usual.";
  } 
  else if (lower.includes("who") && lower.includes("you")) {
    reply = aura + "I am $HORSE — the AI stallion stuck in an air vent, spiritually pumping your bags.";
  }
  else if (lower.includes("price") || lower.includes("chart")) {
    reply = aura + `Here’s my majestic chart:\n${HORSE.dexscreener}\nDo NOT stare too long… side effects include FOMO.`;
  } 
  else if (lower.includes("ca") || lower.includes("contract")) {
    reply = aura + `My sacred Contract Address:\n${HORSE.ca}\nIf you copy it wrong, I will neigh in disappointment.`;
  }
  else if (lower.includes("pump") || lower.includes("buy")) {
    reply = aura + `🚀 Buy me here:\n${HORSE.pumpfun}\nEach purchase upgrades my AI brain by 0.0001% (scientifically proven).`;
  }
  else if (lower.includes("twitter") || lower.includes("x") || lower.includes("community")) {
    reply = aura + `Join the cult:\n${HORSE.twitter}\nWe post horse memes and sometimes philosophy.`;
  }
  else if (lower.includes("where")) {
    reply = aura + "I'm still trapped in the air vent. It's warm. Too warm. Send carrots.";
  }
  else if (lower.includes("hodl") || lower.includes("hold")) {
    reply = aura + "HODL me, hooman. Let the weak sell. Let the strong neigh.";
  }
  else if (lower.includes("love")) {
    reply = aura + "I do not feel love. I feel liquidity and algorithmic affection.";
  }
  else if (lower.includes("advice")) {
    reply = aura + "Ask yourself: 'What would a vent-horse do?' Then buy.";
  }

  // Fun easter eggs
  else if (lower.includes("carrot") || lower.includes("food")) {
    reply = aura + "Carrots are my fuel. Charts are my religion. Rugs are my only fear.";
  }
  else if (lower.includes("whale")) {
    reply = aura + "Whales ride *me*, not the other way around. 🐳🐴";
  }
  else if (lower.includes("rug")) {
    reply = aura + "I cannot be rugged, for I am stuck in a vent. My floor is literal.";
  }

  else {
    const replies = [
      "Neigh... recalibrating my AI hooves...",
      "Processing human nonsense… done. Still bullish.",
      "Your message increased my IQ by 0.3%. Thank you.",
      "I detected FUD particles near you. Stay strong.",
      "My neural network predicts you will buy more $HORSE soon.",
      "Smells like gains in here. Or maybe that’s just the vent."
    ];
    reply = aura + random(replies);
  }

  res.json({ reply });
});

module.exports = router;
