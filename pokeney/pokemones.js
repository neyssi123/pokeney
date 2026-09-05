
const pokemones = {
    gible: {
        numero: 443,
        nome: "gible",
        tipos: ["Dragão", "Terrestre"],
        imagem: "imagenes/gible.png",
        descrição: "Mora em buracos aquecidos pelo calor geotérmico. Se algo se aproximar de sua toca, ele ataca de surpresa com sua boca enorme.",
        altura:"0.7m",
        peso: "20.5 kg",
        habilidade: "Sand Veil",
        localizacao:"Sinnoh",
        fraquezas:"Gelo (4x), Dragão, Fada",
        stats: {
        hp: 58,
        ataque: 70,
        defesa: 45,
        ataqueEsp: 40,
        defesaEsp: 45,
        velocidade: 42
    },
        evolucao: [
    {
        id: "gible",
        nome: "gible",
        imagem: "imagenes/gible.png"
    },
    {
        id: "gabite",
        nome: "gabite",
        imagem: "imagenes/gabite.png"
    },
    {
        id: "garchomp",
        nome: "garchomp",
        imagem: "imagenes/garchomp.png"
    }
]
    },

    gabite: {
        numero: 444,
        nome: "gabite",
        tipos: ["Dragão", "Terrestre"],
        imagem: "imagenes/gabite.png",
        descrição: "Ele adora coisas brilhantes e costuma escavar em busca de gemas para acumular em seu ninho. Costuma ser alvo de caçadores por causa de suas escamas.",
        altura:"1.4m",
        peso: "56.0 kg",
        habilidade: "Sand Veil",
        localizacao:"Sinnoh",
        fraquezas:"Gelo (4x), Dragão, Fada",
        stats: {
        hp: 68,
        ataque: 90,
        defesa: 65,
        ataqueEsp: 50,
        defesaEsp: 55,
        velocidade: 82
    },
        evolucao: [
    {
        id: "gible",
        nome: "gible",
        imagem: "imagenes/gible.png"
    },
    {
        id: "gabite",
        nome: "gabite",
        imagem: "imagenes/gabite.png"
    },
    {
        id: "garchomp",
        nome: "garchomp",
        imagem: "imagenes/garchomp.png"
    }
]
    },

    garchomp: {
        numero: 445,
        nome: "garchomp",
        tipos: ["Dragão", "Terrestre"],
        imagem: "imagenes/garchomp.png",
        descrição: "Quando ele se dobra e estica as asas, parece um jato de combate. Ele voa em velocidade sônica procurando por presas.",
        altura:"1.9m",
        peso: "95.0 kg",
        habilidade: "Sand Veil",
        localizacao:"Sinnoh",
        fraquezas:"Gelo (4x), Dragão, Fada",
        stats: {
        hp: 108,
        ataque: 130,
        defesa: 95,
        ataqueEsp: 80,
        defesaEsp: 85,
        velocidade: 102
    },
        evolucao: [
    {
        id: "gible",
        nome: "gible",
        imagem: "imagenes/gible.png"
    },
    {
        id: "gabite",
        nome: "gabite",
        imagem: "imagenes/gabite.png"
    },
    {
        id: "garchomp",
        nome: "garchomp",
        imagem: "imagenes/garchomp.png"
    }
]
    },

    charizard: {
        numero: 6,
        nome: "Charizard",
        tipos: ["Fogo", "Voador"],
        imagem: "imagenes/charizard.png",
        descrição: "Um Pokémon dragão cospe-fogo extremamente orgulhoso. Ele voa alto em busca de oponentes fortes e sua chama na cauda queima com mais intensidade conforme acumula experiência em batalha.",
        altura:"1.7m",
        peso: "90.5 kg",
        habilidade: "Blaze",
        localizacao:"Kanto",
        fraquezas: [
        { tipo: "Pedra", multiplicador: "4x" },
        { tipo: "agua", multiplicador: "2x" },
        { tipo: "Elétrico", multiplicador: "2x" }
        ],
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
        id: "charmander",
        nome: "Charmander",
        imagem: "imagenes/charmander.png"
    },
    {
        id: "charmeleon",
        nome: "Charmeleon",
        imagem: "imagenes/charmeleon.png"
    },
    {
        id: "charizard",
        nome: "Charizard",
        imagem: "imagenes/charizard.png"
    }
]
    },

    charmander: {
        numero: 4,
        nome: "Charmander",
        tipos: ["Fogo"],
        imagem: "imagenes/charmander.png",
        descrição: "A chama na ponta de sua cauda indica a força de sua vida. Se estiver saudável, a chama queimará intensamente.",
        altura:"0.6m",
        peso: "8.5 kg",
        habilidade: "Blaze",
        localizacao:"Kanto",
        fraquezas: ["Pedra", "agua", "Elétrico"],
        stats: {
        hp: 39,
        ataque: 52,
        defesa: 43,
        ataqueEsp: 60,
        defesaEsp: 50,
        velocidade: 65
    },
        evolucao: [
    {
        id: "charmander",
        nome: "Charmander",
        imagem: "imagenes/charmander.png"
    },
    {
        id: "charmeleon",
        nome: "Charmeleon",
        imagem: "imagenes/charmeleon.png"
    },
    {
        id: "charizard",
        nome: "Charizard",
        imagem: "imagenes/charizard.png"
    }
]

    },

    charmeleon: {
        numero: 5,
        nome: "Charmeleon",
        tipos: ["Fogo"],
        imagem: "imagenes/charmeleon.png",
        descrição: "Tem uma índole agressiva e busca constantemente por oponentes. Ele bate sua cauda flamejante para elevar a temperatura ao seu redor antes de atacar.",
        altura:"1.1m",
        peso: "19.0 kg",
        habilidade: "Blaze",
        localizacao:"Kanto",
        fraquezas:"Água, Terra, Pedra",
        stats: {
        hp: 58,
        ataque: 64,
        defesa: 58,
        ataqueEsp: 80,
        defesaEsp: 65,
        velocidade: 80
    },
        evolucao: [
    {
        id: "charmander",
        nome: "Charmander",
        imagem: "imagenes/charmander.png"
    },
    {
        id: "charmeleon",
        nome: "Charmeleon",
        imagem: "imagenes/charmeleon.png"
    },
    {
        id: "charizard",
        nome: "Charizard",
        imagem: "imagenes/charizard.png"
    }
    
]

    },

    blastoise: {
        numero: 9,
        nome: "Blastoise",
        tipos: ["Água"],
        imagem: "imagenes/blastoise.png",
        descrição: "Possui canhões de água de alta pressão embutidos em sua carapaça. Seus disparos são precisos e capazes de perfurar aço ou quebrar paredes de concreto espessas.",
        altura:"1.6m",
        peso: "85.5 kg",
        habilidade: "Torrent",
        localizacao:"Kanto",
    }
};