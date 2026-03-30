const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatContent = document.getElementById('chat-content');

chatSend.addEventListener('click', async () => {
  const message = chatInput.value.trim();
  if (!message) return;

  // User message
  const userMsg = document.createElement('p');
  userMsg.textContent = `You: ${message}`;
  chatContent.appendChild(userMsg);
  chatInput.value = "";
  chatContent.scrollTop = chatContent.scrollHeight;

  // Show processing message
  const botMsg = document.createElement('p');
  botMsg.textContent = "AI: thinking...";
  botMsg.style.color = "blue";
  chatContent.appendChild(botMsg);

  try {
    // Using Hugging Face Inference API (free models endpoint)
    const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inputs: message,
        parameters: { max_new_tokens: 60 }
      })
    });

    const data = await response.json();
    if (data.error) {
      botMsg.textContent = "AI: Sorry, model could not process your request.";
    } else {
      botMsg.textContent = "AI: " + (data[0]?.generated_text ?? "Hmm, I couldn't think of a response.");
    }

    chatContent.scrollTop = chatContent.scrollHeight;
  } catch (err) {
    botMsg.textContent = "AI: Error connecting to free AI engine.";
  }
});
