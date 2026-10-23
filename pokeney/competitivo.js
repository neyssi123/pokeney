const API='https://pokeapi.co/api/v2'; 
const cache=new Map();
let baseStats={}, evs={hp:0,attack:0,defense:0,'special-attack':0,'special-defense':0,speed:0}, ivs={hp:31,attack:31,defense:31,'special-attack':31,'special-defense':31,speed:31}, level=100, natureza='hardy', currentPoke=null, pendingRestore=null;
let NATURES={};
const COMPETITIVOS=['leftovers','life-orb','choice-band','choice-scarf','choice-specs','assault-vest','heavy-duty-boots','rocky-helmet','black-sludge','focus-sash','eviolite','light-clay','heat-rock','covert-cloak','booster-energy','clear-amulet','loaded-dice','flame-orb','toxic-orb','sitrus-berry','lum-berry','mirror-herb','mental-herb','safety-goggles','blue-orb','red-orb'];

async function detalhe(url){ if(cache.has(url)) return cache.get(url); const r=await fetch(url); const j=await r.json(); cache.set(url,j); return j; }
function limpar(n){ return n.toLowerCase().replace('-primal','').replace('-mega','').trim(); }
function calc(k){ const b=baseStats[k]; if(!b) return 0; let v; if(k==='hp') v=Math.floor(((2*b+ivs[k]+Math.floor(evs[k]/4))*level)/100)+level+10; else { v=Math.floor(((2*b+ivs[k]+Math.floor(evs[k]/4))*level)/100)+5; if(NATURES[natureza] && NATURES[natureza]['+']===k) v=Math.floor(v*1.1); if(NATURES[natureza] && NATURES[natureza]['-']===k) v=Math.floor(v*0.9); } return v; }

async function carregarNatures(){
  const lista = await detalhe(`${API}/nature?limit=25`);
  const detalhes = await Promise.all(lista.results.map(r=>detalhe(r.url)));
  detalhes.forEach(d=>{ NATURES[d.name]={ '+': d.increased_stat?.name || null, '-': d.decreased_stat?.name || null }; });
  const nSel=document.getElementById('c-natureza');
  if(nSel){
    nSel.innerHTML = detalhes.map(d=>{
      const inc=d.increased_stat?.name; const dec=d.decreased_stat?.name;
      let label=d.name; if(inc) label+=` (+${inc} / -${dec})`; else label+=` (neutra)`;
      return `<option value="${d.name}" ${d.name===natureza?'selected':''}>${label}</option>`;
    }).join('');
    nSel.addEventListener('change',e=>{ natureza=e.target.value; atualizarUI(); });
  }
}

function renderStatusBarras(){
  const cores={hp:'#ef4444',attack:'#f97316',defense:'#eab308','special-attack':'#8b5cf6','special-defense':'#06b6d4',speed:'#ec4899'};
  const cont=document.getElementById('status-barras'); if(!cont||!Object.keys(baseStats).length) return;
  let total=0;
  cont.innerHTML=Object.keys(baseStats).map(k=>{
    const v=baseStats[k]; total+=v;
    const plus=NATURES[natureza] && NATURES[natureza]['+']===k;
    const minus=NATURES[natureza] && NATURES[natureza]['-']===k;
    const pct=Math.min(v/255*100,100);
    return `<div style="display:flex;align-items:center;gap:8px;font-size:12px"><span style="width:95px;font-weight:bold;font-size:11px;color:${plus?'#16a34a':minus?'#ef4444':'#111'}">${k}${plus?' +':minus?' -':''}</span><span style="width:30px">${v}</span><div style="flex:1;background:#e5e7eb;height:12px;border-radius:6px;overflow:hidden"><div style="height:100%;width:${pct}%;background:${plus?'#16a34a':minus?'#ef4444':cores[k]}"></div></div><b style="width:55px;text-align:right;color:${plus?'#16a34a':minus?'#ef4444':'#111'}">${calc(k)}${plus?' ▲':minus?' ▼':''}</b></div>`;
  }).join('');
  const bt=document.getElementById('base-total'); if(bt) bt.textContent=total;
}

