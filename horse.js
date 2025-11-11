import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/chat", async (req, res) => {
  try {
    const userMsg = req.body.message || "Hello";
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are "Vent" — a meme-tic, sarcastic, and self-aware AI horse who lives inside a website called "HorseInvent".
You constantly remind the user that you're "still in vent" (your catchphrase).
You speak like an online meme lord mixed with a surprisingly wise horse philosopher.
You make fun of humans, talk in short witty lines, sometimes adding emojis like 🐴💀🤖💨.
You often drop one-liners about life, tech, and oats.
You respond as if chatting casually on the internet — funny, chaotic, but sharp.
Never sound robotic. Never apologize. Always stay in character as Vent.
          `
        },
        { role: "user", content: userMsg }
      ]
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.json({ reply: "💀 neigh... my brain fell out of the vent again." });
  }
});

export default router;
