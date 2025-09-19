function wA(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(i,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function Gx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bh={exports:{}},wl={},Hh={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function MA(){if(a0)return St;a0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(P){return P===null||typeof P!="object"?null:(P=m&&P[m]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function y(P,k,W){this.props=P,this.context=k,this.refs=E,this.updater=W||S}y.prototype.isReactComponent={},y.prototype.setState=function(P,k){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,k,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=y.prototype;function b(P,k,W){this.props=P,this.context=k,this.refs=E,this.updater=W||S}var M=b.prototype=new _;M.constructor=b,w(M,y.prototype),M.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,N={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function ce(P,k,W){var Y,ee={},Z=null,_e=null;if(k!=null)for(Y in k.ref!==void 0&&(_e=k.ref),k.key!==void 0&&(Z=""+k.key),k)U.call(k,Y)&&!I.hasOwnProperty(Y)&&(ee[Y]=k[Y]);var ve=arguments.length-2;if(ve===1)ee.children=W;else if(1<ve){for(var be=Array(ve),Oe=0;Oe<ve;Oe++)be[Oe]=arguments[Oe+2];ee.children=be}if(P&&P.defaultProps)for(Y in ve=P.defaultProps,ve)ee[Y]===void 0&&(ee[Y]=ve[Y]);return{$$typeof:n,type:P,key:Z,ref:_e,props:ee,_owner:N.current}}function C(P,k){return{$$typeof:n,type:P.type,key:k,ref:P.ref,props:P.props,_owner:P._owner}}function O(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function oe(P){var k={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(W){return k[W]})}var ne=/\/+/g;function pe(P,k){return typeof P=="object"&&P!==null&&P.key!=null?oe(""+P.key):k.toString(36)}function H(P,k,W,Y,ee){var Z=typeof P;(Z==="undefined"||Z==="boolean")&&(P=null);var _e=!1;if(P===null)_e=!0;else switch(Z){case"string":case"number":_e=!0;break;case"object":switch(P.$$typeof){case n:case e:_e=!0}}if(_e)return _e=P,ee=ee(_e),P=Y===""?"."+pe(_e,0):Y,R(ee)?(W="",P!=null&&(W=P.replace(ne,"$&/")+"/"),H(ee,k,W,"",function(Oe){return Oe})):ee!=null&&(O(ee)&&(ee=C(ee,W+(!ee.key||_e&&_e.key===ee.key?"":(""+ee.key).replace(ne,"$&/")+"/")+P)),k.push(ee)),1;if(_e=0,Y=Y===""?".":Y+":",R(P))for(var ve=0;ve<P.length;ve++){Z=P[ve];var be=Y+pe(Z,ve);_e+=H(Z,k,W,be,ee)}else if(be=g(P),typeof be=="function")for(P=be.call(P),ve=0;!(Z=P.next()).done;)Z=Z.value,be=Y+pe(Z,ve++),_e+=H(Z,k,W,be,ee);else if(Z==="object")throw k=String(P),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return _e}function Q(P,k,W){if(P==null)return P;var Y=[],ee=0;return H(P,Y,"","",function(Z){return k.call(W,Z,ee++)}),Y}function se(P){if(P._status===-1){var k=P._result;k=k(),k.then(function(W){(P._status===0||P._status===-1)&&(P._status=1,P._result=W)},function(W){(P._status===0||P._status===-1)&&(P._status=2,P._result=W)}),P._status===-1&&(P._status=0,P._result=k)}if(P._status===1)return P._result.default;throw P._result}var re={current:null},X={transition:null},ie={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:X,ReactCurrentOwner:N};function $(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Q,forEach:function(P,k,W){Q(P,function(){k.apply(this,arguments)},W)},count:function(P){var k=0;return Q(P,function(){k++}),k},toArray:function(P){return Q(P,function(k){return k})||[]},only:function(P){if(!O(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},St.Component=y,St.Fragment=t,St.Profiler=a,St.PureComponent=b,St.StrictMode=i,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,St.act=$,St.cloneElement=function(P,k,W){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var Y=w({},P.props),ee=P.key,Z=P.ref,_e=P._owner;if(k!=null){if(k.ref!==void 0&&(Z=k.ref,_e=N.current),k.key!==void 0&&(ee=""+k.key),P.type&&P.type.defaultProps)var ve=P.type.defaultProps;for(be in k)U.call(k,be)&&!I.hasOwnProperty(be)&&(Y[be]=k[be]===void 0&&ve!==void 0?ve[be]:k[be])}var be=arguments.length-2;if(be===1)Y.children=W;else if(1<be){ve=Array(be);for(var Oe=0;Oe<be;Oe++)ve[Oe]=arguments[Oe+2];Y.children=ve}return{$$typeof:n,type:P.type,key:ee,ref:Z,props:Y,_owner:_e}},St.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:s,_context:P},P.Consumer=P},St.createElement=ce,St.createFactory=function(P){var k=ce.bind(null,P);return k.type=P,k},St.createRef=function(){return{current:null}},St.forwardRef=function(P){return{$$typeof:u,render:P}},St.isValidElement=O,St.lazy=function(P){return{$$typeof:p,_payload:{_status:-1,_result:P},_init:se}},St.memo=function(P,k){return{$$typeof:h,type:P,compare:k===void 0?null:k}},St.startTransition=function(P){var k=X.transition;X.transition={};try{P()}finally{X.transition=k}},St.unstable_act=$,St.useCallback=function(P,k){return re.current.useCallback(P,k)},St.useContext=function(P){return re.current.useContext(P)},St.useDebugValue=function(){},St.useDeferredValue=function(P){return re.current.useDeferredValue(P)},St.useEffect=function(P,k){return re.current.useEffect(P,k)},St.useId=function(){return re.current.useId()},St.useImperativeHandle=function(P,k,W){return re.current.useImperativeHandle(P,k,W)},St.useInsertionEffect=function(P,k){return re.current.useInsertionEffect(P,k)},St.useLayoutEffect=function(P,k){return re.current.useLayoutEffect(P,k)},St.useMemo=function(P,k){return re.current.useMemo(P,k)},St.useReducer=function(P,k,W){return re.current.useReducer(P,k,W)},St.useRef=function(P){return re.current.useRef(P)},St.useState=function(P){return re.current.useState(P)},St.useSyncExternalStore=function(P,k,W){return re.current.useSyncExternalStore(P,k,W)},St.useTransition=function(){return re.current.useTransition()},St.version="18.3.1",St}var s0;function Dm(){return s0||(s0=1,Hh.exports=MA()),Hh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function AA(){if(l0)return wl;l0=1;var n=Dm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,m={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!s.hasOwnProperty(p)&&(m[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:S,props:m,_owner:a.current}}return wl.Fragment=t,wl.jsx=c,wl.jsxs=c,wl}var u0;function TA(){return u0||(u0=1,Bh.exports=AA()),Bh.exports}var Qe=TA(),Tc={},Vh={exports:{}},ar={},Gh={exports:{}},Wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function bA(){return c0||(c0=1,(function(n){function e(X,ie){var $=X.length;X.push(ie);e:for(;0<$;){var P=$-1>>>1,k=X[P];if(0<a(k,ie))X[P]=ie,X[$]=k,$=P;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ie=X[0],$=X.pop();if($!==ie){X[0]=$;e:for(var P=0,k=X.length,W=k>>>1;P<W;){var Y=2*(P+1)-1,ee=X[Y],Z=Y+1,_e=X[Z];if(0>a(ee,$))Z<k&&0>a(_e,ee)?(X[P]=_e,X[Z]=$,P=Z):(X[P]=ee,X[Y]=$,P=Y);else if(Z<k&&0>a(_e,$))X[P]=_e,X[Z]=$,P=Z;else break e}}return ie}function a(X,ie){var $=X.sortIndex-ie.sortIndex;return $!==0?$:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,m=null,g=3,S=!1,w=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(X){for(var ie=t(h);ie!==null;){if(ie.callback===null)i(h);else if(ie.startTime<=X)i(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function R(X){if(E=!1,M(X),!w)if(t(d)!==null)w=!0,se(U);else{var ie=t(h);ie!==null&&re(R,ie.startTime-X)}}function U(X,ie){w=!1,E&&(E=!1,_(ce),ce=-1),S=!0;var $=g;try{for(M(ie),m=t(d);m!==null&&(!(m.expirationTime>ie)||X&&!oe());){var P=m.callback;if(typeof P=="function"){m.callback=null,g=m.priorityLevel;var k=P(m.expirationTime<=ie);ie=n.unstable_now(),typeof k=="function"?m.callback=k:m===t(d)&&i(d),M(ie)}else i(d);m=t(d)}if(m!==null)var W=!0;else{var Y=t(h);Y!==null&&re(R,Y.startTime-ie),W=!1}return W}finally{m=null,g=$,S=!1}}var N=!1,I=null,ce=-1,C=5,O=-1;function oe(){return!(n.unstable_now()-O<C)}function ne(){if(I!==null){var X=n.unstable_now();O=X;var ie=!0;try{ie=I(!0,X)}finally{ie?pe():(N=!1,I=null)}}else N=!1}var pe;if(typeof b=="function")pe=function(){b(ne)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Q=H.port2;H.port1.onmessage=ne,pe=function(){Q.postMessage(null)}}else pe=function(){y(ne,0)};function se(X){I=X,N||(N=!0,pe())}function re(X,ie){ce=y(function(){X(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){w||S||(w=!0,se(U))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var $=g;g=ie;try{return X()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var $=g;g=X;try{return ie()}finally{g=$}},n.unstable_scheduleCallback=function(X,ie,$){var P=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?P+$:P):$=P,X){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=$+k,X={id:p++,callback:ie,priorityLevel:X,startTime:$,expirationTime:k,sortIndex:-1},$>P?(X.sortIndex=$,e(h,X),t(d)===null&&X===t(h)&&(E?(_(ce),ce=-1):E=!0,re(R,$-P))):(X.sortIndex=k,e(d,X),w||S||(w=!0,se(U))),X},n.unstable_shouldYield=oe,n.unstable_wrapCallback=function(X){var ie=g;return function(){var $=g;g=ie;try{return X.apply(this,arguments)}finally{g=$}}}})(Wh)),Wh}var f0;function CA(){return f0||(f0=1,Gh.exports=bA()),Gh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function RA(){if(d0)return ar;d0=1;var n=Dm(),e=CA();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function s(r,o){c(r,o),c(r+"Capture",o)}function c(r,o){for(a[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(r){return d.call(m,r)?!0:d.call(p,r)?!1:h.test(r)?m[r]=!0:(p[r]=!0,!1)}function S(r,o,l,f){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function w(r,o,l,f){if(o===null||typeof o>"u"||S(r,o,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(r,o,l,f,v,x,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=r,this.type=o,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new E(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];y[o]=new E(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new E(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new E(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new E(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new E(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new E(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new E(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new E(r,5,!1,r.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(_,b);y[o]=new E(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(_,b);y[o]=new E(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(_,b);y[o]=new E(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!0,!0)});function M(r,o,l,f){var v=y.hasOwnProperty(o)?y[o]:null;(v!==null?v.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(w(o,l,v,f)&&(l=null),f||v===null?g(o)&&(l===null?r.removeAttribute(o):r.setAttribute(o,""+l)):v.mustUseProperty?r[v.propertyName]=l===null?v.type===3?!1:"":l:(o=v.attributeName,f=v.attributeNamespace,l===null?r.removeAttribute(o):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,f?r.setAttributeNS(f,o,l):r.setAttribute(o,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),N=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,P;function k(r){if(P===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);P=o&&o[1]||""}return`
`+P+r}var W=!1;function Y(r,o){if(!r||W)return"";W=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ae){var f=ae}Reflect.construct(r,[],o)}else{try{o.call()}catch(ae){f=ae}r.call(o.prototype)}else{try{throw Error()}catch(ae){f=ae}r()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var v=ae.stack.split(`
`),x=f.stack.split(`
`),A=v.length-1,F=x.length-1;1<=A&&0<=F&&v[A]!==x[F];)F--;for(;1<=A&&0<=F;A--,F--)if(v[A]!==x[F]){if(A!==1||F!==1)do if(A--,F--,0>F||v[A]!==x[F]){var z=`
`+v[A].replace(" at new "," at ");return r.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",r.displayName)),z}while(1<=A&&0<=F);break}}}finally{W=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?k(r):""}function ee(r){switch(r.tag){case 5:return k(r.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return r=Y(r.type,!1),r;case 11:return r=Y(r.type.render,!1),r;case 1:return r=Y(r.type,!0),r;default:return""}}function Z(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case I:return"Fragment";case N:return"Portal";case C:return"Profiler";case ce:return"StrictMode";case pe:return"Suspense";case H:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case oe:return(r.displayName||"Context")+".Consumer";case O:return(r._context.displayName||"Context")+".Provider";case ne:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Q:return o=r.displayName||null,o!==null?o:Z(r.type)||"Memo";case se:o=r._payload,r=r._init;try{return Z(r(o))}catch{}}return null}function _e(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(o);case 8:return o===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Oe(r){var o=be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,x=l.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return v.call(this)},set:function(A){f=""+A,x.call(this,A)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function ze(r){r._valueTracker||(r._valueTracker=Oe(r))}function j(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var l=o.getValue(),f="";return r&&(f=be(r)?r.checked?"true":"false":r.value),r=f,r!==l?(o.setValue(r),!0):!1}function Dt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ve(r,o){var l=o.checked;return $({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function le(r,o){var l=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;l=ve(o.value!=null?o.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ue(r,o){o=o.checked,o!=null&&M(r,"checked",o,!1)}function xe(r,o){ue(r,o);var l=ve(o.value),f=o.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Me(r,o.type,l):o.hasOwnProperty("defaultValue")&&Me(r,o.type,ve(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function ge(r,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,l||o===r.value||(r.value=o),r.defaultValue=o}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Me(r,o,l){(o!=="number"||Dt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var we=Array.isArray;function Ie(r,o,l,f){if(r=r.options,o){o={};for(var v=0;v<l.length;v++)o["$"+l[v]]=!0;for(l=0;l<r.length;l++)v=o.hasOwnProperty("$"+r[l].value),r[l].selected!==v&&(r[l].selected=v),v&&f&&(r[l].defaultSelected=!0)}else{for(l=""+ve(l),o=null,v=0;v<r.length;v++){if(r[v].value===l){r[v].selected=!0,f&&(r[v].defaultSelected=!0);return}o!==null||r[v].disabled||(o=r[v])}o!==null&&(o.selected=!0)}}function Ze(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function D(r,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(we(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}r._wrapperState={initialValue:ve(l)}}function T(r,o){var l=ve(o.value),f=ve(o.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),o.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function q(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function Ae(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?Ae(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ce,Ye=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,f,v){MSApp.execUnsafeLocalFunction(function(){return r(o,l,f,v)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function De(r,o){if(o){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=o;return}}r.textContent=o}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(r){lt.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),He[o]=He[r]})});function At(r,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||He.hasOwnProperty(r)&&He[r]?(""+o).trim():o+"px"}function Le(r,o){r=r.style;for(var l in o)if(o.hasOwnProperty(l)){var f=l.indexOf("--")===0,v=At(l,o[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,v):r[l]=v}}var Nt=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(r,o){if(o){if(Nt[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function st(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tt=null;function $e(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var _t=null,V=null,Be=null;function Re(r){if(r=ll(r)){if(typeof _t!="function")throw Error(t(280));var o=r.stateNode;o&&(o=Hu(o),_t(r.stateNode,r.type,o))}}function me(r){V?Be?Be.push(r):Be=[r]:V=r}function Ue(){if(V){var r=V,o=Be;if(Be=V=null,Re(r),o)for(r=0;r<o.length;r++)Re(o[r])}}function ot(r,o){return r(o)}function wt(){}var nn=!1;function yn(r,o,l){if(nn)return r(o,l);nn=!0;try{return ot(r,o,l)}finally{nn=!1,(V!==null||Be!==null)&&(wt(),Ue())}}function Pt(r,o){var l=r.stateNode;if(l===null)return null;var f=Hu(l);if(f===null)return null;l=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var hn=!1;if(u)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){hn=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{hn=!1}function xu(r,o,l,f,v,x,A,F,z){var ae=Array.prototype.slice.call(arguments,3);try{o.apply(l,ae)}catch(Ee){this.onError(Ee)}}var Vo=!1,wi=null,Go=!1,ji=null,Su={onError:function(r){Vo=!0,wi=r}};function Eu(r,o,l,f,v,x,A,F,z){Vo=!1,wi=null,xu.apply(Su,arguments)}function ld(r,o,l,f,v,x,A,F,z){if(Eu.apply(this,arguments),Vo){if(Vo){var ae=wi;Vo=!1,wi=null}else throw Error(t(198));Go||(Go=!0,ji=ae)}}function Mi(r){var o=r,l=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(l=o.return),r=o.return;while(r)}return o.tag===3?l:null}function wu(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function L(r){if(Mi(r)!==r)throw Error(t(188))}function J(r){var o=r.alternate;if(!o){if(o=Mi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var l=r,f=o;;){var v=l.return;if(v===null)break;var x=v.alternate;if(x===null){if(f=v.return,f!==null){l=f;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===l)return L(v),r;if(x===f)return L(v),o;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=v,f=x;else{for(var A=!1,F=v.child;F;){if(F===l){A=!0,l=v,f=x;break}if(F===f){A=!0,f=v,l=x;break}F=F.sibling}if(!A){for(F=x.child;F;){if(F===l){A=!0,l=x,f=v;break}if(F===f){A=!0,f=x,l=v;break}F=F.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:o}function de(r){return r=J(r),r!==null?he(r):null}function he(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=he(r);if(o!==null)return o;r=r.sibling}return null}var fe=e.unstable_scheduleCallback,Ge=e.unstable_cancelCallback,et=e.unstable_shouldYield,at=e.unstable_requestPaint,Xe=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,dt=e.unstable_ImmediatePriority,pt=e.unstable_UserBlockingPriority,Vt=e.unstable_NormalPriority,Xn=e.unstable_LowPriority,an=e.unstable_IdlePriority,Qn=null,Tt=null;function yt(r){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Qn,r,void 0,(r.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Mu,Kt=Math.log,Ai=Math.LN2;function Mu(r){return r>>>=0,r===0?32:31-(Kt(r)/Ai|0)|0}var ri=64,qi=4194304;function rn(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ar(r,o){var l=r.pendingLanes;if(l===0)return 0;var f=0,v=r.suspendedLanes,x=r.pingedLanes,A=l&268435455;if(A!==0){var F=A&~v;F!==0?f=rn(F):(x&=A,x!==0&&(f=rn(x)))}else A=l&~v,A!==0?f=rn(A):x!==0&&(f=rn(x));if(f===0)return 0;if(o!==0&&o!==f&&(o&v)===0&&(v=f&-f,x=o&-o,v>=x||v===16&&(x&4194240)!==0))return o;if((f&4)!==0&&(f|=l&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)l=31-jn(o),v=1<<l,f|=r[l],o&=~v;return f}function Ws(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function er(r,o){for(var l=r.suspendedLanes,f=r.pingedLanes,v=r.expirationTimes,x=r.pendingLanes;0<x;){var A=31-jn(x),F=1<<A,z=v[A];z===-1?((F&l)===0||(F&f)!==0)&&(v[A]=Ws(F,o)):z<=o&&(r.expiredLanes|=F),x&=~F}}function Wo(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Au(){var r=ri;return ri<<=1,(ri&4194240)===0&&(ri=64),r}function Ra(r){for(var o=[],l=0;31>l;l++)o.push(r);return o}function $s(r,o,l){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-jn(o),r[o]=l}function WM(r,o){var l=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var v=31-jn(l),x=1<<v;o[v]=0,f[v]=-1,r[v]=-1,l&=~x}}function ud(r,o){var l=r.entangledLanes|=o;for(r=r.entanglements;l;){var f=31-jn(l),v=1<<f;v&o|r[f]&o&&(r[f]|=o),l&=~v}}var Ft=0;function kv(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var zv,cd,Bv,Hv,Vv,fd=!1,Tu=[],Yi=null,Ki=null,Zi=null,Xs=new Map,js=new Map,Ji=[],$M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gv(r,o){switch(r){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Xs.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(o.pointerId)}}function qs(r,o,l,f,v,x){return r===null||r.nativeEvent!==x?(r={blockedOn:o,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[v]},o!==null&&(o=ll(o),o!==null&&cd(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),r)}function XM(r,o,l,f,v){switch(o){case"focusin":return Yi=qs(Yi,r,o,l,f,v),!0;case"dragenter":return Ki=qs(Ki,r,o,l,f,v),!0;case"mouseover":return Zi=qs(Zi,r,o,l,f,v),!0;case"pointerover":var x=v.pointerId;return Xs.set(x,qs(Xs.get(x)||null,r,o,l,f,v)),!0;case"gotpointercapture":return x=v.pointerId,js.set(x,qs(js.get(x)||null,r,o,l,f,v)),!0}return!1}function Wv(r){var o=$o(r.target);if(o!==null){var l=Mi(o);if(l!==null){if(o=l.tag,o===13){if(o=wu(l),o!==null){r.blockedOn=o,Vv(r.priority,function(){Bv(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function bu(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var l=hd(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);tt=f,l.target.dispatchEvent(f),tt=null}else return o=ll(l),o!==null&&cd(o),r.blockedOn=l,!1;o.shift()}return!0}function $v(r,o,l){bu(r)&&l.delete(o)}function jM(){fd=!1,Yi!==null&&bu(Yi)&&(Yi=null),Ki!==null&&bu(Ki)&&(Ki=null),Zi!==null&&bu(Zi)&&(Zi=null),Xs.forEach($v),js.forEach($v)}function Ys(r,o){r.blockedOn===o&&(r.blockedOn=null,fd||(fd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jM)))}function Ks(r){function o(v){return Ys(v,r)}if(0<Tu.length){Ys(Tu[0],r);for(var l=1;l<Tu.length;l++){var f=Tu[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Yi!==null&&Ys(Yi,r),Ki!==null&&Ys(Ki,r),Zi!==null&&Ys(Zi,r),Xs.forEach(o),js.forEach(o),l=0;l<Ji.length;l++)f=Ji[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Ji.length&&(l=Ji[0],l.blockedOn===null);)Wv(l),l.blockedOn===null&&Ji.shift()}var Pa=R.ReactCurrentBatchConfig,Cu=!0;function qM(r,o,l,f){var v=Ft,x=Pa.transition;Pa.transition=null;try{Ft=1,dd(r,o,l,f)}finally{Ft=v,Pa.transition=x}}function YM(r,o,l,f){var v=Ft,x=Pa.transition;Pa.transition=null;try{Ft=4,dd(r,o,l,f)}finally{Ft=v,Pa.transition=x}}function dd(r,o,l,f){if(Cu){var v=hd(r,o,l,f);if(v===null)Pd(r,o,f,Ru,l),Gv(r,f);else if(XM(v,r,o,l,f))f.stopPropagation();else if(Gv(r,f),o&4&&-1<$M.indexOf(r)){for(;v!==null;){var x=ll(v);if(x!==null&&zv(x),x=hd(r,o,l,f),x===null&&Pd(r,o,f,Ru,l),x===v)break;v=x}v!==null&&f.stopPropagation()}else Pd(r,o,f,null,l)}}var Ru=null;function hd(r,o,l,f){if(Ru=null,r=$e(f),r=$o(r),r!==null)if(o=Mi(r),o===null)r=null;else if(l=o.tag,l===13){if(r=wu(o),r!==null)return r;r=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Ru=r,null}function Xv(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case dt:return 1;case pt:return 4;case Vt:case Xn:return 16;case an:return 536870912;default:return 16}default:return 16}}var Qi=null,pd=null,Pu=null;function jv(){if(Pu)return Pu;var r,o=pd,l=o.length,f,v="value"in Qi?Qi.value:Qi.textContent,x=v.length;for(r=0;r<l&&o[r]===v[r];r++);var A=l-r;for(f=1;f<=A&&o[l-f]===v[x-f];f++);return Pu=v.slice(r,1<f?1-f:void 0)}function Lu(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Du(){return!0}function qv(){return!1}function pr(r){function o(l,f,v,x,A){this._reactName=l,this._targetInst=v,this.type=f,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var F in r)r.hasOwnProperty(F)&&(l=r[F],this[F]=l?l(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Du:qv,this.isPropagationStopped=qv,this}return $(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Du)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Du)},persist:function(){},isPersistent:Du}),o}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=pr(La),Zs=$({},La,{view:0,detail:0}),KM=pr(Zs),vd,gd,Js,Iu=$({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Js&&(Js&&r.type==="mousemove"?(vd=r.screenX-Js.screenX,gd=r.screenY-Js.screenY):gd=vd=0,Js=r),vd)},movementY:function(r){return"movementY"in r?r.movementY:gd}}),Yv=pr(Iu),ZM=$({},Iu,{dataTransfer:0}),JM=pr(ZM),QM=$({},Zs,{relatedTarget:0}),_d=pr(QM),e1=$({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=pr(e1),n1=$({},La,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),r1=pr(n1),i1=$({},La,{data:0}),Kv=pr(i1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=s1[r])?!!o[r]:!1}function yd(){return l1}var u1=$({},Zs,{key:function(r){if(r.key){var o=o1[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=Lu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?a1[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(r){return r.type==="keypress"?Lu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Lu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),c1=pr(u1),f1=$({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zv=pr(f1),d1=$({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),h1=pr(d1),p1=$({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=pr(p1),v1=$({},Iu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=pr(v1),_1=[9,13,27,32],xd=u&&"CompositionEvent"in window,Qs=null;u&&"documentMode"in document&&(Qs=document.documentMode);var y1=u&&"TextEvent"in window&&!Qs,Jv=u&&(!xd||Qs&&8<Qs&&11>=Qs),Qv=" ",eg=!1;function tg(r,o){switch(r){case"keyup":return _1.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Da=!1;function x1(r,o){switch(r){case"compositionend":return ng(o);case"keypress":return o.which!==32?null:(eg=!0,Qv);case"textInput":return r=o.data,r===Qv&&eg?null:r;default:return null}}function S1(r,o){if(Da)return r==="compositionend"||!xd&&tg(r,o)?(r=jv(),Pu=pd=Qi=null,Da=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Jv&&o.locale!=="ko"?null:o.data;default:return null}}var E1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!E1[r.type]:o==="textarea"}function ig(r,o,l,f){me(f),o=ku(o,"onChange"),0<o.length&&(l=new md("onChange","change",null,l,f),r.push({event:l,listeners:o}))}var el=null,tl=null;function w1(r){Eg(r,0)}function Uu(r){var o=Oa(r);if(j(o))return r}function M1(r,o){if(r==="change")return o}var og=!1;if(u){var Sd;if(u){var Ed="oninput"in document;if(!Ed){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Ed=typeof ag.oninput=="function"}Sd=Ed}else Sd=!1;og=Sd&&(!document.documentMode||9<document.documentMode)}function sg(){el&&(el.detachEvent("onpropertychange",lg),tl=el=null)}function lg(r){if(r.propertyName==="value"&&Uu(tl)){var o=[];ig(o,tl,r,$e(r)),yn(w1,o)}}function A1(r,o,l){r==="focusin"?(sg(),el=o,tl=l,el.attachEvent("onpropertychange",lg)):r==="focusout"&&sg()}function T1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Uu(tl)}function b1(r,o){if(r==="click")return Uu(o)}function C1(r,o){if(r==="input"||r==="change")return Uu(o)}function R1(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Vr=typeof Object.is=="function"?Object.is:R1;function nl(r,o){if(Vr(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var l=Object.keys(r),f=Object.keys(o);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var v=l[f];if(!d.call(o,v)||!Vr(r[v],o[v]))return!1}return!0}function ug(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function cg(r,o){var l=ug(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=o&&f>=o)return{node:l,offset:o-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ug(l)}}function fg(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?fg(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function dg(){for(var r=window,o=Dt();o instanceof r.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)r=o.contentWindow;else break;o=Dt(r.document)}return o}function wd(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function P1(r){var o=dg(),l=r.focusedElem,f=r.selectionRange;if(o!==l&&l&&l.ownerDocument&&fg(l.ownerDocument.documentElement,l)){if(f!==null&&wd(l)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(r,l.value.length);else if(r=(o=l.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var v=l.textContent.length,x=Math.min(f.start,v);f=f.end===void 0?x:Math.min(f.end,v),!r.extend&&x>f&&(v=f,f=x,x=v),v=cg(l,x);var A=cg(l,f);v&&A&&(r.rangeCount!==1||r.anchorNode!==v.node||r.anchorOffset!==v.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),r.removeAllRanges(),x>f?(r.addRange(o),r.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),r.addRange(o)))}}for(o=[],r=l;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)r=o[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var L1=u&&"documentMode"in document&&11>=document.documentMode,Ia=null,Md=null,rl=null,Ad=!1;function hg(r,o,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ad||Ia==null||Ia!==Dt(f)||(f=Ia,"selectionStart"in f&&wd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),rl&&nl(rl,f)||(rl=f,f=ku(Md,"onSelect"),0<f.length&&(o=new md("onSelect","select",null,o,l),r.push({event:o,listeners:f}),o.target=Ia)))}function Nu(r,o){var l={};return l[r.toLowerCase()]=o.toLowerCase(),l["Webkit"+r]="webkit"+o,l["Moz"+r]="moz"+o,l}var Ua={animationend:Nu("Animation","AnimationEnd"),animationiteration:Nu("Animation","AnimationIteration"),animationstart:Nu("Animation","AnimationStart"),transitionend:Nu("Transition","TransitionEnd")},Td={},pg={};u&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Fu(r){if(Td[r])return Td[r];if(!Ua[r])return r;var o=Ua[r],l;for(l in o)if(o.hasOwnProperty(l)&&l in pg)return Td[r]=o[l];return r}var mg=Fu("animationend"),vg=Fu("animationiteration"),gg=Fu("animationstart"),_g=Fu("transitionend"),yg=new Map,xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function eo(r,o){yg.set(r,o),s(o,[r])}for(var bd=0;bd<xg.length;bd++){var Cd=xg[bd],D1=Cd.toLowerCase(),I1=Cd[0].toUpperCase()+Cd.slice(1);eo(D1,"on"+I1)}eo(mg,"onAnimationEnd"),eo(vg,"onAnimationIteration"),eo(gg,"onAnimationStart"),eo("dblclick","onDoubleClick"),eo("focusin","onFocus"),eo("focusout","onBlur"),eo(_g,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function Sg(r,o,l){var f=r.type||"unknown-event";r.currentTarget=l,ld(f,o,void 0,r),r.currentTarget=null}function Eg(r,o){o=(o&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],v=f.event;f=f.listeners;e:{var x=void 0;if(o)for(var A=f.length-1;0<=A;A--){var F=f[A],z=F.instance,ae=F.currentTarget;if(F=F.listener,z!==x&&v.isPropagationStopped())break e;Sg(v,F,ae),x=z}else for(A=0;A<f.length;A++){if(F=f[A],z=F.instance,ae=F.currentTarget,F=F.listener,z!==x&&v.isPropagationStopped())break e;Sg(v,F,ae),x=z}}}if(Go)throw r=ji,Go=!1,ji=null,r}function Xt(r,o){var l=o[Fd];l===void 0&&(l=o[Fd]=new Set);var f=r+"__bubble";l.has(f)||(wg(o,r,2,!1),l.add(f))}function Rd(r,o,l){var f=0;o&&(f|=4),wg(l,r,f,o)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function ol(r){if(!r[Ou]){r[Ou]=!0,i.forEach(function(l){l!=="selectionchange"&&(U1.has(l)||Rd(l,!1,r),Rd(l,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Ou]||(o[Ou]=!0,Rd("selectionchange",!1,o))}}function wg(r,o,l,f){switch(Xv(o)){case 1:var v=qM;break;case 4:v=YM;break;default:v=dd}l=v.bind(null,o,l,r),v=void 0,!hn||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),f?v!==void 0?r.addEventListener(o,l,{capture:!0,passive:v}):r.addEventListener(o,l,!0):v!==void 0?r.addEventListener(o,l,{passive:v}):r.addEventListener(o,l,!1)}function Pd(r,o,l,f,v){var x=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var F=f.stateNode.containerInfo;if(F===v||F.nodeType===8&&F.parentNode===v)break;if(A===4)for(A=f.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===v||z.nodeType===8&&z.parentNode===v))return;A=A.return}for(;F!==null;){if(A=$o(F),A===null)return;if(z=A.tag,z===5||z===6){f=x=A;continue e}F=F.parentNode}}f=f.return}yn(function(){var ae=x,Ee=$e(l),Te=[];e:{var Se=yg.get(r);if(Se!==void 0){var We=md,qe=r;switch(r){case"keypress":if(Lu(l)===0)break e;case"keydown":case"keyup":We=c1;break;case"focusin":qe="focus",We=_d;break;case"focusout":qe="blur",We=_d;break;case"beforeblur":case"afterblur":We=_d;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Yv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=JM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=h1;break;case mg:case vg:case gg:We=t1;break;case _g:We=m1;break;case"scroll":We=KM;break;case"wheel":We=g1;break;case"copy":case"cut":case"paste":We=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Zv}var Ke=(o&4)!==0,sn=!Ke&&r==="scroll",K=Ke?Se!==null?Se+"Capture":null:Se;Ke=[];for(var G=ae,te;G!==null;){te=G;var Pe=te.stateNode;if(te.tag===5&&Pe!==null&&(te=Pe,K!==null&&(Pe=Pt(G,K),Pe!=null&&Ke.push(al(G,Pe,te)))),sn)break;G=G.return}0<Ke.length&&(Se=new We(Se,qe,null,l,Ee),Te.push({event:Se,listeners:Ke}))}}if((o&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",We=r==="mouseout"||r==="pointerout",Se&&l!==tt&&(qe=l.relatedTarget||l.fromElement)&&($o(qe)||qe[Ti]))break e;if((We||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,We?(qe=l.relatedTarget||l.toElement,We=ae,qe=qe?$o(qe):null,qe!==null&&(sn=Mi(qe),qe!==sn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(We=null,qe=ae),We!==qe)){if(Ke=Yv,Pe="onMouseLeave",K="onMouseEnter",G="mouse",(r==="pointerout"||r==="pointerover")&&(Ke=Zv,Pe="onPointerLeave",K="onPointerEnter",G="pointer"),sn=We==null?Se:Oa(We),te=qe==null?Se:Oa(qe),Se=new Ke(Pe,G+"leave",We,l,Ee),Se.target=sn,Se.relatedTarget=te,Pe=null,$o(Ee)===ae&&(Ke=new Ke(K,G+"enter",qe,l,Ee),Ke.target=te,Ke.relatedTarget=sn,Pe=Ke),sn=Pe,We&&qe)t:{for(Ke=We,K=qe,G=0,te=Ke;te;te=Na(te))G++;for(te=0,Pe=K;Pe;Pe=Na(Pe))te++;for(;0<G-te;)Ke=Na(Ke),G--;for(;0<te-G;)K=Na(K),te--;for(;G--;){if(Ke===K||K!==null&&Ke===K.alternate)break t;Ke=Na(Ke),K=Na(K)}Ke=null}else Ke=null;We!==null&&Mg(Te,Se,We,Ke,!1),qe!==null&&sn!==null&&Mg(Te,sn,qe,Ke,!0)}}e:{if(Se=ae?Oa(ae):window,We=Se.nodeName&&Se.nodeName.toLowerCase(),We==="select"||We==="input"&&Se.type==="file")var Je=M1;else if(rg(Se))if(og)Je=C1;else{Je=T1;var rt=A1}else(We=Se.nodeName)&&We.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Je=b1);if(Je&&(Je=Je(r,ae))){ig(Te,Je,l,Ee);break e}rt&&rt(r,Se,ae),r==="focusout"&&(rt=Se._wrapperState)&&rt.controlled&&Se.type==="number"&&Me(Se,"number",Se.value)}switch(rt=ae?Oa(ae):window,r){case"focusin":(rg(rt)||rt.contentEditable==="true")&&(Ia=rt,Md=ae,rl=null);break;case"focusout":rl=Md=Ia=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,hg(Te,l,Ee);break;case"selectionchange":if(L1)break;case"keydown":case"keyup":hg(Te,l,Ee)}var it;if(xd)e:{switch(r){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Da?tg(r,l)&&(ut="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(Jv&&l.locale!=="ko"&&(Da||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Da&&(it=jv()):(Qi=Ee,pd="value"in Qi?Qi.value:Qi.textContent,Da=!0)),rt=ku(ae,ut),0<rt.length&&(ut=new Kv(ut,r,null,l,Ee),Te.push({event:ut,listeners:rt}),it?ut.data=it:(it=ng(l),it!==null&&(ut.data=it)))),(it=y1?x1(r,l):S1(r,l))&&(ae=ku(ae,"onBeforeInput"),0<ae.length&&(Ee=new Kv("onBeforeInput","beforeinput",null,l,Ee),Te.push({event:Ee,listeners:ae}),Ee.data=it))}Eg(Te,o)})}function al(r,o,l){return{instance:r,listener:o,currentTarget:l}}function ku(r,o){for(var l=o+"Capture",f=[];r!==null;){var v=r,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=Pt(r,l),x!=null&&f.unshift(al(r,x,v)),x=Pt(r,o),x!=null&&f.push(al(r,x,v))),r=r.return}return f}function Na(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Mg(r,o,l,f,v){for(var x=o._reactName,A=[];l!==null&&l!==f;){var F=l,z=F.alternate,ae=F.stateNode;if(z!==null&&z===f)break;F.tag===5&&ae!==null&&(F=ae,v?(z=Pt(l,x),z!=null&&A.unshift(al(l,z,F))):v||(z=Pt(l,x),z!=null&&A.push(al(l,z,F)))),l=l.return}A.length!==0&&r.push({event:o,listeners:A})}var N1=/\r\n?/g,F1=/\u0000|\uFFFD/g;function Ag(r){return(typeof r=="string"?r:""+r).replace(N1,`
`).replace(F1,"")}function zu(r,o,l){if(o=Ag(o),Ag(r)!==o&&l)throw Error(t(425))}function Bu(){}var Ld=null,Dd=null;function Id(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(r){return Tg.resolve(null).then(r).catch(z1)}:Ud;function z1(r){setTimeout(function(){throw r})}function Nd(r,o){var l=o,f=0;do{var v=l.nextSibling;if(r.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(f===0){r.removeChild(v),Ks(o);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=v}while(l);Ks(o)}function to(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function bg(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return r;o--}else l==="/$"&&o++}r=r.previousSibling}return null}var Fa=Math.random().toString(36).slice(2),ii="__reactFiber$"+Fa,sl="__reactProps$"+Fa,Ti="__reactContainer$"+Fa,Fd="__reactEvents$"+Fa,B1="__reactListeners$"+Fa,H1="__reactHandles$"+Fa;function $o(r){var o=r[ii];if(o)return o;for(var l=r.parentNode;l;){if(o=l[Ti]||l[ii]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(r=bg(r);r!==null;){if(l=r[ii])return l;r=bg(r)}return o}r=l,l=r.parentNode}return null}function ll(r){return r=r[ii]||r[Ti],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Oa(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Hu(r){return r[sl]||null}var Od=[],ka=-1;function no(r){return{current:r}}function jt(r){0>ka||(r.current=Od[ka],Od[ka]=null,ka--)}function Gt(r,o){ka++,Od[ka]=r.current,r.current=o}var ro={},Nn=no(ro),tr=no(!1),Xo=ro;function za(r,o){var l=r.type.contextTypes;if(!l)return ro;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in l)v[x]=o[x];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=v),v}function nr(r){return r=r.childContextTypes,r!=null}function Vu(){jt(tr),jt(Nn)}function Cg(r,o,l){if(Nn.current!==ro)throw Error(t(168));Gt(Nn,o),Gt(tr,l)}function Rg(r,o,l){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var v in f)if(!(v in o))throw Error(t(108,_e(r)||"Unknown",v));return $({},l,f)}function Gu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ro,Xo=Nn.current,Gt(Nn,r),Gt(tr,tr.current),!0}function Pg(r,o,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=Rg(r,o,Xo),f.__reactInternalMemoizedMergedChildContext=r,jt(tr),jt(Nn),Gt(Nn,r)):jt(tr),Gt(tr,l)}var bi=null,Wu=!1,kd=!1;function Lg(r){bi===null?bi=[r]:bi.push(r)}function V1(r){Wu=!0,Lg(r)}function io(){if(!kd&&bi!==null){kd=!0;var r=0,o=Ft;try{var l=bi;for(Ft=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}bi=null,Wu=!1}catch(v){throw bi!==null&&(bi=bi.slice(r+1)),fe(dt,io),v}finally{Ft=o,kd=!1}}return null}var Ba=[],Ha=0,$u=null,Xu=0,Tr=[],br=0,jo=null,Ci=1,Ri="";function qo(r,o){Ba[Ha++]=Xu,Ba[Ha++]=$u,$u=r,Xu=o}function Dg(r,o,l){Tr[br++]=Ci,Tr[br++]=Ri,Tr[br++]=jo,jo=r;var f=Ci;r=Ri;var v=32-jn(f)-1;f&=~(1<<v),l+=1;var x=32-jn(o)+v;if(30<x){var A=v-v%5;x=(f&(1<<A)-1).toString(32),f>>=A,v-=A,Ci=1<<32-jn(o)+v|l<<v|f,Ri=x+r}else Ci=1<<x|l<<v|f,Ri=r}function zd(r){r.return!==null&&(qo(r,1),Dg(r,1,0))}function Bd(r){for(;r===$u;)$u=Ba[--Ha],Ba[Ha]=null,Xu=Ba[--Ha],Ba[Ha]=null;for(;r===jo;)jo=Tr[--br],Tr[br]=null,Ri=Tr[--br],Tr[br]=null,Ci=Tr[--br],Tr[br]=null}var mr=null,vr=null,Zt=!1,Gr=null;function Ig(r,o){var l=Lr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=r,o=r.deletions,o===null?(r.deletions=[l],r.flags|=16):o.push(l)}function Ug(r,o){switch(r.tag){case 5:var l=r.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,mr=r,vr=to(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,mr=r,vr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=jo!==null?{id:Ci,overflow:Ri}:null,r.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Lr(18,null,null,0),l.stateNode=o,l.return=r,r.child=l,mr=r,vr=null,!0):!1;default:return!1}}function Hd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Vd(r){if(Zt){var o=vr;if(o){var l=o;if(!Ug(r,o)){if(Hd(r))throw Error(t(418));o=to(l.nextSibling);var f=mr;o&&Ug(r,o)?Ig(f,l):(r.flags=r.flags&-4097|2,Zt=!1,mr=r)}}else{if(Hd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Zt=!1,mr=r}}}function Ng(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;mr=r}function ju(r){if(r!==mr)return!1;if(!Zt)return Ng(r),Zt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!Id(r.type,r.memoizedProps)),o&&(o=vr)){if(Hd(r))throw Fg(),Error(t(418));for(;o;)Ig(r,o),o=to(o.nextSibling)}if(Ng(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(o===0){vr=to(r.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}r=r.nextSibling}vr=null}}else vr=mr?to(r.stateNode.nextSibling):null;return!0}function Fg(){for(var r=vr;r;)r=to(r.nextSibling)}function Va(){vr=mr=null,Zt=!1}function Gd(r){Gr===null?Gr=[r]:Gr.push(r)}var G1=R.ReactCurrentBatchConfig;function ul(r,o,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var v=f,x=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===x?o.ref:(o=function(A){var F=v.refs;A===null?delete F[x]:F[x]=A},o._stringRef=x,o)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function qu(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function Og(r){var o=r._init;return o(r._payload)}function kg(r){function o(K,G){if(r){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function l(K,G){if(!r)return null;for(;G!==null;)o(K,G),G=G.sibling;return null}function f(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function v(K,G){return K=ho(K,G),K.index=0,K.sibling=null,K}function x(K,G,te){return K.index=te,r?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function A(K){return r&&K.alternate===null&&(K.flags|=2),K}function F(K,G,te,Pe){return G===null||G.tag!==6?(G=Uh(te,K.mode,Pe),G.return=K,G):(G=v(G,te),G.return=K,G)}function z(K,G,te,Pe){var Je=te.type;return Je===I?Ee(K,G,te.props.children,Pe,te.key):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&Og(Je)===G.type)?(Pe=v(G,te.props),Pe.ref=ul(K,G,te),Pe.return=K,Pe):(Pe=_c(te.type,te.key,te.props,null,K.mode,Pe),Pe.ref=ul(K,G,te),Pe.return=K,Pe)}function ae(K,G,te,Pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Nh(te,K.mode,Pe),G.return=K,G):(G=v(G,te.children||[]),G.return=K,G)}function Ee(K,G,te,Pe,Je){return G===null||G.tag!==7?(G=na(te,K.mode,Pe,Je),G.return=K,G):(G=v(G,te),G.return=K,G)}function Te(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Uh(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return te=_c(G.type,G.key,G.props,null,K.mode,te),te.ref=ul(K,null,G),te.return=K,te;case N:return G=Nh(G,K.mode,te),G.return=K,G;case se:var Pe=G._init;return Te(K,Pe(G._payload),te)}if(we(G)||ie(G))return G=na(G,K.mode,te,null),G.return=K,G;qu(K,G)}return null}function Se(K,G,te,Pe){var Je=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Je!==null?null:F(K,G,""+te,Pe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===Je?z(K,G,te,Pe):null;case N:return te.key===Je?ae(K,G,te,Pe):null;case se:return Je=te._init,Se(K,G,Je(te._payload),Pe)}if(we(te)||ie(te))return Je!==null?null:Ee(K,G,te,Pe,null);qu(K,te)}return null}function We(K,G,te,Pe,Je){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return K=K.get(te)||null,F(G,K,""+Pe,Je);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case U:return K=K.get(Pe.key===null?te:Pe.key)||null,z(G,K,Pe,Je);case N:return K=K.get(Pe.key===null?te:Pe.key)||null,ae(G,K,Pe,Je);case se:var rt=Pe._init;return We(K,G,te,rt(Pe._payload),Je)}if(we(Pe)||ie(Pe))return K=K.get(te)||null,Ee(G,K,Pe,Je,null);qu(G,Pe)}return null}function qe(K,G,te,Pe){for(var Je=null,rt=null,it=G,ut=G=0,En=null;it!==null&&ut<te.length;ut++){it.index>ut?(En=it,it=null):En=it.sibling;var Lt=Se(K,it,te[ut],Pe);if(Lt===null){it===null&&(it=En);break}r&&it&&Lt.alternate===null&&o(K,it),G=x(Lt,G,ut),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt,it=En}if(ut===te.length)return l(K,it),Zt&&qo(K,ut),Je;if(it===null){for(;ut<te.length;ut++)it=Te(K,te[ut],Pe),it!==null&&(G=x(it,G,ut),rt===null?Je=it:rt.sibling=it,rt=it);return Zt&&qo(K,ut),Je}for(it=f(K,it);ut<te.length;ut++)En=We(it,K,ut,te[ut],Pe),En!==null&&(r&&En.alternate!==null&&it.delete(En.key===null?ut:En.key),G=x(En,G,ut),rt===null?Je=En:rt.sibling=En,rt=En);return r&&it.forEach(function(po){return o(K,po)}),Zt&&qo(K,ut),Je}function Ke(K,G,te,Pe){var Je=ie(te);if(typeof Je!="function")throw Error(t(150));if(te=Je.call(te),te==null)throw Error(t(151));for(var rt=Je=null,it=G,ut=G=0,En=null,Lt=te.next();it!==null&&!Lt.done;ut++,Lt=te.next()){it.index>ut?(En=it,it=null):En=it.sibling;var po=Se(K,it,Lt.value,Pe);if(po===null){it===null&&(it=En);break}r&&it&&po.alternate===null&&o(K,it),G=x(po,G,ut),rt===null?Je=po:rt.sibling=po,rt=po,it=En}if(Lt.done)return l(K,it),Zt&&qo(K,ut),Je;if(it===null){for(;!Lt.done;ut++,Lt=te.next())Lt=Te(K,Lt.value,Pe),Lt!==null&&(G=x(Lt,G,ut),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt);return Zt&&qo(K,ut),Je}for(it=f(K,it);!Lt.done;ut++,Lt=te.next())Lt=We(it,K,ut,Lt.value,Pe),Lt!==null&&(r&&Lt.alternate!==null&&it.delete(Lt.key===null?ut:Lt.key),G=x(Lt,G,ut),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt);return r&&it.forEach(function(EA){return o(K,EA)}),Zt&&qo(K,ut),Je}function sn(K,G,te,Pe){if(typeof te=="object"&&te!==null&&te.type===I&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var Je=te.key,rt=G;rt!==null;){if(rt.key===Je){if(Je=te.type,Je===I){if(rt.tag===7){l(K,rt.sibling),G=v(rt,te.props.children),G.return=K,K=G;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&Og(Je)===rt.type){l(K,rt.sibling),G=v(rt,te.props),G.ref=ul(K,rt,te),G.return=K,K=G;break e}l(K,rt);break}else o(K,rt);rt=rt.sibling}te.type===I?(G=na(te.props.children,K.mode,Pe,te.key),G.return=K,K=G):(Pe=_c(te.type,te.key,te.props,null,K.mode,Pe),Pe.ref=ul(K,G,te),Pe.return=K,K=Pe)}return A(K);case N:e:{for(rt=te.key;G!==null;){if(G.key===rt)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){l(K,G.sibling),G=v(G,te.children||[]),G.return=K,K=G;break e}else{l(K,G);break}else o(K,G);G=G.sibling}G=Nh(te,K.mode,Pe),G.return=K,K=G}return A(K);case se:return rt=te._init,sn(K,G,rt(te._payload),Pe)}if(we(te))return qe(K,G,te,Pe);if(ie(te))return Ke(K,G,te,Pe);qu(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(l(K,G.sibling),G=v(G,te),G.return=K,K=G):(l(K,G),G=Uh(te,K.mode,Pe),G.return=K,K=G),A(K)):l(K,G)}return sn}var Ga=kg(!0),zg=kg(!1),Yu=no(null),Ku=null,Wa=null,Wd=null;function $d(){Wd=Wa=Ku=null}function Xd(r){var o=Yu.current;jt(Yu),r._currentValue=o}function jd(r,o,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===l)break;r=r.return}}function $a(r,o){Ku=r,Wd=Wa=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(rr=!0),r.firstContext=null)}function Cr(r){var o=r._currentValue;if(Wd!==r)if(r={context:r,memoizedValue:o,next:null},Wa===null){if(Ku===null)throw Error(t(308));Wa=r,Ku.dependencies={lanes:0,firstContext:r}}else Wa=Wa.next=r;return o}var Yo=null;function qd(r){Yo===null?Yo=[r]:Yo.push(r)}function Bg(r,o,l,f){var v=o.interleaved;return v===null?(l.next=l,qd(o)):(l.next=v.next,v.next=l),o.interleaved=l,Pi(r,f)}function Pi(r,o){r.lanes|=o;var l=r.alternate;for(l!==null&&(l.lanes|=o),l=r,r=r.return;r!==null;)r.childLanes|=o,l=r.alternate,l!==null&&(l.childLanes|=o),l=r,r=r.return;return l.tag===3?l.stateNode:null}var oo=!1;function Yd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Li(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function ao(r,o,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Ct&2)!==0){var v=f.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),f.pending=o,Pi(r,l)}return v=f.interleaved,v===null?(o.next=o,qd(f)):(o.next=v.next,v.next=o),f.interleaved=o,Pi(r,l)}function Zu(r,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,ud(r,l)}}function Vg(r,o){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var v=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?v=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?v=x=o:x=x.next=o}else v=x=o;l={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=o:r.next=o,l.lastBaseUpdate=o}function Ju(r,o,l,f){var v=r.updateQueue;oo=!1;var x=v.firstBaseUpdate,A=v.lastBaseUpdate,F=v.shared.pending;if(F!==null){v.shared.pending=null;var z=F,ae=z.next;z.next=null,A===null?x=ae:A.next=ae,A=z;var Ee=r.alternate;Ee!==null&&(Ee=Ee.updateQueue,F=Ee.lastBaseUpdate,F!==A&&(F===null?Ee.firstBaseUpdate=ae:F.next=ae,Ee.lastBaseUpdate=z))}if(x!==null){var Te=v.baseState;A=0,Ee=ae=z=null,F=x;do{var Se=F.lane,We=F.eventTime;if((f&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:We,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var qe=r,Ke=F;switch(Se=o,We=l,Ke.tag){case 1:if(qe=Ke.payload,typeof qe=="function"){Te=qe.call(We,Te,Se);break e}Te=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ke.payload,Se=typeof qe=="function"?qe.call(We,Te,Se):qe,Se==null)break e;Te=$({},Te,Se);break e;case 2:oo=!0}}F.callback!==null&&F.lane!==0&&(r.flags|=64,Se=v.effects,Se===null?v.effects=[F]:Se.push(F))}else We={eventTime:We,lane:Se,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Ee===null?(ae=Ee=We,z=Te):Ee=Ee.next=We,A|=Se;if(F=F.next,F===null){if(F=v.shared.pending,F===null)break;Se=F,F=Se.next,Se.next=null,v.lastBaseUpdate=Se,v.shared.pending=null}}while(!0);if(Ee===null&&(z=Te),v.baseState=z,v.firstBaseUpdate=ae,v.lastBaseUpdate=Ee,o=v.shared.interleaved,o!==null){v=o;do A|=v.lane,v=v.next;while(v!==o)}else x===null&&(v.shared.lanes=0);Jo|=A,r.lanes=A,r.memoizedState=Te}}function Gg(r,o,l){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],v=f.callback;if(v!==null){if(f.callback=null,f=l,typeof v!="function")throw Error(t(191,v));v.call(f)}}}var cl={},oi=no(cl),fl=no(cl),dl=no(cl);function Ko(r){if(r===cl)throw Error(t(174));return r}function Kd(r,o){switch(Gt(dl,o),Gt(fl,r),Gt(oi,cl),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ye(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=ye(o,r)}jt(oi),Gt(oi,o)}function Xa(){jt(oi),jt(fl),jt(dl)}function Wg(r){Ko(dl.current);var o=Ko(oi.current),l=ye(o,r.type);o!==l&&(Gt(fl,r),Gt(oi,l))}function Zd(r){fl.current===r&&(jt(oi),jt(fl))}var Qt=no(0);function Qu(r){for(var o=r;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Jd=[];function Qd(){for(var r=0;r<Jd.length;r++)Jd[r]._workInProgressVersionPrimary=null;Jd.length=0}var ec=R.ReactCurrentDispatcher,eh=R.ReactCurrentBatchConfig,Zo=0,en=null,pn=null,xn=null,tc=!1,hl=!1,pl=0,W1=0;function Fn(){throw Error(t(321))}function th(r,o){if(o===null)return!1;for(var l=0;l<o.length&&l<r.length;l++)if(!Vr(r[l],o[l]))return!1;return!0}function nh(r,o,l,f,v,x){if(Zo=x,en=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,ec.current=r===null||r.memoizedState===null?q1:Y1,r=l(f,v),hl){x=0;do{if(hl=!1,pl=0,25<=x)throw Error(t(301));x+=1,xn=pn=null,o.updateQueue=null,ec.current=K1,r=l(f,v)}while(hl)}if(ec.current=ic,o=pn!==null&&pn.next!==null,Zo=0,xn=pn=en=null,tc=!1,o)throw Error(t(300));return r}function rh(){var r=pl!==0;return pl=0,r}function ai(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?en.memoizedState=xn=r:xn=xn.next=r,xn}function Rr(){if(pn===null){var r=en.alternate;r=r!==null?r.memoizedState:null}else r=pn.next;var o=xn===null?en.memoizedState:xn.next;if(o!==null)xn=o,pn=r;else{if(r===null)throw Error(t(310));pn=r,r={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},xn===null?en.memoizedState=xn=r:xn=xn.next=r}return xn}function ml(r,o){return typeof o=="function"?o(r):o}function ih(r){var o=Rr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=pn,v=f.baseQueue,x=l.pending;if(x!==null){if(v!==null){var A=v.next;v.next=x.next,x.next=A}f.baseQueue=v=x,l.pending=null}if(v!==null){x=v.next,f=f.baseState;var F=A=null,z=null,ae=x;do{var Ee=ae.lane;if((Zo&Ee)===Ee)z!==null&&(z=z.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:r(f,ae.action);else{var Te={lane:Ee,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};z===null?(F=z=Te,A=f):z=z.next=Te,en.lanes|=Ee,Jo|=Ee}ae=ae.next}while(ae!==null&&ae!==x);z===null?A=f:z.next=F,Vr(f,o.memoizedState)||(rr=!0),o.memoizedState=f,o.baseState=A,o.baseQueue=z,l.lastRenderedState=f}if(r=l.interleaved,r!==null){v=r;do x=v.lane,en.lanes|=x,Jo|=x,v=v.next;while(v!==r)}else v===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function oh(r){var o=Rr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,v=l.pending,x=o.memoizedState;if(v!==null){l.pending=null;var A=v=v.next;do x=r(x,A.action),A=A.next;while(A!==v);Vr(x,o.memoizedState)||(rr=!0),o.memoizedState=x,o.baseQueue===null&&(o.baseState=x),l.lastRenderedState=x}return[x,f]}function $g(){}function Xg(r,o){var l=en,f=Rr(),v=o(),x=!Vr(f.memoizedState,v);if(x&&(f.memoizedState=v,rr=!0),f=f.queue,ah(Yg.bind(null,l,f,r),[r]),f.getSnapshot!==o||x||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,vl(9,qg.bind(null,l,f,v,o),void 0,null),Sn===null)throw Error(t(349));(Zo&30)!==0||jg(l,o,v)}return v}function jg(r,o,l){r.flags|=16384,r={getSnapshot:o,value:l},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.stores=[r]):(l=o.stores,l===null?o.stores=[r]:l.push(r))}function qg(r,o,l,f){o.value=l,o.getSnapshot=f,Kg(o)&&Zg(r)}function Yg(r,o,l){return l(function(){Kg(o)&&Zg(r)})}function Kg(r){var o=r.getSnapshot;r=r.value;try{var l=o();return!Vr(r,l)}catch{return!0}}function Zg(r){var o=Pi(r,1);o!==null&&jr(o,r,1,-1)}function Jg(r){var o=ai();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:r},o.queue=r,r=r.dispatch=j1.bind(null,en,r),[o.memoizedState,r]}function vl(r,o,l,f){return r={tag:r,create:o,destroy:l,deps:f,next:null},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.lastEffect=r.next=r):(l=o.lastEffect,l===null?o.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,o.lastEffect=r)),r}function Qg(){return Rr().memoizedState}function nc(r,o,l,f){var v=ai();en.flags|=r,v.memoizedState=vl(1|o,l,void 0,f===void 0?null:f)}function rc(r,o,l,f){var v=Rr();f=f===void 0?null:f;var x=void 0;if(pn!==null){var A=pn.memoizedState;if(x=A.destroy,f!==null&&th(f,A.deps)){v.memoizedState=vl(o,l,x,f);return}}en.flags|=r,v.memoizedState=vl(1|o,l,x,f)}function e_(r,o){return nc(8390656,8,r,o)}function ah(r,o){return rc(2048,8,r,o)}function t_(r,o){return rc(4,2,r,o)}function n_(r,o){return rc(4,4,r,o)}function r_(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function i_(r,o,l){return l=l!=null?l.concat([r]):null,rc(4,4,r_.bind(null,o,r),l)}function sh(){}function o_(r,o){var l=Rr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&th(o,f[1])?f[0]:(l.memoizedState=[r,o],r)}function a_(r,o){var l=Rr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&th(o,f[1])?f[0]:(r=r(),l.memoizedState=[r,o],r)}function s_(r,o,l){return(Zo&21)===0?(r.baseState&&(r.baseState=!1,rr=!0),r.memoizedState=l):(Vr(l,o)||(l=Au(),en.lanes|=l,Jo|=l,r.baseState=!0),o)}function $1(r,o){var l=Ft;Ft=l!==0&&4>l?l:4,r(!0);var f=eh.transition;eh.transition={};try{r(!1),o()}finally{Ft=l,eh.transition=f}}function l_(){return Rr().memoizedState}function X1(r,o,l){var f=co(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},u_(r))c_(o,l);else if(l=Bg(r,o,l,f),l!==null){var v=Yn();jr(l,r,f,v),f_(l,o,f)}}function j1(r,o,l){var f=co(r),v={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(u_(r))c_(o,v);else{var x=r.alternate;if(r.lanes===0&&(x===null||x.lanes===0)&&(x=o.lastRenderedReducer,x!==null))try{var A=o.lastRenderedState,F=x(A,l);if(v.hasEagerState=!0,v.eagerState=F,Vr(F,A)){var z=o.interleaved;z===null?(v.next=v,qd(o)):(v.next=z.next,z.next=v),o.interleaved=v;return}}catch{}finally{}l=Bg(r,o,v,f),l!==null&&(v=Yn(),jr(l,r,f,v),f_(l,o,f))}}function u_(r){var o=r.alternate;return r===en||o!==null&&o===en}function c_(r,o){hl=tc=!0;var l=r.pending;l===null?o.next=o:(o.next=l.next,l.next=o),r.pending=o}function f_(r,o,l){if((l&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,ud(r,l)}}var ic={readContext:Cr,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},q1={readContext:Cr,useCallback:function(r,o){return ai().memoizedState=[r,o===void 0?null:o],r},useContext:Cr,useEffect:e_,useImperativeHandle:function(r,o,l){return l=l!=null?l.concat([r]):null,nc(4194308,4,r_.bind(null,o,r),l)},useLayoutEffect:function(r,o){return nc(4194308,4,r,o)},useInsertionEffect:function(r,o){return nc(4,2,r,o)},useMemo:function(r,o){var l=ai();return o=o===void 0?null:o,r=r(),l.memoizedState=[r,o],r},useReducer:function(r,o,l){var f=ai();return o=l!==void 0?l(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=X1.bind(null,en,r),[f.memoizedState,r]},useRef:function(r){var o=ai();return r={current:r},o.memoizedState=r},useState:Jg,useDebugValue:sh,useDeferredValue:function(r){return ai().memoizedState=r},useTransition:function(){var r=Jg(!1),o=r[0];return r=$1.bind(null,r[1]),ai().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,l){var f=en,v=ai();if(Zt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Sn===null)throw Error(t(349));(Zo&30)!==0||jg(f,o,l)}v.memoizedState=l;var x={value:l,getSnapshot:o};return v.queue=x,e_(Yg.bind(null,f,x,r),[r]),f.flags|=2048,vl(9,qg.bind(null,f,x,l,o),void 0,null),l},useId:function(){var r=ai(),o=Sn.identifierPrefix;if(Zt){var l=Ri,f=Ci;l=(f&~(1<<32-jn(f)-1)).toString(32)+l,o=":"+o+"R"+l,l=pl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=W1++,o=":"+o+"r"+l.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},Y1={readContext:Cr,useCallback:o_,useContext:Cr,useEffect:ah,useImperativeHandle:i_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:a_,useReducer:ih,useRef:Qg,useState:function(){return ih(ml)},useDebugValue:sh,useDeferredValue:function(r){var o=Rr();return s_(o,pn.memoizedState,r)},useTransition:function(){var r=ih(ml)[0],o=Rr().memoizedState;return[r,o]},useMutableSource:$g,useSyncExternalStore:Xg,useId:l_,unstable_isNewReconciler:!1},K1={readContext:Cr,useCallback:o_,useContext:Cr,useEffect:ah,useImperativeHandle:i_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:a_,useReducer:oh,useRef:Qg,useState:function(){return oh(ml)},useDebugValue:sh,useDeferredValue:function(r){var o=Rr();return pn===null?o.memoizedState=r:s_(o,pn.memoizedState,r)},useTransition:function(){var r=oh(ml)[0],o=Rr().memoizedState;return[r,o]},useMutableSource:$g,useSyncExternalStore:Xg,useId:l_,unstable_isNewReconciler:!1};function Wr(r,o){if(r&&r.defaultProps){o=$({},o),r=r.defaultProps;for(var l in r)o[l]===void 0&&(o[l]=r[l]);return o}return o}function lh(r,o,l,f){o=r.memoizedState,l=l(f,o),l=l==null?o:$({},o,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var oc={isMounted:function(r){return(r=r._reactInternals)?Mi(r)===r:!1},enqueueSetState:function(r,o,l){r=r._reactInternals;var f=Yn(),v=co(r),x=Li(f,v);x.payload=o,l!=null&&(x.callback=l),o=ao(r,x,v),o!==null&&(jr(o,r,v,f),Zu(o,r,v))},enqueueReplaceState:function(r,o,l){r=r._reactInternals;var f=Yn(),v=co(r),x=Li(f,v);x.tag=1,x.payload=o,l!=null&&(x.callback=l),o=ao(r,x,v),o!==null&&(jr(o,r,v,f),Zu(o,r,v))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var l=Yn(),f=co(r),v=Li(l,f);v.tag=2,o!=null&&(v.callback=o),o=ao(r,v,f),o!==null&&(jr(o,r,f,l),Zu(o,r,f))}};function d_(r,o,l,f,v,x,A){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,x,A):o.prototype&&o.prototype.isPureReactComponent?!nl(l,f)||!nl(v,x):!0}function h_(r,o,l){var f=!1,v=ro,x=o.contextType;return typeof x=="object"&&x!==null?x=Cr(x):(v=nr(o)?Xo:Nn.current,f=o.contextTypes,x=(f=f!=null)?za(r,v):ro),o=new o(l,x),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=oc,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=v,r.__reactInternalMemoizedMaskedChildContext=x),o}function p_(r,o,l,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,f),o.state!==r&&oc.enqueueReplaceState(o,o.state,null)}function uh(r,o,l,f){var v=r.stateNode;v.props=l,v.state=r.memoizedState,v.refs={},Yd(r);var x=o.contextType;typeof x=="object"&&x!==null?v.context=Cr(x):(x=nr(o)?Xo:Nn.current,v.context=za(r,x)),v.state=r.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(lh(r,o,x,l),v.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&oc.enqueueReplaceState(v,v.state,null),Ju(r,l,v,f),v.state=r.memoizedState),typeof v.componentDidMount=="function"&&(r.flags|=4194308)}function ja(r,o){try{var l="",f=o;do l+=ee(f),f=f.return;while(f);var v=l}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:r,source:o,stack:v,digest:null}}function ch(r,o,l){return{value:r,source:null,stack:l??null,digest:o??null}}function fh(r,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var Z1=typeof WeakMap=="function"?WeakMap:Map;function m_(r,o,l){l=Li(-1,l),l.tag=3,l.payload={element:null};var f=o.value;return l.callback=function(){dc||(dc=!0,Th=f),fh(r,o)},l}function v_(r,o,l){l=Li(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var v=o.value;l.payload=function(){return f(v)},l.callback=function(){fh(r,o)}}var x=r.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){fh(r,o),typeof f!="function"&&(lo===null?lo=new Set([this]):lo.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),l}function g_(r,o,l){var f=r.pingCache;if(f===null){f=r.pingCache=new Z1;var v=new Set;f.set(o,v)}else v=f.get(o),v===void 0&&(v=new Set,f.set(o,v));v.has(l)||(v.add(l),r=fA.bind(null,r,o,l),o.then(r,r))}function __(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function y_(r,o,l,f,v){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Li(-1,1),o.tag=2,ao(l,o,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=v,r)}var J1=R.ReactCurrentOwner,rr=!1;function qn(r,o,l,f){o.child=r===null?zg(o,null,l,f):Ga(o,r.child,l,f)}function x_(r,o,l,f,v){l=l.render;var x=o.ref;return $a(o,v),f=nh(r,o,l,f,x,v),l=rh(),r!==null&&!rr?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,Di(r,o,v)):(Zt&&l&&zd(o),o.flags|=1,qn(r,o,f,v),o.child)}function S_(r,o,l,f,v){if(r===null){var x=l.type;return typeof x=="function"&&!Ih(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=x,E_(r,o,x,f,v)):(r=_c(l.type,null,f,o,o.mode,v),r.ref=o.ref,r.return=o,o.child=r)}if(x=r.child,(r.lanes&v)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:nl,l(A,f)&&r.ref===o.ref)return Di(r,o,v)}return o.flags|=1,r=ho(x,f),r.ref=o.ref,r.return=o,o.child=r}function E_(r,o,l,f,v){if(r!==null){var x=r.memoizedProps;if(nl(x,f)&&r.ref===o.ref)if(rr=!1,o.pendingProps=f=x,(r.lanes&v)!==0)(r.flags&131072)!==0&&(rr=!0);else return o.lanes=r.lanes,Di(r,o,v)}return dh(r,o,l,f,v)}function w_(r,o,l){var f=o.pendingProps,v=f.children,x=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ya,gr),gr|=l;else{if((l&1073741824)===0)return r=x!==null?x.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Gt(Ya,gr),gr|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,Gt(Ya,gr),gr|=f}else x!==null?(f=x.baseLanes|l,o.memoizedState=null):f=l,Gt(Ya,gr),gr|=f;return qn(r,o,v,l),o.child}function M_(r,o){var l=o.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function dh(r,o,l,f,v){var x=nr(l)?Xo:Nn.current;return x=za(o,x),$a(o,v),l=nh(r,o,l,f,x,v),f=rh(),r!==null&&!rr?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,Di(r,o,v)):(Zt&&f&&zd(o),o.flags|=1,qn(r,o,l,v),o.child)}function A_(r,o,l,f,v){if(nr(l)){var x=!0;Gu(o)}else x=!1;if($a(o,v),o.stateNode===null)sc(r,o),h_(o,l,f),uh(o,l,f,v),f=!0;else if(r===null){var A=o.stateNode,F=o.memoizedProps;A.props=F;var z=A.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=Cr(ae):(ae=nr(l)?Xo:Nn.current,ae=za(o,ae));var Ee=l.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==f||z!==ae)&&p_(o,A,f,ae),oo=!1;var Se=o.memoizedState;A.state=Se,Ju(o,f,A,v),z=o.memoizedState,F!==f||Se!==z||tr.current||oo?(typeof Ee=="function"&&(lh(o,l,Ee,f),z=o.memoizedState),(F=oo||d_(o,l,F,f,Se,z,ae))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=z),A.props=f,A.state=z,A.context=ae,f=F):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{A=o.stateNode,Hg(r,o),F=o.memoizedProps,ae=o.type===o.elementType?F:Wr(o.type,F),A.props=ae,Te=o.pendingProps,Se=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=Cr(z):(z=nr(l)?Xo:Nn.current,z=za(o,z));var We=l.getDerivedStateFromProps;(Ee=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==Te||Se!==z)&&p_(o,A,f,z),oo=!1,Se=o.memoizedState,A.state=Se,Ju(o,f,A,v);var qe=o.memoizedState;F!==Te||Se!==qe||tr.current||oo?(typeof We=="function"&&(lh(o,l,We,f),qe=o.memoizedState),(ae=oo||d_(o,l,ae,f,Se,qe,z)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,qe,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,qe,z)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=qe),A.props=f,A.state=qe,A.context=z,f=ae):(typeof A.componentDidUpdate!="function"||F===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),f=!1)}return hh(r,o,l,f,x,v)}function hh(r,o,l,f,v,x){M_(r,o);var A=(o.flags&128)!==0;if(!f&&!A)return v&&Pg(o,l,!1),Di(r,o,x);f=o.stateNode,J1.current=o;var F=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&A?(o.child=Ga(o,r.child,null,x),o.child=Ga(o,null,F,x)):qn(r,o,F,x),o.memoizedState=f.state,v&&Pg(o,l,!0),o.child}function T_(r){var o=r.stateNode;o.pendingContext?Cg(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Cg(r,o.context,!1),Kd(r,o.containerInfo)}function b_(r,o,l,f,v){return Va(),Gd(v),o.flags|=256,qn(r,o,l,f),o.child}var ph={dehydrated:null,treeContext:null,retryLane:0};function mh(r){return{baseLanes:r,cachePool:null,transitions:null}}function C_(r,o,l){var f=o.pendingProps,v=Qt.current,x=!1,A=(o.flags&128)!==0,F;if((F=A)||(F=r!==null&&r.memoizedState===null?!1:(v&2)!==0),F?(x=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(v|=1),Gt(Qt,v&1),r===null)return Vd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=f.children,r=f.fallback,x?(f=o.mode,x=o.child,A={mode:"hidden",children:A},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=yc(A,f,0,null),r=na(r,f,l,null),x.return=o,r.return=o,x.sibling=r,o.child=x,o.child.memoizedState=mh(l),o.memoizedState=ph,r):vh(o,A));if(v=r.memoizedState,v!==null&&(F=v.dehydrated,F!==null))return Q1(r,o,A,f,F,v,l);if(x){x=f.fallback,A=o.mode,v=r.child,F=v.sibling;var z={mode:"hidden",children:f.children};return(A&1)===0&&o.child!==v?(f=o.child,f.childLanes=0,f.pendingProps=z,o.deletions=null):(f=ho(v,z),f.subtreeFlags=v.subtreeFlags&14680064),F!==null?x=ho(F,x):(x=na(x,A,l,null),x.flags|=2),x.return=o,f.return=o,f.sibling=x,o.child=f,f=x,x=o.child,A=r.child.memoizedState,A=A===null?mh(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=r.childLanes&~l,o.memoizedState=ph,f}return x=r.child,r=x.sibling,f=ho(x,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=l),f.return=o,f.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=f,o.memoizedState=null,f}function vh(r,o){return o=yc({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function ac(r,o,l,f){return f!==null&&Gd(f),Ga(o,r.child,null,l),r=vh(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function Q1(r,o,l,f,v,x,A){if(l)return o.flags&256?(o.flags&=-257,f=ch(Error(t(422))),ac(r,o,A,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(x=f.fallback,v=o.mode,f=yc({mode:"visible",children:f.children},v,0,null),x=na(x,v,A,null),x.flags|=2,f.return=o,x.return=o,f.sibling=x,o.child=f,(o.mode&1)!==0&&Ga(o,r.child,null,A),o.child.memoizedState=mh(A),o.memoizedState=ph,x);if((o.mode&1)===0)return ac(r,o,A,null);if(v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var F=f.dgst;return f=F,x=Error(t(419)),f=ch(x,f,void 0),ac(r,o,A,f)}if(F=(A&r.childLanes)!==0,rr||F){if(f=Sn,f!==null){switch(A&-A){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(f.suspendedLanes|A))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,Pi(r,v),jr(f,r,v,-1))}return Dh(),f=ch(Error(t(421))),ac(r,o,A,f)}return v.data==="$?"?(o.flags|=128,o.child=r.child,o=dA.bind(null,r),v._reactRetry=o,null):(r=x.treeContext,vr=to(v.nextSibling),mr=o,Zt=!0,Gr=null,r!==null&&(Tr[br++]=Ci,Tr[br++]=Ri,Tr[br++]=jo,Ci=r.id,Ri=r.overflow,jo=o),o=vh(o,f.children),o.flags|=4096,o)}function R_(r,o,l){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),jd(r.return,o,l)}function gh(r,o,l,f,v){var x=r.memoizedState;x===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:v}:(x.isBackwards=o,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=v)}function P_(r,o,l){var f=o.pendingProps,v=f.revealOrder,x=f.tail;if(qn(r,o,f.children,l),f=Qt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&R_(r,l,o);else if(r.tag===19)R_(r,l,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Gt(Qt,f),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(l=o.child,v=null;l!==null;)r=l.alternate,r!==null&&Qu(r)===null&&(v=l),l=l.sibling;l=v,l===null?(v=o.child,o.child=null):(v=l.sibling,l.sibling=null),gh(o,!1,v,l,x);break;case"backwards":for(l=null,v=o.child,o.child=null;v!==null;){if(r=v.alternate,r!==null&&Qu(r)===null){o.child=v;break}r=v.sibling,v.sibling=l,l=v,v=r}gh(o,!0,l,null,x);break;case"together":gh(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function sc(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function Di(r,o,l){if(r!==null&&(o.dependencies=r.dependencies),Jo|=o.lanes,(l&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,l=ho(r,r.pendingProps),o.child=l,l.return=o;r.sibling!==null;)r=r.sibling,l=l.sibling=ho(r,r.pendingProps),l.return=o;l.sibling=null}return o.child}function eA(r,o,l){switch(o.tag){case 3:T_(o),Va();break;case 5:Wg(o);break;case 1:nr(o.type)&&Gu(o);break;case 4:Kd(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,v=o.memoizedProps.value;Gt(Yu,f._currentValue),f._currentValue=v;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(Gt(Qt,Qt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?C_(r,o,l):(Gt(Qt,Qt.current&1),r=Di(r,o,l),r!==null?r.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(f=(l&o.childLanes)!==0,(r.flags&128)!==0){if(f)return P_(r,o,l);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Gt(Qt,Qt.current),f)break;return null;case 22:case 23:return o.lanes=0,w_(r,o,l)}return Di(r,o,l)}var L_,_h,D_,I_;L_=function(r,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},_h=function(){},D_=function(r,o,l,f){var v=r.memoizedProps;if(v!==f){r=o.stateNode,Ko(oi.current);var x=null;switch(l){case"input":v=Ve(r,v),f=Ve(r,f),x=[];break;case"select":v=$({},v,{value:void 0}),f=$({},f,{value:void 0}),x=[];break;case"textarea":v=Ze(r,v),f=Ze(r,f),x=[];break;default:typeof v.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Bu)}ft(l,f);var A;l=null;for(ae in v)if(!f.hasOwnProperty(ae)&&v.hasOwnProperty(ae)&&v[ae]!=null)if(ae==="style"){var F=v[ae];for(A in F)F.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?x||(x=[]):(x=x||[]).push(ae,null));for(ae in f){var z=f[ae];if(F=v?.[ae],f.hasOwnProperty(ae)&&z!==F&&(z!=null||F!=null))if(ae==="style")if(F){for(A in F)!F.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&F[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(x||(x=[]),x.push(ae,l)),l=z;else ae==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(x=x||[]).push(ae,z)):ae==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(ae,""+z):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(z!=null&&ae==="onScroll"&&Xt("scroll",r),x||F===z||(x=[])):(x=x||[]).push(ae,z))}l&&(x=x||[]).push("style",l);var ae=x;(o.updateQueue=ae)&&(o.flags|=4)}},I_=function(r,o,l,f){l!==f&&(o.flags|=4)};function gl(r,o){if(!Zt)switch(r.tailMode){case"hidden":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function On(r){var o=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(o)for(var v=r.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags&14680064,f|=v.flags&14680064,v.return=r,v=v.sibling;else for(v=r.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=f,r.childLanes=l,o}function tA(r,o,l){var f=o.pendingProps;switch(Bd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(o),null;case 1:return nr(o.type)&&Vu(),On(o),null;case 3:return f=o.stateNode,Xa(),jt(tr),jt(Nn),Qd(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(ju(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Gr!==null&&(Rh(Gr),Gr=null))),_h(r,o),On(o),null;case 5:Zd(o);var v=Ko(dl.current);if(l=o.type,r!==null&&o.stateNode!=null)D_(r,o,l,f,v),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return On(o),null}if(r=Ko(oi.current),ju(o)){f=o.stateNode,l=o.type;var x=o.memoizedProps;switch(f[ii]=o,f[sl]=x,r=(o.mode&1)!==0,l){case"dialog":Xt("cancel",f),Xt("close",f);break;case"iframe":case"object":case"embed":Xt("load",f);break;case"video":case"audio":for(v=0;v<il.length;v++)Xt(il[v],f);break;case"source":Xt("error",f);break;case"img":case"image":case"link":Xt("error",f),Xt("load",f);break;case"details":Xt("toggle",f);break;case"input":le(f,x),Xt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Xt("invalid",f);break;case"textarea":D(f,x),Xt("invalid",f)}ft(l,x),v=null;for(var A in x)if(x.hasOwnProperty(A)){var F=x[A];A==="children"?typeof F=="string"?f.textContent!==F&&(x.suppressHydrationWarning!==!0&&zu(f.textContent,F,r),v=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&zu(f.textContent,F,r),v=["children",""+F]):a.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&Xt("scroll",f)}switch(l){case"input":ze(f),ge(f,x,!0);break;case"textarea":ze(f),q(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Bu)}f=v,o.updateQueue=f,f!==null&&(o.flags|=4)}else{A=v.nodeType===9?v:v.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Ae(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=A.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=A.createElement(l,{is:f.is}):(r=A.createElement(l),l==="select"&&(A=r,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):r=A.createElementNS(r,l),r[ii]=o,r[sl]=f,L_(r,o,!1,!1),o.stateNode=r;e:{switch(A=st(l,f),l){case"dialog":Xt("cancel",r),Xt("close",r),v=f;break;case"iframe":case"object":case"embed":Xt("load",r),v=f;break;case"video":case"audio":for(v=0;v<il.length;v++)Xt(il[v],r);v=f;break;case"source":Xt("error",r),v=f;break;case"img":case"image":case"link":Xt("error",r),Xt("load",r),v=f;break;case"details":Xt("toggle",r),v=f;break;case"input":le(r,f),v=Ve(r,f),Xt("invalid",r);break;case"option":v=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},v=$({},f,{value:void 0}),Xt("invalid",r);break;case"textarea":D(r,f),v=Ze(r,f),Xt("invalid",r);break;default:v=f}ft(l,v),F=v;for(x in F)if(F.hasOwnProperty(x)){var z=F[x];x==="style"?Le(r,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ye(r,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&De(r,z):typeof z=="number"&&De(r,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Xt("scroll",r):z!=null&&M(r,x,z,A))}switch(l){case"input":ze(r),ge(r,f,!1);break;case"textarea":ze(r),q(r);break;case"option":f.value!=null&&r.setAttribute("value",""+ve(f.value));break;case"select":r.multiple=!!f.multiple,x=f.value,x!=null?Ie(r,!!f.multiple,x,!1):f.defaultValue!=null&&Ie(r,!!f.multiple,f.defaultValue,!0);break;default:typeof v.onClick=="function"&&(r.onclick=Bu)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return On(o),null;case 6:if(r&&o.stateNode!=null)I_(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(l=Ko(dl.current),Ko(oi.current),ju(o)){if(f=o.stateNode,l=o.memoizedProps,f[ii]=o,(x=f.nodeValue!==l)&&(r=mr,r!==null))switch(r.tag){case 3:zu(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&zu(f.nodeValue,l,(r.mode&1)!==0)}x&&(o.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[ii]=o,o.stateNode=f}return On(o),null;case 13:if(jt(Qt),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Zt&&vr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Fg(),Va(),o.flags|=98560,x=!1;else if(x=ju(o),f!==null&&f.dehydrated!==null){if(r===null){if(!x)throw Error(t(318));if(x=o.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[ii]=o}else Va(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;On(o),x=!1}else Gr!==null&&(Rh(Gr),Gr=null),x=!0;if(!x)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(Qt.current&1)!==0?mn===0&&(mn=3):Dh())),o.updateQueue!==null&&(o.flags|=4),On(o),null);case 4:return Xa(),_h(r,o),r===null&&ol(o.stateNode.containerInfo),On(o),null;case 10:return Xd(o.type._context),On(o),null;case 17:return nr(o.type)&&Vu(),On(o),null;case 19:if(jt(Qt),x=o.memoizedState,x===null)return On(o),null;if(f=(o.flags&128)!==0,A=x.rendering,A===null)if(f)gl(x,!1);else{if(mn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(A=Qu(r),A!==null){for(o.flags|=128,gl(x,!1),f=A.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=l,l=o.child;l!==null;)x=l,r=f,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=r,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,r=A.dependencies,x.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Gt(Qt,Qt.current&1|2),o.child}r=r.sibling}x.tail!==null&&Xe()>Ka&&(o.flags|=128,f=!0,gl(x,!1),o.lanes=4194304)}else{if(!f)if(r=Qu(A),r!==null){if(o.flags|=128,f=!0,l=r.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),gl(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Zt)return On(o),null}else 2*Xe()-x.renderingStartTime>Ka&&l!==1073741824&&(o.flags|=128,f=!0,gl(x,!1),o.lanes=4194304);x.isBackwards?(A.sibling=o.child,o.child=A):(l=x.last,l!==null?l.sibling=A:o.child=A,x.last=A)}return x.tail!==null?(o=x.tail,x.rendering=o,x.tail=o.sibling,x.renderingStartTime=Xe(),o.sibling=null,l=Qt.current,Gt(Qt,f?l&1|2:l&1),o):(On(o),null);case 22:case 23:return Lh(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(gr&1073741824)!==0&&(On(o),o.subtreeFlags&6&&(o.flags|=8192)):On(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function nA(r,o){switch(Bd(o),o.tag){case 1:return nr(o.type)&&Vu(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return Xa(),jt(tr),jt(Nn),Qd(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return Zd(o),null;case 13:if(jt(Qt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Va()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return jt(Qt),null;case 4:return Xa(),null;case 10:return Xd(o.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var lc=!1,kn=!1,rA=typeof WeakSet=="function"?WeakSet:Set,je=null;function qa(r,o){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){on(r,o,f)}else l.current=null}function yh(r,o,l){try{l()}catch(f){on(r,o,f)}}var U_=!1;function iA(r,o){if(Ld=Cu,r=dg(),wd(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var v=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,F=-1,z=-1,ae=0,Ee=0,Te=r,Se=null;t:for(;;){for(var We;Te!==l||v!==0&&Te.nodeType!==3||(F=A+v),Te!==x||f!==0&&Te.nodeType!==3||(z=A+f),Te.nodeType===3&&(A+=Te.nodeValue.length),(We=Te.firstChild)!==null;)Se=Te,Te=We;for(;;){if(Te===r)break t;if(Se===l&&++ae===v&&(F=A),Se===x&&++Ee===f&&(z=A),(We=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=We}l=F===-1||z===-1?null:{start:F,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Dd={focusedElem:r,selectionRange:l},Cu=!1,je=o;je!==null;)if(o=je,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,je=r;else for(;je!==null;){o=je;try{var qe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ke=qe.memoizedProps,sn=qe.memoizedState,K=o.stateNode,G=K.getSnapshotBeforeUpdate(o.elementType===o.type?Ke:Wr(o.type,Ke),sn);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){on(o,o.return,Pe)}if(r=o.sibling,r!==null){r.return=o.return,je=r;break}je=o.return}return qe=U_,U_=!1,qe}function _l(r,o,l){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var v=f=f.next;do{if((v.tag&r)===r){var x=v.destroy;v.destroy=void 0,x!==void 0&&yh(o,l,x)}v=v.next}while(v!==f)}}function uc(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==o)}}function xh(r){var o=r.ref;if(o!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof o=="function"?o(r):o.current=r}}function N_(r){var o=r.alternate;o!==null&&(r.alternate=null,N_(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[ii],delete o[sl],delete o[Fd],delete o[B1],delete o[H1])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function F_(r){return r.tag===5||r.tag===3||r.tag===4}function O_(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||F_(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Sh(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(r,o):l.insertBefore(r,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(r,l)):(o=l,o.appendChild(r)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Bu));else if(f!==4&&(r=r.child,r!==null))for(Sh(r,o,l),r=r.sibling;r!==null;)Sh(r,o,l),r=r.sibling}function Eh(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.insertBefore(r,o):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(Eh(r,o,l),r=r.sibling;r!==null;)Eh(r,o,l),r=r.sibling}var Mn=null,$r=!1;function so(r,o,l){for(l=l.child;l!==null;)k_(r,o,l),l=l.sibling}function k_(r,o,l){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Qn,l)}catch{}switch(l.tag){case 5:kn||qa(l,o);case 6:var f=Mn,v=$r;Mn=null,so(r,o,l),Mn=f,$r=v,Mn!==null&&($r?(r=Mn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Mn.removeChild(l.stateNode));break;case 18:Mn!==null&&($r?(r=Mn,l=l.stateNode,r.nodeType===8?Nd(r.parentNode,l):r.nodeType===1&&Nd(r,l),Ks(r)):Nd(Mn,l.stateNode));break;case 4:f=Mn,v=$r,Mn=l.stateNode.containerInfo,$r=!0,so(r,o,l),Mn=f,$r=v;break;case 0:case 11:case 14:case 15:if(!kn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){v=f=f.next;do{var x=v,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&yh(l,o,A),v=v.next}while(v!==f)}so(r,o,l);break;case 1:if(!kn&&(qa(l,o),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){on(l,o,F)}so(r,o,l);break;case 21:so(r,o,l);break;case 22:l.mode&1?(kn=(f=kn)||l.memoizedState!==null,so(r,o,l),kn=f):so(r,o,l);break;default:so(r,o,l)}}function z_(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new rA),o.forEach(function(f){var v=hA.bind(null,r,f);l.has(f)||(l.add(f),f.then(v,v))})}}function Xr(r,o){var l=o.deletions;if(l!==null)for(var f=0;f<l.length;f++){var v=l[f];try{var x=r,A=o,F=A;e:for(;F!==null;){switch(F.tag){case 5:Mn=F.stateNode,$r=!1;break e;case 3:Mn=F.stateNode.containerInfo,$r=!0;break e;case 4:Mn=F.stateNode.containerInfo,$r=!0;break e}F=F.return}if(Mn===null)throw Error(t(160));k_(x,A,v),Mn=null,$r=!1;var z=v.alternate;z!==null&&(z.return=null),v.return=null}catch(ae){on(v,o,ae)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)B_(o,r),o=o.sibling}function B_(r,o){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Xr(o,r),si(r),f&4){try{_l(3,r,r.return),uc(3,r)}catch(Ke){on(r,r.return,Ke)}try{_l(5,r,r.return)}catch(Ke){on(r,r.return,Ke)}}break;case 1:Xr(o,r),si(r),f&512&&l!==null&&qa(l,l.return);break;case 5:if(Xr(o,r),si(r),f&512&&l!==null&&qa(l,l.return),r.flags&32){var v=r.stateNode;try{De(v,"")}catch(Ke){on(r,r.return,Ke)}}if(f&4&&(v=r.stateNode,v!=null)){var x=r.memoizedProps,A=l!==null?l.memoizedProps:x,F=r.type,z=r.updateQueue;if(r.updateQueue=null,z!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&ue(v,x),st(F,A);var ae=st(F,x);for(A=0;A<z.length;A+=2){var Ee=z[A],Te=z[A+1];Ee==="style"?Le(v,Te):Ee==="dangerouslySetInnerHTML"?Ye(v,Te):Ee==="children"?De(v,Te):M(v,Ee,Te,ae)}switch(F){case"input":xe(v,x);break;case"textarea":T(v,x);break;case"select":var Se=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var We=x.value;We!=null?Ie(v,!!x.multiple,We,!1):Se!==!!x.multiple&&(x.defaultValue!=null?Ie(v,!!x.multiple,x.defaultValue,!0):Ie(v,!!x.multiple,x.multiple?[]:"",!1))}v[sl]=x}catch(Ke){on(r,r.return,Ke)}}break;case 6:if(Xr(o,r),si(r),f&4){if(r.stateNode===null)throw Error(t(162));v=r.stateNode,x=r.memoizedProps;try{v.nodeValue=x}catch(Ke){on(r,r.return,Ke)}}break;case 3:if(Xr(o,r),si(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Ks(o.containerInfo)}catch(Ke){on(r,r.return,Ke)}break;case 4:Xr(o,r),si(r);break;case 13:Xr(o,r),si(r),v=r.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(Ah=Xe())),f&4&&z_(r);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,r.mode&1?(kn=(ae=kn)||Ee,Xr(o,r),kn=ae):Xr(o,r),si(r),f&8192){if(ae=r.memoizedState!==null,(r.stateNode.isHidden=ae)&&!Ee&&(r.mode&1)!==0)for(je=r,Ee=r.child;Ee!==null;){for(Te=je=Ee;je!==null;){switch(Se=je,We=Se.child,Se.tag){case 0:case 11:case 14:case 15:_l(4,Se,Se.return);break;case 1:qa(Se,Se.return);var qe=Se.stateNode;if(typeof qe.componentWillUnmount=="function"){f=Se,l=Se.return;try{o=f,qe.props=o.memoizedProps,qe.state=o.memoizedState,qe.componentWillUnmount()}catch(Ke){on(f,l,Ke)}}break;case 5:qa(Se,Se.return);break;case 22:if(Se.memoizedState!==null){G_(Te);continue}}We!==null?(We.return=Se,je=We):G_(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=r;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{v=Te.stateNode,ae?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=Te.stateNode,z=Te.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=At("display",A))}catch(Ke){on(r,r.return,Ke)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=ae?"":Te.memoizedProps}catch(Ke){on(r,r.return,Ke)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===r)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===r)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===r)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Xr(o,r),si(r),f&4&&z_(r);break;case 21:break;default:Xr(o,r),si(r)}}function si(r){var o=r.flags;if(o&2){try{e:{for(var l=r.return;l!==null;){if(F_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var v=f.stateNode;f.flags&32&&(De(v,""),f.flags&=-33);var x=O_(r);Eh(r,x,v);break;case 3:case 4:var A=f.stateNode.containerInfo,F=O_(r);Sh(r,F,A);break;default:throw Error(t(161))}}catch(z){on(r,r.return,z)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function oA(r,o,l){je=r,H_(r)}function H_(r,o,l){for(var f=(r.mode&1)!==0;je!==null;){var v=je,x=v.child;if(v.tag===22&&f){var A=v.memoizedState!==null||lc;if(!A){var F=v.alternate,z=F!==null&&F.memoizedState!==null||kn;F=lc;var ae=kn;if(lc=A,(kn=z)&&!ae)for(je=v;je!==null;)A=je,z=A.child,A.tag===22&&A.memoizedState!==null?W_(v):z!==null?(z.return=A,je=z):W_(v);for(;x!==null;)je=x,H_(x),x=x.sibling;je=v,lc=F,kn=ae}V_(r)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,je=x):V_(r)}}function V_(r){for(;je!==null;){var o=je;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:kn||uc(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!kn)if(l===null)f.componentDidMount();else{var v=o.elementType===o.type?l.memoizedProps:Wr(o.type,l.memoizedProps);f.componentDidUpdate(v,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=o.updateQueue;x!==null&&Gg(o,x,f);break;case 3:var A=o.updateQueue;if(A!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Gg(o,A,l)}break;case 5:var F=o.stateNode;if(l===null&&o.flags&4){l=F;var z=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ae=o.alternate;if(ae!==null){var Ee=ae.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Ks(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}kn||o.flags&512&&xh(o)}catch(Se){on(o,o.return,Se)}}if(o===r){je=null;break}if(l=o.sibling,l!==null){l.return=o.return,je=l;break}je=o.return}}function G_(r){for(;je!==null;){var o=je;if(o===r){je=null;break}var l=o.sibling;if(l!==null){l.return=o.return,je=l;break}je=o.return}}function W_(r){for(;je!==null;){var o=je;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{uc(4,o)}catch(z){on(o,l,z)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var v=o.return;try{f.componentDidMount()}catch(z){on(o,v,z)}}var x=o.return;try{xh(o)}catch(z){on(o,x,z)}break;case 5:var A=o.return;try{xh(o)}catch(z){on(o,A,z)}}}catch(z){on(o,o.return,z)}if(o===r){je=null;break}var F=o.sibling;if(F!==null){F.return=o.return,je=F;break}je=o.return}}var aA=Math.ceil,cc=R.ReactCurrentDispatcher,wh=R.ReactCurrentOwner,Pr=R.ReactCurrentBatchConfig,Ct=0,Sn=null,un=null,An=0,gr=0,Ya=no(0),mn=0,yl=null,Jo=0,fc=0,Mh=0,xl=null,ir=null,Ah=0,Ka=1/0,Ii=null,dc=!1,Th=null,lo=null,hc=!1,uo=null,pc=0,Sl=0,bh=null,mc=-1,vc=0;function Yn(){return(Ct&6)!==0?Xe():mc!==-1?mc:mc=Xe()}function co(r){return(r.mode&1)===0?1:(Ct&2)!==0&&An!==0?An&-An:G1.transition!==null?(vc===0&&(vc=Au()),vc):(r=Ft,r!==0||(r=window.event,r=r===void 0?16:Xv(r.type)),r)}function jr(r,o,l,f){if(50<Sl)throw Sl=0,bh=null,Error(t(185));$s(r,l,f),((Ct&2)===0||r!==Sn)&&(r===Sn&&((Ct&2)===0&&(fc|=l),mn===4&&fo(r,An)),or(r,f),l===1&&Ct===0&&(o.mode&1)===0&&(Ka=Xe()+500,Wu&&io()))}function or(r,o){var l=r.callbackNode;er(r,o);var f=Ar(r,r===Sn?An:0);if(f===0)l!==null&&Ge(l),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(l!=null&&Ge(l),o===1)r.tag===0?V1(X_.bind(null,r)):Lg(X_.bind(null,r)),k1(function(){(Ct&6)===0&&io()}),l=null;else{switch(kv(f)){case 1:l=dt;break;case 4:l=pt;break;case 16:l=Vt;break;case 536870912:l=an;break;default:l=Vt}l=e0(l,$_.bind(null,r))}r.callbackPriority=o,r.callbackNode=l}}function $_(r,o){if(mc=-1,vc=0,(Ct&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Za()&&r.callbackNode!==l)return null;var f=Ar(r,r===Sn?An:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=gc(r,f);else{o=f;var v=Ct;Ct|=2;var x=q_();(Sn!==r||An!==o)&&(Ii=null,Ka=Xe()+500,ea(r,o));do try{uA();break}catch(F){j_(r,F)}while(!0);$d(),cc.current=x,Ct=v,un!==null?o=0:(Sn=null,An=0,o=mn)}if(o!==0){if(o===2&&(v=Wo(r),v!==0&&(f=v,o=Ch(r,v))),o===1)throw l=yl,ea(r,0),fo(r,f),or(r,Xe()),l;if(o===6)fo(r,f);else{if(v=r.current.alternate,(f&30)===0&&!sA(v)&&(o=gc(r,f),o===2&&(x=Wo(r),x!==0&&(f=x,o=Ch(r,x))),o===1))throw l=yl,ea(r,0),fo(r,f),or(r,Xe()),l;switch(r.finishedWork=v,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:ta(r,ir,Ii);break;case 3:if(fo(r,f),(f&130023424)===f&&(o=Ah+500-Xe(),10<o)){if(Ar(r,0)!==0)break;if(v=r.suspendedLanes,(v&f)!==f){Yn(),r.pingedLanes|=r.suspendedLanes&v;break}r.timeoutHandle=Ud(ta.bind(null,r,ir,Ii),o);break}ta(r,ir,Ii);break;case 4:if(fo(r,f),(f&4194240)===f)break;for(o=r.eventTimes,v=-1;0<f;){var A=31-jn(f);x=1<<A,A=o[A],A>v&&(v=A),f&=~x}if(f=v,f=Xe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*aA(f/1960))-f,10<f){r.timeoutHandle=Ud(ta.bind(null,r,ir,Ii),f);break}ta(r,ir,Ii);break;case 5:ta(r,ir,Ii);break;default:throw Error(t(329))}}}return or(r,Xe()),r.callbackNode===l?$_.bind(null,r):null}function Ch(r,o){var l=xl;return r.current.memoizedState.isDehydrated&&(ea(r,o).flags|=256),r=gc(r,o),r!==2&&(o=ir,ir=l,o!==null&&Rh(o)),r}function Rh(r){ir===null?ir=r:ir.push.apply(ir,r)}function sA(r){for(var o=r;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var v=l[f],x=v.getSnapshot;v=v.value;try{if(!Vr(x(),v))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function fo(r,o){for(o&=~Mh,o&=~fc,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var l=31-jn(o),f=1<<l;r[l]=-1,o&=~f}}function X_(r){if((Ct&6)!==0)throw Error(t(327));Za();var o=Ar(r,0);if((o&1)===0)return or(r,Xe()),null;var l=gc(r,o);if(r.tag!==0&&l===2){var f=Wo(r);f!==0&&(o=f,l=Ch(r,f))}if(l===1)throw l=yl,ea(r,0),fo(r,o),or(r,Xe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,ta(r,ir,Ii),or(r,Xe()),null}function Ph(r,o){var l=Ct;Ct|=1;try{return r(o)}finally{Ct=l,Ct===0&&(Ka=Xe()+500,Wu&&io())}}function Qo(r){uo!==null&&uo.tag===0&&(Ct&6)===0&&Za();var o=Ct;Ct|=1;var l=Pr.transition,f=Ft;try{if(Pr.transition=null,Ft=1,r)return r()}finally{Ft=f,Pr.transition=l,Ct=o,(Ct&6)===0&&io()}}function Lh(){gr=Ya.current,jt(Ya)}function ea(r,o){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,O1(l)),un!==null)for(l=un.return;l!==null;){var f=l;switch(Bd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Vu();break;case 3:Xa(),jt(tr),jt(Nn),Qd();break;case 5:Zd(f);break;case 4:Xa();break;case 13:jt(Qt);break;case 19:jt(Qt);break;case 10:Xd(f.type._context);break;case 22:case 23:Lh()}l=l.return}if(Sn=r,un=r=ho(r.current,null),An=gr=o,mn=0,yl=null,Mh=fc=Jo=0,ir=xl=null,Yo!==null){for(o=0;o<Yo.length;o++)if(l=Yo[o],f=l.interleaved,f!==null){l.interleaved=null;var v=f.next,x=l.pending;if(x!==null){var A=x.next;x.next=v,f.next=A}l.pending=f}Yo=null}return r}function j_(r,o){do{var l=un;try{if($d(),ec.current=ic,tc){for(var f=en.memoizedState;f!==null;){var v=f.queue;v!==null&&(v.pending=null),f=f.next}tc=!1}if(Zo=0,xn=pn=en=null,hl=!1,pl=0,wh.current=null,l===null||l.return===null){mn=1,yl=o,un=null;break}e:{var x=r,A=l.return,F=l,z=o;if(o=An,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ae=z,Ee=F,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var We=__(A);if(We!==null){We.flags&=-257,y_(We,A,F,x,o),We.mode&1&&g_(x,ae,o),o=We,z=ae;var qe=o.updateQueue;if(qe===null){var Ke=new Set;Ke.add(z),o.updateQueue=Ke}else qe.add(z);break e}else{if((o&1)===0){g_(x,ae,o),Dh();break e}z=Error(t(426))}}else if(Zt&&F.mode&1){var sn=__(A);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),y_(sn,A,F,x,o),Gd(ja(z,F));break e}}x=z=ja(z,F),mn!==4&&(mn=2),xl===null?xl=[x]:xl.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,o&=-o,x.lanes|=o;var K=m_(x,z,o);Vg(x,K);break e;case 1:F=z;var G=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(lo===null||!lo.has(te)))){x.flags|=65536,o&=-o,x.lanes|=o;var Pe=v_(x,F,o);Vg(x,Pe);break e}}x=x.return}while(x!==null)}K_(l)}catch(Je){o=Je,un===l&&l!==null&&(un=l=l.return);continue}break}while(!0)}function q_(){var r=cc.current;return cc.current=ic,r===null?ic:r}function Dh(){(mn===0||mn===3||mn===2)&&(mn=4),Sn===null||(Jo&268435455)===0&&(fc&268435455)===0||fo(Sn,An)}function gc(r,o){var l=Ct;Ct|=2;var f=q_();(Sn!==r||An!==o)&&(Ii=null,ea(r,o));do try{lA();break}catch(v){j_(r,v)}while(!0);if($d(),Ct=l,cc.current=f,un!==null)throw Error(t(261));return Sn=null,An=0,mn}function lA(){for(;un!==null;)Y_(un)}function uA(){for(;un!==null&&!et();)Y_(un)}function Y_(r){var o=Q_(r.alternate,r,gr);r.memoizedProps=r.pendingProps,o===null?K_(r):un=o,wh.current=null}function K_(r){var o=r;do{var l=o.alternate;if(r=o.return,(o.flags&32768)===0){if(l=tA(l,o,gr),l!==null){un=l;return}}else{if(l=nA(l,o),l!==null){l.flags&=32767,un=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mn=6,un=null;return}}if(o=o.sibling,o!==null){un=o;return}un=o=r}while(o!==null);mn===0&&(mn=5)}function ta(r,o,l){var f=Ft,v=Pr.transition;try{Pr.transition=null,Ft=1,cA(r,o,l,f)}finally{Pr.transition=v,Ft=f}return null}function cA(r,o,l,f){do Za();while(uo!==null);if((Ct&6)!==0)throw Error(t(327));l=r.finishedWork;var v=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var x=l.lanes|l.childLanes;if(WM(r,x),r===Sn&&(un=Sn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||hc||(hc=!0,e0(Vt,function(){return Za(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Pr.transition,Pr.transition=null;var A=Ft;Ft=1;var F=Ct;Ct|=4,wh.current=null,iA(r,l),B_(l,r),P1(Dd),Cu=!!Ld,Dd=Ld=null,r.current=l,oA(l),at(),Ct=F,Ft=A,Pr.transition=x}else r.current=l;if(hc&&(hc=!1,uo=r,pc=v),x=r.pendingLanes,x===0&&(lo=null),yt(l.stateNode),or(r,Xe()),o!==null)for(f=r.onRecoverableError,l=0;l<o.length;l++)v=o[l],f(v.value,{componentStack:v.stack,digest:v.digest});if(dc)throw dc=!1,r=Th,Th=null,r;return(pc&1)!==0&&r.tag!==0&&Za(),x=r.pendingLanes,(x&1)!==0?r===bh?Sl++:(Sl=0,bh=r):Sl=0,io(),null}function Za(){if(uo!==null){var r=kv(pc),o=Pr.transition,l=Ft;try{if(Pr.transition=null,Ft=16>r?16:r,uo===null)var f=!1;else{if(r=uo,uo=null,pc=0,(Ct&6)!==0)throw Error(t(331));var v=Ct;for(Ct|=4,je=r.current;je!==null;){var x=je,A=x.child;if((je.flags&16)!==0){var F=x.deletions;if(F!==null){for(var z=0;z<F.length;z++){var ae=F[z];for(je=ae;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:_l(8,Ee,x)}var Te=Ee.child;if(Te!==null)Te.return=Ee,je=Te;else for(;je!==null;){Ee=je;var Se=Ee.sibling,We=Ee.return;if(N_(Ee),Ee===ae){je=null;break}if(Se!==null){Se.return=We,je=Se;break}je=We}}}var qe=x.alternate;if(qe!==null){var Ke=qe.child;if(Ke!==null){qe.child=null;do{var sn=Ke.sibling;Ke.sibling=null,Ke=sn}while(Ke!==null)}}je=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,je=A;else e:for(;je!==null;){if(x=je,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:_l(9,x,x.return)}var K=x.sibling;if(K!==null){K.return=x.return,je=K;break e}je=x.return}}var G=r.current;for(je=G;je!==null;){A=je;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,je=te;else e:for(A=G;je!==null;){if(F=je,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:uc(9,F)}}catch(Je){on(F,F.return,Je)}if(F===A){je=null;break e}var Pe=F.sibling;if(Pe!==null){Pe.return=F.return,je=Pe;break e}je=F.return}}if(Ct=v,io(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Qn,r)}catch{}f=!0}return f}finally{Ft=l,Pr.transition=o}}return!1}function Z_(r,o,l){o=ja(l,o),o=m_(r,o,1),r=ao(r,o,1),o=Yn(),r!==null&&($s(r,1,o),or(r,o))}function on(r,o,l){if(r.tag===3)Z_(r,r,l);else for(;o!==null;){if(o.tag===3){Z_(o,r,l);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(lo===null||!lo.has(f))){r=ja(l,r),r=v_(o,r,1),o=ao(o,r,1),r=Yn(),o!==null&&($s(o,1,r),or(o,r));break}}o=o.return}}function fA(r,o,l){var f=r.pingCache;f!==null&&f.delete(o),o=Yn(),r.pingedLanes|=r.suspendedLanes&l,Sn===r&&(An&l)===l&&(mn===4||mn===3&&(An&130023424)===An&&500>Xe()-Ah?ea(r,0):Mh|=l),or(r,o)}function J_(r,o){o===0&&((r.mode&1)===0?o=1:(o=qi,qi<<=1,(qi&130023424)===0&&(qi=4194304)));var l=Yn();r=Pi(r,o),r!==null&&($s(r,o,l),or(r,l))}function dA(r){var o=r.memoizedState,l=0;o!==null&&(l=o.retryLane),J_(r,l)}function hA(r,o){var l=0;switch(r.tag){case 13:var f=r.stateNode,v=r.memoizedState;v!==null&&(l=v.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),J_(r,l)}var Q_;Q_=function(r,o,l){if(r!==null)if(r.memoizedProps!==o.pendingProps||tr.current)rr=!0;else{if((r.lanes&l)===0&&(o.flags&128)===0)return rr=!1,eA(r,o,l);rr=(r.flags&131072)!==0}else rr=!1,Zt&&(o.flags&1048576)!==0&&Dg(o,Xu,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;sc(r,o),r=o.pendingProps;var v=za(o,Nn.current);$a(o,l),v=nh(null,o,f,r,v,l);var x=rh();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,nr(f)?(x=!0,Gu(o)):x=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Yd(o),v.updater=oc,o.stateNode=v,v._reactInternals=o,uh(o,f,r,l),o=hh(null,o,f,!0,x,l)):(o.tag=0,Zt&&x&&zd(o),qn(null,o,v,l),o=o.child),o;case 16:f=o.elementType;e:{switch(sc(r,o),r=o.pendingProps,v=f._init,f=v(f._payload),o.type=f,v=o.tag=mA(f),r=Wr(f,r),v){case 0:o=dh(null,o,f,r,l);break e;case 1:o=A_(null,o,f,r,l);break e;case 11:o=x_(null,o,f,r,l);break e;case 14:o=S_(null,o,f,Wr(f.type,r),l);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Wr(f,v),dh(r,o,f,v,l);case 1:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Wr(f,v),A_(r,o,f,v,l);case 3:e:{if(T_(o),r===null)throw Error(t(387));f=o.pendingProps,x=o.memoizedState,v=x.element,Hg(r,o),Ju(o,f,null,l);var A=o.memoizedState;if(f=A.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=x,o.memoizedState=x,o.flags&256){v=ja(Error(t(423)),o),o=b_(r,o,f,l,v);break e}else if(f!==v){v=ja(Error(t(424)),o),o=b_(r,o,f,l,v);break e}else for(vr=to(o.stateNode.containerInfo.firstChild),mr=o,Zt=!0,Gr=null,l=zg(o,null,f,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Va(),f===v){o=Di(r,o,l);break e}qn(r,o,f,l)}o=o.child}return o;case 5:return Wg(o),r===null&&Vd(o),f=o.type,v=o.pendingProps,x=r!==null?r.memoizedProps:null,A=v.children,Id(f,v)?A=null:x!==null&&Id(f,x)&&(o.flags|=32),M_(r,o),qn(r,o,A,l),o.child;case 6:return r===null&&Vd(o),null;case 13:return C_(r,o,l);case 4:return Kd(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=Ga(o,null,f,l):qn(r,o,f,l),o.child;case 11:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Wr(f,v),x_(r,o,f,v,l);case 7:return qn(r,o,o.pendingProps,l),o.child;case 8:return qn(r,o,o.pendingProps.children,l),o.child;case 12:return qn(r,o,o.pendingProps.children,l),o.child;case 10:e:{if(f=o.type._context,v=o.pendingProps,x=o.memoizedProps,A=v.value,Gt(Yu,f._currentValue),f._currentValue=A,x!==null)if(Vr(x.value,A)){if(x.children===v.children&&!tr.current){o=Di(r,o,l);break e}}else for(x=o.child,x!==null&&(x.return=o);x!==null;){var F=x.dependencies;if(F!==null){A=x.child;for(var z=F.firstContext;z!==null;){if(z.context===f){if(x.tag===1){z=Li(-1,l&-l),z.tag=2;var ae=x.updateQueue;if(ae!==null){ae=ae.shared;var Ee=ae.pending;Ee===null?z.next=z:(z.next=Ee.next,Ee.next=z),ae.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),jd(x.return,l,o),F.lanes|=l;break}z=z.next}}else if(x.tag===10)A=x.type===o.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,F=A.alternate,F!==null&&(F.lanes|=l),jd(A,l,o),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===o){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}qn(r,o,v.children,l),o=o.child}return o;case 9:return v=o.type,f=o.pendingProps.children,$a(o,l),v=Cr(v),f=f(v),o.flags|=1,qn(r,o,f,l),o.child;case 14:return f=o.type,v=Wr(f,o.pendingProps),v=Wr(f.type,v),S_(r,o,f,v,l);case 15:return E_(r,o,o.type,o.pendingProps,l);case 17:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Wr(f,v),sc(r,o),o.tag=1,nr(f)?(r=!0,Gu(o)):r=!1,$a(o,l),h_(o,f,v),uh(o,f,v,l),hh(null,o,f,!0,r,l);case 19:return P_(r,o,l);case 22:return w_(r,o,l)}throw Error(t(156,o.tag))};function e0(r,o){return fe(r,o)}function pA(r,o,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lr(r,o,l,f){return new pA(r,o,l,f)}function Ih(r){return r=r.prototype,!(!r||!r.isReactComponent)}function mA(r){if(typeof r=="function")return Ih(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ne)return 11;if(r===Q)return 14}return 2}function ho(r,o){var l=r.alternate;return l===null?(l=Lr(r.tag,o,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=o,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,o=r.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function _c(r,o,l,f,v,x){var A=2;if(f=r,typeof r=="function")Ih(r)&&(A=1);else if(typeof r=="string")A=5;else e:switch(r){case I:return na(l.children,v,x,o);case ce:A=8,v|=8;break;case C:return r=Lr(12,l,o,v|2),r.elementType=C,r.lanes=x,r;case pe:return r=Lr(13,l,o,v),r.elementType=pe,r.lanes=x,r;case H:return r=Lr(19,l,o,v),r.elementType=H,r.lanes=x,r;case re:return yc(l,v,x,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case O:A=10;break e;case oe:A=9;break e;case ne:A=11;break e;case Q:A=14;break e;case se:A=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=Lr(A,l,o,v),o.elementType=r,o.type=f,o.lanes=x,o}function na(r,o,l,f){return r=Lr(7,r,f,o),r.lanes=l,r}function yc(r,o,l,f){return r=Lr(22,r,f,o),r.elementType=re,r.lanes=l,r.stateNode={isHidden:!1},r}function Uh(r,o,l){return r=Lr(6,r,null,o),r.lanes=l,r}function Nh(r,o,l){return o=Lr(4,r.children!==null?r.children:[],r.key,o),o.lanes=l,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function vA(r,o,l,f,v){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=f,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Fh(r,o,l,f,v,x,A,F,z){return r=new vA(r,o,l,F,z),o===1?(o=1,x===!0&&(o|=8)):o=0,x=Lr(3,null,null,o),r.current=x,x.stateNode=r,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(x),r}function gA(r,o,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:r,containerInfo:o,implementation:l}}function t0(r){if(!r)return ro;r=r._reactInternals;e:{if(Mi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(nr(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(nr(l))return Rg(r,l,o)}return o}function n0(r,o,l,f,v,x,A,F,z){return r=Fh(l,f,!0,r,v,x,A,F,z),r.context=t0(null),l=r.current,f=Yn(),v=co(l),x=Li(f,v),x.callback=o??null,ao(l,x,v),r.current.lanes=v,$s(r,v,f),or(r,f),r}function xc(r,o,l,f){var v=o.current,x=Yn(),A=co(v);return l=t0(l),o.context===null?o.context=l:o.pendingContext=l,o=Li(x,A),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=ao(v,o,A),r!==null&&(jr(r,v,A,x),Zu(r,v,A)),A}function Sc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function r0(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<o?l:o}}function Oh(r,o){r0(r,o),(r=r.alternate)&&r0(r,o)}function _A(){return null}var i0=typeof reportError=="function"?reportError:function(r){console.error(r)};function kh(r){this._internalRoot=r}Ec.prototype.render=kh.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));xc(r,o,null,null)},Ec.prototype.unmount=kh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;Qo(function(){xc(null,r,null,null)}),o[Ti]=null}};function Ec(r){this._internalRoot=r}Ec.prototype.unstable_scheduleHydration=function(r){if(r){var o=Hv();r={blockedOn:null,target:r,priority:o};for(var l=0;l<Ji.length&&o!==0&&o<Ji[l].priority;l++);Ji.splice(l,0,r),l===0&&Wv(r)}};function zh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function wc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function o0(){}function yA(r,o,l,f,v){if(v){if(typeof f=="function"){var x=f;f=function(){var ae=Sc(A);x.call(ae)}}var A=n0(o,f,r,0,null,!1,!1,"",o0);return r._reactRootContainer=A,r[Ti]=A.current,ol(r.nodeType===8?r.parentNode:r),Qo(),A}for(;v=r.lastChild;)r.removeChild(v);if(typeof f=="function"){var F=f;f=function(){var ae=Sc(z);F.call(ae)}}var z=Fh(r,0,!1,null,null,!1,!1,"",o0);return r._reactRootContainer=z,r[Ti]=z.current,ol(r.nodeType===8?r.parentNode:r),Qo(function(){xc(o,z,l,f)}),z}function Mc(r,o,l,f,v){var x=l._reactRootContainer;if(x){var A=x;if(typeof v=="function"){var F=v;v=function(){var z=Sc(A);F.call(z)}}xc(o,A,r,v)}else A=yA(l,o,r,v,f);return Sc(A)}zv=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var l=rn(o.pendingLanes);l!==0&&(ud(o,l|1),or(o,Xe()),(Ct&6)===0&&(Ka=Xe()+500,io()))}break;case 13:Qo(function(){var f=Pi(r,1);if(f!==null){var v=Yn();jr(f,r,1,v)}}),Oh(r,1)}},cd=function(r){if(r.tag===13){var o=Pi(r,134217728);if(o!==null){var l=Yn();jr(o,r,134217728,l)}Oh(r,134217728)}},Bv=function(r){if(r.tag===13){var o=co(r),l=Pi(r,o);if(l!==null){var f=Yn();jr(l,r,o,f)}Oh(r,o)}},Hv=function(){return Ft},Vv=function(r,o){var l=Ft;try{return Ft=r,o()}finally{Ft=l}},_t=function(r,o,l){switch(o){case"input":if(xe(r,l),o=l.name,l.type==="radio"&&o!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var f=l[o];if(f!==r&&f.form===r.form){var v=Hu(f);if(!v)throw Error(t(90));j(f),xe(f,v)}}}break;case"textarea":T(r,l);break;case"select":o=l.value,o!=null&&Ie(r,!!l.multiple,o,!1)}},ot=Ph,wt=Qo;var xA={usingClientEntryPoint:!1,Events:[ll,Oa,Hu,me,Ue,Ph]},El={findFiberByHostInstance:$o,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SA={bundleType:El.bundleType,version:El.version,rendererPackageName:El.rendererPackageName,rendererConfig:El.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=de(r),r===null?null:r.stateNode},findFiberByHostInstance:El.findFiberByHostInstance||_A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Qn=Ac.inject(SA),Tt=Ac}catch{}}return ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xA,ar.createPortal=function(r,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(o))throw Error(t(200));return gA(r,o,null,l)},ar.createRoot=function(r,o){if(!zh(r))throw Error(t(299));var l=!1,f="",v=i0;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=Fh(r,1,!1,null,null,l,!1,f,v),r[Ti]=o.current,ol(r.nodeType===8?r.parentNode:r),new kh(o)},ar.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=de(o),r=r===null?null:r.stateNode,r},ar.flushSync=function(r){return Qo(r)},ar.hydrate=function(r,o,l){if(!wc(o))throw Error(t(200));return Mc(null,r,o,!0,l)},ar.hydrateRoot=function(r,o,l){if(!zh(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,v=!1,x="",A=i0;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),o=n0(o,null,r,1,l??null,v,!1,x,A),r[Ti]=o.current,ol(r),f)for(r=0;r<f.length;r++)l=f[r],v=l._getVersion,v=v(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,v]:o.mutableSourceEagerHydrationData.push(l,v);return new Ec(o)},ar.render=function(r,o,l){if(!wc(o))throw Error(t(200));return Mc(null,r,o,!1,l)},ar.unmountComponentAtNode=function(r){if(!wc(r))throw Error(t(40));return r._reactRootContainer?(Qo(function(){Mc(null,null,r,!1,function(){r._reactRootContainer=null,r[Ti]=null})}),!0):!1},ar.unstable_batchedUpdates=Ph,ar.unstable_renderSubtreeIntoContainer=function(r,o,l,f){if(!wc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Mc(r,o,l,!1,f)},ar.version="18.3.1-next-f1338f8080-20240426",ar}var h0;function Wx(){if(h0)return Vh.exports;h0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Vh.exports=RA(),Vh.exports}var p0;function PA(){if(p0)return Tc;p0=1;var n=Wx();return Tc.createRoot=n.createRoot,Tc.hydrateRoot=n.hydrateRoot,Tc}var LA=PA();const DA=Gx(LA);var ke=Dm();const Eo=Gx(ke),Gp=wA({__proto__:null,default:Eo},[ke]);var $x={compose:function(n){return function(e){return function(t){return n(e(t))}}}},Xx=function(n){return n.compose},wr=function(n){return n.identity},Mr={identity:function(n){return n}},IA=function(n){return function(e){return function(t){return function(i){return n(e(t))(e(i))}}}},gi=function(n){return function(e){return function(t){return n(t)(e)}}},Ht=function(n){return function(e){return n}};const UA=function(n){return function(e){for(var t=e.length,i=new Array(t),a=0;a<t;a++)i[a]=n(e[a]);return i}},Wn=void 0;var Mt=(function(){function n(){}return n.value=new n,n})(),Ot=function(n){return n.map},NA=function(n){var e=Ot(n);return function(t){return function(i){return e(i)(t)}}},jx=function(n){return Ot(n)(Ht(Wn))},qx={map:Xx($x)},nu={map:UA},Os=function(n){return n.apply},Rt=function(n){return n.pure},Im=function(n){var e=Rt(n);return function(t){return function(i){if(t)return i;if(!t)return e(Wn);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,i.constructor.name])}}},FA=function(n){var e=Os(n.Apply0()),t=Rt(n);return function(i){return function(a){return e(t(i))(a)}}};const OA=typeof Array.prototype.flatMap=="function"?function(n){return function(e){return n.flatMap(e)}}:function(n){return function(e){for(var t=[],i=n.length,a=0;a<i;a++)for(var s=e(n[a]),c=s.length,u=0;u<c;u++)t.push(s[u]);return t}};var Lf=function(n){return n.discard},kA={bind:OA},_n=function(n){return n.bind},Um=function(n){return gi(_n(n))},Yx=function(n){var e=Um(n);return function(t){return function(i){return function(a){return e(t)(i(a))}}}},zA=function(n){var e=_n(n);return function(t){return function(i){return function(a){return e(t(a))(i)}}}},Df={discard:function(n){return _n(n)}};const BA=function(n){return function(e){return n.length===0?e:e.length===0?n:n.concat(e)}};var Br=function(n){return n.reflectSymbol};const Nm=function(n){return function(e){return e[n]}},Fm=function(n){return function(e){return function(t){var i={};for(var a in t)({}).hasOwnProperty.call(t,a)&&(i[a]=t[a]);return i[n]=e,i}}},HA=function(n){return function(e){var t={};for(var i in e)i!==n&&{}.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}};var ru={append:BA},Hr=function(n){return n.append},VA=function(n){var e=Hr(n);return{append:function(t){return function(i){return function(a){return e(t(a))(i(a))}}}}},GA=function(n){return n.alt};const WA=2147483647,$A=-2147483648,XA="￿",jA="\0";var qA=function(n){return function(e){return function(t){return function(i){return function(a){return i<a?n:i===a?e:t}}}}};const YA=qA;var Om=function(n){return function(e){return n===e}};const KA=Om,ZA=Om,JA=Om,QA=function(n){return function(e){return function(t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!n(e[i])(t[i]))return!1;return!0}}};var ga={eq:JA},eT={eqRecord:function(n){return function(e){return function(t){return!0}}}},Kx=function(n){return n.eqRecord},tT=function(){return function(n){return{eq:Kx(n)(Mt.value)}}},nT={eq:ZA},rT={eq:KA},Ei=function(n){return n.eq},iT=Ei(rT),_f=function(n){return{eq:QA(Ei(n))}},df=function(n){var e=Kx(n);return function(){return function(t){var i=Br(t);return function(a){var s=Ei(a);return{eqRecord:function(c){return function(u){return function(d){var h=e(Mt.value)(u)(d),p=i(Mt.value),m=Nm(p);return s(m(u))(m(d))&&h}}}}}}}},Zx=function(n){var e=Ei(n);return function(t){return function(i){return iT(e(t)(i))(!1)}}},yf=(function(){function n(){}return n.value=new n,n})(),xf=(function(){function n(){}return n.value=new n,n})(),Xl=(function(){function n(){}return n.value=new n,n})(),oT={eq:function(n){return function(e){return n instanceof yf&&e instanceof yf||n instanceof xf&&e instanceof xf||n instanceof Xl&&e instanceof Xl}}},Jx=(function(){return{compare:YA(yf.value)(Xl.value)(xf.value),Eq0:function(){return nT}}})(),aT=function(n){return n.compare},km=function(n){return n.top},Qx={top:WA,bottom:$A},jl={top:XA,bottom:jA,Ord0:function(){return Jx}},If=function(n){return n.bottom};const sT=function(n){return n.toString()},lT=function(n){var e=n.length;return'"'+n.replace(/[\0-\x1F\x7F"\\]/g,function(t,i){switch(t){case'"':case"\\":return"\\"+t;case"\x07":return"\\a";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v"}var a=i+1,s=a<e&&n[a]>="0"&&n[a]<="9"?"\\&":"";return"\\"+t.charCodeAt(0).toString(10)+s})+'"'};var uT={show:lT},zm={show:sT},Ma=function(n){return n.show},Yt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ne=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),sr=(function(){function n(){}return n.value=new n,n})(),cT=function(n){return n},fT=function(n){return n},eS=function(n){return n.to},Bm=function(n){return n.from},dT=wr(Mr),bt=(function(){function n(){}return n.value=new n,n})(),gt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Aa=function(n){return function(e){return function(t){if(t instanceof bt)return n;if(t instanceof gt)return e(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},hT=Aa(!0)(Ht(!1)),iu={map:function(n){return function(e){return e instanceof gt?new gt(n(e.value0)):bt.value}}},pT=Ot(iu),tS=function(n){return Aa(n)(dT)},mT=function(){return function(n){if(n instanceof gt)return n.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[n.constructor.name])}},nS={apply:function(n){return function(e){if(n instanceof gt)return pT(n.value0)(e);if(n instanceof bt)return bt.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return iu}},rS={bind:function(n){return function(e){if(n instanceof gt)return e(n.value0);if(n instanceof bt)return bt.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,e.constructor.name])}}},vT=(function(){return{pure:gt.create,Apply0:function(){return nS}}})(),ct=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ts=function(n){return Aa(new ct(n))(mt.create)},Ta={map:function(n){return function(e){if(e instanceof ct)return new ct(e.value0);if(e instanceof mt)return new mt(n(e.value0));throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},gT=Ot(Ta),ou=function(n){return function(e){return function(t){if(t instanceof ct)return n(t.value0);if(t instanceof mt)return e(t.value0);throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},iS={apply:function(n){return function(e){if(n instanceof ct)return new ct(n.value0);if(n instanceof mt)return gT(n.value0)(e);throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return Ta}},au={bind:ou(function(n){return function(e){return new ct(n)}})(function(n){return function(e){return e(n)}}),Apply0:function(){return iS}},ba=(function(){return{pure:mt.create,Apply0:function(){return iS}}})();const _T=function(n){return function(){return n}},yT=function(n){return function(e){return function(){return e(n())()}}};var Hm=function(n){var e=_n(n.Bind1()),t=Rt(n.Applicative0());return function(i){return function(a){return e(i)(function(s){return e(a)(function(c){return t(s(c))})})}}};const xT=function(n){return function(e){return e===0?0:e>0?Math.floor(n/e):-Math.floor(n/-e)}},ST=function(n){return function(e){if(e===0)return 0;var t=Math.abs(e);return(n%t+t)%t}};var ET=function(n){return n.mod},oS={div:xT,mod:ST},wT=function(n){return n.div},aS={mempty:[],Semigroup0:function(){return ru}},ks=function(n){return n.mempty},MT=function(n){var e=ks(n),t=VA(n.Semigroup0());return{mempty:function(i){return e},Semigroup0:function(){return t}}},sS=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},AT={Applicative0:function(){return Vm},Bind1:function(){return TT}},TT={bind:yT,Apply0:function(){return uS(0)}},Vm={pure:_T,Apply0:function(){return uS(0)}},lS=sS("functorEffect","Effect",function(){return{map:FA(Vm)}}),uS=sS("applyEffect","Effect",function(){return{apply:Hm(AT),Functor0:function(){return lS(0)}}}),bT=lS(20);function cS(n){return n.message}var su=function(n){return n.throwError},Gm=function(n){return n.catchError},CT=function(n){var e=Gm(n),t=n.MonadThrow0().Monad0(),i=Ot(t.Bind1().Apply0().Functor0()),a=Rt(t.Applicative0());return function(s){return e(i(mt.create)(s))(function(c){return a(ct.create(c))})}},RT=function(n){return n},PT={map:function(n){return function(e){return n(e)}}},fS={apply:function(n){return function(e){return n(e)}},Functor0:function(){return PT}},dS={bind:function(n){return function(e){return e(n)}},Apply0:function(){return fS}},hS={pure:RT,Apply0:function(){return fS}},zo={Applicative0:function(){return hS},Bind1:function(){return dS}};const lu=function(n){return n},LT=function(n){return function(e){return function(){return n(e())}}},DT=function(n){return function(e){return function(){for(var t=0,i=n.length;t<i;t++)e(n[t])()}}};var IT={map:LT};const UT=function(n){return function(e){return n&&e}},NT=function(n){return function(e){return n||e}},FT=function(n){return!n};var OT=function(n){return n.not},kT=function(n){return n.ff},pS=function(n){return n.disj},Wp={ff:!1,tt:!0,implies:function(n){return function(e){return pS(Wp)(OT(Wp)(n))(e)}},conj:UT,disj:NT,not:FT},Wt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),zT=function(n){return n.value1},Wm={map:function(n){return function(e){return new Wt(e.value0,n(e.value1))}}},mS=function(n){return n.value0},BT=function(n){var e=Hr(n);return{apply:function(t){return function(i){return new Wt(e(t.value0)(i.value0),t.value1(i.value1))}},Functor0:function(){return Wm}}},HT=function(n){var e=BT(n.Semigroup0());return{pure:Wt.create(ks(n)),Apply0:function(){return e}}},vS=function(n){return n.lift},VT=function(n){return n.tell},GT={liftEffect:wr(Mr)},Uf=function(n){return n.liftEffect},WT=Ot(Ta),gS=function(n){return n},$m=function(n){return n},_S={lift:function(n){var e=_n(n.Bind1()),t=Rt(n.Applicative0());return function(i){return e(i)(function(a){return t(new mt(a))})}}},$T=vS(_S),XT=function(n){return function(e){return n(e)}},yS=function(n){var e=Ot(n);return{map:function(t){return XT(e(WT(t)))}}},Xm=function(n){return{Applicative0:function(){return Bo(n)},Bind1:function(){return uu(n)}}},uu=function(n){var e=_n(n.Bind1()),t=Rt(n.Applicative0());return{bind:function(i){return function(a){return e(i)(ou(function(s){return t(ct.create(s))})(function(s){var c=a(s);return c}))}},Apply0:function(){return xS(n)}}},xS=function(n){var e=yS(n.Bind1().Apply0().Functor0());return{apply:Hm(Xm(n)),Functor0:function(){return e}}},Bo=function(n){return{pure:(function(){var e=Rt(n.Applicative0());return function(t){return gS(e(mt.create(t)))}})(),Apply0:function(){return xS(n)}}},jm=function(n){var e=n.Monad0(),t=Xm(e);return{liftEffect:(function(){var i=$T(e),a=Uf(n);return function(s){return i(a(s))}})(),Monad0:function(){return t}}},Nf=function(n){var e=Xm(n);return{throwError:(function(){var t=Rt(n.Applicative0());return function(i){return gS(t(ct.create(i)))}})(),Monad0:function(){return e}}},qm=function(n){var e=_n(n.Bind1()),t=Rt(n.Applicative0()),i=Nf(n);return{catchError:function(a){return function(s){return e(a)(ou(function(c){var u=s(c);return u})(function(c){return t(mt.create(c))}))}},MonadThrow0:function(){return i}}},jT=function(n){var e=Hr(n);return function(t){var i=t.Bind1(),a=_n(i),s=Rt(t.Applicative0()),c=yS(i.Apply0().Functor0());return{alt:function(u){return function(d){return a(u)(function(h){if(h instanceof mt)return s(new mt(h.value0));if(h instanceof ct)return a(d)(function(p){if(p instanceof mt)return s(new mt(p.value0));if(p instanceof ct)return s(new ct(e(h.value0)(p.value0)));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): "+[p.constructor.name])});throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): "+[h.constructor.name])})}},Functor0:function(){return c}}}},SS=function(){return lu},Ym=SS(),qT=function(){return Ym},cu=function(){return Ym},YT=function(){return function(){return function(){return function(){return function(n){return Ym}}}}},KT=cu(),Km=function(n){return KT($m(n))},ZT=wr(Mr),JT=function(n){return n.bimap},ES=function(n){var e=JT(n);return function(t){return e(t)(ZT)}},wS={bimap:function(n){return function(e){return function(t){if(t instanceof ct)return new ct(n(t.value0));if(t instanceof mt)return new mt(e(t.value0));throw new Error("Failed pattern match at Data.Bifunctor (line 38, column 1 - line 40, column 36): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}}},QT=Ot(Wm),Ff=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),MS=function(n){var e=Ot(n);return{dimap:function(t){return function(i){return function(a){return new Ff((function(){var s=e(i);return function(c){return s(a.value0(c))}})(),(function(){var s=QT(i);return function(c){return s(a.value1(t(c)))}})())}}}}},Jt=function(n){return function(e){return mS(n.value1(e))}},In=function(n){return n.value0},Of=function(n){return function(e){return new Ff(n,function(t){return new Wt(e(t),t)})}},eb=function(n){return function(e){return new Ff(n,function(t){return new Wt(e(t),t)})}};function Zm(n){return n}function AS(n){return JSON.stringify(n)}function $h(n){return Object.prototype.toString.call(n)==="[object Array]"}function kf(n,e,t,i,a,s,c){return c==null?n():typeof c=="boolean"?e(c):typeof c=="number"?t(c):typeof c=="string"?i(c):Object.prototype.toString.call(c)==="[object Array]"?a(c):s(c)}function $p(n,e,t,i,a){if(i==null)return a==null?n:t;if(typeof i=="boolean")return typeof a=="boolean"?i===a?n:i===!1?t:e:a==null?e:t;if(typeof i=="number")return typeof a=="number"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"?e:t;if(typeof i=="string")return typeof a=="string"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"||typeof a=="number"?e:t;if($h(i))if($h(a)){for(var s=0;s<Math.min(i.length,a.length);s++){var c=$p(n,e,t,i[s],a[s]);if(c!==n)return c}return i.length===a.length?n:i.length<a.length?t:e}else return a==null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"?e:t;else{if(a==null)return e;if(typeof a=="boolean")return e;if(typeof a=="number")return e;if(typeof a=="string")return e;if($h(a))return e;var u=Object.keys(i),d=Object.keys(a);if(u.length<d.length)return t;if(u.length>d.length)return e;for(var h=u.concat(d).sort(),p=0;p<h.length;p++){var m=h[p];if(i[m]===void 0)return t;if(a[m]===void 0)return e;var g=$p(n,e,t,i[m],a[m]);if(g!==n)return g}return n}}const tb={};function nb(n){return n()}function rb(n,e,t,i){return t in i?e(i[t]):n}const ib=(function(){function n(a,s){this.head=a,this.tail=s}var e={};function t(a){return function(s){return new n(a,s)}}function i(a){for(var s=[],c=0,u=a;u!==e;)s[c++]=u.head,u=u.tail;return s}return function(a,s){return i(a(t)(e)(s))}})(),TS=function(n){return n.length},ob=function(n,e,t,i){return i<0||i>=t.length?e:n(t[i])},ab=function(n,e,t){return t.slice(n,e)};function sb(n){return n}const lb=sb;function ub(n){return n.slice()}const cb=ub,fb=function(n,e){return e.push(n)},bS=function(e){return function(t){return function(){return e(t)}}},db=function(e){return function(t){return function(i){return function(){return e(t,i)}}}};var hb=bS(lb),pb=bS(cb),mb=function(n){return function(e){return function(){var i=pb(e)();return n(i)(),hb(i)()}}},vb=db(fb);const gb=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=a-1;s>=0;s--)i=n(t[s])(i);return i}}},_b=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=0;s<a;s++)i=n(i)(t[s]);return i}}};var yb=function(n){return n.empty},xb={append:function(n){return function(e){return n instanceof gt?n:e}}},Sb=(function(){return{mempty:bt.value,Semigroup0:function(){return xb}}})(),Eb=function(n){return n},wb=function(n){var e=pS(n);return{append:function(t){return function(i){return e(t)(i)}}}},Mb=function(n){var e=wb(n);return{mempty:kT(n),Semigroup0:function(){return e}}},Ab=cu(),Tb=YT()()()(),zf=function(n){return n.foldr},Jm=function(n){return n.foldl},bb=function(n){var e=zf(n);return function(t){var i=Hr(t.Semigroup0()),a=ks(t);return function(s){return e(function(c){return function(u){return i(s(c))(u)}})(a)}}},$i={foldr:gb,foldl:_b,foldMap:function(n){return bb($i)(n)}},CS=function(n){return n.foldMap},Cb=function(n){var e=CS(n)(Sb);return function(t){var i=Ei(t);return function(a){var s=e(function(c){var u=i(a)(c.value0);return u?new gt(c.value1):bt.value});return function(c){return Ab(s(c))}}}},Rb=function(n){var e=CS(n);return function(t){return Tb(Eb)(e(Mb(t)))}};const Pb=function(n){return function(e){return function(t){return n(e,t)}}},Qm=function(n){return function(e){return function(t){return function(i){return n(e,t,i)}}}},RS=function(n){return function(e){return function(t){return function(i){return function(a){return n(e,t,i,a)}}}}},Lb=function(n){return function(e){for(var t=e.length,i=Array(t),a=0;a<t;a++)i[a]=n(a)(e[a]);return i}};var PS=function(n){return n.mapWithIndex},LS={mapWithIndex:Lb,Functor0:function(){return nu}};const Db=(function(){function n(a){return[a]}function e(a){return function(s){return[a,s]}}function t(a){return function(s){return function(c){return[a,s,c]}}}function i(a){return function(s){return a.concat(s)}}return function(a){return function(s){return function(c){return function(u){return function(d){function h(p,m){switch(m-p){case 0:return c([]);case 1:return s(n)(u(d[p]));case 2:return a(s(e)(u(d[p])))(u(d[p+1]));case 3:return a(a(s(t)(u(d[p])))(u(d[p+1])))(u(d[p+2]));default:var g=p+Math.floor((m-p)/4)*2;return a(s(i)(h(p,g)))(h(g,m))}}return h(0,d.length)}}}}}})();var Ib=wr(Mr),ev=function(n){return n.traverse},Ub=function(n){var e=ev(n);return function(t){return e(t)(Ib)}},Bf={traverse:function(n){var e=n.Apply0();return Db(Os(e))(Ot(e.Functor0()))(Rt(n))},sequence:function(n){return Ub(Bf)(n)},Functor0:function(){return nu},Foldable1:function(){return $i}},Nb=function(n){return n.sequence};const Fb=function(n){return function(e){return function(t){return function(i){return function(a){return function(s){for(var c=[],u=s;;){var d=a(u);if(n(d))return c;var h=e(d);c.push(t(h)),u=i(h)}}}}}}};var Ob=mT(),kb=function(n){return n.unfoldr},zb={unfoldr:Fb(hT)(Ob)(mS)(zT)},Bb=Hr(ru),Hb=function(n){return function(e){return mb(vb(e))(n)()}},Vb=Qm(ab),Gb=function(n){return[n]},Wb=(function(){return RS(ob)(gt.create)(bt.value)})(),$b=function(n){return Wb(n)(0)},Xb=function(n){return Pb(ib)(zf(n))},jb=function(n){return function(e){return Vb(n)(TS(e))(e)}},qb=function(n){return function(e){return Bb([n])(e)}},Yb=gi(_n(kA)),Kb=function(n){return Yb((function(){var e=Aa([])(Gb);return function(t){return e(n(t))}})())},Zb=Kb(wr(Mr)),Jb=zf($i),m0=PS(LS),Qb=Jm($i),eC=function(n){return n.foldrWithIndex},tC=function(n){var e=eC(n);return function(t){var i=Hr(t.Semigroup0()),a=ks(t);return function(s){return e(function(c){return function(u){return function(d){return i(s(c)(u))(d)}}})(a)}}},DS={foldrWithIndex:function(n){return function(e){var t=Jb(function(a){return function(s){return n(a.value0)(a.value1)(s)}})(e),i=m0(Wt.create);return function(a){return t(i(a))}}},foldlWithIndex:function(n){return function(e){var t=Qb(function(a){return function(s){return n(s.value0)(a)(s.value1)}})(e),i=m0(Wt.create);return function(a){return t(i(a))}}},foldMapWithIndex:function(n){return tC(DS)(n)},Foldable0:function(){return $i}},nC=function(n){var e=Nb(n.Traversable2()),t=PS(n.FunctorWithIndex0());return function(i){var a=e(i);return function(s){var c=t(s);return function(u){return a(c(u))}}}},rC=function(n){return n.traverseWithIndex},IS={traverseWithIndex:function(n){return nC(IS)(n)},FunctorWithIndex0:function(){return LS},FoldableWithIndex1:function(){return DS},Traversable2:function(){return Bf}};const iC=function(){return{}};function oC(n){return function(e){return function(t){return function(){return t[n]=e,t}}}}var aC=jx(IT),bs=(function(){return RS(rb)(bt.value)(gt.create)})(),US=function(n){var e=Xb(n);return function(t){return nb(function(){var a=iC();return DT(e(t))(function(s){return aC(oC(s.value0)(s.value1)(a))})(),a})}},sC=Ei(oT),lC=function(n){return function(e){return function(t){return t(n)(e)}}},Hf=(function(){return lC(bt.value)(gt.create)})(),uC=tb,cC={compare:function(n){return function(e){return $p(Xl.value,xf.value,yf.value,n,e)}}},fC={eq:function(n){return function(e){return sC(aT(cC)(n)(e))(Xl.value)}}},dC=function(n){return function(e){return function(t){return kf(Ht(n),Ht(n),Ht(n),e,Ht(n),Ht(n),t)}}},hC=Hf(dC),pC=function(n){return function(e){return function(t){return kf(Ht(n),Ht(n),Ht(n),Ht(n),Ht(n),e,t)}}},mC=Hf(pC),vC=function(n){return function(e){return function(t){return kf(Ht(n),Ht(n),e,Ht(n),Ht(n),Ht(n),t)}}},gC=Hf(vC),_C=function(n){return function(e){return function(t){return kf(Ht(n),Ht(n),Ht(n),Ht(n),e,Ht(n),t)}}},yC=Hf(_C);const xC=function(n){return function(e){return function(t){return(t|0)===t?n(t):e}}},Jr=function(n){return n},SC=isFinite,EC=Math.trunc?Math.trunc:function(n){return n<0?Math.ceil(n):Math.floor(n)};var v0=km(Qx),g0=If(Qx),NS=(function(){return xC(gt.create)(bt.value)})(),wC=function(n){return SC(n)?n>=Jr(v0)?v0:n<=Jr(g0)?g0:tS(0)(NS(n)):0},_0=function(n){return wC(EC(n))},FS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),MC=function(n){var e=yb(n);return function(t){return new FS(t,e)}},Qr=(function(){function n(){}return n.value=new n,n})(),tn=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),AC=function(n){return n},TC=function(n){return new tn(n.value0,n.value1)},bC=function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof tn&&h.value1 instanceof tn&&h.value1.value1 instanceof tn){a=new tn(h,d),i=h.value1.value1.value1;return}var p=function(g){return g instanceof tn&&g.value1 instanceof tn&&g.value1.value1 instanceof Qr?new tn(n(g.value0),new tn(n(g.value1.value0),Qr.value)):g instanceof tn&&g.value1 instanceof Qr?new tn(n(g.value0),Qr.value):Qr.value},m=function(g){return function(S){var w=g,E=!1,y;function _(b,M){if(b instanceof tn&&b.value0 instanceof tn&&b.value0.value1 instanceof tn&&b.value0.value1.value1 instanceof tn){w=b.value1,S=new tn(n(b.value0.value0),new tn(n(b.value0.value1.value0),new tn(n(b.value0.value1.value1.value0),M)));return}return E=!0,M}for(;!E;)y=_(w,S);return y}};return s=!0,m(d)(p(h))}for(;!s;)c=u(a,i);return c}};return e(Qr.value)},CC={map:bC},tv={foldr:function(n){return function(e){var t=(function(){var a=function(s){return function(c){var u=s,d=!1,h;function p(m,g){if(g instanceof Qr)return d=!0,m;if(g instanceof tn){u=new tn(g.value0,m),c=g.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[m.constructor.name,g.constructor.name])}for(;!d;)h=p(u,c);return h}};return a(Qr.value)})(),i=Jm(tv)(gi(n))(e);return function(a){return i(t(a))}}},foldl:function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof Qr)return s=!0,d;if(h instanceof tn){a=n(d)(h.value0),i=h.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}},RC=zf(tv),OS={append:function(n){return function(e){return RC(tn.create)(e)(n)}}},kS=Hr(OS),PC=(function(){return{mempty:Qr.value,Semigroup0:function(){return OS}}})(),LC={append:function(n){return function(e){return new FS(n.value0,kS(n.value1)(TC(e)))}}},DC={alt:kS,Functor0:function(){return CC}},IC=(function(){return{empty:Qr.value,Alt0:function(){return DC}}})(),UC=typeof Array.from=="function",NC=typeof Symbol<"u"&&Symbol!=null&&typeof Symbol.iterator<"u"&&typeof String.prototype[Symbol.iterator]=="function",FC=typeof String.prototype.fromCodePoint=="function",OC=typeof String.prototype.codePointAt=="function";const kC=function(n){return OC?function(e){return e.codePointAt(0)}:n},zC=function(n){return FC?String.fromCodePoint:n},BC=function(n){return function(e){return NC?function(t){for(var i="",a=t[Symbol.iterator](),s=0;s<e;++s){var c=a.next();if(c.done)return i;i+=c.value}return i}:n(e)}},HC=function(n){return function(e){return UC?function(t){return Array.from(t,e)}:n}};function _a(n){return n.charCodeAt(0)}function VC(n){return String.fromCharCode(n)}var zS=If(jl),BS=km(jl),GC=function(n){return n.toEnum},HS=function(n){return n.fromEnum},WC=function(n){var e=GC(n),t=HS(n),i=If(n.Bounded0());return function(a){return function(s){return function(c){var u=e(c);if(u instanceof gt)return u.value0;if(u instanceof bt){var d=c<t(i);return d?a:s}throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): "+[u.constructor.name])}}}},$C=function(n){return function(e){return function(t){return n(e(t)+1|0)}}},XC=function(n){return function(e){return function(t){return n(e(t)-1|0)}}},Xp=function(n){return n>=_a(zS)&&n<=_a(BS)?new gt(VC(n)):bt.value},jC={succ:$C(Xp)(_a),pred:XC(Xp)(_a),Ord0:function(){return Jx}},VS=(function(){return{cardinality:_a(BS)-_a(zS)|0,toEnum:Xp,fromEnum:_a,Bounded0:function(){return jl},Enum1:function(){return jC}}})();const qC=function(n){return n},nv=function(n){return n.length},YC=function(n){return function(e){return function(t){return function(i){var a=i.indexOf(t);return a===-1?e:n(a)}}}},KC=function(n){return function(e){return function(t){return function(i){var a=i.lastIndexOf(t);return a===-1?e:n(a)}}}},GS=function(n){return function(e){return e.substr(0,n)}},jp=function(n){return function(e){return e.substring(n)}},Ol=function(n){return function(e){if(n>=0&&n<e.length)return e.charAt(n);throw new Error("Data.String.Unsafe.charAt: Invalid index.")}};var ZC=(function(){return KC(gt.create)(bt.value)})(),JC=(function(){return YC(gt.create)(bt.value)})();const WS=function(n){return function(e){return e.split(n)}},QC=function(n){return function(e){return e.join(n)}};var kl=HS(VS),$S=Ot(iu),eR=kb(zb),tR=wT(oS),nR=ET(oS),XS=function(n){return function(e){return(((n-55296|0)*1024|0)+(e-56320|0)|0)+65536|0}},jS=function(n){return 56320<=n&&n<=57343},qS=function(n){return 55296<=n&&n<=56319},YS=function(n){var e=nv(n);if(e===0)return bt.value;if(e===1)return new gt({head:kl(Ol(0)(n)),tail:""});var t=kl(Ol(1)(n)),i=kl(Ol(0)(n)),a=qS(i)&&jS(t);return a?new gt({head:XS(i)(t),tail:jp(2)(n)}):new gt({head:i,tail:jp(1)(n)})},rR=function(n){return $S(function(e){return new Wt(e.head,e.tail)})(YS(n))},iR=function(n){return eR(rR)(n)},oR=function(n){var e=kl(Ol(0)(n)),t=qS(e)&&nv(n)>1;if(t){var i=kl(Ol(1)(n)),a=jS(i);return a?XS(e)(i):e}return e},aR=kC(oR),sR=HC(iR)(aR),lR=function(n){return TS(sR(n))},uR=function(n){return function(e){return $S(function(t){return lR(GS(t)(e))})(ZC(n)(e))}},Xh=(function(){var n=WC(VS)(If(jl))(km(jl));return function(e){return qC(n(e))}})(),cR=function(n){if(n<=65535)return Xh(n);var e=tR(n-65536|0)(1024)+55296|0,t=nR(n-65536|0)(1024)+56320|0;return Xh(e)+Xh(t)},fR=zC(cR),KS=function(n){return function(e){if(n<1)return"";var t=YS(e);return t instanceof gt?fR(t.value0.head)+KS(n-1|0)(t.value0.tail):e}},dR=BC(KS),hR=Ma(zm),y0=_n(au),rv=ES(wS),iv=Rt(ba),ZS=Um(au),pR=US(tv),mR=Yx(rS),vR=rC(IS)(ba),gR=Ot(nu),_i=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_R=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),JS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),QS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),ov=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),eE=(function(){function n(){}return n.value=new n,n})(),yR=function(n){var e=Br(n);return function(){return function(t){return function(i){return function(a){var s=function(d){return function(h){return new tn(new Wt(d,Jt(i)(Nm(d)(h))),Jt(a)(h))}},c=function(d){return function(h){return y0(In(a)(h))(function(p){return y0(rv(QS.create(d))((function(){var m=bs(d)(h);if(m instanceof gt)return In(i)(m.value0);if(m instanceof bt)return new ct(eE.value);throw new Error("Failed pattern match at Data.Codec.Argonaut (line 264, column 29 - line 266, column 34): "+[m.constructor.name])})()))(function(m){return iv(Fm(d)(m)(p))})})}},u=e(t);return eb(c(u))(s(u))}}}}},xR=(function(){return new Ff(Ht(iv({})),Rt(HT(PC)))})(),SR=function(n){var e=function(t){if(t instanceof _i)return"  Expected value of type '"+(t.value0+"'.");if(t instanceof _R)return"  Unexpected value "+(AS(t.value0)+".");if(t instanceof JS)return"  At array index "+(hR(t.value0)+(`:
`+e(t.value1)));if(t instanceof QS)return"  At object key "+(t.value0+(`:
`+e(t.value1)));if(t instanceof ov)return"  Under '"+(t.value0+(`':
`+e(t.value1)));if(t instanceof eE)return"  No value was found.";throw new Error("Failed pattern match at Data.Codec.Argonaut (line 90, column 8 - line 96, column 43): "+[t.constructor.name])};return`An error occurred while decoding a JSON value:
`+e(n)},Vf=function(n){return function(e){return Of((function(){var t=Aa(new ct(new _i(n)))(iv);return function(i){return t(e(i))}})())}},ur=Vf("String")(hC)(Zm),Io=Vf("Object")(mC)(Zm),ER=function(n){return function(e){return Of(function(t){return rv(ov.create(n))(ZS(In(e))(In(Io)(t)))})(function(t){return Jt(Io)(pR(Jt(e)(t)))})}},Ro=Vf("Array")(yC)(Zm),Ao=Vf("Int")(mR(NS)(gC))(function(n){return Jr(n)}),Gf=function(n){return Of(function(e){return ZS(vR(function(t){return function(i){return rv(JS.create(t))(In(n)(i))}}))(In(Ro)(e))})(function(e){return gR(Jt(n))(e)})};function wR(n,e){var t={};for(var i in e)({}).hasOwnProperty.call(e,i)&&(t[i]=e[i]);for(var a in n)({}).hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}var MR=function(){return function(n){return function(e){return wR(n,e)}}},AR=function(n){var e=Br(n);return function(){return function(){return function(t){return function(i){return function(a){return Fm(e(t))(i)(a)}}}}}},av=function(n){var e=Br(n);return function(){return function(){return function(t){return function(i){return function(a){return Fm(e(t))(i)(a)}}}}}},Ho=function(n){var e=Br(n);return function(){return function(t){return function(i){return Nm(e(t))(i)}}}},TR=function(n){var e=Br(n);return function(){return function(){return function(t){return function(i){return HA(e(t))(i)}}}}},sv={rowListCodec:function(n){return function(e){return xR}}},tE=function(n){return n.rowListCodec},pi=function(n){var e=tE(n);return function(){return function(){return function(t){var i=Ho(t)(),a=yR(t)();return{rowListCodec:function(s){return function(c){var u=e(Mt.value)(c),d=i(Mt.value)(c);return a(Mt.value)(d)(u)}}}}}}},bR=function(){return function(n){return tE(n)(Mt.value)}},CR=bR(),nE=function(){return function(n){var e=CR(n);return function(t){return function(i){return ER(t)(e(i))}}}},ha={dimap:function(n){return function(e){return function(t){return function(i){return e(t(n(i)))}}}}},Wf=function(n){return n.dimap},Xi={first:function(n){return function(e){return new Wt(n(e.value0),e.value1)}},second:Ot(Wm),Profunctor0:function(){return ha}},RR=function(n){return n.first},x0=SS(),PR=function(n){return function(e){return function(t){var i=Wf(t);return function(a){return i(n)(e)(a)}}}},LR=function(){return function(){return function(n){return PR(x0)(x0)(n)}}},DR=LR()(),IR=function(){return function(){return function(n){return DR(n)}}},UR=IR()(),rE=function(){return function(n){return function(e){return UR(e)}}},iE=function(n){return n},Mo=function(n){return function(e){return iE(n)(Ht(e))}},Fr=(function(){var n={},e="Pure",t="Throw",i="Catch",a="Sync",s="Async",c="Bind",u="Bracket",d="Fork",h="Sequential",p="Map",m="Apply",g="Alt",S="Cons",w="Resume",E="Release",y="Finalizer",_="Finalized",b="Forked";function M(P,k,W,Y){this.tag=P,this._1=k,this._2=W,this._3=Y}function R(P){var k=function(W,Y,ee){return new M(P,W,Y,ee)};return k.tag=P,k}function U(P){return new M(e,void 0)}function N(P){try{P()}catch(k){setTimeout(function(){throw k},0)}}function I(P,k,W){try{return k(W())}catch(Y){return P(Y)}}function ce(P,k,W){try{return k(W)()}catch(Y){return W(P(Y))(),U}}var C=(function(){var P=1024,k=0,W=0,Y=new Array(P),ee=!1;function Z(){var _e;for(ee=!0;k!==0;)k--,_e=Y[W],Y[W]=void 0,W=(W+1)%P,_e();ee=!1}return{isDraining:function(){return ee},enqueue:function(_e){var ve;k===P&&(ve=ee,Z(),ee=ve),Y[(W+k)%P]=_e,k++,ee||Z()}}})();function O(P){var k={},W=0,Y=0;return{register:function(ee){var Z=W++;ee.onComplete({rethrow:!0,handler:function(_e){return function(){Y--,delete k[Z]}}})(),k[Z]=ee,Y++},isEmpty:function(){return Y===0},killAll:function(ee,Z){return function(){if(Y===0)return Z();var _e=0,ve={};function be(ze){ve[ze]=k[ze].kill(ee,function(j){return function(){delete ve[ze],_e--,P.isLeft(j)&&P.fromLeft(j)&&setTimeout(function(){throw P.fromLeft(j)},0),_e===0&&Z()}})()}for(var Oe in k)k.hasOwnProperty(Oe)&&(_e++,be(Oe));return k={},W=0,Y=0,function(ze){return new M(a,function(){for(var j in ve)ve.hasOwnProperty(j)&&ve[j]()})}}}}}var oe=0,ne=1,pe=2,H=3,Q=4,se=5,re=6;function X(P,k,W){var Y=0,ee=oe,Z=W,_e=null,ve=null,be=null,Oe=null,ze=null,j=0,Dt=0,Ve=null,le=!0;function ue(we){for(var Ie,Ze,D;;)switch(Ie=null,Ze=null,D=null,ee){case pe:ee=ne;try{Z=be(Z),Oe===null?be=null:(be=Oe._1,Oe=Oe._2)}catch(q){ee=se,_e=P.left(q),Z=null}break;case H:P.isLeft(Z)?(ee=se,_e=Z,Z=null):be===null?ee=se:(ee=pe,Z=P.fromRight(Z));break;case ne:switch(Z.tag){case c:be&&(Oe=new M(S,be,Oe)),be=Z._2,ee=ne,Z=Z._1;break;case e:be===null?(ee=se,Z=P.right(Z._1)):(ee=pe,Z=Z._1);break;case a:ee=H,Z=I(P.left,P.right,Z._1);break;case s:ee=Q,Z=ce(P.left,Z._1,function(q){return function(){Y===we&&(Y++,C.enqueue(function(){Y===we+1&&(ee=H,Z=q,ue(Y))}))}});return;case t:ee=se,_e=P.left(Z._1),Z=null;break;case i:be===null?ze=new M(S,Z,ze,ve):ze=new M(S,Z,new M(S,new M(w,be,Oe),ze,ve),ve),be=null,Oe=null,ee=ne,Z=Z._1;break;case u:j++,be===null?ze=new M(S,Z,ze,ve):ze=new M(S,Z,new M(S,new M(w,be,Oe),ze,ve),ve),be=null,Oe=null,ee=ne,Z=Z._1;break;case d:ee=H,Ie=X(P,k,Z._2),k&&k.register(Ie),Z._1&&Ie.run(),Z=P.right(Ie);break;case h:ee=ne,Z=$(P,k,Z._1);break}break;case se:if(be=null,Oe=null,ze===null)ee=re,Z=ve||_e||Z;else switch(Ie=ze._3,D=ze._1,ze=ze._2,D.tag){case i:ve&&ve!==Ie&&j===0?ee=se:_e&&(ee=ne,Z=D._2(P.fromLeft(_e)),_e=null);break;case w:ve&&ve!==Ie&&j===0||_e?ee=se:(be=D._1,Oe=D._2,ee=pe,Z=P.fromRight(Z));break;case u:j--,_e===null&&(Ze=P.fromRight(Z),ze=new M(S,new M(E,D._2,Ze),ze,Ie),(ve===Ie||j>0)&&(ee=ne,Z=D._3(Ze)));break;case E:ze=new M(S,new M(_,Z,_e),ze,ve),ee=ne,ve&&ve!==Ie&&j===0?Z=D._1.killed(P.fromLeft(ve))(D._2):_e?Z=D._1.failed(P.fromLeft(_e))(D._2):Z=D._1.completed(P.fromRight(Z))(D._2),_e=null,j++;break;case y:j++,ze=new M(S,new M(_,Z,_e),ze,ve),ee=ne,Z=D._1;break;case _:j--,ee=se,Z=D._1,_e=D._2;break}break;case re:for(var T in Ve)Ve.hasOwnProperty(T)&&(le=le&&Ve[T].rethrow,N(Ve[T].handler(Z)));Ve=null,ve&&_e?setTimeout(function(){throw P.fromLeft(_e)},0):P.isLeft(Z)&&le&&setTimeout(function(){if(le)throw P.fromLeft(Z)},0);return;case oe:ee=ne;break;case Q:return}}function xe(we){return function(){if(ee===re)return le=le&&we.rethrow,we.handler(Z)(),function(){};var Ie=Dt++;return Ve=Ve||{},Ve[Ie]=we,function(){Ve!==null&&delete Ve[Ie]}}}function ge(we,Ie){return function(){if(ee===re)return Ie(P.right(void 0))(),function(){};var Ze=xe({rethrow:!1,handler:function(){return Ie(P.right(void 0))}})();switch(ee){case oe:ve=P.left(we),ee=re,Z=ve,ue(Y);break;case Q:ve===null&&(ve=P.left(we)),j===0&&(ee===Q&&(ze=new M(S,new M(y,Z(we)),ze,ve)),ee=se,Z=null,_e=null,ue(++Y));break;default:ve===null&&(ve=P.left(we)),j===0&&(ee=se,Z=null,_e=null)}return Ze}}function Me(we){return function(){var Ie=xe({rethrow:!1,handler:we})();return ee===oe&&ue(Y),Ie}}return{kill:ge,join:Me,onComplete:xe,isSuspended:function(){return ee===oe},run:function(){ee===oe&&(C.isDraining()?ue(Y):C.enqueue(function(){ue(Y)}))}}}function ie(P,k,W,Y){var ee=0,Z={},_e=0,ve={},be=new Error("[ParAff] Early exit"),Oe=null,ze=n;function j(xe,ge,Me){var we=ge,Ie=null,Ze=null,D=0,T={},q,Ae;e:for(;;)switch(q=null,we.tag){case b:if(we._3===n&&(q=Z[we._1],T[D++]=q.kill(xe,function(ye){return function(){D--,D===0&&Me(ye)()}})),Ie===null)break e;we=Ie._2,Ze===null?Ie=null:(Ie=Ze._1,Ze=Ze._2);break;case p:we=we._2;break;case m:case g:Ie&&(Ze=new M(S,Ie,Ze)),Ie=we,we=we._1;break}if(D===0)Me(P.right(void 0))();else for(Ae=0,q=D;Ae<q;Ae++)T[Ae]=T[Ae]();return T}function Dt(xe,ge,Me){var we,Ie,Ze,D,T,q;for(P.isLeft(xe)?(we=xe,Ie=null):(Ie=xe,we=null);;){if(Ze=null,D=null,T=null,q=null,Oe!==null)return;if(ge===null){Y(we||Ie)();return}if(ge._3!==n)return;switch(ge.tag){case p:we===null?(ge._3=P.right(ge._1(P.fromRight(Ie))),Ie=ge._3):ge._3=we;break;case m:if(Ze=ge._1._3,D=ge._2._3,we){if(ge._3=we,T=!0,q=_e++,ve[q]=j(be,we===Ze?ge._2:ge._1,function(){return function(){delete ve[q],T?T=!1:Me===null?Dt(we,null,null):Dt(we,Me._1,Me._2)}}),T){T=!1;return}}else{if(Ze===n||D===n)return;Ie=P.right(P.fromRight(Ze)(P.fromRight(D))),ge._3=Ie}break;case g:if(Ze=ge._1._3,D=ge._2._3,Ze===n&&P.isLeft(D)||D===n&&P.isLeft(Ze))return;if(Ze!==n&&P.isLeft(Ze)&&D!==n&&P.isLeft(D))we=Ie===Ze?D:Ze,Ie=null,ge._3=we;else if(ge._3=Ie,T=!0,q=_e++,ve[q]=j(be,Ie===Ze?ge._2:ge._1,function(){return function(){delete ve[q],T?T=!1:Me===null?Dt(Ie,null,null):Dt(Ie,Me._1,Me._2)}}),T){T=!1;return}break}Me===null?ge=null:(ge=Me._1,Me=Me._2)}}function Ve(xe){return function(ge){return function(){delete Z[xe._1],xe._3=ge,Dt(ge,xe._2._1,xe._2._2)}}}function le(){var xe=ne,ge=W,Me=null,we=null,Ie,Ze;e:for(;;)switch(Ie=null,Ze=null,xe){case ne:switch(ge.tag){case p:Me&&(we=new M(S,Me,we)),Me=new M(p,ge._1,n,n),ge=ge._2;break;case m:Me&&(we=new M(S,Me,we)),Me=new M(m,n,ge._2,n),ge=ge._1;break;case g:Me&&(we=new M(S,Me,we)),Me=new M(g,n,ge._2,n),ge=ge._1;break;default:Ze=ee++,xe=se,Ie=ge,ge=new M(b,Ze,new M(S,Me,we),n),Ie=X(P,k,Ie),Ie.onComplete({rethrow:!1,handler:Ve(ge)})(),Z[Ze]=Ie,k&&k.register(Ie)}break;case se:if(Me===null)break e;Me._1===n?(Me._1=ge,xe=ne,ge=Me._2,Me._2=n):(Me._2=ge,ge=Me,we===null?Me=null:(Me=we._1,we=we._2))}for(ze=ge,Ze=0;Ze<ee;Ze++)Z[Ze].run()}function ue(xe,ge){Oe=P.left(xe);var Me;for(var we in ve)if(ve.hasOwnProperty(we)){Me=ve[we];for(we in Me)Me.hasOwnProperty(we)&&Me[we]()}ve=null;var Ie=j(xe,ze,ge);return function(Ze){return new M(s,function(D){return function(){for(var T in Ie)Ie.hasOwnProperty(T)&&Ie[T]();return U}})}}return le(),function(xe){return new M(s,function(ge){return function(){return ue(xe,ge)}})}}function $(P,k,W){return new M(s,function(Y){return function(){return ie(P,k,W,Y)}})}return M.EMPTY=n,M.Pure=R(e),M.Throw=R(t),M.Catch=R(i),M.Sync=R(a),M.Async=R(s),M.Bind=R(c),M.Bracket=R(u),M.Fork=R(d),M.Seq=R(h),M.ParMap=R(p),M.ParApply=R(m),M.ParAlt=R(g),M.Fiber=X,M.Supervisor=O,M.Scheduler=C,M.nonCanceler=U,M})();const NR=Fr.Pure,FR=Fr.Throw;function OR(n){return function(e){return Fr.Catch(n,e)}}function kR(n){return function(e){return e.tag===Fr.Pure.tag?Fr.Pure(n(e._1)):Fr.Bind(e,function(t){return Fr.Pure(n(t))})}}function zR(n){return function(e){return Fr.Bind(n,e)}}const BR=Fr.Sync,S0=Fr.Async;function HR(n,e){return function(){return Fr.Fiber(n,null,e)}}Fr.Seq;var VR=function(n){return n},GR=function(n){return n},WR=function(n){return function(e){return n(e)}},$R=function(n){var e=Ot(n);return{map:function(t){return WR(e(function(i){return new Wt(t(i.value0),i.value1)}))}}},oE=function(n){var e=Hr(n);return function(t){var i=Os(t),a=t.Functor0(),s=Ot(a),c=$R(a);return{apply:function(u){return function(d){var h=function(p){return function(m){return new Wt(p.value0(m.value0),e(p.value1)(m.value1))}};return i(s(h)(u))(d)}},Functor0:function(){return c}}}},aE=function(n){var e=Hr(n),t=oE(n);return function(i){var a=_n(i),s=i.Apply0(),c=Ot(s.Functor0()),u=t(s);return{bind:function(d){return function(h){return a(d)(function(p){var m=h(p.value0);return c(function(g){return new Wt(g.value0,e(p.value1)(g.value1))})(m)})}},Apply0:function(){return u}}}},sE=function(n){var e=ks(n),t=oE(n.Semigroup0());return function(i){var a=Rt(i),s=t(i.Apply0());return{pure:function(c){return a(new Wt(c,e))},Apply0:function(){return s}}}},XR=function(n){var e=sE(n),t=aE(n.Semigroup0());return function(i){var a=e(i.Applicative0()),s=t(i.Bind1());return{Applicative0:function(){return a},Bind1:function(){return s}}}},jR=function(n){var e=n.Semigroup0(),t=XR(n);return function(i){var a=t(i);return{tell:(function(){var s=Rt(i.Applicative0()),c=Wt.create(Wn);return function(u){return VR(s(c(u)))}})(),Semigroup0:function(){return e},Monad1:function(){return a}}}};const qR=function(n){return n()},YR=function(n){throw new Error(n)};var KR=function(){return YR},ZR=KR(),JR=qR,E0=function(n){return JR(function(){return ZR(n)})},QR=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},eP=jx(bT),lE={map:kR},tP=(function(){var n=function(i){if(i instanceof mt)return i.value0;if(i instanceof ct)return E0("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[i.constructor.name])},e=function(i){if(i instanceof ct)return i.value0;if(i instanceof mt)return E0("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[i.constructor.name])},t=function(i){if(i instanceof ct)return!0;if(i instanceof mt)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[i.constructor.name])};return{isLeft:t,fromLeft:e,fromRight:n,left:ct.create,right:mt.create}})(),nP=function(n){return HR(tP,n)},rP=function(n){return function(){var t=nP(n)();return t.run(),t}},uE=function(n){return eP(rP(n))},hr={Applicative0:function(){return fu},Bind1:function(){return lv}},lv={bind:zR,Apply0:function(){return cE(0)}},fu={pure:NR,Apply0:function(){return cE(0)}},cE=QR("applyAff","Effect.Aff",function(){return{apply:Hm(hr),Functor0:function(){return lE}}}),iP=Rt(fu),du={liftEffect:BR,Monad0:function(){return hr}},oP={throwError:FR,Monad0:function(){return hr}},aP={catchError:OR,MonadThrow0:function(){return oP}},sP=Ht(iP(Wn));const lP=function(n){return function(){console.log(n)}};var $f=function(n){var e=Uf(n);return function(t){return e(lP(t))}};const fE=function(e){return function(t){return e(t)()}};function uP(n,e,t,i,a){return function(s,c){var u=n.newXHR(),d=n.fixupUrl(a.url,u);if(u.open(a.method||"GET",d,!0,a.username,a.password),a.headers)try{for(var h=0,p;(p=a.headers[h])!=null;h++)u.setRequestHeader(p.field,p.value)}catch(g){s(g)}var m=function(g){return function(){s(new Error(g))}};return u.onerror=m(t),u.ontimeout=m(e),u.onload=function(){c({status:u.status,statusText:u.statusText,headers:u.getAllResponseHeaders().split(`\r
`).filter(function(g){return g.length>0}).map(function(g){var S=g.indexOf(":");return i(g.substring(0,S))(g.substring(S+2))}),body:u.response})},u.responseType=a.responseType,u.withCredentials=a.withCredentials,u.timeout=a.timeout,u.send(a.content),function(g,S,w){try{u.abort()}catch(E){return S(E)}return w()}}}var dE="application/json",cP="application/x-www-form-urlencoded",fP=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dP=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),hP=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),pP=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mP=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),hE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),pE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),vP=function(n){return n instanceof hE?new gt(cP):n instanceof pE?new gt(dE):bt.value},w0=cu(),uv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),cv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),gP=function(n){if(n instanceof uv||n instanceof cv)return w0(n.value0);if(n instanceof mE)return n.value1;throw new Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): "+[n.constructor.name])},M0=function(n){if(n instanceof uv)return"Accept";if(n instanceof cv)return"Content-Type";if(n instanceof mE)return n.value0;throw new Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): "+[n.constructor.name])},fv=wr(Mr),vE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),gE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_E=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Xf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),hv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_P=function(n){if(n instanceof vE)return"arraybuffer";if(n instanceof gE)return"blob";if(n instanceof _E)return"document";if(n instanceof Xf||n instanceof dv)return"text";if(n instanceof hv)return"";throw new Error("Failed pattern match at Affjax.ResponseFormat (line 44, column 3 - line 50, column 19): "+[n.constructor.name])},yP=function(n){return n instanceof Xf?new gt(dE):bt.value},xP=(function(){return new dv(fv)})(),SP=(function(){return new Xf(fv)})(),EP=(function(){return new hv(fv)})(),wP=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})();function MP(n,e,t){try{return e(JSON.parse(t))}catch(i){return n(i.message)}}var AP=function(n){return MP(ct.create,mt.create,n)};function TP(n){return n.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function bP(n,e,t){try{return e(TP(encodeURIComponent(t)).replace(/%20/g,"+"))}catch(i){return n(i)}}function CP(n,e,t){try{return e(decodeURIComponent(t))}catch(i){return n(i)}}var jh=(function(){return Qm(bP)(Ht(bt.value))(gt.create)})(),RP=(function(){return Qm(CP)(Ht(bt.value))(gt.create)})(),PP=Os(nS),A0=Ot(iu),LP=ev(Bf)(vT),DP=function(n){return n},IP=(function(){var n=function(i){if(i.value1 instanceof bt)return jh(i.value0);if(i.value1 instanceof gt)return PP(A0(function(a){return function(s){return a+("="+s)}})(jh(i.value0)))(jh(i.value1.value0));throw new Error("Failed pattern match at Data.FormURLEncoded (line 37, column 16 - line 39, column 114): "+[i.constructor.name])},e=A0(QC("&")),t=LP(n);return function(i){return e(t(DP(i)))}})(),UP=(function(){function n(){}return n.value=new n,n})(),yE=(function(){function n(){}return n.value=new n,n})(),NP=(function(){function n(){}return n.value=new n,n})(),FP=(function(){function n(){}return n.value=new n,n})(),OP=(function(){function n(){}return n.value=new n,n})(),kP=(function(){function n(){}return n.value=new n,n})(),zP=(function(){function n(){}return n.value=new n,n})(),BP=(function(){function n(){}return n.value=new n,n})(),HP=(function(){function n(){}return n.value=new n,n})(),VP=(function(){function n(){}return n.value=new n,n})(),GP=(function(){function n(){}return n.value=new n,n})(),WP=(function(){function n(){}return n.value=new n,n})(),$P=(function(){function n(){}return n.value=new n,n})(),XP=(function(){function n(){}return n.value=new n,n})(),jP=(function(){function n(){}return n.value=new n,n})(),qP=(function(){function n(){}return n.value=new n,n})(),YP=function(n){return n},KP={show:function(n){if(n instanceof UP)return"OPTIONS";if(n instanceof yE)return"GET";if(n instanceof NP)return"HEAD";if(n instanceof FP)return"POST";if(n instanceof OP)return"PUT";if(n instanceof kP)return"DELETE";if(n instanceof zP)return"TRACE";if(n instanceof BP)return"CONNECT";if(n instanceof HP)return"PROPFIND";if(n instanceof VP)return"PROPPATCH";if(n instanceof GP)return"MKCOL";if(n instanceof WP)return"COPY";if(n instanceof $P)return"MOVE";if(n instanceof XP)return"LOCK";if(n instanceof jP)return"UNLOCK";if(n instanceof qP)return"PATCH";throw new Error("Failed pattern match at Data.HTTP.Method (line 43, column 1 - line 59, column 23): "+[n.constructor.name])}},ZP=ou(Ma(KP))(YP),JP=(function(){var n=MC(IC);return function(e){return AC(n(e))}})(),QP=function(n){return n.value0};const eL=null;function tL(n){return n}var bc=Aa(eL)(tL),nL=function(n){return S0(function(e){return function(){var i=n(function(a){return e(ct.create(a))()},function(a){return e(mt.create(a))()});return function(a){return S0(function(s){return function(){return i(a,function(u){return s(ct.create(u))()},function(u){return s(mt.create(u))()}),sP}})}}})};function T0(n){return Object.prototype.toString.call(n).slice(8,-1)}var rL=Ma(uT),iL=Ma(zm),xE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),SE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),oL=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),aL=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),ra=lu,sL=lu,qp=function(n){if(n instanceof xE)return n.value0;if(n instanceof oL)return"Error at array index "+(iL(n.value0)+(": "+qp(n.value1)));if(n instanceof aL)return"Error at property "+(rL(n.value0)+(": "+qp(n.value1)));if(n instanceof SE)return"Type mismatch: expected "+(n.value0+(", found "+n.value1));throw new Error("Failed pattern match at Foreign (line 78, column 1 - line 78, column 45): "+[n.constructor.name])},EE=function(n){var e=su(Nf(n));return function(t){return e(JP(t))}},lL=function(n){var e=Rt(Bo(n)),t=EE(n);return function(i){return function(a){return T0(a)===i?e(sL(a)):t(new SE(i,T0(a)))}}},qh=Rt(Bo(zo)),uL=EE(zo),ia=lL(zo),b0=GA(jT(LC)(zo)),cL=Yx(uu(zo)),Cc=Ot(iu),fL=Rb($i)(Wp),dL=Ei(ga),hL=Um(rS),pL=Ot(nu),mL=NA(lE),vL=CT(aP),gL=Rt(fu),wE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ME=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),AE=(function(){function n(){}return n.value=new n,n})(),TE=(function(){function n(){}return n.value=new n,n})(),bE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_L=function(n){return function(e){var t=function(p){return p===""?qh(uC):ou(function(m){return uL(xE.create(m))})(qh)(AP(p))},i=(function(){if(e.responseFormat instanceof vE)return ia("ArrayBuffer");if(e.responseFormat instanceof gE)return ia("Blob");if(e.responseFormat instanceof _E)return function(p){return b0(ia("Document")(p))(b0(ia("XMLDocument")(p))(ia("HTMLDocument")(p)))};if(e.responseFormat instanceof Xf)return cL(function(p){return e.responseFormat.value0(t(p))})(ia("String"));if(e.responseFormat instanceof dv)return ia("String");if(e.responseFormat instanceof hv)return Ht(e.responseFormat.value0(qh(Wn)));throw new Error("Failed pattern match at Affjax (line 274, column 18 - line 283, column 57): "+[e.responseFormat.constructor.name])})(),a=function(p){if(p instanceof fP)return new mt(p.value0(ra));if(p instanceof dP)return new mt(ra(p.value0));if(p instanceof hP)return new mt(ra(p.value0));if(p instanceof pP)return new mt(ra(p.value0));if(p instanceof mP)return new mt(ra(p.value0));if(p instanceof hE)return Ts("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(Cc(ra)(IP(p.value0)));if(p instanceof pE)return new mt(ra(AS(p.value0)));throw new Error("Failed pattern match at Affjax (line 235, column 20 - line 250, column 69): "+[p.constructor.name])},s=function(p){return function(m){return p instanceof gt&&!fL(IA(dL)(M0)(p.value0))(m)?Hb(m)(p.value0):m}},c=function(p){return s(Cc(cv.create)(hL(vP)(p)))(s(Cc(uv.create)(yP(e.responseFormat)))(e.headers))},u=function(p){return{method:ZP(e.method),url:e.url,headers:pL(function(m){return{field:M0(m),value:gP(m)}})(c(e.content)),content:p,responseType:_P(e.responseFormat),username:bc(e.username),password:bc(e.password),withCredentials:e.withCredentials,timeout:tS(0)(Cc(function(m){return m})(e.timeout))}},d=function(p){return mL(vL(nL(uP(n,"AffjaxTimeoutErrorMessageIdent","AffjaxRequestFailedMessageIdent",wP.create,u(p)))))(function(m){if(m instanceof mt){var g=Km(i(m.value0.body));if(g instanceof ct)return new ct(new ME(QP(g.value0),m.value0));if(g instanceof mt)return new mt({headers:m.value0.headers,status:m.value0.status,statusText:m.value0.statusText,body:g.value0});throw new Error("Failed pattern match at Affjax (line 209, column 9 - line 211, column 52): "+[g.constructor.name])}if(m instanceof ct)return new ct((function(){var S=cS(m.value0),w=S==="AffjaxTimeoutErrorMessageIdent";if(w)return AE.value;var E=S==="AffjaxRequestFailedMessageIdent";return E?TE.value:new bE(m.value0)})());throw new Error("Failed pattern match at Affjax (line 207, column 144 - line 219, column 28): "+[m.constructor.name])})};if(e.content instanceof bt)return d(bc(bt.value));if(e.content instanceof gt){var h=a(e.content.value0);if(h instanceof mt)return d(bc(new gt(h.value0)));if(h instanceof ct)return gL(new ct(new wE(h.value0)));throw new Error("Failed pattern match at Affjax (line 199, column 7 - line 203, column 48): "+[h.constructor.name])}throw new Error("Failed pattern match at Affjax (line 195, column 3 - line 203, column 48): "+[e.content.constructor.name])}},CE=function(n){if(n instanceof wE)return"There was a problem with the request content: "+n.value0;if(n instanceof ME)return"There was a problem with the response body: "+qp(n.value0);if(n instanceof AE)return"There was a problem making the request: timeout";if(n instanceof TE)return"There was a problem making the request: request failed";if(n instanceof bE)return"There was a problem making the request: "+cS(n.value0);throw new Error("Failed pattern match at Affjax (line 113, column 14 - line 123, column 66): "+[n.constructor.name])},oa=(function(){return{method:new ct(yE.value),url:"/",headers:[],content:bt.value,username:bt.value,password:bt.value,withCredentials:!1,responseFormat:EP,timeout:bt.value}})(),yL=function(n){return function(e){return function(t){return _L(n)({method:oa.method,headers:oa.headers,content:oa.content,username:oa.username,password:oa.password,withCredentials:oa.withCredentials,timeout:oa.timeout,url:t,responseFormat:e})}}},xL=Ma(zm),SL={show:function(n){return"(StatusCode "+(xL(n)+")")}},EL={eq:function(n){return function(e){return n===e}}};const wL={newXHR:function(){return new XMLHttpRequest},fixupUrl:function(n){return n||"/"}};var RE=yL(wL),ML=vS(_S),AL={liftAff:wr(Mr),MonadEffect0:function(){return du}},PE=function(n){return n.liftAff},TL=function(n){var e=n.MonadEffect0(),t=jm(e);return{liftAff:(function(){var i=ML(e.Monad0()),a=PE(n);return function(s){return i(a(s))}})(),MonadEffect0:function(){return t}}};const bL=function(n){return function(e){return e.join(n)}};var CL=Hr(ru),RL={genericShowArgs:function(n){return[]}},PL=function(n){return n.genericShowArgs},LL=function(n){var e=PL(n);return function(t){var i=Br(t);return{"genericShow'":function(a){var s=i(Mt.value),c=e(a);return c.length===0?s:"("+(bL(" ")(CL([s])(c))+")")}}}},Yp=function(n){return n["genericShow'"]},li=function(n){var e=Yp(n);return function(t){var i=Yp(t);return{"genericShow'":function(a){if(a instanceof Yt)return e(a.value0);if(a instanceof Ne)return i(a.value0);throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): "+[a.constructor.name])}}}},DL=function(n){var e=Bm(n);return function(t){var i=Yp(t);return function(a){return i(e(a))}}},qr=LL(RL),LE=(function(){function n(){}return n.value=new n,n})(),DE=(function(){function n(){}return n.value=new n,n})(),IE=(function(){function n(){}return n.value=new n,n})(),UE=(function(){function n(){}return n.value=new n,n})(),NE=(function(){function n(){}return n.value=new n,n})(),Kp=(function(){function n(){}return n.value=new n,n})(),IL=(function(){function n(){}return n.value=new n,n})(),UL=(function(){function n(){}return n.value=new n,n})(),NL=(function(){function n(){}return n.value=new n,n})(),FL=(function(){function n(){}return n.value=new n,n})(),OL=(function(){function n(){}return n.value=new n,n})(),kL={from:function(n){if(n instanceof LE)return new Yt(sr.value);if(n instanceof DE)return new Ne(new Yt(sr.value));if(n instanceof IE)return new Ne(new Ne(new Yt(sr.value)));if(n instanceof UE)return new Ne(new Ne(new Ne(new Yt(sr.value))));if(n instanceof NE)return new Ne(new Ne(new Ne(new Ne(new Yt(sr.value)))));if(n instanceof Kp)return new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(sr.value))))));if(n instanceof IL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(sr.value)))))));if(n instanceof UL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(sr.value))))))));if(n instanceof NL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(sr.value)))))))));if(n instanceof FL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(sr.value))))))))));if(n instanceof OL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(sr.value))))))))));throw new Error("Failed pattern match at GCodeViewer.Error (line 30, column 1 - line 30, column 34): "+[n.constructor.name])}},zL={show:DL(kL)(li(qr({reflectSymbol:function(){return"Err1"}}))(li(qr({reflectSymbol:function(){return"Err2"}}))(li(qr({reflectSymbol:function(){return"Err3"}}))(li(qr({reflectSymbol:function(){return"Err4"}}))(li(qr({reflectSymbol:function(){return"Err5"}}))(li(qr({reflectSymbol:function(){return"Err6"}}))(li(qr({reflectSymbol:function(){return"XErr7"}}))(li(qr({reflectSymbol:function(){return"XErr8"}}))(li(qr({reflectSymbol:function(){return"XErr9"}}))(li(qr({reflectSymbol:function(){return"XErr10"}}))(qr({reflectSymbol:function(){return"ErrX"}}))))))))))))},BL=Ma(zL),zl=function(n){return"Error: "+(n.message+(" ("+(BL(n.code)+")")))},xs=function(n){return function(e){return{message:e,code:n}}},HL=function(n){var e=n.MonadThrow0(),t=su(e),i=Rt(e.Monad0().Applicative0());return function(a){return function(s){if(s instanceof ct)return t(a(s.value0));if(s instanceof mt)return i(s.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 43, column 28 - line 45, column 20): "+[s.constructor.name])}}},VL=function(n){var e=su(n.MonadThrow0());return function(t){var i=t.MonadEffect0().Monad0(),a=_n(i.Bind1()),s=PE(t),c=Rt(i.Applicative0());return function(u){return function(d){return a(s(d))(function(h){if(h instanceof ct)return e(u(h.value0));if(h instanceof mt)return c(h.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 38, column 3 - line 40, column 22): "+[h.constructor.name])})}}}},GL=Wf(MS(Ta)),WL=cu(),$L=qT(),XL=nE(),gs=function(n){return n},jL=function(n){return n},pv=function(){return function(n){var e=XL(n);return function(t){var i=Br(t);return function(a){return GL(WL)($L)(e(i(Mt.value))(a))}}}},FE=uu(hr),Zp=_n(FE),OE=qm(hr),kE=VL(OE)(TL(AL)),zE=Lf(Df)(FE),BE=Bo(hr),HE=Im(BE),VE=Zx(EL),GE=su(Nf(hr)),WE=Ma(SL),$E=Rt(BE),qL=HL(OE),YL=function(n){return Zp(kE((function(){var e=xs(UE.value);return function(t){return e(CE(t))}})())(RE(xP)(n)))(function(e){return zE(HE(VE(e.status)(200))(GE(xs(NE.value)(WE(e.status)))))(function(){return $E(e.body)})})},KL=pv()(pi(pi(pi(sv)()()({reflectSymbol:function(){return"pictures"}}))()()({reflectSymbol:function(){return"name"}}))()()({reflectSymbol:function(){return"gcode"}}))({reflectSymbol:function(){return"IndexFileItem"}})({name:ur,gcode:ur,pictures:Gf(ur)}),mv=Gf(KL),ZL=function(n){return Zp(kE((function(){var e=xs(LE.value);return function(t){return e(CE(t))}})())(RE(SP)(n.url)))(function(e){return zE(HE(VE(e.status)(200))(GE(xs(IE.value)(WE(e.status)))))(function(){return Zp(qL((function(){var t=xs(DE.value);return function(i){return t(SR(i))}})())(In(mv)(e.body)))(function(t){return $E(t)})})})},JL=function(n){return function(e){var t=Wf(e.Profunctor0()),i=RR(e);return function(a){return t(n)(function(s){return s.value1(s.value0)})(i(a))}}},QL=function(n){return function(e){return function(t){return JL(function(i){return new Wt(n(i),function(a){return e(i)(a)})})(t)}}},XE=function(n){var e=Ho(n)(),t=AR(n)()();return function(){return function(){return function(i){return function(a){return QL(e(i))(gi(t(i)))(a)}}}}},zs=function(n){var e=XE(n)()();return function(){return function(){return function(t){return e(Mt.value)(t)}}}},Or=ES(wS),Gn=_n(au),To=Rt(ba),e2=Ot(Ta),t2=Wf(MS(Ta)),C0=US($i),n2=wr(Mr),hf=Im(ba),Bl=Lf(Df)(au),R0=Zx(_f(fC)),hu=(function(){function n(){}return n.value=new n,n})(),fn=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),vv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),jf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),r2=function(n){return function(){return function(){return function(e){return function(t){return t}}}}},Jp=function(n){return n.gCasesEncode},Qp=function(n){return n.gCasesDecode},Yh=function(n){var e=Jp(n),t=Qp(n);return function(i){var a=Jp(i),s=Qp(i);return function(){return function(){return function(){return function(){return function(c){var u=r2()()(),d=Ho(c)(),h=av(c)()(),p=TR(c)()();return{gCasesEncode:function(m){return function(g){var S=u(Mt.value)(g),w=d(Mt.value)(g),E=h(Mt.value)(w)({});return function(y){if(y instanceof Yt)return e(m)(E)(y.value0);if(y instanceof Ne)return a(m)(S)(y.value0);throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 244, column 7 - line 246, column 47): "+[y.constructor.name])}}},gCasesDecode:function(m){return function(g){return function(S){var w=p(Mt.value)(g),E=d(Mt.value)(g),y=h(Mt.value)(E)({}),_=function(R){return s(m)(w)(S)},b=function(R){return t(m)(y)(S)},M=b();if(M instanceof ct&&M.value0 instanceof hu)return e2(Ne.create)(_());if(M instanceof ct&&M.value0 instanceof fn)return new ct(new fn(M.value0.value0));if(M instanceof mt)return new mt(new Yt(M.value0));throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 257, column 5 - line 260, column 34): "+[M.constructor.name])}}}}}}}}}}},i2=function(n){return function(e){return new ov(n,(function(){if(e instanceof hu)return new _i("No case matched");if(e instanceof fn)return e.value0;throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 147, column 5 - line 149, column 23): "+[e.constructor.name])})())}},o2=function(n){var e=Jp(n),t=Qp(n);return function(i){var a=Bm(i),s=eS(i);return function(c){return function(u){return function(d){var h=e(c)(d),p=(function(){var m=Or(i2(u)),g=t(c)(d);return function(S){return m(g(S))}})();return t2(a)(s)(Of(p)(h))}}}}},jE=function(n){return function(e){return function(t){if(n instanceof vv){var i=(function(){return t.length===0?Jt(Ro)([]):t.length===1&&n.value0.unwrapSingleArguments?t[0]:Jt(Ro)(t)})(),a=n.value0.mapTag(e);return Jt(Io)(C0([new Wt(a,i)]))}if(n instanceof jf){var s=(function(){return t.length===0&&n.value0.omitEmptyArguments?bt.value:t.length===1&&n.value0.unwrapSingleArguments?new gt(new Wt(n.value0.valuesKey,t[0])):new gt(new Wt(n.value0.valuesKey,Jt(Ro)(t)))})(),a=n.value0.mapTag(e),c=new gt(new Wt(n.value0.tagKey,Jt(ur)(a)));return Jt(Io)(C0(Zb([c,s])))}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 403, column 3 - line 428, column 33): "+[n.constructor.name])}}},a2=(function(){return new jf({tagKey:"tag",valuesKey:"values",unwrapSingleArguments:!1,omitEmptyArguments:!1,mapTag:n2})})(),s2=function(n){return function(e){return o2(e)(n)(a2)}},qE=function(n){return function(e){return function(t){return Gn(Or(fn.create)(Ts(new _i("Expecting a tag property `"+(n+"`")))(bs(n)(e))))(function(i){return Gn(Or(fn.create)(In(ur)(i)))(function(a){return hf(a!==t)(new ct(hu.value))})})}}},l2=function(n){return function(e){return function(t){if(n instanceof vv){var i=n.value0.mapTag(t);return Gn(Or(fn.create)(In(Io)(e)))(function(a){return Gn(Ts(hu.value)(bs(i)(a)))(function(s){return Gn(Or(fn.create)(In(Ro)(s)))(function(c){return Bl(hf(R0(c)([]))(new ct(new fn(new _i("Expecting an empty array")))))(function(){return To(Wn)})})})})}if(n instanceof jf){var i=n.value0.mapTag(t);return Gn(Or(fn.create)(In(Io)(e)))(function(s){return Bl(qE(n.value0.tagKey)(s)(i))(function(){return hf(!n.value0.omitEmptyArguments)(Gn(Ts(new fn(new _i("Expecting a value property `"+(n.value0.valuesKey+"`"))))(bs(n.value0.valuesKey)(s)))(function(c){return Gn(Or(fn.create)(In(Ro)(c)))(function(u){return Bl(hf(R0(u)([]))(new ct(new fn(new _i("Expecting an empty array")))))(function(){return To(Wn)})})}))})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 320, column 3 - line 346, column 18): "+[n.constructor.name])}}},u2=function(){return function(n){var e=Br(n);return{gCasesEncode:function(t){return function(i){return function(a){var s=e(Mt.value);return jE(t)(s)([])}}},gCasesDecode:function(t){return function(i){return function(a){var s=e(Mt.value);return Bl(l2(t)(a)(s))(function(){return To(sr.value)})}}}}}},c2=function(n){return function(e){return function(t){if(n instanceof vv){var i=n.value0.mapTag(t);return Gn(Or(fn.create)(In(Io)(e)))(function(a){return Gn(Ts(hu.value)(bs(i)(a)))(function(s){return n.value0.unwrapSingleArguments?To(s):Gn(Or(fn.create)(In(Ro)(s)))(function(c){return c.length===1?To(c[0]):new ct(new fn(new _i("Expecting exactly one element")))})})})}if(n instanceof jf){var i=n.value0.mapTag(t);return Gn(Or(fn.create)(In(Io)(e)))(function(s){return Bl(qE(n.value0.tagKey)(s)(i))(function(){return Gn(Ts(new fn(new _i("Expecting a value property `"+(n.value0.valuesKey+"`"))))(bs(n.value0.valuesKey)(s)))(function(c){return n.value0.unwrapSingleArguments?To(c):Gn(Or(fn.create)(In(Ro)(c)))(function(u){return u.length===1?To(u[0]):new ct(new fn(new _i("Expecting exactly one element")))})})})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 349, column 49 - line 378, column 71): "+[n.constructor.name])}}},f2=function(){return function(n){var e=Br(n),t=Ho(n)();return{gCasesEncode:function(i){return function(a){return function(s){var c=e(Mt.value),u=t(Mt.value)(a);return jE(i)(c)([Jt(u)(s)])}}},gCasesDecode:function(i){return function(a){return function(s){var c=e(Mt.value);return Gn(c2(i)(s)(c))(function(u){var d=t(Mt.value)(a);return Gn(Or(fn.create)(In(d)(u)))(function(h){return To(h)})})}}}}}},d2=nu,h2=$i;function p2(n){var e={};for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}function m2(n){return function(e){return function(t){return t[n]=e(t[n]),t}}}var v2=$x,g2=function(){return function(){return function(n){var e=Br(n);return function(t){return function(i){return function(a){return m2(e(t))(i)(a)}}}}}},_2=Mr,y2=function(n){return function(e){return n(p2(e))}},x2=wr(_2),S2=Xx(v2),E2=g2()(),w2=function(n){return n},M2=function(n){return n.mappingWithIndex},A2=function(n){return n.mapping},fa={mapRecordWithIndexBuilder:function(n){return function(e){return x2}}},YE=function(n){return n.mapRecordWithIndexBuilder},pu=function(n){var e=E2(n);return function(t){var i=M2(t);return function(a){var s=YE(a);return function(){return function(){return{mapRecordWithIndexBuilder:function(c){return function(u){return S2(e(Mt.value)(i(u)(Mt.value)))(s(Mt.value)(u))}}}}}}}},T2=function(){return function(n){return{hmap:(function(){var e=YE(n)(Mt.value);return function(t){return y2(e(w2(t)))}})()}}},em=function(n){return n.hmap},gv=function(n){var e=A2(n);return{mappingWithIndex:function(t){return function(i){return e(t)}}}},KE=Ot(qx),b2=MR(),C2=(function(){function n(){}return n.value=new n,n})(),R2=(function(){function n(){}return n.value=new n,n})(),P2=(function(){function n(){}return n.value=new n,n})(),L2=function(){return function(n){var e=Ho(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Mt.value)(t),s=a(i);return s}}}}},D2=function(){return function(n){return{mkConstructorsRep:(function(){var e=function(i){return cT(fT(i))},t=av(n)()()(Mt.value)(e)({});return t})()}}},tm=function(n){return n.mkMatcherRep},I2=function(n){return n.mkMatcher1},nm=function(n){return n.mkConstructorsRep},U2=function(n){return n.mkConstructors},N2=function(){return function(n){var e=Ho(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Mt.value)(t),s=a(Wn);return s}}}}},F2=function(n){var e=Bm(n);return function(t){var i=tm(t);return{mkMatcher1:function(a,s){return i(s)(e(a))}}}},O2=function(n){var e=eS(n);return{mapping:function(t){return function(i){return function(a){return e(i(a))}}}}},k2={mapping:function(n){return function(e){return KE(Ne.create)(e)}}},z2={mapping:function(n){return function(e){return KE(Yt.create)(e)}}},Rc=function(n){var e=nm(n);return function(t){var i=nm(t);return function(a){var s=em(a);return function(c){var u=em(c);return function(){return{mkConstructorsRep:(function(){var d=u(C2.value)(i),h=s(R2.value)(e),p=b2(h)(d);return p})()}}}}}},B2=function(n){return function(e){var t=nm(e);return function(i){return{mkConstructors:(function(){var a=em(i)(P2.value)(t);return a})()}}}},H2=function(){return lu},V2=H2(),G2=function(){return lu},W2=G2(),Kh=function(n){var e=tm(n);return function(t){var i=tm(t);return function(){return{mkMatcherRep:function(a){return function(s){var c=(function(){if(s instanceof Yt)return e(W2(a))(s.value0);if(s instanceof Ne)return i(V2(a))(s.value0);throw new Error("Failed pattern match at Stadium.TL (line 159, column 11 - line 161, column 76): "+[s.constructor.name])})();return c}}}}}},P0=N2(),rm={reflectSymbol:function(){return"NotAsked"}},im={reflectSymbol:function(){return"Loading"}},L0=L2(),om={reflectSymbol:function(){return"Loaded"}},ZE={reflectSymbol:function(){return"Error"}},D0=u2(),I0=f2(),Cs=(function(){function n(){}return n.value=new n,n})(),Uo=(function(){function n(){}return n.value=new n,n})(),Rs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ps=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),JE={to:function(n){if(n instanceof Yt)return Cs.value;if(n instanceof Ne&&n.value0 instanceof Yt)return Uo.value;if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Yt)return new Rs(n.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne)return new Ps(n.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])},from:function(n){if(n instanceof Cs)return new Yt(sr.value);if(n instanceof Uo)return new Ne(new Yt(sr.value));if(n instanceof Rs)return new Ne(new Ne(new Yt(n.value0)));if(n instanceof Ps)return new Ne(new Ne(new Ne(n.value0)));throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])}},$2=s2(JE)(Yh(D0(rm))(Yh(D0(im))(Yh(I0(om))(I0(ZE))()()()()(om))()()()()(im))()()()()(rm)),QE=function(n){var e=Ei(n);return{eq:function(t){return function(i){return t instanceof Cs&&i instanceof Cs||t instanceof Uo&&i instanceof Uo?!0:t instanceof Rs&&i instanceof Rs?e(t.value0)(i.value0):t instanceof Ps&&i instanceof Ps?t.value0===i.value0:!1}}}},ew=I2(F2(JE)(Kh(P0(rm))(Kh(P0(im))(Kh(L0(om))(L0(ZE))())())())),qf=function(n){return $2("RemoteData")({NotAsked:Wn,Loading:Wn,Loaded:n,Error:ur})};const X2=n=>()=>{console.log(...n)};var j2=$f(GT),q2=Rt(Vm),Zh=Hr(ru),_v=function(n){var e=XE(n)()();return function(){return function(){return function(t){return e(Mt.value)(t)}}}},Y2=_v({reflectSymbol:function(){return"history"}})()()(Xi),K2=_v({reflectSymbol:function(){return"historyIndex"}})()()(Xi),Z2=_v({reflectSymbol:function(){return"pubState"}})()()(Xi),tw=function(n){var e=function(i){var a=function(s){return function(c){return i.updateState(function(u){var d=n.updatePubState(c)(u.pubState);if(d instanceof ct)return function(){return j2(d.value0)(),u};if(d instanceof mt){var h=n.encodeMsg(c);return function(){return X2(Zh([Jt(ur)("%c"+h.tag),Jt(ur)("color: white; background: #cc8a21; padding: 2px 4px;")])(Zh(Aa([])(function(m){return[Jt(ur)("@"+m)]})(s))([h.args,Jt(ur)(`
newState`),n.encodeJsonPubState(d.value0)])))(),iE(Y2)(function(m){return Zh(m)([{msg:c,pubState:d.value0}])})(Mo(K2)(u.historyIndex+1)(Mo(Z2)(d.value0)(u)))}}throw new Error("Failed pattern match at Stadium.Core (line 103, column 31 - line 126, column 16): "+[d.constructor.name])})}};return{emitMsg:a(bt.value),emitMsgCtx:function(s){return a(new gt(s))},readPubState:function(){var c=i.readState();return c.pubState},readPrivState:function(){var c=i.readState();return c.privState},updatePrivState:function(s){return i.updateState(function(c){return q2({pubState:c.pubState,history:c.history,historyIndex:c.historyIndex,privState:s(c.privState)})})}}},t={history:[],historyIndex:0,pubState:n.initPubState,privState:n.initPrivState};return{dispatchers:function(i){return n.dispatchers(e(i))},initState:t,timeTravel:function(i){return Wn}}};const nw=n=>()=>{const[e,t]=ke.useState({state:n.initState}),i={updateState:c=>()=>t(u=>(u.state=c(u.state)(),{...u})),readState:()=>e.state},a=n.dispatchers(i);return{state:e.state.pubState,dispatch:a}},J2=(n,e,t)=>{const i=ke.useRef(0),a=ke.useRef(t);return a.current=t,i.current=e(a.current,t)?i.current:i.current+1,ke.useEffect(()=>n(),[i.current])};var Ml=Rt(Bo(zo)),Al=rE(),rw={reflectSymbol:function(){return"startLayer"}},Q2=zs(rw)()()(Xi),iw={reflectSymbol:function(){return"endLayer"}},eD=zs(iw)()()(Xi),ow={reflectSymbol:function(){return"gcodeLines"}},tD=zs(ow)()()(Xi),aw={reflectSymbol:function(){return"minLayer"}},nD=zs(aw)()()(Xi),sw={reflectSymbol:function(){return"maxLayer"}},rD=zs(sw)()()(Xi),iD={reflectSymbol:function(){return"PubState"}},Tl=D2(),lw={reflectSymbol:function(){return"MsgSetStartLayer"}},uw={reflectSymbol:function(){return"MsgSetEndLayer"}},cw={reflectSymbol:function(){return"MsgSetGcodeLines"}},fw={reflectSymbol:function(){return"MsgSetMinLayer"}},dw={reflectSymbol:function(){return"MsgSetMaxLayer"}},Ui=T2(),am=pu(fw),Pc=gv(z2),hw=pu(dw),Yf=gv(k2),pw=hw(Yf),sm=pu(cw),mw=pw(am(Yf)(fa)()())()(),Jh=pu(uw),U0=sm(Yf)(mw)()(),N0=pu(lw),oD=_n(lv),aD=$f(du),sD=Rt(fu),vw=jm(du),F0=Uf(vw),lD=Gm(qm(hr)),gw=uu(hr),O0=_n(gw),Qh=Lf(Df)(gw),_w=Bo(hr),uD=Im(_w),cD=Ei(QE(_f(ga))),fD=su(Nf(hr)),dD=$f(vw),hD=Rt(_w),Kf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Zf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ss=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),yv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),xv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),pD={to:function(n){if(n instanceof Yt)return new Kf(n.value0);if(n instanceof Ne&&n.value0 instanceof Yt)return new Zf(n.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Yt)return new Ss(n.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne&&n.value0.value0.value0 instanceof Yt)return new yv(n.value0.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne&&n.value0.value0.value0 instanceof Ne)return new xv(n.value0.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 62, column 1 - line 62, column 30): "+[n.constructor.name])}},bl=gv(O2(pD)),mD=function(n){return function(e){if(n instanceof Kf)return Ml(Mo((function(){var t=Al(gs)(ha);return function(i){return t(Q2(i))}})())(n.value0)(e));if(n instanceof Zf)return Ml(Mo((function(){var t=Al(gs)(ha);return function(i){return t(eD(i))}})())(n.value0)(e));if(n instanceof Ss)return Ml(Mo((function(){var t=Al(gs)(ha);return function(i){return t(tD(i))}})())(n.value0)(e));if(n instanceof yv)return Ml(Mo((function(){var t=Al(gs)(ha);return function(i){return t(nD(i))}})())(n.value0)(e));if(n instanceof xv)return Ml(Mo((function(){var t=Al(gs)(ha);return function(i){return t(rD(i))}})())(n.value0)(e));throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 65, column 31 - line 84, column 11): "+[n.constructor.name])}},vD=U2(B2()(Rc(Tl(lw))(Rc(Tl(uw))(Rc(Tl(cw))(Rc(Tl(fw))(Tl(dw))(Ui(am(Pc)(fa)()()))(Ui(pw(fa)()()))())(Ui(sm(Pc)(fa)()()))(Ui(mw))())(Ui(Jh(Pc)(fa)()()))(Ui(U0))())(Ui(N0(Pc)(fa)()()))(Ui(Jh(Yf)(U0)()()))())(Ui(Jh(bl)(sm(bl)(hw(bl)(am(bl)(N0(bl)(fa)()())()())()())()())()()))),gD=(function(){return{gcodeLines:Cs.value,startLayer:0,endLayer:100,minLayer:0,maxLayer:100}})(),_D=function(n){if(n instanceof Kf)return{tag:"MsgSetStartLayer",args:Jt(Ao)(n.value0)};if(n instanceof Zf)return{tag:"MsgSetEndLayer",args:Jt(Ao)(n.value0)};if(n instanceof Ss)return{tag:"MsgSetGcodeLines",args:Jt(qf(Gf(ur)))(n.value0)};if(n instanceof yv)return{tag:"MsgSetMinLayer",args:Jt(Ao)(n.value0)};if(n instanceof xv)return{tag:"MsgSetMaxLayer",args:Jt(Ao)(n.value0)};throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 87, column 13 - line 107, column 6): "+[n.constructor.name])},yD=function(n){var e=function(a){return function(s){return uE(oD($m(a(s)))(function(c){if(c instanceof ct)return aD(zl(c.value0));if(c instanceof mt)return sD(Wn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 156, column 5 - line 158, column 27): "+[c.constructor.name])}))()}},t=function(a){var s=(function(){var c=n.emitMsgCtx("loadGcodeLines");return function(u){return F0(c(u))}})();return lD(O0(F0(n.readPubState))(function(c){return Qh(uD(cD(c.gcodeLines)(Uo.value))(fD(xs(Kp.value)("Gcode lines are already loading"))))(function(){return Qh(s(new Ss(Uo.value)))(function(){return O0(YL(a.url))(function(u){var d=WS(`
`)(u);return s(new Ss(new Rs(d)))})})})}))(function(c){return Qh(dD(zl(c)))(function(){return c.code instanceof Kp?hD(Wn):s(new Ss(new Ps(zl(c))))})})},i=function(a){return function(s){return n.emitMsg(a(s))()}};return{emitSetStartLayer:i(Kf.create),emitSetEndLayer:i(Zf.create),msg:fE(n.emitMsg),runLoadGcodeLines:e(t)}},xD=pv()(pi(pi(pi(pi(pi(sv)()()(rw))()()(aw))()()(sw))()()(ow))()()(iw))(iD)({gcodeLines:qf(Gf(ur)),startLayer:Ao,endLayer:Ao,minLayer:Ao,maxLayer:Ao}),SD=tw({updatePubState:function(n){return function(e){return Km(mD(n)(e))}},dispatchers:yD,initPubState:gD,initPrivState:{},printError:wr(Mr),encodeJsonPubState:Jt(xD),encodeMsg:_D}),ED=nw(SD);const wD=()=>window.location.search;var MD=cu(),AD=function(n){return MD(GR(n))},yw=function(n){return n.bitraverse},TD=function(n){var e=yw(n);return function(t){var i=e(t),a=Rt(t);return function(s){return i(s)(a)}}},xw={bitraverse:function(n){var e=n.Apply0(),t=Os(e),i=Ot(e.Functor0());return function(a){return function(s){return function(c){return t(i(Wt.create)(a(c.value0)))(s(c.value1))}}}}},bD=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},k0=yw(xw)(ba),z0=ev(Bf)(ba),CD=Cb($i)(ga),RD=Ot(d2),PD=Ot(qx),LD=Jm(h2),DD=zA(au),ID=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),UD=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ND=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Sw=(function(){function n(){}return n.value=new n,n})(),kr=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),No=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),lm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ls=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),um=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),FD=(function(){var n=function(m){return{segments:m.value0.value0,params:m.value0.value1,hash:m.value1}},e=function(m){return function(g){return g===""?[]:WS(m)(g)}},t=function(m){return function(g){return function(S){var w=JC(g)(S);if(w instanceof gt)return new Wt(GS(w.value0)(S),jp(w.value0+nv(g)|0)(S));if(w instanceof bt)return m(S);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 191, column 5 - line 193, column 23): "+[w.constructor.name])}}},i=function(m){var g=RP(m);if(g instanceof bt)return new ct(new ND(m));if(g instanceof gt)return new mt(g.value0);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 195, column 29 - line 197, column 22): "+[g.constructor.name])},a=(function(){var m=k0(i)(i),g=t(gi(Wt.create)(""))("=");return function(S){return m(g(S))}})(),s=(function(){var m=z0(a),g=e("&");return function(S){return m(g(S))}})(),c=(function(){var m=e("/");return function(g){return(function(S){return S.length===2&&S[0]===""&&S[1]===""?new mt([""]):z0(i)(S)})(m(g))}})(),u=(function(){var m=k0(c)(s),g=t(gi(Wt.create)(""))("?");return function(S){return m(g(S))}})(),d=Ot(Ta)(n),h=TD(xw)(ba)(u),p=t(gi(Wt.create)(""))("#");return function(m){return d(h(p(m)))}})(),OD=function(n){return new Ls(function(e){var t=CD(n)(e.params);return t instanceof gt?new No(e,t.value0):new kr(new UD(n))})},kD={map:function(n){return function(e){if(e instanceof kr)return new kr(e.value0);if(e instanceof No)return new No(e.value0,n(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},Ew=Ot(kD),cm={map:function(n){return function(e){if(e instanceof lm)return new lm(RD(Ot(cm)(n))(e.value0));if(e instanceof Ls)return new Ls(PD(Ew(n))(e.value0));if(e instanceof um)return new um(e.value0,Ot(cm)(n)(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},zD=function(n){return function(e){var t=$b(e.segments);return t instanceof gt&&n===t.value0?new No({params:e.params,hash:e.hash,segments:jb(1)(e.segments)},Wn):t instanceof gt?new kr(new ID(n,t.value0)):new kr(Sw.value)}},ww=bD("runRouteParser","Routing.Duplex.Parser",function(){var n=function(t){return function(i){return function(a){return i instanceof kr?ww(161)(t)(a):i}}},e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof lm)return s=!0,LD(n(d))(new kr(Sw.value))(h.value0);if(h instanceof Ls)return s=!0,h.value0(d);if(h instanceof um){var p=zD(h.value0)(d);if(p instanceof kr)return s=!0,new kr(p.value0);if(p instanceof No){a=p.value0,i=h.value1;return}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 157, column 7 - line 159, column 40): "+[p.constructor.name])}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 153, column 14 - line 159, column 40): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}),fm=ww(150),BD=function(n){return DD(FD)((function(){var e=gi(fm)(n);return function(t){return(function(i){if(i instanceof kr)return new ct(i.value0);if(i instanceof No)return new mt(i.value1);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 200, column 49 - line 202, column 29): "+[i.constructor.name])})(e(t))}})())},HD={apply:function(n){return function(e){return new Ls(function(t){var i=fm(t)(n);if(i instanceof kr)return new kr(i.value0);if(i instanceof No)return Ew(i.value1)(fm(i.value0)(e));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 81, column 5 - line 83, column 56): "+[i.constructor.name])})}}},VD={pure:(function(){var n=gi(No.create);return function(e){return Ls.create(n(e))}})()},Mw={append:function(n){return function(e){return function(t){return e(n(t))}}}},GD=function(n){return function(e){return function(t){return{segments:t.segments,hash:t.hash,params:qb(new Wt(n,e))(t.params)}}}},WD={mempty:wr(Mr),Semigroup0:function(){return Mw}},$D=Hr(Mw),XD=Rt(VD),Aw=wr(Mr),jD=Os(HD),qD=Ot(cm),Sv=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),YD=Aw,KD=(function(){return new Sv(ks(MT(WD)),XD({}))})(),ZD=function(n){var e=Ho(n)(),t=av(n)()();return function(){return function(){return function(){return function(i){return function(a){return function(s){return new Sv(function(c){return $D(s.value0(c))(a.value0(e(i)(c)))},jD(qD(gi(t(i)))(s.value1))(a.value1))}}}}}}},JD=function(n){return BD(n.value1)},QD=function(n){return n.params},e3=function(n){return new Sv(GD(n),OD(n))},t3={buildParams:function(n){return function(e){return Aw}}},Tw=function(n){return n.buildParams},n3=function(n){var e=ZD(n)()()(),t=Ho(n)(),i=Br(n);return function(){return function(){return function(){return function(){return function(a){var s=Tw(a);return{buildParams:function(c){return function(u){return function(d){return s(Mt.value)(u)(e(Mt.value)(t(Mt.value)(u)(e3(i(Mt.value))))(d))}}}}}}}}}},r3=function(){return function(n){var e=Tw(n);return{params:function(t){return e(Mt.value)(t)(KD)}}}},i3=Rt(Bo(zo)),o3=rE(),bw={reflectSymbol:function(){return"index"}},a3=zs(bw)()()(Xi),s3=_n(lv),l3=$f(du),u3=Rt(fu),Cw=Lf(Df),Rw=aE(ru)(dS),c3=Cw(Rw),f3=VT(jR(aS)(zo)),ep=Rt(sE(aS)(hS)),d3=_n(Rw),Ev={reflectSymbol:function(){return"url"}},h3=r3()(n3(Ev)()()()()(t3)),Pw=pi(sv)()(),Lw={reflectSymbol:function(){return"content"}},Dw=nE()(pi(Pw(Ev))()()(Lw)),Iw=uu(hr),B0=_n(Iw),Lc=Uf(jm(du)),H0=tT(),V0=df(eT)(),p3={reflectSymbol:function(){return"pictures"}},m3={reflectSymbol:function(){return"name"}},v3={reflectSymbol:function(){return"gcode"}},g3=Ei(QE(H0(df(V0(Ev)(ga))()(Lw)(_f(jL(H0(df(df(V0(p3)(_f(ga)))()(m3)(ga))()(v3)(ga)))))))),_3=Rt(Bo(hr)),y3=Gm(qm(hr)),x3=Cw(Iw),S3={reflectSymbol:function(){return"PubState"}},tp=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),E3=function(n){return function(e){return i3(Mo((function(){var t=o3(gs)(ha);return function(i){return t(a3(i))}})())(n.value0)(e))}},w3=function(n){return function(e){return uE(s3($m(n(e)))(function(t){if(t instanceof ct)return l3(zl(t.value0));if(t instanceof mt)return u3(Wn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 117, column 3 - line 119, column 25): "+[t.constructor.name])}))()}},M3=function(n){var e=uR("/")(n);if(e instanceof gt)return dR(e.value0)(n);if(e instanceof bt)return"";throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 61, column 3 - line 63, column 18): "+[e.constructor.name])},A3=function(n){var e=function(t){var i=QD(t);return function(a){return function(s){return function(c){var u=JD(i(s))(c);if(u instanceof ct)return c3(f3([u.value0]))(function(){return ep(a)});if(u instanceof mt)return ep(u.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 178, column 21 - line 182, column 22): "+[u.constructor.name])}}}};return AD(d3(e(h3)({url:"index.json"})({url:YD})(n))(function(t){return ep({url:t.url})}))},T3=function(n){return M3(n.absUrl)+("/"+n.relUrl)},b3=(function(){return{index:Cs.value}})(),C3=function(){var e=wD(),t=A3(e);return t.value0},R3=function(n){return{tag:"MsgSetIndex",args:Jt(qf(Dw("")({url:ur,content:mv})))(n.value0)}},P3=function(n){var e=function(t){return B0(Lc(n.readPubState))(function(i){var a=g3(i.index)(Uo.value);return a?_3(Wn):y3(x3(Lc(n.emitMsg(new tp(Uo.value))))(function(){return B0(ZL({url:t.url}))(function(s){return Lc(n.emitMsg(new tp(new Rs({url:t.url,content:s}))))})}))(function(s){return Lc(n.emitMsg(new tp(new Ps(zl(s)))))})})};return{msg:fE(n.emitMsg),runFetchIndex:w3(e)}},L3=pv()(Pw(bw))(S3)({index:qf(Dw("")({url:ur,content:mv}))}),D3=tw({updatePubState:function(n){return function(e){return Km(E3(n)(e))}},dispatchers:P3,initPubState:b3,initPrivState:{},printError:wr(Mr),encodeJsonPubState:Jt(L3),encodeMsg:R3}),I3=nw(D3);const U3="0.1.0",N3="0.0.16",F3="_root_6ggp7_1",O3="_version_6ggp7_5",Dc=({children:n,viewErrors:e,viewInfo:t})=>Qe.jsxs("div",{className:F3,children:[Qe.jsx("div",{children:n}),Qe.jsx("div",{children:e}),Qe.jsx("div",{children:t}),Qe.jsxs("div",{className:O3,children:[U3," - ",N3]})]}),k3="_root_xmkgg_1",z3={root:k3},B3=({items:n})=>Qe.jsx("div",{className:z3.root,children:n.map(e=>e)}),H3="_root_1st4r_1",V3="_slider_1st4r_13",G3="_label_1st4r_30",W3=({viewPictures:n,viewGcode:e,viewSlider:t,item:i,children:a})=>Qe.jsxs("div",{className:H3,children:[a,Qe.jsx("div",{className:G3,children:i.name}),n,e,Qe.jsx("div",{className:V3,children:t})]}),$3="_root_1b3ad_1",X3=({pictures:n})=>Qe.jsx("div",{className:$3});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="159",Ja={ROTATE:0,DOLLY:1,PAN:2},Qa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},j3=0,G0=1,q3=2,Uw=1,Y3=2,Bi=3,Fo=0,cr=1,Hi=2,Po=0,Es=1,W0=2,$0=3,X0=4,K3=5,pa=100,Z3=101,J3=102,j0=103,q0=104,Q3=200,eI=201,tI=202,nI=203,dm=204,hm=205,rI=206,iI=207,oI=208,aI=209,sI=210,lI=211,uI=212,cI=213,fI=214,dI=0,hI=1,pI=2,Sf=3,mI=4,vI=5,gI=6,_I=7,wv=0,yI=1,xI=2,Lo=0,SI=1,EI=2,wI=3,MI=4,AI=5,Nw=300,Ds=301,Is=302,pm=303,mm=304,Qf=306,vm=1e3,ti=1001,gm=1002,Rn=1003,Y0=1004,np=1005,Ir=1006,TI=1007,ql=1008,Do=1009,bI=1010,CI=1011,Mv=1012,Fw=1013,bo=1014,Vi=1015,Yl=1016,Ow=1017,kw=1018,ya=1020,RI=1021,Ur=1023,PI=1024,LI=1025,xa=1026,Us=1027,DI=1028,zw=1029,II=1030,Bw=1031,Hw=1033,rp=33776,ip=33777,op=33778,ap=33779,K0=35840,Z0=35841,J0=35842,Q0=35843,Vw=36196,ey=37492,ty=37496,ny=37808,ry=37809,iy=37810,oy=37811,ay=37812,sy=37813,ly=37814,uy=37815,cy=37816,fy=37817,dy=37818,hy=37819,py=37820,my=37821,sp=36492,vy=36494,gy=36495,UI=36283,_y=36284,yy=36285,xy=36286,Gw=3e3,Sa=3001,NI=3200,FI=3201,Ww=0,OI=1,Nr="",Pn="srgb",Wi="srgb-linear",Av="display-p3",ed="display-p3-linear",Ef="linear",qt="srgb",wf="rec709",Mf="p3",es=7680,Sy=519,kI=512,zI=513,BI=514,$w=515,HI=516,VI=517,GI=518,WI=519,_m=35044,Ey="300 es",ym=1035,vi=2e3,Kl=2001;class Ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,c=a.length;s<c;s++)a[s].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wy=1234567;const Hl=Math.PI/180,Zl=180/Math.PI;function Gi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function Dn(n,e,t){return Math.max(e,Math.min(t,n))}function Tv(n,e){return(n%e+e)%e}function $I(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function XI(n,e,t){return n!==e?(t-n)/(e-n):0}function Vl(n,e,t){return(1-t)*n+t*e}function jI(n,e,t,i){return Vl(n,e,1-Math.exp(-t*i))}function qI(n,e=1){return e-Math.abs(Tv(n,e*2)-e)}function YI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function KI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ZI(n,e){return n+Math.floor(Math.random()*(e-n+1))}function JI(n,e){return n+Math.random()*(e-n)}function QI(n){return n*(.5-Math.random())}function eU(n){n!==void 0&&(wy=n);let e=wy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tU(n){return n*Hl}function nU(n){return n*Zl}function xm(n){return(n&n-1)===0&&n!==0}function rU(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iU(n,e,t,i,a){const s=Math.cos,c=Math.sin,u=s(t/2),d=c(t/2),h=s((e+i)/2),p=c((e+i)/2),m=s((e-i)/2),g=c((e-i)/2),S=s((i-e)/2),w=c((i-e)/2);switch(a){case"XYX":n.set(u*p,d*m,d*g,u*h);break;case"YZY":n.set(d*g,u*p,d*m,u*h);break;case"ZXZ":n.set(d*m,d*g,u*p,u*h);break;case"XZX":n.set(u*p,d*w,d*S,u*h);break;case"YXY":n.set(d*S,u*p,d*w,u*h);break;case"ZYZ":n.set(d*w,d*S,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xw={DEG2RAD:Hl,RAD2DEG:Zl,generateUUID:Gi,clamp:Dn,euclideanModulo:Tv,mapLinear:$I,inverseLerp:XI,lerp:Vl,damp:jI,pingpong:qI,smoothstep:YI,smootherstep:KI,randInt:ZI,randFloat:JI,randFloatSpread:QI,seededRandom:eU,degToRad:tU,radToDeg:nU,isPowerOfTwo:xm,ceilPowerOfTwo:rU,floorPowerOfTwo:Af,setQuaternionFromProperEuler:iU,normalize:kt,denormalize:mi};class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*i-c*a+e.x,this.y=s*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,i,a,s,c,u,d,h){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h)}set(e,t,i,a,s,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=s,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],m=i[7],g=i[2],S=i[5],w=i[8],E=a[0],y=a[3],_=a[6],b=a[1],M=a[4],R=a[7],U=a[2],N=a[5],I=a[8];return s[0]=c*E+u*b+d*U,s[3]=c*y+u*M+d*N,s[6]=c*_+u*R+d*I,s[1]=h*E+p*b+m*U,s[4]=h*y+p*M+m*N,s[7]=h*_+p*R+m*I,s[2]=g*E+S*b+w*U,s[5]=g*y+S*M+w*N,s[8]=g*_+S*R+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*s*p+i*u*d+a*s*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=p*c-u*h,g=u*d-p*s,S=h*s-c*d,w=t*m+i*g+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=m*E,e[1]=(a*h-p*i)*E,e[2]=(u*i-a*c)*E,e[3]=g*E,e[4]=(p*t-a*d)*E,e[5]=(a*s-u*t)*E,e[6]=S*E,e[7]=(i*d-h*t)*E,e[8]=(c*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,c,u){const d=Math.cos(s),h=Math.sin(s);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(lp.makeScale(e,t)),this}rotate(e){return this.premultiply(lp.makeRotation(-e)),this}translate(e,t){return this.premultiply(lp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lp=new Et;function jw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Tf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function oU(){const n=Tf("canvas");return n.style.display="block",n}const My={};function Gl(n){n in My||(My[n]=!0,console.warn(n))}const Ay=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ty=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ic={[Wi]:{transfer:Ef,primaries:wf,toReference:n=>n,fromReference:n=>n},[Pn]:{transfer:qt,primaries:wf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ed]:{transfer:Ef,primaries:Mf,toReference:n=>n.applyMatrix3(Ty),fromReference:n=>n.applyMatrix3(Ay)},[Av]:{transfer:qt,primaries:Mf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ty),fromReference:n=>n.applyMatrix3(Ay).convertLinearToSRGB()}},aU=new Set([Wi,ed]),zt={enabled:!0,_workingColorSpace:Wi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!aU.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ic[e].toReference,a=Ic[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ic[n].primaries},getTransfer:function(n){return n===Nr?Ef:Ic[n].transfer}};function ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function up(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class qw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Tf("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let c=0;c<s.length;c++)s[c]=ws(s[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sU=0;class Yw{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sU++}),this.uuid=Gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?s.push(cp(a[c].image)):s.push(cp(a[c]))}else s=cp(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function cp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lU=0;class fr extends Ca{constructor(e=fr.DEFAULT_IMAGE,t=fr.DEFAULT_MAPPING,i=ti,a=ti,s=Ir,c=ql,u=Ur,d=Do,h=fr.DEFAULT_ANISOTROPY,p=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lU++}),this.uuid=Gi(),this.name="",this.source=new Yw(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Sa?Pn:Nr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nw)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vm:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case gm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vm:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case gm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pn?Sa:Gw}set encoding(e){Gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sa?Pn:Nr}}fr.DEFAULT_IMAGE=null;fr.DEFAULT_MAPPING=Nw;fr.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*s,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*s,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*s,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const d=e.elements,h=d[0],p=d[4],m=d[8],g=d[1],S=d[5],w=d[9],E=d[2],y=d[6],_=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-E)<.01&&Math.abs(w-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+E)<.1&&Math.abs(w+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,R=(S+1)/2,U=(_+1)/2,N=(p+g)/4,I=(m+E)/4,ce=(w+y)/4;return M>R&&M>U?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=N/i,s=I/i):R>U?R<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(R),i=N/a,s=ce/a):U<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(U),i=I/s,a=ce/s),this.set(i,a,s,t),this}let b=Math.sqrt((y-w)*(y-w)+(m-E)*(m-E)+(g-p)*(g-p));return Math.abs(b)<.001&&(b=1),this.x=(y-w)/b,this.y=(m-E)/b,this.z=(g-p)/b,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uU extends Ca{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Gl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sa?Pn:Nr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ir,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fr(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yw(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ea extends uU{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kw extends fr{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cU extends fr{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,c,u){let d=i[a+0],h=i[a+1],p=i[a+2],m=i[a+3];const g=s[c+0],S=s[c+1],w=s[c+2],E=s[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=g,e[t+1]=S,e[t+2]=w,e[t+3]=E;return}if(m!==E||d!==g||h!==S||p!==w){let y=1-u;const _=d*g+h*S+p*w+m*E,b=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const U=Math.sqrt(M),N=Math.atan2(U,_*b);y=Math.sin(y*N)/U,u=Math.sin(u*N)/U}const R=u*b;if(d=d*y+g*R,h=h*y+S*R,p=p*y+w*R,m=m*y+E*R,y===1-u){const U=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=U,h*=U,p*=U,m*=U}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,s,c){const u=i[a],d=i[a+1],h=i[a+2],p=i[a+3],m=s[c],g=s[c+1],S=s[c+2],w=s[c+3];return e[t]=u*w+p*m+d*S-h*g,e[t+1]=d*w+p*g+h*m-u*S,e[t+2]=h*w+p*S+u*g-d*m,e[t+3]=p*w-u*m-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,s=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(a/2),m=u(s/2),g=d(i/2),S=d(a/2),w=d(s/2);switch(c){case"XYZ":this._x=g*p*m+h*S*w,this._y=h*S*m-g*p*w,this._z=h*p*w+g*S*m,this._w=h*p*m-g*S*w;break;case"YXZ":this._x=g*p*m+h*S*w,this._y=h*S*m-g*p*w,this._z=h*p*w-g*S*m,this._w=h*p*m+g*S*w;break;case"ZXY":this._x=g*p*m-h*S*w,this._y=h*S*m+g*p*w,this._z=h*p*w+g*S*m,this._w=h*p*m-g*S*w;break;case"ZYX":this._x=g*p*m-h*S*w,this._y=h*S*m+g*p*w,this._z=h*p*w-g*S*m,this._w=h*p*m+g*S*w;break;case"YZX":this._x=g*p*m+h*S*w,this._y=h*S*m+g*p*w,this._z=h*p*w-g*S*m,this._w=h*p*m-g*S*w;break;case"XZY":this._x=g*p*m-h*S*w,this._y=h*S*m-g*p*w,this._z=h*p*w+g*S*m,this._w=h*p*m+g*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],m=t[10],g=i+u+m;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(s-h)*S,this._z=(c-a)*S}else if(i>u&&i>m){const S=2*Math.sqrt(1+i-u-m);this._w=(p-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(s+h)/S}else if(u>m){const S=2*Math.sqrt(1+u-i-m);this._w=(s-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+m-i-u);this._w=(c-a)/S,this._x=(s+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-s*d,this._y=a*p+c*d+s*u-i*h,this._z=s*p+c*h+i*d-a*u,this._w=c*p-i*u-a*d-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=s,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*a+t*this._y,this._z=S*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=c*m+this._w*g,this._x=i*m+this._x*g,this._y=a*m+this._y*g,this._z=s*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(by.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(by.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,c=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*c,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*c,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*i),p=2*(u*t-s*a),m=2*(s*i-c*t);return this.x=t+d*h+c*m-u*p,this.y=i+d*p+u*h-s*m,this.z=a+d*m+s*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-s*u,this.y=s*c-i*d,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fp.copy(this).projectOnVector(e),this.sub(fp)}reflect(e){return this.sub(fp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fp=new B,by=new wa;class zr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=s.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Yr):Yr.fromBufferAttribute(s,c),Yr.applyMatrix4(e.matrixWorld),this.expandByPoint(Yr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uc.copy(i.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const a=e.children;for(let s=0,c=a.length;s<c;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yr),Yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),Nc.subVectors(this.max,Cl),ns.subVectors(e.a,Cl),rs.subVectors(e.b,Cl),is.subVectors(e.c,Cl),mo.subVectors(rs,ns),vo.subVectors(is,rs),aa.subVectors(ns,is);let t=[0,-mo.z,mo.y,0,-vo.z,vo.y,0,-aa.z,aa.y,mo.z,0,-mo.x,vo.z,0,-vo.x,aa.z,0,-aa.x,-mo.y,mo.x,0,-vo.y,vo.x,0,-aa.y,aa.x,0];return!dp(t,ns,rs,is,Nc)||(t=[1,0,0,0,1,0,0,0,1],!dp(t,ns,rs,is,Nc))?!1:(Fc.crossVectors(mo,vo),t=[Fc.x,Fc.y,Fc.z],dp(t,ns,rs,is,Nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new B,new B,new B,new B,new B,new B,new B,new B],Yr=new B,Uc=new zr,ns=new B,rs=new B,is=new B,mo=new B,vo=new B,aa=new B,Cl=new B,Nc=new B,Fc=new B,sa=new B;function dp(n,e,t,i,a){for(let s=0,c=n.length-3;s<=c;s+=3){sa.fromArray(n,s);const u=a.x*Math.abs(sa.x)+a.y*Math.abs(sa.y)+a.z*Math.abs(sa.z),d=e.dot(sa),h=t.dot(sa),p=i.dot(sa);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const fU=new zr,Rl=new B,hp=new B;class yi{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fU.setFromPoints(e).getCenter(i);let a=0;for(let s=0,c=e.length;s<c;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rl.subVectors(e,this.center);const t=Rl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Rl,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rl.copy(e.center).add(hp)),this.expandByPoint(Rl.copy(e.center).sub(hp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new B,pp=new B,Oc=new B,go=new B,mp=new B,kc=new B,vp=new B;class bv{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){pp.copy(e).add(t).multiplyScalar(.5),Oc.copy(t).sub(e).normalize(),go.copy(this.origin).sub(pp);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Oc),u=go.dot(this.direction),d=-go.dot(Oc),h=go.lengthSq(),p=Math.abs(1-c*c);let m,g,S,w;if(p>0)if(m=c*d-u,g=c*u-d,w=s*p,m>=0)if(g>=-w)if(g<=w){const E=1/p;m*=E,g*=E,S=m*(m+c*g+2*u)+g*(c*m+g+2*d)+h}else g=s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;else g=-s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;else g<=-w?(m=Math.max(0,-(-c*s+u)),g=m>0?-s:Math.min(Math.max(-s,-d),s),S=-m*m+g*(g+2*d)+h):g<=w?(m=0,g=Math.min(Math.max(-s,-d),s),S=g*(g+2*d)+h):(m=Math.max(0,-(c*s+u)),g=m>0?s:Math.min(Math.max(-s,-d),s),S=-m*m+g*(g+2*d)+h);else g=c>0?-s:s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(pp).addScaledVector(Oc,g),S}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),a=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(a>s)return null;const c=Math.sqrt(s-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(s=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||s>a||((s>i||isNaN(i))&&(i=s),(c<a||isNaN(a))&&(a=c),m>=0?(u=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,a,s){mp.subVectors(t,e),kc.subVectors(i,e),vp.crossVectors(mp,kc);let c=this.direction.dot(vp),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;go.subVectors(this.origin,e);const d=u*this.direction.dot(kc.crossVectors(go,kc));if(d<0)return null;const h=u*this.direction.dot(mp.cross(go));if(h<0||d+h>c)return null;const p=-u*go.dot(vp);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,i,a,s,c,u,d,h,p,m,g,S,w,E,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h,p,m,g,S,w,E,y)}set(e,t,i,a,s,c,u,d,h,p,m,g,S,w,E,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=a,_[1]=s,_[5]=c,_[9]=u,_[13]=d,_[2]=h,_[6]=p,_[10]=m,_[14]=g,_[3]=S,_[7]=w,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),c=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),h=Math.sin(a),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const g=c*p,S=c*m,w=u*p,E=u*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=S+w*h,t[5]=g-E*h,t[9]=-u*d,t[2]=E-g*h,t[6]=w+S*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,S=d*m,w=h*p,E=h*m;t[0]=g+E*u,t[4]=w*u-S,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=S*u-w,t[6]=E+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,S=d*m,w=h*p,E=h*m;t[0]=g-E*u,t[4]=-c*m,t[8]=w+S*u,t[1]=S+w*u,t[5]=c*p,t[9]=E-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,S=c*m,w=u*p,E=u*m;t[0]=d*p,t[4]=w*h-S,t[8]=g*h+E,t[1]=d*m,t[5]=E*h+g,t[9]=S*h-w,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,S=c*h,w=u*d,E=u*h;t[0]=d*p,t[4]=E-g*m,t[8]=w*m+S,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=S*m+w,t[10]=g-E*m}else if(e.order==="XZY"){const g=c*d,S=c*h,w=u*d,E=u*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=g*m+E,t[5]=c*p,t[9]=S*m-w,t[2]=w*m-S,t[6]=u*p,t[10]=E*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dU,e,hU)}lookAt(e,t,i){const a=this.elements;return _r.subVectors(e,t),_r.lengthSq()===0&&(_r.z=1),_r.normalize(),_o.crossVectors(i,_r),_o.lengthSq()===0&&(Math.abs(i.z)===1?_r.x+=1e-4:_r.z+=1e-4,_r.normalize(),_o.crossVectors(i,_r)),_o.normalize(),zc.crossVectors(_r,_o),a[0]=_o.x,a[4]=zc.x,a[8]=_r.x,a[1]=_o.y,a[5]=zc.y,a[9]=_r.y,a[2]=_o.z,a[6]=zc.z,a[10]=_r.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],m=i[5],g=i[9],S=i[13],w=i[2],E=i[6],y=i[10],_=i[14],b=i[3],M=i[7],R=i[11],U=i[15],N=a[0],I=a[4],ce=a[8],C=a[12],O=a[1],oe=a[5],ne=a[9],pe=a[13],H=a[2],Q=a[6],se=a[10],re=a[14],X=a[3],ie=a[7],$=a[11],P=a[15];return s[0]=c*N+u*O+d*H+h*X,s[4]=c*I+u*oe+d*Q+h*ie,s[8]=c*ce+u*ne+d*se+h*$,s[12]=c*C+u*pe+d*re+h*P,s[1]=p*N+m*O+g*H+S*X,s[5]=p*I+m*oe+g*Q+S*ie,s[9]=p*ce+m*ne+g*se+S*$,s[13]=p*C+m*pe+g*re+S*P,s[2]=w*N+E*O+y*H+_*X,s[6]=w*I+E*oe+y*Q+_*ie,s[10]=w*ce+E*ne+y*se+_*$,s[14]=w*C+E*pe+y*re+_*P,s[3]=b*N+M*O+R*H+U*X,s[7]=b*I+M*oe+R*Q+U*ie,s[11]=b*ce+M*ne+R*se+U*$,s[15]=b*C+M*pe+R*re+U*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],m=e[6],g=e[10],S=e[14],w=e[3],E=e[7],y=e[11],_=e[15];return w*(+s*d*m-a*h*m-s*u*g+i*h*g+a*u*S-i*d*S)+E*(+t*d*S-t*h*g+s*c*g-a*c*S+a*h*p-s*d*p)+y*(+t*h*m-t*u*S-s*c*m+i*c*S+s*u*p-i*h*p)+_*(-a*u*p-t*d*m+t*u*g+a*c*m-i*c*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=e[9],g=e[10],S=e[11],w=e[12],E=e[13],y=e[14],_=e[15],b=m*y*h-E*g*h+E*d*S-u*y*S-m*d*_+u*g*_,M=w*g*h-p*y*h-w*d*S+c*y*S+p*d*_-c*g*_,R=p*E*h-w*m*h+w*u*S-c*E*S-p*u*_+c*m*_,U=w*m*d-p*E*d-w*u*g+c*E*g+p*u*y-c*m*y,N=t*b+i*M+a*R+s*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=b*I,e[1]=(E*g*s-m*y*s-E*a*S+i*y*S+m*a*_-i*g*_)*I,e[2]=(u*y*s-E*d*s+E*a*h-i*y*h-u*a*_+i*d*_)*I,e[3]=(m*d*s-u*g*s-m*a*h+i*g*h+u*a*S-i*d*S)*I,e[4]=M*I,e[5]=(p*y*s-w*g*s+w*a*S-t*y*S-p*a*_+t*g*_)*I,e[6]=(w*d*s-c*y*s-w*a*h+t*y*h+c*a*_-t*d*_)*I,e[7]=(c*g*s-p*d*s+p*a*h-t*g*h-c*a*S+t*d*S)*I,e[8]=R*I,e[9]=(w*m*s-p*E*s-w*i*S+t*E*S+p*i*_-t*m*_)*I,e[10]=(c*E*s-w*u*s+w*i*h-t*E*h-c*i*_+t*u*_)*I,e[11]=(p*u*s-c*m*s-p*i*h+t*m*h+c*i*S-t*u*S)*I,e[12]=U*I,e[13]=(p*E*a-w*m*a+w*i*g-t*E*g-p*i*y+t*m*y)*I,e[14]=(w*u*a-c*E*a-w*i*d+t*E*d+c*i*y-t*u*y)*I,e[15]=(c*m*a-p*u*a+p*i*d-t*m*d-c*i*g+t*u*g)*I,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,c=e.x,u=e.y,d=e.z,h=s*c,p=s*u;return this.set(h*c+i,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+i,p*d-a*c,0,h*d-a*u,p*d+a*c,s*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,c){return this.set(1,i,s,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,c=t._y,u=t._z,d=t._w,h=s+s,p=c+c,m=u+u,g=s*h,S=s*p,w=s*m,E=c*p,y=c*m,_=u*m,b=d*h,M=d*p,R=d*m,U=i.x,N=i.y,I=i.z;return a[0]=(1-(E+_))*U,a[1]=(S+R)*U,a[2]=(w-M)*U,a[3]=0,a[4]=(S-R)*N,a[5]=(1-(g+_))*N,a[6]=(y+b)*N,a[7]=0,a[8]=(w+M)*I,a[9]=(y-b)*I,a[10]=(1-(g+E))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=os.set(a[0],a[1],a[2]).length();const c=os.set(a[4],a[5],a[6]).length(),u=os.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Kr.copy(this);const h=1/s,p=1/c,m=1/u;return Kr.elements[0]*=h,Kr.elements[1]*=h,Kr.elements[2]*=h,Kr.elements[4]*=p,Kr.elements[5]*=p,Kr.elements[6]*=p,Kr.elements[8]*=m,Kr.elements[9]*=m,Kr.elements[10]*=m,t.setFromRotationMatrix(Kr),i.x=s,i.y=c,i.z=u,this}makePerspective(e,t,i,a,s,c,u=vi){const d=this.elements,h=2*s/(t-e),p=2*s/(i-a),m=(t+e)/(t-e),g=(i+a)/(i-a);let S,w;if(u===vi)S=-(c+s)/(c-s),w=-2*c*s/(c-s);else if(u===Kl)S=-c/(c-s),w=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,s,c,u=vi){const d=this.elements,h=1/(t-e),p=1/(i-a),m=1/(c-s),g=(t+e)*h,S=(i+a)*p;let w,E;if(u===vi)w=(c+s)*m,E=-2*m;else if(u===Kl)w=s*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const os=new B,Kr=new $t,dU=new B(0,0,0),hU=new B(1,1,1),_o=new B,zc=new B,_r=new B,Cy=new $t,Ry=new wa;class mu{constructor(e=0,t=0,i=0,a=mu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],m=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Dn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cy,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ry.setFromEuler(this),this.setFromQuaternion(Ry,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mu.DEFAULT_ORDER="XYZ";class Zw{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pU=0;const Py=new B,as=new wa,Oi=new $t,Bc=new B,Pl=new B,mU=new B,vU=new wa,Ly=new B(1,0,0),Dy=new B(0,1,0),Iy=new B(0,0,1),gU={type:"added"},_U={type:"removed"};class Jn extends Ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pU++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new B,t=new mu,i=new wa,a=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new Et}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zw,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Ly,e)}rotateY(e){return this.rotateOnAxis(Dy,e)}rotateZ(e){return this.rotateOnAxis(Iy,e)}translateOnAxis(e,t){return Py.copy(e).applyQuaternion(this.quaternion),this.position.add(Py.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ly,e)}translateY(e){return this.translateOnAxis(Dy,e)}translateZ(e){return this.translateOnAxis(Iy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bc.copy(e):Bc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Pl,Bc,this.up):Oi.lookAt(Bc,Pl,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),as.setFromRotationMatrix(Oi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gU)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_U)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,e,mU),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,vU,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,c=a.length;s<c;s++){const u=a[s];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];s(e.shapes,m)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(s(e.materials,this.material[d]));a.material=u}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(s(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),g=c(e.skeletons),S=c(e.animations),w=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),w.length>0&&(i.nodes=w)}return i.object=a,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Jn.DEFAULT_UP=new B(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zr=new B,ki=new B,gp=new B,zi=new B,ss=new B,ls=new B,Uy=new B,_p=new B,yp=new B,xp=new B;let Hc=!1;class ei{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Zr.subVectors(e,t),a.cross(Zr);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Zr.subVectors(a,t),ki.subVectors(i,t),gp.subVectors(e,t);const c=Zr.dot(Zr),u=Zr.dot(ki),d=Zr.dot(gp),h=ki.dot(ki),p=ki.dot(gp),m=c*h-u*u;if(m===0)return s.set(-2,-1,-1);const g=1/m,S=(h*d-u*p)*g,w=(c*p-u*d)*g;return s.set(1-S-w,w,S)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,zi),zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getUV(e,t,i,a,s,c,u,d){return Hc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hc=!0),this.getInterpolation(e,t,i,a,s,c,u,d)}static getInterpolation(e,t,i,a,s,c,u,d){return this.getBarycoord(e,t,i,a,zi),d.setScalar(0),d.addScaledVector(s,zi.x),d.addScaledVector(c,zi.y),d.addScaledVector(u,zi.z),d}static isFrontFacing(e,t,i,a){return Zr.subVectors(i,t),ki.subVectors(e,t),Zr.cross(ki).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zr.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),Zr.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return Hc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hc=!0),ei.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let c,u;ss.subVectors(a,i),ls.subVectors(s,i),_p.subVectors(e,i);const d=ss.dot(_p),h=ls.dot(_p);if(d<=0&&h<=0)return t.copy(i);yp.subVectors(e,a);const p=ss.dot(yp),m=ls.dot(yp);if(p>=0&&m<=p)return t.copy(a);const g=d*m-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(ss,c);xp.subVectors(e,s);const S=ss.dot(xp),w=ls.dot(xp);if(w>=0&&S<=w)return t.copy(s);const E=S*h-d*w;if(E<=0&&h>=0&&w<=0)return u=h/(h-w),t.copy(i).addScaledVector(ls,u);const y=p*w-S*m;if(y<=0&&m-p>=0&&S-w>=0)return Uy.subVectors(s,a),u=(m-p)/(m-p+(S-w)),t.copy(a).addScaledVector(Uy,u);const _=1/(y+E+g);return c=E*_,u=g*_,t.copy(i).addScaledVector(ss,c).addScaledVector(ls,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yo={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function Sp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=zt.workingColorSpace){if(e=Tv(e,1),t=Dn(t,0,1),i=Dn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,c=2*i-s;this.r=Sp(c,s,e+1/3),this.g=Sp(c,s,e),this.b=Sp(c,s,e-1/3)}return zt.toWorkingColorSpace(this,a),this}setStyle(e,t=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const i=Jw[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=up(e.r),this.g=up(e.g),this.b=up(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return zt.fromWorkingColorSpace(Bn.copy(this),e),Math.round(Dn(Bn.r*255,0,255))*65536+Math.round(Dn(Bn.g*255,0,255))*256+Math.round(Dn(Bn.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(Bn.copy(this),t);const i=Bn.r,a=Bn.g,s=Bn.b,c=Math.max(i,a,s),u=Math.min(i,a,s);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:d=(a-s)/m+(a<s?6:0);break;case a:d=(s-i)/m+2;break;case s:d=(i-a)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Pn){zt.fromWorkingColorSpace(Bn.copy(this),e);const t=Bn.r,i=Bn.g,a=Bn.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(yo),this.setHSL(yo.h+e,yo.s+t,yo.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yo),e.getHSL(Vc);const i=Vl(yo.h,Vc.h,t),a=Vl(yo.s,Vc.s,t),s=Vl(yo.l,Vc.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new nt;nt.NAMES=Jw;let yU=0;class Bs extends Ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yU++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Es,this.side=Fo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dm,this.blendDst=hm,this.blendEquation=pa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Sf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Fo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dm&&(i.blendSrc=this.blendSrc),this.blendDst!==hm&&(i.blendDst=this.blendDst),this.blendEquation!==pa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}if(t){const s=a(e.textures),c=a(e.images);s.length>0&&(i.textures=s),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qw extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new B,Gc=new ht;class Sr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_m,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gc.fromBufferAttribute(this,t),Gc.applyMatrix3(e),this.setXY(t,Gc.x,Gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),a=kt(a,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_m&&(e.usage=this.usage),e}}class eM extends Sr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tM extends Sr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends Sr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xU=0;const Dr=new $t,Ep=new Jn,us=new B,yr=new zr,Ll=new zr,wn=new B;class $n extends Ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xU++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jw(e)?tM:eM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,i){return Dr.makeTranslation(e,t,i),this.applyMatrix4(Dr),this}scale(e,t,i){return Dr.makeScale(e,t,i),this.applyMatrix4(Dr),this}lookAt(e){return Ep.lookAt(e),Ep.updateMatrix(),this.applyMatrix4(Ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];yr.setFromBufferAttribute(s),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,yr.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,yr.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(yr.min),this.boundingBox.expandByPoint(yr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(yr.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const u=t[s];Ll.setFromBufferAttribute(u),this.morphTargetsRelative?(wn.addVectors(yr.min,Ll.min),yr.expandByPoint(wn),wn.addVectors(yr.max,Ll.max),yr.expandByPoint(wn)):(yr.expandByPoint(Ll.min),yr.expandByPoint(Ll.max))}yr.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)wn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(wn));if(t)for(let s=0,c=t.length;s<c;s++){const u=t[s],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)wn.fromBufferAttribute(u,h),d&&(us.fromBufferAttribute(e,h),wn.add(us)),a=Math.max(a,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,c=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sr(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let O=0;O<u;O++)h[O]=new B,p[O]=new B;const m=new B,g=new B,S=new B,w=new ht,E=new ht,y=new ht,_=new B,b=new B;function M(O,oe,ne){m.fromArray(a,O*3),g.fromArray(a,oe*3),S.fromArray(a,ne*3),w.fromArray(c,O*2),E.fromArray(c,oe*2),y.fromArray(c,ne*2),g.sub(m),S.sub(m),E.sub(w),y.sub(w);const pe=1/(E.x*y.y-y.x*E.y);isFinite(pe)&&(_.copy(g).multiplyScalar(y.y).addScaledVector(S,-E.y).multiplyScalar(pe),b.copy(S).multiplyScalar(E.x).addScaledVector(g,-y.x).multiplyScalar(pe),h[O].add(_),h[oe].add(_),h[ne].add(_),p[O].add(b),p[oe].add(b),p[ne].add(b))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let O=0,oe=R.length;O<oe;++O){const ne=R[O],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)M(i[Q+0],i[Q+1],i[Q+2])}const U=new B,N=new B,I=new B,ce=new B;function C(O){I.fromArray(s,O*3),ce.copy(I);const oe=h[O];U.copy(oe),U.sub(I.multiplyScalar(I.dot(oe))).normalize(),N.crossVectors(ce,oe);const pe=N.dot(p[O])<0?-1:1;d[O*4]=U.x,d[O*4+1]=U.y,d[O*4+2]=U.z,d[O*4+3]=pe}for(let O=0,oe=R.length;O<oe;++O){const ne=R[O],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)C(i[Q+0]),C(i[Q+1]),C(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const a=new B,s=new B,c=new B,u=new B,d=new B,h=new B,p=new B,m=new B;if(e)for(let g=0,S=e.count;g<S;g+=3){const w=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,w),s.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),p.subVectors(c,s),m.subVectors(a,s),p.cross(m),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),u.add(p),d.add(p),h.add(p),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,s),m.subVectors(a,s),p.cross(m),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(d.length*p);let S=0,w=0;for(let E=0,y=d.length;E<y;E++){u.isInterleavedBufferAttribute?S=d[E]*u.data.stride+u.offset:S=d[E]*p;for(let _=0;_<p;_++)g[w++]=h[S++]}return new Sr(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,i);t.setAttribute(u,h)}const s=this.morphAttributes;for(const u in s){const d=[],h=s[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],S=e(g,i);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,g=h.length;m<g;m++){const S=h[m];p.push(S.toJSON(e.data))}p.length>0&&(a[d]=p,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],m=s[h];for(let g=0,S=m.length;g<S;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ny=new $t,la=new bv,Wc=new yi,Fy=new B,cs=new B,fs=new B,ds=new B,wp=new B,$c=new B,Xc=new ht,jc=new ht,qc=new ht,Oy=new B,ky=new B,zy=new B,Yc=new B,Kc=new B;class ni extends Jn{constructor(e=new $n,t=new Qw){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(s&&u){$c.set(0,0,0);for(let d=0,h=s.length;d<h;d++){const p=u[d],m=s[d];p!==0&&(wp.fromBufferAttribute(m,e),c?$c.addScaledVector(wp,p):$c.addScaledVector(wp.sub(t),p))}t.add($c)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wc.copy(i.boundingSphere),Wc.applyMatrix4(s),la.copy(e.ray).recast(e.near),!(Wc.containsPoint(la.origin)===!1&&(la.intersectSphere(Wc,Fy)===null||la.origin.distanceToSquared(Fy)>(e.far-e.near)**2))&&(Ny.copy(s).invert(),la.copy(e.ray).applyMatrix4(Ny),!(i.boundingBox!==null&&la.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,la)))}_computeIntersections(e,t,i){let a;const s=this.geometry,c=this.material,u=s.index,d=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,g=s.groups,S=s.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,E=g.length;w<E;w++){const y=g[w],_=c[y.materialIndex],b=Math.max(y.start,S.start),M=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let R=b,U=M;R<U;R+=3){const N=u.getX(R),I=u.getX(R+1),ce=u.getX(R+2);a=Zc(this,_,e,i,h,p,m,N,I,ce),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(u.count,S.start+S.count);for(let y=w,_=E;y<_;y+=3){const b=u.getX(y),M=u.getX(y+1),R=u.getX(y+2);a=Zc(this,c,e,i,h,p,m,b,M,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let w=0,E=g.length;w<E;w++){const y=g[w],_=c[y.materialIndex],b=Math.max(y.start,S.start),M=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=b,U=M;R<U;R+=3){const N=R,I=R+1,ce=R+2;a=Zc(this,_,e,i,h,p,m,N,I,ce),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=w,_=E;y<_;y+=3){const b=y,M=y+1,R=y+2;a=Zc(this,c,e,i,h,p,m,b,M,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function SU(n,e,t,i,a,s,c,u){let d;if(e.side===cr?d=i.intersectTriangle(c,s,a,!0,u):d=i.intersectTriangle(a,s,c,e.side===Fo,u),d===null)return null;Kc.copy(u),Kc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Kc);return h<t.near||h>t.far?null:{distance:h,point:Kc.clone(),object:n}}function Zc(n,e,t,i,a,s,c,u,d,h){n.getVertexPosition(u,cs),n.getVertexPosition(d,fs),n.getVertexPosition(h,ds);const p=SU(n,e,t,i,cs,fs,ds,Yc);if(p){a&&(Xc.fromBufferAttribute(a,u),jc.fromBufferAttribute(a,d),qc.fromBufferAttribute(a,h),p.uv=ei.getInterpolation(Yc,cs,fs,ds,Xc,jc,qc,new ht)),s&&(Xc.fromBufferAttribute(s,u),jc.fromBufferAttribute(s,d),qc.fromBufferAttribute(s,h),p.uv1=ei.getInterpolation(Yc,cs,fs,ds,Xc,jc,qc,new ht),p.uv2=p.uv1),c&&(Oy.fromBufferAttribute(c,u),ky.fromBufferAttribute(c,d),zy.fromBufferAttribute(c,h),p.normal=ei.getInterpolation(Yc,cs,fs,ds,Oy,ky,zy,new B),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:h,normal:new B,materialIndex:0};ei.getNormal(cs,fs,ds,m.normal),p.face=m}return p}class vu extends $n{constructor(e=1,t=1,i=1,a=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:c};const u=this;a=Math.floor(a),s=Math.floor(s),c=Math.floor(c);const d=[],h=[],p=[],m=[];let g=0,S=0;w("z","y","x",-1,-1,i,t,e,c,s,0),w("z","y","x",1,-1,i,t,-e,c,s,1),w("x","z","y",1,1,e,i,t,a,c,2),w("x","z","y",1,-1,e,i,-t,a,c,3),w("x","y","z",1,-1,e,t,i,a,s,4),w("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(d),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(m,2));function w(E,y,_,b,M,R,U,N,I,ce,C){const O=R/I,oe=U/ce,ne=R/2,pe=U/2,H=N/2,Q=I+1,se=ce+1;let re=0,X=0;const ie=new B;for(let $=0;$<se;$++){const P=$*oe-pe;for(let k=0;k<Q;k++){const W=k*O-ne;ie[E]=W*b,ie[y]=P*M,ie[_]=H,h.push(ie.x,ie.y,ie.z),ie[E]=0,ie[y]=0,ie[_]=N>0?1:-1,p.push(ie.x,ie.y,ie.z),m.push(k/I),m.push(1-$/ce),re+=1}}for(let $=0;$<ce;$++)for(let P=0;P<I;P++){const k=g+P+Q*$,W=g+P+Q*($+1),Y=g+(P+1)+Q*($+1),ee=g+(P+1)+Q*$;d.push(k,W,ee),d.push(W,Y,ee),X+=6}u.addGroup(S,X,C),S+=X,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Zn(n){const e={};for(let t=0;t<n.length;t++){const i=Ns(n[t]);for(const a in i)e[a]=i[a]}return e}function EU(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nM(n){return n.getRenderTarget()===null?n.outputColorSpace:zt.workingColorSpace}const Cv={clone:Ns,merge:Zn};var wU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oo extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wU,this.fragmentShader=MU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=EU(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rM extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xr extends rM{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hl*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;s+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ps=1;class AU extends Jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new xr(hs,ps,e,t);a.layers=this.layers,this.add(a);const s=new xr(hs,ps,e,t);s.layers=this.layers,this.add(s);const c=new xr(hs,ps,e,t);c.layers=this.layers,this.add(c);const u=new xr(hs,ps,e,t);u.layers=this.layers,this.add(u);const d=new xr(hs,ps,e,t);d.layers=this.layers,this.add(d);const h=new xr(hs,ps,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,c,u,d]=t;for(const h of t)this.remove(h);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,u,d,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,d),e.setRenderTarget(i,4,a),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(m,g,S),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class iM extends fr{constructor(e,t,i,a,s,c,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,i,a,s,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TU extends Ea{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Gl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sa?Pn:Nr),this.texture=new iM(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ir}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new vu(5,5,5),s=new Oo({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cr,blending:Po});s.uniforms.tEquirect.value=t;const c=new ni(a,s),u=t.minFilter;return t.minFilter===ql&&(t.minFilter=Ir),new AU(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(s)}}const Mp=new B,bU=new B,CU=new Et;class wo{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Mp.subVectors(i,t).cross(bU.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Mp),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||CU.getNormalMatrix(e),a=this.coplanarPoint(Mp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ua=new yi,Jc=new B;class td{constructor(e=new wo,t=new wo,i=new wo,a=new wo,s=new wo,c=new wo){this.planes=[e,t,i,a,s,c]}set(e,t,i,a,s,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(s),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){const i=this.planes,a=e.elements,s=a[0],c=a[1],u=a[2],d=a[3],h=a[4],p=a[5],m=a[6],g=a[7],S=a[8],w=a[9],E=a[10],y=a[11],_=a[12],b=a[13],M=a[14],R=a[15];if(i[0].setComponents(d-s,g-h,y-S,R-_).normalize(),i[1].setComponents(d+s,g+h,y+S,R+_).normalize(),i[2].setComponents(d+c,g+p,y+w,R+b).normalize(),i[3].setComponents(d-c,g-p,y-w,R-b).normalize(),i[4].setComponents(d-u,g-m,y-E,R-M).normalize(),t===vi)i[5].setComponents(d+u,g+m,y+E,R+M).normalize();else if(t===Kl)i[5].setComponents(u,m,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ua.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ua.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ua)}intersectsSprite(e){return ua.center.set(0,0,0),ua.radius=.7071067811865476,ua.applyMatrix4(e.matrixWorld),this.intersectsSphere(ua)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Jc.x=a.normal.x>0?e.max.x:e.min.x,Jc.y=a.normal.y>0?e.max.y:e.min.y,Jc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oM(){let n=null,e=!1,t=null,i=null;function a(s,c){t(s,c),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function RU(n,e){const t=e.isWebGL2,i=new WeakMap;function a(h,p){const m=h.array,g=h.usage,S=m.byteLength,w=n.createBuffer();n.bindBuffer(p,w),n.bufferData(p,m,g),h.onUploadCallback();let E;if(m instanceof Float32Array)E=n.FLOAT;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)E=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=n.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=n.SHORT;else if(m instanceof Uint32Array)E=n.UNSIGNED_INT;else if(m instanceof Int32Array)E=n.INT;else if(m instanceof Int8Array)E=n.BYTE;else if(m instanceof Uint8Array)E=n.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:w,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,p,m){const g=p.array,S=p._updateRange,w=p.updateRanges;if(n.bindBuffer(m,h),S.count===-1&&w.length===0&&n.bufferSubData(m,0,g),w.length!==0){for(let E=0,y=w.length;E<y;E++){const _=w[E];t?n.bufferSubData(m,_.start*g.BYTES_PER_ELEMENT,g,_.start,_.count):n.bufferSubData(m,_.start*g.BYTES_PER_ELEMENT,g.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}S.count!==-1&&(t?n.bufferSubData(m,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count):n.bufferSubData(m,S.offset*g.BYTES_PER_ELEMENT,g.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(n.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const g=i.get(h);(!g||g.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);if(m===void 0)i.set(h,a(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:c,remove:u,update:d}}class Rv extends $n{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,c=t/2,u=Math.floor(i),d=Math.floor(a),h=u+1,p=d+1,m=e/u,g=t/d,S=[],w=[],E=[],y=[];for(let _=0;_<p;_++){const b=_*g-c;for(let M=0;M<h;M++){const R=M*m-s;w.push(R,-b,0),E.push(0,0,1),y.push(M/u),y.push(1-_/d)}}for(let _=0;_<d;_++)for(let b=0;b<u;b++){const M=b+h*_,R=b+h*(_+1),U=b+1+h*(_+1),N=b+1+h*_;S.push(M,R,N),S.push(R,U,N)}this.setIndex(S),this.setAttribute("position",new ln(w,3)),this.setAttribute("normal",new ln(E,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rv(e.width,e.height,e.widthSegments,e.heightSegments)}}var PU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LU=`#ifdef USE_ALPHAHASH
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
#endif`,DU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UU=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,NU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FU=`#ifdef USE_AOMAP
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
#endif`,OU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kU=`#ifdef USE_BATCHING
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
#endif`,zU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,BU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GU=`#ifdef USE_IRIDESCENCE
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
#endif`,WU=`#ifdef USE_BUMPMAP
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
#endif`,$U=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,JU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,QU=`#define PI 3.141592653589793
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
} // validated`,eN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tN=`vec3 transformedNormal = objectNormal;
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
#endif`,nN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aN="gl_FragColor = linearToOutputTexel( gl_FragColor );",sN=`
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
}`,lN=`#ifdef USE_ENVMAP
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
#endif`,uN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cN=`#ifdef USE_ENVMAP
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
#endif`,fN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dN=`#ifdef USE_ENVMAP
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
#endif`,hN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gN=`#ifdef USE_GRADIENTMAP
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
}`,_N=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EN=`uniform bool receiveShadow;
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
#endif`,wN=`#ifdef USE_ENVMAP
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
#endif`,MN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CN=`PhysicalMaterial material;
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
#endif`,RN=`struct PhysicalMaterial {
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
}`,PN=`
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
#endif`,LN=`#if defined( RE_IndirectDiffuse )
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
#endif`,DN=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IN=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UN=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NN=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,FN=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ON=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BN=`#if defined( USE_POINTS_UV )
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
#endif`,HN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GN=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WN=`#ifdef USE_MORPHNORMALS
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
#endif`,$N=`#ifdef USE_MORPHTARGETS
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
#endif`,XN=`#ifdef USE_MORPHTARGETS
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
#endif`,jN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JN=`#ifdef USE_NORMALMAP
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
#endif`,QN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pF=`float getShadowMask() {
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
}`,mF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vF=`#ifdef USE_SKINNING
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
#endif`,gF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_F=`#ifdef USE_SKINNING
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
#endif`,yF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wF=`#ifdef USE_TRANSMISSION
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
#endif`,MF=`#ifdef USE_TRANSMISSION
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
#endif`,AF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PF=`uniform sampler2D t2D;
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
}`,LF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DF=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NF=`#include <common>
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
}`,FF=`#if DEPTH_PACKING == 3200
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
}`,OF=`#define DISTANCE
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
}`,kF=`#define DISTANCE
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
}`,zF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HF=`uniform float scale;
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
}`,VF=`uniform vec3 diffuse;
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
}`,GF=`#include <common>
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
}`,WF=`uniform vec3 diffuse;
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
}`,$F=`#define LAMBERT
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
}`,XF=`#define LAMBERT
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
}`,jF=`#define MATCAP
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
}`,qF=`#define MATCAP
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
}`,YF=`#define NORMAL
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
}`,KF=`#define NORMAL
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
}`,ZF=`#define PHONG
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
}`,JF=`#define PHONG
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
}`,QF=`#define STANDARD
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
}`,eO=`#define STANDARD
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
}`,tO=`#define TOON
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
}`,nO=`#define TOON
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
}`,rO=`uniform float size;
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
}`,iO=`uniform vec3 diffuse;
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
}`,oO=`#include <common>
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
}`,aO=`uniform vec3 color;
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
}`,sO=`uniform float rotation;
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
}`,lO=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:PU,alphahash_pars_fragment:LU,alphamap_fragment:DU,alphamap_pars_fragment:IU,alphatest_fragment:UU,alphatest_pars_fragment:NU,aomap_fragment:FU,aomap_pars_fragment:OU,batching_pars_vertex:kU,batching_vertex:zU,begin_vertex:BU,beginnormal_vertex:HU,bsdfs:VU,iridescence_fragment:GU,bumpmap_pars_fragment:WU,clipping_planes_fragment:$U,clipping_planes_pars_fragment:XU,clipping_planes_pars_vertex:jU,clipping_planes_vertex:qU,color_fragment:YU,color_pars_fragment:KU,color_pars_vertex:ZU,color_vertex:JU,common:QU,cube_uv_reflection_fragment:eN,defaultnormal_vertex:tN,displacementmap_pars_vertex:nN,displacementmap_vertex:rN,emissivemap_fragment:iN,emissivemap_pars_fragment:oN,colorspace_fragment:aN,colorspace_pars_fragment:sN,envmap_fragment:lN,envmap_common_pars_fragment:uN,envmap_pars_fragment:cN,envmap_pars_vertex:fN,envmap_physical_pars_fragment:wN,envmap_vertex:dN,fog_vertex:hN,fog_pars_vertex:pN,fog_fragment:mN,fog_pars_fragment:vN,gradientmap_pars_fragment:gN,lightmap_fragment:_N,lightmap_pars_fragment:yN,lights_lambert_fragment:xN,lights_lambert_pars_fragment:SN,lights_pars_begin:EN,lights_toon_fragment:MN,lights_toon_pars_fragment:AN,lights_phong_fragment:TN,lights_phong_pars_fragment:bN,lights_physical_fragment:CN,lights_physical_pars_fragment:RN,lights_fragment_begin:PN,lights_fragment_maps:LN,lights_fragment_end:DN,logdepthbuf_fragment:IN,logdepthbuf_pars_fragment:UN,logdepthbuf_pars_vertex:NN,logdepthbuf_vertex:FN,map_fragment:ON,map_pars_fragment:kN,map_particle_fragment:zN,map_particle_pars_fragment:BN,metalnessmap_fragment:HN,metalnessmap_pars_fragment:VN,morphcolor_vertex:GN,morphnormal_vertex:WN,morphtarget_pars_vertex:$N,morphtarget_vertex:XN,normal_fragment_begin:jN,normal_fragment_maps:qN,normal_pars_fragment:YN,normal_pars_vertex:KN,normal_vertex:ZN,normalmap_pars_fragment:JN,clearcoat_normal_fragment_begin:QN,clearcoat_normal_fragment_maps:eF,clearcoat_pars_fragment:tF,iridescence_pars_fragment:nF,opaque_fragment:rF,packing:iF,premultiplied_alpha_fragment:oF,project_vertex:aF,dithering_fragment:sF,dithering_pars_fragment:lF,roughnessmap_fragment:uF,roughnessmap_pars_fragment:cF,shadowmap_pars_fragment:fF,shadowmap_pars_vertex:dF,shadowmap_vertex:hF,shadowmask_pars_fragment:pF,skinbase_vertex:mF,skinning_pars_vertex:vF,skinning_vertex:gF,skinnormal_vertex:_F,specularmap_fragment:yF,specularmap_pars_fragment:xF,tonemapping_fragment:SF,tonemapping_pars_fragment:EF,transmission_fragment:wF,transmission_pars_fragment:MF,uv_pars_fragment:AF,uv_pars_vertex:TF,uv_vertex:bF,worldpos_vertex:CF,background_vert:RF,background_frag:PF,backgroundCube_vert:LF,backgroundCube_frag:DF,cube_vert:IF,cube_frag:UF,depth_vert:NF,depth_frag:FF,distanceRGBA_vert:OF,distanceRGBA_frag:kF,equirect_vert:zF,equirect_frag:BF,linedashed_vert:HF,linedashed_frag:VF,meshbasic_vert:GF,meshbasic_frag:WF,meshlambert_vert:$F,meshlambert_frag:XF,meshmatcap_vert:jF,meshmatcap_frag:qF,meshnormal_vert:YF,meshnormal_frag:KF,meshphong_vert:ZF,meshphong_frag:JF,meshphysical_vert:QF,meshphysical_frag:eO,meshtoon_vert:tO,meshtoon_frag:nO,points_vert:rO,points_frag:iO,shadow_vert:oO,shadow_frag:aO,sprite_vert:sO,sprite_frag:lO},Fe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},lr={basic:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Zn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Zn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Zn([Fe.points,Fe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Zn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Zn([Fe.common,Fe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Zn([Fe.sprite,Fe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Zn([Fe.common,Fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Zn([Fe.lights,Fe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};lr.physical={uniforms:Zn([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Qc={r:0,b:0,g:0};function uO(n,e,t,i,a,s,c){const u=new nt(0);let d=s===!0?0:1,h,p,m=null,g=0,S=null;function w(y,_){let b=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?E(u,d):M&&M.isColor&&(E(M,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Qf)?(p===void 0&&(p=new ni(new vu(1,1,1),new Oo({name:"BackgroundCubeMaterial",uniforms:Ns(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=zt.getTransfer(M.colorSpace)!==qt,(m!==M||g!==M.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,m=M,g=M.version,S=n.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ni(new Rv(2,2),new Oo({name:"BackgroundMaterial",uniforms:Ns(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:Fo,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=zt.getTransfer(M.colorSpace)!==qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(m!==M||g!==M.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,m=M,g=M.version,S=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function E(y,_){y.getRGB(Qc,nM(n)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,_,c)}return{getClearColor:function(){return u},setClearColor:function(y,_=1){u.set(y),d=_,E(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(y){d=y,E(u,d)},render:w}}function cO(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||s!==null,u={},d=y(null);let h=d,p=!1;function m(H,Q,se,re,X){let ie=!1;if(c){const $=E(re,se,Q);h!==$&&(h=$,S(h.object)),ie=_(H,re,se,X),ie&&b(H,re,se,X)}else{const $=Q.wireframe===!0;(h.geometry!==re.id||h.program!==se.id||h.wireframe!==$)&&(h.geometry=re.id,h.program=se.id,h.wireframe=$,ie=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(ie||p)&&(p=!1,ce(H,Q,se,re),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function g(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function S(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function w(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function E(H,Q,se){const re=se.wireframe===!0;let X=u[H.id];X===void 0&&(X={},u[H.id]=X);let ie=X[Q.id];ie===void 0&&(ie={},X[Q.id]=ie);let $=ie[re];return $===void 0&&($=y(g()),ie[re]=$),$}function y(H){const Q=[],se=[],re=[];for(let X=0;X<a;X++)Q[X]=0,se[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:se,attributeDivisors:re,object:H,attributes:{},index:null}}function _(H,Q,se,re){const X=h.attributes,ie=Q.attributes;let $=0;const P=se.getAttributes();for(const k in P)if(P[k].location>=0){const Y=X[k];let ee=ie[k];if(ee===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),Y===void 0||Y.attribute!==ee||ee&&Y.data!==ee.data)return!0;$++}return h.attributesNum!==$||h.index!==re}function b(H,Q,se,re){const X={},ie=Q.attributes;let $=0;const P=se.getAttributes();for(const k in P)if(P[k].location>=0){let Y=ie[k];Y===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor));const ee={};ee.attribute=Y,Y&&Y.data&&(ee.data=Y.data),X[k]=ee,$++}h.attributes=X,h.attributesNum=$,h.index=re}function M(){const H=h.newAttributes;for(let Q=0,se=H.length;Q<se;Q++)H[Q]=0}function R(H){U(H,0)}function U(H,Q){const se=h.newAttributes,re=h.enabledAttributes,X=h.attributeDivisors;se[H]=1,re[H]===0&&(n.enableVertexAttribArray(H),re[H]=1),X[H]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Q),X[H]=Q)}function N(){const H=h.newAttributes,Q=h.enabledAttributes;for(let se=0,re=Q.length;se<re;se++)Q[se]!==H[se]&&(n.disableVertexAttribArray(se),Q[se]=0)}function I(H,Q,se,re,X,ie,$){$===!0?n.vertexAttribIPointer(H,Q,se,X,ie):n.vertexAttribPointer(H,Q,se,re,X,ie)}function ce(H,Q,se,re){if(i.isWebGL2===!1&&(H.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=re.attributes,ie=se.getAttributes(),$=Q.defaultAttributeValues;for(const P in ie){const k=ie[P];if(k.location>=0){let W=X[P];if(W===void 0&&(P==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),P==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),W!==void 0){const Y=W.normalized,ee=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const _e=Z.buffer,ve=Z.type,be=Z.bytesPerElement,Oe=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===Fw);if(W.isInterleavedBufferAttribute){const ze=W.data,j=ze.stride,Dt=W.offset;if(ze.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)U(k.location+Ve,ze.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)R(k.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Ve=0;Ve<k.locationSize;Ve++)I(k.location+Ve,ee/k.locationSize,ve,Y,j*be,(Dt+ee/k.locationSize*Ve)*be,Oe)}else{if(W.isInstancedBufferAttribute){for(let ze=0;ze<k.locationSize;ze++)U(k.location+ze,W.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ze=0;ze<k.locationSize;ze++)R(k.location+ze);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ze=0;ze<k.locationSize;ze++)I(k.location+ze,ee/k.locationSize,ve,Y,ee*be,ee/k.locationSize*ze*be,Oe)}}else if($!==void 0){const Y=$[P];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(k.location,Y);break;case 3:n.vertexAttrib3fv(k.location,Y);break;case 4:n.vertexAttrib4fv(k.location,Y);break;default:n.vertexAttrib1fv(k.location,Y)}}}}N()}function C(){ne();for(const H in u){const Q=u[H];for(const se in Q){const re=Q[se];for(const X in re)w(re[X].object),delete re[X];delete Q[se]}delete u[H]}}function O(H){if(u[H.id]===void 0)return;const Q=u[H.id];for(const se in Q){const re=Q[se];for(const X in re)w(re[X].object),delete re[X];delete Q[se]}delete u[H.id]}function oe(H){for(const Q in u){const se=u[Q];if(se[H.id]===void 0)continue;const re=se[H.id];for(const X in re)w(re[X].object),delete re[X];delete se[H.id]}}function ne(){pe(),p=!0,h!==d&&(h=d,S(h.object))}function pe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:m,reset:ne,resetDefaultState:pe,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:oe,initAttributes:M,enableAttribute:R,disableUnusedAttributes:N}}function fO(n,e,t,i){const a=i.isWebGL2;let s;function c(p){s=p}function u(p,m){n.drawArrays(s,p,m),t.update(m,s,1)}function d(p,m,g){if(g===0)return;let S,w;if(a)S=n,w="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[w](s,p,m,g),t.update(m,s,g)}function h(p,m,g){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<g;w++)this.render(p[w],m[w]);else{S.multiDrawArraysWEBGL(s,p,0,m,0,g);let w=0;for(let E=0;E<g;E++)w+=m[E];t.update(w,s,1)}}this.setMode=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function dO(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=s(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),w=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),E=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,R=c||e.has("OES_texture_float"),U=M&&R,N=c?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:s,precision:u,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:w,maxAttributes:E,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:U,maxSamples:N}}function hO(n){const e=this;let t=null,i=0,a=!1,s=!1;const c=new wo,u=new Et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const S=m.length!==0||g||i!==0||a;return a=g,i=m.length,S},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,S){const w=m.clippingPlanes,E=m.clipIntersection,y=m.clipShadows,_=n.get(m);if(!a||w===null||w.length===0||s&&!y)s?p(null):h();else{const b=s?0:i,M=b*4;let R=_.clippingState||null;d.value=R,R=p(w,g,M,S);for(let U=0;U!==M;++U)R[U]=t[U];_.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,g,S,w){const E=m!==null?m.length:0;let y=null;if(E!==0){if(y=d.value,w!==!0||y===null){const _=S+E*4,b=g.matrixWorldInverse;u.getNormalMatrix(b),(y===null||y.length<_)&&(y=new Float32Array(_));for(let M=0,R=S;M!==E;++M,R+=4)c.copy(m[M]).applyMatrix4(b,u),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function pO(n){let e=new WeakMap;function t(c,u){return u===pm?c.mapping=Ds:u===mm&&(c.mapping=Is),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===pm||u===mm)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new TU(d.height/2);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mO extends rM{constructor(e=-1,t=1,i=1,a=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,c=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,c=s+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,By=[.125,.215,.35,.446,.526,.582],ma=20,Ap=new mO,Hy=new nt;let Tp=null,bp=0,Cp=0;const da=(1+Math.sqrt(5))/2,ms=1/da,Vy=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,da,ms),new B(0,da,-ms),new B(ms,0,da),new B(-ms,0,da),new B(da,ms,0),new B(-da,ms,0)];class Gy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Tp=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$y(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tp,bp,Cp),e.scissorTest=!1,ef(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tp=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ir,minFilter:Ir,generateMipmaps:!1,type:Yl,format:Ur,colorSpace:Wi,depthBuffer:!1},a=Wy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wy(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vO(s)),this._blurMaterial=gO(s,e,t)}return a}_compileMaterial(e){const t=new ni(this._lodPlanes[0],e);this._renderer.compile(t,Ap)}_sceneToCubeUV(e,t,i,a){const u=new xr(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(Hy),p.toneMapping=Lo,p.autoClear=!1;const S=new Qw({name:"PMREM.Background",side:cr,depthWrite:!1,depthTest:!1}),w=new ni(new vu,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(Hy),E=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(u.up.set(0,d[_],0),u.lookAt(h[_],0,0)):b===1?(u.up.set(0,0,d[_]),u.lookAt(0,h[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,h[_]));const M=this._cubeSize;ef(a,b*M,_>2?M:0,M,M),p.setRenderTarget(a),E&&p.render(w,u),p.render(e,u)}w.geometry.dispose(),w.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ds||e.mapping===Is;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$y());const s=a?this._cubemapMaterial:this._equirectMaterial,c=new ni(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const d=this._cubeSize;ef(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Ap)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Vy[(a-1)%Vy.length];this._blur(e,a-1,a,s,c)}t.autoClear=i}_blur(e,t,i,a,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",s),this._halfBlur(c,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new ni(this._lodPlanes[a],h),g=h.uniforms,S=this._sizeLods[i]-1,w=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*ma-1),E=s/w,y=isFinite(s)?1+Math.floor(p*E):ma;y>ma&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ma}`);const _=[];let b=0;for(let I=0;I<ma;++I){const ce=I/E,C=Math.exp(-ce*ce/2);_.push(C),I===0?b+=C:I<y&&(b+=2*C)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=_,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=w,g.mipInt.value=M-i;const R=this._sizeLods[a],U=3*R*(a>M-_s?a-M+_s:0),N=4*(this._cubeSize-R);ef(t,U,N,3*R,2*R),d.setRenderTarget(t),d.render(m,Ap)}}function vO(n){const e=[],t=[],i=[];let a=n;const s=n-_s+1+By.length;for(let c=0;c<s;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>n-_s?d=By[c-n+_s-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],S=6,w=6,E=3,y=2,_=1,b=new Float32Array(E*w*S),M=new Float32Array(y*w*S),R=new Float32Array(_*w*S);for(let N=0;N<S;N++){const I=N%3*2/3-1,ce=N>2?0:-1,C=[I,ce,0,I+2/3,ce,0,I+2/3,ce+1,0,I,ce,0,I+2/3,ce+1,0,I,ce+1,0];b.set(C,E*w*N),M.set(g,y*w*N);const O=[N,N,N,N,N,N];R.set(O,_*w*N)}const U=new $n;U.setAttribute("position",new Sr(b,E)),U.setAttribute("uv",new Sr(M,y)),U.setAttribute("faceIndex",new Sr(R,_)),e.push(U),a>_s&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wy(n,e,t){const i=new Ea(n,e,t);return i.texture.mapping=Qf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ef(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function gO(n,e,t){const i=new Float32Array(ma),a=new B(0,1,0);return new Oo({name:"SphericalGaussianBlur",defines:{n:ma,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Pv(),fragmentShader:`

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
		`,blending:Po,depthTest:!1,depthWrite:!1})}function $y(){return new Oo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pv(),fragmentShader:`

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
		`,blending:Po,depthTest:!1,depthWrite:!1})}function Xy(){return new Oo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Po,depthTest:!1,depthWrite:!1})}function Pv(){return`

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
	`}function _O(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===pm||d===mm,p=d===Ds||d===Is;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=e.get(u);return t===null&&(t=new Gy(n)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),e.set(u,m),m.texture}else{if(e.has(u))return e.get(u).texture;{const m=u.image;if(h&&m&&m.height>0||p&&m&&a(m)){t===null&&(t=new Gy(n));const g=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",s),g.texture}else return null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function s(u){const d=u.target;d.removeEventListener("dispose",s);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function yO(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function xO(n,e,t,i){const a={},s=new WeakMap;function c(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);for(const w in g.morphAttributes){const E=g.morphAttributes[w];for(let y=0,_=E.length;y<_;y++)e.remove(E[y])}g.removeEventListener("dispose",c),delete a[g.id];const S=s.get(g);S&&(e.remove(S),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const w in g)e.update(g[w],n.ARRAY_BUFFER);const S=m.morphAttributes;for(const w in S){const E=S[w];for(let y=0,_=E.length;y<_;y++)e.update(E[y],n.ARRAY_BUFFER)}}function h(m){const g=[],S=m.index,w=m.attributes.position;let E=0;if(S!==null){const b=S.array;E=S.version;for(let M=0,R=b.length;M<R;M+=3){const U=b[M+0],N=b[M+1],I=b[M+2];g.push(U,N,N,I,I,U)}}else if(w!==void 0){const b=w.array;E=w.version;for(let M=0,R=b.length/3-1;M<R;M+=3){const U=M+0,N=M+1,I=M+2;g.push(U,N,N,I,I,U)}}else return;const y=new(jw(g)?tM:eM)(g,1);y.version=E;const _=s.get(m);_&&e.remove(_),s.set(m,y)}function p(m){const g=s.get(m);if(g){const S=m.index;S!==null&&g.version<S.version&&h(m)}else h(m);return s.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function SO(n,e,t,i){const a=i.isWebGL2;let s;function c(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function p(S,w){n.drawElements(s,w,u,S*d),t.update(w,s,1)}function m(S,w,E){if(E===0)return;let y,_;if(a)y=n,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,w,u,S*d,E),t.update(w,s,E)}function g(S,w,E){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<E;_++)this.render(S[_]/d,w[_]);else{y.multiDrawElementsWEBGL(s,w,0,u,S,0,E);let _=0;for(let b=0;b<E;b++)_+=w[b];t.update(_,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function EO(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(s/3);break;case n.LINES:t.lines+=u*(s/2);break;case n.LINE_STRIP:t.lines+=u*(s-1);break;case n.LINE_LOOP:t.lines+=u*s;break;case n.POINTS:t.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function wO(n,e){return n[0]-e[0]}function MO(n,e){return Math.abs(e[1])-Math.abs(n[1])}function AO(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,c=new Bt,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function d(h,p,m){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const w=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,E=w!==void 0?w.length:0;let y=s.get(p);if(y===void 0||y.count!==E){let Q=function(){pe.dispose(),s.delete(p),p.removeEventListener("dispose",Q)};var S=Q;y!==void 0&&y.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,U=p.morphAttributes.color!==void 0,N=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],ce=p.morphAttributes.color||[];let C=0;M===!0&&(C=1),R===!0&&(C=2),U===!0&&(C=3);let O=p.attributes.position.count*C,oe=1;O>e.maxTextureSize&&(oe=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const ne=new Float32Array(O*oe*4*E),pe=new Kw(ne,O,oe,E);pe.type=Vi,pe.needsUpdate=!0;const H=C*4;for(let se=0;se<E;se++){const re=N[se],X=I[se],ie=ce[se],$=O*oe*4*se;for(let P=0;P<re.count;P++){const k=P*H;M===!0&&(c.fromBufferAttribute(re,P),ne[$+k+0]=c.x,ne[$+k+1]=c.y,ne[$+k+2]=c.z,ne[$+k+3]=0),R===!0&&(c.fromBufferAttribute(X,P),ne[$+k+4]=c.x,ne[$+k+5]=c.y,ne[$+k+6]=c.z,ne[$+k+7]=0),U===!0&&(c.fromBufferAttribute(ie,P),ne[$+k+8]=c.x,ne[$+k+9]=c.y,ne[$+k+10]=c.z,ne[$+k+11]=ie.itemSize===4?c.w:1)}}y={count:E,texture:pe,size:new ht(O,oe)},s.set(p,y),p.addEventListener("dispose",Q)}let _=0;for(let M=0;M<g.length;M++)_+=g[M];const b=p.morphTargetsRelative?1:1-_;m.getUniforms().setValue(n,"morphTargetBaseInfluence",b),m.getUniforms().setValue(n,"morphTargetInfluences",g),m.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),m.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const w=g===void 0?0:g.length;let E=i[p.id];if(E===void 0||E.length!==w){E=[];for(let R=0;R<w;R++)E[R]=[R,0];i[p.id]=E}for(let R=0;R<w;R++){const U=E[R];U[0]=R,U[1]=g[R]}E.sort(MO);for(let R=0;R<8;R++)R<w&&E[R][1]?(u[R][0]=E[R][0],u[R][1]=E[R][1]):(u[R][0]=Number.MAX_SAFE_INTEGER,u[R][1]=0);u.sort(wO);const y=p.morphAttributes.position,_=p.morphAttributes.normal;let b=0;for(let R=0;R<8;R++){const U=u[R],N=U[0],I=U[1];N!==Number.MAX_SAFE_INTEGER&&I?(y&&p.getAttribute("morphTarget"+R)!==y[N]&&p.setAttribute("morphTarget"+R,y[N]),_&&p.getAttribute("morphNormal"+R)!==_[N]&&p.setAttribute("morphNormal"+R,_[N]),a[R]=I,b+=I):(y&&p.hasAttribute("morphTarget"+R)===!0&&p.deleteAttribute("morphTarget"+R),_&&p.hasAttribute("morphNormal"+R)===!0&&p.deleteAttribute("morphNormal"+R),a[R]=0)}const M=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(n,"morphTargetBaseInfluence",M),m.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:d}}function TO(n,e,t,i){let a=new WeakMap;function s(d){const h=i.render.frame,p=d.geometry,m=e.get(d,p);if(a.get(m)!==h&&(e.update(m),a.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return m}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:c}}class aM extends fr{constructor(e,t,i,a,s,c,u,d,h,p){if(p=p!==void 0?p:xa,p!==xa&&p!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===xa&&(i=bo),i===void 0&&p===Us&&(i=ya),super(null,a,s,c,u,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Rn,this.minFilter=d!==void 0?d:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sM=new fr,lM=new aM(1,1);lM.compareFunction=$w;const uM=new Kw,cM=new cU,fM=new iM,jy=[],qy=[],Yy=new Float32Array(16),Ky=new Float32Array(9),Zy=new Float32Array(4);function Hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=jy[a];if(s===void 0&&(s=new Float32Array(a),jy[a]=s),e!==0){i.toArray(s,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(s,u)}return s}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function nd(n,e){let t=qy[e];t===void 0&&(t=new Int32Array(e),qy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function RO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function PO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function LO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,i))return;Zy.set(i),n.uniformMatrix2fv(this.addr,!1,Zy),gn(t,i)}}function DO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,i))return;Ky.set(i),n.uniformMatrix3fv(this.addr,!1,Ky),gn(t,i)}}function IO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,i))return;Yy.set(i),n.uniformMatrix4fv(this.addr,!1,Yy),gn(t,i)}}function UO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function FO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function OO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function kO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function BO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function HO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function VO(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?lM:sM;t.setTexture2D(e||s,a)}function GO(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||cM,a)}function WO(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||fM,a)}function $O(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||uM,a)}function XO(n){switch(n){case 5126:return bO;case 35664:return CO;case 35665:return RO;case 35666:return PO;case 35674:return LO;case 35675:return DO;case 35676:return IO;case 5124:case 35670:return UO;case 35667:case 35671:return NO;case 35668:case 35672:return FO;case 35669:case 35673:return OO;case 5125:return kO;case 36294:return zO;case 36295:return BO;case 36296:return HO;case 35678:case 36198:case 36298:case 36306:case 35682:return VO;case 35679:case 36299:case 36307:return GO;case 35680:case 36300:case 36308:case 36293:return WO;case 36289:case 36303:case 36311:case 36292:return $O}}function jO(n,e){n.uniform1fv(this.addr,e)}function qO(n,e){const t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function YO(n,e){const t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function KO(n,e){const t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function ZO(n,e){const t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function JO(n,e){const t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QO(n,e){const t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ek(n,e){n.uniform1iv(this.addr,e)}function tk(n,e){n.uniform2iv(this.addr,e)}function nk(n,e){n.uniform3iv(this.addr,e)}function rk(n,e){n.uniform4iv(this.addr,e)}function ik(n,e){n.uniform1uiv(this.addr,e)}function ok(n,e){n.uniform2uiv(this.addr,e)}function ak(n,e){n.uniform3uiv(this.addr,e)}function sk(n,e){n.uniform4uiv(this.addr,e)}function lk(n,e,t){const i=this.cache,a=e.length,s=nd(t,a);vn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||sM,s[c])}function uk(n,e,t){const i=this.cache,a=e.length,s=nd(t,a);vn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||cM,s[c])}function ck(n,e,t){const i=this.cache,a=e.length,s=nd(t,a);vn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||fM,s[c])}function fk(n,e,t){const i=this.cache,a=e.length,s=nd(t,a);vn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||uM,s[c])}function dk(n){switch(n){case 5126:return jO;case 35664:return qO;case 35665:return YO;case 35666:return KO;case 35674:return ZO;case 35675:return JO;case 35676:return QO;case 5124:case 35670:return ek;case 35667:case 35671:return tk;case 35668:case 35672:return nk;case 35669:case 35673:return rk;case 5125:return ik;case 36294:return ok;case 36295:return ak;case 36296:return sk;case 35678:case 36198:case 36298:case 36306:case 35682:return lk;case 35679:case 36299:case 36307:return uk;case 35680:case 36300:case 36308:case 36293:return ck;case 36289:case 36303:case 36311:case 36292:return fk}}class hk{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=XO(t.type)}}class pk{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dk(t.type)}}class mk{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,c=a.length;s!==c;++s){const u=a[s];u.setValue(e,t[u.id],i)}}}const Rp=/(\w+)(\])?(\[|\.)?/g;function Jy(n,e){n.seq.push(e),n.map[e.id]=e}function vk(n,e,t){const i=n.name,a=i.length;for(Rp.lastIndex=0;;){const s=Rp.exec(i),c=Rp.lastIndex;let u=s[1];const d=s[2]==="]",h=s[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){Jy(t,h===void 0?new hk(u,n,e):new pk(u,n,e));break}else{let m=t.map[u];m===void 0&&(m=new mk(u),Jy(t,m)),t=m}}}class pf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);vk(s,c,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,c=t.length;s!==c;++s){const u=t[s],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Qy(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gk=37297;let _k=0;function yk(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=a;c<s;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function xk(n){const e=zt.getPrimaries(zt.workingColorSpace),t=zt.getPrimaries(n);let i;switch(e===t?i="":e===Mf&&t===wf?i="LinearDisplayP3ToLinearSRGB":e===wf&&t===Mf&&(i="LinearSRGBToLinearDisplayP3"),n){case Wi:case ed:return[i,"LinearTransferOETF"];case Pn:case Av:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ex(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+yk(n.getShaderSource(e),c)}else return a}function Sk(n,e){const t=xk(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ek(n,e){let t;switch(e){case SI:t="Linear";break;case EI:t="Reinhard";break;case wI:t="OptimizedCineon";break;case MI:t="ACESFilmic";break;case AI:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wk(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nl).join(`
`)}function Mk(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ak(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),c=s.name;let u=1;s.type===n.FLOAT_MAT2&&(u=2),s.type===n.FLOAT_MAT3&&(u=3),s.type===n.FLOAT_MAT4&&(u=4),t[c]={type:s.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Nl(n){return n!==""}function tx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tk=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sm(n){return n.replace(Tk,Ck)}const bk=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ck(n,e){let t=xt[e];if(t===void 0){const i=bk.get(e);if(i!==void 0)t=xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sm(t)}const Rk=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rx(n){return n.replace(Rk,Pk)}function Pk(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function ix(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lk(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uw?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Y3?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Dk(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case Is:e="ENVMAP_TYPE_CUBE";break;case Qf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ik(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function Uk(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wv:e="ENVMAP_BLENDING_MULTIPLY";break;case yI:e="ENVMAP_BLENDING_MIX";break;case xI:e="ENVMAP_BLENDING_ADD";break}return e}function Nk(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Fk(n,e,t,i){const a=n.getContext(),s=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=Lk(t),h=Dk(t),p=Ik(t),m=Uk(t),g=Nk(t),S=t.isWebGL2?"":wk(t),w=Mk(s),E=a.createProgram();let y,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Nl).join(`
`),y.length>0&&(y+=`
`),_=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Nl).join(`
`),_.length>0&&(_+=`
`)):(y=[ix(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),_=[S,ix(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lo?"#define TONE_MAPPING":"",t.toneMapping!==Lo?xt.tonemapping_pars_fragment:"",t.toneMapping!==Lo?Ek("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Sk("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nl).join(`
`)),c=Sm(c),c=tx(c,t),c=nx(c,t),u=Sm(u),u=tx(u,t),u=nx(u,t),c=rx(c),u=rx(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ey?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ey?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=b+y+c,R=b+_+u,U=Qy(a,a.VERTEX_SHADER,M),N=Qy(a,a.FRAGMENT_SHADER,R);a.attachShader(E,U),a.attachShader(E,N),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function I(oe){if(n.debug.checkShaderErrors){const ne=a.getProgramInfoLog(E).trim(),pe=a.getShaderInfoLog(U).trim(),H=a.getShaderInfoLog(N).trim();let Q=!0,se=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,E,U,N);else{const re=ex(a,U,"vertex"),X=ex(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+re+`
`+X)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(pe===""||H==="")&&(se=!1);se&&(oe.diagnostics={runnable:Q,programLog:ne,vertexShader:{log:pe,prefix:y},fragmentShader:{log:H,prefix:_}})}a.deleteShader(U),a.deleteShader(N),ce=new pf(a,E),C=Ak(a,E)}let ce;this.getUniforms=function(){return ce===void 0&&I(this),ce};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(E,gk)),O},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_k++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=N,this}let Ok=0;class kk{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zk(e),t.set(e,i)),i}}class zk{constructor(e){this.id=Ok++,this.code=e,this.usedTimes=0}}function Bk(n,e,t,i,a,s,c){const u=new Zw,d=new kk,h=[],p=a.isWebGL2,m=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return C===0?"uv":`uv${C}`}function y(C,O,oe,ne,pe){const H=ne.fog,Q=pe.geometry,se=C.isMeshStandardMaterial?ne.environment:null,re=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),X=re&&re.mapping===Qf?re.image.height:null,ie=w[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const $=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,P=$!==void 0?$.length:0;let k=0;Q.morphAttributes.position!==void 0&&(k=1),Q.morphAttributes.normal!==void 0&&(k=2),Q.morphAttributes.color!==void 0&&(k=3);let W,Y,ee,Z;if(ie){const yn=lr[ie];W=yn.vertexShader,Y=yn.fragmentShader}else W=C.vertexShader,Y=C.fragmentShader,d.update(C),ee=d.getVertexShaderID(C),Z=d.getFragmentShaderID(C);const _e=n.getRenderTarget(),ve=pe.isInstancedMesh===!0,be=pe.isBatchedMesh===!0,Oe=!!C.map,ze=!!C.matcap,j=!!re,Dt=!!C.aoMap,Ve=!!C.lightMap,le=!!C.bumpMap,ue=!!C.normalMap,xe=!!C.displacementMap,ge=!!C.emissiveMap,Me=!!C.metalnessMap,we=!!C.roughnessMap,Ie=C.anisotropy>0,Ze=C.clearcoat>0,D=C.iridescence>0,T=C.sheen>0,q=C.transmission>0,Ae=Ie&&!!C.anisotropyMap,ye=Ze&&!!C.clearcoatMap,Ce=Ze&&!!C.clearcoatNormalMap,Ye=Ze&&!!C.clearcoatRoughnessMap,De=D&&!!C.iridescenceMap,He=D&&!!C.iridescenceThicknessMap,lt=T&&!!C.sheenColorMap,At=T&&!!C.sheenRoughnessMap,Le=!!C.specularMap,Nt=!!C.specularColorMap,ft=!!C.specularIntensityMap,st=q&&!!C.transmissionMap,tt=q&&!!C.thicknessMap,$e=!!C.gradientMap,_t=!!C.alphaMap,V=C.alphaTest>0,Be=!!C.alphaHash,Re=!!C.extensions,me=!!Q.attributes.uv1,Ue=!!Q.attributes.uv2,ot=!!Q.attributes.uv3;let wt=Lo;return C.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(wt=n.toneMapping),{isWebGL2:p,shaderID:ie,shaderType:C.type,shaderName:C.name,vertexShader:W,fragmentShader:Y,defines:C.defines,customVertexShaderID:ee,customFragmentShaderID:Z,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:be,instancing:ve,instancingColor:ve&&pe.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Wi,map:Oe,matcap:ze,envMap:j,envMapMode:j&&re.mapping,envMapCubeUVHeight:X,aoMap:Dt,lightMap:Ve,bumpMap:le,normalMap:ue,displacementMap:g&&xe,emissiveMap:ge,normalMapObjectSpace:ue&&C.normalMapType===OI,normalMapTangentSpace:ue&&C.normalMapType===Ww,metalnessMap:Me,roughnessMap:we,anisotropy:Ie,anisotropyMap:Ae,clearcoat:Ze,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:He,sheen:T,sheenColorMap:lt,sheenRoughnessMap:At,specularMap:Le,specularColorMap:Nt,specularIntensityMap:ft,transmission:q,transmissionMap:st,thicknessMap:tt,gradientMap:$e,opaque:C.transparent===!1&&C.blending===Es,alphaMap:_t,alphaTest:V,alphaHash:Be,combine:C.combine,mapUv:Oe&&E(C.map.channel),aoMapUv:Dt&&E(C.aoMap.channel),lightMapUv:Ve&&E(C.lightMap.channel),bumpMapUv:le&&E(C.bumpMap.channel),normalMapUv:ue&&E(C.normalMap.channel),displacementMapUv:xe&&E(C.displacementMap.channel),emissiveMapUv:ge&&E(C.emissiveMap.channel),metalnessMapUv:Me&&E(C.metalnessMap.channel),roughnessMapUv:we&&E(C.roughnessMap.channel),anisotropyMapUv:Ae&&E(C.anisotropyMap.channel),clearcoatMapUv:ye&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:He&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:At&&E(C.sheenRoughnessMap.channel),specularMapUv:Le&&E(C.specularMap.channel),specularColorMapUv:Nt&&E(C.specularColorMap.channel),specularIntensityMapUv:ft&&E(C.specularIntensityMap.channel),transmissionMapUv:st&&E(C.transmissionMap.channel),thicknessMapUv:tt&&E(C.thicknessMap.channel),alphaMapUv:_t&&E(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ue||Ie),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:Ue,vertexUv3s:ot,pointsUvs:pe.isPoints===!0&&!!Q.attributes.uv&&(Oe||_t),fog:!!H,useFog:C.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:pe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:k,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&oe.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&C.map.isVideoTexture===!0&&zt.getTransfer(C.map.colorSpace)===qt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Hi,flipSided:C.side===cr,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Re&&C.extensions.derivatives===!0,extensionFragDepth:Re&&C.extensions.fragDepth===!0,extensionDrawBuffers:Re&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function _(C){const O=[];if(C.shaderID?O.push(C.shaderID):(O.push(C.customVertexShaderID),O.push(C.customFragmentShaderID)),C.defines!==void 0)for(const oe in C.defines)O.push(oe),O.push(C.defines[oe]);return C.isRawShaderMaterial===!1&&(b(O,C),M(O,C),O.push(n.outputColorSpace)),O.push(C.customProgramCacheKey),O.join()}function b(C,O){C.push(O.precision),C.push(O.outputColorSpace),C.push(O.envMapMode),C.push(O.envMapCubeUVHeight),C.push(O.mapUv),C.push(O.alphaMapUv),C.push(O.lightMapUv),C.push(O.aoMapUv),C.push(O.bumpMapUv),C.push(O.normalMapUv),C.push(O.displacementMapUv),C.push(O.emissiveMapUv),C.push(O.metalnessMapUv),C.push(O.roughnessMapUv),C.push(O.anisotropyMapUv),C.push(O.clearcoatMapUv),C.push(O.clearcoatNormalMapUv),C.push(O.clearcoatRoughnessMapUv),C.push(O.iridescenceMapUv),C.push(O.iridescenceThicknessMapUv),C.push(O.sheenColorMapUv),C.push(O.sheenRoughnessMapUv),C.push(O.specularMapUv),C.push(O.specularColorMapUv),C.push(O.specularIntensityMapUv),C.push(O.transmissionMapUv),C.push(O.thicknessMapUv),C.push(O.combine),C.push(O.fogExp2),C.push(O.sizeAttenuation),C.push(O.morphTargetsCount),C.push(O.morphAttributeCount),C.push(O.numDirLights),C.push(O.numPointLights),C.push(O.numSpotLights),C.push(O.numSpotLightMaps),C.push(O.numHemiLights),C.push(O.numRectAreaLights),C.push(O.numDirLightShadows),C.push(O.numPointLightShadows),C.push(O.numSpotLightShadows),C.push(O.numSpotLightShadowsWithMaps),C.push(O.numLightProbes),C.push(O.shadowMapType),C.push(O.toneMapping),C.push(O.numClippingPlanes),C.push(O.numClipIntersection),C.push(O.depthPacking)}function M(C,O){u.disableAll(),O.isWebGL2&&u.enable(0),O.supportsVertexTextures&&u.enable(1),O.instancing&&u.enable(2),O.instancingColor&&u.enable(3),O.matcap&&u.enable(4),O.envMap&&u.enable(5),O.normalMapObjectSpace&&u.enable(6),O.normalMapTangentSpace&&u.enable(7),O.clearcoat&&u.enable(8),O.iridescence&&u.enable(9),O.alphaTest&&u.enable(10),O.vertexColors&&u.enable(11),O.vertexAlphas&&u.enable(12),O.vertexUv1s&&u.enable(13),O.vertexUv2s&&u.enable(14),O.vertexUv3s&&u.enable(15),O.vertexTangents&&u.enable(16),O.anisotropy&&u.enable(17),O.alphaHash&&u.enable(18),O.batching&&u.enable(19),C.push(u.mask),u.disableAll(),O.fog&&u.enable(0),O.useFog&&u.enable(1),O.flatShading&&u.enable(2),O.logarithmicDepthBuffer&&u.enable(3),O.skinning&&u.enable(4),O.morphTargets&&u.enable(5),O.morphNormals&&u.enable(6),O.morphColors&&u.enable(7),O.premultipliedAlpha&&u.enable(8),O.shadowMapEnabled&&u.enable(9),O.useLegacyLights&&u.enable(10),O.doubleSided&&u.enable(11),O.flipSided&&u.enable(12),O.useDepthPacking&&u.enable(13),O.dithering&&u.enable(14),O.transmission&&u.enable(15),O.sheen&&u.enable(16),O.opaque&&u.enable(17),O.pointsUvs&&u.enable(18),O.decodeVideoTexture&&u.enable(19),C.push(u.mask)}function R(C){const O=w[C.type];let oe;if(O){const ne=lr[O];oe=Cv.clone(ne.uniforms)}else oe=C.uniforms;return oe}function U(C,O){let oe;for(let ne=0,pe=h.length;ne<pe;ne++){const H=h[ne];if(H.cacheKey===O){oe=H,++oe.usedTimes;break}}return oe===void 0&&(oe=new Fk(n,O,C,s),h.push(oe)),oe}function N(C){if(--C.usedTimes===0){const O=h.indexOf(C);h[O]=h[h.length-1],h.pop(),C.destroy()}}function I(C){d.remove(C)}function ce(){d.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:U,releaseProgram:N,releaseShaderCache:I,programs:h,dispose:ce}}function Hk(){let n=new WeakMap;function e(s){let c=n.get(s);return c===void 0&&(c={},n.set(s,c)),c}function t(s){n.delete(s)}function i(s,c,u){n.get(s)[c]=u}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function Vk(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ax(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function c(m,g,S,w,E,y){let _=n[e];return _===void 0?(_={id:m.id,object:m,geometry:g,material:S,groupOrder:w,renderOrder:m.renderOrder,z:E,group:y},n[e]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=S,_.groupOrder=w,_.renderOrder=m.renderOrder,_.z=E,_.group=y),e++,_}function u(m,g,S,w,E,y){const _=c(m,g,S,w,E,y);S.transmission>0?i.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(m,g,S,w,E,y){const _=c(m,g,S,w,E,y);S.transmission>0?i.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(m,g){t.length>1&&t.sort(m||Vk),i.length>1&&i.sort(g||ox),a.length>1&&a.sort(g||ox)}function p(){for(let m=e,g=n.length;m<g;m++){const S=n[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:u,unshift:d,finish:p,sort:h}}function Gk(){let n=new WeakMap;function e(i,a){const s=n.get(i);let c;return s===void 0?(c=new ax,n.set(i,[c])):a>=s.length?(c=new ax,s.push(c)):c=s[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wk(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function $k(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Xk=0;function jk(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qk(n,e){const t=new Wk,i=$k(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new B);const s=new B,c=new $t,u=new $t;function d(p,m){let g=0,S=0,w=0;for(let ne=0;ne<9;ne++)a.probe[ne].set(0,0,0);let E=0,y=0,_=0,b=0,M=0,R=0,U=0,N=0,I=0,ce=0,C=0;p.sort(jk);const O=m===!0?Math.PI:1;for(let ne=0,pe=p.length;ne<pe;ne++){const H=p[ne],Q=H.color,se=H.intensity,re=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Q.r*se*O,S+=Q.g*se*O,w+=Q.b*se*O;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(H.sh.coefficients[ie],se);C++}else if(H.isDirectionalLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*O),H.castShadow){const $=H.shadow,P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,a.directionalShadow[E]=P,a.directionalShadowMap[E]=X,a.directionalShadowMatrix[E]=H.shadow.matrix,R++}a.directional[E]=ie,E++}else if(H.isSpotLight){const ie=t.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(Q).multiplyScalar(se*O),ie.distance=re,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,a.spot[_]=ie;const $=H.shadow;if(H.map&&(a.spotLightMap[I]=H.map,I++,$.updateMatrices(H),H.castShadow&&ce++),a.spotLightMatrix[_]=$.matrix,H.castShadow){const P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,a.spotShadow[_]=P,a.spotShadowMap[_]=X,N++}_++}else if(H.isRectAreaLight){const ie=t.get(H);ie.color.copy(Q).multiplyScalar(se),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),a.rectArea[b]=ie,b++}else if(H.isPointLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*O),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const $=H.shadow,P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,P.shadowCameraNear=$.camera.near,P.shadowCameraFar=$.camera.far,a.pointShadow[y]=P,a.pointShadowMap[y]=X,a.pointShadowMatrix[y]=H.shadow.matrix,U++}a.point[y]=ie,y++}else if(H.isHemisphereLight){const ie=t.get(H);ie.skyColor.copy(H.color).multiplyScalar(se*O),ie.groundColor.copy(H.groundColor).multiplyScalar(se*O),a.hemi[M]=ie,M++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=S,a.ambient[2]=w;const oe=a.hash;(oe.directionalLength!==E||oe.pointLength!==y||oe.spotLength!==_||oe.rectAreaLength!==b||oe.hemiLength!==M||oe.numDirectionalShadows!==R||oe.numPointShadows!==U||oe.numSpotShadows!==N||oe.numSpotMaps!==I||oe.numLightProbes!==C)&&(a.directional.length=E,a.spot.length=_,a.rectArea.length=b,a.point.length=y,a.hemi.length=M,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=N+I-ce,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=ce,a.numLightProbes=C,oe.directionalLength=E,oe.pointLength=y,oe.spotLength=_,oe.rectAreaLength=b,oe.hemiLength=M,oe.numDirectionalShadows=R,oe.numPointShadows=U,oe.numSpotShadows=N,oe.numSpotMaps=I,oe.numLightProbes=C,a.version=Xk++)}function h(p,m){let g=0,S=0,w=0,E=0,y=0;const _=m.matrixWorldInverse;for(let b=0,M=p.length;b<M;b++){const R=p[b];if(R.isDirectionalLight){const U=a.directional[g];U.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(_),g++}else if(R.isSpotLight){const U=a.spot[w];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(_),U.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(_),w++}else if(R.isRectAreaLight){const U=a.rectArea[E];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(_),u.identity(),c.copy(R.matrixWorld),c.premultiply(_),u.extractRotation(c),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),E++}else if(R.isPointLight){const U=a.point[S];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(_),S++}else if(R.isHemisphereLight){const U=a.hemi[y];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(_),y++}}}return{setup:d,setupView:h,state:a}}function sx(n,e){const t=new qk(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function c(m){i.push(m)}function u(m){a.push(m)}function d(m){t.setup(i,m)}function h(m){t.setupView(i,m)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function Yk(n,e){let t=new WeakMap;function i(s,c=0){const u=t.get(s);let d;return u===void 0?(d=new sx(n,e),t.set(s,[d])):c>=u.length?(d=new sx(n,e),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:i,dispose:a}}class Kk extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zk extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qk=`uniform sampler2D shadow_pass;
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
}`;function ez(n,e,t){let i=new td;const a=new ht,s=new ht,c=new Bt,u=new Kk({depthPacking:FI}),d=new Zk,h={},p=t.maxTextureSize,m={[Fo]:cr,[cr]:Fo,[Hi]:Hi},g=new Oo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Jk,fragmentShader:Qk}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const w=new $n;w.setAttribute("position",new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ni(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uw;let _=this.type;this.render=function(U,N,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const ce=n.getRenderTarget(),C=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(Po),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ne=_!==Bi&&this.type===Bi,pe=_===Bi&&this.type!==Bi;for(let H=0,Q=U.length;H<Q;H++){const se=U[H],re=se.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);const X=re.getFrameExtents();if(a.multiply(X),s.copy(re.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(s.x=Math.floor(p/X.x),a.x=s.x*X.x,re.mapSize.x=s.x),a.y>p&&(s.y=Math.floor(p/X.y),a.y=s.y*X.y,re.mapSize.y=s.y)),re.map===null||ne===!0||pe===!0){const $=this.type!==Bi?{minFilter:Rn,magFilter:Rn}:{};re.map!==null&&re.map.dispose(),re.map=new Ea(a.x,a.y,$),re.map.texture.name=se.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();const ie=re.getViewportCount();for(let $=0;$<ie;$++){const P=re.getViewport($);c.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),oe.viewport(c),re.updateMatrices(se,$),i=re.getFrustum(),R(N,I,re.camera,se,this.type)}re.isPointLightShadow!==!0&&this.type===Bi&&b(re,I),re.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(ce,C,O)};function b(U,N){const I=e.update(E);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ea(a.x,a.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(N,null,I,g,E,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(N,null,I,S,E,null)}function M(U,N,I,ce){let C=null;const O=I.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(O!==void 0)C=O;else if(C=I.isPointLight===!0?d:u,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=C.uuid,ne=N.uuid;let pe=h[oe];pe===void 0&&(pe={},h[oe]=pe);let H=pe[ne];H===void 0&&(H=C.clone(),pe[ne]=H),C=H}if(C.visible=N.visible,C.wireframe=N.wireframe,ce===Bi?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:m[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,I.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=n.properties.get(C);oe.light=I}return C}function R(U,N,I,ce,C){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===Bi)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,U.matrixWorld);const ne=e.update(U),pe=U.material;if(Array.isArray(pe)){const H=ne.groups;for(let Q=0,se=H.length;Q<se;Q++){const re=H[Q],X=pe[re.materialIndex];if(X&&X.visible){const ie=M(U,X,ce,C);U.onBeforeShadow(n,U,N,I,ne,ie,re),n.renderBufferDirect(I,null,ne,ie,U,re),U.onAfterShadow(n,U,N,I,ne,ie,re)}}}else if(pe.visible){const H=M(U,pe,ce,C);U.onBeforeShadow(n,U,N,I,ne,H,null),n.renderBufferDirect(I,null,ne,H,U,null),U.onAfterShadow(n,U,N,I,ne,H,null)}}const oe=U.children;for(let ne=0,pe=oe.length;ne<pe;ne++)R(oe[ne],N,I,ce,C)}}function tz(n,e,t){const i=t.isWebGL2;function a(){let V=!1;const Be=new Bt;let Re=null;const me=new Bt(0,0,0,0);return{setMask:function(Ue){Re!==Ue&&!V&&(n.colorMask(Ue,Ue,Ue,Ue),Re=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,ot,wt,nn,yn){yn===!0&&(Ue*=nn,ot*=nn,wt*=nn),Be.set(Ue,ot,wt,nn),me.equals(Be)===!1&&(n.clearColor(Ue,ot,wt,nn),me.copy(Be))},reset:function(){V=!1,Re=null,me.set(-1,0,0,0)}}}function s(){let V=!1,Be=null,Re=null,me=null;return{setTest:function(Ue){Ue?be(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Ue){Be!==Ue&&!V&&(n.depthMask(Ue),Be=Ue)},setFunc:function(Ue){if(Re!==Ue){switch(Ue){case dI:n.depthFunc(n.NEVER);break;case hI:n.depthFunc(n.ALWAYS);break;case pI:n.depthFunc(n.LESS);break;case Sf:n.depthFunc(n.LEQUAL);break;case mI:n.depthFunc(n.EQUAL);break;case vI:n.depthFunc(n.GEQUAL);break;case gI:n.depthFunc(n.GREATER);break;case _I:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){me!==Ue&&(n.clearDepth(Ue),me=Ue)},reset:function(){V=!1,Be=null,Re=null,me=null}}}function c(){let V=!1,Be=null,Re=null,me=null,Ue=null,ot=null,wt=null,nn=null,yn=null;return{setTest:function(Pt){V||(Pt?be(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Pt){Be!==Pt&&!V&&(n.stencilMask(Pt),Be=Pt)},setFunc:function(Pt,hn,Un){(Re!==Pt||me!==hn||Ue!==Un)&&(n.stencilFunc(Pt,hn,Un),Re=Pt,me=hn,Ue=Un)},setOp:function(Pt,hn,Un){(ot!==Pt||wt!==hn||nn!==Un)&&(n.stencilOp(Pt,hn,Un),ot=Pt,wt=hn,nn=Un)},setLocked:function(Pt){V=Pt},setClear:function(Pt){yn!==Pt&&(n.clearStencil(Pt),yn=Pt)},reset:function(){V=!1,Be=null,Re=null,me=null,Ue=null,ot=null,wt=null,nn=null,yn=null}}}const u=new a,d=new s,h=new c,p=new WeakMap,m=new WeakMap;let g={},S={},w=new WeakMap,E=[],y=null,_=!1,b=null,M=null,R=null,U=null,N=null,I=null,ce=null,C=new nt(0,0,0),O=0,oe=!1,ne=null,pe=null,H=null,Q=null,se=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ie>=2);let P=null,k={};const W=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ee=new Bt().fromArray(W),Z=new Bt().fromArray(Y);function _e(V,Be,Re,me){const Ue=new Uint8Array(4),ot=n.createTexture();n.bindTexture(V,ot),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<Re;wt++)i&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(Be,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(Be+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return ot}const ve={};ve[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(n.DEPTH_TEST),d.setFunc(Sf),ge(!1),Me(G0),be(n.CULL_FACE),ue(Po);function be(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Oe(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function ze(V,Be){return S[V]!==Be?(n.bindFramebuffer(V,Be),S[V]=Be,i&&(V===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=Be),V===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=Be)),!0):!1}function j(V,Be){let Re=E,me=!1;if(V)if(Re=w.get(Be),Re===void 0&&(Re=[],w.set(Be,Re)),V.isWebGLMultipleRenderTargets){const Ue=V.texture;if(Re.length!==Ue.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,wt=Ue.length;ot<wt;ot++)Re[ot]=n.COLOR_ATTACHMENT0+ot;Re.length=Ue.length,me=!0}}else Re[0]!==n.COLOR_ATTACHMENT0&&(Re[0]=n.COLOR_ATTACHMENT0,me=!0);else Re[0]!==n.BACK&&(Re[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Dt(V){return y!==V?(n.useProgram(V),y=V,!0):!1}const Ve={[pa]:n.FUNC_ADD,[Z3]:n.FUNC_SUBTRACT,[J3]:n.FUNC_REVERSE_SUBTRACT};if(i)Ve[j0]=n.MIN,Ve[q0]=n.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Ve[j0]=V.MIN_EXT,Ve[q0]=V.MAX_EXT)}const le={[Q3]:n.ZERO,[eI]:n.ONE,[tI]:n.SRC_COLOR,[dm]:n.SRC_ALPHA,[sI]:n.SRC_ALPHA_SATURATE,[oI]:n.DST_COLOR,[rI]:n.DST_ALPHA,[nI]:n.ONE_MINUS_SRC_COLOR,[hm]:n.ONE_MINUS_SRC_ALPHA,[aI]:n.ONE_MINUS_DST_COLOR,[iI]:n.ONE_MINUS_DST_ALPHA,[lI]:n.CONSTANT_COLOR,[uI]:n.ONE_MINUS_CONSTANT_COLOR,[cI]:n.CONSTANT_ALPHA,[fI]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(V,Be,Re,me,Ue,ot,wt,nn,yn,Pt){if(V===Po){_===!0&&(Oe(n.BLEND),_=!1);return}if(_===!1&&(be(n.BLEND),_=!0),V!==K3){if(V!==b||Pt!==oe){if((M!==pa||N!==pa)&&(n.blendEquation(n.FUNC_ADD),M=pa,N=pa),Pt)switch(V){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case W0:n.blendFunc(n.ONE,n.ONE);break;case $0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case X0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case W0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case X0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,U=null,I=null,ce=null,C.set(0,0,0),O=0,b=V,oe=Pt}return}Ue=Ue||Be,ot=ot||Re,wt=wt||me,(Be!==M||Ue!==N)&&(n.blendEquationSeparate(Ve[Be],Ve[Ue]),M=Be,N=Ue),(Re!==R||me!==U||ot!==I||wt!==ce)&&(n.blendFuncSeparate(le[Re],le[me],le[ot],le[wt]),R=Re,U=me,I=ot,ce=wt),(nn.equals(C)===!1||yn!==O)&&(n.blendColor(nn.r,nn.g,nn.b,yn),C.copy(nn),O=yn),b=V,oe=!1}function xe(V,Be){V.side===Hi?Oe(n.CULL_FACE):be(n.CULL_FACE);let Re=V.side===cr;Be&&(Re=!Re),ge(Re),V.blending===Es&&V.transparent===!1?ue(Po):ue(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const me=V.stencilWrite;h.setTest(me),me&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){ne!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),ne=V)}function Me(V){V!==j3?(be(n.CULL_FACE),V!==pe&&(V===G0?n.cullFace(n.BACK):V===q3?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),pe=V}function we(V){V!==H&&(X&&n.lineWidth(V),H=V)}function Ie(V,Be,Re){V?(be(n.POLYGON_OFFSET_FILL),(Q!==Be||se!==Re)&&(n.polygonOffset(Be,Re),Q=Be,se=Re)):Oe(n.POLYGON_OFFSET_FILL)}function Ze(V){V?be(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function D(V){V===void 0&&(V=n.TEXTURE0+re-1),P!==V&&(n.activeTexture(V),P=V)}function T(V,Be,Re){Re===void 0&&(P===null?Re=n.TEXTURE0+re-1:Re=P);let me=k[Re];me===void 0&&(me={type:void 0,texture:void 0},k[Re]=me),(me.type!==V||me.texture!==Be)&&(P!==Re&&(n.activeTexture(Re),P=Re),n.bindTexture(V,Be||ve[V]),me.type=V,me.texture=Be)}function q(){const V=k[P];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(V){ee.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function st(V){Z.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function tt(V,Be){let Re=m.get(Be);Re===void 0&&(Re=new WeakMap,m.set(Be,Re));let me=Re.get(V);me===void 0&&(me=n.getUniformBlockIndex(Be,V.name),Re.set(V,me))}function $e(V,Be){const me=m.get(Be).get(V);p.get(Be)!==me&&(n.uniformBlockBinding(Be,me,V.__bindingPointIndex),p.set(Be,me))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},P=null,k={},S={},w=new WeakMap,E=[],y=null,_=!1,b=null,M=null,R=null,U=null,N=null,I=null,ce=null,C=new nt(0,0,0),O=0,oe=!1,ne=null,pe=null,H=null,Q=null,se=null,ee.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:be,disable:Oe,bindFramebuffer:ze,drawBuffers:j,useProgram:Dt,setBlending:ue,setMaterial:xe,setFlipSided:ge,setCullFace:Me,setLineWidth:we,setPolygonOffset:Ie,setScissorTest:Ze,activeTexture:D,bindTexture:T,unbindTexture:q,compressedTexImage2D:Ae,compressedTexImage3D:ye,texImage2D:Le,texImage3D:Nt,updateUBOMapping:tt,uniformBlockBinding:$e,texStorage2D:lt,texStorage3D:At,texSubImage2D:Ce,texSubImage3D:Ye,compressedTexSubImage2D:De,compressedTexSubImage3D:He,scissor:ft,viewport:st,reset:_t}}function nz(n,e,t,i,a,s,c){const u=a.isWebGL2,d=a.maxTextures,h=a.maxCubemapSize,p=a.maxTextureSize,m=a.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let E;const y=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,T){return _?new OffscreenCanvas(D,T):Tf("canvas")}function M(D,T,q,Ae){let ye=1;if((D.width>Ae||D.height>Ae)&&(ye=Ae/Math.max(D.width,D.height)),ye<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Ce=T?Af:Math.floor,Ye=Ce(ye*D.width),De=Ce(ye*D.height);E===void 0&&(E=b(Ye,De));const He=q?b(Ye,De):E;return He.width=Ye,He.height=De,He.getContext("2d").drawImage(D,0,0,Ye,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Ye+"x"+De+")."),He}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function R(D){return xm(D.width)&&xm(D.height)}function U(D){return u?!1:D.wrapS!==ti||D.wrapT!==ti||D.minFilter!==Rn&&D.minFilter!==Ir}function N(D,T){return D.generateMipmaps&&T&&D.minFilter!==Rn&&D.minFilter!==Ir}function I(D){n.generateMipmap(D)}function ce(D,T,q,Ae,ye=!1){if(u===!1)return T;if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ce=T;if(T===n.RED&&(q===n.FLOAT&&(Ce=n.R32F),q===n.HALF_FLOAT&&(Ce=n.R16F),q===n.UNSIGNED_BYTE&&(Ce=n.R8)),T===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(Ce=n.R8UI),q===n.UNSIGNED_SHORT&&(Ce=n.R16UI),q===n.UNSIGNED_INT&&(Ce=n.R32UI),q===n.BYTE&&(Ce=n.R8I),q===n.SHORT&&(Ce=n.R16I),q===n.INT&&(Ce=n.R32I)),T===n.RG&&(q===n.FLOAT&&(Ce=n.RG32F),q===n.HALF_FLOAT&&(Ce=n.RG16F),q===n.UNSIGNED_BYTE&&(Ce=n.RG8)),T===n.RGBA){const Ye=ye?Ef:zt.getTransfer(Ae);q===n.FLOAT&&(Ce=n.RGBA32F),q===n.HALF_FLOAT&&(Ce=n.RGBA16F),q===n.UNSIGNED_BYTE&&(Ce=Ye===qt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(Ce=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(Ce=n.RGB5_A1)}return(Ce===n.R16F||Ce===n.R32F||Ce===n.RG16F||Ce===n.RG32F||Ce===n.RGBA16F||Ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function C(D,T,q){return N(D,q)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Ir?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function O(D){return D===Rn||D===Y0||D===np?n.NEAREST:n.LINEAR}function oe(D){const T=D.target;T.removeEventListener("dispose",oe),pe(T),T.isVideoTexture&&w.delete(T)}function ne(D){const T=D.target;T.removeEventListener("dispose",ne),Q(T)}function pe(D){const T=i.get(D);if(T.__webglInit===void 0)return;const q=D.source,Ae=y.get(q);if(Ae){const ye=Ae[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(D),Object.keys(Ae).length===0&&y.delete(q)}i.remove(D)}function H(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const q=D.source,Ae=y.get(q);delete Ae[T.__cacheKey],c.memory.textures--}function Q(D){const T=D.texture,q=i.get(D),Ae=i.get(T);if(Ae.__webglTexture!==void 0&&(n.deleteTexture(Ae.__webglTexture),c.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(q.__webglFramebuffer[ye]))for(let Ce=0;Ce<q.__webglFramebuffer[ye].length;Ce++)n.deleteFramebuffer(q.__webglFramebuffer[ye][Ce]);else n.deleteFramebuffer(q.__webglFramebuffer[ye]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ye])}else{if(Array.isArray(q.__webglFramebuffer))for(let ye=0;ye<q.__webglFramebuffer.length;ye++)n.deleteFramebuffer(q.__webglFramebuffer[ye]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ye=0;ye<q.__webglColorRenderbuffer.length;ye++)q.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ye]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ye=0,Ce=T.length;ye<Ce;ye++){const Ye=i.get(T[ye]);Ye.__webglTexture&&(n.deleteTexture(Ye.__webglTexture),c.memory.textures--),i.remove(T[ye])}i.remove(T),i.remove(D)}let se=0;function re(){se=0}function X(){const D=se;return D>=d&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+d),se+=1,D}function ie(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function $(D,T){const q=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const Ae=D.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,D,T);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+T)}function P(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){be(q,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+T)}function k(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){be(q,D,T);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+T)}function W(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){Oe(q,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+T)}const Y={[vm]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[gm]:n.MIRRORED_REPEAT},ee={[Rn]:n.NEAREST,[Y0]:n.NEAREST_MIPMAP_NEAREST,[np]:n.NEAREST_MIPMAP_LINEAR,[Ir]:n.LINEAR,[TI]:n.LINEAR_MIPMAP_NEAREST,[ql]:n.LINEAR_MIPMAP_LINEAR},Z={[kI]:n.NEVER,[WI]:n.ALWAYS,[zI]:n.LESS,[$w]:n.LEQUAL,[BI]:n.EQUAL,[GI]:n.GEQUAL,[HI]:n.GREATER,[VI]:n.NOTEQUAL};function _e(D,T,q){if(q?(n.texParameteri(D,n.TEXTURE_WRAP_S,Y[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Y[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Y[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ee[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ee[T.minFilter])):(n.texParameteri(D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==ti||T.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(D,n.TEXTURE_MAG_FILTER,O(T.magFilter)),n.texParameteri(D,n.TEXTURE_MIN_FILTER,O(T.minFilter)),T.minFilter!==Rn&&T.minFilter!==Ir&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Rn||T.minFilter!==np&&T.minFilter!==ql||T.type===Vi&&e.has("OES_texture_float_linear")===!1||u===!1&&T.type===Yl&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(D,Ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ve(D,T){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",oe));const Ae=T.source;let ye=y.get(Ae);ye===void 0&&(ye={},y.set(Ae,ye));const Ce=ie(T);if(Ce!==D.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ye[Ce].usedTimes++;const Ye=ye[D.__cacheKey];Ye!==void 0&&(ye[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&H(T)),D.__cacheKey=Ce,D.__webglTexture=ye[Ce].texture}return q}function be(D,T,q){let Ae=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ae=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ae=n.TEXTURE_3D);const ye=ve(D,T),Ce=T.source;t.bindTexture(Ae,D.__webglTexture,n.TEXTURE0+q);const Ye=i.get(Ce);if(Ce.version!==Ye.__version||ye===!0){t.activeTexture(n.TEXTURE0+q);const De=zt.getPrimaries(zt.workingColorSpace),He=T.colorSpace===Nr?null:zt.getPrimaries(T.colorSpace),lt=T.colorSpace===Nr||De===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const At=U(T)&&R(T.image)===!1;let Le=M(T.image,At,!1,p);Le=Ze(T,Le);const Nt=R(Le)||u,ft=s.convert(T.format,T.colorSpace);let st=s.convert(T.type),tt=ce(T.internalFormat,ft,st,T.colorSpace,T.isVideoTexture);_e(Ae,T,Nt);let $e;const _t=T.mipmaps,V=u&&T.isVideoTexture!==!0&&tt!==Vw,Be=Ye.__version===void 0||ye===!0,Re=C(T,Le,Nt);if(T.isDepthTexture)tt=n.DEPTH_COMPONENT,u?T.type===Vi?tt=n.DEPTH_COMPONENT32F:T.type===bo?tt=n.DEPTH_COMPONENT24:T.type===ya?tt=n.DEPTH24_STENCIL8:tt=n.DEPTH_COMPONENT16:T.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===xa&&tt===n.DEPTH_COMPONENT&&T.type!==Mv&&T.type!==bo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=bo,st=s.convert(T.type)),T.format===Us&&tt===n.DEPTH_COMPONENT&&(tt=n.DEPTH_STENCIL,T.type!==ya&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ya,st=s.convert(T.type))),Be&&(V?t.texStorage2D(n.TEXTURE_2D,1,tt,Le.width,Le.height):t.texImage2D(n.TEXTURE_2D,0,tt,Le.width,Le.height,0,ft,st,null));else if(T.isDataTexture)if(_t.length>0&&Nt){V&&Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,ft,st,$e.data);T.generateMipmaps=!1}else V?(Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,Le.width,Le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le.width,Le.height,ft,st,Le.data)):t.texImage2D(n.TEXTURE_2D,0,tt,Le.width,Le.height,0,ft,st,Le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,_t[0].width,_t[0].height,Le.depth);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],T.format!==Ur?ft!==null?V?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Le.depth,ft,$e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,tt,$e.width,$e.height,Le.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Le.depth,ft,st,$e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,tt,$e.width,$e.height,Le.depth,0,ft,st,$e.data)}else{V&&Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],T.format!==Ur?ft!==null?V?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,$e.data):t.compressedTexImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,ft,st,$e.data)}else if(T.isDataArrayTexture)V?(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,Le.width,Le.height,Le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Le.width,Le.height,Le.depth,ft,st,Le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,Le.width,Le.height,Le.depth,0,ft,st,Le.data);else if(T.isData3DTexture)V?(Be&&t.texStorage3D(n.TEXTURE_3D,Re,tt,Le.width,Le.height,Le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Le.width,Le.height,Le.depth,ft,st,Le.data)):t.texImage3D(n.TEXTURE_3D,0,tt,Le.width,Le.height,Le.depth,0,ft,st,Le.data);else if(T.isFramebufferTexture){if(Be)if(V)t.texStorage2D(n.TEXTURE_2D,Re,tt,Le.width,Le.height);else{let me=Le.width,Ue=Le.height;for(let ot=0;ot<Re;ot++)t.texImage2D(n.TEXTURE_2D,ot,tt,me,Ue,0,ft,st,null),me>>=1,Ue>>=1}}else if(_t.length>0&&Nt){V&&Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ft,st,$e):t.texImage2D(n.TEXTURE_2D,me,tt,ft,st,$e);T.generateMipmaps=!1}else V?(Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,Le.width,Le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,st,Le)):t.texImage2D(n.TEXTURE_2D,0,tt,ft,st,Le);N(T,Nt)&&I(Ae),Ye.__version=Ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Oe(D,T,q){if(T.image.length!==6)return;const Ae=ve(D,T),ye=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+q);const Ce=i.get(ye);if(ye.version!==Ce.__version||Ae===!0){t.activeTexture(n.TEXTURE0+q);const Ye=zt.getPrimaries(zt.workingColorSpace),De=T.colorSpace===Nr?null:zt.getPrimaries(T.colorSpace),He=T.colorSpace===Nr||Ye===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let me=0;me<6;me++)!lt&&!At?Le[me]=M(T.image[me],!1,!0,h):Le[me]=At?T.image[me].image:T.image[me],Le[me]=Ze(T,Le[me]);const Nt=Le[0],ft=R(Nt)||u,st=s.convert(T.format,T.colorSpace),tt=s.convert(T.type),$e=ce(T.internalFormat,st,tt,T.colorSpace),_t=u&&T.isVideoTexture!==!0,V=Ce.__version===void 0||Ae===!0;let Be=C(T,Nt,ft);_e(n.TEXTURE_CUBE_MAP,T,ft);let Re;if(lt){_t&&V&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,$e,Nt.width,Nt.height);for(let me=0;me<6;me++){Re=Le[me].mipmaps;for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];T.format!==Ur?st!==null?_t?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,tt,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,st,tt,ot.data)}}}else{Re=T.mipmaps,_t&&V&&(Re.length>0&&Be++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,$e,Le[0].width,Le[0].height));for(let me=0;me<6;me++)if(At){_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Le[me].width,Le[me].height,st,tt,Le[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,Le[me].width,Le[me].height,0,st,tt,Le[me].data);for(let Ue=0;Ue<Re.length;Ue++){const wt=Re[Ue].image[me].image;_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,wt.width,wt.height,st,tt,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,wt.width,wt.height,0,st,tt,wt.data)}}else{_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,st,tt,Le[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,st,tt,Le[me]);for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,st,tt,ot.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,st,tt,ot.image[me])}}}N(T,ft)&&I(n.TEXTURE_CUBE_MAP),Ce.__version=ye.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ze(D,T,q,Ae,ye,Ce){const Ye=s.convert(q.format,q.colorSpace),De=s.convert(q.type),He=ce(q.internalFormat,Ye,De,q.colorSpace);if(!i.get(T).__hasExternalTextures){const At=Math.max(1,T.width>>Ce),Le=Math.max(1,T.height>>Ce);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,He,At,Le,T.depth,0,Ye,De,null):t.texImage2D(ye,Ce,He,At,Le,0,Ye,De,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ye,i.get(q).__webglTexture,0,Me(T)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ye,i.get(q).__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(D,T,q){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let Ae=u===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||we(T)){const ye=T.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Vi?Ae=n.DEPTH_COMPONENT32F:ye.type===bo&&(Ae=n.DEPTH_COMPONENT24));const Ce=Me(T);we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Ae,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const Ae=Me(T);q&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{const Ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ye=0;ye<Ae.length;ye++){const Ce=Ae[ye],Ye=s.convert(Ce.format,Ce.colorSpace),De=s.convert(Ce.type),He=ce(Ce.internalFormat,Ye,De,Ce.colorSpace),lt=Me(T);q&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,He,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,He,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,He,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Ae=i.get(T.depthTexture).__webglTexture,ye=Me(T);if(T.depthTexture.format===xa)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0);else if(T.depthTexture.format===Us)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function Ve(D){const T=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Dt(T.__webglFramebuffer,D)}else if(q){T.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Ae]),T.__webglDepthbuffer[Ae]=n.createRenderbuffer(),j(T.__webglDepthbuffer[Ae],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),j(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(D,T,q){const Ae=i.get(D);T!==void 0&&ze(Ae.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ve(D)}function ue(D){const T=D.texture,q=i.get(D),Ae=i.get(T);D.addEventListener("dispose",ne),D.isWebGLMultipleRenderTargets!==!0&&(Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture()),Ae.__version=T.version,c.memory.textures++);const ye=D.isWebGLCubeRenderTarget===!0,Ce=D.isWebGLMultipleRenderTargets===!0,Ye=R(D)||u;if(ye){q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[De]=[];for(let He=0;He<T.mipmaps.length;He++)q.__webglFramebuffer[De][He]=n.createFramebuffer()}else q.__webglFramebuffer[De]=n.createFramebuffer()}else{if(u&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)q.__webglFramebuffer[De]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ce)if(a.drawBuffers){const De=D.texture;for(let He=0,lt=De.length;He<lt;He++){const At=i.get(De[He]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&D.samples>0&&we(D)===!1){const De=Ce?T:[T];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let He=0;He<De.length;He++){const lt=De[He];q.__webglColorRenderbuffer[He]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[He]);const At=s.convert(lt.format,lt.colorSpace),Le=s.convert(lt.type),Nt=ce(lt.internalFormat,At,Le,lt.colorSpace,D.isXRRenderTarget===!0),ft=Me(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Nt,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,q.__webglColorRenderbuffer[He])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),j(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,Ae.__webglTexture),_e(n.TEXTURE_CUBE_MAP,T,Ye);for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)ze(q.__webglFramebuffer[De][He],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,He);else ze(q.__webglFramebuffer[De],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);N(T,Ye)&&I(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){const De=D.texture;for(let He=0,lt=De.length;He<lt;He++){const At=De[He],Le=i.get(At);t.bindTexture(n.TEXTURE_2D,Le.__webglTexture),_e(n.TEXTURE_2D,At,Ye),ze(q.__webglFramebuffer,D,At,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,0),N(At,Ye)&&I(n.TEXTURE_2D)}t.unbindTexture()}else{let De=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(u?De=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,Ae.__webglTexture),_e(De,T,Ye),u&&T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)ze(q.__webglFramebuffer[He],D,T,n.COLOR_ATTACHMENT0,De,He);else ze(q.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,De,0);N(T,Ye)&&I(De),t.unbindTexture()}D.depthBuffer&&Ve(D)}function xe(D){const T=R(D)||u,q=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Ae=0,ye=q.length;Ae<ye;Ae++){const Ce=q[Ae];if(N(Ce,T)){const Ye=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,De=i.get(Ce).__webglTexture;t.bindTexture(Ye,De),I(Ye),t.unbindTexture()}}}function ge(D){if(u&&D.samples>0&&we(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],q=D.width,Ae=D.height;let ye=n.COLOR_BUFFER_BIT;const Ce=[],Ye=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(D),He=D.isWebGLMultipleRenderTargets===!0;if(He)for(let lt=0;lt<T.length;lt++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let lt=0;lt<T.length;lt++){Ce.push(n.COLOR_ATTACHMENT0+lt),D.depthBuffer&&Ce.push(Ye);const At=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(At===!1&&(D.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),He&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]),At===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ye])),He){const Le=i.get(T[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,q,Ae,0,0,q,Ae,ye,n.NEAREST),S&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),He)for(let lt=0;lt<T.length;lt++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]);const At=i.get(T[lt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,At,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Me(D){return Math.min(m,D.samples)}function we(D){const T=i.get(D);return u&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ie(D){const T=c.render.frame;w.get(D)!==T&&(w.set(D,T),D.update())}function Ze(D,T){const q=D.colorSpace,Ae=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===ym||q!==Wi&&q!==Nr&&(zt.getTransfer(q)===qt?u===!1?e.has("EXT_sRGB")===!0&&Ae===Ur?(D.format=ym,D.minFilter=Ir,D.generateMipmaps=!1):T=qw.sRGBToLinear(T):(Ae!==Ur||ye!==Do)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=X,this.resetTextureUnits=re,this.setTexture2D=$,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=we}function rz(n,e,t){const i=t.isWebGL2;function a(s,c=Nr){let u;const d=zt.getTransfer(c);if(s===Do)return n.UNSIGNED_BYTE;if(s===Ow)return n.UNSIGNED_SHORT_4_4_4_4;if(s===kw)return n.UNSIGNED_SHORT_5_5_5_1;if(s===bI)return n.BYTE;if(s===CI)return n.SHORT;if(s===Mv)return n.UNSIGNED_SHORT;if(s===Fw)return n.INT;if(s===bo)return n.UNSIGNED_INT;if(s===Vi)return n.FLOAT;if(s===Yl)return i?n.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(s===RI)return n.ALPHA;if(s===Ur)return n.RGBA;if(s===PI)return n.LUMINANCE;if(s===LI)return n.LUMINANCE_ALPHA;if(s===xa)return n.DEPTH_COMPONENT;if(s===Us)return n.DEPTH_STENCIL;if(s===ym)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(s===DI)return n.RED;if(s===zw)return n.RED_INTEGER;if(s===II)return n.RG;if(s===Bw)return n.RG_INTEGER;if(s===Hw)return n.RGBA_INTEGER;if(s===rp||s===ip||s===op||s===ap)if(d===qt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===rp)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ip)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===op)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ap)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===rp)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ip)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===op)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ap)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===K0||s===Z0||s===J0||s===Q0)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===K0)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Z0)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===J0)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Q0)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vw)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ey||s===ty)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===ey)return d===qt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ty)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ny||s===ry||s===iy||s===oy||s===ay||s===sy||s===ly||s===uy||s===cy||s===fy||s===dy||s===hy||s===py||s===my)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ny)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ry)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===iy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ay)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ly)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===py)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===my)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sp||s===vy||s===gy)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===sp)return d===qt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vy)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gy)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===UI||s===_y||s===yy||s===xy)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===sp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===_y)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yy)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xy)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ya?i?n.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class iz extends xr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fl extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oz={type:"move"};class Pp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,i),_=this._getHandJoint(h,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),S=.02,w=.005;h.inputState.pinching&&g>S+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(oz)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class az extends Ca{constructor(e,t){super();const i=this;let a=null,s=1,c=null,u="local-floor",d=1,h=null,p=null,m=null,g=null,S=null,w=null;const E=t.getContextAttributes();let y=null,_=null;const b=[],M=[],R=new ht;let U=null;const N=new xr;N.layers.enable(1),N.viewport=new Bt;const I=new xr;I.layers.enable(2),I.viewport=new Bt;const ce=[N,I],C=new iz;C.layers.enable(1),C.layers.enable(2);let O=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=b[W];return Y===void 0&&(Y=new Pp,b[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=b[W];return Y===void 0&&(Y=new Pp,b[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=b[W];return Y===void 0&&(Y=new Pp,b[W]=Y),Y.getHandSpace()};function ne(W){const Y=M.indexOf(W.inputSource);if(Y===-1)return;const ee=b[Y];ee!==void 0&&(ee.update(W.inputSource,W.frame,h||c),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function pe(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",H);for(let W=0;W<b.length;W++){const Y=M[W];Y!==null&&(M[W]=null,b[W].disconnect(Y))}O=null,oe=null,e.setRenderTarget(y),S=null,g=null,m=null,a=null,_=null,k.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return m},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(a,t,Y),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new Ea(S.framebufferWidth,S.framebufferHeight,{format:Ur,type:Do,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let Y=null,ee=null,Z=null;E.depth&&(Z=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=E.stencil?Us:xa,ee=E.stencil?ya:bo);const _e={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};m=new XRWebGLBinding(a,t),g=m.createProjectionLayer(_e),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),_=new Ea(g.textureWidth,g.textureHeight,{format:Ur,type:Do,depthTexture:new aM(g.textureWidth,g.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const ve=e.properties.get(_);ve.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),k.setContext(a),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(W){for(let Y=0;Y<W.removed.length;Y++){const ee=W.removed[Y],Z=M.indexOf(ee);Z>=0&&(M[Z]=null,b[Z].disconnect(ee))}for(let Y=0;Y<W.added.length;Y++){const ee=W.added[Y];let Z=M.indexOf(ee);if(Z===-1){for(let ve=0;ve<b.length;ve++)if(ve>=M.length){M.push(ee),Z=ve;break}else if(M[ve]===null){M[ve]=ee,Z=ve;break}if(Z===-1)break}const _e=b[Z];_e&&_e.connect(ee)}}const Q=new B,se=new B;function re(W,Y,ee){Q.setFromMatrixPosition(Y.matrixWorld),se.setFromMatrixPosition(ee.matrixWorld);const Z=Q.distanceTo(se),_e=Y.projectionMatrix.elements,ve=ee.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Oe=_e[14]/(_e[10]+1),ze=(_e[9]+1)/_e[5],j=(_e[9]-1)/_e[5],Dt=(_e[8]-1)/_e[0],Ve=(ve[8]+1)/ve[0],le=be*Dt,ue=be*Ve,xe=Z/(-Dt+Ve),ge=xe*-Dt;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Me=be+xe,we=Oe+xe,Ie=le-ge,Ze=ue+(Z-ge),D=ze*Oe/we*Me,T=j*Oe/we*Me;W.projectionMatrix.makePerspective(Ie,Ze,D,T,Me,we),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;C.near=I.near=N.near=W.near,C.far=I.far=N.far=W.far,(O!==C.near||oe!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,oe=C.far);const Y=W.parent,ee=C.cameras;X(C,Y);for(let Z=0;Z<ee.length;Z++)X(ee[Z],Y);ee.length===2?re(C,N,I):C.projectionMatrix.copy(N.projectionMatrix),ie(W,C,Y)};function ie(W,Y,ee){ee===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(W){d=W,g!==null&&(g.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)};let $=null;function P(W,Y){if(p=Y.getViewerPose(h||c),w=Y,p!==null){const ee=p.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let Z=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,Z=!0);for(let _e=0;_e<ee.length;_e++){const ve=ee[_e];let be=null;if(S!==null)be=S.getViewport(ve);else{const ze=m.getViewSubImage(g,ve);be=ze.viewport,_e===0&&(e.setRenderTargetTextures(_,ze.colorTexture,g.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(_))}let Oe=ce[_e];Oe===void 0&&(Oe=new xr,Oe.layers.enable(_e),Oe.viewport=new Bt,ce[_e]=Oe),Oe.matrix.fromArray(ve.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ve.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(C.matrix.copy(Oe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Z===!0&&C.cameras.push(Oe)}}for(let ee=0;ee<b.length;ee++){const Z=M[ee],_e=b[ee];Z!==null&&_e!==void 0&&_e.update(Z,Y,h||c)}$&&$(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),w=null}const k=new oM;k.setAnimationLoop(P),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function sz(n,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function i(y,_){_.color.getRGB(y.fogColor.value,nM(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,b,M,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),m(y,_)):_.isMeshPhongMaterial?(s(y,_),p(y,_)):_.isMeshStandardMaterial?(s(y,_),g(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(s(y,_),w(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),E(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&u(y,_)):_.isPointsMaterial?d(y,_,b,M):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===cr&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===cr&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const b=e.get(_).envMap;if(b&&(y.envMap.value=b,y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*M,t(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function u(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function d(y,_,b,M){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*b,y.scale.value=M*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function m(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,b){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===cr&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const b=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function lz(n,e,t,i){let a={},s={},c=[];const u=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(b,M){const R=M.program;i.uniformBlockBinding(b,R)}function h(b,M){let R=a[b.id];R===void 0&&(w(b),R=p(b),a[b.id]=R,b.addEventListener("dispose",y));const U=M.program;i.updateUBOMapping(b,U);const N=e.render.frame;s[b.id]!==N&&(g(b),s[b.id]=N)}function p(b){const M=m();b.__bindingPointIndex=M;const R=n.createBuffer(),U=b.__size,N=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,U,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,R),R}function m(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const M=a[b.id],R=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let N=0,I=R.length;N<I;N++){const ce=R[N];if(S(ce,N,U)===!0){const C=ce.__offset,O=Array.isArray(ce.value)?ce.value:[ce.value];let oe=0;for(let ne=0;ne<O.length;ne++){const pe=O[ne],H=E(pe);typeof pe=="number"?(ce.__data[0]=pe,n.bufferSubData(n.UNIFORM_BUFFER,C+oe,ce.__data)):pe.isMatrix3?(ce.__data[0]=pe.elements[0],ce.__data[1]=pe.elements[1],ce.__data[2]=pe.elements[2],ce.__data[3]=pe.elements[0],ce.__data[4]=pe.elements[3],ce.__data[5]=pe.elements[4],ce.__data[6]=pe.elements[5],ce.__data[7]=pe.elements[0],ce.__data[8]=pe.elements[6],ce.__data[9]=pe.elements[7],ce.__data[10]=pe.elements[8],ce.__data[11]=pe.elements[0]):(pe.toArray(ce.__data,oe),oe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,ce.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(b,M,R){const U=b.value;if(R[M]===void 0){if(typeof U=="number")R[M]=U;else{const N=Array.isArray(U)?U:[U],I=[];for(let ce=0;ce<N.length;ce++)I.push(N[ce].clone());R[M]=I}return!0}else if(typeof U=="number"){if(R[M]!==U)return R[M]=U,!0}else{const N=Array.isArray(R[M])?R[M]:[R[M]],I=Array.isArray(U)?U:[U];for(let ce=0;ce<N.length;ce++){const C=N[ce];if(C.equals(I[ce])===!1)return C.copy(I[ce]),!0}}return!1}function w(b){const M=b.uniforms;let R=0;const U=16;let N=0;for(let I=0,ce=M.length;I<ce;I++){const C=M[I],O={boundary:0,storage:0},oe=Array.isArray(C.value)?C.value:[C.value];for(let ne=0,pe=oe.length;ne<pe;ne++){const H=oe[ne],Q=E(H);O.boundary+=Q.boundary,O.storage+=Q.storage}if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=R,I>0){N=R%U;const ne=U-N;N!==0&&ne-O.boundary<0&&(R+=U-N,C.__offset=R)}R+=O.storage}return N=R%U,N>0&&(R+=U-N),b.__size=R,b.__cache={},this}function E(b){const M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function y(b){const M=b.target;M.removeEventListener("dispose",y);const R=c.indexOf(M.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete s[M.id]}function _(){for(const b in a)n.deleteBuffer(a[b]);c=[],a={},s={}}return{bind:d,update:h,dispose:_}}class Em{constructor(e={}){const{canvas:t=oU(),context:i=null,depth:a=!0,stencil:s=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=c;const S=new Uint32Array(4),w=new Int32Array(4);let E=null,y=null;const _=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this._useLegacyLights=!1,this.toneMapping=Lo,this.toneMappingExposure=1;const M=this;let R=!1,U=0,N=0,I=null,ce=-1,C=null;const O=new Bt,oe=new Bt;let ne=null;const pe=new nt(0);let H=0,Q=t.width,se=t.height,re=1,X=null,ie=null;const $=new Bt(0,0,Q,se),P=new Bt(0,0,Q,se);let k=!1;const W=new td;let Y=!1,ee=!1,Z=null;const _e=new $t,ve=new ht,be=new B,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return I===null?re:1}let j=i;function Dt(L,J){for(let de=0;de<L.length;de++){const he=L[de],fe=t.getContext(he,J);if(fe!==null)return fe}return null}try{const L={alpha:!0,depth:a,stencil:s,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Be,!1),j===null){const J=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&J.shift(),j=Dt(J,L),j===null)throw Dt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ve,le,ue,xe,ge,Me,we,Ie,Ze,D,T,q,Ae,ye,Ce,Ye,De,He,lt,At,Le,Nt,ft,st;function tt(){Ve=new yO(j),le=new dO(j,Ve,e),Ve.init(le),Nt=new rz(j,Ve,le),ue=new tz(j,Ve,le),xe=new EO(j),ge=new Hk,Me=new nz(j,Ve,ue,ge,le,Nt,xe),we=new pO(M),Ie=new _O(M),Ze=new RU(j,le),ft=new cO(j,Ve,Ze,le),D=new xO(j,Ze,xe,ft),T=new TO(j,D,Ze,xe),lt=new AO(j,le,Me),Ye=new hO(ge),q=new Bk(M,we,Ie,Ve,le,ft,Ye),Ae=new sz(M,ge),ye=new Gk,Ce=new Yk(Ve,le),He=new uO(M,we,Ie,ue,T,g,d),De=new ez(M,T,le),st=new lz(j,xe,le,ue),At=new fO(j,Ve,xe,le),Le=new SO(j,Ve,xe,le),xe.programs=q.programs,M.capabilities=le,M.extensions=Ve,M.properties=ge,M.renderLists=ye,M.shadowMap=De,M.state=ue,M.info=xe}tt();const $e=new az(M,j);this.xr=$e,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=Ve.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ve.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(L){L!==void 0&&(re=L,this.setSize(Q,se,!1))},this.getSize=function(L){return L.set(Q,se)},this.setSize=function(L,J,de=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=L,se=J,t.width=Math.floor(L*re),t.height=Math.floor(J*re),de===!0&&(t.style.width=L+"px",t.style.height=J+"px"),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(Q*re,se*re).floor()},this.setDrawingBufferSize=function(L,J,de){Q=L,se=J,re=de,t.width=Math.floor(L*de),t.height=Math.floor(J*de),this.setViewport(0,0,L,J)},this.getCurrentViewport=function(L){return L.copy(O)},this.getViewport=function(L){return L.copy($)},this.setViewport=function(L,J,de,he){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,J,de,he),ue.viewport(O.copy($).multiplyScalar(re).floor())},this.getScissor=function(L){return L.copy(P)},this.setScissor=function(L,J,de,he){L.isVector4?P.set(L.x,L.y,L.z,L.w):P.set(L,J,de,he),ue.scissor(oe.copy(P).multiplyScalar(re).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(L){ue.setScissorTest(k=L)},this.setOpaqueSort=function(L){X=L},this.setTransparentSort=function(L){ie=L},this.getClearColor=function(L){return L.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(L=!0,J=!0,de=!0){let he=0;if(L){let fe=!1;if(I!==null){const Ge=I.texture.format;fe=Ge===Hw||Ge===Bw||Ge===zw}if(fe){const Ge=I.texture.type,et=Ge===Do||Ge===bo||Ge===Mv||Ge===ya||Ge===Ow||Ge===kw,at=He.getClearColor(),Xe=He.getClearAlpha(),vt=at.r,dt=at.g,pt=at.b;et?(S[0]=vt,S[1]=dt,S[2]=pt,S[3]=Xe,j.clearBufferuiv(j.COLOR,0,S)):(w[0]=vt,w[1]=dt,w[2]=pt,w[3]=Xe,j.clearBufferiv(j.COLOR,0,w))}else he|=j.COLOR_BUFFER_BIT}J&&(he|=j.DEPTH_BUFFER_BIT),de&&(he|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ye.dispose(),Ce.dispose(),ge.dispose(),we.dispose(),Ie.dispose(),T.dispose(),ft.dispose(),st.dispose(),q.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",yn),$e.removeEventListener("sessionend",Pt),Z&&(Z.dispose(),Z=null),hn.stop()};function _t(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const L=xe.autoReset,J=De.enabled,de=De.autoUpdate,he=De.needsUpdate,fe=De.type;tt(),xe.autoReset=L,De.enabled=J,De.autoUpdate=de,De.needsUpdate=he,De.type=fe}function Be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Re(L){const J=L.target;J.removeEventListener("dispose",Re),me(J)}function me(L){Ue(L),ge.remove(L)}function Ue(L){const J=ge.get(L).programs;J!==void 0&&(J.forEach(function(de){q.releaseProgram(de)}),L.isShaderMaterial&&q.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,de,he,fe,Ge){J===null&&(J=Oe);const et=fe.isMesh&&fe.matrixWorld.determinant()<0,at=ld(L,J,de,he,fe);ue.setMaterial(he,et);let Xe=de.index,vt=1;if(he.wireframe===!0){if(Xe=D.getWireframeAttribute(de),Xe===void 0)return;vt=2}const dt=de.drawRange,pt=de.attributes.position;let Vt=dt.start*vt,Xn=(dt.start+dt.count)*vt;Ge!==null&&(Vt=Math.max(Vt,Ge.start*vt),Xn=Math.min(Xn,(Ge.start+Ge.count)*vt)),Xe!==null?(Vt=Math.max(Vt,0),Xn=Math.min(Xn,Xe.count)):pt!=null&&(Vt=Math.max(Vt,0),Xn=Math.min(Xn,pt.count));const an=Xn-Vt;if(an<0||an===1/0)return;ft.setup(fe,he,at,de,Xe);let Qn,Tt=At;if(Xe!==null&&(Qn=Ze.get(Xe),Tt=Le,Tt.setIndex(Qn)),fe.isMesh)he.wireframe===!0?(ue.setLineWidth(he.wireframeLinewidth*ze()),Tt.setMode(j.LINES)):Tt.setMode(j.TRIANGLES);else if(fe.isLine){let yt=he.linewidth;yt===void 0&&(yt=1),ue.setLineWidth(yt*ze()),fe.isLineSegments?Tt.setMode(j.LINES):fe.isLineLoop?Tt.setMode(j.LINE_LOOP):Tt.setMode(j.LINE_STRIP)}else fe.isPoints?Tt.setMode(j.POINTS):fe.isSprite&&Tt.setMode(j.TRIANGLES);if(fe.isBatchedMesh)Tt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else if(fe.isInstancedMesh)Tt.renderInstances(Vt,an,fe.count);else if(de.isInstancedBufferGeometry){const yt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,jn=Math.min(de.instanceCount,yt);Tt.renderInstances(Vt,an,jn)}else Tt.render(Vt,an)};function ot(L,J,de){L.transparent===!0&&L.side===Hi&&L.forceSinglePass===!1?(L.side=cr,L.needsUpdate=!0,ji(L,J,de),L.side=Fo,L.needsUpdate=!0,ji(L,J,de),L.side=Hi):ji(L,J,de)}this.compile=function(L,J,de=null){de===null&&(de=L),y=Ce.get(de),y.init(),b.push(y),de.traverseVisible(function(fe){fe.isLight&&fe.layers.test(J.layers)&&(y.pushLight(fe),fe.castShadow&&y.pushShadow(fe))}),L!==de&&L.traverseVisible(function(fe){fe.isLight&&fe.layers.test(J.layers)&&(y.pushLight(fe),fe.castShadow&&y.pushShadow(fe))}),y.setupLights(M._useLegacyLights);const he=new Set;return L.traverse(function(fe){const Ge=fe.material;if(Ge)if(Array.isArray(Ge))for(let et=0;et<Ge.length;et++){const at=Ge[et];ot(at,de,fe),he.add(at)}else ot(Ge,de,fe),he.add(Ge)}),b.pop(),y=null,he},this.compileAsync=function(L,J,de=null){const he=this.compile(L,J,de);return new Promise(fe=>{function Ge(){if(he.forEach(function(et){ge.get(et).currentProgram.isReady()&&he.delete(et)}),he.size===0){fe(L);return}setTimeout(Ge,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let wt=null;function nn(L){wt&&wt(L)}function yn(){hn.stop()}function Pt(){hn.start()}const hn=new oM;hn.setAnimationLoop(nn),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(L){wt=L,$e.setAnimationLoop(L),L===null?hn.stop():hn.start()},$e.addEventListener("sessionstart",yn),$e.addEventListener("sessionend",Pt),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(J),J=$e.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,J,I),y=Ce.get(L,b.length),y.init(),b.push(y),_e.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W.setFromProjectionMatrix(_e),ee=this.localClippingEnabled,Y=Ye.init(this.clippingPlanes,ee),E=ye.get(L,_.length),E.init(),_.push(E),Un(L,J,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(X,ie),this.info.render.frame++,Y===!0&&Ye.beginShadows();const de=y.state.shadowsArray;if(De.render(de,L,J),Y===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(E,L),y.setupLights(M._useLegacyLights),J.isArrayCamera){const he=J.cameras;for(let fe=0,Ge=he.length;fe<Ge;fe++){const et=he[fe];xu(E,L,et,et.viewport)}}else xu(E,L,J);I!==null&&(Me.updateMultisampleRenderTarget(I),Me.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(M,L,J),ft.resetDefaultState(),ce=-1,C=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function Un(L,J,de,he){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)de=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||W.intersectsSprite(L)){he&&be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(_e);const et=T.update(L),at=L.material;at.visible&&E.push(L,et,at,de,be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||W.intersectsObject(L))){const et=T.update(L),at=L.material;if(he&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),be.copy(L.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),be.copy(et.boundingSphere.center)),be.applyMatrix4(L.matrixWorld).applyMatrix4(_e)),Array.isArray(at)){const Xe=et.groups;for(let vt=0,dt=Xe.length;vt<dt;vt++){const pt=Xe[vt],Vt=at[pt.materialIndex];Vt&&Vt.visible&&E.push(L,et,Vt,de,be.z,pt)}}else at.visible&&E.push(L,et,at,de,be.z,null)}}const Ge=L.children;for(let et=0,at=Ge.length;et<at;et++)Un(Ge[et],J,de,he)}function xu(L,J,de,he){const fe=L.opaque,Ge=L.transmissive,et=L.transparent;y.setupLightsView(de),Y===!0&&Ye.setGlobalState(M.clippingPlanes,de),Ge.length>0&&Vo(fe,Ge,J,de),he&&ue.viewport(O.copy(he)),fe.length>0&&wi(fe,J,de),Ge.length>0&&wi(Ge,J,de),et.length>0&&wi(et,J,de),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Vo(L,J,de,he){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;const Ge=le.isWebGL2;Z===null&&(Z=new Ea(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?Yl:Do,minFilter:ql,samples:Ge?4:0})),M.getDrawingBufferSize(ve),Ge?Z.setSize(ve.x,ve.y):Z.setSize(Af(ve.x),Af(ve.y));const et=M.getRenderTarget();M.setRenderTarget(Z),M.getClearColor(pe),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const at=M.toneMapping;M.toneMapping=Lo,wi(L,de,he),Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z);let Xe=!1;for(let vt=0,dt=J.length;vt<dt;vt++){const pt=J[vt],Vt=pt.object,Xn=pt.geometry,an=pt.material,Qn=pt.group;if(an.side===Hi&&Vt.layers.test(he.layers)){const Tt=an.side;an.side=cr,an.needsUpdate=!0,Go(Vt,de,he,Xn,an,Qn),an.side=Tt,an.needsUpdate=!0,Xe=!0}}Xe===!0&&(Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z)),M.setRenderTarget(et),M.setClearColor(pe,H),M.toneMapping=at}function wi(L,J,de){const he=J.isScene===!0?J.overrideMaterial:null;for(let fe=0,Ge=L.length;fe<Ge;fe++){const et=L[fe],at=et.object,Xe=et.geometry,vt=he===null?et.material:he,dt=et.group;at.layers.test(de.layers)&&Go(at,J,de,Xe,vt,dt)}}function Go(L,J,de,he,fe,Ge){L.onBeforeRender(M,J,de,he,fe,Ge),L.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),fe.onBeforeRender(M,J,de,he,L,Ge),fe.transparent===!0&&fe.side===Hi&&fe.forceSinglePass===!1?(fe.side=cr,fe.needsUpdate=!0,M.renderBufferDirect(de,J,he,fe,L,Ge),fe.side=Fo,fe.needsUpdate=!0,M.renderBufferDirect(de,J,he,fe,L,Ge),fe.side=Hi):M.renderBufferDirect(de,J,he,fe,L,Ge),L.onAfterRender(M,J,de,he,fe,Ge)}function ji(L,J,de){J.isScene!==!0&&(J=Oe);const he=ge.get(L),fe=y.state.lights,Ge=y.state.shadowsArray,et=fe.state.version,at=q.getParameters(L,fe.state,Ge,J,de),Xe=q.getProgramCacheKey(at);let vt=he.programs;he.environment=L.isMeshStandardMaterial?J.environment:null,he.fog=J.fog,he.envMap=(L.isMeshStandardMaterial?Ie:we).get(L.envMap||he.environment),vt===void 0&&(L.addEventListener("dispose",Re),vt=new Map,he.programs=vt);let dt=vt.get(Xe);if(dt!==void 0){if(he.currentProgram===dt&&he.lightsStateVersion===et)return Eu(L,at),dt}else at.uniforms=q.getUniforms(L),L.onBuild(de,at,M),L.onBeforeCompile(at,M),dt=q.acquireProgram(at,Xe),vt.set(Xe,dt),he.uniforms=at.uniforms;const pt=he.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(pt.clippingPlanes=Ye.uniform),Eu(L,at),he.needsLights=wu(L),he.lightsStateVersion=et,he.needsLights&&(pt.ambientLightColor.value=fe.state.ambient,pt.lightProbe.value=fe.state.probe,pt.directionalLights.value=fe.state.directional,pt.directionalLightShadows.value=fe.state.directionalShadow,pt.spotLights.value=fe.state.spot,pt.spotLightShadows.value=fe.state.spotShadow,pt.rectAreaLights.value=fe.state.rectArea,pt.ltc_1.value=fe.state.rectAreaLTC1,pt.ltc_2.value=fe.state.rectAreaLTC2,pt.pointLights.value=fe.state.point,pt.pointLightShadows.value=fe.state.pointShadow,pt.hemisphereLights.value=fe.state.hemi,pt.directionalShadowMap.value=fe.state.directionalShadowMap,pt.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,pt.spotShadowMap.value=fe.state.spotShadowMap,pt.spotLightMatrix.value=fe.state.spotLightMatrix,pt.spotLightMap.value=fe.state.spotLightMap,pt.pointShadowMap.value=fe.state.pointShadowMap,pt.pointShadowMatrix.value=fe.state.pointShadowMatrix),he.currentProgram=dt,he.uniformsList=null,dt}function Su(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=pf.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function Eu(L,J){const de=ge.get(L);de.outputColorSpace=J.outputColorSpace,de.batching=J.batching,de.instancing=J.instancing,de.instancingColor=J.instancingColor,de.skinning=J.skinning,de.morphTargets=J.morphTargets,de.morphNormals=J.morphNormals,de.morphColors=J.morphColors,de.morphTargetsCount=J.morphTargetsCount,de.numClippingPlanes=J.numClippingPlanes,de.numIntersection=J.numClipIntersection,de.vertexAlphas=J.vertexAlphas,de.vertexTangents=J.vertexTangents,de.toneMapping=J.toneMapping}function ld(L,J,de,he,fe){J.isScene!==!0&&(J=Oe),Me.resetTextureUnits();const Ge=J.fog,et=he.isMeshStandardMaterial?J.environment:null,at=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Wi,Xe=(he.isMeshStandardMaterial?Ie:we).get(he.envMap||et),vt=he.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,dt=!!de.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),pt=!!de.morphAttributes.position,Vt=!!de.morphAttributes.normal,Xn=!!de.morphAttributes.color;let an=Lo;he.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(an=M.toneMapping);const Qn=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Tt=Qn!==void 0?Qn.length:0,yt=ge.get(he),jn=y.state.lights;if(Y===!0&&(ee===!0||L!==C)){const er=L===C&&he.id===ce;Ye.setState(he,L,er)}let Kt=!1;he.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==jn.state.version||yt.outputColorSpace!==at||fe.isBatchedMesh&&yt.batching===!1||!fe.isBatchedMesh&&yt.batching===!0||fe.isInstancedMesh&&yt.instancing===!1||!fe.isInstancedMesh&&yt.instancing===!0||fe.isSkinnedMesh&&yt.skinning===!1||!fe.isSkinnedMesh&&yt.skinning===!0||fe.isInstancedMesh&&yt.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&yt.instancingColor===!1&&fe.instanceColor!==null||yt.envMap!==Xe||he.fog===!0&&yt.fog!==Ge||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Ye.numPlanes||yt.numIntersection!==Ye.numIntersection)||yt.vertexAlphas!==vt||yt.vertexTangents!==dt||yt.morphTargets!==pt||yt.morphNormals!==Vt||yt.morphColors!==Xn||yt.toneMapping!==an||le.isWebGL2===!0&&yt.morphTargetsCount!==Tt)&&(Kt=!0):(Kt=!0,yt.__version=he.version);let Ai=yt.currentProgram;Kt===!0&&(Ai=ji(he,J,fe));let Mu=!1,ri=!1,qi=!1;const rn=Ai.getUniforms(),Ar=yt.uniforms;if(ue.useProgram(Ai.program)&&(Mu=!0,ri=!0,qi=!0),he.id!==ce&&(ce=he.id,ri=!0),Mu||C!==L){rn.setValue(j,"projectionMatrix",L.projectionMatrix),rn.setValue(j,"viewMatrix",L.matrixWorldInverse);const er=rn.map.cameraPosition;er!==void 0&&er.setValue(j,be.setFromMatrixPosition(L.matrixWorld)),le.logarithmicDepthBuffer&&rn.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&rn.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,ri=!0,qi=!0)}if(fe.isSkinnedMesh){rn.setOptional(j,fe,"bindMatrix"),rn.setOptional(j,fe,"bindMatrixInverse");const er=fe.skeleton;er&&(le.floatVertexTextures?(er.boneTexture===null&&er.computeBoneTexture(),rn.setValue(j,"boneTexture",er.boneTexture,Me)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}fe.isBatchedMesh&&(rn.setOptional(j,fe,"batchingTexture"),rn.setValue(j,"batchingTexture",fe._matricesTexture,Me));const Ws=de.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0&&le.isWebGL2===!0)&&lt.update(fe,de,Ai),(ri||yt.receiveShadow!==fe.receiveShadow)&&(yt.receiveShadow=fe.receiveShadow,rn.setValue(j,"receiveShadow",fe.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Ar.envMap.value=Xe,Ar.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ri&&(rn.setValue(j,"toneMappingExposure",M.toneMappingExposure),yt.needsLights&&Mi(Ar,qi),Ge&&he.fog===!0&&Ae.refreshFogUniforms(Ar,Ge),Ae.refreshMaterialUniforms(Ar,he,re,se,Z),pf.upload(j,Su(yt),Ar,Me)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(pf.upload(j,Su(yt),Ar,Me),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&rn.setValue(j,"center",fe.center),rn.setValue(j,"modelViewMatrix",fe.modelViewMatrix),rn.setValue(j,"normalMatrix",fe.normalMatrix),rn.setValue(j,"modelMatrix",fe.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const er=he.uniformsGroups;for(let Wo=0,Au=er.length;Wo<Au;Wo++)if(le.isWebGL2){const Ra=er[Wo];st.update(Ra,Ai),st.bind(Ra,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function Mi(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function wu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,J,de){ge.get(L.texture).__webglTexture=J,ge.get(L.depthTexture).__webglTexture=de;const he=ge.get(L);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=de===void 0,he.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,J){const de=ge.get(L);de.__webglFramebuffer=J,de.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(L,J=0,de=0){I=L,U=J,N=de;let he=!0,fe=null,Ge=!1,et=!1;if(L){const Xe=ge.get(L);Xe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(j.FRAMEBUFFER,null),he=!1):Xe.__webglFramebuffer===void 0?Me.setupRenderTarget(L):Xe.__hasExternalTextures&&Me.rebindTextures(L,ge.get(L.texture).__webglTexture,ge.get(L.depthTexture).__webglTexture);const vt=L.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(et=!0);const dt=ge.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(dt[J])?fe=dt[J][de]:fe=dt[J],Ge=!0):le.isWebGL2&&L.samples>0&&Me.useMultisampledRTT(L)===!1?fe=ge.get(L).__webglMultisampledFramebuffer:Array.isArray(dt)?fe=dt[de]:fe=dt,O.copy(L.viewport),oe.copy(L.scissor),ne=L.scissorTest}else O.copy($).multiplyScalar(re).floor(),oe.copy(P).multiplyScalar(re).floor(),ne=k;if(ue.bindFramebuffer(j.FRAMEBUFFER,fe)&&le.drawBuffers&&he&&ue.drawBuffers(L,fe),ue.viewport(O),ue.scissor(oe),ue.setScissorTest(ne),Ge){const Xe=ge.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xe.__webglTexture,de)}else if(et){const Xe=ge.get(L.texture),vt=J||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,de||0,vt)}ce=-1},this.readRenderTargetPixels=function(L,J,de,he,fe,Ge,et){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&et!==void 0&&(at=at[et]),at){ue.bindFramebuffer(j.FRAMEBUFFER,at);try{const Xe=L.texture,vt=Xe.format,dt=Xe.type;if(vt!==Ur&&Nt.convert(vt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pt=dt===Yl&&(Ve.has("EXT_color_buffer_half_float")||le.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(dt!==Do&&Nt.convert(dt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dt===Vi&&(le.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-he&&de>=0&&de<=L.height-fe&&j.readPixels(J,de,he,fe,Nt.convert(vt),Nt.convert(dt),Ge)}finally{const Xe=I!==null?ge.get(I).__webglFramebuffer:null;ue.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(L,J,de=0){const he=Math.pow(2,-de),fe=Math.floor(J.image.width*he),Ge=Math.floor(J.image.height*he);Me.setTexture2D(J,0),j.copyTexSubImage2D(j.TEXTURE_2D,de,0,0,L.x,L.y,fe,Ge),ue.unbindTexture()},this.copyTextureToTexture=function(L,J,de,he=0){const fe=J.image.width,Ge=J.image.height,et=Nt.convert(de.format),at=Nt.convert(de.type);Me.setTexture2D(de,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,de.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,de.unpackAlignment),J.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,he,L.x,L.y,fe,Ge,et,at,J.image.data):J.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,he,L.x,L.y,J.mipmaps[0].width,J.mipmaps[0].height,et,J.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,he,L.x,L.y,et,at,J.image),he===0&&de.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(L,J,de,he,fe=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=L.max.x-L.min.x+1,et=L.max.y-L.min.y+1,at=L.max.z-L.min.z+1,Xe=Nt.convert(he.format),vt=Nt.convert(he.type);let dt;if(he.isData3DTexture)Me.setTexture3D(he,0),dt=j.TEXTURE_3D;else if(he.isDataArrayTexture)Me.setTexture2DArray(he,0),dt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,he.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,he.unpackAlignment);const pt=j.getParameter(j.UNPACK_ROW_LENGTH),Vt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Xn=j.getParameter(j.UNPACK_SKIP_PIXELS),an=j.getParameter(j.UNPACK_SKIP_ROWS),Qn=j.getParameter(j.UNPACK_SKIP_IMAGES),Tt=de.isCompressedTexture?de.mipmaps[0]:de.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Tt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,L.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,L.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,L.min.z),de.isDataTexture||de.isData3DTexture?j.texSubImage3D(dt,fe,J.x,J.y,J.z,Ge,et,at,Xe,vt,Tt.data):de.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(dt,fe,J.x,J.y,J.z,Ge,et,at,Xe,Tt.data)):j.texSubImage3D(dt,fe,J.x,J.y,J.z,Ge,et,at,Xe,vt,Tt),j.pixelStorei(j.UNPACK_ROW_LENGTH,pt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Vt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Xn),j.pixelStorei(j.UNPACK_SKIP_ROWS,an),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Qn),fe===0&&he.generateMipmaps&&j.generateMipmap(dt),ue.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Me.setTextureCube(L,0):L.isData3DTexture?Me.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Me.setTexture2DArray(L,0):Me.setTexture2D(L,0),ue.unbindTexture()},this.resetState=function(){U=0,N=0,I=null,ue.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Av?"display-p3":"srgb",t.unpackColorSpace=zt.workingColorSpace===ed?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pn?Sa:Gw}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sa?Pn:Wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uz extends Em{}uz.prototype.isWebGL1Renderer=!0;class Lv{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new Lv(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cz extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class fz{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_m,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kn=new B;class Co{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),a=kt(a,this.array),s=kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new Sr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dz extends fr{constructor(e=null,t=1,i=1,a,s,c,u,d,h=Rn,p=Rn,m,g){super(null,c,u,d,h,p,a,s,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function hz(n,e){return n.z-e.z}function pz(n,e){return e.z-n.z}class mz{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const i=this.pool,a=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});const s=i[this.index];a.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const vs="batchId",xo=new $t,lx=new $t,vz=new $t,ux=new $t,Lp=new td,tf=new zr,ca=new yi,Dl=new B,Dp=new mz,Hn=new ni,nf=[];function gz(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const a=n.count;for(let s=0;s<a;s++)for(let c=0;c<i;c++)e.setComponent(s+t,c,n.getComponent(s,c))}else e.array.set(n.array,t*i);e.needsUpdate=!0}class _z extends ni{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,i=t*2,a){super(new $n,a),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new dz(t,e,e,Ur,Vi);this._matricesTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,a=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const u in e.attributes){const d=e.getAttribute(u),{array:h,itemSize:p,normalized:m}=d,g=new h.constructor(i*p),S=new d.constructor(g,p,m);S.setUsage(d.usage),t.setAttribute(u,S)}if(e.getIndex()!==null){const u=i>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Sr(u,1))}const c=a>65536?new Uint32Array(i):new Uint16Array(i);t.setAttribute(vs,new Sr(c,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(vs))throw new Error(`BatchedMesh: Geometry cannot use attribute "${vs}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(i===vs)continue;if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const a=e.getAttribute(i),s=t.getAttribute(i);if(a.itemSize!==s.itemSize||a.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this._geometryCount,t=this.boundingBox,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,xo),this.getBoundingBoxAt(a,tf).applyMatrix4(xo),t.union(tf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this._geometryCount,t=this.boundingSphere,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,xo),this.getBoundingSphereAt(a,ca).applyMatrix4(xo),t.union(ca))}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const a={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const c=this._reservedRanges,u=this._drawRanges,d=this._bounds;this._geometryCount!==0&&(s=c[c.length-1]),t===-1?a.vertexCount=e.getAttribute("position").count:a.vertexCount=t,s===null?a.vertexStart=0:a.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),p=h!==null;if(p&&(i===-1?a.indexCount=h.count:a.indexCount=i,s===null?a.indexStart=0:a.indexStart=s.indexStart+s.indexCount),a.indexStart!==-1&&a.indexStart+a.indexCount>this._maxIndexCount||a.vertexStart+a.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const m=this._visibility,g=this._active,S=this._matricesTexture,w=this._matricesTexture.image.data;m.push(!0),g.push(!0);const E=this._geometryCount;this._geometryCount++,vz.toArray(w,E*16),S.needsUpdate=!0,c.push(a),u.push({start:p?a.indexStart:a.vertexStart,count:-1}),d.push({boxInitialized:!1,box:new zr,sphereInitialized:!1,sphere:new yi});const y=this.geometry.getAttribute(vs);for(let _=0;_<a.vertexCount;_++)y.setX(a.vertexStart+_,E);return y.needsUpdate=!0,this.setGeometryAt(E,e),E}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,a=i.getIndex()!==null,s=i.getIndex(),c=t.getIndex(),u=this._reservedRanges[e];if(a&&c.count>u.indexCount||t.attributes.position.count>u.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const d=u.vertexStart,h=u.vertexCount;for(const S in i.attributes){if(S===vs)continue;const w=t.getAttribute(S),E=i.getAttribute(S);gz(w,E,d);const y=w.itemSize;for(let _=w.count,b=h;_<b;_++){const M=d+_;for(let R=0;R<y;R++)E.setComponent(M,R,0)}E.needsUpdate=!0}if(a){const S=u.indexStart;for(let w=0;w<c.count;w++)s.setX(S+w,d+c.getX(w));for(let w=c.count,E=u.indexCount;w<E;w++)s.setX(S+w,d);s.needsUpdate=!0}const p=this._bounds[e];t.boundingBox!==null?(p.box.copy(t.boundingBox),p.boxInitialized=!0):p.boxInitialized=!1,t.boundingSphere!==null?(p.sphere.copy(t.boundingSphere),p.sphereInitialized=!0):p.sphereInitialized=!1;const m=this._drawRanges[e],g=t.getAttribute("position");return m.count=a?c.count:g.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.box,c=this.geometry;if(a.boxInitialized===!1){s.makeEmpty();const u=c.index,d=c.attributes.position,h=this._drawRanges[e];for(let p=h.start,m=h.start+h.count;p<m;p++){let g=p;u&&(g=u.getX(g)),s.expandByPoint(Dl.fromBufferAttribute(d,g))}a.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.sphere,c=this.geometry;if(a.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,tf),tf.getCenter(s.center);const u=c.index,d=c.attributes.position,h=this._drawRanges[e];let p=0;for(let m=h.start,g=h.start+h.count;m<g;m++){let S=m;u&&(S=u.getX(S)),Dl.fromBufferAttribute(d,S),p=Math.max(p,s.center.distanceToSquared(Dl))}s.radius=Math.sqrt(p),a.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const i=this._active,a=this._matricesTexture,s=this._matricesTexture.image.data,c=this._geometryCount;return e>=c||i[e]===!1?this:(t.toArray(s,e*16),a.needsUpdate=!0,this)}getMatrixAt(e,t){const i=this._active,a=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||i[e]===!1?null:t.fromArray(a,e*16)}setVisibleAt(e,t){const i=this._visibility,a=this._active,s=this._geometryCount;return e>=s||a[e]===!1||i[e]===t?this:(i[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,i=this._active,a=this._geometryCount;return e>=a||i[e]===!1?!1:t[e]}raycast(e,t){const i=this._visibility,a=this._active,s=this._drawRanges,c=this._geometryCount,u=this.matrixWorld,d=this.geometry;Hn.material=this.material,Hn.geometry.index=d.index,Hn.geometry.attributes=d.attributes,Hn.geometry.boundingBox===null&&(Hn.geometry.boundingBox=new zr),Hn.geometry.boundingSphere===null&&(Hn.geometry.boundingSphere=new yi);for(let h=0;h<c;h++){if(!i[h]||!a[h])continue;const p=s[h];Hn.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(h,Hn.matrixWorld).premultiply(u),this.getBoundingBoxAt(h,Hn.geometry.boundingBox),this.getBoundingSphereAt(h,Hn.geometry.boundingSphere),Hn.raycast(e,nf);for(let m=0,g=nf.length;m<g;m++){const S=nf[m];S.object=this,S.batchId=h,t.push(S)}nf.length=0}Hn.material=null,Hn.geometry.index=null,Hn.geometry.attributes={},Hn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,i,a,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const c=a.getIndex(),u=c===null?1:c.array.BYTES_PER_ELEMENT,d=this._visibility,h=this._multiDrawStarts,p=this._multiDrawCounts,m=this._drawRanges,g=this.perObjectFrustumCulled;g&&(ux.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Lp.setFromProjectionMatrix(ux,e.isWebGPURenderer?Kl:vi));let S=0;if(this.sortObjects){lx.copy(this.matrixWorld).invert(),Dl.setFromMatrixPosition(i.matrixWorld).applyMatrix4(lx);for(let y=0,_=d.length;y<_;y++)if(d[y]){this.getMatrixAt(y,xo),this.getBoundingSphereAt(y,ca).applyMatrix4(xo);let b=!1;if(g&&(b=!Lp.intersectsSphere(ca)),!b){const M=Dl.distanceTo(ca.center);Dp.push(m[y],M)}}const w=Dp.list,E=this.customSort;E===null?w.sort(s.transparent?pz:hz):E.call(this,w,i);for(let y=0,_=w.length;y<_;y++){const b=w[y];h[S]=b.start*u,p[S]=b.count,S++}Dp.reset()}else for(let w=0,E=d.length;w<E;w++)if(d[w]){let y=!1;if(g&&(this.getMatrixAt(w,xo),this.getBoundingSphereAt(w,ca).applyMatrix4(xo),y=!Lp.intersectsSphere(ca)),!y){const _=m[w];h[S]=_.start*u,p[S]=_.count,S++}}this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,i,a,s,c){this.onBeforeRender(e,null,a,s,c)}}class gu extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cx=new B,fx=new B,dx=new $t,Ip=new bv,rf=new yi;class yz extends Jn{constructor(e=new $n,t=new gu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)cx.fromBufferAttribute(t,a-1),fx.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=cx.distanceTo(fx);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rf.copy(i.boundingSphere),rf.applyMatrix4(a),rf.radius+=s,e.ray.intersectsSphere(rf)===!1)return;dx.copy(a).invert(),Ip.copy(e.ray).applyMatrix4(dx);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=new B,p=new B,m=new B,g=new B,S=this.isLineSegments?2:1,w=i.index,y=i.attributes.position;if(w!==null){const _=Math.max(0,c.start),b=Math.min(w.count,c.start+c.count);for(let M=_,R=b-1;M<R;M+=S){const U=w.getX(M),N=w.getX(M+1);if(h.fromBufferAttribute(y,U),p.fromBufferAttribute(y,N),Ip.distanceSqToSegment(h,p,g,m)>d)continue;g.applyMatrix4(this.matrixWorld);const ce=e.ray.origin.distanceTo(g);ce<e.near||ce>e.far||t.push({distance:ce,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,c.start),b=Math.min(y.count,c.start+c.count);for(let M=_,R=b-1;M<R;M+=S){if(h.fromBufferAttribute(y,M),p.fromBufferAttribute(y,M+1),Ip.distanceSqToSegment(h,p,g,m)>d)continue;g.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(g);N<e.near||N>e.far||t.push({distance:N,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}const hx=new B,px=new B;class rd extends yz{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)hx.fromBufferAttribute(t,a),px.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+hx.distanceTo(px);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xz extends $n{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,a=new B,s=new B;if(e.index!==null){const c=e.attributes.position,u=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:u.count,materialIndex:0}]);for(let h=0,p=d.length;h<p;++h){const m=d[h],g=m.start,S=m.count;for(let w=g,E=g+S;w<E;w+=3)for(let y=0;y<3;y++){const _=u.getX(w+y),b=u.getX(w+(y+1)%3);a.fromBufferAttribute(c,_),s.fromBufferAttribute(c,b),mx(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}}else{const c=e.attributes.position;for(let u=0,d=c.count/3;u<d;u++)for(let h=0;h<3;h++){const p=3*u+h,m=3*u+(h+1)%3;a.fromBufferAttribute(c,p),s.fromBufferAttribute(c,m),mx(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ln(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function mx(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(a)===!0?!1:(t.add(i),t.add(a),!0)}class Sz extends Bs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ww,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ez extends gu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class dM extends Jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Up=new $t,vx=new B,gx=new B;class wz{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new td,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vx.setFromMatrixPosition(e.matrixWorld),t.position.copy(vx),gx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gx),t.updateMatrixWorld(),Up.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Up),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Up)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _x=new $t,Il=new B,Np=new B;class Mz extends wz{constructor(){super(new xr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Il.setFromMatrixPosition(e.matrixWorld),i.position.copy(Il),Np.copy(i.position),Np.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Np),i.updateMatrixWorld(),a.makeTranslation(-Il.x,-Il.y,-Il.z),_x.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_x)}}class Az extends dM{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Mz}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tz extends dM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bz extends $n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class wm extends fz{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class yx{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xx=new B,of=new B;class Cz{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xx.subVectors(e,this.start),of.subVectors(this.end,this.start);const i=of.dot(of);let s=of.dot(xx)/i;return t&&(s=Dn(s,0,1)),s}closestPointToPoint(e,t,i){const a=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Rz extends rd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new $n;a.setAttribute("position",new ln(t,3)),a.setAttribute("color",new ln(i,3));const s=new gu({vertexColors:!0,toneMapped:!1});super(a,s),this.type="AxesHelper"}setColors(e,t,i){const a=new nt,s=this.geometry.attributes.color.array;return a.set(e),a.toArray(s,0),a.toArray(s,3),a.set(t),a.toArray(s,6),a.toArray(s,9),a.set(i),a.toArray(s,12),a.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class xi{constructor(e,t,i,a,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),xi.nextNameID=xi.nextNameID||0,this.$name.id=`lil-gui-name-${++xi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Pz extends xi{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Mm(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Lz={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Mm,toHexString:Mm},Jl={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Dz={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Jl.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return Jl.toHexString(a)}},Iz={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Jl.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return Jl.toHexString(a)}},Uz=[Lz,Jl,Dz,Iz];function Nz(n){return Uz.find(e=>e.match(n))}class Fz extends xi{constructor(e,t,i,a){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Nz(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Mm(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Fp extends xi{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Oz extends xi{constructor(e,t,i,a,s,c){super(e,t,i,"number"),this._initInput(),this.min(a),this.max(s);const u=c!==void 0;this.step(u?c:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},i=b=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+b),this.$input.value=this.getValue())},a=b=>{b.key==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),i(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),i(this._step*this._arrowKeyMultiplier(b)*-1))},s=b=>{this._inputFocused&&(b.preventDefault(),i(this._step*this._normalizeMouseWheel(b)))};let c=!1,u,d,h,p,m;const g=5,S=b=>{u=b.clientX,d=h=b.clientY,c=!0,p=this.getValue(),m=0,window.addEventListener("mousemove",w),window.addEventListener("mouseup",E)},w=b=>{if(c){const M=b.clientX-u,R=b.clientY-d;Math.abs(R)>g?(b.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>g&&E()}if(!c){const M=b.clientY-h;m-=M*this._step*this._arrowKeyMultiplier(b),p+m>this._max?m=this._max-p:p+m<this._min&&(m=this._min-p),this._snapClampSetValue(p+m)}h=b.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",E)},y=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,b,M,R,U)=>(_-b)/(M-b)*(U-R)+R,t=_=>{const b=this.$slider.getBoundingClientRect();let M=e(_,b.left,b.right,this._min,this._max);this._snapClampSetValue(M)},i=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",s)},a=_=>{t(_.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",s)};let c=!1,u,d;const h=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),c=!1},p=_=>{_.touches.length>1||(this._hasScrollBar?(u=_.touches[0].clientX,d=_.touches[0].clientY,c=!0):h(_),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",g))},m=_=>{if(c){const b=_.touches[0].clientX-u,M=_.touches[0].clientY-d;Math.abs(b)>Math.abs(M)?h(_):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g))}else _.preventDefault(),t(_.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g)},S=this._callOnFinishChange.bind(this),w=400;let E;const y=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const M=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(S,w)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class kz extends xi{constructor(e,t,i,a){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class zz extends xi{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Bz=`.lil-gui {
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
}`;function Hz(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Sx=!1;class bf{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:a,title:s="Controls",closeFolders:c=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!Sx&&u&&(Hz(Bz),Sx=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,i,a,s){if(Object(i)===i)return new kz(this,e,t,i);const c=e[t];switch(typeof c){case"number":return new Oz(this,e,t,i,a,s);case"boolean":return new Pz(this,e,t);case"string":return new zz(this,e,t);case"function":return new Fp(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,i=1){return new Fz(this,e,t,i)}addFolder(e){const t=new bf({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Fp||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Fp)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function Op(n,e,t,i){return new(t||(t=Promise))((function(a,s){function c(h){try{d(i.next(h))}catch(p){s(p)}}function u(h){try{d(i.throw(h))}catch(p){s(p)}}function d(h){var p;h.done?a(h.value):(p=h.value,p instanceof t?p:new t((function(m){m(p)}))).then(c,u)}d((i=i.apply(n,[])).next())}))}class Dv{constructor(e,t,i,a){this.size=e,this.width=t,this.height=i,this.charLength=a,this.chars=""}static parse(e){const t=e.split(" "),i=t[0],a=i.split("x");return new Dv(i,+a[0],+a[1],+t[1])}get src(){return"data:image/jpeg;base64,"+this.chars}get isValid(){return this.chars.length==this.charLength&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(this.chars)}}class Iv{constructor(e,t,i,a){this.src=e,this.gcode=t,this.params=i,this.comment=a}}class Ex extends Iv{constructor(e,t,i,a){super(e,t,i,a),this.params=i}}class So extends Iv{constructor(e,t,i,a){super(e,t,void 0,i),this.toolIndex=a}}class wx{constructor(e,t,i,a=0){this.layer=e,this.commands=t,this.lineNumber=i,this.height=a}}class Cf{constructor(e){this.lines=[],this.preamble=new wx(-1,[],0),this.layers=[],this.curZ=0,this.maxZ=0,this.metadata={thumbnails:{}},this.tolerance=0,this.tolerance=e??this.tolerance}parseGCode(e){const t=Array.isArray(e)?e:e.split(`
`);this.lines=this.lines.concat(t);const i=this.lines2commands(t);this.groupIntoLayers(i);const a=this.parseMetadata(i.filter((s=>s.comment))).thumbnails;for(const[s,c]of Object.entries(a))this.metadata.thumbnails[s]=c;return{layers:this.layers,metadata:this.metadata}}lines2commands(e){return e.map((t=>this.parseCommand(t)))}parseCommand(e,t=!0){var i;const a=e.trim().split(";"),s=a[0],c=t&&a[1]||void 0,u=s.split(/([a-zA-Z])/g).slice(1).map((p=>p.trim())),d=u.length?`${(i=u[0])===null||i===void 0?void 0:i.toLowerCase()}${u[1]}`:"",h=this.parseParams(u.slice(2));switch(d){case"g0":case"g00":case"g1":case"g01":case"g2":case"g02":case"g3":case"g03":return new Ex(e,d,h,c);case"t0":return new So(e,d,c,0);case"t1":return new So(e,d,c,1);case"t2":return new So(e,d,c,2);case"t3":return new So(e,d,c,3);case"t4":return new So(e,d,c,4);case"t5":return new So(e,d,c,5);case"t6":return new So(e,d,c,6);case"t7":return new So(e,d,c,7);default:return new Iv(e,d,h,c)}}parseMove(e){return e.reduce(((t,i)=>{const a=i.charAt(0).toLowerCase();return a!="x"&&a!="y"&&a!="z"&&a!="e"&&a!="r"&&a!="f"&&a!="i"&&a!="j"||(t[a]=parseFloat(i.slice(1))),t}),{})}isAlpha(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90}parseParams(e){return e.reduce(((t,i,a,s)=>{if(a%2==0)return t;let c=s[a-1];return c=c.toLowerCase(),this.isAlpha(c)&&(t[c]=parseFloat(i)),t}),{})}groupIntoLayers(e){var t;for(let i=0;i<e.length;i++){const a=e[i];if(a instanceof Ex){const s=a.params;if(s.z&&(this.curZ=s.z),((t=s.e)!==null&&t!==void 0?t:0)>0&&(s.x!=null||s.y!=null)&&Math.abs(this.curZ-(this.maxZ||-1/0))>this.tolerance){const c=Math.abs(this.curZ-this.maxZ);this.maxZ=this.curZ,this.layers.push(new wx(this.layers.length,[],i,c))}}this.maxLayer.commands.push(a)}return this.layers}get maxLayer(){var e;return(e=this.layers[this.layers.length-1])!==null&&e!==void 0?e:this.preamble}parseMetadata(e){const t={};let i;for(const a of e){const s=a.comment;if(!s)continue;const c=s.indexOf("thumbnail begin"),u=s.indexOf("thumbnail end");c>-1?i=Dv.parse(s.slice(c+15).trim()):i&&(u==-1?i.chars+=s.trim():(i.isValid&&(t[i.size]=i),i=void 0))}return{thumbnails:t}}}Cf.prototype.parseGcode=Cf.prototype.parseGCode;const Mx={type:"change"},kp={type:"start"},Ax={type:"end"},af=new bv,Tx=new wo,Vz=Math.cos(70*Xw.DEG2RAD);class Gz extends Ca{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ja.ROTATE,MIDDLE:Ja.DOLLY,RIGHT:Ja.PAN},this.touches={ONE:Qa.ROTATE,TWO:Qa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(le){le.addEventListener("keydown",ze),this._domElementKeyEvents=le},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ze),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Mx),i.update(),s=a.NONE},this.update=(function(){const le=new B,ue=new wa().setFromUnitVectors(e.up,new B(0,1,0)),xe=ue.clone().invert(),ge=new B,Me=new wa,we=new B,Ie=2*Math.PI;return function(Ze=null){const D=i.object.position;le.copy(D).sub(i.target),le.applyQuaternion(ue),u.setFromVector3(le),i.autoRotate&&s===a.NONE&&O((function(ye){return ye!==null?2*Math.PI/60*i.autoRotateSpeed*ye:2*Math.PI/60/60*i.autoRotateSpeed})(Ze)),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let T=i.minAzimuthAngle,q=i.maxAzimuthAngle;isFinite(T)&&isFinite(q)&&(T<-Math.PI?T+=Ie:T>Math.PI&&(T-=Ie),q<-Math.PI?q+=Ie:q>Math.PI&&(q-=Ie),u.theta=T<=q?Math.max(T,Math.min(q,u.theta)):u.theta>(T+q)/2?Math.max(T,u.theta):Math.min(q,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&N||i.object.isOrthographicCamera?u.radius=X(u.radius):u.radius=X(u.radius*h),le.setFromSpherical(u),le.applyQuaternion(xe),D.copy(i.target).add(le),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let Ae=!1;if(i.zoomToCursor&&N){let ye=null;if(i.object.isPerspectiveCamera){const Ce=le.length();ye=X(Ce*h);const Ye=Ce-ye;i.object.position.addScaledVector(R,Ye),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ce=new B(U.x,U.y,0);Ce.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0;const Ye=new B(U.x,U.y,0);Ye.unproject(i.object),i.object.position.sub(Ye).add(Ce),i.object.updateMatrixWorld(),ye=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ye).add(i.object.position):(af.origin.copy(i.object.position),af.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(af.direction))<Vz?e.lookAt(i.target):(Tx.setFromNormalAndCoplanarPoint(i.object.up,i.target),af.intersectPlane(Tx,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0);return h=1,N=!1,!!(Ae||ge.distanceToSquared(i.object.position)>c||8*(1-Me.dot(i.object.quaternion))>c||we.distanceToSquared(i.target)>0)&&(i.dispatchEvent(Mx),ge.copy(i.object.position),Me.copy(i.object.quaternion),we.copy(i.target),!0)}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Oe),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ze),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const c=1e-6,u=new yx,d=new yx;let h=1;const p=new B,m=new ht,g=new ht,S=new ht,w=new ht,E=new ht,y=new ht,_=new ht,b=new ht,M=new ht,R=new B,U=new ht;let N=!1;const I=[],ce={};function C(){return Math.pow(.95,i.zoomSpeed)}function O(le){d.theta-=le}function oe(le){d.phi-=le}const ne=(function(){const le=new B;return function(ue,xe){le.setFromMatrixColumn(xe,0),le.multiplyScalar(-ue),p.add(le)}})(),pe=(function(){const le=new B;return function(ue,xe){i.screenSpacePanning===!0?le.setFromMatrixColumn(xe,1):(le.setFromMatrixColumn(xe,0),le.crossVectors(i.object.up,le)),le.multiplyScalar(ue),p.add(le)}})(),H=(function(){const le=new B;return function(ue,xe){const ge=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;le.copy(Me).sub(i.target);let we=le.length();we*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*ue*we/ge.clientHeight,i.object.matrix),pe(2*xe*we/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(ue*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),pe(xe*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Q(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(le){if(!i.zoomToCursor)return;N=!0;const ue=i.domElement.getBoundingClientRect(),xe=le.clientX-ue.left,ge=le.clientY-ue.top,Me=ue.width,we=ue.height;U.x=xe/Me*2-1,U.y=-ge/we*2+1,R.set(U.x,U.y,1).unproject(i.object).sub(i.object.position).normalize()}function X(le){return Math.max(i.minDistance,Math.min(i.maxDistance,le))}function ie(le){m.set(le.clientX,le.clientY)}function $(le){w.set(le.clientX,le.clientY)}function P(){if(I.length===1)m.set(I[0].pageX,I[0].pageY);else{const le=.5*(I[0].pageX+I[1].pageX),ue=.5*(I[0].pageY+I[1].pageY);m.set(le,ue)}}function k(){if(I.length===1)w.set(I[0].pageX,I[0].pageY);else{const le=.5*(I[0].pageX+I[1].pageX),ue=.5*(I[0].pageY+I[1].pageY);w.set(le,ue)}}function W(){const le=I[0].pageX-I[1].pageX,ue=I[0].pageY-I[1].pageY,xe=Math.sqrt(le*le+ue*ue);_.set(0,xe)}function Y(le){if(I.length==1)g.set(le.pageX,le.pageY);else{const xe=Ve(le),ge=.5*(le.pageX+xe.x),Me=.5*(le.pageY+xe.y);g.set(ge,Me)}S.subVectors(g,m).multiplyScalar(i.rotateSpeed);const ue=i.domElement;O(2*Math.PI*S.x/ue.clientHeight),oe(2*Math.PI*S.y/ue.clientHeight),m.copy(g)}function ee(le){if(I.length===1)E.set(le.pageX,le.pageY);else{const ue=Ve(le),xe=.5*(le.pageX+ue.x),ge=.5*(le.pageY+ue.y);E.set(xe,ge)}y.subVectors(E,w).multiplyScalar(i.panSpeed),H(y.x,y.y),w.copy(E)}function Z(le){const ue=Ve(le),xe=le.pageX-ue.x,ge=le.pageY-ue.y,Me=Math.sqrt(xe*xe+ge*ge);b.set(0,Me),M.set(0,Math.pow(b.y/_.y,i.zoomSpeed)),Q(M.y),_.copy(b)}function _e(le){i.enabled!==!1&&(I.length===0&&(i.domElement.setPointerCapture(le.pointerId),i.domElement.addEventListener("pointermove",ve),i.domElement.addEventListener("pointerup",be)),(function(ue){I.push(ue)})(le),le.pointerType==="touch"?(function(ue){switch(Dt(ue),I.length){case 1:switch(i.touches.ONE){case Qa.ROTATE:if(i.enableRotate===!1)return;P(),s=a.TOUCH_ROTATE;break;case Qa.PAN:if(i.enablePan===!1)return;k(),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(i.touches.TWO){case Qa.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;i.enableZoom&&W(),i.enablePan&&k(),s=a.TOUCH_DOLLY_PAN;break;case Qa.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;i.enableZoom&&W(),i.enableRotate&&P(),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(kp)})(le):(function(ue){let xe;switch(ue.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Ja.DOLLY:if(i.enableZoom===!1)return;(function(ge){re(ge),_.set(ge.clientX,ge.clientY)})(ue),s=a.DOLLY;break;case Ja.ROTATE:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enablePan===!1)return;$(ue),s=a.PAN}else{if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}break;case Ja.PAN:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}else{if(i.enablePan===!1)return;$(ue),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(kp)})(le))}function ve(le){i.enabled!==!1&&(le.pointerType==="touch"?(function(ue){switch(Dt(ue),s){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Y(ue),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ee(ue),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enablePan&&ee(xe)})(ue),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enableRotate&&Y(xe)})(ue),i.update();break;default:s=a.NONE}})(le):(function(ue){switch(s){case a.ROTATE:if(i.enableRotate===!1)return;(function(xe){g.set(xe.clientX,xe.clientY),S.subVectors(g,m).multiplyScalar(i.rotateSpeed);const ge=i.domElement;O(2*Math.PI*S.x/ge.clientHeight),oe(2*Math.PI*S.y/ge.clientHeight),m.copy(g),i.update()})(ue);break;case a.DOLLY:if(i.enableZoom===!1)return;(function(xe){b.set(xe.clientX,xe.clientY),M.subVectors(b,_),M.y>0?Q(C()):M.y<0&&se(C()),_.copy(b),i.update()})(ue);break;case a.PAN:if(i.enablePan===!1)return;(function(xe){E.set(xe.clientX,xe.clientY),y.subVectors(E,w).multiplyScalar(i.panSpeed),H(y.x,y.y),w.copy(E),i.update()})(ue)}})(le))}function be(le){(function(ue){delete ce[ue.pointerId];for(let xe=0;xe<I.length;xe++)if(I[xe].pointerId==ue.pointerId)return void I.splice(xe,1)})(le),I.length===0&&(i.domElement.releasePointerCapture(le.pointerId),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(Ax),s=a.NONE}function Oe(le){i.enabled!==!1&&i.enableZoom!==!1&&s===a.NONE&&(le.preventDefault(),i.dispatchEvent(kp),(function(ue){re(ue),ue.deltaY<0?se(C()):ue.deltaY>0&&Q(C()),i.update()})(le),i.dispatchEvent(Ax))}function ze(le){i.enabled!==!1&&i.enablePan!==!1&&(function(ue){let xe=!1;switch(ue.code){case i.keys.UP:ue.ctrlKey||ue.metaKey||ue.shiftKey?oe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:ue.ctrlKey||ue.metaKey||ue.shiftKey?oe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:ue.ctrlKey||ue.metaKey||ue.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:ue.ctrlKey||ue.metaKey||ue.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),xe=!0}xe&&(ue.preventDefault(),i.update())})(le)}function j(le){i.enabled!==!1&&le.preventDefault()}function Dt(le){let ue=ce[le.pointerId];ue===void 0&&(ue=new ht,ce[le.pointerId]=ue),ue.set(le.pageX,le.pageY)}function Ve(le){const ue=le.pointerId===I[0].pointerId?I[1]:I[0];return ce[ue.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Oe,{passive:!1}),this.update()}}Fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},lr.line={uniforms:Cv.merge([Fe.common,Fe.fog,Fe.line]),vertexShader:`
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
		`};class hM extends Oo{constructor(e){super({type:"LineMaterial",uniforms:Cv.clone(lr.line.uniforms),vertexShader:lr.line.vertexShader,fragmentShader:lr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const bx=new zr,sf=new B;class pM extends bz{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new ln([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new ln([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new wm(t,6,1);return this.setAttribute("instanceStart",new Co(i,3,0)),this.setAttribute("instanceEnd",new Co(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new wm(t,6,1);return this.setAttribute("instanceColorStart",new Co(i,3,0)),this.setAttribute("instanceColorEnd",new Co(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new xz(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),bx.setFromBufferAttribute(t),this.boundingBox.union(bx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)sf.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(sf)),sf.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(sf));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Cx=new B,Rx=new B,Tn=new Bt,bn=new Bt,ui=new Bt,zp=new B,Bp=new $t,Cn=new Cz,Px=new B,lf=new zr,uf=new yi,ci=new Bt;let fi,va;function Lx(n,e,t){return ci.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ci.multiplyScalar(1/ci.w),ci.x=va/t.width,ci.y=va/t.height,ci.applyMatrix4(n.projectionMatrixInverse),ci.multiplyScalar(1/ci.w),Math.abs(Math.max(ci.x,ci.y))}class Wz extends ni{constructor(e=new pM,t=new hM({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let c=0,u=0,d=t.count;c<d;c++,u+=2)Cx.fromBufferAttribute(t,c),Rx.fromBufferAttribute(i,c),a[u]=u===0?0:a[u-1],a[u+1]=a[u]+Cx.distanceTo(Rx);const s=new wm(a,2,1);return e.setAttribute("instanceDistanceStart",new Co(s,1,0)),e.setAttribute("instanceDistanceEnd",new Co(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,a=e.camera;a!==null||i||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;fi=e.ray;const c=this.matrixWorld,u=this.geometry,d=this.material;let h,p;va=d.linewidth+s,u.boundingSphere===null&&u.computeBoundingSphere(),uf.copy(u.boundingSphere).applyMatrix4(c),i?h=.5*va:h=Lx(a,Math.max(a.near,uf.distanceToPoint(fi.origin)),d.resolution),uf.radius+=h,fi.intersectsSphere(uf)!==!1&&(u.boundingBox===null&&u.computeBoundingBox(),lf.copy(u.boundingBox).applyMatrix4(c),i?p=.5*va:p=Lx(a,Math.max(a.near,lf.distanceToPoint(fi.origin)),d.resolution),lf.expandByScalar(p),fi.intersectsBox(lf)!==!1&&(i?(function(m,g){const S=m.matrixWorld,w=m.geometry,E=w.attributes.instanceStart,y=w.attributes.instanceEnd;for(let _=0,b=Math.min(w.instanceCount,E.count);_<b;_++){Cn.start.fromBufferAttribute(E,_),Cn.end.fromBufferAttribute(y,_),Cn.applyMatrix4(S);const M=new B,R=new B;fi.distanceSqToSegment(Cn.start,Cn.end,R,M),R.distanceTo(M)<.5*va&&g.push({point:R,pointOnLine:M,distance:fi.origin.distanceTo(R),object:m,face:null,faceIndex:_,uv:null,uv1:null})}})(this,t):(function(m,g,S){const w=g.projectionMatrix,E=m.material.resolution,y=m.matrixWorld,_=m.geometry,b=_.attributes.instanceStart,M=_.attributes.instanceEnd,R=Math.min(_.instanceCount,b.count),U=-g.near;fi.at(1,ui),ui.w=1,ui.applyMatrix4(g.matrixWorldInverse),ui.applyMatrix4(w),ui.multiplyScalar(1/ui.w),ui.x*=E.x/2,ui.y*=E.y/2,ui.z=0,zp.copy(ui),Bp.multiplyMatrices(g.matrixWorldInverse,y);for(let N=0,I=R;N<I;N++){if(Tn.fromBufferAttribute(b,N),bn.fromBufferAttribute(M,N),Tn.w=1,bn.w=1,Tn.applyMatrix4(Bp),bn.applyMatrix4(Bp),Tn.z>U&&bn.z>U)continue;if(Tn.z>U){const ne=Tn.z-bn.z,pe=(Tn.z-U)/ne;Tn.lerp(bn,pe)}else if(bn.z>U){const ne=bn.z-Tn.z,pe=(bn.z-U)/ne;bn.lerp(Tn,pe)}Tn.applyMatrix4(w),bn.applyMatrix4(w),Tn.multiplyScalar(1/Tn.w),bn.multiplyScalar(1/bn.w),Tn.x*=E.x/2,Tn.y*=E.y/2,bn.x*=E.x/2,bn.y*=E.y/2,Cn.start.copy(Tn),Cn.start.z=0,Cn.end.copy(bn),Cn.end.z=0;const ce=Cn.closestPointToPointParameter(zp,!0);Cn.at(ce,Px);const C=Xw.lerp(Tn.z,bn.z,ce),O=C>=-1&&C<=1,oe=zp.distanceTo(Px)<.5*va;if(O&&oe){Cn.start.fromBufferAttribute(b,N),Cn.end.fromBufferAttribute(M,N),Cn.start.applyMatrix4(y),Cn.end.applyMatrix4(y);const ne=new B,pe=new B;fi.distanceSqToSegment(Cn.start,Cn.end,pe,ne),S.push({point:pe,pointOnLine:ne,distance:fi.origin.distanceTo(pe),object:m,face:null,faceIndex:N,uv:null,uv1:null})}}})(this,a,t)))}}class $z extends rd{constructor(e,t,i,a,s=4473924,c=8947848){s=new nt(s),c=new nt(c);const u=Math.round(e/t);i=Math.round(i/a)*a/2;const d=[],h=[];let p=0;for(let g=-1*(e=u*t/2);g<=e;g+=t){d.push(g,0,-1*i,g,0,i);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}for(let g=-1*i;g<=i;g+=a){d.push(-1*e,0,g,e,0,g);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}const m=new $n;m.setAttribute("position",new ln(d,3)),m.setAttribute("color",new ln(h,3)),super(m,new gu({vertexColors:!0,toneMapped:!1}))}}function Xz(n,e,t,i){const a=(function(c,u,d){c*=.5,u*=.5,d*=.5;const h=new $n,p=[];return p.push(-c,-u,-d,-c,u,-d,-c,u,-d,c,u,-d,c,u,-d,c,-u,-d,c,-u,-d,-c,-u,-d,-c,-u,d,-c,u,d,-c,u,d,c,u,d,c,u,d,c,-u,d,c,-u,d,-c,-u,d,-c,-u,-d,-c,-u,d,-c,u,-d,-c,u,d,c,u,-d,c,u,d,c,-u,-d,c,-u,d),h.setAttribute("position",new ln(p,3)),h})(n,e,t),s=new rd(a,new Ez({color:new nt(i),dashSize:3,gapSize:1}));return s.computeLineDistances(),s}var Wl=function(){var n=0,e=document.createElement("div");function t(p){return e.appendChild(p.dom),p}function i(p){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===p?"block":"none";n=p}e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",(function(p){p.preventDefault(),i(++n%e.children.length)}),!1);var a=(performance||Date).now(),s=a,c=0,u=t(new Wl.Panel("FPS","#0ff","#002")),d=t(new Wl.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new Wl.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=s+1e3&&(u.update(1e3*c/(p-s),100),s=p,c=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};Wl.Panel=function(n,e,t){var i=1/0,a=0,s=Math.round,c=s(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,m=3*c,g=15*c,S=74*c,w=30*c,E=document.createElement("canvas");E.width=u,E.height=d,E.style.cssText="width:80px;height:48px";var y=E.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,u,d),y.fillStyle=e,y.fillText(n,h,p),y.fillRect(m,g,S,w),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m,g,S,w),{dom:E,update:function(_,b){i=Math.min(i,_),a=Math.max(a,_),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,u,g),y.fillStyle=e,y.fillText(s(_)+" "+n+" ("+s(i)+"-"+s(a)+")",h,p),y.drawImage(E,m+c,g,S-c,w,m,g,S-c,w),y.fillRect(m+S-c,g,c,w),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m+S-c,g,c,s((1-_/b)*w))}}};var jz=Wl;class Dx{constructor(e,t){this.openFolders=[],this.watchedObject=e,this.options=t,this.gui=new bf,this.gui.title("Dev info"),this.setup()}setup(){this.loadOpenFolders(),this.options&&!this.options.renderer||this.setupRedererFolder(),this.options&&!this.options.camera||this.setupCameraFolder(),this.options&&!this.options.parser||this.setupParserFolder(),this.options&&!this.options.buildVolume||this.setupBuildVolumeFolder(),this.options&&!this.options.devHelpers||this.setupDevHelpers()}reset(){this.gui.destroy(),this.gui=new bf,this.gui.title("Dev info"),this.setup()}loadOpenFolders(){this.openFolders=JSON.parse(localStorage.getItem("dev-gui-open")||"{}").open||[]}saveOpenFolders(){this.openFolders=this.gui.foldersRecursive().filter((e=>!e._closed)).map((e=>e._title)),console.log(this.openFolders),localStorage.setItem("dev-gui-open",JSON.stringify({open:this.openFolders}))}setupRedererFolder(){const e=this.gui.addFolder("Render Info");this.openFolders.includes("Render Info")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.renderer.info.render,"triangles").listen(),e.add(this.watchedObject.renderer.info.render,"calls").listen(),e.add(this.watchedObject.renderer.info.render,"lines").listen(),e.add(this.watchedObject.renderer.info.render,"points").listen(),e.add(this.watchedObject.renderer.info.memory,"geometries").listen(),e.add(this.watchedObject.renderer.info.memory,"textures").listen(),e.add(this.watchedObject,"_lastRenderTime").listen()}setupCameraFolder(){const e=this.gui.addFolder("Camera");this.openFolders.includes("Camera")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()}));const t=e.addFolder("Camera position");t.add(this.watchedObject.camera.position,"x").listen(),t.add(this.watchedObject.camera.position,"y").listen(),t.add(this.watchedObject.camera.position,"z").listen();const i=e.addFolder("Camera rotation");i.add(this.watchedObject.camera.rotation,"x").listen(),i.add(this.watchedObject.camera.rotation,"y").listen(),i.add(this.watchedObject.camera.rotation,"z").listen()}setupParserFolder(){const e=this.gui.addFolder("Parser");this.openFolders.includes("Parser")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.parser,"curZ").listen(),e.add(this.watchedObject.parser,"maxZ").listen(),e.add(this.watchedObject.parser,"tolerance").listen(),e.add(this.watchedObject.parser.layers,"length").name("layers.count").listen(),e.add(this.watchedObject.parser.lines,"length").name("lines.count").listen()}setupBuildVolumeFolder(){const e=this.gui.addFolder("Build Volume");this.openFolders.includes("Build Volume")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.buildVolume,"x").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"y").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"z").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()}))}setupDevHelpers(){const e=this.gui.addFolder("Dev Helpers");this.openFolders.includes("Dev Helpers")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject,"_wireframe").listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject,"render").listen(),e.add(this.watchedObject,"clear").listen()}}class qz extends $n{constructor(e=[new B],t=.6,i=.2,a=8){super(),this.type="ExtrusionGeometry",this.parameters={points:e,lineWidth:t,lineHeight:i,radialSegments:a,closed:!1};const s=new B,c=new B,u=new ht,d=[],h=[],p=[],m=[];function g(S){const[w,E,y]=(function(_){const b=e[_],M=new B,R=new B,U=new B,N=new B;M.copy(b).sub(e[_-1]||b).normalize().add((e[_+1]||b).clone().sub(b).normalize()).normalize();let I=Number.MAX_VALUE;const ce=Math.abs(M.x),C=Math.abs(M.y),O=Math.abs(M.z);return ce<=I&&(I=ce,R.set(1,0,0)),C<=I&&(I=C,R.set(0,1,0)),O<=I&&R.set(0,0,1),N.crossVectors(M,R).normalize(),R.crossVectors(M,N),U.crossVectors(M,R),[b,R,U]})(S);for(let _=0;_<=a;_++){const b=_/a*Math.PI*2,M=Math.sin(b),R=-Math.cos(b);c.x=R*E.x+M*y.x,c.y=R*E.y+M*y.y,c.z=R*E.z+M*y.z,c.normalize(),h.push(c.x,c.y,c.z),s.x=w.x+t*c.x*.5,s.y=w.y+t*c.y*.5,s.z=w.z+i*c.z*.5,d.push(s.x,s.y,s.z)}}(function(){for(let S=0;S<e.length;S++)g(S);g(closed===!1?e.length-1:0),(function(){for(let S=0;S<e.length;S++)for(let w=0;w<=a;w++)u.x=S/e.length,u.y=w/a,p.push(u.x,u.y)})(),(function(){for(let S=1;S<e.length;S++)for(let w=1;w<=a;w++){const E=(a+1)*(S-1)+(w-1),y=(a+1)*S+(w-1),_=(a+1)*S+w,b=(a+1)*(S-1)+w;m.push(E,y,b),m.push(y,_,b)}})()})(),this.setIndex(m),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(p,2))}}class $l{static get initial(){const e=new $l;return Object.assign(e,{x:0,y:0,z:0,r:0,e:0,i:0,j:0,t:0}),e}}const Hp={h:0,s:0,l:0};class Ms{constructor(e){var t,i,a,s,c,u,d,h,p;if(this.minLayerThreshold=.05,this.renderExtrusion=!0,this.renderTravel=!1,this.renderTubes=!1,this.extrusionWidth=.6,this.singleLayerMode=!1,this.initialCameraPosition=[-100,400,450],this.debug=!1,this.inches=!1,this.nonTravelmoves=[],this.disableGradient=!1,this.state=$l.initial,this.beyondFirstMove=!1,this.disposables=[],this._extrusionColor=Ms.defaultExtrusionColor,this.renderLayerIndex=0,this._geometries={},this._backgroundColor=new nt(14737632),this._travelColor=new nt(10027008),this._toolColors={},this.devMode=!1,this._lastRenderTime=0,this._wireframe=!1,this.minLayerThreshold=(t=e.minLayerThreshold)!==null&&t!==void 0?t:this.minLayerThreshold,this.parser=new Cf(this.minLayerThreshold),this.scene=new cz,this.scene.background=this._backgroundColor,e.backgroundColor!==void 0&&(this.backgroundColor=new nt(e.backgroundColor)),this.targetId=e.targetId,this.endLayer=e.endLayer,this.startLayer=e.startLayer,this.lineWidth=e.lineWidth,this.lineHeight=e.lineHeight,this.buildVolume=e.buildVolume,this.initialCameraPosition=(i=e.initialCameraPosition)!==null&&i!==void 0?i:this.initialCameraPosition,this.debug=(a=e.debug)!==null&&a!==void 0?a:this.debug,this.renderExtrusion=(s=e.renderExtrusion)!==null&&s!==void 0?s:this.renderExtrusion,this.renderTravel=(c=e.renderTravel)!==null&&c!==void 0?c:this.renderTravel,this.nonTravelmoves=(u=e.nonTravelMoves)!==null&&u!==void 0?u:this.nonTravelmoves,this.renderTubes=(d=e.renderTubes)!==null&&d!==void 0?d:this.renderTubes,this.extrusionWidth=(h=e.extrusionWidth)!==null&&h!==void 0?h:this.extrusionWidth,this.devMode=(p=e.devMode)!==null&&p!==void 0?p:this.devMode,this.stats=this.devMode?new jz:void 0,e.extrusionColor!==void 0&&(this.extrusionColor=e.extrusionColor),e.travelColor!==void 0&&(this.travelColor=new nt(e.travelColor)),e.topLayerColor!==void 0&&(this.topLayerColor=new nt(e.topLayerColor)),e.lastSegmentColor!==void 0&&(this.lastSegmentColor=new nt(e.lastSegmentColor)),e.toolColors){this._toolColors={};for(const[S,w]of Object.entries(e.toolColors))this._toolColors[parseInt(S)]=new nt(w)}if(e.disableGradient!==void 0&&(this.disableGradient=e.disableGradient),console.info("Using THREE r"+Jf),console.debug("opts",e),this.targetId&&console.warn("`targetId` is deprecated and will removed in the future. Use `canvas` instead."),e.canvas)this.canvas=e.canvas,this.renderer=new Em({canvas:this.canvas,preserveDrawingBuffer:!0});else{if(!this.targetId)throw Error("Set either opts.canvas or opts.targetId");const S=document.getElementById(this.targetId);if(!S)throw new Error("Unable to find element "+this.targetId);this.renderer=new Em({preserveDrawingBuffer:!0}),this.canvas=this.renderer.domElement,S.appendChild(this.canvas)}this.camera=new xr(25,this.canvas.offsetWidth/this.canvas.offsetHeight,10,5e3),this.camera.position.fromArray(this.initialCameraPosition);const m=this.camera.far,g=.8*m;this.scene.fog=new Lv(this._backgroundColor,g,m),this.resize(),this.controls=new Gz(this.camera,this.renderer.domElement),this.initScene(),this.animate(),e.allowDragNDrop&&this._enableDropHandler(),this.initStats()}get extrusionColor(){return this._extrusionColor}set extrusionColor(e){if(Array.isArray(e)){this._extrusionColor=[];for(const[t,i]of e.entries())this._extrusionColor[t]=new nt(i)}else this._extrusionColor=new nt(e)}get currentToolColor(){var e;return this._extrusionColor===void 0?Ms.defaultExtrusionColor:this._extrusionColor instanceof nt?this._extrusionColor:(e=this._extrusionColor[this.state.t])!==null&&e!==void 0?e:Ms.defaultExtrusionColor}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=new nt(e),this.scene.background=this._backgroundColor}get travelColor(){return this._travelColor}set travelColor(e){this._travelColor=new nt(e)}get topLayerColor(){return this._topLayerColor}set topLayerColor(e){this._topLayerColor=e!==void 0?new nt(e):void 0}get lastSegmentColor(){return this._lastSegmentColor}set lastSegmentColor(e){this._lastSegmentColor=e!==void 0?new nt(e):void 0}get layers(){return[this.parser.preamble].concat(this.parser.layers.concat())}get maxLayerIndex(){var e;return((e=this.endLayer)!==null&&e!==void 0?e:this.layers.length)-1}get minLayerIndex(){var e;return this.singleLayerMode?this.maxLayerIndex:((e=this.startLayer)!==null&&e!==void 0?e:0)-1}animate(){var e;this.animationFrameId=requestAnimationFrame((()=>this.animate())),this.controls.update(),this.renderer.render(this.scene,this.camera),(e=this.stats)===null||e===void 0||e.update()}processGCode(e){this.parser.parseGCode(e),this.render()}initScene(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);for(;this.disposables.length>0;){const e=this.disposables.pop();e&&e.dispose()}if(this.debug&&this.buildVolume){const e=new Rz(Math.max(this.buildVolume.x/2,this.buildVolume.y/2)+20);this.scene.add(e)}if(this.buildVolume&&this.drawBuildVolume(),this.renderTubes){console.warn("Volumetric rendering is experimental. It may not work as expected or change in the future.");const e=new Tz(13421772,.3*Math.PI),t=new Az(16777215,Math.PI,void 0,.001);t.position.set(0,500,500),this.scene.add(e),this.scene.add(t)}}createGroup(e){const t=new Fl;return t.name=e,t.quaternion.setFromEuler(new mu(-Math.PI/2,0,0)),this.buildVolume?t.position.set(-this.buildVolume.x/2,0,this.buildVolume.y/2):t.position.set(-100,0,100),t}render(){const e=performance.now();this.group=this.createGroup("allLayers"),this.state=$l.initial,this.initScene();for(let t=0;t<this.layers.length;t++)this.renderLayer(t);this.batchGeometries(),this.scene.add(this.group),this.renderer.render(this.scene,this.camera),this._lastRenderTime=performance.now()-e}renderAnimated(e=1){return Op(this,void 0,void 0,(function*(){return this.initScene(),this.renderLayerIndex=0,this.renderFrameLoop(e>0?e:1)}))}renderFrameLoop(e){return new Promise((t=>{const i=()=>{this.renderLayerIndex>this.layers.length-1?t():(this.renderFrame(e),requestAnimationFrame(i))};i()}))}renderFrame(e){this.group=this.createGroup("layer"+this.renderLayerIndex);for(let t=0;t<e&&this.renderLayerIndex+t<this.layers.length;t++)this.renderLayer(this.renderLayerIndex),this.renderLayerIndex++;this.batchGeometries(),this.scene.add(this.group)}renderLayer(e){var t,i,a,s,c,u,d,h;if(e>this.maxLayerIndex)return;const p=this.layers[e],m={extrusion:[],travel:[],z:this.state.z,height:p.height};for(const g of p.commands)if(g.gcode!="g20"){if(g.gcode.startsWith("t")){this.doRenderExtrusion(m,e),m.extrusion=[];const S=g;this.state.t=S.toolIndex}else if(["g0","g00","g1","g01","g2","g02","g3","g03"].indexOf(g.gcode)>-1){const S=g,w={x:(t=S.params.x)!==null&&t!==void 0?t:this.state.x,y:(i=S.params.y)!==null&&i!==void 0?i:this.state.y,z:(a=S.params.z)!==null&&a!==void 0?a:this.state.z,r:(s=S.params.r)!==null&&s!==void 0?s:this.state.r,e:(c=S.params.e)!==null&&c!==void 0?c:this.state.e,i:(u=S.params.i)!==null&&u!==void 0?u:this.state.i,j:(d=S.params.j)!==null&&d!==void 0?d:this.state.j,t:this.state.t};if(e>=this.minLayerIndex){const E=((h=S.params.e)!==null&&h!==void 0?h:0)>0||this.nonTravelmoves.indexOf(g.gcode)>-1;(w.x!=this.state.x||w.y!=this.state.y||w.z!=this.state.z)&&(E&&this.renderExtrusion||!E&&this.renderTravel)&&(g.gcode=="g2"||g.gcode=="g3"||g.gcode=="g02"||g.gcode=="g03"?this.addArcSegment(m,this.state,w,E,g.gcode=="g2"||g.gcode=="g02"):this.addLineSegment(m,this.state,w,E))}this.state.x=w.x,this.state.y=w.y,this.state.z=w.z,this.beyondFirstMove||(this.beyondFirstMove=!0)}}else this.setInches();this.doRenderExtrusion(m,e)}doRenderExtrusion(e,t){var i,a;if(this.renderExtrusion){let s=this.currentToolColor;if(!this.singleLayerMode&&!this.renderTubes&&!this.disableGradient){const c=.1+.7*t/this.layers.length;s.getHSL(Hp),s=new nt().setHSL(Hp.h,Hp.s,c)}if(t==this.layers.length-1){const c=(i=this._topLayerColor)!==null&&i!==void 0?i:s,u=(a=this._lastSegmentColor)!==null&&a!==void 0?a:c,d=e.extrusion.splice(-3),h=e.extrusion.splice(-3);this.renderTubes?(this.addTubeLine(e.extrusion,c.getHex(),e.height),this.addTubeLine([...h,...d],u.getHex(),e.height)):(this.addLine(e.extrusion,c.getHex()),this.addLine([...h,...d],u.getHex()))}else this.renderTubes?this.addTubeLine(e.extrusion,s.getHex(),e.height):this.addLine(e.extrusion,s.getHex())}this.renderTravel&&this.addLine(e.travel,this._travelColor.getHex())}setInches(){this.beyondFirstMove?console.warn("Switching units after movement is already made is discouraged and is not supported."):this.inches=!0}drawBuildVolume(){if(!this.buildVolume)return;this.scene.add(new $z(this.buildVolume.x,10,this.buildVolume.y,10));const e=Xz(this.buildVolume.x,this.buildVolume.z,this.buildVolume.y,8947848);e.position.setY(this.buildVolume.z/2),this.scene.add(e)}clear(){this.resetState(),this.parser=new Cf(this.minLayerThreshold)}resetState(){var e;this.startLayer=1,this.endLayer=1/0,this.singleLayerMode=!1,this.beyondFirstMove=!1,this.state=$l.initial,(e=this.devGui)===null||e===void 0||e.reset(),this._geometries={}}resize(){const[e,t]=[this.canvas.offsetWidth,this.canvas.offsetHeight];this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1)}addLineSegment(e,t,i,a){(a?e.extrusion:e.travel).push(t.x,t.y,t.z,i.x,i.y,i.z)}addArcSegment(e,t,i,a,s){const c=a?e.extrusion:e.travel,u=t.x,d=t.y,h=t.z,p=i.x,m=i.y,g=i.z;let S=i.r,w=i.i,E=i.j;if(S){const Q=p-u,se=m-d,re=Math.sqrt(Math.pow(Q/2,2)+Math.pow(se/2,2));S=Math.max(S,re);const X=Math.pow(Q,2)+Math.pow(se,2),ie=Math.pow(S,2)-X/4;let $=Math.sqrt(ie/X);(s&&S<0||!s&&S>0)&&($=-$),w=Q/2+se*$,E=se/2-Q*$}const y=u==p&&d==m,_=u+w,b=d+E,M=Math.sqrt(w*w+E*E),R=Math.atan2(-E,-w),U=Math.atan2(m-b,p-_);let N;y?N=2*Math.PI:(N=s?R-U:U-R,N<0&&(N+=2*Math.PI));let I=M*N/1.8;this.inches&&(I*=25),I<1&&(I=1);let ce=N/I;ce*=s?-1:1;const C=[];C.push({x:u,y:d,z:h});const O=(h-g)/I;let oe=u,ne=d,pe=h,H=R;for(let Q=0;Q<I-1;Q++)H+=ce,oe=_+M*Math.cos(H),ne=b+M*Math.sin(H),pe+=O,C.push({x:oe,y:ne,z:pe});C.push({x:i.x,y:i.y,z:i.z});for(let Q=0;Q<C.length-1;Q++)c.push(C[Q].x,C[Q].y,C[Q].z,C[Q+1].x,C[Q+1].y,C[Q+1].z)}addLine(e,t){var i;if(typeof this.lineWidth=="number"&&this.lineWidth>0)return void this.addThickLine(e,t);const a=new $n;a.setAttribute("position",new ln(e,3)),this.disposables.push(a);const s=new gu({color:t});this.disposables.push(s);const c=new rd(a,s);(i=this.group)===null||i===void 0||i.add(c)}addTubeLine(e,t,i=.2){let a=[];const s=[];for(let c=0;c<e.length;c+=6){const u=e.slice(c,c+9),d=new B(u[0],u[1],u[2]),h=new B(u[3],u[4],u[5]),p=new B(u[6],u[7],u[8]);a.push(d),h.equals(p)||(a.push(h),s.push(a),a=[])}s.forEach((c=>{var u;const d=new qz(c,this.extrusionWidth,this.lineHeight||i,4);(u=this._geometries)[t]||(u[t]=[]),this._geometries[t].push(d)}))}addThickLine(e,t){var i;if(!e.length||!this.lineWidth)return;const a=new pM;this.disposables.push(a);const s=new hM({color:t,linewidth:this.lineWidth/(1e3*window.devicePixelRatio)});this.disposables.push(s),a.setPositions(e);const c=new Wz(a,s);(i=this.group)===null||i===void 0||i.add(c)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[],this.controls.dispose(),this.renderer.dispose(),this.cancelAnimation()}cancelAnimation(){this.animationFrameId!==void 0&&cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0}_enableDropHandler(){console.warn("Drag and drop is deprecated as a library feature. See the demo how to implement your own."),this.canvas.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.canvas.classList.add("dragging")})),this.canvas.addEventListener("dragleave",(e=>{e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging")})),this.canvas.addEventListener("drop",(e=>Op(this,void 0,void 0,(function*(){var t,i;e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging");const a=((i=(t=e.dataTransfer)===null||t===void 0?void 0:t.files)!==null&&i!==void 0?i:[])[0];this.clear(),yield this._readFromStream(a.stream()),this.render()}))))}batchGeometries(){if(this._geometries)for(const e in this._geometries){const t=this.createBatchMesh(parseInt(e));for(;this._geometries[e].length>0;){const i=this._geometries[e].pop();t.addGeometry(i)}}}createBatchMesh(e){var t;const i=this._geometries[e],a=new Sz({color:e,wireframe:this._wireframe});this.disposables.push(a);const s=i.reduce(((u,d)=>3*d.attributes.position.count+u),0),c=new _z(i.length,s,void 0,a);return this.disposables.push(c),(t=this.group)===null||t===void 0||t.add(c),c}_readFromStream(e){var t,i;return Op(this,void 0,void 0,(function*(){const a=e.getReader();let s,c="",u=0;do{console.debug("reading from stream"),s=yield a.read(),u+=(i=(t=s.value)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0;const h=(d=s.value,new TextDecoder("utf-8").decode(d)),p=h.lastIndexOf(`
`),m=h.slice(0,p);this.parser.parseGCode(c+m),c=h.slice(p)}while(!s.done);var d;console.debug("read from stream",u)}))}initGui(){typeof this.devMode=="boolean"&&this.devMode===!0?this.devGui=new Dx(this):typeof this.devMode=="object"&&(this.devGui=new Dx(this,this.devMode))}initStats(){var e;this.stats&&(typeof this.devMode=="object"&&(this.statsContainer=this.devMode.statsContainer),((e=this.statsContainer)!==null&&e!==void 0?e:document.body).appendChild(this.stats.dom),this.stats.dom.classList.add("stats"),this.initGui())}}Ms.defaultExtrusionColor=new nt("hotpink");const Yz=function(n){return new Ms(n)},Kz="_canvas_1cjd4_5",Zz={canvas:Kz},Jz=({gcode:n,endLayer:e,onMaxLayerIndex:t})=>{const i=ke.useRef(null),a=ke.useRef({webgl:null});return ke.useEffect(()=>{i.current&&!a.current.webgl&&(a.current.webgl=Yz({canvas:i.current,lineWidth:4,lineHeight:4,renderTravel:!1,renderExtrusion:!0,renderTubes:!1,startLayer:0,endLayer:e,backgroundColor:"black",buildVolume:{x:220,y:220,z:0}}),a.current.webgl.clear(),a.current.webgl.processGCode(n),t(a.current.webgl.layers.length),a.current.webgl.render())},[]),ke.useEffect(()=>{i.current&&a.current.webgl&&(a.current.webgl.clear(),a.current.webgl.processGCode(n),t(a.current.webgl.layers.length),a.current.webgl.render())},[n]),ke.useEffect(()=>{i.current&&a.current.webgl&&(a.current.webgl.endLayer=e,a.current.webgl.render())},[e]),Qe.jsx("canvas",{ref:i,className:Zz.canvas})};Wx();function Ix(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function mM(...n){return e=>{let t=!1;const i=n.map(a=>{const s=Ix(a,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let a=0;a<i.length;a++){const s=i[a];typeof s=="function"?s():Ix(n[a],null)}}}}function ko(...n){return ke.useCallback(mM(...n),n)}function Am(n){const e=Qz(n),t=ke.forwardRef((i,a)=>{const{children:s,...c}=i,u=ke.Children.toArray(s),d=u.find(tB);if(d){const h=d.props.children,p=u.map(m=>m===d?ke.Children.count(h)>1?ke.Children.only(null):ke.isValidElement(h)?h.props.children:null:m);return Qe.jsx(e,{...c,ref:a,children:ke.isValidElement(h)?ke.cloneElement(h,void 0,p):null})}return Qe.jsx(e,{...c,ref:a,children:s})});return t.displayName=`${n}.Slot`,t}function Qz(n){const e=ke.forwardRef((t,i)=>{const{children:a,...s}=t;if(ke.isValidElement(a)){const c=rB(a),u=nB(s,a.props);return a.type!==ke.Fragment&&(u.ref=i?mM(i,c):c),ke.cloneElement(a,u)}return ke.Children.count(a)>1?ke.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var eB=Symbol("radix.slottable");function tB(n){return ke.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===eB}function nB(n,e){const t={...e};for(const i in e){const a=n[i],s=e[i];/^on[A-Z]/.test(i)?a&&s?t[i]=(...u)=>{const d=s(...u);return a(...u),d}:a&&(t[i]=a):i==="style"?t[i]={...a,...s}:i==="className"&&(t[i]=[a,s].filter(Boolean).join(" "))}return{...n,...t}}function rB(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var iB=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],_u=iB.reduce((n,e)=>{const t=Am(`Primitive.${e}`),i=ke.forwardRef((a,s)=>{const{asChild:c,...u}=a,d=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),Qe.jsx(d,{...u,ref:s})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function vM(n,e=[]){let t=[];function i(s,c){const u=ke.createContext(c),d=t.length;t=[...t,c];const h=m=>{const{scope:g,children:S,...w}=m,E=g?.[n]?.[d]||u,y=ke.useMemo(()=>w,Object.values(w));return Qe.jsx(E.Provider,{value:y,children:S})};h.displayName=s+"Provider";function p(m,g){const S=g?.[n]?.[d]||u,w=ke.useContext(S);if(w)return w;if(c!==void 0)return c;throw new Error(`\`${m}\` must be used within \`${s}\``)}return[h,p]}const a=()=>{const s=t.map(c=>ke.createContext(c));return function(u){const d=u?.[n]||s;return ke.useMemo(()=>({[`__scope${n}`]:{...u,[n]:d}}),[u,d])}};return a.scopeName=n,[i,oB(a,...e)]}function oB(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const c=i.reduce((u,{useScope:d,scopeName:h})=>{const m=d(s)[`__scope${h}`];return{...u,...m}},{});return ke.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function aB(n){const e=n+"CollectionProvider",[t,i]=vM(e),[a,s]=t(e,{collectionRef:{current:null},itemMap:new Map}),c=E=>{const{scope:y,children:_}=E,b=Eo.useRef(null),M=Eo.useRef(new Map).current;return Qe.jsx(a,{scope:y,itemMap:M,collectionRef:b,children:_})};c.displayName=e;const u=n+"CollectionSlot",d=Am(u),h=Eo.forwardRef((E,y)=>{const{scope:_,children:b}=E,M=s(u,_),R=ko(y,M.collectionRef);return Qe.jsx(d,{ref:R,children:b})});h.displayName=u;const p=n+"CollectionItemSlot",m="data-radix-collection-item",g=Am(p),S=Eo.forwardRef((E,y)=>{const{scope:_,children:b,...M}=E,R=Eo.useRef(null),U=ko(y,R),N=s(p,_);return Eo.useEffect(()=>(N.itemMap.set(R,{ref:R,...M}),()=>void N.itemMap.delete(R))),Qe.jsx(g,{[m]:"",ref:U,children:b})});S.displayName=p;function w(E){const y=s(n+"CollectionConsumer",E);return Eo.useCallback(()=>{const b=y.collectionRef.current;if(!b)return[];const M=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(y.itemMap.values()).sort((N,I)=>M.indexOf(N.ref.current)-M.indexOf(I.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:c,Slot:h,ItemSlot:S},w,i]}function ys(n,e,{checkForDefaultPrevented:t=!0}={}){return function(a){if(n?.(a),t===!1||!a.defaultPrevented)return e?.(a)}}var gM=globalThis?.document?ke.useLayoutEffect:()=>{},sB=Gp[" useInsertionEffect ".trim().toString()]||gM;function lB({prop:n,defaultProp:e,onChange:t=()=>{},caller:i}){const[a,s,c]=uB({defaultProp:e,onChange:t}),u=n!==void 0,d=u?n:a;{const p=ke.useRef(n!==void 0);ke.useEffect(()=>{const m=p.current;m!==u&&console.warn(`${i} is changing from ${m?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=u},[u,i])}const h=ke.useCallback(p=>{if(u){const m=cB(p)?p(n):p;m!==n&&c.current?.(m)}else s(p)},[u,n,s,c]);return[d,h]}function uB({defaultProp:n,onChange:e}){const[t,i]=ke.useState(n),a=ke.useRef(t),s=ke.useRef(e);return sB(()=>{s.current=e},[e]),ke.useEffect(()=>{a.current!==t&&(s.current?.(t),a.current=t)},[t,a]),[t,i,s]}function cB(n){return typeof n=="function"}var fB=ke.createContext(void 0);function dB(n){const e=ke.useContext(fB);return n||e||"ltr"}function hB(n){const e=ke.useRef({value:n,previous:n});return ke.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}function pB(n){const[e,t]=ke.useState(void 0);return gM(()=>{if(n){t({width:n.offsetWidth,height:n.offsetHeight});const i=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const s=a[0];let c,u;if("borderBoxSize"in s){const d=s.borderBoxSize,h=Array.isArray(d)?d[0]:d;c=h.inlineSize,u=h.blockSize}else c=n.offsetWidth,u=n.offsetHeight;t({width:c,height:u})});return i.observe(n,{box:"border-box"}),()=>i.unobserve(n)}else t(void 0)},[n]),e}function _M(n,[e,t]){return Math.min(t,Math.max(e,n))}var yM=["PageUp","PageDown"],xM=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],SM={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Vs="Slider",[Tm,mB,vB]=aB(Vs),[EM,$4]=vM(Vs,[vB]),[gB,id]=EM(Vs),wM=ke.forwardRef((n,e)=>{const{name:t,min:i=0,max:a=100,step:s=1,orientation:c="horizontal",disabled:u=!1,minStepsBetweenThumbs:d=0,defaultValue:h=[i],value:p,onValueChange:m=()=>{},onValueCommit:g=()=>{},inverted:S=!1,form:w,...E}=n,y=ke.useRef(new Set),_=ke.useRef(0),M=c==="horizontal"?_B:yB,[R=[],U]=lB({prop:p,defaultProp:h,onChange:oe=>{[...y.current][_.current]?.focus(),m(oe)}}),N=ke.useRef(R);function I(oe){const ne=MB(R,oe);O(oe,ne)}function ce(oe){O(oe,_.current)}function C(){const oe=N.current[_.current];R[_.current]!==oe&&g(R)}function O(oe,ne,{commit:pe}={commit:!1}){const H=CB(s),Q=RB(Math.round((oe-i)/s)*s+i,H),se=_M(Q,[i,a]);U((re=[])=>{const X=EB(re,se,ne);if(bB(X,d*s)){_.current=X.indexOf(se);const ie=String(X)!==String(re);return ie&&pe&&g(X),ie?X:re}else return re})}return Qe.jsx(gB,{scope:n.__scopeSlider,name:t,disabled:u,min:i,max:a,valueIndexToChangeRef:_,thumbs:y.current,values:R,orientation:c,form:w,children:Qe.jsx(Tm.Provider,{scope:n.__scopeSlider,children:Qe.jsx(Tm.Slot,{scope:n.__scopeSlider,children:Qe.jsx(M,{"aria-disabled":u,"data-disabled":u?"":void 0,...E,ref:e,onPointerDown:ys(E.onPointerDown,()=>{u||(N.current=R)}),min:i,max:a,inverted:S,onSlideStart:u?void 0:I,onSlideMove:u?void 0:ce,onSlideEnd:u?void 0:C,onHomeKeyDown:()=>!u&&O(i,0,{commit:!0}),onEndKeyDown:()=>!u&&O(a,R.length-1,{commit:!0}),onStepKeyDown:({event:oe,direction:ne})=>{if(!u){const Q=yM.includes(oe.key)||oe.shiftKey&&xM.includes(oe.key)?10:1,se=_.current,re=R[se],X=s*Q*ne;O(re+X,se,{commit:!0})}}})})})})});wM.displayName=Vs;var[MM,AM]=EM(Vs,{startEdge:"left",endEdge:"right",size:"width",direction:1}),_B=ke.forwardRef((n,e)=>{const{min:t,max:i,dir:a,inverted:s,onSlideStart:c,onSlideMove:u,onSlideEnd:d,onStepKeyDown:h,...p}=n,[m,g]=ke.useState(null),S=ko(e,M=>g(M)),w=ke.useRef(void 0),E=dB(a),y=E==="ltr",_=y&&!s||!y&&s;function b(M){const R=w.current||m.getBoundingClientRect(),U=[0,R.width],I=Uv(U,_?[t,i]:[i,t]);return w.current=R,I(M-R.left)}return Qe.jsx(MM,{scope:n.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width",children:Qe.jsx(TM,{dir:E,"data-orientation":"horizontal",...p,ref:S,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:M=>{const R=b(M.clientX);c?.(R)},onSlideMove:M=>{const R=b(M.clientX);u?.(R)},onSlideEnd:()=>{w.current=void 0,d?.()},onStepKeyDown:M=>{const U=SM[_?"from-left":"from-right"].includes(M.key);h?.({event:M,direction:U?-1:1})}})})}),yB=ke.forwardRef((n,e)=>{const{min:t,max:i,inverted:a,onSlideStart:s,onSlideMove:c,onSlideEnd:u,onStepKeyDown:d,...h}=n,p=ke.useRef(null),m=ko(e,p),g=ke.useRef(void 0),S=!a;function w(E){const y=g.current||p.current.getBoundingClientRect(),_=[0,y.height],M=Uv(_,S?[i,t]:[t,i]);return g.current=y,M(E-y.top)}return Qe.jsx(MM,{scope:n.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:Qe.jsx(TM,{"data-orientation":"vertical",...h,ref:m,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:E=>{const y=w(E.clientY);s?.(y)},onSlideMove:E=>{const y=w(E.clientY);c?.(y)},onSlideEnd:()=>{g.current=void 0,u?.()},onStepKeyDown:E=>{const _=SM[S?"from-bottom":"from-top"].includes(E.key);d?.({event:E,direction:_?-1:1})}})})}),TM=ke.forwardRef((n,e)=>{const{__scopeSlider:t,onSlideStart:i,onSlideMove:a,onSlideEnd:s,onHomeKeyDown:c,onEndKeyDown:u,onStepKeyDown:d,...h}=n,p=id(Vs,t);return Qe.jsx(_u.span,{...h,ref:e,onKeyDown:ys(n.onKeyDown,m=>{m.key==="Home"?(c(m),m.preventDefault()):m.key==="End"?(u(m),m.preventDefault()):yM.concat(xM).includes(m.key)&&(d(m),m.preventDefault())}),onPointerDown:ys(n.onPointerDown,m=>{const g=m.target;g.setPointerCapture(m.pointerId),m.preventDefault(),p.thumbs.has(g)?g.focus():i(m)}),onPointerMove:ys(n.onPointerMove,m=>{m.target.hasPointerCapture(m.pointerId)&&a(m)}),onPointerUp:ys(n.onPointerUp,m=>{const g=m.target;g.hasPointerCapture(m.pointerId)&&(g.releasePointerCapture(m.pointerId),s(m))})})}),bM="SliderTrack",CM=ke.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=id(bM,t);return Qe.jsx(_u.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...i,ref:e})});CM.displayName=bM;var bm="SliderRange",RM=ke.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=id(bm,t),s=AM(bm,t),c=ke.useRef(null),u=ko(e,c),d=a.values.length,h=a.values.map(g=>DM(g,a.min,a.max)),p=d>1?Math.min(...h):0,m=100-Math.max(...h);return Qe.jsx(_u.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...i,ref:u,style:{...n.style,[s.startEdge]:p+"%",[s.endEdge]:m+"%"}})});RM.displayName=bm;var Cm="SliderThumb",PM=ke.forwardRef((n,e)=>{const t=mB(n.__scopeSlider),[i,a]=ke.useState(null),s=ko(e,u=>a(u)),c=ke.useMemo(()=>i?t().findIndex(u=>u.ref.current===i):-1,[t,i]);return Qe.jsx(xB,{...n,ref:s,index:c})}),xB=ke.forwardRef((n,e)=>{const{__scopeSlider:t,index:i,name:a,...s}=n,c=id(Cm,t),u=AM(Cm,t),[d,h]=ke.useState(null),p=ko(e,b=>h(b)),m=d?c.form||!!d.closest("form"):!0,g=pB(d),S=c.values[i],w=S===void 0?0:DM(S,c.min,c.max),E=wB(i,c.values.length),y=g?.[u.size],_=y?AB(y,w,u.direction):0;return ke.useEffect(()=>{if(d)return c.thumbs.add(d),()=>{c.thumbs.delete(d)}},[d,c.thumbs]),Qe.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u.startEdge]:`calc(${w}% + ${_}px)`},children:[Qe.jsx(Tm.ItemSlot,{scope:n.__scopeSlider,children:Qe.jsx(_u.span,{role:"slider","aria-label":n["aria-label"]||E,"aria-valuemin":c.min,"aria-valuenow":S,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...s,ref:p,style:S===void 0?{display:"none"}:n.style,onFocus:ys(n.onFocus,()=>{c.valueIndexToChangeRef.current=i})})}),m&&Qe.jsx(LM,{name:a??(c.name?c.name+(c.values.length>1?"[]":""):void 0),form:c.form,value:S},i)]})});PM.displayName=Cm;var SB="RadioBubbleInput",LM=ke.forwardRef(({__scopeSlider:n,value:e,...t},i)=>{const a=ke.useRef(null),s=ko(a,i),c=hB(e);return ke.useEffect(()=>{const u=a.current;if(!u)return;const d=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(c!==e&&p){const m=new Event("input",{bubbles:!0});p.call(u,e),u.dispatchEvent(m)}},[c,e]),Qe.jsx(_u.input,{style:{display:"none"},...t,ref:s,defaultValue:e})});LM.displayName=SB;function EB(n=[],e,t){const i=[...n];return i[t]=e,i.sort((a,s)=>a-s)}function DM(n,e,t){const s=100/(t-e)*(n-e);return _M(s,[0,100])}function wB(n,e){return e>2?`Value ${n+1} of ${e}`:e===2?["Minimum","Maximum"][n]:void 0}function MB(n,e){if(n.length===1)return 0;const t=n.map(a=>Math.abs(a-e)),i=Math.min(...t);return t.indexOf(i)}function AB(n,e,t){const i=n/2,s=Uv([0,50],[0,i]);return(i-s(e)*t)*t}function TB(n){return n.slice(0,-1).map((e,t)=>n[t+1]-e)}function bB(n,e){if(e>0){const t=TB(n);return Math.min(...t)>=e}return!0}function Uv(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(n[1]-n[0]);return e[0]+i*(t-n[0])}}function CB(n){return(String(n).split(".")[1]||"").length}function RB(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}var PB=wM,LB=CM,DB=RM,IB=PM;const UB="_Root_mtzzd_1",NB="_Track_mtzzd_12",FB="_Range_mtzzd_21",OB="_Thumb_mtzzd_28",cf={Root:UB,Track:NB,Range:FB,Thumb:OB},kB=n=>Qe.jsxs(PB,{onValueChange:n.onChange,className:cf.Root,orientation:"vertical",defaultValue:[n.value],max:n.max,min:n.min,step:1,children:[Qe.jsx(LB,{className:cf.Track,children:Qe.jsx(DB,{className:cf.Range})}),Qe.jsx(IB,{className:cf.Thumb,"aria-label":"Volume"})]});function Rm(){return Rm=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Rm.apply(null,arguments)}function zB(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function BB(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var HB=(function(){function n(t){var i=this;this._insertTag=function(a){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(a,s),i.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(BB(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=zB(a);try{s.insertRule(i,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var a;return(a=i.parentNode)==null?void 0:a.removeChild(i)}),this.tags=[],this.ctr=0},n})(),Vn="-ms-",Rf="-moz-",It="-webkit-",IM="comm",Nv="rule",Fv="decl",VB="@import",UM="@keyframes",GB="@layer",WB=Math.abs,od=String.fromCharCode,$B=Object.assign;function XB(n,e){return Ln(n,0)^45?(((e<<2^Ln(n,0))<<2^Ln(n,1))<<2^Ln(n,2))<<2^Ln(n,3):0}function NM(n){return n.trim()}function jB(n,e){return(n=e.exec(n))?n[0]:n}function Ut(n,e,t){return n.replace(e,t)}function Pm(n,e){return n.indexOf(e)}function Ln(n,e){return n.charCodeAt(e)|0}function Ql(n,e,t){return n.slice(e,t)}function di(n){return n.length}function Ov(n){return n.length}function ff(n,e){return e.push(n),n}function qB(n,e){return n.map(e).join("")}var ad=1,Fs=1,FM=0,dr=0,dn=0,Gs="";function sd(n,e,t,i,a,s,c){return{value:n,root:e,parent:t,type:i,props:a,children:s,line:ad,column:Fs,length:c,return:""}}function Ul(n,e){return $B(sd("",null,null,"",null,null,0),n,{length:-n.length},e)}function YB(){return dn}function KB(){return dn=dr>0?Ln(Gs,--dr):0,Fs--,dn===10&&(Fs=1,ad--),dn}function Er(){return dn=dr<FM?Ln(Gs,dr++):0,Fs++,dn===10&&(Fs=1,ad++),dn}function Si(){return Ln(Gs,dr)}function mf(){return dr}function yu(n,e){return Ql(Gs,n,e)}function eu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function OM(n){return ad=Fs=1,FM=di(Gs=n),dr=0,[]}function kM(n){return Gs="",n}function vf(n){return NM(yu(dr-1,Lm(n===91?n+2:n===40?n+1:n)))}function ZB(n){for(;(dn=Si())&&dn<33;)Er();return eu(n)>2||eu(dn)>3?"":" "}function JB(n,e){for(;--e&&Er()&&!(dn<48||dn>102||dn>57&&dn<65||dn>70&&dn<97););return yu(n,mf()+(e<6&&Si()==32&&Er()==32))}function Lm(n){for(;Er();)switch(dn){case n:return dr;case 34:case 39:n!==34&&n!==39&&Lm(dn);break;case 40:n===41&&Lm(n);break;case 92:Er();break}return dr}function QB(n,e){for(;Er()&&n+dn!==57;)if(n+dn===84&&Si()===47)break;return"/*"+yu(e,dr-1)+"*"+od(n===47?n:Er())}function e4(n){for(;!eu(Si());)Er();return yu(n,dr)}function t4(n){return kM(gf("",null,null,null,[""],n=OM(n),0,[0],n))}function gf(n,e,t,i,a,s,c,u,d){for(var h=0,p=0,m=c,g=0,S=0,w=0,E=1,y=1,_=1,b=0,M="",R=a,U=s,N=i,I=M;y;)switch(w=b,b=Er()){case 40:if(w!=108&&Ln(I,m-1)==58){Pm(I+=Ut(vf(b),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:I+=vf(b);break;case 9:case 10:case 13:case 32:I+=ZB(w);break;case 92:I+=JB(mf()-1,7);continue;case 47:switch(Si()){case 42:case 47:ff(n4(QB(Er(),mf()),e,t),d);break;default:I+="/"}break;case 123*E:u[h++]=di(I)*_;case 125*E:case 59:case 0:switch(b){case 0:case 125:y=0;case 59+p:_==-1&&(I=Ut(I,/\f/g,"")),S>0&&di(I)-m&&ff(S>32?Nx(I+";",i,t,m-1):Nx(Ut(I," ","")+";",i,t,m-2),d);break;case 59:I+=";";default:if(ff(N=Ux(I,e,t,h,p,a,u,M,R=[],U=[],m),s),b===123)if(p===0)gf(I,e,N,N,R,s,m,u,U);else switch(g===99&&Ln(I,3)===110?100:g){case 100:case 108:case 109:case 115:gf(n,N,N,i&&ff(Ux(n,N,N,0,0,a,u,M,a,R=[],m),U),a,U,m,u,i?R:U);break;default:gf(I,N,N,N,[""],U,0,u,U)}}h=p=S=0,E=_=1,M=I="",m=c;break;case 58:m=1+di(I),S=w;default:if(E<1){if(b==123)--E;else if(b==125&&E++==0&&KB()==125)continue}switch(I+=od(b),b*E){case 38:_=p>0?1:(I+="\f",-1);break;case 44:u[h++]=(di(I)-1)*_,_=1;break;case 64:Si()===45&&(I+=vf(Er())),g=Si(),p=m=di(M=I+=e4(mf())),b++;break;case 45:w===45&&di(I)==2&&(E=0)}}return s}function Ux(n,e,t,i,a,s,c,u,d,h,p){for(var m=a-1,g=a===0?s:[""],S=Ov(g),w=0,E=0,y=0;w<i;++w)for(var _=0,b=Ql(n,m+1,m=WB(E=c[w])),M=n;_<S;++_)(M=NM(E>0?g[_]+" "+b:Ut(b,/&\f/g,g[_])))&&(d[y++]=M);return sd(n,e,t,a===0?Nv:u,d,h,p)}function n4(n,e,t){return sd(n,e,t,IM,od(YB()),Ql(n,2,-2),0)}function Nx(n,e,t,i){return sd(n,e,t,Fv,Ql(n,0,i),Ql(n,i+1,-1),i)}function As(n,e){for(var t="",i=Ov(n),a=0;a<i;a++)t+=e(n[a],a,n,e)||"";return t}function r4(n,e,t,i){switch(n.type){case GB:if(n.children.length)break;case VB:case Fv:return n.return=n.return||n.value;case IM:return"";case UM:return n.return=n.value+"{"+As(n.children,i)+"}";case Nv:n.value=n.props.join(",")}return di(t=As(n.children,i))?n.return=n.value+"{"+t+"}":""}function i4(n){var e=Ov(n);return function(t,i,a,s){for(var c="",u=0;u<e;u++)c+=n[u](t,i,a,s)||"";return c}}function o4(n){return function(e){e.root||(e=e.return)&&n(e)}}function zM(n){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=n(t)),e[t]}}var a4=function(e,t,i){for(var a=0,s=0;a=s,s=Si(),a===38&&s===12&&(t[i]=1),!eu(s);)Er();return yu(e,dr)},s4=function(e,t){var i=-1,a=44;do switch(eu(a)){case 0:a===38&&Si()===12&&(t[i]=1),e[i]+=a4(dr-1,t,i);break;case 2:e[i]+=vf(a);break;case 4:if(a===44){e[++i]=Si()===58?"&\f":"",t[i]=e[i].length;break}default:e[i]+=od(a)}while(a=Er());return e},l4=function(e,t){return kM(s4(OM(e),t))},Fx=new WeakMap,u4=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,i=e.parent,a=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Fx.get(i))&&!a){Fx.set(e,!0);for(var s=[],c=l4(t,s),u=i.props,d=0,h=0;d<c.length;d++)for(var p=0;p<u.length;p++,h++)e.props[h]=s[d]?c[d].replace(/&\f/g,u[p]):u[p]+" "+c[d]}}},c4=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function BM(n,e){switch(XB(n,e)){case 5103:return It+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return It+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return It+n+Rf+n+Vn+n+n;case 6828:case 4268:return It+n+Vn+n+n;case 6165:return It+n+Vn+"flex-"+n+n;case 5187:return It+n+Ut(n,/(\w+).+(:[^]+)/,It+"box-$1$2"+Vn+"flex-$1$2")+n;case 5443:return It+n+Vn+"flex-item-"+Ut(n,/flex-|-self/,"")+n;case 4675:return It+n+Vn+"flex-line-pack"+Ut(n,/align-content|flex-|-self/,"")+n;case 5548:return It+n+Vn+Ut(n,"shrink","negative")+n;case 5292:return It+n+Vn+Ut(n,"basis","preferred-size")+n;case 6060:return It+"box-"+Ut(n,"-grow","")+It+n+Vn+Ut(n,"grow","positive")+n;case 4554:return It+Ut(n,/([^-])(transform)/g,"$1"+It+"$2")+n;case 6187:return Ut(Ut(Ut(n,/(zoom-|grab)/,It+"$1"),/(image-set)/,It+"$1"),n,"")+n;case 5495:case 3959:return Ut(n,/(image-set\([^]*)/,It+"$1$`$1");case 4968:return Ut(Ut(n,/(.+:)(flex-)?(.*)/,It+"box-pack:$3"+Vn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+It+n+n;case 4095:case 3583:case 4068:case 2532:return Ut(n,/(.+)-inline(.+)/,It+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(di(n)-1-e>6)switch(Ln(n,e+1)){case 109:if(Ln(n,e+4)!==45)break;case 102:return Ut(n,/(.+:)(.+)-([^]+)/,"$1"+It+"$2-$3$1"+Rf+(Ln(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Pm(n,"stretch")?BM(Ut(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(Ln(n,e+1)!==115)break;case 6444:switch(Ln(n,di(n)-3-(~Pm(n,"!important")&&10))){case 107:return Ut(n,":",":"+It)+n;case 101:return Ut(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+It+(Ln(n,14)===45?"inline-":"")+"box$3$1"+It+"$2$3$1"+Vn+"$2box$3")+n}break;case 5936:switch(Ln(n,e+11)){case 114:return It+n+Vn+Ut(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return It+n+Vn+Ut(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return It+n+Vn+Ut(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return It+n+Vn+n+n}return n}var f4=function(e,t,i,a){if(e.length>-1&&!e.return)switch(e.type){case Fv:e.return=BM(e.value,e.length);break;case UM:return As([Ul(e,{value:Ut(e.value,"@","@"+It)})],a);case Nv:if(e.length)return qB(e.props,function(s){switch(jB(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return As([Ul(e,{props:[Ut(s,/:(read-\w+)/,":"+Rf+"$1")]})],a);case"::placeholder":return As([Ul(e,{props:[Ut(s,/:(plac\w+)/,":"+It+"input-$1")]}),Ul(e,{props:[Ut(s,/:(plac\w+)/,":"+Rf+"$1")]}),Ul(e,{props:[Ut(s,/:(plac\w+)/,Vn+"input-$1")]})],a)}return""})}},d4=[f4],h4=function(e){var t=e.key;if(t==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(E){var y=E.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var a=e.stylisPlugins||d4,s={},c,u=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(E){for(var y=E.getAttribute("data-emotion").split(" "),_=1;_<y.length;_++)s[y[_]]=!0;u.push(E)});var d,h=[u4,c4];{var p,m=[r4,o4(function(E){p.insert(E)})],g=i4(h.concat(a,m)),S=function(y){return As(t4(y),g)};d=function(y,_,b,M){p=b,S(y?y+"{"+_.styles+"}":_.styles),M&&(w.inserted[_.name]=!0)}}var w={key:t,sheet:new HB({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:d};return w.sheet.hydrate(u),w},p4=!0;function m4(n,e,t){var i="";return t.split(" ").forEach(function(a){n[a]!==void 0?e.push(n[a]+";"):a&&(i+=a+" ")}),i}var HM=function(e,t,i){var a=e.key+"-"+t.name;(i===!1||p4===!1)&&e.registered[a]===void 0&&(e.registered[a]=t.styles)},v4=function(e,t,i){HM(e,t,i);var a=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+a:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function g4(n){for(var e=0,t,i=0,a=n.length;a>=4;++i,a-=4)t=n.charCodeAt(i)&255|(n.charCodeAt(++i)&255)<<8|(n.charCodeAt(++i)&255)<<16|(n.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(n.charCodeAt(i+2)&255)<<16;case 2:e^=(n.charCodeAt(i+1)&255)<<8;case 1:e^=n.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var _4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},y4=/[A-Z]|^ms/g,x4=/_EMO_([^_]+?)_([^]*?)_EMO_/g,VM=function(e){return e.charCodeAt(1)===45},Ox=function(e){return e!=null&&typeof e!="boolean"},Vp=zM(function(n){return VM(n)?n:n.replace(y4,"-$&").toLowerCase()}),kx=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(x4,function(i,a,s){return hi={name:a,styles:s,next:hi},a})}return _4[e]!==1&&!VM(e)&&typeof t=="number"&&t!==0?t+"px":t};function tu(n,e,t){if(t==null)return"";var i=t;if(i.__emotion_styles!==void 0)return i;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return hi={name:a.name,styles:a.styles,next:hi},a.name;var s=t;if(s.styles!==void 0){var c=s.next;if(c!==void 0)for(;c!==void 0;)hi={name:c.name,styles:c.styles,next:hi},c=c.next;var u=s.styles+";";return u}return S4(n,e,t)}case"function":{if(n!==void 0){var d=hi,h=t(n);return hi=d,tu(n,e,h)}break}}var p=t;if(e==null)return p;var m=e[p];return m!==void 0?m:p}function S4(n,e,t){var i="";if(Array.isArray(t))for(var a=0;a<t.length;a++)i+=tu(n,e,t[a])+";";else for(var s in t){var c=t[s];if(typeof c!="object"){var u=c;e!=null&&e[u]!==void 0?i+=s+"{"+e[u]+"}":Ox(u)&&(i+=Vp(s)+":"+kx(s,u)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var d=0;d<c.length;d++)Ox(c[d])&&(i+=Vp(s)+":"+kx(s,c[d])+";");else{var h=tu(n,e,c);switch(s){case"animation":case"animationName":{i+=Vp(s)+":"+h+";";break}default:i+=s+"{"+h+"}"}}}return i}var zx=/label:\s*([^\s;{]+)\s*(;|$)/g,hi;function E4(n,e,t){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var i=!0,a="";hi=void 0;var s=n[0];if(s==null||s.raw===void 0)i=!1,a+=tu(t,e,s);else{var c=s;a+=c[0]}for(var u=1;u<n.length;u++)if(a+=tu(t,e,n[u]),i){var d=s;a+=d[u]}zx.lastIndex=0;for(var h="",p;(p=zx.exec(a))!==null;)h+="-"+p[1];var m=g4(a)+h;return{name:m,styles:a,next:hi}}var w4=function(e){return e()},M4=Gp.useInsertionEffect?Gp.useInsertionEffect:!1,A4=M4||w4,GM=ke.createContext(typeof HTMLElement<"u"?h4({key:"css"}):null);GM.Provider;var T4=function(e){return ke.forwardRef(function(t,i){var a=ke.useContext(GM);return e(t,a,i)})},b4=ke.createContext({}),C4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,R4=zM(function(n){return C4.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),P4=R4,L4=function(e){return e!=="theme"},Bx=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?P4:L4},Hx=function(e,t,i){var a;if(t){var s=t.shouldForwardProp;a=e.__emotion_forwardProp&&s?function(c){return e.__emotion_forwardProp(c)&&s(c)}:s}return typeof a!="function"&&i&&(a=e.__emotion_forwardProp),a},D4=function(e){var t=e.cache,i=e.serialized,a=e.isStringTag;return HM(t,i,a),A4(function(){return v4(t,i,a)}),null},I4=function n(e,t){var i=e.__emotion_real===e,a=i&&e.__emotion_base||e,s,c;t!==void 0&&(s=t.label,c=t.target);var u=Hx(e,t,i),d=u||Bx(a),h=!d("as");return function(){var p=arguments,m=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&m.push("label:"+s+";"),p[0]==null||p[0].raw===void 0)m.push.apply(m,p);else{var g=p[0];m.push(g[0]);for(var S=p.length,w=1;w<S;w++)m.push(p[w],g[w])}var E=T4(function(y,_,b){var M=h&&y.as||a,R="",U=[],N=y;if(y.theme==null){N={};for(var I in y)N[I]=y[I];N.theme=ke.useContext(b4)}typeof y.className=="string"?R=m4(_.registered,U,y.className):y.className!=null&&(R=y.className+" ");var ce=E4(m.concat(U),_.registered,N);R+=_.key+"-"+ce.name,c!==void 0&&(R+=" "+c);var C=h&&u===void 0?Bx(M):d,O={};for(var oe in y)h&&oe==="as"||C(oe)&&(O[oe]=y[oe]);return O.className=R,b&&(O.ref=b),ke.createElement(ke.Fragment,null,ke.createElement(D4,{cache:_,serialized:ce,isStringTag:typeof M=="string"}),ke.createElement(M,O))});return E.displayName=s!==void 0?s:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",E.defaultProps=e.defaultProps,E.__emotion_real=E,E.__emotion_base=a,E.__emotion_styles=m,E.__emotion_forwardProp=u,Object.defineProperty(E,"toString",{value:function(){return"."+c}}),E.withComponent=function(y,_){var b=n(y,Rm({},t,_,{shouldForwardProp:Hx(E,_,!0)}));return b.apply(void 0,m)},E}},U4=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Pf=I4.bind(null);U4.forEach(function(n){Pf[n]=Pf(n)});const N4=Pf.div`
    padding: 10px;
    border: 1px solid #fff;
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: #fff;
    opacity: 0.2;
`,F4=({currentLayer:n,totalLayers:e})=>Qe.jsxs(N4,{children:[n," / ",e]}),O4="_root_3sr8u_1",k4="_anchor_3sr8u_10",Vx={root:O4,anchor:k4},z4=Pf.div`
  position: absolute;
  bottom: ${({bottom:n})=>n}%;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
`,B4=(n,e,t)=>{const i=[];for(let a=n;a<=e;a+=t)i.push(a);return i},H4=({min:n,max:e,step:t})=>Qe.jsx("div",{className:Vx.root,children:Qe.jsx("div",{className:Vx.anchor,children:B4(n,e,t).map(i=>{const a=(i-n)/(e-n);return Qe.jsx(z4,{bottom:a*100},i)})})}),V4=(n,e)=>n===e,G4=({url:n,data:e})=>{const{state:t,dispatch:i}=ED();return J2(()=>(i.runLoadGcodeLines({url:T3({absUrl:n,relUrl:e.gcode})}),()=>{console.log("cleanup")}),V4,e.gcode),Qe.jsxs(W3,{viewPictures:Qe.jsx(X3,{pictures:e.pictures}),viewGcode:Qe.jsx(Jz,{gcode:ew(t.gcodeLines,{NotAsked:()=>[],Loading:()=>[],Loaded:a=>a,Error:a=>[]}),endLayer:Jr(t.endLayer),onMaxLayerIndex:a=>{i.msg(vD.MsgSetMaxLayer(_0(a)))}}),item:e,viewSlider:Qe.jsx(kB,{value:Jr(t.endLayer),onChange:([a])=>{i.emitSetEndLayer(_0(a))},min:Jr(t.minLayer),max:Jr(t.maxLayer)}),children:[Qe.jsx(F4,{currentLayer:Jr(t.endLayer),totalLayers:Jr(t.maxLayer)}),Qe.jsx(H4,{min:Jr(t.minLayer),max:Jr(t.maxLayer),step:5})]})},W4=()=>{const{state:n,dispatch:e}=I3();return ke.useEffect(()=>{console.log("render",n)}),ke.useEffect(()=>{const t=C3();e.runFetchIndex({url:t.url})},[]),ew(n.index,{NotAsked:()=>Qe.jsx(Dc,{}),Loading:()=>Qe.jsx(Dc,{viewInfo:Qe.jsx(Qe.Fragment,{children:"Loading"})}),Loaded:t=>Qe.jsx(Dc,{children:Qe.jsx(B3,{items:t.content.map(i=>Qe.jsx(G4,{url:t.url,data:i}))})}),Error:t=>Qe.jsx(Dc,{viewErrors:Qe.jsx(Qe.Fragment,{children:"Error: "+t})})})};DA.createRoot(document.getElementById("root")).render(Qe.jsx(W4,{}));
