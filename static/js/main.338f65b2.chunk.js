(this["webpackJsonpreact-portfolio-frontend"]=this["webpackJsonpreact-portfolio-frontend"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a.p+"static/media/wordGuessGame.a9381096.png"},function(e,t,a){e.exports=a.p+"static/media/TriviaGame1.646efd69.png"},function(e,t,a){e.exports=a.p+"static/media/ClimateFeel.63cbadc6.png"},function(e,t,a){e.exports=a.p+"static/media/JWT-Demo.fb8ddac7.png"},,,,function(e,t,a){e.exports=a(41)},,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=(a(29),a(15)),c=a.n(r),i=a(24),o=a(10),m=a(5),s=a(6),u=a(8),d=a(7),h=a(9),E=(a(33),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"NavBarContainer"},l.a.createElement("div",{className:"NavBarElement"},l.a.createElement("a",{href:"/"},l.a.createElement("h5",null,"Home"))),l.a.createElement("div",{className:"NavBarElement"},l.a.createElement("a",{href:"Portfolio-Website/Contact"},l.a.createElement("h5",null,"Contact"))),l.a.createElement("div",{className:"NavBarElement"},l.a.createElement("h5",null,"Blog")),l.a.createElement("div",null))}}]),t}(n.Component)),p=["Helping teams innovate","Save money with automation","Fast technology solutions for business","Bringing seamless web technology to everyone","Full stack web development"],f=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={textNumber:p.length-1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setInterval((function(){var t=e.state.textNumber;t===p.length-1&&(t=0),e.setState({textNumber:t+1})}),3e3)}},{key:"componentDidUnmount",value:function(){clearInterval(this.timeout)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,p[this.state.textNumber]))}}]),t}(n.Component),b=(a(13),a(20)),v=a.n(b),g=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("a",{href:"https://tonedef00.github.io/Word-guess-game/"},l.a.createElement("img",{src:v.a,alt:"Word Guess Game Image",width:"100%"}),l.a.createElement("div",{className:"words"},l.a.createElement("h5",null,"Word guess Game"),l.a.createElement("p",null,"A super lightweight vanilla javascript game"),l.a.createElement("a",{href:"https://github.com/ToneDef00/Word-guess-game"},l.a.createElement("button",null,"Github")))))},w=a(21),N=a.n(w),y=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("a",{href:"https://tonedef00.github.io/trivia-game/"},l.a.createElement("img",{src:N.a,alt:"Trivia Game",width:"100%"}),l.a.createElement("div",{className:"words"},l.a.createElement("h5",null,"Basic Trivia Game"),l.a.createElement("p",null,"A timed Trivia Game using JQuery and a Trivia API"),l.a.createElement("a",{href:"https://github.com/ToneDef00/trivia-game"},l.a.createElement("button",null,"Github")))))},j=a(22),O=a.n(j),C=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("a",{href:"https://tonedef00.github.io/Climate-Feel-App/"},l.a.createElement("img",{src:O.a,alt:"Trivia Game",width:"100%"}),l.a.createElement("div",{className:"words"},l.a.createElement("h5",null,"Climate Feel"),l.a.createElement("p",null,"A website showing you real weather data over the past 20 years"),l.a.createElement("a",{href:"https://github.com/ToneDef00/Climate-Feel-App"},l.a.createElement("button",null,"Github")))))},G=a(23),T=a.n(G),k=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("a",{href:"https://github.com/ToneDef00/React-JWT-Auth-MySQL-Boilerplate"},l.a.createElement("img",{src:T.a,alt:"Password Authentication Boilerplate",width:"100%"}),l.a.createElement("div",{className:"words"},l.a.createElement("h5",null,"Authenticated webapp Using Node"),l.a.createElement("p",null,"A boiler plate which allows for rapid deployment of frontend applications without much work"),l.a.createElement("a",{href:"https://github.com/ToneDef00/React-JWT-Auth-MySQL-Boilerplate"},l.a.createElement("button",null,"Github")))))},x=(a(34),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"flexColumn"},l.a.createElement("div",{className:"textSlider"},l.a.createElement(f,null)),l.a.createElement("div",{className:"flexRow"},l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(C,null),l.a.createElement(k,null)))}}]),t}(n.Component)),W=(a(35),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Contact Me"),l.a.createElement("div",{className:"contactContainer"},l.a.createElement("div",{className:"contactCard"},l.a.createElement("h3",{className:"cardWords"},"A passionate innovator"),l.a.createElement("p",{className:"cardWords"},"     We live in a world where business is computerized. Let me help you take the leap by building automation for your business. I have been consulting with businesses for the past five years. During that time i worked on many brands, implementing data driven technology to increase my clients bottom line. Get your free consultation today!")),l.a.createElement("div",{className:"contactCard"},l.a.createElement("h3",{className:"cardWords"}," Contact info"),l.a.createElement("table",{className:"cardWords"},l.a.createElement("tr",null,l.a.createElement("td",null,"Email:")," ",l.a.createElement("td",null,"Daniels@dual4t.com")),l.a.createElement("tr",null,l.a.createElement("td",null,"Phone:")," ",l.a.createElement("td",null,"+1 (650) - 388 - 8615")),l.a.createElement("tr",null,l.a.createElement("td",null,"GitHub:")," ",l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/ToneDef00/"},"ToneDef00"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Linkdin:")," ",l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-steigman-bb652186/"},"Daniel Steigman")))))))}}]),t}(n.Component));c.a.render("",document.getElementById("root")),c.a.render(l.a.createElement(i.a,null,l.a.createElement((function(e){var t=e.children;return l.a.createElement("div",null,l.a.createElement(E,null),t)}),null,l.a.createElement(o.a,{exact:!0,path:"/Portfolio-Website/",component:x}),l.a.createElement(o.a,{exact:!0,path:"/contact",component:W}))),document.querySelector("#root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.338f65b2.chunk.js.map