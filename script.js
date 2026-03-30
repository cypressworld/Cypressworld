// RUN AFTER PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {

  // READ MORE
  window.toggleReadMore = function(id, btn) {
    const el = document.getElementById(id);
    el.classList.toggle("show");

    btn.innerText = el.classList.contains("show")
      ? "Read Less"
      : "Read More";
  };

  // CHAT OPEN/CLOSE
  window.toggleChat = function() {
    const chat = document.getElementById("chat-box");
    chat.style.display =
      chat.style.display === "flex" ? "none" : "flex";
  };

  // SEND MESSAGE
  window.sendChat = function() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    if (!input.value.trim()) return;

    addMessage(input.value, "user");

    setTimeout(() => {
      addMessage(getAIResponse(input.value), "bot");
    }, 500);

    input.value = "";
  };

  function addMessage(text, type) {
    const messages = document.getElementById("chat-messages");
    const msg = document.createElement("div");

    msg.className = "msg " + type;
    msg.innerText = text;

    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function getAIResponse(text) {
    text = text.toLowerCase();

    if (text.includes("course"))
      return "I offer Full-Stack, AI, Cloud, DevOps and more.";

    if (text.includes("price"))
      return "Contact me on WhatsApp for pricing.";

    if (text.includes("contact"))
      return "Use WhatsApp button to reach me instantly.";

    return "I can guide you. Ask about courses or services.";
  }

  function toggleReadMore(id, btn) {
  const moreText = document.getElementById(id);
  if (!moreText) return;

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
  }

});
