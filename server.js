// server.js - serveur définitif stable

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

// === AJOUT FUTUR ===
// Ajoute ici toutes les nouvelles routes ou services sans toucher au socle

// === LANCEMENT SERVEUR ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur socle définitif en ligne sur le port ${PORT}`);
});
const openai = require("openai");
openai.apiKey = ";

app.post("/generate_image", async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await openai.images.generate({
            prompt: prompt,
            n: 1,
            size: "1024x1024"
        });
        res.json({ image_url: response.data[0].url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
