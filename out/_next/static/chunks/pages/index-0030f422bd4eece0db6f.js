(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1526:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(266),a=r(6311),s=r(809),i=r.n(s),c=r(7294),l=r(5893),u=function(){return(0,l.jsxs)("div",{className:"flex flex-col mb-8",children:[(0,l.jsx)("div",{className:"flex overflow-wrap-anywhere text-yellow-300 text-4xl border-dashed border-b-2 min-h-3 mb-4 lg:mb-16",children:"RECA"}),(0,l.jsx)("div",{className:"aspect-w-16 aspect-h-9 bg-gray-200",children:(0,l.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XA06aQqJAVA",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},o=r(5675),f=r(5503),m=r(4642),p=r(5308),d=(r(1369),(0,f.ZF)({apiKey:"AIzaSyB_cDZhT9nX-JdST5zJqGtDr4H4eak9DQQ",authDomain:"saogithubpage-79366.firebaseapp.com",databaseURL:"https://saogithubpage-79366-default-rtdb.firebaseio.com",projectId:"saogithubpage-79366",storageBucket:"saogithubpage-79366.appspot.com"}),function(){var e=(0,n.Z)(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,m.iH)((0,m.N8)()),e.next=4,(0,m.U2)((0,m.iU)(t,"/public"));case 4:if((r=e.sent).exists()){e.next=7;break}throw new Error("snapshot not exists");case 7:return n=r.val(),e.abrupt("return",n);case 11:throw e.prev=11,e.t0=e.catch(0),new Error("getPublicRealTimeData failed");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()),x=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.imageName,e.prev=1,n=(0,p.cF)(),e.next=5,(0,p.Jt)((0,p.iH)(n,r));case 5:return a=e.sent,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),console.log("getStorageImageURL err: ",e.t0.message),new Error("getStorageImageURL failed");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.item,r=c.useState(void 0),s=(0,a.Z)(r,2),u=s[0],f=s[1],m=c.useMemo((function(){if(t&&t.images&&t.images[0])return t.images[0].imageName}),[t]);c.useEffect((function(){(function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x({imageName:m});case 4:t=e.sent,f(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]);var p=c.useMemo((function(){return t&&t.title?t.title:""}),[t]),d=c.useMemo((function(){return t&&t.subTitle?t.subTitle:""}),[t]);return(0,l.jsxs)("div",{className:"flex flex-col md:flex-row lg:flex-row mb-8 items-center",children:[(0,l.jsx)("div",{className:"flex w-full md:flex-2 lg:flex-2 lg:justify-center mr-4",children:(0,l.jsx)("div",{className:"w-full aspect-w-16 aspect-h-9 bg-gray-200 mb-2 md:mb-0",children:u&&(0,l.jsx)(o.default,{alt:"item-list-unit-image",className:"w-full h-full object-cover",src:u,layout:"fill"})})}),(0,l.jsxs)("div",{className:"flex w-full md:flex-3 lg:flex-7 flex-col",children:[(0,l.jsx)("div",{className:"whitespace-pre-wrap overflow-wrap-anywhere mb-2 text-white",children:p}),(0,l.jsx)("div",{className:"whitespace-pre-wrap overflow-wrap-anywhere text-white",children:d})]})]})},w=function(e){var t=e.items,r=c.useMemo((function(){if(t)return(0,l.jsx)("div",{children:t.map((function(e,t){return(0,l.jsx)(h,{item:e},"item-list-unit-".concat(t))}))})}),[t]);return(0,l.jsx)("div",{className:"flex flex-col",children:r})},v=function(){return(0,l.jsx)("div",{id:"footer",className:"flex flex-col pb-8",children:(0,l.jsx)("div",{className:"text-white",children:"Tel: 0900-000-000"})})},b=function(){var e=c.useState([]),t=(0,a.Z)(e,2),r=t[0],s=t[1];c.useEffect((function(){(function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:(t=e.sent).products&&s(t.products);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=c.useMemo((function(){return(0,l.jsx)(w,{items:r})}),[r]);return(0,l.jsx)("div",{className:"flex flex-col items-center h-full h-screen p-4 bg-green-700 overflow-y-scroll ",children:(0,l.jsx)("div",{className:"flex flex-col h-full w-full lg:max-w-4xl h-64 p-4",children:(0,l.jsxs)("div",{className:"flex flex-col justify-between min-h-60",children:[(0,l.jsx)(u,{}),o,(0,l.jsx)(v,{})]})})})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1526)}])}},function(e){e.O(0,[627,629,963,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);