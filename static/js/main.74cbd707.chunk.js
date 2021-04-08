(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(7),c=a.n(n),o=(a(12),a(2)),r=a(3),l=a(5),m=a(4),j=a(0),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("header",{id:"home",children:[Object(j.jsxs)("nav",{id:"nav-wrap",children:[Object(j.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(j.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(j.jsxs)("ul",{id:"nav",className:"nav",children:[Object(j.jsx)("li",{className:"current",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.google.com/document/d/1koz4fEwDD2siovUuIcpyX_bCuoauAfnNaO7cEC4xKlg/edit?usp=sharing",children:"Resume"})})]})]}),Object(j.jsx)("div",{className:"row banner",children:Object(j.jsxs)("div",{className:"banner-text",children:[Object(j.jsx)("div",{className:"content-cont",children:Object(j.jsx)("div",{className:"text-body",children:Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{id:"TitlePhrase",children:"The Great Journey"}),Object(j.jsxs)("h2",{id:"TitleName",children:["I am ",e.name]})]})})}),Object(j.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(j.jsx)("hr",{}),Object(j.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,target:"_blank",children:Object(j.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(j.jsx)("p",{className:"scrolldown",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(j.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),a}(s.Component),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("section",{id:"about",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"three columns",children:Object(j.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(j.jsxs)("div",{className:"nine columns main-col",children:[Object(j.jsx)("h2",{children:"About Me"}),Object(j.jsx)("p",{children:e.aboutme}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"columns contact-details",children:[Object(j.jsx)("h2",{children:"Contact Details"}),Object(j.jsxs)("p",{className:"address",children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.address}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.website})]})]})})]})]})})}}]),a}(s.Component),b=(s.Component,function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("section",{id:"portfolio",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h1",{children:"Check Out Some of My Works."}),Object(j.jsx)("div",{id:"portfolio-wrapper",className:"s cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(j.jsx)("div",{className:"columns portfolio-item",children:Object(j.jsx)("div",{className:"item-wrap",children:Object(j.jsxs)("a",{href:"#modal-01",children:[Object(j.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"portfolio-item-meta",children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsx)("p",{children:e.description})]})})]})})})}))})]})})}}]),a}(s.Component)),p=(s.Component,function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsxs)("section",{id:"contact",children:[Object(j.jsx)("div",{className:"row section-head",children:Object(j.jsx)("div",{className:"ten columns",children:Object(j.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(j.jsxs)("div",{className:"widget",children:[Object(j.jsxs)("h4",{children:["LinkedIn :",e.linkedinId]}),Object(j.jsx)("p",{className:"lead",children:"or"}),Object(j.jsxs)("h4",{children:["Email :",e.email]})]})})})]})}}]),a}(s.Component)),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"twelve columns",children:Object(j.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,children:Object(j.jsx)("i",{className:e.className})})})}))})}),Object(j.jsx)("div",{id:"go-top",children:Object(j.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(j.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(s.Component),O={imagebaseurl:"",name:"Javier Rivera",role:"Full Stack Web Developer, tech-savvy, cyberpunk fan boy, and veteran",linkedinId:" https://linkedin.com/in/javier-c-rivera",twitterId:"https://twitter.com/sunnuke",roleDescription:" I have basic knowledge and experience with Full Stack Development using Python, JAVA, MERN and I am passionate about the puzzles of creation with computer technology. Also I like to learn about new technologies, and solve puzzle cubes or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://linkedin.com/in/javier-c-rivera",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/Sunnuke",className:"fa fa-github"},{name:"twitter",url:"https://twitter.com/sunnuke",className:"fa fa-twitter"}],aboutme:'I am a Coding Dojo coding bootcamp graduate and a military veteran with 3 years of expertise in naval logistics. I look forward to developing and delivering meaningful web applications and products that can help companies develop solutions to improve user experiences. My Motto is: "Never Believe that you are the Best, because you can always be Better." I say this because there is always room for improvement.',address:"San Diego, California",website:"https://linkedin.com/in/javier-c-rivera",email:" javiercr3xx@gmail.com",education:[{UniversityName:"The LNM Insitute of Information Technology",specialization:"Some specialization",MonthOfPassing:"Aug",YearOfPassing:"2020",Achievements:"Some Achievements"},{UniversityName:"Some University",specialization:"Some specialization",MonthOfPassing:"Jan",YearOfPassing:"2018",Achievements:"Some Achievements"}],work:[{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"Xplanet",description:"A Synthwave Styled social platform concept for gamers, enabling users to access curated gaming news and media, interact with other gamers, create and personalized private profile pages",imgurl:"images/portfolio/Xplanet.gif"},{name:"PokeDexAPI",description:"An app for Pokemon fans that enables users to explore the entire library of the Pokemon universe and see their stats and alternate versions.",imgurl:"images/portfolio/Pokedex.gif"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{resumeData:O}),Object(j.jsx)(d,{resumeData:O}),Object(j.jsx)(b,{resumeData:O}),Object(j.jsx)(p,{resumeData:O}),Object(j.jsx)(u,{resumeData:O})]})}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(j.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.74cbd707.chunk.js.map