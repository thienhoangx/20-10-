onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
const flowers = ['🌸', '🏵️', '🌺', '🌻', '🌼', '🌷', '🌹', '🪻'];

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = Math.random() * 3 + 5 + 's';
  flower.style.fontSize = Math.random() * 10 + 15 + 'px';

  document.querySelector('.flower-falling-container').appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 5000);
}

setInterval(createFlower, 300);
window.addEventListener('load', function() {
  document.body.classList.remove('not-loaded');
});
