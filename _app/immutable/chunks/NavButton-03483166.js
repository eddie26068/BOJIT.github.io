import{S as H,i as S,s as U,l as E,g as T,n as A,o as k,p as C,q as p,d as h,ab as D,N as w,e as d,c as b,a as m,b as _,K as v,a0 as y,O as B,P as O,Q as q}from"./index-5dfa2933.js";function K(u){let e,l,n,f,i;const o=u[4].default,r=w(o,u,u[3],null);return{c(){e=d("button"),l=d("h2"),r&&r.c(),this.h()},l(t){e=b(t,"BUTTON",{class:!0});var a=m(e);l=b(a,"H2",{class:!0});var s=m(l);r&&r.l(s),s.forEach(h),a.forEach(h),this.h()},h(){_(l,"class","svelte-57rnr0"),_(e,"class","svelte-57rnr0")},m(t,a){T(t,e,a),v(e,l),r&&r.m(l,null),n=!0,f||(i=y(e,"click",u[6]),f=!0)},p(t,a){r&&r.p&&(!n||a&8)&&B(r,o,t,t[3],n?q(o,t[3],a,null):O(t[3]),null)},i(t){n||(p(r,t),n=!0)},o(t){k(r,t),n=!1},d(t){t&&h(e),r&&r.d(t),f=!1,i()}}}function P(u){let e,l,n,f,i,o,r;const t=u[4].default,a=w(t,u,u[3],null);return{c(){e=d("a"),l=d("button"),n=d("h2"),a&&a.c(),this.h()},l(s){e=b(s,"A",{href:!0,target:!0});var c=m(e);l=b(c,"BUTTON",{class:!0});var g=m(l);n=b(g,"H2",{class:!0});var N=m(n);a&&a.l(N),N.forEach(h),g.forEach(h),c.forEach(h),this.h()},h(){_(n,"class","svelte-57rnr0"),_(l,"class","svelte-57rnr0"),_(e,"href",u[0]),_(e,"target",f=u[1]?"_blank":"")},m(s,c){T(s,e,c),v(e,l),v(l,n),a&&a.m(n,null),i=!0,o||(r=y(l,"click",u[5]),o=!0)},p(s,c){a&&a.p&&(!i||c&8)&&B(a,t,s,s[3],i?q(t,s[3],c,null):O(s[3]),null),(!i||c&1)&&_(e,"href",s[0]),(!i||c&2&&f!==(f=s[1]?"_blank":""))&&_(e,"target",f)},i(s){i||(p(a,s),i=!0)},o(s){k(a,s),i=!1},d(s){s&&h(e),a&&a.d(s),o=!1,r()}}}function Q(u){let e,l,n,f;const i=[P,K],o=[];function r(t,a){return t[0]?0:1}return e=r(u),l=o[e]=i[e](u),{c(){l.c(),n=E()},l(t){l.l(t),n=E()},m(t,a){o[e].m(t,a),T(t,n,a),f=!0},p(t,[a]){let s=e;e=r(t),e===s?o[e].p(t,a):(A(),k(o[s],1,1,()=>{o[s]=null}),C(),l=o[e],l?l.p(t,a):(l=o[e]=i[e](t),l.c()),p(l,1),l.m(n.parentNode,n))},i(t){f||(p(l),f=!0)},o(t){k(l),f=!1},d(t){o[e].d(t),t&&h(n)}}}function j(u,e,l){let{$$slots:n={},$$scope:f}=e;const i=D();let{href:o=null}=e,{newTab:r=!1}=e;const t=()=>{i("click")},a=()=>{i("click")};return u.$$set=s=>{"href"in s&&l(0,o=s.href),"newTab"in s&&l(1,r=s.newTab),"$$scope"in s&&l(3,f=s.$$scope)},[o,r,i,f,n,t,a]}class F extends H{constructor(e){super(),S(this,e,j,Q,U,{href:0,newTab:1})}}export{F as N};
