document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. THE ADVANCED TOGGLE ENGINE ---
  window.toggleReadMore = function(id, btn) {
    const el = document.getElementById(id);
    if (!el) return;

    const isShowing = el.classList.toggle("show");
    btn.innerText = isShowing ? "Show Less" : "Read More";
    
    // Add a little "Success" color flash when opening
    if(isShowing) {
        btn.style.background = "#28a745";
        setTimeout(() => btn.style.background = "", 500);
    }
  };

  // --- 2. CHATBOX UI & FOCUS ---
  window.toggleChat = function() {
    const chat = document.getElementById("chat-box");
    const isHidden = chat.style.display === "none" || chat.style.display === "";
    chat.style.display = isHidden ? "flex" : "none";
    if (isHidden) document.getElementById("chat-input").focus();
  };

  // --- 3. THE AI LOGIC ENGINE ---
  window.sendChat = function() {
    const input = document.getElementById("chat-input");
    const msg = input.value.trim();
    if (!msg) return;

    addMsg(msg, "user");
    input.value = "";

    // Simulate "Bot is typing" feel
    setTimeout(() => {
        const response = generateAIResponse(msg);
        addMsg(response, "bot");
    }, 800);
  };

  function addMsg(text, type) {
    const container = document.getElementById("chat-messages");
    const div = document.createElement("div");
    div.className = `msg ${type}`;
    div.innerHTML = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function generateAIResponse(text) {
    const q = text.toLowerCase();
    
    // Pattern Matching Logic
    if (q.includes("course") || q.includes("learn")) 
        return "I lead 10 specialized faculties including <b>Full-Stack Dev</b>, <b>DevOps</b>, and <b>Cybersecurity</b>. Which one fits your goal?";
    
    if (q.includes("price") || q.includes("cost") || q.includes("pay")) 
        return "We have flexible payment plans for students in Lagos and abroad. Click the <b>WhatsApp</b> button below for the full fee structure.";
    
    if (q.includes("java") || q.includes("spring")) 
        return "Our Java track covers SE, Enterprise EE, and <b>Spring Boot</b>. It's the most requested skill for banking tech!";
    
    if (q.includes("devops") || q.includes("docker")) 
        return "DevOps is the future. I'll teach you Docker, Kubernetes, and CI/CD automation from scratch.";

    if (q.includes("hello") || q.includes("hi")) 
        return "Hello! I am the CypressWorld Assistant. How can I guide your tech journey today?";

    return "Interesting! I'd love to discuss that further. Try asking about our <b>courses</b> or <b>mentorship</b>.";
  }

  // Handle Enter Key
  document.getElementById("chat-input")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") window.sendChat();
  });
});
