"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(439),a=r(791),c=r(689),u=r(596),s=r(673),o=r(737),i="Reviews_reviewsList__hDAQA",p="Reviews_review__sHbuN",f="Reviews_author__CqYAZ",h="Reviews_content__13k0w",v="Reviews_empty__gM9wW",l=r(184),w=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)(null),r=(0,n.Z)(t,2),w=r[0],m=r[1],d=(0,a.useState)(!1),_=(0,n.Z)(d,2),b=_[0],g=_[1],x=(0,a.useState)(!1),k=(0,n.Z)(x,2),y=k[0],Z=k[1];return(0,a.useEffect)((function(){Z(!0),o.Z.fetchReviews(e).then((function(e){e.results.length>0?m(e.results):g(!0)})).catch((function(e){return u.Am.error("".concat(e.message))})).finally((function(){Z(!1)}))}),[e]),(0,l.jsxs)("ul",{className:i,children:[y&&(0,l.jsx)(s.a,{}),w&&w.map((function(e){return(0,l.jsxs)("li",{className:p,children:[(0,l.jsxs)("h3",{className:f,children:[" Author: ",e.author]}),(0,l.jsx)("p",{className:h,children:e.content})]},e.id)})),b&&(0,l.jsx)("p",{className:v,children:"We don't have any reviews for this movie."})]})}},737:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),u=r(263),s="https://api.themoviedb.org/3",o="7ea4fffffdd201a1de907203088fcd86",i="/trending/movie/day",p="/movie",f="/credits",h="/reviews",v="/search/movie";function l(){return(l=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s).concat(i,"?api_key=").concat(o),e.next=4,u.Z.get(t);case 4:if(!(r=e.sent)){e.next=7;break}return e.abrupt("return",r.data.results);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(s).concat(p,"/").concat(t,"?api_key=").concat(o),e.next=4,u.Z.get(r);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(s).concat(p,"/").concat(t).concat(f,"?api_key=").concat(o),e.next=4,u.Z.get(r);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(s).concat(p,"/").concat(t).concat(h,"?api_key=").concat(o),e.next=4,u.Z.get(r);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(s).concat(v,"?api_key=").concat(o,"&query=").concat(t),e.next=4,u.Z.get(r);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var b={fetchTrending:function(){return l.apply(this,arguments)},fetchMovieDetails:function(e){return w.apply(this,arguments)},fetchCast:function(e){return m.apply(this,arguments)},fetchReviews:function(e){return d.apply(this,arguments)},searchMovies:function(e){return _.apply(this,arguments)}};t.Z=b}}]);
//# sourceMappingURL=168.8cbf4de3.chunk.js.map