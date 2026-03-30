// Fade-in elements on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('opacity-100');
    entry.target.style.animation = 'fadeInAnim 1s forwards';
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Simple AI Chat Placeholder
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatContent = document.getElementById('chat-content');
chatSend.addEventListener('click', () => {
  if (chatInput.value.trim() !== "") {
    const userMsg = document.createElement('p');
    userMsg.textContent = "You: " + chatInput.value;
    chatContent.appendChild(userMsg);
    const botMsg = document.createElement('p');
    botMsg.textContent = "AI: Hello! (Integration coming soon)";
    botMsg.style.color = "blue";
    chatContent.appendChild(botMsg);
    chatInput.value = "";
    chatContent.scrollTop = chatContent.scrollHeight;
  }
});

// Particle Animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}
const particlesArray = [];
for(let i=0;i<100;i++) { particlesArray.push(new Particle()); }
function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{p.update();p.draw();});
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
