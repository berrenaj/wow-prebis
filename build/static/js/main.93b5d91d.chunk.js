(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(46)},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"INIT",function(){return b}),a.d(n,"LOADING_EQUIPMENT_START",function(){return d}),a.d(n,"LOADING_EQUIPMENT_SUCCESS",function(){return O}),a.d(n,"LOADING_EQUIPMENT_ERROR",function(){return j});var r={};a.r(r),a.d(r,"getEquipment",function(){return y});var c=a(0),l=a.n(c),s=a(25),i=a.n(s),o=a(2),u=a(3),m=a(5),p=a(4),h=a(6),f=a(15),E=a(19),b="INIT",d="LOADING_EQUIPMENT_START",O="LOADING_EQUIPMENT_SUCCESS",j="LOADING_EQUIPMENT_ERROR",v={EQUIPMENT:"https://script.google.com/macros/s/AKfycbwGCJ3sCW9z-f2DSyjwlBVcYL2r1MIvJSirRJd7qd8G40Va-X4/exec"},y=function(){return function(e){var t;e({type:d}),(t=v.EQUIPMENT,fetch(t,{mode:"cors",redirect:"follow"})).then(function(t){200===t.status?t.json().then(function(t){e({type:O,equipment:t})}):e({type:j})})}},g=Object(E.b)(function(e){return Object(f.a)({},e)},Object(f.a)({},r)),N=function(e){return l.a.createElement("h1",null,"WoW Pre-BiS!")},w=g(function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"NotFoundScreen"},l.a.createElement("h1",null,"Sorry :("),l.a.createElement("p",null,"Page not found"))}}]),t}(l.a.Component)),k=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},I=function(e,t){if(t.class){var a=function(e,t){var a=e[k(t)];if(a)return Object.keys(a.specs).forEach(function(e,t){a.specs[e].class=a,a.specs[e].getItems=function(){var t=[];return Object.keys(a.specs[e]).filter(function(t,n){return a.specs[e][t]&&Array.isArray(a.specs[e][t])}).forEach(function(n,r){t=t.concat(a.specs[e][n])}),t}}),a.getItems=function(){var e=[];return Object.keys(a.specs).forEach(function(t,n){e=e.concat(a.specs[t].getItems())}),e},a}(e,k(t.class));if(!a)return;return t.spec?a.specs[k(t.spec)]:a}},_=(a(38),function(e){return l.a.createElement("i",{className:"item__icon"+(e.size?" item__icon--"+e.size:""),style:{backgroundImage:"url(/img/icon/"+e.icon+".jpg)"}})}),C=function(e){return l.a.createElement("a",{className:"item item--quality".concat(e.quality),href:"https://classic.wowhead.com/item=".concat(e.id),target:"_blank",rel:"noopener noreferrer"},l.a.createElement(_,e),e.name)},S=function(e){var t=e.rows||[],a=e.headers||[],n=e.footers||[];if(!t.length&&!a.length)return null;var r,c=function(e,t){return e.map(function(e,a){var n={};return n.key=a,n.children=null,e!==Object(e)?n.children=e:e.constructor===Object&&e.data?n.children=e.data:n.children=e,l.a.createElement(t,n)})};return l.a.createElement("table",{className:e.className},a.length>0&&l.a.createElement("thead",null,l.a.createElement("tr",null,c(a,"th"))),t.length>0&&l.a.createElement("tbody",null,(r="td",t.filter(function(e){return e instanceof Object&&e.constructor===Object&&e.data}).map(function(e,t){var a=e.props||{};return a.key=t,l.a.createElement("tr",a,c(e.data,r))}))),n.length>0&&l.a.createElement("tfoot",null,l.a.createElement("tr",null,c(n,"td"))))},A=(a(39),function(e){var t,a,n,r=e.data.getItems();return l.a.createElement("header",{className:e.className},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,r.length," ",(t=r.length,a="item",n="items",1===t?a:n)," found"))}),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={items:e.items},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&this.setState({items:this.props.items})}},{key:"getRows",value:function(){return this.state.items.map(function(e,t){return{data:[l.a.createElement(C,e),l.a.createElement("span",{className:"label item--stat",title:"Level"},e.lvl),l.a.createElement("span",{className:"label item--stat",title:"Required Level"},e.reqlvl),l.a.createElement("span",{className:"label item--stat",title:"Armor"},e.armor),l.a.createElement("span",{className:"label item--stat",title:"Stamina"},e.stamina),l.a.createElement("span",{className:"label item--stat",title:"Spirit"},e.spirit),l.a.createElement("span",{className:"label item--stat",title:"Strength"},e.strength),l.a.createElement("span",{className:"label item--stat",title:"Agility"},e.agility),l.a.createElement("span",{className:"label item--stat",title:"Intellect"},e.intellect)]}})}},{key:"render",value:function(){return l.a.createElement(S,{className:"items",headers:["Name","Lvl","Req Lvl","Armor","Stamina","Spirit","Strength","Agility","Intellect"],rows:this.getRows()})}}]),t}(l.a.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={layout:"table"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getTableLayout",value:function(){return l.a.createElement(L,{items:this.props.data.getItems(),name:this.props.data.name})}},{key:"render",value:function(){return this.getTableLayout()}}]),t}(l.a.Component),q=g(function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=I(this.props.Data.equipment,this.props.match.params);return e?l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{title:e.name,data:e}),l.a.createElement(T,{data:e})):l.a.createElement(w,null)}}]),t}(l.a.Component)),D=g(function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=I(this.props.Data.equipment,this.props.match.params);return e?l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{title:e.name+" "+e.class.name,data:e}),l.a.createElement(T,{data:e})):l.a.createElement(w,null)}}]),t}(l.a.Component)),R=a(13),U=function(e){return e.class&&e.class.specs?Object.keys(e.class.specs).map(function(t,a){return l.a.createElement("li",{key:a},l.a.createElement(R.b,{to:{pathname:["/",e.class.name,"/",t].join("").toLowerCase()},activeClassName:"active",className:["c-wcl__spec","c-wcl__spec--"+t.toLowerCase()].join(" ")},t))}):null},P=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(R.b,{to:{pathname:"/"+this.props.class.name.toLowerCase()},className:["c-wcl","c-wcl--"+this.props.class.name.toLowerCase()].join(" "),activeClassName:"active"},this.props.class.name),l.a.createElement("ul",{className:"c-wcl__specs"},l.a.createElement(U,{class:this.props.class})))}}]),t}(l.a.Component),M=function(e){return l.a.createElement("ul",e,e.children.map(function(e,t){return l.a.createElement("li",{key:t},e)}))},G=function(e){return l.a.createElement("nav",{className:e.className},l.a.createElement(M,null,e.children))},Q=g(function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.Data.equipment);return l.a.createElement(G,null,t.map(function(t,a){return l.a.createElement(P,{class:e.props.Data.equipment[t],key:a})}))}}]),t}(l.a.Component)),x=a(14),F=(a(45),g(function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(m.a)(this,Object(p.a)(t).call(this,e)),e.getEquipment(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(this.props.Data.status===d)return l.a.createElement("div",{className:"app-loading"});var e=[l.a.createElement(l.a.Fragment,{key:"home"},l.a.createElement(R.b,{to:{pathname:"/"}},"Home"),l.a.createElement(Q,null))];return l.a.createElement("div",{className:"App container"},l.a.createElement(N,null),l.a.createElement(R.a,null,l.a.createElement(G,null,e),l.a.createElement(x.c,null,l.a.createElement(x.a,{exact:!0,path:"/",render:function(){return l.a.createElement(l.a.Fragment,null)}}),l.a.createElement(x.a,{exact:!0,path:"/:class",component:q}),l.a.createElement(x.a,{exact:!0,path:"/:class/:spec",component:D}),l.a.createElement(x.a,{render:function(){return l.a.createElement(w,null)}}))))}}]),t}(l.a.Component)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(12),W=a(28),B={status:b},z=Object(J.c)({Data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(Object.keys(n).indexOf(t.type)>=0&&(e.status=t.type),t.type){case O:return Object(f.a)({},e,{equipment:t.equipment});default:return Object(f.a)({},e)}}});i.a.render(l.a.createElement(E.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(J.d)(z,e,Object(J.a)(W.a))}()},l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.93b5d91d.chunk.js.map