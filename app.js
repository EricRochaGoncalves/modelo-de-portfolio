const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

// Função para alternar a visibilidade do menu e alterar o ícone
function toggleMenu() {
    nav.classList.toggle('active'); // Adiciona/remove a classe 'active'

    const icon = btnMenu.querySelector('i'); // Seleciona o ícone dentro do botão
    if (nav.classList.contains('active')) {
        // Se o nav tiver a classe 'active', muda para o ícone de 'fechar'
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        // Caso contrário, volta para o ícone de 'menu'
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Evento de clique no botão do menu
btnMenu.addEventListener('click', toggleMenu);



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


