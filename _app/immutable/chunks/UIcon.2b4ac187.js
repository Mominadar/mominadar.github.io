import{t as E,d as x,S as z,i as B,g as D,h as F,j as G,f as U,k as j,a as H}from"./index.654867c9.js";import{r as J,s as K,n as k}from"./scheduler.0437428a.js";function Q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function R(e,n){E(e,1,1,()=>{n.delete(e.key)})}function T(e,n,a,t,f,o,u,q,v,A,g,C){let l=e.length,d=o.length,h=l;const y={};for(;h--;)y[e[h].key]=h;const m=[],_=new Map,r=new Map,M=[];for(h=d;h--;){const s=C(f,o,h),i=a(s);let c=u.get(i);c?t&&M.push(()=>c.p(s,n)):(c=A(i,s),c.c()),_.set(i,m[h]=c),i in y&&r.set(i,Math.abs(h-y[i]))}const p=new Set,I=new Set;function S(s){x(s,1),s.m(q,g),u.set(s.key,s),g=s.first,d--}for(;l&&d;){const s=m[d-1],i=e[l-1],c=s.key,w=i.key;s===i?(g=s.first,l--,d--):_.has(w)?!u.has(c)||p.has(c)?S(s):I.has(w)?l--:r.get(c)>r.get(w)?(I.add(c),S(s)):(p.add(w),l--):(v(i,u),l--)}for(;l--;){const s=e[l];_.has(s.key)||v(s,u)}for(;d;)S(m[d-1]);return J(M),m}function L(e){let n,a;return{c(){n=D("i"),this.h()},l(t){n=F(t,"I",{class:!0}),G(n).forEach(U),this.h()},h(){j(n,"class",a=`${e[0]} ${e[1]}`)},m(t,f){H(t,n,f)},p(t,[f]){f&3&&a!==(a=`${t[0]} ${t[1]}`)&&j(n,"class",a)},i:k,o:k,d(t){t&&U(n)}}}function N(e,n,a){let{icon:t=""}=n,{classes:f=""}=n;return e.$$set=o=>{"icon"in o&&a(0,t=o.icon),"classes"in o&&a(1,f=o.classes)},[t,f]}class V extends z{constructor(n){super(),B(this,n,N,L,K,{icon:0,classes:1})}}export{V as U,Q as e,R as o,T as u};