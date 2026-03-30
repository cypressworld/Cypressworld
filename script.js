// Toggle Read More
function toggleReadMore(id, btn) {
  const element = document.getElementById(id);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    element.style.display = "none";
    btn.textContent = "Read More";
  }
}

// Typing Effect
const aboutSpan = document.querySelector("#about p span");
if (aboutSpan) {
  let txt = aboutSpan.textContent;
  aboutSpan.textContent = "";
  let i = 0;
  function type() {
    if (i < txt.length) {
      aboutSpan.textContent += txt.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }
  type();
}

// AI Chat Function (REAL AI READY)
async function sendChat() {
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  const userText = input.value;
  if (!userText) return;

  messages.innerHTML += `<div><b>You:</b> ${userText}</div>`;

  input.value = "";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY_HERE",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: userText }]
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    messages.innerHTML += `<div><b>AI:</b> ${reply}</div>`;
  } catch (error) {
    messages.innerHTML += `<div><b>AI:</b> Error connecting to AI</div>`;
  }
}