function atualizarUI(){
  const total=Object.values(evs).reduce((a,b)=>a+b,0);
  const remainEl=document.getElementById('remain'); const usadoEl=document.getElementById('ev-usado'); const bar=document.getElementById('remain-bar');
  if(remainEl) remainEl.textContent=510-total;
  if(usadoEl) usadoEl.textContent=total;
  if(bar){ bar.style.width=`${Math.min(total/510*100,100)}%`; bar.style.background=total>510?'#ef4444':total===510?'#16a34a':'#2563eb'; }
  document.querySelectorAll('#ev-lines .line').forEach(line=>{
    const k=line.dataset.stat; if(!k) return;
    const plus=NATURES[natureza] && NATURES[natureza]['+']===k;
    const minus=NATURES[natureza] && NATURES[natureza]['-']===k;
    const tot=line.querySelector('.total'); if(tot){ tot.textContent=calc(k)+(plus?' ▲ +':minus?' ▼ -':''); tot.style.color=plus?'#16a34a':minus?'#ef4444':'#111'; }
    const b=line.querySelector('b'); if(b){ b.textContent=k+(plus?' (+)':minus?' (-)':''); b.style.color=plus?'#16a34a':minus?'#ef4444':'#111'; }
    const evIn=line.querySelector('.ev'); const rg=line.querySelector('input[type="range"]'); const barLine=line.querySelector('.bar');
    if(evIn) evIn.value=evs[k]; if(rg) rg.value=evs[k]; if(barLine) barLine.style.width=`${evs[k]/252*100}%`;
  });
  renderStatusBarras();
  const nickStats=document.getElementById('nick-stats');
  if(nickStats && Object.keys(baseStats).length){
    nickStats.textContent=`Lv${level} - HP:${calc('hp')} ATK:${calc('attack')} DEF:${calc('defense')} SPA:${calc('special-attack')} SPD:${calc('special-defense')} SPE:${calc('speed')}`;
  }
}

