import{S as B,i as F,s as G,l as N,g as _,o as g,p as K,q as k,d as u,n as M,e as h,t as P,c as b,a as C,h as E,b as $,K as H,j as R,E as S,w as q,x as w,y as I,B as j,k as x,m as y,U}from"../chunks/index-5dfa2933.js";import{C as z}from"../chunks/Content-e6d7cbfb.js";import{N as A}from"../chunks/NavButton-03483166.js";function D(a){let e,s;return{c(){e=h("h1"),s=P(a[0]),this.h()},l(t){e=b(t,"H1",{class:!0});var r=C(e);s=E(r,a[0]),r.forEach(u),this.h()},h(){$(e,"class","svelte-dcx9ou")},m(t,r){_(t,e,r),H(e,s)},p(t,r){r&1&&R(s,t[0])},i:S,o:S,d(t){t&&u(e)}}}function J(a){let e,s;return e=new z({props:{$$slots:{default:[O]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){I(e,t,r),s=!0},p(t,r){const c={};r&8&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function L(a){let e;return{c(){e=P("Here's the Site Index")},l(s){e=E(s,"Here's the Site Index")},m(s,t){_(s,e,t)},d(s){s&&u(e)}}}function O(a){let e,s,t,r,c,o,p,n,f,m,v;return n=new A({props:{href:"/index",$$slots:{default:[L]},$$scope:{ctx:a}}}),{c(){e=h("h1"),s=P("Page Can't be Found!"),t=x(),r=h("p"),c=h("img"),p=x(),q(n.$$.fragment),f=x(),m=h("hr"),this.h()},l(l){e=b(l,"H1",{class:!0});var i=C(e);s=E(i,"Page Can't be Found!"),i.forEach(u),t=y(l),r=b(l,"P",{class:!0});var d=C(r);c=b(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(u),p=y(l),w(n.$$.fragment,l),f=y(l),m=b(l,"HR",{}),this.h()},h(){$(e,"class","svelte-dcx9ou"),U(c.src,o=a[2])||$(c,"src",o),$(c,"alt","404 Page"),$(c,"class","svelte-dcx9ou"),$(r,"class","img-holder svelte-dcx9ou")},m(l,i){_(l,e,i),H(e,s),_(l,t,i),_(l,r,i),H(r,c),_(l,p,i),I(n,l,i),_(l,f,i),_(l,m,i),v=!0},p(l,i){const d={};i&8&&(d.$$scope={dirty:i,ctx:l}),n.$set(d)},i(l){v||(k(n.$$.fragment,l),v=!0)},o(l){g(n.$$.fragment,l),v=!1},d(l){l&&u(e),l&&u(t),l&&u(r),l&&u(p),j(n,l),l&&u(f),l&&u(m)}}}function Q(a){let e,s,t,r;const c=[J,D],o=[];function p(n,f){return n[1]===404?0:1}return e=p(a),s=o[e]=c[e](a),{c(){s.c(),t=N()},l(n){s.l(n),t=N()},m(n,f){o[e].m(n,f),_(n,t,f),r=!0},p(n,[f]){let m=e;e=p(n),e===m?o[e].p(n,f):(M(),g(o[m],1,1,()=>{o[m]=null}),K(),s=o[e],s?s.p(n,f):(s=o[e]=c[e](n),s.c()),k(s,1),s.m(t.parentNode,t))},i(n){r||(k(s),r=!0)},o(n){g(s),r=!1},d(n){o[e].d(n),n&&u(t)}}}function Y({error:a,status:e}){return{props:{title:`${e}: ${a.message}`,status:e}}}function T(a,e,s){let{title:t}=e,{status:r}=e;const c="https://cdn.bojit.org/img/general/404.PNG";return a.$$set=o=>{"title"in o&&s(0,t=o.title),"status"in o&&s(1,r=o.status)},[t,r,c]}class Z extends B{constructor(e){super(),F(this,e,T,Q,G,{title:0,status:1})}}export{Z as default,Y as load};
