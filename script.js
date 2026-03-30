const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatContent = document.getElementById('chat-content');

chatSend.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if(!message) return;

  // User message
  const userMsg = document.createElement('p');
  userMsg.textContent = `You: ${message}`;
  chatContent.appendChild(userMsg);
  chatInput.value = "";
  chatContent.scrollTop = chatContent.scrollHeight;

  // Bot typing simulation
  const botMsg = document.createElement('p');
  botMsg.textContent = "AI: thinking...";
  botMsg.style.color = "blue";
  chatContent.appendChild(botMsg);

  // Simulate AI response
  setTimeout(() => {
    botMsg.textContent = `AI: Hello! I see you said "${message}". This is a default demo response.`;
    chatContent.scrollTop = chatContent.scrollHeight;
  }, 1500);
});
