var mb=document.querySelector('.mb'),nv=document.getElementById('nav');
mb.addEventListener('click',function(){var o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
nv.addEventListener('click',function(e){if(e.target.tagName==='A'){nv.classList.remove('open');mb.setAttribute('aria-expanded',false)}});
document.getElementById('qf').addEventListener('submit',function(e){e.preventDefault();var f=e.target,m='Hello GMK Engineering,\nName: '+f.n.value+'\nCompany: '+f.c.value+'\nPhone: '+f.p.value+'\nService: '+f.s.value+'\nDetails: '+f.d.value;window.open('https://wa.me/254727944692?text='+encodeURIComponent(m),'_blank','noopener')});

(function(){var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))},R=document.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
try{var s=localStorage.getItem('t');if(s)R.setAttribute('data-theme',s)}catch(e){}
$('.th')[0].addEventListener('click',function(){var t=R.getAttribute('data-theme'),d=t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches,n=d?'light':'dark';R.setAttribute('data-theme',n);try{localStorage.setItem('t',n)}catch(e){}});
var G=$('.gal img'),K=function(k){return $('.gal img[data-k="'+k+'"]')[0]},S=$('.split img'),im=[S[0],K('line'),K('hall'),K('mezz'),K('steel'),K('deck'),K('pack'),S[1],$('.hero img')[0]].map(function(i){return i.src}),mp=[0,1,2,3,4,5,6,7,7,6,8,1],lab=['Mills','Mills','Mills','Maintenance','Fabrication','Power','Compressed air','Electrical','Electrical','Packing','Energy','Importation'];
var cd=$('.svc a').map(function(a,i){return '<a class="sc" href="#contact"><div class="im"><img src="'+im[mp[i]]+'" alt=""></div><small>'+lab[i]+'</small><h3>'+a.querySelector('h3').textContent+'</h3><p>'+a.querySelector('p').textContent+'</p></a>'}).join('');
var sl=document.createElement('div');sl.className='sl';sl.innerHTML='<div class="trk">'+cd+cd.replace(/class="sc"/g,'class="sc" aria-hidden="true" tabindex="-1"')+'</div>';
var g=$('.svc')[0];g.parentNode.insertBefore(sl,g);
var pb=document.createElement('button');pb.className='pp';pb.type='button';pb.textContent='Pause';pb.onclick=function(){pb.textContent=sl.classList.toggle('stop')?'Play':'Pause'};sl.parentNode.insertBefore(pb,sl);
var lb=document.getElementById('lb'),li=lb.querySelector('img'),lc=lb.querySelector('p');
$('.gal figure').forEach(function(f){f.tabIndex=0;f.setAttribute('role','button');var o=function(){var i=f.querySelector('img');li.src=i.src;li.alt=i.alt;lc.textContent=f.querySelector('figcaption').textContent;lb.showModal()};f.addEventListener('click',o);f.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();o()}})});
lb.addEventListener('click',function(){lb.close()});
var gf=$('.gal figure'),gc=[];gf.forEach(function(f){if(gc.indexOf(f.dataset.c)<0)gc.push(f.dataset.c)});var gh=document.createElement('div');gh.className='chips';gh.innerHTML=['All'].concat(gc).map(function(c,i){return '<button type="button" aria-pressed="'+(i==0)+'" data-c="'+c+'">'+c+'</button>'}).join('');$('.gal')[0].parentNode.insertBefore(gh,$('.gal')[0]);gh.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;$('button',gh).forEach(function(x){x.setAttribute('aria-pressed',x===b)});gf.forEach(function(f){f.hidden=b.dataset.c!=='All'&&f.dataset.c!==b.dataset.c})});
if(rm||!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
$('.head,.stats>div,.quick a,.ind div,.gal figure,.cat article,.tm blockquote,.pj-w,.split>*,.ct>*,.sl').forEach(function(el,i){el.classList.add('rv');el.style.setProperty('--d',(i%4)*80+'ms');io.observe(el)});
$('.stats b').forEach(function(b){var m=b.textContent.match(/(\d+)(.*)/);if(!m)return;var n=+m[1];new IntersectionObserver(function(es,o){if(es[0].isIntersecting){o.disconnect();var t0=performance.now();(function f(t){var p=Math.min((t-t0)/1400,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+m[2];if(p<1)requestAnimationFrame(f)})(t0)}}).observe(b)});
})();
