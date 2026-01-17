const express = require("express");
const router = express.Router();
const rssService = require("../services/rssService"); // notre module RSS réel

router.get("/", async (req, res) => {
    try {
        const articles = await rssService.getAllArticles();
        res.json(articles);
    } catch (err) {
        console.log("Erreur récupération RSS :", err);
        res.status(500).json({ error: "Impossible de récupérer les actualités." });
    }
});

module.exports = router;
