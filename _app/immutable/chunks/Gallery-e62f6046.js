import{S as Y,i as J,s as Q,e as v,c as b,a as y,d as g,b as d,V as E,f as V,g as k,K as _,w as X,k as H,x as Z,m as j,y as $,q as I,o as z,B as ee,n as te,p as ie,W as P,v as le,Y as x,l as D,t as L,h as A,j as C,U as O}from"./index-5dfa2933.js";import{L as ne}from"./Link-91f8e149.js";const q={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:20,maxFontSize:500,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!0};function ae(t,e){e||(e={});let i={};for(let n in q)e.hasOwnProperty(n)?i[n]=e[n]:i[n]=q[n];let l=Object.prototype.toString.call(t);l!=="[object Array]"&&l!=="[object NodeList]"&&l!=="[object HTMLCollection]"&&(t=[t]);for(let n=0;n<t.length;n++)se(t[n],i)}function se(t,e){if(!ce(t)||!e.reProcess&&t.getAttribute("textFitted"))return!1;e.reProcess||t.setAttribute("textFitted",1);let i,l,n,s,r,u,c;if(n=t.innerHTML,s=oe(t),l=re(t),!s||!e.widthOnly&&!l)throw e.widthOnly?new Error("Set a static width on the target element "+t.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+t.outerHTML+" before using textFit!");n.indexOf("textFitted")===-1?(i=document.createElement("span"),i.className="textFitted",i.style.display="inline-block",i.innerHTML=n,t.innerHTML="",t.appendChild(i)):(i=t.querySelector("span.textFitted"),T(i,"textFitAlignVert")&&(i.className=i.className.replace("textFitAlignVert",""),i.style.height="",t.className.replace("textFitAlignVertFlex",""))),e.alignHoriz&&(t.style["text-align"]="center",i.style["text-align"]="center");let h=e.multiLine;e.detectMultiLine&&!h&&i.scrollHeight>=parseInt(window.getComputedStyle(i)["font-size"],10)*2&&(h=!0),h||(t.style["white-space"]="nowrap"),r=e.minFontSize,c=e.maxFontSize;let a=r;for(;r<=c;)u=c+r>>1,i.style.fontSize=u+"px",i.scrollWidth<=s&&(e.widthOnly||i.scrollHeight<=l)?(a=u,r=u+1):c=u-1;if(i.style.fontSize!=a+"px"&&(i.style.fontSize=a+"px"),e.alignVert){fe();let f=i.scrollHeight;window.getComputedStyle(t).position==="static"&&(t.style.position="relative"),T(i,"textFitAlignVert")||(i.className=i.className+" textFitAlignVert"),i.style.height=f+"px",e.alignVertWithFlexbox&&!T(t,"textFitAlignVertFlex")&&(t.className=t.className+" textFitAlignVertFlex")}}function re(t){let e=window.getComputedStyle(t,null);return t.clientHeight-parseInt(e.getPropertyValue("padding-top"),10)-parseInt(e.getPropertyValue("padding-bottom"),10)}function oe(t){let e=window.getComputedStyle(t,null);return t.clientWidth-parseInt(e.getPropertyValue("padding-left"),10)-parseInt(e.getPropertyValue("padding-right"),10)}function ce(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function T(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}function fe(){if(document.getElementById("textFitStyleSheet"))return;let t=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),e=document.createElement("style");e.type="text/css",e.id="textFitStyleSheet",e.innerHTML=t,document.body.appendChild(e)}function W(t,e,i){const l=t.slice();return l[12]=e[i],l[13]=e,l[14]=i,l}function B(t,e,i){const l=t.slice();return l[15]=e[i],l[17]=i,l}function G(t){let e,i,l;return{c(){e=v("div"),i=v("div"),l=v("div"),this.h()},l(n){e=b(n,"DIV",{class:!0});var s=y(e);i=b(s,"DIV",{class:!0});var r=y(i);l=b(r,"DIV",{class:!0}),y(l).forEach(g),r.forEach(g),s.forEach(g),this.h()},h(){d(l,"class","push-tile svelte-1b9m0ji"),d(i,"class","push svelte-1b9m0ji"),E(i,"animate",t[3]),V(i,"margin-bottom",t[2],!1),d(e,"class","column svelte-1b9m0ji"),E(e,"first",t[17]==0)},m(n,s){k(n,e,s),_(e,i),_(i,l)},p(n,s){s&8&&E(i,"animate",n[3]),s&4&&V(i,"margin-bottom",n[2],!1)},d(n){n&&g(e)}}}function he(t){let e,i,l=t[12].caption+"",n,s,r,u,c,h=t[12].subcaption+"",a;return{c(){e=v("div"),i=v("h2"),n=L(l),s=H(),r=v("hr"),u=H(),c=v("h4"),a=L(h),this.h()},l(f){e=b(f,"DIV",{class:!0});var o=y(e);i=b(o,"H2",{class:!0});var p=y(i);n=A(p,l),p.forEach(g),s=j(o),r=b(o,"HR",{class:!0}),u=j(o),c=b(o,"H4",{class:!0});var m=y(c);a=A(m,h),m.forEach(g),o.forEach(g),this.h()},h(){d(i,"class","svelte-1b9m0ji"),d(r,"class","svelte-1b9m0ji"),d(c,"class","svelte-1b9m0ji"),d(e,"class","text svelte-1b9m0ji"),V(e,"background-color",t[12].colour,!1)},m(f,o){k(f,e,o),_(e,i),_(i,n),_(e,s),_(e,r),_(e,u),_(e,c),_(c,a)},p(f,o){o&1&&l!==(l=f[12].caption+"")&&C(n,l),o&1&&h!==(h=f[12].subcaption+"")&&C(a,h),o&1&&V(e,"background-color",f[12].colour,!1)},d(f){f&&g(e)}}}function ue(t){let e,i,l=t[12].caption+"",n;return{c(){e=v("div"),i=v("h2"),n=L(l),this.h()},l(s){e=b(s,"DIV",{class:!0});var r=y(e);i=b(r,"H2",{class:!0});var u=y(i);n=A(u,l),u.forEach(g),r.forEach(g),this.h()},h(){d(i,"class","svelte-1b9m0ji"),d(e,"class","text svelte-1b9m0ji"),V(e,"background-color",t[12].colour,!1)},m(s,r){k(s,e,r),_(e,i),_(i,n)},p(s,r){r&1&&l!==(l=s[12].caption+"")&&C(n,l),r&1&&V(e,"background-color",s[12].colour,!1)},d(s){s&&g(e)}}}function me(t){let e,i,l,n,s,r,u=t[12].caption+"",c;return{c(){e=v("div"),i=v("img"),s=H(),r=v("div"),c=L(u),this.h()},l(h){e=b(h,"DIV",{class:!0});var a=y(e);i=b(a,"IMG",{src:!0,alt:!0,class:!0}),s=j(a),r=b(a,"DIV",{class:!0});var f=y(r);c=A(f,u),f.forEach(g),a.forEach(g),this.h()},h(){O(i.src,l=t[12].image)||d(i,"src",l),d(i,"alt",n=t[12].caption),d(i,"class","svelte-1b9m0ji"),d(r,"class","textfit svelte-1b9m0ji"),d(e,"class","image-holder svelte-1b9m0ji")},m(h,a){k(h,e,a),_(e,i),_(e,s),_(e,r),_(r,c)},p(h,a){a&1&&!O(i.src,l=h[12].image)&&d(i,"src",l),a&1&&n!==(n=h[12].caption)&&d(i,"alt",n),a&1&&u!==(u=h[12].caption+"")&&C(c,u)},d(h){h&&g(e)}}}function ge(t){let e;function i(s,r){if(s[12].type==="image")return me;if(s[12].type==="text")return ue;if(s[12].type==="link")return he}let l=i(t),n=l&&l(t);return{c(){n&&n.c(),e=D()},l(s){n&&n.l(s),e=D()},m(s,r){n&&n.m(s,r),k(s,e,r)},p(s,r){l===(l=i(s))&&n?n.p(s,r):(n&&n.d(1),n=l&&l(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n&&n.d(s),s&&g(e)}}}function K(t){let e,i,l,n=t[13],s=t[14],r;i=new ne({props:{href:t[12].link?t[12].link:null,$$slots:{default:[ge]},$$scope:{ctx:t}}});const u=()=>t[7](e,n,s),c=()=>t[7](null,n,s);return{c(){e=v("div"),X(i.$$.fragment),l=H(),this.h()},l(h){e=b(h,"DIV",{class:!0});var a=y(e);Z(i.$$.fragment,a),l=j(a),a.forEach(g),this.h()},h(){d(e,"class","tile svelte-1b9m0ji"),E(e,"animate",t[3]),V(e,"margin-bottom",t[2],!1)},m(h,a){k(h,e,a),$(i,e,null),_(e,l),u(),r=!0},p(h,a){t=h;const f={};a&1&&(f.href=t[12].link?t[12].link:null),a&262145&&(f.$$scope={dirty:a,ctx:t}),i.$set(f),(n!==t[13]||s!==t[14])&&(c(),n=t[13],s=t[14],u()),a&8&&E(e,"animate",t[3]),a&4&&V(e,"margin-bottom",t[2],!1)},i(h){r||(I(i.$$.fragment,h),r=!0)},o(h){z(i.$$.fragment,h),r=!1},d(h){h&&g(e),ee(i),c()}}}function de(t){let e,i,l,n,s={length:t[1]},r=[];for(let a=0;a<s.length;a+=1)r[a]=G(B(t,s,a));let u=t[0],c=[];for(let a=0;a<u.length;a+=1)c[a]=K(W(t,u,a));const h=a=>z(c[a],1,1,()=>{c[a]=null});return{c(){e=v("div");for(let a=0;a<r.length;a+=1)r[a].c();i=H(),l=v("div");for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0});var f=y(e);for(let p=0;p<r.length;p+=1)r[p].l(f);i=j(f),l=b(f,"DIV",{class:!0});var o=y(l);for(let p=0;p<c.length;p+=1)c[p].l(o);o.forEach(g),f.forEach(g),this.h()},h(){d(l,"class","scratch svelte-1b9m0ji"),d(e,"class","gallery svelte-1b9m0ji"),V(e,"gap",t[2],!1)},m(a,f){k(a,e,f);for(let o=0;o<r.length;o+=1)r[o].m(e,null);_(e,i),_(e,l);for(let o=0;o<c.length;o+=1)c[o].m(l,null);t[8](l),t[9](e),n=!0},p(a,[f]){if(f&14){s={length:a[1]};let o;for(o=0;o<s.length;o+=1){const p=B(a,s,o);r[o]?r[o].p(p,f):(r[o]=G(p),r[o].c(),r[o].m(e,i))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}if(f&13){u=a[0];let o;for(o=0;o<u.length;o+=1){const p=W(a,u,o);c[o]?(c[o].p(p,f),I(c[o],1)):(c[o]=K(p),c[o].c(),I(c[o],1),c[o].m(l,null))}for(te(),o=u.length;o<c.length;o+=1)h(o);ie()}f&4&&V(e,"gap",a[2],!1)},i(a){if(!n){for(let f=0;f<u.length;f+=1)I(c[f]);n=!0}},o(a){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)z(c[f]);n=!1},d(a){a&&g(e),P(r,a),P(c,a),t[8](null),t[9](null)}}}function N(t,e){return Array.from(t.querySelectorAll(e))}function R(t,e){let i=0,l=N(t,e);if(l.length>0){let n=parseInt(window.getComputedStyle(l[0]).getPropertyValue("margin-bottom"));l.forEach(s=>{i+=s.offsetHeight+n})}return i}function pe(t){let e=t.map(l=>{let n=l.querySelector(".push");l.appendChild(n);let s=parseInt(window.getComputedStyle(n).getPropertyValue("margin-bottom")),r=l.offsetHeight-R(l,".tile");return{push:n,margin:s,height:r}}),i=Math.min(...e.map(l=>l.height));e.forEach(l=>{l.height=l.height-i,l.height<l.margin?l.height=0:l.height=l.height-l.margin,l.push.style.height=`${l.height}px`})}function _e(t,e,i){let{columns:l=3}=e,{tiles:n=[]}=e,{gap:s="1rem"}=e,{animate:r=!1}=e,{animation:u="float-up 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}=e,c,h;function a(){if(!c)return;let m=N(c,".column").filter(S=>S.offsetParent!==null);n.forEach(S=>{h.appendChild(S.handle)}),n.forEach(S=>{let w=m.map(U=>R(U,".tile"));const F=Math.min(...w),M=w.indexOf(F);m[M].appendChild(S.handle)}),pe(m),ae(c.getElementsByClassName("textfit"),{multiline:!0})}le(()=>{window.addEventListener("resize",a),r&&N(c,".animate").forEach(w=>{let F=new IntersectionObserver(M=>{if(M[0].isIntersecting){w.style.visibility="visible",w.style.animation=u,F.unobserve(w);return}});F.observe(w)});const m=setInterval(()=>{n.filter(F=>F.type==="image").map(F=>F.handle.querySelector("img").complete).every(F=>F===!0)&&(clearInterval(m),a())},50)});function f(m,S,w){x[m?"unshift":"push"](()=>{S[w].handle=m,i(0,n)})}function o(m){x[m?"unshift":"push"](()=>{h=m,i(5,h)})}function p(m){x[m?"unshift":"push"](()=>{c=m,i(4,c)})}return t.$$set=m=>{"columns"in m&&i(1,l=m.columns),"tiles"in m&&i(0,n=m.tiles),"gap"in m&&i(2,s=m.gap),"animate"in m&&i(3,r=m.animate),"animation"in m&&i(6,u=m.animation)},a(),[n,l,s,r,c,h,u,f,o,p]}class ye extends Y{constructor(e){super(),J(this,e,_e,de,Q,{columns:1,tiles:0,gap:2,animate:3,animation:6})}}export{ye as G};
