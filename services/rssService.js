const Parser = require("rss-parser");
const parser = new Parser();

const fluxInternationaux = [
    "https://feeds.bbci.co.uk/news/rss.xml",
    "http://rss.cnn.com/rss/edition.rss"
];
const fluxHaitiens = [
    "https://www.lenouvelliste.com/rss",
    "https://www.loophaiti.com/rss"
];

async function getAllArticles() {
    const articles = [];

    for (const url of [...fluxInternationaux, ...fluxHaitiens]) {
        try {
            const feed = await parser.parseURL(url);
            feed.items.forEach(item => {
                articles.push({
                    titre: item.title,
                    resume: item.contentSnippet || "",
                    source: feed.title,
                    lien: item.link,
                    pubDate: item.pubDate
                });
            });
        } catch (err) {
            console.log(`Erreur flux ${url}:`, err.message);
        }
    }

    // Trier par date
    articles.sort((a, b) => {
        const dateA = a.pubDate ? new Date(a.pubDate) : new Date(0);
        const dateB = b.pubDate ? new Date(b.pubDate) : new Date(0);
        return dateB - dateA;
    });

    return articles;
}

module.exports = { getAllArticles };
