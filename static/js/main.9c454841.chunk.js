(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(6),s=n.n(r),a=(n(17),n(18),n(4)),o=(n(19),n(20),n(45)),l=n(46),j=n(1),d=function(e){var t=e.item;return Object(j.jsx)("p",{children:t})};function m(e){var t=e.xilva,n=e.title.slice(),c=n.pop();return Object(j.jsxs)("div",{className:"formconteiner",children:[Object(j.jsxs)("div",{className:t?"contact xilva":"contact",children:[Object(j.jsx)("p",{children:"Contant"}),Object(j.jsx)("p",{children:"Giorgi Kapanadze"}),Object(j.jsxs)("div",{className:"mobile",children:[Object(j.jsx)(o.a,{}),Object(j.jsx)("p",{children:"555 778181"})]}),Object(j.jsxs)("div",{className:"email",children:[Object(j.jsx)(l.a,{}),Object(j.jsx)("p",{children:"gkapanadze76@yahoo.com"})]})]}),Object(j.jsxs)("div",{className:"about",children:[n.length>0?Object(j.jsx)("span",{style:{marginLeft:"7px"},children:"Dependencies"}):"",Object(j.jsx)("div",{className:"depWrapper",children:n.map((function(e,t){return Object(j.jsx)(d,{item:e},t)}))}),n.length>0?Object(j.jsxs)("span",{style:{marginLeft:"7px",borderTop:"1px solid whitesmoke"},children:["About: ",c]}):""]})]})}var u=[{id:1,img:"imge/quiz.jpg",Dep:["React","React-Dom","Sass","material-ui","\u10e5\u10d5\u10d8\u10d6\u10d8 \u10e1\u10d0\u10db\u10d8 \u10d9\u10d8\u10d7\u10ee\u10d5\u10d8\u10d7, \u10d3\u10d0\u10dc\u10d0\u10e0\u10e9\u10d4\u10dc\u10d8\u10e1 \u10db\u10dd\u10e4\u10d8\u10e5\u10e0\u10d4\u10d1\u10d0 \u10d3\u10d0\u10db\u10d4\u10d6\u10d0\u10e0\u10d0, \u10d3\u10d0\u10d0\u10d9\u10da\u10d8\u10d9\u10d4"],link:"https://george-giorgi.github.io/modern_quize/",name:"Quiz"},{id:2,img:"imge/fb.jpg",Dep:["React","React-Dom","Sass","material-ui","\u10e1\u10dd\u10ea\u10d8\u10d0\u10da\u10e3\u10e0\u10d8 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d8\u10e1 \u10d5\u10d8\u10d6\u10e3\u10d0\u10da\u10d8, back-end \u10d8\u10ee\u10d8\u10da\u10d8\u10d4\u10d7 githubze . mongodb, express"],link:"https://george-giorgi.github.io/social_ui/",name:"Social"},{id:3,img:"imge/7.jpeg",Dep:["","comming soon  python/flask"],name:"Blog"},{id:4,img:"imge/ad.png",Dep:["","comming soon  python/parsing"]},{id:5,img:"imge/6.jpeg",Dep:["","comming soon"]},{id:6,img:"imge/5.jpeg",Dep:["","comming soon"]},{id:7,img:"imge/person.jpeg",Dep:["","comming soon"]}],g=n(10),b=n.n(g);function p(){var e=Object(c.useRef)(),t=Object(c.useState)(0),n=Object(a.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(!1),o=Object(a.a)(s,2),l=o[0],d=o[1],g=Object(c.useState)([]),p=Object(a.a)(g,2),h=p[0],f=p[1],O=Object(c.useState)(!0),x=Object(a.a)(O,2),v=x[0],k=x[1],L=Object(c.useRef)(),N=Object(c.useRef)(),D=function(){f([])};return Object(c.useEffect)((function(){N.current.clientWidth<768&&k(!1)}),[v]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{ref:N,className:"conteiner",onWheel:function(t){return function(t){var n=e.current.scrollWidth-e.current.clientWidth;t.deltaY>0&&e.current.scrollLeft<n?(r((function(e){return e+60})),e.current.scrollLeft=i):t.deltaY<0&&0!==e.current.scrollLeft&&(e.current.scrollLeft=i,r((function(e){return e-60})))}(t)},onScrollCapture:function(t){!function(t){var n=e.current.scrollWidth-e.current.clientWidth,c=t.target.scrollLeft,i=L.current.getTotalLength();L.current.style.strokeDashoffset=c>0&&c<n?i-c:i,L.current.style.strokeDashoffset<i&&d(!0)}(t)},children:[Object(j.jsx)("div",{className:"wrappSlide",ref:e,children:u.map((function(e){return Object(j.jsxs)("div",{className:"content",onMouseOver:function(){return function(e){f(e)}(e.Dep)},onMouseLeave:D,children:["    ",Object(j.jsxs)("a",{href:v&&e.link,target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("img",{src:e.img,alt:"img"}),Object(j.jsx)("span",{className:"spanname",children:e.name})]}),Object(j.jsx)("a",{href:0==v&&e.link,target:"_blank",rel:"noreferrer",children:Object(j.jsxs)("p",{className:"respons",children:[" ",0==v&&"Click and see"]})})]},e.id)}))}),Object(j.jsx)("svg",{id:"svg",width:"447",height:"80",viewBox:"0 0 447 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{ref:L,className:"path",stroke:"#C3AED6",strokeWidth:3,d:"M0 79H69L94 48L104 68L121 20L136 79L169 48L185 62L228 2L246 79L291 68L310 79L335 53L366 79H447"})}),Object(j.jsx)(m,{xilva:l,title:h}),Object(j.jsxs)("footer",{children:[Object(j.jsx)("p",{children:"Portfolio"}),Object(j.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/giorgi-kapanadze-613023176/",target:"_blank",children:Object(j.jsx)(b.a,{className:"linkedin"})})]})]})})}var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{})})};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.9c454841.chunk.js.map