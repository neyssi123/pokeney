function getFavoritos(){
  return JSON.parse(localStorage.getItem('pokeney_favoritos') || '[]')
}

function salvarFavoritos(lista){
  localStorage.setItem('pokeney_favoritos', JSON.stringify(lista))
}

function toggleFavorito(id, el){
  let favs = getFavoritos()
  
  if(favs.includes(id)){
    favs = favs.filter(f => f !== id)
    el.textContent = '☆'
    el.classList.remove('ativo')
  } else {
    favs.push(id)
    el.textContent = '★'
    el.classList.add('ativo')
  }
  
  salvarFavoritos(favs)
}

function estaFavoritado(id){
  return getFavoritos().includes(id)
}
