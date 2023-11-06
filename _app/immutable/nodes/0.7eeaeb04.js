import{s as oe,p as R,n as pe,q as de,u as te,v as he,w as ve,x as $e,o as ge}from"../chunks/scheduler.0437428a.js";import{S as ce,i as ie,g,s as V,r as D,m as ue,h as b,j as k,x as be,c as B,u as S,n as fe,f as $,k as p,a as J,y as _,v as T,z as ye,d as w,p as ne,b as re,t as E,A as xe,w as H}from"../chunks/index.654867c9.js";import{e as se,U as q}from"../chunks/UIcon.2b4ac187.js";import{p as ke}from"../chunks/stores.b6244b8c.js";import{t as me,N as U,a as we,o as Ee}from"../chunks/params.4573ae7c.js";import{b as G}from"../chunks/paths.d6f8083d.js";function ae(l,e,n){const t=l.slice();return t[5]=e[n],t}function le(l){let e,n,t,o,d=l[5].title+"",c,u;return n=new q({props:{icon:l[5].icon,classes:"text-1.3em"}}),{c(){e=g("a"),D(n.$$.fragment),t=V(),o=g("span"),c=ue(d),this.h()},l(r){e=b(r,"A",{href:!0,class:!0});var s=k(e);S(n.$$.fragment,s),t=B(s),o=b(s,"SPAN",{class:!0});var m=k(o);c=fe(m,d),m.forEach($),s.forEach($),this.h()},h(){p(o,"class","nav-menu-item-label svelte-z8k68j"),p(e,"href",`${G}${l[5].to}`),p(e,"class","nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j")},m(r,s){J(r,e,s),T(n,e,null),_(e,t),_(e,o),_(o,c),u=!0},p:pe,i(r){u||(w(n.$$.fragment,r),u=!0)},o(r){E(n.$$.fragment,r),u=!1},d(r){r&&$(e),H(n)}}}function je(l){let e,n;return e=new q({props:{icon:"i-carbon-sun"}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){T(e,t,o),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Ne(l){let e,n;return e=new q({props:{icon:"i-carbon-moon"}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){T(e,t,o),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Ae(l){let e,n,t,o='<span class="ml-2 text-md font-bold hidden md:inline">MB</span>',d,c,u,r,s,m,j,K=U.resume+"",C,P,I,N,y,x,L,F,Q,A=se(l[1]),i=[];for(let a=0;a<A.length;a+=1)i[a]=le(ae(l,A,a));const _e=a=>E(i[a],1,1,()=>{i[a]=null});s=new q({props:{icon:"i-carbon-result",classes:"text-1.3em"}});const W=[Ne,je],M=[];function X(a,h){return a[0]?0:1}return y=X(l),x=M[y]=W[y](l),{c(){e=g("div"),n=g("nav"),t=g("a"),t.innerHTML=o,d=V(),c=g("div");for(let a=0;a<i.length;a+=1)i[a].c();u=V(),r=g("a"),D(s.$$.fragment),m=V(),j=g("span"),C=ue(K),P=V(),I=g("div"),N=g("button"),x.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var h=k(e);n=b(h,"NAV",{class:!0});var v=k(n);t=b(v,"A",{href:!0,class:!0,["data-svelte-h"]:!0}),be(t)!=="svelte-rcyybi"&&(t.innerHTML=o),d=B(v),c=b(v,"DIV",{class:!0});var f=k(c);for(let O=0;O<i.length;O+=1)i[O].l(f);u=B(f),r=b(f,"A",{href:!0,target:!0,class:!0});var z=k(r);S(s.$$.fragment,z),m=B(z),j=b(z,"SPAN",{class:!0});var Y=k(j);C=fe(Y,K),Y.forEach($),z.forEach($),f.forEach($),P=B(v),I=b(v,"DIV",{class:!0});var Z=k(I);N=b(Z,"BUTTON",{class:!0});var ee=k(N);x.l(ee),ee.forEach($),Z.forEach($),v.forEach($),h.forEach($),this.h()},h(){p(t,"href",`${G}/`),p(t,"class","nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),p(j,"class","nav-menu-item-label svelte-z8k68j"),p(r,"href",`${G}/Momina Babar - SE - Resume.pdf`),p(r,"target","_blank"),p(r,"class","nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j"),p(c,"class","flex flex-row flex-1 self-center justify-center"),p(N,"class","bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),p(I,"class","flex flex-row self-stretch items-stretch gap-1 text-1.15em"),p(n,"class","container !justify-between flex flex-row items-center text-sm"),p(e,"class","nav-menu svelte-z8k68j")},m(a,h){J(a,e,h),_(e,n),_(n,t),_(n,d),_(n,c);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(c,null);_(c,u),_(c,r),T(s,r,null),_(r,m),_(r,j),_(j,C),_(n,P),_(n,I),_(I,N),M[y].m(N,null),L=!0,F||(Q=ye(N,"click",l[3]),F=!0)},p(a,[h]){if(h&2){A=se(a[1]);let f;for(f=0;f<A.length;f+=1){const z=ae(a,A,f);i[f]?(i[f].p(z,h),w(i[f],1)):(i[f]=le(z),i[f].c(),w(i[f],1),i[f].m(c,u))}for(ne(),f=A.length;f<i.length;f+=1)_e(f);re()}let v=y;y=X(a),y!==v&&(ne(),E(M[v],1,1,()=>{M[v]=null}),re(),x=M[y],x||(x=M[y]=W[y](a),x.c()),w(x,1),x.m(N,null))},i(a){if(!L){for(let h=0;h<A.length;h+=1)w(i[h]);w(s.$$.fragment,a),w(x),L=!0}},o(a){i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)E(i[h]);E(s.$$.fragment,a),E(x),L=!1},d(a){a&&$(e),xe(i,a),H(s),M[y].d(),F=!1,Q()}}}function Me(l,e,n){let t,o;R(l,ke,u=>n(2,t=u)),R(l,me,u=>n(0,o=u));const d=[{title:U.skills,to:"/#skills",icon:"i-carbon-software-resource-cluster"},{title:U.personal,to:"/#projects",icon:"i-carbon-cube"},{title:U.career,to:"/#experience",icon:"i-carbon-development"}],c=()=>we();return l.$$.update=()=>{l.$$.dirty&4&&t&&t.url.pathname},[o,d,t,c]}class ze extends ce{constructor(e){super(),ie(this,e,Me,Ae,oe,{})}}function Ie(l){let e,n,t,o,d,c;n=new ze({});const u=l[3].default,r=de(u,l,l[2],null);return{c(){e=g("div"),D(n.$$.fragment),t=V(),o=g("div"),r&&r.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var m=k(e);S(n.$$.fragment,m),t=B(m),o=b(m,"DIV",{class:!0});var j=k(o);r&&r.l(j),j.forEach($),m.forEach($),this.h()},h(){p(o,"class","content container svelte-mb6t29"),p(e,"class",d=te(`body contents ${l[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(s,m){J(s,e,m),T(n,e,null),_(e,t),_(e,o),r&&r.m(o,null),c=!0},p(s,[m]){r&&r.p&&(!c||m&4)&&he(r,u,s,s[2],c?$e(u,s[2],m,null):ve(s[2]),null),(!c||m&1&&d!==(d=te(`body contents ${s[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&p(e,"class",d)},i(s){c||(w(n.$$.fragment,s),w(r,s),c=!0)},o(s){E(n.$$.fragment,s),E(r,s),c=!1},d(s){s&&$(e),H(n),r&&r.d(s)}}}function Ve(l,e,n){let t;R(l,me,u=>n(0,t=u));let{$$slots:o={},$$scope:d}=e;const c=!0;return ge(()=>Ee()),l.$$set=u=>{"$$scope"in u&&n(2,d=u.$$scope)},[t,c,d,o]}class Ue extends ce{constructor(e){super(),ie(this,e,Ve,Ie,oe,{prerender:1})}get prerender(){return this.$$.ctx[1]}}export{Ue as component};