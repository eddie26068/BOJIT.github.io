import{S as Fl,i as xl,s as Ul,e as l,c as a,a as r,d as t,U as _,ai as B,b as p,V as zi,f as Rl,g as s,K as o,a0 as zl,E as fs,G as Yl,v as Zl,Y as Kl,t as n,k as u,w as ls,h,m as f,x as as,y as rs,q as ns,o as us,B as hs}from"../../chunks/index-959e8fc0.js";import{_ as Ql}from"../../chunks/preload-helper-60cab3ee.js";import{G as Xl}from"../../chunks/Gallery-7c86ef03.js";import"../../chunks/Link-2422b5d4.js";function $l(w){let m,d,v,E,k,T,g,P,I;return{c(){m=l("div"),d=l("model-viewer"),this.h()},l(b){m=a(b,"DIV",{class:!0});var c=r(m);d=a(c,"MODEL-VIEWER",{src:!0,"disable-zoom":!0,"enable-pan":!0,"camera-controls":!0,"auto-rotate":!0,class:!0}),r(d).forEach(t),c.forEach(t),this.h()},h(){_(d.src,v=w[0]?w[0]:!1)||B(d,"src",v),B(d,"disable-zoom",E=!w[5]||void 0),B(d,"enable-pan",k=w[3]||void 0),B(d,"camera-controls",T=!w[2]||void 0),B(d,"auto-rotate",g=w[2]||void 0),B(d,"class","svelte-1fiqyb5"),p(m,"class","model-container svelte-1fiqyb5"),zi(m,"transparent",w[1]),zi(m,"zoomable",w[5]),Rl(m,"padding-bottom",w[4],!1)},m(b,c){s(b,m,c),o(m,d),w[10](m),P||(I=[zl(m,"mousedown",w[7]),zl(m,"mouseup",w[8])],P=!0)},p(b,[c]){c&1&&!_(d.src,v=b[0]?b[0]:!1)&&B(d,"src",v),c&32&&E!==(E=!b[5]||void 0)&&B(d,"disable-zoom",E),c&8&&k!==(k=b[3]||void 0)&&B(d,"enable-pan",k),c&4&&T!==(T=!b[2]||void 0)&&B(d,"camera-controls",T),c&4&&g!==(g=b[2]||void 0)&&B(d,"auto-rotate",g),c&2&&zi(m,"transparent",b[1]),c&32&&zi(m,"zoomable",b[5]),c&16&&Rl(m,"padding-bottom",b[4],!1)},i:fs,o:fs,d(b){b&&t(m),w[10](null),P=!1,Yl(I)}}}function ea(w,m,d){let{geometry:v=null}=m,{transparent:E=!1}=m,{aspect:k="4:3"}=m,{rotate:T=!1}=m,{pan:g=!0}=m,P="0%",I=!1,b=Date.now(),c;function q(){b=Date.now()}function S(){I===!1?d(5,I=!0):Date.now()-b<200&&d(5,I=!1)}Zl(async()=>{await Ql(()=>import("../../chunks/model-viewer.min-6e319cb0.js"),[]),window.addEventListener("mouseup",function(y){y.target!=c&&y.target.parentNode!=c&&d(5,I=!1)})});function tt(y){Kl[y?"unshift":"push"](()=>{c=y,d(6,c)})}return w.$$set=y=>{"geometry"in y&&d(0,v=y.geometry),"transparent"in y&&d(1,E=y.transparent),"aspect"in y&&d(9,k=y.aspect),"rotate"in y&&d(2,T=y.rotate),"pan"in y&&d(3,g=y.pan)},w.$$.update=()=>{if(w.$$.dirty&512){let y=parseInt(k.split(":")[0])/parseInt(k.split(":")[1]);d(4,P=(100/y).toString().concat("%"))}},[v,E,T,g,P,I,c,q,S,k,tt]}class Wl extends Fl{constructor(m){super(),xl(this,m,ea,$l,Ul,{geometry:0,transparent:1,aspect:9,rotate:2,pan:3})}}function ta(w){let m,d,v,E,k,T,g,P,I,b,c,q,S,tt,y,it,ot,Wi,Fi,st,lt,xi,vt,Y,Z,ps,It,kt,Tt,K,Ui,Pt,Q,Yi,Et,L,Bt,X,Zi,Gt,G,at,rt,Ki,Qi,nt,ut,Xi,$i,ht,$,eo,ft,to,Jt,ee,io,jt,te,ie,ms,Ot,Vt,Mt,oe,oo,At,se,so,Dt,le,ae,ds,Ht,j,lo,pt,ao,ro,Ct,O,no,re,uo,ho,qt,ne,ue,cs,St,V,fo,he,po,mo,Lt,fe,pe,ws,Nt,me,co,Rt,de,ce,bs,zt,Wt,Ft,we,wo,xt,M,bo,mt,yo,go,Ut,be,ye,ys,Yt,A,_o,dt,vo,Io,Zt,ge,ko,Kt,_e,ve,gs,Qt,Ie,To,Xt,ke,Te,_s,$t,ei,ti,Pe,Po,ii,D,Eo,N,Bo,Go,oi,Ee,Be,vs,si,Ge,Jo,li,Je,je,Is,ai,ri,ni,Oe,jo,ui,H,Oo,R,Vo,Mo,hi,Ve,Ao,fi,Me,Ae,ks,pi,De,Do,mi,z,di,He,Ho,ci,Ce,Co,wi,J,ct,W,qo,wt,So,Lo,No,bt,F,Ro,yt,zo,Wo,Fo,gt,x,xo,_t,Uo,Yo,bi,qe,Zo,yi,Se,Ko,gi,Le,Qo,_i,Ne,Xo,vi,Re,ze,Ts,Ii,We,$o,ki,Fe,xe,Ps,Ti,Ue,es,Pi,Ei,Bi,Ye,ts,Gi,Ze,is,Ji,Ke,Qe,Es,ji,Xe,os,Oi,U,Vi;return L=new Wl({props:{geometry:"https://cdn.bojit.org/files/glb/BOJIT_V3.glb",aspect:"20:9"}}),z=new Wl({props:{geometry:"https://cdn.bojit.org/files/glb/Tremolo_Bridge.glb",aspect:"20:9"}}),U=new Xl({props:{tiles:[...w[0]]}}),{c(){m=l("p"),d=n("A few years back I made a "),v=l("a"),E=n("fully-homemade electric guitar"),k=n(". This has served me well for a long time, however there were a few bug bears I had with it:"),T=u(),g=l("ul"),P=l("li"),I=l("p"),b=n("The steel neck reinforcements make it very neck-heavy. However, I do like the very minimal headstock design, so I needed to find a more suitable construction method."),c=u(),q=l("li"),S=l("p"),tt=n("The removable back panels and layered construction make the edges of the guitar quite sharp."),y=u(),it=l("li"),ot=l("p"),Wi=n("The steel reinforcement strips make fitting standard pickups impossible, and make the neck profile impractically chunky."),Fi=u(),st=l("li"),lt=l("p"),xi=n("It is very heavy!"),vt=u(),Y=l("p"),Z=l("img"),It=u(),kt=l("hr"),Tt=u(),K=l("p"),Ui=n("With all of these issues in mind, I decided it was time for the next build! The global pandemic may have also persuaded me to start a long woodworking project!"),Pt=u(),Q=l("p"),Yi=n("I rebuilt the old CAD from the GCSE project with a new refreshed design. If you have Javascript enabled, you can explore the CAD model below."),Et=u(),ls(L.$$.fragment),Bt=u(),X=l("p"),Zi=n("A few key features of the new build include:"),Gt=u(),G=l("ul"),at=l("li"),rt=l("p"),Ki=n("Ultra-thin body and lightweight design."),Qi=u(),nt=l("li"),ut=l("p"),Xi=n("Standard humbucker pickup mounts without affecting the structural integrity of the neck joint."),$i=u(),ht=l("li"),$=l("p"),eo=n("A prototype hidden tremolo & B-bender system "),ft=l("em"),to=n("(more on that later\u2026)"),Jt=u(),ee=l("p"),io=n("I was very fortunate to get given a large slab of mahogany from a friend that I could use for the majority of the construction. In an homage to the old guitar, I found some spalted beech to make a bookmatched top from. With the design mostly finalised, I started on the build!"),jt=u(),te=l("p"),ie=l("img"),Ot=u(),Vt=l("hr"),Mt=u(),oe=l("h2"),oo=n("Templates and Construction"),At=u(),se=l("p"),so=n("I don\u2019t trust myself enough to make a guitar freehand yet, so I made a fairly comprehensive set of templates for this build. These templates were made by printing off 1:1 templates, and carefully bandsawing/sanding to final size. For some of the small cutouts, I\u2019d sized the templates based on a set of guide bushings, as some of the internal radii are too small to use a bearing cutter on."),Dt=u(),le=l("p"),ae=l("img"),Ht=u(),j=l("p"),lo=n("One key tip is to check the dimensions of your printouts "),pt=l("em"),ao=n("before"),ro=n(" you make your templates. As it happens, many printers will do some slight scaling to your documents when printing, so you might need to tweak your printouts to be accurate!"),Ct=u(),O=l("p"),no=n("This guitar build leaned heavily on my "),re=l("a"),uo=n("router table build"),ho=n(". Not only did I use it for all the template work, I also used it for squaring off all of the stock, making the neck laminations, and even bookmatching!"),qt=u(),ne=l("p"),ue=l("img"),St=u(),V=l("p"),fo=n("My last guitar build had a drop-top arm bevel on, and I kind of like how it looks. However, without very careful bending, you can see a cutout on the side where the bend relief was cut. To hide this on the new build, I decided to install wrap-around binding. This gave the extra challenge of routing a binding channel around the non-flat surface of the guitar body. This is where the "),he=l("a"),po=n("surface follower jig"),mo=n(" comes to the rescue! The result is shown below."),Lt=u(),fe=l("p"),pe=l("img"),Nt=u(),me=l("p"),co=n("I can\u2019t emphasise how useful a router table is for making professional looking things! For the scratchplate I decided to use an old vinyl record, and from past experience, trying to cut these with a saw tends to shatter the vinyl. No such issue for the router table!"),Rt=u(),de=l("p"),ce=l("img"),zt=u(),Wt=l("hr"),Ft=u(),we=l("p"),wo=n("The most unique feature of this guitar is the neck construction. To get the skeleton headstock and a super-thin neck joint, I needed to add non-wood reinforcement to the neck (on top of the standard truss-rod). In the last build, I routed channels and added steel inserts. However, this was plagued with problems, so I was determined to come up with a better design."),xt=u(),M=l("p"),bo=n("The approach I settled on was to used "),mt=l("em"),yo=n("pultruded"),go=n(" carbon fibre. It\u2019s lightweight bar section which is often used in hobby drones and UAVs. To create the strong curves, I laminated strips of carbon fibre between mahogany blanks, then set all the joints in epoxy! This was possible the most stressful part of the build, as I had to get the entire glue-up done in the 20 minutes I had before the epoxy cured!"),Ut=u(),be=l("p"),ye=l("img"),Yt=u(),A=l("p"),_o=n("This approach turned out to be incredibly stiff against the force exerted by the strings, however the one oversight I failed to spot was the "),dt=l("em"),vo=n("torsion"),Io=n(" caused by the offset headstock design. This tried to pull the laminations perpendicular to the glue joint, which caused tuning instability issues. I fixed this by adding a small metal plate across the back of the headstock."),Zt=u(),ge=l("p"),ko=n("Below is a picture of the new build next to my old guitar. The design language is definitely the same, but I think the new one looks much sleeker!"),Kt=u(),_e=l("p"),ve=l("img"),Qt=u(),Ie=l("p"),To=n("I wanted to try a non-natural wood finish for this build, however I\u2019ve had bad experience with spray-painting in the past, so wanted to try a dye-based finish, then finish off with Tung oil. In the end I just used standard fountain pen ink, and the results were actually surprisingly good. You can get a very good finish considering how cheap the dye is. The one thing to watch out for is superglue stains\u2026 while they are invisible in plain wood, they will wreck your stain finish."),Xt=u(),ke=l("p"),Te=l("img"),$t=u(),ei=l("hr"),ti=u(),Pe=l("h2"),Po=n("Wire Inlay"),ii=u(),D=l("p"),Eo=n("I wanted to try something fun for the inlays, but I do not trust myself enough with a dremel to try any solid inlays just yet. instead I opted for a technique inspired by "),N=l("a"),Bo=n("this video"),Go=n(", using copper wire and a scalpel. It seemed slightly lower risk, and it\u2019s quite subtle, so you don\u2019t notice any imperfections from a distance!"),oi=u(),Ee=l("p"),Be=l("img"),si=u(),Ge=l("p"),Jo=n("The result came out quite nice, however if I were to do it again, I would find some proper box-section wire. I just used circular wire that I had on hand, however you have to be very careful about how far you inlay it, in order to keep the lines constant width when you level the fretboard."),li=u(),Je=l("p"),je=l("img"),ai=u(),ri=l("hr"),ni=u(),Oe=l("h2"),jo=n("Custom Bridge Design"),ui=u(),H=l("p"),Oo=n("When designing this guitar, I was listening to a lot of country and western music, and I have always had a love for pedal-steel music. There is a neat tool called a "),R=l("a"),Vo=n("\u2018B-Bender\u2019"),Mo=n(" built into some guitars which allows you to change the pitch of your B-string by pulling the strap button."),hi=u(),Ve=l("p"),Ao=n("I wanted to install a B-Bender & tremolo bar system for my guitar, however my main gripe with commercial B-Benders and tremolo systems is that they are both massive and ugly. This bridge design aimed to fix that by having all of the workings concealed under the wooden top, with minimal cutouts on the rear of the guitar."),fi=u(),Me=l("p"),Ae=l("img"),pi=u(),De=l("p"),Do=n("The CAD for the bridge is embedded below:"),mi=u(),ls(z.$$.fragment),di=u(),He=l("p"),Ho=n("I should caveat here that this design doesn\u2019t actually work on my guitar, as using it causes tuning stability issues. However, entertain me by allowing me to walk through the design\u2026"),ci=u(),Ce=l("p"),Co=n("The system is designed to have the following functions:"),wi=u(),J=l("ul"),ct=l("li"),W=l("p"),qo=n("On pulling the strap, the "),wt=l("em"),So=n("B-string"),Lo=n(" should raise 1 tone."),No=u(),bt=l("li"),F=l("p"),Ro=n("On lowering the tremolo bar, "),yt=l("em"),zo=n("all"),Wo=n(" the strings should lower in tone."),Fo=u(),gt=l("li"),x=l("p"),xo=n("On raising the tremolo bar, only the "),_t=l("em"),Uo=n("G-string"),Yo=n(" should raise 1 tone."),bi=u(),qe=l("p"),Zo=n("This comes with a few challenges. The first one is that the tremolo bar should have not be \u2018floating\u2019. I rarely need to bend the strings up while playing, and this configuration is much more stable for tuning. However the string block can\u2019t have a hard end-stop, else you wouldn\u2019t be able to bend the G-string up."),yi=u(),Se=l("p"),Ko=n("Moreover, you can\u2019t permanently tie the B-string to the strap pin, as using the tremolo bar wouldn\u2019t lower the B-string without moving your strap pin. So some means of disengaging the strap pin linkage is needed."),gi=u(),Le=l("p"),Qo=n("The result of these constraints was a neat system of tumblers running on bronze bushings that would allow the tremolo bar to move the strings somewhat independent. Have a look at the CAD above if you are curious as to how this works\u2026"),_i=u(),Ne=l("p"),Xo=n("I don\u2019t have a mill or lathe at home, so the first prototype of this system was made using sheet metal and a variety of 3D printed jigs. However, a friend nicely helped me turn and ream the nylon bushings to size."),vi=u(),Re=l("p"),ze=l("img"),Ii=u(),We=l("p"),$o=n("This block mounts and controls the strings, however a separate assembly was needed to bend the strap pin. Most B-benders have a solid linkage an a large cutout on the back of the guitar, however I wanted to try and replace this with a Bowden cable linkage. The unit that bends this is shown below. Note how the strap pin is in a slot with two ball detents. This allows me to \u2018lock off\u2019 the B-bender when not in use, then \u2018pop\u2019 it out to use it."),ki=u(),Fe=l("p"),xe=l("img"),Ti=u(),Ue=l("p"),es=n("This system does work nicely in theory, however as always, the problems start coming in the integration. It turns out I hadn\u2019t left quite enough space for the claw springs, so the strings wouldn\u2019t always return to pitch. Moreover, the nylon parts would develop a small amount of slop between the pins after time. Really I need to re-make all of the tumblers out of steel."),Pi=u(),Ei=l("hr"),Bi=u(),Ye=l("h2"),ts=n("Gallery"),Gi=u(),Ze=l("p"),is=n("This guitar was great fun to build, and probably the first guitar I\u2019ve owned where I don\u2019t have any major gripes with it (other than the lack of a working B-Bender!). Suffice to say I think it will be my last guitar build for quite a while!"),Ji=u(),Ke=l("p"),Qe=l("img"),ji=u(),Xe=l("p"),os=n("I\u2019ll leave you with a few more photos of the build that I didn\u2019t get a chance to talk about!"),Oi=u(),ls(U.$$.fragment),this.h()},l(e){m=a(e,"P",{});var i=r(m);d=h(i,"A few years back I made a "),v=a(i,"A",{href:!0});var Bs=r(v);E=h(Bs,"fully-homemade electric guitar"),Bs.forEach(t),k=h(i,". This has served me well for a long time, however there were a few bug bears I had with it:"),i.forEach(t),T=f(e),g=a(e,"UL",{});var C=r(g);P=a(C,"LI",{});var Gs=r(P);I=a(Gs,"P",{});var Js=r(I);b=h(Js,"The steel neck reinforcements make it very neck-heavy. However, I do like the very minimal headstock design, so I needed to find a more suitable construction method."),Js.forEach(t),Gs.forEach(t),c=f(C),q=a(C,"LI",{});var js=r(q);S=a(js,"P",{});var Os=r(S);tt=h(Os,"The removable back panels and layered construction make the edges of the guitar quite sharp."),Os.forEach(t),js.forEach(t),y=f(C),it=a(C,"LI",{});var Vs=r(it);ot=a(Vs,"P",{});var Ms=r(ot);Wi=h(Ms,"The steel reinforcement strips make fitting standard pickups impossible, and make the neck profile impractically chunky."),Ms.forEach(t),Vs.forEach(t),Fi=f(C),st=a(C,"LI",{});var As=r(st);lt=a(As,"P",{});var Ds=r(lt);xi=h(Ds,"It is very heavy!"),Ds.forEach(t),As.forEach(t),C.forEach(t),vt=f(e),Y=a(e,"P",{});var Hs=r(Y);Z=a(Hs,"IMG",{src:!0,alt:!0}),Hs.forEach(t),It=f(e),kt=a(e,"HR",{}),Tt=f(e),K=a(e,"P",{});var Cs=r(K);Ui=h(Cs,"With all of these issues in mind, I decided it was time for the next build! The global pandemic may have also persuaded me to start a long woodworking project!"),Cs.forEach(t),Pt=f(e),Q=a(e,"P",{});var qs=r(Q);Yi=h(qs,"I rebuilt the old CAD from the GCSE project with a new refreshed design. If you have Javascript enabled, you can explore the CAD model below."),qs.forEach(t),Et=f(e),as(L.$$.fragment,e),Bt=f(e),X=a(e,"P",{});var Ss=r(X);Zi=h(Ss,"A few key features of the new build include:"),Ss.forEach(t),Gt=f(e),G=a(e,"UL",{});var $e=r(G);at=a($e,"LI",{});var Ls=r(at);rt=a(Ls,"P",{});var Ns=r(rt);Ki=h(Ns,"Ultra-thin body and lightweight design."),Ns.forEach(t),Ls.forEach(t),Qi=f($e),nt=a($e,"LI",{});var Rs=r(nt);ut=a(Rs,"P",{});var zs=r(ut);Xi=h(zs,"Standard humbucker pickup mounts without affecting the structural integrity of the neck joint."),zs.forEach(t),Rs.forEach(t),$i=f($e),ht=a($e,"LI",{});var Ws=r(ht);$=a(Ws,"P",{});var ss=r($);eo=h(ss,"A prototype hidden tremolo & B-bender system "),ft=a(ss,"EM",{});var Fs=r(ft);to=h(Fs,"(more on that later\u2026)"),Fs.forEach(t),ss.forEach(t),Ws.forEach(t),$e.forEach(t),Jt=f(e),ee=a(e,"P",{});var xs=r(ee);io=h(xs,"I was very fortunate to get given a large slab of mahogany from a friend that I could use for the majority of the construction. In an homage to the old guitar, I found some spalted beech to make a bookmatched top from. With the design mostly finalised, I started on the build!"),xs.forEach(t),jt=f(e),te=a(e,"P",{});var Us=r(te);ie=a(Us,"IMG",{src:!0,alt:!0}),Us.forEach(t),Ot=f(e),Vt=a(e,"HR",{}),Mt=f(e),oe=a(e,"H2",{});var Ys=r(oe);oo=h(Ys,"Templates and Construction"),Ys.forEach(t),At=f(e),se=a(e,"P",{});var Zs=r(se);so=h(Zs,"I don\u2019t trust myself enough to make a guitar freehand yet, so I made a fairly comprehensive set of templates for this build. These templates were made by printing off 1:1 templates, and carefully bandsawing/sanding to final size. For some of the small cutouts, I\u2019d sized the templates based on a set of guide bushings, as some of the internal radii are too small to use a bearing cutter on."),Zs.forEach(t),Dt=f(e),le=a(e,"P",{});var Ks=r(le);ae=a(Ks,"IMG",{src:!0,alt:!0}),Ks.forEach(t),Ht=f(e),j=a(e,"P",{});var Mi=r(j);lo=h(Mi,"One key tip is to check the dimensions of your printouts "),pt=a(Mi,"EM",{});var Qs=r(pt);ao=h(Qs,"before"),Qs.forEach(t),ro=h(Mi," you make your templates. As it happens, many printers will do some slight scaling to your documents when printing, so you might need to tweak your printouts to be accurate!"),Mi.forEach(t),Ct=f(e),O=a(e,"P",{});var Ai=r(O);no=h(Ai,"This guitar build leaned heavily on my "),re=a(Ai,"A",{href:!0});var Xs=r(re);uo=h(Xs,"router table build"),Xs.forEach(t),ho=h(Ai,". Not only did I use it for all the template work, I also used it for squaring off all of the stock, making the neck laminations, and even bookmatching!"),Ai.forEach(t),qt=f(e),ne=a(e,"P",{});var $s=r(ne);ue=a($s,"IMG",{src:!0,alt:!0}),$s.forEach(t),St=f(e),V=a(e,"P",{});var Di=r(V);fo=h(Di,"My last guitar build had a drop-top arm bevel on, and I kind of like how it looks. However, without very careful bending, you can see a cutout on the side where the bend relief was cut. To hide this on the new build, I decided to install wrap-around binding. This gave the extra challenge of routing a binding channel around the non-flat surface of the guitar body. This is where the "),he=a(Di,"A",{href:!0});var el=r(he);po=h(el,"surface follower jig"),el.forEach(t),mo=h(Di," comes to the rescue! The result is shown below."),Di.forEach(t),Lt=f(e),fe=a(e,"P",{});var tl=r(fe);pe=a(tl,"IMG",{src:!0,alt:!0}),tl.forEach(t),Nt=f(e),me=a(e,"P",{});var il=r(me);co=h(il,"I can\u2019t emphasise how useful a router table is for making professional looking things! For the scratchplate I decided to use an old vinyl record, and from past experience, trying to cut these with a saw tends to shatter the vinyl. No such issue for the router table!"),il.forEach(t),Rt=f(e),de=a(e,"P",{});var ol=r(de);ce=a(ol,"IMG",{src:!0,alt:!0}),ol.forEach(t),zt=f(e),Wt=a(e,"HR",{}),Ft=f(e),we=a(e,"P",{});var sl=r(we);wo=h(sl,"The most unique feature of this guitar is the neck construction. To get the skeleton headstock and a super-thin neck joint, I needed to add non-wood reinforcement to the neck (on top of the standard truss-rod). In the last build, I routed channels and added steel inserts. However, this was plagued with problems, so I was determined to come up with a better design."),sl.forEach(t),xt=f(e),M=a(e,"P",{});var Hi=r(M);bo=h(Hi,"The approach I settled on was to used "),mt=a(Hi,"EM",{});var ll=r(mt);yo=h(ll,"pultruded"),ll.forEach(t),go=h(Hi," carbon fibre. It\u2019s lightweight bar section which is often used in hobby drones and UAVs. To create the strong curves, I laminated strips of carbon fibre between mahogany blanks, then set all the joints in epoxy! This was possible the most stressful part of the build, as I had to get the entire glue-up done in the 20 minutes I had before the epoxy cured!"),Hi.forEach(t),Ut=f(e),be=a(e,"P",{});var al=r(be);ye=a(al,"IMG",{src:!0,alt:!0}),al.forEach(t),Yt=f(e),A=a(e,"P",{});var Ci=r(A);_o=h(Ci,"This approach turned out to be incredibly stiff against the force exerted by the strings, however the one oversight I failed to spot was the "),dt=a(Ci,"EM",{});var rl=r(dt);vo=h(rl,"torsion"),rl.forEach(t),Io=h(Ci," caused by the offset headstock design. This tried to pull the laminations perpendicular to the glue joint, which caused tuning instability issues. I fixed this by adding a small metal plate across the back of the headstock."),Ci.forEach(t),Zt=f(e),ge=a(e,"P",{});var nl=r(ge);ko=h(nl,"Below is a picture of the new build next to my old guitar. The design language is definitely the same, but I think the new one looks much sleeker!"),nl.forEach(t),Kt=f(e),_e=a(e,"P",{});var ul=r(_e);ve=a(ul,"IMG",{src:!0,alt:!0}),ul.forEach(t),Qt=f(e),Ie=a(e,"P",{});var hl=r(Ie);To=h(hl,"I wanted to try a non-natural wood finish for this build, however I\u2019ve had bad experience with spray-painting in the past, so wanted to try a dye-based finish, then finish off with Tung oil. In the end I just used standard fountain pen ink, and the results were actually surprisingly good. You can get a very good finish considering how cheap the dye is. The one thing to watch out for is superglue stains\u2026 while they are invisible in plain wood, they will wreck your stain finish."),hl.forEach(t),Xt=f(e),ke=a(e,"P",{});var fl=r(ke);Te=a(fl,"IMG",{src:!0,alt:!0}),fl.forEach(t),$t=f(e),ei=a(e,"HR",{}),ti=f(e),Pe=a(e,"H2",{});var pl=r(Pe);Po=h(pl,"Wire Inlay"),pl.forEach(t),ii=f(e),D=a(e,"P",{});var qi=r(D);Eo=h(qi,"I wanted to try something fun for the inlays, but I do not trust myself enough with a dremel to try any solid inlays just yet. instead I opted for a technique inspired by "),N=a(qi,"A",{href:!0,rel:!0});var ml=r(N);Bo=h(ml,"this video"),ml.forEach(t),Go=h(qi,", using copper wire and a scalpel. It seemed slightly lower risk, and it\u2019s quite subtle, so you don\u2019t notice any imperfections from a distance!"),qi.forEach(t),oi=f(e),Ee=a(e,"P",{});var dl=r(Ee);Be=a(dl,"IMG",{src:!0,alt:!0}),dl.forEach(t),si=f(e),Ge=a(e,"P",{});var cl=r(Ge);Jo=h(cl,"The result came out quite nice, however if I were to do it again, I would find some proper box-section wire. I just used circular wire that I had on hand, however you have to be very careful about how far you inlay it, in order to keep the lines constant width when you level the fretboard."),cl.forEach(t),li=f(e),Je=a(e,"P",{});var wl=r(Je);je=a(wl,"IMG",{src:!0,alt:!0}),wl.forEach(t),ai=f(e),ri=a(e,"HR",{}),ni=f(e),Oe=a(e,"H2",{});var bl=r(Oe);jo=h(bl,"Custom Bridge Design"),bl.forEach(t),ui=f(e),H=a(e,"P",{});var Si=r(H);Oo=h(Si,"When designing this guitar, I was listening to a lot of country and western music, and I have always had a love for pedal-steel music. There is a neat tool called a "),R=a(Si,"A",{href:!0,rel:!0});var yl=r(R);Vo=h(yl,"\u2018B-Bender\u2019"),yl.forEach(t),Mo=h(Si," built into some guitars which allows you to change the pitch of your B-string by pulling the strap button."),Si.forEach(t),hi=f(e),Ve=a(e,"P",{});var gl=r(Ve);Ao=h(gl,"I wanted to install a B-Bender & tremolo bar system for my guitar, however my main gripe with commercial B-Benders and tremolo systems is that they are both massive and ugly. This bridge design aimed to fix that by having all of the workings concealed under the wooden top, with minimal cutouts on the rear of the guitar."),gl.forEach(t),fi=f(e),Me=a(e,"P",{});var _l=r(Me);Ae=a(_l,"IMG",{src:!0,alt:!0}),_l.forEach(t),pi=f(e),De=a(e,"P",{});var vl=r(De);Do=h(vl,"The CAD for the bridge is embedded below:"),vl.forEach(t),mi=f(e),as(z.$$.fragment,e),di=f(e),He=a(e,"P",{});var Il=r(He);Ho=h(Il,"I should caveat here that this design doesn\u2019t actually work on my guitar, as using it causes tuning stability issues. However, entertain me by allowing me to walk through the design\u2026"),Il.forEach(t),ci=f(e),Ce=a(e,"P",{});var kl=r(Ce);Co=h(kl,"The system is designed to have the following functions:"),kl.forEach(t),wi=f(e),J=a(e,"UL",{});var et=r(J);ct=a(et,"LI",{});var Tl=r(ct);W=a(Tl,"P",{});var Li=r(W);qo=h(Li,"On pulling the strap, the "),wt=a(Li,"EM",{});var Pl=r(wt);So=h(Pl,"B-string"),Pl.forEach(t),Lo=h(Li," should raise 1 tone."),Li.forEach(t),Tl.forEach(t),No=f(et),bt=a(et,"LI",{});var El=r(bt);F=a(El,"P",{});var Ni=r(F);Ro=h(Ni,"On lowering the tremolo bar, "),yt=a(Ni,"EM",{});var Bl=r(yt);zo=h(Bl,"all"),Bl.forEach(t),Wo=h(Ni," the strings should lower in tone."),Ni.forEach(t),El.forEach(t),Fo=f(et),gt=a(et,"LI",{});var Gl=r(gt);x=a(Gl,"P",{});var Ri=r(x);xo=h(Ri,"On raising the tremolo bar, only the "),_t=a(Ri,"EM",{});var Jl=r(_t);Uo=h(Jl,"G-string"),Jl.forEach(t),Yo=h(Ri," should raise 1 tone."),Ri.forEach(t),Gl.forEach(t),et.forEach(t),bi=f(e),qe=a(e,"P",{});var jl=r(qe);Zo=h(jl,"This comes with a few challenges. The first one is that the tremolo bar should have not be \u2018floating\u2019. I rarely need to bend the strings up while playing, and this configuration is much more stable for tuning. However the string block can\u2019t have a hard end-stop, else you wouldn\u2019t be able to bend the G-string up."),jl.forEach(t),yi=f(e),Se=a(e,"P",{});var Ol=r(Se);Ko=h(Ol,"Moreover, you can\u2019t permanently tie the B-string to the strap pin, as using the tremolo bar wouldn\u2019t lower the B-string without moving your strap pin. So some means of disengaging the strap pin linkage is needed."),Ol.forEach(t),gi=f(e),Le=a(e,"P",{});var Vl=r(Le);Qo=h(Vl,"The result of these constraints was a neat system of tumblers running on bronze bushings that would allow the tremolo bar to move the strings somewhat independent. Have a look at the CAD above if you are curious as to how this works\u2026"),Vl.forEach(t),_i=f(e),Ne=a(e,"P",{});var Ml=r(Ne);Xo=h(Ml,"I don\u2019t have a mill or lathe at home, so the first prototype of this system was made using sheet metal and a variety of 3D printed jigs. However, a friend nicely helped me turn and ream the nylon bushings to size."),Ml.forEach(t),vi=f(e),Re=a(e,"P",{});var Al=r(Re);ze=a(Al,"IMG",{src:!0,alt:!0}),Al.forEach(t),Ii=f(e),We=a(e,"P",{});var Dl=r(We);$o=h(Dl,"This block mounts and controls the strings, however a separate assembly was needed to bend the strap pin. Most B-benders have a solid linkage an a large cutout on the back of the guitar, however I wanted to try and replace this with a Bowden cable linkage. The unit that bends this is shown below. Note how the strap pin is in a slot with two ball detents. This allows me to \u2018lock off\u2019 the B-bender when not in use, then \u2018pop\u2019 it out to use it."),Dl.forEach(t),ki=f(e),Fe=a(e,"P",{});var Hl=r(Fe);xe=a(Hl,"IMG",{src:!0,alt:!0}),Hl.forEach(t),Ti=f(e),Ue=a(e,"P",{});var Cl=r(Ue);es=h(Cl,"This system does work nicely in theory, however as always, the problems start coming in the integration. It turns out I hadn\u2019t left quite enough space for the claw springs, so the strings wouldn\u2019t always return to pitch. Moreover, the nylon parts would develop a small amount of slop between the pins after time. Really I need to re-make all of the tumblers out of steel."),Cl.forEach(t),Pi=f(e),Ei=a(e,"HR",{}),Bi=f(e),Ye=a(e,"H2",{});var ql=r(Ye);ts=h(ql,"Gallery"),ql.forEach(t),Gi=f(e),Ze=a(e,"P",{});var Sl=r(Ze);is=h(Sl,"This guitar was great fun to build, and probably the first guitar I\u2019ve owned where I don\u2019t have any major gripes with it (other than the lack of a working B-Bender!). Suffice to say I think it will be my last guitar build for quite a while!"),Sl.forEach(t),Ji=f(e),Ke=a(e,"P",{});var Ll=r(Ke);Qe=a(Ll,"IMG",{src:!0,alt:!0}),Ll.forEach(t),ji=f(e),Xe=a(e,"P",{});var Nl=r(Xe);os=h(Nl,"I\u2019ll leave you with a few more photos of the build that I didn\u2019t get a chance to talk about!"),Nl.forEach(t),Oi=f(e),as(U.$$.fragment,e),this.h()},h(){p(v,"href","/projects/DIY_Guitar"),_(Z.src,ps="https://cdn.bojit.org/img/posts/DIY_Guitar-Pickup.JPG")||p(Z,"src",ps),p(Z,"alt","DIY_Guitar-Pickup.JPG"),_(ie.src,ms="https://cdn.bojit.org/img/posts/BOJIT_V3-CAD_Model.PNG")||p(ie,"src",ms),p(ie,"alt","BOJIT_V3-CAD_Model.PNG"),_(ae.src,ds="https://cdn.bojit.org/img/posts/BOJIT_V3-Templates.JPG")||p(ae,"src",ds),p(ae,"alt","BOJIT_V3-Templates.JPG"),p(re,"href","/projects/Router_Table"),_(ue.src,cs="https://cdn.bojit.org/img/posts/BOJIT_V3-First_Routing.JPG")||p(ue,"src",cs),p(ue,"alt","BOJIT_V3-First_Routing.JPG"),p(he,"href","/projects/Router_Table#follower-jig"),_(pe.src,ws="https://cdn.bojit.org/img/posts/BOJIT_V3-Binding_Channel.JPG")||p(pe,"src",ws),p(pe,"alt","BOJIT_V3-Binding_Channel.JPG"),_(ce.src,bs="https://cdn.bojit.org/img/posts/BOJIT_V3-Scratchplate.JPG")||p(ce,"src",bs),p(ce,"alt","BOJIT_V3-Scratchplate.JPG"),_(ye.src,ys="https://cdn.bojit.org/img/posts/BOJIT_V3-Neck_Laminations.JPG")||p(ye,"src",ys),p(ye,"alt","BOJIT_V3-Neck_Laminations.JPG"),_(ve.src,gs="https://cdn.bojit.org/img/posts/BOJIT_V3-Side_By_Side.JPG")||p(ve,"src",gs),p(ve,"alt","BOJIT_V3-Side_By_Side.JPG"),_(Te.src,_s="https://cdn.bojit.org/img/posts/BOJIT_V3-Stain.JPG")||p(Te,"src",_s),p(Te,"alt","BOJIT_V3-Stain.JPG"),p(N,"href","https://www.youtube.com/watch?v=arWUZ4Gdcvs"),p(N,"rel","nofollow"),_(Be.src,vs="https://cdn.bojit.org/img/posts/BOJIT_V3-Wire_Inlay.JPG")||p(Be,"src",vs),p(Be,"alt","BOJIT_V3-Wire_Inlay.JPG"),_(je.src,Is="https://cdn.bojit.org/img/posts/BOJIT_V3-Wire_Inlay_2.JPG")||p(je,"src",Is),p(je,"alt","BOJIT_V3-Wire_Inlay_2.JPG"),p(R,"href","https://www.youtube.com/watch?v=Z8RPjjpbZhA"),p(R,"rel","nofollow"),_(Ae.src,ks="https://cdn.bojit.org/img/posts/BOJIT_V3-CAD_Tremolo.PNG")||p(Ae,"src",ks),p(Ae,"alt","BOJIT_V3-CAD_Tremolo.PNG"),_(ze.src,Ts="https://cdn.bojit.org/img/posts/BOJIT_V3-Bridge.JPG")||p(ze,"src",Ts),p(ze,"alt","BOJIT_V3-Bridge.JPG"),_(xe.src,Ps="https://cdn.bojit.org/img/posts/BOJIT_V3-Bender.JPG")||p(xe,"src",Ps),p(xe,"alt","BOJIT_V3-Bender.JPG"),_(Qe.src,Es="https://cdn.bojit.org/img/posts/BOJIT_V3-Final.JPG")||p(Qe,"src",Es),p(Qe,"alt","BOJIT_V3-Final.JPG")},m(e,i){s(e,m,i),o(m,d),o(m,v),o(v,E),o(m,k),s(e,T,i),s(e,g,i),o(g,P),o(P,I),o(I,b),o(g,c),o(g,q),o(q,S),o(S,tt),o(g,y),o(g,it),o(it,ot),o(ot,Wi),o(g,Fi),o(g,st),o(st,lt),o(lt,xi),s(e,vt,i),s(e,Y,i),o(Y,Z),s(e,It,i),s(e,kt,i),s(e,Tt,i),s(e,K,i),o(K,Ui),s(e,Pt,i),s(e,Q,i),o(Q,Yi),s(e,Et,i),rs(L,e,i),s(e,Bt,i),s(e,X,i),o(X,Zi),s(e,Gt,i),s(e,G,i),o(G,at),o(at,rt),o(rt,Ki),o(G,Qi),o(G,nt),o(nt,ut),o(ut,Xi),o(G,$i),o(G,ht),o(ht,$),o($,eo),o($,ft),o(ft,to),s(e,Jt,i),s(e,ee,i),o(ee,io),s(e,jt,i),s(e,te,i),o(te,ie),s(e,Ot,i),s(e,Vt,i),s(e,Mt,i),s(e,oe,i),o(oe,oo),s(e,At,i),s(e,se,i),o(se,so),s(e,Dt,i),s(e,le,i),o(le,ae),s(e,Ht,i),s(e,j,i),o(j,lo),o(j,pt),o(pt,ao),o(j,ro),s(e,Ct,i),s(e,O,i),o(O,no),o(O,re),o(re,uo),o(O,ho),s(e,qt,i),s(e,ne,i),o(ne,ue),s(e,St,i),s(e,V,i),o(V,fo),o(V,he),o(he,po),o(V,mo),s(e,Lt,i),s(e,fe,i),o(fe,pe),s(e,Nt,i),s(e,me,i),o(me,co),s(e,Rt,i),s(e,de,i),o(de,ce),s(e,zt,i),s(e,Wt,i),s(e,Ft,i),s(e,we,i),o(we,wo),s(e,xt,i),s(e,M,i),o(M,bo),o(M,mt),o(mt,yo),o(M,go),s(e,Ut,i),s(e,be,i),o(be,ye),s(e,Yt,i),s(e,A,i),o(A,_o),o(A,dt),o(dt,vo),o(A,Io),s(e,Zt,i),s(e,ge,i),o(ge,ko),s(e,Kt,i),s(e,_e,i),o(_e,ve),s(e,Qt,i),s(e,Ie,i),o(Ie,To),s(e,Xt,i),s(e,ke,i),o(ke,Te),s(e,$t,i),s(e,ei,i),s(e,ti,i),s(e,Pe,i),o(Pe,Po),s(e,ii,i),s(e,D,i),o(D,Eo),o(D,N),o(N,Bo),o(D,Go),s(e,oi,i),s(e,Ee,i),o(Ee,Be),s(e,si,i),s(e,Ge,i),o(Ge,Jo),s(e,li,i),s(e,Je,i),o(Je,je),s(e,ai,i),s(e,ri,i),s(e,ni,i),s(e,Oe,i),o(Oe,jo),s(e,ui,i),s(e,H,i),o(H,Oo),o(H,R),o(R,Vo),o(H,Mo),s(e,hi,i),s(e,Ve,i),o(Ve,Ao),s(e,fi,i),s(e,Me,i),o(Me,Ae),s(e,pi,i),s(e,De,i),o(De,Do),s(e,mi,i),rs(z,e,i),s(e,di,i),s(e,He,i),o(He,Ho),s(e,ci,i),s(e,Ce,i),o(Ce,Co),s(e,wi,i),s(e,J,i),o(J,ct),o(ct,W),o(W,qo),o(W,wt),o(wt,So),o(W,Lo),o(J,No),o(J,bt),o(bt,F),o(F,Ro),o(F,yt),o(yt,zo),o(F,Wo),o(J,Fo),o(J,gt),o(gt,x),o(x,xo),o(x,_t),o(_t,Uo),o(x,Yo),s(e,bi,i),s(e,qe,i),o(qe,Zo),s(e,yi,i),s(e,Se,i),o(Se,Ko),s(e,gi,i),s(e,Le,i),o(Le,Qo),s(e,_i,i),s(e,Ne,i),o(Ne,Xo),s(e,vi,i),s(e,Re,i),o(Re,ze),s(e,Ii,i),s(e,We,i),o(We,$o),s(e,ki,i),s(e,Fe,i),o(Fe,xe),s(e,Ti,i),s(e,Ue,i),o(Ue,es),s(e,Pi,i),s(e,Ei,i),s(e,Bi,i),s(e,Ye,i),o(Ye,ts),s(e,Gi,i),s(e,Ze,i),o(Ze,is),s(e,Ji,i),s(e,Ke,i),o(Ke,Qe),s(e,ji,i),s(e,Xe,i),o(Xe,os),s(e,Oi,i),rs(U,e,i),Vi=!0},p:fs,i(e){Vi||(ns(L.$$.fragment,e),ns(z.$$.fragment,e),ns(U.$$.fragment,e),Vi=!0)},o(e){us(L.$$.fragment,e),us(z.$$.fragment,e),us(U.$$.fragment,e),Vi=!1},d(e){e&&t(m),e&&t(T),e&&t(g),e&&t(vt),e&&t(Y),e&&t(It),e&&t(kt),e&&t(Tt),e&&t(K),e&&t(Pt),e&&t(Q),e&&t(Et),hs(L,e),e&&t(Bt),e&&t(X),e&&t(Gt),e&&t(G),e&&t(Jt),e&&t(ee),e&&t(jt),e&&t(te),e&&t(Ot),e&&t(Vt),e&&t(Mt),e&&t(oe),e&&t(At),e&&t(se),e&&t(Dt),e&&t(le),e&&t(Ht),e&&t(j),e&&t(Ct),e&&t(O),e&&t(qt),e&&t(ne),e&&t(St),e&&t(V),e&&t(Lt),e&&t(fe),e&&t(Nt),e&&t(me),e&&t(Rt),e&&t(de),e&&t(zt),e&&t(Wt),e&&t(Ft),e&&t(we),e&&t(xt),e&&t(M),e&&t(Ut),e&&t(be),e&&t(Yt),e&&t(A),e&&t(Zt),e&&t(ge),e&&t(Kt),e&&t(_e),e&&t(Qt),e&&t(Ie),e&&t(Xt),e&&t(ke),e&&t($t),e&&t(ei),e&&t(ti),e&&t(Pe),e&&t(ii),e&&t(D),e&&t(oi),e&&t(Ee),e&&t(si),e&&t(Ge),e&&t(li),e&&t(Je),e&&t(ai),e&&t(ri),e&&t(ni),e&&t(Oe),e&&t(ui),e&&t(H),e&&t(hi),e&&t(Ve),e&&t(fi),e&&t(Me),e&&t(pi),e&&t(De),e&&t(mi),hs(z,e),e&&t(di),e&&t(He),e&&t(ci),e&&t(Ce),e&&t(wi),e&&t(J),e&&t(bi),e&&t(qe),e&&t(yi),e&&t(Se),e&&t(gi),e&&t(Le),e&&t(_i),e&&t(Ne),e&&t(vi),e&&t(Re),e&&t(Ii),e&&t(We),e&&t(ki),e&&t(Fe),e&&t(Ti),e&&t(Ue),e&&t(Pi),e&&t(Ei),e&&t(Bi),e&&t(Ye),e&&t(Gi),e&&t(Ze),e&&t(Ji),e&&t(Ke),e&&t(ji),e&&t(Xe),e&&t(Oi),hs(U,e)}}}const ra={title:"BOJIT V3 - Guitar Build",date:"25-06-2021",published:!0,tile:{type:"image",image:"/tiles/2021-06-25-BOJIT_V3.PNG"}};function ia(w){return[[{type:"image",caption:"Neck Carving Through Carbon Fibre",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_1.JPG"},{type:"image",caption:"Binding Glue-Up",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_2.JPG"},{type:"image",caption:"Fretboard Pinning",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_3.JPG"},{type:"image",caption:"Hardware Fitting",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_4.JPG"},{type:"image",caption:"Neck Blank Levelling",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_5.JPG"},{type:"image",caption:'F-Hole "Thinning"',image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_6.JPG"},{type:"image",caption:"Old-Fashioned Resawing!",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_7.JPG"},{type:"image",caption:"Bookmatched Top",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_8.JPG"},{type:"image",caption:"Neck Pocket Routing",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_9.JPG"},{type:"image",caption:"Setting Neck Joint",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_10.JPG"},{type:"image",caption:"My Workshop!",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_11.JPG"},{type:"image",caption:"Finished Build",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_12.JPG"},{type:"image",caption:"Headstock Design",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_13.JPG"},{type:"image",caption:"Back of Headstock",image:"https://cdn.bojit.org/img/posts/BOJIT_V3-Gallery_14.JPG"}]]}class na extends Fl{constructor(m){super(),xl(this,m,ia,ta,Ul,{})}}export{na as default,ra as metadata};
