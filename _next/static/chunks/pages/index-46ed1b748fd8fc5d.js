(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1989)}])},4278:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(5893),i=t(5675),o=t.n(i),a=t(1664),s=t.n(a);function c(e){var r=e.mercenary;return(0,n.jsx)(s(),{href:"/mercenaries/".concat(r.slug),children:(0,n.jsx)("a",{children:(0,n.jsx)(o(),{src:r.image,alt:r.name,width:180,height:249})})})}},4300:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(5893),i=t(4278);function o(e){var r=e.mercenaries;return(0,n.jsx)("div",{children:r.map(function(e){return(0,n.jsx)(i.Z,{mercenary:e},e.id)})})}},1989:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return g},default:function(){return x}});var n=t(5893),i=t(9008),o=t.n(i),a=t(7294);t(4278);var s=function(e){var r=e.mercenaries;return(0,n.jsxs)("span",{children:[r.length,"\xa0mercenaries"]})};function c(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r){if(e){if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}}var f=t(4924),m=t(6042);function d(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}function p(e){var r=e.setSelectedFilters;return(0,n.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){r(function(r){return d((0,m.Z)({},r),(0,f.Z)({},"name",e.target.value))})},style:{marginRight:10}})}function h(e){var r=e.options,t=e.fieldName,i=e.firstItemName,o=e.setSelectedFilters;return(0,n.jsxs)("select",{onChange:function(e){o(function(r){return d((0,m.Z)({},r),(0,f.Z)({},t,e.target.value))})},style:{marginRight:10,marginBottom:5},children:[(0,n.jsx)("option",{value:"Any",children:i}),r.map(function(e){return(0,n.jsx)("option",{value:e.id,children:e.name},e.id)})]})}function y(e){var r,t=e.mercenariesListPage,i=e.setMercenaries,o=(0,a.useState)({}),s=o[0],f=o[1];return(0,a.useEffect)(function(){var e=function(e){return Object.entries(s).map(function(r){var t,n,i=function(e){if(Array.isArray(e))return e}(r)||c(r,2)||u(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=i[0],a=i[1];if("Any"===a)return!0;if("name"===o)return e.name.toLowerCase().includes(a.toLowerCase());if("spellSchool"===o){var s=!0,l=!1,f=void 0;try{for(var m,d,p=e.abilities[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){var h,y=d.value;if((null===(h=y.spell_school)||void 0===h?void 0:h.id)===a)return!0}}catch(j){l=!0,f=j}finally{try{s||null==p.return||p.return()}finally{if(l)throw f}}return!1}return(null===(m=e[o])||void 0===m?void 0:m.id.toString())===a}).every(function(e){return!0===e})};i(t.mercenaries.filter(e))},[t.mercenaries,s,i]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{options:t.mercenaryRoles,fieldName:"role",firstItemName:"Role",setSelectedFilters:f}),(0,n.jsx)(h,{options:t.rarities,fieldName:"rarity",firstItemName:"Rarity",setSelectedFilters:f}),(0,n.jsx)(h,{options:t.minionTypes,fieldName:"minionType",firstItemName:"Minion type",setSelectedFilters:f}),(0,n.jsx)(h,{options:function(e){if(Array.isArray(e))return l(e)}(r=t.factions)||c(r)||u(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),fieldName:"faction",firstItemName:"Faction",setSelectedFilters:f}),(0,n.jsx)(h,{options:t.spellSchools,fieldName:"spellSchool",firstItemName:"Spell school",setSelectedFilters:f}),(0,n.jsx)(p,{setSelectedFilters:f})]})}var j=t(4300);function v(e){var r=e.mercenariesListPage,t=(0,a.useState)(r.mercenaries),i=t[0],o=t[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{mercenariesListPage:r,setMercenaries:o}),(0,n.jsx)(s,{mercenaries:i}),(0,n.jsx)(j.Z,{mercenaries:i})]})}var g=!0;function x(e){var r=e.mercenariesListPage;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Hearthstone Mercenaries"}),(0,n.jsx)("meta",{name:"description",content:"Hearthstone Mercenaries"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("h2",{children:"Mercenaries"}),(0,n.jsx)(v,{mercenariesListPage:r})]})}}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);