(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{1762:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treasures",function(){return t(2358)}])},2034:function(r,e,t){"use strict";var n=t(5893),i=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,n.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,n.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})};e.Z=i},8246:function(r,e,t){"use strict";t.d(e,{Z:function(){return a}});var n=t(943),i=t(3375),s=t(1566),o=t(5893),a=function(){var r;return((function(r){if(Array.isArray(r))return(0,n.Z)(r)})(r=Array(8))||(0,i.Z)(r)||(0,s.Z)(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(r,e){return(0,o.jsx)("div",{style:{width:180}},"ghost-card-".concat(e))})}},3268:function(r,e,t){"use strict";t.d(e,{Z:function(){return l}});var n=t(5893),i=t(8246),s=t(1664),o=t.n(s),a=t(5675),u=t.n(a),c=function(r){var e=r.treasure,t=r.priority;return(0,n.jsx)(u(),{src:"/images/treasures/".concat(e.slug,".webp"),alt:e.name,width:180,height:240,priority:void 0!==t&&t})},f=function(r){var e=r.treasure,t=r.priority;return(0,n.jsx)(o(),{href:"/treasures/".concat(e.slug),children:(0,n.jsx)("a",{children:(0,n.jsx)(c,{treasure:e,priority:void 0!==t&&t})})})},l=function(r){var e=r.treasures;return(0,n.jsxs)("div",{className:"treasures-list",children:[e.map(function(r,e){return(0,n.jsx)(f,{treasure:r,priority:e<4},r.id)}),(0,n.jsx)(i.Z,{})]})}},2358:function(r,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return y},default:function(){return v}});var n=t(5893),i=t(9008),s=t.n(i),o=t(2034),a=t(7294),u=t(4924),c=t(6042),f=t(9396),l=t(828),d=function(r){var e=r.name,t=r.onChange;return(0,n.jsx)("input",{type:"text",placeholder:"Search",name:e,onChange:t})},p=function(r){var e=r.options,t=r.firstItemName,i=r.name,s=r.onChange;return(0,n.jsxs)("select",{onChange:s,name:i,children:[(0,n.jsx)("option",{value:"Any",children:t}),e.map(function(r){return(0,n.jsx)("option",{value:r.id,children:r.name},r.id)})]})},m=function(r){var e=r.filters,t=r.treasures,i=r.setTreasures,s=(0,a.useState)({}),o=s[0],m=s[1];(0,a.useEffect)(function(){var r,e=function(r){return Object.entries(o).map(function(e){var t,n=(0,l.Z)(e,2),i=n[0],s=n[1];return"Any"===s||("name"===i?r.name.toLowerCase().includes(s.toLowerCase()):"keywords"===i?r.keywords.map(function(r){return r.id===s}).some(function(r){return!0===r}):(null===(t=r[i])||void 0===t?void 0:t.id.toString())===s)}).every(function(r){return!0===r})};i(t.filter(e))},[o,t,i]);var h=function(r){m(function(e){return(0,f.Z)((0,c.Z)({},e),(0,u.Z)({},r.target.name,r.target.value))})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{options:e.keywords,firstItemName:"Keywords",name:"keywords",onChange:h}),(0,n.jsx)(d,{name:"name",onChange:h})]})},h=t(3268),j=function(r){var e=r.treasures,t=r.filters,i=(0,a.useState)(e),s=i[0],o=i[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{filters:t,treasures:e,setTreasures:o}),(0,n.jsx)(h.Z,{treasures:s})]})},y=!0;function v(r){var e=r.treasures,t=r.filters;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Treasures – Hearthstone Mercenaries"}),(0,n.jsx)("meta",{name:"description",content:"Treasures – Hearthstone Mercenaries"}),(0,n.jsx)(o.Z,{})]}),(0,n.jsx)("h2",{children:"Treasures"}),(0,n.jsx)(j,{treasures:e,filters:t})]})}},943:function(r,e,t){"use strict";function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}t.d(e,{Z:function(){return n}})},3375:function(r,e,t){"use strict";function n(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}t.d(e,{Z:function(){return n}})},9396:function(r,e,t){"use strict";function n(r,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):(function(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t.push.apply(t,n)}return t})(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}),r}t.d(e,{Z:function(){return n}})},828:function(r,e,t){"use strict";t.d(e,{Z:function(){return s}});var n=t(3375),i=t(1566);function s(r,e){return function(r){if(Array.isArray(r))return r}(r)||(0,n.Z)(r,e)||(0,i.Z)(r,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(r,e,t){"use strict";t.d(e,{Z:function(){return i}});var n=t(943);function i(r,e){if(r){if("string"==typeof r)return(0,n.Z)(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if("Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return(0,n.Z)(r,e)}}}},function(r){r.O(0,[959,774,888,179],function(){return r(r.s=1762)}),_N_E=r.O()}]);