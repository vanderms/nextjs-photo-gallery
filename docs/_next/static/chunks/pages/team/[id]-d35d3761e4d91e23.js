(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{9337:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[id]",function(){return t(9066)}])},1513:function(n,e,t){"use strict";var s=t(5893);e.Z=function(){return(0,s.jsx)("section",{className:"section-not-found",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{children:"404"}),(0,s.jsx)("span",{className:"sep"}),(0,s.jsx)("div",{className:"message",children:"Page not found"})]})})}},9066:function(n,e,t){"use strict";t.r(e);var s=t(5666),r=t.n(s),a=t(5893),c=t(1163),i=t(7294),u=t(1513);function o(n,e,t,s,r,a,c){try{var i=n[a](c),u=i.value}catch(o){return void t(o)}i.done?e(u):Promise.resolve(u).then(s,r)}e.default=function(n){var e=(0,c.useRouter)(),t=(0,i.useState)(null),s=t[0],d=t[1];return(0,i.useEffect)((function(){var n,t,s=(t=r().mark((function n(){var t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com/users/".concat(e.query.id));case 2:if(!(t=n.sent).ok){n.next=12;break}return n.t0=d,n.next=7,t.json();case 7:n.t1=n.sent,n.t2={found:!0,data:n.t1},(0,n.t0)(n.t2),n.next=13;break;case 12:d({found:!1});case 13:case"end":return n.stop()}}),n)})),function(){var n=this,e=arguments;return new Promise((function(s,r){var a=t.apply(n,e);function c(n){o(a,s,r,c,i,"next",n)}function i(n){o(a,s,r,c,i,"throw",n)}c(void 0)}))});(null===e||void 0===e||null===(n=e.query)||void 0===n?void 0:n.id)&&s()}),[e]),null==s?null:0==s.found?(0,a.jsx)(u.Z,{}):(0,a.jsxs)("section",{className:"details",children:[(0,a.jsx)("h1",{children:s.data.name}),(0,a.jsx)("p",{children:s.data.email}),(0,a.jsx)("p",{children:s.data.address.city})]})}},1163:function(n,e,t){n.exports=t(387)}},function(n){n.O(0,[774,888,179],(function(){return e=9337,n(n.s=e);var e}));var e=n.O();_N_E=e}]);