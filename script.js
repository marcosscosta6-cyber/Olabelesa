const lista = document.getElementById("lista");
const btn = document.getElementById("btnBuscar");
const input = document.getElementById("busca");

btn.addEventListener("click", async () => {
  btn.disabled = true;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`);
  const data = await res.json();

  lista.innerHTML = "";

  const filtro = input.value.toLowerCase();

  data
    .filter(c => c.name.toLowerCase().includes(filtro))
    .forEach(coin => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <img src="${coin.image}" width="40">
        <h3>${coin.name}</h3>
        <p>$${coin.current_price}</p>
      `;

      div.addEventListener("click", () => {
        window.location.href = `detalhes.html?id=${coin.id}`;
      });

      lista.appendChild(div);
    });

  btn.disabled = false;
});