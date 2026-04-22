const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const div = document.getElementById("detalhes");

async function load() {
  if (!id) {
    div.innerHTML = "Moeda não encontrada";
    return;
  }

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const coin = await res.json();

  div.innerHTML = `
    <img src="${coin.image.large}" width="80">
    <h2>${coin.name}</h2>
    <p> Preço: $${coin.market_data.current_price.usd}</p>
    <p> Rank: ${coin.market_cap_rank}</p>
  `;
}

load();