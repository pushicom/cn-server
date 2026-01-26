// server-test.js
const express = require('express');
const cors = require('cors');  // Ajout CORS
const app = express();

app.use(cors());              // Autorise toutes les requêtes externes
app.use(express.json());

app.post('/generate', (req, res) => {
  const { prompt, type, duration } = req.body;
  console.log(`Prompt reçu: ${prompt}, Type: ${type}, Durée: ${duration}`);
  
  // Retour test pour WordPress
  res.json({ url: "https://via.placeholder.com/400x300?text=Test+Image+ou+Vidéo" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur Render test prêt sur le port ${PORT}`);
});
