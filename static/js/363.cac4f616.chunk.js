"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[363],{35:function(r,e,n){n.d(e,{EY:function(){return u},vw:function(){return c},LP:function(){return l}});var t=n(5861),a=n(7757),o=n.n(a),i=n(4569),s=n.n(i),c=function(){var r=(0,t.Z)(o().mark((function r(e){var n,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.poap.xyz/events?name=".concat(e),r.next=3,s().get(n);case 3:if(!(t=r.sent)){r.next=7;break}return console.log("Get events service:",t),r.abrupt("return",t.data);case 7:return r.abrupt("return",!1);case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),u=function(){var r=(0,t.Z)(o().mark((function r(e){var n,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.poap.xyz/events/id/".concat(e),r.next=3,s().get(n);case 3:if(!(t=r.sent)){r.next=7;break}return console.log("Get event service:",t),r.abrupt("return",t.data);case 7:return r.abrupt("return",!1);case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(o().mark((function r(e){var n,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.poap.xyz/token/".concat(e),r.next=3,s().get(n);case 3:if(!(t=r.sent)){r.next=7;break}return console.log("Get event service:",t),r.abrupt("return",t.data);case 7:return r.abrupt("return",!1);case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},1363:function(r,e,n){n.r(e),n.d(e,{default:function(){return tr}});var t=n(5861),a=n(885),o=n(168),i=n(7757),s=n.n(i),c=n(3366),u=n(7462),l=n(2791),p=n(8182),d=n(767),f=n(2554),v=n(4036),A=n(3736),x=n(7630),h=n(5159);function g(r){return(0,h.Z)("MuiCircularProgress",r)}(0,n(208).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m,k,b,Z,y,w,C,S,P,D,j=n(184),N=["className","color","disableShrink","size","style","thickness","value","variant"],q=44,G=(0,f.F4)(y||(y=m||(m=(0,o.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),V=(0,f.F4)(w||(w=k||(k=(0,o.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),E=(0,x.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(r,e){var n=r.ownerState;return[e.root,e[n.variant],e["color".concat((0,v.Z)(n.color))]]}})((function(r){var e=r.ownerState,n=r.theme;return(0,u.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:n.transitions.create("transform")},"inherit"!==e.color&&{color:n.palette[e.color].main})}),(function(r){return"indeterminate"===r.ownerState.variant&&(0,f.iv)(C||(C=b||(b=(0,o.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),G)})),K=(0,x.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(r,e){return e.svg}})({display:"block"}),O=(0,x.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(r,e){var n=r.ownerState;return[e.circle,e["circle".concat((0,v.Z)(n.variant))],n.disableShrink&&e.circleDisableShrink]}})((function(r){var e=r.ownerState,n=r.theme;return(0,u.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(r){var e=r.ownerState;return"indeterminate"===e.variant&&!e.disableShrink&&(0,f.iv)(S||(S=Z||(Z=(0,o.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),V)})),z=l.forwardRef((function(r,e){var n=(0,A.Z)({props:r,name:"MuiCircularProgress"}),t=n.className,a=n.color,o=void 0===a?"primary":a,i=n.disableShrink,s=void 0!==i&&i,l=n.size,f=void 0===l?40:l,x=n.style,h=n.thickness,m=void 0===h?3.6:h,k=n.value,b=void 0===k?0:k,Z=n.variant,y=void 0===Z?"indeterminate":Z,w=(0,c.Z)(n,N),C=(0,u.Z)({},n,{color:o,disableShrink:s,size:f,thickness:m,value:b,variant:y}),S=function(r){var e=r.classes,n=r.variant,t=r.color,a=r.disableShrink,o={root:["root",n,"color".concat((0,v.Z)(t))],svg:["svg"],circle:["circle","circle".concat((0,v.Z)(n)),a&&"circleDisableShrink"]};return(0,d.Z)(o,g,e)}(C),P={},D={},G={};if("determinate"===y){var V=2*Math.PI*((q-m)/2);P.strokeDasharray=V.toFixed(3),G["aria-valuenow"]=Math.round(b),P.strokeDashoffset="".concat(((100-b)/100*V).toFixed(3),"px"),D.transform="rotate(-90deg)"}return(0,j.jsx)(E,(0,u.Z)({className:(0,p.Z)(S.root,t),style:(0,u.Z)({width:f,height:f},D,x),ownerState:C,ref:e,role:"progressbar"},G,w,{children:(0,j.jsx)(K,{className:S.svg,ownerState:C,viewBox:"".concat(22," ").concat(22," ").concat(q," ").concat(q),children:(0,j.jsx)(O,{className:S.circle,style:P,ownerState:C,cx:q,cy:q,r:(q-m)/2,fill:"none",strokeWidth:m})})}))})),F=n(4554),M=n(890),W=n(4603),Y=n(7613),T=n(4569),B=n.n(T),H=function(){var r=(0,t.Z)(s().mark((function r(e){var n,t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://blockscout.com/xdai/mainnet/api?module=account&action=tokentx&address=".concat(e),r.next=3,B().get(n);case 3:if(!(t=r.sent)){r.next=7;break}return console.log("Get Token Transactions service:",t),r.abrupt("return",t.data);case 7:return r.abrupt("return",!1);case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),L=H,Q=n(7229),R=n(35),U=n(1889),X=n(7621),I=n(6871),J=n(9802),_=(0,x.ZP)(X.Z)(P||(P=(0,o.Z)(["\n  background: #f7f7f8;\n  border: 1px solid #f0f0f1;\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  padding: ","px;\n  min-height: 230px;\n"])),Y.Z.md),$=(0,x.ZP)("img")({maxWidth:"100%"});function rr(r){var e=r.poap,n=e.event,t=e.supply,a=(0,I.s0)();return(0,j.jsx)(_,{onClick:function(){a("/event/".concat(n.id))},children:(0,j.jsxs)(F.Z,{display:"flex",flexDirection:"column",children:[(0,j.jsxs)(F.Z,{display:"flex",justifyContent:"space-between",children:[(0,j.jsx)(M.Z,{variant:"h6",children:"Supply ".concat(t.total)}),(0,j.jsx)(M.Z,{variant:"h6",children:"#".concat(t.order)})]}),n.image_url?(0,j.jsx)($,{src:n.image_url,alt:""}):(0,j.jsx)($,{src:J,alt:""}),(0,j.jsx)(M.Z,{variant:"h6",children:n.name})]})})}function er(r){var e=r.poaps;return(0,j.jsx)(U.ZP,{container:!0,spacing:4,children:e.map((function(r){return(0,j.jsx)(U.ZP,{item:!0,sm:12,md:6,lg:4,xl:2,children:(0,j.jsx)(rr,{poap:r})},r.id)}))})}var nr=(0,W.ZP)(F.Z)(D||(D=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-right: ","px;\n  margin-left: ","px;\n  margin-top: ","px;\n  margin-bottom: ","px;\n"])),Y.Z.xxl,Y.Z.xxl,Y.Z.xxl,Y.Z.lg);function tr(){var r=(0,Q.Z)(),e=r.publicAddress,n=r.connected,o=(0,l.useState)([]),i=(0,a.Z)(o,2),c=i[0],u=i[1],p=(0,l.useState)(!1),d=(0,a.Z)(p,2),f=d[0],v=d[1];return(0,l.useEffect)((function(){var r=function(){var r=(0,t.Z)(s().mark((function r(){var n,a,o,i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return v(!0),r.next=3,L(e);case 3:if(n=r.sent,console.log("tokenTransactions",n),!n.result){r.next=16;break}return a=n.result.filter((function(r){return"POAP"===r.tokenName})),console.log("poapTransactions",a),o=a.map((function(r){return r.tokenID})),console.log("Token ids",o),r.next=12,Promise.all(o.map(function(){var r=(0,t.Z)(s().mark((function r(e){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,R.LP)(e));case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()));case 12:i=r.sent,console.log("poaps",i),v(!1),u(i);case 16:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();n&&r()}),[e]),(0,j.jsxs)(nr,{children:[(0,j.jsxs)(M.Z,{variant:"h4",style:{marginBottom:"".concat(Y.Z.lg,"px")},children:[" ","My Gallery"," "]}),f&&(0,j.jsx)(z,{}),!f&&0===c.length&&(0,j.jsx)(M.Z,{variant:"h6",children:"No Poaps found on connected wallet."}),!f&&c.length>0&&(0,j.jsx)(er,{poaps:c})]})}},9802:function(r){r.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=363.cac4f616.chunk.js.map