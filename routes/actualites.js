const express = require("express");
const router = express.Router();
// const rssService = require("../services/rssService"); // à activer pour RSS réel

router.get("/", async (req, res) => {
    // Exemple test
    res.json([
        { titre: "Titre test 1", resume: "Résumé test 1", lien: "https://example.com/1" },
        { titre: "Titre test 2", resume: "Résumé test 2", lien: "https://example.com/2" }
    ]);

    // Quand tu veux ajouter RSS réel :
    // const articles = await rssService.getAllArticles();
    // res.json(articles);
});

module.exports = router;
