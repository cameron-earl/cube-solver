(this["webpackJsonpcube-solver"]=this["webpackJsonpcube-solver"]||[]).push([[0],{1:function(e,n,t){e.exports={cubeContainer:"Cube_cubeContainer__3WmQR",viewContainer:"Cube_viewContainer__1Th51",side:"Cube_side__1h9vi",sideContainer:"Cube_sideContainer__2PtPw",white:"Cube_white__2ofh7",orange:"Cube_orange__2ozpk",blue:"Cube_blue__17vrH",yellow:"Cube_yellow__2sOoc",green:"Cube_green__1gGYf",red:"Cube_red__SuXBa",square:"Cube_square__2kjBO"}},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var c,a,r=t(2),i=t.n(r),o=t(9),u=t.n(o),s=(t(15),t(8)),l=t(5),b=t(3),j=t(10),d=function(e,n,t){e=Object(l.a)(e);var c,a=Object(j.a)(t);try{for(a.s();!(c=a.n()).done;){var r=c.value;e[r[0]]=n[r[1]]}}catch(i){a.e(i)}finally{a.f()}return e};!function(e){e[e.white=0]="white",e[e.blue=1]="blue",e[e.orange=2]="orange",e[e.green=3]="green",e[e.red=4]="red",e[e.yellow=5]="yellow"}(a||(a={}));var v=a.white,_=a.blue,f=a.orange,O=a.green,h=a.red,C=a.yellow,g=[v,_,f,O,h,C],w=function(e){return new Array(9).fill(e)},p=(c={},Object(b.a)(c,v,[v,_,f,O,h]),Object(b.a)(c,_,[_,f,v,h,C]),Object(b.a)(c,f,[f,v,_,C,O]),Object(b.a)(c,O,[O,C,h,v,f]),Object(b.a)(c,h,[h,O,C,_,v]),Object(b.a)(c,C,[C,h,O,f,_]),c),m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,t=e.map((function(e){return Object(l.a)(e)})),c=p[n],a=e[c[0]];return t[c[0]]=[a[6],a[3],a[0],a[7],a[4],a[1],a[8],a[5],a[2]],t[c[1]]=d(e[c[1]],e[c[2]],[[6,0],[3,1],[0,2]]),t[c[2]]=d(e[c[2]],e[c[3]],[[0,8],[1,7],[2,6]]),t[c[3]]=d(e[c[3]],e[c[4]],[[8,2],[7,5],[6,8]]),t[c[4]]=d(e[c[4]],e[c[1]],[[2,6],[5,3],[8,0]]),t},x=function(e,n,t){var c=Object(l.a)(e),a=e[e.length-1];if(a&&a[0]===n){var r=(a[1]+t)%4;0===r?c.pop():c[c.length-1][1]=r}else c.push([n,t]);return c},y=t(1),N=t.n(y),k=t(0);var S=function(e){var n=e.log.map((function(e,n){return Object(k.jsxs)("div",{children:[a[e[0]]," - ",e[1]]})}));return Object(k.jsx)("div",{children:n})};var q=function(){var e=Object(r.useState)(g.map(w)),n=Object(s.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)([]),o=Object(s.a)(i,2),u=o[0],l=o[1];console.log(t);var b=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(n){var r;a?(r=m(t,e),r=m(r,e),r=m(r,e),n.preventDefault()):r=m(t,e),c(r),l(x(u,e,a?3:1))}},j=function(e){return function(n,t){return Object(k.jsx)("div",{className:"".concat(N.a.square," ").concat(N.a[a[n]]),onClick:b(e,t),onContextMenu:b(e,t,!0)},"".concat(a[e],"-").concat(t,"-").concat(n,"-square"))}},d=function(e){return function(n,t){var c=3*e+t;return Object(k.jsx)("div",{className:"".concat(N.a[a[c]]," ").concat(N.a.sideContainer),children:Object(k.jsx)("div",{className:"".concat(N.a[a[c]]," ").concat(N.a.side),children:n.map(j(t))},"".concat(a[c],"-side"))},"".concat(c,"-sideContainer"))}},v=t.slice(0,3).map(d(0)),_=t.slice(3).map(d(1));return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:N.a.cubeContainer,children:[Object(k.jsx)("div",{className:N.a.viewContainer,children:v}),Object(k.jsx)("div",{className:N.a.viewContainer,children:_})]}),Object(k.jsx)(S,{log:u})]})};var B=function(){return Object(k.jsx)(q,{})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};u.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root")),F()}},[[17,1,2]]]);
//# sourceMappingURL=main.8303c561.chunk.js.map