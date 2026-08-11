(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ya={exports:{}},nl={},Ga={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),hc=Symbol.for("react.portal"),gc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),Nc=Symbol.for("react.memo"),jc=Symbol.for("react.lazy"),Di=Symbol.iterator;function Cc(e){return e===null||typeof e!="object"?null:(e=Di&&e[Di]||e["@@iterator"],typeof e=="function"?e:null)}var Xa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qa=Object.assign,Za={};function an(e,t,n){this.props=e,this.context=t,this.refs=Za,this.updater=n||Xa}an.prototype.isReactComponent={};an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ja(){}Ja.prototype=an.prototype;function Vo(e,t,n){this.props=e,this.context=t,this.refs=Za,this.updater=n||Xa}var Qo=Vo.prototype=new Ja;Qo.constructor=Vo;qa(Qo,an.prototype);Qo.isPureReactComponent=!0;var Ai=Array.isArray,es=Object.prototype.hasOwnProperty,Bo={current:null},ts={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)es.call(t,r)&&!ts.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Xn,type:e,key:o,ref:i,props:l,_owner:Bo.current}}function Ec(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function zc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $i=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xn:case hc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+kl(i,0):r,Ai(l)?(n="",e!=null&&(n=e.replace($i,"$&/")+"/"),wr(l,t,n,"",function(c){return c})):l!=null&&(Wo(l)&&(l=Ec(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace($i,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ai(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+kl(o,a);i+=wr(o,t,n,s,l)}else if(s=Cc(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+kl(o,a++),i+=wr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function _c(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},kr={transition:null},Pc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Bo};function rs(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=an;F.Fragment=gc;F.Profiler=yc;F.PureComponent=Vo;F.StrictMode=vc;F.Suspense=Sc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pc;F.act=rs;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qa({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Bo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)es.call(t,s)&&!ts.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xn,type:e.type,key:l,ref:o,props:r,_owner:i}};F.createContext=function(e){return e={$$typeof:wc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xc,_context:e},e.Consumer=e};F.createElement=ns;F.createFactory=function(e){var t=ns.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:kc,render:e}};F.isValidElement=Wo;F.lazy=function(e){return{$$typeof:jc,_payload:{_status:-1,_result:e},_init:_c}};F.memo=function(e,t){return{$$typeof:Nc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};F.unstable_act=rs;F.useCallback=function(e,t){return ce.current.useCallback(e,t)};F.useContext=function(e){return ce.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};F.useEffect=function(e,t){return ce.current.useEffect(e,t)};F.useId=function(){return ce.current.useId()};F.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ce.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};F.useRef=function(e){return ce.current.useRef(e)};F.useState=function(e){return ce.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ce.current.useTransition()};F.version="18.3.1";Ga.exports=F;var G=Ga.exports;const Fc=mc(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=G,Tc=Symbol.for("react.element"),Mc=Symbol.for("react.fragment"),Ic=Object.prototype.hasOwnProperty,Rc=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oc={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ic.call(t,r)&&!Oc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Tc,type:e,key:o,ref:i,props:l,_owner:Rc.current}}nl.Fragment=Mc;nl.jsx=ls;nl.jsxs=ls;Ya.exports=nl;var u=Ya.exports,Kl={},os={exports:{}},ke={},is={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,_){var P=j.length;j.push(_);e:for(;0<P;){var W=P-1>>>1,Z=j[W];if(0<l(Z,_))j[W]=_,j[P]=Z,P=W;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var _=j[0],P=j.pop();if(P!==_){j[0]=P;e:for(var W=0,Z=j.length,tr=Z>>>1;W<tr;){var yt=2*(W+1)-1,wl=j[yt],xt=yt+1,nr=j[xt];if(0>l(wl,P))xt<Z&&0>l(nr,wl)?(j[W]=nr,j[xt]=P,W=xt):(j[W]=wl,j[yt]=P,W=yt);else if(xt<Z&&0>l(nr,P))j[W]=nr,j[xt]=P,W=xt;else break e}}return _}function l(j,_){var P=j.sortIndex-_.sortIndex;return P!==0?P:j.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],g=1,h=null,m=3,x=!1,w=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=j)r(c),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(c)}}function v(j){if(k=!1,p(j),!w)if(n(s)!==null)w=!0,yl(N);else{var _=n(c);_!==null&&xl(v,_.startTime-j)}}function N(j,_){w=!1,k&&(k=!1,f(z),z=-1),x=!0;var P=m;try{for(p(_),h=n(s);h!==null&&(!(h.expirationTime>_)||j&&!Pe());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var Z=W(h.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(s)&&r(s),p(_)}else r(s);h=n(s)}if(h!==null)var tr=!0;else{var yt=n(c);yt!==null&&xl(v,yt.startTime-_),tr=!1}return tr}finally{h=null,m=P,x=!1}}var C=!1,E=null,z=-1,B=5,L=-1;function Pe(){return!(e.unstable_now()-L<B)}function cn(){if(E!==null){var j=e.unstable_now();L=j;var _=!0;try{_=E(!0,j)}finally{_?dn():(C=!1,E=null)}}else C=!1}var dn;if(typeof d=="function")dn=function(){d(cn)};else if(typeof MessageChannel<"u"){var Oi=new MessageChannel,pc=Oi.port2;Oi.port1.onmessage=cn,dn=function(){pc.postMessage(null)}}else dn=function(){A(cn,0)};function yl(j){E=j,C||(C=!0,dn())}function xl(j,_){z=A(function(){j(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,yl(N))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var P=m;m=_;try{return j()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,_){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var P=m;m=j;try{return _()}finally{m=P}},e.unstable_scheduleCallback=function(j,_,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,j){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,j={id:g++,callback:_,priorityLevel:j,startTime:P,expirationTime:Z,sortIndex:-1},P>W?(j.sortIndex=P,t(c,j),n(s)===null&&j===n(c)&&(k?(f(z),z=-1):k=!0,xl(v,P-W))):(j.sortIndex=Z,t(s,j),w||x||(w=!0,yl(N))),j},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(j){var _=m;return function(){var P=m;m=_;try{return j.apply(this,arguments)}finally{m=P}}}})(as);is.exports=as;var Dc=is.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=G,we=Dc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ss=new Set,Mn={};function Tt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)ss.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ui={},Hi={};function Uc(e){return Yl.call(Hi,e)?!0:Yl.call(Ui,e)?!1:$c.test(e)?Hi[e]=!0:(Ui[e]=!0,!1)}function Hc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vc(e,t,n,r){if(t===null||typeof t>"u"||Hc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var bo=/[\-:]([a-z])/g;function Ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bo,Ko);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bo,Ko);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bo,Ko);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yo(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vc(t,n,l,r)&&(n=null),r||l===null?Uc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),cs=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),qo=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ds=Symbol.for("react.offscreen"),Vi=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Sl;function wn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var Nl=!1;function jl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Qc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Rt:return"Portal";case Gl:return"Profiler";case Go:return"StrictMode";case Xl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cs:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case Xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qo:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Bc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wc(e){var t=fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Wc(e))}function ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ms(e,t){t=t.checked,t!=null&&Yo(e,"checked",t,!1)}function eo(e,t){ms(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?to(e,t.type,n):t.hasOwnProperty("defaultValue")&&to(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function to(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function no(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function hs(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){bc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function xs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ys(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Kc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(e,t){if(t){if(Kc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,Yt=null,Gt=null;function Ki(e){if(e=Jn(e)){if(typeof ao!="function")throw Error(y(280));var t=e.stateNode;t&&(t=al(t),ao(e.stateNode,e.type,t))}}function ws(e){Yt?Gt?Gt.push(e):Gt=[e]:Yt=e}function ks(){if(Yt){var e=Yt,t=Gt;if(Gt=Yt=null,Ki(e),t)for(e=0;e<t.length;e++)Ki(t[e])}}function Ss(e,t){return e(t)}function Ns(){}var Cl=!1;function js(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Ss(e,t,n)}finally{Cl=!1,(Yt!==null||Gt!==null)&&(Ns(),ks())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var so=!1;if(Ke)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){so=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{so=!1}function Yc(e,t,n,r,l,o,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Cn=!1,Mr=null,Ir=!1,uo=null,Gc={onError:function(e){Cn=!0,Mr=e}};function Xc(e,t,n,r,l,o,i,a,s){Cn=!1,Mr=null,Yc.apply(Gc,arguments)}function qc(e,t,n,r,l,o,i,a,s){if(Xc.apply(this,arguments),Cn){if(Cn){var c=Mr;Cn=!1,Mr=null}else throw Error(y(198));Ir||(Ir=!0,uo=c)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yi(e){if(Mt(e)!==e)throw Error(y(188))}function Zc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Yi(l),e;if(o===r)return Yi(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Es(e){return e=Zc(e),e!==null?zs(e):null}function zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zs(e);if(t!==null)return t;e=e.sibling}return null}var _s=we.unstable_scheduleCallback,Gi=we.unstable_cancelCallback,Jc=we.unstable_shouldYield,ed=we.unstable_requestPaint,b=we.unstable_now,td=we.unstable_getCurrentPriorityLevel,Jo=we.unstable_ImmediatePriority,Ps=we.unstable_UserBlockingPriority,Rr=we.unstable_NormalPriority,nd=we.unstable_LowPriority,Fs=we.unstable_IdlePriority,rl=null,Ue=null;function rd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:id,ld=Math.log,od=Math.LN2;function id(e){return e>>>=0,e===0?32:31-(ld(e)/od|0)|0}var ar=64,sr=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Sn(a):(o&=i,o!==0&&(r=Sn(o)))}else i=n&~l,i!==0?r=Sn(i):o!==0&&(r=Sn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ie(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=ad(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ls(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function ud(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ei(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ms,ti,Is,Rs,Os,fo=!1,ur=[],ot=null,it=null,at=null,On=new Map,Dn=new Map,tt=[],cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function mn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&ti(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function dd(e,t,n,r,l){switch(t){case"focusin":return ot=mn(ot,e,t,n,r,l),!0;case"dragenter":return it=mn(it,e,t,n,r,l),!0;case"mouseover":return at=mn(at,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return On.set(o,mn(On.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Dn.set(o,mn(Dn.get(o)||null,e,t,n,r,l)),!0}return!1}function Ds(e){var t=St(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Cs(n),t!==null){e.blockedOn=t,Os(e.priority,function(){Is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);io=r,n.target.dispatchEvent(r),io=null}else return t=Jn(n),t!==null&&ti(t),e.blockedOn=n,!1;t.shift()}return!0}function qi(e,t,n){Sr(e)&&n.delete(t)}function fd(){fo=!1,ot!==null&&Sr(ot)&&(ot=null),it!==null&&Sr(it)&&(it=null),at!==null&&Sr(at)&&(at=null),On.forEach(qi),Dn.forEach(qi)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,fo||(fo=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,fd)))}function An(e){function t(l){return hn(l,e)}if(0<ur.length){hn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&hn(ot,e),it!==null&&hn(it,e),at!==null&&hn(at,e),On.forEach(t),Dn.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Ds(n),n.blockedOn===null&&tt.shift()}var Xt=qe.ReactCurrentBatchConfig,Dr=!0;function pd(e,t,n,r){var l=M,o=Xt.transition;Xt.transition=null;try{M=1,ni(e,t,n,r)}finally{M=l,Xt.transition=o}}function md(e,t,n,r){var l=M,o=Xt.transition;Xt.transition=null;try{M=4,ni(e,t,n,r)}finally{M=l,Xt.transition=o}}function ni(e,t,n,r){if(Dr){var l=po(e,t,n,r);if(l===null)Ol(e,t,r,Ar,n),Xi(e,r);else if(dd(l,e,t,n,r))r.stopPropagation();else if(Xi(e,r),t&4&&-1<cd.indexOf(e)){for(;l!==null;){var o=Jn(l);if(o!==null&&Ms(o),o=po(e,t,n,r),o===null&&Ol(e,t,r,Ar,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Ar=null;function po(e,t,n,r){if(Ar=null,e=Zo(r),e=St(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function As(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(td()){case Jo:return 1;case Ps:return 4;case Rr:case nd:return 16;case Fs:return 536870912;default:return 16}default:return 16}}var rt=null,ri=null,Nr=null;function $s(){if(Nr)return Nr;var e,t=ri,n=t.length,r,l="value"in rt?rt.value:rt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Nr=l.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Zi(){return!1}function Se(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:Zi,this.isPropagationStopped=Zi,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=Se(sn),Zn=V({},sn,{view:0,detail:0}),hd=Se(Zn),zl,_l,gn,ll=V({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(zl=e.screenX-gn.screenX,_l=e.screenY-gn.screenY):_l=zl=0,gn=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Ji=Se(ll),gd=V({},ll,{dataTransfer:0}),vd=Se(gd),yd=V({},Zn,{relatedTarget:0}),Pl=Se(yd),xd=V({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=Se(xd),kd=V({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sd=Se(kd),Nd=V({},sn,{data:0}),ea=Se(Nd),jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ed[e])?!!t[e]:!1}function oi(){return zd}var _d=V({},Zn,{key:function(e){if(e.key){var t=jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pd=Se(_d),Fd=V({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=Se(Fd),Ld=V({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),Td=Se(Ld),Md=V({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Id=Se(Md),Rd=V({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=Se(Rd),Dd=[9,13,27,32],ii=Ke&&"CompositionEvent"in window,En=null;Ke&&"documentMode"in document&&(En=document.documentMode);var Ad=Ke&&"TextEvent"in window&&!En,Us=Ke&&(!ii||En&&8<En&&11>=En),na=" ",ra=!1;function Hs(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function $d(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(ra=!0,na);case"textInput":return e=t.data,e===na&&ra?null:e;default:return null}}function Ud(e,t){if(Dt)return e==="compositionend"||!ii&&Hs(e,t)?(e=$s(),Nr=ri=rt=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function la(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hd[e.type]:t==="textarea"}function Qs(e,t,n,r){ws(r),t=$r(t,"onChange"),0<t.length&&(n=new li("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,$n=null;function Vd(e){eu(e,0)}function ol(e){var t=Ut(e);if(ps(t))return e}function Qd(e,t){if(e==="change")return t}var Bs=!1;if(Ke){var Fl;if(Ke){var Ll="oninput"in document;if(!Ll){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),Ll=typeof oa.oninput=="function"}Fl=Ll}else Fl=!1;Bs=Fl&&(!document.documentMode||9<document.documentMode)}function ia(){zn&&(zn.detachEvent("onpropertychange",Ws),$n=zn=null)}function Ws(e){if(e.propertyName==="value"&&ol($n)){var t=[];Qs(t,$n,e,Zo(e)),js(Vd,t)}}function Bd(e,t,n){e==="focusin"?(ia(),zn=t,$n=n,zn.attachEvent("onpropertychange",Ws)):e==="focusout"&&ia()}function Wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol($n)}function bd(e,t){if(e==="click")return ol(t)}function Kd(e,t){if(e==="input"||e==="change")return ol(t)}function Yd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Yd;function Un(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yl.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sa(e,t){var n=aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aa(n)}}function bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ks(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gd(e){var t=Ks(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bs(n.ownerDocument.documentElement,n)){if(r!==null&&ai(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=sa(n,o);var i=sa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=Ke&&"documentMode"in document&&11>=document.documentMode,At=null,mo=null,_n=null,ho=!1;function ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ho||At==null||At!==Tr(r)||(r=At,"selectionStart"in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_n&&Un(_n,r)||(_n=r,r=$r(mo,"onSelect"),0<r.length&&(t=new li("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=At)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Tl={},Ys={};Ke&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function il(e){if(Tl[e])return Tl[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ys)return Tl[e]=t[n];return e}var Gs=il("animationend"),Xs=il("animationiteration"),qs=il("animationstart"),Zs=il("transitionend"),Js=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){Js.set(e,t),Tt(t,[e])}for(var Ml=0;Ml<ca.length;Ml++){var Il=ca[Ml],qd=Il.toLowerCase(),Zd=Il[0].toUpperCase()+Il.slice(1);ht(qd,"on"+Zd)}ht(Gs,"onAnimationEnd");ht(Xs,"onAnimationIteration");ht(qs,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Zs,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qc(r,t,void 0,e),e.currentTarget=null}function eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;da(l,a,c),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;da(l,a,c),o=s}}}if(Ir)throw e=uo,Ir=!1,uo=null,e}function O(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[fr]){e[fr]=!0,ss.forEach(function(n){n!=="selectionchange"&&(Jd.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Rl("selectionchange",!1,t))}}function tu(e,t,n,r){switch(As(t)){case 1:var l=pd;break;case 4:l=md;break;default:l=ni}n=l.bind(null,t,n,e),l=void 0,!so||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=St(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}js(function(){var c=o,g=Zo(n),h=[];e:{var m=Js.get(e);if(m!==void 0){var x=li,w=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":x=Pd;break;case"focusin":w="focus",x=Pl;break;case"focusout":w="blur",x=Pl;break;case"beforeblur":case"afterblur":x=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ji;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Td;break;case Gs:case Xs:case qs:x=wd;break;case Zs:x=Id;break;case"scroll":x=hd;break;case"wheel":x=Od;break;case"copy":case"cut":case"paste":x=Sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ta}var k=(t&4)!==0,A=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Rn(d,f),v!=null&&k.push(Vn(d,v,p)))),A)break;d=d.return}0<k.length&&(m=new x(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==io&&(w=n.relatedTarget||n.fromElement)&&(St(w)||w[Ye]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?St(w):null,w!==null&&(A=Mt(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(k=Ji,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=ta,v="onPointerLeave",f="onPointerEnter",d="pointer"),A=x==null?m:Ut(x),p=w==null?m:Ut(w),m=new k(v,d+"leave",x,n,g),m.target=A,m.relatedTarget=p,v=null,St(g)===c&&(k=new k(f,d+"enter",w,n,g),k.target=p,k.relatedTarget=A,v=k),A=v,x&&w)t:{for(k=x,f=w,d=0,p=k;p;p=It(p))d++;for(p=0,v=f;v;v=It(v))p++;for(;0<d-p;)k=It(k),d--;for(;0<p-d;)f=It(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=It(k),f=It(f)}k=null}else k=null;x!==null&&fa(h,m,x,k,!1),w!==null&&A!==null&&fa(h,A,w,k,!0)}}e:{if(m=c?Ut(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var N=Qd;else if(la(m))if(Bs)N=Kd;else{N=Wd;var C=Bd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=bd);if(N&&(N=N(e,c))){Qs(h,N,n,g);break e}C&&C(e,m,c),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&to(m,"number",m.value)}switch(C=c?Ut(c):window,e){case"focusin":(la(C)||C.contentEditable==="true")&&(At=C,mo=c,_n=null);break;case"focusout":_n=mo=At=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,ua(h,n,g);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":ua(h,n,g)}var E;if(ii)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Dt?Hs(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Us&&n.locale!=="ko"&&(Dt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Dt&&(E=$s()):(rt=g,ri="value"in rt?rt.value:rt.textContent,Dt=!0)),C=$r(c,z),0<C.length&&(z=new ea(z,e,null,n,g),h.push({event:z,listeners:C}),E?z.data=E:(E=Vs(n),E!==null&&(z.data=E)))),(E=Ad?$d(e,n):Ud(e,n))&&(c=$r(c,"onBeforeInput"),0<c.length&&(g=new ea("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:c}),g.data=E))}eu(h,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Rn(e,n),o!=null&&r.unshift(Vn(e,o,l)),o=Rn(e,t),o!=null&&r.push(Vn(e,o,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Rn(n,o),s!=null&&i.unshift(Vn(n,s,a))):l||(s=Rn(n,o),s!=null&&i.push(Vn(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var ef=/\r\n?/g,tf=/\u0000|\uFFFD/g;function pa(e){return(typeof e=="string"?e:""+e).replace(ef,`
`).replace(tf,"")}function pr(e,t,n){if(t=pa(t),pa(e)!==t&&n)throw Error(y(425))}function Ur(){}var go=null,vo=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=typeof setTimeout=="function"?setTimeout:void 0,nf=typeof clearTimeout=="function"?clearTimeout:void 0,ma=typeof Promise=="function"?Promise:void 0,rf=typeof queueMicrotask=="function"?queueMicrotask:typeof ma<"u"?function(e){return ma.resolve(null).then(e).catch(lf)}:xo;function lf(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),An(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);An(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),$e="__reactFiber$"+un,Qn="__reactProps$"+un,Ye="__reactContainer$"+un,wo="__reactEvents$"+un,of="__reactListeners$"+un,af="__reactHandles$"+un;function St(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ha(e);e!==null;){if(n=e[$e])return n;e=ha(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[$e]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function al(e){return e[Qn]||null}var ko=[],Ht=-1;function gt(e){return{current:e}}function D(e){0>Ht||(e.current=ko[Ht],ko[Ht]=null,Ht--)}function R(e,t){Ht++,ko[Ht]=e.current,e.current=t}var mt={},ae=gt(mt),me=gt(!1),zt=mt;function en(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Hr(){D(me),D(ae)}function ga(e,t,n){if(ae.current!==mt)throw Error(y(168));R(ae,t),R(me,n)}function nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Bc(e)||"Unknown",l));return V({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,zt=ae.current,R(ae,e),R(me,me.current),!0}function va(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=nu(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,D(me),D(ae),R(ae,e)):D(me),R(me,n)}var Qe=null,sl=!1,Al=!1;function ru(e){Qe===null?Qe=[e]:Qe.push(e)}function sf(e){sl=!0,ru(e)}function vt(){if(!Al&&Qe!==null){Al=!0;var e=0,t=M;try{var n=Qe;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,sl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),_s(Jo,vt),l}finally{M=t,Al=!1}}return null}var Vt=[],Qt=0,Qr=null,Br=0,Ne=[],je=0,_t=null,Be=1,We="";function wt(e,t){Vt[Qt++]=Br,Vt[Qt++]=Qr,Qr=e,Br=t}function lu(e,t,n){Ne[je++]=Be,Ne[je++]=We,Ne[je++]=_t,_t=e;var r=Be;e=We;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var o=32-Ie(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Be=1<<32-Ie(t)+l|n<<l|r,We=o+e}else Be=1<<o|n<<l|r,We=e}function si(e){e.return!==null&&(wt(e,1),lu(e,1,0))}function ui(e){for(;e===Qr;)Qr=Vt[--Qt],Vt[Qt]=null,Br=Vt[--Qt],Vt[Qt]=null;for(;e===_t;)_t=Ne[--je],Ne[je]=null,We=Ne[--je],Ne[je]=null,Be=Ne[--je],Ne[je]=null}var xe=null,ye=null,$=!1,Me=null;function ou(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Be,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function So(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if($){var t=ye;if(t){var n=t;if(!ya(e,t)){if(So(e))throw Error(y(418));t=st(n.nextSibling);var r=xe;t&&ya(e,t)?ou(r,n):(e.flags=e.flags&-4097|2,$=!1,xe=e)}}else{if(So(e))throw Error(y(418));e.flags=e.flags&-4097|2,$=!1,xe=e}}}function xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function mr(e){if(e!==xe)return!1;if(!$)return xa(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=ye)){if(So(e))throw iu(),Error(y(418));for(;t;)ou(e,t),t=st(t.nextSibling)}if(xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?st(e.stateNode.nextSibling):null;return!0}function iu(){for(var e=ye;e;)e=st(e.nextSibling)}function tn(){ye=xe=null,$=!1}function ci(e){Me===null?Me=[e]:Me.push(e)}var uf=qe.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wa(e){var t=e._init;return t(e._payload)}function au(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=ft(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=Wl(p,f.mode,v),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,v){var N=p.type;return N===Ot?g(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&wa(N)===d.type)?(v=l(d,p.props),v.ref=vn(f,d,p),v.return=f,v):(v=Lr(p.type,p.key,p.props,null,f.mode,v),v.ref=vn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=bl(p,f.mode,v),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function g(f,d,p,v,N){return d===null||d.tag!==7?(d=Et(p,f.mode,v,N),d.return=f,d):(d=l(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case lr:return p=Lr(d.type,d.key,d.props,null,f.mode,p),p.ref=vn(f,null,d),p.return=f,p;case Rt:return d=bl(d,f.mode,p),d.return=f,d;case Je:var v=d._init;return h(f,v(d._payload),p)}if(kn(d)||fn(d))return d=Et(d,f.mode,p,null),d.return=f,d;hr(f,d)}return null}function m(f,d,p,v){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===N?s(f,d,p,v):null;case Rt:return p.key===N?c(f,d,p,v):null;case Je:return N=p._init,m(f,d,N(p._payload),v)}if(kn(p)||fn(p))return N!==null?null:g(f,d,p,v,null);hr(f,p)}return null}function x(f,d,p,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lr:return f=f.get(v.key===null?p:v.key)||null,s(d,f,v,N);case Rt:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,N);case Je:var C=v._init;return x(f,d,p,C(v._payload),N)}if(kn(v)||fn(v))return f=f.get(p)||null,g(d,f,v,N,null);hr(d,v)}return null}function w(f,d,p,v){for(var N=null,C=null,E=d,z=d=0,B=null;E!==null&&z<p.length;z++){E.index>z?(B=E,E=null):B=E.sibling;var L=m(f,E,p[z],v);if(L===null){E===null&&(E=B);break}e&&E&&L.alternate===null&&t(f,E),d=o(L,d,z),C===null?N=L:C.sibling=L,C=L,E=B}if(z===p.length)return n(f,E),$&&wt(f,z),N;if(E===null){for(;z<p.length;z++)E=h(f,p[z],v),E!==null&&(d=o(E,d,z),C===null?N=E:C.sibling=E,C=E);return $&&wt(f,z),N}for(E=r(f,E);z<p.length;z++)B=x(E,f,z,p[z],v),B!==null&&(e&&B.alternate!==null&&E.delete(B.key===null?z:B.key),d=o(B,d,z),C===null?N=B:C.sibling=B,C=B);return e&&E.forEach(function(Pe){return t(f,Pe)}),$&&wt(f,z),N}function k(f,d,p,v){var N=fn(p);if(typeof N!="function")throw Error(y(150));if(p=N.call(p),p==null)throw Error(y(151));for(var C=N=null,E=d,z=d=0,B=null,L=p.next();E!==null&&!L.done;z++,L=p.next()){E.index>z?(B=E,E=null):B=E.sibling;var Pe=m(f,E,L.value,v);if(Pe===null){E===null&&(E=B);break}e&&E&&Pe.alternate===null&&t(f,E),d=o(Pe,d,z),C===null?N=Pe:C.sibling=Pe,C=Pe,E=B}if(L.done)return n(f,E),$&&wt(f,z),N;if(E===null){for(;!L.done;z++,L=p.next())L=h(f,L.value,v),L!==null&&(d=o(L,d,z),C===null?N=L:C.sibling=L,C=L);return $&&wt(f,z),N}for(E=r(f,E);!L.done;z++,L=p.next())L=x(E,f,z,L.value,v),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?z:L.key),d=o(L,d,z),C===null?N=L:C.sibling=L,C=L);return e&&E.forEach(function(cn){return t(f,cn)}),$&&wt(f,z),N}function A(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var N=p.key,C=d;C!==null;){if(C.key===N){if(N=p.type,N===Ot){if(C.tag===7){n(f,C.sibling),d=l(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&wa(N)===C.type){n(f,C.sibling),d=l(C,p.props),d.ref=vn(f,C,p),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Ot?(d=Et(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Lr(p.type,p.key,p.props,null,f.mode,v),v.ref=vn(f,d,p),v.return=f,f=v)}return i(f);case Rt:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=bl(p,f.mode,v),d.return=f,f=d}return i(f);case Je:return C=p._init,A(f,d,C(p._payload),v)}if(kn(p))return w(f,d,p,v);if(fn(p))return k(f,d,p,v);hr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=Wl(p,f.mode,v),d.return=f,f=d),i(f)):n(f,d)}return A}var nn=au(!0),su=au(!1),Wr=gt(null),br=null,Bt=null,di=null;function fi(){di=Bt=br=null}function pi(e){var t=Wr.current;D(Wr),e._currentValue=t}function jo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qt(e,t){br=e,di=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(br===null)throw Error(y(308));Bt=e,br.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var Nt=null;function mi(e){Nt===null?Nt=[e]:Nt.push(e)}function uu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,mi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,mi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}function ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;et=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(o!==null){var h=l.baseState;i=0,g=c=s=null,a=o;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=V({},h,m);break e;case 2:et=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=x,s=h):g=g.next=x,i|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ft|=i,e.lanes=i,e.memoizedState=h}}function Sa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var er={},He=gt(er),Bn=gt(er),Wn=gt(er);function jt(e){if(e===er)throw Error(y(174));return e}function gi(e,t){switch(R(Wn,t),R(Bn,e),R(He,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ro(t,e)}D(He),R(He,t)}function rn(){D(He),D(Bn),D(Wn)}function du(e){jt(Wn.current);var t=jt(He.current),n=ro(t,e.type);t!==n&&(R(Bn,e),R(He,n))}function vi(e){Bn.current===e&&(D(He),D(Bn))}var U=gt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function yi(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Er=qe.ReactCurrentDispatcher,Ul=qe.ReactCurrentBatchConfig,Pt=0,H=null,Y=null,J=null,Gr=!1,Pn=!1,bn=0,cf=0;function le(){throw Error(y(321))}function xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function wi(e,t,n,r,l,o){if(Pt=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?mf:hf,e=n(r,l),Pn){o=0;do{if(Pn=!1,bn=0,25<=o)throw Error(y(301));o+=1,J=Y=null,t.updateQueue=null,Er.current=gf,e=n(r,l)}while(Pn)}if(Er.current=Xr,t=Y!==null&&Y.next!==null,Pt=0,J=Y=H=null,Gr=!1,t)throw Error(y(300));return e}function ki(){var e=bn!==0;return bn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function _e(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=J===null?H.memoizedState:J.next;if(t!==null)J=t,Y=e;else{if(e===null)throw Error(y(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function Kn(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,c=o;do{var g=c.lane;if((Pt&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,i=r):s=s.next=h,H.lanes|=g,Ft|=g}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=a,Oe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,H.lanes|=o,Ft|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Oe(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fu(){}function pu(e,t){var n=H,r=_e(),l=t(),o=!Oe(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,Si(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Yn(9,hu.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(y(349));Pt&30||mu(n,t,l)}return l}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hu(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&yu(e)}function gu(e,t,n){return n(function(){vu(t)&&yu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function yu(e){var t=Ge(e,1);t!==null&&Re(t,e,1,-1)}function Na(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=pf.bind(null,H,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xu(){return _e().memoizedState}function zr(e,t,n,r){var l=Ae();H.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=_e();r=r===void 0?null:r;var o=void 0;if(Y!==null){var i=Y.memoizedState;if(o=i.destroy,r!==null&&xi(r,i.deps)){l.memoizedState=Yn(t,n,o,r);return}}H.flags|=e,l.memoizedState=Yn(1|t,n,o,r)}function ja(e,t){return zr(8390656,8,e,t)}function Si(e,t){return ul(2048,8,e,t)}function wu(e,t){return ul(4,2,e,t)}function ku(e,t){return ul(4,4,e,t)}function Su(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Su.bind(null,t,e),n)}function Ni(){}function ju(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return Pt&21?(Oe(n,t)||(n=Ls(),H.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function df(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{M=n,Ul.transition=r}}function zu(){return _e().memoizedState}function ff(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e))Pu(t,n);else if(n=uu(e,t,n,r),n!==null){var l=ue();Re(n,e,r,l),Fu(n,t,r)}}function pf(e,t,n){var r=dt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Pu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Oe(a,i)){var s=t.interleaved;s===null?(l.next=l,mi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=uu(e,t,l,r),n!==null&&(l=ue(),Re(n,e,r,l),Fu(n,t,r))}}function _u(e){var t=e.alternate;return e===H||t!==null&&t===H}function Pu(e,t){Pn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}var Xr={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},mf={readContext:ze,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,Su.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ff.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:Na,useDebugValue:Ni,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=Na(!1),t=e[0];return e=df.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Ae();if($){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ee===null)throw Error(y(349));Pt&30||mu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,ja(gu.bind(null,r,o,e),[e]),r.flags|=2048,Yn(9,hu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ae(),t=ee.identifierPrefix;if($){var n=We,r=Be;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hf={readContext:ze,useCallback:ju,useContext:ze,useEffect:Si,useImperativeHandle:Nu,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Cu,useReducer:Hl,useRef:xu,useState:function(){return Hl(Kn)},useDebugValue:Ni,useDeferredValue:function(e){var t=_e();return Eu(t,Y.memoizedState,e)},useTransition:function(){var e=Hl(Kn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:pu,useId:zu,unstable_isNewReconciler:!1},gf={readContext:ze,useCallback:ju,useContext:ze,useEffect:Si,useImperativeHandle:Nu,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Cu,useReducer:Vl,useRef:xu,useState:function(){return Vl(Kn)},useDebugValue:Ni,useDeferredValue:function(e){var t=_e();return Y===null?t.memoizedState=e:Eu(t,Y.memoizedState,e)},useTransition:function(){var e=Vl(Kn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:pu,useId:zu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=dt(e),o=be(r,l);o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Re(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=dt(e),o=be(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Re(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=dt(e),l=be(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Re(t,e,r,n),Cr(t,e,r))}};function Ca(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,o):!0}function Lu(e,t,n){var r=!1,l=mt,o=t.contextType;return typeof o=="object"&&o!==null?o=ze(o):(l=he(t)?zt:ae.current,r=t.contextTypes,o=(r=r!=null)?en(e,l):mt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Eo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},hi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=ze(o):(o=he(t)?zt:ae.current,l.context=en(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Co(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=Qc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,t,n){n=be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,Do=r),zo(e,t)},n}function Mu(e,t,n){n=be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){zo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zo(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function za(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Lf.bind(null,e,t,n),t.then(e,e))}function _a(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=be(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var yf=qe.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?su(t,null,n,r):nn(t,e.child,n,r)}function Fa(e,t,n,r,l){n=n.render;var o=t.ref;return qt(t,l),r=wi(e,t,n,r,o,l),n=ki(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):($&&n&&si(t),t.flags|=1,se(e,t,r,l),t.child)}function La(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Li(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Iu(e,t,o,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(i,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Un(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return _o(e,t,n,r,l)}function Ru(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(bt,ve),ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(bt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,R(bt,ve),ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,R(bt,ve),ve|=r;return se(e,t,l,n),t.child}function Ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _o(e,t,n,r,l){var o=he(n)?zt:ae.current;return o=en(t,o),qt(t,l),n=wi(e,t,n,r,o,l),r=ki(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):($&&r&&si(t),t.flags|=1,se(e,t,n,l),t.child)}function Ta(e,t,n,r,l){if(he(n)){var o=!0;Vr(t)}else o=!1;if(qt(t,l),t.stateNode===null)_r(e,t),Lu(t,n,r),Eo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=he(n)?zt:ae.current,c=en(t,c));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ea(t,i,r,c),et=!1;var m=t.memoizedState;i.state=m,Kr(t,r,i,l),s=t.memoizedState,a!==r||m!==s||me.current||et?(typeof g=="function"&&(Co(t,n,g,r),s=t.memoizedState),(a=et||Ca(t,n,a,r,m,s,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,cu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Le(t.type,a),i.props=c,h=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=he(n)?zt:ae.current,s=en(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Ea(t,i,r,s),et=!1,m=t.memoizedState,i.state=m,Kr(t,r,i,l);var w=t.memoizedState;a!==h||m!==w||me.current||et?(typeof x=="function"&&(Co(t,n,x,r),w=t.memoizedState),(c=et||Ca(t,n,c,r,m,w,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Po(e,t,n,r,o,l)}function Po(e,t,n,r,l,o){Ou(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&va(t,n,!1),Xe(e,t,o);r=t.stateNode,yf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=nn(t,e.child,null,o),t.child=nn(t,null,a,o)):se(e,t,a,o),t.memoizedState=r.state,l&&va(t,n,!0),t.child}function Du(e){var t=e.stateNode;t.pendingContext?ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ga(e,t.context,!1),gi(e,t.containerInfo)}function Ma(e,t,n,r,l){return tn(),ci(l),t.flags|=256,se(e,t,n,r),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,n){var r=t.pendingProps,l=U.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),R(U,l&1),e===null)return No(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pl(i,r,0,null),e=Et(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Lo(n),t.memoizedState=Fo,e):ji(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return xf(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ft(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=ft(a,o):(o=Et(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Lo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Fo,r}return o=e.child,e=o.sibling,r=ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ji(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&ci(r),nn(t,e.child,null,n),e=ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(y(422))),gr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=pl({mode:"visible",children:r.children},l,0,null),o=Et(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&nn(t,e.child,null,i),t.child.memoizedState=Lo(i),t.memoizedState=Fo,o);if(!(t.mode&1))return gr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=Ql(o,r,void 0),gr(e,t,i,r)}if(a=(i&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),Re(r,e,l,-1))}return Fi(),r=Ql(Error(y(421))),gr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Tf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ye=st(l.nextSibling),xe=t,$=!0,Me=null,e!==null&&(Ne[je++]=Be,Ne[je++]=We,Ne[je++]=_t,Be=e.id,We=e.overflow,_t=t),t=ji(t,r.children),t.flags|=4096,t)}function Ia(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jo(e.return,t,n)}function Bl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function $u(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ia(e,n,t);else if(e.tag===19)Ia(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wf(e,t,n){switch(t.tag){case 3:Du(t),tn();break;case 5:du(t);break;case 1:he(t.type)&&Vr(t);break;case 4:gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;R(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Au(e,t,n):(R(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);R(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $u(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ru(e,t,n)}return Xe(e,t,n)}var Uu,To,Hu,Vu;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};To=function(){};Hu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,jt(He.current);var o=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=no(e,l),r=no(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}lo(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&O("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kf(e,t,n){var r=t.pendingProps;switch(ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return he(t.type)&&Hr(),oe(t),null;case 3:return r=t.stateNode,rn(),D(me),D(ae),yi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Uo(Me),Me=null))),To(e,t),oe(t),null;case 5:vi(t);var l=jt(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return oe(t),null}if(e=jt(He.current),mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$e]=t,r[Qn]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<Nn.length;l++)O(Nn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Qi(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":Wi(r,o),O("invalid",r)}lo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",""+a]):Mn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&O("scroll",r)}switch(n){case"input":or(r),Bi(r,o,!0);break;case"textarea":or(r),bi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[$e]=t,e[Qn]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(i=oo(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nn.length;l++)O(Nn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Qi(e,r),l=Jl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":Wi(e,r),l=no(e,r),O("invalid",e);break;default:l=r}lo(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?xs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&vs(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&In(e,s):typeof s=="number"&&In(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&O("scroll",e):s!=null&&Yo(e,o,s,i))}switch(n){case"input":or(e),Bi(e,r,!1);break;case"textarea":or(e),bi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Kt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=jt(Wn.current),jt(He.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(o=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return oe(t),null;case 13:if(D(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ye!==null&&t.mode&1&&!(t.flags&128))iu(),tn(),t.flags|=98560,o=!1;else if(o=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[$e]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else Me!==null&&(Uo(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):Fi())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return rn(),To(e,t),e===null&&Hn(t.stateNode.containerInfo),oe(t),null;case 10:return pi(t.type._context),oe(t),null;case 17:return he(t.type)&&Hr(),oe(t),null;case 19:if(D(U),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)yn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yr(e),i!==null){for(t.flags|=128,yn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&b()>on&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!$)return oe(t),null}else 2*b()-o.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,n=U.current,R(U,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Pi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Sf(e,t){switch(ui(t),t.tag){case 1:return he(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),D(me),D(ae),yi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vi(t),null;case 13:if(D(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(U),null;case 4:return rn(),null;case 10:return pi(t.type._context),null;case 22:case 23:return Pi(),null;case 24:return null;default:return null}}var vr=!1,ie=!1,Nf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Mo(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Ra=!1;function jf(e,t){if(go=Dr,e=Ks(),ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(a=i+l),h!==o||r!==0&&h.nodeType!==3||(s=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++c===l&&(a=i),m===o&&++g===r&&(s=i),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(vo={focusedElem:e,selectionRange:n},Dr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,A=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),A);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Ra,Ra=!1,w}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Mo(t,n,o)}l=l.next}while(l!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[Qn],delete t[wo],delete t[of],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Oa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var te=null,Te=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Wu(e,t,n),n=n.sibling}function Wu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:ie||Wt(n,t);case 6:var r=te,l=Te;te=null,Ze(e,t,n),te=r,Te=l,te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),An(e)):Dl(te,n.stateNode));break;case 4:r=te,l=Te,te=n.stateNode.containerInfo,Te=!0,Ze(e,t,n),te=r,Te=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Mo(n,t,i),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!ie&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Ze(e,t,n),ie=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nf),t.forEach(function(r){var l=Mf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Te=!1;break e;case 3:te=a.stateNode.containerInfo,Te=!0;break e;case 4:te=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(te===null)throw Error(y(160));Wu(o,i,l),te=null,Te=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){Q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bu(t,e),t=t.sibling}function bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),De(e),r&4){try{Fn(3,e,e.return),dl(3,e)}catch(k){Q(e,e.return,k)}try{Fn(5,e,e.return)}catch(k){Q(e,e.return,k)}}break;case 1:Fe(t,e),De(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Fe(t,e),De(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(k){Q(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ms(l,o),oo(a,i);var c=oo(a,o);for(i=0;i<s.length;i+=2){var g=s[i],h=s[i+1];g==="style"?xs(l,h):g==="dangerouslySetInnerHTML"?vs(l,h):g==="children"?In(l,h):Yo(l,g,h,c)}switch(a){case"input":eo(l,o);break;case"textarea":hs(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Kt(l,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Kt(l,!!o.multiple,o.defaultValue,!0):Kt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Qn]=o}catch(k){Q(e,e.return,k)}}break;case 6:if(Fe(t,e),De(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){Q(e,e.return,k)}}break;case 3:if(Fe(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(k){Q(e,e.return,k)}break;case 4:Fe(t,e),De(e);break;case 13:Fe(t,e),De(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(zi=b())),r&4&&Da(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||g,Fe(t,e),ie=c):Fe(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:Fn(4,m,m.return);break;case 1:Wt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){Q(r,n,k)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){$a(h);continue}}x!==null?(x.return=m,S=x):$a(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ys("display",i))}catch(k){Q(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){Q(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fe(t,e),De(e),r&4&&Da(e);break;case 21:break;default:Fe(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var o=Oa(e);Oo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Oa(e);Ro(e,a,i);break;default:throw Error(y(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cf(e,t,n){S=e,Ku(e)}function Ku(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||vr;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ie;a=vr;var c=ie;if(vr=i,(ie=s)&&!c)for(S=l;S!==null;)i=S,s=i.child,i.tag===22&&i.memoizedState!==null?Ua(l):s!==null?(s.return=i,S=s):Ua(l);for(;o!==null;)S=o,Ku(o),o=o.sibling;S=l,vr=a,ie=c}Aa(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Aa(e)}}function Aa(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Sa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sa(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&An(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ie||t.flags&512&&Io(t)}catch(m){Q(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function $a(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ua(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){Q(t,l,s)}}var o=t.return;try{Io(t)}catch(s){Q(t,o,s)}break;case 5:var i=t.return;try{Io(t)}catch(s){Q(t,i,s)}}}catch(s){Q(t,t.return,s)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var Ef=Math.ceil,qr=qe.ReactCurrentDispatcher,Ci=qe.ReactCurrentOwner,Ee=qe.ReactCurrentBatchConfig,T=0,ee=null,K=null,ne=0,ve=0,bt=gt(0),X=0,Gn=null,Ft=0,fl=0,Ei=0,Ln=null,fe=null,zi=0,on=1/0,Ve=null,Zr=!1,Do=null,ct=null,yr=!1,lt=null,Jr=0,Tn=0,Ao=null,Pr=-1,Fr=0;function ue(){return T&6?b():Pr!==-1?Pr:Pr=b()}function dt(e){return e.mode&1?T&2&&ne!==0?ne&-ne:uf.transition!==null?(Fr===0&&(Fr=Ls()),Fr):(e=M,e!==0||(e=window.event,e=e===void 0?16:As(e.type)),e):1}function Re(e,t,n,r){if(50<Tn)throw Tn=0,Ao=null,Error(y(185));qn(e,n,r),(!(T&2)||e!==ee)&&(e===ee&&(!(T&2)&&(fl|=n),X===4&&nt(e,ne)),ge(e,r),n===1&&T===0&&!(t.mode&1)&&(on=b()+500,sl&&vt()))}function ge(e,t){var n=e.callbackNode;sd(e,t);var r=Or(e,e===ee?ne:0);if(r===0)n!==null&&Gi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gi(n),t===1)e.tag===0?sf(Ha.bind(null,e)):ru(Ha.bind(null,e)),rf(function(){!(T&6)&&vt()}),n=null;else{switch(Ts(r)){case 1:n=Jo;break;case 4:n=Ps;break;case 16:n=Rr;break;case 536870912:n=Fs;break;default:n=Rr}n=tc(n,Yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yu(e,t){if(Pr=-1,Fr=0,T&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Or(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=T;T|=2;var o=Xu();(ee!==e||ne!==t)&&(Ve=null,on=b()+500,Ct(e,t));do try{Pf();break}catch(a){Gu(e,a)}while(!0);fi(),qr.current=o,T=l,K!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(l=co(e),l!==0&&(r=l,t=$o(e,l))),t===1)throw n=Gn,Ct(e,0),nt(e,r),ge(e,b()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!zf(l)&&(t=el(e,r),t===2&&(o=co(e),o!==0&&(r=o,t=$o(e,o))),t===1))throw n=Gn,Ct(e,0),nt(e,r),ge(e,b()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:kt(e,fe,Ve);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=zi+500-b(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=xo(kt.bind(null,e,fe,Ve),t);break}kt(e,fe,Ve);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ie(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ef(r/1960))-r,10<r){e.timeoutHandle=xo(kt.bind(null,e,fe,Ve),r);break}kt(e,fe,Ve);break;case 5:kt(e,fe,Ve);break;default:throw Error(y(329))}}}return ge(e,b()),e.callbackNode===n?Yu.bind(null,e):null}function $o(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=el(e,t),e!==2&&(t=fe,fe=n,t!==null&&Uo(t)),e}function Uo(e){fe===null?fe=e:fe.push.apply(fe,e)}function zf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Oe(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Ei,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Ha(e){if(T&6)throw Error(y(327));Zt();var t=Or(e,0);if(!(t&1))return ge(e,b()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=co(e);r!==0&&(t=r,n=$o(e,r))}if(n===1)throw n=Gn,Ct(e,0),nt(e,t),ge(e,b()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,fe,Ve),ge(e,b()),null}function _i(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(on=b()+500,sl&&vt())}}function Lt(e){lt!==null&&lt.tag===0&&!(T&6)&&Zt();var t=T;T|=1;var n=Ee.transition,r=M;try{if(Ee.transition=null,M=1,e)return e()}finally{M=r,Ee.transition=n,T=t,!(T&6)&&vt()}}function Pi(){ve=bt.current,D(bt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:rn(),D(me),D(ae),yi();break;case 5:vi(r);break;case 4:rn();break;case 13:D(U);break;case 19:D(U);break;case 10:pi(r.type._context);break;case 22:case 23:Pi()}n=n.return}if(ee=e,K=e=ft(e.current,null),ne=ve=t,X=0,Gn=null,Ei=fl=Ft=0,fe=Ln=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Nt=null}return e}function Gu(e,t){do{var n=K;try{if(fi(),Er.current=Xr,Gr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Pt=0,J=Y=H=null,Pn=!1,bn=0,Ci.current=null,n===null||n.return===null){X=1,Gn=t,K=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=_a(i);if(x!==null){x.flags&=-257,Pa(x,i,a,o,t),x.mode&1&&za(o,c,t),t=x,s=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){za(o,c,t),Fi();break e}s=Error(y(426))}}else if($&&a.mode&1){var A=_a(i);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Pa(A,i,a,o,t),ci(ln(s,a));break e}}o=s=ln(s,a),X!==4&&(X=2),Ln===null?Ln=[o]:Ln.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Tu(o,s,t);ka(o,f);break e;case 1:a=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Mu(o,a,t);ka(o,v);break e}}o=o.return}while(o!==null)}Zu(n)}catch(N){t=N,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Xu(){var e=qr.current;return qr.current=Xr,e===null?Xr:e}function Fi(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Ft&268435455)&&!(fl&268435455)||nt(ee,ne)}function el(e,t){var n=T;T|=2;var r=Xu();(ee!==e||ne!==t)&&(Ve=null,Ct(e,t));do try{_f();break}catch(l){Gu(e,l)}while(!0);if(fi(),T=n,qr.current=r,K!==null)throw Error(y(261));return ee=null,ne=0,X}function _f(){for(;K!==null;)qu(K)}function Pf(){for(;K!==null&&!Jc();)qu(K)}function qu(e){var t=ec(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Zu(e):K=t,Ci.current=null}function Zu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=kf(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function kt(e,t,n){var r=M,l=Ee.transition;try{Ee.transition=null,M=1,Ff(e,t,n,r)}finally{Ee.transition=l,M=r}return null}function Ff(e,t,n,r){do Zt();while(lt!==null);if(T&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ud(e,o),e===ee&&(K=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,tc(Rr,function(){return Zt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var i=M;M=1;var a=T;T|=4,Ci.current=null,jf(e,n),bu(n,e),Gd(vo),Dr=!!go,vo=go=null,e.current=n,Cf(n),ed(),T=a,M=i,Ee.transition=o}else e.current=n;if(yr&&(yr=!1,lt=e,Jr=l),o=e.pendingLanes,o===0&&(ct=null),rd(n.stateNode),ge(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=Do,Do=null,e;return Jr&1&&e.tag!==0&&Zt(),o=e.pendingLanes,o&1?e===Ao?Tn++:(Tn=0,Ao=e):Tn=0,vt(),null}function Zt(){if(lt!==null){var e=Ts(Jr),t=Ee.transition,n=M;try{if(Ee.transition=null,M=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,Jr=0,T&6)throw Error(y(331));var l=T;for(T|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(S=c;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Fn(8,g,o)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var m=g.sibling,x=g.return;if(Qu(g),g===c){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var d=e.current;for(S=d;S!==null;){i=S;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,S=p;else e:for(i=d;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dl(9,a)}}catch(N){Q(a,a.return,N)}if(a===i){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(T=l,vt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{M=n,Ee.transition=t}}return!1}function Va(e,t,n){t=ln(n,t),t=Tu(e,t,1),e=ut(e,t,1),t=ue(),e!==null&&(qn(e,1,t),ge(e,t))}function Q(e,t,n){if(e.tag===3)Va(e,e,n);else for(;t!==null;){if(t.tag===3){Va(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=ln(n,e),e=Mu(t,e,1),t=ut(t,e,1),e=ue(),t!==null&&(qn(t,1,e),ge(t,e));break}}t=t.return}}function Lf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>b()-zi?Ct(e,0):Ei|=n),ge(e,t)}function Ju(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ue();e=Ge(e,t),e!==null&&(qn(e,t,n),ge(e,n))}function Tf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Mf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Ju(e,n)}var ec;ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,wf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,$&&t.flags&1048576&&lu(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var l=en(t,ae.current);qt(t,n),l=wi(null,t,r,e,l,n);var o=ki();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(o=!0,Vr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,hi(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,Eo(t,r,e,n),t=Po(null,t,r,!0,o,n)):(t.tag=0,$&&o&&si(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Rf(r),e=Le(r,e),l){case 0:t=_o(null,t,r,e,n);break e;case 1:t=Ta(null,t,r,e,n);break e;case 11:t=Fa(null,t,r,e,n);break e;case 14:t=La(null,t,r,Le(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_o(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ta(e,t,r,l,n);case 3:e:{if(Du(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,cu(e,t),Kr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=ln(Error(y(423)),t),t=Ma(e,t,r,n,l);break e}else if(r!==l){l=ln(Error(y(424)),t),t=Ma(e,t,r,n,l);break e}else for(ye=st(t.stateNode.containerInfo.firstChild),xe=t,$=!0,Me=null,n=su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===l){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&No(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,yo(r,l)?i=null:o!==null&&yo(r,o)&&(t.flags|=32),Ou(e,t),se(e,t,i,n),t.child;case 6:return e===null&&No(t),null;case 13:return Au(e,t,n);case 4:return gi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Fa(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,R(Wr,r._currentValue),r._currentValue=i,o!==null)if(Oe(o.value,i)){if(o.children===l.children&&!me.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=be(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),jo(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),jo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,qt(t,n),l=ze(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),La(e,t,r,l,n);case 15:return Iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_r(e,t),t.tag=1,he(r)?(e=!0,Vr(t)):e=!1,qt(t,n),Lu(t,r,l),Eo(t,r,l,n),Po(null,t,r,!0,e,n);case 19:return $u(e,t,n);case 22:return Ru(e,t,n)}throw Error(y(156,t.tag))};function tc(e,t){return _s(e,t)}function If(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new If(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===qo)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Li(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ot:return Et(n.children,l,o,t);case Go:i=8,l|=8;break;case Gl:return e=Ce(12,n,t,l|2),e.elementType=Gl,e.lanes=o,e;case Xl:return e=Ce(13,n,t,l),e.elementType=Xl,e.lanes=o,e;case ql:return e=Ce(19,n,t,l),e.elementType=ql,e.lanes=o,e;case ds:return pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:i=10;break e;case cs:i=9;break e;case Xo:i=11;break e;case qo:i=14;break e;case Je:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ce(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Et(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=ds,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function bl(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Of(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ti(e,t,n,r,l,o,i,a,s){return e=new Of(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hi(o),e}function Df(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nc(e){if(!e)return mt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(he(n))return nu(e,n,t)}return t}function rc(e,t,n,r,l,o,i,a,s){return e=Ti(n,r,!0,e,l,o,i,a,s),e.context=nc(null),n=e.current,r=ue(),l=dt(n),o=be(r,l),o.callback=t??null,ut(n,o,l),e.current.lanes=l,qn(e,l,r),ge(e,r),e}function ml(e,t,n,r){var l=t.current,o=ue(),i=dt(l);return n=nc(n),t.context===null?t.context=n:t.pendingContext=n,t=be(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,i),e!==null&&(Re(e,l,i,o),Cr(e,l,i)),i}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mi(e,t){Qa(e,t),(e=e.alternate)&&Qa(e,t)}function Af(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ii(e){this._internalRoot=e}hl.prototype.render=Ii.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ml(e,t,null,null)};hl.prototype.unmount=Ii.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){ml(null,e,null,null)}),t[Ye]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Ds(e)}};function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ba(){}function $f(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=tl(i);o.call(c)}}var i=rc(t,r,e,0,null,!1,!1,"",Ba);return e._reactRootContainer=i,e[Ye]=i.current,Hn(e.nodeType===8?e.parentNode:e),Lt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=tl(s);a.call(c)}}var s=Ti(e,0,!1,null,null,!1,!1,"",Ba);return e._reactRootContainer=s,e[Ye]=s.current,Hn(e.nodeType===8?e.parentNode:e),Lt(function(){ml(t,s,n,r)}),s}function vl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=tl(i);a.call(s)}}ml(t,i,e,l)}else i=$f(n,t,e,l,r);return tl(i)}Ms=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(ei(t,n|1),ge(t,b()),!(T&6)&&(on=b()+500,vt()))}break;case 13:Lt(function(){var r=Ge(e,1);if(r!==null){var l=ue();Re(r,e,1,l)}}),Mi(e,1)}};ti=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ue();Re(t,e,134217728,n)}Mi(e,134217728)}};Is=function(e){if(e.tag===13){var t=dt(e),n=Ge(e,t);if(n!==null){var r=ue();Re(n,e,t,r)}Mi(e,t)}};Rs=function(){return M};Os=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};ao=function(e,t,n){switch(t){case"input":if(eo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=al(r);if(!l)throw Error(y(90));ps(r),eo(r,l)}}}break;case"textarea":hs(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Ss=_i;Ns=Lt;var Uf={usingClientEntryPoint:!1,Events:[Jn,Ut,al,ws,ks,_i]},xn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{rl=xr.inject(Hf),Ue=xr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ri(t))throw Error(y(200));return Df(e,t,null,n)};ke.createRoot=function(e,t){if(!Ri(e))throw Error(y(299));var n=!1,r="",l=lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ti(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Ii(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Es(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Lt(e)};ke.hydrate=function(e,t,n){if(!gl(t))throw Error(y(200));return vl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Ri(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=lc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=rc(t,null,e,1,n??null,l,!1,o,i),e[Ye]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};ke.render=function(e,t,n){if(!gl(t))throw Error(y(200));return vl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!gl(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=_i;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return vl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),os.exports=ke;var Vf=os.exports,Wa=Vf;Kl.createRoot=Wa.createRoot,Kl.hydrateRoot=Wa.hydrateRoot;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ic=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=G.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...a},s)=>G.createElement("svg",{ref:s,...Bf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ic("lucide",l),...a},[...i.map(([c,g])=>G.createElement(c,g)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=(e,t)=>{const n=G.forwardRef(({className:r,...l},o)=>G.createElement(Wf,{ref:o,iconNode:t,className:ic(`lucide-${Qf(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=q("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=q("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=q("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=q("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=q("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=q("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=q("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=q("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=q("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=q("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=q("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=q("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),I={name:"Madarsa Sirat-e-illahi",tagline:"Nurturing Knowledge, Faith, and Excellence",heroSubtitle:"A premier institution dedicated to authentic Quranic education, classical Arabic, and holistic Islamic learning in a modern, inspiring academic environment.",about:{title:"About Our Madarsa",subtitle:"Rooted in Tradition, Committed to Academic Excellence",intro:"Madarsa Sirat-e-illahi was established to provide structured, authentic Islamic education that builds strong spiritual foundations alongside high academic standards. Our curriculum balances classical Islamic scholarship with modern educational techniques.",mission:"Our mission is to cultivate knowledgeable, ethical, and confident individuals grounded in Quranic teachings, classical Arabic understanding, and sound Islamic principles.",values:[{title:"Authentic Knowledge",description:"Curriculum verified by qualified Islamic scholars adhering to authentic methodology."},{title:"Character & Discipline",description:"Emphasizing moral excellence (Akhlaq), sincerity (Ikhlas), and respectful learning."},{title:"Structured Progression",description:"Thoughtfully designed learning paths suited for beginners through advanced students."},{title:"Nurturing Environment",description:"A calm, safe, and inspiring atmosphere that fosters deep focus and spiritual growth."}]},contact:{address:{line1:"H.no # B-10, kehkshaan society",line2:"Near Sunheri BookLand",city:"Qasimabad,Hyd",country:"Pakistan"},phone:"+92 311-1587772",whatsapp:"+92 311-1587772",hours:"Monday – Saturday: 4:00 PM – 8:00 PM (Closed Sundays)"}};function lp(){const[e,t]=G.useState(!1),[n,r]=G.useState(!1),[l,o]=G.useState("home");G.useEffect(()=>{const s=()=>{t(window.scrollY>20);const c=["home","about","courses","gallery","contact"],g=window.scrollY+100;for(const h of c){const m=document.getElementById(h);if(m){const x=m.offsetTop,w=m.offsetHeight;if(g>=x&&g<x+w){o(h);break}}}};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const i=[{name:"Home",href:"#home",id:"home"},{name:"About",href:"#about",id:"about"},{name:"Courses",href:"#courses",id:"courses"},{name:"Gallery",href:"#gallery",id:"gallery"},{name:"Contact",href:"#contact",id:"contact"}],a=(s,c)=>{s.preventDefault(),r(!1);const g=document.querySelector(c);g&&g.scrollIntoView({behavior:"smooth"})};return u.jsxs("header",{className:`navbar-header ${e?"scrolled":""}`,children:[u.jsxs("div",{className:"container nav-container",children:[u.jsxs("a",{href:"#home",onClick:s=>a(s,"#home"),className:"nav-brand",children:[u.jsx("div",{className:"brand-icon",children:u.jsx(sc,{size:22,className:"icon-emerald"})}),u.jsxs("div",{className:"brand-text",children:[u.jsx("span",{className:"brand-name",children:I.name}),u.jsx("span",{className:"brand-arabic",children:I.arabicName})]})]}),u.jsx("nav",{className:"nav-desktop","aria-label":"Main Navigation",children:u.jsx("ul",{className:"nav-list",children:i.map(s=>u.jsx("li",{children:u.jsx("a",{href:s.href,onClick:c=>a(c,s.href),className:`nav-link ${l===s.id?"active":""}`,children:s.name})},s.id))})}),u.jsx("button",{type:"button",className:"mobile-toggle",onClick:()=>r(!n),"aria-expanded":n,"aria-label":n?"Close Navigation Menu":"Open Navigation Menu",children:n?u.jsx(Ho,{size:26}):u.jsx(ep,{size:26})}),n&&u.jsx("div",{className:"mobile-drawer-backdrop",onClick:()=>r(!1),children:u.jsxs("div",{className:"mobile-drawer",onClick:s=>s.stopPropagation(),"aria-label":"Mobile Menu",children:[u.jsxs("div",{className:"mobile-drawer-header",children:[u.jsxs("div",{className:"brand-text",children:[u.jsx("span",{className:"brand-name",children:I.name}),u.jsx("span",{className:"brand-arabic",children:I.arabicName})]}),u.jsx("button",{type:"button",onClick:()=>r(!1),className:"mobile-close","aria-label":"Close menu",children:u.jsx(Ho,{size:24})})]}),u.jsx("nav",{className:"mobile-nav",children:u.jsx("ul",{children:i.map(s=>u.jsx("li",{children:u.jsx("a",{href:s.href,onClick:c=>a(c,s.href),className:`mobile-nav-link ${l===s.id?"active":""}`,children:s.name})},s.id))})}),u.jsx("div",{className:"mobile-drawer-footer",children:u.jsx("a",{href:"#contact",onClick:s=>a(s,"#contact"),className:"btn btn-emerald",style:{width:"100%"},children:"Contact Madarsa"})})]})})]}),u.jsx("style",{children:`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--nav-height);
          background-color: rgba(251, 249, 244, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(224, 230, 227, 0.6);
          transition: all var(--transition-normal);
        }

        .navbar-header.scrolled {
          background-color: rgba(255, 255, 255, 0.96);
          box-shadow: var(--shadow-sm);
          border-bottom-color: var(--color-border);
        }

        .nav-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .brand-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background-color: var(--color-emerald-subtle);
          border: 1px solid rgba(20, 73, 58, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-emerald-primary);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--color-emerald-darkest);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .brand-arabic {
          font-family: var(--font-serif);
          font-size: 0.875rem;
          color: var(--color-gold);
          line-height: 1;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-text-main);
          position: relative;
          padding: 0.35rem 0;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--color-emerald-primary);
        }

        .nav-link.active {
          color: var(--color-emerald-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--color-gold);
          border-radius: 2px;
        }

        .mobile-toggle {
          display: none;
          color: var(--color-emerald-darkest);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
        }

        .mobile-drawer-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(11, 43, 34, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1100;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease-out;
        }

        .mobile-drawer {
          width: 85%;
          max-width: 340px;
          height: 100%;
          background-color: var(--color-ivory);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-xl);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
        }

        .mobile-close {
          color: var(--color-text-muted);
          padding: 0.25rem;
        }

        .mobile-nav {
          padding-top: 1.5rem;
          flex: 1;
        }

        .mobile-nav ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.875rem 1rem;
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--color-text-main);
          border-radius: var(--radius-md);
          transition: background-color var(--transition-fast);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background-color: var(--color-emerald-subtle);
          color: var(--color-emerald-primary);
        }

        .mobile-drawer-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
        }

        @media (max-width: 840px) {
          .nav-desktop {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `})]})}function op(){const e=(t,n)=>{t.preventDefault();const r=document.querySelector(n);r&&r.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{id:"home",className:"hero-section",children:[u.jsxs("div",{className:"hero-bg",children:[u.jsx("img",{src:"/images/hero_main.jpg",alt:"Madarsa Sirat-e-illahi Library and Quranic Study Environment",className:"hero-bg-img"}),u.jsx("div",{className:"hero-overlay"})]}),u.jsx("div",{className:"container hero-container",children:u.jsxs("div",{className:"hero-content animate-fade-in",children:[u.jsxs("div",{className:"hero-badge",children:[u.jsx("span",{className:"badge-divider",children:"•"}),u.jsx("span",{children:"Authentic Islamic Education"})]}),u.jsx("h1",{className:"hero-title",children:I.name}),u.jsx("p",{className:"hero-tagline",children:I.tagline}),u.jsx("p",{className:"hero-intro",children:I.heroSubtitle}),u.jsxs("div",{className:"hero-actions",children:[u.jsxs("a",{href:"#courses",onClick:t=>e(t,"#courses"),className:"btn btn-primary",children:["Explore Courses",u.jsx(ac,{size:18})]}),u.jsxs("a",{href:"#contact",onClick:t=>e(t,"#contact"),className:"btn btn-secondary",children:["Contact Us",u.jsx(uc,{size:18})]})]}),u.jsxs("div",{className:"hero-highlights",children:[u.jsxs("div",{className:"highlight-pill",children:[u.jsx("span",{className:"pill-dot"}),u.jsx("span",{children:"Quranic Tajweed"})]}),u.jsxs("div",{className:"highlight-pill",children:[u.jsx("span",{className:"pill-dot"}),u.jsx("span",{children:"Hifz Program"})]}),u.jsxs("div",{className:"highlight-pill",children:[u.jsx("span",{className:"pill-dot"}),u.jsx("span",{children:"Islamic Studies"})]})]})]})}),u.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 92vh;
          padding-top: calc(var(--nav-height) + 4rem);
          padding-bottom: 5rem;
          display: flex;
          align-items: center;
          background-color: var(--color-emerald-darkest);
          color: #FFFFFF;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(11, 43, 34, 0.92) 0%,
            rgba(15, 56, 44, 0.86) 50%,
            rgba(20, 73, 58, 0.75) 100%
          );
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 780px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(197, 160, 89, 0.4);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-sand);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .badge-arabic {
          font-family: var(--font-serif);
          color: var(--color-gold);
          font-size: 1rem;
        }

        .badge-divider {
          color: var(--color-gold);
          opacity: 0.6;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw + 1rem, 4.25rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }

        .hero-tagline {
          font-size: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
          font-family: var(--font-serif);
          color: var(--color-gold);
          line-height: 1.3;
          margin-bottom: 1.25rem;
        }

        .hero-intro {
          font-size: clamp(1rem, 1.2vw + 0.5rem, 1.1875rem);
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.65;
          margin-bottom: 2.25rem;
          max-width: 680px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .hero-highlights {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .highlight-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }

        .pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: var(--color-gold);
        }

        @media (max-width: 640px) {
          .hero-section {
            min-height: 85vh;
            padding-top: calc(var(--nav-height) + 2rem);
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 0.875rem;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .hero-highlights {
            gap: 0.875rem;
          }
        }
      `})]})}function ip(){const e=[u.jsx(rp,{size:22,className:"val-icon"},"1"),u.jsx(Xf,{size:22,className:"val-icon"},"2"),u.jsx(bf,{size:22,className:"val-icon"},"3"),u.jsx(qf,{size:22,className:"val-icon"},"4")];return u.jsxs("section",{id:"about",className:"section-padding about-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-badge",children:"Institution Overview"}),u.jsx("h2",{className:"heading-secondary",children:I.about.title}),u.jsx("p",{className:"section-subtitle",children:I.about.subtitle})]}),u.jsxs("div",{className:"about-grid",children:[u.jsxs("div",{className:"about-image-wrapper",children:[u.jsxs("div",{className:"image-frame",children:[u.jsx("img",{src:"/images/office.jpeg",alt:"Madarsa Sirat-e-illahi Student Classroom and Quran Learning Environment",className:"about-img"}),u.jsx("div",{className:"image-gold-border"})]}),u.jsxs("div",{className:"about-stat-card",children:[u.jsx("span",{className:"stat-number",children:"100%"}),u.jsx("span",{className:"stat-label",children:"Authentic Quranic & Sharia Curriculum"})]})]}),u.jsxs("div",{className:"about-content",children:[u.jsx("h3",{className:"about-content-heading",children:"Preserving Sacred Heritage Through Structured Education"}),u.jsx("p",{className:"about-paragraph",children:I.about.intro}),u.jsxs("div",{className:"about-mission-box",children:[u.jsx("h4",{className:"mission-title",children:"Our Core Mission"}),u.jsx("p",{className:"mission-text",children:I.about.mission})]}),u.jsx("div",{className:"values-list",children:I.about.values.map((t,n)=>u.jsxs("div",{className:"value-card",children:[u.jsx("div",{className:"value-icon-box",children:e[n%e.length]}),u.jsxs("div",{children:[u.jsx("h5",{className:"value-title",children:t.title}),u.jsx("p",{className:"value-desc",children:t.description})]})]},n))})]})]})]}),u.jsx("style",{children:`
        .about-section {
          background-color: var(--color-ivory);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3.5rem;
          align-items: center;
        }

        .about-image-wrapper {
          position: relative;
        }

        .image-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .about-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          transition: transform var(--transition-slow);
        }

        .image-frame:hover .about-img {
          transform: scale(1.02);
        }

        .image-gold-border {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(197, 160, 89, 0.4);
          border-radius: var(--radius-lg);
          pointer-events: none;
        }

        .about-stat-card {
          position: absolute;
          bottom: -1.5rem;
          right: -1.5rem;
          background-color: var(--color-emerald-darkest);
          color: #FFFFFF;
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xl);
          border-left: 4px solid var(--color-gold);
          max-width: 260px;
        }

        .stat-number {
          display: block;
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-gold);
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          margin-top: 0.25rem;
        }

        .about-content-heading {
          font-size: clamp(1.35rem, 2vw + 0.5rem, 1.85rem);
          font-weight: 700;
          color: var(--color-emerald-darkest);
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .about-paragraph {
          font-size: 1.0625rem;
          color: var(--color-text-main);
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .about-mission-box {
          background-color: var(--color-sand);
          border-left: 3px solid var(--color-emerald-primary);
          padding: 1.25rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 2rem;
        }

        .mission-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-emerald-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }

        .mission-text {
          font-size: 0.9875rem;
          color: var(--color-text-main);
          font-style: italic;
          line-height: 1.6;
        }

        .values-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .value-card {
          display: flex;
          gap: 0.875rem;
          background-color: var(--color-surface);
          padding: 1.125rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--shadow-sm);
        }

        .value-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background-color: var(--color-emerald-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .val-icon {
          color: var(--color-emerald-primary);
        }

        .value-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-charcoal);
          margin-bottom: 0.2rem;
        }

        .value-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-stat-card {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 1rem;
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .values-list {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const ap=[{id:"all",label:"All Courses"},{id:"quran",label:"Quranic Studies"},{id:"language",label:"Arabic Language"},{id:"sharia",label:"Islamic Studies"}],ba=[{id:"quran-reading",title:"Quran Reading & Qaida (Nazira)",category:"quran",categoryLabel:"Quranic Studies",level:"Beginner",duration:"6 - 12 Months",image:"/images/course_quran.jpg",description:"Foundational course focusing on correct pronunciation of Arabic alphabets, basic reading rules, and fluent Quranic recitation.",highlights:["Letter recognition and articulation points (Makharij)","Vowel markings and basic word joining","Paced reading practice under expert supervision"]},{id:"tajweed-rules",title:"Tajweed & Recitation Excellence",category:"quran",categoryLabel:"Quranic Studies",level:"Intermediate",duration:"4 Months",image:"/images/course_tajweed.jpg",description:"In-depth mastery of Tajweed rules, phonetics, elongation (Madd), stop marks (Waqf), and melodic Quranic recitation.",highlights:["Rules of Nun Sakinah, Tanween, and Meem Sakinah","Correct characteristics of letters (Sifaat)","Practical correction of common recitation mistakes"]},{id:"hifz-memorization",title:"Hifz-ul-Quran (Memorization Program)",category:"quran",categoryLabel:"Quranic Studies",level:"All Levels",duration:"2 - 3 Years",image:"/images/Hifz.jpeg",description:"A structured, disciplined program designed to guide dedicated students through full Quranic memorization with rigorous daily revision.",highlights:["Personalized daily lesson plans (Sabaq)","Daily recent revision (Sabaqi) and overall review (Manzil)","Character development and spiritual mentorship"]},{id:"islamic-studies",title:"Islamic Studies & Hadith Foundations",category:"sharia",categoryLabel:"Islamic Studies",level:"All Levels",duration:"1 Year",image:"/images/Deeniyat.jpeg",description:"Essential knowledge covering Islamic Creed (Aqeedah), Jurisprudence (Fiqh of Worship), Seerah, and Hadith studies.",highlights:["Foundational tenets of faith and core beliefs","Practical Fiqh of daily worship, purity, and ethics","Prophetic biographical study and Hadith commentary"]}];function sp(){const[e,t]=G.useState("all"),n=e==="all"?ba:ba.filter(l=>l.category===e),r=(l,o)=>{l.preventDefault();const i=document.querySelector("#contact");i&&i.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{id:"courses",className:"section-padding courses-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-badge",children:"Educational Curriculum"}),u.jsx("h2",{className:"heading-secondary",children:"Our Educational Courses"}),u.jsx("p",{className:"section-subtitle",children:"Structured, classical Islamic learning designed for all levels of proficiency with academic rigor and personal mentorship."})]}),u.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Course Category Filters",children:ap.map(l=>u.jsx("button",{type:"button",role:"tab","aria-selected":e===l.id,className:`tab-btn ${e===l.id?"active":""}`,onClick:()=>t(l.id),children:l.label},l.id))}),u.jsx("div",{className:"courses-grid",children:n.map(l=>u.jsxs("article",{className:"course-card",children:[u.jsxs("div",{className:"course-img-wrapper",children:[u.jsx("img",{src:l.image,alt:`${l.title} course at Madarsa Sirat-e-illahi`,className:"course-img",loading:"lazy"}),u.jsx("span",{className:"course-level-badge",children:l.level})]}),u.jsxs("div",{className:"course-body",children:[u.jsxs("div",{className:"course-meta",children:[u.jsxs("span",{className:"meta-item",children:[u.jsx(Zf,{size:14}),l.categoryLabel]}),u.jsxs("span",{className:"meta-item",children:[u.jsx(cc,{size:14}),l.duration]})]}),u.jsx("h3",{className:"course-title",children:l.title}),u.jsx("p",{className:"course-desc",children:l.description}),u.jsxs("div",{className:"course-highlights",children:[u.jsx("span",{className:"highlights-header",children:"Key Curriculum Focus:"}),u.jsx("ul",{children:l.highlights.map((o,i)=>u.jsxs("li",{children:[u.jsx(Gf,{size:15,className:"check-icon"}),u.jsx("span",{children:o})]},i))})]})]}),u.jsx("div",{className:"course-footer",children:u.jsxs("a",{href:"#contact",onClick:o=>r(o,l.title),className:"btn btn-outline-emerald course-btn",children:["Inquire Course",u.jsx(ac,{size:16})]})})]},l.id))})]}),u.jsx("style",{children:`
        .courses-section {
          background-color: var(--color-sand);
        }

        .filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .tab-btn {
          padding: 0.6rem 1.35rem;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 100px;
          transition: all var(--transition-fast);
        }

        .tab-btn:hover {
          color: var(--color-emerald-primary);
          border-color: var(--color-emerald-light);
        }

        .tab-btn.active {
          background-color: var(--color-emerald-primary);
          color: #FFFFFF;
          border-color: var(--color-emerald-primary);
          box-shadow: 0 4px 12px rgba(20, 73, 58, 0.2);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .course-card {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(197, 160, 89, 0.5);
        }

        .course-img-wrapper {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
          background-color: var(--color-emerald-darkest);
        }

        .course-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .course-card:hover .course-img {
          transform: scale(1.04);
        }

        .course-level-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(11, 43, 34, 0.85);
          color: var(--color-gold);
          border: 1px solid rgba(197, 160, 89, 0.4);
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 100px;
          backdrop-filter: blur(4px);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .course-body {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .course-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-emerald-primary);
          background-color: var(--color-emerald-subtle);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .course-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-charcoal);
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }

        .course-desc {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .course-highlights {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px dashed var(--color-border);
        }

        .highlights-header {
          display: block;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-charcoal);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .course-highlights ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .course-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.84375rem;
          color: var(--color-text-main);
          line-height: 1.4;
        }

        .check-icon {
          color: var(--color-emerald-primary);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .course-footer {
          padding: 1.25rem 1.5rem;
          background-color: var(--color-ivory);
          border-top: 1px solid var(--color-border);
        }

        .course-btn {
          width: 100%;
          font-size: 0.875rem;
        }

        @media (max-width: 640px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const up=[{id:"all",label:"All Photos"},{id:"campus",label:"Campus & Architecture"},{id:"learning",label:"Learning Environment"},{id:"library",label:"Library & Texts"}],Ka=[{id:"g1",title:"Key Moments",category:"campus",image:"/images/occasions.jpeg"},{id:"g2",title:"Modern Educational Classroom",category:"learning",image:"/images/class_room.jpeg"},{id:"g3",title:"Test Moments",category:"library",image:"/images/Test_Moment.jpeg"},{id:"g4",title:"Eid-Namaz",category:"learning",image:"/images/Eid_Namaz.jpeg"},{id:"g5",title:"Islamic Stories",category:"library",image:"/images/Islamic_Stories.jpeg"}];function cp({isOpen:e,item:t,onClose:n,onPrev:r,onNext:l,currentIndex:o,totalItems:i}){const a=G.useCallback(s=>{e&&(s.key==="Escape"&&n(),s.key==="ArrowLeft"&&r(),s.key==="ArrowRight"&&l())},[e,n,r,l]);return G.useEffect(()=>(e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",a)),()=>{document.body.style.overflow="",window.removeEventListener("keydown",a)}),[e,a]),!e||!t?null:u.jsxs("div",{className:"lightbox-backdrop animate-fade-in",onClick:n,role:"dialog","aria-modal":"true","aria-label":`Image Lightbox: ${t.title}`,children:[u.jsxs("div",{className:"lightbox-container",onClick:s=>s.stopPropagation(),children:[u.jsxs("div",{className:"lightbox-header",children:[u.jsxs("div",{className:"lightbox-counter",children:[u.jsx("span",{children:o+1})," / ",u.jsx("span",{children:i})]}),u.jsx("button",{type:"button",className:"lightbox-close-btn",onClick:n,"aria-label":"Close image lightbox",children:u.jsx(Ho,{size:24})})]}),u.jsxs("div",{className:"lightbox-content",children:[u.jsx("button",{type:"button",className:"lightbox-nav-btn nav-prev",onClick:r,"aria-label":"Previous image",children:u.jsx(Kf,{size:28})}),u.jsx("div",{className:"lightbox-image-box",children:u.jsx("img",{src:t.image,alt:t.title,className:"lightbox-img"})}),u.jsx("button",{type:"button",className:"lightbox-nav-btn nav-next",onClick:l,"aria-label":"Next image",children:u.jsx(uc,{size:28})})]}),u.jsxs("div",{className:"lightbox-footer",children:[u.jsx("h4",{className:"lightbox-title",children:t.title}),t.caption&&u.jsx("p",{className:"lightbox-caption",children:t.caption})]})]}),u.jsx("style",{children:`
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background-color: rgba(11, 43, 34, 0.94);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .lightbox-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          max-height: 92vh;
          background-color: #081F19;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(197, 160, 89, 0.3);
          box-shadow: var(--shadow-xl);
          overflow: hidden;
        }

        .lightbox-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background-color: rgba(11, 43, 34, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }

        .lightbox-counter {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-gold);
          letter-spacing: 0.05em;
        }

        .lightbox-close-btn {
          color: #FFFFFF;
          padding: 0.4rem;
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
        }

        .lightbox-close-btn:hover {
          background-color: rgba(255, 255, 255, 0.15);
          color: var(--color-gold);
        }

        .lightbox-content {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 320px;
          max-height: 65vh;
          overflow: hidden;
          background-color: #04120F;
          padding: 1rem;
        }

        .lightbox-image-box {
          max-width: 100%;
          max-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 60vh;
          object-fit: contain;
          border-radius: var(--radius-sm);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(11, 43, 34, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .lightbox-nav-btn:hover {
          background-color: var(--color-gold);
          color: #FFFFFF;
          border-color: var(--color-gold);
          transform: translateY(-50%) scale(1.08);
        }

        .nav-prev {
          left: 1rem;
        }

        .nav-next {
          right: 1rem;
        }

        .lightbox-footer {
          padding: 1.25rem 1.5rem;
          background-color: rgba(11, 43, 34, 0.9);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }

        .lightbox-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-gold);
          margin-bottom: 0.25rem;
        }

        .lightbox-caption {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .lightbox-backdrop {
            padding: 0.5rem;
          }
          .lightbox-nav-btn {
            width: 38px;
            height: 38px;
          }
          .nav-prev {
            left: 0.5rem;
          }
          .nav-next {
            right: 0.5rem;
          }
        }
      `})]})}function dp(){const[e,t]=G.useState("all"),[n,r]=G.useState({isOpen:!1,currentIndex:0}),l=e==="all"?Ka:Ka.filter(c=>c.category===e),o=c=>{r({isOpen:!0,currentIndex:c})},i=()=>{r(c=>({...c,isOpen:!1}))},a=()=>{r(c=>({...c,currentIndex:(c.currentIndex+1)%l.length}))},s=()=>{r(c=>({...c,currentIndex:(c.currentIndex-1+l.length)%l.length}))};return u.jsxs("section",{id:"gallery",className:"section-padding gallery-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-badge",children:"Institution Media"}),u.jsx("h2",{className:"heading-secondary",children:"Our Campus & Learning Gallery"}),u.jsx("p",{className:"section-subtitle",children:"A visual glance inside Madarsa Sirat-e-illahi's educational facilities, scholarly library, and student learning environments."})]}),u.jsx("div",{className:"gallery-tabs",children:up.map(c=>u.jsx("button",{type:"button",className:`g-tab-btn ${e===c.id?"active":""}`,onClick:()=>t(c.id),children:c.label},c.id))}),u.jsx("div",{className:"gallery-grid",children:l.map((c,g)=>u.jsx("figure",{className:"gallery-card",onClick:()=>o(g),tabIndex:0,role:"button","aria-label":`View photo: ${c.title}`,onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),o(g))},children:u.jsxs("div",{className:"gallery-img-box",children:[u.jsx("img",{src:c.image,alt:c.title,className:"gallery-img",loading:"lazy"}),u.jsxs("div",{className:"gallery-hover-overlay",children:[u.jsx("div",{className:"zoom-icon-box",children:u.jsx(Jf,{size:22})}),u.jsx("span",{className:"hover-title",children:c.title}),u.jsx("span",{className:"hover-badge",children:c.categoryLabel})]})]})},c.id))})]}),u.jsx(cp,{isOpen:n.isOpen,item:l[n.currentIndex],onClose:i,onPrev:s,onNext:a,currentIndex:n.currentIndex,totalItems:l.length}),u.jsx("style",{children:`
        .gallery-section {
          background-color: var(--color-ivory);
        }

        .gallery-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .g-tab-btn {
          padding: 0.55rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 100px;
          transition: all var(--transition-fast);
        }

        .g-tab-btn:hover {
          color: var(--color-emerald-primary);
          border-color: var(--color-emerald-light);
        }

        .g-tab-btn.active {
          background-color: var(--color-emerald-primary);
          color: #FFFFFF;
          border-color: var(--color-emerald-primary);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .gallery-card {
          margin: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--color-emerald-darkest);
          cursor: pointer;
          position: relative;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .gallery-card:hover, .gallery-card:focus-visible {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .gallery-img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.06);
        }

        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(11, 43, 34, 0.9) 0%,
            rgba(11, 43, 34, 0.4) 50%,
            rgba(11, 43, 34, 0.1) 100%
          );
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          text-align: center;
          color: #FFFFFF;
          transition: opacity var(--transition-normal);
        }

        .gallery-card:hover .gallery-hover-overlay,
        .gallery-card:focus-visible .gallery-hover-overlay {
          opacity: 1;
        }

        .zoom-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-gold);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transform: translateY(10px);
          transition: transform var(--transition-normal);
        }

        .gallery-card:hover .zoom-icon-box {
          transform: translateY(0);
        }

        .hover-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }

        .hover-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-sand);
          background-color: rgba(255, 255, 255, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 100px;
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function fp(){const[e,t]=G.useState({name:"",email:"",phone:"",course:"General Inquiry",message:""}),[n,r]=G.useState(!1),l=i=>{const{name:a,value:s}=i.target;t(c=>({...c,[a]:s}))},o=i=>{if(i.preventDefault(),!e.name||!e.email)return;const a=["*New Inquiry from Madarsa Website*",`*Name:* ${e.name}`,`*Email:* ${e.email}`,e.phone?`*Phone/WhatsApp:* ${e.phone}`:null,`*Course:* ${e.course}`,e.message?`*Message:* ${e.message}`:null].filter(Boolean).join(`
`),s=`https://wa.me/${923111587772}?text=${encodeURIComponent(a)}`;window.open(s,"_blank"),r(!0),setTimeout(()=>{r(!1),t({name:"",email:"",phone:"",course:"General Inquiry",message:""})},4e3)};return u.jsxs("section",{id:"contact",className:"section-padding contact-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-badge",children:"Get In Touch"}),u.jsx("h2",{className:"heading-secondary",children:"Contact & Location Details"}),u.jsx("p",{className:"section-subtitle",children:"Reach out to our administrative team for course inquiries, enrollment procedures, or campus visits."})]}),u.jsxs("div",{className:"contact-grid",children:[u.jsxs("div",{className:"contact-info-panel",children:[u.jsx("h3",{className:"panel-title",children:"Madarsa Information"}),u.jsx("p",{className:"panel-intro",children:"We welcome students, parents, and community members to visit or contact us directly."}),u.jsxs("div",{className:"info-cards-list",children:[u.jsxs("div",{className:"info-card",children:[u.jsx("div",{className:"info-icon-box",children:u.jsx(dc,{size:22,className:"info-icon"})}),u.jsxs("div",{className:"info-text-box",children:[u.jsx("span",{className:"info-label",children:"Address / Location"}),u.jsxs("p",{className:"info-value",children:[I.contact.address.line1,u.jsx("br",{}),I.contact.address.line2,u.jsx("br",{}),I.contact.address.city,","," ",I.contact.address.country]})]})]}),u.jsxs("div",{className:"info-card",children:[u.jsx("div",{className:"info-icon-box",children:u.jsx(fc,{size:22,className:"info-icon"})}),u.jsxs("div",{className:"info-text-box",children:[u.jsx("span",{className:"info-label",children:"Phone Number"}),u.jsx("a",{href:`tel:${I.contact.phone.replace(/[^0-9+]/g,"")}`,className:"info-link",children:I.contact.phone})]})]}),u.jsxs("div",{className:"info-card",children:[u.jsx("div",{className:"info-icon-box",children:u.jsx(tp,{size:22,className:"info-icon"})}),u.jsxs("div",{className:"info-text-box",children:[u.jsx("span",{className:"info-label",children:"WhatsApp Contact"}),u.jsxs("a",{href:`https://wa.me/${I.contact.whatsapp.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"info-link whatsapp-link",children:["Chat on WhatsApp (",I.contact.whatsapp,")"]})]})]}),u.jsxs("div",{className:"info-card",children:[u.jsx("div",{className:"info-icon-box",children:u.jsx(cc,{size:22,className:"info-icon"})}),u.jsxs("div",{className:"info-text-box",children:[u.jsx("span",{className:"info-label",children:"Office Hours"}),u.jsx("p",{className:"info-value",children:I.contact.hours})]})]})]})]}),u.jsxs("div",{className:"contact-form-panel",children:[u.jsx("h3",{className:"panel-title",children:"Send an Inquiry"}),u.jsx("p",{className:"panel-intro",children:"Complete the form below and an admissions officer will respond promptly."}),n?u.jsxs("div",{className:"form-success-box animate-fade-in",role:"alert",children:[u.jsx(Yf,{size:44,className:"success-icon"}),u.jsx("h4",{className:"success-title",children:"Message Sent via WhatsApp"}),u.jsx("p",{className:"success-desc",children:"Thank you! We’ve opened a WhatsApp chat with your inquiry."})]}):u.jsxs("form",{onSubmit:o,className:"contact-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"name",className:"form-label",children:"Full Name *"}),u.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:l,placeholder:"Enter your full name",className:"form-input"})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address *"}),u.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:e.email,onChange:l,placeholder:"your.email@example.com",className:"form-input"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"phone",className:"form-label",children:"Phone / WhatsApp"}),u.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:l,placeholder:"+1 (555) 000‑0000",className:"form-input"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"course",className:"form-label",children:"Interested Course / Program"}),u.jsxs("select",{id:"course",name:"course",value:e.course,onChange:l,className:"form-select",children:[u.jsx("option",{value:"General Inquiry",children:"General Inquiry"}),u.jsx("option",{value:"Quran Reading & Qaida",children:"Quran Reading & Qaida (Nazira)"}),u.jsx("option",{value:"Tajweed & Recitation Excellence",children:"Tajweed & Recitation Excellence"}),u.jsx("option",{value:"Hifz-ul-Quran Memorization",children:"Hifz‑ul‑Quran Memorization"}),u.jsx("option",{value:"Islamic Studies & Hadith",children:"Islamic Studies & Hadith"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"message",className:"form-label",children:"Your Message / Inquiry"}),u.jsx("textarea",{id:"message",name:"message",rows:"4",value:e.message,onChange:l,placeholder:"Write your questions or notes here...",className:"form-textarea"})]}),u.jsxs("button",{type:"submit",className:"btn btn-emerald form-submit-btn",children:["Send Message",u.jsx(np,{size:18})]})]})]})]})]}),u.jsx("style",{children:`
        .contact-section { background-color: var(--color-sand); }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 3rem;
        }
        .contact-info-panel,
        .contact-form-panel {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .panel-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-emerald-darkest);
          margin-bottom: .35rem;
        }
        .panel-intro {
          font-size: .9375rem;
          color: var(--color-text-muted);
          margin-bottom: 1.75rem;
        }
        .info-cards-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .info-card {
          display: flex; gap: 1rem; align-items: flex-start;
          padding: 1rem;
          background-color: var(--color-ivory);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
        }
        .info-icon-box {
          width: 42px; height: 42px;
          border-radius: var(--radius-sm);
          background-color: var(--color-emerald-subtle);
          display: flex; align-items: center; justify-content: center;
        }
        .info-icon { color: var(--color-emerald-primary); }
        .info-label {
          font-size: .78125rem;
          font-weight: 700;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: .2rem;
        }
        .info-value { font-size: .9375rem; color: var(--color-text-main); line-height: 1.5; }
        .info-link {
          font-size: .9875rem;
          font-weight: 600;
          color: var(--color-emerald-primary);
          transition: color var(--transition-fast);
        }
        .info-link:hover { color: var(--color-gold); text-decoration: underline; }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: .4rem; }
        .form-label {
          font-size: .875rem;
          font-weight: 600;
          color: var(--color-charcoal);
        }
        .form-input, .form-select, .form-textarea {
          width: 100%; padding: .75rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background-color: var(--color-ivory);
          font-size: .9375rem;
          color: var(--color-text-main);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--color-emerald-primary);
          box-shadow: 0 0 0 3px rgba(20,73,58,.12);
        }
        .form-submit-btn { margin-top: .5rem; width: 100%; }
        .form-success-box {
          padding: 3rem 1.5rem;
          text-align: center;
          background-color: var(--color-emerald-subtle);
          border: 1px solid rgba(20,73,58,.2);
          border-radius: var(--radius-md);
          display: flex; flex-direction: column; align-items: center; gap: .75rem;
        }
        .success-icon { color: var(--color-emerald-primary); }
        .success-title {
          font-size: 1.35rem; font-weight: 700;
          color: var(--color-emerald-darkest);
        }
        .success-desc { font-size: .9375rem; color: var(--color-text-main); max-width: 360px; }
        @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) {
          .contact-info-panel,
          .contact-form-panel { padding: 1.5rem; }
          .form-row { grid-template-columns: 1fr; }
        }
      `})]})}function pp(){const e=(t,n)=>{t.preventDefault();const r=document.querySelector(n);r&&r.scrollIntoView({behavior:"smooth"})};return u.jsxs("footer",{className:"footer-root",children:[u.jsx("div",{className:"footer-gold-bar"}),u.jsxs("div",{className:"container footer-container",children:[u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{className:"footer-brand-col",children:[u.jsxs("a",{href:"#home",onClick:t=>e(t,"#home"),className:"footer-brand-link",children:[u.jsx("div",{className:"footer-brand-icon",children:u.jsx(sc,{size:20})}),u.jsx("div",{children:u.jsx("h3",{className:"footer-brand-name",children:I.name})})]}),u.jsxs("p",{className:"footer-tagline-text",children:[I.tagline," — Dedicated to authentic Quranic studies, Classical Arabic, and holistic Islamic character building."]})]}),u.jsxs("div",{className:"footer-nav-col",children:[u.jsx("h4",{className:"footer-col-title",children:"Navigation"}),u.jsxs("ul",{className:"footer-nav-list",children:[u.jsx("li",{children:u.jsx("a",{href:"#home",onClick:t=>e(t,"#home"),children:"Home"})}),u.jsx("li",{children:u.jsx("a",{href:"#about",onClick:t=>e(t,"#about"),children:"About Us"})}),u.jsx("li",{children:u.jsx("a",{href:"#courses",onClick:t=>e(t,"#courses"),children:"Courses"})}),u.jsx("li",{children:u.jsx("a",{href:"#gallery",onClick:t=>e(t,"#gallery"),children:"Gallery"})}),u.jsx("li",{children:u.jsx("a",{href:"#contact",onClick:t=>e(t,"#contact"),children:"Contact & Location"})})]})]}),u.jsxs("div",{className:"footer-contact-col",children:[u.jsx("h4",{className:"footer-col-title",children:"Contact Summary"}),u.jsxs("ul",{className:"footer-contact-list",children:[u.jsxs("li",{children:[u.jsx(dc,{size:16,className:"f-icon"}),u.jsxs("span",{children:[I.contact.address.line1,", ",I.contact.address.city]})]}),u.jsxs("li",{children:[u.jsx(fc,{size:16,className:"f-icon"}),u.jsx("a",{href:`tel:${I.contact.phone.replace(/[^0-9+]/g,"")}`,children:I.contact.phone})]})]})]})]}),u.jsxs("div",{className:"footer-bottom",children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," ",I.name,". All rights reserved."]}),u.jsx("p",{className:"footer-subtext",children:"Authentic Islamic Educational Institution"})]})]}),u.jsx("style",{children:`
        .footer-root {
          background-color: var(--color-emerald-darkest);
          color: #FFFFFF;
          position: relative;
        }

        .footer-gold-bar {
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--color-emerald-primary) 0%,
            var(--color-gold) 50%,
            var(--color-emerald-primary) 100%
          );
        }

        .footer-container {
          padding-top: 4rem;
          padding-bottom: 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.25fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          margin-bottom: 1rem;
        }

        .footer-brand-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(197, 160, 89, 0.4);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-brand-name {
          font-size: 1.125rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
        }

        .footer-brand-arabic {
          font-family: var(--font-serif);
          font-size: 0.875rem;
          color: var(--color-gold);
        }

        .footer-tagline-text {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          max-width: 380px;
        }

        .footer-col-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-nav-list a {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.8);
          transition: color var(--transition-fast);
        }

        .footer-nav-list a:hover {
          color: var(--color-gold);
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-contact-list a {
          color: rgba(255, 255, 255, 0.8);
          transition: color var(--transition-fast);
        }

        .footer-contact-list a:hover {
          color: var(--color-gold);
        }

        .f-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-subtext {
          font-style: italic;
          font-family: var(--font-serif);
          color: var(--color-gold);
        }

        @media (max-width: 840px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function mp(){return u.jsxs("div",{className:"madarsa-app",children:[u.jsx(lp,{}),u.jsxs("main",{id:"main-content",children:[u.jsx(op,{}),u.jsx(ip,{}),u.jsx(sp,{}),u.jsx(dp,{}),u.jsx(fp,{})]}),u.jsx(pp,{})]})}Kl.createRoot(document.getElementById("root")).render(u.jsx(Fc.StrictMode,{children:u.jsx(mp,{})}));
