module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.arrayOfObjects,n=e.dataInOnePage;return r.default.createElement(o.default,{arrayOfObjects:t,dataInOnePage:n})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=l(o),i=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(i.default,{obj:this.props.arrayOfObjects,dataInOnePage:this.props.dataInOnePage})}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=l(o),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={currPage:1},n.displayData=n.displayData.bind(n),n.exportAdvancedResult=n.exportAdvancedResult.bind(n),n.onPageChanged=n.onPageChanged.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"exportAdvancedResult",value:function(){var e,t,n,r,o,a,i,l,s={data:this.props.obj};if(null==(a=s.data||null)||!a.length)return null;r=s.columnDelimiter||",",o=s.lineDelimiter||"\n",n=Object.keys(a[0]),e="",e+=n.join(r),e+=o,a.map(function(a){t=0,n.map(function(n){t>0&&(e+=r),e+=a[n],t++}),e+=o}),null!=e&&(e.match(/^data:text\/csv/i)||(e="data:text/csv;charset=utf-8,"+e),i=encodeURI(e),(l=document.createElement("a")).setAttribute("href",i),l.setAttribute("download","reports.csv"),l.click())}},{key:"displayData",value:function(){var e=this.state.currPage*this.props.dataInOnePage,t=e-this.props.dataInOnePage;if(this.props.obj.length){var n=this.props.obj.slice(t,e),r=Object.keys(this.props.obj[0]);return n.map(function(e,t){return a.default.createElement("tr",null,r.map(function(t){return a.default.createElement("td",{style:{width:"6%",fontSize:"14px",verticalAlign:"middle"}},e[t])}))})}}},{key:"onPageChanged",value:function(e){this.setState({currPage:e})}},{key:"render",value:function(){console.log("State",this.state),console.log("Props",this.props);var e=Object.keys(this.props.obj[0]);return a.default.createElement("div",{align:"center"},a.default.createElement("div",{className:"content",style:{paddingRight:"10%"}},a.default.createElement("div",{style:{width:"80%",float:"left",padding:"10px"}},a.default.createElement("div",{className:"infoData",style:{float:"left",display:"inline-block",paddingLeft:"15%"}},this.state.currPage,"/",Math.ceil(this.props.obj.length/this.props.dataInOnePage)," Page(s) (",this.props.obj.length," Records)"),a.default.createElement("div",{className:"exportCSV",style:{float:"right",marginRight:"-10%"}},a.default.createElement("button",{onClick:this.exportAdvancedResult},"Export as CSV"))),a.default.createElement("div",{style:{width:"80%"}},a.default.createElement("table",null,a.default.createElement("tr",null,e.map(function(e){return a.default.createElement("th",{style:{width:"6%",fontWeight:"bold",fontSize:"14px",verticalAlign:"middle"}},e)})),this.displayData())),this.props.obj.length>this.props.dataInOnePage?a.default.createElement("div",{style:{width:"80%",float:"left",paddingLeft:"35%",paddingTop:"10px",paddingBottom:"20px"}},a.default.createElement(i.default,{onPageChanged:this.onPageChanged,presentPage:this.state.currPage,data:this.props.obj,dataInOnePage:this.props.dataInOnePage,pageNeighbours:1})):null))}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(5);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={currentPage:1},n.limits=n.limits.bind(n),n.getPageNumber=n.getPageNumber.bind(n),n.gotoPage=n.gotoPage.bind(n),n.handleNavigation=n.handleNavigation.bind(n),n.moveLeft=n.moveLeft.bind(n),n.moveRight=n.moveRight.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"limits",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=e,o=[];r<=t;)o.push(r),r+=n;return o}},{key:"getPageNumber",value:function(){var e=Math.ceil(this.props.data.length/this.props.dataInOnePage),t=this.props.presentPage,n=this.props.pageNeighbours,r=2*n+3;if(e>r+2){var o=[],a=t-n,i=t+n,s=e-1,u=a>2?a:2,c=i<s?i:s,f=r-(o=this.limits(u,c)).length-1,p=u>2,d=c<s,h="LEFT";if(p&&!d){var g=this.limits(u-f,u-1);o=[h].concat(l(g),l(o))}else if(!p&&d){var b=this.limits(c+1,c+f);o=[].concat(l(o),l(b),["RIGHT"])}else p&&d&&(o=[h].concat(l(o),["RIGHT"]));return[1].concat(l(o),[e])}return this.limits(1,e)}},{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"gotoPage",value:function(e){var t=this.props.onPageChanged,n=void 0===t?function(e){return e}:t,r=Math.max(0,Math.min(e,Math.ceil(this.props.data.length/this.props.dataInOnePage)));this.setState({currentPage:r},function(){return n(r)})}},{key:"handleNavigation",value:function(e,t){t.preventDefault(),this.gotoPage(e)}},{key:"moveLeft",value:function(e){e.preventDefault(),this.gotoPage(this.state.currentPage-2*this.props.pageNeighbours-1)}},{key:"moveRight",value:function(e){e.preventDefault(),this.gotoPage(this.state.currentPage+2*this.props.pageNeighbours+1)}},{key:"render",value:function(){var e=this;if(console.log("props page",this.props),!this.props.data.length)return null;if(this.props.data.length===this.props.dataInOnePage)return null;var t=this.state.currentPage,n=this.getPageNumber();return console.log("Pages list",n),i.default.createElement(a.Fragment,null,i.default.createElement("nav",null,i.default.createElement("ul",null,n.map(function(n,r){return"LEFT"===n?i.default.createElement("li",{key:r,className:"page-item"},i.default.createElement("a",{href:"#",className:"page-link",onClick:e.moveLeft},i.default.createElement("span",{"aria-hidden":"true"},"«"),i.default.createElement("span",null,"Previous"))):"RIGHT"===n?i.default.createElement("li",{key:r,className:"page-item"},i.default.createElement("a",{href:"#",className:"page-link",onClick:e.moveRight},i.default.createElement("span",{"aria-hidden":"true"},"»"),i.default.createElement("span",null,"Next"))):i.default.createElement("li",{key:r,className:"page-item"+(t===n?" active":"")},i.default.createElement("a",{href:"#",className:"page-link",onClick:function(t){return e.handleNavigation(n,t)}},n))}))))}}]),t}();t.default=s},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(8)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(7)(!0)).push([e.i," content {\n  font-size: 15px;\n  text-align: left;\n  background-color: #f7f4f4;\n  width: 80%;\n  height: 50%;\n  border: 1px solid #b5b5b5;\n  overflow: hidden;\n  font-family: Calibri;\n  margin-top: 4%;\n}\n\ninfoData{\n  width:50%;\n  display:inline-block;\n  float:left;\n}\n\nexportCSV{\n  width:30%;\n  float:right;\n  display:inline-block;\n}\n\ntable{\n  border: 1px solid black;\n  width: 100%\n}\nth, td{\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n  li {\n    color: #fff;\n    display: flex;\n  }\n\n  ul li.page-item.active a.page-link {\n    color: #445565 !important;\n    background-color: #e3e7eb !important;\n    border-color: #ced4da !important;\n  }\n  ul a.page-link {\n    padding: 0.75rem 1rem;\n    min-width: 1.0rem;\n    text-align: center;\n    box-shadow: none !important;\n    border-color: #ced4da !important;\n    color: #6b88a4;\n    font-weight: 900;\n    font-size: 1rem;\n  }\n  ul a.page-link:hover {\n    background-color: #f4f4f4;\n  }\n  li:first-child a {\n    border-radius: 5px 0 0 5px;\n  }\n  li:last-child a {\n    border-radius: 0 5px 0;\n    border-right: 2px solid gray;\n  }\n  a {\n    background-color: white;\n    padding: 5px 10px;\n    border: 2px solid gray;\n    border-right: 0;\n    text-decoration:none;\n  }","",{version:3,sources:["C:/Users/vinay/Desktop/publish/react-datatable-pagination/src/App.css"],names:[],mappings:"CAAC;EACC,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;CAChB;;AAED;EACE,UAAU;EACV,qBAAqB;EACrB,WAAW;CACZ;;AAED;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;CACtB;;AAED;EACE,wBAAwB;EACxB,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,aAAa;CACd;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,iBAAiB;EACjB,WAAW;EACX,UAAU;EACV,cAAc;CACf;EACC;IACE,YAAY;IACZ,cAAc;GACf;;EAED;IACE,0BAA0B;IAC1B,qCAAqC;IACrC,iCAAiC;GAClC;EACD;IACE,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,4BAA4B;IAC5B,iCAAiC;IACjC,eAAe;IACf,iBAAiB;IACjB,gBAAgB;GACjB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,2BAA2B;GAC5B;EACD;IACE,uBAAuB;IACvB,6BAA6B;GAC9B;EACD;IACE,wBAAwB;IACxB,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;IAChB,qBAAqB;GACtB",file:"App.css",sourcesContent:[" content {\n  font-size: 15px;\n  text-align: left;\n  background-color: #f7f4f4;\n  width: 80%;\n  height: 50%;\n  border: 1px solid #b5b5b5;\n  overflow: hidden;\n  font-family: Calibri;\n  margin-top: 4%;\n}\n\ninfoData{\n  width:50%;\n  display:inline-block;\n  float:left;\n}\n\nexportCSV{\n  width:30%;\n  float:right;\n  display:inline-block;\n}\n\ntable{\n  border: 1px solid black;\n  width: 100%\n}\nth, td{\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n  li {\n    color: #fff;\n    display: flex;\n  }\n\n  ul li.page-item.active a.page-link {\n    color: #445565 !important;\n    background-color: #e3e7eb !important;\n    border-color: #ced4da !important;\n  }\n  ul a.page-link {\n    padding: 0.75rem 1rem;\n    min-width: 1.0rem;\n    text-align: center;\n    box-shadow: none !important;\n    border-color: #ced4da !important;\n    color: #6b88a4;\n    font-weight: 900;\n    font-size: 1rem;\n  }\n  ul a.page-link:hover {\n    background-color: #f4f4f4;\n  }\n  li:first-child a {\n    border-radius: 5px 0 0 5px;\n  }\n  li:last-child a {\n    border-radius: 0 5px 0;\n    border-right: 2px solid gray;\n  }\n  a {\n    background-color: white;\n    padding: 5px 10px;\n    border: 2px solid gray;\n    border-right: 0;\n    text-decoration:none;\n  }"],sourceRoot:""}])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,u=0,c=[],f=n(9);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(m(r.parts[i],t))}else{var l=[];for(i=0;i<r.parts.length;i++)l.push(m(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:l}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function h(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function b(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),A(t,e.attrs),h(e,t),t}function A(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var i=u++;n=s||(s=b(t)),r=C.bind(null,n,i,!1),o=C.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",A(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,n,t),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(l=a[i.id]).refs--,r.push(l)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete a[l.id]}}}};var v,y=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function C(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);