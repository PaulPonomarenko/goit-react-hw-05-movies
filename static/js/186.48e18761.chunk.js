"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(n,e,r){r.r(e);var t=r(861),c=r(439),a=r(757),o=r.n(a),u=r(474),i=r(759),s=r(791),f=r(689),p=r(184);e.default=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),r=e[0],a=e[1],h=(0,s.useState)(!1),v=(0,c.Z)(h,2),l=v[0],w=v[1],d=(0,f.UO)().movieId;return(0,s.useEffect)((function(){function n(){return(n=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,(0,i.Cm)(d);case 4:e=n.sent,a(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:return n.prev=11,w(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[d]),(0,p.jsxs)(p.Fragment,{children:[l&&(0,p.jsx)(u.a,{}),(0,p.jsx)("div",{children:r.length>0?(0,p.jsx)("ul",{children:r.map((function(n){var e=n.author,r=n.content,t=n.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:e}),(0,p.jsxs)("p",{children:[" ",r," "]})]},t)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})})]})}},759:function(n,e,r){r.d(e,{Cm:function(){return p},LP:function(){return i},RH:function(){return s},jf:function(){return f},oi:function(){return h}});var t=r(861),c=r(757),a=r.n(c),o="9b552d5a8c71a797069fcc867d8581be",u="https://api.themoviedb.org",i=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/3/trending/movie/day?api_key=").concat(o));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return n.abrupt("return",e.json());case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/3/movie/").concat(e,"?api_key=").concat(o));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/3/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/3/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/3/search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&page=1"));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("\u0423\u0443\u0443\u0443\u043f\u0441\u0441, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},861:function(n,e,r){function t(n,e,r,t,c,a,o){try{var u=n[a](o),i=u.value}catch(s){return void r(s)}u.done?e(i):Promise.resolve(i).then(t,c)}function c(n){return function(){var e=this,r=arguments;return new Promise((function(c,a){var o=n.apply(e,r);function u(n){t(o,c,a,u,i,"next",n)}function i(n){t(o,c,a,u,i,"throw",n)}u(void 0)}))}}r.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=186.48e18761.chunk.js.map