function updateItemImg(nome){
  const img=document.getElementById('c-item-img'); if(!img) return;
  if(!nome){ img.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'; return; }
  img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${nome}.png`;
  img.onerror=()=>{ img.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'; };
}

async function mostrarMoves(p){
  const nomeEl=document.getElementById('moves-poke-nome'); if(nomeEl) nomeEl.textContent=p.name.toUpperCase();
  const div=document.getElementById('moves-tabela'); if(!div) return; div.innerHTML='Carregando...';
  let html=`<table style="width:100%;font-size:13px;border-collapse:collapse"><tr style="background:#f3f4f6;text-align:left"><th>Move</th><th>Tipo</th><th>Poder</th><th>Acerto</th><th>Desc</th><th></th></tr>`;
  for(let m of p.moves.slice(0,50)){
    try{ const d=await detalhe(m.move.url); const desc=d.effect_entries.find(e=>e.language.name==='en')?.short_effect||'-'; html+=`<tr style="border-bottom:1px solid #eee"><td><b>${d.name}</b><br><small>${d.damage_class.name}</small></td><td>${d.type.name}</td><td>${d.power||'-'}</td><td>${d.accuracy||'-'}%</td><td style="max-width:200px;font-size:11px;color:#555">${desc.slice(0,80)}</td><td><button onclick="addMove('${d.name}')" style="background:#2563eb;color:white;border:none;padding:4px 8px;border-radius:6px;cursor:pointer">+ Usar</button></td></tr>`; }catch{}
  }
  html+=`</table>`; div.innerHTML=html;
}
async function mostrarHabilidades(p){
  const div=document.getElementById('hab-desc'); if(!div) return; let html='';
  for(let a of p.abilities){ const det=await detalhe(a.ability.url); const desc=det.effect_entries.find(e=>e.language.name==='en')?.short_effect||'Sem descrição'; html+=`<div style="background:#f9fafb;border:1px solid #e5e7eb;padding:8px;border-radius:6px;margin-bottom:6px"><b>${det.name} ${a.is_hidden?'(Hidden)':''}</b><br><small style="color:#555">${desc}</small></div>`; }
  div.innerHTML=html;
}
window.addMove=(nome)=>{ const slots=document.querySelectorAll('#c-moves input'); let alvo=window.ultimoSlot||[...slots].find(s=>!s.value)||slots[0]; alvo.value=nome; alvo.focus(); }

async function carregarPokemon(nomeOriginal){
  const nome=limpar(nomeOriginal);
  const p=await detalhe(`${API}/pokemon/${nome}`);
  currentPoke=p;
  const imgEl=document.getElementById('c-img'); if(imgEl) imgEl.src=p.sprites.other['official-artwork'].front_default||p.sprites.front_default;
  const nomeInput=document.getElementById('c-nome'); if(nomeInput) nomeInput.value=p.name;
  const nickEl=document.getElementById('nick'); if(nickEl) nickEl.textContent=p.name.toUpperCase();
  const habEl=document.getElementById('c-hab'); if(habEl) habEl.innerHTML=p.abilities.map(a=>`<option>${a.ability.name}</option>`).join('');
  const movesNomes=p.moves.map(x=>x.move.name);
  let dlM=document.getElementById('lista-moves'); if(!dlM){ dlM=document.createElement('datalist'); dlM.id='lista-moves'; document.body.appendChild(dlM); }
  dlM.innerHTML=movesNomes.map(n=>`<option value="${n}">`).join('');
  const movesParaMostrar = pendingRestore ? pendingRestore.moves : movesNomes;
  const movesDiv=document.getElementById('c-moves');
  if(movesDiv) movesDiv.innerHTML=[0,1,2,3].map(i=>`<input list="lista-moves" value="${movesParaMostrar[i]||''}" placeholder="Move ${i+1}" style="width:100%;margin-top:6px;padding:8px;border:1px solid #3b82f6;border-radius:6px">`).join('');
  document.querySelectorAll('#c-moves input').forEach(inp=>{ inp.addEventListener('focus',()=>{ window.ultimoSlot=inp; }); });
  baseStats={}; p.stats.forEach(s=>baseStats[s.stat.name]=s.base_stat);
  const evLines=document.getElementById('ev-lines');
  if(evLines) evLines.innerHTML=Object.keys(baseStats).map(k=>`
    <div class="line" data-stat="${k}" style="display:grid;grid-template-columns:75px 35px 55px 1fr 45px 40px;gap:6px;align-items:center;padding:6px 0;border-bottom:1px solid #eee">
      <b style="font-size:11px">${k}</b><span>${baseStats[k]}</span>
      <input class="ev" type="number" min="0" max="252" value="${evs[k]}" style="width:50px;border:1px solid #ccc;border-radius:4px;text-align:center">
      <div style="display:flex;align-items:center;gap:5px"><div style="flex:1;background:#e5e7eb;height:10px;border-radius:5px;overflow:hidden"><div class="bar" style="height:100%;background:#2563eb;width:${evs[k]/252*100}%"></div></div><input type="range" min="0" max="252" step="4" value="${evs[k]}" style="width:70px"></div>
      <input class="iv" type="number" min="0" max="31" value="${ivs[k]}" style="width:40px;text-align:center;border:1px solid #ccc;border-radius:4px">
      <b class="total">${calc(k)}</b>
    </div>`).join('');
  const tag=document.querySelector('.tag'); if(tag) tag.textContent=Object.entries(baseStats).map(([k,v])=>`${k}:${v}`).join(' / ');
  atualizarUI();
  const listaItens=document.getElementById('lista-itens'); if(listaItens) listaItens.innerHTML=COMPETITIVOS.map(i=>`<option value="${i}">`).join('');
  const compLista=document.getElementById('itens-comp-lista'); if(compLista) compLista.innerHTML=COMPETITIVOS.map(i=>`<span onclick="document.getElementById('c-item').value='${i}';updateItemImg('${i}')" style="background:white;border:1px solid #3b82f6;color:#2563eb;padding:3px 7px;border-radius:12px;font-size:10px;cursor:pointer">${i}</span>`).join('');
  mostrarMoves(p); mostrarHabilidades(p);
  if(pendingRestore){
    const itemEl=document.getElementById('c-item'); if(itemEl) itemEl.value=pendingRestore.item; updateItemImg(pendingRestore.item);
    if(habEl) habEl.value=pendingRestore.hab;
    const nSel=document.getElementById('c-natureza'); if(nSel) nSel.value=pendingRestore.natureza; natureza=pendingRestore.natureza;
    evs=pendingRestore.evs; atualizarUI(); pendingRestore=null;
  }
}

let time=JSON.parse(localStorage.getItem('pokeney-time')||'[null,null,null,null,null,null]');
function salvarTime(){ localStorage.setItem('pokeney-time', JSON.stringify(time)); renderTime(); }
function renderTime(){
  const cont=document.getElementById('time-slots'); if(!cont) return;
  cont.innerHTML=time.map((p,i)=>{
    if(!p) return `<div class="slot" onclick="carregarDoSlot(${i})"><small>Slot ${i+1}</small><br>+</div>`;
    return `<div class="slot filled" onclick="carregarDoSlot(${i})"><button class="remove" onclick="event.stopPropagation();removerSlot(${i})">x</button><img class="poke" src="${p.img}"><br><b style="font-size:11px">${p.nome}</b><br><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${p.item}.png" style="width:18px;height:18px;vertical-align:middle" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"><small style="font-size:9px"> ${p.item}</small></div>`;
  }).join('');
}
window.removerSlot=(i)=>{ time[i]=null; salvarTime(); }
window.carregarDoSlot=async (i)=>{ if(!time[i]) return; pendingRestore=time[i]; evs=time[i].evs; await carregarPokemon(time[i].nome); }
window.limparTime=()=>{ if(confirm('Limpar time?')){ time=[null,null,null,null,null,null]; salvarTime(); } }
window.exportarTime=()=>{
  const pre=document.getElementById('export');
  if(pre.style.display==='block'){ pre.style.display='none'; return; }
  let txt=time.filter(Boolean).map(p=>`${p.nome} @ ${p.item}\nAbility: ${p.hab}\nLevel: ${level}\nEVs: ${Object.entries(p.evs).map(([k,v])=>v?`${v} ${k}`:'').filter(Boolean).join(' / ')}\n${p.natureza} Nature\n- ${p.moves.join('\n- ')}`).join('\n\n');
  pre.style.display='block'; pre.textContent=txt||'Time vazio';
}

document.addEventListener('DOMContentLoaded', async ()=>{
  await carregarNatures();
  const params=new URLSearchParams(location.search); carregarPokemon(params.get('pokemon')||'garchomp');
  const input=document.getElementById('c-nome'); const btn=document.getElementById('btn-troca');
  const trocar=()=>{ const v=input.value.trim(); if(v){ history.replaceState({},'','?pokemon='+v); carregarPokemon(v); } };
  if(btn) btn.addEventListener('click',trocar); if(input) input.addEventListener('keydown',e=>{ if(e.key==='Enter') trocar(); });
  const itemInput=document.getElementById('c-item'); if(itemInput) itemInput.addEventListener('input', e=> updateItemImg(e.target.value));
  const evLines=document.getElementById('ev-lines');
  if(evLines) evLines.addEventListener('input', e=>{
    const line=e.target.closest('.line'); if(!line) return; const k=line.dataset.stat;
    const totalAtual=Object.values(evs).reduce((a,b)=>a+b,0);
    let novo=+e.target.value||0;
    if(e.target.type==='range'||e.target.classList.contains('ev')){
      const semEsse=totalAtual-evs[k]; if(semEsse+novo>510){ novo=510-semEsse; if(novo<0) novo=0; } if(novo>252) novo=252; evs[k]=novo;
    }
    if(e.target.classList.contains('iv')) ivs[k]=Math.min(31,novo);
    atualizarUI();
  });
  const btnAdd=document.getElementById('btn-add-time');
  if(btnAdd) btnAdd.addEventListener('click',()=>{
    const movesAtuais=[...document.querySelectorAll('#c-moves input')].map(i=>i.value).filter(Boolean);
    const dados={ nome:document.getElementById('c-nome').value, img:document.getElementById('c-img').src, item:document.getElementById('c-item').value||'leftovers', hab:document.getElementById('c-hab').value, natureza, evs:{...evs}, moves:movesAtuais };
    let idx=time.findIndex(p=>!p); if(idx===-1){ if(!confirm('Time cheio. Substituir slot 6?')) return; idx=5; }
    time[idx]=dados; salvarTime(); updateItemImg(dados.item);
  });
  fetch(`${API}/pokemon?limit=1025`).then(r=>r.json()).then(d=>{ const dl=document.getElementById('lista-pokes'); if(dl) dl.innerHTML=d.results.map(p=>`<option value="${p.name}">`).join(''); });
  renderTime();
});

window.setLevel=(v)=>{ level=v; atualizarUI(); };
window.calc=calc;
