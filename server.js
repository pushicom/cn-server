<div id="ai-image-container">Génération en cours...</div>

<input type="text" id="ai-prompt" placeholder="Écris ton prompt ici" style="width: 80%; padding:5px; margin-top:10px;">
<button id="ai-generate" style="padding:5px 10px; margin-left:5px;">Générer image</button>

<script>
async function generateAIImage(prompt) {
  const container = document.getElementById("ai-image-container");
  container.innerText = "Génération en cours...";

  try {
    const response = await fetch("https://TON-SERVICE.onrender.com/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: prompt })
    });

    const data = await response.json();

    if (data.image_url) {
      const img = document.createElement("img");
      img.src = data.image_url;
      img.alt = "Image générée par IA";
      img.style.maxWidth = "100%";
      container.innerHTML = "";
      container.appendChild(img);
    } else {
      container.innerText = "Aucune image générée.";
    }
  } catch (err) {
    console.error(err);
    container.innerText = "Erreur génération image";
  }
}

// bouton générer
document.getElementById("ai-generate").addEventListener("click", function() {
  const prompt = document.getElementById("ai-prompt").value;
  if(prompt.trim() !== "") {
    generateAIImage(prompt);
  } else {
    alert("Écris un prompt pour générer l'image !");
  }
});
</script>
