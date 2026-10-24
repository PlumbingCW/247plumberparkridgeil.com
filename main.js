(function(){
var d=document,h=d.documentElement;
var btn=d.getElementById('hamburger'),dr=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay'),cl=d.getElementById('drawer-close');
function openM(){dr.hidden=false;ov.classList.add('visible');btn.setAttribute('aria-expanded','true');h.style.overflow='hidden';cl.focus();}
function closeM(){dr.hidden=true;ov.classList.remove('visible');btn.setAttribute('aria-expanded','false');h.style.overflow='';btn.focus();}
if(btn&&dr){btn.addEventListener('click',function(){dr.hidden?openM():closeM();});cl.addEventListener('click',closeM);ov.addEventListener('click',closeM);
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&!dr.hidden)closeM();});
dr.addEventListener('click',function(e){if(e.target.tagName==='A')closeM();});
window.addEventListener('resize',function(){if(window.innerWidth>768&&!dr.hidden){dr.hidden=true;ov.classList.remove('visible');btn.setAttribute('aria-expanded','false');h.style.overflow='';}});}
d.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){
var it=q.closest('.faq-item'),o=it.classList.toggle('open');q.setAttribute('aria-expanded',o?'true':'false');});});
})();