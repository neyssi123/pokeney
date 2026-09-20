
const campoPesquisa = document.getElementById("campo-pesquisa");
const botoesGeracao = document.querySelectorAll("#geracao button");
const cartasPokemon = document.querySelectorAll(".carta-pokemon");

let geracaoSelecionada = 0;


function descobrirGeracao(numero) {

    if (numero <= 151) {
        return 1;
    }

    if (numero <= 251) {
        return 2;
    }

    if (numero <= 386) {
        return 3;
    }

    if (numero <= 493) {
        return 4;
    }

    if (numero <= 649) {
        return 5;
    }

    if (numero <= 721) {
        return 6;
    }

    if (numero <= 809) {
        return 7;
    }

    if (numero <= 905) {
        return 8;
    }

    return 9;
}


function filtrarPokemons() {

    const texto = campoPesquisa.value.toLowerCase();

    cartasPokemon.forEach((carta) => {

        const numero = parseInt(
            carta.querySelector("h3").textContent.replace("#", "")
        );

        const nome = carta.querySelector("a h3").textContent.toLowerCase();

        const geracao = descobrirGeracao(numero);

        const correspondeNome = nome.includes(texto);
        const correspondeNumero = numero.toString().includes(texto);

        const correspondeGeracao =
            geracaoSelecionada === 0 ||
            geracao === geracaoSelecionada;

        if (
            (correspondeNome || correspondeNumero) &&
            correspondeGeracao
        ) {
            carta.style.display = "";
        } else {
            carta.style.display = "none";
        }
    });
}


botoesGeracao.forEach((botao) => {

    botao.addEventListener("click", function () {

        geracaoSelecionada = parseInt(
            botao.dataset.geracao
        );

        filtrarPokemons();
    });

});


campoPesquisa.addEventListener("input", filtrarPokemons);

