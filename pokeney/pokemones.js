
const pokemones = {
    garchomp: {
        numero: 445,
        nombre: "Garchomp",
        tipos: ["Dragón", "Tierra"],
        imagen: "imagenes/garchomp.png",
        descripcion: "Un Pokémon de tipo Dragón y Tierra."
    },

    charizard: {
        numero: 0o6,
        nombre: "Charizard",
        tipos: ["Fogo", "Voador"],
        imagen: "imagenes/charizard.png",
        descripcion: "Um Pokémon dragão cospe-fogo extremamente orgulhoso. Ele voa alto em busca de oponentes fortes e sua chama na cauda queima com mais intensidade conforme acumula experiência em batalha.",
        altura:"1.7m",
        peso: "90.5 kg",
        habilidade: "Blaze",
        localizacao:"Kanto",
        fraquezas:"Pedra (4x), Água, Elétrico",
        stats: {
        hp: 78,
        ataque: 84,
        defesa: 78,
        ataqueEsp: 109,
        defesaEsp: 85,
        velocidade: 100
    },
        evolucao: [
    {
        nombre: "Charmander",
        imagen: "imagenes/charmander.png"
    },
    {
        nombre: "Charmeleon",
        imagen: "imagenes/charmeleon.png"
    },
    {
        nombre: "Charizard",
        imagen: "imagenes/charizard.png"
    }
]
    },

    blastoise: {
        numero: 9,
        nombre: "Blastoise",
        tipos: ["Água"],
        imagen: "imagenes/blastoise.png",
        descripcion: "Possui canhões de água de alta pressão embutidos em sua carapaça. Seus disparos são precisos e capazes de perfurar aço ou quebrar paredes de concreto espessas.",
        altura:"1.6m",
        peso: "85.5 kg",
        habilidade: "Torrent",
        localizacao:"Kanto",
    }
};