document.addEventListener('DOMContentLoaded', () => {
    const previewContainer = document.querySelector('.preview-container');
    const preview = previewContainer.querySelector('.preview');
    let timeout;

    previewContainer.addEventListener('mouseover', () => {
        timeout = setTimeout(() => {
            preview.classList.add('show');
        }, 500);
    });

    previewContainer.addEventListener('mouseout', () => {
        clearTimeout(timeout);
        preview.classList.remove('show');
    });
});
