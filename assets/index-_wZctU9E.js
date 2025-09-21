function AT(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function AS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var op={exports:{}},Pl={},ap={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function TT(){if(F_)return St;F_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=m&&L[m]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(L,k,W){this.props=L,this.context=k,this.refs=w,this.updater=W||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,k){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,k,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function T(L,k,W){this.props=L,this.context=k,this.refs=w,this.updater=W||S}var M=T.prototype=new _;M.constructor=T,E(M,y.prototype),M.isPureReactComponent=!0;var R=Array.isArray,P=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function se(L,k,W){var Y,ee={},Z=null,_e=null;if(k!=null)for(Y in k.ref!==void 0&&(_e=k.ref),k.key!==void 0&&(Z=""+k.key),k)P.call(k,Y)&&!U.hasOwnProperty(Y)&&(ee[Y]=k[Y]);var ve=arguments.length-2;if(ve===1)ee.children=W;else if(1<ve){for(var be=Array(ve),ke=0;ke<ve;ke++)be[ke]=arguments[ke+2];ee.children=be}if(L&&L.defaultProps)for(Y in ve=L.defaultProps,ve)ee[Y]===void 0&&(ee[Y]=ve[Y]);return{$$typeof:n,type:L,key:Z,ref:_e,props:ee,_owner:N.current}}function C(L,k){return{$$typeof:n,type:L.type,key:k,ref:L.ref,props:L.props,_owner:L._owner}}function O(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function oe(L){var k={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(W){return k[W]})}var ne=/\/+/g;function pe(L,k){return typeof L=="object"&&L!==null&&L.key!=null?oe(""+L.key):k.toString(36)}function H(L,k,W,Y,ee){var Z=typeof L;(Z==="undefined"||Z==="boolean")&&(L=null);var _e=!1;if(L===null)_e=!0;else switch(Z){case"string":case"number":_e=!0;break;case"object":switch(L.$$typeof){case n:case e:_e=!0}}if(_e)return _e=L,ee=ee(_e),L=Y===""?"."+pe(_e,0):Y,R(ee)?(W="",L!=null&&(W=L.replace(ne,"$&/")+"/"),H(ee,k,W,"",function(ke){return ke})):ee!=null&&(O(ee)&&(ee=C(ee,W+(!ee.key||_e&&_e.key===ee.key?"":(""+ee.key).replace(ne,"$&/")+"/")+L)),k.push(ee)),1;if(_e=0,Y=Y===""?".":Y+":",R(L))for(var ve=0;ve<L.length;ve++){Z=L[ve];var be=Y+pe(Z,ve);_e+=H(Z,k,W,be,ee)}else if(be=g(L),typeof be=="function")for(L=be.call(L),ve=0;!(Z=L.next()).done;)Z=Z.value,be=Y+pe(Z,ve++),_e+=H(Z,k,W,be,ee);else if(Z==="object")throw k=String(L),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return _e}function Q(L,k,W){if(L==null)return L;var Y=[],ee=0;return H(L,Y,"","",function(Z){return k.call(W,Z,ee++)}),Y}function le(L){if(L._status===-1){var k=L._result;k=k(),k.then(function(W){(L._status===0||L._status===-1)&&(L._status=1,L._result=W)},function(W){(L._status===0||L._status===-1)&&(L._status=2,L._result=W)}),L._status===-1&&(L._status=0,L._result=k)}if(L._status===1)return L._result.default;throw L._result}var re={current:null},j={transition:null},ie={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:j,ReactCurrentOwner:N};function $(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Q,forEach:function(L,k,W){Q(L,function(){k.apply(this,arguments)},W)},count:function(L){var k=0;return Q(L,function(){k++}),k},toArray:function(L){return Q(L,function(k){return k})||[]},only:function(L){if(!O(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},St.Component=y,St.Fragment=t,St.Profiler=a,St.PureComponent=T,St.StrictMode=r,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,St.act=$,St.cloneElement=function(L,k,W){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Y=E({},L.props),ee=L.key,Z=L.ref,_e=L._owner;if(k!=null){if(k.ref!==void 0&&(Z=k.ref,_e=N.current),k.key!==void 0&&(ee=""+k.key),L.type&&L.type.defaultProps)var ve=L.type.defaultProps;for(be in k)P.call(k,be)&&!U.hasOwnProperty(be)&&(Y[be]=k[be]===void 0&&ve!==void 0?ve[be]:k[be])}var be=arguments.length-2;if(be===1)Y.children=W;else if(1<be){ve=Array(be);for(var ke=0;ke<be;ke++)ve[ke]=arguments[ke+2];Y.children=ve}return{$$typeof:n,type:L.type,key:ee,ref:Z,props:Y,_owner:_e}},St.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:s,_context:L},L.Consumer=L},St.createElement=se,St.createFactory=function(L){var k=se.bind(null,L);return k.type=L,k},St.createRef=function(){return{current:null}},St.forwardRef=function(L){return{$$typeof:u,render:L}},St.isValidElement=O,St.lazy=function(L){return{$$typeof:p,_payload:{_status:-1,_result:L},_init:le}},St.memo=function(L,k){return{$$typeof:h,type:L,compare:k===void 0?null:k}},St.startTransition=function(L){var k=j.transition;j.transition={};try{L()}finally{j.transition=k}},St.unstable_act=$,St.useCallback=function(L,k){return re.current.useCallback(L,k)},St.useContext=function(L){return re.current.useContext(L)},St.useDebugValue=function(){},St.useDeferredValue=function(L){return re.current.useDeferredValue(L)},St.useEffect=function(L,k){return re.current.useEffect(L,k)},St.useId=function(){return re.current.useId()},St.useImperativeHandle=function(L,k,W){return re.current.useImperativeHandle(L,k,W)},St.useInsertionEffect=function(L,k){return re.current.useInsertionEffect(L,k)},St.useLayoutEffect=function(L,k){return re.current.useLayoutEffect(L,k)},St.useMemo=function(L,k){return re.current.useMemo(L,k)},St.useReducer=function(L,k,W){return re.current.useReducer(L,k,W)},St.useRef=function(L){return re.current.useRef(L)},St.useState=function(L){return re.current.useState(L)},St.useSyncExternalStore=function(L,k,W){return re.current.useSyncExternalStore(L,k,W)},St.useTransition=function(){return re.current.useTransition()},St.version="18.3.1",St}var O_;function rv(){return O_||(O_=1,ap.exports=TT()),ap.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function bT(){if(k_)return Pl;k_=1;var n=rv(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,m={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)r.call(d,p)&&!s.hasOwnProperty(p)&&(m[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:S,props:m,_owner:a.current}}return Pl.Fragment=t,Pl.jsx=c,Pl.jsxs=c,Pl}var z_;function CT(){return z_||(z_=1,op.exports=bT()),op.exports}var Xe=CT(),Oc={},sp={exports:{}},cr={},lp={exports:{}},up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function RT(){return B_||(B_=1,(function(n){function e(j,ie){var $=j.length;j.push(ie);e:for(;0<$;){var L=$-1>>>1,k=j[L];if(0<a(k,ie))j[L]=ie,j[$]=k,$=L;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var ie=j[0],$=j.pop();if($!==ie){j[0]=$;e:for(var L=0,k=j.length,W=k>>>1;L<W;){var Y=2*(L+1)-1,ee=j[Y],Z=Y+1,_e=j[Z];if(0>a(ee,$))Z<k&&0>a(_e,ee)?(j[L]=_e,j[Z]=$,L=Z):(j[L]=ee,j[Y]=$,L=Y);else if(Z<k&&0>a(_e,$))j[L]=_e,j[Z]=$,L=Z;else break e}}return ie}function a(j,ie){var $=j.sortIndex-ie.sortIndex;return $!==0?$:j.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,m=null,g=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(j){for(var ie=t(h);ie!==null;){if(ie.callback===null)r(h);else if(ie.startTime<=j)r(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function R(j){if(w=!1,M(j),!E)if(t(d)!==null)E=!0,le(P);else{var ie=t(h);ie!==null&&re(R,ie.startTime-j)}}function P(j,ie){E=!1,w&&(w=!1,_(se),se=-1),S=!0;var $=g;try{for(M(ie),m=t(d);m!==null&&(!(m.expirationTime>ie)||j&&!oe());){var L=m.callback;if(typeof L=="function"){m.callback=null,g=m.priorityLevel;var k=L(m.expirationTime<=ie);ie=n.unstable_now(),typeof k=="function"?m.callback=k:m===t(d)&&r(d),M(ie)}else r(d);m=t(d)}if(m!==null)var W=!0;else{var Y=t(h);Y!==null&&re(R,Y.startTime-ie),W=!1}return W}finally{m=null,g=$,S=!1}}var N=!1,U=null,se=-1,C=5,O=-1;function oe(){return!(n.unstable_now()-O<C)}function ne(){if(U!==null){var j=n.unstable_now();O=j;var ie=!0;try{ie=U(!0,j)}finally{ie?pe():(N=!1,U=null)}}else N=!1}var pe;if(typeof T=="function")pe=function(){T(ne)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Q=H.port2;H.port1.onmessage=ne,pe=function(){Q.postMessage(null)}}else pe=function(){y(ne,0)};function le(j){U=j,N||(N=!0,pe())}function re(j,ie){se=y(function(){j(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,le(P))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(j){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var $=g;g=ie;try{return j()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,ie){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var $=g;g=j;try{return ie()}finally{g=$}},n.unstable_scheduleCallback=function(j,ie,$){var L=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?L+$:L):$=L,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=$+k,j={id:p++,callback:ie,priorityLevel:j,startTime:$,expirationTime:k,sortIndex:-1},$>L?(j.sortIndex=$,e(h,j),t(d)===null&&j===t(h)&&(w?(_(se),se=-1):w=!0,re(R,$-L))):(j.sortIndex=k,e(d,j),E||S||(E=!0,le(P))),j},n.unstable_shouldYield=oe,n.unstable_wrapCallback=function(j){var ie=g;return function(){var $=g;g=ie;try{return j.apply(this,arguments)}finally{g=$}}}})(up)),up}var H_;function PT(){return H_||(H_=1,lp.exports=RT()),lp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function LT(){if(V_)return cr;V_=1;var n=rv(),e=PT();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function s(i,o){c(i,o),c(i+"Capture",o)}function c(i,o){for(a[i]=o,i=0;i<o.length;i++)r.add(o[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(i){return d.call(m,i)?!0:d.call(p,i)?!1:h.test(i)?m[i]=!0:(p[i]=!0,!1)}function S(i,o,l,f){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,o,l,f){if(o===null||typeof o>"u"||S(i,o,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function w(i,o,l,f,v,x,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new w(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];y[o]=new w(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new w(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new w(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new w(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new w(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new w(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new w(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new w(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function T(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(_,T);y[o]=new w(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(_,T);y[o]=new w(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(_,T);y[o]=new w(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new w(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new w(i,1,!1,i.toLowerCase(),null,!0,!0)});function M(i,o,l,f){var v=y.hasOwnProperty(o)?y[o]:null;(v!==null?v.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,l,v,f)&&(l=null),f||v===null?g(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):v.mustUseProperty?i[v.propertyName]=l===null?v.type===3?!1:"":l:(o=v.attributeName,f=v.attributeNamespace,l===null?i.removeAttribute(o):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,f?i.setAttributeNS(f,o,l):i.setAttribute(o,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),j=Symbol.iterator;function ie(i){return i===null||typeof i!="object"?null:(i=j&&i[j]||i["@@iterator"],typeof i=="function"?i:null)}var $=Object.assign,L;function k(i){if(L===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);L=o&&o[1]||""}return`
`+L+i}var W=!1;function Y(i,o){if(!i||W)return"";W=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ae){var f=ae}Reflect.construct(i,[],o)}else{try{o.call()}catch(ae){f=ae}i.call(o.prototype)}else{try{throw Error()}catch(ae){f=ae}i()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var v=ae.stack.split(`
`),x=f.stack.split(`
`),A=v.length-1,F=x.length-1;1<=A&&0<=F&&v[A]!==x[F];)F--;for(;1<=A&&0<=F;A--,F--)if(v[A]!==x[F]){if(A!==1||F!==1)do if(A--,F--,0>F||v[A]!==x[F]){var z=`
`+v[A].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=A&&0<=F);break}}}finally{W=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?k(i):""}function ee(i){switch(i.tag){case 5:return k(i.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return i=Y(i.type,!1),i;case 11:return i=Y(i.type.render,!1),i;case 1:return i=Y(i.type,!0),i;default:return""}}function Z(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case N:return"Portal";case C:return"Profiler";case se:return"StrictMode";case pe:return"Suspense";case H:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case oe:return(i.displayName||"Context")+".Consumer";case O:return(i._context.displayName||"Context")+".Provider";case ne:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Q:return o=i.displayName||null,o!==null?o:Z(i.type)||"Memo";case le:o=i._payload,i=i._init;try{return Z(i(o))}catch{}}return null}function _e(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(o);case 8:return o===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ve(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function be(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function ke(i){var o=be(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),f=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,x=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return v.call(this)},set:function(A){f=""+A,x.call(this,A)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function ze(i){i._valueTracker||(i._valueTracker=ke(i))}function X(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),f="";return i&&(f=be(i)?i.checked?"true":"false":i.value),i=f,i!==l?(o.setValue(i),!0):!1}function It(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ve(i,o){var l=o.checked;return $({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function ue(i,o){var l=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;l=ve(o.value!=null?o.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ce(i,o){o=o.checked,o!=null&&M(i,"checked",o,!1)}function xe(i,o){ce(i,o);var l=ve(o.value),f=o.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Me(i,o.type,l):o.hasOwnProperty("defaultValue")&&Me(i,o.type,ve(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function ge(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Me(i,o,l){(o!=="number"||It(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Ee=Array.isArray;function Ne(i,o,l,f){if(i=i.options,o){o={};for(var v=0;v<l.length;v++)o["$"+l[v]]=!0;for(l=0;l<i.length;l++)v=o.hasOwnProperty("$"+i[l].value),i[l].selected!==v&&(i[l].selected=v),v&&f&&(i[l].defaultSelected=!0)}else{for(l=""+ve(l),o=null,v=0;v<i.length;v++){if(i[v].value===l){i[v].selected=!0,f&&(i[v].defaultSelected=!0);return}o!==null||i[v].disabled||(o=i[v])}o!==null&&(o.selected=!0)}}function Je(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function I(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Ee(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:ve(l)}}function b(i,o){var l=ve(o.value),f=ve(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function q(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ae(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ae(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Ke=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,f,v){MSApp.execUnsafeLocalFunction(function(){return i(o,l,f,v)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ue(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ct=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(i){ct.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),He[o]=He[i]})});function Tt(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||He.hasOwnProperty(i)&&He[i]?(""+o).trim():o+"px"}function De(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var f=l.indexOf("--")===0,v=Tt(l,o[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,v):i[l]=v}}var kt=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,o){if(o){if(kt[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function st(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tt=null;function $e(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var _t=null,V=null,Be=null;function Pe(i){if(i=ml(i)){if(typeof _t!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Ju(o),_t(i.stateNode,i.type,o))}}function me(i){V?Be?Be.push(i):Be=[i]:V=i}function Fe(){if(V){var i=V,o=Be;if(Be=V=null,Pe(i),o)for(i=0;i<o.length;i++)Pe(o[i])}}function ot(i,o){return i(o)}function Et(){}var nn=!1;function Sn(i,o,l){if(nn)return i(o,l);nn=!0;try{return ot(i,o,l)}finally{nn=!1,(V!==null||Be!==null)&&(Et(),Fe())}}function Lt(i,o){var l=i.stateNode;if(l===null)return null;var f=Ju(l);if(f===null)return null;l=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var vn=!1;if(u)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){vn=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{vn=!1}function Lu(i,o,l,f,v,x,A,F,z){var ae=Array.prototype.slice.call(arguments,3);try{o.apply(l,ae)}catch(we){this.onError(we)}}var Ko=!1,Ri=null,Zo=!1,Qi=null,Du={onError:function(i){Ko=!0,Ri=i}};function Iu(i,o,l,f,v,x,A,F,z){Ko=!1,Ri=null,Lu.apply(Du,arguments)}function bd(i,o,l,f,v,x,A,F,z){if(Iu.apply(this,arguments),Ko){if(Ko){var ae=Ri;Ko=!1,Ri=null}else throw Error(t(198));Zo||(Zo=!0,Qi=ae)}}function Pi(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Uu(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function D(i){if(Pi(i)!==i)throw Error(t(188))}function J(i){var o=i.alternate;if(!o){if(o=Pi(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,f=o;;){var v=l.return;if(v===null)break;var x=v.alternate;if(x===null){if(f=v.return,f!==null){l=f;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===l)return D(v),i;if(x===f)return D(v),o;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=v,f=x;else{for(var A=!1,F=v.child;F;){if(F===l){A=!0,l=v,f=x;break}if(F===f){A=!0,f=v,l=x;break}F=F.sibling}if(!A){for(F=x.child;F;){if(F===l){A=!0,l=x,f=v;break}if(F===f){A=!0,f=x,l=v;break}F=F.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function de(i){return i=J(i),i!==null?he(i):null}function he(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=he(i);if(o!==null)return o;i=i.sibling}return null}var fe=e.unstable_scheduleCallback,Ge=e.unstable_cancelCallback,et=e.unstable_shouldYield,at=e.unstable_requestPaint,je=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,ht=e.unstable_ImmediatePriority,mt=e.unstable_UserBlockingPriority,Wt=e.unstable_NormalPriority,Kn=e.unstable_LowPriority,ln=e.unstable_IdlePriority,rr=null,bt=null;function yt(i){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(rr,i,void 0,(i.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:Nu,Zt=Math.log,Li=Math.LN2;function Nu(i){return i>>>=0,i===0?32:31-(Zt(i)/Li|0)|0}var li=64,eo=4194304;function rn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Pr(i,o){var l=i.pendingLanes;if(l===0)return 0;var f=0,v=i.suspendedLanes,x=i.pingedLanes,A=l&268435455;if(A!==0){var F=A&~v;F!==0?f=rn(F):(x&=A,x!==0&&(f=rn(x)))}else A=l&~v,A!==0?f=rn(A):x!==0&&(f=rn(x));if(f===0)return 0;if(o!==0&&o!==f&&(o&v)===0&&(v=f&-f,x=o&-o,v>=x||v===16&&(x&4194240)!==0))return o;if((f&4)!==0&&(f|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=f;0<o;)l=31-Zn(o),v=1<<l,f|=i[l],o&=~v;return f}function Zs(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(i,o){for(var l=i.suspendedLanes,f=i.pingedLanes,v=i.expirationTimes,x=i.pendingLanes;0<x;){var A=31-Zn(x),F=1<<A,z=v[A];z===-1?((F&l)===0||(F&f)!==0)&&(v[A]=Zs(F,o)):z<=o&&(i.expiredLanes|=F),x&=~F}}function Jo(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Fu(){var i=li;return li<<=1,(li&4194240)===0&&(li=64),i}function Oa(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Js(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Zn(o),i[o]=l}function j1(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var v=31-Zn(l),x=1<<v;o[v]=0,f[v]=-1,i[v]=-1,l&=~x}}function Cd(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var f=31-Zn(l),v=1<<f;v&o|i[f]&o&&(i[f]|=o),l&=~v}}var Bt=0;function pg(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var mg,Rd,vg,gg,_g,Pd=!1,Ou=[],to=null,no=null,ro=null,Qs=new Map,el=new Map,io=[],X1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(i,o){switch(i){case"focusin":case"focusout":to=null;break;case"dragenter":case"dragleave":no=null;break;case"mouseover":case"mouseout":ro=null;break;case"pointerover":case"pointerout":Qs.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(o.pointerId)}}function tl(i,o,l,f,v,x){return i===null||i.nativeEvent!==x?(i={blockedOn:o,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[v]},o!==null&&(o=ml(o),o!==null&&Rd(o)),i):(i.eventSystemFlags|=f,o=i.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),i)}function q1(i,o,l,f,v){switch(o){case"focusin":return to=tl(to,i,o,l,f,v),!0;case"dragenter":return no=tl(no,i,o,l,f,v),!0;case"mouseover":return ro=tl(ro,i,o,l,f,v),!0;case"pointerover":var x=v.pointerId;return Qs.set(x,tl(Qs.get(x)||null,i,o,l,f,v)),!0;case"gotpointercapture":return x=v.pointerId,el.set(x,tl(el.get(x)||null,i,o,l,f,v)),!0}return!1}function xg(i){var o=Qo(i.target);if(o!==null){var l=Pi(o);if(l!==null){if(o=l.tag,o===13){if(o=Uu(l),o!==null){i.blockedOn=o,_g(i.priority,function(){vg(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ku(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Dd(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);tt=f,l.target.dispatchEvent(f),tt=null}else return o=ml(l),o!==null&&Rd(o),i.blockedOn=l,!1;o.shift()}return!0}function Sg(i,o,l){ku(i)&&l.delete(o)}function Y1(){Pd=!1,to!==null&&ku(to)&&(to=null),no!==null&&ku(no)&&(no=null),ro!==null&&ku(ro)&&(ro=null),Qs.forEach(Sg),el.forEach(Sg)}function nl(i,o){i.blockedOn===o&&(i.blockedOn=null,Pd||(Pd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Y1)))}function rl(i){function o(v){return nl(v,i)}if(0<Ou.length){nl(Ou[0],i);for(var l=1;l<Ou.length;l++){var f=Ou[l];f.blockedOn===i&&(f.blockedOn=null)}}for(to!==null&&nl(to,i),no!==null&&nl(no,i),ro!==null&&nl(ro,i),Qs.forEach(o),el.forEach(o),l=0;l<io.length;l++)f=io[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<io.length&&(l=io[0],l.blockedOn===null);)xg(l),l.blockedOn===null&&io.shift()}var ka=R.ReactCurrentBatchConfig,zu=!0;function K1(i,o,l,f){var v=Bt,x=ka.transition;ka.transition=null;try{Bt=1,Ld(i,o,l,f)}finally{Bt=v,ka.transition=x}}function Z1(i,o,l,f){var v=Bt,x=ka.transition;ka.transition=null;try{Bt=4,Ld(i,o,l,f)}finally{Bt=v,ka.transition=x}}function Ld(i,o,l,f){if(zu){var v=Dd(i,o,l,f);if(v===null)Yd(i,o,f,Bu,l),yg(i,f);else if(q1(v,i,o,l,f))f.stopPropagation();else if(yg(i,f),o&4&&-1<X1.indexOf(i)){for(;v!==null;){var x=ml(v);if(x!==null&&mg(x),x=Dd(i,o,l,f),x===null&&Yd(i,o,f,Bu,l),x===v)break;v=x}v!==null&&f.stopPropagation()}else Yd(i,o,f,null,l)}}var Bu=null;function Dd(i,o,l,f){if(Bu=null,i=$e(f),i=Qo(i),i!==null)if(o=Pi(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Uu(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Bu=i,null}function wg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case ht:return 1;case mt:return 4;case Wt:case Kn:return 16;case ln:return 536870912;default:return 16}default:return 16}}var oo=null,Id=null,Hu=null;function Eg(){if(Hu)return Hu;var i,o=Id,l=o.length,f,v="value"in oo?oo.value:oo.textContent,x=v.length;for(i=0;i<l&&o[i]===v[i];i++);var A=l-i;for(f=1;f<=A&&o[l-f]===v[x-f];f++);return Hu=v.slice(i,1<f?1-f:void 0)}function Vu(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Gu(){return!0}function Mg(){return!1}function xr(i){function o(l,f,v,x,A){this._reactName=l,this._targetInst=v,this.type=f,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(l=i[F],this[F]=l?l(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Gu:Mg,this.isPropagationStopped=Mg,this}return $(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Gu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Gu)},persist:function(){},isPersistent:Gu}),o}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=xr(za),il=$({},za,{view:0,detail:0}),J1=xr(il),Nd,Fd,ol,Wu=$({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ol&&(ol&&i.type==="mousemove"?(Nd=i.screenX-ol.screenX,Fd=i.screenY-ol.screenY):Fd=Nd=0,ol=i),Nd)},movementY:function(i){return"movementY"in i?i.movementY:Fd}}),Ag=xr(Wu),Q1=$({},Wu,{dataTransfer:0}),eA=xr(Q1),tA=$({},il,{relatedTarget:0}),Od=xr(tA),nA=$({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),rA=xr(nA),iA=$({},za,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),oA=xr(iA),aA=$({},za,{data:0}),Tg=xr(aA),sA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cA(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=uA[i])?!!o[i]:!1}function kd(){return cA}var fA=$({},il,{key:function(i){if(i.key){var o=sA[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Vu(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?lA[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(i){return i.type==="keypress"?Vu(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Vu(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),dA=xr(fA),hA=$({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=xr(hA),pA=$({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),mA=xr(pA),vA=$({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),gA=xr(vA),_A=$({},Wu,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),yA=xr(_A),xA=[9,13,27,32],zd=u&&"CompositionEvent"in window,al=null;u&&"documentMode"in document&&(al=document.documentMode);var SA=u&&"TextEvent"in window&&!al,Cg=u&&(!zd||al&&8<al&&11>=al),Rg=" ",Pg=!1;function Lg(i,o){switch(i){case"keyup":return xA.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ba=!1;function wA(i,o){switch(i){case"compositionend":return Dg(o);case"keypress":return o.which!==32?null:(Pg=!0,Rg);case"textInput":return i=o.data,i===Rg&&Pg?null:i;default:return null}}function EA(i,o){if(Ba)return i==="compositionend"||!zd&&Lg(i,o)?(i=Eg(),Hu=Id=oo=null,Ba=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Cg&&o.locale!=="ko"?null:o.data;default:return null}}var MA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!MA[i.type]:o==="textarea"}function Ug(i,o,l,f){me(f),o=Yu(o,"onChange"),0<o.length&&(l=new Ud("onChange","change",null,l,f),i.push({event:l,listeners:o}))}var sl=null,ll=null;function AA(i){Jg(i,0)}function $u(i){var o=$a(i);if(X(o))return i}function TA(i,o){if(i==="change")return o}var Ng=!1;if(u){var Bd;if(u){var Hd="oninput"in document;if(!Hd){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),Hd=typeof Fg.oninput=="function"}Bd=Hd}else Bd=!1;Ng=Bd&&(!document.documentMode||9<document.documentMode)}function Og(){sl&&(sl.detachEvent("onpropertychange",kg),ll=sl=null)}function kg(i){if(i.propertyName==="value"&&$u(ll)){var o=[];Ug(o,ll,i,$e(i)),Sn(AA,o)}}function bA(i,o,l){i==="focusin"?(Og(),sl=o,ll=l,sl.attachEvent("onpropertychange",kg)):i==="focusout"&&Og()}function CA(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return $u(ll)}function RA(i,o){if(i==="click")return $u(o)}function PA(i,o){if(i==="input"||i==="change")return $u(o)}function LA(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Xr=typeof Object.is=="function"?Object.is:LA;function ul(i,o){if(Xr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),f=Object.keys(o);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var v=l[f];if(!d.call(o,v)||!Xr(i[v],o[v]))return!1}return!0}function zg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Bg(i,o){var l=zg(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=o&&f>=o)return{node:l,offset:o-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=zg(l)}}function Hg(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Hg(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Vg(){for(var i=window,o=It();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=It(i.document)}return o}function Vd(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function DA(i){var o=Vg(),l=i.focusedElem,f=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Hg(l.ownerDocument.documentElement,l)){if(f!==null&&Vd(l)){if(o=f.start,i=f.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var v=l.textContent.length,x=Math.min(f.start,v);f=f.end===void 0?x:Math.min(f.end,v),!i.extend&&x>f&&(v=f,f=x,x=v),v=Bg(l,x);var A=Bg(l,f);v&&A&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),i.removeAllRanges(),x>f?(i.addRange(o),i.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var IA=u&&"documentMode"in document&&11>=document.documentMode,Ha=null,Gd=null,cl=null,Wd=!1;function Gg(i,o,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Wd||Ha==null||Ha!==It(f)||(f=Ha,"selectionStart"in f&&Vd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),cl&&ul(cl,f)||(cl=f,f=Yu(Gd,"onSelect"),0<f.length&&(o=new Ud("onSelect","select",null,o,l),i.push({event:o,listeners:f}),o.target=Ha)))}function ju(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Va={animationend:ju("Animation","AnimationEnd"),animationiteration:ju("Animation","AnimationIteration"),animationstart:ju("Animation","AnimationStart"),transitionend:ju("Transition","TransitionEnd")},$d={},Wg={};u&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function Xu(i){if($d[i])return $d[i];if(!Va[i])return i;var o=Va[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Wg)return $d[i]=o[l];return i}var $g=Xu("animationend"),jg=Xu("animationiteration"),Xg=Xu("animationstart"),qg=Xu("transitionend"),Yg=new Map,Kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ao(i,o){Yg.set(i,o),s(o,[i])}for(var jd=0;jd<Kg.length;jd++){var Xd=Kg[jd],UA=Xd.toLowerCase(),NA=Xd[0].toUpperCase()+Xd.slice(1);ao(UA,"on"+NA)}ao($g,"onAnimationEnd"),ao(jg,"onAnimationIteration"),ao(Xg,"onAnimationStart"),ao("dblclick","onDoubleClick"),ao("focusin","onFocus"),ao("focusout","onBlur"),ao(qg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FA=new Set("cancel close invalid load scroll toggle".split(" ").concat(fl));function Zg(i,o,l){var f=i.type||"unknown-event";i.currentTarget=l,bd(f,o,void 0,i),i.currentTarget=null}function Jg(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],v=f.event;f=f.listeners;e:{var x=void 0;if(o)for(var A=f.length-1;0<=A;A--){var F=f[A],z=F.instance,ae=F.currentTarget;if(F=F.listener,z!==x&&v.isPropagationStopped())break e;Zg(v,F,ae),x=z}else for(A=0;A<f.length;A++){if(F=f[A],z=F.instance,ae=F.currentTarget,F=F.listener,z!==x&&v.isPropagationStopped())break e;Zg(v,F,ae),x=z}}}if(Zo)throw i=Qi,Zo=!1,Qi=null,i}function qt(i,o){var l=o[th];l===void 0&&(l=o[th]=new Set);var f=i+"__bubble";l.has(f)||(Qg(o,i,2,!1),l.add(f))}function qd(i,o,l){var f=0;o&&(f|=4),Qg(l,i,f,o)}var qu="_reactListening"+Math.random().toString(36).slice(2);function dl(i){if(!i[qu]){i[qu]=!0,r.forEach(function(l){l!=="selectionchange"&&(FA.has(l)||qd(l,!1,i),qd(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[qu]||(o[qu]=!0,qd("selectionchange",!1,o))}}function Qg(i,o,l,f){switch(wg(o)){case 1:var v=K1;break;case 4:v=Z1;break;default:v=Ld}l=v.bind(null,o,l,i),v=void 0,!vn||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),f?v!==void 0?i.addEventListener(o,l,{capture:!0,passive:v}):i.addEventListener(o,l,!0):v!==void 0?i.addEventListener(o,l,{passive:v}):i.addEventListener(o,l,!1)}function Yd(i,o,l,f,v){var x=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var F=f.stateNode.containerInfo;if(F===v||F.nodeType===8&&F.parentNode===v)break;if(A===4)for(A=f.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===v||z.nodeType===8&&z.parentNode===v))return;A=A.return}for(;F!==null;){if(A=Qo(F),A===null)return;if(z=A.tag,z===5||z===6){f=x=A;continue e}F=F.parentNode}}f=f.return}Sn(function(){var ae=x,we=$e(l),Te=[];e:{var Se=Yg.get(i);if(Se!==void 0){var We=Ud,Ye=i;switch(i){case"keypress":if(Vu(l)===0)break e;case"keydown":case"keyup":We=dA;break;case"focusin":Ye="focus",We=Od;break;case"focusout":Ye="blur",We=Od;break;case"beforeblur":case"afterblur":We=Od;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=eA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=mA;break;case $g:case jg:case Xg:We=rA;break;case qg:We=gA;break;case"scroll":We=J1;break;case"wheel":We=yA;break;case"copy":case"cut":case"paste":We=oA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=bg}var Ze=(o&4)!==0,un=!Ze&&i==="scroll",K=Ze?Se!==null?Se+"Capture":null:Se;Ze=[];for(var G=ae,te;G!==null;){te=G;var Le=te.stateNode;if(te.tag===5&&Le!==null&&(te=Le,K!==null&&(Le=Lt(G,K),Le!=null&&Ze.push(hl(G,Le,te)))),un)break;G=G.return}0<Ze.length&&(Se=new We(Se,Ye,null,l,we),Te.push({event:Se,listeners:Ze}))}}if((o&7)===0){e:{if(Se=i==="mouseover"||i==="pointerover",We=i==="mouseout"||i==="pointerout",Se&&l!==tt&&(Ye=l.relatedTarget||l.fromElement)&&(Qo(Ye)||Ye[Di]))break e;if((We||Se)&&(Se=we.window===we?we:(Se=we.ownerDocument)?Se.defaultView||Se.parentWindow:window,We?(Ye=l.relatedTarget||l.toElement,We=ae,Ye=Ye?Qo(Ye):null,Ye!==null&&(un=Pi(Ye),Ye!==un||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(We=null,Ye=ae),We!==Ye)){if(Ze=Ag,Le="onMouseLeave",K="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Ze=bg,Le="onPointerLeave",K="onPointerEnter",G="pointer"),un=We==null?Se:$a(We),te=Ye==null?Se:$a(Ye),Se=new Ze(Le,G+"leave",We,l,we),Se.target=un,Se.relatedTarget=te,Le=null,Qo(we)===ae&&(Ze=new Ze(K,G+"enter",Ye,l,we),Ze.target=te,Ze.relatedTarget=un,Le=Ze),un=Le,We&&Ye)t:{for(Ze=We,K=Ye,G=0,te=Ze;te;te=Ga(te))G++;for(te=0,Le=K;Le;Le=Ga(Le))te++;for(;0<G-te;)Ze=Ga(Ze),G--;for(;0<te-G;)K=Ga(K),te--;for(;G--;){if(Ze===K||K!==null&&Ze===K.alternate)break t;Ze=Ga(Ze),K=Ga(K)}Ze=null}else Ze=null;We!==null&&e0(Te,Se,We,Ze,!1),Ye!==null&&un!==null&&e0(Te,un,Ye,Ze,!0)}}e:{if(Se=ae?$a(ae):window,We=Se.nodeName&&Se.nodeName.toLowerCase(),We==="select"||We==="input"&&Se.type==="file")var Qe=TA;else if(Ig(Se))if(Ng)Qe=PA;else{Qe=CA;var rt=bA}else(We=Se.nodeName)&&We.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Qe=RA);if(Qe&&(Qe=Qe(i,ae))){Ug(Te,Qe,l,we);break e}rt&&rt(i,Se,ae),i==="focusout"&&(rt=Se._wrapperState)&&rt.controlled&&Se.type==="number"&&Me(Se,"number",Se.value)}switch(rt=ae?$a(ae):window,i){case"focusin":(Ig(rt)||rt.contentEditable==="true")&&(Ha=rt,Gd=ae,cl=null);break;case"focusout":cl=Gd=Ha=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,Gg(Te,l,we);break;case"selectionchange":if(IA)break;case"keydown":case"keyup":Gg(Te,l,we)}var it;if(zd)e:{switch(i){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ba?Lg(i,l)&&(ft="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ft="onCompositionStart");ft&&(Cg&&l.locale!=="ko"&&(Ba||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ba&&(it=Eg()):(oo=we,Id="value"in oo?oo.value:oo.textContent,Ba=!0)),rt=Yu(ae,ft),0<rt.length&&(ft=new Tg(ft,i,null,l,we),Te.push({event:ft,listeners:rt}),it?ft.data=it:(it=Dg(l),it!==null&&(ft.data=it)))),(it=SA?wA(i,l):EA(i,l))&&(ae=Yu(ae,"onBeforeInput"),0<ae.length&&(we=new Tg("onBeforeInput","beforeinput",null,l,we),Te.push({event:we,listeners:ae}),we.data=it))}Jg(Te,o)})}function hl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Yu(i,o){for(var l=o+"Capture",f=[];i!==null;){var v=i,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=Lt(i,l),x!=null&&f.unshift(hl(i,x,v)),x=Lt(i,o),x!=null&&f.push(hl(i,x,v))),i=i.return}return f}function Ga(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function e0(i,o,l,f,v){for(var x=o._reactName,A=[];l!==null&&l!==f;){var F=l,z=F.alternate,ae=F.stateNode;if(z!==null&&z===f)break;F.tag===5&&ae!==null&&(F=ae,v?(z=Lt(l,x),z!=null&&A.unshift(hl(l,z,F))):v||(z=Lt(l,x),z!=null&&A.push(hl(l,z,F)))),l=l.return}A.length!==0&&i.push({event:o,listeners:A})}var OA=/\r\n?/g,kA=/\u0000|\uFFFD/g;function t0(i){return(typeof i=="string"?i:""+i).replace(OA,`
`).replace(kA,"")}function Ku(i,o,l){if(o=t0(o),t0(i)!==o&&l)throw Error(t(425))}function Zu(){}var Kd=null,Zd=null;function Jd(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,zA=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,BA=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(i){return n0.resolve(null).then(i).catch(HA)}:Qd;function HA(i){setTimeout(function(){throw i})}function eh(i,o){var l=o,f=0;do{var v=l.nextSibling;if(i.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(f===0){i.removeChild(v),rl(o);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=v}while(l);rl(o)}function so(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function r0(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Wa=Math.random().toString(36).slice(2),ui="__reactFiber$"+Wa,pl="__reactProps$"+Wa,Di="__reactContainer$"+Wa,th="__reactEvents$"+Wa,VA="__reactListeners$"+Wa,GA="__reactHandles$"+Wa;function Qo(i){var o=i[ui];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Di]||l[ui]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=r0(i);i!==null;){if(l=i[ui])return l;i=r0(i)}return o}i=l,l=i.parentNode}return null}function ml(i){return i=i[ui]||i[Di],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function $a(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ju(i){return i[pl]||null}var nh=[],ja=-1;function lo(i){return{current:i}}function Yt(i){0>ja||(i.current=nh[ja],nh[ja]=null,ja--)}function $t(i,o){ja++,nh[ja]=i.current,i.current=o}var uo={},Bn=lo(uo),or=lo(!1),ea=uo;function Xa(i,o){var l=i.type.contextTypes;if(!l)return uo;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in l)v[x]=o[x];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=v),v}function ar(i){return i=i.childContextTypes,i!=null}function Qu(){Yt(or),Yt(Bn)}function i0(i,o,l){if(Bn.current!==uo)throw Error(t(168));$t(Bn,o),$t(or,l)}function o0(i,o,l){var f=i.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var v in f)if(!(v in o))throw Error(t(108,_e(i)||"Unknown",v));return $({},l,f)}function ec(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||uo,ea=Bn.current,$t(Bn,i),$t(or,or.current),!0}function a0(i,o,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=o0(i,o,ea),f.__reactInternalMemoizedMergedChildContext=i,Yt(or),Yt(Bn),$t(Bn,i)):Yt(or),$t(or,l)}var Ii=null,tc=!1,rh=!1;function s0(i){Ii===null?Ii=[i]:Ii.push(i)}function WA(i){tc=!0,s0(i)}function co(){if(!rh&&Ii!==null){rh=!0;var i=0,o=Bt;try{var l=Ii;for(Bt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}Ii=null,tc=!1}catch(v){throw Ii!==null&&(Ii=Ii.slice(i+1)),fe(ht,co),v}finally{Bt=o,rh=!1}}return null}var qa=[],Ya=0,nc=null,rc=0,Lr=[],Dr=0,ta=null,Ui=1,Ni="";function na(i,o){qa[Ya++]=rc,qa[Ya++]=nc,nc=i,rc=o}function l0(i,o,l){Lr[Dr++]=Ui,Lr[Dr++]=Ni,Lr[Dr++]=ta,ta=i;var f=Ui;i=Ni;var v=32-Zn(f)-1;f&=~(1<<v),l+=1;var x=32-Zn(o)+v;if(30<x){var A=v-v%5;x=(f&(1<<A)-1).toString(32),f>>=A,v-=A,Ui=1<<32-Zn(o)+v|l<<v|f,Ni=x+i}else Ui=1<<x|l<<v|f,Ni=i}function ih(i){i.return!==null&&(na(i,1),l0(i,1,0))}function oh(i){for(;i===nc;)nc=qa[--Ya],qa[Ya]=null,rc=qa[--Ya],qa[Ya]=null;for(;i===ta;)ta=Lr[--Dr],Lr[Dr]=null,Ni=Lr[--Dr],Lr[Dr]=null,Ui=Lr[--Dr],Lr[Dr]=null}var Sr=null,wr=null,Jt=!1,qr=null;function u0(i,o){var l=Fr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function c0(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Sr=i,wr=so(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Sr=i,wr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=ta!==null?{id:Ui,overflow:Ni}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Fr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Sr=i,wr=null,!0):!1;default:return!1}}function ah(i){return(i.mode&1)!==0&&(i.flags&128)===0}function sh(i){if(Jt){var o=wr;if(o){var l=o;if(!c0(i,o)){if(ah(i))throw Error(t(418));o=so(l.nextSibling);var f=Sr;o&&c0(i,o)?u0(f,l):(i.flags=i.flags&-4097|2,Jt=!1,Sr=i)}}else{if(ah(i))throw Error(t(418));i.flags=i.flags&-4097|2,Jt=!1,Sr=i}}}function f0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Sr=i}function ic(i){if(i!==Sr)return!1;if(!Jt)return f0(i),Jt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Jd(i.type,i.memoizedProps)),o&&(o=wr)){if(ah(i))throw d0(),Error(t(418));for(;o;)u0(i,o),o=so(o.nextSibling)}if(f0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){wr=so(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}wr=null}}else wr=Sr?so(i.stateNode.nextSibling):null;return!0}function d0(){for(var i=wr;i;)i=so(i.nextSibling)}function Ka(){wr=Sr=null,Jt=!1}function lh(i){qr===null?qr=[i]:qr.push(i)}var $A=R.ReactCurrentBatchConfig;function vl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var v=f,x=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===x?o.ref:(o=function(A){var F=v.refs;A===null?delete F[x]:F[x]=A},o._stringRef=x,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function oc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function h0(i){var o=i._init;return o(i._payload)}function p0(i){function o(K,G){if(i){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function l(K,G){if(!i)return null;for(;G!==null;)o(K,G),G=G.sibling;return null}function f(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function v(K,G){return K=yo(K,G),K.index=0,K.sibling=null,K}function x(K,G,te){return K.index=te,i?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function A(K){return i&&K.alternate===null&&(K.flags|=2),K}function F(K,G,te,Le){return G===null||G.tag!==6?(G=Qh(te,K.mode,Le),G.return=K,G):(G=v(G,te),G.return=K,G)}function z(K,G,te,Le){var Qe=te.type;return Qe===U?we(K,G,te.props.children,Le,te.key):G!==null&&(G.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===le&&h0(Qe)===G.type)?(Le=v(G,te.props),Le.ref=vl(K,G,te),Le.return=K,Le):(Le=Rc(te.type,te.key,te.props,null,K.mode,Le),Le.ref=vl(K,G,te),Le.return=K,Le)}function ae(K,G,te,Le){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=ep(te,K.mode,Le),G.return=K,G):(G=v(G,te.children||[]),G.return=K,G)}function we(K,G,te,Le,Qe){return G===null||G.tag!==7?(G=ca(te,K.mode,Le,Qe),G.return=K,G):(G=v(G,te),G.return=K,G)}function Te(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Qh(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case P:return te=Rc(G.type,G.key,G.props,null,K.mode,te),te.ref=vl(K,null,G),te.return=K,te;case N:return G=ep(G,K.mode,te),G.return=K,G;case le:var Le=G._init;return Te(K,Le(G._payload),te)}if(Ee(G)||ie(G))return G=ca(G,K.mode,te,null),G.return=K,G;oc(K,G)}return null}function Se(K,G,te,Le){var Qe=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Qe!==null?null:F(K,G,""+te,Le);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case P:return te.key===Qe?z(K,G,te,Le):null;case N:return te.key===Qe?ae(K,G,te,Le):null;case le:return Qe=te._init,Se(K,G,Qe(te._payload),Le)}if(Ee(te)||ie(te))return Qe!==null?null:we(K,G,te,Le,null);oc(K,te)}return null}function We(K,G,te,Le,Qe){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return K=K.get(te)||null,F(G,K,""+Le,Qe);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case P:return K=K.get(Le.key===null?te:Le.key)||null,z(G,K,Le,Qe);case N:return K=K.get(Le.key===null?te:Le.key)||null,ae(G,K,Le,Qe);case le:var rt=Le._init;return We(K,G,te,rt(Le._payload),Qe)}if(Ee(Le)||ie(Le))return K=K.get(te)||null,we(G,K,Le,Qe,null);oc(G,Le)}return null}function Ye(K,G,te,Le){for(var Qe=null,rt=null,it=G,ft=G=0,Mn=null;it!==null&&ft<te.length;ft++){it.index>ft?(Mn=it,it=null):Mn=it.sibling;var Dt=Se(K,it,te[ft],Le);if(Dt===null){it===null&&(it=Mn);break}i&&it&&Dt.alternate===null&&o(K,it),G=x(Dt,G,ft),rt===null?Qe=Dt:rt.sibling=Dt,rt=Dt,it=Mn}if(ft===te.length)return l(K,it),Jt&&na(K,ft),Qe;if(it===null){for(;ft<te.length;ft++)it=Te(K,te[ft],Le),it!==null&&(G=x(it,G,ft),rt===null?Qe=it:rt.sibling=it,rt=it);return Jt&&na(K,ft),Qe}for(it=f(K,it);ft<te.length;ft++)Mn=We(it,K,ft,te[ft],Le),Mn!==null&&(i&&Mn.alternate!==null&&it.delete(Mn.key===null?ft:Mn.key),G=x(Mn,G,ft),rt===null?Qe=Mn:rt.sibling=Mn,rt=Mn);return i&&it.forEach(function(xo){return o(K,xo)}),Jt&&na(K,ft),Qe}function Ze(K,G,te,Le){var Qe=ie(te);if(typeof Qe!="function")throw Error(t(150));if(te=Qe.call(te),te==null)throw Error(t(151));for(var rt=Qe=null,it=G,ft=G=0,Mn=null,Dt=te.next();it!==null&&!Dt.done;ft++,Dt=te.next()){it.index>ft?(Mn=it,it=null):Mn=it.sibling;var xo=Se(K,it,Dt.value,Le);if(xo===null){it===null&&(it=Mn);break}i&&it&&xo.alternate===null&&o(K,it),G=x(xo,G,ft),rt===null?Qe=xo:rt.sibling=xo,rt=xo,it=Mn}if(Dt.done)return l(K,it),Jt&&na(K,ft),Qe;if(it===null){for(;!Dt.done;ft++,Dt=te.next())Dt=Te(K,Dt.value,Le),Dt!==null&&(G=x(Dt,G,ft),rt===null?Qe=Dt:rt.sibling=Dt,rt=Dt);return Jt&&na(K,ft),Qe}for(it=f(K,it);!Dt.done;ft++,Dt=te.next())Dt=We(it,K,ft,Dt.value,Le),Dt!==null&&(i&&Dt.alternate!==null&&it.delete(Dt.key===null?ft:Dt.key),G=x(Dt,G,ft),rt===null?Qe=Dt:rt.sibling=Dt,rt=Dt);return i&&it.forEach(function(MT){return o(K,MT)}),Jt&&na(K,ft),Qe}function un(K,G,te,Le){if(typeof te=="object"&&te!==null&&te.type===U&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case P:e:{for(var Qe=te.key,rt=G;rt!==null;){if(rt.key===Qe){if(Qe=te.type,Qe===U){if(rt.tag===7){l(K,rt.sibling),G=v(rt,te.props.children),G.return=K,K=G;break e}}else if(rt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===le&&h0(Qe)===rt.type){l(K,rt.sibling),G=v(rt,te.props),G.ref=vl(K,rt,te),G.return=K,K=G;break e}l(K,rt);break}else o(K,rt);rt=rt.sibling}te.type===U?(G=ca(te.props.children,K.mode,Le,te.key),G.return=K,K=G):(Le=Rc(te.type,te.key,te.props,null,K.mode,Le),Le.ref=vl(K,G,te),Le.return=K,K=Le)}return A(K);case N:e:{for(rt=te.key;G!==null;){if(G.key===rt)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){l(K,G.sibling),G=v(G,te.children||[]),G.return=K,K=G;break e}else{l(K,G);break}else o(K,G);G=G.sibling}G=ep(te,K.mode,Le),G.return=K,K=G}return A(K);case le:return rt=te._init,un(K,G,rt(te._payload),Le)}if(Ee(te))return Ye(K,G,te,Le);if(ie(te))return Ze(K,G,te,Le);oc(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(l(K,G.sibling),G=v(G,te),G.return=K,K=G):(l(K,G),G=Qh(te,K.mode,Le),G.return=K,K=G),A(K)):l(K,G)}return un}var Za=p0(!0),m0=p0(!1),ac=lo(null),sc=null,Ja=null,uh=null;function ch(){uh=Ja=sc=null}function fh(i){var o=ac.current;Yt(ac),i._currentValue=o}function dh(i,o,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),i===l)break;i=i.return}}function Qa(i,o){sc=i,uh=Ja=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(sr=!0),i.firstContext=null)}function Ir(i){var o=i._currentValue;if(uh!==i)if(i={context:i,memoizedValue:o,next:null},Ja===null){if(sc===null)throw Error(t(308));Ja=i,sc.dependencies={lanes:0,firstContext:i}}else Ja=Ja.next=i;return o}var ra=null;function hh(i){ra===null?ra=[i]:ra.push(i)}function v0(i,o,l,f){var v=o.interleaved;return v===null?(l.next=l,hh(o)):(l.next=v.next,v.next=l),o.interleaved=l,Fi(i,f)}function Fi(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var fo=!1;function ph(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g0(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Oi(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ho(i,o,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Rt&2)!==0){var v=f.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),f.pending=o,Fi(i,l)}return v=f.interleaved,v===null?(o.next=o,hh(f)):(o.next=v.next,v.next=o),f.interleaved=o,Fi(i,l)}function lc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var f=o.lanes;f&=i.pendingLanes,l|=f,o.lanes=l,Cd(i,l)}}function _0(i,o){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var v=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?v=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?v=x=o:x=x.next=o}else v=x=o;l={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function uc(i,o,l,f){var v=i.updateQueue;fo=!1;var x=v.firstBaseUpdate,A=v.lastBaseUpdate,F=v.shared.pending;if(F!==null){v.shared.pending=null;var z=F,ae=z.next;z.next=null,A===null?x=ae:A.next=ae,A=z;var we=i.alternate;we!==null&&(we=we.updateQueue,F=we.lastBaseUpdate,F!==A&&(F===null?we.firstBaseUpdate=ae:F.next=ae,we.lastBaseUpdate=z))}if(x!==null){var Te=v.baseState;A=0,we=ae=z=null,F=x;do{var Se=F.lane,We=F.eventTime;if((f&Se)===Se){we!==null&&(we=we.next={eventTime:We,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ye=i,Ze=F;switch(Se=o,We=l,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){Te=Ye.call(We,Te,Se);break e}Te=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,Se=typeof Ye=="function"?Ye.call(We,Te,Se):Ye,Se==null)break e;Te=$({},Te,Se);break e;case 2:fo=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,Se=v.effects,Se===null?v.effects=[F]:Se.push(F))}else We={eventTime:We,lane:Se,tag:F.tag,payload:F.payload,callback:F.callback,next:null},we===null?(ae=we=We,z=Te):we=we.next=We,A|=Se;if(F=F.next,F===null){if(F=v.shared.pending,F===null)break;Se=F,F=Se.next,Se.next=null,v.lastBaseUpdate=Se,v.shared.pending=null}}while(!0);if(we===null&&(z=Te),v.baseState=z,v.firstBaseUpdate=ae,v.lastBaseUpdate=we,o=v.shared.interleaved,o!==null){v=o;do A|=v.lane,v=v.next;while(v!==o)}else x===null&&(v.shared.lanes=0);aa|=A,i.lanes=A,i.memoizedState=Te}}function y0(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var f=i[o],v=f.callback;if(v!==null){if(f.callback=null,f=l,typeof v!="function")throw Error(t(191,v));v.call(f)}}}var gl={},ci=lo(gl),_l=lo(gl),yl=lo(gl);function ia(i){if(i===gl)throw Error(t(174));return i}function mh(i,o){switch($t(yl,o),$t(_l,i),$t(ci,gl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ye(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=ye(o,i)}Yt(ci),$t(ci,o)}function es(){Yt(ci),Yt(_l),Yt(yl)}function x0(i){ia(yl.current);var o=ia(ci.current),l=ye(o,i.type);o!==l&&($t(_l,i),$t(ci,l))}function vh(i){_l.current===i&&(Yt(ci),Yt(_l))}var Qt=lo(0);function cc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var gh=[];function _h(){for(var i=0;i<gh.length;i++)gh[i]._workInProgressVersionPrimary=null;gh.length=0}var fc=R.ReactCurrentDispatcher,yh=R.ReactCurrentBatchConfig,oa=0,en=null,gn=null,wn=null,dc=!1,xl=!1,Sl=0,jA=0;function Hn(){throw Error(t(321))}function xh(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Xr(i[l],o[l]))return!1;return!0}function Sh(i,o,l,f,v,x){if(oa=x,en=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,fc.current=i===null||i.memoizedState===null?KA:ZA,i=l(f,v),xl){x=0;do{if(xl=!1,Sl=0,25<=x)throw Error(t(301));x+=1,wn=gn=null,o.updateQueue=null,fc.current=JA,i=l(f,v)}while(xl)}if(fc.current=mc,o=gn!==null&&gn.next!==null,oa=0,wn=gn=en=null,dc=!1,o)throw Error(t(300));return i}function wh(){var i=Sl!==0;return Sl=0,i}function fi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?en.memoizedState=wn=i:wn=wn.next=i,wn}function Ur(){if(gn===null){var i=en.alternate;i=i!==null?i.memoizedState:null}else i=gn.next;var o=wn===null?en.memoizedState:wn.next;if(o!==null)wn=o,gn=i;else{if(i===null)throw Error(t(310));gn=i,i={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},wn===null?en.memoizedState=wn=i:wn=wn.next=i}return wn}function wl(i,o){return typeof o=="function"?o(i):o}function Eh(i){var o=Ur(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=gn,v=f.baseQueue,x=l.pending;if(x!==null){if(v!==null){var A=v.next;v.next=x.next,x.next=A}f.baseQueue=v=x,l.pending=null}if(v!==null){x=v.next,f=f.baseState;var F=A=null,z=null,ae=x;do{var we=ae.lane;if((oa&we)===we)z!==null&&(z=z.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:i(f,ae.action);else{var Te={lane:we,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};z===null?(F=z=Te,A=f):z=z.next=Te,en.lanes|=we,aa|=we}ae=ae.next}while(ae!==null&&ae!==x);z===null?A=f:z.next=F,Xr(f,o.memoizedState)||(sr=!0),o.memoizedState=f,o.baseState=A,o.baseQueue=z,l.lastRenderedState=f}if(i=l.interleaved,i!==null){v=i;do x=v.lane,en.lanes|=x,aa|=x,v=v.next;while(v!==i)}else v===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function Mh(i){var o=Ur(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,v=l.pending,x=o.memoizedState;if(v!==null){l.pending=null;var A=v=v.next;do x=i(x,A.action),A=A.next;while(A!==v);Xr(x,o.memoizedState)||(sr=!0),o.memoizedState=x,o.baseQueue===null&&(o.baseState=x),l.lastRenderedState=x}return[x,f]}function S0(){}function w0(i,o){var l=en,f=Ur(),v=o(),x=!Xr(f.memoizedState,v);if(x&&(f.memoizedState=v,sr=!0),f=f.queue,Ah(A0.bind(null,l,f,i),[i]),f.getSnapshot!==o||x||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,El(9,M0.bind(null,l,f,v,o),void 0,null),En===null)throw Error(t(349));(oa&30)!==0||E0(l,o,v)}return v}function E0(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function M0(i,o,l,f){o.value=l,o.getSnapshot=f,T0(o)&&b0(i)}function A0(i,o,l){return l(function(){T0(o)&&b0(i)})}function T0(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Xr(i,l)}catch{return!0}}function b0(i){var o=Fi(i,1);o!==null&&Jr(o,i,1,-1)}function C0(i){var o=fi();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:i},o.queue=i,i=i.dispatch=YA.bind(null,en,i),[o.memoizedState,i]}function El(i,o,l,f){return i={tag:i,create:o,destroy:l,deps:f,next:null},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,o.lastEffect=i)),i}function R0(){return Ur().memoizedState}function hc(i,o,l,f){var v=fi();en.flags|=i,v.memoizedState=El(1|o,l,void 0,f===void 0?null:f)}function pc(i,o,l,f){var v=Ur();f=f===void 0?null:f;var x=void 0;if(gn!==null){var A=gn.memoizedState;if(x=A.destroy,f!==null&&xh(f,A.deps)){v.memoizedState=El(o,l,x,f);return}}en.flags|=i,v.memoizedState=El(1|o,l,x,f)}function P0(i,o){return hc(8390656,8,i,o)}function Ah(i,o){return pc(2048,8,i,o)}function L0(i,o){return pc(4,2,i,o)}function D0(i,o){return pc(4,4,i,o)}function I0(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function U0(i,o,l){return l=l!=null?l.concat([i]):null,pc(4,4,I0.bind(null,o,i),l)}function Th(){}function N0(i,o){var l=Ur();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&xh(o,f[1])?f[0]:(l.memoizedState=[i,o],i)}function F0(i,o){var l=Ur();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&xh(o,f[1])?f[0]:(i=i(),l.memoizedState=[i,o],i)}function O0(i,o,l){return(oa&21)===0?(i.baseState&&(i.baseState=!1,sr=!0),i.memoizedState=l):(Xr(l,o)||(l=Fu(),en.lanes|=l,aa|=l,i.baseState=!0),o)}function XA(i,o){var l=Bt;Bt=l!==0&&4>l?l:4,i(!0);var f=yh.transition;yh.transition={};try{i(!1),o()}finally{Bt=l,yh.transition=f}}function k0(){return Ur().memoizedState}function qA(i,o,l){var f=go(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},z0(i))B0(o,l);else if(l=v0(i,o,l,f),l!==null){var v=Qn();Jr(l,i,f,v),H0(l,o,f)}}function YA(i,o,l){var f=go(i),v={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(z0(i))B0(o,v);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=o.lastRenderedReducer,x!==null))try{var A=o.lastRenderedState,F=x(A,l);if(v.hasEagerState=!0,v.eagerState=F,Xr(F,A)){var z=o.interleaved;z===null?(v.next=v,hh(o)):(v.next=z.next,z.next=v),o.interleaved=v;return}}catch{}finally{}l=v0(i,o,v,f),l!==null&&(v=Qn(),Jr(l,i,f,v),H0(l,o,f))}}function z0(i){var o=i.alternate;return i===en||o!==null&&o===en}function B0(i,o){xl=dc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function H0(i,o,l){if((l&4194240)!==0){var f=o.lanes;f&=i.pendingLanes,l|=f,o.lanes=l,Cd(i,l)}}var mc={readContext:Ir,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},KA={readContext:Ir,useCallback:function(i,o){return fi().memoizedState=[i,o===void 0?null:o],i},useContext:Ir,useEffect:P0,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,hc(4194308,4,I0.bind(null,o,i),l)},useLayoutEffect:function(i,o){return hc(4194308,4,i,o)},useInsertionEffect:function(i,o){return hc(4,2,i,o)},useMemo:function(i,o){var l=fi();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var f=fi();return o=l!==void 0?l(o):o,f.memoizedState=f.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},f.queue=i,i=i.dispatch=qA.bind(null,en,i),[f.memoizedState,i]},useRef:function(i){var o=fi();return i={current:i},o.memoizedState=i},useState:C0,useDebugValue:Th,useDeferredValue:function(i){return fi().memoizedState=i},useTransition:function(){var i=C0(!1),o=i[0];return i=XA.bind(null,i[1]),fi().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var f=en,v=fi();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),En===null)throw Error(t(349));(oa&30)!==0||E0(f,o,l)}v.memoizedState=l;var x={value:l,getSnapshot:o};return v.queue=x,P0(A0.bind(null,f,x,i),[i]),f.flags|=2048,El(9,M0.bind(null,f,x,l,o),void 0,null),l},useId:function(){var i=fi(),o=En.identifierPrefix;if(Jt){var l=Ni,f=Ui;l=(f&~(1<<32-Zn(f)-1)).toString(32)+l,o=":"+o+"R"+l,l=Sl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=jA++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},ZA={readContext:Ir,useCallback:N0,useContext:Ir,useEffect:Ah,useImperativeHandle:U0,useInsertionEffect:L0,useLayoutEffect:D0,useMemo:F0,useReducer:Eh,useRef:R0,useState:function(){return Eh(wl)},useDebugValue:Th,useDeferredValue:function(i){var o=Ur();return O0(o,gn.memoizedState,i)},useTransition:function(){var i=Eh(wl)[0],o=Ur().memoizedState;return[i,o]},useMutableSource:S0,useSyncExternalStore:w0,useId:k0,unstable_isNewReconciler:!1},JA={readContext:Ir,useCallback:N0,useContext:Ir,useEffect:Ah,useImperativeHandle:U0,useInsertionEffect:L0,useLayoutEffect:D0,useMemo:F0,useReducer:Mh,useRef:R0,useState:function(){return Mh(wl)},useDebugValue:Th,useDeferredValue:function(i){var o=Ur();return gn===null?o.memoizedState=i:O0(o,gn.memoizedState,i)},useTransition:function(){var i=Mh(wl)[0],o=Ur().memoizedState;return[i,o]},useMutableSource:S0,useSyncExternalStore:w0,useId:k0,unstable_isNewReconciler:!1};function Yr(i,o){if(i&&i.defaultProps){o=$({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function bh(i,o,l,f){o=i.memoizedState,l=l(f,o),l=l==null?o:$({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var vc={isMounted:function(i){return(i=i._reactInternals)?Pi(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var f=Qn(),v=go(i),x=Oi(f,v);x.payload=o,l!=null&&(x.callback=l),o=ho(i,x,v),o!==null&&(Jr(o,i,v,f),lc(o,i,v))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var f=Qn(),v=go(i),x=Oi(f,v);x.tag=1,x.payload=o,l!=null&&(x.callback=l),o=ho(i,x,v),o!==null&&(Jr(o,i,v,f),lc(o,i,v))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=Qn(),f=go(i),v=Oi(l,f);v.tag=2,o!=null&&(v.callback=o),o=ho(i,v,f),o!==null&&(Jr(o,i,f,l),lc(o,i,f))}};function V0(i,o,l,f,v,x,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,x,A):o.prototype&&o.prototype.isPureReactComponent?!ul(l,f)||!ul(v,x):!0}function G0(i,o,l){var f=!1,v=uo,x=o.contextType;return typeof x=="object"&&x!==null?x=Ir(x):(v=ar(o)?ea:Bn.current,f=o.contextTypes,x=(f=f!=null)?Xa(i,v):uo),o=new o(l,x),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=vc,i.stateNode=o,o._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=x),o}function W0(i,o,l,f){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,f),o.state!==i&&vc.enqueueReplaceState(o,o.state,null)}function Ch(i,o,l,f){var v=i.stateNode;v.props=l,v.state=i.memoizedState,v.refs={},ph(i);var x=o.contextType;typeof x=="object"&&x!==null?v.context=Ir(x):(x=ar(o)?ea:Bn.current,v.context=Xa(i,x)),v.state=i.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(bh(i,o,x,l),v.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&vc.enqueueReplaceState(v,v.state,null),uc(i,l,v,f),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function ts(i,o){try{var l="",f=o;do l+=ee(f),f=f.return;while(f);var v=l}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:o,stack:v,digest:null}}function Rh(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function Ph(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var QA=typeof WeakMap=="function"?WeakMap:Map;function $0(i,o,l){l=Oi(-1,l),l.tag=3,l.payload={element:null};var f=o.value;return l.callback=function(){Ec||(Ec=!0,$h=f),Ph(i,o)},l}function j0(i,o,l){l=Oi(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var v=o.value;l.payload=function(){return f(v)},l.callback=function(){Ph(i,o)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Ph(i,o),typeof f!="function"&&(mo===null?mo=new Set([this]):mo.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),l}function X0(i,o,l){var f=i.pingCache;if(f===null){f=i.pingCache=new QA;var v=new Set;f.set(o,v)}else v=f.get(o),v===void 0&&(v=new Set,f.set(o,v));v.has(l)||(v.add(l),i=hT.bind(null,i,o,l),o.then(i,i))}function q0(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Y0(i,o,l,f,v){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Oi(-1,1),o.tag=2,ho(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var eT=R.ReactCurrentOwner,sr=!1;function Jn(i,o,l,f){o.child=i===null?m0(o,null,l,f):Za(o,i.child,l,f)}function K0(i,o,l,f,v){l=l.render;var x=o.ref;return Qa(o,v),f=Sh(i,o,l,f,x,v),l=wh(),i!==null&&!sr?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,ki(i,o,v)):(Jt&&l&&ih(o),o.flags|=1,Jn(i,o,f,v),o.child)}function Z0(i,o,l,f,v){if(i===null){var x=l.type;return typeof x=="function"&&!Jh(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=x,J0(i,o,x,f,v)):(i=Rc(l.type,null,f,o,o.mode,v),i.ref=o.ref,i.return=o,o.child=i)}if(x=i.child,(i.lanes&v)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:ul,l(A,f)&&i.ref===o.ref)return ki(i,o,v)}return o.flags|=1,i=yo(x,f),i.ref=o.ref,i.return=o,o.child=i}function J0(i,o,l,f,v){if(i!==null){var x=i.memoizedProps;if(ul(x,f)&&i.ref===o.ref)if(sr=!1,o.pendingProps=f=x,(i.lanes&v)!==0)(i.flags&131072)!==0&&(sr=!0);else return o.lanes=i.lanes,ki(i,o,v)}return Lh(i,o,l,f,v)}function Q0(i,o,l){var f=o.pendingProps,v=f.children,x=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(rs,Er),Er|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,$t(rs,Er),Er|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,$t(rs,Er),Er|=f}else x!==null?(f=x.baseLanes|l,o.memoizedState=null):f=l,$t(rs,Er),Er|=f;return Jn(i,o,v,l),o.child}function e_(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Lh(i,o,l,f,v){var x=ar(l)?ea:Bn.current;return x=Xa(o,x),Qa(o,v),l=Sh(i,o,l,f,x,v),f=wh(),i!==null&&!sr?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,ki(i,o,v)):(Jt&&f&&ih(o),o.flags|=1,Jn(i,o,l,v),o.child)}function t_(i,o,l,f,v){if(ar(l)){var x=!0;ec(o)}else x=!1;if(Qa(o,v),o.stateNode===null)_c(i,o),G0(o,l,f),Ch(o,l,f,v),f=!0;else if(i===null){var A=o.stateNode,F=o.memoizedProps;A.props=F;var z=A.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=Ir(ae):(ae=ar(l)?ea:Bn.current,ae=Xa(o,ae));var we=l.getDerivedStateFromProps,Te=typeof we=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==f||z!==ae)&&W0(o,A,f,ae),fo=!1;var Se=o.memoizedState;A.state=Se,uc(o,f,A,v),z=o.memoizedState,F!==f||Se!==z||or.current||fo?(typeof we=="function"&&(bh(o,l,we,f),z=o.memoizedState),(F=fo||V0(o,l,F,f,Se,z,ae))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=z),A.props=f,A.state=z,A.context=ae,f=F):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{A=o.stateNode,g0(i,o),F=o.memoizedProps,ae=o.type===o.elementType?F:Yr(o.type,F),A.props=ae,Te=o.pendingProps,Se=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=Ir(z):(z=ar(l)?ea:Bn.current,z=Xa(o,z));var We=l.getDerivedStateFromProps;(we=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==Te||Se!==z)&&W0(o,A,f,z),fo=!1,Se=o.memoizedState,A.state=Se,uc(o,f,A,v);var Ye=o.memoizedState;F!==Te||Se!==Ye||or.current||fo?(typeof We=="function"&&(bh(o,l,We,f),Ye=o.memoizedState),(ae=fo||V0(o,l,ae,f,Se,Ye,z)||!1)?(we||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,Ye,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,Ye,z)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===i.memoizedProps&&Se===i.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&Se===i.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=Ye),A.props=f,A.state=Ye,A.context=z,f=ae):(typeof A.componentDidUpdate!="function"||F===i.memoizedProps&&Se===i.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&Se===i.memoizedState||(o.flags|=1024),f=!1)}return Dh(i,o,l,f,x,v)}function Dh(i,o,l,f,v,x){e_(i,o);var A=(o.flags&128)!==0;if(!f&&!A)return v&&a0(o,l,!1),ki(i,o,x);f=o.stateNode,eT.current=o;var F=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,i!==null&&A?(o.child=Za(o,i.child,null,x),o.child=Za(o,null,F,x)):Jn(i,o,F,x),o.memoizedState=f.state,v&&a0(o,l,!0),o.child}function n_(i){var o=i.stateNode;o.pendingContext?i0(i,o.pendingContext,o.pendingContext!==o.context):o.context&&i0(i,o.context,!1),mh(i,o.containerInfo)}function r_(i,o,l,f,v){return Ka(),lh(v),o.flags|=256,Jn(i,o,l,f),o.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Uh(i){return{baseLanes:i,cachePool:null,transitions:null}}function i_(i,o,l){var f=o.pendingProps,v=Qt.current,x=!1,A=(o.flags&128)!==0,F;if((F=A)||(F=i!==null&&i.memoizedState===null?!1:(v&2)!==0),F?(x=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),$t(Qt,v&1),i===null)return sh(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=f.children,i=f.fallback,x?(f=o.mode,x=o.child,A={mode:"hidden",children:A},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=Pc(A,f,0,null),i=ca(i,f,l,null),x.return=o,i.return=o,x.sibling=i,o.child=x,o.child.memoizedState=Uh(l),o.memoizedState=Ih,i):Nh(o,A));if(v=i.memoizedState,v!==null&&(F=v.dehydrated,F!==null))return tT(i,o,A,f,F,v,l);if(x){x=f.fallback,A=o.mode,v=i.child,F=v.sibling;var z={mode:"hidden",children:f.children};return(A&1)===0&&o.child!==v?(f=o.child,f.childLanes=0,f.pendingProps=z,o.deletions=null):(f=yo(v,z),f.subtreeFlags=v.subtreeFlags&14680064),F!==null?x=yo(F,x):(x=ca(x,A,l,null),x.flags|=2),x.return=o,f.return=o,f.sibling=x,o.child=f,f=x,x=o.child,A=i.child.memoizedState,A=A===null?Uh(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=i.childLanes&~l,o.memoizedState=Ih,f}return x=i.child,i=x.sibling,f=yo(x,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=l),f.return=o,f.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=f,o.memoizedState=null,f}function Nh(i,o){return o=Pc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function gc(i,o,l,f){return f!==null&&lh(f),Za(o,i.child,null,l),i=Nh(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function tT(i,o,l,f,v,x,A){if(l)return o.flags&256?(o.flags&=-257,f=Rh(Error(t(422))),gc(i,o,A,f)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(x=f.fallback,v=o.mode,f=Pc({mode:"visible",children:f.children},v,0,null),x=ca(x,v,A,null),x.flags|=2,f.return=o,x.return=o,f.sibling=x,o.child=f,(o.mode&1)!==0&&Za(o,i.child,null,A),o.child.memoizedState=Uh(A),o.memoizedState=Ih,x);if((o.mode&1)===0)return gc(i,o,A,null);if(v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var F=f.dgst;return f=F,x=Error(t(419)),f=Rh(x,f,void 0),gc(i,o,A,f)}if(F=(A&i.childLanes)!==0,sr||F){if(f=En,f!==null){switch(A&-A){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(f.suspendedLanes|A))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,Fi(i,v),Jr(f,i,v,-1))}return Zh(),f=Rh(Error(t(421))),gc(i,o,A,f)}return v.data==="$?"?(o.flags|=128,o.child=i.child,o=pT.bind(null,i),v._reactRetry=o,null):(i=x.treeContext,wr=so(v.nextSibling),Sr=o,Jt=!0,qr=null,i!==null&&(Lr[Dr++]=Ui,Lr[Dr++]=Ni,Lr[Dr++]=ta,Ui=i.id,Ni=i.overflow,ta=o),o=Nh(o,f.children),o.flags|=4096,o)}function o_(i,o,l){i.lanes|=o;var f=i.alternate;f!==null&&(f.lanes|=o),dh(i.return,o,l)}function Fh(i,o,l,f,v){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:v}:(x.isBackwards=o,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=v)}function a_(i,o,l){var f=o.pendingProps,v=f.revealOrder,x=f.tail;if(Jn(i,o,f.children,l),f=Qt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&o_(i,l,o);else if(i.tag===19)o_(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if($t(Qt,f),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(l=o.child,v=null;l!==null;)i=l.alternate,i!==null&&cc(i)===null&&(v=l),l=l.sibling;l=v,l===null?(v=o.child,o.child=null):(v=l.sibling,l.sibling=null),Fh(o,!1,v,l,x);break;case"backwards":for(l=null,v=o.child,o.child=null;v!==null;){if(i=v.alternate,i!==null&&cc(i)===null){o.child=v;break}i=v.sibling,v.sibling=l,l=v,v=i}Fh(o,!0,l,null,x);break;case"together":Fh(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function _c(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ki(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),aa|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=yo(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=yo(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function nT(i,o,l){switch(o.tag){case 3:n_(o),Ka();break;case 5:x0(o);break;case 1:ar(o.type)&&ec(o);break;case 4:mh(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,v=o.memoizedProps.value;$t(ac,f._currentValue),f._currentValue=v;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?($t(Qt,Qt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?i_(i,o,l):($t(Qt,Qt.current&1),i=ki(i,o,l),i!==null?i.sibling:null);$t(Qt,Qt.current&1);break;case 19:if(f=(l&o.childLanes)!==0,(i.flags&128)!==0){if(f)return a_(i,o,l);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),$t(Qt,Qt.current),f)break;return null;case 22:case 23:return o.lanes=0,Q0(i,o,l)}return ki(i,o,l)}var s_,Oh,l_,u_;s_=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Oh=function(){},l_=function(i,o,l,f){var v=i.memoizedProps;if(v!==f){i=o.stateNode,ia(ci.current);var x=null;switch(l){case"input":v=Ve(i,v),f=Ve(i,f),x=[];break;case"select":v=$({},v,{value:void 0}),f=$({},f,{value:void 0}),x=[];break;case"textarea":v=Je(i,v),f=Je(i,f),x=[];break;default:typeof v.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Zu)}dt(l,f);var A;l=null;for(ae in v)if(!f.hasOwnProperty(ae)&&v.hasOwnProperty(ae)&&v[ae]!=null)if(ae==="style"){var F=v[ae];for(A in F)F.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?x||(x=[]):(x=x||[]).push(ae,null));for(ae in f){var z=f[ae];if(F=v?.[ae],f.hasOwnProperty(ae)&&z!==F&&(z!=null||F!=null))if(ae==="style")if(F){for(A in F)!F.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&F[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(x||(x=[]),x.push(ae,l)),l=z;else ae==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(x=x||[]).push(ae,z)):ae==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(ae,""+z):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(z!=null&&ae==="onScroll"&&qt("scroll",i),x||F===z||(x=[])):(x=x||[]).push(ae,z))}l&&(x=x||[]).push("style",l);var ae=x;(o.updateQueue=ae)&&(o.flags|=4)}},u_=function(i,o,l,f){l!==f&&(o.flags|=4)};function Ml(i,o){if(!Jt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Vn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(o)for(var v=i.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags&14680064,f|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=f,i.childLanes=l,o}function rT(i,o,l){var f=o.pendingProps;switch(oh(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(o),null;case 1:return ar(o.type)&&Qu(),Vn(o),null;case 3:return f=o.stateNode,es(),Yt(or),Yt(Bn),_h(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(ic(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,qr!==null&&(qh(qr),qr=null))),Oh(i,o),Vn(o),null;case 5:vh(o);var v=ia(yl.current);if(l=o.type,i!==null&&o.stateNode!=null)l_(i,o,l,f,v),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return Vn(o),null}if(i=ia(ci.current),ic(o)){f=o.stateNode,l=o.type;var x=o.memoizedProps;switch(f[ui]=o,f[pl]=x,i=(o.mode&1)!==0,l){case"dialog":qt("cancel",f),qt("close",f);break;case"iframe":case"object":case"embed":qt("load",f);break;case"video":case"audio":for(v=0;v<fl.length;v++)qt(fl[v],f);break;case"source":qt("error",f);break;case"img":case"image":case"link":qt("error",f),qt("load",f);break;case"details":qt("toggle",f);break;case"input":ue(f,x),qt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},qt("invalid",f);break;case"textarea":I(f,x),qt("invalid",f)}dt(l,x),v=null;for(var A in x)if(x.hasOwnProperty(A)){var F=x[A];A==="children"?typeof F=="string"?f.textContent!==F&&(x.suppressHydrationWarning!==!0&&Ku(f.textContent,F,i),v=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&Ku(f.textContent,F,i),v=["children",""+F]):a.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&qt("scroll",f)}switch(l){case"input":ze(f),ge(f,x,!0);break;case"textarea":ze(f),q(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Zu)}f=v,o.updateQueue=f,f!==null&&(o.flags|=4)}else{A=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ae(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=A.createElement(l,{is:f.is}):(i=A.createElement(l),l==="select"&&(A=i,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):i=A.createElementNS(i,l),i[ui]=o,i[pl]=f,s_(i,o,!1,!1),o.stateNode=i;e:{switch(A=st(l,f),l){case"dialog":qt("cancel",i),qt("close",i),v=f;break;case"iframe":case"object":case"embed":qt("load",i),v=f;break;case"video":case"audio":for(v=0;v<fl.length;v++)qt(fl[v],i);v=f;break;case"source":qt("error",i),v=f;break;case"img":case"image":case"link":qt("error",i),qt("load",i),v=f;break;case"details":qt("toggle",i),v=f;break;case"input":ue(i,f),v=Ve(i,f),qt("invalid",i);break;case"option":v=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},v=$({},f,{value:void 0}),qt("invalid",i);break;case"textarea":I(i,f),v=Je(i,f),qt("invalid",i);break;default:v=f}dt(l,v),F=v;for(x in F)if(F.hasOwnProperty(x)){var z=F[x];x==="style"?De(i,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ke(i,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Ue(i,z):typeof z=="number"&&Ue(i,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?z!=null&&x==="onScroll"&&qt("scroll",i):z!=null&&M(i,x,z,A))}switch(l){case"input":ze(i),ge(i,f,!1);break;case"textarea":ze(i),q(i);break;case"option":f.value!=null&&i.setAttribute("value",""+ve(f.value));break;case"select":i.multiple=!!f.multiple,x=f.value,x!=null?Ne(i,!!f.multiple,x,!1):f.defaultValue!=null&&Ne(i,!!f.multiple,f.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=Zu)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Vn(o),null;case 6:if(i&&o.stateNode!=null)u_(i,o,i.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(l=ia(yl.current),ia(ci.current),ic(o)){if(f=o.stateNode,l=o.memoizedProps,f[ui]=o,(x=f.nodeValue!==l)&&(i=Sr,i!==null))switch(i.tag){case 3:Ku(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ku(f.nodeValue,l,(i.mode&1)!==0)}x&&(o.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[ui]=o,o.stateNode=f}return Vn(o),null;case 13:if(Yt(Qt),f=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Jt&&wr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)d0(),Ka(),o.flags|=98560,x=!1;else if(x=ic(o),f!==null&&f.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=o.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[ui]=o}else Ka(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Vn(o),x=!1}else qr!==null&&(qh(qr),qr=null),x=!0;if(!x)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(Qt.current&1)!==0?_n===0&&(_n=3):Zh())),o.updateQueue!==null&&(o.flags|=4),Vn(o),null);case 4:return es(),Oh(i,o),i===null&&dl(o.stateNode.containerInfo),Vn(o),null;case 10:return fh(o.type._context),Vn(o),null;case 17:return ar(o.type)&&Qu(),Vn(o),null;case 19:if(Yt(Qt),x=o.memoizedState,x===null)return Vn(o),null;if(f=(o.flags&128)!==0,A=x.rendering,A===null)if(f)Ml(x,!1);else{if(_n!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(A=cc(i),A!==null){for(o.flags|=128,Ml(x,!1),f=A.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=l,l=o.child;l!==null;)x=l,i=f,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,i=A.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return $t(Qt,Qt.current&1|2),o.child}i=i.sibling}x.tail!==null&&je()>is&&(o.flags|=128,f=!0,Ml(x,!1),o.lanes=4194304)}else{if(!f)if(i=cc(A),i!==null){if(o.flags|=128,f=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Ml(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Jt)return Vn(o),null}else 2*je()-x.renderingStartTime>is&&l!==1073741824&&(o.flags|=128,f=!0,Ml(x,!1),o.lanes=4194304);x.isBackwards?(A.sibling=o.child,o.child=A):(l=x.last,l!==null?l.sibling=A:o.child=A,x.last=A)}return x.tail!==null?(o=x.tail,x.rendering=o,x.tail=o.sibling,x.renderingStartTime=je(),o.sibling=null,l=Qt.current,$t(Qt,f?l&1|2:l&1),o):(Vn(o),null);case 22:case 23:return Kh(),f=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(Er&1073741824)!==0&&(Vn(o),o.subtreeFlags&6&&(o.flags|=8192)):Vn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function iT(i,o){switch(oh(o),o.tag){case 1:return ar(o.type)&&Qu(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return es(),Yt(or),Yt(Bn),_h(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return vh(o),null;case 13:if(Yt(Qt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ka()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Yt(Qt),null;case 4:return es(),null;case 10:return fh(o.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var yc=!1,Gn=!1,oT=typeof WeakSet=="function"?WeakSet:Set,qe=null;function ns(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){on(i,o,f)}else l.current=null}function kh(i,o,l){try{l()}catch(f){on(i,o,f)}}var c_=!1;function aT(i,o){if(Kd=zu,i=Vg(),Vd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var v=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,F=-1,z=-1,ae=0,we=0,Te=i,Se=null;t:for(;;){for(var We;Te!==l||v!==0&&Te.nodeType!==3||(F=A+v),Te!==x||f!==0&&Te.nodeType!==3||(z=A+f),Te.nodeType===3&&(A+=Te.nodeValue.length),(We=Te.firstChild)!==null;)Se=Te,Te=We;for(;;){if(Te===i)break t;if(Se===l&&++ae===v&&(F=A),Se===x&&++we===f&&(z=A),(We=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=We}l=F===-1||z===-1?null:{start:F,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zd={focusedElem:i,selectionRange:l},zu=!1,qe=o;qe!==null;)if(o=qe,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,qe=i;else for(;qe!==null;){o=qe;try{var Ye=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,un=Ye.memoizedState,K=o.stateNode,G=K.getSnapshotBeforeUpdate(o.elementType===o.type?Ze:Yr(o.type,Ze),un);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){on(o,o.return,Le)}if(i=o.sibling,i!==null){i.return=o.return,qe=i;break}qe=o.return}return Ye=c_,c_=!1,Ye}function Al(i,o,l){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var v=f=f.next;do{if((v.tag&i)===i){var x=v.destroy;v.destroy=void 0,x!==void 0&&kh(o,l,x)}v=v.next}while(v!==f)}}function xc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==o)}}function zh(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function f_(i){var o=i.alternate;o!==null&&(i.alternate=null,f_(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[ui],delete o[pl],delete o[th],delete o[VA],delete o[GA])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function d_(i){return i.tag===5||i.tag===3||i.tag===4}function h_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||d_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Bh(i,o,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Zu));else if(f!==4&&(i=i.child,i!==null))for(Bh(i,o,l),i=i.sibling;i!==null;)Bh(i,o,l),i=i.sibling}function Hh(i,o,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Hh(i,o,l),i=i.sibling;i!==null;)Hh(i,o,l),i=i.sibling}var Rn=null,Kr=!1;function po(i,o,l){for(l=l.child;l!==null;)p_(i,o,l),l=l.sibling}function p_(i,o,l){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(rr,l)}catch{}switch(l.tag){case 5:Gn||ns(l,o);case 6:var f=Rn,v=Kr;Rn=null,po(i,o,l),Rn=f,Kr=v,Rn!==null&&(Kr?(i=Rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&(Kr?(i=Rn,l=l.stateNode,i.nodeType===8?eh(i.parentNode,l):i.nodeType===1&&eh(i,l),rl(i)):eh(Rn,l.stateNode));break;case 4:f=Rn,v=Kr,Rn=l.stateNode.containerInfo,Kr=!0,po(i,o,l),Rn=f,Kr=v;break;case 0:case 11:case 14:case 15:if(!Gn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){v=f=f.next;do{var x=v,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&kh(l,o,A),v=v.next}while(v!==f)}po(i,o,l);break;case 1:if(!Gn&&(ns(l,o),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){on(l,o,F)}po(i,o,l);break;case 21:po(i,o,l);break;case 22:l.mode&1?(Gn=(f=Gn)||l.memoizedState!==null,po(i,o,l),Gn=f):po(i,o,l);break;default:po(i,o,l)}}function m_(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new oT),o.forEach(function(f){var v=mT.bind(null,i,f);l.has(f)||(l.add(f),f.then(v,v))})}}function Zr(i,o){var l=o.deletions;if(l!==null)for(var f=0;f<l.length;f++){var v=l[f];try{var x=i,A=o,F=A;e:for(;F!==null;){switch(F.tag){case 5:Rn=F.stateNode,Kr=!1;break e;case 3:Rn=F.stateNode.containerInfo,Kr=!0;break e;case 4:Rn=F.stateNode.containerInfo,Kr=!0;break e}F=F.return}if(Rn===null)throw Error(t(160));p_(x,A,v),Rn=null,Kr=!1;var z=v.alternate;z!==null&&(z.return=null),v.return=null}catch(ae){on(v,o,ae)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)v_(o,i),o=o.sibling}function v_(i,o){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Zr(o,i),di(i),f&4){try{Al(3,i,i.return),xc(3,i)}catch(Ze){on(i,i.return,Ze)}try{Al(5,i,i.return)}catch(Ze){on(i,i.return,Ze)}}break;case 1:Zr(o,i),di(i),f&512&&l!==null&&ns(l,l.return);break;case 5:if(Zr(o,i),di(i),f&512&&l!==null&&ns(l,l.return),i.flags&32){var v=i.stateNode;try{Ue(v,"")}catch(Ze){on(i,i.return,Ze)}}if(f&4&&(v=i.stateNode,v!=null)){var x=i.memoizedProps,A=l!==null?l.memoizedProps:x,F=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&ce(v,x),st(F,A);var ae=st(F,x);for(A=0;A<z.length;A+=2){var we=z[A],Te=z[A+1];we==="style"?De(v,Te):we==="dangerouslySetInnerHTML"?Ke(v,Te):we==="children"?Ue(v,Te):M(v,we,Te,ae)}switch(F){case"input":xe(v,x);break;case"textarea":b(v,x);break;case"select":var Se=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var We=x.value;We!=null?Ne(v,!!x.multiple,We,!1):Se!==!!x.multiple&&(x.defaultValue!=null?Ne(v,!!x.multiple,x.defaultValue,!0):Ne(v,!!x.multiple,x.multiple?[]:"",!1))}v[pl]=x}catch(Ze){on(i,i.return,Ze)}}break;case 6:if(Zr(o,i),di(i),f&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,x=i.memoizedProps;try{v.nodeValue=x}catch(Ze){on(i,i.return,Ze)}}break;case 3:if(Zr(o,i),di(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{rl(o.containerInfo)}catch(Ze){on(i,i.return,Ze)}break;case 4:Zr(o,i),di(i);break;case 13:Zr(o,i),di(i),v=i.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(Wh=je())),f&4&&m_(i);break;case 22:if(we=l!==null&&l.memoizedState!==null,i.mode&1?(Gn=(ae=Gn)||we,Zr(o,i),Gn=ae):Zr(o,i),di(i),f&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!we&&(i.mode&1)!==0)for(qe=i,we=i.child;we!==null;){for(Te=qe=we;qe!==null;){switch(Se=qe,We=Se.child,Se.tag){case 0:case 11:case 14:case 15:Al(4,Se,Se.return);break;case 1:ns(Se,Se.return);var Ye=Se.stateNode;if(typeof Ye.componentWillUnmount=="function"){f=Se,l=Se.return;try{o=f,Ye.props=o.memoizedProps,Ye.state=o.memoizedState,Ye.componentWillUnmount()}catch(Ze){on(f,l,Ze)}}break;case 5:ns(Se,Se.return);break;case 22:if(Se.memoizedState!==null){y_(Te);continue}}We!==null?(We.return=Se,qe=We):y_(Te)}we=we.sibling}e:for(we=null,Te=i;;){if(Te.tag===5){if(we===null){we=Te;try{v=Te.stateNode,ae?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=Te.stateNode,z=Te.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=Tt("display",A))}catch(Ze){on(i,i.return,Ze)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=ae?"":Te.memoizedProps}catch(Ze){on(i,i.return,Ze)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Zr(o,i),di(i),f&4&&m_(i);break;case 21:break;default:Zr(o,i),di(i)}}function di(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(d_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var v=f.stateNode;f.flags&32&&(Ue(v,""),f.flags&=-33);var x=h_(i);Hh(i,x,v);break;case 3:case 4:var A=f.stateNode.containerInfo,F=h_(i);Bh(i,F,A);break;default:throw Error(t(161))}}catch(z){on(i,i.return,z)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function sT(i,o,l){qe=i,g_(i)}function g_(i,o,l){for(var f=(i.mode&1)!==0;qe!==null;){var v=qe,x=v.child;if(v.tag===22&&f){var A=v.memoizedState!==null||yc;if(!A){var F=v.alternate,z=F!==null&&F.memoizedState!==null||Gn;F=yc;var ae=Gn;if(yc=A,(Gn=z)&&!ae)for(qe=v;qe!==null;)A=qe,z=A.child,A.tag===22&&A.memoizedState!==null?x_(v):z!==null?(z.return=A,qe=z):x_(v);for(;x!==null;)qe=x,g_(x),x=x.sibling;qe=v,yc=F,Gn=ae}__(i)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,qe=x):__(i)}}function __(i){for(;qe!==null;){var o=qe;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Gn||xc(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!Gn)if(l===null)f.componentDidMount();else{var v=o.elementType===o.type?l.memoizedProps:Yr(o.type,l.memoizedProps);f.componentDidUpdate(v,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=o.updateQueue;x!==null&&y0(o,x,f);break;case 3:var A=o.updateQueue;if(A!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}y0(o,A,l)}break;case 5:var F=o.stateNode;if(l===null&&o.flags&4){l=F;var z=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ae=o.alternate;if(ae!==null){var we=ae.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&rl(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gn||o.flags&512&&zh(o)}catch(Se){on(o,o.return,Se)}}if(o===i){qe=null;break}if(l=o.sibling,l!==null){l.return=o.return,qe=l;break}qe=o.return}}function y_(i){for(;qe!==null;){var o=qe;if(o===i){qe=null;break}var l=o.sibling;if(l!==null){l.return=o.return,qe=l;break}qe=o.return}}function x_(i){for(;qe!==null;){var o=qe;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{xc(4,o)}catch(z){on(o,l,z)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var v=o.return;try{f.componentDidMount()}catch(z){on(o,v,z)}}var x=o.return;try{zh(o)}catch(z){on(o,x,z)}break;case 5:var A=o.return;try{zh(o)}catch(z){on(o,A,z)}}}catch(z){on(o,o.return,z)}if(o===i){qe=null;break}var F=o.sibling;if(F!==null){F.return=o.return,qe=F;break}qe=o.return}}var lT=Math.ceil,Sc=R.ReactCurrentDispatcher,Vh=R.ReactCurrentOwner,Nr=R.ReactCurrentBatchConfig,Rt=0,En=null,dn=null,Pn=0,Er=0,rs=lo(0),_n=0,Tl=null,aa=0,wc=0,Gh=0,bl=null,lr=null,Wh=0,is=1/0,zi=null,Ec=!1,$h=null,mo=null,Mc=!1,vo=null,Ac=0,Cl=0,jh=null,Tc=-1,bc=0;function Qn(){return(Rt&6)!==0?je():Tc!==-1?Tc:Tc=je()}function go(i){return(i.mode&1)===0?1:(Rt&2)!==0&&Pn!==0?Pn&-Pn:$A.transition!==null?(bc===0&&(bc=Fu()),bc):(i=Bt,i!==0||(i=window.event,i=i===void 0?16:wg(i.type)),i)}function Jr(i,o,l,f){if(50<Cl)throw Cl=0,jh=null,Error(t(185));Js(i,l,f),((Rt&2)===0||i!==En)&&(i===En&&((Rt&2)===0&&(wc|=l),_n===4&&_o(i,Pn)),ur(i,f),l===1&&Rt===0&&(o.mode&1)===0&&(is=je()+500,tc&&co()))}function ur(i,o){var l=i.callbackNode;ir(i,o);var f=Pr(i,i===En?Pn:0);if(f===0)l!==null&&Ge(l),i.callbackNode=null,i.callbackPriority=0;else if(o=f&-f,i.callbackPriority!==o){if(l!=null&&Ge(l),o===1)i.tag===0?WA(w_.bind(null,i)):s0(w_.bind(null,i)),BA(function(){(Rt&6)===0&&co()}),l=null;else{switch(pg(f)){case 1:l=ht;break;case 4:l=mt;break;case 16:l=Wt;break;case 536870912:l=ln;break;default:l=Wt}l=P_(l,S_.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function S_(i,o){if(Tc=-1,bc=0,(Rt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(os()&&i.callbackNode!==l)return null;var f=Pr(i,i===En?Pn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||o)o=Cc(i,f);else{o=f;var v=Rt;Rt|=2;var x=M_();(En!==i||Pn!==o)&&(zi=null,is=je()+500,la(i,o));do try{fT();break}catch(F){E_(i,F)}while(!0);ch(),Sc.current=x,Rt=v,dn!==null?o=0:(En=null,Pn=0,o=_n)}if(o!==0){if(o===2&&(v=Jo(i),v!==0&&(f=v,o=Xh(i,v))),o===1)throw l=Tl,la(i,0),_o(i,f),ur(i,je()),l;if(o===6)_o(i,f);else{if(v=i.current.alternate,(f&30)===0&&!uT(v)&&(o=Cc(i,f),o===2&&(x=Jo(i),x!==0&&(f=x,o=Xh(i,x))),o===1))throw l=Tl,la(i,0),_o(i,f),ur(i,je()),l;switch(i.finishedWork=v,i.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:ua(i,lr,zi);break;case 3:if(_o(i,f),(f&130023424)===f&&(o=Wh+500-je(),10<o)){if(Pr(i,0)!==0)break;if(v=i.suspendedLanes,(v&f)!==f){Qn(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=Qd(ua.bind(null,i,lr,zi),o);break}ua(i,lr,zi);break;case 4:if(_o(i,f),(f&4194240)===f)break;for(o=i.eventTimes,v=-1;0<f;){var A=31-Zn(f);x=1<<A,A=o[A],A>v&&(v=A),f&=~x}if(f=v,f=je()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*lT(f/1960))-f,10<f){i.timeoutHandle=Qd(ua.bind(null,i,lr,zi),f);break}ua(i,lr,zi);break;case 5:ua(i,lr,zi);break;default:throw Error(t(329))}}}return ur(i,je()),i.callbackNode===l?S_.bind(null,i):null}function Xh(i,o){var l=bl;return i.current.memoizedState.isDehydrated&&(la(i,o).flags|=256),i=Cc(i,o),i!==2&&(o=lr,lr=l,o!==null&&qh(o)),i}function qh(i){lr===null?lr=i:lr.push.apply(lr,i)}function uT(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var v=l[f],x=v.getSnapshot;v=v.value;try{if(!Xr(x(),v))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function _o(i,o){for(o&=~Gh,o&=~wc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-Zn(o),f=1<<l;i[l]=-1,o&=~f}}function w_(i){if((Rt&6)!==0)throw Error(t(327));os();var o=Pr(i,0);if((o&1)===0)return ur(i,je()),null;var l=Cc(i,o);if(i.tag!==0&&l===2){var f=Jo(i);f!==0&&(o=f,l=Xh(i,f))}if(l===1)throw l=Tl,la(i,0),_o(i,o),ur(i,je()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,ua(i,lr,zi),ur(i,je()),null}function Yh(i,o){var l=Rt;Rt|=1;try{return i(o)}finally{Rt=l,Rt===0&&(is=je()+500,tc&&co())}}function sa(i){vo!==null&&vo.tag===0&&(Rt&6)===0&&os();var o=Rt;Rt|=1;var l=Nr.transition,f=Bt;try{if(Nr.transition=null,Bt=1,i)return i()}finally{Bt=f,Nr.transition=l,Rt=o,(Rt&6)===0&&co()}}function Kh(){Er=rs.current,Yt(rs)}function la(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,zA(l)),dn!==null)for(l=dn.return;l!==null;){var f=l;switch(oh(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Qu();break;case 3:es(),Yt(or),Yt(Bn),_h();break;case 5:vh(f);break;case 4:es();break;case 13:Yt(Qt);break;case 19:Yt(Qt);break;case 10:fh(f.type._context);break;case 22:case 23:Kh()}l=l.return}if(En=i,dn=i=yo(i.current,null),Pn=Er=o,_n=0,Tl=null,Gh=wc=aa=0,lr=bl=null,ra!==null){for(o=0;o<ra.length;o++)if(l=ra[o],f=l.interleaved,f!==null){l.interleaved=null;var v=f.next,x=l.pending;if(x!==null){var A=x.next;x.next=v,f.next=A}l.pending=f}ra=null}return i}function E_(i,o){do{var l=dn;try{if(ch(),fc.current=mc,dc){for(var f=en.memoizedState;f!==null;){var v=f.queue;v!==null&&(v.pending=null),f=f.next}dc=!1}if(oa=0,wn=gn=en=null,xl=!1,Sl=0,Vh.current=null,l===null||l.return===null){_n=1,Tl=o,dn=null;break}e:{var x=i,A=l.return,F=l,z=o;if(o=Pn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ae=z,we=F,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=we.alternate;Se?(we.updateQueue=Se.updateQueue,we.memoizedState=Se.memoizedState,we.lanes=Se.lanes):(we.updateQueue=null,we.memoizedState=null)}var We=q0(A);if(We!==null){We.flags&=-257,Y0(We,A,F,x,o),We.mode&1&&X0(x,ae,o),o=We,z=ae;var Ye=o.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(z),o.updateQueue=Ze}else Ye.add(z);break e}else{if((o&1)===0){X0(x,ae,o),Zh();break e}z=Error(t(426))}}else if(Jt&&F.mode&1){var un=q0(A);if(un!==null){(un.flags&65536)===0&&(un.flags|=256),Y0(un,A,F,x,o),lh(ts(z,F));break e}}x=z=ts(z,F),_n!==4&&(_n=2),bl===null?bl=[x]:bl.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,o&=-o,x.lanes|=o;var K=$0(x,z,o);_0(x,K);break e;case 1:F=z;var G=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(mo===null||!mo.has(te)))){x.flags|=65536,o&=-o,x.lanes|=o;var Le=j0(x,F,o);_0(x,Le);break e}}x=x.return}while(x!==null)}T_(l)}catch(Qe){o=Qe,dn===l&&l!==null&&(dn=l=l.return);continue}break}while(!0)}function M_(){var i=Sc.current;return Sc.current=mc,i===null?mc:i}function Zh(){(_n===0||_n===3||_n===2)&&(_n=4),En===null||(aa&268435455)===0&&(wc&268435455)===0||_o(En,Pn)}function Cc(i,o){var l=Rt;Rt|=2;var f=M_();(En!==i||Pn!==o)&&(zi=null,la(i,o));do try{cT();break}catch(v){E_(i,v)}while(!0);if(ch(),Rt=l,Sc.current=f,dn!==null)throw Error(t(261));return En=null,Pn=0,_n}function cT(){for(;dn!==null;)A_(dn)}function fT(){for(;dn!==null&&!et();)A_(dn)}function A_(i){var o=R_(i.alternate,i,Er);i.memoizedProps=i.pendingProps,o===null?T_(i):dn=o,Vh.current=null}function T_(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=rT(l,o,Er),l!==null){dn=l;return}}else{if(l=iT(l,o),l!==null){l.flags&=32767,dn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{_n=6,dn=null;return}}if(o=o.sibling,o!==null){dn=o;return}dn=o=i}while(o!==null);_n===0&&(_n=5)}function ua(i,o,l){var f=Bt,v=Nr.transition;try{Nr.transition=null,Bt=1,dT(i,o,l,f)}finally{Nr.transition=v,Bt=f}return null}function dT(i,o,l,f){do os();while(vo!==null);if((Rt&6)!==0)throw Error(t(327));l=i.finishedWork;var v=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(j1(i,x),i===En&&(dn=En=null,Pn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Mc||(Mc=!0,P_(Wt,function(){return os(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Nr.transition,Nr.transition=null;var A=Bt;Bt=1;var F=Rt;Rt|=4,Vh.current=null,aT(i,l),v_(l,i),DA(Zd),zu=!!Kd,Zd=Kd=null,i.current=l,sT(l),at(),Rt=F,Bt=A,Nr.transition=x}else i.current=l;if(Mc&&(Mc=!1,vo=i,Ac=v),x=i.pendingLanes,x===0&&(mo=null),yt(l.stateNode),ur(i,je()),o!==null)for(f=i.onRecoverableError,l=0;l<o.length;l++)v=o[l],f(v.value,{componentStack:v.stack,digest:v.digest});if(Ec)throw Ec=!1,i=$h,$h=null,i;return(Ac&1)!==0&&i.tag!==0&&os(),x=i.pendingLanes,(x&1)!==0?i===jh?Cl++:(Cl=0,jh=i):Cl=0,co(),null}function os(){if(vo!==null){var i=pg(Ac),o=Nr.transition,l=Bt;try{if(Nr.transition=null,Bt=16>i?16:i,vo===null)var f=!1;else{if(i=vo,vo=null,Ac=0,(Rt&6)!==0)throw Error(t(331));var v=Rt;for(Rt|=4,qe=i.current;qe!==null;){var x=qe,A=x.child;if((qe.flags&16)!==0){var F=x.deletions;if(F!==null){for(var z=0;z<F.length;z++){var ae=F[z];for(qe=ae;qe!==null;){var we=qe;switch(we.tag){case 0:case 11:case 15:Al(8,we,x)}var Te=we.child;if(Te!==null)Te.return=we,qe=Te;else for(;qe!==null;){we=qe;var Se=we.sibling,We=we.return;if(f_(we),we===ae){qe=null;break}if(Se!==null){Se.return=We,qe=Se;break}qe=We}}}var Ye=x.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var un=Ze.sibling;Ze.sibling=null,Ze=un}while(Ze!==null)}}qe=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,qe=A;else e:for(;qe!==null;){if(x=qe,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Al(9,x,x.return)}var K=x.sibling;if(K!==null){K.return=x.return,qe=K;break e}qe=x.return}}var G=i.current;for(qe=G;qe!==null;){A=qe;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,qe=te;else e:for(A=G;qe!==null;){if(F=qe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:xc(9,F)}}catch(Qe){on(F,F.return,Qe)}if(F===A){qe=null;break e}var Le=F.sibling;if(Le!==null){Le.return=F.return,qe=Le;break e}qe=F.return}}if(Rt=v,co(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(rr,i)}catch{}f=!0}return f}finally{Bt=l,Nr.transition=o}}return!1}function b_(i,o,l){o=ts(l,o),o=$0(i,o,1),i=ho(i,o,1),o=Qn(),i!==null&&(Js(i,1,o),ur(i,o))}function on(i,o,l){if(i.tag===3)b_(i,i,l);else for(;o!==null;){if(o.tag===3){b_(o,i,l);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(mo===null||!mo.has(f))){i=ts(l,i),i=j0(o,i,1),o=ho(o,i,1),i=Qn(),o!==null&&(Js(o,1,i),ur(o,i));break}}o=o.return}}function hT(i,o,l){var f=i.pingCache;f!==null&&f.delete(o),o=Qn(),i.pingedLanes|=i.suspendedLanes&l,En===i&&(Pn&l)===l&&(_n===4||_n===3&&(Pn&130023424)===Pn&&500>je()-Wh?la(i,0):Gh|=l),ur(i,o)}function C_(i,o){o===0&&((i.mode&1)===0?o=1:(o=eo,eo<<=1,(eo&130023424)===0&&(eo=4194304)));var l=Qn();i=Fi(i,o),i!==null&&(Js(i,o,l),ur(i,l))}function pT(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),C_(i,l)}function mT(i,o){var l=0;switch(i.tag){case 13:var f=i.stateNode,v=i.memoizedState;v!==null&&(l=v.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),C_(i,l)}var R_;R_=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||or.current)sr=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return sr=!1,nT(i,o,l);sr=(i.flags&131072)!==0}else sr=!1,Jt&&(o.flags&1048576)!==0&&l0(o,rc,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;_c(i,o),i=o.pendingProps;var v=Xa(o,Bn.current);Qa(o,l),v=Sh(null,o,f,i,v,l);var x=wh();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,ar(f)?(x=!0,ec(o)):x=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,ph(o),v.updater=vc,o.stateNode=v,v._reactInternals=o,Ch(o,f,i,l),o=Dh(null,o,f,!0,x,l)):(o.tag=0,Jt&&x&&ih(o),Jn(null,o,v,l),o=o.child),o;case 16:f=o.elementType;e:{switch(_c(i,o),i=o.pendingProps,v=f._init,f=v(f._payload),o.type=f,v=o.tag=gT(f),i=Yr(f,i),v){case 0:o=Lh(null,o,f,i,l);break e;case 1:o=t_(null,o,f,i,l);break e;case 11:o=K0(null,o,f,i,l);break e;case 14:o=Z0(null,o,f,Yr(f.type,i),l);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Yr(f,v),Lh(i,o,f,v,l);case 1:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Yr(f,v),t_(i,o,f,v,l);case 3:e:{if(n_(o),i===null)throw Error(t(387));f=o.pendingProps,x=o.memoizedState,v=x.element,g0(i,o),uc(o,f,null,l);var A=o.memoizedState;if(f=A.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=x,o.memoizedState=x,o.flags&256){v=ts(Error(t(423)),o),o=r_(i,o,f,l,v);break e}else if(f!==v){v=ts(Error(t(424)),o),o=r_(i,o,f,l,v);break e}else for(wr=so(o.stateNode.containerInfo.firstChild),Sr=o,Jt=!0,qr=null,l=m0(o,null,f,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ka(),f===v){o=ki(i,o,l);break e}Jn(i,o,f,l)}o=o.child}return o;case 5:return x0(o),i===null&&sh(o),f=o.type,v=o.pendingProps,x=i!==null?i.memoizedProps:null,A=v.children,Jd(f,v)?A=null:x!==null&&Jd(f,x)&&(o.flags|=32),e_(i,o),Jn(i,o,A,l),o.child;case 6:return i===null&&sh(o),null;case 13:return i_(i,o,l);case 4:return mh(o,o.stateNode.containerInfo),f=o.pendingProps,i===null?o.child=Za(o,null,f,l):Jn(i,o,f,l),o.child;case 11:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Yr(f,v),K0(i,o,f,v,l);case 7:return Jn(i,o,o.pendingProps,l),o.child;case 8:return Jn(i,o,o.pendingProps.children,l),o.child;case 12:return Jn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(f=o.type._context,v=o.pendingProps,x=o.memoizedProps,A=v.value,$t(ac,f._currentValue),f._currentValue=A,x!==null)if(Xr(x.value,A)){if(x.children===v.children&&!or.current){o=ki(i,o,l);break e}}else for(x=o.child,x!==null&&(x.return=o);x!==null;){var F=x.dependencies;if(F!==null){A=x.child;for(var z=F.firstContext;z!==null;){if(z.context===f){if(x.tag===1){z=Oi(-1,l&-l),z.tag=2;var ae=x.updateQueue;if(ae!==null){ae=ae.shared;var we=ae.pending;we===null?z.next=z:(z.next=we.next,we.next=z),ae.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),dh(x.return,l,o),F.lanes|=l;break}z=z.next}}else if(x.tag===10)A=x.type===o.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,F=A.alternate,F!==null&&(F.lanes|=l),dh(A,l,o),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===o){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Jn(i,o,v.children,l),o=o.child}return o;case 9:return v=o.type,f=o.pendingProps.children,Qa(o,l),v=Ir(v),f=f(v),o.flags|=1,Jn(i,o,f,l),o.child;case 14:return f=o.type,v=Yr(f,o.pendingProps),v=Yr(f.type,v),Z0(i,o,f,v,l);case 15:return J0(i,o,o.type,o.pendingProps,l);case 17:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Yr(f,v),_c(i,o),o.tag=1,ar(f)?(i=!0,ec(o)):i=!1,Qa(o,l),G0(o,f,v),Ch(o,f,v,l),Dh(null,o,f,!0,i,l);case 19:return a_(i,o,l);case 22:return Q0(i,o,l)}throw Error(t(156,o.tag))};function P_(i,o){return fe(i,o)}function vT(i,o,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fr(i,o,l,f){return new vT(i,o,l,f)}function Jh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function gT(i){if(typeof i=="function")return Jh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ne)return 11;if(i===Q)return 14}return 2}function yo(i,o){var l=i.alternate;return l===null?(l=Fr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Rc(i,o,l,f,v,x){var A=2;if(f=i,typeof i=="function")Jh(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case U:return ca(l.children,v,x,o);case se:A=8,v|=8;break;case C:return i=Fr(12,l,o,v|2),i.elementType=C,i.lanes=x,i;case pe:return i=Fr(13,l,o,v),i.elementType=pe,i.lanes=x,i;case H:return i=Fr(19,l,o,v),i.elementType=H,i.lanes=x,i;case re:return Pc(l,v,x,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case O:A=10;break e;case oe:A=9;break e;case ne:A=11;break e;case Q:A=14;break e;case le:A=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Fr(A,l,o,v),o.elementType=i,o.type=f,o.lanes=x,o}function ca(i,o,l,f){return i=Fr(7,i,f,o),i.lanes=l,i}function Pc(i,o,l,f){return i=Fr(22,i,f,o),i.elementType=re,i.lanes=l,i.stateNode={isHidden:!1},i}function Qh(i,o,l){return i=Fr(6,i,null,o),i.lanes=l,i}function ep(i,o,l){return o=Fr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function _T(i,o,l,f,v){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=f,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function tp(i,o,l,f,v,x,A,F,z){return i=new _T(i,o,l,F,z),o===1?(o=1,x===!0&&(o|=8)):o=0,x=Fr(3,null,null,o),i.current=x,x.stateNode=i,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ph(x),i}function yT(i,o,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:i,containerInfo:o,implementation:l}}function L_(i){if(!i)return uo;i=i._reactInternals;e:{if(Pi(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(ar(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(ar(l))return o0(i,l,o)}return o}function D_(i,o,l,f,v,x,A,F,z){return i=tp(l,f,!0,i,v,x,A,F,z),i.context=L_(null),l=i.current,f=Qn(),v=go(l),x=Oi(f,v),x.callback=o??null,ho(l,x,v),i.current.lanes=v,Js(i,v,f),ur(i,f),i}function Lc(i,o,l,f){var v=o.current,x=Qn(),A=go(v);return l=L_(l),o.context===null?o.context=l:o.pendingContext=l,o=Oi(x,A),o.payload={element:i},f=f===void 0?null:f,f!==null&&(o.callback=f),i=ho(v,o,A),i!==null&&(Jr(i,v,A,x),lc(i,v,A)),A}function Dc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function I_(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function np(i,o){I_(i,o),(i=i.alternate)&&I_(i,o)}function xT(){return null}var U_=typeof reportError=="function"?reportError:function(i){console.error(i)};function rp(i){this._internalRoot=i}Ic.prototype.render=rp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Lc(i,o,null,null)},Ic.prototype.unmount=rp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;sa(function(){Lc(null,i,null,null)}),o[Di]=null}};function Ic(i){this._internalRoot=i}Ic.prototype.unstable_scheduleHydration=function(i){if(i){var o=gg();i={blockedOn:null,target:i,priority:o};for(var l=0;l<io.length&&o!==0&&o<io[l].priority;l++);io.splice(l,0,i),l===0&&xg(i)}};function ip(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Uc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function N_(){}function ST(i,o,l,f,v){if(v){if(typeof f=="function"){var x=f;f=function(){var ae=Dc(A);x.call(ae)}}var A=D_(o,f,i,0,null,!1,!1,"",N_);return i._reactRootContainer=A,i[Di]=A.current,dl(i.nodeType===8?i.parentNode:i),sa(),A}for(;v=i.lastChild;)i.removeChild(v);if(typeof f=="function"){var F=f;f=function(){var ae=Dc(z);F.call(ae)}}var z=tp(i,0,!1,null,null,!1,!1,"",N_);return i._reactRootContainer=z,i[Di]=z.current,dl(i.nodeType===8?i.parentNode:i),sa(function(){Lc(o,z,l,f)}),z}function Nc(i,o,l,f,v){var x=l._reactRootContainer;if(x){var A=x;if(typeof v=="function"){var F=v;v=function(){var z=Dc(A);F.call(z)}}Lc(o,A,i,v)}else A=ST(l,o,i,v,f);return Dc(A)}mg=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=rn(o.pendingLanes);l!==0&&(Cd(o,l|1),ur(o,je()),(Rt&6)===0&&(is=je()+500,co()))}break;case 13:sa(function(){var f=Fi(i,1);if(f!==null){var v=Qn();Jr(f,i,1,v)}}),np(i,1)}},Rd=function(i){if(i.tag===13){var o=Fi(i,134217728);if(o!==null){var l=Qn();Jr(o,i,134217728,l)}np(i,134217728)}},vg=function(i){if(i.tag===13){var o=go(i),l=Fi(i,o);if(l!==null){var f=Qn();Jr(l,i,o,f)}np(i,o)}},gg=function(){return Bt},_g=function(i,o){var l=Bt;try{return Bt=i,o()}finally{Bt=l}},_t=function(i,o,l){switch(o){case"input":if(xe(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var f=l[o];if(f!==i&&f.form===i.form){var v=Ju(f);if(!v)throw Error(t(90));X(f),xe(f,v)}}}break;case"textarea":b(i,l);break;case"select":o=l.value,o!=null&&Ne(i,!!l.multiple,o,!1)}},ot=Yh,Et=sa;var wT={usingClientEntryPoint:!1,Events:[ml,$a,Ju,me,Fe,Yh]},Rl={findFiberByHostInstance:Qo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ET={bundleType:Rl.bundleType,version:Rl.version,rendererPackageName:Rl.rendererPackageName,rendererConfig:Rl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=de(i),i===null?null:i.stateNode},findFiberByHostInstance:Rl.findFiberByHostInstance||xT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{rr=Fc.inject(ET),bt=Fc}catch{}}return cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wT,cr.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(o))throw Error(t(200));return yT(i,o,null,l)},cr.createRoot=function(i,o){if(!ip(i))throw Error(t(299));var l=!1,f="",v=U_;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=tp(i,1,!1,null,null,l,!1,f,v),i[Di]=o.current,dl(i.nodeType===8?i.parentNode:i),new rp(o)},cr.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=de(o),i=i===null?null:i.stateNode,i},cr.flushSync=function(i){return sa(i)},cr.hydrate=function(i,o,l){if(!Uc(o))throw Error(t(200));return Nc(null,i,o,!0,l)},cr.hydrateRoot=function(i,o,l){if(!ip(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,v=!1,x="",A=U_;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),o=D_(o,null,i,1,l??null,v,!1,x,A),i[Di]=o.current,dl(i),f)for(i=0;i<f.length;i++)l=f[i],v=l._getVersion,v=v(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,v]:o.mutableSourceEagerHydrationData.push(l,v);return new Ic(o)},cr.render=function(i,o,l){if(!Uc(o))throw Error(t(200));return Nc(null,i,o,!1,l)},cr.unmountComponentAtNode=function(i){if(!Uc(i))throw Error(t(40));return i._reactRootContainer?(sa(function(){Nc(null,null,i,!1,function(){i._reactRootContainer=null,i[Di]=null})}),!0):!1},cr.unstable_batchedUpdates=Yh,cr.unstable_renderSubtreeIntoContainer=function(i,o,l,f){if(!Uc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Nc(i,o,l,!1,f)},cr.version="18.3.1-next-f1338f8080-20240426",cr}var G_;function TS(){if(G_)return sp.exports;G_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sp.exports=LT(),sp.exports}var W_;function DT(){if(W_)return Oc;W_=1;var n=TS();return Oc.createRoot=n.createRoot,Oc.hydrateRoot=n.hydrateRoot,Oc}var IT=DT();const UT=AS(IT);var Ie=rv();const Co=AS(Ie),am=AT({__proto__:null,default:Co},[Ie]),NT=()=>window.location.search;function FT(n,e,t,r,a){return function(s,c){var u=n.newXHR(),d=n.fixupUrl(a.url,u);if(u.open(a.method||"GET",d,!0,a.username,a.password),a.headers)try{for(var h=0,p;(p=a.headers[h])!=null;h++)u.setRequestHeader(p.field,p.value)}catch(g){s(g)}var m=function(g){return function(){s(new Error(g))}};return u.onerror=m(t),u.ontimeout=m(e),u.onload=function(){c({status:u.status,statusText:u.statusText,headers:u.getAllResponseHeaders().split(`\r
`).filter(function(g){return g.length>0}).map(function(g){var S=g.indexOf(":");return r(g.substring(0,S))(g.substring(S+2))}),body:u.response})},u.responseType=a.responseType,u.withCredentials=a.withCredentials,u.timeout=a.timeout,u.send(a.content),function(g,S,E){try{u.abort()}catch(w){return S(w)}return E()}}}const OT=function(n){return function(e){for(var t=e.length,r=new Array(t),a=0;a<t;a++)r[a]=n(e[a]);return r}};var bS={compose:function(n){return function(e){return function(t){return n(e(t))}}}},CS=function(n){return n.compose},_r=function(n){return n.identity},yr={identity:function(n){return n}},kT=function(n){return function(e){return function(t){return function(r){return n(e(t))(e(r))}}}},Ei=function(n){return function(e){return function(t){return n(t)(e)}}},Pt=function(n){return function(e){return n}};const Cn=void 0;var Mt=(function(){function n(){}return n.value=new n,n})(),Ot=function(n){return n.map},zT=function(n){var e=Ot(n);return function(t){return function(r){return e(r)(t)}}},RS=function(n){return Ot(n)(Pt(Cn))},BT=function(n){var e=Ot(n);return function(t){return e(Pt(t))}},PS={map:CS(bS)},fu={map:OT};const HT=function(n){return function(e){return n.length===0?e:e.length===0?n:n.concat(e)}};var $r=function(n){return n.reflectSymbol};const iv=function(n){return function(e){return e[n]}},ov=function(n){return function(e){return function(t){var r={};for(var a in t)({}).hasOwnProperty.call(t,a)&&(r[a]=t[a]);return r[n]=e,r}}},VT=function(n){return function(e){var t={};for(var r in e)r!==n&&{}.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}};var du={append:HT},jr=function(n){return n.append},GT=function(n){var e=jr(n);return{append:function(t){return function(r){return function(a){return e(t(a))(r(a))}}}}},WT=function(n){return n.alt},Ws=function(n){return n.apply},At=function(n){return n.pure},LS=function(n){var e=At(n);return function(t){return function(r){if(t)return r;if(!t)return e(Cn);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,r.constructor.name])}}},$T=function(n){var e=Ws(n.Apply0()),t=At(n);return function(r){return function(a){return e(t(r))(a)}}};const jT=2147483647,XT=-2147483648,qT="￿",YT="\0";var KT=function(n){return function(e){return function(t){return function(r){return function(a){return r<a?n:r===a?e:t}}}}};const ZT=KT;var av=function(n){return function(e){return n===e}};const JT=av,QT=av,eb=av,tb=function(n){return function(e){return function(t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!n(e[r])(t[r]))return!1;return!0}}};var Ea={eq:eb},nb={eqRecord:function(n){return function(e){return function(t){return!0}}}},DS=function(n){return n.eqRecord},rb=function(){return function(n){return{eq:DS(n)(Mt.value)}}},ib={eq:QT},ob={eq:JT},Ci=function(n){return n.eq},ab=Ci(ob),sm=function(n){return{eq:tb(Ci(n))}},xf=function(n){var e=DS(n);return function(){return function(t){var r=$r(t);return function(a){var s=Ci(a);return{eqRecord:function(c){return function(u){return function(d){var h=e(Mt.value)(u)(d),p=r(Mt.value),m=iv(p);return s(m(u))(m(d))&&h}}}}}}}},IS=function(n){var e=Ci(n);return function(t){return function(r){return ab(e(t)(r))(!1)}}},Rf=(function(){function n(){}return n.value=new n,n})(),Pf=(function(){function n(){}return n.value=new n,n})(),tu=(function(){function n(){}return n.value=new n,n})(),sb={eq:function(n){return function(e){return n instanceof Rf&&e instanceof Rf||n instanceof Pf&&e instanceof Pf||n instanceof tu&&e instanceof tu}}},US=(function(){return{compare:ZT(Rf.value)(tu.value)(Pf.value),Eq0:function(){return ib}}})(),lb=function(n){return n.compare},sv=function(n){return n.top},NS={top:jT,bottom:XT},nu={top:qT,bottom:YT,Ord0:function(){return US}},Zf=function(n){return n.bottom};const ub=function(n){return n.toString()},cb=function(n){var e=n.length;return'"'+n.replace(/[\0-\x1F\x7F"\\]/g,function(t,r){switch(t){case'"':case"\\":return"\\"+t;case"\x07":return"\\a";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v"}var a=r+1,s=a<e&&n[a]>="0"&&n[a]<="9"?"\\&":"";return"\\"+t.charCodeAt(0).toString(10)+s})+'"'};var fb={show:cb},lv={show:ub},La=function(n){return n.show},Ft=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Re=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),fr=(function(){function n(){}return n.value=new n,n})(),db=function(n){return n},hb=function(n){return n},FS=function(n){return n.to},uv=function(n){return n.from},pb=_r(yr),Ct=(function(){function n(){}return n.value=new n,n})(),gt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ki=function(n){return function(e){return function(t){if(t instanceof Ct)return n;if(t instanceof gt)return e(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},mb=Ki(!0)(Pt(!1)),vb=Ki(!1)(Pt(!0)),hu={map:function(n){return function(e){return e instanceof gt?new gt(n(e.value0)):Ct.value}}},gb=Ot(hu),OS=function(n){return Ki(n)(pb)},_b=function(){return function(n){if(n instanceof gt)return n.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[n.constructor.name])}},kS={apply:function(n){return function(e){if(n instanceof gt)return gb(n.value0)(e);if(n instanceof Ct)return Ct.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return hu}},zS={bind:function(n){return function(e){if(n instanceof gt)return e(n.value0);if(n instanceof Ct)return Ct.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,e.constructor.name])}}},yb=(function(){return{pure:gt.create,Apply0:function(){return kS}}})(),BS="application/json",xb="application/x-www-form-urlencoded",Sb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),wb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Eb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Mb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ab=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),HS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),VS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Tb=function(n){return n instanceof HS?new gt(xb):n instanceof VS?new gt(BS):Ct.value};const pu=function(n){return n};var GS=function(){return pu},cv=GS(),bb=function(){return cv},mu=function(){return cv},Cb=function(){return function(){return function(){return function(){return function(n){return cv}}}}},$_=mu(),fv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),WS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Rb=function(n){if(n instanceof fv||n instanceof dv)return $_(n.value0);if(n instanceof WS)return n.value1;throw new Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): "+[n.constructor.name])},j_=function(n){if(n instanceof fv)return"Accept";if(n instanceof dv)return"Content-Type";if(n instanceof WS)return n.value0;throw new Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): "+[n.constructor.name])},hv=_r(yr),$S=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),jS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),XS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Jf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),pv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Pb=function(n){if(n instanceof $S)return"arraybuffer";if(n instanceof jS)return"blob";if(n instanceof XS)return"document";if(n instanceof Jf||n instanceof pv)return"text";if(n instanceof mv)return"";throw new Error("Failed pattern match at Affjax.ResponseFormat (line 44, column 3 - line 50, column 19): "+[n.constructor.name])},Lb=function(n){return n instanceof Jf?new gt(BS):Ct.value},Db=(function(){return new pv(hv)})(),Ib=(function(){return new Jf(hv)})(),Ub=(function(){return new mv(hv)})(),Nb=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})();const Fb=typeof Array.prototype.flatMap=="function"?function(n){return function(e){return n.flatMap(e)}}:function(n){return function(e){for(var t=[],r=n.length,a=0;a<r;a++)for(var s=e(n[a]),c=s.length,u=0;u<c;u++)t.push(s[u]);return t}};var Qf=function(n){return n.discard},Ob={bind:Fb},fn=function(n){return n.bind},ed=function(n){return Ei(fn(n))},qS=function(n){var e=ed(n);return function(t){return function(r){return function(a){return e(t)(r(a))}}}},kb=function(n){var e=fn(n);return function(t){return function(r){return function(a){return e(t(a))(r)}}}},td={discard:function(n){return fn(n)}},ut=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),lt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Us=function(n){return Ki(new ut(n))(lt.create)},Da={map:function(n){return function(e){if(e instanceof ut)return new ut(e.value0);if(e instanceof lt)return new lt(n(e.value0));throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},zb=Ot(Da),Bb=function(n){return function(e){return e instanceof lt?e.value0:n}},vu=function(n){return function(e){return function(t){if(t instanceof ut)return n(t.value0);if(t instanceof lt)return e(t.value0);throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},YS={apply:function(n){return function(e){if(n instanceof ut)return new ut(n.value0);if(n instanceof lt)return zb(n.value0)(e);throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return Da}},gu={bind:vu(function(n){return function(e){return new ut(n)}})(function(n){return function(e){return e(n)}}),Apply0:function(){return YS}},Ia=(function(){return{pure:lt.create,Apply0:function(){return YS}}})();const Hb=function(n){return function(){return n}},Vb=function(n){return function(e){return function(){return e(n())()}}};var vv=function(n){var e=fn(n.Bind1()),t=At(n.Applicative0());return function(r){return function(a){return e(r)(function(s){return e(a)(function(c){return t(s(c))})})}}};const Gb=function(n){return function(e){return e===0?0:e>0?Math.floor(n/e):-Math.floor(n/-e)}},Wb=function(n){return function(e){if(e===0)return 0;var t=Math.abs(e);return(n%t+t)%t}};var $b=function(n){return n.mod},KS={div:Gb,mod:Wb},jb=function(n){return n.div},ZS={mempty:[],Semigroup0:function(){return du}},$s=function(n){return n.mempty},Xb=function(n){var e=$s(n),t=GT(n.Semigroup0());return{mempty:function(r){return e},Semigroup0:function(){return t}}},JS=function(n,e,t){var r=0,a;return function(s){if(r===2)return a;if(r===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return r=1,a=t(),r=2,a}},qb={Applicative0:function(){return _u},Bind1:function(){return Yb}},Yb={bind:Vb,Apply0:function(){return ew(0)}},_u={pure:Hb,Apply0:function(){return ew(0)}},QS=JS("functorEffect","Effect",function(){return{map:$T(_u)}}),ew=JS("applyEffect","Effect",function(){return{apply:vv(qb),Functor0:function(){return QS(0)}}}),tw=QS(20);function Kb(n){return new Error(n)}function nw(n){return n.message}var nd=function(n){return n.throwError},gv=function(n){return n.catchError},rw=function(n){var e=gv(n),t=n.MonadThrow0().Monad0(),r=Ot(t.Bind1().Apply0().Functor0()),a=At(t.Applicative0());return function(s){return e(r(lt.create)(s))(function(c){return a(ut.create(c))})}},Zb=function(n){return n},Jb={map:function(n){return function(e){return n(e)}}},iw={apply:function(n){return function(e){return n(e)}},Functor0:function(){return Jb}},ow={bind:function(n){return function(e){return e(n)}},Apply0:function(){return iw}},aw={pure:Zb,Apply0:function(){return iw}},Xo={Applicative0:function(){return aw},Bind1:function(){return ow}},Lf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Sf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),sw=function(n){return n.tailRecM},Qb=function(n){var e=sw(n),t=BT(n.Monad0().Bind1().Apply0().Functor0());return function(r){return e(function(a){return t(new Lf(a))(r)})(Cn)}};const eC=function(n){return function(e){return function(){return n(e())}}},tC=function(n){return function(e){return function(){for(var t=0,r=n.length;t<r;t++)e(n[t])()}}};var nC={map:eC};const rC=function(n){return function(e){return n&&e}},iC=function(n){return function(e){return n||e}},oC=function(n){return!n};var aC=function(n){return n.not},sC=function(n){return n.ff},lw=function(n){return n.disj},lm={ff:!1,tt:!0,implies:function(n){return function(e){return lw(lm)(aC(lm)(n))(e)}},conj:rC,disj:iC,not:oC},jt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),lC=function(n){return n.value1},_v={map:function(n){return function(e){return new jt(e.value0,n(e.value1))}}},uw=function(n){return n.value0},uC=function(n){var e=jr(n);return{apply:function(t){return function(r){return new jt(e(t.value0)(r.value0),t.value1(r.value1))}},Functor0:function(){return _v}}},cC=function(n){var e=uC(n.Semigroup0());return{pure:jt.create($s(n)),Apply0:function(){return e}}},cw=function(n){return n.lift},fC=function(n){return n.tell},dC={liftEffect:_r(yr)},yu=function(n){return n.liftEffect},hC=Ot(Da),yv=function(n){return n},xv=function(n){return n},fw={lift:function(n){var e=fn(n.Bind1()),t=At(n.Applicative0());return function(r){return e(r)(function(a){return t(new lt(a))})}}},pC=cw(fw),mC=function(n){return function(e){return n(e)}},dw=function(n){var e=Ot(n);return{map:function(t){return mC(e(hC(t)))}}},rd=function(n){return{Applicative0:function(){return Ua(n)},Bind1:function(){return xu(n)}}},xu=function(n){var e=fn(n.Bind1()),t=At(n.Applicative0());return{bind:function(r){return function(a){return e(r)(vu(function(s){return t(ut.create(s))})(function(s){var c=a(s);return c}))}},Apply0:function(){return hw(n)}}},hw=function(n){var e=dw(n.Bind1().Apply0().Functor0());return{apply:vv(rd(n)),Functor0:function(){return e}}},Ua=function(n){return{pure:(function(){var e=At(n.Applicative0());return function(t){return yv(e(lt.create(t)))}})(),Apply0:function(){return hw(n)}}},Sv=function(n){var e=n.Monad0(),t=rd(e);return{liftEffect:(function(){var r=pC(e),a=yu(n);return function(s){return r(a(s))}})(),Monad0:function(){return t}}},vC=function(n){var e=sw(n),t=n.Monad0(),r=fn(t.Bind1()),a=At(t.Applicative0()),s=rd(t);return{tailRecM:function(c){var u=e(function(d){var h=c(d);return r(h)(function(p){return a((function(){if(p instanceof ut)return new Sf(new ut(p.value0));if(p instanceof lt&&p.value0 instanceof Lf)return new Lf(p.value0.value0);if(p instanceof lt&&p.value0 instanceof Sf)return new Sf(new lt(p.value0.value0));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 75, column 14 - line 78, column 43): "+[p.constructor.name])})())})});return function(d){return yv(u(d))}},Monad0:function(){return s}}},wv=function(n){var e=rd(n);return{throwError:(function(){var t=At(n.Applicative0());return function(r){return yv(t(ut.create(r)))}})(),Monad0:function(){return e}}},Ev=function(n){var e=fn(n.Bind1()),t=At(n.Applicative0()),r=wv(n);return{catchError:function(a){return function(s){return e(a)(vu(function(c){var u=s(c);return u})(function(c){return t(lt.create(c))}))}},MonadThrow0:function(){return r}}},gC=function(n){var e=jr(n);return function(t){var r=t.Bind1(),a=fn(r),s=At(t.Applicative0()),c=dw(r.Apply0().Functor0());return{alt:function(u){return function(d){return a(u)(function(h){if(h instanceof lt)return s(new lt(h.value0));if(h instanceof ut)return a(d)(function(p){if(p instanceof lt)return s(new lt(p.value0));if(p instanceof ut)return s(new ut(e(h.value0)(p.value0)));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): "+[p.constructor.name])});throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): "+[h.constructor.name])})}},Functor0:function(){return c}}}},_C=mu(),Mv=function(n){return _C(xv(n))};function Av(n){return n}function pw(n){return JSON.stringify(n)}function cp(n){return Object.prototype.toString.call(n)==="[object Array]"}function id(n,e,t,r,a,s,c){return c==null?n():typeof c=="boolean"?e(c):typeof c=="number"?t(c):typeof c=="string"?r(c):Object.prototype.toString.call(c)==="[object Array]"?a(c):s(c)}function um(n,e,t,r,a){if(r==null)return a==null?n:t;if(typeof r=="boolean")return typeof a=="boolean"?r===a?n:r===!1?t:e:a==null?e:t;if(typeof r=="number")return typeof a=="number"?r===a?n:r<a?t:e:a==null||typeof a=="boolean"?e:t;if(typeof r=="string")return typeof a=="string"?r===a?n:r<a?t:e:a==null||typeof a=="boolean"||typeof a=="number"?e:t;if(cp(r))if(cp(a)){for(var s=0;s<Math.min(r.length,a.length);s++){var c=um(n,e,t,r[s],a[s]);if(c!==n)return c}return r.length===a.length?n:r.length<a.length?t:e}else return a==null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"?e:t;else{if(a==null)return e;if(typeof a=="boolean")return e;if(typeof a=="number")return e;if(typeof a=="string")return e;if(cp(a))return e;var u=Object.keys(r),d=Object.keys(a);if(u.length<d.length)return t;if(u.length>d.length)return e;for(var h=u.concat(d).sort(),p=0;p<h.length;p++){var m=h[p];if(r[m]===void 0)return t;if(a[m]===void 0)return e;var g=um(n,e,t,r[m],a[m]);if(g!==n)return g}return n}}const yC={};function xC(n){return n()}function SC(n,e,t,r){return t in r?e(r[t]):n}const wC=(function(){function n(a,s){this.head=a,this.tail=s}var e={};function t(a){return function(s){return new n(a,s)}}function r(a){for(var s=[],c=0,u=a;u!==e;)s[c++]=u.head,u=u.tail;return s}return function(a,s){return r(a(t)(e)(s))}})(),mw=function(n){return n.length},EC=function(n,e,t,r){return r<0||r>=t.length?e:n(t[r])},MC=function(n,e){return e.filter(n)},AC=function(n,e,t){return t.slice(n,e)};function TC(n){return n}const bC=TC;function CC(n){return n.slice()}const RC=CC,PC=function(n,e){return e.push(n)},vw=function(e){return function(t){return function(){return e(t)}}},LC=function(e){return function(t){return function(r){return function(){return e(t,r)}}}};var DC=vw(bC),IC=vw(RC),UC=function(n){return function(e){return function(){var r=IC(e)();return n(r)(),DC(r)()}}},NC=LC(PC);const FC=function(n){return function(e){return function(t){for(var r=e,a=t.length,s=a-1;s>=0;s--)r=n(t[s])(r);return r}}},OC=function(n){return function(e){return function(t){for(var r=e,a=t.length,s=0;s<a;s++)r=n(r)(t[s]);return r}}};var kC=function(n){return n.empty},zC=_r(yr),BC=function(n){return n.bimap},Tv=function(n){var e=BC(n);return function(t){return e(t)(zC)}},bv={bimap:function(n){return function(e){return function(t){if(t instanceof ut)return new ut(n(t.value0));if(t instanceof lt)return new lt(e(t.value0));throw new Error("Failed pattern match at Data.Bifunctor (line 38, column 1 - line 40, column 36): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}}},HC={append:function(n){return function(e){return n instanceof gt?n:e}}},VC=(function(){return{mempty:Ct.value,Semigroup0:function(){return HC}}})(),GC=function(n){return n},WC=function(n){var e=lw(n);return{append:function(t){return function(r){return e(t)(r)}}}},$C=function(n){var e=WC(n);return{mempty:sC(n),Semigroup0:function(){return e}}},jC=mu(),XC=Cb()()()(),od=function(n){return n.foldr},Cv=function(n){return n.foldl},qC=function(n){var e=od(n);return function(t){var r=jr(t.Semigroup0()),a=$s(t);return function(s){return e(function(c){return function(u){return r(s(c))(u)}})(a)}}},Ji={foldr:FC,foldl:OC,foldMap:function(n){return qC(Ji)(n)}},gw=function(n){return n.foldMap},YC=function(n){var e=gw(n)(VC);return function(t){var r=Ci(t);return function(a){var s=e(function(c){var u=r(a)(c.value0);return u?new gt(c.value1):Ct.value});return function(c){return jC(s(c))}}}},KC=function(n){var e=gw(n);return function(t){return XC(GC)(e($C(t)))}};const _w=function(n){return function(e){return function(t){return n(e,t)}}},Rv=function(n){return function(e){return function(t){return function(r){return n(e,t,r)}}}},yw=function(n){return function(e){return function(t){return function(r){return function(a){return n(e,t,r,a)}}}}},ZC=function(n){return function(e){for(var t=e.length,r=Array(t),a=0;a<t;a++)r[a]=n(a)(e[a]);return r}};var xw=function(n){return n.mapWithIndex},Sw={mapWithIndex:ZC,Functor0:function(){return fu}};const JC=(function(){function n(a){return[a]}function e(a){return function(s){return[a,s]}}function t(a){return function(s){return function(c){return[a,s,c]}}}function r(a){return function(s){return a.concat(s)}}return function(a){return function(s){return function(c){return function(u){return function(d){function h(p,m){switch(m-p){case 0:return c([]);case 1:return s(n)(u(d[p]));case 2:return a(s(e)(u(d[p])))(u(d[p+1]));case 3:return a(a(s(t)(u(d[p])))(u(d[p+1])))(u(d[p+2]));default:var g=p+Math.floor((m-p)/4)*2;return a(s(r)(h(p,g)))(h(g,m))}}return h(0,d.length)}}}}}})();var QC=_r(yr),Pv=function(n){return n.traverse},eR=function(n){var e=Pv(n);return function(t){return e(t)(QC)}},ad={traverse:function(n){var e=n.Apply0();return JC(Ws(e))(Ot(e.Functor0()))(At(n))},sequence:function(n){return eR(ad)(n)},Functor0:function(){return fu},Foldable1:function(){return Ji}},tR=function(n){return n.sequence};const nR=function(n){return function(e){return function(t){return function(r){return function(a){return function(s){for(var c=[],u=s;;){var d=a(u);if(n(d))return c;var h=e(d);c.push(t(h)),u=r(h)}}}}}}};var rR=_b(),iR=function(n){return n.unfoldr},oR={unfoldr:nR(mb)(rR)(uw)(lC)},aR=jr(du),sR=function(n){return function(e){return UC(NC(e))(n)()}},lR=Rv(AC),uR=function(n){return[n]},cR=(function(){return yw(EC)(gt.create)(Ct.value)})(),fR=function(n){return cR(n)(0)},dR=function(n){return _w(wC)(od(n))},hR=_w(MC),pR=function(n){return function(e){return lR(n)(mw(e))(e)}},mR=function(n){return function(e){return aR([n])(e)}},vR=Ei(fn(Ob)),gR=function(n){return vR((function(){var e=Ki([])(uR);return function(t){return e(n(t))}})())},_R=gR(_r(yr)),yR=od(Ji),X_=xw(Sw),xR=Cv(Ji),SR=function(n){return n.foldrWithIndex},wR=function(n){var e=SR(n);return function(t){var r=jr(t.Semigroup0()),a=$s(t);return function(s){return e(function(c){return function(u){return function(d){return r(s(c)(u))(d)}}})(a)}}},ww={foldrWithIndex:function(n){return function(e){var t=yR(function(a){return function(s){return n(a.value0)(a.value1)(s)}})(e),r=X_(jt.create);return function(a){return t(r(a))}}},foldlWithIndex:function(n){return function(e){var t=xR(function(a){return function(s){return n(s.value0)(a)(s.value1)}})(e),r=X_(jt.create);return function(a){return t(r(a))}}},foldMapWithIndex:function(n){return wR(ww)(n)},Foldable0:function(){return Ji}},ER=function(n){var e=tR(n.Traversable2()),t=xw(n.FunctorWithIndex0());return function(r){var a=e(r);return function(s){var c=t(s);return function(u){return a(c(u))}}}},MR=function(n){return n.traverseWithIndex},Ew={traverseWithIndex:function(n){return ER(Ew)(n)},FunctorWithIndex0:function(){return Sw},FoldableWithIndex1:function(){return ww},Traversable2:function(){return ad}};const AR=function(){return{}};function TR(n){return function(e){return function(t){return function(){return t[n]=e,t}}}}var bR=RS(nC),Ns=(function(){return yw(SC)(Ct.value)(gt.create)})(),Mw=function(n){var e=dR(n);return function(t){return xC(function(){var a=AR();return tC(e(t))(function(s){return bR(TR(s.value0)(s.value1)(a))})(),a})}},CR=Ci(sb),RR=function(n){return function(e){return function(t){return t(n)(e)}}},sd=(function(){return RR(Ct.value)(gt.create)})(),PR=yC,LR={compare:function(n){return function(e){return um(tu.value,Pf.value,Rf.value,n,e)}}},DR={eq:function(n){return function(e){return CR(lb(LR)(n)(e))(tu.value)}}},IR=function(n){return function(e){return function(t){return id(Pt(n),Pt(n),Pt(n),e,Pt(n),Pt(n),t)}}},UR=sd(IR),NR=function(n){return function(e){return function(t){return id(Pt(n),Pt(n),Pt(n),Pt(n),Pt(n),e,t)}}},FR=sd(NR),OR=function(n){return function(e){return function(t){return id(Pt(n),Pt(n),e,Pt(n),Pt(n),Pt(n),t)}}},kR=sd(OR),zR=function(n){return function(e){return function(t){return id(Pt(n),Pt(n),Pt(n),Pt(n),e,Pt(n),t)}}},BR=sd(zR);function HR(n,e,t){try{return e(JSON.parse(t))}catch(r){return n(r.message)}}var VR=function(n){return HR(ut.create,lt.create,n)};const Aw=function(n){return function(e){return e.split(n)}},GR=function(n){return function(e){return e.join(n)}};function WR(n){return n.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function $R(n,e,t){try{return e(WR(encodeURIComponent(t)).replace(/%20/g,"+"))}catch(r){return n(r)}}function jR(n,e,t){try{return e(decodeURIComponent(t))}catch(r){return n(r)}}var fp=(function(){return Rv($R)(Pt(Ct.value))(gt.create)})(),XR=(function(){return Rv(jR)(Pt(Ct.value))(gt.create)})(),qR=Ws(kS),q_=Ot(hu),YR=Pv(ad)(yb),KR=function(n){return n},ZR=(function(){var n=function(r){if(r.value1 instanceof Ct)return fp(r.value0);if(r.value1 instanceof gt)return qR(q_(function(a){return function(s){return a+("="+s)}})(fp(r.value0)))(fp(r.value1.value0));throw new Error("Failed pattern match at Data.FormURLEncoded (line 37, column 16 - line 39, column 114): "+[r.constructor.name])},e=q_(GR("&")),t=YR(n);return function(r){return e(t(KR(r)))}})(),JR=(function(){function n(){}return n.value=new n,n})(),Tw=(function(){function n(){}return n.value=new n,n})(),QR=(function(){function n(){}return n.value=new n,n})(),eP=(function(){function n(){}return n.value=new n,n})(),tP=(function(){function n(){}return n.value=new n,n})(),nP=(function(){function n(){}return n.value=new n,n})(),rP=(function(){function n(){}return n.value=new n,n})(),iP=(function(){function n(){}return n.value=new n,n})(),oP=(function(){function n(){}return n.value=new n,n})(),aP=(function(){function n(){}return n.value=new n,n})(),sP=(function(){function n(){}return n.value=new n,n})(),lP=(function(){function n(){}return n.value=new n,n})(),uP=(function(){function n(){}return n.value=new n,n})(),cP=(function(){function n(){}return n.value=new n,n})(),fP=(function(){function n(){}return n.value=new n,n})(),dP=(function(){function n(){}return n.value=new n,n})(),hP=function(n){return n},pP={show:function(n){if(n instanceof JR)return"OPTIONS";if(n instanceof Tw)return"GET";if(n instanceof QR)return"HEAD";if(n instanceof eP)return"POST";if(n instanceof tP)return"PUT";if(n instanceof nP)return"DELETE";if(n instanceof rP)return"TRACE";if(n instanceof iP)return"CONNECT";if(n instanceof oP)return"PROPFIND";if(n instanceof aP)return"PROPPATCH";if(n instanceof sP)return"MKCOL";if(n instanceof lP)return"COPY";if(n instanceof uP)return"MOVE";if(n instanceof cP)return"LOCK";if(n instanceof fP)return"UNLOCK";if(n instanceof dP)return"PATCH";throw new Error("Failed pattern match at Data.HTTP.Method (line 43, column 1 - line 59, column 23): "+[n.constructor.name])}},mP=vu(La(pP))(hP),bw=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),vP=function(n){var e=kC(n);return function(t){return new bw(t,e)}},ri=(function(){function n(){}return n.value=new n,n})(),tn=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),gP=function(n){return n},_P=function(n){return new tn(n.value0,n.value1)},yP=function(n){var e=function(t){return function(r){var a=t,s=!1,c;function u(d,h){if(h instanceof tn&&h.value1 instanceof tn&&h.value1.value1 instanceof tn){a=new tn(h,d),r=h.value1.value1.value1;return}var p=function(g){return g instanceof tn&&g.value1 instanceof tn&&g.value1.value1 instanceof ri?new tn(n(g.value0),new tn(n(g.value1.value0),ri.value)):g instanceof tn&&g.value1 instanceof ri?new tn(n(g.value0),ri.value):ri.value},m=function(g){return function(S){var E=g,w=!1,y;function _(T,M){if(T instanceof tn&&T.value0 instanceof tn&&T.value0.value1 instanceof tn&&T.value0.value1.value1 instanceof tn){E=T.value1,S=new tn(n(T.value0.value0),new tn(n(T.value0.value1.value0),new tn(n(T.value0.value1.value1.value0),M)));return}return w=!0,M}for(;!w;)y=_(E,S);return y}};return s=!0,m(d)(p(h))}for(;!s;)c=u(a,r);return c}};return e(ri.value)},xP={map:yP},Lv={foldr:function(n){return function(e){var t=(function(){var a=function(s){return function(c){var u=s,d=!1,h;function p(m,g){if(g instanceof ri)return d=!0,m;if(g instanceof tn){u=new tn(g.value0,m),c=g.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[m.constructor.name,g.constructor.name])}for(;!d;)h=p(u,c);return h}};return a(ri.value)})(),r=Cv(Lv)(Ei(n))(e);return function(a){return r(t(a))}}},foldl:function(n){var e=function(t){return function(r){var a=t,s=!1,c;function u(d,h){if(h instanceof ri)return s=!0,d;if(h instanceof tn){a=n(d)(h.value0),r=h.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[h.constructor.name])}for(;!s;)c=u(a,r);return c}};return e}},SP=od(Lv),Cw={append:function(n){return function(e){return SP(tn.create)(e)(n)}}},Rw=jr(Cw),wP=(function(){return{mempty:ri.value,Semigroup0:function(){return Cw}}})(),EP={append:function(n){return function(e){return new bw(n.value0,Rw(n.value1)(_P(e)))}}},MP={alt:Rw,Functor0:function(){return xP}},AP=(function(){return{empty:ri.value,Alt0:function(){return MP}}})();const TP=function(n){return n()},bP=function(n){throw new Error(n)};var CP=function(){return bP},RP=CP(),PP=TP,Y_=function(n){return PP(function(){return RP(n)})},LP=(function(){var n=vP(AP);return function(e){return gP(n(e))}})(),DP=function(n){return n.value0};const IP=null;function UP(n){return n}var kc=Ki(IP)(UP),pr=(function(){var n={},e="Pure",t="Throw",r="Catch",a="Sync",s="Async",c="Bind",u="Bracket",d="Fork",h="Sequential",p="Map",m="Apply",g="Alt",S="Cons",E="Resume",w="Release",y="Finalizer",_="Finalized",T="Forked";function M(L,k,W,Y){this.tag=L,this._1=k,this._2=W,this._3=Y}function R(L){var k=function(W,Y,ee){return new M(L,W,Y,ee)};return k.tag=L,k}function P(L){return new M(e,void 0)}function N(L){try{L()}catch(k){setTimeout(function(){throw k},0)}}function U(L,k,W){try{return k(W())}catch(Y){return L(Y)}}function se(L,k,W){try{return k(W)()}catch(Y){return W(L(Y))(),P}}var C=(function(){var L=1024,k=0,W=0,Y=new Array(L),ee=!1;function Z(){var _e;for(ee=!0;k!==0;)k--,_e=Y[W],Y[W]=void 0,W=(W+1)%L,_e();ee=!1}return{isDraining:function(){return ee},enqueue:function(_e){var ve;k===L&&(ve=ee,Z(),ee=ve),Y[(W+k)%L]=_e,k++,ee||Z()}}})();function O(L){var k={},W=0,Y=0;return{register:function(ee){var Z=W++;ee.onComplete({rethrow:!0,handler:function(_e){return function(){Y--,delete k[Z]}}})(),k[Z]=ee,Y++},isEmpty:function(){return Y===0},killAll:function(ee,Z){return function(){if(Y===0)return Z();var _e=0,ve={};function be(ze){ve[ze]=k[ze].kill(ee,function(X){return function(){delete ve[ze],_e--,L.isLeft(X)&&L.fromLeft(X)&&setTimeout(function(){throw L.fromLeft(X)},0),_e===0&&Z()}})()}for(var ke in k)k.hasOwnProperty(ke)&&(_e++,be(ke));return k={},W=0,Y=0,function(ze){return new M(a,function(){for(var X in ve)ve.hasOwnProperty(X)&&ve[X]()})}}}}}var oe=0,ne=1,pe=2,H=3,Q=4,le=5,re=6;function j(L,k,W){var Y=0,ee=oe,Z=W,_e=null,ve=null,be=null,ke=null,ze=null,X=0,It=0,Ve=null,ue=!0;function ce(Ee){for(var Ne,Je,I;;)switch(Ne=null,Je=null,I=null,ee){case pe:ee=ne;try{Z=be(Z),ke===null?be=null:(be=ke._1,ke=ke._2)}catch(q){ee=le,_e=L.left(q),Z=null}break;case H:L.isLeft(Z)?(ee=le,_e=Z,Z=null):be===null?ee=le:(ee=pe,Z=L.fromRight(Z));break;case ne:switch(Z.tag){case c:be&&(ke=new M(S,be,ke)),be=Z._2,ee=ne,Z=Z._1;break;case e:be===null?(ee=le,Z=L.right(Z._1)):(ee=pe,Z=Z._1);break;case a:ee=H,Z=U(L.left,L.right,Z._1);break;case s:ee=Q,Z=se(L.left,Z._1,function(q){return function(){Y===Ee&&(Y++,C.enqueue(function(){Y===Ee+1&&(ee=H,Z=q,ce(Y))}))}});return;case t:ee=le,_e=L.left(Z._1),Z=null;break;case r:be===null?ze=new M(S,Z,ze,ve):ze=new M(S,Z,new M(S,new M(E,be,ke),ze,ve),ve),be=null,ke=null,ee=ne,Z=Z._1;break;case u:X++,be===null?ze=new M(S,Z,ze,ve):ze=new M(S,Z,new M(S,new M(E,be,ke),ze,ve),ve),be=null,ke=null,ee=ne,Z=Z._1;break;case d:ee=H,Ne=j(L,k,Z._2),k&&k.register(Ne),Z._1&&Ne.run(),Z=L.right(Ne);break;case h:ee=ne,Z=$(L,k,Z._1);break}break;case le:if(be=null,ke=null,ze===null)ee=re,Z=ve||_e||Z;else switch(Ne=ze._3,I=ze._1,ze=ze._2,I.tag){case r:ve&&ve!==Ne&&X===0?ee=le:_e&&(ee=ne,Z=I._2(L.fromLeft(_e)),_e=null);break;case E:ve&&ve!==Ne&&X===0||_e?ee=le:(be=I._1,ke=I._2,ee=pe,Z=L.fromRight(Z));break;case u:X--,_e===null&&(Je=L.fromRight(Z),ze=new M(S,new M(w,I._2,Je),ze,Ne),(ve===Ne||X>0)&&(ee=ne,Z=I._3(Je)));break;case w:ze=new M(S,new M(_,Z,_e),ze,ve),ee=ne,ve&&ve!==Ne&&X===0?Z=I._1.killed(L.fromLeft(ve))(I._2):_e?Z=I._1.failed(L.fromLeft(_e))(I._2):Z=I._1.completed(L.fromRight(Z))(I._2),_e=null,X++;break;case y:X++,ze=new M(S,new M(_,Z,_e),ze,ve),ee=ne,Z=I._1;break;case _:X--,ee=le,Z=I._1,_e=I._2;break}break;case re:for(var b in Ve)Ve.hasOwnProperty(b)&&(ue=ue&&Ve[b].rethrow,N(Ve[b].handler(Z)));Ve=null,ve&&_e?setTimeout(function(){throw L.fromLeft(_e)},0):L.isLeft(Z)&&ue&&setTimeout(function(){if(ue)throw L.fromLeft(Z)},0);return;case oe:ee=ne;break;case Q:return}}function xe(Ee){return function(){if(ee===re)return ue=ue&&Ee.rethrow,Ee.handler(Z)(),function(){};var Ne=It++;return Ve=Ve||{},Ve[Ne]=Ee,function(){Ve!==null&&delete Ve[Ne]}}}function ge(Ee,Ne){return function(){if(ee===re)return Ne(L.right(void 0))(),function(){};var Je=xe({rethrow:!1,handler:function(){return Ne(L.right(void 0))}})();switch(ee){case oe:ve=L.left(Ee),ee=re,Z=ve,ce(Y);break;case Q:ve===null&&(ve=L.left(Ee)),X===0&&(ee===Q&&(ze=new M(S,new M(y,Z(Ee)),ze,ve)),ee=le,Z=null,_e=null,ce(++Y));break;default:ve===null&&(ve=L.left(Ee)),X===0&&(ee=le,Z=null,_e=null)}return Je}}function Me(Ee){return function(){var Ne=xe({rethrow:!1,handler:Ee})();return ee===oe&&ce(Y),Ne}}return{kill:ge,join:Me,onComplete:xe,isSuspended:function(){return ee===oe},run:function(){ee===oe&&(C.isDraining()?ce(Y):C.enqueue(function(){ce(Y)}))}}}function ie(L,k,W,Y){var ee=0,Z={},_e=0,ve={},be=new Error("[ParAff] Early exit"),ke=null,ze=n;function X(xe,ge,Me){var Ee=ge,Ne=null,Je=null,I=0,b={},q,Ae;e:for(;;)switch(q=null,Ee.tag){case T:if(Ee._3===n&&(q=Z[Ee._1],b[I++]=q.kill(xe,function(ye){return function(){I--,I===0&&Me(ye)()}})),Ne===null)break e;Ee=Ne._2,Je===null?Ne=null:(Ne=Je._1,Je=Je._2);break;case p:Ee=Ee._2;break;case m:case g:Ne&&(Je=new M(S,Ne,Je)),Ne=Ee,Ee=Ee._1;break}if(I===0)Me(L.right(void 0))();else for(Ae=0,q=I;Ae<q;Ae++)b[Ae]=b[Ae]();return b}function It(xe,ge,Me){var Ee,Ne,Je,I,b,q;for(L.isLeft(xe)?(Ee=xe,Ne=null):(Ne=xe,Ee=null);;){if(Je=null,I=null,b=null,q=null,ke!==null)return;if(ge===null){Y(Ee||Ne)();return}if(ge._3!==n)return;switch(ge.tag){case p:Ee===null?(ge._3=L.right(ge._1(L.fromRight(Ne))),Ne=ge._3):ge._3=Ee;break;case m:if(Je=ge._1._3,I=ge._2._3,Ee){if(ge._3=Ee,b=!0,q=_e++,ve[q]=X(be,Ee===Je?ge._2:ge._1,function(){return function(){delete ve[q],b?b=!1:Me===null?It(Ee,null,null):It(Ee,Me._1,Me._2)}}),b){b=!1;return}}else{if(Je===n||I===n)return;Ne=L.right(L.fromRight(Je)(L.fromRight(I))),ge._3=Ne}break;case g:if(Je=ge._1._3,I=ge._2._3,Je===n&&L.isLeft(I)||I===n&&L.isLeft(Je))return;if(Je!==n&&L.isLeft(Je)&&I!==n&&L.isLeft(I))Ee=Ne===Je?I:Je,Ne=null,ge._3=Ee;else if(ge._3=Ne,b=!0,q=_e++,ve[q]=X(be,Ne===Je?ge._2:ge._1,function(){return function(){delete ve[q],b?b=!1:Me===null?It(Ne,null,null):It(Ne,Me._1,Me._2)}}),b){b=!1;return}break}Me===null?ge=null:(ge=Me._1,Me=Me._2)}}function Ve(xe){return function(ge){return function(){delete Z[xe._1],xe._3=ge,It(ge,xe._2._1,xe._2._2)}}}function ue(){var xe=ne,ge=W,Me=null,Ee=null,Ne,Je;e:for(;;)switch(Ne=null,Je=null,xe){case ne:switch(ge.tag){case p:Me&&(Ee=new M(S,Me,Ee)),Me=new M(p,ge._1,n,n),ge=ge._2;break;case m:Me&&(Ee=new M(S,Me,Ee)),Me=new M(m,n,ge._2,n),ge=ge._1;break;case g:Me&&(Ee=new M(S,Me,Ee)),Me=new M(g,n,ge._2,n),ge=ge._1;break;default:Je=ee++,xe=le,Ne=ge,ge=new M(T,Je,new M(S,Me,Ee),n),Ne=j(L,k,Ne),Ne.onComplete({rethrow:!1,handler:Ve(ge)})(),Z[Je]=Ne,k&&k.register(Ne)}break;case le:if(Me===null)break e;Me._1===n?(Me._1=ge,xe=ne,ge=Me._2,Me._2=n):(Me._2=ge,ge=Me,Ee===null?Me=null:(Me=Ee._1,Ee=Ee._2))}for(ze=ge,Je=0;Je<ee;Je++)Z[Je].run()}function ce(xe,ge){ke=L.left(xe);var Me;for(var Ee in ve)if(ve.hasOwnProperty(Ee)){Me=ve[Ee];for(Ee in Me)Me.hasOwnProperty(Ee)&&Me[Ee]()}ve=null;var Ne=X(xe,ze,ge);return function(Je){return new M(s,function(I){return function(){for(var b in Ne)Ne.hasOwnProperty(b)&&Ne[b]();return P}})}}return ue(),function(xe){return new M(s,function(ge){return function(){return ce(xe,ge)}})}}function $(L,k,W){return new M(s,function(Y){return function(){return ie(L,k,W,Y)}})}return M.EMPTY=n,M.Pure=R(e),M.Throw=R(t),M.Catch=R(r),M.Sync=R(a),M.Async=R(s),M.Bind=R(c),M.Bracket=R(u),M.Fork=R(d),M.Seq=R(h),M.ParMap=R(p),M.ParApply=R(m),M.ParAlt=R(g),M.Fiber=j,M.Supervisor=O,M.Scheduler=C,M.nonCanceler=P,M})();const NP=pr.Pure,FP=pr.Throw;function OP(n){return function(e){return pr.Catch(n,e)}}function kP(n){return function(e){return e.tag===pr.Pure.tag?pr.Pure(n(e._1)):pr.Bind(e,function(t){return pr.Pure(n(t))})}}function zP(n){return function(e){return pr.Bind(n,e)}}const BP=pr.Sync,cm=pr.Async;function HP(n,e){return function(){return pr.Fiber(n,null,e)}}const VP=(function(){function n(t,r){return t===0&&typeof setImmediate<"u"?setImmediate(r):setTimeout(r,t)}function e(t,r){return t===0&&typeof clearImmediate<"u"?clearImmediate(r):clearTimeout(r)}return function(t,r){return pr.Async(function(a){return function(){var s=n(r,a(t()));return function(){return pr.Sync(function(){return t(e(r,s))})}}})}})();pr.Seq;var GP=function(n){return n},WP=function(n){return n},$P=function(n){return function(e){return n(e)}},jP=function(n){var e=Ot(n);return{map:function(t){return $P(e(function(r){return new jt(t(r.value0),r.value1)}))}}},Pw=function(n){var e=jr(n);return function(t){var r=Ws(t),a=t.Functor0(),s=Ot(a),c=jP(a);return{apply:function(u){return function(d){var h=function(p){return function(m){return new jt(p.value0(m.value0),e(p.value1)(m.value1))}};return r(s(h)(u))(d)}},Functor0:function(){return c}}}},Lw=function(n){var e=jr(n),t=Pw(n);return function(r){var a=fn(r),s=r.Apply0(),c=Ot(s.Functor0()),u=t(s);return{bind:function(d){return function(h){return a(d)(function(p){var m=h(p.value0);return c(function(g){return new jt(g.value0,e(p.value1)(g.value1))})(m)})}},Apply0:function(){return u}}}},Dw=function(n){var e=$s(n),t=Pw(n.Semigroup0());return function(r){var a=At(r),s=t(r.Apply0());return{pure:function(c){return a(new jt(c,e))},Apply0:function(){return s}}}},XP=function(n){var e=Dw(n),t=Lw(n.Semigroup0());return function(r){var a=e(r.Applicative0()),s=t(r.Bind1());return{Applicative0:function(){return a},Bind1:function(){return s}}}},qP=function(n){var e=n.Semigroup0(),t=XP(n);return function(r){var a=t(r);return{tell:(function(){var s=At(r.Applicative0()),c=jt.create(Cn);return function(u){return GP(s(c(u)))}})(),Semigroup0:function(){return e},Monad1:function(){return a}}}},ji={dimap:function(n){return function(e){return function(t){return function(r){return e(t(n(r)))}}}}},ld=function(n){return n.dimap},YP=function(n,e,t){var r=0,a;return function(s){if(r===2)return a;if(r===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return r=1,a=t(),r=2,a}},KP=At(_u),Iw=RS(tw),ZP=Ot(tw),JP=function(n){return n},Uw={map:kP},QP=(function(){var n=function(r){if(r instanceof lt)return r.value0;if(r instanceof ut)return Y_("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[r.constructor.name])},e=function(r){if(r instanceof ut)return r.value0;if(r instanceof lt)return Y_("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[r.constructor.name])},t=function(r){if(r instanceof ut)return!0;if(r instanceof lt)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[r.constructor.name])};return{isLeft:t,fromLeft:e,fromRight:n,left:ut.create,right:lt.create}})(),e2=function(n){return HP(QP,n)},Nw=function(n){return function(){var t=e2(n)();return t.run(),t}},Fw=function(n){return Iw(Nw(n))},t2=function(n){return VP(lt.create,n)},Rr={Applicative0:function(){return wu},Bind1:function(){return Su}},Su={bind:zP,Apply0:function(){return Ow(0)}},wu={pure:NP,Apply0:function(){return Ow(0)}},Ow=YP("applyAff","Effect.Aff",function(){return{apply:vv(Rr),Functor0:function(){return Uw}}}),kw=At(wu),zw=fn(Su),n2=ed(Su),js={liftEffect:BP,Monad0:function(){return Rr}},Df=yu(js),r2=function(n){return JP(Pt(Df(n)))},i2=function(n){return function(e){return zw(Df(e.isSuspended))(function(t){return t?Df(Iw(e.kill(n,Pt(KP(Cn))))):cm(function(r){return ZP(r2)(e.kill(n,r))})})}},o2={throwError:FP,Monad0:function(){return Rr}},Bw={catchError:OP,MonadThrow0:function(){return o2}},a2=rw(Bw),s2=function(n){return function(e){return Nw(n2(function(t){return Df(n(t))})(a2(e)))}},l2={tailRecM:function(n){var e=function(t){return zw(n(t))(function(r){if(r instanceof Sf)return kw(r.value0);if(r instanceof Lf)return e(r.value0);throw new Error("Failed pattern match at Effect.Aff (line 104, column 7 - line 106, column 23): "+[r.constructor.name])})};return e},Monad0:function(){return Rr}},u2=Pt(kw(Cn)),c2=function(n){return cm(function(e){return function(){var r=n(function(a){return e(ut.create(a))()},function(a){return e(lt.create(a))()});return function(a){return cm(function(s){return function(){return r(a,function(u){return s(ut.create(u))()},function(u){return s(lt.create(u))()}),u2}})}}})};function K_(n){return Object.prototype.toString.call(n).slice(8,-1)}const f2=function(n){return function(e){return function(t){return(t|0)===t?n(t):e}}},On=function(n){return n},d2=isFinite,h2=Math.trunc?Math.trunc:function(n){return n<0?Math.ceil(n):Math.floor(n)};var Z_=sv(NS),J_=Zf(NS),Hw=(function(){return f2(gt.create)(Ct.value)})(),p2=function(n){return d2(n)?n>=On(Z_)?Z_:n<=On(J_)?J_:OS(0)(Hw(n)):0},ud=function(n){return p2(h2(n))};const m2=function(n){return n},Dv=function(n){return n.length},v2=function(n){return function(e){return function(t){return function(r){var a=r.indexOf(t);return a===-1?e:n(a)}}}},g2=function(n){return function(e){return function(t){return function(r){var a=r.lastIndexOf(t);return a===-1?e:n(a)}}}},Vw=function(n){return function(e){return e.substr(0,n)}},fm=function(n){return function(e){return e.substring(n)}},jl=function(n){return function(e){if(n>=0&&n<e.length)return e.charAt(n);throw new Error("Data.String.Unsafe.charAt: Invalid index.")}};var _2=(function(){return g2(gt.create)(Ct.value)})(),Gw=(function(){return v2(gt.create)(Ct.value)})(),y2=function(n){var e=Gw(n);return function(t){return vb(e(t))}},x2=La(fb),S2=La(lv),Ww=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),$w=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),w2=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),E2=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),fa=pu,M2=pu,dm=function(n){if(n instanceof Ww)return n.value0;if(n instanceof w2)return"Error at array index "+(S2(n.value0)+(": "+dm(n.value1)));if(n instanceof E2)return"Error at property "+(x2(n.value0)+(": "+dm(n.value1)));if(n instanceof $w)return"Type mismatch: expected "+(n.value0+(", found "+n.value1));throw new Error("Failed pattern match at Foreign (line 78, column 1 - line 78, column 45): "+[n.constructor.name])},jw=function(n){var e=nd(wv(n));return function(t){return e(LP(t))}},A2=function(n){var e=At(Ua(n)),t=jw(n);return function(r){return function(a){return K_(a)===r?e(M2(a)):t(new $w(r,K_(a)))}}},dp=At(Ua(Xo)),T2=jw(Xo),da=A2(Xo),Q_=WT(gC(EP)(Xo)),b2=qS(xu(Xo)),zc=Ot(hu),C2=KC(Ji)(lm),R2=Ci(Ea),P2=ed(zS),L2=Ot(fu),D2=zT(Uw),I2=rw(Bw),U2=At(wu),Xw=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),qw=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Yw=(function(){function n(){}return n.value=new n,n})(),Kw=(function(){function n(){}return n.value=new n,n})(),Zw=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),N2=function(n){return function(e){var t=function(p){return p===""?dp(PR):vu(function(m){return T2(Ww.create(m))})(dp)(VR(p))},r=(function(){if(e.responseFormat instanceof $S)return da("ArrayBuffer");if(e.responseFormat instanceof jS)return da("Blob");if(e.responseFormat instanceof XS)return function(p){return Q_(da("Document")(p))(Q_(da("XMLDocument")(p))(da("HTMLDocument")(p)))};if(e.responseFormat instanceof Jf)return b2(function(p){return e.responseFormat.value0(t(p))})(da("String"));if(e.responseFormat instanceof pv)return da("String");if(e.responseFormat instanceof mv)return Pt(e.responseFormat.value0(dp(Cn)));throw new Error("Failed pattern match at Affjax (line 274, column 18 - line 283, column 57): "+[e.responseFormat.constructor.name])})(),a=function(p){if(p instanceof Sb)return new lt(p.value0(fa));if(p instanceof wb)return new lt(fa(p.value0));if(p instanceof Eb)return new lt(fa(p.value0));if(p instanceof Mb)return new lt(fa(p.value0));if(p instanceof Ab)return new lt(fa(p.value0));if(p instanceof HS)return Us("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(zc(fa)(ZR(p.value0)));if(p instanceof VS)return new lt(fa(pw(p.value0)));throw new Error("Failed pattern match at Affjax (line 235, column 20 - line 250, column 69): "+[p.constructor.name])},s=function(p){return function(m){return p instanceof gt&&!C2(kT(R2)(j_)(p.value0))(m)?sR(m)(p.value0):m}},c=function(p){return s(zc(dv.create)(P2(Tb)(p)))(s(zc(fv.create)(Lb(e.responseFormat)))(e.headers))},u=function(p){return{method:mP(e.method),url:e.url,headers:L2(function(m){return{field:j_(m),value:Rb(m)}})(c(e.content)),content:p,responseType:Pb(e.responseFormat),username:kc(e.username),password:kc(e.password),withCredentials:e.withCredentials,timeout:OS(0)(zc(function(m){return m})(e.timeout))}},d=function(p){return D2(I2(c2(FT(n,"AffjaxTimeoutErrorMessageIdent","AffjaxRequestFailedMessageIdent",Nb.create,u(p)))))(function(m){if(m instanceof lt){var g=Mv(r(m.value0.body));if(g instanceof ut)return new ut(new qw(DP(g.value0),m.value0));if(g instanceof lt)return new lt({headers:m.value0.headers,status:m.value0.status,statusText:m.value0.statusText,body:g.value0});throw new Error("Failed pattern match at Affjax (line 209, column 9 - line 211, column 52): "+[g.constructor.name])}if(m instanceof ut)return new ut((function(){var S=nw(m.value0),E=S==="AffjaxTimeoutErrorMessageIdent";if(E)return Yw.value;var w=S==="AffjaxRequestFailedMessageIdent";return w?Kw.value:new Zw(m.value0)})());throw new Error("Failed pattern match at Affjax (line 207, column 144 - line 219, column 28): "+[m.constructor.name])})};if(e.content instanceof Ct)return d(kc(Ct.value));if(e.content instanceof gt){var h=a(e.content.value0);if(h instanceof lt)return d(kc(new gt(h.value0)));if(h instanceof ut)return U2(new ut(new Xw(h.value0)));throw new Error("Failed pattern match at Affjax (line 199, column 7 - line 203, column 48): "+[h.constructor.name])}throw new Error("Failed pattern match at Affjax (line 195, column 3 - line 203, column 48): "+[e.content.constructor.name])}},Jw=function(n){if(n instanceof Xw)return"There was a problem with the request content: "+n.value0;if(n instanceof qw)return"There was a problem with the response body: "+dm(n.value0);if(n instanceof Yw)return"There was a problem making the request: timeout";if(n instanceof Kw)return"There was a problem making the request: request failed";if(n instanceof Zw)return"There was a problem making the request: "+nw(n.value0);throw new Error("Failed pattern match at Affjax (line 113, column 14 - line 123, column 66): "+[n.constructor.name])},ha=(function(){return{method:new ut(Tw.value),url:"/",headers:[],content:Ct.value,username:Ct.value,password:Ct.value,withCredentials:!1,responseFormat:Ub,timeout:Ct.value}})(),F2=function(n){return function(e){return function(t){return N2(n)({method:ha.method,headers:ha.headers,content:ha.content,username:ha.username,password:ha.password,withCredentials:ha.withCredentials,timeout:ha.timeout,url:t,responseFormat:e})}}},O2=La(lv),k2={show:function(n){return"(StatusCode "+(O2(n)+")")}},z2={eq:function(n){return function(e){return n===e}}};const B2={newXHR:function(){return new XMLHttpRequest},fixupUrl:function(n){return n||"/"}};var Qw=F2(B2),H2=Ot(_v),cd=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),eE=function(n){var e=Ot(n);return{dimap:function(t){return function(r){return function(a){return new cd((function(){var s=e(r);return function(c){return s(a.value0(c))}})(),(function(){var s=H2(r);return function(c){return s(a.value1(t(c)))}})())}}}}},an=function(n){return function(e){return uw(n.value1(e))}},Tn=function(n){return n.value0},Eu=function(n){return function(e){return new cd(n,function(t){return new jt(e(t),t)})}},V2=function(n){return function(e){return new cd(n,function(t){return new jt(e(t),t)})}},G2=typeof Array.from=="function",W2=typeof Symbol<"u"&&Symbol!=null&&typeof Symbol.iterator<"u"&&typeof String.prototype[Symbol.iterator]=="function",$2=typeof String.prototype.fromCodePoint=="function",j2=typeof String.prototype.codePointAt=="function";const X2=function(n){return j2?function(e){return e.codePointAt(0)}:n},q2=function(n){return $2?String.fromCodePoint:n},Y2=function(n){return function(e){return W2?function(t){for(var r="",a=t[Symbol.iterator](),s=0;s<e;++s){var c=a.next();if(c.done)return r;r+=c.value}return r}:n(e)}},K2=function(n){return function(e){return G2?function(t){return Array.from(t,e)}:n}};function Ma(n){return n.charCodeAt(0)}function Z2(n){return String.fromCharCode(n)}var tE=Zf(nu),nE=sv(nu),J2=function(n){return n.toEnum},rE=function(n){return n.fromEnum},Q2=function(n){var e=J2(n),t=rE(n),r=Zf(n.Bounded0());return function(a){return function(s){return function(c){var u=e(c);if(u instanceof gt)return u.value0;if(u instanceof Ct){var d=c<t(r);return d?a:s}throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): "+[u.constructor.name])}}}},eL=function(n){return function(e){return function(t){return n(e(t)+1|0)}}},tL=function(n){return function(e){return function(t){return n(e(t)-1|0)}}},hm=function(n){return n>=Ma(tE)&&n<=Ma(nE)?new gt(Z2(n)):Ct.value},nL={succ:eL(hm)(Ma),pred:tL(hm)(Ma),Ord0:function(){return US}},iE=(function(){return{cardinality:Ma(nE)-Ma(tE)|0,toEnum:hm,fromEnum:Ma,Bounded0:function(){return nu},Enum1:function(){return nL}}})(),Xl=rE(iE),oE=Ot(hu),rL=iR(oR),iL=jb(KS),oL=$b(KS),aE=function(n){return function(e){return(((n-55296|0)*1024|0)+(e-56320|0)|0)+65536|0}},sE=function(n){return 56320<=n&&n<=57343},lE=function(n){return 55296<=n&&n<=56319},uE=function(n){var e=Dv(n);if(e===0)return Ct.value;if(e===1)return new gt({head:Xl(jl(0)(n)),tail:""});var t=Xl(jl(1)(n)),r=Xl(jl(0)(n)),a=lE(r)&&sE(t);return a?new gt({head:aE(r)(t),tail:fm(2)(n)}):new gt({head:r,tail:fm(1)(n)})},aL=function(n){return oE(function(e){return new jt(e.head,e.tail)})(uE(n))},sL=function(n){return rL(aL)(n)},lL=function(n){var e=Xl(jl(0)(n)),t=lE(e)&&Dv(n)>1;if(t){var r=Xl(jl(1)(n)),a=sE(r);return a?aE(e)(r):e}return e},uL=X2(lL),cL=K2(sL)(uL),fL=function(n){return mw(cL(n))},dL=function(n){return function(e){return oE(function(t){return fL(Vw(t)(e))})(_2(n)(e))}},hp=(function(){var n=Q2(iE)(Zf(nu))(sv(nu));return function(e){return m2(n(e))}})(),hL=function(n){if(n<=65535)return hp(n);var e=iL(n-65536|0)(1024)+55296|0,t=oL(n-65536|0)(1024)+56320|0;return hp(e)+hp(t)},pL=q2(hL),cE=function(n){return function(e){if(n<1)return"";var t=uE(e);return t instanceof gt?pL(t.value0.head)+cE(n-1|0)(t.value0.tail):e}},mL=Y2(cE),vL=La(lv),ey=fn(gu),Iv=Tv(bv),fd=At(Ia),fE=ed(gu),gL=Mw(Lv),_L=qS(zS),yL=MR(Ew)(Ia),xL=Ot(fu),Mi=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),SL=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),hE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Uv=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),pE=(function(){function n(){}return n.value=new n,n})(),wL=function(n){var e=$r(n);return function(){return function(t){return function(r){return function(a){var s=function(d){return function(h){return new tn(new jt(d,an(r)(iv(d)(h))),an(a)(h))}},c=function(d){return function(h){return ey(Tn(a)(h))(function(p){return ey(Iv(hE.create(d))((function(){var m=Ns(d)(h);if(m instanceof gt)return Tn(r)(m.value0);if(m instanceof Ct)return new ut(pE.value);throw new Error("Failed pattern match at Data.Codec.Argonaut (line 264, column 29 - line 266, column 34): "+[m.constructor.name])})()))(function(m){return fd(ov(d)(m)(p))})})}},u=e(t);return V2(c(u))(s(u))}}}}},EL=(function(){return new cd(Pt(fd({})),At(cC(wP)))})(),mE=function(n){var e=function(t){if(t instanceof Mi)return"  Expected value of type '"+(t.value0+"'.");if(t instanceof SL)return"  Unexpected value "+(pw(t.value0)+".");if(t instanceof dE)return"  At array index "+(vL(t.value0)+(`:
`+e(t.value1)));if(t instanceof hE)return"  At object key "+(t.value0+(`:
`+e(t.value1)));if(t instanceof Uv)return"  Under '"+(t.value0+(`':
`+e(t.value1)));if(t instanceof pE)return"  No value was found.";throw new Error("Failed pattern match at Data.Codec.Argonaut (line 90, column 8 - line 96, column 43): "+[t.constructor.name])};return`An error occurred while decoding a JSON value:
`+e(n)},dd=function(n){return function(e){return Eu((function(){var t=Ki(new ut(new Mi(n)))(fd);return function(r){return t(e(r))}})())}},bn=dd("String")(UR)(Av),pm=Eu(fd)(_r(yr)),Bo=dd("Object")(FR)(Av),ML=function(n){return function(e){return Eu(function(t){return Iv(Uv.create(n))(fE(Tn(e))(Tn(Bo)(t)))})(function(t){return an(Bo)(gL(an(e)(t)))})}},Fo=dd("Array")(BR)(Av),Lo=dd("Int")(_L(Hw)(kR))(function(n){return On(n)}),Mu=function(n){return Eu(function(e){return fE(yL(function(t){return function(r){return Iv(dE.create(t))(Tn(n)(r))}}))(Tn(Fo)(e))})(function(e){return xL(an(n))(e)})};function vE(n,e){var t={};for(var r in e)({}).hasOwnProperty.call(e,r)&&(t[r]=e[r]);for(var a in n)({}).hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}var AL=function(){return function(n){return function(e){return vE(n,e)}}},TL=function(n){var e=$r(n);return function(){return function(){return function(t){return function(r){return function(a){return ov(e(t))(r)(a)}}}}}},gE=function(){return function(){return function(n){return function(e){return vE(n,e)}}}},Nv=function(n){var e=$r(n);return function(){return function(){return function(t){return function(r){return function(a){return ov(e(t))(r)(a)}}}}}},qo=function(n){var e=$r(n);return function(){return function(t){return function(r){return iv(e(t))(r)}}}},bL=function(n){var e=$r(n);return function(){return function(){return function(t){return function(r){return VT(e(t))(r)}}}}},hd={rowListCodec:function(n){return function(e){return EL}}},_E=function(n){return n.rowListCodec},dr=function(n){var e=_E(n);return function(){return function(){return function(t){var r=qo(t)(),a=wL(t)();return{rowListCodec:function(s){return function(c){var u=e(Mt.value)(c),d=r(Mt.value)(c);return a(Mt.value)(d)(u)}}}}}}},CL=function(){return function(n){return _E(n)(Mt.value)}},RL=CL(),Fv=function(){return function(n){var e=RL(n);return function(t){return function(r){return ML(t)(e(r))}}}},PL=cw(fw),yE={liftAff:_r(yr),MonadEffect0:function(){return js}},Ov=function(n){return n.liftAff},xE=function(n){var e=n.MonadEffect0(),t=Sv(e);return{liftAff:(function(){var r=PL(e.Monad0()),a=Ov(n);return function(s){return r(a(s))}})(),MonadEffect0:function(){return t}}};const LL=function(n){return function(e){return e.join(n)}};var DL=jr(du),IL={genericShowArgs:function(n){return[]}},UL=function(n){return n.genericShowArgs},NL=function(n){var e=UL(n);return function(t){var r=$r(t);return{"genericShow'":function(a){var s=r(Mt.value),c=e(a);return c.length===0?s:"("+(LL(" ")(DL([s])(c))+")")}}}},mm=function(n){return n["genericShow'"]},hi=function(n){var e=mm(n);return function(t){var r=mm(t);return{"genericShow'":function(a){if(a instanceof Ft)return e(a.value0);if(a instanceof Re)return r(a.value0);throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): "+[a.constructor.name])}}}},FL=function(n){var e=uv(n);return function(t){var r=mm(t);return function(a){return r(e(a))}}},Qr=NL(IL),SE=(function(){function n(){}return n.value=new n,n})(),wE=(function(){function n(){}return n.value=new n,n})(),EE=(function(){function n(){}return n.value=new n,n})(),ME=(function(){function n(){}return n.value=new n,n})(),AE=(function(){function n(){}return n.value=new n,n})(),OL=(function(){function n(){}return n.value=new n,n})(),kL=(function(){function n(){}return n.value=new n,n})(),zL=(function(){function n(){}return n.value=new n,n})(),BL=(function(){function n(){}return n.value=new n,n})(),HL=(function(){function n(){}return n.value=new n,n})(),VL=(function(){function n(){}return n.value=new n,n})(),GL={from:function(n){if(n instanceof SE)return new Ft(fr.value);if(n instanceof wE)return new Re(new Ft(fr.value));if(n instanceof EE)return new Re(new Re(new Ft(fr.value)));if(n instanceof ME)return new Re(new Re(new Re(new Ft(fr.value))));if(n instanceof AE)return new Re(new Re(new Re(new Re(new Ft(fr.value)))));if(n instanceof OL)return new Re(new Re(new Re(new Re(new Re(new Ft(fr.value))))));if(n instanceof kL)return new Re(new Re(new Re(new Re(new Re(new Re(new Ft(fr.value)))))));if(n instanceof zL)return new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Ft(fr.value))))))));if(n instanceof BL)return new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Ft(fr.value)))))))));if(n instanceof HL)return new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Ft(fr.value))))))))));if(n instanceof VL)return new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Re(new Re(fr.value))))))))));throw new Error("Failed pattern match at Error (line 30, column 1 - line 30, column 34): "+[n.constructor.name])}},WL={show:FL(GL)(hi(Qr({reflectSymbol:function(){return"Err1"}}))(hi(Qr({reflectSymbol:function(){return"Err2"}}))(hi(Qr({reflectSymbol:function(){return"Err3"}}))(hi(Qr({reflectSymbol:function(){return"Err4"}}))(hi(Qr({reflectSymbol:function(){return"Err5"}}))(hi(Qr({reflectSymbol:function(){return"Err6"}}))(hi(Qr({reflectSymbol:function(){return"XErr7"}}))(hi(Qr({reflectSymbol:function(){return"XErr8"}}))(hi(Qr({reflectSymbol:function(){return"XErr9"}}))(hi(Qr({reflectSymbol:function(){return"XErr10"}}))(Qr({reflectSymbol:function(){return"ErrX"}}))))))))))))},$L=La(WL),If=function(n){return"Error: "+(n.message+(" ("+($L(n.code)+")")))},ql=function(n){return function(e){return{message:e,code:n}}},jL=function(n){var e=n.MonadThrow0(),t=nd(e),r=At(e.Monad0().Applicative0());return function(a){return function(s){if(s instanceof ut)return t(a(s.value0));if(s instanceof lt)return r(s.value0);throw new Error("Failed pattern match at Error (line 43, column 28 - line 45, column 20): "+[s.constructor.name])}}},XL=function(n){var e=nd(n.MonadThrow0());return function(t){var r=t.MonadEffect0().Monad0(),a=fn(r.Bind1()),s=Ov(t),c=At(r.Applicative0());return function(u){return function(d){return a(s(d))(function(h){if(h instanceof ut)return e(u(h.value0));if(h instanceof lt)return c(h.value0);throw new Error("Failed pattern match at Error (line 38, column 3 - line 40, column 22): "+[h.constructor.name])})}}}},qL=ld(eE(Da)),YL=mu(),KL=bb(),ZL=Fv(),Ro=function(n){return n},JL=function(n){return n},kv=function(){return function(n){var e=ZL(n);return function(t){var r=$r(t);return function(a){return qL(YL)(KL)(e(r(Mt.value))(a))}}}},TE=xu(Rr),vm=fn(TE),bE=Ev(Rr),CE=XL(bE)(xE(yE)),RE=Qf(td)(TE),PE=Ua(Rr),LE=LS(PE),DE=IS(z2),IE=nd(wv(Rr)),UE=La(k2),NE=At(PE),QL=jL(bE),eD=function(n){return vm(CE((function(){var e=ql(ME.value);return function(t){return e(Jw(t))}})())(Qw(Db)(n)))(function(e){return RE(LE(DE(e.status)(200))(IE(ql(AE.value)(UE(e.status)))))(function(){return NE(e.body)})})},tD=kv()(dr(dr(dr(hd)()()({reflectSymbol:function(){return"pictures"}}))()()({reflectSymbol:function(){return"name"}}))()()({reflectSymbol:function(){return"gcode"}}))({reflectSymbol:function(){return"IndexFileItem"}})({name:bn,gcode:bn,pictures:Mu(bn)}),zv=Mu(tD),nD=function(n){return vm(CE((function(){var e=ql(SE.value);return function(t){return e(Jw(t))}})())(Qw(Ib)(n.url)))(function(e){return RE(LE(DE(e.status)(200))(IE(ql(EE.value)(UE(e.status)))))(function(){return vm(QL((function(){var t=ql(wE.value);return function(r){return t(mE(r))}})())(Tn(zv)(e.body)))(function(t){return NE(t)})})})},rD=mu(),iD=function(n){return rD(WP(n))},Vr=Tv(bv),qn=fn(gu),Do=At(Ia),oD=Ot(Da),aD=ld(eE(Da)),ty=Mw(Ji),sD=_r(yr),wf=LS(Ia),Yl=Qf(td)(gu),ny=IS(sm(DR)),Au=(function(){function n(){}return n.value=new n,n})(),pn=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Bv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),pd=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),lD=function(n){return function(){return function(){return function(e){return function(t){return t}}}}},gm=function(n){return n.gCasesEncode},_m=function(n){return n.gCasesDecode},Io=function(n){var e=gm(n),t=_m(n);return function(r){var a=gm(r),s=_m(r);return function(){return function(){return function(){return function(){return function(c){var u=lD()()(),d=qo(c)(),h=Nv(c)()(),p=bL(c)()();return{gCasesEncode:function(m){return function(g){var S=u(Mt.value)(g),E=d(Mt.value)(g),w=h(Mt.value)(E)({});return function(y){if(y instanceof Ft)return e(m)(w)(y.value0);if(y instanceof Re)return a(m)(S)(y.value0);throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 244, column 7 - line 246, column 47): "+[y.constructor.name])}}},gCasesDecode:function(m){return function(g){return function(S){var E=p(Mt.value)(g),w=d(Mt.value)(g),y=h(Mt.value)(w)({}),_=function(R){return s(m)(E)(S)},T=function(R){return t(m)(y)(S)},M=T();if(M instanceof ut&&M.value0 instanceof Au)return oD(Re.create)(_());if(M instanceof ut&&M.value0 instanceof pn)return new ut(new pn(M.value0.value0));if(M instanceof lt)return new lt(new Ft(M.value0));throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 257, column 5 - line 260, column 34): "+[M.constructor.name])}}}}}}}}}}},uD=function(n){return function(e){return new Uv(n,(function(){if(e instanceof Au)return new Mi("No case matched");if(e instanceof pn)return e.value0;throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 147, column 5 - line 149, column 23): "+[e.constructor.name])})())}},cD=function(n){var e=gm(n),t=_m(n);return function(r){var a=uv(r),s=FS(r);return function(c){return function(u){return function(d){var h=e(c)(d),p=(function(){var m=Vr(uD(u)),g=t(c)(d);return function(S){return m(g(S))}})();return aD(a)(s)(Eu(p)(h))}}}}},FE=function(n){return function(e){return function(t){if(n instanceof Bv){var r=(function(){return t.length===0?an(Fo)([]):t.length===1&&n.value0.unwrapSingleArguments?t[0]:an(Fo)(t)})(),a=n.value0.mapTag(e);return an(Bo)(ty([new jt(a,r)]))}if(n instanceof pd){var s=(function(){return t.length===0&&n.value0.omitEmptyArguments?Ct.value:t.length===1&&n.value0.unwrapSingleArguments?new gt(new jt(n.value0.valuesKey,t[0])):new gt(new jt(n.value0.valuesKey,an(Fo)(t)))})(),a=n.value0.mapTag(e),c=new gt(new jt(n.value0.tagKey,an(bn)(a)));return an(Bo)(ty(_R([c,s])))}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 403, column 3 - line 428, column 33): "+[n.constructor.name])}}},fD=(function(){return new pd({tagKey:"tag",valuesKey:"values",unwrapSingleArguments:!1,omitEmptyArguments:!1,mapTag:sD})})(),Hv=function(n){return function(e){return cD(e)(n)(fD)}},OE=function(n){return function(e){return function(t){return qn(Vr(pn.create)(Us(new Mi("Expecting a tag property `"+(n+"`")))(Ns(n)(e))))(function(r){return qn(Vr(pn.create)(Tn(bn)(r)))(function(a){return wf(a!==t)(new ut(Au.value))})})}}},dD=function(n){return function(e){return function(t){if(n instanceof Bv){var r=n.value0.mapTag(t);return qn(Vr(pn.create)(Tn(Bo)(e)))(function(a){return qn(Us(Au.value)(Ns(r)(a)))(function(s){return qn(Vr(pn.create)(Tn(Fo)(s)))(function(c){return Yl(wf(ny(c)([]))(new ut(new pn(new Mi("Expecting an empty array")))))(function(){return Do(Cn)})})})})}if(n instanceof pd){var r=n.value0.mapTag(t);return qn(Vr(pn.create)(Tn(Bo)(e)))(function(s){return Yl(OE(n.value0.tagKey)(s)(r))(function(){return wf(!n.value0.omitEmptyArguments)(qn(Us(new pn(new Mi("Expecting a value property `"+(n.value0.valuesKey+"`"))))(Ns(n.value0.valuesKey)(s)))(function(c){return qn(Vr(pn.create)(Tn(Fo)(c)))(function(u){return Yl(wf(ny(u)([]))(new ut(new pn(new Mi("Expecting an empty array")))))(function(){return Do(Cn)})})}))})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 320, column 3 - line 346, column 18): "+[n.constructor.name])}}},hD=function(){return function(n){var e=$r(n);return{gCasesEncode:function(t){return function(r){return function(a){var s=e(Mt.value);return FE(t)(s)([])}}},gCasesDecode:function(t){return function(r){return function(a){var s=e(Mt.value);return Yl(dD(t)(a)(s))(function(){return Do(fr.value)})}}}}}},pD=function(n){return function(e){return function(t){if(n instanceof Bv){var r=n.value0.mapTag(t);return qn(Vr(pn.create)(Tn(Bo)(e)))(function(a){return qn(Us(Au.value)(Ns(r)(a)))(function(s){return n.value0.unwrapSingleArguments?Do(s):qn(Vr(pn.create)(Tn(Fo)(s)))(function(c){return c.length===1?Do(c[0]):new ut(new pn(new Mi("Expecting exactly one element")))})})})}if(n instanceof pd){var r=n.value0.mapTag(t);return qn(Vr(pn.create)(Tn(Bo)(e)))(function(s){return Yl(OE(n.value0.tagKey)(s)(r))(function(){return qn(Us(new pn(new Mi("Expecting a value property `"+(n.value0.valuesKey+"`"))))(Ns(n.value0.valuesKey)(s)))(function(c){return n.value0.unwrapSingleArguments?Do(c):qn(Vr(pn.create)(Tn(Fo)(c)))(function(u){return u.length===1?Do(u[0]):new ut(new pn(new Mi("Expecting exactly one element")))})})})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 349, column 49 - line 378, column 71): "+[n.constructor.name])}}},Vv=function(){return function(n){var e=$r(n),t=qo(n)();return{gCasesEncode:function(r){return function(a){return function(s){var c=e(Mt.value),u=t(Mt.value)(a);return FE(r)(c)([an(u)(s)])}}},gCasesDecode:function(r){return function(a){return function(s){var c=e(Mt.value);return qn(pD(r)(s)(c))(function(u){var d=t(Mt.value)(a);return qn(Vr(pn.create)(Tn(d)(u)))(function(h){return Do(h)})})}}}}}},si={first:function(n){return function(e){return new jt(n(e.value0),e.value1)}},second:Ot(_v),Profunctor0:function(){return ji}},mD=function(n){return n.first},ry=GS(),vD=function(n){return function(e){return function(t){var r=ld(t);return function(a){return r(n)(e)(a)}}}},gD=function(){return function(){return function(n){return vD(ry)(ry)(n)}}},_D=gD()(),yD=function(){return function(){return function(n){return _D(n)}}},xD=yD()(),kE=function(){return function(n){return function(e){return xD(e)}}},zE=function(n){return n},_i=function(n){return function(e){return zE(n)(Pt(e))}};const SD=function(n){return function(){console.log(n)}};var Gv=function(n){var e=yu(n);return function(t){return e(SD(t))}};function wD(n){var e={};for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}function ED(n){return function(e){return function(t){return t[n]=e(t[n]),t}}}var MD=bS,AD=function(){return function(){return function(n){var e=$r(n);return function(t){return function(r){return function(a){return ED(e(t))(r)(a)}}}}}},TD=yr,bD=function(n){return function(e){return n(wD(e))}},CD=_r(TD),RD=CS(MD),PD=AD()(),LD=function(n){return n},DD=function(n){return n.mappingWithIndex},ID=function(n){return n.mapping},kr={mapRecordWithIndexBuilder:function(n){return function(e){return CD}}},BE=function(n){return n.mapRecordWithIndexBuilder},Na=function(n){var e=PD(n);return function(t){var r=DD(t);return function(a){var s=BE(a);return function(){return function(){return{mapRecordWithIndexBuilder:function(c){return function(u){return RD(e(Mt.value)(r(u)(Mt.value)))(s(Mt.value)(u))}}}}}}}},HE=function(){return function(n){return{hmap:(function(){var e=BE(n)(Mt.value);return function(t){return bD(e(LD(t)))}})()}}},Uf=function(n){return n.hmap},Ho=function(n){var e=ID(n);return{mappingWithIndex:function(t){return function(r){return e(t)}}}},UD=function(n){return function(e){var t=ld(e.Profunctor0()),r=mD(e);return function(a){return t(n)(function(s){return s.value1(s.value0)})(r(a))}}},ND=function(n){return function(e){return function(t){return UD(function(r){return new jt(n(r),function(a){return e(r)(a)})})(t)}}},VE=function(n){var e=qo(n)(),t=TL(n)()();return function(){return function(){return function(r){return function(a){return ND(e(r))(Ei(t(r)))(a)}}}}},Yo=function(n){var e=VE(n)()();return function(){return function(){return function(t){return e(Mt.value)(t)}}}},FD=fu,OD=Ji,GE=Ot(PS),kD=AL(),zD=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),BD=(function(){function n(){}return n.value=new n,n})(),HD=(function(){function n(){}return n.value=new n,n})(),VD=(function(){function n(){}return n.value=new n,n})(),GD=function(){return function(n){var e=qo(n)();return{mkMatcherRep:function(t){return function(r){var a=e(Mt.value)(t),s=a(Cn);return s}}}}},WD=function(){return function(n){var e=qo(n)();return{mkMatcherRep:function(t){return function(r){var a=e(Mt.value)(t),s=a(r);return s}}}}},WE=function(){return function(n){return{mkConstructorsRep:(function(){var e=function(r){return db(hb(r))},t=Nv(n)()()(Mt.value)(e)({});return t})()}}},$E={mapping:function(n){return function(e){return function(t){return n.value0.emitMsg(e(t))()}}}},jE={mapping:function(n){return function(e){return GE(Re.create)(e)}}},XE={mapping:function(n){return function(e){return GE(Ft.create)(e)}}},qE=function(n){var e=FS(n);return{mapping:function(t){return function(r){return function(a){return e(r(a))}}}}},ym=function(n){return n.mkMatcherRep},$D=function(n){var e=uv(n);return function(t){var r=ym(t);return{mkMatcher1:function(a,s){return r(s)(e(a))}}}},jD=function(n){return n.mkMatcher1},YE=function(n){var e=Uf(n);return function(t){return e(new zD({emitMsg:t.emitMsg}))}},xm=function(n){return n.mkConstructorsRep},KE=function(n){return function(e){var t=xm(e);return function(r){return{mkConstructors:(function(){var a=Uf(r)(VD.value)(t);return a})()}}}},Gl=function(n){var e=xm(n);return function(t){var r=xm(t);return function(a){var s=Uf(a);return function(c){var u=Uf(c);return function(){return{mkConstructorsRep:(function(){var d=u(BD.value)(r),h=s(HD.value)(e),p=kD(h)(d);return p})()}}}}}},ZE=function(n){return n.mkConstructors},XD=function(){return pu},qD=XD(),YD=function(){return pu},KD=YD(),pp=function(n){var e=ym(n);return function(t){var r=ym(t);return function(){return{mkMatcherRep:function(a){return function(s){var c=(function(){if(s instanceof Ft)return e(KD(a))(s.value0);if(s instanceof Re)return r(qD(a))(s.value0);throw new Error("Failed pattern match at Stadium.TL (line 194, column 11 - line 196, column 76): "+[s.constructor.name])})();return c}}}}}},iy=GD(),Sm={reflectSymbol:function(){return"NotAsked"}},wm={reflectSymbol:function(){return"Loading"}},oy=WD(),Em={reflectSymbol:function(){return"Loaded"}},JE={reflectSymbol:function(){return"Error"}},ay=hD(),sy=Vv(),Fs=(function(){function n(){}return n.value=new n,n})(),Ca=(function(){function n(){}return n.value=new n,n})(),Vo=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Os=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),QE={to:function(n){if(n instanceof Ft)return Fs.value;if(n instanceof Re&&n.value0 instanceof Ft)return Ca.value;if(n instanceof Re&&n.value0 instanceof Re&&n.value0.value0 instanceof Ft)return new Vo(n.value0.value0.value0);if(n instanceof Re&&n.value0 instanceof Re&&n.value0.value0 instanceof Re)return new Os(n.value0.value0.value0);throw new Error("Failed pattern match at RemoteData (line 28, column 1 - line 28, column 41): "+[n.constructor.name])},from:function(n){if(n instanceof Fs)return new Ft(fr.value);if(n instanceof Ca)return new Re(new Ft(fr.value));if(n instanceof Vo)return new Re(new Re(new Ft(n.value0)));if(n instanceof Os)return new Re(new Re(new Re(n.value0)));throw new Error("Failed pattern match at RemoteData (line 28, column 1 - line 28, column 41): "+[n.constructor.name])}},ZD=Hv(QE)(Io(ay(Sm))(Io(ay(wm))(Io(sy(Em))(sy(JE))()()()()(Em))()()()()(wm))()()()()(Sm)),JD=function(n){var e=Ci(n);return{eq:function(t){return function(r){return t instanceof Fs&&r instanceof Fs||t instanceof Ca&&r instanceof Ca?!0:t instanceof Vo&&r instanceof Vo?e(t.value0)(r.value0):t instanceof Os&&r instanceof Os?t.value0===r.value0:!1}}}},eM=jD($D(QE)(pp(iy(Sm))(pp(iy(wm))(pp(oy(Em))(oy(JE))())())())),md=function(n){return ZD("RemoteData")({NotAsked:Cn,Loading:Cn,Loaded:n,Error:bn})},tM=function(n){return n.bitraverse},QD=function(n){var e=tM(n);return function(t){var r=e(t),a=At(t);return function(s){return r(s)(a)}}},nM={bitraverse:function(n){var e=n.Apply0(),t=Ws(e),r=Ot(e.Functor0());return function(a){return function(s){return function(c){return t(r(jt.create)(a(c.value0)))(s(c.value1))}}}}},e3=function(n,e,t){var r=0,a;return function(s){if(r===2)return a;if(r===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return r=1,a=t(),r=2,a}},ly=tM(nM)(Ia),uy=Pv(ad)(Ia),t3=YC(Ji)(Ea),n3=Ot(FD),r3=Ot(PS),i3=Cv(OD),o3=kb(gu),a3=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),s3=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),l3=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),rM=(function(){function n(){}return n.value=new n,n})(),Gr=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Go=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Mm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ks=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Am=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),u3=(function(){var n=function(m){return{segments:m.value0.value0,params:m.value0.value1,hash:m.value1}},e=function(m){return function(g){return g===""?[]:Aw(m)(g)}},t=function(m){return function(g){return function(S){var E=Gw(g)(S);if(E instanceof gt)return new jt(Vw(E.value0)(S),fm(E.value0+Dv(g)|0)(S));if(E instanceof Ct)return m(S);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 191, column 5 - line 193, column 23): "+[E.constructor.name])}}},r=function(m){var g=XR(m);if(g instanceof Ct)return new ut(new l3(m));if(g instanceof gt)return new lt(g.value0);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 195, column 29 - line 197, column 22): "+[g.constructor.name])},a=(function(){var m=ly(r)(r),g=t(Ei(jt.create)(""))("=");return function(S){return m(g(S))}})(),s=(function(){var m=uy(a),g=e("&");return function(S){return m(g(S))}})(),c=(function(){var m=e("/");return function(g){return(function(S){return S.length===2&&S[0]===""&&S[1]===""?new lt([""]):uy(r)(S)})(m(g))}})(),u=(function(){var m=ly(c)(s),g=t(Ei(jt.create)(""))("?");return function(S){return m(g(S))}})(),d=Ot(Da)(n),h=QD(nM)(Ia)(u),p=t(Ei(jt.create)(""))("#");return function(m){return d(h(p(m)))}})(),c3=function(n){return new ks(function(e){var t=t3(n)(e.params);return t instanceof gt?new Go(e,t.value0):new Gr(new s3(n))})},f3={map:function(n){return function(e){if(e instanceof Gr)return new Gr(e.value0);if(e instanceof Go)return new Go(e.value0,n(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},iM=Ot(f3),Tm={map:function(n){return function(e){if(e instanceof Mm)return new Mm(n3(Ot(Tm)(n))(e.value0));if(e instanceof ks)return new ks(r3(iM(n))(e.value0));if(e instanceof Am)return new Am(e.value0,Ot(Tm)(n)(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},d3=function(n){return function(e){var t=fR(e.segments);return t instanceof gt&&n===t.value0?new Go({params:e.params,hash:e.hash,segments:pR(1)(e.segments)},Cn):t instanceof gt?new Gr(new a3(n,t.value0)):new Gr(rM.value)}},oM=e3("runRouteParser","Routing.Duplex.Parser",function(){var n=function(t){return function(r){return function(a){return r instanceof Gr?oM(161)(t)(a):r}}},e=function(t){return function(r){var a=t,s=!1,c;function u(d,h){if(h instanceof Mm)return s=!0,i3(n(d))(new Gr(rM.value))(h.value0);if(h instanceof ks)return s=!0,h.value0(d);if(h instanceof Am){var p=d3(h.value0)(d);if(p instanceof Gr)return s=!0,new Gr(p.value0);if(p instanceof Go){a=p.value0,r=h.value1;return}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 157, column 7 - line 159, column 40): "+[p.constructor.name])}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 153, column 14 - line 159, column 40): "+[h.constructor.name])}for(;!s;)c=u(a,r);return c}};return e}),bm=oM(150),h3=function(n){return o3(u3)((function(){var e=Ei(bm)(n);return function(t){return(function(r){if(r instanceof Gr)return new ut(r.value0);if(r instanceof Go)return new lt(r.value1);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 200, column 49 - line 202, column 29): "+[r.constructor.name])})(e(t))}})())},p3={apply:function(n){return function(e){return new ks(function(t){var r=bm(t)(n);if(r instanceof Gr)return new Gr(r.value0);if(r instanceof Go)return iM(r.value1)(bm(r.value0)(e));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 81, column 5 - line 83, column 56): "+[r.constructor.name])})}}},m3={pure:(function(){var n=Ei(Go.create);return function(e){return ks.create(n(e))}})()},aM={append:function(n){return function(e){return function(t){return e(n(t))}}}},v3=function(n){return function(e){return function(t){return{segments:t.segments,hash:t.hash,params:mR(new jt(n,e))(t.params)}}}},g3={mempty:_r(yr),Semigroup0:function(){return aM}},_3=jr(aM),y3=At(m3),sM=_r(yr),x3=Ws(p3),S3=Ot(Tm),Wv=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),w3=sM,E3=(function(){return new Wv($s(Xb(g3)),y3({}))})(),M3=function(n){var e=qo(n)(),t=Nv(n)()();return function(){return function(){return function(){return function(r){return function(a){return function(s){return new Wv(function(c){return _3(s.value0(c))(a.value0(e(r)(c)))},x3(S3(Ei(t(r)))(s.value1))(a.value1))}}}}}}},A3=function(n){return h3(n.value1)},T3=function(n){return n.params},b3=function(n){return new Wv(v3(n),c3(n))},C3={buildParams:function(n){return function(e){return sM}}},lM=function(n){return n.buildParams},R3=function(n){var e=M3(n)()()(),t=qo(n)(),r=$r(n);return function(){return function(){return function(){return function(){return function(a){var s=lM(a);return{buildParams:function(c){return function(u){return function(d){return s(Mt.value)(u)(e(Mt.value)(t(Mt.value)(u)(b3(r(Mt.value))))(d))}}}}}}}}}},P3=function(){return function(n){var e=lM(n);return{params:function(t){return e(Mt.value)(t)(E3)}}}};const L3=n=>()=>{console.log(...n)};var D3=Gv(dC),I3=At(_u),mp=jr(du),U3=Tv(bv),N3=Fv()(dr(dr(hd)()()({reflectSymbol:function(){return"values"}}))()()({reflectSymbol:function(){return"tag"}})),$v=function(n){var e=VE(n)()();return function(){return function(){return function(t){return e(Mt.value)(t)}}}},F3=$v({reflectSymbol:function(){return"history"}})()()(si),O3=$v({reflectSymbol:function(){return"historyIndex"}})()()(si),k3=$v({reflectSymbol:function(){return"pubState"}})()()(si),uM=function(n){var e=function(r){var a=function(s){return function(c){return r.updateState(function(u){var d=n.updatePubState(c)(u.pubState);if(d instanceof ut)return function(){return D3(d.value0)(),u};if(d instanceof lt){var h=n.encodeMsg(c),p=Bb({tag:"Unknown",values:[h]})(n.debugMsg(h)),m=(function(){return p.values.length===1?an(pm)(p.values[0]):an(Mu(pm))(p.values)})();return function(){return L3(mp([an(bn)("%c"+(p.tag+Ki("")(function(S){return"%c@"+S})(s))),an(bn)("color: white; background: #cc8a21; padding: 2px 4px;")])(mp(Ki([])(function(S){return[an(bn)("color: white; background:rgb(248, 98, 38); padding: 2px 4px;")]})(s))([m,an(bn)(`
newState`),n.encodeJsonPubState(d.value0)])))(),zE(F3)(function(S){return mp(S)([{msg:c,pubState:d.value0}])})(_i(O3)(u.historyIndex+1)(_i(k3)(d.value0)(u)))}}throw new Error("Failed pattern match at Stadium.Core (line 111, column 31 - line 140, column 16): "+[d.constructor.name])})}};return{emitMsg:a(Ct.value),emitMsgCtx:function(s){return a(new gt(s))},readPubState:function(){var c=r.readState();return c.pubState},readPrivState:function(){var c=r.readState();return c.privState},updatePrivState:function(s){return r.updateState(function(c){return I3({pubState:c.pubState,history:c.history,historyIndex:c.historyIndex,privState:s(c.privState)})})}}},t={history:[],historyIndex:0,pubState:n.initPubState,privState:n.initPrivState};return{dispatchers:function(r){return n.dispatchers(e(r))},initState:t,timeTravel:function(r){return Cn}}},cM=function(n){return U3(mE)(Tn(N3("")({tag:bn,values:Mu(pm)}))(n))};const fM=n=>()=>{const[e,t]=Ie.useState({state:n.initState}),[r,a]=Ie.useState(0),s={updateState:d=>()=>t(h=>(h.state=d(h.state)(),a(r+1),{...h})),readState:()=>e.state},c=n.dispatchers(s);return{state:e.state.pubState,dispatch:c}},z3=(n,e,t)=>{const r=Ie.useRef(0),a=Ie.useRef(t);return a.current=t,r.current=e(a.current)(t)?r.current:r.current+1,Ie.useEffect(()=>n(),[r.current])};var cy=At(Ua(Xo)),fy=kE(),dM={reflectSymbol:function(){return"index"}},B3=Yo(dM)()()(si),hM={reflectSymbol:function(){return"filter"}},H3=Yo(hM)()()(si),V3=fn(Su),G3=Gv(js),W3=At(wu),pM=Qf(td),mM=Lw(du)(ow),$3=pM(mM),j3=fC(qP(ZS)(Xo)),vp=At(Dw(ZS)(aw)),X3=fn(mM),jv={reflectSymbol:function(){return"url"}},q3=P3()(R3(jv)()()()()(C3)),dy=WE(),Nf={reflectSymbol:function(){return"MsgSetIndex"}},Xv={reflectSymbol:function(){return"MsgSetFilter"}},Ef=HE(),Cm=Na(Nf),Rm=Na(Xv),hy=yu(Sv(js)),vM=xu(Rr),py=fn(vM),my=rb(),vy=xf(nb)(),gM={reflectSymbol:function(){return"content"}},Y3={reflectSymbol:function(){return"pictures"}},K3={reflectSymbol:function(){return"name"}},Z3={reflectSymbol:function(){return"gcode"}},J3=Ci(JD(my(xf(vy(jv)(Ea))()(gM)(sm(JL(my(xf(xf(vy(Y3)(sm(Ea)))()(K3)(Ea))()(Z3)(Ea)))))))),Q3=At(Ua(Rr)),eI=gv(Ev(Rr)),tI=pM(vM),gy=Ho($E),nI=YE(Ef(Rm(gy)(Cm(gy)(kr)()())()())),rI=gE()(),_M=dr(hd)()(),iI={reflectSymbol:function(){return"PubState"}},yM=Fv()(dr(_M(jv))()()(gM)),_y=Vv(),Cs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Pm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),xM={to:function(n){if(n instanceof Ft)return new Cs(n.value0);if(n instanceof Re)return new Pm(n.value0);throw new Error("Failed pattern match at StateMachines.App (line 76, column 1 - line 76, column 30): "+[n.constructor.name])},from:function(n){if(n instanceof Cs)return new Ft(n.value0);if(n instanceof Pm)return new Re(n.value0);throw new Error("Failed pattern match at StateMachines.App (line 76, column 1 - line 76, column 30): "+[n.constructor.name])}},yy=Ho(qE(xM)),oI=function(n){return function(e){if(n instanceof Cs)return cy(_i((function(){var t=fy(Ro)(ji);return function(r){return t(B3(r))}})())(n.value0)(e));if(n instanceof Pm)return cy(_i((function(){var t=fy(Ro)(ji);return function(r){return t(H3(r))}})())(n.value0)(e));throw new Error("Failed pattern match at StateMachines.App (line 79, column 31 - line 81, column 76): "+[n.constructor.name])}},aI=function(n){var e=function(t){return n.filter===""?!0:y2(n.filter)(t.name)};return n.index instanceof Vo?hR(e)(n.index.value0.content):[]},sI=function(n){return function(e){return Fw(V3(xv(n(e)))(function(t){if(t instanceof ut)return G3(If(t.value0));if(t instanceof lt)return W3(Cn);throw new Error("Failed pattern match at StateMachines.App (line 140, column 3 - line 142, column 25): "+[t.constructor.name])}))()}},lI=function(n){var e=dL("/")(n);if(e instanceof gt)return mL(e.value0)(n);if(e instanceof Ct)return"";throw new Error("Failed pattern match at StateMachines.App (line 68, column 3 - line 70, column 18): "+[e.constructor.name])},uI=function(n){var e=function(t){var r=T3(t);return function(a){return function(s){return function(c){var u=A3(r(s))(c);if(u instanceof ut)return $3(j3([u.value0]))(function(){return vp(a)});if(u instanceof lt)return vp(u.value0);throw new Error("Failed pattern match at StateMachines.App (line 201, column 21 - line 205, column 22): "+[u.constructor.name])}}}};return iD(X3(e(q3)({url:"index.json"})({url:w3})(n))(function(t){return vp({url:t.url})}))},cI=function(n){return lI(n.absUrl)+("/"+n.relUrl)},fI=ZE(KE()(Gl(dy(Nf))(dy(Xv))(Ef(Cm(Ho(XE))(kr)()()))(Ef(Rm(Ho(jE))(kr)()()))())(Ef(Rm(yy)(Cm(yy)(kr)()())()()))),dI=(function(){return{index:Fs.value,filter:""}})(),hI=function(){var e=NT(),t=uI(e);return t.value0},pI=function(n){var e=function(r){var a=(function(){var s=n.emitMsgCtx(r.label);return function(c){return hy(s(c))}})();return py(hy(n.readPubState))(function(s){var c=J3(s.index)(Ca.value);return c?Q3(Cn):eI(tI(a(new Cs(Ca.value)))(function(){return py(nD({url:r.url}))(function(u){return a(new Cs(new Vo({url:r.url,content:u})))})}))(function(u){return a(new Cs(new Os(If(u))))})})},t=nI({emitMsg:n.emitMsg})(fI);return rI({runFetchIndex:sI(e)})(t)},mI=kv()(dr(_M(dM))()()(hM))(iI)({index:md(yM("")({url:bn,content:zv})),filter:bn}),vI=Hv(xM)(Io(_y(Nf))(_y(Xv))()()()()(Nf))("Msg")({MsgSetIndex:md(yM("")({url:bn,content:zv})),MsgSetFilter:bn}),gI=uM({updatePubState:function(n){return function(e){return Mv(oI(n)(e))}},dispatchers:pI,initPubState:dI,initPrivState:{},printError:_r(yr),encodeJsonPubState:an(mI),encodeMsg:an(vI),debugMsg:cM}),_I=fM(gI);const yI="0.1.7",xI="0.0.26";function Lm(){return Lm=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Lm.apply(null,arguments)}function SI(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function wI(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var EI=(function(){function n(t){var r=this;this._insertTag=function(a){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,s),r.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(wI(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=SI(a);try{s.insertRule(r,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)}),this.tags=[],this.ctr=0},n})(),Xn="-ms-",Ff="-moz-",Ut="-webkit-",SM="comm",qv="rule",Yv="decl",MI="@import",wM="@keyframes",AI="@layer",TI=Math.abs,vd=String.fromCharCode,bI=Object.assign;function CI(n,e){return Un(n,0)^45?(((e<<2^Un(n,0))<<2^Un(n,1))<<2^Un(n,2))<<2^Un(n,3):0}function EM(n){return n.trim()}function RI(n,e){return(n=e.exec(n))?n[0]:n}function Nt(n,e,t){return n.replace(e,t)}function Dm(n,e){return n.indexOf(e)}function Un(n,e){return n.charCodeAt(e)|0}function ru(n,e,t){return n.slice(e,t)}function yi(n){return n.length}function Kv(n){return n.length}function Bc(n,e){return e.push(n),n}function PI(n,e){return n.map(e).join("")}var gd=1,zs=1,MM=0,gr=0,mn=0,Xs="";function _d(n,e,t,r,a,s,c){return{value:n,root:e,parent:t,type:r,props:a,children:s,line:gd,column:zs,length:c,return:""}}function Ll(n,e){return bI(_d("",null,null,"",null,null,0),n,{length:-n.length},e)}function LI(){return mn}function DI(){return mn=gr>0?Un(Xs,--gr):0,zs--,mn===10&&(zs=1,gd--),mn}function br(){return mn=gr<MM?Un(Xs,gr++):0,zs++,mn===10&&(zs=1,gd++),mn}function Ai(){return Un(Xs,gr)}function Mf(){return gr}function Tu(n,e){return ru(Xs,n,e)}function iu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AM(n){return gd=zs=1,MM=yi(Xs=n),gr=0,[]}function TM(n){return Xs="",n}function Af(n){return EM(Tu(gr-1,Im(n===91?n+2:n===40?n+1:n)))}function II(n){for(;(mn=Ai())&&mn<33;)br();return iu(n)>2||iu(mn)>3?"":" "}function UI(n,e){for(;--e&&br()&&!(mn<48||mn>102||mn>57&&mn<65||mn>70&&mn<97););return Tu(n,Mf()+(e<6&&Ai()==32&&br()==32))}function Im(n){for(;br();)switch(mn){case n:return gr;case 34:case 39:n!==34&&n!==39&&Im(mn);break;case 40:n===41&&Im(n);break;case 92:br();break}return gr}function NI(n,e){for(;br()&&n+mn!==57;)if(n+mn===84&&Ai()===47)break;return"/*"+Tu(e,gr-1)+"*"+vd(n===47?n:br())}function FI(n){for(;!iu(Ai());)br();return Tu(n,gr)}function OI(n){return TM(Tf("",null,null,null,[""],n=AM(n),0,[0],n))}function Tf(n,e,t,r,a,s,c,u,d){for(var h=0,p=0,m=c,g=0,S=0,E=0,w=1,y=1,_=1,T=0,M="",R=a,P=s,N=r,U=M;y;)switch(E=T,T=br()){case 40:if(E!=108&&Un(U,m-1)==58){Dm(U+=Nt(Af(T),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:U+=Af(T);break;case 9:case 10:case 13:case 32:U+=II(E);break;case 92:U+=UI(Mf()-1,7);continue;case 47:switch(Ai()){case 42:case 47:Bc(kI(NI(br(),Mf()),e,t),d);break;default:U+="/"}break;case 123*w:u[h++]=yi(U)*_;case 125*w:case 59:case 0:switch(T){case 0:case 125:y=0;case 59+p:_==-1&&(U=Nt(U,/\f/g,"")),S>0&&yi(U)-m&&Bc(S>32?Sy(U+";",r,t,m-1):Sy(Nt(U," ","")+";",r,t,m-2),d);break;case 59:U+=";";default:if(Bc(N=xy(U,e,t,h,p,a,u,M,R=[],P=[],m),s),T===123)if(p===0)Tf(U,e,N,N,R,s,m,u,P);else switch(g===99&&Un(U,3)===110?100:g){case 100:case 108:case 109:case 115:Tf(n,N,N,r&&Bc(xy(n,N,N,0,0,a,u,M,a,R=[],m),P),a,P,m,u,r?R:P);break;default:Tf(U,N,N,N,[""],P,0,u,P)}}h=p=S=0,w=_=1,M=U="",m=c;break;case 58:m=1+yi(U),S=E;default:if(w<1){if(T==123)--w;else if(T==125&&w++==0&&DI()==125)continue}switch(U+=vd(T),T*w){case 38:_=p>0?1:(U+="\f",-1);break;case 44:u[h++]=(yi(U)-1)*_,_=1;break;case 64:Ai()===45&&(U+=Af(br())),g=Ai(),p=m=yi(M=U+=FI(Mf())),T++;break;case 45:E===45&&yi(U)==2&&(w=0)}}return s}function xy(n,e,t,r,a,s,c,u,d,h,p){for(var m=a-1,g=a===0?s:[""],S=Kv(g),E=0,w=0,y=0;E<r;++E)for(var _=0,T=ru(n,m+1,m=TI(w=c[E])),M=n;_<S;++_)(M=EM(w>0?g[_]+" "+T:Nt(T,/&\f/g,g[_])))&&(d[y++]=M);return _d(n,e,t,a===0?qv:u,d,h,p)}function kI(n,e,t){return _d(n,e,t,SM,vd(LI()),ru(n,2,-2),0)}function Sy(n,e,t,r){return _d(n,e,t,Yv,ru(n,0,r),ru(n,r+1,-1),r)}function Rs(n,e){for(var t="",r=Kv(n),a=0;a<r;a++)t+=e(n[a],a,n,e)||"";return t}function zI(n,e,t,r){switch(n.type){case AI:if(n.children.length)break;case MI:case Yv:return n.return=n.return||n.value;case SM:return"";case wM:return n.return=n.value+"{"+Rs(n.children,r)+"}";case qv:n.value=n.props.join(",")}return yi(t=Rs(n.children,r))?n.return=n.value+"{"+t+"}":""}function BI(n){var e=Kv(n);return function(t,r,a,s){for(var c="",u=0;u<e;u++)c+=n[u](t,r,a,s)||"";return c}}function HI(n){return function(e){e.root||(e=e.return)&&n(e)}}function bM(n){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=n(t)),e[t]}}var VI=function(e,t,r){for(var a=0,s=0;a=s,s=Ai(),a===38&&s===12&&(t[r]=1),!iu(s);)br();return Tu(e,gr)},GI=function(e,t){var r=-1,a=44;do switch(iu(a)){case 0:a===38&&Ai()===12&&(t[r]=1),e[r]+=VI(gr-1,t,r);break;case 2:e[r]+=Af(a);break;case 4:if(a===44){e[++r]=Ai()===58?"&\f":"",t[r]=e[r].length;break}default:e[r]+=vd(a)}while(a=br());return e},WI=function(e,t){return TM(GI(AM(e),t))},wy=new WeakMap,$I=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!wy.get(r))&&!a){wy.set(e,!0);for(var s=[],c=WI(t,s),u=r.props,d=0,h=0;d<c.length;d++)for(var p=0;p<u.length;p++,h++)e.props[h]=s[d]?c[d].replace(/&\f/g,u[p]):u[p]+" "+c[d]}}},jI=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function CM(n,e){switch(CI(n,e)){case 5103:return Ut+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ut+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ut+n+Ff+n+Xn+n+n;case 6828:case 4268:return Ut+n+Xn+n+n;case 6165:return Ut+n+Xn+"flex-"+n+n;case 5187:return Ut+n+Nt(n,/(\w+).+(:[^]+)/,Ut+"box-$1$2"+Xn+"flex-$1$2")+n;case 5443:return Ut+n+Xn+"flex-item-"+Nt(n,/flex-|-self/,"")+n;case 4675:return Ut+n+Xn+"flex-line-pack"+Nt(n,/align-content|flex-|-self/,"")+n;case 5548:return Ut+n+Xn+Nt(n,"shrink","negative")+n;case 5292:return Ut+n+Xn+Nt(n,"basis","preferred-size")+n;case 6060:return Ut+"box-"+Nt(n,"-grow","")+Ut+n+Xn+Nt(n,"grow","positive")+n;case 4554:return Ut+Nt(n,/([^-])(transform)/g,"$1"+Ut+"$2")+n;case 6187:return Nt(Nt(Nt(n,/(zoom-|grab)/,Ut+"$1"),/(image-set)/,Ut+"$1"),n,"")+n;case 5495:case 3959:return Nt(n,/(image-set\([^]*)/,Ut+"$1$`$1");case 4968:return Nt(Nt(n,/(.+:)(flex-)?(.*)/,Ut+"box-pack:$3"+Xn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ut+n+n;case 4095:case 3583:case 4068:case 2532:return Nt(n,/(.+)-inline(.+)/,Ut+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yi(n)-1-e>6)switch(Un(n,e+1)){case 109:if(Un(n,e+4)!==45)break;case 102:return Nt(n,/(.+:)(.+)-([^]+)/,"$1"+Ut+"$2-$3$1"+Ff+(Un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Dm(n,"stretch")?CM(Nt(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(Un(n,e+1)!==115)break;case 6444:switch(Un(n,yi(n)-3-(~Dm(n,"!important")&&10))){case 107:return Nt(n,":",":"+Ut)+n;case 101:return Nt(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ut+(Un(n,14)===45?"inline-":"")+"box$3$1"+Ut+"$2$3$1"+Xn+"$2box$3")+n}break;case 5936:switch(Un(n,e+11)){case 114:return Ut+n+Xn+Nt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ut+n+Xn+Nt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ut+n+Xn+Nt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Ut+n+Xn+n+n}return n}var XI=function(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case Yv:e.return=CM(e.value,e.length);break;case wM:return Rs([Ll(e,{value:Nt(e.value,"@","@"+Ut)})],a);case qv:if(e.length)return PI(e.props,function(s){switch(RI(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Rs([Ll(e,{props:[Nt(s,/:(read-\w+)/,":"+Ff+"$1")]})],a);case"::placeholder":return Rs([Ll(e,{props:[Nt(s,/:(plac\w+)/,":"+Ut+"input-$1")]}),Ll(e,{props:[Nt(s,/:(plac\w+)/,":"+Ff+"$1")]}),Ll(e,{props:[Nt(s,/:(plac\w+)/,Xn+"input-$1")]})],a)}return""})}},qI=[XI],YI=function(e){var t=e.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var y=w.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var a=e.stylisPlugins||qI,s={},c,u=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(w){for(var y=w.getAttribute("data-emotion").split(" "),_=1;_<y.length;_++)s[y[_]]=!0;u.push(w)});var d,h=[$I,jI];{var p,m=[zI,HI(function(w){p.insert(w)})],g=BI(h.concat(a,m)),S=function(y){return Rs(OI(y),g)};d=function(y,_,T,M){p=T,S(y?y+"{"+_.styles+"}":_.styles),M&&(E.inserted[_.name]=!0)}}var E={key:t,sheet:new EI({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:d};return E.sheet.hydrate(u),E},gp={exports:{}},zt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function KI(){if(Ey)return zt;Ey=1;var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,g=n?Symbol.for("react.suspense_list"):60120,S=n?Symbol.for("react.memo"):60115,E=n?Symbol.for("react.lazy"):60116,w=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,T=n?Symbol.for("react.scope"):60119;function M(P){if(typeof P=="object"&&P!==null){var N=P.$$typeof;switch(N){case e:switch(P=P.type,P){case d:case h:case r:case s:case a:case m:return P;default:switch(P=P&&P.$$typeof,P){case u:case p:case E:case S:case c:return P;default:return N}}case t:return N}}}function R(P){return M(P)===h}return zt.AsyncMode=d,zt.ConcurrentMode=h,zt.ContextConsumer=u,zt.ContextProvider=c,zt.Element=e,zt.ForwardRef=p,zt.Fragment=r,zt.Lazy=E,zt.Memo=S,zt.Portal=t,zt.Profiler=s,zt.StrictMode=a,zt.Suspense=m,zt.isAsyncMode=function(P){return R(P)||M(P)===d},zt.isConcurrentMode=R,zt.isContextConsumer=function(P){return M(P)===u},zt.isContextProvider=function(P){return M(P)===c},zt.isElement=function(P){return typeof P=="object"&&P!==null&&P.$$typeof===e},zt.isForwardRef=function(P){return M(P)===p},zt.isFragment=function(P){return M(P)===r},zt.isLazy=function(P){return M(P)===E},zt.isMemo=function(P){return M(P)===S},zt.isPortal=function(P){return M(P)===t},zt.isProfiler=function(P){return M(P)===s},zt.isStrictMode=function(P){return M(P)===a},zt.isSuspense=function(P){return M(P)===m},zt.isValidElementType=function(P){return typeof P=="string"||typeof P=="function"||P===r||P===h||P===s||P===a||P===m||P===g||typeof P=="object"&&P!==null&&(P.$$typeof===E||P.$$typeof===S||P.$$typeof===c||P.$$typeof===u||P.$$typeof===p||P.$$typeof===y||P.$$typeof===_||P.$$typeof===T||P.$$typeof===w)},zt.typeOf=M,zt}var My;function ZI(){return My||(My=1,gp.exports=KI()),gp.exports}var _p,Ay;function JI(){if(Ay)return _p;Ay=1;var n=ZI(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=r,s[n.Memo]=a;function c(E){return n.isMemo(E)?a:s[E.$$typeof]||e}var u=Object.defineProperty,d=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,g=Object.prototype;function S(E,w,y){if(typeof w!="string"){if(g){var _=m(w);_&&_!==g&&S(E,_,y)}var T=d(w);h&&(T=T.concat(h(w)));for(var M=c(E),R=c(w),P=0;P<T.length;++P){var N=T[P];if(!t[N]&&!(y&&y[N])&&!(R&&R[N])&&!(M&&M[N])){var U=p(w,N);try{u(E,N,U)}catch{}}}}return E}return _p=S,_p}JI();var QI=!0;function RM(n,e,t){var r="";return t.split(" ").forEach(function(a){n[a]!==void 0?e.push(n[a]+";"):a&&(r+=a+" ")}),r}var Zv=function(e,t,r){var a=e.key+"-"+t.name;(r===!1||QI===!1)&&e.registered[a]===void 0&&(e.registered[a]=t.styles)},PM=function(e,t,r){Zv(e,t,r);var a=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+a:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function eU(n){for(var e=0,t,r=0,a=n.length;a>=4;++r,a-=4)t=n.charCodeAt(r)&255|(n.charCodeAt(++r)&255)<<8|(n.charCodeAt(++r)&255)<<16|(n.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(n.charCodeAt(r+2)&255)<<16;case 2:e^=(n.charCodeAt(r+1)&255)<<8;case 1:e^=n.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var tU={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},nU=/[A-Z]|^ms/g,rU=/_EMO_([^_]+?)_([^]*?)_EMO_/g,LM=function(e){return e.charCodeAt(1)===45},Ty=function(e){return e!=null&&typeof e!="boolean"},yp=bM(function(n){return LM(n)?n:n.replace(nU,"-$&").toLowerCase()}),by=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(rU,function(r,a,s){return xi={name:a,styles:s,next:xi},a})}return tU[e]!==1&&!LM(e)&&typeof t=="number"&&t!==0?t+"px":t};function ou(n,e,t){if(t==null)return"";var r=t;if(r.__emotion_styles!==void 0)return r;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return xi={name:a.name,styles:a.styles,next:xi},a.name;var s=t;if(s.styles!==void 0){var c=s.next;if(c!==void 0)for(;c!==void 0;)xi={name:c.name,styles:c.styles,next:xi},c=c.next;var u=s.styles+";";return u}return iU(n,e,t)}case"function":{if(n!==void 0){var d=xi,h=t(n);return xi=d,ou(n,e,h)}break}}var p=t;if(e==null)return p;var m=e[p];return m!==void 0?m:p}function iU(n,e,t){var r="";if(Array.isArray(t))for(var a=0;a<t.length;a++)r+=ou(n,e,t[a])+";";else for(var s in t){var c=t[s];if(typeof c!="object"){var u=c;e!=null&&e[u]!==void 0?r+=s+"{"+e[u]+"}":Ty(u)&&(r+=yp(s)+":"+by(s,u)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var d=0;d<c.length;d++)Ty(c[d])&&(r+=yp(s)+":"+by(s,c[d])+";");else{var h=ou(n,e,c);switch(s){case"animation":case"animationName":{r+=yp(s)+":"+h+";";break}default:r+=s+"{"+h+"}"}}}return r}var Cy=/label:\s*([^\s;{]+)\s*(;|$)/g,xi;function Jv(n,e,t){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var r=!0,a="";xi=void 0;var s=n[0];if(s==null||s.raw===void 0)r=!1,a+=ou(t,e,s);else{var c=s;a+=c[0]}for(var u=1;u<n.length;u++)if(a+=ou(t,e,n[u]),r){var d=s;a+=d[u]}Cy.lastIndex=0;for(var h="",p;(p=Cy.exec(a))!==null;)h+="-"+p[1];var m=eU(a)+h;return{name:m,styles:a,next:xi}}var oU=function(e){return e()},aU=am.useInsertionEffect?am.useInsertionEffect:!1,DM=aU||oU,IM=Ie.createContext(typeof HTMLElement<"u"?YI({key:"css"}):null);IM.Provider;var UM=function(e){return Ie.forwardRef(function(t,r){var a=Ie.useContext(IM);return e(t,a,r)})},NM=Ie.createContext({}),Qv={}.hasOwnProperty,Um="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",sU=function(e,t){var r={};for(var a in t)Qv.call(t,a)&&(r[a]=t[a]);return r[Um]=e,r},lU=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;return Zv(t,r,a),DM(function(){return PM(t,r,a)}),null},uU=UM(function(n,e,t){var r=n.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var a=n[Um],s=[r],c="";typeof n.className=="string"?c=RM(e.registered,s,n.className):n.className!=null&&(c=n.className+" ");var u=Jv(s,void 0,Ie.useContext(NM));c+=e.key+"-"+u.name;var d={};for(var h in n)Qv.call(n,h)&&h!=="css"&&h!==Um&&(d[h]=n[h]);return d.className=c,t&&(d.ref=t),Ie.createElement(Ie.Fragment,null,Ie.createElement(lU,{cache:e,serialized:u,isStringTag:typeof a=="string"}),Ie.createElement(a,d))}),cU=uU,Ry=function(e,t){var r=arguments;if(t==null||!Qv.call(t,"css"))return Ie.createElement.apply(void 0,r);var a=r.length,s=new Array(a);s[0]=cU,s[1]=sU(e,t);for(var c=2;c<a;c++)s[c]=r[c];return Ie.createElement.apply(null,s)};(function(n){var e;e||(e=n.JSX||(n.JSX={}))})(Ry||(Ry={}));function fU(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Jv(e)}function dU(){var n=fU.apply(void 0,arguments),e="animation-"+n.name;return{name:e,styles:"@keyframes "+e+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var hU=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,pU=bM(function(n){return hU.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),mU=pU,vU=function(e){return e!=="theme"},Py=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?mU:vU},Ly=function(e,t,r){var a;if(t){var s=t.shouldForwardProp;a=e.__emotion_forwardProp&&s?function(c){return e.__emotion_forwardProp(c)&&s(c)}:s}return typeof a!="function"&&r&&(a=e.__emotion_forwardProp),a},gU=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;return Zv(t,r,a),DM(function(){return PM(t,r,a)}),null},_U=function n(e,t){var r=e.__emotion_real===e,a=r&&e.__emotion_base||e,s,c;t!==void 0&&(s=t.label,c=t.target);var u=Ly(e,t,r),d=u||Py(a),h=!d("as");return function(){var p=arguments,m=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&m.push("label:"+s+";"),p[0]==null||p[0].raw===void 0)m.push.apply(m,p);else{var g=p[0];m.push(g[0]);for(var S=p.length,E=1;E<S;E++)m.push(p[E],g[E])}var w=UM(function(y,_,T){var M=h&&y.as||a,R="",P=[],N=y;if(y.theme==null){N={};for(var U in y)N[U]=y[U];N.theme=Ie.useContext(NM)}typeof y.className=="string"?R=RM(_.registered,P,y.className):y.className!=null&&(R=y.className+" ");var se=Jv(m.concat(P),_.registered,N);R+=_.key+"-"+se.name,c!==void 0&&(R+=" "+c);var C=h&&u===void 0?Py(M):d,O={};for(var oe in y)h&&oe==="as"||C(oe)&&(O[oe]=y[oe]);return O.className=R,T&&(O.ref=T),Ie.createElement(Ie.Fragment,null,Ie.createElement(gU,{cache:_,serialized:se,isStringTag:typeof M=="string"}),Ie.createElement(M,O))});return w.displayName=s!==void 0?s:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",w.defaultProps=e.defaultProps,w.__emotion_real=w,w.__emotion_base=a,w.__emotion_styles=m,w.__emotion_forwardProp=u,Object.defineProperty(w,"toString",{value:function(){return"."+c}}),w.withComponent=function(y,_){var T=n(y,Lm({},t,_,{shouldForwardProp:Ly(w,_,!0)}));return T.apply(void 0,m)},w}},yU=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],sn=_U.bind(null);yU.forEach(function(n){sn[n]=sn(n)});const xU=sn.div`
    background-color: #1d1f22;
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
    height: 100%;
`,SU=sn.div`
    color: #fff;
    position: absolute;
    bottom: 10px;
    right: 30px;
    background-color: #081f36;
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #94a6b9;
`,wU=sn.div`
    color: #fff;
    background-color: #14141160;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: right;
`,EU=sn.div`
    padding: 40px;
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Hc=({children:n,viewErrors:e,viewInfo:t,viewHeader:r})=>Xe.jsxs(xU,{children:[Xe.jsx(wU,{children:r}),Xe.jsx(EU,{children:n}),Xe.jsxs(SU,{children:[yI," / ",xI]})]}),MU=sn.div`
    padding: 10px;
    border: 1px solid #fff;
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: #fff;
    opacity: 0.2;
`,AU=({currentLayer:n,totalLayers:e})=>Xe.jsxs(MU,{children:[On(n)," / ",On(e)]}),TU=sn.div`
    position: relative;

    border: 1px solid #887432;
    width: 800px;
    height: 600px;
    border-radius: 5px;
    overflow: hidden;
`,bU=({children:n})=>Xe.jsx(TU,{children:n});TS();function Dy(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function FM(...n){return e=>{let t=!1;const r=n.map(a=>{const s=Dy(a,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let a=0;a<r.length;a++){const s=r[a];typeof s=="function"?s():Dy(n[a],null)}}}}function Wo(...n){return Ie.useCallback(FM(...n),n)}function Nm(n){const e=CU(n),t=Ie.forwardRef((r,a)=>{const{children:s,...c}=r,u=Ie.Children.toArray(s),d=u.find(PU);if(d){const h=d.props.children,p=u.map(m=>m===d?Ie.Children.count(h)>1?Ie.Children.only(null):Ie.isValidElement(h)?h.props.children:null:m);return Xe.jsx(e,{...c,ref:a,children:Ie.isValidElement(h)?Ie.cloneElement(h,void 0,p):null})}return Xe.jsx(e,{...c,ref:a,children:s})});return t.displayName=`${n}.Slot`,t}function CU(n){const e=Ie.forwardRef((t,r)=>{const{children:a,...s}=t;if(Ie.isValidElement(a)){const c=DU(a),u=LU(s,a.props);return a.type!==Ie.Fragment&&(u.ref=r?FM(r,c):c),Ie.cloneElement(a,u)}return Ie.Children.count(a)>1?Ie.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var RU=Symbol("radix.slottable");function PU(n){return Ie.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===RU}function LU(n,e){const t={...e};for(const r in e){const a=n[r],s=e[r];/^on[A-Z]/.test(r)?a&&s?t[r]=(...u)=>{const d=s(...u);return a(...u),d}:a&&(t[r]=a):r==="style"?t[r]={...a,...s}:r==="className"&&(t[r]=[a,s].filter(Boolean).join(" "))}return{...n,...t}}function DU(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var IU=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],bu=IU.reduce((n,e)=>{const t=Nm(`Primitive.${e}`),r=Ie.forwardRef((a,s)=>{const{asChild:c,...u}=a,d=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),Xe.jsx(d,{...u,ref:s})});return r.displayName=`Primitive.${e}`,{...n,[e]:r}},{});function OM(n,e=[]){let t=[];function r(s,c){const u=Ie.createContext(c),d=t.length;t=[...t,c];const h=m=>{const{scope:g,children:S,...E}=m,w=g?.[n]?.[d]||u,y=Ie.useMemo(()=>E,Object.values(E));return Xe.jsx(w.Provider,{value:y,children:S})};h.displayName=s+"Provider";function p(m,g){const S=g?.[n]?.[d]||u,E=Ie.useContext(S);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${m}\` must be used within \`${s}\``)}return[h,p]}const a=()=>{const s=t.map(c=>Ie.createContext(c));return function(u){const d=u?.[n]||s;return Ie.useMemo(()=>({[`__scope${n}`]:{...u,[n]:d}}),[u,d])}};return a.scopeName=n,[r,UU(a,...e)]}function UU(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const r=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const c=r.reduce((u,{useScope:d,scopeName:h})=>{const m=d(s)[`__scope${h}`];return{...u,...m}},{});return Ie.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function NU(n){const e=n+"CollectionProvider",[t,r]=OM(e),[a,s]=t(e,{collectionRef:{current:null},itemMap:new Map}),c=w=>{const{scope:y,children:_}=w,T=Co.useRef(null),M=Co.useRef(new Map).current;return Xe.jsx(a,{scope:y,itemMap:M,collectionRef:T,children:_})};c.displayName=e;const u=n+"CollectionSlot",d=Nm(u),h=Co.forwardRef((w,y)=>{const{scope:_,children:T}=w,M=s(u,_),R=Wo(y,M.collectionRef);return Xe.jsx(d,{ref:R,children:T})});h.displayName=u;const p=n+"CollectionItemSlot",m="data-radix-collection-item",g=Nm(p),S=Co.forwardRef((w,y)=>{const{scope:_,children:T,...M}=w,R=Co.useRef(null),P=Wo(y,R),N=s(p,_);return Co.useEffect(()=>(N.itemMap.set(R,{ref:R,...M}),()=>void N.itemMap.delete(R))),Xe.jsx(g,{[m]:"",ref:P,children:T})});S.displayName=p;function E(w){const y=s(n+"CollectionConsumer",w);return Co.useCallback(()=>{const T=y.collectionRef.current;if(!T)return[];const M=Array.from(T.querySelectorAll(`[${m}]`));return Array.from(y.itemMap.values()).sort((N,U)=>M.indexOf(N.ref.current)-M.indexOf(U.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:c,Slot:h,ItemSlot:S},E,r]}function Ts(n,e,{checkForDefaultPrevented:t=!0}={}){return function(a){if(n?.(a),t===!1||!a.defaultPrevented)return e?.(a)}}var kM=globalThis?.document?Ie.useLayoutEffect:()=>{},FU=am[" useInsertionEffect ".trim().toString()]||kM;function OU({prop:n,defaultProp:e,onChange:t=()=>{},caller:r}){const[a,s,c]=kU({defaultProp:e,onChange:t}),u=n!==void 0,d=u?n:a;{const p=Ie.useRef(n!==void 0);Ie.useEffect(()=>{const m=p.current;m!==u&&console.warn(`${r} is changing from ${m?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=u},[u,r])}const h=Ie.useCallback(p=>{if(u){const m=zU(p)?p(n):p;m!==n&&c.current?.(m)}else s(p)},[u,n,s,c]);return[d,h]}function kU({defaultProp:n,onChange:e}){const[t,r]=Ie.useState(n),a=Ie.useRef(t),s=Ie.useRef(e);return FU(()=>{s.current=e},[e]),Ie.useEffect(()=>{a.current!==t&&(s.current?.(t),a.current=t)},[t,a]),[t,r,s]}function zU(n){return typeof n=="function"}var BU=Ie.createContext(void 0);function HU(n){const e=Ie.useContext(BU);return n||e||"ltr"}function VU(n){const e=Ie.useRef({value:n,previous:n});return Ie.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}function GU(n){const[e,t]=Ie.useState(void 0);return kM(()=>{if(n){t({width:n.offsetWidth,height:n.offsetHeight});const r=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const s=a[0];let c,u;if("borderBoxSize"in s){const d=s.borderBoxSize,h=Array.isArray(d)?d[0]:d;c=h.inlineSize,u=h.blockSize}else c=n.offsetWidth,u=n.offsetHeight;t({width:c,height:u})});return r.observe(n,{box:"border-box"}),()=>r.unobserve(n)}else t(void 0)},[n]),e}function zM(n,[e,t]){return Math.min(t,Math.max(e,n))}var BM=["PageUp","PageDown"],HM=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],VM={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},qs="Slider",[Fm,WU,$U]=NU(qs),[GM,uV]=OM(qs,[$U]),[jU,yd]=GM(qs),WM=Ie.forwardRef((n,e)=>{const{name:t,min:r=0,max:a=100,step:s=1,orientation:c="horizontal",disabled:u=!1,minStepsBetweenThumbs:d=0,defaultValue:h=[r],value:p,onValueChange:m=()=>{},onValueCommit:g=()=>{},inverted:S=!1,form:E,...w}=n,y=Ie.useRef(new Set),_=Ie.useRef(0),M=c==="horizontal"?XU:qU,[R=[],P]=OU({prop:p,defaultProp:h,onChange:oe=>{[...y.current][_.current]?.focus(),m(oe)}}),N=Ie.useRef(R);function U(oe){const ne=QU(R,oe);O(oe,ne)}function se(oe){O(oe,_.current)}function C(){const oe=N.current[_.current];R[_.current]!==oe&&g(R)}function O(oe,ne,{commit:pe}={commit:!1}){const H=rN(s),Q=iN(Math.round((oe-r)/s)*s+r,H),le=zM(Q,[r,a]);P((re=[])=>{const j=ZU(re,le,ne);if(nN(j,d*s)){_.current=j.indexOf(le);const ie=String(j)!==String(re);return ie&&pe&&g(j),ie?j:re}else return re})}return Xe.jsx(jU,{scope:n.__scopeSlider,name:t,disabled:u,min:r,max:a,valueIndexToChangeRef:_,thumbs:y.current,values:R,orientation:c,form:E,children:Xe.jsx(Fm.Provider,{scope:n.__scopeSlider,children:Xe.jsx(Fm.Slot,{scope:n.__scopeSlider,children:Xe.jsx(M,{"aria-disabled":u,"data-disabled":u?"":void 0,...w,ref:e,onPointerDown:Ts(w.onPointerDown,()=>{u||(N.current=R)}),min:r,max:a,inverted:S,onSlideStart:u?void 0:U,onSlideMove:u?void 0:se,onSlideEnd:u?void 0:C,onHomeKeyDown:()=>!u&&O(r,0,{commit:!0}),onEndKeyDown:()=>!u&&O(a,R.length-1,{commit:!0}),onStepKeyDown:({event:oe,direction:ne})=>{if(!u){const Q=BM.includes(oe.key)||oe.shiftKey&&HM.includes(oe.key)?10:1,le=_.current,re=R[le],j=s*Q*ne;O(re+j,le,{commit:!0})}}})})})})});WM.displayName=qs;var[$M,jM]=GM(qs,{startEdge:"left",endEdge:"right",size:"width",direction:1}),XU=Ie.forwardRef((n,e)=>{const{min:t,max:r,dir:a,inverted:s,onSlideStart:c,onSlideMove:u,onSlideEnd:d,onStepKeyDown:h,...p}=n,[m,g]=Ie.useState(null),S=Wo(e,M=>g(M)),E=Ie.useRef(void 0),w=HU(a),y=w==="ltr",_=y&&!s||!y&&s;function T(M){const R=E.current||m.getBoundingClientRect(),P=[0,R.width],U=eg(P,_?[t,r]:[r,t]);return E.current=R,U(M-R.left)}return Xe.jsx($M,{scope:n.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width",children:Xe.jsx(XM,{dir:w,"data-orientation":"horizontal",...p,ref:S,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:M=>{const R=T(M.clientX);c?.(R)},onSlideMove:M=>{const R=T(M.clientX);u?.(R)},onSlideEnd:()=>{E.current=void 0,d?.()},onStepKeyDown:M=>{const P=VM[_?"from-left":"from-right"].includes(M.key);h?.({event:M,direction:P?-1:1})}})})}),qU=Ie.forwardRef((n,e)=>{const{min:t,max:r,inverted:a,onSlideStart:s,onSlideMove:c,onSlideEnd:u,onStepKeyDown:d,...h}=n,p=Ie.useRef(null),m=Wo(e,p),g=Ie.useRef(void 0),S=!a;function E(w){const y=g.current||p.current.getBoundingClientRect(),_=[0,y.height],M=eg(_,S?[r,t]:[t,r]);return g.current=y,M(w-y.top)}return Xe.jsx($M,{scope:n.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:Xe.jsx(XM,{"data-orientation":"vertical",...h,ref:m,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:w=>{const y=E(w.clientY);s?.(y)},onSlideMove:w=>{const y=E(w.clientY);c?.(y)},onSlideEnd:()=>{g.current=void 0,u?.()},onStepKeyDown:w=>{const _=VM[S?"from-bottom":"from-top"].includes(w.key);d?.({event:w,direction:_?-1:1})}})})}),XM=Ie.forwardRef((n,e)=>{const{__scopeSlider:t,onSlideStart:r,onSlideMove:a,onSlideEnd:s,onHomeKeyDown:c,onEndKeyDown:u,onStepKeyDown:d,...h}=n,p=yd(qs,t);return Xe.jsx(bu.span,{...h,ref:e,onKeyDown:Ts(n.onKeyDown,m=>{m.key==="Home"?(c(m),m.preventDefault()):m.key==="End"?(u(m),m.preventDefault()):BM.concat(HM).includes(m.key)&&(d(m),m.preventDefault())}),onPointerDown:Ts(n.onPointerDown,m=>{const g=m.target;g.setPointerCapture(m.pointerId),m.preventDefault(),p.thumbs.has(g)?g.focus():r(m)}),onPointerMove:Ts(n.onPointerMove,m=>{m.target.hasPointerCapture(m.pointerId)&&a(m)}),onPointerUp:Ts(n.onPointerUp,m=>{const g=m.target;g.hasPointerCapture(m.pointerId)&&(g.releasePointerCapture(m.pointerId),s(m))})})}),qM="SliderTrack",YM=Ie.forwardRef((n,e)=>{const{__scopeSlider:t,...r}=n,a=yd(qM,t);return Xe.jsx(bu.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...r,ref:e})});YM.displayName=qM;var Om="SliderRange",KM=Ie.forwardRef((n,e)=>{const{__scopeSlider:t,...r}=n,a=yd(Om,t),s=jM(Om,t),c=Ie.useRef(null),u=Wo(e,c),d=a.values.length,h=a.values.map(g=>QM(g,a.min,a.max)),p=d>1?Math.min(...h):0,m=100-Math.max(...h);return Xe.jsx(bu.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...r,ref:u,style:{...n.style,[s.startEdge]:p+"%",[s.endEdge]:m+"%"}})});KM.displayName=Om;var km="SliderThumb",ZM=Ie.forwardRef((n,e)=>{const t=WU(n.__scopeSlider),[r,a]=Ie.useState(null),s=Wo(e,u=>a(u)),c=Ie.useMemo(()=>r?t().findIndex(u=>u.ref.current===r):-1,[t,r]);return Xe.jsx(YU,{...n,ref:s,index:c})}),YU=Ie.forwardRef((n,e)=>{const{__scopeSlider:t,index:r,name:a,...s}=n,c=yd(km,t),u=jM(km,t),[d,h]=Ie.useState(null),p=Wo(e,T=>h(T)),m=d?c.form||!!d.closest("form"):!0,g=GU(d),S=c.values[r],E=S===void 0?0:QM(S,c.min,c.max),w=JU(r,c.values.length),y=g?.[u.size],_=y?eN(y,E,u.direction):0;return Ie.useEffect(()=>{if(d)return c.thumbs.add(d),()=>{c.thumbs.delete(d)}},[d,c.thumbs]),Xe.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u.startEdge]:`calc(${E}% + ${_}px)`},children:[Xe.jsx(Fm.ItemSlot,{scope:n.__scopeSlider,children:Xe.jsx(bu.span,{role:"slider","aria-label":n["aria-label"]||w,"aria-valuemin":c.min,"aria-valuenow":S,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...s,ref:p,style:S===void 0?{display:"none"}:n.style,onFocus:Ts(n.onFocus,()=>{c.valueIndexToChangeRef.current=r})})}),m&&Xe.jsx(JM,{name:a??(c.name?c.name+(c.values.length>1?"[]":""):void 0),form:c.form,value:S},r)]})});ZM.displayName=km;var KU="RadioBubbleInput",JM=Ie.forwardRef(({__scopeSlider:n,value:e,...t},r)=>{const a=Ie.useRef(null),s=Wo(a,r),c=VU(e);return Ie.useEffect(()=>{const u=a.current;if(!u)return;const d=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(c!==e&&p){const m=new Event("input",{bubbles:!0});p.call(u,e),u.dispatchEvent(m)}},[c,e]),Xe.jsx(bu.input,{style:{display:"none"},...t,ref:s,defaultValue:e})});JM.displayName=KU;function ZU(n=[],e,t){const r=[...n];return r[t]=e,r.sort((a,s)=>a-s)}function QM(n,e,t){const s=100/(t-e)*(n-e);return zM(s,[0,100])}function JU(n,e){return e>2?`Value ${n+1} of ${e}`:e===2?["Minimum","Maximum"][n]:void 0}function QU(n,e){if(n.length===1)return 0;const t=n.map(a=>Math.abs(a-e)),r=Math.min(...t);return t.indexOf(r)}function eN(n,e,t){const r=n/2,s=eg([0,50],[0,r]);return(r-s(e)*t)*t}function tN(n){return n.slice(0,-1).map((e,t)=>n[t+1]-e)}function nN(n,e){if(e>0){const t=tN(n);return Math.min(...t)>=e}return!0}function eg(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const r=(e[1]-e[0])/(n[1]-n[0]);return e[0]+r*(t-n[0])}}function rN(n){return(String(n).split(".")[1]||"").length}function iN(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}var oN=WM,aN=YM,sN=KM,lN=ZM;const uN=sn.div`
    position: absolute;
    top: 16px;
    bottom: 16px;
    right: 16px;
    width: 16px;
`,cN=sn(oN)`
	position: relative;
	display: flex;
    flex-direction: column;
	align-items: center;
	user-select: none;
	touch-action: none;
	width: 16px;
	height: 100%;
`,fN=sn(aN)`
	background-color: rgba(255, 255, 255, 0.1);
	position: relative;
	flex-grow: 1;
	border-radius: 2px;
	height: 100%;
    width: 2px;
`,dN=sn(sN)`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 2px;
	height: 100%;
`,hN=sn(lN)`
	display: block;
	width: 12px;
	height: 12px;
	background-color: rgba(255, 255, 255, 0.6);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 6px;
	transition: all 0.1s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        transform: scale(1.1);
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
    }
`,pN=({value:n,onChange:e,min:t,max:r})=>Xe.jsx(uN,{children:Xe.jsxs(cN,{onValueChange:a=>e(ud(a[0]||0)),orientation:"vertical",defaultValue:[On(n)],max:On(r),min:On(t),step:1,children:[Xe.jsx(fN,{children:Xe.jsx(dN,{})}),Xe.jsx(hN,{"aria-label":"Volume"})]})}),mN=sn.div`
    opacity: 0.2;
    position: absolute;
    width: 10px;
    right: 40px;
    top: 22px;
    bottom: 22px;
`,vN=sn.div`
  position: absolute;
  bottom: ${({bottom:n})=>n}%;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
`,gN=sn.div`
    position: relative;
    
    width: 100%; height: 100%;

`,_N=(n,e,t)=>{const r=[];for(let a=On(n);a<=On(e);a+=On(t))r.push({count:ud(a),pct:(a-On(n))/(On(e)-On(n))});return r},yN=({min:n,max:e,step:t})=>{const r=_N(n,e,t);return Xe.jsx(mN,{children:Xe.jsx(gN,{children:r.map(({count:a,pct:s})=>Xe.jsx(vN,{bottom:s*100},On(a)))})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="159",as={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xN=0,Iy=1,SN=2,e1=1,wN=2,$i=3,$o=0,mr=1,Xi=2,Oo=0,Ps=1,Uy=2,Ny=3,Fy=4,EN=5,xa=100,MN=101,AN=102,Oy=103,ky=104,TN=200,bN=201,CN=202,RN=203,zm=204,Bm=205,PN=206,LN=207,DN=208,IN=209,UN=210,NN=211,FN=212,ON=213,kN=214,zN=0,BN=1,HN=2,Of=3,VN=4,GN=5,WN=6,$N=7,tg=0,jN=1,XN=2,ko=0,qN=1,YN=2,KN=3,ZN=4,JN=5,t1=300,Bs=301,Hs=302,Hm=303,Vm=304,Sd=306,Gm=1e3,oi=1001,Wm=1002,Nn=1003,zy=1004,xp=1005,zr=1006,QN=1007,au=1008,zo=1009,eF=1010,tF=1011,ng=1012,n1=1013,Uo=1014,qi=1015,su=1016,r1=1017,i1=1018,Aa=1020,nF=1021,Br=1023,rF=1024,iF=1025,Ta=1026,Vs=1027,oF=1028,o1=1029,aF=1030,a1=1031,s1=1033,Sp=33776,wp=33777,Ep=33778,Mp=33779,By=35840,Hy=35841,Vy=35842,Gy=35843,l1=36196,Wy=37492,$y=37496,jy=37808,Xy=37809,qy=37810,Yy=37811,Ky=37812,Zy=37813,Jy=37814,Qy=37815,ex=37816,tx=37817,nx=37818,rx=37819,ix=37820,ox=37821,Ap=36492,ax=36494,sx=36495,sF=36283,lx=36284,ux=36285,cx=36286,u1=3e3,ba=3001,lF=3200,uF=3201,c1=0,cF=1,Hr="",Fn="srgb",Zi="srgb-linear",rg="display-p3",wd="display-p3-linear",kf="linear",Kt="srgb",zf="rec709",Bf="p3",ls=7680,fx=519,fF=512,dF=513,hF=514,f1=515,pF=516,mF=517,vF=518,gF=519,$m=35044,dx="300 es",jm=1035,wi=2e3,lu=2001;class Fa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let s=0,c=a.length;s<c;s++)a[s].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hx=1234567;const Kl=Math.PI/180,uu=180/Math.PI;function Yi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function kn(n,e,t){return Math.max(e,Math.min(t,n))}function ig(n,e){return(n%e+e)%e}function _F(n,e,t,r,a){return r+(n-e)*(a-r)/(t-e)}function yF(n,e,t){return n!==e?(t-n)/(e-n):0}function Zl(n,e,t){return(1-t)*n+t*e}function xF(n,e,t,r){return Zl(n,e,1-Math.exp(-t*r))}function SF(n,e=1){return e-Math.abs(ig(n,e*2)-e)}function wF(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function EF(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function MF(n,e){return n+Math.floor(Math.random()*(e-n+1))}function AF(n,e){return n+Math.random()*(e-n)}function TF(n){return n*(.5-Math.random())}function bF(n){n!==void 0&&(hx=n);let e=hx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function CF(n){return n*Kl}function RF(n){return n*uu}function Xm(n){return(n&n-1)===0&&n!==0}function PF(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function LF(n,e,t,r,a){const s=Math.cos,c=Math.sin,u=s(t/2),d=c(t/2),h=s((e+r)/2),p=c((e+r)/2),m=s((e-r)/2),g=c((e-r)/2),S=s((r-e)/2),E=c((r-e)/2);switch(a){case"XYX":n.set(u*p,d*m,d*g,u*h);break;case"YZY":n.set(d*g,u*p,d*m,u*h);break;case"ZXZ":n.set(d*m,d*g,u*p,u*h);break;case"XZX":n.set(u*p,d*E,d*S,u*h);break;case"YXY":n.set(d*S,u*p,d*E,u*h);break;case"ZYZ":n.set(d*E,d*S,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const d1={DEG2RAD:Kl,RAD2DEG:uu,generateUUID:Yi,clamp:kn,euclideanModulo:ig,mapLinear:_F,inverseLerp:yF,lerp:Zl,damp:xF,pingpong:SF,smoothstep:wF,smootherstep:EF,randInt:MF,randFloat:AF,randFloatSpread:TF,seededRandom:bF,degToRad:CF,radToDeg:RF,isPowerOfTwo:Xm,ceilPowerOfTwo:PF,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:LF,normalize:Ht,denormalize:Si};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*r-c*a+e.x,this.y=s*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,r,a,s,c,u,d,h){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,s,c,u,d,h)}set(e,t,r,a,s,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=s,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,s=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],p=r[4],m=r[7],g=r[2],S=r[5],E=r[8],w=a[0],y=a[3],_=a[6],T=a[1],M=a[4],R=a[7],P=a[2],N=a[5],U=a[8];return s[0]=c*w+u*T+d*P,s[3]=c*y+u*M+d*N,s[6]=c*_+u*R+d*U,s[1]=h*w+p*T+m*P,s[4]=h*y+p*M+m*N,s[7]=h*_+p*R+m*U,s[2]=g*w+S*T+E*P,s[5]=g*y+S*M+E*N,s[8]=g*_+S*R+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*s*p+r*u*d+a*s*h-a*c*d}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=p*c-u*h,g=u*d-p*s,S=h*s-c*d,E=t*m+r*g+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=m*w,e[1]=(a*h-p*r)*w,e[2]=(u*r-a*c)*w,e[3]=g*w,e[4]=(p*t-a*d)*w,e[5]=(a*s-u*t)*w,e[6]=S*w,e[7]=(r*d-h*t)*w,e[8]=(c*t-r*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,s,c,u){const d=Math.cos(s),h=Math.sin(s);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Tp.makeScale(e,t)),this}rotate(e){return this.premultiply(Tp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tp=new wt;function h1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DF(){const n=Vf("canvas");return n.style.display="block",n}const px={};function Jl(n){n in px||(px[n]=!0,console.warn(n))}const mx=new wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vx=new wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vc={[Zi]:{transfer:kf,primaries:zf,toReference:n=>n,fromReference:n=>n},[Fn]:{transfer:Kt,primaries:zf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wd]:{transfer:kf,primaries:Bf,toReference:n=>n.applyMatrix3(vx),fromReference:n=>n.applyMatrix3(mx)},[rg]:{transfer:Kt,primaries:Bf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(vx),fromReference:n=>n.applyMatrix3(mx).convertLinearToSRGB()}},IF=new Set([Zi,wd]),Vt={enabled:!0,_workingColorSpace:Zi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!IF.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=Vc[e].toReference,a=Vc[t].fromReference;return a(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vc[n].primaries},getTransfer:function(n){return n===Hr?kf:Vc[n].transfer}};function Ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bp(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class p1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Vf("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vf("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),s=a.data;for(let c=0;c<s.length;c++)s[c]=Ls(s[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ls(t[r]/255)*255):t[r]=Ls(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UF=0;class m1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UF++}),this.uuid=Yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?s.push(Cp(a[c].image)):s.push(Cp(a[c]))}else s=Cp(a);r.url=s}return t||(e.images[this.uuid]=r),r}}function Cp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?p1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NF=0;class vr extends Fa{constructor(e=vr.DEFAULT_IMAGE,t=vr.DEFAULT_MAPPING,r=oi,a=oi,s=zr,c=au,u=Br,d=zo,h=vr.DEFAULT_ANISOTROPY,p=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NF++}),this.uuid=Yi(),this.name="",this.source=new m1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ba?Fn:Hr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gm:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Wm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gm:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Wm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fn?ba:u1}set encoding(e){Jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ba?Fn:Hr}}vr.DEFAULT_IMAGE=null;vr.DEFAULT_MAPPING=t1;vr.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*s,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*s,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*s,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,s;const d=e.elements,h=d[0],p=d[4],m=d[8],g=d[1],S=d[5],E=d[9],w=d[2],y=d[6],_=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+w)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,R=(S+1)/2,P=(_+1)/2,N=(p+g)/4,U=(m+w)/4,se=(E+y)/4;return M>R&&M>P?M<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(M),a=N/r,s=U/r):R>P?R<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(R),r=N/a,s=se/a):P<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(P),r=U/s,a=se/s),this.set(r,a,s,t),this}let T=Math.sqrt((y-E)*(y-E)+(m-w)*(m-w)+(g-p)*(g-p));return Math.abs(T)<.001&&(T=1),this.x=(y-E)/T,this.y=(m-w)/T,this.z=(g-p)/T,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FF extends Fa{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const a={width:e,height:t,depth:1};r.encoding!==void 0&&(Jl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===ba?Fn:Hr),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new vr(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new m1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ra extends FF{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class v1 extends vr{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class OF extends vr{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,s,c,u){let d=r[a+0],h=r[a+1],p=r[a+2],m=r[a+3];const g=s[c+0],S=s[c+1],E=s[c+2],w=s[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=g,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(m!==w||d!==g||h!==S||p!==E){let y=1-u;const _=d*g+h*S+p*E+m*w,T=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const P=Math.sqrt(M),N=Math.atan2(P,_*T);y=Math.sin(y*N)/P,u=Math.sin(u*N)/P}const R=u*T;if(d=d*y+g*R,h=h*y+S*R,p=p*y+E*R,m=m*y+w*R,y===1-u){const P=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=P,h*=P,p*=P,m*=P}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,a,s,c){const u=r[a],d=r[a+1],h=r[a+2],p=r[a+3],m=s[c],g=s[c+1],S=s[c+2],E=s[c+3];return e[t]=u*E+p*m+d*S-h*g,e[t+1]=d*E+p*g+h*m-u*S,e[t+2]=h*E+p*S+u*g-d*m,e[t+3]=p*E-u*m-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,a=e._y,s=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),p=u(a/2),m=u(s/2),g=d(r/2),S=d(a/2),E=d(s/2);switch(c){case"XYZ":this._x=g*p*m+h*S*E,this._y=h*S*m-g*p*E,this._z=h*p*E+g*S*m,this._w=h*p*m-g*S*E;break;case"YXZ":this._x=g*p*m+h*S*E,this._y=h*S*m-g*p*E,this._z=h*p*E-g*S*m,this._w=h*p*m+g*S*E;break;case"ZXY":this._x=g*p*m-h*S*E,this._y=h*S*m+g*p*E,this._z=h*p*E+g*S*m,this._w=h*p*m-g*S*E;break;case"ZYX":this._x=g*p*m-h*S*E,this._y=h*S*m+g*p*E,this._z=h*p*E-g*S*m,this._w=h*p*m+g*S*E;break;case"YZX":this._x=g*p*m+h*S*E,this._y=h*S*m+g*p*E,this._z=h*p*E-g*S*m,this._w=h*p*m-g*S*E;break;case"XZY":this._x=g*p*m-h*S*E,this._y=h*S*m-g*p*E,this._z=h*p*E+g*S*m,this._w=h*p*m+g*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],s=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],m=t[10],g=r+u+m;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(s-h)*S,this._z=(c-a)*S}else if(r>u&&r>m){const S=2*Math.sqrt(1+r-u-m);this._w=(p-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(s+h)/S}else if(u>m){const S=2*Math.sqrt(1+u-r-m);this._w=(s-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+m-r-u);this._w=(c-a)/S,this._x=(s+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,s=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+a*h-s*d,this._y=a*p+c*d+s*u-r*h,this._z=s*p+c*h+r*d-a*u,this._w=c*p-r*u-a*d-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,s=this._z,c=this._w;let u=c*e._w+r*e._x+a*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=r,this._y=a,this._z=s,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=c*m+this._w*g,this._x=r*m+this._x*g,this._y=a*m+this._y*g,this._z=s*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),r*Math.sin(s),r*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,r=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6]*a,this.y=s[1]*t+s[4]*r+s[7]*a,this.z=s[2]*t+s[5]*r+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,s=e.elements,c=1/(s[3]*t+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*r+s[8]*a+s[12])*c,this.y=(s[1]*t+s[5]*r+s[9]*a+s[13])*c,this.z=(s[2]*t+s[6]*r+s[10]*a+s[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,s=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*r),p=2*(u*t-s*a),m=2*(s*r-c*t);return this.x=t+d*h+c*m-u*p,this.y=r+d*p+u*h-s*m,this.z=a+d*m+s*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*a,this.y=s[1]*t+s[5]*r+s[9]*a,this.z=s[2]*t+s[6]*r+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,s=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-s*u,this.y=s*c-r*d,this.z=r*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rp.copy(this).projectOnVector(e),this.sub(Rp)}reflect(e){return this.sub(Rp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rp=new B,gx=new Pa;class Wr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=s.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,ei):ei.fromBufferAttribute(s,c),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gc.copy(r.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}const a=e.children;for(let s=0,c=a.length;s<c;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dl),Wc.subVectors(this.max,Dl),cs.subVectors(e.a,Dl),fs.subVectors(e.b,Dl),ds.subVectors(e.c,Dl),So.subVectors(fs,cs),wo.subVectors(ds,fs),pa.subVectors(cs,ds);let t=[0,-So.z,So.y,0,-wo.z,wo.y,0,-pa.z,pa.y,So.z,0,-So.x,wo.z,0,-wo.x,pa.z,0,-pa.x,-So.y,So.x,0,-wo.y,wo.x,0,-pa.y,pa.x,0];return!Pp(t,cs,fs,ds,Wc)||(t=[1,0,0,0,1,0,0,0,1],!Pp(t,cs,fs,ds,Wc))?!1:($c.crossVectors(So,wo),t=[$c.x,$c.y,$c.z],Pp(t,cs,fs,ds,Wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new B,new B,new B,new B,new B,new B,new B,new B],ei=new B,Gc=new Wr,cs=new B,fs=new B,ds=new B,So=new B,wo=new B,pa=new B,Dl=new B,Wc=new B,$c=new B,ma=new B;function Pp(n,e,t,r,a){for(let s=0,c=n.length-3;s<=c;s+=3){ma.fromArray(n,s);const u=a.x*Math.abs(ma.x)+a.y*Math.abs(ma.y)+a.z*Math.abs(ma.z),d=e.dot(ma),h=t.dot(ma),p=r.dot(ma);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const kF=new Wr,Il=new B,Lp=new B;class Ti{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):kF.setFromPoints(e).getCenter(r);let a=0;for(let s=0,c=e.length;s<c;s++)a=Math.max(a,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Il.subVectors(e,this.center);const t=Il.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Il,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Il.copy(e.center).add(Lp)),this.expandByPoint(Il.copy(e.center).sub(Lp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new B,Dp=new B,jc=new B,Eo=new B,Ip=new B,Xc=new B,Up=new B;class og{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Dp.copy(e).add(t).multiplyScalar(.5),jc.copy(t).sub(e).normalize(),Eo.copy(this.origin).sub(Dp);const s=e.distanceTo(t)*.5,c=-this.direction.dot(jc),u=Eo.dot(this.direction),d=-Eo.dot(jc),h=Eo.lengthSq(),p=Math.abs(1-c*c);let m,g,S,E;if(p>0)if(m=c*d-u,g=c*u-d,E=s*p,m>=0)if(g>=-E)if(g<=E){const w=1/p;m*=w,g*=w,S=m*(m+c*g+2*u)+g*(c*m+g+2*d)+h}else g=s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;else g=-s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;else g<=-E?(m=Math.max(0,-(-c*s+u)),g=m>0?-s:Math.min(Math.max(-s,-d),s),S=-m*m+g*(g+2*d)+h):g<=E?(m=0,g=Math.min(Math.max(-s,-d),s),S=g*(g+2*d)+h):(m=Math.max(0,-(c*s+u)),g=m>0?s:Math.min(Math.max(-s,-d),s),S=-m*m+g*(g+2*d)+h);else g=c>0?-s:s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(Dp).addScaledVector(jc,g),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,s=e.radius*e.radius;if(a>s)return null;const c=Math.sqrt(s-a),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,s,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(s=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),r>c||s>a||((s>r||isNaN(r))&&(r=s),(c<a||isNaN(a))&&(a=c),m>=0?(u=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),r>d||u>a)||((u>r||r!==r)&&(r=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,a,s){Ip.subVectors(t,e),Xc.subVectors(r,e),Up.crossVectors(Ip,Xc);let c=this.direction.dot(Up),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Eo.subVectors(this.origin,e);const d=u*this.direction.dot(Xc.crossVectors(Eo,Xc));if(d<0)return null;const h=u*this.direction.dot(Ip.cross(Eo));if(h<0||d+h>c)return null;const p=-u*Eo.dot(Up);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,r,a,s,c,u,d,h,p,m,g,S,E,w,y){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,s,c,u,d,h,p,m,g,S,E,w,y)}set(e,t,r,a,s,c,u,d,h,p,m,g,S,E,w,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=s,_[5]=c,_[9]=u,_[13]=d,_[2]=h,_[6]=p,_[10]=m,_[14]=g,_[3]=S,_[7]=E,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),c=1/hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*s,t[5]=r[5]*s,t[6]=r[6]*s,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,s=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const g=c*p,S=c*m,E=u*p,w=u*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=S+E*h,t[5]=g-w*h,t[9]=-u*d,t[2]=w-g*h,t[6]=E+S*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,S=d*m,E=h*p,w=h*m;t[0]=g+w*u,t[4]=E*u-S,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=S*u-E,t[6]=w+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,S=d*m,E=h*p,w=h*m;t[0]=g-w*u,t[4]=-c*m,t[8]=E+S*u,t[1]=S+E*u,t[5]=c*p,t[9]=w-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,S=c*m,E=u*p,w=u*m;t[0]=d*p,t[4]=E*h-S,t[8]=g*h+w,t[1]=d*m,t[5]=w*h+g,t[9]=S*h-E,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,S=c*h,E=u*d,w=u*h;t[0]=d*p,t[4]=w-g*m,t[8]=E*m+S,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=S*m+E,t[10]=g-w*m}else if(e.order==="XZY"){const g=c*d,S=c*h,E=u*d,w=u*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=g*m+w,t[5]=c*p,t[9]=S*m-E,t[2]=E*m-S,t[6]=u*p,t[10]=w*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zF,e,BF)}lookAt(e,t,r){const a=this.elements;return Mr.subVectors(e,t),Mr.lengthSq()===0&&(Mr.z=1),Mr.normalize(),Mo.crossVectors(r,Mr),Mo.lengthSq()===0&&(Math.abs(r.z)===1?Mr.x+=1e-4:Mr.z+=1e-4,Mr.normalize(),Mo.crossVectors(r,Mr)),Mo.normalize(),qc.crossVectors(Mr,Mo),a[0]=Mo.x,a[4]=qc.x,a[8]=Mr.x,a[1]=Mo.y,a[5]=qc.y,a[9]=Mr.y,a[2]=Mo.z,a[6]=qc.z,a[10]=Mr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,s=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],p=r[1],m=r[5],g=r[9],S=r[13],E=r[2],w=r[6],y=r[10],_=r[14],T=r[3],M=r[7],R=r[11],P=r[15],N=a[0],U=a[4],se=a[8],C=a[12],O=a[1],oe=a[5],ne=a[9],pe=a[13],H=a[2],Q=a[6],le=a[10],re=a[14],j=a[3],ie=a[7],$=a[11],L=a[15];return s[0]=c*N+u*O+d*H+h*j,s[4]=c*U+u*oe+d*Q+h*ie,s[8]=c*se+u*ne+d*le+h*$,s[12]=c*C+u*pe+d*re+h*L,s[1]=p*N+m*O+g*H+S*j,s[5]=p*U+m*oe+g*Q+S*ie,s[9]=p*se+m*ne+g*le+S*$,s[13]=p*C+m*pe+g*re+S*L,s[2]=E*N+w*O+y*H+_*j,s[6]=E*U+w*oe+y*Q+_*ie,s[10]=E*se+w*ne+y*le+_*$,s[14]=E*C+w*pe+y*re+_*L,s[3]=T*N+M*O+R*H+P*j,s[7]=T*U+M*oe+R*Q+P*ie,s[11]=T*se+M*ne+R*le+P*$,s[15]=T*C+M*pe+R*re+P*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],s=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],m=e[6],g=e[10],S=e[14],E=e[3],w=e[7],y=e[11],_=e[15];return E*(+s*d*m-a*h*m-s*u*g+r*h*g+a*u*S-r*d*S)+w*(+t*d*S-t*h*g+s*c*g-a*c*S+a*h*p-s*d*p)+y*(+t*h*m-t*u*S-s*c*m+r*c*S+s*u*p-r*h*p)+_*(-a*u*p-t*d*m+t*u*g+a*c*m-r*c*g+r*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=e[9],g=e[10],S=e[11],E=e[12],w=e[13],y=e[14],_=e[15],T=m*y*h-w*g*h+w*d*S-u*y*S-m*d*_+u*g*_,M=E*g*h-p*y*h-E*d*S+c*y*S+p*d*_-c*g*_,R=p*w*h-E*m*h+E*u*S-c*w*S-p*u*_+c*m*_,P=E*m*d-p*w*d-E*u*g+c*w*g+p*u*y-c*m*y,N=t*T+r*M+a*R+s*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=T*U,e[1]=(w*g*s-m*y*s-w*a*S+r*y*S+m*a*_-r*g*_)*U,e[2]=(u*y*s-w*d*s+w*a*h-r*y*h-u*a*_+r*d*_)*U,e[3]=(m*d*s-u*g*s-m*a*h+r*g*h+u*a*S-r*d*S)*U,e[4]=M*U,e[5]=(p*y*s-E*g*s+E*a*S-t*y*S-p*a*_+t*g*_)*U,e[6]=(E*d*s-c*y*s-E*a*h+t*y*h+c*a*_-t*d*_)*U,e[7]=(c*g*s-p*d*s+p*a*h-t*g*h-c*a*S+t*d*S)*U,e[8]=R*U,e[9]=(E*m*s-p*w*s-E*r*S+t*w*S+p*r*_-t*m*_)*U,e[10]=(c*w*s-E*u*s+E*r*h-t*w*h-c*r*_+t*u*_)*U,e[11]=(p*u*s-c*m*s-p*r*h+t*m*h+c*r*S-t*u*S)*U,e[12]=P*U,e[13]=(p*w*a-E*m*a+E*r*g-t*w*g-p*r*y+t*m*y)*U,e[14]=(E*u*a-c*w*a-E*r*d+t*w*d+c*r*y-t*u*y)*U,e[15]=(c*m*a-p*u*a+p*r*d-t*m*d-c*r*g+t*u*g)*U,this}scale(e){const t=this.elements,r=e.x,a=e.y,s=e.z;return t[0]*=r,t[4]*=a,t[8]*=s,t[1]*=r,t[5]*=a,t[9]*=s,t[2]*=r,t[6]*=a,t[10]*=s,t[3]*=r,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),s=1-r,c=e.x,u=e.y,d=e.z,h=s*c,p=s*u;return this.set(h*c+r,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+r,p*d-a*c,0,h*d-a*u,p*d+a*c,s*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,s,c){return this.set(1,r,s,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,s=t._x,c=t._y,u=t._z,d=t._w,h=s+s,p=c+c,m=u+u,g=s*h,S=s*p,E=s*m,w=c*p,y=c*m,_=u*m,T=d*h,M=d*p,R=d*m,P=r.x,N=r.y,U=r.z;return a[0]=(1-(w+_))*P,a[1]=(S+R)*P,a[2]=(E-M)*P,a[3]=0,a[4]=(S-R)*N,a[5]=(1-(g+_))*N,a[6]=(y+T)*N,a[7]=0,a[8]=(E+M)*U,a[9]=(y-T)*U,a[10]=(1-(g+w))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let s=hs.set(a[0],a[1],a[2]).length();const c=hs.set(a[4],a[5],a[6]).length(),u=hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],ti.copy(this);const h=1/s,p=1/c,m=1/u;return ti.elements[0]*=h,ti.elements[1]*=h,ti.elements[2]*=h,ti.elements[4]*=p,ti.elements[5]*=p,ti.elements[6]*=p,ti.elements[8]*=m,ti.elements[9]*=m,ti.elements[10]*=m,t.setFromRotationMatrix(ti),r.x=s,r.y=c,r.z=u,this}makePerspective(e,t,r,a,s,c,u=wi){const d=this.elements,h=2*s/(t-e),p=2*s/(r-a),m=(t+e)/(t-e),g=(r+a)/(r-a);let S,E;if(u===wi)S=-(c+s)/(c-s),E=-2*c*s/(c-s);else if(u===lu)S=-c/(c-s),E=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,a,s,c,u=wi){const d=this.elements,h=1/(t-e),p=1/(r-a),m=1/(c-s),g=(t+e)*h,S=(r+a)*p;let E,w;if(u===wi)E=(c+s)*m,w=-2*m;else if(u===lu)E=s*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const hs=new B,ti=new Xt,zF=new B(0,0,0),BF=new B(1,1,1),Mo=new B,qc=new B,Mr=new B,_x=new Xt,yx=new Pa;class Cu{constructor(e=0,t=0,r=0,a=Cu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,s=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],m=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(kn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(kn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-kn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-kn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return _x.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_x,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yx.setFromEuler(this),this.setFromQuaternion(yx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cu.DEFAULT_ORDER="XYZ";class g1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HF=0;const xx=new B,ps=new Pa,Vi=new Xt,Yc=new B,Ul=new B,VF=new B,GF=new Pa,Sx=new B(1,0,0),wx=new B(0,1,0),Ex=new B(0,0,1),WF={type:"added"},$F={type:"removed"};class nr extends Fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HF++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nr.DEFAULT_UP.clone();const e=new B,t=new Cu,r=new Pa,a=new B(1,1,1);function s(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(s),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new wt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=nr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(wx,e)}rotateZ(e){return this.rotateOnAxis(Ex,e)}translateOnAxis(e,t){return xx.copy(e).applyQuaternion(this.quaternion),this.position.add(xx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(wx,e)}translateZ(e){return this.translateOnAxis(Ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Yc.copy(e):Yc.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ul,Yc,this.up):Vi.lookAt(Yc,Ul,this.up),this.quaternion.setFromRotationMatrix(Vi),a&&(Vi.extractRotation(a.matrixWorld),ps.setFromRotationMatrix(Vi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(WF)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($F)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,VF),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,GF,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const s=t[r];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,c=a.length;s<c;s++){const u=a[s];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];s(e.shapes,m)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(s(e.materials,this.material[d]));a.material=u}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(s(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),g=c(e.skeletons),S=c(e.animations),E=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),m.length>0&&(r.shapes=m),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}nr.DEFAULT_UP=new B(0,1,0);nr.DEFAULT_MATRIX_AUTO_UPDATE=!0;nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new B,Gi=new B,Np=new B,Wi=new B,ms=new B,vs=new B,Mx=new B,Fp=new B,Op=new B,kp=new B;let Kc=!1;class ii{constructor(e=new B,t=new B,r=new B){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ni.subVectors(e,t),a.cross(ni);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,r,a,s){ni.subVectors(a,t),Gi.subVectors(r,t),Np.subVectors(e,t);const c=ni.dot(ni),u=ni.dot(Gi),d=ni.dot(Np),h=Gi.dot(Gi),p=Gi.dot(Np),m=c*h-u*u;if(m===0)return s.set(-2,-1,-1);const g=1/m,S=(h*d-u*p)*g,E=(c*p-u*d)*g;return s.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Wi),Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getUV(e,t,r,a,s,c,u,d){return Kc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kc=!0),this.getInterpolation(e,t,r,a,s,c,u,d)}static getInterpolation(e,t,r,a,s,c,u,d){return this.getBarycoord(e,t,r,a,Wi),d.setScalar(0),d.addScaledVector(s,Wi.x),d.addScaledVector(c,Wi.y),d.addScaledVector(u,Wi.z),d}static isFrontFacing(e,t,r,a){return ni.subVectors(r,t),Gi.subVectors(e,t),ni.cross(Gi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ni.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,a,s){return Kc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kc=!0),ii.getInterpolation(e,this.a,this.b,this.c,t,r,a,s)}getInterpolation(e,t,r,a,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,r,a,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,s=this.c;let c,u;ms.subVectors(a,r),vs.subVectors(s,r),Fp.subVectors(e,r);const d=ms.dot(Fp),h=vs.dot(Fp);if(d<=0&&h<=0)return t.copy(r);Op.subVectors(e,a);const p=ms.dot(Op),m=vs.dot(Op);if(p>=0&&m<=p)return t.copy(a);const g=d*m-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(ms,c);kp.subVectors(e,s);const S=ms.dot(kp),E=vs.dot(kp);if(E>=0&&S<=E)return t.copy(s);const w=S*h-d*E;if(w<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(r).addScaledVector(vs,u);const y=p*E-S*m;if(y<=0&&m-p>=0&&S-E>=0)return Mx.subVectors(s,a),u=(m-p)/(m-p+(S-E)),t.copy(a).addScaledVector(Mx,u);const _=1/(y+w+g);return c=w*_,u=g*_,t.copy(r).addScaledVector(ms,c).addScaledVector(vs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ao={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function zp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Vt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Vt.workingColorSpace){if(e=ig(e,1),t=kn(t,0,1),r=kn(r,0,1),t===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+t):r+t-r*t,c=2*r-s;this.r=zp(c,s,e+1/3),this.g=zp(c,s,e),this.b=zp(c,s,e-1/3)}return Vt.toWorkingColorSpace(this,a),this}setStyle(e,t=Fn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const r=_1[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=bp(e.r),this.g=bp(e.g),this.b=bp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Vt.fromWorkingColorSpace($n.copy(this),e),Math.round(kn($n.r*255,0,255))*65536+Math.round(kn($n.g*255,0,255))*256+Math.round(kn($n.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace($n.copy(this),t);const r=$n.r,a=$n.g,s=$n.b,c=Math.max(r,a,s),u=Math.min(r,a,s);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case r:d=(a-s)/m+(a<s?6:0);break;case a:d=(s-r)/m+2;break;case s:d=(r-a)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace($n.copy(this),t),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=Fn){Vt.fromWorkingColorSpace($n.copy(this),e);const t=$n.r,r=$n.g,a=$n.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Ao),this.setHSL(Ao.h+e,Ao.s+t,Ao.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ao),e.getHSL(Zc);const r=Zl(Ao.h,Zc.h,t),a=Zl(Ao.s,Zc.s,t),s=Zl(Ao.l,Zc.l,t);return this.setHSL(r,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*r+s[6]*a,this.g=s[1]*t+s[4]*r+s[7]*a,this.b=s[2]*t+s[5]*r+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new nt;nt.NAMES=_1;let jF=0;class Ys extends Fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jF++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Ps,this.side=$o,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zm,this.blendDst=Bm,this.blendEquation=xa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Of,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==$o&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zm&&(r.blendSrc=this.blendSrc),this.blendDst!==Bm&&(r.blendDst=this.blendDst),this.blendEquation!==xa&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Of&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}if(t){const s=a(e.textures),c=a(e.images);s.length>0&&(r.textures=s),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let s=0;s!==a;++s)r[s]=t[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class y1 extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new B,Jc=new pt;class Cr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=$m,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Jc.fromBufferAttribute(this,t),Jc.applyMatrix3(e),this.setXY(t,Jc.x,Jc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Si(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$m&&(e.usage=this.usage),e}}class x1 extends Cr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class S1 extends Cr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class cn extends Cr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let XF=0;const Or=new Xt,Bp=new nr,gs=new B,Ar=new Wr,Nl=new Wr,An=new B;class Yn extends Fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XF++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h1(e)?S1:x1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new wt().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Or.makeRotationFromQuaternion(e),this.applyMatrix4(Or),this}rotateX(e){return Or.makeRotationX(e),this.applyMatrix4(Or),this}rotateY(e){return Or.makeRotationY(e),this.applyMatrix4(Or),this}rotateZ(e){return Or.makeRotationZ(e),this.applyMatrix4(Or),this}translate(e,t,r){return Or.makeTranslation(e,t,r),this.applyMatrix4(Or),this}scale(e,t,r){return Or.makeScale(e,t,r),this.applyMatrix4(Or),this}lookAt(e){return Bp.lookAt(e),Bp.updateMatrix(),this.applyMatrix4(Bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];Ar.setFromBufferAttribute(s),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const r=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const u=t[s];Nl.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(Ar.min,Nl.min),Ar.expandByPoint(An),An.addVectors(Ar.max,Nl.max),Ar.expandByPoint(An)):(Ar.expandByPoint(Nl.min),Ar.expandByPoint(Nl.max))}Ar.getCenter(r);let a=0;for(let s=0,c=e.count;s<c;s++)An.fromBufferAttribute(e,s),a=Math.max(a,r.distanceToSquared(An));if(t)for(let s=0,c=t.length;s<c;s++){const u=t[s],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)An.fromBufferAttribute(u,h),d&&(gs.fromBufferAttribute(e,h),An.add(gs)),a=Math.max(a,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=t.position.array,s=t.normal.array,c=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cr(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let O=0;O<u;O++)h[O]=new B,p[O]=new B;const m=new B,g=new B,S=new B,E=new pt,w=new pt,y=new pt,_=new B,T=new B;function M(O,oe,ne){m.fromArray(a,O*3),g.fromArray(a,oe*3),S.fromArray(a,ne*3),E.fromArray(c,O*2),w.fromArray(c,oe*2),y.fromArray(c,ne*2),g.sub(m),S.sub(m),w.sub(E),y.sub(E);const pe=1/(w.x*y.y-y.x*w.y);isFinite(pe)&&(_.copy(g).multiplyScalar(y.y).addScaledVector(S,-w.y).multiplyScalar(pe),T.copy(S).multiplyScalar(w.x).addScaledVector(g,-y.x).multiplyScalar(pe),h[O].add(_),h[oe].add(_),h[ne].add(_),p[O].add(T),p[oe].add(T),p[ne].add(T))}let R=this.groups;R.length===0&&(R=[{start:0,count:r.length}]);for(let O=0,oe=R.length;O<oe;++O){const ne=R[O],pe=ne.start,H=ne.count;for(let Q=pe,le=pe+H;Q<le;Q+=3)M(r[Q+0],r[Q+1],r[Q+2])}const P=new B,N=new B,U=new B,se=new B;function C(O){U.fromArray(s,O*3),se.copy(U);const oe=h[O];P.copy(oe),P.sub(U.multiplyScalar(U.dot(oe))).normalize(),N.crossVectors(se,oe);const pe=N.dot(p[O])<0?-1:1;d[O*4]=P.x,d[O*4+1]=P.y,d[O*4+2]=P.z,d[O*4+3]=pe}for(let O=0,oe=R.length;O<oe;++O){const ne=R[O],pe=ne.start,H=ne.count;for(let Q=pe,le=pe+H;Q<le;Q+=3)C(r[Q+0]),C(r[Q+1]),C(r[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Cr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const a=new B,s=new B,c=new B,u=new B,d=new B,h=new B,p=new B,m=new B;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,E),s.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),p.subVectors(c,s),m.subVectors(a,s),p.cross(m),u.fromBufferAttribute(r,E),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,y),u.add(p),d.add(p),h.add(p),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,s),m.subVectors(a,s),p.cross(m),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(d.length*p);let S=0,E=0;for(let w=0,y=d.length;w<y;w++){u.isInterleavedBufferAttribute?S=d[w]*u.data.stride+u.offset:S=d[w]*p;for(let _=0;_<p;_++)g[E++]=h[S++]}return new Cr(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,r=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,r);t.setAttribute(u,h)}const s=this.morphAttributes;for(const u in s){const d=[],h=s[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],S=e(g,r);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,g=h.length;m<g;m++){const S=h[m];p.push(S.toJSON(e.data))}p.length>0&&(a[d]=p,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],m=s[h];for(let g=0,S=m.length;g<S;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ax=new Xt,va=new og,Qc=new Ti,Tx=new B,_s=new B,ys=new B,xs=new B,Hp=new B,ef=new B,tf=new pt,nf=new pt,rf=new pt,bx=new B,Cx=new B,Rx=new B,of=new B,af=new B;class ai extends nr{constructor(e=new Yn,t=new y1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,s=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(s&&u){ef.set(0,0,0);for(let d=0,h=s.length;d<h;d++){const p=u[d],m=s[d];p!==0&&(Hp.fromBufferAttribute(m,e),c?ef.addScaledVector(Hp,p):ef.addScaledVector(Hp.sub(t),p))}t.add(ef)}return t}raycast(e,t){const r=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Qc.copy(r.boundingSphere),Qc.applyMatrix4(s),va.copy(e.ray).recast(e.near),!(Qc.containsPoint(va.origin)===!1&&(va.intersectSphere(Qc,Tx)===null||va.origin.distanceToSquared(Tx)>(e.far-e.near)**2))&&(Ax.copy(s).invert(),va.copy(e.ray).applyMatrix4(Ax),!(r.boundingBox!==null&&va.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,va)))}_computeIntersections(e,t,r){let a;const s=this.geometry,c=this.material,u=s.index,d=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,g=s.groups,S=s.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,w=g.length;E<w;E++){const y=g[E],_=c[y.materialIndex],T=Math.max(y.start,S.start),M=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let R=T,P=M;R<P;R+=3){const N=u.getX(R),U=u.getX(R+1),se=u.getX(R+2);a=sf(this,_,e,r,h,p,m,N,U,se),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let y=E,_=w;y<_;y+=3){const T=u.getX(y),M=u.getX(y+1),R=u.getX(y+2);a=sf(this,c,e,r,h,p,m,T,M,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=g.length;E<w;E++){const y=g[E],_=c[y.materialIndex],T=Math.max(y.start,S.start),M=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=T,P=M;R<P;R+=3){const N=R,U=R+1,se=R+2;a=sf(this,_,e,r,h,p,m,N,U,se),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,_=w;y<_;y+=3){const T=y,M=y+1,R=y+2;a=sf(this,c,e,r,h,p,m,T,M,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function qF(n,e,t,r,a,s,c,u){let d;if(e.side===mr?d=r.intersectTriangle(c,s,a,!0,u):d=r.intersectTriangle(a,s,c,e.side===$o,u),d===null)return null;af.copy(u),af.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(af);return h<t.near||h>t.far?null:{distance:h,point:af.clone(),object:n}}function sf(n,e,t,r,a,s,c,u,d,h){n.getVertexPosition(u,_s),n.getVertexPosition(d,ys),n.getVertexPosition(h,xs);const p=qF(n,e,t,r,_s,ys,xs,of);if(p){a&&(tf.fromBufferAttribute(a,u),nf.fromBufferAttribute(a,d),rf.fromBufferAttribute(a,h),p.uv=ii.getInterpolation(of,_s,ys,xs,tf,nf,rf,new pt)),s&&(tf.fromBufferAttribute(s,u),nf.fromBufferAttribute(s,d),rf.fromBufferAttribute(s,h),p.uv1=ii.getInterpolation(of,_s,ys,xs,tf,nf,rf,new pt),p.uv2=p.uv1),c&&(bx.fromBufferAttribute(c,u),Cx.fromBufferAttribute(c,d),Rx.fromBufferAttribute(c,h),p.normal=ii.getInterpolation(of,_s,ys,xs,bx,Cx,Rx,new B),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:h,normal:new B,materialIndex:0};ii.getNormal(_s,ys,xs,m.normal),p.face=m}return p}class Ru extends Yn{constructor(e=1,t=1,r=1,a=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:s,depthSegments:c};const u=this;a=Math.floor(a),s=Math.floor(s),c=Math.floor(c);const d=[],h=[],p=[],m=[];let g=0,S=0;E("z","y","x",-1,-1,r,t,e,c,s,0),E("z","y","x",1,-1,r,t,-e,c,s,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,s,4),E("x","y","z",-1,-1,e,t,-r,a,s,5),this.setIndex(d),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(p,3)),this.setAttribute("uv",new cn(m,2));function E(w,y,_,T,M,R,P,N,U,se,C){const O=R/U,oe=P/se,ne=R/2,pe=P/2,H=N/2,Q=U+1,le=se+1;let re=0,j=0;const ie=new B;for(let $=0;$<le;$++){const L=$*oe-pe;for(let k=0;k<Q;k++){const W=k*O-ne;ie[w]=W*T,ie[y]=L*M,ie[_]=H,h.push(ie.x,ie.y,ie.z),ie[w]=0,ie[y]=0,ie[_]=N>0?1:-1,p.push(ie.x,ie.y,ie.z),m.push(k/U),m.push(1-$/se),re+=1}}for(let $=0;$<se;$++)for(let L=0;L<U;L++){const k=g+L+Q*$,W=g+L+Q*($+1),Y=g+(L+1)+Q*($+1),ee=g+(L+1)+Q*$;d.push(k,W,ee),d.push(W,Y,ee),j+=6}u.addGroup(S,j,C),S+=j,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const a=n[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function tr(n){const e={};for(let t=0;t<n.length;t++){const r=Gs(n[t]);for(const a in r)e[a]=r[a]}return e}function YF(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function w1(n){return n.getRenderTarget()===null?n.outputColorSpace:Vt.workingColorSpace}const ag={clone:Gs,merge:tr};var KF=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZF=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jo extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KF,this.fragmentShader=ZF,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=YF(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class E1 extends nr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tr extends E1{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uu*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,a,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kl*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,s=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;s+=c.offsetX*a/d,t-=c.offsetY*r/h,a*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,ws=1;class JF extends nr{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Tr(Ss,ws,e,t);a.layers=this.layers,this.add(a);const s=new Tr(Ss,ws,e,t);s.layers=this.layers,this.add(s);const c=new Tr(Ss,ws,e,t);c.layers=this.layers,this.add(c);const u=new Tr(Ss,ws,e,t);u.layers=this.layers,this.add(u);const d=new Tr(Ss,ws,e,t);d.layers=this.layers,this.add(d);const h=new Tr(Ss,ws,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,s,c,u,d]=t;for(const h of t)this.remove(h);if(e===wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,u,d,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,s),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,u),e.setRenderTarget(r,3,a),e.render(t,d),e.setRenderTarget(r,4,a),e.render(t,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,p),e.setRenderTarget(m,g,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class M1 extends vr{constructor(e,t,r,a,s,c,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,r,a,s,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QF extends Ra{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];t.encoding!==void 0&&(Jl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ba?Fn:Hr),this.texture=new M1(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ru(5,5,5),s=new jo({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:mr,blending:Oo});s.uniforms.tEquirect.value=t;const c=new ai(a,s),u=t.minFilter;return t.minFilter===au&&(t.minFilter=zr),new JF(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(s)}}const Vp=new B,eO=new B,tO=new wt;class Po{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Vp.subVectors(r,t).cross(eO.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Vp),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||tO.getNormalMatrix(e),a=this.coplanarPoint(Vp).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ga=new Ti,lf=new B;class Ed{constructor(e=new Po,t=new Po,r=new Po,a=new Po,s=new Po,c=new Po){this.planes=[e,t,r,a,s,c]}set(e,t,r,a,s,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(a),u[4].copy(s),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=wi){const r=this.planes,a=e.elements,s=a[0],c=a[1],u=a[2],d=a[3],h=a[4],p=a[5],m=a[6],g=a[7],S=a[8],E=a[9],w=a[10],y=a[11],_=a[12],T=a[13],M=a[14],R=a[15];if(r[0].setComponents(d-s,g-h,y-S,R-_).normalize(),r[1].setComponents(d+s,g+h,y+S,R+_).normalize(),r[2].setComponents(d+c,g+p,y+E,R+T).normalize(),r[3].setComponents(d-c,g-p,y-E,R-T).normalize(),r[4].setComponents(d-u,g-m,y-w,R-M).normalize(),t===wi)r[5].setComponents(d+u,g+m,y+w,R+M).normalize();else if(t===lu)r[5].setComponents(u,m,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ga.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ga.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ga)}intersectsSprite(e){return ga.center.set(0,0,0),ga.radius=.7071067811865476,ga.applyMatrix4(e.matrixWorld),this.intersectsSphere(ga)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(lf.x=a.normal.x>0?e.max.x:e.min.x,lf.y=a.normal.y>0?e.max.y:e.min.y,lf.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(lf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A1(){let n=null,e=!1,t=null,r=null;function a(s,c){t(s,c),r=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nO(n,e){const t=e.isWebGL2,r=new WeakMap;function a(h,p){const m=h.array,g=h.usage,S=m.byteLength,E=n.createBuffer();n.bindBuffer(p,E),n.bufferData(p,m,g),h.onUploadCallback();let w;if(m instanceof Float32Array)w=n.FLOAT;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)w=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=n.UNSIGNED_SHORT;else if(m instanceof Int16Array)w=n.SHORT;else if(m instanceof Uint32Array)w=n.UNSIGNED_INT;else if(m instanceof Int32Array)w=n.INT;else if(m instanceof Int8Array)w=n.BYTE;else if(m instanceof Uint8Array)w=n.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)w=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:E,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,p,m){const g=p.array,S=p._updateRange,E=p.updateRanges;if(n.bindBuffer(m,h),S.count===-1&&E.length===0&&n.bufferSubData(m,0,g),E.length!==0){for(let w=0,y=E.length;w<y;w++){const _=E[w];t?n.bufferSubData(m,_.start*g.BYTES_PER_ELEMENT,g,_.start,_.count):n.bufferSubData(m,_.start*g.BYTES_PER_ELEMENT,g.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}S.count!==-1&&(t?n.bufferSubData(m,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count):n.bufferSubData(m,S.offset*g.BYTES_PER_ELEMENT,g.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=r.get(h);p&&(n.deleteBuffer(p.buffer),r.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const g=r.get(h);(!g||g.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const m=r.get(h);if(m===void 0)r.set(h,a(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:c,remove:u,update:d}}class sg extends Yn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const s=e/2,c=t/2,u=Math.floor(r),d=Math.floor(a),h=u+1,p=d+1,m=e/u,g=t/d,S=[],E=[],w=[],y=[];for(let _=0;_<p;_++){const T=_*g-c;for(let M=0;M<h;M++){const R=M*m-s;E.push(R,-T,0),w.push(0,0,1),y.push(M/u),y.push(1-_/d)}}for(let _=0;_<d;_++)for(let T=0;T<u;T++){const M=T+h*_,R=T+h*(_+1),P=T+1+h*(_+1),N=T+1+h*_;S.push(M,R,N),S.push(R,P,N)}this.setIndex(S),this.setAttribute("position",new cn(E,3)),this.setAttribute("normal",new cn(w,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sg(e.width,e.height,e.widthSegments,e.heightSegments)}}var rO=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iO=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oO=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aO=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sO=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lO=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uO=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cO=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fO=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dO=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hO=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pO=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mO=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vO=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gO=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_O=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SO=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wO=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,AO=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,TO=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bO=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CO=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PO=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LO=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DO=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IO="gl_FragColor = linearToOutputTexel( gl_FragColor );",UO=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,NO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FO=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OO=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kO=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BO=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HO=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VO=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GO=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WO=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$O=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jO=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XO=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qO=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YO=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KO=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZO=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JO=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ek=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tk=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nk=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rk=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ik=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ok=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ak=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sk=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lk=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uk=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ck=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fk=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dk=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hk=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pk=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mk=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vk=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gk=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_k=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yk=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xk=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sk=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wk=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ek=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mk=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ak=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tk=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bk=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ck=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rk=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pk=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lk=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dk=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ik=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uk=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nk=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fk=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ok=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kk=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zk=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bk=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hk=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vk=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gk=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wk=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$k=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jk=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xk=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qk=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yk=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kk=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zk=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jk=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qk=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ez=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tz=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nz=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rz=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oz=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,az=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sz=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lz=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uz=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cz=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fz=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hz=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pz=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mz=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vz=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gz=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_z=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yz=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xz=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sz=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wz=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ez=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mz=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Az=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tz=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bz=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cz=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rz=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pz=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lz=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dz=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iz=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uz=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nz=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:rO,alphahash_pars_fragment:iO,alphamap_fragment:oO,alphamap_pars_fragment:aO,alphatest_fragment:sO,alphatest_pars_fragment:lO,aomap_fragment:uO,aomap_pars_fragment:cO,batching_pars_vertex:fO,batching_vertex:dO,begin_vertex:hO,beginnormal_vertex:pO,bsdfs:mO,iridescence_fragment:vO,bumpmap_pars_fragment:gO,clipping_planes_fragment:_O,clipping_planes_pars_fragment:yO,clipping_planes_pars_vertex:xO,clipping_planes_vertex:SO,color_fragment:wO,color_pars_fragment:EO,color_pars_vertex:MO,color_vertex:AO,common:TO,cube_uv_reflection_fragment:bO,defaultnormal_vertex:CO,displacementmap_pars_vertex:RO,displacementmap_vertex:PO,emissivemap_fragment:LO,emissivemap_pars_fragment:DO,colorspace_fragment:IO,colorspace_pars_fragment:UO,envmap_fragment:NO,envmap_common_pars_fragment:FO,envmap_pars_fragment:OO,envmap_pars_vertex:kO,envmap_physical_pars_fragment:KO,envmap_vertex:zO,fog_vertex:BO,fog_pars_vertex:HO,fog_fragment:VO,fog_pars_fragment:GO,gradientmap_pars_fragment:WO,lightmap_fragment:$O,lightmap_pars_fragment:jO,lights_lambert_fragment:XO,lights_lambert_pars_fragment:qO,lights_pars_begin:YO,lights_toon_fragment:ZO,lights_toon_pars_fragment:JO,lights_phong_fragment:QO,lights_phong_pars_fragment:ek,lights_physical_fragment:tk,lights_physical_pars_fragment:nk,lights_fragment_begin:rk,lights_fragment_maps:ik,lights_fragment_end:ok,logdepthbuf_fragment:ak,logdepthbuf_pars_fragment:sk,logdepthbuf_pars_vertex:lk,logdepthbuf_vertex:uk,map_fragment:ck,map_pars_fragment:fk,map_particle_fragment:dk,map_particle_pars_fragment:hk,metalnessmap_fragment:pk,metalnessmap_pars_fragment:mk,morphcolor_vertex:vk,morphnormal_vertex:gk,morphtarget_pars_vertex:_k,morphtarget_vertex:yk,normal_fragment_begin:xk,normal_fragment_maps:Sk,normal_pars_fragment:wk,normal_pars_vertex:Ek,normal_vertex:Mk,normalmap_pars_fragment:Ak,clearcoat_normal_fragment_begin:Tk,clearcoat_normal_fragment_maps:bk,clearcoat_pars_fragment:Ck,iridescence_pars_fragment:Rk,opaque_fragment:Pk,packing:Lk,premultiplied_alpha_fragment:Dk,project_vertex:Ik,dithering_fragment:Uk,dithering_pars_fragment:Nk,roughnessmap_fragment:Fk,roughnessmap_pars_fragment:Ok,shadowmap_pars_fragment:kk,shadowmap_pars_vertex:zk,shadowmap_vertex:Bk,shadowmask_pars_fragment:Hk,skinbase_vertex:Vk,skinning_pars_vertex:Gk,skinning_vertex:Wk,skinnormal_vertex:$k,specularmap_fragment:jk,specularmap_pars_fragment:Xk,tonemapping_fragment:qk,tonemapping_pars_fragment:Yk,transmission_fragment:Kk,transmission_pars_fragment:Zk,uv_pars_fragment:Jk,uv_pars_vertex:Qk,uv_vertex:ez,worldpos_vertex:tz,background_vert:nz,background_frag:rz,backgroundCube_vert:iz,backgroundCube_frag:oz,cube_vert:az,cube_frag:sz,depth_vert:lz,depth_frag:uz,distanceRGBA_vert:cz,distanceRGBA_frag:fz,equirect_vert:dz,equirect_frag:hz,linedashed_vert:pz,linedashed_frag:mz,meshbasic_vert:vz,meshbasic_frag:gz,meshlambert_vert:_z,meshlambert_frag:yz,meshmatcap_vert:xz,meshmatcap_frag:Sz,meshnormal_vert:wz,meshnormal_frag:Ez,meshphong_vert:Mz,meshphong_frag:Az,meshphysical_vert:Tz,meshphysical_frag:bz,meshtoon_vert:Cz,meshtoon_frag:Rz,points_vert:Pz,points_frag:Lz,shadow_vert:Dz,shadow_frag:Iz,sprite_vert:Uz,sprite_frag:Nz},Oe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},hr={basic:{uniforms:tr([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:tr([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:tr([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:tr([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:tr([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:tr([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:tr([Oe.points,Oe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:tr([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:tr([Oe.common,Oe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:tr([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:tr([Oe.sprite,Oe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:tr([Oe.common,Oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:tr([Oe.lights,Oe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};hr.physical={uniforms:tr([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const uf={r:0,b:0,g:0};function Fz(n,e,t,r,a,s,c){const u=new nt(0);let d=s===!0?0:1,h,p,m=null,g=0,S=null;function E(y,_){let T=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?w(u,d):M&&M.isColor&&(w(M,1),T=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Sd)?(p===void 0&&(p=new ai(new Ru(1,1,1),new jo({name:"BackgroundCubeMaterial",uniforms:Gs(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Vt.getTransfer(M.colorSpace)!==Kt,(m!==M||g!==M.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,m=M,g=M.version,S=n.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ai(new sg(2,2),new jo({name:"BackgroundMaterial",uniforms:Gs(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:$o,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Vt.getTransfer(M.colorSpace)!==Kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(m!==M||g!==M.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,m=M,g=M.version,S=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function w(y,_){y.getRGB(uf,w1(n)),r.buffers.color.setClear(uf.r,uf.g,uf.b,_,c)}return{getClearColor:function(){return u},setClearColor:function(y,_=1){u.set(y),d=_,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(y){d=y,w(u,d)},render:E}}function Oz(n,e,t,r){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=r.isWebGL2?null:e.get("OES_vertex_array_object"),c=r.isWebGL2||s!==null,u={},d=y(null);let h=d,p=!1;function m(H,Q,le,re,j){let ie=!1;if(c){const $=w(re,le,Q);h!==$&&(h=$,S(h.object)),ie=_(H,re,le,j),ie&&T(H,re,le,j)}else{const $=Q.wireframe===!0;(h.geometry!==re.id||h.program!==le.id||h.wireframe!==$)&&(h.geometry=re.id,h.program=le.id,h.wireframe=$,ie=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(ie||p)&&(p=!1,se(H,Q,le,re),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function g(){return r.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function S(H){return r.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function E(H){return r.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function w(H,Q,le){const re=le.wireframe===!0;let j=u[H.id];j===void 0&&(j={},u[H.id]=j);let ie=j[Q.id];ie===void 0&&(ie={},j[Q.id]=ie);let $=ie[re];return $===void 0&&($=y(g()),ie[re]=$),$}function y(H){const Q=[],le=[],re=[];for(let j=0;j<a;j++)Q[j]=0,le[j]=0,re[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:le,attributeDivisors:re,object:H,attributes:{},index:null}}function _(H,Q,le,re){const j=h.attributes,ie=Q.attributes;let $=0;const L=le.getAttributes();for(const k in L)if(L[k].location>=0){const Y=j[k];let ee=ie[k];if(ee===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),Y===void 0||Y.attribute!==ee||ee&&Y.data!==ee.data)return!0;$++}return h.attributesNum!==$||h.index!==re}function T(H,Q,le,re){const j={},ie=Q.attributes;let $=0;const L=le.getAttributes();for(const k in L)if(L[k].location>=0){let Y=ie[k];Y===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor));const ee={};ee.attribute=Y,Y&&Y.data&&(ee.data=Y.data),j[k]=ee,$++}h.attributes=j,h.attributesNum=$,h.index=re}function M(){const H=h.newAttributes;for(let Q=0,le=H.length;Q<le;Q++)H[Q]=0}function R(H){P(H,0)}function P(H,Q){const le=h.newAttributes,re=h.enabledAttributes,j=h.attributeDivisors;le[H]=1,re[H]===0&&(n.enableVertexAttribArray(H),re[H]=1),j[H]!==Q&&((r.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Q),j[H]=Q)}function N(){const H=h.newAttributes,Q=h.enabledAttributes;for(let le=0,re=Q.length;le<re;le++)Q[le]!==H[le]&&(n.disableVertexAttribArray(le),Q[le]=0)}function U(H,Q,le,re,j,ie,$){$===!0?n.vertexAttribIPointer(H,Q,le,j,ie):n.vertexAttribPointer(H,Q,le,re,j,ie)}function se(H,Q,le,re){if(r.isWebGL2===!1&&(H.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const j=re.attributes,ie=le.getAttributes(),$=Q.defaultAttributeValues;for(const L in ie){const k=ie[L];if(k.location>=0){let W=j[L];if(W===void 0&&(L==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),L==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),W!==void 0){const Y=W.normalized,ee=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const _e=Z.buffer,ve=Z.type,be=Z.bytesPerElement,ke=r.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===n1);if(W.isInterleavedBufferAttribute){const ze=W.data,X=ze.stride,It=W.offset;if(ze.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)P(k.location+Ve,ze.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)R(k.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Ve=0;Ve<k.locationSize;Ve++)U(k.location+Ve,ee/k.locationSize,ve,Y,X*be,(It+ee/k.locationSize*Ve)*be,ke)}else{if(W.isInstancedBufferAttribute){for(let ze=0;ze<k.locationSize;ze++)P(k.location+ze,W.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ze=0;ze<k.locationSize;ze++)R(k.location+ze);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ze=0;ze<k.locationSize;ze++)U(k.location+ze,ee/k.locationSize,ve,Y,ee*be,ee/k.locationSize*ze*be,ke)}}else if($!==void 0){const Y=$[L];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(k.location,Y);break;case 3:n.vertexAttrib3fv(k.location,Y);break;case 4:n.vertexAttrib4fv(k.location,Y);break;default:n.vertexAttrib1fv(k.location,Y)}}}}N()}function C(){ne();for(const H in u){const Q=u[H];for(const le in Q){const re=Q[le];for(const j in re)E(re[j].object),delete re[j];delete Q[le]}delete u[H]}}function O(H){if(u[H.id]===void 0)return;const Q=u[H.id];for(const le in Q){const re=Q[le];for(const j in re)E(re[j].object),delete re[j];delete Q[le]}delete u[H.id]}function oe(H){for(const Q in u){const le=u[Q];if(le[H.id]===void 0)continue;const re=le[H.id];for(const j in re)E(re[j].object),delete re[j];delete le[H.id]}}function ne(){pe(),p=!0,h!==d&&(h=d,S(h.object))}function pe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:m,reset:ne,resetDefaultState:pe,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:oe,initAttributes:M,enableAttribute:R,disableUnusedAttributes:N}}function kz(n,e,t,r){const a=r.isWebGL2;let s;function c(p){s=p}function u(p,m){n.drawArrays(s,p,m),t.update(m,s,1)}function d(p,m,g){if(g===0)return;let S,E;if(a)S=n,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](s,p,m,g),t.update(m,s,g)}function h(p,m,g){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g;E++)this.render(p[E],m[E]);else{S.multiDrawArraysWEBGL(s,p,0,m,0,g);let E=0;for(let w=0;w<g;w++)E+=m[w];t.update(E,s,1)}}this.setMode=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function zz(n,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=s(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),w=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,R=c||e.has("OES_texture_float"),P=M&&R,N=c?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:s,precision:u,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:P,maxSamples:N}}function Bz(n){const e=this;let t=null,r=0,a=!1,s=!1;const c=new Po,u=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const S=m.length!==0||g||r!==0||a;return a=g,r=m.length,S},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,S){const E=m.clippingPlanes,w=m.clipIntersection,y=m.clipShadows,_=n.get(m);if(!a||E===null||E.length===0||s&&!y)s?p(null):h();else{const T=s?0:r,M=T*4;let R=_.clippingState||null;d.value=R,R=p(E,g,M,S);for(let P=0;P!==M;++P)R[P]=t[P];_.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(m,g,S,E){const w=m!==null?m.length:0;let y=null;if(w!==0){if(y=d.value,E!==!0||y===null){const _=S+w*4,T=g.matrixWorldInverse;u.getNormalMatrix(T),(y===null||y.length<_)&&(y=new Float32Array(_));for(let M=0,R=S;M!==w;++M,R+=4)c.copy(m[M]).applyMatrix4(T,u),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function Hz(n){let e=new WeakMap;function t(c,u){return u===Hm?c.mapping=Bs:u===Vm&&(c.mapping=Hs),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===Hm||u===Vm)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new QF(d.height/2);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}class Vz extends E1{constructor(e=-1,t=1,r=1,a=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=r-e,c=r+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,c=s+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,Px=[.125,.215,.35,.446,.526,.582],Sa=20,Gp=new Vz,Lx=new nt;let Wp=null,$p=0,jp=0;const ya=(1+Math.sqrt(5))/2,Es=1/ya,Dx=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ya,Es),new B(0,ya,-Es),new B(Es,0,ya),new B(-Es,0,ya),new B(ya,Es,0),new B(-ya,Es,0)];class Ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Wp=this._renderer.getRenderTarget(),$p=this._renderer.getActiveCubeFace(),jp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wp,$p,jp),e.scissorTest=!1,cf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wp=this._renderer.getRenderTarget(),$p=this._renderer.getActiveCubeFace(),jp=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:zr,minFilter:zr,generateMipmaps:!1,type:su,format:Br,colorSpace:Zi,depthBuffer:!1},a=Ux(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ux(e,t,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gz(s)),this._blurMaterial=Wz(s,e,t)}return a}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,Gp)}_sceneToCubeUV(e,t,r,a){const u=new Tr(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(Lx),p.toneMapping=ko,p.autoClear=!1;const S=new y1({name:"PMREM.Background",side:mr,depthWrite:!1,depthTest:!1}),E=new ai(new Ru,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(Lx),w=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(u.up.set(0,d[_],0),u.lookAt(h[_],0,0)):T===1?(u.up.set(0,0,d[_]),u.lookAt(0,h[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,h[_]));const M=this._cubeSize;cf(a,T*M,_>2?M:0,M,M),p.setRenderTarget(a),w&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Bs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nx());const s=a?this._cubemapMaterial:this._equirectMaterial,c=new ai(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const d=this._cubeSize;cf(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Gp)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Dx[(a-1)%Dx.length];this._blur(e,a-1,a,s,c)}t.autoClear=r}_blur(e,t,r,a,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",s),this._halfBlur(c,e,r,r,a,"longitudinal",s)}_halfBlur(e,t,r,a,s,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new ai(this._lodPlanes[a],h),g=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*Sa-1),w=s/E,y=isFinite(s)?1+Math.floor(p*w):Sa;y>Sa&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Sa}`);const _=[];let T=0;for(let U=0;U<Sa;++U){const se=U/w,C=Math.exp(-se*se/2);_.push(C),U===0?T+=C:U<y&&(T+=2*C)}for(let U=0;U<_.length;U++)_[U]=_[U]/T;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=_,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=E,g.mipInt.value=M-r;const R=this._sizeLods[a],P=3*R*(a>M-bs?a-M+bs:0),N=4*(this._cubeSize-R);cf(t,P,N,3*R,2*R),d.setRenderTarget(t),d.render(m,Gp)}}function Gz(n){const e=[],t=[],r=[];let a=n;const s=n-bs+1+Px.length;for(let c=0;c<s;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>n-bs?d=Px[c-n+bs-1]:c===0&&(d=0),r.push(d);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],S=6,E=6,w=3,y=2,_=1,T=new Float32Array(w*E*S),M=new Float32Array(y*E*S),R=new Float32Array(_*E*S);for(let N=0;N<S;N++){const U=N%3*2/3-1,se=N>2?0:-1,C=[U,se,0,U+2/3,se,0,U+2/3,se+1,0,U,se,0,U+2/3,se+1,0,U,se+1,0];T.set(C,w*E*N),M.set(g,y*E*N);const O=[N,N,N,N,N,N];R.set(O,_*E*N)}const P=new Yn;P.setAttribute("position",new Cr(T,w)),P.setAttribute("uv",new Cr(M,y)),P.setAttribute("faceIndex",new Cr(R,_)),e.push(P),a>bs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ux(n,e,t){const r=new Ra(n,e,t);return r.texture.mapping=Sd,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cf(n,e,t,r,a){n.viewport.set(e,t,r,a),n.scissor.set(e,t,r,a)}function Wz(n,e,t){const r=new Float32Array(Sa),a=new B(0,1,0);return new jo({name:"SphericalGaussianBlur",defines:{n:Sa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oo,depthTest:!1,depthWrite:!1})}function Nx(){return new jo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oo,depthTest:!1,depthWrite:!1})}function Fx(){return new jo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oo,depthTest:!1,depthWrite:!1})}function lg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $z(n){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const d=u.mapping,h=d===Hm||d===Vm,p=d===Bs||d===Hs;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=e.get(u);return t===null&&(t=new Ix(n)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),e.set(u,m),m.texture}else{if(e.has(u))return e.get(u).texture;{const m=u.image;if(h&&m&&m.height>0||p&&m&&a(m)){t===null&&(t=new Ix(n));const g=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",s),g.texture}else return null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function s(u){const d=u.target;d.removeEventListener("dispose",s);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function jz(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Xz(n,e,t,r){const a={},s=new WeakMap;function c(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const w=g.morphAttributes[E];for(let y=0,_=w.length;y<_;y++)e.remove(w[y])}g.removeEventListener("dispose",c),delete a[g.id];const S=s.get(g);S&&(e.remove(S),s.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const E in g)e.update(g[E],n.ARRAY_BUFFER);const S=m.morphAttributes;for(const E in S){const w=S[E];for(let y=0,_=w.length;y<_;y++)e.update(w[y],n.ARRAY_BUFFER)}}function h(m){const g=[],S=m.index,E=m.attributes.position;let w=0;if(S!==null){const T=S.array;w=S.version;for(let M=0,R=T.length;M<R;M+=3){const P=T[M+0],N=T[M+1],U=T[M+2];g.push(P,N,N,U,U,P)}}else if(E!==void 0){const T=E.array;w=E.version;for(let M=0,R=T.length/3-1;M<R;M+=3){const P=M+0,N=M+1,U=M+2;g.push(P,N,N,U,U,P)}}else return;const y=new(h1(g)?S1:x1)(g,1);y.version=w;const _=s.get(m);_&&e.remove(_),s.set(m,y)}function p(m){const g=s.get(m);if(g){const S=m.index;S!==null&&g.version<S.version&&h(m)}else h(m);return s.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function qz(n,e,t,r){const a=r.isWebGL2;let s;function c(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function p(S,E){n.drawElements(s,E,u,S*d),t.update(E,s,1)}function m(S,E,w){if(w===0)return;let y,_;if(a)y=n,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,E,u,S*d,w),t.update(E,s,w)}function g(S,E,w){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<w;_++)this.render(S[_]/d,E[_]);else{y.multiDrawElementsWEBGL(s,E,0,u,S,0,w);let _=0;for(let T=0;T<w;T++)_+=E[T];t.update(_,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function Yz(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(s/3);break;case n.LINES:t.lines+=u*(s/2);break;case n.LINE_STRIP:t.lines+=u*(s-1);break;case n.LINE_LOOP:t.lines+=u*s;break;case n.POINTS:t.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function Kz(n,e){return n[0]-e[0]}function Zz(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Jz(n,e,t){const r={},a=new Float32Array(8),s=new WeakMap,c=new Gt,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function d(h,p,m){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=E!==void 0?E.length:0;let y=s.get(p);if(y===void 0||y.count!==w){let Q=function(){pe.dispose(),s.delete(p),p.removeEventListener("dispose",Q)};var S=Q;y!==void 0&&y.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,P=p.morphAttributes.color!==void 0,N=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],se=p.morphAttributes.color||[];let C=0;M===!0&&(C=1),R===!0&&(C=2),P===!0&&(C=3);let O=p.attributes.position.count*C,oe=1;O>e.maxTextureSize&&(oe=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const ne=new Float32Array(O*oe*4*w),pe=new v1(ne,O,oe,w);pe.type=qi,pe.needsUpdate=!0;const H=C*4;for(let le=0;le<w;le++){const re=N[le],j=U[le],ie=se[le],$=O*oe*4*le;for(let L=0;L<re.count;L++){const k=L*H;M===!0&&(c.fromBufferAttribute(re,L),ne[$+k+0]=c.x,ne[$+k+1]=c.y,ne[$+k+2]=c.z,ne[$+k+3]=0),R===!0&&(c.fromBufferAttribute(j,L),ne[$+k+4]=c.x,ne[$+k+5]=c.y,ne[$+k+6]=c.z,ne[$+k+7]=0),P===!0&&(c.fromBufferAttribute(ie,L),ne[$+k+8]=c.x,ne[$+k+9]=c.y,ne[$+k+10]=c.z,ne[$+k+11]=ie.itemSize===4?c.w:1)}}y={count:w,texture:pe,size:new pt(O,oe)},s.set(p,y),p.addEventListener("dispose",Q)}let _=0;for(let M=0;M<g.length;M++)_+=g[M];const T=p.morphTargetsRelative?1:1-_;m.getUniforms().setValue(n,"morphTargetBaseInfluence",T),m.getUniforms().setValue(n,"morphTargetInfluences",g),m.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),m.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const E=g===void 0?0:g.length;let w=r[p.id];if(w===void 0||w.length!==E){w=[];for(let R=0;R<E;R++)w[R]=[R,0];r[p.id]=w}for(let R=0;R<E;R++){const P=w[R];P[0]=R,P[1]=g[R]}w.sort(Zz);for(let R=0;R<8;R++)R<E&&w[R][1]?(u[R][0]=w[R][0],u[R][1]=w[R][1]):(u[R][0]=Number.MAX_SAFE_INTEGER,u[R][1]=0);u.sort(Kz);const y=p.morphAttributes.position,_=p.morphAttributes.normal;let T=0;for(let R=0;R<8;R++){const P=u[R],N=P[0],U=P[1];N!==Number.MAX_SAFE_INTEGER&&U?(y&&p.getAttribute("morphTarget"+R)!==y[N]&&p.setAttribute("morphTarget"+R,y[N]),_&&p.getAttribute("morphNormal"+R)!==_[N]&&p.setAttribute("morphNormal"+R,_[N]),a[R]=U,T+=U):(y&&p.hasAttribute("morphTarget"+R)===!0&&p.deleteAttribute("morphTarget"+R),_&&p.hasAttribute("morphNormal"+R)===!0&&p.deleteAttribute("morphNormal"+R),a[R]=0)}const M=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(n,"morphTargetBaseInfluence",M),m.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:d}}function Qz(n,e,t,r){let a=new WeakMap;function s(d){const h=r.render.frame,p=d.geometry,m=e.get(d,p);if(a.get(m)!==h&&(e.update(m),a.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return m}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:c}}class T1 extends vr{constructor(e,t,r,a,s,c,u,d,h,p){if(p=p!==void 0?p:Ta,p!==Ta&&p!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===Ta&&(r=Uo),r===void 0&&p===Vs&&(r=Aa),super(null,a,s,c,u,d,p,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Nn,this.minFilter=d!==void 0?d:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const b1=new vr,C1=new T1(1,1);C1.compareFunction=f1;const R1=new v1,P1=new OF,L1=new M1,Ox=[],kx=[],zx=new Float32Array(16),Bx=new Float32Array(9),Hx=new Float32Array(4);function Ks(n,e,t){const r=n[0];if(r<=0||r>0)return n;const a=e*t;let s=Ox[a];if(s===void 0&&(s=new Float32Array(a),Ox[a]=s),e!==0){r.toArray(s,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(s,u)}return s}function yn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function xn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Md(n,e){let t=kx[e];t===void 0&&(t=new Int32Array(e),kx[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function eB(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2fv(this.addr,e),xn(t,e)}}function nB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;n.uniform3fv(this.addr,e),xn(t,e)}}function rB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4fv(this.addr,e),xn(t,e)}}function iB(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(yn(t,r))return;Hx.set(r),n.uniformMatrix2fv(this.addr,!1,Hx),xn(t,r)}}function oB(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(yn(t,r))return;Bx.set(r),n.uniformMatrix3fv(this.addr,!1,Bx),xn(t,r)}}function aB(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(yn(t,r))return;zx.set(r),n.uniformMatrix4fv(this.addr,!1,zx),xn(t,r)}}function sB(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2iv(this.addr,e),xn(t,e)}}function uB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3iv(this.addr,e),xn(t,e)}}function cB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4iv(this.addr,e),xn(t,e)}}function fB(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2uiv(this.addr,e),xn(t,e)}}function hB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3uiv(this.addr,e),xn(t,e)}}function pB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4uiv(this.addr,e),xn(t,e)}}function mB(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?C1:b1;t.setTexture2D(e||s,a)}function vB(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||P1,a)}function gB(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||L1,a)}function _B(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||R1,a)}function yB(n){switch(n){case 5126:return eB;case 35664:return tB;case 35665:return nB;case 35666:return rB;case 35674:return iB;case 35675:return oB;case 35676:return aB;case 5124:case 35670:return sB;case 35667:case 35671:return lB;case 35668:case 35672:return uB;case 35669:case 35673:return cB;case 5125:return fB;case 36294:return dB;case 36295:return hB;case 36296:return pB;case 35678:case 36198:case 36298:case 36306:case 35682:return mB;case 35679:case 36299:case 36307:return vB;case 35680:case 36300:case 36308:case 36293:return gB;case 36289:case 36303:case 36311:case 36292:return _B}}function xB(n,e){n.uniform1fv(this.addr,e)}function SB(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function wB(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function EB(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function MB(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AB(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TB(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bB(n,e){n.uniform1iv(this.addr,e)}function CB(n,e){n.uniform2iv(this.addr,e)}function RB(n,e){n.uniform3iv(this.addr,e)}function PB(n,e){n.uniform4iv(this.addr,e)}function LB(n,e){n.uniform1uiv(this.addr,e)}function DB(n,e){n.uniform2uiv(this.addr,e)}function IB(n,e){n.uniform3uiv(this.addr,e)}function UB(n,e){n.uniform4uiv(this.addr,e)}function NB(n,e,t){const r=this.cache,a=e.length,s=Md(t,a);yn(r,s)||(n.uniform1iv(this.addr,s),xn(r,s));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||b1,s[c])}function FB(n,e,t){const r=this.cache,a=e.length,s=Md(t,a);yn(r,s)||(n.uniform1iv(this.addr,s),xn(r,s));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||P1,s[c])}function OB(n,e,t){const r=this.cache,a=e.length,s=Md(t,a);yn(r,s)||(n.uniform1iv(this.addr,s),xn(r,s));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||L1,s[c])}function kB(n,e,t){const r=this.cache,a=e.length,s=Md(t,a);yn(r,s)||(n.uniform1iv(this.addr,s),xn(r,s));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||R1,s[c])}function zB(n){switch(n){case 5126:return xB;case 35664:return SB;case 35665:return wB;case 35666:return EB;case 35674:return MB;case 35675:return AB;case 35676:return TB;case 5124:case 35670:return bB;case 35667:case 35671:return CB;case 35668:case 35672:return RB;case 35669:case 35673:return PB;case 5125:return LB;case 36294:return DB;case 36295:return IB;case 36296:return UB;case 35678:case 36198:case 36298:case 36306:case 35682:return NB;case 35679:case 36299:case 36307:return FB;case 35680:case 36300:case 36308:case 36293:return OB;case 36289:case 36303:case 36311:case 36292:return kB}}class BB{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yB(t.type)}}class HB{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zB(t.type)}}class VB{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let s=0,c=a.length;s!==c;++s){const u=a[s];u.setValue(e,t[u.id],r)}}}const Xp=/(\w+)(\])?(\[|\.)?/g;function Vx(n,e){n.seq.push(e),n.map[e.id]=e}function GB(n,e,t){const r=n.name,a=r.length;for(Xp.lastIndex=0;;){const s=Xp.exec(r),c=Xp.lastIndex;let u=s[1];const d=s[2]==="]",h=s[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){Vx(t,h===void 0?new BB(u,n,e):new HB(u,n,e));break}else{let m=t.map[u];m===void 0&&(m=new VB(u),Vx(t,m)),t=m}}}class bf{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);GB(s,c,this)}}setValue(e,t,r,a){const s=this.map[t];s!==void 0&&s.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let s=0,c=t.length;s!==c;++s){const u=t[s],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,s=e.length;a!==s;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Gx(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const WB=37297;let $B=0;function jB(n,e){const t=n.split(`
`),r=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=a;c<s;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}function XB(n){const e=Vt.getPrimaries(Vt.workingColorSpace),t=Vt.getPrimaries(n);let r;switch(e===t?r="":e===Bf&&t===zf?r="LinearDisplayP3ToLinearSRGB":e===zf&&t===Bf&&(r="LinearSRGBToLinearDisplayP3"),n){case Zi:case wd:return[r,"LinearTransferOETF"];case Fn:case rg:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function Wx(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(r&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+jB(n.getShaderSource(e),c)}else return a}function qB(n,e){const t=XB(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function YB(n,e){let t;switch(e){case qN:t="Linear";break;case YN:t="Reinhard";break;case KN:t="OptimizedCineon";break;case ZN:t="ACESFilmic";break;case JN:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KB(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wl).join(`
`)}function ZB(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function JB(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const s=n.getActiveAttrib(e,a),c=s.name;let u=1;s.type===n.FLOAT_MAT2&&(u=2),s.type===n.FLOAT_MAT3&&(u=3),s.type===n.FLOAT_MAT4&&(u=4),t[c]={type:s.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Wl(n){return n!==""}function $x(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QB=/^[ \t]*#include +<([\w\d./]+)>/gm;function qm(n){return n.replace(QB,t4)}const e4=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function t4(n,e){let t=xt[e];if(t===void 0){const r=e4.get(e);if(r!==void 0)t=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qm(t)}const n4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xx(n){return n.replace(n4,r4)}function r4(n,e,t,r){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function qx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i4(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===e1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wN?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function o4(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Sd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a4(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function s4(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tg:e="ENVMAP_BLENDING_MULTIPLY";break;case jN:e="ENVMAP_BLENDING_MIX";break;case XN:e="ENVMAP_BLENDING_ADD";break}return e}function l4(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function u4(n,e,t,r){const a=n.getContext(),s=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=i4(t),h=o4(t),p=a4(t),m=s4(t),g=l4(t),S=t.isWebGL2?"":KB(t),E=ZB(s),w=a.createProgram();let y,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wl).join(`
`),y.length>0&&(y+=`
`),_=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wl).join(`
`),_.length>0&&(_+=`
`)):(y=[qx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),_=[S,qx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ko?"#define TONE_MAPPING":"",t.toneMapping!==ko?xt.tonemapping_pars_fragment:"",t.toneMapping!==ko?YB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,qB("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wl).join(`
`)),c=qm(c),c=$x(c,t),c=jx(c,t),u=qm(u),u=$x(u,t),u=jx(u,t),c=Xx(c),u=Xx(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=T+y+c,R=T+_+u,P=Gx(a,a.VERTEX_SHADER,M),N=Gx(a,a.FRAGMENT_SHADER,R);a.attachShader(w,P),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function U(oe){if(n.debug.checkShaderErrors){const ne=a.getProgramInfoLog(w).trim(),pe=a.getShaderInfoLog(P).trim(),H=a.getShaderInfoLog(N).trim();let Q=!0,le=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,w,P,N);else{const re=Wx(a,P,"vertex"),j=Wx(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+re+`
`+j)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(pe===""||H==="")&&(le=!1);le&&(oe.diagnostics={runnable:Q,programLog:ne,vertexShader:{log:pe,prefix:y},fragmentShader:{log:H,prefix:_}})}a.deleteShader(P),a.deleteShader(N),se=new bf(a,w),C=JB(a,w)}let se;this.getUniforms=function(){return se===void 0&&U(this),se};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(w,WB)),O},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$B++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=N,this}let c4=0;class f4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new d4(e),t.set(e,r)),r}}class d4{constructor(e){this.id=c4++,this.code=e,this.usedTimes=0}}function h4(n,e,t,r,a,s,c){const u=new g1,d=new f4,h=[],p=a.isWebGL2,m=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return C===0?"uv":`uv${C}`}function y(C,O,oe,ne,pe){const H=ne.fog,Q=pe.geometry,le=C.isMeshStandardMaterial?ne.environment:null,re=(C.isMeshStandardMaterial?t:e).get(C.envMap||le),j=re&&re.mapping===Sd?re.image.height:null,ie=E[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const $=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,L=$!==void 0?$.length:0;let k=0;Q.morphAttributes.position!==void 0&&(k=1),Q.morphAttributes.normal!==void 0&&(k=2),Q.morphAttributes.color!==void 0&&(k=3);let W,Y,ee,Z;if(ie){const Sn=hr[ie];W=Sn.vertexShader,Y=Sn.fragmentShader}else W=C.vertexShader,Y=C.fragmentShader,d.update(C),ee=d.getVertexShaderID(C),Z=d.getFragmentShaderID(C);const _e=n.getRenderTarget(),ve=pe.isInstancedMesh===!0,be=pe.isBatchedMesh===!0,ke=!!C.map,ze=!!C.matcap,X=!!re,It=!!C.aoMap,Ve=!!C.lightMap,ue=!!C.bumpMap,ce=!!C.normalMap,xe=!!C.displacementMap,ge=!!C.emissiveMap,Me=!!C.metalnessMap,Ee=!!C.roughnessMap,Ne=C.anisotropy>0,Je=C.clearcoat>0,I=C.iridescence>0,b=C.sheen>0,q=C.transmission>0,Ae=Ne&&!!C.anisotropyMap,ye=Je&&!!C.clearcoatMap,Ce=Je&&!!C.clearcoatNormalMap,Ke=Je&&!!C.clearcoatRoughnessMap,Ue=I&&!!C.iridescenceMap,He=I&&!!C.iridescenceThicknessMap,ct=b&&!!C.sheenColorMap,Tt=b&&!!C.sheenRoughnessMap,De=!!C.specularMap,kt=!!C.specularColorMap,dt=!!C.specularIntensityMap,st=q&&!!C.transmissionMap,tt=q&&!!C.thicknessMap,$e=!!C.gradientMap,_t=!!C.alphaMap,V=C.alphaTest>0,Be=!!C.alphaHash,Pe=!!C.extensions,me=!!Q.attributes.uv1,Fe=!!Q.attributes.uv2,ot=!!Q.attributes.uv3;let Et=ko;return C.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Et=n.toneMapping),{isWebGL2:p,shaderID:ie,shaderType:C.type,shaderName:C.name,vertexShader:W,fragmentShader:Y,defines:C.defines,customVertexShaderID:ee,customFragmentShaderID:Z,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:be,instancing:ve,instancingColor:ve&&pe.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Zi,map:ke,matcap:ze,envMap:X,envMapMode:X&&re.mapping,envMapCubeUVHeight:j,aoMap:It,lightMap:Ve,bumpMap:ue,normalMap:ce,displacementMap:g&&xe,emissiveMap:ge,normalMapObjectSpace:ce&&C.normalMapType===cF,normalMapTangentSpace:ce&&C.normalMapType===c1,metalnessMap:Me,roughnessMap:Ee,anisotropy:Ne,anisotropyMap:Ae,clearcoat:Je,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ke,iridescence:I,iridescenceMap:Ue,iridescenceThicknessMap:He,sheen:b,sheenColorMap:ct,sheenRoughnessMap:Tt,specularMap:De,specularColorMap:kt,specularIntensityMap:dt,transmission:q,transmissionMap:st,thicknessMap:tt,gradientMap:$e,opaque:C.transparent===!1&&C.blending===Ps,alphaMap:_t,alphaTest:V,alphaHash:Be,combine:C.combine,mapUv:ke&&w(C.map.channel),aoMapUv:It&&w(C.aoMap.channel),lightMapUv:Ve&&w(C.lightMap.channel),bumpMapUv:ue&&w(C.bumpMap.channel),normalMapUv:ce&&w(C.normalMap.channel),displacementMapUv:xe&&w(C.displacementMap.channel),emissiveMapUv:ge&&w(C.emissiveMap.channel),metalnessMapUv:Me&&w(C.metalnessMap.channel),roughnessMapUv:Ee&&w(C.roughnessMap.channel),anisotropyMapUv:Ae&&w(C.anisotropyMap.channel),clearcoatMapUv:ye&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:He&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&w(C.sheenRoughnessMap.channel),specularMapUv:De&&w(C.specularMap.channel),specularColorMapUv:kt&&w(C.specularColorMap.channel),specularIntensityMapUv:dt&&w(C.specularIntensityMap.channel),transmissionMapUv:st&&w(C.transmissionMap.channel),thicknessMapUv:tt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ce||Ne),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:Fe,vertexUv3s:ot,pointsUvs:pe.isPoints===!0&&!!Q.attributes.uv&&(ke||_t),fog:!!H,useFog:C.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:pe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:k,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&oe.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ke&&C.map.isVideoTexture===!0&&Vt.getTransfer(C.map.colorSpace)===Kt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Xi,flipSided:C.side===mr,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Pe&&C.extensions.derivatives===!0,extensionFragDepth:Pe&&C.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function _(C){const O=[];if(C.shaderID?O.push(C.shaderID):(O.push(C.customVertexShaderID),O.push(C.customFragmentShaderID)),C.defines!==void 0)for(const oe in C.defines)O.push(oe),O.push(C.defines[oe]);return C.isRawShaderMaterial===!1&&(T(O,C),M(O,C),O.push(n.outputColorSpace)),O.push(C.customProgramCacheKey),O.join()}function T(C,O){C.push(O.precision),C.push(O.outputColorSpace),C.push(O.envMapMode),C.push(O.envMapCubeUVHeight),C.push(O.mapUv),C.push(O.alphaMapUv),C.push(O.lightMapUv),C.push(O.aoMapUv),C.push(O.bumpMapUv),C.push(O.normalMapUv),C.push(O.displacementMapUv),C.push(O.emissiveMapUv),C.push(O.metalnessMapUv),C.push(O.roughnessMapUv),C.push(O.anisotropyMapUv),C.push(O.clearcoatMapUv),C.push(O.clearcoatNormalMapUv),C.push(O.clearcoatRoughnessMapUv),C.push(O.iridescenceMapUv),C.push(O.iridescenceThicknessMapUv),C.push(O.sheenColorMapUv),C.push(O.sheenRoughnessMapUv),C.push(O.specularMapUv),C.push(O.specularColorMapUv),C.push(O.specularIntensityMapUv),C.push(O.transmissionMapUv),C.push(O.thicknessMapUv),C.push(O.combine),C.push(O.fogExp2),C.push(O.sizeAttenuation),C.push(O.morphTargetsCount),C.push(O.morphAttributeCount),C.push(O.numDirLights),C.push(O.numPointLights),C.push(O.numSpotLights),C.push(O.numSpotLightMaps),C.push(O.numHemiLights),C.push(O.numRectAreaLights),C.push(O.numDirLightShadows),C.push(O.numPointLightShadows),C.push(O.numSpotLightShadows),C.push(O.numSpotLightShadowsWithMaps),C.push(O.numLightProbes),C.push(O.shadowMapType),C.push(O.toneMapping),C.push(O.numClippingPlanes),C.push(O.numClipIntersection),C.push(O.depthPacking)}function M(C,O){u.disableAll(),O.isWebGL2&&u.enable(0),O.supportsVertexTextures&&u.enable(1),O.instancing&&u.enable(2),O.instancingColor&&u.enable(3),O.matcap&&u.enable(4),O.envMap&&u.enable(5),O.normalMapObjectSpace&&u.enable(6),O.normalMapTangentSpace&&u.enable(7),O.clearcoat&&u.enable(8),O.iridescence&&u.enable(9),O.alphaTest&&u.enable(10),O.vertexColors&&u.enable(11),O.vertexAlphas&&u.enable(12),O.vertexUv1s&&u.enable(13),O.vertexUv2s&&u.enable(14),O.vertexUv3s&&u.enable(15),O.vertexTangents&&u.enable(16),O.anisotropy&&u.enable(17),O.alphaHash&&u.enable(18),O.batching&&u.enable(19),C.push(u.mask),u.disableAll(),O.fog&&u.enable(0),O.useFog&&u.enable(1),O.flatShading&&u.enable(2),O.logarithmicDepthBuffer&&u.enable(3),O.skinning&&u.enable(4),O.morphTargets&&u.enable(5),O.morphNormals&&u.enable(6),O.morphColors&&u.enable(7),O.premultipliedAlpha&&u.enable(8),O.shadowMapEnabled&&u.enable(9),O.useLegacyLights&&u.enable(10),O.doubleSided&&u.enable(11),O.flipSided&&u.enable(12),O.useDepthPacking&&u.enable(13),O.dithering&&u.enable(14),O.transmission&&u.enable(15),O.sheen&&u.enable(16),O.opaque&&u.enable(17),O.pointsUvs&&u.enable(18),O.decodeVideoTexture&&u.enable(19),C.push(u.mask)}function R(C){const O=E[C.type];let oe;if(O){const ne=hr[O];oe=ag.clone(ne.uniforms)}else oe=C.uniforms;return oe}function P(C,O){let oe;for(let ne=0,pe=h.length;ne<pe;ne++){const H=h[ne];if(H.cacheKey===O){oe=H,++oe.usedTimes;break}}return oe===void 0&&(oe=new u4(n,O,C,s),h.push(oe)),oe}function N(C){if(--C.usedTimes===0){const O=h.indexOf(C);h[O]=h[h.length-1],h.pop(),C.destroy()}}function U(C){d.remove(C)}function se(){d.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:P,releaseProgram:N,releaseShaderCache:U,programs:h,dispose:se}}function p4(){let n=new WeakMap;function e(s){let c=n.get(s);return c===void 0&&(c={},n.set(s,c)),c}function t(s){n.delete(s)}function r(s,c,u){n.get(s)[c]=u}function a(){n=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function m4(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kx(){const n=[];let e=0;const t=[],r=[],a=[];function s(){e=0,t.length=0,r.length=0,a.length=0}function c(m,g,S,E,w,y){let _=n[e];return _===void 0?(_={id:m.id,object:m,geometry:g,material:S,groupOrder:E,renderOrder:m.renderOrder,z:w,group:y},n[e]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=S,_.groupOrder=E,_.renderOrder=m.renderOrder,_.z=w,_.group=y),e++,_}function u(m,g,S,E,w,y){const _=c(m,g,S,E,w,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(m,g,S,E,w,y){const _=c(m,g,S,E,w,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(m,g){t.length>1&&t.sort(m||m4),r.length>1&&r.sort(g||Yx),a.length>1&&a.sort(g||Yx)}function p(){for(let m=e,g=n.length;m<g;m++){const S=n[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:s,push:u,unshift:d,finish:p,sort:h}}function v4(){let n=new WeakMap;function e(r,a){const s=n.get(r);let c;return s===void 0?(c=new Kx,n.set(r,[c])):a>=s.length?(c=new Kx,s.push(c)):c=s[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function g4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function _4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let y4=0;function x4(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function S4(n,e){const t=new g4,r=_4(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new B);const s=new B,c=new Xt,u=new Xt;function d(p,m){let g=0,S=0,E=0;for(let ne=0;ne<9;ne++)a.probe[ne].set(0,0,0);let w=0,y=0,_=0,T=0,M=0,R=0,P=0,N=0,U=0,se=0,C=0;p.sort(x4);const O=m===!0?Math.PI:1;for(let ne=0,pe=p.length;ne<pe;ne++){const H=p[ne],Q=H.color,le=H.intensity,re=H.distance,j=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Q.r*le*O,S+=Q.g*le*O,E+=Q.b*le*O;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(H.sh.coefficients[ie],le);C++}else if(H.isDirectionalLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*O),H.castShadow){const $=H.shadow,L=r.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,a.directionalShadow[w]=L,a.directionalShadowMap[w]=j,a.directionalShadowMatrix[w]=H.shadow.matrix,R++}a.directional[w]=ie,w++}else if(H.isSpotLight){const ie=t.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(Q).multiplyScalar(le*O),ie.distance=re,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,a.spot[_]=ie;const $=H.shadow;if(H.map&&(a.spotLightMap[U]=H.map,U++,$.updateMatrices(H),H.castShadow&&se++),a.spotLightMatrix[_]=$.matrix,H.castShadow){const L=r.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,a.spotShadow[_]=L,a.spotShadowMap[_]=j,N++}_++}else if(H.isRectAreaLight){const ie=t.get(H);ie.color.copy(Q).multiplyScalar(le),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),a.rectArea[T]=ie,T++}else if(H.isPointLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*O),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const $=H.shadow,L=r.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,L.shadowCameraNear=$.camera.near,L.shadowCameraFar=$.camera.far,a.pointShadow[y]=L,a.pointShadowMap[y]=j,a.pointShadowMatrix[y]=H.shadow.matrix,P++}a.point[y]=ie,y++}else if(H.isHemisphereLight){const ie=t.get(H);ie.skyColor.copy(H.color).multiplyScalar(le*O),ie.groundColor.copy(H.groundColor).multiplyScalar(le*O),a.hemi[M]=ie,M++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Oe.LTC_FLOAT_1,a.rectAreaLTC2=Oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Oe.LTC_HALF_1,a.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=S,a.ambient[2]=E;const oe=a.hash;(oe.directionalLength!==w||oe.pointLength!==y||oe.spotLength!==_||oe.rectAreaLength!==T||oe.hemiLength!==M||oe.numDirectionalShadows!==R||oe.numPointShadows!==P||oe.numSpotShadows!==N||oe.numSpotMaps!==U||oe.numLightProbes!==C)&&(a.directional.length=w,a.spot.length=_,a.rectArea.length=T,a.point.length=y,a.hemi.length=M,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=N+U-se,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=se,a.numLightProbes=C,oe.directionalLength=w,oe.pointLength=y,oe.spotLength=_,oe.rectAreaLength=T,oe.hemiLength=M,oe.numDirectionalShadows=R,oe.numPointShadows=P,oe.numSpotShadows=N,oe.numSpotMaps=U,oe.numLightProbes=C,a.version=y4++)}function h(p,m){let g=0,S=0,E=0,w=0,y=0;const _=m.matrixWorldInverse;for(let T=0,M=p.length;T<M;T++){const R=p[T];if(R.isDirectionalLight){const P=a.directional[g];P.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(_),g++}else if(R.isSpotLight){const P=a.spot[E];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(_),E++}else if(R.isRectAreaLight){const P=a.rectArea[w];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(_),u.identity(),c.copy(R.matrixWorld),c.premultiply(_),u.extractRotation(c),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),w++}else if(R.isPointLight){const P=a.point[S];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(_),S++}else if(R.isHemisphereLight){const P=a.hemi[y];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(_),y++}}}return{setup:d,setupView:h,state:a}}function Zx(n,e){const t=new S4(n,e),r=[],a=[];function s(){r.length=0,a.length=0}function c(m){r.push(m)}function u(m){a.push(m)}function d(m){t.setup(r,m)}function h(m){t.setupView(r,m)}return{init:s,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function w4(n,e){let t=new WeakMap;function r(s,c=0){const u=t.get(s);let d;return u===void 0?(d=new Zx(n,e),t.set(s,[d])):c>=u.length?(d=new Zx(n,e),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:r,dispose:a}}class E4 extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lF,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M4 extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const A4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function b4(n,e,t){let r=new Ed;const a=new pt,s=new pt,c=new Gt,u=new E4({depthPacking:uF}),d=new M4,h={},p=t.maxTextureSize,m={[$o]:mr,[mr]:$o,[Xi]:Xi},g=new jo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:A4,fragmentShader:T4}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Yn;E.setAttribute("position",new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ai(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e1;let _=this.type;this.render=function(P,N,U){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const se=n.getRenderTarget(),C=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(Oo),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ne=_!==$i&&this.type===$i,pe=_===$i&&this.type!==$i;for(let H=0,Q=P.length;H<Q;H++){const le=P[H],re=le.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);const j=re.getFrameExtents();if(a.multiply(j),s.copy(re.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(s.x=Math.floor(p/j.x),a.x=s.x*j.x,re.mapSize.x=s.x),a.y>p&&(s.y=Math.floor(p/j.y),a.y=s.y*j.y,re.mapSize.y=s.y)),re.map===null||ne===!0||pe===!0){const $=this.type!==$i?{minFilter:Nn,magFilter:Nn}:{};re.map!==null&&re.map.dispose(),re.map=new Ra(a.x,a.y,$),re.map.texture.name=le.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();const ie=re.getViewportCount();for(let $=0;$<ie;$++){const L=re.getViewport($);c.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),oe.viewport(c),re.updateMatrices(le,$),r=re.getFrustum(),R(N,U,re.camera,le,this.type)}re.isPointLightShadow!==!0&&this.type===$i&&T(re,U),re.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(se,C,O)};function T(P,N){const U=e.update(w);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ra(a.x,a.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(N,null,U,g,w,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(N,null,U,S,w,null)}function M(P,N,U,se){let C=null;const O=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)C=O;else if(C=U.isPointLight===!0?d:u,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=C.uuid,ne=N.uuid;let pe=h[oe];pe===void 0&&(pe={},h[oe]=pe);let H=pe[ne];H===void 0&&(H=C.clone(),pe[ne]=H),C=H}if(C.visible=N.visible,C.wireframe=N.wireframe,se===$i?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:m[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=n.properties.get(C);oe.light=U}return C}function R(P,N,U,se,C){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===$i)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const ne=e.update(P),pe=P.material;if(Array.isArray(pe)){const H=ne.groups;for(let Q=0,le=H.length;Q<le;Q++){const re=H[Q],j=pe[re.materialIndex];if(j&&j.visible){const ie=M(P,j,se,C);P.onBeforeShadow(n,P,N,U,ne,ie,re),n.renderBufferDirect(U,null,ne,ie,P,re),P.onAfterShadow(n,P,N,U,ne,ie,re)}}}else if(pe.visible){const H=M(P,pe,se,C);P.onBeforeShadow(n,P,N,U,ne,H,null),n.renderBufferDirect(U,null,ne,H,P,null),P.onAfterShadow(n,P,N,U,ne,H,null)}}const oe=P.children;for(let ne=0,pe=oe.length;ne<pe;ne++)R(oe[ne],N,U,se,C)}}function C4(n,e,t){const r=t.isWebGL2;function a(){let V=!1;const Be=new Gt;let Pe=null;const me=new Gt(0,0,0,0);return{setMask:function(Fe){Pe!==Fe&&!V&&(n.colorMask(Fe,Fe,Fe,Fe),Pe=Fe)},setLocked:function(Fe){V=Fe},setClear:function(Fe,ot,Et,nn,Sn){Sn===!0&&(Fe*=nn,ot*=nn,Et*=nn),Be.set(Fe,ot,Et,nn),me.equals(Be)===!1&&(n.clearColor(Fe,ot,Et,nn),me.copy(Be))},reset:function(){V=!1,Pe=null,me.set(-1,0,0,0)}}}function s(){let V=!1,Be=null,Pe=null,me=null;return{setTest:function(Fe){Fe?be(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(Fe){Be!==Fe&&!V&&(n.depthMask(Fe),Be=Fe)},setFunc:function(Fe){if(Pe!==Fe){switch(Fe){case zN:n.depthFunc(n.NEVER);break;case BN:n.depthFunc(n.ALWAYS);break;case HN:n.depthFunc(n.LESS);break;case Of:n.depthFunc(n.LEQUAL);break;case VN:n.depthFunc(n.EQUAL);break;case GN:n.depthFunc(n.GEQUAL);break;case WN:n.depthFunc(n.GREATER);break;case $N:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=Fe}},setLocked:function(Fe){V=Fe},setClear:function(Fe){me!==Fe&&(n.clearDepth(Fe),me=Fe)},reset:function(){V=!1,Be=null,Pe=null,me=null}}}function c(){let V=!1,Be=null,Pe=null,me=null,Fe=null,ot=null,Et=null,nn=null,Sn=null;return{setTest:function(Lt){V||(Lt?be(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(Lt){Be!==Lt&&!V&&(n.stencilMask(Lt),Be=Lt)},setFunc:function(Lt,vn,zn){(Pe!==Lt||me!==vn||Fe!==zn)&&(n.stencilFunc(Lt,vn,zn),Pe=Lt,me=vn,Fe=zn)},setOp:function(Lt,vn,zn){(ot!==Lt||Et!==vn||nn!==zn)&&(n.stencilOp(Lt,vn,zn),ot=Lt,Et=vn,nn=zn)},setLocked:function(Lt){V=Lt},setClear:function(Lt){Sn!==Lt&&(n.clearStencil(Lt),Sn=Lt)},reset:function(){V=!1,Be=null,Pe=null,me=null,Fe=null,ot=null,Et=null,nn=null,Sn=null}}}const u=new a,d=new s,h=new c,p=new WeakMap,m=new WeakMap;let g={},S={},E=new WeakMap,w=[],y=null,_=!1,T=null,M=null,R=null,P=null,N=null,U=null,se=null,C=new nt(0,0,0),O=0,oe=!1,ne=null,pe=null,H=null,Q=null,le=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),j=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=ie>=2);let L=null,k={};const W=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ee=new Gt().fromArray(W),Z=new Gt().fromArray(Y);function _e(V,Be,Pe,me){const Fe=new Uint8Array(4),ot=n.createTexture();n.bindTexture(V,ot),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<Pe;Et++)r&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(Be,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Be+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return ot}const ve={};ve[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ve[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(n.DEPTH_TEST),d.setFunc(Of),ge(!1),Me(Iy),be(n.CULL_FACE),ce(Oo);function be(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function ke(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function ze(V,Be){return S[V]!==Be?(n.bindFramebuffer(V,Be),S[V]=Be,r&&(V===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=Be),V===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=Be)),!0):!1}function X(V,Be){let Pe=w,me=!1;if(V)if(Pe=E.get(Be),Pe===void 0&&(Pe=[],E.set(Be,Pe)),V.isWebGLMultipleRenderTargets){const Fe=V.texture;if(Pe.length!==Fe.length||Pe[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Et=Fe.length;ot<Et;ot++)Pe[ot]=n.COLOR_ATTACHMENT0+ot;Pe.length=Fe.length,me=!0}}else Pe[0]!==n.COLOR_ATTACHMENT0&&(Pe[0]=n.COLOR_ATTACHMENT0,me=!0);else Pe[0]!==n.BACK&&(Pe[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function It(V){return y!==V?(n.useProgram(V),y=V,!0):!1}const Ve={[xa]:n.FUNC_ADD,[MN]:n.FUNC_SUBTRACT,[AN]:n.FUNC_REVERSE_SUBTRACT};if(r)Ve[Oy]=n.MIN,Ve[ky]=n.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Ve[Oy]=V.MIN_EXT,Ve[ky]=V.MAX_EXT)}const ue={[TN]:n.ZERO,[bN]:n.ONE,[CN]:n.SRC_COLOR,[zm]:n.SRC_ALPHA,[UN]:n.SRC_ALPHA_SATURATE,[DN]:n.DST_COLOR,[PN]:n.DST_ALPHA,[RN]:n.ONE_MINUS_SRC_COLOR,[Bm]:n.ONE_MINUS_SRC_ALPHA,[IN]:n.ONE_MINUS_DST_COLOR,[LN]:n.ONE_MINUS_DST_ALPHA,[NN]:n.CONSTANT_COLOR,[FN]:n.ONE_MINUS_CONSTANT_COLOR,[ON]:n.CONSTANT_ALPHA,[kN]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(V,Be,Pe,me,Fe,ot,Et,nn,Sn,Lt){if(V===Oo){_===!0&&(ke(n.BLEND),_=!1);return}if(_===!1&&(be(n.BLEND),_=!0),V!==EN){if(V!==T||Lt!==oe){if((M!==xa||N!==xa)&&(n.blendEquation(n.FUNC_ADD),M=xa,N=xa),Lt)switch(V){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uy:n.blendFunc(n.ONE,n.ONE);break;case Ny:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fy:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uy:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ny:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fy:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,P=null,U=null,se=null,C.set(0,0,0),O=0,T=V,oe=Lt}return}Fe=Fe||Be,ot=ot||Pe,Et=Et||me,(Be!==M||Fe!==N)&&(n.blendEquationSeparate(Ve[Be],Ve[Fe]),M=Be,N=Fe),(Pe!==R||me!==P||ot!==U||Et!==se)&&(n.blendFuncSeparate(ue[Pe],ue[me],ue[ot],ue[Et]),R=Pe,P=me,U=ot,se=Et),(nn.equals(C)===!1||Sn!==O)&&(n.blendColor(nn.r,nn.g,nn.b,Sn),C.copy(nn),O=Sn),T=V,oe=!1}function xe(V,Be){V.side===Xi?ke(n.CULL_FACE):be(n.CULL_FACE);let Pe=V.side===mr;Be&&(Pe=!Pe),ge(Pe),V.blending===Ps&&V.transparent===!1?ce(Oo):ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const me=V.stencilWrite;h.setTest(me),me&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ne(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){ne!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),ne=V)}function Me(V){V!==xN?(be(n.CULL_FACE),V!==pe&&(V===Iy?n.cullFace(n.BACK):V===SN?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),pe=V}function Ee(V){V!==H&&(j&&n.lineWidth(V),H=V)}function Ne(V,Be,Pe){V?(be(n.POLYGON_OFFSET_FILL),(Q!==Be||le!==Pe)&&(n.polygonOffset(Be,Pe),Q=Be,le=Pe)):ke(n.POLYGON_OFFSET_FILL)}function Je(V){V?be(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function I(V){V===void 0&&(V=n.TEXTURE0+re-1),L!==V&&(n.activeTexture(V),L=V)}function b(V,Be,Pe){Pe===void 0&&(L===null?Pe=n.TEXTURE0+re-1:Pe=L);let me=k[Pe];me===void 0&&(me={type:void 0,texture:void 0},k[Pe]=me),(me.type!==V||me.texture!==Be)&&(L!==Pe&&(n.activeTexture(Pe),L=Pe),n.bindTexture(V,Be||ve[V]),me.type=V,me.texture=Be)}function q(){const V=k[L];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(V){ee.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function st(V){Z.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function tt(V,Be){let Pe=m.get(Be);Pe===void 0&&(Pe=new WeakMap,m.set(Be,Pe));let me=Pe.get(V);me===void 0&&(me=n.getUniformBlockIndex(Be,V.name),Pe.set(V,me))}function $e(V,Be){const me=m.get(Be).get(V);p.get(Be)!==me&&(n.uniformBlockBinding(Be,me,V.__bindingPointIndex),p.set(Be,me))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),r===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},L=null,k={},S={},E=new WeakMap,w=[],y=null,_=!1,T=null,M=null,R=null,P=null,N=null,U=null,se=null,C=new nt(0,0,0),O=0,oe=!1,ne=null,pe=null,H=null,Q=null,le=null,ee.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:be,disable:ke,bindFramebuffer:ze,drawBuffers:X,useProgram:It,setBlending:ce,setMaterial:xe,setFlipSided:ge,setCullFace:Me,setLineWidth:Ee,setPolygonOffset:Ne,setScissorTest:Je,activeTexture:I,bindTexture:b,unbindTexture:q,compressedTexImage2D:Ae,compressedTexImage3D:ye,texImage2D:De,texImage3D:kt,updateUBOMapping:tt,uniformBlockBinding:$e,texStorage2D:ct,texStorage3D:Tt,texSubImage2D:Ce,texSubImage3D:Ke,compressedTexSubImage2D:Ue,compressedTexSubImage3D:He,scissor:dt,viewport:st,reset:_t}}function R4(n,e,t,r,a,s,c){const u=a.isWebGL2,d=a.maxTextures,h=a.maxCubemapSize,p=a.maxTextureSize,m=a.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let w;const y=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,b){return _?new OffscreenCanvas(I,b):Vf("canvas")}function M(I,b,q,Ae){let ye=1;if((I.width>Ae||I.height>Ae)&&(ye=Ae/Math.max(I.width,I.height)),ye<1||b===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Ce=b?Hf:Math.floor,Ke=Ce(ye*I.width),Ue=Ce(ye*I.height);w===void 0&&(w=T(Ke,Ue));const He=q?T(Ke,Ue):w;return He.width=Ke,He.height=Ue,He.getContext("2d").drawImage(I,0,0,Ke,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Ke+"x"+Ue+")."),He}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function R(I){return Xm(I.width)&&Xm(I.height)}function P(I){return u?!1:I.wrapS!==oi||I.wrapT!==oi||I.minFilter!==Nn&&I.minFilter!==zr}function N(I,b){return I.generateMipmaps&&b&&I.minFilter!==Nn&&I.minFilter!==zr}function U(I){n.generateMipmap(I)}function se(I,b,q,Ae,ye=!1){if(u===!1)return b;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ce=b;if(b===n.RED&&(q===n.FLOAT&&(Ce=n.R32F),q===n.HALF_FLOAT&&(Ce=n.R16F),q===n.UNSIGNED_BYTE&&(Ce=n.R8)),b===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(Ce=n.R8UI),q===n.UNSIGNED_SHORT&&(Ce=n.R16UI),q===n.UNSIGNED_INT&&(Ce=n.R32UI),q===n.BYTE&&(Ce=n.R8I),q===n.SHORT&&(Ce=n.R16I),q===n.INT&&(Ce=n.R32I)),b===n.RG&&(q===n.FLOAT&&(Ce=n.RG32F),q===n.HALF_FLOAT&&(Ce=n.RG16F),q===n.UNSIGNED_BYTE&&(Ce=n.RG8)),b===n.RGBA){const Ke=ye?kf:Vt.getTransfer(Ae);q===n.FLOAT&&(Ce=n.RGBA32F),q===n.HALF_FLOAT&&(Ce=n.RGBA16F),q===n.UNSIGNED_BYTE&&(Ce=Ke===Kt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(Ce=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(Ce=n.RGB5_A1)}return(Ce===n.R16F||Ce===n.R32F||Ce===n.RG16F||Ce===n.RG32F||Ce===n.RGBA16F||Ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function C(I,b,q){return N(I,q)===!0||I.isFramebufferTexture&&I.minFilter!==Nn&&I.minFilter!==zr?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function O(I){return I===Nn||I===zy||I===xp?n.NEAREST:n.LINEAR}function oe(I){const b=I.target;b.removeEventListener("dispose",oe),pe(b),b.isVideoTexture&&E.delete(b)}function ne(I){const b=I.target;b.removeEventListener("dispose",ne),Q(b)}function pe(I){const b=r.get(I);if(b.__webglInit===void 0)return;const q=I.source,Ae=y.get(q);if(Ae){const ye=Ae[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(I),Object.keys(Ae).length===0&&y.delete(q)}r.remove(I)}function H(I){const b=r.get(I);n.deleteTexture(b.__webglTexture);const q=I.source,Ae=y.get(q);delete Ae[b.__cacheKey],c.memory.textures--}function Q(I){const b=I.texture,q=r.get(I),Ae=r.get(b);if(Ae.__webglTexture!==void 0&&(n.deleteTexture(Ae.__webglTexture),c.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(q.__webglFramebuffer[ye]))for(let Ce=0;Ce<q.__webglFramebuffer[ye].length;Ce++)n.deleteFramebuffer(q.__webglFramebuffer[ye][Ce]);else n.deleteFramebuffer(q.__webglFramebuffer[ye]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ye])}else{if(Array.isArray(q.__webglFramebuffer))for(let ye=0;ye<q.__webglFramebuffer.length;ye++)n.deleteFramebuffer(q.__webglFramebuffer[ye]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ye=0;ye<q.__webglColorRenderbuffer.length;ye++)q.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ye]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ye=0,Ce=b.length;ye<Ce;ye++){const Ke=r.get(b[ye]);Ke.__webglTexture&&(n.deleteTexture(Ke.__webglTexture),c.memory.textures--),r.remove(b[ye])}r.remove(b),r.remove(I)}let le=0;function re(){le=0}function j(){const I=le;return I>=d&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+d),le+=1,I}function ie(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function $(I,b){const q=r.get(I);if(I.isVideoTexture&&Ne(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){const Ae=I.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,I,b);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+b)}function L(I,b){const q=r.get(I);if(I.version>0&&q.__version!==I.version){be(q,I,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+b)}function k(I,b){const q=r.get(I);if(I.version>0&&q.__version!==I.version){be(q,I,b);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+b)}function W(I,b){const q=r.get(I);if(I.version>0&&q.__version!==I.version){ke(q,I,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+b)}const Y={[Gm]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Wm]:n.MIRRORED_REPEAT},ee={[Nn]:n.NEAREST,[zy]:n.NEAREST_MIPMAP_NEAREST,[xp]:n.NEAREST_MIPMAP_LINEAR,[zr]:n.LINEAR,[QN]:n.LINEAR_MIPMAP_NEAREST,[au]:n.LINEAR_MIPMAP_LINEAR},Z={[fF]:n.NEVER,[gF]:n.ALWAYS,[dF]:n.LESS,[f1]:n.LEQUAL,[hF]:n.EQUAL,[vF]:n.GEQUAL,[pF]:n.GREATER,[mF]:n.NOTEQUAL};function _e(I,b,q){if(q?(n.texParameteri(I,n.TEXTURE_WRAP_S,Y[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Y[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Y[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ee[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ee[b.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==oi||b.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,O(b.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,O(b.minFilter)),b.minFilter!==Nn&&b.minFilter!==zr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ae=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Nn||b.minFilter!==xp&&b.minFilter!==au||b.type===qi&&e.has("OES_texture_float_linear")===!1||u===!1&&b.type===su&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||r.get(b).__currentAnisotropy)&&(n.texParameterf(I,Ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy)}}function ve(I,b){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",oe));const Ae=b.source;let ye=y.get(Ae);ye===void 0&&(ye={},y.set(Ae,ye));const Ce=ie(b);if(Ce!==I.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ye[Ce].usedTimes++;const Ke=ye[I.__cacheKey];Ke!==void 0&&(ye[I.__cacheKey].usedTimes--,Ke.usedTimes===0&&H(b)),I.__cacheKey=Ce,I.__webglTexture=ye[Ce].texture}return q}function be(I,b,q){let Ae=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Ae=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Ae=n.TEXTURE_3D);const ye=ve(I,b),Ce=b.source;t.bindTexture(Ae,I.__webglTexture,n.TEXTURE0+q);const Ke=r.get(Ce);if(Ce.version!==Ke.__version||ye===!0){t.activeTexture(n.TEXTURE0+q);const Ue=Vt.getPrimaries(Vt.workingColorSpace),He=b.colorSpace===Hr?null:Vt.getPrimaries(b.colorSpace),ct=b.colorSpace===Hr||Ue===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Tt=P(b)&&R(b.image)===!1;let De=M(b.image,Tt,!1,p);De=Je(b,De);const kt=R(De)||u,dt=s.convert(b.format,b.colorSpace);let st=s.convert(b.type),tt=se(b.internalFormat,dt,st,b.colorSpace,b.isVideoTexture);_e(Ae,b,kt);let $e;const _t=b.mipmaps,V=u&&b.isVideoTexture!==!0&&tt!==l1,Be=Ke.__version===void 0||ye===!0,Pe=C(b,De,kt);if(b.isDepthTexture)tt=n.DEPTH_COMPONENT,u?b.type===qi?tt=n.DEPTH_COMPONENT32F:b.type===Uo?tt=n.DEPTH_COMPONENT24:b.type===Aa?tt=n.DEPTH24_STENCIL8:tt=n.DEPTH_COMPONENT16:b.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ta&&tt===n.DEPTH_COMPONENT&&b.type!==ng&&b.type!==Uo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Uo,st=s.convert(b.type)),b.format===Vs&&tt===n.DEPTH_COMPONENT&&(tt=n.DEPTH_STENCIL,b.type!==Aa&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Aa,st=s.convert(b.type))),Be&&(V?t.texStorage2D(n.TEXTURE_2D,1,tt,De.width,De.height):t.texImage2D(n.TEXTURE_2D,0,tt,De.width,De.height,0,dt,st,null));else if(b.isDataTexture)if(_t.length>0&&kt){V&&Be&&t.texStorage2D(n.TEXTURE_2D,Pe,tt,_t[0].width,_t[0].height);for(let me=0,Fe=_t.length;me<Fe;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,dt,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,dt,st,$e.data);b.generateMipmaps=!1}else V?(Be&&t.texStorage2D(n.TEXTURE_2D,Pe,tt,De.width,De.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,De.width,De.height,dt,st,De.data)):t.texImage2D(n.TEXTURE_2D,0,tt,De.width,De.height,0,dt,st,De.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,tt,_t[0].width,_t[0].height,De.depth);for(let me=0,Fe=_t.length;me<Fe;me++)$e=_t[me],b.format!==Br?dt!==null?V?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,De.depth,dt,$e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,tt,$e.width,$e.height,De.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,De.depth,dt,st,$e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,tt,$e.width,$e.height,De.depth,0,dt,st,$e.data)}else{V&&Be&&t.texStorage2D(n.TEXTURE_2D,Pe,tt,_t[0].width,_t[0].height);for(let me=0,Fe=_t.length;me<Fe;me++)$e=_t[me],b.format!==Br?dt!==null?V?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,dt,$e.data):t.compressedTexImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,dt,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,dt,st,$e.data)}else if(b.isDataArrayTexture)V?(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,tt,De.width,De.height,De.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,dt,st,De.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,De.width,De.height,De.depth,0,dt,st,De.data);else if(b.isData3DTexture)V?(Be&&t.texStorage3D(n.TEXTURE_3D,Pe,tt,De.width,De.height,De.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,dt,st,De.data)):t.texImage3D(n.TEXTURE_3D,0,tt,De.width,De.height,De.depth,0,dt,st,De.data);else if(b.isFramebufferTexture){if(Be)if(V)t.texStorage2D(n.TEXTURE_2D,Pe,tt,De.width,De.height);else{let me=De.width,Fe=De.height;for(let ot=0;ot<Pe;ot++)t.texImage2D(n.TEXTURE_2D,ot,tt,me,Fe,0,dt,st,null),me>>=1,Fe>>=1}}else if(_t.length>0&&kt){V&&Be&&t.texStorage2D(n.TEXTURE_2D,Pe,tt,_t[0].width,_t[0].height);for(let me=0,Fe=_t.length;me<Fe;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,dt,st,$e):t.texImage2D(n.TEXTURE_2D,me,tt,dt,st,$e);b.generateMipmaps=!1}else V?(Be&&t.texStorage2D(n.TEXTURE_2D,Pe,tt,De.width,De.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,st,De)):t.texImage2D(n.TEXTURE_2D,0,tt,dt,st,De);N(b,kt)&&U(Ae),Ke.__version=Ce.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ke(I,b,q){if(b.image.length!==6)return;const Ae=ve(I,b),ye=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+q);const Ce=r.get(ye);if(ye.version!==Ce.__version||Ae===!0){t.activeTexture(n.TEXTURE0+q);const Ke=Vt.getPrimaries(Vt.workingColorSpace),Ue=b.colorSpace===Hr?null:Vt.getPrimaries(b.colorSpace),He=b.colorSpace===Hr||Ke===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const ct=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,De=[];for(let me=0;me<6;me++)!ct&&!Tt?De[me]=M(b.image[me],!1,!0,h):De[me]=Tt?b.image[me].image:b.image[me],De[me]=Je(b,De[me]);const kt=De[0],dt=R(kt)||u,st=s.convert(b.format,b.colorSpace),tt=s.convert(b.type),$e=se(b.internalFormat,st,tt,b.colorSpace),_t=u&&b.isVideoTexture!==!0,V=Ce.__version===void 0||Ae===!0;let Be=C(b,kt,dt);_e(n.TEXTURE_CUBE_MAP,b,dt);let Pe;if(ct){_t&&V&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,$e,kt.width,kt.height);for(let me=0;me<6;me++){Pe=De[me].mipmaps;for(let Fe=0;Fe<Pe.length;Fe++){const ot=Pe[Fe];b.format!==Br?st!==null?_t?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,0,0,ot.width,ot.height,st,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,$e,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,0,0,ot.width,ot.height,st,tt,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,$e,ot.width,ot.height,0,st,tt,ot.data)}}}else{Pe=b.mipmaps,_t&&V&&(Pe.length>0&&Be++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,$e,De[0].width,De[0].height));for(let me=0;me<6;me++)if(Tt){_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,De[me].width,De[me].height,st,tt,De[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,De[me].width,De[me].height,0,st,tt,De[me].data);for(let Fe=0;Fe<Pe.length;Fe++){const Et=Pe[Fe].image[me].image;_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,0,0,Et.width,Et.height,st,tt,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,$e,Et.width,Et.height,0,st,tt,Et.data)}}else{_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,st,tt,De[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,st,tt,De[me]);for(let Fe=0;Fe<Pe.length;Fe++){const ot=Pe[Fe];_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,0,0,st,tt,ot.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,$e,st,tt,ot.image[me])}}}N(b,dt)&&U(n.TEXTURE_CUBE_MAP),Ce.__version=ye.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ze(I,b,q,Ae,ye,Ce){const Ke=s.convert(q.format,q.colorSpace),Ue=s.convert(q.type),He=se(q.internalFormat,Ke,Ue,q.colorSpace);if(!r.get(b).__hasExternalTextures){const Tt=Math.max(1,b.width>>Ce),De=Math.max(1,b.height>>Ce);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,He,Tt,De,b.depth,0,Ke,Ue,null):t.texImage2D(ye,Ce,He,Tt,De,0,Ke,Ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ee(b)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ye,r.get(q).__webglTexture,0,Me(b)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ye,r.get(q).__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function X(I,b,q){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer&&!b.stencilBuffer){let Ae=u===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||Ee(b)){const ye=b.depthTexture;ye&&ye.isDepthTexture&&(ye.type===qi?Ae=n.DEPTH_COMPONENT32F:ye.type===Uo&&(Ae=n.DEPTH_COMPONENT24));const Ce=Me(b);Ee(b)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Ae,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,Ae,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(b.depthBuffer&&b.stencilBuffer){const Ae=Me(b);q&&Ee(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,b.width,b.height):Ee(b)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{const Ae=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ye=0;ye<Ae.length;ye++){const Ce=Ae[ye],Ke=s.convert(Ce.format,Ce.colorSpace),Ue=s.convert(Ce.type),He=se(Ce.internalFormat,Ke,Ue,Ce.colorSpace),ct=Me(b);q&&Ee(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,He,b.width,b.height):Ee(b)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,He,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,He,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const Ae=r.get(b.depthTexture).__webglTexture,ye=Me(b);if(b.depthTexture.format===Ta)Ee(b)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0);else if(b.depthTexture.format===Vs)Ee(b)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function Ve(I){const b=r.get(I),q=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");It(b.__webglFramebuffer,I)}else if(q){b.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Ae]),b.__webglDepthbuffer[Ae]=n.createRenderbuffer(),X(b.__webglDepthbuffer[Ae],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),X(b.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(I,b,q){const Ae=r.get(I);b!==void 0&&ze(Ae.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ve(I)}function ce(I){const b=I.texture,q=r.get(I),Ae=r.get(b);I.addEventListener("dispose",ne),I.isWebGLMultipleRenderTargets!==!0&&(Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture()),Ae.__version=b.version,c.memory.textures++);const ye=I.isWebGLCubeRenderTarget===!0,Ce=I.isWebGLMultipleRenderTargets===!0,Ke=R(I)||u;if(ye){q.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(u&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Ue]=[];for(let He=0;He<b.mipmaps.length;He++)q.__webglFramebuffer[Ue][He]=n.createFramebuffer()}else q.__webglFramebuffer[Ue]=n.createFramebuffer()}else{if(u&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)q.__webglFramebuffer[Ue]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ce)if(a.drawBuffers){const Ue=I.texture;for(let He=0,ct=Ue.length;He<ct;He++){const Tt=r.get(Ue[He]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&I.samples>0&&Ee(I)===!1){const Ue=Ce?b:[b];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let He=0;He<Ue.length;He++){const ct=Ue[He];q.__webglColorRenderbuffer[He]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[He]);const Tt=s.convert(ct.format,ct.colorSpace),De=s.convert(ct.type),kt=se(ct.internalFormat,Tt,De,ct.colorSpace,I.isXRRenderTarget===!0),dt=Me(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,kt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,q.__webglColorRenderbuffer[He])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),X(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,Ae.__webglTexture),_e(n.TEXTURE_CUBE_MAP,b,Ke);for(let Ue=0;Ue<6;Ue++)if(u&&b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)ze(q.__webglFramebuffer[Ue][He],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,He);else ze(q.__webglFramebuffer[Ue],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);N(b,Ke)&&U(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){const Ue=I.texture;for(let He=0,ct=Ue.length;He<ct;He++){const Tt=Ue[He],De=r.get(Tt);t.bindTexture(n.TEXTURE_2D,De.__webglTexture),_e(n.TEXTURE_2D,Tt,Ke),ze(q.__webglFramebuffer,I,Tt,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,0),N(Tt,Ke)&&U(n.TEXTURE_2D)}t.unbindTexture()}else{let Ue=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(u?Ue=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ue,Ae.__webglTexture),_e(Ue,b,Ke),u&&b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)ze(q.__webglFramebuffer[He],I,b,n.COLOR_ATTACHMENT0,Ue,He);else ze(q.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,Ue,0);N(b,Ke)&&U(Ue),t.unbindTexture()}I.depthBuffer&&Ve(I)}function xe(I){const b=R(I)||u,q=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let Ae=0,ye=q.length;Ae<ye;Ae++){const Ce=q[Ae];if(N(Ce,b)){const Ke=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ue=r.get(Ce).__webglTexture;t.bindTexture(Ke,Ue),U(Ke),t.unbindTexture()}}}function ge(I){if(u&&I.samples>0&&Ee(I)===!1){const b=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],q=I.width,Ae=I.height;let ye=n.COLOR_BUFFER_BIT;const Ce=[],Ke=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=r.get(I),He=I.isWebGLMultipleRenderTargets===!0;if(He)for(let ct=0;ct<b.length;ct++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ct=0;ct<b.length;ct++){Ce.push(n.COLOR_ATTACHMENT0+ct),I.depthBuffer&&Ce.push(Ke);const Tt=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(Tt===!1&&(I.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),He&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[ct]),Tt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ke])),He){const De=r.get(b[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,q,Ae,0,0,q,Ae,ye,n.NEAREST),S&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),He)for(let ct=0;ct<b.length;ct++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[ct]);const Tt=r.get(b[ct]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function Me(I){return Math.min(m,I.samples)}function Ee(I){const b=r.get(I);return u&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ne(I){const b=c.render.frame;E.get(I)!==b&&(E.set(I,b),I.update())}function Je(I,b){const q=I.colorSpace,Ae=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===jm||q!==Zi&&q!==Hr&&(Vt.getTransfer(q)===Kt?u===!1?e.has("EXT_sRGB")===!0&&Ae===Br?(I.format=jm,I.minFilter=zr,I.generateMipmaps=!1):b=p1.sRGBToLinear(b):(Ae!==Br||ye!==zo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}this.allocateTextureUnit=j,this.resetTextureUnits=re,this.setTexture2D=$,this.setTexture2DArray=L,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=ue,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Ee}function P4(n,e,t){const r=t.isWebGL2;function a(s,c=Hr){let u;const d=Vt.getTransfer(c);if(s===zo)return n.UNSIGNED_BYTE;if(s===r1)return n.UNSIGNED_SHORT_4_4_4_4;if(s===i1)return n.UNSIGNED_SHORT_5_5_5_1;if(s===eF)return n.BYTE;if(s===tF)return n.SHORT;if(s===ng)return n.UNSIGNED_SHORT;if(s===n1)return n.INT;if(s===Uo)return n.UNSIGNED_INT;if(s===qi)return n.FLOAT;if(s===su)return r?n.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(s===nF)return n.ALPHA;if(s===Br)return n.RGBA;if(s===rF)return n.LUMINANCE;if(s===iF)return n.LUMINANCE_ALPHA;if(s===Ta)return n.DEPTH_COMPONENT;if(s===Vs)return n.DEPTH_STENCIL;if(s===jm)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(s===oF)return n.RED;if(s===o1)return n.RED_INTEGER;if(s===aF)return n.RG;if(s===a1)return n.RG_INTEGER;if(s===s1)return n.RGBA_INTEGER;if(s===Sp||s===wp||s===Ep||s===Mp)if(d===Kt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Sp)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wp)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ep)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mp)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Sp)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wp)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ep)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mp)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===By||s===Hy||s===Vy||s===Gy)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===By)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hy)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vy)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gy)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===l1)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wy||s===$y)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Wy)return d===Kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===$y)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jy||s===Xy||s===qy||s===Yy||s===Ky||s===Zy||s===Jy||s===Qy||s===ex||s===tx||s===nx||s===rx||s===ix||s===ox)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===jy)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xy)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qy)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yy)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ky)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zy)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jy)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qy)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ex)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tx)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nx)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rx)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ix)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ox)return d===Kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ap||s===ax||s===sx)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Ap)return d===Kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ax)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sx)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sF||s===lx||s===ux||s===cx)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ap)return u.COMPRESSED_RED_RGTC1_EXT;if(s===lx)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ux)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cx)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Aa?r?n.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class L4 extends Tr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $l extends nr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D4={type:"move"};class qp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,s=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),_=this._getHandJoint(h,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),S=.02,E=.005;h.inputState.pinching&&g>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,r),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&s!==null&&(a=s),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(D4)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new $l;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class I4 extends Fa{constructor(e,t){super();const r=this;let a=null,s=1,c=null,u="local-floor",d=1,h=null,p=null,m=null,g=null,S=null,E=null;const w=t.getContextAttributes();let y=null,_=null;const T=[],M=[],R=new pt;let P=null;const N=new Tr;N.layers.enable(1),N.viewport=new Gt;const U=new Tr;U.layers.enable(2),U.viewport=new Gt;const se=[N,U],C=new L4;C.layers.enable(1),C.layers.enable(2);let O=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=T[W];return Y===void 0&&(Y=new qp,T[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=T[W];return Y===void 0&&(Y=new qp,T[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=T[W];return Y===void 0&&(Y=new qp,T[W]=Y),Y.getHandSpace()};function ne(W){const Y=M.indexOf(W.inputSource);if(Y===-1)return;const ee=T[Y];ee!==void 0&&(ee.update(W.inputSource,W.frame,h||c),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function pe(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",H);for(let W=0;W<T.length;W++){const Y=M[W];Y!==null&&(M[W]=null,T[W].disconnect(Y))}O=null,oe=null,e.setRenderTarget(y),S=null,g=null,m=null,a=null,_=null,k.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:a.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(a,t,Y),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new Ra(S.framebufferWidth,S.framebufferHeight,{format:Br,type:zo,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let Y=null,ee=null,Z=null;w.depth&&(Z=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=w.stencil?Vs:Ta,ee=w.stencil?Aa:Uo);const _e={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};m=new XRWebGLBinding(a,t),g=m.createProjectionLayer(_e),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),_=new Ra(g.textureWidth,g.textureHeight,{format:Br,type:zo,depthTexture:new T1(g.textureWidth,g.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const ve=e.properties.get(_);ve.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),k.setContext(a),k.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(W){for(let Y=0;Y<W.removed.length;Y++){const ee=W.removed[Y],Z=M.indexOf(ee);Z>=0&&(M[Z]=null,T[Z].disconnect(ee))}for(let Y=0;Y<W.added.length;Y++){const ee=W.added[Y];let Z=M.indexOf(ee);if(Z===-1){for(let ve=0;ve<T.length;ve++)if(ve>=M.length){M.push(ee),Z=ve;break}else if(M[ve]===null){M[ve]=ee,Z=ve;break}if(Z===-1)break}const _e=T[Z];_e&&_e.connect(ee)}}const Q=new B,le=new B;function re(W,Y,ee){Q.setFromMatrixPosition(Y.matrixWorld),le.setFromMatrixPosition(ee.matrixWorld);const Z=Q.distanceTo(le),_e=Y.projectionMatrix.elements,ve=ee.projectionMatrix.elements,be=_e[14]/(_e[10]-1),ke=_e[14]/(_e[10]+1),ze=(_e[9]+1)/_e[5],X=(_e[9]-1)/_e[5],It=(_e[8]-1)/_e[0],Ve=(ve[8]+1)/ve[0],ue=be*It,ce=be*Ve,xe=Z/(-It+Ve),ge=xe*-It;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Me=be+xe,Ee=ke+xe,Ne=ue-ge,Je=ce+(Z-ge),I=ze*ke/Ee*Me,b=X*ke/Ee*Me;W.projectionMatrix.makePerspective(Ne,Je,I,b,Me,Ee),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;C.near=U.near=N.near=W.near,C.far=U.far=N.far=W.far,(O!==C.near||oe!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,oe=C.far);const Y=W.parent,ee=C.cameras;j(C,Y);for(let Z=0;Z<ee.length;Z++)j(ee[Z],Y);ee.length===2?re(C,N,U):C.projectionMatrix.copy(N.projectionMatrix),ie(W,C,Y)};function ie(W,Y,ee){ee===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=uu*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(W){d=W,g!==null&&(g.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)};let $=null;function L(W,Y){if(p=Y.getViewerPose(h||c),E=Y,p!==null){const ee=p.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let Z=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,Z=!0);for(let _e=0;_e<ee.length;_e++){const ve=ee[_e];let be=null;if(S!==null)be=S.getViewport(ve);else{const ze=m.getViewSubImage(g,ve);be=ze.viewport,_e===0&&(e.setRenderTargetTextures(_,ze.colorTexture,g.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(_))}let ke=se[_e];ke===void 0&&(ke=new Tr,ke.layers.enable(_e),ke.viewport=new Gt,se[_e]=ke),ke.matrix.fromArray(ve.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ve.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(C.matrix.copy(ke.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Z===!0&&C.cameras.push(ke)}}for(let ee=0;ee<T.length;ee++){const Z=M[ee],_e=T[ee];Z!==null&&_e!==void 0&&_e.update(Z,Y,h||c)}$&&$(W,Y),Y.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Y}),E=null}const k=new A1;k.setAnimationLoop(L),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function U4(n,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,w1(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,T,M,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),m(y,_)):_.isMeshPhongMaterial?(s(y,_),p(y,_)):_.isMeshStandardMaterial?(s(y,_),g(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(s(y,_),E(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),w(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&u(y,_)):_.isPointsMaterial?d(y,_,T,M):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===mr&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===mr&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const T=e.get(_).envMap;if(T&&(y.envMap.value=T,y.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*M,t(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function u(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function d(y,_,T,M){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*T,y.scale.value=M*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function m(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,T){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===mr&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const T=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function N4(n,e,t,r){let a={},s={},c=[];const u=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(T,M){const R=M.program;r.uniformBlockBinding(T,R)}function h(T,M){let R=a[T.id];R===void 0&&(E(T),R=p(T),a[T.id]=R,T.addEventListener("dispose",y));const P=M.program;r.updateUBOMapping(T,P);const N=e.render.frame;s[T.id]!==N&&(g(T),s[T.id]=N)}function p(T){const M=m();T.__bindingPointIndex=M;const R=n.createBuffer(),P=T.__size,N=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,P,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,R),R}function m(){for(let T=0;T<u;T++)if(c.indexOf(T)===-1)return c.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const M=a[T.id],R=T.uniforms,P=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let N=0,U=R.length;N<U;N++){const se=R[N];if(S(se,N,P)===!0){const C=se.__offset,O=Array.isArray(se.value)?se.value:[se.value];let oe=0;for(let ne=0;ne<O.length;ne++){const pe=O[ne],H=w(pe);typeof pe=="number"?(se.__data[0]=pe,n.bufferSubData(n.UNIFORM_BUFFER,C+oe,se.__data)):pe.isMatrix3?(se.__data[0]=pe.elements[0],se.__data[1]=pe.elements[1],se.__data[2]=pe.elements[2],se.__data[3]=pe.elements[0],se.__data[4]=pe.elements[3],se.__data[5]=pe.elements[4],se.__data[6]=pe.elements[5],se.__data[7]=pe.elements[0],se.__data[8]=pe.elements[6],se.__data[9]=pe.elements[7],se.__data[10]=pe.elements[8],se.__data[11]=pe.elements[0]):(pe.toArray(se.__data,oe),oe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,se.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(T,M,R){const P=T.value;if(R[M]===void 0){if(typeof P=="number")R[M]=P;else{const N=Array.isArray(P)?P:[P],U=[];for(let se=0;se<N.length;se++)U.push(N[se].clone());R[M]=U}return!0}else if(typeof P=="number"){if(R[M]!==P)return R[M]=P,!0}else{const N=Array.isArray(R[M])?R[M]:[R[M]],U=Array.isArray(P)?P:[P];for(let se=0;se<N.length;se++){const C=N[se];if(C.equals(U[se])===!1)return C.copy(U[se]),!0}}return!1}function E(T){const M=T.uniforms;let R=0;const P=16;let N=0;for(let U=0,se=M.length;U<se;U++){const C=M[U],O={boundary:0,storage:0},oe=Array.isArray(C.value)?C.value:[C.value];for(let ne=0,pe=oe.length;ne<pe;ne++){const H=oe[ne],Q=w(H);O.boundary+=Q.boundary,O.storage+=Q.storage}if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=R,U>0){N=R%P;const ne=P-N;N!==0&&ne-O.boundary<0&&(R+=P-N,C.__offset=R)}R+=O.storage}return N=R%P,N>0&&(R+=P-N),T.__size=R,T.__cache={},this}function w(T){const M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function y(T){const M=T.target;M.removeEventListener("dispose",y);const R=c.indexOf(M.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete s[M.id]}function _(){for(const T in a)n.deleteBuffer(a[T]);c=[],a={},s={}}return{bind:d,update:h,dispose:_}}class Ym{constructor(e={}){const{canvas:t=DF(),context:r=null,depth:a=!0,stencil:s=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let g;r!==null?g=r.getContextAttributes().alpha:g=c;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,y=null;const _=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this._useLegacyLights=!1,this.toneMapping=ko,this.toneMappingExposure=1;const M=this;let R=!1,P=0,N=0,U=null,se=-1,C=null;const O=new Gt,oe=new Gt;let ne=null;const pe=new nt(0);let H=0,Q=t.width,le=t.height,re=1,j=null,ie=null;const $=new Gt(0,0,Q,le),L=new Gt(0,0,Q,le);let k=!1;const W=new Ed;let Y=!1,ee=!1,Z=null;const _e=new Xt,ve=new pt,be=new B,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return U===null?re:1}let X=r;function It(D,J){for(let de=0;de<D.length;de++){const he=D[de],fe=t.getContext(he,J);if(fe!==null)return fe}return null}try{const D={alpha:!0,depth:a,stencil:s,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xd}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Be,!1),X===null){const J=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&J.shift(),X=It(J,D),X===null)throw It(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ve,ue,ce,xe,ge,Me,Ee,Ne,Je,I,b,q,Ae,ye,Ce,Ke,Ue,He,ct,Tt,De,kt,dt,st;function tt(){Ve=new jz(X),ue=new zz(X,Ve,e),Ve.init(ue),kt=new P4(X,Ve,ue),ce=new C4(X,Ve,ue),xe=new Yz(X),ge=new p4,Me=new R4(X,Ve,ce,ge,ue,kt,xe),Ee=new Hz(M),Ne=new $z(M),Je=new nO(X,ue),dt=new Oz(X,Ve,Je,ue),I=new Xz(X,Je,xe,dt),b=new Qz(X,I,Je,xe),ct=new Jz(X,ue,Me),Ke=new Bz(ge),q=new h4(M,Ee,Ne,Ve,ue,dt,Ke),Ae=new U4(M,ge),ye=new v4,Ce=new w4(Ve,ue),He=new Fz(M,Ee,Ne,ce,b,g,d),Ue=new b4(M,b,ue),st=new N4(X,xe,ue,ce),Tt=new kz(X,Ve,xe,ue),De=new qz(X,Ve,xe,ue),xe.programs=q.programs,M.capabilities=ue,M.extensions=Ve,M.properties=ge,M.renderLists=ye,M.shadowMap=Ue,M.state=ce,M.info=xe}tt();const $e=new I4(M,X);this.xr=$e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=Ve.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ve.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(D){D!==void 0&&(re=D,this.setSize(Q,le,!1))},this.getSize=function(D){return D.set(Q,le)},this.setSize=function(D,J,de=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=D,le=J,t.width=Math.floor(D*re),t.height=Math.floor(J*re),de===!0&&(t.style.width=D+"px",t.style.height=J+"px"),this.setViewport(0,0,D,J)},this.getDrawingBufferSize=function(D){return D.set(Q*re,le*re).floor()},this.setDrawingBufferSize=function(D,J,de){Q=D,le=J,re=de,t.width=Math.floor(D*de),t.height=Math.floor(J*de),this.setViewport(0,0,D,J)},this.getCurrentViewport=function(D){return D.copy(O)},this.getViewport=function(D){return D.copy($)},this.setViewport=function(D,J,de,he){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,J,de,he),ce.viewport(O.copy($).multiplyScalar(re).floor())},this.getScissor=function(D){return D.copy(L)},this.setScissor=function(D,J,de,he){D.isVector4?L.set(D.x,D.y,D.z,D.w):L.set(D,J,de,he),ce.scissor(oe.copy(L).multiplyScalar(re).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(D){ce.setScissorTest(k=D)},this.setOpaqueSort=function(D){j=D},this.setTransparentSort=function(D){ie=D},this.getClearColor=function(D){return D.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(D=!0,J=!0,de=!0){let he=0;if(D){let fe=!1;if(U!==null){const Ge=U.texture.format;fe=Ge===s1||Ge===a1||Ge===o1}if(fe){const Ge=U.texture.type,et=Ge===zo||Ge===Uo||Ge===ng||Ge===Aa||Ge===r1||Ge===i1,at=He.getClearColor(),je=He.getClearAlpha(),vt=at.r,ht=at.g,mt=at.b;et?(S[0]=vt,S[1]=ht,S[2]=mt,S[3]=je,X.clearBufferuiv(X.COLOR,0,S)):(E[0]=vt,E[1]=ht,E[2]=mt,E[3]=je,X.clearBufferiv(X.COLOR,0,E))}else he|=X.COLOR_BUFFER_BIT}J&&(he|=X.DEPTH_BUFFER_BIT),de&&(he|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ye.dispose(),Ce.dispose(),ge.dispose(),Ee.dispose(),Ne.dispose(),b.dispose(),dt.dispose(),st.dispose(),q.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Sn),$e.removeEventListener("sessionend",Lt),Z&&(Z.dispose(),Z=null),vn.stop()};function _t(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const D=xe.autoReset,J=Ue.enabled,de=Ue.autoUpdate,he=Ue.needsUpdate,fe=Ue.type;tt(),xe.autoReset=D,Ue.enabled=J,Ue.autoUpdate=de,Ue.needsUpdate=he,Ue.type=fe}function Be(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Pe(D){const J=D.target;J.removeEventListener("dispose",Pe),me(J)}function me(D){Fe(D),ge.remove(D)}function Fe(D){const J=ge.get(D).programs;J!==void 0&&(J.forEach(function(de){q.releaseProgram(de)}),D.isShaderMaterial&&q.releaseShaderCache(D))}this.renderBufferDirect=function(D,J,de,he,fe,Ge){J===null&&(J=ke);const et=fe.isMesh&&fe.matrixWorld.determinant()<0,at=bd(D,J,de,he,fe);ce.setMaterial(he,et);let je=de.index,vt=1;if(he.wireframe===!0){if(je=I.getWireframeAttribute(de),je===void 0)return;vt=2}const ht=de.drawRange,mt=de.attributes.position;let Wt=ht.start*vt,Kn=(ht.start+ht.count)*vt;Ge!==null&&(Wt=Math.max(Wt,Ge.start*vt),Kn=Math.min(Kn,(Ge.start+Ge.count)*vt)),je!==null?(Wt=Math.max(Wt,0),Kn=Math.min(Kn,je.count)):mt!=null&&(Wt=Math.max(Wt,0),Kn=Math.min(Kn,mt.count));const ln=Kn-Wt;if(ln<0||ln===1/0)return;dt.setup(fe,he,at,de,je);let rr,bt=Tt;if(je!==null&&(rr=Je.get(je),bt=De,bt.setIndex(rr)),fe.isMesh)he.wireframe===!0?(ce.setLineWidth(he.wireframeLinewidth*ze()),bt.setMode(X.LINES)):bt.setMode(X.TRIANGLES);else if(fe.isLine){let yt=he.linewidth;yt===void 0&&(yt=1),ce.setLineWidth(yt*ze()),fe.isLineSegments?bt.setMode(X.LINES):fe.isLineLoop?bt.setMode(X.LINE_LOOP):bt.setMode(X.LINE_STRIP)}else fe.isPoints?bt.setMode(X.POINTS):fe.isSprite&&bt.setMode(X.TRIANGLES);if(fe.isBatchedMesh)bt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else if(fe.isInstancedMesh)bt.renderInstances(Wt,ln,fe.count);else if(de.isInstancedBufferGeometry){const yt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Zn=Math.min(de.instanceCount,yt);bt.renderInstances(Wt,ln,Zn)}else bt.render(Wt,ln)};function ot(D,J,de){D.transparent===!0&&D.side===Xi&&D.forceSinglePass===!1?(D.side=mr,D.needsUpdate=!0,Qi(D,J,de),D.side=$o,D.needsUpdate=!0,Qi(D,J,de),D.side=Xi):Qi(D,J,de)}this.compile=function(D,J,de=null){de===null&&(de=D),y=Ce.get(de),y.init(),T.push(y),de.traverseVisible(function(fe){fe.isLight&&fe.layers.test(J.layers)&&(y.pushLight(fe),fe.castShadow&&y.pushShadow(fe))}),D!==de&&D.traverseVisible(function(fe){fe.isLight&&fe.layers.test(J.layers)&&(y.pushLight(fe),fe.castShadow&&y.pushShadow(fe))}),y.setupLights(M._useLegacyLights);const he=new Set;return D.traverse(function(fe){const Ge=fe.material;if(Ge)if(Array.isArray(Ge))for(let et=0;et<Ge.length;et++){const at=Ge[et];ot(at,de,fe),he.add(at)}else ot(Ge,de,fe),he.add(Ge)}),T.pop(),y=null,he},this.compileAsync=function(D,J,de=null){const he=this.compile(D,J,de);return new Promise(fe=>{function Ge(){if(he.forEach(function(et){ge.get(et).currentProgram.isReady()&&he.delete(et)}),he.size===0){fe(D);return}setTimeout(Ge,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Et=null;function nn(D){Et&&Et(D)}function Sn(){vn.stop()}function Lt(){vn.start()}const vn=new A1;vn.setAnimationLoop(nn),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(D){Et=D,$e.setAnimationLoop(D),D===null?vn.stop():vn.start()},$e.addEventListener("sessionstart",Sn),$e.addEventListener("sessionend",Lt),this.render=function(D,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(J),J=$e.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,J,U),y=Ce.get(D,T.length),y.init(),T.push(y),_e.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W.setFromProjectionMatrix(_e),ee=this.localClippingEnabled,Y=Ke.init(this.clippingPlanes,ee),w=ye.get(D,_.length),w.init(),_.push(w),zn(D,J,0,M.sortObjects),w.finish(),M.sortObjects===!0&&w.sort(j,ie),this.info.render.frame++,Y===!0&&Ke.beginShadows();const de=y.state.shadowsArray;if(Ue.render(de,D,J),Y===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(w,D),y.setupLights(M._useLegacyLights),J.isArrayCamera){const he=J.cameras;for(let fe=0,Ge=he.length;fe<Ge;fe++){const et=he[fe];Lu(w,D,et,et.viewport)}}else Lu(w,D,J);U!==null&&(Me.updateMultisampleRenderTarget(U),Me.updateRenderTargetMipmap(U)),D.isScene===!0&&D.onAfterRender(M,D,J),dt.resetDefaultState(),se=-1,C=null,T.pop(),T.length>0?y=T[T.length-1]:y=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function zn(D,J,de,he){if(D.visible===!1)return;if(D.layers.test(J.layers)){if(D.isGroup)de=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(J);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||W.intersectsSprite(D)){he&&be.setFromMatrixPosition(D.matrixWorld).applyMatrix4(_e);const et=b.update(D),at=D.material;at.visible&&w.push(D,et,at,de,be.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||W.intersectsObject(D))){const et=b.update(D),at=D.material;if(he&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),be.copy(D.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),be.copy(et.boundingSphere.center)),be.applyMatrix4(D.matrixWorld).applyMatrix4(_e)),Array.isArray(at)){const je=et.groups;for(let vt=0,ht=je.length;vt<ht;vt++){const mt=je[vt],Wt=at[mt.materialIndex];Wt&&Wt.visible&&w.push(D,et,Wt,de,be.z,mt)}}else at.visible&&w.push(D,et,at,de,be.z,null)}}const Ge=D.children;for(let et=0,at=Ge.length;et<at;et++)zn(Ge[et],J,de,he)}function Lu(D,J,de,he){const fe=D.opaque,Ge=D.transmissive,et=D.transparent;y.setupLightsView(de),Y===!0&&Ke.setGlobalState(M.clippingPlanes,de),Ge.length>0&&Ko(fe,Ge,J,de),he&&ce.viewport(O.copy(he)),fe.length>0&&Ri(fe,J,de),Ge.length>0&&Ri(Ge,J,de),et.length>0&&Ri(et,J,de),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ko(D,J,de,he){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;const Ge=ue.isWebGL2;Z===null&&(Z=new Ra(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?su:zo,minFilter:au,samples:Ge?4:0})),M.getDrawingBufferSize(ve),Ge?Z.setSize(ve.x,ve.y):Z.setSize(Hf(ve.x),Hf(ve.y));const et=M.getRenderTarget();M.setRenderTarget(Z),M.getClearColor(pe),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const at=M.toneMapping;M.toneMapping=ko,Ri(D,de,he),Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z);let je=!1;for(let vt=0,ht=J.length;vt<ht;vt++){const mt=J[vt],Wt=mt.object,Kn=mt.geometry,ln=mt.material,rr=mt.group;if(ln.side===Xi&&Wt.layers.test(he.layers)){const bt=ln.side;ln.side=mr,ln.needsUpdate=!0,Zo(Wt,de,he,Kn,ln,rr),ln.side=bt,ln.needsUpdate=!0,je=!0}}je===!0&&(Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z)),M.setRenderTarget(et),M.setClearColor(pe,H),M.toneMapping=at}function Ri(D,J,de){const he=J.isScene===!0?J.overrideMaterial:null;for(let fe=0,Ge=D.length;fe<Ge;fe++){const et=D[fe],at=et.object,je=et.geometry,vt=he===null?et.material:he,ht=et.group;at.layers.test(de.layers)&&Zo(at,J,de,je,vt,ht)}}function Zo(D,J,de,he,fe,Ge){D.onBeforeRender(M,J,de,he,fe,Ge),D.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),fe.onBeforeRender(M,J,de,he,D,Ge),fe.transparent===!0&&fe.side===Xi&&fe.forceSinglePass===!1?(fe.side=mr,fe.needsUpdate=!0,M.renderBufferDirect(de,J,he,fe,D,Ge),fe.side=$o,fe.needsUpdate=!0,M.renderBufferDirect(de,J,he,fe,D,Ge),fe.side=Xi):M.renderBufferDirect(de,J,he,fe,D,Ge),D.onAfterRender(M,J,de,he,fe,Ge)}function Qi(D,J,de){J.isScene!==!0&&(J=ke);const he=ge.get(D),fe=y.state.lights,Ge=y.state.shadowsArray,et=fe.state.version,at=q.getParameters(D,fe.state,Ge,J,de),je=q.getProgramCacheKey(at);let vt=he.programs;he.environment=D.isMeshStandardMaterial?J.environment:null,he.fog=J.fog,he.envMap=(D.isMeshStandardMaterial?Ne:Ee).get(D.envMap||he.environment),vt===void 0&&(D.addEventListener("dispose",Pe),vt=new Map,he.programs=vt);let ht=vt.get(je);if(ht!==void 0){if(he.currentProgram===ht&&he.lightsStateVersion===et)return Iu(D,at),ht}else at.uniforms=q.getUniforms(D),D.onBuild(de,at,M),D.onBeforeCompile(at,M),ht=q.acquireProgram(at,je),vt.set(je,ht),he.uniforms=at.uniforms;const mt=he.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(mt.clippingPlanes=Ke.uniform),Iu(D,at),he.needsLights=Uu(D),he.lightsStateVersion=et,he.needsLights&&(mt.ambientLightColor.value=fe.state.ambient,mt.lightProbe.value=fe.state.probe,mt.directionalLights.value=fe.state.directional,mt.directionalLightShadows.value=fe.state.directionalShadow,mt.spotLights.value=fe.state.spot,mt.spotLightShadows.value=fe.state.spotShadow,mt.rectAreaLights.value=fe.state.rectArea,mt.ltc_1.value=fe.state.rectAreaLTC1,mt.ltc_2.value=fe.state.rectAreaLTC2,mt.pointLights.value=fe.state.point,mt.pointLightShadows.value=fe.state.pointShadow,mt.hemisphereLights.value=fe.state.hemi,mt.directionalShadowMap.value=fe.state.directionalShadowMap,mt.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,mt.spotShadowMap.value=fe.state.spotShadowMap,mt.spotLightMatrix.value=fe.state.spotLightMatrix,mt.spotLightMap.value=fe.state.spotLightMap,mt.pointShadowMap.value=fe.state.pointShadowMap,mt.pointShadowMatrix.value=fe.state.pointShadowMatrix),he.currentProgram=ht,he.uniformsList=null,ht}function Du(D){if(D.uniformsList===null){const J=D.currentProgram.getUniforms();D.uniformsList=bf.seqWithValue(J.seq,D.uniforms)}return D.uniformsList}function Iu(D,J){const de=ge.get(D);de.outputColorSpace=J.outputColorSpace,de.batching=J.batching,de.instancing=J.instancing,de.instancingColor=J.instancingColor,de.skinning=J.skinning,de.morphTargets=J.morphTargets,de.morphNormals=J.morphNormals,de.morphColors=J.morphColors,de.morphTargetsCount=J.morphTargetsCount,de.numClippingPlanes=J.numClippingPlanes,de.numIntersection=J.numClipIntersection,de.vertexAlphas=J.vertexAlphas,de.vertexTangents=J.vertexTangents,de.toneMapping=J.toneMapping}function bd(D,J,de,he,fe){J.isScene!==!0&&(J=ke),Me.resetTextureUnits();const Ge=J.fog,et=he.isMeshStandardMaterial?J.environment:null,at=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Zi,je=(he.isMeshStandardMaterial?Ne:Ee).get(he.envMap||et),vt=he.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ht=!!de.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),mt=!!de.morphAttributes.position,Wt=!!de.morphAttributes.normal,Kn=!!de.morphAttributes.color;let ln=ko;he.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ln=M.toneMapping);const rr=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,bt=rr!==void 0?rr.length:0,yt=ge.get(he),Zn=y.state.lights;if(Y===!0&&(ee===!0||D!==C)){const ir=D===C&&he.id===se;Ke.setState(he,D,ir)}let Zt=!1;he.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Zn.state.version||yt.outputColorSpace!==at||fe.isBatchedMesh&&yt.batching===!1||!fe.isBatchedMesh&&yt.batching===!0||fe.isInstancedMesh&&yt.instancing===!1||!fe.isInstancedMesh&&yt.instancing===!0||fe.isSkinnedMesh&&yt.skinning===!1||!fe.isSkinnedMesh&&yt.skinning===!0||fe.isInstancedMesh&&yt.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&yt.instancingColor===!1&&fe.instanceColor!==null||yt.envMap!==je||he.fog===!0&&yt.fog!==Ge||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Ke.numPlanes||yt.numIntersection!==Ke.numIntersection)||yt.vertexAlphas!==vt||yt.vertexTangents!==ht||yt.morphTargets!==mt||yt.morphNormals!==Wt||yt.morphColors!==Kn||yt.toneMapping!==ln||ue.isWebGL2===!0&&yt.morphTargetsCount!==bt)&&(Zt=!0):(Zt=!0,yt.__version=he.version);let Li=yt.currentProgram;Zt===!0&&(Li=Qi(he,J,fe));let Nu=!1,li=!1,eo=!1;const rn=Li.getUniforms(),Pr=yt.uniforms;if(ce.useProgram(Li.program)&&(Nu=!0,li=!0,eo=!0),he.id!==se&&(se=he.id,li=!0),Nu||C!==D){rn.setValue(X,"projectionMatrix",D.projectionMatrix),rn.setValue(X,"viewMatrix",D.matrixWorldInverse);const ir=rn.map.cameraPosition;ir!==void 0&&ir.setValue(X,be.setFromMatrixPosition(D.matrixWorld)),ue.logarithmicDepthBuffer&&rn.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&rn.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,li=!0,eo=!0)}if(fe.isSkinnedMesh){rn.setOptional(X,fe,"bindMatrix"),rn.setOptional(X,fe,"bindMatrixInverse");const ir=fe.skeleton;ir&&(ue.floatVertexTextures?(ir.boneTexture===null&&ir.computeBoneTexture(),rn.setValue(X,"boneTexture",ir.boneTexture,Me)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}fe.isBatchedMesh&&(rn.setOptional(X,fe,"batchingTexture"),rn.setValue(X,"batchingTexture",fe._matricesTexture,Me));const Zs=de.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0&&ue.isWebGL2===!0)&&ct.update(fe,de,Li),(li||yt.receiveShadow!==fe.receiveShadow)&&(yt.receiveShadow=fe.receiveShadow,rn.setValue(X,"receiveShadow",fe.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Pr.envMap.value=je,Pr.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),li&&(rn.setValue(X,"toneMappingExposure",M.toneMappingExposure),yt.needsLights&&Pi(Pr,eo),Ge&&he.fog===!0&&Ae.refreshFogUniforms(Pr,Ge),Ae.refreshMaterialUniforms(Pr,he,re,le,Z),bf.upload(X,Du(yt),Pr,Me)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(bf.upload(X,Du(yt),Pr,Me),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&rn.setValue(X,"center",fe.center),rn.setValue(X,"modelViewMatrix",fe.modelViewMatrix),rn.setValue(X,"normalMatrix",fe.normalMatrix),rn.setValue(X,"modelMatrix",fe.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const ir=he.uniformsGroups;for(let Jo=0,Fu=ir.length;Jo<Fu;Jo++)if(ue.isWebGL2){const Oa=ir[Jo];st.update(Oa,Li),st.bind(Oa,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function Pi(D,J){D.ambientLightColor.needsUpdate=J,D.lightProbe.needsUpdate=J,D.directionalLights.needsUpdate=J,D.directionalLightShadows.needsUpdate=J,D.pointLights.needsUpdate=J,D.pointLightShadows.needsUpdate=J,D.spotLights.needsUpdate=J,D.spotLightShadows.needsUpdate=J,D.rectAreaLights.needsUpdate=J,D.hemisphereLights.needsUpdate=J}function Uu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(D,J,de){ge.get(D.texture).__webglTexture=J,ge.get(D.depthTexture).__webglTexture=de;const he=ge.get(D);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=de===void 0,he.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,J){const de=ge.get(D);de.__webglFramebuffer=J,de.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(D,J=0,de=0){U=D,P=J,N=de;let he=!0,fe=null,Ge=!1,et=!1;if(D){const je=ge.get(D);je.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(X.FRAMEBUFFER,null),he=!1):je.__webglFramebuffer===void 0?Me.setupRenderTarget(D):je.__hasExternalTextures&&Me.rebindTextures(D,ge.get(D.texture).__webglTexture,ge.get(D.depthTexture).__webglTexture);const vt=D.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(et=!0);const ht=ge.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ht[J])?fe=ht[J][de]:fe=ht[J],Ge=!0):ue.isWebGL2&&D.samples>0&&Me.useMultisampledRTT(D)===!1?fe=ge.get(D).__webglMultisampledFramebuffer:Array.isArray(ht)?fe=ht[de]:fe=ht,O.copy(D.viewport),oe.copy(D.scissor),ne=D.scissorTest}else O.copy($).multiplyScalar(re).floor(),oe.copy(L).multiplyScalar(re).floor(),ne=k;if(ce.bindFramebuffer(X.FRAMEBUFFER,fe)&&ue.drawBuffers&&he&&ce.drawBuffers(D,fe),ce.viewport(O),ce.scissor(oe),ce.setScissorTest(ne),Ge){const je=ge.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,je.__webglTexture,de)}else if(et){const je=ge.get(D.texture),vt=J||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.__webglTexture,de||0,vt)}se=-1},this.readRenderTargetPixels=function(D,J,de,he,fe,Ge,et){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=ge.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&et!==void 0&&(at=at[et]),at){ce.bindFramebuffer(X.FRAMEBUFFER,at);try{const je=D.texture,vt=je.format,ht=je.type;if(vt!==Br&&kt.convert(vt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const mt=ht===su&&(Ve.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(ht!==zo&&kt.convert(ht)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ht===qi&&(ue.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=D.width-he&&de>=0&&de<=D.height-fe&&X.readPixels(J,de,he,fe,kt.convert(vt),kt.convert(ht),Ge)}finally{const je=U!==null?ge.get(U).__webglFramebuffer:null;ce.bindFramebuffer(X.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(D,J,de=0){const he=Math.pow(2,-de),fe=Math.floor(J.image.width*he),Ge=Math.floor(J.image.height*he);Me.setTexture2D(J,0),X.copyTexSubImage2D(X.TEXTURE_2D,de,0,0,D.x,D.y,fe,Ge),ce.unbindTexture()},this.copyTextureToTexture=function(D,J,de,he=0){const fe=J.image.width,Ge=J.image.height,et=kt.convert(de.format),at=kt.convert(de.type);Me.setTexture2D(de,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,de.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,de.unpackAlignment),J.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,he,D.x,D.y,fe,Ge,et,at,J.image.data):J.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,he,D.x,D.y,J.mipmaps[0].width,J.mipmaps[0].height,et,J.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,he,D.x,D.y,et,at,J.image),he===0&&de.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(D,J,de,he,fe=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=D.max.x-D.min.x+1,et=D.max.y-D.min.y+1,at=D.max.z-D.min.z+1,je=kt.convert(he.format),vt=kt.convert(he.type);let ht;if(he.isData3DTexture)Me.setTexture3D(he,0),ht=X.TEXTURE_3D;else if(he.isDataArrayTexture)Me.setTexture2DArray(he,0),ht=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,he.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,he.unpackAlignment);const mt=X.getParameter(X.UNPACK_ROW_LENGTH),Wt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Kn=X.getParameter(X.UNPACK_SKIP_PIXELS),ln=X.getParameter(X.UNPACK_SKIP_ROWS),rr=X.getParameter(X.UNPACK_SKIP_IMAGES),bt=de.isCompressedTexture?de.mipmaps[0]:de.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,bt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,bt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,D.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,D.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,D.min.z),de.isDataTexture||de.isData3DTexture?X.texSubImage3D(ht,fe,J.x,J.y,J.z,Ge,et,at,je,vt,bt.data):de.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(ht,fe,J.x,J.y,J.z,Ge,et,at,je,bt.data)):X.texSubImage3D(ht,fe,J.x,J.y,J.z,Ge,et,at,je,vt,bt),X.pixelStorei(X.UNPACK_ROW_LENGTH,mt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Wt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Kn),X.pixelStorei(X.UNPACK_SKIP_ROWS,ln),X.pixelStorei(X.UNPACK_SKIP_IMAGES,rr),fe===0&&he.generateMipmaps&&X.generateMipmap(ht),ce.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Me.setTextureCube(D,0):D.isData3DTexture?Me.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Me.setTexture2DArray(D,0):Me.setTexture2D(D,0),ce.unbindTexture()},this.resetState=function(){P=0,N=0,U=null,ce.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rg?"display-p3":"srgb",t.unpackColorSpace=Vt.workingColorSpace===wd?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fn?ba:u1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ba?Fn:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class F4 extends Ym{}F4.prototype.isWebGL1Renderer=!0;class ug{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=r}clone(){return new ug(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class O4 extends nr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class k4{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$m,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const er=new B;class No{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)er.fromBufferAttribute(this,t),er.applyMatrix4(e),this.setXYZ(t,er.x,er.y,er.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)er.fromBufferAttribute(this,t),er.applyNormalMatrix(e),this.setXYZ(t,er.x,er.y,er.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)er.fromBufferAttribute(this,t),er.transformDirection(e),this.setXYZ(t,er.x,er.y,er.z);return this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array),s=Ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new Cr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new No(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class z4 extends vr{constructor(e=null,t=1,r=1,a,s,c,u,d,h=Nn,p=Nn,m,g){super(null,c,u,d,h,p,a,s,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function B4(n,e){return n.z-e.z}function H4(n,e){return e.z-n.z}class V4{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1});const s=r[this.index];a.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const Ms="batchId",To=new Xt,Jx=new Xt,G4=new Xt,Qx=new Xt,Yp=new Ed,ff=new Wr,_a=new Ti,Fl=new B,Kp=new V4,jn=new ai,df=[];function W4(n,e,t=0){const r=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const a=n.count;for(let s=0;s<a;s++)for(let c=0;c<r;c++)e.setComponent(s+t,c,n.getComponent(s,c))}else e.array.set(n.array,t*r);e.needsUpdate=!0}class $4 extends ai{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,r=t*2,a){super(new Yn,a),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=r,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),r=new z4(t,e,e,Br,qi);this._matricesTexture=r}_initializeGeometry(e){const t=this.geometry,r=this._maxVertexCount,a=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const u in e.attributes){const d=e.getAttribute(u),{array:h,itemSize:p,normalized:m}=d,g=new h.constructor(r*p),S=new d.constructor(g,p,m);S.setUsage(d.usage),t.setAttribute(u,S)}if(e.getIndex()!==null){const u=r>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Cr(u,1))}const c=a>65536?new Uint32Array(r):new Uint16Array(r);t.setAttribute(Ms,new Cr(c,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Ms))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Ms}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const r in t.attributes){if(r===Ms)continue;if(!e.hasAttribute(r))throw new Error(`BatchedMesh: Added geometry missing "${r}". All geometries must have consistent attributes.`);const a=e.getAttribute(r),s=t.getAttribute(r);if(a.itemSize!==s.itemSize||a.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this._geometryCount,t=this.boundingBox,r=this._active;t.makeEmpty();for(let a=0;a<e;a++)r[a]!==!1&&(this.getMatrixAt(a,To),this.getBoundingBoxAt(a,ff).applyMatrix4(To),t.union(ff))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this._geometryCount,t=this.boundingSphere,r=this._active;t.makeEmpty();for(let a=0;a<e;a++)r[a]!==!1&&(this.getMatrixAt(a,To),this.getBoundingSphereAt(a,_a).applyMatrix4(To),t.union(_a))}addGeometry(e,t=-1,r=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const a={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const c=this._reservedRanges,u=this._drawRanges,d=this._bounds;this._geometryCount!==0&&(s=c[c.length-1]),t===-1?a.vertexCount=e.getAttribute("position").count:a.vertexCount=t,s===null?a.vertexStart=0:a.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),p=h!==null;if(p&&(r===-1?a.indexCount=h.count:a.indexCount=r,s===null?a.indexStart=0:a.indexStart=s.indexStart+s.indexCount),a.indexStart!==-1&&a.indexStart+a.indexCount>this._maxIndexCount||a.vertexStart+a.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const m=this._visibility,g=this._active,S=this._matricesTexture,E=this._matricesTexture.image.data;m.push(!0),g.push(!0);const w=this._geometryCount;this._geometryCount++,G4.toArray(E,w*16),S.needsUpdate=!0,c.push(a),u.push({start:p?a.indexStart:a.vertexStart,count:-1}),d.push({boxInitialized:!1,box:new Wr,sphereInitialized:!1,sphere:new Ti});const y=this.geometry.getAttribute(Ms);for(let _=0;_<a.vertexCount;_++)y.setX(a.vertexStart+_,w);return y.needsUpdate=!0,this.setGeometryAt(w,e),w}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const r=this.geometry,a=r.getIndex()!==null,s=r.getIndex(),c=t.getIndex(),u=this._reservedRanges[e];if(a&&c.count>u.indexCount||t.attributes.position.count>u.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const d=u.vertexStart,h=u.vertexCount;for(const S in r.attributes){if(S===Ms)continue;const E=t.getAttribute(S),w=r.getAttribute(S);W4(E,w,d);const y=E.itemSize;for(let _=E.count,T=h;_<T;_++){const M=d+_;for(let R=0;R<y;R++)w.setComponent(M,R,0)}w.needsUpdate=!0}if(a){const S=u.indexStart;for(let E=0;E<c.count;E++)s.setX(S+E,d+c.getX(E));for(let E=c.count,w=u.indexCount;E<w;E++)s.setX(S+E,d);s.needsUpdate=!0}const p=this._bounds[e];t.boundingBox!==null?(p.box.copy(t.boundingBox),p.boxInitialized=!0):p.boxInitialized=!1,t.boundingSphere!==null?(p.sphere.copy(t.boundingSphere),p.sphereInitialized=!0):p.sphereInitialized=!1;const m=this._drawRanges[e],g=t.getAttribute("position");return m.count=a?c.count:g.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.box,c=this.geometry;if(a.boxInitialized===!1){s.makeEmpty();const u=c.index,d=c.attributes.position,h=this._drawRanges[e];for(let p=h.start,m=h.start+h.count;p<m;p++){let g=p;u&&(g=u.getX(g)),s.expandByPoint(Fl.fromBufferAttribute(d,g))}a.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.sphere,c=this.geometry;if(a.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,ff),ff.getCenter(s.center);const u=c.index,d=c.attributes.position,h=this._drawRanges[e];let p=0;for(let m=h.start,g=h.start+h.count;m<g;m++){let S=m;u&&(S=u.getX(S)),Fl.fromBufferAttribute(d,S),p=Math.max(p,s.center.distanceToSquared(Fl))}s.radius=Math.sqrt(p),a.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const r=this._active,a=this._matricesTexture,s=this._matricesTexture.image.data,c=this._geometryCount;return e>=c||r[e]===!1?this:(t.toArray(s,e*16),a.needsUpdate=!0,this)}getMatrixAt(e,t){const r=this._active,a=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||r[e]===!1?null:t.fromArray(a,e*16)}setVisibleAt(e,t){const r=this._visibility,a=this._active,s=this._geometryCount;return e>=s||a[e]===!1||r[e]===t?this:(r[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,r=this._active,a=this._geometryCount;return e>=a||r[e]===!1?!1:t[e]}raycast(e,t){const r=this._visibility,a=this._active,s=this._drawRanges,c=this._geometryCount,u=this.matrixWorld,d=this.geometry;jn.material=this.material,jn.geometry.index=d.index,jn.geometry.attributes=d.attributes,jn.geometry.boundingBox===null&&(jn.geometry.boundingBox=new Wr),jn.geometry.boundingSphere===null&&(jn.geometry.boundingSphere=new Ti);for(let h=0;h<c;h++){if(!r[h]||!a[h])continue;const p=s[h];jn.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(h,jn.matrixWorld).premultiply(u),this.getBoundingBoxAt(h,jn.geometry.boundingBox),this.getBoundingSphereAt(h,jn.geometry.boundingSphere),jn.raycast(e,df);for(let m=0,g=df.length;m<g;m++){const S=df[m];S.object=this,S.batchId=h,t.push(S)}df.length=0}jn.material=null,jn.geometry.index=null,jn.geometry.attributes={},jn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,r,a,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const c=a.getIndex(),u=c===null?1:c.array.BYTES_PER_ELEMENT,d=this._visibility,h=this._multiDrawStarts,p=this._multiDrawCounts,m=this._drawRanges,g=this.perObjectFrustumCulled;g&&(Qx.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse).multiply(this.matrixWorld),Yp.setFromProjectionMatrix(Qx,e.isWebGPURenderer?lu:wi));let S=0;if(this.sortObjects){Jx.copy(this.matrixWorld).invert(),Fl.setFromMatrixPosition(r.matrixWorld).applyMatrix4(Jx);for(let y=0,_=d.length;y<_;y++)if(d[y]){this.getMatrixAt(y,To),this.getBoundingSphereAt(y,_a).applyMatrix4(To);let T=!1;if(g&&(T=!Yp.intersectsSphere(_a)),!T){const M=Fl.distanceTo(_a.center);Kp.push(m[y],M)}}const E=Kp.list,w=this.customSort;w===null?E.sort(s.transparent?H4:B4):w.call(this,E,r);for(let y=0,_=E.length;y<_;y++){const T=E[y];h[S]=T.start*u,p[S]=T.count,S++}Kp.reset()}else for(let E=0,w=d.length;E<w;E++)if(d[E]){let y=!1;if(g&&(this.getMatrixAt(E,To),this.getBoundingSphereAt(E,_a).applyMatrix4(To),y=!Yp.intersectsSphere(_a)),!y){const _=m[E];h[S]=_.start*u,p[S]=_.count,S++}}this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,r,a,s,c){this.onBeforeRender(e,null,a,s,c)}}class Pu extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eS=new B,tS=new B,nS=new Xt,Zp=new og,hf=new Ti;class j4 extends nr{constructor(e=new Yn,t=new Pu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,s=t.count;a<s;a++)eS.fromBufferAttribute(t,a-1),tS.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=eS.distanceTo(tS);e.setAttribute("lineDistance",new cn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hf.copy(r.boundingSphere),hf.applyMatrix4(a),hf.radius+=s,e.ray.intersectsSphere(hf)===!1)return;nS.copy(a).invert(),Zp.copy(e.ray).applyMatrix4(nS);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=new B,p=new B,m=new B,g=new B,S=this.isLineSegments?2:1,E=r.index,y=r.attributes.position;if(E!==null){const _=Math.max(0,c.start),T=Math.min(E.count,c.start+c.count);for(let M=_,R=T-1;M<R;M+=S){const P=E.getX(M),N=E.getX(M+1);if(h.fromBufferAttribute(y,P),p.fromBufferAttribute(y,N),Zp.distanceSqToSegment(h,p,g,m)>d)continue;g.applyMatrix4(this.matrixWorld);const se=e.ray.origin.distanceTo(g);se<e.near||se>e.far||t.push({distance:se,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,c.start),T=Math.min(y.count,c.start+c.count);for(let M=_,R=T-1;M<R;M+=S){if(h.fromBufferAttribute(y,M),p.fromBufferAttribute(y,M+1),Zp.distanceSqToSegment(h,p,g,m)>d)continue;g.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(g);N<e.near||N>e.far||t.push({distance:N,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}const rS=new B,iS=new B;class Ad extends j4{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,s=t.count;a<s;a+=2)rS.fromBufferAttribute(t,a),iS.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+rS.distanceTo(iS);e.setAttribute("lineDistance",new cn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class X4 extends Yn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],r=new Set,a=new B,s=new B;if(e.index!==null){const c=e.attributes.position,u=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:u.count,materialIndex:0}]);for(let h=0,p=d.length;h<p;++h){const m=d[h],g=m.start,S=m.count;for(let E=g,w=g+S;E<w;E+=3)for(let y=0;y<3;y++){const _=u.getX(E+y),T=u.getX(E+(y+1)%3);a.fromBufferAttribute(c,_),s.fromBufferAttribute(c,T),oS(a,s,r)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}}else{const c=e.attributes.position;for(let u=0,d=c.count/3;u<d;u++)for(let h=0;h<3;h++){const p=3*u+h,m=3*u+(h+1)%3;a.fromBufferAttribute(c,p),s.fromBufferAttribute(c,m),oS(a,s,r)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new cn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function oS(n,e,t){const r=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(r)===!0||t.has(a)===!0?!1:(t.add(r),t.add(a),!0)}class q4 extends Ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=c1,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y4 extends Pu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class D1 extends nr{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Jp=new Xt,aS=new B,sS=new B;class K4{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ed,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;aS.setFromMatrixPosition(e.matrixWorld),t.position.copy(aS),sS.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sS),t.updateMatrixWorld(),Jp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jp),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Jp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lS=new Xt,Ol=new B,Qp=new B;class Z4 extends K4{constructor(){super(new Tr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,s=e.distance||r.far;s!==r.far&&(r.far=s,r.updateProjectionMatrix()),Ol.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ol),Qp.copy(r.position),Qp.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Qp),r.updateMatrixWorld(),a.makeTranslation(-Ol.x,-Ol.y,-Ol.z),lS.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lS)}}class J4 extends D1{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Z4}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Q4 extends D1{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class eH extends Yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Km extends k4{constructor(e,t,r=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class uS{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(kn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cS=new B,pf=new B;class tH{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cS.subVectors(e,this.start),pf.subVectors(this.end,this.start);const r=pf.dot(pf);let s=pf.dot(cS)/r;return t&&(s=kn(s,0,1)),s}closestPointToPoint(e,t,r){const a=this.closestPointToPointParameter(e,t);return this.delta(r).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class nH extends Ad{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Yn;a.setAttribute("position",new cn(t,3)),a.setAttribute("color",new cn(r,3));const s=new Pu({vertexColors:!0,toneMapped:!1});super(a,s),this.type="AxesHelper"}setColors(e,t,r){const a=new nt,s=this.geometry.attributes.color.array;return a.set(e),a.toArray(s,0),a.toArray(s,3),a.set(t),a.toArray(s,6),a.toArray(s,9),a.set(r),a.toArray(s,12),a.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class bi{constructor(e,t,r,a,s="div"){this.parent=e,this.object=t,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),bi.nextNameID=bi.nextNameID||0,this.$name.id=`lil-gui-name-${++bi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class rH extends bi{constructor(e,t,r){super(e,t,r,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Zm(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const iH={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Zm,toHexString:Zm},cu={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},oH={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const r=cu.fromHexString(n);e[0]=(r>>16&255)/255*t,e[1]=(r>>8&255)/255*t,e[2]=(r&255)/255*t},toHexString([n,e,t],r=1){r=255/r;const a=n*r<<16^e*r<<8^t*r<<0;return cu.toHexString(a)}},aH={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const r=cu.fromHexString(n);e.r=(r>>16&255)/255*t,e.g=(r>>8&255)/255*t,e.b=(r&255)/255*t},toHexString({r:n,g:e,b:t},r=1){r=255/r;const a=n*r<<16^e*r<<8^t*r<<0;return cu.toHexString(a)}},sH=[iH,cu,oH,aH];function lH(n){return sH.find(e=>e.match(n))}class uH extends bi{constructor(e,t,r,a){super(e,t,r,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=lH(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Zm(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class em extends bi{constructor(e,t,r){super(e,t,r,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class cH extends bi{constructor(e,t,r,a,s,c){super(e,t,r,"number"),this._initInput(),this.min(a),this.max(s);const u=c!==void 0;this.step(u?c:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))},r=T=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+T),this.$input.value=this.getValue())},a=T=>{T.key==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),r(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),r(this._step*this._arrowKeyMultiplier(T)*-1))},s=T=>{this._inputFocused&&(T.preventDefault(),r(this._step*this._normalizeMouseWheel(T)))};let c=!1,u,d,h,p,m;const g=5,S=T=>{u=T.clientX,d=h=T.clientY,c=!0,p=this.getValue(),m=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",w)},E=T=>{if(c){const M=T.clientX-u,R=T.clientY-d;Math.abs(R)>g?(T.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>g&&w()}if(!c){const M=T.clientY-h;m-=M*this._step*this._arrowKeyMultiplier(T),p+m>this._max?m=this._max-p:p+m<this._min&&(m=this._min-p),this._snapClampSetValue(p+m)}h=T.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",w)},y=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,T,M,R,P)=>(_-T)/(M-T)*(P-R)+R,t=_=>{const T=this.$slider.getBoundingClientRect();let M=e(_,T.left,T.right,this._min,this._max);this._snapClampSetValue(M)},r=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",s)},a=_=>{t(_.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",s)};let c=!1,u,d;const h=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),c=!1},p=_=>{_.touches.length>1||(this._hasScrollBar?(u=_.touches[0].clientX,d=_.touches[0].clientY,c=!0):h(_),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",g))},m=_=>{if(c){const T=_.touches[0].clientX-u,M=_.touches[0].clientY-d;Math.abs(T)>Math.abs(M)?h(_):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g))}else _.preventDefault(),t(_.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g)},S=this._callOnFinishChange.bind(this),E=400;let w;const y=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const M=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(S,E)};this.$slider.addEventListener("mousedown",r),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:r}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,r=-e.wheelDelta/120,r*=this._stepExplicit?1:10),t+-r}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class fH extends bi{constructor(e,t,r,a){super(e,t,r,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const r=document.createElement("option");r.textContent=t,this.$select.appendChild(r)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class dH extends bi{constructor(e,t,r){super(e,t,r,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const hH=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function pH(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let fS=!1;class Gf{constructor({parent:e,autoPlace:t=e===void 0,container:r,width:a,title:s="Controls",closeFolders:c=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!fS&&u&&(pH(hH),fS=!0),r?r.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,r,a,s){if(Object(r)===r)return new fH(this,e,t,r);const c=e[t];switch(typeof c){case"number":return new cH(this,e,t,r,a,s);case"boolean":return new rH(this,e,t);case"string":return new dH(this,e,t);case"function":return new em(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,r=1){return new uH(this,e,t,r)}addFolder(e){const t=new Gf({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(r=>{r instanceof em||r._name in e.controllers&&r.load(e.controllers[r._name])}),t&&e.folders&&this.folders.forEach(r=>{r._title in e.folders&&r.load(e.folders[r._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(r=>{if(!(r instanceof em)){if(r._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${r._name}"`);t.controllers[r._name]=r.save()}}),e&&this.folders.forEach(r=>{if(r._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${r._title}"`);t.folders[r._title]=r.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const r=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",r))};this.$children.addEventListener("transitionend",r);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(r=>r.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function tm(n,e,t,r){return new(t||(t=Promise))((function(a,s){function c(h){try{d(r.next(h))}catch(p){s(p)}}function u(h){try{d(r.throw(h))}catch(p){s(p)}}function d(h){var p;h.done?a(h.value):(p=h.value,p instanceof t?p:new t((function(m){m(p)}))).then(c,u)}d((r=r.apply(n,[])).next())}))}class cg{constructor(e,t,r,a){this.size=e,this.width=t,this.height=r,this.charLength=a,this.chars=""}static parse(e){const t=e.split(" "),r=t[0],a=r.split("x");return new cg(r,+a[0],+a[1],+t[1])}get src(){return"data:image/jpeg;base64,"+this.chars}get isValid(){return this.chars.length==this.charLength&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(this.chars)}}class fg{constructor(e,t,r,a){this.src=e,this.gcode=t,this.params=r,this.comment=a}}class dS extends fg{constructor(e,t,r,a){super(e,t,r,a),this.params=r}}class bo extends fg{constructor(e,t,r,a){super(e,t,void 0,r),this.toolIndex=a}}class hS{constructor(e,t,r,a=0){this.layer=e,this.commands=t,this.lineNumber=r,this.height=a}}class Wf{constructor(e){this.lines=[],this.preamble=new hS(-1,[],0),this.layers=[],this.curZ=0,this.maxZ=0,this.metadata={thumbnails:{}},this.tolerance=0,this.tolerance=e??this.tolerance}parseGCode(e){const t=Array.isArray(e)?e:e.split(`
`);this.lines=this.lines.concat(t);const r=this.lines2commands(t);this.groupIntoLayers(r);const a=this.parseMetadata(r.filter((s=>s.comment))).thumbnails;for(const[s,c]of Object.entries(a))this.metadata.thumbnails[s]=c;return{layers:this.layers,metadata:this.metadata}}lines2commands(e){return e.map((t=>this.parseCommand(t)))}parseCommand(e,t=!0){var r;const a=e.trim().split(";"),s=a[0],c=t&&a[1]||void 0,u=s.split(/([a-zA-Z])/g).slice(1).map((p=>p.trim())),d=u.length?`${(r=u[0])===null||r===void 0?void 0:r.toLowerCase()}${u[1]}`:"",h=this.parseParams(u.slice(2));switch(d){case"g0":case"g00":case"g1":case"g01":case"g2":case"g02":case"g3":case"g03":return new dS(e,d,h,c);case"t0":return new bo(e,d,c,0);case"t1":return new bo(e,d,c,1);case"t2":return new bo(e,d,c,2);case"t3":return new bo(e,d,c,3);case"t4":return new bo(e,d,c,4);case"t5":return new bo(e,d,c,5);case"t6":return new bo(e,d,c,6);case"t7":return new bo(e,d,c,7);default:return new fg(e,d,h,c)}}parseMove(e){return e.reduce(((t,r)=>{const a=r.charAt(0).toLowerCase();return a!="x"&&a!="y"&&a!="z"&&a!="e"&&a!="r"&&a!="f"&&a!="i"&&a!="j"||(t[a]=parseFloat(r.slice(1))),t}),{})}isAlpha(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90}parseParams(e){return e.reduce(((t,r,a,s)=>{if(a%2==0)return t;let c=s[a-1];return c=c.toLowerCase(),this.isAlpha(c)&&(t[c]=parseFloat(r)),t}),{})}groupIntoLayers(e){var t;for(let r=0;r<e.length;r++){const a=e[r];if(a instanceof dS){const s=a.params;if(s.z&&(this.curZ=s.z),((t=s.e)!==null&&t!==void 0?t:0)>0&&(s.x!=null||s.y!=null)&&Math.abs(this.curZ-(this.maxZ||-1/0))>this.tolerance){const c=Math.abs(this.curZ-this.maxZ);this.maxZ=this.curZ,this.layers.push(new hS(this.layers.length,[],r,c))}}this.maxLayer.commands.push(a)}return this.layers}get maxLayer(){var e;return(e=this.layers[this.layers.length-1])!==null&&e!==void 0?e:this.preamble}parseMetadata(e){const t={};let r;for(const a of e){const s=a.comment;if(!s)continue;const c=s.indexOf("thumbnail begin"),u=s.indexOf("thumbnail end");c>-1?r=cg.parse(s.slice(c+15).trim()):r&&(u==-1?r.chars+=s.trim():(r.isValid&&(t[r.size]=r),r=void 0))}return{thumbnails:t}}}Wf.prototype.parseGcode=Wf.prototype.parseGCode;const pS={type:"change"},nm={type:"start"},mS={type:"end"},mf=new og,vS=new Po,mH=Math.cos(70*d1.DEG2RAD);class vH extends Fa{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(ue){ue.addEventListener("keydown",ze),this._domElementKeyEvents=ue},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ze),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(pS),r.update(),s=a.NONE},this.update=(function(){const ue=new B,ce=new Pa().setFromUnitVectors(e.up,new B(0,1,0)),xe=ce.clone().invert(),ge=new B,Me=new Pa,Ee=new B,Ne=2*Math.PI;return function(Je=null){const I=r.object.position;ue.copy(I).sub(r.target),ue.applyQuaternion(ce),u.setFromVector3(ue),r.autoRotate&&s===a.NONE&&O((function(ye){return ye!==null?2*Math.PI/60*r.autoRotateSpeed*ye:2*Math.PI/60/60*r.autoRotateSpeed})(Je)),r.enableDamping?(u.theta+=d.theta*r.dampingFactor,u.phi+=d.phi*r.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let b=r.minAzimuthAngle,q=r.maxAzimuthAngle;isFinite(b)&&isFinite(q)&&(b<-Math.PI?b+=Ne:b>Math.PI&&(b-=Ne),q<-Math.PI?q+=Ne:q>Math.PI&&(q-=Ne),u.theta=b<=q?Math.max(b,Math.min(q,u.theta)):u.theta>(b+q)/2?Math.max(b,u.theta):Math.min(q,u.theta)),u.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,u.phi)),u.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(p,r.dampingFactor):r.target.add(p),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&N||r.object.isOrthographicCamera?u.radius=j(u.radius):u.radius=j(u.radius*h),ue.setFromSpherical(u),ue.applyQuaternion(xe),I.copy(r.target).add(ue),r.object.lookAt(r.target),r.enableDamping===!0?(d.theta*=1-r.dampingFactor,d.phi*=1-r.dampingFactor,p.multiplyScalar(1-r.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let Ae=!1;if(r.zoomToCursor&&N){let ye=null;if(r.object.isPerspectiveCamera){const Ce=ue.length();ye=j(Ce*h);const Ke=Ce-ye;r.object.position.addScaledVector(R,Ke),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Ce=new B(P.x,P.y,0);Ce.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/h)),r.object.updateProjectionMatrix(),Ae=!0;const Ke=new B(P.x,P.y,0);Ke.unproject(r.object),r.object.position.sub(Ke).add(Ce),r.object.updateMatrixWorld(),ye=ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(ye).add(r.object.position):(mf.origin.copy(r.object.position),mf.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(mf.direction))<mH?e.lookAt(r.target):(vS.setFromNormalAndCoplanarPoint(r.object.up,r.target),mf.intersectPlane(vS,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/h)),r.object.updateProjectionMatrix(),Ae=!0);return h=1,N=!1,!!(Ae||ge.distanceToSquared(r.object.position)>c||8*(1-Me.dot(r.object.quaternion))>c||Ee.distanceToSquared(r.target)>0)&&(r.dispatchEvent(pS),ge.copy(r.object.position),Me.copy(r.object.quaternion),Ee.copy(r.target),!0)}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",X),r.domElement.removeEventListener("pointerdown",_e),r.domElement.removeEventListener("pointercancel",be),r.domElement.removeEventListener("wheel",ke),r.domElement.removeEventListener("pointermove",ve),r.domElement.removeEventListener("pointerup",be),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",ze),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const c=1e-6,u=new uS,d=new uS;let h=1;const p=new B,m=new pt,g=new pt,S=new pt,E=new pt,w=new pt,y=new pt,_=new pt,T=new pt,M=new pt,R=new B,P=new pt;let N=!1;const U=[],se={};function C(){return Math.pow(.95,r.zoomSpeed)}function O(ue){d.theta-=ue}function oe(ue){d.phi-=ue}const ne=(function(){const ue=new B;return function(ce,xe){ue.setFromMatrixColumn(xe,0),ue.multiplyScalar(-ce),p.add(ue)}})(),pe=(function(){const ue=new B;return function(ce,xe){r.screenSpacePanning===!0?ue.setFromMatrixColumn(xe,1):(ue.setFromMatrixColumn(xe,0),ue.crossVectors(r.object.up,ue)),ue.multiplyScalar(ce),p.add(ue)}})(),H=(function(){const ue=new B;return function(ce,xe){const ge=r.domElement;if(r.object.isPerspectiveCamera){const Me=r.object.position;ue.copy(Me).sub(r.target);let Ee=ue.length();Ee*=Math.tan(r.object.fov/2*Math.PI/180),ne(2*ce*Ee/ge.clientHeight,r.object.matrix),pe(2*xe*Ee/ge.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(ne(ce*(r.object.right-r.object.left)/r.object.zoom/ge.clientWidth,r.object.matrix),pe(xe*(r.object.top-r.object.bottom)/r.object.zoom/ge.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function Q(ue){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?h/=ue:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function le(ue){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?h*=ue:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function re(ue){if(!r.zoomToCursor)return;N=!0;const ce=r.domElement.getBoundingClientRect(),xe=ue.clientX-ce.left,ge=ue.clientY-ce.top,Me=ce.width,Ee=ce.height;P.x=xe/Me*2-1,P.y=-ge/Ee*2+1,R.set(P.x,P.y,1).unproject(r.object).sub(r.object.position).normalize()}function j(ue){return Math.max(r.minDistance,Math.min(r.maxDistance,ue))}function ie(ue){m.set(ue.clientX,ue.clientY)}function $(ue){E.set(ue.clientX,ue.clientY)}function L(){if(U.length===1)m.set(U[0].pageX,U[0].pageY);else{const ue=.5*(U[0].pageX+U[1].pageX),ce=.5*(U[0].pageY+U[1].pageY);m.set(ue,ce)}}function k(){if(U.length===1)E.set(U[0].pageX,U[0].pageY);else{const ue=.5*(U[0].pageX+U[1].pageX),ce=.5*(U[0].pageY+U[1].pageY);E.set(ue,ce)}}function W(){const ue=U[0].pageX-U[1].pageX,ce=U[0].pageY-U[1].pageY,xe=Math.sqrt(ue*ue+ce*ce);_.set(0,xe)}function Y(ue){if(U.length==1)g.set(ue.pageX,ue.pageY);else{const xe=Ve(ue),ge=.5*(ue.pageX+xe.x),Me=.5*(ue.pageY+xe.y);g.set(ge,Me)}S.subVectors(g,m).multiplyScalar(r.rotateSpeed);const ce=r.domElement;O(2*Math.PI*S.x/ce.clientHeight),oe(2*Math.PI*S.y/ce.clientHeight),m.copy(g)}function ee(ue){if(U.length===1)w.set(ue.pageX,ue.pageY);else{const ce=Ve(ue),xe=.5*(ue.pageX+ce.x),ge=.5*(ue.pageY+ce.y);w.set(xe,ge)}y.subVectors(w,E).multiplyScalar(r.panSpeed),H(y.x,y.y),E.copy(w)}function Z(ue){const ce=Ve(ue),xe=ue.pageX-ce.x,ge=ue.pageY-ce.y,Me=Math.sqrt(xe*xe+ge*ge);T.set(0,Me),M.set(0,Math.pow(T.y/_.y,r.zoomSpeed)),Q(M.y),_.copy(T)}function _e(ue){r.enabled!==!1&&(U.length===0&&(r.domElement.setPointerCapture(ue.pointerId),r.domElement.addEventListener("pointermove",ve),r.domElement.addEventListener("pointerup",be)),(function(ce){U.push(ce)})(ue),ue.pointerType==="touch"?(function(ce){switch(It(ce),U.length){case 1:switch(r.touches.ONE){case ss.ROTATE:if(r.enableRotate===!1)return;L(),s=a.TOUCH_ROTATE;break;case ss.PAN:if(r.enablePan===!1)return;k(),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(r.touches.TWO){case ss.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;r.enableZoom&&W(),r.enablePan&&k(),s=a.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;r.enableZoom&&W(),r.enableRotate&&L(),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&r.dispatchEvent(nm)})(ue):(function(ce){let xe;switch(ce.button){case 0:xe=r.mouseButtons.LEFT;break;case 1:xe=r.mouseButtons.MIDDLE;break;case 2:xe=r.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case as.DOLLY:if(r.enableZoom===!1)return;(function(ge){re(ge),_.set(ge.clientX,ge.clientY)})(ce),s=a.DOLLY;break;case as.ROTATE:if(ce.ctrlKey||ce.metaKey||ce.shiftKey){if(r.enablePan===!1)return;$(ce),s=a.PAN}else{if(r.enableRotate===!1)return;ie(ce),s=a.ROTATE}break;case as.PAN:if(ce.ctrlKey||ce.metaKey||ce.shiftKey){if(r.enableRotate===!1)return;ie(ce),s=a.ROTATE}else{if(r.enablePan===!1)return;$(ce),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&r.dispatchEvent(nm)})(ue))}function ve(ue){r.enabled!==!1&&(ue.pointerType==="touch"?(function(ce){switch(It(ce),s){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;Y(ce),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;ee(ce),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;(function(xe){r.enableZoom&&Z(xe),r.enablePan&&ee(xe)})(ce),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;(function(xe){r.enableZoom&&Z(xe),r.enableRotate&&Y(xe)})(ce),r.update();break;default:s=a.NONE}})(ue):(function(ce){switch(s){case a.ROTATE:if(r.enableRotate===!1)return;(function(xe){g.set(xe.clientX,xe.clientY),S.subVectors(g,m).multiplyScalar(r.rotateSpeed);const ge=r.domElement;O(2*Math.PI*S.x/ge.clientHeight),oe(2*Math.PI*S.y/ge.clientHeight),m.copy(g),r.update()})(ce);break;case a.DOLLY:if(r.enableZoom===!1)return;(function(xe){T.set(xe.clientX,xe.clientY),M.subVectors(T,_),M.y>0?Q(C()):M.y<0&&le(C()),_.copy(T),r.update()})(ce);break;case a.PAN:if(r.enablePan===!1)return;(function(xe){w.set(xe.clientX,xe.clientY),y.subVectors(w,E).multiplyScalar(r.panSpeed),H(y.x,y.y),E.copy(w),r.update()})(ce)}})(ue))}function be(ue){(function(ce){delete se[ce.pointerId];for(let xe=0;xe<U.length;xe++)if(U[xe].pointerId==ce.pointerId)return void U.splice(xe,1)})(ue),U.length===0&&(r.domElement.releasePointerCapture(ue.pointerId),r.domElement.removeEventListener("pointermove",ve),r.domElement.removeEventListener("pointerup",be)),r.dispatchEvent(mS),s=a.NONE}function ke(ue){r.enabled!==!1&&r.enableZoom!==!1&&s===a.NONE&&(ue.preventDefault(),r.dispatchEvent(nm),(function(ce){re(ce),ce.deltaY<0?le(C()):ce.deltaY>0&&Q(C()),r.update()})(ue),r.dispatchEvent(mS))}function ze(ue){r.enabled!==!1&&r.enablePan!==!1&&(function(ce){let xe=!1;switch(ce.code){case r.keys.UP:ce.ctrlKey||ce.metaKey||ce.shiftKey?oe(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(0,r.keyPanSpeed),xe=!0;break;case r.keys.BOTTOM:ce.ctrlKey||ce.metaKey||ce.shiftKey?oe(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(0,-r.keyPanSpeed),xe=!0;break;case r.keys.LEFT:ce.ctrlKey||ce.metaKey||ce.shiftKey?O(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(r.keyPanSpeed,0),xe=!0;break;case r.keys.RIGHT:ce.ctrlKey||ce.metaKey||ce.shiftKey?O(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(-r.keyPanSpeed,0),xe=!0}xe&&(ce.preventDefault(),r.update())})(ue)}function X(ue){r.enabled!==!1&&ue.preventDefault()}function It(ue){let ce=se[ue.pointerId];ce===void 0&&(ce=new pt,se[ue.pointerId]=ce),ce.set(ue.pageX,ue.pageY)}function Ve(ue){const ce=ue.pointerId===U[0].pointerId?U[1]:U[0];return se[ce.pointerId]}r.domElement.addEventListener("contextmenu",X),r.domElement.addEventListener("pointerdown",_e),r.domElement.addEventListener("pointercancel",be),r.domElement.addEventListener("wheel",ke,{passive:!1}),this.update()}}Oe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},hr.line={uniforms:ag.merge([Oe.common,Oe.fog,Oe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class I1 extends jo{constructor(e){super({type:"LineMaterial",uniforms:ag.clone(hr.line.uniforms),vertexShader:hr.line.vertexShader,fragmentShader:hr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const gS=new Wr,vf=new B;class U1 extends eH{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new cn([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new cn([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){const t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new Km(t,6,1);return this.setAttribute("instanceStart",new No(r,3,0)),this.setAttribute("instanceEnd",new No(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new Km(t,6,1);return this.setAttribute("instanceColorStart",new No(r,3,0)),this.setAttribute("instanceColorEnd",new No(r,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new X4(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),gS.setFromBufferAttribute(t),this.boundingBox.union(gS))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let a=0;for(let s=0,c=e.count;s<c;s++)vf.fromBufferAttribute(e,s),a=Math.max(a,r.distanceToSquared(vf)),vf.fromBufferAttribute(t,s),a=Math.max(a,r.distanceToSquared(vf));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const _S=new B,yS=new B,Ln=new Gt,Dn=new Gt,pi=new Gt,rm=new B,im=new Xt,In=new tH,xS=new B,gf=new Wr,_f=new Ti,mi=new Gt;let vi,wa;function SS(n,e,t){return mi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),mi.multiplyScalar(1/mi.w),mi.x=wa/t.width,mi.y=wa/t.height,mi.applyMatrix4(n.projectionMatrixInverse),mi.multiplyScalar(1/mi.w),Math.abs(Math.max(mi.x,mi.y))}class gH extends ai{constructor(e=new U1,t=new I1({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let c=0,u=0,d=t.count;c<d;c++,u+=2)_S.fromBufferAttribute(t,c),yS.fromBufferAttribute(r,c),a[u]=u===0?0:a[u-1],a[u+1]=a[u]+_S.distanceTo(yS);const s=new Km(a,2,1);return e.setAttribute("instanceDistanceStart",new No(s,1,0)),e.setAttribute("instanceDistanceEnd",new No(s,1,1)),this}raycast(e,t){const r=this.material.worldUnits,a=e.camera;a!==null||r||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;vi=e.ray;const c=this.matrixWorld,u=this.geometry,d=this.material;let h,p;wa=d.linewidth+s,u.boundingSphere===null&&u.computeBoundingSphere(),_f.copy(u.boundingSphere).applyMatrix4(c),r?h=.5*wa:h=SS(a,Math.max(a.near,_f.distanceToPoint(vi.origin)),d.resolution),_f.radius+=h,vi.intersectsSphere(_f)!==!1&&(u.boundingBox===null&&u.computeBoundingBox(),gf.copy(u.boundingBox).applyMatrix4(c),r?p=.5*wa:p=SS(a,Math.max(a.near,gf.distanceToPoint(vi.origin)),d.resolution),gf.expandByScalar(p),vi.intersectsBox(gf)!==!1&&(r?(function(m,g){const S=m.matrixWorld,E=m.geometry,w=E.attributes.instanceStart,y=E.attributes.instanceEnd;for(let _=0,T=Math.min(E.instanceCount,w.count);_<T;_++){In.start.fromBufferAttribute(w,_),In.end.fromBufferAttribute(y,_),In.applyMatrix4(S);const M=new B,R=new B;vi.distanceSqToSegment(In.start,In.end,R,M),R.distanceTo(M)<.5*wa&&g.push({point:R,pointOnLine:M,distance:vi.origin.distanceTo(R),object:m,face:null,faceIndex:_,uv:null,uv1:null})}})(this,t):(function(m,g,S){const E=g.projectionMatrix,w=m.material.resolution,y=m.matrixWorld,_=m.geometry,T=_.attributes.instanceStart,M=_.attributes.instanceEnd,R=Math.min(_.instanceCount,T.count),P=-g.near;vi.at(1,pi),pi.w=1,pi.applyMatrix4(g.matrixWorldInverse),pi.applyMatrix4(E),pi.multiplyScalar(1/pi.w),pi.x*=w.x/2,pi.y*=w.y/2,pi.z=0,rm.copy(pi),im.multiplyMatrices(g.matrixWorldInverse,y);for(let N=0,U=R;N<U;N++){if(Ln.fromBufferAttribute(T,N),Dn.fromBufferAttribute(M,N),Ln.w=1,Dn.w=1,Ln.applyMatrix4(im),Dn.applyMatrix4(im),Ln.z>P&&Dn.z>P)continue;if(Ln.z>P){const ne=Ln.z-Dn.z,pe=(Ln.z-P)/ne;Ln.lerp(Dn,pe)}else if(Dn.z>P){const ne=Dn.z-Ln.z,pe=(Dn.z-P)/ne;Dn.lerp(Ln,pe)}Ln.applyMatrix4(E),Dn.applyMatrix4(E),Ln.multiplyScalar(1/Ln.w),Dn.multiplyScalar(1/Dn.w),Ln.x*=w.x/2,Ln.y*=w.y/2,Dn.x*=w.x/2,Dn.y*=w.y/2,In.start.copy(Ln),In.start.z=0,In.end.copy(Dn),In.end.z=0;const se=In.closestPointToPointParameter(rm,!0);In.at(se,xS);const C=d1.lerp(Ln.z,Dn.z,se),O=C>=-1&&C<=1,oe=rm.distanceTo(xS)<.5*wa;if(O&&oe){In.start.fromBufferAttribute(T,N),In.end.fromBufferAttribute(M,N),In.start.applyMatrix4(y),In.end.applyMatrix4(y);const ne=new B,pe=new B;vi.distanceSqToSegment(In.start,In.end,pe,ne),S.push({point:pe,pointOnLine:ne,distance:vi.origin.distanceTo(pe),object:m,face:null,faceIndex:N,uv:null,uv1:null})}}})(this,a,t)))}}class _H extends Ad{constructor(e,t,r,a,s=4473924,c=8947848){s=new nt(s),c=new nt(c);const u=Math.round(e/t);r=Math.round(r/a)*a/2;const d=[],h=[];let p=0;for(let g=-1*(e=u*t/2);g<=e;g+=t){d.push(g,0,-1*r,g,0,r);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}for(let g=-1*r;g<=r;g+=a){d.push(-1*e,0,g,e,0,g);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}const m=new Yn;m.setAttribute("position",new cn(d,3)),m.setAttribute("color",new cn(h,3)),super(m,new Pu({vertexColors:!0,toneMapped:!1}))}}function yH(n,e,t,r){const a=(function(c,u,d){c*=.5,u*=.5,d*=.5;const h=new Yn,p=[];return p.push(-c,-u,-d,-c,u,-d,-c,u,-d,c,u,-d,c,u,-d,c,-u,-d,c,-u,-d,-c,-u,-d,-c,-u,d,-c,u,d,-c,u,d,c,u,d,c,u,d,c,-u,d,c,-u,d,-c,-u,d,-c,-u,-d,-c,-u,d,-c,u,-d,-c,u,d,c,u,-d,c,u,d,c,-u,-d,c,-u,d),h.setAttribute("position",new cn(p,3)),h})(n,e,t),s=new Ad(a,new Y4({color:new nt(r),dashSize:3,gapSize:1}));return s.computeLineDistances(),s}var Ql=function(){var n=0,e=document.createElement("div");function t(p){return e.appendChild(p.dom),p}function r(p){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===p?"block":"none";n=p}e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",(function(p){p.preventDefault(),r(++n%e.children.length)}),!1);var a=(performance||Date).now(),s=a,c=0,u=t(new Ql.Panel("FPS","#0ff","#002")),d=t(new Ql.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new Ql.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=s+1e3&&(u.update(1e3*c/(p-s),100),s=p,c=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:r}};Ql.Panel=function(n,e,t){var r=1/0,a=0,s=Math.round,c=s(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,m=3*c,g=15*c,S=74*c,E=30*c,w=document.createElement("canvas");w.width=u,w.height=d,w.style.cssText="width:80px;height:48px";var y=w.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,u,d),y.fillStyle=e,y.fillText(n,h,p),y.fillRect(m,g,S,E),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m,g,S,E),{dom:w,update:function(_,T){r=Math.min(r,_),a=Math.max(a,_),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,u,g),y.fillStyle=e,y.fillText(s(_)+" "+n+" ("+s(r)+"-"+s(a)+")",h,p),y.drawImage(w,m+c,g,S-c,E,m,g,S-c,E),y.fillRect(m+S-c,g,c,E),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m+S-c,g,c,s((1-_/T)*E))}}};var xH=Ql;class wS{constructor(e,t){this.openFolders=[],this.watchedObject=e,this.options=t,this.gui=new Gf,this.gui.title("Dev info"),this.setup()}setup(){this.loadOpenFolders(),this.options&&!this.options.renderer||this.setupRedererFolder(),this.options&&!this.options.camera||this.setupCameraFolder(),this.options&&!this.options.parser||this.setupParserFolder(),this.options&&!this.options.buildVolume||this.setupBuildVolumeFolder(),this.options&&!this.options.devHelpers||this.setupDevHelpers()}reset(){this.gui.destroy(),this.gui=new Gf,this.gui.title("Dev info"),this.setup()}loadOpenFolders(){this.openFolders=JSON.parse(localStorage.getItem("dev-gui-open")||"{}").open||[]}saveOpenFolders(){this.openFolders=this.gui.foldersRecursive().filter((e=>!e._closed)).map((e=>e._title)),console.log(this.openFolders),localStorage.setItem("dev-gui-open",JSON.stringify({open:this.openFolders}))}setupRedererFolder(){const e=this.gui.addFolder("Render Info");this.openFolders.includes("Render Info")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.renderer.info.render,"triangles").listen(),e.add(this.watchedObject.renderer.info.render,"calls").listen(),e.add(this.watchedObject.renderer.info.render,"lines").listen(),e.add(this.watchedObject.renderer.info.render,"points").listen(),e.add(this.watchedObject.renderer.info.memory,"geometries").listen(),e.add(this.watchedObject.renderer.info.memory,"textures").listen(),e.add(this.watchedObject,"_lastRenderTime").listen()}setupCameraFolder(){const e=this.gui.addFolder("Camera");this.openFolders.includes("Camera")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()}));const t=e.addFolder("Camera position");t.add(this.watchedObject.camera.position,"x").listen(),t.add(this.watchedObject.camera.position,"y").listen(),t.add(this.watchedObject.camera.position,"z").listen();const r=e.addFolder("Camera rotation");r.add(this.watchedObject.camera.rotation,"x").listen(),r.add(this.watchedObject.camera.rotation,"y").listen(),r.add(this.watchedObject.camera.rotation,"z").listen()}setupParserFolder(){const e=this.gui.addFolder("Parser");this.openFolders.includes("Parser")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.parser,"curZ").listen(),e.add(this.watchedObject.parser,"maxZ").listen(),e.add(this.watchedObject.parser,"tolerance").listen(),e.add(this.watchedObject.parser.layers,"length").name("layers.count").listen(),e.add(this.watchedObject.parser.lines,"length").name("lines.count").listen()}setupBuildVolumeFolder(){const e=this.gui.addFolder("Build Volume");this.openFolders.includes("Build Volume")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.buildVolume,"x").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"y").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"z").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()}))}setupDevHelpers(){const e=this.gui.addFolder("Dev Helpers");this.openFolders.includes("Dev Helpers")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject,"_wireframe").listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject,"render").listen(),e.add(this.watchedObject,"clear").listen()}}class SH extends Yn{constructor(e=[new B],t=.6,r=.2,a=8){super(),this.type="ExtrusionGeometry",this.parameters={points:e,lineWidth:t,lineHeight:r,radialSegments:a,closed:!1};const s=new B,c=new B,u=new pt,d=[],h=[],p=[],m=[];function g(S){const[E,w,y]=(function(_){const T=e[_],M=new B,R=new B,P=new B,N=new B;M.copy(T).sub(e[_-1]||T).normalize().add((e[_+1]||T).clone().sub(T).normalize()).normalize();let U=Number.MAX_VALUE;const se=Math.abs(M.x),C=Math.abs(M.y),O=Math.abs(M.z);return se<=U&&(U=se,R.set(1,0,0)),C<=U&&(U=C,R.set(0,1,0)),O<=U&&R.set(0,0,1),N.crossVectors(M,R).normalize(),R.crossVectors(M,N),P.crossVectors(M,R),[T,R,P]})(S);for(let _=0;_<=a;_++){const T=_/a*Math.PI*2,M=Math.sin(T),R=-Math.cos(T);c.x=R*w.x+M*y.x,c.y=R*w.y+M*y.y,c.z=R*w.z+M*y.z,c.normalize(),h.push(c.x,c.y,c.z),s.x=E.x+t*c.x*.5,s.y=E.y+t*c.y*.5,s.z=E.z+r*c.z*.5,d.push(s.x,s.y,s.z)}}(function(){for(let S=0;S<e.length;S++)g(S);g(closed===!1?e.length-1:0),(function(){for(let S=0;S<e.length;S++)for(let E=0;E<=a;E++)u.x=S/e.length,u.y=E/a,p.push(u.x,u.y)})(),(function(){for(let S=1;S<e.length;S++)for(let E=1;E<=a;E++){const w=(a+1)*(S-1)+(E-1),y=(a+1)*S+(E-1),_=(a+1)*S+E,T=(a+1)*(S-1)+E;m.push(w,y,T),m.push(y,_,T)}})()})(),this.setIndex(m),this.setAttribute("position",new cn(d,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(p,2))}}class eu{static get initial(){const e=new eu;return Object.assign(e,{x:0,y:0,z:0,r:0,e:0,i:0,j:0,t:0}),e}}const om={h:0,s:0,l:0};class Ds{constructor(e){var t,r,a,s,c,u,d,h,p;if(this.minLayerThreshold=.05,this.renderExtrusion=!0,this.renderTravel=!1,this.renderTubes=!1,this.extrusionWidth=.6,this.singleLayerMode=!1,this.initialCameraPosition=[-100,400,450],this.debug=!1,this.inches=!1,this.nonTravelmoves=[],this.disableGradient=!1,this.state=eu.initial,this.beyondFirstMove=!1,this.disposables=[],this._extrusionColor=Ds.defaultExtrusionColor,this.renderLayerIndex=0,this._geometries={},this._backgroundColor=new nt(14737632),this._travelColor=new nt(10027008),this._toolColors={},this.devMode=!1,this._lastRenderTime=0,this._wireframe=!1,this.minLayerThreshold=(t=e.minLayerThreshold)!==null&&t!==void 0?t:this.minLayerThreshold,this.parser=new Wf(this.minLayerThreshold),this.scene=new O4,this.scene.background=this._backgroundColor,e.backgroundColor!==void 0&&(this.backgroundColor=new nt(e.backgroundColor)),this.targetId=e.targetId,this.endLayer=e.endLayer,this.startLayer=e.startLayer,this.lineWidth=e.lineWidth,this.lineHeight=e.lineHeight,this.buildVolume=e.buildVolume,this.initialCameraPosition=(r=e.initialCameraPosition)!==null&&r!==void 0?r:this.initialCameraPosition,this.debug=(a=e.debug)!==null&&a!==void 0?a:this.debug,this.renderExtrusion=(s=e.renderExtrusion)!==null&&s!==void 0?s:this.renderExtrusion,this.renderTravel=(c=e.renderTravel)!==null&&c!==void 0?c:this.renderTravel,this.nonTravelmoves=(u=e.nonTravelMoves)!==null&&u!==void 0?u:this.nonTravelmoves,this.renderTubes=(d=e.renderTubes)!==null&&d!==void 0?d:this.renderTubes,this.extrusionWidth=(h=e.extrusionWidth)!==null&&h!==void 0?h:this.extrusionWidth,this.devMode=(p=e.devMode)!==null&&p!==void 0?p:this.devMode,this.stats=this.devMode?new xH:void 0,e.extrusionColor!==void 0&&(this.extrusionColor=e.extrusionColor),e.travelColor!==void 0&&(this.travelColor=new nt(e.travelColor)),e.topLayerColor!==void 0&&(this.topLayerColor=new nt(e.topLayerColor)),e.lastSegmentColor!==void 0&&(this.lastSegmentColor=new nt(e.lastSegmentColor)),e.toolColors){this._toolColors={};for(const[S,E]of Object.entries(e.toolColors))this._toolColors[parseInt(S)]=new nt(E)}if(e.disableGradient!==void 0&&(this.disableGradient=e.disableGradient),console.info("Using THREE r"+xd),console.debug("opts",e),this.targetId&&console.warn("`targetId` is deprecated and will removed in the future. Use `canvas` instead."),e.canvas)this.canvas=e.canvas,this.renderer=new Ym({canvas:this.canvas,preserveDrawingBuffer:!0});else{if(!this.targetId)throw Error("Set either opts.canvas or opts.targetId");const S=document.getElementById(this.targetId);if(!S)throw new Error("Unable to find element "+this.targetId);this.renderer=new Ym({preserveDrawingBuffer:!0}),this.canvas=this.renderer.domElement,S.appendChild(this.canvas)}this.camera=new Tr(25,this.canvas.offsetWidth/this.canvas.offsetHeight,10,5e3),this.camera.position.fromArray(this.initialCameraPosition);const m=this.camera.far,g=.8*m;this.scene.fog=new ug(this._backgroundColor,g,m),this.resize(),this.controls=new vH(this.camera,this.renderer.domElement),this.initScene(),this.animate(),e.allowDragNDrop&&this._enableDropHandler(),this.initStats()}get extrusionColor(){return this._extrusionColor}set extrusionColor(e){if(Array.isArray(e)){this._extrusionColor=[];for(const[t,r]of e.entries())this._extrusionColor[t]=new nt(r)}else this._extrusionColor=new nt(e)}get currentToolColor(){var e;return this._extrusionColor===void 0?Ds.defaultExtrusionColor:this._extrusionColor instanceof nt?this._extrusionColor:(e=this._extrusionColor[this.state.t])!==null&&e!==void 0?e:Ds.defaultExtrusionColor}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=new nt(e),this.scene.background=this._backgroundColor}get travelColor(){return this._travelColor}set travelColor(e){this._travelColor=new nt(e)}get topLayerColor(){return this._topLayerColor}set topLayerColor(e){this._topLayerColor=e!==void 0?new nt(e):void 0}get lastSegmentColor(){return this._lastSegmentColor}set lastSegmentColor(e){this._lastSegmentColor=e!==void 0?new nt(e):void 0}get layers(){return[this.parser.preamble].concat(this.parser.layers.concat())}get maxLayerIndex(){var e;return((e=this.endLayer)!==null&&e!==void 0?e:this.layers.length)-1}get minLayerIndex(){var e;return this.singleLayerMode?this.maxLayerIndex:((e=this.startLayer)!==null&&e!==void 0?e:0)-1}animate(){var e;this.animationFrameId=requestAnimationFrame((()=>this.animate())),this.controls.update(),this.renderer.render(this.scene,this.camera),(e=this.stats)===null||e===void 0||e.update()}processGCode(e){this.parser.parseGCode(e),this.render()}initScene(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);for(;this.disposables.length>0;){const e=this.disposables.pop();e&&e.dispose()}if(this.debug&&this.buildVolume){const e=new nH(Math.max(this.buildVolume.x/2,this.buildVolume.y/2)+20);this.scene.add(e)}if(this.buildVolume&&this.drawBuildVolume(),this.renderTubes){console.warn("Volumetric rendering is experimental. It may not work as expected or change in the future.");const e=new Q4(13421772,.3*Math.PI),t=new J4(16777215,Math.PI,void 0,.001);t.position.set(0,500,500),this.scene.add(e),this.scene.add(t)}}createGroup(e){const t=new $l;return t.name=e,t.quaternion.setFromEuler(new Cu(-Math.PI/2,0,0)),this.buildVolume?t.position.set(-this.buildVolume.x/2,0,this.buildVolume.y/2):t.position.set(-100,0,100),t}render(){const e=performance.now();this.group=this.createGroup("allLayers"),this.state=eu.initial,this.initScene();for(let t=0;t<this.layers.length;t++)this.renderLayer(t);this.batchGeometries(),this.scene.add(this.group),this.renderer.render(this.scene,this.camera),this._lastRenderTime=performance.now()-e}renderAnimated(e=1){return tm(this,void 0,void 0,(function*(){return this.initScene(),this.renderLayerIndex=0,this.renderFrameLoop(e>0?e:1)}))}renderFrameLoop(e){return new Promise((t=>{const r=()=>{this.renderLayerIndex>this.layers.length-1?t():(this.renderFrame(e),requestAnimationFrame(r))};r()}))}renderFrame(e){this.group=this.createGroup("layer"+this.renderLayerIndex);for(let t=0;t<e&&this.renderLayerIndex+t<this.layers.length;t++)this.renderLayer(this.renderLayerIndex),this.renderLayerIndex++;this.batchGeometries(),this.scene.add(this.group)}renderLayer(e){var t,r,a,s,c,u,d,h;if(e>this.maxLayerIndex)return;const p=this.layers[e],m={extrusion:[],travel:[],z:this.state.z,height:p.height};for(const g of p.commands)if(g.gcode!="g20"){if(g.gcode.startsWith("t")){this.doRenderExtrusion(m,e),m.extrusion=[];const S=g;this.state.t=S.toolIndex}else if(["g0","g00","g1","g01","g2","g02","g3","g03"].indexOf(g.gcode)>-1){const S=g,E={x:(t=S.params.x)!==null&&t!==void 0?t:this.state.x,y:(r=S.params.y)!==null&&r!==void 0?r:this.state.y,z:(a=S.params.z)!==null&&a!==void 0?a:this.state.z,r:(s=S.params.r)!==null&&s!==void 0?s:this.state.r,e:(c=S.params.e)!==null&&c!==void 0?c:this.state.e,i:(u=S.params.i)!==null&&u!==void 0?u:this.state.i,j:(d=S.params.j)!==null&&d!==void 0?d:this.state.j,t:this.state.t};if(e>=this.minLayerIndex){const w=((h=S.params.e)!==null&&h!==void 0?h:0)>0||this.nonTravelmoves.indexOf(g.gcode)>-1;(E.x!=this.state.x||E.y!=this.state.y||E.z!=this.state.z)&&(w&&this.renderExtrusion||!w&&this.renderTravel)&&(g.gcode=="g2"||g.gcode=="g3"||g.gcode=="g02"||g.gcode=="g03"?this.addArcSegment(m,this.state,E,w,g.gcode=="g2"||g.gcode=="g02"):this.addLineSegment(m,this.state,E,w))}this.state.x=E.x,this.state.y=E.y,this.state.z=E.z,this.beyondFirstMove||(this.beyondFirstMove=!0)}}else this.setInches();this.doRenderExtrusion(m,e)}doRenderExtrusion(e,t){var r,a;if(this.renderExtrusion){let s=this.currentToolColor;if(!this.singleLayerMode&&!this.renderTubes&&!this.disableGradient){const c=.1+.7*t/this.layers.length;s.getHSL(om),s=new nt().setHSL(om.h,om.s,c)}if(t==this.layers.length-1){const c=(r=this._topLayerColor)!==null&&r!==void 0?r:s,u=(a=this._lastSegmentColor)!==null&&a!==void 0?a:c,d=e.extrusion.splice(-3),h=e.extrusion.splice(-3);this.renderTubes?(this.addTubeLine(e.extrusion,c.getHex(),e.height),this.addTubeLine([...h,...d],u.getHex(),e.height)):(this.addLine(e.extrusion,c.getHex()),this.addLine([...h,...d],u.getHex()))}else this.renderTubes?this.addTubeLine(e.extrusion,s.getHex(),e.height):this.addLine(e.extrusion,s.getHex())}this.renderTravel&&this.addLine(e.travel,this._travelColor.getHex())}setInches(){this.beyondFirstMove?console.warn("Switching units after movement is already made is discouraged and is not supported."):this.inches=!0}drawBuildVolume(){if(!this.buildVolume)return;this.scene.add(new _H(this.buildVolume.x,10,this.buildVolume.y,10));const e=yH(this.buildVolume.x,this.buildVolume.z,this.buildVolume.y,8947848);e.position.setY(this.buildVolume.z/2),this.scene.add(e)}clear(){this.resetState(),this.parser=new Wf(this.minLayerThreshold)}resetState(){var e;this.startLayer=1,this.endLayer=1/0,this.singleLayerMode=!1,this.beyondFirstMove=!1,this.state=eu.initial,(e=this.devGui)===null||e===void 0||e.reset(),this._geometries={}}resize(){const[e,t]=[this.canvas.offsetWidth,this.canvas.offsetHeight];this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1)}addLineSegment(e,t,r,a){(a?e.extrusion:e.travel).push(t.x,t.y,t.z,r.x,r.y,r.z)}addArcSegment(e,t,r,a,s){const c=a?e.extrusion:e.travel,u=t.x,d=t.y,h=t.z,p=r.x,m=r.y,g=r.z;let S=r.r,E=r.i,w=r.j;if(S){const Q=p-u,le=m-d,re=Math.sqrt(Math.pow(Q/2,2)+Math.pow(le/2,2));S=Math.max(S,re);const j=Math.pow(Q,2)+Math.pow(le,2),ie=Math.pow(S,2)-j/4;let $=Math.sqrt(ie/j);(s&&S<0||!s&&S>0)&&($=-$),E=Q/2+le*$,w=le/2-Q*$}const y=u==p&&d==m,_=u+E,T=d+w,M=Math.sqrt(E*E+w*w),R=Math.atan2(-w,-E),P=Math.atan2(m-T,p-_);let N;y?N=2*Math.PI:(N=s?R-P:P-R,N<0&&(N+=2*Math.PI));let U=M*N/1.8;this.inches&&(U*=25),U<1&&(U=1);let se=N/U;se*=s?-1:1;const C=[];C.push({x:u,y:d,z:h});const O=(h-g)/U;let oe=u,ne=d,pe=h,H=R;for(let Q=0;Q<U-1;Q++)H+=se,oe=_+M*Math.cos(H),ne=T+M*Math.sin(H),pe+=O,C.push({x:oe,y:ne,z:pe});C.push({x:r.x,y:r.y,z:r.z});for(let Q=0;Q<C.length-1;Q++)c.push(C[Q].x,C[Q].y,C[Q].z,C[Q+1].x,C[Q+1].y,C[Q+1].z)}addLine(e,t){var r;if(typeof this.lineWidth=="number"&&this.lineWidth>0)return void this.addThickLine(e,t);const a=new Yn;a.setAttribute("position",new cn(e,3)),this.disposables.push(a);const s=new Pu({color:t});this.disposables.push(s);const c=new Ad(a,s);(r=this.group)===null||r===void 0||r.add(c)}addTubeLine(e,t,r=.2){let a=[];const s=[];for(let c=0;c<e.length;c+=6){const u=e.slice(c,c+9),d=new B(u[0],u[1],u[2]),h=new B(u[3],u[4],u[5]),p=new B(u[6],u[7],u[8]);a.push(d),h.equals(p)||(a.push(h),s.push(a),a=[])}s.forEach((c=>{var u;const d=new SH(c,this.extrusionWidth,this.lineHeight||r,4);(u=this._geometries)[t]||(u[t]=[]),this._geometries[t].push(d)}))}addThickLine(e,t){var r;if(!e.length||!this.lineWidth)return;const a=new U1;this.disposables.push(a);const s=new I1({color:t,linewidth:this.lineWidth/(1e3*window.devicePixelRatio)});this.disposables.push(s),a.setPositions(e);const c=new gH(a,s);(r=this.group)===null||r===void 0||r.add(c)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[],this.controls.dispose(),this.renderer.dispose(),this.cancelAnimation()}cancelAnimation(){this.animationFrameId!==void 0&&cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0}_enableDropHandler(){console.warn("Drag and drop is deprecated as a library feature. See the demo how to implement your own."),this.canvas.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.canvas.classList.add("dragging")})),this.canvas.addEventListener("dragleave",(e=>{e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging")})),this.canvas.addEventListener("drop",(e=>tm(this,void 0,void 0,(function*(){var t,r;e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging");const a=((r=(t=e.dataTransfer)===null||t===void 0?void 0:t.files)!==null&&r!==void 0?r:[])[0];this.clear(),yield this._readFromStream(a.stream()),this.render()}))))}batchGeometries(){if(this._geometries)for(const e in this._geometries){const t=this.createBatchMesh(parseInt(e));for(;this._geometries[e].length>0;){const r=this._geometries[e].pop();t.addGeometry(r)}}}createBatchMesh(e){var t;const r=this._geometries[e],a=new q4({color:e,wireframe:this._wireframe});this.disposables.push(a);const s=r.reduce(((u,d)=>3*d.attributes.position.count+u),0),c=new $4(r.length,s,void 0,a);return this.disposables.push(c),(t=this.group)===null||t===void 0||t.add(c),c}_readFromStream(e){var t,r;return tm(this,void 0,void 0,(function*(){const a=e.getReader();let s,c="",u=0;do{console.debug("reading from stream"),s=yield a.read(),u+=(r=(t=s.value)===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0;const h=(d=s.value,new TextDecoder("utf-8").decode(d)),p=h.lastIndexOf(`
`),m=h.slice(0,p);this.parser.parseGCode(c+m),c=h.slice(p)}while(!s.done);var d;console.debug("read from stream",u)}))}initGui(){typeof this.devMode=="boolean"&&this.devMode===!0?this.devGui=new wS(this):typeof this.devMode=="object"&&(this.devGui=new wS(this,this.devMode))}initStats(){var e;this.stats&&(typeof this.devMode=="object"&&(this.statsContainer=this.devMode.statsContainer),((e=this.statsContainer)!==null&&e!==void 0?e:document.body).appendChild(this.stats.dom),this.stats.dom.classList.add("stats"),this.initGui())}}Ds.defaultExtrusionColor=new nt("hotpink");const wH=function(n){return new Ds(n)},EH=sn.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`,MH=({gcode:n,endLayer:e,onMaxLayerIndex:t})=>{const r=Ie.useRef(null),a=Ie.useRef({webgl:null}),s=a.current.webgl,c=()=>{s&&(s.clear(),s.processGCode(n),t(ud(s.layers.length)),s.render())};return Ie.useEffect(()=>{!r.current||s||(a.current.webgl=wH({canvas:r.current,lineWidth:4,lineHeight:4,renderTravel:!1,renderExtrusion:!0,renderTubes:!1,startLayer:0,endLayer:On(e),backgroundColor:"black",buildVolume:{x:220,y:220,z:0}}),c())},[]),Ie.useEffect(()=>{c()},[n]),Ie.useEffect(()=>{s&&(s.endLayer=On(e),s.render())},[e]),Xe.jsx(EH,{ref:r})},AH=dU`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,TH=sn.div`
    color: #2bc0b4;
    position: absolute;
    bottom: 16px;
    right: 70px;
    font-size: 12px;
    opacity: 0.7;
    display: flex;
    align-items: center;
    gap: 6px;
`,bH=sn.div`
    width: 12px;
    height: 12px;
    border: 2px solid transparent;
    border-top: 2px solid #2bc0b4;
    border-radius: 50%;
    animation: ${AH} 1s linear infinite;
`,CH=({fileName:n,status:e})=>(console.log(e),Xe.jsxs(TH,{children:[eM(e,{NotAsked:()=>Xe.jsx(Xe.Fragment,{}),Loading:()=>Xe.jsx(bH,{}),Loaded:t=>Xe.jsx(Xe.Fragment,{}),Error:t=>Xe.jsx("div",{children:"Error"})}),n]}));var kl=At(Ua(Xo)),As=kE(),N1={reflectSymbol:function(){return"startLayer"}},RH=Yo(N1)()()(si),F1={reflectSymbol:function(){return"endLayer"}},PH=Yo(F1)()()(si),O1={reflectSymbol:function(){return"gcodeLines"}},LH=Yo(O1)()()(si),k1=_r(yr),z1={reflectSymbol:function(){return"gcodeFile"}},DH=Yo(z1)()()(si),B1={reflectSymbol:function(){return"minLayer"}},IH=Yo(B1)()()(si),H1={reflectSymbol:function(){return"maxLayer"}},UH=Yo(H1)()()(si),zl=WE(),$f={reflectSymbol:function(){return"MsgSetStartLayer"}},jf={reflectSymbol:function(){return"MsgSetEndLayer"}},Xf={reflectSymbol:function(){return"MsgSetGcodeFile"}},qf={reflectSymbol:function(){return"MsgSetMinLayer"}},dg={reflectSymbol:function(){return"MsgSetMaxLayer"}},gi=HE(),Yf=Na(qf),yf=Ho(XE),hg=Na(dg),Td=Ho(jE),V1=hg(Td),Kf=Na(Xf),G1=V1(Yf(Td)(kr)()())()(),Cf=Na(jf),ES=Kf(Td)(G1)()(),Jm=Na($f),NH=At(_u),FH=fn(Su),OH=Gv(js),kH=At(wu),zH=yu(Sv(js)),BH=gv(Ev(Rr)),HH=Qb(vC(l2)),W1=xu(Rr),MS=Qf(td)(W1),VH=fn(W1),GH=Ov(xE(yE)),Bl=Ho($E),WH=YE(gi(Cf(Bl)(Kf(Bl)(hg(Bl)(Yf(Bl)(Jm(Bl)(kr)()())()())()())()())()())),$H=gE()(),jH={reflectSymbol:function(){return"PubState"}},Hl=Vv(),Qm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ev=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Is=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),tv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),nv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),$1={to:function(n){if(n instanceof Ft)return new Qm(n.value0);if(n instanceof Re&&n.value0 instanceof Ft)return new ev(n.value0.value0);if(n instanceof Re&&n.value0 instanceof Re&&n.value0.value0 instanceof Ft)return new Is(n.value0.value0.value0);if(n instanceof Re&&n.value0 instanceof Re&&n.value0.value0 instanceof Re&&n.value0.value0.value0 instanceof Ft)return new tv(n.value0.value0.value0.value0);if(n instanceof Re&&n.value0 instanceof Re&&n.value0.value0 instanceof Re&&n.value0.value0.value0 instanceof Re)return new nv(n.value0.value0.value0.value0);throw new Error("Failed pattern match at StateMachines.Viewer (line 69, column 1 - line 69, column 30): "+[n.constructor.name])},from:function(n){if(n instanceof Qm)return new Ft(n.value0);if(n instanceof ev)return new Re(new Ft(n.value0));if(n instanceof Is)return new Re(new Re(new Ft(n.value0)));if(n instanceof tv)return new Re(new Re(new Re(new Ft(n.value0))));if(n instanceof nv)return new Re(new Re(new Re(new Re(n.value0))));throw new Error("Failed pattern match at StateMachines.Viewer (line 69, column 1 - line 69, column 30): "+[n.constructor.name])}},Vl=Ho(qE($1)),XH=function(n){return function(e){if(n instanceof Qm)return kl(_i((function(){var t=As(Ro)(ji);return function(r){return t(RH(r))}})())(n.value0)(e));if(n instanceof ev)return kl(_i((function(){var t=As(Ro)(ji);return function(r){return t(PH(r))}})())(n.value0)(e));if(n instanceof Is)return kl((function(){if(n.value0 instanceof Vo){var t=Aw(`
`)(n.value0.value0);return _i((function(){var r=As(Ro)(ji);return function(a){return r(LH(a))}})())(t)}return k1})()(_i((function(){var t=As(Ro)(ji);return function(r){return t(DH(r))}})())(n.value0)(e)));if(n instanceof tv)return kl(_i((function(){var t=As(Ro)(ji);return function(r){return t(IH(r))}})())(n.value0)(e));if(n instanceof nv)return kl(_i((function(){var t=As(Ro)(ji);return function(r){return t(UH(r))}})())(n.value0)(e));throw new Error("Failed pattern match at StateMachines.Viewer (line 72, column 31 - line 100, column 11): "+[n.constructor.name])}},qH=ZE(KE()(Gl(zl($f))(Gl(zl(jf))(Gl(zl(Xf))(Gl(zl(qf))(zl(dg))(gi(Yf(yf)(kr)()()))(gi(V1(kr)()()))())(gi(Kf(yf)(kr)()()))(gi(G1))())(gi(Cf(yf)(kr)()()))(gi(ES))())(gi(Jm(yf)(kr)()()))(gi(Cf(Td)(ES)()()))())(gi(Cf(Vl)(Kf(Vl)(hg(Vl)(Yf(Vl)(Jm(Vl)(kr)()())()())()())()())()()))),YH=(function(){return{gcodeLines:[],gcodeFile:Fs.value,startLayer:0,endLayer:100,minLayer:0,maxLayer:100}})(),KH=function(n){var e=function(a){return function(s){var c=s2(Pt(NH(Cn)))(FH(xv(a(s)))(function(u){if(u instanceof ut)return OH(If(u.value0));if(u instanceof lt)return kH(Cn);throw new Error("Failed pattern match at StateMachines.Viewer (line 147, column 7 - line 149, column 29): "+[u.constructor.name])}))();return{cancel:Fw(i2(Kb("cancel"))(c))}}},t=function(a){var s=(function(){var c=n.emitMsgCtx(a.label);return function(u){return zH(c(u))}})();return BH(HH(MS(s(new Is(Ca.value)))(function(){return VH(eD(a.url))(function(c){return MS(s(new Is(new Vo(c))))(function(){return GH(t2(a.interval))})})})))(function(c){return s(new Is(new Os(If(c))))})},r=WH({emitMsg:n.emitMsg})(qH);return $H({runLoadGcodeLines:e(t)})(r)},ZH=kv()(dr(dr(dr(dr(dr(dr(hd)()()(N1))()()(B1))()()(H1))()()(O1))()()(z1))()()(F1))(jH)({gcodeLines:Mu(bn),gcodeFile:md(bn),startLayer:Lo,endLayer:Lo,minLayer:Lo,maxLayer:Lo}),JH=Hv($1)(Io(Hl($f))(Io(Hl(jf))(Io(Hl(Xf))(Io(Hl(qf))(Hl(dg))()()()()(qf))()()()()(Xf))()()()()(jf))()()()()($f))("Msg")({MsgSetStartLayer:Lo,MsgSetEndLayer:Lo,MsgSetGcodeFile:md(bn),MsgSetMinLayer:Lo,MsgSetMaxLayer:Lo}),QH=uM({updatePubState:function(n){return function(e){return Mv(XH(n)(e))}},dispatchers:KH,initPubState:YH,initPrivState:{},printError:k1,encodeJsonPubState:an(ZH),encodeMsg:an(JH),debugMsg:cM}),eV=fM(QH),tV=Ci(Ea);const nV=({gcodeUrl:n,fileName:e,pictures:t})=>{const{state:r,dispatch:a}=eV();return z3(()=>{const{cancel:s}=a.runLoadGcodeLines({label:e,url:n,interval:1e4});return()=>{console.log(`cleanup ${e}`),s()}},tV,n),Xe.jsxs(bU,{children:[Xe.jsx(MH,{gcode:r.gcodeLines,endLayer:r.endLayer,onMaxLayerIndex:s=>a.MsgSetMaxLayer(s)}),Xe.jsx(AU,{currentLayer:r.endLayer,totalLayers:r.maxLayer}),Xe.jsx(pN,{value:r.endLayer,onChange:s=>a.MsgSetEndLayer(s),min:r.minLayer,max:r.maxLayer}),Xe.jsx(yN,{min:r.minLayer,max:r.maxLayer,step:ud(5)}),Xe.jsx(CH,{fileName:e,status:r.gcodeFile})]})},rV=sn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 20px;
`,iV=({children:n})=>Xe.jsx(rV,{children:n}),oV=sn.div`
    padding: 20px;
`,aV=sn.input`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59,130,246,0.5);
  }
`,sV=({value:n,onSearch:e})=>Xe.jsx(oV,{children:Xe.jsx(aV,{type:"text",placeholder:"Filter",value:n,onChange:t=>e(t.target.value)})}),lV=()=>{const{state:n,dispatch:e}=_I();return Ie.useEffect(()=>{const t=hI();e.runFetchIndex({label:"App",url:t.url})},[]),eM(n.index,{NotAsked:()=>Xe.jsx(Hc,{}),Loading:()=>Xe.jsx(Hc,{viewInfo:Xe.jsx(Xe.Fragment,{children:"Loading"})}),Loaded:t=>{const r=aI(n);return Xe.jsx(Hc,{viewHeader:Xe.jsx(sV,{value:n.filter,onSearch:a=>e.MsgSetFilter(a)}),children:Xe.jsx(iV,{children:r.map(a=>Xe.jsx(nV,{fileName:a.name,gcodeUrl:cI({absUrl:t.url,relUrl:a.gcode}),pictures:a.pictures},a.name+a.gcode))})})},Error:t=>Xe.jsx(Hc,{viewErrors:Xe.jsx(Xe.Fragment,{children:"Error: "+t})})})};UT.createRoot(document.getElementById("root")).render(Xe.jsx(lV,{}));
