function FA(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(i,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function Gx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Xh={exports:{}},Tl={},jh={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function OA(){if(l0)return St;l0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(P){return P===null||typeof P!="object"?null:(P=m&&P[m]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function y(P,k,W){this.props=P,this.context=k,this.refs=E,this.updater=W||S}y.prototype.isReactComponent={},y.prototype.setState=function(P,k){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,k,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=y.prototype;function b(P,k,W){this.props=P,this.context=k,this.refs=E,this.updater=W||S}var M=b.prototype=new _;M.constructor=b,w(M,y.prototype),M.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,N={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function ce(P,k,W){var Y,ee={},Z=null,_e=null;if(k!=null)for(Y in k.ref!==void 0&&(_e=k.ref),k.key!==void 0&&(Z=""+k.key),k)U.call(k,Y)&&!I.hasOwnProperty(Y)&&(ee[Y]=k[Y]);var ve=arguments.length-2;if(ve===1)ee.children=W;else if(1<ve){for(var be=Array(ve),Oe=0;Oe<ve;Oe++)be[Oe]=arguments[Oe+2];ee.children=be}if(P&&P.defaultProps)for(Y in ve=P.defaultProps,ve)ee[Y]===void 0&&(ee[Y]=ve[Y]);return{$$typeof:n,type:P,key:Z,ref:_e,props:ee,_owner:N.current}}function C(P,k){return{$$typeof:n,type:P.type,key:k,ref:P.ref,props:P.props,_owner:P._owner}}function O(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function oe(P){var k={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(W){return k[W]})}var ne=/\/+/g;function pe(P,k){return typeof P=="object"&&P!==null&&P.key!=null?oe(""+P.key):k.toString(36)}function H(P,k,W,Y,ee){var Z=typeof P;(Z==="undefined"||Z==="boolean")&&(P=null);var _e=!1;if(P===null)_e=!0;else switch(Z){case"string":case"number":_e=!0;break;case"object":switch(P.$$typeof){case n:case e:_e=!0}}if(_e)return _e=P,ee=ee(_e),P=Y===""?"."+pe(_e,0):Y,R(ee)?(W="",P!=null&&(W=P.replace(ne,"$&/")+"/"),H(ee,k,W,"",function(Oe){return Oe})):ee!=null&&(O(ee)&&(ee=C(ee,W+(!ee.key||_e&&_e.key===ee.key?"":(""+ee.key).replace(ne,"$&/")+"/")+P)),k.push(ee)),1;if(_e=0,Y=Y===""?".":Y+":",R(P))for(var ve=0;ve<P.length;ve++){Z=P[ve];var be=Y+pe(Z,ve);_e+=H(Z,k,W,be,ee)}else if(be=g(P),typeof be=="function")for(P=be.call(P),ve=0;!(Z=P.next()).done;)Z=Z.value,be=Y+pe(Z,ve++),_e+=H(Z,k,W,be,ee);else if(Z==="object")throw k=String(P),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return _e}function Q(P,k,W){if(P==null)return P;var Y=[],ee=0;return H(P,Y,"","",function(Z){return k.call(W,Z,ee++)}),Y}function se(P){if(P._status===-1){var k=P._result;k=k(),k.then(function(W){(P._status===0||P._status===-1)&&(P._status=1,P._result=W)},function(W){(P._status===0||P._status===-1)&&(P._status=2,P._result=W)}),P._status===-1&&(P._status=0,P._result=k)}if(P._status===1)return P._result.default;throw P._result}var re={current:null},X={transition:null},ie={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:X,ReactCurrentOwner:N};function $(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Q,forEach:function(P,k,W){Q(P,function(){k.apply(this,arguments)},W)},count:function(P){var k=0;return Q(P,function(){k++}),k},toArray:function(P){return Q(P,function(k){return k})||[]},only:function(P){if(!O(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},St.Component=y,St.Fragment=t,St.Profiler=a,St.PureComponent=b,St.StrictMode=i,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,St.act=$,St.cloneElement=function(P,k,W){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var Y=w({},P.props),ee=P.key,Z=P.ref,_e=P._owner;if(k!=null){if(k.ref!==void 0&&(Z=k.ref,_e=N.current),k.key!==void 0&&(ee=""+k.key),P.type&&P.type.defaultProps)var ve=P.type.defaultProps;for(be in k)U.call(k,be)&&!I.hasOwnProperty(be)&&(Y[be]=k[be]===void 0&&ve!==void 0?ve[be]:k[be])}var be=arguments.length-2;if(be===1)Y.children=W;else if(1<be){ve=Array(be);for(var Oe=0;Oe<be;Oe++)ve[Oe]=arguments[Oe+2];Y.children=ve}return{$$typeof:n,type:P.type,key:ee,ref:Z,props:Y,_owner:_e}},St.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:s,_context:P},P.Consumer=P},St.createElement=ce,St.createFactory=function(P){var k=ce.bind(null,P);return k.type=P,k},St.createRef=function(){return{current:null}},St.forwardRef=function(P){return{$$typeof:u,render:P}},St.isValidElement=O,St.lazy=function(P){return{$$typeof:p,_payload:{_status:-1,_result:P},_init:se}},St.memo=function(P,k){return{$$typeof:h,type:P,compare:k===void 0?null:k}},St.startTransition=function(P){var k=X.transition;X.transition={};try{P()}finally{X.transition=k}},St.unstable_act=$,St.useCallback=function(P,k){return re.current.useCallback(P,k)},St.useContext=function(P){return re.current.useContext(P)},St.useDebugValue=function(){},St.useDeferredValue=function(P){return re.current.useDeferredValue(P)},St.useEffect=function(P,k){return re.current.useEffect(P,k)},St.useId=function(){return re.current.useId()},St.useImperativeHandle=function(P,k,W){return re.current.useImperativeHandle(P,k,W)},St.useInsertionEffect=function(P,k){return re.current.useInsertionEffect(P,k)},St.useLayoutEffect=function(P,k){return re.current.useLayoutEffect(P,k)},St.useMemo=function(P,k){return re.current.useMemo(P,k)},St.useReducer=function(P,k,W){return re.current.useReducer(P,k,W)},St.useRef=function(P){return re.current.useRef(P)},St.useState=function(P){return re.current.useState(P)},St.useSyncExternalStore=function(P,k,W){return re.current.useSyncExternalStore(P,k,W)},St.useTransition=function(){return re.current.useTransition()},St.version="18.3.1",St}var u0;function Um(){return u0||(u0=1,jh.exports=OA()),jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function kA(){if(c0)return Tl;c0=1;var n=Um(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,m={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!s.hasOwnProperty(p)&&(m[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:S,props:m,_owner:a.current}}return Tl.Fragment=t,Tl.jsx=c,Tl.jsxs=c,Tl}var f0;function zA(){return f0||(f0=1,Xh.exports=kA()),Xh.exports}var Qe=zA(),Pc={},qh={exports:{}},lr={},Yh={exports:{}},Kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function BA(){return d0||(d0=1,(function(n){function e(X,ie){var $=X.length;X.push(ie);e:for(;0<$;){var P=$-1>>>1,k=X[P];if(0<a(k,ie))X[P]=ie,X[$]=k,$=P;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ie=X[0],$=X.pop();if($!==ie){X[0]=$;e:for(var P=0,k=X.length,W=k>>>1;P<W;){var Y=2*(P+1)-1,ee=X[Y],Z=Y+1,_e=X[Z];if(0>a(ee,$))Z<k&&0>a(_e,ee)?(X[P]=_e,X[Z]=$,P=Z):(X[P]=ee,X[Y]=$,P=Y);else if(Z<k&&0>a(_e,$))X[P]=_e,X[Z]=$,P=Z;else break e}}return ie}function a(X,ie){var $=X.sortIndex-ie.sortIndex;return $!==0?$:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,m=null,g=3,S=!1,w=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(X){for(var ie=t(h);ie!==null;){if(ie.callback===null)i(h);else if(ie.startTime<=X)i(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function R(X){if(E=!1,M(X),!w)if(t(d)!==null)w=!0,se(U);else{var ie=t(h);ie!==null&&re(R,ie.startTime-X)}}function U(X,ie){w=!1,E&&(E=!1,_(ce),ce=-1),S=!0;var $=g;try{for(M(ie),m=t(d);m!==null&&(!(m.expirationTime>ie)||X&&!oe());){var P=m.callback;if(typeof P=="function"){m.callback=null,g=m.priorityLevel;var k=P(m.expirationTime<=ie);ie=n.unstable_now(),typeof k=="function"?m.callback=k:m===t(d)&&i(d),M(ie)}else i(d);m=t(d)}if(m!==null)var W=!0;else{var Y=t(h);Y!==null&&re(R,Y.startTime-ie),W=!1}return W}finally{m=null,g=$,S=!1}}var N=!1,I=null,ce=-1,C=5,O=-1;function oe(){return!(n.unstable_now()-O<C)}function ne(){if(I!==null){var X=n.unstable_now();O=X;var ie=!0;try{ie=I(!0,X)}finally{ie?pe():(N=!1,I=null)}}else N=!1}var pe;if(typeof b=="function")pe=function(){b(ne)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Q=H.port2;H.port1.onmessage=ne,pe=function(){Q.postMessage(null)}}else pe=function(){y(ne,0)};function se(X){I=X,N||(N=!0,pe())}function re(X,ie){ce=y(function(){X(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){w||S||(w=!0,se(U))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var $=g;g=ie;try{return X()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var $=g;g=X;try{return ie()}finally{g=$}},n.unstable_scheduleCallback=function(X,ie,$){var P=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?P+$:P):$=P,X){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=$+k,X={id:p++,callback:ie,priorityLevel:X,startTime:$,expirationTime:k,sortIndex:-1},$>P?(X.sortIndex=$,e(h,X),t(d)===null&&X===t(h)&&(E?(_(ce),ce=-1):E=!0,re(R,$-P))):(X.sortIndex=k,e(d,X),w||S||(w=!0,se(U))),X},n.unstable_shouldYield=oe,n.unstable_wrapCallback=function(X){var ie=g;return function(){var $=g;g=ie;try{return X.apply(this,arguments)}finally{g=$}}}})(Kh)),Kh}var h0;function HA(){return h0||(h0=1,Yh.exports=BA()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function VA(){if(p0)return lr;p0=1;var n=Um(),e=HA();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function s(r,o){c(r,o),c(r+"Capture",o)}function c(r,o){for(a[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(r){return d.call(m,r)?!0:d.call(p,r)?!1:h.test(r)?m[r]=!0:(p[r]=!0,!1)}function S(r,o,l,f){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function w(r,o,l,f){if(o===null||typeof o>"u"||S(r,o,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(r,o,l,f,v,x,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=r,this.type=o,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new E(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];y[o]=new E(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new E(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new E(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new E(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new E(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new E(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new E(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new E(r,5,!1,r.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(_,b);y[o]=new E(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(_,b);y[o]=new E(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(_,b);y[o]=new E(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!0,!0)});function M(r,o,l,f){var v=y.hasOwnProperty(o)?y[o]:null;(v!==null?v.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(w(o,l,v,f)&&(l=null),f||v===null?g(o)&&(l===null?r.removeAttribute(o):r.setAttribute(o,""+l)):v.mustUseProperty?r[v.propertyName]=l===null?v.type===3?!1:"":l:(o=v.attributeName,f=v.attributeNamespace,l===null?r.removeAttribute(o):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,f?r.setAttributeNS(f,o,l):r.setAttribute(o,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),N=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,P;function k(r){if(P===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);P=o&&o[1]||""}return`
`+P+r}var W=!1;function Y(r,o){if(!r||W)return"";W=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ae){var f=ae}Reflect.construct(r,[],o)}else{try{o.call()}catch(ae){f=ae}r.call(o.prototype)}else{try{throw Error()}catch(ae){f=ae}r()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var v=ae.stack.split(`
`),x=f.stack.split(`
`),A=v.length-1,F=x.length-1;1<=A&&0<=F&&v[A]!==x[F];)F--;for(;1<=A&&0<=F;A--,F--)if(v[A]!==x[F]){if(A!==1||F!==1)do if(A--,F--,0>F||v[A]!==x[F]){var z=`
`+v[A].replace(" at new "," at ");return r.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",r.displayName)),z}while(1<=A&&0<=F);break}}}finally{W=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?k(r):""}function ee(r){switch(r.tag){case 5:return k(r.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return r=Y(r.type,!1),r;case 11:return r=Y(r.type.render,!1),r;case 1:return r=Y(r.type,!0),r;default:return""}}function Z(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case I:return"Fragment";case N:return"Portal";case C:return"Profiler";case ce:return"StrictMode";case pe:return"Suspense";case H:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case oe:return(r.displayName||"Context")+".Consumer";case O:return(r._context.displayName||"Context")+".Provider";case ne:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Q:return o=r.displayName||null,o!==null?o:Z(r.type)||"Memo";case se:o=r._payload,r=r._init;try{return Z(r(o))}catch{}}return null}function _e(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(o);case 8:return o===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Oe(r){var o=be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,x=l.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return v.call(this)},set:function(A){f=""+A,x.call(this,A)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function ze(r){r._valueTracker||(r._valueTracker=Oe(r))}function j(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var l=o.getValue(),f="";return r&&(f=be(r)?r.checked?"true":"false":r.value),r=f,r!==l?(o.setValue(r),!0):!1}function Dt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ve(r,o){var l=o.checked;return $({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function le(r,o){var l=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;l=ve(o.value!=null?o.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ue(r,o){o=o.checked,o!=null&&M(r,"checked",o,!1)}function xe(r,o){ue(r,o);var l=ve(o.value),f=o.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Me(r,o.type,l):o.hasOwnProperty("defaultValue")&&Me(r,o.type,ve(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function ge(r,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,l||o===r.value||(r.value=o),r.defaultValue=o}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Me(r,o,l){(o!=="number"||Dt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var we=Array.isArray;function Ie(r,o,l,f){if(r=r.options,o){o={};for(var v=0;v<l.length;v++)o["$"+l[v]]=!0;for(l=0;l<r.length;l++)v=o.hasOwnProperty("$"+r[l].value),r[l].selected!==v&&(r[l].selected=v),v&&f&&(r[l].defaultSelected=!0)}else{for(l=""+ve(l),o=null,v=0;v<r.length;v++){if(r[v].value===l){r[v].selected=!0,f&&(r[v].defaultSelected=!0);return}o!==null||r[v].disabled||(o=r[v])}o!==null&&(o.selected=!0)}}function Ze(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function D(r,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(we(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}r._wrapperState={initialValue:ve(l)}}function T(r,o){var l=ve(o.value),f=ve(o.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),o.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function q(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function Ae(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?Ae(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ce,Ye=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,f,v){MSApp.execUnsafeLocalFunction(function(){return r(o,l,f,v)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function De(r,o){if(o){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=o;return}}r.textContent=o}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(r){lt.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),He[o]=He[r]})});function Tt(r,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||He.hasOwnProperty(r)&&He[r]?(""+o).trim():o+"px"}function Le(r,o){r=r.style;for(var l in o)if(o.hasOwnProperty(l)){var f=l.indexOf("--")===0,v=Tt(l,o[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,v):r[l]=v}}var Ft=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(r,o){if(o){if(Ft[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function st(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tt=null;function $e(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var _t=null,V=null,Be=null;function Re(r){if(r=fl(r)){if(typeof _t!="function")throw Error(t(280));var o=r.stateNode;o&&(o=$u(o),_t(r.stateNode,r.type,o))}}function me(r){V?Be?Be.push(r):Be=[r]:V=r}function Ue(){if(V){var r=V,o=Be;if(Be=V=null,Re(r),o)for(r=0;r<o.length;r++)Re(o[r])}}function ot(r,o){return r(o)}function wt(){}var nn=!1;function xn(r,o,l){if(nn)return r(o,l);nn=!0;try{return ot(r,o,l)}finally{nn=!1,(V!==null||Be!==null)&&(wt(),Ue())}}function Pt(r,o){var l=r.stateNode;if(l===null)return null;var f=$u(l);if(f===null)return null;l=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var pn=!1;if(u)try{var On={};Object.defineProperty(On,"passive",{get:function(){pn=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{pn=!1}function Mu(r,o,l,f,v,x,A,F,z){var ae=Array.prototype.slice.call(arguments,3);try{o.apply(l,ae)}catch(Ee){this.onError(Ee)}}var Wo=!1,Ti=null,$o=!1,Yi=null,Au={onError:function(r){Wo=!0,Ti=r}};function Tu(r,o,l,f,v,x,A,F,z){Wo=!1,Ti=null,Mu.apply(Au,arguments)}function pd(r,o,l,f,v,x,A,F,z){if(Tu.apply(this,arguments),Wo){if(Wo){var ae=Ti;Wo=!1,Ti=null}else throw Error(t(198));$o||($o=!0,Yi=ae)}}function bi(r){var o=r,l=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(l=o.return),r=o.return;while(r)}return o.tag===3?l:null}function bu(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function L(r){if(bi(r)!==r)throw Error(t(188))}function J(r){var o=r.alternate;if(!o){if(o=bi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var l=r,f=o;;){var v=l.return;if(v===null)break;var x=v.alternate;if(x===null){if(f=v.return,f!==null){l=f;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===l)return L(v),r;if(x===f)return L(v),o;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=v,f=x;else{for(var A=!1,F=v.child;F;){if(F===l){A=!0,l=v,f=x;break}if(F===f){A=!0,f=v,l=x;break}F=F.sibling}if(!A){for(F=x.child;F;){if(F===l){A=!0,l=x,f=v;break}if(F===f){A=!0,f=x,l=v;break}F=F.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:o}function de(r){return r=J(r),r!==null?he(r):null}function he(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=he(r);if(o!==null)return o;r=r.sibling}return null}var fe=e.unstable_scheduleCallback,Ge=e.unstable_cancelCallback,et=e.unstable_shouldYield,at=e.unstable_requestPaint,Xe=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,dt=e.unstable_ImmediatePriority,pt=e.unstable_UserBlockingPriority,Vt=e.unstable_NormalPriority,qn=e.unstable_LowPriority,an=e.unstable_IdlePriority,tr=null,bt=null;function yt(r){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(tr,r,void 0,(r.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:Cu,Kt=Math.log,Ci=Math.LN2;function Cu(r){return r>>>=0,r===0?32:31-(Kt(r)/Ci|0)|0}var ii=64,Ki=4194304;function rn(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function br(r,o){var l=r.pendingLanes;if(l===0)return 0;var f=0,v=r.suspendedLanes,x=r.pingedLanes,A=l&268435455;if(A!==0){var F=A&~v;F!==0?f=rn(F):(x&=A,x!==0&&(f=rn(x)))}else A=l&~v,A!==0?f=rn(A):x!==0&&(f=rn(x));if(f===0)return 0;if(o!==0&&o!==f&&(o&v)===0&&(v=f&-f,x=o&-o,v>=x||v===16&&(x&4194240)!==0))return o;if((f&4)!==0&&(f|=l&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)l=31-Yn(o),v=1<<l,f|=r[l],o&=~v;return f}function js(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nr(r,o){for(var l=r.suspendedLanes,f=r.pingedLanes,v=r.expirationTimes,x=r.pendingLanes;0<x;){var A=31-Yn(x),F=1<<A,z=v[A];z===-1?((F&l)===0||(F&f)!==0)&&(v[A]=js(F,o)):z<=o&&(r.expiredLanes|=F),x&=~F}}function Xo(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ru(){var r=ii;return ii<<=1,(ii&4194240)===0&&(ii=64),r}function Pa(r){for(var o=[],l=0;31>l;l++)o.push(r);return o}function qs(r,o,l){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Yn(o),r[o]=l}function r1(r,o){var l=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var v=31-Yn(l),x=1<<v;o[v]=0,f[v]=-1,r[v]=-1,l&=~x}}function md(r,o){var l=r.entangledLanes|=o;for(r=r.entanglements;l;){var f=31-Yn(l),v=1<<f;v&o|r[f]&o&&(r[f]|=o),l&=~v}}var kt=0;function Bv(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Hv,vd,Vv,Gv,Wv,gd=!1,Pu=[],Zi=null,Ji=null,Qi=null,Ys=new Map,Ks=new Map,eo=[],i1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $v(r,o){switch(r){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Ys.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(o.pointerId)}}function Zs(r,o,l,f,v,x){return r===null||r.nativeEvent!==x?(r={blockedOn:o,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[v]},o!==null&&(o=fl(o),o!==null&&vd(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),r)}function o1(r,o,l,f,v){switch(o){case"focusin":return Zi=Zs(Zi,r,o,l,f,v),!0;case"dragenter":return Ji=Zs(Ji,r,o,l,f,v),!0;case"mouseover":return Qi=Zs(Qi,r,o,l,f,v),!0;case"pointerover":var x=v.pointerId;return Ys.set(x,Zs(Ys.get(x)||null,r,o,l,f,v)),!0;case"gotpointercapture":return x=v.pointerId,Ks.set(x,Zs(Ks.get(x)||null,r,o,l,f,v)),!0}return!1}function Xv(r){var o=jo(r.target);if(o!==null){var l=bi(o);if(l!==null){if(o=l.tag,o===13){if(o=bu(l),o!==null){r.blockedOn=o,Wv(r.priority,function(){Vv(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Lu(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var l=yd(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);tt=f,l.target.dispatchEvent(f),tt=null}else return o=fl(l),o!==null&&vd(o),r.blockedOn=l,!1;o.shift()}return!0}function jv(r,o,l){Lu(r)&&l.delete(o)}function a1(){gd=!1,Zi!==null&&Lu(Zi)&&(Zi=null),Ji!==null&&Lu(Ji)&&(Ji=null),Qi!==null&&Lu(Qi)&&(Qi=null),Ys.forEach(jv),Ks.forEach(jv)}function Js(r,o){r.blockedOn===o&&(r.blockedOn=null,gd||(gd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,a1)))}function Qs(r){function o(v){return Js(v,r)}if(0<Pu.length){Js(Pu[0],r);for(var l=1;l<Pu.length;l++){var f=Pu[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Zi!==null&&Js(Zi,r),Ji!==null&&Js(Ji,r),Qi!==null&&Js(Qi,r),Ys.forEach(o),Ks.forEach(o),l=0;l<eo.length;l++)f=eo[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<eo.length&&(l=eo[0],l.blockedOn===null);)Xv(l),l.blockedOn===null&&eo.shift()}var La=R.ReactCurrentBatchConfig,Du=!0;function s1(r,o,l,f){var v=kt,x=La.transition;La.transition=null;try{kt=1,_d(r,o,l,f)}finally{kt=v,La.transition=x}}function l1(r,o,l,f){var v=kt,x=La.transition;La.transition=null;try{kt=4,_d(r,o,l,f)}finally{kt=v,La.transition=x}}function _d(r,o,l,f){if(Du){var v=yd(r,o,l,f);if(v===null)Fd(r,o,f,Iu,l),$v(r,f);else if(o1(v,r,o,l,f))f.stopPropagation();else if($v(r,f),o&4&&-1<i1.indexOf(r)){for(;v!==null;){var x=fl(v);if(x!==null&&Hv(x),x=yd(r,o,l,f),x===null&&Fd(r,o,f,Iu,l),x===v)break;v=x}v!==null&&f.stopPropagation()}else Fd(r,o,f,null,l)}}var Iu=null;function yd(r,o,l,f){if(Iu=null,r=$e(f),r=jo(r),r!==null)if(o=bi(r),o===null)r=null;else if(l=o.tag,l===13){if(r=bu(o),r!==null)return r;r=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Iu=r,null}function qv(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case dt:return 1;case pt:return 4;case Vt:case qn:return 16;case an:return 536870912;default:return 16}default:return 16}}var to=null,xd=null,Uu=null;function Yv(){if(Uu)return Uu;var r,o=xd,l=o.length,f,v="value"in to?to.value:to.textContent,x=v.length;for(r=0;r<l&&o[r]===v[r];r++);var A=l-r;for(f=1;f<=A&&o[l-f]===v[x-f];f++);return Uu=v.slice(r,1<f?1-f:void 0)}function Nu(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Fu(){return!0}function Kv(){return!1}function mr(r){function o(l,f,v,x,A){this._reactName=l,this._targetInst=v,this.type=f,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var F in r)r.hasOwnProperty(F)&&(l=r[F],this[F]=l?l(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Fu:Kv,this.isPropagationStopped=Kv,this}return $(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Fu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Fu)},persist:function(){},isPersistent:Fu}),o}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=mr(Da),el=$({},Da,{view:0,detail:0}),u1=mr(el),Ed,wd,tl,Ou=$({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==tl&&(tl&&r.type==="mousemove"?(Ed=r.screenX-tl.screenX,wd=r.screenY-tl.screenY):wd=Ed=0,tl=r),Ed)},movementY:function(r){return"movementY"in r?r.movementY:wd}}),Zv=mr(Ou),c1=$({},Ou,{dataTransfer:0}),f1=mr(c1),d1=$({},el,{relatedTarget:0}),Md=mr(d1),h1=$({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=mr(h1),m1=$({},Da,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),v1=mr(m1),g1=$({},Da,{data:0}),Jv=mr(g1),_1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=x1[r])?!!o[r]:!1}function Ad(){return S1}var E1=$({},el,{key:function(r){if(r.key){var o=_1[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=Nu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?y1[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(r){return r.type==="keypress"?Nu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Nu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),w1=mr(E1),M1=$({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qv=mr(M1),A1=$({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),T1=mr(A1),b1=$({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),C1=mr(b1),R1=$({},Ou,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=mr(R1),L1=[9,13,27,32],Td=u&&"CompositionEvent"in window,nl=null;u&&"documentMode"in document&&(nl=document.documentMode);var D1=u&&"TextEvent"in window&&!nl,eg=u&&(!Td||nl&&8<nl&&11>=nl),tg=" ",ng=!1;function rg(r,o){switch(r){case"keyup":return L1.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ia=!1;function I1(r,o){switch(r){case"compositionend":return ig(o);case"keypress":return o.which!==32?null:(ng=!0,tg);case"textInput":return r=o.data,r===tg&&ng?null:r;default:return null}}function U1(r,o){if(Ia)return r==="compositionend"||!Td&&rg(r,o)?(r=Yv(),Uu=xd=to=null,Ia=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return eg&&o.locale!=="ko"?null:o.data;default:return null}}var N1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!N1[r.type]:o==="textarea"}function ag(r,o,l,f){me(f),o=Vu(o,"onChange"),0<o.length&&(l=new Sd("onChange","change",null,l,f),r.push({event:l,listeners:o}))}var rl=null,il=null;function F1(r){Mg(r,0)}function ku(r){var o=ka(r);if(j(o))return r}function O1(r,o){if(r==="change")return o}var sg=!1;if(u){var bd;if(u){var Cd="oninput"in document;if(!Cd){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),Cd=typeof lg.oninput=="function"}bd=Cd}else bd=!1;sg=bd&&(!document.documentMode||9<document.documentMode)}function ug(){rl&&(rl.detachEvent("onpropertychange",cg),il=rl=null)}function cg(r){if(r.propertyName==="value"&&ku(il)){var o=[];ag(o,il,r,$e(r)),xn(F1,o)}}function k1(r,o,l){r==="focusin"?(ug(),rl=o,il=l,rl.attachEvent("onpropertychange",cg)):r==="focusout"&&ug()}function z1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ku(il)}function B1(r,o){if(r==="click")return ku(o)}function H1(r,o){if(r==="input"||r==="change")return ku(o)}function V1(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Wr=typeof Object.is=="function"?Object.is:V1;function ol(r,o){if(Wr(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var l=Object.keys(r),f=Object.keys(o);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var v=l[f];if(!d.call(o,v)||!Wr(r[v],o[v]))return!1}return!0}function fg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function dg(r,o){var l=fg(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=o&&f>=o)return{node:l,offset:o-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=fg(l)}}function hg(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?hg(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function pg(){for(var r=window,o=Dt();o instanceof r.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)r=o.contentWindow;else break;o=Dt(r.document)}return o}function Rd(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function G1(r){var o=pg(),l=r.focusedElem,f=r.selectionRange;if(o!==l&&l&&l.ownerDocument&&hg(l.ownerDocument.documentElement,l)){if(f!==null&&Rd(l)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(r,l.value.length);else if(r=(o=l.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var v=l.textContent.length,x=Math.min(f.start,v);f=f.end===void 0?x:Math.min(f.end,v),!r.extend&&x>f&&(v=f,f=x,x=v),v=dg(l,x);var A=dg(l,f);v&&A&&(r.rangeCount!==1||r.anchorNode!==v.node||r.anchorOffset!==v.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),r.removeAllRanges(),x>f?(r.addRange(o),r.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),r.addRange(o)))}}for(o=[],r=l;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)r=o[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var W1=u&&"documentMode"in document&&11>=document.documentMode,Ua=null,Pd=null,al=null,Ld=!1;function mg(r,o,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ld||Ua==null||Ua!==Dt(f)||(f=Ua,"selectionStart"in f&&Rd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),al&&ol(al,f)||(al=f,f=Vu(Pd,"onSelect"),0<f.length&&(o=new Sd("onSelect","select",null,o,l),r.push({event:o,listeners:f}),o.target=Ua)))}function zu(r,o){var l={};return l[r.toLowerCase()]=o.toLowerCase(),l["Webkit"+r]="webkit"+o,l["Moz"+r]="moz"+o,l}var Na={animationend:zu("Animation","AnimationEnd"),animationiteration:zu("Animation","AnimationIteration"),animationstart:zu("Animation","AnimationStart"),transitionend:zu("Transition","TransitionEnd")},Dd={},vg={};u&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete Na.animationend.animation,delete Na.animationiteration.animation,delete Na.animationstart.animation),"TransitionEvent"in window||delete Na.transitionend.transition);function Bu(r){if(Dd[r])return Dd[r];if(!Na[r])return r;var o=Na[r],l;for(l in o)if(o.hasOwnProperty(l)&&l in vg)return Dd[r]=o[l];return r}var gg=Bu("animationend"),_g=Bu("animationiteration"),yg=Bu("animationstart"),xg=Bu("transitionend"),Sg=new Map,Eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function no(r,o){Sg.set(r,o),s(o,[r])}for(var Id=0;Id<Eg.length;Id++){var Ud=Eg[Id],$1=Ud.toLowerCase(),X1=Ud[0].toUpperCase()+Ud.slice(1);no($1,"on"+X1)}no(gg,"onAnimationEnd"),no(_g,"onAnimationIteration"),no(yg,"onAnimationStart"),no("dblclick","onDoubleClick"),no("focusin","onFocus"),no("focusout","onBlur"),no(xg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j1=new Set("cancel close invalid load scroll toggle".split(" ").concat(sl));function wg(r,o,l){var f=r.type||"unknown-event";r.currentTarget=l,pd(f,o,void 0,r),r.currentTarget=null}function Mg(r,o){o=(o&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],v=f.event;f=f.listeners;e:{var x=void 0;if(o)for(var A=f.length-1;0<=A;A--){var F=f[A],z=F.instance,ae=F.currentTarget;if(F=F.listener,z!==x&&v.isPropagationStopped())break e;wg(v,F,ae),x=z}else for(A=0;A<f.length;A++){if(F=f[A],z=F.instance,ae=F.currentTarget,F=F.listener,z!==x&&v.isPropagationStopped())break e;wg(v,F,ae),x=z}}}if($o)throw r=Yi,$o=!1,Yi=null,r}function Xt(r,o){var l=o[Vd];l===void 0&&(l=o[Vd]=new Set);var f=r+"__bubble";l.has(f)||(Ag(o,r,2,!1),l.add(f))}function Nd(r,o,l){var f=0;o&&(f|=4),Ag(l,r,f,o)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function ll(r){if(!r[Hu]){r[Hu]=!0,i.forEach(function(l){l!=="selectionchange"&&(j1.has(l)||Nd(l,!1,r),Nd(l,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Hu]||(o[Hu]=!0,Nd("selectionchange",!1,o))}}function Ag(r,o,l,f){switch(qv(o)){case 1:var v=s1;break;case 4:v=l1;break;default:v=_d}l=v.bind(null,o,l,r),v=void 0,!pn||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),f?v!==void 0?r.addEventListener(o,l,{capture:!0,passive:v}):r.addEventListener(o,l,!0):v!==void 0?r.addEventListener(o,l,{passive:v}):r.addEventListener(o,l,!1)}function Fd(r,o,l,f,v){var x=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var F=f.stateNode.containerInfo;if(F===v||F.nodeType===8&&F.parentNode===v)break;if(A===4)for(A=f.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===v||z.nodeType===8&&z.parentNode===v))return;A=A.return}for(;F!==null;){if(A=jo(F),A===null)return;if(z=A.tag,z===5||z===6){f=x=A;continue e}F=F.parentNode}}f=f.return}xn(function(){var ae=x,Ee=$e(l),Te=[];e:{var Se=Sg.get(r);if(Se!==void 0){var We=Sd,qe=r;switch(r){case"keypress":if(Nu(l)===0)break e;case"keydown":case"keyup":We=w1;break;case"focusin":qe="focus",We=Md;break;case"focusout":qe="blur",We=Md;break;case"beforeblur":case"afterblur":We=Md;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Zv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=f1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=T1;break;case gg:case _g:case yg:We=p1;break;case xg:We=C1;break;case"scroll":We=u1;break;case"wheel":We=P1;break;case"copy":case"cut":case"paste":We=v1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Qv}var Ke=(o&4)!==0,sn=!Ke&&r==="scroll",K=Ke?Se!==null?Se+"Capture":null:Se;Ke=[];for(var G=ae,te;G!==null;){te=G;var Pe=te.stateNode;if(te.tag===5&&Pe!==null&&(te=Pe,K!==null&&(Pe=Pt(G,K),Pe!=null&&Ke.push(ul(G,Pe,te)))),sn)break;G=G.return}0<Ke.length&&(Se=new We(Se,qe,null,l,Ee),Te.push({event:Se,listeners:Ke}))}}if((o&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",We=r==="mouseout"||r==="pointerout",Se&&l!==tt&&(qe=l.relatedTarget||l.fromElement)&&(jo(qe)||qe[Ri]))break e;if((We||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,We?(qe=l.relatedTarget||l.toElement,We=ae,qe=qe?jo(qe):null,qe!==null&&(sn=bi(qe),qe!==sn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(We=null,qe=ae),We!==qe)){if(Ke=Zv,Pe="onMouseLeave",K="onMouseEnter",G="mouse",(r==="pointerout"||r==="pointerover")&&(Ke=Qv,Pe="onPointerLeave",K="onPointerEnter",G="pointer"),sn=We==null?Se:ka(We),te=qe==null?Se:ka(qe),Se=new Ke(Pe,G+"leave",We,l,Ee),Se.target=sn,Se.relatedTarget=te,Pe=null,jo(Ee)===ae&&(Ke=new Ke(K,G+"enter",qe,l,Ee),Ke.target=te,Ke.relatedTarget=sn,Pe=Ke),sn=Pe,We&&qe)t:{for(Ke=We,K=qe,G=0,te=Ke;te;te=Fa(te))G++;for(te=0,Pe=K;Pe;Pe=Fa(Pe))te++;for(;0<G-te;)Ke=Fa(Ke),G--;for(;0<te-G;)K=Fa(K),te--;for(;G--;){if(Ke===K||K!==null&&Ke===K.alternate)break t;Ke=Fa(Ke),K=Fa(K)}Ke=null}else Ke=null;We!==null&&Tg(Te,Se,We,Ke,!1),qe!==null&&sn!==null&&Tg(Te,sn,qe,Ke,!0)}}e:{if(Se=ae?ka(ae):window,We=Se.nodeName&&Se.nodeName.toLowerCase(),We==="select"||We==="input"&&Se.type==="file")var Je=O1;else if(og(Se))if(sg)Je=H1;else{Je=z1;var rt=k1}else(We=Se.nodeName)&&We.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Je=B1);if(Je&&(Je=Je(r,ae))){ag(Te,Je,l,Ee);break e}rt&&rt(r,Se,ae),r==="focusout"&&(rt=Se._wrapperState)&&rt.controlled&&Se.type==="number"&&Me(Se,"number",Se.value)}switch(rt=ae?ka(ae):window,r){case"focusin":(og(rt)||rt.contentEditable==="true")&&(Ua=rt,Pd=ae,al=null);break;case"focusout":al=Pd=Ua=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,mg(Te,l,Ee);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":mg(Te,l,Ee)}var it;if(Td)e:{switch(r){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ia?rg(r,l)&&(ut="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(eg&&l.locale!=="ko"&&(Ia||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ia&&(it=Yv()):(to=Ee,xd="value"in to?to.value:to.textContent,Ia=!0)),rt=Vu(ae,ut),0<rt.length&&(ut=new Jv(ut,r,null,l,Ee),Te.push({event:ut,listeners:rt}),it?ut.data=it:(it=ig(l),it!==null&&(ut.data=it)))),(it=D1?I1(r,l):U1(r,l))&&(ae=Vu(ae,"onBeforeInput"),0<ae.length&&(Ee=new Jv("onBeforeInput","beforeinput",null,l,Ee),Te.push({event:Ee,listeners:ae}),Ee.data=it))}Mg(Te,o)})}function ul(r,o,l){return{instance:r,listener:o,currentTarget:l}}function Vu(r,o){for(var l=o+"Capture",f=[];r!==null;){var v=r,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=Pt(r,l),x!=null&&f.unshift(ul(r,x,v)),x=Pt(r,o),x!=null&&f.push(ul(r,x,v))),r=r.return}return f}function Fa(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Tg(r,o,l,f,v){for(var x=o._reactName,A=[];l!==null&&l!==f;){var F=l,z=F.alternate,ae=F.stateNode;if(z!==null&&z===f)break;F.tag===5&&ae!==null&&(F=ae,v?(z=Pt(l,x),z!=null&&A.unshift(ul(l,z,F))):v||(z=Pt(l,x),z!=null&&A.push(ul(l,z,F)))),l=l.return}A.length!==0&&r.push({event:o,listeners:A})}var q1=/\r\n?/g,Y1=/\u0000|\uFFFD/g;function bg(r){return(typeof r=="string"?r:""+r).replace(q1,`
`).replace(Y1,"")}function Gu(r,o,l){if(o=bg(o),bg(r)!==o&&l)throw Error(t(425))}function Wu(){}var Od=null,kd=null;function zd(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Bd=typeof setTimeout=="function"?setTimeout:void 0,K1=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,Z1=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(r){return Cg.resolve(null).then(r).catch(J1)}:Bd;function J1(r){setTimeout(function(){throw r})}function Hd(r,o){var l=o,f=0;do{var v=l.nextSibling;if(r.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(f===0){r.removeChild(v),Qs(o);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=v}while(l);Qs(o)}function ro(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Rg(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return r;o--}else l==="/$"&&o++}r=r.previousSibling}return null}var Oa=Math.random().toString(36).slice(2),oi="__reactFiber$"+Oa,cl="__reactProps$"+Oa,Ri="__reactContainer$"+Oa,Vd="__reactEvents$"+Oa,Q1="__reactListeners$"+Oa,eA="__reactHandles$"+Oa;function jo(r){var o=r[oi];if(o)return o;for(var l=r.parentNode;l;){if(o=l[Ri]||l[oi]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(r=Rg(r);r!==null;){if(l=r[oi])return l;r=Rg(r)}return o}r=l,l=r.parentNode}return null}function fl(r){return r=r[oi]||r[Ri],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ka(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function $u(r){return r[cl]||null}var Gd=[],za=-1;function io(r){return{current:r}}function jt(r){0>za||(r.current=Gd[za],Gd[za]=null,za--)}function Gt(r,o){za++,Gd[za]=r.current,r.current=o}var oo={},kn=io(oo),rr=io(!1),qo=oo;function Ba(r,o){var l=r.type.contextTypes;if(!l)return oo;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in l)v[x]=o[x];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=v),v}function ir(r){return r=r.childContextTypes,r!=null}function Xu(){jt(rr),jt(kn)}function Pg(r,o,l){if(kn.current!==oo)throw Error(t(168));Gt(kn,o),Gt(rr,l)}function Lg(r,o,l){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var v in f)if(!(v in o))throw Error(t(108,_e(r)||"Unknown",v));return $({},l,f)}function ju(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||oo,qo=kn.current,Gt(kn,r),Gt(rr,rr.current),!0}function Dg(r,o,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=Lg(r,o,qo),f.__reactInternalMemoizedMergedChildContext=r,jt(rr),jt(kn),Gt(kn,r)):jt(rr),Gt(rr,l)}var Pi=null,qu=!1,Wd=!1;function Ig(r){Pi===null?Pi=[r]:Pi.push(r)}function tA(r){qu=!0,Ig(r)}function ao(){if(!Wd&&Pi!==null){Wd=!0;var r=0,o=kt;try{var l=Pi;for(kt=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}Pi=null,qu=!1}catch(v){throw Pi!==null&&(Pi=Pi.slice(r+1)),fe(dt,ao),v}finally{kt=o,Wd=!1}}return null}var Ha=[],Va=0,Yu=null,Ku=0,Cr=[],Rr=0,Yo=null,Li=1,Di="";function Ko(r,o){Ha[Va++]=Ku,Ha[Va++]=Yu,Yu=r,Ku=o}function Ug(r,o,l){Cr[Rr++]=Li,Cr[Rr++]=Di,Cr[Rr++]=Yo,Yo=r;var f=Li;r=Di;var v=32-Yn(f)-1;f&=~(1<<v),l+=1;var x=32-Yn(o)+v;if(30<x){var A=v-v%5;x=(f&(1<<A)-1).toString(32),f>>=A,v-=A,Li=1<<32-Yn(o)+v|l<<v|f,Di=x+r}else Li=1<<x|l<<v|f,Di=r}function $d(r){r.return!==null&&(Ko(r,1),Ug(r,1,0))}function Xd(r){for(;r===Yu;)Yu=Ha[--Va],Ha[Va]=null,Ku=Ha[--Va],Ha[Va]=null;for(;r===Yo;)Yo=Cr[--Rr],Cr[Rr]=null,Di=Cr[--Rr],Cr[Rr]=null,Li=Cr[--Rr],Cr[Rr]=null}var vr=null,gr=null,Zt=!1,$r=null;function Ng(r,o){var l=Ir(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=r,o=r.deletions,o===null?(r.deletions=[l],r.flags|=16):o.push(l)}function Fg(r,o){switch(r.tag){case 5:var l=r.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,vr=r,gr=ro(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,vr=r,gr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Yo!==null?{id:Li,overflow:Di}:null,r.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Ir(18,null,null,0),l.stateNode=o,l.return=r,r.child=l,vr=r,gr=null,!0):!1;default:return!1}}function jd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function qd(r){if(Zt){var o=gr;if(o){var l=o;if(!Fg(r,o)){if(jd(r))throw Error(t(418));o=ro(l.nextSibling);var f=vr;o&&Fg(r,o)?Ng(f,l):(r.flags=r.flags&-4097|2,Zt=!1,vr=r)}}else{if(jd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Zt=!1,vr=r}}}function Og(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;vr=r}function Zu(r){if(r!==vr)return!1;if(!Zt)return Og(r),Zt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!zd(r.type,r.memoizedProps)),o&&(o=gr)){if(jd(r))throw kg(),Error(t(418));for(;o;)Ng(r,o),o=ro(o.nextSibling)}if(Og(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(o===0){gr=ro(r.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}r=r.nextSibling}gr=null}}else gr=vr?ro(r.stateNode.nextSibling):null;return!0}function kg(){for(var r=gr;r;)r=ro(r.nextSibling)}function Ga(){gr=vr=null,Zt=!1}function Yd(r){$r===null?$r=[r]:$r.push(r)}var nA=R.ReactCurrentBatchConfig;function dl(r,o,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var v=f,x=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===x?o.ref:(o=function(A){var F=v.refs;A===null?delete F[x]:F[x]=A},o._stringRef=x,o)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Ju(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function zg(r){var o=r._init;return o(r._payload)}function Bg(r){function o(K,G){if(r){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function l(K,G){if(!r)return null;for(;G!==null;)o(K,G),G=G.sibling;return null}function f(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function v(K,G){return K=mo(K,G),K.index=0,K.sibling=null,K}function x(K,G,te){return K.index=te,r?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function A(K){return r&&K.alternate===null&&(K.flags|=2),K}function F(K,G,te,Pe){return G===null||G.tag!==6?(G=Bh(te,K.mode,Pe),G.return=K,G):(G=v(G,te),G.return=K,G)}function z(K,G,te,Pe){var Je=te.type;return Je===I?Ee(K,G,te.props.children,Pe,te.key):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&zg(Je)===G.type)?(Pe=v(G,te.props),Pe.ref=dl(K,G,te),Pe.return=K,Pe):(Pe=Ec(te.type,te.key,te.props,null,K.mode,Pe),Pe.ref=dl(K,G,te),Pe.return=K,Pe)}function ae(K,G,te,Pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Hh(te,K.mode,Pe),G.return=K,G):(G=v(G,te.children||[]),G.return=K,G)}function Ee(K,G,te,Pe,Je){return G===null||G.tag!==7?(G=ia(te,K.mode,Pe,Je),G.return=K,G):(G=v(G,te),G.return=K,G)}function Te(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Bh(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return te=Ec(G.type,G.key,G.props,null,K.mode,te),te.ref=dl(K,null,G),te.return=K,te;case N:return G=Hh(G,K.mode,te),G.return=K,G;case se:var Pe=G._init;return Te(K,Pe(G._payload),te)}if(we(G)||ie(G))return G=ia(G,K.mode,te,null),G.return=K,G;Ju(K,G)}return null}function Se(K,G,te,Pe){var Je=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Je!==null?null:F(K,G,""+te,Pe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===Je?z(K,G,te,Pe):null;case N:return te.key===Je?ae(K,G,te,Pe):null;case se:return Je=te._init,Se(K,G,Je(te._payload),Pe)}if(we(te)||ie(te))return Je!==null?null:Ee(K,G,te,Pe,null);Ju(K,te)}return null}function We(K,G,te,Pe,Je){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return K=K.get(te)||null,F(G,K,""+Pe,Je);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case U:return K=K.get(Pe.key===null?te:Pe.key)||null,z(G,K,Pe,Je);case N:return K=K.get(Pe.key===null?te:Pe.key)||null,ae(G,K,Pe,Je);case se:var rt=Pe._init;return We(K,G,te,rt(Pe._payload),Je)}if(we(Pe)||ie(Pe))return K=K.get(te)||null,Ee(G,K,Pe,Je,null);Ju(G,Pe)}return null}function qe(K,G,te,Pe){for(var Je=null,rt=null,it=G,ut=G=0,wn=null;it!==null&&ut<te.length;ut++){it.index>ut?(wn=it,it=null):wn=it.sibling;var Lt=Se(K,it,te[ut],Pe);if(Lt===null){it===null&&(it=wn);break}r&&it&&Lt.alternate===null&&o(K,it),G=x(Lt,G,ut),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt,it=wn}if(ut===te.length)return l(K,it),Zt&&Ko(K,ut),Je;if(it===null){for(;ut<te.length;ut++)it=Te(K,te[ut],Pe),it!==null&&(G=x(it,G,ut),rt===null?Je=it:rt.sibling=it,rt=it);return Zt&&Ko(K,ut),Je}for(it=f(K,it);ut<te.length;ut++)wn=We(it,K,ut,te[ut],Pe),wn!==null&&(r&&wn.alternate!==null&&it.delete(wn.key===null?ut:wn.key),G=x(wn,G,ut),rt===null?Je=wn:rt.sibling=wn,rt=wn);return r&&it.forEach(function(vo){return o(K,vo)}),Zt&&Ko(K,ut),Je}function Ke(K,G,te,Pe){var Je=ie(te);if(typeof Je!="function")throw Error(t(150));if(te=Je.call(te),te==null)throw Error(t(151));for(var rt=Je=null,it=G,ut=G=0,wn=null,Lt=te.next();it!==null&&!Lt.done;ut++,Lt=te.next()){it.index>ut?(wn=it,it=null):wn=it.sibling;var vo=Se(K,it,Lt.value,Pe);if(vo===null){it===null&&(it=wn);break}r&&it&&vo.alternate===null&&o(K,it),G=x(vo,G,ut),rt===null?Je=vo:rt.sibling=vo,rt=vo,it=wn}if(Lt.done)return l(K,it),Zt&&Ko(K,ut),Je;if(it===null){for(;!Lt.done;ut++,Lt=te.next())Lt=Te(K,Lt.value,Pe),Lt!==null&&(G=x(Lt,G,ut),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt);return Zt&&Ko(K,ut),Je}for(it=f(K,it);!Lt.done;ut++,Lt=te.next())Lt=We(it,K,ut,Lt.value,Pe),Lt!==null&&(r&&Lt.alternate!==null&&it.delete(Lt.key===null?ut:Lt.key),G=x(Lt,G,ut),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt);return r&&it.forEach(function(NA){return o(K,NA)}),Zt&&Ko(K,ut),Je}function sn(K,G,te,Pe){if(typeof te=="object"&&te!==null&&te.type===I&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var Je=te.key,rt=G;rt!==null;){if(rt.key===Je){if(Je=te.type,Je===I){if(rt.tag===7){l(K,rt.sibling),G=v(rt,te.props.children),G.return=K,K=G;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&zg(Je)===rt.type){l(K,rt.sibling),G=v(rt,te.props),G.ref=dl(K,rt,te),G.return=K,K=G;break e}l(K,rt);break}else o(K,rt);rt=rt.sibling}te.type===I?(G=ia(te.props.children,K.mode,Pe,te.key),G.return=K,K=G):(Pe=Ec(te.type,te.key,te.props,null,K.mode,Pe),Pe.ref=dl(K,G,te),Pe.return=K,K=Pe)}return A(K);case N:e:{for(rt=te.key;G!==null;){if(G.key===rt)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){l(K,G.sibling),G=v(G,te.children||[]),G.return=K,K=G;break e}else{l(K,G);break}else o(K,G);G=G.sibling}G=Hh(te,K.mode,Pe),G.return=K,K=G}return A(K);case se:return rt=te._init,sn(K,G,rt(te._payload),Pe)}if(we(te))return qe(K,G,te,Pe);if(ie(te))return Ke(K,G,te,Pe);Ju(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(l(K,G.sibling),G=v(G,te),G.return=K,K=G):(l(K,G),G=Bh(te,K.mode,Pe),G.return=K,K=G),A(K)):l(K,G)}return sn}var Wa=Bg(!0),Hg=Bg(!1),Qu=io(null),ec=null,$a=null,Kd=null;function Zd(){Kd=$a=ec=null}function Jd(r){var o=Qu.current;jt(Qu),r._currentValue=o}function Qd(r,o,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===l)break;r=r.return}}function Xa(r,o){ec=r,Kd=$a=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(or=!0),r.firstContext=null)}function Pr(r){var o=r._currentValue;if(Kd!==r)if(r={context:r,memoizedValue:o,next:null},$a===null){if(ec===null)throw Error(t(308));$a=r,ec.dependencies={lanes:0,firstContext:r}}else $a=$a.next=r;return o}var Zo=null;function eh(r){Zo===null?Zo=[r]:Zo.push(r)}function Vg(r,o,l,f){var v=o.interleaved;return v===null?(l.next=l,eh(o)):(l.next=v.next,v.next=l),o.interleaved=l,Ii(r,f)}function Ii(r,o){r.lanes|=o;var l=r.alternate;for(l!==null&&(l.lanes|=o),l=r,r=r.return;r!==null;)r.childLanes|=o,l=r.alternate,l!==null&&(l.childLanes|=o),l=r,r=r.return;return l.tag===3?l.stateNode:null}var so=!1;function th(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ui(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function lo(r,o,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Rt&2)!==0){var v=f.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),f.pending=o,Ii(r,l)}return v=f.interleaved,v===null?(o.next=o,eh(f)):(o.next=v.next,v.next=o),f.interleaved=o,Ii(r,l)}function tc(r,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,md(r,l)}}function Wg(r,o){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var v=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?v=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?v=x=o:x=x.next=o}else v=x=o;l={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=o:r.next=o,l.lastBaseUpdate=o}function nc(r,o,l,f){var v=r.updateQueue;so=!1;var x=v.firstBaseUpdate,A=v.lastBaseUpdate,F=v.shared.pending;if(F!==null){v.shared.pending=null;var z=F,ae=z.next;z.next=null,A===null?x=ae:A.next=ae,A=z;var Ee=r.alternate;Ee!==null&&(Ee=Ee.updateQueue,F=Ee.lastBaseUpdate,F!==A&&(F===null?Ee.firstBaseUpdate=ae:F.next=ae,Ee.lastBaseUpdate=z))}if(x!==null){var Te=v.baseState;A=0,Ee=ae=z=null,F=x;do{var Se=F.lane,We=F.eventTime;if((f&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:We,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var qe=r,Ke=F;switch(Se=o,We=l,Ke.tag){case 1:if(qe=Ke.payload,typeof qe=="function"){Te=qe.call(We,Te,Se);break e}Te=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ke.payload,Se=typeof qe=="function"?qe.call(We,Te,Se):qe,Se==null)break e;Te=$({},Te,Se);break e;case 2:so=!0}}F.callback!==null&&F.lane!==0&&(r.flags|=64,Se=v.effects,Se===null?v.effects=[F]:Se.push(F))}else We={eventTime:We,lane:Se,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Ee===null?(ae=Ee=We,z=Te):Ee=Ee.next=We,A|=Se;if(F=F.next,F===null){if(F=v.shared.pending,F===null)break;Se=F,F=Se.next,Se.next=null,v.lastBaseUpdate=Se,v.shared.pending=null}}while(!0);if(Ee===null&&(z=Te),v.baseState=z,v.firstBaseUpdate=ae,v.lastBaseUpdate=Ee,o=v.shared.interleaved,o!==null){v=o;do A|=v.lane,v=v.next;while(v!==o)}else x===null&&(v.shared.lanes=0);ea|=A,r.lanes=A,r.memoizedState=Te}}function $g(r,o,l){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],v=f.callback;if(v!==null){if(f.callback=null,f=l,typeof v!="function")throw Error(t(191,v));v.call(f)}}}var hl={},ai=io(hl),pl=io(hl),ml=io(hl);function Jo(r){if(r===hl)throw Error(t(174));return r}function nh(r,o){switch(Gt(ml,o),Gt(pl,r),Gt(ai,hl),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ye(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=ye(o,r)}jt(ai),Gt(ai,o)}function ja(){jt(ai),jt(pl),jt(ml)}function Xg(r){Jo(ml.current);var o=Jo(ai.current),l=ye(o,r.type);o!==l&&(Gt(pl,r),Gt(ai,l))}function rh(r){pl.current===r&&(jt(ai),jt(pl))}var Qt=io(0);function rc(r){for(var o=r;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var ih=[];function oh(){for(var r=0;r<ih.length;r++)ih[r]._workInProgressVersionPrimary=null;ih.length=0}var ic=R.ReactCurrentDispatcher,ah=R.ReactCurrentBatchConfig,Qo=0,en=null,mn=null,Sn=null,oc=!1,vl=!1,gl=0,rA=0;function zn(){throw Error(t(321))}function sh(r,o){if(o===null)return!1;for(var l=0;l<o.length&&l<r.length;l++)if(!Wr(r[l],o[l]))return!1;return!0}function lh(r,o,l,f,v,x){if(Qo=x,en=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,ic.current=r===null||r.memoizedState===null?sA:lA,r=l(f,v),vl){x=0;do{if(vl=!1,gl=0,25<=x)throw Error(t(301));x+=1,Sn=mn=null,o.updateQueue=null,ic.current=uA,r=l(f,v)}while(vl)}if(ic.current=lc,o=mn!==null&&mn.next!==null,Qo=0,Sn=mn=en=null,oc=!1,o)throw Error(t(300));return r}function uh(){var r=gl!==0;return gl=0,r}function si(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?en.memoizedState=Sn=r:Sn=Sn.next=r,Sn}function Lr(){if(mn===null){var r=en.alternate;r=r!==null?r.memoizedState:null}else r=mn.next;var o=Sn===null?en.memoizedState:Sn.next;if(o!==null)Sn=o,mn=r;else{if(r===null)throw Error(t(310));mn=r,r={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},Sn===null?en.memoizedState=Sn=r:Sn=Sn.next=r}return Sn}function _l(r,o){return typeof o=="function"?o(r):o}function ch(r){var o=Lr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=mn,v=f.baseQueue,x=l.pending;if(x!==null){if(v!==null){var A=v.next;v.next=x.next,x.next=A}f.baseQueue=v=x,l.pending=null}if(v!==null){x=v.next,f=f.baseState;var F=A=null,z=null,ae=x;do{var Ee=ae.lane;if((Qo&Ee)===Ee)z!==null&&(z=z.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:r(f,ae.action);else{var Te={lane:Ee,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};z===null?(F=z=Te,A=f):z=z.next=Te,en.lanes|=Ee,ea|=Ee}ae=ae.next}while(ae!==null&&ae!==x);z===null?A=f:z.next=F,Wr(f,o.memoizedState)||(or=!0),o.memoizedState=f,o.baseState=A,o.baseQueue=z,l.lastRenderedState=f}if(r=l.interleaved,r!==null){v=r;do x=v.lane,en.lanes|=x,ea|=x,v=v.next;while(v!==r)}else v===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function fh(r){var o=Lr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,v=l.pending,x=o.memoizedState;if(v!==null){l.pending=null;var A=v=v.next;do x=r(x,A.action),A=A.next;while(A!==v);Wr(x,o.memoizedState)||(or=!0),o.memoizedState=x,o.baseQueue===null&&(o.baseState=x),l.lastRenderedState=x}return[x,f]}function jg(){}function qg(r,o){var l=en,f=Lr(),v=o(),x=!Wr(f.memoizedState,v);if(x&&(f.memoizedState=v,or=!0),f=f.queue,dh(Zg.bind(null,l,f,r),[r]),f.getSnapshot!==o||x||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,yl(9,Kg.bind(null,l,f,v,o),void 0,null),En===null)throw Error(t(349));(Qo&30)!==0||Yg(l,o,v)}return v}function Yg(r,o,l){r.flags|=16384,r={getSnapshot:o,value:l},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.stores=[r]):(l=o.stores,l===null?o.stores=[r]:l.push(r))}function Kg(r,o,l,f){o.value=l,o.getSnapshot=f,Jg(o)&&Qg(r)}function Zg(r,o,l){return l(function(){Jg(o)&&Qg(r)})}function Jg(r){var o=r.getSnapshot;r=r.value;try{var l=o();return!Wr(r,l)}catch{return!0}}function Qg(r){var o=Ii(r,1);o!==null&&Yr(o,r,1,-1)}function e_(r){var o=si();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:r},o.queue=r,r=r.dispatch=aA.bind(null,en,r),[o.memoizedState,r]}function yl(r,o,l,f){return r={tag:r,create:o,destroy:l,deps:f,next:null},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.lastEffect=r.next=r):(l=o.lastEffect,l===null?o.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,o.lastEffect=r)),r}function t_(){return Lr().memoizedState}function ac(r,o,l,f){var v=si();en.flags|=r,v.memoizedState=yl(1|o,l,void 0,f===void 0?null:f)}function sc(r,o,l,f){var v=Lr();f=f===void 0?null:f;var x=void 0;if(mn!==null){var A=mn.memoizedState;if(x=A.destroy,f!==null&&sh(f,A.deps)){v.memoizedState=yl(o,l,x,f);return}}en.flags|=r,v.memoizedState=yl(1|o,l,x,f)}function n_(r,o){return ac(8390656,8,r,o)}function dh(r,o){return sc(2048,8,r,o)}function r_(r,o){return sc(4,2,r,o)}function i_(r,o){return sc(4,4,r,o)}function o_(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function a_(r,o,l){return l=l!=null?l.concat([r]):null,sc(4,4,o_.bind(null,o,r),l)}function hh(){}function s_(r,o){var l=Lr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&sh(o,f[1])?f[0]:(l.memoizedState=[r,o],r)}function l_(r,o){var l=Lr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&sh(o,f[1])?f[0]:(r=r(),l.memoizedState=[r,o],r)}function u_(r,o,l){return(Qo&21)===0?(r.baseState&&(r.baseState=!1,or=!0),r.memoizedState=l):(Wr(l,o)||(l=Ru(),en.lanes|=l,ea|=l,r.baseState=!0),o)}function iA(r,o){var l=kt;kt=l!==0&&4>l?l:4,r(!0);var f=ah.transition;ah.transition={};try{r(!1),o()}finally{kt=l,ah.transition=f}}function c_(){return Lr().memoizedState}function oA(r,o,l){var f=ho(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},f_(r))d_(o,l);else if(l=Vg(r,o,l,f),l!==null){var v=Zn();Yr(l,r,f,v),h_(l,o,f)}}function aA(r,o,l){var f=ho(r),v={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(f_(r))d_(o,v);else{var x=r.alternate;if(r.lanes===0&&(x===null||x.lanes===0)&&(x=o.lastRenderedReducer,x!==null))try{var A=o.lastRenderedState,F=x(A,l);if(v.hasEagerState=!0,v.eagerState=F,Wr(F,A)){var z=o.interleaved;z===null?(v.next=v,eh(o)):(v.next=z.next,z.next=v),o.interleaved=v;return}}catch{}finally{}l=Vg(r,o,v,f),l!==null&&(v=Zn(),Yr(l,r,f,v),h_(l,o,f))}}function f_(r){var o=r.alternate;return r===en||o!==null&&o===en}function d_(r,o){vl=oc=!0;var l=r.pending;l===null?o.next=o:(o.next=l.next,l.next=o),r.pending=o}function h_(r,o,l){if((l&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,md(r,l)}}var lc={readContext:Pr,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},sA={readContext:Pr,useCallback:function(r,o){return si().memoizedState=[r,o===void 0?null:o],r},useContext:Pr,useEffect:n_,useImperativeHandle:function(r,o,l){return l=l!=null?l.concat([r]):null,ac(4194308,4,o_.bind(null,o,r),l)},useLayoutEffect:function(r,o){return ac(4194308,4,r,o)},useInsertionEffect:function(r,o){return ac(4,2,r,o)},useMemo:function(r,o){var l=si();return o=o===void 0?null:o,r=r(),l.memoizedState=[r,o],r},useReducer:function(r,o,l){var f=si();return o=l!==void 0?l(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=oA.bind(null,en,r),[f.memoizedState,r]},useRef:function(r){var o=si();return r={current:r},o.memoizedState=r},useState:e_,useDebugValue:hh,useDeferredValue:function(r){return si().memoizedState=r},useTransition:function(){var r=e_(!1),o=r[0];return r=iA.bind(null,r[1]),si().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,l){var f=en,v=si();if(Zt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),En===null)throw Error(t(349));(Qo&30)!==0||Yg(f,o,l)}v.memoizedState=l;var x={value:l,getSnapshot:o};return v.queue=x,n_(Zg.bind(null,f,x,r),[r]),f.flags|=2048,yl(9,Kg.bind(null,f,x,l,o),void 0,null),l},useId:function(){var r=si(),o=En.identifierPrefix;if(Zt){var l=Di,f=Li;l=(f&~(1<<32-Yn(f)-1)).toString(32)+l,o=":"+o+"R"+l,l=gl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=rA++,o=":"+o+"r"+l.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},lA={readContext:Pr,useCallback:s_,useContext:Pr,useEffect:dh,useImperativeHandle:a_,useInsertionEffect:r_,useLayoutEffect:i_,useMemo:l_,useReducer:ch,useRef:t_,useState:function(){return ch(_l)},useDebugValue:hh,useDeferredValue:function(r){var o=Lr();return u_(o,mn.memoizedState,r)},useTransition:function(){var r=ch(_l)[0],o=Lr().memoizedState;return[r,o]},useMutableSource:jg,useSyncExternalStore:qg,useId:c_,unstable_isNewReconciler:!1},uA={readContext:Pr,useCallback:s_,useContext:Pr,useEffect:dh,useImperativeHandle:a_,useInsertionEffect:r_,useLayoutEffect:i_,useMemo:l_,useReducer:fh,useRef:t_,useState:function(){return fh(_l)},useDebugValue:hh,useDeferredValue:function(r){var o=Lr();return mn===null?o.memoizedState=r:u_(o,mn.memoizedState,r)},useTransition:function(){var r=fh(_l)[0],o=Lr().memoizedState;return[r,o]},useMutableSource:jg,useSyncExternalStore:qg,useId:c_,unstable_isNewReconciler:!1};function Xr(r,o){if(r&&r.defaultProps){o=$({},o),r=r.defaultProps;for(var l in r)o[l]===void 0&&(o[l]=r[l]);return o}return o}function ph(r,o,l,f){o=r.memoizedState,l=l(f,o),l=l==null?o:$({},o,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var uc={isMounted:function(r){return(r=r._reactInternals)?bi(r)===r:!1},enqueueSetState:function(r,o,l){r=r._reactInternals;var f=Zn(),v=ho(r),x=Ui(f,v);x.payload=o,l!=null&&(x.callback=l),o=lo(r,x,v),o!==null&&(Yr(o,r,v,f),tc(o,r,v))},enqueueReplaceState:function(r,o,l){r=r._reactInternals;var f=Zn(),v=ho(r),x=Ui(f,v);x.tag=1,x.payload=o,l!=null&&(x.callback=l),o=lo(r,x,v),o!==null&&(Yr(o,r,v,f),tc(o,r,v))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var l=Zn(),f=ho(r),v=Ui(l,f);v.tag=2,o!=null&&(v.callback=o),o=lo(r,v,f),o!==null&&(Yr(o,r,f,l),tc(o,r,f))}};function p_(r,o,l,f,v,x,A){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,x,A):o.prototype&&o.prototype.isPureReactComponent?!ol(l,f)||!ol(v,x):!0}function m_(r,o,l){var f=!1,v=oo,x=o.contextType;return typeof x=="object"&&x!==null?x=Pr(x):(v=ir(o)?qo:kn.current,f=o.contextTypes,x=(f=f!=null)?Ba(r,v):oo),o=new o(l,x),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=uc,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=v,r.__reactInternalMemoizedMaskedChildContext=x),o}function v_(r,o,l,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,f),o.state!==r&&uc.enqueueReplaceState(o,o.state,null)}function mh(r,o,l,f){var v=r.stateNode;v.props=l,v.state=r.memoizedState,v.refs={},th(r);var x=o.contextType;typeof x=="object"&&x!==null?v.context=Pr(x):(x=ir(o)?qo:kn.current,v.context=Ba(r,x)),v.state=r.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(ph(r,o,x,l),v.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&uc.enqueueReplaceState(v,v.state,null),nc(r,l,v,f),v.state=r.memoizedState),typeof v.componentDidMount=="function"&&(r.flags|=4194308)}function qa(r,o){try{var l="",f=o;do l+=ee(f),f=f.return;while(f);var v=l}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:r,source:o,stack:v,digest:null}}function vh(r,o,l){return{value:r,source:null,stack:l??null,digest:o??null}}function gh(r,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var cA=typeof WeakMap=="function"?WeakMap:Map;function g_(r,o,l){l=Ui(-1,l),l.tag=3,l.payload={element:null};var f=o.value;return l.callback=function(){vc||(vc=!0,Dh=f),gh(r,o)},l}function __(r,o,l){l=Ui(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var v=o.value;l.payload=function(){return f(v)},l.callback=function(){gh(r,o)}}var x=r.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){gh(r,o),typeof f!="function"&&(co===null?co=new Set([this]):co.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),l}function y_(r,o,l){var f=r.pingCache;if(f===null){f=r.pingCache=new cA;var v=new Set;f.set(o,v)}else v=f.get(o),v===void 0&&(v=new Set,f.set(o,v));v.has(l)||(v.add(l),r=MA.bind(null,r,o,l),o.then(r,r))}function x_(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function S_(r,o,l,f,v){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Ui(-1,1),o.tag=2,lo(l,o,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=v,r)}var fA=R.ReactCurrentOwner,or=!1;function Kn(r,o,l,f){o.child=r===null?Hg(o,null,l,f):Wa(o,r.child,l,f)}function E_(r,o,l,f,v){l=l.render;var x=o.ref;return Xa(o,v),f=lh(r,o,l,f,x,v),l=uh(),r!==null&&!or?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,Ni(r,o,v)):(Zt&&l&&$d(o),o.flags|=1,Kn(r,o,f,v),o.child)}function w_(r,o,l,f,v){if(r===null){var x=l.type;return typeof x=="function"&&!zh(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=x,M_(r,o,x,f,v)):(r=Ec(l.type,null,f,o,o.mode,v),r.ref=o.ref,r.return=o,o.child=r)}if(x=r.child,(r.lanes&v)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:ol,l(A,f)&&r.ref===o.ref)return Ni(r,o,v)}return o.flags|=1,r=mo(x,f),r.ref=o.ref,r.return=o,o.child=r}function M_(r,o,l,f,v){if(r!==null){var x=r.memoizedProps;if(ol(x,f)&&r.ref===o.ref)if(or=!1,o.pendingProps=f=x,(r.lanes&v)!==0)(r.flags&131072)!==0&&(or=!0);else return o.lanes=r.lanes,Ni(r,o,v)}return _h(r,o,l,f,v)}function A_(r,o,l){var f=o.pendingProps,v=f.children,x=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ka,_r),_r|=l;else{if((l&1073741824)===0)return r=x!==null?x.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Gt(Ka,_r),_r|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,Gt(Ka,_r),_r|=f}else x!==null?(f=x.baseLanes|l,o.memoizedState=null):f=l,Gt(Ka,_r),_r|=f;return Kn(r,o,v,l),o.child}function T_(r,o){var l=o.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function _h(r,o,l,f,v){var x=ir(l)?qo:kn.current;return x=Ba(o,x),Xa(o,v),l=lh(r,o,l,f,x,v),f=uh(),r!==null&&!or?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,Ni(r,o,v)):(Zt&&f&&$d(o),o.flags|=1,Kn(r,o,l,v),o.child)}function b_(r,o,l,f,v){if(ir(l)){var x=!0;ju(o)}else x=!1;if(Xa(o,v),o.stateNode===null)fc(r,o),m_(o,l,f),mh(o,l,f,v),f=!0;else if(r===null){var A=o.stateNode,F=o.memoizedProps;A.props=F;var z=A.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=Pr(ae):(ae=ir(l)?qo:kn.current,ae=Ba(o,ae));var Ee=l.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==f||z!==ae)&&v_(o,A,f,ae),so=!1;var Se=o.memoizedState;A.state=Se,nc(o,f,A,v),z=o.memoizedState,F!==f||Se!==z||rr.current||so?(typeof Ee=="function"&&(ph(o,l,Ee,f),z=o.memoizedState),(F=so||p_(o,l,F,f,Se,z,ae))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=z),A.props=f,A.state=z,A.context=ae,f=F):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{A=o.stateNode,Gg(r,o),F=o.memoizedProps,ae=o.type===o.elementType?F:Xr(o.type,F),A.props=ae,Te=o.pendingProps,Se=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=Pr(z):(z=ir(l)?qo:kn.current,z=Ba(o,z));var We=l.getDerivedStateFromProps;(Ee=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==Te||Se!==z)&&v_(o,A,f,z),so=!1,Se=o.memoizedState,A.state=Se,nc(o,f,A,v);var qe=o.memoizedState;F!==Te||Se!==qe||rr.current||so?(typeof We=="function"&&(ph(o,l,We,f),qe=o.memoizedState),(ae=so||p_(o,l,ae,f,Se,qe,z)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,qe,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,qe,z)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=qe),A.props=f,A.state=qe,A.context=z,f=ae):(typeof A.componentDidUpdate!="function"||F===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),f=!1)}return yh(r,o,l,f,x,v)}function yh(r,o,l,f,v,x){T_(r,o);var A=(o.flags&128)!==0;if(!f&&!A)return v&&Dg(o,l,!1),Ni(r,o,x);f=o.stateNode,fA.current=o;var F=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&A?(o.child=Wa(o,r.child,null,x),o.child=Wa(o,null,F,x)):Kn(r,o,F,x),o.memoizedState=f.state,v&&Dg(o,l,!0),o.child}function C_(r){var o=r.stateNode;o.pendingContext?Pg(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Pg(r,o.context,!1),nh(r,o.containerInfo)}function R_(r,o,l,f,v){return Ga(),Yd(v),o.flags|=256,Kn(r,o,l,f),o.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function Sh(r){return{baseLanes:r,cachePool:null,transitions:null}}function P_(r,o,l){var f=o.pendingProps,v=Qt.current,x=!1,A=(o.flags&128)!==0,F;if((F=A)||(F=r!==null&&r.memoizedState===null?!1:(v&2)!==0),F?(x=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(v|=1),Gt(Qt,v&1),r===null)return qd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=f.children,r=f.fallback,x?(f=o.mode,x=o.child,A={mode:"hidden",children:A},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=wc(A,f,0,null),r=ia(r,f,l,null),x.return=o,r.return=o,x.sibling=r,o.child=x,o.child.memoizedState=Sh(l),o.memoizedState=xh,r):Eh(o,A));if(v=r.memoizedState,v!==null&&(F=v.dehydrated,F!==null))return dA(r,o,A,f,F,v,l);if(x){x=f.fallback,A=o.mode,v=r.child,F=v.sibling;var z={mode:"hidden",children:f.children};return(A&1)===0&&o.child!==v?(f=o.child,f.childLanes=0,f.pendingProps=z,o.deletions=null):(f=mo(v,z),f.subtreeFlags=v.subtreeFlags&14680064),F!==null?x=mo(F,x):(x=ia(x,A,l,null),x.flags|=2),x.return=o,f.return=o,f.sibling=x,o.child=f,f=x,x=o.child,A=r.child.memoizedState,A=A===null?Sh(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=r.childLanes&~l,o.memoizedState=xh,f}return x=r.child,r=x.sibling,f=mo(x,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=l),f.return=o,f.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=f,o.memoizedState=null,f}function Eh(r,o){return o=wc({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function cc(r,o,l,f){return f!==null&&Yd(f),Wa(o,r.child,null,l),r=Eh(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function dA(r,o,l,f,v,x,A){if(l)return o.flags&256?(o.flags&=-257,f=vh(Error(t(422))),cc(r,o,A,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(x=f.fallback,v=o.mode,f=wc({mode:"visible",children:f.children},v,0,null),x=ia(x,v,A,null),x.flags|=2,f.return=o,x.return=o,f.sibling=x,o.child=f,(o.mode&1)!==0&&Wa(o,r.child,null,A),o.child.memoizedState=Sh(A),o.memoizedState=xh,x);if((o.mode&1)===0)return cc(r,o,A,null);if(v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var F=f.dgst;return f=F,x=Error(t(419)),f=vh(x,f,void 0),cc(r,o,A,f)}if(F=(A&r.childLanes)!==0,or||F){if(f=En,f!==null){switch(A&-A){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(f.suspendedLanes|A))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,Ii(r,v),Yr(f,r,v,-1))}return kh(),f=vh(Error(t(421))),cc(r,o,A,f)}return v.data==="$?"?(o.flags|=128,o.child=r.child,o=AA.bind(null,r),v._reactRetry=o,null):(r=x.treeContext,gr=ro(v.nextSibling),vr=o,Zt=!0,$r=null,r!==null&&(Cr[Rr++]=Li,Cr[Rr++]=Di,Cr[Rr++]=Yo,Li=r.id,Di=r.overflow,Yo=o),o=Eh(o,f.children),o.flags|=4096,o)}function L_(r,o,l){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),Qd(r.return,o,l)}function wh(r,o,l,f,v){var x=r.memoizedState;x===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:v}:(x.isBackwards=o,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=v)}function D_(r,o,l){var f=o.pendingProps,v=f.revealOrder,x=f.tail;if(Kn(r,o,f.children,l),f=Qt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&L_(r,l,o);else if(r.tag===19)L_(r,l,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Gt(Qt,f),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(l=o.child,v=null;l!==null;)r=l.alternate,r!==null&&rc(r)===null&&(v=l),l=l.sibling;l=v,l===null?(v=o.child,o.child=null):(v=l.sibling,l.sibling=null),wh(o,!1,v,l,x);break;case"backwards":for(l=null,v=o.child,o.child=null;v!==null;){if(r=v.alternate,r!==null&&rc(r)===null){o.child=v;break}r=v.sibling,v.sibling=l,l=v,v=r}wh(o,!0,l,null,x);break;case"together":wh(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function fc(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function Ni(r,o,l){if(r!==null&&(o.dependencies=r.dependencies),ea|=o.lanes,(l&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,l=mo(r,r.pendingProps),o.child=l,l.return=o;r.sibling!==null;)r=r.sibling,l=l.sibling=mo(r,r.pendingProps),l.return=o;l.sibling=null}return o.child}function hA(r,o,l){switch(o.tag){case 3:C_(o),Ga();break;case 5:Xg(o);break;case 1:ir(o.type)&&ju(o);break;case 4:nh(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,v=o.memoizedProps.value;Gt(Qu,f._currentValue),f._currentValue=v;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(Gt(Qt,Qt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?P_(r,o,l):(Gt(Qt,Qt.current&1),r=Ni(r,o,l),r!==null?r.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(f=(l&o.childLanes)!==0,(r.flags&128)!==0){if(f)return D_(r,o,l);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Gt(Qt,Qt.current),f)break;return null;case 22:case 23:return o.lanes=0,A_(r,o,l)}return Ni(r,o,l)}var I_,Mh,U_,N_;I_=function(r,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Mh=function(){},U_=function(r,o,l,f){var v=r.memoizedProps;if(v!==f){r=o.stateNode,Jo(ai.current);var x=null;switch(l){case"input":v=Ve(r,v),f=Ve(r,f),x=[];break;case"select":v=$({},v,{value:void 0}),f=$({},f,{value:void 0}),x=[];break;case"textarea":v=Ze(r,v),f=Ze(r,f),x=[];break;default:typeof v.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Wu)}ft(l,f);var A;l=null;for(ae in v)if(!f.hasOwnProperty(ae)&&v.hasOwnProperty(ae)&&v[ae]!=null)if(ae==="style"){var F=v[ae];for(A in F)F.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?x||(x=[]):(x=x||[]).push(ae,null));for(ae in f){var z=f[ae];if(F=v?.[ae],f.hasOwnProperty(ae)&&z!==F&&(z!=null||F!=null))if(ae==="style")if(F){for(A in F)!F.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&F[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(x||(x=[]),x.push(ae,l)),l=z;else ae==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(x=x||[]).push(ae,z)):ae==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(ae,""+z):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(z!=null&&ae==="onScroll"&&Xt("scroll",r),x||F===z||(x=[])):(x=x||[]).push(ae,z))}l&&(x=x||[]).push("style",l);var ae=x;(o.updateQueue=ae)&&(o.flags|=4)}},N_=function(r,o,l,f){l!==f&&(o.flags|=4)};function xl(r,o){if(!Zt)switch(r.tailMode){case"hidden":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function Bn(r){var o=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(o)for(var v=r.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags&14680064,f|=v.flags&14680064,v.return=r,v=v.sibling;else for(v=r.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=f,r.childLanes=l,o}function pA(r,o,l){var f=o.pendingProps;switch(Xd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(o),null;case 1:return ir(o.type)&&Xu(),Bn(o),null;case 3:return f=o.stateNode,ja(),jt(rr),jt(kn),oh(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Zu(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,$r!==null&&(Nh($r),$r=null))),Mh(r,o),Bn(o),null;case 5:rh(o);var v=Jo(ml.current);if(l=o.type,r!==null&&o.stateNode!=null)U_(r,o,l,f,v),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return Bn(o),null}if(r=Jo(ai.current),Zu(o)){f=o.stateNode,l=o.type;var x=o.memoizedProps;switch(f[oi]=o,f[cl]=x,r=(o.mode&1)!==0,l){case"dialog":Xt("cancel",f),Xt("close",f);break;case"iframe":case"object":case"embed":Xt("load",f);break;case"video":case"audio":for(v=0;v<sl.length;v++)Xt(sl[v],f);break;case"source":Xt("error",f);break;case"img":case"image":case"link":Xt("error",f),Xt("load",f);break;case"details":Xt("toggle",f);break;case"input":le(f,x),Xt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Xt("invalid",f);break;case"textarea":D(f,x),Xt("invalid",f)}ft(l,x),v=null;for(var A in x)if(x.hasOwnProperty(A)){var F=x[A];A==="children"?typeof F=="string"?f.textContent!==F&&(x.suppressHydrationWarning!==!0&&Gu(f.textContent,F,r),v=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&Gu(f.textContent,F,r),v=["children",""+F]):a.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&Xt("scroll",f)}switch(l){case"input":ze(f),ge(f,x,!0);break;case"textarea":ze(f),q(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Wu)}f=v,o.updateQueue=f,f!==null&&(o.flags|=4)}else{A=v.nodeType===9?v:v.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Ae(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=A.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=A.createElement(l,{is:f.is}):(r=A.createElement(l),l==="select"&&(A=r,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):r=A.createElementNS(r,l),r[oi]=o,r[cl]=f,I_(r,o,!1,!1),o.stateNode=r;e:{switch(A=st(l,f),l){case"dialog":Xt("cancel",r),Xt("close",r),v=f;break;case"iframe":case"object":case"embed":Xt("load",r),v=f;break;case"video":case"audio":for(v=0;v<sl.length;v++)Xt(sl[v],r);v=f;break;case"source":Xt("error",r),v=f;break;case"img":case"image":case"link":Xt("error",r),Xt("load",r),v=f;break;case"details":Xt("toggle",r),v=f;break;case"input":le(r,f),v=Ve(r,f),Xt("invalid",r);break;case"option":v=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},v=$({},f,{value:void 0}),Xt("invalid",r);break;case"textarea":D(r,f),v=Ze(r,f),Xt("invalid",r);break;default:v=f}ft(l,v),F=v;for(x in F)if(F.hasOwnProperty(x)){var z=F[x];x==="style"?Le(r,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ye(r,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&De(r,z):typeof z=="number"&&De(r,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Xt("scroll",r):z!=null&&M(r,x,z,A))}switch(l){case"input":ze(r),ge(r,f,!1);break;case"textarea":ze(r),q(r);break;case"option":f.value!=null&&r.setAttribute("value",""+ve(f.value));break;case"select":r.multiple=!!f.multiple,x=f.value,x!=null?Ie(r,!!f.multiple,x,!1):f.defaultValue!=null&&Ie(r,!!f.multiple,f.defaultValue,!0);break;default:typeof v.onClick=="function"&&(r.onclick=Wu)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Bn(o),null;case 6:if(r&&o.stateNode!=null)N_(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(l=Jo(ml.current),Jo(ai.current),Zu(o)){if(f=o.stateNode,l=o.memoizedProps,f[oi]=o,(x=f.nodeValue!==l)&&(r=vr,r!==null))switch(r.tag){case 3:Gu(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Gu(f.nodeValue,l,(r.mode&1)!==0)}x&&(o.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[oi]=o,o.stateNode=f}return Bn(o),null;case 13:if(jt(Qt),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Zt&&gr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)kg(),Ga(),o.flags|=98560,x=!1;else if(x=Zu(o),f!==null&&f.dehydrated!==null){if(r===null){if(!x)throw Error(t(318));if(x=o.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[oi]=o}else Ga(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Bn(o),x=!1}else $r!==null&&(Nh($r),$r=null),x=!0;if(!x)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(Qt.current&1)!==0?vn===0&&(vn=3):kh())),o.updateQueue!==null&&(o.flags|=4),Bn(o),null);case 4:return ja(),Mh(r,o),r===null&&ll(o.stateNode.containerInfo),Bn(o),null;case 10:return Jd(o.type._context),Bn(o),null;case 17:return ir(o.type)&&Xu(),Bn(o),null;case 19:if(jt(Qt),x=o.memoizedState,x===null)return Bn(o),null;if(f=(o.flags&128)!==0,A=x.rendering,A===null)if(f)xl(x,!1);else{if(vn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(A=rc(r),A!==null){for(o.flags|=128,xl(x,!1),f=A.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=l,l=o.child;l!==null;)x=l,r=f,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=r,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,r=A.dependencies,x.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Gt(Qt,Qt.current&1|2),o.child}r=r.sibling}x.tail!==null&&Xe()>Za&&(o.flags|=128,f=!0,xl(x,!1),o.lanes=4194304)}else{if(!f)if(r=rc(A),r!==null){if(o.flags|=128,f=!0,l=r.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),xl(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Zt)return Bn(o),null}else 2*Xe()-x.renderingStartTime>Za&&l!==1073741824&&(o.flags|=128,f=!0,xl(x,!1),o.lanes=4194304);x.isBackwards?(A.sibling=o.child,o.child=A):(l=x.last,l!==null?l.sibling=A:o.child=A,x.last=A)}return x.tail!==null?(o=x.tail,x.rendering=o,x.tail=o.sibling,x.renderingStartTime=Xe(),o.sibling=null,l=Qt.current,Gt(Qt,f?l&1|2:l&1),o):(Bn(o),null);case 22:case 23:return Oh(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(_r&1073741824)!==0&&(Bn(o),o.subtreeFlags&6&&(o.flags|=8192)):Bn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function mA(r,o){switch(Xd(o),o.tag){case 1:return ir(o.type)&&Xu(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return ja(),jt(rr),jt(kn),oh(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return rh(o),null;case 13:if(jt(Qt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ga()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return jt(Qt),null;case 4:return ja(),null;case 10:return Jd(o.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var dc=!1,Hn=!1,vA=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ya(r,o){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){on(r,o,f)}else l.current=null}function Ah(r,o,l){try{l()}catch(f){on(r,o,f)}}var F_=!1;function gA(r,o){if(Od=Du,r=pg(),Rd(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var v=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,F=-1,z=-1,ae=0,Ee=0,Te=r,Se=null;t:for(;;){for(var We;Te!==l||v!==0&&Te.nodeType!==3||(F=A+v),Te!==x||f!==0&&Te.nodeType!==3||(z=A+f),Te.nodeType===3&&(A+=Te.nodeValue.length),(We=Te.firstChild)!==null;)Se=Te,Te=We;for(;;){if(Te===r)break t;if(Se===l&&++ae===v&&(F=A),Se===x&&++Ee===f&&(z=A),(We=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=We}l=F===-1||z===-1?null:{start:F,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(kd={focusedElem:r,selectionRange:l},Du=!1,je=o;je!==null;)if(o=je,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,je=r;else for(;je!==null;){o=je;try{var qe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ke=qe.memoizedProps,sn=qe.memoizedState,K=o.stateNode,G=K.getSnapshotBeforeUpdate(o.elementType===o.type?Ke:Xr(o.type,Ke),sn);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){on(o,o.return,Pe)}if(r=o.sibling,r!==null){r.return=o.return,je=r;break}je=o.return}return qe=F_,F_=!1,qe}function Sl(r,o,l){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var v=f=f.next;do{if((v.tag&r)===r){var x=v.destroy;v.destroy=void 0,x!==void 0&&Ah(o,l,x)}v=v.next}while(v!==f)}}function hc(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==o)}}function Th(r){var o=r.ref;if(o!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof o=="function"?o(r):o.current=r}}function O_(r){var o=r.alternate;o!==null&&(r.alternate=null,O_(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[oi],delete o[cl],delete o[Vd],delete o[Q1],delete o[eA])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function k_(r){return r.tag===5||r.tag===3||r.tag===4}function z_(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||k_(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function bh(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(r,o):l.insertBefore(r,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(r,l)):(o=l,o.appendChild(r)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Wu));else if(f!==4&&(r=r.child,r!==null))for(bh(r,o,l),r=r.sibling;r!==null;)bh(r,o,l),r=r.sibling}function Ch(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.insertBefore(r,o):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(Ch(r,o,l),r=r.sibling;r!==null;)Ch(r,o,l),r=r.sibling}var An=null,jr=!1;function uo(r,o,l){for(l=l.child;l!==null;)B_(r,o,l),l=l.sibling}function B_(r,o,l){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(tr,l)}catch{}switch(l.tag){case 5:Hn||Ya(l,o);case 6:var f=An,v=jr;An=null,uo(r,o,l),An=f,jr=v,An!==null&&(jr?(r=An,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):An.removeChild(l.stateNode));break;case 18:An!==null&&(jr?(r=An,l=l.stateNode,r.nodeType===8?Hd(r.parentNode,l):r.nodeType===1&&Hd(r,l),Qs(r)):Hd(An,l.stateNode));break;case 4:f=An,v=jr,An=l.stateNode.containerInfo,jr=!0,uo(r,o,l),An=f,jr=v;break;case 0:case 11:case 14:case 15:if(!Hn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){v=f=f.next;do{var x=v,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Ah(l,o,A),v=v.next}while(v!==f)}uo(r,o,l);break;case 1:if(!Hn&&(Ya(l,o),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){on(l,o,F)}uo(r,o,l);break;case 21:uo(r,o,l);break;case 22:l.mode&1?(Hn=(f=Hn)||l.memoizedState!==null,uo(r,o,l),Hn=f):uo(r,o,l);break;default:uo(r,o,l)}}function H_(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new vA),o.forEach(function(f){var v=TA.bind(null,r,f);l.has(f)||(l.add(f),f.then(v,v))})}}function qr(r,o){var l=o.deletions;if(l!==null)for(var f=0;f<l.length;f++){var v=l[f];try{var x=r,A=o,F=A;e:for(;F!==null;){switch(F.tag){case 5:An=F.stateNode,jr=!1;break e;case 3:An=F.stateNode.containerInfo,jr=!0;break e;case 4:An=F.stateNode.containerInfo,jr=!0;break e}F=F.return}if(An===null)throw Error(t(160));B_(x,A,v),An=null,jr=!1;var z=v.alternate;z!==null&&(z.return=null),v.return=null}catch(ae){on(v,o,ae)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)V_(o,r),o=o.sibling}function V_(r,o){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(qr(o,r),li(r),f&4){try{Sl(3,r,r.return),hc(3,r)}catch(Ke){on(r,r.return,Ke)}try{Sl(5,r,r.return)}catch(Ke){on(r,r.return,Ke)}}break;case 1:qr(o,r),li(r),f&512&&l!==null&&Ya(l,l.return);break;case 5:if(qr(o,r),li(r),f&512&&l!==null&&Ya(l,l.return),r.flags&32){var v=r.stateNode;try{De(v,"")}catch(Ke){on(r,r.return,Ke)}}if(f&4&&(v=r.stateNode,v!=null)){var x=r.memoizedProps,A=l!==null?l.memoizedProps:x,F=r.type,z=r.updateQueue;if(r.updateQueue=null,z!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&ue(v,x),st(F,A);var ae=st(F,x);for(A=0;A<z.length;A+=2){var Ee=z[A],Te=z[A+1];Ee==="style"?Le(v,Te):Ee==="dangerouslySetInnerHTML"?Ye(v,Te):Ee==="children"?De(v,Te):M(v,Ee,Te,ae)}switch(F){case"input":xe(v,x);break;case"textarea":T(v,x);break;case"select":var Se=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var We=x.value;We!=null?Ie(v,!!x.multiple,We,!1):Se!==!!x.multiple&&(x.defaultValue!=null?Ie(v,!!x.multiple,x.defaultValue,!0):Ie(v,!!x.multiple,x.multiple?[]:"",!1))}v[cl]=x}catch(Ke){on(r,r.return,Ke)}}break;case 6:if(qr(o,r),li(r),f&4){if(r.stateNode===null)throw Error(t(162));v=r.stateNode,x=r.memoizedProps;try{v.nodeValue=x}catch(Ke){on(r,r.return,Ke)}}break;case 3:if(qr(o,r),li(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Qs(o.containerInfo)}catch(Ke){on(r,r.return,Ke)}break;case 4:qr(o,r),li(r);break;case 13:qr(o,r),li(r),v=r.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(Lh=Xe())),f&4&&H_(r);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,r.mode&1?(Hn=(ae=Hn)||Ee,qr(o,r),Hn=ae):qr(o,r),li(r),f&8192){if(ae=r.memoizedState!==null,(r.stateNode.isHidden=ae)&&!Ee&&(r.mode&1)!==0)for(je=r,Ee=r.child;Ee!==null;){for(Te=je=Ee;je!==null;){switch(Se=je,We=Se.child,Se.tag){case 0:case 11:case 14:case 15:Sl(4,Se,Se.return);break;case 1:Ya(Se,Se.return);var qe=Se.stateNode;if(typeof qe.componentWillUnmount=="function"){f=Se,l=Se.return;try{o=f,qe.props=o.memoizedProps,qe.state=o.memoizedState,qe.componentWillUnmount()}catch(Ke){on(f,l,Ke)}}break;case 5:Ya(Se,Se.return);break;case 22:if(Se.memoizedState!==null){$_(Te);continue}}We!==null?(We.return=Se,je=We):$_(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=r;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{v=Te.stateNode,ae?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=Te.stateNode,z=Te.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=Tt("display",A))}catch(Ke){on(r,r.return,Ke)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=ae?"":Te.memoizedProps}catch(Ke){on(r,r.return,Ke)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===r)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===r)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===r)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:qr(o,r),li(r),f&4&&H_(r);break;case 21:break;default:qr(o,r),li(r)}}function li(r){var o=r.flags;if(o&2){try{e:{for(var l=r.return;l!==null;){if(k_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var v=f.stateNode;f.flags&32&&(De(v,""),f.flags&=-33);var x=z_(r);Ch(r,x,v);break;case 3:case 4:var A=f.stateNode.containerInfo,F=z_(r);bh(r,F,A);break;default:throw Error(t(161))}}catch(z){on(r,r.return,z)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function _A(r,o,l){je=r,G_(r)}function G_(r,o,l){for(var f=(r.mode&1)!==0;je!==null;){var v=je,x=v.child;if(v.tag===22&&f){var A=v.memoizedState!==null||dc;if(!A){var F=v.alternate,z=F!==null&&F.memoizedState!==null||Hn;F=dc;var ae=Hn;if(dc=A,(Hn=z)&&!ae)for(je=v;je!==null;)A=je,z=A.child,A.tag===22&&A.memoizedState!==null?X_(v):z!==null?(z.return=A,je=z):X_(v);for(;x!==null;)je=x,G_(x),x=x.sibling;je=v,dc=F,Hn=ae}W_(r)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,je=x):W_(r)}}function W_(r){for(;je!==null;){var o=je;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Hn||hc(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!Hn)if(l===null)f.componentDidMount();else{var v=o.elementType===o.type?l.memoizedProps:Xr(o.type,l.memoizedProps);f.componentDidUpdate(v,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=o.updateQueue;x!==null&&$g(o,x,f);break;case 3:var A=o.updateQueue;if(A!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}$g(o,A,l)}break;case 5:var F=o.stateNode;if(l===null&&o.flags&4){l=F;var z=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ae=o.alternate;if(ae!==null){var Ee=ae.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Qs(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||o.flags&512&&Th(o)}catch(Se){on(o,o.return,Se)}}if(o===r){je=null;break}if(l=o.sibling,l!==null){l.return=o.return,je=l;break}je=o.return}}function $_(r){for(;je!==null;){var o=je;if(o===r){je=null;break}var l=o.sibling;if(l!==null){l.return=o.return,je=l;break}je=o.return}}function X_(r){for(;je!==null;){var o=je;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{hc(4,o)}catch(z){on(o,l,z)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var v=o.return;try{f.componentDidMount()}catch(z){on(o,v,z)}}var x=o.return;try{Th(o)}catch(z){on(o,x,z)}break;case 5:var A=o.return;try{Th(o)}catch(z){on(o,A,z)}}}catch(z){on(o,o.return,z)}if(o===r){je=null;break}var F=o.sibling;if(F!==null){F.return=o.return,je=F;break}je=o.return}}var yA=Math.ceil,pc=R.ReactCurrentDispatcher,Rh=R.ReactCurrentOwner,Dr=R.ReactCurrentBatchConfig,Rt=0,En=null,un=null,Tn=0,_r=0,Ka=io(0),vn=0,El=null,ea=0,mc=0,Ph=0,wl=null,ar=null,Lh=0,Za=1/0,Fi=null,vc=!1,Dh=null,co=null,gc=!1,fo=null,_c=0,Ml=0,Ih=null,yc=-1,xc=0;function Zn(){return(Rt&6)!==0?Xe():yc!==-1?yc:yc=Xe()}function ho(r){return(r.mode&1)===0?1:(Rt&2)!==0&&Tn!==0?Tn&-Tn:nA.transition!==null?(xc===0&&(xc=Ru()),xc):(r=kt,r!==0||(r=window.event,r=r===void 0?16:qv(r.type)),r)}function Yr(r,o,l,f){if(50<Ml)throw Ml=0,Ih=null,Error(t(185));qs(r,l,f),((Rt&2)===0||r!==En)&&(r===En&&((Rt&2)===0&&(mc|=l),vn===4&&po(r,Tn)),sr(r,f),l===1&&Rt===0&&(o.mode&1)===0&&(Za=Xe()+500,qu&&ao()))}function sr(r,o){var l=r.callbackNode;nr(r,o);var f=br(r,r===En?Tn:0);if(f===0)l!==null&&Ge(l),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(l!=null&&Ge(l),o===1)r.tag===0?tA(q_.bind(null,r)):Ig(q_.bind(null,r)),Z1(function(){(Rt&6)===0&&ao()}),l=null;else{switch(Bv(f)){case 1:l=dt;break;case 4:l=pt;break;case 16:l=Vt;break;case 536870912:l=an;break;default:l=Vt}l=n0(l,j_.bind(null,r))}r.callbackPriority=o,r.callbackNode=l}}function j_(r,o){if(yc=-1,xc=0,(Rt&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Ja()&&r.callbackNode!==l)return null;var f=br(r,r===En?Tn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=Sc(r,f);else{o=f;var v=Rt;Rt|=2;var x=K_();(En!==r||Tn!==o)&&(Fi=null,Za=Xe()+500,na(r,o));do try{EA();break}catch(F){Y_(r,F)}while(!0);Zd(),pc.current=x,Rt=v,un!==null?o=0:(En=null,Tn=0,o=vn)}if(o!==0){if(o===2&&(v=Xo(r),v!==0&&(f=v,o=Uh(r,v))),o===1)throw l=El,na(r,0),po(r,f),sr(r,Xe()),l;if(o===6)po(r,f);else{if(v=r.current.alternate,(f&30)===0&&!xA(v)&&(o=Sc(r,f),o===2&&(x=Xo(r),x!==0&&(f=x,o=Uh(r,x))),o===1))throw l=El,na(r,0),po(r,f),sr(r,Xe()),l;switch(r.finishedWork=v,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:ra(r,ar,Fi);break;case 3:if(po(r,f),(f&130023424)===f&&(o=Lh+500-Xe(),10<o)){if(br(r,0)!==0)break;if(v=r.suspendedLanes,(v&f)!==f){Zn(),r.pingedLanes|=r.suspendedLanes&v;break}r.timeoutHandle=Bd(ra.bind(null,r,ar,Fi),o);break}ra(r,ar,Fi);break;case 4:if(po(r,f),(f&4194240)===f)break;for(o=r.eventTimes,v=-1;0<f;){var A=31-Yn(f);x=1<<A,A=o[A],A>v&&(v=A),f&=~x}if(f=v,f=Xe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*yA(f/1960))-f,10<f){r.timeoutHandle=Bd(ra.bind(null,r,ar,Fi),f);break}ra(r,ar,Fi);break;case 5:ra(r,ar,Fi);break;default:throw Error(t(329))}}}return sr(r,Xe()),r.callbackNode===l?j_.bind(null,r):null}function Uh(r,o){var l=wl;return r.current.memoizedState.isDehydrated&&(na(r,o).flags|=256),r=Sc(r,o),r!==2&&(o=ar,ar=l,o!==null&&Nh(o)),r}function Nh(r){ar===null?ar=r:ar.push.apply(ar,r)}function xA(r){for(var o=r;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var v=l[f],x=v.getSnapshot;v=v.value;try{if(!Wr(x(),v))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function po(r,o){for(o&=~Ph,o&=~mc,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var l=31-Yn(o),f=1<<l;r[l]=-1,o&=~f}}function q_(r){if((Rt&6)!==0)throw Error(t(327));Ja();var o=br(r,0);if((o&1)===0)return sr(r,Xe()),null;var l=Sc(r,o);if(r.tag!==0&&l===2){var f=Xo(r);f!==0&&(o=f,l=Uh(r,f))}if(l===1)throw l=El,na(r,0),po(r,o),sr(r,Xe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,ra(r,ar,Fi),sr(r,Xe()),null}function Fh(r,o){var l=Rt;Rt|=1;try{return r(o)}finally{Rt=l,Rt===0&&(Za=Xe()+500,qu&&ao())}}function ta(r){fo!==null&&fo.tag===0&&(Rt&6)===0&&Ja();var o=Rt;Rt|=1;var l=Dr.transition,f=kt;try{if(Dr.transition=null,kt=1,r)return r()}finally{kt=f,Dr.transition=l,Rt=o,(Rt&6)===0&&ao()}}function Oh(){_r=Ka.current,jt(Ka)}function na(r,o){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,K1(l)),un!==null)for(l=un.return;l!==null;){var f=l;switch(Xd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Xu();break;case 3:ja(),jt(rr),jt(kn),oh();break;case 5:rh(f);break;case 4:ja();break;case 13:jt(Qt);break;case 19:jt(Qt);break;case 10:Jd(f.type._context);break;case 22:case 23:Oh()}l=l.return}if(En=r,un=r=mo(r.current,null),Tn=_r=o,vn=0,El=null,Ph=mc=ea=0,ar=wl=null,Zo!==null){for(o=0;o<Zo.length;o++)if(l=Zo[o],f=l.interleaved,f!==null){l.interleaved=null;var v=f.next,x=l.pending;if(x!==null){var A=x.next;x.next=v,f.next=A}l.pending=f}Zo=null}return r}function Y_(r,o){do{var l=un;try{if(Zd(),ic.current=lc,oc){for(var f=en.memoizedState;f!==null;){var v=f.queue;v!==null&&(v.pending=null),f=f.next}oc=!1}if(Qo=0,Sn=mn=en=null,vl=!1,gl=0,Rh.current=null,l===null||l.return===null){vn=1,El=o,un=null;break}e:{var x=r,A=l.return,F=l,z=o;if(o=Tn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ae=z,Ee=F,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var We=x_(A);if(We!==null){We.flags&=-257,S_(We,A,F,x,o),We.mode&1&&y_(x,ae,o),o=We,z=ae;var qe=o.updateQueue;if(qe===null){var Ke=new Set;Ke.add(z),o.updateQueue=Ke}else qe.add(z);break e}else{if((o&1)===0){y_(x,ae,o),kh();break e}z=Error(t(426))}}else if(Zt&&F.mode&1){var sn=x_(A);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),S_(sn,A,F,x,o),Yd(qa(z,F));break e}}x=z=qa(z,F),vn!==4&&(vn=2),wl===null?wl=[x]:wl.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,o&=-o,x.lanes|=o;var K=g_(x,z,o);Wg(x,K);break e;case 1:F=z;var G=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(co===null||!co.has(te)))){x.flags|=65536,o&=-o,x.lanes|=o;var Pe=__(x,F,o);Wg(x,Pe);break e}}x=x.return}while(x!==null)}J_(l)}catch(Je){o=Je,un===l&&l!==null&&(un=l=l.return);continue}break}while(!0)}function K_(){var r=pc.current;return pc.current=lc,r===null?lc:r}function kh(){(vn===0||vn===3||vn===2)&&(vn=4),En===null||(ea&268435455)===0&&(mc&268435455)===0||po(En,Tn)}function Sc(r,o){var l=Rt;Rt|=2;var f=K_();(En!==r||Tn!==o)&&(Fi=null,na(r,o));do try{SA();break}catch(v){Y_(r,v)}while(!0);if(Zd(),Rt=l,pc.current=f,un!==null)throw Error(t(261));return En=null,Tn=0,vn}function SA(){for(;un!==null;)Z_(un)}function EA(){for(;un!==null&&!et();)Z_(un)}function Z_(r){var o=t0(r.alternate,r,_r);r.memoizedProps=r.pendingProps,o===null?J_(r):un=o,Rh.current=null}function J_(r){var o=r;do{var l=o.alternate;if(r=o.return,(o.flags&32768)===0){if(l=pA(l,o,_r),l!==null){un=l;return}}else{if(l=mA(l,o),l!==null){l.flags&=32767,un=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vn=6,un=null;return}}if(o=o.sibling,o!==null){un=o;return}un=o=r}while(o!==null);vn===0&&(vn=5)}function ra(r,o,l){var f=kt,v=Dr.transition;try{Dr.transition=null,kt=1,wA(r,o,l,f)}finally{Dr.transition=v,kt=f}return null}function wA(r,o,l,f){do Ja();while(fo!==null);if((Rt&6)!==0)throw Error(t(327));l=r.finishedWork;var v=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var x=l.lanes|l.childLanes;if(r1(r,x),r===En&&(un=En=null,Tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||gc||(gc=!0,n0(Vt,function(){return Ja(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Dr.transition,Dr.transition=null;var A=kt;kt=1;var F=Rt;Rt|=4,Rh.current=null,gA(r,l),V_(l,r),G1(kd),Du=!!Od,kd=Od=null,r.current=l,_A(l),at(),Rt=F,kt=A,Dr.transition=x}else r.current=l;if(gc&&(gc=!1,fo=r,_c=v),x=r.pendingLanes,x===0&&(co=null),yt(l.stateNode),sr(r,Xe()),o!==null)for(f=r.onRecoverableError,l=0;l<o.length;l++)v=o[l],f(v.value,{componentStack:v.stack,digest:v.digest});if(vc)throw vc=!1,r=Dh,Dh=null,r;return(_c&1)!==0&&r.tag!==0&&Ja(),x=r.pendingLanes,(x&1)!==0?r===Ih?Ml++:(Ml=0,Ih=r):Ml=0,ao(),null}function Ja(){if(fo!==null){var r=Bv(_c),o=Dr.transition,l=kt;try{if(Dr.transition=null,kt=16>r?16:r,fo===null)var f=!1;else{if(r=fo,fo=null,_c=0,(Rt&6)!==0)throw Error(t(331));var v=Rt;for(Rt|=4,je=r.current;je!==null;){var x=je,A=x.child;if((je.flags&16)!==0){var F=x.deletions;if(F!==null){for(var z=0;z<F.length;z++){var ae=F[z];for(je=ae;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:Sl(8,Ee,x)}var Te=Ee.child;if(Te!==null)Te.return=Ee,je=Te;else for(;je!==null;){Ee=je;var Se=Ee.sibling,We=Ee.return;if(O_(Ee),Ee===ae){je=null;break}if(Se!==null){Se.return=We,je=Se;break}je=We}}}var qe=x.alternate;if(qe!==null){var Ke=qe.child;if(Ke!==null){qe.child=null;do{var sn=Ke.sibling;Ke.sibling=null,Ke=sn}while(Ke!==null)}}je=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,je=A;else e:for(;je!==null;){if(x=je,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Sl(9,x,x.return)}var K=x.sibling;if(K!==null){K.return=x.return,je=K;break e}je=x.return}}var G=r.current;for(je=G;je!==null;){A=je;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,je=te;else e:for(A=G;je!==null;){if(F=je,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:hc(9,F)}}catch(Je){on(F,F.return,Je)}if(F===A){je=null;break e}var Pe=F.sibling;if(Pe!==null){Pe.return=F.return,je=Pe;break e}je=F.return}}if(Rt=v,ao(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(tr,r)}catch{}f=!0}return f}finally{kt=l,Dr.transition=o}}return!1}function Q_(r,o,l){o=qa(l,o),o=g_(r,o,1),r=lo(r,o,1),o=Zn(),r!==null&&(qs(r,1,o),sr(r,o))}function on(r,o,l){if(r.tag===3)Q_(r,r,l);else for(;o!==null;){if(o.tag===3){Q_(o,r,l);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(co===null||!co.has(f))){r=qa(l,r),r=__(o,r,1),o=lo(o,r,1),r=Zn(),o!==null&&(qs(o,1,r),sr(o,r));break}}o=o.return}}function MA(r,o,l){var f=r.pingCache;f!==null&&f.delete(o),o=Zn(),r.pingedLanes|=r.suspendedLanes&l,En===r&&(Tn&l)===l&&(vn===4||vn===3&&(Tn&130023424)===Tn&&500>Xe()-Lh?na(r,0):Ph|=l),sr(r,o)}function e0(r,o){o===0&&((r.mode&1)===0?o=1:(o=Ki,Ki<<=1,(Ki&130023424)===0&&(Ki=4194304)));var l=Zn();r=Ii(r,o),r!==null&&(qs(r,o,l),sr(r,l))}function AA(r){var o=r.memoizedState,l=0;o!==null&&(l=o.retryLane),e0(r,l)}function TA(r,o){var l=0;switch(r.tag){case 13:var f=r.stateNode,v=r.memoizedState;v!==null&&(l=v.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),e0(r,l)}var t0;t0=function(r,o,l){if(r!==null)if(r.memoizedProps!==o.pendingProps||rr.current)or=!0;else{if((r.lanes&l)===0&&(o.flags&128)===0)return or=!1,hA(r,o,l);or=(r.flags&131072)!==0}else or=!1,Zt&&(o.flags&1048576)!==0&&Ug(o,Ku,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;fc(r,o),r=o.pendingProps;var v=Ba(o,kn.current);Xa(o,l),v=lh(null,o,f,r,v,l);var x=uh();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,ir(f)?(x=!0,ju(o)):x=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,th(o),v.updater=uc,o.stateNode=v,v._reactInternals=o,mh(o,f,r,l),o=yh(null,o,f,!0,x,l)):(o.tag=0,Zt&&x&&$d(o),Kn(null,o,v,l),o=o.child),o;case 16:f=o.elementType;e:{switch(fc(r,o),r=o.pendingProps,v=f._init,f=v(f._payload),o.type=f,v=o.tag=CA(f),r=Xr(f,r),v){case 0:o=_h(null,o,f,r,l);break e;case 1:o=b_(null,o,f,r,l);break e;case 11:o=E_(null,o,f,r,l);break e;case 14:o=w_(null,o,f,Xr(f.type,r),l);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Xr(f,v),_h(r,o,f,v,l);case 1:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Xr(f,v),b_(r,o,f,v,l);case 3:e:{if(C_(o),r===null)throw Error(t(387));f=o.pendingProps,x=o.memoizedState,v=x.element,Gg(r,o),nc(o,f,null,l);var A=o.memoizedState;if(f=A.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=x,o.memoizedState=x,o.flags&256){v=qa(Error(t(423)),o),o=R_(r,o,f,l,v);break e}else if(f!==v){v=qa(Error(t(424)),o),o=R_(r,o,f,l,v);break e}else for(gr=ro(o.stateNode.containerInfo.firstChild),vr=o,Zt=!0,$r=null,l=Hg(o,null,f,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ga(),f===v){o=Ni(r,o,l);break e}Kn(r,o,f,l)}o=o.child}return o;case 5:return Xg(o),r===null&&qd(o),f=o.type,v=o.pendingProps,x=r!==null?r.memoizedProps:null,A=v.children,zd(f,v)?A=null:x!==null&&zd(f,x)&&(o.flags|=32),T_(r,o),Kn(r,o,A,l),o.child;case 6:return r===null&&qd(o),null;case 13:return P_(r,o,l);case 4:return nh(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=Wa(o,null,f,l):Kn(r,o,f,l),o.child;case 11:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Xr(f,v),E_(r,o,f,v,l);case 7:return Kn(r,o,o.pendingProps,l),o.child;case 8:return Kn(r,o,o.pendingProps.children,l),o.child;case 12:return Kn(r,o,o.pendingProps.children,l),o.child;case 10:e:{if(f=o.type._context,v=o.pendingProps,x=o.memoizedProps,A=v.value,Gt(Qu,f._currentValue),f._currentValue=A,x!==null)if(Wr(x.value,A)){if(x.children===v.children&&!rr.current){o=Ni(r,o,l);break e}}else for(x=o.child,x!==null&&(x.return=o);x!==null;){var F=x.dependencies;if(F!==null){A=x.child;for(var z=F.firstContext;z!==null;){if(z.context===f){if(x.tag===1){z=Ui(-1,l&-l),z.tag=2;var ae=x.updateQueue;if(ae!==null){ae=ae.shared;var Ee=ae.pending;Ee===null?z.next=z:(z.next=Ee.next,Ee.next=z),ae.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),Qd(x.return,l,o),F.lanes|=l;break}z=z.next}}else if(x.tag===10)A=x.type===o.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,F=A.alternate,F!==null&&(F.lanes|=l),Qd(A,l,o),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===o){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Kn(r,o,v.children,l),o=o.child}return o;case 9:return v=o.type,f=o.pendingProps.children,Xa(o,l),v=Pr(v),f=f(v),o.flags|=1,Kn(r,o,f,l),o.child;case 14:return f=o.type,v=Xr(f,o.pendingProps),v=Xr(f.type,v),w_(r,o,f,v,l);case 15:return M_(r,o,o.type,o.pendingProps,l);case 17:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:Xr(f,v),fc(r,o),o.tag=1,ir(f)?(r=!0,ju(o)):r=!1,Xa(o,l),m_(o,f,v),mh(o,f,v,l),yh(null,o,f,!0,r,l);case 19:return D_(r,o,l);case 22:return A_(r,o,l)}throw Error(t(156,o.tag))};function n0(r,o){return fe(r,o)}function bA(r,o,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ir(r,o,l,f){return new bA(r,o,l,f)}function zh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function CA(r){if(typeof r=="function")return zh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ne)return 11;if(r===Q)return 14}return 2}function mo(r,o){var l=r.alternate;return l===null?(l=Ir(r.tag,o,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=o,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,o=r.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Ec(r,o,l,f,v,x){var A=2;if(f=r,typeof r=="function")zh(r)&&(A=1);else if(typeof r=="string")A=5;else e:switch(r){case I:return ia(l.children,v,x,o);case ce:A=8,v|=8;break;case C:return r=Ir(12,l,o,v|2),r.elementType=C,r.lanes=x,r;case pe:return r=Ir(13,l,o,v),r.elementType=pe,r.lanes=x,r;case H:return r=Ir(19,l,o,v),r.elementType=H,r.lanes=x,r;case re:return wc(l,v,x,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case O:A=10;break e;case oe:A=9;break e;case ne:A=11;break e;case Q:A=14;break e;case se:A=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=Ir(A,l,o,v),o.elementType=r,o.type=f,o.lanes=x,o}function ia(r,o,l,f){return r=Ir(7,r,f,o),r.lanes=l,r}function wc(r,o,l,f){return r=Ir(22,r,f,o),r.elementType=re,r.lanes=l,r.stateNode={isHidden:!1},r}function Bh(r,o,l){return r=Ir(6,r,null,o),r.lanes=l,r}function Hh(r,o,l){return o=Ir(4,r.children!==null?r.children:[],r.key,o),o.lanes=l,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function RA(r,o,l,f,v){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=f,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Vh(r,o,l,f,v,x,A,F,z){return r=new RA(r,o,l,F,z),o===1?(o=1,x===!0&&(o|=8)):o=0,x=Ir(3,null,null,o),r.current=x,x.stateNode=r,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(x),r}function PA(r,o,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:r,containerInfo:o,implementation:l}}function r0(r){if(!r)return oo;r=r._reactInternals;e:{if(bi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(ir(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(ir(l))return Lg(r,l,o)}return o}function i0(r,o,l,f,v,x,A,F,z){return r=Vh(l,f,!0,r,v,x,A,F,z),r.context=r0(null),l=r.current,f=Zn(),v=ho(l),x=Ui(f,v),x.callback=o??null,lo(l,x,v),r.current.lanes=v,qs(r,v,f),sr(r,f),r}function Mc(r,o,l,f){var v=o.current,x=Zn(),A=ho(v);return l=r0(l),o.context===null?o.context=l:o.pendingContext=l,o=Ui(x,A),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=lo(v,o,A),r!==null&&(Yr(r,v,A,x),tc(r,v,A)),A}function Ac(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function o0(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<o?l:o}}function Gh(r,o){o0(r,o),(r=r.alternate)&&o0(r,o)}function LA(){return null}var a0=typeof reportError=="function"?reportError:function(r){console.error(r)};function Wh(r){this._internalRoot=r}Tc.prototype.render=Wh.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));Mc(r,o,null,null)},Tc.prototype.unmount=Wh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;ta(function(){Mc(null,r,null,null)}),o[Ri]=null}};function Tc(r){this._internalRoot=r}Tc.prototype.unstable_scheduleHydration=function(r){if(r){var o=Gv();r={blockedOn:null,target:r,priority:o};for(var l=0;l<eo.length&&o!==0&&o<eo[l].priority;l++);eo.splice(l,0,r),l===0&&Xv(r)}};function $h(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function bc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function s0(){}function DA(r,o,l,f,v){if(v){if(typeof f=="function"){var x=f;f=function(){var ae=Ac(A);x.call(ae)}}var A=i0(o,f,r,0,null,!1,!1,"",s0);return r._reactRootContainer=A,r[Ri]=A.current,ll(r.nodeType===8?r.parentNode:r),ta(),A}for(;v=r.lastChild;)r.removeChild(v);if(typeof f=="function"){var F=f;f=function(){var ae=Ac(z);F.call(ae)}}var z=Vh(r,0,!1,null,null,!1,!1,"",s0);return r._reactRootContainer=z,r[Ri]=z.current,ll(r.nodeType===8?r.parentNode:r),ta(function(){Mc(o,z,l,f)}),z}function Cc(r,o,l,f,v){var x=l._reactRootContainer;if(x){var A=x;if(typeof v=="function"){var F=v;v=function(){var z=Ac(A);F.call(z)}}Mc(o,A,r,v)}else A=DA(l,o,r,v,f);return Ac(A)}Hv=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var l=rn(o.pendingLanes);l!==0&&(md(o,l|1),sr(o,Xe()),(Rt&6)===0&&(Za=Xe()+500,ao()))}break;case 13:ta(function(){var f=Ii(r,1);if(f!==null){var v=Zn();Yr(f,r,1,v)}}),Gh(r,1)}},vd=function(r){if(r.tag===13){var o=Ii(r,134217728);if(o!==null){var l=Zn();Yr(o,r,134217728,l)}Gh(r,134217728)}},Vv=function(r){if(r.tag===13){var o=ho(r),l=Ii(r,o);if(l!==null){var f=Zn();Yr(l,r,o,f)}Gh(r,o)}},Gv=function(){return kt},Wv=function(r,o){var l=kt;try{return kt=r,o()}finally{kt=l}},_t=function(r,o,l){switch(o){case"input":if(xe(r,l),o=l.name,l.type==="radio"&&o!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var f=l[o];if(f!==r&&f.form===r.form){var v=$u(f);if(!v)throw Error(t(90));j(f),xe(f,v)}}}break;case"textarea":T(r,l);break;case"select":o=l.value,o!=null&&Ie(r,!!l.multiple,o,!1)}},ot=Fh,wt=ta;var IA={usingClientEntryPoint:!1,Events:[fl,ka,$u,me,Ue,Fh]},Al={findFiberByHostInstance:jo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},UA={bundleType:Al.bundleType,version:Al.version,rendererPackageName:Al.rendererPackageName,rendererConfig:Al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=de(r),r===null?null:r.stateNode},findFiberByHostInstance:Al.findFiberByHostInstance||LA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{tr=Rc.inject(UA),bt=Rc}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IA,lr.createPortal=function(r,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$h(o))throw Error(t(200));return PA(r,o,null,l)},lr.createRoot=function(r,o){if(!$h(r))throw Error(t(299));var l=!1,f="",v=a0;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=Vh(r,1,!1,null,null,l,!1,f,v),r[Ri]=o.current,ll(r.nodeType===8?r.parentNode:r),new Wh(o)},lr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=de(o),r=r===null?null:r.stateNode,r},lr.flushSync=function(r){return ta(r)},lr.hydrate=function(r,o,l){if(!bc(o))throw Error(t(200));return Cc(null,r,o,!0,l)},lr.hydrateRoot=function(r,o,l){if(!$h(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,v=!1,x="",A=a0;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),o=i0(o,null,r,1,l??null,v,!1,x,A),r[Ri]=o.current,ll(r),f)for(r=0;r<f.length;r++)l=f[r],v=l._getVersion,v=v(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,v]:o.mutableSourceEagerHydrationData.push(l,v);return new Tc(o)},lr.render=function(r,o,l){if(!bc(o))throw Error(t(200));return Cc(null,r,o,!1,l)},lr.unmountComponentAtNode=function(r){if(!bc(r))throw Error(t(40));return r._reactRootContainer?(ta(function(){Cc(null,null,r,!1,function(){r._reactRootContainer=null,r[Ri]=null})}),!0):!1},lr.unstable_batchedUpdates=Fh,lr.unstable_renderSubtreeIntoContainer=function(r,o,l,f){if(!bc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Cc(r,o,l,!1,f)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var m0;function Wx(){if(m0)return qh.exports;m0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),qh.exports=VA(),qh.exports}var v0;function GA(){if(v0)return Pc;v0=1;var n=Wx();return Pc.createRoot=n.createRoot,Pc.hydrateRoot=n.hydrateRoot,Pc}var WA=GA();const $A=Gx(WA);var ke=Um();const Mo=Gx(ke),Xp=FA({__proto__:null,default:Mo},[ke]),XA=()=>window.location.search;var $x={compose:function(n){return function(e){return function(t){return n(e(t))}}}},Xx=function(n){return n.compose},Mr=function(n){return n.identity},Ar={identity:function(n){return n}},jA=function(n){return function(e){return function(t){return function(i){return n(e(t))(e(i))}}}},xi=function(n){return function(e){return function(t){return n(t)(e)}}},Nt=function(n){return function(e){return n}};const qA=function(n){return function(e){for(var t=e.length,i=new Array(t),a=0;a<t;a++)i[a]=n(e[a]);return i}},gn=void 0;var Mt=(function(){function n(){}return n.value=new n,n})(),Ot=function(n){return n.map},YA=function(n){var e=Ot(n);return function(t){return function(i){return e(i)(t)}}},jx=function(n){return Ot(n)(Nt(gn))},qx={map:Xx($x)},au={map:qA},Os=function(n){return n.apply},At=function(n){return n.pure},Yx=function(n){var e=At(n);return function(t){return function(i){if(t)return i;if(!t)return e(gn);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,i.constructor.name])}}},KA=function(n){var e=Os(n.Apply0()),t=At(n);return function(i){return function(a){return e(t(i))(a)}}};const ZA=typeof Array.prototype.flatMap=="function"?function(n){return function(e){return n.flatMap(e)}}:function(n){return function(e){for(var t=[],i=n.length,a=0;a<i;a++)for(var s=e(n[a]),c=s.length,u=0;u<c;u++)t.push(s[u]);return t}};var zf=function(n){return n.discard},JA={bind:ZA},hn=function(n){return n.bind},Bf=function(n){return xi(hn(n))},Kx=function(n){var e=Bf(n);return function(t){return function(i){return function(a){return e(t)(i(a))}}}},QA=function(n){var e=hn(n);return function(t){return function(i){return function(a){return e(t(a))(i)}}}},Hf={discard:function(n){return hn(n)}};const eT=function(n){return function(e){return n.length===0?e:e.length===0?n:n.concat(e)}};var Vr=function(n){return n.reflectSymbol};const Nm=function(n){return function(e){return e[n]}},Fm=function(n){return function(e){return function(t){var i={};for(var a in t)({}).hasOwnProperty.call(t,a)&&(i[a]=t[a]);return i[n]=e,i}}},tT=function(n){return function(e){var t={};for(var i in e)i!==n&&{}.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}};var su={append:eT},Gr=function(n){return n.append},nT=function(n){var e=Gr(n);return{append:function(t){return function(i){return function(a){return e(t(a))(i(a))}}}}},rT=function(n){return n.alt};const iT=2147483647,oT=-2147483648,aT="￿",sT="\0";var lT=function(n){return function(e){return function(t){return function(i){return function(a){return i<a?n:i===a?e:t}}}}};const uT=lT;var Om=function(n){return function(e){return n===e}};const cT=Om,fT=Om,dT=Om,hT=function(n){return function(e){return function(t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!n(e[i])(t[i]))return!1;return!0}}};var _a={eq:dT},pT={eqRecord:function(n){return function(e){return function(t){return!0}}}},Zx=function(n){return n.eqRecord},mT=function(){return function(n){return{eq:Zx(n)(Mt.value)}}},vT={eq:fT},gT={eq:cT},Ai=function(n){return n.eq},_T=Ai(gT),jp=function(n){return{eq:hT(Ai(n))}},mf=function(n){var e=Zx(n);return function(){return function(t){var i=Vr(t);return function(a){var s=Ai(a);return{eqRecord:function(c){return function(u){return function(d){var h=e(Mt.value)(u)(d),p=i(Mt.value),m=Nm(p);return s(m(u))(m(d))&&h}}}}}}}},Jx=function(n){var e=Ai(n);return function(t){return function(i){return _T(e(t)(i))(!1)}}},wf=(function(){function n(){}return n.value=new n,n})(),Mf=(function(){function n(){}return n.value=new n,n})(),Kl=(function(){function n(){}return n.value=new n,n})(),yT={eq:function(n){return function(e){return n instanceof wf&&e instanceof wf||n instanceof Mf&&e instanceof Mf||n instanceof Kl&&e instanceof Kl}}},Qx=(function(){return{compare:uT(wf.value)(Kl.value)(Mf.value),Eq0:function(){return vT}}})(),xT=function(n){return n.compare},km=function(n){return n.top},eS={top:iT,bottom:oT},Zl={top:aT,bottom:sT,Ord0:function(){return Qx}},Vf=function(n){return n.bottom};const ST=function(n){return n.toString()},ET=function(n){var e=n.length;return'"'+n.replace(/[\0-\x1F\x7F"\\]/g,function(t,i){switch(t){case'"':case"\\":return"\\"+t;case"\x07":return"\\a";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v"}var a=i+1,s=a<e&&n[a]>="0"&&n[a]<="9"?"\\&":"";return"\\"+t.charCodeAt(0).toString(10)+s})+'"'};var wT={show:ET},zm={show:ST},Aa=function(n){return n.show},Yt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ne=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ur=(function(){function n(){}return n.value=new n,n})(),MT=function(n){return n},AT=function(n){return n},tS=function(n){return n.to},Bm=function(n){return n.from},TT=Mr(Ar),Ct=(function(){function n(){}return n.value=new n,n})(),gt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ta=function(n){return function(e){return function(t){if(t instanceof Ct)return n;if(t instanceof gt)return e(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},bT=Ta(!0)(Nt(!1)),lu={map:function(n){return function(e){return e instanceof gt?new gt(n(e.value0)):Ct.value}}},CT=Ot(lu),nS=function(n){return Ta(n)(TT)},RT=function(){return function(n){if(n instanceof gt)return n.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[n.constructor.name])}},rS={apply:function(n){return function(e){if(n instanceof gt)return CT(n.value0)(e);if(n instanceof Ct)return Ct.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return lu}},iS={bind:function(n){return function(e){if(n instanceof gt)return e(n.value0);if(n instanceof Ct)return Ct.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,e.constructor.name])}}},PT=(function(){return{pure:gt.create,Apply0:function(){return rS}}})(),ct=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ts=function(n){return Ta(new ct(n))(mt.create)},ba={map:function(n){return function(e){if(e instanceof ct)return new ct(e.value0);if(e instanceof mt)return new mt(n(e.value0));throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},LT=Ot(ba),uu=function(n){return function(e){return function(t){if(t instanceof ct)return n(t.value0);if(t instanceof mt)return e(t.value0);throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},oS={apply:function(n){return function(e){if(n instanceof ct)return new ct(n.value0);if(n instanceof mt)return LT(n.value0)(e);throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return ba}},cu={bind:uu(function(n){return function(e){return new ct(n)}})(function(n){return function(e){return e(n)}}),Apply0:function(){return oS}},Ca=(function(){return{pure:mt.create,Apply0:function(){return oS}}})();const DT=function(n){return function(){return n}},IT=function(n){return function(e){return function(){return e(n())()}}};var Hm=function(n){var e=hn(n.Bind1()),t=At(n.Applicative0());return function(i){return function(a){return e(i)(function(s){return e(a)(function(c){return t(s(c))})})}}};const UT=function(n){return function(e){return e===0?0:e>0?Math.floor(n/e):-Math.floor(n/-e)}},NT=function(n){return function(e){if(e===0)return 0;var t=Math.abs(e);return(n%t+t)%t}};var FT=function(n){return n.mod},aS={div:UT,mod:NT},OT=function(n){return n.div},sS={mempty:[],Semigroup0:function(){return su}},ks=function(n){return n.mempty},kT=function(n){var e=ks(n),t=nT(n.Semigroup0());return{mempty:function(i){return e},Semigroup0:function(){return t}}},lS=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},zT={Applicative0:function(){return fu},Bind1:function(){return BT}},BT={bind:IT,Apply0:function(){return cS(0)}},fu={pure:DT,Apply0:function(){return cS(0)}},uS=lS("functorEffect","Effect",function(){return{map:KA(fu)}}),cS=lS("applyEffect","Effect",function(){return{apply:Hm(zT),Functor0:function(){return uS(0)}}}),fS=uS(20);function HT(n){return new Error(n)}function dS(n){return n.message}var Gf=function(n){return n.throwError},Vm=function(n){return n.catchError},hS=function(n){var e=Vm(n),t=n.MonadThrow0().Monad0(),i=Ot(t.Bind1().Apply0().Functor0()),a=At(t.Applicative0());return function(s){return e(i(mt.create)(s))(function(c){return a(ct.create(c))})}},VT=function(n){return n},GT={map:function(n){return function(e){return n(e)}}},pS={apply:function(n){return function(e){return n(e)}},Functor0:function(){return GT}},mS={bind:function(n){return function(e){return e(n)}},Apply0:function(){return pS}},vS={pure:VT,Apply0:function(){return pS}},Ho={Applicative0:function(){return vS},Bind1:function(){return mS}};const du=function(n){return n},WT=function(n){return function(e){return function(){return n(e())}}},$T=function(n){return function(e){return function(){for(var t=0,i=n.length;t<i;t++)e(n[t])()}}};var XT={map:WT};const jT=function(n){return function(e){return n&&e}},qT=function(n){return function(e){return n||e}},YT=function(n){return!n};var KT=function(n){return n.not},ZT=function(n){return n.ff},gS=function(n){return n.disj},qp={ff:!1,tt:!0,implies:function(n){return function(e){return gS(qp)(KT(qp)(n))(e)}},conj:jT,disj:qT,not:YT},Wt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),JT=function(n){return n.value1},Gm={map:function(n){return function(e){return new Wt(e.value0,n(e.value1))}}},_S=function(n){return n.value0},QT=function(n){var e=Gr(n);return{apply:function(t){return function(i){return new Wt(e(t.value0)(i.value0),t.value1(i.value1))}},Functor0:function(){return Gm}}},eb=function(n){var e=QT(n.Semigroup0());return{pure:Wt.create(ks(n)),Apply0:function(){return e}}},yS=function(n){return n.lift},tb=function(n){return n.tell},nb={liftEffect:Mr(Ar)},hu=function(n){return n.liftEffect},rb=Ot(ba),xS=function(n){return n},Wm=function(n){return n},SS={lift:function(n){var e=hn(n.Bind1()),t=At(n.Applicative0());return function(i){return e(i)(function(a){return t(new mt(a))})}}},ib=yS(SS),ob=function(n){return function(e){return n(e)}},ES=function(n){var e=Ot(n);return{map:function(t){return ob(e(rb(t)))}}},$m=function(n){return{Applicative0:function(){return Vo(n)},Bind1:function(){return pu(n)}}},pu=function(n){var e=hn(n.Bind1()),t=At(n.Applicative0());return{bind:function(i){return function(a){return e(i)(uu(function(s){return t(ct.create(s))})(function(s){var c=a(s);return c}))}},Apply0:function(){return wS(n)}}},wS=function(n){var e=ES(n.Bind1().Apply0().Functor0());return{apply:Hm($m(n)),Functor0:function(){return e}}},Vo=function(n){return{pure:(function(){var e=At(n.Applicative0());return function(t){return xS(e(mt.create(t)))}})(),Apply0:function(){return wS(n)}}},Xm=function(n){var e=n.Monad0(),t=$m(e);return{liftEffect:(function(){var i=ib(e),a=hu(n);return function(s){return i(a(s))}})(),Monad0:function(){return t}}},jm=function(n){var e=$m(n);return{throwError:(function(){var t=At(n.Applicative0());return function(i){return xS(t(ct.create(i)))}})(),Monad0:function(){return e}}},qm=function(n){var e=hn(n.Bind1()),t=At(n.Applicative0()),i=jm(n);return{catchError:function(a){return function(s){return e(a)(uu(function(c){var u=s(c);return u})(function(c){return t(mt.create(c))}))}},MonadThrow0:function(){return i}}},ab=function(n){var e=Gr(n);return function(t){var i=t.Bind1(),a=hn(i),s=At(t.Applicative0()),c=ES(i.Apply0().Functor0());return{alt:function(u){return function(d){return a(u)(function(h){if(h instanceof mt)return s(new mt(h.value0));if(h instanceof ct)return a(d)(function(p){if(p instanceof mt)return s(new mt(p.value0));if(p instanceof ct)return s(new ct(e(h.value0)(p.value0)));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): "+[p.constructor.name])});throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): "+[h.constructor.name])})}},Functor0:function(){return c}}}},MS=function(){return du},Ym=MS(),sb=function(){return Ym},mu=function(){return Ym},lb=function(){return function(){return function(){return function(){return function(n){return Ym}}}}},ub=mu(),Km=function(n){return ub(Wm(n))},cb=function(n){return n.empty},fb=function(n){return n},db=function(n){return n},hb=function(n){return function(e){return n(e)}},pb=function(n){var e=Ot(n);return{map:function(t){return hb(e(function(i){return new Wt(t(i.value0),i.value1)}))}}},AS=function(n){var e=Gr(n);return function(t){var i=Os(t),a=t.Functor0(),s=Ot(a),c=pb(a);return{apply:function(u){return function(d){var h=function(p){return function(m){return new Wt(p.value0(m.value0),e(p.value1)(m.value1))}};return i(s(h)(u))(d)}},Functor0:function(){return c}}}},TS=function(n){var e=Gr(n),t=AS(n);return function(i){var a=hn(i),s=i.Apply0(),c=Ot(s.Functor0()),u=t(s);return{bind:function(d){return function(h){return a(d)(function(p){var m=h(p.value0);return c(function(g){return new Wt(g.value0,e(p.value1)(g.value1))})(m)})}},Apply0:function(){return u}}}},bS=function(n){var e=ks(n),t=AS(n.Semigroup0());return function(i){var a=At(i),s=t(i.Apply0());return{pure:function(c){return a(new Wt(c,e))},Apply0:function(){return s}}}},mb=function(n){var e=bS(n),t=TS(n.Semigroup0());return function(i){var a=e(i.Applicative0()),s=t(i.Bind1());return{Applicative0:function(){return a},Bind1:function(){return s}}}},vb=function(n){var e=n.Semigroup0(),t=mb(n);return function(i){var a=t(i);return{tell:(function(){var s=At(i.Applicative0()),c=Wt.create(gn);return function(u){return fb(s(c(u)))}})(),Semigroup0:function(){return e},Monad1:function(){return a}}}},gb=mu(),_b=function(n){return gb(db(n))},yb=Mr(Ar),xb=function(n){return n.bimap},CS=function(n){var e=xb(n);return function(t){return e(t)(yb)}},RS={bimap:function(n){return function(e){return function(t){if(t instanceof ct)return new ct(n(t.value0));if(t instanceof mt)return new mt(e(t.value0));throw new Error("Failed pattern match at Data.Bifunctor (line 38, column 1 - line 40, column 36): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}}},Sb=Ot(Gm),Wf=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),PS=function(n){var e=Ot(n);return{dimap:function(t){return function(i){return function(a){return new Wf((function(){var s=e(i);return function(c){return s(a.value0(c))}})(),(function(){var s=Sb(i);return function(c){return s(a.value1(t(c)))}})())}}}}},Jt=function(n){return function(e){return _S(n.value1(e))}},Nn=function(n){return n.value0},$f=function(n){return function(e){return new Wf(n,function(t){return new Wt(e(t),t)})}},Eb=function(n){return function(e){return new Wf(n,function(t){return new Wt(e(t),t)})}};function Zm(n){return n}function LS(n){return JSON.stringify(n)}function Zh(n){return Object.prototype.toString.call(n)==="[object Array]"}function Xf(n,e,t,i,a,s,c){return c==null?n():typeof c=="boolean"?e(c):typeof c=="number"?t(c):typeof c=="string"?i(c):Object.prototype.toString.call(c)==="[object Array]"?a(c):s(c)}function Yp(n,e,t,i,a){if(i==null)return a==null?n:t;if(typeof i=="boolean")return typeof a=="boolean"?i===a?n:i===!1?t:e:a==null?e:t;if(typeof i=="number")return typeof a=="number"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"?e:t;if(typeof i=="string")return typeof a=="string"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"||typeof a=="number"?e:t;if(Zh(i))if(Zh(a)){for(var s=0;s<Math.min(i.length,a.length);s++){var c=Yp(n,e,t,i[s],a[s]);if(c!==n)return c}return i.length===a.length?n:i.length<a.length?t:e}else return a==null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"?e:t;else{if(a==null)return e;if(typeof a=="boolean")return e;if(typeof a=="number")return e;if(typeof a=="string")return e;if(Zh(a))return e;var u=Object.keys(i),d=Object.keys(a);if(u.length<d.length)return t;if(u.length>d.length)return e;for(var h=u.concat(d).sort(),p=0;p<h.length;p++){var m=h[p];if(i[m]===void 0)return t;if(a[m]===void 0)return e;var g=Yp(n,e,t,i[m],a[m]);if(g!==n)return g}return n}}const wb={};function Mb(n){return n()}function Ab(n,e,t,i){return t in i?e(i[t]):n}const Tb=(function(){function n(a,s){this.head=a,this.tail=s}var e={};function t(a){return function(s){return new n(a,s)}}function i(a){for(var s=[],c=0,u=a;u!==e;)s[c++]=u.head,u=u.tail;return s}return function(a,s){return i(a(t)(e)(s))}})(),DS=function(n){return n.length},bb=function(n,e,t,i){return i<0||i>=t.length?e:n(t[i])},Cb=function(n,e,t){return t.slice(n,e)};function Rb(n){return n}const Pb=Rb;function Lb(n){return n.slice()}const Db=Lb,Ib=function(n,e){return e.push(n)},IS=function(e){return function(t){return function(){return e(t)}}},Ub=function(e){return function(t){return function(i){return function(){return e(t,i)}}}};var Nb=IS(Pb),Fb=IS(Db),Ob=function(n){return function(e){return function(){var i=Fb(e)();return n(i)(),Nb(i)()}}},kb=Ub(Ib);const zb=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=a-1;s>=0;s--)i=n(t[s])(i);return i}}},Bb=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=0;s<a;s++)i=n(i)(t[s]);return i}}};var Hb={append:function(n){return function(e){return n instanceof gt?n:e}}},Vb=(function(){return{mempty:Ct.value,Semigroup0:function(){return Hb}}})(),Gb=function(n){return n},Wb=function(n){var e=gS(n);return{append:function(t){return function(i){return e(t)(i)}}}},$b=function(n){var e=Wb(n);return{mempty:ZT(n),Semigroup0:function(){return e}}},Xb=mu(),jb=lb()()()(),jf=function(n){return n.foldr},Jm=function(n){return n.foldl},qb=function(n){var e=jf(n);return function(t){var i=Gr(t.Semigroup0()),a=ks(t);return function(s){return e(function(c){return function(u){return i(s(c))(u)}})(a)}}},ji={foldr:zb,foldl:Bb,foldMap:function(n){return qb(ji)(n)}},US=function(n){return n.foldMap},Yb=function(n){var e=US(n)(Vb);return function(t){var i=Ai(t);return function(a){var s=e(function(c){var u=i(a)(c.value0);return u?new gt(c.value1):Ct.value});return function(c){return Xb(s(c))}}}},Kb=function(n){var e=US(n);return function(t){return jb(Gb)(e($b(t)))}};const Zb=function(n){return function(e){return function(t){return n(e,t)}}},Qm=function(n){return function(e){return function(t){return function(i){return n(e,t,i)}}}},NS=function(n){return function(e){return function(t){return function(i){return function(a){return n(e,t,i,a)}}}}},Jb=function(n){return function(e){for(var t=e.length,i=Array(t),a=0;a<t;a++)i[a]=n(a)(e[a]);return i}};var FS=function(n){return n.mapWithIndex},OS={mapWithIndex:Jb,Functor0:function(){return au}};const Qb=(function(){function n(a){return[a]}function e(a){return function(s){return[a,s]}}function t(a){return function(s){return function(c){return[a,s,c]}}}function i(a){return function(s){return a.concat(s)}}return function(a){return function(s){return function(c){return function(u){return function(d){function h(p,m){switch(m-p){case 0:return c([]);case 1:return s(n)(u(d[p]));case 2:return a(s(e)(u(d[p])))(u(d[p+1]));case 3:return a(a(s(t)(u(d[p])))(u(d[p+1])))(u(d[p+2]));default:var g=p+Math.floor((m-p)/4)*2;return a(s(i)(h(p,g)))(h(g,m))}}return h(0,d.length)}}}}}})();var eC=Mr(Ar),ev=function(n){return n.traverse},tC=function(n){var e=ev(n);return function(t){return e(t)(eC)}},qf={traverse:function(n){var e=n.Apply0();return Qb(Os(e))(Ot(e.Functor0()))(At(n))},sequence:function(n){return tC(qf)(n)},Functor0:function(){return au},Foldable1:function(){return ji}},nC=function(n){return n.sequence};const rC=function(n){return function(e){return function(t){return function(i){return function(a){return function(s){for(var c=[],u=s;;){var d=a(u);if(n(d))return c;var h=e(d);c.push(t(h)),u=i(h)}}}}}}};var iC=RT(),oC=function(n){return n.unfoldr},aC={unfoldr:rC(bT)(iC)(_S)(JT)},sC=Gr(su),lC=function(n){return function(e){return Ob(kb(e))(n)()}},uC=Qm(Cb),cC=function(n){return[n]},fC=(function(){return NS(bb)(gt.create)(Ct.value)})(),dC=function(n){return fC(n)(0)},hC=function(n){return Zb(Tb)(jf(n))},pC=function(n){return function(e){return uC(n)(DS(e))(e)}},mC=function(n){return function(e){return sC([n])(e)}},vC=xi(hn(JA)),gC=function(n){return vC((function(){var e=Ta([])(cC);return function(t){return e(n(t))}})())},_C=gC(Mr(Ar)),yC=jf(ji),g0=FS(OS),xC=Jm(ji),SC=function(n){return n.foldrWithIndex},EC=function(n){var e=SC(n);return function(t){var i=Gr(t.Semigroup0()),a=ks(t);return function(s){return e(function(c){return function(u){return function(d){return i(s(c)(u))(d)}}})(a)}}},kS={foldrWithIndex:function(n){return function(e){var t=yC(function(a){return function(s){return n(a.value0)(a.value1)(s)}})(e),i=g0(Wt.create);return function(a){return t(i(a))}}},foldlWithIndex:function(n){return function(e){var t=xC(function(a){return function(s){return n(s.value0)(a)(s.value1)}})(e),i=g0(Wt.create);return function(a){return t(i(a))}}},foldMapWithIndex:function(n){return EC(kS)(n)},Foldable0:function(){return ji}},wC=function(n){var e=nC(n.Traversable2()),t=FS(n.FunctorWithIndex0());return function(i){var a=e(i);return function(s){var c=t(s);return function(u){return a(c(u))}}}},MC=function(n){return n.traverseWithIndex},zS={traverseWithIndex:function(n){return wC(zS)(n)},FunctorWithIndex0:function(){return OS},FoldableWithIndex1:function(){return kS},Traversable2:function(){return qf}};const AC=function(){return{}};function TC(n){return function(e){return function(t){return function(){return t[n]=e,t}}}}var bC=jx(XT),bs=(function(){return NS(Ab)(Ct.value)(gt.create)})(),BS=function(n){var e=hC(n);return function(t){return Mb(function(){var a=AC();return $T(e(t))(function(s){return bC(TC(s.value0)(s.value1)(a))})(),a})}},CC=Ai(yT),RC=function(n){return function(e){return function(t){return t(n)(e)}}},Yf=(function(){return RC(Ct.value)(gt.create)})(),PC=wb,LC={compare:function(n){return function(e){return Yp(Kl.value,Mf.value,wf.value,n,e)}}},DC={eq:function(n){return function(e){return CC(xT(LC)(n)(e))(Kl.value)}}},IC=function(n){return function(e){return function(t){return Xf(Nt(n),Nt(n),Nt(n),e,Nt(n),Nt(n),t)}}},UC=Yf(IC),NC=function(n){return function(e){return function(t){return Xf(Nt(n),Nt(n),Nt(n),Nt(n),Nt(n),e,t)}}},FC=Yf(NC),OC=function(n){return function(e){return function(t){return Xf(Nt(n),Nt(n),e,Nt(n),Nt(n),Nt(n),t)}}},kC=Yf(OC),zC=function(n){return function(e){return function(t){return Xf(Nt(n),Nt(n),Nt(n),Nt(n),e,Nt(n),t)}}},BC=Yf(zC);const HC=function(n){return function(e){return function(t){return(t|0)===t?n(t):e}}},In=function(n){return n},VC=isFinite,GC=Math.trunc?Math.trunc:function(n){return n<0?Math.ceil(n):Math.floor(n)};var _0=km(eS),y0=Vf(eS),HS=(function(){return HC(gt.create)(Ct.value)})(),WC=function(n){return VC(n)?n>=In(_0)?_0:n<=In(y0)?y0:nS(0)(HS(n)):0},Kf=function(n){return WC(GC(n))},VS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),$C=function(n){var e=cb(n);return function(t){return new VS(t,e)}},ei=(function(){function n(){}return n.value=new n,n})(),tn=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),XC=function(n){return n},jC=function(n){return new tn(n.value0,n.value1)},qC=function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof tn&&h.value1 instanceof tn&&h.value1.value1 instanceof tn){a=new tn(h,d),i=h.value1.value1.value1;return}var p=function(g){return g instanceof tn&&g.value1 instanceof tn&&g.value1.value1 instanceof ei?new tn(n(g.value0),new tn(n(g.value1.value0),ei.value)):g instanceof tn&&g.value1 instanceof ei?new tn(n(g.value0),ei.value):ei.value},m=function(g){return function(S){var w=g,E=!1,y;function _(b,M){if(b instanceof tn&&b.value0 instanceof tn&&b.value0.value1 instanceof tn&&b.value0.value1.value1 instanceof tn){w=b.value1,S=new tn(n(b.value0.value0),new tn(n(b.value0.value1.value0),new tn(n(b.value0.value1.value1.value0),M)));return}return E=!0,M}for(;!E;)y=_(w,S);return y}};return s=!0,m(d)(p(h))}for(;!s;)c=u(a,i);return c}};return e(ei.value)},YC={map:qC},tv={foldr:function(n){return function(e){var t=(function(){var a=function(s){return function(c){var u=s,d=!1,h;function p(m,g){if(g instanceof ei)return d=!0,m;if(g instanceof tn){u=new tn(g.value0,m),c=g.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[m.constructor.name,g.constructor.name])}for(;!d;)h=p(u,c);return h}};return a(ei.value)})(),i=Jm(tv)(xi(n))(e);return function(a){return i(t(a))}}},foldl:function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof ei)return s=!0,d;if(h instanceof tn){a=n(d)(h.value0),i=h.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}},KC=jf(tv),GS={append:function(n){return function(e){return KC(tn.create)(e)(n)}}},WS=Gr(GS),ZC=(function(){return{mempty:ei.value,Semigroup0:function(){return GS}}})(),JC={append:function(n){return function(e){return new VS(n.value0,WS(n.value1)(jC(e)))}}},QC={alt:WS,Functor0:function(){return YC}},eR=(function(){return{empty:ei.value,Alt0:function(){return QC}}})(),tR=typeof Array.from=="function",nR=typeof Symbol<"u"&&Symbol!=null&&typeof Symbol.iterator<"u"&&typeof String.prototype[Symbol.iterator]=="function",rR=typeof String.prototype.fromCodePoint=="function",iR=typeof String.prototype.codePointAt=="function";const oR=function(n){return iR?function(e){return e.codePointAt(0)}:n},aR=function(n){return rR?String.fromCodePoint:n},sR=function(n){return function(e){return nR?function(t){for(var i="",a=t[Symbol.iterator](),s=0;s<e;++s){var c=a.next();if(c.done)return i;i+=c.value}return i}:n(e)}},lR=function(n){return function(e){return tR?function(t){return Array.from(t,e)}:n}};function ya(n){return n.charCodeAt(0)}function uR(n){return String.fromCharCode(n)}var $S=Vf(Zl),XS=km(Zl),cR=function(n){return n.toEnum},jS=function(n){return n.fromEnum},fR=function(n){var e=cR(n),t=jS(n),i=Vf(n.Bounded0());return function(a){return function(s){return function(c){var u=e(c);if(u instanceof gt)return u.value0;if(u instanceof Ct){var d=c<t(i);return d?a:s}throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): "+[u.constructor.name])}}}},dR=function(n){return function(e){return function(t){return n(e(t)+1|0)}}},hR=function(n){return function(e){return function(t){return n(e(t)-1|0)}}},Kp=function(n){return n>=ya($S)&&n<=ya(XS)?new gt(uR(n)):Ct.value},pR={succ:dR(Kp)(ya),pred:hR(Kp)(ya),Ord0:function(){return Qx}},qS=(function(){return{cardinality:ya(XS)-ya($S)|0,toEnum:Kp,fromEnum:ya,Bounded0:function(){return Zl},Enum1:function(){return pR}}})();const mR=function(n){return n},nv=function(n){return n.length},vR=function(n){return function(e){return function(t){return function(i){var a=i.indexOf(t);return a===-1?e:n(a)}}}},gR=function(n){return function(e){return function(t){return function(i){var a=i.lastIndexOf(t);return a===-1?e:n(a)}}}},YS=function(n){return function(e){return e.substr(0,n)}},Zp=function(n){return function(e){return e.substring(n)}},Hl=function(n){return function(e){if(n>=0&&n<e.length)return e.charAt(n);throw new Error("Data.String.Unsafe.charAt: Invalid index.")}};var _R=(function(){return gR(gt.create)(Ct.value)})(),yR=(function(){return vR(gt.create)(Ct.value)})();const KS=function(n){return function(e){return e.split(n)}},xR=function(n){return function(e){return e.join(n)}};var Vl=jS(qS),ZS=Ot(lu),SR=oC(aC),ER=OT(aS),wR=FT(aS),JS=function(n){return function(e){return(((n-55296|0)*1024|0)+(e-56320|0)|0)+65536|0}},QS=function(n){return 56320<=n&&n<=57343},eE=function(n){return 55296<=n&&n<=56319},tE=function(n){var e=nv(n);if(e===0)return Ct.value;if(e===1)return new gt({head:Vl(Hl(0)(n)),tail:""});var t=Vl(Hl(1)(n)),i=Vl(Hl(0)(n)),a=eE(i)&&QS(t);return a?new gt({head:JS(i)(t),tail:Zp(2)(n)}):new gt({head:i,tail:Zp(1)(n)})},MR=function(n){return ZS(function(e){return new Wt(e.head,e.tail)})(tE(n))},AR=function(n){return SR(MR)(n)},TR=function(n){var e=Vl(Hl(0)(n)),t=eE(e)&&nv(n)>1;if(t){var i=Vl(Hl(1)(n)),a=QS(i);return a?JS(e)(i):e}return e},bR=oR(TR),CR=lR(AR)(bR),RR=function(n){return DS(CR(n))},PR=function(n){return function(e){return ZS(function(t){return RR(YS(t)(e))})(_R(n)(e))}},Jh=(function(){var n=fR(qS)(Vf(Zl))(km(Zl));return function(e){return mR(n(e))}})(),LR=function(n){if(n<=65535)return Jh(n);var e=ER(n-65536|0)(1024)+55296|0,t=wR(n-65536|0)(1024)+56320|0;return Jh(e)+Jh(t)},DR=aR(LR),nE=function(n){return function(e){if(n<1)return"";var t=tE(e);return t instanceof gt?DR(t.value0.head)+nE(n-1|0)(t.value0.tail):e}},IR=sR(nE),UR=Aa(zm),x0=hn(cu),rv=CS(RS),iv=At(Ca),rE=Bf(cu),NR=BS(tv),FR=Kx(iS),OR=MC(zS)(Ca),kR=Ot(au),Si=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),zR=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),iE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),oE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),ov=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),aE=(function(){function n(){}return n.value=new n,n})(),BR=function(n){var e=Vr(n);return function(){return function(t){return function(i){return function(a){var s=function(d){return function(h){return new tn(new Wt(d,Jt(i)(Nm(d)(h))),Jt(a)(h))}},c=function(d){return function(h){return x0(Nn(a)(h))(function(p){return x0(rv(oE.create(d))((function(){var m=bs(d)(h);if(m instanceof gt)return Nn(i)(m.value0);if(m instanceof Ct)return new ct(aE.value);throw new Error("Failed pattern match at Data.Codec.Argonaut (line 264, column 29 - line 266, column 34): "+[m.constructor.name])})()))(function(m){return iv(Fm(d)(m)(p))})})}},u=e(t);return Eb(c(u))(s(u))}}}}},HR=(function(){return new Wf(Nt(iv({})),At(eb(ZC)))})(),VR=function(n){var e=function(t){if(t instanceof Si)return"  Expected value of type '"+(t.value0+"'.");if(t instanceof zR)return"  Unexpected value "+(LS(t.value0)+".");if(t instanceof iE)return"  At array index "+(UR(t.value0)+(`:
`+e(t.value1)));if(t instanceof oE)return"  At object key "+(t.value0+(`:
`+e(t.value1)));if(t instanceof ov)return"  Under '"+(t.value0+(`':
`+e(t.value1)));if(t instanceof aE)return"  No value was found.";throw new Error("Failed pattern match at Data.Codec.Argonaut (line 90, column 8 - line 96, column 43): "+[t.constructor.name])};return`An error occurred while decoding a JSON value:
`+e(n)},Zf=function(n){return function(e){return $f((function(){var t=Ta(new ct(new Si(n)))(iv);return function(i){return t(e(i))}})())}},fr=Zf("String")(UC)(Zm),No=Zf("Object")(FC)(Zm),GR=function(n){return function(e){return $f(function(t){return rv(ov.create(n))(rE(Nn(e))(Nn(No)(t)))})(function(t){return Jt(No)(NR(Jt(e)(t)))})}},Lo=Zf("Array")(BC)(Zm),bo=Zf("Int")(FR(HS)(kC))(function(n){return In(n)}),Jf=function(n){return $f(function(e){return rE(OR(function(t){return function(i){return rv(iE.create(t))(Nn(n)(i))}}))(Nn(Lo)(e))})(function(e){return kR(Jt(n))(e)})};function sE(n,e){var t={};for(var i in e)({}).hasOwnProperty.call(e,i)&&(t[i]=e[i]);for(var a in n)({}).hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}var WR=function(){return function(n){return function(e){return sE(n,e)}}},$R=function(n){var e=Vr(n);return function(){return function(){return function(t){return function(i){return function(a){return Fm(e(t))(i)(a)}}}}}},lE=function(){return function(){return function(n){return function(e){return sE(n,e)}}}},av=function(n){var e=Vr(n);return function(){return function(){return function(t){return function(i){return function(a){return Fm(e(t))(i)(a)}}}}}},Go=function(n){var e=Vr(n);return function(){return function(t){return function(i){return Nm(e(t))(i)}}}},XR=function(n){var e=Vr(n);return function(){return function(){return function(t){return function(i){return tT(e(t))(i)}}}}},sv={rowListCodec:function(n){return function(e){return HR}}},uE=function(n){return n.rowListCodec},gi=function(n){var e=uE(n);return function(){return function(){return function(t){var i=Go(t)(),a=BR(t)();return{rowListCodec:function(s){return function(c){var u=e(Mt.value)(c),d=i(Mt.value)(c);return a(Mt.value)(d)(u)}}}}}}},jR=function(){return function(n){return uE(n)(Mt.value)}},qR=jR(),cE=function(){return function(n){var e=qR(n);return function(t){return function(i){return GR(t)(e(i))}}}},pa={dimap:function(n){return function(e){return function(t){return function(i){return e(t(n(i)))}}}}},Qf=function(n){return n.dimap},qi={first:function(n){return function(e){return new Wt(n(e.value0),e.value1)}},second:Ot(Gm),Profunctor0:function(){return pa}},YR=function(n){return n.first},S0=MS(),KR=function(n){return function(e){return function(t){var i=Qf(t);return function(a){return i(n)(e)(a)}}}},ZR=function(){return function(){return function(n){return KR(S0)(S0)(n)}}},JR=ZR()(),QR=function(){return function(){return function(n){return JR(n)}}},e2=QR()(),fE=function(){return function(n){return function(e){return e2(e)}}},dE=function(n){return n},To=function(n){return function(e){return dE(n)(Nt(e))}},kr=(function(){var n={},e="Pure",t="Throw",i="Catch",a="Sync",s="Async",c="Bind",u="Bracket",d="Fork",h="Sequential",p="Map",m="Apply",g="Alt",S="Cons",w="Resume",E="Release",y="Finalizer",_="Finalized",b="Forked";function M(P,k,W,Y){this.tag=P,this._1=k,this._2=W,this._3=Y}function R(P){var k=function(W,Y,ee){return new M(P,W,Y,ee)};return k.tag=P,k}function U(P){return new M(e,void 0)}function N(P){try{P()}catch(k){setTimeout(function(){throw k},0)}}function I(P,k,W){try{return k(W())}catch(Y){return P(Y)}}function ce(P,k,W){try{return k(W)()}catch(Y){return W(P(Y))(),U}}var C=(function(){var P=1024,k=0,W=0,Y=new Array(P),ee=!1;function Z(){var _e;for(ee=!0;k!==0;)k--,_e=Y[W],Y[W]=void 0,W=(W+1)%P,_e();ee=!1}return{isDraining:function(){return ee},enqueue:function(_e){var ve;k===P&&(ve=ee,Z(),ee=ve),Y[(W+k)%P]=_e,k++,ee||Z()}}})();function O(P){var k={},W=0,Y=0;return{register:function(ee){var Z=W++;ee.onComplete({rethrow:!0,handler:function(_e){return function(){Y--,delete k[Z]}}})(),k[Z]=ee,Y++},isEmpty:function(){return Y===0},killAll:function(ee,Z){return function(){if(Y===0)return Z();var _e=0,ve={};function be(ze){ve[ze]=k[ze].kill(ee,function(j){return function(){delete ve[ze],_e--,P.isLeft(j)&&P.fromLeft(j)&&setTimeout(function(){throw P.fromLeft(j)},0),_e===0&&Z()}})()}for(var Oe in k)k.hasOwnProperty(Oe)&&(_e++,be(Oe));return k={},W=0,Y=0,function(ze){return new M(a,function(){for(var j in ve)ve.hasOwnProperty(j)&&ve[j]()})}}}}}var oe=0,ne=1,pe=2,H=3,Q=4,se=5,re=6;function X(P,k,W){var Y=0,ee=oe,Z=W,_e=null,ve=null,be=null,Oe=null,ze=null,j=0,Dt=0,Ve=null,le=!0;function ue(we){for(var Ie,Ze,D;;)switch(Ie=null,Ze=null,D=null,ee){case pe:ee=ne;try{Z=be(Z),Oe===null?be=null:(be=Oe._1,Oe=Oe._2)}catch(q){ee=se,_e=P.left(q),Z=null}break;case H:P.isLeft(Z)?(ee=se,_e=Z,Z=null):be===null?ee=se:(ee=pe,Z=P.fromRight(Z));break;case ne:switch(Z.tag){case c:be&&(Oe=new M(S,be,Oe)),be=Z._2,ee=ne,Z=Z._1;break;case e:be===null?(ee=se,Z=P.right(Z._1)):(ee=pe,Z=Z._1);break;case a:ee=H,Z=I(P.left,P.right,Z._1);break;case s:ee=Q,Z=ce(P.left,Z._1,function(q){return function(){Y===we&&(Y++,C.enqueue(function(){Y===we+1&&(ee=H,Z=q,ue(Y))}))}});return;case t:ee=se,_e=P.left(Z._1),Z=null;break;case i:be===null?ze=new M(S,Z,ze,ve):ze=new M(S,Z,new M(S,new M(w,be,Oe),ze,ve),ve),be=null,Oe=null,ee=ne,Z=Z._1;break;case u:j++,be===null?ze=new M(S,Z,ze,ve):ze=new M(S,Z,new M(S,new M(w,be,Oe),ze,ve),ve),be=null,Oe=null,ee=ne,Z=Z._1;break;case d:ee=H,Ie=X(P,k,Z._2),k&&k.register(Ie),Z._1&&Ie.run(),Z=P.right(Ie);break;case h:ee=ne,Z=$(P,k,Z._1);break}break;case se:if(be=null,Oe=null,ze===null)ee=re,Z=ve||_e||Z;else switch(Ie=ze._3,D=ze._1,ze=ze._2,D.tag){case i:ve&&ve!==Ie&&j===0?ee=se:_e&&(ee=ne,Z=D._2(P.fromLeft(_e)),_e=null);break;case w:ve&&ve!==Ie&&j===0||_e?ee=se:(be=D._1,Oe=D._2,ee=pe,Z=P.fromRight(Z));break;case u:j--,_e===null&&(Ze=P.fromRight(Z),ze=new M(S,new M(E,D._2,Ze),ze,Ie),(ve===Ie||j>0)&&(ee=ne,Z=D._3(Ze)));break;case E:ze=new M(S,new M(_,Z,_e),ze,ve),ee=ne,ve&&ve!==Ie&&j===0?Z=D._1.killed(P.fromLeft(ve))(D._2):_e?Z=D._1.failed(P.fromLeft(_e))(D._2):Z=D._1.completed(P.fromRight(Z))(D._2),_e=null,j++;break;case y:j++,ze=new M(S,new M(_,Z,_e),ze,ve),ee=ne,Z=D._1;break;case _:j--,ee=se,Z=D._1,_e=D._2;break}break;case re:for(var T in Ve)Ve.hasOwnProperty(T)&&(le=le&&Ve[T].rethrow,N(Ve[T].handler(Z)));Ve=null,ve&&_e?setTimeout(function(){throw P.fromLeft(_e)},0):P.isLeft(Z)&&le&&setTimeout(function(){if(le)throw P.fromLeft(Z)},0);return;case oe:ee=ne;break;case Q:return}}function xe(we){return function(){if(ee===re)return le=le&&we.rethrow,we.handler(Z)(),function(){};var Ie=Dt++;return Ve=Ve||{},Ve[Ie]=we,function(){Ve!==null&&delete Ve[Ie]}}}function ge(we,Ie){return function(){if(ee===re)return Ie(P.right(void 0))(),function(){};var Ze=xe({rethrow:!1,handler:function(){return Ie(P.right(void 0))}})();switch(ee){case oe:ve=P.left(we),ee=re,Z=ve,ue(Y);break;case Q:ve===null&&(ve=P.left(we)),j===0&&(ee===Q&&(ze=new M(S,new M(y,Z(we)),ze,ve)),ee=se,Z=null,_e=null,ue(++Y));break;default:ve===null&&(ve=P.left(we)),j===0&&(ee=se,Z=null,_e=null)}return Ze}}function Me(we){return function(){var Ie=xe({rethrow:!1,handler:we})();return ee===oe&&ue(Y),Ie}}return{kill:ge,join:Me,onComplete:xe,isSuspended:function(){return ee===oe},run:function(){ee===oe&&(C.isDraining()?ue(Y):C.enqueue(function(){ue(Y)}))}}}function ie(P,k,W,Y){var ee=0,Z={},_e=0,ve={},be=new Error("[ParAff] Early exit"),Oe=null,ze=n;function j(xe,ge,Me){var we=ge,Ie=null,Ze=null,D=0,T={},q,Ae;e:for(;;)switch(q=null,we.tag){case b:if(we._3===n&&(q=Z[we._1],T[D++]=q.kill(xe,function(ye){return function(){D--,D===0&&Me(ye)()}})),Ie===null)break e;we=Ie._2,Ze===null?Ie=null:(Ie=Ze._1,Ze=Ze._2);break;case p:we=we._2;break;case m:case g:Ie&&(Ze=new M(S,Ie,Ze)),Ie=we,we=we._1;break}if(D===0)Me(P.right(void 0))();else for(Ae=0,q=D;Ae<q;Ae++)T[Ae]=T[Ae]();return T}function Dt(xe,ge,Me){var we,Ie,Ze,D,T,q;for(P.isLeft(xe)?(we=xe,Ie=null):(Ie=xe,we=null);;){if(Ze=null,D=null,T=null,q=null,Oe!==null)return;if(ge===null){Y(we||Ie)();return}if(ge._3!==n)return;switch(ge.tag){case p:we===null?(ge._3=P.right(ge._1(P.fromRight(Ie))),Ie=ge._3):ge._3=we;break;case m:if(Ze=ge._1._3,D=ge._2._3,we){if(ge._3=we,T=!0,q=_e++,ve[q]=j(be,we===Ze?ge._2:ge._1,function(){return function(){delete ve[q],T?T=!1:Me===null?Dt(we,null,null):Dt(we,Me._1,Me._2)}}),T){T=!1;return}}else{if(Ze===n||D===n)return;Ie=P.right(P.fromRight(Ze)(P.fromRight(D))),ge._3=Ie}break;case g:if(Ze=ge._1._3,D=ge._2._3,Ze===n&&P.isLeft(D)||D===n&&P.isLeft(Ze))return;if(Ze!==n&&P.isLeft(Ze)&&D!==n&&P.isLeft(D))we=Ie===Ze?D:Ze,Ie=null,ge._3=we;else if(ge._3=Ie,T=!0,q=_e++,ve[q]=j(be,Ie===Ze?ge._2:ge._1,function(){return function(){delete ve[q],T?T=!1:Me===null?Dt(Ie,null,null):Dt(Ie,Me._1,Me._2)}}),T){T=!1;return}break}Me===null?ge=null:(ge=Me._1,Me=Me._2)}}function Ve(xe){return function(ge){return function(){delete Z[xe._1],xe._3=ge,Dt(ge,xe._2._1,xe._2._2)}}}function le(){var xe=ne,ge=W,Me=null,we=null,Ie,Ze;e:for(;;)switch(Ie=null,Ze=null,xe){case ne:switch(ge.tag){case p:Me&&(we=new M(S,Me,we)),Me=new M(p,ge._1,n,n),ge=ge._2;break;case m:Me&&(we=new M(S,Me,we)),Me=new M(m,n,ge._2,n),ge=ge._1;break;case g:Me&&(we=new M(S,Me,we)),Me=new M(g,n,ge._2,n),ge=ge._1;break;default:Ze=ee++,xe=se,Ie=ge,ge=new M(b,Ze,new M(S,Me,we),n),Ie=X(P,k,Ie),Ie.onComplete({rethrow:!1,handler:Ve(ge)})(),Z[Ze]=Ie,k&&k.register(Ie)}break;case se:if(Me===null)break e;Me._1===n?(Me._1=ge,xe=ne,ge=Me._2,Me._2=n):(Me._2=ge,ge=Me,we===null?Me=null:(Me=we._1,we=we._2))}for(ze=ge,Ze=0;Ze<ee;Ze++)Z[Ze].run()}function ue(xe,ge){Oe=P.left(xe);var Me;for(var we in ve)if(ve.hasOwnProperty(we)){Me=ve[we];for(we in Me)Me.hasOwnProperty(we)&&Me[we]()}ve=null;var Ie=j(xe,ze,ge);return function(Ze){return new M(s,function(D){return function(){for(var T in Ie)Ie.hasOwnProperty(T)&&Ie[T]();return U}})}}return le(),function(xe){return new M(s,function(ge){return function(){return ue(xe,ge)}})}}function $(P,k,W){return new M(s,function(Y){return function(){return ie(P,k,W,Y)}})}return M.EMPTY=n,M.Pure=R(e),M.Throw=R(t),M.Catch=R(i),M.Sync=R(a),M.Async=R(s),M.Bind=R(c),M.Bracket=R(u),M.Fork=R(d),M.Seq=R(h),M.ParMap=R(p),M.ParApply=R(m),M.ParAlt=R(g),M.Fiber=X,M.Supervisor=O,M.Scheduler=C,M.nonCanceler=U,M})();const t2=kr.Pure,n2=kr.Throw;function r2(n){return function(e){return kr.Catch(n,e)}}function i2(n){return function(e){return e.tag===kr.Pure.tag?kr.Pure(n(e._1)):kr.Bind(e,function(t){return kr.Pure(n(t))})}}function o2(n){return function(e){return kr.Bind(n,e)}}const a2=kr.Sync,Jp=kr.Async;function s2(n,e){return function(){return kr.Fiber(n,null,e)}}kr.Seq;const l2=function(n){return n()},u2=function(n){throw new Error(n)};var c2=function(){return u2},f2=c2(),d2=l2,E0=function(n){return d2(function(){return f2(n)})},h2=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},p2=At(fu),hE=jx(fS),m2=Ot(fS),v2=function(n){return n},pE={map:i2},g2=(function(){var n=function(i){if(i instanceof mt)return i.value0;if(i instanceof ct)return E0("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[i.constructor.name])},e=function(i){if(i instanceof ct)return i.value0;if(i instanceof mt)return E0("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[i.constructor.name])},t=function(i){if(i instanceof ct)return!0;if(i instanceof mt)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[i.constructor.name])};return{isLeft:t,fromLeft:e,fromRight:n,left:ct.create,right:mt.create}})(),_2=function(n){return s2(g2,n)},mE=function(n){return function(){var t=_2(n)();return t.run(),t}},vE=function(n){return hE(mE(n))},Tr={Applicative0:function(){return gu},Bind1:function(){return vu}},vu={bind:o2,Apply0:function(){return gE(0)}},gu={pure:t2,Apply0:function(){return gE(0)}},gE=h2("applyAff","Effect.Aff",function(){return{apply:Hm(Tr),Functor0:function(){return pE}}}),y2=At(gu),x2=hn(vu),S2=Bf(vu),zs={liftEffect:a2,Monad0:function(){return Tr}},Af=hu(zs),E2=function(n){return v2(Nt(Af(n)))},w2=function(n){return function(e){return x2(Af(e.isSuspended))(function(t){return t?Af(hE(e.kill(n,Nt(p2(gn))))):Jp(function(i){return m2(E2)(e.kill(n,i))})})}},M2={throwError:n2,Monad0:function(){return Tr}},_E={catchError:r2,MonadThrow0:function(){return M2}},A2=hS(_E),T2=function(n){return function(e){return mE(S2(function(t){return Af(n(t))})(A2(e)))}},b2=Nt(y2(gn));const C2=function(n){return function(){console.log(n)}};var lv=function(n){var e=hu(n);return function(t){return e(C2(t))}};function R2(n,e,t,i,a){return function(s,c){var u=n.newXHR(),d=n.fixupUrl(a.url,u);if(u.open(a.method||"GET",d,!0,a.username,a.password),a.headers)try{for(var h=0,p;(p=a.headers[h])!=null;h++)u.setRequestHeader(p.field,p.value)}catch(g){s(g)}var m=function(g){return function(){s(new Error(g))}};return u.onerror=m(t),u.ontimeout=m(e),u.onload=function(){c({status:u.status,statusText:u.statusText,headers:u.getAllResponseHeaders().split(`\r
`).filter(function(g){return g.length>0}).map(function(g){var S=g.indexOf(":");return i(g.substring(0,S))(g.substring(S+2))}),body:u.response})},u.responseType=a.responseType,u.withCredentials=a.withCredentials,u.timeout=a.timeout,u.send(a.content),function(g,S,w){try{u.abort()}catch(E){return S(E)}return w()}}}var yE="application/json",P2="application/x-www-form-urlencoded",L2=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),D2=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),I2=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),U2=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),N2=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),xE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),SE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),F2=function(n){return n instanceof xE?new gt(P2):n instanceof SE?new gt(yE):Ct.value},w0=mu(),uv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),cv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),EE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),O2=function(n){if(n instanceof uv||n instanceof cv)return w0(n.value0);if(n instanceof EE)return n.value1;throw new Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): "+[n.constructor.name])},M0=function(n){if(n instanceof uv)return"Accept";if(n instanceof cv)return"Content-Type";if(n instanceof EE)return n.value0;throw new Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): "+[n.constructor.name])},fv=Mr(Ar),wE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ME=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),AE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ed=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),hv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),k2=function(n){if(n instanceof wE)return"arraybuffer";if(n instanceof ME)return"blob";if(n instanceof AE)return"document";if(n instanceof ed||n instanceof dv)return"text";if(n instanceof hv)return"";throw new Error("Failed pattern match at Affjax.ResponseFormat (line 44, column 3 - line 50, column 19): "+[n.constructor.name])},z2=function(n){return n instanceof ed?new gt(yE):Ct.value},B2=(function(){return new dv(fv)})(),H2=(function(){return new ed(fv)})(),V2=(function(){return new hv(fv)})(),G2=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})();function W2(n,e,t){try{return e(JSON.parse(t))}catch(i){return n(i.message)}}var $2=function(n){return W2(ct.create,mt.create,n)};function X2(n){return n.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function j2(n,e,t){try{return e(X2(encodeURIComponent(t)).replace(/%20/g,"+"))}catch(i){return n(i)}}function q2(n,e,t){try{return e(decodeURIComponent(t))}catch(i){return n(i)}}var Qh=(function(){return Qm(j2)(Nt(Ct.value))(gt.create)})(),Y2=(function(){return Qm(q2)(Nt(Ct.value))(gt.create)})(),K2=Os(rS),A0=Ot(lu),Z2=ev(qf)(PT),J2=function(n){return n},Q2=(function(){var n=function(i){if(i.value1 instanceof Ct)return Qh(i.value0);if(i.value1 instanceof gt)return K2(A0(function(a){return function(s){return a+("="+s)}})(Qh(i.value0)))(Qh(i.value1.value0));throw new Error("Failed pattern match at Data.FormURLEncoded (line 37, column 16 - line 39, column 114): "+[i.constructor.name])},e=A0(xR("&")),t=Z2(n);return function(i){return e(t(J2(i)))}})(),eP=(function(){function n(){}return n.value=new n,n})(),TE=(function(){function n(){}return n.value=new n,n})(),tP=(function(){function n(){}return n.value=new n,n})(),nP=(function(){function n(){}return n.value=new n,n})(),rP=(function(){function n(){}return n.value=new n,n})(),iP=(function(){function n(){}return n.value=new n,n})(),oP=(function(){function n(){}return n.value=new n,n})(),aP=(function(){function n(){}return n.value=new n,n})(),sP=(function(){function n(){}return n.value=new n,n})(),lP=(function(){function n(){}return n.value=new n,n})(),uP=(function(){function n(){}return n.value=new n,n})(),cP=(function(){function n(){}return n.value=new n,n})(),fP=(function(){function n(){}return n.value=new n,n})(),dP=(function(){function n(){}return n.value=new n,n})(),hP=(function(){function n(){}return n.value=new n,n})(),pP=(function(){function n(){}return n.value=new n,n})(),mP=function(n){return n},vP={show:function(n){if(n instanceof eP)return"OPTIONS";if(n instanceof TE)return"GET";if(n instanceof tP)return"HEAD";if(n instanceof nP)return"POST";if(n instanceof rP)return"PUT";if(n instanceof iP)return"DELETE";if(n instanceof oP)return"TRACE";if(n instanceof aP)return"CONNECT";if(n instanceof sP)return"PROPFIND";if(n instanceof lP)return"PROPPATCH";if(n instanceof uP)return"MKCOL";if(n instanceof cP)return"COPY";if(n instanceof fP)return"MOVE";if(n instanceof dP)return"LOCK";if(n instanceof hP)return"UNLOCK";if(n instanceof pP)return"PATCH";throw new Error("Failed pattern match at Data.HTTP.Method (line 43, column 1 - line 59, column 23): "+[n.constructor.name])}},gP=uu(Aa(vP))(mP),_P=(function(){var n=$C(eR);return function(e){return XC(n(e))}})(),yP=function(n){return n.value0};const xP=null;function SP(n){return n}var Lc=Ta(xP)(SP),EP=function(n){return Jp(function(e){return function(){var i=n(function(a){return e(ct.create(a))()},function(a){return e(mt.create(a))()});return function(a){return Jp(function(s){return function(){return i(a,function(u){return s(ct.create(u))()},function(u){return s(mt.create(u))()}),b2}})}}})};function T0(n){return Object.prototype.toString.call(n).slice(8,-1)}var wP=Aa(wT),MP=Aa(zm),bE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),CE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),AP=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),TP=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),oa=du,bP=du,Qp=function(n){if(n instanceof bE)return n.value0;if(n instanceof AP)return"Error at array index "+(MP(n.value0)+(": "+Qp(n.value1)));if(n instanceof TP)return"Error at property "+(wP(n.value0)+(": "+Qp(n.value1)));if(n instanceof CE)return"Type mismatch: expected "+(n.value0+(", found "+n.value1));throw new Error("Failed pattern match at Foreign (line 78, column 1 - line 78, column 45): "+[n.constructor.name])},RE=function(n){var e=Gf(jm(n));return function(t){return e(_P(t))}},CP=function(n){var e=At(Vo(n)),t=RE(n);return function(i){return function(a){return T0(a)===i?e(bP(a)):t(new CE(i,T0(a)))}}},ep=At(Vo(Ho)),RP=RE(Ho),aa=CP(Ho),b0=rT(ab(JC)(Ho)),PP=Kx(pu(Ho)),Dc=Ot(lu),LP=Kb(ji)(qp),DP=Ai(_a),IP=Bf(iS),UP=Ot(au),NP=YA(pE),FP=hS(_E),OP=At(gu),PE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),LE=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),DE=(function(){function n(){}return n.value=new n,n})(),IE=(function(){function n(){}return n.value=new n,n})(),UE=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),kP=function(n){return function(e){var t=function(p){return p===""?ep(PC):uu(function(m){return RP(bE.create(m))})(ep)($2(p))},i=(function(){if(e.responseFormat instanceof wE)return aa("ArrayBuffer");if(e.responseFormat instanceof ME)return aa("Blob");if(e.responseFormat instanceof AE)return function(p){return b0(aa("Document")(p))(b0(aa("XMLDocument")(p))(aa("HTMLDocument")(p)))};if(e.responseFormat instanceof ed)return PP(function(p){return e.responseFormat.value0(t(p))})(aa("String"));if(e.responseFormat instanceof dv)return aa("String");if(e.responseFormat instanceof hv)return Nt(e.responseFormat.value0(ep(gn)));throw new Error("Failed pattern match at Affjax (line 274, column 18 - line 283, column 57): "+[e.responseFormat.constructor.name])})(),a=function(p){if(p instanceof L2)return new mt(p.value0(oa));if(p instanceof D2)return new mt(oa(p.value0));if(p instanceof I2)return new mt(oa(p.value0));if(p instanceof U2)return new mt(oa(p.value0));if(p instanceof N2)return new mt(oa(p.value0));if(p instanceof xE)return Ts("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(Dc(oa)(Q2(p.value0)));if(p instanceof SE)return new mt(oa(LS(p.value0)));throw new Error("Failed pattern match at Affjax (line 235, column 20 - line 250, column 69): "+[p.constructor.name])},s=function(p){return function(m){return p instanceof gt&&!LP(jA(DP)(M0)(p.value0))(m)?lC(m)(p.value0):m}},c=function(p){return s(Dc(cv.create)(IP(F2)(p)))(s(Dc(uv.create)(z2(e.responseFormat)))(e.headers))},u=function(p){return{method:gP(e.method),url:e.url,headers:UP(function(m){return{field:M0(m),value:O2(m)}})(c(e.content)),content:p,responseType:k2(e.responseFormat),username:Lc(e.username),password:Lc(e.password),withCredentials:e.withCredentials,timeout:nS(0)(Dc(function(m){return m})(e.timeout))}},d=function(p){return NP(FP(EP(R2(n,"AffjaxTimeoutErrorMessageIdent","AffjaxRequestFailedMessageIdent",G2.create,u(p)))))(function(m){if(m instanceof mt){var g=Km(i(m.value0.body));if(g instanceof ct)return new ct(new LE(yP(g.value0),m.value0));if(g instanceof mt)return new mt({headers:m.value0.headers,status:m.value0.status,statusText:m.value0.statusText,body:g.value0});throw new Error("Failed pattern match at Affjax (line 209, column 9 - line 211, column 52): "+[g.constructor.name])}if(m instanceof ct)return new ct((function(){var S=dS(m.value0),w=S==="AffjaxTimeoutErrorMessageIdent";if(w)return DE.value;var E=S==="AffjaxRequestFailedMessageIdent";return E?IE.value:new UE(m.value0)})());throw new Error("Failed pattern match at Affjax (line 207, column 144 - line 219, column 28): "+[m.constructor.name])})};if(e.content instanceof Ct)return d(Lc(Ct.value));if(e.content instanceof gt){var h=a(e.content.value0);if(h instanceof mt)return d(Lc(new gt(h.value0)));if(h instanceof ct)return OP(new ct(new PE(h.value0)));throw new Error("Failed pattern match at Affjax (line 199, column 7 - line 203, column 48): "+[h.constructor.name])}throw new Error("Failed pattern match at Affjax (line 195, column 3 - line 203, column 48): "+[e.content.constructor.name])}},NE=function(n){if(n instanceof PE)return"There was a problem with the request content: "+n.value0;if(n instanceof LE)return"There was a problem with the response body: "+Qp(n.value0);if(n instanceof DE)return"There was a problem making the request: timeout";if(n instanceof IE)return"There was a problem making the request: request failed";if(n instanceof UE)return"There was a problem making the request: "+dS(n.value0);throw new Error("Failed pattern match at Affjax (line 113, column 14 - line 123, column 66): "+[n.constructor.name])},sa=(function(){return{method:new ct(TE.value),url:"/",headers:[],content:Ct.value,username:Ct.value,password:Ct.value,withCredentials:!1,responseFormat:V2,timeout:Ct.value}})(),zP=function(n){return function(e){return function(t){return kP(n)({method:sa.method,headers:sa.headers,content:sa.content,username:sa.username,password:sa.password,withCredentials:sa.withCredentials,timeout:sa.timeout,url:t,responseFormat:e})}}},BP=Aa(zm),HP={show:function(n){return"(StatusCode "+(BP(n)+")")}},VP={eq:function(n){return function(e){return n===e}}};const GP={newXHR:function(){return new XMLHttpRequest},fixupUrl:function(n){return n||"/"}};var FE=zP(GP),WP=yS(SS),$P={liftAff:Mr(Ar),MonadEffect0:function(){return zs}},OE=function(n){return n.liftAff},XP=function(n){var e=n.MonadEffect0(),t=Xm(e);return{liftAff:(function(){var i=WP(e.Monad0()),a=OE(n);return function(s){return i(a(s))}})(),MonadEffect0:function(){return t}}};const jP=function(n){return function(e){return e.join(n)}};var qP=Gr(su),YP={genericShowArgs:function(n){return[]}},KP=function(n){return n.genericShowArgs},ZP=function(n){var e=KP(n);return function(t){var i=Vr(t);return{"genericShow'":function(a){var s=i(Mt.value),c=e(a);return c.length===0?s:"("+(jP(" ")(qP([s])(c))+")")}}}},em=function(n){return n["genericShow'"]},ui=function(n){var e=em(n);return function(t){var i=em(t);return{"genericShow'":function(a){if(a instanceof Yt)return e(a.value0);if(a instanceof Ne)return i(a.value0);throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): "+[a.constructor.name])}}}},JP=function(n){var e=Bm(n);return function(t){var i=em(t);return function(a){return i(e(a))}}},Kr=ZP(YP),kE=(function(){function n(){}return n.value=new n,n})(),zE=(function(){function n(){}return n.value=new n,n})(),BE=(function(){function n(){}return n.value=new n,n})(),HE=(function(){function n(){}return n.value=new n,n})(),VE=(function(){function n(){}return n.value=new n,n})(),QP=(function(){function n(){}return n.value=new n,n})(),eL=(function(){function n(){}return n.value=new n,n})(),tL=(function(){function n(){}return n.value=new n,n})(),nL=(function(){function n(){}return n.value=new n,n})(),rL=(function(){function n(){}return n.value=new n,n})(),iL=(function(){function n(){}return n.value=new n,n})(),oL={from:function(n){if(n instanceof kE)return new Yt(ur.value);if(n instanceof zE)return new Ne(new Yt(ur.value));if(n instanceof BE)return new Ne(new Ne(new Yt(ur.value)));if(n instanceof HE)return new Ne(new Ne(new Ne(new Yt(ur.value))));if(n instanceof VE)return new Ne(new Ne(new Ne(new Ne(new Yt(ur.value)))));if(n instanceof QP)return new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(ur.value))))));if(n instanceof eL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(ur.value)))))));if(n instanceof tL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(ur.value))))))));if(n instanceof nL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(ur.value)))))))));if(n instanceof rL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Yt(ur.value))))))))));if(n instanceof iL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(ur.value))))))))));throw new Error("Failed pattern match at GCodeViewer.Error (line 30, column 1 - line 30, column 34): "+[n.constructor.name])}},aL={show:JP(oL)(ui(Kr({reflectSymbol:function(){return"Err1"}}))(ui(Kr({reflectSymbol:function(){return"Err2"}}))(ui(Kr({reflectSymbol:function(){return"Err3"}}))(ui(Kr({reflectSymbol:function(){return"Err4"}}))(ui(Kr({reflectSymbol:function(){return"Err5"}}))(ui(Kr({reflectSymbol:function(){return"Err6"}}))(ui(Kr({reflectSymbol:function(){return"XErr7"}}))(ui(Kr({reflectSymbol:function(){return"XErr8"}}))(ui(Kr({reflectSymbol:function(){return"XErr9"}}))(ui(Kr({reflectSymbol:function(){return"XErr10"}}))(Kr({reflectSymbol:function(){return"ErrX"}}))))))))))))},sL=Aa(aL),Tf=function(n){return"Error: "+(n.message+(" ("+(sL(n.code)+")")))},Gl=function(n){return function(e){return{message:e,code:n}}},lL=function(n){var e=n.MonadThrow0(),t=Gf(e),i=At(e.Monad0().Applicative0());return function(a){return function(s){if(s instanceof ct)return t(a(s.value0));if(s instanceof mt)return i(s.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 43, column 28 - line 45, column 20): "+[s.constructor.name])}}},uL=function(n){var e=Gf(n.MonadThrow0());return function(t){var i=t.MonadEffect0().Monad0(),a=hn(i.Bind1()),s=OE(t),c=At(i.Applicative0());return function(u){return function(d){return a(s(d))(function(h){if(h instanceof ct)return e(u(h.value0));if(h instanceof mt)return c(h.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 38, column 3 - line 40, column 22): "+[h.constructor.name])})}}}},cL=Qf(PS(ba)),fL=mu(),dL=sb(),hL=cE(),_s=function(n){return n},pL=function(n){return n},pv=function(){return function(n){var e=hL(n);return function(t){var i=Vr(t);return function(a){return cL(fL)(dL)(e(i(Mt.value))(a))}}}},GE=pu(Tr),tm=hn(GE),WE=qm(Tr),$E=uL(WE)(XP($P)),XE=zf(Hf)(GE),jE=Vo(Tr),qE=Yx(jE),YE=Jx(VP),KE=Gf(jm(Tr)),ZE=Aa(HP),JE=At(jE),mL=lL(WE),vL=function(n){return tm($E((function(){var e=Gl(HE.value);return function(t){return e(NE(t))}})())(FE(B2)(n)))(function(e){return XE(qE(YE(e.status)(200))(KE(Gl(VE.value)(ZE(e.status)))))(function(){return JE(e.body)})})},gL=pv()(gi(gi(gi(sv)()()({reflectSymbol:function(){return"pictures"}}))()()({reflectSymbol:function(){return"name"}}))()()({reflectSymbol:function(){return"gcode"}}))({reflectSymbol:function(){return"IndexFileItem"}})({name:fr,gcode:fr,pictures:Jf(fr)}),mv=Jf(gL),_L=function(n){return tm($E((function(){var e=Gl(kE.value);return function(t){return e(NE(t))}})())(FE(H2)(n.url)))(function(e){return XE(qE(YE(e.status)(200))(KE(Gl(BE.value)(ZE(e.status)))))(function(){return tm(mL((function(){var t=Gl(zE.value);return function(i){return t(VR(i))}})())(Nn(mv)(e.body)))(function(t){return JE(t)})})})},yL=function(n){return function(e){var t=Qf(e.Profunctor0()),i=YR(e);return function(a){return t(n)(function(s){return s.value1(s.value0)})(i(a))}}},xL=function(n){return function(e){return function(t){return yL(function(i){return new Wt(n(i),function(a){return e(i)(a)})})(t)}}},QE=function(n){var e=Go(n)(),t=$R(n)()();return function(){return function(){return function(i){return function(a){return xL(e(i))(xi(t(i)))(a)}}}}},Bs=function(n){var e=QE(n)()();return function(){return function(){return function(t){return e(Mt.value)(t)}}}},zr=CS(RS),Xn=hn(cu),Co=At(Ca),SL=Ot(ba),EL=Qf(PS(ba)),C0=BS(ji),wL=Mr(Ar),vf=Yx(Ca),Wl=zf(Hf)(cu),R0=Jx(jp(DC)),_u=(function(){function n(){}return n.value=new n,n})(),fn=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),vv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),td=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ML=function(n){return function(){return function(){return function(e){return function(t){return t}}}}},nm=function(n){return n.gCasesEncode},rm=function(n){return n.gCasesDecode},tp=function(n){var e=nm(n),t=rm(n);return function(i){var a=nm(i),s=rm(i);return function(){return function(){return function(){return function(){return function(c){var u=ML()()(),d=Go(c)(),h=av(c)()(),p=XR(c)()();return{gCasesEncode:function(m){return function(g){var S=u(Mt.value)(g),w=d(Mt.value)(g),E=h(Mt.value)(w)({});return function(y){if(y instanceof Yt)return e(m)(E)(y.value0);if(y instanceof Ne)return a(m)(S)(y.value0);throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 244, column 7 - line 246, column 47): "+[y.constructor.name])}}},gCasesDecode:function(m){return function(g){return function(S){var w=p(Mt.value)(g),E=d(Mt.value)(g),y=h(Mt.value)(E)({}),_=function(R){return s(m)(w)(S)},b=function(R){return t(m)(y)(S)},M=b();if(M instanceof ct&&M.value0 instanceof _u)return SL(Ne.create)(_());if(M instanceof ct&&M.value0 instanceof fn)return new ct(new fn(M.value0.value0));if(M instanceof mt)return new mt(new Yt(M.value0));throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 257, column 5 - line 260, column 34): "+[M.constructor.name])}}}}}}}}}}},AL=function(n){return function(e){return new ov(n,(function(){if(e instanceof _u)return new Si("No case matched");if(e instanceof fn)return e.value0;throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 147, column 5 - line 149, column 23): "+[e.constructor.name])})())}},TL=function(n){var e=nm(n),t=rm(n);return function(i){var a=Bm(i),s=tS(i);return function(c){return function(u){return function(d){var h=e(c)(d),p=(function(){var m=zr(AL(u)),g=t(c)(d);return function(S){return m(g(S))}})();return EL(a)(s)($f(p)(h))}}}}},ew=function(n){return function(e){return function(t){if(n instanceof vv){var i=(function(){return t.length===0?Jt(Lo)([]):t.length===1&&n.value0.unwrapSingleArguments?t[0]:Jt(Lo)(t)})(),a=n.value0.mapTag(e);return Jt(No)(C0([new Wt(a,i)]))}if(n instanceof td){var s=(function(){return t.length===0&&n.value0.omitEmptyArguments?Ct.value:t.length===1&&n.value0.unwrapSingleArguments?new gt(new Wt(n.value0.valuesKey,t[0])):new gt(new Wt(n.value0.valuesKey,Jt(Lo)(t)))})(),a=n.value0.mapTag(e),c=new gt(new Wt(n.value0.tagKey,Jt(fr)(a)));return Jt(No)(C0(_C([c,s])))}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 403, column 3 - line 428, column 33): "+[n.constructor.name])}}},bL=(function(){return new td({tagKey:"tag",valuesKey:"values",unwrapSingleArguments:!1,omitEmptyArguments:!1,mapTag:wL})})(),CL=function(n){return function(e){return TL(e)(n)(bL)}},tw=function(n){return function(e){return function(t){return Xn(zr(fn.create)(Ts(new Si("Expecting a tag property `"+(n+"`")))(bs(n)(e))))(function(i){return Xn(zr(fn.create)(Nn(fr)(i)))(function(a){return vf(a!==t)(new ct(_u.value))})})}}},RL=function(n){return function(e){return function(t){if(n instanceof vv){var i=n.value0.mapTag(t);return Xn(zr(fn.create)(Nn(No)(e)))(function(a){return Xn(Ts(_u.value)(bs(i)(a)))(function(s){return Xn(zr(fn.create)(Nn(Lo)(s)))(function(c){return Wl(vf(R0(c)([]))(new ct(new fn(new Si("Expecting an empty array")))))(function(){return Co(gn)})})})})}if(n instanceof td){var i=n.value0.mapTag(t);return Xn(zr(fn.create)(Nn(No)(e)))(function(s){return Wl(tw(n.value0.tagKey)(s)(i))(function(){return vf(!n.value0.omitEmptyArguments)(Xn(Ts(new fn(new Si("Expecting a value property `"+(n.value0.valuesKey+"`"))))(bs(n.value0.valuesKey)(s)))(function(c){return Xn(zr(fn.create)(Nn(Lo)(c)))(function(u){return Wl(vf(R0(u)([]))(new ct(new fn(new Si("Expecting an empty array")))))(function(){return Co(gn)})})}))})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 320, column 3 - line 346, column 18): "+[n.constructor.name])}}},PL=function(){return function(n){var e=Vr(n);return{gCasesEncode:function(t){return function(i){return function(a){var s=e(Mt.value);return ew(t)(s)([])}}},gCasesDecode:function(t){return function(i){return function(a){var s=e(Mt.value);return Wl(RL(t)(a)(s))(function(){return Co(ur.value)})}}}}}},LL=function(n){return function(e){return function(t){if(n instanceof vv){var i=n.value0.mapTag(t);return Xn(zr(fn.create)(Nn(No)(e)))(function(a){return Xn(Ts(_u.value)(bs(i)(a)))(function(s){return n.value0.unwrapSingleArguments?Co(s):Xn(zr(fn.create)(Nn(Lo)(s)))(function(c){return c.length===1?Co(c[0]):new ct(new fn(new Si("Expecting exactly one element")))})})})}if(n instanceof td){var i=n.value0.mapTag(t);return Xn(zr(fn.create)(Nn(No)(e)))(function(s){return Wl(tw(n.value0.tagKey)(s)(i))(function(){return Xn(Ts(new fn(new Si("Expecting a value property `"+(n.value0.valuesKey+"`"))))(bs(n.value0.valuesKey)(s)))(function(c){return n.value0.unwrapSingleArguments?Co(c):Xn(zr(fn.create)(Nn(Lo)(c)))(function(u){return u.length===1?Co(u[0]):new ct(new fn(new Si("Expecting exactly one element")))})})})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 349, column 49 - line 378, column 71): "+[n.constructor.name])}}},DL=function(){return function(n){var e=Vr(n),t=Go(n)();return{gCasesEncode:function(i){return function(a){return function(s){var c=e(Mt.value),u=t(Mt.value)(a);return ew(i)(c)([Jt(u)(s)])}}},gCasesDecode:function(i){return function(a){return function(s){var c=e(Mt.value);return Xn(LL(i)(s)(c))(function(u){var d=t(Mt.value)(a);return Xn(zr(fn.create)(Nn(d)(u)))(function(h){return Co(h)})})}}}}}},IL=au,UL=ji;function NL(n){var e={};for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}function FL(n){return function(e){return function(t){return t[n]=e(t[n]),t}}}var OL=$x,kL=function(){return function(){return function(n){var e=Vr(n);return function(t){return function(i){return function(a){return FL(e(t))(i)(a)}}}}}},zL=Ar,BL=function(n){return function(e){return n(NL(e))}},HL=Mr(zL),VL=Xx(OL),GL=kL()(),WL=function(n){return n},$L=function(n){return n.mappingWithIndex},XL=function(n){return n.mapping},pi={mapRecordWithIndexBuilder:function(n){return function(e){return HL}}},nw=function(n){return n.mapRecordWithIndexBuilder},Hs=function(n){var e=GL(n);return function(t){var i=$L(t);return function(a){var s=nw(a);return function(){return function(){return{mapRecordWithIndexBuilder:function(c){return function(u){return VL(e(Mt.value)(i(u)(Mt.value)))(s(Mt.value)(u))}}}}}}}},rw=function(){return function(n){return{hmap:(function(){var e=nw(n)(Mt.value);return function(t){return BL(e(WL(t)))}})()}}},bf=function(n){return n.hmap},Vs=function(n){var e=XL(n);return{mappingWithIndex:function(t){return function(i){return e(t)}}}},iw=Ot(qx),jL=WR(),qL=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),YL=(function(){function n(){}return n.value=new n,n})(),KL=(function(){function n(){}return n.value=new n,n})(),ZL=(function(){function n(){}return n.value=new n,n})(),JL=function(){return function(n){var e=Go(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Mt.value)(t),s=a(gn);return s}}}}},QL=function(){return function(n){var e=Go(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Mt.value)(t),s=a(i);return s}}}}},ow=function(){return function(n){return{mkConstructorsRep:(function(){var e=function(i){return MT(AT(i))},t=av(n)()()(Mt.value)(e)({});return t})()}}},aw={mapping:function(n){return function(e){return function(t){return n.value0.emitMsg(e(t))()}}}},eD={mapping:function(n){return function(e){return iw(Ne.create)(e)}}},tD={mapping:function(n){return function(e){return iw(Yt.create)(e)}}},sw=function(n){var e=tS(n);return{mapping:function(t){return function(i){return function(a){return e(i(a))}}}}},im=function(n){return n.mkMatcherRep},nD=function(n){var e=Bm(n);return function(t){var i=im(t);return{mkMatcher1:function(a,s){return i(s)(e(a))}}}},rD=function(n){return n.mkMatcher1},lw=function(n){var e=bf(n);return function(t){return e(new qL({emitMsg:t.emitMsg}))}},om=function(n){return n.mkConstructorsRep},uw=function(n){return function(e){var t=om(e);return function(i){return{mkConstructors:(function(){var a=bf(i)(ZL.value)(t);return a})()}}}},Ic=function(n){var e=om(n);return function(t){var i=om(t);return function(a){var s=bf(a);return function(c){var u=bf(c);return function(){return{mkConstructorsRep:(function(){var d=u(YL.value)(i),h=s(KL.value)(e),p=jL(h)(d);return p})()}}}}}},cw=function(n){return n.mkConstructors},iD=function(){return du},oD=iD(),aD=function(){return du},sD=aD(),np=function(n){var e=im(n);return function(t){var i=im(t);return function(){return{mkMatcherRep:function(a){return function(s){var c=(function(){if(s instanceof Yt)return e(sD(a))(s.value0);if(s instanceof Ne)return i(oD(a))(s.value0);throw new Error("Failed pattern match at Stadium.TL (line 194, column 11 - line 196, column 76): "+[s.constructor.name])})();return c}}}}}},P0=JL(),am={reflectSymbol:function(){return"NotAsked"}},sm={reflectSymbol:function(){return"Loading"}},L0=QL(),lm={reflectSymbol:function(){return"Loaded"}},fw={reflectSymbol:function(){return"Error"}},D0=PL(),I0=DL(),Cs=(function(){function n(){}return n.value=new n,n})(),Fo=(function(){function n(){}return n.value=new n,n})(),Rs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ps=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dw={to:function(n){if(n instanceof Yt)return Cs.value;if(n instanceof Ne&&n.value0 instanceof Yt)return Fo.value;if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Yt)return new Rs(n.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne)return new Ps(n.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])},from:function(n){if(n instanceof Cs)return new Yt(ur.value);if(n instanceof Fo)return new Ne(new Yt(ur.value));if(n instanceof Rs)return new Ne(new Ne(new Yt(n.value0)));if(n instanceof Ps)return new Ne(new Ne(new Ne(n.value0)));throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])}},lD=CL(dw)(tp(D0(am))(tp(D0(sm))(tp(I0(lm))(I0(fw))()()()()(lm))()()()()(sm))()()()()(am)),uD=function(n){var e=Ai(n);return{eq:function(t){return function(i){return t instanceof Cs&&i instanceof Cs||t instanceof Fo&&i instanceof Fo?!0:t instanceof Rs&&i instanceof Rs?e(t.value0)(i.value0):t instanceof Ps&&i instanceof Ps?t.value0===i.value0:!1}}}},hw=rD(nD(dw)(np(P0(am))(np(P0(sm))(np(L0(lm))(L0(fw))())())())),nd=function(n){return lD("RemoteData")({NotAsked:gn,Loading:gn,Loaded:n,Error:fr})},pw=function(n){return n.bitraverse},cD=function(n){var e=pw(n);return function(t){var i=e(t),a=At(t);return function(s){return i(s)(a)}}},mw={bitraverse:function(n){var e=n.Apply0(),t=Os(e),i=Ot(e.Functor0());return function(a){return function(s){return function(c){return t(i(Wt.create)(a(c.value0)))(s(c.value1))}}}}},fD=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},U0=pw(mw)(Ca),N0=ev(qf)(Ca),dD=Yb(ji)(_a),hD=Ot(IL),pD=Ot(qx),mD=Jm(UL),vD=QA(cu),gD=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),_D=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),yD=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),vw=(function(){function n(){}return n.value=new n,n})(),Br=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Oo=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),um=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ls=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),cm=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),xD=(function(){var n=function(m){return{segments:m.value0.value0,params:m.value0.value1,hash:m.value1}},e=function(m){return function(g){return g===""?[]:KS(m)(g)}},t=function(m){return function(g){return function(S){var w=yR(g)(S);if(w instanceof gt)return new Wt(YS(w.value0)(S),Zp(w.value0+nv(g)|0)(S));if(w instanceof Ct)return m(S);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 191, column 5 - line 193, column 23): "+[w.constructor.name])}}},i=function(m){var g=Y2(m);if(g instanceof Ct)return new ct(new yD(m));if(g instanceof gt)return new mt(g.value0);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 195, column 29 - line 197, column 22): "+[g.constructor.name])},a=(function(){var m=U0(i)(i),g=t(xi(Wt.create)(""))("=");return function(S){return m(g(S))}})(),s=(function(){var m=N0(a),g=e("&");return function(S){return m(g(S))}})(),c=(function(){var m=e("/");return function(g){return(function(S){return S.length===2&&S[0]===""&&S[1]===""?new mt([""]):N0(i)(S)})(m(g))}})(),u=(function(){var m=U0(c)(s),g=t(xi(Wt.create)(""))("?");return function(S){return m(g(S))}})(),d=Ot(ba)(n),h=cD(mw)(Ca)(u),p=t(xi(Wt.create)(""))("#");return function(m){return d(h(p(m)))}})(),SD=function(n){return new Ls(function(e){var t=dD(n)(e.params);return t instanceof gt?new Oo(e,t.value0):new Br(new _D(n))})},ED={map:function(n){return function(e){if(e instanceof Br)return new Br(e.value0);if(e instanceof Oo)return new Oo(e.value0,n(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},gw=Ot(ED),fm={map:function(n){return function(e){if(e instanceof um)return new um(hD(Ot(fm)(n))(e.value0));if(e instanceof Ls)return new Ls(pD(gw(n))(e.value0));if(e instanceof cm)return new cm(e.value0,Ot(fm)(n)(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},wD=function(n){return function(e){var t=dC(e.segments);return t instanceof gt&&n===t.value0?new Oo({params:e.params,hash:e.hash,segments:pC(1)(e.segments)},gn):t instanceof gt?new Br(new gD(n,t.value0)):new Br(vw.value)}},_w=fD("runRouteParser","Routing.Duplex.Parser",function(){var n=function(t){return function(i){return function(a){return i instanceof Br?_w(161)(t)(a):i}}},e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof um)return s=!0,mD(n(d))(new Br(vw.value))(h.value0);if(h instanceof Ls)return s=!0,h.value0(d);if(h instanceof cm){var p=wD(h.value0)(d);if(p instanceof Br)return s=!0,new Br(p.value0);if(p instanceof Oo){a=p.value0,i=h.value1;return}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 157, column 7 - line 159, column 40): "+[p.constructor.name])}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 153, column 14 - line 159, column 40): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}),dm=_w(150),MD=function(n){return vD(xD)((function(){var e=xi(dm)(n);return function(t){return(function(i){if(i instanceof Br)return new ct(i.value0);if(i instanceof Oo)return new mt(i.value1);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 200, column 49 - line 202, column 29): "+[i.constructor.name])})(e(t))}})())},AD={apply:function(n){return function(e){return new Ls(function(t){var i=dm(t)(n);if(i instanceof Br)return new Br(i.value0);if(i instanceof Oo)return gw(i.value1)(dm(i.value0)(e));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 81, column 5 - line 83, column 56): "+[i.constructor.name])})}}},TD={pure:(function(){var n=xi(Oo.create);return function(e){return Ls.create(n(e))}})()},yw={append:function(n){return function(e){return function(t){return e(n(t))}}}},bD=function(n){return function(e){return function(t){return{segments:t.segments,hash:t.hash,params:mC(new Wt(n,e))(t.params)}}}},CD={mempty:Mr(Ar),Semigroup0:function(){return yw}},RD=Gr(yw),PD=At(TD),xw=Mr(Ar),LD=Os(AD),DD=Ot(fm),gv=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),ID=xw,UD=(function(){return new gv(ks(kT(CD)),PD({}))})(),ND=function(n){var e=Go(n)(),t=av(n)()();return function(){return function(){return function(){return function(i){return function(a){return function(s){return new gv(function(c){return RD(s.value0(c))(a.value0(e(i)(c)))},LD(DD(xi(t(i)))(s.value1))(a.value1))}}}}}}},FD=function(n){return MD(n.value1)},OD=function(n){return n.params},kD=function(n){return new gv(bD(n),SD(n))},zD={buildParams:function(n){return function(e){return xw}}},Sw=function(n){return n.buildParams},BD=function(n){var e=ND(n)()()(),t=Go(n)(),i=Vr(n);return function(){return function(){return function(){return function(){return function(a){var s=Sw(a);return{buildParams:function(c){return function(u){return function(d){return s(Mt.value)(u)(e(Mt.value)(t(Mt.value)(u)(kD(i(Mt.value))))(d))}}}}}}}}}},HD=function(){return function(n){var e=Sw(n);return{params:function(t){return e(Mt.value)(t)(UD)}}}};const VD=n=>()=>{console.log(...n)};var GD=lv(nb),WD=At(fu),rp=Gr(su),_v=function(n){var e=QE(n)()();return function(){return function(){return function(t){return e(Mt.value)(t)}}}},$D=_v({reflectSymbol:function(){return"history"}})()()(qi),XD=_v({reflectSymbol:function(){return"historyIndex"}})()()(qi),jD=_v({reflectSymbol:function(){return"pubState"}})()()(qi),Ew=function(n){var e=function(i){var a=function(s){return function(c){return i.updateState(function(u){var d=n.updatePubState(c)(u.pubState);if(d instanceof ct)return function(){return GD(d.value0)(),u};if(d instanceof mt){var h=n.encodeMsg(c);return function(){return VD(rp([Jt(fr)("%c"+h.tag),Jt(fr)("color: white; background: #cc8a21; padding: 2px 4px;")])(rp(Ta([])(function(m){return[Jt(fr)("@"+m)]})(s))([h.args,Jt(fr)(`
newState`),n.encodeJsonPubState(d.value0)])))(),dE($D)(function(m){return rp(m)([{msg:c,pubState:d.value0}])})(To(XD)(u.historyIndex+1)(To(jD)(d.value0)(u)))}}throw new Error("Failed pattern match at Stadium.Core (line 103, column 31 - line 126, column 16): "+[d.constructor.name])})}};return{emitMsg:a(Ct.value),emitMsgCtx:function(s){return a(new gt(s))},readPubState:function(){var c=i.readState();return c.pubState},readPrivState:function(){var c=i.readState();return c.privState},updatePrivState:function(s){return i.updateState(function(c){return WD({pubState:c.pubState,history:c.history,historyIndex:c.historyIndex,privState:s(c.privState)})})}}},t={history:[],historyIndex:0,pubState:n.initPubState,privState:n.initPrivState};return{dispatchers:function(i){return n.dispatchers(e(i))},initState:t,timeTravel:function(i){return gn}}};const ww=n=>()=>{const[e,t]=ke.useState({state:n.initState}),i={updateState:c=>()=>t(u=>(u.state=c(u.state)(),{...u})),readState:()=>e.state},a=n.dispatchers(i);return{state:e.state.pubState,dispatch:a}},qD=(n,e,t)=>{const i=ke.useRef(0),a=ke.useRef(t);return a.current=t,i.current=e(a.current)(t)?i.current:i.current+1,ke.useEffect(()=>n(),[i.current])};var YD=At(Vo(Ho)),KD=fE(),Mw={reflectSymbol:function(){return"index"}},ZD=Bs(Mw)()()(qi),JD=hn(vu),QD=lv(zs),e3=At(gu),Aw=zf(Hf),Tw=TS(su)(mS),t3=Aw(Tw),n3=tb(vb(sS)(Ho)),ip=At(bS(sS)(vS)),r3=hn(Tw),yv={reflectSymbol:function(){return"url"}},i3=HD()(BD(yv)()()()()(zD)),bw={reflectSymbol:function(){return"MsgSetIndex"}},Cw=rw(),Rw=Hs(bw),Pw=gi(sv)()(),Lw={reflectSymbol:function(){return"content"}},Dw=cE()(gi(Pw(yv))()()(Lw)),Iw=pu(Tr),F0=hn(Iw),Uc=hu(Xm(zs)),O0=mT(),k0=mf(pT)(),o3={reflectSymbol:function(){return"pictures"}},a3={reflectSymbol:function(){return"name"}},s3={reflectSymbol:function(){return"gcode"}},l3=Ai(uD(O0(mf(k0(yv)(_a))()(Lw)(jp(pL(O0(mf(mf(k0(o3)(jp(_a)))()(a3)(_a))()(s3)(_a)))))))),u3=At(Vo(Tr)),c3=Vm(qm(Tr)),f3=Aw(Iw),d3=lw(Cw(Rw(Vs(aw))(pi)()())),h3=lE()(),p3={reflectSymbol:function(){return"PubState"}},gf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),m3={to:function(n){return new gf(n)}},v3=function(n){return function(e){return YD(To((function(){var t=KD(_s)(pa);return function(i){return t(ZD(i))}})())(n.value0)(e))}},g3=function(n){return function(e){return vE(JD(Wm(n(e)))(function(t){if(t instanceof ct)return QD(Tf(t.value0));if(t instanceof mt)return e3(gn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 121, column 3 - line 123, column 25): "+[t.constructor.name])}))()}},_3=function(n){var e=PR("/")(n);if(e instanceof gt)return IR(e.value0)(n);if(e instanceof Ct)return"";throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 62, column 3 - line 64, column 18): "+[e.constructor.name])},y3=function(n){var e=function(t){var i=OD(t);return function(a){return function(s){return function(c){var u=FD(i(s))(c);if(u instanceof ct)return t3(n3([u.value0]))(function(){return ip(a)});if(u instanceof mt)return ip(u.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 182, column 21 - line 186, column 22): "+[u.constructor.name])}}}};return _b(r3(e(i3)({url:"index.json"})({url:ID})(n))(function(t){return ip({url:t.url})}))},x3=function(n){return _3(n.absUrl)+("/"+n.relUrl)},S3=cw(uw()(ow()(bw))(Cw(Rw(Vs(sw(m3)))(pi)()()))),E3=(function(){return{index:Cs.value}})(),w3=function(){var e=XA(),t=y3(e);return t.value0},M3=function(n){return{tag:"MsgSetIndex",args:Jt(nd(Dw("")({url:fr,content:mv})))(n.value0)}},A3=function(n){var e=function(i){return F0(Uc(n.readPubState))(function(a){var s=l3(a.index)(Fo.value);return s?u3(gn):c3(f3(Uc(n.emitMsg(new gf(Fo.value))))(function(){return F0(_L({url:i.url}))(function(c){return Uc(n.emitMsg(new gf(new Rs({url:i.url,content:c}))))})}))(function(c){return Uc(n.emitMsg(new gf(new Ps(Tf(c)))))})})},t=d3({emitMsg:n.emitMsg})(S3);return h3({runFetchIndex:g3(e)})(t)},T3=pv()(Pw(Mw))(p3)({index:nd(Dw("")({url:fr,content:mv}))}),b3=Ew({updatePubState:function(n){return function(e){return Km(v3(n)(e))}},dispatchers:A3,initPubState:E3,initPrivState:{},printError:Mr(Ar),encodeJsonPubState:Jt(T3),encodeMsg:M3}),C3=ww(b3);const R3="0.1.3",P3="0.0.19";function hm(){return hm=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},hm.apply(null,arguments)}function L3(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function D3(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var I3=(function(){function n(t){var i=this;this._insertTag=function(a){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(a,s),i.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(D3(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=L3(a);try{s.insertRule(i,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var a;return(a=i.parentNode)==null?void 0:a.removeChild(i)}),this.tags=[],this.ctr=0},n})(),$n="-ms-",Cf="-moz-",It="-webkit-",Uw="comm",xv="rule",Sv="decl",U3="@import",Nw="@keyframes",N3="@layer",F3=Math.abs,rd=String.fromCharCode,O3=Object.assign;function k3(n,e){return Pn(n,0)^45?(((e<<2^Pn(n,0))<<2^Pn(n,1))<<2^Pn(n,2))<<2^Pn(n,3):0}function Fw(n){return n.trim()}function z3(n,e){return(n=e.exec(n))?n[0]:n}function Ut(n,e,t){return n.replace(e,t)}function pm(n,e){return n.indexOf(e)}function Pn(n,e){return n.charCodeAt(e)|0}function Jl(n,e,t){return n.slice(e,t)}function mi(n){return n.length}function Ev(n){return n.length}function Nc(n,e){return e.push(n),n}function B3(n,e){return n.map(e).join("")}var id=1,Ds=1,Ow=0,pr=0,dn=0,Gs="";function od(n,e,t,i,a,s,c){return{value:n,root:e,parent:t,type:i,props:a,children:s,line:id,column:Ds,length:c,return:""}}function bl(n,e){return O3(od("",null,null,"",null,null,0),n,{length:-n.length},e)}function H3(){return dn}function V3(){return dn=pr>0?Pn(Gs,--pr):0,Ds--,dn===10&&(Ds=1,id--),dn}function Er(){return dn=pr<Ow?Pn(Gs,pr++):0,Ds++,dn===10&&(Ds=1,id++),dn}function Ei(){return Pn(Gs,pr)}function _f(){return pr}function yu(n,e){return Jl(Gs,n,e)}function Ql(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kw(n){return id=Ds=1,Ow=mi(Gs=n),pr=0,[]}function zw(n){return Gs="",n}function yf(n){return Fw(yu(pr-1,mm(n===91?n+2:n===40?n+1:n)))}function G3(n){for(;(dn=Ei())&&dn<33;)Er();return Ql(n)>2||Ql(dn)>3?"":" "}function W3(n,e){for(;--e&&Er()&&!(dn<48||dn>102||dn>57&&dn<65||dn>70&&dn<97););return yu(n,_f()+(e<6&&Ei()==32&&Er()==32))}function mm(n){for(;Er();)switch(dn){case n:return pr;case 34:case 39:n!==34&&n!==39&&mm(dn);break;case 40:n===41&&mm(n);break;case 92:Er();break}return pr}function $3(n,e){for(;Er()&&n+dn!==57;)if(n+dn===84&&Ei()===47)break;return"/*"+yu(e,pr-1)+"*"+rd(n===47?n:Er())}function X3(n){for(;!Ql(Ei());)Er();return yu(n,pr)}function j3(n){return zw(xf("",null,null,null,[""],n=kw(n),0,[0],n))}function xf(n,e,t,i,a,s,c,u,d){for(var h=0,p=0,m=c,g=0,S=0,w=0,E=1,y=1,_=1,b=0,M="",R=a,U=s,N=i,I=M;y;)switch(w=b,b=Er()){case 40:if(w!=108&&Pn(I,m-1)==58){pm(I+=Ut(yf(b),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:I+=yf(b);break;case 9:case 10:case 13:case 32:I+=G3(w);break;case 92:I+=W3(_f()-1,7);continue;case 47:switch(Ei()){case 42:case 47:Nc(q3($3(Er(),_f()),e,t),d);break;default:I+="/"}break;case 123*E:u[h++]=mi(I)*_;case 125*E:case 59:case 0:switch(b){case 0:case 125:y=0;case 59+p:_==-1&&(I=Ut(I,/\f/g,"")),S>0&&mi(I)-m&&Nc(S>32?B0(I+";",i,t,m-1):B0(Ut(I," ","")+";",i,t,m-2),d);break;case 59:I+=";";default:if(Nc(N=z0(I,e,t,h,p,a,u,M,R=[],U=[],m),s),b===123)if(p===0)xf(I,e,N,N,R,s,m,u,U);else switch(g===99&&Pn(I,3)===110?100:g){case 100:case 108:case 109:case 115:xf(n,N,N,i&&Nc(z0(n,N,N,0,0,a,u,M,a,R=[],m),U),a,U,m,u,i?R:U);break;default:xf(I,N,N,N,[""],U,0,u,U)}}h=p=S=0,E=_=1,M=I="",m=c;break;case 58:m=1+mi(I),S=w;default:if(E<1){if(b==123)--E;else if(b==125&&E++==0&&V3()==125)continue}switch(I+=rd(b),b*E){case 38:_=p>0?1:(I+="\f",-1);break;case 44:u[h++]=(mi(I)-1)*_,_=1;break;case 64:Ei()===45&&(I+=yf(Er())),g=Ei(),p=m=mi(M=I+=X3(_f())),b++;break;case 45:w===45&&mi(I)==2&&(E=0)}}return s}function z0(n,e,t,i,a,s,c,u,d,h,p){for(var m=a-1,g=a===0?s:[""],S=Ev(g),w=0,E=0,y=0;w<i;++w)for(var _=0,b=Jl(n,m+1,m=F3(E=c[w])),M=n;_<S;++_)(M=Fw(E>0?g[_]+" "+b:Ut(b,/&\f/g,g[_])))&&(d[y++]=M);return od(n,e,t,a===0?xv:u,d,h,p)}function q3(n,e,t){return od(n,e,t,Uw,rd(H3()),Jl(n,2,-2),0)}function B0(n,e,t,i){return od(n,e,t,Sv,Jl(n,0,i),Jl(n,i+1,-1),i)}function Ss(n,e){for(var t="",i=Ev(n),a=0;a<i;a++)t+=e(n[a],a,n,e)||"";return t}function Y3(n,e,t,i){switch(n.type){case N3:if(n.children.length)break;case U3:case Sv:return n.return=n.return||n.value;case Uw:return"";case Nw:return n.return=n.value+"{"+Ss(n.children,i)+"}";case xv:n.value=n.props.join(",")}return mi(t=Ss(n.children,i))?n.return=n.value+"{"+t+"}":""}function K3(n){var e=Ev(n);return function(t,i,a,s){for(var c="",u=0;u<e;u++)c+=n[u](t,i,a,s)||"";return c}}function Z3(n){return function(e){e.root||(e=e.return)&&n(e)}}function Bw(n){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=n(t)),e[t]}}var J3=function(e,t,i){for(var a=0,s=0;a=s,s=Ei(),a===38&&s===12&&(t[i]=1),!Ql(s);)Er();return yu(e,pr)},Q3=function(e,t){var i=-1,a=44;do switch(Ql(a)){case 0:a===38&&Ei()===12&&(t[i]=1),e[i]+=J3(pr-1,t,i);break;case 2:e[i]+=yf(a);break;case 4:if(a===44){e[++i]=Ei()===58?"&\f":"",t[i]=e[i].length;break}default:e[i]+=rd(a)}while(a=Er());return e},eI=function(e,t){return zw(Q3(kw(e),t))},H0=new WeakMap,tI=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,i=e.parent,a=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!H0.get(i))&&!a){H0.set(e,!0);for(var s=[],c=eI(t,s),u=i.props,d=0,h=0;d<c.length;d++)for(var p=0;p<u.length;p++,h++)e.props[h]=s[d]?c[d].replace(/&\f/g,u[p]):u[p]+" "+c[d]}}},nI=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function Hw(n,e){switch(k3(n,e)){case 5103:return It+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return It+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return It+n+Cf+n+$n+n+n;case 6828:case 4268:return It+n+$n+n+n;case 6165:return It+n+$n+"flex-"+n+n;case 5187:return It+n+Ut(n,/(\w+).+(:[^]+)/,It+"box-$1$2"+$n+"flex-$1$2")+n;case 5443:return It+n+$n+"flex-item-"+Ut(n,/flex-|-self/,"")+n;case 4675:return It+n+$n+"flex-line-pack"+Ut(n,/align-content|flex-|-self/,"")+n;case 5548:return It+n+$n+Ut(n,"shrink","negative")+n;case 5292:return It+n+$n+Ut(n,"basis","preferred-size")+n;case 6060:return It+"box-"+Ut(n,"-grow","")+It+n+$n+Ut(n,"grow","positive")+n;case 4554:return It+Ut(n,/([^-])(transform)/g,"$1"+It+"$2")+n;case 6187:return Ut(Ut(Ut(n,/(zoom-|grab)/,It+"$1"),/(image-set)/,It+"$1"),n,"")+n;case 5495:case 3959:return Ut(n,/(image-set\([^]*)/,It+"$1$`$1");case 4968:return Ut(Ut(n,/(.+:)(flex-)?(.*)/,It+"box-pack:$3"+$n+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+It+n+n;case 4095:case 3583:case 4068:case 2532:return Ut(n,/(.+)-inline(.+)/,It+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mi(n)-1-e>6)switch(Pn(n,e+1)){case 109:if(Pn(n,e+4)!==45)break;case 102:return Ut(n,/(.+:)(.+)-([^]+)/,"$1"+It+"$2-$3$1"+Cf+(Pn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~pm(n,"stretch")?Hw(Ut(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(Pn(n,e+1)!==115)break;case 6444:switch(Pn(n,mi(n)-3-(~pm(n,"!important")&&10))){case 107:return Ut(n,":",":"+It)+n;case 101:return Ut(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+It+(Pn(n,14)===45?"inline-":"")+"box$3$1"+It+"$2$3$1"+$n+"$2box$3")+n}break;case 5936:switch(Pn(n,e+11)){case 114:return It+n+$n+Ut(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return It+n+$n+Ut(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return It+n+$n+Ut(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return It+n+$n+n+n}return n}var rI=function(e,t,i,a){if(e.length>-1&&!e.return)switch(e.type){case Sv:e.return=Hw(e.value,e.length);break;case Nw:return Ss([bl(e,{value:Ut(e.value,"@","@"+It)})],a);case xv:if(e.length)return B3(e.props,function(s){switch(z3(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ss([bl(e,{props:[Ut(s,/:(read-\w+)/,":"+Cf+"$1")]})],a);case"::placeholder":return Ss([bl(e,{props:[Ut(s,/:(plac\w+)/,":"+It+"input-$1")]}),bl(e,{props:[Ut(s,/:(plac\w+)/,":"+Cf+"$1")]}),bl(e,{props:[Ut(s,/:(plac\w+)/,$n+"input-$1")]})],a)}return""})}},iI=[rI],oI=function(e){var t=e.key;if(t==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(E){var y=E.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var a=e.stylisPlugins||iI,s={},c,u=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(E){for(var y=E.getAttribute("data-emotion").split(" "),_=1;_<y.length;_++)s[y[_]]=!0;u.push(E)});var d,h=[tI,nI];{var p,m=[Y3,Z3(function(E){p.insert(E)})],g=K3(h.concat(a,m)),S=function(y){return Ss(j3(y),g)};d=function(y,_,b,M){p=b,S(y?y+"{"+_.styles+"}":_.styles),M&&(w.inserted[_.name]=!0)}}var w={key:t,sheet:new I3({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:d};return w.sheet.hydrate(u),w},aI=!0;function sI(n,e,t){var i="";return t.split(" ").forEach(function(a){n[a]!==void 0?e.push(n[a]+";"):a&&(i+=a+" ")}),i}var Vw=function(e,t,i){var a=e.key+"-"+t.name;(i===!1||aI===!1)&&e.registered[a]===void 0&&(e.registered[a]=t.styles)},lI=function(e,t,i){Vw(e,t,i);var a=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+a:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function uI(n){for(var e=0,t,i=0,a=n.length;a>=4;++i,a-=4)t=n.charCodeAt(i)&255|(n.charCodeAt(++i)&255)<<8|(n.charCodeAt(++i)&255)<<16|(n.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(n.charCodeAt(i+2)&255)<<16;case 2:e^=(n.charCodeAt(i+1)&255)<<8;case 1:e^=n.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var cI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fI=/[A-Z]|^ms/g,dI=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Gw=function(e){return e.charCodeAt(1)===45},V0=function(e){return e!=null&&typeof e!="boolean"},op=Bw(function(n){return Gw(n)?n:n.replace(fI,"-$&").toLowerCase()}),G0=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(dI,function(i,a,s){return vi={name:a,styles:s,next:vi},a})}return cI[e]!==1&&!Gw(e)&&typeof t=="number"&&t!==0?t+"px":t};function eu(n,e,t){if(t==null)return"";var i=t;if(i.__emotion_styles!==void 0)return i;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return vi={name:a.name,styles:a.styles,next:vi},a.name;var s=t;if(s.styles!==void 0){var c=s.next;if(c!==void 0)for(;c!==void 0;)vi={name:c.name,styles:c.styles,next:vi},c=c.next;var u=s.styles+";";return u}return hI(n,e,t)}case"function":{if(n!==void 0){var d=vi,h=t(n);return vi=d,eu(n,e,h)}break}}var p=t;if(e==null)return p;var m=e[p];return m!==void 0?m:p}function hI(n,e,t){var i="";if(Array.isArray(t))for(var a=0;a<t.length;a++)i+=eu(n,e,t[a])+";";else for(var s in t){var c=t[s];if(typeof c!="object"){var u=c;e!=null&&e[u]!==void 0?i+=s+"{"+e[u]+"}":V0(u)&&(i+=op(s)+":"+G0(s,u)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var d=0;d<c.length;d++)V0(c[d])&&(i+=op(s)+":"+G0(s,c[d])+";");else{var h=eu(n,e,c);switch(s){case"animation":case"animationName":{i+=op(s)+":"+h+";";break}default:i+=s+"{"+h+"}"}}}return i}var W0=/label:\s*([^\s;{]+)\s*(;|$)/g,vi;function pI(n,e,t){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var i=!0,a="";vi=void 0;var s=n[0];if(s==null||s.raw===void 0)i=!1,a+=eu(t,e,s);else{var c=s;a+=c[0]}for(var u=1;u<n.length;u++)if(a+=eu(t,e,n[u]),i){var d=s;a+=d[u]}W0.lastIndex=0;for(var h="",p;(p=W0.exec(a))!==null;)h+="-"+p[1];var m=uI(a)+h;return{name:m,styles:a,next:vi}}var mI=function(e){return e()},vI=Xp.useInsertionEffect?Xp.useInsertionEffect:!1,gI=vI||mI,Ww=ke.createContext(typeof HTMLElement<"u"?oI({key:"css"}):null);Ww.Provider;var _I=function(e){return ke.forwardRef(function(t,i){var a=ke.useContext(Ww);return e(t,a,i)})},yI=ke.createContext({}),xI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,SI=Bw(function(n){return xI.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),EI=SI,wI=function(e){return e!=="theme"},$0=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?EI:wI},X0=function(e,t,i){var a;if(t){var s=t.shouldForwardProp;a=e.__emotion_forwardProp&&s?function(c){return e.__emotion_forwardProp(c)&&s(c)}:s}return typeof a!="function"&&i&&(a=e.__emotion_forwardProp),a},MI=function(e){var t=e.cache,i=e.serialized,a=e.isStringTag;return Vw(t,i,a),gI(function(){return lI(t,i,a)}),null},AI=function n(e,t){var i=e.__emotion_real===e,a=i&&e.__emotion_base||e,s,c;t!==void 0&&(s=t.label,c=t.target);var u=X0(e,t,i),d=u||$0(a),h=!d("as");return function(){var p=arguments,m=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&m.push("label:"+s+";"),p[0]==null||p[0].raw===void 0)m.push.apply(m,p);else{var g=p[0];m.push(g[0]);for(var S=p.length,w=1;w<S;w++)m.push(p[w],g[w])}var E=_I(function(y,_,b){var M=h&&y.as||a,R="",U=[],N=y;if(y.theme==null){N={};for(var I in y)N[I]=y[I];N.theme=ke.useContext(yI)}typeof y.className=="string"?R=sI(_.registered,U,y.className):y.className!=null&&(R=y.className+" ");var ce=pI(m.concat(U),_.registered,N);R+=_.key+"-"+ce.name,c!==void 0&&(R+=" "+c);var C=h&&u===void 0?$0(M):d,O={};for(var oe in y)h&&oe==="as"||C(oe)&&(O[oe]=y[oe]);return O.className=R,b&&(O.ref=b),ke.createElement(ke.Fragment,null,ke.createElement(MI,{cache:_,serialized:ce,isStringTag:typeof M=="string"}),ke.createElement(M,O))});return E.displayName=s!==void 0?s:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",E.defaultProps=e.defaultProps,E.__emotion_real=E,E.__emotion_base=a,E.__emotion_styles=m,E.__emotion_forwardProp=u,Object.defineProperty(E,"toString",{value:function(){return"."+c}}),E.withComponent=function(y,_){var b=n(y,hm({},t,_,{shouldForwardProp:X0(E,_,!0)}));return b.apply(void 0,m)},E}},TI=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fn=AI.bind(null);TI.forEach(function(n){Fn[n]=Fn(n)});const bI=Fn.div`
    background-color: #1d1f22;
`,CI=Fn.div`
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
`,Fc=({children:n,viewErrors:e,viewInfo:t})=>Qe.jsxs(bI,{children:[Qe.jsx("div",{children:n}),Qe.jsx("div",{children:e}),Qe.jsx("div",{children:t}),Qe.jsxs(CI,{children:[R3," / ",P3]})]}),RI=Fn.div`
    padding: 10px;
    border: 1px solid #fff;
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: #fff;
    opacity: 0.2;
`,PI=({currentLayer:n,totalLayers:e})=>Qe.jsxs(RI,{children:[In(n)," / ",In(e)]}),LI=Fn.div`
    position: relative;

    border: 1px solid #887432;
    width: 800px;
    height: 600px;
    border-radius: 5px;
    overflow: hidden;
`,DI=({children:n})=>Qe.jsx(LI,{children:n});Wx();function j0(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function $w(...n){return e=>{let t=!1;const i=n.map(a=>{const s=j0(a,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let a=0;a<i.length;a++){const s=i[a];typeof s=="function"?s():j0(n[a],null)}}}}function ko(...n){return ke.useCallback($w(...n),n)}function vm(n){const e=II(n),t=ke.forwardRef((i,a)=>{const{children:s,...c}=i,u=ke.Children.toArray(s),d=u.find(NI);if(d){const h=d.props.children,p=u.map(m=>m===d?ke.Children.count(h)>1?ke.Children.only(null):ke.isValidElement(h)?h.props.children:null:m);return Qe.jsx(e,{...c,ref:a,children:ke.isValidElement(h)?ke.cloneElement(h,void 0,p):null})}return Qe.jsx(e,{...c,ref:a,children:s})});return t.displayName=`${n}.Slot`,t}function II(n){const e=ke.forwardRef((t,i)=>{const{children:a,...s}=t;if(ke.isValidElement(a)){const c=OI(a),u=FI(s,a.props);return a.type!==ke.Fragment&&(u.ref=i?$w(i,c):c),ke.cloneElement(a,u)}return ke.Children.count(a)>1?ke.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var UI=Symbol("radix.slottable");function NI(n){return ke.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===UI}function FI(n,e){const t={...e};for(const i in e){const a=n[i],s=e[i];/^on[A-Z]/.test(i)?a&&s?t[i]=(...u)=>{const d=s(...u);return a(...u),d}:a&&(t[i]=a):i==="style"?t[i]={...a,...s}:i==="className"&&(t[i]=[a,s].filter(Boolean).join(" "))}return{...n,...t}}function OI(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var kI=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],xu=kI.reduce((n,e)=>{const t=vm(`Primitive.${e}`),i=ke.forwardRef((a,s)=>{const{asChild:c,...u}=a,d=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),Qe.jsx(d,{...u,ref:s})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function Xw(n,e=[]){let t=[];function i(s,c){const u=ke.createContext(c),d=t.length;t=[...t,c];const h=m=>{const{scope:g,children:S,...w}=m,E=g?.[n]?.[d]||u,y=ke.useMemo(()=>w,Object.values(w));return Qe.jsx(E.Provider,{value:y,children:S})};h.displayName=s+"Provider";function p(m,g){const S=g?.[n]?.[d]||u,w=ke.useContext(S);if(w)return w;if(c!==void 0)return c;throw new Error(`\`${m}\` must be used within \`${s}\``)}return[h,p]}const a=()=>{const s=t.map(c=>ke.createContext(c));return function(u){const d=u?.[n]||s;return ke.useMemo(()=>({[`__scope${n}`]:{...u,[n]:d}}),[u,d])}};return a.scopeName=n,[i,zI(a,...e)]}function zI(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const c=i.reduce((u,{useScope:d,scopeName:h})=>{const m=d(s)[`__scope${h}`];return{...u,...m}},{});return ke.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function BI(n){const e=n+"CollectionProvider",[t,i]=Xw(e),[a,s]=t(e,{collectionRef:{current:null},itemMap:new Map}),c=E=>{const{scope:y,children:_}=E,b=Mo.useRef(null),M=Mo.useRef(new Map).current;return Qe.jsx(a,{scope:y,itemMap:M,collectionRef:b,children:_})};c.displayName=e;const u=n+"CollectionSlot",d=vm(u),h=Mo.forwardRef((E,y)=>{const{scope:_,children:b}=E,M=s(u,_),R=ko(y,M.collectionRef);return Qe.jsx(d,{ref:R,children:b})});h.displayName=u;const p=n+"CollectionItemSlot",m="data-radix-collection-item",g=vm(p),S=Mo.forwardRef((E,y)=>{const{scope:_,children:b,...M}=E,R=Mo.useRef(null),U=ko(y,R),N=s(p,_);return Mo.useEffect(()=>(N.itemMap.set(R,{ref:R,...M}),()=>void N.itemMap.delete(R))),Qe.jsx(g,{[m]:"",ref:U,children:b})});S.displayName=p;function w(E){const y=s(n+"CollectionConsumer",E);return Mo.useCallback(()=>{const b=y.collectionRef.current;if(!b)return[];const M=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(y.itemMap.values()).sort((N,I)=>M.indexOf(N.ref.current)-M.indexOf(I.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:c,Slot:h,ItemSlot:S},w,i]}function ys(n,e,{checkForDefaultPrevented:t=!0}={}){return function(a){if(n?.(a),t===!1||!a.defaultPrevented)return e?.(a)}}var jw=globalThis?.document?ke.useLayoutEffect:()=>{},HI=Xp[" useInsertionEffect ".trim().toString()]||jw;function VI({prop:n,defaultProp:e,onChange:t=()=>{},caller:i}){const[a,s,c]=GI({defaultProp:e,onChange:t}),u=n!==void 0,d=u?n:a;{const p=ke.useRef(n!==void 0);ke.useEffect(()=>{const m=p.current;m!==u&&console.warn(`${i} is changing from ${m?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=u},[u,i])}const h=ke.useCallback(p=>{if(u){const m=WI(p)?p(n):p;m!==n&&c.current?.(m)}else s(p)},[u,n,s,c]);return[d,h]}function GI({defaultProp:n,onChange:e}){const[t,i]=ke.useState(n),a=ke.useRef(t),s=ke.useRef(e);return HI(()=>{s.current=e},[e]),ke.useEffect(()=>{a.current!==t&&(s.current?.(t),a.current=t)},[t,a]),[t,i,s]}function WI(n){return typeof n=="function"}var $I=ke.createContext(void 0);function XI(n){const e=ke.useContext($I);return n||e||"ltr"}function jI(n){const e=ke.useRef({value:n,previous:n});return ke.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}function qI(n){const[e,t]=ke.useState(void 0);return jw(()=>{if(n){t({width:n.offsetWidth,height:n.offsetHeight});const i=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const s=a[0];let c,u;if("borderBoxSize"in s){const d=s.borderBoxSize,h=Array.isArray(d)?d[0]:d;c=h.inlineSize,u=h.blockSize}else c=n.offsetWidth,u=n.offsetHeight;t({width:c,height:u})});return i.observe(n,{box:"border-box"}),()=>i.unobserve(n)}else t(void 0)},[n]),e}function qw(n,[e,t]){return Math.min(t,Math.max(e,n))}var Yw=["PageUp","PageDown"],Kw=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Zw={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Ws="Slider",[gm,YI,KI]=BI(Ws),[Jw,oH]=Xw(Ws,[KI]),[ZI,ad]=Jw(Ws),Qw=ke.forwardRef((n,e)=>{const{name:t,min:i=0,max:a=100,step:s=1,orientation:c="horizontal",disabled:u=!1,minStepsBetweenThumbs:d=0,defaultValue:h=[i],value:p,onValueChange:m=()=>{},onValueCommit:g=()=>{},inverted:S=!1,form:w,...E}=n,y=ke.useRef(new Set),_=ke.useRef(0),M=c==="horizontal"?JI:QI,[R=[],U]=VI({prop:p,defaultProp:h,onChange:oe=>{[...y.current][_.current]?.focus(),m(oe)}}),N=ke.useRef(R);function I(oe){const ne=iU(R,oe);O(oe,ne)}function ce(oe){O(oe,_.current)}function C(){const oe=N.current[_.current];R[_.current]!==oe&&g(R)}function O(oe,ne,{commit:pe}={commit:!1}){const H=lU(s),Q=uU(Math.round((oe-i)/s)*s+i,H),se=qw(Q,[i,a]);U((re=[])=>{const X=nU(re,se,ne);if(sU(X,d*s)){_.current=X.indexOf(se);const ie=String(X)!==String(re);return ie&&pe&&g(X),ie?X:re}else return re})}return Qe.jsx(ZI,{scope:n.__scopeSlider,name:t,disabled:u,min:i,max:a,valueIndexToChangeRef:_,thumbs:y.current,values:R,orientation:c,form:w,children:Qe.jsx(gm.Provider,{scope:n.__scopeSlider,children:Qe.jsx(gm.Slot,{scope:n.__scopeSlider,children:Qe.jsx(M,{"aria-disabled":u,"data-disabled":u?"":void 0,...E,ref:e,onPointerDown:ys(E.onPointerDown,()=>{u||(N.current=R)}),min:i,max:a,inverted:S,onSlideStart:u?void 0:I,onSlideMove:u?void 0:ce,onSlideEnd:u?void 0:C,onHomeKeyDown:()=>!u&&O(i,0,{commit:!0}),onEndKeyDown:()=>!u&&O(a,R.length-1,{commit:!0}),onStepKeyDown:({event:oe,direction:ne})=>{if(!u){const Q=Yw.includes(oe.key)||oe.shiftKey&&Kw.includes(oe.key)?10:1,se=_.current,re=R[se],X=s*Q*ne;O(re+X,se,{commit:!0})}}})})})})});Qw.displayName=Ws;var[eM,tM]=Jw(Ws,{startEdge:"left",endEdge:"right",size:"width",direction:1}),JI=ke.forwardRef((n,e)=>{const{min:t,max:i,dir:a,inverted:s,onSlideStart:c,onSlideMove:u,onSlideEnd:d,onStepKeyDown:h,...p}=n,[m,g]=ke.useState(null),S=ko(e,M=>g(M)),w=ke.useRef(void 0),E=XI(a),y=E==="ltr",_=y&&!s||!y&&s;function b(M){const R=w.current||m.getBoundingClientRect(),U=[0,R.width],I=wv(U,_?[t,i]:[i,t]);return w.current=R,I(M-R.left)}return Qe.jsx(eM,{scope:n.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width",children:Qe.jsx(nM,{dir:E,"data-orientation":"horizontal",...p,ref:S,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:M=>{const R=b(M.clientX);c?.(R)},onSlideMove:M=>{const R=b(M.clientX);u?.(R)},onSlideEnd:()=>{w.current=void 0,d?.()},onStepKeyDown:M=>{const U=Zw[_?"from-left":"from-right"].includes(M.key);h?.({event:M,direction:U?-1:1})}})})}),QI=ke.forwardRef((n,e)=>{const{min:t,max:i,inverted:a,onSlideStart:s,onSlideMove:c,onSlideEnd:u,onStepKeyDown:d,...h}=n,p=ke.useRef(null),m=ko(e,p),g=ke.useRef(void 0),S=!a;function w(E){const y=g.current||p.current.getBoundingClientRect(),_=[0,y.height],M=wv(_,S?[i,t]:[t,i]);return g.current=y,M(E-y.top)}return Qe.jsx(eM,{scope:n.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:Qe.jsx(nM,{"data-orientation":"vertical",...h,ref:m,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:E=>{const y=w(E.clientY);s?.(y)},onSlideMove:E=>{const y=w(E.clientY);c?.(y)},onSlideEnd:()=>{g.current=void 0,u?.()},onStepKeyDown:E=>{const _=Zw[S?"from-bottom":"from-top"].includes(E.key);d?.({event:E,direction:_?-1:1})}})})}),nM=ke.forwardRef((n,e)=>{const{__scopeSlider:t,onSlideStart:i,onSlideMove:a,onSlideEnd:s,onHomeKeyDown:c,onEndKeyDown:u,onStepKeyDown:d,...h}=n,p=ad(Ws,t);return Qe.jsx(xu.span,{...h,ref:e,onKeyDown:ys(n.onKeyDown,m=>{m.key==="Home"?(c(m),m.preventDefault()):m.key==="End"?(u(m),m.preventDefault()):Yw.concat(Kw).includes(m.key)&&(d(m),m.preventDefault())}),onPointerDown:ys(n.onPointerDown,m=>{const g=m.target;g.setPointerCapture(m.pointerId),m.preventDefault(),p.thumbs.has(g)?g.focus():i(m)}),onPointerMove:ys(n.onPointerMove,m=>{m.target.hasPointerCapture(m.pointerId)&&a(m)}),onPointerUp:ys(n.onPointerUp,m=>{const g=m.target;g.hasPointerCapture(m.pointerId)&&(g.releasePointerCapture(m.pointerId),s(m))})})}),rM="SliderTrack",iM=ke.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=ad(rM,t);return Qe.jsx(xu.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...i,ref:e})});iM.displayName=rM;var _m="SliderRange",oM=ke.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=ad(_m,t),s=tM(_m,t),c=ke.useRef(null),u=ko(e,c),d=a.values.length,h=a.values.map(g=>lM(g,a.min,a.max)),p=d>1?Math.min(...h):0,m=100-Math.max(...h);return Qe.jsx(xu.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...i,ref:u,style:{...n.style,[s.startEdge]:p+"%",[s.endEdge]:m+"%"}})});oM.displayName=_m;var ym="SliderThumb",aM=ke.forwardRef((n,e)=>{const t=YI(n.__scopeSlider),[i,a]=ke.useState(null),s=ko(e,u=>a(u)),c=ke.useMemo(()=>i?t().findIndex(u=>u.ref.current===i):-1,[t,i]);return Qe.jsx(eU,{...n,ref:s,index:c})}),eU=ke.forwardRef((n,e)=>{const{__scopeSlider:t,index:i,name:a,...s}=n,c=ad(ym,t),u=tM(ym,t),[d,h]=ke.useState(null),p=ko(e,b=>h(b)),m=d?c.form||!!d.closest("form"):!0,g=qI(d),S=c.values[i],w=S===void 0?0:lM(S,c.min,c.max),E=rU(i,c.values.length),y=g?.[u.size],_=y?oU(y,w,u.direction):0;return ke.useEffect(()=>{if(d)return c.thumbs.add(d),()=>{c.thumbs.delete(d)}},[d,c.thumbs]),Qe.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u.startEdge]:`calc(${w}% + ${_}px)`},children:[Qe.jsx(gm.ItemSlot,{scope:n.__scopeSlider,children:Qe.jsx(xu.span,{role:"slider","aria-label":n["aria-label"]||E,"aria-valuemin":c.min,"aria-valuenow":S,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...s,ref:p,style:S===void 0?{display:"none"}:n.style,onFocus:ys(n.onFocus,()=>{c.valueIndexToChangeRef.current=i})})}),m&&Qe.jsx(sM,{name:a??(c.name?c.name+(c.values.length>1?"[]":""):void 0),form:c.form,value:S},i)]})});aM.displayName=ym;var tU="RadioBubbleInput",sM=ke.forwardRef(({__scopeSlider:n,value:e,...t},i)=>{const a=ke.useRef(null),s=ko(a,i),c=jI(e);return ke.useEffect(()=>{const u=a.current;if(!u)return;const d=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(c!==e&&p){const m=new Event("input",{bubbles:!0});p.call(u,e),u.dispatchEvent(m)}},[c,e]),Qe.jsx(xu.input,{style:{display:"none"},...t,ref:s,defaultValue:e})});sM.displayName=tU;function nU(n=[],e,t){const i=[...n];return i[t]=e,i.sort((a,s)=>a-s)}function lM(n,e,t){const s=100/(t-e)*(n-e);return qw(s,[0,100])}function rU(n,e){return e>2?`Value ${n+1} of ${e}`:e===2?["Minimum","Maximum"][n]:void 0}function iU(n,e){if(n.length===1)return 0;const t=n.map(a=>Math.abs(a-e)),i=Math.min(...t);return t.indexOf(i)}function oU(n,e,t){const i=n/2,s=wv([0,50],[0,i]);return(i-s(e)*t)*t}function aU(n){return n.slice(0,-1).map((e,t)=>n[t+1]-e)}function sU(n,e){if(e>0){const t=aU(n);return Math.min(...t)>=e}return!0}function wv(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(n[1]-n[0]);return e[0]+i*(t-n[0])}}function lU(n){return(String(n).split(".")[1]||"").length}function uU(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}var cU=Qw,fU=iM,dU=oM,hU=aM;const pU=Fn.div`
    position: absolute;
    top: 16px;
    bottom: 16px;
    right: 16px;
    width: 16px;
`,mU=Fn(cU)`
	position: relative;
	display: flex;
    flex-direction: column;
	align-items: center;
	user-select: none;
	touch-action: none;
	width: 16px;
	height: 100%;
`,vU=Fn(fU)`
	background-color: rgba(255, 255, 255, 0.1);
	position: relative;
	flex-grow: 1;
	border-radius: 2px;
	height: 100%;
    width: 2px;
`,gU=Fn(dU)`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 2px;
	height: 100%;
`,_U=Fn(hU)`
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
`,yU=({value:n,onChange:e,min:t,max:i})=>Qe.jsx(pU,{children:Qe.jsxs(mU,{onValueChange:a=>e(Kf(a[0]||0)),orientation:"vertical",defaultValue:[In(n)],max:In(i),min:In(t),step:1,children:[Qe.jsx(vU,{children:Qe.jsx(gU,{})}),Qe.jsx(_U,{"aria-label":"Volume"})]})}),xU=Fn.div`
    opacity: 0.2;
    position: absolute;
    width: 10px;
    right: 40px;
    top: 22px;
    bottom: 22px;
`,SU=Fn.div`
  position: absolute;
  bottom: ${({bottom:n})=>n}%;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
`,EU=Fn.div`
    position: relative;
    
    width: 100%; height: 100%;

`,wU=(n,e,t)=>{const i=[];for(let a=In(n);a<=In(e);a+=In(t))i.push({count:Kf(a),pct:(a-In(n))/(In(e)-In(n))});return i},MU=({min:n,max:e,step:t})=>{const i=wU(n,e,t);return Qe.jsx(xU,{children:Qe.jsx(EU,{children:i.map(({count:a,pct:s})=>Qe.jsx(SU,{bottom:s*100},In(a)))})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="159",Qa={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AU=0,q0=1,TU=2,uM=1,bU=2,Vi=3,zo=0,dr=1,Gi=2,Do=0,Es=1,Y0=2,K0=3,Z0=4,CU=5,ma=100,RU=101,PU=102,J0=103,Q0=104,LU=200,DU=201,IU=202,UU=203,xm=204,Sm=205,NU=206,FU=207,OU=208,kU=209,zU=210,BU=211,HU=212,VU=213,GU=214,WU=0,$U=1,XU=2,Rf=3,jU=4,qU=5,YU=6,KU=7,Mv=0,ZU=1,JU=2,Io=0,QU=1,eN=2,tN=3,nN=4,rN=5,cM=300,Is=301,Us=302,Em=303,wm=304,ld=306,Mm=1e3,ni=1001,Am=1002,Ln=1003,ey=1004,ap=1005,Nr=1006,iN=1007,tu=1008,Uo=1009,oN=1010,aN=1011,Av=1012,fM=1013,Ro=1014,Wi=1015,nu=1016,dM=1017,hM=1018,xa=1020,sN=1021,Fr=1023,lN=1024,uN=1025,Sa=1026,Ns=1027,cN=1028,pM=1029,fN=1030,mM=1031,vM=1033,sp=33776,lp=33777,up=33778,cp=33779,ty=35840,ny=35841,ry=35842,iy=35843,gM=36196,oy=37492,ay=37496,sy=37808,ly=37809,uy=37810,cy=37811,fy=37812,dy=37813,hy=37814,py=37815,my=37816,vy=37817,gy=37818,_y=37819,yy=37820,xy=37821,fp=36492,Sy=36494,Ey=36495,dN=36283,wy=36284,My=36285,Ay=36286,_M=3e3,Ea=3001,hN=3200,pN=3201,yM=0,mN=1,Or="",Dn="srgb",Xi="srgb-linear",Tv="display-p3",ud="display-p3-linear",Pf="linear",qt="srgb",Lf="rec709",Df="p3",ts=7680,Ty=519,vN=512,gN=513,_N=514,xM=515,yN=516,xN=517,SN=518,EN=519,Tm=35044,by="300 es",bm=1035,yi=2e3,ru=2001;class Ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,c=a.length;s<c;s++)a[s].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cy=1234567;const $l=Math.PI/180,iu=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]).toLowerCase()}function Un(n,e,t){return Math.max(e,Math.min(t,n))}function bv(n,e){return(n%e+e)%e}function wN(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function MN(n,e,t){return n!==e?(t-n)/(e-n):0}function Xl(n,e,t){return(1-t)*n+t*e}function AN(n,e,t,i){return Xl(n,e,1-Math.exp(-t*i))}function TN(n,e=1){return e-Math.abs(bv(n,e*2)-e)}function bN(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function CN(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function RN(n,e){return n+Math.floor(Math.random()*(e-n+1))}function PN(n,e){return n+Math.random()*(e-n)}function LN(n){return n*(.5-Math.random())}function DN(n){n!==void 0&&(Cy=n);let e=Cy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function IN(n){return n*$l}function UN(n){return n*iu}function Cm(n){return(n&n-1)===0&&n!==0}function NN(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function If(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function FN(n,e,t,i,a){const s=Math.cos,c=Math.sin,u=s(t/2),d=c(t/2),h=s((e+i)/2),p=c((e+i)/2),m=s((e-i)/2),g=c((e-i)/2),S=s((i-e)/2),w=c((i-e)/2);switch(a){case"XYX":n.set(u*p,d*m,d*g,u*h);break;case"YZY":n.set(d*g,u*p,d*m,u*h);break;case"ZXZ":n.set(d*m,d*g,u*p,u*h);break;case"XZX":n.set(u*p,d*w,d*S,u*h);break;case"YXY":n.set(d*S,u*p,d*w,u*h);break;case"ZYZ":n.set(d*w,d*S,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const SM={DEG2RAD:$l,RAD2DEG:iu,generateUUID:$i,clamp:Un,euclideanModulo:bv,mapLinear:wN,inverseLerp:MN,lerp:Xl,damp:AN,pingpong:TN,smoothstep:bN,smootherstep:CN,randInt:RN,randFloat:PN,randFloatSpread:LN,seededRandom:DN,degToRad:IN,radToDeg:UN,isPowerOfTwo:Cm,ceilPowerOfTwo:NN,floorPowerOfTwo:If,setQuaternionFromProperEuler:FN,normalize:zt,denormalize:_i};class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*i-c*a+e.x,this.y=s*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,i,a,s,c,u,d,h){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h)}set(e,t,i,a,s,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=s,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],m=i[7],g=i[2],S=i[5],w=i[8],E=a[0],y=a[3],_=a[6],b=a[1],M=a[4],R=a[7],U=a[2],N=a[5],I=a[8];return s[0]=c*E+u*b+d*U,s[3]=c*y+u*M+d*N,s[6]=c*_+u*R+d*I,s[1]=h*E+p*b+m*U,s[4]=h*y+p*M+m*N,s[7]=h*_+p*R+m*I,s[2]=g*E+S*b+w*U,s[5]=g*y+S*M+w*N,s[8]=g*_+S*R+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*s*p+i*u*d+a*s*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=p*c-u*h,g=u*d-p*s,S=h*s-c*d,w=t*m+i*g+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=m*E,e[1]=(a*h-p*i)*E,e[2]=(u*i-a*c)*E,e[3]=g*E,e[4]=(p*t-a*d)*E,e[5]=(a*s-u*t)*E,e[6]=S*E,e[7]=(i*d-h*t)*E,e[8]=(c*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,c,u){const d=Math.cos(s),h=Math.sin(s);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(dp.makeScale(e,t)),this}rotate(e){return this.premultiply(dp.makeRotation(-e)),this}translate(e,t){return this.premultiply(dp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dp=new Et;function EM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Uf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ON(){const n=Uf("canvas");return n.style.display="block",n}const Ry={};function jl(n){n in Ry||(Ry[n]=!0,console.warn(n))}const Py=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ly=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oc={[Xi]:{transfer:Pf,primaries:Lf,toReference:n=>n,fromReference:n=>n},[Dn]:{transfer:qt,primaries:Lf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ud]:{transfer:Pf,primaries:Df,toReference:n=>n.applyMatrix3(Ly),fromReference:n=>n.applyMatrix3(Py)},[Tv]:{transfer:qt,primaries:Df,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ly),fromReference:n=>n.applyMatrix3(Py).convertLinearToSRGB()}},kN=new Set([Xi,ud]),Bt={enabled:!0,_workingColorSpace:Xi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!kN.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Oc[e].toReference,a=Oc[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Oc[n].primaries},getTransfer:function(n){return n===Or?Pf:Oc[n].transfer}};function ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hp(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class wM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=Uf("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let c=0;c<s.length;c++)s[c]=ws(s[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zN=0;class MM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zN++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?s.push(pp(a[c].image)):s.push(pp(a[c]))}else s=pp(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function pp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BN=0;class hr extends Ra{constructor(e=hr.DEFAULT_IMAGE,t=hr.DEFAULT_MAPPING,i=ni,a=ni,s=Nr,c=tu,u=Fr,d=Uo,h=hr.DEFAULT_ANISOTROPY,p=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BN++}),this.uuid=$i(),this.name="",this.source=new MM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Ea?Dn:Or),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mm:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Am:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mm:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Am:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dn?Ea:_M}set encoding(e){jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ea?Dn:Or}}hr.DEFAULT_IMAGE=null;hr.DEFAULT_MAPPING=cM;hr.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*s,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*s,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*s,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const d=e.elements,h=d[0],p=d[4],m=d[8],g=d[1],S=d[5],w=d[9],E=d[2],y=d[6],_=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-E)<.01&&Math.abs(w-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+E)<.1&&Math.abs(w+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,R=(S+1)/2,U=(_+1)/2,N=(p+g)/4,I=(m+E)/4,ce=(w+y)/4;return M>R&&M>U?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=N/i,s=I/i):R>U?R<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(R),i=N/a,s=ce/a):U<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(U),i=I/s,a=ce/s),this.set(i,a,s,t),this}let b=Math.sqrt((y-w)*(y-w)+(m-E)*(m-E)+(g-p)*(g-p));return Math.abs(b)<.001&&(b=1),this.x=(y-w)/b,this.y=(m-E)/b,this.z=(g-p)/b,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HN extends Ra{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(jl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ea?Dn:Or),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hr(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new MM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wa extends HN{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class AM extends hr{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class VN extends hr{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,c,u){let d=i[a+0],h=i[a+1],p=i[a+2],m=i[a+3];const g=s[c+0],S=s[c+1],w=s[c+2],E=s[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=g,e[t+1]=S,e[t+2]=w,e[t+3]=E;return}if(m!==E||d!==g||h!==S||p!==w){let y=1-u;const _=d*g+h*S+p*w+m*E,b=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const U=Math.sqrt(M),N=Math.atan2(U,_*b);y=Math.sin(y*N)/U,u=Math.sin(u*N)/U}const R=u*b;if(d=d*y+g*R,h=h*y+S*R,p=p*y+w*R,m=m*y+E*R,y===1-u){const U=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=U,h*=U,p*=U,m*=U}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,s,c){const u=i[a],d=i[a+1],h=i[a+2],p=i[a+3],m=s[c],g=s[c+1],S=s[c+2],w=s[c+3];return e[t]=u*w+p*m+d*S-h*g,e[t+1]=d*w+p*g+h*m-u*S,e[t+2]=h*w+p*S+u*g-d*m,e[t+3]=p*w-u*m-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,s=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(a/2),m=u(s/2),g=d(i/2),S=d(a/2),w=d(s/2);switch(c){case"XYZ":this._x=g*p*m+h*S*w,this._y=h*S*m-g*p*w,this._z=h*p*w+g*S*m,this._w=h*p*m-g*S*w;break;case"YXZ":this._x=g*p*m+h*S*w,this._y=h*S*m-g*p*w,this._z=h*p*w-g*S*m,this._w=h*p*m+g*S*w;break;case"ZXY":this._x=g*p*m-h*S*w,this._y=h*S*m+g*p*w,this._z=h*p*w+g*S*m,this._w=h*p*m-g*S*w;break;case"ZYX":this._x=g*p*m-h*S*w,this._y=h*S*m+g*p*w,this._z=h*p*w-g*S*m,this._w=h*p*m+g*S*w;break;case"YZX":this._x=g*p*m+h*S*w,this._y=h*S*m+g*p*w,this._z=h*p*w-g*S*m,this._w=h*p*m-g*S*w;break;case"XZY":this._x=g*p*m-h*S*w,this._y=h*S*m-g*p*w,this._z=h*p*w+g*S*m,this._w=h*p*m+g*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],m=t[10],g=i+u+m;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(s-h)*S,this._z=(c-a)*S}else if(i>u&&i>m){const S=2*Math.sqrt(1+i-u-m);this._w=(p-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(s+h)/S}else if(u>m){const S=2*Math.sqrt(1+u-i-m);this._w=(s-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+m-i-u);this._w=(c-a)/S,this._x=(s+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-s*d,this._y=a*p+c*d+s*u-i*h,this._z=s*p+c*h+i*d-a*u,this._w=c*p-i*u-a*d-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=s,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*a+t*this._y,this._z=S*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=c*m+this._w*g,this._x=i*m+this._x*g,this._y=a*m+this._y*g,this._z=s*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dy.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,c=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*c,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*c,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*i),p=2*(u*t-s*a),m=2*(s*i-c*t);return this.x=t+d*h+c*m-u*p,this.y=i+d*p+u*h-s*m,this.z=a+d*m+s*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-s*u,this.y=s*c-i*d,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mp.copy(this).projectOnVector(e),this.sub(mp)}reflect(e){return this.sub(mp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mp=new B,Dy=new Ma;class Hr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=s.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Zr):Zr.fromBufferAttribute(s,c),Zr.applyMatrix4(e.matrixWorld),this.expandByPoint(Zr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kc.copy(i.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}const a=e.children;for(let s=0,c=a.length;s<c;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zr),Zr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),zc.subVectors(this.max,Cl),rs.subVectors(e.a,Cl),is.subVectors(e.b,Cl),os.subVectors(e.c,Cl),go.subVectors(is,rs),_o.subVectors(os,is),la.subVectors(rs,os);let t=[0,-go.z,go.y,0,-_o.z,_o.y,0,-la.z,la.y,go.z,0,-go.x,_o.z,0,-_o.x,la.z,0,-la.x,-go.y,go.x,0,-_o.y,_o.x,0,-la.y,la.x,0];return!vp(t,rs,is,os,zc)||(t=[1,0,0,0,1,0,0,0,1],!vp(t,rs,is,os,zc))?!1:(Bc.crossVectors(go,_o),t=[Bc.x,Bc.y,Bc.z],vp(t,rs,is,os,zc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new B,new B,new B,new B,new B,new B,new B,new B],Zr=new B,kc=new Hr,rs=new B,is=new B,os=new B,go=new B,_o=new B,la=new B,Cl=new B,zc=new B,Bc=new B,ua=new B;function vp(n,e,t,i,a){for(let s=0,c=n.length-3;s<=c;s+=3){ua.fromArray(n,s);const u=a.x*Math.abs(ua.x)+a.y*Math.abs(ua.y)+a.z*Math.abs(ua.z),d=e.dot(ua),h=t.dot(ua),p=i.dot(ua);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const GN=new Hr,Rl=new B,gp=new B;class wi{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):GN.setFromPoints(e).getCenter(i);let a=0;for(let s=0,c=e.length;s<c;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rl.subVectors(e,this.center);const t=Rl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Rl,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rl.copy(e.center).add(gp)),this.expandByPoint(Rl.copy(e.center).sub(gp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new B,_p=new B,Hc=new B,yo=new B,yp=new B,Vc=new B,xp=new B;class Cv{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){_p.copy(e).add(t).multiplyScalar(.5),Hc.copy(t).sub(e).normalize(),yo.copy(this.origin).sub(_p);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Hc),u=yo.dot(this.direction),d=-yo.dot(Hc),h=yo.lengthSq(),p=Math.abs(1-c*c);let m,g,S,w;if(p>0)if(m=c*d-u,g=c*u-d,w=s*p,m>=0)if(g>=-w)if(g<=w){const E=1/p;m*=E,g*=E,S=m*(m+c*g+2*u)+g*(c*m+g+2*d)+h}else g=s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;else g=-s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;else g<=-w?(m=Math.max(0,-(-c*s+u)),g=m>0?-s:Math.min(Math.max(-s,-d),s),S=-m*m+g*(g+2*d)+h):g<=w?(m=0,g=Math.min(Math.max(-s,-d),s),S=g*(g+2*d)+h):(m=Math.max(0,-(c*s+u)),g=m>0?s:Math.min(Math.max(-s,-d),s),S=-m*m+g*(g+2*d)+h);else g=c>0?-s:s,m=Math.max(0,-(c*g+u)),S=-m*m+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(_p).addScaledVector(Hc,g),S}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),a=ki.dot(ki)-i*i,s=e.radius*e.radius;if(a>s)return null;const c=Math.sqrt(s-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(s=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||s>a||((s>i||isNaN(i))&&(i=s),(c<a||isNaN(a))&&(a=c),m>=0?(u=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,a,s){yp.subVectors(t,e),Vc.subVectors(i,e),xp.crossVectors(yp,Vc);let c=this.direction.dot(xp),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;yo.subVectors(this.origin,e);const d=u*this.direction.dot(Vc.crossVectors(yo,Vc));if(d<0)return null;const h=u*this.direction.dot(yp.cross(yo));if(h<0||d+h>c)return null;const p=-u*yo.dot(xp);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,i,a,s,c,u,d,h,p,m,g,S,w,E,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h,p,m,g,S,w,E,y)}set(e,t,i,a,s,c,u,d,h,p,m,g,S,w,E,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=a,_[1]=s,_[5]=c,_[9]=u,_[13]=d,_[2]=h,_[6]=p,_[10]=m,_[14]=g,_[3]=S,_[7]=w,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),c=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),h=Math.sin(a),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const g=c*p,S=c*m,w=u*p,E=u*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=S+w*h,t[5]=g-E*h,t[9]=-u*d,t[2]=E-g*h,t[6]=w+S*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,S=d*m,w=h*p,E=h*m;t[0]=g+E*u,t[4]=w*u-S,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=S*u-w,t[6]=E+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,S=d*m,w=h*p,E=h*m;t[0]=g-E*u,t[4]=-c*m,t[8]=w+S*u,t[1]=S+w*u,t[5]=c*p,t[9]=E-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,S=c*m,w=u*p,E=u*m;t[0]=d*p,t[4]=w*h-S,t[8]=g*h+E,t[1]=d*m,t[5]=E*h+g,t[9]=S*h-w,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,S=c*h,w=u*d,E=u*h;t[0]=d*p,t[4]=E-g*m,t[8]=w*m+S,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=S*m+w,t[10]=g-E*m}else if(e.order==="XZY"){const g=c*d,S=c*h,w=u*d,E=u*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=g*m+E,t[5]=c*p,t[9]=S*m-w,t[2]=w*m-S,t[6]=u*p,t[10]=E*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WN,e,$N)}lookAt(e,t,i){const a=this.elements;return yr.subVectors(e,t),yr.lengthSq()===0&&(yr.z=1),yr.normalize(),xo.crossVectors(i,yr),xo.lengthSq()===0&&(Math.abs(i.z)===1?yr.x+=1e-4:yr.z+=1e-4,yr.normalize(),xo.crossVectors(i,yr)),xo.normalize(),Gc.crossVectors(yr,xo),a[0]=xo.x,a[4]=Gc.x,a[8]=yr.x,a[1]=xo.y,a[5]=Gc.y,a[9]=yr.y,a[2]=xo.z,a[6]=Gc.z,a[10]=yr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],m=i[5],g=i[9],S=i[13],w=i[2],E=i[6],y=i[10],_=i[14],b=i[3],M=i[7],R=i[11],U=i[15],N=a[0],I=a[4],ce=a[8],C=a[12],O=a[1],oe=a[5],ne=a[9],pe=a[13],H=a[2],Q=a[6],se=a[10],re=a[14],X=a[3],ie=a[7],$=a[11],P=a[15];return s[0]=c*N+u*O+d*H+h*X,s[4]=c*I+u*oe+d*Q+h*ie,s[8]=c*ce+u*ne+d*se+h*$,s[12]=c*C+u*pe+d*re+h*P,s[1]=p*N+m*O+g*H+S*X,s[5]=p*I+m*oe+g*Q+S*ie,s[9]=p*ce+m*ne+g*se+S*$,s[13]=p*C+m*pe+g*re+S*P,s[2]=w*N+E*O+y*H+_*X,s[6]=w*I+E*oe+y*Q+_*ie,s[10]=w*ce+E*ne+y*se+_*$,s[14]=w*C+E*pe+y*re+_*P,s[3]=b*N+M*O+R*H+U*X,s[7]=b*I+M*oe+R*Q+U*ie,s[11]=b*ce+M*ne+R*se+U*$,s[15]=b*C+M*pe+R*re+U*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],m=e[6],g=e[10],S=e[14],w=e[3],E=e[7],y=e[11],_=e[15];return w*(+s*d*m-a*h*m-s*u*g+i*h*g+a*u*S-i*d*S)+E*(+t*d*S-t*h*g+s*c*g-a*c*S+a*h*p-s*d*p)+y*(+t*h*m-t*u*S-s*c*m+i*c*S+s*u*p-i*h*p)+_*(-a*u*p-t*d*m+t*u*g+a*c*m-i*c*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=e[9],g=e[10],S=e[11],w=e[12],E=e[13],y=e[14],_=e[15],b=m*y*h-E*g*h+E*d*S-u*y*S-m*d*_+u*g*_,M=w*g*h-p*y*h-w*d*S+c*y*S+p*d*_-c*g*_,R=p*E*h-w*m*h+w*u*S-c*E*S-p*u*_+c*m*_,U=w*m*d-p*E*d-w*u*g+c*E*g+p*u*y-c*m*y,N=t*b+i*M+a*R+s*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=b*I,e[1]=(E*g*s-m*y*s-E*a*S+i*y*S+m*a*_-i*g*_)*I,e[2]=(u*y*s-E*d*s+E*a*h-i*y*h-u*a*_+i*d*_)*I,e[3]=(m*d*s-u*g*s-m*a*h+i*g*h+u*a*S-i*d*S)*I,e[4]=M*I,e[5]=(p*y*s-w*g*s+w*a*S-t*y*S-p*a*_+t*g*_)*I,e[6]=(w*d*s-c*y*s-w*a*h+t*y*h+c*a*_-t*d*_)*I,e[7]=(c*g*s-p*d*s+p*a*h-t*g*h-c*a*S+t*d*S)*I,e[8]=R*I,e[9]=(w*m*s-p*E*s-w*i*S+t*E*S+p*i*_-t*m*_)*I,e[10]=(c*E*s-w*u*s+w*i*h-t*E*h-c*i*_+t*u*_)*I,e[11]=(p*u*s-c*m*s-p*i*h+t*m*h+c*i*S-t*u*S)*I,e[12]=U*I,e[13]=(p*E*a-w*m*a+w*i*g-t*E*g-p*i*y+t*m*y)*I,e[14]=(w*u*a-c*E*a-w*i*d+t*E*d+c*i*y-t*u*y)*I,e[15]=(c*m*a-p*u*a+p*i*d-t*m*d-c*i*g+t*u*g)*I,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,c=e.x,u=e.y,d=e.z,h=s*c,p=s*u;return this.set(h*c+i,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+i,p*d-a*c,0,h*d-a*u,p*d+a*c,s*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,c){return this.set(1,i,s,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,c=t._y,u=t._z,d=t._w,h=s+s,p=c+c,m=u+u,g=s*h,S=s*p,w=s*m,E=c*p,y=c*m,_=u*m,b=d*h,M=d*p,R=d*m,U=i.x,N=i.y,I=i.z;return a[0]=(1-(E+_))*U,a[1]=(S+R)*U,a[2]=(w-M)*U,a[3]=0,a[4]=(S-R)*N,a[5]=(1-(g+_))*N,a[6]=(y+b)*N,a[7]=0,a[8]=(w+M)*I,a[9]=(y-b)*I,a[10]=(1-(g+E))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=as.set(a[0],a[1],a[2]).length();const c=as.set(a[4],a[5],a[6]).length(),u=as.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Jr.copy(this);const h=1/s,p=1/c,m=1/u;return Jr.elements[0]*=h,Jr.elements[1]*=h,Jr.elements[2]*=h,Jr.elements[4]*=p,Jr.elements[5]*=p,Jr.elements[6]*=p,Jr.elements[8]*=m,Jr.elements[9]*=m,Jr.elements[10]*=m,t.setFromRotationMatrix(Jr),i.x=s,i.y=c,i.z=u,this}makePerspective(e,t,i,a,s,c,u=yi){const d=this.elements,h=2*s/(t-e),p=2*s/(i-a),m=(t+e)/(t-e),g=(i+a)/(i-a);let S,w;if(u===yi)S=-(c+s)/(c-s),w=-2*c*s/(c-s);else if(u===ru)S=-c/(c-s),w=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,s,c,u=yi){const d=this.elements,h=1/(t-e),p=1/(i-a),m=1/(c-s),g=(t+e)*h,S=(i+a)*p;let w,E;if(u===yi)w=(c+s)*m,E=-2*m;else if(u===ru)w=s*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const as=new B,Jr=new $t,WN=new B(0,0,0),$N=new B(1,1,1),xo=new B,Gc=new B,yr=new B,Iy=new $t,Uy=new Ma;class Su{constructor(e=0,t=0,i=0,a=Su.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],m=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Un(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Un(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iy,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uy.setFromEuler(this),this.setFromQuaternion(Uy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Su.DEFAULT_ORDER="XYZ";class TM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XN=0;const Ny=new B,ss=new Ma,zi=new $t,Wc=new B,Pl=new B,jN=new B,qN=new Ma,Fy=new B(1,0,0),Oy=new B(0,1,0),ky=new B(0,0,1),YN={type:"added"},KN={type:"removed"};class er extends Ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XN++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=er.DEFAULT_UP.clone();const e=new B,t=new Su,i=new Ma,a=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new Et}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=er.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new TM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Fy,e)}rotateY(e){return this.rotateOnAxis(Oy,e)}rotateZ(e){return this.rotateOnAxis(ky,e)}translateOnAxis(e,t){return Ny.copy(e).applyQuaternion(this.quaternion),this.position.add(Ny.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fy,e)}translateY(e){return this.translateOnAxis(Oy,e)}translateZ(e){return this.translateOnAxis(ky,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wc.copy(e):Wc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Pl,Wc,this.up):zi.lookAt(Wc,Pl,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),ss.setFromRotationMatrix(zi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(YN)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(KN)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,e,jN),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,qN,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,c=a.length;s<c;s++){const u=a[s];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];s(e.shapes,m)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(s(e.materials,this.material[d]));a.material=u}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(s(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),g=c(e.skeletons),S=c(e.animations),w=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),w.length>0&&(i.nodes=w)}return i.object=a,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}er.DEFAULT_UP=new B(0,1,0);er.DEFAULT_MATRIX_AUTO_UPDATE=!0;er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qr=new B,Bi=new B,Sp=new B,Hi=new B,ls=new B,us=new B,zy=new B,Ep=new B,wp=new B,Mp=new B;let $c=!1;class ti{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Qr.subVectors(e,t),a.cross(Qr);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Qr.subVectors(a,t),Bi.subVectors(i,t),Sp.subVectors(e,t);const c=Qr.dot(Qr),u=Qr.dot(Bi),d=Qr.dot(Sp),h=Bi.dot(Bi),p=Bi.dot(Sp),m=c*h-u*u;if(m===0)return s.set(-2,-1,-1);const g=1/m,S=(h*d-u*p)*g,w=(c*p-u*d)*g;return s.set(1-S-w,w,S)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Hi),Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getUV(e,t,i,a,s,c,u,d){return $c===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$c=!0),this.getInterpolation(e,t,i,a,s,c,u,d)}static getInterpolation(e,t,i,a,s,c,u,d){return this.getBarycoord(e,t,i,a,Hi),d.setScalar(0),d.addScaledVector(s,Hi.x),d.addScaledVector(c,Hi.y),d.addScaledVector(u,Hi.z),d}static isFrontFacing(e,t,i,a){return Qr.subVectors(i,t),Bi.subVectors(e,t),Qr.cross(Bi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qr.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),Qr.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return $c===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$c=!0),ti.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let c,u;ls.subVectors(a,i),us.subVectors(s,i),Ep.subVectors(e,i);const d=ls.dot(Ep),h=us.dot(Ep);if(d<=0&&h<=0)return t.copy(i);wp.subVectors(e,a);const p=ls.dot(wp),m=us.dot(wp);if(p>=0&&m<=p)return t.copy(a);const g=d*m-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(ls,c);Mp.subVectors(e,s);const S=ls.dot(Mp),w=us.dot(Mp);if(w>=0&&S<=w)return t.copy(s);const E=S*h-d*w;if(E<=0&&h>=0&&w<=0)return u=h/(h-w),t.copy(i).addScaledVector(us,u);const y=p*w-S*m;if(y<=0&&m-p>=0&&S-w>=0)return zy.subVectors(s,a),u=(m-p)/(m-p+(S-w)),t.copy(a).addScaledVector(zy,u);const _=1/(y+E+g);return c=E*_,u=g*_,t.copy(i).addScaledVector(ls,c).addScaledVector(us,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},So={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function Ap(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Bt.workingColorSpace){if(e=bv(e,1),t=Un(t,0,1),i=Un(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,c=2*i-s;this.r=Ap(c,s,e+1/3),this.g=Ap(c,s,e),this.b=Ap(c,s,e-1/3)}return Bt.toWorkingColorSpace(this,a),this}setStyle(e,t=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=bM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=hp(e.r),this.g=hp(e.g),this.b=hp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Bt.fromWorkingColorSpace(Gn.copy(this),e),Math.round(Un(Gn.r*255,0,255))*65536+Math.round(Un(Gn.g*255,0,255))*256+Math.round(Un(Gn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Gn.copy(this),t);const i=Gn.r,a=Gn.g,s=Gn.b,c=Math.max(i,a,s),u=Math.min(i,a,s);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:d=(a-s)/m+(a<s?6:0);break;case a:d=(s-i)/m+2;break;case s:d=(i-a)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Dn){Bt.fromWorkingColorSpace(Gn.copy(this),e);const t=Gn.r,i=Gn.g,a=Gn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(So),this.setHSL(So.h+e,So.s+t,So.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(So),e.getHSL(Xc);const i=Xl(So.h,Xc.h,t),a=Xl(So.s,Xc.s,t),s=Xl(So.l,Xc.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new nt;nt.NAMES=bM;let ZN=0;class $s extends Ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZN++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Es,this.side=zo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xm,this.blendDst=Sm,this.blendEquation=ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Rf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ty,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==zo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xm&&(i.blendSrc=this.blendSrc),this.blendDst!==Sm&&(i.blendDst=this.blendDst),this.blendEquation!==ma&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ty&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}if(t){const s=a(e.textures),c=a(e.images);s.length>0&&(i.textures=s),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class CM extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new B,jc=new ht;class wr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jc.fromBufferAttribute(this,t),jc.applyMatrix3(e),this.setXY(t,jc.x,jc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tm&&(e.usage=this.usage),e}}class RM extends wr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class PM extends wr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends wr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let JN=0;const Ur=new $t,Tp=new er,cs=new B,xr=new Hr,Ll=new Hr,Mn=new B;class jn extends Ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JN++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(EM(e)?PM:RM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ur.makeRotationFromQuaternion(e),this.applyMatrix4(Ur),this}rotateX(e){return Ur.makeRotationX(e),this.applyMatrix4(Ur),this}rotateY(e){return Ur.makeRotationY(e),this.applyMatrix4(Ur),this}rotateZ(e){return Ur.makeRotationZ(e),this.applyMatrix4(Ur),this}translate(e,t,i){return Ur.makeTranslation(e,t,i),this.applyMatrix4(Ur),this}scale(e,t,i){return Ur.makeScale(e,t,i),this.applyMatrix4(Ur),this}lookAt(e){return Tp.lookAt(e),Tp.updateMatrix(),this.applyMatrix4(Tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];xr.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,xr.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,xr.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(xr.min),this.boundingBox.expandByPoint(xr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(xr.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const u=t[s];Ll.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(xr.min,Ll.min),xr.expandByPoint(Mn),Mn.addVectors(xr.max,Ll.max),xr.expandByPoint(Mn)):(xr.expandByPoint(Ll.min),xr.expandByPoint(Ll.max))}xr.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)Mn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Mn));if(t)for(let s=0,c=t.length;s<c;s++){const u=t[s],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Mn.fromBufferAttribute(u,h),d&&(cs.fromBufferAttribute(e,h),Mn.add(cs)),a=Math.max(a,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,c=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wr(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let O=0;O<u;O++)h[O]=new B,p[O]=new B;const m=new B,g=new B,S=new B,w=new ht,E=new ht,y=new ht,_=new B,b=new B;function M(O,oe,ne){m.fromArray(a,O*3),g.fromArray(a,oe*3),S.fromArray(a,ne*3),w.fromArray(c,O*2),E.fromArray(c,oe*2),y.fromArray(c,ne*2),g.sub(m),S.sub(m),E.sub(w),y.sub(w);const pe=1/(E.x*y.y-y.x*E.y);isFinite(pe)&&(_.copy(g).multiplyScalar(y.y).addScaledVector(S,-E.y).multiplyScalar(pe),b.copy(S).multiplyScalar(E.x).addScaledVector(g,-y.x).multiplyScalar(pe),h[O].add(_),h[oe].add(_),h[ne].add(_),p[O].add(b),p[oe].add(b),p[ne].add(b))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let O=0,oe=R.length;O<oe;++O){const ne=R[O],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)M(i[Q+0],i[Q+1],i[Q+2])}const U=new B,N=new B,I=new B,ce=new B;function C(O){I.fromArray(s,O*3),ce.copy(I);const oe=h[O];U.copy(oe),U.sub(I.multiplyScalar(I.dot(oe))).normalize(),N.crossVectors(ce,oe);const pe=N.dot(p[O])<0?-1:1;d[O*4]=U.x,d[O*4+1]=U.y,d[O*4+2]=U.z,d[O*4+3]=pe}for(let O=0,oe=R.length;O<oe;++O){const ne=R[O],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)C(i[Q+0]),C(i[Q+1]),C(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const a=new B,s=new B,c=new B,u=new B,d=new B,h=new B,p=new B,m=new B;if(e)for(let g=0,S=e.count;g<S;g+=3){const w=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,w),s.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),p.subVectors(c,s),m.subVectors(a,s),p.cross(m),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),u.add(p),d.add(p),h.add(p),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,s),m.subVectors(a,s),p.cross(m),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(d.length*p);let S=0,w=0;for(let E=0,y=d.length;E<y;E++){u.isInterleavedBufferAttribute?S=d[E]*u.data.stride+u.offset:S=d[E]*p;for(let _=0;_<p;_++)g[w++]=h[S++]}return new wr(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,i);t.setAttribute(u,h)}const s=this.morphAttributes;for(const u in s){const d=[],h=s[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],S=e(g,i);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,g=h.length;m<g;m++){const S=h[m];p.push(S.toJSON(e.data))}p.length>0&&(a[d]=p,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],m=s[h];for(let g=0,S=m.length;g<S;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const By=new $t,ca=new Cv,qc=new wi,Hy=new B,fs=new B,ds=new B,hs=new B,bp=new B,Yc=new B,Kc=new ht,Zc=new ht,Jc=new ht,Vy=new B,Gy=new B,Wy=new B,Qc=new B,ef=new B;class ri extends er{constructor(e=new jn,t=new CM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(s&&u){Yc.set(0,0,0);for(let d=0,h=s.length;d<h;d++){const p=u[d],m=s[d];p!==0&&(bp.fromBufferAttribute(m,e),c?Yc.addScaledVector(bp,p):Yc.addScaledVector(bp.sub(t),p))}t.add(Yc)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(s),ca.copy(e.ray).recast(e.near),!(qc.containsPoint(ca.origin)===!1&&(ca.intersectSphere(qc,Hy)===null||ca.origin.distanceToSquared(Hy)>(e.far-e.near)**2))&&(By.copy(s).invert(),ca.copy(e.ray).applyMatrix4(By),!(i.boundingBox!==null&&ca.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}_computeIntersections(e,t,i){let a;const s=this.geometry,c=this.material,u=s.index,d=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,g=s.groups,S=s.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,E=g.length;w<E;w++){const y=g[w],_=c[y.materialIndex],b=Math.max(y.start,S.start),M=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let R=b,U=M;R<U;R+=3){const N=u.getX(R),I=u.getX(R+1),ce=u.getX(R+2);a=tf(this,_,e,i,h,p,m,N,I,ce),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(u.count,S.start+S.count);for(let y=w,_=E;y<_;y+=3){const b=u.getX(y),M=u.getX(y+1),R=u.getX(y+2);a=tf(this,c,e,i,h,p,m,b,M,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let w=0,E=g.length;w<E;w++){const y=g[w],_=c[y.materialIndex],b=Math.max(y.start,S.start),M=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=b,U=M;R<U;R+=3){const N=R,I=R+1,ce=R+2;a=tf(this,_,e,i,h,p,m,N,I,ce),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=w,_=E;y<_;y+=3){const b=y,M=y+1,R=y+2;a=tf(this,c,e,i,h,p,m,b,M,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function QN(n,e,t,i,a,s,c,u){let d;if(e.side===dr?d=i.intersectTriangle(c,s,a,!0,u):d=i.intersectTriangle(a,s,c,e.side===zo,u),d===null)return null;ef.copy(u),ef.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(ef);return h<t.near||h>t.far?null:{distance:h,point:ef.clone(),object:n}}function tf(n,e,t,i,a,s,c,u,d,h){n.getVertexPosition(u,fs),n.getVertexPosition(d,ds),n.getVertexPosition(h,hs);const p=QN(n,e,t,i,fs,ds,hs,Qc);if(p){a&&(Kc.fromBufferAttribute(a,u),Zc.fromBufferAttribute(a,d),Jc.fromBufferAttribute(a,h),p.uv=ti.getInterpolation(Qc,fs,ds,hs,Kc,Zc,Jc,new ht)),s&&(Kc.fromBufferAttribute(s,u),Zc.fromBufferAttribute(s,d),Jc.fromBufferAttribute(s,h),p.uv1=ti.getInterpolation(Qc,fs,ds,hs,Kc,Zc,Jc,new ht),p.uv2=p.uv1),c&&(Vy.fromBufferAttribute(c,u),Gy.fromBufferAttribute(c,d),Wy.fromBufferAttribute(c,h),p.normal=ti.getInterpolation(Qc,fs,ds,hs,Vy,Gy,Wy,new B),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:h,normal:new B,materialIndex:0};ti.getNormal(fs,ds,hs,m.normal),p.face=m}return p}class Eu extends jn{constructor(e=1,t=1,i=1,a=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:c};const u=this;a=Math.floor(a),s=Math.floor(s),c=Math.floor(c);const d=[],h=[],p=[],m=[];let g=0,S=0;w("z","y","x",-1,-1,i,t,e,c,s,0),w("z","y","x",1,-1,i,t,-e,c,s,1),w("x","z","y",1,1,e,i,t,a,c,2),w("x","z","y",1,-1,e,i,-t,a,c,3),w("x","y","z",1,-1,e,t,i,a,s,4),w("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(d),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(m,2));function w(E,y,_,b,M,R,U,N,I,ce,C){const O=R/I,oe=U/ce,ne=R/2,pe=U/2,H=N/2,Q=I+1,se=ce+1;let re=0,X=0;const ie=new B;for(let $=0;$<se;$++){const P=$*oe-pe;for(let k=0;k<Q;k++){const W=k*O-ne;ie[E]=W*b,ie[y]=P*M,ie[_]=H,h.push(ie.x,ie.y,ie.z),ie[E]=0,ie[y]=0,ie[_]=N>0?1:-1,p.push(ie.x,ie.y,ie.z),m.push(k/I),m.push(1-$/ce),re+=1}}for(let $=0;$<ce;$++)for(let P=0;P<I;P++){const k=g+P+Q*$,W=g+P+Q*($+1),Y=g+(P+1)+Q*($+1),ee=g+(P+1)+Q*$;d.push(k,W,ee),d.push(W,Y,ee),X+=6}u.addGroup(S,X,C),S+=X,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Qn(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const a in i)e[a]=i[a]}return e}function eF(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function LM(n){return n.getRenderTarget()===null?n.outputColorSpace:Bt.workingColorSpace}const Rv={clone:Fs,merge:Qn};var tF=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nF=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bo extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tF,this.fragmentShader=nF,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=eF(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class DM extends er{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sr extends DM{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=iu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return iu*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($l*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;s+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class rF extends er{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Sr(ps,ms,e,t);a.layers=this.layers,this.add(a);const s=new Sr(ps,ms,e,t);s.layers=this.layers,this.add(s);const c=new Sr(ps,ms,e,t);c.layers=this.layers,this.add(c);const u=new Sr(ps,ms,e,t);u.layers=this.layers,this.add(u);const d=new Sr(ps,ms,e,t);d.layers=this.layers,this.add(d);const h=new Sr(ps,ms,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,c,u,d]=t;for(const h of t)this.remove(h);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,u,d,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,d),e.setRenderTarget(i,4,a),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(m,g,S),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class IM extends hr{constructor(e,t,i,a,s,c,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,i,a,s,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iF extends wa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(jl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ea?Dn:Or),this.texture=new IM(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Eu(5,5,5),s=new Bo({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dr,blending:Do});s.uniforms.tEquirect.value=t;const c=new ri(a,s),u=t.minFilter;return t.minFilter===tu&&(t.minFilter=Nr),new rF(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(s)}}const Cp=new B,oF=new B,aF=new Et;class Ao{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Cp.subVectors(i,t).cross(oF.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cp),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||aF.getNormalMatrix(e),a=this.coplanarPoint(Cp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fa=new wi,nf=new B;class cd{constructor(e=new Ao,t=new Ao,i=new Ao,a=new Ao,s=new Ao,c=new Ao){this.planes=[e,t,i,a,s,c]}set(e,t,i,a,s,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(s),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){const i=this.planes,a=e.elements,s=a[0],c=a[1],u=a[2],d=a[3],h=a[4],p=a[5],m=a[6],g=a[7],S=a[8],w=a[9],E=a[10],y=a[11],_=a[12],b=a[13],M=a[14],R=a[15];if(i[0].setComponents(d-s,g-h,y-S,R-_).normalize(),i[1].setComponents(d+s,g+h,y+S,R+_).normalize(),i[2].setComponents(d+c,g+p,y+w,R+b).normalize(),i[3].setComponents(d-c,g-p,y-w,R-b).normalize(),i[4].setComponents(d-u,g-m,y-E,R-M).normalize(),t===yi)i[5].setComponents(d+u,g+m,y+E,R+M).normalize();else if(t===ru)i[5].setComponents(u,m,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fa)}intersectsSprite(e){return fa.center.set(0,0,0),fa.radius=.7071067811865476,fa.applyMatrix4(e.matrixWorld),this.intersectsSphere(fa)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(nf.x=a.normal.x>0?e.max.x:e.min.x,nf.y=a.normal.y>0?e.max.y:e.min.y,nf.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(nf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function UM(){let n=null,e=!1,t=null,i=null;function a(s,c){t(s,c),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sF(n,e){const t=e.isWebGL2,i=new WeakMap;function a(h,p){const m=h.array,g=h.usage,S=m.byteLength,w=n.createBuffer();n.bindBuffer(p,w),n.bufferData(p,m,g),h.onUploadCallback();let E;if(m instanceof Float32Array)E=n.FLOAT;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)E=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=n.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=n.SHORT;else if(m instanceof Uint32Array)E=n.UNSIGNED_INT;else if(m instanceof Int32Array)E=n.INT;else if(m instanceof Int8Array)E=n.BYTE;else if(m instanceof Uint8Array)E=n.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:w,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,p,m){const g=p.array,S=p._updateRange,w=p.updateRanges;if(n.bindBuffer(m,h),S.count===-1&&w.length===0&&n.bufferSubData(m,0,g),w.length!==0){for(let E=0,y=w.length;E<y;E++){const _=w[E];t?n.bufferSubData(m,_.start*g.BYTES_PER_ELEMENT,g,_.start,_.count):n.bufferSubData(m,_.start*g.BYTES_PER_ELEMENT,g.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}S.count!==-1&&(t?n.bufferSubData(m,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count):n.bufferSubData(m,S.offset*g.BYTES_PER_ELEMENT,g.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(n.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const g=i.get(h);(!g||g.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);if(m===void 0)i.set(h,a(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:c,remove:u,update:d}}class Pv extends jn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,c=t/2,u=Math.floor(i),d=Math.floor(a),h=u+1,p=d+1,m=e/u,g=t/d,S=[],w=[],E=[],y=[];for(let _=0;_<p;_++){const b=_*g-c;for(let M=0;M<h;M++){const R=M*m-s;w.push(R,-b,0),E.push(0,0,1),y.push(M/u),y.push(1-_/d)}}for(let _=0;_<d;_++)for(let b=0;b<u;b++){const M=b+h*_,R=b+h*(_+1),U=b+1+h*(_+1),N=b+1+h*_;S.push(M,R,N),S.push(R,U,N)}this.setIndex(S),this.setAttribute("position",new ln(w,3)),this.setAttribute("normal",new ln(E,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pv(e.width,e.height,e.widthSegments,e.heightSegments)}}var lF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uF=`#ifdef USE_ALPHAHASH
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
#endif`,cF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dF=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pF=`#ifdef USE_AOMAP
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
#endif`,mF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vF=`#ifdef USE_BATCHING
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
#endif`,gF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_F=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xF=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SF=`#ifdef USE_IRIDESCENCE
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
#endif`,EF=`#ifdef USE_BUMPMAP
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
#endif`,wF=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,PF=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,LF=`#define PI 3.141592653589793
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
} // validated`,DF=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IF=`vec3 transformedNormal = objectNormal;
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
#endif`,UF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kF="gl_FragColor = linearToOutputTexel( gl_FragColor );",zF=`
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
}`,BF=`#ifdef USE_ENVMAP
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
#endif`,HF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VF=`#ifdef USE_ENVMAP
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
#endif`,GF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WF=`#ifdef USE_ENVMAP
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
#endif`,$F=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YF=`#ifdef USE_GRADIENTMAP
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
}`,KF=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ZF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eO=`uniform bool receiveShadow;
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
#endif`,tO=`#ifdef USE_ENVMAP
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
#endif`,nO=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rO=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oO=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aO=`PhysicalMaterial material;
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
#endif`,sO=`struct PhysicalMaterial {
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
}`,lO=`
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
#endif`,uO=`#if defined( RE_IndirectDiffuse )
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
#endif`,cO=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fO=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dO=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hO=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pO=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mO=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vO=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gO=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_O=`#if defined( USE_POINTS_UV )
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
#endif`,yO=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xO=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SO=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EO=`#ifdef USE_MORPHNORMALS
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
#endif`,wO=`#ifdef USE_MORPHTARGETS
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
#endif`,MO=`#ifdef USE_MORPHTARGETS
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
#endif`,AO=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TO=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RO=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PO=`#ifdef USE_NORMALMAP
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
#endif`,LO=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DO=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IO=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UO=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NO=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FO=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OO=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kO=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zO=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BO=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HO=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VO=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GO=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WO=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$O=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XO=`float getShadowMask() {
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
}`,jO=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qO=`#ifdef USE_SKINNING
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
#endif`,YO=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KO=`#ifdef USE_SKINNING
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
#endif`,ZO=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JO=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QO=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ek=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tk=`#ifdef USE_TRANSMISSION
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
#endif`,nk=`#ifdef USE_TRANSMISSION
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
#endif`,rk=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ik=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ok=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ak=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sk=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lk=`uniform sampler2D t2D;
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
}`,uk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ck=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dk=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hk=`#include <common>
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
}`,pk=`#if DEPTH_PACKING == 3200
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
}`,mk=`#define DISTANCE
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
}`,vk=`#define DISTANCE
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
}`,gk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_k=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yk=`uniform float scale;
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
}`,xk=`uniform vec3 diffuse;
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
}`,Sk=`#include <common>
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
}`,Ek=`uniform vec3 diffuse;
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
}`,wk=`#define LAMBERT
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
}`,Mk=`#define LAMBERT
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
}`,Ak=`#define MATCAP
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
}`,Tk=`#define MATCAP
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
}`,bk=`#define NORMAL
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
}`,Ck=`#define NORMAL
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
}`,Rk=`#define PHONG
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
}`,Pk=`#define PHONG
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
}`,Lk=`#define STANDARD
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
}`,Dk=`#define STANDARD
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
}`,Ik=`#define TOON
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
}`,Uk=`#define TOON
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
}`,Nk=`uniform float size;
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
}`,Fk=`uniform vec3 diffuse;
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
}`,Ok=`#include <common>
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
}`,kk=`uniform vec3 color;
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
}`,zk=`uniform float rotation;
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
}`,Bk=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:lF,alphahash_pars_fragment:uF,alphamap_fragment:cF,alphamap_pars_fragment:fF,alphatest_fragment:dF,alphatest_pars_fragment:hF,aomap_fragment:pF,aomap_pars_fragment:mF,batching_pars_vertex:vF,batching_vertex:gF,begin_vertex:_F,beginnormal_vertex:yF,bsdfs:xF,iridescence_fragment:SF,bumpmap_pars_fragment:EF,clipping_planes_fragment:wF,clipping_planes_pars_fragment:MF,clipping_planes_pars_vertex:AF,clipping_planes_vertex:TF,color_fragment:bF,color_pars_fragment:CF,color_pars_vertex:RF,color_vertex:PF,common:LF,cube_uv_reflection_fragment:DF,defaultnormal_vertex:IF,displacementmap_pars_vertex:UF,displacementmap_vertex:NF,emissivemap_fragment:FF,emissivemap_pars_fragment:OF,colorspace_fragment:kF,colorspace_pars_fragment:zF,envmap_fragment:BF,envmap_common_pars_fragment:HF,envmap_pars_fragment:VF,envmap_pars_vertex:GF,envmap_physical_pars_fragment:tO,envmap_vertex:WF,fog_vertex:$F,fog_pars_vertex:XF,fog_fragment:jF,fog_pars_fragment:qF,gradientmap_pars_fragment:YF,lightmap_fragment:KF,lightmap_pars_fragment:ZF,lights_lambert_fragment:JF,lights_lambert_pars_fragment:QF,lights_pars_begin:eO,lights_toon_fragment:nO,lights_toon_pars_fragment:rO,lights_phong_fragment:iO,lights_phong_pars_fragment:oO,lights_physical_fragment:aO,lights_physical_pars_fragment:sO,lights_fragment_begin:lO,lights_fragment_maps:uO,lights_fragment_end:cO,logdepthbuf_fragment:fO,logdepthbuf_pars_fragment:dO,logdepthbuf_pars_vertex:hO,logdepthbuf_vertex:pO,map_fragment:mO,map_pars_fragment:vO,map_particle_fragment:gO,map_particle_pars_fragment:_O,metalnessmap_fragment:yO,metalnessmap_pars_fragment:xO,morphcolor_vertex:SO,morphnormal_vertex:EO,morphtarget_pars_vertex:wO,morphtarget_vertex:MO,normal_fragment_begin:AO,normal_fragment_maps:TO,normal_pars_fragment:bO,normal_pars_vertex:CO,normal_vertex:RO,normalmap_pars_fragment:PO,clearcoat_normal_fragment_begin:LO,clearcoat_normal_fragment_maps:DO,clearcoat_pars_fragment:IO,iridescence_pars_fragment:UO,opaque_fragment:NO,packing:FO,premultiplied_alpha_fragment:OO,project_vertex:kO,dithering_fragment:zO,dithering_pars_fragment:BO,roughnessmap_fragment:HO,roughnessmap_pars_fragment:VO,shadowmap_pars_fragment:GO,shadowmap_pars_vertex:WO,shadowmap_vertex:$O,shadowmask_pars_fragment:XO,skinbase_vertex:jO,skinning_pars_vertex:qO,skinning_vertex:YO,skinnormal_vertex:KO,specularmap_fragment:ZO,specularmap_pars_fragment:JO,tonemapping_fragment:QO,tonemapping_pars_fragment:ek,transmission_fragment:tk,transmission_pars_fragment:nk,uv_pars_fragment:rk,uv_pars_vertex:ik,uv_vertex:ok,worldpos_vertex:ak,background_vert:sk,background_frag:lk,backgroundCube_vert:uk,backgroundCube_frag:ck,cube_vert:fk,cube_frag:dk,depth_vert:hk,depth_frag:pk,distanceRGBA_vert:mk,distanceRGBA_frag:vk,equirect_vert:gk,equirect_frag:_k,linedashed_vert:yk,linedashed_frag:xk,meshbasic_vert:Sk,meshbasic_frag:Ek,meshlambert_vert:wk,meshlambert_frag:Mk,meshmatcap_vert:Ak,meshmatcap_frag:Tk,meshnormal_vert:bk,meshnormal_frag:Ck,meshphong_vert:Rk,meshphong_frag:Pk,meshphysical_vert:Lk,meshphysical_frag:Dk,meshtoon_vert:Ik,meshtoon_frag:Uk,points_vert:Nk,points_frag:Fk,shadow_vert:Ok,shadow_frag:kk,sprite_vert:zk,sprite_frag:Bk},Fe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},cr={basic:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Qn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Qn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Qn([Fe.points,Fe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Qn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Qn([Fe.common,Fe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Qn([Fe.sprite,Fe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Qn([Fe.common,Fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Qn([Fe.lights,Fe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};cr.physical={uniforms:Qn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const rf={r:0,b:0,g:0};function Hk(n,e,t,i,a,s,c){const u=new nt(0);let d=s===!0?0:1,h,p,m=null,g=0,S=null;function w(y,_){let b=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?E(u,d):M&&M.isColor&&(E(M,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ld)?(p===void 0&&(p=new ri(new Eu(1,1,1),new Bo({name:"BackgroundCubeMaterial",uniforms:Fs(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Bt.getTransfer(M.colorSpace)!==qt,(m!==M||g!==M.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,m=M,g=M.version,S=n.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ri(new Pv(2,2),new Bo({name:"BackgroundMaterial",uniforms:Fs(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:zo,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Bt.getTransfer(M.colorSpace)!==qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(m!==M||g!==M.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,m=M,g=M.version,S=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function E(y,_){y.getRGB(rf,LM(n)),i.buffers.color.setClear(rf.r,rf.g,rf.b,_,c)}return{getClearColor:function(){return u},setClearColor:function(y,_=1){u.set(y),d=_,E(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(y){d=y,E(u,d)},render:w}}function Vk(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||s!==null,u={},d=y(null);let h=d,p=!1;function m(H,Q,se,re,X){let ie=!1;if(c){const $=E(re,se,Q);h!==$&&(h=$,S(h.object)),ie=_(H,re,se,X),ie&&b(H,re,se,X)}else{const $=Q.wireframe===!0;(h.geometry!==re.id||h.program!==se.id||h.wireframe!==$)&&(h.geometry=re.id,h.program=se.id,h.wireframe=$,ie=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(ie||p)&&(p=!1,ce(H,Q,se,re),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function g(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function S(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function w(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function E(H,Q,se){const re=se.wireframe===!0;let X=u[H.id];X===void 0&&(X={},u[H.id]=X);let ie=X[Q.id];ie===void 0&&(ie={},X[Q.id]=ie);let $=ie[re];return $===void 0&&($=y(g()),ie[re]=$),$}function y(H){const Q=[],se=[],re=[];for(let X=0;X<a;X++)Q[X]=0,se[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:se,attributeDivisors:re,object:H,attributes:{},index:null}}function _(H,Q,se,re){const X=h.attributes,ie=Q.attributes;let $=0;const P=se.getAttributes();for(const k in P)if(P[k].location>=0){const Y=X[k];let ee=ie[k];if(ee===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),Y===void 0||Y.attribute!==ee||ee&&Y.data!==ee.data)return!0;$++}return h.attributesNum!==$||h.index!==re}function b(H,Q,se,re){const X={},ie=Q.attributes;let $=0;const P=se.getAttributes();for(const k in P)if(P[k].location>=0){let Y=ie[k];Y===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor));const ee={};ee.attribute=Y,Y&&Y.data&&(ee.data=Y.data),X[k]=ee,$++}h.attributes=X,h.attributesNum=$,h.index=re}function M(){const H=h.newAttributes;for(let Q=0,se=H.length;Q<se;Q++)H[Q]=0}function R(H){U(H,0)}function U(H,Q){const se=h.newAttributes,re=h.enabledAttributes,X=h.attributeDivisors;se[H]=1,re[H]===0&&(n.enableVertexAttribArray(H),re[H]=1),X[H]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Q),X[H]=Q)}function N(){const H=h.newAttributes,Q=h.enabledAttributes;for(let se=0,re=Q.length;se<re;se++)Q[se]!==H[se]&&(n.disableVertexAttribArray(se),Q[se]=0)}function I(H,Q,se,re,X,ie,$){$===!0?n.vertexAttribIPointer(H,Q,se,X,ie):n.vertexAttribPointer(H,Q,se,re,X,ie)}function ce(H,Q,se,re){if(i.isWebGL2===!1&&(H.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=re.attributes,ie=se.getAttributes(),$=Q.defaultAttributeValues;for(const P in ie){const k=ie[P];if(k.location>=0){let W=X[P];if(W===void 0&&(P==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),P==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),W!==void 0){const Y=W.normalized,ee=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const _e=Z.buffer,ve=Z.type,be=Z.bytesPerElement,Oe=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===fM);if(W.isInterleavedBufferAttribute){const ze=W.data,j=ze.stride,Dt=W.offset;if(ze.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)U(k.location+Ve,ze.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)R(k.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Ve=0;Ve<k.locationSize;Ve++)I(k.location+Ve,ee/k.locationSize,ve,Y,j*be,(Dt+ee/k.locationSize*Ve)*be,Oe)}else{if(W.isInstancedBufferAttribute){for(let ze=0;ze<k.locationSize;ze++)U(k.location+ze,W.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ze=0;ze<k.locationSize;ze++)R(k.location+ze);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ze=0;ze<k.locationSize;ze++)I(k.location+ze,ee/k.locationSize,ve,Y,ee*be,ee/k.locationSize*ze*be,Oe)}}else if($!==void 0){const Y=$[P];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(k.location,Y);break;case 3:n.vertexAttrib3fv(k.location,Y);break;case 4:n.vertexAttrib4fv(k.location,Y);break;default:n.vertexAttrib1fv(k.location,Y)}}}}N()}function C(){ne();for(const H in u){const Q=u[H];for(const se in Q){const re=Q[se];for(const X in re)w(re[X].object),delete re[X];delete Q[se]}delete u[H]}}function O(H){if(u[H.id]===void 0)return;const Q=u[H.id];for(const se in Q){const re=Q[se];for(const X in re)w(re[X].object),delete re[X];delete Q[se]}delete u[H.id]}function oe(H){for(const Q in u){const se=u[Q];if(se[H.id]===void 0)continue;const re=se[H.id];for(const X in re)w(re[X].object),delete re[X];delete se[H.id]}}function ne(){pe(),p=!0,h!==d&&(h=d,S(h.object))}function pe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:m,reset:ne,resetDefaultState:pe,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:oe,initAttributes:M,enableAttribute:R,disableUnusedAttributes:N}}function Gk(n,e,t,i){const a=i.isWebGL2;let s;function c(p){s=p}function u(p,m){n.drawArrays(s,p,m),t.update(m,s,1)}function d(p,m,g){if(g===0)return;let S,w;if(a)S=n,w="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[w](s,p,m,g),t.update(m,s,g)}function h(p,m,g){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<g;w++)this.render(p[w],m[w]);else{S.multiDrawArraysWEBGL(s,p,0,m,0,g);let w=0;for(let E=0;E<g;E++)w+=m[E];t.update(w,s,1)}}this.setMode=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function Wk(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=s(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),w=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),E=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,R=c||e.has("OES_texture_float"),U=M&&R,N=c?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:s,precision:u,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:w,maxAttributes:E,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:U,maxSamples:N}}function $k(n){const e=this;let t=null,i=0,a=!1,s=!1;const c=new Ao,u=new Et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const S=m.length!==0||g||i!==0||a;return a=g,i=m.length,S},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,S){const w=m.clippingPlanes,E=m.clipIntersection,y=m.clipShadows,_=n.get(m);if(!a||w===null||w.length===0||s&&!y)s?p(null):h();else{const b=s?0:i,M=b*4;let R=_.clippingState||null;d.value=R,R=p(w,g,M,S);for(let U=0;U!==M;++U)R[U]=t[U];_.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,g,S,w){const E=m!==null?m.length:0;let y=null;if(E!==0){if(y=d.value,w!==!0||y===null){const _=S+E*4,b=g.matrixWorldInverse;u.getNormalMatrix(b),(y===null||y.length<_)&&(y=new Float32Array(_));for(let M=0,R=S;M!==E;++M,R+=4)c.copy(m[M]).applyMatrix4(b,u),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function Xk(n){let e=new WeakMap;function t(c,u){return u===Em?c.mapping=Is:u===wm&&(c.mapping=Us),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Em||u===wm)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new iF(d.height/2);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jk extends DM{constructor(e=-1,t=1,i=1,a=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,c=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,c=s+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,$y=[.125,.215,.35,.446,.526,.582],va=20,Rp=new jk,Xy=new nt;let Pp=null,Lp=0,Dp=0;const ha=(1+Math.sqrt(5))/2,vs=1/ha,jy=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ha,vs),new B(0,ha,-vs),new B(vs,0,ha),new B(-vs,0,ha),new B(ha,vs,0),new B(-ha,vs,0)];class qy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Pp=this._renderer.getRenderTarget(),Lp=this._renderer.getActiveCubeFace(),Dp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ky(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pp,Lp,Dp),e.scissorTest=!1,of(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pp=this._renderer.getRenderTarget(),Lp=this._renderer.getActiveCubeFace(),Dp=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nr,minFilter:Nr,generateMipmaps:!1,type:nu,format:Fr,colorSpace:Xi,depthBuffer:!1},a=Yy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yy(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qk(s)),this._blurMaterial=Yk(s,e,t)}return a}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,Rp)}_sceneToCubeUV(e,t,i,a){const u=new Sr(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(Xy),p.toneMapping=Io,p.autoClear=!1;const S=new CM({name:"PMREM.Background",side:dr,depthWrite:!1,depthTest:!1}),w=new ri(new Eu,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(Xy),E=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(u.up.set(0,d[_],0),u.lookAt(h[_],0,0)):b===1?(u.up.set(0,0,d[_]),u.lookAt(0,h[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,h[_]));const M=this._cubeSize;of(a,b*M,_>2?M:0,M,M),p.setRenderTarget(a),E&&p.render(w,u),p.render(e,u)}w.geometry.dispose(),w.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Is||e.mapping===Us;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ky());const s=a?this._cubemapMaterial:this._equirectMaterial,c=new ri(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const d=this._cubeSize;of(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Rp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=jy[(a-1)%jy.length];this._blur(e,a-1,a,s,c)}t.autoClear=i}_blur(e,t,i,a,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",s),this._halfBlur(c,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new ri(this._lodPlanes[a],h),g=h.uniforms,S=this._sizeLods[i]-1,w=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*va-1),E=s/w,y=isFinite(s)?1+Math.floor(p*E):va;y>va&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${va}`);const _=[];let b=0;for(let I=0;I<va;++I){const ce=I/E,C=Math.exp(-ce*ce/2);_.push(C),I===0?b+=C:I<y&&(b+=2*C)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=_,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=w,g.mipInt.value=M-i;const R=this._sizeLods[a],U=3*R*(a>M-xs?a-M+xs:0),N=4*(this._cubeSize-R);of(t,U,N,3*R,2*R),d.setRenderTarget(t),d.render(m,Rp)}}function qk(n){const e=[],t=[],i=[];let a=n;const s=n-xs+1+$y.length;for(let c=0;c<s;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>n-xs?d=$y[c-n+xs-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],S=6,w=6,E=3,y=2,_=1,b=new Float32Array(E*w*S),M=new Float32Array(y*w*S),R=new Float32Array(_*w*S);for(let N=0;N<S;N++){const I=N%3*2/3-1,ce=N>2?0:-1,C=[I,ce,0,I+2/3,ce,0,I+2/3,ce+1,0,I,ce,0,I+2/3,ce+1,0,I,ce+1,0];b.set(C,E*w*N),M.set(g,y*w*N);const O=[N,N,N,N,N,N];R.set(O,_*w*N)}const U=new jn;U.setAttribute("position",new wr(b,E)),U.setAttribute("uv",new wr(M,y)),U.setAttribute("faceIndex",new wr(R,_)),e.push(U),a>xs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yy(n,e,t){const i=new wa(n,e,t);return i.texture.mapping=ld,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function of(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Yk(n,e,t){const i=new Float32Array(va),a=new B(0,1,0);return new Bo({name:"SphericalGaussianBlur",defines:{n:va,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Lv(),fragmentShader:`

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
		`,blending:Do,depthTest:!1,depthWrite:!1})}function Ky(){return new Bo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lv(),fragmentShader:`

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
		`,blending:Do,depthTest:!1,depthWrite:!1})}function Zy(){return new Bo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Do,depthTest:!1,depthWrite:!1})}function Lv(){return`

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
	`}function Kk(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===Em||d===wm,p=d===Is||d===Us;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=e.get(u);return t===null&&(t=new qy(n)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),e.set(u,m),m.texture}else{if(e.has(u))return e.get(u).texture;{const m=u.image;if(h&&m&&m.height>0||p&&m&&a(m)){t===null&&(t=new qy(n));const g=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",s),g.texture}else return null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function s(u){const d=u.target;d.removeEventListener("dispose",s);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Zk(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Jk(n,e,t,i){const a={},s=new WeakMap;function c(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);for(const w in g.morphAttributes){const E=g.morphAttributes[w];for(let y=0,_=E.length;y<_;y++)e.remove(E[y])}g.removeEventListener("dispose",c),delete a[g.id];const S=s.get(g);S&&(e.remove(S),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const w in g)e.update(g[w],n.ARRAY_BUFFER);const S=m.morphAttributes;for(const w in S){const E=S[w];for(let y=0,_=E.length;y<_;y++)e.update(E[y],n.ARRAY_BUFFER)}}function h(m){const g=[],S=m.index,w=m.attributes.position;let E=0;if(S!==null){const b=S.array;E=S.version;for(let M=0,R=b.length;M<R;M+=3){const U=b[M+0],N=b[M+1],I=b[M+2];g.push(U,N,N,I,I,U)}}else if(w!==void 0){const b=w.array;E=w.version;for(let M=0,R=b.length/3-1;M<R;M+=3){const U=M+0,N=M+1,I=M+2;g.push(U,N,N,I,I,U)}}else return;const y=new(EM(g)?PM:RM)(g,1);y.version=E;const _=s.get(m);_&&e.remove(_),s.set(m,y)}function p(m){const g=s.get(m);if(g){const S=m.index;S!==null&&g.version<S.version&&h(m)}else h(m);return s.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function Qk(n,e,t,i){const a=i.isWebGL2;let s;function c(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function p(S,w){n.drawElements(s,w,u,S*d),t.update(w,s,1)}function m(S,w,E){if(E===0)return;let y,_;if(a)y=n,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,w,u,S*d,E),t.update(w,s,E)}function g(S,w,E){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<E;_++)this.render(S[_]/d,w[_]);else{y.multiDrawElementsWEBGL(s,w,0,u,S,0,E);let _=0;for(let b=0;b<E;b++)_+=w[b];t.update(_,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function ez(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(s/3);break;case n.LINES:t.lines+=u*(s/2);break;case n.LINE_STRIP:t.lines+=u*(s-1);break;case n.LINE_LOOP:t.lines+=u*s;break;case n.POINTS:t.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function tz(n,e){return n[0]-e[0]}function nz(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rz(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,c=new Ht,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function d(h,p,m){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const w=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,E=w!==void 0?w.length:0;let y=s.get(p);if(y===void 0||y.count!==E){let Q=function(){pe.dispose(),s.delete(p),p.removeEventListener("dispose",Q)};var S=Q;y!==void 0&&y.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,U=p.morphAttributes.color!==void 0,N=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],ce=p.morphAttributes.color||[];let C=0;M===!0&&(C=1),R===!0&&(C=2),U===!0&&(C=3);let O=p.attributes.position.count*C,oe=1;O>e.maxTextureSize&&(oe=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const ne=new Float32Array(O*oe*4*E),pe=new AM(ne,O,oe,E);pe.type=Wi,pe.needsUpdate=!0;const H=C*4;for(let se=0;se<E;se++){const re=N[se],X=I[se],ie=ce[se],$=O*oe*4*se;for(let P=0;P<re.count;P++){const k=P*H;M===!0&&(c.fromBufferAttribute(re,P),ne[$+k+0]=c.x,ne[$+k+1]=c.y,ne[$+k+2]=c.z,ne[$+k+3]=0),R===!0&&(c.fromBufferAttribute(X,P),ne[$+k+4]=c.x,ne[$+k+5]=c.y,ne[$+k+6]=c.z,ne[$+k+7]=0),U===!0&&(c.fromBufferAttribute(ie,P),ne[$+k+8]=c.x,ne[$+k+9]=c.y,ne[$+k+10]=c.z,ne[$+k+11]=ie.itemSize===4?c.w:1)}}y={count:E,texture:pe,size:new ht(O,oe)},s.set(p,y),p.addEventListener("dispose",Q)}let _=0;for(let M=0;M<g.length;M++)_+=g[M];const b=p.morphTargetsRelative?1:1-_;m.getUniforms().setValue(n,"morphTargetBaseInfluence",b),m.getUniforms().setValue(n,"morphTargetInfluences",g),m.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),m.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const w=g===void 0?0:g.length;let E=i[p.id];if(E===void 0||E.length!==w){E=[];for(let R=0;R<w;R++)E[R]=[R,0];i[p.id]=E}for(let R=0;R<w;R++){const U=E[R];U[0]=R,U[1]=g[R]}E.sort(nz);for(let R=0;R<8;R++)R<w&&E[R][1]?(u[R][0]=E[R][0],u[R][1]=E[R][1]):(u[R][0]=Number.MAX_SAFE_INTEGER,u[R][1]=0);u.sort(tz);const y=p.morphAttributes.position,_=p.morphAttributes.normal;let b=0;for(let R=0;R<8;R++){const U=u[R],N=U[0],I=U[1];N!==Number.MAX_SAFE_INTEGER&&I?(y&&p.getAttribute("morphTarget"+R)!==y[N]&&p.setAttribute("morphTarget"+R,y[N]),_&&p.getAttribute("morphNormal"+R)!==_[N]&&p.setAttribute("morphNormal"+R,_[N]),a[R]=I,b+=I):(y&&p.hasAttribute("morphTarget"+R)===!0&&p.deleteAttribute("morphTarget"+R),_&&p.hasAttribute("morphNormal"+R)===!0&&p.deleteAttribute("morphNormal"+R),a[R]=0)}const M=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(n,"morphTargetBaseInfluence",M),m.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:d}}function iz(n,e,t,i){let a=new WeakMap;function s(d){const h=i.render.frame,p=d.geometry,m=e.get(d,p);if(a.get(m)!==h&&(e.update(m),a.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return m}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:c}}class NM extends hr{constructor(e,t,i,a,s,c,u,d,h,p){if(p=p!==void 0?p:Sa,p!==Sa&&p!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Sa&&(i=Ro),i===void 0&&p===Ns&&(i=xa),super(null,a,s,c,u,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Ln,this.minFilter=d!==void 0?d:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const FM=new hr,OM=new NM(1,1);OM.compareFunction=xM;const kM=new AM,zM=new VN,BM=new IM,Jy=[],Qy=[],ex=new Float32Array(16),tx=new Float32Array(9),nx=new Float32Array(4);function Xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Jy[a];if(s===void 0&&(s=new Float32Array(a),Jy[a]=s),e!==0){i.toArray(s,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(s,u)}return s}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fd(n,e){let t=Qy[e];t===void 0&&(t=new Int32Array(e),Qy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oz(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function az(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function sz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function lz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function uz(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;nx.set(i),n.uniformMatrix2fv(this.addr,!1,nx),yn(t,i)}}function cz(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;tx.set(i),n.uniformMatrix3fv(this.addr,!1,tx),yn(t,i)}}function fz(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;ex.set(i),n.uniformMatrix4fv(this.addr,!1,ex),yn(t,i)}}function dz(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function pz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function mz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function vz(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function _z(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function yz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function xz(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?OM:FM;t.setTexture2D(e||s,a)}function Sz(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||zM,a)}function Ez(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||BM,a)}function wz(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||kM,a)}function Mz(n){switch(n){case 5126:return oz;case 35664:return az;case 35665:return sz;case 35666:return lz;case 35674:return uz;case 35675:return cz;case 35676:return fz;case 5124:case 35670:return dz;case 35667:case 35671:return hz;case 35668:case 35672:return pz;case 35669:case 35673:return mz;case 5125:return vz;case 36294:return gz;case 36295:return _z;case 36296:return yz;case 35678:case 36198:case 36298:case 36306:case 35682:return xz;case 35679:case 36299:case 36307:return Sz;case 35680:case 36300:case 36308:case 36293:return Ez;case 36289:case 36303:case 36311:case 36292:return wz}}function Az(n,e){n.uniform1fv(this.addr,e)}function Tz(n,e){const t=Xs(e,this.size,2);n.uniform2fv(this.addr,t)}function bz(n,e){const t=Xs(e,this.size,3);n.uniform3fv(this.addr,t)}function Cz(n,e){const t=Xs(e,this.size,4);n.uniform4fv(this.addr,t)}function Rz(n,e){const t=Xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Pz(n,e){const t=Xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lz(n,e){const t=Xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dz(n,e){n.uniform1iv(this.addr,e)}function Iz(n,e){n.uniform2iv(this.addr,e)}function Uz(n,e){n.uniform3iv(this.addr,e)}function Nz(n,e){n.uniform4iv(this.addr,e)}function Fz(n,e){n.uniform1uiv(this.addr,e)}function Oz(n,e){n.uniform2uiv(this.addr,e)}function kz(n,e){n.uniform3uiv(this.addr,e)}function zz(n,e){n.uniform4uiv(this.addr,e)}function Bz(n,e,t){const i=this.cache,a=e.length,s=fd(t,a);_n(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||FM,s[c])}function Hz(n,e,t){const i=this.cache,a=e.length,s=fd(t,a);_n(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||zM,s[c])}function Vz(n,e,t){const i=this.cache,a=e.length,s=fd(t,a);_n(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||BM,s[c])}function Gz(n,e,t){const i=this.cache,a=e.length,s=fd(t,a);_n(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||kM,s[c])}function Wz(n){switch(n){case 5126:return Az;case 35664:return Tz;case 35665:return bz;case 35666:return Cz;case 35674:return Rz;case 35675:return Pz;case 35676:return Lz;case 5124:case 35670:return Dz;case 35667:case 35671:return Iz;case 35668:case 35672:return Uz;case 35669:case 35673:return Nz;case 5125:return Fz;case 36294:return Oz;case 36295:return kz;case 36296:return zz;case 35678:case 36198:case 36298:case 36306:case 35682:return Bz;case 35679:case 36299:case 36307:return Hz;case 35680:case 36300:case 36308:case 36293:return Vz;case 36289:case 36303:case 36311:case 36292:return Gz}}class $z{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mz(t.type)}}class Xz{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wz(t.type)}}class jz{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,c=a.length;s!==c;++s){const u=a[s];u.setValue(e,t[u.id],i)}}}const Ip=/(\w+)(\])?(\[|\.)?/g;function rx(n,e){n.seq.push(e),n.map[e.id]=e}function qz(n,e,t){const i=n.name,a=i.length;for(Ip.lastIndex=0;;){const s=Ip.exec(i),c=Ip.lastIndex;let u=s[1];const d=s[2]==="]",h=s[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){rx(t,h===void 0?new $z(u,n,e):new Xz(u,n,e));break}else{let m=t.map[u];m===void 0&&(m=new jz(u),rx(t,m)),t=m}}}class Sf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);qz(s,c,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,c=t.length;s!==c;++s){const u=t[s],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function ix(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Yz=37297;let Kz=0;function Zz(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=a;c<s;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function Jz(n){const e=Bt.getPrimaries(Bt.workingColorSpace),t=Bt.getPrimaries(n);let i;switch(e===t?i="":e===Df&&t===Lf?i="LinearDisplayP3ToLinearSRGB":e===Lf&&t===Df&&(i="LinearSRGBToLinearDisplayP3"),n){case Xi:case ud:return[i,"LinearTransferOETF"];case Dn:case Tv:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ox(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Zz(n.getShaderSource(e),c)}else return a}function Qz(n,e){const t=Jz(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function eB(n,e){let t;switch(e){case QU:t="Linear";break;case eN:t="Reinhard";break;case tN:t="OptimizedCineon";break;case nN:t="ACESFilmic";break;case rN:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tB(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zl).join(`
`)}function nB(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rB(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),c=s.name;let u=1;s.type===n.FLOAT_MAT2&&(u=2),s.type===n.FLOAT_MAT3&&(u=3),s.type===n.FLOAT_MAT4&&(u=4),t[c]={type:s.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function zl(n){return n!==""}function ax(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iB=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rm(n){return n.replace(iB,aB)}const oB=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aB(n,e){let t=xt[e];if(t===void 0){const i=oB.get(e);if(i!==void 0)t=xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rm(t)}const sB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(n){return n.replace(sB,lB)}function lB(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function ux(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uB(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bU?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function cB(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Is:case Us:e="ENVMAP_TYPE_CUBE";break;case ld:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fB(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function dB(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mv:e="ENVMAP_BLENDING_MULTIPLY";break;case ZU:e="ENVMAP_BLENDING_MIX";break;case JU:e="ENVMAP_BLENDING_ADD";break}return e}function hB(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pB(n,e,t,i){const a=n.getContext(),s=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=uB(t),h=cB(t),p=fB(t),m=dB(t),g=hB(t),S=t.isWebGL2?"":tB(t),w=nB(s),E=a.createProgram();let y,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(zl).join(`
`),y.length>0&&(y+=`
`),_=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(zl).join(`
`),_.length>0&&(_+=`
`)):(y=[ux(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),_=[S,ux(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Io?"#define TONE_MAPPING":"",t.toneMapping!==Io?xt.tonemapping_pars_fragment:"",t.toneMapping!==Io?eB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Qz("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zl).join(`
`)),c=Rm(c),c=ax(c,t),c=sx(c,t),u=Rm(u),u=ax(u,t),u=sx(u,t),c=lx(c),u=lx(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===by?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===by?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=b+y+c,R=b+_+u,U=ix(a,a.VERTEX_SHADER,M),N=ix(a,a.FRAGMENT_SHADER,R);a.attachShader(E,U),a.attachShader(E,N),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function I(oe){if(n.debug.checkShaderErrors){const ne=a.getProgramInfoLog(E).trim(),pe=a.getShaderInfoLog(U).trim(),H=a.getShaderInfoLog(N).trim();let Q=!0,se=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,E,U,N);else{const re=ox(a,U,"vertex"),X=ox(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+re+`
`+X)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(pe===""||H==="")&&(se=!1);se&&(oe.diagnostics={runnable:Q,programLog:ne,vertexShader:{log:pe,prefix:y},fragmentShader:{log:H,prefix:_}})}a.deleteShader(U),a.deleteShader(N),ce=new Sf(a,E),C=rB(a,E)}let ce;this.getUniforms=function(){return ce===void 0&&I(this),ce};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(E,Yz)),O},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kz++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=N,this}let mB=0;class vB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gB(e),t.set(e,i)),i}}class gB{constructor(e){this.id=mB++,this.code=e,this.usedTimes=0}}function _B(n,e,t,i,a,s,c){const u=new TM,d=new vB,h=[],p=a.isWebGL2,m=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return C===0?"uv":`uv${C}`}function y(C,O,oe,ne,pe){const H=ne.fog,Q=pe.geometry,se=C.isMeshStandardMaterial?ne.environment:null,re=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),X=re&&re.mapping===ld?re.image.height:null,ie=w[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const $=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,P=$!==void 0?$.length:0;let k=0;Q.morphAttributes.position!==void 0&&(k=1),Q.morphAttributes.normal!==void 0&&(k=2),Q.morphAttributes.color!==void 0&&(k=3);let W,Y,ee,Z;if(ie){const xn=cr[ie];W=xn.vertexShader,Y=xn.fragmentShader}else W=C.vertexShader,Y=C.fragmentShader,d.update(C),ee=d.getVertexShaderID(C),Z=d.getFragmentShaderID(C);const _e=n.getRenderTarget(),ve=pe.isInstancedMesh===!0,be=pe.isBatchedMesh===!0,Oe=!!C.map,ze=!!C.matcap,j=!!re,Dt=!!C.aoMap,Ve=!!C.lightMap,le=!!C.bumpMap,ue=!!C.normalMap,xe=!!C.displacementMap,ge=!!C.emissiveMap,Me=!!C.metalnessMap,we=!!C.roughnessMap,Ie=C.anisotropy>0,Ze=C.clearcoat>0,D=C.iridescence>0,T=C.sheen>0,q=C.transmission>0,Ae=Ie&&!!C.anisotropyMap,ye=Ze&&!!C.clearcoatMap,Ce=Ze&&!!C.clearcoatNormalMap,Ye=Ze&&!!C.clearcoatRoughnessMap,De=D&&!!C.iridescenceMap,He=D&&!!C.iridescenceThicknessMap,lt=T&&!!C.sheenColorMap,Tt=T&&!!C.sheenRoughnessMap,Le=!!C.specularMap,Ft=!!C.specularColorMap,ft=!!C.specularIntensityMap,st=q&&!!C.transmissionMap,tt=q&&!!C.thicknessMap,$e=!!C.gradientMap,_t=!!C.alphaMap,V=C.alphaTest>0,Be=!!C.alphaHash,Re=!!C.extensions,me=!!Q.attributes.uv1,Ue=!!Q.attributes.uv2,ot=!!Q.attributes.uv3;let wt=Io;return C.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(wt=n.toneMapping),{isWebGL2:p,shaderID:ie,shaderType:C.type,shaderName:C.name,vertexShader:W,fragmentShader:Y,defines:C.defines,customVertexShaderID:ee,customFragmentShaderID:Z,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:be,instancing:ve,instancingColor:ve&&pe.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Xi,map:Oe,matcap:ze,envMap:j,envMapMode:j&&re.mapping,envMapCubeUVHeight:X,aoMap:Dt,lightMap:Ve,bumpMap:le,normalMap:ue,displacementMap:g&&xe,emissiveMap:ge,normalMapObjectSpace:ue&&C.normalMapType===mN,normalMapTangentSpace:ue&&C.normalMapType===yM,metalnessMap:Me,roughnessMap:we,anisotropy:Ie,anisotropyMap:Ae,clearcoat:Ze,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:He,sheen:T,sheenColorMap:lt,sheenRoughnessMap:Tt,specularMap:Le,specularColorMap:Ft,specularIntensityMap:ft,transmission:q,transmissionMap:st,thicknessMap:tt,gradientMap:$e,opaque:C.transparent===!1&&C.blending===Es,alphaMap:_t,alphaTest:V,alphaHash:Be,combine:C.combine,mapUv:Oe&&E(C.map.channel),aoMapUv:Dt&&E(C.aoMap.channel),lightMapUv:Ve&&E(C.lightMap.channel),bumpMapUv:le&&E(C.bumpMap.channel),normalMapUv:ue&&E(C.normalMap.channel),displacementMapUv:xe&&E(C.displacementMap.channel),emissiveMapUv:ge&&E(C.emissiveMap.channel),metalnessMapUv:Me&&E(C.metalnessMap.channel),roughnessMapUv:we&&E(C.roughnessMap.channel),anisotropyMapUv:Ae&&E(C.anisotropyMap.channel),clearcoatMapUv:ye&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:He&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&E(C.sheenRoughnessMap.channel),specularMapUv:Le&&E(C.specularMap.channel),specularColorMapUv:Ft&&E(C.specularColorMap.channel),specularIntensityMapUv:ft&&E(C.specularIntensityMap.channel),transmissionMapUv:st&&E(C.transmissionMap.channel),thicknessMapUv:tt&&E(C.thicknessMap.channel),alphaMapUv:_t&&E(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ue||Ie),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:Ue,vertexUv3s:ot,pointsUvs:pe.isPoints===!0&&!!Q.attributes.uv&&(Oe||_t),fog:!!H,useFog:C.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:pe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:k,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&oe.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&C.map.isVideoTexture===!0&&Bt.getTransfer(C.map.colorSpace)===qt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Gi,flipSided:C.side===dr,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Re&&C.extensions.derivatives===!0,extensionFragDepth:Re&&C.extensions.fragDepth===!0,extensionDrawBuffers:Re&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function _(C){const O=[];if(C.shaderID?O.push(C.shaderID):(O.push(C.customVertexShaderID),O.push(C.customFragmentShaderID)),C.defines!==void 0)for(const oe in C.defines)O.push(oe),O.push(C.defines[oe]);return C.isRawShaderMaterial===!1&&(b(O,C),M(O,C),O.push(n.outputColorSpace)),O.push(C.customProgramCacheKey),O.join()}function b(C,O){C.push(O.precision),C.push(O.outputColorSpace),C.push(O.envMapMode),C.push(O.envMapCubeUVHeight),C.push(O.mapUv),C.push(O.alphaMapUv),C.push(O.lightMapUv),C.push(O.aoMapUv),C.push(O.bumpMapUv),C.push(O.normalMapUv),C.push(O.displacementMapUv),C.push(O.emissiveMapUv),C.push(O.metalnessMapUv),C.push(O.roughnessMapUv),C.push(O.anisotropyMapUv),C.push(O.clearcoatMapUv),C.push(O.clearcoatNormalMapUv),C.push(O.clearcoatRoughnessMapUv),C.push(O.iridescenceMapUv),C.push(O.iridescenceThicknessMapUv),C.push(O.sheenColorMapUv),C.push(O.sheenRoughnessMapUv),C.push(O.specularMapUv),C.push(O.specularColorMapUv),C.push(O.specularIntensityMapUv),C.push(O.transmissionMapUv),C.push(O.thicknessMapUv),C.push(O.combine),C.push(O.fogExp2),C.push(O.sizeAttenuation),C.push(O.morphTargetsCount),C.push(O.morphAttributeCount),C.push(O.numDirLights),C.push(O.numPointLights),C.push(O.numSpotLights),C.push(O.numSpotLightMaps),C.push(O.numHemiLights),C.push(O.numRectAreaLights),C.push(O.numDirLightShadows),C.push(O.numPointLightShadows),C.push(O.numSpotLightShadows),C.push(O.numSpotLightShadowsWithMaps),C.push(O.numLightProbes),C.push(O.shadowMapType),C.push(O.toneMapping),C.push(O.numClippingPlanes),C.push(O.numClipIntersection),C.push(O.depthPacking)}function M(C,O){u.disableAll(),O.isWebGL2&&u.enable(0),O.supportsVertexTextures&&u.enable(1),O.instancing&&u.enable(2),O.instancingColor&&u.enable(3),O.matcap&&u.enable(4),O.envMap&&u.enable(5),O.normalMapObjectSpace&&u.enable(6),O.normalMapTangentSpace&&u.enable(7),O.clearcoat&&u.enable(8),O.iridescence&&u.enable(9),O.alphaTest&&u.enable(10),O.vertexColors&&u.enable(11),O.vertexAlphas&&u.enable(12),O.vertexUv1s&&u.enable(13),O.vertexUv2s&&u.enable(14),O.vertexUv3s&&u.enable(15),O.vertexTangents&&u.enable(16),O.anisotropy&&u.enable(17),O.alphaHash&&u.enable(18),O.batching&&u.enable(19),C.push(u.mask),u.disableAll(),O.fog&&u.enable(0),O.useFog&&u.enable(1),O.flatShading&&u.enable(2),O.logarithmicDepthBuffer&&u.enable(3),O.skinning&&u.enable(4),O.morphTargets&&u.enable(5),O.morphNormals&&u.enable(6),O.morphColors&&u.enable(7),O.premultipliedAlpha&&u.enable(8),O.shadowMapEnabled&&u.enable(9),O.useLegacyLights&&u.enable(10),O.doubleSided&&u.enable(11),O.flipSided&&u.enable(12),O.useDepthPacking&&u.enable(13),O.dithering&&u.enable(14),O.transmission&&u.enable(15),O.sheen&&u.enable(16),O.opaque&&u.enable(17),O.pointsUvs&&u.enable(18),O.decodeVideoTexture&&u.enable(19),C.push(u.mask)}function R(C){const O=w[C.type];let oe;if(O){const ne=cr[O];oe=Rv.clone(ne.uniforms)}else oe=C.uniforms;return oe}function U(C,O){let oe;for(let ne=0,pe=h.length;ne<pe;ne++){const H=h[ne];if(H.cacheKey===O){oe=H,++oe.usedTimes;break}}return oe===void 0&&(oe=new pB(n,O,C,s),h.push(oe)),oe}function N(C){if(--C.usedTimes===0){const O=h.indexOf(C);h[O]=h[h.length-1],h.pop(),C.destroy()}}function I(C){d.remove(C)}function ce(){d.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:U,releaseProgram:N,releaseShaderCache:I,programs:h,dispose:ce}}function yB(){let n=new WeakMap;function e(s){let c=n.get(s);return c===void 0&&(c={},n.set(s,c)),c}function t(s){n.delete(s)}function i(s,c,u){n.get(s)[c]=u}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function xB(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fx(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function c(m,g,S,w,E,y){let _=n[e];return _===void 0?(_={id:m.id,object:m,geometry:g,material:S,groupOrder:w,renderOrder:m.renderOrder,z:E,group:y},n[e]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=S,_.groupOrder=w,_.renderOrder=m.renderOrder,_.z=E,_.group=y),e++,_}function u(m,g,S,w,E,y){const _=c(m,g,S,w,E,y);S.transmission>0?i.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(m,g,S,w,E,y){const _=c(m,g,S,w,E,y);S.transmission>0?i.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(m,g){t.length>1&&t.sort(m||xB),i.length>1&&i.sort(g||cx),a.length>1&&a.sort(g||cx)}function p(){for(let m=e,g=n.length;m<g;m++){const S=n[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:u,unshift:d,finish:p,sort:h}}function SB(){let n=new WeakMap;function e(i,a){const s=n.get(i);let c;return s===void 0?(c=new fx,n.set(i,[c])):a>=s.length?(c=new fx,s.push(c)):c=s[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function EB(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function wB(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let MB=0;function AB(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function TB(n,e){const t=new EB,i=wB(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new B);const s=new B,c=new $t,u=new $t;function d(p,m){let g=0,S=0,w=0;for(let ne=0;ne<9;ne++)a.probe[ne].set(0,0,0);let E=0,y=0,_=0,b=0,M=0,R=0,U=0,N=0,I=0,ce=0,C=0;p.sort(AB);const O=m===!0?Math.PI:1;for(let ne=0,pe=p.length;ne<pe;ne++){const H=p[ne],Q=H.color,se=H.intensity,re=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Q.r*se*O,S+=Q.g*se*O,w+=Q.b*se*O;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(H.sh.coefficients[ie],se);C++}else if(H.isDirectionalLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*O),H.castShadow){const $=H.shadow,P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,a.directionalShadow[E]=P,a.directionalShadowMap[E]=X,a.directionalShadowMatrix[E]=H.shadow.matrix,R++}a.directional[E]=ie,E++}else if(H.isSpotLight){const ie=t.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(Q).multiplyScalar(se*O),ie.distance=re,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,a.spot[_]=ie;const $=H.shadow;if(H.map&&(a.spotLightMap[I]=H.map,I++,$.updateMatrices(H),H.castShadow&&ce++),a.spotLightMatrix[_]=$.matrix,H.castShadow){const P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,a.spotShadow[_]=P,a.spotShadowMap[_]=X,N++}_++}else if(H.isRectAreaLight){const ie=t.get(H);ie.color.copy(Q).multiplyScalar(se),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),a.rectArea[b]=ie,b++}else if(H.isPointLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*O),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const $=H.shadow,P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,P.shadowCameraNear=$.camera.near,P.shadowCameraFar=$.camera.far,a.pointShadow[y]=P,a.pointShadowMap[y]=X,a.pointShadowMatrix[y]=H.shadow.matrix,U++}a.point[y]=ie,y++}else if(H.isHemisphereLight){const ie=t.get(H);ie.skyColor.copy(H.color).multiplyScalar(se*O),ie.groundColor.copy(H.groundColor).multiplyScalar(se*O),a.hemi[M]=ie,M++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=S,a.ambient[2]=w;const oe=a.hash;(oe.directionalLength!==E||oe.pointLength!==y||oe.spotLength!==_||oe.rectAreaLength!==b||oe.hemiLength!==M||oe.numDirectionalShadows!==R||oe.numPointShadows!==U||oe.numSpotShadows!==N||oe.numSpotMaps!==I||oe.numLightProbes!==C)&&(a.directional.length=E,a.spot.length=_,a.rectArea.length=b,a.point.length=y,a.hemi.length=M,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=N+I-ce,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=ce,a.numLightProbes=C,oe.directionalLength=E,oe.pointLength=y,oe.spotLength=_,oe.rectAreaLength=b,oe.hemiLength=M,oe.numDirectionalShadows=R,oe.numPointShadows=U,oe.numSpotShadows=N,oe.numSpotMaps=I,oe.numLightProbes=C,a.version=MB++)}function h(p,m){let g=0,S=0,w=0,E=0,y=0;const _=m.matrixWorldInverse;for(let b=0,M=p.length;b<M;b++){const R=p[b];if(R.isDirectionalLight){const U=a.directional[g];U.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(_),g++}else if(R.isSpotLight){const U=a.spot[w];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(_),U.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(_),w++}else if(R.isRectAreaLight){const U=a.rectArea[E];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(_),u.identity(),c.copy(R.matrixWorld),c.premultiply(_),u.extractRotation(c),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),E++}else if(R.isPointLight){const U=a.point[S];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(_),S++}else if(R.isHemisphereLight){const U=a.hemi[y];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(_),y++}}}return{setup:d,setupView:h,state:a}}function dx(n,e){const t=new TB(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function c(m){i.push(m)}function u(m){a.push(m)}function d(m){t.setup(i,m)}function h(m){t.setupView(i,m)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function bB(n,e){let t=new WeakMap;function i(s,c=0){const u=t.get(s);let d;return u===void 0?(d=new dx(n,e),t.set(s,[d])):c>=u.length?(d=new dx(n,e),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:i,dispose:a}}class CB extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hN,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RB extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LB=`uniform sampler2D shadow_pass;
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
}`;function DB(n,e,t){let i=new cd;const a=new ht,s=new ht,c=new Ht,u=new CB({depthPacking:pN}),d=new RB,h={},p=t.maxTextureSize,m={[zo]:dr,[dr]:zo,[Gi]:Gi},g=new Bo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:PB,fragmentShader:LB}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const w=new jn;w.setAttribute("position",new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ri(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uM;let _=this.type;this.render=function(U,N,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const ce=n.getRenderTarget(),C=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(Do),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ne=_!==Vi&&this.type===Vi,pe=_===Vi&&this.type!==Vi;for(let H=0,Q=U.length;H<Q;H++){const se=U[H],re=se.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);const X=re.getFrameExtents();if(a.multiply(X),s.copy(re.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(s.x=Math.floor(p/X.x),a.x=s.x*X.x,re.mapSize.x=s.x),a.y>p&&(s.y=Math.floor(p/X.y),a.y=s.y*X.y,re.mapSize.y=s.y)),re.map===null||ne===!0||pe===!0){const $=this.type!==Vi?{minFilter:Ln,magFilter:Ln}:{};re.map!==null&&re.map.dispose(),re.map=new wa(a.x,a.y,$),re.map.texture.name=se.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();const ie=re.getViewportCount();for(let $=0;$<ie;$++){const P=re.getViewport($);c.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),oe.viewport(c),re.updateMatrices(se,$),i=re.getFrustum(),R(N,I,re.camera,se,this.type)}re.isPointLightShadow!==!0&&this.type===Vi&&b(re,I),re.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(ce,C,O)};function b(U,N){const I=e.update(E);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new wa(a.x,a.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(N,null,I,g,E,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(N,null,I,S,E,null)}function M(U,N,I,ce){let C=null;const O=I.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(O!==void 0)C=O;else if(C=I.isPointLight===!0?d:u,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=C.uuid,ne=N.uuid;let pe=h[oe];pe===void 0&&(pe={},h[oe]=pe);let H=pe[ne];H===void 0&&(H=C.clone(),pe[ne]=H),C=H}if(C.visible=N.visible,C.wireframe=N.wireframe,ce===Vi?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:m[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,I.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=n.properties.get(C);oe.light=I}return C}function R(U,N,I,ce,C){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===Vi)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,U.matrixWorld);const ne=e.update(U),pe=U.material;if(Array.isArray(pe)){const H=ne.groups;for(let Q=0,se=H.length;Q<se;Q++){const re=H[Q],X=pe[re.materialIndex];if(X&&X.visible){const ie=M(U,X,ce,C);U.onBeforeShadow(n,U,N,I,ne,ie,re),n.renderBufferDirect(I,null,ne,ie,U,re),U.onAfterShadow(n,U,N,I,ne,ie,re)}}}else if(pe.visible){const H=M(U,pe,ce,C);U.onBeforeShadow(n,U,N,I,ne,H,null),n.renderBufferDirect(I,null,ne,H,U,null),U.onAfterShadow(n,U,N,I,ne,H,null)}}const oe=U.children;for(let ne=0,pe=oe.length;ne<pe;ne++)R(oe[ne],N,I,ce,C)}}function IB(n,e,t){const i=t.isWebGL2;function a(){let V=!1;const Be=new Ht;let Re=null;const me=new Ht(0,0,0,0);return{setMask:function(Ue){Re!==Ue&&!V&&(n.colorMask(Ue,Ue,Ue,Ue),Re=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,ot,wt,nn,xn){xn===!0&&(Ue*=nn,ot*=nn,wt*=nn),Be.set(Ue,ot,wt,nn),me.equals(Be)===!1&&(n.clearColor(Ue,ot,wt,nn),me.copy(Be))},reset:function(){V=!1,Re=null,me.set(-1,0,0,0)}}}function s(){let V=!1,Be=null,Re=null,me=null;return{setTest:function(Ue){Ue?be(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Ue){Be!==Ue&&!V&&(n.depthMask(Ue),Be=Ue)},setFunc:function(Ue){if(Re!==Ue){switch(Ue){case WU:n.depthFunc(n.NEVER);break;case $U:n.depthFunc(n.ALWAYS);break;case XU:n.depthFunc(n.LESS);break;case Rf:n.depthFunc(n.LEQUAL);break;case jU:n.depthFunc(n.EQUAL);break;case qU:n.depthFunc(n.GEQUAL);break;case YU:n.depthFunc(n.GREATER);break;case KU:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){me!==Ue&&(n.clearDepth(Ue),me=Ue)},reset:function(){V=!1,Be=null,Re=null,me=null}}}function c(){let V=!1,Be=null,Re=null,me=null,Ue=null,ot=null,wt=null,nn=null,xn=null;return{setTest:function(Pt){V||(Pt?be(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Pt){Be!==Pt&&!V&&(n.stencilMask(Pt),Be=Pt)},setFunc:function(Pt,pn,On){(Re!==Pt||me!==pn||Ue!==On)&&(n.stencilFunc(Pt,pn,On),Re=Pt,me=pn,Ue=On)},setOp:function(Pt,pn,On){(ot!==Pt||wt!==pn||nn!==On)&&(n.stencilOp(Pt,pn,On),ot=Pt,wt=pn,nn=On)},setLocked:function(Pt){V=Pt},setClear:function(Pt){xn!==Pt&&(n.clearStencil(Pt),xn=Pt)},reset:function(){V=!1,Be=null,Re=null,me=null,Ue=null,ot=null,wt=null,nn=null,xn=null}}}const u=new a,d=new s,h=new c,p=new WeakMap,m=new WeakMap;let g={},S={},w=new WeakMap,E=[],y=null,_=!1,b=null,M=null,R=null,U=null,N=null,I=null,ce=null,C=new nt(0,0,0),O=0,oe=!1,ne=null,pe=null,H=null,Q=null,se=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ie>=2);let P=null,k={};const W=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ee=new Ht().fromArray(W),Z=new Ht().fromArray(Y);function _e(V,Be,Re,me){const Ue=new Uint8Array(4),ot=n.createTexture();n.bindTexture(V,ot),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<Re;wt++)i&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(Be,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(Be+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return ot}const ve={};ve[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(n.DEPTH_TEST),d.setFunc(Rf),ge(!1),Me(q0),be(n.CULL_FACE),ue(Do);function be(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Oe(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function ze(V,Be){return S[V]!==Be?(n.bindFramebuffer(V,Be),S[V]=Be,i&&(V===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=Be),V===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=Be)),!0):!1}function j(V,Be){let Re=E,me=!1;if(V)if(Re=w.get(Be),Re===void 0&&(Re=[],w.set(Be,Re)),V.isWebGLMultipleRenderTargets){const Ue=V.texture;if(Re.length!==Ue.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,wt=Ue.length;ot<wt;ot++)Re[ot]=n.COLOR_ATTACHMENT0+ot;Re.length=Ue.length,me=!0}}else Re[0]!==n.COLOR_ATTACHMENT0&&(Re[0]=n.COLOR_ATTACHMENT0,me=!0);else Re[0]!==n.BACK&&(Re[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Dt(V){return y!==V?(n.useProgram(V),y=V,!0):!1}const Ve={[ma]:n.FUNC_ADD,[RU]:n.FUNC_SUBTRACT,[PU]:n.FUNC_REVERSE_SUBTRACT};if(i)Ve[J0]=n.MIN,Ve[Q0]=n.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Ve[J0]=V.MIN_EXT,Ve[Q0]=V.MAX_EXT)}const le={[LU]:n.ZERO,[DU]:n.ONE,[IU]:n.SRC_COLOR,[xm]:n.SRC_ALPHA,[zU]:n.SRC_ALPHA_SATURATE,[OU]:n.DST_COLOR,[NU]:n.DST_ALPHA,[UU]:n.ONE_MINUS_SRC_COLOR,[Sm]:n.ONE_MINUS_SRC_ALPHA,[kU]:n.ONE_MINUS_DST_COLOR,[FU]:n.ONE_MINUS_DST_ALPHA,[BU]:n.CONSTANT_COLOR,[HU]:n.ONE_MINUS_CONSTANT_COLOR,[VU]:n.CONSTANT_ALPHA,[GU]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(V,Be,Re,me,Ue,ot,wt,nn,xn,Pt){if(V===Do){_===!0&&(Oe(n.BLEND),_=!1);return}if(_===!1&&(be(n.BLEND),_=!0),V!==CU){if(V!==b||Pt!==oe){if((M!==ma||N!==ma)&&(n.blendEquation(n.FUNC_ADD),M=ma,N=ma),Pt)switch(V){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Y0:n.blendFunc(n.ONE,n.ONE);break;case K0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Z0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Y0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case K0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Z0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,U=null,I=null,ce=null,C.set(0,0,0),O=0,b=V,oe=Pt}return}Ue=Ue||Be,ot=ot||Re,wt=wt||me,(Be!==M||Ue!==N)&&(n.blendEquationSeparate(Ve[Be],Ve[Ue]),M=Be,N=Ue),(Re!==R||me!==U||ot!==I||wt!==ce)&&(n.blendFuncSeparate(le[Re],le[me],le[ot],le[wt]),R=Re,U=me,I=ot,ce=wt),(nn.equals(C)===!1||xn!==O)&&(n.blendColor(nn.r,nn.g,nn.b,xn),C.copy(nn),O=xn),b=V,oe=!1}function xe(V,Be){V.side===Gi?Oe(n.CULL_FACE):be(n.CULL_FACE);let Re=V.side===dr;Be&&(Re=!Re),ge(Re),V.blending===Es&&V.transparent===!1?ue(Do):ue(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const me=V.stencilWrite;h.setTest(me),me&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){ne!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),ne=V)}function Me(V){V!==AU?(be(n.CULL_FACE),V!==pe&&(V===q0?n.cullFace(n.BACK):V===TU?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),pe=V}function we(V){V!==H&&(X&&n.lineWidth(V),H=V)}function Ie(V,Be,Re){V?(be(n.POLYGON_OFFSET_FILL),(Q!==Be||se!==Re)&&(n.polygonOffset(Be,Re),Q=Be,se=Re)):Oe(n.POLYGON_OFFSET_FILL)}function Ze(V){V?be(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function D(V){V===void 0&&(V=n.TEXTURE0+re-1),P!==V&&(n.activeTexture(V),P=V)}function T(V,Be,Re){Re===void 0&&(P===null?Re=n.TEXTURE0+re-1:Re=P);let me=k[Re];me===void 0&&(me={type:void 0,texture:void 0},k[Re]=me),(me.type!==V||me.texture!==Be)&&(P!==Re&&(n.activeTexture(Re),P=Re),n.bindTexture(V,Be||ve[V]),me.type=V,me.texture=Be)}function q(){const V=k[P];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(V){ee.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function st(V){Z.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function tt(V,Be){let Re=m.get(Be);Re===void 0&&(Re=new WeakMap,m.set(Be,Re));let me=Re.get(V);me===void 0&&(me=n.getUniformBlockIndex(Be,V.name),Re.set(V,me))}function $e(V,Be){const me=m.get(Be).get(V);p.get(Be)!==me&&(n.uniformBlockBinding(Be,me,V.__bindingPointIndex),p.set(Be,me))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},P=null,k={},S={},w=new WeakMap,E=[],y=null,_=!1,b=null,M=null,R=null,U=null,N=null,I=null,ce=null,C=new nt(0,0,0),O=0,oe=!1,ne=null,pe=null,H=null,Q=null,se=null,ee.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:be,disable:Oe,bindFramebuffer:ze,drawBuffers:j,useProgram:Dt,setBlending:ue,setMaterial:xe,setFlipSided:ge,setCullFace:Me,setLineWidth:we,setPolygonOffset:Ie,setScissorTest:Ze,activeTexture:D,bindTexture:T,unbindTexture:q,compressedTexImage2D:Ae,compressedTexImage3D:ye,texImage2D:Le,texImage3D:Ft,updateUBOMapping:tt,uniformBlockBinding:$e,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:Ce,texSubImage3D:Ye,compressedTexSubImage2D:De,compressedTexSubImage3D:He,scissor:ft,viewport:st,reset:_t}}function UB(n,e,t,i,a,s,c){const u=a.isWebGL2,d=a.maxTextures,h=a.maxCubemapSize,p=a.maxTextureSize,m=a.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let E;const y=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,T){return _?new OffscreenCanvas(D,T):Uf("canvas")}function M(D,T,q,Ae){let ye=1;if((D.width>Ae||D.height>Ae)&&(ye=Ae/Math.max(D.width,D.height)),ye<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Ce=T?If:Math.floor,Ye=Ce(ye*D.width),De=Ce(ye*D.height);E===void 0&&(E=b(Ye,De));const He=q?b(Ye,De):E;return He.width=Ye,He.height=De,He.getContext("2d").drawImage(D,0,0,Ye,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Ye+"x"+De+")."),He}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function R(D){return Cm(D.width)&&Cm(D.height)}function U(D){return u?!1:D.wrapS!==ni||D.wrapT!==ni||D.minFilter!==Ln&&D.minFilter!==Nr}function N(D,T){return D.generateMipmaps&&T&&D.minFilter!==Ln&&D.minFilter!==Nr}function I(D){n.generateMipmap(D)}function ce(D,T,q,Ae,ye=!1){if(u===!1)return T;if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ce=T;if(T===n.RED&&(q===n.FLOAT&&(Ce=n.R32F),q===n.HALF_FLOAT&&(Ce=n.R16F),q===n.UNSIGNED_BYTE&&(Ce=n.R8)),T===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(Ce=n.R8UI),q===n.UNSIGNED_SHORT&&(Ce=n.R16UI),q===n.UNSIGNED_INT&&(Ce=n.R32UI),q===n.BYTE&&(Ce=n.R8I),q===n.SHORT&&(Ce=n.R16I),q===n.INT&&(Ce=n.R32I)),T===n.RG&&(q===n.FLOAT&&(Ce=n.RG32F),q===n.HALF_FLOAT&&(Ce=n.RG16F),q===n.UNSIGNED_BYTE&&(Ce=n.RG8)),T===n.RGBA){const Ye=ye?Pf:Bt.getTransfer(Ae);q===n.FLOAT&&(Ce=n.RGBA32F),q===n.HALF_FLOAT&&(Ce=n.RGBA16F),q===n.UNSIGNED_BYTE&&(Ce=Ye===qt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(Ce=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(Ce=n.RGB5_A1)}return(Ce===n.R16F||Ce===n.R32F||Ce===n.RG16F||Ce===n.RG32F||Ce===n.RGBA16F||Ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function C(D,T,q){return N(D,q)===!0||D.isFramebufferTexture&&D.minFilter!==Ln&&D.minFilter!==Nr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function O(D){return D===Ln||D===ey||D===ap?n.NEAREST:n.LINEAR}function oe(D){const T=D.target;T.removeEventListener("dispose",oe),pe(T),T.isVideoTexture&&w.delete(T)}function ne(D){const T=D.target;T.removeEventListener("dispose",ne),Q(T)}function pe(D){const T=i.get(D);if(T.__webglInit===void 0)return;const q=D.source,Ae=y.get(q);if(Ae){const ye=Ae[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(D),Object.keys(Ae).length===0&&y.delete(q)}i.remove(D)}function H(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const q=D.source,Ae=y.get(q);delete Ae[T.__cacheKey],c.memory.textures--}function Q(D){const T=D.texture,q=i.get(D),Ae=i.get(T);if(Ae.__webglTexture!==void 0&&(n.deleteTexture(Ae.__webglTexture),c.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(q.__webglFramebuffer[ye]))for(let Ce=0;Ce<q.__webglFramebuffer[ye].length;Ce++)n.deleteFramebuffer(q.__webglFramebuffer[ye][Ce]);else n.deleteFramebuffer(q.__webglFramebuffer[ye]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ye])}else{if(Array.isArray(q.__webglFramebuffer))for(let ye=0;ye<q.__webglFramebuffer.length;ye++)n.deleteFramebuffer(q.__webglFramebuffer[ye]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ye=0;ye<q.__webglColorRenderbuffer.length;ye++)q.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ye]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ye=0,Ce=T.length;ye<Ce;ye++){const Ye=i.get(T[ye]);Ye.__webglTexture&&(n.deleteTexture(Ye.__webglTexture),c.memory.textures--),i.remove(T[ye])}i.remove(T),i.remove(D)}let se=0;function re(){se=0}function X(){const D=se;return D>=d&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+d),se+=1,D}function ie(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function $(D,T){const q=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const Ae=D.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,D,T);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+T)}function P(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){be(q,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+T)}function k(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){be(q,D,T);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+T)}function W(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){Oe(q,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+T)}const Y={[Mm]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Am]:n.MIRRORED_REPEAT},ee={[Ln]:n.NEAREST,[ey]:n.NEAREST_MIPMAP_NEAREST,[ap]:n.NEAREST_MIPMAP_LINEAR,[Nr]:n.LINEAR,[iN]:n.LINEAR_MIPMAP_NEAREST,[tu]:n.LINEAR_MIPMAP_LINEAR},Z={[vN]:n.NEVER,[EN]:n.ALWAYS,[gN]:n.LESS,[xM]:n.LEQUAL,[_N]:n.EQUAL,[SN]:n.GEQUAL,[yN]:n.GREATER,[xN]:n.NOTEQUAL};function _e(D,T,q){if(q?(n.texParameteri(D,n.TEXTURE_WRAP_S,Y[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Y[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Y[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ee[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ee[T.minFilter])):(n.texParameteri(D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==ni||T.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(D,n.TEXTURE_MAG_FILTER,O(T.magFilter)),n.texParameteri(D,n.TEXTURE_MIN_FILTER,O(T.minFilter)),T.minFilter!==Ln&&T.minFilter!==Nr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ln||T.minFilter!==ap&&T.minFilter!==tu||T.type===Wi&&e.has("OES_texture_float_linear")===!1||u===!1&&T.type===nu&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(D,Ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ve(D,T){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",oe));const Ae=T.source;let ye=y.get(Ae);ye===void 0&&(ye={},y.set(Ae,ye));const Ce=ie(T);if(Ce!==D.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ye[Ce].usedTimes++;const Ye=ye[D.__cacheKey];Ye!==void 0&&(ye[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&H(T)),D.__cacheKey=Ce,D.__webglTexture=ye[Ce].texture}return q}function be(D,T,q){let Ae=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ae=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ae=n.TEXTURE_3D);const ye=ve(D,T),Ce=T.source;t.bindTexture(Ae,D.__webglTexture,n.TEXTURE0+q);const Ye=i.get(Ce);if(Ce.version!==Ye.__version||ye===!0){t.activeTexture(n.TEXTURE0+q);const De=Bt.getPrimaries(Bt.workingColorSpace),He=T.colorSpace===Or?null:Bt.getPrimaries(T.colorSpace),lt=T.colorSpace===Or||De===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Tt=U(T)&&R(T.image)===!1;let Le=M(T.image,Tt,!1,p);Le=Ze(T,Le);const Ft=R(Le)||u,ft=s.convert(T.format,T.colorSpace);let st=s.convert(T.type),tt=ce(T.internalFormat,ft,st,T.colorSpace,T.isVideoTexture);_e(Ae,T,Ft);let $e;const _t=T.mipmaps,V=u&&T.isVideoTexture!==!0&&tt!==gM,Be=Ye.__version===void 0||ye===!0,Re=C(T,Le,Ft);if(T.isDepthTexture)tt=n.DEPTH_COMPONENT,u?T.type===Wi?tt=n.DEPTH_COMPONENT32F:T.type===Ro?tt=n.DEPTH_COMPONENT24:T.type===xa?tt=n.DEPTH24_STENCIL8:tt=n.DEPTH_COMPONENT16:T.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Sa&&tt===n.DEPTH_COMPONENT&&T.type!==Av&&T.type!==Ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ro,st=s.convert(T.type)),T.format===Ns&&tt===n.DEPTH_COMPONENT&&(tt=n.DEPTH_STENCIL,T.type!==xa&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=xa,st=s.convert(T.type))),Be&&(V?t.texStorage2D(n.TEXTURE_2D,1,tt,Le.width,Le.height):t.texImage2D(n.TEXTURE_2D,0,tt,Le.width,Le.height,0,ft,st,null));else if(T.isDataTexture)if(_t.length>0&&Ft){V&&Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,ft,st,$e.data);T.generateMipmaps=!1}else V?(Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,Le.width,Le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le.width,Le.height,ft,st,Le.data)):t.texImage2D(n.TEXTURE_2D,0,tt,Le.width,Le.height,0,ft,st,Le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,_t[0].width,_t[0].height,Le.depth);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],T.format!==Fr?ft!==null?V?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Le.depth,ft,$e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,tt,$e.width,$e.height,Le.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Le.depth,ft,st,$e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,tt,$e.width,$e.height,Le.depth,0,ft,st,$e.data)}else{V&&Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],T.format!==Fr?ft!==null?V?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,$e.data):t.compressedTexImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,tt,$e.width,$e.height,0,ft,st,$e.data)}else if(T.isDataArrayTexture)V?(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,Le.width,Le.height,Le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Le.width,Le.height,Le.depth,ft,st,Le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,Le.width,Le.height,Le.depth,0,ft,st,Le.data);else if(T.isData3DTexture)V?(Be&&t.texStorage3D(n.TEXTURE_3D,Re,tt,Le.width,Le.height,Le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Le.width,Le.height,Le.depth,ft,st,Le.data)):t.texImage3D(n.TEXTURE_3D,0,tt,Le.width,Le.height,Le.depth,0,ft,st,Le.data);else if(T.isFramebufferTexture){if(Be)if(V)t.texStorage2D(n.TEXTURE_2D,Re,tt,Le.width,Le.height);else{let me=Le.width,Ue=Le.height;for(let ot=0;ot<Re;ot++)t.texImage2D(n.TEXTURE_2D,ot,tt,me,Ue,0,ft,st,null),me>>=1,Ue>>=1}}else if(_t.length>0&&Ft){V&&Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ft,st,$e):t.texImage2D(n.TEXTURE_2D,me,tt,ft,st,$e);T.generateMipmaps=!1}else V?(Be&&t.texStorage2D(n.TEXTURE_2D,Re,tt,Le.width,Le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,st,Le)):t.texImage2D(n.TEXTURE_2D,0,tt,ft,st,Le);N(T,Ft)&&I(Ae),Ye.__version=Ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Oe(D,T,q){if(T.image.length!==6)return;const Ae=ve(D,T),ye=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+q);const Ce=i.get(ye);if(ye.version!==Ce.__version||Ae===!0){t.activeTexture(n.TEXTURE0+q);const Ye=Bt.getPrimaries(Bt.workingColorSpace),De=T.colorSpace===Or?null:Bt.getPrimaries(T.colorSpace),He=T.colorSpace===Or||Ye===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let me=0;me<6;me++)!lt&&!Tt?Le[me]=M(T.image[me],!1,!0,h):Le[me]=Tt?T.image[me].image:T.image[me],Le[me]=Ze(T,Le[me]);const Ft=Le[0],ft=R(Ft)||u,st=s.convert(T.format,T.colorSpace),tt=s.convert(T.type),$e=ce(T.internalFormat,st,tt,T.colorSpace),_t=u&&T.isVideoTexture!==!0,V=Ce.__version===void 0||Ae===!0;let Be=C(T,Ft,ft);_e(n.TEXTURE_CUBE_MAP,T,ft);let Re;if(lt){_t&&V&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,$e,Ft.width,Ft.height);for(let me=0;me<6;me++){Re=Le[me].mipmaps;for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];T.format!==Fr?st!==null?_t?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,tt,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,st,tt,ot.data)}}}else{Re=T.mipmaps,_t&&V&&(Re.length>0&&Be++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,$e,Le[0].width,Le[0].height));for(let me=0;me<6;me++)if(Tt){_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Le[me].width,Le[me].height,st,tt,Le[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,Le[me].width,Le[me].height,0,st,tt,Le[me].data);for(let Ue=0;Ue<Re.length;Ue++){const wt=Re[Ue].image[me].image;_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,wt.width,wt.height,st,tt,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,wt.width,wt.height,0,st,tt,wt.data)}}else{_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,st,tt,Le[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,st,tt,Le[me]);for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,st,tt,ot.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,st,tt,ot.image[me])}}}N(T,ft)&&I(n.TEXTURE_CUBE_MAP),Ce.__version=ye.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ze(D,T,q,Ae,ye,Ce){const Ye=s.convert(q.format,q.colorSpace),De=s.convert(q.type),He=ce(q.internalFormat,Ye,De,q.colorSpace);if(!i.get(T).__hasExternalTextures){const Tt=Math.max(1,T.width>>Ce),Le=Math.max(1,T.height>>Ce);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,He,Tt,Le,T.depth,0,Ye,De,null):t.texImage2D(ye,Ce,He,Tt,Le,0,Ye,De,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ye,i.get(q).__webglTexture,0,Me(T)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ye,i.get(q).__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(D,T,q){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let Ae=u===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||we(T)){const ye=T.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Wi?Ae=n.DEPTH_COMPONENT32F:ye.type===Ro&&(Ae=n.DEPTH_COMPONENT24));const Ce=Me(T);we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Ae,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const Ae=Me(T);q&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{const Ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ye=0;ye<Ae.length;ye++){const Ce=Ae[ye],Ye=s.convert(Ce.format,Ce.colorSpace),De=s.convert(Ce.type),He=ce(Ce.internalFormat,Ye,De,Ce.colorSpace),lt=Me(T);q&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,He,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,He,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,He,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Ae=i.get(T.depthTexture).__webglTexture,ye=Me(T);if(T.depthTexture.format===Sa)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0);else if(T.depthTexture.format===Ns)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function Ve(D){const T=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Dt(T.__webglFramebuffer,D)}else if(q){T.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Ae]),T.__webglDepthbuffer[Ae]=n.createRenderbuffer(),j(T.__webglDepthbuffer[Ae],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),j(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(D,T,q){const Ae=i.get(D);T!==void 0&&ze(Ae.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ve(D)}function ue(D){const T=D.texture,q=i.get(D),Ae=i.get(T);D.addEventListener("dispose",ne),D.isWebGLMultipleRenderTargets!==!0&&(Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture()),Ae.__version=T.version,c.memory.textures++);const ye=D.isWebGLCubeRenderTarget===!0,Ce=D.isWebGLMultipleRenderTargets===!0,Ye=R(D)||u;if(ye){q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[De]=[];for(let He=0;He<T.mipmaps.length;He++)q.__webglFramebuffer[De][He]=n.createFramebuffer()}else q.__webglFramebuffer[De]=n.createFramebuffer()}else{if(u&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)q.__webglFramebuffer[De]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ce)if(a.drawBuffers){const De=D.texture;for(let He=0,lt=De.length;He<lt;He++){const Tt=i.get(De[He]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&D.samples>0&&we(D)===!1){const De=Ce?T:[T];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let He=0;He<De.length;He++){const lt=De[He];q.__webglColorRenderbuffer[He]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[He]);const Tt=s.convert(lt.format,lt.colorSpace),Le=s.convert(lt.type),Ft=ce(lt.internalFormat,Tt,Le,lt.colorSpace,D.isXRRenderTarget===!0),ft=Me(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Ft,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,q.__webglColorRenderbuffer[He])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),j(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,Ae.__webglTexture),_e(n.TEXTURE_CUBE_MAP,T,Ye);for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)ze(q.__webglFramebuffer[De][He],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,He);else ze(q.__webglFramebuffer[De],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);N(T,Ye)&&I(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){const De=D.texture;for(let He=0,lt=De.length;He<lt;He++){const Tt=De[He],Le=i.get(Tt);t.bindTexture(n.TEXTURE_2D,Le.__webglTexture),_e(n.TEXTURE_2D,Tt,Ye),ze(q.__webglFramebuffer,D,Tt,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,0),N(Tt,Ye)&&I(n.TEXTURE_2D)}t.unbindTexture()}else{let De=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(u?De=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,Ae.__webglTexture),_e(De,T,Ye),u&&T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)ze(q.__webglFramebuffer[He],D,T,n.COLOR_ATTACHMENT0,De,He);else ze(q.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,De,0);N(T,Ye)&&I(De),t.unbindTexture()}D.depthBuffer&&Ve(D)}function xe(D){const T=R(D)||u,q=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Ae=0,ye=q.length;Ae<ye;Ae++){const Ce=q[Ae];if(N(Ce,T)){const Ye=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,De=i.get(Ce).__webglTexture;t.bindTexture(Ye,De),I(Ye),t.unbindTexture()}}}function ge(D){if(u&&D.samples>0&&we(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],q=D.width,Ae=D.height;let ye=n.COLOR_BUFFER_BIT;const Ce=[],Ye=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(D),He=D.isWebGLMultipleRenderTargets===!0;if(He)for(let lt=0;lt<T.length;lt++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let lt=0;lt<T.length;lt++){Ce.push(n.COLOR_ATTACHMENT0+lt),D.depthBuffer&&Ce.push(Ye);const Tt=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(Tt===!1&&(D.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),He&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]),Tt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ye])),He){const Le=i.get(T[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,q,Ae,0,0,q,Ae,ye,n.NEAREST),S&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),He)for(let lt=0;lt<T.length;lt++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]);const Tt=i.get(T[lt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Me(D){return Math.min(m,D.samples)}function we(D){const T=i.get(D);return u&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ie(D){const T=c.render.frame;w.get(D)!==T&&(w.set(D,T),D.update())}function Ze(D,T){const q=D.colorSpace,Ae=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===bm||q!==Xi&&q!==Or&&(Bt.getTransfer(q)===qt?u===!1?e.has("EXT_sRGB")===!0&&Ae===Fr?(D.format=bm,D.minFilter=Nr,D.generateMipmaps=!1):T=wM.sRGBToLinear(T):(Ae!==Fr||ye!==Uo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=X,this.resetTextureUnits=re,this.setTexture2D=$,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=we}function NB(n,e,t){const i=t.isWebGL2;function a(s,c=Or){let u;const d=Bt.getTransfer(c);if(s===Uo)return n.UNSIGNED_BYTE;if(s===dM)return n.UNSIGNED_SHORT_4_4_4_4;if(s===hM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===oN)return n.BYTE;if(s===aN)return n.SHORT;if(s===Av)return n.UNSIGNED_SHORT;if(s===fM)return n.INT;if(s===Ro)return n.UNSIGNED_INT;if(s===Wi)return n.FLOAT;if(s===nu)return i?n.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(s===sN)return n.ALPHA;if(s===Fr)return n.RGBA;if(s===lN)return n.LUMINANCE;if(s===uN)return n.LUMINANCE_ALPHA;if(s===Sa)return n.DEPTH_COMPONENT;if(s===Ns)return n.DEPTH_STENCIL;if(s===bm)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(s===cN)return n.RED;if(s===pM)return n.RED_INTEGER;if(s===fN)return n.RG;if(s===mM)return n.RG_INTEGER;if(s===vM)return n.RGBA_INTEGER;if(s===sp||s===lp||s===up||s===cp)if(d===qt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===sp)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lp)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===up)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cp)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===sp)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lp)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===up)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cp)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ty||s===ny||s===ry||s===iy)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===ty)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ny)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ry)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===iy)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gM)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===oy||s===ay)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===oy)return d===qt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ay)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sy||s===ly||s===uy||s===cy||s===fy||s===dy||s===hy||s===py||s===my||s===vy||s===gy||s===_y||s===yy||s===xy)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===sy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ly)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===py)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===my)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_y)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xy)return d===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fp||s===Sy||s===Ey)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===fp)return d===qt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sy)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ey)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dN||s===wy||s===My||s===Ay)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===fp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===wy)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===My)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ay)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xa?i?n.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class FB extends Sr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bl extends er{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OB={type:"move"};class Up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,i),_=this._getHandJoint(h,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),S=.02,w=.005;h.inputState.pinching&&g>S+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(OB)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kB extends Ra{constructor(e,t){super();const i=this;let a=null,s=1,c=null,u="local-floor",d=1,h=null,p=null,m=null,g=null,S=null,w=null;const E=t.getContextAttributes();let y=null,_=null;const b=[],M=[],R=new ht;let U=null;const N=new Sr;N.layers.enable(1),N.viewport=new Ht;const I=new Sr;I.layers.enable(2),I.viewport=new Ht;const ce=[N,I],C=new FB;C.layers.enable(1),C.layers.enable(2);let O=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=b[W];return Y===void 0&&(Y=new Up,b[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=b[W];return Y===void 0&&(Y=new Up,b[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=b[W];return Y===void 0&&(Y=new Up,b[W]=Y),Y.getHandSpace()};function ne(W){const Y=M.indexOf(W.inputSource);if(Y===-1)return;const ee=b[Y];ee!==void 0&&(ee.update(W.inputSource,W.frame,h||c),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function pe(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",H);for(let W=0;W<b.length;W++){const Y=M[W];Y!==null&&(M[W]=null,b[W].disconnect(Y))}O=null,oe=null,e.setRenderTarget(y),S=null,g=null,m=null,a=null,_=null,k.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return m},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(a,t,Y),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new wa(S.framebufferWidth,S.framebufferHeight,{format:Fr,type:Uo,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let Y=null,ee=null,Z=null;E.depth&&(Z=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=E.stencil?Ns:Sa,ee=E.stencil?xa:Ro);const _e={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};m=new XRWebGLBinding(a,t),g=m.createProjectionLayer(_e),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),_=new wa(g.textureWidth,g.textureHeight,{format:Fr,type:Uo,depthTexture:new NM(g.textureWidth,g.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const ve=e.properties.get(_);ve.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),k.setContext(a),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(W){for(let Y=0;Y<W.removed.length;Y++){const ee=W.removed[Y],Z=M.indexOf(ee);Z>=0&&(M[Z]=null,b[Z].disconnect(ee))}for(let Y=0;Y<W.added.length;Y++){const ee=W.added[Y];let Z=M.indexOf(ee);if(Z===-1){for(let ve=0;ve<b.length;ve++)if(ve>=M.length){M.push(ee),Z=ve;break}else if(M[ve]===null){M[ve]=ee,Z=ve;break}if(Z===-1)break}const _e=b[Z];_e&&_e.connect(ee)}}const Q=new B,se=new B;function re(W,Y,ee){Q.setFromMatrixPosition(Y.matrixWorld),se.setFromMatrixPosition(ee.matrixWorld);const Z=Q.distanceTo(se),_e=Y.projectionMatrix.elements,ve=ee.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Oe=_e[14]/(_e[10]+1),ze=(_e[9]+1)/_e[5],j=(_e[9]-1)/_e[5],Dt=(_e[8]-1)/_e[0],Ve=(ve[8]+1)/ve[0],le=be*Dt,ue=be*Ve,xe=Z/(-Dt+Ve),ge=xe*-Dt;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Me=be+xe,we=Oe+xe,Ie=le-ge,Ze=ue+(Z-ge),D=ze*Oe/we*Me,T=j*Oe/we*Me;W.projectionMatrix.makePerspective(Ie,Ze,D,T,Me,we),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;C.near=I.near=N.near=W.near,C.far=I.far=N.far=W.far,(O!==C.near||oe!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,oe=C.far);const Y=W.parent,ee=C.cameras;X(C,Y);for(let Z=0;Z<ee.length;Z++)X(ee[Z],Y);ee.length===2?re(C,N,I):C.projectionMatrix.copy(N.projectionMatrix),ie(W,C,Y)};function ie(W,Y,ee){ee===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=iu*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(W){d=W,g!==null&&(g.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)};let $=null;function P(W,Y){if(p=Y.getViewerPose(h||c),w=Y,p!==null){const ee=p.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let Z=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,Z=!0);for(let _e=0;_e<ee.length;_e++){const ve=ee[_e];let be=null;if(S!==null)be=S.getViewport(ve);else{const ze=m.getViewSubImage(g,ve);be=ze.viewport,_e===0&&(e.setRenderTargetTextures(_,ze.colorTexture,g.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(_))}let Oe=ce[_e];Oe===void 0&&(Oe=new Sr,Oe.layers.enable(_e),Oe.viewport=new Ht,ce[_e]=Oe),Oe.matrix.fromArray(ve.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ve.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(C.matrix.copy(Oe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Z===!0&&C.cameras.push(Oe)}}for(let ee=0;ee<b.length;ee++){const Z=M[ee],_e=b[ee];Z!==null&&_e!==void 0&&_e.update(Z,Y,h||c)}$&&$(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),w=null}const k=new UM;k.setAnimationLoop(P),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function zB(n,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function i(y,_){_.color.getRGB(y.fogColor.value,LM(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,b,M,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),m(y,_)):_.isMeshPhongMaterial?(s(y,_),p(y,_)):_.isMeshStandardMaterial?(s(y,_),g(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(s(y,_),w(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),E(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&u(y,_)):_.isPointsMaterial?d(y,_,b,M):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===dr&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===dr&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const b=e.get(_).envMap;if(b&&(y.envMap.value=b,y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*M,t(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function u(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function d(y,_,b,M){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*b,y.scale.value=M*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function m(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,b){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===dr&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const b=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function BB(n,e,t,i){let a={},s={},c=[];const u=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(b,M){const R=M.program;i.uniformBlockBinding(b,R)}function h(b,M){let R=a[b.id];R===void 0&&(w(b),R=p(b),a[b.id]=R,b.addEventListener("dispose",y));const U=M.program;i.updateUBOMapping(b,U);const N=e.render.frame;s[b.id]!==N&&(g(b),s[b.id]=N)}function p(b){const M=m();b.__bindingPointIndex=M;const R=n.createBuffer(),U=b.__size,N=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,U,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,R),R}function m(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const M=a[b.id],R=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let N=0,I=R.length;N<I;N++){const ce=R[N];if(S(ce,N,U)===!0){const C=ce.__offset,O=Array.isArray(ce.value)?ce.value:[ce.value];let oe=0;for(let ne=0;ne<O.length;ne++){const pe=O[ne],H=E(pe);typeof pe=="number"?(ce.__data[0]=pe,n.bufferSubData(n.UNIFORM_BUFFER,C+oe,ce.__data)):pe.isMatrix3?(ce.__data[0]=pe.elements[0],ce.__data[1]=pe.elements[1],ce.__data[2]=pe.elements[2],ce.__data[3]=pe.elements[0],ce.__data[4]=pe.elements[3],ce.__data[5]=pe.elements[4],ce.__data[6]=pe.elements[5],ce.__data[7]=pe.elements[0],ce.__data[8]=pe.elements[6],ce.__data[9]=pe.elements[7],ce.__data[10]=pe.elements[8],ce.__data[11]=pe.elements[0]):(pe.toArray(ce.__data,oe),oe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,ce.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(b,M,R){const U=b.value;if(R[M]===void 0){if(typeof U=="number")R[M]=U;else{const N=Array.isArray(U)?U:[U],I=[];for(let ce=0;ce<N.length;ce++)I.push(N[ce].clone());R[M]=I}return!0}else if(typeof U=="number"){if(R[M]!==U)return R[M]=U,!0}else{const N=Array.isArray(R[M])?R[M]:[R[M]],I=Array.isArray(U)?U:[U];for(let ce=0;ce<N.length;ce++){const C=N[ce];if(C.equals(I[ce])===!1)return C.copy(I[ce]),!0}}return!1}function w(b){const M=b.uniforms;let R=0;const U=16;let N=0;for(let I=0,ce=M.length;I<ce;I++){const C=M[I],O={boundary:0,storage:0},oe=Array.isArray(C.value)?C.value:[C.value];for(let ne=0,pe=oe.length;ne<pe;ne++){const H=oe[ne],Q=E(H);O.boundary+=Q.boundary,O.storage+=Q.storage}if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=R,I>0){N=R%U;const ne=U-N;N!==0&&ne-O.boundary<0&&(R+=U-N,C.__offset=R)}R+=O.storage}return N=R%U,N>0&&(R+=U-N),b.__size=R,b.__cache={},this}function E(b){const M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function y(b){const M=b.target;M.removeEventListener("dispose",y);const R=c.indexOf(M.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete s[M.id]}function _(){for(const b in a)n.deleteBuffer(a[b]);c=[],a={},s={}}return{bind:d,update:h,dispose:_}}class Pm{constructor(e={}){const{canvas:t=ON(),context:i=null,depth:a=!0,stencil:s=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=c;const S=new Uint32Array(4),w=new Int32Array(4);let E=null,y=null;const _=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this._useLegacyLights=!1,this.toneMapping=Io,this.toneMappingExposure=1;const M=this;let R=!1,U=0,N=0,I=null,ce=-1,C=null;const O=new Ht,oe=new Ht;let ne=null;const pe=new nt(0);let H=0,Q=t.width,se=t.height,re=1,X=null,ie=null;const $=new Ht(0,0,Q,se),P=new Ht(0,0,Q,se);let k=!1;const W=new cd;let Y=!1,ee=!1,Z=null;const _e=new $t,ve=new ht,be=new B,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return I===null?re:1}let j=i;function Dt(L,J){for(let de=0;de<L.length;de++){const he=L[de],fe=t.getContext(he,J);if(fe!==null)return fe}return null}try{const L={alpha:!0,depth:a,stencil:s,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sd}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Be,!1),j===null){const J=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&J.shift(),j=Dt(J,L),j===null)throw Dt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ve,le,ue,xe,ge,Me,we,Ie,Ze,D,T,q,Ae,ye,Ce,Ye,De,He,lt,Tt,Le,Ft,ft,st;function tt(){Ve=new Zk(j),le=new Wk(j,Ve,e),Ve.init(le),Ft=new NB(j,Ve,le),ue=new IB(j,Ve,le),xe=new ez(j),ge=new yB,Me=new UB(j,Ve,ue,ge,le,Ft,xe),we=new Xk(M),Ie=new Kk(M),Ze=new sF(j,le),ft=new Vk(j,Ve,Ze,le),D=new Jk(j,Ze,xe,ft),T=new iz(j,D,Ze,xe),lt=new rz(j,le,Me),Ye=new $k(ge),q=new _B(M,we,Ie,Ve,le,ft,Ye),Ae=new zB(M,ge),ye=new SB,Ce=new bB(Ve,le),He=new Hk(M,we,Ie,ue,T,g,d),De=new DB(M,T,le),st=new BB(j,xe,le,ue),Tt=new Gk(j,Ve,xe,le),Le=new Qk(j,Ve,xe,le),xe.programs=q.programs,M.capabilities=le,M.extensions=Ve,M.properties=ge,M.renderLists=ye,M.shadowMap=De,M.state=ue,M.info=xe}tt();const $e=new kB(M,j);this.xr=$e,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=Ve.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ve.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(L){L!==void 0&&(re=L,this.setSize(Q,se,!1))},this.getSize=function(L){return L.set(Q,se)},this.setSize=function(L,J,de=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=L,se=J,t.width=Math.floor(L*re),t.height=Math.floor(J*re),de===!0&&(t.style.width=L+"px",t.style.height=J+"px"),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(Q*re,se*re).floor()},this.setDrawingBufferSize=function(L,J,de){Q=L,se=J,re=de,t.width=Math.floor(L*de),t.height=Math.floor(J*de),this.setViewport(0,0,L,J)},this.getCurrentViewport=function(L){return L.copy(O)},this.getViewport=function(L){return L.copy($)},this.setViewport=function(L,J,de,he){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,J,de,he),ue.viewport(O.copy($).multiplyScalar(re).floor())},this.getScissor=function(L){return L.copy(P)},this.setScissor=function(L,J,de,he){L.isVector4?P.set(L.x,L.y,L.z,L.w):P.set(L,J,de,he),ue.scissor(oe.copy(P).multiplyScalar(re).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(L){ue.setScissorTest(k=L)},this.setOpaqueSort=function(L){X=L},this.setTransparentSort=function(L){ie=L},this.getClearColor=function(L){return L.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(L=!0,J=!0,de=!0){let he=0;if(L){let fe=!1;if(I!==null){const Ge=I.texture.format;fe=Ge===vM||Ge===mM||Ge===pM}if(fe){const Ge=I.texture.type,et=Ge===Uo||Ge===Ro||Ge===Av||Ge===xa||Ge===dM||Ge===hM,at=He.getClearColor(),Xe=He.getClearAlpha(),vt=at.r,dt=at.g,pt=at.b;et?(S[0]=vt,S[1]=dt,S[2]=pt,S[3]=Xe,j.clearBufferuiv(j.COLOR,0,S)):(w[0]=vt,w[1]=dt,w[2]=pt,w[3]=Xe,j.clearBufferiv(j.COLOR,0,w))}else he|=j.COLOR_BUFFER_BIT}J&&(he|=j.DEPTH_BUFFER_BIT),de&&(he|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ye.dispose(),Ce.dispose(),ge.dispose(),we.dispose(),Ie.dispose(),T.dispose(),ft.dispose(),st.dispose(),q.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",xn),$e.removeEventListener("sessionend",Pt),Z&&(Z.dispose(),Z=null),pn.stop()};function _t(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const L=xe.autoReset,J=De.enabled,de=De.autoUpdate,he=De.needsUpdate,fe=De.type;tt(),xe.autoReset=L,De.enabled=J,De.autoUpdate=de,De.needsUpdate=he,De.type=fe}function Be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Re(L){const J=L.target;J.removeEventListener("dispose",Re),me(J)}function me(L){Ue(L),ge.remove(L)}function Ue(L){const J=ge.get(L).programs;J!==void 0&&(J.forEach(function(de){q.releaseProgram(de)}),L.isShaderMaterial&&q.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,de,he,fe,Ge){J===null&&(J=Oe);const et=fe.isMesh&&fe.matrixWorld.determinant()<0,at=pd(L,J,de,he,fe);ue.setMaterial(he,et);let Xe=de.index,vt=1;if(he.wireframe===!0){if(Xe=D.getWireframeAttribute(de),Xe===void 0)return;vt=2}const dt=de.drawRange,pt=de.attributes.position;let Vt=dt.start*vt,qn=(dt.start+dt.count)*vt;Ge!==null&&(Vt=Math.max(Vt,Ge.start*vt),qn=Math.min(qn,(Ge.start+Ge.count)*vt)),Xe!==null?(Vt=Math.max(Vt,0),qn=Math.min(qn,Xe.count)):pt!=null&&(Vt=Math.max(Vt,0),qn=Math.min(qn,pt.count));const an=qn-Vt;if(an<0||an===1/0)return;ft.setup(fe,he,at,de,Xe);let tr,bt=Tt;if(Xe!==null&&(tr=Ze.get(Xe),bt=Le,bt.setIndex(tr)),fe.isMesh)he.wireframe===!0?(ue.setLineWidth(he.wireframeLinewidth*ze()),bt.setMode(j.LINES)):bt.setMode(j.TRIANGLES);else if(fe.isLine){let yt=he.linewidth;yt===void 0&&(yt=1),ue.setLineWidth(yt*ze()),fe.isLineSegments?bt.setMode(j.LINES):fe.isLineLoop?bt.setMode(j.LINE_LOOP):bt.setMode(j.LINE_STRIP)}else fe.isPoints?bt.setMode(j.POINTS):fe.isSprite&&bt.setMode(j.TRIANGLES);if(fe.isBatchedMesh)bt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else if(fe.isInstancedMesh)bt.renderInstances(Vt,an,fe.count);else if(de.isInstancedBufferGeometry){const yt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Yn=Math.min(de.instanceCount,yt);bt.renderInstances(Vt,an,Yn)}else bt.render(Vt,an)};function ot(L,J,de){L.transparent===!0&&L.side===Gi&&L.forceSinglePass===!1?(L.side=dr,L.needsUpdate=!0,Yi(L,J,de),L.side=zo,L.needsUpdate=!0,Yi(L,J,de),L.side=Gi):Yi(L,J,de)}this.compile=function(L,J,de=null){de===null&&(de=L),y=Ce.get(de),y.init(),b.push(y),de.traverseVisible(function(fe){fe.isLight&&fe.layers.test(J.layers)&&(y.pushLight(fe),fe.castShadow&&y.pushShadow(fe))}),L!==de&&L.traverseVisible(function(fe){fe.isLight&&fe.layers.test(J.layers)&&(y.pushLight(fe),fe.castShadow&&y.pushShadow(fe))}),y.setupLights(M._useLegacyLights);const he=new Set;return L.traverse(function(fe){const Ge=fe.material;if(Ge)if(Array.isArray(Ge))for(let et=0;et<Ge.length;et++){const at=Ge[et];ot(at,de,fe),he.add(at)}else ot(Ge,de,fe),he.add(Ge)}),b.pop(),y=null,he},this.compileAsync=function(L,J,de=null){const he=this.compile(L,J,de);return new Promise(fe=>{function Ge(){if(he.forEach(function(et){ge.get(et).currentProgram.isReady()&&he.delete(et)}),he.size===0){fe(L);return}setTimeout(Ge,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let wt=null;function nn(L){wt&&wt(L)}function xn(){pn.stop()}function Pt(){pn.start()}const pn=new UM;pn.setAnimationLoop(nn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(L){wt=L,$e.setAnimationLoop(L),L===null?pn.stop():pn.start()},$e.addEventListener("sessionstart",xn),$e.addEventListener("sessionend",Pt),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(J),J=$e.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,J,I),y=Ce.get(L,b.length),y.init(),b.push(y),_e.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W.setFromProjectionMatrix(_e),ee=this.localClippingEnabled,Y=Ye.init(this.clippingPlanes,ee),E=ye.get(L,_.length),E.init(),_.push(E),On(L,J,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(X,ie),this.info.render.frame++,Y===!0&&Ye.beginShadows();const de=y.state.shadowsArray;if(De.render(de,L,J),Y===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(E,L),y.setupLights(M._useLegacyLights),J.isArrayCamera){const he=J.cameras;for(let fe=0,Ge=he.length;fe<Ge;fe++){const et=he[fe];Mu(E,L,et,et.viewport)}}else Mu(E,L,J);I!==null&&(Me.updateMultisampleRenderTarget(I),Me.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(M,L,J),ft.resetDefaultState(),ce=-1,C=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function On(L,J,de,he){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)de=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||W.intersectsSprite(L)){he&&be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(_e);const et=T.update(L),at=L.material;at.visible&&E.push(L,et,at,de,be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||W.intersectsObject(L))){const et=T.update(L),at=L.material;if(he&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),be.copy(L.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),be.copy(et.boundingSphere.center)),be.applyMatrix4(L.matrixWorld).applyMatrix4(_e)),Array.isArray(at)){const Xe=et.groups;for(let vt=0,dt=Xe.length;vt<dt;vt++){const pt=Xe[vt],Vt=at[pt.materialIndex];Vt&&Vt.visible&&E.push(L,et,Vt,de,be.z,pt)}}else at.visible&&E.push(L,et,at,de,be.z,null)}}const Ge=L.children;for(let et=0,at=Ge.length;et<at;et++)On(Ge[et],J,de,he)}function Mu(L,J,de,he){const fe=L.opaque,Ge=L.transmissive,et=L.transparent;y.setupLightsView(de),Y===!0&&Ye.setGlobalState(M.clippingPlanes,de),Ge.length>0&&Wo(fe,Ge,J,de),he&&ue.viewport(O.copy(he)),fe.length>0&&Ti(fe,J,de),Ge.length>0&&Ti(Ge,J,de),et.length>0&&Ti(et,J,de),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Wo(L,J,de,he){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;const Ge=le.isWebGL2;Z===null&&(Z=new wa(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?nu:Uo,minFilter:tu,samples:Ge?4:0})),M.getDrawingBufferSize(ve),Ge?Z.setSize(ve.x,ve.y):Z.setSize(If(ve.x),If(ve.y));const et=M.getRenderTarget();M.setRenderTarget(Z),M.getClearColor(pe),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const at=M.toneMapping;M.toneMapping=Io,Ti(L,de,he),Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z);let Xe=!1;for(let vt=0,dt=J.length;vt<dt;vt++){const pt=J[vt],Vt=pt.object,qn=pt.geometry,an=pt.material,tr=pt.group;if(an.side===Gi&&Vt.layers.test(he.layers)){const bt=an.side;an.side=dr,an.needsUpdate=!0,$o(Vt,de,he,qn,an,tr),an.side=bt,an.needsUpdate=!0,Xe=!0}}Xe===!0&&(Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z)),M.setRenderTarget(et),M.setClearColor(pe,H),M.toneMapping=at}function Ti(L,J,de){const he=J.isScene===!0?J.overrideMaterial:null;for(let fe=0,Ge=L.length;fe<Ge;fe++){const et=L[fe],at=et.object,Xe=et.geometry,vt=he===null?et.material:he,dt=et.group;at.layers.test(de.layers)&&$o(at,J,de,Xe,vt,dt)}}function $o(L,J,de,he,fe,Ge){L.onBeforeRender(M,J,de,he,fe,Ge),L.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),fe.onBeforeRender(M,J,de,he,L,Ge),fe.transparent===!0&&fe.side===Gi&&fe.forceSinglePass===!1?(fe.side=dr,fe.needsUpdate=!0,M.renderBufferDirect(de,J,he,fe,L,Ge),fe.side=zo,fe.needsUpdate=!0,M.renderBufferDirect(de,J,he,fe,L,Ge),fe.side=Gi):M.renderBufferDirect(de,J,he,fe,L,Ge),L.onAfterRender(M,J,de,he,fe,Ge)}function Yi(L,J,de){J.isScene!==!0&&(J=Oe);const he=ge.get(L),fe=y.state.lights,Ge=y.state.shadowsArray,et=fe.state.version,at=q.getParameters(L,fe.state,Ge,J,de),Xe=q.getProgramCacheKey(at);let vt=he.programs;he.environment=L.isMeshStandardMaterial?J.environment:null,he.fog=J.fog,he.envMap=(L.isMeshStandardMaterial?Ie:we).get(L.envMap||he.environment),vt===void 0&&(L.addEventListener("dispose",Re),vt=new Map,he.programs=vt);let dt=vt.get(Xe);if(dt!==void 0){if(he.currentProgram===dt&&he.lightsStateVersion===et)return Tu(L,at),dt}else at.uniforms=q.getUniforms(L),L.onBuild(de,at,M),L.onBeforeCompile(at,M),dt=q.acquireProgram(at,Xe),vt.set(Xe,dt),he.uniforms=at.uniforms;const pt=he.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(pt.clippingPlanes=Ye.uniform),Tu(L,at),he.needsLights=bu(L),he.lightsStateVersion=et,he.needsLights&&(pt.ambientLightColor.value=fe.state.ambient,pt.lightProbe.value=fe.state.probe,pt.directionalLights.value=fe.state.directional,pt.directionalLightShadows.value=fe.state.directionalShadow,pt.spotLights.value=fe.state.spot,pt.spotLightShadows.value=fe.state.spotShadow,pt.rectAreaLights.value=fe.state.rectArea,pt.ltc_1.value=fe.state.rectAreaLTC1,pt.ltc_2.value=fe.state.rectAreaLTC2,pt.pointLights.value=fe.state.point,pt.pointLightShadows.value=fe.state.pointShadow,pt.hemisphereLights.value=fe.state.hemi,pt.directionalShadowMap.value=fe.state.directionalShadowMap,pt.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,pt.spotShadowMap.value=fe.state.spotShadowMap,pt.spotLightMatrix.value=fe.state.spotLightMatrix,pt.spotLightMap.value=fe.state.spotLightMap,pt.pointShadowMap.value=fe.state.pointShadowMap,pt.pointShadowMatrix.value=fe.state.pointShadowMatrix),he.currentProgram=dt,he.uniformsList=null,dt}function Au(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=Sf.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function Tu(L,J){const de=ge.get(L);de.outputColorSpace=J.outputColorSpace,de.batching=J.batching,de.instancing=J.instancing,de.instancingColor=J.instancingColor,de.skinning=J.skinning,de.morphTargets=J.morphTargets,de.morphNormals=J.morphNormals,de.morphColors=J.morphColors,de.morphTargetsCount=J.morphTargetsCount,de.numClippingPlanes=J.numClippingPlanes,de.numIntersection=J.numClipIntersection,de.vertexAlphas=J.vertexAlphas,de.vertexTangents=J.vertexTangents,de.toneMapping=J.toneMapping}function pd(L,J,de,he,fe){J.isScene!==!0&&(J=Oe),Me.resetTextureUnits();const Ge=J.fog,et=he.isMeshStandardMaterial?J.environment:null,at=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Xi,Xe=(he.isMeshStandardMaterial?Ie:we).get(he.envMap||et),vt=he.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,dt=!!de.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),pt=!!de.morphAttributes.position,Vt=!!de.morphAttributes.normal,qn=!!de.morphAttributes.color;let an=Io;he.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(an=M.toneMapping);const tr=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,bt=tr!==void 0?tr.length:0,yt=ge.get(he),Yn=y.state.lights;if(Y===!0&&(ee===!0||L!==C)){const nr=L===C&&he.id===ce;Ye.setState(he,L,nr)}let Kt=!1;he.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Yn.state.version||yt.outputColorSpace!==at||fe.isBatchedMesh&&yt.batching===!1||!fe.isBatchedMesh&&yt.batching===!0||fe.isInstancedMesh&&yt.instancing===!1||!fe.isInstancedMesh&&yt.instancing===!0||fe.isSkinnedMesh&&yt.skinning===!1||!fe.isSkinnedMesh&&yt.skinning===!0||fe.isInstancedMesh&&yt.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&yt.instancingColor===!1&&fe.instanceColor!==null||yt.envMap!==Xe||he.fog===!0&&yt.fog!==Ge||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Ye.numPlanes||yt.numIntersection!==Ye.numIntersection)||yt.vertexAlphas!==vt||yt.vertexTangents!==dt||yt.morphTargets!==pt||yt.morphNormals!==Vt||yt.morphColors!==qn||yt.toneMapping!==an||le.isWebGL2===!0&&yt.morphTargetsCount!==bt)&&(Kt=!0):(Kt=!0,yt.__version=he.version);let Ci=yt.currentProgram;Kt===!0&&(Ci=Yi(he,J,fe));let Cu=!1,ii=!1,Ki=!1;const rn=Ci.getUniforms(),br=yt.uniforms;if(ue.useProgram(Ci.program)&&(Cu=!0,ii=!0,Ki=!0),he.id!==ce&&(ce=he.id,ii=!0),Cu||C!==L){rn.setValue(j,"projectionMatrix",L.projectionMatrix),rn.setValue(j,"viewMatrix",L.matrixWorldInverse);const nr=rn.map.cameraPosition;nr!==void 0&&nr.setValue(j,be.setFromMatrixPosition(L.matrixWorld)),le.logarithmicDepthBuffer&&rn.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&rn.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,ii=!0,Ki=!0)}if(fe.isSkinnedMesh){rn.setOptional(j,fe,"bindMatrix"),rn.setOptional(j,fe,"bindMatrixInverse");const nr=fe.skeleton;nr&&(le.floatVertexTextures?(nr.boneTexture===null&&nr.computeBoneTexture(),rn.setValue(j,"boneTexture",nr.boneTexture,Me)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}fe.isBatchedMesh&&(rn.setOptional(j,fe,"batchingTexture"),rn.setValue(j,"batchingTexture",fe._matricesTexture,Me));const js=de.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0&&le.isWebGL2===!0)&&lt.update(fe,de,Ci),(ii||yt.receiveShadow!==fe.receiveShadow)&&(yt.receiveShadow=fe.receiveShadow,rn.setValue(j,"receiveShadow",fe.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(br.envMap.value=Xe,br.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ii&&(rn.setValue(j,"toneMappingExposure",M.toneMappingExposure),yt.needsLights&&bi(br,Ki),Ge&&he.fog===!0&&Ae.refreshFogUniforms(br,Ge),Ae.refreshMaterialUniforms(br,he,re,se,Z),Sf.upload(j,Au(yt),br,Me)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Sf.upload(j,Au(yt),br,Me),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&rn.setValue(j,"center",fe.center),rn.setValue(j,"modelViewMatrix",fe.modelViewMatrix),rn.setValue(j,"normalMatrix",fe.normalMatrix),rn.setValue(j,"modelMatrix",fe.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const nr=he.uniformsGroups;for(let Xo=0,Ru=nr.length;Xo<Ru;Xo++)if(le.isWebGL2){const Pa=nr[Xo];st.update(Pa,Ci),st.bind(Pa,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function bi(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function bu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,J,de){ge.get(L.texture).__webglTexture=J,ge.get(L.depthTexture).__webglTexture=de;const he=ge.get(L);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=de===void 0,he.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,J){const de=ge.get(L);de.__webglFramebuffer=J,de.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(L,J=0,de=0){I=L,U=J,N=de;let he=!0,fe=null,Ge=!1,et=!1;if(L){const Xe=ge.get(L);Xe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(j.FRAMEBUFFER,null),he=!1):Xe.__webglFramebuffer===void 0?Me.setupRenderTarget(L):Xe.__hasExternalTextures&&Me.rebindTextures(L,ge.get(L.texture).__webglTexture,ge.get(L.depthTexture).__webglTexture);const vt=L.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(et=!0);const dt=ge.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(dt[J])?fe=dt[J][de]:fe=dt[J],Ge=!0):le.isWebGL2&&L.samples>0&&Me.useMultisampledRTT(L)===!1?fe=ge.get(L).__webglMultisampledFramebuffer:Array.isArray(dt)?fe=dt[de]:fe=dt,O.copy(L.viewport),oe.copy(L.scissor),ne=L.scissorTest}else O.copy($).multiplyScalar(re).floor(),oe.copy(P).multiplyScalar(re).floor(),ne=k;if(ue.bindFramebuffer(j.FRAMEBUFFER,fe)&&le.drawBuffers&&he&&ue.drawBuffers(L,fe),ue.viewport(O),ue.scissor(oe),ue.setScissorTest(ne),Ge){const Xe=ge.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xe.__webglTexture,de)}else if(et){const Xe=ge.get(L.texture),vt=J||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,de||0,vt)}ce=-1},this.readRenderTargetPixels=function(L,J,de,he,fe,Ge,et){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&et!==void 0&&(at=at[et]),at){ue.bindFramebuffer(j.FRAMEBUFFER,at);try{const Xe=L.texture,vt=Xe.format,dt=Xe.type;if(vt!==Fr&&Ft.convert(vt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pt=dt===nu&&(Ve.has("EXT_color_buffer_half_float")||le.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(dt!==Uo&&Ft.convert(dt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dt===Wi&&(le.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-he&&de>=0&&de<=L.height-fe&&j.readPixels(J,de,he,fe,Ft.convert(vt),Ft.convert(dt),Ge)}finally{const Xe=I!==null?ge.get(I).__webglFramebuffer:null;ue.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(L,J,de=0){const he=Math.pow(2,-de),fe=Math.floor(J.image.width*he),Ge=Math.floor(J.image.height*he);Me.setTexture2D(J,0),j.copyTexSubImage2D(j.TEXTURE_2D,de,0,0,L.x,L.y,fe,Ge),ue.unbindTexture()},this.copyTextureToTexture=function(L,J,de,he=0){const fe=J.image.width,Ge=J.image.height,et=Ft.convert(de.format),at=Ft.convert(de.type);Me.setTexture2D(de,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,de.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,de.unpackAlignment),J.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,he,L.x,L.y,fe,Ge,et,at,J.image.data):J.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,he,L.x,L.y,J.mipmaps[0].width,J.mipmaps[0].height,et,J.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,he,L.x,L.y,et,at,J.image),he===0&&de.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(L,J,de,he,fe=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=L.max.x-L.min.x+1,et=L.max.y-L.min.y+1,at=L.max.z-L.min.z+1,Xe=Ft.convert(he.format),vt=Ft.convert(he.type);let dt;if(he.isData3DTexture)Me.setTexture3D(he,0),dt=j.TEXTURE_3D;else if(he.isDataArrayTexture)Me.setTexture2DArray(he,0),dt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,he.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,he.unpackAlignment);const pt=j.getParameter(j.UNPACK_ROW_LENGTH),Vt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),qn=j.getParameter(j.UNPACK_SKIP_PIXELS),an=j.getParameter(j.UNPACK_SKIP_ROWS),tr=j.getParameter(j.UNPACK_SKIP_IMAGES),bt=de.isCompressedTexture?de.mipmaps[0]:de.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,bt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,bt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,L.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,L.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,L.min.z),de.isDataTexture||de.isData3DTexture?j.texSubImage3D(dt,fe,J.x,J.y,J.z,Ge,et,at,Xe,vt,bt.data):de.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(dt,fe,J.x,J.y,J.z,Ge,et,at,Xe,bt.data)):j.texSubImage3D(dt,fe,J.x,J.y,J.z,Ge,et,at,Xe,vt,bt),j.pixelStorei(j.UNPACK_ROW_LENGTH,pt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Vt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,qn),j.pixelStorei(j.UNPACK_SKIP_ROWS,an),j.pixelStorei(j.UNPACK_SKIP_IMAGES,tr),fe===0&&he.generateMipmaps&&j.generateMipmap(dt),ue.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Me.setTextureCube(L,0):L.isData3DTexture?Me.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Me.setTexture2DArray(L,0):Me.setTexture2D(L,0),ue.unbindTexture()},this.resetState=function(){U=0,N=0,I=null,ue.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Tv?"display-p3":"srgb",t.unpackColorSpace=Bt.workingColorSpace===ud?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dn?Ea:_M}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ea?Dn:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class HB extends Pm{}HB.prototype.isWebGL1Renderer=!0;class Dv{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new Dv(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class VB extends er{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class GB{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jn=new B;class Po{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new wr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Po(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class WB extends hr{constructor(e=null,t=1,i=1,a,s,c,u,d,h=Ln,p=Ln,m,g){super(null,c,u,d,h,p,a,s,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function $B(n,e){return n.z-e.z}function XB(n,e){return e.z-n.z}class jB{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const i=this.pool,a=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});const s=i[this.index];a.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const gs="batchId",Eo=new $t,hx=new $t,qB=new $t,px=new $t,Np=new cd,af=new Hr,da=new wi,Dl=new B,Fp=new jB,Wn=new ri,sf=[];function YB(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const a=n.count;for(let s=0;s<a;s++)for(let c=0;c<i;c++)e.setComponent(s+t,c,n.getComponent(s,c))}else e.array.set(n.array,t*i);e.needsUpdate=!0}class KB extends ri{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,i=t*2,a){super(new jn,a),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new WB(t,e,e,Fr,Wi);this._matricesTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,a=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const u in e.attributes){const d=e.getAttribute(u),{array:h,itemSize:p,normalized:m}=d,g=new h.constructor(i*p),S=new d.constructor(g,p,m);S.setUsage(d.usage),t.setAttribute(u,S)}if(e.getIndex()!==null){const u=i>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new wr(u,1))}const c=a>65536?new Uint32Array(i):new Uint16Array(i);t.setAttribute(gs,new wr(c,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(gs))throw new Error(`BatchedMesh: Geometry cannot use attribute "${gs}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(i===gs)continue;if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const a=e.getAttribute(i),s=t.getAttribute(i);if(a.itemSize!==s.itemSize||a.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this._geometryCount,t=this.boundingBox,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,Eo),this.getBoundingBoxAt(a,af).applyMatrix4(Eo),t.union(af))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this._geometryCount,t=this.boundingSphere,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,Eo),this.getBoundingSphereAt(a,da).applyMatrix4(Eo),t.union(da))}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const a={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const c=this._reservedRanges,u=this._drawRanges,d=this._bounds;this._geometryCount!==0&&(s=c[c.length-1]),t===-1?a.vertexCount=e.getAttribute("position").count:a.vertexCount=t,s===null?a.vertexStart=0:a.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),p=h!==null;if(p&&(i===-1?a.indexCount=h.count:a.indexCount=i,s===null?a.indexStart=0:a.indexStart=s.indexStart+s.indexCount),a.indexStart!==-1&&a.indexStart+a.indexCount>this._maxIndexCount||a.vertexStart+a.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const m=this._visibility,g=this._active,S=this._matricesTexture,w=this._matricesTexture.image.data;m.push(!0),g.push(!0);const E=this._geometryCount;this._geometryCount++,qB.toArray(w,E*16),S.needsUpdate=!0,c.push(a),u.push({start:p?a.indexStart:a.vertexStart,count:-1}),d.push({boxInitialized:!1,box:new Hr,sphereInitialized:!1,sphere:new wi});const y=this.geometry.getAttribute(gs);for(let _=0;_<a.vertexCount;_++)y.setX(a.vertexStart+_,E);return y.needsUpdate=!0,this.setGeometryAt(E,e),E}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,a=i.getIndex()!==null,s=i.getIndex(),c=t.getIndex(),u=this._reservedRanges[e];if(a&&c.count>u.indexCount||t.attributes.position.count>u.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const d=u.vertexStart,h=u.vertexCount;for(const S in i.attributes){if(S===gs)continue;const w=t.getAttribute(S),E=i.getAttribute(S);YB(w,E,d);const y=w.itemSize;for(let _=w.count,b=h;_<b;_++){const M=d+_;for(let R=0;R<y;R++)E.setComponent(M,R,0)}E.needsUpdate=!0}if(a){const S=u.indexStart;for(let w=0;w<c.count;w++)s.setX(S+w,d+c.getX(w));for(let w=c.count,E=u.indexCount;w<E;w++)s.setX(S+w,d);s.needsUpdate=!0}const p=this._bounds[e];t.boundingBox!==null?(p.box.copy(t.boundingBox),p.boxInitialized=!0):p.boxInitialized=!1,t.boundingSphere!==null?(p.sphere.copy(t.boundingSphere),p.sphereInitialized=!0):p.sphereInitialized=!1;const m=this._drawRanges[e],g=t.getAttribute("position");return m.count=a?c.count:g.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.box,c=this.geometry;if(a.boxInitialized===!1){s.makeEmpty();const u=c.index,d=c.attributes.position,h=this._drawRanges[e];for(let p=h.start,m=h.start+h.count;p<m;p++){let g=p;u&&(g=u.getX(g)),s.expandByPoint(Dl.fromBufferAttribute(d,g))}a.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.sphere,c=this.geometry;if(a.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,af),af.getCenter(s.center);const u=c.index,d=c.attributes.position,h=this._drawRanges[e];let p=0;for(let m=h.start,g=h.start+h.count;m<g;m++){let S=m;u&&(S=u.getX(S)),Dl.fromBufferAttribute(d,S),p=Math.max(p,s.center.distanceToSquared(Dl))}s.radius=Math.sqrt(p),a.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const i=this._active,a=this._matricesTexture,s=this._matricesTexture.image.data,c=this._geometryCount;return e>=c||i[e]===!1?this:(t.toArray(s,e*16),a.needsUpdate=!0,this)}getMatrixAt(e,t){const i=this._active,a=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||i[e]===!1?null:t.fromArray(a,e*16)}setVisibleAt(e,t){const i=this._visibility,a=this._active,s=this._geometryCount;return e>=s||a[e]===!1||i[e]===t?this:(i[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,i=this._active,a=this._geometryCount;return e>=a||i[e]===!1?!1:t[e]}raycast(e,t){const i=this._visibility,a=this._active,s=this._drawRanges,c=this._geometryCount,u=this.matrixWorld,d=this.geometry;Wn.material=this.material,Wn.geometry.index=d.index,Wn.geometry.attributes=d.attributes,Wn.geometry.boundingBox===null&&(Wn.geometry.boundingBox=new Hr),Wn.geometry.boundingSphere===null&&(Wn.geometry.boundingSphere=new wi);for(let h=0;h<c;h++){if(!i[h]||!a[h])continue;const p=s[h];Wn.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(h,Wn.matrixWorld).premultiply(u),this.getBoundingBoxAt(h,Wn.geometry.boundingBox),this.getBoundingSphereAt(h,Wn.geometry.boundingSphere),Wn.raycast(e,sf);for(let m=0,g=sf.length;m<g;m++){const S=sf[m];S.object=this,S.batchId=h,t.push(S)}sf.length=0}Wn.material=null,Wn.geometry.index=null,Wn.geometry.attributes={},Wn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,i,a,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const c=a.getIndex(),u=c===null?1:c.array.BYTES_PER_ELEMENT,d=this._visibility,h=this._multiDrawStarts,p=this._multiDrawCounts,m=this._drawRanges,g=this.perObjectFrustumCulled;g&&(px.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Np.setFromProjectionMatrix(px,e.isWebGPURenderer?ru:yi));let S=0;if(this.sortObjects){hx.copy(this.matrixWorld).invert(),Dl.setFromMatrixPosition(i.matrixWorld).applyMatrix4(hx);for(let y=0,_=d.length;y<_;y++)if(d[y]){this.getMatrixAt(y,Eo),this.getBoundingSphereAt(y,da).applyMatrix4(Eo);let b=!1;if(g&&(b=!Np.intersectsSphere(da)),!b){const M=Dl.distanceTo(da.center);Fp.push(m[y],M)}}const w=Fp.list,E=this.customSort;E===null?w.sort(s.transparent?XB:$B):E.call(this,w,i);for(let y=0,_=w.length;y<_;y++){const b=w[y];h[S]=b.start*u,p[S]=b.count,S++}Fp.reset()}else for(let w=0,E=d.length;w<E;w++)if(d[w]){let y=!1;if(g&&(this.getMatrixAt(w,Eo),this.getBoundingSphereAt(w,da).applyMatrix4(Eo),y=!Np.intersectsSphere(da)),!y){const _=m[w];h[S]=_.start*u,p[S]=_.count,S++}}this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,i,a,s,c){this.onBeforeRender(e,null,a,s,c)}}class wu extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mx=new B,vx=new B,gx=new $t,Op=new Cv,lf=new wi;class ZB extends er{constructor(e=new jn,t=new wu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)mx.fromBufferAttribute(t,a-1),vx.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=mx.distanceTo(vx);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lf.copy(i.boundingSphere),lf.applyMatrix4(a),lf.radius+=s,e.ray.intersectsSphere(lf)===!1)return;gx.copy(a).invert(),Op.copy(e.ray).applyMatrix4(gx);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=new B,p=new B,m=new B,g=new B,S=this.isLineSegments?2:1,w=i.index,y=i.attributes.position;if(w!==null){const _=Math.max(0,c.start),b=Math.min(w.count,c.start+c.count);for(let M=_,R=b-1;M<R;M+=S){const U=w.getX(M),N=w.getX(M+1);if(h.fromBufferAttribute(y,U),p.fromBufferAttribute(y,N),Op.distanceSqToSegment(h,p,g,m)>d)continue;g.applyMatrix4(this.matrixWorld);const ce=e.ray.origin.distanceTo(g);ce<e.near||ce>e.far||t.push({distance:ce,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,c.start),b=Math.min(y.count,c.start+c.count);for(let M=_,R=b-1;M<R;M+=S){if(h.fromBufferAttribute(y,M),p.fromBufferAttribute(y,M+1),Op.distanceSqToSegment(h,p,g,m)>d)continue;g.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(g);N<e.near||N>e.far||t.push({distance:N,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}const _x=new B,yx=new B;class dd extends ZB{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)_x.fromBufferAttribute(t,a),yx.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+_x.distanceTo(yx);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class JB extends jn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,a=new B,s=new B;if(e.index!==null){const c=e.attributes.position,u=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:u.count,materialIndex:0}]);for(let h=0,p=d.length;h<p;++h){const m=d[h],g=m.start,S=m.count;for(let w=g,E=g+S;w<E;w+=3)for(let y=0;y<3;y++){const _=u.getX(w+y),b=u.getX(w+(y+1)%3);a.fromBufferAttribute(c,_),s.fromBufferAttribute(c,b),xx(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}}else{const c=e.attributes.position;for(let u=0,d=c.count/3;u<d;u++)for(let h=0;h<3;h++){const p=3*u+h,m=3*u+(h+1)%3;a.fromBufferAttribute(c,p),s.fromBufferAttribute(c,m),xx(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ln(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function xx(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(a)===!0?!1:(t.add(i),t.add(a),!0)}class QB extends $s{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yM,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class e4 extends wu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class HM extends er{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kp=new $t,Sx=new B,Ex=new B;class t4{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sx),Ex.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ex),t.updateMatrixWorld(),kp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wx=new $t,Il=new B,zp=new B;class n4 extends t4{constructor(){super(new Sr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Il.setFromMatrixPosition(e.matrixWorld),i.position.copy(Il),zp.copy(i.position),zp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zp),i.updateMatrixWorld(),a.makeTranslation(-Il.x,-Il.y,-Il.z),wx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wx)}}class r4 extends HM{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new n4}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class i4 extends HM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class o4 extends jn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Lm extends GB{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Mx{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ax=new B,uf=new B;class a4{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ax.subVectors(e,this.start),uf.subVectors(this.end,this.start);const i=uf.dot(uf);let s=uf.dot(Ax)/i;return t&&(s=Un(s,0,1)),s}closestPointToPoint(e,t,i){const a=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class s4 extends dd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new jn;a.setAttribute("position",new ln(t,3)),a.setAttribute("color",new ln(i,3));const s=new wu({vertexColors:!0,toneMapped:!1});super(a,s),this.type="AxesHelper"}setColors(e,t,i){const a=new nt,s=this.geometry.attributes.color.array;return a.set(e),a.toArray(s,0),a.toArray(s,3),a.set(t),a.toArray(s,6),a.toArray(s,9),a.set(i),a.toArray(s,12),a.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Mi{constructor(e,t,i,a,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),Mi.nextNameID=Mi.nextNameID||0,this.$name.id=`lil-gui-name-${++Mi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class l4 extends Mi{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Dm(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const u4={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Dm,toHexString:Dm},ou={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},c4={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=ou.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return ou.toHexString(a)}},f4={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=ou.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return ou.toHexString(a)}},d4=[u4,ou,c4,f4];function h4(n){return d4.find(e=>e.match(n))}class p4 extends Mi{constructor(e,t,i,a){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=h4(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Dm(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Bp extends Mi{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class m4 extends Mi{constructor(e,t,i,a,s,c){super(e,t,i,"number"),this._initInput(),this.min(a),this.max(s);const u=c!==void 0;this.step(u?c:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},i=b=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+b),this.$input.value=this.getValue())},a=b=>{b.key==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),i(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),i(this._step*this._arrowKeyMultiplier(b)*-1))},s=b=>{this._inputFocused&&(b.preventDefault(),i(this._step*this._normalizeMouseWheel(b)))};let c=!1,u,d,h,p,m;const g=5,S=b=>{u=b.clientX,d=h=b.clientY,c=!0,p=this.getValue(),m=0,window.addEventListener("mousemove",w),window.addEventListener("mouseup",E)},w=b=>{if(c){const M=b.clientX-u,R=b.clientY-d;Math.abs(R)>g?(b.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>g&&E()}if(!c){const M=b.clientY-h;m-=M*this._step*this._arrowKeyMultiplier(b),p+m>this._max?m=this._max-p:p+m<this._min&&(m=this._min-p),this._snapClampSetValue(p+m)}h=b.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",E)},y=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,b,M,R,U)=>(_-b)/(M-b)*(U-R)+R,t=_=>{const b=this.$slider.getBoundingClientRect();let M=e(_,b.left,b.right,this._min,this._max);this._snapClampSetValue(M)},i=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",s)},a=_=>{t(_.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",s)};let c=!1,u,d;const h=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),c=!1},p=_=>{_.touches.length>1||(this._hasScrollBar?(u=_.touches[0].clientX,d=_.touches[0].clientY,c=!0):h(_),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",g))},m=_=>{if(c){const b=_.touches[0].clientX-u,M=_.touches[0].clientY-d;Math.abs(b)>Math.abs(M)?h(_):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g))}else _.preventDefault(),t(_.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g)},S=this._callOnFinishChange.bind(this),w=400;let E;const y=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const M=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(S,w)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class v4 extends Mi{constructor(e,t,i,a){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class g4 extends Mi{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const _4=`.lil-gui {
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
}`;function y4(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Tx=!1;class Nf{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:a,title:s="Controls",closeFolders:c=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!Tx&&u&&(y4(_4),Tx=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,i,a,s){if(Object(i)===i)return new v4(this,e,t,i);const c=e[t];switch(typeof c){case"number":return new m4(this,e,t,i,a,s);case"boolean":return new l4(this,e,t);case"string":return new g4(this,e,t);case"function":return new Bp(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,i=1){return new p4(this,e,t,i)}addFolder(e){const t=new Nf({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Bp||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Bp)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function Hp(n,e,t,i){return new(t||(t=Promise))((function(a,s){function c(h){try{d(i.next(h))}catch(p){s(p)}}function u(h){try{d(i.throw(h))}catch(p){s(p)}}function d(h){var p;h.done?a(h.value):(p=h.value,p instanceof t?p:new t((function(m){m(p)}))).then(c,u)}d((i=i.apply(n,[])).next())}))}class Iv{constructor(e,t,i,a){this.size=e,this.width=t,this.height=i,this.charLength=a,this.chars=""}static parse(e){const t=e.split(" "),i=t[0],a=i.split("x");return new Iv(i,+a[0],+a[1],+t[1])}get src(){return"data:image/jpeg;base64,"+this.chars}get isValid(){return this.chars.length==this.charLength&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(this.chars)}}class Uv{constructor(e,t,i,a){this.src=e,this.gcode=t,this.params=i,this.comment=a}}class bx extends Uv{constructor(e,t,i,a){super(e,t,i,a),this.params=i}}class wo extends Uv{constructor(e,t,i,a){super(e,t,void 0,i),this.toolIndex=a}}class Cx{constructor(e,t,i,a=0){this.layer=e,this.commands=t,this.lineNumber=i,this.height=a}}class Ff{constructor(e){this.lines=[],this.preamble=new Cx(-1,[],0),this.layers=[],this.curZ=0,this.maxZ=0,this.metadata={thumbnails:{}},this.tolerance=0,this.tolerance=e??this.tolerance}parseGCode(e){const t=Array.isArray(e)?e:e.split(`
`);this.lines=this.lines.concat(t);const i=this.lines2commands(t);this.groupIntoLayers(i);const a=this.parseMetadata(i.filter((s=>s.comment))).thumbnails;for(const[s,c]of Object.entries(a))this.metadata.thumbnails[s]=c;return{layers:this.layers,metadata:this.metadata}}lines2commands(e){return e.map((t=>this.parseCommand(t)))}parseCommand(e,t=!0){var i;const a=e.trim().split(";"),s=a[0],c=t&&a[1]||void 0,u=s.split(/([a-zA-Z])/g).slice(1).map((p=>p.trim())),d=u.length?`${(i=u[0])===null||i===void 0?void 0:i.toLowerCase()}${u[1]}`:"",h=this.parseParams(u.slice(2));switch(d){case"g0":case"g00":case"g1":case"g01":case"g2":case"g02":case"g3":case"g03":return new bx(e,d,h,c);case"t0":return new wo(e,d,c,0);case"t1":return new wo(e,d,c,1);case"t2":return new wo(e,d,c,2);case"t3":return new wo(e,d,c,3);case"t4":return new wo(e,d,c,4);case"t5":return new wo(e,d,c,5);case"t6":return new wo(e,d,c,6);case"t7":return new wo(e,d,c,7);default:return new Uv(e,d,h,c)}}parseMove(e){return e.reduce(((t,i)=>{const a=i.charAt(0).toLowerCase();return a!="x"&&a!="y"&&a!="z"&&a!="e"&&a!="r"&&a!="f"&&a!="i"&&a!="j"||(t[a]=parseFloat(i.slice(1))),t}),{})}isAlpha(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90}parseParams(e){return e.reduce(((t,i,a,s)=>{if(a%2==0)return t;let c=s[a-1];return c=c.toLowerCase(),this.isAlpha(c)&&(t[c]=parseFloat(i)),t}),{})}groupIntoLayers(e){var t;for(let i=0;i<e.length;i++){const a=e[i];if(a instanceof bx){const s=a.params;if(s.z&&(this.curZ=s.z),((t=s.e)!==null&&t!==void 0?t:0)>0&&(s.x!=null||s.y!=null)&&Math.abs(this.curZ-(this.maxZ||-1/0))>this.tolerance){const c=Math.abs(this.curZ-this.maxZ);this.maxZ=this.curZ,this.layers.push(new Cx(this.layers.length,[],i,c))}}this.maxLayer.commands.push(a)}return this.layers}get maxLayer(){var e;return(e=this.layers[this.layers.length-1])!==null&&e!==void 0?e:this.preamble}parseMetadata(e){const t={};let i;for(const a of e){const s=a.comment;if(!s)continue;const c=s.indexOf("thumbnail begin"),u=s.indexOf("thumbnail end");c>-1?i=Iv.parse(s.slice(c+15).trim()):i&&(u==-1?i.chars+=s.trim():(i.isValid&&(t[i.size]=i),i=void 0))}return{thumbnails:t}}}Ff.prototype.parseGcode=Ff.prototype.parseGCode;const Rx={type:"change"},Vp={type:"start"},Px={type:"end"},cf=new Cv,Lx=new Ao,x4=Math.cos(70*SM.DEG2RAD);class S4 extends Ra{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qa.ROTATE,MIDDLE:Qa.DOLLY,RIGHT:Qa.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(le){le.addEventListener("keydown",ze),this._domElementKeyEvents=le},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ze),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Rx),i.update(),s=a.NONE},this.update=(function(){const le=new B,ue=new Ma().setFromUnitVectors(e.up,new B(0,1,0)),xe=ue.clone().invert(),ge=new B,Me=new Ma,we=new B,Ie=2*Math.PI;return function(Ze=null){const D=i.object.position;le.copy(D).sub(i.target),le.applyQuaternion(ue),u.setFromVector3(le),i.autoRotate&&s===a.NONE&&O((function(ye){return ye!==null?2*Math.PI/60*i.autoRotateSpeed*ye:2*Math.PI/60/60*i.autoRotateSpeed})(Ze)),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let T=i.minAzimuthAngle,q=i.maxAzimuthAngle;isFinite(T)&&isFinite(q)&&(T<-Math.PI?T+=Ie:T>Math.PI&&(T-=Ie),q<-Math.PI?q+=Ie:q>Math.PI&&(q-=Ie),u.theta=T<=q?Math.max(T,Math.min(q,u.theta)):u.theta>(T+q)/2?Math.max(T,u.theta):Math.min(q,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&N||i.object.isOrthographicCamera?u.radius=X(u.radius):u.radius=X(u.radius*h),le.setFromSpherical(u),le.applyQuaternion(xe),D.copy(i.target).add(le),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let Ae=!1;if(i.zoomToCursor&&N){let ye=null;if(i.object.isPerspectiveCamera){const Ce=le.length();ye=X(Ce*h);const Ye=Ce-ye;i.object.position.addScaledVector(R,Ye),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ce=new B(U.x,U.y,0);Ce.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0;const Ye=new B(U.x,U.y,0);Ye.unproject(i.object),i.object.position.sub(Ye).add(Ce),i.object.updateMatrixWorld(),ye=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ye).add(i.object.position):(cf.origin.copy(i.object.position),cf.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(cf.direction))<x4?e.lookAt(i.target):(Lx.setFromNormalAndCoplanarPoint(i.object.up,i.target),cf.intersectPlane(Lx,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0);return h=1,N=!1,!!(Ae||ge.distanceToSquared(i.object.position)>c||8*(1-Me.dot(i.object.quaternion))>c||we.distanceToSquared(i.target)>0)&&(i.dispatchEvent(Rx),ge.copy(i.object.position),Me.copy(i.object.quaternion),we.copy(i.target),!0)}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Oe),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ze),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const c=1e-6,u=new Mx,d=new Mx;let h=1;const p=new B,m=new ht,g=new ht,S=new ht,w=new ht,E=new ht,y=new ht,_=new ht,b=new ht,M=new ht,R=new B,U=new ht;let N=!1;const I=[],ce={};function C(){return Math.pow(.95,i.zoomSpeed)}function O(le){d.theta-=le}function oe(le){d.phi-=le}const ne=(function(){const le=new B;return function(ue,xe){le.setFromMatrixColumn(xe,0),le.multiplyScalar(-ue),p.add(le)}})(),pe=(function(){const le=new B;return function(ue,xe){i.screenSpacePanning===!0?le.setFromMatrixColumn(xe,1):(le.setFromMatrixColumn(xe,0),le.crossVectors(i.object.up,le)),le.multiplyScalar(ue),p.add(le)}})(),H=(function(){const le=new B;return function(ue,xe){const ge=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;le.copy(Me).sub(i.target);let we=le.length();we*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*ue*we/ge.clientHeight,i.object.matrix),pe(2*xe*we/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(ue*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),pe(xe*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Q(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(le){if(!i.zoomToCursor)return;N=!0;const ue=i.domElement.getBoundingClientRect(),xe=le.clientX-ue.left,ge=le.clientY-ue.top,Me=ue.width,we=ue.height;U.x=xe/Me*2-1,U.y=-ge/we*2+1,R.set(U.x,U.y,1).unproject(i.object).sub(i.object.position).normalize()}function X(le){return Math.max(i.minDistance,Math.min(i.maxDistance,le))}function ie(le){m.set(le.clientX,le.clientY)}function $(le){w.set(le.clientX,le.clientY)}function P(){if(I.length===1)m.set(I[0].pageX,I[0].pageY);else{const le=.5*(I[0].pageX+I[1].pageX),ue=.5*(I[0].pageY+I[1].pageY);m.set(le,ue)}}function k(){if(I.length===1)w.set(I[0].pageX,I[0].pageY);else{const le=.5*(I[0].pageX+I[1].pageX),ue=.5*(I[0].pageY+I[1].pageY);w.set(le,ue)}}function W(){const le=I[0].pageX-I[1].pageX,ue=I[0].pageY-I[1].pageY,xe=Math.sqrt(le*le+ue*ue);_.set(0,xe)}function Y(le){if(I.length==1)g.set(le.pageX,le.pageY);else{const xe=Ve(le),ge=.5*(le.pageX+xe.x),Me=.5*(le.pageY+xe.y);g.set(ge,Me)}S.subVectors(g,m).multiplyScalar(i.rotateSpeed);const ue=i.domElement;O(2*Math.PI*S.x/ue.clientHeight),oe(2*Math.PI*S.y/ue.clientHeight),m.copy(g)}function ee(le){if(I.length===1)E.set(le.pageX,le.pageY);else{const ue=Ve(le),xe=.5*(le.pageX+ue.x),ge=.5*(le.pageY+ue.y);E.set(xe,ge)}y.subVectors(E,w).multiplyScalar(i.panSpeed),H(y.x,y.y),w.copy(E)}function Z(le){const ue=Ve(le),xe=le.pageX-ue.x,ge=le.pageY-ue.y,Me=Math.sqrt(xe*xe+ge*ge);b.set(0,Me),M.set(0,Math.pow(b.y/_.y,i.zoomSpeed)),Q(M.y),_.copy(b)}function _e(le){i.enabled!==!1&&(I.length===0&&(i.domElement.setPointerCapture(le.pointerId),i.domElement.addEventListener("pointermove",ve),i.domElement.addEventListener("pointerup",be)),(function(ue){I.push(ue)})(le),le.pointerType==="touch"?(function(ue){switch(Dt(ue),I.length){case 1:switch(i.touches.ONE){case es.ROTATE:if(i.enableRotate===!1)return;P(),s=a.TOUCH_ROTATE;break;case es.PAN:if(i.enablePan===!1)return;k(),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(i.touches.TWO){case es.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;i.enableZoom&&W(),i.enablePan&&k(),s=a.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;i.enableZoom&&W(),i.enableRotate&&P(),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(Vp)})(le):(function(ue){let xe;switch(ue.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Qa.DOLLY:if(i.enableZoom===!1)return;(function(ge){re(ge),_.set(ge.clientX,ge.clientY)})(ue),s=a.DOLLY;break;case Qa.ROTATE:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enablePan===!1)return;$(ue),s=a.PAN}else{if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}break;case Qa.PAN:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}else{if(i.enablePan===!1)return;$(ue),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(Vp)})(le))}function ve(le){i.enabled!==!1&&(le.pointerType==="touch"?(function(ue){switch(Dt(ue),s){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Y(ue),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ee(ue),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enablePan&&ee(xe)})(ue),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enableRotate&&Y(xe)})(ue),i.update();break;default:s=a.NONE}})(le):(function(ue){switch(s){case a.ROTATE:if(i.enableRotate===!1)return;(function(xe){g.set(xe.clientX,xe.clientY),S.subVectors(g,m).multiplyScalar(i.rotateSpeed);const ge=i.domElement;O(2*Math.PI*S.x/ge.clientHeight),oe(2*Math.PI*S.y/ge.clientHeight),m.copy(g),i.update()})(ue);break;case a.DOLLY:if(i.enableZoom===!1)return;(function(xe){b.set(xe.clientX,xe.clientY),M.subVectors(b,_),M.y>0?Q(C()):M.y<0&&se(C()),_.copy(b),i.update()})(ue);break;case a.PAN:if(i.enablePan===!1)return;(function(xe){E.set(xe.clientX,xe.clientY),y.subVectors(E,w).multiplyScalar(i.panSpeed),H(y.x,y.y),w.copy(E),i.update()})(ue)}})(le))}function be(le){(function(ue){delete ce[ue.pointerId];for(let xe=0;xe<I.length;xe++)if(I[xe].pointerId==ue.pointerId)return void I.splice(xe,1)})(le),I.length===0&&(i.domElement.releasePointerCapture(le.pointerId),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(Px),s=a.NONE}function Oe(le){i.enabled!==!1&&i.enableZoom!==!1&&s===a.NONE&&(le.preventDefault(),i.dispatchEvent(Vp),(function(ue){re(ue),ue.deltaY<0?se(C()):ue.deltaY>0&&Q(C()),i.update()})(le),i.dispatchEvent(Px))}function ze(le){i.enabled!==!1&&i.enablePan!==!1&&(function(ue){let xe=!1;switch(ue.code){case i.keys.UP:ue.ctrlKey||ue.metaKey||ue.shiftKey?oe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:ue.ctrlKey||ue.metaKey||ue.shiftKey?oe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:ue.ctrlKey||ue.metaKey||ue.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:ue.ctrlKey||ue.metaKey||ue.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),xe=!0}xe&&(ue.preventDefault(),i.update())})(le)}function j(le){i.enabled!==!1&&le.preventDefault()}function Dt(le){let ue=ce[le.pointerId];ue===void 0&&(ue=new ht,ce[le.pointerId]=ue),ue.set(le.pageX,le.pageY)}function Ve(le){const ue=le.pointerId===I[0].pointerId?I[1]:I[0];return ce[ue.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Oe,{passive:!1}),this.update()}}Fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},cr.line={uniforms:Rv.merge([Fe.common,Fe.fog,Fe.line]),vertexShader:`
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
		`};class VM extends Bo{constructor(e){super({type:"LineMaterial",uniforms:Rv.clone(cr.line.uniforms),vertexShader:cr.line.vertexShader,fragmentShader:cr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Dx=new Hr,ff=new B;class GM extends o4{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new ln([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new ln([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Lm(t,6,1);return this.setAttribute("instanceStart",new Po(i,3,0)),this.setAttribute("instanceEnd",new Po(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Lm(t,6,1);return this.setAttribute("instanceColorStart",new Po(i,3,0)),this.setAttribute("instanceColorEnd",new Po(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new JB(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Dx.setFromBufferAttribute(t),this.boundingBox.union(Dx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)ff.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(ff)),ff.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(ff));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Ix=new B,Ux=new B,bn=new Ht,Cn=new Ht,ci=new Ht,Gp=new B,Wp=new $t,Rn=new a4,Nx=new B,df=new Hr,hf=new wi,fi=new Ht;let di,ga;function Fx(n,e,t){return fi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),fi.multiplyScalar(1/fi.w),fi.x=ga/t.width,fi.y=ga/t.height,fi.applyMatrix4(n.projectionMatrixInverse),fi.multiplyScalar(1/fi.w),Math.abs(Math.max(fi.x,fi.y))}class E4 extends ri{constructor(e=new GM,t=new VM({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let c=0,u=0,d=t.count;c<d;c++,u+=2)Ix.fromBufferAttribute(t,c),Ux.fromBufferAttribute(i,c),a[u]=u===0?0:a[u-1],a[u+1]=a[u]+Ix.distanceTo(Ux);const s=new Lm(a,2,1);return e.setAttribute("instanceDistanceStart",new Po(s,1,0)),e.setAttribute("instanceDistanceEnd",new Po(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,a=e.camera;a!==null||i||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;di=e.ray;const c=this.matrixWorld,u=this.geometry,d=this.material;let h,p;ga=d.linewidth+s,u.boundingSphere===null&&u.computeBoundingSphere(),hf.copy(u.boundingSphere).applyMatrix4(c),i?h=.5*ga:h=Fx(a,Math.max(a.near,hf.distanceToPoint(di.origin)),d.resolution),hf.radius+=h,di.intersectsSphere(hf)!==!1&&(u.boundingBox===null&&u.computeBoundingBox(),df.copy(u.boundingBox).applyMatrix4(c),i?p=.5*ga:p=Fx(a,Math.max(a.near,df.distanceToPoint(di.origin)),d.resolution),df.expandByScalar(p),di.intersectsBox(df)!==!1&&(i?(function(m,g){const S=m.matrixWorld,w=m.geometry,E=w.attributes.instanceStart,y=w.attributes.instanceEnd;for(let _=0,b=Math.min(w.instanceCount,E.count);_<b;_++){Rn.start.fromBufferAttribute(E,_),Rn.end.fromBufferAttribute(y,_),Rn.applyMatrix4(S);const M=new B,R=new B;di.distanceSqToSegment(Rn.start,Rn.end,R,M),R.distanceTo(M)<.5*ga&&g.push({point:R,pointOnLine:M,distance:di.origin.distanceTo(R),object:m,face:null,faceIndex:_,uv:null,uv1:null})}})(this,t):(function(m,g,S){const w=g.projectionMatrix,E=m.material.resolution,y=m.matrixWorld,_=m.geometry,b=_.attributes.instanceStart,M=_.attributes.instanceEnd,R=Math.min(_.instanceCount,b.count),U=-g.near;di.at(1,ci),ci.w=1,ci.applyMatrix4(g.matrixWorldInverse),ci.applyMatrix4(w),ci.multiplyScalar(1/ci.w),ci.x*=E.x/2,ci.y*=E.y/2,ci.z=0,Gp.copy(ci),Wp.multiplyMatrices(g.matrixWorldInverse,y);for(let N=0,I=R;N<I;N++){if(bn.fromBufferAttribute(b,N),Cn.fromBufferAttribute(M,N),bn.w=1,Cn.w=1,bn.applyMatrix4(Wp),Cn.applyMatrix4(Wp),bn.z>U&&Cn.z>U)continue;if(bn.z>U){const ne=bn.z-Cn.z,pe=(bn.z-U)/ne;bn.lerp(Cn,pe)}else if(Cn.z>U){const ne=Cn.z-bn.z,pe=(Cn.z-U)/ne;Cn.lerp(bn,pe)}bn.applyMatrix4(w),Cn.applyMatrix4(w),bn.multiplyScalar(1/bn.w),Cn.multiplyScalar(1/Cn.w),bn.x*=E.x/2,bn.y*=E.y/2,Cn.x*=E.x/2,Cn.y*=E.y/2,Rn.start.copy(bn),Rn.start.z=0,Rn.end.copy(Cn),Rn.end.z=0;const ce=Rn.closestPointToPointParameter(Gp,!0);Rn.at(ce,Nx);const C=SM.lerp(bn.z,Cn.z,ce),O=C>=-1&&C<=1,oe=Gp.distanceTo(Nx)<.5*ga;if(O&&oe){Rn.start.fromBufferAttribute(b,N),Rn.end.fromBufferAttribute(M,N),Rn.start.applyMatrix4(y),Rn.end.applyMatrix4(y);const ne=new B,pe=new B;di.distanceSqToSegment(Rn.start,Rn.end,pe,ne),S.push({point:pe,pointOnLine:ne,distance:di.origin.distanceTo(pe),object:m,face:null,faceIndex:N,uv:null,uv1:null})}}})(this,a,t)))}}class w4 extends dd{constructor(e,t,i,a,s=4473924,c=8947848){s=new nt(s),c=new nt(c);const u=Math.round(e/t);i=Math.round(i/a)*a/2;const d=[],h=[];let p=0;for(let g=-1*(e=u*t/2);g<=e;g+=t){d.push(g,0,-1*i,g,0,i);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}for(let g=-1*i;g<=i;g+=a){d.push(-1*e,0,g,e,0,g);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}const m=new jn;m.setAttribute("position",new ln(d,3)),m.setAttribute("color",new ln(h,3)),super(m,new wu({vertexColors:!0,toneMapped:!1}))}}function M4(n,e,t,i){const a=(function(c,u,d){c*=.5,u*=.5,d*=.5;const h=new jn,p=[];return p.push(-c,-u,-d,-c,u,-d,-c,u,-d,c,u,-d,c,u,-d,c,-u,-d,c,-u,-d,-c,-u,-d,-c,-u,d,-c,u,d,-c,u,d,c,u,d,c,u,d,c,-u,d,c,-u,d,-c,-u,d,-c,-u,-d,-c,-u,d,-c,u,-d,-c,u,d,c,u,-d,c,u,d,c,-u,-d,c,-u,d),h.setAttribute("position",new ln(p,3)),h})(n,e,t),s=new dd(a,new e4({color:new nt(i),dashSize:3,gapSize:1}));return s.computeLineDistances(),s}var ql=function(){var n=0,e=document.createElement("div");function t(p){return e.appendChild(p.dom),p}function i(p){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===p?"block":"none";n=p}e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",(function(p){p.preventDefault(),i(++n%e.children.length)}),!1);var a=(performance||Date).now(),s=a,c=0,u=t(new ql.Panel("FPS","#0ff","#002")),d=t(new ql.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new ql.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=s+1e3&&(u.update(1e3*c/(p-s),100),s=p,c=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};ql.Panel=function(n,e,t){var i=1/0,a=0,s=Math.round,c=s(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,m=3*c,g=15*c,S=74*c,w=30*c,E=document.createElement("canvas");E.width=u,E.height=d,E.style.cssText="width:80px;height:48px";var y=E.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,u,d),y.fillStyle=e,y.fillText(n,h,p),y.fillRect(m,g,S,w),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m,g,S,w),{dom:E,update:function(_,b){i=Math.min(i,_),a=Math.max(a,_),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,u,g),y.fillStyle=e,y.fillText(s(_)+" "+n+" ("+s(i)+"-"+s(a)+")",h,p),y.drawImage(E,m+c,g,S-c,w,m,g,S-c,w),y.fillRect(m+S-c,g,c,w),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m+S-c,g,c,s((1-_/b)*w))}}};var A4=ql;class Ox{constructor(e,t){this.openFolders=[],this.watchedObject=e,this.options=t,this.gui=new Nf,this.gui.title("Dev info"),this.setup()}setup(){this.loadOpenFolders(),this.options&&!this.options.renderer||this.setupRedererFolder(),this.options&&!this.options.camera||this.setupCameraFolder(),this.options&&!this.options.parser||this.setupParserFolder(),this.options&&!this.options.buildVolume||this.setupBuildVolumeFolder(),this.options&&!this.options.devHelpers||this.setupDevHelpers()}reset(){this.gui.destroy(),this.gui=new Nf,this.gui.title("Dev info"),this.setup()}loadOpenFolders(){this.openFolders=JSON.parse(localStorage.getItem("dev-gui-open")||"{}").open||[]}saveOpenFolders(){this.openFolders=this.gui.foldersRecursive().filter((e=>!e._closed)).map((e=>e._title)),console.log(this.openFolders),localStorage.setItem("dev-gui-open",JSON.stringify({open:this.openFolders}))}setupRedererFolder(){const e=this.gui.addFolder("Render Info");this.openFolders.includes("Render Info")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.renderer.info.render,"triangles").listen(),e.add(this.watchedObject.renderer.info.render,"calls").listen(),e.add(this.watchedObject.renderer.info.render,"lines").listen(),e.add(this.watchedObject.renderer.info.render,"points").listen(),e.add(this.watchedObject.renderer.info.memory,"geometries").listen(),e.add(this.watchedObject.renderer.info.memory,"textures").listen(),e.add(this.watchedObject,"_lastRenderTime").listen()}setupCameraFolder(){const e=this.gui.addFolder("Camera");this.openFolders.includes("Camera")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()}));const t=e.addFolder("Camera position");t.add(this.watchedObject.camera.position,"x").listen(),t.add(this.watchedObject.camera.position,"y").listen(),t.add(this.watchedObject.camera.position,"z").listen();const i=e.addFolder("Camera rotation");i.add(this.watchedObject.camera.rotation,"x").listen(),i.add(this.watchedObject.camera.rotation,"y").listen(),i.add(this.watchedObject.camera.rotation,"z").listen()}setupParserFolder(){const e=this.gui.addFolder("Parser");this.openFolders.includes("Parser")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.parser,"curZ").listen(),e.add(this.watchedObject.parser,"maxZ").listen(),e.add(this.watchedObject.parser,"tolerance").listen(),e.add(this.watchedObject.parser.layers,"length").name("layers.count").listen(),e.add(this.watchedObject.parser.lines,"length").name("lines.count").listen()}setupBuildVolumeFolder(){const e=this.gui.addFolder("Build Volume");this.openFolders.includes("Build Volume")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.buildVolume,"x").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"y").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"z").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()}))}setupDevHelpers(){const e=this.gui.addFolder("Dev Helpers");this.openFolders.includes("Dev Helpers")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject,"_wireframe").listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject,"render").listen(),e.add(this.watchedObject,"clear").listen()}}class T4 extends jn{constructor(e=[new B],t=.6,i=.2,a=8){super(),this.type="ExtrusionGeometry",this.parameters={points:e,lineWidth:t,lineHeight:i,radialSegments:a,closed:!1};const s=new B,c=new B,u=new ht,d=[],h=[],p=[],m=[];function g(S){const[w,E,y]=(function(_){const b=e[_],M=new B,R=new B,U=new B,N=new B;M.copy(b).sub(e[_-1]||b).normalize().add((e[_+1]||b).clone().sub(b).normalize()).normalize();let I=Number.MAX_VALUE;const ce=Math.abs(M.x),C=Math.abs(M.y),O=Math.abs(M.z);return ce<=I&&(I=ce,R.set(1,0,0)),C<=I&&(I=C,R.set(0,1,0)),O<=I&&R.set(0,0,1),N.crossVectors(M,R).normalize(),R.crossVectors(M,N),U.crossVectors(M,R),[b,R,U]})(S);for(let _=0;_<=a;_++){const b=_/a*Math.PI*2,M=Math.sin(b),R=-Math.cos(b);c.x=R*E.x+M*y.x,c.y=R*E.y+M*y.y,c.z=R*E.z+M*y.z,c.normalize(),h.push(c.x,c.y,c.z),s.x=w.x+t*c.x*.5,s.y=w.y+t*c.y*.5,s.z=w.z+i*c.z*.5,d.push(s.x,s.y,s.z)}}(function(){for(let S=0;S<e.length;S++)g(S);g(closed===!1?e.length-1:0),(function(){for(let S=0;S<e.length;S++)for(let w=0;w<=a;w++)u.x=S/e.length,u.y=w/a,p.push(u.x,u.y)})(),(function(){for(let S=1;S<e.length;S++)for(let w=1;w<=a;w++){const E=(a+1)*(S-1)+(w-1),y=(a+1)*S+(w-1),_=(a+1)*S+w,b=(a+1)*(S-1)+w;m.push(E,y,b),m.push(y,_,b)}})()})(),this.setIndex(m),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(p,2))}}class Yl{static get initial(){const e=new Yl;return Object.assign(e,{x:0,y:0,z:0,r:0,e:0,i:0,j:0,t:0}),e}}const $p={h:0,s:0,l:0};class Ms{constructor(e){var t,i,a,s,c,u,d,h,p;if(this.minLayerThreshold=.05,this.renderExtrusion=!0,this.renderTravel=!1,this.renderTubes=!1,this.extrusionWidth=.6,this.singleLayerMode=!1,this.initialCameraPosition=[-100,400,450],this.debug=!1,this.inches=!1,this.nonTravelmoves=[],this.disableGradient=!1,this.state=Yl.initial,this.beyondFirstMove=!1,this.disposables=[],this._extrusionColor=Ms.defaultExtrusionColor,this.renderLayerIndex=0,this._geometries={},this._backgroundColor=new nt(14737632),this._travelColor=new nt(10027008),this._toolColors={},this.devMode=!1,this._lastRenderTime=0,this._wireframe=!1,this.minLayerThreshold=(t=e.minLayerThreshold)!==null&&t!==void 0?t:this.minLayerThreshold,this.parser=new Ff(this.minLayerThreshold),this.scene=new VB,this.scene.background=this._backgroundColor,e.backgroundColor!==void 0&&(this.backgroundColor=new nt(e.backgroundColor)),this.targetId=e.targetId,this.endLayer=e.endLayer,this.startLayer=e.startLayer,this.lineWidth=e.lineWidth,this.lineHeight=e.lineHeight,this.buildVolume=e.buildVolume,this.initialCameraPosition=(i=e.initialCameraPosition)!==null&&i!==void 0?i:this.initialCameraPosition,this.debug=(a=e.debug)!==null&&a!==void 0?a:this.debug,this.renderExtrusion=(s=e.renderExtrusion)!==null&&s!==void 0?s:this.renderExtrusion,this.renderTravel=(c=e.renderTravel)!==null&&c!==void 0?c:this.renderTravel,this.nonTravelmoves=(u=e.nonTravelMoves)!==null&&u!==void 0?u:this.nonTravelmoves,this.renderTubes=(d=e.renderTubes)!==null&&d!==void 0?d:this.renderTubes,this.extrusionWidth=(h=e.extrusionWidth)!==null&&h!==void 0?h:this.extrusionWidth,this.devMode=(p=e.devMode)!==null&&p!==void 0?p:this.devMode,this.stats=this.devMode?new A4:void 0,e.extrusionColor!==void 0&&(this.extrusionColor=e.extrusionColor),e.travelColor!==void 0&&(this.travelColor=new nt(e.travelColor)),e.topLayerColor!==void 0&&(this.topLayerColor=new nt(e.topLayerColor)),e.lastSegmentColor!==void 0&&(this.lastSegmentColor=new nt(e.lastSegmentColor)),e.toolColors){this._toolColors={};for(const[S,w]of Object.entries(e.toolColors))this._toolColors[parseInt(S)]=new nt(w)}if(e.disableGradient!==void 0&&(this.disableGradient=e.disableGradient),console.info("Using THREE r"+sd),console.debug("opts",e),this.targetId&&console.warn("`targetId` is deprecated and will removed in the future. Use `canvas` instead."),e.canvas)this.canvas=e.canvas,this.renderer=new Pm({canvas:this.canvas,preserveDrawingBuffer:!0});else{if(!this.targetId)throw Error("Set either opts.canvas or opts.targetId");const S=document.getElementById(this.targetId);if(!S)throw new Error("Unable to find element "+this.targetId);this.renderer=new Pm({preserveDrawingBuffer:!0}),this.canvas=this.renderer.domElement,S.appendChild(this.canvas)}this.camera=new Sr(25,this.canvas.offsetWidth/this.canvas.offsetHeight,10,5e3),this.camera.position.fromArray(this.initialCameraPosition);const m=this.camera.far,g=.8*m;this.scene.fog=new Dv(this._backgroundColor,g,m),this.resize(),this.controls=new S4(this.camera,this.renderer.domElement),this.initScene(),this.animate(),e.allowDragNDrop&&this._enableDropHandler(),this.initStats()}get extrusionColor(){return this._extrusionColor}set extrusionColor(e){if(Array.isArray(e)){this._extrusionColor=[];for(const[t,i]of e.entries())this._extrusionColor[t]=new nt(i)}else this._extrusionColor=new nt(e)}get currentToolColor(){var e;return this._extrusionColor===void 0?Ms.defaultExtrusionColor:this._extrusionColor instanceof nt?this._extrusionColor:(e=this._extrusionColor[this.state.t])!==null&&e!==void 0?e:Ms.defaultExtrusionColor}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=new nt(e),this.scene.background=this._backgroundColor}get travelColor(){return this._travelColor}set travelColor(e){this._travelColor=new nt(e)}get topLayerColor(){return this._topLayerColor}set topLayerColor(e){this._topLayerColor=e!==void 0?new nt(e):void 0}get lastSegmentColor(){return this._lastSegmentColor}set lastSegmentColor(e){this._lastSegmentColor=e!==void 0?new nt(e):void 0}get layers(){return[this.parser.preamble].concat(this.parser.layers.concat())}get maxLayerIndex(){var e;return((e=this.endLayer)!==null&&e!==void 0?e:this.layers.length)-1}get minLayerIndex(){var e;return this.singleLayerMode?this.maxLayerIndex:((e=this.startLayer)!==null&&e!==void 0?e:0)-1}animate(){var e;this.animationFrameId=requestAnimationFrame((()=>this.animate())),this.controls.update(),this.renderer.render(this.scene,this.camera),(e=this.stats)===null||e===void 0||e.update()}processGCode(e){this.parser.parseGCode(e),this.render()}initScene(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);for(;this.disposables.length>0;){const e=this.disposables.pop();e&&e.dispose()}if(this.debug&&this.buildVolume){const e=new s4(Math.max(this.buildVolume.x/2,this.buildVolume.y/2)+20);this.scene.add(e)}if(this.buildVolume&&this.drawBuildVolume(),this.renderTubes){console.warn("Volumetric rendering is experimental. It may not work as expected or change in the future.");const e=new i4(13421772,.3*Math.PI),t=new r4(16777215,Math.PI,void 0,.001);t.position.set(0,500,500),this.scene.add(e),this.scene.add(t)}}createGroup(e){const t=new Bl;return t.name=e,t.quaternion.setFromEuler(new Su(-Math.PI/2,0,0)),this.buildVolume?t.position.set(-this.buildVolume.x/2,0,this.buildVolume.y/2):t.position.set(-100,0,100),t}render(){const e=performance.now();this.group=this.createGroup("allLayers"),this.state=Yl.initial,this.initScene();for(let t=0;t<this.layers.length;t++)this.renderLayer(t);this.batchGeometries(),this.scene.add(this.group),this.renderer.render(this.scene,this.camera),this._lastRenderTime=performance.now()-e}renderAnimated(e=1){return Hp(this,void 0,void 0,(function*(){return this.initScene(),this.renderLayerIndex=0,this.renderFrameLoop(e>0?e:1)}))}renderFrameLoop(e){return new Promise((t=>{const i=()=>{this.renderLayerIndex>this.layers.length-1?t():(this.renderFrame(e),requestAnimationFrame(i))};i()}))}renderFrame(e){this.group=this.createGroup("layer"+this.renderLayerIndex);for(let t=0;t<e&&this.renderLayerIndex+t<this.layers.length;t++)this.renderLayer(this.renderLayerIndex),this.renderLayerIndex++;this.batchGeometries(),this.scene.add(this.group)}renderLayer(e){var t,i,a,s,c,u,d,h;if(e>this.maxLayerIndex)return;const p=this.layers[e],m={extrusion:[],travel:[],z:this.state.z,height:p.height};for(const g of p.commands)if(g.gcode!="g20"){if(g.gcode.startsWith("t")){this.doRenderExtrusion(m,e),m.extrusion=[];const S=g;this.state.t=S.toolIndex}else if(["g0","g00","g1","g01","g2","g02","g3","g03"].indexOf(g.gcode)>-1){const S=g,w={x:(t=S.params.x)!==null&&t!==void 0?t:this.state.x,y:(i=S.params.y)!==null&&i!==void 0?i:this.state.y,z:(a=S.params.z)!==null&&a!==void 0?a:this.state.z,r:(s=S.params.r)!==null&&s!==void 0?s:this.state.r,e:(c=S.params.e)!==null&&c!==void 0?c:this.state.e,i:(u=S.params.i)!==null&&u!==void 0?u:this.state.i,j:(d=S.params.j)!==null&&d!==void 0?d:this.state.j,t:this.state.t};if(e>=this.minLayerIndex){const E=((h=S.params.e)!==null&&h!==void 0?h:0)>0||this.nonTravelmoves.indexOf(g.gcode)>-1;(w.x!=this.state.x||w.y!=this.state.y||w.z!=this.state.z)&&(E&&this.renderExtrusion||!E&&this.renderTravel)&&(g.gcode=="g2"||g.gcode=="g3"||g.gcode=="g02"||g.gcode=="g03"?this.addArcSegment(m,this.state,w,E,g.gcode=="g2"||g.gcode=="g02"):this.addLineSegment(m,this.state,w,E))}this.state.x=w.x,this.state.y=w.y,this.state.z=w.z,this.beyondFirstMove||(this.beyondFirstMove=!0)}}else this.setInches();this.doRenderExtrusion(m,e)}doRenderExtrusion(e,t){var i,a;if(this.renderExtrusion){let s=this.currentToolColor;if(!this.singleLayerMode&&!this.renderTubes&&!this.disableGradient){const c=.1+.7*t/this.layers.length;s.getHSL($p),s=new nt().setHSL($p.h,$p.s,c)}if(t==this.layers.length-1){const c=(i=this._topLayerColor)!==null&&i!==void 0?i:s,u=(a=this._lastSegmentColor)!==null&&a!==void 0?a:c,d=e.extrusion.splice(-3),h=e.extrusion.splice(-3);this.renderTubes?(this.addTubeLine(e.extrusion,c.getHex(),e.height),this.addTubeLine([...h,...d],u.getHex(),e.height)):(this.addLine(e.extrusion,c.getHex()),this.addLine([...h,...d],u.getHex()))}else this.renderTubes?this.addTubeLine(e.extrusion,s.getHex(),e.height):this.addLine(e.extrusion,s.getHex())}this.renderTravel&&this.addLine(e.travel,this._travelColor.getHex())}setInches(){this.beyondFirstMove?console.warn("Switching units after movement is already made is discouraged and is not supported."):this.inches=!0}drawBuildVolume(){if(!this.buildVolume)return;this.scene.add(new w4(this.buildVolume.x,10,this.buildVolume.y,10));const e=M4(this.buildVolume.x,this.buildVolume.z,this.buildVolume.y,8947848);e.position.setY(this.buildVolume.z/2),this.scene.add(e)}clear(){this.resetState(),this.parser=new Ff(this.minLayerThreshold)}resetState(){var e;this.startLayer=1,this.endLayer=1/0,this.singleLayerMode=!1,this.beyondFirstMove=!1,this.state=Yl.initial,(e=this.devGui)===null||e===void 0||e.reset(),this._geometries={}}resize(){const[e,t]=[this.canvas.offsetWidth,this.canvas.offsetHeight];this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1)}addLineSegment(e,t,i,a){(a?e.extrusion:e.travel).push(t.x,t.y,t.z,i.x,i.y,i.z)}addArcSegment(e,t,i,a,s){const c=a?e.extrusion:e.travel,u=t.x,d=t.y,h=t.z,p=i.x,m=i.y,g=i.z;let S=i.r,w=i.i,E=i.j;if(S){const Q=p-u,se=m-d,re=Math.sqrt(Math.pow(Q/2,2)+Math.pow(se/2,2));S=Math.max(S,re);const X=Math.pow(Q,2)+Math.pow(se,2),ie=Math.pow(S,2)-X/4;let $=Math.sqrt(ie/X);(s&&S<0||!s&&S>0)&&($=-$),w=Q/2+se*$,E=se/2-Q*$}const y=u==p&&d==m,_=u+w,b=d+E,M=Math.sqrt(w*w+E*E),R=Math.atan2(-E,-w),U=Math.atan2(m-b,p-_);let N;y?N=2*Math.PI:(N=s?R-U:U-R,N<0&&(N+=2*Math.PI));let I=M*N/1.8;this.inches&&(I*=25),I<1&&(I=1);let ce=N/I;ce*=s?-1:1;const C=[];C.push({x:u,y:d,z:h});const O=(h-g)/I;let oe=u,ne=d,pe=h,H=R;for(let Q=0;Q<I-1;Q++)H+=ce,oe=_+M*Math.cos(H),ne=b+M*Math.sin(H),pe+=O,C.push({x:oe,y:ne,z:pe});C.push({x:i.x,y:i.y,z:i.z});for(let Q=0;Q<C.length-1;Q++)c.push(C[Q].x,C[Q].y,C[Q].z,C[Q+1].x,C[Q+1].y,C[Q+1].z)}addLine(e,t){var i;if(typeof this.lineWidth=="number"&&this.lineWidth>0)return void this.addThickLine(e,t);const a=new jn;a.setAttribute("position",new ln(e,3)),this.disposables.push(a);const s=new wu({color:t});this.disposables.push(s);const c=new dd(a,s);(i=this.group)===null||i===void 0||i.add(c)}addTubeLine(e,t,i=.2){let a=[];const s=[];for(let c=0;c<e.length;c+=6){const u=e.slice(c,c+9),d=new B(u[0],u[1],u[2]),h=new B(u[3],u[4],u[5]),p=new B(u[6],u[7],u[8]);a.push(d),h.equals(p)||(a.push(h),s.push(a),a=[])}s.forEach((c=>{var u;const d=new T4(c,this.extrusionWidth,this.lineHeight||i,4);(u=this._geometries)[t]||(u[t]=[]),this._geometries[t].push(d)}))}addThickLine(e,t){var i;if(!e.length||!this.lineWidth)return;const a=new GM;this.disposables.push(a);const s=new VM({color:t,linewidth:this.lineWidth/(1e3*window.devicePixelRatio)});this.disposables.push(s),a.setPositions(e);const c=new E4(a,s);(i=this.group)===null||i===void 0||i.add(c)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[],this.controls.dispose(),this.renderer.dispose(),this.cancelAnimation()}cancelAnimation(){this.animationFrameId!==void 0&&cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0}_enableDropHandler(){console.warn("Drag and drop is deprecated as a library feature. See the demo how to implement your own."),this.canvas.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.canvas.classList.add("dragging")})),this.canvas.addEventListener("dragleave",(e=>{e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging")})),this.canvas.addEventListener("drop",(e=>Hp(this,void 0,void 0,(function*(){var t,i;e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging");const a=((i=(t=e.dataTransfer)===null||t===void 0?void 0:t.files)!==null&&i!==void 0?i:[])[0];this.clear(),yield this._readFromStream(a.stream()),this.render()}))))}batchGeometries(){if(this._geometries)for(const e in this._geometries){const t=this.createBatchMesh(parseInt(e));for(;this._geometries[e].length>0;){const i=this._geometries[e].pop();t.addGeometry(i)}}}createBatchMesh(e){var t;const i=this._geometries[e],a=new QB({color:e,wireframe:this._wireframe});this.disposables.push(a);const s=i.reduce(((u,d)=>3*d.attributes.position.count+u),0),c=new KB(i.length,s,void 0,a);return this.disposables.push(c),(t=this.group)===null||t===void 0||t.add(c),c}_readFromStream(e){var t,i;return Hp(this,void 0,void 0,(function*(){const a=e.getReader();let s,c="",u=0;do{console.debug("reading from stream"),s=yield a.read(),u+=(i=(t=s.value)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0;const h=(d=s.value,new TextDecoder("utf-8").decode(d)),p=h.lastIndexOf(`
`),m=h.slice(0,p);this.parser.parseGCode(c+m),c=h.slice(p)}while(!s.done);var d;console.debug("read from stream",u)}))}initGui(){typeof this.devMode=="boolean"&&this.devMode===!0?this.devGui=new Ox(this):typeof this.devMode=="object"&&(this.devGui=new Ox(this,this.devMode))}initStats(){var e;this.stats&&(typeof this.devMode=="object"&&(this.statsContainer=this.devMode.statsContainer),((e=this.statsContainer)!==null&&e!==void 0?e:document.body).appendChild(this.stats.dom),this.stats.dom.classList.add("stats"),this.initGui())}}Ms.defaultExtrusionColor=new nt("hotpink");const b4=function(n){return new Ms(n)},C4=Fn.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`,R4=({gcode:n,endLayer:e,onMaxLayerIndex:t})=>{const i=ke.useRef(null),a=ke.useRef({webgl:null}),s=a.current.webgl,c=()=>{s&&(s.clear(),s.processGCode(n),t(Kf(s.layers.length)),s.render())};return ke.useEffect(()=>{!i.current||s||(a.current.webgl=b4({canvas:i.current,lineWidth:4,lineHeight:4,renderTravel:!1,renderExtrusion:!0,renderTubes:!1,startLayer:0,endLayer:In(e),backgroundColor:"black",buildVolume:{x:220,y:220,z:0}}),c())},[]),ke.useEffect(()=>{c()},[n]),ke.useEffect(()=>{s&&(s.endLayer=In(e),s.render())},[e]),Qe.jsx(C4,{ref:i})},P4=Fn.div`
    color: #2bc0b4;
    position: absolute;
    bottom: 16px;
    right: 70px;
    font-size: 12px;
    opacity: 0.7;
`,L4=({fileName:n})=>Qe.jsx(P4,{children:n});var Ul=At(Vo(Ho)),Nl=fE(),WM={reflectSymbol:function(){return"startLayer"}},D4=Bs(WM)()()(qi),$M={reflectSymbol:function(){return"endLayer"}},I4=Bs($M)()()(qi),XM={reflectSymbol:function(){return"gcodeLines"}},U4=Bs(XM)()()(qi),jM={reflectSymbol:function(){return"minLayer"}},N4=Bs(jM)()()(qi),qM={reflectSymbol:function(){return"maxLayer"}},F4=Bs(qM)()()(qi),Fl=ow(),YM={reflectSymbol:function(){return"MsgSetStartLayer"}},KM={reflectSymbol:function(){return"MsgSetEndLayer"}},ZM={reflectSymbol:function(){return"MsgSetGcodeLines"}},JM={reflectSymbol:function(){return"MsgSetMinLayer"}},QM={reflectSymbol:function(){return"MsgSetMaxLayer"}},hi=rw(),Of=Hs(JM),pf=Vs(tD),Nv=Hs(QM),hd=Vs(eD),e1=Nv(hd),kf=Hs(ZM),t1=e1(Of(hd)(pi)()())()(),Ef=Hs(KM),kx=kf(hd)(t1)()(),Im=Hs(YM),O4=At(fu),k4=hn(vu),z4=lv(zs),B4=At(gu),zx=hu(Xm(zs)),n1=pu(Tr),Bx=hn(n1),Hx=zf(Hf)(n1),Vx=At(Vo(Tr)),H4=Vm(qm(Tr)),Ol=Vs(aw),V4=lw(hi(Ef(Ol)(kf(Ol)(Nv(Ol)(Of(Ol)(Im(Ol)(pi)()())()())()())()())()())),G4=lE()(),W4={reflectSymbol:function(){return"PubState"}},Fv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ov=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),As=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),kv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),zv=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),$4={to:function(n){if(n instanceof Yt)return new Fv(n.value0);if(n instanceof Ne&&n.value0 instanceof Yt)return new Ov(n.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Yt)return new As(n.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne&&n.value0.value0.value0 instanceof Yt)return new kv(n.value0.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne&&n.value0.value0.value0 instanceof Ne)return new zv(n.value0.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 67, column 1 - line 67, column 30): "+[n.constructor.name])}},kl=Vs(sw($4)),X4=function(n){return function(e){if(n instanceof Fv)return Ul(To((function(){var t=Nl(_s)(pa);return function(i){return t(D4(i))}})())(n.value0)(e));if(n instanceof Ov)return Ul(To((function(){var t=Nl(_s)(pa);return function(i){return t(I4(i))}})())(n.value0)(e));if(n instanceof As)return Ul(To((function(){var t=Nl(_s)(pa);return function(i){return t(U4(i))}})())(n.value0)(e));if(n instanceof kv)return Ul(To((function(){var t=Nl(_s)(pa);return function(i){return t(N4(i))}})())(n.value0)(e));if(n instanceof zv)return Ul(To((function(){var t=Nl(_s)(pa);return function(i){return t(F4(i))}})())(n.value0)(e));throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 70, column 31 - line 89, column 11): "+[n.constructor.name])}},j4=cw(uw()(Ic(Fl(YM))(Ic(Fl(KM))(Ic(Fl(ZM))(Ic(Fl(JM))(Fl(QM))(hi(Of(pf)(pi)()()))(hi(e1(pi)()()))())(hi(kf(pf)(pi)()()))(hi(t1))())(hi(Ef(pf)(pi)()()))(hi(kx))())(hi(Im(pf)(pi)()()))(hi(Ef(hd)(kx)()()))())(hi(Ef(kl)(kf(kl)(Nv(kl)(Of(kl)(Im(kl)(pi)()())()())()())()())()()))),q4=(function(){return{gcodeLines:Cs.value,startLayer:0,endLayer:100,minLayer:0,maxLayer:100}})(),Y4=function(n){if(n instanceof Fv)return{tag:"MsgSetStartLayer",args:Jt(bo)(n.value0)};if(n instanceof Ov)return{tag:"MsgSetEndLayer",args:Jt(bo)(n.value0)};if(n instanceof As)return{tag:"MsgSetGcodeLines",args:Jt(nd(Jf(fr)))(n.value0)};if(n instanceof kv)return{tag:"MsgSetMinLayer",args:Jt(bo)(n.value0)};if(n instanceof zv)return{tag:"MsgSetMaxLayer",args:Jt(bo)(n.value0)};throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 92, column 13 - line 112, column 6): "+[n.constructor.name])},K4=function(n){var e=function(a){return function(s){var c=T2(Nt(O4(gn)))(k4(Wm(a(s)))(function(u){if(u instanceof ct)return z4(Tf(u.value0));if(u instanceof mt)return B4(gn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 152, column 7 - line 154, column 29): "+[u.constructor.name])}))();return{cancel:vE(w2(HT("cancel"))(c))}}},t=function(a){var s=(function(){var c=n.emitMsgCtx("loadGcodeLines");return function(u){return zx(c(u))}})();return Bx(zx(n.readPubState))(function(c){return Hx((function(){return c.gcodeLines instanceof Fo?Vx(gn):H4(Hx(s(new As(Fo.value)))(function(){return Bx(vL(a.url))(function(u){var d=KS(`
`)(u);return s(new As(new Rs(d)))})}))(function(u){return s(new As(new Ps(Tf(u))))})})())(function(){return Vx(gn)})})},i=V4({emitMsg:n.emitMsg})(j4);return G4({runLoadGcodeLines:e(t)})(i)},Z4=pv()(gi(gi(gi(gi(gi(sv)()()(WM))()()(jM))()()(qM))()()(XM))()()($M))(W4)({gcodeLines:nd(Jf(fr)),startLayer:bo,endLayer:bo,minLayer:bo,maxLayer:bo}),J4=Ew({updatePubState:function(n){return function(e){return Km(X4(n)(e))}},dispatchers:K4,initPubState:q4,initPrivState:{},printError:Mr(Ar),encodeJsonPubState:Jt(Z4),encodeMsg:Y4}),Q4=ww(J4),eH=Ai(_a);const tH=({gcodeUrl:n,fileName:e,pictures:t})=>{const{state:i,dispatch:a}=Q4();qD(()=>{const{cancel:c}=a.runLoadGcodeLines({url:n});return()=>{console.log("cleanup"),c()}},eH,n);const s=hw(i.gcodeLines,{NotAsked:()=>[],Loading:()=>[],Loaded:c=>c,Error:c=>[]});return Qe.jsxs(DI,{children:[Qe.jsx(R4,{gcode:s,endLayer:i.endLayer,onMaxLayerIndex:c=>a.MsgSetMaxLayer(c)}),Qe.jsx(PI,{currentLayer:i.endLayer,totalLayers:i.maxLayer}),Qe.jsx(yU,{value:i.endLayer,onChange:c=>a.MsgSetEndLayer(c),min:i.minLayer,max:i.maxLayer}),Qe.jsx(MU,{min:i.minLayer,max:i.maxLayer,step:Kf(5)}),Qe.jsx(L4,{fileName:e})]})},nH=Fn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 20px;
`,rH=({children:n})=>Qe.jsx(nH,{children:n}),iH=()=>{const{state:n,dispatch:e}=C3();return ke.useEffect(()=>{const t=w3();e.runFetchIndex({url:t.url})},[]),hw(n.index,{NotAsked:()=>Qe.jsx(Fc,{}),Loading:()=>Qe.jsx(Fc,{viewInfo:Qe.jsx(Qe.Fragment,{children:"Loading"})}),Loaded:t=>Qe.jsx(Fc,{children:Qe.jsx(rH,{children:t.content.map(i=>Qe.jsx(tH,{fileName:i.name,gcodeUrl:x3({absUrl:t.url,relUrl:i.gcode}),pictures:i.pictures}))})}),Error:t=>Qe.jsx(Fc,{viewErrors:Qe.jsx(Qe.Fragment,{children:"Error: "+t})})})};$A.createRoot(document.getElementById("root")).render(Qe.jsx(iH,{}));
