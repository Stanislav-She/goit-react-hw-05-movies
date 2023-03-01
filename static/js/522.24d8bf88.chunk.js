"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[522],{938:function(e,t,r){r.d(t,{M1:function(){return v},Pt:function(){return l},bc:function(){return s},fv:function(){return f},tx:function(){return m}});var n=r(861),a=r(757),i=r.n(a),c=r(243),u="6e5639f9d4cb9f087b8042a8acc9c8e2";function s(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/week",{params:{api_key:u}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function e(t,r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie",{params:{api_key:u,language:"en-US",page:r,query:t}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t),{params:{api_key:u,language:"en-US"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:u,language:"en-US"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews\n"),{params:{api_key:u,language:"en-US"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},645:function(e,t,r){r.d(t,{a:function(){return c}});var n=r(643),a="Loader_loader__+lRPl",i=r(184),c=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)(n.Z1,{height:"100",width:"100",color:"rgba(0, 255, 0, 1)",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},392:function(e,t,r){r.d(t,{H:function(){return o}});var n="MovieItem_item__iPuYx",a="MovieItem_label__Vea2Z",i="MovieItem_img__Q3nH0",c=r(461),u=r(87),s=r(184),o=function(e){var t=e.url,r=e.title,o=e.activeId,l=e.location;return(0,s.jsx)("li",{className:n,children:(0,s.jsxs)(u.rU,{to:"/movies/".concat(o),state:{from:l},children:[(0,s.jsx)("img",{className:i,src:null!==t?"https://image.tmdb.org/t/p/w300".concat(t):c,alt:r}),(0,s.jsx)("h2",{className:a,children:r})]})})}},414:function(e,t,r){r.d(t,{x:function(){return i}});var n="Box_box__vO0zN",a=r(184),i=function(e){var t=e.children;return(0,a.jsx)("div",{className:n,children:t})}},522:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n="Home_title__L087v",a=r(861),i=r(439),c=r(757),u=r.n(c),s=r(392),o=r(791),l=r(645),p=r(938),f="MovieList_movieList__uFrOZ",d=r(689),v=r(184),h="init",m="loading",_="success",x="error",g=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),r=t[0],n=t[1],c=(0,o.useState)(h),g=(0,i.Z)(c,2),w=g[0],b=g[1],y=(0,d.TH)();return(0,o.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.bc)();case 3:t=e.sent,n(t),b(_),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(x);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}b(m),function(){e.apply(this,arguments)}()}),[]),(0,v.jsxs)(v.Fragment,{children:[w===x&&(0,v.jsx)("p",{children:"ERROOOOOOR"}),(w===m||w===h)&&(0,v.jsx)(l.a,{}),w===_&&(0,v.jsx)("ul",{className:f,children:null===r||void 0===r?void 0:r.map((function(e){return(0,v.jsx)(s.H,{location:y,title:e.original_title,url:e.poster_path,activeId:e.id},e.original_title)}))})]})},w=r(414),b=function(){return(0,v.jsxs)(w.x,{children:[(0,v.jsx)("h1",{className:n,children:"Trending movies of the week"}),(0,v.jsx)(g,{})]})}},461:function(e,t,r){e.exports=r.p+"static/media/default-movie.71253f31d01ef6cdd4cc.jpeg"}}]);
//# sourceMappingURL=522.24d8bf88.chunk.js.map