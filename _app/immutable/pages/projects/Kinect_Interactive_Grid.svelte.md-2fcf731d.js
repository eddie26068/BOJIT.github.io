import{S as wt,i as bt,s as yt,e as a,t as r,k as u,w as ht,c as n,a as h,h as l,d as t,m as c,x as dt,b as d,U,g as s,K as o,y as ut,E as vt,q as ct,o as pt,B as mt}from"../../chunks/index-5dfa2933.js";import{Y as ft}from"../../chunks/YouTube-3a9e792f.js";function It(gt){let m,ce,y,pe,me,z,v,F,w,fe,I,ge,we,Q,T,E,qe,Y,K,be,R,P,G,Ve,Z,f,ye,k,ve,Ie,x,ke,_e,ee,M,D,$e,te,p,Te,X,Ee,Ke,J,Pe,Ge,N,xe,Me,O,H,De,Ae,oe,A,C,je,ie,S,Ce,ae,B,W,Ue,ne,_,se,L,Se,re,b,Be,q,We,Le,le,V,$,Xe,he;return v=new ft({props:{src:"https://www.youtube.com/embed/1h2riunyS8I",autoplay:!0,playlist:"1h2riunyS8I"}}),_=new ft({props:{src:"https://www.youtube.com/embed/KqTWhsiiKgE",autoplay:!0,playlist:"KqTWhsiiKgE"}}),{c(){m=a("p"),ce=r(`This Spring our school hosted a production of Every Brilliant Thing, by Duncan Macmillan. This production was entirely student run, so we had a great deal more artistic freedom than most of our school shows permit. One afternoon, the director approached me with the expression of someone about to double your workload, and then raised the suggestion of making a grid of bulbs that could hang above the performance space (the show is performed in the round).
My initial reaction was somewhat dismissive, as the idea of driving nearly 40 incandescent lightbulbs off our school power distribution was frankly laughable. However, this conversation coincided with the arrival of some rather curious bulbs I found on Ebay. These bulbs were theose new COB LED \u2018filament-style\u2019 lamps that are all the rage right now. However, unlike many others I had seen, these were advertised as being DC-12V. Apparently they are intended for caravans and SUVs, but they are surprisingly hard to find. I could not find a single EU distributor of these bulbs, and only a handful of Ebay sellers. Here is the supplier `),y=a("a"),pe=r("I used"),me=r(`.
The DC variety are advertised as non-dimmable, but as the bulbs don\u2019t contain the same rectification stage that the AC-Variety use, I suspected that they could be dimmed with PWM just like a normal LED strip. This is not entirely true, but they do perform quite well in typical theatre use. Below is a short clip demonstrating the final outcome:`),z=u(),ht(v.$$.fragment),F=u(),w=a("p"),fe=r(`After asking the supplier and doing some digging online, I couldn\u2019t find anyone who had managed it successfully, so decided to order a couple and experiment a bit. As the bulbs are only \xA31.39 shipped, I felt I could justify it!
Below is my test setup for testing the bulbs: essentially it is a cheap PWM dimmer which has been modified with an Arduino Nano to give it DMX input. In the final version I used `),I=a("a"),ge=r("this 36 channel dimmer"),we=r(`, but I wanted to make sure that as a last resort I could get the system working with the Arduino\u2019s Default PWM frequency of 490Hz (a good frequency that does not show up on our camcorders). This worked surprisingly well, all the way down to about 5% duty cycle. As with most LED dimmers, the dimming curve is not linear: a change from 0-10% corresponds to a brightness change of about 50% at the bottom end. This makes very slow fades problematic. Moreover, at approx. 2% duty cycle the bulbs tend to violently flicker, which leads me to believe that there is some sort of constant-current circuitry inside the bulbs (while tempting to smash one open and check, I only had two bulbs, and I did not fancy waiting another 6 weeks for a replacement).
Despite being a bit snappy at low intensity, as well as the very occasional flicker, these bulbs performed very well under theatre lighting, and their low power-consumption and cost made them ideal for large grid installations. The entire 36 bulb grid ended up costing roughly \xA3120 to build, and drew a peak of about 80W (the equivalent of two incandescent bulbs!).`),Q=u(),T=a("p"),E=a("img"),Y=u(),K=a("p"),be=r("When we initially devised the plans for the grid, we had not thought about using a Kinect to make the system interactive. Without the Kinect the grid was relatively simple (albeit time-consuming) to make. The grid was essentially a 2.4m CLS square with a rope mesh reinforced with zip-ties at the intersections. To keep the grid stable when hanging, I made a central platform to hold the power supply and LED driver board. This also was used to mount the Kinect. A note to anyone attempting something like this: measure the size of the doors to your theatre before making the frame! We managed to make the frame 2cm wider than our school doorways, so moving the frame between rooms was frankly a nightmare."),R=u(),P=a("p"),G=a("img"),Z=u(),f=a("p"),ye=r("Lately I have done a lot of playing about with a program called Touchdesigner. It is essentially a visual scripting and manipulation tool. It is often used for projection mapping, but the large variety of input/output operators make it a very flexible tool in visual FX. To get an idea of what it can do, I would highly encourage you to read "),k=a("a"),ve=r("this article"),Ie=r(` showing how Touchdesigner was used in the making of the film \u2018Gravity\u2019. The really nice thing is that Touchdesigner is free for non-commercial use, with a resolution limit of 1280x1280. A resolution of 6x6 falls well below this threshold! Principally, Touchdesigner offers a much more powerful pixel-mapping engine than most lighting consoles (in our case MagicQ), however the developers have added support for a variety of external inputs, including the Kinect.
Programming an entire theatre show in Touchdesigner is not practical, so we needed some way to merge the two DMX signals. As it happens, the DMX splitters in our venue have 2 inputs that are merged based on HTP, but an alternative to this is to send both outputs to the same address over Artnet. In Touchdesigner I set up a network that takes an input in the form of a black and white image and generates a series of channel values that can be output over DMX. The core pixel-mapping engine is pictured below, and I have attached the Touchdesigner File `),x=a("a"),ke=r("here"),_e=r(" if anyone is interested."),ee=u(),M=a("p"),D=a("img"),te=u(),p=a("p"),Te=r("The raw kinect data needed to be processed heavily before the output started leaving the lovely trails seen in the demonstration above. This processing needs to be done with as little latency as possible, but before considering how to tackle this I had a somewhat more urgent problem. The Kinect is hanging in the centre of our studio, but the control room (along with the desktop PC running touchdesigner) is located about 20m away on a different floor of the building (pictured below). The Kinect V1 is connected by a 480Mbps USB connection, and USB is not designed to be run over such long distances. There are plenty of USB extenders on the market, but only "),X=a("em"),Ee=r("one"),Ke=r(" is known to work with the Kinect V1, and none are known to work with the Kinect V2. Considering the USB extender in question costs \xA3350, I was determined to find an alternative. The solution in the end was rather bodged, but worked reliably for every show: I hung an old laptop from the roof of the theatre near to the Kinect, and ran a demo file from the Kinect SDK on the laptop that simply displayed the depth stream on the screen. I then used OBS (Open Broadcaster Software) to create an NDI stream that I could send over Cat5 to the desktop PC. I then used Newtek\u2019s "),J=a("em"),Pe=r("Virtual Input"),Ge=r(" to create a virtual webcam that could be input into Touchdesigner. This "),N=a("del"),xe=r("sounds"),Me=u(),O=a("strong"),H=a("em"),De=r("is"),Ae=r(" incredibly inefficient, but I managed to achieve sub 150ms latency, which was acceptable for the show. Note that if the laptop in the roof could run Touchdesigner, I could have sent the data from one PC to another using the software, however the old laptop was not up to the task. In fact, I am working on a more professional solution to streaming Kinect data, which I am hoping to have published by the end of September."),oe=u(),A=a("p"),C=a("img"),ie=u(),S=a("p"),Ce=r(`Once I was able to get a depth stream into Touchdesigner, I could begin processing the data to make the trails, along with some other visual effects that could be mixed in during the show. As the Kinect is looking at actors from above, the built-in tracking features don\u2019t really work here. Essentially the processing consisted of multiple stages of feedback and luminance threshold filtering, along with a compensation stage that corrected for the non-linearity in the bulb dimming. It is also worth noting that with theatrical installations such as this, subtlety is key, so we had to find a way of incorporating the elements of interactivity without them overpowering the acting.
This setup was very fun to play with once we got it up and running, and I was personally surprised at how effective pixel-mapped effects could be with only a 6x6 grid. As for the Kinect implementation, while this was a good starting point, I feel I have a lot more work to do before implementing the Kinect in theatre productions becomes hassle-free! Below is a look from below of the grid with a chase running to demonstrate the dimming curve of the bulbs.`),ae=u(),B=a("p"),W=a("img"),ne=u(),ht(_.$$.fragment),se=u(),L=a("p"),Se=r("As for the show itself, in contrast to previous student productions, it was a resounding succes! I would highly reccomend looking up the original play by Duncan Macmillan. While our director modified the play to be performed by an ensemble, it is originally a monologue, performed without any stage lighting or effects at all."),re=u(),b=a("p"),Be=r("I have written a separate article outlining the Touchdesigner pixel-mapping engine and how to interface with it. That can be found "),q=a("a"),We=r("here"),Le=r("."),le=u(),V=a("p"),$=a("img"),this.h()},l(e){m=n(e,"P",{});var i=h(m);ce=l(i,`This Spring our school hosted a production of Every Brilliant Thing, by Duncan Macmillan. This production was entirely student run, so we had a great deal more artistic freedom than most of our school shows permit. One afternoon, the director approached me with the expression of someone about to double your workload, and then raised the suggestion of making a grid of bulbs that could hang above the performance space (the show is performed in the round).
My initial reaction was somewhat dismissive, as the idea of driving nearly 40 incandescent lightbulbs off our school power distribution was frankly laughable. However, this conversation coincided with the arrival of some rather curious bulbs I found on Ebay. These bulbs were theose new COB LED \u2018filament-style\u2019 lamps that are all the rage right now. However, unlike many others I had seen, these were advertised as being DC-12V. Apparently they are intended for caravans and SUVs, but they are surprisingly hard to find. I could not find a single EU distributor of these bulbs, and only a handful of Ebay sellers. Here is the supplier `),y=n(i,"A",{href:!0,rel:!0});var Je=h(y);pe=l(Je,"I used"),Je.forEach(t),me=l(i,`.
The DC variety are advertised as non-dimmable, but as the bulbs don\u2019t contain the same rectification stage that the AC-Variety use, I suspected that they could be dimmed with PWM just like a normal LED strip. This is not entirely true, but they do perform quite well in typical theatre use. Below is a short clip demonstrating the final outcome:`),i.forEach(t),z=c(e),dt(v.$$.fragment,e),F=c(e),w=n(e,"P",{});var de=h(w);fe=l(de,`After asking the supplier and doing some digging online, I couldn\u2019t find anyone who had managed it successfully, so decided to order a couple and experiment a bit. As the bulbs are only \xA31.39 shipped, I felt I could justify it!
Below is my test setup for testing the bulbs: essentially it is a cheap PWM dimmer which has been modified with an Arduino Nano to give it DMX input. In the final version I used `),I=n(de,"A",{href:!0,rel:!0});var Ne=h(I);ge=l(Ne,"this 36 channel dimmer"),Ne.forEach(t),we=l(de,`, but I wanted to make sure that as a last resort I could get the system working with the Arduino\u2019s Default PWM frequency of 490Hz (a good frequency that does not show up on our camcorders). This worked surprisingly well, all the way down to about 5% duty cycle. As with most LED dimmers, the dimming curve is not linear: a change from 0-10% corresponds to a brightness change of about 50% at the bottom end. This makes very slow fades problematic. Moreover, at approx. 2% duty cycle the bulbs tend to violently flicker, which leads me to believe that there is some sort of constant-current circuitry inside the bulbs (while tempting to smash one open and check, I only had two bulbs, and I did not fancy waiting another 6 weeks for a replacement).
Despite being a bit snappy at low intensity, as well as the very occasional flicker, these bulbs performed very well under theatre lighting, and their low power-consumption and cost made them ideal for large grid installations. The entire 36 bulb grid ended up costing roughly \xA3120 to build, and drew a peak of about 80W (the equivalent of two incandescent bulbs!).`),de.forEach(t),Q=c(e),T=n(e,"P",{});var Oe=h(T);E=n(Oe,"IMG",{src:!0,alt:!0}),Oe.forEach(t),Y=c(e),K=n(e,"P",{});var He=h(K);be=l(He,"When we initially devised the plans for the grid, we had not thought about using a Kinect to make the system interactive. Without the Kinect the grid was relatively simple (albeit time-consuming) to make. The grid was essentially a 2.4m CLS square with a rope mesh reinforced with zip-ties at the intersections. To keep the grid stable when hanging, I made a central platform to hold the power supply and LED driver board. This also was used to mount the Kinect. A note to anyone attempting something like this: measure the size of the doors to your theatre before making the frame! We managed to make the frame 2cm wider than our school doorways, so moving the frame between rooms was frankly a nightmare."),He.forEach(t),R=c(e),P=n(e,"P",{});var ze=h(P);G=n(ze,"IMG",{src:!0,alt:!0}),ze.forEach(t),Z=c(e),f=n(e,"P",{});var j=h(f);ye=l(j,"Lately I have done a lot of playing about with a program called Touchdesigner. It is essentially a visual scripting and manipulation tool. It is often used for projection mapping, but the large variety of input/output operators make it a very flexible tool in visual FX. To get an idea of what it can do, I would highly encourage you to read "),k=n(j,"A",{href:!0,rel:!0});var Fe=h(k);ve=l(Fe,"this article"),Fe.forEach(t),Ie=l(j,` showing how Touchdesigner was used in the making of the film \u2018Gravity\u2019. The really nice thing is that Touchdesigner is free for non-commercial use, with a resolution limit of 1280x1280. A resolution of 6x6 falls well below this threshold! Principally, Touchdesigner offers a much more powerful pixel-mapping engine than most lighting consoles (in our case MagicQ), however the developers have added support for a variety of external inputs, including the Kinect.
Programming an entire theatre show in Touchdesigner is not practical, so we needed some way to merge the two DMX signals. As it happens, the DMX splitters in our venue have 2 inputs that are merged based on HTP, but an alternative to this is to send both outputs to the same address over Artnet. In Touchdesigner I set up a network that takes an input in the form of a black and white image and generates a series of channel values that can be output over DMX. The core pixel-mapping engine is pictured below, and I have attached the Touchdesigner File `),x=n(j,"A",{href:!0});var Qe=h(x);ke=l(Qe,"here"),Qe.forEach(t),_e=l(j," if anyone is interested."),j.forEach(t),ee=c(e),M=n(e,"P",{});var Ye=h(M);D=n(Ye,"IMG",{src:!0,alt:!0}),Ye.forEach(t),te=c(e),p=n(e,"P",{});var g=h(p);Te=l(g,"The raw kinect data needed to be processed heavily before the output started leaving the lovely trails seen in the demonstration above. This processing needs to be done with as little latency as possible, but before considering how to tackle this I had a somewhat more urgent problem. The Kinect is hanging in the centre of our studio, but the control room (along with the desktop PC running touchdesigner) is located about 20m away on a different floor of the building (pictured below). The Kinect V1 is connected by a 480Mbps USB connection, and USB is not designed to be run over such long distances. There are plenty of USB extenders on the market, but only "),X=n(g,"EM",{});var Re=h(X);Ee=l(Re,"one"),Re.forEach(t),Ke=l(g," is known to work with the Kinect V1, and none are known to work with the Kinect V2. Considering the USB extender in question costs \xA3350, I was determined to find an alternative. The solution in the end was rather bodged, but worked reliably for every show: I hung an old laptop from the roof of the theatre near to the Kinect, and ran a demo file from the Kinect SDK on the laptop that simply displayed the depth stream on the screen. I then used OBS (Open Broadcaster Software) to create an NDI stream that I could send over Cat5 to the desktop PC. I then used Newtek\u2019s "),J=n(g,"EM",{});var Ze=h(J);Pe=l(Ze,"Virtual Input"),Ze.forEach(t),Ge=l(g," to create a virtual webcam that could be input into Touchdesigner. This "),N=n(g,"DEL",{});var et=h(N);xe=l(et,"sounds"),et.forEach(t),Me=c(g),O=n(g,"STRONG",{});var tt=h(O);H=n(tt,"EM",{});var ot=h(H);De=l(ot,"is"),ot.forEach(t),tt.forEach(t),Ae=l(g," incredibly inefficient, but I managed to achieve sub 150ms latency, which was acceptable for the show. Note that if the laptop in the roof could run Touchdesigner, I could have sent the data from one PC to another using the software, however the old laptop was not up to the task. In fact, I am working on a more professional solution to streaming Kinect data, which I am hoping to have published by the end of September."),g.forEach(t),oe=c(e),A=n(e,"P",{});var it=h(A);C=n(it,"IMG",{src:!0,alt:!0}),it.forEach(t),ie=c(e),S=n(e,"P",{});var at=h(S);Ce=l(at,`Once I was able to get a depth stream into Touchdesigner, I could begin processing the data to make the trails, along with some other visual effects that could be mixed in during the show. As the Kinect is looking at actors from above, the built-in tracking features don\u2019t really work here. Essentially the processing consisted of multiple stages of feedback and luminance threshold filtering, along with a compensation stage that corrected for the non-linearity in the bulb dimming. It is also worth noting that with theatrical installations such as this, subtlety is key, so we had to find a way of incorporating the elements of interactivity without them overpowering the acting.
This setup was very fun to play with once we got it up and running, and I was personally surprised at how effective pixel-mapped effects could be with only a 6x6 grid. As for the Kinect implementation, while this was a good starting point, I feel I have a lot more work to do before implementing the Kinect in theatre productions becomes hassle-free! Below is a look from below of the grid with a chase running to demonstrate the dimming curve of the bulbs.`),at.forEach(t),ae=c(e),B=n(e,"P",{});var nt=h(B);W=n(nt,"IMG",{src:!0,alt:!0}),nt.forEach(t),ne=c(e),dt(_.$$.fragment,e),se=c(e),L=n(e,"P",{});var st=h(L);Se=l(st,"As for the show itself, in contrast to previous student productions, it was a resounding succes! I would highly reccomend looking up the original play by Duncan Macmillan. While our director modified the play to be performed by an ensemble, it is originally a monologue, performed without any stage lighting or effects at all."),st.forEach(t),re=c(e),b=n(e,"P",{});var ue=h(b);Be=l(ue,"I have written a separate article outlining the Touchdesigner pixel-mapping engine and how to interface with it. That can be found "),q=n(ue,"A",{href:!0});var rt=h(q);We=l(rt,"here"),rt.forEach(t),Le=l(ue,"."),ue.forEach(t),le=c(e),V=n(e,"P",{});var lt=h(V);$=n(lt,"IMG",{src:!0,alt:!0}),lt.forEach(t),this.h()},h(){d(y,"href","https://www.ebay.co.uk/itm/S14-Led-E27-2W-Edison-Filament-Bulb-Lamp-Light-Warm-White-2700K-AC220V-DC12V-3V-/273353419840?var="),d(y,"rel","nofollow"),d(I,"href","https://www.aliexpress.com/item/4000911151027.html"),d(I,"rel","nofollow"),U(E.src,qe="https://cdn.bojit.org/img/posts/Kinect_Interactive_Grid-Light_Test.JPG")||d(E,"src",qe),d(E,"alt","Kinect_Interactive_Grid-Light_Test.JPG"),U(G.src,Ve="https://cdn.bojit.org/img/posts/Kinect_Interactive_Grid-Bulbs.JPG")||d(G,"src",Ve),d(G,"alt","Kinect_Interactive_Grid-Bulbs.JPG"),d(k,"href","https://www.derivative.ca/Events/2014/Gravity/"),d(k,"rel","nofollow"),d(x,"href","https://cdn.bojit.org/files/2019-03-31-Touchdesigner_Image_DMX-Example.toe"),U(D.src,$e="https://cdn.bojit.org/img/posts/Kinect_Interactive_Grid-Touchdesigner.PNG")||d(D,"src",$e),d(D,"alt","Kinect_Interactive_Grid-Touchdesigner.PNG"),U(C.src,je="https://cdn.bojit.org/img/posts/Kinect_Interactive_Grid-Control.JPG")||d(C,"src",je),d(C,"alt","Kinect_Interactive_Grid-Control.JPG"),U(W.src,Ue="https://cdn.bojit.org/img/posts/Kinect_Interactive_Grid-Grid.JPG")||d(W,"src",Ue),d(W,"alt","Kinect_Interactive_Grid-Grid.JPG"),d(q,"href","https://bojit.org/projects/Touchdesigner_Image_DMX"),U($.src,Xe="https://cdn.bojit.org/img/posts/Kinect_Interactive_Grid-Curtain_Call.JPG")||d($,"src",Xe),d($,"alt","Kinect_Interactive_Grid-Curtain_Call.JPG")},m(e,i){s(e,m,i),o(m,ce),o(m,y),o(y,pe),o(m,me),s(e,z,i),ut(v,e,i),s(e,F,i),s(e,w,i),o(w,fe),o(w,I),o(I,ge),o(w,we),s(e,Q,i),s(e,T,i),o(T,E),s(e,Y,i),s(e,K,i),o(K,be),s(e,R,i),s(e,P,i),o(P,G),s(e,Z,i),s(e,f,i),o(f,ye),o(f,k),o(k,ve),o(f,Ie),o(f,x),o(x,ke),o(f,_e),s(e,ee,i),s(e,M,i),o(M,D),s(e,te,i),s(e,p,i),o(p,Te),o(p,X),o(X,Ee),o(p,Ke),o(p,J),o(J,Pe),o(p,Ge),o(p,N),o(N,xe),o(p,Me),o(p,O),o(O,H),o(H,De),o(p,Ae),s(e,oe,i),s(e,A,i),o(A,C),s(e,ie,i),s(e,S,i),o(S,Ce),s(e,ae,i),s(e,B,i),o(B,W),s(e,ne,i),ut(_,e,i),s(e,se,i),s(e,L,i),o(L,Se),s(e,re,i),s(e,b,i),o(b,Be),o(b,q),o(q,We),o(b,Le),s(e,le,i),s(e,V,i),o(V,$),he=!0},p:vt,i(e){he||(ct(v.$$.fragment,e),ct(_.$$.fragment,e),he=!0)},o(e){pt(v.$$.fragment,e),pt(_.$$.fragment,e),he=!1},d(e){e&&t(m),e&&t(z),mt(v,e),e&&t(F),e&&t(w),e&&t(Q),e&&t(T),e&&t(Y),e&&t(K),e&&t(R),e&&t(P),e&&t(Z),e&&t(f),e&&t(ee),e&&t(M),e&&t(te),e&&t(p),e&&t(oe),e&&t(A),e&&t(ie),e&&t(S),e&&t(ae),e&&t(B),e&&t(ne),mt(_,e),e&&t(se),e&&t(L),e&&t(re),e&&t(b),e&&t(le),e&&t(V)}}}const Tt={title:"Kinect Interactive Bulb Grid",date:"10-03-2019",published:!0,tile:{type:"image",image:"/tiles/2019-03-10-Kinect_Interactive_Grid.JPG"}};class Et extends wt{constructor(m){super(),bt(this,m,null,It,yt,{})}}export{Et as default,Tt as metadata};
