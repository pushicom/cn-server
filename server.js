const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

// ==== CORS ====
app.use(cors({
  origin: ["https://connaissancecom.net", "https://www.connaissancecom.net"] // remplace si nécessaire
}));

app.use(express.json());

// ===== OpenAI =====
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// === ROUTE TEST ===
app.get("/test", (req, res) => {
  res.json({ message: "Serveur définitif opérationnel ✅" });
});

// === IA : GENERATION IMAGE ===
app.post("/generate-image", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt manquant" });
    }

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "512x512" // plus rapide et fiable
    });

    if (!result.data || !result.data[0] || !result.data[0].url) {
      return res.status(500).json({ error: "Aucune image générée" });
    }

    res.json({ image_url: result.data[0].url });

  } catch (error) {
    console.error("Erreur OpenAI:", error);
    res.status(500).json({ error: "Erreur génération image" });
  }
});

// === LANCEMENT SERVEUR ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur définitif en ligne sur le port ${PORT}`);
});
