<script>
const imageBtn = document.querySelector('button#generateImage');
const videoBtn = document.querySelector('button#generateVideo');
const promptField = document.querySelector('textarea#prompt');
const resultDiv = document.querySelector('#result');

imageBtn.addEventListener('click', () => generate('image'));
videoBtn.addEventListener('click', () => generate('video'));

function generate(type) {
  const prompt = promptField.value;
  
  fetch('https://ton-serveur-render.com/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: prompt, type: type, duration: 10 })
  })
  .then(res => res.json())
  .then(data => {
    if(type==='image') {
      resultDiv.innerHTML = `<img src="${data.url}" style="max-width:100%"/>`;
    } else {
      resultDiv.innerHTML = `<video src="${data.url}" controls style="max-width:100%"></video>`;
    }
  });
}
</script>
