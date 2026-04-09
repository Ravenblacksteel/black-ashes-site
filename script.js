const terminalLine = document.getElementById('terminalLine');
const lines = [
  '…Signal stabilisiert… Wolves-Relais online…',
  '…Helix traffic detected… rerouting feed…',
  '…Driftwatch archives unavailable… access denied…',
  '…Green Zone coordinates fragmented… partial lock…'
];

let i = 0;
if (terminalLine) {
  setInterval(() => {
    i = (i + 1) % lines.length;
    terminalLine.classList.remove('glitch');
    void terminalLine.offsetWidth;
    terminalLine.classList.add('glitch');
    terminalLine.textContent = lines[i];
  }, 3200);
}

window.addEventListener('scroll', () => {
  const heroImage = document.querySelector('.hero-media img');
  if (!heroImage) return;
  const offset = Math.min(window.scrollY * 0.08, 16);
  heroImage.style.transform = `scale(1.02) translateY(${offset}px)`;
});
