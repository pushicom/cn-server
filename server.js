const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.json({ message: "Serveur définitif opérationnel ✅" });
});

app.get("/actualites", (req, res) => {
    res.json([
        { titre: "Titre test 1", resume: "Résumé test 1", lien: "https://example.com/1" },
        { titre: "Titre test 2", resume: "Résumé test 2", lien: "https://example.com/2" }
    ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur socle définitif en ligne sur le port ${PORT}`);
});
