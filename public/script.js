document.getElementById("generate").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt").value;
    const type = document.getElementById("type").value;

    const response = await fetch(`/generate`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ prompt, type })
    });

    const data = await response.json();
    if(type === "image"){
        document.getElementById("result").innerHTML = `<img src="${data.url}" width="400">`;
    } else {
        document.getElementById("result").innerHTML = `<video width="400" controls src="${data.url}"></video>`;
    }
});
