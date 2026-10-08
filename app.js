const app=document.getElementById('app'),QUIZ_N=10,EXAM_N=25;let S={};
const get=n=>LECTURES.find(l=>l.n==n);LECTURES.sort((a,b)=>a.n-b.n);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const AK=Object.keys(AC).sort((a,b)=>b.length-a.length).map(k=>k.replace(/[.*+?^${}()|[\]\\\/-]/g,'\\$&'));
const AR=new RegExp('(^|[^\\w/(-])('+AK.join('|')+')((?:e?s)?)(?![\\w-]|/| \\([A-Z])','g');
const X=s=>esc(String(s).replace(AR,(m,pre,a,p)=>AC[a]?pre+a+p+' ('+AC[a]+')':m));
const prep=(q,l)=>({q:q[0],o:shuffle(q[1].map((t,i)=>({t,ok:q[2].includes(i)}))),e:q[3]||'',l:l.title,multi:q[2].length>1});
function home(){app.innerHTML='<h1>Study Guide</h1>'+LECTURES.map(l=>`<div class="row"><b>${esc(l.title)}</b><button onclick="cards(${l.n})">Flashcards</button><button onclick="quiz(${l.n})">Quiz</button></div>`).join('')+'<h2>Exam</h2><p>Lectures to include:</p>'+LECTURES.map(l=>`<label><input type="checkbox" class="ex" value="${l.n}" checked> ${esc(l.title)}</label>`).join('')+`<p><button onclick="selAll(true)">Select all</button><button onclick="selAll(false)">Clear</button><button onclick="exam()">Start exam (${EXAM_N} questions)</button></p>`}
const selAll=v=>document.querySelectorAll('.ex').forEach(c=>c.checked=v);
function cards(n){const l=get(n);S={n,title:l.title,deck:l.cards,i:0,f:false};drawCard()}
function drawCard(){const c=S.deck[S.i];app.innerHTML=`<button onclick="home()">Home</button><h2>${esc(S.title)}: flashcards</h2><div class="card${(S.f?c[1]:c[0]).includes('\n')?' steps':''}" onclick="S.f=!S.f;drawCard()"><div>${X(S.f?c[1]:c[0]).replace(/\n/g,'<br>')}</div><small>${S.f?'Answer':'Question'} - click to flip</small></div><p>${S.i+1} / ${S.deck.length} <button onclick="mv(-1)">Prev</button><button onclick="mv(1)">Next</button><button onclick="S.deck=shuffle(S.deck);S.i=0;S.f=false;drawCard()">Shuffle</button>${S.i===S.deck.length-1?`<button onclick="quiz(${S.n})">Go to quiz</button>`:''}</p>`}
const mv=d=>{S.i=(S.i+d+S.deck.length)%S.deck.length;S.f=false;drawCard()};
function run(title,qs,again){S={title,qs,again};app.innerHTML=`<button onclick="home()">Home</button><h2>${esc(title)}</h2><p><i>Each question has one or more correct answers. It counts as correct only if you select exactly the right set.</i></p>`+qs.map((q,i)=>`<div class="q"><p><b>${i+1}.</b> ${X(q.q)}</p>`+q.o.map((o,j)=>`<label><input type="checkbox" name="q${i}" value="${j}"> ${'abcdef'[j]}) ${X(o.t)}</label>`).join('')+'</div>').join('')+'<button onclick="submit()">Submit</button>';scrollTo(0,0)}
function quiz(n){const l=get(n);run(l.title+': quiz',shuffle(l.qs).slice(0,QUIZ_N).map(q=>prep(q,l)),()=>quiz(n))}
function exam(){const ns=[...document.querySelectorAll('.ex:checked')].map(x=>+x.value);if(!ns.length)return alert('Select at least one lecture.');examWith(ns)}
function examWith(ns){const pools=shuffle(ns.map(n=>{const l=get(n);return shuffle(l.qs).map(q=>prep(q,l))}));const out=[];
 while(out.length<EXAM_N&&pools.some(p=>p.length))for(const p of pools)if(out.length<EXAM_N&&p.length)out.push(p.pop());
 run('Exam',shuffle(out),()=>examWith(ns))}
function submit(){let s=0;const h=S.qs.map((q,i)=>{const p=[...document.querySelectorAll('[name=q'+i+']:checked')].map(x=>+x.value);const ok=q.o.every((o,j)=>o.ok===p.includes(j));s+=ok;
 return `<div class="q ${ok?'good':'bad'}"><p><b>${i+1}.</b> ${X(q.q)} (${ok?'correct':'incorrect'})</p><p>Your answer: ${p.map(j=>'abcdef'[j]+') '+X(q.o[j].t)).join('; ')||'none'}</p><p>Correct: ${q.o.map((o,j)=>o.ok?'abcdef'[j]+') '+X(o.t):'').filter(Boolean).join('; ')}</p><p><b>Why:</b> ${X(q.e).replace(/\n/g,'<br>')}</p><small>${esc(q.l)}</small></div>`}).join('');
 app.innerHTML=`<button onclick="home()">Home</button><button onclick="S.again()">Try again</button><h2>${esc(S.title)}: results</h2><p class="score">${s} / ${S.qs.length} (${Math.round(100*s/S.qs.length)}%)</p>`+h;scrollTo(0,0)}
home();
document.addEventListener('keydown',e=>{if(!S.deck||!document.querySelector('.card'))return;
 if(e.key==='ArrowRight')mv(1);else if(e.key==='ArrowLeft')mv(-1);else if(e.key===' '||e.key==='Enter'){e.preventDefault();S.f=!S.f;drawCard()}});
