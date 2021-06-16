(this["webpackJsonpshapes-generator"]=this["webpackJsonpshapes-generator"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=n(5),o=(n(15),n(16),n(0)),u=function(t){var e=t.shapeDetails,n=e.attributes,a=e.name,c=e.type;return Object(o.jsx)(o.Fragment,{children:function(){var t={};return t=function(t){var e=n.color;return t.border="1px solid ".concat(e),t.borderRadius="2px",t}(t),Object(o.jsxs)(o.Fragment,{children:["verticalLine"===c&&Object(o.jsx)(h,{shapeStyles:t,id:a,attributes:n}),"horizontalLine"===c&&Object(o.jsx)(b,{shapeStyles:t,id:a,attributes:n}),"normalLine"===c&&Object(o.jsx)(p,{shapeStyles:t,id:a,attributes:n}),"rectongle"===c&&Object(o.jsx)(l,{shapeStyles:t,id:a,attributes:n}),"circle"===c&&Object(o.jsx)(j,{shapeStyles:t,id:a,attributes:n})]})}()})},l=function(t){var e=t.shapeStyles,n=t.name,a=t.attributes;return Object(o.jsx)(o.Fragment,{children:function(){var t="".concat(a.x,"px"),c="".concat(a.y,"px");return e.left=t,e.top=c,e.height="".concat(a.height,"px"),e.width="".concat(a.width,"px"),Object(o.jsx)("div",{className:"shape",style:e,id:n})}()})},j=function(t){var e=t.shapeStyles,n=t.name,a=t.attributes;return Object(o.jsx)(o.Fragment,{children:function(){var t="".concat(a.centerX-a.radius,"px"),c="".concat(a.centerY-a.radius,"px");return e.left=t,e.top=c,e.height="".concat(2*a.radius,"px"),e.width="".concat(2*a.radius,"px"),e.borderRadius="100px",Object(o.jsx)("div",{className:"shape",style:e,id:n})}()})},b=function(t){var e=t.shapeStyles,n=t.name,a=t.attributes;return Object(o.jsx)(o.Fragment,{children:function(){var t="".concat(a.x,"px"),c="".concat(a.y,"px");return e.left=t,e.top=c,e.width="".concat(a.length,"px"),e.height="0px",Object(o.jsx)("div",{className:"shape",style:e,id:n})}()})},h=function(t){var e=t.shapeStyles,n=t.name,a=t.attributes;return Object(o.jsx)(o.Fragment,{children:function(){var t="".concat(a.x,"px"),c="".concat(a.y,"px");return e.left=t,e.top=c,e.width="0px",e.height="".concat(a.length,"px"),Object(o.jsx)("div",{className:"shape",style:e,id:n})}()})},p=function(t){var e=t.shapeStyles,n=t.name,a=t.attributes;return Object(o.jsx)(o.Fragment,{children:function(){var t=a.x1,c=a.y1,r=a.x2,s=a.y2,i=s-c,u=r-t,l=u*u+i*i,j=Math.sqrt(l),b=180*Math.atan2(s-c,r-t)/Math.PI;e.width="".concat(j,"px"),e.height="0px";var h="".concat(a.x1,"px"),p="".concat(a.y1,"px"),d={transform:"rotate(".concat(b,"deg)"),width:"1px",height:"1px",position:"absolute",top:p,left:h};return Object(o.jsx)("div",{style:d,children:Object(o.jsx)("div",{className:"shape",style:e,id:n})})}()})},d=function(t){var e=t.shapes;return Object(o.jsx)("div",{className:"drawing-panel",id:"drawingPanel",children:e.map((function(t,e){return Object(o.jsx)(u,{shapeDetails:t},e)}))})},x=n(10),m=n(7),O=n.n(m),v=n(2),f=n(9),y=(n(19),function(t){var e=t.name,n=t.attributes,a=t.type,c=t.onAttributesChanged,r=function(t){var r=t.target.name,s=t.target.value,i={name:e,type:a,attributes:Object(x.a)({},n)};i.attributes[r]=s,c(i)};return Object(o.jsxs)("div",{className:"shape-detail-container",children:[Object(o.jsxs)("div",{className:"general-info-container",children:[Object(o.jsx)("p",{className:"shape-name",children:e}),Object(o.jsx)("p",{className:"shape-type",children:a})]}),Object(o.jsx)("div",{className:"attributes-container",children:function(){var t=[];for(var a in n)t.push(Object(o.jsxs)("div",{className:"attribute",children:[Object(o.jsx)("label",{children:a}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:a,id:e,defaultValue:n[a],onChange:r})]},t.length));return t}()})]},e)}),g=function(t){var e=t.onShapesUpdated,n=Object(a.useRef)([]),c=Object(a.useState)([]),r=Object(i.a)(c,2),s=r[0],u=r[1];Object(a.useEffect)((function(){return e(s)}),[s]);var l=function(){var t=Object(f.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.current.map((function(t){if(e.name!==t.name)return t;for(var n in t.attributes)t.attributes[n]=e.attributes[n];return t})),u(Object(v.a)(n.current));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"hierarchy-panel",children:[Object(o.jsx)("div",{className:"shapes-details-container",children:n.current.map((function(t,e){return Object(o.jsx)(y,{onAttributesChanged:l,name:t.name,type:t.type,attributes:t.attributes},e)}))}),Object(o.jsxs)("div",{className:"buttons-container",children:[Object(o.jsx)("div",{className:"button horizontal-line",onClick:function(){var t=Date.now(),e={name:"horizontalLine".concat(t),type:"horizontalLine",attributes:{x:0,y:0,length:0,color:"#000000"}};n.current=[].concat(Object(v.a)(n.current),[e]),u(n.current)}}),Object(o.jsx)("div",{className:"button vertical-line",onClick:function(){var t=Date.now(),e={name:"verticalLine".concat(t),type:"verticalLine",attributes:{x:0,y:0,length:0,color:"#000000"}};n.current=[].concat(Object(v.a)(n.current),[e]),u(n.current)}}),Object(o.jsx)("div",{className:"button rectongle",onClick:function(){var t=Date.now(),e={name:"rectongle".concat(t),type:"rectongle",attributes:{x:0,y:0,width:0,height:0,color:"#000000"}};n.current=[].concat(Object(v.a)(n.current),[e]),u(n.current)}}),Object(o.jsx)("div",{className:"button normal-line",onClick:function(){var t=Date.now(),e={name:"normalLine".concat(t),type:"normalLine",attributes:{x1:0,y1:0,x2:0,y2:0,color:"#000000"}};n.current=[].concat(Object(v.a)(n.current),[e]),u(n.current)}}),Object(o.jsx)("div",{className:"button circle",onClick:function(){var t=Date.now(),e={name:"circle".concat(t),type:"circle",attributes:{centerX:0,centerY:0,radius:0,color:"#000000"}};n.current=[].concat(Object(v.a)(n.current),[e]),u(n.current)}})]})]})},N=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{className:"panels-container",children:[Object(o.jsx)(g,{onShapesUpdated:function(t){return c(t)}}),Object(o.jsx)(d,{shapes:n})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b0e1948a.chunk.js.map