const textarea = document.getElementById('encrypt-text');
textarea.addEventListener('input', autoResize);

function autoResize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}