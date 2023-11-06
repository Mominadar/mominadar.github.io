import{l as ue,P as _e,d as Y,U as K,e as q}from"../chunks/UIcon.2a730f61.js";import{s as pe,n as J,A as de}from"../chunks/scheduler.605b042e.js";import{S as me,i as he,r as T,s as C,g as w,u as M,c as D,h as x,j as I,f as d,k as b,v as A,a as y,t as E,b as F,d as k,w as B,p as H,y as m,x as Z,m as L,n as G,o as Q,A as X}from"../chunks/index.66bf24f0.js";import{T as $e,a as ie,M as ge,b as fe,C as ve}from"../chunks/TabTitle.d5642621.js";import{b as le}from"../chunks/paths.f3753c98.js";import{B as be,M as ke}from"../chunks/Banner.85333862.js";function we({params:f}){if(f.slug)return{project:ue.find(r=>r.slug===f.slug)}}const Ue=Object.freeze(Object.defineProperty({__proto__:null,load:we},Symbol.toStringTag,{value:"Module"}));function re(f,e,r){const t=f.slice();return t[4]=e[r],t}function ne(f,e,r){const t=f.slice();return t[4]=e[r],t}function se(f,e,r){const t=f.slice();return t[4]=e[r],t}function xe(f){let e,r,t,l,n,s,a,o,u,c,g,V,S,N;r=new be({props:{img:Y(f[0].project.logo),$$slots:{default:[De]},$$scope:{ctx:f}}});const z=[Pe,Ve],P=[];function h(v,i){return v[0].project.description?0:1}s=h(f),a=P[s]=z[s](f),c=new ie({});const W=[Se,ye],O=[];function $(v,i){return v[2].length>0?0:1}return V=$(f),S=O[V]=W[V](f),{c(){e=w("div"),T(r.$$.fragment),t=C(),l=w("div"),n=w("div"),a.c(),o=C(),u=w("div"),T(c.$$.fragment),g=C(),S.c(),this.h()},l(v){e=x(v,"DIV",{class:!0});var i=I(e);M(r.$$.fragment,i),t=D(i),l=x(i,"DIV",{class:!0});var _=I(l);n=x(_,"DIV",{class:!0});var j=I(n);a.l(j),j.forEach(d),o=D(_),u=x(_,"DIV",{class:!0});var p=I(u);M(c.$$.fragment,p),p.forEach(d),g=D(_),S.l(_),_.forEach(d),i.forEach(d),this.h()},h(){b(n,"class","px-10px m-y-5"),b(u,"class","w-100% m-t-8"),b(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),b(e,"class","flex flex-col items-center overflow-x-hidden")},m(v,i){y(v,e,i),A(r,e,null),m(e,t),m(e,l),m(l,n),P[s].m(n,null),m(l,o),m(l,u),A(c,u,null),m(l,g),O[V].m(l,null),N=!0},p(v,i){const _={};i&1&&(_.img=Y(v[0].project.logo)),i&2049&&(_.$$scope={dirty:i,ctx:v}),r.$set(_);let j=s;s=h(v),s===j?P[s].p(v,i):(H(),E(P[j],1,1,()=>{P[j]=null}),F(),a=P[s],a?a.p(v,i):(a=P[s]=z[s](v),a.c()),k(a,1),a.m(n,null)),S.p(v,i)},i(v){N||(k(r.$$.fragment,v),k(a),k(c.$$.fragment,v),k(S),N=!0)},o(v){E(r.$$.fragment,v),E(a),E(c.$$.fragment,v),E(S),N=!1},d(v){v&&d(e),B(r),P[s].d(),B(c),O[V].d()}}}function je(f){let e,r,t,l,n="Could not load project data...",s;return r=new K({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=C(),l=w("p"),l.textContent=n,this.h()},l(a){e=x(a,"DIV",{class:!0});var o=I(e);M(r.$$.fragment,o),t=D(o),l=x(o,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-18mwztv"&&(l.textContent=n),o.forEach(d),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,o){y(a,e,o),A(r,e,null),m(e,t),m(e,l),s=!0},p:J,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){E(r.$$.fragment,a),s=!1},d(a){a&&d(e),B(r)}}}function Ee(f){let e=f[0].project.name+"",r;return{c(){r=L(e)},l(t){r=G(t,e)},m(t,l){y(t,r,l)},p(t,l){l&1&&e!==(e=t[0].project.name+"")&&Q(r,e)},d(t){t&&d(r)}}}function Ie(f){let e,r,t,l,n=f[4].label+"",s,a,o;return r=new K({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),T(r.$$.fragment),t=C(),l=w("span"),s=L(n),a=C(),this.h()},l(u){e=x(u,"DIV",{class:!0});var c=I(e);M(r.$$.fragment,c),t=D(c),l=x(c,"SPAN",{});var g=I(l);s=G(g,n),g.forEach(d),c.forEach(d),a=D(u),this.h()},h(){b(e,"class","row-center gap-2")},m(u,c){y(u,e,c),A(r,e,null),m(e,t),m(e,l),m(l,s),y(u,a,c),o=!0},p(u,c){(!o||c&1)&&n!==(n=u[4].label+"")&&Q(s,n)},i(u){o||(k(r.$$.fragment,u),o=!0)},o(u){E(r.$$.fragment,u),o=!1},d(u){u&&(d(e),d(a)),B(r)}}}function ae(f){let e,r;return e=new fe({props:{href:f[4].to,$$slots:{default:[Ie]},$$scope:{ctx:f}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){A(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=t[4].to),l&2049&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Ce(f){let e,r,t,l=f[4].name+"",n,s,a;return e=new ve({props:{src:Y(f[4].logo),alt:f[4].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){T(e.$$.fragment),r=C(),t=w("span"),n=L(l),s=C(),this.h()},l(o){M(e.$$.fragment,o),r=D(o),t=x(o,"SPAN",{class:!0});var u=I(t);n=G(u,l),u.forEach(d),s=D(o),this.h()},h(){b(t,"class","text-[0.9em]")},m(o,u){A(e,o,u),y(o,r,u),y(o,t,u),m(t,n),y(o,s,u),a=!0},p(o,u){const c={};u&1&&(c.src=Y(o[4].logo)),u&1&&(c.alt=o[4].name),e.$set(c),(!a||u&1)&&l!==(l=o[4].name+"")&&Q(n,l)},i(o){a||(k(e.$$.fragment,o),a=!0)},o(o){E(e.$$.fragment,o),a=!1},d(o){o&&(d(r),d(t),d(s)),B(e,o)}}}function oe(f){let e,r;return e=new fe({props:{classes:"inline-flex flex-row items-center justify-center",href:`${le}/skills/${f[4].slug}`,$$slots:{default:[Ce]},$$scope:{ctx:f}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){A(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=`${le}/skills/${t[4].slug}`),l&2049&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function De(f){let e,r,t,l,n,s=f[0].project.type+"",a,o,u,c,g,V,S,N,z;t=new ge({props:{$$slots:{default:[Ee]},$$scope:{ctx:f}}}),c=new ie({});let P=q(f[0].project.links),h=[];for(let i=0;i<P.length;i+=1)h[i]=ae(se(f,P,i));const W=i=>E(h[i],1,1,()=>{h[i]=null});let O=q(f[0].project.skills),$=[];for(let i=0;i<O.length;i+=1)$[i]=oe(ne(f,O,i));const v=i=>E($[i],1,1,()=>{$[i]=null});return{c(){e=w("div"),r=w("div"),T(t.$$.fragment),l=C(),n=w("p"),a=L(s),o=C(),u=w("div"),T(c.$$.fragment),g=C(),V=w("div");for(let i=0;i<h.length;i+=1)h[i].c();S=C(),N=w("div");for(let i=0;i<$.length;i+=1)$[i].c();this.h()},l(i){e=x(i,"DIV",{class:!0});var _=I(e);r=x(_,"DIV",{class:!0});var j=I(r);M(t.$$.fragment,j),j.forEach(d),l=D(_),n=x(_,"P",{class:!0});var p=I(n);a=G(p,s),p.forEach(d),o=D(_),u=x(_,"DIV",{class:!0});var R=I(u);M(c.$$.fragment,R),R.forEach(d),g=D(_),V=x(_,"DIV",{class:!0});var ee=I(V);for(let U=0;U<h.length;U+=1)h[U].l(ee);ee.forEach(d),S=D(_),N=x(_,"DIV",{class:!0});var te=I(N);for(let U=0;U<$.length;U+=1)$[U].l(te);te.forEach(d),_.forEach(d),this.h()},h(){b(r,"class","text-0.9em"),b(n,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),b(u,"class","w-75%"),b(V,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),b(N,"class","row-center flex-wrap m-b-2"),b(e,"class","col-center p-y-20")},m(i,_){y(i,e,_),m(e,r),A(t,r,null),m(e,l),m(e,n),m(n,a),m(e,o),m(e,u),A(c,u,null),m(e,g),m(e,V);for(let j=0;j<h.length;j+=1)h[j]&&h[j].m(V,null);m(e,S),m(e,N);for(let j=0;j<$.length;j+=1)$[j]&&$[j].m(N,null);z=!0},p(i,_){const j={};if(_&2049&&(j.$$scope={dirty:_,ctx:i}),t.$set(j),(!z||_&1)&&s!==(s=i[0].project.type+"")&&Q(a,s),_&1){P=q(i[0].project.links);let p;for(p=0;p<P.length;p+=1){const R=se(i,P,p);h[p]?(h[p].p(R,_),k(h[p],1)):(h[p]=ae(R),h[p].c(),k(h[p],1),h[p].m(V,null))}for(H(),p=P.length;p<h.length;p+=1)W(p);F()}if(_&1){O=q(i[0].project.skills);let p;for(p=0;p<O.length;p+=1){const R=ne(i,O,p);$[p]?($[p].p(R,_),k($[p],1)):($[p]=oe(R),$[p].c(),k($[p],1),$[p].m(N,null))}for(H(),p=O.length;p<$.length;p+=1)v(p);F()}},i(i){if(!z){k(t.$$.fragment,i),k(c.$$.fragment,i);for(let _=0;_<P.length;_+=1)k(h[_]);for(let _=0;_<O.length;_+=1)k($[_]);z=!0}},o(i){E(t.$$.fragment,i),E(c.$$.fragment,i),h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)E(h[_]);$=$.filter(Boolean);for(let _=0;_<$.length;_+=1)E($[_]);z=!1},d(i){i&&d(e),B(t),B(c),X(h,i),X($,i)}}}function Ve(f){let e,r,t,l,n="No description",s;return r=new K({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=C(),l=w("p"),l.textContent=n,this.h()},l(a){e=x(a,"DIV",{class:!0});var o=I(e);M(r.$$.fragment,o),t=D(o),l=x(o,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-1ugej71"&&(l.textContent=n),o.forEach(d),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,o){y(a,e,o),A(r,e,null),m(e,t),m(e,l),s=!0},p:J,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){E(r.$$.fragment,a),s=!1},d(a){a&&d(e),B(r)}}}function Pe(f){let e,r;return e=new ke({props:{content:f[0].project.description}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){A(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.content=t[0].project.description),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function ye(f){let e,r,t,l,n="No screenshots",s;return r=new K({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=C(),l=w("p"),l.textContent=n,this.h()},l(a){e=x(a,"DIV",{class:!0});var o=I(e);M(r.$$.fragment,o),t=D(o),l=x(o,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-s36p3y"&&(l.textContent=n),o.forEach(d),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,o){y(a,e,o),A(r,e,null),m(e,t),m(e,l),s=!0},p:J,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){E(r.$$.fragment,a),s=!1},d(a){a&&d(e),B(r)}}}function Se(f){let e,r=q(f[2]),t=[];for(let l=0;l<r.length;l+=1)t[l]=ce(re(f,r,l));return{c(){e=w("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=x(l,"DIV",{class:!0});var n=I(e);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(d),this.h()},h(){b(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(l,n){y(l,e,n);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,n){if(n&4){r=q(l[2]);let s;for(s=0;s<r.length;s+=1){const a=re(l,r,s);t[s]?t[s].p(a,n):(t[s]=ce(a),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}},i:J,o:J,d(l){l&&d(e),X(t,l)}}}function ce(f){let e,r,t,l,n,s=f[4].label+"",a,o;return{c(){e=w("div"),r=w("img"),l=C(),n=w("p"),a=L(s),o=C(),this.h()},l(u){e=x(u,"DIV",{class:!0});var c=I(e);r=x(c,"IMG",{class:!0,src:!0,alt:!0}),l=D(c),n=x(c,"P",{class:!0});var g=I(n);a=G(g,s),g.forEach(d),o=D(c),c.forEach(d),this.h()},h(){b(r,"class","aspect-video w-100%"),de(r.src,t=f[4].src)||b(r,"src",t),b(r,"alt",f[4].label),b(n,"class","text-[var(--tertiary-text)] font-300"),b(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(u,c){y(u,e,c),m(e,r),m(e,l),m(e,n),m(n,a),m(e,o)},p:J,d(u){u&&d(e)}}}function Te(f){let e,r,t,l,n,s;e=new $e({props:{title:f[1]}});const a=[je,xe],o=[];function u(c,g){return c[0].project===void 0?0:1}return l=u(f),n=o[l]=a[l](f),{c(){T(e.$$.fragment),r=C(),t=w("div"),n.c(),this.h()},l(c){M(e.$$.fragment,c),r=D(c),t=x(c,"DIV",{class:!0});var g=I(t);n.l(g),g.forEach(d),this.h()},h(){b(t,"class","pb-10 overflow-x-hidden col flex-1")},m(c,g){A(e,c,g),y(c,r,g),y(c,t,g),o[l].m(t,null),s=!0},p(c,[g]){const V={};g&2&&(V.title=c[1]),e.$set(V);let S=l;l=u(c),l===S?o[l].p(c,g):(H(),E(o[S],1,1,()=>{o[S]=null}),F(),n=o[l],n?n.p(c,g):(n=o[l]=a[l](c),n.c()),k(n,1),n.m(t,null))},i(c){s||(k(e.$$.fragment,c),k(n),s=!0)},o(c){E(e.$$.fragment,c),E(n),s=!1},d(c){c&&(d(r),d(t)),B(e,c),o[l].d()}}}function Me(f,e,r){var a;let t,{data:l}=e;const{title:n}=_e,s=((a=l.project)==null?void 0:a.screenshots)??[];return f.$$set=o=>{"data"in o&&r(0,l=o.data)},f.$$.update=()=>{f.$$.dirty&1&&r(1,t=l.project?`${l.project.name} - ${n}`:n)},[l,t,s]}class qe extends me{constructor(e){super(),he(this,e,Me,Te,pe,{data:0})}}export{qe as component,Ue as universal};