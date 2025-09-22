// Basic interactivity (no external libs)
function toggleMenu(){
  const menu = document.getElementById('menu');
  const btn = document.querySelector('.nav-toggle');
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function toast(msg){
  const el = document.getElementById('toast');
  if(!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=> el.classList.remove('show'), 1800);
}

function filterProducts(q){
  q = (q || '').toLowerCase();
  document.querySelectorAll('#catalog .product').forEach(card => {
    const name = (card.dataset.name || card.querySelector('h3')?.textContent || '').toLowerCase();
    card.style.display = name.includes(q) ? '' : 'none';
  });
}

function filterCategory(cat){
  document.querySelectorAll('#catalog .product').forEach(card => {
    card.style.display = (!cat || card.dataset.cat === cat) ? '' : 'none';
  });
}

(function init(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();