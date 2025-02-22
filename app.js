const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

// Função para alternar a visibilidade do menu
function toggleMenu() {
    nav.classList.toggle('active'); // Adiciona/remove a classe 'active'
}

// Evento de clique no botão do menu
btnMenu.addEventListener('click', toggleMenu);

const cube = document.querySelector('.cube');

// Função para calcular a rotação baseada no movimento do mouse ou toque
function updateRotation(x, y) {
  const rotateX = y * 100; // Fator de rotação no eixo X
  const rotateY = -x * 100; // Fator de rotação no eixo Y
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// Função para capturar o movimento do mouse
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  updateRotation(x, y);
});

// Função para capturar o movimento no touchscreen
document.addEventListener('touchmove', (e) => {
  const x = e.touches[0].clientX / window.innerWidth - 0.5;
  const y = e.touches[0].clientY / window.innerHeight - 0.5;
  updateRotation(x, y);
}, { passive: true }); // Adicionando { passive: true } para melhorar o desempenho no mobile


