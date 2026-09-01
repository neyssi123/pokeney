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

const tiposDiv = document.getElementById("tipos");

pokemon.tipos.forEach(tipo => {

    const tipoElemento = document.createElement("span");

    tipoElemento.textContent = tipo;

    tiposDiv.appendChild(tipoElemento);

});