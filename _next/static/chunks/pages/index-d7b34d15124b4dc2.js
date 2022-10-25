(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4143)}])},8246:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(943),i=r(3375),o=r(1566),a=r(5893),s=function(){var e;return((function(e){if(Array.isArray(e))return(0,t.Z)(e)})(e=Array(8))||(0,i.Z)(e)||(0,o.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(e,n){return(0,a.jsx)("div",{style:{width:180}},"ghost-card-".concat(n))})}},1004:function(e,n,r){"use strict";var t=r(5893),i=r(5675),o=r.n(i),a=r(1664),s=r.n(a),c=function(e){var n=e.mercenary,r=e.priority;return(0,t.jsx)(s(),{href:"/mercenaries/".concat(n.slug),children:(0,t.jsx)("a",{children:(0,t.jsx)(o(),{src:"/images/mercs/".concat(n.slug,".webp"),alt:n.name,width:180,height:249,priority:void 0!==r&&r})})})};n.Z=c},1705:function(e,n,r){"use strict";var t=r(5893),i=r(8246),o=r(1004),a=function(e){var n=e.mercenaries;return(0,t.jsxs)("div",{className:"mercenaries-list",children:[n.map(function(e,n){return(0,t.jsx)(o.Z,{mercenary:e,priority:n<4},e.id)}),(0,t.jsx)(i.Z,{})]})};n.Z=a},4143:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return j},default:function(){return v}});var t=r(5893),i=r(9008),o=r.n(i),a=r(7294),s=function(e){var n=e.count;return(0,t.jsxs)("span",{children:[n,"\xa0mercenaries"]})},c=r(4924),u=r(6042),f=r(9396),l=r(828),m=function(e){var n=e.name,r=e.onChange;return(0,t.jsx)("input",{type:"text",placeholder:"Search",name:n,onChange:r})},d=function(e){var n=e.options,r=e.firstItemName,i=e.name,o=e.onChange;return(0,t.jsxs)("select",{name:i,onChange:o,children:[(0,t.jsx)("option",{value:"Any",children:r}),n.map(function(e){return(0,t.jsx)("option",{value:e.id,children:e.name},e.id)})]})},h=function(e){var n=e.mercenariesListPage,r=e.setMercenaries,i=(0,a.useState)({}),o=i[0],s=i[1];(0,a.useEffect)(function(){var e,t=function(e){return Object.entries(o).map(function(n){var r=(0,l.Z)(n,2),t=r[0],i=r[1];if("Any"===i)return!0;if("name"===t)return e.name.toLowerCase().includes(i.toLowerCase());if("spellSchool"===t){var o=!0,a=!1,s=void 0;try{for(var c,u,f=e.abilities[Symbol.iterator]();!(o=(u=f.next()).done);o=!0){var m,d=u.value;if((null===(m=d.spell_school)||void 0===m?void 0:m.id)===i)return!0}}catch(h){a=!0,s=h}finally{try{o||null==f.return||f.return()}finally{if(a)throw s}}return!1}return(null===(c=e[t])||void 0===c?void 0:c.id.toString())===i}).every(function(e){return!0===e})};r(n.mercenaries.filter(t))},[n.mercenaries,o,r]);var h=function(e){s(function(n){return(0,f.Z)((0,u.Z)({},n),(0,c.Z)({},e.target.name,e.target.value))})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{options:n.mercenaryRoles,firstItemName:"Role",name:"role",onChange:h}),(0,t.jsx)(d,{options:n.rarities,firstItemName:"Rarity",name:"rarity",onChange:h}),(0,t.jsx)(d,{options:n.minionTypes,firstItemName:"Minion type",name:"minionType",onChange:h}),(0,t.jsx)(d,{options:n.factions,firstItemName:"Faction",name:"faction",onChange:h}),(0,t.jsx)(d,{options:n.spellSchools,firstItemName:"Spell school",name:"spellSchool",onChange:h}),(0,t.jsx)(m,{name:"name",onChange:h})]})},p=r(1705),y=function(e){var n=e.mercenariesListPage,r=(0,a.useState)(n.mercenaries),i=r[0],o=r[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{mercenariesListPage:n,setMercenaries:o}),(0,t.jsx)(s,{count:i.length}),(0,t.jsx)(p.Z,{mercenaries:i})]})},j=!0;function v(e){var n=e.mercenariesListPage;return(0,t.jsxs)("div",{children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:"Hearthstone Mercenaries"}),(0,t.jsx)("meta",{name:"description",content:"Hearthstone Mercenaries"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)("h2",{children:"Mercenaries"}),(0,t.jsx)(y,{mercenariesListPage:n})]})}},943:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}r.d(n,{Z:function(){return t}})},3375:function(e,n,r){"use strict";function t(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(n,{Z:function(){return t}})},9396:function(e,n,r){"use strict";function t(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}r.d(n,{Z:function(){return t}})},828:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(3375),i=r(1566);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||(0,t.Z)(e,n)||(0,i.Z)(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(943);function i(e,n){if(e){if("string"==typeof e)return(0,t.Z)(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return(0,t.Z)(e,n)}}}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);