// utils/utils.js - fonctions utilitaires réutilisables

// Exemple : trier un tableau d'objets par date
function trierParDateDesc(tableau, champDate = "pubDate") {
    return tableau.sort((a, b) => {
        const dateA = a[champDate] ? new Date(a[champDate]) : new Date(0);
        const dateB = b[champDate] ? new Date(b[champDate]) : new Date(0);
        return dateB - dateA;
    });
}

// Exemple : limiter le nombre d’éléments d’un tableau
function limiter(tableau, n = 10) {
    return tableau.slice(0, n);
}

// Exemple : formatage simple d’un article pour affichage
function formatArticle(article) {
    return {
        titre: article.titre || "",
        resume: article.resume || "",
        source: article.source || "",
        lien: article.lien || "#",
        pubDate: article.pubDate || null
    };
}

// Exporter toutes les fonctions utilitaires
module.exports = {
    trierParDateDesc,
    limiter,
    formatArticle
};
