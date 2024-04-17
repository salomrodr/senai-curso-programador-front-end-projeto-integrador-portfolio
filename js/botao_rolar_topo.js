// Chama a função scrollFunction() quando a página é rolada.
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Obtém a referência ao elemento com o ID "id_scrollTopBtn"
    var scrollTopBtn = document.getElementById("id_scrollTopBtn");
    // Verifica se o valor da rolagem do corpo da página ou do elemento html é maior que 20 pixels
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Se a condição for verdadeira, torna o botão visível
        scrollTopBtn.style.display = "block";
    } else {
        // Se a condição for falsa, oculta o botão
        scrollTopBtn.style.display = "none";
    }
}

// Função para rolar até o topo (COM SUAVIDADE).
function scrollToTop() {
	window.scrollTo({
        top: 0,
        behavior: "smooth" // Adiciona um efeito de rolagem suave.
    });
}

/* 

// Função para rolar até o topo (SEM SUAVIDADE).
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

*/