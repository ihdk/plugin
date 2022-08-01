!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports=JSON.parse('{"apiVersion":1,"name":"citadela-pro/posts","category":"citadela-posts-blocks","icon":"text","attributes":{"category":{"type":"string","default":""},"count":{"type":"number","default":12},"title":{"type":"string","default":""},"layout":{"type":"string","default":"simple"},"size":{"type":"string","default":"medium"},"showDate":{"type":"boolean","default":true},"showFeaturedImage":{"type":"boolean","default":true},"showDescription":{"type":"boolean","default":true},"showCategories":{"type":"boolean","default":true},"showLocations":{"type":"boolean","default":false},"postsOrderBy":{"type":"string","default":"date"},"postsOrder":{"type":"string","default":"DESC"},"stickyPostsFirst":{"type":"boolean","default":false},"borderWidth":{"type":"string","default":"none"},"borderColor":{"type":"string","default":""},"backgroundColor":{"type":"string","default":""},"textColor":{"type":"string","default":""},"decorColor":{"type":"string","default":""},"dateColor":{"type":"string","default":""},"skipStartPosts":{"type":"number","default":0}},"example":{"attributes":{"count":4,"layout":"box","size":"medium"}},"editorScript":"citadela-posts-block"}')},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t);var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(f,e);var t,n,r,o,a=(t=f,function(){var e,n=m(t);if(u()){var r=m(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function f(){return c(this,f),a.apply(this,arguments)}return n=f,(r=[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.count,r=t.layout,o=t.borderColor,a=t.backgroundColor,c=t.textColor,i=t.decorColor,s=t.dateColor,p="undefined"!=typeof CitadelaDirectorySettings,u=l({},i?{color:i}:{}),m=l(l(l({},"simple"==r&&c?{color:c}:{}),"simple"==r&&a?{backgroundColor:a}:{}),"simple"==r&&o?{borderColor:o}:{}),f=l(l(l({},"simple"!=r&&c?{color:c}:{}),"simple"!=r&&a?{backgroundColor:a}:{}),"simple"!=r&&o?{borderColor:o}:{}),d=l({},"simple"!=r&&o?{borderColor:o}:{}),y=l(l(l({},"simple"!=r&&o?{borderColor:o}:{}),i?{color:i}:{}),i?{borderColor:i}:{}),b=l(l(l({},"list"==r&&i?{color:i}:{}),"box"==r&&i?{backgroundColor:i}:{}),"box"==r&&s?{color:s}:{}),w=l({},"simple"==r&&i?{color:i}:{});return"simple"==r?wp.element.createElement("div",{class:"citadela-block-articles-wrap"},Array.from(Array(n),(function(e,t){return wp.element.createElement("article",{class:"citadela-directory-item",style:m},wp.element.createElement("div",{class:"item-content",style:f},wp.element.createElement("div",{class:"item-title"},wp.element.createElement("div",{class:"item-title-wrap"},wp.element.createElement("div",{class:"post-title"}),wp.element.createElement("div",{class:"post-meta",style:w}))),wp.element.createElement("div",{class:"item-thumbnail",style:u}),wp.element.createElement("div",{class:"item-body"},wp.element.createElement("div",{class:"item-text"},wp.element.createElement("div",{class:"item-description"},wp.element.createElement("span",{class:"line"}),wp.element.createElement("span",{class:"line"}),wp.element.createElement("span",{class:"line"}),wp.element.createElement("span",{class:"line"}))),wp.element.createElement("div",{class:"item-footer",style:d},p&&wp.element.createElement("div",{class:"item-data location",style:y},wp.element.createElement("span",{class:"label"}),wp.element.createElement("span",{class:"values"})),wp.element.createElement("div",{class:"item-data categories",style:y},wp.element.createElement("span",{class:"label"}),wp.element.createElement("span",{class:"values"}))))))}))):wp.element.createElement("div",{class:"citadela-block-articles-wrap"},Array.from(Array(n),(function(e,n){return wp.element.createElement("article",{class:"citadela-directory-item",style:m},wp.element.createElement("div",{class:"item-content",style:f},wp.element.createElement("div",{class:"item-thumbnail",style:u},"box"==r&&wp.element.createElement("div",{class:"item-date",style:b})),wp.element.createElement("div",{class:"item-body"},wp.element.createElement("div",{class:"item-title"},wp.element.createElement("div",{class:"item-title-wrap"},"box"==r&&!t.showFeaturedImage&&wp.element.createElement("div",{class:"item-date",style:b}),wp.element.createElement("div",{class:"post-title"}),"list"==r&&!t.showDescription&&wp.element.createElement("div",{class:"item-date",style:b}),wp.element.createElement("div",{class:"post-subtitle"}))),wp.element.createElement("div",{class:"item-text"},wp.element.createElement("div",{class:"item-description"},"list"==r&&t.showDescription&&wp.element.createElement("div",{class:"item-date",style:b}),wp.element.createElement("span",{class:"line"}),wp.element.createElement("span",{class:"line"}),wp.element.createElement("span",{class:"line"}),wp.element.createElement("span",{class:"line"}))),wp.element.createElement("div",{class:"item-footer",style:d},wp.element.createElement("div",{class:"item-data address",style:y},wp.element.createElement("span",{class:"label"}),wp.element.createElement("span",{class:"values"})),wp.element.createElement("div",{class:"item-data web",style:y},wp.element.createElement("span",{class:"label"}),wp.element.createElement("span",{class:"values"})),p&&wp.element.createElement("div",{class:"item-data location",style:y},wp.element.createElement("span",{class:"label"}),wp.element.createElement("span",{class:"values"})),wp.element.createElement("div",{class:"item-data categories",style:y},wp.element.createElement("span",{class:"label"}),wp.element.createElement("span",{class:"values"}))))))})))}}])&&i(n.prototype,r),o&&i(n,o),f}(wp.element.Component);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}f.defaultProps={count:12};var w=lodash.groupBy;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=wp.components.TreeSelect;function v(e){var t=e.label,n=e.noOptionLabel,r=e.categoriesList,o=e.selectedCategoryId,l=e.onChange,a=function(e){if(!e)return{};var t=e.map((function(e){return y({children:[],parent:null},e)})),n=w(t,"parent");return n.null&&n.null.length?t:function e(t){return t.map((function(t){var r=n[t.id];return y(y({},t),{},{children:r&&r.length?e(r):[]})}))}(n[0]||[])}(r);return wp.element.createElement(h,g({label:t,noOptionLabel:n,onChange:l},{tree:a,selectedId:o}))}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=wp.i18n.__,_=wp.element.Component,D=wp.components,z=D.DropdownMenu,R=D.SVG,N=D.Path,T=D.G,B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,r,o,l=(t=a,function(){var e,n=S(t);if(j()){var r=S(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return P(this,e)});function a(){return O(this,a),l.apply(this,arguments)}return n=a,(r=[{key:"render",value:function(){var e=this.props,t=e.toggleProps,n=e.value,r=e.onChange,o={shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd"},l={simple:wp.element.createElement(R,{style:o,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement(T,{id:"Layer_x0020_1"},wp.element.createElement(N,{class:"fil0",d:"M2 11l16 0 0 1 -16 0 0 -1zm0 2l16 0 0 1 -16 0 0 -1zm0 2l13 0 0 1 -13 0 0 -1zm1 -12l9 0c1,0 1,0 1,1l0 4c0,1 0,1 -1,1l-9 0c-1,0 -1,0 -1,-1l0 -4c0,-1 0,-1 1,-1z"}))),list:wp.element.createElement(R,{style:o,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement(T,{id:"Layer_x0020_1"},wp.element.createElement(N,{class:"fil0",d:"M7 5l8 0 0 1 -8 0 0 -1zm0 -2l11 0 0 1 -11 0 0 -1zm-4 -1l2 0c1,0 1,0 1,1l0 2c0,1 0,1 -1,1l-2 0c-1,0 -1,0 -1,-1l0 -2c0,-1 0,-1 1,-1z"}),wp.element.createElement(N,{class:"fil0",d:"M7 11l8 0 0 1 -8 0 0 -1zm0 -2l11 0 0 1 -11 0 0 -1zm-4 -1l2 0c1,0 1,0 1,1l0 2c0,1 0,1 -1,1l-2 0c-1,0 -1,0 -1,-1l0 -2c0,-1 0,-1 1,-1z"}),wp.element.createElement(N,{class:"fil0",d:"M7 17l8 0 0 1 -8 0 0 -1zm0 -2l11 0 0 1 -11 0 0 -1zm-4 -1l2 0c1,0 1,0 1,1l0 2c0,1 0,1 -1,1l-2 0c-1,0 -1,0 -1,-1l0 -2c0,-1 0,-1 1,-1z"}))),box:wp.element.createElement(R,{style:o,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement(T,{id:"Layer_x0020_1"},wp.element.createElement(N,{class:"fil0",d:"M3 11l3 0c0,0 0,0 0,1l0 4c0,0 0,1 0,1l-3 0c-1,0 -1,-1 -1,-1l0 -4c0,-1 0,-1 1,-1zm11 0l3 0c1,0 1,0 1,1l0 4c0,0 0,1 -1,1l-3 0c0,0 0,-1 0,-1l0 -4c0,-1 0,-1 0,-1zm-5 0l2 0c1,0 1,0 1,1l0 4c0,0 0,1 -1,1l-2 0c-1,0 -1,-1 -1,-1l0 -4c0,-1 0,-1 1,-1zm-6 -8l3 0c0,0 0,1 0,1l0 4c0,1 0,1 0,1l-3 0c-1,0 -1,0 -1,-1l0 -4c0,0 0,-1 1,-1zm11 0l3 0c1,0 1,1 1,1l0 4c0,1 0,1 -1,1l-3 0c0,0 0,0 0,-1l0 -4c0,0 0,-1 0,-1zm-5 0l2 0c1,0 1,1 1,1l0 4c0,1 0,1 -1,1l-2 0c-1,0 -1,0 -1,-1l0 -4c0,0 0,-1 1,-1z"})))},a={simple:{title:x("Simple layout","citadela-pro"),icon:l.simple,isActive:"simple"===n,onClick:function(){return r("simple")}},list:{title:x("List layout","citadela-pro"),icon:l.list,isActive:"list"===n,onClick:function(){return r("list")}},box:{title:x("Box layout","citadela-pro"),icon:l.box,isActive:"box"===n,onClick:function(){return r("box")}}},c=[];for(var i in a)this.props.allowedLayouts.includes(i)&&c.push(a[i]);return wp.element.createElement(z,{icon:l[n],label:x("Select layout","citadela-pro"),controls:c,toggleProps:t})}}])&&C(n.prototype,r),o&&C(n,o),a}(_);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}B.defaultProps={allowedLayouts:["list","box"]};var W=wp.i18n.__,Q=wp.element.Component,q=wp.components,J=q.DropdownMenu,H=q.SVG,K=q.Path,U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(a,e);var t,n,r,o,l=(t=a,function(){var e,n=G(t);if(V()){var r=G(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return M(this,e)});function a(){return I(this,a),l.apply(this,arguments)}return n=a,(r=[{key:"render",value:function(){var e=this.props,t=e.toggleProps,n=e.value,r=e.onChange,o={shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd"},l={small:wp.element.createElement(H,{style:o,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement(K,{d:"M8 8l4 0 0 4 -4 0 0 -4zm-5 -6l14 0c0,0 1,1 1,1l0 14c0,0 -1,1 -1,1l-14 0c0,0 -1,-1 -1,-1l0 -14c0,0 1,-1 1,-1zm1 2l12 0 0 12 -12 0 0 -12z"})),medium:wp.element.createElement(H,{style:o,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement(K,{d:"M6 6l8 0 0 8 -8 0 0 -8zm-3 -4l14 0c0,0 1,1 1,1l0 14c0,0 -1,1 -1,1l-14 0c0,0 -1,-1 -1,-1l0 -14c0,0 1,-1 1,-1zm1 2l12 0 0 12 -12 0 0 -12z"})),large:wp.element.createElement(H,{style:o,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement(K,{d:"M4 4l12 0 0 12 -12 0 0 -12zm-1 -2l14 0c0,0 1,1 1,1l0 14c0,0 -1,1 -1,1l-14 0c0,0 -1,-1 -1,-1l0 -14c0,0 1,-1 1,-1zm1 2l12 0 0 12 -12 0 0 -12z"}))};return wp.element.createElement(J,{icon:l[n],label:W("Select size","citadela-pro"),controls:[{title:W("Small size","citadela-pro"),icon:l.small,isActive:"small"===n,onClick:function(){return r("small")}},{title:W("Medium size","citadela-pro"),icon:l.medium,isActive:"medium"===n,onClick:function(){return r("medium")}},{title:W("Large size","citadela-pro"),icon:l.large,isActive:"large"===n,onClick:function(){return r("large")}}],toggleProps:t})}}])&&L(n.prototype,r),o&&L(n,o),a}(Q);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var re=wp.i18n.__,oe=wp.element,le=oe.Component,ae=oe.Fragment,ce=wp.components,ie=ce.BaseControl,se=ce.ColorPicker,pe=ce.Dropdown,ue=ce.Button,me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(a,e);var t,n,r,o,l=(t=a,function(){var e,n=ne(t);if(te()){var r=ne(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return ee(this,e)});function a(){return Y(this,a),l.apply(this,arguments)}return n=a,(r=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.help,r=e.color,o=e.disableAlpha,l=void 0!==o&&o,a=e.returnObject,c=void 0!==a&&a,i=e.allowReset,s=void 0===i||i,p=e.onChange;return wp.element.createElement(ae,null,wp.element.createElement(ie,{label:t||"",className:"block-editor-panel-color-settings"},wp.element.createElement("div",{className:classNames("citadela-color-control",{alpha:!l})},wp.element.createElement("div",{className:"dropdown-component-holder"},wp.element.createElement(pe,{position:"bottom center",className:"dropdown-component",renderToggle:function(e){e.isOpen;var t=e.onToggle;return wp.element.createElement("div",{class:"citadela-color-indicator",onClick:t},wp.element.createElement("div",{class:"inner-color",style:r?{backgroundColor:r}:null}))},renderContent:function(){return wp.element.createElement(se,{color:r,onChangeComplete:function(e){p(l?e.hex:c?e.rgb:"rgba(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,", ").concat(e.rgb.a,")"))},disableAlpha:l})}}),s&&wp.element.createElement(ue,{disabled:!r,isSecondary:!0,isSmall:!0,onClick:function(){return p(void 0)}},re("Clear","citadela-pro"))))),n&&wp.element.createElement("p",{class:"components-base-control__help"},n))}}])&&Z(n.prototype,r),o&&Z(n,o),a}(le);function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e,t){return!t||"object"!==fe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ge(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ve=wp.i18n.__,Ee=wp.apiFetch,Oe=wp.element,Ce=Oe.Component,ke=Oe.Fragment,Pe=wp.blockEditor,je=Pe.BlockControls,Se=Pe.InspectorControls,xe=Pe.RichText,_e=wp.components,De=_e.ToolbarGroup,ze=_e.ToolbarItem,Re=_e.PanelBody,Ne=_e.ToggleControl,Te=_e.RangeControl,Be=_e.Icon,Fe=_e.SelectControl,Ie=_e.RadioControl,Le=_e.ColorPalette,Ae=_e.ColorIndicator,Me=_e.BaseControl,Ve=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&be(e,t)}(a,e);var t,n,r,o,l=(t=a,function(){var e,n=he(t);if(ge()){var r=he(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return we(this,e)});function a(){var e;return de(this,a),(e=l.apply(this,arguments)).state={categoriesList:[]},e}return n=a,(r=[{key:"componentDidMount",value:function(){var e=this;this.fetchRequest=Ee({path:"/wp/v2/categories/?per_page=-1"}).then((function(t){e.setState({categoriesList:t})})).catch((function(){e.setState({categoriesList:[]})}))}},{key:"render",value:function(){var e,t,n,r=this.state.categoriesList,o=this.props,l=o.attributes,a=o.setAttributes,c=o.name,i=l.layout,s=l.count,p=l.postsOrder,u=l.postsOrderBy,m=l.stickyPostsFirst,d=l.borderColor,y=l.backgroundColor,b=l.textColor,w=l.decorColor,g=l.borderWidth,h=l.skipStartPosts,E=l.dateColor,O=[{color:"#00d1b2"},{color:"#3373dc"},{color:"#209cef"},{color:"#22d25f"},{color:"#ffdd57"},{color:"#ff3860"},{color:"#7941b6"},{color:"#392F43"}],C="undefined"!=typeof CitadelaDirectorySettings,k=wp.blocks.getBlockType(c),P="grid-type-1";return"list"==l.layout&&(P="grid-type-3"),"simple"==l.layout&&(P=""),wp.element.createElement(ke,null,wp.element.createElement(je,{key:"controls"},wp.element.createElement(De,null,wp.element.createElement(ze,null,(function(e){return wp.element.createElement(B,{allowedLayouts:["simple","list","box"],value:l.layout,onChange:function(e){return a({layout:e})},toggleProps:e})})),["list","box"].includes(l.layout)&&wp.element.createElement(ze,null,(function(e){return wp.element.createElement(U,{value:l.size,onChange:function(e){return a({size:e})},toggleProps:e})})))),wp.element.createElement(Se,{key:"inspector"},wp.element.createElement(Re,{title:ve("Filters","citadela-pro"),initialOpen:!0,className:"citadela-panel"},wp.element.createElement(v,{categoriesList:r,label:ve("Category","citadela-pro"),noOptionLabel:ve("All","citadela-pro"),selectedCategoryId:l.category,onChange:function(e){a({category:e})}}),wp.element.createElement(Te,{label:ve("Number of items","citadela-pro"),value:l.count,onChange:function(e){a({count:e})},min:1,max:80}),wp.element.createElement(Te,{label:ve("Skip number of posts from start","citadela-pro"),value:h,onChange:function(e){a({skipStartPosts:e})},min:0,max:12}),wp.element.createElement(Ne,{label:ve("Sticky posts first","citadela-pro"),help:ve("If enabled, sticky posts will be displayed on the top of listed posts.","citadela-pro"),checked:m,onChange:function(e){return a({stickyPostsFirst:e})}})),wp.element.createElement(Re,{title:ve("Order Options","citadela-pro"),initialOpen:!1,className:"citadela-panel"},wp.element.createElement(Fe,{label:ve("Order by","citadela-pro"),value:u,options:[{label:ve("Date","citadela-pro"),value:"date"},{label:ve("Title","citadela-pro"),value:"title"},{label:ve("Random","citadela-pro"),value:"rand"}],onChange:function(e){a({postsOrderBy:e})}}),"rand"!=u&&wp.element.createElement(Ie,{selected:p,options:[{label:ve("Descending","citadela-pro"),value:"DESC"},{label:ve("Ascending","citadela-pro"),value:"ASC"}],onChange:function(e){a({postsOrder:e})}})),wp.element.createElement(Re,{title:ve("Post Details","citadela-pro"),initialOpen:!0,className:"citadela-panel"},wp.element.createElement(Ne,{label:ve("Show featured image","citadela-pro"),checked:l.showFeaturedImage,onChange:function(e){return a({showFeaturedImage:e})}}),wp.element.createElement(Ne,{label:ve("Show date","citadela-pro"),checked:l.showDate,onChange:function(e){return a({showDate:e})}}),wp.element.createElement(Ne,{label:ve("Show description","citadela-pro"),checked:l.showDescription,onChange:function(e){return a({showDescription:e})}}),wp.element.createElement(Ne,{label:ve("Show categories","citadela-pro"),checked:l.showCategories,onChange:function(e){return a({showCategories:e})}}),C&&wp.element.createElement(Ne,{label:ve("Show locations","citadela-pro"),checked:l.showLocations,onChange:function(e){return a({showLocations:e})}})),wp.element.createElement(Re,{title:ve("Design Options","citadela-pro"),initialOpen:!1,className:"citadela-panel"},wp.element.createElement(Me,{label:ve("Decoration color","citadela-pro"),className:"block-editor-panel-color-settings"},w&&wp.element.createElement(Ae,{colorValue:w}),wp.element.createElement(Le,{value:w,onChange:function(e){a({decorColor:e})},colors:O})),"box"==i&&wp.element.createElement(Me,{label:ve("Date color","citadela-pro"),className:"block-editor-panel-color-settings"},E&&wp.element.createElement(Ae,{colorValue:E}),wp.element.createElement(Le,{value:E,onChange:function(e){a({dateColor:e})},colors:O})),wp.element.createElement(Me,{label:ve("Text color","citadela-pro"),className:"block-editor-panel-color-settings"},b&&wp.element.createElement(Ae,{colorValue:b}),wp.element.createElement(Le,{value:b,onChange:function(e){a({textColor:e})},colors:O})),wp.element.createElement(me,{label:ve("Background color","citadela-pro"),color:y,onChange:function(e){a({backgroundColor:e})}}),wp.element.createElement(me,{label:ve("Borders color","citadela-pro"),color:d,onChange:function(e){a({borderColor:e})}}),wp.element.createElement(Fe,{label:ve("Borders width","citadela-pro"),value:g,options:[{label:ve("No borders","citadela-pro"),value:"none"},{label:ve("Thin borders","citadela-pro"),value:"thin"},{label:ve("Thick borders","citadela-pro"),value:"thick"}],onChange:function(e){a({borderWidth:e})}}))),wp.element.createElement("div",{className:classNames("wp-block-citadela-blocks","ctdl-posts",l.className,P,"border-".concat(g),"layout-".concat(l.layout),(e={},t="size-".concat(l.size),n="simple"!=l.layout,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e),{"show-item-featured-image":!!l.showFeaturedImage},{"show-item-date":!!l.showDate},{"show-item-description":!!l.showDescription},{"show-item-categories":!!l.showCategories},{"show-item-locations":!(!C||!l.showLocations)},{"custom-text-color":!!b},{"custom-decor-color":!!w},{"custom-background-color":!!y},{"custom-date-color":!!E})},wp.element.createElement("div",{class:"ctdl-blockcard-title"},wp.element.createElement("div",{class:"ctdl-blockcard-icon"},wp.element.createElement(Be,{icon:k.icon.src})),wp.element.createElement("div",{class:"ctdl-blockcard-text"},wp.element.createElement("div",{class:"ctdl-blockcard-name"},k.title),wp.element.createElement("div",{class:"ctdl-blockcard-desc"},k.description))),wp.element.createElement("div",{class:"citadela-block-header"},wp.element.createElement(xe,{tagName:"h3",value:l.title,onChange:function(e){return a({title:e})},placeholder:k.title,keepPlaceholderOnFocus:!0,allowedFormats:[]})),wp.element.createElement("div",{class:"citadela-block-articles"},wp.element.createElement(f,{attributes:l,count:s}))))}}])&&ye(n.prototype,r),o&&ye(n,o),a}(Ce),Ge=n(0);function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qe=wp.element.Fragment,qe=[{attributes:{category:{type:"string",default:""},count:{type:"number",default:12},title:{type:"string",default:""},layout:{type:"string",default:"simple"},size:{type:"string",default:"medium"},showDate:{type:"boolean",default:!0},showFeaturedImage:{type:"boolean",default:!0},showDescription:{type:"boolean",default:!0},showCategories:{type:"boolean",default:!0},postsOrderBy:{type:"string",default:"date"},postsOrder:{type:"string",default:"DESC"},borderWidth:{type:"string",default:"none"},borderColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},textColor:{type:"string",default:""},decorColor:{type:"string",default:""},dateColor:{type:"string",default:""},skipStartPosts:{type:"number",default:0}},save:function(e){var t=e.attributes,n="grid-type-1";return"list"==t.layout&&(n="grid-type-3"),"simple"==t.layout&&(n=""),wp.element.createElement(Qe,null,wp.element.createElement("div",{className:classNames("wp-block-citadela-blocks ctdl-posts",n,["layout-".concat(t.layout)],We({},"size-".concat(t.size),"simple"!=t.layout),{"show-item-featured-image":!!t.showFeaturedImage},{"show-item-date":!!t.showDate},{"show-item-description":!!t.showDescription},{"show-item-categories":!!t.showCategories}),id:t.blockId},t.title&&wp.element.createElement("header",{class:"citadela-block-header"},wp.element.createElement("div",{class:"citadela-block-title"},wp.element.createElement("h2",null,t.title))),wp.element.createElement("ctdl-dynamic-content",null)))}},{attributes:{category:{type:"string",default:""},count:{type:"number",default:12},title:{type:"string",default:""},layout:{type:"string",default:"simple"},size:{type:"string",default:"medium"},showDate:{type:"boolean",default:!0},showFeaturedImage:{type:"boolean",default:!0},showDescription:{type:"boolean",default:!0},showCategories:{type:"boolean",default:!0},postsOrderBy:{type:"string",default:"date"},postsOrder:{type:"string",default:"DESC"}},save:function(e){var t=e.attributes,n="grid-type-1";return"list"==t.layout&&(n="grid-type-3"),"simple"==t.layout&&(n=""),wp.element.createElement(Qe,null,wp.element.createElement("div",{className:classNames("wp-block-citadela-blocks ctdl-posts",n,["layout-".concat(t.layout)],We({},"size-".concat(t.size),"simple"!=t.layout),{"show-item-featured-image":!!t.showFeaturedImage},{"show-item-date":!!t.showDate},{"show-item-description":!!t.showDescription},{"show-item-categories":!!t.showCategories}),id:t.blockId},t.title&&wp.element.createElement("header",{class:"citadela-block-header"},wp.element.createElement("div",{class:"citadela-block-title"},wp.element.createElement("h2",null,t.title))),wp.element.createElement("ctdl-dynamic-content",null)))}},{attributes:{category:{type:"string",default:""},count:{type:"number",default:12},title:{type:"string",default:""},layout:{type:"string",default:"simple"},size:{type:"string",default:"medium"},showDate:{type:"boolean",default:!0},showFeaturedImage:{type:"boolean",default:!0},showDescription:{type:"boolean",default:!0},showCategories:{type:"boolean",default:!0},postsOrderBy:{type:"string",default:"date"},postsOrder:{type:"string",default:"DESC"}},save:function(e){var t=e.attributes,n="grid-type-1";return"list"==t.layout&&(n="grid-type-3"),"simple"==t.layout&&(n=""),wp.element.createElement(Qe,null,wp.element.createElement("div",{className:classNames("wp-block-citadela-blocks ctdl-posts",n,["layout-".concat(t.layout)],We({},"size-".concat(t.size),"simple"!=t.layout),{"show-item-featured-image":!!t.showFeaturedImage},{"show-item-description":!!t.showDescription},{"show-item-categories":!!t.showCategories}),id:t.blockId},t.title&&wp.element.createElement("header",{class:"citadela-block-header"},wp.element.createElement("div",{class:"citadela-block-title"},wp.element.createElement("h2",null,t.title))),wp.element.createElement("ctdl-dynamic-content",null)))}}];function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){Ke(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ue=wp.i18n.__;(0,wp.blocks.registerBlockType)(Ge.name,He(He({},Ge),{},{title:Ue("Posts","citadela-pro"),description:Ue("Displays list of posts based on filters. For example posts only from specific category.","citadela-pro"),anchor:"true",deprecated:qe,edit:Ve,save:function(){return null}}))}]);