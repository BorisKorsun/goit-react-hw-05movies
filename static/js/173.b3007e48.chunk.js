"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[173],{173:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var i,r,s,a,c,o,d,l,u=n(87),h=n(689),v=n(791),p=n(439),g=n(934),x=n(690),m=n(168),f=n(686),Z=f.Z.section(i||(i=(0,m.Z)(["\n  display: flex;\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);\n"]))),j=f.Z.h3(r||(r=(0,m.Z)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),b=f.Z.p(s||(s=(0,m.Z)(["\n  margin-bottom: 15px;\n"]))),y=f.Z.h4(a||(a=(0,m.Z)(["\n  font-weight: 500;\n  margin-bottom: 15px;\n"]))),w=f.Z.p(c||(c=(0,m.Z)(["\n  margin-bottom: 15px;\n"]))),k=f.Z.div(o||(o=(0,m.Z)(["\n  width: 360px;\n  margin-right: 20px;\n"]))),_=f.Z.div(d||(d=(0,m.Z)([""]))),S=f.Z.ul(l||(l=(0,m.Z)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n\n  & > li {\n    padding-right: 6px;\n  }\n"]))),U=n(184),B=new x.Z;function I(){var e,t,n=(0,v.useState)(""),i=(0,p.Z)(n,2),r=i[0],s=i[1],a=(0,v.useState)(""),c=(0,p.Z)(a,2),o=c[0],d=c[1],l=(0,v.useState)(null),x=(0,p.Z)(l,2),m=x[0],f=x[1],I=(0,v.useState)(""),M=(0,p.Z)(I,2),R=M[0],C=M[1],T=(0,v.useState)([]),q=(0,p.Z)(T,2),G=q[0],L=q[1],O=(0,v.useState)(""),A=(0,p.Z)(O,2),E=A[0],F=A[1],H=(0,v.useRef)((0,h.TH)()),z=(0,h.UO)().movieId;return(0,v.useEffect)((function(){B.getMovieById(z).then((function(e){var t,n=e.data;s(null!==(t=n.original_title)&&void 0!==t?t:n.name),d(n.release_date),f(n.vote_average),C(n.overview),L(n.genres),n.poster_path&&F("https://image.tmdb.org/t/p/original".concat(n.poster_path))}))}),[z]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("button",{type:"button",children:(0,U.jsx)(u.rU,{to:null!==(e=null===(t=H.current.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Go back"})}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(k,{children:(0,U.jsx)("img",{width:"100%",alt:r,src:E||g})}),(0,U.jsxs)(_,{children:[(0,U.jsxs)(j,{children:[o?"".concat(r,": (").concat(o.slice(0,4),")"):"".concat(r)," "]}),(0,U.jsxs)(b,{children:["User score: ",Math.round(10*m),"%"]}),(0,U.jsx)(y,{children:"Overview"}),(0,U.jsx)(w,{children:R}),(0,U.jsx)(y,{children:"Genres"}),(0,U.jsx)(S,{children:G.map((function(e){var t=e.name,n=e.id;return(0,U.jsx)("li",{children:t},n)}))})]})]})]})}var M=n(551);function R(){return(0,U.jsxs)("section",{children:[(0,U.jsx)(I,{}),(0,U.jsxs)("ul",{children:[(0,U.jsx)("li",{children:(0,U.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,U.jsx)(v.Suspense,{fallback:(0,U.jsx)(M.Z,{children:"Loading.."}),children:(0,U.jsx)(h.j3,{})})]})}},690:function(e,t,n){var i=n(671),r=n(466),s=n(243),a=function(){function e(){(0,i.Z)(this,e),this.service=s.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"79fb62b7e77dc5ee41dd0c1332d74198",query:""}})}return(0,r.Z)(e,[{key:"getTrendingMovies",value:function(){return this.service.get("trending/movie/day")}},{key:"getMovieById",value:function(e){return this.service.get("movie/".concat(e))}},{key:"getActorsById",value:function(e){return this.service.get("movie/".concat(e,"/credits"))}},{key:"getReviewsById",value:function(e){return this.service.get("movie/".concat(e,"/reviews"))}},{key:"getMoviesByTitle",value:function(e){return this.service.defaults.params.query=e,this.service.get("search/movie")}}]),e}();t.Z=a},934:function(e,t,n){e.exports=n.p+"static/media/default-image.2e01288c0c1a3f24d743.jpg"}}]);
//# sourceMappingURL=173.b3007e48.chunk.js.map