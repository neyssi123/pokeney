const parametros = new URLSearchParams(window.location.search);

const nombrePokemon = parametros.get("pokemon");

const pokemon = pokemones[nombrePokemon];

document.getElementById("nombre").textContent = pokemon.nombre;

document.getElementById("numero").textContent = "#" + pokemon.numero;

document.getElementById("descripcion").textContent = pokemon.descripcion;

document.getElementById("altura").textContent = pokemon.altura;

document.getElementById("peso").textContent = pokemon.peso;

document.getElementById("habilidade").textContent = pokemon.habilidade;

document.getElementById("localizacao").textContent = pokemon.localizacao;

document.getElementById("imagen").src = pokemon.imagen;

document.getElementById("fraquezas").textContent = pokemon.fraquezas;

document.getElementById("stat-hp").textContent = pokemon.stats.hp;
document.getElementById("stat-ataque").textContent = pokemon.stats.ataque;
document.getElementById("stat-defesa").textContent = pokemon.stats.defesa;
document.getElementById("stat-ataque-esp").textContent = pokemon.stats.ataqueEsp;
document.getElementById("stat-defesa-esp").textContent = pokemon.stats.defesaEsp;
document.getElementById("stat-velocidade").textContent = pokemon.stats.velocidade;

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
    imagem.src = evolucao.imagen;

    const nome = document.createElement("p");
    nome.textContent = evolucao.nombre;

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

    const tipoElemento = document.createElement("span");

    tipoElemento.textContent = tipo;

    tiposDiv.appendChild(tipoElemento);

});