(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function f(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var a=Object.defineProperty,s=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(d){var o=y(r);o&&o!==d&&e(t,o,n)}var i=s(r);p&&(i=i.concat(p(r)));for(var c=f(t),b=f(r),v=0;v<i.length;++v){var h=i[v];if(!u[h]&&(!n||!n[h])&&(!b||!b[h])&&(!c||!c[h])){var w=l(r,h);try{a(t,h,w)}catch(O){}}}}return t}},6390:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return R}});var o=r(7294),u=(r(5697),o.createContext(null));var i=function(e){e()},c=function(){return i};var f={notify:function(){},get:function(){return[]}};function a(e,t){var r,n=f;function o(){i.onStateChange&&i.onStateChange()}function u(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){var e=c(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var i={addNestedSub:function(e){return u(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:u,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=f)},getListeners:function(){return n}};return i}var s="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?o.useLayoutEffect:o.useEffect;var p=function(e){var t=e.store,r=e.context,n=e.children,i=(0,o.useMemo)((function(){var e=a(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=(0,o.useMemo)((function(){return t.getState()}),[t]);s((function(){var e=i.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,c]);var f=r||u;return o.createElement(f.Provider,{value:i},n)};r(8679),r(9864);var l,y=r(3935);l=y.unstable_batchedUpdates,i=l;r(3498);var d=r(5893),b=function(e){return(0,d.jsx)("div",{className:"bg-blue-50 w-screen h-screen",children:(0,d.jsx)("div",{children:e.children})})};function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var m="function"===typeof Symbol&&Symbol.observable||"@@observable",g=function(){return Math.random().toString(36).substring(7).split("").join(".")},S={INIT:"@@redux/INIT"+g(),REPLACE:"@@redux/REPLACE"+g(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+g()}};function E(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function j(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(O(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(O(1));return r(j)(e,t)}if("function"!==typeof e)throw new Error(O(2));var o=e,u=t,i=[],c=i,f=!1;function a(){c===i&&(c=i.slice())}function s(){if(f)throw new Error(O(3));return u}function p(e){if("function"!==typeof e)throw new Error(O(4));if(f)throw new Error(O(5));var t=!0;return a(),c.push(e),function(){if(t){if(f)throw new Error(O(6));t=!1,a();var r=c.indexOf(e);c.splice(r,1),i=null}}}function l(e){if(!E(e))throw new Error(O(7));if("undefined"===typeof e.type)throw new Error(O(8));if(f)throw new Error(O(9));try{f=!0,u=o(u,e)}finally{f=!1}for(var t=i=c,r=0;r<t.length;r++){(0,t[r])()}return e}function y(e){if("function"!==typeof e)throw new Error(O(10));o=e,l({type:S.REPLACE})}function d(){var e,t=p;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(O(11));function r(){e.next&&e.next(s())}return r(),{unsubscribe:t(r)}}})[m]=function(){return this},e}return l({type:S.INIT}),(n={dispatch:l,subscribe:p,getState:s,replaceReducer:y})[m]=d,n}function P(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function x(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var A=x();A.withExtraArgument=x;var C,N=A;!function(e){e.SAVE_LOCALDATA="SAVE_LOCALDATA",e.CLEAR_LOCALDATA="CLEAR_LOCALDATA"}(C||(C={}));r(809);new Error("Unexpected Error");var _=function(e){return function(t){return function(r){return Object.prototype.hasOwnProperty.call(e,r)?e[r]:t}}},$={data:void 0},L=function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"===typeof e[o]&&(r[o]=e[o])}var u,i=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:S.INIT}))throw new Error(O(12));if("undefined"===typeof r(void 0,{type:S.PROBE_UNKNOWN_ACTION()}))throw new Error(O(13))}))}(r)}catch(c){u=c}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var n=!1,o={},c=0;c<i.length;c++){var f=i[c],a=r[f],s=e[f],p=a(s,t);if("undefined"===typeof p){t&&t.type;throw new Error(O(14))}o[f]=p,n=n||p!==s}return(n=n||i.length!==Object.keys(e).length)?o:e}}({localDataManagerState:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,r=arguments.length>1?arguments[1]:void 0,o=_((n(e={},C.SAVE_LOCALDATA,(function(e){return e.data})),n(e,C.CLEAR_LOCALDATA,(function(){return $})),e))((function(){return t}))(r.type);return o(r)}});function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=function(){return{store:j(L,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(O(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=t.map((function(e){return e(o)}));return n=P.apply(void 0,u)(r.dispatch),w(w({},r),{},{dispatch:n})}}}(N))}}().store,R=function(e){var t=e.Component,r=e.pageProps;return(0,d.jsxs)(p,{store:M,children:[(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,d.jsx)(b,{children:(0,d.jsx)(t,D({},r))})]})}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6390)}])},3498:function(){},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,a=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,w=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,m=r?Symbol.for("react.scope"):60119;function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case p:case u:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case a:case l:case v:case b:case f:return e;default:return t}}case o:return t}}}function S(e){return g(e)===p}t.AsyncMode=s,t.ConcurrentMode=p,t.ContextConsumer=a,t.ContextProvider=f,t.Element=n,t.ForwardRef=l,t.Fragment=u,t.Lazy=v,t.Memo=b,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=y,t.isAsyncMode=function(e){return S(e)||g(e)===s},t.isConcurrentMode=S,t.isContextConsumer=function(e){return g(e)===a},t.isContextProvider=function(e){return g(e)===f},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===l},t.isFragment=function(e){return g(e)===u},t.isLazy=function(e){return g(e)===v},t.isMemo=function(e){return g(e)===b},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===c},t.isStrictMode=function(e){return g(e)===i},t.isSuspense=function(e){return g(e)===y},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===p||e===c||e===i||e===y||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===f||e.$$typeof===a||e.$$typeof===l||e.$$typeof===w||e.$$typeof===O||e.$$typeof===m||e.$$typeof===h)},t.typeOf=g},9864:function(e,t,r){"use strict";e.exports=r(9921)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var r=e.O();_N_E=r}]);