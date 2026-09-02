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

document.getElementById("evolucao1-imagem").src =
    pokemon.evolucao[0].imagen;

document.getElementById("evolucao1-nome").textContent =
    pokemon.evolucao[0].nombre;


document.getElementById("evolucao2-imagem").src =
    pokemon.evolucao[1].imagen;

document.getElementById("evolucao2-nome").textContent =
    pokemon.evolucao[1].nombre;


document.getElementById("evolucao3-imagem").src =
    pokemon.evolucao[2].imagen;

document.getElementById("evolucao3-nome").textContent =
    pokemon.evolucao[2].nombre;

const tiposDiv = document.getElementById("tipos");

pokemon.tipos.forEach(tipo => {

    const tipoElemento = document.createElement("span");

    tipoElemento.textContent = tipo;

    tiposDiv.appendChild(tipoElemento);

});