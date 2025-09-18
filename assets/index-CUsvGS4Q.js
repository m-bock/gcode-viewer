function HM(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(i,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function Uy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var th={exports:{}},nl={},nh={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function VM(){if(u_)return St;u_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(P,z,W){this.props=P,this.context=z,this.refs=w,this.updater=W||S}x.prototype.isReactComponent={},x.prototype.setState=function(P,z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,z,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=x.prototype;function C(P,z,W){this.props=P,this.context=z,this.refs=w,this.updater=W||S}var M=C.prototype=new _;M.constructor=C,E(M,x.prototype),M.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function de(P,z,W){var q,ee={},Z=null,_e=null;if(z!=null)for(q in z.ref!==void 0&&(_e=z.ref),z.key!==void 0&&(Z=""+z.key),z)I.call(z,q)&&!F.hasOwnProperty(q)&&(ee[q]=z[q]);var ve=arguments.length-2;if(ve===1)ee.children=W;else if(1<ve){for(var be=Array(ve),Fe=0;Fe<ve;Fe++)be[Fe]=arguments[Fe+2];ee.children=be}if(P&&P.defaultProps)for(q in ve=P.defaultProps,ve)ee[q]===void 0&&(ee[q]=ve[q]);return{$$typeof:n,type:P,key:Z,ref:_e,props:ee,_owner:O.current}}function b(P,z){return{$$typeof:n,type:P.type,key:z,ref:P.ref,props:P.props,_owner:P._owner}}function N(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function ae(P){var z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(W){return z[W]})}var ne=/\/+/g;function pe(P,z){return typeof P=="object"&&P!==null&&P.key!=null?ae(""+P.key):z.toString(36)}function H(P,z,W,q,ee){var Z=typeof P;(Z==="undefined"||Z==="boolean")&&(P=null);var _e=!1;if(P===null)_e=!0;else switch(Z){case"string":case"number":_e=!0;break;case"object":switch(P.$$typeof){case n:case e:_e=!0}}if(_e)return _e=P,ee=ee(_e),P=q===""?"."+pe(_e,0):q,R(ee)?(W="",P!=null&&(W=P.replace(ne,"$&/")+"/"),H(ee,z,W,"",function(Fe){return Fe})):ee!=null&&(N(ee)&&(ee=b(ee,W+(!ee.key||_e&&_e.key===ee.key?"":(""+ee.key).replace(ne,"$&/")+"/")+P)),z.push(ee)),1;if(_e=0,q=q===""?".":q+":",R(P))for(var ve=0;ve<P.length;ve++){Z=P[ve];var be=q+pe(Z,ve);_e+=H(Z,z,W,be,ee)}else if(be=g(P),typeof be=="function")for(P=be.call(P),ve=0;!(Z=P.next()).done;)Z=Z.value,be=q+pe(Z,ve++),_e+=H(Z,z,W,be,ee);else if(Z==="object")throw z=String(P),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return _e}function Q(P,z,W){if(P==null)return P;var q=[],ee=0;return H(P,q,"","",function(Z){return z.call(W,Z,ee++)}),q}function se(P){if(P._status===-1){var z=P._result;z=z(),z.then(function(W){(P._status===0||P._status===-1)&&(P._status=1,P._result=W)},function(W){(P._status===0||P._status===-1)&&(P._status=2,P._result=W)}),P._status===-1&&(P._status=0,P._result=z)}if(P._status===1)return P._result.default;throw P._result}var re={current:null},X={transition:null},ie={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function $(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Q,forEach:function(P,z,W){Q(P,function(){z.apply(this,arguments)},W)},count:function(P){var z=0;return Q(P,function(){z++}),z},toArray:function(P){return Q(P,function(z){return z})||[]},only:function(P){if(!N(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},St.Component=x,St.Fragment=t,St.Profiler=a,St.PureComponent=C,St.StrictMode=i,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,St.act=$,St.cloneElement=function(P,z,W){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var q=E({},P.props),ee=P.key,Z=P.ref,_e=P._owner;if(z!=null){if(z.ref!==void 0&&(Z=z.ref,_e=O.current),z.key!==void 0&&(ee=""+z.key),P.type&&P.type.defaultProps)var ve=P.type.defaultProps;for(be in z)I.call(z,be)&&!F.hasOwnProperty(be)&&(q[be]=z[be]===void 0&&ve!==void 0?ve[be]:z[be])}var be=arguments.length-2;if(be===1)q.children=W;else if(1<be){ve=Array(be);for(var Fe=0;Fe<be;Fe++)ve[Fe]=arguments[Fe+2];q.children=ve}return{$$typeof:n,type:P.type,key:ee,ref:Z,props:q,_owner:_e}},St.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:s,_context:P},P.Consumer=P},St.createElement=de,St.createFactory=function(P){var z=de.bind(null,P);return z.type=P,z},St.createRef=function(){return{current:null}},St.forwardRef=function(P){return{$$typeof:u,render:P}},St.isValidElement=N,St.lazy=function(P){return{$$typeof:p,_payload:{_status:-1,_result:P},_init:se}},St.memo=function(P,z){return{$$typeof:h,type:P,compare:z===void 0?null:z}},St.startTransition=function(P){var z=X.transition;X.transition={};try{P()}finally{X.transition=z}},St.unstable_act=$,St.useCallback=function(P,z){return re.current.useCallback(P,z)},St.useContext=function(P){return re.current.useContext(P)},St.useDebugValue=function(){},St.useDeferredValue=function(P){return re.current.useDeferredValue(P)},St.useEffect=function(P,z){return re.current.useEffect(P,z)},St.useId=function(){return re.current.useId()},St.useImperativeHandle=function(P,z,W){return re.current.useImperativeHandle(P,z,W)},St.useInsertionEffect=function(P,z){return re.current.useInsertionEffect(P,z)},St.useLayoutEffect=function(P,z){return re.current.useLayoutEffect(P,z)},St.useMemo=function(P,z){return re.current.useMemo(P,z)},St.useReducer=function(P,z,W){return re.current.useReducer(P,z,W)},St.useRef=function(P){return re.current.useRef(P)},St.useState=function(P){return re.current.useState(P)},St.useSyncExternalStore=function(P,z,W){return re.current.useSyncExternalStore(P,z,W)},St.useTransition=function(){return re.current.useTransition()},St.version="18.3.1",St}var c_;function Bp(){return c_||(c_=1,nh.exports=VM()),nh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function GM(){if(f_)return nl;f_=1;var n=Bp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!s.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:S,props:v,_owner:a.current}}return nl.Fragment=t,nl.jsx=c,nl.jsxs=c,nl}var d_;function WM(){return d_||(d_=1,th.exports=GM()),th.exports}var tt=WM(),Ju={},rh={exports:{}},tr={},ih={exports:{}},oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function $M(){return h_||(h_=1,(function(n){function e(X,ie){var $=X.length;X.push(ie);e:for(;0<$;){var P=$-1>>>1,z=X[P];if(0<a(z,ie))X[P]=ie,X[$]=z,$=P;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ie=X[0],$=X.pop();if($!==ie){X[0]=$;e:for(var P=0,z=X.length,W=z>>>1;P<W;){var q=2*(P+1)-1,ee=X[q],Z=q+1,_e=X[Z];if(0>a(ee,$))Z<z&&0>a(_e,ee)?(X[P]=_e,X[Z]=$,P=Z):(X[P]=ee,X[q]=$,P=q);else if(Z<z&&0>a(_e,$))X[P]=_e,X[Z]=$,P=Z;else break e}}return ie}function a(X,ie){var $=X.sortIndex-ie.sortIndex;return $!==0?$:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,g=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(X){for(var ie=t(h);ie!==null;){if(ie.callback===null)i(h);else if(ie.startTime<=X)i(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function R(X){if(w=!1,M(X),!E)if(t(d)!==null)E=!0,se(I);else{var ie=t(h);ie!==null&&re(R,ie.startTime-X)}}function I(X,ie){E=!1,w&&(w=!1,_(de),de=-1),S=!0;var $=g;try{for(M(ie),v=t(d);v!==null&&(!(v.expirationTime>ie)||X&&!ae());){var P=v.callback;if(typeof P=="function"){v.callback=null,g=v.priorityLevel;var z=P(v.expirationTime<=ie);ie=n.unstable_now(),typeof z=="function"?v.callback=z:v===t(d)&&i(d),M(ie)}else i(d);v=t(d)}if(v!==null)var W=!0;else{var q=t(h);q!==null&&re(R,q.startTime-ie),W=!1}return W}finally{v=null,g=$,S=!1}}var O=!1,F=null,de=-1,b=5,N=-1;function ae(){return!(n.unstable_now()-N<b)}function ne(){if(F!==null){var X=n.unstable_now();N=X;var ie=!0;try{ie=F(!0,X)}finally{ie?pe():(O=!1,F=null)}}else O=!1}var pe;if(typeof C=="function")pe=function(){C(ne)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Q=H.port2;H.port1.onmessage=ne,pe=function(){Q.postMessage(null)}}else pe=function(){x(ne,0)};function se(X){F=X,O||(O=!0,pe())}function re(X,ie){de=x(function(){X(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,se(I))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var $=g;g=ie;try{return X()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var $=g;g=X;try{return ie()}finally{g=$}},n.unstable_scheduleCallback=function(X,ie,$){var P=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?P+$:P):$=P,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=$+z,X={id:p++,callback:ie,priorityLevel:X,startTime:$,expirationTime:z,sortIndex:-1},$>P?(X.sortIndex=$,e(h,X),t(d)===null&&X===t(h)&&(w?(_(de),de=-1):w=!0,re(R,$-P))):(X.sortIndex=z,e(d,X),E||S||(E=!0,se(I))),X},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(X){var ie=g;return function(){var $=g;g=ie;try{return X.apply(this,arguments)}finally{g=$}}}})(oh)),oh}var p_;function XM(){return p_||(p_=1,ih.exports=$M()),ih.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function jM(){if(m_)return tr;m_=1;var n=Bp(),e=XM();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function s(r,o){c(r,o),c(r+"Capture",o)}function c(r,o){for(a[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(r){return d.call(v,r)?!0:d.call(p,r)?!1:h.test(r)?v[r]=!0:(p[r]=!0,!1)}function S(r,o,l,f){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,o,l,f){if(o===null||typeof o>"u"||S(r,o,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function w(r,o,l,f,m,y,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=r,this.type=o,this.sanitizeURL=y,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){x[r]=new w(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];x[o]=new w(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){x[r]=new w(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){x[r]=new w(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){x[r]=new w(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){x[r]=new w(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){x[r]=new w(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){x[r]=new w(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){x[r]=new w(r,5,!1,r.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){x[r]=new w(r,1,!1,r.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){x[r]=new w(r,1,!1,r.toLowerCase(),null,!0,!0)});function M(r,o,l,f){var m=x.hasOwnProperty(o)?x[o]:null;(m!==null?m.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,l,m,f)&&(l=null),f||m===null?g(o)&&(l===null?r.removeAttribute(o):r.setAttribute(o,""+l)):m.mustUseProperty?r[m.propertyName]=l===null?m.type===3?!1:"":l:(o=m.attributeName,f=m.attributeNamespace,l===null?r.removeAttribute(o):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?r.setAttributeNS(f,o,l):r.setAttribute(o,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),ae=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,P;function z(r){if(P===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);P=o&&o[1]||""}return`
`+P+r}var W=!1;function q(r,o){if(!r||W)return"";W=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(oe){var f=oe}Reflect.construct(r,[],o)}else{try{o.call()}catch(oe){f=oe}r.call(o.prototype)}else{try{throw Error()}catch(oe){f=oe}r()}}catch(oe){if(oe&&f&&typeof oe.stack=="string"){for(var m=oe.stack.split(`
`),y=f.stack.split(`
`),A=m.length-1,U=y.length-1;1<=A&&0<=U&&m[A]!==y[U];)U--;for(;1<=A&&0<=U;A--,U--)if(m[A]!==y[U]){if(A!==1||U!==1)do if(A--,U--,0>U||m[A]!==y[U]){var k=`
`+m[A].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=A&&0<=U);break}}}finally{W=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?z(r):""}function ee(r){switch(r.tag){case 5:return z(r.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return r=q(r.type,!1),r;case 11:return r=q(r.type.render,!1),r;case 1:return r=q(r.type,!0),r;default:return""}}function Z(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case O:return"Portal";case b:return"Profiler";case de:return"StrictMode";case pe:return"Suspense";case H:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case ae:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case ne:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Q:return o=r.displayName||null,o!==null?o:Z(r.type)||"Memo";case se:o=r._payload,r=r._init;try{return Z(r(o))}catch{}}return null}function _e(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(o);case 8:return o===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Fe(r){var o=be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,y.call(this,A)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Oe(r){r._valueTracker||(r._valueTracker=Fe(r))}function j(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var l=o.getValue(),f="";return r&&(f=be(r)?r.checked?"true":"false":r.value),r=f,r!==l?(o.setValue(r),!0):!1}function Lt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Be(r,o){var l=o.checked;return $({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function le(r,o){var l=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;l=ve(o.value!=null?o.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ue(r,o){o=o.checked,o!=null&&M(r,"checked",o,!1)}function xe(r,o){ue(r,o);var l=ve(o.value),f=o.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Me(r,o.type,l):o.hasOwnProperty("defaultValue")&&Me(r,o.type,ve(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function ge(r,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,l||o===r.value||(r.value=o),r.defaultValue=o}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Me(r,o,l){(o!=="number"||Lt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var we=Array.isArray;function Ie(r,o,l,f){if(r=r.options,o){o={};for(var m=0;m<l.length;m++)o["$"+l[m]]=!0;for(l=0;l<r.length;l++)m=o.hasOwnProperty("$"+r[l].value),r[l].selected!==m&&(r[l].selected=m),m&&f&&(r[l].defaultSelected=!0)}else{for(l=""+ve(l),o=null,m=0;m<r.length;m++){if(r[m].value===l){r[m].selected=!0,f&&(r[m].defaultSelected=!0);return}o!==null||r[m].disabled||(o=r[m])}o!==null&&(o.selected=!0)}}function Ze(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function D(r,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(we(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}r._wrapperState={initialValue:ve(l)}}function T(r,o){var l=ve(o.value),f=ve(o.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),o.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function Y(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function Ae(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?Ae(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ce,qe=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,f,m){MSApp.execUnsafeLocalFunction(function(){return r(o,l,f,m)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function De(r,o){if(o){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=o;return}}r.textContent=o}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(r){lt.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),ke[o]=ke[r]})});function Mt(r,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ke.hasOwnProperty(r)&&ke[r]?(""+o).trim():o+"px"}function Le(r,o){r=r.style;for(var l in o)if(o.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Mt(l,o[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,m):r[l]=m}}var Dt=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(r,o){if(o){if(Dt[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function st(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var et=null;function $e(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var _t=null,V=null,ze=null;function Re(r){if(r=Hs(r)){if(typeof _t!="function")throw Error(t(280));var o=r.stateNode;o&&(o=hu(o),_t(r.stateNode,r.type,o))}}function me(r){V?ze?ze.push(r):ze=[r]:V=r}function Ue(){if(V){var r=V,o=ze;if(ze=V=null,Re(r),o)for(r=0;r<o.length;r++)Re(o[r])}}function ot(r,o){return r(o)}function wt(){}var Jt=!1;function vn(r,o,l){if(Jt)return r(o,l);Jt=!0;try{return ot(r,o,l)}finally{Jt=!1,(V!==null||ze!==null)&&(wt(),Ue())}}function Rt(r,o){var l=r.stateNode;if(l===null)return null;var f=hu(l);if(f===null)return null;l=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var cn=!1;if(u)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){cn=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{cn=!1}function Xl(r,o,l,f,m,y,A,U,k){var oe=Array.prototype.slice.call(arguments,3);try{o.apply(l,oe)}catch(Ee){this.onError(Ee)}}var bo=!1,fi=null,Co=!1,Ii=null,jl={onError:function(r){bo=!0,fi=r}};function Yl(r,o,l,f,m,y,A,U,k){bo=!1,fi=null,Xl.apply(jl,arguments)}function wf(r,o,l,f,m,y,A,U,k){if(Yl.apply(this,arguments),bo){if(bo){var oe=fi;bo=!1,fi=null}else throw Error(t(198));Co||(Co=!0,Ii=oe)}}function di(r){var o=r,l=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(l=o.return),r=o.return;while(r)}return o.tag===3?l:null}function ql(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function L(r){if(di(r)!==r)throw Error(t(188))}function J(r){var o=r.alternate;if(!o){if(o=di(r),o===null)throw Error(t(188));return o!==r?null:r}for(var l=r,f=o;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return L(m),r;if(y===f)return L(m),o;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=y;else{for(var A=!1,U=m.child;U;){if(U===l){A=!0,l=m,f=y;break}if(U===f){A=!0,f=m,l=y;break}U=U.sibling}if(!A){for(U=y.child;U;){if(U===l){A=!0,l=y,f=m;break}if(U===f){A=!0,f=y,l=m;break}U=U.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:o}function fe(r){return r=J(r),r!==null?he(r):null}function he(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=he(r);if(o!==null)return o;r=r.sibling}return null}var ce=e.unstable_scheduleCallback,Ge=e.unstable_cancelCallback,Qe=e.unstable_shouldYield,at=e.unstable_requestPaint,Xe=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,dt=e.unstable_ImmediatePriority,pt=e.unstable_UserBlockingPriority,Bt=e.unstable_NormalPriority,Hn=e.unstable_LowPriority,nn=e.unstable_IdlePriority,Yn=null,At=null;function yt(r){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Yn,r,void 0,(r.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:Kl,jt=Math.log,hi=Math.LN2;function Kl(r){return r>>>=0,r===0?32:31-(jt(r)/hi|0)|0}var qr=64,Ui=4194304;function Qt(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function vr(r,o){var l=r.pendingLanes;if(l===0)return 0;var f=0,m=r.suspendedLanes,y=r.pingedLanes,A=l&268435455;if(A!==0){var U=A&~m;U!==0?f=Qt(U):(y&=A,y!==0&&(f=Qt(y)))}else A=l&~m,A!==0?f=Qt(A):y!==0&&(f=Qt(y));if(f===0)return 0;if(o!==0&&o!==f&&(o&m)===0&&(m=f&-f,y=o&-o,m>=y||m===16&&(y&4194240)!==0))return o;if((f&4)!==0&&(f|=l&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)l=31-Vn(o),m=1<<l,f|=r[l],o&=~m;return f}function ws(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qn(r,o){for(var l=r.suspendedLanes,f=r.pingedLanes,m=r.expirationTimes,y=r.pendingLanes;0<y;){var A=31-Vn(y),U=1<<A,k=m[A];k===-1?((U&l)===0||(U&f)!==0)&&(m[A]=ws(U,o)):k<=o&&(r.expiredLanes|=U),y&=~U}}function Ro(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Zl(){var r=qr;return qr<<=1,(qr&4194240)===0&&(qr=64),r}function ha(r){for(var o=[],l=0;31>l;l++)o.push(r);return o}function Ms(r,o,l){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Vn(o),r[o]=l}function lw(r,o){var l=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var m=31-Vn(l),y=1<<m;o[m]=0,f[m]=-1,r[m]=-1,l&=~y}}function Mf(r,o){var l=r.entangledLanes|=o;for(r=r.entanglements;l;){var f=31-Vn(l),m=1<<f;m&o|r[f]&o&&(r[f]|=o),l&=~m}}var Ut=0;function Hm(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Vm,Af,Gm,Wm,$m,Tf=!1,Jl=[],Ni=null,Fi=null,Oi=null,As=new Map,Ts=new Map,zi=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(r,o){switch(r){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":As.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(o.pointerId)}}function bs(r,o,l,f,m,y){return r===null||r.nativeEvent!==y?(r={blockedOn:o,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[m]},o!==null&&(o=Hs(o),o!==null&&Af(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),r)}function cw(r,o,l,f,m){switch(o){case"focusin":return Ni=bs(Ni,r,o,l,f,m),!0;case"dragenter":return Fi=bs(Fi,r,o,l,f,m),!0;case"mouseover":return Oi=bs(Oi,r,o,l,f,m),!0;case"pointerover":var y=m.pointerId;return As.set(y,bs(As.get(y)||null,r,o,l,f,m)),!0;case"gotpointercapture":return y=m.pointerId,Ts.set(y,bs(Ts.get(y)||null,r,o,l,f,m)),!0}return!1}function jm(r){var o=Po(r.target);if(o!==null){var l=di(o);if(l!==null){if(o=l.tag,o===13){if(o=ql(l),o!==null){r.blockedOn=o,$m(r.priority,function(){Gm(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ql(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var l=Cf(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);et=f,l.target.dispatchEvent(f),et=null}else return o=Hs(l),o!==null&&Af(o),r.blockedOn=l,!1;o.shift()}return!0}function Ym(r,o,l){Ql(r)&&l.delete(o)}function fw(){Tf=!1,Ni!==null&&Ql(Ni)&&(Ni=null),Fi!==null&&Ql(Fi)&&(Fi=null),Oi!==null&&Ql(Oi)&&(Oi=null),As.forEach(Ym),Ts.forEach(Ym)}function Cs(r,o){r.blockedOn===o&&(r.blockedOn=null,Tf||(Tf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fw)))}function Rs(r){function o(m){return Cs(m,r)}if(0<Jl.length){Cs(Jl[0],r);for(var l=1;l<Jl.length;l++){var f=Jl[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Ni!==null&&Cs(Ni,r),Fi!==null&&Cs(Fi,r),Oi!==null&&Cs(Oi,r),As.forEach(o),Ts.forEach(o),l=0;l<zi.length;l++)f=zi[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<zi.length&&(l=zi[0],l.blockedOn===null);)jm(l),l.blockedOn===null&&zi.shift()}var pa=R.ReactCurrentBatchConfig,eu=!0;function dw(r,o,l,f){var m=Ut,y=pa.transition;pa.transition=null;try{Ut=1,bf(r,o,l,f)}finally{Ut=m,pa.transition=y}}function hw(r,o,l,f){var m=Ut,y=pa.transition;pa.transition=null;try{Ut=4,bf(r,o,l,f)}finally{Ut=m,pa.transition=y}}function bf(r,o,l,f){if(eu){var m=Cf(r,o,l,f);if(m===null)$f(r,o,f,tu,l),Xm(r,f);else if(cw(m,r,o,l,f))f.stopPropagation();else if(Xm(r,f),o&4&&-1<uw.indexOf(r)){for(;m!==null;){var y=Hs(m);if(y!==null&&Vm(y),y=Cf(r,o,l,f),y===null&&$f(r,o,f,tu,l),y===m)break;m=y}m!==null&&f.stopPropagation()}else $f(r,o,f,null,l)}}var tu=null;function Cf(r,o,l,f){if(tu=null,r=$e(f),r=Po(r),r!==null)if(o=di(r),o===null)r=null;else if(l=o.tag,l===13){if(r=ql(o),r!==null)return r;r=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return tu=r,null}function qm(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case dt:return 1;case pt:return 4;case Bt:case Hn:return 16;case nn:return 536870912;default:return 16}default:return 16}}var ki=null,Rf=null,nu=null;function Km(){if(nu)return nu;var r,o=Rf,l=o.length,f,m="value"in ki?ki.value:ki.textContent,y=m.length;for(r=0;r<l&&o[r]===m[r];r++);var A=l-r;for(f=1;f<=A&&o[l-f]===m[y-f];f++);return nu=m.slice(r,1<f?1-f:void 0)}function ru(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function iu(){return!0}function Zm(){return!1}function lr(r){function o(l,f,m,y,A){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=y,this.target=A,this.currentTarget=null;for(var U in r)r.hasOwnProperty(U)&&(l=r[U],this[U]=l?l(y):y[U]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?iu:Zm,this.isPropagationStopped=Zm,this}return $(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),o}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pf=lr(ma),Ps=$({},ma,{view:0,detail:0}),pw=lr(Ps),Lf,Df,Ls,ou=$({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ls&&(Ls&&r.type==="mousemove"?(Lf=r.screenX-Ls.screenX,Df=r.screenY-Ls.screenY):Df=Lf=0,Ls=r),Lf)},movementY:function(r){return"movementY"in r?r.movementY:Df}}),Jm=lr(ou),mw=$({},ou,{dataTransfer:0}),vw=lr(mw),gw=$({},Ps,{relatedTarget:0}),If=lr(gw),_w=$({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),yw=lr(_w),xw=$({},ma,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Sw=lr(xw),Ew=$({},ma,{data:0}),Qm=lr(Ew),ww={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Aw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tw(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=Aw[r])?!!o[r]:!1}function Uf(){return Tw}var bw=$({},Ps,{key:function(r){if(r.key){var o=ww[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=ru(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Mw[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(r){return r.type==="keypress"?ru(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ru(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Cw=lr(bw),Rw=$({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ev=lr(Rw),Pw=$({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),Lw=lr(Pw),Dw=$({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iw=lr(Dw),Uw=$({},ou,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Nw=lr(Uw),Fw=[9,13,27,32],Nf=u&&"CompositionEvent"in window,Ds=null;u&&"documentMode"in document&&(Ds=document.documentMode);var Ow=u&&"TextEvent"in window&&!Ds,tv=u&&(!Nf||Ds&&8<Ds&&11>=Ds),nv=" ",rv=!1;function iv(r,o){switch(r){case"keyup":return Fw.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ov(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var va=!1;function zw(r,o){switch(r){case"compositionend":return ov(o);case"keypress":return o.which!==32?null:(rv=!0,nv);case"textInput":return r=o.data,r===nv&&rv?null:r;default:return null}}function kw(r,o){if(va)return r==="compositionend"||!Nf&&iv(r,o)?(r=Km(),nu=Rf=ki=null,va=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return tv&&o.locale!=="ko"?null:o.data;default:return null}}var Bw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!Bw[r.type]:o==="textarea"}function sv(r,o,l,f){me(f),o=cu(o,"onChange"),0<o.length&&(l=new Pf("onChange","change",null,l,f),r.push({event:l,listeners:o}))}var Is=null,Us=null;function Hw(r){Av(r,0)}function au(r){var o=Sa(r);if(j(o))return r}function Vw(r,o){if(r==="change")return o}var lv=!1;if(u){var Ff;if(u){var Of="oninput"in document;if(!Of){var uv=document.createElement("div");uv.setAttribute("oninput","return;"),Of=typeof uv.oninput=="function"}Ff=Of}else Ff=!1;lv=Ff&&(!document.documentMode||9<document.documentMode)}function cv(){Is&&(Is.detachEvent("onpropertychange",fv),Us=Is=null)}function fv(r){if(r.propertyName==="value"&&au(Us)){var o=[];sv(o,Us,r,$e(r)),vn(Hw,o)}}function Gw(r,o,l){r==="focusin"?(cv(),Is=o,Us=l,Is.attachEvent("onpropertychange",fv)):r==="focusout"&&cv()}function Ww(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return au(Us)}function $w(r,o){if(r==="click")return au(o)}function Xw(r,o){if(r==="input"||r==="change")return au(o)}function jw(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Ur=typeof Object.is=="function"?Object.is:jw;function Ns(r,o){if(Ur(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var l=Object.keys(r),f=Object.keys(o);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(o,m)||!Ur(r[m],o[m]))return!1}return!0}function dv(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function hv(r,o){var l=dv(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=o&&f>=o)return{node:l,offset:o-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=dv(l)}}function pv(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?pv(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function mv(){for(var r=window,o=Lt();o instanceof r.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)r=o.contentWindow;else break;o=Lt(r.document)}return o}function zf(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function Yw(r){var o=mv(),l=r.focusedElem,f=r.selectionRange;if(o!==l&&l&&l.ownerDocument&&pv(l.ownerDocument.documentElement,l)){if(f!==null&&zf(l)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(r,l.value.length);else if(r=(o=l.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var m=l.textContent.length,y=Math.min(f.start,m);f=f.end===void 0?y:Math.min(f.end,m),!r.extend&&y>f&&(m=f,f=y,y=m),m=hv(l,y);var A=hv(l,f);m&&A&&(r.rangeCount!==1||r.anchorNode!==m.node||r.anchorOffset!==m.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),r.removeAllRanges(),y>f?(r.addRange(o),r.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),r.addRange(o)))}}for(o=[],r=l;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)r=o[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var qw=u&&"documentMode"in document&&11>=document.documentMode,ga=null,kf=null,Fs=null,Bf=!1;function vv(r,o,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Bf||ga==null||ga!==Lt(f)||(f=ga,"selectionStart"in f&&zf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Fs&&Ns(Fs,f)||(Fs=f,f=cu(kf,"onSelect"),0<f.length&&(o=new Pf("onSelect","select",null,o,l),r.push({event:o,listeners:f}),o.target=ga)))}function su(r,o){var l={};return l[r.toLowerCase()]=o.toLowerCase(),l["Webkit"+r]="webkit"+o,l["Moz"+r]="moz"+o,l}var _a={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},Hf={},gv={};u&&(gv=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function lu(r){if(Hf[r])return Hf[r];if(!_a[r])return r;var o=_a[r],l;for(l in o)if(o.hasOwnProperty(l)&&l in gv)return Hf[r]=o[l];return r}var _v=lu("animationend"),yv=lu("animationiteration"),xv=lu("animationstart"),Sv=lu("transitionend"),Ev=new Map,wv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(r,o){Ev.set(r,o),s(o,[r])}for(var Vf=0;Vf<wv.length;Vf++){var Gf=wv[Vf],Kw=Gf.toLowerCase(),Zw=Gf[0].toUpperCase()+Gf.slice(1);Bi(Kw,"on"+Zw)}Bi(_v,"onAnimationEnd"),Bi(yv,"onAnimationIteration"),Bi(xv,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(Sv,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Mv(r,o,l){var f=r.type||"unknown-event";r.currentTarget=l,wf(f,o,void 0,r),r.currentTarget=null}function Av(r,o){o=(o&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],m=f.event;f=f.listeners;e:{var y=void 0;if(o)for(var A=f.length-1;0<=A;A--){var U=f[A],k=U.instance,oe=U.currentTarget;if(U=U.listener,k!==y&&m.isPropagationStopped())break e;Mv(m,U,oe),y=k}else for(A=0;A<f.length;A++){if(U=f[A],k=U.instance,oe=U.currentTarget,U=U.listener,k!==y&&m.isPropagationStopped())break e;Mv(m,U,oe),y=k}}}if(Co)throw r=Ii,Co=!1,Ii=null,r}function Wt(r,o){var l=o[Zf];l===void 0&&(l=o[Zf]=new Set);var f=r+"__bubble";l.has(f)||(Tv(o,r,2,!1),l.add(f))}function Wf(r,o,l){var f=0;o&&(f|=4),Tv(l,r,f,o)}var uu="_reactListening"+Math.random().toString(36).slice(2);function zs(r){if(!r[uu]){r[uu]=!0,i.forEach(function(l){l!=="selectionchange"&&(Jw.has(l)||Wf(l,!1,r),Wf(l,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[uu]||(o[uu]=!0,Wf("selectionchange",!1,o))}}function Tv(r,o,l,f){switch(qm(o)){case 1:var m=dw;break;case 4:m=hw;break;default:m=bf}l=m.bind(null,o,l,r),m=void 0,!cn||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),f?m!==void 0?r.addEventListener(o,l,{capture:!0,passive:m}):r.addEventListener(o,l,!0):m!==void 0?r.addEventListener(o,l,{passive:m}):r.addEventListener(o,l,!1)}function $f(r,o,l,f,m){var y=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var k=A.tag;if((k===3||k===4)&&(k=A.stateNode.containerInfo,k===m||k.nodeType===8&&k.parentNode===m))return;A=A.return}for(;U!==null;){if(A=Po(U),A===null)return;if(k=A.tag,k===5||k===6){f=y=A;continue e}U=U.parentNode}}f=f.return}vn(function(){var oe=y,Ee=$e(l),Te=[];e:{var Se=Ev.get(r);if(Se!==void 0){var We=Pf,Ye=r;switch(r){case"keypress":if(ru(l)===0)break e;case"keydown":case"keyup":We=Cw;break;case"focusin":Ye="focus",We=If;break;case"focusout":Ye="blur",We=If;break;case"beforeblur":case"afterblur":We=If;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=vw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=Lw;break;case _v:case yv:case xv:We=yw;break;case Sv:We=Iw;break;case"scroll":We=pw;break;case"wheel":We=Nw;break;case"copy":case"cut":case"paste":We=Sw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=ev}var Ke=(o&4)!==0,rn=!Ke&&r==="scroll",K=Ke?Se!==null?Se+"Capture":null:Se;Ke=[];for(var G=oe,te;G!==null;){te=G;var Pe=te.stateNode;if(te.tag===5&&Pe!==null&&(te=Pe,K!==null&&(Pe=Rt(G,K),Pe!=null&&Ke.push(ks(G,Pe,te)))),rn)break;G=G.return}0<Ke.length&&(Se=new We(Se,Ye,null,l,Ee),Te.push({event:Se,listeners:Ke}))}}if((o&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",We=r==="mouseout"||r==="pointerout",Se&&l!==et&&(Ye=l.relatedTarget||l.fromElement)&&(Po(Ye)||Ye[pi]))break e;if((We||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,We?(Ye=l.relatedTarget||l.toElement,We=oe,Ye=Ye?Po(Ye):null,Ye!==null&&(rn=di(Ye),Ye!==rn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(We=null,Ye=oe),We!==Ye)){if(Ke=Jm,Pe="onMouseLeave",K="onMouseEnter",G="mouse",(r==="pointerout"||r==="pointerover")&&(Ke=ev,Pe="onPointerLeave",K="onPointerEnter",G="pointer"),rn=We==null?Se:Sa(We),te=Ye==null?Se:Sa(Ye),Se=new Ke(Pe,G+"leave",We,l,Ee),Se.target=rn,Se.relatedTarget=te,Pe=null,Po(Ee)===oe&&(Ke=new Ke(K,G+"enter",Ye,l,Ee),Ke.target=te,Ke.relatedTarget=rn,Pe=Ke),rn=Pe,We&&Ye)t:{for(Ke=We,K=Ye,G=0,te=Ke;te;te=ya(te))G++;for(te=0,Pe=K;Pe;Pe=ya(Pe))te++;for(;0<G-te;)Ke=ya(Ke),G--;for(;0<te-G;)K=ya(K),te--;for(;G--;){if(Ke===K||K!==null&&Ke===K.alternate)break t;Ke=ya(Ke),K=ya(K)}Ke=null}else Ke=null;We!==null&&bv(Te,Se,We,Ke,!1),Ye!==null&&rn!==null&&bv(Te,rn,Ye,Ke,!0)}}e:{if(Se=oe?Sa(oe):window,We=Se.nodeName&&Se.nodeName.toLowerCase(),We==="select"||We==="input"&&Se.type==="file")var Je=Vw;else if(av(Se))if(lv)Je=Xw;else{Je=Ww;var rt=Gw}else(We=Se.nodeName)&&We.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Je=$w);if(Je&&(Je=Je(r,oe))){sv(Te,Je,l,Ee);break e}rt&&rt(r,Se,oe),r==="focusout"&&(rt=Se._wrapperState)&&rt.controlled&&Se.type==="number"&&Me(Se,"number",Se.value)}switch(rt=oe?Sa(oe):window,r){case"focusin":(av(rt)||rt.contentEditable==="true")&&(ga=rt,kf=oe,Fs=null);break;case"focusout":Fs=kf=ga=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,vv(Te,l,Ee);break;case"selectionchange":if(qw)break;case"keydown":case"keyup":vv(Te,l,Ee)}var it;if(Nf)e:{switch(r){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else va?iv(r,l)&&(ut="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(tv&&l.locale!=="ko"&&(va||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&va&&(it=Km()):(ki=Ee,Rf="value"in ki?ki.value:ki.textContent,va=!0)),rt=cu(oe,ut),0<rt.length&&(ut=new Qm(ut,r,null,l,Ee),Te.push({event:ut,listeners:rt}),it?ut.data=it:(it=ov(l),it!==null&&(ut.data=it)))),(it=Ow?zw(r,l):kw(r,l))&&(oe=cu(oe,"onBeforeInput"),0<oe.length&&(Ee=new Qm("onBeforeInput","beforeinput",null,l,Ee),Te.push({event:Ee,listeners:oe}),Ee.data=it))}Av(Te,o)})}function ks(r,o,l){return{instance:r,listener:o,currentTarget:l}}function cu(r,o){for(var l=o+"Capture",f=[];r!==null;){var m=r,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=Rt(r,l),y!=null&&f.unshift(ks(r,y,m)),y=Rt(r,o),y!=null&&f.push(ks(r,y,m))),r=r.return}return f}function ya(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function bv(r,o,l,f,m){for(var y=o._reactName,A=[];l!==null&&l!==f;){var U=l,k=U.alternate,oe=U.stateNode;if(k!==null&&k===f)break;U.tag===5&&oe!==null&&(U=oe,m?(k=Rt(l,y),k!=null&&A.unshift(ks(l,k,U))):m||(k=Rt(l,y),k!=null&&A.push(ks(l,k,U)))),l=l.return}A.length!==0&&r.push({event:o,listeners:A})}var Qw=/\r\n?/g,eM=/\u0000|\uFFFD/g;function Cv(r){return(typeof r=="string"?r:""+r).replace(Qw,`
`).replace(eM,"")}function fu(r,o,l){if(o=Cv(o),Cv(r)!==o&&l)throw Error(t(425))}function du(){}var Xf=null,jf=null;function Yf(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,Rv=typeof Promise=="function"?Promise:void 0,nM=typeof queueMicrotask=="function"?queueMicrotask:typeof Rv<"u"?function(r){return Rv.resolve(null).then(r).catch(rM)}:qf;function rM(r){setTimeout(function(){throw r})}function Kf(r,o){var l=o,f=0;do{var m=l.nextSibling;if(r.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){r.removeChild(m),Rs(o);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Rs(o)}function Hi(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Pv(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return r;o--}else l==="/$"&&o++}r=r.previousSibling}return null}var xa=Math.random().toString(36).slice(2),Kr="__reactFiber$"+xa,Bs="__reactProps$"+xa,pi="__reactContainer$"+xa,Zf="__reactEvents$"+xa,iM="__reactListeners$"+xa,oM="__reactHandles$"+xa;function Po(r){var o=r[Kr];if(o)return o;for(var l=r.parentNode;l;){if(o=l[pi]||l[Kr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(r=Pv(r);r!==null;){if(l=r[Kr])return l;r=Pv(r)}return o}r=l,l=r.parentNode}return null}function Hs(r){return r=r[Kr]||r[pi],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Sa(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function hu(r){return r[Bs]||null}var Jf=[],Ea=-1;function Vi(r){return{current:r}}function $t(r){0>Ea||(r.current=Jf[Ea],Jf[Ea]=null,Ea--)}function Ht(r,o){Ea++,Jf[Ea]=r.current,r.current=o}var Gi={},Ln=Vi(Gi),Kn=Vi(!1),Lo=Gi;function wa(r,o){var l=r.type.contextTypes;if(!l)return Gi;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=o[y];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=m),m}function Zn(r){return r=r.childContextTypes,r!=null}function pu(){$t(Kn),$t(Ln)}function Lv(r,o,l){if(Ln.current!==Gi)throw Error(t(168));Ht(Ln,o),Ht(Kn,l)}function Dv(r,o,l){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in o))throw Error(t(108,_e(r)||"Unknown",m));return $({},l,f)}function mu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Gi,Lo=Ln.current,Ht(Ln,r),Ht(Kn,Kn.current),!0}function Iv(r,o,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=Dv(r,o,Lo),f.__reactInternalMemoizedMergedChildContext=r,$t(Kn),$t(Ln),Ht(Ln,r)):$t(Kn),Ht(Kn,l)}var mi=null,vu=!1,Qf=!1;function Uv(r){mi===null?mi=[r]:mi.push(r)}function aM(r){vu=!0,Uv(r)}function Wi(){if(!Qf&&mi!==null){Qf=!0;var r=0,o=Ut;try{var l=mi;for(Ut=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}mi=null,vu=!1}catch(m){throw mi!==null&&(mi=mi.slice(r+1)),ce(dt,Wi),m}finally{Ut=o,Qf=!1}}return null}var Ma=[],Aa=0,gu=null,_u=0,gr=[],_r=0,Do=null,vi=1,gi="";function Io(r,o){Ma[Aa++]=_u,Ma[Aa++]=gu,gu=r,_u=o}function Nv(r,o,l){gr[_r++]=vi,gr[_r++]=gi,gr[_r++]=Do,Do=r;var f=vi;r=gi;var m=32-Vn(f)-1;f&=~(1<<m),l+=1;var y=32-Vn(o)+m;if(30<y){var A=m-m%5;y=(f&(1<<A)-1).toString(32),f>>=A,m-=A,vi=1<<32-Vn(o)+m|l<<m|f,gi=y+r}else vi=1<<y|l<<m|f,gi=r}function ed(r){r.return!==null&&(Io(r,1),Nv(r,1,0))}function td(r){for(;r===gu;)gu=Ma[--Aa],Ma[Aa]=null,_u=Ma[--Aa],Ma[Aa]=null;for(;r===Do;)Do=gr[--_r],gr[_r]=null,gi=gr[--_r],gr[_r]=null,vi=gr[--_r],gr[_r]=null}var ur=null,cr=null,Yt=!1,Nr=null;function Fv(r,o){var l=Er(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=r,o=r.deletions,o===null?(r.deletions=[l],r.flags|=16):o.push(l)}function Ov(r,o){switch(r.tag){case 5:var l=r.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,ur=r,cr=Hi(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,ur=r,cr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Do!==null?{id:vi,overflow:gi}:null,r.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Er(18,null,null,0),l.stateNode=o,l.return=r,r.child=l,ur=r,cr=null,!0):!1;default:return!1}}function nd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function rd(r){if(Yt){var o=cr;if(o){var l=o;if(!Ov(r,o)){if(nd(r))throw Error(t(418));o=Hi(l.nextSibling);var f=ur;o&&Ov(r,o)?Fv(f,l):(r.flags=r.flags&-4097|2,Yt=!1,ur=r)}}else{if(nd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Yt=!1,ur=r}}}function zv(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ur=r}function yu(r){if(r!==ur)return!1;if(!Yt)return zv(r),Yt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!Yf(r.type,r.memoizedProps)),o&&(o=cr)){if(nd(r))throw kv(),Error(t(418));for(;o;)Fv(r,o),o=Hi(o.nextSibling)}if(zv(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(o===0){cr=Hi(r.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}r=r.nextSibling}cr=null}}else cr=ur?Hi(r.stateNode.nextSibling):null;return!0}function kv(){for(var r=cr;r;)r=Hi(r.nextSibling)}function Ta(){cr=ur=null,Yt=!1}function id(r){Nr===null?Nr=[r]:Nr.push(r)}var sM=R.ReactCurrentBatchConfig;function Vs(r,o,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var m=f,y=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(A){var U=m.refs;A===null?delete U[y]:U[y]=A},o._stringRef=y,o)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function xu(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function Bv(r){var o=r._init;return o(r._payload)}function Hv(r){function o(K,G){if(r){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function l(K,G){if(!r)return null;for(;G!==null;)o(K,G),G=G.sibling;return null}function f(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function m(K,G){return K=Ji(K,G),K.index=0,K.sibling=null,K}function y(K,G,te){return K.index=te,r?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function A(K){return r&&K.alternate===null&&(K.flags|=2),K}function U(K,G,te,Pe){return G===null||G.tag!==6?(G=qd(te,K.mode,Pe),G.return=K,G):(G=m(G,te),G.return=K,G)}function k(K,G,te,Pe){var Je=te.type;return Je===F?Ee(K,G,te.props.children,Pe,te.key):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&Bv(Je)===G.type)?(Pe=m(G,te.props),Pe.ref=Vs(K,G,te),Pe.return=K,Pe):(Pe=Wu(te.type,te.key,te.props,null,K.mode,Pe),Pe.ref=Vs(K,G,te),Pe.return=K,Pe)}function oe(K,G,te,Pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Kd(te,K.mode,Pe),G.return=K,G):(G=m(G,te.children||[]),G.return=K,G)}function Ee(K,G,te,Pe,Je){return G===null||G.tag!==7?(G=Ho(te,K.mode,Pe,Je),G.return=K,G):(G=m(G,te),G.return=K,G)}function Te(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=qd(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return te=Wu(G.type,G.key,G.props,null,K.mode,te),te.ref=Vs(K,null,G),te.return=K,te;case O:return G=Kd(G,K.mode,te),G.return=K,G;case se:var Pe=G._init;return Te(K,Pe(G._payload),te)}if(we(G)||ie(G))return G=Ho(G,K.mode,te,null),G.return=K,G;xu(K,G)}return null}function Se(K,G,te,Pe){var Je=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Je!==null?null:U(K,G,""+te,Pe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return te.key===Je?k(K,G,te,Pe):null;case O:return te.key===Je?oe(K,G,te,Pe):null;case se:return Je=te._init,Se(K,G,Je(te._payload),Pe)}if(we(te)||ie(te))return Je!==null?null:Ee(K,G,te,Pe,null);xu(K,te)}return null}function We(K,G,te,Pe,Je){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return K=K.get(te)||null,U(G,K,""+Pe,Je);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case I:return K=K.get(Pe.key===null?te:Pe.key)||null,k(G,K,Pe,Je);case O:return K=K.get(Pe.key===null?te:Pe.key)||null,oe(G,K,Pe,Je);case se:var rt=Pe._init;return We(K,G,te,rt(Pe._payload),Je)}if(we(Pe)||ie(Pe))return K=K.get(te)||null,Ee(G,K,Pe,Je,null);xu(G,Pe)}return null}function Ye(K,G,te,Pe){for(var Je=null,rt=null,it=G,ut=G=0,yn=null;it!==null&&ut<te.length;ut++){it.index>ut?(yn=it,it=null):yn=it.sibling;var Pt=Se(K,it,te[ut],Pe);if(Pt===null){it===null&&(it=yn);break}r&&it&&Pt.alternate===null&&o(K,it),G=y(Pt,G,ut),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt,it=yn}if(ut===te.length)return l(K,it),Yt&&Io(K,ut),Je;if(it===null){for(;ut<te.length;ut++)it=Te(K,te[ut],Pe),it!==null&&(G=y(it,G,ut),rt===null?Je=it:rt.sibling=it,rt=it);return Yt&&Io(K,ut),Je}for(it=f(K,it);ut<te.length;ut++)yn=We(it,K,ut,te[ut],Pe),yn!==null&&(r&&yn.alternate!==null&&it.delete(yn.key===null?ut:yn.key),G=y(yn,G,ut),rt===null?Je=yn:rt.sibling=yn,rt=yn);return r&&it.forEach(function(Qi){return o(K,Qi)}),Yt&&Io(K,ut),Je}function Ke(K,G,te,Pe){var Je=ie(te);if(typeof Je!="function")throw Error(t(150));if(te=Je.call(te),te==null)throw Error(t(151));for(var rt=Je=null,it=G,ut=G=0,yn=null,Pt=te.next();it!==null&&!Pt.done;ut++,Pt=te.next()){it.index>ut?(yn=it,it=null):yn=it.sibling;var Qi=Se(K,it,Pt.value,Pe);if(Qi===null){it===null&&(it=yn);break}r&&it&&Qi.alternate===null&&o(K,it),G=y(Qi,G,ut),rt===null?Je=Qi:rt.sibling=Qi,rt=Qi,it=yn}if(Pt.done)return l(K,it),Yt&&Io(K,ut),Je;if(it===null){for(;!Pt.done;ut++,Pt=te.next())Pt=Te(K,Pt.value,Pe),Pt!==null&&(G=y(Pt,G,ut),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt);return Yt&&Io(K,ut),Je}for(it=f(K,it);!Pt.done;ut++,Pt=te.next())Pt=We(it,K,ut,Pt.value,Pe),Pt!==null&&(r&&Pt.alternate!==null&&it.delete(Pt.key===null?ut:Pt.key),G=y(Pt,G,ut),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt);return r&&it.forEach(function(BM){return o(K,BM)}),Yt&&Io(K,ut),Je}function rn(K,G,te,Pe){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case I:e:{for(var Je=te.key,rt=G;rt!==null;){if(rt.key===Je){if(Je=te.type,Je===F){if(rt.tag===7){l(K,rt.sibling),G=m(rt,te.props.children),G.return=K,K=G;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&Bv(Je)===rt.type){l(K,rt.sibling),G=m(rt,te.props),G.ref=Vs(K,rt,te),G.return=K,K=G;break e}l(K,rt);break}else o(K,rt);rt=rt.sibling}te.type===F?(G=Ho(te.props.children,K.mode,Pe,te.key),G.return=K,K=G):(Pe=Wu(te.type,te.key,te.props,null,K.mode,Pe),Pe.ref=Vs(K,G,te),Pe.return=K,K=Pe)}return A(K);case O:e:{for(rt=te.key;G!==null;){if(G.key===rt)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){l(K,G.sibling),G=m(G,te.children||[]),G.return=K,K=G;break e}else{l(K,G);break}else o(K,G);G=G.sibling}G=Kd(te,K.mode,Pe),G.return=K,K=G}return A(K);case se:return rt=te._init,rn(K,G,rt(te._payload),Pe)}if(we(te))return Ye(K,G,te,Pe);if(ie(te))return Ke(K,G,te,Pe);xu(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(l(K,G.sibling),G=m(G,te),G.return=K,K=G):(l(K,G),G=qd(te,K.mode,Pe),G.return=K,K=G),A(K)):l(K,G)}return rn}var ba=Hv(!0),Vv=Hv(!1),Su=Vi(null),Eu=null,Ca=null,od=null;function ad(){od=Ca=Eu=null}function sd(r){var o=Su.current;$t(Su),r._currentValue=o}function ld(r,o,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===l)break;r=r.return}}function Ra(r,o){Eu=r,od=Ca=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(Jn=!0),r.firstContext=null)}function yr(r){var o=r._currentValue;if(od!==r)if(r={context:r,memoizedValue:o,next:null},Ca===null){if(Eu===null)throw Error(t(308));Ca=r,Eu.dependencies={lanes:0,firstContext:r}}else Ca=Ca.next=r;return o}var Uo=null;function ud(r){Uo===null?Uo=[r]:Uo.push(r)}function Gv(r,o,l,f){var m=o.interleaved;return m===null?(l.next=l,ud(o)):(l.next=m.next,m.next=l),o.interleaved=l,_i(r,f)}function _i(r,o){r.lanes|=o;var l=r.alternate;for(l!==null&&(l.lanes|=o),l=r,r=r.return;r!==null;)r.childLanes|=o,l=r.alternate,l!==null&&(l.childLanes|=o),l=r,r=r.return;return l.tag===3?l.stateNode:null}var $i=!1;function cd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wv(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function yi(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function Xi(r,o,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(bt&2)!==0){var m=f.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),f.pending=o,_i(r,l)}return m=f.interleaved,m===null?(o.next=o,ud(f)):(o.next=m.next,m.next=o),f.interleaved=o,_i(r,l)}function wu(r,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,Mf(r,l)}}function $v(r,o){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=A:y=y.next=A,l=l.next}while(l!==null);y===null?m=y=o:y=y.next=o}else m=y=o;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=o:r.next=o,l.lastBaseUpdate=o}function Mu(r,o,l,f){var m=r.updateQueue;$i=!1;var y=m.firstBaseUpdate,A=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var k=U,oe=k.next;k.next=null,A===null?y=oe:A.next=oe,A=k;var Ee=r.alternate;Ee!==null&&(Ee=Ee.updateQueue,U=Ee.lastBaseUpdate,U!==A&&(U===null?Ee.firstBaseUpdate=oe:U.next=oe,Ee.lastBaseUpdate=k))}if(y!==null){var Te=m.baseState;A=0,Ee=oe=k=null,U=y;do{var Se=U.lane,We=U.eventTime;if((f&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:We,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ye=r,Ke=U;switch(Se=o,We=l,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Te=Ye.call(We,Te,Se);break e}Te=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,Se=typeof Ye=="function"?Ye.call(We,Te,Se):Ye,Se==null)break e;Te=$({},Te,Se);break e;case 2:$i=!0}}U.callback!==null&&U.lane!==0&&(r.flags|=64,Se=m.effects,Se===null?m.effects=[U]:Se.push(U))}else We={eventTime:We,lane:Se,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Ee===null?(oe=Ee=We,k=Te):Ee=Ee.next=We,A|=Se;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;Se=U,U=Se.next,Se.next=null,m.lastBaseUpdate=Se,m.shared.pending=null}}while(!0);if(Ee===null&&(k=Te),m.baseState=k,m.firstBaseUpdate=oe,m.lastBaseUpdate=Ee,o=m.shared.interleaved,o!==null){m=o;do A|=m.lane,m=m.next;while(m!==o)}else y===null&&(m.shared.lanes=0);Oo|=A,r.lanes=A,r.memoizedState=Te}}function Xv(r,o,l){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Gs={},Zr=Vi(Gs),Ws=Vi(Gs),$s=Vi(Gs);function No(r){if(r===Gs)throw Error(t(174));return r}function fd(r,o){switch(Ht($s,o),Ht(Ws,r),Ht(Zr,Gs),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ye(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=ye(o,r)}$t(Zr),Ht(Zr,o)}function Pa(){$t(Zr),$t(Ws),$t($s)}function jv(r){No($s.current);var o=No(Zr.current),l=ye(o,r.type);o!==l&&(Ht(Ws,r),Ht(Zr,l))}function dd(r){Ws.current===r&&($t(Zr),$t(Ws))}var qt=Vi(0);function Au(r){for(var o=r;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var hd=[];function pd(){for(var r=0;r<hd.length;r++)hd[r]._workInProgressVersionPrimary=null;hd.length=0}var Tu=R.ReactCurrentDispatcher,md=R.ReactCurrentBatchConfig,Fo=0,Kt=null,fn=null,gn=null,bu=!1,Xs=!1,js=0,lM=0;function Dn(){throw Error(t(321))}function vd(r,o){if(o===null)return!1;for(var l=0;l<o.length&&l<r.length;l++)if(!Ur(r[l],o[l]))return!1;return!0}function gd(r,o,l,f,m,y){if(Fo=y,Kt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Tu.current=r===null||r.memoizedState===null?dM:hM,r=l(f,m),Xs){y=0;do{if(Xs=!1,js=0,25<=y)throw Error(t(301));y+=1,gn=fn=null,o.updateQueue=null,Tu.current=pM,r=l(f,m)}while(Xs)}if(Tu.current=Pu,o=fn!==null&&fn.next!==null,Fo=0,gn=fn=Kt=null,bu=!1,o)throw Error(t(300));return r}function _d(){var r=js!==0;return js=0,r}function Jr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Kt.memoizedState=gn=r:gn=gn.next=r,gn}function xr(){if(fn===null){var r=Kt.alternate;r=r!==null?r.memoizedState:null}else r=fn.next;var o=gn===null?Kt.memoizedState:gn.next;if(o!==null)gn=o,fn=r;else{if(r===null)throw Error(t(310));fn=r,r={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},gn===null?Kt.memoizedState=gn=r:gn=gn.next=r}return gn}function Ys(r,o){return typeof o=="function"?o(r):o}function yd(r){var o=xr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=fn,m=f.baseQueue,y=l.pending;if(y!==null){if(m!==null){var A=m.next;m.next=y.next,y.next=A}f.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,f=f.baseState;var U=A=null,k=null,oe=y;do{var Ee=oe.lane;if((Fo&Ee)===Ee)k!==null&&(k=k.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),f=oe.hasEagerState?oe.eagerState:r(f,oe.action);else{var Te={lane:Ee,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};k===null?(U=k=Te,A=f):k=k.next=Te,Kt.lanes|=Ee,Oo|=Ee}oe=oe.next}while(oe!==null&&oe!==y);k===null?A=f:k.next=U,Ur(f,o.memoizedState)||(Jn=!0),o.memoizedState=f,o.baseState=A,o.baseQueue=k,l.lastRenderedState=f}if(r=l.interleaved,r!==null){m=r;do y=m.lane,Kt.lanes|=y,Oo|=y,m=m.next;while(m!==r)}else m===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function xd(r){var o=xr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,m=l.pending,y=o.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do y=r(y,A.action),A=A.next;while(A!==m);Ur(y,o.memoizedState)||(Jn=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),l.lastRenderedState=y}return[y,f]}function Yv(){}function qv(r,o){var l=Kt,f=xr(),m=o(),y=!Ur(f.memoizedState,m);if(y&&(f.memoizedState=m,Jn=!0),f=f.queue,Sd(Jv.bind(null,l,f,r),[r]),f.getSnapshot!==o||y||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,qs(9,Zv.bind(null,l,f,m,o),void 0,null),_n===null)throw Error(t(349));(Fo&30)!==0||Kv(l,o,m)}return m}function Kv(r,o,l){r.flags|=16384,r={getSnapshot:o,value:l},o=Kt.updateQueue,o===null?(o={lastEffect:null,stores:null},Kt.updateQueue=o,o.stores=[r]):(l=o.stores,l===null?o.stores=[r]:l.push(r))}function Zv(r,o,l,f){o.value=l,o.getSnapshot=f,Qv(o)&&eg(r)}function Jv(r,o,l){return l(function(){Qv(o)&&eg(r)})}function Qv(r){var o=r.getSnapshot;r=r.value;try{var l=o();return!Ur(r,l)}catch{return!0}}function eg(r){var o=_i(r,1);o!==null&&kr(o,r,1,-1)}function tg(r){var o=Jr();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:r},o.queue=r,r=r.dispatch=fM.bind(null,Kt,r),[o.memoizedState,r]}function qs(r,o,l,f){return r={tag:r,create:o,destroy:l,deps:f,next:null},o=Kt.updateQueue,o===null?(o={lastEffect:null,stores:null},Kt.updateQueue=o,o.lastEffect=r.next=r):(l=o.lastEffect,l===null?o.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,o.lastEffect=r)),r}function ng(){return xr().memoizedState}function Cu(r,o,l,f){var m=Jr();Kt.flags|=r,m.memoizedState=qs(1|o,l,void 0,f===void 0?null:f)}function Ru(r,o,l,f){var m=xr();f=f===void 0?null:f;var y=void 0;if(fn!==null){var A=fn.memoizedState;if(y=A.destroy,f!==null&&vd(f,A.deps)){m.memoizedState=qs(o,l,y,f);return}}Kt.flags|=r,m.memoizedState=qs(1|o,l,y,f)}function rg(r,o){return Cu(8390656,8,r,o)}function Sd(r,o){return Ru(2048,8,r,o)}function ig(r,o){return Ru(4,2,r,o)}function og(r,o){return Ru(4,4,r,o)}function ag(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function sg(r,o,l){return l=l!=null?l.concat([r]):null,Ru(4,4,ag.bind(null,o,r),l)}function Ed(){}function lg(r,o){var l=xr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&vd(o,f[1])?f[0]:(l.memoizedState=[r,o],r)}function ug(r,o){var l=xr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&vd(o,f[1])?f[0]:(r=r(),l.memoizedState=[r,o],r)}function cg(r,o,l){return(Fo&21)===0?(r.baseState&&(r.baseState=!1,Jn=!0),r.memoizedState=l):(Ur(l,o)||(l=Zl(),Kt.lanes|=l,Oo|=l,r.baseState=!0),o)}function uM(r,o){var l=Ut;Ut=l!==0&&4>l?l:4,r(!0);var f=md.transition;md.transition={};try{r(!1),o()}finally{Ut=l,md.transition=f}}function fg(){return xr().memoizedState}function cM(r,o,l){var f=Ki(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},dg(r))hg(o,l);else if(l=Gv(r,o,l,f),l!==null){var m=Wn();kr(l,r,f,m),pg(l,o,f)}}function fM(r,o,l){var f=Ki(r),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(dg(r))hg(o,m);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var A=o.lastRenderedState,U=y(A,l);if(m.hasEagerState=!0,m.eagerState=U,Ur(U,A)){var k=o.interleaved;k===null?(m.next=m,ud(o)):(m.next=k.next,k.next=m),o.interleaved=m;return}}catch{}finally{}l=Gv(r,o,m,f),l!==null&&(m=Wn(),kr(l,r,f,m),pg(l,o,f))}}function dg(r){var o=r.alternate;return r===Kt||o!==null&&o===Kt}function hg(r,o){Xs=bu=!0;var l=r.pending;l===null?o.next=o:(o.next=l.next,l.next=o),r.pending=o}function pg(r,o,l){if((l&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,Mf(r,l)}}var Pu={readContext:yr,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},dM={readContext:yr,useCallback:function(r,o){return Jr().memoizedState=[r,o===void 0?null:o],r},useContext:yr,useEffect:rg,useImperativeHandle:function(r,o,l){return l=l!=null?l.concat([r]):null,Cu(4194308,4,ag.bind(null,o,r),l)},useLayoutEffect:function(r,o){return Cu(4194308,4,r,o)},useInsertionEffect:function(r,o){return Cu(4,2,r,o)},useMemo:function(r,o){var l=Jr();return o=o===void 0?null:o,r=r(),l.memoizedState=[r,o],r},useReducer:function(r,o,l){var f=Jr();return o=l!==void 0?l(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=cM.bind(null,Kt,r),[f.memoizedState,r]},useRef:function(r){var o=Jr();return r={current:r},o.memoizedState=r},useState:tg,useDebugValue:Ed,useDeferredValue:function(r){return Jr().memoizedState=r},useTransition:function(){var r=tg(!1),o=r[0];return r=uM.bind(null,r[1]),Jr().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,l){var f=Kt,m=Jr();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),_n===null)throw Error(t(349));(Fo&30)!==0||Kv(f,o,l)}m.memoizedState=l;var y={value:l,getSnapshot:o};return m.queue=y,rg(Jv.bind(null,f,y,r),[r]),f.flags|=2048,qs(9,Zv.bind(null,f,y,l,o),void 0,null),l},useId:function(){var r=Jr(),o=_n.identifierPrefix;if(Yt){var l=gi,f=vi;l=(f&~(1<<32-Vn(f)-1)).toString(32)+l,o=":"+o+"R"+l,l=js++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=lM++,o=":"+o+"r"+l.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},hM={readContext:yr,useCallback:lg,useContext:yr,useEffect:Sd,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:og,useMemo:ug,useReducer:yd,useRef:ng,useState:function(){return yd(Ys)},useDebugValue:Ed,useDeferredValue:function(r){var o=xr();return cg(o,fn.memoizedState,r)},useTransition:function(){var r=yd(Ys)[0],o=xr().memoizedState;return[r,o]},useMutableSource:Yv,useSyncExternalStore:qv,useId:fg,unstable_isNewReconciler:!1},pM={readContext:yr,useCallback:lg,useContext:yr,useEffect:Sd,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:og,useMemo:ug,useReducer:xd,useRef:ng,useState:function(){return xd(Ys)},useDebugValue:Ed,useDeferredValue:function(r){var o=xr();return fn===null?o.memoizedState=r:cg(o,fn.memoizedState,r)},useTransition:function(){var r=xd(Ys)[0],o=xr().memoizedState;return[r,o]},useMutableSource:Yv,useSyncExternalStore:qv,useId:fg,unstable_isNewReconciler:!1};function Fr(r,o){if(r&&r.defaultProps){o=$({},o),r=r.defaultProps;for(var l in r)o[l]===void 0&&(o[l]=r[l]);return o}return o}function wd(r,o,l,f){o=r.memoizedState,l=l(f,o),l=l==null?o:$({},o,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Lu={isMounted:function(r){return(r=r._reactInternals)?di(r)===r:!1},enqueueSetState:function(r,o,l){r=r._reactInternals;var f=Wn(),m=Ki(r),y=yi(f,m);y.payload=o,l!=null&&(y.callback=l),o=Xi(r,y,m),o!==null&&(kr(o,r,m,f),wu(o,r,m))},enqueueReplaceState:function(r,o,l){r=r._reactInternals;var f=Wn(),m=Ki(r),y=yi(f,m);y.tag=1,y.payload=o,l!=null&&(y.callback=l),o=Xi(r,y,m),o!==null&&(kr(o,r,m,f),wu(o,r,m))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var l=Wn(),f=Ki(r),m=yi(l,f);m.tag=2,o!=null&&(m.callback=o),o=Xi(r,m,f),o!==null&&(kr(o,r,f,l),wu(o,r,f))}};function mg(r,o,l,f,m,y,A){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,y,A):o.prototype&&o.prototype.isPureReactComponent?!Ns(l,f)||!Ns(m,y):!0}function vg(r,o,l){var f=!1,m=Gi,y=o.contextType;return typeof y=="object"&&y!==null?y=yr(y):(m=Zn(o)?Lo:Ln.current,f=o.contextTypes,y=(f=f!=null)?wa(r,m):Gi),o=new o(l,y),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Lu,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=m,r.__reactInternalMemoizedMaskedChildContext=y),o}function gg(r,o,l,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,f),o.state!==r&&Lu.enqueueReplaceState(o,o.state,null)}function Md(r,o,l,f){var m=r.stateNode;m.props=l,m.state=r.memoizedState,m.refs={},cd(r);var y=o.contextType;typeof y=="object"&&y!==null?m.context=yr(y):(y=Zn(o)?Lo:Ln.current,m.context=wa(r,y)),m.state=r.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(wd(r,o,y,l),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&Lu.enqueueReplaceState(m,m.state,null),Mu(r,l,m,f),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308)}function La(r,o){try{var l="",f=o;do l+=ee(f),f=f.return;while(f);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:o,stack:m,digest:null}}function Ad(r,o,l){return{value:r,source:null,stack:l??null,digest:o??null}}function Td(r,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var mM=typeof WeakMap=="function"?WeakMap:Map;function _g(r,o,l){l=yi(-1,l),l.tag=3,l.payload={element:null};var f=o.value;return l.callback=function(){zu||(zu=!0,Hd=f),Td(r,o)},l}function yg(r,o,l){l=yi(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=o.value;l.payload=function(){return f(m)},l.callback=function(){Td(r,o)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Td(r,o),typeof f!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),l}function xg(r,o,l){var f=r.pingCache;if(f===null){f=r.pingCache=new mM;var m=new Set;f.set(o,m)}else m=f.get(o),m===void 0&&(m=new Set,f.set(o,m));m.has(l)||(m.add(l),r=RM.bind(null,r,o,l),o.then(r,r))}function Sg(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function Eg(r,o,l,f,m){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=yi(-1,1),o.tag=2,Xi(l,o,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=m,r)}var vM=R.ReactCurrentOwner,Jn=!1;function Gn(r,o,l,f){o.child=r===null?Vv(o,null,l,f):ba(o,r.child,l,f)}function wg(r,o,l,f,m){l=l.render;var y=o.ref;return Ra(o,m),f=gd(r,o,l,f,y,m),l=_d(),r!==null&&!Jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~m,xi(r,o,m)):(Yt&&l&&ed(o),o.flags|=1,Gn(r,o,f,m),o.child)}function Mg(r,o,l,f,m){if(r===null){var y=l.type;return typeof y=="function"&&!Yd(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=y,Ag(r,o,y,f,m)):(r=Wu(l.type,null,f,o,o.mode,m),r.ref=o.ref,r.return=o,o.child=r)}if(y=r.child,(r.lanes&m)===0){var A=y.memoizedProps;if(l=l.compare,l=l!==null?l:Ns,l(A,f)&&r.ref===o.ref)return xi(r,o,m)}return o.flags|=1,r=Ji(y,f),r.ref=o.ref,r.return=o,o.child=r}function Ag(r,o,l,f,m){if(r!==null){var y=r.memoizedProps;if(Ns(y,f)&&r.ref===o.ref)if(Jn=!1,o.pendingProps=f=y,(r.lanes&m)!==0)(r.flags&131072)!==0&&(Jn=!0);else return o.lanes=r.lanes,xi(r,o,m)}return bd(r,o,l,f,m)}function Tg(r,o,l){var f=o.pendingProps,m=f.children,y=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Ia,fr),fr|=l;else{if((l&1073741824)===0)return r=y!==null?y.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Ht(Ia,fr),fr|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,Ht(Ia,fr),fr|=f}else y!==null?(f=y.baseLanes|l,o.memoizedState=null):f=l,Ht(Ia,fr),fr|=f;return Gn(r,o,m,l),o.child}function bg(r,o){var l=o.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function bd(r,o,l,f,m){var y=Zn(l)?Lo:Ln.current;return y=wa(o,y),Ra(o,m),l=gd(r,o,l,f,y,m),f=_d(),r!==null&&!Jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~m,xi(r,o,m)):(Yt&&f&&ed(o),o.flags|=1,Gn(r,o,l,m),o.child)}function Cg(r,o,l,f,m){if(Zn(l)){var y=!0;mu(o)}else y=!1;if(Ra(o,m),o.stateNode===null)Iu(r,o),vg(o,l,f),Md(o,l,f,m),f=!0;else if(r===null){var A=o.stateNode,U=o.memoizedProps;A.props=U;var k=A.context,oe=l.contextType;typeof oe=="object"&&oe!==null?oe=yr(oe):(oe=Zn(l)?Lo:Ln.current,oe=wa(o,oe));var Ee=l.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==f||k!==oe)&&gg(o,A,f,oe),$i=!1;var Se=o.memoizedState;A.state=Se,Mu(o,f,A,m),k=o.memoizedState,U!==f||Se!==k||Kn.current||$i?(typeof Ee=="function"&&(wd(o,l,Ee,f),k=o.memoizedState),(U=$i||mg(o,l,U,f,Se,k,oe))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=k),A.props=f,A.state=k,A.context=oe,f=U):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{A=o.stateNode,Wv(r,o),U=o.memoizedProps,oe=o.type===o.elementType?U:Fr(o.type,U),A.props=oe,Te=o.pendingProps,Se=A.context,k=l.contextType,typeof k=="object"&&k!==null?k=yr(k):(k=Zn(l)?Lo:Ln.current,k=wa(o,k));var We=l.getDerivedStateFromProps;(Ee=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==Te||Se!==k)&&gg(o,A,f,k),$i=!1,Se=o.memoizedState,A.state=Se,Mu(o,f,A,m);var Ye=o.memoizedState;U!==Te||Se!==Ye||Kn.current||$i?(typeof We=="function"&&(wd(o,l,We,f),Ye=o.memoizedState),(oe=$i||mg(o,l,oe,f,Se,Ye,k)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,Ye,k),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,Ye,k)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=Ye),A.props=f,A.state=Ye,A.context=k,f=oe):(typeof A.componentDidUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),f=!1)}return Cd(r,o,l,f,y,m)}function Cd(r,o,l,f,m,y){bg(r,o);var A=(o.flags&128)!==0;if(!f&&!A)return m&&Iv(o,l,!1),xi(r,o,y);f=o.stateNode,vM.current=o;var U=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&A?(o.child=ba(o,r.child,null,y),o.child=ba(o,null,U,y)):Gn(r,o,U,y),o.memoizedState=f.state,m&&Iv(o,l,!0),o.child}function Rg(r){var o=r.stateNode;o.pendingContext?Lv(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Lv(r,o.context,!1),fd(r,o.containerInfo)}function Pg(r,o,l,f,m){return Ta(),id(m),o.flags|=256,Gn(r,o,l,f),o.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Pd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Lg(r,o,l){var f=o.pendingProps,m=qt.current,y=!1,A=(o.flags&128)!==0,U;if((U=A)||(U=r!==null&&r.memoizedState===null?!1:(m&2)!==0),U?(y=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(m|=1),Ht(qt,m&1),r===null)return rd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=f.children,r=f.fallback,y?(f=o.mode,y=o.child,A={mode:"hidden",children:A},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=A):y=$u(A,f,0,null),r=Ho(r,f,l,null),y.return=o,r.return=o,y.sibling=r,o.child=y,o.child.memoizedState=Pd(l),o.memoizedState=Rd,r):Ld(o,A));if(m=r.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return gM(r,o,A,f,U,m,l);if(y){y=f.fallback,A=o.mode,m=r.child,U=m.sibling;var k={mode:"hidden",children:f.children};return(A&1)===0&&o.child!==m?(f=o.child,f.childLanes=0,f.pendingProps=k,o.deletions=null):(f=Ji(m,k),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?y=Ji(U,y):(y=Ho(y,A,l,null),y.flags|=2),y.return=o,f.return=o,f.sibling=y,o.child=f,f=y,y=o.child,A=r.child.memoizedState,A=A===null?Pd(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},y.memoizedState=A,y.childLanes=r.childLanes&~l,o.memoizedState=Rd,f}return y=r.child,r=y.sibling,f=Ji(y,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=l),f.return=o,f.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=f,o.memoizedState=null,f}function Ld(r,o){return o=$u({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Du(r,o,l,f){return f!==null&&id(f),ba(o,r.child,null,l),r=Ld(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function gM(r,o,l,f,m,y,A){if(l)return o.flags&256?(o.flags&=-257,f=Ad(Error(t(422))),Du(r,o,A,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(y=f.fallback,m=o.mode,f=$u({mode:"visible",children:f.children},m,0,null),y=Ho(y,m,A,null),y.flags|=2,f.return=o,y.return=o,f.sibling=y,o.child=f,(o.mode&1)!==0&&ba(o,r.child,null,A),o.child.memoizedState=Pd(A),o.memoizedState=Rd,y);if((o.mode&1)===0)return Du(r,o,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,y=Error(t(419)),f=Ad(y,f,void 0),Du(r,o,A,f)}if(U=(A&r.childLanes)!==0,Jn||U){if(f=_n,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|A))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,_i(r,m),kr(f,r,m,-1))}return jd(),f=Ad(Error(t(421))),Du(r,o,A,f)}return m.data==="$?"?(o.flags|=128,o.child=r.child,o=PM.bind(null,r),m._reactRetry=o,null):(r=y.treeContext,cr=Hi(m.nextSibling),ur=o,Yt=!0,Nr=null,r!==null&&(gr[_r++]=vi,gr[_r++]=gi,gr[_r++]=Do,vi=r.id,gi=r.overflow,Do=o),o=Ld(o,f.children),o.flags|=4096,o)}function Dg(r,o,l){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),ld(r.return,o,l)}function Dd(r,o,l,f,m){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=m)}function Ig(r,o,l){var f=o.pendingProps,m=f.revealOrder,y=f.tail;if(Gn(r,o,f.children,l),f=qt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Dg(r,l,o);else if(r.tag===19)Dg(r,l,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Ht(qt,f),(o.mode&1)===0)o.memoizedState=null;else switch(m){case"forwards":for(l=o.child,m=null;l!==null;)r=l.alternate,r!==null&&Au(r)===null&&(m=l),l=l.sibling;l=m,l===null?(m=o.child,o.child=null):(m=l.sibling,l.sibling=null),Dd(o,!1,m,l,y);break;case"backwards":for(l=null,m=o.child,o.child=null;m!==null;){if(r=m.alternate,r!==null&&Au(r)===null){o.child=m;break}r=m.sibling,m.sibling=l,l=m,m=r}Dd(o,!0,l,null,y);break;case"together":Dd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Iu(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function xi(r,o,l){if(r!==null&&(o.dependencies=r.dependencies),Oo|=o.lanes,(l&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,l=Ji(r,r.pendingProps),o.child=l,l.return=o;r.sibling!==null;)r=r.sibling,l=l.sibling=Ji(r,r.pendingProps),l.return=o;l.sibling=null}return o.child}function _M(r,o,l){switch(o.tag){case 3:Rg(o),Ta();break;case 5:jv(o);break;case 1:Zn(o.type)&&mu(o);break;case 4:fd(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,m=o.memoizedProps.value;Ht(Su,f._currentValue),f._currentValue=m;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(Ht(qt,qt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Lg(r,o,l):(Ht(qt,qt.current&1),r=xi(r,o,l),r!==null?r.sibling:null);Ht(qt,qt.current&1);break;case 19:if(f=(l&o.childLanes)!==0,(r.flags&128)!==0){if(f)return Ig(r,o,l);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ht(qt,qt.current),f)break;return null;case 22:case 23:return o.lanes=0,Tg(r,o,l)}return xi(r,o,l)}var Ug,Id,Ng,Fg;Ug=function(r,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Id=function(){},Ng=function(r,o,l,f){var m=r.memoizedProps;if(m!==f){r=o.stateNode,No(Zr.current);var y=null;switch(l){case"input":m=Be(r,m),f=Be(r,f),y=[];break;case"select":m=$({},m,{value:void 0}),f=$({},f,{value:void 0}),y=[];break;case"textarea":m=Ze(r,m),f=Ze(r,f),y=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=du)}ft(l,f);var A;l=null;for(oe in m)if(!f.hasOwnProperty(oe)&&m.hasOwnProperty(oe)&&m[oe]!=null)if(oe==="style"){var U=m[oe];for(A in U)U.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?y||(y=[]):(y=y||[]).push(oe,null));for(oe in f){var k=f[oe];if(U=m?.[oe],f.hasOwnProperty(oe)&&k!==U&&(k!=null||U!=null))if(oe==="style")if(U){for(A in U)!U.hasOwnProperty(A)||k&&k.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in k)k.hasOwnProperty(A)&&U[A]!==k[A]&&(l||(l={}),l[A]=k[A])}else l||(y||(y=[]),y.push(oe,l)),l=k;else oe==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(y=y||[]).push(oe,k)):oe==="children"?typeof k!="string"&&typeof k!="number"||(y=y||[]).push(oe,""+k):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(k!=null&&oe==="onScroll"&&Wt("scroll",r),y||U===k||(y=[])):(y=y||[]).push(oe,k))}l&&(y=y||[]).push("style",l);var oe=y;(o.updateQueue=oe)&&(o.flags|=4)}},Fg=function(r,o,l,f){l!==f&&(o.flags|=4)};function Ks(r,o){if(!Yt)switch(r.tailMode){case"hidden":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function In(r){var o=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(o)for(var m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=r,m=m.sibling;else for(m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=r,m=m.sibling;return r.subtreeFlags|=f,r.childLanes=l,o}function yM(r,o,l){var f=o.pendingProps;switch(td(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(o),null;case 1:return Zn(o.type)&&pu(),In(o),null;case 3:return f=o.stateNode,Pa(),$t(Kn),$t(Ln),pd(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(yu(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Nr!==null&&(Wd(Nr),Nr=null))),Id(r,o),In(o),null;case 5:dd(o);var m=No($s.current);if(l=o.type,r!==null&&o.stateNode!=null)Ng(r,o,l,f,m),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return In(o),null}if(r=No(Zr.current),yu(o)){f=o.stateNode,l=o.type;var y=o.memoizedProps;switch(f[Kr]=o,f[Bs]=y,r=(o.mode&1)!==0,l){case"dialog":Wt("cancel",f),Wt("close",f);break;case"iframe":case"object":case"embed":Wt("load",f);break;case"video":case"audio":for(m=0;m<Os.length;m++)Wt(Os[m],f);break;case"source":Wt("error",f);break;case"img":case"image":case"link":Wt("error",f),Wt("load",f);break;case"details":Wt("toggle",f);break;case"input":le(f,y),Wt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},Wt("invalid",f);break;case"textarea":D(f,y),Wt("invalid",f)}ft(l,y),m=null;for(var A in y)if(y.hasOwnProperty(A)){var U=y[A];A==="children"?typeof U=="string"?f.textContent!==U&&(y.suppressHydrationWarning!==!0&&fu(f.textContent,U,r),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(y.suppressHydrationWarning!==!0&&fu(f.textContent,U,r),m=["children",""+U]):a.hasOwnProperty(A)&&U!=null&&A==="onScroll"&&Wt("scroll",f)}switch(l){case"input":Oe(f),ge(f,y,!0);break;case"textarea":Oe(f),Y(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=du)}f=m,o.updateQueue=f,f!==null&&(o.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Ae(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=A.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=A.createElement(l,{is:f.is}):(r=A.createElement(l),l==="select"&&(A=r,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):r=A.createElementNS(r,l),r[Kr]=o,r[Bs]=f,Ug(r,o,!1,!1),o.stateNode=r;e:{switch(A=st(l,f),l){case"dialog":Wt("cancel",r),Wt("close",r),m=f;break;case"iframe":case"object":case"embed":Wt("load",r),m=f;break;case"video":case"audio":for(m=0;m<Os.length;m++)Wt(Os[m],r);m=f;break;case"source":Wt("error",r),m=f;break;case"img":case"image":case"link":Wt("error",r),Wt("load",r),m=f;break;case"details":Wt("toggle",r),m=f;break;case"input":le(r,f),m=Be(r,f),Wt("invalid",r);break;case"option":m=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},m=$({},f,{value:void 0}),Wt("invalid",r);break;case"textarea":D(r,f),m=Ze(r,f),Wt("invalid",r);break;default:m=f}ft(l,m),U=m;for(y in U)if(U.hasOwnProperty(y)){var k=U[y];y==="style"?Le(r,k):y==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(r,k)):y==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&De(r,k):typeof k=="number"&&De(r,""+k):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(a.hasOwnProperty(y)?k!=null&&y==="onScroll"&&Wt("scroll",r):k!=null&&M(r,y,k,A))}switch(l){case"input":Oe(r),ge(r,f,!1);break;case"textarea":Oe(r),Y(r);break;case"option":f.value!=null&&r.setAttribute("value",""+ve(f.value));break;case"select":r.multiple=!!f.multiple,y=f.value,y!=null?Ie(r,!!f.multiple,y,!1):f.defaultValue!=null&&Ie(r,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(r.onclick=du)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return In(o),null;case 6:if(r&&o.stateNode!=null)Fg(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(l=No($s.current),No(Zr.current),yu(o)){if(f=o.stateNode,l=o.memoizedProps,f[Kr]=o,(y=f.nodeValue!==l)&&(r=ur,r!==null))switch(r.tag){case 3:fu(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&fu(f.nodeValue,l,(r.mode&1)!==0)}y&&(o.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Kr]=o,o.stateNode=f}return In(o),null;case 13:if($t(qt),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Yt&&cr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)kv(),Ta(),o.flags|=98560,y=!1;else if(y=yu(o),f!==null&&f.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Kr]=o}else Ta(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;In(o),y=!1}else Nr!==null&&(Wd(Nr),Nr=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(qt.current&1)!==0?dn===0&&(dn=3):jd())),o.updateQueue!==null&&(o.flags|=4),In(o),null);case 4:return Pa(),Id(r,o),r===null&&zs(o.stateNode.containerInfo),In(o),null;case 10:return sd(o.type._context),In(o),null;case 17:return Zn(o.type)&&pu(),In(o),null;case 19:if($t(qt),y=o.memoizedState,y===null)return In(o),null;if(f=(o.flags&128)!==0,A=y.rendering,A===null)if(f)Ks(y,!1);else{if(dn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(A=Au(r),A!==null){for(o.flags|=128,Ks(y,!1),f=A.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=l,l=o.child;l!==null;)y=l,r=f,y.flags&=14680066,A=y.alternate,A===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=A.childLanes,y.lanes=A.lanes,y.child=A.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=A.memoizedProps,y.memoizedState=A.memoizedState,y.updateQueue=A.updateQueue,y.type=A.type,r=A.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Ht(qt,qt.current&1|2),o.child}r=r.sibling}y.tail!==null&&Xe()>Ua&&(o.flags|=128,f=!0,Ks(y,!1),o.lanes=4194304)}else{if(!f)if(r=Au(A),r!==null){if(o.flags|=128,f=!0,l=r.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Ks(y,!0),y.tail===null&&y.tailMode==="hidden"&&!A.alternate&&!Yt)return In(o),null}else 2*Xe()-y.renderingStartTime>Ua&&l!==1073741824&&(o.flags|=128,f=!0,Ks(y,!1),o.lanes=4194304);y.isBackwards?(A.sibling=o.child,o.child=A):(l=y.last,l!==null?l.sibling=A:o.child=A,y.last=A)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=Xe(),o.sibling=null,l=qt.current,Ht(qt,f?l&1|2:l&1),o):(In(o),null);case 22:case 23:return Xd(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(fr&1073741824)!==0&&(In(o),o.subtreeFlags&6&&(o.flags|=8192)):In(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function xM(r,o){switch(td(o),o.tag){case 1:return Zn(o.type)&&pu(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return Pa(),$t(Kn),$t(Ln),pd(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return dd(o),null;case 13:if($t(qt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ta()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return $t(qt),null;case 4:return Pa(),null;case 10:return sd(o.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Uu=!1,Un=!1,SM=typeof WeakSet=="function"?WeakSet:Set,je=null;function Da(r,o){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){en(r,o,f)}else l.current=null}function Ud(r,o,l){try{l()}catch(f){en(r,o,f)}}var Og=!1;function EM(r,o){if(Xf=eu,r=mv(),zf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var A=0,U=-1,k=-1,oe=0,Ee=0,Te=r,Se=null;t:for(;;){for(var We;Te!==l||m!==0&&Te.nodeType!==3||(U=A+m),Te!==y||f!==0&&Te.nodeType!==3||(k=A+f),Te.nodeType===3&&(A+=Te.nodeValue.length),(We=Te.firstChild)!==null;)Se=Te,Te=We;for(;;){if(Te===r)break t;if(Se===l&&++oe===m&&(U=A),Se===y&&++Ee===f&&(k=A),(We=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=We}l=U===-1||k===-1?null:{start:U,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(jf={focusedElem:r,selectionRange:l},eu=!1,je=o;je!==null;)if(o=je,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,je=r;else for(;je!==null;){o=je;try{var Ye=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,rn=Ye.memoizedState,K=o.stateNode,G=K.getSnapshotBeforeUpdate(o.elementType===o.type?Ke:Fr(o.type,Ke),rn);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){en(o,o.return,Pe)}if(r=o.sibling,r!==null){r.return=o.return,je=r;break}je=o.return}return Ye=Og,Og=!1,Ye}function Zs(r,o,l){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&r)===r){var y=m.destroy;m.destroy=void 0,y!==void 0&&Ud(o,l,y)}m=m.next}while(m!==f)}}function Nu(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==o)}}function Nd(r){var o=r.ref;if(o!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof o=="function"?o(r):o.current=r}}function zg(r){var o=r.alternate;o!==null&&(r.alternate=null,zg(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[Kr],delete o[Bs],delete o[Zf],delete o[iM],delete o[oM])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function kg(r){return r.tag===5||r.tag===3||r.tag===4}function Bg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||kg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Fd(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(r,o):l.insertBefore(r,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(r,l)):(o=l,o.appendChild(r)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=du));else if(f!==4&&(r=r.child,r!==null))for(Fd(r,o,l),r=r.sibling;r!==null;)Fd(r,o,l),r=r.sibling}function Od(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.insertBefore(r,o):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(Od(r,o,l),r=r.sibling;r!==null;)Od(r,o,l),r=r.sibling}var Sn=null,Or=!1;function ji(r,o,l){for(l=l.child;l!==null;)Hg(r,o,l),l=l.sibling}function Hg(r,o,l){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Yn,l)}catch{}switch(l.tag){case 5:Un||Da(l,o);case 6:var f=Sn,m=Or;Sn=null,ji(r,o,l),Sn=f,Or=m,Sn!==null&&(Or?(r=Sn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Sn.removeChild(l.stateNode));break;case 18:Sn!==null&&(Or?(r=Sn,l=l.stateNode,r.nodeType===8?Kf(r.parentNode,l):r.nodeType===1&&Kf(r,l),Rs(r)):Kf(Sn,l.stateNode));break;case 4:f=Sn,m=Or,Sn=l.stateNode.containerInfo,Or=!0,ji(r,o,l),Sn=f,Or=m;break;case 0:case 11:case 14:case 15:if(!Un&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var y=m,A=y.destroy;y=y.tag,A!==void 0&&((y&2)!==0||(y&4)!==0)&&Ud(l,o,A),m=m.next}while(m!==f)}ji(r,o,l);break;case 1:if(!Un&&(Da(l,o),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(U){en(l,o,U)}ji(r,o,l);break;case 21:ji(r,o,l);break;case 22:l.mode&1?(Un=(f=Un)||l.memoizedState!==null,ji(r,o,l),Un=f):ji(r,o,l);break;default:ji(r,o,l)}}function Vg(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new SM),o.forEach(function(f){var m=LM.bind(null,r,f);l.has(f)||(l.add(f),f.then(m,m))})}}function zr(r,o){var l=o.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var y=r,A=o,U=A;e:for(;U!==null;){switch(U.tag){case 5:Sn=U.stateNode,Or=!1;break e;case 3:Sn=U.stateNode.containerInfo,Or=!0;break e;case 4:Sn=U.stateNode.containerInfo,Or=!0;break e}U=U.return}if(Sn===null)throw Error(t(160));Hg(y,A,m),Sn=null,Or=!1;var k=m.alternate;k!==null&&(k.return=null),m.return=null}catch(oe){en(m,o,oe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Gg(o,r),o=o.sibling}function Gg(r,o){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zr(o,r),Qr(r),f&4){try{Zs(3,r,r.return),Nu(3,r)}catch(Ke){en(r,r.return,Ke)}try{Zs(5,r,r.return)}catch(Ke){en(r,r.return,Ke)}}break;case 1:zr(o,r),Qr(r),f&512&&l!==null&&Da(l,l.return);break;case 5:if(zr(o,r),Qr(r),f&512&&l!==null&&Da(l,l.return),r.flags&32){var m=r.stateNode;try{De(m,"")}catch(Ke){en(r,r.return,Ke)}}if(f&4&&(m=r.stateNode,m!=null)){var y=r.memoizedProps,A=l!==null?l.memoizedProps:y,U=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{U==="input"&&y.type==="radio"&&y.name!=null&&ue(m,y),st(U,A);var oe=st(U,y);for(A=0;A<k.length;A+=2){var Ee=k[A],Te=k[A+1];Ee==="style"?Le(m,Te):Ee==="dangerouslySetInnerHTML"?qe(m,Te):Ee==="children"?De(m,Te):M(m,Ee,Te,oe)}switch(U){case"input":xe(m,y);break;case"textarea":T(m,y);break;case"select":var Se=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var We=y.value;We!=null?Ie(m,!!y.multiple,We,!1):Se!==!!y.multiple&&(y.defaultValue!=null?Ie(m,!!y.multiple,y.defaultValue,!0):Ie(m,!!y.multiple,y.multiple?[]:"",!1))}m[Bs]=y}catch(Ke){en(r,r.return,Ke)}}break;case 6:if(zr(o,r),Qr(r),f&4){if(r.stateNode===null)throw Error(t(162));m=r.stateNode,y=r.memoizedProps;try{m.nodeValue=y}catch(Ke){en(r,r.return,Ke)}}break;case 3:if(zr(o,r),Qr(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Rs(o.containerInfo)}catch(Ke){en(r,r.return,Ke)}break;case 4:zr(o,r),Qr(r);break;case 13:zr(o,r),Qr(r),m=r.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(Bd=Xe())),f&4&&Vg(r);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,r.mode&1?(Un=(oe=Un)||Ee,zr(o,r),Un=oe):zr(o,r),Qr(r),f&8192){if(oe=r.memoizedState!==null,(r.stateNode.isHidden=oe)&&!Ee&&(r.mode&1)!==0)for(je=r,Ee=r.child;Ee!==null;){for(Te=je=Ee;je!==null;){switch(Se=je,We=Se.child,Se.tag){case 0:case 11:case 14:case 15:Zs(4,Se,Se.return);break;case 1:Da(Se,Se.return);var Ye=Se.stateNode;if(typeof Ye.componentWillUnmount=="function"){f=Se,l=Se.return;try{o=f,Ye.props=o.memoizedProps,Ye.state=o.memoizedState,Ye.componentWillUnmount()}catch(Ke){en(f,l,Ke)}}break;case 5:Da(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Xg(Te);continue}}We!==null?(We.return=Se,je=We):Xg(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=r;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{m=Te.stateNode,oe?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(U=Te.stateNode,k=Te.memoizedProps.style,A=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=Mt("display",A))}catch(Ke){en(r,r.return,Ke)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=oe?"":Te.memoizedProps}catch(Ke){en(r,r.return,Ke)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===r)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===r)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===r)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:zr(o,r),Qr(r),f&4&&Vg(r);break;case 21:break;default:zr(o,r),Qr(r)}}function Qr(r){var o=r.flags;if(o&2){try{e:{for(var l=r.return;l!==null;){if(kg(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(De(m,""),f.flags&=-33);var y=Bg(r);Od(r,y,m);break;case 3:case 4:var A=f.stateNode.containerInfo,U=Bg(r);Fd(r,U,A);break;default:throw Error(t(161))}}catch(k){en(r,r.return,k)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function wM(r,o,l){je=r,Wg(r)}function Wg(r,o,l){for(var f=(r.mode&1)!==0;je!==null;){var m=je,y=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||Uu;if(!A){var U=m.alternate,k=U!==null&&U.memoizedState!==null||Un;U=Uu;var oe=Un;if(Uu=A,(Un=k)&&!oe)for(je=m;je!==null;)A=je,k=A.child,A.tag===22&&A.memoizedState!==null?jg(m):k!==null?(k.return=A,je=k):jg(m);for(;y!==null;)je=y,Wg(y),y=y.sibling;je=m,Uu=U,Un=oe}$g(r)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,je=y):$g(r)}}function $g(r){for(;je!==null;){var o=je;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Un||Nu(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!Un)if(l===null)f.componentDidMount();else{var m=o.elementType===o.type?l.memoizedProps:Fr(o.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&Xv(o,y,f);break;case 3:var A=o.updateQueue;if(A!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Xv(o,A,l)}break;case 5:var U=o.stateNode;if(l===null&&o.flags&4){l=U;var k=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var oe=o.alternate;if(oe!==null){var Ee=oe.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Rs(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||o.flags&512&&Nd(o)}catch(Se){en(o,o.return,Se)}}if(o===r){je=null;break}if(l=o.sibling,l!==null){l.return=o.return,je=l;break}je=o.return}}function Xg(r){for(;je!==null;){var o=je;if(o===r){je=null;break}var l=o.sibling;if(l!==null){l.return=o.return,je=l;break}je=o.return}}function jg(r){for(;je!==null;){var o=je;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Nu(4,o)}catch(k){en(o,l,k)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var m=o.return;try{f.componentDidMount()}catch(k){en(o,m,k)}}var y=o.return;try{Nd(o)}catch(k){en(o,y,k)}break;case 5:var A=o.return;try{Nd(o)}catch(k){en(o,A,k)}}}catch(k){en(o,o.return,k)}if(o===r){je=null;break}var U=o.sibling;if(U!==null){U.return=o.return,je=U;break}je=o.return}}var MM=Math.ceil,Fu=R.ReactCurrentDispatcher,zd=R.ReactCurrentOwner,Sr=R.ReactCurrentBatchConfig,bt=0,_n=null,an=null,En=0,fr=0,Ia=Vi(0),dn=0,Js=null,Oo=0,Ou=0,kd=0,Qs=null,Qn=null,Bd=0,Ua=1/0,Si=null,zu=!1,Hd=null,Yi=null,ku=!1,qi=null,Bu=0,el=0,Vd=null,Hu=-1,Vu=0;function Wn(){return(bt&6)!==0?Xe():Hu!==-1?Hu:Hu=Xe()}function Ki(r){return(r.mode&1)===0?1:(bt&2)!==0&&En!==0?En&-En:sM.transition!==null?(Vu===0&&(Vu=Zl()),Vu):(r=Ut,r!==0||(r=window.event,r=r===void 0?16:qm(r.type)),r)}function kr(r,o,l,f){if(50<el)throw el=0,Vd=null,Error(t(185));Ms(r,l,f),((bt&2)===0||r!==_n)&&(r===_n&&((bt&2)===0&&(Ou|=l),dn===4&&Zi(r,En)),er(r,f),l===1&&bt===0&&(o.mode&1)===0&&(Ua=Xe()+500,vu&&Wi()))}function er(r,o){var l=r.callbackNode;qn(r,o);var f=vr(r,r===_n?En:0);if(f===0)l!==null&&Ge(l),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(l!=null&&Ge(l),o===1)r.tag===0?aM(qg.bind(null,r)):Uv(qg.bind(null,r)),nM(function(){(bt&6)===0&&Wi()}),l=null;else{switch(Hm(f)){case 1:l=dt;break;case 4:l=pt;break;case 16:l=Bt;break;case 536870912:l=nn;break;default:l=Bt}l=r_(l,Yg.bind(null,r))}r.callbackPriority=o,r.callbackNode=l}}function Yg(r,o){if(Hu=-1,Vu=0,(bt&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Na()&&r.callbackNode!==l)return null;var f=vr(r,r===_n?En:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=Gu(r,f);else{o=f;var m=bt;bt|=2;var y=Zg();(_n!==r||En!==o)&&(Si=null,Ua=Xe()+500,ko(r,o));do try{bM();break}catch(U){Kg(r,U)}while(!0);ad(),Fu.current=y,bt=m,an!==null?o=0:(_n=null,En=0,o=dn)}if(o!==0){if(o===2&&(m=Ro(r),m!==0&&(f=m,o=Gd(r,m))),o===1)throw l=Js,ko(r,0),Zi(r,f),er(r,Xe()),l;if(o===6)Zi(r,f);else{if(m=r.current.alternate,(f&30)===0&&!AM(m)&&(o=Gu(r,f),o===2&&(y=Ro(r),y!==0&&(f=y,o=Gd(r,y))),o===1))throw l=Js,ko(r,0),Zi(r,f),er(r,Xe()),l;switch(r.finishedWork=m,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:Bo(r,Qn,Si);break;case 3:if(Zi(r,f),(f&130023424)===f&&(o=Bd+500-Xe(),10<o)){if(vr(r,0)!==0)break;if(m=r.suspendedLanes,(m&f)!==f){Wn(),r.pingedLanes|=r.suspendedLanes&m;break}r.timeoutHandle=qf(Bo.bind(null,r,Qn,Si),o);break}Bo(r,Qn,Si);break;case 4:if(Zi(r,f),(f&4194240)===f)break;for(o=r.eventTimes,m=-1;0<f;){var A=31-Vn(f);y=1<<A,A=o[A],A>m&&(m=A),f&=~y}if(f=m,f=Xe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*MM(f/1960))-f,10<f){r.timeoutHandle=qf(Bo.bind(null,r,Qn,Si),f);break}Bo(r,Qn,Si);break;case 5:Bo(r,Qn,Si);break;default:throw Error(t(329))}}}return er(r,Xe()),r.callbackNode===l?Yg.bind(null,r):null}function Gd(r,o){var l=Qs;return r.current.memoizedState.isDehydrated&&(ko(r,o).flags|=256),r=Gu(r,o),r!==2&&(o=Qn,Qn=l,o!==null&&Wd(o)),r}function Wd(r){Qn===null?Qn=r:Qn.push.apply(Qn,r)}function AM(r){for(var o=r;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],y=m.getSnapshot;m=m.value;try{if(!Ur(y(),m))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Zi(r,o){for(o&=~kd,o&=~Ou,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var l=31-Vn(o),f=1<<l;r[l]=-1,o&=~f}}function qg(r){if((bt&6)!==0)throw Error(t(327));Na();var o=vr(r,0);if((o&1)===0)return er(r,Xe()),null;var l=Gu(r,o);if(r.tag!==0&&l===2){var f=Ro(r);f!==0&&(o=f,l=Gd(r,f))}if(l===1)throw l=Js,ko(r,0),Zi(r,o),er(r,Xe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,Bo(r,Qn,Si),er(r,Xe()),null}function $d(r,o){var l=bt;bt|=1;try{return r(o)}finally{bt=l,bt===0&&(Ua=Xe()+500,vu&&Wi())}}function zo(r){qi!==null&&qi.tag===0&&(bt&6)===0&&Na();var o=bt;bt|=1;var l=Sr.transition,f=Ut;try{if(Sr.transition=null,Ut=1,r)return r()}finally{Ut=f,Sr.transition=l,bt=o,(bt&6)===0&&Wi()}}function Xd(){fr=Ia.current,$t(Ia)}function ko(r,o){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,tM(l)),an!==null)for(l=an.return;l!==null;){var f=l;switch(td(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&pu();break;case 3:Pa(),$t(Kn),$t(Ln),pd();break;case 5:dd(f);break;case 4:Pa();break;case 13:$t(qt);break;case 19:$t(qt);break;case 10:sd(f.type._context);break;case 22:case 23:Xd()}l=l.return}if(_n=r,an=r=Ji(r.current,null),En=fr=o,dn=0,Js=null,kd=Ou=Oo=0,Qn=Qs=null,Uo!==null){for(o=0;o<Uo.length;o++)if(l=Uo[o],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,y=l.pending;if(y!==null){var A=y.next;y.next=m,f.next=A}l.pending=f}Uo=null}return r}function Kg(r,o){do{var l=an;try{if(ad(),Tu.current=Pu,bu){for(var f=Kt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}bu=!1}if(Fo=0,gn=fn=Kt=null,Xs=!1,js=0,zd.current=null,l===null||l.return===null){dn=1,Js=o,an=null;break}e:{var y=r,A=l.return,U=l,k=o;if(o=En,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var oe=k,Ee=U,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var We=Sg(A);if(We!==null){We.flags&=-257,Eg(We,A,U,y,o),We.mode&1&&xg(y,oe,o),o=We,k=oe;var Ye=o.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(k),o.updateQueue=Ke}else Ye.add(k);break e}else{if((o&1)===0){xg(y,oe,o),jd();break e}k=Error(t(426))}}else if(Yt&&U.mode&1){var rn=Sg(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Eg(rn,A,U,y,o),id(La(k,U));break e}}y=k=La(k,U),dn!==4&&(dn=2),Qs===null?Qs=[y]:Qs.push(y),y=A;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var K=_g(y,k,o);$v(y,K);break e;case 1:U=k;var G=y.type,te=y.stateNode;if((y.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Yi===null||!Yi.has(te)))){y.flags|=65536,o&=-o,y.lanes|=o;var Pe=yg(y,U,o);$v(y,Pe);break e}}y=y.return}while(y!==null)}Qg(l)}catch(Je){o=Je,an===l&&l!==null&&(an=l=l.return);continue}break}while(!0)}function Zg(){var r=Fu.current;return Fu.current=Pu,r===null?Pu:r}function jd(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(Oo&268435455)===0&&(Ou&268435455)===0||Zi(_n,En)}function Gu(r,o){var l=bt;bt|=2;var f=Zg();(_n!==r||En!==o)&&(Si=null,ko(r,o));do try{TM();break}catch(m){Kg(r,m)}while(!0);if(ad(),bt=l,Fu.current=f,an!==null)throw Error(t(261));return _n=null,En=0,dn}function TM(){for(;an!==null;)Jg(an)}function bM(){for(;an!==null&&!Qe();)Jg(an)}function Jg(r){var o=n_(r.alternate,r,fr);r.memoizedProps=r.pendingProps,o===null?Qg(r):an=o,zd.current=null}function Qg(r){var o=r;do{var l=o.alternate;if(r=o.return,(o.flags&32768)===0){if(l=yM(l,o,fr),l!==null){an=l;return}}else{if(l=xM(l,o),l!==null){l.flags&=32767,an=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{dn=6,an=null;return}}if(o=o.sibling,o!==null){an=o;return}an=o=r}while(o!==null);dn===0&&(dn=5)}function Bo(r,o,l){var f=Ut,m=Sr.transition;try{Sr.transition=null,Ut=1,CM(r,o,l,f)}finally{Sr.transition=m,Ut=f}return null}function CM(r,o,l,f){do Na();while(qi!==null);if((bt&6)!==0)throw Error(t(327));l=r.finishedWork;var m=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(lw(r,y),r===_n&&(an=_n=null,En=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ku||(ku=!0,r_(Bt,function(){return Na(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=Sr.transition,Sr.transition=null;var A=Ut;Ut=1;var U=bt;bt|=4,zd.current=null,EM(r,l),Gg(l,r),Yw(jf),eu=!!Xf,jf=Xf=null,r.current=l,wM(l),at(),bt=U,Ut=A,Sr.transition=y}else r.current=l;if(ku&&(ku=!1,qi=r,Bu=m),y=r.pendingLanes,y===0&&(Yi=null),yt(l.stateNode),er(r,Xe()),o!==null)for(f=r.onRecoverableError,l=0;l<o.length;l++)m=o[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(zu)throw zu=!1,r=Hd,Hd=null,r;return(Bu&1)!==0&&r.tag!==0&&Na(),y=r.pendingLanes,(y&1)!==0?r===Vd?el++:(el=0,Vd=r):el=0,Wi(),null}function Na(){if(qi!==null){var r=Hm(Bu),o=Sr.transition,l=Ut;try{if(Sr.transition=null,Ut=16>r?16:r,qi===null)var f=!1;else{if(r=qi,qi=null,Bu=0,(bt&6)!==0)throw Error(t(331));var m=bt;for(bt|=4,je=r.current;je!==null;){var y=je,A=y.child;if((je.flags&16)!==0){var U=y.deletions;if(U!==null){for(var k=0;k<U.length;k++){var oe=U[k];for(je=oe;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:Zs(8,Ee,y)}var Te=Ee.child;if(Te!==null)Te.return=Ee,je=Te;else for(;je!==null;){Ee=je;var Se=Ee.sibling,We=Ee.return;if(zg(Ee),Ee===oe){je=null;break}if(Se!==null){Se.return=We,je=Se;break}je=We}}}var Ye=y.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var rn=Ke.sibling;Ke.sibling=null,Ke=rn}while(Ke!==null)}}je=y}}if((y.subtreeFlags&2064)!==0&&A!==null)A.return=y,je=A;else e:for(;je!==null;){if(y=je,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Zs(9,y,y.return)}var K=y.sibling;if(K!==null){K.return=y.return,je=K;break e}je=y.return}}var G=r.current;for(je=G;je!==null;){A=je;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,je=te;else e:for(A=G;je!==null;){if(U=je,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Nu(9,U)}}catch(Je){en(U,U.return,Je)}if(U===A){je=null;break e}var Pe=U.sibling;if(Pe!==null){Pe.return=U.return,je=Pe;break e}je=U.return}}if(bt=m,Wi(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Yn,r)}catch{}f=!0}return f}finally{Ut=l,Sr.transition=o}}return!1}function e_(r,o,l){o=La(l,o),o=_g(r,o,1),r=Xi(r,o,1),o=Wn(),r!==null&&(Ms(r,1,o),er(r,o))}function en(r,o,l){if(r.tag===3)e_(r,r,l);else for(;o!==null;){if(o.tag===3){e_(o,r,l);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Yi===null||!Yi.has(f))){r=La(l,r),r=yg(o,r,1),o=Xi(o,r,1),r=Wn(),o!==null&&(Ms(o,1,r),er(o,r));break}}o=o.return}}function RM(r,o,l){var f=r.pingCache;f!==null&&f.delete(o),o=Wn(),r.pingedLanes|=r.suspendedLanes&l,_n===r&&(En&l)===l&&(dn===4||dn===3&&(En&130023424)===En&&500>Xe()-Bd?ko(r,0):kd|=l),er(r,o)}function t_(r,o){o===0&&((r.mode&1)===0?o=1:(o=Ui,Ui<<=1,(Ui&130023424)===0&&(Ui=4194304)));var l=Wn();r=_i(r,o),r!==null&&(Ms(r,o,l),er(r,l))}function PM(r){var o=r.memoizedState,l=0;o!==null&&(l=o.retryLane),t_(r,l)}function LM(r,o){var l=0;switch(r.tag){case 13:var f=r.stateNode,m=r.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),t_(r,l)}var n_;n_=function(r,o,l){if(r!==null)if(r.memoizedProps!==o.pendingProps||Kn.current)Jn=!0;else{if((r.lanes&l)===0&&(o.flags&128)===0)return Jn=!1,_M(r,o,l);Jn=(r.flags&131072)!==0}else Jn=!1,Yt&&(o.flags&1048576)!==0&&Nv(o,_u,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;Iu(r,o),r=o.pendingProps;var m=wa(o,Ln.current);Ra(o,l),m=gd(null,o,f,r,m,l);var y=_d();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Zn(f)?(y=!0,mu(o)):y=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,cd(o),m.updater=Lu,o.stateNode=m,m._reactInternals=o,Md(o,f,r,l),o=Cd(null,o,f,!0,y,l)):(o.tag=0,Yt&&y&&ed(o),Gn(null,o,m,l),o=o.child),o;case 16:f=o.elementType;e:{switch(Iu(r,o),r=o.pendingProps,m=f._init,f=m(f._payload),o.type=f,m=o.tag=IM(f),r=Fr(f,r),m){case 0:o=bd(null,o,f,r,l);break e;case 1:o=Cg(null,o,f,r,l);break e;case 11:o=wg(null,o,f,r,l);break e;case 14:o=Mg(null,o,f,Fr(f.type,r),l);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Fr(f,m),bd(r,o,f,m,l);case 1:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Fr(f,m),Cg(r,o,f,m,l);case 3:e:{if(Rg(o),r===null)throw Error(t(387));f=o.pendingProps,y=o.memoizedState,m=y.element,Wv(r,o),Mu(o,f,null,l);var A=o.memoizedState;if(f=A.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){m=La(Error(t(423)),o),o=Pg(r,o,f,l,m);break e}else if(f!==m){m=La(Error(t(424)),o),o=Pg(r,o,f,l,m);break e}else for(cr=Hi(o.stateNode.containerInfo.firstChild),ur=o,Yt=!0,Nr=null,l=Vv(o,null,f,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ta(),f===m){o=xi(r,o,l);break e}Gn(r,o,f,l)}o=o.child}return o;case 5:return jv(o),r===null&&rd(o),f=o.type,m=o.pendingProps,y=r!==null?r.memoizedProps:null,A=m.children,Yf(f,m)?A=null:y!==null&&Yf(f,y)&&(o.flags|=32),bg(r,o),Gn(r,o,A,l),o.child;case 6:return r===null&&rd(o),null;case 13:return Lg(r,o,l);case 4:return fd(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=ba(o,null,f,l):Gn(r,o,f,l),o.child;case 11:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Fr(f,m),wg(r,o,f,m,l);case 7:return Gn(r,o,o.pendingProps,l),o.child;case 8:return Gn(r,o,o.pendingProps.children,l),o.child;case 12:return Gn(r,o,o.pendingProps.children,l),o.child;case 10:e:{if(f=o.type._context,m=o.pendingProps,y=o.memoizedProps,A=m.value,Ht(Su,f._currentValue),f._currentValue=A,y!==null)if(Ur(y.value,A)){if(y.children===m.children&&!Kn.current){o=xi(r,o,l);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var U=y.dependencies;if(U!==null){A=y.child;for(var k=U.firstContext;k!==null;){if(k.context===f){if(y.tag===1){k=yi(-1,l&-l),k.tag=2;var oe=y.updateQueue;if(oe!==null){oe=oe.shared;var Ee=oe.pending;Ee===null?k.next=k:(k.next=Ee.next,Ee.next=k),oe.pending=k}}y.lanes|=l,k=y.alternate,k!==null&&(k.lanes|=l),ld(y.return,l,o),U.lanes|=l;break}k=k.next}}else if(y.tag===10)A=y.type===o.type?null:y.child;else if(y.tag===18){if(A=y.return,A===null)throw Error(t(341));A.lanes|=l,U=A.alternate,U!==null&&(U.lanes|=l),ld(A,l,o),A=y.sibling}else A=y.child;if(A!==null)A.return=y;else for(A=y;A!==null;){if(A===o){A=null;break}if(y=A.sibling,y!==null){y.return=A.return,A=y;break}A=A.return}y=A}Gn(r,o,m.children,l),o=o.child}return o;case 9:return m=o.type,f=o.pendingProps.children,Ra(o,l),m=yr(m),f=f(m),o.flags|=1,Gn(r,o,f,l),o.child;case 14:return f=o.type,m=Fr(f,o.pendingProps),m=Fr(f.type,m),Mg(r,o,f,m,l);case 15:return Ag(r,o,o.type,o.pendingProps,l);case 17:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Fr(f,m),Iu(r,o),o.tag=1,Zn(f)?(r=!0,mu(o)):r=!1,Ra(o,l),vg(o,f,m),Md(o,f,m,l),Cd(null,o,f,!0,r,l);case 19:return Ig(r,o,l);case 22:return Tg(r,o,l)}throw Error(t(156,o.tag))};function r_(r,o){return ce(r,o)}function DM(r,o,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Er(r,o,l,f){return new DM(r,o,l,f)}function Yd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function IM(r){if(typeof r=="function")return Yd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ne)return 11;if(r===Q)return 14}return 2}function Ji(r,o){var l=r.alternate;return l===null?(l=Er(r.tag,o,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=o,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,o=r.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Wu(r,o,l,f,m,y){var A=2;if(f=r,typeof r=="function")Yd(r)&&(A=1);else if(typeof r=="string")A=5;else e:switch(r){case F:return Ho(l.children,m,y,o);case de:A=8,m|=8;break;case b:return r=Er(12,l,o,m|2),r.elementType=b,r.lanes=y,r;case pe:return r=Er(13,l,o,m),r.elementType=pe,r.lanes=y,r;case H:return r=Er(19,l,o,m),r.elementType=H,r.lanes=y,r;case re:return $u(l,m,y,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:A=10;break e;case ae:A=9;break e;case ne:A=11;break e;case Q:A=14;break e;case se:A=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=Er(A,l,o,m),o.elementType=r,o.type=f,o.lanes=y,o}function Ho(r,o,l,f){return r=Er(7,r,f,o),r.lanes=l,r}function $u(r,o,l,f){return r=Er(22,r,f,o),r.elementType=re,r.lanes=l,r.stateNode={isHidden:!1},r}function qd(r,o,l){return r=Er(6,r,null,o),r.lanes=l,r}function Kd(r,o,l){return o=Er(4,r.children!==null?r.children:[],r.key,o),o.lanes=l,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function UM(r,o,l,f,m){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Zd(r,o,l,f,m,y,A,U,k){return r=new UM(r,o,l,U,k),o===1?(o=1,y===!0&&(o|=8)):o=0,y=Er(3,null,null,o),r.current=y,y.stateNode=r,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(y),r}function NM(r,o,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:r,containerInfo:o,implementation:l}}function i_(r){if(!r)return Gi;r=r._reactInternals;e:{if(di(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Zn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Zn(l))return Dv(r,l,o)}return o}function o_(r,o,l,f,m,y,A,U,k){return r=Zd(l,f,!0,r,m,y,A,U,k),r.context=i_(null),l=r.current,f=Wn(),m=Ki(l),y=yi(f,m),y.callback=o??null,Xi(l,y,m),r.current.lanes=m,Ms(r,m,f),er(r,f),r}function Xu(r,o,l,f){var m=o.current,y=Wn(),A=Ki(m);return l=i_(l),o.context===null?o.context=l:o.pendingContext=l,o=yi(y,A),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Xi(m,o,A),r!==null&&(kr(r,m,A,y),wu(r,m,A)),A}function ju(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function a_(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<o?l:o}}function Jd(r,o){a_(r,o),(r=r.alternate)&&a_(r,o)}function FM(){return null}var s_=typeof reportError=="function"?reportError:function(r){console.error(r)};function Qd(r){this._internalRoot=r}Yu.prototype.render=Qd.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));Xu(r,o,null,null)},Yu.prototype.unmount=Qd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;zo(function(){Xu(null,r,null,null)}),o[pi]=null}};function Yu(r){this._internalRoot=r}Yu.prototype.unstable_scheduleHydration=function(r){if(r){var o=Wm();r={blockedOn:null,target:r,priority:o};for(var l=0;l<zi.length&&o!==0&&o<zi[l].priority;l++);zi.splice(l,0,r),l===0&&jm(r)}};function eh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function qu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function l_(){}function OM(r,o,l,f,m){if(m){if(typeof f=="function"){var y=f;f=function(){var oe=ju(A);y.call(oe)}}var A=o_(o,f,r,0,null,!1,!1,"",l_);return r._reactRootContainer=A,r[pi]=A.current,zs(r.nodeType===8?r.parentNode:r),zo(),A}for(;m=r.lastChild;)r.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var oe=ju(k);U.call(oe)}}var k=Zd(r,0,!1,null,null,!1,!1,"",l_);return r._reactRootContainer=k,r[pi]=k.current,zs(r.nodeType===8?r.parentNode:r),zo(function(){Xu(o,k,l,f)}),k}function Ku(r,o,l,f,m){var y=l._reactRootContainer;if(y){var A=y;if(typeof m=="function"){var U=m;m=function(){var k=ju(A);U.call(k)}}Xu(o,A,r,m)}else A=OM(l,o,r,m,f);return ju(A)}Vm=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var l=Qt(o.pendingLanes);l!==0&&(Mf(o,l|1),er(o,Xe()),(bt&6)===0&&(Ua=Xe()+500,Wi()))}break;case 13:zo(function(){var f=_i(r,1);if(f!==null){var m=Wn();kr(f,r,1,m)}}),Jd(r,1)}},Af=function(r){if(r.tag===13){var o=_i(r,134217728);if(o!==null){var l=Wn();kr(o,r,134217728,l)}Jd(r,134217728)}},Gm=function(r){if(r.tag===13){var o=Ki(r),l=_i(r,o);if(l!==null){var f=Wn();kr(l,r,o,f)}Jd(r,o)}},Wm=function(){return Ut},$m=function(r,o){var l=Ut;try{return Ut=r,o()}finally{Ut=l}},_t=function(r,o,l){switch(o){case"input":if(xe(r,l),o=l.name,l.type==="radio"&&o!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var f=l[o];if(f!==r&&f.form===r.form){var m=hu(f);if(!m)throw Error(t(90));j(f),xe(f,m)}}}break;case"textarea":T(r,l);break;case"select":o=l.value,o!=null&&Ie(r,!!l.multiple,o,!1)}},ot=$d,wt=zo;var zM={usingClientEntryPoint:!1,Events:[Hs,Sa,hu,me,Ue,$d]},tl={findFiberByHostInstance:Po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kM={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=fe(r),r===null?null:r.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||FM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{Yn=Zu.inject(kM),At=Zu}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zM,tr.createPortal=function(r,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eh(o))throw Error(t(200));return NM(r,o,null,l)},tr.createRoot=function(r,o){if(!eh(r))throw Error(t(299));var l=!1,f="",m=s_;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=Zd(r,1,!1,null,null,l,!1,f,m),r[pi]=o.current,zs(r.nodeType===8?r.parentNode:r),new Qd(o)},tr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=fe(o),r=r===null?null:r.stateNode,r},tr.flushSync=function(r){return zo(r)},tr.hydrate=function(r,o,l){if(!qu(o))throw Error(t(200));return Ku(null,r,o,!0,l)},tr.hydrateRoot=function(r,o,l){if(!eh(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,y="",A=s_;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),o=o_(o,null,r,1,l??null,m,!1,y,A),r[pi]=o.current,zs(r),f)for(r=0;r<f.length;r++)l=f[r],m=l._getVersion,m=m(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,m]:o.mutableSourceEagerHydrationData.push(l,m);return new Yu(o)},tr.render=function(r,o,l){if(!qu(o))throw Error(t(200));return Ku(null,r,o,!1,l)},tr.unmountComponentAtNode=function(r){if(!qu(r))throw Error(t(40));return r._reactRootContainer?(zo(function(){Ku(null,null,r,!1,function(){r._reactRootContainer=null,r[pi]=null})}),!0):!1},tr.unstable_batchedUpdates=$d,tr.unstable_renderSubtreeIntoContainer=function(r,o,l,f){if(!qu(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Ku(r,o,l,!1,f)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var v_;function Ny(){if(v_)return rh.exports;v_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),rh.exports=jM(),rh.exports}var g_;function YM(){if(g_)return Ju;g_=1;var n=Ny();return Ju.createRoot=n.createRoot,Ju.hydrateRoot=n.hydrateRoot,Ju}var qM=YM();const KM=Uy(qM);var Ve=Bp();const so=Uy(Ve),ZM=HM({__proto__:null,default:so},[Ve]);var JM={compose:function(n){return function(e){return function(t){return n(e(t))}}}},QM=function(n){return n.compose},Lr=function(n){return n.identity},Dr={identity:function(n){return n}},e1=function(n){return function(e){return function(t){return function(i){return n(e(t))(e(i))}}}},ai=function(n){return function(e){return function(t){return n(t)(e)}}},zt=function(n){return function(e){return n}};const t1=function(n){return function(e){for(var t=e.length,i=new Array(t),a=0;a<t;a++)i[a]=n(e[a]);return i}},kn=void 0;var It=(function(){function n(){}return n.value=new n,n})(),kt=function(n){return n.map},n1=function(n){var e=kt(n);return function(t){return function(i){return e(i)(t)}}},Fy=function(n){return kt(n)(zt(kn))},r1={map:QM(JM)},Pl={map:t1},_s=function(n){return n.apply},Ct=function(n){return n.pure},Hp=function(n){var e=Ct(n);return function(t){return function(i){if(t)return i;if(!t)return e(kn);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,i.constructor.name])}}},i1=function(n){var e=_s(n.Apply0()),t=Ct(n);return function(i){return function(a){return e(t(i))(a)}}};const o1=typeof Array.prototype.flatMap=="function"?function(n){return function(e){return n.flatMap(e)}}:function(n){return function(e){for(var t=[],i=n.length,a=0;a<i;a++)for(var s=e(n[a]),c=s.length,u=0;u<c;u++)t.push(s[u]);return t}};var Kc=function(n){return n.discard},a1={bind:o1},mn=function(n){return n.bind},Vp=function(n){return ai(mn(n))},Oy=function(n){var e=Vp(n);return function(t){return function(i){return function(a){return e(t)(i(a))}}}},s1=function(n){var e=mn(n);return function(t){return function(i){return function(a){return e(t(a))(i)}}}},Zc={discard:function(n){return mn(n)}};const l1=function(n){return function(e){return n.length===0?e:e.length===0?n:n.concat(e)}};var Yr=function(n){return n.reflectSymbol};const Gp=function(n){return function(e){return e[n]}},Wp=function(n){return function(e){return function(t){var i={};for(var a in t)({}).hasOwnProperty.call(t,a)&&(i[a]=t[a]);return i[n]=e,i}}},u1=function(n){return function(e){var t={};for(var i in e)i!==n&&{}.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}};var Ll={append:l1},Ir=function(n){return n.append},c1=function(n){var e=Ir(n);return{append:function(t){return function(i){return function(a){return e(t(a))(i(a))}}}}},f1=function(n){return n.alt};const d1=2147483647,h1=-2147483648,p1="￿",m1="\0";var v1=function(n){return function(e){return function(t){return function(i){return function(a){return i<a?n:i===a?e:t}}}}};const g1=v1;var $p=function(n){return function(e){return n===e}};const _1=$p,y1=$p,x1=$p,S1=function(n){return function(e){return function(t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!n(e[i])(t[i]))return!1;return!0}}};var ea={eq:x1},E1={eqRecord:function(n){return function(e){return function(t){return!0}}}},zy=function(n){return n.eqRecord},w1=function(){return function(n){return{eq:zy(n)(It.value)}}},M1={eq:y1},A1={eq:_1},ci=function(n){return n.eq},T1=ci(A1),zc=function(n){return{eq:S1(ci(n))}},Uc=function(n){var e=zy(n);return function(){return function(t){var i=Yr(t);return function(a){var s=ci(a);return{eqRecord:function(c){return function(u){return function(d){var h=e(It.value)(u)(d),p=i(It.value),v=Gp(p);return s(v(u))(v(d))&&h}}}}}}}},ky=function(n){var e=ci(n);return function(t){return function(i){return T1(e(t)(i))(!1)}}},kc=(function(){function n(){}return n.value=new n,n})(),Bc=(function(){function n(){}return n.value=new n,n})(),El=(function(){function n(){}return n.value=new n,n})(),b1={eq:function(n){return function(e){return n instanceof kc&&e instanceof kc||n instanceof Bc&&e instanceof Bc||n instanceof El&&e instanceof El}}},By=(function(){return{compare:g1(kc.value)(El.value)(Bc.value),Eq0:function(){return M1}}})(),C1=function(n){return n.compare},Xp=function(n){return n.top},Hy={top:d1,bottom:h1},wl={top:p1,bottom:m1,Ord0:function(){return By}},Jc=function(n){return n.bottom};const R1=function(n){return n.toString()},P1=function(n){var e=n.length;return'"'+n.replace(/[\0-\x1F\x7F"\\]/g,function(t,i){switch(t){case'"':case"\\":return"\\"+t;case"\x07":return"\\a";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v"}var a=i+1,s=a<e&&n[a]>="0"&&n[a]<="9"?"\\&":"";return"\\"+t.charCodeAt(0).toString(10)+s})+'"'};var L1={show:P1},jp={show:R1},sa=function(n){return n.show},ln=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),He=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),nr=(function(){function n(){}return n.value=new n,n})(),D1=function(n){return n.to},Yp=function(n){return n.from},I1=Lr(Dr),Tt=(function(){function n(){}return n.value=new n,n})(),gt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),la=function(n){return function(e){return function(t){if(t instanceof Tt)return n;if(t instanceof gt)return e(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},U1=la(!0)(zt(!1)),Dl={map:function(n){return function(e){return e instanceof gt?new gt(n(e.value0)):Tt.value}}},N1=kt(Dl),Vy=function(n){return la(n)(I1)},F1=function(){return function(n){if(n instanceof gt)return n.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[n.constructor.name])}},Gy={apply:function(n){return function(e){if(n instanceof gt)return N1(n.value0)(e);if(n instanceof Tt)return Tt.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return Dl}},Wy={bind:function(n){return function(e){if(n instanceof gt)return e(n.value0);if(n instanceof Tt)return Tt.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,e.constructor.name])}}},O1=(function(){return{pure:gt.create,Apply0:function(){return Gy}}})(),ct=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ls=function(n){return la(new ct(n))(mt.create)},ua={map:function(n){return function(e){if(e instanceof ct)return new ct(e.value0);if(e instanceof mt)return new mt(n(e.value0));throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},z1=kt(ua),Il=function(n){return function(e){return function(t){if(t instanceof ct)return n(t.value0);if(t instanceof mt)return e(t.value0);throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},$y={apply:function(n){return function(e){if(n instanceof ct)return new ct(n.value0);if(n instanceof mt)return z1(n.value0)(e);throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return ua}},Ul={bind:Il(function(n){return function(e){return new ct(n)}})(function(n){return function(e){return e(n)}}),Apply0:function(){return $y}},ca=(function(){return{pure:mt.create,Apply0:function(){return $y}}})();const k1=function(n){return function(){return n}},B1=function(n){return function(e){return function(){return e(n())()}}};var qp=function(n){var e=mn(n.Bind1()),t=Ct(n.Applicative0());return function(i){return function(a){return e(i)(function(s){return e(a)(function(c){return t(s(c))})})}}};const H1=function(n){return function(e){return e===0?0:e>0?Math.floor(n/e):-Math.floor(n/-e)}},V1=function(n){return function(e){if(e===0)return 0;var t=Math.abs(e);return(n%t+t)%t}};var G1=function(n){return n.mod},Xy={div:H1,mod:V1},W1=function(n){return n.div},jy={mempty:[],Semigroup0:function(){return Ll}},ys=function(n){return n.mempty},$1=function(n){var e=ys(n),t=c1(n.Semigroup0());return{mempty:function(i){return e},Semigroup0:function(){return t}}},Yy=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},X1={Applicative0:function(){return Kp},Bind1:function(){return j1}},j1={bind:B1,Apply0:function(){return Ky(0)}},Kp={pure:k1,Apply0:function(){return Ky(0)}},qy=Yy("functorEffect","Effect",function(){return{map:i1(Kp)}}),Ky=Yy("applyEffect","Effect",function(){return{apply:qp(X1),Functor0:function(){return qy(0)}}}),Y1=qy(20);function Zy(n){return n.message}var Nl=function(n){return n.throwError},Zp=function(n){return n.catchError},q1=function(n){var e=Zp(n),t=n.MonadThrow0().Monad0(),i=kt(t.Bind1().Apply0().Functor0()),a=Ct(t.Applicative0());return function(s){return e(i(mt.create)(s))(function(c){return a(ct.create(c))})}},K1=function(n){return n},Z1={map:function(n){return function(e){return n(e)}}},Jy={apply:function(n){return function(e){return n(e)}},Functor0:function(){return Z1}},Qy={bind:function(n){return function(e){return e(n)}},Apply0:function(){return Jy}},ex={pure:K1,Apply0:function(){return Jy}},Mo={Applicative0:function(){return ex},Bind1:function(){return Qy}};const Fl=function(n){return n},J1=function(n){return function(e){return function(){return n(e())}}},Q1=function(n){return function(e){return function(){for(var t=0,i=n.length;t<i;t++)e(n[t])()}}};var eA={map:J1};const tA=function(n){return function(e){return n&&e}},nA=function(n){return function(e){return n||e}},rA=function(n){return!n};var iA=function(n){return n.not},oA=function(n){return n.ff},tx=function(n){return n.disj},op={ff:!1,tt:!0,implies:function(n){return function(e){return tx(op)(iA(op)(n))(e)}},conj:tA,disj:nA,not:rA},Vt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),aA=function(n){return n.value1},Jp={map:function(n){return function(e){return new Vt(e.value0,n(e.value1))}}},nx=function(n){return n.value0},sA=function(n){var e=Ir(n);return{apply:function(t){return function(i){return new Vt(e(t.value0)(i.value0),t.value1(i.value1))}},Functor0:function(){return Jp}}},lA=function(n){var e=sA(n.Semigroup0());return{pure:Vt.create(ys(n)),Apply0:function(){return e}}},rx=function(n){return n.lift},uA=function(n){return n.tell},cA={liftEffect:Lr(Dr)},Qc=function(n){return n.liftEffect},fA=kt(ua),ix=function(n){return n},Qp=function(n){return n},ox={lift:function(n){var e=mn(n.Bind1()),t=Ct(n.Applicative0());return function(i){return e(i)(function(a){return t(new mt(a))})}}},dA=rx(ox),hA=function(n){return function(e){return n(e)}},ax=function(n){var e=kt(n);return{map:function(t){return hA(e(fA(t)))}}},em=function(n){return{Applicative0:function(){return Ao(n)},Bind1:function(){return Ol(n)}}},Ol=function(n){var e=mn(n.Bind1()),t=Ct(n.Applicative0());return{bind:function(i){return function(a){return e(i)(Il(function(s){return t(ct.create(s))})(function(s){var c=a(s);return c}))}},Apply0:function(){return sx(n)}}},sx=function(n){var e=ax(n.Bind1().Apply0().Functor0());return{apply:qp(em(n)),Functor0:function(){return e}}},Ao=function(n){return{pure:(function(){var e=Ct(n.Applicative0());return function(t){return ix(e(mt.create(t)))}})(),Apply0:function(){return sx(n)}}},tm=function(n){var e=n.Monad0(),t=em(e);return{liftEffect:(function(){var i=dA(e),a=Qc(n);return function(s){return i(a(s))}})(),Monad0:function(){return t}}},ef=function(n){var e=em(n);return{throwError:(function(){var t=Ct(n.Applicative0());return function(i){return ix(t(ct.create(i)))}})(),Monad0:function(){return e}}},nm=function(n){var e=mn(n.Bind1()),t=Ct(n.Applicative0()),i=ef(n);return{catchError:function(a){return function(s){return e(a)(Il(function(c){var u=s(c);return u})(function(c){return t(mt.create(c))}))}},MonadThrow0:function(){return i}}},pA=function(n){var e=Ir(n);return function(t){var i=t.Bind1(),a=mn(i),s=Ct(t.Applicative0()),c=ax(i.Apply0().Functor0());return{alt:function(u){return function(d){return a(u)(function(h){if(h instanceof mt)return s(new mt(h.value0));if(h instanceof ct)return a(d)(function(p){if(p instanceof mt)return s(new mt(p.value0));if(p instanceof ct)return s(new ct(e(h.value0)(p.value0)));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): "+[p.constructor.name])});throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): "+[h.constructor.name])})}},Functor0:function(){return c}}}},lx=function(){return Fl},rm=lx(),mA=function(){return rm},zl=function(){return rm},vA=function(){return function(){return function(){return function(){return function(n){return rm}}}}},gA=zl(),im=function(n){return gA(Qp(n))},_A=Lr(Dr),yA=function(n){return n.bimap},ux=function(n){var e=yA(n);return function(t){return e(t)(_A)}},cx={bimap:function(n){return function(e){return function(t){if(t instanceof ct)return new ct(n(t.value0));if(t instanceof mt)return new mt(e(t.value0));throw new Error("Failed pattern match at Data.Bifunctor (line 38, column 1 - line 40, column 36): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}}},xA=kt(Jp),tf=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),fx=function(n){var e=kt(n);return{dimap:function(t){return function(i){return function(a){return new tf((function(){var s=e(i);return function(c){return s(a.value0(c))}})(),(function(){var s=xA(i);return function(c){return s(a.value1(t(c)))}})())}}}}},tn=function(n){return function(e){return nx(n.value1(e))}},Rn=function(n){return n.value0},nf=function(n){return function(e){return new tf(n,function(t){return new Vt(e(t),t)})}},SA=function(n){return function(e){return new tf(n,function(t){return new Vt(e(t),t)})}};function om(n){return n}function dx(n){return JSON.stringify(n)}function ah(n){return Object.prototype.toString.call(n)==="[object Array]"}function rf(n,e,t,i,a,s,c){return c==null?n():typeof c=="boolean"?e(c):typeof c=="number"?t(c):typeof c=="string"?i(c):Object.prototype.toString.call(c)==="[object Array]"?a(c):s(c)}function ap(n,e,t,i,a){if(i==null)return a==null?n:t;if(typeof i=="boolean")return typeof a=="boolean"?i===a?n:i===!1?t:e:a==null?e:t;if(typeof i=="number")return typeof a=="number"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"?e:t;if(typeof i=="string")return typeof a=="string"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"||typeof a=="number"?e:t;if(ah(i))if(ah(a)){for(var s=0;s<Math.min(i.length,a.length);s++){var c=ap(n,e,t,i[s],a[s]);if(c!==n)return c}return i.length===a.length?n:i.length<a.length?t:e}else return a==null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"?e:t;else{if(a==null)return e;if(typeof a=="boolean")return e;if(typeof a=="number")return e;if(typeof a=="string")return e;if(ah(a))return e;var u=Object.keys(i),d=Object.keys(a);if(u.length<d.length)return t;if(u.length>d.length)return e;for(var h=u.concat(d).sort(),p=0;p<h.length;p++){var v=h[p];if(i[v]===void 0)return t;if(a[v]===void 0)return e;var g=ap(n,e,t,i[v],a[v]);if(g!==n)return g}return n}}const EA={};function wA(n){return n()}function MA(n,e,t,i){return t in i?e(i[t]):n}const AA=(function(){function n(a,s){this.head=a,this.tail=s}var e={};function t(a){return function(s){return new n(a,s)}}function i(a){for(var s=[],c=0,u=a;u!==e;)s[c++]=u.head,u=u.tail;return s}return function(a,s){return i(a(t)(e)(s))}})(),hx=function(n){return n.length},TA=function(n,e,t,i){return i<0||i>=t.length?e:n(t[i])},bA=function(n,e,t){return t.slice(n,e)};function CA(n){return n}const RA=CA;function PA(n){return n.slice()}const LA=PA,DA=function(n,e){return e.push(n)},px=function(e){return function(t){return function(){return e(t)}}},IA=function(e){return function(t){return function(i){return function(){return e(t,i)}}}};var UA=px(RA),NA=px(LA),FA=function(n){return function(e){return function(){var i=NA(e)();return n(i)(),UA(i)()}}},OA=IA(DA);const zA=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=a-1;s>=0;s--)i=n(t[s])(i);return i}}},kA=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=0;s<a;s++)i=n(i)(t[s]);return i}}};var BA=function(n){return n.empty},HA={append:function(n){return function(e){return n instanceof gt?n:e}}},VA=(function(){return{mempty:Tt.value,Semigroup0:function(){return HA}}})(),GA=function(n){return n},WA=function(n){var e=tx(n);return{append:function(t){return function(i){return e(t)(i)}}}},$A=function(n){var e=WA(n);return{mempty:oA(n),Semigroup0:function(){return e}}},XA=zl(),jA=vA()()()(),of=function(n){return n.foldr},am=function(n){return n.foldl},YA=function(n){var e=of(n);return function(t){var i=Ir(t.Semigroup0()),a=ys(t);return function(s){return e(function(c){return function(u){return i(s(c))(u)}})(a)}}},Di={foldr:zA,foldl:kA,foldMap:function(n){return YA(Di)(n)}},mx=function(n){return n.foldMap},qA=function(n){var e=mx(n)(VA);return function(t){var i=ci(t);return function(a){var s=e(function(c){var u=i(a)(c.value0);return u?new gt(c.value1):Tt.value});return function(c){return XA(s(c))}}}},KA=function(n){var e=mx(n);return function(t){return jA(GA)(e($A(t)))}};const ZA=function(n){return function(e){return function(t){return n(e,t)}}},sm=function(n){return function(e){return function(t){return function(i){return n(e,t,i)}}}},vx=function(n){return function(e){return function(t){return function(i){return function(a){return n(e,t,i,a)}}}}},JA=function(n){return function(e){for(var t=e.length,i=Array(t),a=0;a<t;a++)i[a]=n(a)(e[a]);return i}};var gx=function(n){return n.mapWithIndex},_x={mapWithIndex:JA,Functor0:function(){return Pl}};const QA=(function(){function n(a){return[a]}function e(a){return function(s){return[a,s]}}function t(a){return function(s){return function(c){return[a,s,c]}}}function i(a){return function(s){return a.concat(s)}}return function(a){return function(s){return function(c){return function(u){return function(d){function h(p,v){switch(v-p){case 0:return c([]);case 1:return s(n)(u(d[p]));case 2:return a(s(e)(u(d[p])))(u(d[p+1]));case 3:return a(a(s(t)(u(d[p])))(u(d[p+1])))(u(d[p+2]));default:var g=p+Math.floor((v-p)/4)*2;return a(s(i)(h(p,g)))(h(g,v))}}return h(0,d.length)}}}}}})();var eT=Lr(Dr),lm=function(n){return n.traverse},tT=function(n){var e=lm(n);return function(t){return e(t)(eT)}},af={traverse:function(n){var e=n.Apply0();return QA(_s(e))(kt(e.Functor0()))(Ct(n))},sequence:function(n){return tT(af)(n)},Functor0:function(){return Pl},Foldable1:function(){return Di}},nT=function(n){return n.sequence};const rT=function(n){return function(e){return function(t){return function(i){return function(a){return function(s){for(var c=[],u=s;;){var d=a(u);if(n(d))return c;var h=e(d);c.push(t(h)),u=i(h)}}}}}}};var iT=F1(),oT=function(n){return n.unfoldr},aT={unfoldr:rT(U1)(iT)(nx)(aA)},sT=Ir(Ll),lT=function(n){return function(e){return FA(OA(e))(n)()}},uT=sm(bA),cT=function(n){return[n]},fT=(function(){return vx(TA)(gt.create)(Tt.value)})(),dT=function(n){return fT(n)(0)},hT=function(n){return ZA(AA)(of(n))},pT=function(n){return function(e){return uT(n)(hx(e))(e)}},mT=function(n){return function(e){return sT([n])(e)}},vT=ai(mn(a1)),gT=function(n){return vT((function(){var e=la([])(cT);return function(t){return e(n(t))}})())},_T=gT(Lr(Dr)),yT=of(Di),__=gx(_x),xT=am(Di),ST=function(n){return n.foldrWithIndex},ET=function(n){var e=ST(n);return function(t){var i=Ir(t.Semigroup0()),a=ys(t);return function(s){return e(function(c){return function(u){return function(d){return i(s(c)(u))(d)}}})(a)}}},yx={foldrWithIndex:function(n){return function(e){var t=yT(function(a){return function(s){return n(a.value0)(a.value1)(s)}})(e),i=__(Vt.create);return function(a){return t(i(a))}}},foldlWithIndex:function(n){return function(e){var t=xT(function(a){return function(s){return n(s.value0)(a)(s.value1)}})(e),i=__(Vt.create);return function(a){return t(i(a))}}},foldMapWithIndex:function(n){return ET(yx)(n)},Foldable0:function(){return Di}},wT=function(n){var e=nT(n.Traversable2()),t=gx(n.FunctorWithIndex0());return function(i){var a=e(i);return function(s){var c=t(s);return function(u){return a(c(u))}}}},MT=function(n){return n.traverseWithIndex},xx={traverseWithIndex:function(n){return wT(xx)(n)},FunctorWithIndex0:function(){return _x},FoldableWithIndex1:function(){return yx},Traversable2:function(){return af}};const AT=function(){return{}};function TT(n){return function(e){return function(t){return function(){return t[n]=e,t}}}}var bT=Fy(eA),us=(function(){return vx(MA)(Tt.value)(gt.create)})(),Sx=function(n){var e=hT(n);return function(t){return wA(function(){var a=AT();return Q1(e(t))(function(s){return bT(TT(s.value0)(s.value1)(a))})(),a})}},CT=ci(b1),RT=function(n){return function(e){return function(t){return t(n)(e)}}},sf=(function(){return RT(Tt.value)(gt.create)})(),PT=EA,LT={compare:function(n){return function(e){return ap(El.value,Bc.value,kc.value,n,e)}}},DT={eq:function(n){return function(e){return CT(C1(LT)(n)(e))(El.value)}}},IT=function(n){return function(e){return function(t){return rf(zt(n),zt(n),zt(n),e,zt(n),zt(n),t)}}},UT=sf(IT),NT=function(n){return function(e){return function(t){return rf(zt(n),zt(n),zt(n),zt(n),zt(n),e,t)}}},FT=sf(NT),OT=function(n){return function(e){return function(t){return rf(zt(n),zt(n),e,zt(n),zt(n),zt(n),t)}}},zT=sf(OT),kT=function(n){return function(e){return function(t){return rf(zt(n),zt(n),zt(n),zt(n),e,zt(n),t)}}},BT=sf(kT);const HT=function(n){return function(e){return function(t){return(t|0)===t?n(t):e}}},Ml=function(n){return n},VT=isFinite,GT=Math.trunc?Math.trunc:function(n){return n<0?Math.ceil(n):Math.floor(n)};var y_=Xp(Hy),x_=Jc(Hy),Ex=(function(){return HT(gt.create)(Tt.value)})(),WT=function(n){return VT(n)?n>=Ml(y_)?y_:n<=Ml(x_)?x_:Vy(0)(Ex(n)):0},sh=function(n){return WT(GT(n))},wx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),$T=function(n){var e=BA(n);return function(t){return new wx(t,e)}},Wr=(function(){function n(){}return n.value=new n,n})(),Zt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),XT=function(n){return n},jT=function(n){return new Zt(n.value0,n.value1)},YT=function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof Zt&&h.value1 instanceof Zt&&h.value1.value1 instanceof Zt){a=new Zt(h,d),i=h.value1.value1.value1;return}var p=function(g){return g instanceof Zt&&g.value1 instanceof Zt&&g.value1.value1 instanceof Wr?new Zt(n(g.value0),new Zt(n(g.value1.value0),Wr.value)):g instanceof Zt&&g.value1 instanceof Wr?new Zt(n(g.value0),Wr.value):Wr.value},v=function(g){return function(S){var E=g,w=!1,x;function _(C,M){if(C instanceof Zt&&C.value0 instanceof Zt&&C.value0.value1 instanceof Zt&&C.value0.value1.value1 instanceof Zt){E=C.value1,S=new Zt(n(C.value0.value0),new Zt(n(C.value0.value1.value0),new Zt(n(C.value0.value1.value1.value0),M)));return}return w=!0,M}for(;!w;)x=_(E,S);return x}};return s=!0,v(d)(p(h))}for(;!s;)c=u(a,i);return c}};return e(Wr.value)},qT={map:YT},um={foldr:function(n){return function(e){var t=(function(){var a=function(s){return function(c){var u=s,d=!1,h;function p(v,g){if(g instanceof Wr)return d=!0,v;if(g instanceof Zt){u=new Zt(g.value0,v),c=g.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[v.constructor.name,g.constructor.name])}for(;!d;)h=p(u,c);return h}};return a(Wr.value)})(),i=am(um)(ai(n))(e);return function(a){return i(t(a))}}},foldl:function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof Wr)return s=!0,d;if(h instanceof Zt){a=n(d)(h.value0),i=h.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}},KT=of(um),Mx={append:function(n){return function(e){return KT(Zt.create)(e)(n)}}},Ax=Ir(Mx),ZT=(function(){return{mempty:Wr.value,Semigroup0:function(){return Mx}}})(),JT={append:function(n){return function(e){return new wx(n.value0,Ax(n.value1)(jT(e)))}}},QT={alt:Ax,Functor0:function(){return qT}},eb=(function(){return{empty:Wr.value,Alt0:function(){return QT}}})(),tb=typeof Array.from=="function",nb=typeof Symbol<"u"&&Symbol!=null&&typeof Symbol.iterator<"u"&&typeof String.prototype[Symbol.iterator]=="function",rb=typeof String.prototype.fromCodePoint=="function",ib=typeof String.prototype.codePointAt=="function";const ob=function(n){return ib?function(e){return e.codePointAt(0)}:n},ab=function(n){return rb?String.fromCodePoint:n},sb=function(n){return function(e){return nb?function(t){for(var i="",a=t[Symbol.iterator](),s=0;s<e;++s){var c=a.next();if(c.done)return i;i+=c.value}return i}:n(e)}},lb=function(n){return function(e){return tb?function(t){return Array.from(t,e)}:n}};function ta(n){return n.charCodeAt(0)}function ub(n){return String.fromCharCode(n)}var Tx=Jc(wl),bx=Xp(wl),cb=function(n){return n.toEnum},Cx=function(n){return n.fromEnum},fb=function(n){var e=cb(n),t=Cx(n),i=Jc(n.Bounded0());return function(a){return function(s){return function(c){var u=e(c);if(u instanceof gt)return u.value0;if(u instanceof Tt){var d=c<t(i);return d?a:s}throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): "+[u.constructor.name])}}}},db=function(n){return function(e){return function(t){return n(e(t)+1|0)}}},hb=function(n){return function(e){return function(t){return n(e(t)-1|0)}}},sp=function(n){return n>=ta(Tx)&&n<=ta(bx)?new gt(ub(n)):Tt.value},pb={succ:db(sp)(ta),pred:hb(sp)(ta),Ord0:function(){return By}},Rx=(function(){return{cardinality:ta(bx)-ta(Tx)|0,toEnum:sp,fromEnum:ta,Bounded0:function(){return wl},Enum1:function(){return pb}}})();const mb=function(n){return n},cm=function(n){return n.length},vb=function(n){return function(e){return function(t){return function(i){var a=i.indexOf(t);return a===-1?e:n(a)}}}},gb=function(n){return function(e){return function(t){return function(i){var a=i.lastIndexOf(t);return a===-1?e:n(a)}}}},Px=function(n){return function(e){return e.substr(0,n)}},lp=function(n){return function(e){return e.substring(n)}},fl=function(n){return function(e){if(n>=0&&n<e.length)return e.charAt(n);throw new Error("Data.String.Unsafe.charAt: Invalid index.")}};var _b=(function(){return gb(gt.create)(Tt.value)})(),yb=(function(){return vb(gt.create)(Tt.value)})();const Lx=function(n){return function(e){return e.split(n)}},xb=function(n){return function(e){return e.join(n)}};var dl=Cx(Rx),Dx=kt(Dl),Sb=oT(aT),Eb=W1(Xy),wb=G1(Xy),Ix=function(n){return function(e){return(((n-55296|0)*1024|0)+(e-56320|0)|0)+65536|0}},Ux=function(n){return 56320<=n&&n<=57343},Nx=function(n){return 55296<=n&&n<=56319},Fx=function(n){var e=cm(n);if(e===0)return Tt.value;if(e===1)return new gt({head:dl(fl(0)(n)),tail:""});var t=dl(fl(1)(n)),i=dl(fl(0)(n)),a=Nx(i)&&Ux(t);return a?new gt({head:Ix(i)(t),tail:lp(2)(n)}):new gt({head:i,tail:lp(1)(n)})},Mb=function(n){return Dx(function(e){return new Vt(e.head,e.tail)})(Fx(n))},Ab=function(n){return Sb(Mb)(n)},Tb=function(n){var e=dl(fl(0)(n)),t=Nx(e)&&cm(n)>1;if(t){var i=dl(fl(1)(n)),a=Ux(i);return a?Ix(e)(i):e}return e},bb=ob(Tb),Cb=lb(Ab)(bb),Rb=function(n){return hx(Cb(n))},Pb=function(n){return function(e){return Dx(function(t){return Rb(Px(t)(e))})(_b(n)(e))}},lh=(function(){var n=fb(Rx)(Jc(wl))(Xp(wl));return function(e){return mb(n(e))}})(),Lb=function(n){if(n<=65535)return lh(n);var e=Eb(n-65536|0)(1024)+55296|0,t=wb(n-65536|0)(1024)+56320|0;return lh(e)+lh(t)},Db=ab(Lb),Ox=function(n){return function(e){if(n<1)return"";var t=Fx(e);return t instanceof gt?Db(t.value0.head)+Ox(n-1|0)(t.value0.tail):e}},Ib=sb(Ox),Ub=sa(jp),S_=mn(Ul),fm=ux(cx),dm=Ct(ca),zx=Vp(Ul),Nb=Sx(um),Fb=Oy(Wy),Ob=MT(xx)(ca),zb=kt(Pl),si=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),kb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),kx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Bx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),hm=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Hx=(function(){function n(){}return n.value=new n,n})(),Bb=function(n){var e=Yr(n);return function(){return function(t){return function(i){return function(a){var s=function(d){return function(h){return new Zt(new Vt(d,tn(i)(Gp(d)(h))),tn(a)(h))}},c=function(d){return function(h){return S_(Rn(a)(h))(function(p){return S_(fm(Bx.create(d))((function(){var v=us(d)(h);if(v instanceof gt)return Rn(i)(v.value0);if(v instanceof Tt)return new ct(Hx.value);throw new Error("Failed pattern match at Data.Codec.Argonaut (line 264, column 29 - line 266, column 34): "+[v.constructor.name])})()))(function(v){return dm(Wp(d)(v)(p))})})}},u=e(t);return SA(c(u))(s(u))}}}}},Hb=(function(){return new tf(zt(dm({})),Ct(lA(ZT)))})(),Vb=function(n){var e=function(t){if(t instanceof si)return"  Expected value of type '"+(t.value0+"'.");if(t instanceof kb)return"  Unexpected value "+(dx(t.value0)+".");if(t instanceof kx)return"  At array index "+(Ub(t.value0)+(`:
`+e(t.value1)));if(t instanceof Bx)return"  At object key "+(t.value0+(`:
`+e(t.value1)));if(t instanceof hm)return"  Under '"+(t.value0+(`':
`+e(t.value1)));if(t instanceof Hx)return"  No value was found.";throw new Error("Failed pattern match at Data.Codec.Argonaut (line 90, column 8 - line 96, column 43): "+[t.constructor.name])};return`An error occurred while decoding a JSON value:
`+e(n)},lf=function(n){return function(e){return nf((function(){var t=la(new ct(new si(n)))(dm);return function(i){return t(e(i))}})())}},ir=lf("String")(UT)(om),_o=lf("Object")(FT)(om),Gb=function(n){return function(e){return nf(function(t){return fm(hm.create(n))(zx(Rn(e))(Rn(_o)(t)))})(function(t){return tn(_o)(Nb(tn(e)(t)))})}},ho=lf("Array")(BT)(om),Hc=lf("Int")(Fb(Ex)(zT))(function(n){return Ml(n)}),uf=function(n){return nf(function(e){return zx(Ob(function(t){return function(i){return fm(kx.create(t))(Rn(n)(i))}}))(Rn(ho)(e))})(function(e){return zb(tn(n))(e)})},Wb=function(n){var e=Yr(n);return function(){return function(){return function(t){return function(i){return function(a){return Wp(e(t))(i)(a)}}}}}},Vx=function(n){var e=Yr(n);return function(){return function(){return function(t){return function(i){return function(a){return Wp(e(t))(i)(a)}}}}}},To=function(n){var e=Yr(n);return function(){return function(t){return function(i){return Gp(e(t))(i)}}}},$b=function(n){var e=Yr(n);return function(){return function(){return function(t){return function(i){return u1(e(t))(i)}}}}},pm={rowListCodec:function(n){return function(e){return Hb}}},Gx=function(n){return n.rowListCodec},po=function(n){var e=Gx(n);return function(){return function(){return function(t){var i=To(t)(),a=Bb(t)();return{rowListCodec:function(s){return function(c){var u=e(It.value)(c),d=i(It.value)(c);return a(It.value)(d)(u)}}}}}}},Xb=function(){return function(n){return Gx(n)(It.value)}},jb=Xb(),Wx=function(){return function(n){var e=jb(n);return function(t){return function(i){return Gb(t)(e(i))}}}},hl={dimap:function(n){return function(e){return function(t){return function(i){return e(t(n(i)))}}}}},cf=function(n){return n.dimap},fa={first:function(n){return function(e){return new Vt(n(e.value0),e.value1)}},second:kt(Jp),Profunctor0:function(){return hl}},Yb=function(n){return n.first},E_=lx(),qb=function(n){return function(e){return function(t){var i=cf(t);return function(a){return i(n)(e)(a)}}}},Kb=function(){return function(){return function(n){return qb(E_)(E_)(n)}}},Zb=Kb()(),Jb=function(){return function(){return function(n){return Zb(n)}}},Qb=Jb()(),$x=function(){return function(n){return function(e){return Qb(e)}}},Xx=function(n){return n},rs=function(n){return function(e){return Xx(n)(zt(e))}},br=(function(){var n={},e="Pure",t="Throw",i="Catch",a="Sync",s="Async",c="Bind",u="Bracket",d="Fork",h="Sequential",p="Map",v="Apply",g="Alt",S="Cons",E="Resume",w="Release",x="Finalizer",_="Finalized",C="Forked";function M(P,z,W,q){this.tag=P,this._1=z,this._2=W,this._3=q}function R(P){var z=function(W,q,ee){return new M(P,W,q,ee)};return z.tag=P,z}function I(P){return new M(e,void 0)}function O(P){try{P()}catch(z){setTimeout(function(){throw z},0)}}function F(P,z,W){try{return z(W())}catch(q){return P(q)}}function de(P,z,W){try{return z(W)()}catch(q){return W(P(q))(),I}}var b=(function(){var P=1024,z=0,W=0,q=new Array(P),ee=!1;function Z(){var _e;for(ee=!0;z!==0;)z--,_e=q[W],q[W]=void 0,W=(W+1)%P,_e();ee=!1}return{isDraining:function(){return ee},enqueue:function(_e){var ve;z===P&&(ve=ee,Z(),ee=ve),q[(W+z)%P]=_e,z++,ee||Z()}}})();function N(P){var z={},W=0,q=0;return{register:function(ee){var Z=W++;ee.onComplete({rethrow:!0,handler:function(_e){return function(){q--,delete z[Z]}}})(),z[Z]=ee,q++},isEmpty:function(){return q===0},killAll:function(ee,Z){return function(){if(q===0)return Z();var _e=0,ve={};function be(Oe){ve[Oe]=z[Oe].kill(ee,function(j){return function(){delete ve[Oe],_e--,P.isLeft(j)&&P.fromLeft(j)&&setTimeout(function(){throw P.fromLeft(j)},0),_e===0&&Z()}})()}for(var Fe in z)z.hasOwnProperty(Fe)&&(_e++,be(Fe));return z={},W=0,q=0,function(Oe){return new M(a,function(){for(var j in ve)ve.hasOwnProperty(j)&&ve[j]()})}}}}}var ae=0,ne=1,pe=2,H=3,Q=4,se=5,re=6;function X(P,z,W){var q=0,ee=ae,Z=W,_e=null,ve=null,be=null,Fe=null,Oe=null,j=0,Lt=0,Be=null,le=!0;function ue(we){for(var Ie,Ze,D;;)switch(Ie=null,Ze=null,D=null,ee){case pe:ee=ne;try{Z=be(Z),Fe===null?be=null:(be=Fe._1,Fe=Fe._2)}catch(Y){ee=se,_e=P.left(Y),Z=null}break;case H:P.isLeft(Z)?(ee=se,_e=Z,Z=null):be===null?ee=se:(ee=pe,Z=P.fromRight(Z));break;case ne:switch(Z.tag){case c:be&&(Fe=new M(S,be,Fe)),be=Z._2,ee=ne,Z=Z._1;break;case e:be===null?(ee=se,Z=P.right(Z._1)):(ee=pe,Z=Z._1);break;case a:ee=H,Z=F(P.left,P.right,Z._1);break;case s:ee=Q,Z=de(P.left,Z._1,function(Y){return function(){q===we&&(q++,b.enqueue(function(){q===we+1&&(ee=H,Z=Y,ue(q))}))}});return;case t:ee=se,_e=P.left(Z._1),Z=null;break;case i:be===null?Oe=new M(S,Z,Oe,ve):Oe=new M(S,Z,new M(S,new M(E,be,Fe),Oe,ve),ve),be=null,Fe=null,ee=ne,Z=Z._1;break;case u:j++,be===null?Oe=new M(S,Z,Oe,ve):Oe=new M(S,Z,new M(S,new M(E,be,Fe),Oe,ve),ve),be=null,Fe=null,ee=ne,Z=Z._1;break;case d:ee=H,Ie=X(P,z,Z._2),z&&z.register(Ie),Z._1&&Ie.run(),Z=P.right(Ie);break;case h:ee=ne,Z=$(P,z,Z._1);break}break;case se:if(be=null,Fe=null,Oe===null)ee=re,Z=ve||_e||Z;else switch(Ie=Oe._3,D=Oe._1,Oe=Oe._2,D.tag){case i:ve&&ve!==Ie&&j===0?ee=se:_e&&(ee=ne,Z=D._2(P.fromLeft(_e)),_e=null);break;case E:ve&&ve!==Ie&&j===0||_e?ee=se:(be=D._1,Fe=D._2,ee=pe,Z=P.fromRight(Z));break;case u:j--,_e===null&&(Ze=P.fromRight(Z),Oe=new M(S,new M(w,D._2,Ze),Oe,Ie),(ve===Ie||j>0)&&(ee=ne,Z=D._3(Ze)));break;case w:Oe=new M(S,new M(_,Z,_e),Oe,ve),ee=ne,ve&&ve!==Ie&&j===0?Z=D._1.killed(P.fromLeft(ve))(D._2):_e?Z=D._1.failed(P.fromLeft(_e))(D._2):Z=D._1.completed(P.fromRight(Z))(D._2),_e=null,j++;break;case x:j++,Oe=new M(S,new M(_,Z,_e),Oe,ve),ee=ne,Z=D._1;break;case _:j--,ee=se,Z=D._1,_e=D._2;break}break;case re:for(var T in Be)Be.hasOwnProperty(T)&&(le=le&&Be[T].rethrow,O(Be[T].handler(Z)));Be=null,ve&&_e?setTimeout(function(){throw P.fromLeft(_e)},0):P.isLeft(Z)&&le&&setTimeout(function(){if(le)throw P.fromLeft(Z)},0);return;case ae:ee=ne;break;case Q:return}}function xe(we){return function(){if(ee===re)return le=le&&we.rethrow,we.handler(Z)(),function(){};var Ie=Lt++;return Be=Be||{},Be[Ie]=we,function(){Be!==null&&delete Be[Ie]}}}function ge(we,Ie){return function(){if(ee===re)return Ie(P.right(void 0))(),function(){};var Ze=xe({rethrow:!1,handler:function(){return Ie(P.right(void 0))}})();switch(ee){case ae:ve=P.left(we),ee=re,Z=ve,ue(q);break;case Q:ve===null&&(ve=P.left(we)),j===0&&(ee===Q&&(Oe=new M(S,new M(x,Z(we)),Oe,ve)),ee=se,Z=null,_e=null,ue(++q));break;default:ve===null&&(ve=P.left(we)),j===0&&(ee=se,Z=null,_e=null)}return Ze}}function Me(we){return function(){var Ie=xe({rethrow:!1,handler:we})();return ee===ae&&ue(q),Ie}}return{kill:ge,join:Me,onComplete:xe,isSuspended:function(){return ee===ae},run:function(){ee===ae&&(b.isDraining()?ue(q):b.enqueue(function(){ue(q)}))}}}function ie(P,z,W,q){var ee=0,Z={},_e=0,ve={},be=new Error("[ParAff] Early exit"),Fe=null,Oe=n;function j(xe,ge,Me){var we=ge,Ie=null,Ze=null,D=0,T={},Y,Ae;e:for(;;)switch(Y=null,we.tag){case C:if(we._3===n&&(Y=Z[we._1],T[D++]=Y.kill(xe,function(ye){return function(){D--,D===0&&Me(ye)()}})),Ie===null)break e;we=Ie._2,Ze===null?Ie=null:(Ie=Ze._1,Ze=Ze._2);break;case p:we=we._2;break;case v:case g:Ie&&(Ze=new M(S,Ie,Ze)),Ie=we,we=we._1;break}if(D===0)Me(P.right(void 0))();else for(Ae=0,Y=D;Ae<Y;Ae++)T[Ae]=T[Ae]();return T}function Lt(xe,ge,Me){var we,Ie,Ze,D,T,Y;for(P.isLeft(xe)?(we=xe,Ie=null):(Ie=xe,we=null);;){if(Ze=null,D=null,T=null,Y=null,Fe!==null)return;if(ge===null){q(we||Ie)();return}if(ge._3!==n)return;switch(ge.tag){case p:we===null?(ge._3=P.right(ge._1(P.fromRight(Ie))),Ie=ge._3):ge._3=we;break;case v:if(Ze=ge._1._3,D=ge._2._3,we){if(ge._3=we,T=!0,Y=_e++,ve[Y]=j(be,we===Ze?ge._2:ge._1,function(){return function(){delete ve[Y],T?T=!1:Me===null?Lt(we,null,null):Lt(we,Me._1,Me._2)}}),T){T=!1;return}}else{if(Ze===n||D===n)return;Ie=P.right(P.fromRight(Ze)(P.fromRight(D))),ge._3=Ie}break;case g:if(Ze=ge._1._3,D=ge._2._3,Ze===n&&P.isLeft(D)||D===n&&P.isLeft(Ze))return;if(Ze!==n&&P.isLeft(Ze)&&D!==n&&P.isLeft(D))we=Ie===Ze?D:Ze,Ie=null,ge._3=we;else if(ge._3=Ie,T=!0,Y=_e++,ve[Y]=j(be,Ie===Ze?ge._2:ge._1,function(){return function(){delete ve[Y],T?T=!1:Me===null?Lt(Ie,null,null):Lt(Ie,Me._1,Me._2)}}),T){T=!1;return}break}Me===null?ge=null:(ge=Me._1,Me=Me._2)}}function Be(xe){return function(ge){return function(){delete Z[xe._1],xe._3=ge,Lt(ge,xe._2._1,xe._2._2)}}}function le(){var xe=ne,ge=W,Me=null,we=null,Ie,Ze;e:for(;;)switch(Ie=null,Ze=null,xe){case ne:switch(ge.tag){case p:Me&&(we=new M(S,Me,we)),Me=new M(p,ge._1,n,n),ge=ge._2;break;case v:Me&&(we=new M(S,Me,we)),Me=new M(v,n,ge._2,n),ge=ge._1;break;case g:Me&&(we=new M(S,Me,we)),Me=new M(g,n,ge._2,n),ge=ge._1;break;default:Ze=ee++,xe=se,Ie=ge,ge=new M(C,Ze,new M(S,Me,we),n),Ie=X(P,z,Ie),Ie.onComplete({rethrow:!1,handler:Be(ge)})(),Z[Ze]=Ie,z&&z.register(Ie)}break;case se:if(Me===null)break e;Me._1===n?(Me._1=ge,xe=ne,ge=Me._2,Me._2=n):(Me._2=ge,ge=Me,we===null?Me=null:(Me=we._1,we=we._2))}for(Oe=ge,Ze=0;Ze<ee;Ze++)Z[Ze].run()}function ue(xe,ge){Fe=P.left(xe);var Me;for(var we in ve)if(ve.hasOwnProperty(we)){Me=ve[we];for(we in Me)Me.hasOwnProperty(we)&&Me[we]()}ve=null;var Ie=j(xe,Oe,ge);return function(Ze){return new M(s,function(D){return function(){for(var T in Ie)Ie.hasOwnProperty(T)&&Ie[T]();return I}})}}return le(),function(xe){return new M(s,function(ge){return function(){return ue(xe,ge)}})}}function $(P,z,W){return new M(s,function(q){return function(){return ie(P,z,W,q)}})}return M.EMPTY=n,M.Pure=R(e),M.Throw=R(t),M.Catch=R(i),M.Sync=R(a),M.Async=R(s),M.Bind=R(c),M.Bracket=R(u),M.Fork=R(d),M.Seq=R(h),M.ParMap=R(p),M.ParApply=R(v),M.ParAlt=R(g),M.Fiber=X,M.Supervisor=N,M.Scheduler=b,M.nonCanceler=I,M})();const eC=br.Pure,tC=br.Throw;function nC(n){return function(e){return br.Catch(n,e)}}function rC(n){return function(e){return e.tag===br.Pure.tag?br.Pure(n(e._1)):br.Bind(e,function(t){return br.Pure(n(t))})}}function iC(n){return function(e){return br.Bind(n,e)}}const oC=br.Sync,w_=br.Async;function aC(n,e){return function(){return br.Fiber(n,null,e)}}br.Seq;var sC=function(n){return n},lC=function(n){return n},uC=function(n){return function(e){return n(e)}},cC=function(n){var e=kt(n);return{map:function(t){return uC(e(function(i){return new Vt(t(i.value0),i.value1)}))}}},jx=function(n){var e=Ir(n);return function(t){var i=_s(t),a=t.Functor0(),s=kt(a),c=cC(a);return{apply:function(u){return function(d){var h=function(p){return function(v){return new Vt(p.value0(v.value0),e(p.value1)(v.value1))}};return i(s(h)(u))(d)}},Functor0:function(){return c}}}},Yx=function(n){var e=Ir(n),t=jx(n);return function(i){var a=mn(i),s=i.Apply0(),c=kt(s.Functor0()),u=t(s);return{bind:function(d){return function(h){return a(d)(function(p){var v=h(p.value0);return c(function(g){return new Vt(g.value0,e(p.value1)(g.value1))})(v)})}},Apply0:function(){return u}}}},qx=function(n){var e=ys(n),t=jx(n.Semigroup0());return function(i){var a=Ct(i),s=t(i.Apply0());return{pure:function(c){return a(new Vt(c,e))},Apply0:function(){return s}}}},fC=function(n){var e=qx(n),t=Yx(n.Semigroup0());return function(i){var a=e(i.Applicative0()),s=t(i.Bind1());return{Applicative0:function(){return a},Bind1:function(){return s}}}},dC=function(n){var e=n.Semigroup0(),t=fC(n);return function(i){var a=t(i);return{tell:(function(){var s=Ct(i.Applicative0()),c=Vt.create(kn);return function(u){return sC(s(c(u)))}})(),Semigroup0:function(){return e},Monad1:function(){return a}}}};const hC=function(n){return n()},pC=function(n){throw new Error(n)};var mC=function(){return pC},vC=mC(),gC=hC,M_=function(n){return gC(function(){return vC(n)})},_C=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},yC=Fy(Y1),Kx={map:rC},xC=(function(){var n=function(i){if(i instanceof mt)return i.value0;if(i instanceof ct)return M_("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[i.constructor.name])},e=function(i){if(i instanceof ct)return i.value0;if(i instanceof mt)return M_("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[i.constructor.name])},t=function(i){if(i instanceof ct)return!0;if(i instanceof mt)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[i.constructor.name])};return{isLeft:t,fromLeft:e,fromRight:n,left:ct.create,right:mt.create}})(),SC=function(n){return aC(xC,n)},EC=function(n){return function(){var t=SC(n)();return t.run(),t}},Zx=function(n){return yC(EC(n))},sr={Applicative0:function(){return kl},Bind1:function(){return mm}},mm={bind:iC,Apply0:function(){return Jx(0)}},kl={pure:eC,Apply0:function(){return Jx(0)}},Jx=_C("applyAff","Effect.Aff",function(){return{apply:qp(sr),Functor0:function(){return Kx}}}),wC=Ct(kl),Bl={liftEffect:oC,Monad0:function(){return sr}},MC={throwError:tC,Monad0:function(){return sr}},AC={catchError:nC,MonadThrow0:function(){return MC}},TC=zt(wC(kn));const bC=function(n){return function(){console.log(n)}};var ff=function(n){var e=Qc(n);return function(t){return e(bC(t))}};function CC(n,e,t,i,a){return function(s,c){var u=n.newXHR(),d=n.fixupUrl(a.url,u);if(u.open(a.method||"GET",d,!0,a.username,a.password),a.headers)try{for(var h=0,p;(p=a.headers[h])!=null;h++)u.setRequestHeader(p.field,p.value)}catch(g){s(g)}var v=function(g){return function(){s(new Error(g))}};return u.onerror=v(t),u.ontimeout=v(e),u.onload=function(){c({status:u.status,statusText:u.statusText,headers:u.getAllResponseHeaders().split(`\r
`).filter(function(g){return g.length>0}).map(function(g){var S=g.indexOf(":");return i(g.substring(0,S))(g.substring(S+2))}),body:u.response})},u.responseType=a.responseType,u.withCredentials=a.withCredentials,u.timeout=a.timeout,u.send(a.content),function(g,S,E){try{u.abort()}catch(w){return S(w)}return E()}}}var Qx="application/json",RC="application/x-www-form-urlencoded",PC=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),LC=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),DC=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),IC=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),UC=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),eS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),tS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),NC=function(n){return n instanceof eS?new gt(RC):n instanceof tS?new gt(Qx):Tt.value},A_=zl(),vm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),gm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),nS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),FC=function(n){if(n instanceof vm||n instanceof gm)return A_(n.value0);if(n instanceof nS)return n.value1;throw new Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): "+[n.constructor.name])},T_=function(n){if(n instanceof vm)return"Accept";if(n instanceof gm)return"Content-Type";if(n instanceof nS)return n.value0;throw new Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): "+[n.constructor.name])},_m=Lr(Dr),rS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),iS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),oS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),df=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ym=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),xm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),OC=function(n){if(n instanceof rS)return"arraybuffer";if(n instanceof iS)return"blob";if(n instanceof oS)return"document";if(n instanceof df||n instanceof ym)return"text";if(n instanceof xm)return"";throw new Error("Failed pattern match at Affjax.ResponseFormat (line 44, column 3 - line 50, column 19): "+[n.constructor.name])},zC=function(n){return n instanceof df?new gt(Qx):Tt.value},kC=(function(){return new ym(_m)})(),BC=(function(){return new df(_m)})(),HC=(function(){return new xm(_m)})(),VC=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})();function GC(n,e,t){try{return e(JSON.parse(t))}catch(i){return n(i.message)}}var WC=function(n){return GC(ct.create,mt.create,n)};function $C(n){return n.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function XC(n,e,t){try{return e($C(encodeURIComponent(t)).replace(/%20/g,"+"))}catch(i){return n(i)}}function jC(n,e,t){try{return e(decodeURIComponent(t))}catch(i){return n(i)}}var uh=(function(){return sm(XC)(zt(Tt.value))(gt.create)})(),YC=(function(){return sm(jC)(zt(Tt.value))(gt.create)})(),qC=_s(Gy),b_=kt(Dl),KC=lm(af)(O1),ZC=function(n){return n},JC=(function(){var n=function(i){if(i.value1 instanceof Tt)return uh(i.value0);if(i.value1 instanceof gt)return qC(b_(function(a){return function(s){return a+("="+s)}})(uh(i.value0)))(uh(i.value1.value0));throw new Error("Failed pattern match at Data.FormURLEncoded (line 37, column 16 - line 39, column 114): "+[i.constructor.name])},e=b_(xb("&")),t=KC(n);return function(i){return e(t(ZC(i)))}})(),QC=(function(){function n(){}return n.value=new n,n})(),aS=(function(){function n(){}return n.value=new n,n})(),eR=(function(){function n(){}return n.value=new n,n})(),tR=(function(){function n(){}return n.value=new n,n})(),nR=(function(){function n(){}return n.value=new n,n})(),rR=(function(){function n(){}return n.value=new n,n})(),iR=(function(){function n(){}return n.value=new n,n})(),oR=(function(){function n(){}return n.value=new n,n})(),aR=(function(){function n(){}return n.value=new n,n})(),sR=(function(){function n(){}return n.value=new n,n})(),lR=(function(){function n(){}return n.value=new n,n})(),uR=(function(){function n(){}return n.value=new n,n})(),cR=(function(){function n(){}return n.value=new n,n})(),fR=(function(){function n(){}return n.value=new n,n})(),dR=(function(){function n(){}return n.value=new n,n})(),hR=(function(){function n(){}return n.value=new n,n})(),pR=function(n){return n},mR={show:function(n){if(n instanceof QC)return"OPTIONS";if(n instanceof aS)return"GET";if(n instanceof eR)return"HEAD";if(n instanceof tR)return"POST";if(n instanceof nR)return"PUT";if(n instanceof rR)return"DELETE";if(n instanceof iR)return"TRACE";if(n instanceof oR)return"CONNECT";if(n instanceof aR)return"PROPFIND";if(n instanceof sR)return"PROPPATCH";if(n instanceof lR)return"MKCOL";if(n instanceof uR)return"COPY";if(n instanceof cR)return"MOVE";if(n instanceof fR)return"LOCK";if(n instanceof dR)return"UNLOCK";if(n instanceof hR)return"PATCH";throw new Error("Failed pattern match at Data.HTTP.Method (line 43, column 1 - line 59, column 23): "+[n.constructor.name])}},vR=Il(sa(mR))(pR),gR=(function(){var n=$T(eb);return function(e){return XT(n(e))}})(),_R=function(n){return n.value0};const yR=null;function xR(n){return n}var Qu=la(yR)(xR);const SR=function(e){return function(t){return e(t)()}};var ER=function(n){return w_(function(e){return function(){var i=n(function(a){return e(ct.create(a))()},function(a){return e(mt.create(a))()});return function(a){return w_(function(s){return function(){return i(a,function(u){return s(ct.create(u))()},function(u){return s(mt.create(u))()}),TC}})}}})};function C_(n){return Object.prototype.toString.call(n).slice(8,-1)}var wR=sa(L1),MR=sa(jp),sS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),lS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),AR=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),TR=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Vo=Fl,bR=Fl,up=function(n){if(n instanceof sS)return n.value0;if(n instanceof AR)return"Error at array index "+(MR(n.value0)+(": "+up(n.value1)));if(n instanceof TR)return"Error at property "+(wR(n.value0)+(": "+up(n.value1)));if(n instanceof lS)return"Type mismatch: expected "+(n.value0+(", found "+n.value1));throw new Error("Failed pattern match at Foreign (line 78, column 1 - line 78, column 45): "+[n.constructor.name])},uS=function(n){var e=Nl(ef(n));return function(t){return e(gR(t))}},CR=function(n){var e=Ct(Ao(n)),t=uS(n);return function(i){return function(a){return C_(a)===i?e(bR(a)):t(new lS(i,C_(a)))}}},ch=Ct(Ao(Mo)),RR=uS(Mo),Go=CR(Mo),R_=f1(pA(JT)(Mo)),PR=Oy(Ol(Mo)),ec=kt(Dl),LR=KA(Di)(op),DR=ci(ea),IR=Vp(Wy),UR=kt(Pl),NR=n1(Kx),FR=q1(AC),OR=Ct(kl),cS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),fS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),dS=(function(){function n(){}return n.value=new n,n})(),hS=(function(){function n(){}return n.value=new n,n})(),pS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),zR=function(n){return function(e){var t=function(p){return p===""?ch(PT):Il(function(v){return RR(sS.create(v))})(ch)(WC(p))},i=(function(){if(e.responseFormat instanceof rS)return Go("ArrayBuffer");if(e.responseFormat instanceof iS)return Go("Blob");if(e.responseFormat instanceof oS)return function(p){return R_(Go("Document")(p))(R_(Go("XMLDocument")(p))(Go("HTMLDocument")(p)))};if(e.responseFormat instanceof df)return PR(function(p){return e.responseFormat.value0(t(p))})(Go("String"));if(e.responseFormat instanceof ym)return Go("String");if(e.responseFormat instanceof xm)return zt(e.responseFormat.value0(ch(kn)));throw new Error("Failed pattern match at Affjax (line 274, column 18 - line 283, column 57): "+[e.responseFormat.constructor.name])})(),a=function(p){if(p instanceof PC)return new mt(p.value0(Vo));if(p instanceof LC)return new mt(Vo(p.value0));if(p instanceof DC)return new mt(Vo(p.value0));if(p instanceof IC)return new mt(Vo(p.value0));if(p instanceof UC)return new mt(Vo(p.value0));if(p instanceof eS)return ls("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(ec(Vo)(JC(p.value0)));if(p instanceof tS)return new mt(Vo(dx(p.value0)));throw new Error("Failed pattern match at Affjax (line 235, column 20 - line 250, column 69): "+[p.constructor.name])},s=function(p){return function(v){return p instanceof gt&&!LR(e1(DR)(T_)(p.value0))(v)?lT(v)(p.value0):v}},c=function(p){return s(ec(gm.create)(IR(NC)(p)))(s(ec(vm.create)(zC(e.responseFormat)))(e.headers))},u=function(p){return{method:vR(e.method),url:e.url,headers:UR(function(v){return{field:T_(v),value:FC(v)}})(c(e.content)),content:p,responseType:OC(e.responseFormat),username:Qu(e.username),password:Qu(e.password),withCredentials:e.withCredentials,timeout:Vy(0)(ec(function(v){return v})(e.timeout))}},d=function(p){return NR(FR(ER(CC(n,"AffjaxTimeoutErrorMessageIdent","AffjaxRequestFailedMessageIdent",VC.create,u(p)))))(function(v){if(v instanceof mt){var g=im(i(v.value0.body));if(g instanceof ct)return new ct(new fS(_R(g.value0),v.value0));if(g instanceof mt)return new mt({headers:v.value0.headers,status:v.value0.status,statusText:v.value0.statusText,body:g.value0});throw new Error("Failed pattern match at Affjax (line 209, column 9 - line 211, column 52): "+[g.constructor.name])}if(v instanceof ct)return new ct((function(){var S=Zy(v.value0),E=S==="AffjaxTimeoutErrorMessageIdent";if(E)return dS.value;var w=S==="AffjaxRequestFailedMessageIdent";return w?hS.value:new pS(v.value0)})());throw new Error("Failed pattern match at Affjax (line 207, column 144 - line 219, column 28): "+[v.constructor.name])})};if(e.content instanceof Tt)return d(Qu(Tt.value));if(e.content instanceof gt){var h=a(e.content.value0);if(h instanceof mt)return d(Qu(new gt(h.value0)));if(h instanceof ct)return OR(new ct(new cS(h.value0)));throw new Error("Failed pattern match at Affjax (line 199, column 7 - line 203, column 48): "+[h.constructor.name])}throw new Error("Failed pattern match at Affjax (line 195, column 3 - line 203, column 48): "+[e.content.constructor.name])}},mS=function(n){if(n instanceof cS)return"There was a problem with the request content: "+n.value0;if(n instanceof fS)return"There was a problem with the response body: "+up(n.value0);if(n instanceof dS)return"There was a problem making the request: timeout";if(n instanceof hS)return"There was a problem making the request: request failed";if(n instanceof pS)return"There was a problem making the request: "+Zy(n.value0);throw new Error("Failed pattern match at Affjax (line 113, column 14 - line 123, column 66): "+[n.constructor.name])},Wo=(function(){return{method:new ct(aS.value),url:"/",headers:[],content:Tt.value,username:Tt.value,password:Tt.value,withCredentials:!1,responseFormat:HC,timeout:Tt.value}})(),kR=function(n){return function(e){return function(t){return zR(n)({method:Wo.method,headers:Wo.headers,content:Wo.content,username:Wo.username,password:Wo.password,withCredentials:Wo.withCredentials,timeout:Wo.timeout,url:t,responseFormat:e})}}},BR=sa(jp),HR={show:function(n){return"(StatusCode "+(BR(n)+")")}},VR={eq:function(n){return function(e){return n===e}}};const GR={newXHR:function(){return new XMLHttpRequest},fixupUrl:function(n){return n||"/"}};var vS=kR(GR),WR=rx(ox),$R={liftAff:Lr(Dr),MonadEffect0:function(){return Bl}},gS=function(n){return n.liftAff},XR=function(n){var e=n.MonadEffect0(),t=tm(e);return{liftAff:(function(){var i=WR(e.Monad0()),a=gS(n);return function(s){return i(a(s))}})(),MonadEffect0:function(){return t}}};const jR=function(n){return function(e){return e.join(n)}};var YR=Ir(Ll),qR={genericShowArgs:function(n){return[]}},KR=function(n){return n.genericShowArgs},ZR=function(n){var e=KR(n);return function(t){var i=Yr(t);return{"genericShow'":function(a){var s=i(It.value),c=e(a);return c.length===0?s:"("+(jR(" ")(YR([s])(c))+")")}}}},cp=function(n){return n["genericShow'"]},ei=function(n){var e=cp(n);return function(t){var i=cp(t);return{"genericShow'":function(a){if(a instanceof ln)return e(a.value0);if(a instanceof He)return i(a.value0);throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): "+[a.constructor.name])}}}},JR=function(n){var e=Yp(n);return function(t){var i=cp(t);return function(a){return i(e(a))}}},Br=ZR(qR),_S=(function(){function n(){}return n.value=new n,n})(),yS=(function(){function n(){}return n.value=new n,n})(),xS=(function(){function n(){}return n.value=new n,n})(),SS=(function(){function n(){}return n.value=new n,n})(),ES=(function(){function n(){}return n.value=new n,n})(),fp=(function(){function n(){}return n.value=new n,n})(),QR=(function(){function n(){}return n.value=new n,n})(),eP=(function(){function n(){}return n.value=new n,n})(),tP=(function(){function n(){}return n.value=new n,n})(),nP=(function(){function n(){}return n.value=new n,n})(),rP=(function(){function n(){}return n.value=new n,n})(),iP={from:function(n){if(n instanceof _S)return new ln(nr.value);if(n instanceof yS)return new He(new ln(nr.value));if(n instanceof xS)return new He(new He(new ln(nr.value)));if(n instanceof SS)return new He(new He(new He(new ln(nr.value))));if(n instanceof ES)return new He(new He(new He(new He(new ln(nr.value)))));if(n instanceof fp)return new He(new He(new He(new He(new He(new ln(nr.value))))));if(n instanceof QR)return new He(new He(new He(new He(new He(new He(new ln(nr.value)))))));if(n instanceof eP)return new He(new He(new He(new He(new He(new He(new He(new ln(nr.value))))))));if(n instanceof tP)return new He(new He(new He(new He(new He(new He(new He(new He(new ln(nr.value)))))))));if(n instanceof nP)return new He(new He(new He(new He(new He(new He(new He(new He(new He(new ln(nr.value))))))))));if(n instanceof rP)return new He(new He(new He(new He(new He(new He(new He(new He(new He(new He(nr.value))))))))));throw new Error("Failed pattern match at GCodeViewer.Error (line 30, column 1 - line 30, column 34): "+[n.constructor.name])}},oP={show:JR(iP)(ei(Br({reflectSymbol:function(){return"Err1"}}))(ei(Br({reflectSymbol:function(){return"Err2"}}))(ei(Br({reflectSymbol:function(){return"Err3"}}))(ei(Br({reflectSymbol:function(){return"Err4"}}))(ei(Br({reflectSymbol:function(){return"Err5"}}))(ei(Br({reflectSymbol:function(){return"Err6"}}))(ei(Br({reflectSymbol:function(){return"XErr7"}}))(ei(Br({reflectSymbol:function(){return"XErr8"}}))(ei(Br({reflectSymbol:function(){return"XErr9"}}))(ei(Br({reflectSymbol:function(){return"XErr10"}}))(Br({reflectSymbol:function(){return"ErrX"}}))))))))))))},aP=sa(oP),pl=function(n){return"Error: "+(n.message+(" ("+(aP(n.code)+")")))},is=function(n){return function(e){return{message:e,code:n}}},sP=function(n){var e=n.MonadThrow0(),t=Nl(e),i=Ct(e.Monad0().Applicative0());return function(a){return function(s){if(s instanceof ct)return t(a(s.value0));if(s instanceof mt)return i(s.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 43, column 28 - line 45, column 20): "+[s.constructor.name])}}},lP=function(n){var e=Nl(n.MonadThrow0());return function(t){var i=t.MonadEffect0().Monad0(),a=mn(i.Bind1()),s=gS(t),c=Ct(i.Applicative0());return function(u){return function(d){return a(s(d))(function(h){if(h instanceof ct)return e(u(h.value0));if(h instanceof mt)return c(h.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 38, column 3 - line 40, column 22): "+[h.constructor.name])})}}}},uP=cf(fx(ua)),cP=zl(),fP=mA(),dP=Wx(),Nc=function(n){return n},hP=function(n){return n},Sm=function(){return function(n){var e=dP(n);return function(t){var i=Yr(t);return function(a){return uP(cP)(fP)(e(i(It.value))(a))}}}},wS=Ol(sr),dp=mn(wS),MS=nm(sr),AS=lP(MS)(XR($R)),TS=Kc(Zc)(wS),bS=Ao(sr),CS=Hp(bS),RS=ky(VR),PS=Nl(ef(sr)),LS=sa(HR),DS=Ct(bS),pP=sP(MS),mP=function(n){return dp(AS((function(){var e=is(SS.value);return function(t){return e(mS(t))}})())(vS(kC)(n)))(function(e){return TS(CS(RS(e.status)(200))(PS(is(ES.value)(LS(e.status)))))(function(){return DS(e.body)})})},vP=Sm()(po(po(po(pm)()()({reflectSymbol:function(){return"pictures"}}))()()({reflectSymbol:function(){return"name"}}))()()({reflectSymbol:function(){return"gcode"}}))({reflectSymbol:function(){return"IndexFileItem"}})({name:ir,gcode:ir,pictures:uf(ir)}),Em=uf(vP),gP=function(n){return dp(AS((function(){var e=is(_S.value);return function(t){return e(mS(t))}})())(vS(BC)(n.url)))(function(e){return TS(CS(RS(e.status)(200))(PS(is(xS.value)(LS(e.status)))))(function(){return dp(pP((function(){var t=is(yS.value);return function(i){return t(Vb(i))}})())(Rn(Em)(e.body)))(function(t){return DS(t)})})})},_P=function(n){return function(e){var t=cf(e.Profunctor0()),i=Yb(e);return function(a){return t(n)(function(s){return s.value1(s.value0)})(i(a))}}},yP=function(n){return function(e){return function(t){return _P(function(i){return new Vt(n(i),function(a){return e(i)(a)})})(t)}}},IS=function(n){var e=To(n)(),t=Wb(n)()();return function(){return function(){return function(i){return function(a){return yP(e(i))(ai(t(i)))(a)}}}}},hf=function(n){var e=IS(n)()();return function(){return function(){return function(t){return e(It.value)(t)}}}},Cr=ux(cx),zn=mn(Ul),uo=Ct(ca),xP=kt(ua),SP=cf(fx(ua)),P_=Sx(Di),EP=Lr(Dr),Fc=Hp(ca),ml=Kc(Zc)(Ul),L_=ky(zc(DT)),Hl=(function(){function n(){}return n.value=new n,n})(),un=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),wm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),pf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),wP=function(n){return function(){return function(){return function(e){return function(t){return t}}}}},hp=function(n){return n.gCasesEncode},pp=function(n){return n.gCasesDecode},fh=function(n){var e=hp(n),t=pp(n);return function(i){var a=hp(i),s=pp(i);return function(){return function(){return function(){return function(){return function(c){var u=wP()()(),d=To(c)(),h=Vx(c)()(),p=$b(c)()();return{gCasesEncode:function(v){return function(g){var S=u(It.value)(g),E=d(It.value)(g),w=h(It.value)(E)({});return function(x){if(x instanceof ln)return e(v)(w)(x.value0);if(x instanceof He)return a(v)(S)(x.value0);throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 244, column 7 - line 246, column 47): "+[x.constructor.name])}}},gCasesDecode:function(v){return function(g){return function(S){var E=p(It.value)(g),w=d(It.value)(g),x=h(It.value)(w)({}),_=function(R){return s(v)(E)(S)},C=function(R){return t(v)(x)(S)},M=C();if(M instanceof ct&&M.value0 instanceof Hl)return xP(He.create)(_());if(M instanceof ct&&M.value0 instanceof un)return new ct(new un(M.value0.value0));if(M instanceof mt)return new mt(new ln(M.value0));throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 257, column 5 - line 260, column 34): "+[M.constructor.name])}}}}}}}}}}},MP=function(n){return function(e){return new hm(n,(function(){if(e instanceof Hl)return new si("No case matched");if(e instanceof un)return e.value0;throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 147, column 5 - line 149, column 23): "+[e.constructor.name])})())}},AP=function(n){var e=hp(n),t=pp(n);return function(i){var a=Yp(i),s=D1(i);return function(c){return function(u){return function(d){var h=e(c)(d),p=(function(){var v=Cr(MP(u)),g=t(c)(d);return function(S){return v(g(S))}})();return SP(a)(s)(nf(p)(h))}}}}},US=function(n){return function(e){return function(t){if(n instanceof wm){var i=(function(){return t.length===0?tn(ho)([]):t.length===1&&n.value0.unwrapSingleArguments?t[0]:tn(ho)(t)})(),a=n.value0.mapTag(e);return tn(_o)(P_([new Vt(a,i)]))}if(n instanceof pf){var s=(function(){return t.length===0&&n.value0.omitEmptyArguments?Tt.value:t.length===1&&n.value0.unwrapSingleArguments?new gt(new Vt(n.value0.valuesKey,t[0])):new gt(new Vt(n.value0.valuesKey,tn(ho)(t)))})(),a=n.value0.mapTag(e),c=new gt(new Vt(n.value0.tagKey,tn(ir)(a)));return tn(_o)(P_(_T([c,s])))}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 403, column 3 - line 428, column 33): "+[n.constructor.name])}}},TP=(function(){return new pf({tagKey:"tag",valuesKey:"values",unwrapSingleArguments:!1,omitEmptyArguments:!1,mapTag:EP})})(),bP=function(n){return function(e){return AP(e)(n)(TP)}},NS=function(n){return function(e){return function(t){return zn(Cr(un.create)(ls(new si("Expecting a tag property `"+(n+"`")))(us(n)(e))))(function(i){return zn(Cr(un.create)(Rn(ir)(i)))(function(a){return Fc(a!==t)(new ct(Hl.value))})})}}},CP=function(n){return function(e){return function(t){if(n instanceof wm){var i=n.value0.mapTag(t);return zn(Cr(un.create)(Rn(_o)(e)))(function(a){return zn(ls(Hl.value)(us(i)(a)))(function(s){return zn(Cr(un.create)(Rn(ho)(s)))(function(c){return ml(Fc(L_(c)([]))(new ct(new un(new si("Expecting an empty array")))))(function(){return uo(kn)})})})})}if(n instanceof pf){var i=n.value0.mapTag(t);return zn(Cr(un.create)(Rn(_o)(e)))(function(s){return ml(NS(n.value0.tagKey)(s)(i))(function(){return Fc(!n.value0.omitEmptyArguments)(zn(ls(new un(new si("Expecting a value property `"+(n.value0.valuesKey+"`"))))(us(n.value0.valuesKey)(s)))(function(c){return zn(Cr(un.create)(Rn(ho)(c)))(function(u){return ml(Fc(L_(u)([]))(new ct(new un(new si("Expecting an empty array")))))(function(){return uo(kn)})})}))})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 320, column 3 - line 346, column 18): "+[n.constructor.name])}}},RP=function(){return function(n){var e=Yr(n);return{gCasesEncode:function(t){return function(i){return function(a){var s=e(It.value);return US(t)(s)([])}}},gCasesDecode:function(t){return function(i){return function(a){var s=e(It.value);return ml(CP(t)(a)(s))(function(){return uo(nr.value)})}}}}}},PP=function(n){return function(e){return function(t){if(n instanceof wm){var i=n.value0.mapTag(t);return zn(Cr(un.create)(Rn(_o)(e)))(function(a){return zn(ls(Hl.value)(us(i)(a)))(function(s){return n.value0.unwrapSingleArguments?uo(s):zn(Cr(un.create)(Rn(ho)(s)))(function(c){return c.length===1?uo(c[0]):new ct(new un(new si("Expecting exactly one element")))})})})}if(n instanceof pf){var i=n.value0.mapTag(t);return zn(Cr(un.create)(Rn(_o)(e)))(function(s){return ml(NS(n.value0.tagKey)(s)(i))(function(){return zn(ls(new un(new si("Expecting a value property `"+(n.value0.valuesKey+"`"))))(us(n.value0.valuesKey)(s)))(function(c){return n.value0.unwrapSingleArguments?uo(c):zn(Cr(un.create)(Rn(ho)(c)))(function(u){return u.length===1?uo(u[0]):new ct(new un(new si("Expecting exactly one element")))})})})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 349, column 49 - line 378, column 71): "+[n.constructor.name])}}},LP=function(){return function(n){var e=Yr(n),t=To(n)();return{gCasesEncode:function(i){return function(a){return function(s){var c=e(It.value),u=t(It.value)(a);return US(i)(c)([tn(u)(s)])}}},gCasesDecode:function(i){return function(a){return function(s){var c=e(It.value);return zn(PP(i)(s)(c))(function(u){var d=t(It.value)(a);return zn(Cr(un.create)(Rn(d)(u)))(function(h){return uo(h)})})}}}}}},DP=Pl,IP=Di,UP=function(){return function(n){var e=To(n)();return{mkMatcherRep:function(t){return function(i){var a=e(It.value)(t),s=a(i);return s}}}}},mp=function(n){return n.mkMatcherRep},NP=function(n){return n.mkMatcher1},FP=function(){return function(n){var e=To(n)();return{mkMatcherRep:function(t){return function(i){var a=e(It.value)(t),s=a(kn);return s}}}}},OP=function(n){var e=Yp(n);return function(t){var i=mp(t);return{mkMatcher1:function(a,s){return i(s)(e(a))}}}},zP=function(){return Fl},kP=zP(),BP=function(){return Fl},HP=BP(),dh=function(n){var e=mp(n);return function(t){var i=mp(t);return function(){return{mkMatcherRep:function(a){return function(s){var c=(function(){if(s instanceof ln)return e(HP(a))(s.value0);if(s instanceof He)return i(kP(a))(s.value0);throw new Error("Failed pattern match at Stadium.TL (line 159, column 11 - line 161, column 76): "+[s.constructor.name])})();return c}}}}}},D_=FP(),vp={reflectSymbol:function(){return"NotAsked"}},gp={reflectSymbol:function(){return"Loading"}},I_=UP(),_p={reflectSymbol:function(){return"Loaded"}},FS={reflectSymbol:function(){return"Error"}},U_=RP(),N_=LP(),cs=(function(){function n(){}return n.value=new n,n})(),yo=(function(){function n(){}return n.value=new n,n})(),fs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ds=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),OS={to:function(n){if(n instanceof ln)return cs.value;if(n instanceof He&&n.value0 instanceof ln)return yo.value;if(n instanceof He&&n.value0 instanceof He&&n.value0.value0 instanceof ln)return new fs(n.value0.value0.value0);if(n instanceof He&&n.value0 instanceof He&&n.value0.value0 instanceof He)return new ds(n.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])},from:function(n){if(n instanceof cs)return new ln(nr.value);if(n instanceof yo)return new He(new ln(nr.value));if(n instanceof fs)return new He(new He(new ln(n.value0)));if(n instanceof ds)return new He(new He(new He(n.value0)));throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])}},VP=bP(OS)(fh(U_(vp))(fh(U_(gp))(fh(N_(_p))(N_(FS))()()()()(_p))()()()()(gp))()()()()(vp)),zS=function(n){var e=ci(n);return{eq:function(t){return function(i){return t instanceof cs&&i instanceof cs||t instanceof yo&&i instanceof yo?!0:t instanceof fs&&i instanceof fs?e(t.value0)(i.value0):t instanceof ds&&i instanceof ds?t.value0===i.value0:!1}}}},kS=NP(OP(OS)(dh(D_(vp))(dh(D_(gp))(dh(I_(_p))(I_(FS))())())())),mf=function(n){return VP("RemoteData")({NotAsked:kn,Loading:kn,Loaded:n,Error:ir})};const GP=n=>()=>{console.log(...n)};var WP=ff(cA),$P=Ct(Kp),hh=Ir(Ll),Mm=function(n){var e=IS(n)()();return function(){return function(){return function(t){return e(It.value)(t)}}}},XP=Mm({reflectSymbol:function(){return"history"}})()()(fa),jP=Mm({reflectSymbol:function(){return"historyIndex"}})()()(fa),YP=Mm({reflectSymbol:function(){return"pubState"}})()()(fa),BS=function(n){var e=function(i){var a=function(s){return function(c){return i.updateState(function(u){var d=n.updatePubState(c)(u.pubState);if(d instanceof ct)return function(){return WP(d.value0)(),u};if(d instanceof mt){var h=n.encodeMsg(c);return function(){return GP(hh([tn(ir)("%c"+h.tag),tn(ir)("color: white; background: #cc8a21; padding: 2px 4px;")])(hh(la([])(function(v){return[tn(ir)("@"+v)]})(s))([h.args,tn(ir)(`
newState`),n.encodeJsonPubState(d.value0)])))(),Xx(XP)(function(v){return hh(v)([{msg:c,pubState:d.value0}])})(rs(jP)(u.historyIndex+1)(rs(YP)(d.value0)(u)))}}throw new Error("Failed pattern match at Stadium.Core (line 103, column 31 - line 126, column 16): "+[d.constructor.name])})}};return{emitMsg:a(Tt.value),emitMsgCtx:function(s){return a(new gt(s))},readPubState:function(){var c=i.readState();return c.pubState},readPrivState:function(){var c=i.readState();return c.privState},updatePrivState:function(s){return i.updateState(function(c){return $P({pubState:c.pubState,history:c.history,historyIndex:c.historyIndex,privState:s(c.privState)})})}}},t={history:[],historyIndex:0,pubState:n.initPubState,privState:n.initPrivState};return{dispatchers:function(i){return n.dispatchers(e(i))},initState:t,timeTravel:function(i){return kn}}};const HS=n=>()=>{const[e,t]=Ve.useState({state:n.initState}),i={updateState:c=>()=>t(u=>(u.state=c(u.state)(),{...u})),readState:()=>e.state},a=n.dispatchers(i);return{state:e.state.pubState,dispatch:a}},qP=(n,e,t)=>{const i=Ve.useRef(0),a=Ve.useRef(t);return a.current=t,i.current=e(a.current,t)?i.current:i.current+1,Ve.useEffect(()=>n(),[i.current])};var ph=Ct(Ao(Mo)),mh=$x(),VS={reflectSymbol:function(){return"startLayer"}},KP=hf(VS)()()(fa),GS={reflectSymbol:function(){return"endLayer"}},ZP=hf(GS)()()(fa),WS={reflectSymbol:function(){return"gcodeLines"}},JP=hf(WS)()()(fa),QP={reflectSymbol:function(){return"PubState"}},eL=mn(mm),tL=ff(Bl),nL=Ct(kl),$S=tm(Bl),F_=Qc($S),rL=Zp(nm(sr)),XS=Ol(sr),O_=mn(XS),vh=Kc(Zc)(XS),jS=Ao(sr),iL=Hp(jS),oL=ci(zS(zc(ea))),aL=Nl(ef(sr)),sL=ff($S),lL=Ct(jS),uL=Lr(Dr),Am=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Tm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),vl=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),cL=function(n){return function(e){if(n instanceof Am)return ph(rs((function(){var t=mh(Nc)(hl);return function(i){return t(KP(i))}})())(n.value0)(e));if(n instanceof Tm)return ph(rs((function(){var t=mh(Nc)(hl);return function(i){return t(ZP(i))}})())(n.value0)(e));if(n instanceof vl)return ph(rs((function(){var t=mh(Nc)(hl);return function(i){return t(JP(i))}})())(n.value0)(e));throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 60, column 31 - line 71, column 11): "+[n.constructor.name])}},fL=function(n){return{gcodeLines:cs.value,startLayer:n.startLayer,endLayer:n.endLayer}},dL=function(n){if(n instanceof Am)return{tag:"MsgSetStartLayer",args:tn(Hc)(n.value0)};if(n instanceof Tm)return{tag:"MsgSetEndLayer",args:tn(Hc)(n.value0)};if(n instanceof vl)return{tag:"MsgSetGcodeLines",args:tn(mf(uf(ir)))(n.value0)};throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 74, column 13 - line 86, column 6): "+[n.constructor.name])},hL=function(n){var e=function(a){return function(s){return Zx(eL(Qp(a(s)))(function(c){if(c instanceof ct)return tL(pl(c.value0));if(c instanceof mt)return nL(kn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 133, column 5 - line 135, column 27): "+[c.constructor.name])}))()}},t=function(a){var s=(function(){var c=n.emitMsgCtx("loadGcodeLines");return function(u){return F_(c(u))}})();return rL(O_(F_(n.readPubState))(function(c){return vh(iL(oL(c.gcodeLines)(yo.value))(aL(is(fp.value)("Gcode lines are already loading"))))(function(){return vh(s(new vl(yo.value)))(function(){return O_(mP(a.url))(function(u){var d=Lx(`
`)(u);return s(new vl(new fs(d)))})})})}))(function(c){return vh(sL(pl(c)))(function(){return c.code instanceof fp?lL(kn):s(new vl(new ds(pl(c))))})})},i=function(a){return function(s){return n.emitMsg(a(s))()}};return{emitSetStartLayer:i(Am.create),emitSetEndLayer:i(Tm.create),runLoadGcodeLines:e(t)}},pL=Sm()(po(po(po(pm)()()(VS))()()(WS))()()(GS))(QP)({gcodeLines:mf(uf(ir)),startLayer:Hc,endLayer:Hc}),mL=function(n){return BS({updatePubState:function(e){return function(t){return im(cL(e)(t))}},dispatchers:hL,initPubState:fL(n),initPrivState:{},printError:uL,encodeJsonPubState:tn(pL),encodeMsg:dL})},vL=function(n){return HS(mL(n))()};const gL=()=>window.location.search;var _L=zl(),yL=function(n){return _L(lC(n))},YS=function(n){return n.bitraverse},xL=function(n){var e=YS(n);return function(t){var i=e(t),a=Ct(t);return function(s){return i(s)(a)}}},qS={bitraverse:function(n){var e=n.Apply0(),t=_s(e),i=kt(e.Functor0());return function(a){return function(s){return function(c){return t(i(Vt.create)(a(c.value0)))(s(c.value1))}}}}},SL=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},z_=YS(qS)(ca),k_=lm(af)(ca),EL=qA(Di)(ea),wL=kt(DP),ML=kt(r1),AL=am(IP),TL=s1(Ul),bL=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),CL=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),RL=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),KS=(function(){function n(){}return n.value=new n,n})(),Rr=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),xo=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),yp=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),hs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),xp=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),PL=(function(){var n=function(v){return{segments:v.value0.value0,params:v.value0.value1,hash:v.value1}},e=function(v){return function(g){return g===""?[]:Lx(v)(g)}},t=function(v){return function(g){return function(S){var E=yb(g)(S);if(E instanceof gt)return new Vt(Px(E.value0)(S),lp(E.value0+cm(g)|0)(S));if(E instanceof Tt)return v(S);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 191, column 5 - line 193, column 23): "+[E.constructor.name])}}},i=function(v){var g=YC(v);if(g instanceof Tt)return new ct(new RL(v));if(g instanceof gt)return new mt(g.value0);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 195, column 29 - line 197, column 22): "+[g.constructor.name])},a=(function(){var v=z_(i)(i),g=t(ai(Vt.create)(""))("=");return function(S){return v(g(S))}})(),s=(function(){var v=k_(a),g=e("&");return function(S){return v(g(S))}})(),c=(function(){var v=e("/");return function(g){return(function(S){return S.length===2&&S[0]===""&&S[1]===""?new mt([""]):k_(i)(S)})(v(g))}})(),u=(function(){var v=z_(c)(s),g=t(ai(Vt.create)(""))("?");return function(S){return v(g(S))}})(),d=kt(ua)(n),h=xL(qS)(ca)(u),p=t(ai(Vt.create)(""))("#");return function(v){return d(h(p(v)))}})(),LL=function(n){return new hs(function(e){var t=EL(n)(e.params);return t instanceof gt?new xo(e,t.value0):new Rr(new CL(n))})},DL={map:function(n){return function(e){if(e instanceof Rr)return new Rr(e.value0);if(e instanceof xo)return new xo(e.value0,n(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},ZS=kt(DL),Sp={map:function(n){return function(e){if(e instanceof yp)return new yp(wL(kt(Sp)(n))(e.value0));if(e instanceof hs)return new hs(ML(ZS(n))(e.value0));if(e instanceof xp)return new xp(e.value0,kt(Sp)(n)(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},IL=function(n){return function(e){var t=dT(e.segments);return t instanceof gt&&n===t.value0?new xo({params:e.params,hash:e.hash,segments:pT(1)(e.segments)},kn):t instanceof gt?new Rr(new bL(n,t.value0)):new Rr(KS.value)}},JS=SL("runRouteParser","Routing.Duplex.Parser",function(){var n=function(t){return function(i){return function(a){return i instanceof Rr?JS(161)(t)(a):i}}},e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof yp)return s=!0,AL(n(d))(new Rr(KS.value))(h.value0);if(h instanceof hs)return s=!0,h.value0(d);if(h instanceof xp){var p=IL(h.value0)(d);if(p instanceof Rr)return s=!0,new Rr(p.value0);if(p instanceof xo){a=p.value0,i=h.value1;return}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 157, column 7 - line 159, column 40): "+[p.constructor.name])}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 153, column 14 - line 159, column 40): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}),Ep=JS(150),UL=function(n){return TL(PL)((function(){var e=ai(Ep)(n);return function(t){return(function(i){if(i instanceof Rr)return new ct(i.value0);if(i instanceof xo)return new mt(i.value1);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 200, column 49 - line 202, column 29): "+[i.constructor.name])})(e(t))}})())},NL={apply:function(n){return function(e){return new hs(function(t){var i=Ep(t)(n);if(i instanceof Rr)return new Rr(i.value0);if(i instanceof xo)return ZS(i.value1)(Ep(i.value0)(e));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 81, column 5 - line 83, column 56): "+[i.constructor.name])})}}},FL={pure:(function(){var n=ai(xo.create);return function(e){return hs.create(n(e))}})()},QS={append:function(n){return function(e){return function(t){return e(n(t))}}}},OL=function(n){return function(e){return function(t){return{segments:t.segments,hash:t.hash,params:mT(new Vt(n,e))(t.params)}}}},zL={mempty:Lr(Dr),Semigroup0:function(){return QS}},kL=Ir(QS),BL=Ct(FL),eE=Lr(Dr),HL=_s(NL),VL=kt(Sp),bm=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),GL=eE,WL=(function(){return new bm(ys($1(zL)),BL({}))})(),$L=function(n){var e=To(n)(),t=Vx(n)()();return function(){return function(){return function(){return function(i){return function(a){return function(s){return new bm(function(c){return kL(s.value0(c))(a.value0(e(i)(c)))},HL(VL(ai(t(i)))(s.value1))(a.value1))}}}}}}},XL=function(n){return UL(n.value1)},jL=function(n){return n.params},YL=function(n){return new bm(OL(n),LL(n))},qL={buildParams:function(n){return function(e){return eE}}},tE=function(n){return n.buildParams},KL=function(n){var e=$L(n)()()(),t=To(n)(),i=Yr(n);return function(){return function(){return function(){return function(){return function(a){var s=tE(a);return{buildParams:function(c){return function(u){return function(d){return s(It.value)(u)(e(It.value)(t(It.value)(u)(YL(i(It.value))))(d))}}}}}}}}}},ZL=function(){return function(n){var e=tE(n);return{params:function(t){return e(It.value)(t)(WL)}}}},JL=Ct(Ao(Mo)),QL=$x(),nE={reflectSymbol:function(){return"index"}},e2=hf(nE)()()(fa),t2=mn(mm),n2=ff(Bl),r2=Ct(kl),rE=Kc(Zc),iE=Yx(Ll)(Qy),i2=rE(iE),o2=uA(dC(jy)(Mo)),gh=Ct(qx(jy)(ex)),a2=mn(iE),Cm={reflectSymbol:function(){return"url"}},s2=ZL()(KL(Cm)()()()()(qL)),oE=po(pm)()(),aE={reflectSymbol:function(){return"content"}},sE=Wx()(po(oE(Cm))()()(aE)),lE=Ol(sr),B_=mn(lE),tc=Qc(tm(Bl)),H_=w1(),V_=Uc(E1)(),l2={reflectSymbol:function(){return"pictures"}},u2={reflectSymbol:function(){return"name"}},c2={reflectSymbol:function(){return"gcode"}},f2=ci(zS(H_(Uc(V_(Cm)(ea))()(aE)(zc(hP(H_(Uc(Uc(V_(l2)(zc(ea)))()(u2)(ea))()(c2)(ea)))))))),d2=Ct(Ao(sr)),h2=Zp(nm(sr)),p2=rE(lE),m2={reflectSymbol:function(){return"PubState"}},_h=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),v2=function(n){return function(e){return JL(rs((function(){var t=QL(Nc)(hl);return function(i){return t(e2(i))}})())(n.value0)(e))}},g2=function(n){return function(e){return Zx(t2(Qp(n(e)))(function(t){if(t instanceof ct)return n2(pl(t.value0));if(t instanceof mt)return r2(kn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 117, column 3 - line 119, column 25): "+[t.constructor.name])}))()}},_2=function(n){var e=Pb("/")(n);if(e instanceof gt)return Ib(e.value0)(n);if(e instanceof Tt)return n;throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 61, column 3 - line 63, column 19): "+[e.constructor.name])},y2=function(n){var e=function(t){var i=jL(t);return function(a){return function(s){return function(c){var u=XL(i(s))(c);if(u instanceof ct)return i2(o2([u.value0]))(function(){return gh(a)});if(u instanceof mt)return gh(u.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 178, column 21 - line 182, column 22): "+[u.constructor.name])}}}};return yL(a2(e(s2)({url:"index.json"})({url:GL})(n))(function(t){return gh({url:t.url})}))},x2=function(n){return _2(n.absUrl)+("/"+n.relUrl)},S2=(function(){return{index:cs.value}})(),E2=function(){var e=gL(),t=y2(e);return t.value0},w2=function(n){return{tag:"MsgSetIndex",args:tn(mf(sE("")({url:ir,content:Em})))(n.value0)}},M2=function(n){var e=function(t){return B_(tc(n.readPubState))(function(i){var a=f2(i.index)(yo.value);return a?d2(kn):h2(p2(tc(n.emitMsg(new _h(yo.value))))(function(){return B_(gP({url:t.url}))(function(s){return tc(n.emitMsg(new _h(new fs({url:t.url,content:s}))))})}))(function(s){return tc(n.emitMsg(new _h(new ds(pl(s)))))})})};return{msg:SR(n.emitMsg),runFetchIndex:g2(e)}},A2=Sm()(oE(nE))(m2)({index:mf(sE("")({url:ir,content:Em}))}),T2=BS({updatePubState:function(n){return function(e){return im(v2(n)(e))}},dispatchers:M2,initPubState:S2,initPrivState:{},printError:Lr(Dr),encodeJsonPubState:tn(A2),encodeMsg:w2}),b2=HS(T2);const C2="0.0.5",R2="0.0.15",P2="_root_6ggp7_1",L2="_version_6ggp7_5",nc=({children:n,viewErrors:e,viewInfo:t})=>tt.jsxs("div",{className:P2,children:[tt.jsx("div",{children:n}),tt.jsx("div",{children:e}),tt.jsx("div",{children:t}),tt.jsxs("div",{className:L2,children:[C2," - ",R2]})]}),D2="_root_xmkgg_1",I2={root:D2},U2=({items:n})=>tt.jsx("div",{className:I2.root,children:n.map(e=>e)}),N2="_root_1pmvk_1",F2="_slider_1pmvk_13",O2="_label_1pmvk_22",z2=({viewPictures:n,viewGcode:e,viewSlider:t,item:i})=>tt.jsxs("div",{className:N2,children:[tt.jsx("div",{className:O2,children:i.name}),n,e,tt.jsx("div",{className:F2,children:t})]}),k2="_root_1b3ad_1",B2=({pictures:n})=>tt.jsx("div",{className:k2});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vf="159",Fa={ROTATE:0,DOLLY:1,PAN:2},Oa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},H2=0,G_=1,V2=2,uE=1,G2=2,bi=3,So=0,or=1,Ci=2,mo=0,os=1,W_=2,$_=3,X_=4,W2=5,Zo=100,$2=101,X2=102,j_=103,Y_=104,j2=200,Y2=201,q2=202,K2=203,wp=204,Mp=205,Z2=206,J2=207,Q2=208,eD=209,tD=210,nD=211,rD=212,iD=213,oD=214,aD=0,sD=1,lD=2,Vc=3,uD=4,cD=5,fD=6,dD=7,Rm=0,hD=1,pD=2,vo=0,mD=1,vD=2,gD=3,_D=4,yD=5,cE=300,ps=301,ms=302,Ap=303,Tp=304,gf=306,bp=1e3,Xr=1001,Cp=1002,Tn=1003,q_=1004,yh=1005,Mr=1006,xD=1007,Al=1008,go=1009,SD=1010,ED=1011,Pm=1012,fE=1013,co=1014,Ri=1015,Tl=1016,dE=1017,hE=1018,na=1020,wD=1021,Ar=1023,MD=1024,AD=1025,ra=1026,vs=1027,TD=1028,pE=1029,bD=1030,mE=1031,vE=1033,xh=33776,Sh=33777,Eh=33778,wh=33779,K_=35840,Z_=35841,J_=35842,Q_=35843,gE=36196,e0=37492,t0=37496,n0=37808,r0=37809,i0=37810,o0=37811,a0=37812,s0=37813,l0=37814,u0=37815,c0=37816,f0=37817,d0=37818,h0=37819,p0=37820,m0=37821,Mh=36492,v0=36494,g0=36495,CD=36283,_0=36284,y0=36285,x0=36286,_E=3e3,ia=3001,RD=3200,PD=3201,yE=0,LD=1,Tr="",bn="srgb",Li="srgb-linear",Lm="display-p3",_f="display-p3-linear",Gc="linear",Xt="srgb",Wc="rec709",$c="p3",za=7680,S0=519,DD=512,ID=513,UD=514,xE=515,ND=516,FD=517,OD=518,zD=519,Rp=35044,E0="300 es",Pp=1035,oi=2e3,bl=2001;class da{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,c=a.length;s<c;s++)a[s].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let w0=1234567;const gl=Math.PI/180,Cl=180/Math.PI;function Pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function Cn(n,e,t){return Math.max(e,Math.min(t,n))}function Dm(n,e){return(n%e+e)%e}function kD(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function BD(n,e,t){return n!==e?(t-n)/(e-n):0}function _l(n,e,t){return(1-t)*n+t*e}function HD(n,e,t,i){return _l(n,e,1-Math.exp(-t*i))}function VD(n,e=1){return e-Math.abs(Dm(n,e*2)-e)}function GD(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function WD(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $D(n,e){return n+Math.floor(Math.random()*(e-n+1))}function XD(n,e){return n+Math.random()*(e-n)}function jD(n){return n*(.5-Math.random())}function YD(n){n!==void 0&&(w0=n);let e=w0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qD(n){return n*gl}function KD(n){return n*Cl}function Lp(n){return(n&n-1)===0&&n!==0}function ZD(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function JD(n,e,t,i,a){const s=Math.cos,c=Math.sin,u=s(t/2),d=c(t/2),h=s((e+i)/2),p=c((e+i)/2),v=s((e-i)/2),g=c((e-i)/2),S=s((i-e)/2),E=c((i-e)/2);switch(a){case"XYX":n.set(u*p,d*v,d*g,u*h);break;case"YZY":n.set(d*g,u*p,d*v,u*h);break;case"ZXZ":n.set(d*v,d*g,u*p,u*h);break;case"XZX":n.set(u*p,d*E,d*S,u*h);break;case"YXY":n.set(d*S,u*p,d*E,u*h);break;case"ZYZ":n.set(d*E,d*S,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const SE={DEG2RAD:gl,RAD2DEG:Cl,generateUUID:Pi,clamp:Cn,euclideanModulo:Dm,mapLinear:kD,inverseLerp:BD,lerp:_l,damp:HD,pingpong:VD,smoothstep:GD,smootherstep:WD,randInt:$D,randFloat:XD,randFloatSpread:jD,seededRandom:YD,degToRad:qD,radToDeg:KD,isPowerOfTwo:Lp,ceilPowerOfTwo:ZD,floorPowerOfTwo:Xc,setQuaternionFromProperEuler:JD,normalize:Nt,denormalize:ii};class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*i-c*a+e.x,this.y=s*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,i,a,s,c,u,d,h){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h)}set(e,t,i,a,s,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=s,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],v=i[7],g=i[2],S=i[5],E=i[8],w=a[0],x=a[3],_=a[6],C=a[1],M=a[4],R=a[7],I=a[2],O=a[5],F=a[8];return s[0]=c*w+u*C+d*I,s[3]=c*x+u*M+d*O,s[6]=c*_+u*R+d*F,s[1]=h*w+p*C+v*I,s[4]=h*x+p*M+v*O,s[7]=h*_+p*R+v*F,s[2]=g*w+S*C+E*I,s[5]=g*x+S*M+E*O,s[8]=g*_+S*R+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*s*p+i*u*d+a*s*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,g=u*d-p*s,S=h*s-c*d,E=t*v+i*g+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*h-p*i)*w,e[2]=(u*i-a*c)*w,e[3]=g*w,e[4]=(p*t-a*d)*w,e[5]=(a*s-u*t)*w,e[6]=S*w,e[7]=(i*d-h*t)*w,e[8]=(c*t-i*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,c,u){const d=Math.cos(s),h=Math.sin(s);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new Et;function EE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function QD(){const n=jc("canvas");return n.style.display="block",n}const M0={};function yl(n){n in M0||(M0[n]=!0,console.warn(n))}const A0=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),T0=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rc={[Li]:{transfer:Gc,primaries:Wc,toReference:n=>n,fromReference:n=>n},[bn]:{transfer:Xt,primaries:Wc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_f]:{transfer:Gc,primaries:$c,toReference:n=>n.applyMatrix3(T0),fromReference:n=>n.applyMatrix3(A0)},[Lm]:{transfer:Xt,primaries:$c,toReference:n=>n.convertSRGBToLinear().applyMatrix3(T0),fromReference:n=>n.applyMatrix3(A0).convertLinearToSRGB()}},e3=new Set([Li,_f]),Ft={enabled:!0,_workingColorSpace:Li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!e3.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=rc[e].toReference,a=rc[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return rc[n].primaries},getTransfer:function(n){return n===Tr?Gc:rc[n].transfer}};function as(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Th(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ka;class wE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ka===void 0&&(ka=jc("canvas")),ka.width=e.width,ka.height=e.height;const i=ka.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ka}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let c=0;c<s.length;c++)s[c]=as(s[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(as(t[i]/255)*255):t[i]=as(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t3=0;class ME{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t3++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?s.push(bh(a[c].image)):s.push(bh(a[c]))}else s=bh(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n3=0;class ar extends da{constructor(e=ar.DEFAULT_IMAGE,t=ar.DEFAULT_MAPPING,i=Xr,a=Xr,s=Mr,c=Al,u=Ar,d=go,h=ar.DEFAULT_ANISOTROPY,p=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n3++}),this.uuid=Pi(),this.name="",this.source=new ME(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(yl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ia?bn:Tr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bp:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case Cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bp:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case Cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?ia:_E}set encoding(e){yl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ia?bn:Tr}}ar.DEFAULT_IMAGE=null;ar.DEFAULT_MAPPING=cE;ar.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,a=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*s,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*s,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*s,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],S=d[5],E=d[9],w=d[2],x=d[6],_=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,R=(S+1)/2,I=(_+1)/2,O=(p+g)/4,F=(v+w)/4,de=(E+x)/4;return M>R&&M>I?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=O/i,s=F/i):R>I?R<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(R),i=O/a,s=de/a):I<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(I),i=F/s,a=de/s),this.set(i,a,s,t),this}let C=Math.sqrt((x-E)*(x-E)+(v-w)*(v-w)+(g-p)*(g-p));return Math.abs(C)<.001&&(C=1),this.x=(x-E)/C,this.y=(v-w)/C,this.z=(g-p)/C,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r3 extends da{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(yl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ia?bn:Tr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ar(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ME(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends r3{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class AE extends ar{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i3 extends ar{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,c,u){let d=i[a+0],h=i[a+1],p=i[a+2],v=i[a+3];const g=s[c+0],S=s[c+1],E=s[c+2],w=s[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v;return}if(u===1){e[t+0]=g,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==g||h!==S||p!==E){let x=1-u;const _=d*g+h*S+p*E+v*w,C=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const I=Math.sqrt(M),O=Math.atan2(I,_*C);x=Math.sin(x*O)/I,u=Math.sin(u*O)/I}const R=u*C;if(d=d*x+g*R,h=h*x+S*R,p=p*x+E*R,v=v*x+w*R,x===1-u){const I=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=I,h*=I,p*=I,v*=I}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,s,c){const u=i[a],d=i[a+1],h=i[a+2],p=i[a+3],v=s[c],g=s[c+1],S=s[c+2],E=s[c+3];return e[t]=u*E+p*v+d*S-h*g,e[t+1]=d*E+p*g+h*v-u*S,e[t+2]=h*E+p*S+u*g-d*v,e[t+3]=p*E-u*v-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,s=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(a/2),v=u(s/2),g=d(i/2),S=d(a/2),E=d(s/2);switch(c){case"XYZ":this._x=g*p*v+h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v-g*S*E;break;case"YXZ":this._x=g*p*v+h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v+g*S*E;break;case"ZXY":this._x=g*p*v-h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v-g*S*E;break;case"ZYX":this._x=g*p*v-h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v+g*S*E;break;case"YZX":this._x=g*p*v+h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v-g*S*E;break;case"XZY":this._x=g*p*v-h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v+g*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=i+u+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(s-h)*S,this._z=(c-a)*S}else if(i>u&&i>v){const S=2*Math.sqrt(1+i-u-v);this._w=(p-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(s+h)/S}else if(u>v){const S=2*Math.sqrt(1+u-i-v);this._w=(s-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+v-i-u);this._w=(c-a)/S,this._x=(s+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-s*d,this._y=a*p+c*d+s*u-i*h,this._z=s*p+c*h+i*d-a*u,this._w=c*p-i*u-a*d-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=s,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*a+t*this._y,this._z=S*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),v=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=c*v+this._w*g,this._x=i*v+this._x*g,this._y=a*v+this._y*g,this._z=s*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(b0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,c=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*c,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*c,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*i),p=2*(u*t-s*a),v=2*(s*i-c*t);return this.x=t+d*h+c*v-u*p,this.y=i+d*p+u*h-s*v,this.z=a+d*v+s*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-s*u,this.y=s*c-i*d,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new B,b0=new aa;class Pr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=s.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Hr):Hr.fromBufferAttribute(s,c),Hr.applyMatrix4(e.matrixWorld),this.expandByPoint(Hr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ic.copy(i.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const a=e.children;for(let s=0,c=a.length;s<c;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hr),Hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),oc.subVectors(this.max,rl),Ba.subVectors(e.a,rl),Ha.subVectors(e.b,rl),Va.subVectors(e.c,rl),eo.subVectors(Ha,Ba),to.subVectors(Va,Ha),$o.subVectors(Ba,Va);let t=[0,-eo.z,eo.y,0,-to.z,to.y,0,-$o.z,$o.y,eo.z,0,-eo.x,to.z,0,-to.x,$o.z,0,-$o.x,-eo.y,eo.x,0,-to.y,to.x,0,-$o.y,$o.x,0];return!Rh(t,Ba,Ha,Va,oc)||(t=[1,0,0,0,1,0,0,0,1],!Rh(t,Ba,Ha,Va,oc))?!1:(ac.crossVectors(eo,to),t=[ac.x,ac.y,ac.z],Rh(t,Ba,Ha,Va,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new B,new B,new B,new B,new B,new B,new B,new B],Hr=new B,ic=new Pr,Ba=new B,Ha=new B,Va=new B,eo=new B,to=new B,$o=new B,rl=new B,oc=new B,ac=new B,Xo=new B;function Rh(n,e,t,i,a){for(let s=0,c=n.length-3;s<=c;s+=3){Xo.fromArray(n,s);const u=a.x*Math.abs(Xo.x)+a.y*Math.abs(Xo.y)+a.z*Math.abs(Xo.z),d=e.dot(Xo),h=t.dot(Xo),p=i.dot(Xo);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const o3=new Pr,il=new B,Ph=new B;class li{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):o3.setFromPoints(e).getCenter(i);let a=0;for(let s=0,c=e.length;s<c;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const t=il.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(il,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(Ph)),this.expandByPoint(il.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new B,Lh=new B,sc=new B,no=new B,Dh=new B,lc=new B,Ih=new B;class Im{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Lh.copy(e).add(t).multiplyScalar(.5),sc.copy(t).sub(e).normalize(),no.copy(this.origin).sub(Lh);const s=e.distanceTo(t)*.5,c=-this.direction.dot(sc),u=no.dot(this.direction),d=-no.dot(sc),h=no.lengthSq(),p=Math.abs(1-c*c);let v,g,S,E;if(p>0)if(v=c*d-u,g=c*u-d,E=s*p,v>=0)if(g>=-E)if(g<=E){const w=1/p;v*=w,g*=w,S=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;else g=-s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;else g<=-E?(v=Math.max(0,-(-c*s+u)),g=v>0?-s:Math.min(Math.max(-s,-d),s),S=-v*v+g*(g+2*d)+h):g<=E?(v=0,g=Math.min(Math.max(-s,-d),s),S=g*(g+2*d)+h):(v=Math.max(0,-(c*s+u)),g=v>0?s:Math.min(Math.max(-s,-d),s),S=-v*v+g*(g+2*d)+h);else g=c>0?-s:s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Lh).addScaledVector(sc,g),S}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),a=wi.dot(wi)-i*i,s=e.radius*e.radius;if(a>s)return null;const c=Math.sqrt(s-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(s=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||s>a||((s>i||isNaN(i))&&(i=s),(c<a||isNaN(a))&&(a=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,a,s){Dh.subVectors(t,e),lc.subVectors(i,e),Ih.crossVectors(Dh,lc);let c=this.direction.dot(Ih),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;no.subVectors(this.origin,e);const d=u*this.direction.dot(lc.crossVectors(no,lc));if(d<0)return null;const h=u*this.direction.dot(Dh.cross(no));if(h<0||d+h>c)return null;const p=-u*no.dot(Ih);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x)}set(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=a,_[1]=s,_[5]=c,_[9]=u,_[13]=d,_[2]=h,_[6]=p,_[10]=v,_[14]=g,_[3]=S,_[7]=E,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Ga.setFromMatrixColumn(e,0).length(),s=1/Ga.setFromMatrixColumn(e,1).length(),c=1/Ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),h=Math.sin(a),p=Math.cos(s),v=Math.sin(s);if(e.order==="XYZ"){const g=c*p,S=c*v,E=u*p,w=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=S+E*h,t[5]=g-w*h,t[9]=-u*d,t[2]=w-g*h,t[6]=E+S*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,S=d*v,E=h*p,w=h*v;t[0]=g+w*u,t[4]=E*u-S,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=S*u-E,t[6]=w+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,S=d*v,E=h*p,w=h*v;t[0]=g-w*u,t[4]=-c*v,t[8]=E+S*u,t[1]=S+E*u,t[5]=c*p,t[9]=w-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,S=c*v,E=u*p,w=u*v;t[0]=d*p,t[4]=E*h-S,t[8]=g*h+w,t[1]=d*v,t[5]=w*h+g,t[9]=S*h-E,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,S=c*h,E=u*d,w=u*h;t[0]=d*p,t[4]=w-g*v,t[8]=E*v+S,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=S*v+E,t[10]=g-w*v}else if(e.order==="XZY"){const g=c*d,S=c*h,E=u*d,w=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+w,t[5]=c*p,t[9]=S*v-E,t[2]=E*v-S,t[6]=u*p,t[10]=w*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a3,e,s3)}lookAt(e,t,i){const a=this.elements;return dr.subVectors(e,t),dr.lengthSq()===0&&(dr.z=1),dr.normalize(),ro.crossVectors(i,dr),ro.lengthSq()===0&&(Math.abs(i.z)===1?dr.x+=1e-4:dr.z+=1e-4,dr.normalize(),ro.crossVectors(i,dr)),ro.normalize(),uc.crossVectors(dr,ro),a[0]=ro.x,a[4]=uc.x,a[8]=dr.x,a[1]=ro.y,a[5]=uc.y,a[9]=dr.y,a[2]=ro.z,a[6]=uc.z,a[10]=dr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],v=i[5],g=i[9],S=i[13],E=i[2],w=i[6],x=i[10],_=i[14],C=i[3],M=i[7],R=i[11],I=i[15],O=a[0],F=a[4],de=a[8],b=a[12],N=a[1],ae=a[5],ne=a[9],pe=a[13],H=a[2],Q=a[6],se=a[10],re=a[14],X=a[3],ie=a[7],$=a[11],P=a[15];return s[0]=c*O+u*N+d*H+h*X,s[4]=c*F+u*ae+d*Q+h*ie,s[8]=c*de+u*ne+d*se+h*$,s[12]=c*b+u*pe+d*re+h*P,s[1]=p*O+v*N+g*H+S*X,s[5]=p*F+v*ae+g*Q+S*ie,s[9]=p*de+v*ne+g*se+S*$,s[13]=p*b+v*pe+g*re+S*P,s[2]=E*O+w*N+x*H+_*X,s[6]=E*F+w*ae+x*Q+_*ie,s[10]=E*de+w*ne+x*se+_*$,s[14]=E*b+w*pe+x*re+_*P,s[3]=C*O+M*N+R*H+I*X,s[7]=C*F+M*ae+R*Q+I*ie,s[11]=C*de+M*ne+R*se+I*$,s[15]=C*b+M*pe+R*re+I*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],S=e[14],E=e[3],w=e[7],x=e[11],_=e[15];return E*(+s*d*v-a*h*v-s*u*g+i*h*g+a*u*S-i*d*S)+w*(+t*d*S-t*h*g+s*c*g-a*c*S+a*h*p-s*d*p)+x*(+t*h*v-t*u*S-s*c*v+i*c*S+s*u*p-i*h*p)+_*(-a*u*p-t*d*v+t*u*g+a*c*v-i*c*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],S=e[11],E=e[12],w=e[13],x=e[14],_=e[15],C=v*x*h-w*g*h+w*d*S-u*x*S-v*d*_+u*g*_,M=E*g*h-p*x*h-E*d*S+c*x*S+p*d*_-c*g*_,R=p*w*h-E*v*h+E*u*S-c*w*S-p*u*_+c*v*_,I=E*v*d-p*w*d-E*u*g+c*w*g+p*u*x-c*v*x,O=t*C+i*M+a*R+s*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=C*F,e[1]=(w*g*s-v*x*s-w*a*S+i*x*S+v*a*_-i*g*_)*F,e[2]=(u*x*s-w*d*s+w*a*h-i*x*h-u*a*_+i*d*_)*F,e[3]=(v*d*s-u*g*s-v*a*h+i*g*h+u*a*S-i*d*S)*F,e[4]=M*F,e[5]=(p*x*s-E*g*s+E*a*S-t*x*S-p*a*_+t*g*_)*F,e[6]=(E*d*s-c*x*s-E*a*h+t*x*h+c*a*_-t*d*_)*F,e[7]=(c*g*s-p*d*s+p*a*h-t*g*h-c*a*S+t*d*S)*F,e[8]=R*F,e[9]=(E*v*s-p*w*s-E*i*S+t*w*S+p*i*_-t*v*_)*F,e[10]=(c*w*s-E*u*s+E*i*h-t*w*h-c*i*_+t*u*_)*F,e[11]=(p*u*s-c*v*s-p*i*h+t*v*h+c*i*S-t*u*S)*F,e[12]=I*F,e[13]=(p*w*a-E*v*a+E*i*g-t*w*g-p*i*x+t*v*x)*F,e[14]=(E*u*a-c*w*a-E*i*d+t*w*d+c*i*x-t*u*x)*F,e[15]=(c*v*a-p*u*a+p*i*d-t*v*d-c*i*g+t*u*g)*F,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,c=e.x,u=e.y,d=e.z,h=s*c,p=s*u;return this.set(h*c+i,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+i,p*d-a*c,0,h*d-a*u,p*d+a*c,s*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,c){return this.set(1,i,s,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,c=t._y,u=t._z,d=t._w,h=s+s,p=c+c,v=u+u,g=s*h,S=s*p,E=s*v,w=c*p,x=c*v,_=u*v,C=d*h,M=d*p,R=d*v,I=i.x,O=i.y,F=i.z;return a[0]=(1-(w+_))*I,a[1]=(S+R)*I,a[2]=(E-M)*I,a[3]=0,a[4]=(S-R)*O,a[5]=(1-(g+_))*O,a[6]=(x+C)*O,a[7]=0,a[8]=(E+M)*F,a[9]=(x-C)*F,a[10]=(1-(g+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Ga.set(a[0],a[1],a[2]).length();const c=Ga.set(a[4],a[5],a[6]).length(),u=Ga.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Vr.copy(this);const h=1/s,p=1/c,v=1/u;return Vr.elements[0]*=h,Vr.elements[1]*=h,Vr.elements[2]*=h,Vr.elements[4]*=p,Vr.elements[5]*=p,Vr.elements[6]*=p,Vr.elements[8]*=v,Vr.elements[9]*=v,Vr.elements[10]*=v,t.setFromRotationMatrix(Vr),i.x=s,i.y=c,i.z=u,this}makePerspective(e,t,i,a,s,c,u=oi){const d=this.elements,h=2*s/(t-e),p=2*s/(i-a),v=(t+e)/(t-e),g=(i+a)/(i-a);let S,E;if(u===oi)S=-(c+s)/(c-s),E=-2*c*s/(c-s);else if(u===bl)S=-c/(c-s),E=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,s,c,u=oi){const d=this.elements,h=1/(t-e),p=1/(i-a),v=1/(c-s),g=(t+e)*h,S=(i+a)*p;let E,w;if(u===oi)E=(c+s)*v,w=-2*v;else if(u===bl)E=s*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ga=new B,Vr=new Gt,a3=new B(0,0,0),s3=new B(1,1,1),ro=new B,uc=new B,dr=new B,C0=new Gt,R0=new aa;class Vl{constructor(e=0,t=0,i=0,a=Vl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],v=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Cn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return C0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return R0.setFromEuler(this),this.setFromQuaternion(R0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vl.DEFAULT_ORDER="XYZ";class TE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l3=0;const P0=new B,Wa=new aa,Mi=new Gt,cc=new B,ol=new B,u3=new B,c3=new aa,L0=new B(1,0,0),D0=new B(0,1,0),I0=new B(0,0,1),f3={type:"added"},d3={type:"removed"};class jn extends da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l3++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new B,t=new Vl,i=new aa,a=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Et}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new TE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.multiply(Wa),this}rotateOnWorldAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.premultiply(Wa),this}rotateX(e){return this.rotateOnAxis(L0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(I0,e)}translateOnAxis(e,t){return P0.copy(e).applyQuaternion(this.quaternion),this.position.add(P0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(L0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(I0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cc.copy(e):cc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(ol,cc,this.up):Mi.lookAt(cc,ol,this.up),this.quaternion.setFromRotationMatrix(Mi),a&&(Mi.extractRotation(a.matrixWorld),Wa.setFromRotationMatrix(Mi),this.quaternion.premultiply(Wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f3)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d3)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,u3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,c3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,c=a.length;s<c;s++){const u=a[s];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];s(e.shapes,v)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(s(e.materials,this.material[d]));a.material=u}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(s(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),S=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=a,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}jn.DEFAULT_UP=new B(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gr=new B,Ai=new B,Uh=new B,Ti=new B,$a=new B,Xa=new B,U0=new B,Nh=new B,Fh=new B,Oh=new B;let fc=!1;class $r{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Gr.subVectors(e,t),a.cross(Gr);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Gr.subVectors(a,t),Ai.subVectors(i,t),Uh.subVectors(e,t);const c=Gr.dot(Gr),u=Gr.dot(Ai),d=Gr.dot(Uh),h=Ai.dot(Ai),p=Ai.dot(Uh),v=c*h-u*u;if(v===0)return s.set(-2,-1,-1);const g=1/v,S=(h*d-u*p)*g,E=(c*p-u*d)*g;return s.set(1-S-E,E,S)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ti),Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,i,a,s,c,u,d){return fc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fc=!0),this.getInterpolation(e,t,i,a,s,c,u,d)}static getInterpolation(e,t,i,a,s,c,u,d){return this.getBarycoord(e,t,i,a,Ti),d.setScalar(0),d.addScaledVector(s,Ti.x),d.addScaledVector(c,Ti.y),d.addScaledVector(u,Ti.z),d}static isFrontFacing(e,t,i,a){return Gr.subVectors(i,t),Ai.subVectors(e,t),Gr.cross(Ai).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gr.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Gr.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return fc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fc=!0),$r.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return $r.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return $r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let c,u;$a.subVectors(a,i),Xa.subVectors(s,i),Nh.subVectors(e,i);const d=$a.dot(Nh),h=Xa.dot(Nh);if(d<=0&&h<=0)return t.copy(i);Fh.subVectors(e,a);const p=$a.dot(Fh),v=Xa.dot(Fh);if(p>=0&&v<=p)return t.copy(a);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector($a,c);Oh.subVectors(e,s);const S=$a.dot(Oh),E=Xa.dot(Oh);if(E>=0&&S<=E)return t.copy(s);const w=S*h-d*E;if(w<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(i).addScaledVector(Xa,u);const x=p*E-S*v;if(x<=0&&v-p>=0&&S-E>=0)return U0.subVectors(s,a),u=(v-p)/(v-p+(S-E)),t.copy(a).addScaledVector(U0,u);const _=1/(x+w+g);return c=w*_,u=g*_,t.copy(i).addScaledVector($a,c).addScaledVector(Xa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},io={h:0,s:0,l:0},dc={h:0,s:0,l:0};function zh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ft.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Ft.workingColorSpace){if(e=Dm(e,1),t=Cn(t,0,1),i=Cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,c=2*i-s;this.r=zh(c,s,e+1/3),this.g=zh(c,s,e),this.b=zh(c,s,e-1/3)}return Ft.toWorkingColorSpace(this,a),this}setStyle(e,t=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=bE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=Th(e.r),this.g=Th(e.g),this.b=Th(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ft.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Cn(Fn.r*255,0,255))*65536+Math.round(Cn(Fn.g*255,0,255))*256+Math.round(Cn(Fn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Fn.copy(this),t);const i=Fn.r,a=Fn.g,s=Fn.b,c=Math.max(i,a,s),u=Math.min(i,a,s);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case i:d=(a-s)/v+(a<s?6:0);break;case a:d=(s-i)/v+2;break;case s:d=(i-a)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=bn){Ft.fromWorkingColorSpace(Fn.copy(this),e);const t=Fn.r,i=Fn.g,a=Fn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(io),this.setHSL(io.h+e,io.s+t,io.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(io),e.getHSL(dc);const i=_l(io.h,dc.h,t),a=_l(io.s,dc.s,t),s=_l(io.l,dc.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new nt;nt.NAMES=bE;let h3=0;class xs extends da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h3++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=os,this.side=So,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Mp,this.blendEquation=Zo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==So&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wp&&(i.blendSrc=this.blendSrc),this.blendDst!==Mp&&(i.blendDst=this.blendDst),this.blendEquation!==Zo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==za&&(i.stencilFail=this.stencilFail),this.stencilZFail!==za&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==za&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}if(t){const s=a(e.textures),c=a(e.images);s.length>0&&(i.textures=s),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class CE extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new B,hc=new ht;class mr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rp&&(e.usage=this.usage),e}}class RE extends mr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class PE extends mr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class on extends mr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let p3=0;const wr=new Gt,kh=new jn,ja=new B,hr=new Pr,al=new Pr,xn=new B;class Bn extends da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p3++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(EE(e)?PE:RE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wr.makeRotationFromQuaternion(e),this.applyMatrix4(wr),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,i){return wr.makeTranslation(e,t,i),this.applyMatrix4(wr),this}scale(e,t,i){return wr.makeScale(e,t,i),this.applyMatrix4(wr),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ja).negate(),this.translate(ja.x,ja.y,ja.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];hr.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,hr.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,hr.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(hr.min),this.boundingBox.expandByPoint(hr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(hr.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const u=t[s];al.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(hr.min,al.min),hr.expandByPoint(xn),xn.addVectors(hr.max,al.max),hr.expandByPoint(xn)):(hr.expandByPoint(al.min),hr.expandByPoint(al.max))}hr.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)xn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(xn));if(t)for(let s=0,c=t.length;s<c;s++){const u=t[s],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)xn.fromBufferAttribute(u,h),d&&(ja.fromBufferAttribute(e,h),xn.add(ja)),a=Math.max(a,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,c=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mr(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let N=0;N<u;N++)h[N]=new B,p[N]=new B;const v=new B,g=new B,S=new B,E=new ht,w=new ht,x=new ht,_=new B,C=new B;function M(N,ae,ne){v.fromArray(a,N*3),g.fromArray(a,ae*3),S.fromArray(a,ne*3),E.fromArray(c,N*2),w.fromArray(c,ae*2),x.fromArray(c,ne*2),g.sub(v),S.sub(v),w.sub(E),x.sub(E);const pe=1/(w.x*x.y-x.x*w.y);isFinite(pe)&&(_.copy(g).multiplyScalar(x.y).addScaledVector(S,-w.y).multiplyScalar(pe),C.copy(S).multiplyScalar(w.x).addScaledVector(g,-x.x).multiplyScalar(pe),h[N].add(_),h[ae].add(_),h[ne].add(_),p[N].add(C),p[ae].add(C),p[ne].add(C))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let N=0,ae=R.length;N<ae;++N){const ne=R[N],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)M(i[Q+0],i[Q+1],i[Q+2])}const I=new B,O=new B,F=new B,de=new B;function b(N){F.fromArray(s,N*3),de.copy(F);const ae=h[N];I.copy(ae),I.sub(F.multiplyScalar(F.dot(ae))).normalize(),O.crossVectors(de,ae);const pe=O.dot(p[N])<0?-1:1;d[N*4]=I.x,d[N*4+1]=I.y,d[N*4+2]=I.z,d[N*4+3]=pe}for(let N=0,ae=R.length;N<ae;++N){const ne=R[N],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)b(i[Q+0]),b(i[Q+1]),b(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const a=new B,s=new B,c=new B,u=new B,d=new B,h=new B,p=new B,v=new B;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),w=e.getX(g+1),x=e.getX(g+2);a.fromBufferAttribute(t,E),s.fromBufferAttribute(t,w),c.fromBufferAttribute(t,x),p.subVectors(c,s),v.subVectors(a,s),p.cross(v),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),u.add(p),d.add(p),h.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,s),v.subVectors(a,s),p.cross(v),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,g=new h.constructor(d.length*p);let S=0,E=0;for(let w=0,x=d.length;w<x;w++){u.isInterleavedBufferAttribute?S=d[w]*u.data.stride+u.offset:S=d[w]*p;for(let _=0;_<p;_++)g[E++]=h[S++]}return new mr(g,p,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,i);t.setAttribute(u,h)}const s=this.morphAttributes;for(const u in s){const d=[],h=s[u];for(let p=0,v=h.length;p<v;p++){const g=h[p],S=e(g,i);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const S=h[v];p.push(S.toJSON(e.data))}p.length>0&&(a[d]=p,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],v=s[h];for(let g=0,S=v.length;g<S;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N0=new Gt,jo=new Im,pc=new li,F0=new B,Ya=new B,qa=new B,Ka=new B,Bh=new B,mc=new B,vc=new ht,gc=new ht,_c=new ht,O0=new B,z0=new B,k0=new B,yc=new B,xc=new B;class jr extends jn{constructor(e=new Bn,t=new CE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(s&&u){mc.set(0,0,0);for(let d=0,h=s.length;d<h;d++){const p=u[d],v=s[d];p!==0&&(Bh.fromBufferAttribute(v,e),c?mc.addScaledVector(Bh,p):mc.addScaledVector(Bh.sub(t),p))}t.add(mc)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(s),jo.copy(e.ray).recast(e.near),!(pc.containsPoint(jo.origin)===!1&&(jo.intersectSphere(pc,F0)===null||jo.origin.distanceToSquared(F0)>(e.far-e.near)**2))&&(N0.copy(s).invert(),jo.copy(e.ray).applyMatrix4(N0),!(i.boundingBox!==null&&jo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jo)))}_computeIntersections(e,t,i){let a;const s=this.geometry,c=this.material,u=s.index,d=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,v=s.attributes.normal,g=s.groups,S=s.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,w=g.length;E<w;E++){const x=g[E],_=c[x.materialIndex],C=Math.max(x.start,S.start),M=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let R=C,I=M;R<I;R+=3){const O=u.getX(R),F=u.getX(R+1),de=u.getX(R+2);a=Sc(this,_,e,i,h,p,v,O,F,de),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let x=E,_=w;x<_;x+=3){const C=u.getX(x),M=u.getX(x+1),R=u.getX(x+2);a=Sc(this,c,e,i,h,p,v,C,M,R),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=g.length;E<w;E++){const x=g[E],_=c[x.materialIndex],C=Math.max(x.start,S.start),M=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=C,I=M;R<I;R+=3){const O=R,F=R+1,de=R+2;a=Sc(this,_,e,i,h,p,v,O,F,de),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let x=E,_=w;x<_;x+=3){const C=x,M=x+1,R=x+2;a=Sc(this,c,e,i,h,p,v,C,M,R),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function m3(n,e,t,i,a,s,c,u){let d;if(e.side===or?d=i.intersectTriangle(c,s,a,!0,u):d=i.intersectTriangle(a,s,c,e.side===So,u),d===null)return null;xc.copy(u),xc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(xc);return h<t.near||h>t.far?null:{distance:h,point:xc.clone(),object:n}}function Sc(n,e,t,i,a,s,c,u,d,h){n.getVertexPosition(u,Ya),n.getVertexPosition(d,qa),n.getVertexPosition(h,Ka);const p=m3(n,e,t,i,Ya,qa,Ka,yc);if(p){a&&(vc.fromBufferAttribute(a,u),gc.fromBufferAttribute(a,d),_c.fromBufferAttribute(a,h),p.uv=$r.getInterpolation(yc,Ya,qa,Ka,vc,gc,_c,new ht)),s&&(vc.fromBufferAttribute(s,u),gc.fromBufferAttribute(s,d),_c.fromBufferAttribute(s,h),p.uv1=$r.getInterpolation(yc,Ya,qa,Ka,vc,gc,_c,new ht),p.uv2=p.uv1),c&&(O0.fromBufferAttribute(c,u),z0.fromBufferAttribute(c,d),k0.fromBufferAttribute(c,h),p.normal=$r.getInterpolation(yc,Ya,qa,Ka,O0,z0,k0,new B),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:d,c:h,normal:new B,materialIndex:0};$r.getNormal(Ya,qa,Ka,v.normal),p.face=v}return p}class Gl extends Bn{constructor(e=1,t=1,i=1,a=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:c};const u=this;a=Math.floor(a),s=Math.floor(s),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,i,t,e,c,s,0),E("z","y","x",1,-1,i,t,-e,c,s,1),E("x","z","y",1,1,e,i,t,a,c,2),E("x","z","y",1,-1,e,i,-t,a,c,3),E("x","y","z",1,-1,e,t,i,a,s,4),E("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(d),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(p,3)),this.setAttribute("uv",new on(v,2));function E(w,x,_,C,M,R,I,O,F,de,b){const N=R/F,ae=I/de,ne=R/2,pe=I/2,H=O/2,Q=F+1,se=de+1;let re=0,X=0;const ie=new B;for(let $=0;$<se;$++){const P=$*ae-pe;for(let z=0;z<Q;z++){const W=z*N-ne;ie[w]=W*C,ie[x]=P*M,ie[_]=H,h.push(ie.x,ie.y,ie.z),ie[w]=0,ie[x]=0,ie[_]=O>0?1:-1,p.push(ie.x,ie.y,ie.z),v.push(z/F),v.push(1-$/de),re+=1}}for(let $=0;$<de;$++)for(let P=0;P<F;P++){const z=g+P+Q*$,W=g+P+Q*($+1),q=g+(P+1)+Q*($+1),ee=g+(P+1)+Q*$;d.push(z,W,ee),d.push(W,q,ee),X+=6}u.addGroup(S,X,b),S+=X,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Xn(n){const e={};for(let t=0;t<n.length;t++){const i=gs(n[t]);for(const a in i)e[a]=i[a]}return e}function v3(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function LE(n){return n.getRenderTarget()===null?n.outputColorSpace:Ft.workingColorSpace}const Um={clone:gs,merge:Xn};var g3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Eo extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g3,this.fragmentShader=_3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=v3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class DE extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pr extends DE{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gl*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;s+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Za=-90,Ja=1;class y3 extends jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new pr(Za,Ja,e,t);a.layers=this.layers,this.add(a);const s=new pr(Za,Ja,e,t);s.layers=this.layers,this.add(s);const c=new pr(Za,Ja,e,t);c.layers=this.layers,this.add(c);const u=new pr(Za,Ja,e,t);u.layers=this.layers,this.add(u);const d=new pr(Za,Ja,e,t);d.layers=this.layers,this.add(d);const h=new pr(Za,Ja,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,c,u,d]=t;for(const h of t)this.remove(h);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,u,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,d),e.setRenderTarget(i,4,a),e.render(t,h),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(v,g,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class IE extends ar{constructor(e,t,i,a,s,c,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,i,a,s,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x3 extends oa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(yl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ia?bn:Tr),this.texture=new IE(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Gl(5,5,5),s=new Eo({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:or,blending:mo});s.uniforms.tEquirect.value=t;const c=new jr(a,s),u=t.minFilter;return t.minFilter===Al&&(t.minFilter=Mr),new y3(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(s)}}const Hh=new B,S3=new B,E3=new Et;class lo{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Hh.subVectors(i,t).cross(S3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||E3.getNormalMatrix(e),a=this.coplanarPoint(Hh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yo=new li,Ec=new B;class yf{constructor(e=new lo,t=new lo,i=new lo,a=new lo,s=new lo,c=new lo){this.planes=[e,t,i,a,s,c]}set(e,t,i,a,s,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(s),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){const i=this.planes,a=e.elements,s=a[0],c=a[1],u=a[2],d=a[3],h=a[4],p=a[5],v=a[6],g=a[7],S=a[8],E=a[9],w=a[10],x=a[11],_=a[12],C=a[13],M=a[14],R=a[15];if(i[0].setComponents(d-s,g-h,x-S,R-_).normalize(),i[1].setComponents(d+s,g+h,x+S,R+_).normalize(),i[2].setComponents(d+c,g+p,x+E,R+C).normalize(),i[3].setComponents(d-c,g-p,x-E,R-C).normalize(),i[4].setComponents(d-u,g-v,x-w,R-M).normalize(),t===oi)i[5].setComponents(d+u,g+v,x+w,R+M).normalize();else if(t===bl)i[5].setComponents(u,v,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yo)}intersectsSprite(e){return Yo.center.set(0,0,0),Yo.radius=.7071067811865476,Yo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yo)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Ec.x=a.normal.x>0?e.max.x:e.min.x,Ec.y=a.normal.y>0?e.max.y:e.min.y,Ec.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function UE(){let n=null,e=!1,t=null,i=null;function a(s,c){t(s,c),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function w3(n,e){const t=e.isWebGL2,i=new WeakMap;function a(h,p){const v=h.array,g=h.usage,S=v.byteLength,E=n.createBuffer();n.bindBuffer(p,E),n.bufferData(p,v,g),h.onUploadCallback();let w;if(v instanceof Float32Array)w=n.FLOAT;else if(v instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)w=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=n.UNSIGNED_SHORT;else if(v instanceof Int16Array)w=n.SHORT;else if(v instanceof Uint32Array)w=n.UNSIGNED_INT;else if(v instanceof Int32Array)w=n.INT;else if(v instanceof Int8Array)w=n.BYTE;else if(v instanceof Uint8Array)w=n.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)w=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:w,bytesPerElement:v.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,p,v){const g=p.array,S=p._updateRange,E=p.updateRanges;if(n.bindBuffer(v,h),S.count===-1&&E.length===0&&n.bufferSubData(v,0,g),E.length!==0){for(let w=0,x=E.length;w<x;w++){const _=E[w];t?n.bufferSubData(v,_.start*g.BYTES_PER_ELEMENT,g,_.start,_.count):n.bufferSubData(v,_.start*g.BYTES_PER_ELEMENT,g.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}S.count!==-1&&(t?n.bufferSubData(v,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count):n.bufferSubData(v,S.offset*g.BYTES_PER_ELEMENT,g.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(n.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const g=i.get(h);(!g||g.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const v=i.get(h);if(v===void 0)i.set(h,a(h,p));else if(v.version<h.version){if(v.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,h,p),v.version=h.version}}return{get:c,remove:u,update:d}}class Nm extends Bn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,c=t/2,u=Math.floor(i),d=Math.floor(a),h=u+1,p=d+1,v=e/u,g=t/d,S=[],E=[],w=[],x=[];for(let _=0;_<p;_++){const C=_*g-c;for(let M=0;M<h;M++){const R=M*v-s;E.push(R,-C,0),w.push(0,0,1),x.push(M/u),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let C=0;C<u;C++){const M=C+h*_,R=C+h*(_+1),I=C+1+h*(_+1),O=C+1+h*_;S.push(M,R,O),S.push(R,I,O)}this.setIndex(S),this.setAttribute("position",new on(E,3)),this.setAttribute("normal",new on(w,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nm(e.width,e.height,e.widthSegments,e.heightSegments)}}var M3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A3=`#ifdef USE_ALPHAHASH
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
#endif`,T3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C3=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,R3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P3=`#ifdef USE_AOMAP
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
#endif`,L3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D3=`#ifdef USE_BATCHING
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
#endif`,I3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,U3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O3=`#ifdef USE_IRIDESCENCE
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
#endif`,z3=`#ifdef USE_BUMPMAP
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
#endif`,k3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,X3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,j3=`#define PI 3.141592653589793
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
} // validated`,Y3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q3=`vec3 transformedNormal = objectNormal;
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
#endif`,K3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eI="gl_FragColor = linearToOutputTexel( gl_FragColor );",tI=`
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
}`,nI=`#ifdef USE_ENVMAP
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
#endif`,rI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iI=`#ifdef USE_ENVMAP
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
#endif`,oI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aI=`#ifdef USE_ENVMAP
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
#endif`,sI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fI=`#ifdef USE_GRADIENTMAP
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
}`,dI=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vI=`uniform bool receiveShadow;
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
#endif`,gI=`#ifdef USE_ENVMAP
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
#endif`,_I=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EI=`PhysicalMaterial material;
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
#endif`,wI=`struct PhysicalMaterial {
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
}`,MI=`
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
#endif`,AI=`#if defined( RE_IndirectDiffuse )
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
#endif`,TI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,LI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,II=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UI=`#if defined( USE_POINTS_UV )
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
#endif`,NI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OI=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zI=`#ifdef USE_MORPHNORMALS
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
#endif`,kI=`#ifdef USE_MORPHTARGETS
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
#endif`,BI=`#ifdef USE_MORPHTARGETS
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
#endif`,HI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$I=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XI=`#ifdef USE_NORMALMAP
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
#endif`,jI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JI=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lU=`float getShadowMask() {
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
}`,uU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cU=`#ifdef USE_SKINNING
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
#endif`,fU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dU=`#ifdef USE_SKINNING
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
#endif`,hU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gU=`#ifdef USE_TRANSMISSION
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
#endif`,_U=`#ifdef USE_TRANSMISSION
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
#endif`,yU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MU=`uniform sampler2D t2D;
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
}`,AU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RU=`#include <common>
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
}`,PU=`#if DEPTH_PACKING == 3200
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
}`,LU=`#define DISTANCE
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
}`,DU=`#define DISTANCE
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
}`,IU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NU=`uniform float scale;
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
}`,FU=`uniform vec3 diffuse;
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
}`,OU=`#include <common>
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
}`,zU=`uniform vec3 diffuse;
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
}`,kU=`#define LAMBERT
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
}`,BU=`#define LAMBERT
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
}`,HU=`#define MATCAP
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
}`,VU=`#define MATCAP
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
}`,GU=`#define NORMAL
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
}`,WU=`#define NORMAL
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
}`,$U=`#define PHONG
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
}`,XU=`#define PHONG
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
}`,jU=`#define STANDARD
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
}`,YU=`#define STANDARD
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
}`,qU=`#define TOON
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
}`,KU=`#define TOON
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
}`,ZU=`uniform float size;
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
}`,JU=`uniform vec3 diffuse;
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
}`,QU=`#include <common>
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
}`,eN=`uniform vec3 color;
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
}`,tN=`uniform float rotation;
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
}`,nN=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:M3,alphahash_pars_fragment:A3,alphamap_fragment:T3,alphamap_pars_fragment:b3,alphatest_fragment:C3,alphatest_pars_fragment:R3,aomap_fragment:P3,aomap_pars_fragment:L3,batching_pars_vertex:D3,batching_vertex:I3,begin_vertex:U3,beginnormal_vertex:N3,bsdfs:F3,iridescence_fragment:O3,bumpmap_pars_fragment:z3,clipping_planes_fragment:k3,clipping_planes_pars_fragment:B3,clipping_planes_pars_vertex:H3,clipping_planes_vertex:V3,color_fragment:G3,color_pars_fragment:W3,color_pars_vertex:$3,color_vertex:X3,common:j3,cube_uv_reflection_fragment:Y3,defaultnormal_vertex:q3,displacementmap_pars_vertex:K3,displacementmap_vertex:Z3,emissivemap_fragment:J3,emissivemap_pars_fragment:Q3,colorspace_fragment:eI,colorspace_pars_fragment:tI,envmap_fragment:nI,envmap_common_pars_fragment:rI,envmap_pars_fragment:iI,envmap_pars_vertex:oI,envmap_physical_pars_fragment:gI,envmap_vertex:aI,fog_vertex:sI,fog_pars_vertex:lI,fog_fragment:uI,fog_pars_fragment:cI,gradientmap_pars_fragment:fI,lightmap_fragment:dI,lightmap_pars_fragment:hI,lights_lambert_fragment:pI,lights_lambert_pars_fragment:mI,lights_pars_begin:vI,lights_toon_fragment:_I,lights_toon_pars_fragment:yI,lights_phong_fragment:xI,lights_phong_pars_fragment:SI,lights_physical_fragment:EI,lights_physical_pars_fragment:wI,lights_fragment_begin:MI,lights_fragment_maps:AI,lights_fragment_end:TI,logdepthbuf_fragment:bI,logdepthbuf_pars_fragment:CI,logdepthbuf_pars_vertex:RI,logdepthbuf_vertex:PI,map_fragment:LI,map_pars_fragment:DI,map_particle_fragment:II,map_particle_pars_fragment:UI,metalnessmap_fragment:NI,metalnessmap_pars_fragment:FI,morphcolor_vertex:OI,morphnormal_vertex:zI,morphtarget_pars_vertex:kI,morphtarget_vertex:BI,normal_fragment_begin:HI,normal_fragment_maps:VI,normal_pars_fragment:GI,normal_pars_vertex:WI,normal_vertex:$I,normalmap_pars_fragment:XI,clearcoat_normal_fragment_begin:jI,clearcoat_normal_fragment_maps:YI,clearcoat_pars_fragment:qI,iridescence_pars_fragment:KI,opaque_fragment:ZI,packing:JI,premultiplied_alpha_fragment:QI,project_vertex:eU,dithering_fragment:tU,dithering_pars_fragment:nU,roughnessmap_fragment:rU,roughnessmap_pars_fragment:iU,shadowmap_pars_fragment:oU,shadowmap_pars_vertex:aU,shadowmap_vertex:sU,shadowmask_pars_fragment:lU,skinbase_vertex:uU,skinning_pars_vertex:cU,skinning_vertex:fU,skinnormal_vertex:dU,specularmap_fragment:hU,specularmap_pars_fragment:pU,tonemapping_fragment:mU,tonemapping_pars_fragment:vU,transmission_fragment:gU,transmission_pars_fragment:_U,uv_pars_fragment:yU,uv_pars_vertex:xU,uv_vertex:SU,worldpos_vertex:EU,background_vert:wU,background_frag:MU,backgroundCube_vert:AU,backgroundCube_frag:TU,cube_vert:bU,cube_frag:CU,depth_vert:RU,depth_frag:PU,distanceRGBA_vert:LU,distanceRGBA_frag:DU,equirect_vert:IU,equirect_frag:UU,linedashed_vert:NU,linedashed_frag:FU,meshbasic_vert:OU,meshbasic_frag:zU,meshlambert_vert:kU,meshlambert_frag:BU,meshmatcap_vert:HU,meshmatcap_frag:VU,meshnormal_vert:GU,meshnormal_frag:WU,meshphong_vert:$U,meshphong_frag:XU,meshphysical_vert:jU,meshphysical_frag:YU,meshtoon_vert:qU,meshtoon_frag:KU,points_vert:ZU,points_frag:JU,shadow_vert:QU,shadow_frag:eN,sprite_vert:tN,sprite_frag:nN},Ne={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},rr={basic:{uniforms:Xn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Xn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Xn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Xn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Xn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Xn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Xn([Ne.points,Ne.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Xn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Xn([Ne.common,Ne.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Xn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Xn([Ne.sprite,Ne.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Xn([Ne.common,Ne.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Xn([Ne.lights,Ne.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};rr.physical={uniforms:Xn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const wc={r:0,b:0,g:0};function rN(n,e,t,i,a,s,c){const u=new nt(0);let d=s===!0?0:1,h,p,v=null,g=0,S=null;function E(x,_){let C=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?w(u,d):M&&M.isColor&&(w(M,1),C=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===gf)?(p===void 0&&(p=new jr(new Gl(1,1,1),new Eo({name:"BackgroundCubeMaterial",uniforms:gs(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Ft.getTransfer(M.colorSpace)!==Xt,(v!==M||g!==M.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,v=M,g=M.version,S=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new jr(new Nm(2,2),new Eo({name:"BackgroundMaterial",uniforms:gs(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:So,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Ft.getTransfer(M.colorSpace)!==Xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(v!==M||g!==M.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,v=M,g=M.version,S=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function w(x,_){x.getRGB(wc,LE(n)),i.buffers.color.setClear(wc.r,wc.g,wc.b,_,c)}return{getClearColor:function(){return u},setClearColor:function(x,_=1){u.set(x),d=_,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,w(u,d)},render:E}}function iN(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||s!==null,u={},d=x(null);let h=d,p=!1;function v(H,Q,se,re,X){let ie=!1;if(c){const $=w(re,se,Q);h!==$&&(h=$,S(h.object)),ie=_(H,re,se,X),ie&&C(H,re,se,X)}else{const $=Q.wireframe===!0;(h.geometry!==re.id||h.program!==se.id||h.wireframe!==$)&&(h.geometry=re.id,h.program=se.id,h.wireframe=$,ie=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(ie||p)&&(p=!1,de(H,Q,se,re),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function g(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function S(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function E(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function w(H,Q,se){const re=se.wireframe===!0;let X=u[H.id];X===void 0&&(X={},u[H.id]=X);let ie=X[Q.id];ie===void 0&&(ie={},X[Q.id]=ie);let $=ie[re];return $===void 0&&($=x(g()),ie[re]=$),$}function x(H){const Q=[],se=[],re=[];for(let X=0;X<a;X++)Q[X]=0,se[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:se,attributeDivisors:re,object:H,attributes:{},index:null}}function _(H,Q,se,re){const X=h.attributes,ie=Q.attributes;let $=0;const P=se.getAttributes();for(const z in P)if(P[z].location>=0){const q=X[z];let ee=ie[z];if(ee===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),q===void 0||q.attribute!==ee||ee&&q.data!==ee.data)return!0;$++}return h.attributesNum!==$||h.index!==re}function C(H,Q,se,re){const X={},ie=Q.attributes;let $=0;const P=se.getAttributes();for(const z in P)if(P[z].location>=0){let q=ie[z];q===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(q=H.instanceColor));const ee={};ee.attribute=q,q&&q.data&&(ee.data=q.data),X[z]=ee,$++}h.attributes=X,h.attributesNum=$,h.index=re}function M(){const H=h.newAttributes;for(let Q=0,se=H.length;Q<se;Q++)H[Q]=0}function R(H){I(H,0)}function I(H,Q){const se=h.newAttributes,re=h.enabledAttributes,X=h.attributeDivisors;se[H]=1,re[H]===0&&(n.enableVertexAttribArray(H),re[H]=1),X[H]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Q),X[H]=Q)}function O(){const H=h.newAttributes,Q=h.enabledAttributes;for(let se=0,re=Q.length;se<re;se++)Q[se]!==H[se]&&(n.disableVertexAttribArray(se),Q[se]=0)}function F(H,Q,se,re,X,ie,$){$===!0?n.vertexAttribIPointer(H,Q,se,X,ie):n.vertexAttribPointer(H,Q,se,re,X,ie)}function de(H,Q,se,re){if(i.isWebGL2===!1&&(H.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=re.attributes,ie=se.getAttributes(),$=Q.defaultAttributeValues;for(const P in ie){const z=ie[P];if(z.location>=0){let W=X[P];if(W===void 0&&(P==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),P==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),W!==void 0){const q=W.normalized,ee=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const _e=Z.buffer,ve=Z.type,be=Z.bytesPerElement,Fe=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===fE);if(W.isInterleavedBufferAttribute){const Oe=W.data,j=Oe.stride,Lt=W.offset;if(Oe.isInstancedInterleavedBuffer){for(let Be=0;Be<z.locationSize;Be++)I(z.location+Be,Oe.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Be=0;Be<z.locationSize;Be++)R(z.location+Be);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Be=0;Be<z.locationSize;Be++)F(z.location+Be,ee/z.locationSize,ve,q,j*be,(Lt+ee/z.locationSize*Be)*be,Fe)}else{if(W.isInstancedBufferAttribute){for(let Oe=0;Oe<z.locationSize;Oe++)I(z.location+Oe,W.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)R(z.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Oe=0;Oe<z.locationSize;Oe++)F(z.location+Oe,ee/z.locationSize,ve,q,ee*be,ee/z.locationSize*Oe*be,Fe)}}else if($!==void 0){const q=$[P];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(z.location,q);break;case 3:n.vertexAttrib3fv(z.location,q);break;case 4:n.vertexAttrib4fv(z.location,q);break;default:n.vertexAttrib1fv(z.location,q)}}}}O()}function b(){ne();for(const H in u){const Q=u[H];for(const se in Q){const re=Q[se];for(const X in re)E(re[X].object),delete re[X];delete Q[se]}delete u[H]}}function N(H){if(u[H.id]===void 0)return;const Q=u[H.id];for(const se in Q){const re=Q[se];for(const X in re)E(re[X].object),delete re[X];delete Q[se]}delete u[H.id]}function ae(H){for(const Q in u){const se=u[Q];if(se[H.id]===void 0)continue;const re=se[H.id];for(const X in re)E(re[X].object),delete re[X];delete se[H.id]}}function ne(){pe(),p=!0,h!==d&&(h=d,S(h.object))}function pe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:ne,resetDefaultState:pe,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfProgram:ae,initAttributes:M,enableAttribute:R,disableUnusedAttributes:O}}function oN(n,e,t,i){const a=i.isWebGL2;let s;function c(p){s=p}function u(p,v){n.drawArrays(s,p,v),t.update(v,s,1)}function d(p,v,g){if(g===0)return;let S,E;if(a)S=n,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](s,p,v,g),t.update(v,s,g)}function h(p,v,g){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g;E++)this.render(p[E],v[E]);else{S.multiDrawArraysWEBGL(s,p,0,v,0,g);let E=0;for(let w=0;w<g;w++)E+=v[w];t.update(E,s,1)}}this.setMode=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function aN(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=s(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),w=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,R=c||e.has("OES_texture_float"),I=M&&R,O=c?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:s,precision:u,logarithmicDepthBuffer:p,maxTextures:v,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:I,maxSamples:O}}function sN(n){const e=this;let t=null,i=0,a=!1,s=!1;const c=new lo,u=new Et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||i!==0||a;return a=g,i=v.length,S},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,_=n.get(v);if(!a||E===null||E.length===0||s&&!x)s?p(null):h();else{const C=s?0:i,M=C*4;let R=_.clippingState||null;d.value=R,R=p(E,g,M,S);for(let I=0;I!==M;++I)R[I]=t[I];_.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,g,S,E){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=d.value,E!==!0||x===null){const _=S+w*4,C=g.matrixWorldInverse;u.getNormalMatrix(C),(x===null||x.length<_)&&(x=new Float32Array(_));for(let M=0,R=S;M!==w;++M,R+=4)c.copy(v[M]).applyMatrix4(C,u),c.normal.toArray(x,R),x[R+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function lN(n){let e=new WeakMap;function t(c,u){return u===Ap?c.mapping=ps:u===Tp&&(c.mapping=ms),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Ap||u===Tp)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new x3(d.height/2);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uN extends DE{constructor(e=-1,t=1,i=1,a=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,c=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,c=s+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,B0=[.125,.215,.35,.446,.526,.582],Jo=20,Vh=new uN,H0=new nt;let Gh=null,Wh=0,$h=0;const Ko=(1+Math.sqrt(5))/2,Qa=1/Ko,V0=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Ko,Qa),new B(0,Ko,-Qa),new B(Qa,0,Ko),new B(-Qa,0,Ko),new B(Ko,Qa,0),new B(-Ko,Qa,0)];class G0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Wh,$h),e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mr,minFilter:Mr,generateMipmaps:!1,type:Tl,format:Ar,colorSpace:Li,depthBuffer:!1},a=W0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cN(s)),this._blurMaterial=fN(s,e,t)}return a}_compileMaterial(e){const t=new jr(this._lodPlanes[0],e);this._renderer.compile(t,Vh)}_sceneToCubeUV(e,t,i,a){const u=new pr(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,g=p.toneMapping;p.getClearColor(H0),p.toneMapping=vo,p.autoClear=!1;const S=new CE({name:"PMREM.Background",side:or,depthWrite:!1,depthTest:!1}),E=new jr(new Gl,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(H0),w=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(u.up.set(0,d[_],0),u.lookAt(h[_],0,0)):C===1?(u.up.set(0,0,d[_]),u.lookAt(0,h[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,h[_]));const M=this._cubeSize;Mc(a,C*M,_>2?M:0,M,M),p.setRenderTarget(a),w&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=v,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ps||e.mapping===ms;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$0());const s=a?this._cubemapMaterial:this._equirectMaterial,c=new jr(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const d=this._cubeSize;Mc(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Vh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=V0[(a-1)%V0.length];this._blur(e,a-1,a,s,c)}t.autoClear=i}_blur(e,t,i,a,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",s),this._halfBlur(c,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,v=new jr(this._lodPlanes[a],h),g=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*Jo-1),w=s/E,x=isFinite(s)?1+Math.floor(p*w):Jo;x>Jo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Jo}`);const _=[];let C=0;for(let F=0;F<Jo;++F){const de=F/w,b=Math.exp(-de*de/2);_.push(b),F===0?C+=b:F<x&&(C+=2*b)}for(let F=0;F<_.length;F++)_[F]=_[F]/C;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=E,g.mipInt.value=M-i;const R=this._sizeLods[a],I=3*R*(a>M-ts?a-M+ts:0),O=4*(this._cubeSize-R);Mc(t,I,O,3*R,2*R),d.setRenderTarget(t),d.render(v,Vh)}}function cN(n){const e=[],t=[],i=[];let a=n;const s=n-ts+1+B0.length;for(let c=0;c<s;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>n-ts?d=B0[c-n+ts-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],S=6,E=6,w=3,x=2,_=1,C=new Float32Array(w*E*S),M=new Float32Array(x*E*S),R=new Float32Array(_*E*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,de=O>2?0:-1,b=[F,de,0,F+2/3,de,0,F+2/3,de+1,0,F,de,0,F+2/3,de+1,0,F,de+1,0];C.set(b,w*E*O),M.set(g,x*E*O);const N=[O,O,O,O,O,O];R.set(N,_*E*O)}const I=new Bn;I.setAttribute("position",new mr(C,w)),I.setAttribute("uv",new mr(M,x)),I.setAttribute("faceIndex",new mr(R,_)),e.push(I),a>ts&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function W0(n,e,t){const i=new oa(n,e,t);return i.texture.mapping=gf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mc(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function fN(n,e,t){const i=new Float32Array(Jo),a=new B(0,1,0);return new Eo({name:"SphericalGaussianBlur",defines:{n:Jo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Fm(),fragmentShader:`

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
		`,blending:mo,depthTest:!1,depthWrite:!1})}function $0(){return new Eo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fm(),fragmentShader:`

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
		`,blending:mo,depthTest:!1,depthWrite:!1})}function X0(){return new Eo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mo,depthTest:!1,depthWrite:!1})}function Fm(){return`

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
	`}function dN(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===Ap||d===Tp,p=d===ps||d===ms;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let v=e.get(u);return t===null&&(t=new G0(n)),v=h?t.fromEquirectangular(u,v):t.fromCubemap(u,v),e.set(u,v),v.texture}else{if(e.has(u))return e.get(u).texture;{const v=u.image;if(h&&v&&v.height>0||p&&v&&a(v)){t===null&&(t=new G0(n));const g=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",s),g.texture}else return null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function s(u){const d=u.target;d.removeEventListener("dispose",s);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function hN(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function pN(n,e,t,i){const a={},s=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const w=g.morphAttributes[E];for(let x=0,_=w.length;x<_;x++)e.remove(w[x])}g.removeEventListener("dispose",c),delete a[g.id];const S=s.get(g);S&&(e.remove(S),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const E in g)e.update(g[E],n.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const w=S[E];for(let x=0,_=w.length;x<_;x++)e.update(w[x],n.ARRAY_BUFFER)}}function h(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const C=S.array;w=S.version;for(let M=0,R=C.length;M<R;M+=3){const I=C[M+0],O=C[M+1],F=C[M+2];g.push(I,O,O,F,F,I)}}else if(E!==void 0){const C=E.array;w=E.version;for(let M=0,R=C.length/3-1;M<R;M+=3){const I=M+0,O=M+1,F=M+2;g.push(I,O,O,F,F,I)}}else return;const x=new(EE(g)?PE:RE)(g,1);x.version=w;const _=s.get(v);_&&e.remove(_),s.set(v,x)}function p(v){const g=s.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&h(v)}else h(v);return s.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function mN(n,e,t,i){const a=i.isWebGL2;let s;function c(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function p(S,E){n.drawElements(s,E,u,S*d),t.update(E,s,1)}function v(S,E,w){if(w===0)return;let x,_;if(a)x=n,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](s,E,u,S*d,w),t.update(E,s,w)}function g(S,E,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<w;_++)this.render(S[_]/d,E[_]);else{x.multiDrawElementsWEBGL(s,E,0,u,S,0,w);let _=0;for(let C=0;C<w;C++)_+=E[C];t.update(_,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=v,this.renderMultiDraw=g}function vN(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(s/3);break;case n.LINES:t.lines+=u*(s/2);break;case n.LINE_STRIP:t.lines+=u*(s-1);break;case n.LINE_LOOP:t.lines+=u*s;break;case n.POINTS:t.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function gN(n,e){return n[0]-e[0]}function _N(n,e){return Math.abs(e[1])-Math.abs(n[1])}function yN(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,c=new Ot,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function d(h,p,v){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=E!==void 0?E.length:0;let x=s.get(p);if(x===void 0||x.count!==w){let Q=function(){pe.dispose(),s.delete(p),p.removeEventListener("dispose",Q)};var S=Q;x!==void 0&&x.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,I=p.morphAttributes.color!==void 0,O=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],de=p.morphAttributes.color||[];let b=0;M===!0&&(b=1),R===!0&&(b=2),I===!0&&(b=3);let N=p.attributes.position.count*b,ae=1;N>e.maxTextureSize&&(ae=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const ne=new Float32Array(N*ae*4*w),pe=new AE(ne,N,ae,w);pe.type=Ri,pe.needsUpdate=!0;const H=b*4;for(let se=0;se<w;se++){const re=O[se],X=F[se],ie=de[se],$=N*ae*4*se;for(let P=0;P<re.count;P++){const z=P*H;M===!0&&(c.fromBufferAttribute(re,P),ne[$+z+0]=c.x,ne[$+z+1]=c.y,ne[$+z+2]=c.z,ne[$+z+3]=0),R===!0&&(c.fromBufferAttribute(X,P),ne[$+z+4]=c.x,ne[$+z+5]=c.y,ne[$+z+6]=c.z,ne[$+z+7]=0),I===!0&&(c.fromBufferAttribute(ie,P),ne[$+z+8]=c.x,ne[$+z+9]=c.y,ne[$+z+10]=c.z,ne[$+z+11]=ie.itemSize===4?c.w:1)}}x={count:w,texture:pe,size:new ht(N,ae)},s.set(p,x),p.addEventListener("dispose",Q)}let _=0;for(let M=0;M<g.length;M++)_+=g[M];const C=p.morphTargetsRelative?1:1-_;v.getUniforms().setValue(n,"morphTargetBaseInfluence",C),v.getUniforms().setValue(n,"morphTargetInfluences",g),v.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),v.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const E=g===void 0?0:g.length;let w=i[p.id];if(w===void 0||w.length!==E){w=[];for(let R=0;R<E;R++)w[R]=[R,0];i[p.id]=w}for(let R=0;R<E;R++){const I=w[R];I[0]=R,I[1]=g[R]}w.sort(_N);for(let R=0;R<8;R++)R<E&&w[R][1]?(u[R][0]=w[R][0],u[R][1]=w[R][1]):(u[R][0]=Number.MAX_SAFE_INTEGER,u[R][1]=0);u.sort(gN);const x=p.morphAttributes.position,_=p.morphAttributes.normal;let C=0;for(let R=0;R<8;R++){const I=u[R],O=I[0],F=I[1];O!==Number.MAX_SAFE_INTEGER&&F?(x&&p.getAttribute("morphTarget"+R)!==x[O]&&p.setAttribute("morphTarget"+R,x[O]),_&&p.getAttribute("morphNormal"+R)!==_[O]&&p.setAttribute("morphNormal"+R,_[O]),a[R]=F,C+=F):(x&&p.hasAttribute("morphTarget"+R)===!0&&p.deleteAttribute("morphTarget"+R),_&&p.hasAttribute("morphNormal"+R)===!0&&p.deleteAttribute("morphNormal"+R),a[R]=0)}const M=p.morphTargetsRelative?1:1-C;v.getUniforms().setValue(n,"morphTargetBaseInfluence",M),v.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:d}}function xN(n,e,t,i){let a=new WeakMap;function s(d){const h=i.render.frame,p=d.geometry,v=e.get(d,p);if(a.get(v)!==h&&(e.update(v),a.set(v,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return v}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:c}}class NE extends ar{constructor(e,t,i,a,s,c,u,d,h,p){if(p=p!==void 0?p:ra,p!==ra&&p!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ra&&(i=co),i===void 0&&p===vs&&(i=na),super(null,a,s,c,u,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Tn,this.minFilter=d!==void 0?d:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const FE=new ar,OE=new NE(1,1);OE.compareFunction=xE;const zE=new AE,kE=new i3,BE=new IE,j0=[],Y0=[],q0=new Float32Array(16),K0=new Float32Array(9),Z0=new Float32Array(4);function Ss(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=j0[a];if(s===void 0&&(s=new Float32Array(a),j0[a]=s),e!==0){i.toArray(s,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(s,u)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xf(n,e){let t=Y0[e];t===void 0&&(t=new Int32Array(e),Y0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function EN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function wN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function MN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function AN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;Z0.set(i),n.uniformMatrix2fv(this.addr,!1,Z0),pn(t,i)}}function TN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;K0.set(i),n.uniformMatrix3fv(this.addr,!1,K0),pn(t,i)}}function bN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;q0.set(i),n.uniformMatrix4fv(this.addr,!1,q0),pn(t,i)}}function CN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function PN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function LN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function DN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function IN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function UN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function NN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function FN(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?OE:FE;t.setTexture2D(e||s,a)}function ON(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||kE,a)}function zN(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||BE,a)}function kN(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||zE,a)}function BN(n){switch(n){case 5126:return SN;case 35664:return EN;case 35665:return wN;case 35666:return MN;case 35674:return AN;case 35675:return TN;case 35676:return bN;case 5124:case 35670:return CN;case 35667:case 35671:return RN;case 35668:case 35672:return PN;case 35669:case 35673:return LN;case 5125:return DN;case 36294:return IN;case 36295:return UN;case 36296:return NN;case 35678:case 36198:case 36298:case 36306:case 35682:return FN;case 35679:case 36299:case 36307:return ON;case 35680:case 36300:case 36308:case 36293:return zN;case 36289:case 36303:case 36311:case 36292:return kN}}function HN(n,e){n.uniform1fv(this.addr,e)}function VN(n,e){const t=Ss(e,this.size,2);n.uniform2fv(this.addr,t)}function GN(n,e){const t=Ss(e,this.size,3);n.uniform3fv(this.addr,t)}function WN(n,e){const t=Ss(e,this.size,4);n.uniform4fv(this.addr,t)}function $N(n,e){const t=Ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XN(n,e){const t=Ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jN(n,e){const t=Ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function YN(n,e){n.uniform1iv(this.addr,e)}function qN(n,e){n.uniform2iv(this.addr,e)}function KN(n,e){n.uniform3iv(this.addr,e)}function ZN(n,e){n.uniform4iv(this.addr,e)}function JN(n,e){n.uniform1uiv(this.addr,e)}function QN(n,e){n.uniform2uiv(this.addr,e)}function eF(n,e){n.uniform3uiv(this.addr,e)}function tF(n,e){n.uniform4uiv(this.addr,e)}function nF(n,e,t){const i=this.cache,a=e.length,s=xf(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||FE,s[c])}function rF(n,e,t){const i=this.cache,a=e.length,s=xf(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||kE,s[c])}function iF(n,e,t){const i=this.cache,a=e.length,s=xf(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||BE,s[c])}function oF(n,e,t){const i=this.cache,a=e.length,s=xf(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||zE,s[c])}function aF(n){switch(n){case 5126:return HN;case 35664:return VN;case 35665:return GN;case 35666:return WN;case 35674:return $N;case 35675:return XN;case 35676:return jN;case 5124:case 35670:return YN;case 35667:case 35671:return qN;case 35668:case 35672:return KN;case 35669:case 35673:return ZN;case 5125:return JN;case 36294:return QN;case 36295:return eF;case 36296:return tF;case 35678:case 36198:case 36298:case 36306:case 35682:return nF;case 35679:case 36299:case 36307:return rF;case 35680:case 36300:case 36308:case 36293:return iF;case 36289:case 36303:case 36311:case 36292:return oF}}class sF{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BN(t.type)}}class lF{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aF(t.type)}}class uF{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,c=a.length;s!==c;++s){const u=a[s];u.setValue(e,t[u.id],i)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function J0(n,e){n.seq.push(e),n.map[e.id]=e}function cF(n,e,t){const i=n.name,a=i.length;for(Xh.lastIndex=0;;){const s=Xh.exec(i),c=Xh.lastIndex;let u=s[1];const d=s[2]==="]",h=s[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){J0(t,h===void 0?new sF(u,n,e):new lF(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new uF(u),J0(t,v)),t=v}}}class Oc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);cF(s,c,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,c=t.length;s!==c;++s){const u=t[s],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Q0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fF=37297;let dF=0;function hF(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=a;c<s;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function pF(n){const e=Ft.getPrimaries(Ft.workingColorSpace),t=Ft.getPrimaries(n);let i;switch(e===t?i="":e===$c&&t===Wc?i="LinearDisplayP3ToLinearSRGB":e===Wc&&t===$c&&(i="LinearSRGBToLinearDisplayP3"),n){case Li:case _f:return[i,"LinearTransferOETF"];case bn:case Lm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ey(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+hF(n.getShaderSource(e),c)}else return a}function mF(n,e){const t=pF(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vF(n,e){let t;switch(e){case mD:t="Linear";break;case vD:t="Reinhard";break;case gD:t="OptimizedCineon";break;case _D:t="ACESFilmic";break;case yD:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gF(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ul).join(`
`)}function _F(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yF(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),c=s.name;let u=1;s.type===n.FLOAT_MAT2&&(u=2),s.type===n.FLOAT_MAT3&&(u=3),s.type===n.FLOAT_MAT4&&(u=4),t[c]={type:s.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function ul(n){return n!==""}function ty(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ny(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xF=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(n){return n.replace(xF,EF)}const SF=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function EF(n,e){let t=xt[e];if(t===void 0){const i=SF.get(e);if(i!==void 0)t=xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dp(t)}const wF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ry(n){return n.replace(wF,MF)}function MF(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function iy(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AF(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===G2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function TF(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case gf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bF(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function CF(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rm:e="ENVMAP_BLENDING_MULTIPLY";break;case hD:e="ENVMAP_BLENDING_MIX";break;case pD:e="ENVMAP_BLENDING_ADD";break}return e}function RF(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PF(n,e,t,i){const a=n.getContext(),s=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=AF(t),h=TF(t),p=bF(t),v=CF(t),g=RF(t),S=t.isWebGL2?"":gF(t),E=_F(s),w=a.createProgram();let x,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ul).join(`
`),x.length>0&&(x+=`
`),_=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ul).join(`
`),_.length>0&&(_+=`
`)):(x=[iy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),_=[S,iy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vo?"#define TONE_MAPPING":"",t.toneMapping!==vo?xt.tonemapping_pars_fragment:"",t.toneMapping!==vo?vF("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,mF("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ul).join(`
`)),c=Dp(c),c=ty(c,t),c=ny(c,t),u=Dp(u),u=ty(u,t),u=ny(u,t),c=ry(c),u=ry(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===E0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===E0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=C+x+c,R=C+_+u,I=Q0(a,a.VERTEX_SHADER,M),O=Q0(a,a.FRAGMENT_SHADER,R);a.attachShader(w,I),a.attachShader(w,O),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(ae){if(n.debug.checkShaderErrors){const ne=a.getProgramInfoLog(w).trim(),pe=a.getShaderInfoLog(I).trim(),H=a.getShaderInfoLog(O).trim();let Q=!0,se=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,w,I,O);else{const re=ey(a,I,"vertex"),X=ey(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+re+`
`+X)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(pe===""||H==="")&&(se=!1);se&&(ae.diagnostics={runnable:Q,programLog:ne,vertexShader:{log:pe,prefix:x},fragmentShader:{log:H,prefix:_}})}a.deleteShader(I),a.deleteShader(O),de=new Oc(a,w),b=yF(a,w)}let de;this.getUniforms=function(){return de===void 0&&F(this),de};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(w,fF)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dF++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=O,this}let LF=0;class DF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IF(e),t.set(e,i)),i}}class IF{constructor(e){this.id=LF++,this.code=e,this.usedTimes=0}}function UF(n,e,t,i,a,s,c){const u=new TE,d=new DF,h=[],p=a.isWebGL2,v=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return b===0?"uv":`uv${b}`}function x(b,N,ae,ne,pe){const H=ne.fog,Q=pe.geometry,se=b.isMeshStandardMaterial?ne.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),X=re&&re.mapping===gf?re.image.height:null,ie=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const $=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,P=$!==void 0?$.length:0;let z=0;Q.morphAttributes.position!==void 0&&(z=1),Q.morphAttributes.normal!==void 0&&(z=2),Q.morphAttributes.color!==void 0&&(z=3);let W,q,ee,Z;if(ie){const vn=rr[ie];W=vn.vertexShader,q=vn.fragmentShader}else W=b.vertexShader,q=b.fragmentShader,d.update(b),ee=d.getVertexShaderID(b),Z=d.getFragmentShaderID(b);const _e=n.getRenderTarget(),ve=pe.isInstancedMesh===!0,be=pe.isBatchedMesh===!0,Fe=!!b.map,Oe=!!b.matcap,j=!!re,Lt=!!b.aoMap,Be=!!b.lightMap,le=!!b.bumpMap,ue=!!b.normalMap,xe=!!b.displacementMap,ge=!!b.emissiveMap,Me=!!b.metalnessMap,we=!!b.roughnessMap,Ie=b.anisotropy>0,Ze=b.clearcoat>0,D=b.iridescence>0,T=b.sheen>0,Y=b.transmission>0,Ae=Ie&&!!b.anisotropyMap,ye=Ze&&!!b.clearcoatMap,Ce=Ze&&!!b.clearcoatNormalMap,qe=Ze&&!!b.clearcoatRoughnessMap,De=D&&!!b.iridescenceMap,ke=D&&!!b.iridescenceThicknessMap,lt=T&&!!b.sheenColorMap,Mt=T&&!!b.sheenRoughnessMap,Le=!!b.specularMap,Dt=!!b.specularColorMap,ft=!!b.specularIntensityMap,st=Y&&!!b.transmissionMap,et=Y&&!!b.thicknessMap,$e=!!b.gradientMap,_t=!!b.alphaMap,V=b.alphaTest>0,ze=!!b.alphaHash,Re=!!b.extensions,me=!!Q.attributes.uv1,Ue=!!Q.attributes.uv2,ot=!!Q.attributes.uv3;let wt=vo;return b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(wt=n.toneMapping),{isWebGL2:p,shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:q,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:be,instancing:ve,instancingColor:ve&&pe.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Li,map:Fe,matcap:Oe,envMap:j,envMapMode:j&&re.mapping,envMapCubeUVHeight:X,aoMap:Lt,lightMap:Be,bumpMap:le,normalMap:ue,displacementMap:g&&xe,emissiveMap:ge,normalMapObjectSpace:ue&&b.normalMapType===LD,normalMapTangentSpace:ue&&b.normalMapType===yE,metalnessMap:Me,roughnessMap:we,anisotropy:Ie,anisotropyMap:Ae,clearcoat:Ze,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:qe,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:ke,sheen:T,sheenColorMap:lt,sheenRoughnessMap:Mt,specularMap:Le,specularColorMap:Dt,specularIntensityMap:ft,transmission:Y,transmissionMap:st,thicknessMap:et,gradientMap:$e,opaque:b.transparent===!1&&b.blending===os,alphaMap:_t,alphaTest:V,alphaHash:ze,combine:b.combine,mapUv:Fe&&w(b.map.channel),aoMapUv:Lt&&w(b.aoMap.channel),lightMapUv:Be&&w(b.lightMap.channel),bumpMapUv:le&&w(b.bumpMap.channel),normalMapUv:ue&&w(b.normalMap.channel),displacementMapUv:xe&&w(b.displacementMap.channel),emissiveMapUv:ge&&w(b.emissiveMap.channel),metalnessMapUv:Me&&w(b.metalnessMap.channel),roughnessMapUv:we&&w(b.roughnessMap.channel),anisotropyMapUv:Ae&&w(b.anisotropyMap.channel),clearcoatMapUv:ye&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&w(b.sheenRoughnessMap.channel),specularMapUv:Le&&w(b.specularMap.channel),specularColorMapUv:Dt&&w(b.specularColorMap.channel),specularIntensityMapUv:ft&&w(b.specularIntensityMap.channel),transmissionMapUv:st&&w(b.transmissionMap.channel),thicknessMapUv:et&&w(b.thicknessMap.channel),alphaMapUv:_t&&w(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ue||Ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:Ue,vertexUv3s:ot,pointsUvs:pe.isPoints===!0&&!!Q.attributes.uv&&(Fe||_t),fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:pe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:z,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&ae.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&b.map.isVideoTexture===!0&&Ft.getTransfer(b.map.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ci,flipSided:b.side===or,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Re&&b.extensions.derivatives===!0,extensionFragDepth:Re&&b.extensions.fragDepth===!0,extensionDrawBuffers:Re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function _(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ae in b.defines)N.push(ae),N.push(b.defines[ae]);return b.isRawShaderMaterial===!1&&(C(N,b),M(N,b),N.push(n.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function C(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function M(b,N){u.disableAll(),N.isWebGL2&&u.enable(0),N.supportsVertexTextures&&u.enable(1),N.instancing&&u.enable(2),N.instancingColor&&u.enable(3),N.matcap&&u.enable(4),N.envMap&&u.enable(5),N.normalMapObjectSpace&&u.enable(6),N.normalMapTangentSpace&&u.enable(7),N.clearcoat&&u.enable(8),N.iridescence&&u.enable(9),N.alphaTest&&u.enable(10),N.vertexColors&&u.enable(11),N.vertexAlphas&&u.enable(12),N.vertexUv1s&&u.enable(13),N.vertexUv2s&&u.enable(14),N.vertexUv3s&&u.enable(15),N.vertexTangents&&u.enable(16),N.anisotropy&&u.enable(17),N.alphaHash&&u.enable(18),N.batching&&u.enable(19),b.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.skinning&&u.enable(4),N.morphTargets&&u.enable(5),N.morphNormals&&u.enable(6),N.morphColors&&u.enable(7),N.premultipliedAlpha&&u.enable(8),N.shadowMapEnabled&&u.enable(9),N.useLegacyLights&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),b.push(u.mask)}function R(b){const N=E[b.type];let ae;if(N){const ne=rr[N];ae=Um.clone(ne.uniforms)}else ae=b.uniforms;return ae}function I(b,N){let ae;for(let ne=0,pe=h.length;ne<pe;ne++){const H=h[ne];if(H.cacheKey===N){ae=H,++ae.usedTimes;break}}return ae===void 0&&(ae=new PF(n,N,b,s),h.push(ae)),ae}function O(b){if(--b.usedTimes===0){const N=h.indexOf(b);h[N]=h[h.length-1],h.pop(),b.destroy()}}function F(b){d.remove(b)}function de(){d.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:R,acquireProgram:I,releaseProgram:O,releaseShaderCache:F,programs:h,dispose:de}}function NF(){let n=new WeakMap;function e(s){let c=n.get(s);return c===void 0&&(c={},n.set(s,c)),c}function t(s){n.delete(s)}function i(s,c,u){n.get(s)[c]=u}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function FF(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function oy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ay(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function c(v,g,S,E,w,x){let _=n[e];return _===void 0?(_={id:v.id,object:v,geometry:g,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:x},n[e]=_):(_.id=v.id,_.object=v,_.geometry=g,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=w,_.group=x),e++,_}function u(v,g,S,E,w,x){const _=c(v,g,S,E,w,x);S.transmission>0?i.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(v,g,S,E,w,x){const _=c(v,g,S,E,w,x);S.transmission>0?i.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(v,g){t.length>1&&t.sort(v||FF),i.length>1&&i.sort(g||oy),a.length>1&&a.sort(g||oy)}function p(){for(let v=e,g=n.length;v<g;v++){const S=n[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:u,unshift:d,finish:p,sort:h}}function OF(){let n=new WeakMap;function e(i,a){const s=n.get(i);let c;return s===void 0?(c=new ay,n.set(i,[c])):a>=s.length?(c=new ay,s.push(c)):c=s[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function zF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function kF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BF=0;function HF(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VF(n,e){const t=new zF,i=kF(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new B);const s=new B,c=new Gt,u=new Gt;function d(p,v){let g=0,S=0,E=0;for(let ne=0;ne<9;ne++)a.probe[ne].set(0,0,0);let w=0,x=0,_=0,C=0,M=0,R=0,I=0,O=0,F=0,de=0,b=0;p.sort(HF);const N=v===!0?Math.PI:1;for(let ne=0,pe=p.length;ne<pe;ne++){const H=p[ne],Q=H.color,se=H.intensity,re=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Q.r*se*N,S+=Q.g*se*N,E+=Q.b*se*N;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(H.sh.coefficients[ie],se);b++}else if(H.isDirectionalLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*N),H.castShadow){const $=H.shadow,P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,a.directionalShadow[w]=P,a.directionalShadowMap[w]=X,a.directionalShadowMatrix[w]=H.shadow.matrix,R++}a.directional[w]=ie,w++}else if(H.isSpotLight){const ie=t.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(Q).multiplyScalar(se*N),ie.distance=re,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,a.spot[_]=ie;const $=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,$.updateMatrices(H),H.castShadow&&de++),a.spotLightMatrix[_]=$.matrix,H.castShadow){const P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,a.spotShadow[_]=P,a.spotShadowMap[_]=X,O++}_++}else if(H.isRectAreaLight){const ie=t.get(H);ie.color.copy(Q).multiplyScalar(se),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),a.rectArea[C]=ie,C++}else if(H.isPointLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*N),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const $=H.shadow,P=i.get(H);P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,P.shadowCameraNear=$.camera.near,P.shadowCameraFar=$.camera.far,a.pointShadow[x]=P,a.pointShadowMap[x]=X,a.pointShadowMatrix[x]=H.shadow.matrix,I++}a.point[x]=ie,x++}else if(H.isHemisphereLight){const ie=t.get(H);ie.skyColor.copy(H.color).multiplyScalar(se*N),ie.groundColor.copy(H.groundColor).multiplyScalar(se*N),a.hemi[M]=ie,M++}}C>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=S,a.ambient[2]=E;const ae=a.hash;(ae.directionalLength!==w||ae.pointLength!==x||ae.spotLength!==_||ae.rectAreaLength!==C||ae.hemiLength!==M||ae.numDirectionalShadows!==R||ae.numPointShadows!==I||ae.numSpotShadows!==O||ae.numSpotMaps!==F||ae.numLightProbes!==b)&&(a.directional.length=w,a.spot.length=_,a.rectArea.length=C,a.point.length=x,a.hemi.length=M,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=I,a.pointShadowMap.length=I,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=I,a.spotLightMatrix.length=O+F-de,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=de,a.numLightProbes=b,ae.directionalLength=w,ae.pointLength=x,ae.spotLength=_,ae.rectAreaLength=C,ae.hemiLength=M,ae.numDirectionalShadows=R,ae.numPointShadows=I,ae.numSpotShadows=O,ae.numSpotMaps=F,ae.numLightProbes=b,a.version=BF++)}function h(p,v){let g=0,S=0,E=0,w=0,x=0;const _=v.matrixWorldInverse;for(let C=0,M=p.length;C<M;C++){const R=p[C];if(R.isDirectionalLight){const I=a.directional[g];I.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(_),g++}else if(R.isSpotLight){const I=a.spot[E];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(_),E++}else if(R.isRectAreaLight){const I=a.rectArea[w];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),u.identity(),c.copy(R.matrixWorld),c.premultiply(_),u.extractRotation(c),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),w++}else if(R.isPointLight){const I=a.point[S];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),S++}else if(R.isHemisphereLight){const I=a.hemi[x];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(_),x++}}}return{setup:d,setupView:h,state:a}}function sy(n,e){const t=new VF(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function c(v){i.push(v)}function u(v){a.push(v)}function d(v){t.setup(i,v)}function h(v){t.setupView(i,v)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function GF(n,e){let t=new WeakMap;function i(s,c=0){const u=t.get(s);let d;return u===void 0?(d=new sy(n,e),t.set(s,[d])):c>=u.length?(d=new sy(n,e),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:i,dispose:a}}class WF extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $F extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jF=`uniform sampler2D shadow_pass;
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
}`;function YF(n,e,t){let i=new yf;const a=new ht,s=new ht,c=new Ot,u=new WF({depthPacking:PD}),d=new $F,h={},p=t.maxTextureSize,v={[So]:or,[or]:So,[Ci]:Ci},g=new Eo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:XF,fragmentShader:jF}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Bn;E.setAttribute("position",new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new jr(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uE;let _=this.type;this.render=function(I,O,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const de=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(mo),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ne=_!==bi&&this.type===bi,pe=_===bi&&this.type!==bi;for(let H=0,Q=I.length;H<Q;H++){const se=I[H],re=se.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);const X=re.getFrameExtents();if(a.multiply(X),s.copy(re.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(s.x=Math.floor(p/X.x),a.x=s.x*X.x,re.mapSize.x=s.x),a.y>p&&(s.y=Math.floor(p/X.y),a.y=s.y*X.y,re.mapSize.y=s.y)),re.map===null||ne===!0||pe===!0){const $=this.type!==bi?{minFilter:Tn,magFilter:Tn}:{};re.map!==null&&re.map.dispose(),re.map=new oa(a.x,a.y,$),re.map.texture.name=se.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();const ie=re.getViewportCount();for(let $=0;$<ie;$++){const P=re.getViewport($);c.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),ae.viewport(c),re.updateMatrices(se,$),i=re.getFrustum(),R(O,F,re.camera,se,this.type)}re.isPointLightShadow!==!0&&this.type===bi&&C(re,F),re.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(de,b,N)};function C(I,O){const F=e.update(w);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new oa(a.x,a.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(O,null,F,g,w,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(O,null,F,S,w,null)}function M(I,O,F,de){let b=null;const N=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)b=N;else if(b=F.isPointLight===!0?d:u,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ae=b.uuid,ne=O.uuid;let pe=h[ae];pe===void 0&&(pe={},h[ae]=pe);let H=pe[ne];H===void 0&&(H=b.clone(),pe[ne]=H),b=H}if(b.visible=O.visible,b.wireframe=O.wireframe,de===bi?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:v[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ae=n.properties.get(b);ae.light=F}return b}function R(I,O,F,de,b){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===bi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const ne=e.update(I),pe=I.material;if(Array.isArray(pe)){const H=ne.groups;for(let Q=0,se=H.length;Q<se;Q++){const re=H[Q],X=pe[re.materialIndex];if(X&&X.visible){const ie=M(I,X,de,b);I.onBeforeShadow(n,I,O,F,ne,ie,re),n.renderBufferDirect(F,null,ne,ie,I,re),I.onAfterShadow(n,I,O,F,ne,ie,re)}}}else if(pe.visible){const H=M(I,pe,de,b);I.onBeforeShadow(n,I,O,F,ne,H,null),n.renderBufferDirect(F,null,ne,H,I,null),I.onAfterShadow(n,I,O,F,ne,H,null)}}const ae=I.children;for(let ne=0,pe=ae.length;ne<pe;ne++)R(ae[ne],O,F,de,b)}}function qF(n,e,t){const i=t.isWebGL2;function a(){let V=!1;const ze=new Ot;let Re=null;const me=new Ot(0,0,0,0);return{setMask:function(Ue){Re!==Ue&&!V&&(n.colorMask(Ue,Ue,Ue,Ue),Re=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,ot,wt,Jt,vn){vn===!0&&(Ue*=Jt,ot*=Jt,wt*=Jt),ze.set(Ue,ot,wt,Jt),me.equals(ze)===!1&&(n.clearColor(Ue,ot,wt,Jt),me.copy(ze))},reset:function(){V=!1,Re=null,me.set(-1,0,0,0)}}}function s(){let V=!1,ze=null,Re=null,me=null;return{setTest:function(Ue){Ue?be(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(Ue){ze!==Ue&&!V&&(n.depthMask(Ue),ze=Ue)},setFunc:function(Ue){if(Re!==Ue){switch(Ue){case aD:n.depthFunc(n.NEVER);break;case sD:n.depthFunc(n.ALWAYS);break;case lD:n.depthFunc(n.LESS);break;case Vc:n.depthFunc(n.LEQUAL);break;case uD:n.depthFunc(n.EQUAL);break;case cD:n.depthFunc(n.GEQUAL);break;case fD:n.depthFunc(n.GREATER);break;case dD:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){me!==Ue&&(n.clearDepth(Ue),me=Ue)},reset:function(){V=!1,ze=null,Re=null,me=null}}}function c(){let V=!1,ze=null,Re=null,me=null,Ue=null,ot=null,wt=null,Jt=null,vn=null;return{setTest:function(Rt){V||(Rt?be(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(Rt){ze!==Rt&&!V&&(n.stencilMask(Rt),ze=Rt)},setFunc:function(Rt,cn,Pn){(Re!==Rt||me!==cn||Ue!==Pn)&&(n.stencilFunc(Rt,cn,Pn),Re=Rt,me=cn,Ue=Pn)},setOp:function(Rt,cn,Pn){(ot!==Rt||wt!==cn||Jt!==Pn)&&(n.stencilOp(Rt,cn,Pn),ot=Rt,wt=cn,Jt=Pn)},setLocked:function(Rt){V=Rt},setClear:function(Rt){vn!==Rt&&(n.clearStencil(Rt),vn=Rt)},reset:function(){V=!1,ze=null,Re=null,me=null,Ue=null,ot=null,wt=null,Jt=null,vn=null}}}const u=new a,d=new s,h=new c,p=new WeakMap,v=new WeakMap;let g={},S={},E=new WeakMap,w=[],x=null,_=!1,C=null,M=null,R=null,I=null,O=null,F=null,de=null,b=new nt(0,0,0),N=0,ae=!1,ne=null,pe=null,H=null,Q=null,se=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ie>=2);let P=null,z={};const W=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ee=new Ot().fromArray(W),Z=new Ot().fromArray(q);function _e(V,ze,Re,me){const Ue=new Uint8Array(4),ot=n.createTexture();n.bindTexture(V,ot),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<Re;wt++)i&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(ze,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(ze+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return ot}const ve={};ve[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(n.DEPTH_TEST),d.setFunc(Vc),ge(!1),Me(G_),be(n.CULL_FACE),ue(mo);function be(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Fe(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function Oe(V,ze){return S[V]!==ze?(n.bindFramebuffer(V,ze),S[V]=ze,i&&(V===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=ze),V===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=ze)),!0):!1}function j(V,ze){let Re=w,me=!1;if(V)if(Re=E.get(ze),Re===void 0&&(Re=[],E.set(ze,Re)),V.isWebGLMultipleRenderTargets){const Ue=V.texture;if(Re.length!==Ue.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,wt=Ue.length;ot<wt;ot++)Re[ot]=n.COLOR_ATTACHMENT0+ot;Re.length=Ue.length,me=!0}}else Re[0]!==n.COLOR_ATTACHMENT0&&(Re[0]=n.COLOR_ATTACHMENT0,me=!0);else Re[0]!==n.BACK&&(Re[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Lt(V){return x!==V?(n.useProgram(V),x=V,!0):!1}const Be={[Zo]:n.FUNC_ADD,[$2]:n.FUNC_SUBTRACT,[X2]:n.FUNC_REVERSE_SUBTRACT};if(i)Be[j_]=n.MIN,Be[Y_]=n.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Be[j_]=V.MIN_EXT,Be[Y_]=V.MAX_EXT)}const le={[j2]:n.ZERO,[Y2]:n.ONE,[q2]:n.SRC_COLOR,[wp]:n.SRC_ALPHA,[tD]:n.SRC_ALPHA_SATURATE,[Q2]:n.DST_COLOR,[Z2]:n.DST_ALPHA,[K2]:n.ONE_MINUS_SRC_COLOR,[Mp]:n.ONE_MINUS_SRC_ALPHA,[eD]:n.ONE_MINUS_DST_COLOR,[J2]:n.ONE_MINUS_DST_ALPHA,[nD]:n.CONSTANT_COLOR,[rD]:n.ONE_MINUS_CONSTANT_COLOR,[iD]:n.CONSTANT_ALPHA,[oD]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(V,ze,Re,me,Ue,ot,wt,Jt,vn,Rt){if(V===mo){_===!0&&(Fe(n.BLEND),_=!1);return}if(_===!1&&(be(n.BLEND),_=!0),V!==W2){if(V!==C||Rt!==ae){if((M!==Zo||O!==Zo)&&(n.blendEquation(n.FUNC_ADD),M=Zo,O=Zo),Rt)switch(V){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case W_:n.blendFunc(n.ONE,n.ONE);break;case $_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case X_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case W_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case X_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,I=null,F=null,de=null,b.set(0,0,0),N=0,C=V,ae=Rt}return}Ue=Ue||ze,ot=ot||Re,wt=wt||me,(ze!==M||Ue!==O)&&(n.blendEquationSeparate(Be[ze],Be[Ue]),M=ze,O=Ue),(Re!==R||me!==I||ot!==F||wt!==de)&&(n.blendFuncSeparate(le[Re],le[me],le[ot],le[wt]),R=Re,I=me,F=ot,de=wt),(Jt.equals(b)===!1||vn!==N)&&(n.blendColor(Jt.r,Jt.g,Jt.b,vn),b.copy(Jt),N=vn),C=V,ae=!1}function xe(V,ze){V.side===Ci?Fe(n.CULL_FACE):be(n.CULL_FACE);let Re=V.side===or;ze&&(Re=!Re),ge(Re),V.blending===os&&V.transparent===!1?ue(mo):ue(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const me=V.stencilWrite;h.setTest(me),me&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){ne!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),ne=V)}function Me(V){V!==H2?(be(n.CULL_FACE),V!==pe&&(V===G_?n.cullFace(n.BACK):V===V2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),pe=V}function we(V){V!==H&&(X&&n.lineWidth(V),H=V)}function Ie(V,ze,Re){V?(be(n.POLYGON_OFFSET_FILL),(Q!==ze||se!==Re)&&(n.polygonOffset(ze,Re),Q=ze,se=Re)):Fe(n.POLYGON_OFFSET_FILL)}function Ze(V){V?be(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function D(V){V===void 0&&(V=n.TEXTURE0+re-1),P!==V&&(n.activeTexture(V),P=V)}function T(V,ze,Re){Re===void 0&&(P===null?Re=n.TEXTURE0+re-1:Re=P);let me=z[Re];me===void 0&&(me={type:void 0,texture:void 0},z[Re]=me),(me.type!==V||me.texture!==ze)&&(P!==Re&&(n.activeTexture(Re),P=Re),n.bindTexture(V,ze||ve[V]),me.type=V,me.texture=ze)}function Y(){const V=z[P];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(V){ee.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function st(V){Z.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function et(V,ze){let Re=v.get(ze);Re===void 0&&(Re=new WeakMap,v.set(ze,Re));let me=Re.get(V);me===void 0&&(me=n.getUniformBlockIndex(ze,V.name),Re.set(V,me))}function $e(V,ze){const me=v.get(ze).get(V);p.get(ze)!==me&&(n.uniformBlockBinding(ze,me,V.__bindingPointIndex),p.set(ze,me))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},P=null,z={},S={},E=new WeakMap,w=[],x=null,_=!1,C=null,M=null,R=null,I=null,O=null,F=null,de=null,b=new nt(0,0,0),N=0,ae=!1,ne=null,pe=null,H=null,Q=null,se=null,ee.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:be,disable:Fe,bindFramebuffer:Oe,drawBuffers:j,useProgram:Lt,setBlending:ue,setMaterial:xe,setFlipSided:ge,setCullFace:Me,setLineWidth:we,setPolygonOffset:Ie,setScissorTest:Ze,activeTexture:D,bindTexture:T,unbindTexture:Y,compressedTexImage2D:Ae,compressedTexImage3D:ye,texImage2D:Le,texImage3D:Dt,updateUBOMapping:et,uniformBlockBinding:$e,texStorage2D:lt,texStorage3D:Mt,texSubImage2D:Ce,texSubImage3D:qe,compressedTexSubImage2D:De,compressedTexSubImage3D:ke,scissor:ft,viewport:st,reset:_t}}function KF(n,e,t,i,a,s,c){const u=a.isWebGL2,d=a.maxTextures,h=a.maxCubemapSize,p=a.maxTextureSize,v=a.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let w;const x=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,T){return _?new OffscreenCanvas(D,T):jc("canvas")}function M(D,T,Y,Ae){let ye=1;if((D.width>Ae||D.height>Ae)&&(ye=Ae/Math.max(D.width,D.height)),ye<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Ce=T?Xc:Math.floor,qe=Ce(ye*D.width),De=Ce(ye*D.height);w===void 0&&(w=C(qe,De));const ke=Y?C(qe,De):w;return ke.width=qe,ke.height=De,ke.getContext("2d").drawImage(D,0,0,qe,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+qe+"x"+De+")."),ke}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function R(D){return Lp(D.width)&&Lp(D.height)}function I(D){return u?!1:D.wrapS!==Xr||D.wrapT!==Xr||D.minFilter!==Tn&&D.minFilter!==Mr}function O(D,T){return D.generateMipmaps&&T&&D.minFilter!==Tn&&D.minFilter!==Mr}function F(D){n.generateMipmap(D)}function de(D,T,Y,Ae,ye=!1){if(u===!1)return T;if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ce=T;if(T===n.RED&&(Y===n.FLOAT&&(Ce=n.R32F),Y===n.HALF_FLOAT&&(Ce=n.R16F),Y===n.UNSIGNED_BYTE&&(Ce=n.R8)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Ce=n.R8UI),Y===n.UNSIGNED_SHORT&&(Ce=n.R16UI),Y===n.UNSIGNED_INT&&(Ce=n.R32UI),Y===n.BYTE&&(Ce=n.R8I),Y===n.SHORT&&(Ce=n.R16I),Y===n.INT&&(Ce=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(Ce=n.RG32F),Y===n.HALF_FLOAT&&(Ce=n.RG16F),Y===n.UNSIGNED_BYTE&&(Ce=n.RG8)),T===n.RGBA){const qe=ye?Gc:Ft.getTransfer(Ae);Y===n.FLOAT&&(Ce=n.RGBA32F),Y===n.HALF_FLOAT&&(Ce=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Ce=qe===Xt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Ce=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Ce=n.RGB5_A1)}return(Ce===n.R16F||Ce===n.R32F||Ce===n.RG16F||Ce===n.RG32F||Ce===n.RGBA16F||Ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function b(D,T,Y){return O(D,Y)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==Mr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){return D===Tn||D===q_||D===yh?n.NEAREST:n.LINEAR}function ae(D){const T=D.target;T.removeEventListener("dispose",ae),pe(T),T.isVideoTexture&&E.delete(T)}function ne(D){const T=D.target;T.removeEventListener("dispose",ne),Q(T)}function pe(D){const T=i.get(D);if(T.__webglInit===void 0)return;const Y=D.source,Ae=x.get(Y);if(Ae){const ye=Ae[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(D),Object.keys(Ae).length===0&&x.delete(Y)}i.remove(D)}function H(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const Y=D.source,Ae=x.get(Y);delete Ae[T.__cacheKey],c.memory.textures--}function Q(D){const T=D.texture,Y=i.get(D),Ae=i.get(T);if(Ae.__webglTexture!==void 0&&(n.deleteTexture(Ae.__webglTexture),c.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(Y.__webglFramebuffer[ye]))for(let Ce=0;Ce<Y.__webglFramebuffer[ye].length;Ce++)n.deleteFramebuffer(Y.__webglFramebuffer[ye][Ce]);else n.deleteFramebuffer(Y.__webglFramebuffer[ye]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[ye])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ye=0;ye<Y.__webglFramebuffer.length;ye++)n.deleteFramebuffer(Y.__webglFramebuffer[ye]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ye=0;ye<Y.__webglColorRenderbuffer.length;ye++)Y.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[ye]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ye=0,Ce=T.length;ye<Ce;ye++){const qe=i.get(T[ye]);qe.__webglTexture&&(n.deleteTexture(qe.__webglTexture),c.memory.textures--),i.remove(T[ye])}i.remove(T),i.remove(D)}let se=0;function re(){se=0}function X(){const D=se;return D>=d&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+d),se+=1,D}function ie(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function $(D,T){const Y=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const Ae=D.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(Y,D,T);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function P(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){be(Y,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function z(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){be(Y,D,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function W(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Fe(Y,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}const q={[bp]:n.REPEAT,[Xr]:n.CLAMP_TO_EDGE,[Cp]:n.MIRRORED_REPEAT},ee={[Tn]:n.NEAREST,[q_]:n.NEAREST_MIPMAP_NEAREST,[yh]:n.NEAREST_MIPMAP_LINEAR,[Mr]:n.LINEAR,[xD]:n.LINEAR_MIPMAP_NEAREST,[Al]:n.LINEAR_MIPMAP_LINEAR},Z={[DD]:n.NEVER,[zD]:n.ALWAYS,[ID]:n.LESS,[xE]:n.LEQUAL,[UD]:n.EQUAL,[OD]:n.GEQUAL,[ND]:n.GREATER,[FD]:n.NOTEQUAL};function _e(D,T,Y){if(Y?(n.texParameteri(D,n.TEXTURE_WRAP_S,q[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,q[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,q[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ee[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ee[T.minFilter])):(n.texParameteri(D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==Xr||T.wrapT!==Xr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(D,n.TEXTURE_MAG_FILTER,N(T.magFilter)),n.texParameteri(D,n.TEXTURE_MIN_FILTER,N(T.minFilter)),T.minFilter!==Tn&&T.minFilter!==Mr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Tn||T.minFilter!==yh&&T.minFilter!==Al||T.type===Ri&&e.has("OES_texture_float_linear")===!1||u===!1&&T.type===Tl&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(D,Ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ve(D,T){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",ae));const Ae=T.source;let ye=x.get(Ae);ye===void 0&&(ye={},x.set(Ae,ye));const Ce=ie(T);if(Ce!==D.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ye[Ce].usedTimes++;const qe=ye[D.__cacheKey];qe!==void 0&&(ye[D.__cacheKey].usedTimes--,qe.usedTimes===0&&H(T)),D.__cacheKey=Ce,D.__webglTexture=ye[Ce].texture}return Y}function be(D,T,Y){let Ae=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ae=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ae=n.TEXTURE_3D);const ye=ve(D,T),Ce=T.source;t.bindTexture(Ae,D.__webglTexture,n.TEXTURE0+Y);const qe=i.get(Ce);if(Ce.version!==qe.__version||ye===!0){t.activeTexture(n.TEXTURE0+Y);const De=Ft.getPrimaries(Ft.workingColorSpace),ke=T.colorSpace===Tr?null:Ft.getPrimaries(T.colorSpace),lt=T.colorSpace===Tr||De===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Mt=I(T)&&R(T.image)===!1;let Le=M(T.image,Mt,!1,p);Le=Ze(T,Le);const Dt=R(Le)||u,ft=s.convert(T.format,T.colorSpace);let st=s.convert(T.type),et=de(T.internalFormat,ft,st,T.colorSpace,T.isVideoTexture);_e(Ae,T,Dt);let $e;const _t=T.mipmaps,V=u&&T.isVideoTexture!==!0&&et!==gE,ze=qe.__version===void 0||ye===!0,Re=b(T,Le,Dt);if(T.isDepthTexture)et=n.DEPTH_COMPONENT,u?T.type===Ri?et=n.DEPTH_COMPONENT32F:T.type===co?et=n.DEPTH_COMPONENT24:T.type===na?et=n.DEPTH24_STENCIL8:et=n.DEPTH_COMPONENT16:T.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ra&&et===n.DEPTH_COMPONENT&&T.type!==Pm&&T.type!==co&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=co,st=s.convert(T.type)),T.format===vs&&et===n.DEPTH_COMPONENT&&(et=n.DEPTH_STENCIL,T.type!==na&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=na,st=s.convert(T.type))),ze&&(V?t.texStorage2D(n.TEXTURE_2D,1,et,Le.width,Le.height):t.texImage2D(n.TEXTURE_2D,0,et,Le.width,Le.height,0,ft,st,null));else if(T.isDataTexture)if(_t.length>0&&Dt){V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,ft,st,$e.data);T.generateMipmaps=!1}else V?(ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,Le.width,Le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le.width,Le.height,ft,st,Le.data)):t.texImage2D(n.TEXTURE_2D,0,et,Le.width,Le.height,0,ft,st,Le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,et,_t[0].width,_t[0].height,Le.depth);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],T.format!==Ar?ft!==null?V?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Le.depth,ft,$e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,et,$e.width,$e.height,Le.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Le.depth,ft,st,$e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,et,$e.width,$e.height,Le.depth,0,ft,st,$e.data)}else{V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],T.format!==Ar?ft!==null?V?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,$e.data):t.compressedTexImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,ft,st,$e.data)}else if(T.isDataArrayTexture)V?(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,et,Le.width,Le.height,Le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Le.width,Le.height,Le.depth,ft,st,Le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,Le.width,Le.height,Le.depth,0,ft,st,Le.data);else if(T.isData3DTexture)V?(ze&&t.texStorage3D(n.TEXTURE_3D,Re,et,Le.width,Le.height,Le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Le.width,Le.height,Le.depth,ft,st,Le.data)):t.texImage3D(n.TEXTURE_3D,0,et,Le.width,Le.height,Le.depth,0,ft,st,Le.data);else if(T.isFramebufferTexture){if(ze)if(V)t.texStorage2D(n.TEXTURE_2D,Re,et,Le.width,Le.height);else{let me=Le.width,Ue=Le.height;for(let ot=0;ot<Re;ot++)t.texImage2D(n.TEXTURE_2D,ot,et,me,Ue,0,ft,st,null),me>>=1,Ue>>=1}}else if(_t.length>0&&Dt){V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ft,st,$e):t.texImage2D(n.TEXTURE_2D,me,et,ft,st,$e);T.generateMipmaps=!1}else V?(ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,Le.width,Le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,st,Le)):t.texImage2D(n.TEXTURE_2D,0,et,ft,st,Le);O(T,Dt)&&F(Ae),qe.__version=Ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Fe(D,T,Y){if(T.image.length!==6)return;const Ae=ve(D,T),ye=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const Ce=i.get(ye);if(ye.version!==Ce.__version||Ae===!0){t.activeTexture(n.TEXTURE0+Y);const qe=Ft.getPrimaries(Ft.workingColorSpace),De=T.colorSpace===Tr?null:Ft.getPrimaries(T.colorSpace),ke=T.colorSpace===Tr||qe===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let me=0;me<6;me++)!lt&&!Mt?Le[me]=M(T.image[me],!1,!0,h):Le[me]=Mt?T.image[me].image:T.image[me],Le[me]=Ze(T,Le[me]);const Dt=Le[0],ft=R(Dt)||u,st=s.convert(T.format,T.colorSpace),et=s.convert(T.type),$e=de(T.internalFormat,st,et,T.colorSpace),_t=u&&T.isVideoTexture!==!0,V=Ce.__version===void 0||Ae===!0;let ze=b(T,Dt,ft);_e(n.TEXTURE_CUBE_MAP,T,ft);let Re;if(lt){_t&&V&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,$e,Dt.width,Dt.height);for(let me=0;me<6;me++){Re=Le[me].mipmaps;for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];T.format!==Ar?st!==null?_t?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,et,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,st,et,ot.data)}}}else{Re=T.mipmaps,_t&&V&&(Re.length>0&&ze++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,$e,Le[0].width,Le[0].height));for(let me=0;me<6;me++)if(Mt){_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Le[me].width,Le[me].height,st,et,Le[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,Le[me].width,Le[me].height,0,st,et,Le[me].data);for(let Ue=0;Ue<Re.length;Ue++){const wt=Re[Ue].image[me].image;_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,wt.width,wt.height,st,et,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,wt.width,wt.height,0,st,et,wt.data)}}else{_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,st,et,Le[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,st,et,Le[me]);for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,st,et,ot.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,st,et,ot.image[me])}}}O(T,ft)&&F(n.TEXTURE_CUBE_MAP),Ce.__version=ye.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Oe(D,T,Y,Ae,ye,Ce){const qe=s.convert(Y.format,Y.colorSpace),De=s.convert(Y.type),ke=de(Y.internalFormat,qe,De,Y.colorSpace);if(!i.get(T).__hasExternalTextures){const Mt=Math.max(1,T.width>>Ce),Le=Math.max(1,T.height>>Ce);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,ke,Mt,Le,T.depth,0,qe,De,null):t.texImage2D(ye,Ce,ke,Mt,Le,0,qe,De,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ye,i.get(Y).__webglTexture,0,Me(T)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ye,i.get(Y).__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(D,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let Ae=u===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||we(T)){const ye=T.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Ri?Ae=n.DEPTH_COMPONENT32F:ye.type===co&&(Ae=n.DEPTH_COMPONENT24));const Ce=Me(T);we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Ae,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const Ae=Me(T);Y&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{const Ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ye=0;ye<Ae.length;ye++){const Ce=Ae[ye],qe=s.convert(Ce.format,Ce.colorSpace),De=s.convert(Ce.type),ke=de(Ce.internalFormat,qe,De,Ce.colorSpace),lt=Me(T);Y&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,ke,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,ke,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ke,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Ae=i.get(T.depthTexture).__webglTexture,ye=Me(T);if(T.depthTexture.format===ra)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0);else if(T.depthTexture.format===vs)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function Be(D){const T=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Lt(T.__webglFramebuffer,D)}else if(Y){T.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Ae]),T.__webglDepthbuffer[Ae]=n.createRenderbuffer(),j(T.__webglDepthbuffer[Ae],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),j(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(D,T,Y){const Ae=i.get(D);T!==void 0&&Oe(Ae.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Be(D)}function ue(D){const T=D.texture,Y=i.get(D),Ae=i.get(T);D.addEventListener("dispose",ne),D.isWebGLMultipleRenderTargets!==!0&&(Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture()),Ae.__version=T.version,c.memory.textures++);const ye=D.isWebGLCubeRenderTarget===!0,Ce=D.isWebGLMultipleRenderTargets===!0,qe=R(D)||u;if(ye){Y.__webglFramebuffer=[];for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[De]=[];for(let ke=0;ke<T.mipmaps.length;ke++)Y.__webglFramebuffer[De][ke]=n.createFramebuffer()}else Y.__webglFramebuffer[De]=n.createFramebuffer()}else{if(u&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)Y.__webglFramebuffer[De]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ce)if(a.drawBuffers){const De=D.texture;for(let ke=0,lt=De.length;ke<lt;ke++){const Mt=i.get(De[ke]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&D.samples>0&&we(D)===!1){const De=Ce?T:[T];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ke=0;ke<De.length;ke++){const lt=De[ke];Y.__webglColorRenderbuffer[ke]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ke]);const Mt=s.convert(lt.format,lt.colorSpace),Le=s.convert(lt.type),Dt=de(lt.internalFormat,Mt,Le,lt.colorSpace,D.isXRRenderTarget===!0),ft=Me(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Dt,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ke])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),j(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,Ae.__webglTexture),_e(n.TEXTURE_CUBE_MAP,T,qe);for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Oe(Y.__webglFramebuffer[De][ke],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ke);else Oe(Y.__webglFramebuffer[De],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);O(T,qe)&&F(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){const De=D.texture;for(let ke=0,lt=De.length;ke<lt;ke++){const Mt=De[ke],Le=i.get(Mt);t.bindTexture(n.TEXTURE_2D,Le.__webglTexture),_e(n.TEXTURE_2D,Mt,qe),Oe(Y.__webglFramebuffer,D,Mt,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,0),O(Mt,qe)&&F(n.TEXTURE_2D)}t.unbindTexture()}else{let De=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(u?De=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,Ae.__webglTexture),_e(De,T,qe),u&&T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Oe(Y.__webglFramebuffer[ke],D,T,n.COLOR_ATTACHMENT0,De,ke);else Oe(Y.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,De,0);O(T,qe)&&F(De),t.unbindTexture()}D.depthBuffer&&Be(D)}function xe(D){const T=R(D)||u,Y=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Ae=0,ye=Y.length;Ae<ye;Ae++){const Ce=Y[Ae];if(O(Ce,T)){const qe=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,De=i.get(Ce).__webglTexture;t.bindTexture(qe,De),F(qe),t.unbindTexture()}}}function ge(D){if(u&&D.samples>0&&we(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Y=D.width,Ae=D.height;let ye=n.COLOR_BUFFER_BIT;const Ce=[],qe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(D),ke=D.isWebGLMultipleRenderTargets===!0;if(ke)for(let lt=0;lt<T.length;lt++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let lt=0;lt<T.length;lt++){Ce.push(n.COLOR_ATTACHMENT0+lt),D.depthBuffer&&Ce.push(qe);const Mt=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(Mt===!1&&(D.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),ke&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]),Mt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[qe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[qe])),ke){const Le=i.get(T[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,Y,Ae,0,0,Y,Ae,ye,n.NEAREST),S&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ke)for(let lt=0;lt<T.length;lt++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]);const Mt=i.get(T[lt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Mt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Me(D){return Math.min(v,D.samples)}function we(D){const T=i.get(D);return u&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ie(D){const T=c.render.frame;E.get(D)!==T&&(E.set(D,T),D.update())}function Ze(D,T){const Y=D.colorSpace,Ae=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Pp||Y!==Li&&Y!==Tr&&(Ft.getTransfer(Y)===Xt?u===!1?e.has("EXT_sRGB")===!0&&Ae===Ar?(D.format=Pp,D.minFilter=Mr,D.generateMipmaps=!1):T=wE.sRGBToLinear(T):(Ae!==Ar||ye!==go)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=X,this.resetTextureUnits=re,this.setTexture2D=$,this.setTexture2DArray=P,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=we}function ZF(n,e,t){const i=t.isWebGL2;function a(s,c=Tr){let u;const d=Ft.getTransfer(c);if(s===go)return n.UNSIGNED_BYTE;if(s===dE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===hE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===SD)return n.BYTE;if(s===ED)return n.SHORT;if(s===Pm)return n.UNSIGNED_SHORT;if(s===fE)return n.INT;if(s===co)return n.UNSIGNED_INT;if(s===Ri)return n.FLOAT;if(s===Tl)return i?n.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(s===wD)return n.ALPHA;if(s===Ar)return n.RGBA;if(s===MD)return n.LUMINANCE;if(s===AD)return n.LUMINANCE_ALPHA;if(s===ra)return n.DEPTH_COMPONENT;if(s===vs)return n.DEPTH_STENCIL;if(s===Pp)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(s===TD)return n.RED;if(s===pE)return n.RED_INTEGER;if(s===bD)return n.RG;if(s===mE)return n.RG_INTEGER;if(s===vE)return n.RGBA_INTEGER;if(s===xh||s===Sh||s===Eh||s===wh)if(d===Xt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===xh)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Eh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===xh)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sh)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Eh)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wh)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===K_||s===Z_||s===J_||s===Q_)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===K_)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Z_)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===J_)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Q_)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gE)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===e0||s===t0)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===e0)return d===Xt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===t0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===n0||s===r0||s===i0||s===o0||s===a0||s===s0||s===l0||s===u0||s===c0||s===f0||s===d0||s===h0||s===p0||s===m0)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===n0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===r0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===i0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===o0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===a0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===s0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===l0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===u0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===c0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===f0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===d0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===h0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===p0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===m0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mh||s===v0||s===g0)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Mh)return d===Xt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===v0)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===g0)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===CD||s===_0||s===y0||s===x0)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Mh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===_0)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===y0)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===x0)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===na?i?n.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class JF extends pr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cl extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QF={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,i),_=this._getHandJoint(h,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),S=.02,E=.005;h.inputState.pinching&&g>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(QF)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class eO extends da{constructor(e,t){super();const i=this;let a=null,s=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,g=null,S=null,E=null;const w=t.getContextAttributes();let x=null,_=null;const C=[],M=[],R=new ht;let I=null;const O=new pr;O.layers.enable(1),O.viewport=new Ot;const F=new pr;F.layers.enable(2),F.viewport=new Ot;const de=[O,F],b=new JF;b.layers.enable(1),b.layers.enable(2);let N=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=C[W];return q===void 0&&(q=new jh,C[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=C[W];return q===void 0&&(q=new jh,C[W]=q),q.getGripSpace()},this.getHand=function(W){let q=C[W];return q===void 0&&(q=new jh,C[W]=q),q.getHandSpace()};function ne(W){const q=M.indexOf(W.inputSource);if(q===-1)return;const ee=C[q];ee!==void 0&&(ee.update(W.inputSource,W.frame,h||c),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function pe(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",H);for(let W=0;W<C.length;W++){const q=M[W];q!==null&&(M[W]=null,C[W].disconnect(q))}N=null,ae=null,e.setRenderTarget(x),S=null,g=null,v=null,a=null,_=null,z.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:a.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(a,t,q),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new oa(S.framebufferWidth,S.framebufferHeight,{format:Ar,type:go,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let q=null,ee=null,Z=null;w.depth&&(Z=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=w.stencil?vs:ra,ee=w.stencil?na:co);const _e={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};v=new XRWebGLBinding(a,t),g=v.createProjectionLayer(_e),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),_=new oa(g.textureWidth,g.textureHeight,{format:Ar,type:go,depthTexture:new NE(g.textureWidth,g.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const ve=e.properties.get(_);ve.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),z.setContext(a),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(W){for(let q=0;q<W.removed.length;q++){const ee=W.removed[q],Z=M.indexOf(ee);Z>=0&&(M[Z]=null,C[Z].disconnect(ee))}for(let q=0;q<W.added.length;q++){const ee=W.added[q];let Z=M.indexOf(ee);if(Z===-1){for(let ve=0;ve<C.length;ve++)if(ve>=M.length){M.push(ee),Z=ve;break}else if(M[ve]===null){M[ve]=ee,Z=ve;break}if(Z===-1)break}const _e=C[Z];_e&&_e.connect(ee)}}const Q=new B,se=new B;function re(W,q,ee){Q.setFromMatrixPosition(q.matrixWorld),se.setFromMatrixPosition(ee.matrixWorld);const Z=Q.distanceTo(se),_e=q.projectionMatrix.elements,ve=ee.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Fe=_e[14]/(_e[10]+1),Oe=(_e[9]+1)/_e[5],j=(_e[9]-1)/_e[5],Lt=(_e[8]-1)/_e[0],Be=(ve[8]+1)/ve[0],le=be*Lt,ue=be*Be,xe=Z/(-Lt+Be),ge=xe*-Lt;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Me=be+xe,we=Fe+xe,Ie=le-ge,Ze=ue+(Z-ge),D=Oe*Fe/we*Me,T=j*Fe/we*Me;W.projectionMatrix.makePerspective(Ie,Ze,D,T,Me,we),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;b.near=F.near=O.near=W.near,b.far=F.far=O.far=W.far,(N!==b.near||ae!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,ae=b.far);const q=W.parent,ee=b.cameras;X(b,q);for(let Z=0;Z<ee.length;Z++)X(ee[Z],q);ee.length===2?re(b,O,F):b.projectionMatrix.copy(O.projectionMatrix),ie(W,b,q)};function ie(W,q,ee){ee===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Cl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(W){d=W,g!==null&&(g.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)};let $=null;function P(W,q){if(p=q.getViewerPose(h||c),E=q,p!==null){const ee=p.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let Z=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let _e=0;_e<ee.length;_e++){const ve=ee[_e];let be=null;if(S!==null)be=S.getViewport(ve);else{const Oe=v.getViewSubImage(g,ve);be=Oe.viewport,_e===0&&(e.setRenderTargetTextures(_,Oe.colorTexture,g.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(_))}let Fe=de[_e];Fe===void 0&&(Fe=new pr,Fe.layers.enable(_e),Fe.viewport=new Ot,de[_e]=Fe),Fe.matrix.fromArray(ve.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ve.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(b.matrix.copy(Fe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Z===!0&&b.cameras.push(Fe)}}for(let ee=0;ee<C.length;ee++){const Z=M[ee],_e=C[ee];Z!==null&&_e!==void 0&&_e.update(Z,q,h||c)}$&&$(W,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),E=null}const z=new UE;z.setAnimationLoop(P),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function tO(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,LE(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,C,M,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),v(x,_)):_.isMeshPhongMaterial?(s(x,_),p(x,_)):_.isMeshStandardMaterial?(s(x,_),g(x,_),_.isMeshPhysicalMaterial&&S(x,_,R)):_.isMeshMatcapMaterial?(s(x,_),E(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),w(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?d(x,_,C,M):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===or&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===or&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const C=e.get(_).envMap;if(C&&(x.envMap.value=C,x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*M,t(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,C,M){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*C,x.scale.value=M*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,C){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===or&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const C=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function nO(n,e,t,i){let a={},s={},c=[];const u=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(C,M){const R=M.program;i.uniformBlockBinding(C,R)}function h(C,M){let R=a[C.id];R===void 0&&(E(C),R=p(C),a[C.id]=R,C.addEventListener("dispose",x));const I=M.program;i.updateUBOMapping(C,I);const O=e.render.frame;s[C.id]!==O&&(g(C),s[C.id]=O)}function p(C){const M=v();C.__bindingPointIndex=M;const R=n.createBuffer(),I=C.__size,O=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,I,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,R),R}function v(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const M=a[C.id],R=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let O=0,F=R.length;O<F;O++){const de=R[O];if(S(de,O,I)===!0){const b=de.__offset,N=Array.isArray(de.value)?de.value:[de.value];let ae=0;for(let ne=0;ne<N.length;ne++){const pe=N[ne],H=w(pe);typeof pe=="number"?(de.__data[0]=pe,n.bufferSubData(n.UNIFORM_BUFFER,b+ae,de.__data)):pe.isMatrix3?(de.__data[0]=pe.elements[0],de.__data[1]=pe.elements[1],de.__data[2]=pe.elements[2],de.__data[3]=pe.elements[0],de.__data[4]=pe.elements[3],de.__data[5]=pe.elements[4],de.__data[6]=pe.elements[5],de.__data[7]=pe.elements[0],de.__data[8]=pe.elements[6],de.__data[9]=pe.elements[7],de.__data[10]=pe.elements[8],de.__data[11]=pe.elements[0]):(pe.toArray(de.__data,ae),ae+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,de.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(C,M,R){const I=C.value;if(R[M]===void 0){if(typeof I=="number")R[M]=I;else{const O=Array.isArray(I)?I:[I],F=[];for(let de=0;de<O.length;de++)F.push(O[de].clone());R[M]=F}return!0}else if(typeof I=="number"){if(R[M]!==I)return R[M]=I,!0}else{const O=Array.isArray(R[M])?R[M]:[R[M]],F=Array.isArray(I)?I:[I];for(let de=0;de<O.length;de++){const b=O[de];if(b.equals(F[de])===!1)return b.copy(F[de]),!0}}return!1}function E(C){const M=C.uniforms;let R=0;const I=16;let O=0;for(let F=0,de=M.length;F<de;F++){const b=M[F],N={boundary:0,storage:0},ae=Array.isArray(b.value)?b.value:[b.value];for(let ne=0,pe=ae.length;ne<pe;ne++){const H=ae[ne],Q=w(H);N.boundary+=Q.boundary,N.storage+=Q.storage}if(b.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=R,F>0){O=R%I;const ne=I-O;O!==0&&ne-N.boundary<0&&(R+=I-O,b.__offset=R)}R+=N.storage}return O=R%I,O>0&&(R+=I-O),C.__size=R,C.__cache={},this}function w(C){const M={boundary:0,storage:0};return typeof C=="number"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function x(C){const M=C.target;M.removeEventListener("dispose",x);const R=c.indexOf(M.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete s[M.id]}function _(){for(const C in a)n.deleteBuffer(a[C]);c=[],a={},s={}}return{bind:d,update:h,dispose:_}}class Ip{constructor(e={}){const{canvas:t=QD(),context:i=null,depth:a=!0,stencil:s=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=c;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,x=null;const _=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=vo,this.toneMappingExposure=1;const M=this;let R=!1,I=0,O=0,F=null,de=-1,b=null;const N=new Ot,ae=new Ot;let ne=null;const pe=new nt(0);let H=0,Q=t.width,se=t.height,re=1,X=null,ie=null;const $=new Ot(0,0,Q,se),P=new Ot(0,0,Q,se);let z=!1;const W=new yf;let q=!1,ee=!1,Z=null;const _e=new Gt,ve=new ht,be=new B,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return F===null?re:1}let j=i;function Lt(L,J){for(let fe=0;fe<L.length;fe++){const he=L[fe],ce=t.getContext(he,J);if(ce!==null)return ce}return null}try{const L={alpha:!0,depth:a,stencil:s,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vf}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",ze,!1),j===null){const J=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&J.shift(),j=Lt(J,L),j===null)throw Lt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Be,le,ue,xe,ge,Me,we,Ie,Ze,D,T,Y,Ae,ye,Ce,qe,De,ke,lt,Mt,Le,Dt,ft,st;function et(){Be=new hN(j),le=new aN(j,Be,e),Be.init(le),Dt=new ZF(j,Be,le),ue=new qF(j,Be,le),xe=new vN(j),ge=new NF,Me=new KF(j,Be,ue,ge,le,Dt,xe),we=new lN(M),Ie=new dN(M),Ze=new w3(j,le),ft=new iN(j,Be,Ze,le),D=new pN(j,Ze,xe,ft),T=new xN(j,D,Ze,xe),lt=new yN(j,le,Me),qe=new sN(ge),Y=new UF(M,we,Ie,Be,le,ft,qe),Ae=new tO(M,ge),ye=new OF,Ce=new GF(Be,le),ke=new rN(M,we,Ie,ue,T,g,d),De=new YF(M,T,le),st=new nO(j,xe,le,ue),Mt=new oN(j,Be,xe,le),Le=new mN(j,Be,xe,le),xe.programs=Y.programs,M.capabilities=le,M.extensions=Be,M.properties=ge,M.renderLists=ye,M.shadowMap=De,M.state=ue,M.info=xe}et();const $e=new eO(M,j);this.xr=$e,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=Be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(L){L!==void 0&&(re=L,this.setSize(Q,se,!1))},this.getSize=function(L){return L.set(Q,se)},this.setSize=function(L,J,fe=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=L,se=J,t.width=Math.floor(L*re),t.height=Math.floor(J*re),fe===!0&&(t.style.width=L+"px",t.style.height=J+"px"),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(Q*re,se*re).floor()},this.setDrawingBufferSize=function(L,J,fe){Q=L,se=J,re=fe,t.width=Math.floor(L*fe),t.height=Math.floor(J*fe),this.setViewport(0,0,L,J)},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy($)},this.setViewport=function(L,J,fe,he){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,J,fe,he),ue.viewport(N.copy($).multiplyScalar(re).floor())},this.getScissor=function(L){return L.copy(P)},this.setScissor=function(L,J,fe,he){L.isVector4?P.set(L.x,L.y,L.z,L.w):P.set(L,J,fe,he),ue.scissor(ae.copy(P).multiplyScalar(re).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(L){ue.setScissorTest(z=L)},this.setOpaqueSort=function(L){X=L},this.setTransparentSort=function(L){ie=L},this.getClearColor=function(L){return L.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(L=!0,J=!0,fe=!0){let he=0;if(L){let ce=!1;if(F!==null){const Ge=F.texture.format;ce=Ge===vE||Ge===mE||Ge===pE}if(ce){const Ge=F.texture.type,Qe=Ge===go||Ge===co||Ge===Pm||Ge===na||Ge===dE||Ge===hE,at=ke.getClearColor(),Xe=ke.getClearAlpha(),vt=at.r,dt=at.g,pt=at.b;Qe?(S[0]=vt,S[1]=dt,S[2]=pt,S[3]=Xe,j.clearBufferuiv(j.COLOR,0,S)):(E[0]=vt,E[1]=dt,E[2]=pt,E[3]=Xe,j.clearBufferiv(j.COLOR,0,E))}else he|=j.COLOR_BUFFER_BIT}J&&(he|=j.DEPTH_BUFFER_BIT),fe&&(he|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),ye.dispose(),Ce.dispose(),ge.dispose(),we.dispose(),Ie.dispose(),T.dispose(),ft.dispose(),st.dispose(),Y.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",vn),$e.removeEventListener("sessionend",Rt),Z&&(Z.dispose(),Z=null),cn.stop()};function _t(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const L=xe.autoReset,J=De.enabled,fe=De.autoUpdate,he=De.needsUpdate,ce=De.type;et(),xe.autoReset=L,De.enabled=J,De.autoUpdate=fe,De.needsUpdate=he,De.type=ce}function ze(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Re(L){const J=L.target;J.removeEventListener("dispose",Re),me(J)}function me(L){Ue(L),ge.remove(L)}function Ue(L){const J=ge.get(L).programs;J!==void 0&&(J.forEach(function(fe){Y.releaseProgram(fe)}),L.isShaderMaterial&&Y.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,fe,he,ce,Ge){J===null&&(J=Fe);const Qe=ce.isMesh&&ce.matrixWorld.determinant()<0,at=wf(L,J,fe,he,ce);ue.setMaterial(he,Qe);let Xe=fe.index,vt=1;if(he.wireframe===!0){if(Xe=D.getWireframeAttribute(fe),Xe===void 0)return;vt=2}const dt=fe.drawRange,pt=fe.attributes.position;let Bt=dt.start*vt,Hn=(dt.start+dt.count)*vt;Ge!==null&&(Bt=Math.max(Bt,Ge.start*vt),Hn=Math.min(Hn,(Ge.start+Ge.count)*vt)),Xe!==null?(Bt=Math.max(Bt,0),Hn=Math.min(Hn,Xe.count)):pt!=null&&(Bt=Math.max(Bt,0),Hn=Math.min(Hn,pt.count));const nn=Hn-Bt;if(nn<0||nn===1/0)return;ft.setup(ce,he,at,fe,Xe);let Yn,At=Mt;if(Xe!==null&&(Yn=Ze.get(Xe),At=Le,At.setIndex(Yn)),ce.isMesh)he.wireframe===!0?(ue.setLineWidth(he.wireframeLinewidth*Oe()),At.setMode(j.LINES)):At.setMode(j.TRIANGLES);else if(ce.isLine){let yt=he.linewidth;yt===void 0&&(yt=1),ue.setLineWidth(yt*Oe()),ce.isLineSegments?At.setMode(j.LINES):ce.isLineLoop?At.setMode(j.LINE_LOOP):At.setMode(j.LINE_STRIP)}else ce.isPoints?At.setMode(j.POINTS):ce.isSprite&&At.setMode(j.TRIANGLES);if(ce.isBatchedMesh)At.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else if(ce.isInstancedMesh)At.renderInstances(Bt,nn,ce.count);else if(fe.isInstancedBufferGeometry){const yt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Vn=Math.min(fe.instanceCount,yt);At.renderInstances(Bt,nn,Vn)}else At.render(Bt,nn)};function ot(L,J,fe){L.transparent===!0&&L.side===Ci&&L.forceSinglePass===!1?(L.side=or,L.needsUpdate=!0,Ii(L,J,fe),L.side=So,L.needsUpdate=!0,Ii(L,J,fe),L.side=Ci):Ii(L,J,fe)}this.compile=function(L,J,fe=null){fe===null&&(fe=L),x=Ce.get(fe),x.init(),C.push(x),fe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(J.layers)&&(x.pushLight(ce),ce.castShadow&&x.pushShadow(ce))}),L!==fe&&L.traverseVisible(function(ce){ce.isLight&&ce.layers.test(J.layers)&&(x.pushLight(ce),ce.castShadow&&x.pushShadow(ce))}),x.setupLights(M._useLegacyLights);const he=new Set;return L.traverse(function(ce){const Ge=ce.material;if(Ge)if(Array.isArray(Ge))for(let Qe=0;Qe<Ge.length;Qe++){const at=Ge[Qe];ot(at,fe,ce),he.add(at)}else ot(Ge,fe,ce),he.add(Ge)}),C.pop(),x=null,he},this.compileAsync=function(L,J,fe=null){const he=this.compile(L,J,fe);return new Promise(ce=>{function Ge(){if(he.forEach(function(Qe){ge.get(Qe).currentProgram.isReady()&&he.delete(Qe)}),he.size===0){ce(L);return}setTimeout(Ge,10)}Be.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let wt=null;function Jt(L){wt&&wt(L)}function vn(){cn.stop()}function Rt(){cn.start()}const cn=new UE;cn.setAnimationLoop(Jt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(L){wt=L,$e.setAnimationLoop(L),L===null?cn.stop():cn.start()},$e.addEventListener("sessionstart",vn),$e.addEventListener("sessionend",Rt),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(J),J=$e.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,J,F),x=Ce.get(L,C.length),x.init(),C.push(x),_e.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W.setFromProjectionMatrix(_e),ee=this.localClippingEnabled,q=qe.init(this.clippingPlanes,ee),w=ye.get(L,_.length),w.init(),_.push(w),Pn(L,J,0,M.sortObjects),w.finish(),M.sortObjects===!0&&w.sort(X,ie),this.info.render.frame++,q===!0&&qe.beginShadows();const fe=x.state.shadowsArray;if(De.render(fe,L,J),q===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(w,L),x.setupLights(M._useLegacyLights),J.isArrayCamera){const he=J.cameras;for(let ce=0,Ge=he.length;ce<Ge;ce++){const Qe=he[ce];Xl(w,L,Qe,Qe.viewport)}}else Xl(w,L,J);F!==null&&(Me.updateMultisampleRenderTarget(F),Me.updateRenderTargetMipmap(F)),L.isScene===!0&&L.onAfterRender(M,L,J),ft.resetDefaultState(),de=-1,b=null,C.pop(),C.length>0?x=C[C.length-1]:x=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function Pn(L,J,fe,he){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)fe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||W.intersectsSprite(L)){he&&be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(_e);const Qe=T.update(L),at=L.material;at.visible&&w.push(L,Qe,at,fe,be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||W.intersectsObject(L))){const Qe=T.update(L),at=L.material;if(he&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),be.copy(L.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),be.copy(Qe.boundingSphere.center)),be.applyMatrix4(L.matrixWorld).applyMatrix4(_e)),Array.isArray(at)){const Xe=Qe.groups;for(let vt=0,dt=Xe.length;vt<dt;vt++){const pt=Xe[vt],Bt=at[pt.materialIndex];Bt&&Bt.visible&&w.push(L,Qe,Bt,fe,be.z,pt)}}else at.visible&&w.push(L,Qe,at,fe,be.z,null)}}const Ge=L.children;for(let Qe=0,at=Ge.length;Qe<at;Qe++)Pn(Ge[Qe],J,fe,he)}function Xl(L,J,fe,he){const ce=L.opaque,Ge=L.transmissive,Qe=L.transparent;x.setupLightsView(fe),q===!0&&qe.setGlobalState(M.clippingPlanes,fe),Ge.length>0&&bo(ce,Ge,J,fe),he&&ue.viewport(N.copy(he)),ce.length>0&&fi(ce,J,fe),Ge.length>0&&fi(Ge,J,fe),Qe.length>0&&fi(Qe,J,fe),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function bo(L,J,fe,he){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;const Ge=le.isWebGL2;Z===null&&(Z=new oa(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")?Tl:go,minFilter:Al,samples:Ge?4:0})),M.getDrawingBufferSize(ve),Ge?Z.setSize(ve.x,ve.y):Z.setSize(Xc(ve.x),Xc(ve.y));const Qe=M.getRenderTarget();M.setRenderTarget(Z),M.getClearColor(pe),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const at=M.toneMapping;M.toneMapping=vo,fi(L,fe,he),Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z);let Xe=!1;for(let vt=0,dt=J.length;vt<dt;vt++){const pt=J[vt],Bt=pt.object,Hn=pt.geometry,nn=pt.material,Yn=pt.group;if(nn.side===Ci&&Bt.layers.test(he.layers)){const At=nn.side;nn.side=or,nn.needsUpdate=!0,Co(Bt,fe,he,Hn,nn,Yn),nn.side=At,nn.needsUpdate=!0,Xe=!0}}Xe===!0&&(Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z)),M.setRenderTarget(Qe),M.setClearColor(pe,H),M.toneMapping=at}function fi(L,J,fe){const he=J.isScene===!0?J.overrideMaterial:null;for(let ce=0,Ge=L.length;ce<Ge;ce++){const Qe=L[ce],at=Qe.object,Xe=Qe.geometry,vt=he===null?Qe.material:he,dt=Qe.group;at.layers.test(fe.layers)&&Co(at,J,fe,Xe,vt,dt)}}function Co(L,J,fe,he,ce,Ge){L.onBeforeRender(M,J,fe,he,ce,Ge),L.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ce.onBeforeRender(M,J,fe,he,L,Ge),ce.transparent===!0&&ce.side===Ci&&ce.forceSinglePass===!1?(ce.side=or,ce.needsUpdate=!0,M.renderBufferDirect(fe,J,he,ce,L,Ge),ce.side=So,ce.needsUpdate=!0,M.renderBufferDirect(fe,J,he,ce,L,Ge),ce.side=Ci):M.renderBufferDirect(fe,J,he,ce,L,Ge),L.onAfterRender(M,J,fe,he,ce,Ge)}function Ii(L,J,fe){J.isScene!==!0&&(J=Fe);const he=ge.get(L),ce=x.state.lights,Ge=x.state.shadowsArray,Qe=ce.state.version,at=Y.getParameters(L,ce.state,Ge,J,fe),Xe=Y.getProgramCacheKey(at);let vt=he.programs;he.environment=L.isMeshStandardMaterial?J.environment:null,he.fog=J.fog,he.envMap=(L.isMeshStandardMaterial?Ie:we).get(L.envMap||he.environment),vt===void 0&&(L.addEventListener("dispose",Re),vt=new Map,he.programs=vt);let dt=vt.get(Xe);if(dt!==void 0){if(he.currentProgram===dt&&he.lightsStateVersion===Qe)return Yl(L,at),dt}else at.uniforms=Y.getUniforms(L),L.onBuild(fe,at,M),L.onBeforeCompile(at,M),dt=Y.acquireProgram(at,Xe),vt.set(Xe,dt),he.uniforms=at.uniforms;const pt=he.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(pt.clippingPlanes=qe.uniform),Yl(L,at),he.needsLights=ql(L),he.lightsStateVersion=Qe,he.needsLights&&(pt.ambientLightColor.value=ce.state.ambient,pt.lightProbe.value=ce.state.probe,pt.directionalLights.value=ce.state.directional,pt.directionalLightShadows.value=ce.state.directionalShadow,pt.spotLights.value=ce.state.spot,pt.spotLightShadows.value=ce.state.spotShadow,pt.rectAreaLights.value=ce.state.rectArea,pt.ltc_1.value=ce.state.rectAreaLTC1,pt.ltc_2.value=ce.state.rectAreaLTC2,pt.pointLights.value=ce.state.point,pt.pointLightShadows.value=ce.state.pointShadow,pt.hemisphereLights.value=ce.state.hemi,pt.directionalShadowMap.value=ce.state.directionalShadowMap,pt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,pt.spotShadowMap.value=ce.state.spotShadowMap,pt.spotLightMatrix.value=ce.state.spotLightMatrix,pt.spotLightMap.value=ce.state.spotLightMap,pt.pointShadowMap.value=ce.state.pointShadowMap,pt.pointShadowMatrix.value=ce.state.pointShadowMatrix),he.currentProgram=dt,he.uniformsList=null,dt}function jl(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=Oc.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function Yl(L,J){const fe=ge.get(L);fe.outputColorSpace=J.outputColorSpace,fe.batching=J.batching,fe.instancing=J.instancing,fe.instancingColor=J.instancingColor,fe.skinning=J.skinning,fe.morphTargets=J.morphTargets,fe.morphNormals=J.morphNormals,fe.morphColors=J.morphColors,fe.morphTargetsCount=J.morphTargetsCount,fe.numClippingPlanes=J.numClippingPlanes,fe.numIntersection=J.numClipIntersection,fe.vertexAlphas=J.vertexAlphas,fe.vertexTangents=J.vertexTangents,fe.toneMapping=J.toneMapping}function wf(L,J,fe,he,ce){J.isScene!==!0&&(J=Fe),Me.resetTextureUnits();const Ge=J.fog,Qe=he.isMeshStandardMaterial?J.environment:null,at=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Li,Xe=(he.isMeshStandardMaterial?Ie:we).get(he.envMap||Qe),vt=he.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,dt=!!fe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),pt=!!fe.morphAttributes.position,Bt=!!fe.morphAttributes.normal,Hn=!!fe.morphAttributes.color;let nn=vo;he.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(nn=M.toneMapping);const Yn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,At=Yn!==void 0?Yn.length:0,yt=ge.get(he),Vn=x.state.lights;if(q===!0&&(ee===!0||L!==b)){const qn=L===b&&he.id===de;qe.setState(he,L,qn)}let jt=!1;he.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Vn.state.version||yt.outputColorSpace!==at||ce.isBatchedMesh&&yt.batching===!1||!ce.isBatchedMesh&&yt.batching===!0||ce.isInstancedMesh&&yt.instancing===!1||!ce.isInstancedMesh&&yt.instancing===!0||ce.isSkinnedMesh&&yt.skinning===!1||!ce.isSkinnedMesh&&yt.skinning===!0||ce.isInstancedMesh&&yt.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&yt.instancingColor===!1&&ce.instanceColor!==null||yt.envMap!==Xe||he.fog===!0&&yt.fog!==Ge||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==qe.numPlanes||yt.numIntersection!==qe.numIntersection)||yt.vertexAlphas!==vt||yt.vertexTangents!==dt||yt.morphTargets!==pt||yt.morphNormals!==Bt||yt.morphColors!==Hn||yt.toneMapping!==nn||le.isWebGL2===!0&&yt.morphTargetsCount!==At)&&(jt=!0):(jt=!0,yt.__version=he.version);let hi=yt.currentProgram;jt===!0&&(hi=Ii(he,J,ce));let Kl=!1,qr=!1,Ui=!1;const Qt=hi.getUniforms(),vr=yt.uniforms;if(ue.useProgram(hi.program)&&(Kl=!0,qr=!0,Ui=!0),he.id!==de&&(de=he.id,qr=!0),Kl||b!==L){Qt.setValue(j,"projectionMatrix",L.projectionMatrix),Qt.setValue(j,"viewMatrix",L.matrixWorldInverse);const qn=Qt.map.cameraPosition;qn!==void 0&&qn.setValue(j,be.setFromMatrixPosition(L.matrixWorld)),le.logarithmicDepthBuffer&&Qt.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Qt.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,qr=!0,Ui=!0)}if(ce.isSkinnedMesh){Qt.setOptional(j,ce,"bindMatrix"),Qt.setOptional(j,ce,"bindMatrixInverse");const qn=ce.skeleton;qn&&(le.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),Qt.setValue(j,"boneTexture",qn.boneTexture,Me)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ce.isBatchedMesh&&(Qt.setOptional(j,ce,"batchingTexture"),Qt.setValue(j,"batchingTexture",ce._matricesTexture,Me));const ws=fe.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&le.isWebGL2===!0)&&lt.update(ce,fe,hi),(qr||yt.receiveShadow!==ce.receiveShadow)&&(yt.receiveShadow=ce.receiveShadow,Qt.setValue(j,"receiveShadow",ce.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(vr.envMap.value=Xe,vr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),qr&&(Qt.setValue(j,"toneMappingExposure",M.toneMappingExposure),yt.needsLights&&di(vr,Ui),Ge&&he.fog===!0&&Ae.refreshFogUniforms(vr,Ge),Ae.refreshMaterialUniforms(vr,he,re,se,Z),Oc.upload(j,jl(yt),vr,Me)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Oc.upload(j,jl(yt),vr,Me),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Qt.setValue(j,"center",ce.center),Qt.setValue(j,"modelViewMatrix",ce.modelViewMatrix),Qt.setValue(j,"normalMatrix",ce.normalMatrix),Qt.setValue(j,"modelMatrix",ce.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const qn=he.uniformsGroups;for(let Ro=0,Zl=qn.length;Ro<Zl;Ro++)if(le.isWebGL2){const ha=qn[Ro];st.update(ha,hi),st.bind(ha,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function di(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function ql(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(L,J,fe){ge.get(L.texture).__webglTexture=J,ge.get(L.depthTexture).__webglTexture=fe;const he=ge.get(L);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=fe===void 0,he.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,J){const fe=ge.get(L);fe.__webglFramebuffer=J,fe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(L,J=0,fe=0){F=L,I=J,O=fe;let he=!0,ce=null,Ge=!1,Qe=!1;if(L){const Xe=ge.get(L);Xe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(j.FRAMEBUFFER,null),he=!1):Xe.__webglFramebuffer===void 0?Me.setupRenderTarget(L):Xe.__hasExternalTextures&&Me.rebindTextures(L,ge.get(L.texture).__webglTexture,ge.get(L.depthTexture).__webglTexture);const vt=L.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Qe=!0);const dt=ge.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(dt[J])?ce=dt[J][fe]:ce=dt[J],Ge=!0):le.isWebGL2&&L.samples>0&&Me.useMultisampledRTT(L)===!1?ce=ge.get(L).__webglMultisampledFramebuffer:Array.isArray(dt)?ce=dt[fe]:ce=dt,N.copy(L.viewport),ae.copy(L.scissor),ne=L.scissorTest}else N.copy($).multiplyScalar(re).floor(),ae.copy(P).multiplyScalar(re).floor(),ne=z;if(ue.bindFramebuffer(j.FRAMEBUFFER,ce)&&le.drawBuffers&&he&&ue.drawBuffers(L,ce),ue.viewport(N),ue.scissor(ae),ue.setScissorTest(ne),Ge){const Xe=ge.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xe.__webglTexture,fe)}else if(Qe){const Xe=ge.get(L.texture),vt=J||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,fe||0,vt)}de=-1},this.readRenderTargetPixels=function(L,J,fe,he,ce,Ge,Qe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Qe!==void 0&&(at=at[Qe]),at){ue.bindFramebuffer(j.FRAMEBUFFER,at);try{const Xe=L.texture,vt=Xe.format,dt=Xe.type;if(vt!==Ar&&Dt.convert(vt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pt=dt===Tl&&(Be.has("EXT_color_buffer_half_float")||le.isWebGL2&&Be.has("EXT_color_buffer_float"));if(dt!==go&&Dt.convert(dt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dt===Ri&&(le.isWebGL2||Be.has("OES_texture_float")||Be.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-he&&fe>=0&&fe<=L.height-ce&&j.readPixels(J,fe,he,ce,Dt.convert(vt),Dt.convert(dt),Ge)}finally{const Xe=F!==null?ge.get(F).__webglFramebuffer:null;ue.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(L,J,fe=0){const he=Math.pow(2,-fe),ce=Math.floor(J.image.width*he),Ge=Math.floor(J.image.height*he);Me.setTexture2D(J,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,L.x,L.y,ce,Ge),ue.unbindTexture()},this.copyTextureToTexture=function(L,J,fe,he=0){const ce=J.image.width,Ge=J.image.height,Qe=Dt.convert(fe.format),at=Dt.convert(fe.type);Me.setTexture2D(fe,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,fe.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,fe.unpackAlignment),J.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,he,L.x,L.y,ce,Ge,Qe,at,J.image.data):J.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,he,L.x,L.y,J.mipmaps[0].width,J.mipmaps[0].height,Qe,J.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,he,L.x,L.y,Qe,at,J.image),he===0&&fe.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(L,J,fe,he,ce=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=L.max.x-L.min.x+1,Qe=L.max.y-L.min.y+1,at=L.max.z-L.min.z+1,Xe=Dt.convert(he.format),vt=Dt.convert(he.type);let dt;if(he.isData3DTexture)Me.setTexture3D(he,0),dt=j.TEXTURE_3D;else if(he.isDataArrayTexture)Me.setTexture2DArray(he,0),dt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,he.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,he.unpackAlignment);const pt=j.getParameter(j.UNPACK_ROW_LENGTH),Bt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Hn=j.getParameter(j.UNPACK_SKIP_PIXELS),nn=j.getParameter(j.UNPACK_SKIP_ROWS),Yn=j.getParameter(j.UNPACK_SKIP_IMAGES),At=fe.isCompressedTexture?fe.mipmaps[0]:fe.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,At.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,At.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,L.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,L.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,L.min.z),fe.isDataTexture||fe.isData3DTexture?j.texSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,vt,At.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,At.data)):j.texSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,vt,At),j.pixelStorei(j.UNPACK_ROW_LENGTH,pt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Bt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Hn),j.pixelStorei(j.UNPACK_SKIP_ROWS,nn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Yn),ce===0&&he.generateMipmaps&&j.generateMipmap(dt),ue.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Me.setTextureCube(L,0):L.isData3DTexture?Me.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Me.setTexture2DArray(L,0):Me.setTexture2D(L,0),ue.unbindTexture()},this.resetState=function(){I=0,O=0,F=null,ue.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Lm?"display-p3":"srgb",t.unpackColorSpace=Ft.workingColorSpace===_f?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?ia:_E}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ia?bn:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rO extends Ip{}rO.prototype.isWebGL1Renderer=!0;class Om{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new Om(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iO extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class oO{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $n=new B;class fo{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new mr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class aO extends ar{constructor(e=null,t=1,i=1,a,s,c,u,d,h=Tn,p=Tn,v,g){super(null,c,u,d,h,p,a,s,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function sO(n,e){return n.z-e.z}function lO(n,e){return e.z-n.z}class uO{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const i=this.pool,a=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});const s=i[this.index];a.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const es="batchId",oo=new Gt,ly=new Gt,cO=new Gt,uy=new Gt,Yh=new yf,Ac=new Pr,qo=new li,sl=new B,qh=new uO,On=new jr,Tc=[];function fO(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const a=n.count;for(let s=0;s<a;s++)for(let c=0;c<i;c++)e.setComponent(s+t,c,n.getComponent(s,c))}else e.array.set(n.array,t*i);e.needsUpdate=!0}class dO extends jr{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,i=t*2,a){super(new Bn,a),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new aO(t,e,e,Ar,Ri);this._matricesTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,a=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const u in e.attributes){const d=e.getAttribute(u),{array:h,itemSize:p,normalized:v}=d,g=new h.constructor(i*p),S=new d.constructor(g,p,v);S.setUsage(d.usage),t.setAttribute(u,S)}if(e.getIndex()!==null){const u=i>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new mr(u,1))}const c=a>65536?new Uint32Array(i):new Uint16Array(i);t.setAttribute(es,new mr(c,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(es))throw new Error(`BatchedMesh: Geometry cannot use attribute "${es}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(i===es)continue;if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const a=e.getAttribute(i),s=t.getAttribute(i);if(a.itemSize!==s.itemSize||a.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this._geometryCount,t=this.boundingBox,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,oo),this.getBoundingBoxAt(a,Ac).applyMatrix4(oo),t.union(Ac))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this._geometryCount,t=this.boundingSphere,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,oo),this.getBoundingSphereAt(a,qo).applyMatrix4(oo),t.union(qo))}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const a={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const c=this._reservedRanges,u=this._drawRanges,d=this._bounds;this._geometryCount!==0&&(s=c[c.length-1]),t===-1?a.vertexCount=e.getAttribute("position").count:a.vertexCount=t,s===null?a.vertexStart=0:a.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),p=h!==null;if(p&&(i===-1?a.indexCount=h.count:a.indexCount=i,s===null?a.indexStart=0:a.indexStart=s.indexStart+s.indexCount),a.indexStart!==-1&&a.indexStart+a.indexCount>this._maxIndexCount||a.vertexStart+a.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const v=this._visibility,g=this._active,S=this._matricesTexture,E=this._matricesTexture.image.data;v.push(!0),g.push(!0);const w=this._geometryCount;this._geometryCount++,cO.toArray(E,w*16),S.needsUpdate=!0,c.push(a),u.push({start:p?a.indexStart:a.vertexStart,count:-1}),d.push({boxInitialized:!1,box:new Pr,sphereInitialized:!1,sphere:new li});const x=this.geometry.getAttribute(es);for(let _=0;_<a.vertexCount;_++)x.setX(a.vertexStart+_,w);return x.needsUpdate=!0,this.setGeometryAt(w,e),w}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,a=i.getIndex()!==null,s=i.getIndex(),c=t.getIndex(),u=this._reservedRanges[e];if(a&&c.count>u.indexCount||t.attributes.position.count>u.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const d=u.vertexStart,h=u.vertexCount;for(const S in i.attributes){if(S===es)continue;const E=t.getAttribute(S),w=i.getAttribute(S);fO(E,w,d);const x=E.itemSize;for(let _=E.count,C=h;_<C;_++){const M=d+_;for(let R=0;R<x;R++)w.setComponent(M,R,0)}w.needsUpdate=!0}if(a){const S=u.indexStart;for(let E=0;E<c.count;E++)s.setX(S+E,d+c.getX(E));for(let E=c.count,w=u.indexCount;E<w;E++)s.setX(S+E,d);s.needsUpdate=!0}const p=this._bounds[e];t.boundingBox!==null?(p.box.copy(t.boundingBox),p.boxInitialized=!0):p.boxInitialized=!1,t.boundingSphere!==null?(p.sphere.copy(t.boundingSphere),p.sphereInitialized=!0):p.sphereInitialized=!1;const v=this._drawRanges[e],g=t.getAttribute("position");return v.count=a?c.count:g.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.box,c=this.geometry;if(a.boxInitialized===!1){s.makeEmpty();const u=c.index,d=c.attributes.position,h=this._drawRanges[e];for(let p=h.start,v=h.start+h.count;p<v;p++){let g=p;u&&(g=u.getX(g)),s.expandByPoint(sl.fromBufferAttribute(d,g))}a.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.sphere,c=this.geometry;if(a.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,Ac),Ac.getCenter(s.center);const u=c.index,d=c.attributes.position,h=this._drawRanges[e];let p=0;for(let v=h.start,g=h.start+h.count;v<g;v++){let S=v;u&&(S=u.getX(S)),sl.fromBufferAttribute(d,S),p=Math.max(p,s.center.distanceToSquared(sl))}s.radius=Math.sqrt(p),a.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const i=this._active,a=this._matricesTexture,s=this._matricesTexture.image.data,c=this._geometryCount;return e>=c||i[e]===!1?this:(t.toArray(s,e*16),a.needsUpdate=!0,this)}getMatrixAt(e,t){const i=this._active,a=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||i[e]===!1?null:t.fromArray(a,e*16)}setVisibleAt(e,t){const i=this._visibility,a=this._active,s=this._geometryCount;return e>=s||a[e]===!1||i[e]===t?this:(i[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,i=this._active,a=this._geometryCount;return e>=a||i[e]===!1?!1:t[e]}raycast(e,t){const i=this._visibility,a=this._active,s=this._drawRanges,c=this._geometryCount,u=this.matrixWorld,d=this.geometry;On.material=this.material,On.geometry.index=d.index,On.geometry.attributes=d.attributes,On.geometry.boundingBox===null&&(On.geometry.boundingBox=new Pr),On.geometry.boundingSphere===null&&(On.geometry.boundingSphere=new li);for(let h=0;h<c;h++){if(!i[h]||!a[h])continue;const p=s[h];On.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(h,On.matrixWorld).premultiply(u),this.getBoundingBoxAt(h,On.geometry.boundingBox),this.getBoundingSphereAt(h,On.geometry.boundingSphere),On.raycast(e,Tc);for(let v=0,g=Tc.length;v<g;v++){const S=Tc[v];S.object=this,S.batchId=h,t.push(S)}Tc.length=0}On.material=null,On.geometry.index=null,On.geometry.attributes={},On.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,i,a,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const c=a.getIndex(),u=c===null?1:c.array.BYTES_PER_ELEMENT,d=this._visibility,h=this._multiDrawStarts,p=this._multiDrawCounts,v=this._drawRanges,g=this.perObjectFrustumCulled;g&&(uy.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Yh.setFromProjectionMatrix(uy,e.isWebGPURenderer?bl:oi));let S=0;if(this.sortObjects){ly.copy(this.matrixWorld).invert(),sl.setFromMatrixPosition(i.matrixWorld).applyMatrix4(ly);for(let x=0,_=d.length;x<_;x++)if(d[x]){this.getMatrixAt(x,oo),this.getBoundingSphereAt(x,qo).applyMatrix4(oo);let C=!1;if(g&&(C=!Yh.intersectsSphere(qo)),!C){const M=sl.distanceTo(qo.center);qh.push(v[x],M)}}const E=qh.list,w=this.customSort;w===null?E.sort(s.transparent?lO:sO):w.call(this,E,i);for(let x=0,_=E.length;x<_;x++){const C=E[x];h[S]=C.start*u,p[S]=C.count,S++}qh.reset()}else for(let E=0,w=d.length;E<w;E++)if(d[E]){let x=!1;if(g&&(this.getMatrixAt(E,oo),this.getBoundingSphereAt(E,qo).applyMatrix4(oo),x=!Yh.intersectsSphere(qo)),!x){const _=v[E];h[S]=_.start*u,p[S]=_.count,S++}}this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,i,a,s,c){this.onBeforeRender(e,null,a,s,c)}}class Wl extends xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cy=new B,fy=new B,dy=new Gt,Kh=new Im,bc=new li;class hO extends jn{constructor(e=new Bn,t=new Wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)cy.fromBufferAttribute(t,a-1),fy.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=cy.distanceTo(fy);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(a),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;dy.copy(a).invert(),Kh.copy(e.ray).applyMatrix4(dy);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=new B,p=new B,v=new B,g=new B,S=this.isLineSegments?2:1,E=i.index,x=i.attributes.position;if(E!==null){const _=Math.max(0,c.start),C=Math.min(E.count,c.start+c.count);for(let M=_,R=C-1;M<R;M+=S){const I=E.getX(M),O=E.getX(M+1);if(h.fromBufferAttribute(x,I),p.fromBufferAttribute(x,O),Kh.distanceSqToSegment(h,p,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const de=e.ray.origin.distanceTo(g);de<e.near||de>e.far||t.push({distance:de,point:v.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,c.start),C=Math.min(x.count,c.start+c.count);for(let M=_,R=C-1;M<R;M+=S){if(h.fromBufferAttribute(x,M),p.fromBufferAttribute(x,M+1),Kh.distanceSqToSegment(h,p,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(g);O<e.near||O>e.far||t.push({distance:O,point:v.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}const hy=new B,py=new B;class Sf extends hO{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)hy.fromBufferAttribute(t,a),py.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+hy.distanceTo(py);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pO extends Bn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,a=new B,s=new B;if(e.index!==null){const c=e.attributes.position,u=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:u.count,materialIndex:0}]);for(let h=0,p=d.length;h<p;++h){const v=d[h],g=v.start,S=v.count;for(let E=g,w=g+S;E<w;E+=3)for(let x=0;x<3;x++){const _=u.getX(E+x),C=u.getX(E+(x+1)%3);a.fromBufferAttribute(c,_),s.fromBufferAttribute(c,C),my(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}}else{const c=e.attributes.position;for(let u=0,d=c.count/3;u<d;u++)for(let h=0;h<3;h++){const p=3*u+h,v=3*u+(h+1)%3;a.fromBufferAttribute(c,p),s.fromBufferAttribute(c,v),my(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new on(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function my(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(a)===!0?!1:(t.add(i),t.add(a),!0)}class mO extends xs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yE,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vO extends Wl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class HE extends jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zh=new Gt,vy=new B,gy=new B;class gO{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yf,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vy.setFromMatrixPosition(e.matrixWorld),t.position.copy(vy),gy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gy),t.updateMatrixWorld(),Zh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _y=new Gt,ll=new B,Jh=new B;class _O extends gO{constructor(){super(new pr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ll.setFromMatrixPosition(e.matrixWorld),i.position.copy(ll),Jh.copy(i.position),Jh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jh),i.updateMatrixWorld(),a.makeTranslation(-ll.x,-ll.y,-ll.z),_y.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_y)}}class yO extends HE{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new _O}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xO extends HE{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class SO extends Bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Up extends oO{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class yy{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Cn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xy=new B,Cc=new B;class EO{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xy.subVectors(e,this.start),Cc.subVectors(this.end,this.start);const i=Cc.dot(Cc);let s=Cc.dot(xy)/i;return t&&(s=Cn(s,0,1)),s}closestPointToPoint(e,t,i){const a=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class wO extends Sf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Bn;a.setAttribute("position",new on(t,3)),a.setAttribute("color",new on(i,3));const s=new Wl({vertexColors:!0,toneMapped:!1});super(a,s),this.type="AxesHelper"}setColors(e,t,i){const a=new nt,s=this.geometry.attributes.color.array;return a.set(e),a.toArray(s,0),a.toArray(s,3),a.set(t),a.toArray(s,6),a.toArray(s,9),a.set(i),a.toArray(s,12),a.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vf);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class ui{constructor(e,t,i,a,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),ui.nextNameID=ui.nextNameID||0,this.$name.id=`lil-gui-name-${++ui.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class MO extends ui{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Np(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const AO={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Np,toHexString:Np},Rl={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},TO={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Rl.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return Rl.toHexString(a)}},bO={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Rl.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return Rl.toHexString(a)}},CO=[AO,Rl,TO,bO];function RO(n){return CO.find(e=>e.match(n))}class PO extends ui{constructor(e,t,i,a){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=RO(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Np(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qh extends ui{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class LO extends ui{constructor(e,t,i,a,s,c){super(e,t,i,"number"),this._initInput(),this.min(a),this.max(s);const u=c!==void 0;this.step(u?c:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let C=parseFloat(this.$input.value);isNaN(C)||(this._stepExplicit&&(C=this._snap(C)),this.setValue(this._clamp(C)))},i=C=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+C),this.$input.value=this.getValue())},a=C=>{C.key==="Enter"&&this.$input.blur(),C.code==="ArrowUp"&&(C.preventDefault(),i(this._step*this._arrowKeyMultiplier(C))),C.code==="ArrowDown"&&(C.preventDefault(),i(this._step*this._arrowKeyMultiplier(C)*-1))},s=C=>{this._inputFocused&&(C.preventDefault(),i(this._step*this._normalizeMouseWheel(C)))};let c=!1,u,d,h,p,v;const g=5,S=C=>{u=C.clientX,d=h=C.clientY,c=!0,p=this.getValue(),v=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",w)},E=C=>{if(c){const M=C.clientX-u,R=C.clientY-d;Math.abs(R)>g?(C.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>g&&w()}if(!c){const M=C.clientY-h;v-=M*this._step*this._arrowKeyMultiplier(C),p+v>this._max?v=this._max-p:p+v<this._min&&(v=this._min-p),this._snapClampSetValue(p+v)}h=C.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",w)},x=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,C,M,R,I)=>(_-C)/(M-C)*(I-R)+R,t=_=>{const C=this.$slider.getBoundingClientRect();let M=e(_,C.left,C.right,this._min,this._max);this._snapClampSetValue(M)},i=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",s)},a=_=>{t(_.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",s)};let c=!1,u,d;const h=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),c=!1},p=_=>{_.touches.length>1||(this._hasScrollBar?(u=_.touches[0].clientX,d=_.touches[0].clientY,c=!0):h(_),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",g))},v=_=>{if(c){const C=_.touches[0].clientX-u,M=_.touches[0].clientY-d;Math.abs(C)>Math.abs(M)?h(_):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",g))}else _.preventDefault(),t(_.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",g)},S=this._callOnFinishChange.bind(this),E=400;let w;const x=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const M=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(S,E)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class DO extends ui{constructor(e,t,i,a){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class IO extends ui{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const UO=`.lil-gui {
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
}`;function NO(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Sy=!1;class Yc{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:a,title:s="Controls",closeFolders:c=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!Sy&&u&&(NO(UO),Sy=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,i,a,s){if(Object(i)===i)return new DO(this,e,t,i);const c=e[t];switch(typeof c){case"number":return new LO(this,e,t,i,a,s);case"boolean":return new MO(this,e,t);case"string":return new IO(this,e,t);case"function":return new Qh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,i=1){return new PO(this,e,t,i)}addFolder(e){const t=new Yc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Qh||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Qh)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function ep(n,e,t,i){return new(t||(t=Promise))((function(a,s){function c(h){try{d(i.next(h))}catch(p){s(p)}}function u(h){try{d(i.throw(h))}catch(p){s(p)}}function d(h){var p;h.done?a(h.value):(p=h.value,p instanceof t?p:new t((function(v){v(p)}))).then(c,u)}d((i=i.apply(n,[])).next())}))}class zm{constructor(e,t,i,a){this.size=e,this.width=t,this.height=i,this.charLength=a,this.chars=""}static parse(e){const t=e.split(" "),i=t[0],a=i.split("x");return new zm(i,+a[0],+a[1],+t[1])}get src(){return"data:image/jpeg;base64,"+this.chars}get isValid(){return this.chars.length==this.charLength&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(this.chars)}}class km{constructor(e,t,i,a){this.src=e,this.gcode=t,this.params=i,this.comment=a}}class Ey extends km{constructor(e,t,i,a){super(e,t,i,a),this.params=i}}class ao extends km{constructor(e,t,i,a){super(e,t,void 0,i),this.toolIndex=a}}class wy{constructor(e,t,i,a=0){this.layer=e,this.commands=t,this.lineNumber=i,this.height=a}}class qc{constructor(e){this.lines=[],this.preamble=new wy(-1,[],0),this.layers=[],this.curZ=0,this.maxZ=0,this.metadata={thumbnails:{}},this.tolerance=0,this.tolerance=e??this.tolerance}parseGCode(e){const t=Array.isArray(e)?e:e.split(`
`);this.lines=this.lines.concat(t);const i=this.lines2commands(t);this.groupIntoLayers(i);const a=this.parseMetadata(i.filter((s=>s.comment))).thumbnails;for(const[s,c]of Object.entries(a))this.metadata.thumbnails[s]=c;return{layers:this.layers,metadata:this.metadata}}lines2commands(e){return e.map((t=>this.parseCommand(t)))}parseCommand(e,t=!0){var i;const a=e.trim().split(";"),s=a[0],c=t&&a[1]||void 0,u=s.split(/([a-zA-Z])/g).slice(1).map((p=>p.trim())),d=u.length?`${(i=u[0])===null||i===void 0?void 0:i.toLowerCase()}${u[1]}`:"",h=this.parseParams(u.slice(2));switch(d){case"g0":case"g00":case"g1":case"g01":case"g2":case"g02":case"g3":case"g03":return new Ey(e,d,h,c);case"t0":return new ao(e,d,c,0);case"t1":return new ao(e,d,c,1);case"t2":return new ao(e,d,c,2);case"t3":return new ao(e,d,c,3);case"t4":return new ao(e,d,c,4);case"t5":return new ao(e,d,c,5);case"t6":return new ao(e,d,c,6);case"t7":return new ao(e,d,c,7);default:return new km(e,d,h,c)}}parseMove(e){return e.reduce(((t,i)=>{const a=i.charAt(0).toLowerCase();return a!="x"&&a!="y"&&a!="z"&&a!="e"&&a!="r"&&a!="f"&&a!="i"&&a!="j"||(t[a]=parseFloat(i.slice(1))),t}),{})}isAlpha(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90}parseParams(e){return e.reduce(((t,i,a,s)=>{if(a%2==0)return t;let c=s[a-1];return c=c.toLowerCase(),this.isAlpha(c)&&(t[c]=parseFloat(i)),t}),{})}groupIntoLayers(e){var t;for(let i=0;i<e.length;i++){const a=e[i];if(a instanceof Ey){const s=a.params;if(s.z&&(this.curZ=s.z),((t=s.e)!==null&&t!==void 0?t:0)>0&&(s.x!=null||s.y!=null)&&Math.abs(this.curZ-(this.maxZ||-1/0))>this.tolerance){const c=Math.abs(this.curZ-this.maxZ);this.maxZ=this.curZ,this.layers.push(new wy(this.layers.length,[],i,c))}}this.maxLayer.commands.push(a)}return this.layers}get maxLayer(){var e;return(e=this.layers[this.layers.length-1])!==null&&e!==void 0?e:this.preamble}parseMetadata(e){const t={};let i;for(const a of e){const s=a.comment;if(!s)continue;const c=s.indexOf("thumbnail begin"),u=s.indexOf("thumbnail end");c>-1?i=zm.parse(s.slice(c+15).trim()):i&&(u==-1?i.chars+=s.trim():(i.isValid&&(t[i.size]=i),i=void 0))}return{thumbnails:t}}}qc.prototype.parseGcode=qc.prototype.parseGCode;const My={type:"change"},tp={type:"start"},Ay={type:"end"},Rc=new Im,Ty=new lo,FO=Math.cos(70*SE.DEG2RAD);class OO extends da{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fa.ROTATE,MIDDLE:Fa.DOLLY,RIGHT:Fa.PAN},this.touches={ONE:Oa.ROTATE,TWO:Oa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(le){le.addEventListener("keydown",Oe),this._domElementKeyEvents=le},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(My),i.update(),s=a.NONE},this.update=(function(){const le=new B,ue=new aa().setFromUnitVectors(e.up,new B(0,1,0)),xe=ue.clone().invert(),ge=new B,Me=new aa,we=new B,Ie=2*Math.PI;return function(Ze=null){const D=i.object.position;le.copy(D).sub(i.target),le.applyQuaternion(ue),u.setFromVector3(le),i.autoRotate&&s===a.NONE&&N((function(ye){return ye!==null?2*Math.PI/60*i.autoRotateSpeed*ye:2*Math.PI/60/60*i.autoRotateSpeed})(Ze)),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let T=i.minAzimuthAngle,Y=i.maxAzimuthAngle;isFinite(T)&&isFinite(Y)&&(T<-Math.PI?T+=Ie:T>Math.PI&&(T-=Ie),Y<-Math.PI?Y+=Ie:Y>Math.PI&&(Y-=Ie),u.theta=T<=Y?Math.max(T,Math.min(Y,u.theta)):u.theta>(T+Y)/2?Math.max(T,u.theta):Math.min(Y,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&O||i.object.isOrthographicCamera?u.radius=X(u.radius):u.radius=X(u.radius*h),le.setFromSpherical(u),le.applyQuaternion(xe),D.copy(i.target).add(le),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let Ae=!1;if(i.zoomToCursor&&O){let ye=null;if(i.object.isPerspectiveCamera){const Ce=le.length();ye=X(Ce*h);const qe=Ce-ye;i.object.position.addScaledVector(R,qe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ce=new B(I.x,I.y,0);Ce.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0;const qe=new B(I.x,I.y,0);qe.unproject(i.object),i.object.position.sub(qe).add(Ce),i.object.updateMatrixWorld(),ye=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ye).add(i.object.position):(Rc.origin.copy(i.object.position),Rc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Rc.direction))<FO?e.lookAt(i.target):(Ty.setFromNormalAndCoplanarPoint(i.object.up,i.target),Rc.intersectPlane(Ty,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0);return h=1,O=!1,!!(Ae||ge.distanceToSquared(i.object.position)>c||8*(1-Me.dot(i.object.quaternion))>c||we.distanceToSquared(i.target)>0)&&(i.dispatchEvent(My),ge.copy(i.object.position),Me.copy(i.object.quaternion),we.copy(i.target),!0)}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Fe),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Oe),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const c=1e-6,u=new yy,d=new yy;let h=1;const p=new B,v=new ht,g=new ht,S=new ht,E=new ht,w=new ht,x=new ht,_=new ht,C=new ht,M=new ht,R=new B,I=new ht;let O=!1;const F=[],de={};function b(){return Math.pow(.95,i.zoomSpeed)}function N(le){d.theta-=le}function ae(le){d.phi-=le}const ne=(function(){const le=new B;return function(ue,xe){le.setFromMatrixColumn(xe,0),le.multiplyScalar(-ue),p.add(le)}})(),pe=(function(){const le=new B;return function(ue,xe){i.screenSpacePanning===!0?le.setFromMatrixColumn(xe,1):(le.setFromMatrixColumn(xe,0),le.crossVectors(i.object.up,le)),le.multiplyScalar(ue),p.add(le)}})(),H=(function(){const le=new B;return function(ue,xe){const ge=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;le.copy(Me).sub(i.target);let we=le.length();we*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*ue*we/ge.clientHeight,i.object.matrix),pe(2*xe*we/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(ue*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),pe(xe*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Q(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(le){if(!i.zoomToCursor)return;O=!0;const ue=i.domElement.getBoundingClientRect(),xe=le.clientX-ue.left,ge=le.clientY-ue.top,Me=ue.width,we=ue.height;I.x=xe/Me*2-1,I.y=-ge/we*2+1,R.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function X(le){return Math.max(i.minDistance,Math.min(i.maxDistance,le))}function ie(le){v.set(le.clientX,le.clientY)}function $(le){E.set(le.clientX,le.clientY)}function P(){if(F.length===1)v.set(F[0].pageX,F[0].pageY);else{const le=.5*(F[0].pageX+F[1].pageX),ue=.5*(F[0].pageY+F[1].pageY);v.set(le,ue)}}function z(){if(F.length===1)E.set(F[0].pageX,F[0].pageY);else{const le=.5*(F[0].pageX+F[1].pageX),ue=.5*(F[0].pageY+F[1].pageY);E.set(le,ue)}}function W(){const le=F[0].pageX-F[1].pageX,ue=F[0].pageY-F[1].pageY,xe=Math.sqrt(le*le+ue*ue);_.set(0,xe)}function q(le){if(F.length==1)g.set(le.pageX,le.pageY);else{const xe=Be(le),ge=.5*(le.pageX+xe.x),Me=.5*(le.pageY+xe.y);g.set(ge,Me)}S.subVectors(g,v).multiplyScalar(i.rotateSpeed);const ue=i.domElement;N(2*Math.PI*S.x/ue.clientHeight),ae(2*Math.PI*S.y/ue.clientHeight),v.copy(g)}function ee(le){if(F.length===1)w.set(le.pageX,le.pageY);else{const ue=Be(le),xe=.5*(le.pageX+ue.x),ge=.5*(le.pageY+ue.y);w.set(xe,ge)}x.subVectors(w,E).multiplyScalar(i.panSpeed),H(x.x,x.y),E.copy(w)}function Z(le){const ue=Be(le),xe=le.pageX-ue.x,ge=le.pageY-ue.y,Me=Math.sqrt(xe*xe+ge*ge);C.set(0,Me),M.set(0,Math.pow(C.y/_.y,i.zoomSpeed)),Q(M.y),_.copy(C)}function _e(le){i.enabled!==!1&&(F.length===0&&(i.domElement.setPointerCapture(le.pointerId),i.domElement.addEventListener("pointermove",ve),i.domElement.addEventListener("pointerup",be)),(function(ue){F.push(ue)})(le),le.pointerType==="touch"?(function(ue){switch(Lt(ue),F.length){case 1:switch(i.touches.ONE){case Oa.ROTATE:if(i.enableRotate===!1)return;P(),s=a.TOUCH_ROTATE;break;case Oa.PAN:if(i.enablePan===!1)return;z(),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(i.touches.TWO){case Oa.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;i.enableZoom&&W(),i.enablePan&&z(),s=a.TOUCH_DOLLY_PAN;break;case Oa.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;i.enableZoom&&W(),i.enableRotate&&P(),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(tp)})(le):(function(ue){let xe;switch(ue.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Fa.DOLLY:if(i.enableZoom===!1)return;(function(ge){re(ge),_.set(ge.clientX,ge.clientY)})(ue),s=a.DOLLY;break;case Fa.ROTATE:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enablePan===!1)return;$(ue),s=a.PAN}else{if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}break;case Fa.PAN:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}else{if(i.enablePan===!1)return;$(ue),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(tp)})(le))}function ve(le){i.enabled!==!1&&(le.pointerType==="touch"?(function(ue){switch(Lt(ue),s){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;q(ue),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ee(ue),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enablePan&&ee(xe)})(ue),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enableRotate&&q(xe)})(ue),i.update();break;default:s=a.NONE}})(le):(function(ue){switch(s){case a.ROTATE:if(i.enableRotate===!1)return;(function(xe){g.set(xe.clientX,xe.clientY),S.subVectors(g,v).multiplyScalar(i.rotateSpeed);const ge=i.domElement;N(2*Math.PI*S.x/ge.clientHeight),ae(2*Math.PI*S.y/ge.clientHeight),v.copy(g),i.update()})(ue);break;case a.DOLLY:if(i.enableZoom===!1)return;(function(xe){C.set(xe.clientX,xe.clientY),M.subVectors(C,_),M.y>0?Q(b()):M.y<0&&se(b()),_.copy(C),i.update()})(ue);break;case a.PAN:if(i.enablePan===!1)return;(function(xe){w.set(xe.clientX,xe.clientY),x.subVectors(w,E).multiplyScalar(i.panSpeed),H(x.x,x.y),E.copy(w),i.update()})(ue)}})(le))}function be(le){(function(ue){delete de[ue.pointerId];for(let xe=0;xe<F.length;xe++)if(F[xe].pointerId==ue.pointerId)return void F.splice(xe,1)})(le),F.length===0&&(i.domElement.releasePointerCapture(le.pointerId),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(Ay),s=a.NONE}function Fe(le){i.enabled!==!1&&i.enableZoom!==!1&&s===a.NONE&&(le.preventDefault(),i.dispatchEvent(tp),(function(ue){re(ue),ue.deltaY<0?se(b()):ue.deltaY>0&&Q(b()),i.update()})(le),i.dispatchEvent(Ay))}function Oe(le){i.enabled!==!1&&i.enablePan!==!1&&(function(ue){let xe=!1;switch(ue.code){case i.keys.UP:ue.ctrlKey||ue.metaKey||ue.shiftKey?ae(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:ue.ctrlKey||ue.metaKey||ue.shiftKey?ae(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:ue.ctrlKey||ue.metaKey||ue.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:ue.ctrlKey||ue.metaKey||ue.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),xe=!0}xe&&(ue.preventDefault(),i.update())})(le)}function j(le){i.enabled!==!1&&le.preventDefault()}function Lt(le){let ue=de[le.pointerId];ue===void 0&&(ue=new ht,de[le.pointerId]=ue),ue.set(le.pageX,le.pageY)}function Be(le){const ue=le.pointerId===F[0].pointerId?F[1]:F[0];return de[ue.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Fe,{passive:!1}),this.update()}}Ne.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},rr.line={uniforms:Um.merge([Ne.common,Ne.fog,Ne.line]),vertexShader:`
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
		`};class VE extends Eo{constructor(e){super({type:"LineMaterial",uniforms:Um.clone(rr.line.uniforms),vertexShader:rr.line.vertexShader,fragmentShader:rr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const by=new Pr,Pc=new B;class GE extends SO{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new on([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new on([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Up(t,6,1);return this.setAttribute("instanceStart",new fo(i,3,0)),this.setAttribute("instanceEnd",new fo(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Up(t,6,1);return this.setAttribute("instanceColorStart",new fo(i,3,0)),this.setAttribute("instanceColorEnd",new fo(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new pO(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),by.setFromBufferAttribute(t),this.boundingBox.union(by))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)Pc.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Pc)),Pc.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Pc));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Cy=new B,Ry=new B,wn=new Ot,Mn=new Ot,ti=new Ot,np=new B,rp=new Gt,An=new EO,Py=new B,Lc=new Pr,Dc=new li,ni=new Ot;let ri,Qo;function Ly(n,e,t){return ni.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ni.multiplyScalar(1/ni.w),ni.x=Qo/t.width,ni.y=Qo/t.height,ni.applyMatrix4(n.projectionMatrixInverse),ni.multiplyScalar(1/ni.w),Math.abs(Math.max(ni.x,ni.y))}class zO extends jr{constructor(e=new GE,t=new VE({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let c=0,u=0,d=t.count;c<d;c++,u+=2)Cy.fromBufferAttribute(t,c),Ry.fromBufferAttribute(i,c),a[u]=u===0?0:a[u-1],a[u+1]=a[u]+Cy.distanceTo(Ry);const s=new Up(a,2,1);return e.setAttribute("instanceDistanceStart",new fo(s,1,0)),e.setAttribute("instanceDistanceEnd",new fo(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,a=e.camera;a!==null||i||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ri=e.ray;const c=this.matrixWorld,u=this.geometry,d=this.material;let h,p;Qo=d.linewidth+s,u.boundingSphere===null&&u.computeBoundingSphere(),Dc.copy(u.boundingSphere).applyMatrix4(c),i?h=.5*Qo:h=Ly(a,Math.max(a.near,Dc.distanceToPoint(ri.origin)),d.resolution),Dc.radius+=h,ri.intersectsSphere(Dc)!==!1&&(u.boundingBox===null&&u.computeBoundingBox(),Lc.copy(u.boundingBox).applyMatrix4(c),i?p=.5*Qo:p=Ly(a,Math.max(a.near,Lc.distanceToPoint(ri.origin)),d.resolution),Lc.expandByScalar(p),ri.intersectsBox(Lc)!==!1&&(i?(function(v,g){const S=v.matrixWorld,E=v.geometry,w=E.attributes.instanceStart,x=E.attributes.instanceEnd;for(let _=0,C=Math.min(E.instanceCount,w.count);_<C;_++){An.start.fromBufferAttribute(w,_),An.end.fromBufferAttribute(x,_),An.applyMatrix4(S);const M=new B,R=new B;ri.distanceSqToSegment(An.start,An.end,R,M),R.distanceTo(M)<.5*Qo&&g.push({point:R,pointOnLine:M,distance:ri.origin.distanceTo(R),object:v,face:null,faceIndex:_,uv:null,uv1:null})}})(this,t):(function(v,g,S){const E=g.projectionMatrix,w=v.material.resolution,x=v.matrixWorld,_=v.geometry,C=_.attributes.instanceStart,M=_.attributes.instanceEnd,R=Math.min(_.instanceCount,C.count),I=-g.near;ri.at(1,ti),ti.w=1,ti.applyMatrix4(g.matrixWorldInverse),ti.applyMatrix4(E),ti.multiplyScalar(1/ti.w),ti.x*=w.x/2,ti.y*=w.y/2,ti.z=0,np.copy(ti),rp.multiplyMatrices(g.matrixWorldInverse,x);for(let O=0,F=R;O<F;O++){if(wn.fromBufferAttribute(C,O),Mn.fromBufferAttribute(M,O),wn.w=1,Mn.w=1,wn.applyMatrix4(rp),Mn.applyMatrix4(rp),wn.z>I&&Mn.z>I)continue;if(wn.z>I){const ne=wn.z-Mn.z,pe=(wn.z-I)/ne;wn.lerp(Mn,pe)}else if(Mn.z>I){const ne=Mn.z-wn.z,pe=(Mn.z-I)/ne;Mn.lerp(wn,pe)}wn.applyMatrix4(E),Mn.applyMatrix4(E),wn.multiplyScalar(1/wn.w),Mn.multiplyScalar(1/Mn.w),wn.x*=w.x/2,wn.y*=w.y/2,Mn.x*=w.x/2,Mn.y*=w.y/2,An.start.copy(wn),An.start.z=0,An.end.copy(Mn),An.end.z=0;const de=An.closestPointToPointParameter(np,!0);An.at(de,Py);const b=SE.lerp(wn.z,Mn.z,de),N=b>=-1&&b<=1,ae=np.distanceTo(Py)<.5*Qo;if(N&&ae){An.start.fromBufferAttribute(C,O),An.end.fromBufferAttribute(M,O),An.start.applyMatrix4(x),An.end.applyMatrix4(x);const ne=new B,pe=new B;ri.distanceSqToSegment(An.start,An.end,pe,ne),S.push({point:pe,pointOnLine:ne,distance:ri.origin.distanceTo(pe),object:v,face:null,faceIndex:O,uv:null,uv1:null})}}})(this,a,t)))}}class kO extends Sf{constructor(e,t,i,a,s=4473924,c=8947848){s=new nt(s),c=new nt(c);const u=Math.round(e/t);i=Math.round(i/a)*a/2;const d=[],h=[];let p=0;for(let g=-1*(e=u*t/2);g<=e;g+=t){d.push(g,0,-1*i,g,0,i);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}for(let g=-1*i;g<=i;g+=a){d.push(-1*e,0,g,e,0,g);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}const v=new Bn;v.setAttribute("position",new on(d,3)),v.setAttribute("color",new on(h,3)),super(v,new Wl({vertexColors:!0,toneMapped:!1}))}}function BO(n,e,t,i){const a=(function(c,u,d){c*=.5,u*=.5,d*=.5;const h=new Bn,p=[];return p.push(-c,-u,-d,-c,u,-d,-c,u,-d,c,u,-d,c,u,-d,c,-u,-d,c,-u,-d,-c,-u,-d,-c,-u,d,-c,u,d,-c,u,d,c,u,d,c,u,d,c,-u,d,c,-u,d,-c,-u,d,-c,-u,-d,-c,-u,d,-c,u,-d,-c,u,d,c,u,-d,c,u,d,c,-u,-d,c,-u,d),h.setAttribute("position",new on(p,3)),h})(n,e,t),s=new Sf(a,new vO({color:new nt(i),dashSize:3,gapSize:1}));return s.computeLineDistances(),s}var xl=function(){var n=0,e=document.createElement("div");function t(p){return e.appendChild(p.dom),p}function i(p){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===p?"block":"none";n=p}e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",(function(p){p.preventDefault(),i(++n%e.children.length)}),!1);var a=(performance||Date).now(),s=a,c=0,u=t(new xl.Panel("FPS","#0ff","#002")),d=t(new xl.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new xl.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=s+1e3&&(u.update(1e3*c/(p-s),100),s=p,c=0,h)){var v=performance.memory;h.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};xl.Panel=function(n,e,t){var i=1/0,a=0,s=Math.round,c=s(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,v=3*c,g=15*c,S=74*c,E=30*c,w=document.createElement("canvas");w.width=u,w.height=d,w.style.cssText="width:80px;height:48px";var x=w.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,u,d),x.fillStyle=e,x.fillText(n,h,p),x.fillRect(v,g,S,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v,g,S,E),{dom:w,update:function(_,C){i=Math.min(i,_),a=Math.max(a,_),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,u,g),x.fillStyle=e,x.fillText(s(_)+" "+n+" ("+s(i)+"-"+s(a)+")",h,p),x.drawImage(w,v+c,g,S-c,E,v,g,S-c,E),x.fillRect(v+S-c,g,c,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v+S-c,g,c,s((1-_/C)*E))}}};var HO=xl;class Dy{constructor(e,t){this.openFolders=[],this.watchedObject=e,this.options=t,this.gui=new Yc,this.gui.title("Dev info"),this.setup()}setup(){this.loadOpenFolders(),this.options&&!this.options.renderer||this.setupRedererFolder(),this.options&&!this.options.camera||this.setupCameraFolder(),this.options&&!this.options.parser||this.setupParserFolder(),this.options&&!this.options.buildVolume||this.setupBuildVolumeFolder(),this.options&&!this.options.devHelpers||this.setupDevHelpers()}reset(){this.gui.destroy(),this.gui=new Yc,this.gui.title("Dev info"),this.setup()}loadOpenFolders(){this.openFolders=JSON.parse(localStorage.getItem("dev-gui-open")||"{}").open||[]}saveOpenFolders(){this.openFolders=this.gui.foldersRecursive().filter((e=>!e._closed)).map((e=>e._title)),console.log(this.openFolders),localStorage.setItem("dev-gui-open",JSON.stringify({open:this.openFolders}))}setupRedererFolder(){const e=this.gui.addFolder("Render Info");this.openFolders.includes("Render Info")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.renderer.info.render,"triangles").listen(),e.add(this.watchedObject.renderer.info.render,"calls").listen(),e.add(this.watchedObject.renderer.info.render,"lines").listen(),e.add(this.watchedObject.renderer.info.render,"points").listen(),e.add(this.watchedObject.renderer.info.memory,"geometries").listen(),e.add(this.watchedObject.renderer.info.memory,"textures").listen(),e.add(this.watchedObject,"_lastRenderTime").listen()}setupCameraFolder(){const e=this.gui.addFolder("Camera");this.openFolders.includes("Camera")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()}));const t=e.addFolder("Camera position");t.add(this.watchedObject.camera.position,"x").listen(),t.add(this.watchedObject.camera.position,"y").listen(),t.add(this.watchedObject.camera.position,"z").listen();const i=e.addFolder("Camera rotation");i.add(this.watchedObject.camera.rotation,"x").listen(),i.add(this.watchedObject.camera.rotation,"y").listen(),i.add(this.watchedObject.camera.rotation,"z").listen()}setupParserFolder(){const e=this.gui.addFolder("Parser");this.openFolders.includes("Parser")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.parser,"curZ").listen(),e.add(this.watchedObject.parser,"maxZ").listen(),e.add(this.watchedObject.parser,"tolerance").listen(),e.add(this.watchedObject.parser.layers,"length").name("layers.count").listen(),e.add(this.watchedObject.parser.lines,"length").name("lines.count").listen()}setupBuildVolumeFolder(){const e=this.gui.addFolder("Build Volume");this.openFolders.includes("Build Volume")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.buildVolume,"x").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"y").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"z").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()}))}setupDevHelpers(){const e=this.gui.addFolder("Dev Helpers");this.openFolders.includes("Dev Helpers")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject,"_wireframe").listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject,"render").listen(),e.add(this.watchedObject,"clear").listen()}}class VO extends Bn{constructor(e=[new B],t=.6,i=.2,a=8){super(),this.type="ExtrusionGeometry",this.parameters={points:e,lineWidth:t,lineHeight:i,radialSegments:a,closed:!1};const s=new B,c=new B,u=new ht,d=[],h=[],p=[],v=[];function g(S){const[E,w,x]=(function(_){const C=e[_],M=new B,R=new B,I=new B,O=new B;M.copy(C).sub(e[_-1]||C).normalize().add((e[_+1]||C).clone().sub(C).normalize()).normalize();let F=Number.MAX_VALUE;const de=Math.abs(M.x),b=Math.abs(M.y),N=Math.abs(M.z);return de<=F&&(F=de,R.set(1,0,0)),b<=F&&(F=b,R.set(0,1,0)),N<=F&&R.set(0,0,1),O.crossVectors(M,R).normalize(),R.crossVectors(M,O),I.crossVectors(M,R),[C,R,I]})(S);for(let _=0;_<=a;_++){const C=_/a*Math.PI*2,M=Math.sin(C),R=-Math.cos(C);c.x=R*w.x+M*x.x,c.y=R*w.y+M*x.y,c.z=R*w.z+M*x.z,c.normalize(),h.push(c.x,c.y,c.z),s.x=E.x+t*c.x*.5,s.y=E.y+t*c.y*.5,s.z=E.z+i*c.z*.5,d.push(s.x,s.y,s.z)}}(function(){for(let S=0;S<e.length;S++)g(S);g(closed===!1?e.length-1:0),(function(){for(let S=0;S<e.length;S++)for(let E=0;E<=a;E++)u.x=S/e.length,u.y=E/a,p.push(u.x,u.y)})(),(function(){for(let S=1;S<e.length;S++)for(let E=1;E<=a;E++){const w=(a+1)*(S-1)+(E-1),x=(a+1)*S+(E-1),_=(a+1)*S+E,C=(a+1)*(S-1)+E;v.push(w,x,C),v.push(x,_,C)}})()})(),this.setIndex(v),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(p,2))}}class Sl{static get initial(){const e=new Sl;return Object.assign(e,{x:0,y:0,z:0,r:0,e:0,i:0,j:0,t:0}),e}}const ip={h:0,s:0,l:0};class ss{constructor(e){var t,i,a,s,c,u,d,h,p;if(this.minLayerThreshold=.05,this.renderExtrusion=!0,this.renderTravel=!1,this.renderTubes=!1,this.extrusionWidth=.6,this.singleLayerMode=!1,this.initialCameraPosition=[-100,400,450],this.debug=!1,this.inches=!1,this.nonTravelmoves=[],this.disableGradient=!1,this.state=Sl.initial,this.beyondFirstMove=!1,this.disposables=[],this._extrusionColor=ss.defaultExtrusionColor,this.renderLayerIndex=0,this._geometries={},this._backgroundColor=new nt(14737632),this._travelColor=new nt(10027008),this._toolColors={},this.devMode=!1,this._lastRenderTime=0,this._wireframe=!1,this.minLayerThreshold=(t=e.minLayerThreshold)!==null&&t!==void 0?t:this.minLayerThreshold,this.parser=new qc(this.minLayerThreshold),this.scene=new iO,this.scene.background=this._backgroundColor,e.backgroundColor!==void 0&&(this.backgroundColor=new nt(e.backgroundColor)),this.targetId=e.targetId,this.endLayer=e.endLayer,this.startLayer=e.startLayer,this.lineWidth=e.lineWidth,this.lineHeight=e.lineHeight,this.buildVolume=e.buildVolume,this.initialCameraPosition=(i=e.initialCameraPosition)!==null&&i!==void 0?i:this.initialCameraPosition,this.debug=(a=e.debug)!==null&&a!==void 0?a:this.debug,this.renderExtrusion=(s=e.renderExtrusion)!==null&&s!==void 0?s:this.renderExtrusion,this.renderTravel=(c=e.renderTravel)!==null&&c!==void 0?c:this.renderTravel,this.nonTravelmoves=(u=e.nonTravelMoves)!==null&&u!==void 0?u:this.nonTravelmoves,this.renderTubes=(d=e.renderTubes)!==null&&d!==void 0?d:this.renderTubes,this.extrusionWidth=(h=e.extrusionWidth)!==null&&h!==void 0?h:this.extrusionWidth,this.devMode=(p=e.devMode)!==null&&p!==void 0?p:this.devMode,this.stats=this.devMode?new HO:void 0,e.extrusionColor!==void 0&&(this.extrusionColor=e.extrusionColor),e.travelColor!==void 0&&(this.travelColor=new nt(e.travelColor)),e.topLayerColor!==void 0&&(this.topLayerColor=new nt(e.topLayerColor)),e.lastSegmentColor!==void 0&&(this.lastSegmentColor=new nt(e.lastSegmentColor)),e.toolColors){this._toolColors={};for(const[S,E]of Object.entries(e.toolColors))this._toolColors[parseInt(S)]=new nt(E)}if(e.disableGradient!==void 0&&(this.disableGradient=e.disableGradient),console.info("Using THREE r"+vf),console.debug("opts",e),this.targetId&&console.warn("`targetId` is deprecated and will removed in the future. Use `canvas` instead."),e.canvas)this.canvas=e.canvas,this.renderer=new Ip({canvas:this.canvas,preserveDrawingBuffer:!0});else{if(!this.targetId)throw Error("Set either opts.canvas or opts.targetId");const S=document.getElementById(this.targetId);if(!S)throw new Error("Unable to find element "+this.targetId);this.renderer=new Ip({preserveDrawingBuffer:!0}),this.canvas=this.renderer.domElement,S.appendChild(this.canvas)}this.camera=new pr(25,this.canvas.offsetWidth/this.canvas.offsetHeight,10,5e3),this.camera.position.fromArray(this.initialCameraPosition);const v=this.camera.far,g=.8*v;this.scene.fog=new Om(this._backgroundColor,g,v),this.resize(),this.controls=new OO(this.camera,this.renderer.domElement),this.initScene(),this.animate(),e.allowDragNDrop&&this._enableDropHandler(),this.initStats()}get extrusionColor(){return this._extrusionColor}set extrusionColor(e){if(Array.isArray(e)){this._extrusionColor=[];for(const[t,i]of e.entries())this._extrusionColor[t]=new nt(i)}else this._extrusionColor=new nt(e)}get currentToolColor(){var e;return this._extrusionColor===void 0?ss.defaultExtrusionColor:this._extrusionColor instanceof nt?this._extrusionColor:(e=this._extrusionColor[this.state.t])!==null&&e!==void 0?e:ss.defaultExtrusionColor}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=new nt(e),this.scene.background=this._backgroundColor}get travelColor(){return this._travelColor}set travelColor(e){this._travelColor=new nt(e)}get topLayerColor(){return this._topLayerColor}set topLayerColor(e){this._topLayerColor=e!==void 0?new nt(e):void 0}get lastSegmentColor(){return this._lastSegmentColor}set lastSegmentColor(e){this._lastSegmentColor=e!==void 0?new nt(e):void 0}get layers(){return[this.parser.preamble].concat(this.parser.layers.concat())}get maxLayerIndex(){var e;return((e=this.endLayer)!==null&&e!==void 0?e:this.layers.length)-1}get minLayerIndex(){var e;return this.singleLayerMode?this.maxLayerIndex:((e=this.startLayer)!==null&&e!==void 0?e:0)-1}animate(){var e;this.animationFrameId=requestAnimationFrame((()=>this.animate())),this.controls.update(),this.renderer.render(this.scene,this.camera),(e=this.stats)===null||e===void 0||e.update()}processGCode(e){this.parser.parseGCode(e),this.render()}initScene(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);for(;this.disposables.length>0;){const e=this.disposables.pop();e&&e.dispose()}if(this.debug&&this.buildVolume){const e=new wO(Math.max(this.buildVolume.x/2,this.buildVolume.y/2)+20);this.scene.add(e)}if(this.buildVolume&&this.drawBuildVolume(),this.renderTubes){console.warn("Volumetric rendering is experimental. It may not work as expected or change in the future.");const e=new xO(13421772,.3*Math.PI),t=new yO(16777215,Math.PI,void 0,.001);t.position.set(0,500,500),this.scene.add(e),this.scene.add(t)}}createGroup(e){const t=new cl;return t.name=e,t.quaternion.setFromEuler(new Vl(-Math.PI/2,0,0)),this.buildVolume?t.position.set(-this.buildVolume.x/2,0,this.buildVolume.y/2):t.position.set(-100,0,100),t}render(){const e=performance.now();this.group=this.createGroup("allLayers"),this.state=Sl.initial,this.initScene();for(let t=0;t<this.layers.length;t++)this.renderLayer(t);this.batchGeometries(),this.scene.add(this.group),this.renderer.render(this.scene,this.camera),this._lastRenderTime=performance.now()-e}renderAnimated(e=1){return ep(this,void 0,void 0,(function*(){return this.initScene(),this.renderLayerIndex=0,this.renderFrameLoop(e>0?e:1)}))}renderFrameLoop(e){return new Promise((t=>{const i=()=>{this.renderLayerIndex>this.layers.length-1?t():(this.renderFrame(e),requestAnimationFrame(i))};i()}))}renderFrame(e){this.group=this.createGroup("layer"+this.renderLayerIndex);for(let t=0;t<e&&this.renderLayerIndex+t<this.layers.length;t++)this.renderLayer(this.renderLayerIndex),this.renderLayerIndex++;this.batchGeometries(),this.scene.add(this.group)}renderLayer(e){var t,i,a,s,c,u,d,h;if(e>this.maxLayerIndex)return;const p=this.layers[e],v={extrusion:[],travel:[],z:this.state.z,height:p.height};for(const g of p.commands)if(g.gcode!="g20"){if(g.gcode.startsWith("t")){this.doRenderExtrusion(v,e),v.extrusion=[];const S=g;this.state.t=S.toolIndex}else if(["g0","g00","g1","g01","g2","g02","g3","g03"].indexOf(g.gcode)>-1){const S=g,E={x:(t=S.params.x)!==null&&t!==void 0?t:this.state.x,y:(i=S.params.y)!==null&&i!==void 0?i:this.state.y,z:(a=S.params.z)!==null&&a!==void 0?a:this.state.z,r:(s=S.params.r)!==null&&s!==void 0?s:this.state.r,e:(c=S.params.e)!==null&&c!==void 0?c:this.state.e,i:(u=S.params.i)!==null&&u!==void 0?u:this.state.i,j:(d=S.params.j)!==null&&d!==void 0?d:this.state.j,t:this.state.t};if(e>=this.minLayerIndex){const w=((h=S.params.e)!==null&&h!==void 0?h:0)>0||this.nonTravelmoves.indexOf(g.gcode)>-1;(E.x!=this.state.x||E.y!=this.state.y||E.z!=this.state.z)&&(w&&this.renderExtrusion||!w&&this.renderTravel)&&(g.gcode=="g2"||g.gcode=="g3"||g.gcode=="g02"||g.gcode=="g03"?this.addArcSegment(v,this.state,E,w,g.gcode=="g2"||g.gcode=="g02"):this.addLineSegment(v,this.state,E,w))}this.state.x=E.x,this.state.y=E.y,this.state.z=E.z,this.beyondFirstMove||(this.beyondFirstMove=!0)}}else this.setInches();this.doRenderExtrusion(v,e)}doRenderExtrusion(e,t){var i,a;if(this.renderExtrusion){let s=this.currentToolColor;if(!this.singleLayerMode&&!this.renderTubes&&!this.disableGradient){const c=.1+.7*t/this.layers.length;s.getHSL(ip),s=new nt().setHSL(ip.h,ip.s,c)}if(t==this.layers.length-1){const c=(i=this._topLayerColor)!==null&&i!==void 0?i:s,u=(a=this._lastSegmentColor)!==null&&a!==void 0?a:c,d=e.extrusion.splice(-3),h=e.extrusion.splice(-3);this.renderTubes?(this.addTubeLine(e.extrusion,c.getHex(),e.height),this.addTubeLine([...h,...d],u.getHex(),e.height)):(this.addLine(e.extrusion,c.getHex()),this.addLine([...h,...d],u.getHex()))}else this.renderTubes?this.addTubeLine(e.extrusion,s.getHex(),e.height):this.addLine(e.extrusion,s.getHex())}this.renderTravel&&this.addLine(e.travel,this._travelColor.getHex())}setInches(){this.beyondFirstMove?console.warn("Switching units after movement is already made is discouraged and is not supported."):this.inches=!0}drawBuildVolume(){if(!this.buildVolume)return;this.scene.add(new kO(this.buildVolume.x,10,this.buildVolume.y,10));const e=BO(this.buildVolume.x,this.buildVolume.z,this.buildVolume.y,8947848);e.position.setY(this.buildVolume.z/2),this.scene.add(e)}clear(){this.resetState(),this.parser=new qc(this.minLayerThreshold)}resetState(){var e;this.startLayer=1,this.endLayer=1/0,this.singleLayerMode=!1,this.beyondFirstMove=!1,this.state=Sl.initial,(e=this.devGui)===null||e===void 0||e.reset(),this._geometries={}}resize(){const[e,t]=[this.canvas.offsetWidth,this.canvas.offsetHeight];this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1)}addLineSegment(e,t,i,a){(a?e.extrusion:e.travel).push(t.x,t.y,t.z,i.x,i.y,i.z)}addArcSegment(e,t,i,a,s){const c=a?e.extrusion:e.travel,u=t.x,d=t.y,h=t.z,p=i.x,v=i.y,g=i.z;let S=i.r,E=i.i,w=i.j;if(S){const Q=p-u,se=v-d,re=Math.sqrt(Math.pow(Q/2,2)+Math.pow(se/2,2));S=Math.max(S,re);const X=Math.pow(Q,2)+Math.pow(se,2),ie=Math.pow(S,2)-X/4;let $=Math.sqrt(ie/X);(s&&S<0||!s&&S>0)&&($=-$),E=Q/2+se*$,w=se/2-Q*$}const x=u==p&&d==v,_=u+E,C=d+w,M=Math.sqrt(E*E+w*w),R=Math.atan2(-w,-E),I=Math.atan2(v-C,p-_);let O;x?O=2*Math.PI:(O=s?R-I:I-R,O<0&&(O+=2*Math.PI));let F=M*O/1.8;this.inches&&(F*=25),F<1&&(F=1);let de=O/F;de*=s?-1:1;const b=[];b.push({x:u,y:d,z:h});const N=(h-g)/F;let ae=u,ne=d,pe=h,H=R;for(let Q=0;Q<F-1;Q++)H+=de,ae=_+M*Math.cos(H),ne=C+M*Math.sin(H),pe+=N,b.push({x:ae,y:ne,z:pe});b.push({x:i.x,y:i.y,z:i.z});for(let Q=0;Q<b.length-1;Q++)c.push(b[Q].x,b[Q].y,b[Q].z,b[Q+1].x,b[Q+1].y,b[Q+1].z)}addLine(e,t){var i;if(typeof this.lineWidth=="number"&&this.lineWidth>0)return void this.addThickLine(e,t);const a=new Bn;a.setAttribute("position",new on(e,3)),this.disposables.push(a);const s=new Wl({color:t});this.disposables.push(s);const c=new Sf(a,s);(i=this.group)===null||i===void 0||i.add(c)}addTubeLine(e,t,i=.2){let a=[];const s=[];for(let c=0;c<e.length;c+=6){const u=e.slice(c,c+9),d=new B(u[0],u[1],u[2]),h=new B(u[3],u[4],u[5]),p=new B(u[6],u[7],u[8]);a.push(d),h.equals(p)||(a.push(h),s.push(a),a=[])}s.forEach((c=>{var u;const d=new VO(c,this.extrusionWidth,this.lineHeight||i,4);(u=this._geometries)[t]||(u[t]=[]),this._geometries[t].push(d)}))}addThickLine(e,t){var i;if(!e.length||!this.lineWidth)return;const a=new GE;this.disposables.push(a);const s=new VE({color:t,linewidth:this.lineWidth/(1e3*window.devicePixelRatio)});this.disposables.push(s),a.setPositions(e);const c=new zO(a,s);(i=this.group)===null||i===void 0||i.add(c)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[],this.controls.dispose(),this.renderer.dispose(),this.cancelAnimation()}cancelAnimation(){this.animationFrameId!==void 0&&cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0}_enableDropHandler(){console.warn("Drag and drop is deprecated as a library feature. See the demo how to implement your own."),this.canvas.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.canvas.classList.add("dragging")})),this.canvas.addEventListener("dragleave",(e=>{e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging")})),this.canvas.addEventListener("drop",(e=>ep(this,void 0,void 0,(function*(){var t,i;e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging");const a=((i=(t=e.dataTransfer)===null||t===void 0?void 0:t.files)!==null&&i!==void 0?i:[])[0];this.clear(),yield this._readFromStream(a.stream()),this.render()}))))}batchGeometries(){if(this._geometries)for(const e in this._geometries){const t=this.createBatchMesh(parseInt(e));for(;this._geometries[e].length>0;){const i=this._geometries[e].pop();t.addGeometry(i)}}}createBatchMesh(e){var t;const i=this._geometries[e],a=new mO({color:e,wireframe:this._wireframe});this.disposables.push(a);const s=i.reduce(((u,d)=>3*d.attributes.position.count+u),0),c=new dO(i.length,s,void 0,a);return this.disposables.push(c),(t=this.group)===null||t===void 0||t.add(c),c}_readFromStream(e){var t,i;return ep(this,void 0,void 0,(function*(){const a=e.getReader();let s,c="",u=0;do{console.debug("reading from stream"),s=yield a.read(),u+=(i=(t=s.value)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0;const h=(d=s.value,new TextDecoder("utf-8").decode(d)),p=h.lastIndexOf(`
`),v=h.slice(0,p);this.parser.parseGCode(c+v),c=h.slice(p)}while(!s.done);var d;console.debug("read from stream",u)}))}initGui(){typeof this.devMode=="boolean"&&this.devMode===!0?this.devGui=new Dy(this):typeof this.devMode=="object"&&(this.devGui=new Dy(this,this.devMode))}initStats(){var e;this.stats&&(typeof this.devMode=="object"&&(this.statsContainer=this.devMode.statsContainer),((e=this.statsContainer)!==null&&e!==void 0?e:document.body).appendChild(this.stats.dom),this.stats.dom.classList.add("stats"),this.initGui())}}ss.defaultExtrusionColor=new nt("hotpink");const GO=function(n){return new ss(n)},WO="_canvas_1cjd4_5",$O={canvas:WO},XO=({gcode:n,endLayer:e})=>{const t=Ve.useRef(null),i=Ve.useRef({webgl:null});return Ve.useEffect(()=>{t.current&&!i.current.webgl&&(i.current.webgl=GO({canvas:t.current,lineWidth:4,lineHeight:4,renderTravel:!1,renderExtrusion:!0,renderTubes:!1,startLayer:0,endLayer:100,backgroundColor:"black",buildVolume:{x:220,y:220,z:0}}),i.current.webgl.processGCode(n),i.current.webgl.render())},[]),Ve.useEffect(()=>{t.current&&i.current.webgl&&i.current.webgl.processGCode(n)},[n]),Ve.useEffect(()=>{t.current&&i.current.webgl&&(i.current.webgl.endLayer=e,i.current.webgl.render())},[e]),tt.jsx("canvas",{ref:t,className:$O.canvas})};Ny();function Iy(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function WE(...n){return e=>{let t=!1;const i=n.map(a=>{const s=Iy(a,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let a=0;a<i.length;a++){const s=i[a];typeof s=="function"?s():Iy(n[a],null)}}}}function wo(...n){return Ve.useCallback(WE(...n),n)}function Fp(n){const e=jO(n),t=Ve.forwardRef((i,a)=>{const{children:s,...c}=i,u=Ve.Children.toArray(s),d=u.find(qO);if(d){const h=d.props.children,p=u.map(v=>v===d?Ve.Children.count(h)>1?Ve.Children.only(null):Ve.isValidElement(h)?h.props.children:null:v);return tt.jsx(e,{...c,ref:a,children:Ve.isValidElement(h)?Ve.cloneElement(h,void 0,p):null})}return tt.jsx(e,{...c,ref:a,children:s})});return t.displayName=`${n}.Slot`,t}function jO(n){const e=Ve.forwardRef((t,i)=>{const{children:a,...s}=t;if(Ve.isValidElement(a)){const c=ZO(a),u=KO(s,a.props);return a.type!==Ve.Fragment&&(u.ref=i?WE(i,c):c),Ve.cloneElement(a,u)}return Ve.Children.count(a)>1?Ve.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var YO=Symbol("radix.slottable");function qO(n){return Ve.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===YO}function KO(n,e){const t={...e};for(const i in e){const a=n[i],s=e[i];/^on[A-Z]/.test(i)?a&&s?t[i]=(...u)=>{const d=s(...u);return a(...u),d}:a&&(t[i]=a):i==="style"?t[i]={...a,...s}:i==="className"&&(t[i]=[a,s].filter(Boolean).join(" "))}return{...n,...t}}function ZO(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var JO=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],$l=JO.reduce((n,e)=>{const t=Fp(`Primitive.${e}`),i=Ve.forwardRef((a,s)=>{const{asChild:c,...u}=a,d=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),tt.jsx(d,{...u,ref:s})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function $E(n,e=[]){let t=[];function i(s,c){const u=Ve.createContext(c),d=t.length;t=[...t,c];const h=v=>{const{scope:g,children:S,...E}=v,w=g?.[n]?.[d]||u,x=Ve.useMemo(()=>E,Object.values(E));return tt.jsx(w.Provider,{value:x,children:S})};h.displayName=s+"Provider";function p(v,g){const S=g?.[n]?.[d]||u,E=Ve.useContext(S);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${s}\``)}return[h,p]}const a=()=>{const s=t.map(c=>Ve.createContext(c));return function(u){const d=u?.[n]||s;return Ve.useMemo(()=>({[`__scope${n}`]:{...u,[n]:d}}),[u,d])}};return a.scopeName=n,[i,QO(a,...e)]}function QO(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const c=i.reduce((u,{useScope:d,scopeName:h})=>{const v=d(s)[`__scope${h}`];return{...u,...v}},{});return Ve.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function ez(n){const e=n+"CollectionProvider",[t,i]=$E(e),[a,s]=t(e,{collectionRef:{current:null},itemMap:new Map}),c=w=>{const{scope:x,children:_}=w,C=so.useRef(null),M=so.useRef(new Map).current;return tt.jsx(a,{scope:x,itemMap:M,collectionRef:C,children:_})};c.displayName=e;const u=n+"CollectionSlot",d=Fp(u),h=so.forwardRef((w,x)=>{const{scope:_,children:C}=w,M=s(u,_),R=wo(x,M.collectionRef);return tt.jsx(d,{ref:R,children:C})});h.displayName=u;const p=n+"CollectionItemSlot",v="data-radix-collection-item",g=Fp(p),S=so.forwardRef((w,x)=>{const{scope:_,children:C,...M}=w,R=so.useRef(null),I=wo(x,R),O=s(p,_);return so.useEffect(()=>(O.itemMap.set(R,{ref:R,...M}),()=>void O.itemMap.delete(R))),tt.jsx(g,{[v]:"",ref:I,children:C})});S.displayName=p;function E(w){const x=s(n+"CollectionConsumer",w);return so.useCallback(()=>{const C=x.collectionRef.current;if(!C)return[];const M=Array.from(C.querySelectorAll(`[${v}]`));return Array.from(x.itemMap.values()).sort((O,F)=>M.indexOf(O.ref.current)-M.indexOf(F.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:c,Slot:h,ItemSlot:S},E,i]}function ns(n,e,{checkForDefaultPrevented:t=!0}={}){return function(a){if(n?.(a),t===!1||!a.defaultPrevented)return e?.(a)}}var XE=globalThis?.document?Ve.useLayoutEffect:()=>{},tz=ZM[" useInsertionEffect ".trim().toString()]||XE;function nz({prop:n,defaultProp:e,onChange:t=()=>{},caller:i}){const[a,s,c]=rz({defaultProp:e,onChange:t}),u=n!==void 0,d=u?n:a;{const p=Ve.useRef(n!==void 0);Ve.useEffect(()=>{const v=p.current;v!==u&&console.warn(`${i} is changing from ${v?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=u},[u,i])}const h=Ve.useCallback(p=>{if(u){const v=iz(p)?p(n):p;v!==n&&c.current?.(v)}else s(p)},[u,n,s,c]);return[d,h]}function rz({defaultProp:n,onChange:e}){const[t,i]=Ve.useState(n),a=Ve.useRef(t),s=Ve.useRef(e);return tz(()=>{s.current=e},[e]),Ve.useEffect(()=>{a.current!==t&&(s.current?.(t),a.current=t)},[t,a]),[t,i,s]}function iz(n){return typeof n=="function"}var oz=Ve.createContext(void 0);function az(n){const e=Ve.useContext(oz);return n||e||"ltr"}function sz(n){const e=Ve.useRef({value:n,previous:n});return Ve.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}function lz(n){const[e,t]=Ve.useState(void 0);return XE(()=>{if(n){t({width:n.offsetWidth,height:n.offsetHeight});const i=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const s=a[0];let c,u;if("borderBoxSize"in s){const d=s.borderBoxSize,h=Array.isArray(d)?d[0]:d;c=h.inlineSize,u=h.blockSize}else c=n.offsetWidth,u=n.offsetHeight;t({width:c,height:u})});return i.observe(n,{box:"border-box"}),()=>i.unobserve(n)}else t(void 0)},[n]),e}function jE(n,[e,t]){return Math.min(t,Math.max(e,n))}var YE=["PageUp","PageDown"],qE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],KE={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Es="Slider",[Op,uz,cz]=ez(Es),[ZE,Fz]=$E(Es,[cz]),[fz,Ef]=ZE(Es),JE=Ve.forwardRef((n,e)=>{const{name:t,min:i=0,max:a=100,step:s=1,orientation:c="horizontal",disabled:u=!1,minStepsBetweenThumbs:d=0,defaultValue:h=[i],value:p,onValueChange:v=()=>{},onValueCommit:g=()=>{},inverted:S=!1,form:E,...w}=n,x=Ve.useRef(new Set),_=Ve.useRef(0),M=c==="horizontal"?dz:hz,[R=[],I]=nz({prop:p,defaultProp:h,onChange:ae=>{[...x.current][_.current]?.focus(),v(ae)}}),O=Ve.useRef(R);function F(ae){const ne=_z(R,ae);N(ae,ne)}function de(ae){N(ae,_.current)}function b(){const ae=O.current[_.current];R[_.current]!==ae&&g(R)}function N(ae,ne,{commit:pe}={commit:!1}){const H=Ez(s),Q=wz(Math.round((ae-i)/s)*s+i,H),se=jE(Q,[i,a]);I((re=[])=>{const X=vz(re,se,ne);if(Sz(X,d*s)){_.current=X.indexOf(se);const ie=String(X)!==String(re);return ie&&pe&&g(X),ie?X:re}else return re})}return tt.jsx(fz,{scope:n.__scopeSlider,name:t,disabled:u,min:i,max:a,valueIndexToChangeRef:_,thumbs:x.current,values:R,orientation:c,form:E,children:tt.jsx(Op.Provider,{scope:n.__scopeSlider,children:tt.jsx(Op.Slot,{scope:n.__scopeSlider,children:tt.jsx(M,{"aria-disabled":u,"data-disabled":u?"":void 0,...w,ref:e,onPointerDown:ns(w.onPointerDown,()=>{u||(O.current=R)}),min:i,max:a,inverted:S,onSlideStart:u?void 0:F,onSlideMove:u?void 0:de,onSlideEnd:u?void 0:b,onHomeKeyDown:()=>!u&&N(i,0,{commit:!0}),onEndKeyDown:()=>!u&&N(a,R.length-1,{commit:!0}),onStepKeyDown:({event:ae,direction:ne})=>{if(!u){const Q=YE.includes(ae.key)||ae.shiftKey&&qE.includes(ae.key)?10:1,se=_.current,re=R[se],X=s*Q*ne;N(re+X,se,{commit:!0})}}})})})})});JE.displayName=Es;var[QE,ew]=ZE(Es,{startEdge:"left",endEdge:"right",size:"width",direction:1}),dz=Ve.forwardRef((n,e)=>{const{min:t,max:i,dir:a,inverted:s,onSlideStart:c,onSlideMove:u,onSlideEnd:d,onStepKeyDown:h,...p}=n,[v,g]=Ve.useState(null),S=wo(e,M=>g(M)),E=Ve.useRef(void 0),w=az(a),x=w==="ltr",_=x&&!s||!x&&s;function C(M){const R=E.current||v.getBoundingClientRect(),I=[0,R.width],F=Bm(I,_?[t,i]:[i,t]);return E.current=R,F(M-R.left)}return tt.jsx(QE,{scope:n.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width",children:tt.jsx(tw,{dir:w,"data-orientation":"horizontal",...p,ref:S,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:M=>{const R=C(M.clientX);c?.(R)},onSlideMove:M=>{const R=C(M.clientX);u?.(R)},onSlideEnd:()=>{E.current=void 0,d?.()},onStepKeyDown:M=>{const I=KE[_?"from-left":"from-right"].includes(M.key);h?.({event:M,direction:I?-1:1})}})})}),hz=Ve.forwardRef((n,e)=>{const{min:t,max:i,inverted:a,onSlideStart:s,onSlideMove:c,onSlideEnd:u,onStepKeyDown:d,...h}=n,p=Ve.useRef(null),v=wo(e,p),g=Ve.useRef(void 0),S=!a;function E(w){const x=g.current||p.current.getBoundingClientRect(),_=[0,x.height],M=Bm(_,S?[i,t]:[t,i]);return g.current=x,M(w-x.top)}return tt.jsx(QE,{scope:n.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:tt.jsx(tw,{"data-orientation":"vertical",...h,ref:v,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:w=>{const x=E(w.clientY);s?.(x)},onSlideMove:w=>{const x=E(w.clientY);c?.(x)},onSlideEnd:()=>{g.current=void 0,u?.()},onStepKeyDown:w=>{const _=KE[S?"from-bottom":"from-top"].includes(w.key);d?.({event:w,direction:_?-1:1})}})})}),tw=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,onSlideStart:i,onSlideMove:a,onSlideEnd:s,onHomeKeyDown:c,onEndKeyDown:u,onStepKeyDown:d,...h}=n,p=Ef(Es,t);return tt.jsx($l.span,{...h,ref:e,onKeyDown:ns(n.onKeyDown,v=>{v.key==="Home"?(c(v),v.preventDefault()):v.key==="End"?(u(v),v.preventDefault()):YE.concat(qE).includes(v.key)&&(d(v),v.preventDefault())}),onPointerDown:ns(n.onPointerDown,v=>{const g=v.target;g.setPointerCapture(v.pointerId),v.preventDefault(),p.thumbs.has(g)?g.focus():i(v)}),onPointerMove:ns(n.onPointerMove,v=>{v.target.hasPointerCapture(v.pointerId)&&a(v)}),onPointerUp:ns(n.onPointerUp,v=>{const g=v.target;g.hasPointerCapture(v.pointerId)&&(g.releasePointerCapture(v.pointerId),s(v))})})}),nw="SliderTrack",rw=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=Ef(nw,t);return tt.jsx($l.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...i,ref:e})});rw.displayName=nw;var zp="SliderRange",iw=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=Ef(zp,t),s=ew(zp,t),c=Ve.useRef(null),u=wo(e,c),d=a.values.length,h=a.values.map(g=>sw(g,a.min,a.max)),p=d>1?Math.min(...h):0,v=100-Math.max(...h);return tt.jsx($l.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...i,ref:u,style:{...n.style,[s.startEdge]:p+"%",[s.endEdge]:v+"%"}})});iw.displayName=zp;var kp="SliderThumb",ow=Ve.forwardRef((n,e)=>{const t=uz(n.__scopeSlider),[i,a]=Ve.useState(null),s=wo(e,u=>a(u)),c=Ve.useMemo(()=>i?t().findIndex(u=>u.ref.current===i):-1,[t,i]);return tt.jsx(pz,{...n,ref:s,index:c})}),pz=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,index:i,name:a,...s}=n,c=Ef(kp,t),u=ew(kp,t),[d,h]=Ve.useState(null),p=wo(e,C=>h(C)),v=d?c.form||!!d.closest("form"):!0,g=lz(d),S=c.values[i],E=S===void 0?0:sw(S,c.min,c.max),w=gz(i,c.values.length),x=g?.[u.size],_=x?yz(x,E,u.direction):0;return Ve.useEffect(()=>{if(d)return c.thumbs.add(d),()=>{c.thumbs.delete(d)}},[d,c.thumbs]),tt.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u.startEdge]:`calc(${E}% + ${_}px)`},children:[tt.jsx(Op.ItemSlot,{scope:n.__scopeSlider,children:tt.jsx($l.span,{role:"slider","aria-label":n["aria-label"]||w,"aria-valuemin":c.min,"aria-valuenow":S,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...s,ref:p,style:S===void 0?{display:"none"}:n.style,onFocus:ns(n.onFocus,()=>{c.valueIndexToChangeRef.current=i})})}),v&&tt.jsx(aw,{name:a??(c.name?c.name+(c.values.length>1?"[]":""):void 0),form:c.form,value:S},i)]})});ow.displayName=kp;var mz="RadioBubbleInput",aw=Ve.forwardRef(({__scopeSlider:n,value:e,...t},i)=>{const a=Ve.useRef(null),s=wo(a,i),c=sz(e);return Ve.useEffect(()=>{const u=a.current;if(!u)return;const d=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(c!==e&&p){const v=new Event("input",{bubbles:!0});p.call(u,e),u.dispatchEvent(v)}},[c,e]),tt.jsx($l.input,{style:{display:"none"},...t,ref:s,defaultValue:e})});aw.displayName=mz;function vz(n=[],e,t){const i=[...n];return i[t]=e,i.sort((a,s)=>a-s)}function sw(n,e,t){const s=100/(t-e)*(n-e);return jE(s,[0,100])}function gz(n,e){return e>2?`Value ${n+1} of ${e}`:e===2?["Minimum","Maximum"][n]:void 0}function _z(n,e){if(n.length===1)return 0;const t=n.map(a=>Math.abs(a-e)),i=Math.min(...t);return t.indexOf(i)}function yz(n,e,t){const i=n/2,s=Bm([0,50],[0,i]);return(i-s(e)*t)*t}function xz(n){return n.slice(0,-1).map((e,t)=>n[t+1]-e)}function Sz(n,e){if(e>0){const t=xz(n);return Math.min(...t)>=e}return!0}function Bm(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(n[1]-n[0]);return e[0]+i*(t-n[0])}}function Ez(n){return(String(n).split(".")[1]||"").length}function wz(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}var Mz=JE,Az=rw,Tz=iw,bz=ow;const Cz="_Root_mtzzd_1",Rz="_Track_mtzzd_12",Pz="_Range_mtzzd_21",Lz="_Thumb_mtzzd_28",Ic={Root:Cz,Track:Rz,Range:Pz,Thumb:Lz},Dz=n=>tt.jsxs(Mz,{onValueChange:n.onChange,className:Ic.Root,orientation:"vertical",defaultValue:[n.value],max:100,step:1,children:[tt.jsx(Az,{className:Ic.Track,children:tt.jsx(Tz,{className:Ic.Range})}),tt.jsx(bz,{className:Ic.Thumb,"aria-label":"Volume"})]}),Iz=(n,e)=>n===e,Uz=({url:n,data:e})=>{const{state:t,dispatch:i}=vL({startLayer:sh(0),endLayer:sh(50)});return qP(()=>(console.log("useEffectEq",e.gcode),i.runLoadGcodeLines({url:x2({absUrl:n,relUrl:e.gcode})}),()=>{console.log("cleanup")}),Iz,e.gcode),tt.jsx(z2,{viewPictures:tt.jsx(B2,{pictures:e.pictures}),viewGcode:tt.jsx(XO,{gcode:kS(t.gcodeLines,{NotAsked:()=>[],Loading:()=>[],Loaded:a=>a,Error:a=>[]}),endLayer:Ml(t.endLayer)}),item:e,viewSlider:tt.jsx(Dz,{value:Ml(t.endLayer),onChange:a=>{i.emitSetEndLayer(sh(a))}})})},Nz=()=>{const{state:n,dispatch:e}=b2();return Ve.useEffect(()=>{console.log("render",n)}),Ve.useEffect(()=>{const t=E2();e.runFetchIndex({url:t.url})},[]),kS(n.index,{NotAsked:()=>tt.jsx(nc,{}),Loading:()=>tt.jsx(nc,{viewInfo:tt.jsx(tt.Fragment,{children:"Loading"})}),Loaded:t=>tt.jsx(nc,{children:tt.jsx(U2,{items:t.content.map(i=>tt.jsx(Uz,{url:t.url,data:i}))})}),Error:t=>tt.jsx(nc,{viewErrors:tt.jsx(tt.Fragment,{children:"Error: "+t})})})};KM.createRoot(document.getElementById("root")).render(tt.jsx(Nz,{}));
