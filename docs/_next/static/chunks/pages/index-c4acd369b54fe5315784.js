(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{53971:function(t,e,n){"use strict";n.d(e,{Z:function(){return C}});var i=n(30266),r=n(66311),o=n(809),a=n.n(o),c=n(4604),s=n(71230),d=n(15746),l=n(96486),u=n.n(l),f=n(67294),p=n(1076),h=n(41664),g=n(99490),v=n(85893);function m(t){var e,n,i,r=t.note,o=t.noteIndex,a=(0,p.gt)({note:r,noteIndex:o});try{e=u().get(r,"custom.date",!1)?(n=r.custom.date,i=g.DateTime.DATE_SHORT,g.DateTime.fromISO(n).toLocaleString(i)):function(t,e){return g.DateTime.fromMillis(t).toLocaleString(e)}(r.created,g.DateTime.DATE_SHORT)}catch(c){throw Error("no date found for note ".concat(r.id))}return(0,v.jsx)("div",{children:(0,v.jsxs)("article",{itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[(0,v.jsx)("h2",{itemProp:"headline",children:(0,v.jsx)(h.default,{href:a,children:r.title})}),!u().isUndefined(e)&&(0,v.jsx)("p",{children:e}),u().has(r,"custom.excerpt")&&(0,v.jsx)("p",{itemProp:"description",children:r.custom.excerpt})]})})}var x=n(9008),j=n(23894);function y(t){var e=t.content,n=(0,j.ZP)(e);return(0,v.jsx)(x.default,{children:n})}var b=n(25903),O=n(2962),P=n(28861),w=function(t){return b.Time.DateTime.fromMillis(u().toInteger(t)).setZone("utc").toLocaleString("yyyy-LL-dd")};function N(t){var e=t.note,n=t.config,i=(0,P.vm)().router.asPath;if(u().some(["403","changelog"],(function(t){return i==="/notes/".concat(t,"/")})))return null;var r=b.PublishUtils.getSEOPropsFromConfig(n),o=b.PublishUtils.getSEOPropsFromNote(e),a=u().defaults(o,r),c=a.title,s=a.excerpt,d=null!==a&&void 0!==a&&a.image?[a.image]:[],l=function(t){var e=t.sitePath,n=t.seoProps,i=t.siteConfig;return n.canonicalBaseUrl?[i.siteUrl,e].join(""):n.canonicalUrl?n.canonicalUrl:[i.canonicalBaseUrl?i.canonicalBaseUrl:(0,p.N0)(i),e].join("")}({sitePath:i,seoProps:a,siteConfig:n.site}),f=a.twitter?{handle:a.twitter,site:a.twitter,cardType:"summary_large_image"}:void 0;return(0,v.jsx)(O.PB,{title:c,description:s,canonical:l,noindex:a.noindex,twitter:f,openGraph:{title:c,description:s,url:l,images:d,type:"article",article:{publishedTime:w(a.created),modifiedTime:w(a.updated),tags:function(t){return t.tags?Array.isArray(t.tags)?t.tags:[t.tags]:[]}(e)}}})}var E=n(77103),T=n(92809),_=n(10219),S=n(53419),L=["note"];function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){(0,T.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z=S.Z.Link,I=function(t){var e,n,i=t.note,o=(0,_.Z)(t,L);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(S.Z,k(k({style:{zIndex:1}},o),{},{children:[Object.entries(null===i||void 0===i?void 0:i.anchors).map((function(t){var e,n=(0,r.Z)(t,2),i=n[0],o=n[1];return"header"===(null===o||void 0===o?void 0:o.type)?(0,v.jsx)(Z,{href:"#".concat(i),title:u().capitalize(null!==(e=null===o||void 0===o?void 0:o.text)&&void 0!==e?e:null===o||void 0===o?void 0:o.value)}):(0,v.jsx)(v.Fragment,{})})),(null===i||void 0===i||null===(e=i.links)||void 0===e?void 0:e.length)>0&&null!==i&&void 0!==i&&i.links.some((function(t){return"backlink"===t.type}))?(0,v.jsx)(Z,{href:"#backlinks",title:"Backlinks"}):(0,v.jsx)(v.Fragment,{}),(null===i||void 0===i||null===(n=i.children)||void 0===n?void 0:n.length)>0?(0,v.jsx)(Z,{href:"#children",title:"Children"}):(0,v.jsx)(v.Fragment,{})]}))})},U=n(21553),F=n(29476),B=n(74622).b.HEADER;function C(t){var e,n=t.note,o=t.body,l=t.collectionChildren,p=t.noteIndex,h=t.customHeadContent,g=t.config,x=(0,c.createLogger)("Note"),j=(0,P.vm)().getActiveNoteId,b=f.useState(void 0),O=(0,r.Z)(b,2),w=O[0],T=O[1],_=j();"root"===_&&(_=p.id);var S=(0,U.$s)(),L=(0,U.O5)((function(t){return t.engine}));x.info({ctx:"enter",id:_});var D=(0,P.dD)().isMobile;f.useEffect((function(){if(x.info({ctx:"updateNoteBody:enter",id:_}),u().isUndefined(_))x.info({ctx:"updateNoteBody:exit",id:_,state:"id undefined"});else{if(_===n.id)return S(F.w.Nw.setLoadingStatus(c.LoadingStatus.FULFILLED)),void x.info({ctx:"updateNoteBody:exit",id:_,state:"id = note.id"});x.info({ctx:"updateNoteBody:fetch:pre",id:_}),fetch("/data/notes/".concat(_,".html")).then(function(){var t=(0,i.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x.info({ctx:"updateNoteBody:fetch:post",id:_}),t.next=3,e.text();case 3:n=t.sent,T(n),S(F.w.Nw.setLoadingStatus(c.LoadingStatus.FULFILLED));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}),[_]);var k=_===n.id?o:w;if(u().isUndefined(k)||L.loading===c.LoadingStatus.PENDING)return(0,v.jsx)(E.Z,{});var Z=null!==(e=n.custom)&&void 0!==e&&e.has_collection&&!u().isNull(l)?l.map((function(t){return m({note:t,noteIndex:p})})):null,C=D?{display:"none"}:{position:"absolute",top:B.HEIGHT+40,right:20,marginTop:20,marginRight:20};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(N,{note:n,config:g}),h&&(0,v.jsx)(y,{content:h}),(0,v.jsx)("div",{style:C,children:(0,v.jsx)(I,{note:n,offsetTop:B.HEIGHT})}),(0,v.jsx)(s.Z,{children:(0,v.jsxs)(d.Z,{span:24,children:[(0,v.jsx)(c.DendronNote,{noteContent:k}),Z]})})]})}},12562:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return r}});var i=n(53971),r=!0;e.default=i.Z},45301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(12562)}])}},function(t){t.O(0,[155,774,888,179],(function(){return e=45301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);