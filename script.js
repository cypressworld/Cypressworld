async function sendChat() {
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  const userText = input.value;
  if (!userText) return;

  messages.innerHTML += `<div><b>You:</b> ${userText}</div>`;
  input.value = "";

  try {
    const res = await fetch("https://api.affiliateplus.xyz/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: userText,
        botname: "CypressWorld AI",
        ownername: "Wisdom"
      })
    });

    const data = await res.json();

    messages.innerHTML += `<div><b>AI:</b> ${data.message}</div>`;
  } catch (err) {
    messages.innerHTML += `<div><b>AI:</b> Error connecting</div>`;
  }
}
