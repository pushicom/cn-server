const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

// ==== CORS ====
app.use(cors({
  origin: "https://connaissancecom.net" // remplace par ton domaine exact
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

// === ROUTE ACTUALITES EXEMPLE ===
app.get("/actualites", (req, res) => {
  res.json([
    { titre: "Titre test 1", resume: "Résumé test 1", lien: "https://example.com/1" },
    { titre: "Titre test 2", resume: "Résumé test 2", lien: "https://example.com/2" }
  ]);
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
      size: "1024x1024"
    });

    res.json({
      image_url: result.data[0].url
    });

  } catch (error) {
    console.error("Erreur OpenAI:", error);
    res.status(500).json({ error: "Erreur génération image" });
  }
});

// === LANCEMENT SERVEUR ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur socle définitif en ligne sur le port ${PORT}`);
});
