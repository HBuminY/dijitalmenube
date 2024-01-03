var Ne=Object.defineProperty;var Fe=(e,t,n)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ee=(e,t,n)=>(Fe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(c){if(c.ep)return;c.ep=!0;const i=n(c);fetch(c.href,i)}})();function w(){}const Se=e=>e;function Oe(e){return e()}function de(){return Object.create(null)}function q(e){e.forEach(Oe)}function oe(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let V;function ie(e,t){return e===t?!0:(V||(V=document.createElement("a")),V.href=t,e===V.href)}function Me(e){return Object.keys(e).length===0}const Ee=typeof window<"u";let Ke=Ee?()=>window.performance.now():()=>Date.now(),se=Ee?e=>requestAnimationFrame(e):w;const K=new Set;function ke(e){K.forEach(t=>{t.c(e)||(K.delete(t),t.f())}),K.size!==0&&se(ke)}function Le(e){let t;return K.size===0&&se(ke),{promise:new Promise(n=>{K.add(t={c:e,f:n})}),abort(){K.delete(t)}}}function h(e,t){e.appendChild(t)}function Ae(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Pe(e){const t=$("style");return t.textContent="/* empty */",qe(Ae(e),t),t.sheet}function qe(e,t){return h(e.head||e,t),t.sheet}function U(e,t,n){e.insertBefore(t,n||null)}function F(e){e.parentNode&&e.parentNode.removeChild(e)}function Ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function L(){return z(" ")}function Ie(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ze(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.data!==t&&(e.data=t)}function Be(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}const Y=new Map;let G=0;function Re(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Ue(e,t){const n={stylesheet:Pe(t),rules:{}};return Y.set(e,n),n}function pe(e,t,n,r,c,i,d,l=0){const u=16.666/r;let o=`{
`;for(let b=0;b<=1;b+=u){const g=t+(n-t)*i(b);o+=b*100+`%{${d(g,1-g)}}
`}const s=o+`100% {${d(n,1-n)}}
}`,p=`__svelte_${Re(s)}_${l}`,f=Ae(e),{stylesheet:m,rules:a}=Y.get(f)||Ue(f,e);a[p]||(a[p]=!0,m.insertRule(`@keyframes ${p} ${s}`,m.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${p} ${r}ms linear ${c}ms 1 both`,G+=1,p}function De(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),c=n.length-r.length;c&&(e.style.animation=r.join(", "),G-=c,G||Ve())}function Ve(){se(()=>{G||(Y.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&F(t)}),Y.clear())})}let ce;function B(e){ce=e}const M=[],me=[];let P=[];const he=[],We=Promise.resolve();let le=!1;function Ye(){le||(le=!0,We.then(je))}function R(e){P.push(e)}const ne=new Set;let S=0;function je(){if(S!==0)return;const e=ce;do{try{for(;S<M.length;){const t=M[S];S++,B(t),Ge(t.$$)}}catch(t){throw M.length=0,S=0,t}for(B(null),M.length=0,S=0;me.length;)me.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];ne.has(n)||(ne.add(n),n())}P.length=0}while(M.length);for(;he.length;)he.pop()();le=!1,ne.clear(),B(e)}function Ge(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}function Te(e){const t=[],n=[];P.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),P=t}let I;function He(){return I||(I=Promise.resolve(),I.then(()=>{I=null})),I}function re(e,t,n){e.dispatchEvent(Be(`${t?"intro":"outro"}${n}`))}const W=new Set;let E;function ae(){E={r:0,c:[],p:E}}function ue(){E.r||q(E.c),E=E.p}function v(e,t){e&&e.i&&(W.delete(e),e.i(t))}function k(e,t,n,r){if(e&&e.o){if(W.has(e))return;W.add(e),E.c.push(()=>{W.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const Je={duration:0};function ge(e,t,n,r){let i=t(e,n,{direction:"both"}),d=r?0:1,l=null,u=null,o=null,s;function p(){o&&De(e,o)}function f(a,y){const b=a.b-d;return y*=Math.abs(b),{a:d,b:a.b,d:b,duration:y,start:a.start,end:a.start+y,group:a.group}}function m(a){const{delay:y=0,duration:b=300,easing:g=Se,tick:j=w,css:x}=i||Je,A={start:Ke()+y,b:a};a||(A.group=E,E.r+=1),"inert"in e&&(a?s!==void 0&&(e.inert=s):(s=e.inert,e.inert=!0)),l||u?u=A:(x&&(p(),o=pe(e,d,a,b,y,g,x)),a&&j(0,1),l=f(A,b),R(()=>re(e,a,"start")),Le(C=>{if(u&&C>u.start&&(l=f(u,b),u=null,re(e,l.b,"start"),x&&(p(),o=pe(e,d,l.b,l.duration,0,g,i.css))),l){if(C>=l.end)j(d=l.b,1-d),re(e,l.b,"end"),u||(l.b?p():--l.group.r||q(l.group.c)),l=null;else if(C>=l.start){const D=C-l.start;d=l.a+l.d*g(D/l.duration),j(d,1-d)}}return!!(l||u)}))}return{run(a){oe(i)?He().then(()=>{i=i({direction:a?"in":"out"}),m(a)}):m(a)},end(){p(),l=u=null}}}function T(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function fe(e){e&&e.c()}function J(e,t,n){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),R(()=>{const i=e.$$.on_mount.map(Oe).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...i):q(i),e.$$.on_mount=[]}),c.forEach(R)}function Q(e,t){const n=e.$$;n.fragment!==null&&(Te(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Qe(e,t){e.$$.dirty[0]===-1&&(M.push(e),Ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,c,i,d=null,l=[-1]){const u=ce;B(e);const o=e.$$={fragment:null,ctx:[],props:i,update:w,not_equal:c,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:de(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};d&&d(o.root);let s=!1;if(o.ctx=n?n(e,t.props||{},(p,f,...m)=>{const a=m.length?m[0]:f;return o.ctx&&c(o.ctx[p],o.ctx[p]=a)&&(!o.skip_bound&&o.bound[p]&&o.bound[p](a),s&&Qe(e,p)),f}):[],o.update(),s=!0,q(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const p=ze(t.target);o.fragment&&o.fragment.l(p),p.forEach(F)}else o.fragment&&o.fragment.c();t.intro&&v(e.$$.fragment),J(e,t.target,t.anchor),je()}B(u)}class Z{constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){Q(this,1),this.$destroy=w}$on(t,n){if(!oe(n))return w;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(t){this.$$set&&!Me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Xe);const Ze="/dijitalmenube/assets/bg-5nGVmSqA.webp";function _e(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function et(e){const t=e-1;return t*t*t+1}function tt(e){let t,n,r,c,i,d,l,u,o,s=e[0].name+"",p,f,m,a,y=e[0].desc+"",b,g,j,x,A=e[0].price+"",C,D;return{c(){t=$("div"),n=$("div"),r=$("img"),d=L(),l=$("div"),u=$("div"),o=$("h1"),p=z(s),f=L(),m=$("div"),a=$("p"),b=z(y),g=L(),j=$("div"),x=$("h1"),C=z(A),D=z("₺"),ie(r.src,c=e[0].img)||_(r,"src",c),_(r,"alt",i=e[0].name),_(r,"class","rounded"),_(n,"class","aspect-square h-1/2 md:h-full md:w-1/6 p-2"),_(o,"class","font-bold"),_(m,"class","h-full"),_(x,"class","font-bold right-0-0 bottom-0 text-4xl"),_(l,"class","flex flex-col w-full p-5 relative text-start "),_(t,"class","no-underline border-2 border-black rounded bg-cyan-700 bg-opacity-25 flex flex-col md:flex-row justify-start shadow-xl")},m(O,N){U(O,t,N),h(t,n),h(n,r),h(t,d),h(t,l),h(l,u),h(u,o),h(o,p),h(l,f),h(l,m),h(m,a),h(a,b),h(l,g),h(l,j),h(j,x),h(x,C),h(x,D)},p(O,[N]){N&1&&!ie(r.src,c=O[0].img)&&_(r,"src",c),N&1&&i!==(i=O[0].name)&&_(r,"alt",i),N&1&&s!==(s=O[0].name+"")&&te(p,s),N&1&&y!==(y=O[0].desc+"")&&te(b,y),N&1&&A!==(A=O[0].price+"")&&te(C,A)},i:w,o:w,d(O){O&&F(t)}}}function nt(e,t,n){let{item:r={name:null,desc:null,price:null,img:"/placeholder.webp"}}=t;return e.$$set=c=>{"item"in c&&n(0,r=c.item)},[r]}class rt extends Z{constructor(t){super(),X(this,t,nt,tt,H,{item:0})}}function $e(e,{delay:t=0,duration:n=400,easing:r=et,axis:c="y"}={}){const i=getComputedStyle(e),d=+i.opacity,l=c==="y"?"height":"width",u=parseFloat(i[l]),o=c==="y"?["top","bottom"]:["left","right"],s=o.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),p=parseFloat(i[`padding${s[0]}`]),f=parseFloat(i[`padding${s[1]}`]),m=parseFloat(i[`margin${s[0]}`]),a=parseFloat(i[`margin${s[1]}`]),y=parseFloat(i[`border${s[0]}Width`]),b=parseFloat(i[`border${s[1]}Width`]);return{delay:t,duration:n,easing:r,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*d};${l}: ${g*u}px;padding-${o[0]}: ${g*p}px;padding-${o[1]}: ${g*f}px;margin-${o[0]}: ${g*m}px;margin-${o[1]}: ${g*a}px;border-${o[0]}-width: ${g*y}px;border-${o[1]}-width: ${g*b}px;`}}function ye(e,t,n){const r=e.slice();return r[5]=t[n],r}function be(e){let t,n,r,c=T(e[2]),i=[];for(let l=0;l<c.length;l+=1)i[l]=ve(ye(e,c,l));const d=l=>k(i[l],1,1,()=>{i[l]=null});return{c(){t=$("div");for(let l=0;l<i.length;l+=1)i[l].c();_(t,"class","space-y-5")},m(l,u){U(l,t,u);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(t,null);r=!0},p(l,u){if(u&4){c=T(l[2]);let o;for(o=0;o<c.length;o+=1){const s=ye(l,c,o);i[o]?(i[o].p(s,u),v(i[o],1)):(i[o]=ve(s),i[o].c(),v(i[o],1),i[o].m(t,null))}for(ae(),o=c.length;o<i.length;o+=1)d(o);ue()}},i(l){if(!r){for(let u=0;u<c.length;u+=1)v(i[u]);l&&R(()=>{r&&(n||(n=ge(t,$e,{duration:200,easing:_e,axis:"y"},!0)),n.run(1))}),r=!0}},o(l){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)k(i[u]);l&&(n||(n=ge(t,$e,{duration:200,easing:_e,axis:"y"},!1)),n.run(0)),r=!1},d(l){l&&F(t),Ce(i,l),l&&n&&n.end()}}}function ve(e){let t,n;return t=new rt({props:{item:e[5]}}),{c(){fe(t.$$.fragment)},m(r,c){J(t,r,c),n=!0},p:w,i(r){n||(v(t.$$.fragment,r),n=!0)},o(r){k(t.$$.fragment,r),n=!1},d(r){Q(t,r)}}}function it(e){let t,n,r,c,i,d,l,u,o,s=e[0]&&be(e);return{c(){t=$("a"),n=$("div"),r=$("div"),c=$("h1"),c.textContent=`${e[1]}`,i=L(),d=$("div"),s&&s.c(),_(c,"class","text-xl font-bold"),_(r,"class","p-1"),_(d,"class","pl-10 pr-2 py-2"),_(n,"class","text-center border border-black rounded flex flex-col bg-gray-500 bg-opacity-75 text-white"),_(t,"href","#")},m(p,f){U(p,t,f),h(t,n),h(n,r),h(r,c),h(n,i),h(n,d),s&&s.m(d,null),l=!0,u||(o=Ie(t,"click",e[3]),u=!0)},p(p,[f]){p[0]?s?(s.p(p,f),f&1&&v(s,1)):(s=be(p),s.c(),v(s,1),s.m(d,null)):s&&(ae(),k(s,1,1,()=>{s=null}),ue())},i(p){l||(v(s),l=!0)},o(p){k(s),l=!1},d(p){p&&F(t),s&&s.d(),u=!1,o()}}}function lt(e,t,n){let{category:r=[]}=t,c=r[0],i=r[1],d=!1;function l(){return n(0,d=!d),!1}return e.$$set=u=>{"category"in u&&n(4,r=u.category)},[d,c,i,l,r]}class ot extends Z{constructor(t){super(),X(this,t,lt,it,H,{category:4})}}function st(e){let t;return{c(){t=$("div")},m(n,r){U(n,t,r)},p:w,i:w,o:w,d(n){n&&F(t)}}}class ct extends Z{constructor(t){super(),X(this,t,null,st,H,{})}}const at="Example Cafe",ut={Çorbalar:[{name:"Yayla Çorbası",desc:"En taze ürünlerle yoğurtlu yayla",price:50,img:"/yayla.webp"},{name:"Mercimek",desc:"Klasik sevdalılarına mercimek çorbası",price:40,img:"/mercimek.webp"}],"Ana Yemek":[{name:"Adana Kebap",desc:"Acılı adana kebap",price:180,img:"/adana.webp"},{name:"Urfa Kebap",desc:"Acısız Urfa Kebap",price:180,img:"/urfa.webp"}],İçecekler:[{name:"Kola",desc:"CocaCola",price:40,img:"/kola.webp"},{name:"Fanta",desc:"Fanta Kola",price:40,img:"/fanta.webp"},{name:"Ayran",desc:"Kapalı Ayran",price:25,img:"/ayran.webp"}]},ft={storeName:at,menu:ut};function we(e,t,n){const r=e.slice();return r[1]=t[n],r}function xe(e){let t,n;return t=new ot({props:{category:e[1]}}),{c(){fe(t.$$.fragment)},m(r,c){J(t,r,c),n=!0},p:w,i(r){n||(v(t.$$.fragment,r),n=!0)},o(r){k(t.$$.fragment,r),n=!1},d(r){Q(t,r)}}}function dt(e){let t,n,r,c,i,d,l,u,o=T(Object.entries(e[0])),s=[];for(let f=0;f<o.length;f+=1)s[f]=xe(we(e,o,f));const p=f=>k(s[f],1,1,()=>{s[f]=null});return l=new ct({}),{c(){t=$("body"),n=$("img"),c=L(),i=$("div");for(let f=0;f<s.length;f+=1)s[f].c();d=L(),fe(l.$$.fragment),ie(n.src,r=Ze)||_(n,"src",r),_(n,"alt","background"),_(n,"class","aspect-auto w-screen h-screen fixed bottom-0 opacity-85"),_(i,"class","fixed left-0 top-0 h-full w-full p-5 flex flex-col justify-start space-y-5 overflow-auto")},m(f,m){U(f,t,m),h(t,n),h(t,c),h(t,i);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(i,null);h(t,d),J(l,t,null),u=!0},p(f,[m]){if(m&1){o=T(Object.entries(f[0]));let a;for(a=0;a<o.length;a+=1){const y=we(f,o,a);s[a]?(s[a].p(y,m),v(s[a],1)):(s[a]=xe(y),s[a].c(),v(s[a],1),s[a].m(i,null))}for(ae(),a=o.length;a<s.length;a+=1)p(a);ue()}},i(f){if(!u){for(let m=0;m<o.length;m+=1)v(s[m]);v(l.$$.fragment,f),u=!0}},o(f){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)k(s[m]);k(l.$$.fragment,f),u=!1},d(f){f&&F(t),Ce(s,f),Q(l)}}}function pt(e){return[ft.menu]}class mt extends Z{constructor(t){super(),X(this,t,pt,dt,H,{})}}new mt({target:document.getElementById("app")});
