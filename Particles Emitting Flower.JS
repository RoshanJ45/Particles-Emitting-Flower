    const flower = document.querySelector('.flower');
function createParticle() {
const particle = document.createElement('div');
particle.className = 'particle';
const angle = Math.random() * 2 * Math.PI;
const distance = Math.random() * 200 + 50;
const dx = Math.cos(angle) * distance + 'px';
const dy = Math.sin(angle) * distance + 'px';
particle.style.setProperty('--dx', dx);
particle.style.setProperty('--dy', dy);
const size = Math.random() * 8 + 5 + 'px';
particle.style.width = size;
particle.style.height = size;
particle.style.left = '50%';
particle.style.top = '50%';
particle.style.transform = 'translate(-50%, -50%)';
flower.appendChild(particle);
particle.addEventListener('animationend', () => {
particle.remove();
});
}
setInterval(createParticle, 100);
