(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{8045:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,a=i(3929).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,i,l=t.src,s=t.sizes,h=t.unoptimized,p=void 0!==h&&h,w=t.priority,k=void 0!==w&&w,j=t.loading,I=t.lazyRoot,R=t.lazyBoundary,_=t.className,L=t.quality,q=t.width,C=t.height,O=t.style,N=t.objectFit,P=t.objectPosition,W=t.onLoadingComplete,B=t.placeholder,M=void 0===B?"empty":B,D=t.blurDataURL,Z=c(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=d.useContext(m.ImageConfigContext),V=d.useMemo(function(){var t=y||U||f.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort(function(t,e){return t-e}),i=t.deviceSizes.sort(function(t,e){return t-e});return r({},t,{allSizes:e,deviceSizes:i})},[U]),F=s?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(F=Z.layout),delete Z.layout);var H=x;if("loader"in Z){if(Z.loader){var G=Z.loader;H=function(t){t.config;var e=c(t,["config"]);return G(e)}}delete Z.loader}var T="";if(function(t){var e;return"object"==typeof t&&(z(t)||void 0!==t.src)}(l)){var J=z(l)?l.default:l;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(D=D||J.blurDataURL,T=J.src,(!F||"fill"!==F)&&(C=C||J.height,q=q||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}l="string"==typeof l?l:T;var Q=!k&&("lazy"===j||void 0===j);(l.startsWith("data:")||l.startsWith("blob:"))&&(p=!0,Q=!1),v.has(l)&&(Q=!1),V.unoptimized&&(p=!0);var K=o(d.useState(!1),2),X=K[0],Y=K[1],$=o(g.useIntersection({rootRef:void 0===I?null:I,rootMargin:R||"200px",disabled:!Q}),3),tt=$[0],te=$[1],ti=$[2],tn=!Q||te,to={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ta={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},tr=!1,tl=A(q),ts=A(C),tc=A(L),td=Object.assign({},O,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:P}),tu="blur"!==M||X?{}:{backgroundSize:N||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===F)to.display="block",to.position="absolute",to.top=0,to.left=0,to.bottom=0,to.right=0;else if(void 0!==tl&&void 0!==ts){var tf=ts/tl,tg=isNaN(tf)?"100%":"".concat(100*tf,"%");"responsive"===F?(to.display="block",to.position="relative",tr=!0,ta.paddingTop=tg):"intrinsic"===F?(to.display="inline-block",to.position="relative",to.maxWidth="100%",tr=!0,ta.maxWidth="100%",e="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(tl,"%27%20height=%27").concat(ts,"%27/%3e")):"fixed"===F&&(to.display="inline-block",to.position="relative",to.width=tl,to.height=ts)}var tm={src:b,srcSet:void 0,sizes:void 0};tn&&(tm=S({config:V,src:l,unoptimized:p,layout:F,width:tl,quality:tc,sizes:s,loader:H}));var th=l,tp="imagesizes";tp="imageSizes";var ty=(n(i={},"imageSrcSet",tm.srcSet),n(i,tp,tm.sizes),n(i,"crossOrigin",Z.crossOrigin),i),tv=d.default.useLayoutEffect,tb=d.useRef(W),tw=d.useRef(l);d.useEffect(function(){tb.current=W},[W]),tv(function(){tw.current!==l&&(ti(),tw.current=l)},[ti,l]);var tz=r({isLazy:Q,imgAttributes:tm,heightInt:ts,widthInt:tl,qualityInt:tc,layout:F,className:_,imgStyle:td,blurStyle:tu,loading:j,config:V,unoptimized:p,placeholder:M,loader:H,srcString:th,onLoadingCompleteRef:tb,setBlurComplete:Y,setIntersection:tt,isVisible:tn,noscriptSizes:s},Z);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:to},tr?d.default.createElement("span",{style:ta},e?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:e}):null):null,d.default.createElement(E,Object.assign({},tz))),k?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+tm.src+tm.srcSet+tm.sizes,rel:"preload",as:"image",href:tm.srcSet?void 0:tm.src},ty))):null)};var r=i(6495).Z,l=i(2648).Z,s=i(1598).Z,c=i(7273).Z,d=s(i(7294)),u=l(i(5443)),f=i(9309),g=i(7190),m=i(9977);i(3794);var h=i(2392);function p(t){return"/"===t[0]?t.slice(1):t}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},v=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(t){var e=t.config,i=t.src,n=t.width,o=t.quality;return i.endsWith(".svg")&&!e.dangerouslyAllowSVG?i:"".concat(h.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(t){var e=t.config,i=t.src,n=t.width,o=t.quality,a=new URL("".concat(e.path).concat(p(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(t){var e,i=t.config,n=t.src,o=t.width,a=["f_auto","c_limit","w_"+o,"q_"+(t.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(a).concat(p(n))}],["akamai",function(t){var e=t.config,i=t.src,n=t.width;return"".concat(e.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(t){var e=t.src;throw Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function z(t){return void 0!==t.default}function S(t){var e=t.config,i=t.src,n=t.unoptimized,o=t.layout,r=t.width,l=t.quality,s=t.sizes,c=t.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(t,e,i,n){var o=t.deviceSizes,r=t.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(n);c)s.push(parseInt(c[2]));if(s.length){var c,d,u=.01*(d=Math).min.apply(d,a(s));return{widths:r.filter(function(t){return t>=o[0]*u}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof e||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([e,2*e].map(function(t){return r.find(function(e){return e>=t})||r[r.length-1]}))),kind:"x"}}(e,r,o,s),u=d.widths,f=d.kind,g=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map(function(t,n){return"".concat(c({config:e,src:i,quality:l,width:t})," ").concat("w"===f?t:n+1).concat(f)}).join(", "),src:c({config:e,src:i,quality:l,width:u[g]})}}function A(t){return"number"==typeof t?t:"string"==typeof t?parseInt(t,10):void 0}function x(t){var e,i=(null==(e=t.config)?void 0:e.loader)||"default",n=w.get(i);if(n)return n(t);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function k(t,e,i,n,o,a){t&&t.src!==b&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch(function(){}).then(function(){if(t.parentNode&&(v.add(e),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=t.naturalWidth,r=t.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}}))}var E=function(t){var e=t.imgAttributes,i=(t.heightInt,t.widthInt),n=t.qualityInt,o=t.layout,a=t.className,l=t.imgStyle,s=t.blurStyle,u=t.isLazy,f=t.placeholder,g=t.loading,m=t.srcString,h=t.config,p=t.unoptimized,y=t.loader,v=t.onLoadingCompleteRef,b=t.setBlurComplete,w=t.setIntersection,z=t.onLoad,A=t.onError,x=(t.isVisible,t.noscriptSizes),E=c(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},E,e,{decoding:"async","data-nimg":o,className:a,style:r({},l,s),ref:d.useCallback(function(t){w(t),(null==t?void 0:t.complete)&&k(t,m,o,f,v,b)},[w,m,o,f,v,b,]),onLoad:function(t){k(t.currentTarget,m,o,f,v,b),z&&z(t)},onError:function(t){"blur"===f&&b(!0),A&&A(t)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},E,S({config:h,src:m,unoptimized:p,layout:o,width:i,quality:n,sizes:x,loader:y}),{decoding:"async","data-nimg":o,style:l,className:a,loading:g}))))};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},9008:function(t,e,i){t.exports=i(5443)},5675:function(t,e,i){t.exports=i(8045)}}]);