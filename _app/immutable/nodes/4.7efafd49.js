import{n as be,E as xe,d as W,U as re,g as oe,e as Q}from"../chunks/UIcon.2a730f61.js";import{s as ke,n as $e}from"../chunks/scheduler.605b042e.js";import{S as we,i as Ee,r as S,s as y,g as w,u as M,c as P,h as E,j as C,f as $,k as I,v as N,a as T,t as k,b as Z,d as x,w as j,p as ee,y as _,x as de,m as B,n as R,o as G,A as ce}from"../chunks/index.66bf24f0.js";import{T as Ie,M as Ce,a as De,b as he,C as Ve}from"../chunks/TabTitle.d5642621.js";import{b as fe}from"../chunks/paths.f3753c98.js";import{B as ye,M as Pe}from"../chunks/Banner.85333862.js";function Te({params:o}){if(o.slug)return{experience:be.find(l=>l.slug===o.slug)}}const He=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));function ue(o,e,l){const t=o.slice();return t[3]=e[l],t}function pe(o,e,l){const t=o.slice();return t[3]=e[l],t}function Se(o){let e,l,t,n,r,f,a,s;l=new ye({props:{img:W(o[0].experience.logo),$$slots:{default:[Be]},$$scope:{ctx:o}}});const m=[Ue,Re],i=[];function b(d,v){return d[0].experience.description?0:1}return f=b(o),a=i[f]=m[f](o),{c(){e=w("div"),S(l.$$.fragment),t=y(),n=w("div"),r=w("div"),a.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=C(e);M(l.$$.fragment,v),t=P(v),n=E(v,"DIV",{class:!0});var A=C(n);r=E(A,"DIV",{class:!0});var V=C(r);a.l(V),V.forEach($),A.forEach($),v.forEach($),this.h()},h(){I(r,"class","px-10px m-y-5"),I(n,"class","pt-3 pb-1 overflow-x-hidden w-full"),I(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){T(d,e,v),N(l,e,null),_(e,t),_(e,n),_(n,r),i[f].m(r,null),s=!0},p(d,v){const A={};v&1&&(A.img=W(d[0].experience.logo)),v&257&&(A.$$scope={dirty:v,ctx:d}),l.$set(A);let V=f;f=b(d),f===V?i[f].p(d,v):(ee(),k(i[V],1,1,()=>{i[V]=null}),Z(),a=i[f],a?a.p(d,v):(a=i[f]=m[f](d),a.c()),x(a,1),a.m(r,null))},i(d){s||(x(l.$$.fragment,d),x(a),s=!0)},o(d){k(l.$$.fragment,d),k(a),s=!1},d(d){d&&$(e),j(l),i[f].d()}}}function Me(o){let e,l,t,n,r="Could not load experience data...",f;return l=new re({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),n=w("p"),n.textContent=r,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=C(e);M(l.$$.fragment,s),t=P(s),n=E(s,"P",{class:!0,["data-svelte-h"]:!0}),de(n)!=="svelte-1o82fhi"&&(n.textContent=r),s.forEach($),this.h()},h(){I(n,"class","font-300"),I(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,s){T(a,e,s),N(l,e,null),_(e,t),_(e,n),f=!0},p:$e,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&$(e),j(l)}}}function Ne(o){let e=o[0].experience.name+"",l;return{c(){l=B(e)},l(t){l=R(t,e)},m(t,n){T(t,l,n)},p(t,n){n&1&&e!==(e=t[0].experience.name+"")&&G(l,e)},d(t){t&&$(l)}}}function je(o){let e,l,t,n,r=o[3].label+"",f,a,s;return l=new re({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),n=w("span"),f=B(r),a=y(),this.h()},l(m){e=E(m,"DIV",{class:!0});var i=C(e);M(l.$$.fragment,i),t=P(i),n=E(i,"SPAN",{});var b=C(n);f=R(b,r),b.forEach($),i.forEach($),a=P(m),this.h()},h(){I(e,"class","row-center gap-2")},m(m,i){T(m,e,i),N(l,e,null),_(e,t),_(e,n),_(n,f),T(m,a,i),s=!0},p(m,i){(!s||i&1)&&r!==(r=m[3].label+"")&&G(f,r)},i(m){s||(x(l.$$.fragment,m),s=!0)},o(m){k(l.$$.fragment,m),s=!1},d(m){m&&($(e),$(a)),j(l)}}}function me(o){let e,l;return e=new he({props:{href:o[3].to,$$slots:{default:[je]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=t[3].to),n&257&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Ae(o){let e,l,t,n=o[3].name+"",r,f,a;return e=new Ve({props:{src:W(o[3].logo),alt:o[3].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){S(e.$$.fragment),l=y(),t=w("span"),r=B(n),f=y(),this.h()},l(s){M(e.$$.fragment,s),l=P(s),t=E(s,"SPAN",{class:!0});var m=C(t);r=R(m,n),m.forEach($),f=P(s),this.h()},h(){I(t,"class","text-[0.9em]")},m(s,m){N(e,s,m),T(s,l,m),T(s,t,m),_(t,r),T(s,f,m),a=!0},p(s,m){const i={};m&1&&(i.src=W(s[3].logo)),m&1&&(i.alt=s[3].name),e.$set(i),(!a||m&1)&&n!==(n=s[3].name+"")&&G(r,n)},i(s){a||(x(e.$$.fragment,s),a=!0)},o(s){k(e.$$.fragment,s),a=!1},d(s){s&&($(l),$(t),$(f)),j(e,s)}}}function _e(o){let e,l;return e=new he({props:{classes:"inline-flex flex-row items-center justify-center",href:`${fe}/skills/${o[3].slug}`,$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=`${fe}/skills/${t[3].slug}`),n&257&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Be(o){let e,l,t,n,r,f=o[0].experience.company+"",a,s,m=o[0].experience.location+"",i,b,d=o[0].experience.type+"",v,A,V,J=oe(o[0].experience.period.from,o[0].experience.period.to)+"",K,te,H,L,le,O,ne,X,U;t=new Ce({props:{$$slots:{default:[Ne]},$$scope:{ctx:o}}}),L=new De({});let q=Q(o[0].experience.links),h=[];for(let c=0;c<q.length;c+=1)h[c]=me(pe(o,q,c));const ge=c=>k(h[c],1,1,()=>{h[c]=null});let Y=Q(o[0].experience.skills),g=[];for(let c=0;c<Y.length;c+=1)g[c]=_e(ue(o,Y,c));const ve=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),l=w("div"),S(t.$$.fragment),n=y(),r=w("p"),a=B(f),s=B(" · "),i=B(m),b=B(" · "),v=B(d),A=y(),V=w("p"),K=B(J),te=y(),H=w("div"),S(L.$$.fragment),le=y(),O=w("div");for(let c=0;c<h.length;c+=1)h[c].c();ne=y(),X=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=C(e);l=E(u,"DIV",{class:!0});var D=C(l);M(t.$$.fragment,D),D.forEach($),n=P(u),r=E(u,"P",{class:!0});var p=C(r);a=R(p,f),s=R(p," · "),i=R(p,m),b=R(p," · "),v=R(p,d),p.forEach($),A=P(u),V=E(u,"P",{class:!0});var z=C(V);K=R(z,J),z.forEach($),te=P(u),H=E(u,"DIV",{class:!0});var se=C(H);M(L.$$.fragment,se),se.forEach($),le=P(u),O=E(u,"DIV",{class:!0});var ae=C(O);for(let F=0;F<h.length;F+=1)h[F].l(ae);ae.forEach($),ne=P(u),X=E(u,"DIV",{class:!0});var ie=C(X);for(let F=0;F<g.length;F+=1)g[F].l(ie);ie.forEach($),u.forEach($),this.h()},h(){I(l,"class","text-0.9em"),I(r,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),I(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),I(H,"class","w-75%"),I(O,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),I(X,"class","row-center flex-wrap m-b-2"),I(e,"class","col-center p-y-20")},m(c,u){T(c,e,u),_(e,l),N(t,l,null),_(e,n),_(e,r),_(r,a),_(r,s),_(r,i),_(r,b),_(r,v),_(e,A),_(e,V),_(V,K),_(e,te),_(e,H),N(L,H,null),_(e,le),_(e,O);for(let D=0;D<h.length;D+=1)h[D]&&h[D].m(O,null);_(e,ne),_(e,X);for(let D=0;D<g.length;D+=1)g[D]&&g[D].m(X,null);U=!0},p(c,u){const D={};if(u&257&&(D.$$scope={dirty:u,ctx:c}),t.$set(D),(!U||u&1)&&f!==(f=c[0].experience.company+"")&&G(a,f),(!U||u&1)&&m!==(m=c[0].experience.location+"")&&G(i,m),(!U||u&1)&&d!==(d=c[0].experience.type+"")&&G(v,d),(!U||u&1)&&J!==(J=oe(c[0].experience.period.from,c[0].experience.period.to)+"")&&G(K,J),u&1){q=Q(c[0].experience.links);let p;for(p=0;p<q.length;p+=1){const z=pe(c,q,p);h[p]?(h[p].p(z,u),x(h[p],1)):(h[p]=me(z),h[p].c(),x(h[p],1),h[p].m(O,null))}for(ee(),p=q.length;p<h.length;p+=1)ge(p);Z()}if(u&1){Y=Q(c[0].experience.skills);let p;for(p=0;p<Y.length;p+=1){const z=ue(c,Y,p);g[p]?(g[p].p(z,u),x(g[p],1)):(g[p]=_e(z),g[p].c(),x(g[p],1),g[p].m(X,null))}for(ee(),p=Y.length;p<g.length;p+=1)ve(p);Z()}},i(c){if(!U){x(t.$$.fragment,c),x(L.$$.fragment,c);for(let u=0;u<q.length;u+=1)x(h[u]);for(let u=0;u<Y.length;u+=1)x(g[u]);U=!0}},o(c){k(t.$$.fragment,c),k(L.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);U=!1},d(c){c&&$(e),j(t),j(L),ce(h,c),ce(g,c)}}}function Re(o){let e,l,t,n,r="No description...",f;return l=new re({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),n=w("p"),n.textContent=r,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=C(e);M(l.$$.fragment,s),t=P(s),n=E(s,"P",{class:!0,["data-svelte-h"]:!0}),de(n)!=="svelte-kl0ixf"&&(n.textContent=r),s.forEach($),this.h()},h(){I(n,"class","font-300"),I(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,s){T(a,e,s),N(l,e,null),_(e,t),_(e,n),f=!0},p:$e,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&$(e),j(l)}}}function Ue(o){let e,l;return e=new Pe({props:{content:o[0].experience.description??"This place is yet to be filled..."}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function ze(o){let e,l,t,n,r,f;e=new Ie({props:{title:o[1]}});const a=[Me,Se],s=[];function m(i,b){return i[0].experience===void 0?0:1}return n=m(o),r=s[n]=a[n](o),{c(){S(e.$$.fragment),l=y(),t=w("div"),r.c(),this.h()},l(i){M(e.$$.fragment,i),l=P(i),t=E(i,"DIV",{class:!0});var b=C(t);r.l(b),b.forEach($),this.h()},h(){I(t,"class","pb-10 overflow-x-hidden col flex-1")},m(i,b){N(e,i,b),T(i,l,b),T(i,t,b),s[n].m(t,null),f=!0},p(i,[b]){const d={};b&2&&(d.title=i[1]),e.$set(d);let v=n;n=m(i),n===v?s[n].p(i,b):(ee(),k(s[v],1,1,()=>{s[v]=null}),Z(),r=s[n],r?r.p(i,b):(r=s[n]=a[n](i),r.c()),x(r,1),r.m(t,null))},i(i){f||(x(e.$$.fragment,i),x(r),f=!0)},o(i){k(e.$$.fragment,i),k(r),f=!1},d(i){i&&($(l),$(t)),j(e,i),s[n].d()}}}function Le(o,e,l){let t,{data:n}=e;const{title:r}=xe;return o.$$set=f=>{"data"in f&&l(0,n=f.data)},o.$$.update=()=>{o.$$.dirty&1&&l(1,t=n.experience?`${n.experience.name} - ${r}`:r)},[n,t]}class Je extends we{constructor(e){super(),Ee(this,e,Le,ze,ke,{data:0})}}export{Je as component,He as universal};
