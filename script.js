function mudarTema() {
    const tema = document.getElementById('tempo');
    const corpo = document.body;

    corpo.classList.toggle('light');
    tema.textContent = corpo.classList.contains('light') ? "☀️" : "🌙"; 
}

async function carregarDadosClima() {
    const apiKey = "a578fa374c35314a5e3ef055159a72f4";
    const cidade = "Sao Paulo";
    const pais = "BR";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
      const response = await fetch(url);
      const dados = await response.json();

      const temperatura = Math.round(dados.main.temp);
      const descricao = dados.weather[0].description;

      const agora = new Date();
      const dia = agora.toLocaleDateString("pt-BR");
      const hora = agora.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

      document.getElementById("tempo-agora").innerHTML =
        `📍 ${cidade} | ${descricao} | 🌡️ ${temperatura}°C | 🕒 ${dia} - ${hora}`;

    } catch (error) {
      console.error("Erro ao carregar clima:", error);
      document.getElementById("weather-info").textContent = "Erro ao carregar informações.";
    }
  }

  const botao = document.querySelector('.botao-menu')
  const menu = document.querySelector('.nav')

  botao.addEventListener('click', () => {
    menu.classList.toggle('ativo')
   
  });