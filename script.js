document.addEventListener("DOMContentLoaded", () => {
    
    // READ MORE FUNCTION
    window.toggleReadMore = function(id, btn) {
        const content = document.getElementById(id);
        if(!content) return;
        
        const isShow = content.classList.toggle("show");
        btn.innerText = isShow ? "Read Less" : "Read More";
        btn.style.background = isShow ? "#28a745" : "#ff7f00";
    };

    // CHAT TOGGLE
    const chatBox = document.getElementById("chat-box");
    window.toggleChat = function() {
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "flex";
            if(document.getElementById("chat-messages").children.length === 0) {
                addMessage("Hello! I'm Wisdom's Assistant. How can I help with your tech journey?", "bot");
            }
        } else {
            chatBox.style.display = "none";
        }
    };

    // CHAT ENGINE
    window.sendChat = function() {
        const input = document.getElementById("chat-input");
        const val = input.value.trim();
        if(!val) return;

        addMessage(val, "user");
        input.value = "";

        setTimeout(() => {
            const reply = getAIResponse(val.toLowerCase());
            addMessage(reply, "bot");
        }, 600);
    };

    function addMessage(text, sender) {
        const div = document.createElement("div");
        div.style.margin = "8px";
        div.style.padding = "10px";
        div.style.borderRadius = "10px";
        div.style.background = sender === "user" ? "#ff7f00" : "#222";
        div.style.color = sender === "user" ? "black" : "white";
        div.style.alignSelf = sender === "user" ? "flex-end" : "flex-start";
        div.innerHTML = text;
        document.getElementById("chat-messages").appendChild(div);
        document.getElementById("chat-messages").scrollTop = chatMessages.scrollHeight;
    }

    function getAIResponse(q) {
        if(q.includes("price") || q.includes("fee")) return "Our courses are very affordable. WhatsApp Wisdom for a personalized quote!";
        if(q.includes("java")) return "Wisdom is a Java master! He teaches Spring Boot, SE, and EE.";
        return "That sounds interesting! You should discuss that directly with Wisdom via WhatsApp.";
    }
});
