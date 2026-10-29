'use strict';
(() => {
  const gallery = window.LAIZ_GALLERIES;
  const projects = [
    {id:'city',name:'City Galleria',region:'Região do Galleria · Campinas/SP',filter:'galleria',tag:'2 dormitórios',size:'wide',cover:0,summary:'Varanda, plantas de até 53,59 m² e espaços para aproveitar a vida.',description:'Apartamentos de dois dormitórios com varanda, na região do Galleria, em Campinas. Plantas diferenciadas de até 53,59 m².',features:['2 dormitórios','Varanda','Plantas de até 53,59 m²','Condomínio fechado','Piscinas','Quadra de areia'],extra:'Opções vinculadas ao Minha Casa Minha Vida, conforme condições aplicáveis.'},
    {id:'buritis',name:'Portal dos Buritis',builder:'MRV',region:'Região do Parque Prado',filter:'prado',tag:'Parque Prado',size:'medium',cover:0,summary:'Conheça os ambientes e as perspectivas deste endereço na região do Parque Prado.',description:'Um empreendimento MRV na região do Parque Prado. Explore as imagens dos ambientes e converse com a Laiz para conhecer as opções.',features:['Região do Parque Prado','Empreendimento MRV'],extra:'Consulte a Laiz para confirmar plantas, metragens, itens de lazer e condições de financiamento.'},
    {id:'colina',name:'Colina do Sol',builder:'MRV',region:'Campo Grande',filter:'campo',cover:0,tag:'Campo Grande',summary:'Uma nova possibilidade de endereço na região do Campo Grande.',description:'Conheça o Colina do Sol, empreendimento MRV na região do Campo Grande. Veja a galeria e saiba mais em um atendimento com a Laiz.',features:['Região do Campo Grande','Empreendimento MRV'],extra:'Consulte a Laiz para confirmar plantas, metragens, itens de lazer e condições de financiamento.'},
    {id:'cores',name:'Cores da Ilha',builder:'MRV',region:'Cidade Sete Sóis · Campo Grande',filter:'campo',cover:0,tag:'Cidade Sete Sóis',summary:'Conheça este empreendimento na Cidade Sete Sóis, na região do Campo Grande.',description:'O Cores da Ilha é um empreendimento MRV na Cidade Sete Sóis, região do Campo Grande. Explore os ambientes apresentados na galeria.',features:['Cidade Sete Sóis','Região do Campo Grande','Empreendimento MRV'],extra:'Consulte a Laiz para confirmar plantas, metragens, itens de lazer e condições de financiamento.'},
    {id:'canto',name:'Residencial Canto da Mata',region:'Região do Matão · Campinas/SP',filter:'matao',cover:1,tag:'2 dormitórios',summary:'Condomínio fechado com piscinas, espaço gourmet e lazer para compartilhar.',description:'Apartamentos de dois dormitórios em condomínio fechado com segurança, na região do Matão, em Campinas.',features:['2 dormitórios','Condomínio fechado com segurança','Piscinas','Salão de festas','Espaço gourmet','Playground','Pet place'],extra:'Possibilidade de financiamento pelo Minha Casa Minha Vida, conforme enquadramento.'},
    {id:'ares',name:'Vem Viver Ares',region:'Campo Grande · Campinas/SP',filter:'campo',cover:0,size:'panorama',tag:'2 dormitórios com varanda',summary:'Mais de 78 mil m² de área verde preservada e integração com parque linear.',description:'Na Av. John Boyd Dunlop, região do Campo Grande, em Campinas. Apartamentos de dois dormitórios com varanda e integração com parque linear.',features:['2 dormitórios com varanda','Mais de 78 mil m² de área verde preservada','Integração com parque linear','Piscinas adulto e infantil','Salão de festas','Playground','Bicicletário','Pet place','Condomínio fechado','Minha Casa Minha Vida'],extra:'Vista livre permanente, conforme informação comercial fornecida. Consulte a Laiz para conhecer as condições. Uma imagem disponível deste empreendimento.'}
  ];
  const wa = message => 'https://wa.me/5519999556966?text=' + encodeURIComponent(message);
  document.querySelectorAll('[data-wa]').forEach(a => { a.href=wa(a.dataset.wa); a.target='_blank'; a.rel='noopener noreferrer'; });
  document.getElementById('year').textContent=new Date().getFullYear();
  const grid=document.getElementById('property-grid');
  const photoIcon='<svg aria-hidden="true" viewBox="0 0 20 20"><rect x="4" y="3" width="13" height="13" rx="1"/><path d="M1 6v13h13M4 13l4-4 3 3 2-2 4 4"/><circle cx="13" cy="7" r="1"/></svg>';
  projects.forEach(p=>{
    const img=gallery[p.id][p.cover];
    const article=document.createElement('article');
    article.className='property-card reveal '+(p.size||'');article.dataset.region=p.filter;
    article.innerHTML=`<button class="property-image-button" data-project="${p.id}" aria-label="Ver galeria e detalhes de ${p.name}"><img src="${img.thumb}" srcset="${img.thumb} 720w, ${img.src} 1600w" sizes="(max-width:520px) calc(100vw - 48px), (max-width:800px) 45vw, ${p.size==='panorama'?'90vw':p.size==='wide'?'53vw':p.size==='medium'?'38vw':'29vw'}" width="${img.width}" height="${img.height}" alt="${img.alt}" loading="lazy"><span class="image-count">${photoIcon}${String(gallery[p.id].length).padStart(2,'0')} ${gallery[p.id].length===1?'IMAGEM':'IMAGENS'}</span><span class="property-arrow" aria-hidden="true">↗</span></button><div class="property-meta"><div><p class="property-region">${p.region}</p><h3>${p.name}</h3>${p.builder?'<p class="property-builder">'+p.builder+'</p>':''}</div>${p.size?' <span class="property-tag">'+p.tag+'</span>':''}</div><p class="property-summary">${p.summary}</p><button class="card-detail" data-project="${p.id}" aria-label="Conhecer ${p.name}">Conhecer empreendimento <span aria-hidden="true">↗</span></button>`;
    const preview=document.createElement('button');
    preview.className='card-gallery';preview.dataset.project=p.id;
    preview.setAttribute('aria-label',`Ver ${gallery[p.id].length} ${gallery[p.id].length===1?'foto':'fotos'} de ${p.name}`);
    preview.innerHTML=`<span class="preview-stack" aria-hidden="true">${gallery[p.id].slice(0,3).map(photo=>`<img src="${photo.thumb}" width="52" height="44" loading="lazy" alt="">`).join('')}</span><span class="preview-copy"><strong>${gallery[p.id].length===1?'Ver imagem do projeto':'Ver todas as fotos'}</strong><small>${gallery[p.id].length} ${gallery[p.id].length===1?'imagem disponível':'imagens para explorar'}</small></span><span class="preview-arrow" aria-hidden="true">↗</span>`;
    article.insertBefore(preview,article.querySelector('.card-detail'));
    grid.append(article);
  });
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
    let count=0;
    grid.querySelectorAll('article').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.region!==button.dataset.filter;if(!card.hidden){count++;card.classList.add('visible');}});
    document.getElementById('result-count').textContent=String(count).padStart(2,'0')+' '+(count===1?'empreendimento':'empreendimentos');
  }));
  const menuButton=document.querySelector('.menu-toggle'), menu=document.getElementById('mobile-menu');
  const dialog=document.getElementById('property-dialog');
  function setMenu(open){menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menu.classList.toggle('open',open);menu.inert=!open;document.body.classList.toggle('locked',open||dialog.open);}
  menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  menu.addEventListener('keydown',e=>{if(e.key==='Tab'){const links=[menuButton,...menu.querySelectorAll('a')];if(e.shiftKey&&document.activeElement===menuButton){e.preventDefault();links.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===links.at(-1)){e.preventDefault();menuButton.focus();}}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){setMenu(false);menuButton.focus();}});
  menuButton.addEventListener('keydown',e=>{if(e.key==='Tab'&&e.shiftKey&&menu.classList.contains('open')){e.preventDefault();menu.querySelectorAll('a')[4].focus();}});
  window.matchMedia('(min-width:1001px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});
  let current=null,index=0,opener=null;
  const galleryImage=document.getElementById('gallery-image'),thumbs=document.getElementById('thumbnails');
  function showImage(next){
    const photos=gallery[current.id];index=(next+photos.length)%photos.length;const photo=photos[index];
    galleryImage.src=photo.src;galleryImage.alt=photo.alt;galleryImage.width=photo.width;galleryImage.height=photo.height;
    galleryImage.animate([{opacity:.35,transform:'translateX(5px)'},{opacity:1,transform:'translateX(0)'}],{duration:320,easing:'ease-out'});
    document.getElementById('gallery-caption').textContent=photo.alt;
    document.getElementById('gallery-counter').textContent=String(index+1).padStart(2,'0')+' / '+String(photos.length).padStart(2,'0');
    [...thumbs.children].forEach((t,i)=>{t.classList.toggle('selected',i===index);t.setAttribute('aria-pressed',String(i===index));});
    const chosen=thumbs.children[index];if(chosen){thumbs.scrollTo({left:Math.max(0,chosen.offsetLeft-thumbs.offsetLeft-thumbs.clientWidth/2+chosen.offsetWidth/2),behavior:'smooth'});}
  }
  function openProject(id,trigger){
    current=projects.find(p=>p.id===id);if(!current)return;opener=trigger;index=0;
    document.getElementById('detail-title').textContent=current.name;
    document.getElementById('detail-region').textContent=current.region+(current.builder?' · '+current.builder:'');
    document.getElementById('detail-description').textContent=current.description;
    document.getElementById('detail-features').replaceChildren(...current.features.map(f=>{const li=document.createElement('li');li.textContent=f;return li;}));
    document.getElementById('detail-extra').textContent=current.extra;
    document.getElementById('detail-wa').href=wa(`Olá, Laiz! Gostaria de saber os valores e mais informações sobre o ${current.name}.`);
    thumbs.replaceChildren(...gallery[id].map((photo,i)=>{const b=document.createElement('button');b.className='thumb';b.setAttribute('aria-label',`Imagem ${i+1}: ${photo.alt}`);b.innerHTML=`<img src="${photo.thumb}" width="66" height="49" alt="" loading="lazy">`;b.addEventListener('click',()=>showImage(i));return b;}));
    const single=gallery[id].length===1;
    dialog.querySelectorAll('.gallery-arrow').forEach(b=>b.hidden=single);dialog.querySelector('.swipe-hint').hidden=single;thumbs.hidden=single;
    setMenu(false);dialog.showModal();document.body.classList.add('locked');dialog.scrollTop=0;showImage(0);dialog.querySelector('.dialog-close').focus();
  }
  document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.project,b)));
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.classList.remove('locked');opener?.focus();});
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.querySelector('.previous').addEventListener('click',()=>showImage(index-1));dialog.querySelector('.next').addEventListener('click',()=>showImage(index+1));
  dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showImage(index+1);}if(e.key==='ArrowLeft'){e.preventDefault();showImage(index-1);}});
  let dragStart=null;const stage=dialog.querySelector('.gallery-stage');
  galleryImage.draggable=false;
  stage.addEventListener('pointerdown',e=>{if(e.target.closest('button')||e.button!==0)return;dragStart={x:e.clientX,y:e.clientY};stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');});
  stage.addEventListener('pointerup',e=>{if(!dragStart)return;const dx=e.clientX-dragStart.x,dy=e.clientY-dragStart.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))showImage(index+(dx<0?1:-1));dragStart=null;stage.classList.remove('dragging');});
  stage.addEventListener('pointercancel',()=>{dragStart=null;stage.classList.remove('dragging');});
  const header=document.getElementById('header'), floatingWa=document.querySelector('.floating-wa');
  let scrollFrame=0;
  function updateScrollState(){scrollFrame=0;header.classList.toggle('scrolled',scrollY>10);floatingWa.classList.toggle('shown',scrollY>450);const total=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--reading-progress',total>0?String(scrollY/total):'0');}
  window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScrollState);},{passive:true});updateScrollState();
  let revealObserver=null;
  if('IntersectionObserver' in window){
    revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target);}}),{threshold:.07});
    const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}),{rootMargin:'-20% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(s=>navObserver.observe(s));
  }
  document.documentElement.classList.add('motion-enabled');
  document.documentElement.classList.toggle('js-motion',!!revealObserver);
  document.querySelectorAll('.reveal').forEach(e=>{
    const r=e.getBoundingClientRect();
    const inView=r.top<innerHeight&&r.bottom>0;
    e.classList.toggle('visible',inView||!revealObserver);
    if(!inView)revealObserver?.observe(e);
  });
})();
