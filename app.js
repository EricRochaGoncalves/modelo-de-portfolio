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

// Função para fechar o modal manualmente
        function fecharModal() {
            document.getElementById("modal-inicial").style.display = "none";
        }

        // Função que lida com o localStorage para exibir ou não o modal
        document.addEventListener("DOMContentLoaded", function () {
            // Verifica se o item "naoMostrarModal" está salvo no localStorage
            if (!localStorage.getItem("naoMostrarModal")) {
                // Exibe o modal se a chave não estiver no localStorage
                document.getElementById("modal-inicial").style.display = "flex";
            }

            // Adiciona o evento ao checkbox
            document.getElementById("naoLembrar").addEventListener("change", function () {
                // Verifica se a checkbox foi marcada
                if (this.checked) {
                    // Marca no localStorage para não mostrar o modal novamente
                    localStorage.setItem("naoMostrarModal", "true");
                    // Fecha o modal
                    document.getElementById("modal-inicial").style.display = "none";
                }
            });
        });


