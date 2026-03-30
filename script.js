/**
 * CypressWorld Portfolio Engine
 * Version: 6.0.0
 * Author: Wisdom Amaju
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ADVANCED READ MORE ENGINE ---
    // Handles the smooth sliding expansion of faculty details
    window.toggleReadMore = function(id, btn) {
        const element = document.getElementById(id);
        if (!element) return;

        // Toggle the 'show' class for CSS transitions
        const isExpanded = element.classList.toggle("show");

        // Update Button UI with feedback
        btn.innerText = isExpanded ? "Read Less" : "Read More";
        
        // Optional: Change button color when active to Green
        if (isExpanded) {
            btn.style.background = "#28a745"; // Success Green
            btn.style.color = "#fff";
        } else {
            btn.style.background = "#ff7f00"; // Back to Brand Orange
            btn.style.color = "#000";
        }
    };

    // --- 2. AI CHATBOT UI LOGIC ---
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    window.toggleChat = function() {
        // Check current display state
        const isHidden = chatBox.style.display === "none" || chatBox.style.display === "";
        
        if (isHidden) {
            chatBox.style.display = "flex";
            chatInput.focus(); // Focus input for better UX
            
            // Send a welcome message if the chat is empty
            if (chatMessages.children.length === 0) {
                setTimeout(() => {
                    addMessage("Welcome to CypressWorld! I'm your AI assistant. Ask me about our <b>Courses</b> or <b>Pricing</b>.", "bot");
                }, 400);
            }
        } else {
            chatBox.style.display = "none";
        }
    };

    // --- 3. THE AI "BRAIN" (Keyword Engine) ---
    window.sendChat = function() {
        const userText = chatInput.value.trim();
        if (!userText) return;

        // Display user message
        addMessage(userText, "user");
        chatInput.value = "";

        // Artificial delay to simulate "thinking"
        setTimeout(() => {
            const botResponse = getSmartResponse(userText.toLowerCase());
            addMessage(botResponse, "bot");
        }, 700);
    };

    // Listen for 'Enter' key in the chat input
    chatInput?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") window.sendChat();
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `msg ${sender}`;
        
        // Using innerHTML to allow <b> tags in bot responses
        msgDiv.innerHTML = `<strong>${sender === 'user' ? 'You' : 'Cypress AI'}:</strong> ${text}`;
        
        chatMessages.appendChild(msgDiv);
        
        // Auto-scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getSmartResponse(input) {
        // Comprehensive Keyword Matching
        if (input.includes("course") || input.includes("learn") || input.includes("faculty")) {
            return "We have 10 faculties covering <b>Java, Python, DevOps, Cloud, and Cybersecurity</b>. Which one peaks your interest?";
        }
        if (input.includes("price") || input.includes("cost") || input.includes("fee") || input.includes("much")) {
            return "Our training is very affordable with flexible payment plans. For a custom quote, please click the <b>WhatsApp</b> button!";
        }
        if (input.includes("java")) {
            return "Wisdom is an expert Java Instructor! We cover <b>Core Java, Spring Boot, and Microservices</b>.";
        }
        if (input.includes("devops") || input.includes("docker") || input.includes("k8s")) {
            return "DevOps is our specialty. You'll learn to automate infrastructure using <b>Docker, Kubernetes, and Jenkins</b>.";
        }
        if (input.includes("contact") || input.includes("whatsapp") || input.includes("number")) {
            return "You can reach Wisdom directly at <b>+234 703 915 3600</b> or via the WhatsApp link below.";
        }
        if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
            return "Hello! I'm ready to guide you through the CypressWorld ecosystem. What's on your mind?";
        }
        
        // Default Fallback
        return "That's a great question! I'm still learning, but <b>Wisdom Amaju</b> can give you a detailed answer on WhatsApp.";
    }

    // --- 4. FLOATING BUTTON SCROLL EFFECTS ---
    // Subtly hide/show floating buttons based on scroll for cleaner mobile view
    let lastScrollY = window.scrollY;
    const floatingActions = document.querySelector(".floating-actions");

    window.addEventListener("scroll", () => {
        if (floatingActions) {
            if (window.scrollY > lastScrollY) {
                // Scrolling down - slightly fade
                floatingActions.style.opacity = "0.8";
            } else {
                // Scrolling up - full visibility
                floatingActions.style.opacity = "1";
            }
            lastScrollY = window.scrollY;
        }
    });
});
