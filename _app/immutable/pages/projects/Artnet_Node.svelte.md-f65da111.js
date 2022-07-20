import{S as jt,i as St,s as Nt,e as a,t as i,k as c,w as wt,c as n,a as u,h as r,d as t,m as h,x as bt,b as p,U as H,g as l,K as o,y as kt,E as Xt,q as _t,o as At,B as It}from"../../chunks/index-5dfa2933.js";import{C as Mt}from"../../chunks/prism-c-30ee303a.js";import"../../chunks/prism-a46989fb.js";import"../../chunks/Notification-7f4998ec.js";import"../../chunks/index-edf86401.js";import"../../chunks/ripple-59eba3d5.js";/* empty css                                                            */function Gt(Pt){let f,ve,k,ge,we,F,be,ke,V,j,S,Oe,Y,d,_e,_,Ae,Ie,A,Me,Pe,L,Te,Ee,I,xe,De,Z,N,X,ze,ee,m,je,O,Se,Ne,z,Xe,Ge,K,Ce,Be,te,M,oe,P,Tt=`<code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token function">defined</span><span class="token punctuation">(</span>USE_UART0<span class="token punctuation">)</span></span></span>
<span class="token function">ISR</span><span class="token punctuation">(</span>SIG_USART0_TRANS<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    ArduinoDmx0<span class="token punctuation">.</span><span class="token function">Process_ISR_TX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span></code>`,se,G,Re,ae,T,ne,E,Et=`<code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token function">defined</span><span class="token punctuation">(</span>USE_UART0<span class="token punctuation">)</span></span></span>
<span class="token function">ISR</span><span class="token punctuation">(</span>USART0_TX_vect<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    ArduinoDmx0<span class="token punctuation">.</span><span class="token function">Process_ISR_TX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span></code>`,ie,C,B,Ke,re,v,Ue,R,$e,Je,le,U,$,Ve,ue,g,We,x,Qe,qe,pe,J,W,Ye,ce,w,He,D,Fe,Le,he,Q,q,Ze,de;return M=new Mt({}),T=new Mt({}),{c(){f=a("p"),ve=i(`Recently, there have been a variety of events where I have needed more than one universe of DMX for a show. Particularly when bringing shows into other venues, often the rig is spread out over multiple DMX universes, and having more than one DMX output is always handy.
For most theatre shows, I use MagicQ on PC with the `),k=a("a"),ge=i("Entecc DMX USB Pro"),we=i(", but MagicQ only allows the use of one single universe of DMX out over a USB interface, meaning I cannot simply use two of them to get two universes of DMX out of the software. However, MagicQ does allow the full "),F=a("strong"),be=i("64 universes"),ke=i(" to be output over Artnet/sACN, even in demo mode! Now, you can buy these at an \u2018affordable\u2019 price relative to the cost of professional kit, but they are still a bit on the expensive side for a hobbyist. A fun alternative is to make one! The unit pictured below cost me about \xA320 in parts, and depending on what you have lying around could be even cheaper. The system is built around an Arduino Mega, so is relatively easy to modify to suit people\u2019s particular needs, and the unit is much less liable to crash MagicQ than the Entecc converters in my experience."),V=c(),j=a("p"),S=a("img"),Y=c(),d=a("p"),_e=i("The core of this project is based on the DMX library made available by Toni Merino, available "),_=a("a"),Ae=i("here"),Ie=i(". This supports one universe of DMX on the Arduino Uno, and up to four on the Arduino Mega (performance starts to suffer at about three universes, so I would not recommend exceeding two). The code is based quite closely on a similar project made by "),A=a("a"),Me=i("Alex Forey"),Pe=i(" (original project pictured below), however both his code and the original library code by Toni Merino will not compile in modern versions of the Arduino IDE. This is because many register names have been changed since the library was written, so much of the old code has been "),L=a("em"),Te=i("\u201Cpoisoned\u201D"),Ee=i(". Personally, I can\u2019t stand having to use multiple versions of the same software, so I re-wrote the library with the modern register names and syntaxes. This updated library can be found on "),I=a("a"),xe=i("GitHub"),De=i(`, along with the rest of my source code.
Aside from the Arduino Mega, I used a pair of MAX485 ICs to drive the DMX lines ( optical isolation is recommended here, but not mandatory), and a Wiznet W5100 breakout board for Ethernet connectivity. I didn\u2019t feel like making a PCB for this project, so I wired it all together on a piece of stripboard and enclosed the entire thing in an old extrusion-style case I had lying about.`),Z=c(),N=a("p"),X=a("img"),ee=c(),m=a("p"),je=i("It has been a while since I modified the "),O=a("em"),Se=i("libDMX.cpp"),Ne=i(" library, but as far as I can remember, most of the trouble was caused by the "),z=a("code"),Xe=i("SIG_USART"),Ge=i(" syntax, which has been poisoned since Arduino Version "),K=a("em"),Ce=i("0023"),Be=i(`. If you encounter similar
syntax bugs elsewhere, you essentially have to convert this syntax:`),te=c(),wt(M.$$.fragment),oe=c(),P=a("pre"),se=c(),G=a("p"),Re=i("\u2026into this syntax:"),ae=c(),wt(T.$$.fragment),ne=c(),E=a("pre"),ie=c(),C=a("p"),B=a("img"),re=c(),v=a("p"),Ue=i(`This project was actually relatively quick to get up and running. While I haven\u2019t got some of the fancier features you would expect in an Artnet node to work, like remote configuration and auto discovery, the actual recieving of packets and outputting DMX is rock solid, and has not let me down in a performance as of yet. The nice thing about Artnet compared to the USB interfaces is the ability to set up redundancy. If you direct two Artnet streams at a single address, the node will simply take the highest value of the two streams, so if one console goes down during a show, the other will take over seamlessly.
Below is a picture off my first test of operation, paired with my custom MagicQ wing (read about that `),R=a("a"),$e=i("here"),Je=i("). The combination of the two devices make a very powerful lighting console, which can act as a backup for the main venue console, all for a total of about \xA340 between the two projects. This is all part of my ongoing project to make the ultimate PC-based lighting console :)"),le=c(),U=a("p"),$=a("img"),ue=c(),g=a("p"),We=i(`When all tidied up, the unit looks quite smart on the outside (despite being a complete mess inside). This was also the first project I made with an integrated mains supply. When doing a theatre get-in, the last thing you want to be doing is digging through boxes to find the right wall adapter! When doing this it is very important to make sure the case is properly mounted and everything inside the case is rigidly mounted, so as to prevent any potential shorts between the live AC input and the control circuitry.
I also re-wrote the code to use these really cutesy OLED displays you can get on `),x=a("a"),Qe=i("eBay"),qe=i(" for next to nothing. At the moment I have not implemented encoder support for configuring the node IP address, as I was nervous someone would fiddle with the settings midway through our last show, however this is something I am planning to do if I get round to updating this project."),pe=c(),J=a("p"),W=a("img"),ce=c(),w=a("p"),He=i("In the future I am planning to port this project to a much cheaper ARM development board like the "),D=a("a"),Fe=i("STM32 \u2018Blue-Pill\u2019"),Le=i(`, as well as get remote configuration and discovery working. The target is to make a simple module that can be embedded into projects and cheaper fixtures to add networking capabilities retroactively.
However, suffice to say, this is quite a while off, as I have some more exciting projects in the pipeline!`),he=c(),Q=a("p"),q=a("img"),this.h()},l(e){f=n(e,"P",{});var s=u(f);ve=r(s,`Recently, there have been a variety of events where I have needed more than one universe of DMX for a show. Particularly when bringing shows into other venues, often the rig is spread out over multiple DMX universes, and having more than one DMX output is always handy.
For most theatre shows, I use MagicQ on PC with the `),k=n(s,"A",{href:!0,rel:!0});var et=u(k);ge=r(et,"Entecc DMX USB Pro"),et.forEach(t),we=r(s,", but MagicQ only allows the use of one single universe of DMX out over a USB interface, meaning I cannot simply use two of them to get two universes of DMX out of the software. However, MagicQ does allow the full "),F=n(s,"STRONG",{});var tt=u(F);be=r(tt,"64 universes"),tt.forEach(t),ke=r(s," to be output over Artnet/sACN, even in demo mode! Now, you can buy these at an \u2018affordable\u2019 price relative to the cost of professional kit, but they are still a bit on the expensive side for a hobbyist. A fun alternative is to make one! The unit pictured below cost me about \xA320 in parts, and depending on what you have lying around could be even cheaper. The system is built around an Arduino Mega, so is relatively easy to modify to suit people\u2019s particular needs, and the unit is much less liable to crash MagicQ than the Entecc converters in my experience."),s.forEach(t),V=h(e),j=n(e,"P",{});var ot=u(j);S=n(ot,"IMG",{src:!0,alt:!0}),ot.forEach(t),Y=h(e),d=n(e,"P",{});var y=u(d);_e=r(y,"The core of this project is based on the DMX library made available by Toni Merino, available "),_=n(y,"A",{href:!0,rel:!0});var st=u(_);Ae=r(st,"here"),st.forEach(t),Ie=r(y,". This supports one universe of DMX on the Arduino Uno, and up to four on the Arduino Mega (performance starts to suffer at about three universes, so I would not recommend exceeding two). The code is based quite closely on a similar project made by "),A=n(y,"A",{href:!0,rel:!0});var at=u(A);Me=r(at,"Alex Forey"),at.forEach(t),Pe=r(y," (original project pictured below), however both his code and the original library code by Toni Merino will not compile in modern versions of the Arduino IDE. This is because many register names have been changed since the library was written, so much of the old code has been "),L=n(y,"EM",{});var nt=u(L);Te=r(nt,"\u201Cpoisoned\u201D"),nt.forEach(t),Ee=r(y,". Personally, I can\u2019t stand having to use multiple versions of the same software, so I re-wrote the library with the modern register names and syntaxes. This updated library can be found on "),I=n(y,"A",{href:!0,rel:!0});var it=u(I);xe=r(it,"GitHub"),it.forEach(t),De=r(y,`, along with the rest of my source code.
Aside from the Arduino Mega, I used a pair of MAX485 ICs to drive the DMX lines ( optical isolation is recommended here, but not mandatory), and a Wiznet W5100 breakout board for Ethernet connectivity. I didn\u2019t feel like making a PCB for this project, so I wired it all together on a piece of stripboard and enclosed the entire thing in an old extrusion-style case I had lying about.`),y.forEach(t),Z=h(e),N=n(e,"P",{});var rt=u(N);X=n(rt,"IMG",{src:!0,alt:!0}),rt.forEach(t),ee=h(e),m=n(e,"P",{});var b=u(m);je=r(b,"It has been a while since I modified the "),O=n(b,"EM",{});var lt=u(O);Se=r(lt,"libDMX.cpp"),lt.forEach(t),Ne=r(b," library, but as far as I can remember, most of the trouble was caused by the "),z=n(b,"CODE",{});var ut=u(z);Xe=r(ut,"SIG_USART"),ut.forEach(t),Ge=r(b," syntax, which has been poisoned since Arduino Version "),K=n(b,"EM",{});var pt=u(K);Ce=r(pt,"0023"),pt.forEach(t),Be=r(b,`. If you encounter similar
syntax bugs elsewhere, you essentially have to convert this syntax:`),b.forEach(t),te=h(e),bt(M.$$.fragment,e),oe=h(e),P=n(e,"PRE",{class:!0});var xt=u(P);xt.forEach(t),se=h(e),G=n(e,"P",{});var ct=u(G);Re=r(ct,"\u2026into this syntax:"),ct.forEach(t),ae=h(e),bt(T.$$.fragment,e),ne=h(e),E=n(e,"PRE",{class:!0});var Dt=u(E);Dt.forEach(t),ie=h(e),C=n(e,"P",{});var ht=u(C);B=n(ht,"IMG",{src:!0,alt:!0}),ht.forEach(t),re=h(e),v=n(e,"P",{});var fe=u(v);Ue=r(fe,`This project was actually relatively quick to get up and running. While I haven\u2019t got some of the fancier features you would expect in an Artnet node to work, like remote configuration and auto discovery, the actual recieving of packets and outputting DMX is rock solid, and has not let me down in a performance as of yet. The nice thing about Artnet compared to the USB interfaces is the ability to set up redundancy. If you direct two Artnet streams at a single address, the node will simply take the highest value of the two streams, so if one console goes down during a show, the other will take over seamlessly.
Below is a picture off my first test of operation, paired with my custom MagicQ wing (read about that `),R=n(fe,"A",{href:!0});var dt=u(R);$e=r(dt,"here"),dt.forEach(t),Je=r(fe,"). The combination of the two devices make a very powerful lighting console, which can act as a backup for the main venue console, all for a total of about \xA340 between the two projects. This is all part of my ongoing project to make the ultimate PC-based lighting console :)"),fe.forEach(t),le=h(e),U=n(e,"P",{});var ft=u(U);$=n(ft,"IMG",{src:!0,alt:!0}),ft.forEach(t),ue=h(e),g=n(e,"P",{});var me=u(g);We=r(me,`When all tidied up, the unit looks quite smart on the outside (despite being a complete mess inside). This was also the first project I made with an integrated mains supply. When doing a theatre get-in, the last thing you want to be doing is digging through boxes to find the right wall adapter! When doing this it is very important to make sure the case is properly mounted and everything inside the case is rigidly mounted, so as to prevent any potential shorts between the live AC input and the control circuitry.
I also re-wrote the code to use these really cutesy OLED displays you can get on `),x=n(me,"A",{href:!0,rel:!0});var mt=u(x);Qe=r(mt,"eBay"),mt.forEach(t),qe=r(me," for next to nothing. At the moment I have not implemented encoder support for configuring the node IP address, as I was nervous someone would fiddle with the settings midway through our last show, however this is something I am planning to do if I get round to updating this project."),me.forEach(t),pe=h(e),J=n(e,"P",{});var yt=u(J);W=n(yt,"IMG",{src:!0,alt:!0}),yt.forEach(t),ce=h(e),w=n(e,"P",{});var ye=u(w);He=r(ye,"In the future I am planning to port this project to a much cheaper ARM development board like the "),D=n(ye,"A",{href:!0,rel:!0});var vt=u(D);Fe=r(vt,"STM32 \u2018Blue-Pill\u2019"),vt.forEach(t),Le=r(ye,`, as well as get remote configuration and discovery working. The target is to make a simple module that can be embedded into projects and cheaper fixtures to add networking capabilities retroactively.
However, suffice to say, this is quite a while off, as I have some more exciting projects in the pipeline!`),ye.forEach(t),he=h(e),Q=n(e,"P",{});var gt=u(Q);q=n(gt,"IMG",{src:!0,alt:!0}),gt.forEach(t),this.h()},h(){p(k,"href","https://www.enttec.co.uk/product/protocols-gb/dmx512-gb/2-universe-usb-computer-interface-dmx/"),p(k,"rel","nofollow"),H(S.src,Oe="https://cdn.bojit.org/img/posts/Artnet_Node-Artnet_Node.JPG")||p(S,"src",Oe),p(S,"alt","Artnet_Node-Artnet_Node.JPG"),p(_,"href","https://blog.deskontrol.net/arduino-based-dmx-artnet-node/"),p(_,"rel","nofollow"),p(A,"href","https://github.com/alfo/artnet"),p(A,"rel","nofollow"),p(I,"href","https://github.com/BOJIT/Artnet_Node"),p(I,"rel","nofollow"),H(X.src,ze="https://cdn.bojit.org/img/posts/Artnet_Node-Alex_Forey.JPG")||p(X,"src",ze),p(X,"alt","Artnet_Node-Alex_Forey.JPG"),p(P,"class","language-c"),p(E,"class","language-c"),H(B.src,Ke="https://cdn.bojit.org/img/posts/Artnet_Node-Prototype.JPG")||p(B,"src",Ke),p(B,"alt","Artnet_Node-Prototype.JPG"),p(R,"href","https://bojit.org/projects/MagicQ_Wing"),H($.src,Ve="https://cdn.bojit.org/img/posts/Artnet_Node-Test.JPG")||p($,"src",Ve),p($,"alt","Artnet_Node-Test.JPG"),p(x,"href","https://www.ebay.co.uk/itm/IIC-I2C-0-91-128x32-white-OLED-LCD-Display-Module-3-3v-5v-For-Arduino-PIC-PSHN/132893477621?epid=4002658264&hash=item1ef1118af5:g:lKYAAOSwu05bQsUy"),p(x,"rel","nofollow"),H(W.src,Ye="https://cdn.bojit.org/img/posts/Artnet_Node-LCD.JPG")||p(W,"src",Ye),p(W,"alt","Artnet_Node-LCD.JPG"),p(D,"href","https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html"),p(D,"rel","nofollow"),H(q.src,Ze="https://cdn.bojit.org/img/posts/Artnet_Node-Node.JPG")||p(q,"src",Ze),p(q,"alt","Artnet_Node-Node.JPG")},m(e,s){l(e,f,s),o(f,ve),o(f,k),o(k,ge),o(f,we),o(f,F),o(F,be),o(f,ke),l(e,V,s),l(e,j,s),o(j,S),l(e,Y,s),l(e,d,s),o(d,_e),o(d,_),o(_,Ae),o(d,Ie),o(d,A),o(A,Me),o(d,Pe),o(d,L),o(L,Te),o(d,Ee),o(d,I),o(I,xe),o(d,De),l(e,Z,s),l(e,N,s),o(N,X),l(e,ee,s),l(e,m,s),o(m,je),o(m,O),o(O,Se),o(m,Ne),o(m,z),o(z,Xe),o(m,Ge),o(m,K),o(K,Ce),o(m,Be),l(e,te,s),kt(M,e,s),l(e,oe,s),l(e,P,s),P.innerHTML=Tt,l(e,se,s),l(e,G,s),o(G,Re),l(e,ae,s),kt(T,e,s),l(e,ne,s),l(e,E,s),E.innerHTML=Et,l(e,ie,s),l(e,C,s),o(C,B),l(e,re,s),l(e,v,s),o(v,Ue),o(v,R),o(R,$e),o(v,Je),l(e,le,s),l(e,U,s),o(U,$),l(e,ue,s),l(e,g,s),o(g,We),o(g,x),o(x,Qe),o(g,qe),l(e,pe,s),l(e,J,s),o(J,W),l(e,ce,s),l(e,w,s),o(w,He),o(w,D),o(D,Fe),o(w,Le),l(e,he,s),l(e,Q,s),o(Q,q),de=!0},p:Xt,i(e){de||(_t(M.$$.fragment,e),_t(T.$$.fragment,e),de=!0)},o(e){At(M.$$.fragment,e),At(T.$$.fragment,e),de=!1},d(e){e&&t(f),e&&t(V),e&&t(j),e&&t(Y),e&&t(d),e&&t(Z),e&&t(N),e&&t(ee),e&&t(m),e&&t(te),It(M,e),e&&t(oe),e&&t(P),e&&t(se),e&&t(G),e&&t(ae),It(T,e),e&&t(ne),e&&t(E),e&&t(ie),e&&t(C),e&&t(re),e&&t(v),e&&t(le),e&&t(U),e&&t(ue),e&&t(g),e&&t(pe),e&&t(J),e&&t(ce),e&&t(w),e&&t(he),e&&t(Q)}}}const Qt={title:"Artnet Node",date:"18-02-2018",published:!0,tile:{type:"image",image:"/tiles/2018-02-18-Artnet_Node.JPG"}};class qt extends jt{constructor(f){super(),St(this,f,null,Gt,Nt,{})}}export{qt as default,Qt as metadata};
