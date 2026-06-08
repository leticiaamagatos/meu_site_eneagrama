const btnMostrar = document.getElementById('btnMostrar');
const listaTipos = document.getElementById('listaTipos');

// Adiciona o evento de clique
btnMostrar.addEventListener('click', () => {
    // Alterna a classe que mostra/esconde o texto
    listaTipos.classList.toggle('lista-tipos-visivel');
    
    // Opcional: Altera o texto do botão para melhorar a experiência
    if (listaTipos.classList.contains('lista-tipos-visivel')) {
        btnMostrar.textContent = 'Ocultar Características';
    } else {
        btnMostrar.textContent = 'Ver Características';
    }
});
