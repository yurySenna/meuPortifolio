function mudarTema() {
    const tema = document.getElementById('tempo');
    const corpo = document.body;

    corpo.classList.toggle('light');
    tema.textContent = corpo.classList.contains('light') ? "☀️" : "🌙"; 
}