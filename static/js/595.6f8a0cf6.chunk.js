"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[595],{760:function(e,n,r){var t=r(184);n.Z=function(e){var n=e.error;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("h2",{children:n})})}},759:function(e,n,r){r.d(n,{Cm:function(){return f},LP:function(){return o},RH:function(){return u},jf:function(){return l},oi:function(){return p}});var t=r(861),s=r(757),a=r.n(s),c="9b552d5a8c71a797069fcc867d8581be",i="https://api.themoviedb.org",o=function(){var e=(0,t.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/3/trending/movie/day?api_key=").concat(c));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/3/movie/").concat(n,"?api_key=").concat(c));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/3/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/3/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/3/search/movie?api_key=").concat(c,"&query=").concat(n,"&language=en-US&page=1"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},595:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t=r(861),s=r(439),a=r(757),c=r.n(a),i=r(759),o=r(791),u=r(689),l=r(87),f=r(760),p=r(474),h="MoviesDetails_img__kTMiQ",v="MoviesDetails_film__container__AB68W",d="MoviesDetails_info__7t3XW",_="MoviesDetails_genres__BRdjB",x="MoviesDetails_second__info__NgkkL",m="MoviesDetails_link__container__yuDju",j="MoviesDetails_link__info__rj9Le",k="MoviesDetails_ganres__info__gImef",w=r(184),g=function(){var e,n,r=(0,o.useState)({}),a=(0,s.Z)(r,2),g=a[0],b=a[1],y=(0,o.useState)(null),N=(0,s.Z)(y,2),Z=N[0],D=N[1],M=(0,o.useState)(!1),S=(0,s.Z)(M,2),E=S[0],L=S[1],R=(0,u.UO)().movieId,U=(0,u.TH)(),B=(0,o.useRef)(null!==(e=null===(n=U.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");if((0,o.useEffect)((function(){function e(){return(e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),e.next=4,(0,i.RH)(R);case 4:n=e.sent,b(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),D(e.t0.message);case 11:return e.prev=11,L(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[R]),g){var C=g.genres,H=g.title,A=g.overview,F=g.popularity,G=g.poster_path;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l.NavLink,{to:B.current,children:(0,w.jsx)("button",{children:"Go Back"})}),E&&(0,w.jsx)(p.a,{}),(0,w.jsxs)("div",{className:v,children:[(0,w.jsx)("img",{className:h,src:G?"https://image.tmdb.org/t/p/w500".concat(G):"https://static8.depositphotos.com/1431107/919/i/600/depositphotos_9199988-stock-photo-oops-icon.jpg",alt:H}),(0,w.jsxs)("div",{className:d,children:[(0,w.jsx)("h2",{children:H}),(0,w.jsxs)("p",{children:["User Score: ",F]}),(0,w.jsx)("h3",{children:" Overview"}),(0,w.jsx)("p",{children:A})]}),(0,w.jsxs)("div",{className:k,children:[(0,w.jsx)("h3",{className:x,children:"Genres"}),C&&(0,w.jsx)("ul",{className:_,children:C.map((function(e){return(0,w.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{className:x,children:"Additional information"}),(0,w.jsxs)("ul",{className:m,children:[(0,w.jsx)("li",{className:j,children:(0,w.jsx)(l.NavLink,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{className:j,children:(0,w.jsx)(l.NavLink,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(o.Suspense,{children:(0,w.jsx)(u.j3,{})})]}),Z&&(0,w.jsx)(f.Z,{error:Z})]})}}}}]);
//# sourceMappingURL=595.6f8a0cf6.chunk.js.map