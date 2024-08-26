document.addEventListener('DOMContentLoaded', () => {
    const previewLink = document.getElementById('preview-link');
    const previewContainer = document.getElementById('preview-container');

    previewLink.addEventListener('mouseover', () => {
        previewContainer.classList.remove('hidden');
        previewContainer.style.opacity = '1'; // Torna a pré-visualização visível
    });

    previewLink.addEventListener('mouseout', () => {
        previewContainer.style.opacity = '0'; // Oculta a pré-visualização
        setTimeout(() => {
            previewContainer.classList.add('hidden');
        }, 500); // Tempo para a transição de opacidade
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const vitorImg = document.getElementById('vitor-img');

    // Define um atraso opcional antes de iniciar a transição
    setTimeout(() => {
        vitorImg.style.opacity = '1'; // Torna a imagem visível
    }, 100); // O atraso pode ser ajustado conforme necessário
});
