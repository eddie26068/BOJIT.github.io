import{S as D,i as G,s as V,w as d,x as C,y as w,q as m,o as g,B as k,ab as j,l as N,g as z,n as R,p as E,d as v,e as q,c as O,a as S,b,f as T,V as B,a0 as U,a3 as F,G as H}from"./index-cabb4aca.js";import{r as J}from"./ripple-d87e32e1.js";import{L as K}from"./Link-f35c0e95.js";function M(o){let e,l,t,i,c,u;var r=o[0];function s(n){return{props:{height:n[6],color:n[9]}}}return r&&(l=new r(s(o))),{c(){e=q("button"),l&&d(l.$$.fragment),this.h()},l(n){e=O(n,"BUTTON",{class:!0,style:!0,"aria-label":!0});var a=S(e);l&&C(l.$$.fragment,a),a.forEach(v),this.h()},h(){e.disabled=o[3],b(e,"class",t=o[7]+" overflow-hidden svelte-eemtoe"),T(e,"background-color",o[8]),b(e,"aria-label",o[5]),B(e,"hoverable",!o[3])},m(n,a){z(n,e,a),l&&w(l,e,null),i=!0,c||(u=U(e,"click",o[13]),c=!0)},p(n,a){const _={};if(a&64&&(_.height=n[6]),a&512&&(_.color=n[9]),r!==(r=n[0])){if(l){R();const h=l;g(h.$$.fragment,1,0,()=>{k(h,1)}),E()}r?(l=new r(s(n)),d(l.$$.fragment),m(l.$$.fragment,1),w(l,e,null)):l=null}else r&&l.$set(_);(!i||a&8)&&(e.disabled=n[3]),(!i||a&128&&t!==(t=n[7]+" overflow-hidden svelte-eemtoe"))&&b(e,"class",t),(!i||a&256)&&T(e,"background-color",n[8]),(!i||a&32)&&b(e,"aria-label",n[5]),a&136&&B(e,"hoverable",!n[3])},i(n){i||(l&&m(l.$$.fragment,n),i=!0)},o(n){l&&g(l.$$.fragment,n),i=!1},d(n){n&&v(e),l&&k(l),c=!1,u()}}}function P(o){let e,l,t,i,c,u;var r=o[0];function s(n){return{props:{height:n[6],color:n[9]}}}return r&&(l=new r(s(o))),{c(){e=q("button"),l&&d(l.$$.fragment),this.h()},l(n){e=O(n,"BUTTON",{class:!0,style:!0,"aria-label":!0});var a=S(e);l&&C(l.$$.fragment,a),a.forEach(v),this.h()},h(){e.disabled=o[3],b(e,"class",t=o[7]+" overflow-hidden svelte-eemtoe"),T(e,"background-color",o[8]),b(e,"aria-label",o[5]),B(e,"hoverable",!o[3])},m(n,a){z(n,e,a),l&&w(l,e,null),i=!0,c||(u=[U(e,"click",o[12]),F(o[11].call(null,e))],c=!0)},p(n,a){const _={};if(a&64&&(_.height=n[6]),a&512&&(_.color=n[9]),r!==(r=n[0])){if(l){R();const h=l;g(h.$$.fragment,1,0,()=>{k(h,1)}),E()}r?(l=new r(s(n)),d(l.$$.fragment),m(l.$$.fragment,1),w(l,e,null)):l=null}else r&&l.$set(_);(!i||a&8)&&(e.disabled=n[3]),(!i||a&128&&t!==(t=n[7]+" overflow-hidden svelte-eemtoe"))&&b(e,"class",t),(!i||a&256)&&T(e,"background-color",n[8]),(!i||a&32)&&b(e,"aria-label",n[5]),a&136&&B(e,"hoverable",!n[3])},i(n){i||(l&&m(l.$$.fragment,n),i=!0)},o(n){l&&g(l.$$.fragment,n),i=!1},d(n){n&&v(e),l&&k(l),c=!1,H(u)}}}function Q(o){let e,l,t,i;const c=[P,M],u=[];function r(s,n){return s[4]?0:1}return e=r(o),l=u[e]=c[e](o),{c(){l.c(),t=N()},l(s){l.l(s),t=N()},m(s,n){u[e].m(s,n),z(s,t,n),i=!0},p(s,n){let a=e;e=r(s),e===a?u[e].p(s,n):(R(),g(u[a],1,1,()=>{u[a]=null}),E(),l=u[e],l?l.p(s,n):(l=u[e]=c[e](s),l.c()),m(l,1),l.m(t.parentNode,t))},i(s){i||(m(l),i=!0)},o(s){g(l),i=!1},d(s){u[e].d(s),s&&v(t)}}}function W(o){let e,l;return e=new K({props:{href:o[1],newTab:o[2],label:o[5],$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){d(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,i){w(e,t,i),l=!0},p(t,[i]){const c={};i&2&&(c.href=t[1]),i&4&&(c.newTab=t[2]),i&32&&(c.label=t[5]),i&17401&&(c.$$scope={dirty:i,ctx:t}),e.$set(c)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){k(e,t)}}}function X(o,e,l){const t=j();let i=J("white"),{icon:c}=e,{href:u=null}=e,{newTab:r=!1}=e,{disabled:s=!1}=e,{useRipple:n=!0}=e,{label:a="Accessibility Label"}=e,{size:_="2.5em"}=e,{shape:h="rounded"}=e,{color:I="var(--color-primary-500)"}=e,{iconColor:L="white"}=e;const p=()=>{t("click")},A=()=>{t("click")};return o.$$set=f=>{"icon"in f&&l(0,c=f.icon),"href"in f&&l(1,u=f.href),"newTab"in f&&l(2,r=f.newTab),"disabled"in f&&l(3,s=f.disabled),"useRipple"in f&&l(4,n=f.useRipple),"label"in f&&l(5,a=f.label),"size"in f&&l(6,_=f.size),"shape"in f&&l(7,h=f.shape),"color"in f&&l(8,I=f.color),"iconColor"in f&&l(9,L=f.iconColor)},[c,u,r,s,n,a,_,h,I,L,t,i,p,A]}class $ extends D{constructor(e){super(),G(this,e,X,W,V,{icon:0,href:1,newTab:2,disabled:3,useRipple:4,label:5,size:6,shape:7,color:8,iconColor:9})}}export{$ as I};
