const grid = document.getElementById('itens-grid')
const status = document.getElementById('status')
const busca = document.getElementById('buscaItem')

let todosItens = []

async function carregarItens() {
  const salvo = localStorage.getItem('pokeney_itens')
  if (salvo) {
    todosItens = JSON.parse(salvo)
    mostrar(todosItens)
    return
  }

  const res = await fetch('https://pokeapi.co/api/v2/item?limit=150')
  const data = await res.json()

  const lista = await Promise.all(
    data.results.map(async (i) => {
      const r = await fetch(i.url)
      const d = await r.json()
      return {
        nome: d.name,
        img: d.sprites.default,
        custo: d.cost,
        efeito: d.effect_entries.find(e => e.language.name === 'en')?.short_effect || ''
      }
    })
  )

  todosItens = lista
  localStorage.setItem('pokeney_itens', JSON.stringify(lista))
  mostrar(lista)
}

function mostrar(lista) {
  status.textContent = ''
  grid.innerHTML = lista.map(item => {
    const fav = estaFavoritado(item.idOriginal)
    return `
    <div class="item-card">
      <img src="${item.img}">
      <h3>${item.nome}</h3>
      <p>${item.efeito}</p>
    </div>
    `
  }).join('')
}

busca.addEventListener('input', () => {
  const termo = busca.value.toLowerCase()
  const filtrados = todosItens.filter(i => i.nome.includes(termo))
  mostrar(filtrados)
})

carregarItens()
