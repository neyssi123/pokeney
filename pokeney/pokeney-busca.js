const parametros = new URLSearchParams(window.location.search);

const nomePokemon = parametros.get("pokemon");

const pokemon = pokemones[nomePokemon];

document.getElementById("nome").textContent = pokemon.nome;

document.getElementById("numero").textContent = "#" + pokemon.numero;

document.getElementById("descrição").textContent = pokemon.descrição;

document.getElementById("altura").textContent = pokemon.altura;

document.getElementById("peso").textContent = pokemon.peso;

document.getElementById("habilidade").textContent = pokemon.habilidade;

document.getElementById("localizacao").textContent = pokemon.localizacao;

document.getElementById("imagem").src = pokemon.imagem;

document.getElementById("shiny").src = pokemon.shiny;

document.getElementById("stat-hp").textContent = pokemon.stats.hp;
document.getElementById("stat-ataque").textContent = pokemon.stats.ataque;
document.getElementById("stat-defesa").textContent = pokemon.stats.defesa;
document.getElementById("stat-ataque-esp").textContent =
  pokemon.stats.ataqueEsp;
document.getElementById("stat-defesa-esp").textContent =
  pokemon.stats.defesaEsp;
document.getElementById("stat-velocidade").textContent =
  pokemon.stats.velocidade;

const maxStat = 255;

document.getElementById("barra-hp").style.width =
  (pokemon.stats.hp / maxStat) * 100 + "%";

document.getElementById("barra-ataque").style.width =
  (pokemon.stats.ataque / maxStat) * 100 + "%";

document.getElementById("barra-defesa").style.width =
  (pokemon.stats.defesa / maxStat) * 100 + "%";

document.getElementById("barra-ataque-esp").style.width =
  (pokemon.stats.ataqueEsp / maxStat) * 100 + "%";

document.getElementById("barra-defesa-esp").style.width =
  (pokemon.stats.defesaEsp / maxStat) * 100 + "%";

document.getElementById("barra-velocidade").style.width =
  (pokemon.stats.velocidade / maxStat) * 100 + "%";

const linha = document.getElementById("linha-evolutiva");

linha.innerHTML = "";

pokemon.evolucao.forEach((evolucao, index) => {
  const item = document.createElement("div");
  item.classList.add("evolucao-item");

  const imagem = document.createElement("img");
  imagem.src = evolucao.imagem;

  const nome = document.createElement("a");
  nome.textContent = evolucao.nome;
  
  nome.href = "pokemon-info.html?pokemon=" + evolucao.id;

  item.appendChild(imagem);
  item.appendChild(nome);

  linha.appendChild(item);

  if (index < pokemon.evolucao.length - 1) {
    const seta = document.createElement("span");

    seta.textContent = "→";
    seta.classList.add("seta");

    linha.appendChild(seta);
  }
});

const tiposDiv = document.getElementById("tipos");

pokemon.tipos.forEach(tipo => {

    const tipoElemento = document.createElement("div");

    tipoElemento.classList.add("tipo");

    const imagemTipo = document.createElement("img");

    imagemTipo.src = "imagenes/tipo-" + tipo.toLowerCase() + ".png";

    imagemTipo.alt = tipo;

    const textoTipo = document.createElement("span");

    textoTipo.textContent = tipo;

    tipoElemento.appendChild(imagemTipo);
    tipoElemento.appendChild(textoTipo);

    tiposDiv.appendChild(tipoElemento);

});

const fraquezasDiv = document.getElementById("fraquezas");

pokemon.fraquezas.forEach(fraqueza => {

    const fraquezaElemento = document.createElement("div");

    fraquezaElemento.classList.add("fraqueza");

    const imagemFraqueza = document.createElement("img");

    imagemFraqueza.src =
        "imagenes/tipo-" + fraqueza.tipo.toLowerCase() + ".png";

    imagemFraqueza.alt = fraqueza.tipo;


    const textoFraqueza = document.createElement("span");

    textoFraqueza.textContent =
        fraqueza.tipo + " (" + fraqueza.multiplicador + ")";


    fraquezaElemento.appendChild(imagemFraqueza);
    fraquezaElemento.appendChild(textoFraqueza);

    fraquezasDiv.appendChild(fraquezaElemento);

});