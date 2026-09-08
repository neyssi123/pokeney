const pokemones = {

  gible: {
    numero: 443,
    nome: "gible",
    tipos: ["Dragão", "Terrestre"],
    imagem: "imagenes/gible.png",
    shiny:"imagenes/gible-shiny.png",
    descrição:
      "Mora em buracos aquecidos pelo calor geotérmico. Se algo se aproximar de sua toca, ele ataca de surpresa com sua boca enorme.",
    altura: "0.7m",
    peso: "20.5 kg",
    habilidade: "Sand Veil",
    localizacao: "Sinnoh",
    fraquezas: [
      { tipo: "gelo", multiplicador: "4x" },
      { tipo: "dragão", multiplicador: "2x" },
      { tipo: "fada", multiplicador: "2x" },
    ],
    stats: {
      hp: 58,
      ataque: 70,
      defesa: 45,
      ataqueEsp: 40,
      defesaEsp: 45,
      velocidade: 42,
    },
    evolucao: [
      {
        id: "gible",
        nome: "gible",
        imagem: "imagenes/gible.png",
      },
      {
        id: "gabite",
        nome: "gabite",
        imagem: "imagenes/gabite.png",
      },
      {
        id: "garchomp",
        nome: "garchomp",
        imagem: "imagenes/garchomp.png",
      },
    ],
  },

  gabite: {
    numero: 444,
    nome: "gabite",
    tipos: ["Dragão", "Terrestre"],
    imagem: "imagenes/gabite.png",
    shiny: "imagenes/gabite-shiny.png",
    descrição:
      "Ele adora coisas brilhantes e costuma escavar em busca de gemas para acumular em seu ninho. Costuma ser alvo de caçadores por causa de suas escamas.",
    altura: "1.4m",
    peso: "56.0 kg",
    habilidade: "Sand Veil",
    localizacao: "Sinnoh",
    fraquezas: [
      { tipo: "gelo", multiplicador: "4x" },
      { tipo: "dragão", multiplicador: "2x" },
      { tipo: "fada", multiplicador: "2x" },
    ],
    stats: {
      hp: 68,
      ataque: 90,
      defesa: 65,
      ataqueEsp: 50,
      defesaEsp: 55,
      velocidade: 82,
    },
    evolucao: [
      {
        id: "gible",
        nome: "gible",
        imagem: "imagenes/gible.png",
      },
      {
        id: "gabite",
        nome: "gabite",
        imagem: "imagenes/gabite.png",
      },
      {
        id: "garchomp",
        nome: "garchomp",
        imagem: "imagenes/garchomp.png",
      },
    ],
  },

  garchomp: {
    numero: 445,
    nome: "garchomp",
    shiny: "imagenes/garchomp-shiny.png",
    tipos: ["Dragão", "Terrestre"],
    imagem: "imagenes/garchomp.png",
    descrição:"Quando ele se dobra e estica as asas, parece um jato de combate. Ele voa em velocidade sônica procurando por presas.",
    altura: "1.9m",
    peso: "95.0 kg",
    habilidade: "Sand Veil",
    localizacao: "Sinnoh",
    fraquezas: [
      { tipo: "gelo", multiplicador: "4x" },
      { tipo: "dragão", multiplicador: "2x" },
      { tipo: "fada", multiplicador: "2x" },
    ],
    stats: {
      hp: 108,
      ataque: 130,
      defesa: 95,
      ataqueEsp: 80,
      defesaEsp: 85,
      velocidade: 102,
    },
    evolucao: [
      {
        id: "gible",
        nome: "gible",
        imagem: "imagenes/gible.png",
      },
      {
        id: "gabite",
        nome: "gabite",
        imagem: "imagenes/gabite.png",
      },
      {
        id: "garchomp",
        nome: "garchomp",
        imagem: "imagenes/garchomp.png",
      },
    ],
  },

  charizard: {
    numero: 6,
    nome: "Charizard",
    shiny: "imagenes/charizard-shiny.png",
    tipos: ["Fogo", "Voador"],
    imagem: "imagenes/charizard.png",
    descrição:"Um Pokémon dragão cospe-fogo extremamente orgulhoso. Ele voa alto em busca de oponentes fortes e sua chama na cauda queima com mais intensidade conforme acumula experiência em batalha.",
    altura: "1.7m",
    peso: "90.5 kg",
    habilidade: "Blaze",
    localizacao: "Kanto",
    fraquezas: [
      { tipo: "Pedra", multiplicador: "4x" },
      { tipo: "agua", multiplicador: "2x" },
      { tipo: "Eletrico", multiplicador: "2x" },
    ],
    stats: {
      hp: 78,
      ataque: 84,
      defesa: 78,
      ataqueEsp: 109,
      defesaEsp: 85,
      velocidade: 100,
    },
    evolucao: [
      {
        id: "charmander",
        nome: "Charmander",
        imagem: "imagenes/charmander.png",
      },
      {
        id: "charmeleon",
        nome: "Charmeleon",
        imagem: "imagenes/charmeleon.png",
      },
      {
        id: "charizard",
        nome: "Charizard",
        imagem: "imagenes/charizard.png",
      },
    ],
  },

  charmander: {
    numero: 4,
    nome: "Charmander",
    tipos: ["Fogo"],
    imagem: "imagenes/charmander.png",
    shiny: "imagenes/charmander-shiny.png",
    descrição:
      "A chama na ponta de sua cauda indica a força de sua vida. Se estiver saudável, a chama queimará intensamente.",
    altura: "0.6m",
    peso: "8.5 kg",
    habilidade: "Blaze",
    localizacao: "Kanto",
    fraquezas: [
      { tipo: "terrestre", multiplicador: "2x" },
      { tipo: "agua", multiplicador: "2x" },
      { tipo: "Pedra", multiplicador: "2x" },
    ],
    stats: {
      hp: 39,
      ataque: 52,
      defesa: 43,
      ataqueEsp: 60,
      defesaEsp: 50,
      velocidade: 65,
    },
    evolucao: [
      {
        id: "charmander",
        nome: "Charmander",
        imagem: "imagenes/charmander.png",
      },
      {
        id: "charmeleon",
        nome: "Charmeleon",
        imagem: "imagenes/charmeleon.png",
      },
      {
        id: "charizard",
        nome: "Charizard",
        imagem: "imagenes/charizard.png",
      },
    ],
  },

  charmeleon: {
    numero: 5,
    nome: "Charmeleon",
    tipos: ["Fogo"],
    imagem: "imagenes/charmeleon.png",
    shiny: "imagenes/charmeleon-shiny.png",
    descrição:
      "Tem uma índole agressiva e busca constantemente por oponentes. Ele bate sua cauda flamejante para elevar a temperatura ao seu redor antes de atacar.",
    altura: "1.1m",
    peso: "19.0 kg",
    habilidade: "Blaze",
    localizacao: "Kanto",
    fraquezas: [
      { tipo: "Terrestre", multiplicador: "2x" },
      { tipo: "agua", multiplicador: "2x" },
      { tipo: "Pedra", multiplicador: "2x" },
    ],
    stats: {
      hp: 58,
      ataque: 64,
      defesa: 58,
      ataqueEsp: 80,
      defesaEsp: 65,
      velocidade: 80,
    },
    evolucao: [
      {
        id: "charmander",
        nome: "Charmander",
        imagem: "imagenes/charmander.png",
      },
      {
        id: "charmeleon",
        nome: "Charmeleon",
        imagem: "imagenes/charmeleon.png",
      },
      {
        id: "charizard",
        nome: "Charizard",
        imagem: "imagenes/charizard.png",
      },
    ],
  },

  blastoise: {
    numero: 9,
    nome: "blastoise",
    tipos: ["Agua"],
    imagem: "imagenes/blastoise.png",
    shiny: "imagenes/blastoise-shiny.png",
    descrição:"Os canhões de água em seu casco disparam jatos capazes de perfurar aço grosso. Ele se fixa firmemente no chão para suportar o recuo dos disparos.",
    altura: "1.6m",
    peso: "85.5kg",
    habilidade: "Torrent",
    localizacao: "Kanto",
    fraquezas: [
      { tipo: "eletrico", multiplicador: "2x" },
      { tipo: "planta", multiplicador: "2x" },
    ],
    stats: {
      hp: 79,
      ataque: 83,
      defesa: 100,
      ataqueEsp: 85,
      defesaEsp: 105,
      velocidade: 78
    },
    evolucao: [
      {
        id: "squirtle",
        nome: "squirtle",
        imagem: "imagenes/squirtle.png",
      },
      {
        id: "wartortle",
        nome: "wartortle",
        imagem: "imagenes/wartortle.png",
      },
      {
        id: "blastoise",
        nome: "blastoise",
        imagem: "imagenes/blastoise.png",
      },
    ],
  },

  wartortle: {
    numero: 8,
    nome: "wartortle",
    tipos: ["Agua"],
    imagem: "imagenes/wartortle.png",
    shiny: "imagenes/wartortle-shiny.png",
    descrição:"Sua cauda longa e felpuda é um símbolo de longevidade. É muito popular como mascote entre pessoas mais velhas.",
    altura: "1.0m",
    peso: "22.5kg",
    habilidade: "Torrent",
    localizacao: "Kanto",
    fraquezas: [
      { tipo: "eletrico", multiplicador: "2x" },
      { tipo: "planta", multiplicador: "2x" },
    ],
    stats: {
      hp: 59,
      ataque: 63,
      defesa: 80,
      ataqueEsp: 65,
      defesaEsp: 80,
      velocidade: 58
    },
    evolucao: [
      {
        id: "squirtle",
        nome: "squirtle",
        imagem: "imagenes/squirtle.png",
      },
      {
        id: "wartortle",
        nome: "wartortle",
        imagem: "imagenes/wartortle.png",
      },
      {
        id: "blastoise",
        nome: "blastoise",
        imagem: "imagenes/blastoise.png",
      },
    ],
  },

  squirtle: {
    numero: 7,
    nome: "squirtle",
    tipos: ["Agua"],
    imagem: "imagenes/squirtle.png",
    shiny: "imagenes/squirtle-shiny.png",
    descrição:"Quando se sente ameaçado, recolhe seus membros e pescoço para dentro do casco. Em seguida, espirra água com grande força.",
    altura: "0.5m",
    peso: "9.0kg",
    habilidade: "Torrent",
    localizacao: "Kanto",
    fraquezas: [
      { tipo: "eletrico", multiplicador: "2x" },
      { tipo: "planta", multiplicador: "2x" },
    ],
    stats: {
      hp: 44,
      ataque: 48,
      defesa: 65,
      ataqueEsp: 50,
      defesaEsp: 64,
      velocidade: 43
    },
    evolucao: [
      {
        id: "squirtle",
        nome: "squirtle",
        imagem: "imagenes/squirtle.png",
      },
      {
        id: "wartortle",
        nome: "wartortle",
        imagem: "imagenes/wartortle.png",
      },
      {
        id: "blastoise",
        nome: "blastoise",
        imagem: "imagenes/blastoise.png",
      },
    ],
  },

  };
