function JA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ZA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ek(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Eo={},tk={get exports(){return Eo},set exports(t){Eo=t}},Mu={},C={},nk={get exports(){return C},set exports(t){C=t}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),rk=Symbol.for("react.portal"),ik=Symbol.for("react.fragment"),sk=Symbol.for("react.strict_mode"),ok=Symbol.for("react.profiler"),ak=Symbol.for("react.provider"),lk=Symbol.for("react.context"),uk=Symbol.for("react.forward_ref"),ck=Symbol.for("react.suspense"),hk=Symbol.for("react.memo"),dk=Symbol.for("react.lazy"),ng=Symbol.iterator;function fk(t){return t===null||typeof t!="object"?null:(t=ng&&t[ng]||t["@@iterator"],typeof t=="function"?t:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=Cs.prototype;function $f(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}var Mf=$f.prototype=new a0;Mf.constructor=$f;s0(Mf,Cs.prototype);Mf.isPureReactComponent=!0;var rg=Array.isArray,l0=Object.prototype.hasOwnProperty,Lf={current:null},u0={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,r)&&!u0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ia,type:t,key:s,ref:o,props:i,_owner:Lf.current}}function pk(t,e){return{$$typeof:ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===ia}function mk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ig=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mk(""+t.key):e.toString(36)}function dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ia:case rk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gc(o,0):r,rg(i)?(n="",t!=null&&(n=t.replace(ig,"$&/")+"/"),dl(i,e,n,"",function(u){return u})):i!=null&&(Ff(i)&&(i=pk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ig,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gc(s,a);o+=dl(s,e,n,l,i)}else if(l=fk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gc(s,a++),o+=dl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var r=[],i=0;return dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},fl={transition:null},yk={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:fl,ReactCurrentOwner:Lf};ye.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ye.Component=Cs;ye.Fragment=ik;ye.Profiler=ok;ye.PureComponent=$f;ye.StrictMode=sk;ye.Suspense=ck;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yk;ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=s0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l0.call(e,l)&&!u0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ia,type:t.type,key:i,ref:s,props:r,_owner:o}};ye.createContext=function(t){return t={$$typeof:lk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ak,_context:t},t.Consumer=t};ye.createElement=c0;ye.createFactory=function(t){var e=c0.bind(null,t);return e.type=t,e};ye.createRef=function(){return{current:null}};ye.forwardRef=function(t){return{$$typeof:uk,render:t}};ye.isValidElement=Ff;ye.lazy=function(t){return{$$typeof:dk,_payload:{_status:-1,_result:t},_init:gk}};ye.memo=function(t,e){return{$$typeof:hk,type:t,compare:e===void 0?null:e}};ye.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};ye.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ye.useCallback=function(t,e){return Ot.current.useCallback(t,e)};ye.useContext=function(t){return Ot.current.useContext(t)};ye.useDebugValue=function(){};ye.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};ye.useEffect=function(t,e){return Ot.current.useEffect(t,e)};ye.useId=function(){return Ot.current.useId()};ye.useImperativeHandle=function(t,e,n){return Ot.current.useImperativeHandle(t,e,n)};ye.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};ye.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};ye.useMemo=function(t,e){return Ot.current.useMemo(t,e)};ye.useReducer=function(t,e,n){return Ot.current.useReducer(t,e,n)};ye.useRef=function(t){return Ot.current.useRef(t)};ye.useState=function(t){return Ot.current.useState(t)};ye.useSyncExternalStore=function(t,e,n){return Ot.current.useSyncExternalStore(t,e,n)};ye.useTransition=function(){return Ot.current.useTransition()};ye.version="18.2.0";(function(t){t.exports=ye})(nk);const Or=ek(C),Yh=JA({__proto__:null,default:Or},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vk=C,wk=Symbol.for("react.element"),Sk=Symbol.for("react.fragment"),Ek=Object.prototype.hasOwnProperty,Ak=vk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kk={key:!0,ref:!0,__self:!0,__source:!0};function h0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ek.call(e,r)&&!kk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wk,type:t,key:s,ref:o,props:i,_owner:Ak.current}}Mu.Fragment=Sk;Mu.jsx=h0;Mu.jsxs=h0;(function(t){t.exports=Mu})(tk);const sn=Eo.Fragment,y=Eo.jsx,_=Eo.jsxs;var Xh={},Jh={},Ck={get exports(){return Jh},set exports(t){Jh=t}},qt={},Zh={},_k={get exports(){return Zh},set exports(t){Zh=t}},d0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,re){var ae=L.length;L.push(re);e:for(;0<ae;){var Ee=ae-1>>>1,U=L[Ee];if(0<i(U,re))L[Ee]=re,L[ae]=U,ae=Ee;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var re=L[0],ae=L.pop();if(ae!==re){L[0]=ae;e:for(var Ee=0,U=L.length,V=U>>>1;Ee<V;){var B=2*(Ee+1)-1,le=L[B],A=B+1,fe=L[A];if(0>i(le,ae))A<U&&0>i(fe,le)?(L[Ee]=fe,L[A]=ae,Ee=A):(L[Ee]=le,L[B]=ae,Ee=B);else if(A<U&&0>i(fe,ae))L[Ee]=fe,L[A]=ae,Ee=A;else break e}}return re}function i(L,re){var ae=L.sortIndex-re.sortIndex;return ae!==0?ae:L.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,w=!1,m=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var re=n(u);re!==null;){if(re.callback===null)r(u);else if(re.startTime<=L)r(u),re.sortIndex=re.expirationTime,e(l,re);else break;re=n(u)}}function S(L){if(m=!1,v(L),!w)if(n(l)!==null)w=!0,Xe(k);else{var re=n(u);re!==null&&Je(S,re.startTime-L)}}function k(L,re){w=!1,m&&(m=!1,p(b),b=-1),g=!0;var ae=f;try{for(v(re),h=n(l);h!==null&&(!(h.expirationTime>re)||L&&!ne());){var Ee=h.callback;if(typeof Ee=="function"){h.callback=null,f=h.priorityLevel;var U=Ee(h.expirationTime<=re);re=t.unstable_now(),typeof U=="function"?h.callback=U:h===n(l)&&r(l),v(re)}else r(l);h=n(l)}if(h!==null)var V=!0;else{var B=n(u);B!==null&&Je(S,B.startTime-re),V=!1}return V}finally{h=null,f=ae,g=!1}}var R=!1,I=null,b=-1,P=5,M=-1;function ne(){return!(t.unstable_now()-M<P)}function X(){if(I!==null){var L=t.unstable_now();M=L;var re=!0;try{re=I(!0,L)}finally{re?q():(R=!1,I=null)}}else R=!1}var q;if(typeof d=="function")q=function(){d(X)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,_e=Ce.port2;Ce.port1.onmessage=X,q=function(){_e.postMessage(null)}}else q=function(){E(X,0)};function Xe(L){I=L,R||(R=!0,q())}function Je(L,re){b=E(function(){L(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,Xe(k))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var re=3;break;default:re=f}var ae=f;f=re;try{return L()}finally{f=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,re){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ae=f;f=L;try{return re()}finally{f=ae}},t.unstable_scheduleCallback=function(L,re,ae){var Ee=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ee+ae:Ee):ae=Ee,L){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=ae+U,L={id:c++,callback:re,priorityLevel:L,startTime:ae,expirationTime:U,sortIndex:-1},ae>Ee?(L.sortIndex=ae,e(u,L),n(l)===null&&L===n(u)&&(m?(p(b),b=-1):m=!0,Je(S,ae-Ee))):(L.sortIndex=U,e(l,L),w||g||(w=!0,Xe(k))),L},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(L){var re=f;return function(){var ae=f;f=re;try{return L.apply(this,arguments)}finally{f=ae}}}})(d0);(function(t){t.exports=d0})(_k);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=C,Gt=Zh;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p0=new Set,Ao={};function vi(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(Ao[t]=e,t=0;t<e.length;t++)p0.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,Tk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sg={},og={};function xk(t){return ed.call(og,t)?!0:ed.call(sg,t)?!1:Tk.test(t)?og[t]=!0:(sg[t]=!0,!1)}function Ik(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Rk(t,e,n,r){if(e===null||typeof e>"u"||Ik(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,jf);mt[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,jf);mt[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,jf);mt[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zf(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rk(e,n,i,r)&&(n=null),r||i===null?xk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),m0=Symbol.for("react.provider"),g0=Symbol.for("react.context"),Vf=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),Hf=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),y0=Symbol.for("react.offscreen"),ag=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,Kc;function Qs(t){if(Kc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kc=e&&e[1]||""}return`
`+Kc+t}var Qc=!1;function qc(t,e){if(!t||Qc)return"";Qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function Pk(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=qc(t.type,!1),t;case 11:return t=qc(t.type.render,!1),t;case 1:return t=qc(t.type,!0),t;default:return""}}function id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Di:return"Fragment";case bi:return"Portal";case td:return"Profiler";case Bf:return"StrictMode";case nd:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case g0:return(t.displayName||"Context")+".Consumer";case m0:return(t._context.displayName||"Context")+".Provider";case Vf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hf:return e=t.displayName||null,e!==null?e:id(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return id(t(e))}catch{}}return null}function bk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function v0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dk(t){var e=v0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oa(t){t._valueTracker||(t._valueTracker=Dk(t))}function w0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=v0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sd(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S0(t,e){e=e.checked,e!=null&&zf(t,"checked",e,!1)}function od(t,e){S0(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&ad(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ug(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ad(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function Wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(qs(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function E0(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,k0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ok=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){Ok.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function C0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function _0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=C0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Nk=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(t,e){if(e){if(Nk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function Wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fd=null,Gi=null,Ki=null;function dg(t){if(t=aa(t)){if(typeof fd!="function")throw Error(O(280));var e=t.stateNode;e&&(e=zu(e),fd(t.stateNode,t.type,e))}}function T0(t){Gi?Ki?Ki.push(t):Ki=[t]:Gi=t}function x0(){if(Gi){var t=Gi,e=Ki;if(Ki=Gi=null,dg(t),e)for(t=0;t<e.length;t++)dg(e[t])}}function I0(t,e){return t(e)}function R0(){}var Yc=!1;function P0(t,e,n){if(Yc)return t(e,n);Yc=!0;try{return I0(t,e,n)}finally{Yc=!1,(Gi!==null||Ki!==null)&&(R0(),x0())}}function Co(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var pd=!1;if(Vn)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){pd=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{pd=!1}function $k(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var so=!1,Nl=null,$l=!1,md=null,Mk={onError:function(t){so=!0,Nl=t}};function Lk(t,e,n,r,i,s,o,a,l){so=!1,Nl=null,$k.apply(Mk,arguments)}function Fk(t,e,n,r,i,s,o,a,l){if(Lk.apply(this,arguments),so){if(so){var u=Nl;so=!1,Nl=null}else throw Error(O(198));$l||($l=!0,md=u)}}function wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function b0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fg(t){if(wi(t)!==t)throw Error(O(188))}function Uk(t){var e=t.alternate;if(!e){if(e=wi(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fg(i),t;if(s===r)return fg(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function D0(t){return t=Uk(t),t!==null?O0(t):null}function O0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O0(t);if(e!==null)return e;t=t.sibling}return null}var N0=Gt.unstable_scheduleCallback,pg=Gt.unstable_cancelCallback,jk=Gt.unstable_shouldYield,zk=Gt.unstable_requestPaint,Ge=Gt.unstable_now,Bk=Gt.unstable_getCurrentPriorityLevel,Gf=Gt.unstable_ImmediatePriority,$0=Gt.unstable_UserBlockingPriority,Ml=Gt.unstable_NormalPriority,Vk=Gt.unstable_LowPriority,M0=Gt.unstable_IdlePriority,Lu=null,Cn=null;function Hk(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Lu,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:Kk,Wk=Math.log,Gk=Math.LN2;function Kk(t){return t>>>=0,t===0?32:31-(Wk(t)/Gk|0)|0}var $a=64,Ma=4194304;function Ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ys(a):(s&=o,s!==0&&(r=Ys(s)))}else o=n&~i,o!==0?r=Ys(o):s!==0&&(r=Ys(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function Qk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Qk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L0(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function Yk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function F0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U0,Qf,j0,z0,B0,yd=!1,La=[],fr=null,pr=null,mr=null,_o=new Map,To=new Map,ir=[],Xk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mg(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(e.pointerId)}}function Us(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=aa(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Jk(t,e,n,r,i){switch(e){case"focusin":return fr=Us(fr,t,e,n,r,i),!0;case"dragenter":return pr=Us(pr,t,e,n,r,i),!0;case"mouseover":return mr=Us(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return _o.set(s,Us(_o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,To.set(s,Us(To.get(s)||null,t,e,n,r,i)),!0}return!1}function V0(t){var e=Wr(t.target);if(e!==null){var n=wi(e);if(n!==null){if(e=n.tag,e===13){if(e=b0(n),e!==null){t.blockedOn=e,B0(t.priority,function(){j0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dd=r,n.target.dispatchEvent(r),dd=null}else return e=aa(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function gg(t,e,n){pl(t)&&n.delete(e)}function Zk(){yd=!1,fr!==null&&pl(fr)&&(fr=null),pr!==null&&pl(pr)&&(pr=null),mr!==null&&pl(mr)&&(mr=null),_o.forEach(gg),To.forEach(gg)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,yd||(yd=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,Zk)))}function xo(t){function e(i){return js(i,t)}if(0<La.length){js(La[0],t);for(var n=1;n<La.length;n++){var r=La[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&js(fr,t),pr!==null&&js(pr,t),mr!==null&&js(mr,t),_o.forEach(e),To.forEach(e),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)V0(n),n.blockedOn===null&&ir.shift()}var Qi=Jn.ReactCurrentBatchConfig,Fl=!0;function eC(t,e,n,r){var i=Te,s=Qi.transition;Qi.transition=null;try{Te=1,qf(t,e,n,r)}finally{Te=i,Qi.transition=s}}function tC(t,e,n,r){var i=Te,s=Qi.transition;Qi.transition=null;try{Te=4,qf(t,e,n,r)}finally{Te=i,Qi.transition=s}}function qf(t,e,n,r){if(Fl){var i=vd(t,e,n,r);if(i===null)ah(t,e,r,Ul,n),mg(t,r);else if(Jk(i,t,e,n,r))r.stopPropagation();else if(mg(t,r),e&4&&-1<Xk.indexOf(t)){for(;i!==null;){var s=aa(i);if(s!==null&&U0(s),s=vd(t,e,n,r),s===null&&ah(t,e,r,Ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ah(t,e,r,null,n)}}var Ul=null;function vd(t,e,n,r){if(Ul=null,t=Wf(r),t=Wr(t),t!==null)if(e=wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=b0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function H0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bk()){case Gf:return 1;case $0:return 4;case Ml:case Vk:return 16;case M0:return 536870912;default:return 16}default:return 16}}var ur=null,Yf=null,ml=null;function W0(){if(ml)return ml;var t,e=Yf,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ml=i.slice(t,1<r?1-r:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function yg(){return!1}function Yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:yg,this.isPropagationStopped=yg,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=Yt(_s),oa=ze({},_s,{view:0,detail:0}),nC=Yt(oa),Jc,Zc,zs,Fu=ze({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Jc=t.screenX-zs.screenX,Zc=t.screenY-zs.screenY):Zc=Jc=0,zs=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),vg=Yt(Fu),rC=ze({},Fu,{dataTransfer:0}),iC=Yt(rC),sC=ze({},oa,{relatedTarget:0}),eh=Yt(sC),oC=ze({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),aC=Yt(oC),lC=ze({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uC=Yt(lC),cC=ze({},_s,{data:0}),wg=Yt(cC),hC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fC[t])?!!e[t]:!1}function Jf(){return pC}var mC=ze({},oa,{key:function(t){if(t.key){var e=hC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jf,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gC=Yt(mC),yC=ze({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=Yt(yC),vC=ze({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jf}),wC=Yt(vC),SC=ze({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),EC=Yt(SC),AC=ze({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kC=Yt(AC),CC=[9,13,27,32],Zf=Vn&&"CompositionEvent"in window,oo=null;Vn&&"documentMode"in document&&(oo=document.documentMode);var _C=Vn&&"TextEvent"in window&&!oo,G0=Vn&&(!Zf||oo&&8<oo&&11>=oo),Eg=String.fromCharCode(32),Ag=!1;function K0(t,e){switch(t){case"keyup":return CC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function TC(t,e){switch(t){case"compositionend":return Q0(e);case"keypress":return e.which!==32?null:(Ag=!0,Eg);case"textInput":return t=e.data,t===Eg&&Ag?null:t;default:return null}}function xC(t,e){if(Oi)return t==="compositionend"||!Zf&&K0(t,e)?(t=W0(),ml=Yf=ur=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G0&&e.locale!=="ko"?null:e.data;default:return null}}var IC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IC[t.type]:e==="textarea"}function q0(t,e,n,r){T0(r),e=jl(e,"onChange"),0<e.length&&(n=new Xf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ao=null,Io=null;function RC(t){o1(t,0)}function Uu(t){var e=Mi(t);if(w0(e))return t}function PC(t,e){if(t==="change")return e}var Y0=!1;if(Vn){var th;if(Vn){var nh="oninput"in document;if(!nh){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),nh=typeof Cg.oninput=="function"}th=nh}else th=!1;Y0=th&&(!document.documentMode||9<document.documentMode)}function _g(){ao&&(ao.detachEvent("onpropertychange",X0),Io=ao=null)}function X0(t){if(t.propertyName==="value"&&Uu(Io)){var e=[];q0(e,Io,t,Wf(t)),P0(RC,e)}}function bC(t,e,n){t==="focusin"?(_g(),ao=e,Io=n,ao.attachEvent("onpropertychange",X0)):t==="focusout"&&_g()}function DC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(Io)}function OC(t,e){if(t==="click")return Uu(e)}function NC(t,e){if(t==="input"||t==="change")return Uu(e)}function $C(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:$C;function Ro(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ed.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function Tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=Tg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tg(n)}}function J0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z0(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MC(t){var e=Z0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J0(n.ownerDocument.documentElement,n)){if(r!==null&&ep(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xg(n,s);var o=xg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LC=Vn&&"documentMode"in document&&11>=document.documentMode,Ni=null,wd=null,lo=null,Sd=!1;function Ig(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||Ni==null||Ni!==Ol(r)||(r=Ni,"selectionStart"in r&&ep(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Ro(lo,r)||(lo=r,r=jl(wd,"onSelect"),0<r.length&&(e=new Xf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},rh={},e1={};Vn&&(e1=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function ju(t){if(rh[t])return rh[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in e1)return rh[t]=e[n];return t}var t1=ju("animationend"),n1=ju("animationiteration"),r1=ju("animationstart"),i1=ju("transitionend"),s1=new Map,Rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){s1.set(t,e),vi(e,[t])}for(var ih=0;ih<Rg.length;ih++){var sh=Rg[ih],FC=sh.toLowerCase(),UC=sh[0].toUpperCase()+sh.slice(1);Nr(FC,"on"+UC)}Nr(t1,"onAnimationEnd");Nr(n1,"onAnimationIteration");Nr(r1,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(i1,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function Pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Fk(r,e,void 0,t),t.currentTarget=null}function o1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pg(i,a,u),s=l}}}if($l)throw t=md,$l=!1,md=null,t}function be(t,e){var n=e[_d];n===void 0&&(n=e[_d]=new Set);var r=t+"__bubble";n.has(r)||(a1(e,t,2,!1),n.add(r))}function oh(t,e,n){var r=0;e&&(r|=4),a1(n,t,r,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[ja]){t[ja]=!0,p0.forEach(function(n){n!=="selectionchange"&&(jC.has(n)||oh(n,!1,t),oh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,oh("selectionchange",!1,e))}}function a1(t,e,n,r){switch(H0(e)){case 1:var i=eC;break;case 4:i=tC;break;default:i=qf}n=i.bind(null,e,n,t),i=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ah(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}P0(function(){var u=s,c=Wf(n),h=[];e:{var f=s1.get(t);if(f!==void 0){var g=Xf,w=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":g=gC;break;case"focusin":w="focus",g=eh;break;case"focusout":w="blur",g=eh;break;case"beforeblur":case"afterblur":g=eh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=iC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wC;break;case t1:case n1:case r1:g=aC;break;case i1:g=EC;break;case"scroll":g=nC;break;case"wheel":g=kC;break;case"copy":case"cut":case"paste":g=uC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Sg}var m=(e&4)!==0,E=!m&&t==="scroll",p=m?f!==null?f+"Capture":null:f;m=[];for(var d=u,v;d!==null;){v=d;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=Co(d,p),S!=null&&m.push(bo(d,S,v)))),E)break;d=d.return}0<m.length&&(f=new g(f,w,null,n,c),h.push({event:f,listeners:m}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==dd&&(w=n.relatedTarget||n.fromElement)&&(Wr(w)||w[Hn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Wr(w):null,w!==null&&(E=wi(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(m=vg,S="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(m=Sg,S="onPointerLeave",p="onPointerEnter",d="pointer"),E=g==null?f:Mi(g),v=w==null?f:Mi(w),f=new m(S,d+"leave",g,n,c),f.target=E,f.relatedTarget=v,S=null,Wr(c)===u&&(m=new m(p,d+"enter",w,n,c),m.target=v,m.relatedTarget=E,S=m),E=S,g&&w)t:{for(m=g,p=w,d=0,v=m;v;v=Ti(v))d++;for(v=0,S=p;S;S=Ti(S))v++;for(;0<d-v;)m=Ti(m),d--;for(;0<v-d;)p=Ti(p),v--;for(;d--;){if(m===p||p!==null&&m===p.alternate)break t;m=Ti(m),p=Ti(p)}m=null}else m=null;g!==null&&bg(h,f,g,m,!1),w!==null&&E!==null&&bg(h,E,w,m,!0)}}e:{if(f=u?Mi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=PC;else if(kg(f))if(Y0)k=NC;else{k=DC;var R=bC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=OC);if(k&&(k=k(t,u))){q0(h,k,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&ad(f,"number",f.value)}switch(R=u?Mi(u):window,t){case"focusin":(kg(R)||R.contentEditable==="true")&&(Ni=R,wd=u,lo=null);break;case"focusout":lo=wd=Ni=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,Ig(h,n,c);break;case"selectionchange":if(LC)break;case"keydown":case"keyup":Ig(h,n,c)}var I;if(Zf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Oi?K0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(G0&&n.locale!=="ko"&&(Oi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Oi&&(I=W0()):(ur=c,Yf="value"in ur?ur.value:ur.textContent,Oi=!0)),R=jl(u,b),0<R.length&&(b=new wg(b,t,null,n,c),h.push({event:b,listeners:R}),I?b.data=I:(I=Q0(n),I!==null&&(b.data=I)))),(I=_C?TC(t,n):xC(t,n))&&(u=jl(u,"onBeforeInput"),0<u.length&&(c=new wg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=I))}o1(h,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Co(t,n),s!=null&&r.unshift(bo(t,s,i)),s=Co(t,e),s!=null&&r.push(bo(t,s,i))),t=t.return}return r}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Co(n,s),l!=null&&o.unshift(bo(n,l,a))):i||(l=Co(n,s),l!=null&&o.push(bo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zC=/\r\n?/g,BC=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(zC,`
`).replace(BC,"")}function za(t,e,n){if(e=Dg(e),Dg(t)!==e&&n)throw Error(O(425))}function zl(){}var Ed=null,Ad=null;function kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cd=typeof setTimeout=="function"?setTimeout:void 0,VC=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,HC=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(WC)}:Cd;function WC(t){setTimeout(function(){throw t})}function lh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xo(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ng(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),En="__reactFiber$"+Ts,Do="__reactProps$"+Ts,Hn="__reactContainer$"+Ts,_d="__reactEvents$"+Ts,GC="__reactListeners$"+Ts,KC="__reactHandles$"+Ts;function Wr(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ng(t);t!==null;){if(n=t[En])return n;t=Ng(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[En]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function zu(t){return t[Do]||null}var Td=[],Li=-1;function $r(t){return{current:t}}function De(t){0>Li||(t.current=Td[Li],Td[Li]=null,Li--)}function Pe(t,e){Li++,Td[Li]=t.current,t.current=e}var Ir={},xt=$r(Ir),Ft=$r(!1),ri=Ir;function os(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function Bl(){De(Ft),De(xt)}function $g(t,e,n){if(xt.current!==Ir)throw Error(O(168));Pe(xt,e),Pe(Ft,n)}function l1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,bk(t)||"Unknown",i));return ze({},n,r)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,ri=xt.current,Pe(xt,t),Pe(Ft,Ft.current),!0}function Mg(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=l1(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,De(Ft),De(xt),Pe(xt,t)):De(Ft),Pe(Ft,n)}var Nn=null,Bu=!1,uh=!1;function u1(t){Nn===null?Nn=[t]:Nn.push(t)}function QC(t){Bu=!0,u1(t)}function Mr(){if(!uh&&Nn!==null){uh=!0;var t=0,e=Te;try{var n=Nn;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Bu=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),N0(Gf,Mr),i}finally{Te=e,uh=!1}}return null}var Fi=[],Ui=0,Hl=null,Wl=0,Jt=[],Zt=0,ii=null,Mn=1,Ln="";function Br(t,e){Fi[Ui++]=Wl,Fi[Ui++]=Hl,Hl=t,Wl=e}function c1(t,e,n){Jt[Zt++]=Mn,Jt[Zt++]=Ln,Jt[Zt++]=ii,ii=t;var r=Mn;t=Ln;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-pn(e)+i|n<<i|r,Ln=s+t}else Mn=1<<s|n<<i|r,Ln=t}function tp(t){t.return!==null&&(Br(t,1),c1(t,1,0))}function np(t){for(;t===Hl;)Hl=Fi[--Ui],Fi[Ui]=null,Wl=Fi[--Ui],Fi[Ui]=null;for(;t===ii;)ii=Jt[--Zt],Jt[Zt]=null,Ln=Jt[--Zt],Jt[Zt]=null,Mn=Jt[--Zt],Jt[Zt]=null}var Ht=null,Bt=null,$e=!1,dn=null;function h1(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Bt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:Mn,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Bt=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Id(t){if($e){var e=Bt;if(e){var n=e;if(!Lg(t,e)){if(xd(t))throw Error(O(418));e=gr(n.nextSibling);var r=Ht;e&&Lg(t,e)?h1(r,n):(t.flags=t.flags&-4097|2,$e=!1,Ht=t)}}else{if(xd(t))throw Error(O(418));t.flags=t.flags&-4097|2,$e=!1,Ht=t}}}function Fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Ba(t){if(t!==Ht)return!1;if(!$e)return Fg(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kd(t.type,t.memoizedProps)),e&&(e=Bt)){if(xd(t))throw d1(),Error(O(418));for(;e;)h1(t,e),e=gr(e.nextSibling)}if(Fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Ht?gr(t.stateNode.nextSibling):null;return!0}function d1(){for(var t=Bt;t;)t=gr(t.nextSibling)}function as(){Bt=Ht=null,$e=!1}function rp(t){dn===null?dn=[t]:dn.push(t)}var qC=Jn.ReactCurrentBatchConfig;function cn(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Gl=$r(null),Kl=null,ji=null,ip=null;function sp(){ip=ji=Kl=null}function op(t){var e=Gl.current;De(Gl),t._currentValue=e}function Rd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){Kl=t,ip=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(Kl===null)throw Error(O(308));ji=t,Kl.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Gr=null;function ap(t){Gr===null?Gr=[t]:Gr.push(t)}function f1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ap(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,ap(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kf(t,n)}}function Ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ql(t,e,n,r){var i=t.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,m=a;switch(f=e,g=n,m.tag){case 1:if(w=m.payload,typeof w=="function"){h=w.call(g,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=m.payload,f=typeof w=="function"?w.call(g,h,f):w,f==null)break e;h=ze({},h,f);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=h}}function jg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var m1=new f0.Component().refs;function Pd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vu={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=wr(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(mn(e,t,i,r),yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=wr(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(mn(e,t,i,r),yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=wr(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=yr(t,i,r),e!==null&&(mn(e,t,r,n),yl(e,t,r))}};function zg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,r)||!Ro(i,s):!0}function g1(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Ut(e)?ri:xt.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function bd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=m1,lp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Ut(e)?ri:xt.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vu.enqueueReplaceState(i,i.state,null),Ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===m1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vg(t){var e=t._init;return e(t._payload)}function y1(t){function e(p,d){if(t){var v=p.deletions;v===null?(p.deletions=[d],p.flags|=16):v.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Sr(p,d),p.index=0,p.sibling=null,p}function s(p,d,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<d?(p.flags|=2,d):v):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,v,S){return d===null||d.tag!==6?(d=gh(v,p.mode,S),d.return=p,d):(d=i(d,v),d.return=p,d)}function l(p,d,v,S){var k=v.type;return k===Di?c(p,d,v.props.children,S,v.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nr&&Vg(k)===d.type)?(S=i(d,v.props),S.ref=Bs(p,d,v),S.return=p,S):(S=kl(v.type,v.key,v.props,null,p.mode,S),S.ref=Bs(p,d,v),S.return=p,S)}function u(p,d,v,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=yh(v,p.mode,S),d.return=p,d):(d=i(d,v.children||[]),d.return=p,d)}function c(p,d,v,S,k){return d===null||d.tag!==7?(d=Zr(v,p.mode,S,k),d.return=p,d):(d=i(d,v),d.return=p,d)}function h(p,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=gh(""+d,p.mode,v),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Da:return v=kl(d.type,d.key,d.props,null,p.mode,v),v.ref=Bs(p,null,d),v.return=p,v;case bi:return d=yh(d,p.mode,v),d.return=p,d;case nr:var S=d._init;return h(p,S(d._payload),v)}if(qs(d)||Ls(d))return d=Zr(d,p.mode,v,null),d.return=p,d;Va(p,d)}return null}function f(p,d,v,S){var k=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(p,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return v.key===k?l(p,d,v,S):null;case bi:return v.key===k?u(p,d,v,S):null;case nr:return k=v._init,f(p,d,k(v._payload),S)}if(qs(v)||Ls(v))return k!==null?null:c(p,d,v,S,null);Va(p,v)}return null}function g(p,d,v,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,a(d,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:return p=p.get(S.key===null?v:S.key)||null,l(d,p,S,k);case bi:return p=p.get(S.key===null?v:S.key)||null,u(d,p,S,k);case nr:var R=S._init;return g(p,d,v,R(S._payload),k)}if(qs(S)||Ls(S))return p=p.get(v)||null,c(d,p,S,k,null);Va(d,S)}return null}function w(p,d,v,S){for(var k=null,R=null,I=d,b=d=0,P=null;I!==null&&b<v.length;b++){I.index>b?(P=I,I=null):P=I.sibling;var M=f(p,I,v[b],S);if(M===null){I===null&&(I=P);break}t&&I&&M.alternate===null&&e(p,I),d=s(M,d,b),R===null?k=M:R.sibling=M,R=M,I=P}if(b===v.length)return n(p,I),$e&&Br(p,b),k;if(I===null){for(;b<v.length;b++)I=h(p,v[b],S),I!==null&&(d=s(I,d,b),R===null?k=I:R.sibling=I,R=I);return $e&&Br(p,b),k}for(I=r(p,I);b<v.length;b++)P=g(I,p,b,v[b],S),P!==null&&(t&&P.alternate!==null&&I.delete(P.key===null?b:P.key),d=s(P,d,b),R===null?k=P:R.sibling=P,R=P);return t&&I.forEach(function(ne){return e(p,ne)}),$e&&Br(p,b),k}function m(p,d,v,S){var k=Ls(v);if(typeof k!="function")throw Error(O(150));if(v=k.call(v),v==null)throw Error(O(151));for(var R=k=null,I=d,b=d=0,P=null,M=v.next();I!==null&&!M.done;b++,M=v.next()){I.index>b?(P=I,I=null):P=I.sibling;var ne=f(p,I,M.value,S);if(ne===null){I===null&&(I=P);break}t&&I&&ne.alternate===null&&e(p,I),d=s(ne,d,b),R===null?k=ne:R.sibling=ne,R=ne,I=P}if(M.done)return n(p,I),$e&&Br(p,b),k;if(I===null){for(;!M.done;b++,M=v.next())M=h(p,M.value,S),M!==null&&(d=s(M,d,b),R===null?k=M:R.sibling=M,R=M);return $e&&Br(p,b),k}for(I=r(p,I);!M.done;b++,M=v.next())M=g(I,p,b,M.value,S),M!==null&&(t&&M.alternate!==null&&I.delete(M.key===null?b:M.key),d=s(M,d,b),R===null?k=M:R.sibling=M,R=M);return t&&I.forEach(function(X){return e(p,X)}),$e&&Br(p,b),k}function E(p,d,v,S){if(typeof v=="object"&&v!==null&&v.type===Di&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:e:{for(var k=v.key,R=d;R!==null;){if(R.key===k){if(k=v.type,k===Di){if(R.tag===7){n(p,R.sibling),d=i(R,v.props.children),d.return=p,p=d;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nr&&Vg(k)===R.type){n(p,R.sibling),d=i(R,v.props),d.ref=Bs(p,R,v),d.return=p,p=d;break e}n(p,R);break}else e(p,R);R=R.sibling}v.type===Di?(d=Zr(v.props.children,p.mode,S,v.key),d.return=p,p=d):(S=kl(v.type,v.key,v.props,null,p.mode,S),S.ref=Bs(p,d,v),S.return=p,p=S)}return o(p);case bi:e:{for(R=v.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(p,d.sibling),d=i(d,v.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=yh(v,p.mode,S),d.return=p,p=d}return o(p);case nr:return R=v._init,E(p,d,R(v._payload),S)}if(qs(v))return w(p,d,v,S);if(Ls(v))return m(p,d,v,S);Va(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,v),d.return=p,p=d):(n(p,d),d=gh(v,p.mode,S),d.return=p,p=d),o(p)):n(p,d)}return E}var ls=y1(!0),v1=y1(!1),la={},_n=$r(la),Oo=$r(la),No=$r(la);function Kr(t){if(t===la)throw Error(O(174));return t}function up(t,e){switch(Pe(No,e),Pe(Oo,t),Pe(_n,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}De(_n),Pe(_n,e)}function us(){De(_n),De(Oo),De(No)}function w1(t){Kr(No.current);var e=Kr(_n.current),n=ud(e,t.type);e!==n&&(Pe(Oo,t),Pe(_n,n))}function cp(t){Oo.current===t&&(De(_n),De(Oo))}var Ue=$r(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ch=[];function hp(){for(var t=0;t<ch.length;t++)ch[t]._workInProgressVersionPrimary=null;ch.length=0}var vl=Jn.ReactCurrentDispatcher,hh=Jn.ReactCurrentBatchConfig,si=0,je=null,Ze=null,it=null,Yl=!1,uo=!1,$o=0,YC=0;function yt(){throw Error(O(321))}function dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function fp(t,e,n,r,i,s){if(si=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?e_:t_,t=n(r,i),uo){s=0;do{if(uo=!1,$o=0,25<=s)throw Error(O(301));s+=1,it=Ze=null,e.updateQueue=null,vl.current=n_,t=n(r,i)}while(uo)}if(vl.current=Xl,e=Ze!==null&&Ze.next!==null,si=0,it=Ze=je=null,Yl=!1,e)throw Error(O(300));return t}function pp(){var t=$o!==0;return $o=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?je.memoizedState=it=t:it=it.next=t,it}function an(){if(Ze===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=it===null?je.memoizedState:it.next;if(e!==null)it=e,Ze=t;else{if(t===null)throw Error(O(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},it===null?je.memoizedState=it=t:it=it.next=t}return it}function Mo(t,e){return typeof e=="function"?e(t):e}function dh(t){var e=an(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,je.lanes|=c,oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,yn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fh(t){var e=an(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function S1(){}function E1(t,e){var n=je,r=an(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,mp(C1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Lo(9,k1.bind(null,n,r,i,e),void 0,null),st===null)throw Error(O(349));si&30||A1(n,e,i)}return i}function A1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k1(t,e,n,r){e.value=n,e.getSnapshot=r,_1(e)&&T1(t)}function C1(t,e,n){return n(function(){_1(e)&&T1(t)})}function _1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function T1(t){var e=Wn(t,1);e!==null&&mn(e,t,1,-1)}function Hg(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=ZC.bind(null,je,t),[e.memoizedState,t]}function Lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function x1(){return an().memoizedState}function wl(t,e,n,r){var i=Sn();je.flags|=t,i.memoizedState=Lo(1|e,n,void 0,r===void 0?null:r)}function Hu(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&dp(r,o.deps)){i.memoizedState=Lo(e,n,s,r);return}}je.flags|=t,i.memoizedState=Lo(1|e,n,s,r)}function Wg(t,e){return wl(8390656,8,t,e)}function mp(t,e){return Hu(2048,8,t,e)}function I1(t,e){return Hu(4,2,t,e)}function R1(t,e){return Hu(4,4,t,e)}function P1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b1(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4,4,P1.bind(null,e,t),n)}function gp(){}function D1(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function O1(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function N1(t,e,n){return si&21?(yn(n,e)||(n=L0(),je.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function XC(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=hh.transition;hh.transition={};try{t(!1),e()}finally{Te=n,hh.transition=r}}function $1(){return an().memoizedState}function JC(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},M1(t))L1(e,n);else if(n=f1(t,e,n,r),n!==null){var i=Dt();mn(n,t,r,i),F1(n,e,r)}}function ZC(t,e,n){var r=wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(M1(t))L1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var l=e.interleaved;l===null?(i.next=i,ap(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=f1(t,e,i,r),n!==null&&(i=Dt(),mn(n,t,r,i),F1(n,e,r))}}function M1(t){var e=t.alternate;return t===je||e!==null&&e===je}function L1(t,e){uo=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kf(t,n)}}var Xl={readContext:on,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},e_={readContext:on,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:Wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,P1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JC.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Hg,useDebugValue:gp,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Hg(!1),e=t[0];return t=XC.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Sn();if($e){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),st===null)throw Error(O(349));si&30||A1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wg(C1.bind(null,r,s,t),[t]),r.flags|=2048,Lo(9,k1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=st.identifierPrefix;if($e){var n=Ln,r=Mn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},t_={readContext:on,useCallback:D1,useContext:on,useEffect:mp,useImperativeHandle:b1,useInsertionEffect:I1,useLayoutEffect:R1,useMemo:O1,useReducer:dh,useRef:x1,useState:function(){return dh(Mo)},useDebugValue:gp,useDeferredValue:function(t){var e=an();return N1(e,Ze.memoizedState,t)},useTransition:function(){var t=dh(Mo)[0],e=an().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:E1,useId:$1,unstable_isNewReconciler:!1},n_={readContext:on,useCallback:D1,useContext:on,useEffect:mp,useImperativeHandle:b1,useInsertionEffect:I1,useLayoutEffect:R1,useMemo:O1,useReducer:fh,useRef:x1,useState:function(){return fh(Mo)},useDebugValue:gp,useDeferredValue:function(t){var e=an();return Ze===null?e.memoizedState=t:N1(e,Ze.memoizedState,t)},useTransition:function(){var t=fh(Mo)[0],e=an().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:E1,useId:$1,unstable_isNewReconciler:!1};function cs(t,e){try{var n="",r=e;do n+=Pk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ph(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var r_=typeof WeakMap=="function"?WeakMap:Map;function U1(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Zl||(Zl=!0,Bd=r),Dd(t,e)},n}function j1(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dd(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new r_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=y_.bind(null,t,e,n),e.then(t,t))}function Kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var i_=Jn.ReactCurrentOwner,Lt=!1;function Pt(t,e,n,r){e.child=t===null?v1(e,null,n,r):ls(e,t.child,n,r)}function qg(t,e,n,r,i){n=n.render;var s=e.ref;return qi(e,i),r=fp(t,e,n,r,s,i),n=pp(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):($e&&n&&tp(e),e.flags|=1,Pt(t,e,r,i),e.child)}function Yg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z1(t,e,s,r,i)):(t=kl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function z1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ro(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return Od(t,e,n,r,i)}function B1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Bi,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(Bi,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Pe(Bi,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Pe(Bi,zt),zt|=r;return Pt(t,e,i,n),e.child}function V1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Od(t,e,n,r,i){var s=Ut(n)?ri:xt.current;return s=os(e,s),qi(e,i),n=fp(t,e,n,r,s,i),r=pp(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):($e&&r&&tp(e),e.flags|=1,Pt(t,e,n,i),e.child)}function Xg(t,e,n,r,i){if(Ut(n)){var s=!0;Vl(e)}else s=!1;if(qi(e,i),e.stateNode===null)Sl(t,e),g1(e,n,r),bd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Ut(n)?ri:xt.current,u=os(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Bg(e,o,r,u),rr=!1;var f=e.memoizedState;o.state=f,Ql(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ft.current||rr?(typeof c=="function"&&(Pd(e,n,c,r),l=e.memoizedState),(a=rr||zg(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,p1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:cn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Ut(n)?ri:xt.current,l=os(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Bg(e,o,r,l),rr=!1,f=e.memoizedState,o.state=f,Ql(e,r,o,i);var w=e.memoizedState;a!==h||f!==w||Ft.current||rr?(typeof g=="function"&&(Pd(e,n,g,r),w=e.memoizedState),(u=rr||zg(e,n,u,r,f,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Nd(t,e,n,r,s,i)}function Nd(t,e,n,r,i,s){V1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mg(e,n,!1),Gn(t,e,s);r=e.stateNode,i_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&Mg(e,n,!0),e.child}function H1(t){var e=t.stateNode;e.pendingContext?$g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$g(t,e.context,!1),up(t,e.containerInfo)}function Jg(t,e,n,r,i){return as(),rp(i),e.flags|=256,Pt(t,e,n,r),e.child}var $d={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function W1(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(Ue,i&1),t===null)return Id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Md(n),e.memoizedState=$d,t):yp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return s_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$d,r}return s=t.child,t=s.sibling,r=Sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yp(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,r){return r!==null&&rp(r),ls(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function s_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ph(Error(O(422))),Ha(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ku({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=Md(o),e.memoizedState=$d,s);if(!(e.mode&1))return Ha(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=ph(s,r,void 0),Ha(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=st,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),mn(r,t,i,-1))}return kp(),r=ph(Error(O(421))),Ha(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=v_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=gr(i.nextSibling),Ht=e,$e=!0,dn=null,t!==null&&(Jt[Zt++]=Mn,Jt[Zt++]=Ln,Jt[Zt++]=ii,Mn=t.id,Ln=t.overflow,ii=e),e=yp(e,r.children),e.flags|=4096,e)}function Zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rd(t.return,e,n)}function mh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function G1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zg(t,n,e);else if(t.tag===19)Zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ql(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mh(e,!0,n,null,s);break;case"together":mh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o_(t,e,n){switch(e.tag){case 3:H1(e),as();break;case 5:w1(e);break;case 1:Ut(e.type)&&Vl(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(Gl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?W1(t,e,n):(Pe(Ue,Ue.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);Pe(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return G1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,B1(t,e,n)}return Gn(t,e,n)}var K1,Ld,Q1,q1;K1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ld=function(){};Q1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(_n.current);var s=null;switch(n){case"input":i=sd(t,i),r=sd(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=ld(t,i),r=ld(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zl)}cd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&be("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};q1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vs(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function a_(t,e,n){var r=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Ut(e.type)&&Bl(),vt(e),null;case 3:return r=e.stateNode,us(),De(Ft),De(xt),hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(Wd(dn),dn=null))),Ld(t,e),vt(e),null;case 5:cp(e);var i=Kr(No.current);if(n=e.type,t!==null&&e.stateNode!=null)Q1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return vt(e),null}if(t=Kr(_n.current),Ba(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[Do]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<Xs.length;i++)be(Xs[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":lg(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":cg(r,s),be("invalid",r)}cd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",""+a]):Ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":Oa(r),ug(r,s,!0);break;case"textarea":Oa(r),hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[Do]=r,K1(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xs.length;i++)be(Xs[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":lg(t,r),i=sd(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),be("invalid",t);break;case"textarea":cg(t,r),i=ld(t,r),be("invalid",t);break;default:i=r}cd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(t,l):typeof l=="number"&&ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&be("scroll",t):l!=null&&zf(t,s,l,o))}switch(n){case"input":Oa(t),ug(t,r,!1);break;case"textarea":Oa(t),hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)q1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=Kr(No.current),Kr(_n.current),Ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return vt(e),null;case 13:if(De(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&Bt!==null&&e.mode&1&&!(e.flags&128))d1(),as(),e.flags|=98560,s=!1;else if(s=Ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[En]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else dn!==null&&(Wd(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?tt===0&&(tt=3):kp())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return us(),Ld(t,e),t===null&&Po(e.stateNode.containerInfo),vt(e),null;case 10:return op(e.type._context),vt(e),null;case 17:return Ut(e.type)&&Bl(),vt(e),null;case 19:if(De(Ue),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vs(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,Vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ge()>hs&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ql(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return vt(e),null}else 2*Ge()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ge(),e.sibling=null,n=Ue.current,Pe(Ue,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return Ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function l_(t,e){switch(np(e),e.tag){case 1:return Ut(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),De(Ft),De(xt),hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cp(e),null;case 13:if(De(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Ue),null;case 4:return us(),null;case 10:return op(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var Wa=!1,Et=!1,u_=typeof WeakSet=="function"?WeakSet:Set,K=null;function zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Fd(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var ey=!1;function c_(t,e){if(Ed=Fl,t=Z0(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ad={focusedElem:t,selectionRange:n},Fl=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var m=w.memoizedProps,E=w.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?m:cn(e.type,m),E);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(S){Ve(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return w=ey,ey=!1,w}function co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fd(e,n,s)}i=i.next}while(i!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y1(t){var e=t.alternate;e!==null&&(t.alternate=null,Y1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[Do],delete e[_d],delete e[GC],delete e[KC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X1(t){return t.tag===5||t.tag===3||t.tag===4}function ty(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(r!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}var ct=null,hn=!1;function er(t,e,n){for(n=n.child;n!==null;)J1(t,e,n),n=n.sibling}function J1(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 5:Et||zi(n,e);case 6:var r=ct,i=hn;ct=null,er(t,e,n),ct=r,hn=i,ct!==null&&(hn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(hn?(t=ct,n=n.stateNode,t.nodeType===8?lh(t.parentNode,n):t.nodeType===1&&lh(t,n),xo(t)):lh(ct,n.stateNode));break;case 4:r=ct,i=hn,ct=n.stateNode.containerInfo,hn=!0,er(t,e,n),ct=r,hn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fd(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!Et&&(zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,er(t,e,n),Et=r):er(t,e,n);break;default:er(t,e,n)}}function ny(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u_),e.forEach(function(r){var i=w_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,hn=!1;break e;case 3:ct=a.stateNode.containerInfo,hn=!0;break e;case 4:ct=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(ct===null)throw Error(O(160));J1(s,o,i),ct=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z1(e,t),e=e.sibling}function Z1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),wn(t),r&4){try{co(3,t,t.return),Wu(3,t)}catch(m){Ve(t,t.return,m)}try{co(5,t,t.return)}catch(m){Ve(t,t.return,m)}}break;case 1:un(e,t),wn(t),r&512&&n!==null&&zi(n,n.return);break;case 5:if(un(e,t),wn(t),r&512&&n!==null&&zi(n,n.return),t.flags&32){var i=t.stateNode;try{ko(i,"")}catch(m){Ve(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S0(i,s),hd(a,o);var u=hd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?_0(i,h):c==="dangerouslySetInnerHTML"?k0(i,h):c==="children"?ko(i,h):zf(i,c,h,u)}switch(a){case"input":od(i,s);break;case"textarea":E0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Wi(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Wi(i,!!s.multiple,s.defaultValue,!0):Wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Do]=s}catch(m){Ve(t,t.return,m)}}break;case 6:if(un(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(m){Ve(t,t.return,m)}}break;case 3:if(un(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(m){Ve(t,t.return,m)}break;case 4:un(e,t),wn(t);break;case 13:un(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sp=Ge())),r&4&&ny(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(u=Et)||c,un(e,t),Et=u):un(e,t),wn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(K=t,c=t.child;c!==null;){for(h=K=c;K!==null;){switch(f=K,g=f.child,f.tag){case 0:case 11:case 14:case 15:co(4,f,f.return);break;case 1:zi(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(m){Ve(r,n,m)}}break;case 5:zi(f,f.return);break;case 22:if(f.memoizedState!==null){iy(h);continue}}g!==null?(g.return=f,K=g):iy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=C0("display",o))}catch(m){Ve(t,t.return,m)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){Ve(t,t.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:un(e,t),wn(t),r&4&&ny(t);break;case 21:break;default:un(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X1(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var s=ty(t);zd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ty(t);jd(t,a,o);break;default:throw Error(O(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h_(t,e,n){K=t,ew(t)}function ew(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Et;a=Wa;var u=Et;if(Wa=o,(Et=l)&&!u)for(K=i;K!==null;)o=K,l=o.child,o.tag===22&&o.memoizedState!==null?sy(i):l!==null?(l.return=o,K=l):sy(i);for(;s!==null;)K=s,ew(s),s=s.sibling;K=i,Wa=a,Et=u}ry(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):ry(t)}}function ry(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&xo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Et||e.flags&512&&Ud(e)}catch(f){Ve(e,e.return,f)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function iy(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function sy(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Ud(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Ud(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var d_=Math.ceil,Jl=Jn.ReactCurrentDispatcher,vp=Jn.ReactCurrentOwner,nn=Jn.ReactCurrentBatchConfig,Se=0,st=null,Ye=null,ft=0,zt=0,Bi=$r(0),tt=0,Fo=null,oi=0,Gu=0,wp=0,ho=null,$t=null,Sp=0,hs=1/0,On=null,Zl=!1,Bd=null,vr=null,Ga=!1,cr=null,eu=0,fo=0,Vd=null,El=-1,Al=0;function Dt(){return Se&6?Ge():El!==-1?El:El=Ge()}function wr(t){return t.mode&1?Se&2&&ft!==0?ft&-ft:qC.transition!==null?(Al===0&&(Al=L0()),Al):(t=Te,t!==0||(t=window.event,t=t===void 0?16:H0(t.type)),t):1}function mn(t,e,n,r){if(50<fo)throw fo=0,Vd=null,Error(O(185));sa(t,n,r),(!(Se&2)||t!==st)&&(t===st&&(!(Se&2)&&(Gu|=n),tt===4&&sr(t,ft)),jt(t,r),n===1&&Se===0&&!(e.mode&1)&&(hs=Ge()+500,Bu&&Mr()))}function jt(t,e){var n=t.callbackNode;qk(t,e);var r=Ll(t,t===st?ft:0);if(r===0)n!==null&&pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pg(n),e===1)t.tag===0?QC(oy.bind(null,t)):u1(oy.bind(null,t)),HC(function(){!(Se&6)&&Mr()}),n=null;else{switch(F0(r)){case 1:n=Gf;break;case 4:n=$0;break;case 16:n=Ml;break;case 536870912:n=M0;break;default:n=Ml}n=lw(n,tw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tw(t,e){if(El=-1,Al=0,Se&6)throw Error(O(327));var n=t.callbackNode;if(Yi()&&t.callbackNode!==n)return null;var r=Ll(t,t===st?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=tu(t,r);else{e=r;var i=Se;Se|=2;var s=rw();(st!==t||ft!==e)&&(On=null,hs=Ge()+500,Jr(t,e));do try{m_();break}catch(a){nw(t,a)}while(1);sp(),Jl.current=s,Se=i,Ye!==null?e=0:(st=null,ft=0,e=tt)}if(e!==0){if(e===2&&(i=gd(t),i!==0&&(r=i,e=Hd(t,i))),e===1)throw n=Fo,Jr(t,0),sr(t,r),jt(t,Ge()),n;if(e===6)sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!f_(i)&&(e=tu(t,r),e===2&&(s=gd(t),s!==0&&(r=s,e=Hd(t,s))),e===1))throw n=Fo,Jr(t,0),sr(t,r),jt(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:Vr(t,$t,On);break;case 3:if(sr(t,r),(r&130023424)===r&&(e=Sp+500-Ge(),10<e)){if(Ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cd(Vr.bind(null,t,$t,On),e);break}Vr(t,$t,On);break;case 4:if(sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d_(r/1960))-r,10<r){t.timeoutHandle=Cd(Vr.bind(null,t,$t,On),r);break}Vr(t,$t,On);break;case 5:Vr(t,$t,On);break;default:throw Error(O(329))}}}return jt(t,Ge()),t.callbackNode===n?tw.bind(null,t):null}function Hd(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=tu(t,e),t!==2&&(e=$t,$t=n,e!==null&&Wd(e)),t}function Wd(t){$t===null?$t=t:$t.push.apply($t,t)}function f_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~wp,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function oy(t){if(Se&6)throw Error(O(327));Yi();var e=Ll(t,0);if(!(e&1))return jt(t,Ge()),null;var n=tu(t,e);if(t.tag!==0&&n===2){var r=gd(t);r!==0&&(e=r,n=Hd(t,r))}if(n===1)throw n=Fo,Jr(t,0),sr(t,e),jt(t,Ge()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,$t,On),jt(t,Ge()),null}function Ep(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(hs=Ge()+500,Bu&&Mr())}}function ai(t){cr!==null&&cr.tag===0&&!(Se&6)&&Yi();var e=Se;Se|=1;var n=nn.transition,r=Te;try{if(nn.transition=null,Te=1,t)return t()}finally{Te=r,nn.transition=n,Se=e,!(Se&6)&&Mr()}}function Ap(){zt=Bi.current,De(Bi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VC(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(np(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:us(),De(Ft),De(xt),hp();break;case 5:cp(r);break;case 4:us();break;case 13:De(Ue);break;case 19:De(Ue);break;case 10:op(r.type._context);break;case 22:case 23:Ap()}n=n.return}if(st=t,Ye=t=Sr(t.current,null),ft=zt=e,tt=0,Fo=null,wp=Gu=oi=0,$t=ho=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function nw(t,e){do{var n=Ye;try{if(sp(),vl.current=Xl,Yl){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yl=!1}if(si=0,it=Ze=je=null,uo=!1,$o=0,vp.current=null,n===null||n.return===null){tt=1,Fo=e,Ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Kg(o);if(g!==null){g.flags&=-257,Qg(g,o,a,s,e),g.mode&1&&Gg(s,u,e),e=g,l=u;var w=e.updateQueue;if(w===null){var m=new Set;m.add(l),e.updateQueue=m}else w.add(l);break e}else{if(!(e&1)){Gg(s,u,e),kp();break e}l=Error(O(426))}}else if($e&&a.mode&1){var E=Kg(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qg(E,o,a,s,e),rp(cs(l,a));break e}}s=l=cs(l,a),tt!==4&&(tt=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=U1(s,l,e);Ug(s,p);break e;case 1:a=l;var d=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vr===null||!vr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=j1(s,a,e);Ug(s,S);break e}}s=s.return}while(s!==null)}sw(n)}catch(k){e=k,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function rw(){var t=Jl.current;return Jl.current=Xl,t===null?Xl:t}function kp(){(tt===0||tt===3||tt===2)&&(tt=4),st===null||!(oi&268435455)&&!(Gu&268435455)||sr(st,ft)}function tu(t,e){var n=Se;Se|=2;var r=rw();(st!==t||ft!==e)&&(On=null,Jr(t,e));do try{p_();break}catch(i){nw(t,i)}while(1);if(sp(),Se=n,Jl.current=r,Ye!==null)throw Error(O(261));return st=null,ft=0,tt}function p_(){for(;Ye!==null;)iw(Ye)}function m_(){for(;Ye!==null&&!jk();)iw(Ye)}function iw(t){var e=aw(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?sw(t):Ye=e,vp.current=null}function sw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=l_(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Ye=null;return}}else if(n=a_(n,e,zt),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);tt===0&&(tt=5)}function Vr(t,e,n){var r=Te,i=nn.transition;try{nn.transition=null,Te=1,g_(t,e,n,r)}finally{nn.transition=i,Te=r}return null}function g_(t,e,n,r){do Yi();while(cr!==null);if(Se&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yk(t,s),t===st&&(Ye=st=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,lw(Ml,function(){return Yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=Te;Te=1;var a=Se;Se|=4,vp.current=null,c_(t,n),Z1(n,t),MC(Ad),Fl=!!Ed,Ad=Ed=null,t.current=n,h_(n),zk(),Se=a,Te=o,nn.transition=s}else t.current=n;if(Ga&&(Ga=!1,cr=t,eu=i),s=t.pendingLanes,s===0&&(vr=null),Hk(n.stateNode),jt(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zl)throw Zl=!1,t=Bd,Bd=null,t;return eu&1&&t.tag!==0&&Yi(),s=t.pendingLanes,s&1?t===Vd?fo++:(fo=0,Vd=t):fo=0,Mr(),null}function Yi(){if(cr!==null){var t=F0(eu),e=nn.transition,n=Te;try{if(nn.transition=null,Te=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,eu=0,Se&6)throw Error(O(331));var i=Se;for(Se|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(K=u;K!==null;){var c=K;switch(c.tag){case 0:case 11:case 15:co(8,c,s)}var h=c.child;if(h!==null)h.return=c,K=h;else for(;K!==null;){c=K;var f=c.sibling,g=c.return;if(Y1(c),c===u){K=null;break}if(f!==null){f.return=g,K=f;break}K=g}}}var w=s.alternate;if(w!==null){var m=w.child;if(m!==null){w.child=null;do{var E=m.sibling;m.sibling=null,m=E}while(m!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,K=p;break e}K=s.return}}var d=t.current;for(K=d;K!==null;){o=K;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,K=v;else e:for(o=d;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wu(9,a)}}catch(k){Ve(a,a.return,k)}if(a===o){K=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,K=S;break e}K=a.return}}if(Se=i,Mr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Lu,t)}catch{}r=!0}return r}finally{Te=n,nn.transition=e}}return!1}function ay(t,e,n){e=cs(n,e),e=U1(t,e,1),t=yr(t,e,1),e=Dt(),t!==null&&(sa(t,1,e),jt(t,e))}function Ve(t,e,n){if(t.tag===3)ay(t,t,n);else for(;e!==null;){if(e.tag===3){ay(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=cs(n,t),t=j1(e,t,1),e=yr(e,t,1),t=Dt(),e!==null&&(sa(e,1,t),jt(e,t));break}}e=e.return}}function y_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(ft&n)===n&&(tt===4||tt===3&&(ft&130023424)===ft&&500>Ge()-Sp?Jr(t,0):wp|=n),jt(t,e)}function ow(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=Dt();t=Wn(t,e),t!==null&&(sa(t,e,n),jt(t,n))}function v_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ow(t,n)}function w_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),ow(t,n)}var aw;aw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,o_(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,$e&&e.flags&1048576&&c1(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sl(t,e),t=e.pendingProps;var i=os(e,xt.current);qi(e,n),i=fp(null,e,r,t,i,n);var s=pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,Vl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lp(e),i.updater=Vu,e.stateNode=i,i._reactInternals=e,bd(e,r,t,n),e=Nd(null,e,r,!0,s,n)):(e.tag=0,$e&&s&&tp(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=E_(r),t=cn(r,t),i){case 0:e=Od(null,e,r,t,n);break e;case 1:e=Xg(null,e,r,t,n);break e;case 11:e=qg(null,e,r,t,n);break e;case 14:e=Yg(null,e,r,cn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Od(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Xg(t,e,r,i,n);case 3:e:{if(H1(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,p1(t,e),Ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cs(Error(O(423)),e),e=Jg(t,e,r,n,i);break e}else if(r!==i){i=cs(Error(O(424)),e),e=Jg(t,e,r,n,i);break e}else for(Bt=gr(e.stateNode.containerInfo.firstChild),Ht=e,$e=!0,dn=null,n=v1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=Gn(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return w1(e),t===null&&Id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kd(r,i)?o=null:s!==null&&kd(r,s)&&(e.flags|=32),V1(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Id(e),null;case 13:return W1(t,e,n);case 4:return up(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),qg(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Pe(Gl,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Ft.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qi(e,n),i=on(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),Yg(t,e,r,i,n);case 15:return z1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Sl(t,e),e.tag=1,Ut(r)?(t=!0,Vl(e)):t=!1,qi(e,n),g1(e,r,i),bd(e,r,i,n),Nd(null,e,r,!0,t,n);case 19:return G1(t,e,n);case 22:return B1(t,e,n)}throw Error(O(156,e.tag))};function lw(t,e){return N0(t,e)}function S_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new S_(t,e,n,r)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E_(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vf)return 11;if(t===Hf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Di:return Zr(n.children,i,s,e);case Bf:o=8,i|=8;break;case td:return t=tn(12,n,e,i|2),t.elementType=td,t.lanes=s,t;case nd:return t=tn(13,n,e,i),t.elementType=nd,t.lanes=s,t;case rd:return t=tn(19,n,e,i),t.elementType=rd,t.lanes=s,t;case y0:return Ku(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m0:o=10;break e;case g0:o=9;break e;case Vf:o=11;break e;case Hf:o=14;break e;case nr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function Ku(t,e,n,r){return t=tn(22,t,r,e),t.elementType=y0,t.lanes=n,t.stateNode={isHidden:!1},t}function gh(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function yh(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _p(t,e,n,r,i,s,o,a,l){return t=new A_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function k_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function uw(t){if(!t)return Ir;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(Ut(n))return l1(t,n,e)}return e}function cw(t,e,n,r,i,s,o,a,l){return t=_p(n,r,!0,t,i,s,o,a,l),t.context=uw(null),n=t.current,r=Dt(),i=wr(n),s=Bn(r,i),s.callback=e??null,yr(n,s,i),t.current.lanes=i,sa(t,i,r),jt(t,r),t}function Qu(t,e,n,r){var i=e.current,s=Dt(),o=wr(i);return n=uw(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yr(i,e,o),t!==null&&(mn(t,i,o,s),yl(t,i,o)),o}function nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ly(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tp(t,e){ly(t,e),(t=t.alternate)&&ly(t,e)}function C_(){return null}var hw=typeof reportError=="function"?reportError:function(t){console.error(t)};function xp(t){this._internalRoot=t}qu.prototype.render=xp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Qu(t,e,null,null)};qu.prototype.unmount=xp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){Qu(null,t,null,null)}),e[Hn]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&V0(t)}};function Ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uy(){}function __(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=nu(o);s.call(u)}}var o=cw(e,r,t,0,null,!1,!1,"",uy);return t._reactRootContainer=o,t[Hn]=o.current,Po(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=nu(l);a.call(u)}}var l=_p(t,0,!1,null,null,!1,!1,"",uy);return t._reactRootContainer=l,t[Hn]=l.current,Po(t.nodeType===8?t.parentNode:t),ai(function(){Qu(e,l,n,r)}),l}function Xu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=nu(o);a.call(l)}}Qu(e,o,t,i)}else o=__(n,e,t,i,r);return nu(o)}U0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ys(e.pendingLanes);n!==0&&(Kf(e,n|1),jt(e,Ge()),!(Se&6)&&(hs=Ge()+500,Mr()))}break;case 13:ai(function(){var r=Wn(t,1);if(r!==null){var i=Dt();mn(r,t,1,i)}}),Tp(t,1)}};Qf=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=Dt();mn(e,t,134217728,n)}Tp(t,134217728)}};j0=function(t){if(t.tag===13){var e=wr(t),n=Wn(t,e);if(n!==null){var r=Dt();mn(n,t,e,r)}Tp(t,e)}};z0=function(){return Te};B0=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};fd=function(t,e,n){switch(e){case"input":if(od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zu(r);if(!i)throw Error(O(90));w0(r),od(r,i)}}}break;case"textarea":E0(t,n);break;case"select":e=n.value,e!=null&&Wi(t,!!n.multiple,e,!1)}};I0=Ep;R0=ai;var T_={usingClientEntryPoint:!1,Events:[aa,Mi,zu,T0,x0,Ep]},Hs={findFiberByHostInstance:Wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},x_={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D0(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||C_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Lu=Ka.inject(x_),Cn=Ka}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(e))throw Error(O(200));return k_(t,e,null,n)};qt.createRoot=function(t,e){if(!Ip(t))throw Error(O(299));var n=!1,r="",i=hw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_p(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,Po(t.nodeType===8?t.parentNode:t),new xp(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=D0(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return ai(t)};qt.hydrate=function(t,e,n){if(!Yu(e))throw Error(O(200));return Xu(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!Ip(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cw(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,Po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qu(e)};qt.render=function(t,e,n){if(!Yu(e))throw Error(O(200));return Xu(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Yu(t))throw Error(O(40));return t._reactRootContainer?(ai(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};qt.unstable_batchedUpdates=Ep;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yu(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Xu(t,e,n,!1,r)};qt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=qt})(Ck);var cy=Jh;Xh.createRoot=cy.createRoot,Xh.hydrateRoot=cy.hydrateRoot;const dw={colors:{background:"rgb(0,6,68)",backgroundSecond:"rgb(49, 43, 182)",backgroundTransparent:"rgba(4, 7, 46, 0.8)",main:"rgb(255,255,255)",second:"rgb(6,237,245)",interaction:"rgb(241, 238, 255)",hoverDark:"rgb(4, 7, 46)",disabledInput:"rgb(201, 201, 201)"},boxShadow:{dark:"2px 2px 5px rgb(15, 16, 32)",purple:" 0px 2px 4px 0px rgb(101, 67, 250)"}};var Uo={},I_={get exports(){return Uo},set exports(t){Uo=t}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=typeof Symbol=="function"&&Symbol.for,Rp=lt?Symbol.for("react.element"):60103,Pp=lt?Symbol.for("react.portal"):60106,Ju=lt?Symbol.for("react.fragment"):60107,Zu=lt?Symbol.for("react.strict_mode"):60108,ec=lt?Symbol.for("react.profiler"):60114,tc=lt?Symbol.for("react.provider"):60109,nc=lt?Symbol.for("react.context"):60110,bp=lt?Symbol.for("react.async_mode"):60111,rc=lt?Symbol.for("react.concurrent_mode"):60111,ic=lt?Symbol.for("react.forward_ref"):60112,sc=lt?Symbol.for("react.suspense"):60113,R_=lt?Symbol.for("react.suspense_list"):60120,oc=lt?Symbol.for("react.memo"):60115,ac=lt?Symbol.for("react.lazy"):60116,P_=lt?Symbol.for("react.block"):60121,b_=lt?Symbol.for("react.fundamental"):60117,D_=lt?Symbol.for("react.responder"):60118,O_=lt?Symbol.for("react.scope"):60119;function Xt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Rp:switch(t=t.type,t){case bp:case rc:case Ju:case ec:case Zu:case sc:return t;default:switch(t=t&&t.$$typeof,t){case nc:case ic:case ac:case oc:case tc:return t;default:return e}}case Pp:return e}}}function fw(t){return Xt(t)===rc}Ie.AsyncMode=bp;Ie.ConcurrentMode=rc;Ie.ContextConsumer=nc;Ie.ContextProvider=tc;Ie.Element=Rp;Ie.ForwardRef=ic;Ie.Fragment=Ju;Ie.Lazy=ac;Ie.Memo=oc;Ie.Portal=Pp;Ie.Profiler=ec;Ie.StrictMode=Zu;Ie.Suspense=sc;Ie.isAsyncMode=function(t){return fw(t)||Xt(t)===bp};Ie.isConcurrentMode=fw;Ie.isContextConsumer=function(t){return Xt(t)===nc};Ie.isContextProvider=function(t){return Xt(t)===tc};Ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rp};Ie.isForwardRef=function(t){return Xt(t)===ic};Ie.isFragment=function(t){return Xt(t)===Ju};Ie.isLazy=function(t){return Xt(t)===ac};Ie.isMemo=function(t){return Xt(t)===oc};Ie.isPortal=function(t){return Xt(t)===Pp};Ie.isProfiler=function(t){return Xt(t)===ec};Ie.isStrictMode=function(t){return Xt(t)===Zu};Ie.isSuspense=function(t){return Xt(t)===sc};Ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ju||t===rc||t===ec||t===Zu||t===sc||t===R_||typeof t=="object"&&t!==null&&(t.$$typeof===ac||t.$$typeof===oc||t.$$typeof===tc||t.$$typeof===nc||t.$$typeof===ic||t.$$typeof===b_||t.$$typeof===D_||t.$$typeof===O_||t.$$typeof===P_)};Ie.typeOf=Xt;(function(t){t.exports=Ie})(I_);function N_(t){function e(U,V,B,le,A){for(var fe=0,F=0,Re=0,x=0,N,j,Z=0,J=0,Q,ee=Q=N=0,G=0,se=0,ve=0,oe=0,W=B.length,Ne=W-1,Fe,ue="",We="",Hc="",Wc="",Zn;G<W;){if(j=B.charCodeAt(G),G===Ne&&F+x+Re+fe!==0&&(F!==0&&(j=F===47?10:47),x=Re=fe=0,W++,Ne++),F+x+Re+fe===0){if(G===Ne&&(0<se&&(ue=ue.replace(f,"")),0<ue.trim().length)){switch(j){case 32:case 9:case 59:case 13:case 10:break;default:ue+=B.charAt(G)}j=59}switch(j){case 123:for(ue=ue.trim(),N=ue.charCodeAt(0),Q=1,oe=++G;G<W;){switch(j=B.charCodeAt(G)){case 123:Q++;break;case 125:Q--;break;case 47:switch(j=B.charCodeAt(G+1)){case 42:case 47:e:{for(ee=G+1;ee<Ne;++ee)switch(B.charCodeAt(ee)){case 47:if(j===42&&B.charCodeAt(ee-1)===42&&G+2!==ee){G=ee+1;break e}break;case 10:if(j===47){G=ee+1;break e}}G=ee}}break;case 91:j++;case 40:j++;case 34:case 39:for(;G++<Ne&&B.charCodeAt(G)!==j;);}if(Q===0)break;G++}switch(Q=B.substring(oe,G),N===0&&(N=(ue=ue.replace(h,"").trim()).charCodeAt(0)),N){case 64:switch(0<se&&(ue=ue.replace(f,"")),j=ue.charCodeAt(1),j){case 100:case 109:case 115:case 45:se=V;break;default:se=Xe}if(Q=e(V,se,Q,j,A+1),oe=Q.length,0<L&&(se=n(Xe,ue,ve),Zn=a(3,Q,se,V,q,X,oe,j,A,le),ue=se.join(""),Zn!==void 0&&(oe=(Q=Zn.trim()).length)===0&&(j=0,Q="")),0<oe)switch(j){case 115:ue=ue.replace(R,o);case 100:case 109:case 45:Q=ue+"{"+Q+"}";break;case 107:ue=ue.replace(d,"$1 $2"),Q=ue+"{"+Q+"}",Q=_e===1||_e===2&&s("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=ue+Q,le===112&&(Q=(We+=Q,""))}else Q="";break;default:Q=e(V,n(V,ue,ve),Q,le,A+1)}Hc+=Q,Q=ve=se=ee=N=0,ue="",j=B.charCodeAt(++G);break;case 125:case 59:if(ue=(0<se?ue.replace(f,""):ue).trim(),1<(oe=ue.length))switch(ee===0&&(N=ue.charCodeAt(0),N===45||96<N&&123>N)&&(oe=(ue=ue.replace(" ",":")).length),0<L&&(Zn=a(1,ue,V,U,q,X,We.length,le,A,le))!==void 0&&(oe=(ue=Zn.trim()).length)===0&&(ue="\0\0"),N=ue.charCodeAt(0),j=ue.charCodeAt(1),N){case 0:break;case 64:if(j===105||j===99){Wc+=ue+B.charAt(G);break}default:ue.charCodeAt(oe-1)!==58&&(We+=i(ue,N,j,ue.charCodeAt(2)))}ve=se=ee=N=0,ue="",j=B.charCodeAt(++G)}}switch(j){case 13:case 10:F===47?F=0:1+N===0&&le!==107&&0<ue.length&&(se=1,ue+="\0"),0<L*ae&&a(0,ue,V,U,q,X,We.length,le,A,le),X=1,q++;break;case 59:case 125:if(F+x+Re+fe===0){X++;break}default:switch(X++,Fe=B.charAt(G),j){case 9:case 32:if(x+fe+F===0)switch(Z){case 44:case 58:case 9:case 32:Fe="";break;default:j!==32&&(Fe=" ")}break;case 0:Fe="\\0";break;case 12:Fe="\\f";break;case 11:Fe="\\v";break;case 38:x+F+fe===0&&(se=ve=1,Fe="\f"+Fe);break;case 108:if(x+F+fe+Ce===0&&0<ee)switch(G-ee){case 2:Z===112&&B.charCodeAt(G-3)===58&&(Ce=Z);case 8:J===111&&(Ce=J)}break;case 58:x+F+fe===0&&(ee=G);break;case 44:F+Re+x+fe===0&&(se=1,Fe+="\r");break;case 34:case 39:F===0&&(x=x===j?0:x===0?j:x);break;case 91:x+F+Re===0&&fe++;break;case 93:x+F+Re===0&&fe--;break;case 41:x+F+fe===0&&Re--;break;case 40:if(x+F+fe===0){if(N===0)switch(2*Z+3*J){case 533:break;default:N=1}Re++}break;case 64:F+Re+x+fe+ee+Q===0&&(Q=1);break;case 42:case 47:if(!(0<x+fe+Re))switch(F){case 0:switch(2*j+3*B.charCodeAt(G+1)){case 235:F=47;break;case 220:oe=G,F=42}break;case 42:j===47&&Z===42&&oe+2!==G&&(B.charCodeAt(oe+2)===33&&(We+=B.substring(oe,G+1)),Fe="",F=0)}}F===0&&(ue+=Fe)}J=Z,Z=j,G++}if(oe=We.length,0<oe){if(se=V,0<L&&(Zn=a(2,We,se,U,q,X,oe,le,A,le),Zn!==void 0&&(We=Zn).length===0))return Wc+We+Hc;if(We=se.join(",")+"{"+We+"}",_e*Ce!==0){switch(_e!==2||s(We,2)||(Ce=0),Ce){case 111:We=We.replace(S,":-moz-$1")+We;break;case 112:We=We.replace(v,"::-webkit-input-$1")+We.replace(v,"::-moz-$1")+We.replace(v,":-ms-input-$1")+We}Ce=0}}return Wc+We+Hc}function n(U,V,B){var le=V.trim().split(E);V=le;var A=le.length,fe=U.length;switch(fe){case 0:case 1:var F=0;for(U=fe===0?"":U[0]+" ";F<A;++F)V[F]=r(U,V[F],B).trim();break;default:var Re=F=0;for(V=[];F<A;++F)for(var x=0;x<fe;++x)V[Re++]=r(U[x]+" ",le[F],B).trim()}return V}function r(U,V,B){var le=V.charCodeAt(0);switch(33>le&&(le=(V=V.trim()).charCodeAt(0)),le){case 38:return V.replace(p,"$1"+U.trim());case 58:return U.trim()+V.replace(p,"$1"+U.trim());default:if(0<1*B&&0<V.indexOf("\f"))return V.replace(p,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+V}function i(U,V,B,le){var A=U+";",fe=2*V+3*B+4*le;if(fe===944){U=A.indexOf(":",9)+1;var F=A.substring(U,A.length-1).trim();return F=A.substring(0,U).trim()+F+";",_e===1||_e===2&&s(F,1)?"-webkit-"+F+F:F}if(_e===0||_e===2&&!s(A,1))return A;switch(fe){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(ne,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return F=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+A+"-ms-flex-pack"+F+A;case 1005:return w.test(A)?A.replace(g,":-webkit-")+A.replace(g,":-moz-")+A:A;case 1e3:switch(F=A.substring(13).trim(),V=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt(V)){case 226:F=A.replace(k,"tb");break;case 232:F=A.replace(k,"tb-rl");break;case 220:F=A.replace(k,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+F+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(V=(A=U).length-10,F=(A.charCodeAt(V)===33?A.substring(0,V):A).substring(U.indexOf(":",7)+1).trim(),fe=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:A=A.replace(F,"-webkit-"+F)+";"+A;break;case 207:case 102:A=A.replace(F,"-webkit-"+(102<fe?"inline-":"")+"box")+";"+A.replace(F,"-webkit-"+F)+";"+A.replace(F,"-ms-"+F+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return F=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+F+"-ms-flex-"+F+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(b,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(b,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(M.test(U)===!0)return(F=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),V,B,le).replace(":fill-available",":stretch"):A.replace(F,"-webkit-"+F)+A.replace(F,"-moz-"+F.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,B+le===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+A}return A}function s(U,V){var B=U.indexOf(V===1?":":"{"),le=U.substring(0,V!==3?B:10);return B=U.substring(B+1,U.length-1),re(V!==2?le:le.replace(P,"$1"),B,V)}function o(U,V){var B=i(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return B!==V+";"?B.replace(I," or ($1)").substring(4):"("+V+")"}function a(U,V,B,le,A,fe,F,Re,x,N){for(var j=0,Z=V,J;j<L;++j)switch(J=Je[j].call(c,U,Z,B,le,A,fe,F,Re,x,N)){case void 0:case!1:case!0:case null:break;default:Z=J}if(Z!==V)return Z}function l(U){switch(U){case void 0:case null:L=Je.length=0;break;default:if(typeof U=="function")Je[L++]=U;else if(typeof U=="object")for(var V=0,B=U.length;V<B;++V)l(U[V]);else ae=!!U|0}return l}function u(U){return U=U.prefix,U!==void 0&&(re=null,U?typeof U!="function"?_e=1:(_e=2,re=U):_e=0),u}function c(U,V){var B=U;if(33>B.charCodeAt(0)&&(B=B.trim()),Ee=B,B=[Ee],0<L){var le=a(-1,V,B,B,q,X,0,0,0,0);le!==void 0&&typeof le=="string"&&(V=le)}var A=e(Xe,B,V,0,0);return 0<L&&(le=a(-2,A,B,B,q,X,A.length,0,0,0),le!==void 0&&(A=le)),Ee="",Ce=0,X=q=1,A}var h=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,w=/zoo|gra/,m=/([,: ])(transform)/g,E=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,S=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,b=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,ne=/([^-])(image-set\()/,X=1,q=1,Ce=0,_e=1,Xe=[],Je=[],L=0,re=null,ae=0,Ee="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var $_={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function M_(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var L_=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hy=M_(function(t){return L_.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Dp=Uo,F_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},j_={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Op={};Op[Dp.ForwardRef]=j_;Op[Dp.Memo]=pw;function dy(t){return Dp.isMemo(t)?pw:Op[t.$$typeof]||F_}var z_=Object.defineProperty,B_=Object.getOwnPropertyNames,fy=Object.getOwnPropertySymbols,V_=Object.getOwnPropertyDescriptor,H_=Object.getPrototypeOf,py=Object.prototype;function mw(t,e,n){if(typeof e!="string"){if(py){var r=H_(e);r&&r!==py&&mw(t,r,n)}var i=B_(e);fy&&(i=i.concat(fy(e)));for(var s=dy(t),o=dy(e),a=0;a<i.length;++a){var l=i[a];if(!U_[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=V_(e,l);try{z_(t,l,u)}catch{}}}}return t}var W_=mw;function fn(){return(fn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var my=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Gd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Uo.typeOf(t)},ru=Object.freeze([]),Er=Object.freeze({});function ds(t){return typeof t=="function"}function gy(t){return t.displayName||t.name||"Component"}function Np(t){return t&&typeof t.styledComponentId=="string"}var fs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",$p=typeof window<"u"&&"HTMLElement"in window,G_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),K_={};function li(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Q_=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&li(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Cl=new Map,iu=new Map,po=1,Qa=function(t){if(Cl.has(t))return Cl.get(t);for(;iu.has(po);)po++;var e=po++;return Cl.set(t,e),iu.set(e,t),e},q_=function(t){return iu.get(t)},Y_=function(t,e){e>=po&&(po=e+1),Cl.set(t,e),iu.set(e,t)},X_="style["+fs+'][data-styled-version="5.3.9"]',J_=new RegExp("^"+fs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Z_=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},eT=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(J_);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(Y_(u,l),Z_(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},tT=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},gw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(fs))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(fs,"active"),r.setAttribute("data-styled-version","5.3.9");var o=tT();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},nT=function(){function t(n){var r=this.element=gw(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}li(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),rT=function(){function t(n){var r=this.element=gw(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),iT=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),yy=$p,sT={isServer:!$p,useCSSOMInjection:!G_},su=function(){function t(n,r,i){n===void 0&&(n=Er),r===void 0&&(r={}),this.options=fn({},sT,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&$p&&yy&&(yy=!1,function(s){for(var o=document.querySelectorAll(X_),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(fs)!=="active"&&(eT(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Qa(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(fn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new iT(o):s?new nT(o):new rT(o),new Q_(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Qa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Qa(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Qa(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=q_(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=fs+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(f){f.length>0&&(h+=f+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),oT=/(a)(d)/gi,vy=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=vy(e%52)+n;return(vy(e%52)+n).replace(oT,"$1-$2")}var Vi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yw=function(t){return Vi(5381,t)};function vw(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ds(n)&&!Np(n))return!1}return!0}var aT=yw("5.3.9"),lT=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&vw(e),this.componentId=n,this.baseHash=Vi(aT,n),this.baseStyle=r,su.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ui(this.rules,e,n,r).join(""),a=Kd(Vi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Vi(this.baseHash,r.hash),h="",f=0;f<u;f++){var g=this.rules[f];if(typeof g=="string")h+=g;else if(g){var w=ui(g,e,n,r),m=Array.isArray(w)?w.join(""):w;c=Vi(c,m+f),h+=m}}if(h){var E=Kd(c>>>0);if(!n.hasNameForId(i,E)){var p=r(h,"."+E,void 0,i);n.insertRules(i,E,p)}s.push(E)}}return s.join(" ")},t}(),uT=/^\s*\/\/.*$/gm,cT=[":","[",".","#"];function hT(t){var e,n,r,i,s=t===void 0?Er:t,o=s.options,a=o===void 0?Er:o,l=s.plugins,u=l===void 0?ru:l,c=new N_(a),h=[],f=function(m){function E(p){if(p)try{m(p+"}")}catch{}}return function(p,d,v,S,k,R,I,b,P,M){switch(p){case 1:if(P===0&&d.charCodeAt(0)===64)return m(d+";"),"";break;case 2:if(b===0)return d+"/*|*/";break;case 3:switch(b){case 102:case 112:return m(v[0]+d),"";default:return d+(M===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(E)}}}(function(m){h.push(m)}),g=function(m,E,p){return E===0&&cT.indexOf(p[n.length])!==-1||p.match(i)?m:"."+e};function w(m,E,p,d){d===void 0&&(d="&");var v=m.replace(uT,""),S=E&&p?p+" "+E+" { "+v+" }":v;return e=d,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!E?"":E,S)}return c.use([].concat(u,[function(m,E,p){m===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},f,function(m){if(m===-2){var E=h;return h=[],E}}])),w.hash=u.length?u.reduce(function(m,E){return E.name||li(15),Vi(m,E.name)},5381).toString():"",w}var ww=Or.createContext();ww.Consumer;var Sw=Or.createContext(),dT=(Sw.Consumer,new su),Qd=hT();function Ew(){return C.useContext(ww)||dT}function Aw(){return C.useContext(Sw)||Qd}var kw=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Qd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return li(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Qd),this.name+e.hash},t}(),fT=/([A-Z])/,pT=/([A-Z])/g,mT=/^ms-/,gT=function(t){return"-"+t.toLowerCase()};function wy(t){return fT.test(t)?t.replace(pT,gT).replace(mT,"-ms-"):t}var Sy=function(t){return t==null||t===!1||t===""};function ui(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ui(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Sy(t))return"";if(Np(t))return"."+t.styledComponentId;if(ds(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ui(l,e,n,r)}var u;return t instanceof kw?n?(t.inject(n,r),t.getName(r)):t:Gd(t)?function c(h,f){var g,w,m=[];for(var E in h)h.hasOwnProperty(E)&&!Sy(h[E])&&(Array.isArray(h[E])&&h[E].isCss||ds(h[E])?m.push(wy(E)+":",h[E],";"):Gd(h[E])?m.push.apply(m,c(h[E],E)):m.push(wy(E)+": "+(g=E,(w=h[E])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||g in $_?String(w).trim():w+"px")+";"));return f?[f+" {"].concat(m,["}"]):m}(t):t.toString()}var Ey=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Mp(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ds(t)||Gd(t)?Ey(ui(my(ru,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Ey(ui(my(t,n)))}var Cw=function(t,e,n){return n===void 0&&(n=Er),t.theme!==n.theme&&t.theme||e||n.theme},yT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vT=/(^-|-$)/g;function vh(t){return t.replace(yT,"-").replace(vT,"")}var Lp=function(t){return Kd(yw(t)>>>0)};function qa(t){return typeof t=="string"&&!0}var qd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},wT=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function ST(t,e,n){var r=t[n];qd(e)&&qd(r)?_w(r,e):t[n]=e}function _w(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(qd(o))for(var a in o)wT(a)&&ST(t,o[a],a)}return t}var jo=Or.createContext();jo.Consumer;function ET(t){var e=C.useContext(jo),n=C.useMemo(function(){return function(r,i){if(!r)return li(14);if(ds(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?li(8):i?fn({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?Or.createElement(jo.Provider,{value:n},t.children):null}var wh={};function Tw(t,e,n){var r=Np(t),i=!qa(t),s=e.attrs,o=s===void 0?ru:s,a=e.componentId,l=a===void 0?function(d,v){var S=typeof d!="string"?"sc":vh(d);wh[S]=(wh[S]||0)+1;var k=S+"-"+Lp("5.3.9"+S+wh[S]);return v?v+"-"+k:k}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(d){return qa(d)?"styled."+d:"Styled("+gy(d)+")"}(t):u,h=e.displayName&&e.componentId?vh(e.displayName)+"-"+e.componentId:e.componentId||l,f=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(d,v,S){return t.shouldForwardProp(d,v,S)&&e.shouldForwardProp(d,v,S)}:t.shouldForwardProp);var w,m=new lT(n,h,r?t.componentStyle:void 0),E=m.isStatic&&o.length===0,p=function(d,v){return function(S,k,R,I){var b=S.attrs,P=S.componentStyle,M=S.defaultProps,ne=S.foldedComponentIds,X=S.shouldForwardProp,q=S.styledComponentId,Ce=S.target,_e=function(le,A,fe){le===void 0&&(le=Er);var F=fn({},A,{theme:le}),Re={};return fe.forEach(function(x){var N,j,Z,J=x;for(N in ds(J)&&(J=J(F)),J)F[N]=Re[N]=N==="className"?(j=Re[N],Z=J[N],j&&Z?j+" "+Z:j||Z):J[N]}),[F,Re]}(Cw(k,C.useContext(jo),M)||Er,k,b),Xe=_e[0],Je=_e[1],L=function(le,A,fe,F){var Re=Ew(),x=Aw(),N=A?le.generateAndInjectStyles(Er,Re,x):le.generateAndInjectStyles(fe,Re,x);return N}(P,I,Xe),re=R,ae=Je.$as||k.$as||Je.as||k.as||Ce,Ee=qa(ae),U=Je!==k?fn({},k,{},Je):k,V={};for(var B in U)B[0]!=="$"&&B!=="as"&&(B==="forwardedAs"?V.as=U[B]:(X?X(B,hy,ae):!Ee||hy(B))&&(V[B]=U[B]));return k.style&&Je.style!==k.style&&(V.style=fn({},k.style,{},Je.style)),V.className=Array.prototype.concat(ne,q,L!==q?L:null,k.className,Je.className).filter(Boolean).join(" "),V.ref=re,C.createElement(ae,V)}(w,d,v,E)};return p.displayName=c,(w=Or.forwardRef(p)).attrs=f,w.componentStyle=m,w.displayName=c,w.shouldForwardProp=g,w.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):ru,w.styledComponentId=h,w.target=r?t.target:t,w.withComponent=function(d){var v=e.componentId,S=function(R,I){if(R==null)return{};var b,P,M={},ne=Object.keys(R);for(P=0;P<ne.length;P++)b=ne[P],I.indexOf(b)>=0||(M[b]=R[b]);return M}(e,["componentId"]),k=v&&v+"-"+(qa(d)?d:vh(gy(d)));return Tw(d,fn({},S,{attrs:f,componentId:k}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?_w({},t.defaultProps,d):d}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&W_(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Yd=function(t){return function e(n,r,i){if(i===void 0&&(i=Er),!Uo.isValidElementType(r))return li(1,String(r));var s=function(){return n(r,i,Mp.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,fn({},i,{},o))},s.attrs=function(o){return e(n,r,fn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Tw,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Yd[t]=Yd(t)});var AT=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=vw(n),su.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(ui(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&su.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function kT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Mp.apply(void 0,[t].concat(n)),s="sc-global-"+Lp(JSON.stringify(i)),o=new AT(i,s);function a(u){var c=Ew(),h=Aw(),f=C.useContext(jo),g=C.useRef(c.allocateGSInstance(s)).current;return c.server&&l(g,u,c,f,h),C.useLayoutEffect(function(){if(!c.server)return l(g,u,c,f,h),function(){return o.removeStyles(g,c)}},[g,u,c,f,h]),null}function l(u,c,h,f,g){if(o.isStatic)o.renderStyles(u,K_,h,g);else{var w=fn({},c,{theme:Cw(c,f,a.defaultProps)});o.renderStyles(u,w,h,g)}}return Or.memo(a)}function CT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Mp.apply(void 0,[t].concat(n)).join(""),s=Lp(i);return new kw(s,i)}const T=Yd,Ay={tablet:"780px",desktop:"1024px"},z={tablet:`(min-width: ${Ay.tablet})`,desktop:`(min-width: ${Ay.desktop})`},ps={tablet:{minWidth:780},desktop:{minWidth:1024}},_T=kT`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    font-size: 7px;
      @media ${z.tablet} {
    font-size: 10px;
  }
}
body{
    font-family: "Titillium Web", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1;
    background-color: rgb(0,6,68);
    color: rgb(255,255,255)
}

ol, ul {
    list-style: none outside none;
}
`;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zo.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const ky="popstate";function TT(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Si(i.location.hash.substr(1));return Xd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:xw(s))}function r(i,s){lc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return IT(e,n,r,t)}function ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xT(){return Math.random().toString(36).substr(2,8)}function Cy(t,e){return{usr:t.state,key:t.key,idx:e}}function Xd(t,e,n,r){return n===void 0&&(n=null),zo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Si(e):e,{state:n,key:e&&e.key||r||xT()})}function xw(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Si(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=hr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(zo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=hr.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:m.location,delta:p})}function f(E,p){a=hr.Push;let d=Xd(m.location,E,p);n&&n(d,E),u=c()+1;let v=Cy(d,u),S=m.createHref(d);try{o.pushState(v,"",S)}catch{i.location.assign(S)}s&&l&&l({action:a,location:m.location,delta:1})}function g(E,p){a=hr.Replace;let d=Xd(m.location,E,p);n&&n(d,E),u=c();let v=Cy(d,u),S=m.createHref(d);o.replaceState(v,"",S),s&&l&&l({action:a,location:m.location,delta:0})}function w(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:xw(E);return ot(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let m={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ky,h),l=E,()=>{i.removeEventListener(ky,h),l=null}},createHref(E){return e(i,E)},createURL:w,encodeLocation(E){let p=w(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(E){return o.go(E)}};return m}var _y;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_y||(_y={}));function RT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Si(e):e,i=Pw(r.pathname||"/",n);if(i==null)return null;let s=Iw(t);PT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UT(s[a],BT(i));return o}function Iw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ot(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ei([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Iw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:LT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Rw(s.path))i(s,o,l)}),e}function Rw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Rw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bT=/^:\w+$/,DT=3,OT=2,NT=1,$T=10,MT=-2,Ty=t=>t==="*";function LT(t,e){let n=t.split("/"),r=n.length;return n.some(Ty)&&(r+=MT),e&&(r+=OT),n.filter(i=>!Ty(i)).reduce((i,s)=>i+(bT.test(s)?DT:s===""?NT:$T),r)}function FT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=jT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ei([i,c.pathname]),pathnameBase:QT(ei([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ei([i,c.pathnameBase]))}return s}function jT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=VT(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BT(t){try{return decodeURI(t)}catch(e){return lc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function VT(t,e){try{return decodeURIComponent(t)}catch(n){return lc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Pw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Si(t):t;return{pathname:n?n.startsWith("/")?n:WT(n,e):e,search:qT(r),hash:YT(i)}}function WT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function KT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Si(t):(i=zo({},t),ot(!i.pathname||!i.pathname.includes("?"),Sh("?","pathname","search",i)),ot(!i.pathname||!i.pathname.includes("#"),Sh("#","pathname","hash",i)),ot(!i.search||!i.search.includes("#"),Sh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=HT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ei=t=>t.join("/").replace(/\/\/+/g,"/"),QT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function JT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const ZT=typeof Object.is=="function"?Object.is:JT,{useState:ex,useEffect:tx,useLayoutEffect:nx,useDebugValue:rx}=Yh;function ix(t,e,n){const r=e(),[{inst:i},s]=ex({inst:{value:r,getSnapshot:e}});return nx(()=>{i.value=r,i.getSnapshot=e,Eh(i)&&s({inst:i})},[t,r,e]),tx(()=>(Eh(i)&&s({inst:i}),t(()=>{Eh(i)&&s({inst:i})})),[t]),rx(r),r}function Eh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!ZT(n,r)}catch{return!0}}function sx(t,e,n){return e()}const ox=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ax=!ox,lx=ax?sx:ix;"useSyncExternalStore"in Yh&&(t=>t.useSyncExternalStore)(Yh);const bw=C.createContext(null),Dw=C.createContext(null),Fp=C.createContext(null),uc=C.createContext(null),xs=C.createContext({outlet:null,matches:[]}),Ow=C.createContext(null);function Jd(){return Jd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jd.apply(this,arguments)}function cc(){return C.useContext(uc)!=null}function Up(){return cc()||ot(!1),C.useContext(uc).location}function Ei(){cc()||ot(!1);let{basename:t,navigator:e}=C.useContext(Fp),{matches:n}=C.useContext(xs),{pathname:r}=Up(),i=JSON.stringify(GT(n).map(a=>a.pathnameBase)),s=C.useRef(!1);return C.useEffect(()=>{s.current=!0}),C.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=KT(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ei([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function ux(){let{matches:t}=C.useContext(xs),e=t[t.length-1];return e?e.params:{}}function cx(t,e){cc()||ot(!1);let{navigator:n}=C.useContext(Fp),r=C.useContext(Dw),{matches:i}=C.useContext(xs),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Up(),u;if(e){var c;let m=typeof e=="string"?Si(e):e;a==="/"||(c=m.pathname)!=null&&c.startsWith(a)||ot(!1),u=m}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",g=RT(t,{pathname:f}),w=px(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:ei([a,n.encodeLocation?n.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?a:ei([a,n.encodeLocation?n.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,r||void 0);return e&&w?C.createElement(uc.Provider,{value:{location:Jd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:hr.Pop}},w):w}function hx(){let t=vx(),e=XT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}class dx extends C.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(xs.Provider,{value:this.props.routeContext},C.createElement(Ow.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fx(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(bw);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(xs.Provider,{value:e},r)}function px(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ot(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=C.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=C.createElement(hx,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let f=s;return l?f=u:o.route.Component?f=C.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),C.createElement(fx,{match:o,routeContext:{outlet:s,matches:c},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?C.createElement(dx,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var xy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(xy||(xy={}));var ou;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ou||(ou={}));function mx(t){let e=C.useContext(Dw);return e||ot(!1),e}function gx(t){let e=C.useContext(xs);return e||ot(!1),e}function yx(t){let e=gx(),n=e.matches[e.matches.length-1];return n.route.id||ot(!1),n.route.id}function vx(){var t;let e=C.useContext(Ow),n=mx(ou.UseRouteError),r=yx(ou.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Ii(t){ot(!1)}function wx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:s,static:o=!1}=t;cc()&&ot(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Si(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:g="default"}=r,w=C.useMemo(()=>{let m=Pw(u,a);return m==null?null:{location:{pathname:m,search:c,hash:h,state:f,key:g},navigationType:i}},[a,u,c,h,f,g,i]);return w==null?null:C.createElement(Fp.Provider,{value:l},C.createElement(uc.Provider,{children:n,value:w}))}function Sx(t){let{children:e,location:n}=t,r=C.useContext(bw),i=r&&!e?r.router.routes:Zd(e);return cx(i,n)}var Iy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Iy||(Iy={}));new Promise(()=>{});function Zd(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,Zd(r.props.children,s));return}r.type!==Ii&&ot(!1),!r.props.index||!r.props.children||ot(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ex(t){let{basename:e,children:n,window:r}=t,i=C.useRef();i.current==null&&(i.current=TT({window:r,v5Compat:!0}));let s=i.current,[o,a]=C.useState({action:s.action,location:s.location});return C.useLayoutEffect(()=>s.listen(a),[s]),C.createElement(wx,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Ry;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Ry||(Ry={}));var Py;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Py||(Py={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ax=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ax(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new kx;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cx=function(t){const e=Nw(t);return $w.encodeByteArray(e,!0)},au=function(t){return Cx(t).replace(/\./g,"")},Mw=function(t){try{return $w.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=()=>_x().__FIREBASE_DEFAULTS__,xx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ix=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mw(t[1]);return e&&JSON.parse(e)},jp=()=>{try{return Tx()||xx()||Ix()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lw=t=>{var e,n;return(n=(e=jp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rx=t=>{const e=Lw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Px=()=>{var t;return(t=jp())===null||t===void 0?void 0:t.config},Fw=t=>{var e;return(e=jp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[au(JSON.stringify(n)),au(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ox(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Nx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $x(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mx(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lx(){try{return typeof indexedDB=="object"}catch{return!1}}function Fx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ux,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,r)}}function jx(t,e){return t.replace(zx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zx=/\{\$([^}]+)}/g;function Bx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(by(s)&&by(o)){if(!lu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function by(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Vx(t,e){const n=new Hx(t,e);return n.subscribe.bind(n)}class Hx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ah),i.error===void 0&&(i.error=Ah),i.complete===void 0&&(i.complete=Ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ah(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t&&t._delegate?t._delegate:t}class ci{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qx(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kx(t){return t===Hr?void 0:t}function Qx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const Yx={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},Xx=Ae.INFO,Jx={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},Zx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Jx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zp{constructor(e){this.name=e,this._logLevel=Xx,this._logHandler=Zx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const eI=(t,e)=>e.some(n=>t instanceof n);let Dy,Oy;function tI(){return Dy||(Dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nI(){return Oy||(Oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uw=new WeakMap,ef=new WeakMap,jw=new WeakMap,kh=new WeakMap,Bp=new WeakMap;function rI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uw.set(n,t)}).catch(()=>{}),Bp.set(e,t),e}function iI(t){if(ef.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ef.set(t,e)}let tf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ef.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sI(t){tf=t(tf)}function oI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ch(this),e,...n);return jw.set(r,e.sort?e.sort():[e]),Ar(r)}:nI().includes(t)?function(...e){return t.apply(Ch(this),e),Ar(Uw.get(this))}:function(...e){return Ar(t.apply(Ch(this),e))}}function aI(t){return typeof t=="function"?oI(t):(t instanceof IDBTransaction&&iI(t),eI(t,tI())?new Proxy(t,tf):t)}function Ar(t){if(t instanceof IDBRequest)return rI(t);if(kh.has(t))return kh.get(t);const e=aI(t);return e!==t&&(kh.set(t,e),Bp.set(e,t)),e}const Ch=t=>Bp.get(t);function lI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ar(o.result),l.oldVersion,l.newVersion,Ar(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const uI=["get","getKey","getAll","getAllKeys","count"],cI=["put","add","delete","clear"],_h=new Map;function Ny(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_h.get(e))return _h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _h.set(e,s),s}sI(t=>({...t,get:(e,n,r)=>Ny(e,n)||t.get(e,n,r),has:(e,n)=>!!Ny(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nf="@firebase/app",$y="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new zp("@firebase/app"),fI="@firebase/app-compat",pI="@firebase/analytics-compat",mI="@firebase/analytics",gI="@firebase/app-check-compat",yI="@firebase/app-check",vI="@firebase/auth",wI="@firebase/auth-compat",SI="@firebase/database",EI="@firebase/database-compat",AI="@firebase/functions",kI="@firebase/functions-compat",CI="@firebase/installations",_I="@firebase/installations-compat",TI="@firebase/messaging",xI="@firebase/messaging-compat",II="@firebase/performance",RI="@firebase/performance-compat",PI="@firebase/remote-config",bI="@firebase/remote-config-compat",DI="@firebase/storage",OI="@firebase/storage-compat",NI="@firebase/firestore",$I="@firebase/firestore-compat",MI="firebase",LI="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="[DEFAULT]",FI={[nf]:"fire-core",[fI]:"fire-core-compat",[mI]:"fire-analytics",[pI]:"fire-analytics-compat",[yI]:"fire-app-check",[gI]:"fire-app-check-compat",[vI]:"fire-auth",[wI]:"fire-auth-compat",[SI]:"fire-rtdb",[EI]:"fire-rtdb-compat",[AI]:"fire-fn",[kI]:"fire-fn-compat",[CI]:"fire-iid",[_I]:"fire-iid-compat",[TI]:"fire-fcm",[xI]:"fire-fcm-compat",[II]:"fire-perf",[RI]:"fire-perf-compat",[PI]:"fire-rc",[bI]:"fire-rc-compat",[DI]:"fire-gcs",[OI]:"fire-gcs-compat",[NI]:"fire-fst",[$I]:"fire-fst-compat","fire-js":"fire-js",[MI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new Map,sf=new Map;function UI(t,e){try{t.container.addComponent(e)}catch(n){hi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(sf.has(e))return hi.debug(`There were multiple attempts to register component ${e}.`),!1;sf.set(e,t);for(const n of uu.values())UI(n,t);return!0}function Vp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kr=new ua("app","Firebase",jI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=LI;function zw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=Px()),!n)throw kr.create("no-options");const s=uu.get(i);if(s){if(lu(n,s.options)&&lu(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new qx(i);for(const l of sf.values())o.addComponent(l);const a=new zI(n,r,o);return uu.set(i,a),a}function Bw(t=rf){const e=uu.get(t);if(!e&&t===rf)return zw();if(!e)throw kr.create("no-app",{appName:t});return e}function Cr(t,e,n){var r;let i=(r=FI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hi.warn(a.join(" "));return}ms(new ci(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="firebase-heartbeat-database",VI=1,Bo="firebase-heartbeat-store";let Th=null;function Vw(){return Th||(Th=lI(BI,VI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bo)}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Th}async function HI(t){try{return(await Vw()).transaction(Bo).objectStore(Bo).get(Hw(t))}catch(e){if(e instanceof bn)hi.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hi.warn(n.message)}}}async function My(t,e){try{const r=(await Vw()).transaction(Bo,"readwrite");return await r.objectStore(Bo).put(e,Hw(t)),r.done}catch(n){if(n instanceof bn)hi.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hi.warn(r.message)}}}function Hw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=1024,GI=30*24*60*60*1e3;class KI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ly();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=GI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ly(),{heartbeatsToSend:n,unsentEntries:r}=QI(this._heartbeatsCache.heartbeats),i=au(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ly(){return new Date().toISOString().substring(0,10)}function QI(t,e=WI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lx()?Fx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return My(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return My(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fy(t){return au(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){ms(new ci("platform-logger",e=>new hI(e),"PRIVATE")),ms(new ci("heartbeat",e=>new KI(e),"PRIVATE")),Cr(nf,$y,t),Cr(nf,$y,"esm2017"),Cr("fire-js","")}YI("");var XI="firebase",JI="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cr(XI,JI,"app");function Hp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ww(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZI=Ww,Gw=new ua("auth","Firebase",Ww());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new zp("@firebase/auth");function e2(t,...e){cu.logLevel<=Ae.WARN&&cu.warn(`Auth (${Is}): ${t}`,...e)}function _l(t,...e){cu.logLevel<=Ae.ERROR&&cu.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Wp(t,...e)}function Tn(t,...e){return Wp(t,...e)}function Kw(t,e,n){const r=Object.assign(Object.assign({},ZI()),{[e]:n});return new ua("auth","Firebase",r).create(e,{appName:t.name})}function t2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ln(t,"argument-error"),Kw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gw.create(t,...e)}function ce(t,e,...n){if(!t)throw Wp(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _l(e),new Error(e)}function Kn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function n2(){return Uy()==="http:"||Uy()==="https:"}function Uy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n2()||Nx()||"connection"in navigator)?navigator.onLine:!0}function i2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ox()||$x()}get(){return r2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=new ha(3e4,6e4);function Rs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ps(t,e,n,r,i={}){return qw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ca(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qw.fetch()(Yw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function qw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},s2),e);try{const i=new a2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ya(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kw(t,c,u);ln(t,c)}}catch(i){if(i instanceof bn)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function da(t,e,n,r,i={}){const s=await Ps(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Yw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gp(t.config,i):`${t.config.apiScheme}://${i}`}class a2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),o2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function u2(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c2(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=Kp(r);ce(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(xh(i.auth_time)),issuedAtTime:mo(xh(i.iat)),expirationTime:mo(xh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xh(t){return Number(t)*1e3}function Kp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _l("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mw(n);return i?JSON.parse(i):(_l("Failed to decode base64 JWT payload"),null)}catch(i){return _l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h2(t){const e=Kp(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&d2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function d2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vo(t,u2(n,{idToken:r}));ce(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?g2(s.providerUserInfo):[],a=m2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function p2(t){const e=gt(t);await hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function m2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function g2(t){return t.map(e=>{var{providerId:n}=e,r=Hp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y2(t,e){const n=await qw(t,{},async()=>{const r=ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Yw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ce(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await y2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ho;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ti{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new f2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c2(this,e)}reload(){return p2(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vo(this,l2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:S,isAnonymous:k,providerData:R,stsTokenManager:I}=n;ce(v&&I,e,"internal-error");const b=Ho.fromJSON(this.name,I);ce(typeof v=="string",e,"internal-error"),tr(h,e.name),tr(f,e.name),ce(typeof S=="boolean",e,"internal-error"),ce(typeof k=="boolean",e,"internal-error"),tr(g,e.name),tr(w,e.name),tr(m,e.name),tr(E,e.name),tr(p,e.name),tr(d,e.name);const P=new ti({uid:v,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:k,photoURL:w,phoneNumber:g,tenantId:m,stsTokenManager:b,createdAt:p,lastLoginAt:d});return R&&Array.isArray(R)&&(P.providerData=R.map(M=>Object.assign({},M))),E&&(P._redirectEventId=E),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ho;i.updateFromServerResponse(n);const s=new ti({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new Map;function Un(t){Kn(t instanceof Function,"Expected a class definition");let e=jy.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jw.type="NONE";const zy=Jw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(Un(zy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Un(zy);const o=Tl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ti._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rS(e))return"Blackberry";if(iS(e))return"Webos";if(Qp(e))return"Safari";if((e.includes("chrome/")||eS(e))&&!e.includes("edge/"))return"Chrome";if(nS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zw(t=It()){return/firefox\//i.test(t)}function Qp(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eS(t=It()){return/crios\//i.test(t)}function tS(t=It()){return/iemobile/i.test(t)}function nS(t=It()){return/android/i.test(t)}function rS(t=It()){return/blackberry/i.test(t)}function iS(t=It()){return/webos/i.test(t)}function hc(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function v2(t=It()){var e;return hc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function w2(){return Mx()&&document.documentMode===10}function sS(t=It()){return hc(t)||nS(t)||iS(t)||rS(t)||/windows phone/i.test(t)||tS(t)}function S2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t,e=[]){let n;switch(t){case"Browser":n=By(It());break;case"Worker":n=`${By(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}async function aS(t,e){return Ps(t,"GET","/v2/recaptchaConfig",Rs(t,e))}function Vy(t){return t!==void 0&&t.enterprise!==void 0}class lS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",E2().appendChild(r)})}function A2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const k2="https://www.google.com/recaptcha/enterprise.js?render=",C2="recaptcha-enterprise",_2="NO_RECAPTCHA";class cS{constructor(e){this.type=C2,this.auth=Ai(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{aS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new lS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Vy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(_2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Vy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}uS(k2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function du(t,e,n,r=!1){const i=new cS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hy(this),this.idTokenSubscription=new Hy(this),this.beforeStateQueue=new T2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}async initializeRecaptchaConfig(){const e=await aS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new lS(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new cS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ua("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ce(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&e2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ai(t){return gt(t)}class Hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vx(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t,e){const n=Vp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lu(s,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function R2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function P2(t,e,n){const r=Ai(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=hS(e),{host:o,port:a}=b2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||D2()}function hS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function b2(t){const e=hS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wy(o)}}}function Wy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function D2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function O2(t,e){return Ps(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(t,e){return da(t,"POST","/v1/accounts:signInWithPassword",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}async function $2(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends qp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await du(e,r,"signInWithPassword");return Ih(e,i)}else return Ih(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await du(e,r,"signInWithPassword");return Ih(e,s)}else return Promise.reject(i)});case"emailLink":return N2(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return O2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $2(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e){return da(t,"POST","/v1/accounts:signInWithIdp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="http://localhost";class di extends qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ji(e,n)}buildRequest(){const e={requestUri:M2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F2(t){const e=Js(Zs(t)).link,n=e?Js(Zs(e)).deep_link_id:null,r=Js(Zs(t)).deep_link_id;return(r?Js(Zs(r)).link:null)||r||n||e||t}class Yp{constructor(e){var n,r,i,s,o,a;const l=Js(Zs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=L2((i=l.mode)!==null&&i!==void 0?i:null);ce(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=F2(e);try{return new Yp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yp.parseLink(n);return ce(r,"argument-error"),Wo._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends Xp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends fa{constructor(){super("facebook.com")}static credential(e){return di._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return di._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends fa{constructor(){super("github.com")}static credential(e){return di._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends fa{constructor(){super("twitter.com")}static credential(e,n){return di._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(t,e){return da(t,"POST","/v1/accounts:signUp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ti._fromIdTokenResponse(e,r,i),o=Gy(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gy(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fu(e,n,r,i)}}function dS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fu._fromErrorAndOperation(t,s,e,r):s})}async function U2(t,e,n=!1){const r=await Vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Vo(t,dS(r,i,e,t),n);ce(s.idToken,r,"internal-error");const o=Kp(s.idToken);ce(o,r,"internal-error");const{sub:a}=o;return ce(t.uid===a,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(t,e,n=!1){const r="signIn",i=await dS(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function z2(t,e){return fS(Ai(t),e)}async function B2(t,e,n){var r;const i=Ai(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await du(i,s,"signUpPassword");o=Rh(i,u)}else o=Rh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await du(i,s,"signUpPassword");return Rh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await fi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function V2(t,e,n){return z2(gt(t),bs.credential(e,n))}function H2(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function W2(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function G2(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function K2(t){return gt(t).signOut()}const pu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pu,"1"),this.storage.removeItem(pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(){const t=It();return Qp(t)||hc(t)}const q2=1e3,Y2=10;class mS extends pS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Q2()&&S2(),this.fallbackToPolling=sS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);w2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Y2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mS.type="LOCAL";const X2=mS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends pS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gS.type="SESSION";const yS=gS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await J2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Jp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function eR(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function tR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rR(){return vS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="firebaseLocalStorageDb",iR=1,mu="firebaseLocalStorage",SS="fbase_key";class pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([mu],e?"readwrite":"readonly").objectStore(mu)}function sR(){const t=indexedDB.deleteDatabase(wS);return new pa(t).toPromise()}function af(){const t=indexedDB.open(wS,iR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mu,{keyPath:SS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mu)?e(r):(r.close(),await sR(),e(await af()))})})}async function Ky(t,e,n){const r=fc(t,!0).put({[SS]:e,value:n});return new pa(r).toPromise()}async function oR(t,e){const n=fc(t,!1).get(e),r=await new pa(n).toPromise();return r===void 0?null:r.value}function Qy(t,e){const n=fc(t,!0).delete(e);return new pa(n).toPromise()}const aR=800,lR=3;class ES{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(rR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tR(),!this.activeServiceWorker)return;this.sender=new Z2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await af();return await Ky(e,pu,"1"),await Qy(e,pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ky(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fc(i,!1).getAll();return new pa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ES.type="LOCAL";const uR=ES;new ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e){return e?Un(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp extends qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cR(t){return fS(t.auth,new Zp(t),t.bypassAuthState)}function hR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),j2(n,new Zp(t),t.bypassAuthState)}async function dR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),U2(n,new Zp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cR;case"linkViaPopup":case"linkViaRedirect":return dR;case"reauthViaPopup":case"reauthViaRedirect":return hR;default:ln(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new ha(2e3,1e4);async function pR(t,e,n){const r=Ai(t);t2(t,e,Xp);const i=AS(r,n);return new Qr(r,"signInViaPopup",e,i).executeNotNull()}class Qr extends kS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fR.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="pendingRedirect",xl=new Map;class gR extends kS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xl.get(this.auth._key());if(!e){try{const r=await yR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xl.set(this.auth._key(),e)}return this.bypassAuthState||xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yR(t,e){const n=SR(e),r=wR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vR(t,e){xl.set(t._key(),e)}function wR(t){return Un(t._redirectPersistence)}function SR(t){return Tl(mR,t.config.apiKey,t.name)}async function ER(t,e,n=!1){const r=Ai(t),i=AS(r,e),o=await new gR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=10*60*1e3;class kR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!CS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AR&&this.cachedEventUids.clear(),this.cachedEventUids.has(qy(e))}saveEventToCache(e){this.cachedEventUids.add(qy(e)),this.lastProcessedEventTime=Date.now()}}function qy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xR=/^https?/;async function IR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _R(t);for(const n of e)try{if(RR(n))return}catch{}ln(t,"unauthorized-domain")}function RR(t){const e=of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xR.test(n))return!1;if(TR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=new ha(3e4,6e4);function Yy(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bR(t){return new Promise((e,n)=>{var r,i,s;function o(){Yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yy(),n(Tn(t,"network-request-failed"))},timeout:PR.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const a=A2("iframefcb");return xn()[a]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},uS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Il=null,e})}let Il=null;function DR(t){return Il=Il||bR(t),Il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new ha(5e3,15e3),NR="__/auth/iframe",$R="emulator/auth/iframe",MR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FR(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gp(e,$R):`https://${t.config.authDomain}/${NR}`,r={apiKey:e.apiKey,appName:t.name,v:Is},i=LR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ca(r).slice(1)}`}async function UR(t){const e=await DR(t),n=xn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:FR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),a=xn().setTimeout(()=>{s(o)},OR.get());function l(){xn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zR=500,BR=600,VR="_blank",HR="http://localhost";class Xy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WR(t,e,n,r=zR,i=BR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=It().toLowerCase();n&&(a=eS(u)?VR:n),Zw(u)&&(e=e||HR,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,w])=>`${f}${g}=${w},`,"");if(v2(u)&&a!=="_self")return GR(e||"",a),new Xy(null);const h=window.open(e||"",a,c);ce(h,t,"popup-blocked");try{h.focus()}catch{}return new Xy(h)}function GR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="__/auth/handler",QR="emulator/auth/handler",qR=encodeURIComponent("fac");async function Jy(t,e,n,r,i,s){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:i};if(e instanceof Xp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof fa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${qR}=${encodeURIComponent(l)}`:"";return`${YR(t)}?${ca(a).slice(1)}${u}`}function YR({config:t}){return t.emulator?Gp(t,QR):`https://${t.authDomain}/${KR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="webStorageSupport";class XR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yS,this._completeRedirectFn=ER,this._overrideRedirectResult=vR}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jy(e,n,r,of(),i);return WR(e,o,Jp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jy(e,n,r,of(),i);return eR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UR(e),r=new kR(e);return n.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ph,{type:Ph},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ph];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sS()||Qp()||hc()}}const JR=XR;var Zy="@firebase/auth",ev="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tP(t){ms(new ci("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),ce(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oS(t)},u=new x2(r,i,s,l);return R2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new ci("auth-internal",e=>{const n=Ai(e.getProvider("auth").getImmediate());return(r=>new ZR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cr(Zy,ev,eP(t)),Cr(Zy,ev,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=5*60,rP=Fw("authIdTokenMaxAge")||nP;let tv=null;const iP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rP)return;const i=n==null?void 0:n.token;tv!==i&&(tv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sP(t=Bw()){const e=Vp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=I2(t,{popupRedirectResolver:JR,persistence:[uR,X2,yS]}),r=Fw("authTokenSyncURL");if(r){const s=iP(r);W2(n,s,()=>s(n.currentUser)),H2(n,o=>s(o))}const i=Lw("auth");return i&&P2(n,`http://${i}`),n}tP("Browser");var oP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,em=em||{},de=oP||self;function gu(){}function pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aP(t){return Object.prototype.hasOwnProperty.call(t,bh)&&t[bh]||(t[bh]=++lP)}var bh="closure_uid_"+(1e9*Math.random()>>>0),lP=0;function uP(t,e,n){return t.call.apply(t.bind,arguments)}function cP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=uP:Ct=cP,Ct.apply(null,arguments)}function Xa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Lr(){this.s=this.s,this.o=this.o}var hP=0;Lr.prototype.s=!1;Lr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),hP!=0)&&aP(this)};Lr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function nv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(pc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var dP=function(){if(!de.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{de.addEventListener("test",gu,e),de.removeEventListener("test",gu,e)}catch{}return t}();function yu(t){return/^[\s\xa0]*$/.test(t)}var rv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Dh(t,e){return t<e?-1:t>e?1:0}function mc(){var t=de.navigator;return t&&(t=t.userAgent)?t:""}function An(t){return mc().indexOf(t)!=-1}function nm(t){return nm[" "](t),t}nm[" "]=gu;function TS(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var fP=An("Opera"),gs=An("Trident")||An("MSIE"),xS=An("Edge"),lf=xS||gs,IS=An("Gecko")&&!(mc().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),pP=mc().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function RS(){var t=de.document;return t?t.documentMode:void 0}var vu;e:{var Oh="",Nh=function(){var t=mc();if(IS)return/rv:([^\);]+)(\)|;)/.exec(t);if(xS)return/Edge\/([\d\.]+)/.exec(t);if(gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(pP)return/WebKit\/(\S+)/.exec(t);if(fP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nh&&(Oh=Nh?Nh[1]:""),gs){var $h=RS();if($h!=null&&$h>parseFloat(Oh)){vu=String($h);break e}}vu=Oh}var mP={};function gP(){return TS(mP,9,function(){let t=0;const e=rv(String(vu)).split("."),n=rv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Dh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Dh(i[2].length==0,s[2].length==0)||Dh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var uf;if(de.document&&gs){var iv=RS();uf=iv||parseInt(vu,10)||void 0}else uf=void 0;var yP=uf;function Go(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(IS){e:{try{nm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Go.$.h.call(this)}}ut(Go,_t);var vP={2:"touch",3:"pen",4:"mouse"};Go.prototype.h=function(){Go.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ga="closure_listenable_"+(1e6*Math.random()|0),wP=0;function SP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++wP,this.fa=this.ia=!1}function gc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function rm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PS(t){const e={};for(const n in t)e[n]=t[n];return e}const sv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<sv.length;s++)n=sv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function yc(t){this.src=t,this.g={},this.h=0}yc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new SP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function cf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=_S(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(gc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var im="closure_lm_"+(1e6*Math.random()|0),Mh={};function DS(t,e,n,r,i){if(r&&r.once)return NS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)DS(t,e[s],n,r,i);return null}return n=am(n),t&&t[ga]?t.O(e,n,ma(r)?!!r.capture:!!r,i):OS(t,e,n,!1,r,i)}function OS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ma(i)?!!i.capture:!!i,a=om(t);if(a||(t[im]=a=new yc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=EP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(MS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function EP(){function t(n){return e.call(t.src,t.listener,n)}const e=AP;return t}function NS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)NS(t,e[s],n,r,i);return null}return n=am(n),t&&t[ga]?t.P(e,n,ma(r)?!!r.capture:!!r,i):OS(t,e,n,!0,r,i)}function $S(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$S(t,e[s],n,r,i);else r=ma(r)?!!r.capture:!!r,n=am(n),t&&t[ga]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hf(s,n,r,i),-1<n&&(gc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=om(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hf(e,n,r,i)),(n=-1<t?e[t]:null)&&sm(n))}function sm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ga])cf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(MS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=om(e))?(cf(n,t),n.h==0&&(n.src=null,e[im]=null)):gc(t)}}}function MS(t){return t in Mh?Mh[t]:Mh[t]="on"+t}function AP(t,e){if(t.fa)t=!0;else{e=new Go(e,this);var n=t.listener,r=t.la||t.src;t.ia&&sm(t),t=n.call(r,e)}return t}function om(t){return t=t[im],t instanceof yc?t:null}var Lh="__closure_events_fn_"+(1e9*Math.random()>>>0);function am(t){return typeof t=="function"?t:(t[Lh]||(t[Lh]=function(e){return t.handleEvent(e)}),t[Lh])}function at(){Lr.call(this),this.i=new yc(this),this.S=this,this.J=null}ut(at,Lr);at.prototype[ga]=!0;at.prototype.removeEventListener=function(t,e,n,r){$S(this,t,e,n,r)};function pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(r,t),bS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ja(o,r,!0,e)&&i}if(o=e.g=t,i=Ja(o,r,!0,e)&&i,i=Ja(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ja(o,r,!1,e)&&i}at.prototype.N=function(){if(at.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)gc(n[r]);delete t.g[e],t.h--}}this.J=null};at.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};at.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ja(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&cf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var lm=de.JSON.stringify;function kP(){var t=US;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CP{constructor(){this.h=this.g=null}add(e,n){const r=LS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var LS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new _P,t=>t.reset());class _P{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TP(t){de.setTimeout(()=>{throw t},0)}function FS(t,e){df||xP(),ff||(df(),ff=!0),US.add(t,e)}var df;function xP(){var t=de.Promise.resolve(void 0);df=function(){t.then(IP)}}var ff=!1,US=new CP;function IP(){for(var t;t=kP();){try{t.h.call(t.g)}catch(n){TP(n)}var e=LS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ff=!1}function vc(t,e){at.call(this),this.h=t||1,this.g=e||de,this.j=Ct(this.qb,this),this.l=Date.now()}ut(vc,at);H=vc.prototype;H.ga=!1;H.T=null;H.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(um(this),this.start()))}};H.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function um(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}H.N=function(){vc.$.N.call(this),um(this),delete this.g};function cm(t,e,n){if(typeof t=="function")n&&(t=Ct(t,n));else if(t&&typeof t.handleEvent=="function")t=Ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:de.setTimeout(t,e||0)}function jS(t){t.g=cm(()=>{t.g=null,t.i&&(t.i=!1,jS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class RP extends Lr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jS(this)}N(){super.N(),this.g&&(de.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ko(t){Lr.call(this),this.h=t,this.g={}}ut(Ko,Lr);var ov=[];function zS(t,e,n,r){Array.isArray(n)||(n&&(ov[0]=n.toString()),n=ov);for(var i=0;i<n.length;i++){var s=DS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function BS(t){rm(t.g,function(e,n){this.g.hasOwnProperty(n)&&sm(e)},t),t.g={}}Ko.prototype.N=function(){Ko.$.N.call(this),BS(this)};Ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wc(){this.g=!0}wc.prototype.Ea=function(){this.g=!1};function PP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function bP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Hi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OP(t,n)+(r?" "+r:"")})}function DP(t,e){t.info(function(){return"TIMEOUT: "+e})}wc.prototype.info=function(){};function OP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lm(n)}catch{return e}}var ki={},av=null;function Sc(){return av=av||new at}ki.Ta="serverreachability";function VS(t){_t.call(this,ki.Ta,t)}ut(VS,_t);function Qo(t){const e=Sc();pt(e,new VS(e))}ki.STAT_EVENT="statevent";function HS(t,e){_t.call(this,ki.STAT_EVENT,t),this.stat=e}ut(HS,_t);function bt(t){const e=Sc();pt(e,new HS(e,t))}ki.Ua="timingevent";function WS(t,e){_t.call(this,ki.Ua,t),this.size=e}ut(WS,_t);function ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return de.setTimeout(function(){t()},e)}var Ec={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},GS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hm(){}hm.prototype.h=null;function lv(t){return t.h||(t.h=t.i())}function KS(){}var va={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dm(){_t.call(this,"d")}ut(dm,_t);function fm(){_t.call(this,"c")}ut(fm,_t);var pf;function Ac(){}ut(Ac,hm);Ac.prototype.g=function(){return new XMLHttpRequest};Ac.prototype.i=function(){return{}};pf=new Ac;function wa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ko(this),this.P=NP,t=lf?125:void 0,this.V=new vc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new QS}function QS(){this.i=null,this.g="",this.h=!1}var NP=45e3,mf={},wu={};H=wa.prototype;H.setTimeout=function(t){this.P=t};function gf(t,e,n){t.L=1,t.v=Cc(Qn(e)),t.s=n,t.S=!0,qS(t,null)}function qS(t,e){t.G=Date.now(),Sa(t),t.A=Qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rE(n.i,"t",r),t.C=0,n=t.l.I,t.h=new QS,t.g=CE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new RP(Ct(t.Pa,t,t.g),t.O)),zS(t.U,t.g,"readystatechange",t.nb),e=t.I?PS(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qo(),PP(t.j,t.u,t.A,t.m,t.W,t.s)}H.nb=function(t){t=t.target;const e=this.M;e&&jn(t)==3?e.l():this.Pa(t)};H.Pa=function(t){try{if(t==this.g)e:{const c=jn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||lf||this.g&&(this.h.h||this.g.ja()||dv(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Qo(3):Qo(2)),kc(this);var n=this.g.da();this.aa=n;t:if(YS(this)){var r=dv(this.g);t="";var i=r.length,s=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),go(this);var o="";break t}this.h.i=new de.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,bP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yu(a)){var u=a;break t}}u=null}if(n=u)Hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yf(this,n);else{this.i=!1,this.o=3,bt(12),qr(this),go(this);break e}}this.S?(XS(this,c,o),lf&&this.i&&c==3&&(zS(this.U,this.V,"tick",this.mb),this.V.start())):(Hi(this.j,this.m,o,null),yf(this,o)),c==4&&qr(this),this.i&&!this.J&&(c==4?SE(this.l,this):(this.i=!1,Sa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),qr(this),go(this)}}}catch{}finally{}};function YS(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function XS(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=$P(t,n),i==wu){e==4&&(t.o=4,bt(14),r=!1),Hi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mf){t.o=4,bt(15),Hi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hi(t.j,t.m,i,null),yf(t,i);YS(t)&&i!=wu&&i!=mf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sm(e),e.L=!0,bt(11))):(Hi(t.j,t.m,n,"[Invalid Chunked Response]"),qr(t),go(t))}H.mb=function(){if(this.g){var t=jn(this.g),e=this.g.ja();this.C<e.length&&(kc(this),XS(this,t,e),this.i&&t!=4&&Sa(this))}};function $P(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?wu:(n=Number(e.substring(n,r)),isNaN(n)?mf:(r+=1,r+n>e.length?wu:(e=e.substr(r,n),t.C=r+n,e)))}H.cancel=function(){this.J=!0,qr(this)};function Sa(t){t.Y=Date.now()+t.P,JS(t,t.P)}function JS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ya(Ct(t.lb,t),e)}function kc(t){t.B&&(de.clearTimeout(t.B),t.B=null)}H.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(DP(this.j,this.A),this.L!=2&&(Qo(),bt(17)),qr(this),this.o=2,go(this)):JS(this,this.Y-t)};function go(t){t.l.H==0||t.J||SE(t.l,t)}function qr(t){kc(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,um(t.V),BS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function yf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||vf(n.h,t))){if(!t.K&&vf(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Au(n),xc(n);else break e;wm(n),bt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=ya(Ct(n.ib,n),6e3));if(1>=oE(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Yr(n,11)}else if((t.K||n.g==t)&&Au(n),!yu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(pm(s,s.h),s.h=null))}if(r.F){const m=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,Me(r.G,r.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=kE(r,r.I?r.oa:null,r.Y),o.K){aE(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(kc(a),Sa(a)),r.g=o}else vE(r);0<n.i.length&&Ic(n)}else u[0]!="stop"&&u[0]!="close"||Yr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Yr(n,7):vm(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Qo(4)}catch{}}function MP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(pc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function LP(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(pc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ZS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LP(t),r=MP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var eE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ni(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ni){this.h=e!==void 0?e:t.h,Su(this,t.j),this.s=t.s,this.g=t.g,Eu(this,t.m),this.l=t.l,e=t.i;var n=new qo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),uv(this,n),this.o=t.o}else t&&(n=String(t).match(eE))?(this.h=!!e,Su(this,n[1]||"",!0),this.s=eo(n[2]||""),this.g=eo(n[3]||"",!0),Eu(this,n[4]),this.l=eo(n[5]||"",!0),uv(this,n[6]||"",!0),this.o=eo(n[7]||"")):(this.h=!!e,this.i=new qo(null,this.h))}ni.prototype.toString=function(){var t=[],e=this.j;e&&t.push(to(e,cv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(to(e,cv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(to(n,n.charAt(0)=="/"?zP:jP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",to(n,VP)),t.join("")};function Qn(t){return new ni(t)}function Su(t,e,n){t.j=n?eo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function uv(t,e,n){e instanceof qo?(t.i=e,HP(t.i,t.h)):(n||(e=to(e,BP)),t.i=new qo(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Cc(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function eo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function to(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,UP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function UP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var cv=/[#\/\?@]/g,jP=/[#\?:]/g,zP=/[#\?]/g,BP=/[#\?@]/g,VP=/#/g;function qo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fr(t){t.g||(t.g=new Map,t.h=0,t.i&&FP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}H=qo.prototype;H.add=function(t,e){Fr(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tE(t,e){Fr(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nE(t,e){return Fr(t),e=Ds(t,e),t.g.has(e)}H.forEach=function(t,e){Fr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};H.sa=function(){Fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};H.Z=function(t){Fr(this);let e=[];if(typeof t=="string")nE(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};H.set=function(t,e){return Fr(this),this.i=null,t=Ds(this,t),nE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};H.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function rE(t,e,n){tE(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),tm(n)),t.h+=n.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HP(t,e){e&&!t.j&&(Fr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(tE(this,r),rE(this,i,n))},t)),t.j=e}var WP=class{constructor(t,e){this.h=t,this.g=e}};function iE(t){this.l=t||GP,de.PerformanceNavigationTiming?(t=de.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(de.g&&de.g.Ka&&de.g.Ka()&&de.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GP=10;function sE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function oE(t){return t.h?1:t.g?t.g.size:0}function vf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pm(t,e){t.g?t.g.add(e):t.h=e}function aE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}iE.prototype.cancel=function(){if(this.i=lE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return tm(t.i)}function mm(){}mm.prototype.stringify=function(t){return de.JSON.stringify(t,void 0)};mm.prototype.parse=function(t){return de.JSON.parse(t,void 0)};function KP(){this.g=new mm}function QP(t,e,n){const r=n||"";try{ZS(t,function(i,s){let o=i;ma(i)&&(o=lm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function qP(t,e){const n=new wc;if(de.Image){const r=new Image;r.onload=Xa(Za,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xa(Za,n,r,"TestLoadImage: error",!1,e),r.onabort=Xa(Za,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xa(Za,n,r,"TestLoadImage: timeout",!1,e),de.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Za(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ea(t){this.l=t.fc||null,this.j=t.ob||!1}ut(Ea,hm);Ea.prototype.g=function(){return new _c(this.l,this.j)};Ea.prototype.i=function(t){return function(){return t}}({});function _c(t,e){at.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(_c,at);var gm=0;H=_c.prototype;H.open=function(t,e){if(this.readyState!=gm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yo(this)};H.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||de).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Aa(this)),this.readyState=gm};H.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof de.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function uE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}H.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Aa(this):Yo(this),this.readyState==3&&uE(this)}};H.Za=function(t){this.g&&(this.response=this.responseText=t,Aa(this))};H.Ya=function(t){this.g&&(this.response=t,Aa(this))};H.ka=function(){this.g&&Aa(this)};function Aa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yo(t)}H.setRequestHeader=function(t,e){this.v.append(t,e)};H.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_c.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var YP=de.JSON.parse;function He(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=cE,this.L=this.M=!1}ut(He,at);var cE="",XP=/^https?$/i,JP=["POST","PUT"];H=He.prototype;H.Oa=function(t){this.M=t};H.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pf.g(),this.C=this.u?lv(this.u):lv(pf),this.g.onreadystatechange=Ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){hv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=de.FormData&&t instanceof de.FormData,!(0<=_S(JP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{fE(this),0<this.B&&((this.L=ZP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.ua,this)):this.A=cm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){hv(this,s)}};function ZP(t){return gs&&gP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}H.ua=function(){typeof em<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function hv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hE(t),Tc(t)}function hE(t){t.F||(t.F=!0,pt(t,"complete"),pt(t,"error"))}H.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pt(this,"complete"),pt(this,"abort"),Tc(this))};H.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tc(this,!0)),He.$.N.call(this)};H.La=function(){this.s||(this.G||this.v||this.l?dE(this):this.kb())};H.kb=function(){dE(this)};function dE(t){if(t.h&&typeof em<"u"&&(!t.C[1]||jn(t)!=4||t.da()!=2)){if(t.v&&jn(t)==4)cm(t.La,0,t);else if(pt(t,"readystatechange"),jn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(eE)[1]||null;if(!i&&de.self&&de.self.location){var s=de.self.location.protocol;i=s.substr(0,s.length-1)}r=!XP.test(i?i.toLowerCase():"")}n=r}if(n)pt(t,"complete"),pt(t,"success");else{t.m=6;try{var o=2<jn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",hE(t)}}finally{Tc(t)}}}}function Tc(t,e){if(t.g){fE(t);const n=t.g,r=t.C[0]?gu:null;t.g=null,t.C=null,e||pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function fE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(de.clearTimeout(t.A),t.A=null)}function jn(t){return t.g?t.g.readyState:0}H.da=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}};H.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),YP(e)}};function dv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case cE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}H.Ia=function(){return this.m};H.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pE(t){let e="";return rm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ym(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mE(t){this.Ga=0,this.i=[],this.j=new wc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ws("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ws("baseRetryDelayMs",5e3,t),this.hb=Ws("retryDelaySeedMs",1e4,t),this.eb=Ws("forwardChannelMaxRetries",2,t),this.xa=Ws("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new iE(t&&t.concurrentRequestLimit),this.Ja=new KP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}H=mE.prototype;H.qa=8;H.H=1;function vm(t){if(gE(t),t.H==3){var e=t.W++,n=Qn(t.G);Me(n,"SID",t.J),Me(n,"RID",e),Me(n,"TYPE","terminate"),ka(t,n),e=new wa(t,t.j,e,void 0),e.L=2,e.v=Cc(Qn(n)),n=!1,de.navigator&&de.navigator.sendBeacon&&(n=de.navigator.sendBeacon(e.v.toString(),"")),!n&&de.Image&&(new Image().src=e.v,n=!0),n||(e.g=CE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Sa(e)}AE(t)}function xc(t){t.g&&(Sm(t),t.g.cancel(),t.g=null)}function gE(t){xc(t),t.u&&(de.clearTimeout(t.u),t.u=null),Au(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&de.clearTimeout(t.m),t.m=null)}function Ic(t){sE(t.h)||t.m||(t.m=!0,FS(t.Na,t),t.C=0)}function eb(t,e){return oE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ya(Ct(t.Na,t,e),EE(t,t.C)),t.C++,!0)}H.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new wa(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=PS(s),bS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=yE(this,i,e),n=Qn(this.G),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),ka(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(pE(s)))+"&"+e:this.o&&ym(n,this.o,s)),pm(this.h,i),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),i.ba=!0,gf(i,n,null)):gf(i,n,e),this.H=2}}else this.H==3&&(t?fv(this,t):this.i.length==0||sE(this.h)||fv(this))};function fv(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.G);Me(r,"SID",t.J),Me(r,"RID",n),Me(r,"AID",t.V),ka(t,r),t.o&&t.s&&ym(r,t.o,t.s),n=new wa(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=yE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),pm(t.h,n),gf(n,r,e)}function ka(t,e){t.ma&&rm(t.ma,function(n,r){Me(e,r,n)}),t.l&&ZS({},function(n,r){Me(e,r,n)})}function yE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ct(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{QP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function vE(t){t.g||t.u||(t.ba=1,FS(t.Ma,t),t.A=0)}function wm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ya(Ct(t.Ma,t),EE(t,t.A)),t.A++,!0)}H.Ma=function(){if(this.u=null,wE(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=ya(Ct(this.jb,this),t)}};H.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,bt(10),xc(this),wE(this))};function Sm(t){t.B!=null&&(de.clearTimeout(t.B),t.B=null)}function wE(t){t.g=new wa(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.J),Me(e,"CI",t.M?"0":"1"),Me(e,"AID",t.V),Me(e,"TYPE","xmlhttp"),ka(t,e),t.o&&t.s&&ym(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Cc(Qn(e)),n.s=null,n.S=!0,qS(n,t)}H.ib=function(){this.v!=null&&(this.v=null,xc(this),wm(this),bt(19))};function Au(t){t.v!=null&&(de.clearTimeout(t.v),t.v=null)}function SE(t,e){var n=null;if(t.g==e){Au(t),Sm(t),t.g=null;var r=2}else if(vf(t.h,e))n=e.F,aE(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Sc(),pt(r,new WS(r,n)),Ic(t)}else vE(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&eb(t,e)||r==2&&wm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Yr(t,5);break;case 4:Yr(t,10);break;case 3:Yr(t,6);break;default:Yr(t,2)}}}function EE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Yr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ct(t.pb,t);n||(n=new ni("//www.google.com/images/cleardot.gif"),de.location&&de.location.protocol=="http"||Su(n,"https"),Cc(n)),qP(n.toString(),r)}else bt(2);t.H=0,t.l&&t.l.za(e),AE(t),gE(t)}H.pb=function(t){t?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function AE(t){if(t.H=0,t.pa=[],t.l){const e=lE(t.h);(e.length!=0||t.i.length!=0)&&(nv(t.pa,e),nv(t.pa,t.i),t.h.i.length=0,tm(t.i),t.i.length=0),t.l.ya()}}function kE(t,e,n){var r=n instanceof ni?Qn(n):new ni(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Eu(r,r.m);else{var i=de.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ni(null,void 0);r&&Su(s,r),e&&(s.g=e),i&&Eu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Me(r,n,e),Me(r,"VER",t.qa),ka(t,r),r}function CE(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new He(new Ea({ob:!0})):new He(t.va),e.Oa(t.I),e}function _E(){}H=_E.prototype;H.Ba=function(){};H.Aa=function(){};H.za=function(){};H.ya=function(){};H.Va=function(){};function ku(){if(gs&&!(10<=Number(yP)))throw Error("Environmental error: no available transport.")}ku.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){at.call(this),this.g=new mE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!yu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Os(this)}ut(Kt,at);Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=kE(t,null,t.Y),Ic(t)};Kt.prototype.close=function(){vm(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lm(t),t=n);e.i.push(new WP(e.fb++,t)),e.H==3&&Ic(e)};Kt.prototype.N=function(){this.g.l=null,delete this.j,vm(this.g),delete this.g,Kt.$.N.call(this)};function TE(t){dm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(TE,dm);function xE(){fm.call(this),this.status=1}ut(xE,fm);function Os(t){this.g=t}ut(Os,_E);Os.prototype.Ba=function(){pt(this.g,"a")};Os.prototype.Aa=function(t){pt(this.g,new TE(t))};Os.prototype.za=function(t){pt(this.g,new xE)};Os.prototype.ya=function(){pt(this.g,"b")};function tb(){this.blockSize=-1}function vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ut(vn,tb);vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Fh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}vn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Fh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Fh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Fh(this,r),i=0;break}}this.h=i,this.i+=e};vn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function xe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var nb={};function Em(t){return-128<=t&&128>t?TS(nb,t,function(e){return new xe([e|0],0>e?-1:0)}):new xe([t|0],0>t?-1:0)}function kn(t){if(isNaN(t)||!isFinite(t))return Zi;if(0>t)return dt(kn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=wf;return new xe(e,0)}function IE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return dt(IE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=kn(Math.pow(e,8)),r=Zi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=kn(Math.pow(e,s)),r=r.R(s).add(kn(o))):(r=r.R(n),r=r.add(kn(o)))}return r}var wf=4294967296,Zi=Em(0),Sf=Em(1),pv=Em(16777216);H=xe.prototype;H.ea=function(){if(en(this))return-dt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:wf+r)*e,e*=wf}return t};H.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zn(this))return"0";if(en(this))return"-"+dt(this).toString(t);for(var e=kn(Math.pow(t,6)),n=this,r="";;){var i=_u(n,e).g;n=Cu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,zn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};H.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function en(t){return t.h==-1}H.X=function(t){return t=Cu(this,t),en(t)?-1:zn(t)?0:1};function dt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new xe(n,~t.h).add(Sf)}H.abs=function(){return en(this)?dt(this):this};H.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new xe(n,n[n.length-1]&-2147483648?-1:0)};function Cu(t,e){return t.add(dt(e))}H.R=function(t){if(zn(this)||zn(t))return Zi;if(en(this))return en(t)?dt(this).R(dt(t)):dt(dt(this).R(t));if(en(t))return dt(this.R(dt(t)));if(0>this.X(pv)&&0>t.X(pv))return kn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,el(n,2*r+2*i),n[2*r+2*i+1]+=s*l,el(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,el(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,el(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new xe(n,0)};function el(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Gs(t,e){this.g=t,this.h=e}function _u(t,e){if(zn(e))throw Error("division by zero");if(zn(t))return new Gs(Zi,Zi);if(en(t))return e=_u(dt(t),e),new Gs(dt(e.g),dt(e.h));if(en(e))return e=_u(t,dt(e)),new Gs(dt(e.g),e.h);if(30<t.g.length){if(en(t)||en(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Sf,r=e;0>=r.X(t);)n=mv(n),r=mv(r);var i=xi(n,1),s=xi(r,1);for(r=xi(r,2),n=xi(n,2);!zn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=xi(r,1),n=xi(n,1)}return e=Cu(t,i.R(e)),new Gs(i,e)}for(i=Zi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=kn(n),o=s.R(e);en(o)||0<o.X(t);)n-=r,s=kn(n),o=s.R(e);zn(s)&&(s=Sf),i=i.add(s),t=Cu(t,o)}return new Gs(i,t)}H.gb=function(t){return _u(this,t).h};H.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new xe(n,this.h&t.h)};H.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new xe(n,this.h|t.h)};H.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new xe(n,this.h^t.h)};function mv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new xe(n,t.h)}function xi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new xe(i,t.h)}ku.prototype.createWebChannel=ku.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;Ec.NO_ERROR=0;Ec.TIMEOUT=8;Ec.HTTP_ERROR=6;GS.COMPLETE="complete";KS.EventType=va;va.OPEN="a";va.CLOSE="b";va.ERROR="c";va.MESSAGE="d";at.prototype.listen=at.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;vn.prototype.digest=vn.prototype.l;vn.prototype.reset=vn.prototype.reset;vn.prototype.update=vn.prototype.j;xe.prototype.add=xe.prototype.add;xe.prototype.multiply=xe.prototype.R;xe.prototype.modulo=xe.prototype.gb;xe.prototype.compare=xe.prototype.X;xe.prototype.toNumber=xe.prototype.ea;xe.prototype.toString=xe.prototype.toString;xe.prototype.getBits=xe.prototype.D;xe.fromNumber=kn;xe.fromString=IE;var rb=function(){return new ku},ib=function(){return Sc()},Uh=Ec,sb=GS,ob=ki,gv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ab=Ea,tl=KS,lb=He,ub=vn,es=xe;const yv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new zp("@firebase/firestore");function vv(){return pi.logLevel}function Y(t,...e){if(pi.logLevel<=Ae.DEBUG){const n=e.map(Am);pi.debug(`Firestore (${Ns}): ${t}`,...n)}}function qn(t,...e){if(pi.logLevel<=Ae.ERROR){const n=e.map(Am);pi.error(`Firestore (${Ns}): ${t}`,...n)}}function ys(t,...e){if(pi.logLevel<=Ae.WARN){const n=e.map(Am);pi.warn(`Firestore (${Ns}): ${t}`,...n)}}function Am(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function Oe(t,e){t||he()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class hb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new RE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new St(e)}}class fb{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pb{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new fb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.T=n.token,new mb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new nt(0,0))}static max(){return new pe(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Xo{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const vb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Xo{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return vb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Le.fromString(e))}static fromName(e){return new te(Le.fromString(e).popFirst(5))}static empty(){return new te(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Le(e.slice()))}}function wb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Rr(i,te.empty(),e)}function Sb(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(pe.min(),te.empty(),-1)}static max(){return new Rr(pe.max(),te.empty(),-1)}}function Eb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==Ab)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _a(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}km.ct=-1;function Rc(t){return t==null}function Tu(t){return t===0&&1/t==-1/0}function Cb(t){return typeof t=="number"&&Number.isInteger(t)&&!Tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nl(this.root,e,this.comparator,!0)}}class nl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(e){return new Sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class Sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new Tt(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new DE("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const _b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=_b.exec(t);if(Oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _m(t){const e=t.mapValue.fields.__previous_value__;return Cm(e)?_m(e):e}function Jo(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cm(t)?4:xb(t)?9007199254740991:10:he()}function Rn(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jo(t).isEqual(Jo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pr(r.timestampValue),o=Pr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return mi(r.bytesValue).isEqual(mi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Qe(r.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qe(r.integerValue)===Qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Qe(r.doubleValue),o=Qe(i.doubleValue);return s===o?Tu(s)===Tu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(wv(s)!==wv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rn(s[a],o[a])))return!1;return!0}(t,e);default:return he()}}function ea(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=gi(t),r=gi(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Qe(i.integerValue||i.doubleValue),a=Qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ev(t.timestampValue,e.timestampValue);case 4:return Ev(Jo(t),Jo(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(i,s){const o=mi(i),a=mi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ke(o[l],a[l]);if(u!==0)return u}return ke(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ke(Qe(i.latitude),Qe(s.latitude));return o!==0?o:ke(Qe(i.longitude),Qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ws(o[l],a[l]);if(u)return u}return ke(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===rl.mapValue&&s===rl.mapValue)return 0;if(i===rl.mapValue)return 1;if(s===rl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ke(a[c],u[c]);if(h!==0)return h;const f=ws(o[a[c]],l[u[c]]);if(f!==0)return f}return ke(a.length,u.length)}(t.mapValue,e.mapValue);default:throw he()}}function Ev(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Pr(t),r=Pr(e),i=ke(n.seconds,r.seconds);return i!==0?i:ke(n.nanos,r.nanos)}function Ss(t){return Ef(t)}function Ef(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Pr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?mi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,te.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ef(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ef(r.fields[a])}`;return s+"}"}(t.mapValue):he();var e,n}function Af(t){return!!t&&"integerValue"in t}function Tm(t){return!!t&&"arrayValue"in t}function Av(t){return!!t&&"nullValue"in t}function kv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rl(t){return!!t&&"mapValue"in t}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=kt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(yo(this.value))}}function OE(t){const e=[];return Ci(t.fields,(n,r)=>{const i=new kt([n]);if(Rl(r)){const s=OE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new At(e,0,pe.min(),pe.min(),pe.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new At(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new At(e,2,n,pe.min(),pe.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,pe.min(),pe.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.position=e,this.inclusive=n}}function Cv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _v(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{}class et extends NE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Pb(e,n,r):n==="array-contains"?new Ob(e,r):n==="in"?new Nb(e,r):n==="not-in"?new $b(e,r):n==="array-contains-any"?new Mb(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bb(e,r):new Db(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pn extends NE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Pn(e,n)}matches(e){return $E(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $E(t){return t.op==="and"}function ME(t){return Rb(t)&&$E(t)}function Rb(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function kf(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(ME(t))return t.filters.map(e=>kf(e)).join(",");{const e=t.filters.map(n=>kf(n)).join(",");return`${t.op}(${e})`}}function LE(t,e){return t instanceof et?function(n,r){return r instanceof et&&n.op===r.op&&n.field.isEqual(r.field)&&Rn(n.value,r.value)}(t,e):t instanceof Pn?function(n,r){return r instanceof Pn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&LE(s,r.filters[o]),!0):!1}(t,e):void he()}function FE(t){return t instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ss(e.value)}`}(t):t instanceof Pn?function(e){return e.op.toString()+" {"+e.getFilters().map(FE).join(" ,")+"}"}(t):"Filter"}class Pb extends et{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class bb extends et{constructor(e,n){super(e,"in",n),this.keys=UE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Db extends et{constructor(e,n){super(e,"not-in",n),this.keys=UE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function UE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class Ob extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tm(n)&&ea(n.arrayValue,this.value)}}class Nb extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ea(this.value.arrayValue,n)}}class $b extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ea(this.value.arrayValue,n)}}class Mb extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Tv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Lb(t,e,n,r,i,s,o)}function xm(t){const e=me(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ft=n}return e.ft}function Im(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ib(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_v(t.startAt,e.startAt)&&_v(t.endAt,e.endAt)}function Cf(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Fb(t,e,n,r,i,s,o,a){return new Pc(t,e,n,r,i,s,o,a)}function jE(t){return new Pc(t)}function xv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ub(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jb(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function zb(t){return t.collectionGroup!==null}function ts(t){const e=me(t);if(e.dt===null){e.dt=[];const n=jb(e),r=Ub(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new vo(n)),e.dt.push(new vo(kt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new vo(kt.keyField(),s))}}}return e.dt}function Yn(t){const e=me(t);if(!e._t)if(e.limitType==="F")e._t=Tv(e.path,e.collectionGroup,ts(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ts(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new vo(s.field,o))}const r=e.endAt?new xu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xu(e.startAt.position,e.startAt.inclusive):null;e._t=Tv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function _f(t,e,n){return new Pc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bc(t,e){return Im(Yn(t),Yn(e))&&t.limitType===e.limitType}function zE(t){return`${xm(Yn(t))}|lt:${t.limitType}`}function Tf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>FE(r)).join(", ")}]`),Rc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),`Target(${n})`}(Yn(t))}; limitType=${t.limitType})`}function Dc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):te.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ts(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Cv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ts(n),r)||n.endAt&&!function(i,s,o){const a=Cv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ts(n),r))}(t,e)}function Bb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function BE(t){return(e,n)=>{let r=!1;for(const i of ts(t)){const s=Vb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Vb(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ws(a,l):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new Be(te.comparator);function Xn(){return Hb}const VE=new Be(te.comparator);function no(...t){let e=VE;for(const n of t)e=e.insert(n.key,n);return e}function HE(t){let e=VE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return wo()}function WE(){return wo()}function wo(){return new $s(t=>t.toString(),(t,e)=>t.isEqual(e))}const Wb=new Be(te.comparator),Gb=new Tt(te.comparator);function ge(...t){let e=Gb;for(const n of t)e=e.add(n);return e}const Kb=new Tt(ke);function Qb(){return Kb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tu(e)?"-0":e}}function KE(t){return{integerValue:""+t}}function qb(t,e){return Cb(e)?KE(e):GE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this._=void 0}}function Yb(t,e,n){return t instanceof Iu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Cm(i)&&(i=_m(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ta?qE(t,e):t instanceof na?YE(t,e):function(r,i){const s=QE(r,i),o=Iv(s)+Iv(r.wt);return Af(s)&&Af(r.wt)?KE(o):GE(r.serializer,o)}(t,e)}function Xb(t,e,n){return t instanceof ta?qE(t,e):t instanceof na?YE(t,e):n}function QE(t,e){return t instanceof Ru?Af(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Iu extends Oc{}class ta extends Oc{constructor(e){super(),this.elements=e}}function qE(t,e){const n=XE(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class na extends Oc{constructor(e){super(),this.elements=e}}function YE(t,e){let n=XE(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Ru extends Oc{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Iv(t){return Qe(t.integerValue||t.doubleValue)}function XE(t){return Tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Jb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ta&&r instanceof ta||n instanceof na&&r instanceof na?vs(n.elements,r.elements,Rn):n instanceof Ru&&r instanceof Ru?Rn(n.wt,r.wt):n instanceof Iu&&r instanceof Iu}(t.transform,e.transform)}class Zb{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nc{}function JE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rm(t.key,gn.none()):new Ta(t.key,t.data,gn.none());{const n=t.data,r=Mt.empty();let i=new Tt(kt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(t.key,r,new Vt(i.toArray()),gn.none())}}function eD(t,e,n){t instanceof Ta?function(r,i,s){const o=r.value.clone(),a=Pv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(r,i,s){if(!Pl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Pv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ZE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof Ta?function(i,s,o,a){if(!Pl(i.precondition,s))return o;const l=i.value.clone(),u=bv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(i,s,o,a){if(!Pl(i.precondition,s))return o;const l=bv(i.fieldTransforms,a,s),u=s.data;return u.setAll(ZE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Pl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function tD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=QE(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function Rv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&vs(n,r,(i,s)=>Jb(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends Nc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends Nc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pv(t,e,n){const r=new Map;Oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Xb(o,a,n[i]))}return r}function bv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Yb(s,o,e))}return r}class Rm extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nD extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=JE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,r)=>Rv(n,r))&&vs(this.baseMutations,e.baseMutations,(n,r)=>Rv(n,r))}}class Pm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Oe(e.mutations.length===r.length);let i=Wb;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,we;function oD(t){switch(t){default:return he();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function eA(t){if(t===void 0)return qn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Ke.OK:return D.OK;case Ke.CANCELLED:return D.CANCELLED;case Ke.UNKNOWN:return D.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return D.INTERNAL;case Ke.UNAVAILABLE:return D.UNAVAILABLE;case Ke.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ke.NOT_FOUND:return D.NOT_FOUND;case Ke.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ke.ABORTED:return D.ABORTED;case Ke.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ke.DATA_LOSS:return D.DATA_LOSS;default:return he()}}(we=Ke||(Ke={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return il}static getOrCreateInstance(){return il===null&&(il=new bm),il}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let il=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=new es([4294967295,4294967295],0);function Dv(t){const e=aD().encode(t),n=new ub;return n.update(e),new Uint8Array(n.digest())}function Ov(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new es([n,r],0),new es([i,s],0)]}class Dm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=es.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(es.fromNumber(r)));return i.compare(lD)===1&&(i=new es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Dv(e),[r,i]=Ov(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Dv(e),[r,i]=Ov(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $c(pe.min(),i,new Be(ke),Xn(),ge())}}class xa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xa(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class tA{constructor(e,n){this.targetId=e,this.bt=n}}class nA{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Nv{constructor(){this.Vt=0,this.St=Mv(),this.Dt=Rt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=ge(),n=ge(),r=ge();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:he()}}),new xa(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=Mv()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class uD{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Xn(),this.jt=$v(),this.zt=new Be(ke)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(Cf(o))if(i===0){const a=new te(o.path);this.Jt(r,a,At.newNoDocument(a,pe.min()))}else Oe(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=bm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,g,w,m,E,p;const d={localCacheCount:c,existenceFilterCount:h.count},v=h.unchangedNames;return v&&(d.bloomFilter={applied:u===0,hashCount:(f=v==null?void 0:v.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(w=(g=v==null?void 0:v.bits)===null||g===void 0?void 0:g.bitmap)===null||w===void 0?void 0:w.length)!==null&&m!==void 0?m:0,padding:(p=(E=v==null?void 0:v.bits)===null||E===void 0?void 0:E.padding)!==null&&p!==void 0?p:0}),d}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=mi(s).toUint8Array()}catch(c){if(c instanceof DE)return ys("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Dm(l,o,a)}catch(c){return ys(c instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Cf(a.target)){const l=new te(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,At.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=ge();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new $c(e,n,this.zt,this.Qt,r);return this.Qt=Xn(),this.jt=$v(),this.zt=new Be(ke),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Nv,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new Tt(ke),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Nv),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function $v(){return new Be(te.comparator)}function Mv(){return new Be(te.comparator)}const cD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dD=(()=>({and:"AND",or:"OR"}))();class fD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xf(t,e){return t.useProto3Json||Rc(e)?e:{value:e}}function Pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pD(t,e){return Pu(t,e.toTimestamp())}function In(t){return Oe(!!t),pe.fromTimestamp(function(e){const n=Pr(e);return new nt(n.seconds,n.nanos)}(t))}function Om(t,e){return function(n){return new Le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function iA(t){const e=Le.fromString(t);return Oe(lA(e)),e}function If(t,e){return Om(t.databaseId,e.path)}function jh(t,e){const n=iA(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(sA(n))}function Rf(t,e){return Om(t.databaseId,e)}function mD(t){const e=iA(t);return e.length===4?Le.emptyPath():sA(e)}function Pf(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sA(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lv(t,e,n){return{name:If(t,e),fields:n.value.mapValue.fields}}function gD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Oe(u===void 0||typeof u=="string"),Rt.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),Rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?D.UNKNOWN:eA(l.code);return new ie(u,l.message||"")}(o);n=new nA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jh(t,r.document.name),s=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):pe.min(),a=new Mt({mapValue:{fields:r.document.fields}}),l=At.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new bl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jh(t,r.document),s=r.readTime?In(r.readTime):pe.min(),o=At.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jh(t,r.document),s=r.removedTargetIds||[];n=new bl([],s,i,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sD(i,s),a=r.targetId;n=new tA(a,o)}}return n}function yD(t,e){let n;if(e instanceof Ta)n={update:Lv(t,e.key,e.value)};else if(e instanceof Rm)n={delete:If(t,e.key)};else if(e instanceof Ur)n={update:Lv(t,e.key,e.data),updateMask:TD(e.fieldMask)};else{if(!(e instanceof nD))return he();n={verify:If(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Iu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ta)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof na)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ru)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:pD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function vD(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?In(r.updateTime):In(i);return s.isEqual(pe.min())&&(s=In(i)),new Zb(s,r.transformResults||[])}(n,e))):[]}function wD(t,e){return{documents:[Rf(t,e.path)]}}function SD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Rf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return aA(Pn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ri(c.field),direction:kD(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=xf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ED(t){let e=mD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Oe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=oA(c);return h instanceof Pn&&ME(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new vo(Pi(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Rc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new xu(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new xu(f,h)}(n.endAt)),Fb(e,i,o,s,a,"F",l,u)}function AD(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function oA(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Pi(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Pi(e.unaryFilter.field);return et.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pi(e.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Pi(e.unaryFilter.field);return et.create(s,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(e){return et.create(Pi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pn.create(e.compositeFilter.filters.map(n=>oA(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return he()}}(e.compositeFilter.op))}(t):he()}function kD(t){return cD[t]}function CD(t){return hD[t]}function _D(t){return dD[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Pi(t){return kt.fromServerFormat(t.fieldPath)}function aA(t){return t instanceof et?function(e){if(e.op==="=="){if(kv(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NAN"}};if(Av(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(kv(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NAN"}};if(Av(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(e.field),op:CD(e.op),value:e.value}}}(t):t instanceof Pn?function(e){const n=e.getFilters().map(r=>aA(r));return n.length===1?n[0]:{compositeFilter:{op:_D(e.op),filters:n}}}(t):he()}function TD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,i,s=pe.min(),o=pe.min(),a=Rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.le=e}}function ID(t){const e=ED({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_f(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.sn=new PD}addToCollectionParentIndex(e,n){return this.sn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Rr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class PD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Es(0)}static kn(){return new Es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&So(r.mutation,i,Vt.empty(),nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=Xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=no();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=wo(),a=wo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ur)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),So(c.mutation,u,c.mutation.getFieldMask(),nt.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new DD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wo();let i=new Be((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Vt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ge()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=WE();c.forEach(f=>{if(!s.has(f)){const g=JE(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Xr());let a=-1,l=s;return o.next(u=>$.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?$.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ge())).next(c=>({batchId:a,changes:HE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=no();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=no();return this.indexManager.getCollectionParents(e,i).next(o=>$.forEach(o,a=>{const l=function(u,c){return new Pc(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,At.newInvalidDocument(u)))});let o=no();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&So(u.mutation,l,Vt.empty(),nt.now()),Dc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return $.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:In(r.createTime)}),$.resolve()}getNamedQuery(e,n){return $.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:ID(r.bundledQuery),readTime:In(r.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.overlays=new Be(te.comparator),this.hs=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Xr(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Xr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Xr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return $.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iD(n,r));let s=this.hs.get(n);s===void 0&&(s=ge(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.ls=new Tt(rt.fs),this.ds=new Tt(rt._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new rt(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new rt(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new te(new Le([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new te(new Le([])),r=new rt(n,e),i=new rt(n,e+1);let s=ge();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return te.comparator(e.key,n.key)||ke(e.Es,n.Es)}static _s(e,n){return ke(e.Es,n.Es)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Tt(rt.fs)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(ke);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),$.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new rt(new te(s),0);let a=new Tt(ke);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),$.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Oe(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return $.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new rt(n,0),i=this.Rs.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.Ss=e,this.docs=new Be(te.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():At.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,a=new te(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Eb(Sb(c),r)<=0||(i.has(c.key)||Dc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){he()}Ds(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FD(this)}getSize(e){return $.resolve(this.size)}}class FD extends bD{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.persistence=e,this.Cs=new $s(n=>xm(n),Im),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Nm,this.targetCount=0,this.ks=Es.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),$.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.$n(n),$.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n){this.Ms={},this.overlays={},this.Os=new km(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new UD(this),this.indexManager=new RD,this.remoteDocumentCache=function(r){return new LD(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new xD(n),this.Ls=new ND(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $D,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new MD(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new zD(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return $.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class zD extends kb{constructor(e){super(),this.currentSequenceNumber=e}}class $m{constructor(e){this.persistence=e,this.Gs=new Nm,this.Qs=null}static js(e){return new $m(e)}get zs(){if(this.Qs)return this.Qs;throw he()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),$.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.zs,r=>{const i=te.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return $.or([()=>$.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(xv(n))return $.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_f(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,_f(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return xv(n)||i.isEqual(pe.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(vv()<=Ae.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tf(n)),this.zi(e,o,n,wb(i,-1)))})}Qi(e,n){let r=new Tt(BE(e));return n.forEach((i,s)=>{Dc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return vv()<=Ae.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Tf(n)),this.qi.getDocumentsMatchingQuery(e,n,Rr.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new Be(ke),this.Ji=new $s(s=>xm(s),Im),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OD(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function HD(t,e,n,r){return new VD(t,e,n,r)}async function uA(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ge();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function WD(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=$.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(w=>{const m=l.docVersions.get(g);Oe(m!==null),w.version.compareTo(m)<0&&(c.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ge();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function cA(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function GD(t,e){const n=me(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Rt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(w,m,E){return w.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,g,c)&&a.push(n.Fs.updateTargetData(s,g))});let l=Xn(),u=ge();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(KD(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(pe.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function KD(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function QD(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qD(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function bf(t,e,n){const r=me(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_a(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function Fv(t,e,n){const r=me(t);let i=pe.min(),s=ge();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=me(a),h=c.Ji.get(u);return h!==void 0?$.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:pe.min(),n?s:ge())).next(a=>(YD(r,Bb(e),a),{documents:a,sr:s})))}function YD(t,e,n){let r=t.Yi.get(e)||pe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class Uv{constructor(){this.activeTargetIds=Qb()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XD{constructor(){this.Wr=new Uv,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Uv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl=null;function zh(){return sl===null?sl=268435456+Math.round(2147483648*Math.random()):sl++,"0x"+sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class tO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=zh(),a=this.Io(e,n);Y("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(Y("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ys("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ns,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=ZD[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=zh();return new Promise((o,a)=>{const l=new lb;l.setWithCredentials(!0),l.listenOnce(sb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Uh.NO_ERROR:const c=l.getResponseJson();Y(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Uh.TIMEOUT:Y(wt,`RPC '${e}' ${s} timed out`),a(new ie(D.DEADLINE_EXCEEDED,"Request time out"));break;case Uh.HTTP_ERROR:const h=l.getStatus();if(Y(wt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const w=function(m){const E=m.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(E)>=0?E:D.UNKNOWN}(g.status);a(new ie(w,g.message))}else a(new ie(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ie(D.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{Y(wt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);Y(wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=zh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rb(),a=ib(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new ab({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");Y(wt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,f=!1;const g=new eO({io:m=>{f?Y(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(h||(Y(wt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),Y(wt,`RPC '${e}' stream ${i} sending:`,m),c.send(m))},ro:()=>c.close()}),w=(m,E,p)=>{m.listen(E,d=>{try{p(d)}catch(v){setTimeout(()=>{throw v},0)}})};return w(c,tl.EventType.OPEN,()=>{f||Y(wt,`RPC '${e}' stream ${i} transport opened.`)}),w(c,tl.EventType.CLOSE,()=>{f||(f=!0,Y(wt,`RPC '${e}' stream ${i} transport closed`),g.fo())}),w(c,tl.EventType.ERROR,m=>{f||(f=!0,ys(wt,`RPC '${e}' stream ${i} transport errored:`,m),g.fo(new ie(D.UNAVAILABLE,"The operation could not be completed")))}),w(c,tl.EventType.MESSAGE,m=>{var E;if(!f){const p=m.data[0];Oe(!!p);const d=p,v=d.error||((E=d[0])===null||E===void 0?void 0:E.error);if(v){Y(wt,`RPC '${e}' stream ${i} received error:`,v);const S=v.status;let k=function(I){const b=Ke[I];if(b!==void 0)return eA(b)}(S),R=v.message;k===void 0&&(k=D.INTERNAL,R="Unknown error status: "+S+" with message "+v.message),f=!0,g.fo(new ie(k,R)),c.close()}else Y(wt,`RPC '${e}' stream ${i} received:`,p),g._o(p)}}),w(a,ob.STAT_EVENT,m=>{m.stat===gv.PROXY?Y(wt,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===gv.NOPROXY&&Y(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Bh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return new fD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new hA(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new ie(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nO extends dA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=gD(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?pe.min():s.readTime?In(s.readTime):pe.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Pf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Cf(a)?{documents:wD(i,a)}:{query:SD(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=rA(i,s.resumeToken);const l=xf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(pe.min())>0){o.readTime=Pu(i,s.snapshotVersion.toTimestamp());const l=xf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=AD(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Pf(this.serializer),n.removeTarget=e,this.zo(n)}}class rO extends dA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=vD(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.uu(r,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Pf(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yD(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new ie(D.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(D.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(D.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class sO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(qn(n),this.wu=!1):Y("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{_i(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=me(a);l.Au.add(4),await Ia(l),l.Pu.set("Unknown"),l.Au.delete(4),await Lc(l)}(this))})}),this.Pu=new sO(r,i)}}async function Lc(t){if(_i(t))for(const e of t.Ru)await e(!0)}async function Ia(t){for(const e of t.Ru)await e(!1)}function fA(t,e){const n=me(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Um(n)?Fm(n):Ms(n).Uo()&&Lm(n,e))}function pA(t,e){const n=me(t),r=Ms(n);n.Eu.delete(e),r.Uo()&&mA(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():_i(n)&&n.Pu.set("Unknown"))}function Lm(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).nu(e)}function mA(t,e){t.bu.Lt(e),Ms(t).su(e)}function Fm(t){t.bu=new uD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.Pu.mu()}function Um(t){return _i(t)&&!Ms(t).qo()&&t.Eu.size>0}function _i(t){return me(t).Au.size===0}function gA(t){t.bu=void 0}async function aO(t){t.Eu.forEach((e,n)=>{Lm(t,e)})}async function lO(t,e){gA(t),Um(t)?(t.Pu.pu(e),Fm(t)):t.Pu.set("Unknown")}async function uO(t,e,n){if(t.Pu.set("Online"),e instanceof nA&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bu(t,r)}else if(e instanceof bl?t.bu.Wt(e):e instanceof tA?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(pe.min()))try{const r=await cA(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(Rt.EMPTY_BYTE_STRING,u.snapshotVersion)),mA(i,a);const c=new dr(u.target,a,l,u.sequenceNumber);Lm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await bu(t,r)}}async function bu(t,e,n){if(!_a(e))throw e;t.Au.add(1),await Ia(t),t.Pu.set("Offline"),n||(n=()=>cA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Lc(t)})}function yA(t,e){return e().catch(n=>bu(t,n,e))}async function Fc(t){const e=me(t),n=br(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;cO(e);)try{const i=await QD(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,hO(e,i)}catch(i){await bu(e,i)}vA(e)&&wA(e)}function cO(t){return _i(t)&&t.Tu.length<10}function hO(t,e){t.Tu.push(e);const n=br(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function vA(t){return _i(t)&&!br(t).qo()&&t.Tu.length>0}function wA(t){br(t).start()}async function dO(t){br(t).au()}async function fO(t){const e=br(t);for(const n of t.Tu)e.ou(n.mutations)}async function pO(t,e,n){const r=t.Tu.shift(),i=Pm.from(r,e,n);await yA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fc(t)}async function mO(t,e){e&&br(t).ru&&await async function(n,r){if(i=r.code,oD(i)&&i!==D.ABORTED){const s=n.Tu.shift();br(n).Go(),await yA(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fc(n)}var i}(t,e),vA(t)&&wA(t)}async function zv(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=_i(n);n.Au.add(3),await Ia(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Lc(n)}async function gO(t,e){const n=me(t);e?(n.Au.delete(2),await Lc(n)):e||(n.Au.add(2),await Ia(n),n.Pu.set("Unknown"))}function Ms(t){return t.Vu||(t.Vu=function(e,n,r){const i=me(e);return i.lu(),new nO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:aO.bind(null,t),co:lO.bind(null,t),eu:uO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Um(t)?Fm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),gA(t))})),t.Vu}function br(t){return t.Su||(t.Su=function(e,n,r){const i=me(e);return i.lu(),new rO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:dO.bind(null,t),co:mO.bind(null,t),cu:fO.bind(null,t),uu:pO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Fc(t)):(await t.Su.stop(),t.Tu.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new jm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zm(t,e){if(qn("AsyncQueue",`${e}: ${t}`),_a(t))return new ie(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.Du=new Be(te.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):he():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new As(e,n,ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this.xu=void 0,this.listeners=[]}}class vO{constructor(){this.queries=new $s(e=>zE(e),bc),this.onlineState="Unknown",this.Nu=new Set}}async function wO(t,e){const n=me(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new yO),i)try{s.xu=await n.onListen(r)}catch(o){const a=zm(o,`Initialization of query '${Tf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Bm(n)}async function SO(t,e){const n=me(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EO(t,e){const n=me(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Bm(n)}function AO(t,e,n){const r=me(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Bm(t){t.Nu.forEach(e=>{e.next()})}class kO{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.key=e}}class EA{constructor(e){this.key=e}}class CO{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=ge(),this.mutatedKeys=ge(),this.Zu=BE(e),this.tc=new ns(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new Bv,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=Dc(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),m=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;f&&g?f.data.isEqual(g.data)?w!==m&&(r.track({type:3,doc:g}),E=!0):this.ic(f,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.Zu(g,l)>0||u&&this.Zu(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),E=!0):f&&!g&&(r.track({type:1,doc:f}),E=!0,(l||u)&&(a=!0)),E&&(g?(o=o.add(g),s=m?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,f){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return g(h)-g(f)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new As(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Bv,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=ge(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new EA(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new SA(r))}),n}ac(e){this.Ju=e.sr,this.Xu=ge();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return As.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class _O{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TO{constructor(e){this.key=e,this.lc=!1}}class xO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new $s(a=>zE(a),bc),this._c=new Map,this.wc=new Set,this.mc=new Be(te.comparator),this.gc=new Map,this.yc=new Nm,this.Ic={},this.Tc=new Map,this.Ec=Es.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function IO(t,e){const n=FO(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await qD(n.localStore,Yn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await RO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&fA(n.remoteStore,o)}return i}async function RO(t,e,n,r,i){t.Rc=(h,f,g)=>async function(w,m,E,p){let d=m.view.nc(E);d.ji&&(d=await Fv(w.localStore,m.query,!1).then(({documents:k})=>m.view.nc(k,d)));const v=p&&p.targetChanges.get(m.targetId),S=m.view.applyChanges(d,w.isPrimaryClient,v);return Hv(w,m.targetId,S.uc),S.snapshot}(t,h,f,g);const s=await Fv(t.localStore,e,!0),o=new CO(e,s.sr),a=o.nc(s.documents),l=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Hv(t,n,u.uc);const c=new _O(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function PO(t,e){const n=me(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!bc(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),pA(n.remoteStore,r.targetId),Df(n,r.targetId)}).catch(Ca)):(Df(n,r.targetId),await bf(n.localStore,r.targetId,!0))}async function bO(t,e,n){const r=UO(t);try{const i=await function(s,o){const a=me(s),l=nt.now(),u=o.reduce((f,g)=>f.add(g.key),ge());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Xn(),w=ge();return a.Xi.getEntries(f,u).next(m=>{g=m,g.forEach((E,p)=>{p.isValidDocument()||(w=w.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(m=>{c=m;const E=[];for(const p of o){const d=tD(p,c.get(p.key).overlayedDocument);d!=null&&E.push(new Ur(p.key,d,OE(d.value.mapValue),gn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,E,o)}).next(m=>{h=m;const E=m.applyToLocalDocumentSet(c,w);return a.documentOverlayCache.saveOverlays(f,m.batchId,E)})}).then(()=>({batchId:h.batchId,changes:HE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new Be(ke)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ra(r,i.changes),await Fc(r.remoteStore)}catch(i){const s=zm(i,"Failed to persist write");n.reject(s)}}async function AA(t,e){const n=me(t);try{const r=await GD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(Oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?Oe(o.lc):i.removedDocuments.size>0&&(Oe(o.lc),o.lc=!1))}),await Ra(n,r,e)}catch(r){await Ca(r)}}function Vv(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=me(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&Bm(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DO(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new Be(te.comparator);o=o.insert(s,At.newNoDocument(s,pe.min()));const a=ge().add(s),l=new $c(pe.min(),new Map,new Be(ke),o,a);await AA(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),Vm(r)}else await bf(r.localStore,e,!1).then(()=>Df(r,e,n)).catch(Ca)}async function OO(t,e){const n=me(t),r=e.batch.batchId;try{const i=await WD(n.localStore,e);CA(n,r,null),kA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await Ca(i)}}async function NO(t,e,n){const r=me(t);try{const i=await function(s,o){const a=me(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Oe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);CA(r,e,n),kA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await Ca(i)}}function kA(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function CA(t,e,n){const r=me(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Df(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||_A(t,r)})}function _A(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(pA(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Vm(t))}function Hv(t,e,n){for(const r of n)r instanceof SA?(t.yc.addReference(r.key,e),$O(t,r)):r instanceof EA?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||_A(t,r.key)):he()}function $O(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.wc.add(r),Vm(t))}function Vm(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new te(Le.fromString(e)),r=t.Ec.next();t.gc.set(r,new TO(n)),t.mc=t.mc.insert(n,r),fA(t.remoteStore,new dr(Yn(jE(n.path)),r,"TargetPurposeLimboResolution",km.ct))}}async function Ra(t,e,n){const r=me(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Mm.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=me(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>$.forEach(l,h=>$.forEach(h.$i,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>$.forEach(h.Fi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!_a(c))throw c;Y("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Hi.get(h),g=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(g);u.Hi=u.Hi.insert(h,w)}}}(r.localStore,s))}async function MO(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await uA(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new ie(D.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.tr)}}function LO(t,e){const n=me(t),r=n.gc.get(e);if(r&&r.lc)return ge().add(r.key);{let i=ge();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function FO(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DO.bind(null,e),e.fc.eu=EO.bind(null,e.eventManager),e.fc.vc=AO.bind(null,e.eventManager),e}function UO(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NO.bind(null,e),e}class Wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return HD(this.persistence,new BD,e.initialUser,this.serializer)}createPersistence(e){return new jD($m.js,this.serializer)}createSharedClientState(e){return new XD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MO.bind(null,this.syncEngine),await gO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vO}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new tO(i));var i;return function(s,o,a,l){return new iO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Vv(this.syncEngine,a,0),o=jv.D()?new jv:new JD,new oO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new xO(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=me(e);Y("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Ia(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=PE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HO(t);Y("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>zv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>zv(e.remoteStore,s)),t._onlineComponents=e}function VO(t){return t.name==="FirebaseError"?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VO(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await Vh(t,new Wv)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Vh(t,new Wv);return t._offlineComponents}async function TA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Gv(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Gv(t,new jO))),t._onlineComponents}function WO(t){return TA(t).then(e=>e.syncEngine)}async function GO(t){const e=await TA(t),n=e.eventManager;return n.onListen=IO.bind(null,e.syncEngine),n.onUnlisten=PO.bind(null,e.syncEngine),n}function KO(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new zO({next:h=>{s.enqueueAndForget(()=>SO(i,c)),h.fromCache&&a.source==="server"?l.reject(new ie(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new kO(o,u,{includeMetadataChanges:!0,Uu:!0});return wO(i,c)}(await GO(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t,e,n){if(!n)throw new ie(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QO(t,e,n,r){if(e===!0&&r===!0)throw new ie(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qv(t){if(!te.isDocumentKey(t))throw new ie(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qv(t){if(te.isDocumentKey(t))throw new ie(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function yi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hm(t);throw new ie(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cb;switch(n.type){case"firstParty":return new pb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ie(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Kv.get(e);n&&(Y("ComponentProvider","Removing Datastore"),Kv.delete(e),n.terminate())}(this),Promise.resolve()}}function qO(t,e,n,r={}){var i;const s=(t=yi(t,Uc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ys("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=St.MOCK_USER;else{o=Dx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ie(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new St(l)}t._authCredentials=new hb(new RE(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rn(this.firestore,e,this._key)}}class jc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jc(this.firestore,e,this._query)}}class Tr extends jc{constructor(e,n,r){super(e,n,jE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rn(this.firestore,null,new te(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function Wm(t,e,...n){if(t=gt(t),xA("collection","path",e),t instanceof Uc){const r=Le.fromString(e,...n);return qv(r),new Tr(t,null,r)}{if(!(t instanceof rn||t instanceof Tr))throw new ie(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return qv(r),new Tr(t.firestore,null,r)}}function Gm(t,e,...n){if(t=gt(t),arguments.length===1&&(e=PE.A()),xA("doc","path",e),t instanceof Uc){const r=Le.fromString(e,...n);return Qv(r),new rn(t,null,new te(r))}{if(!(t instanceof rn||t instanceof Tr))throw new ie(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Qv(r),new rn(t.firestore,t instanceof Tr?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new hA(this,"async_queue_retry"),this.Yc=()=>{const n=Bh();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Bh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new _r;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!_a(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=jm.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&he()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Pa extends Uc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new YO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RA(this),this._firestoreClient.terminate()}}function XO(t,e){const n=typeof t=="object"?t:Bw(),r=typeof t=="string"?t:e||"(default)",i=Vp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Rx("firestore");s&&qO(i,...s)}return i}function IA(t){return t._firestoreClient||RA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RA(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new Tb(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new BO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(Rt.fromBase64String(e))}catch(n){throw new ie(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=/^__.*__$/;class ZO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}class PA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class qm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new qm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Du(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(bA(this.ua)&&JO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class eN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mc(e)}ga(e,n,r,i=!1){return new qm({ua:e,methodName:n,ma:r,path:kt.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function DA(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new eN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tN(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);Ym("Data must be an object, but it was:",o,r);const a=OA(r,o);let l,u;if(s.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=Of(e,h,n);if(!o.contains(f))throw new ie(D.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$A(c,f)||c.push(f)}l=new Vt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new ZO(new Mt(a),l,u)}class Bc extends Km{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bc}}function nN(t,e,n,r){const i=t.ga(1,e,n);Ym("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();Ci(r,(l,u)=>{const c=Xm(e,l,n);u=gt(u);const h=i.fa(c);if(u instanceof Bc)s.push(c);else{const f=Vc(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new Vt(s);return new PA(o,a,i.fieldTransforms)}function rN(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Of(e,r,n)],l=[i];if(s.length%2!=0)throw new ie(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Of(e,s[f])),l.push(s[f+1]);const u=[],c=Mt.empty();for(let f=a.length-1;f>=0;--f)if(!$A(u,a[f])){const g=a[f];let w=l[f];w=gt(w);const m=o.fa(g);if(w instanceof Bc)u.push(g);else{const E=Vc(w,m);E!=null&&(u.push(g),c.set(g,E))}}const h=new Vt(u);return new PA(c,h,o.fieldTransforms)}function Vc(t,e){if(NA(t=gt(t)))return Ym("Unsupported field value:",e,t),OA(t,e);if(t instanceof Km)return function(n,r){if(!bA(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Vc(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return qb(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:Pu(r.serializer,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pu(r.serializer,i)}}if(n instanceof Qm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ks)return{bytesValue:rA(r.serializer,n._byteString)};if(n instanceof rn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Om(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Hm(n)}`)}(t,e)}function OA(t,e){const n={};return bE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,(r,i)=>{const s=Vc(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Qm||t instanceof ks||t instanceof rn||t instanceof Km)}function Ym(t,e,n){if(!NA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hm(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Of(t,e,n){if((e=gt(e))instanceof zc)return e._internalPath;if(typeof e=="string")return Xm(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const iN=new RegExp("[~\\*/\\[\\]]");function Xm(t,e,n){if(e.search(iN)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zc(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ie(D.INVALID_ARGUMENT,a+t+l)}function $A(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(LA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sN extends MA{data(){return super.data()}}function LA(t,e){return typeof e=="string"?Xm(t,e):e instanceof zc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aN{convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qm(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_m(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jo(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Oe(lA(r));const i=new Zo(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uN extends MA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(LA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Dl extends uN{data(e={}){return super.data(e)}}class cN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ol(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Dl(this._firestore,this._userDataWriter,r.key,r,new ol(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Dl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ol(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Dl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ol(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:hN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class dN extends aN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rn(this.firestore,null,n)}}function FA(t){t=yi(t,jc);const e=yi(t.firestore,Pa),n=IA(e),r=new dN(e);return oN(t._query),KO(n,t._query).then(i=>new cN(e,r,t,i))}function fN(t,e,n,...r){t=yi(t,rn);const i=yi(t.firestore,Pa),s=DA(i);let o;return o=typeof(e=gt(e))=="string"||e instanceof zc?rN(s,"updateDoc",t._key,e,n,r):nN(s,"updateDoc",t._key,e),Jm(i,[o.toMutation(t._key,gn.exists(!0))])}function pN(t){return Jm(yi(t.firestore,Pa),[new Rm(t._key,gn.none())])}function mN(t,e){const n=yi(t.firestore,Pa),r=Gm(t),i=lN(t.converter,e);return Jm(n,[tN(DA(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,gn.exists(!1))]).then(()=>r)}function Jm(t,e){return function(n,r){const i=new _r;return n.asyncQueue.enqueueAndForget(async()=>bO(await WO(n),r,i)),i.promise}(IA(t),e)}(function(t,e=!0){(function(n){Ns=n})(Is),ms(new ci("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Pa(new db(n.getProvider("auth-internal")),new gb(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ie(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Cr(yv,"3.11.0",t),Cr(yv,"3.11.0","esm2017")})();const gN={apiKey:"AIzaSyAhS7KVs9vbQ4WoG-eJbMgwu7kP_hPAzW4",authDomain:"cryptocoins-823ba.firebaseapp.com",projectId:"cryptocoins-823ba",storageBucket:"cryptocoins-823ba.appspot.com",messagingSenderId:"886301284158",appId:"1:886301284158:web:b0e69f92fe03396881fe6f",measurementId:"G-7VG9DE3DFH"},UA=zw(gN),Wt=sP(UA),yN=new $n,ra=XO(UA);var vN={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function wN(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return vN[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function Hh(t){var e=wN(t);return"".concat(e.value).concat(e.unit)}var SN=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},Ou=globalThis&&globalThis.__assign||function(){return Ou=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ou.apply(this,arguments)},EN=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},AN=SN("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Qt(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,c=u===void 0?15:u,h=t.margin,f=h===void 0?2:h,g=EN(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),w=Ou({display:"inherit"},l),m=function(E){return{display:"inline-block",backgroundColor:i,width:Hh(c),height:Hh(c),margin:Hh(f),borderRadius:"100%",animation:"".concat(AN," ").concat(.7/o,"s ").concat(E%2?"0s":"".concat(.35/o,"s")," infinite linear"),animationFillMode:"both"}};return n?C.createElement("span",Ou({style:w},g),C.createElement("span",{style:m(1)}),C.createElement("span",{style:m(2)}),C.createElement("span",{style:m(3)})):null}const kN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cEFgwVIqyocY0AAAD4SURBVFjD7ZdBDoMgEEW1dxD18J6FRFdi3IBRT8PvgibVBFKEGbtoWZlAeA+Vz1AU//ZqsF0HKyVsVfEx6hqYZ2AYPJ1SAgCgNYeEgy+LY4yjZ0BVAVoDAOy2AU1DBxcCMMbB1zU4N4dENJxD4gS/MheFRDKcQiIbniNBBk+RIIeHJdrWP4YBHiPBmSEfJW6DvyWOwWLM6dkKwQr3vonMlT/otMryptV/8RP4friYLcoGD/cRS8RsNTaJa1FMLJF2GBFJ5B3HmRI0BUmiBG1JdlGCpyg9xva+ByV4y/IICUApzkg9S8yzR6DvYaeJM8+dhFLeq9nPtifDVxRcXOY5vwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNC0yMlQxMjoyMTozNCswMDowML8t1sYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDQtMjJUMTI6MjE6MzQrMDA6MDDOcG56AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA0LTIyVDEyOjIxOjM0KzAwOjAwmWVPpQAAAABJRU5ErkJggg==",CN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHkSURBVHic7ZtbTgIxFECPLseNGD9AExCMj+WyAl2AEIOJSxAS/BhvVJiBzkxve2+dk/ij6bTnDOHRIgwMDAz85QJYAC/AKPNaYjAB1sAbcBUyYAHsvn82wExtafo8AFt+fFYhg55/DfAcYV9+ByxDBo6opD1HuOdQfgOMQy8wBT73LrClqmqdGYc3cEsVpRUeI0STFzxFiC4veIigJi9YjqAuL0wbJsoZIZm8YClCk7z6WixEyCYv5IyQXV7IEcGMvJAygjl5IUWE2wRz9EIzgnl5QSOCG3khZgR38kJThMcW13ArL/SJ4F5e6BKhGHmhTYTi5IWQCMXKC8ciFC8vzKnfba773TzTGtWpeyQUf+f3aYqQRf489YTAWce/FUHdE16fd4yuaPMkeJdpjWoce6mL8dnBNCGv88VGaPMmp7gIXfYGionQZ2PEfYQYu0JuI8TcEnMXQWNT1E0EzW1x8xFSHIyYjZDyaMxchByHo2Yi5Dweb5r7KcHcRxeQ8i5ki2BB/tRa1CJYkj+1pugRLMoL6hEsywtqETzIC01f5uwcwZO8EC2CR3mhd4Rr/O/UNn2jbBIyeFkz0JO8UBfhI2TgK/7lhf0I7wScPl1SPQpWwI3m6hIxphJfE/hvcwMDA/+HL+b4S/7d8cBjAAAAAElFTkSuQmCC",_N=T.img`
  transition: 0.2s;
  cursor: pointer;
  width: 20px;
  &:hover {
    transform: scale(0.9);
  }
  @media ${z.tablet} {
    width: 32px;
  }
`,jr=({onClick:t,color:e})=>y(_N,{onClick:t,src:e==="black"?CN:kN});function qe(t){let e,n=Math.abs(t);if(n>=1e3)e=n.toLocaleString();else for(e=n.toPrecision(5);(e.endsWith("0")||e.endsWith("."))&&e.indexOf(".")!==-1;)e=e.substring(0,e.length-1);return t>0?e:`-${e}`}const TN=T.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${t=>t.theme.colors.backgroundTransparent};
  z-index: 3;
  width: 100vw;
  height: 100vh;
`,jA=T.div`
  display: flex;
  flex-direction: column;
  background-color: ${t=>t.theme.colors.backgroundSecond};
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 15px;
  @media ${z.tablet} {
    width: auto;
    min-width: 500px;
    padding: 20px;
    border-radius: 20px;
  }
`,zA=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`,xN=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    max-height: 40px;
  }
`,IN=T.div`
  font-weight: 500;
`,Wh=T.div`
  display: flex;
  gap: 10px;
  @media ${z.tablet} {
    gap: 20px;
  }
`,al=T.div`
  display: flex;
  gap: 5px;
`,Dn=T.label`
  font-weight: 700;
`,ll=T.div`
  font-weight: 700;
  color: ${({positive:t})=>t?"rgb(0, 220, 0)":"red"};
`,RN=T.div`
  display: flex;
  justify-content: center;
`,PN=T.button`
  background-color: ${t=>t.theme.colors.main};
  justify-content: center;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
  @media ${z.tablet} {
    font-size: 16px;
  }
`,bN=({coin:t,setShowDetails:e,setAddTransaction:n})=>_(jA,{children:[_(zA,{children:[_(xN,{children:[_("div",{children:["#Rank: ",t.market_cap_rank]}),y("img",{src:t.image.large}),y("div",{children:t.name}),y(IN,{children:t.symbol.toUpperCase()})]}),y(jr,{onClick:()=>e(null)})]}),_(Wh,{children:[_("div",{children:[y(Dn,{children:"Price: "}),qe(t.market_data.current_price.usd),"$"]}),_("div",{children:[y(Dn,{children:"Market Cap: "}),t.market_data.market_cap.usd.toLocaleString(),"$"]})]}),_(Wh,{children:[y(Dn,{children:"Price change:"}),_(al,{children:[y(Dn,{children:"1h: "}),_(ll,{positive:t.market_data.price_change_percentage_1h_in_currency.usd>0,children:[t.market_data.price_change_percentage_1h_in_currency.usd>0?"+":"",t.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2),"%"]})]}),_(al,{children:[y(Dn,{children:"24h: "}),_(ll,{positive:t.market_data.price_change_percentage_24h>0,children:[t.market_data.price_change_percentage_24h>0?"+":"",t.market_data.price_change_percentage_24h.toFixed(2),"%"]})]}),_(al,{children:[y(Dn,{children:"7d: "}),_(ll,{positive:t.market_data.price_change_percentage_7d>0,children:[t.market_data.price_change_percentage_7d>0?"+":"",t.market_data.price_change_percentage_7d.toFixed(2),"%"]})]})]}),_(Wh,{children:[_("div",{children:[y(Dn,{children:"ATH: "}),qe(t.market_data.ath.usd),"$"]}),_("div",{children:[y(Dn,{children:"Date: "}),t.market_data.ath_date.usd.slice(0,10)]}),_(al,{children:[y(Dn,{children:"Change: "}),_(ll,{positive:t.market_data.ath_change_percentage.usd>0,children:[t.market_data.ath_change_percentage.usd>0?"+":"",t.market_data.ath_change_percentage.usd.toFixed(2),"%"]})]})]}),y(RN,{children:y(PN,{onClick:()=>{e(null),n(t.id)},children:"Add Transaction"})})]}),DN=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
`,zr=()=>y(DN,{children:"Cannot fetch the data. Please, try later."}),Zm=({coinId:t,setShowDetails:e,setAddTransaction:n})=>{const[r,i]=C.useState(),[s,o]=C.useState(!0),a=`https://api.coingecko.com/api/v3/coins/${t}`;return C.useEffect(()=>{(async()=>{o(!0);try{const c=await(await fetch(a)).json();i(c)}catch(u){console.error(u)}finally{o(!1)}})()},[]),y(TN,{children:s?y(Qt,{color:"#ffffff"}):r!=null&&r.id?y(bN,{coin:r,setAddTransaction:n,setShowDetails:e}):_(jA,{children:[_(zA,{children:[y("div",{children:"Coin"}),y(jr,{onClick:()=>n(null)})]}),y(zr,{})]})})},rs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cFBAgxE8znjmkAAAGpSURBVFjD7ZQ9T8JQFIbPbTGlSCSyEP4Lf4LNIAxsdiSOshKZCGEhDK6aMPEjmBA3w8JSGWChNWm6cl6HErEfSVtsdek73bb3vM9zaQNRjACqCm61wNMpsF6DbRts2856OgW3WkA+H6czBrzRADYbhObjA7i5SRAsy0C/Hw72ZjIBX1wkIDAex4cfw09Pv4RrWnDzdguMRs5zTXPW223w3ru7M+HlMmCa/lMNBoCq+vcXCsBw6BcwTeD6Or4Ad7v+sl4vXPzx0T/38HCGwOuru+T9HZDl8LlcDlit3LOLRUy4ogDM7pJOJ/rru7/3vDcGK0rQXimwQVSrREK4W5fL6Ed4e/MUCqJKJboArq78Ny0r+k/4+em/WSpFF/CePpEEd0pxa5LOvwvkfl4Askyo10nUar6dot0GdrtotdVq8Px8TjSbCXE4BI4BLy9n/+9HzvOzy+sbzsUiCctK5wP8GWZCqSQk2yZyfQOXl+nDiYgkyWEdr9IHhuhkAplAJpAJZAKnJfB32BPrJCD2eyLDSB9uGA7LIyAEM1GzSaTr6cF1nXB767CcfAEUJ1uTfotV3QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNS0wNFQwODo0OToxOSswMDowMJCixOcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDUtMDRUMDg6NDk6MTkrMDA6MDDh/3xbAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA1LTA0VDA4OjQ5OjE5KzAwOjAwtupdhAAAAABJRU5ErkJggg==",is="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cFBAgxJppUSkoAAAFvSURBVFjD7ZU9roJAFIVnJlqBJi5AG+MSNFrYWGJlogWtG1GX4s82XAEFrQWGGDDRwg5INGbOK4gvjEhgVGLDSaZg5nDPl5uBS4iEAMaA0QjYbMAtC9zzwmVZwHodnjEmUzN7OO90wE0TaeKmCd5ufzl8MgGCIDX8X0EAPh5/KbzfB67X7OEP3W7AYPBheLUKnM9PPebAcgl0u4CihKvXA1ar8Cyq0wm8UnkfAIuFWPB+B3Q92a/roSeq2ewDANuWLRaD5vv9m+1vtcRCngcoSvp7qgr4vgjebCb5k79ZWq+LG4ZBqe+nAVDmeYQYhrjbaMgDkFpNrHy5ZO+fbYttKZeTnKXkXjJGaPSZ88z5mM8JBQhUldDdjtDtVh7gA1F2OBAynWbx5vPfllAB8HOAmIDhEHBd+eGTJtcFNC0DQB7hDznOcx6NAwB5dphSKmT+/A4UAAVAAVAAFAAvAI7H/OJcN9UCaFo+E9FxXo3jP8yFq4QgmI/ZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA1LTA0VDA4OjQ5OjM4KzAwOjAwdPDILgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNS0wNFQwODo0OTozOCswMDowMAWtcJIAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDUtMDRUMDg6NDk6MzgrMDA6MDBSuFFNAAAAAElFTkSuQmCC",ON=T.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${t=>t.theme.colors.backgroundTransparent};
  z-index: 3;
  width: 100vw;
  height: 100vh;
`,BA=T.div`
  display: flex;
  flex-direction: column;
  background-color: ${t=>t.theme.colors.backgroundSecond};
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  @media ${z.tablet} {
    width: auto;
    min-width: 500px;
    padding: 20px;
    border-radius: 20px;
  }
`,VA=T.div`
  display: flex;
  justify-content: space-between;
`,NN=T.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0 10px;
  img {
    width: 35px;
  }
  @media ${z.tablet} {
    font-size: 24px;
    gap: 10px;
    margin: 10px 0 20px;
    img {
      width: 40px;
    }
  }
`,$N=T.div`
  display: flex;
  justify-content: space-between;
`,MN=T.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  row-gap: 10px;
  align-items: center;
  img {
    cursor: pointer;
    height: 80%;
    padding-left: 5px;
  }
`,ul=T.input`
  padding: 6px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    background-color: ${t=>t.theme.colors.interaction};
  }
  :disabled {
    background-color: ${t=>t.theme.colors.disabledInput};
  }
  @media ${z.tablet} {
    padding: 8px;
    border-radius: 10px;
    font-size: 16px;
  }
`,LN=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,Xv=T.button`
  background-color: ${t=>t.theme.colors.main};
  border: none;
  width: 60px;
  height: 30px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
  @media ${z.tablet} {
    width: 80px;
    height: 40px;
    border-radius: 8px;
    font-size: 14px;
  }
`,FN=({coin:t,coinId:e,setAddTransaction:n})=>{const[r,i]=C.useState(0),[s,o]=C.useState(t.market_data.current_price.usd),[a,l]=C.useState(0),[u,c]=C.useState("inTotal"),[h,f]=C.useState(new Date().toISOString().slice(0,10)),g=async m=>{var d;const E=(d=Wt.currentUser)==null?void 0:d.uid,p=Wm(ra,"users",`${E}`,"transactions");try{await mN(p,{name:t==null?void 0:t.name,symbol:t==null?void 0:t.symbol,coinId:e,amount:r,price:s,date:h,type:m})}catch(v){console.error(v)}},w=(m,E)=>{E=="amount"&&(i(m),u==="price"&&o(m*a),u==="inTotal"&&l(m*s)),E=="price"&&(o(m),u==="amount"&&i(m*a),u==="inTotal"&&l(m*r)),E=="inTotal"&&(l(m),u==="amount"&&i(m/s),u==="price"&&o(m/r))};return _(BA,{children:[_(VA,{children:[y("div",{children:"Add transaction"}),y(jr,{onClick:()=>n(null)})]}),_(NN,{children:[y("div",{children:t.symbol.toUpperCase()}),y("img",{src:t.image.large})]}),_($N,{children:[_(MN,{children:[y("label",{children:"Amount:"}),y(ul,{disabled:u==="amount",value:u==="amount"?Number(r.toPrecision(5)):r,type:"number",onChange:m=>w(Number(m.target.value),"amount")}),y("img",{onClick:()=>c("amount"),src:u==="amount"?rs:is,alt:"lock"}),y("label",{children:"Price($):"}),y(ul,{disabled:u==="price",value:u==="price"?Number(s.toPrecision(5)):s,type:"number",onChange:m=>w(Number(m.target.value),"price")}),y("img",{onClick:()=>c("price"),src:u==="price"?rs:is,alt:"lock"}),y("label",{children:"In total($):"}),y(ul,{disabled:u==="inTotal",value:Number(a.toFixed(2)),type:"number",onChange:m=>w(Number(m.target.value),"inTotal")}),y("img",{onClick:()=>c("inTotal"),src:u==="inTotal"?rs:is,alt:"lock"}),y("label",{children:"Date:"}),y(ul,{type:"date",defaultValue:new Date().toISOString().slice(0,10),onChange:m=>f(m.target.value)})]}),_(LN,{children:[y(Xv,{onClick:()=>g("buy"),children:"BUY!"}),y(Xv,{onClick:()=>g("sell"),children:"SELL!"})]})]})]})},eg=({coinId:t,setAddTransaction:e})=>{const[n,r]=C.useState(),[i,s]=C.useState(!0),o=`https://api.coingecko.com/api/v3/coins/${t}`;return C.useEffect(()=>{(async()=>{s(!0);try{const u=await(await fetch(o)).json();r(u)}catch(l){console.error(l)}finally{s(!1)}})()},[]),y(ON,{children:i?y(Qt,{color:"#ffffff"}):n!=null&&n.symbol?y(FN,{coinId:t,coin:n,setAddTransaction:e}):_(BA,{children:[_(VA,{children:[y("div",{children:"Change transaction"}),y(jr,{onClick:()=>e(null)})]}),y(zr,{})]})})},UN=T.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${t=>t.theme.colors.background};
  align-self: flex-start;
  justify-self: flex-end;
  padding: 15px 0 10px;
  left: 0;
  color: white;
  box-shadow: ${t=>t.theme.boxShadow.dark};
  transition: 0.5s;
  z-index: 1;
  visibility: ${({active:t})=>t?"visible":"hidden"};
  transform: ${({active:t})=>t?"translateY(-15px)":"translateY(-130%)"};
  @media ${z.tablet} {
    width: 200%;
    left: -100%;
  }
`,jN=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 15px;
`,zN=T.input`
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    background-color: ${t=>t.theme.colors.interaction};
  }
`,BN=T.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`,VN=T.div`
  font-weight: 500;
`,HN=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background-color: ${t=>t.theme.colors.hoverDark};
  }
`,WN=T.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,GN=({coin:t,setShowDetails:e})=>_(HN,{onClick:()=>e(t.id),children:[_(WN,{children:[y("img",{src:t.thumb}),y("div",{children:t.name}),y(VN,{children:t.symbol})]}),_("div",{children:["#",t.market_cap_rank]})]}),KN=T.header`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: ${({scroll:t})=>t?e=>e.theme.colors.background:"none"};
  box-shadow: ${({scroll:t})=>t?e=>e.theme.boxShadow.dark:"none"};
  transition: 0.3s;
  top: 0;
`,QN=T.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media ${z.desktop} {
    width: 1024px;
    padding: 15px 0;
  }
`,qN=T.h1`
  cursor: pointer;
`,YN=T.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 10px;

  @media ${z.tablet} {
    position: relative;
    gap: 40px;
  }
`,Nf=T.div`
  cursor: pointer;
  transition: 0.2s;
  @media ${z.desktop} {
    &:hover {
      transform: translateY(2px);
      text-shadow: 0.4px 0.4px 1px white;
    }
    &:active {
      transform: translateY(4px);
      transition: 0.2s;
    }
  }
`,XN=({setSearch:t,search:e})=>{const[n,r]=C.useState(),[i,s]=C.useState(""),[o,a]=C.useState(),[l,u]=C.useState(null),[c,h]=C.useState(null),[f,g]=C.useState(!0),w=`https://api.coingecko.com/api/v3/search?query=${i}`;C.useEffect(()=>{(async()=>{g(!0);try{const d=await(await fetch(w)).json();r(d.coins.slice(0,6))}catch(p){console.error(p)}finally{g(!1)}})()},[i]);const m=()=>{const E=setTimeout(()=>{!c&&!l&&t(!1)},3e3);a(E)};return _(sn,{children:[_(UN,{active:e,onMouseLeave:()=>m(),onMouseEnter:()=>clearTimeout(o),children:[_(jN,{children:[y(zN,{value:i,onChange:E=>s(E.target.value),placeholder:"Search crypto name",type:"search"}),y(jr,{onClick:()=>t(!1)})]}),y(BN,{children:f?y(Qt,{color:"#ffffff"}):n==null?void 0:n.map(E=>y(GN,{coin:E,setShowDetails:h},E.id))})]}),y(Nf,{onClick:()=>t(!0),children:"Search"}),l&&y(eg,{coinId:l,setAddTransaction:u}),c&&y(Zm,{setShowDetails:h,coinId:c,setAddTransaction:u})]})};var Dr={},JN={get exports(){return Dr},set exports(t){Dr=t}};(function(t,e){(function(r,i){t.exports=i(C)})(ZA,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,l)=>{l.match=w,l.parse=m;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,g=/(dpi|dpcm|dppx)?$/;function w(v,S){return m(v).some(function(k){var R=k.inverse,I=k.type==="all"||S.type===k.type;if(I&&R||!(I||R))return!1;var b=k.expressions.every(function(P){var M=P.feature,ne=P.modifier,X=P.value,q=S[M];if(!q)return!1;switch(M){case"orientation":case"scan":return q.toLowerCase()===X.toLowerCase();case"width":case"height":case"device-width":case"device-height":X=d(X),q=d(q);break;case"resolution":X=p(X),q=p(q);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":X=E(X),q=E(q);break;case"grid":case"color":case"color-index":case"monochrome":X=parseInt(X,10)||1,q=parseInt(q,10)||0;break}switch(ne){case"min":return q>=X;case"max":return q<=X;default:return q===X}});return b&&!R||!b&&R})}function m(v){return v.split(",").map(function(S){S=S.trim();var k=S.match(u),R=k[1],I=k[2],b=k[3]||"",P={};return P.inverse=!!R&&R.toLowerCase()==="not",P.type=I?I.toLowerCase():"all",b=b.match(/\([^\)]+\)/g)||[],P.expressions=b.map(function(M){var ne=M.match(c),X=ne[1].toLowerCase().match(h);return{modifier:X[1],feature:X[2],value:ne[2]}}),P})}function E(v){var S=Number(v),k;return S||(k=v.match(/^(\d+)\s*\/\s*(\d+)$/),S=k[1]/k[2]),S}function p(v){var S=parseFloat(v),k=String(v).match(g)[1];switch(k){case"dpcm":return S/2.54;case"dppx":return S*96;default:return S}}function d(v){var S=parseFloat(v),k=String(v).match(f)[1];switch(k){case"em":return S*16;case"rem":return S*16;case"cm":return S*96/2.54;case"mm":return S*96/2.54/10;case"in":return S*96;case"pt":return S*72;case"pc":return S*72/12;default:return S}}},"./node_modules/hyphenate-style-name/index.js":(a,l,u)=>{u.r(l),u.d(l,{default:()=>m});var c=/[A-Z]/g,h=/^ms-/,f={};function g(E){return"-"+E.toLowerCase()}function w(E){if(f.hasOwnProperty(E))return f[E];var p=E.replace(c,g);return f[E]=h.test(p)?"-"+p:p}const m=w},"./node_modules/matchmediaquery/index.js":(a,l,u)=>{var c=u("./node_modules/css-mediaquery/index.js").match,h=typeof window<"u"?window.matchMedia:null;function f(w,m,E){var p=this;if(h&&!E){var d=h.call(window,w);this.matches=d.matches,this.media=d.media,d.addListener(k)}else this.matches=c(w,m),this.media=w;this.addListener=v,this.removeListener=S,this.dispose=R;function v(I){d&&d.addListener(I)}function S(I){d&&d.removeListener(I)}function k(I){p.matches=I.matches,p.media=I.media}function R(){d&&d.removeListener(k)}}function g(w,m,E){return new f(w,m,E)}a.exports=g},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function h(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}function f(){try{if(!Object.assign)return!1;var g=new String("abc");if(g[5]="de",Object.getOwnPropertyNames(g)[0]==="5")return!1;for(var w={},m=0;m<10;m++)w["_"+String.fromCharCode(m)]=m;var E=Object.getOwnPropertyNames(w).map(function(d){return w[d]});if(E.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(d){p[d]=d}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=f()?Object.assign:function(g,w){for(var m,E=h(g),p,d=1;d<arguments.length;d++){m=Object(arguments[d]);for(var v in m)u.call(m,v)&&(E[v]=m[v]);if(l){p=l(m);for(var S=0;S<p.length;S++)c.call(m,p[S])&&(E[p[S]]=m[p[S]])}}return E}},"./node_modules/prop-types/checkPropTypes.js":(a,l,u)=>{var c=function(){};{var h=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),f={},g=u("./node_modules/prop-types/lib/has.js");c=function(m){var E="Warning: "+m;typeof console<"u"&&console.error(E);try{throw new Error(E)}catch{}}}function w(m,E,p,d,v){for(var S in m)if(g(m,S)){var k;try{if(typeof m[S]!="function"){var R=Error((d||"React class")+": "+p+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof m[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}k=m[S](E,S,d,p,null,h)}catch(b){k=b}if(k&&!(k instanceof Error)&&c((d||"React class")+": type specification of "+p+" `"+S+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in f)){f[k.message]=!0;var I=v?v():"";c("Failed "+p+" type: "+k.message+(I??""))}}}w.resetWarningCache=function(){f={}},a.exports=w},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,l,u)=>{var c=u("./node_modules/react-is/index.js"),h=u("./node_modules/object-assign/index.js"),f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g=u("./node_modules/prop-types/lib/has.js"),w=u("./node_modules/prop-types/checkPropTypes.js"),m=function(){};m=function(p){var d="Warning: "+p;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function E(){return null}a.exports=function(p,d){var v=typeof Symbol=="function"&&Symbol.iterator,S="@@iterator";function k(x){var N=x&&(v&&x[v]||x[S]);if(typeof N=="function")return N}var R="<<anonymous>>",I={array:ne("array"),bigint:ne("bigint"),bool:ne("boolean"),func:ne("function"),number:ne("number"),object:ne("object"),string:ne("string"),symbol:ne("symbol"),any:X(),arrayOf:q,element:Ce(),elementType:_e(),instanceOf:Xe,node:ae(),objectOf:L,oneOf:Je,oneOfType:re,shape:U,exact:V};function b(x,N){return x===N?x!==0||1/x===1/N:x!==x&&N!==N}function P(x,N){this.message=x,this.data=N&&typeof N=="object"?N:{},this.stack=""}P.prototype=Error.prototype;function M(x){var N={},j=0;function Z(Q,ee,G,se,ve,oe,W){if(se=se||R,oe=oe||G,W!==f){if(d){var Ne=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Ne.name="Invariant Violation",Ne}else if(typeof console<"u"){var Fe=se+":"+G;!N[Fe]&&j<3&&(m("You are manually calling a React.PropTypes validation function for the `"+oe+"` prop on `"+se+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),N[Fe]=!0,j++)}}return ee[G]==null?Q?ee[G]===null?new P("The "+ve+" `"+oe+"` is marked as required "+("in `"+se+"`, but its value is `null`.")):new P("The "+ve+" `"+oe+"` is marked as required in "+("`"+se+"`, but its value is `undefined`.")):null:x(ee,G,se,ve,oe)}var J=Z.bind(null,!1);return J.isRequired=Z.bind(null,!0),J}function ne(x){function N(j,Z,J,Q,ee,G){var se=j[Z],ve=A(se);if(ve!==x){var oe=fe(se);return new P("Invalid "+Q+" `"+ee+"` of type "+("`"+oe+"` supplied to `"+J+"`, expected ")+("`"+x+"`."),{expectedType:x})}return null}return M(N)}function X(){return M(E)}function q(x){function N(j,Z,J,Q,ee){if(typeof x!="function")return new P("Property `"+ee+"` of component `"+J+"` has invalid PropType notation inside arrayOf.");var G=j[Z];if(!Array.isArray(G)){var se=A(G);return new P("Invalid "+Q+" `"+ee+"` of type "+("`"+se+"` supplied to `"+J+"`, expected an array."))}for(var ve=0;ve<G.length;ve++){var oe=x(G,ve,J,Q,ee+"["+ve+"]",f);if(oe instanceof Error)return oe}return null}return M(N)}function Ce(){function x(N,j,Z,J,Q){var ee=N[j];if(!p(ee)){var G=A(ee);return new P("Invalid "+J+" `"+Q+"` of type "+("`"+G+"` supplied to `"+Z+"`, expected a single ReactElement."))}return null}return M(x)}function _e(){function x(N,j,Z,J,Q){var ee=N[j];if(!c.isValidElementType(ee)){var G=A(ee);return new P("Invalid "+J+" `"+Q+"` of type "+("`"+G+"` supplied to `"+Z+"`, expected a single ReactElement type."))}return null}return M(x)}function Xe(x){function N(j,Z,J,Q,ee){if(!(j[Z]instanceof x)){var G=x.name||R,se=Re(j[Z]);return new P("Invalid "+Q+" `"+ee+"` of type "+("`"+se+"` supplied to `"+J+"`, expected ")+("instance of `"+G+"`."))}return null}return M(N)}function Je(x){if(!Array.isArray(x))return arguments.length>1?m("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):m("Invalid argument supplied to oneOf, expected an array."),E;function N(j,Z,J,Q,ee){for(var G=j[Z],se=0;se<x.length;se++)if(b(G,x[se]))return null;var ve=JSON.stringify(x,function(W,Ne){var Fe=fe(Ne);return Fe==="symbol"?String(Ne):Ne});return new P("Invalid "+Q+" `"+ee+"` of value `"+String(G)+"` "+("supplied to `"+J+"`, expected one of "+ve+"."))}return M(N)}function L(x){function N(j,Z,J,Q,ee){if(typeof x!="function")return new P("Property `"+ee+"` of component `"+J+"` has invalid PropType notation inside objectOf.");var G=j[Z],se=A(G);if(se!=="object")return new P("Invalid "+Q+" `"+ee+"` of type "+("`"+se+"` supplied to `"+J+"`, expected an object."));for(var ve in G)if(g(G,ve)){var oe=x(G,ve,J,Q,ee+"."+ve,f);if(oe instanceof Error)return oe}return null}return M(N)}function re(x){if(!Array.isArray(x))return m("Invalid argument supplied to oneOfType, expected an instance of array."),E;for(var N=0;N<x.length;N++){var j=x[N];if(typeof j!="function")return m("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+F(j)+" at index "+N+"."),E}function Z(J,Q,ee,G,se){for(var ve=[],oe=0;oe<x.length;oe++){var W=x[oe],Ne=W(J,Q,ee,G,se,f);if(Ne==null)return null;Ne.data&&g(Ne.data,"expectedType")&&ve.push(Ne.data.expectedType)}var Fe=ve.length>0?", expected one of type ["+ve.join(", ")+"]":"";return new P("Invalid "+G+" `"+se+"` supplied to "+("`"+ee+"`"+Fe+"."))}return M(Z)}function ae(){function x(N,j,Z,J,Q){return B(N[j])?null:new P("Invalid "+J+" `"+Q+"` supplied to "+("`"+Z+"`, expected a ReactNode."))}return M(x)}function Ee(x,N,j,Z,J){return new P((x||"React class")+": "+N+" type `"+j+"."+Z+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+J+"`.")}function U(x){function N(j,Z,J,Q,ee){var G=j[Z],se=A(G);if(se!=="object")return new P("Invalid "+Q+" `"+ee+"` of type `"+se+"` "+("supplied to `"+J+"`, expected `object`."));for(var ve in x){var oe=x[ve];if(typeof oe!="function")return Ee(J,Q,ee,ve,fe(oe));var W=oe(G,ve,J,Q,ee+"."+ve,f);if(W)return W}return null}return M(N)}function V(x){function N(j,Z,J,Q,ee){var G=j[Z],se=A(G);if(se!=="object")return new P("Invalid "+Q+" `"+ee+"` of type `"+se+"` "+("supplied to `"+J+"`, expected `object`."));var ve=h({},j[Z],x);for(var oe in ve){var W=x[oe];if(g(x,oe)&&typeof W!="function")return Ee(J,Q,ee,oe,fe(W));if(!W)return new P("Invalid "+Q+" `"+ee+"` key `"+oe+"` supplied to `"+J+"`.\nBad object: "+JSON.stringify(j[Z],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(x),null,"  "));var Ne=W(G,oe,J,Q,ee+"."+oe,f);if(Ne)return Ne}return null}return M(N)}function B(x){switch(typeof x){case"number":case"string":case"undefined":return!0;case"boolean":return!x;case"object":if(Array.isArray(x))return x.every(B);if(x===null||p(x))return!0;var N=k(x);if(N){var j=N.call(x),Z;if(N!==x.entries){for(;!(Z=j.next()).done;)if(!B(Z.value))return!1}else for(;!(Z=j.next()).done;){var J=Z.value;if(J&&!B(J[1]))return!1}}else return!1;return!0;default:return!1}}function le(x,N){return x==="symbol"?!0:N?N["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&N instanceof Symbol:!1}function A(x){var N=typeof x;return Array.isArray(x)?"array":x instanceof RegExp?"object":le(N,x)?"symbol":N}function fe(x){if(typeof x>"u"||x===null)return""+x;var N=A(x);if(N==="object"){if(x instanceof Date)return"date";if(x instanceof RegExp)return"regexp"}return N}function F(x){var N=fe(x);switch(N){case"array":case"object":return"an "+N;case"boolean":case"date":case"regexp":return"a "+N;default:return N}}function Re(x){return!x.constructor||!x.constructor.name?R:x.constructor.name}return I.checkPropTypes=w,I.resetWarningCache=w.resetWarningCache,I.PropTypes=I,I}},"./node_modules/prop-types/index.js":(a,l,u)=>{{var c=u("./node_modules/react-is/index.js"),h=!0;a.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,h)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=l},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,h=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,g=u?Symbol.for("react.strict_mode"):60108,w=u?Symbol.for("react.profiler"):60114,m=u?Symbol.for("react.provider"):60109,E=u?Symbol.for("react.context"):60110,p=u?Symbol.for("react.async_mode"):60111,d=u?Symbol.for("react.concurrent_mode"):60111,v=u?Symbol.for("react.forward_ref"):60112,S=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,R=u?Symbol.for("react.memo"):60115,I=u?Symbol.for("react.lazy"):60116,b=u?Symbol.for("react.block"):60121,P=u?Symbol.for("react.fundamental"):60117,M=u?Symbol.for("react.responder"):60118,ne=u?Symbol.for("react.scope"):60119;function X(W){return typeof W=="string"||typeof W=="function"||W===f||W===d||W===w||W===g||W===S||W===k||typeof W=="object"&&W!==null&&(W.$$typeof===I||W.$$typeof===R||W.$$typeof===m||W.$$typeof===E||W.$$typeof===v||W.$$typeof===P||W.$$typeof===M||W.$$typeof===ne||W.$$typeof===b)}function q(W){if(typeof W=="object"&&W!==null){var Ne=W.$$typeof;switch(Ne){case c:var Fe=W.type;switch(Fe){case p:case d:case f:case w:case g:case S:return Fe;default:var ue=Fe&&Fe.$$typeof;switch(ue){case E:case v:case I:case R:case m:return ue;default:return Ne}}case h:return Ne}}}var Ce=p,_e=d,Xe=E,Je=m,L=c,re=v,ae=f,Ee=I,U=R,V=h,B=w,le=g,A=S,fe=!1;function F(W){return fe||(fe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Re(W)||q(W)===p}function Re(W){return q(W)===d}function x(W){return q(W)===E}function N(W){return q(W)===m}function j(W){return typeof W=="object"&&W!==null&&W.$$typeof===c}function Z(W){return q(W)===v}function J(W){return q(W)===f}function Q(W){return q(W)===I}function ee(W){return q(W)===R}function G(W){return q(W)===h}function se(W){return q(W)===w}function ve(W){return q(W)===g}function oe(W){return q(W)===S}l.AsyncMode=Ce,l.ConcurrentMode=_e,l.ContextConsumer=Xe,l.ContextProvider=Je,l.Element=L,l.ForwardRef=re,l.Fragment=ae,l.Lazy=Ee,l.Memo=U,l.Portal=V,l.Profiler=B,l.StrictMode=le,l.Suspense=A,l.isAsyncMode=F,l.isConcurrentMode=Re,l.isContextConsumer=x,l.isContextProvider=N,l.isElement=j,l.isForwardRef=Z,l.isFragment=J,l.isLazy=Q,l.isMemo=ee,l.isPortal=G,l.isProfiler=se,l.isStrictMode=ve,l.isSuspense=oe,l.isValidElementType=X,l.typeOf=q})()},"./node_modules/react-is/index.js":(a,l,u)=>{a.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>h,shallowEqualObjects:()=>c});function c(f,g){if(f===g)return!0;if(!f||!g)return!1;var w=Object.keys(f),m=Object.keys(g),E=w.length;if(m.length!==E)return!1;for(var p=0;p<E;p++){var d=w[p];if(f[d]!==g[d]||!Object.prototype.hasOwnProperty.call(g,d))return!1}return!0}function h(f,g){if(f===g)return!0;if(!f||!g)return!1;var w=f.length;if(g.length!==w)return!1;for(var m=0;m<w;m++)if(f[m]!==g[m])return!1;return!0}},"./src/Component.ts":function(a,l,u){var c=this&&this.__rest||function(w,m){var E={};for(var p in w)Object.prototype.hasOwnProperty.call(w,p)&&m.indexOf(p)<0&&(E[p]=w[p]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,p=Object.getOwnPropertySymbols(w);d<p.length;d++)m.indexOf(p[d])<0&&Object.prototype.propertyIsEnumerable.call(w,p[d])&&(E[p[d]]=w[p[d]]);return E},h=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(l,"__esModule",{value:!0});var f=h(u("./src/useMediaQuery.ts")),g=function(w){var m=w.children,E=w.device,p=w.onChange,d=c(w,["children","device","onChange"]),v=(0,f.default)(d,E,p);return typeof m=="function"?m(v):v?m:null};l.default=g},"./src/Context.ts":(a,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var c=u("react"),h=(0,c.createContext)(void 0);l.default=h},"./src/index.ts":function(a,l,u){var c=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var h=c(u("./src/useMediaQuery.ts"));l.useMediaQuery=h.default;var f=c(u("./src/Component.ts"));l.default=f.default;var g=c(u("./src/toQuery.ts"));l.toQuery=g.default;var w=c(u("./src/Context.ts"));l.Context=w.default},"./src/mediaQuery.ts":function(a,l,u){var c=this&&this.__assign||function(){return c=Object.assign||function(S){for(var k,R=1,I=arguments.length;R<I;R++){k=arguments[R];for(var b in k)Object.prototype.hasOwnProperty.call(k,b)&&(S[b]=k[b])}return S},c.apply(this,arguments)},h=this&&this.__rest||function(S,k){var R={};for(var I in S)Object.prototype.hasOwnProperty.call(S,I)&&k.indexOf(I)<0&&(R[I]=S[I]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,I=Object.getOwnPropertySymbols(S);b<I.length;b++)k.indexOf(I[b])<0&&Object.prototype.propertyIsEnumerable.call(S,I[b])&&(R[I[b]]=S[I[b]]);return R},f=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(l,"__esModule",{value:!0});var g=f(u("./node_modules/prop-types/index.js")),w=g.default.oneOfType([g.default.string,g.default.number]),m={all:g.default.bool,grid:g.default.bool,aural:g.default.bool,braille:g.default.bool,handheld:g.default.bool,print:g.default.bool,projection:g.default.bool,screen:g.default.bool,tty:g.default.bool,tv:g.default.bool,embossed:g.default.bool},E={orientation:g.default.oneOf(["portrait","landscape"]),scan:g.default.oneOf(["progressive","interlace"]),aspectRatio:g.default.string,deviceAspectRatio:g.default.string,height:w,deviceHeight:w,width:w,deviceWidth:w,color:g.default.bool,colorIndex:g.default.bool,monochrome:g.default.bool,resolution:w,type:Object.keys(m)};E.type;var p=h(E,["type"]),d=c({minAspectRatio:g.default.string,maxAspectRatio:g.default.string,minDeviceAspectRatio:g.default.string,maxDeviceAspectRatio:g.default.string,minHeight:w,maxHeight:w,minDeviceHeight:w,maxDeviceHeight:w,minWidth:w,maxWidth:w,minDeviceWidth:w,maxDeviceWidth:w,minColor:g.default.number,maxColor:g.default.number,minColorIndex:g.default.number,maxColorIndex:g.default.number,minMonochrome:g.default.number,maxMonochrome:g.default.number,minResolution:w,maxResolution:w},p),v=c(c({},m),d);l.default={all:v,types:m,matchers:E,features:d}},"./src/toQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(l,"__esModule",{value:!0});var h=c(u("./node_modules/hyphenate-style-name/index.js")),f=c(u("./src/mediaQuery.ts")),g=function(p){return"not ".concat(p)},w=function(p,d){var v=(0,h.default)(p);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?v:d===!1?g(v):"(".concat(v,": ").concat(d,")")},m=function(p){return p.join(" and ")},E=function(p){var d=[];return Object.keys(f.default.all).forEach(function(v){var S=p[v];S!=null&&d.push(w(v,S))}),m(d)};l.default=E},"./src/useMediaQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(P){return P&&P.__esModule?P:{default:P}};Object.defineProperty(l,"__esModule",{value:!0});var h=u("react"),f=c(u("./node_modules/matchmediaquery/index.js")),g=c(u("./node_modules/hyphenate-style-name/index.js")),w=u("./node_modules/shallow-equal/dist/index.esm.js"),m=c(u("./src/toQuery.ts")),E=c(u("./src/Context.ts")),p=function(P){return P.query||(0,m.default)(P)},d=function(P){if(P){var M=Object.keys(P);return M.reduce(function(ne,X){return ne[(0,g.default)(X)]=P[X],ne},{})}},v=function(){var P=(0,h.useRef)(!1);return(0,h.useEffect)(function(){P.current=!0},[]),P.current},S=function(P){var M=(0,h.useContext)(E.default),ne=function(){return d(P)||d(M)},X=(0,h.useState)(ne),q=X[0],Ce=X[1];return(0,h.useEffect)(function(){var _e=ne();(0,w.shallowEqualObjects)(q,_e)||Ce(_e)},[P,M]),q},k=function(P){var M=function(){return p(P)},ne=(0,h.useState)(M),X=ne[0],q=ne[1];return(0,h.useEffect)(function(){var Ce=M();X!==Ce&&q(Ce)},[P]),X},R=function(P,M){var ne=function(){return(0,f.default)(P,M||{},!!M)},X=(0,h.useState)(ne),q=X[0],Ce=X[1],_e=v();return(0,h.useEffect)(function(){if(_e){var Xe=ne();return Ce(Xe),function(){Xe&&Xe.dispose()}}},[P,M]),q},I=function(P){var M=(0,h.useState)(P.matches),ne=M[0],X=M[1];return(0,h.useEffect)(function(){var q=function(Ce){X(Ce.matches)};return P.addListener(q),X(P.matches),function(){P.removeListener(q)}},[P]),ne},b=function(P,M,ne){var X=S(M),q=k(P);if(!q)throw new Error("Invalid or missing MediaQuery!");var Ce=R(q,X),_e=I(Ce),Xe=v();return(0,h.useEffect)(function(){Xe&&ne&&ne(_e)},[_e]),(0,h.useEffect)(function(){return function(){Ce&&Ce.dispose()}},[]),_e};l.default=b},react:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={exports:{}};return r[a].call(u.exports,u,u.exports,s),u.exports}s.d=(a,l)=>{for(var u in l)s.o(l,u)&&!s.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o=s("./src/index.ts");return o})())})(JN);const ZN=()=>{const t=Up(),e=Ei(),[n,r]=C.useState(window.scrollY),[i,s]=C.useState(!1),[o,a]=C.useState(!1);C.useEffect(()=>{function u(){r(window.scrollY)}return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[window.scrollY]);const l=u=>{t.pathname!==u&&e(u)};return C.useEffect(()=>G2(Wt,c=>{a(!!c)}),[Wt]),y(KN,{scroll:Dr.useMediaQuery(ps.desktop)?n>100:n>40,children:_(QN,{children:[y(qN,{onClick:()=>l("/"),children:"CryptoCoins"}),_(YN,{children:[y(Nf,{onClick:()=>l("/market/1"),children:"Market"}),y(Nf,{onClick:()=>l(Wt.currentUser?"/profile":"/sign_in"),children:o?"Profile":"Sign In"}),y(XN,{setSearch:s,search:i})]})]})})},e$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAikSURBVHic3Zt7cFT1Fce/53fvLgkESAJ5bQSB8ExtCgXGB9KCQBAC1rYwBGnpTMFSpzqxHad2fNAAxbYzWitVLOI0M0gFGyzFYAQaINiOOFIppEXlEZNCsiGv3ZAHyWb33tM/wkIIye793UdAPzP5Y/eec37nnPu7d3+/8zshOAw/OCoena7pEDQNoKlgTgGQEP472xqMFQQGkaaCAwpRgyC6oAj+h0rqtuEHznzmpH/khFFeMDYTirIczEsATIg0zpnWYERbLkGBAYKPu5n+kHTo8x02u2pfAjg7axDcHWvAWAnga0b1oiWgOy5BgVhBu0lBXuqB8jozfvbEcgJ4sWcg9LhHADwJIElWXyYBYQTAcQodIpUespoIYUWZcyasgh5XDuB5mAjeLDpAzRrPaQvq3otzxrzOFuIwNQN44VdSQZ1bAHrA7MBhzMyAnsQoojFO0KJhJec+lNWVzhwvGr8MFPzEjuDtokPTh/mC2gcX52b8SlZXKgGcM34tGDvQ9RN2S6EDdCmoP+2dM+aIzCNh6BHgWbNUDPJuBvCwaQ/7wI5HoCdDXGJbWkn5D4zIqtEErgS/C8C3LHvWT4R0zDAqG32qdN35L0zwAOASVGRUNmICOGf8U3Bg2jvJYFWUppac+6lR+T7fAZwzYSnAb0WSMUklgJMA/AD83oB2NzOGasyJmo7EILPLrOHBLnHEU1I+S0an1+B4/qQ0qNp/ASSadaYbHQCKQbQDxKVUdKYhknBD9rg7Qzr/KMj6vHaNRzAbG8RM8EBfCcgZt8eG3/kWgDYhpP6O9p/ymTHgnzducoeub24N6XfpEWbiYFWUeg6WzzYzxg1GedGEFWDebsbYNav0Jojzot1to9QvnDi+o73z4GWdb+t5zeydD3NdArgCMTgb8z62eRT41a+bsHcJzKuo+OzbZh2KRM3cjFdbg/qa8GwYrIrDnoPl91mxeX0CTuFnAF4AAJwYcgKFKUMQpDEGbXmh0AJ653SZFYei0ThzbGbnADyhQjuaVFKx1aq9qwngCsTgMsoBeK5e1SiE4qSP8M+hmWCKj2CnGqzMoOJP/2fVof7mWgI+QR4Yv+9Vqk1pxBvpZfg8ZiZuXD22gPkbVHz2hIN+Okb3BJwEIyuidFVMBQo8zWhRr1V8iJbS3tO7nHPRWQgAuAwToeBTw1ofDzmGXSkpCNFRKj6T65h3/UDXUljBcimtqc3TseFcHCY35TnhVH8S3gsskdZ08VZ6rq7WXnf6H+IyJEBBI+TW/AG4MYLGod4px/oLARXTIL/hKf4yBA8AKhhTpbUIb9ntSPLa6nkEmg2QpUq1IYgZzB/Urk8vUgHIL3ldOGSnP0n5NQuh87tdGz+D2z8rMAAQUtZW5woQ0iXVK+2e/qTrC+20ZxRmyhVgRFri9sZ/bHeEaIDdNg1ByBCQL3rYssW9RfAIQHoG+J3w5CYxSP6NS84cqd8kFAHZO8q33qmQBfzyCQCGOeHJTaLJTAIib5m/WPgFAK+k0u18EslOeNPfMHO9AHBcWtMFS4XInpBOp+20Z3xgOqmC8C/p1ScjF8BOu/xQFd4cYkwBYx4ZOLDt3SUMAaDI6BDw8ZdiO5z4dPUIVaFzANwyeiGNRwrKgh+QKId1MQABPCGp4xiqgichGTyAGt/G9AvhhVCh7KAMrF794R0psnp2Mzz/vAegVfKa/FcgXBLT5J7nKi3m2D1V97a+3ZC+RX5ge1FYeRFAjKweC9oJdC+Ln8K/AUyOpNQBUfFo7Vebd7elXiuLM5b5Htj/F1kH7CD5We+PQXjVhGpVnUi7Hfmkd98LFPQlzUDj5uZRh0dWzB1xXfAAQHg9fs+CKSacsERy/oUs0JVjPEmIsB35pAPRjsaA0LFA/Effuzgls0FzR9o1evUQzWj69r5KMw7JkvaMd5ImcAhAqgn1yyTE6Nr81DqgW4sMjUYHGM+HP9dr7uP3Vd1deX/1nfdECR4APELlo8OL5ps5UZYiKb9qsibwPswFDxD+GA6+62M3+AJi25rUIz9vnIidLenTTZhvAWO1U++E5GdrVoL4FQBxJk106CKU0ZA/8ury/4bFT0JR9goCWWuQAO90BZFX+50DtnR0J2x5aaSreukmWOxWI+CZ2vWejT2+62XAvfP/Rmy5Na6VQC93wvVCy+IiU2W0xO0zM3VdLeCANt3lf6patGbd0CEiwfG6i2l34TW6rjOz1wQkvbswVdO1U7ChSYqAgE7YRzredIW4NNqsSNg56w4OiDWs60vRySlXy+TuWP+AigKzxZiAYJp6cUPaqV78653Ed+Z/F4TCSDImOU9AGYMaQfBpDZ3fBHgoMeJY04dD4z43NK7OB8+J+tyxsgMy82P1G9Jf7u1axOASirJ/QaBfyw4og+ZtNyxLqtLpPl8gwG7jO0bizXXr0n/S1+WIRVH/4gO/YeAVw4M5DIc0dzD9uUqj8gQU1pHnsUgyUavC/rjA4wDvNjqo0+j0WQa7a5uiCjJKYkVgZXjF1xfRy+KzS0O+9qFLCabW3Pajg0KeX7ZFlCFsS1L8OZX5ozuimZN6wSUWzc8D8KKsXiRk3gHdcbU+el5cundkz++JsKl2XdrjABmqc0kdjPgW738JRMsAmGp9tZNQ/JaeP4k+AufWrvPkGQ0eMPE/Q75F+wpVPZTJhD2yunbCoeBgLXnrmSsf39M0Lat2fbp034KlqZy4N/uHYNoIsxsTmH8EAIBcSpu78s+P1K33vGHWhqVuDN+iA3/yKWIUiNcAqLFiSwoBnWKVI4pCE6wED9j4MvMULR7Ygc6HGVhJEl0ncgshaodLeW+gqq/xPlRqyzG9Iye9w4qyJzLRcgBLwJgUaZyoCVBEgNx0VBD/1vf90n32eupQArqT8Pe5Q0W7mKoLmk5M0wAeAfBtAA0EEK/VtBNIaCCEIDhAgppZEWWKwGEdKGxaccjRBuz/A5CoBXNHtz7pAAAAAElFTkSuQmCC",t$=T.div`
  z-index: 2;
  display: grid;
  grid-template-columns: 4fr 1fr;
  row-gap: 10px;
  position: absolute;
  top: 125px;
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  background-color: #ff0000d8;
  transition: 0.5s;
  visibility: ${({visible:t})=>t?"visible":"hidden"};
  opacity: ${({visible:t})=>t?1:0};
`,n$=T.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  justify-self: flex-end;
  cursor: pointer;
  img {
    height: 32px;
    color: black;
  }
`,HA=({error:t,showError:e,setShowError:n})=>_(t$,{visible:e,children:[y("div",{children:t}),y(n$,{children:y(jr,{onClick:()=>n(!1),color:"black"})})]}),r$=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 54px);
  background: linear-gradient(
    ${t=>t.theme.colors.backgroundSecond},
    ${t=>t.theme.colors.background},
    ${t=>t.theme.colors.background}
  );
  @media ${z.tablet} {
    height: calc(100vh - 60px);
  }
`,i$=T.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  width: 70%;
  border-radius: 12px;
  position: relative;
  transform: translateY(24px);
  @media ${z.tablet} {
    border-radius: 20px;
    width: 500px;
    transform: translateY(30px);
  }
`,s$=T.h2`
  font-size: 24px;
  width: 100%;
  text-align: center;
  padding: 24px 0;
  background-color: ${t=>t.theme.colors.interaction};
  border-radius: 12px;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: ${t=>t.theme.colors.interaction};
  }
  @media ${z.tablet} {
    padding: 50px 0;
    border-radius: 20px;
    font-size: 40px;
  }
`,o$=T.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media ${z.tablet} {
    padding: 50px;
    gap: 16px;
  }
`,a$=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 58px;
  @media ${z.tablet} {
    gap: 16px;
    min-height: 96px;
  }
`,Jv=T.input`
  width: 100%;
  padding: 6px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: ${t=>t.theme.boxShadow.purple};
  &:focus {
    outline: none;
    background-color: ${t=>t.theme.colors.interaction};
  }
  @media ${z.tablet} {
    border-radius: 10px;
    font-size: 18px;
    height: 40px;
    padding: 10px;
  }
`,l$=T.input`
  width: 100%;
  background-color: #ffffff;
  border: none;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
  box-shadow: ${t=>t.theme.boxShadow.purple};
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
  @media ${z.tablet} {
    height: 50px;
    border-radius: 10px;
    font-size: 18px;
  }
`,u$=T.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  background-color: #ffffff;
  border: none;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
  box-shadow: ${t=>t.theme.boxShadow.purple};
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
  img {
    height: 16px;
  }
  @media ${z.tablet} {
    height: 50px;
    border-radius: 10px;
    font-size: 18px;
    gap: 10px;
    img {
      height: 30px;
    }
  }
`,c$=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 30px 0 20px;
`,h$=T.div`
  cursor: pointer;
  transition: 0.2s;
  color: ${t=>t.theme.colors.backgroundSecond};
  &:hover {
    transform: translateY(2px);
    text-shadow: 0.4px 0.4px 1px rgb(101, 67, 250);
  }
  &:active {
    transform: translateY(4px);
    transition: 0.2s;
  }
`,cl={emptyEmail:"Enter E-mail",emptyPassword:"Enter Password",wrong:"Wrong E-mail or Password"},d$=()=>{const t=Ei(),[e,n]=C.useState(""),[r,i]=C.useState(""),[s,o]=C.useState(null),[a,l]=C.useState(!1),[u,c]=C.useState(!1),h=async g=>{if(g.preventDefault(),c(!0),e.length===0)o(cl.emptyEmail),l(!0);else if(r.length===0)o(cl.emptyPassword),l(!0);else{let w=null;try{await V2(Wt,e,r)}catch(m){w=cl.wrong,o(cl.wrong),l(!0),console.log(m)}finally{w||t("/profile")}}c(!1)};return y(r$,{children:_(i$,{children:[y(HA,{error:s,showError:a,setShowError:l}),y(s$,{children:"Sign in"}),_(o$,{children:[y(a$,{children:u?y(Qt,{color:"rgb(0,6,68)"}):_(sn,{children:[y(Jv,{placeholder:"E-mail",onChange:g=>n(g.target.value),type:"email"}),y(Jv,{placeholder:"Password",onChange:g=>i(g.target.value),type:"password"})]})}),y(l$,{type:"submit",onClick:g=>h(g)}),y("div",{children:"Or login with"}),_(u$,{onClick:async()=>{try{await pR(Wt,yN)}catch(g){console.error(g)}finally{Wt&&t("/profile")}},children:[y("img",{src:e$,alt:"google"}),y("div",{children:"Google"})]})]}),_(c$,{children:[y("div",{children:"Don't have account?"}),y(h$,{onClick:()=>t("/sign_up"),children:"Sign up!"})]})]})})},f$=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${z.desktop} {
    width: 1024px;
  }
`,p$=T.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 3fr;
  gap: 10px;
  padding: 5px 10px;
  font-weight: 700;
  width: 100%;
  @media ${z.tablet} {
    padding: 10px;
    grid-template-columns: 0.3fr 2fr 1fr 1fr 1.5fr;
  }
  @media ${z.desktop} {
    grid-template-columns: 0.5fr 3fr 1fr 1fr 1.5fr 1fr;
    width: 1024px;
    gap: 20px;
    padding: 10px 0;
  }
`,m$=T.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 3fr;
  gap: 10px;
  padding: 5px 10px;
  font-weight: 700;
  border-top: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: ${t=>t.theme.colors.hoverDark};
  }
  width: 100%;
  @media ${z.tablet} {
    padding: 10px;
    grid-template-columns: 0.3fr 2fr 1fr 1fr 1.5fr;
  }
  @media ${z.desktop} {
    grid-template-columns: 0.5fr 3fr 1fr 1fr 1.5fr 1fr;
    width: 1024px;
    gap: 20px;
    padding: 10px 0;
  }
`,WA=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: start;
  gap: 5px;
  width: 100%;
  img {
    width: 25px;
  }
  @media ${z.tablet} {
    flex-direction: row;
    gap: 10px;
    img {
      width: 40px;
    }
  }
`,g$=T.div`
  @media ${z.tablet} {
    font-weight: 500;
  }
`,y$=T.div`
  color: ${({positive:t})=>t?"green":"red"};
`,Nu=T.div`
  justify-self: end;
`,v$=T.button`
  background-color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
`,w$=({coin:t,setShowDetails:e,setAddTransaction:n})=>_(m$,{onClick:()=>e(t.id),children:[y("div",{children:t.market_cap_rank}),_(WA,{children:[y("img",{src:t.image}),Dr.useMediaQuery(ps.desktop)&&y("div",{children:t.name}),y(g$,{children:t.symbol.toUpperCase()})]}),_(Nu,{children:["$",t.current_price.toLocaleString("en-US")]}),_(y$,{positive:t.price_change_percentage_24h>0,children:[(t.price_change_percentage_24h>0?"+":"")+t.price_change_percentage_24h.toFixed(2),"%"]}),_(Nu,{children:["$",t.market_cap.toLocaleString("en-US")]}),Dr.useMediaQuery(ps.desktop)&&y(v$,{onClick:r=>{r.stopPropagation(),n(t.id)},children:"Add Transaction"})]}),GA=({coins:t})=>{const[e,n]=C.useState(null),[r,i]=C.useState(null);return _(sn,{children:[_(f$,{children:[_(p$,{children:[y("div",{children:"#"}),y(WA,{children:"Coin"}),y(Nu,{children:"Price"}),_("div",{children:["24h",Dr.useMediaQuery(ps.desktop)&&y(sn,{children:" change"})]}),y(Nu,{children:"Market Cap"})]}),t.map(s=>y(w$,{coin:s,setAddTransaction:n,setShowDetails:i},s.id))]}),e&&y(eg,{coinId:e,setAddTransaction:n}),r&&y(Zm,{setShowDetails:i,coinId:r,setAddTransaction:n})]})},S$=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`,KA=T.h2`
  font-size: 24px;
  padding: 10px 0;
  @media ${z.desktop} {
    font-size: 40px;
    padding: 30px 0;
  }
`,E$=T.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0 0;
  height: 50vh;
  text-shadow: 1px 1px 2px rgba(48, 45, 45, 0.5);
  font-weight: 700;
  background: linear-gradient(
    ${t=>t.theme.colors.backgroundSecond},
    ${t=>t.theme.colors.background}
  );
`,A$=T.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 5px;
  @media ${z.desktop} {
    width: 1024px;
    min-width: 1024px;
  }
`,k$=T.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  @media ${z.tablet} {
    font-size: 48px;
  }
  @media ${z.desktop} {
    font-size: 60px;
  }
`,C$=CT`
0%{
  transform: translateY(0) ;
}
40%{
  transform: translateY(-20px);
}
100%{
  transform: translateY(0);
}`,Zv=T.img`
  width: 40px;
  animation: ${C$} 2s ease-in-out infinite;
  @media ${z.tablet} {
    width: 80px;
  }
  @media ${z.desktop} {
    width: 100px;
  }
`,_$=T.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 50vh;
  @media ${z.desktop} {
    width: 1024px;
  }
`,T$=T.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media ${z.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`,x$=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  img {
    width: 20px;
  }
  &:hover {
    background-color: ${t=>t.theme.colors.hoverDark};
  }
  @media ${z.tablet} {
    gap: 20px;
    padding: 20px;
    margin: 20px;
    border: 3px solid white;
    font-size: 2rem;
    img {
      width: 50px;
    }
  }
`,I$=T.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,R$=T.button`
  background-color: #ffffff;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  font-size: 14px;
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
  @media ${z.tablet} {
    margin-top: 20px;
    font-size: 20px;
  }
`,P$=()=>{const t=Ei(),[e,n]=C.useState(),[r,i]=C.useState(!0),s="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&locale=en";return C.useEffect(()=>{(async()=>{i(!0);try{const l=await(await fetch(s)).json();n(l)}catch(a){console.error(a)}i(!1)})()},[]),_(I$,{children:[y(KA,{children:"Martket update"}),r?y(Qt,{color:"#ffffff"}):e?y(GA,{coins:e}):y(zr,{}),y(R$,{onClick:()=>t("/market/1"),children:"Check whole list!"})]})},b$=()=>{const[t,e]=C.useState(null),[n,r]=C.useState(null),[i,s]=C.useState(null),[o,a]=C.useState(!0),l="https://api.coingecko.com/api/v3/search/trending";return C.useEffect(()=>{(async()=>{a(!0);try{const h=await(await fetch(l)).json();e(h.coins.slice(0,6))}catch(c){console.error(c)}a(!1)})()},[]),_(_$,{children:[y(KA,{children:"Trending Coins"}),o?y(Qt,{color:"#ffffff"}):t?y(T$,{children:t.map(u=>_(x$,{onClick:()=>r(u.item.id),children:[y("img",{src:u.item.small}),y("div",{children:u.item.symbol}),_("div",{children:["#Rank: ",u.item.market_cap_rank]})]},u.item.id))}):y(zr,{}),n&&y(Zm,{setAddTransaction:s,setShowDetails:r,coinId:n}),i&&y(eg,{setAddTransaction:s,coinId:i})]})},D$="/assets/ethereum-9533c3b7.png",O$="/assets/bitcoin-c66dade2.png",N$=()=>y(E$,{children:_(A$,{children:[y(Zv,{src:O$}),_(k$,{children:[y("div",{children:"TRACK YOUR FAVOURITE"}),y("div",{children:"CRYPTO CURRENCIES"})]}),y(Zv,{src:D$})]})}),$$=()=>_(S$,{children:[y(N$,{}),y(b$,{}),y(P$,{})]}),M$=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 10px;
  background: linear-gradient(
    ${t=>t.theme.colors.backgroundSecond},
    ${t=>t.theme.colors.background},
    ${t=>t.theme.colors.background},
    ${t=>t.theme.colors.background}
  );
  min-height: calc(100vh - 54px);
  @media ${z.tablet} {
    min-height: calc(100vh - 60px);
  }
  @media ${z.desktop} {
    padding: 80px 0 20px;
  }
`,L$=T.h2`
  font-size: 40px;
  padding: 30px 0;
`,F$=T.div`
  display: ${({show:t})=>t?"flex":"none"};
  align-items: center;
  gap: 5px;
  padding: 15px 0;
  @media ${z.desktop} {
    gap: 10px;
    padding: 30px 0;
  }
`,Gh=T.button`
  font-size: 18px;
  font-weight: 500;
  padding: 6px;
  border: none;
  color: ${({selected:t})=>t?"rgb(0,6,68)":"white"};
  background-color: ${({selected:t})=>t?"white":"rgb(0,6,68)"};
  cursor: pointer;
  &:hover {
    color: rgb(0, 6, 68);
    background-color: white;
  }
  @media ${z.tablet} {
    font-size: 24px;
    padding: 8px;
  }
`,U$=({pages:t,switchPageUrl:e,page_nr:n})=>{const r=Ei(),i=()=>{let s=[];for(let o=0;o<t;o++)o+1>n-3&&o+1<n+3&&s.push(y(Gh,{selected:n===o+1,onClick:()=>r(`${e}/${o+1}`),children:o+1},o+1));return s};return _(F$,{show:t>1,children:[y(Gh,{onClick:()=>n>1?r(`${e}/${n-1}`):"",children:"<"}),i(),y(Gh,{onClick:()=>n<t?r(`${e}/${n+1}`):"",children:">"})]})},j$=()=>{const{page_nr:t}=ux(),[e,n]=C.useState(),[r,i]=C.useState(!0),s=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${t}&sparkline=false&locale=en`;return C.useEffect(()=>{(async()=>{i(!0);try{const l=await(await fetch(s)).json();n(l)}catch(a){console.error(a)}i(!1)})()},[t]),_(M$,{children:[y(L$,{children:"Martket update"}),r?y(Qt,{color:"#ffffff"}):e?y(GA,{coins:e}):y(zr,{}),e&&y(U$,{pages:10,switchPageUrl:"/market",page_nr:Number(t)})]})},z$=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  min-height: calc(100vh - 54px);
  @media ${z.tablet} {
    padding-bottom: 20px;
    min-height: calc(100vh - 60px);
  }
`,B$=T.section`
  width: 100%;
  background: linear-gradient(
    ${t=>t.theme.colors.backgroundSecond},
    ${t=>t.theme.colors.background}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`,V$=T.section`
  margin-top: 48px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  @media ${z.tablet} {
    margin-top: 60px;
  }
  @media ${z.desktop} {
    width: 1024px;
    margin-top: 70px;
  }
`,H$=T.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media ${z.tablet} {
    gap: 50px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`,Kh=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  div {
    font-size: 24px;
    @media ${z.desktop} {
      font-size: 36px;
    }
  }
`,W$=T.div`
  position: absolute;
  top: 0;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  opacity: ${({scroll:t})=>t?0:1};
  transition: 0.3s;
  font-weight: 500;
  strong {
    font-weight: 600;
  }
  @media ${z.desktop} {
    right: 0;
  }
`,G$=T.div`
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: translateY(2px);
    text-shadow: 0.4px 0.4px 1px white;
  }
`,Qh=T.div`
  color: ${({positive:t})=>t?"green":"red"};
`,K$=T.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`,e0=T.button`
  font-size: 14px;
  background-color: transparent;
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 10px 10px;
  border-bottom: ${({active:t})=>t?"2px solid blue":"2px solid white"};
  transition: 0.2s;
  cursor: pointer;
  @media ${z.tablet} {
    font-size: 20px;
  }
  @media ${z.desktop} {
    &:hover {
      padding: 13px 10px 7px;
      text-shadow: 0.4px 0.4px 1px white;
    }
  }
`,Q$=T.div`
  display: ${({show:t})=>t?"flex":"none"};
  align-items: center;
  gap: 5px;
  padding: 15px 0;
  @media ${z.desktop} {
    gap: 10px;
    padding: 30px 0;
  }
`,qh=T.button`
  font-size: 18px;
  font-weight: 500;
  padding: 6px;
  border: none;
  color: ${({selected:t})=>t?"rgb(0,6,68)":"white"};
  background-color: ${({selected:t})=>t?"white":"rgb(0,6,68)"};
  cursor: pointer;
  &:hover {
    color: rgb(0, 6, 68);
    background-color: white;
  }
  @media ${z.tablet} {
    font-size: 24px;
    padding: 8px;
  }
`,q$=T.div`
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
  &:hover {
    transform: translateY(2px);
    text-shadow: 0.4px 0.4px 1px white;
  }
  @media ${z.tablet} {
    font-size: 36px;
  }
`,Y$=({portfolioValue:t})=>{var a;const e=Ei(),[n,r]=C.useState(window.scrollY),[i,s]=C.useState(!1);C.useEffect(()=>{function l(){r(window.scrollY)}return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[window.scrollY]);const o=async()=>{s(!0);try{await K2(Wt)}catch(l){console.error(l)}finally{e("/")}s(!1)};return y(B$,{children:_(V$,{children:[_(W$,{scroll:n>30,children:[_("div",{children:[y("strong",{children:"Current Profile: "}),(a=Wt.currentUser)==null?void 0:a.email]}),y(G$,{onClick:o,children:i?y(Qt,{color:"#ffffff"}):"Log out"})]}),t?_(H$,{children:[_(Kh,{children:[y("div",{children:"Transactions profit"}),_(Qh,{positive:t.profit>0,children:[Number(t.profit.toFixed(2)).toLocaleString(),"$"]})]}),_(Kh,{children:[y("div",{children:"Portfolio value"}),_(Qh,{positive:t.coinsValue>0,children:[Number(t.coinsValue.toFixed(2)).toLocaleString(),"$"]})]}),_(Kh,{children:[y("div",{children:"Overwall profit"}),_(Qh,{positive:t.profit+t.coinsValue>0,children:[Number((t.profit+t.coinsValue).toFixed(2)).toLocaleString(),"$"]})]})]}):y(Qt,{color:"#ffffff"})]})})},QA=()=>{const t=Ei();return y(q$,{onClick:()=>t("/market/1"),children:"Add your first transaction!"})},tg=({pages:t,page_nr:e,setPage:n})=>{const r=()=>{let i=[];for(let s=0;s<t;s++)s+1>e-3&&s+1<e+3&&i.push(y(qh,{selected:e===s+1,onClick:()=>n(s+1),children:s+1},s+1));return i};return _(Q$,{show:t>1,children:[y(qh,{onClick:()=>e>1?n(e-1):"",children:"<"}),r(),y(qh,{onClick:()=>e<t?n(e+1):"",children:">"})]})},X$=T.div`
  margin: 20px 0px 0;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${z.desktop} {
    margin: 50px 0 0;
    padding: 0;
    width: 1024px;
  }
`,J$=T.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr) 1.5fr;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid white;
  width: 100%;
  font-size: 16px;
  @media ${z.desktop} {
    width: 1024px;
    font-size: 20px;
  }
`,Z$=T.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr) 1.5fr;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid white;
  td {
    text-align: center;
  }
  &:hover {
    background-color: ${t=>t.theme.colors.hoverDark};
  }
  &:last-child {
    border-bottom: none;
  }
  width: 100%;
  font-size: 16px;
  @media ${z.desktop} {
    width: 1024px;
    font-size: 20px;
  }
`,qA=T.td`
  color: ${({buy:t})=>t?"green":"red"};
`,eM=T.td`
  display: flex;
  gap: 5px;
`,$u=T.button`
  background-color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
`,tM=T.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px 0;
  width: 100%;
`,nM=T.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 10px;
  padding: 10px 0;
  border-top: 1px solid white;
  td {
    text-align: center;
  }
`,rM=T.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 10px;
  padding: ${({show:t})=>t?"10px 0":0};
  height: ${({show:t})=>t?"auto":0};
  visibility: ${({show:t})=>t?"visible":"hidden"};
  td {
    text-align: center;
  }
  button {
    transition: 0s;
  }
`,iM=({transactions:t,setChangeTransaction:e,deleteTransaction:n})=>{const[r,i]=C.useState(1);return _(sn,{children:[_("table",{children:[y("thead",{children:_(J$,{children:[y("th",{children:"Coin"}),y("th",{children:"Price"}),y("th",{children:"Amount"}),y("th",{children:"Total"}),y("th",{children:"Type"}),y("th",{children:"Date"})]})}),y("tbody",{children:t.slice(20*(r-1),20*r).map(s=>_(Z$,{children:[y("td",{children:s.name}),_("td",{children:["$",qe(s.price)]}),y("td",{children:qe(s.amount)}),_("td",{children:["$",qe(s.amount*s.price)]}),y(qA,{buy:s.type==="buy",children:s.type}),y("td",{children:s.date}),_(eM,{children:[y($u,{onClick:()=>e(s),children:"Change"}),y($u,{onClick:()=>n(s.id),children:"Delete"})]})]},s.id))})]}),y(tg,{pages:Math.ceil(t.length/20),page_nr:r,setPage:i})]})},sM=({transactions:t,setChangeTransaction:e,deleteTransaction:n})=>{const[r,i]=C.useState(1),[s,o]=C.useState("");return _(sn,{children:[_("table",{children:[y("thead",{children:_(tM,{children:[y("th",{children:"Coin"}),y("th",{children:"Price"}),y("th",{children:"Amount"}),y("th",{children:"Total"})]})}),y("tbody",{children:t.slice(20*(r-1),20*r).map(a=>_(sn,{children:[_(nM,{onClick:()=>{s===a.id?o(""):o(a.id)},children:[y("td",{children:a.name}),_("td",{children:["$",qe(a.price)]}),y("td",{children:qe(a.amount)}),_("td",{children:["$",qe(a.amount*a.price)]})]},a.id),_(rM,{show:s===a.id,children:[y(qA,{buy:a.type==="buy",children:a.type}),y("td",{children:a.date}),y($u,{onClick:()=>e(a),children:"Change"}),y($u,{onClick:()=>n(a.id),children:"Delete"})]})]}))})]}),y(tg,{pages:Math.ceil(t.length/20),page_nr:r,setPage:i})]})},oM=T.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${t=>t.theme.colors.backgroundTransparent};
  z-index: 3;
  width: 100vw;
  height: 100vh;
`,YA=T.div`
  display: flex;
  flex-direction: column;
  background-color: ${t=>t.theme.colors.backgroundSecond};
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  @media ${z.tablet} {
    width: auto;
    min-width: 500px;
    padding: 20px;
    border-radius: 20px;
  }
`,XA=T.div`
  display: flex;
  justify-content: space-between;
`,aM=T.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0 10px;
  img {
    width: 35px;
  }
  @media ${z.tablet} {
    font-size: 24px;
    gap: 10px;
    margin: 10px 0 20px;
    img {
      width: 40px;
    }
  }
`,lM=T.div`
  display: flex;
  justify-content: space-between;
`,uM=T.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  row-gap: 10px;
  align-items: center;
  img {
    cursor: pointer;
    height: 80%;
    padding-left: 5px;
  }
`,hl=T.input`
  padding: 6px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    background-color: ${t=>t.theme.colors.interaction};
  }
  :disabled {
    background-color: ${t=>t.theme.colors.disabledInput};
  }
  @media ${z.tablet} {
    padding: 8px;
    border-radius: 10px;
    font-size: 16px;
  }
`,cM=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,t0=T.button`
  background-color: ${t=>t.theme.colors.main};
  border: none;
  width: 60px;
  height: 30px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
  @media ${z.tablet} {
    width: 80px;
    height: 40px;
    border-radius: 8px;
    font-size: 14px;
  }
`,hM=({transaction:t,setChangeTransaction:e,coin:n})=>{const[r,i]=C.useState(t.amount),[s,o]=C.useState(t.price),[a,l]=C.useState(t.price*t.amount),[u,c]=C.useState("inTotal"),[h,f]=C.useState(t.date),g=async m=>{var d;const E=(d=Wt.currentUser)==null?void 0:d.uid,p=Gm(ra,"users",`${E}`,"transactions",t.id);try{await fN(p,{coinId:t.coinId,amount:r,price:s,date:h,type:m})}catch(v){console.error(v)}e(null)},w=(m,E)=>{E=="amount"&&(i(m),u==="price"&&o(m*a),u==="inTotal"&&l(m*s)),E=="price"&&(o(m),u==="amount"&&i(m*a),u==="inTotal"&&l(m*r)),E=="inTotal"&&(l(m),u==="amount"&&i(m/s),u==="price"&&o(m/r))};return _(YA,{children:[_(XA,{children:[y("div",{children:"Change transaction"}),y(jr,{onClick:()=>e(null)})]}),_(aM,{children:[y("div",{children:n.symbol.toUpperCase()}),y("img",{src:n.image.large})]}),_(lM,{children:[_(uM,{children:[y("label",{children:"Amount:"}),y(hl,{disabled:u==="amount",value:u==="amount"?Number(r.toPrecision(5)):r,type:"number",onChange:m=>w(Number(m.target.value),"amount")}),y("img",{onClick:()=>c("amount"),src:u==="amount"?rs:is,alt:"lock"}),y("label",{children:"Price($):"}),y(hl,{disabled:u==="price",value:u==="price"?Number(s.toPrecision(5)):s,type:"number",onChange:m=>w(Number(m.target.value),"price")}),y("img",{onClick:()=>c("price"),src:u==="price"?rs:is,alt:"lock"}),y("label",{children:"In total($):"}),y(hl,{disabled:u==="inTotal",value:Number(a.toFixed(2)),type:"number",onChange:m=>w(Number(m.target.value),"inTotal")}),y("img",{onClick:()=>c("inTotal"),src:u==="inTotal"?rs:is,alt:"lock"}),y("label",{children:"Date:"}),y(hl,{type:"date",value:h,onChange:m=>f(m.target.value)})]}),_(cM,{children:[y(t0,{onClick:()=>g("buy"),children:"BUY!"}),y(t0,{onClick:()=>g("sell"),children:"SELL!"})]})]})]})},dM=({transaction:t,setChangeTransaction:e})=>{const[n,r]=C.useState(),[i,s]=C.useState(!0),o=`https://api.coingecko.com/api/v3/coins/${t.coinId}`;return C.useEffect(()=>{(async()=>{s(!0);try{const u=await(await fetch(o)).json();r(u)}catch(l){console.error(l)}finally{s(!1)}})()},[]),y(oM,{children:i?y(Qt,{color:dw.colors.main}):n!=null&&n.symbol?y(hM,{transaction:t,setChangeTransaction:e,coin:n}):_(YA,{children:[_(XA,{children:[y("div",{children:"Change transaction"}),y(jr,{onClick:()=>e(null)})]}),y(zr,{})]})})},fM=()=>{var f;const[t,e]=C.useState(null),[n,r]=C.useState(null),[i,s]=C.useState(!0),[o,a]=C.useState(!1),l=(f=Wt.currentUser)==null?void 0:f.uid,u=Dr.useMediaQuery(ps.tablet),c=async()=>{s(!0),a(!1);const g=Wm(ra,"users",`${l}`,"transactions");try{const m=(await FA(g)).docs.map(E=>({...E.data(),id:E.id}));m.sort((E,p)=>{const d=new Date(E.date);return new Date(p.date)-d}),e(m)}catch(w){a(!0),console.error(w)}finally{s(!1)}},h=async g=>{const w=Gm(ra,"users",`${l}`,"transactions",g);await pN(w),c()};return C.useEffect(()=>{c()},[l,n]),_(X$,{children:[i?y(Qt,{color:"white"}):o?y(zr,{}):t!=null&&t.length?u?y(iM,{transactions:t,setChangeTransaction:r,deleteTransaction:h}):y(sM,{transactions:t,setChangeTransaction:r,deleteTransaction:h}):y(QA,{}),n&&y(dM,{transaction:n,setChangeTransaction:r})]})},pM=T.div`
  margin: 20px 0px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${z.desktop} {
    margin: 50px 0;
    padding: 0;
    width: 1024px;
  }
`,mM=T.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 2fr 2fr 2fr 1fr 2fr;
  text-align: center;
  height: 50px;
  width: 100%;
  @media ${z.desktop} {
    width: 1024px;
  }
  th {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-left: white 1px solid;
    padding: 0 5px;
    &:last-child {
      border-right: white 1px solid;
    }
    font-size: 16px;
    @media ${z.desktop} {
      font-size: 20px;
    }
  }
`,gM=T.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(11, 1fr);
  text-align: center;
  height: 50px;
  border-bottom: 1px solid white;
  width: 100%;
  @media ${z.desktop} {
    width: 1024px;
  }
  th {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-left: white 1px solid;
    &:last-child {
      border-right: white 1px solid;
    }
    font-size: 16px;
    @media ${z.desktop} {
      font-size: 20px;
    }
  }
`,yM=T.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(11, 1fr);
  text-align: center;
  height: 50px;
  border-bottom: 1px solid white;
  width: 100%;
  @media ${z.desktop} {
    width: 1024px;
  }
  &:hover {
    background-color: ${t=>t.theme.colors.hoverDark};
  }
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    @media ${z.desktop} {
      font-size: 16px;
    }
  }
`,vM=T.tr`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`,wM=T.tr`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  height: 30px;

  width: 100%;
  border-top: white 1px solid;
  margin-top: 5px;
  padding-top: 5px;
`,SM=T.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100%;
  gap: 5px;
  img {
    height: 16px;
    transform: ${({show:t})=>t?"translateY(2px) rotateX(180deg)":"translateY(2px) rotateX(0)"};
  }
`,EM=T.tr`
  font-size: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  height: ${({show:t})=>t?"24px":0};
  width: 100%;
  visibility: ${({show:t})=>t?"visible":"hidden"};
`,n0=T.tr`
  font-size: 12px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  height: ${({show:t})=>t?"24px":0};
  width: 100%;
  visibility: ${({show:t})=>t?"visible":"hidden"};
`,AM=({coinsSummary:t})=>{const[e,n]=C.useState(1);return _(sn,{children:[_("table",{children:[_("thead",{children:[_(mM,{children:[y("th",{children:"Coin"}),y("th",{children:"Current value"}),y("th",{children:"Transactions"}),y("th",{children:"Average price"}),y("th",{children:"All transacions value"}),y("th",{children:"Profit"}),y("th",{children:"Coins remaining"})]}),_(gM,{children:[y("th",{}),y("th",{}),y("th",{children:"buy"}),y("th",{children:"sell"}),y("th",{children:"buy"}),y("th",{children:"sell"}),y("th",{children:"buy"}),y("th",{children:"sell"}),y("th",{}),y("th",{children:"Amount"}),y("th",{children:"Total value"})]})]}),y("tbody",{children:t.slice((e-1)*20,e*20).map(r=>_(yM,{children:[y("td",{children:r.name}),y("td",{children:qe(r.currentPrice)}),y("td",{children:r.transactionsBuy}),y("td",{children:r.transactionsSell}),y("td",{children:r.averageBuyPrice?qe(r.averageBuyPrice):"-"}),y("td",{children:r.averageSellPrice?qe(r.averageSellPrice):"-"}),y("td",{children:r.totalMoneyInvested?qe(r.totalMoneyInvested):"-"}),y("td",{children:r.totalMoneyWithdraw?qe(r.totalMoneyWithdraw):"-"}),y("td",{children:r.profit?Number(r.profit.toFixed(2)).toLocaleString():"-"}),y("td",{onClick:()=>console.log(1 .toPrecision(5)),children:r.amount?qe(r.amount):"-"}),y("td",{children:r.currentPortfolioValue.toFixed(2)})]},r.name))})]}),y(tg,{pages:Math.ceil(t.length/20),page_nr:e,setPage:n})]})},kM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cFCgkqJ6V4rEIAAACfSURBVFjD7c+7EYMwFETRixMq0EBNlEI/xFATAYkKgBZIWCLP2DP+8JGeEm0D5y7k5eUlXiE1DbQtKktbeV2h6wppWaCq0vyf5wd4nwYH8B5tzknjKPNNk1TXAAkiXvDn7CI+4HYRP/D4EQfweBEn8PARF/BwETfw+xEB8OsRAfHzERHw4xER8f8RBvj3CEP8PWIYpL7X5pwpnpeXF3I7LJUDVUypxTsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDUtMTBUMDk6NDI6MzkrMDA6MDCkZmYsAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA1LTEwVDA5OjQyOjM5KzAwOjAw1TvekAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wNS0xMFQwOTo0MjozOSswMDowMIIu/08AAAAASUVORK5CYII=",CM=({coinsSummary:t})=>{const[e,n]=C.useState("");return y(sn,{children:_("table",{children:[y("thead",{children:_(vM,{children:[y("th",{children:"Coin"}),y("th",{children:"Current price"}),y("th",{children:"Coins remaining"}),y("th",{children:"Total value"})]})}),y("tbody",{children:t.map(r=>_(sn,{children:[_(wM,{children:[y("td",{children:r.name}),y("td",{children:qe(r.currentPrice)}),y("td",{onClick:()=>console.log(1 .toPrecision(5)),children:r.amount?qe(r.amount):"-"}),y("td",{children:r.currentPortfolioValue.toFixed(2)})]}),_(SM,{show:r.name===e,onClick:()=>{e===r.name?n(""):n(r.name)},children:[y("td",{children:"Transactions"}),y("td",{children:y("img",{src:kM})})]}),_(EM,{show:r.name===e,children:[y("td",{children:"Transactions"}),y("td",{children:"Average Price"}),y("td",{children:"All Transaction value"})]}),_(n0,{show:r.name===e,children:[y("td",{children:"BUY"}),y("td",{children:"SELL"}),y("td",{children:"BUY"}),y("td",{children:"SELL"}),y("td",{children:"BUY"}),y("td",{children:"SELL"})]}),_(n0,{show:r.name===e,children:[y("td",{children:r.transactionsBuy}),y("td",{children:r.transactionsSell}),y("td",{children:r.averageBuyPrice?qe(r.averageBuyPrice):"-"}),y("td",{children:r.averageSellPrice?qe(r.averageSellPrice):"-"}),y("td",{children:r.totalMoneyInvested?qe(r.totalMoneyInvested):"-"}),y("td",{children:r.totalMoneyWithdraw?qe(r.totalMoneyWithdraw):"-"})]})]}))})]})})},_M=({setPortfolioValue:t})=>{var c;const[e,n]=C.useState([]),[r,i]=C.useState(!0),[s,o]=C.useState(!1),a=Dr.useMediaQuery(ps.tablet),l=(c=Wt.currentUser)==null?void 0:c.uid,u=async()=>{i(!0),o(!1);let h=[];const f=Wm(ra,"users",`${l}`,"transactions");try{const m=(await FA(f)).docs.map(d=>({...d.data()})).reduce((d,v)=>{const S=v.coinId;return d[S]||(d[S]={transactions:[],currentPrice:0}),d[S].transactions.push(v),d},{});for(let d in m){const S=await(await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${d}&vs_currencies=usd`)).json();S&&(m[d].currentPrice=S[d].usd)}for(let d in m){let v={count:0,sumOfInvested:0,sumOfAmounts:0},S={count:0,sumOfInvested:0,sumOfAmounts:0};m[d].transactions.forEach(R=>{const I=R.amount*R.price;R.type==="buy"&&(v.count+=1,v.sumOfInvested+=I,v.sumOfAmounts+=R.amount),R.type==="sell"&&(S.count+=1,S.sumOfInvested+=I,S.sumOfAmounts+=R.amount)});const k={name:m[d].transactions[0].name,currentPrice:m[d].currentPrice,transactionsBuy:v.count,transactionsSell:S.count,averageBuyPrice:v.count?v.sumOfInvested/v.sumOfAmounts:0,averageSellPrice:S.count?S.sumOfInvested/S.sumOfAmounts:0,totalMoneyInvested:v.sumOfInvested,totalMoneyWithdraw:S.sumOfInvested,profit:S.sumOfInvested-v.sumOfInvested,amount:v.sumOfAmounts-S.sumOfAmounts,currentPortfolioValue:m[d].currentPrice*(v.sumOfAmounts-S.sumOfAmounts)};h.push(k)}const E=h.reduce((d,v)=>d+v.profit,0),p=h.reduce((d,v)=>d+v.currentPortfolioValue,0);t({profit:E,coinsValue:p}),n(h)}catch(g){console.error(g),o(!0)}finally{i(!1)}};return C.useEffect(()=>{u()},[l]),y(pM,{children:r?y(Qt,{color:"white"}):s?y(zr,{}):e.length?a?y(AM,{coinsSummary:e}):y(CM,{coinsSummary:e}):y(QA,{})})},TM=({selectedTab:t,setSelectedTab:e})=>_(K$,{children:[y(e0,{onClick:()=>e("coins"),active:t==="coins",children:"Coins Overview"}),y(e0,{active:t==="transactions",onClick:()=>e("transactions"),children:"Transactions History"})]}),xM=()=>{const[t,e]=C.useState(),[n,r]=C.useState("coins");return _(z$,{children:[y(Y$,{portfolioValue:t}),y(TM,{setSelectedTab:r,selectedTab:n}),n==="coins"?y(_M,{setPortfolioValue:e}):n==="transactions"?y(fM,{}):y(sn,{})]})},IM=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 54px);
  background: linear-gradient(
    ${t=>t.theme.colors.backgroundSecond},
    ${t=>t.theme.colors.background},
    ${t=>t.theme.colors.background}
  );
  @media ${z.tablet} {
    height: calc(100vh - 60px);
  }
`,RM=T.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  width: 70%;
  border-radius: 12px;
  position: relative;
  transform: translateY(24px);
  @media ${z.tablet} {
    border-radius: 20px;
    width: 500px;
    transform: translateY(30px);
  }
`,PM=T.h2`
  font-size: 24px;
  width: 100%;
  text-align: center;
  padding: 24px 0;
  background-color: ${t=>t.theme.colors.interaction};
  border-radius: 12px;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: ${t=>t.theme.colors.interaction};
  }
  @media ${z.tablet} {
    padding: 50px 0;
    border-radius: 20px;
    font-size: 40px;
  }
`,bM=T.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media ${z.tablet} {
    padding: 50px;
    gap: 16px;
  }
`,DM=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 58px;
  @media ${z.tablet} {
    gap: 16px;
    min-height: 96px;
  }
`,r0=T.input`
  width: 100%;
  padding: 6px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: ${t=>t.theme.boxShadow.purple};
  &:focus {
    outline: none;
    background-color: ${t=>t.theme.colors.interaction};
  }
  @media ${z.tablet} {
    border-radius: 10px;
    font-size: 18px;
    height: 40px;
    padding: 10px;
  }
`,OM=T.input`
  width: 100%;
  background-color: #ffffff;
  border: none;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
  box-shadow: ${t=>t.theme.boxShadow.purple};
  &:hover {
    background-color: ${t=>t.theme.colors.interaction};
  }
  &:active {
    background-color: ${t=>t.theme.colors.interaction};
    transform: scale(0.9);
  }
  @media ${z.tablet} {
    height: 50px;
    border-radius: 10px;
    font-size: 18px;
  }
`,Ks={emptyEmail:"Enter Email",emptyPassword:"Enter Password",shortPassword:"Password has to have at least 6 characters",emailExist:"Account with this E-mail already exists",wrong:"Try different E-mail or Password"},NM=()=>{const t=Ei(),[e,n]=C.useState(""),[r,i]=C.useState(""),[s,o]=C.useState(null),[a,l]=C.useState(!1),[u,c]=C.useState(!1),h=async f=>{if(f.preventDefault(),c(!0),o(null),e.length===0)o(Ks.emptyEmail),l(!0);else if(r.length===0)o(Ks.emptyPassword),l(!0);else if(r.length<6)o(Ks.shortPassword),l(!0);else{let g=!1;try{await B2(Wt,e,r)}catch(w){console.log(w),g=!0,w instanceof bn&&(w.code==="auth/email-already-in-use"?o(Ks.emailExist):o(Ks.wrong)),l(!0)}finally{g||t("/profile")}}c(!1),n(""),i("")};return y(IM,{children:_(RM,{children:[y(HA,{error:s,showError:a,setShowError:l}),y(PM,{children:"Sign up"}),_(bM,{children:[y(DM,{children:u?y(Qt,{color:"rgb(0,6,68)"}):_(sn,{children:[y(r0,{placeholder:"E-mail",onChange:f=>n(f.target.value),type:"email",value:e}),y(r0,{placeholder:"Password",onChange:f=>i(f.target.value),type:"password",value:r})]})}),y(OM,{type:"submit",onClick:f=>h(f)})]})]})})},$M=T.footer`
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: ${({theme:t})=>t.colors.background};
  box-shadow: 2px 2px 5px 5px rgb(15, 16, 32);
`,MM=T.div`
  font-weight: 700;
  a:-webkit-any-link {
    transition: color 0.3s;
    color: white;
    text-decoration: none;
    &:hover {
      text-shadow: 0.4px 0.4px 1px white;
    }
  }
`,LM=()=>y($M,{children:y(MM,{children:y("a",{href:"https://github.com/Benodkk",children:"Website by: Benodkk "})})}),FM=()=>_(Ex,{children:[y(ZN,{}),_(Sx,{children:[y(Ii,{path:"/",element:y($$,{})}),y(Ii,{path:"/market/:page_nr",element:y(j$,{})}),y(Ii,{path:"/profile",element:y(xM,{})}),y(Ii,{path:"/sign_in",element:y(d$,{})}),y(Ii,{path:"/sign_up",element:y(NM,{})})]}),y(LM,{})]});Xh.createRoot(document.getElementById("root")).render(_(Or.StrictMode,{children:[y(_T,{}),y(ET,{theme:dw,children:y(FM,{})})]}));
