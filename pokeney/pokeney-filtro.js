const API = 'https://pokeapi.co/api/v2';
const campoPesquisa = document.getElementById('campo-pesquisa');
const botoesGeracao = document.querySelectorAll('#geracao button');
const container = document.getElementById('pokemons');
const TAMANHO_PAGINA = 30;
let geracaoSelecionada = 0, listaPokemon = [], exibidos = 0, carregando = false;
const geracoes = [{min:1,max:151},{min:152,max:251},{min:252,max:386},{min:387,max:493},{min:494,max:649},{min:650,max:721},{min:722,max:809},{min:810,max:905},{min:906,max:1025}];
const tiposPt={normal:'Normal',fire:'Fogo',water:'Água',electric:'Elétrico',grass:'Planta',ice:'Gelo',fighting:'Lutador',poison:'Veneno',ground:'Terrestre',flying:'Voador',psychic:'Psíquico',bug:'Inseto',rock:'Pedra',ghost:'Fantasma',dragon:'Dragão',dark:'Sombrio',steel:'Aço',fairy:'Fada'};
const tipoArquivo={fire:'fogo',water:'agua',electric:'eletrico',grass:'planta',ice:'gelo',fighting:'lutador',poison:'veneno',ground:'terrestre',flying:'voador',psychic:'psiquico',bug:'inseto',rock:'pedra',ghost:'fantasma',dragon:'dragao',dark:'sombrio',steel:'aco',fairy:'fada',normal:'normal'};
const cache=new Map();
function geracaoDo(id){return geracoes.findIndex(g=>id>=g.min&&id<=g.max)+1||9;}
function nomeTipo(t){return tiposPt[t]||t;}

function criarCarta(p){
  const carta=document.createElement('div');
  carta.className='carta-pokemon tipo-'+(tipoArquivo[p.types[0]?.type.name]||p.types[0]?.type.name||'normal');
  carta.dataset.id=p.id;
  carta.dataset.nome=p.name;
  carta.dataset.geracao=geracaoDo(p.id);

  const ehFav = typeof estaFavoritado === 'function' ? estaFavoritado(p.name) : false;
  const estrela = document.createElement('span');
  estrela.className = 'estrela' + (ehFav ? ' ativo' : '');
  estrela.textContent = ehFav ? '★' : '☆';
  estrela.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(typeof toggleFavorito === 'function') toggleFavorito(p.name, estrela);
  };

  const info=document.createElement('div');
  info.className='info-pokemon';
  const img=document.createElement('img');
  img.src=p.sprites?.other?.['official-artwork']?.front_default||p.sprites?.front_default||'';
  img.alt=p.name;img.loading='lazy';
  const num=document.createElement('h3');
  num.textContent='#'+String(p.id).padStart(3,'0');
  const a=document.createElement('a');
  a.href='pokemon-info.html?pokemon='+encodeURIComponent(p.name);
  const nome=document.createElement('h3');
  nome.textContent=p.name;
  a.appendChild(nome);
  const tipos=document.createElement('div');
  tipos.className='tipos';
  p.types.forEach(x=>{const tipo=x.type.name;const ic=document.createElement('img');ic.src='imagenes/tipo-'+(tipoArquivo[tipo]||tipo)+'.png';ic.alt='';ic.onerror=()=>ic.style.display='none';const label=document.createElement('h3');label.textContent=nomeTipo(tipo);tipos.append(ic,label);});
  info.append(img,num,a,tipos);
  carta.append(estrela, info);
  return carta;
}

async function detalhe(p){if(cache.has(p.name))return cache.get(p.name);const r=await fetch(p.url);if(!r.ok)throw Error('Falha ao carregar '+p.name);const d=await r.json();cache.set(p.name,d);return d;}
function filtrados(){const texto=(campoPesquisa?.value||'').trim().toLowerCase();return listaPokemon.filter(p=>(!texto||p.name.includes(texto)||String(p.id).includes(texto))&&(!geracaoSelecionada||geracaoDo(p.id)===geracaoSelecionada));}
function estado(msg){let el=document.getElementById('estado-api');if(!el){el=document.createElement('p');el.id='estado-api';container.prepend(el);}el.textContent=msg;}
function prepararPaginacao(){let el=document.getElementById('pokeney-paginacao');if(!el){el=document.createElement('div');el.id='pokeney-paginacao';el.style.cssText='width:100%;display:flex;justify-content:center;padding:20px;';container.appendChild(el);}el.replaceChildren();return el;}
async function renderizar(reiniciar=false){if(carregando)return;carregando=true;if(reiniciar){exibidos=0;container.querySelectorAll('.carta-pokemon').forEach(c=>c.remove());}const lista=filtrados();const pag=prepararPaginacao();if(!lista.length){estado('Nenhum Pokémon encontrado.');pag.remove();carregando=false;return;}const lote=lista.slice(exibidos,exibidos+TAMANHO_PAGINA);try{estado('Carregando Pokémon...');const detalhes=await Promise.all(lote.map(detalhe));detalhes.forEach(p=>container.insertBefore(criarCarta(p),pag));exibidos+=detalhes.length;const st=document.getElementById('estado-api');if(st)st.remove();if(exibidos<lista.length){const btn=document.createElement('button');btn.textContent='Carregar mais Pokémon';btn.addEventListener('click',()=>renderizar(false));pag.appendChild(btn);}else pag.remove();}catch(e){estado('Não foi possível carregar os Pokémon. Verifique a conexão e tente novamente.');console.error(e);}finally{carregando=false;}}
async function iniciar(){estado('Conectando à PokéAPI...');try{const r=await fetch(`${API}/pokemon?limit=1025&offset=0`);if(!r.ok)throw Error('API indisponível');const dados=await r.json();listaPokemon=dados.results.map((p,i)=>({id:i+1,name:p.name,url:p.url}));await renderizar(true);}catch(e){estado('Erro ao conectar à PokéAPI. Confira sua internet e recarregue a página.');console.error(e);}}
let temporizador;campoPesquisa?.addEventListener('input',()=>{clearTimeout(temporizador);temporizador=setTimeout(()=>renderizar(true),250);});botoesGeracao.forEach(b=>b.addEventListener('click',()=>{geracaoSelecionada=Number(b.dataset.geracao)||0;botoesGeracao.forEach(x=>x.classList.toggle('geracao-ativa',x===b));renderizar(true);}));iniciar();