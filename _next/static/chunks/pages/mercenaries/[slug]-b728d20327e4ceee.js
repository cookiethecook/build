(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{2714:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mercenaries/[slug]",function(){return r(6484)}])},5459:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var a=r(5893),i=r(1664),t=r.n(i),s=r(5675),c=r.n(s);function o(e){var n=e.bounty;return(0,a.jsx)(c(),{src:"/images/bounties/".concat(n.id,".-").concat(n.slug,".webp"),height:240,width:180,alt:n.name})}function x(e){var n=e.bounty,r=e.showZone;return(0,a.jsx)("div",{className:"bounty",children:(0,a.jsx)(t(),{href:"/bounties/".concat(n.slug),children:(0,a.jsxs)("a",{children:[void 0!==r&&r&&(0,a.jsx)("p",{children:n.zone.name}),(0,a.jsx)(o,{bounty:n}),(0,a.jsx)("p",{children:n.name})]})})})}},640:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var a=r(5893),i=r(1664),t=r.n(i),s=r(5675),c=r.n(s);function o(e){var n=e.treasure;return(0,a.jsx)(c(),{src:"/images/treasures/".concat(n.slug,".webp"),alt:n.name,width:180,height:240})}function x(e){var n=e.treasure;return(0,a.jsx)(t(),{href:"/treasures/".concat(n.slug),children:(0,a.jsx)("a",{children:(0,a.jsx)(o,{treasure:n})})})}function u(e){var n=e.treasures;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:n.map(function(e){return(0,a.jsx)(x,{treasure:e},e.id)})})})}},6484:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return p},default:function(){return y}});var a=r(5893),i=r(9008),t=r.n(i),s=r(5675),c=r.n(s),o=r(1664),x=r.n(o),u=r(1304),l=r.n(u);function d(e){var n=e.ability;return(0,a.jsx)(c(),{src:"/images/abilities/".concat(l()(n.name),".webp"),width:231,height:300,alt:n.name})}var h=r(5459);function f(e){var n=e.equip;return(0,a.jsx)(c(),{src:"/images/equip/".concat(l()(n.name),".webp"),width:231,height:300,alt:n.name})}function m(e){var n=e.portrait,r=e.mercId;return(0,a.jsx)(c(),{src:"/images/portraits/".concat(r,"-").concat(n.number,".webp"),height:240,width:180,alt:""})}var j=r(640),p=!0;function y(e){var n=e.mercenary,r="".concat(n.name," - Hearthstone Mercenaries");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t(),{children:[(0,a.jsx)("title",{children:r}),(0,a.jsx)("meta",{name:"description",content:r}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("h2",{children:n.name}),(0,a.jsxs)("div",{className:"mercenary-info",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(c(),{src:"/images/mercs/big/".concat(n.slug,".webp"),width:360,height:497,alt:n.name}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("b",{children:"Attack: "}),n.attack]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("b",{children:"Health: "}),n.health]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("b",{children:"Role: "}),(0,a.jsx)(x(),{href:"/mercenaries/role/".concat(n.role.slug),children:(0,a.jsx)("a",{children:n.role.name})})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("b",{children:"Rarity: "}),(0,a.jsx)(x(),{href:"/mercenaries/rarity/".concat(n.rarity.slug),children:(0,a.jsx)("a",{children:n.rarity.name})})]}),n.minionType&&(0,a.jsxs)("li",{children:[(0,a.jsx)("b",{children:"Minion type: "}),(0,a.jsx)(x(),{href:"/mercenaries/minion-type/".concat(n.minionType.slug),children:(0,a.jsx)("a",{children:n.minionType.name})})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("b",{children:"Faction: "}),(0,a.jsx)(x(),{href:"/mercenaries/faction/".concat(n.faction.slug),children:(0,a.jsx)("a",{children:n.faction.name})})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("b",{children:"Crafting cost:"})," ",n.craftingCost]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:n.abilities.map(function(e){return(0,a.jsx)(d,{ability:e},e.id)})}),(0,a.jsx)("div",{children:n.equipment.map(function(e){return(0,a.jsx)(f,{equip:e},e.id)})})]})]}),(0,a.jsx)("h3",{children:"Portraits"}),n.portraits.map(function(e){return(0,a.jsx)(m,{portrait:e,mercId:n.id},e.id)}),(0,a.jsx)("h3",{children:"Bounties"}),(0,a.jsx)("div",{style:{display:"flex"},children:n.loots.map(function(e){return(0,a.jsx)(h.Z,{bounty:e.bounty,showZone:!0},e.bounty.id)})}),(0,a.jsx)("h3",{children:"Treasures"}),(0,a.jsx)("h4",{children:"Normal"}),(0,a.jsx)(j.Z,{treasures:n.treasures.normal}),(0,a.jsx)("h4",{children:"Elite"}),(0,a.jsx)(j.Z,{treasures:n.treasures.elite})]})}},1304:function(e){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),n=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","∑":"soma","\xa3":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function r(r,a){if("string"!=typeof r)throw Error("slugify: string argument expected");var i=n[(a="string"==typeof a?{replacement:a}:a||{}).locale]||{},t=void 0===a.replacement?"-":a.replacement,s=void 0===a.trim||a.trim,c=r.normalize().split("").reduce(function(n,r){var s=i[r]||e[r]||r;return s===t&&(s=" "),n+s.replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return a.strict&&(c=c.replace(/[^A-Za-z0-9\s]/g,"")),s&&(c=c.trim()),c=c.replace(/\s+/g,t),a.lower&&(c=c.toLowerCase()),c}return r.extend=function(n){Object.assign(e,n)},r},e.exports=n(),e.exports.default=n()}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=2714)}),_N_E=e.O()}]);