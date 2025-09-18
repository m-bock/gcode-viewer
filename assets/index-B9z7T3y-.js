function E1(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(i,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function Qy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hh={exports:{}},cl={},ph={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function w1(){if(A_)return St;A_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(L,z,W){this.props=L,this.context=z,this.refs=w,this.updater=W||S}x.prototype.isReactComponent={},x.prototype.setState=function(L,z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,z,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=x.prototype;function C(L,z,W){this.props=L,this.context=z,this.refs=w,this.updater=W||S}var M=C.prototype=new _;M.constructor=C,E(M,x.prototype),M.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function de(L,z,W){var q,ee={},Z=null,_e=null;if(z!=null)for(q in z.ref!==void 0&&(_e=z.ref),z.key!==void 0&&(Z=""+z.key),z)I.call(z,q)&&!F.hasOwnProperty(q)&&(ee[q]=z[q]);var ve=arguments.length-2;if(ve===1)ee.children=W;else if(1<ve){for(var be=Array(ve),Oe=0;Oe<ve;Oe++)be[Oe]=arguments[Oe+2];ee.children=be}if(L&&L.defaultProps)for(q in ve=L.defaultProps,ve)ee[q]===void 0&&(ee[q]=ve[q]);return{$$typeof:n,type:L,key:Z,ref:_e,props:ee,_owner:O.current}}function b(L,z){return{$$typeof:n,type:L.type,key:z,ref:L.ref,props:L.props,_owner:L._owner}}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function ae(L){var z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(W){return z[W]})}var ne=/\/+/g;function pe(L,z){return typeof L=="object"&&L!==null&&L.key!=null?ae(""+L.key):z.toString(36)}function H(L,z,W,q,ee){var Z=typeof L;(Z==="undefined"||Z==="boolean")&&(L=null);var _e=!1;if(L===null)_e=!0;else switch(Z){case"string":case"number":_e=!0;break;case"object":switch(L.$$typeof){case n:case e:_e=!0}}if(_e)return _e=L,ee=ee(_e),L=q===""?"."+pe(_e,0):q,R(ee)?(W="",L!=null&&(W=L.replace(ne,"$&/")+"/"),H(ee,z,W,"",function(Oe){return Oe})):ee!=null&&(N(ee)&&(ee=b(ee,W+(!ee.key||_e&&_e.key===ee.key?"":(""+ee.key).replace(ne,"$&/")+"/")+L)),z.push(ee)),1;if(_e=0,q=q===""?".":q+":",R(L))for(var ve=0;ve<L.length;ve++){Z=L[ve];var be=q+pe(Z,ve);_e+=H(Z,z,W,be,ee)}else if(be=g(L),typeof be=="function")for(L=be.call(L),ve=0;!(Z=L.next()).done;)Z=Z.value,be=q+pe(Z,ve++),_e+=H(Z,z,W,be,ee);else if(Z==="object")throw z=String(L),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return _e}function Q(L,z,W){if(L==null)return L;var q=[],ee=0;return H(L,q,"","",function(Z){return z.call(W,Z,ee++)}),q}function se(L){if(L._status===-1){var z=L._result;z=z(),z.then(function(W){(L._status===0||L._status===-1)&&(L._status=1,L._result=W)},function(W){(L._status===0||L._status===-1)&&(L._status=2,L._result=W)}),L._status===-1&&(L._status=0,L._result=z)}if(L._status===1)return L._result.default;throw L._result}var re={current:null},X={transition:null},ie={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function $(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Q,forEach:function(L,z,W){Q(L,function(){z.apply(this,arguments)},W)},count:function(L){var z=0;return Q(L,function(){z++}),z},toArray:function(L){return Q(L,function(z){return z})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},St.Component=x,St.Fragment=t,St.Profiler=a,St.PureComponent=C,St.StrictMode=i,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,St.act=$,St.cloneElement=function(L,z,W){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var q=E({},L.props),ee=L.key,Z=L.ref,_e=L._owner;if(z!=null){if(z.ref!==void 0&&(Z=z.ref,_e=O.current),z.key!==void 0&&(ee=""+z.key),L.type&&L.type.defaultProps)var ve=L.type.defaultProps;for(be in z)I.call(z,be)&&!F.hasOwnProperty(be)&&(q[be]=z[be]===void 0&&ve!==void 0?ve[be]:z[be])}var be=arguments.length-2;if(be===1)q.children=W;else if(1<be){ve=Array(be);for(var Oe=0;Oe<be;Oe++)ve[Oe]=arguments[Oe+2];q.children=ve}return{$$typeof:n,type:L.type,key:ee,ref:Z,props:q,_owner:_e}},St.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:s,_context:L},L.Consumer=L},St.createElement=de,St.createFactory=function(L){var z=de.bind(null,L);return z.type=L,z},St.createRef=function(){return{current:null}},St.forwardRef=function(L){return{$$typeof:u,render:L}},St.isValidElement=N,St.lazy=function(L){return{$$typeof:p,_payload:{_status:-1,_result:L},_init:se}},St.memo=function(L,z){return{$$typeof:h,type:L,compare:z===void 0?null:z}},St.startTransition=function(L){var z=X.transition;X.transition={};try{L()}finally{X.transition=z}},St.unstable_act=$,St.useCallback=function(L,z){return re.current.useCallback(L,z)},St.useContext=function(L){return re.current.useContext(L)},St.useDebugValue=function(){},St.useDeferredValue=function(L){return re.current.useDeferredValue(L)},St.useEffect=function(L,z){return re.current.useEffect(L,z)},St.useId=function(){return re.current.useId()},St.useImperativeHandle=function(L,z,W){return re.current.useImperativeHandle(L,z,W)},St.useInsertionEffect=function(L,z){return re.current.useInsertionEffect(L,z)},St.useLayoutEffect=function(L,z){return re.current.useLayoutEffect(L,z)},St.useMemo=function(L,z){return re.current.useMemo(L,z)},St.useReducer=function(L,z,W){return re.current.useReducer(L,z,W)},St.useRef=function(L){return re.current.useRef(L)},St.useState=function(L){return re.current.useState(L)},St.useSyncExternalStore=function(L,z,W){return re.current.useSyncExternalStore(L,z,W)},St.useTransition=function(){return re.current.useTransition()},St.version="18.3.1",St}var T_;function em(){return T_||(T_=1,ph.exports=w1()),ph.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function M1(){if(b_)return cl;b_=1;var n=em(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!s.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:S,props:v,_owner:a.current}}return cl.Fragment=t,cl.jsx=c,cl.jsxs=c,cl}var C_;function A1(){return C_||(C_=1,hh.exports=M1()),hh.exports}var tt=A1(),lc={},mh={exports:{}},tr={},vh={exports:{}},gh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function T1(){return R_||(R_=1,(function(n){function e(X,ie){var $=X.length;X.push(ie);e:for(;0<$;){var L=$-1>>>1,z=X[L];if(0<a(z,ie))X[L]=ie,X[$]=z,$=L;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ie=X[0],$=X.pop();if($!==ie){X[0]=$;e:for(var L=0,z=X.length,W=z>>>1;L<W;){var q=2*(L+1)-1,ee=X[q],Z=q+1,_e=X[Z];if(0>a(ee,$))Z<z&&0>a(_e,ee)?(X[L]=_e,X[Z]=$,L=Z):(X[L]=ee,X[q]=$,L=q);else if(Z<z&&0>a(_e,$))X[L]=_e,X[Z]=$,L=Z;else break e}}return ie}function a(X,ie){var $=X.sortIndex-ie.sortIndex;return $!==0?$:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,g=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(X){for(var ie=t(h);ie!==null;){if(ie.callback===null)i(h);else if(ie.startTime<=X)i(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function R(X){if(w=!1,M(X),!E)if(t(d)!==null)E=!0,se(I);else{var ie=t(h);ie!==null&&re(R,ie.startTime-X)}}function I(X,ie){E=!1,w&&(w=!1,_(de),de=-1),S=!0;var $=g;try{for(M(ie),v=t(d);v!==null&&(!(v.expirationTime>ie)||X&&!ae());){var L=v.callback;if(typeof L=="function"){v.callback=null,g=v.priorityLevel;var z=L(v.expirationTime<=ie);ie=n.unstable_now(),typeof z=="function"?v.callback=z:v===t(d)&&i(d),M(ie)}else i(d);v=t(d)}if(v!==null)var W=!0;else{var q=t(h);q!==null&&re(R,q.startTime-ie),W=!1}return W}finally{v=null,g=$,S=!1}}var O=!1,F=null,de=-1,b=5,N=-1;function ae(){return!(n.unstable_now()-N<b)}function ne(){if(F!==null){var X=n.unstable_now();N=X;var ie=!0;try{ie=F(!0,X)}finally{ie?pe():(O=!1,F=null)}}else O=!1}var pe;if(typeof C=="function")pe=function(){C(ne)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Q=H.port2;H.port1.onmessage=ne,pe=function(){Q.postMessage(null)}}else pe=function(){x(ne,0)};function se(X){F=X,O||(O=!0,pe())}function re(X,ie){de=x(function(){X(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,se(I))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var $=g;g=ie;try{return X()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var $=g;g=X;try{return ie()}finally{g=$}},n.unstable_scheduleCallback=function(X,ie,$){var L=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?L+$:L):$=L,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=$+z,X={id:p++,callback:ie,priorityLevel:X,startTime:$,expirationTime:z,sortIndex:-1},$>L?(X.sortIndex=$,e(h,X),t(d)===null&&X===t(h)&&(w?(_(de),de=-1):w=!0,re(R,$-L))):(X.sortIndex=z,e(d,X),E||S||(E=!0,se(I))),X},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(X){var ie=g;return function(){var $=g;g=ie;try{return X.apply(this,arguments)}finally{g=$}}}})(gh)),gh}var L_;function b1(){return L_||(L_=1,vh.exports=T1()),vh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function C1(){if(P_)return tr;P_=1;var n=em(),e=b1();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function s(r,o){c(r,o),c(r+"Capture",o)}function c(r,o){for(a[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(r){return d.call(v,r)?!0:d.call(p,r)?!1:h.test(r)?v[r]=!0:(p[r]=!0,!1)}function S(r,o,l,f){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,o,l,f){if(o===null||typeof o>"u"||S(r,o,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function w(r,o,l,f,m,y,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=r,this.type=o,this.sanitizeURL=y,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){x[r]=new w(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];x[o]=new w(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){x[r]=new w(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){x[r]=new w(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){x[r]=new w(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){x[r]=new w(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){x[r]=new w(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){x[r]=new w(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){x[r]=new w(r,5,!1,r.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){x[r]=new w(r,1,!1,r.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){x[r]=new w(r,1,!1,r.toLowerCase(),null,!0,!0)});function M(r,o,l,f){var m=x.hasOwnProperty(o)?x[o]:null;(m!==null?m.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,l,m,f)&&(l=null),f||m===null?g(o)&&(l===null?r.removeAttribute(o):r.setAttribute(o,""+l)):m.mustUseProperty?r[m.propertyName]=l===null?m.type===3?!1:"":l:(o=m.attributeName,f=m.attributeNamespace,l===null?r.removeAttribute(o):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?r.setAttributeNS(f,o,l):r.setAttribute(o,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),ae=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,L;function z(r){if(L===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);L=o&&o[1]||""}return`
`+L+r}var W=!1;function q(r,o){if(!r||W)return"";W=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(oe){var f=oe}Reflect.construct(r,[],o)}else{try{o.call()}catch(oe){f=oe}r.call(o.prototype)}else{try{throw Error()}catch(oe){f=oe}r()}}catch(oe){if(oe&&f&&typeof oe.stack=="string"){for(var m=oe.stack.split(`
`),y=f.stack.split(`
`),A=m.length-1,U=y.length-1;1<=A&&0<=U&&m[A]!==y[U];)U--;for(;1<=A&&0<=U;A--,U--)if(m[A]!==y[U]){if(A!==1||U!==1)do if(A--,U--,0>U||m[A]!==y[U]){var k=`
`+m[A].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=A&&0<=U);break}}}finally{W=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?z(r):""}function ee(r){switch(r.tag){case 5:return z(r.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return r=q(r.type,!1),r;case 11:return r=q(r.type.render,!1),r;case 1:return r=q(r.type,!0),r;default:return""}}function Z(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case O:return"Portal";case b:return"Profiler";case de:return"StrictMode";case pe:return"Suspense";case H:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case ae:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case ne:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Q:return o=r.displayName||null,o!==null?o:Z(r.type)||"Memo";case se:o=r._payload,r=r._init;try{return Z(r(o))}catch{}}return null}function _e(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(o);case 8:return o===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Oe(r){var o=be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,y.call(this,A)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function ze(r){r._valueTracker||(r._valueTracker=Oe(r))}function j(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var l=o.getValue(),f="";return r&&(f=be(r)?r.checked?"true":"false":r.value),r=f,r!==l?(o.setValue(r),!0):!1}function Dt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function He(r,o){var l=o.checked;return $({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function le(r,o){var l=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;l=ve(o.value!=null?o.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ue(r,o){o=o.checked,o!=null&&M(r,"checked",o,!1)}function xe(r,o){ue(r,o);var l=ve(o.value),f=o.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Me(r,o.type,l):o.hasOwnProperty("defaultValue")&&Me(r,o.type,ve(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function ge(r,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,l||o===r.value||(r.value=o),r.defaultValue=o}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Me(r,o,l){(o!=="number"||Dt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var we=Array.isArray;function Ie(r,o,l,f){if(r=r.options,o){o={};for(var m=0;m<l.length;m++)o["$"+l[m]]=!0;for(l=0;l<r.length;l++)m=o.hasOwnProperty("$"+r[l].value),r[l].selected!==m&&(r[l].selected=m),m&&f&&(r[l].defaultSelected=!0)}else{for(l=""+ve(l),o=null,m=0;m<r.length;m++){if(r[m].value===l){r[m].selected=!0,f&&(r[m].defaultSelected=!0);return}o!==null||r[m].disabled||(o=r[m])}o!==null&&(o.selected=!0)}}function Ze(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function D(r,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(we(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}r._wrapperState={initialValue:ve(l)}}function T(r,o){var l=ve(o.value),f=ve(o.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),o.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function Y(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function Ae(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?Ae(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ce,qe=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,f,m){MSApp.execUnsafeLocalFunction(function(){return r(o,l,f,m)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function De(r,o){if(o){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=o;return}}r.textContent=o}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(r){lt.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),Be[o]=Be[r]})});function At(r,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Be.hasOwnProperty(r)&&Be[r]?(""+o).trim():o+"px"}function Pe(r,o){r=r.style;for(var l in o)if(o.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=At(l,o[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,m):r[l]=m}}var It=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(r,o){if(o){if(It[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function st(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var et=null;function $e(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var _t=null,V=null,ke=null;function Re(r){if(r=qs(r)){if(typeof _t!="function")throw Error(t(280));var o=r.stateNode;o&&(o=wu(o),_t(r.stateNode,r.type,o))}}function me(r){V?ke?ke.push(r):ke=[r]:V=r}function Ue(){if(V){var r=V,o=ke;if(ke=V=null,Re(r),o)for(r=0;r<o.length;r++)Re(o[r])}}function ot(r,o){return r(o)}function wt(){}var en=!1;function vn(r,o,l){if(en)return r(o,l);en=!0;try{return ot(r,o,l)}finally{en=!1,(V!==null||ke!==null)&&(wt(),Ue())}}function Lt(r,o){var l=r.stateNode;if(l===null)return null;var f=wu(l);if(f===null)return null;l=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var cn=!1;if(u)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){cn=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{cn=!1}function nu(r,o,l,f,m,y,A,U,k){var oe=Array.prototype.slice.call(arguments,3);try{o.apply(l,oe)}catch(Ee){this.onError(Ee)}}var Po=!1,di=null,Do=!1,Fi=null,ru={onError:function(r){Po=!0,di=r}};function iu(r,o,l,f,m,y,A,U,k){Po=!1,di=null,nu.apply(ru,arguments)}function Nf(r,o,l,f,m,y,A,U,k){if(iu.apply(this,arguments),Po){if(Po){var oe=di;Po=!1,di=null}else throw Error(t(198));Do||(Do=!0,Fi=oe)}}function hi(r){var o=r,l=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(l=o.return),r=o.return;while(r)}return o.tag===3?l:null}function ou(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function P(r){if(hi(r)!==r)throw Error(t(188))}function J(r){var o=r.alternate;if(!o){if(o=hi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var l=r,f=o;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return P(m),r;if(y===f)return P(m),o;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=y;else{for(var A=!1,U=m.child;U;){if(U===l){A=!0,l=m,f=y;break}if(U===f){A=!0,f=m,l=y;break}U=U.sibling}if(!A){for(U=y.child;U;){if(U===l){A=!0,l=y,f=m;break}if(U===f){A=!0,f=y,l=m;break}U=U.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:o}function fe(r){return r=J(r),r!==null?he(r):null}function he(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=he(r);if(o!==null)return o;r=r.sibling}return null}var ce=e.unstable_scheduleCallback,Ge=e.unstable_cancelCallback,Qe=e.unstable_shouldYield,at=e.unstable_requestPaint,Xe=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,dt=e.unstable_ImmediatePriority,pt=e.unstable_UserBlockingPriority,Bt=e.unstable_NormalPriority,Hn=e.unstable_LowPriority,rn=e.unstable_IdlePriority,Yn=null,Tt=null;function yt(r){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Yn,r,void 0,(r.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:au,Yt=Math.log,pi=Math.LN2;function au(r){return r>>>=0,r===0?32:31-(Yt(r)/pi|0)|0}var qr=64,Oi=4194304;function tn(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function _r(r,o){var l=r.pendingLanes;if(l===0)return 0;var f=0,m=r.suspendedLanes,y=r.pingedLanes,A=l&268435455;if(A!==0){var U=A&~m;U!==0?f=tn(U):(y&=A,y!==0&&(f=tn(y)))}else A=l&~m,A!==0?f=tn(A):y!==0&&(f=tn(y));if(f===0)return 0;if(o!==0&&o!==f&&(o&m)===0&&(m=f&-f,y=o&-o,m>=y||m===16&&(y&4194240)!==0))return o;if((f&4)!==0&&(f|=l&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)l=31-Vn(o),m=1<<l,f|=r[l],o&=~m;return f}function Ps(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qn(r,o){for(var l=r.suspendedLanes,f=r.pingedLanes,m=r.expirationTimes,y=r.pendingLanes;0<y;){var A=31-Vn(y),U=1<<A,k=m[A];k===-1?((U&l)===0||(U&f)!==0)&&(m[A]=Ps(U,o)):k<=o&&(r.expiredLanes|=U),y&=~U}}function Io(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function su(){var r=qr;return qr<<=1,(qr&4194240)===0&&(qr=64),r}function ya(r){for(var o=[],l=0;31>l;l++)o.push(r);return o}function Ds(r,o,l){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Vn(o),r[o]=l}function Gw(r,o){var l=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var m=31-Vn(l),y=1<<m;o[m]=0,f[m]=-1,r[m]=-1,l&=~y}}function Ff(r,o){var l=r.entangledLanes|=o;for(r=r.entanglements;l;){var f=31-Vn(l),m=1<<f;m&o|r[f]&o&&(r[f]|=o),l&=~m}}var Ut=0;function rv(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var iv,Of,ov,av,sv,zf=!1,lu=[],zi=null,ki=null,Bi=null,Is=new Map,Us=new Map,Hi=[],Ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lv(r,o){switch(r){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Is.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(o.pointerId)}}function Ns(r,o,l,f,m,y){return r===null||r.nativeEvent!==y?(r={blockedOn:o,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[m]},o!==null&&(o=qs(o),o!==null&&Of(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),r)}function $w(r,o,l,f,m){switch(o){case"focusin":return zi=Ns(zi,r,o,l,f,m),!0;case"dragenter":return ki=Ns(ki,r,o,l,f,m),!0;case"mouseover":return Bi=Ns(Bi,r,o,l,f,m),!0;case"pointerover":var y=m.pointerId;return Is.set(y,Ns(Is.get(y)||null,r,o,l,f,m)),!0;case"gotpointercapture":return y=m.pointerId,Us.set(y,Ns(Us.get(y)||null,r,o,l,f,m)),!0}return!1}function uv(r){var o=Uo(r.target);if(o!==null){var l=hi(o);if(l!==null){if(o=l.tag,o===13){if(o=ou(l),o!==null){r.blockedOn=o,sv(r.priority,function(){ov(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function uu(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var l=Bf(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);et=f,l.target.dispatchEvent(f),et=null}else return o=qs(l),o!==null&&Of(o),r.blockedOn=l,!1;o.shift()}return!0}function cv(r,o,l){uu(r)&&l.delete(o)}function Xw(){zf=!1,zi!==null&&uu(zi)&&(zi=null),ki!==null&&uu(ki)&&(ki=null),Bi!==null&&uu(Bi)&&(Bi=null),Is.forEach(cv),Us.forEach(cv)}function Fs(r,o){r.blockedOn===o&&(r.blockedOn=null,zf||(zf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xw)))}function Os(r){function o(m){return Fs(m,r)}if(0<lu.length){Fs(lu[0],r);for(var l=1;l<lu.length;l++){var f=lu[l];f.blockedOn===r&&(f.blockedOn=null)}}for(zi!==null&&Fs(zi,r),ki!==null&&Fs(ki,r),Bi!==null&&Fs(Bi,r),Is.forEach(o),Us.forEach(o),l=0;l<Hi.length;l++)f=Hi[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Hi.length&&(l=Hi[0],l.blockedOn===null);)uv(l),l.blockedOn===null&&Hi.shift()}var xa=R.ReactCurrentBatchConfig,cu=!0;function jw(r,o,l,f){var m=Ut,y=xa.transition;xa.transition=null;try{Ut=1,kf(r,o,l,f)}finally{Ut=m,xa.transition=y}}function Yw(r,o,l,f){var m=Ut,y=xa.transition;xa.transition=null;try{Ut=4,kf(r,o,l,f)}finally{Ut=m,xa.transition=y}}function kf(r,o,l,f){if(cu){var m=Bf(r,o,l,f);if(m===null)rd(r,o,f,fu,l),lv(r,f);else if($w(m,r,o,l,f))f.stopPropagation();else if(lv(r,f),o&4&&-1<Ww.indexOf(r)){for(;m!==null;){var y=qs(m);if(y!==null&&iv(y),y=Bf(r,o,l,f),y===null&&rd(r,o,f,fu,l),y===m)break;m=y}m!==null&&f.stopPropagation()}else rd(r,o,f,null,l)}}var fu=null;function Bf(r,o,l,f){if(fu=null,r=$e(f),r=Uo(r),r!==null)if(o=hi(r),o===null)r=null;else if(l=o.tag,l===13){if(r=ou(o),r!==null)return r;r=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return fu=r,null}function fv(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case dt:return 1;case pt:return 4;case Bt:case Hn:return 16;case rn:return 536870912;default:return 16}default:return 16}}var Vi=null,Hf=null,du=null;function dv(){if(du)return du;var r,o=Hf,l=o.length,f,m="value"in Vi?Vi.value:Vi.textContent,y=m.length;for(r=0;r<l&&o[r]===m[r];r++);var A=l-r;for(f=1;f<=A&&o[l-f]===m[y-f];f++);return du=m.slice(r,1<f?1-f:void 0)}function hu(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function pu(){return!0}function hv(){return!1}function lr(r){function o(l,f,m,y,A){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=y,this.target=A,this.currentTarget=null;for(var U in r)r.hasOwnProperty(U)&&(l=r[U],this[U]=l?l(y):y[U]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?pu:hv,this.isPropagationStopped=hv,this}return $(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),o}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=lr(Sa),zs=$({},Sa,{view:0,detail:0}),qw=lr(zs),Gf,Wf,ks,mu=$({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ks&&(ks&&r.type==="mousemove"?(Gf=r.screenX-ks.screenX,Wf=r.screenY-ks.screenY):Wf=Gf=0,ks=r),Gf)},movementY:function(r){return"movementY"in r?r.movementY:Wf}}),pv=lr(mu),Kw=$({},mu,{dataTransfer:0}),Zw=lr(Kw),Jw=$({},zs,{relatedTarget:0}),$f=lr(Jw),Qw=$({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),eM=lr(Qw),tM=$({},Sa,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),nM=lr(tM),rM=$({},Sa,{data:0}),mv=lr(rM),iM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sM(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=aM[r])?!!o[r]:!1}function Xf(){return sM}var lM=$({},zs,{key:function(r){if(r.key){var o=iM[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=hu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?oM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xf,charCode:function(r){return r.type==="keypress"?hu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?hu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),uM=lr(lM),cM=$({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vv=lr(cM),fM=$({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xf}),dM=lr(fM),hM=$({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),pM=lr(hM),mM=$({},mu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),vM=lr(mM),gM=[9,13,27,32],jf=u&&"CompositionEvent"in window,Bs=null;u&&"documentMode"in document&&(Bs=document.documentMode);var _M=u&&"TextEvent"in window&&!Bs,gv=u&&(!jf||Bs&&8<Bs&&11>=Bs),_v=" ",yv=!1;function xv(r,o){switch(r){case"keyup":return gM.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ea=!1;function yM(r,o){switch(r){case"compositionend":return Sv(o);case"keypress":return o.which!==32?null:(yv=!0,_v);case"textInput":return r=o.data,r===_v&&yv?null:r;default:return null}}function xM(r,o){if(Ea)return r==="compositionend"||!jf&&xv(r,o)?(r=dv(),du=Hf=Vi=null,Ea=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return gv&&o.locale!=="ko"?null:o.data;default:return null}}var SM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!SM[r.type]:o==="textarea"}function wv(r,o,l,f){me(f),o=xu(o,"onChange"),0<o.length&&(l=new Vf("onChange","change",null,l,f),r.push({event:l,listeners:o}))}var Hs=null,Vs=null;function EM(r){Hv(r,0)}function vu(r){var o=ba(r);if(j(o))return r}function wM(r,o){if(r==="change")return o}var Mv=!1;if(u){var Yf;if(u){var qf="oninput"in document;if(!qf){var Av=document.createElement("div");Av.setAttribute("oninput","return;"),qf=typeof Av.oninput=="function"}Yf=qf}else Yf=!1;Mv=Yf&&(!document.documentMode||9<document.documentMode)}function Tv(){Hs&&(Hs.detachEvent("onpropertychange",bv),Vs=Hs=null)}function bv(r){if(r.propertyName==="value"&&vu(Vs)){var o=[];wv(o,Vs,r,$e(r)),vn(EM,o)}}function MM(r,o,l){r==="focusin"?(Tv(),Hs=o,Vs=l,Hs.attachEvent("onpropertychange",bv)):r==="focusout"&&Tv()}function AM(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return vu(Vs)}function TM(r,o){if(r==="click")return vu(o)}function bM(r,o){if(r==="input"||r==="change")return vu(o)}function CM(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Nr=typeof Object.is=="function"?Object.is:CM;function Gs(r,o){if(Nr(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var l=Object.keys(r),f=Object.keys(o);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(o,m)||!Nr(r[m],o[m]))return!1}return!0}function Cv(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Rv(r,o){var l=Cv(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=o&&f>=o)return{node:l,offset:o-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Cv(l)}}function Lv(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?Lv(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function Pv(){for(var r=window,o=Dt();o instanceof r.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)r=o.contentWindow;else break;o=Dt(r.document)}return o}function Kf(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function RM(r){var o=Pv(),l=r.focusedElem,f=r.selectionRange;if(o!==l&&l&&l.ownerDocument&&Lv(l.ownerDocument.documentElement,l)){if(f!==null&&Kf(l)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(r,l.value.length);else if(r=(o=l.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var m=l.textContent.length,y=Math.min(f.start,m);f=f.end===void 0?y:Math.min(f.end,m),!r.extend&&y>f&&(m=f,f=y,y=m),m=Rv(l,y);var A=Rv(l,f);m&&A&&(r.rangeCount!==1||r.anchorNode!==m.node||r.anchorOffset!==m.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),r.removeAllRanges(),y>f?(r.addRange(o),r.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),r.addRange(o)))}}for(o=[],r=l;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)r=o[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var LM=u&&"documentMode"in document&&11>=document.documentMode,wa=null,Zf=null,Ws=null,Jf=!1;function Dv(r,o,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Jf||wa==null||wa!==Dt(f)||(f=wa,"selectionStart"in f&&Kf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ws&&Gs(Ws,f)||(Ws=f,f=xu(Zf,"onSelect"),0<f.length&&(o=new Vf("onSelect","select",null,o,l),r.push({event:o,listeners:f}),o.target=wa)))}function gu(r,o){var l={};return l[r.toLowerCase()]=o.toLowerCase(),l["Webkit"+r]="webkit"+o,l["Moz"+r]="moz"+o,l}var Ma={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},Qf={},Iv={};u&&(Iv=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function _u(r){if(Qf[r])return Qf[r];if(!Ma[r])return r;var o=Ma[r],l;for(l in o)if(o.hasOwnProperty(l)&&l in Iv)return Qf[r]=o[l];return r}var Uv=_u("animationend"),Nv=_u("animationiteration"),Fv=_u("animationstart"),Ov=_u("transitionend"),zv=new Map,kv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(r,o){zv.set(r,o),s(o,[r])}for(var ed=0;ed<kv.length;ed++){var td=kv[ed],PM=td.toLowerCase(),DM=td[0].toUpperCase()+td.slice(1);Gi(PM,"on"+DM)}Gi(Uv,"onAnimationEnd"),Gi(Nv,"onAnimationIteration"),Gi(Fv,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(Ov,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IM=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Bv(r,o,l){var f=r.type||"unknown-event";r.currentTarget=l,Nf(f,o,void 0,r),r.currentTarget=null}function Hv(r,o){o=(o&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],m=f.event;f=f.listeners;e:{var y=void 0;if(o)for(var A=f.length-1;0<=A;A--){var U=f[A],k=U.instance,oe=U.currentTarget;if(U=U.listener,k!==y&&m.isPropagationStopped())break e;Bv(m,U,oe),y=k}else for(A=0;A<f.length;A++){if(U=f[A],k=U.instance,oe=U.currentTarget,U=U.listener,k!==y&&m.isPropagationStopped())break e;Bv(m,U,oe),y=k}}}if(Do)throw r=Fi,Do=!1,Fi=null,r}function Wt(r,o){var l=o[ud];l===void 0&&(l=o[ud]=new Set);var f=r+"__bubble";l.has(f)||(Vv(o,r,2,!1),l.add(f))}function nd(r,o,l){var f=0;o&&(f|=4),Vv(l,r,f,o)}var yu="_reactListening"+Math.random().toString(36).slice(2);function Xs(r){if(!r[yu]){r[yu]=!0,i.forEach(function(l){l!=="selectionchange"&&(IM.has(l)||nd(l,!1,r),nd(l,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[yu]||(o[yu]=!0,nd("selectionchange",!1,o))}}function Vv(r,o,l,f){switch(fv(o)){case 1:var m=jw;break;case 4:m=Yw;break;default:m=kf}l=m.bind(null,o,l,r),m=void 0,!cn||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),f?m!==void 0?r.addEventListener(o,l,{capture:!0,passive:m}):r.addEventListener(o,l,!0):m!==void 0?r.addEventListener(o,l,{passive:m}):r.addEventListener(o,l,!1)}function rd(r,o,l,f,m){var y=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var k=A.tag;if((k===3||k===4)&&(k=A.stateNode.containerInfo,k===m||k.nodeType===8&&k.parentNode===m))return;A=A.return}for(;U!==null;){if(A=Uo(U),A===null)return;if(k=A.tag,k===5||k===6){f=y=A;continue e}U=U.parentNode}}f=f.return}vn(function(){var oe=y,Ee=$e(l),Te=[];e:{var Se=zv.get(r);if(Se!==void 0){var We=Vf,Ye=r;switch(r){case"keypress":if(hu(l)===0)break e;case"keydown":case"keyup":We=uM;break;case"focusin":Ye="focus",We=$f;break;case"focusout":Ye="blur",We=$f;break;case"beforeblur":case"afterblur":We=$f;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=pv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=Zw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=dM;break;case Uv:case Nv:case Fv:We=eM;break;case Ov:We=pM;break;case"scroll":We=qw;break;case"wheel":We=vM;break;case"copy":case"cut":case"paste":We=nM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=vv}var Ke=(o&4)!==0,on=!Ke&&r==="scroll",K=Ke?Se!==null?Se+"Capture":null:Se;Ke=[];for(var G=oe,te;G!==null;){te=G;var Le=te.stateNode;if(te.tag===5&&Le!==null&&(te=Le,K!==null&&(Le=Lt(G,K),Le!=null&&Ke.push(js(G,Le,te)))),on)break;G=G.return}0<Ke.length&&(Se=new We(Se,Ye,null,l,Ee),Te.push({event:Se,listeners:Ke}))}}if((o&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",We=r==="mouseout"||r==="pointerout",Se&&l!==et&&(Ye=l.relatedTarget||l.fromElement)&&(Uo(Ye)||Ye[mi]))break e;if((We||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,We?(Ye=l.relatedTarget||l.toElement,We=oe,Ye=Ye?Uo(Ye):null,Ye!==null&&(on=hi(Ye),Ye!==on||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(We=null,Ye=oe),We!==Ye)){if(Ke=pv,Le="onMouseLeave",K="onMouseEnter",G="mouse",(r==="pointerout"||r==="pointerover")&&(Ke=vv,Le="onPointerLeave",K="onPointerEnter",G="pointer"),on=We==null?Se:ba(We),te=Ye==null?Se:ba(Ye),Se=new Ke(Le,G+"leave",We,l,Ee),Se.target=on,Se.relatedTarget=te,Le=null,Uo(Ee)===oe&&(Ke=new Ke(K,G+"enter",Ye,l,Ee),Ke.target=te,Ke.relatedTarget=on,Le=Ke),on=Le,We&&Ye)t:{for(Ke=We,K=Ye,G=0,te=Ke;te;te=Aa(te))G++;for(te=0,Le=K;Le;Le=Aa(Le))te++;for(;0<G-te;)Ke=Aa(Ke),G--;for(;0<te-G;)K=Aa(K),te--;for(;G--;){if(Ke===K||K!==null&&Ke===K.alternate)break t;Ke=Aa(Ke),K=Aa(K)}Ke=null}else Ke=null;We!==null&&Gv(Te,Se,We,Ke,!1),Ye!==null&&on!==null&&Gv(Te,on,Ye,Ke,!0)}}e:{if(Se=oe?ba(oe):window,We=Se.nodeName&&Se.nodeName.toLowerCase(),We==="select"||We==="input"&&Se.type==="file")var Je=wM;else if(Ev(Se))if(Mv)Je=bM;else{Je=AM;var rt=MM}else(We=Se.nodeName)&&We.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Je=TM);if(Je&&(Je=Je(r,oe))){wv(Te,Je,l,Ee);break e}rt&&rt(r,Se,oe),r==="focusout"&&(rt=Se._wrapperState)&&rt.controlled&&Se.type==="number"&&Me(Se,"number",Se.value)}switch(rt=oe?ba(oe):window,r){case"focusin":(Ev(rt)||rt.contentEditable==="true")&&(wa=rt,Zf=oe,Ws=null);break;case"focusout":Ws=Zf=wa=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,Dv(Te,l,Ee);break;case"selectionchange":if(LM)break;case"keydown":case"keyup":Dv(Te,l,Ee)}var it;if(jf)e:{switch(r){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ea?xv(r,l)&&(ut="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(gv&&l.locale!=="ko"&&(Ea||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ea&&(it=dv()):(Vi=Ee,Hf="value"in Vi?Vi.value:Vi.textContent,Ea=!0)),rt=xu(oe,ut),0<rt.length&&(ut=new mv(ut,r,null,l,Ee),Te.push({event:ut,listeners:rt}),it?ut.data=it:(it=Sv(l),it!==null&&(ut.data=it)))),(it=_M?yM(r,l):xM(r,l))&&(oe=xu(oe,"onBeforeInput"),0<oe.length&&(Ee=new mv("onBeforeInput","beforeinput",null,l,Ee),Te.push({event:Ee,listeners:oe}),Ee.data=it))}Hv(Te,o)})}function js(r,o,l){return{instance:r,listener:o,currentTarget:l}}function xu(r,o){for(var l=o+"Capture",f=[];r!==null;){var m=r,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=Lt(r,l),y!=null&&f.unshift(js(r,y,m)),y=Lt(r,o),y!=null&&f.push(js(r,y,m))),r=r.return}return f}function Aa(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Gv(r,o,l,f,m){for(var y=o._reactName,A=[];l!==null&&l!==f;){var U=l,k=U.alternate,oe=U.stateNode;if(k!==null&&k===f)break;U.tag===5&&oe!==null&&(U=oe,m?(k=Lt(l,y),k!=null&&A.unshift(js(l,k,U))):m||(k=Lt(l,y),k!=null&&A.push(js(l,k,U)))),l=l.return}A.length!==0&&r.push({event:o,listeners:A})}var UM=/\r\n?/g,NM=/\u0000|\uFFFD/g;function Wv(r){return(typeof r=="string"?r:""+r).replace(UM,`
`).replace(NM,"")}function Su(r,o,l){if(o=Wv(o),Wv(r)!==o&&l)throw Error(t(425))}function Eu(){}var id=null,od=null;function ad(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,FM=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,OM=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(r){return $v.resolve(null).then(r).catch(zM)}:sd;function zM(r){setTimeout(function(){throw r})}function ld(r,o){var l=o,f=0;do{var m=l.nextSibling;if(r.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){r.removeChild(m),Os(o);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Os(o)}function Wi(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Xv(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return r;o--}else l==="/$"&&o++}r=r.previousSibling}return null}var Ta=Math.random().toString(36).slice(2),Kr="__reactFiber$"+Ta,Ys="__reactProps$"+Ta,mi="__reactContainer$"+Ta,ud="__reactEvents$"+Ta,kM="__reactListeners$"+Ta,BM="__reactHandles$"+Ta;function Uo(r){var o=r[Kr];if(o)return o;for(var l=r.parentNode;l;){if(o=l[mi]||l[Kr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(r=Xv(r);r!==null;){if(l=r[Kr])return l;r=Xv(r)}return o}r=l,l=r.parentNode}return null}function qs(r){return r=r[Kr]||r[mi],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ba(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function wu(r){return r[Ys]||null}var cd=[],Ca=-1;function $i(r){return{current:r}}function $t(r){0>Ca||(r.current=cd[Ca],cd[Ca]=null,Ca--)}function Ht(r,o){Ca++,cd[Ca]=r.current,r.current=o}var Xi={},Pn=$i(Xi),Kn=$i(!1),No=Xi;function Ra(r,o){var l=r.type.contextTypes;if(!l)return Xi;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=o[y];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=m),m}function Zn(r){return r=r.childContextTypes,r!=null}function Mu(){$t(Kn),$t(Pn)}function jv(r,o,l){if(Pn.current!==Xi)throw Error(t(168));Ht(Pn,o),Ht(Kn,l)}function Yv(r,o,l){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in o))throw Error(t(108,_e(r)||"Unknown",m));return $({},l,f)}function Au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Xi,No=Pn.current,Ht(Pn,r),Ht(Kn,Kn.current),!0}function qv(r,o,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=Yv(r,o,No),f.__reactInternalMemoizedMergedChildContext=r,$t(Kn),$t(Pn),Ht(Pn,r)):$t(Kn),Ht(Kn,l)}var vi=null,Tu=!1,fd=!1;function Kv(r){vi===null?vi=[r]:vi.push(r)}function HM(r){Tu=!0,Kv(r)}function ji(){if(!fd&&vi!==null){fd=!0;var r=0,o=Ut;try{var l=vi;for(Ut=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}vi=null,Tu=!1}catch(m){throw vi!==null&&(vi=vi.slice(r+1)),ce(dt,ji),m}finally{Ut=o,fd=!1}}return null}var La=[],Pa=0,bu=null,Cu=0,yr=[],xr=0,Fo=null,gi=1,_i="";function Oo(r,o){La[Pa++]=Cu,La[Pa++]=bu,bu=r,Cu=o}function Zv(r,o,l){yr[xr++]=gi,yr[xr++]=_i,yr[xr++]=Fo,Fo=r;var f=gi;r=_i;var m=32-Vn(f)-1;f&=~(1<<m),l+=1;var y=32-Vn(o)+m;if(30<y){var A=m-m%5;y=(f&(1<<A)-1).toString(32),f>>=A,m-=A,gi=1<<32-Vn(o)+m|l<<m|f,_i=y+r}else gi=1<<y|l<<m|f,_i=r}function dd(r){r.return!==null&&(Oo(r,1),Zv(r,1,0))}function hd(r){for(;r===bu;)bu=La[--Pa],La[Pa]=null,Cu=La[--Pa],La[Pa]=null;for(;r===Fo;)Fo=yr[--xr],yr[xr]=null,_i=yr[--xr],yr[xr]=null,gi=yr[--xr],yr[xr]=null}var ur=null,cr=null,qt=!1,Fr=null;function Jv(r,o){var l=Mr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=r,o=r.deletions,o===null?(r.deletions=[l],r.flags|=16):o.push(l)}function Qv(r,o){switch(r.tag){case 5:var l=r.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,ur=r,cr=Wi(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,ur=r,cr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Fo!==null?{id:gi,overflow:_i}:null,r.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Mr(18,null,null,0),l.stateNode=o,l.return=r,r.child=l,ur=r,cr=null,!0):!1;default:return!1}}function pd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function md(r){if(qt){var o=cr;if(o){var l=o;if(!Qv(r,o)){if(pd(r))throw Error(t(418));o=Wi(l.nextSibling);var f=ur;o&&Qv(r,o)?Jv(f,l):(r.flags=r.flags&-4097|2,qt=!1,ur=r)}}else{if(pd(r))throw Error(t(418));r.flags=r.flags&-4097|2,qt=!1,ur=r}}}function eg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ur=r}function Ru(r){if(r!==ur)return!1;if(!qt)return eg(r),qt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!ad(r.type,r.memoizedProps)),o&&(o=cr)){if(pd(r))throw tg(),Error(t(418));for(;o;)Jv(r,o),o=Wi(o.nextSibling)}if(eg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(o===0){cr=Wi(r.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}r=r.nextSibling}cr=null}}else cr=ur?Wi(r.stateNode.nextSibling):null;return!0}function tg(){for(var r=cr;r;)r=Wi(r.nextSibling)}function Da(){cr=ur=null,qt=!1}function vd(r){Fr===null?Fr=[r]:Fr.push(r)}var VM=R.ReactCurrentBatchConfig;function Ks(r,o,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var m=f,y=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(A){var U=m.refs;A===null?delete U[y]:U[y]=A},o._stringRef=y,o)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Lu(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function ng(r){var o=r._init;return o(r._payload)}function rg(r){function o(K,G){if(r){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function l(K,G){if(!r)return null;for(;G!==null;)o(K,G),G=G.sibling;return null}function f(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function m(K,G){return K=to(K,G),K.index=0,K.sibling=null,K}function y(K,G,te){return K.index=te,r?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function A(K){return r&&K.alternate===null&&(K.flags|=2),K}function U(K,G,te,Le){return G===null||G.tag!==6?(G=sh(te,K.mode,Le),G.return=K,G):(G=m(G,te),G.return=K,G)}function k(K,G,te,Le){var Je=te.type;return Je===F?Ee(K,G,te.props.children,Le,te.key):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&ng(Je)===G.type)?(Le=m(G,te.props),Le.ref=Ks(K,G,te),Le.return=K,Le):(Le=ec(te.type,te.key,te.props,null,K.mode,Le),Le.ref=Ks(K,G,te),Le.return=K,Le)}function oe(K,G,te,Le){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=lh(te,K.mode,Le),G.return=K,G):(G=m(G,te.children||[]),G.return=K,G)}function Ee(K,G,te,Le,Je){return G===null||G.tag!==7?(G=$o(te,K.mode,Le,Je),G.return=K,G):(G=m(G,te),G.return=K,G)}function Te(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=sh(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return te=ec(G.type,G.key,G.props,null,K.mode,te),te.ref=Ks(K,null,G),te.return=K,te;case O:return G=lh(G,K.mode,te),G.return=K,G;case se:var Le=G._init;return Te(K,Le(G._payload),te)}if(we(G)||ie(G))return G=$o(G,K.mode,te,null),G.return=K,G;Lu(K,G)}return null}function Se(K,G,te,Le){var Je=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Je!==null?null:U(K,G,""+te,Le);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return te.key===Je?k(K,G,te,Le):null;case O:return te.key===Je?oe(K,G,te,Le):null;case se:return Je=te._init,Se(K,G,Je(te._payload),Le)}if(we(te)||ie(te))return Je!==null?null:Ee(K,G,te,Le,null);Lu(K,te)}return null}function We(K,G,te,Le,Je){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return K=K.get(te)||null,U(G,K,""+Le,Je);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case I:return K=K.get(Le.key===null?te:Le.key)||null,k(G,K,Le,Je);case O:return K=K.get(Le.key===null?te:Le.key)||null,oe(G,K,Le,Je);case se:var rt=Le._init;return We(K,G,te,rt(Le._payload),Je)}if(we(Le)||ie(Le))return K=K.get(te)||null,Ee(G,K,Le,Je,null);Lu(G,Le)}return null}function Ye(K,G,te,Le){for(var Je=null,rt=null,it=G,ut=G=0,yn=null;it!==null&&ut<te.length;ut++){it.index>ut?(yn=it,it=null):yn=it.sibling;var Pt=Se(K,it,te[ut],Le);if(Pt===null){it===null&&(it=yn);break}r&&it&&Pt.alternate===null&&o(K,it),G=y(Pt,G,ut),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt,it=yn}if(ut===te.length)return l(K,it),qt&&Oo(K,ut),Je;if(it===null){for(;ut<te.length;ut++)it=Te(K,te[ut],Le),it!==null&&(G=y(it,G,ut),rt===null?Je=it:rt.sibling=it,rt=it);return qt&&Oo(K,ut),Je}for(it=f(K,it);ut<te.length;ut++)yn=We(it,K,ut,te[ut],Le),yn!==null&&(r&&yn.alternate!==null&&it.delete(yn.key===null?ut:yn.key),G=y(yn,G,ut),rt===null?Je=yn:rt.sibling=yn,rt=yn);return r&&it.forEach(function(no){return o(K,no)}),qt&&Oo(K,ut),Je}function Ke(K,G,te,Le){var Je=ie(te);if(typeof Je!="function")throw Error(t(150));if(te=Je.call(te),te==null)throw Error(t(151));for(var rt=Je=null,it=G,ut=G=0,yn=null,Pt=te.next();it!==null&&!Pt.done;ut++,Pt=te.next()){it.index>ut?(yn=it,it=null):yn=it.sibling;var no=Se(K,it,Pt.value,Le);if(no===null){it===null&&(it=yn);break}r&&it&&no.alternate===null&&o(K,it),G=y(no,G,ut),rt===null?Je=no:rt.sibling=no,rt=no,it=yn}if(Pt.done)return l(K,it),qt&&Oo(K,ut),Je;if(it===null){for(;!Pt.done;ut++,Pt=te.next())Pt=Te(K,Pt.value,Le),Pt!==null&&(G=y(Pt,G,ut),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt);return qt&&Oo(K,ut),Je}for(it=f(K,it);!Pt.done;ut++,Pt=te.next())Pt=We(it,K,ut,Pt.value,Le),Pt!==null&&(r&&Pt.alternate!==null&&it.delete(Pt.key===null?ut:Pt.key),G=y(Pt,G,ut),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt);return r&&it.forEach(function(S1){return o(K,S1)}),qt&&Oo(K,ut),Je}function on(K,G,te,Le){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case I:e:{for(var Je=te.key,rt=G;rt!==null;){if(rt.key===Je){if(Je=te.type,Je===F){if(rt.tag===7){l(K,rt.sibling),G=m(rt,te.props.children),G.return=K,K=G;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&ng(Je)===rt.type){l(K,rt.sibling),G=m(rt,te.props),G.ref=Ks(K,rt,te),G.return=K,K=G;break e}l(K,rt);break}else o(K,rt);rt=rt.sibling}te.type===F?(G=$o(te.props.children,K.mode,Le,te.key),G.return=K,K=G):(Le=ec(te.type,te.key,te.props,null,K.mode,Le),Le.ref=Ks(K,G,te),Le.return=K,K=Le)}return A(K);case O:e:{for(rt=te.key;G!==null;){if(G.key===rt)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){l(K,G.sibling),G=m(G,te.children||[]),G.return=K,K=G;break e}else{l(K,G);break}else o(K,G);G=G.sibling}G=lh(te,K.mode,Le),G.return=K,K=G}return A(K);case se:return rt=te._init,on(K,G,rt(te._payload),Le)}if(we(te))return Ye(K,G,te,Le);if(ie(te))return Ke(K,G,te,Le);Lu(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(l(K,G.sibling),G=m(G,te),G.return=K,K=G):(l(K,G),G=sh(te,K.mode,Le),G.return=K,K=G),A(K)):l(K,G)}return on}var Ia=rg(!0),ig=rg(!1),Pu=$i(null),Du=null,Ua=null,gd=null;function _d(){gd=Ua=Du=null}function yd(r){var o=Pu.current;$t(Pu),r._currentValue=o}function xd(r,o,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===l)break;r=r.return}}function Na(r,o){Du=r,gd=Ua=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(Jn=!0),r.firstContext=null)}function Sr(r){var o=r._currentValue;if(gd!==r)if(r={context:r,memoizedValue:o,next:null},Ua===null){if(Du===null)throw Error(t(308));Ua=r,Du.dependencies={lanes:0,firstContext:r}}else Ua=Ua.next=r;return o}var zo=null;function Sd(r){zo===null?zo=[r]:zo.push(r)}function og(r,o,l,f){var m=o.interleaved;return m===null?(l.next=l,Sd(o)):(l.next=m.next,m.next=l),o.interleaved=l,yi(r,f)}function yi(r,o){r.lanes|=o;var l=r.alternate;for(l!==null&&(l.lanes|=o),l=r,r=r.return;r!==null;)r.childLanes|=o,l=r.alternate,l!==null&&(l.childLanes|=o),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Yi=!1;function Ed(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xi(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function qi(r,o,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Ct&2)!==0){var m=f.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),f.pending=o,yi(r,l)}return m=f.interleaved,m===null?(o.next=o,Sd(f)):(o.next=m.next,m.next=o),f.interleaved=o,yi(r,l)}function Iu(r,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,Ff(r,l)}}function sg(r,o){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=A:y=y.next=A,l=l.next}while(l!==null);y===null?m=y=o:y=y.next=o}else m=y=o;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=o:r.next=o,l.lastBaseUpdate=o}function Uu(r,o,l,f){var m=r.updateQueue;Yi=!1;var y=m.firstBaseUpdate,A=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var k=U,oe=k.next;k.next=null,A===null?y=oe:A.next=oe,A=k;var Ee=r.alternate;Ee!==null&&(Ee=Ee.updateQueue,U=Ee.lastBaseUpdate,U!==A&&(U===null?Ee.firstBaseUpdate=oe:U.next=oe,Ee.lastBaseUpdate=k))}if(y!==null){var Te=m.baseState;A=0,Ee=oe=k=null,U=y;do{var Se=U.lane,We=U.eventTime;if((f&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:We,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ye=r,Ke=U;switch(Se=o,We=l,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Te=Ye.call(We,Te,Se);break e}Te=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,Se=typeof Ye=="function"?Ye.call(We,Te,Se):Ye,Se==null)break e;Te=$({},Te,Se);break e;case 2:Yi=!0}}U.callback!==null&&U.lane!==0&&(r.flags|=64,Se=m.effects,Se===null?m.effects=[U]:Se.push(U))}else We={eventTime:We,lane:Se,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Ee===null?(oe=Ee=We,k=Te):Ee=Ee.next=We,A|=Se;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;Se=U,U=Se.next,Se.next=null,m.lastBaseUpdate=Se,m.shared.pending=null}}while(!0);if(Ee===null&&(k=Te),m.baseState=k,m.firstBaseUpdate=oe,m.lastBaseUpdate=Ee,o=m.shared.interleaved,o!==null){m=o;do A|=m.lane,m=m.next;while(m!==o)}else y===null&&(m.shared.lanes=0);Ho|=A,r.lanes=A,r.memoizedState=Te}}function lg(r,o,l){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Zs={},Zr=$i(Zs),Js=$i(Zs),Qs=$i(Zs);function ko(r){if(r===Zs)throw Error(t(174));return r}function wd(r,o){switch(Ht(Qs,o),Ht(Js,r),Ht(Zr,Zs),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ye(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=ye(o,r)}$t(Zr),Ht(Zr,o)}function Fa(){$t(Zr),$t(Js),$t(Qs)}function ug(r){ko(Qs.current);var o=ko(Zr.current),l=ye(o,r.type);o!==l&&(Ht(Js,r),Ht(Zr,l))}function Md(r){Js.current===r&&($t(Zr),$t(Js))}var Zt=$i(0);function Nu(r){for(var o=r;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Ad=[];function Td(){for(var r=0;r<Ad.length;r++)Ad[r]._workInProgressVersionPrimary=null;Ad.length=0}var Fu=R.ReactCurrentDispatcher,bd=R.ReactCurrentBatchConfig,Bo=0,Jt=null,fn=null,gn=null,Ou=!1,el=!1,tl=0,GM=0;function Dn(){throw Error(t(321))}function Cd(r,o){if(o===null)return!1;for(var l=0;l<o.length&&l<r.length;l++)if(!Nr(r[l],o[l]))return!1;return!0}function Rd(r,o,l,f,m,y){if(Bo=y,Jt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Fu.current=r===null||r.memoizedState===null?jM:YM,r=l(f,m),el){y=0;do{if(el=!1,tl=0,25<=y)throw Error(t(301));y+=1,gn=fn=null,o.updateQueue=null,Fu.current=qM,r=l(f,m)}while(el)}if(Fu.current=Bu,o=fn!==null&&fn.next!==null,Bo=0,gn=fn=Jt=null,Ou=!1,o)throw Error(t(300));return r}function Ld(){var r=tl!==0;return tl=0,r}function Jr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Jt.memoizedState=gn=r:gn=gn.next=r,gn}function Er(){if(fn===null){var r=Jt.alternate;r=r!==null?r.memoizedState:null}else r=fn.next;var o=gn===null?Jt.memoizedState:gn.next;if(o!==null)gn=o,fn=r;else{if(r===null)throw Error(t(310));fn=r,r={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},gn===null?Jt.memoizedState=gn=r:gn=gn.next=r}return gn}function nl(r,o){return typeof o=="function"?o(r):o}function Pd(r){var o=Er(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=fn,m=f.baseQueue,y=l.pending;if(y!==null){if(m!==null){var A=m.next;m.next=y.next,y.next=A}f.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,f=f.baseState;var U=A=null,k=null,oe=y;do{var Ee=oe.lane;if((Bo&Ee)===Ee)k!==null&&(k=k.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),f=oe.hasEagerState?oe.eagerState:r(f,oe.action);else{var Te={lane:Ee,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};k===null?(U=k=Te,A=f):k=k.next=Te,Jt.lanes|=Ee,Ho|=Ee}oe=oe.next}while(oe!==null&&oe!==y);k===null?A=f:k.next=U,Nr(f,o.memoizedState)||(Jn=!0),o.memoizedState=f,o.baseState=A,o.baseQueue=k,l.lastRenderedState=f}if(r=l.interleaved,r!==null){m=r;do y=m.lane,Jt.lanes|=y,Ho|=y,m=m.next;while(m!==r)}else m===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function Dd(r){var o=Er(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,m=l.pending,y=o.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do y=r(y,A.action),A=A.next;while(A!==m);Nr(y,o.memoizedState)||(Jn=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),l.lastRenderedState=y}return[y,f]}function cg(){}function fg(r,o){var l=Jt,f=Er(),m=o(),y=!Nr(f.memoizedState,m);if(y&&(f.memoizedState=m,Jn=!0),f=f.queue,Id(pg.bind(null,l,f,r),[r]),f.getSnapshot!==o||y||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,rl(9,hg.bind(null,l,f,m,o),void 0,null),_n===null)throw Error(t(349));(Bo&30)!==0||dg(l,o,m)}return m}function dg(r,o,l){r.flags|=16384,r={getSnapshot:o,value:l},o=Jt.updateQueue,o===null?(o={lastEffect:null,stores:null},Jt.updateQueue=o,o.stores=[r]):(l=o.stores,l===null?o.stores=[r]:l.push(r))}function hg(r,o,l,f){o.value=l,o.getSnapshot=f,mg(o)&&vg(r)}function pg(r,o,l){return l(function(){mg(o)&&vg(r)})}function mg(r){var o=r.getSnapshot;r=r.value;try{var l=o();return!Nr(r,l)}catch{return!0}}function vg(r){var o=yi(r,1);o!==null&&Br(o,r,1,-1)}function gg(r){var o=Jr();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:r},o.queue=r,r=r.dispatch=XM.bind(null,Jt,r),[o.memoizedState,r]}function rl(r,o,l,f){return r={tag:r,create:o,destroy:l,deps:f,next:null},o=Jt.updateQueue,o===null?(o={lastEffect:null,stores:null},Jt.updateQueue=o,o.lastEffect=r.next=r):(l=o.lastEffect,l===null?o.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,o.lastEffect=r)),r}function _g(){return Er().memoizedState}function zu(r,o,l,f){var m=Jr();Jt.flags|=r,m.memoizedState=rl(1|o,l,void 0,f===void 0?null:f)}function ku(r,o,l,f){var m=Er();f=f===void 0?null:f;var y=void 0;if(fn!==null){var A=fn.memoizedState;if(y=A.destroy,f!==null&&Cd(f,A.deps)){m.memoizedState=rl(o,l,y,f);return}}Jt.flags|=r,m.memoizedState=rl(1|o,l,y,f)}function yg(r,o){return zu(8390656,8,r,o)}function Id(r,o){return ku(2048,8,r,o)}function xg(r,o){return ku(4,2,r,o)}function Sg(r,o){return ku(4,4,r,o)}function Eg(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function wg(r,o,l){return l=l!=null?l.concat([r]):null,ku(4,4,Eg.bind(null,o,r),l)}function Ud(){}function Mg(r,o){var l=Er();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&Cd(o,f[1])?f[0]:(l.memoizedState=[r,o],r)}function Ag(r,o){var l=Er();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&Cd(o,f[1])?f[0]:(r=r(),l.memoizedState=[r,o],r)}function Tg(r,o,l){return(Bo&21)===0?(r.baseState&&(r.baseState=!1,Jn=!0),r.memoizedState=l):(Nr(l,o)||(l=su(),Jt.lanes|=l,Ho|=l,r.baseState=!0),o)}function WM(r,o){var l=Ut;Ut=l!==0&&4>l?l:4,r(!0);var f=bd.transition;bd.transition={};try{r(!1),o()}finally{Ut=l,bd.transition=f}}function bg(){return Er().memoizedState}function $M(r,o,l){var f=Qi(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Cg(r))Rg(o,l);else if(l=og(r,o,l,f),l!==null){var m=Wn();Br(l,r,f,m),Lg(l,o,f)}}function XM(r,o,l){var f=Qi(r),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Cg(r))Rg(o,m);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var A=o.lastRenderedState,U=y(A,l);if(m.hasEagerState=!0,m.eagerState=U,Nr(U,A)){var k=o.interleaved;k===null?(m.next=m,Sd(o)):(m.next=k.next,k.next=m),o.interleaved=m;return}}catch{}finally{}l=og(r,o,m,f),l!==null&&(m=Wn(),Br(l,r,f,m),Lg(l,o,f))}}function Cg(r){var o=r.alternate;return r===Jt||o!==null&&o===Jt}function Rg(r,o){el=Ou=!0;var l=r.pending;l===null?o.next=o:(o.next=l.next,l.next=o),r.pending=o}function Lg(r,o,l){if((l&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,Ff(r,l)}}var Bu={readContext:Sr,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},jM={readContext:Sr,useCallback:function(r,o){return Jr().memoizedState=[r,o===void 0?null:o],r},useContext:Sr,useEffect:yg,useImperativeHandle:function(r,o,l){return l=l!=null?l.concat([r]):null,zu(4194308,4,Eg.bind(null,o,r),l)},useLayoutEffect:function(r,o){return zu(4194308,4,r,o)},useInsertionEffect:function(r,o){return zu(4,2,r,o)},useMemo:function(r,o){var l=Jr();return o=o===void 0?null:o,r=r(),l.memoizedState=[r,o],r},useReducer:function(r,o,l){var f=Jr();return o=l!==void 0?l(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=$M.bind(null,Jt,r),[f.memoizedState,r]},useRef:function(r){var o=Jr();return r={current:r},o.memoizedState=r},useState:gg,useDebugValue:Ud,useDeferredValue:function(r){return Jr().memoizedState=r},useTransition:function(){var r=gg(!1),o=r[0];return r=WM.bind(null,r[1]),Jr().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,l){var f=Jt,m=Jr();if(qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),_n===null)throw Error(t(349));(Bo&30)!==0||dg(f,o,l)}m.memoizedState=l;var y={value:l,getSnapshot:o};return m.queue=y,yg(pg.bind(null,f,y,r),[r]),f.flags|=2048,rl(9,hg.bind(null,f,y,l,o),void 0,null),l},useId:function(){var r=Jr(),o=_n.identifierPrefix;if(qt){var l=_i,f=gi;l=(f&~(1<<32-Vn(f)-1)).toString(32)+l,o=":"+o+"R"+l,l=tl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=GM++,o=":"+o+"r"+l.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},YM={readContext:Sr,useCallback:Mg,useContext:Sr,useEffect:Id,useImperativeHandle:wg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:Ag,useReducer:Pd,useRef:_g,useState:function(){return Pd(nl)},useDebugValue:Ud,useDeferredValue:function(r){var o=Er();return Tg(o,fn.memoizedState,r)},useTransition:function(){var r=Pd(nl)[0],o=Er().memoizedState;return[r,o]},useMutableSource:cg,useSyncExternalStore:fg,useId:bg,unstable_isNewReconciler:!1},qM={readContext:Sr,useCallback:Mg,useContext:Sr,useEffect:Id,useImperativeHandle:wg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:Ag,useReducer:Dd,useRef:_g,useState:function(){return Dd(nl)},useDebugValue:Ud,useDeferredValue:function(r){var o=Er();return fn===null?o.memoizedState=r:Tg(o,fn.memoizedState,r)},useTransition:function(){var r=Dd(nl)[0],o=Er().memoizedState;return[r,o]},useMutableSource:cg,useSyncExternalStore:fg,useId:bg,unstable_isNewReconciler:!1};function Or(r,o){if(r&&r.defaultProps){o=$({},o),r=r.defaultProps;for(var l in r)o[l]===void 0&&(o[l]=r[l]);return o}return o}function Nd(r,o,l,f){o=r.memoizedState,l=l(f,o),l=l==null?o:$({},o,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Hu={isMounted:function(r){return(r=r._reactInternals)?hi(r)===r:!1},enqueueSetState:function(r,o,l){r=r._reactInternals;var f=Wn(),m=Qi(r),y=xi(f,m);y.payload=o,l!=null&&(y.callback=l),o=qi(r,y,m),o!==null&&(Br(o,r,m,f),Iu(o,r,m))},enqueueReplaceState:function(r,o,l){r=r._reactInternals;var f=Wn(),m=Qi(r),y=xi(f,m);y.tag=1,y.payload=o,l!=null&&(y.callback=l),o=qi(r,y,m),o!==null&&(Br(o,r,m,f),Iu(o,r,m))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var l=Wn(),f=Qi(r),m=xi(l,f);m.tag=2,o!=null&&(m.callback=o),o=qi(r,m,f),o!==null&&(Br(o,r,f,l),Iu(o,r,f))}};function Pg(r,o,l,f,m,y,A){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,y,A):o.prototype&&o.prototype.isPureReactComponent?!Gs(l,f)||!Gs(m,y):!0}function Dg(r,o,l){var f=!1,m=Xi,y=o.contextType;return typeof y=="object"&&y!==null?y=Sr(y):(m=Zn(o)?No:Pn.current,f=o.contextTypes,y=(f=f!=null)?Ra(r,m):Xi),o=new o(l,y),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Hu,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=m,r.__reactInternalMemoizedMaskedChildContext=y),o}function Ig(r,o,l,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,f),o.state!==r&&Hu.enqueueReplaceState(o,o.state,null)}function Fd(r,o,l,f){var m=r.stateNode;m.props=l,m.state=r.memoizedState,m.refs={},Ed(r);var y=o.contextType;typeof y=="object"&&y!==null?m.context=Sr(y):(y=Zn(o)?No:Pn.current,m.context=Ra(r,y)),m.state=r.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(Nd(r,o,y,l),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&Hu.enqueueReplaceState(m,m.state,null),Uu(r,l,m,f),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308)}function Oa(r,o){try{var l="",f=o;do l+=ee(f),f=f.return;while(f);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:o,stack:m,digest:null}}function Od(r,o,l){return{value:r,source:null,stack:l??null,digest:o??null}}function zd(r,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var KM=typeof WeakMap=="function"?WeakMap:Map;function Ug(r,o,l){l=xi(-1,l),l.tag=3,l.payload={element:null};var f=o.value;return l.callback=function(){Yu||(Yu=!0,Qd=f),zd(r,o)},l}function Ng(r,o,l){l=xi(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=o.value;l.payload=function(){return f(m)},l.callback=function(){zd(r,o)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){zd(r,o),typeof f!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),l}function Fg(r,o,l){var f=r.pingCache;if(f===null){f=r.pingCache=new KM;var m=new Set;f.set(o,m)}else m=f.get(o),m===void 0&&(m=new Set,f.set(o,m));m.has(l)||(m.add(l),r=c1.bind(null,r,o,l),o.then(r,r))}function Og(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function zg(r,o,l,f,m){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=xi(-1,1),o.tag=2,qi(l,o,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=m,r)}var ZM=R.ReactCurrentOwner,Jn=!1;function Gn(r,o,l,f){o.child=r===null?ig(o,null,l,f):Ia(o,r.child,l,f)}function kg(r,o,l,f,m){l=l.render;var y=o.ref;return Na(o,m),f=Rd(r,o,l,f,y,m),l=Ld(),r!==null&&!Jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~m,Si(r,o,m)):(qt&&l&&dd(o),o.flags|=1,Gn(r,o,f,m),o.child)}function Bg(r,o,l,f,m){if(r===null){var y=l.type;return typeof y=="function"&&!ah(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=y,Hg(r,o,y,f,m)):(r=ec(l.type,null,f,o,o.mode,m),r.ref=o.ref,r.return=o,o.child=r)}if(y=r.child,(r.lanes&m)===0){var A=y.memoizedProps;if(l=l.compare,l=l!==null?l:Gs,l(A,f)&&r.ref===o.ref)return Si(r,o,m)}return o.flags|=1,r=to(y,f),r.ref=o.ref,r.return=o,o.child=r}function Hg(r,o,l,f,m){if(r!==null){var y=r.memoizedProps;if(Gs(y,f)&&r.ref===o.ref)if(Jn=!1,o.pendingProps=f=y,(r.lanes&m)!==0)(r.flags&131072)!==0&&(Jn=!0);else return o.lanes=r.lanes,Si(r,o,m)}return kd(r,o,l,f,m)}function Vg(r,o,l){var f=o.pendingProps,m=f.children,y=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(ka,fr),fr|=l;else{if((l&1073741824)===0)return r=y!==null?y.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Ht(ka,fr),fr|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,Ht(ka,fr),fr|=f}else y!==null?(f=y.baseLanes|l,o.memoizedState=null):f=l,Ht(ka,fr),fr|=f;return Gn(r,o,m,l),o.child}function Gg(r,o){var l=o.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function kd(r,o,l,f,m){var y=Zn(l)?No:Pn.current;return y=Ra(o,y),Na(o,m),l=Rd(r,o,l,f,y,m),f=Ld(),r!==null&&!Jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~m,Si(r,o,m)):(qt&&f&&dd(o),o.flags|=1,Gn(r,o,l,m),o.child)}function Wg(r,o,l,f,m){if(Zn(l)){var y=!0;Au(o)}else y=!1;if(Na(o,m),o.stateNode===null)Gu(r,o),Dg(o,l,f),Fd(o,l,f,m),f=!0;else if(r===null){var A=o.stateNode,U=o.memoizedProps;A.props=U;var k=A.context,oe=l.contextType;typeof oe=="object"&&oe!==null?oe=Sr(oe):(oe=Zn(l)?No:Pn.current,oe=Ra(o,oe));var Ee=l.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==f||k!==oe)&&Ig(o,A,f,oe),Yi=!1;var Se=o.memoizedState;A.state=Se,Uu(o,f,A,m),k=o.memoizedState,U!==f||Se!==k||Kn.current||Yi?(typeof Ee=="function"&&(Nd(o,l,Ee,f),k=o.memoizedState),(U=Yi||Pg(o,l,U,f,Se,k,oe))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=k),A.props=f,A.state=k,A.context=oe,f=U):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{A=o.stateNode,ag(r,o),U=o.memoizedProps,oe=o.type===o.elementType?U:Or(o.type,U),A.props=oe,Te=o.pendingProps,Se=A.context,k=l.contextType,typeof k=="object"&&k!==null?k=Sr(k):(k=Zn(l)?No:Pn.current,k=Ra(o,k));var We=l.getDerivedStateFromProps;(Ee=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==Te||Se!==k)&&Ig(o,A,f,k),Yi=!1,Se=o.memoizedState,A.state=Se,Uu(o,f,A,m);var Ye=o.memoizedState;U!==Te||Se!==Ye||Kn.current||Yi?(typeof We=="function"&&(Nd(o,l,We,f),Ye=o.memoizedState),(oe=Yi||Pg(o,l,oe,f,Se,Ye,k)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,Ye,k),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,Ye,k)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=Ye),A.props=f,A.state=Ye,A.context=k,f=oe):(typeof A.componentDidUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),f=!1)}return Bd(r,o,l,f,y,m)}function Bd(r,o,l,f,m,y){Gg(r,o);var A=(o.flags&128)!==0;if(!f&&!A)return m&&qv(o,l,!1),Si(r,o,y);f=o.stateNode,ZM.current=o;var U=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&A?(o.child=Ia(o,r.child,null,y),o.child=Ia(o,null,U,y)):Gn(r,o,U,y),o.memoizedState=f.state,m&&qv(o,l,!0),o.child}function $g(r){var o=r.stateNode;o.pendingContext?jv(r,o.pendingContext,o.pendingContext!==o.context):o.context&&jv(r,o.context,!1),wd(r,o.containerInfo)}function Xg(r,o,l,f,m){return Da(),vd(m),o.flags|=256,Gn(r,o,l,f),o.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Vd(r){return{baseLanes:r,cachePool:null,transitions:null}}function jg(r,o,l){var f=o.pendingProps,m=Zt.current,y=!1,A=(o.flags&128)!==0,U;if((U=A)||(U=r!==null&&r.memoizedState===null?!1:(m&2)!==0),U?(y=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(m|=1),Ht(Zt,m&1),r===null)return md(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=f.children,r=f.fallback,y?(f=o.mode,y=o.child,A={mode:"hidden",children:A},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=A):y=tc(A,f,0,null),r=$o(r,f,l,null),y.return=o,r.return=o,y.sibling=r,o.child=y,o.child.memoizedState=Vd(l),o.memoizedState=Hd,r):Gd(o,A));if(m=r.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return JM(r,o,A,f,U,m,l);if(y){y=f.fallback,A=o.mode,m=r.child,U=m.sibling;var k={mode:"hidden",children:f.children};return(A&1)===0&&o.child!==m?(f=o.child,f.childLanes=0,f.pendingProps=k,o.deletions=null):(f=to(m,k),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?y=to(U,y):(y=$o(y,A,l,null),y.flags|=2),y.return=o,f.return=o,f.sibling=y,o.child=f,f=y,y=o.child,A=r.child.memoizedState,A=A===null?Vd(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},y.memoizedState=A,y.childLanes=r.childLanes&~l,o.memoizedState=Hd,f}return y=r.child,r=y.sibling,f=to(y,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=l),f.return=o,f.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=f,o.memoizedState=null,f}function Gd(r,o){return o=tc({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Vu(r,o,l,f){return f!==null&&vd(f),Ia(o,r.child,null,l),r=Gd(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function JM(r,o,l,f,m,y,A){if(l)return o.flags&256?(o.flags&=-257,f=Od(Error(t(422))),Vu(r,o,A,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(y=f.fallback,m=o.mode,f=tc({mode:"visible",children:f.children},m,0,null),y=$o(y,m,A,null),y.flags|=2,f.return=o,y.return=o,f.sibling=y,o.child=f,(o.mode&1)!==0&&Ia(o,r.child,null,A),o.child.memoizedState=Vd(A),o.memoizedState=Hd,y);if((o.mode&1)===0)return Vu(r,o,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,y=Error(t(419)),f=Od(y,f,void 0),Vu(r,o,A,f)}if(U=(A&r.childLanes)!==0,Jn||U){if(f=_n,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|A))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,yi(r,m),Br(f,r,m,-1))}return oh(),f=Od(Error(t(421))),Vu(r,o,A,f)}return m.data==="$?"?(o.flags|=128,o.child=r.child,o=f1.bind(null,r),m._reactRetry=o,null):(r=y.treeContext,cr=Wi(m.nextSibling),ur=o,qt=!0,Fr=null,r!==null&&(yr[xr++]=gi,yr[xr++]=_i,yr[xr++]=Fo,gi=r.id,_i=r.overflow,Fo=o),o=Gd(o,f.children),o.flags|=4096,o)}function Yg(r,o,l){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),xd(r.return,o,l)}function Wd(r,o,l,f,m){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=m)}function qg(r,o,l){var f=o.pendingProps,m=f.revealOrder,y=f.tail;if(Gn(r,o,f.children,l),f=Zt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Yg(r,l,o);else if(r.tag===19)Yg(r,l,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Ht(Zt,f),(o.mode&1)===0)o.memoizedState=null;else switch(m){case"forwards":for(l=o.child,m=null;l!==null;)r=l.alternate,r!==null&&Nu(r)===null&&(m=l),l=l.sibling;l=m,l===null?(m=o.child,o.child=null):(m=l.sibling,l.sibling=null),Wd(o,!1,m,l,y);break;case"backwards":for(l=null,m=o.child,o.child=null;m!==null;){if(r=m.alternate,r!==null&&Nu(r)===null){o.child=m;break}r=m.sibling,m.sibling=l,l=m,m=r}Wd(o,!0,l,null,y);break;case"together":Wd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Gu(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function Si(r,o,l){if(r!==null&&(o.dependencies=r.dependencies),Ho|=o.lanes,(l&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,l=to(r,r.pendingProps),o.child=l,l.return=o;r.sibling!==null;)r=r.sibling,l=l.sibling=to(r,r.pendingProps),l.return=o;l.sibling=null}return o.child}function QM(r,o,l){switch(o.tag){case 3:$g(o),Da();break;case 5:ug(o);break;case 1:Zn(o.type)&&Au(o);break;case 4:wd(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,m=o.memoizedProps.value;Ht(Pu,f._currentValue),f._currentValue=m;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(Ht(Zt,Zt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?jg(r,o,l):(Ht(Zt,Zt.current&1),r=Si(r,o,l),r!==null?r.sibling:null);Ht(Zt,Zt.current&1);break;case 19:if(f=(l&o.childLanes)!==0,(r.flags&128)!==0){if(f)return qg(r,o,l);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ht(Zt,Zt.current),f)break;return null;case 22:case 23:return o.lanes=0,Vg(r,o,l)}return Si(r,o,l)}var Kg,$d,Zg,Jg;Kg=function(r,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},$d=function(){},Zg=function(r,o,l,f){var m=r.memoizedProps;if(m!==f){r=o.stateNode,ko(Zr.current);var y=null;switch(l){case"input":m=He(r,m),f=He(r,f),y=[];break;case"select":m=$({},m,{value:void 0}),f=$({},f,{value:void 0}),y=[];break;case"textarea":m=Ze(r,m),f=Ze(r,f),y=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Eu)}ft(l,f);var A;l=null;for(oe in m)if(!f.hasOwnProperty(oe)&&m.hasOwnProperty(oe)&&m[oe]!=null)if(oe==="style"){var U=m[oe];for(A in U)U.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?y||(y=[]):(y=y||[]).push(oe,null));for(oe in f){var k=f[oe];if(U=m?.[oe],f.hasOwnProperty(oe)&&k!==U&&(k!=null||U!=null))if(oe==="style")if(U){for(A in U)!U.hasOwnProperty(A)||k&&k.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in k)k.hasOwnProperty(A)&&U[A]!==k[A]&&(l||(l={}),l[A]=k[A])}else l||(y||(y=[]),y.push(oe,l)),l=k;else oe==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(y=y||[]).push(oe,k)):oe==="children"?typeof k!="string"&&typeof k!="number"||(y=y||[]).push(oe,""+k):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(k!=null&&oe==="onScroll"&&Wt("scroll",r),y||U===k||(y=[])):(y=y||[]).push(oe,k))}l&&(y=y||[]).push("style",l);var oe=y;(o.updateQueue=oe)&&(o.flags|=4)}},Jg=function(r,o,l,f){l!==f&&(o.flags|=4)};function il(r,o){if(!qt)switch(r.tailMode){case"hidden":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function In(r){var o=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(o)for(var m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=r,m=m.sibling;else for(m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=r,m=m.sibling;return r.subtreeFlags|=f,r.childLanes=l,o}function e1(r,o,l){var f=o.pendingProps;switch(hd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(o),null;case 1:return Zn(o.type)&&Mu(),In(o),null;case 3:return f=o.stateNode,Fa(),$t(Kn),$t(Pn),Td(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Ru(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Fr!==null&&(nh(Fr),Fr=null))),$d(r,o),In(o),null;case 5:Md(o);var m=ko(Qs.current);if(l=o.type,r!==null&&o.stateNode!=null)Zg(r,o,l,f,m),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return In(o),null}if(r=ko(Zr.current),Ru(o)){f=o.stateNode,l=o.type;var y=o.memoizedProps;switch(f[Kr]=o,f[Ys]=y,r=(o.mode&1)!==0,l){case"dialog":Wt("cancel",f),Wt("close",f);break;case"iframe":case"object":case"embed":Wt("load",f);break;case"video":case"audio":for(m=0;m<$s.length;m++)Wt($s[m],f);break;case"source":Wt("error",f);break;case"img":case"image":case"link":Wt("error",f),Wt("load",f);break;case"details":Wt("toggle",f);break;case"input":le(f,y),Wt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},Wt("invalid",f);break;case"textarea":D(f,y),Wt("invalid",f)}ft(l,y),m=null;for(var A in y)if(y.hasOwnProperty(A)){var U=y[A];A==="children"?typeof U=="string"?f.textContent!==U&&(y.suppressHydrationWarning!==!0&&Su(f.textContent,U,r),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(y.suppressHydrationWarning!==!0&&Su(f.textContent,U,r),m=["children",""+U]):a.hasOwnProperty(A)&&U!=null&&A==="onScroll"&&Wt("scroll",f)}switch(l){case"input":ze(f),ge(f,y,!0);break;case"textarea":ze(f),Y(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=Eu)}f=m,o.updateQueue=f,f!==null&&(o.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Ae(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=A.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=A.createElement(l,{is:f.is}):(r=A.createElement(l),l==="select"&&(A=r,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):r=A.createElementNS(r,l),r[Kr]=o,r[Ys]=f,Kg(r,o,!1,!1),o.stateNode=r;e:{switch(A=st(l,f),l){case"dialog":Wt("cancel",r),Wt("close",r),m=f;break;case"iframe":case"object":case"embed":Wt("load",r),m=f;break;case"video":case"audio":for(m=0;m<$s.length;m++)Wt($s[m],r);m=f;break;case"source":Wt("error",r),m=f;break;case"img":case"image":case"link":Wt("error",r),Wt("load",r),m=f;break;case"details":Wt("toggle",r),m=f;break;case"input":le(r,f),m=He(r,f),Wt("invalid",r);break;case"option":m=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},m=$({},f,{value:void 0}),Wt("invalid",r);break;case"textarea":D(r,f),m=Ze(r,f),Wt("invalid",r);break;default:m=f}ft(l,m),U=m;for(y in U)if(U.hasOwnProperty(y)){var k=U[y];y==="style"?Pe(r,k):y==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(r,k)):y==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&De(r,k):typeof k=="number"&&De(r,""+k):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(a.hasOwnProperty(y)?k!=null&&y==="onScroll"&&Wt("scroll",r):k!=null&&M(r,y,k,A))}switch(l){case"input":ze(r),ge(r,f,!1);break;case"textarea":ze(r),Y(r);break;case"option":f.value!=null&&r.setAttribute("value",""+ve(f.value));break;case"select":r.multiple=!!f.multiple,y=f.value,y!=null?Ie(r,!!f.multiple,y,!1):f.defaultValue!=null&&Ie(r,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(r.onclick=Eu)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return In(o),null;case 6:if(r&&o.stateNode!=null)Jg(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(l=ko(Qs.current),ko(Zr.current),Ru(o)){if(f=o.stateNode,l=o.memoizedProps,f[Kr]=o,(y=f.nodeValue!==l)&&(r=ur,r!==null))switch(r.tag){case 3:Su(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Su(f.nodeValue,l,(r.mode&1)!==0)}y&&(o.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Kr]=o,o.stateNode=f}return In(o),null;case 13:if($t(Zt),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(qt&&cr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)tg(),Da(),o.flags|=98560,y=!1;else if(y=Ru(o),f!==null&&f.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Kr]=o}else Da(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;In(o),y=!1}else Fr!==null&&(nh(Fr),Fr=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(Zt.current&1)!==0?dn===0&&(dn=3):oh())),o.updateQueue!==null&&(o.flags|=4),In(o),null);case 4:return Fa(),$d(r,o),r===null&&Xs(o.stateNode.containerInfo),In(o),null;case 10:return yd(o.type._context),In(o),null;case 17:return Zn(o.type)&&Mu(),In(o),null;case 19:if($t(Zt),y=o.memoizedState,y===null)return In(o),null;if(f=(o.flags&128)!==0,A=y.rendering,A===null)if(f)il(y,!1);else{if(dn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(A=Nu(r),A!==null){for(o.flags|=128,il(y,!1),f=A.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=l,l=o.child;l!==null;)y=l,r=f,y.flags&=14680066,A=y.alternate,A===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=A.childLanes,y.lanes=A.lanes,y.child=A.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=A.memoizedProps,y.memoizedState=A.memoizedState,y.updateQueue=A.updateQueue,y.type=A.type,r=A.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Ht(Zt,Zt.current&1|2),o.child}r=r.sibling}y.tail!==null&&Xe()>Ba&&(o.flags|=128,f=!0,il(y,!1),o.lanes=4194304)}else{if(!f)if(r=Nu(A),r!==null){if(o.flags|=128,f=!0,l=r.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),il(y,!0),y.tail===null&&y.tailMode==="hidden"&&!A.alternate&&!qt)return In(o),null}else 2*Xe()-y.renderingStartTime>Ba&&l!==1073741824&&(o.flags|=128,f=!0,il(y,!1),o.lanes=4194304);y.isBackwards?(A.sibling=o.child,o.child=A):(l=y.last,l!==null?l.sibling=A:o.child=A,y.last=A)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=Xe(),o.sibling=null,l=Zt.current,Ht(Zt,f?l&1|2:l&1),o):(In(o),null);case 22:case 23:return ih(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(fr&1073741824)!==0&&(In(o),o.subtreeFlags&6&&(o.flags|=8192)):In(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function t1(r,o){switch(hd(o),o.tag){case 1:return Zn(o.type)&&Mu(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return Fa(),$t(Kn),$t(Pn),Td(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return Md(o),null;case 13:if($t(Zt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Da()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return $t(Zt),null;case 4:return Fa(),null;case 10:return yd(o.type._context),null;case 22:case 23:return ih(),null;case 24:return null;default:return null}}var Wu=!1,Un=!1,n1=typeof WeakSet=="function"?WeakSet:Set,je=null;function za(r,o){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){nn(r,o,f)}else l.current=null}function Xd(r,o,l){try{l()}catch(f){nn(r,o,f)}}var Qg=!1;function r1(r,o){if(id=cu,r=Pv(),Kf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var A=0,U=-1,k=-1,oe=0,Ee=0,Te=r,Se=null;t:for(;;){for(var We;Te!==l||m!==0&&Te.nodeType!==3||(U=A+m),Te!==y||f!==0&&Te.nodeType!==3||(k=A+f),Te.nodeType===3&&(A+=Te.nodeValue.length),(We=Te.firstChild)!==null;)Se=Te,Te=We;for(;;){if(Te===r)break t;if(Se===l&&++oe===m&&(U=A),Se===y&&++Ee===f&&(k=A),(We=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=We}l=U===-1||k===-1?null:{start:U,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(od={focusedElem:r,selectionRange:l},cu=!1,je=o;je!==null;)if(o=je,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,je=r;else for(;je!==null;){o=je;try{var Ye=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,on=Ye.memoizedState,K=o.stateNode,G=K.getSnapshotBeforeUpdate(o.elementType===o.type?Ke:Or(o.type,Ke),on);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){nn(o,o.return,Le)}if(r=o.sibling,r!==null){r.return=o.return,je=r;break}je=o.return}return Ye=Qg,Qg=!1,Ye}function ol(r,o,l){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&r)===r){var y=m.destroy;m.destroy=void 0,y!==void 0&&Xd(o,l,y)}m=m.next}while(m!==f)}}function $u(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==o)}}function jd(r){var o=r.ref;if(o!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof o=="function"?o(r):o.current=r}}function e_(r){var o=r.alternate;o!==null&&(r.alternate=null,e_(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[Kr],delete o[Ys],delete o[ud],delete o[kM],delete o[BM])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function t_(r){return r.tag===5||r.tag===3||r.tag===4}function n_(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||t_(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Yd(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(r,o):l.insertBefore(r,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(r,l)):(o=l,o.appendChild(r)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Eu));else if(f!==4&&(r=r.child,r!==null))for(Yd(r,o,l),r=r.sibling;r!==null;)Yd(r,o,l),r=r.sibling}function qd(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.insertBefore(r,o):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(qd(r,o,l),r=r.sibling;r!==null;)qd(r,o,l),r=r.sibling}var Sn=null,zr=!1;function Ki(r,o,l){for(l=l.child;l!==null;)r_(r,o,l),l=l.sibling}function r_(r,o,l){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Yn,l)}catch{}switch(l.tag){case 5:Un||za(l,o);case 6:var f=Sn,m=zr;Sn=null,Ki(r,o,l),Sn=f,zr=m,Sn!==null&&(zr?(r=Sn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Sn.removeChild(l.stateNode));break;case 18:Sn!==null&&(zr?(r=Sn,l=l.stateNode,r.nodeType===8?ld(r.parentNode,l):r.nodeType===1&&ld(r,l),Os(r)):ld(Sn,l.stateNode));break;case 4:f=Sn,m=zr,Sn=l.stateNode.containerInfo,zr=!0,Ki(r,o,l),Sn=f,zr=m;break;case 0:case 11:case 14:case 15:if(!Un&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var y=m,A=y.destroy;y=y.tag,A!==void 0&&((y&2)!==0||(y&4)!==0)&&Xd(l,o,A),m=m.next}while(m!==f)}Ki(r,o,l);break;case 1:if(!Un&&(za(l,o),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(U){nn(l,o,U)}Ki(r,o,l);break;case 21:Ki(r,o,l);break;case 22:l.mode&1?(Un=(f=Un)||l.memoizedState!==null,Ki(r,o,l),Un=f):Ki(r,o,l);break;default:Ki(r,o,l)}}function i_(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new n1),o.forEach(function(f){var m=d1.bind(null,r,f);l.has(f)||(l.add(f),f.then(m,m))})}}function kr(r,o){var l=o.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var y=r,A=o,U=A;e:for(;U!==null;){switch(U.tag){case 5:Sn=U.stateNode,zr=!1;break e;case 3:Sn=U.stateNode.containerInfo,zr=!0;break e;case 4:Sn=U.stateNode.containerInfo,zr=!0;break e}U=U.return}if(Sn===null)throw Error(t(160));r_(y,A,m),Sn=null,zr=!1;var k=m.alternate;k!==null&&(k.return=null),m.return=null}catch(oe){nn(m,o,oe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)o_(o,r),o=o.sibling}function o_(r,o){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(kr(o,r),Qr(r),f&4){try{ol(3,r,r.return),$u(3,r)}catch(Ke){nn(r,r.return,Ke)}try{ol(5,r,r.return)}catch(Ke){nn(r,r.return,Ke)}}break;case 1:kr(o,r),Qr(r),f&512&&l!==null&&za(l,l.return);break;case 5:if(kr(o,r),Qr(r),f&512&&l!==null&&za(l,l.return),r.flags&32){var m=r.stateNode;try{De(m,"")}catch(Ke){nn(r,r.return,Ke)}}if(f&4&&(m=r.stateNode,m!=null)){var y=r.memoizedProps,A=l!==null?l.memoizedProps:y,U=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{U==="input"&&y.type==="radio"&&y.name!=null&&ue(m,y),st(U,A);var oe=st(U,y);for(A=0;A<k.length;A+=2){var Ee=k[A],Te=k[A+1];Ee==="style"?Pe(m,Te):Ee==="dangerouslySetInnerHTML"?qe(m,Te):Ee==="children"?De(m,Te):M(m,Ee,Te,oe)}switch(U){case"input":xe(m,y);break;case"textarea":T(m,y);break;case"select":var Se=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var We=y.value;We!=null?Ie(m,!!y.multiple,We,!1):Se!==!!y.multiple&&(y.defaultValue!=null?Ie(m,!!y.multiple,y.defaultValue,!0):Ie(m,!!y.multiple,y.multiple?[]:"",!1))}m[Ys]=y}catch(Ke){nn(r,r.return,Ke)}}break;case 6:if(kr(o,r),Qr(r),f&4){if(r.stateNode===null)throw Error(t(162));m=r.stateNode,y=r.memoizedProps;try{m.nodeValue=y}catch(Ke){nn(r,r.return,Ke)}}break;case 3:if(kr(o,r),Qr(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Os(o.containerInfo)}catch(Ke){nn(r,r.return,Ke)}break;case 4:kr(o,r),Qr(r);break;case 13:kr(o,r),Qr(r),m=r.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(Jd=Xe())),f&4&&i_(r);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,r.mode&1?(Un=(oe=Un)||Ee,kr(o,r),Un=oe):kr(o,r),Qr(r),f&8192){if(oe=r.memoizedState!==null,(r.stateNode.isHidden=oe)&&!Ee&&(r.mode&1)!==0)for(je=r,Ee=r.child;Ee!==null;){for(Te=je=Ee;je!==null;){switch(Se=je,We=Se.child,Se.tag){case 0:case 11:case 14:case 15:ol(4,Se,Se.return);break;case 1:za(Se,Se.return);var Ye=Se.stateNode;if(typeof Ye.componentWillUnmount=="function"){f=Se,l=Se.return;try{o=f,Ye.props=o.memoizedProps,Ye.state=o.memoizedState,Ye.componentWillUnmount()}catch(Ke){nn(f,l,Ke)}}break;case 5:za(Se,Se.return);break;case 22:if(Se.memoizedState!==null){l_(Te);continue}}We!==null?(We.return=Se,je=We):l_(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=r;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{m=Te.stateNode,oe?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(U=Te.stateNode,k=Te.memoizedProps.style,A=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=At("display",A))}catch(Ke){nn(r,r.return,Ke)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=oe?"":Te.memoizedProps}catch(Ke){nn(r,r.return,Ke)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===r)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===r)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===r)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:kr(o,r),Qr(r),f&4&&i_(r);break;case 21:break;default:kr(o,r),Qr(r)}}function Qr(r){var o=r.flags;if(o&2){try{e:{for(var l=r.return;l!==null;){if(t_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(De(m,""),f.flags&=-33);var y=n_(r);qd(r,y,m);break;case 3:case 4:var A=f.stateNode.containerInfo,U=n_(r);Yd(r,U,A);break;default:throw Error(t(161))}}catch(k){nn(r,r.return,k)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function i1(r,o,l){je=r,a_(r)}function a_(r,o,l){for(var f=(r.mode&1)!==0;je!==null;){var m=je,y=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||Wu;if(!A){var U=m.alternate,k=U!==null&&U.memoizedState!==null||Un;U=Wu;var oe=Un;if(Wu=A,(Un=k)&&!oe)for(je=m;je!==null;)A=je,k=A.child,A.tag===22&&A.memoizedState!==null?u_(m):k!==null?(k.return=A,je=k):u_(m);for(;y!==null;)je=y,a_(y),y=y.sibling;je=m,Wu=U,Un=oe}s_(r)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,je=y):s_(r)}}function s_(r){for(;je!==null;){var o=je;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Un||$u(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!Un)if(l===null)f.componentDidMount();else{var m=o.elementType===o.type?l.memoizedProps:Or(o.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&lg(o,y,f);break;case 3:var A=o.updateQueue;if(A!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}lg(o,A,l)}break;case 5:var U=o.stateNode;if(l===null&&o.flags&4){l=U;var k=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var oe=o.alternate;if(oe!==null){var Ee=oe.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Os(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||o.flags&512&&jd(o)}catch(Se){nn(o,o.return,Se)}}if(o===r){je=null;break}if(l=o.sibling,l!==null){l.return=o.return,je=l;break}je=o.return}}function l_(r){for(;je!==null;){var o=je;if(o===r){je=null;break}var l=o.sibling;if(l!==null){l.return=o.return,je=l;break}je=o.return}}function u_(r){for(;je!==null;){var o=je;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{$u(4,o)}catch(k){nn(o,l,k)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var m=o.return;try{f.componentDidMount()}catch(k){nn(o,m,k)}}var y=o.return;try{jd(o)}catch(k){nn(o,y,k)}break;case 5:var A=o.return;try{jd(o)}catch(k){nn(o,A,k)}}}catch(k){nn(o,o.return,k)}if(o===r){je=null;break}var U=o.sibling;if(U!==null){U.return=o.return,je=U;break}je=o.return}}var o1=Math.ceil,Xu=R.ReactCurrentDispatcher,Kd=R.ReactCurrentOwner,wr=R.ReactCurrentBatchConfig,Ct=0,_n=null,sn=null,En=0,fr=0,ka=$i(0),dn=0,al=null,Ho=0,ju=0,Zd=0,sl=null,Qn=null,Jd=0,Ba=1/0,Ei=null,Yu=!1,Qd=null,Zi=null,qu=!1,Ji=null,Ku=0,ll=0,eh=null,Zu=-1,Ju=0;function Wn(){return(Ct&6)!==0?Xe():Zu!==-1?Zu:Zu=Xe()}function Qi(r){return(r.mode&1)===0?1:(Ct&2)!==0&&En!==0?En&-En:VM.transition!==null?(Ju===0&&(Ju=su()),Ju):(r=Ut,r!==0||(r=window.event,r=r===void 0?16:fv(r.type)),r)}function Br(r,o,l,f){if(50<ll)throw ll=0,eh=null,Error(t(185));Ds(r,l,f),((Ct&2)===0||r!==_n)&&(r===_n&&((Ct&2)===0&&(ju|=l),dn===4&&eo(r,En)),er(r,f),l===1&&Ct===0&&(o.mode&1)===0&&(Ba=Xe()+500,Tu&&ji()))}function er(r,o){var l=r.callbackNode;qn(r,o);var f=_r(r,r===_n?En:0);if(f===0)l!==null&&Ge(l),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(l!=null&&Ge(l),o===1)r.tag===0?HM(f_.bind(null,r)):Kv(f_.bind(null,r)),OM(function(){(Ct&6)===0&&ji()}),l=null;else{switch(rv(f)){case 1:l=dt;break;case 4:l=pt;break;case 16:l=Bt;break;case 536870912:l=rn;break;default:l=Bt}l=y_(l,c_.bind(null,r))}r.callbackPriority=o,r.callbackNode=l}}function c_(r,o){if(Zu=-1,Ju=0,(Ct&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Ha()&&r.callbackNode!==l)return null;var f=_r(r,r===_n?En:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=Qu(r,f);else{o=f;var m=Ct;Ct|=2;var y=h_();(_n!==r||En!==o)&&(Ei=null,Ba=Xe()+500,Go(r,o));do try{l1();break}catch(U){d_(r,U)}while(!0);_d(),Xu.current=y,Ct=m,sn!==null?o=0:(_n=null,En=0,o=dn)}if(o!==0){if(o===2&&(m=Io(r),m!==0&&(f=m,o=th(r,m))),o===1)throw l=al,Go(r,0),eo(r,f),er(r,Xe()),l;if(o===6)eo(r,f);else{if(m=r.current.alternate,(f&30)===0&&!a1(m)&&(o=Qu(r,f),o===2&&(y=Io(r),y!==0&&(f=y,o=th(r,y))),o===1))throw l=al,Go(r,0),eo(r,f),er(r,Xe()),l;switch(r.finishedWork=m,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:Wo(r,Qn,Ei);break;case 3:if(eo(r,f),(f&130023424)===f&&(o=Jd+500-Xe(),10<o)){if(_r(r,0)!==0)break;if(m=r.suspendedLanes,(m&f)!==f){Wn(),r.pingedLanes|=r.suspendedLanes&m;break}r.timeoutHandle=sd(Wo.bind(null,r,Qn,Ei),o);break}Wo(r,Qn,Ei);break;case 4:if(eo(r,f),(f&4194240)===f)break;for(o=r.eventTimes,m=-1;0<f;){var A=31-Vn(f);y=1<<A,A=o[A],A>m&&(m=A),f&=~y}if(f=m,f=Xe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*o1(f/1960))-f,10<f){r.timeoutHandle=sd(Wo.bind(null,r,Qn,Ei),f);break}Wo(r,Qn,Ei);break;case 5:Wo(r,Qn,Ei);break;default:throw Error(t(329))}}}return er(r,Xe()),r.callbackNode===l?c_.bind(null,r):null}function th(r,o){var l=sl;return r.current.memoizedState.isDehydrated&&(Go(r,o).flags|=256),r=Qu(r,o),r!==2&&(o=Qn,Qn=l,o!==null&&nh(o)),r}function nh(r){Qn===null?Qn=r:Qn.push.apply(Qn,r)}function a1(r){for(var o=r;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],y=m.getSnapshot;m=m.value;try{if(!Nr(y(),m))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function eo(r,o){for(o&=~Zd,o&=~ju,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var l=31-Vn(o),f=1<<l;r[l]=-1,o&=~f}}function f_(r){if((Ct&6)!==0)throw Error(t(327));Ha();var o=_r(r,0);if((o&1)===0)return er(r,Xe()),null;var l=Qu(r,o);if(r.tag!==0&&l===2){var f=Io(r);f!==0&&(o=f,l=th(r,f))}if(l===1)throw l=al,Go(r,0),eo(r,o),er(r,Xe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,Wo(r,Qn,Ei),er(r,Xe()),null}function rh(r,o){var l=Ct;Ct|=1;try{return r(o)}finally{Ct=l,Ct===0&&(Ba=Xe()+500,Tu&&ji())}}function Vo(r){Ji!==null&&Ji.tag===0&&(Ct&6)===0&&Ha();var o=Ct;Ct|=1;var l=wr.transition,f=Ut;try{if(wr.transition=null,Ut=1,r)return r()}finally{Ut=f,wr.transition=l,Ct=o,(Ct&6)===0&&ji()}}function ih(){fr=ka.current,$t(ka)}function Go(r,o){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,FM(l)),sn!==null)for(l=sn.return;l!==null;){var f=l;switch(hd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Mu();break;case 3:Fa(),$t(Kn),$t(Pn),Td();break;case 5:Md(f);break;case 4:Fa();break;case 13:$t(Zt);break;case 19:$t(Zt);break;case 10:yd(f.type._context);break;case 22:case 23:ih()}l=l.return}if(_n=r,sn=r=to(r.current,null),En=fr=o,dn=0,al=null,Zd=ju=Ho=0,Qn=sl=null,zo!==null){for(o=0;o<zo.length;o++)if(l=zo[o],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,y=l.pending;if(y!==null){var A=y.next;y.next=m,f.next=A}l.pending=f}zo=null}return r}function d_(r,o){do{var l=sn;try{if(_d(),Fu.current=Bu,Ou){for(var f=Jt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Ou=!1}if(Bo=0,gn=fn=Jt=null,el=!1,tl=0,Kd.current=null,l===null||l.return===null){dn=1,al=o,sn=null;break}e:{var y=r,A=l.return,U=l,k=o;if(o=En,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var oe=k,Ee=U,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var We=Og(A);if(We!==null){We.flags&=-257,zg(We,A,U,y,o),We.mode&1&&Fg(y,oe,o),o=We,k=oe;var Ye=o.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(k),o.updateQueue=Ke}else Ye.add(k);break e}else{if((o&1)===0){Fg(y,oe,o),oh();break e}k=Error(t(426))}}else if(qt&&U.mode&1){var on=Og(A);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),zg(on,A,U,y,o),vd(Oa(k,U));break e}}y=k=Oa(k,U),dn!==4&&(dn=2),sl===null?sl=[y]:sl.push(y),y=A;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var K=Ug(y,k,o);sg(y,K);break e;case 1:U=k;var G=y.type,te=y.stateNode;if((y.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Zi===null||!Zi.has(te)))){y.flags|=65536,o&=-o,y.lanes|=o;var Le=Ng(y,U,o);sg(y,Le);break e}}y=y.return}while(y!==null)}m_(l)}catch(Je){o=Je,sn===l&&l!==null&&(sn=l=l.return);continue}break}while(!0)}function h_(){var r=Xu.current;return Xu.current=Bu,r===null?Bu:r}function oh(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(Ho&268435455)===0&&(ju&268435455)===0||eo(_n,En)}function Qu(r,o){var l=Ct;Ct|=2;var f=h_();(_n!==r||En!==o)&&(Ei=null,Go(r,o));do try{s1();break}catch(m){d_(r,m)}while(!0);if(_d(),Ct=l,Xu.current=f,sn!==null)throw Error(t(261));return _n=null,En=0,dn}function s1(){for(;sn!==null;)p_(sn)}function l1(){for(;sn!==null&&!Qe();)p_(sn)}function p_(r){var o=__(r.alternate,r,fr);r.memoizedProps=r.pendingProps,o===null?m_(r):sn=o,Kd.current=null}function m_(r){var o=r;do{var l=o.alternate;if(r=o.return,(o.flags&32768)===0){if(l=e1(l,o,fr),l!==null){sn=l;return}}else{if(l=t1(l,o),l!==null){l.flags&=32767,sn=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{dn=6,sn=null;return}}if(o=o.sibling,o!==null){sn=o;return}sn=o=r}while(o!==null);dn===0&&(dn=5)}function Wo(r,o,l){var f=Ut,m=wr.transition;try{wr.transition=null,Ut=1,u1(r,o,l,f)}finally{wr.transition=m,Ut=f}return null}function u1(r,o,l,f){do Ha();while(Ji!==null);if((Ct&6)!==0)throw Error(t(327));l=r.finishedWork;var m=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(Gw(r,y),r===_n&&(sn=_n=null,En=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||qu||(qu=!0,y_(Bt,function(){return Ha(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=wr.transition,wr.transition=null;var A=Ut;Ut=1;var U=Ct;Ct|=4,Kd.current=null,r1(r,l),o_(l,r),RM(od),cu=!!id,od=id=null,r.current=l,i1(l),at(),Ct=U,Ut=A,wr.transition=y}else r.current=l;if(qu&&(qu=!1,Ji=r,Ku=m),y=r.pendingLanes,y===0&&(Zi=null),yt(l.stateNode),er(r,Xe()),o!==null)for(f=r.onRecoverableError,l=0;l<o.length;l++)m=o[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Yu)throw Yu=!1,r=Qd,Qd=null,r;return(Ku&1)!==0&&r.tag!==0&&Ha(),y=r.pendingLanes,(y&1)!==0?r===eh?ll++:(ll=0,eh=r):ll=0,ji(),null}function Ha(){if(Ji!==null){var r=rv(Ku),o=wr.transition,l=Ut;try{if(wr.transition=null,Ut=16>r?16:r,Ji===null)var f=!1;else{if(r=Ji,Ji=null,Ku=0,(Ct&6)!==0)throw Error(t(331));var m=Ct;for(Ct|=4,je=r.current;je!==null;){var y=je,A=y.child;if((je.flags&16)!==0){var U=y.deletions;if(U!==null){for(var k=0;k<U.length;k++){var oe=U[k];for(je=oe;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:ol(8,Ee,y)}var Te=Ee.child;if(Te!==null)Te.return=Ee,je=Te;else for(;je!==null;){Ee=je;var Se=Ee.sibling,We=Ee.return;if(e_(Ee),Ee===oe){je=null;break}if(Se!==null){Se.return=We,je=Se;break}je=We}}}var Ye=y.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var on=Ke.sibling;Ke.sibling=null,Ke=on}while(Ke!==null)}}je=y}}if((y.subtreeFlags&2064)!==0&&A!==null)A.return=y,je=A;else e:for(;je!==null;){if(y=je,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:ol(9,y,y.return)}var K=y.sibling;if(K!==null){K.return=y.return,je=K;break e}je=y.return}}var G=r.current;for(je=G;je!==null;){A=je;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,je=te;else e:for(A=G;je!==null;){if(U=je,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:$u(9,U)}}catch(Je){nn(U,U.return,Je)}if(U===A){je=null;break e}var Le=U.sibling;if(Le!==null){Le.return=U.return,je=Le;break e}je=U.return}}if(Ct=m,ji(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Yn,r)}catch{}f=!0}return f}finally{Ut=l,wr.transition=o}}return!1}function v_(r,o,l){o=Oa(l,o),o=Ug(r,o,1),r=qi(r,o,1),o=Wn(),r!==null&&(Ds(r,1,o),er(r,o))}function nn(r,o,l){if(r.tag===3)v_(r,r,l);else for(;o!==null;){if(o.tag===3){v_(o,r,l);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Zi===null||!Zi.has(f))){r=Oa(l,r),r=Ng(o,r,1),o=qi(o,r,1),r=Wn(),o!==null&&(Ds(o,1,r),er(o,r));break}}o=o.return}}function c1(r,o,l){var f=r.pingCache;f!==null&&f.delete(o),o=Wn(),r.pingedLanes|=r.suspendedLanes&l,_n===r&&(En&l)===l&&(dn===4||dn===3&&(En&130023424)===En&&500>Xe()-Jd?Go(r,0):Zd|=l),er(r,o)}function g_(r,o){o===0&&((r.mode&1)===0?o=1:(o=Oi,Oi<<=1,(Oi&130023424)===0&&(Oi=4194304)));var l=Wn();r=yi(r,o),r!==null&&(Ds(r,o,l),er(r,l))}function f1(r){var o=r.memoizedState,l=0;o!==null&&(l=o.retryLane),g_(r,l)}function d1(r,o){var l=0;switch(r.tag){case 13:var f=r.stateNode,m=r.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),g_(r,l)}var __;__=function(r,o,l){if(r!==null)if(r.memoizedProps!==o.pendingProps||Kn.current)Jn=!0;else{if((r.lanes&l)===0&&(o.flags&128)===0)return Jn=!1,QM(r,o,l);Jn=(r.flags&131072)!==0}else Jn=!1,qt&&(o.flags&1048576)!==0&&Zv(o,Cu,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;Gu(r,o),r=o.pendingProps;var m=Ra(o,Pn.current);Na(o,l),m=Rd(null,o,f,r,m,l);var y=Ld();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Zn(f)?(y=!0,Au(o)):y=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Ed(o),m.updater=Hu,o.stateNode=m,m._reactInternals=o,Fd(o,f,r,l),o=Bd(null,o,f,!0,y,l)):(o.tag=0,qt&&y&&dd(o),Gn(null,o,m,l),o=o.child),o;case 16:f=o.elementType;e:{switch(Gu(r,o),r=o.pendingProps,m=f._init,f=m(f._payload),o.type=f,m=o.tag=p1(f),r=Or(f,r),m){case 0:o=kd(null,o,f,r,l);break e;case 1:o=Wg(null,o,f,r,l);break e;case 11:o=kg(null,o,f,r,l);break e;case 14:o=Bg(null,o,f,Or(f.type,r),l);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Or(f,m),kd(r,o,f,m,l);case 1:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Or(f,m),Wg(r,o,f,m,l);case 3:e:{if($g(o),r===null)throw Error(t(387));f=o.pendingProps,y=o.memoizedState,m=y.element,ag(r,o),Uu(o,f,null,l);var A=o.memoizedState;if(f=A.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){m=Oa(Error(t(423)),o),o=Xg(r,o,f,l,m);break e}else if(f!==m){m=Oa(Error(t(424)),o),o=Xg(r,o,f,l,m);break e}else for(cr=Wi(o.stateNode.containerInfo.firstChild),ur=o,qt=!0,Fr=null,l=ig(o,null,f,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Da(),f===m){o=Si(r,o,l);break e}Gn(r,o,f,l)}o=o.child}return o;case 5:return ug(o),r===null&&md(o),f=o.type,m=o.pendingProps,y=r!==null?r.memoizedProps:null,A=m.children,ad(f,m)?A=null:y!==null&&ad(f,y)&&(o.flags|=32),Gg(r,o),Gn(r,o,A,l),o.child;case 6:return r===null&&md(o),null;case 13:return jg(r,o,l);case 4:return wd(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=Ia(o,null,f,l):Gn(r,o,f,l),o.child;case 11:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Or(f,m),kg(r,o,f,m,l);case 7:return Gn(r,o,o.pendingProps,l),o.child;case 8:return Gn(r,o,o.pendingProps.children,l),o.child;case 12:return Gn(r,o,o.pendingProps.children,l),o.child;case 10:e:{if(f=o.type._context,m=o.pendingProps,y=o.memoizedProps,A=m.value,Ht(Pu,f._currentValue),f._currentValue=A,y!==null)if(Nr(y.value,A)){if(y.children===m.children&&!Kn.current){o=Si(r,o,l);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var U=y.dependencies;if(U!==null){A=y.child;for(var k=U.firstContext;k!==null;){if(k.context===f){if(y.tag===1){k=xi(-1,l&-l),k.tag=2;var oe=y.updateQueue;if(oe!==null){oe=oe.shared;var Ee=oe.pending;Ee===null?k.next=k:(k.next=Ee.next,Ee.next=k),oe.pending=k}}y.lanes|=l,k=y.alternate,k!==null&&(k.lanes|=l),xd(y.return,l,o),U.lanes|=l;break}k=k.next}}else if(y.tag===10)A=y.type===o.type?null:y.child;else if(y.tag===18){if(A=y.return,A===null)throw Error(t(341));A.lanes|=l,U=A.alternate,U!==null&&(U.lanes|=l),xd(A,l,o),A=y.sibling}else A=y.child;if(A!==null)A.return=y;else for(A=y;A!==null;){if(A===o){A=null;break}if(y=A.sibling,y!==null){y.return=A.return,A=y;break}A=A.return}y=A}Gn(r,o,m.children,l),o=o.child}return o;case 9:return m=o.type,f=o.pendingProps.children,Na(o,l),m=Sr(m),f=f(m),o.flags|=1,Gn(r,o,f,l),o.child;case 14:return f=o.type,m=Or(f,o.pendingProps),m=Or(f.type,m),Bg(r,o,f,m,l);case 15:return Hg(r,o,o.type,o.pendingProps,l);case 17:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Or(f,m),Gu(r,o),o.tag=1,Zn(f)?(r=!0,Au(o)):r=!1,Na(o,l),Dg(o,f,m),Fd(o,f,m,l),Bd(null,o,f,!0,r,l);case 19:return qg(r,o,l);case 22:return Vg(r,o,l)}throw Error(t(156,o.tag))};function y_(r,o){return ce(r,o)}function h1(r,o,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mr(r,o,l,f){return new h1(r,o,l,f)}function ah(r){return r=r.prototype,!(!r||!r.isReactComponent)}function p1(r){if(typeof r=="function")return ah(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ne)return 11;if(r===Q)return 14}return 2}function to(r,o){var l=r.alternate;return l===null?(l=Mr(r.tag,o,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=o,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,o=r.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function ec(r,o,l,f,m,y){var A=2;if(f=r,typeof r=="function")ah(r)&&(A=1);else if(typeof r=="string")A=5;else e:switch(r){case F:return $o(l.children,m,y,o);case de:A=8,m|=8;break;case b:return r=Mr(12,l,o,m|2),r.elementType=b,r.lanes=y,r;case pe:return r=Mr(13,l,o,m),r.elementType=pe,r.lanes=y,r;case H:return r=Mr(19,l,o,m),r.elementType=H,r.lanes=y,r;case re:return tc(l,m,y,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:A=10;break e;case ae:A=9;break e;case ne:A=11;break e;case Q:A=14;break e;case se:A=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=Mr(A,l,o,m),o.elementType=r,o.type=f,o.lanes=y,o}function $o(r,o,l,f){return r=Mr(7,r,f,o),r.lanes=l,r}function tc(r,o,l,f){return r=Mr(22,r,f,o),r.elementType=re,r.lanes=l,r.stateNode={isHidden:!1},r}function sh(r,o,l){return r=Mr(6,r,null,o),r.lanes=l,r}function lh(r,o,l){return o=Mr(4,r.children!==null?r.children:[],r.key,o),o.lanes=l,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function m1(r,o,l,f,m){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function uh(r,o,l,f,m,y,A,U,k){return r=new m1(r,o,l,U,k),o===1?(o=1,y===!0&&(o|=8)):o=0,y=Mr(3,null,null,o),r.current=y,y.stateNode=r,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(y),r}function v1(r,o,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:r,containerInfo:o,implementation:l}}function x_(r){if(!r)return Xi;r=r._reactInternals;e:{if(hi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Zn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Zn(l))return Yv(r,l,o)}return o}function S_(r,o,l,f,m,y,A,U,k){return r=uh(l,f,!0,r,m,y,A,U,k),r.context=x_(null),l=r.current,f=Wn(),m=Qi(l),y=xi(f,m),y.callback=o??null,qi(l,y,m),r.current.lanes=m,Ds(r,m,f),er(r,f),r}function nc(r,o,l,f){var m=o.current,y=Wn(),A=Qi(m);return l=x_(l),o.context===null?o.context=l:o.pendingContext=l,o=xi(y,A),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=qi(m,o,A),r!==null&&(Br(r,m,A,y),Iu(r,m,A)),A}function rc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function E_(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<o?l:o}}function ch(r,o){E_(r,o),(r=r.alternate)&&E_(r,o)}function g1(){return null}var w_=typeof reportError=="function"?reportError:function(r){console.error(r)};function fh(r){this._internalRoot=r}ic.prototype.render=fh.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));nc(r,o,null,null)},ic.prototype.unmount=fh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;Vo(function(){nc(null,r,null,null)}),o[mi]=null}};function ic(r){this._internalRoot=r}ic.prototype.unstable_scheduleHydration=function(r){if(r){var o=av();r={blockedOn:null,target:r,priority:o};for(var l=0;l<Hi.length&&o!==0&&o<Hi[l].priority;l++);Hi.splice(l,0,r),l===0&&uv(r)}};function dh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function oc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function M_(){}function _1(r,o,l,f,m){if(m){if(typeof f=="function"){var y=f;f=function(){var oe=rc(A);y.call(oe)}}var A=S_(o,f,r,0,null,!1,!1,"",M_);return r._reactRootContainer=A,r[mi]=A.current,Xs(r.nodeType===8?r.parentNode:r),Vo(),A}for(;m=r.lastChild;)r.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var oe=rc(k);U.call(oe)}}var k=uh(r,0,!1,null,null,!1,!1,"",M_);return r._reactRootContainer=k,r[mi]=k.current,Xs(r.nodeType===8?r.parentNode:r),Vo(function(){nc(o,k,l,f)}),k}function ac(r,o,l,f,m){var y=l._reactRootContainer;if(y){var A=y;if(typeof m=="function"){var U=m;m=function(){var k=rc(A);U.call(k)}}nc(o,A,r,m)}else A=_1(l,o,r,m,f);return rc(A)}iv=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var l=tn(o.pendingLanes);l!==0&&(Ff(o,l|1),er(o,Xe()),(Ct&6)===0&&(Ba=Xe()+500,ji()))}break;case 13:Vo(function(){var f=yi(r,1);if(f!==null){var m=Wn();Br(f,r,1,m)}}),ch(r,1)}},Of=function(r){if(r.tag===13){var o=yi(r,134217728);if(o!==null){var l=Wn();Br(o,r,134217728,l)}ch(r,134217728)}},ov=function(r){if(r.tag===13){var o=Qi(r),l=yi(r,o);if(l!==null){var f=Wn();Br(l,r,o,f)}ch(r,o)}},av=function(){return Ut},sv=function(r,o){var l=Ut;try{return Ut=r,o()}finally{Ut=l}},_t=function(r,o,l){switch(o){case"input":if(xe(r,l),o=l.name,l.type==="radio"&&o!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var f=l[o];if(f!==r&&f.form===r.form){var m=wu(f);if(!m)throw Error(t(90));j(f),xe(f,m)}}}break;case"textarea":T(r,l);break;case"select":o=l.value,o!=null&&Ie(r,!!l.multiple,o,!1)}},ot=rh,wt=Vo;var y1={usingClientEntryPoint:!1,Events:[qs,ba,wu,me,Ue,rh]},ul={findFiberByHostInstance:Uo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x1={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=fe(r),r===null?null:r.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Yn=sc.inject(x1),Tt=sc}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1,tr.createPortal=function(r,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(o))throw Error(t(200));return v1(r,o,null,l)},tr.createRoot=function(r,o){if(!dh(r))throw Error(t(299));var l=!1,f="",m=w_;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=uh(r,1,!1,null,null,l,!1,f,m),r[mi]=o.current,Xs(r.nodeType===8?r.parentNode:r),new fh(o)},tr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=fe(o),r=r===null?null:r.stateNode,r},tr.flushSync=function(r){return Vo(r)},tr.hydrate=function(r,o,l){if(!oc(o))throw Error(t(200));return ac(null,r,o,!0,l)},tr.hydrateRoot=function(r,o,l){if(!dh(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,y="",A=w_;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),o=S_(o,null,r,1,l??null,m,!1,y,A),r[mi]=o.current,Xs(r),f)for(r=0;r<f.length;r++)l=f[r],m=l._getVersion,m=m(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,m]:o.mutableSourceEagerHydrationData.push(l,m);return new ic(o)},tr.render=function(r,o,l){if(!oc(o))throw Error(t(200));return ac(null,r,o,!1,l)},tr.unmountComponentAtNode=function(r){if(!oc(r))throw Error(t(40));return r._reactRootContainer?(Vo(function(){ac(null,null,r,!1,function(){r._reactRootContainer=null,r[mi]=null})}),!0):!1},tr.unstable_batchedUpdates=rh,tr.unstable_renderSubtreeIntoContainer=function(r,o,l,f){if(!oc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ac(r,o,l,!1,f)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var D_;function ex(){if(D_)return mh.exports;D_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),mh.exports=C1(),mh.exports}var I_;function R1(){if(I_)return lc;I_=1;var n=ex();return lc.createRoot=n.createRoot,lc.hydrateRoot=n.hydrateRoot,lc}var L1=R1();const P1=Qy(L1);var Ve=em();const co=Qy(Ve),D1=E1({__proto__:null,default:co},[Ve]);var tx={compose:function(n){return function(e){return function(t){return n(e(t))}}}},nx=function(n){return n.compose},vr=function(n){return n.identity},gr={identity:function(n){return n}},I1=function(n){return function(e){return function(t){return function(i){return n(e(t))(e(i))}}}},si=function(n){return function(e){return function(t){return n(t)(e)}}},kt=function(n){return function(e){return n}};const U1=function(n){return function(e){for(var t=e.length,i=new Array(t),a=0;a<t;a++)i[a]=n(e[a]);return i}},kn=void 0;var Mt=(function(){function n(){}return n.value=new n,n})(),Nt=function(n){return n.map},N1=function(n){var e=Nt(n);return function(t){return function(i){return e(i)(t)}}},rx=function(n){return Nt(n)(kt(kn))},ix={map:nx(tx)},kl={map:U1},As=function(n){return n.apply},Rt=function(n){return n.pure},tm=function(n){var e=Rt(n);return function(t){return function(i){if(t)return i;if(!t)return e(kn);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,i.constructor.name])}}},F1=function(n){var e=As(n.Apply0()),t=Rt(n);return function(i){return function(a){return e(t(i))(a)}}};const O1=typeof Array.prototype.flatMap=="function"?function(n){return function(e){return n.flatMap(e)}}:function(n){return function(e){for(var t=[],i=n.length,a=0;a<i;a++)for(var s=e(n[a]),c=s.length,u=0;u<c;u++)t.push(s[u]);return t}};var sf=function(n){return n.discard},z1={bind:O1},mn=function(n){return n.bind},nm=function(n){return si(mn(n))},ox=function(n){var e=nm(n);return function(t){return function(i){return function(a){return e(t)(i(a))}}}},k1=function(n){var e=mn(n);return function(t){return function(i){return function(a){return e(t(a))(i)}}}},lf={discard:function(n){return mn(n)}};const B1=function(n){return function(e){return n.length===0?e:e.length===0?n:n.concat(e)}};var Ir=function(n){return n.reflectSymbol};const rm=function(n){return function(e){return e[n]}},im=function(n){return function(e){return function(t){var i={};for(var a in t)({}).hasOwnProperty.call(t,a)&&(i[a]=t[a]);return i[n]=e,i}}},H1=function(n){return function(e){var t={};for(var i in e)i!==n&&{}.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}};var Bl={append:B1},Ur=function(n){return n.append},V1=function(n){var e=Ur(n);return{append:function(t){return function(i){return function(a){return e(t(a))(i(a))}}}}},G1=function(n){return n.alt};const W1=2147483647,$1=-2147483648,X1="￿",j1="\0";var Y1=function(n){return function(e){return function(t){return function(i){return function(a){return i<a?n:i===a?e:t}}}}};const q1=Y1;var om=function(n){return function(e){return n===e}};const K1=om,Z1=om,J1=om,Q1=function(n){return function(e){return function(t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!n(e[i])(t[i]))return!1;return!0}}};var aa={eq:J1},eA={eqRecord:function(n){return function(e){return function(t){return!0}}}},ax=function(n){return n.eqRecord},tA=function(){return function(n){return{eq:ax(n)(Mt.value)}}},nA={eq:Z1},rA={eq:K1},fi=function(n){return n.eq},iA=fi(rA),qc=function(n){return{eq:Q1(fi(n))}},Xc=function(n){var e=ax(n);return function(){return function(t){var i=Ir(t);return function(a){var s=fi(a);return{eqRecord:function(c){return function(u){return function(d){var h=e(Mt.value)(u)(d),p=i(Mt.value),v=rm(p);return s(v(u))(v(d))&&h}}}}}}}},sx=function(n){var e=fi(n);return function(t){return function(i){return iA(e(t)(i))(!1)}}},Kc=(function(){function n(){}return n.value=new n,n})(),Zc=(function(){function n(){}return n.value=new n,n})(),Dl=(function(){function n(){}return n.value=new n,n})(),oA={eq:function(n){return function(e){return n instanceof Kc&&e instanceof Kc||n instanceof Zc&&e instanceof Zc||n instanceof Dl&&e instanceof Dl}}},lx=(function(){return{compare:q1(Kc.value)(Dl.value)(Zc.value),Eq0:function(){return nA}}})(),aA=function(n){return n.compare},am=function(n){return n.top},ux={top:W1,bottom:$1},Il={top:X1,bottom:j1,Ord0:function(){return lx}},uf=function(n){return n.bottom};const sA=function(n){return n.toString()},lA=function(n){var e=n.length;return'"'+n.replace(/[\0-\x1F\x7F"\\]/g,function(t,i){switch(t){case'"':case"\\":return"\\"+t;case"\x07":return"\\a";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v"}var a=i+1,s=a<e&&n[a]>="0"&&n[a]<="9"?"\\&":"";return"\\"+t.charCodeAt(0).toString(10)+s})+'"'};var uA={show:lA},sm={show:sA},pa=function(n){return n.show},jt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ne=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),nr=(function(){function n(){}return n.value=new n,n})(),cA=function(n){return n},fA=function(n){return n},cx=function(n){return n.to},lm=function(n){return n.from},dA=vr(gr),bt=(function(){function n(){}return n.value=new n,n})(),gt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ma=function(n){return function(e){return function(t){if(t instanceof bt)return n;if(t instanceof gt)return e(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},hA=ma(!0)(kt(!1)),Hl={map:function(n){return function(e){return e instanceof gt?new gt(n(e.value0)):bt.value}}},pA=Nt(Hl),fx=function(n){return ma(n)(dA)},mA=function(){return function(n){if(n instanceof gt)return n.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[n.constructor.name])}},dx={apply:function(n){return function(e){if(n instanceof gt)return pA(n.value0)(e);if(n instanceof bt)return bt.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return Hl}},hx={bind:function(n){return function(e){if(n instanceof gt)return e(n.value0);if(n instanceof bt)return bt.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,e.constructor.name])}}},vA=(function(){return{pure:gt.create,Apply0:function(){return dx}}})(),ct=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ms=function(n){return ma(new ct(n))(mt.create)},va={map:function(n){return function(e){if(e instanceof ct)return new ct(e.value0);if(e instanceof mt)return new mt(n(e.value0));throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},gA=Nt(va),Vl=function(n){return function(e){return function(t){if(t instanceof ct)return n(t.value0);if(t instanceof mt)return e(t.value0);throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},px={apply:function(n){return function(e){if(n instanceof ct)return new ct(n.value0);if(n instanceof mt)return gA(n.value0)(e);throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return va}},Gl={bind:Vl(function(n){return function(e){return new ct(n)}})(function(n){return function(e){return e(n)}}),Apply0:function(){return px}},ga=(function(){return{pure:mt.create,Apply0:function(){return px}}})();const _A=function(n){return function(){return n}},yA=function(n){return function(e){return function(){return e(n())()}}};var um=function(n){var e=mn(n.Bind1()),t=Rt(n.Applicative0());return function(i){return function(a){return e(i)(function(s){return e(a)(function(c){return t(s(c))})})}}};const xA=function(n){return function(e){return e===0?0:e>0?Math.floor(n/e):-Math.floor(n/-e)}},SA=function(n){return function(e){if(e===0)return 0;var t=Math.abs(e);return(n%t+t)%t}};var EA=function(n){return n.mod},mx={div:xA,mod:SA},wA=function(n){return n.div},vx={mempty:[],Semigroup0:function(){return Bl}},Ts=function(n){return n.mempty},MA=function(n){var e=Ts(n),t=V1(n.Semigroup0());return{mempty:function(i){return e},Semigroup0:function(){return t}}},gx=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},AA={Applicative0:function(){return cm},Bind1:function(){return TA}},TA={bind:yA,Apply0:function(){return yx(0)}},cm={pure:_A,Apply0:function(){return yx(0)}},_x=gx("functorEffect","Effect",function(){return{map:F1(cm)}}),yx=gx("applyEffect","Effect",function(){return{apply:um(AA),Functor0:function(){return _x(0)}}}),bA=_x(20);function xx(n){return n.message}var Wl=function(n){return n.throwError},fm=function(n){return n.catchError},CA=function(n){var e=fm(n),t=n.MonadThrow0().Monad0(),i=Nt(t.Bind1().Apply0().Functor0()),a=Rt(t.Applicative0());return function(s){return e(i(mt.create)(s))(function(c){return a(ct.create(c))})}},RA=function(n){return n},LA={map:function(n){return function(e){return n(e)}}},Sx={apply:function(n){return function(e){return n(e)}},Functor0:function(){return LA}},Ex={bind:function(n){return function(e){return e(n)}},Apply0:function(){return Sx}},wx={pure:RA,Apply0:function(){return Sx}},Co={Applicative0:function(){return wx},Bind1:function(){return Ex}};const $l=function(n){return n},PA=function(n){return function(e){return function(){return n(e())}}},DA=function(n){return function(e){return function(){for(var t=0,i=n.length;t<i;t++)e(n[t])()}}};var IA={map:PA};const UA=function(n){return function(e){return n&&e}},NA=function(n){return function(e){return n||e}},FA=function(n){return!n};var OA=function(n){return n.not},zA=function(n){return n.ff},Mx=function(n){return n.disj},mp={ff:!1,tt:!0,implies:function(n){return function(e){return Mx(mp)(OA(mp)(n))(e)}},conj:UA,disj:NA,not:FA},Vt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),kA=function(n){return n.value1},dm={map:function(n){return function(e){return new Vt(e.value0,n(e.value1))}}},Ax=function(n){return n.value0},BA=function(n){var e=Ur(n);return{apply:function(t){return function(i){return new Vt(e(t.value0)(i.value0),t.value1(i.value1))}},Functor0:function(){return dm}}},HA=function(n){var e=BA(n.Semigroup0());return{pure:Vt.create(Ts(n)),Apply0:function(){return e}}},Tx=function(n){return n.lift},VA=function(n){return n.tell},GA={liftEffect:vr(gr)},cf=function(n){return n.liftEffect},WA=Nt(va),bx=function(n){return n},hm=function(n){return n},Cx={lift:function(n){var e=mn(n.Bind1()),t=Rt(n.Applicative0());return function(i){return e(i)(function(a){return t(new mt(a))})}}},$A=Tx(Cx),XA=function(n){return function(e){return n(e)}},Rx=function(n){var e=Nt(n);return{map:function(t){return XA(e(WA(t)))}}},pm=function(n){return{Applicative0:function(){return Ro(n)},Bind1:function(){return Xl(n)}}},Xl=function(n){var e=mn(n.Bind1()),t=Rt(n.Applicative0());return{bind:function(i){return function(a){return e(i)(Vl(function(s){return t(ct.create(s))})(function(s){var c=a(s);return c}))}},Apply0:function(){return Lx(n)}}},Lx=function(n){var e=Rx(n.Bind1().Apply0().Functor0());return{apply:um(pm(n)),Functor0:function(){return e}}},Ro=function(n){return{pure:(function(){var e=Rt(n.Applicative0());return function(t){return bx(e(mt.create(t)))}})(),Apply0:function(){return Lx(n)}}},mm=function(n){var e=n.Monad0(),t=pm(e);return{liftEffect:(function(){var i=$A(e),a=cf(n);return function(s){return i(a(s))}})(),Monad0:function(){return t}}},ff=function(n){var e=pm(n);return{throwError:(function(){var t=Rt(n.Applicative0());return function(i){return bx(t(ct.create(i)))}})(),Monad0:function(){return e}}},vm=function(n){var e=mn(n.Bind1()),t=Rt(n.Applicative0()),i=ff(n);return{catchError:function(a){return function(s){return e(a)(Vl(function(c){var u=s(c);return u})(function(c){return t(mt.create(c))}))}},MonadThrow0:function(){return i}}},jA=function(n){var e=Ur(n);return function(t){var i=t.Bind1(),a=mn(i),s=Rt(t.Applicative0()),c=Rx(i.Apply0().Functor0());return{alt:function(u){return function(d){return a(u)(function(h){if(h instanceof mt)return s(new mt(h.value0));if(h instanceof ct)return a(d)(function(p){if(p instanceof mt)return s(new mt(p.value0));if(p instanceof ct)return s(new ct(e(h.value0)(p.value0)));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): "+[p.constructor.name])});throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): "+[h.constructor.name])})}},Functor0:function(){return c}}}},Px=function(){return $l},gm=Px(),YA=function(){return gm},jl=function(){return gm},qA=function(){return function(){return function(){return function(){return function(n){return gm}}}}},KA=jl(),_m=function(n){return KA(hm(n))},ZA=vr(gr),JA=function(n){return n.bimap},Dx=function(n){var e=JA(n);return function(t){return e(t)(ZA)}},Ix={bimap:function(n){return function(e){return function(t){if(t instanceof ct)return new ct(n(t.value0));if(t instanceof mt)return new mt(e(t.value0));throw new Error("Failed pattern match at Data.Bifunctor (line 38, column 1 - line 40, column 36): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}}},QA=Nt(dm),df=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Ux=function(n){var e=Nt(n);return{dimap:function(t){return function(i){return function(a){return new df((function(){var s=e(i);return function(c){return s(a.value0(c))}})(),(function(){var s=QA(i);return function(c){return s(a.value1(t(c)))}})())}}}}},Kt=function(n){return function(e){return Ax(n.value1(e))}},Rn=function(n){return n.value0},hf=function(n){return function(e){return new df(n,function(t){return new Vt(e(t),t)})}},eT=function(n){return function(e){return new df(n,function(t){return new Vt(e(t),t)})}};function ym(n){return n}function Nx(n){return JSON.stringify(n)}function _h(n){return Object.prototype.toString.call(n)==="[object Array]"}function pf(n,e,t,i,a,s,c){return c==null?n():typeof c=="boolean"?e(c):typeof c=="number"?t(c):typeof c=="string"?i(c):Object.prototype.toString.call(c)==="[object Array]"?a(c):s(c)}function vp(n,e,t,i,a){if(i==null)return a==null?n:t;if(typeof i=="boolean")return typeof a=="boolean"?i===a?n:i===!1?t:e:a==null?e:t;if(typeof i=="number")return typeof a=="number"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"?e:t;if(typeof i=="string")return typeof a=="string"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"||typeof a=="number"?e:t;if(_h(i))if(_h(a)){for(var s=0;s<Math.min(i.length,a.length);s++){var c=vp(n,e,t,i[s],a[s]);if(c!==n)return c}return i.length===a.length?n:i.length<a.length?t:e}else return a==null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"?e:t;else{if(a==null)return e;if(typeof a=="boolean")return e;if(typeof a=="number")return e;if(typeof a=="string")return e;if(_h(a))return e;var u=Object.keys(i),d=Object.keys(a);if(u.length<d.length)return t;if(u.length>d.length)return e;for(var h=u.concat(d).sort(),p=0;p<h.length;p++){var v=h[p];if(i[v]===void 0)return t;if(a[v]===void 0)return e;var g=vp(n,e,t,i[v],a[v]);if(g!==n)return g}return n}}const tT={};function nT(n){return n()}function rT(n,e,t,i){return t in i?e(i[t]):n}const iT=(function(){function n(a,s){this.head=a,this.tail=s}var e={};function t(a){return function(s){return new n(a,s)}}function i(a){for(var s=[],c=0,u=a;u!==e;)s[c++]=u.head,u=u.tail;return s}return function(a,s){return i(a(t)(e)(s))}})(),Fx=function(n){return n.length},oT=function(n,e,t,i){return i<0||i>=t.length?e:n(t[i])},aT=function(n,e,t){return t.slice(n,e)};function sT(n){return n}const lT=sT;function uT(n){return n.slice()}const cT=uT,fT=function(n,e){return e.push(n)},Ox=function(e){return function(t){return function(){return e(t)}}},dT=function(e){return function(t){return function(i){return function(){return e(t,i)}}}};var hT=Ox(lT),pT=Ox(cT),mT=function(n){return function(e){return function(){var i=pT(e)();return n(i)(),hT(i)()}}},vT=dT(fT);const gT=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=a-1;s>=0;s--)i=n(t[s])(i);return i}}},_T=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=0;s<a;s++)i=n(i)(t[s]);return i}}};var yT=function(n){return n.empty},xT={append:function(n){return function(e){return n instanceof gt?n:e}}},ST=(function(){return{mempty:bt.value,Semigroup0:function(){return xT}}})(),ET=function(n){return n},wT=function(n){var e=Mx(n);return{append:function(t){return function(i){return e(t)(i)}}}},MT=function(n){var e=wT(n);return{mempty:zA(n),Semigroup0:function(){return e}}},AT=jl(),TT=qA()()()(),mf=function(n){return n.foldr},xm=function(n){return n.foldl},bT=function(n){var e=mf(n);return function(t){var i=Ur(t.Semigroup0()),a=Ts(t);return function(s){return e(function(c){return function(u){return i(s(c))(u)}})(a)}}},Ui={foldr:gT,foldl:_T,foldMap:function(n){return bT(Ui)(n)}},zx=function(n){return n.foldMap},CT=function(n){var e=zx(n)(ST);return function(t){var i=fi(t);return function(a){var s=e(function(c){var u=i(a)(c.value0);return u?new gt(c.value1):bt.value});return function(c){return AT(s(c))}}}},RT=function(n){var e=zx(n);return function(t){return TT(ET)(e(MT(t)))}};const LT=function(n){return function(e){return function(t){return n(e,t)}}},Sm=function(n){return function(e){return function(t){return function(i){return n(e,t,i)}}}},kx=function(n){return function(e){return function(t){return function(i){return function(a){return n(e,t,i,a)}}}}},PT=function(n){return function(e){for(var t=e.length,i=Array(t),a=0;a<t;a++)i[a]=n(a)(e[a]);return i}};var Bx=function(n){return n.mapWithIndex},Hx={mapWithIndex:PT,Functor0:function(){return kl}};const DT=(function(){function n(a){return[a]}function e(a){return function(s){return[a,s]}}function t(a){return function(s){return function(c){return[a,s,c]}}}function i(a){return function(s){return a.concat(s)}}return function(a){return function(s){return function(c){return function(u){return function(d){function h(p,v){switch(v-p){case 0:return c([]);case 1:return s(n)(u(d[p]));case 2:return a(s(e)(u(d[p])))(u(d[p+1]));case 3:return a(a(s(t)(u(d[p])))(u(d[p+1])))(u(d[p+2]));default:var g=p+Math.floor((v-p)/4)*2;return a(s(i)(h(p,g)))(h(g,v))}}return h(0,d.length)}}}}}})();var IT=vr(gr),Em=function(n){return n.traverse},UT=function(n){var e=Em(n);return function(t){return e(t)(IT)}},vf={traverse:function(n){var e=n.Apply0();return DT(As(e))(Nt(e.Functor0()))(Rt(n))},sequence:function(n){return UT(vf)(n)},Functor0:function(){return kl},Foldable1:function(){return Ui}},NT=function(n){return n.sequence};const FT=function(n){return function(e){return function(t){return function(i){return function(a){return function(s){for(var c=[],u=s;;){var d=a(u);if(n(d))return c;var h=e(d);c.push(t(h)),u=i(h)}}}}}}};var OT=mA(),zT=function(n){return n.unfoldr},kT={unfoldr:FT(hA)(OT)(Ax)(kA)},BT=Ur(Bl),HT=function(n){return function(e){return mT(vT(e))(n)()}},VT=Sm(aT),GT=function(n){return[n]},WT=(function(){return kx(oT)(gt.create)(bt.value)})(),$T=function(n){return WT(n)(0)},XT=function(n){return LT(iT)(mf(n))},jT=function(n){return function(e){return VT(n)(Fx(e))(e)}},YT=function(n){return function(e){return BT([n])(e)}},qT=si(mn(z1)),KT=function(n){return qT((function(){var e=ma([])(GT);return function(t){return e(n(t))}})())},ZT=KT(vr(gr)),JT=mf(Ui),U_=Bx(Hx),QT=xm(Ui),eb=function(n){return n.foldrWithIndex},tb=function(n){var e=eb(n);return function(t){var i=Ur(t.Semigroup0()),a=Ts(t);return function(s){return e(function(c){return function(u){return function(d){return i(s(c)(u))(d)}}})(a)}}},Vx={foldrWithIndex:function(n){return function(e){var t=JT(function(a){return function(s){return n(a.value0)(a.value1)(s)}})(e),i=U_(Vt.create);return function(a){return t(i(a))}}},foldlWithIndex:function(n){return function(e){var t=QT(function(a){return function(s){return n(s.value0)(a)(s.value1)}})(e),i=U_(Vt.create);return function(a){return t(i(a))}}},foldMapWithIndex:function(n){return tb(Vx)(n)},Foldable0:function(){return Ui}},nb=function(n){var e=NT(n.Traversable2()),t=Bx(n.FunctorWithIndex0());return function(i){var a=e(i);return function(s){var c=t(s);return function(u){return a(c(u))}}}},rb=function(n){return n.traverseWithIndex},Gx={traverseWithIndex:function(n){return nb(Gx)(n)},FunctorWithIndex0:function(){return Hx},FoldableWithIndex1:function(){return Vx},Traversable2:function(){return vf}};const ib=function(){return{}};function ob(n){return function(e){return function(t){return function(){return t[n]=e,t}}}}var ab=rx(IA),vs=(function(){return kx(rT)(bt.value)(gt.create)})(),Wx=function(n){var e=XT(n);return function(t){return nT(function(){var a=ib();return DA(e(t))(function(s){return ab(ob(s.value0)(s.value1)(a))})(),a})}},sb=fi(oA),lb=function(n){return function(e){return function(t){return t(n)(e)}}},gf=(function(){return lb(bt.value)(gt.create)})(),ub=tT,cb={compare:function(n){return function(e){return vp(Dl.value,Zc.value,Kc.value,n,e)}}},fb={eq:function(n){return function(e){return sb(aA(cb)(n)(e))(Dl.value)}}},db=function(n){return function(e){return function(t){return pf(kt(n),kt(n),kt(n),e,kt(n),kt(n),t)}}},hb=gf(db),pb=function(n){return function(e){return function(t){return pf(kt(n),kt(n),kt(n),kt(n),kt(n),e,t)}}},mb=gf(pb),vb=function(n){return function(e){return function(t){return pf(kt(n),kt(n),e,kt(n),kt(n),kt(n),t)}}},gb=gf(vb),_b=function(n){return function(e){return function(t){return pf(kt(n),kt(n),kt(n),kt(n),e,kt(n),t)}}},yb=gf(_b);const xb=function(n){return function(e){return function(t){return(t|0)===t?n(t):e}}},sa=function(n){return n},Sb=isFinite,Eb=Math.trunc?Math.trunc:function(n){return n<0?Math.ceil(n):Math.floor(n)};var N_=am(ux),F_=uf(ux),$x=(function(){return xb(gt.create)(bt.value)})(),wb=function(n){return Sb(n)?n>=sa(N_)?N_:n<=sa(F_)?F_:fx(0)($x(n)):0},O_=function(n){return wb(Eb(n))},Xx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Mb=function(n){var e=yT(n);return function(t){return new Xx(t,e)}},$r=(function(){function n(){}return n.value=new n,n})(),Qt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Ab=function(n){return n},Tb=function(n){return new Qt(n.value0,n.value1)},bb=function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof Qt&&h.value1 instanceof Qt&&h.value1.value1 instanceof Qt){a=new Qt(h,d),i=h.value1.value1.value1;return}var p=function(g){return g instanceof Qt&&g.value1 instanceof Qt&&g.value1.value1 instanceof $r?new Qt(n(g.value0),new Qt(n(g.value1.value0),$r.value)):g instanceof Qt&&g.value1 instanceof $r?new Qt(n(g.value0),$r.value):$r.value},v=function(g){return function(S){var E=g,w=!1,x;function _(C,M){if(C instanceof Qt&&C.value0 instanceof Qt&&C.value0.value1 instanceof Qt&&C.value0.value1.value1 instanceof Qt){E=C.value1,S=new Qt(n(C.value0.value0),new Qt(n(C.value0.value1.value0),new Qt(n(C.value0.value1.value1.value0),M)));return}return w=!0,M}for(;!w;)x=_(E,S);return x}};return s=!0,v(d)(p(h))}for(;!s;)c=u(a,i);return c}};return e($r.value)},Cb={map:bb},wm={foldr:function(n){return function(e){var t=(function(){var a=function(s){return function(c){var u=s,d=!1,h;function p(v,g){if(g instanceof $r)return d=!0,v;if(g instanceof Qt){u=new Qt(g.value0,v),c=g.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[v.constructor.name,g.constructor.name])}for(;!d;)h=p(u,c);return h}};return a($r.value)})(),i=xm(wm)(si(n))(e);return function(a){return i(t(a))}}},foldl:function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof $r)return s=!0,d;if(h instanceof Qt){a=n(d)(h.value0),i=h.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}},Rb=mf(wm),jx={append:function(n){return function(e){return Rb(Qt.create)(e)(n)}}},Yx=Ur(jx),Lb=(function(){return{mempty:$r.value,Semigroup0:function(){return jx}}})(),Pb={append:function(n){return function(e){return new Xx(n.value0,Yx(n.value1)(Tb(e)))}}},Db={alt:Yx,Functor0:function(){return Cb}},Ib=(function(){return{empty:$r.value,Alt0:function(){return Db}}})(),Ub=typeof Array.from=="function",Nb=typeof Symbol<"u"&&Symbol!=null&&typeof Symbol.iterator<"u"&&typeof String.prototype[Symbol.iterator]=="function",Fb=typeof String.prototype.fromCodePoint=="function",Ob=typeof String.prototype.codePointAt=="function";const zb=function(n){return Ob?function(e){return e.codePointAt(0)}:n},kb=function(n){return Fb?String.fromCodePoint:n},Bb=function(n){return function(e){return Nb?function(t){for(var i="",a=t[Symbol.iterator](),s=0;s<e;++s){var c=a.next();if(c.done)return i;i+=c.value}return i}:n(e)}},Hb=function(n){return function(e){return Ub?function(t){return Array.from(t,e)}:n}};function la(n){return n.charCodeAt(0)}function Vb(n){return String.fromCharCode(n)}var qx=uf(Il),Kx=am(Il),Gb=function(n){return n.toEnum},Zx=function(n){return n.fromEnum},Wb=function(n){var e=Gb(n),t=Zx(n),i=uf(n.Bounded0());return function(a){return function(s){return function(c){var u=e(c);if(u instanceof gt)return u.value0;if(u instanceof bt){var d=c<t(i);return d?a:s}throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): "+[u.constructor.name])}}}},$b=function(n){return function(e){return function(t){return n(e(t)+1|0)}}},Xb=function(n){return function(e){return function(t){return n(e(t)-1|0)}}},gp=function(n){return n>=la(qx)&&n<=la(Kx)?new gt(Vb(n)):bt.value},jb={succ:$b(gp)(la),pred:Xb(gp)(la),Ord0:function(){return lx}},Jx=(function(){return{cardinality:la(Kx)-la(qx)|0,toEnum:gp,fromEnum:la,Bounded0:function(){return Il},Enum1:function(){return jb}}})();const Yb=function(n){return n},Mm=function(n){return n.length},qb=function(n){return function(e){return function(t){return function(i){var a=i.indexOf(t);return a===-1?e:n(a)}}}},Kb=function(n){return function(e){return function(t){return function(i){var a=i.lastIndexOf(t);return a===-1?e:n(a)}}}},Qx=function(n){return function(e){return e.substr(0,n)}},_p=function(n){return function(e){return e.substring(n)}},wl=function(n){return function(e){if(n>=0&&n<e.length)return e.charAt(n);throw new Error("Data.String.Unsafe.charAt: Invalid index.")}};var Zb=(function(){return Kb(gt.create)(bt.value)})(),Jb=(function(){return qb(gt.create)(bt.value)})();const eS=function(n){return function(e){return e.split(n)}},Qb=function(n){return function(e){return e.join(n)}};var Ml=Zx(Jx),tS=Nt(Hl),eC=zT(kT),tC=wA(mx),nC=EA(mx),nS=function(n){return function(e){return(((n-55296|0)*1024|0)+(e-56320|0)|0)+65536|0}},rS=function(n){return 56320<=n&&n<=57343},iS=function(n){return 55296<=n&&n<=56319},oS=function(n){var e=Mm(n);if(e===0)return bt.value;if(e===1)return new gt({head:Ml(wl(0)(n)),tail:""});var t=Ml(wl(1)(n)),i=Ml(wl(0)(n)),a=iS(i)&&rS(t);return a?new gt({head:nS(i)(t),tail:_p(2)(n)}):new gt({head:i,tail:_p(1)(n)})},rC=function(n){return tS(function(e){return new Vt(e.head,e.tail)})(oS(n))},iC=function(n){return eC(rC)(n)},oC=function(n){var e=Ml(wl(0)(n)),t=iS(e)&&Mm(n)>1;if(t){var i=Ml(wl(1)(n)),a=rS(i);return a?nS(e)(i):e}return e},aC=zb(oC),sC=Hb(iC)(aC),lC=function(n){return Fx(sC(n))},uC=function(n){return function(e){return tS(function(t){return lC(Qx(t)(e))})(Zb(n)(e))}},yh=(function(){var n=Wb(Jx)(uf(Il))(am(Il));return function(e){return Yb(n(e))}})(),cC=function(n){if(n<=65535)return yh(n);var e=tC(n-65536|0)(1024)+55296|0,t=nC(n-65536|0)(1024)+56320|0;return yh(e)+yh(t)},fC=kb(cC),aS=function(n){return function(e){if(n<1)return"";var t=oS(e);return t instanceof gt?fC(t.value0.head)+aS(n-1|0)(t.value0.tail):e}},dC=Bb(aS),hC=pa(sm),z_=mn(Gl),Am=Dx(Ix),Tm=Rt(ga),sS=nm(Gl),pC=Wx(wm),mC=ox(hx),vC=rb(Gx)(ga),gC=Nt(kl),li=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_C=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),lS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),uS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),bm=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),cS=(function(){function n(){}return n.value=new n,n})(),yC=function(n){var e=Ir(n);return function(){return function(t){return function(i){return function(a){var s=function(d){return function(h){return new Qt(new Vt(d,Kt(i)(rm(d)(h))),Kt(a)(h))}},c=function(d){return function(h){return z_(Rn(a)(h))(function(p){return z_(Am(uS.create(d))((function(){var v=vs(d)(h);if(v instanceof gt)return Rn(i)(v.value0);if(v instanceof bt)return new ct(cS.value);throw new Error("Failed pattern match at Data.Codec.Argonaut (line 264, column 29 - line 266, column 34): "+[v.constructor.name])})()))(function(v){return Tm(im(d)(v)(p))})})}},u=e(t);return eT(c(u))(s(u))}}}}},xC=(function(){return new df(kt(Tm({})),Rt(HA(Lb)))})(),SC=function(n){var e=function(t){if(t instanceof li)return"  Expected value of type '"+(t.value0+"'.");if(t instanceof _C)return"  Unexpected value "+(Nx(t.value0)+".");if(t instanceof lS)return"  At array index "+(hC(t.value0)+(`:
`+e(t.value1)));if(t instanceof uS)return"  At object key "+(t.value0+(`:
`+e(t.value1)));if(t instanceof bm)return"  Under '"+(t.value0+(`':
`+e(t.value1)));if(t instanceof cS)return"  No value was found.";throw new Error("Failed pattern match at Data.Codec.Argonaut (line 90, column 8 - line 96, column 43): "+[t.constructor.name])};return`An error occurred while decoding a JSON value:
`+e(n)},_f=function(n){return function(e){return hf((function(){var t=ma(new ct(new li(n)))(Tm);return function(i){return t(e(i))}})())}},ir=_f("String")(hb)(ym),Eo=_f("Object")(mb)(ym),EC=function(n){return function(e){return hf(function(t){return Am(bm.create(n))(sS(Rn(e))(Rn(Eo)(t)))})(function(t){return Kt(Eo)(pC(Kt(e)(t)))})}},_o=_f("Array")(yb)(ym),po=_f("Int")(mC($x)(gb))(function(n){return sa(n)}),yf=function(n){return hf(function(e){return sS(vC(function(t){return function(i){return Am(lS.create(t))(Rn(n)(i))}}))(Rn(_o)(e))})(function(e){return gC(Kt(n))(e)})};function wC(n,e){var t={};for(var i in e)({}).hasOwnProperty.call(e,i)&&(t[i]=e[i]);for(var a in n)({}).hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}var MC=function(){return function(n){return function(e){return wC(n,e)}}},AC=function(n){var e=Ir(n);return function(){return function(){return function(t){return function(i){return function(a){return im(e(t))(i)(a)}}}}}},Cm=function(n){var e=Ir(n);return function(){return function(){return function(t){return function(i){return function(a){return im(e(t))(i)(a)}}}}}},Lo=function(n){var e=Ir(n);return function(){return function(t){return function(i){return rm(e(t))(i)}}}},TC=function(n){var e=Ir(n);return function(){return function(){return function(t){return function(i){return H1(e(t))(i)}}}}},Rm={rowListCodec:function(n){return function(e){return xC}}},fS=function(n){return n.rowListCodec},ii=function(n){var e=fS(n);return function(){return function(){return function(t){var i=Lo(t)(),a=yC(t)();return{rowListCodec:function(s){return function(c){var u=e(Mt.value)(c),d=i(Mt.value)(c);return a(Mt.value)(d)(u)}}}}}}},bC=function(){return function(n){return fS(n)(Mt.value)}},CC=bC(),dS=function(){return function(n){var e=CC(n);return function(t){return function(i){return EC(t)(e(i))}}}},na={dimap:function(n){return function(e){return function(t){return function(i){return e(t(n(i)))}}}}},xf=function(n){return n.dimap},Ni={first:function(n){return function(e){return new Vt(n(e.value0),e.value1)}},second:Nt(dm),Profunctor0:function(){return na}},RC=function(n){return n.first},k_=Px(),LC=function(n){return function(e){return function(t){var i=xf(t);return function(a){return i(n)(e)(a)}}}},PC=function(){return function(){return function(n){return LC(k_)(k_)(n)}}},DC=PC()(),IC=function(){return function(){return function(n){return DC(n)}}},UC=IC()(),hS=function(){return function(n){return function(e){return UC(e)}}},pS=function(n){return n},ho=function(n){return function(e){return pS(n)(kt(e))}},Rr=(function(){var n={},e="Pure",t="Throw",i="Catch",a="Sync",s="Async",c="Bind",u="Bracket",d="Fork",h="Sequential",p="Map",v="Apply",g="Alt",S="Cons",E="Resume",w="Release",x="Finalizer",_="Finalized",C="Forked";function M(L,z,W,q){this.tag=L,this._1=z,this._2=W,this._3=q}function R(L){var z=function(W,q,ee){return new M(L,W,q,ee)};return z.tag=L,z}function I(L){return new M(e,void 0)}function O(L){try{L()}catch(z){setTimeout(function(){throw z},0)}}function F(L,z,W){try{return z(W())}catch(q){return L(q)}}function de(L,z,W){try{return z(W)()}catch(q){return W(L(q))(),I}}var b=(function(){var L=1024,z=0,W=0,q=new Array(L),ee=!1;function Z(){var _e;for(ee=!0;z!==0;)z--,_e=q[W],q[W]=void 0,W=(W+1)%L,_e();ee=!1}return{isDraining:function(){return ee},enqueue:function(_e){var ve;z===L&&(ve=ee,Z(),ee=ve),q[(W+z)%L]=_e,z++,ee||Z()}}})();function N(L){var z={},W=0,q=0;return{register:function(ee){var Z=W++;ee.onComplete({rethrow:!0,handler:function(_e){return function(){q--,delete z[Z]}}})(),z[Z]=ee,q++},isEmpty:function(){return q===0},killAll:function(ee,Z){return function(){if(q===0)return Z();var _e=0,ve={};function be(ze){ve[ze]=z[ze].kill(ee,function(j){return function(){delete ve[ze],_e--,L.isLeft(j)&&L.fromLeft(j)&&setTimeout(function(){throw L.fromLeft(j)},0),_e===0&&Z()}})()}for(var Oe in z)z.hasOwnProperty(Oe)&&(_e++,be(Oe));return z={},W=0,q=0,function(ze){return new M(a,function(){for(var j in ve)ve.hasOwnProperty(j)&&ve[j]()})}}}}}var ae=0,ne=1,pe=2,H=3,Q=4,se=5,re=6;function X(L,z,W){var q=0,ee=ae,Z=W,_e=null,ve=null,be=null,Oe=null,ze=null,j=0,Dt=0,He=null,le=!0;function ue(we){for(var Ie,Ze,D;;)switch(Ie=null,Ze=null,D=null,ee){case pe:ee=ne;try{Z=be(Z),Oe===null?be=null:(be=Oe._1,Oe=Oe._2)}catch(Y){ee=se,_e=L.left(Y),Z=null}break;case H:L.isLeft(Z)?(ee=se,_e=Z,Z=null):be===null?ee=se:(ee=pe,Z=L.fromRight(Z));break;case ne:switch(Z.tag){case c:be&&(Oe=new M(S,be,Oe)),be=Z._2,ee=ne,Z=Z._1;break;case e:be===null?(ee=se,Z=L.right(Z._1)):(ee=pe,Z=Z._1);break;case a:ee=H,Z=F(L.left,L.right,Z._1);break;case s:ee=Q,Z=de(L.left,Z._1,function(Y){return function(){q===we&&(q++,b.enqueue(function(){q===we+1&&(ee=H,Z=Y,ue(q))}))}});return;case t:ee=se,_e=L.left(Z._1),Z=null;break;case i:be===null?ze=new M(S,Z,ze,ve):ze=new M(S,Z,new M(S,new M(E,be,Oe),ze,ve),ve),be=null,Oe=null,ee=ne,Z=Z._1;break;case u:j++,be===null?ze=new M(S,Z,ze,ve):ze=new M(S,Z,new M(S,new M(E,be,Oe),ze,ve),ve),be=null,Oe=null,ee=ne,Z=Z._1;break;case d:ee=H,Ie=X(L,z,Z._2),z&&z.register(Ie),Z._1&&Ie.run(),Z=L.right(Ie);break;case h:ee=ne,Z=$(L,z,Z._1);break}break;case se:if(be=null,Oe=null,ze===null)ee=re,Z=ve||_e||Z;else switch(Ie=ze._3,D=ze._1,ze=ze._2,D.tag){case i:ve&&ve!==Ie&&j===0?ee=se:_e&&(ee=ne,Z=D._2(L.fromLeft(_e)),_e=null);break;case E:ve&&ve!==Ie&&j===0||_e?ee=se:(be=D._1,Oe=D._2,ee=pe,Z=L.fromRight(Z));break;case u:j--,_e===null&&(Ze=L.fromRight(Z),ze=new M(S,new M(w,D._2,Ze),ze,Ie),(ve===Ie||j>0)&&(ee=ne,Z=D._3(Ze)));break;case w:ze=new M(S,new M(_,Z,_e),ze,ve),ee=ne,ve&&ve!==Ie&&j===0?Z=D._1.killed(L.fromLeft(ve))(D._2):_e?Z=D._1.failed(L.fromLeft(_e))(D._2):Z=D._1.completed(L.fromRight(Z))(D._2),_e=null,j++;break;case x:j++,ze=new M(S,new M(_,Z,_e),ze,ve),ee=ne,Z=D._1;break;case _:j--,ee=se,Z=D._1,_e=D._2;break}break;case re:for(var T in He)He.hasOwnProperty(T)&&(le=le&&He[T].rethrow,O(He[T].handler(Z)));He=null,ve&&_e?setTimeout(function(){throw L.fromLeft(_e)},0):L.isLeft(Z)&&le&&setTimeout(function(){if(le)throw L.fromLeft(Z)},0);return;case ae:ee=ne;break;case Q:return}}function xe(we){return function(){if(ee===re)return le=le&&we.rethrow,we.handler(Z)(),function(){};var Ie=Dt++;return He=He||{},He[Ie]=we,function(){He!==null&&delete He[Ie]}}}function ge(we,Ie){return function(){if(ee===re)return Ie(L.right(void 0))(),function(){};var Ze=xe({rethrow:!1,handler:function(){return Ie(L.right(void 0))}})();switch(ee){case ae:ve=L.left(we),ee=re,Z=ve,ue(q);break;case Q:ve===null&&(ve=L.left(we)),j===0&&(ee===Q&&(ze=new M(S,new M(x,Z(we)),ze,ve)),ee=se,Z=null,_e=null,ue(++q));break;default:ve===null&&(ve=L.left(we)),j===0&&(ee=se,Z=null,_e=null)}return Ze}}function Me(we){return function(){var Ie=xe({rethrow:!1,handler:we})();return ee===ae&&ue(q),Ie}}return{kill:ge,join:Me,onComplete:xe,isSuspended:function(){return ee===ae},run:function(){ee===ae&&(b.isDraining()?ue(q):b.enqueue(function(){ue(q)}))}}}function ie(L,z,W,q){var ee=0,Z={},_e=0,ve={},be=new Error("[ParAff] Early exit"),Oe=null,ze=n;function j(xe,ge,Me){var we=ge,Ie=null,Ze=null,D=0,T={},Y,Ae;e:for(;;)switch(Y=null,we.tag){case C:if(we._3===n&&(Y=Z[we._1],T[D++]=Y.kill(xe,function(ye){return function(){D--,D===0&&Me(ye)()}})),Ie===null)break e;we=Ie._2,Ze===null?Ie=null:(Ie=Ze._1,Ze=Ze._2);break;case p:we=we._2;break;case v:case g:Ie&&(Ze=new M(S,Ie,Ze)),Ie=we,we=we._1;break}if(D===0)Me(L.right(void 0))();else for(Ae=0,Y=D;Ae<Y;Ae++)T[Ae]=T[Ae]();return T}function Dt(xe,ge,Me){var we,Ie,Ze,D,T,Y;for(L.isLeft(xe)?(we=xe,Ie=null):(Ie=xe,we=null);;){if(Ze=null,D=null,T=null,Y=null,Oe!==null)return;if(ge===null){q(we||Ie)();return}if(ge._3!==n)return;switch(ge.tag){case p:we===null?(ge._3=L.right(ge._1(L.fromRight(Ie))),Ie=ge._3):ge._3=we;break;case v:if(Ze=ge._1._3,D=ge._2._3,we){if(ge._3=we,T=!0,Y=_e++,ve[Y]=j(be,we===Ze?ge._2:ge._1,function(){return function(){delete ve[Y],T?T=!1:Me===null?Dt(we,null,null):Dt(we,Me._1,Me._2)}}),T){T=!1;return}}else{if(Ze===n||D===n)return;Ie=L.right(L.fromRight(Ze)(L.fromRight(D))),ge._3=Ie}break;case g:if(Ze=ge._1._3,D=ge._2._3,Ze===n&&L.isLeft(D)||D===n&&L.isLeft(Ze))return;if(Ze!==n&&L.isLeft(Ze)&&D!==n&&L.isLeft(D))we=Ie===Ze?D:Ze,Ie=null,ge._3=we;else if(ge._3=Ie,T=!0,Y=_e++,ve[Y]=j(be,Ie===Ze?ge._2:ge._1,function(){return function(){delete ve[Y],T?T=!1:Me===null?Dt(Ie,null,null):Dt(Ie,Me._1,Me._2)}}),T){T=!1;return}break}Me===null?ge=null:(ge=Me._1,Me=Me._2)}}function He(xe){return function(ge){return function(){delete Z[xe._1],xe._3=ge,Dt(ge,xe._2._1,xe._2._2)}}}function le(){var xe=ne,ge=W,Me=null,we=null,Ie,Ze;e:for(;;)switch(Ie=null,Ze=null,xe){case ne:switch(ge.tag){case p:Me&&(we=new M(S,Me,we)),Me=new M(p,ge._1,n,n),ge=ge._2;break;case v:Me&&(we=new M(S,Me,we)),Me=new M(v,n,ge._2,n),ge=ge._1;break;case g:Me&&(we=new M(S,Me,we)),Me=new M(g,n,ge._2,n),ge=ge._1;break;default:Ze=ee++,xe=se,Ie=ge,ge=new M(C,Ze,new M(S,Me,we),n),Ie=X(L,z,Ie),Ie.onComplete({rethrow:!1,handler:He(ge)})(),Z[Ze]=Ie,z&&z.register(Ie)}break;case se:if(Me===null)break e;Me._1===n?(Me._1=ge,xe=ne,ge=Me._2,Me._2=n):(Me._2=ge,ge=Me,we===null?Me=null:(Me=we._1,we=we._2))}for(ze=ge,Ze=0;Ze<ee;Ze++)Z[Ze].run()}function ue(xe,ge){Oe=L.left(xe);var Me;for(var we in ve)if(ve.hasOwnProperty(we)){Me=ve[we];for(we in Me)Me.hasOwnProperty(we)&&Me[we]()}ve=null;var Ie=j(xe,ze,ge);return function(Ze){return new M(s,function(D){return function(){for(var T in Ie)Ie.hasOwnProperty(T)&&Ie[T]();return I}})}}return le(),function(xe){return new M(s,function(ge){return function(){return ue(xe,ge)}})}}function $(L,z,W){return new M(s,function(q){return function(){return ie(L,z,W,q)}})}return M.EMPTY=n,M.Pure=R(e),M.Throw=R(t),M.Catch=R(i),M.Sync=R(a),M.Async=R(s),M.Bind=R(c),M.Bracket=R(u),M.Fork=R(d),M.Seq=R(h),M.ParMap=R(p),M.ParApply=R(v),M.ParAlt=R(g),M.Fiber=X,M.Supervisor=N,M.Scheduler=b,M.nonCanceler=I,M})();const NC=Rr.Pure,FC=Rr.Throw;function OC(n){return function(e){return Rr.Catch(n,e)}}function zC(n){return function(e){return e.tag===Rr.Pure.tag?Rr.Pure(n(e._1)):Rr.Bind(e,function(t){return Rr.Pure(n(t))})}}function kC(n){return function(e){return Rr.Bind(n,e)}}const BC=Rr.Sync,B_=Rr.Async;function HC(n,e){return function(){return Rr.Fiber(n,null,e)}}Rr.Seq;var VC=function(n){return n},GC=function(n){return n},WC=function(n){return function(e){return n(e)}},$C=function(n){var e=Nt(n);return{map:function(t){return WC(e(function(i){return new Vt(t(i.value0),i.value1)}))}}},mS=function(n){var e=Ur(n);return function(t){var i=As(t),a=t.Functor0(),s=Nt(a),c=$C(a);return{apply:function(u){return function(d){var h=function(p){return function(v){return new Vt(p.value0(v.value0),e(p.value1)(v.value1))}};return i(s(h)(u))(d)}},Functor0:function(){return c}}}},vS=function(n){var e=Ur(n),t=mS(n);return function(i){var a=mn(i),s=i.Apply0(),c=Nt(s.Functor0()),u=t(s);return{bind:function(d){return function(h){return a(d)(function(p){var v=h(p.value0);return c(function(g){return new Vt(g.value0,e(p.value1)(g.value1))})(v)})}},Apply0:function(){return u}}}},gS=function(n){var e=Ts(n),t=mS(n.Semigroup0());return function(i){var a=Rt(i),s=t(i.Apply0());return{pure:function(c){return a(new Vt(c,e))},Apply0:function(){return s}}}},XC=function(n){var e=gS(n),t=vS(n.Semigroup0());return function(i){var a=e(i.Applicative0()),s=t(i.Bind1());return{Applicative0:function(){return a},Bind1:function(){return s}}}},jC=function(n){var e=n.Semigroup0(),t=XC(n);return function(i){var a=t(i);return{tell:(function(){var s=Rt(i.Applicative0()),c=Vt.create(kn);return function(u){return VC(s(c(u)))}})(),Semigroup0:function(){return e},Monad1:function(){return a}}}};const YC=function(n){return n()},qC=function(n){throw new Error(n)};var KC=function(){return qC},ZC=KC(),JC=YC,H_=function(n){return JC(function(){return ZC(n)})},QC=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},eR=rx(bA),_S={map:zC},tR=(function(){var n=function(i){if(i instanceof mt)return i.value0;if(i instanceof ct)return H_("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[i.constructor.name])},e=function(i){if(i instanceof ct)return i.value0;if(i instanceof mt)return H_("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[i.constructor.name])},t=function(i){if(i instanceof ct)return!0;if(i instanceof mt)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[i.constructor.name])};return{isLeft:t,fromLeft:e,fromRight:n,left:ct.create,right:mt.create}})(),nR=function(n){return HC(tR,n)},rR=function(n){return function(){var t=nR(n)();return t.run(),t}},yS=function(n){return eR(rR(n))},sr={Applicative0:function(){return Yl},Bind1:function(){return Lm}},Lm={bind:kC,Apply0:function(){return xS(0)}},Yl={pure:NC,Apply0:function(){return xS(0)}},xS=QC("applyAff","Effect.Aff",function(){return{apply:um(sr),Functor0:function(){return _S}}}),iR=Rt(Yl),ql={liftEffect:BC,Monad0:function(){return sr}},oR={throwError:FC,Monad0:function(){return sr}},aR={catchError:OC,MonadThrow0:function(){return oR}},sR=kt(iR(kn));const lR=function(n){return function(){console.log(n)}};var Sf=function(n){var e=cf(n);return function(t){return e(lR(t))}};const SS=function(e){return function(t){return e(t)()}};function uR(n,e,t,i,a){return function(s,c){var u=n.newXHR(),d=n.fixupUrl(a.url,u);if(u.open(a.method||"GET",d,!0,a.username,a.password),a.headers)try{for(var h=0,p;(p=a.headers[h])!=null;h++)u.setRequestHeader(p.field,p.value)}catch(g){s(g)}var v=function(g){return function(){s(new Error(g))}};return u.onerror=v(t),u.ontimeout=v(e),u.onload=function(){c({status:u.status,statusText:u.statusText,headers:u.getAllResponseHeaders().split(`\r
`).filter(function(g){return g.length>0}).map(function(g){var S=g.indexOf(":");return i(g.substring(0,S))(g.substring(S+2))}),body:u.response})},u.responseType=a.responseType,u.withCredentials=a.withCredentials,u.timeout=a.timeout,u.send(a.content),function(g,S,E){try{u.abort()}catch(w){return S(w)}return E()}}}var ES="application/json",cR="application/x-www-form-urlencoded",fR=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dR=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),hR=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),pR=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mR=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),wS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),MS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),vR=function(n){return n instanceof wS?new gt(cR):n instanceof MS?new gt(ES):bt.value},V_=jl(),Pm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Dm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),AS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),gR=function(n){if(n instanceof Pm||n instanceof Dm)return V_(n.value0);if(n instanceof AS)return n.value1;throw new Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): "+[n.constructor.name])},G_=function(n){if(n instanceof Pm)return"Accept";if(n instanceof Dm)return"Content-Type";if(n instanceof AS)return n.value0;throw new Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): "+[n.constructor.name])},Im=vr(gr),TS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),bS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),CS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ef=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Um=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Nm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_R=function(n){if(n instanceof TS)return"arraybuffer";if(n instanceof bS)return"blob";if(n instanceof CS)return"document";if(n instanceof Ef||n instanceof Um)return"text";if(n instanceof Nm)return"";throw new Error("Failed pattern match at Affjax.ResponseFormat (line 44, column 3 - line 50, column 19): "+[n.constructor.name])},yR=function(n){return n instanceof Ef?new gt(ES):bt.value},xR=(function(){return new Um(Im)})(),SR=(function(){return new Ef(Im)})(),ER=(function(){return new Nm(Im)})(),wR=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})();function MR(n,e,t){try{return e(JSON.parse(t))}catch(i){return n(i.message)}}var AR=function(n){return MR(ct.create,mt.create,n)};function TR(n){return n.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function bR(n,e,t){try{return e(TR(encodeURIComponent(t)).replace(/%20/g,"+"))}catch(i){return n(i)}}function CR(n,e,t){try{return e(decodeURIComponent(t))}catch(i){return n(i)}}var xh=(function(){return Sm(bR)(kt(bt.value))(gt.create)})(),RR=(function(){return Sm(CR)(kt(bt.value))(gt.create)})(),LR=As(dx),W_=Nt(Hl),PR=Em(vf)(vA),DR=function(n){return n},IR=(function(){var n=function(i){if(i.value1 instanceof bt)return xh(i.value0);if(i.value1 instanceof gt)return LR(W_(function(a){return function(s){return a+("="+s)}})(xh(i.value0)))(xh(i.value1.value0));throw new Error("Failed pattern match at Data.FormURLEncoded (line 37, column 16 - line 39, column 114): "+[i.constructor.name])},e=W_(Qb("&")),t=PR(n);return function(i){return e(t(DR(i)))}})(),UR=(function(){function n(){}return n.value=new n,n})(),RS=(function(){function n(){}return n.value=new n,n})(),NR=(function(){function n(){}return n.value=new n,n})(),FR=(function(){function n(){}return n.value=new n,n})(),OR=(function(){function n(){}return n.value=new n,n})(),zR=(function(){function n(){}return n.value=new n,n})(),kR=(function(){function n(){}return n.value=new n,n})(),BR=(function(){function n(){}return n.value=new n,n})(),HR=(function(){function n(){}return n.value=new n,n})(),VR=(function(){function n(){}return n.value=new n,n})(),GR=(function(){function n(){}return n.value=new n,n})(),WR=(function(){function n(){}return n.value=new n,n})(),$R=(function(){function n(){}return n.value=new n,n})(),XR=(function(){function n(){}return n.value=new n,n})(),jR=(function(){function n(){}return n.value=new n,n})(),YR=(function(){function n(){}return n.value=new n,n})(),qR=function(n){return n},KR={show:function(n){if(n instanceof UR)return"OPTIONS";if(n instanceof RS)return"GET";if(n instanceof NR)return"HEAD";if(n instanceof FR)return"POST";if(n instanceof OR)return"PUT";if(n instanceof zR)return"DELETE";if(n instanceof kR)return"TRACE";if(n instanceof BR)return"CONNECT";if(n instanceof HR)return"PROPFIND";if(n instanceof VR)return"PROPPATCH";if(n instanceof GR)return"MKCOL";if(n instanceof WR)return"COPY";if(n instanceof $R)return"MOVE";if(n instanceof XR)return"LOCK";if(n instanceof jR)return"UNLOCK";if(n instanceof YR)return"PATCH";throw new Error("Failed pattern match at Data.HTTP.Method (line 43, column 1 - line 59, column 23): "+[n.constructor.name])}},ZR=Vl(pa(KR))(qR),JR=(function(){var n=Mb(Ib);return function(e){return Ab(n(e))}})(),QR=function(n){return n.value0};const eL=null;function tL(n){return n}var uc=ma(eL)(tL),nL=function(n){return B_(function(e){return function(){var i=n(function(a){return e(ct.create(a))()},function(a){return e(mt.create(a))()});return function(a){return B_(function(s){return function(){return i(a,function(u){return s(ct.create(u))()},function(u){return s(mt.create(u))()}),sR}})}}})};function $_(n){return Object.prototype.toString.call(n).slice(8,-1)}var rL=pa(uA),iL=pa(sm),LS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),PS=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),oL=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),aL=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Xo=$l,sL=$l,yp=function(n){if(n instanceof LS)return n.value0;if(n instanceof oL)return"Error at array index "+(iL(n.value0)+(": "+yp(n.value1)));if(n instanceof aL)return"Error at property "+(rL(n.value0)+(": "+yp(n.value1)));if(n instanceof PS)return"Type mismatch: expected "+(n.value0+(", found "+n.value1));throw new Error("Failed pattern match at Foreign (line 78, column 1 - line 78, column 45): "+[n.constructor.name])},DS=function(n){var e=Wl(ff(n));return function(t){return e(JR(t))}},lL=function(n){var e=Rt(Ro(n)),t=DS(n);return function(i){return function(a){return $_(a)===i?e(sL(a)):t(new PS(i,$_(a)))}}},Sh=Rt(Ro(Co)),uL=DS(Co),jo=lL(Co),X_=G1(jA(Pb)(Co)),cL=ox(Xl(Co)),cc=Nt(Hl),fL=RT(Ui)(mp),dL=fi(aa),hL=nm(hx),pL=Nt(kl),mL=N1(_S),vL=CA(aR),gL=Rt(Yl),IS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),US=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),NS=(function(){function n(){}return n.value=new n,n})(),FS=(function(){function n(){}return n.value=new n,n})(),OS=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_L=function(n){return function(e){var t=function(p){return p===""?Sh(ub):Vl(function(v){return uL(LS.create(v))})(Sh)(AR(p))},i=(function(){if(e.responseFormat instanceof TS)return jo("ArrayBuffer");if(e.responseFormat instanceof bS)return jo("Blob");if(e.responseFormat instanceof CS)return function(p){return X_(jo("Document")(p))(X_(jo("XMLDocument")(p))(jo("HTMLDocument")(p)))};if(e.responseFormat instanceof Ef)return cL(function(p){return e.responseFormat.value0(t(p))})(jo("String"));if(e.responseFormat instanceof Um)return jo("String");if(e.responseFormat instanceof Nm)return kt(e.responseFormat.value0(Sh(kn)));throw new Error("Failed pattern match at Affjax (line 274, column 18 - line 283, column 57): "+[e.responseFormat.constructor.name])})(),a=function(p){if(p instanceof fR)return new mt(p.value0(Xo));if(p instanceof dR)return new mt(Xo(p.value0));if(p instanceof hR)return new mt(Xo(p.value0));if(p instanceof pR)return new mt(Xo(p.value0));if(p instanceof mR)return new mt(Xo(p.value0));if(p instanceof wS)return ms("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(cc(Xo)(IR(p.value0)));if(p instanceof MS)return new mt(Xo(Nx(p.value0)));throw new Error("Failed pattern match at Affjax (line 235, column 20 - line 250, column 69): "+[p.constructor.name])},s=function(p){return function(v){return p instanceof gt&&!fL(I1(dL)(G_)(p.value0))(v)?HT(v)(p.value0):v}},c=function(p){return s(cc(Dm.create)(hL(vR)(p)))(s(cc(Pm.create)(yR(e.responseFormat)))(e.headers))},u=function(p){return{method:ZR(e.method),url:e.url,headers:pL(function(v){return{field:G_(v),value:gR(v)}})(c(e.content)),content:p,responseType:_R(e.responseFormat),username:uc(e.username),password:uc(e.password),withCredentials:e.withCredentials,timeout:fx(0)(cc(function(v){return v})(e.timeout))}},d=function(p){return mL(vL(nL(uR(n,"AffjaxTimeoutErrorMessageIdent","AffjaxRequestFailedMessageIdent",wR.create,u(p)))))(function(v){if(v instanceof mt){var g=_m(i(v.value0.body));if(g instanceof ct)return new ct(new US(QR(g.value0),v.value0));if(g instanceof mt)return new mt({headers:v.value0.headers,status:v.value0.status,statusText:v.value0.statusText,body:g.value0});throw new Error("Failed pattern match at Affjax (line 209, column 9 - line 211, column 52): "+[g.constructor.name])}if(v instanceof ct)return new ct((function(){var S=xx(v.value0),E=S==="AffjaxTimeoutErrorMessageIdent";if(E)return NS.value;var w=S==="AffjaxRequestFailedMessageIdent";return w?FS.value:new OS(v.value0)})());throw new Error("Failed pattern match at Affjax (line 207, column 144 - line 219, column 28): "+[v.constructor.name])})};if(e.content instanceof bt)return d(uc(bt.value));if(e.content instanceof gt){var h=a(e.content.value0);if(h instanceof mt)return d(uc(new gt(h.value0)));if(h instanceof ct)return gL(new ct(new IS(h.value0)));throw new Error("Failed pattern match at Affjax (line 199, column 7 - line 203, column 48): "+[h.constructor.name])}throw new Error("Failed pattern match at Affjax (line 195, column 3 - line 203, column 48): "+[e.content.constructor.name])}},zS=function(n){if(n instanceof IS)return"There was a problem with the request content: "+n.value0;if(n instanceof US)return"There was a problem with the response body: "+yp(n.value0);if(n instanceof NS)return"There was a problem making the request: timeout";if(n instanceof FS)return"There was a problem making the request: request failed";if(n instanceof OS)return"There was a problem making the request: "+xx(n.value0);throw new Error("Failed pattern match at Affjax (line 113, column 14 - line 123, column 66): "+[n.constructor.name])},Yo=(function(){return{method:new ct(RS.value),url:"/",headers:[],content:bt.value,username:bt.value,password:bt.value,withCredentials:!1,responseFormat:ER,timeout:bt.value}})(),yL=function(n){return function(e){return function(t){return _L(n)({method:Yo.method,headers:Yo.headers,content:Yo.content,username:Yo.username,password:Yo.password,withCredentials:Yo.withCredentials,timeout:Yo.timeout,url:t,responseFormat:e})}}},xL=pa(sm),SL={show:function(n){return"(StatusCode "+(xL(n)+")")}},EL={eq:function(n){return function(e){return n===e}}};const wL={newXHR:function(){return new XMLHttpRequest},fixupUrl:function(n){return n||"/"}};var kS=yL(wL),ML=Tx(Cx),AL={liftAff:vr(gr),MonadEffect0:function(){return ql}},BS=function(n){return n.liftAff},TL=function(n){var e=n.MonadEffect0(),t=mm(e);return{liftAff:(function(){var i=ML(e.Monad0()),a=BS(n);return function(s){return i(a(s))}})(),MonadEffect0:function(){return t}}};const bL=function(n){return function(e){return e.join(n)}};var CL=Ur(Bl),RL={genericShowArgs:function(n){return[]}},LL=function(n){return n.genericShowArgs},PL=function(n){var e=LL(n);return function(t){var i=Ir(t);return{"genericShow'":function(a){var s=i(Mt.value),c=e(a);return c.length===0?s:"("+(bL(" ")(CL([s])(c))+")")}}}},xp=function(n){return n["genericShow'"]},ei=function(n){var e=xp(n);return function(t){var i=xp(t);return{"genericShow'":function(a){if(a instanceof jt)return e(a.value0);if(a instanceof Ne)return i(a.value0);throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): "+[a.constructor.name])}}}},DL=function(n){var e=lm(n);return function(t){var i=xp(t);return function(a){return i(e(a))}}},Hr=PL(RL),HS=(function(){function n(){}return n.value=new n,n})(),VS=(function(){function n(){}return n.value=new n,n})(),GS=(function(){function n(){}return n.value=new n,n})(),WS=(function(){function n(){}return n.value=new n,n})(),$S=(function(){function n(){}return n.value=new n,n})(),Sp=(function(){function n(){}return n.value=new n,n})(),IL=(function(){function n(){}return n.value=new n,n})(),UL=(function(){function n(){}return n.value=new n,n})(),NL=(function(){function n(){}return n.value=new n,n})(),FL=(function(){function n(){}return n.value=new n,n})(),OL=(function(){function n(){}return n.value=new n,n})(),zL={from:function(n){if(n instanceof HS)return new jt(nr.value);if(n instanceof VS)return new Ne(new jt(nr.value));if(n instanceof GS)return new Ne(new Ne(new jt(nr.value)));if(n instanceof WS)return new Ne(new Ne(new Ne(new jt(nr.value))));if(n instanceof $S)return new Ne(new Ne(new Ne(new Ne(new jt(nr.value)))));if(n instanceof Sp)return new Ne(new Ne(new Ne(new Ne(new Ne(new jt(nr.value))))));if(n instanceof IL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new jt(nr.value)))))));if(n instanceof UL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new jt(nr.value))))))));if(n instanceof NL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new jt(nr.value)))))))));if(n instanceof FL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new jt(nr.value))))))))));if(n instanceof OL)return new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(new Ne(nr.value))))))))));throw new Error("Failed pattern match at GCodeViewer.Error (line 30, column 1 - line 30, column 34): "+[n.constructor.name])}},kL={show:DL(zL)(ei(Hr({reflectSymbol:function(){return"Err1"}}))(ei(Hr({reflectSymbol:function(){return"Err2"}}))(ei(Hr({reflectSymbol:function(){return"Err3"}}))(ei(Hr({reflectSymbol:function(){return"Err4"}}))(ei(Hr({reflectSymbol:function(){return"Err5"}}))(ei(Hr({reflectSymbol:function(){return"Err6"}}))(ei(Hr({reflectSymbol:function(){return"XErr7"}}))(ei(Hr({reflectSymbol:function(){return"XErr8"}}))(ei(Hr({reflectSymbol:function(){return"XErr9"}}))(ei(Hr({reflectSymbol:function(){return"XErr10"}}))(Hr({reflectSymbol:function(){return"ErrX"}}))))))))))))},BL=pa(kL),Al=function(n){return"Error: "+(n.message+(" ("+(BL(n.code)+")")))},cs=function(n){return function(e){return{message:e,code:n}}},HL=function(n){var e=n.MonadThrow0(),t=Wl(e),i=Rt(e.Monad0().Applicative0());return function(a){return function(s){if(s instanceof ct)return t(a(s.value0));if(s instanceof mt)return i(s.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 43, column 28 - line 45, column 20): "+[s.constructor.name])}}},VL=function(n){var e=Wl(n.MonadThrow0());return function(t){var i=t.MonadEffect0().Monad0(),a=mn(i.Bind1()),s=BS(t),c=Rt(i.Applicative0());return function(u){return function(d){return a(s(d))(function(h){if(h instanceof ct)return e(u(h.value0));if(h instanceof mt)return c(h.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 38, column 3 - line 40, column 22): "+[h.constructor.name])})}}}},GL=xf(Ux(va)),WL=jl(),$L=YA(),XL=dS(),ss=function(n){return n},jL=function(n){return n},Fm=function(){return function(n){var e=XL(n);return function(t){var i=Ir(t);return function(a){return GL(WL)($L)(e(i(Mt.value))(a))}}}},XS=Xl(sr),Ep=mn(XS),jS=vm(sr),YS=VL(jS)(TL(AL)),qS=sf(lf)(XS),KS=Ro(sr),ZS=tm(KS),JS=sx(EL),QS=Wl(ff(sr)),eE=pa(SL),tE=Rt(KS),YL=HL(jS),qL=function(n){return Ep(YS((function(){var e=cs(WS.value);return function(t){return e(zS(t))}})())(kS(xR)(n)))(function(e){return qS(ZS(JS(e.status)(200))(QS(cs($S.value)(eE(e.status)))))(function(){return tE(e.body)})})},KL=Fm()(ii(ii(ii(Rm)()()({reflectSymbol:function(){return"pictures"}}))()()({reflectSymbol:function(){return"name"}}))()()({reflectSymbol:function(){return"gcode"}}))({reflectSymbol:function(){return"IndexFileItem"}})({name:ir,gcode:ir,pictures:yf(ir)}),Om=yf(KL),ZL=function(n){return Ep(YS((function(){var e=cs(HS.value);return function(t){return e(zS(t))}})())(kS(SR)(n.url)))(function(e){return qS(ZS(JS(e.status)(200))(QS(cs(GS.value)(eE(e.status)))))(function(){return Ep(YL((function(){var t=cs(VS.value);return function(i){return t(SC(i))}})())(Rn(Om)(e.body)))(function(t){return tE(t)})})})},JL=function(n){return function(e){var t=xf(e.Profunctor0()),i=RC(e);return function(a){return t(n)(function(s){return s.value1(s.value0)})(i(a))}}},QL=function(n){return function(e){return function(t){return JL(function(i){return new Vt(n(i),function(a){return e(i)(a)})})(t)}}},nE=function(n){var e=Lo(n)(),t=AC(n)()();return function(){return function(){return function(i){return function(a){return QL(e(i))(si(t(i)))(a)}}}}},bs=function(n){var e=nE(n)()();return function(){return function(){return function(t){return e(Mt.value)(t)}}}},Lr=Dx(Ix),zn=mn(Gl),mo=Rt(ga),eP=Nt(va),tP=xf(Ux(va)),j_=Wx(Ui),nP=vr(gr),jc=tm(ga),Tl=sf(lf)(Gl),Y_=sx(qc(fb)),Kl=(function(){function n(){}return n.value=new n,n})(),un=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),zm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),wf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),rP=function(n){return function(){return function(){return function(e){return function(t){return t}}}}},wp=function(n){return n.gCasesEncode},Mp=function(n){return n.gCasesDecode},Eh=function(n){var e=wp(n),t=Mp(n);return function(i){var a=wp(i),s=Mp(i);return function(){return function(){return function(){return function(){return function(c){var u=rP()()(),d=Lo(c)(),h=Cm(c)()(),p=TC(c)()();return{gCasesEncode:function(v){return function(g){var S=u(Mt.value)(g),E=d(Mt.value)(g),w=h(Mt.value)(E)({});return function(x){if(x instanceof jt)return e(v)(w)(x.value0);if(x instanceof Ne)return a(v)(S)(x.value0);throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 244, column 7 - line 246, column 47): "+[x.constructor.name])}}},gCasesDecode:function(v){return function(g){return function(S){var E=p(Mt.value)(g),w=d(Mt.value)(g),x=h(Mt.value)(w)({}),_=function(R){return s(v)(E)(S)},C=function(R){return t(v)(x)(S)},M=C();if(M instanceof ct&&M.value0 instanceof Kl)return eP(Ne.create)(_());if(M instanceof ct&&M.value0 instanceof un)return new ct(new un(M.value0.value0));if(M instanceof mt)return new mt(new jt(M.value0));throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 257, column 5 - line 260, column 34): "+[M.constructor.name])}}}}}}}}}}},iP=function(n){return function(e){return new bm(n,(function(){if(e instanceof Kl)return new li("No case matched");if(e instanceof un)return e.value0;throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 147, column 5 - line 149, column 23): "+[e.constructor.name])})())}},oP=function(n){var e=wp(n),t=Mp(n);return function(i){var a=lm(i),s=cx(i);return function(c){return function(u){return function(d){var h=e(c)(d),p=(function(){var v=Lr(iP(u)),g=t(c)(d);return function(S){return v(g(S))}})();return tP(a)(s)(hf(p)(h))}}}}},rE=function(n){return function(e){return function(t){if(n instanceof zm){var i=(function(){return t.length===0?Kt(_o)([]):t.length===1&&n.value0.unwrapSingleArguments?t[0]:Kt(_o)(t)})(),a=n.value0.mapTag(e);return Kt(Eo)(j_([new Vt(a,i)]))}if(n instanceof wf){var s=(function(){return t.length===0&&n.value0.omitEmptyArguments?bt.value:t.length===1&&n.value0.unwrapSingleArguments?new gt(new Vt(n.value0.valuesKey,t[0])):new gt(new Vt(n.value0.valuesKey,Kt(_o)(t)))})(),a=n.value0.mapTag(e),c=new gt(new Vt(n.value0.tagKey,Kt(ir)(a)));return Kt(Eo)(j_(ZT([c,s])))}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 403, column 3 - line 428, column 33): "+[n.constructor.name])}}},aP=(function(){return new wf({tagKey:"tag",valuesKey:"values",unwrapSingleArguments:!1,omitEmptyArguments:!1,mapTag:nP})})(),sP=function(n){return function(e){return oP(e)(n)(aP)}},iE=function(n){return function(e){return function(t){return zn(Lr(un.create)(ms(new li("Expecting a tag property `"+(n+"`")))(vs(n)(e))))(function(i){return zn(Lr(un.create)(Rn(ir)(i)))(function(a){return jc(a!==t)(new ct(Kl.value))})})}}},lP=function(n){return function(e){return function(t){if(n instanceof zm){var i=n.value0.mapTag(t);return zn(Lr(un.create)(Rn(Eo)(e)))(function(a){return zn(ms(Kl.value)(vs(i)(a)))(function(s){return zn(Lr(un.create)(Rn(_o)(s)))(function(c){return Tl(jc(Y_(c)([]))(new ct(new un(new li("Expecting an empty array")))))(function(){return mo(kn)})})})})}if(n instanceof wf){var i=n.value0.mapTag(t);return zn(Lr(un.create)(Rn(Eo)(e)))(function(s){return Tl(iE(n.value0.tagKey)(s)(i))(function(){return jc(!n.value0.omitEmptyArguments)(zn(ms(new un(new li("Expecting a value property `"+(n.value0.valuesKey+"`"))))(vs(n.value0.valuesKey)(s)))(function(c){return zn(Lr(un.create)(Rn(_o)(c)))(function(u){return Tl(jc(Y_(u)([]))(new ct(new un(new li("Expecting an empty array")))))(function(){return mo(kn)})})}))})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 320, column 3 - line 346, column 18): "+[n.constructor.name])}}},uP=function(){return function(n){var e=Ir(n);return{gCasesEncode:function(t){return function(i){return function(a){var s=e(Mt.value);return rE(t)(s)([])}}},gCasesDecode:function(t){return function(i){return function(a){var s=e(Mt.value);return Tl(lP(t)(a)(s))(function(){return mo(nr.value)})}}}}}},cP=function(n){return function(e){return function(t){if(n instanceof zm){var i=n.value0.mapTag(t);return zn(Lr(un.create)(Rn(Eo)(e)))(function(a){return zn(ms(Kl.value)(vs(i)(a)))(function(s){return n.value0.unwrapSingleArguments?mo(s):zn(Lr(un.create)(Rn(_o)(s)))(function(c){return c.length===1?mo(c[0]):new ct(new un(new li("Expecting exactly one element")))})})})}if(n instanceof wf){var i=n.value0.mapTag(t);return zn(Lr(un.create)(Rn(Eo)(e)))(function(s){return Tl(iE(n.value0.tagKey)(s)(i))(function(){return zn(ms(new un(new li("Expecting a value property `"+(n.value0.valuesKey+"`"))))(vs(n.value0.valuesKey)(s)))(function(c){return n.value0.unwrapSingleArguments?mo(c):zn(Lr(un.create)(Rn(_o)(c)))(function(u){return u.length===1?mo(u[0]):new ct(new un(new li("Expecting exactly one element")))})})})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 349, column 49 - line 378, column 71): "+[n.constructor.name])}}},fP=function(){return function(n){var e=Ir(n),t=Lo(n)();return{gCasesEncode:function(i){return function(a){return function(s){var c=e(Mt.value),u=t(Mt.value)(a);return rE(i)(c)([Kt(u)(s)])}}},gCasesDecode:function(i){return function(a){return function(s){var c=e(Mt.value);return zn(cP(i)(s)(c))(function(u){var d=t(Mt.value)(a);return zn(Lr(un.create)(Rn(d)(u)))(function(h){return mo(h)})})}}}}}},dP=kl,hP=Ui;function pP(n){var e={};for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}function mP(n){return function(e){return function(t){return t[n]=e(t[n]),t}}}var vP=tx,gP=function(){return function(){return function(n){var e=Ir(n);return function(t){return function(i){return function(a){return mP(e(t))(i)(a)}}}}}},_P=gr,yP=function(n){return function(e){return n(pP(e))}},xP=vr(_P),SP=nx(vP),EP=gP()(),wP=function(n){return n},MP=function(n){return n.mappingWithIndex},AP=function(n){return n.mapping},ea={mapRecordWithIndexBuilder:function(n){return function(e){return xP}}},oE=function(n){return n.mapRecordWithIndexBuilder},Zl=function(n){var e=EP(n);return function(t){var i=MP(t);return function(a){var s=oE(a);return function(){return function(){return{mapRecordWithIndexBuilder:function(c){return function(u){return SP(e(Mt.value)(i(u)(Mt.value)))(s(Mt.value)(u))}}}}}}}},TP=function(){return function(n){return{hmap:(function(){var e=oE(n)(Mt.value);return function(t){return yP(e(wP(t)))}})()}}},Ap=function(n){return n.hmap},km=function(n){var e=AP(n);return{mappingWithIndex:function(t){return function(i){return e(t)}}}},aE=Nt(ix),bP=MC(),CP=(function(){function n(){}return n.value=new n,n})(),RP=(function(){function n(){}return n.value=new n,n})(),LP=(function(){function n(){}return n.value=new n,n})(),PP=function(){return function(n){var e=Lo(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Mt.value)(t),s=a(i);return s}}}}},DP=function(){return function(n){return{mkConstructorsRep:(function(){var e=function(i){return cA(fA(i))},t=Cm(n)()()(Mt.value)(e)({});return t})()}}},Tp=function(n){return n.mkMatcherRep},IP=function(n){return n.mkMatcher1},bp=function(n){return n.mkConstructorsRep},UP=function(n){return n.mkConstructors},NP=function(){return function(n){var e=Lo(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Mt.value)(t),s=a(kn);return s}}}}},FP=function(n){var e=lm(n);return function(t){var i=Tp(t);return{mkMatcher1:function(a,s){return i(s)(e(a))}}}},OP=function(n){var e=cx(n);return{mapping:function(t){return function(i){return function(a){return e(i(a))}}}}},zP={mapping:function(n){return function(e){return aE(Ne.create)(e)}}},kP={mapping:function(n){return function(e){return aE(jt.create)(e)}}},fc=function(n){var e=bp(n);return function(t){var i=bp(t);return function(a){var s=Ap(a);return function(c){var u=Ap(c);return function(){return{mkConstructorsRep:(function(){var d=u(CP.value)(i),h=s(RP.value)(e),p=bP(h)(d);return p})()}}}}}},BP=function(n){return function(e){var t=bp(e);return function(i){return{mkConstructors:(function(){var a=Ap(i)(LP.value)(t);return a})()}}}},HP=function(){return $l},VP=HP(),GP=function(){return $l},WP=GP(),wh=function(n){var e=Tp(n);return function(t){var i=Tp(t);return function(){return{mkMatcherRep:function(a){return function(s){var c=(function(){if(s instanceof jt)return e(WP(a))(s.value0);if(s instanceof Ne)return i(VP(a))(s.value0);throw new Error("Failed pattern match at Stadium.TL (line 159, column 11 - line 161, column 76): "+[s.constructor.name])})();return c}}}}}},q_=NP(),Cp={reflectSymbol:function(){return"NotAsked"}},Rp={reflectSymbol:function(){return"Loading"}},K_=PP(),Lp={reflectSymbol:function(){return"Loaded"}},sE={reflectSymbol:function(){return"Error"}},Z_=uP(),J_=fP(),gs=(function(){function n(){}return n.value=new n,n})(),wo=(function(){function n(){}return n.value=new n,n})(),_s=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ys=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),lE={to:function(n){if(n instanceof jt)return gs.value;if(n instanceof Ne&&n.value0 instanceof jt)return wo.value;if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof jt)return new _s(n.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne)return new ys(n.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])},from:function(n){if(n instanceof gs)return new jt(nr.value);if(n instanceof wo)return new Ne(new jt(nr.value));if(n instanceof _s)return new Ne(new Ne(new jt(n.value0)));if(n instanceof ys)return new Ne(new Ne(new Ne(n.value0)));throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])}},$P=sP(lE)(Eh(Z_(Cp))(Eh(Z_(Rp))(Eh(J_(Lp))(J_(sE))()()()()(Lp))()()()()(Rp))()()()()(Cp)),uE=function(n){var e=fi(n);return{eq:function(t){return function(i){return t instanceof gs&&i instanceof gs||t instanceof wo&&i instanceof wo?!0:t instanceof _s&&i instanceof _s?e(t.value0)(i.value0):t instanceof ys&&i instanceof ys?t.value0===i.value0:!1}}}},cE=IP(FP(lE)(wh(q_(Cp))(wh(q_(Rp))(wh(K_(Lp))(K_(sE))())())())),Mf=function(n){return $P("RemoteData")({NotAsked:kn,Loading:kn,Loaded:n,Error:ir})};const XP=n=>()=>{console.log(...n)};var jP=Sf(GA),YP=Rt(cm),Mh=Ur(Bl),Bm=function(n){var e=nE(n)()();return function(){return function(){return function(t){return e(Mt.value)(t)}}}},qP=Bm({reflectSymbol:function(){return"history"}})()()(Ni),KP=Bm({reflectSymbol:function(){return"historyIndex"}})()()(Ni),ZP=Bm({reflectSymbol:function(){return"pubState"}})()()(Ni),fE=function(n){var e=function(i){var a=function(s){return function(c){return i.updateState(function(u){var d=n.updatePubState(c)(u.pubState);if(d instanceof ct)return function(){return jP(d.value0)(),u};if(d instanceof mt){var h=n.encodeMsg(c);return function(){return XP(Mh([Kt(ir)("%c"+h.tag),Kt(ir)("color: white; background: #cc8a21; padding: 2px 4px;")])(Mh(ma([])(function(v){return[Kt(ir)("@"+v)]})(s))([h.args,Kt(ir)(`
newState`),n.encodeJsonPubState(d.value0)])))(),pS(qP)(function(v){return Mh(v)([{msg:c,pubState:d.value0}])})(ho(KP)(u.historyIndex+1)(ho(ZP)(d.value0)(u)))}}throw new Error("Failed pattern match at Stadium.Core (line 103, column 31 - line 126, column 16): "+[d.constructor.name])})}};return{emitMsg:a(bt.value),emitMsgCtx:function(s){return a(new gt(s))},readPubState:function(){var c=i.readState();return c.pubState},readPrivState:function(){var c=i.readState();return c.privState},updatePrivState:function(s){return i.updateState(function(c){return YP({pubState:c.pubState,history:c.history,historyIndex:c.historyIndex,privState:s(c.privState)})})}}},t={history:[],historyIndex:0,pubState:n.initPubState,privState:n.initPrivState};return{dispatchers:function(i){return n.dispatchers(e(i))},initState:t,timeTravel:function(i){return kn}}};const dE=n=>()=>{const[e,t]=Ve.useState({state:n.initState}),i={updateState:c=>()=>t(u=>(u.state=c(u.state)(),{...u})),readState:()=>e.state},a=n.dispatchers(i);return{state:e.state.pubState,dispatch:a}},JP=(n,e,t)=>{const i=Ve.useRef(0),a=Ve.useRef(t);return a.current=t,i.current=e(a.current,t)?i.current:i.current+1,Ve.useEffect(()=>n(),[i.current])};var fl=Rt(Ro(Co)),dl=hS(),hE={reflectSymbol:function(){return"startLayer"}},QP=bs(hE)()()(Ni),pE={reflectSymbol:function(){return"endLayer"}},e2=bs(pE)()()(Ni),mE={reflectSymbol:function(){return"gcodeLines"}},t2=bs(mE)()()(Ni),vE={reflectSymbol:function(){return"minLayer"}},n2=bs(vE)()()(Ni),gE={reflectSymbol:function(){return"maxLayer"}},r2=bs(gE)()()(Ni),i2={reflectSymbol:function(){return"PubState"}},hl=DP(),_E={reflectSymbol:function(){return"MsgSetStartLayer"}},yE={reflectSymbol:function(){return"MsgSetEndLayer"}},xE={reflectSymbol:function(){return"MsgSetGcodeLines"}},SE={reflectSymbol:function(){return"MsgSetMinLayer"}},EE={reflectSymbol:function(){return"MsgSetMaxLayer"}},wi=TP(),Pp=Zl(SE),dc=km(kP),wE=Zl(EE),Af=km(zP),ME=wE(Af),Dp=Zl(xE),AE=ME(Pp(Af)(ea)()())()(),Ah=Zl(yE),Q_=Dp(Af)(AE)()(),e0=Zl(_E),o2=mn(Lm),a2=Sf(ql),s2=Rt(Yl),TE=mm(ql),t0=cf(TE),l2=fm(vm(sr)),bE=Xl(sr),n0=mn(bE),Th=sf(lf)(bE),CE=Ro(sr),u2=tm(CE),c2=fi(uE(qc(aa))),f2=Wl(ff(sr)),d2=Sf(TE),h2=Rt(CE),Tf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),bf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),fs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Hm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Vm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),p2={to:function(n){if(n instanceof jt)return new Tf(n.value0);if(n instanceof Ne&&n.value0 instanceof jt)return new bf(n.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof jt)return new fs(n.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne&&n.value0.value0.value0 instanceof jt)return new Hm(n.value0.value0.value0.value0);if(n instanceof Ne&&n.value0 instanceof Ne&&n.value0.value0 instanceof Ne&&n.value0.value0.value0 instanceof Ne)return new Vm(n.value0.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 62, column 1 - line 62, column 30): "+[n.constructor.name])}},pl=km(OP(p2)),m2=function(n){return function(e){if(n instanceof Tf)return fl(ho((function(){var t=dl(ss)(na);return function(i){return t(QP(i))}})())(n.value0)(e));if(n instanceof bf)return fl(ho((function(){var t=dl(ss)(na);return function(i){return t(e2(i))}})())(n.value0)(e));if(n instanceof fs)return fl(ho((function(){var t=dl(ss)(na);return function(i){return t(t2(i))}})())(n.value0)(e));if(n instanceof Hm)return fl(ho((function(){var t=dl(ss)(na);return function(i){return t(n2(i))}})())(n.value0)(e));if(n instanceof Vm)return fl(ho((function(){var t=dl(ss)(na);return function(i){return t(r2(i))}})())(n.value0)(e));throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 65, column 31 - line 84, column 11): "+[n.constructor.name])}},v2=UP(BP()(fc(hl(_E))(fc(hl(yE))(fc(hl(xE))(fc(hl(SE))(hl(EE))(wi(Pp(dc)(ea)()()))(wi(ME(ea)()()))())(wi(Dp(dc)(ea)()()))(wi(AE))())(wi(Ah(dc)(ea)()()))(wi(Q_))())(wi(e0(dc)(ea)()()))(wi(Ah(Af)(Q_)()()))())(wi(Ah(pl)(Dp(pl)(wE(pl)(Pp(pl)(e0(pl)(ea)()())()())()())()())()()))),g2=(function(){return{gcodeLines:gs.value,startLayer:0,endLayer:100,minLayer:0,maxLayer:100}})(),_2=function(n){if(n instanceof Tf)return{tag:"MsgSetStartLayer",args:Kt(po)(n.value0)};if(n instanceof bf)return{tag:"MsgSetEndLayer",args:Kt(po)(n.value0)};if(n instanceof fs)return{tag:"MsgSetGcodeLines",args:Kt(Mf(yf(ir)))(n.value0)};if(n instanceof Hm)return{tag:"MsgSetMinLayer",args:Kt(po)(n.value0)};if(n instanceof Vm)return{tag:"MsgSetMaxLayer",args:Kt(po)(n.value0)};throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 87, column 13 - line 107, column 6): "+[n.constructor.name])},y2=function(n){var e=function(a){return function(s){return yS(o2(hm(a(s)))(function(c){if(c instanceof ct)return a2(Al(c.value0));if(c instanceof mt)return s2(kn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 156, column 5 - line 158, column 27): "+[c.constructor.name])}))()}},t=function(a){var s=(function(){var c=n.emitMsgCtx("loadGcodeLines");return function(u){return t0(c(u))}})();return l2(n0(t0(n.readPubState))(function(c){return Th(u2(c2(c.gcodeLines)(wo.value))(f2(cs(Sp.value)("Gcode lines are already loading"))))(function(){return Th(s(new fs(wo.value)))(function(){return n0(qL(a.url))(function(u){var d=eS(`
`)(u);return s(new fs(new _s(d)))})})})}))(function(c){return Th(d2(Al(c)))(function(){return c.code instanceof Sp?h2(kn):s(new fs(new ys(Al(c))))})})},i=function(a){return function(s){return n.emitMsg(a(s))()}};return{emitSetStartLayer:i(Tf.create),emitSetEndLayer:i(bf.create),msg:SS(n.emitMsg),runLoadGcodeLines:e(t)}},x2=Fm()(ii(ii(ii(ii(ii(Rm)()()(hE))()()(vE))()()(gE))()()(mE))()()(pE))(i2)({gcodeLines:Mf(yf(ir)),startLayer:po,endLayer:po,minLayer:po,maxLayer:po}),S2=fE({updatePubState:function(n){return function(e){return _m(m2(n)(e))}},dispatchers:y2,initPubState:g2,initPrivState:{},printError:vr(gr),encodeJsonPubState:Kt(x2),encodeMsg:_2}),E2=dE(S2);const w2=()=>window.location.search;var M2=jl(),A2=function(n){return M2(GC(n))},RE=function(n){return n.bitraverse},T2=function(n){var e=RE(n);return function(t){var i=e(t),a=Rt(t);return function(s){return i(s)(a)}}},LE={bitraverse:function(n){var e=n.Apply0(),t=As(e),i=Nt(e.Functor0());return function(a){return function(s){return function(c){return t(i(Vt.create)(a(c.value0)))(s(c.value1))}}}}},b2=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},r0=RE(LE)(ga),i0=Em(vf)(ga),C2=CT(Ui)(aa),R2=Nt(dP),L2=Nt(ix),P2=xm(hP),D2=k1(Gl),I2=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),U2=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),N2=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),PE=(function(){function n(){}return n.value=new n,n})(),Pr=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Mo=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Ip=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),xs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Up=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),F2=(function(){var n=function(v){return{segments:v.value0.value0,params:v.value0.value1,hash:v.value1}},e=function(v){return function(g){return g===""?[]:eS(v)(g)}},t=function(v){return function(g){return function(S){var E=Jb(g)(S);if(E instanceof gt)return new Vt(Qx(E.value0)(S),_p(E.value0+Mm(g)|0)(S));if(E instanceof bt)return v(S);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 191, column 5 - line 193, column 23): "+[E.constructor.name])}}},i=function(v){var g=RR(v);if(g instanceof bt)return new ct(new N2(v));if(g instanceof gt)return new mt(g.value0);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 195, column 29 - line 197, column 22): "+[g.constructor.name])},a=(function(){var v=r0(i)(i),g=t(si(Vt.create)(""))("=");return function(S){return v(g(S))}})(),s=(function(){var v=i0(a),g=e("&");return function(S){return v(g(S))}})(),c=(function(){var v=e("/");return function(g){return(function(S){return S.length===2&&S[0]===""&&S[1]===""?new mt([""]):i0(i)(S)})(v(g))}})(),u=(function(){var v=r0(c)(s),g=t(si(Vt.create)(""))("?");return function(S){return v(g(S))}})(),d=Nt(va)(n),h=T2(LE)(ga)(u),p=t(si(Vt.create)(""))("#");return function(v){return d(h(p(v)))}})(),O2=function(n){return new xs(function(e){var t=C2(n)(e.params);return t instanceof gt?new Mo(e,t.value0):new Pr(new U2(n))})},z2={map:function(n){return function(e){if(e instanceof Pr)return new Pr(e.value0);if(e instanceof Mo)return new Mo(e.value0,n(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},DE=Nt(z2),Np={map:function(n){return function(e){if(e instanceof Ip)return new Ip(R2(Nt(Np)(n))(e.value0));if(e instanceof xs)return new xs(L2(DE(n))(e.value0));if(e instanceof Up)return new Up(e.value0,Nt(Np)(n)(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},k2=function(n){return function(e){var t=$T(e.segments);return t instanceof gt&&n===t.value0?new Mo({params:e.params,hash:e.hash,segments:jT(1)(e.segments)},kn):t instanceof gt?new Pr(new I2(n,t.value0)):new Pr(PE.value)}},IE=b2("runRouteParser","Routing.Duplex.Parser",function(){var n=function(t){return function(i){return function(a){return i instanceof Pr?IE(161)(t)(a):i}}},e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof Ip)return s=!0,P2(n(d))(new Pr(PE.value))(h.value0);if(h instanceof xs)return s=!0,h.value0(d);if(h instanceof Up){var p=k2(h.value0)(d);if(p instanceof Pr)return s=!0,new Pr(p.value0);if(p instanceof Mo){a=p.value0,i=h.value1;return}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 157, column 7 - line 159, column 40): "+[p.constructor.name])}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 153, column 14 - line 159, column 40): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}),Fp=IE(150),B2=function(n){return D2(F2)((function(){var e=si(Fp)(n);return function(t){return(function(i){if(i instanceof Pr)return new ct(i.value0);if(i instanceof Mo)return new mt(i.value1);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 200, column 49 - line 202, column 29): "+[i.constructor.name])})(e(t))}})())},H2={apply:function(n){return function(e){return new xs(function(t){var i=Fp(t)(n);if(i instanceof Pr)return new Pr(i.value0);if(i instanceof Mo)return DE(i.value1)(Fp(i.value0)(e));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 81, column 5 - line 83, column 56): "+[i.constructor.name])})}}},V2={pure:(function(){var n=si(Mo.create);return function(e){return xs.create(n(e))}})()},UE={append:function(n){return function(e){return function(t){return e(n(t))}}}},G2=function(n){return function(e){return function(t){return{segments:t.segments,hash:t.hash,params:YT(new Vt(n,e))(t.params)}}}},W2={mempty:vr(gr),Semigroup0:function(){return UE}},$2=Ur(UE),X2=Rt(V2),NE=vr(gr),j2=As(H2),Y2=Nt(Np),Gm=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),q2=NE,K2=(function(){return new Gm(Ts(MA(W2)),X2({}))})(),Z2=function(n){var e=Lo(n)(),t=Cm(n)()();return function(){return function(){return function(){return function(i){return function(a){return function(s){return new Gm(function(c){return $2(s.value0(c))(a.value0(e(i)(c)))},j2(Y2(si(t(i)))(s.value1))(a.value1))}}}}}}},J2=function(n){return B2(n.value1)},Q2=function(n){return n.params},eD=function(n){return new Gm(G2(n),O2(n))},tD={buildParams:function(n){return function(e){return NE}}},FE=function(n){return n.buildParams},nD=function(n){var e=Z2(n)()()(),t=Lo(n)(),i=Ir(n);return function(){return function(){return function(){return function(){return function(a){var s=FE(a);return{buildParams:function(c){return function(u){return function(d){return s(Mt.value)(u)(e(Mt.value)(t(Mt.value)(u)(eD(i(Mt.value))))(d))}}}}}}}}}},rD=function(){return function(n){var e=FE(n);return{params:function(t){return e(Mt.value)(t)(K2)}}}},iD=Rt(Ro(Co)),oD=hS(),OE={reflectSymbol:function(){return"index"}},aD=bs(OE)()()(Ni),sD=mn(Lm),lD=Sf(ql),uD=Rt(Yl),zE=sf(lf),kE=vS(Bl)(Ex),cD=zE(kE),fD=VA(jC(vx)(Co)),bh=Rt(gS(vx)(wx)),dD=mn(kE),Wm={reflectSymbol:function(){return"url"}},hD=rD()(nD(Wm)()()()()(tD)),BE=ii(Rm)()(),HE={reflectSymbol:function(){return"content"}},VE=dS()(ii(BE(Wm))()()(HE)),GE=Xl(sr),o0=mn(GE),hc=cf(mm(ql)),a0=tA(),s0=Xc(eA)(),pD={reflectSymbol:function(){return"pictures"}},mD={reflectSymbol:function(){return"name"}},vD={reflectSymbol:function(){return"gcode"}},gD=fi(uE(a0(Xc(s0(Wm)(aa))()(HE)(qc(jL(a0(Xc(Xc(s0(pD)(qc(aa)))()(mD)(aa))()(vD)(aa)))))))),_D=Rt(Ro(sr)),yD=fm(vm(sr)),xD=zE(GE),SD={reflectSymbol:function(){return"PubState"}},Ch=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ED=function(n){return function(e){return iD(ho((function(){var t=oD(ss)(na);return function(i){return t(aD(i))}})())(n.value0)(e))}},wD=function(n){return function(e){return yS(sD(hm(n(e)))(function(t){if(t instanceof ct)return lD(Al(t.value0));if(t instanceof mt)return uD(kn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 117, column 3 - line 119, column 25): "+[t.constructor.name])}))()}},MD=function(n){var e=uC("/")(n);if(e instanceof gt)return dC(e.value0)(n);if(e instanceof bt)return"";throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 61, column 3 - line 63, column 18): "+[e.constructor.name])},AD=function(n){var e=function(t){var i=Q2(t);return function(a){return function(s){return function(c){var u=J2(i(s))(c);if(u instanceof ct)return cD(fD([u.value0]))(function(){return bh(a)});if(u instanceof mt)return bh(u.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 178, column 21 - line 182, column 22): "+[u.constructor.name])}}}};return A2(dD(e(hD)({url:"index.json"})({url:q2})(n))(function(t){return bh({url:t.url})}))},TD=function(n){return MD(n.absUrl)+("/"+n.relUrl)},bD=(function(){return{index:gs.value}})(),CD=function(){var e=w2(),t=AD(e);return t.value0},RD=function(n){return{tag:"MsgSetIndex",args:Kt(Mf(VE("")({url:ir,content:Om})))(n.value0)}},LD=function(n){var e=function(t){return o0(hc(n.readPubState))(function(i){var a=gD(i.index)(wo.value);return a?_D(kn):yD(xD(hc(n.emitMsg(new Ch(wo.value))))(function(){return o0(ZL({url:t.url}))(function(s){return hc(n.emitMsg(new Ch(new _s({url:t.url,content:s}))))})}))(function(s){return hc(n.emitMsg(new Ch(new ys(Al(s)))))})})};return{msg:SS(n.emitMsg),runFetchIndex:wD(e)}},PD=Fm()(BE(OE))(SD)({index:Mf(VE("")({url:ir,content:Om}))}),DD=fE({updatePubState:function(n){return function(e){return _m(ED(n)(e))}},dispatchers:LD,initPubState:bD,initPrivState:{},printError:vr(gr),encodeJsonPubState:Kt(PD),encodeMsg:RD}),ID=dE(DD);const UD="0.0.6",ND="0.0.16",FD="_root_6ggp7_1",OD="_version_6ggp7_5",pc=({children:n,viewErrors:e,viewInfo:t})=>tt.jsxs("div",{className:FD,children:[tt.jsx("div",{children:n}),tt.jsx("div",{children:e}),tt.jsx("div",{children:t}),tt.jsxs("div",{className:OD,children:[UD," - ",ND]})]}),zD="_root_xmkgg_1",kD={root:zD},BD=({items:n})=>tt.jsx("div",{className:kD.root,children:n.map(e=>e)}),HD="_root_1pmvk_1",VD="_slider_1pmvk_13",GD="_label_1pmvk_22",WD=({viewPictures:n,viewGcode:e,viewSlider:t,item:i})=>tt.jsxs("div",{className:HD,children:[tt.jsx("div",{className:GD,children:i.name}),n,e,tt.jsx("div",{className:VD,children:t})]}),$D="_root_1b3ad_1",XD=({pictures:n})=>tt.jsx("div",{className:$D});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="159",Va={ROTATE:0,DOLLY:1,PAN:2},Ga={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jD=0,l0=1,YD=2,WE=1,qD=2,Ri=3,Ao=0,or=1,Li=2,yo=0,ds=1,u0=2,c0=3,f0=4,KD=5,ra=100,ZD=101,JD=102,d0=103,h0=104,QD=200,e3=201,t3=202,n3=203,Op=204,zp=205,r3=206,i3=207,o3=208,a3=209,s3=210,l3=211,u3=212,c3=213,f3=214,d3=0,h3=1,p3=2,Jc=3,m3=4,v3=5,g3=6,_3=7,$m=0,y3=1,x3=2,xo=0,S3=1,E3=2,w3=3,M3=4,A3=5,$E=300,Ss=301,Es=302,kp=303,Bp=304,Rf=306,Hp=1e3,jr=1001,Vp=1002,Tn=1003,p0=1004,Rh=1005,Tr=1006,T3=1007,Ul=1008,So=1009,b3=1010,C3=1011,Xm=1012,XE=1013,vo=1014,Pi=1015,Nl=1016,jE=1017,YE=1018,ua=1020,R3=1021,br=1023,L3=1024,P3=1025,ca=1026,ws=1027,D3=1028,qE=1029,I3=1030,KE=1031,ZE=1033,Lh=33776,Ph=33777,Dh=33778,Ih=33779,m0=35840,v0=35841,g0=35842,_0=35843,JE=36196,y0=37492,x0=37496,S0=37808,E0=37809,w0=37810,M0=37811,A0=37812,T0=37813,b0=37814,C0=37815,R0=37816,L0=37817,P0=37818,D0=37819,I0=37820,U0=37821,Uh=36492,N0=36494,F0=36495,U3=36283,O0=36284,z0=36285,k0=36286,QE=3e3,fa=3001,N3=3200,F3=3201,ew=0,O3=1,Cr="",bn="srgb",Ii="srgb-linear",jm="display-p3",Lf="display-p3-linear",Qc="linear",Xt="srgb",ef="rec709",tf="p3",Wa=7680,B0=519,z3=512,k3=513,B3=514,tw=515,H3=516,V3=517,G3=518,W3=519,Gp=35044,H0="300 es",Wp=1035,ai=2e3,Fl=2001;class _a{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,c=a.length;s<c;s++)a[s].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let V0=1234567;const bl=Math.PI/180,Ol=180/Math.PI;function Di(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function Cn(n,e,t){return Math.max(e,Math.min(t,n))}function Ym(n,e){return(n%e+e)%e}function $3(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function X3(n,e,t){return n!==e?(t-n)/(e-n):0}function Cl(n,e,t){return(1-t)*n+t*e}function j3(n,e,t,i){return Cl(n,e,1-Math.exp(-t*i))}function Y3(n,e=1){return e-Math.abs(Ym(n,e*2)-e)}function q3(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function K3(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Z3(n,e){return n+Math.floor(Math.random()*(e-n+1))}function J3(n,e){return n+Math.random()*(e-n)}function Q3(n){return n*(.5-Math.random())}function eI(n){n!==void 0&&(V0=n);let e=V0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tI(n){return n*bl}function nI(n){return n*Ol}function $p(n){return(n&n-1)===0&&n!==0}function rI(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iI(n,e,t,i,a){const s=Math.cos,c=Math.sin,u=s(t/2),d=c(t/2),h=s((e+i)/2),p=c((e+i)/2),v=s((e-i)/2),g=c((e-i)/2),S=s((i-e)/2),E=c((i-e)/2);switch(a){case"XYX":n.set(u*p,d*v,d*g,u*h);break;case"YZY":n.set(d*g,u*p,d*v,u*h);break;case"ZXZ":n.set(d*v,d*g,u*p,u*h);break;case"XZX":n.set(u*p,d*E,d*S,u*h);break;case"YXY":n.set(d*S,u*p,d*E,u*h);break;case"ZYZ":n.set(d*E,d*S,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nw={DEG2RAD:bl,RAD2DEG:Ol,generateUUID:Di,clamp:Cn,euclideanModulo:Ym,mapLinear:$3,inverseLerp:X3,lerp:Cl,damp:j3,pingpong:Y3,smoothstep:q3,smootherstep:K3,randInt:Z3,randFloat:J3,randFloatSpread:Q3,seededRandom:eI,degToRad:tI,radToDeg:nI,isPowerOfTwo:$p,ceilPowerOfTwo:rI,floorPowerOfTwo:nf,setQuaternionFromProperEuler:iI,normalize:Ft,denormalize:oi};class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*i-c*a+e.x,this.y=s*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,i,a,s,c,u,d,h){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h)}set(e,t,i,a,s,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=s,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],v=i[7],g=i[2],S=i[5],E=i[8],w=a[0],x=a[3],_=a[6],C=a[1],M=a[4],R=a[7],I=a[2],O=a[5],F=a[8];return s[0]=c*w+u*C+d*I,s[3]=c*x+u*M+d*O,s[6]=c*_+u*R+d*F,s[1]=h*w+p*C+v*I,s[4]=h*x+p*M+v*O,s[7]=h*_+p*R+v*F,s[2]=g*w+S*C+E*I,s[5]=g*x+S*M+E*O,s[8]=g*_+S*R+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*s*p+i*u*d+a*s*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,g=u*d-p*s,S=h*s-c*d,E=t*v+i*g+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*h-p*i)*w,e[2]=(u*i-a*c)*w,e[3]=g*w,e[4]=(p*t-a*d)*w,e[5]=(a*s-u*t)*w,e[6]=S*w,e[7]=(i*d-h*t)*w,e[8]=(c*t-i*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,c,u){const d=Math.cos(s),h=Math.sin(s);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Nh.makeScale(e,t)),this}rotate(e){return this.premultiply(Nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new Et;function rw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function oI(){const n=rf("canvas");return n.style.display="block",n}const G0={};function Rl(n){n in G0||(G0[n]=!0,console.warn(n))}const W0=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$0=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mc={[Ii]:{transfer:Qc,primaries:ef,toReference:n=>n,fromReference:n=>n},[bn]:{transfer:Xt,primaries:ef,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lf]:{transfer:Qc,primaries:tf,toReference:n=>n.applyMatrix3($0),fromReference:n=>n.applyMatrix3(W0)},[jm]:{transfer:Xt,primaries:tf,toReference:n=>n.convertSRGBToLinear().applyMatrix3($0),fromReference:n=>n.applyMatrix3(W0).convertLinearToSRGB()}},aI=new Set([Ii,Lf]),Ot={enabled:!0,_workingColorSpace:Ii,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!aI.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=mc[e].toReference,a=mc[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return mc[n].primaries},getTransfer:function(n){return n===Cr?Qc:mc[n].transfer}};function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $a;class iw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$a===void 0&&($a=rf("canvas")),$a.width=e.width,$a.height=e.height;const i=$a.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$a}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let c=0;c<s.length;c++)s[c]=hs(s[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sI=0;class ow{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sI++}),this.uuid=Di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?s.push(Oh(a[c].image)):s.push(Oh(a[c]))}else s=Oh(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lI=0;class ar extends _a{constructor(e=ar.DEFAULT_IMAGE,t=ar.DEFAULT_MAPPING,i=jr,a=jr,s=Tr,c=Ul,u=br,d=So,h=ar.DEFAULT_ANISOTROPY,p=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lI++}),this.uuid=Di(),this.name="",this.source=new ow(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Rl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===fa?bn:Cr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$E)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hp:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case Vp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hp:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case Vp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?fa:QE}set encoding(e){Rl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fa?bn:Cr}}ar.DEFAULT_IMAGE=null;ar.DEFAULT_MAPPING=$E;ar.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*s,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*s,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*s,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],S=d[5],E=d[9],w=d[2],x=d[6],_=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,R=(S+1)/2,I=(_+1)/2,O=(p+g)/4,F=(v+w)/4,de=(E+x)/4;return M>R&&M>I?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=O/i,s=F/i):R>I?R<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(R),i=O/a,s=de/a):I<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(I),i=F/s,a=de/s),this.set(i,a,s,t),this}let C=Math.sqrt((x-E)*(x-E)+(v-w)*(v-w)+(g-p)*(g-p));return Math.abs(C)<.001&&(C=1),this.x=(x-E)/C,this.y=(v-w)/C,this.z=(g-p)/C,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uI extends _a{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Rl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fa?bn:Cr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ar(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ow(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class da extends uI{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class aw extends ar{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cI extends ar{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ha{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,c,u){let d=i[a+0],h=i[a+1],p=i[a+2],v=i[a+3];const g=s[c+0],S=s[c+1],E=s[c+2],w=s[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v;return}if(u===1){e[t+0]=g,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==g||h!==S||p!==E){let x=1-u;const _=d*g+h*S+p*E+v*w,C=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const I=Math.sqrt(M),O=Math.atan2(I,_*C);x=Math.sin(x*O)/I,u=Math.sin(u*O)/I}const R=u*C;if(d=d*x+g*R,h=h*x+S*R,p=p*x+E*R,v=v*x+w*R,x===1-u){const I=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=I,h*=I,p*=I,v*=I}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,s,c){const u=i[a],d=i[a+1],h=i[a+2],p=i[a+3],v=s[c],g=s[c+1],S=s[c+2],E=s[c+3];return e[t]=u*E+p*v+d*S-h*g,e[t+1]=d*E+p*g+h*v-u*S,e[t+2]=h*E+p*S+u*g-d*v,e[t+3]=p*E-u*v-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,s=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(a/2),v=u(s/2),g=d(i/2),S=d(a/2),E=d(s/2);switch(c){case"XYZ":this._x=g*p*v+h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v-g*S*E;break;case"YXZ":this._x=g*p*v+h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v+g*S*E;break;case"ZXY":this._x=g*p*v-h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v-g*S*E;break;case"ZYX":this._x=g*p*v-h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v+g*S*E;break;case"YZX":this._x=g*p*v+h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v-g*S*E;break;case"XZY":this._x=g*p*v-h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v+g*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=i+u+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(s-h)*S,this._z=(c-a)*S}else if(i>u&&i>v){const S=2*Math.sqrt(1+i-u-v);this._w=(p-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(s+h)/S}else if(u>v){const S=2*Math.sqrt(1+u-i-v);this._w=(s-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+v-i-u);this._w=(c-a)/S,this._x=(s+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-s*d,this._y=a*p+c*d+s*u-i*h,this._z=s*p+c*h+i*d-a*u,this._w=c*p-i*u-a*d-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=s,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*a+t*this._y,this._z=S*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),v=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=c*v+this._w*g,this._x=i*v+this._x*g,this._y=a*v+this._y*g,this._z=s*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(X0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(X0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,c=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*c,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*c,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*i),p=2*(u*t-s*a),v=2*(s*i-c*t);return this.x=t+d*h+c*v-u*p,this.y=i+d*p+u*h-s*v,this.z=a+d*v+s*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-s*u,this.y=s*c-i*d,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zh.copy(this).projectOnVector(e),this.sub(zh)}reflect(e){return this.sub(zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zh=new B,X0=new ha;class Dr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=s.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Vr):Vr.fromBufferAttribute(s,c),Vr.applyMatrix4(e.matrixWorld),this.expandByPoint(Vr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vc.copy(i.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const a=e.children;for(let s=0,c=a.length;s<c;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vr),Vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ml),gc.subVectors(this.max,ml),Xa.subVectors(e.a,ml),ja.subVectors(e.b,ml),Ya.subVectors(e.c,ml),ro.subVectors(ja,Xa),io.subVectors(Ya,ja),qo.subVectors(Xa,Ya);let t=[0,-ro.z,ro.y,0,-io.z,io.y,0,-qo.z,qo.y,ro.z,0,-ro.x,io.z,0,-io.x,qo.z,0,-qo.x,-ro.y,ro.x,0,-io.y,io.x,0,-qo.y,qo.x,0];return!kh(t,Xa,ja,Ya,gc)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,Xa,ja,Ya,gc))?!1:(_c.crossVectors(ro,io),t=[_c.x,_c.y,_c.z],kh(t,Xa,ja,Ya,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new B,new B,new B,new B,new B,new B,new B,new B],Vr=new B,vc=new Dr,Xa=new B,ja=new B,Ya=new B,ro=new B,io=new B,qo=new B,ml=new B,gc=new B,_c=new B,Ko=new B;function kh(n,e,t,i,a){for(let s=0,c=n.length-3;s<=c;s+=3){Ko.fromArray(n,s);const u=a.x*Math.abs(Ko.x)+a.y*Math.abs(Ko.y)+a.z*Math.abs(Ko.z),d=e.dot(Ko),h=t.dot(Ko),p=i.dot(Ko);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const fI=new Dr,vl=new B,Bh=new B;class ui{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fI.setFromPoints(e).getCenter(i);let a=0;for(let s=0,c=e.length;s<c;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const t=vl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(vl,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Bh)),this.expandByPoint(vl.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new B,Hh=new B,yc=new B,oo=new B,Vh=new B,xc=new B,Gh=new B;class qm{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Hh.copy(e).add(t).multiplyScalar(.5),yc.copy(t).sub(e).normalize(),oo.copy(this.origin).sub(Hh);const s=e.distanceTo(t)*.5,c=-this.direction.dot(yc),u=oo.dot(this.direction),d=-oo.dot(yc),h=oo.lengthSq(),p=Math.abs(1-c*c);let v,g,S,E;if(p>0)if(v=c*d-u,g=c*u-d,E=s*p,v>=0)if(g>=-E)if(g<=E){const w=1/p;v*=w,g*=w,S=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;else g=-s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;else g<=-E?(v=Math.max(0,-(-c*s+u)),g=v>0?-s:Math.min(Math.max(-s,-d),s),S=-v*v+g*(g+2*d)+h):g<=E?(v=0,g=Math.min(Math.max(-s,-d),s),S=g*(g+2*d)+h):(v=Math.max(0,-(c*s+u)),g=v>0?s:Math.min(Math.max(-s,-d),s),S=-v*v+g*(g+2*d)+h);else g=c>0?-s:s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Hh).addScaledVector(yc,g),S}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),a=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(a>s)return null;const c=Math.sqrt(s-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(s=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||s>a||((s>i||isNaN(i))&&(i=s),(c<a||isNaN(a))&&(a=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,a,s){Vh.subVectors(t,e),xc.subVectors(i,e),Gh.crossVectors(Vh,xc);let c=this.direction.dot(Gh),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;oo.subVectors(this.origin,e);const d=u*this.direction.dot(xc.crossVectors(oo,xc));if(d<0)return null;const h=u*this.direction.dot(Vh.cross(oo));if(h<0||d+h>c)return null;const p=-u*oo.dot(Gh);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x)}set(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=a,_[1]=s,_[5]=c,_[9]=u,_[13]=d,_[2]=h,_[6]=p,_[10]=v,_[14]=g,_[3]=S,_[7]=E,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/qa.setFromMatrixColumn(e,0).length(),s=1/qa.setFromMatrixColumn(e,1).length(),c=1/qa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),h=Math.sin(a),p=Math.cos(s),v=Math.sin(s);if(e.order==="XYZ"){const g=c*p,S=c*v,E=u*p,w=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=S+E*h,t[5]=g-w*h,t[9]=-u*d,t[2]=w-g*h,t[6]=E+S*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,S=d*v,E=h*p,w=h*v;t[0]=g+w*u,t[4]=E*u-S,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=S*u-E,t[6]=w+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,S=d*v,E=h*p,w=h*v;t[0]=g-w*u,t[4]=-c*v,t[8]=E+S*u,t[1]=S+E*u,t[5]=c*p,t[9]=w-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,S=c*v,E=u*p,w=u*v;t[0]=d*p,t[4]=E*h-S,t[8]=g*h+w,t[1]=d*v,t[5]=w*h+g,t[9]=S*h-E,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,S=c*h,E=u*d,w=u*h;t[0]=d*p,t[4]=w-g*v,t[8]=E*v+S,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=S*v+E,t[10]=g-w*v}else if(e.order==="XZY"){const g=c*d,S=c*h,E=u*d,w=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+w,t[5]=c*p,t[9]=S*v-E,t[2]=E*v-S,t[6]=u*p,t[10]=w*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dI,e,hI)}lookAt(e,t,i){const a=this.elements;return dr.subVectors(e,t),dr.lengthSq()===0&&(dr.z=1),dr.normalize(),ao.crossVectors(i,dr),ao.lengthSq()===0&&(Math.abs(i.z)===1?dr.x+=1e-4:dr.z+=1e-4,dr.normalize(),ao.crossVectors(i,dr)),ao.normalize(),Sc.crossVectors(dr,ao),a[0]=ao.x,a[4]=Sc.x,a[8]=dr.x,a[1]=ao.y,a[5]=Sc.y,a[9]=dr.y,a[2]=ao.z,a[6]=Sc.z,a[10]=dr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],v=i[5],g=i[9],S=i[13],E=i[2],w=i[6],x=i[10],_=i[14],C=i[3],M=i[7],R=i[11],I=i[15],O=a[0],F=a[4],de=a[8],b=a[12],N=a[1],ae=a[5],ne=a[9],pe=a[13],H=a[2],Q=a[6],se=a[10],re=a[14],X=a[3],ie=a[7],$=a[11],L=a[15];return s[0]=c*O+u*N+d*H+h*X,s[4]=c*F+u*ae+d*Q+h*ie,s[8]=c*de+u*ne+d*se+h*$,s[12]=c*b+u*pe+d*re+h*L,s[1]=p*O+v*N+g*H+S*X,s[5]=p*F+v*ae+g*Q+S*ie,s[9]=p*de+v*ne+g*se+S*$,s[13]=p*b+v*pe+g*re+S*L,s[2]=E*O+w*N+x*H+_*X,s[6]=E*F+w*ae+x*Q+_*ie,s[10]=E*de+w*ne+x*se+_*$,s[14]=E*b+w*pe+x*re+_*L,s[3]=C*O+M*N+R*H+I*X,s[7]=C*F+M*ae+R*Q+I*ie,s[11]=C*de+M*ne+R*se+I*$,s[15]=C*b+M*pe+R*re+I*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],S=e[14],E=e[3],w=e[7],x=e[11],_=e[15];return E*(+s*d*v-a*h*v-s*u*g+i*h*g+a*u*S-i*d*S)+w*(+t*d*S-t*h*g+s*c*g-a*c*S+a*h*p-s*d*p)+x*(+t*h*v-t*u*S-s*c*v+i*c*S+s*u*p-i*h*p)+_*(-a*u*p-t*d*v+t*u*g+a*c*v-i*c*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],S=e[11],E=e[12],w=e[13],x=e[14],_=e[15],C=v*x*h-w*g*h+w*d*S-u*x*S-v*d*_+u*g*_,M=E*g*h-p*x*h-E*d*S+c*x*S+p*d*_-c*g*_,R=p*w*h-E*v*h+E*u*S-c*w*S-p*u*_+c*v*_,I=E*v*d-p*w*d-E*u*g+c*w*g+p*u*x-c*v*x,O=t*C+i*M+a*R+s*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=C*F,e[1]=(w*g*s-v*x*s-w*a*S+i*x*S+v*a*_-i*g*_)*F,e[2]=(u*x*s-w*d*s+w*a*h-i*x*h-u*a*_+i*d*_)*F,e[3]=(v*d*s-u*g*s-v*a*h+i*g*h+u*a*S-i*d*S)*F,e[4]=M*F,e[5]=(p*x*s-E*g*s+E*a*S-t*x*S-p*a*_+t*g*_)*F,e[6]=(E*d*s-c*x*s-E*a*h+t*x*h+c*a*_-t*d*_)*F,e[7]=(c*g*s-p*d*s+p*a*h-t*g*h-c*a*S+t*d*S)*F,e[8]=R*F,e[9]=(E*v*s-p*w*s-E*i*S+t*w*S+p*i*_-t*v*_)*F,e[10]=(c*w*s-E*u*s+E*i*h-t*w*h-c*i*_+t*u*_)*F,e[11]=(p*u*s-c*v*s-p*i*h+t*v*h+c*i*S-t*u*S)*F,e[12]=I*F,e[13]=(p*w*a-E*v*a+E*i*g-t*w*g-p*i*x+t*v*x)*F,e[14]=(E*u*a-c*w*a-E*i*d+t*w*d+c*i*x-t*u*x)*F,e[15]=(c*v*a-p*u*a+p*i*d-t*v*d-c*i*g+t*u*g)*F,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,c=e.x,u=e.y,d=e.z,h=s*c,p=s*u;return this.set(h*c+i,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+i,p*d-a*c,0,h*d-a*u,p*d+a*c,s*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,c){return this.set(1,i,s,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,c=t._y,u=t._z,d=t._w,h=s+s,p=c+c,v=u+u,g=s*h,S=s*p,E=s*v,w=c*p,x=c*v,_=u*v,C=d*h,M=d*p,R=d*v,I=i.x,O=i.y,F=i.z;return a[0]=(1-(w+_))*I,a[1]=(S+R)*I,a[2]=(E-M)*I,a[3]=0,a[4]=(S-R)*O,a[5]=(1-(g+_))*O,a[6]=(x+C)*O,a[7]=0,a[8]=(E+M)*F,a[9]=(x-C)*F,a[10]=(1-(g+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=qa.set(a[0],a[1],a[2]).length();const c=qa.set(a[4],a[5],a[6]).length(),u=qa.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Gr.copy(this);const h=1/s,p=1/c,v=1/u;return Gr.elements[0]*=h,Gr.elements[1]*=h,Gr.elements[2]*=h,Gr.elements[4]*=p,Gr.elements[5]*=p,Gr.elements[6]*=p,Gr.elements[8]*=v,Gr.elements[9]*=v,Gr.elements[10]*=v,t.setFromRotationMatrix(Gr),i.x=s,i.y=c,i.z=u,this}makePerspective(e,t,i,a,s,c,u=ai){const d=this.elements,h=2*s/(t-e),p=2*s/(i-a),v=(t+e)/(t-e),g=(i+a)/(i-a);let S,E;if(u===ai)S=-(c+s)/(c-s),E=-2*c*s/(c-s);else if(u===Fl)S=-c/(c-s),E=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,s,c,u=ai){const d=this.elements,h=1/(t-e),p=1/(i-a),v=1/(c-s),g=(t+e)*h,S=(i+a)*p;let E,w;if(u===ai)E=(c+s)*v,w=-2*v;else if(u===Fl)E=s*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qa=new B,Gr=new Gt,dI=new B(0,0,0),hI=new B(1,1,1),ao=new B,Sc=new B,dr=new B,j0=new Gt,Y0=new ha;class Jl{constructor(e=0,t=0,i=0,a=Jl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],v=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Cn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jl.DEFAULT_ORDER="XYZ";class sw{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pI=0;const q0=new B,Ka=new ha,Ti=new Gt,Ec=new B,gl=new B,mI=new B,vI=new ha,K0=new B(1,0,0),Z0=new B(0,1,0),J0=new B(0,0,1),gI={type:"added"},_I={type:"removed"};class jn extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pI++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new B,t=new Jl,i=new ha,a=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Et}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sw,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.multiply(Ka),this}rotateOnWorldAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.premultiply(Ka),this}rotateX(e){return this.rotateOnAxis(K0,e)}rotateY(e){return this.rotateOnAxis(Z0,e)}rotateZ(e){return this.rotateOnAxis(J0,e)}translateOnAxis(e,t){return q0.copy(e).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(K0,e)}translateY(e){return this.translateOnAxis(Z0,e)}translateZ(e){return this.translateOnAxis(J0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ec.copy(e):Ec.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(gl,Ec,this.up):Ti.lookAt(Ec,gl,this.up),this.quaternion.setFromRotationMatrix(Ti),a&&(Ti.extractRotation(a.matrixWorld),Ka.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gI)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_I)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,e,mI),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,vI,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,c=a.length;s<c;s++){const u=a[s];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];s(e.shapes,v)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(s(e.materials,this.material[d]));a.material=u}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(s(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),S=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=a,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}jn.DEFAULT_UP=new B(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wr=new B,bi=new B,Wh=new B,Ci=new B,Za=new B,Ja=new B,Q0=new B,$h=new B,Xh=new B,jh=new B;let wc=!1;class Xr{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Wr.subVectors(e,t),a.cross(Wr);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Wr.subVectors(a,t),bi.subVectors(i,t),Wh.subVectors(e,t);const c=Wr.dot(Wr),u=Wr.dot(bi),d=Wr.dot(Wh),h=bi.dot(bi),p=bi.dot(Wh),v=c*h-u*u;if(v===0)return s.set(-2,-1,-1);const g=1/v,S=(h*d-u*p)*g,E=(c*p-u*d)*g;return s.set(1-S-E,E,S)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ci),Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,i,a,s,c,u,d){return wc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wc=!0),this.getInterpolation(e,t,i,a,s,c,u,d)}static getInterpolation(e,t,i,a,s,c,u,d){return this.getBarycoord(e,t,i,a,Ci),d.setScalar(0),d.addScaledVector(s,Ci.x),d.addScaledVector(c,Ci.y),d.addScaledVector(u,Ci.z),d}static isFrontFacing(e,t,i,a){return Wr.subVectors(i,t),bi.subVectors(e,t),Wr.cross(bi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wr.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Wr.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return wc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wc=!0),Xr.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return Xr.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return Xr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let c,u;Za.subVectors(a,i),Ja.subVectors(s,i),$h.subVectors(e,i);const d=Za.dot($h),h=Ja.dot($h);if(d<=0&&h<=0)return t.copy(i);Xh.subVectors(e,a);const p=Za.dot(Xh),v=Ja.dot(Xh);if(p>=0&&v<=p)return t.copy(a);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(Za,c);jh.subVectors(e,s);const S=Za.dot(jh),E=Ja.dot(jh);if(E>=0&&S<=E)return t.copy(s);const w=S*h-d*E;if(w<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(i).addScaledVector(Ja,u);const x=p*E-S*v;if(x<=0&&v-p>=0&&S-E>=0)return Q0.subVectors(s,a),u=(v-p)/(v-p+(S-E)),t.copy(a).addScaledVector(Q0,u);const _=1/(x+w+g);return c=w*_,u=g*_,t.copy(i).addScaledVector(Za,c).addScaledVector(Ja,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},so={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Yh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ot.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Ot.workingColorSpace){if(e=Ym(e,1),t=Cn(t,0,1),i=Cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,c=2*i-s;this.r=Yh(c,s,e+1/3),this.g=Yh(c,s,e),this.b=Yh(c,s,e-1/3)}return Ot.toWorkingColorSpace(this,a),this}setStyle(e,t=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=lw[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Fh(e.r),this.g=Fh(e.g),this.b=Fh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ot.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Cn(Fn.r*255,0,255))*65536+Math.round(Cn(Fn.g*255,0,255))*256+Math.round(Cn(Fn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Fn.copy(this),t);const i=Fn.r,a=Fn.g,s=Fn.b,c=Math.max(i,a,s),u=Math.min(i,a,s);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case i:d=(a-s)/v+(a<s?6:0);break;case a:d=(s-i)/v+2;break;case s:d=(i-a)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=bn){Ot.fromWorkingColorSpace(Fn.copy(this),e);const t=Fn.r,i=Fn.g,a=Fn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(so),this.setHSL(so.h+e,so.s+t,so.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(so),e.getHSL(Mc);const i=Cl(so.h,Mc.h,t),a=Cl(so.s,Mc.s,t),s=Cl(so.l,Mc.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new nt;nt.NAMES=lw;let yI=0;class Cs extends _a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yI++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ds,this.side=Ao,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Op,this.blendDst=zp,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Ao&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Op&&(i.blendSrc=this.blendSrc),this.blendDst!==zp&&(i.blendDst=this.blendDst),this.blendEquation!==ra&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}if(t){const s=a(e.textures),c=a(e.images);s.length>0&&(i.textures=s),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uw extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new B,Ac=new ht;class mr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ac.fromBufferAttribute(this,t),Ac.applyMatrix3(e),this.setXY(t,Ac.x,Ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}}class cw extends mr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fw extends mr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class an extends mr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xI=0;const Ar=new Gt,qh=new jn,Qa=new B,hr=new Dr,_l=new Dr,xn=new B;class Bn extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xI++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rw(e)?fw:cw)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ar.makeRotationFromQuaternion(e),this.applyMatrix4(Ar),this}rotateX(e){return Ar.makeRotationX(e),this.applyMatrix4(Ar),this}rotateY(e){return Ar.makeRotationY(e),this.applyMatrix4(Ar),this}rotateZ(e){return Ar.makeRotationZ(e),this.applyMatrix4(Ar),this}translate(e,t,i){return Ar.makeTranslation(e,t,i),this.applyMatrix4(Ar),this}scale(e,t,i){return Ar.makeScale(e,t,i),this.applyMatrix4(Ar),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qa).negate(),this.translate(Qa.x,Qa.y,Qa.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];hr.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,hr.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,hr.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(hr.min),this.boundingBox.expandByPoint(hr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(hr.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const u=t[s];_l.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(hr.min,_l.min),hr.expandByPoint(xn),xn.addVectors(hr.max,_l.max),hr.expandByPoint(xn)):(hr.expandByPoint(_l.min),hr.expandByPoint(_l.max))}hr.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)xn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(xn));if(t)for(let s=0,c=t.length;s<c;s++){const u=t[s],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)xn.fromBufferAttribute(u,h),d&&(Qa.fromBufferAttribute(e,h),xn.add(Qa)),a=Math.max(a,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,c=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mr(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let N=0;N<u;N++)h[N]=new B,p[N]=new B;const v=new B,g=new B,S=new B,E=new ht,w=new ht,x=new ht,_=new B,C=new B;function M(N,ae,ne){v.fromArray(a,N*3),g.fromArray(a,ae*3),S.fromArray(a,ne*3),E.fromArray(c,N*2),w.fromArray(c,ae*2),x.fromArray(c,ne*2),g.sub(v),S.sub(v),w.sub(E),x.sub(E);const pe=1/(w.x*x.y-x.x*w.y);isFinite(pe)&&(_.copy(g).multiplyScalar(x.y).addScaledVector(S,-w.y).multiplyScalar(pe),C.copy(S).multiplyScalar(w.x).addScaledVector(g,-x.x).multiplyScalar(pe),h[N].add(_),h[ae].add(_),h[ne].add(_),p[N].add(C),p[ae].add(C),p[ne].add(C))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let N=0,ae=R.length;N<ae;++N){const ne=R[N],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)M(i[Q+0],i[Q+1],i[Q+2])}const I=new B,O=new B,F=new B,de=new B;function b(N){F.fromArray(s,N*3),de.copy(F);const ae=h[N];I.copy(ae),I.sub(F.multiplyScalar(F.dot(ae))).normalize(),O.crossVectors(de,ae);const pe=O.dot(p[N])<0?-1:1;d[N*4]=I.x,d[N*4+1]=I.y,d[N*4+2]=I.z,d[N*4+3]=pe}for(let N=0,ae=R.length;N<ae;++N){const ne=R[N],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)b(i[Q+0]),b(i[Q+1]),b(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const a=new B,s=new B,c=new B,u=new B,d=new B,h=new B,p=new B,v=new B;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),w=e.getX(g+1),x=e.getX(g+2);a.fromBufferAttribute(t,E),s.fromBufferAttribute(t,w),c.fromBufferAttribute(t,x),p.subVectors(c,s),v.subVectors(a,s),p.cross(v),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),u.add(p),d.add(p),h.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,s),v.subVectors(a,s),p.cross(v),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,g=new h.constructor(d.length*p);let S=0,E=0;for(let w=0,x=d.length;w<x;w++){u.isInterleavedBufferAttribute?S=d[w]*u.data.stride+u.offset:S=d[w]*p;for(let _=0;_<p;_++)g[E++]=h[S++]}return new mr(g,p,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,i);t.setAttribute(u,h)}const s=this.morphAttributes;for(const u in s){const d=[],h=s[u];for(let p=0,v=h.length;p<v;p++){const g=h[p],S=e(g,i);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const S=h[v];p.push(S.toJSON(e.data))}p.length>0&&(a[d]=p,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],v=s[h];for(let g=0,S=v.length;g<S;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ey=new Gt,Zo=new qm,Tc=new ui,ty=new B,es=new B,ts=new B,ns=new B,Kh=new B,bc=new B,Cc=new ht,Rc=new ht,Lc=new ht,ny=new B,ry=new B,iy=new B,Pc=new B,Dc=new B;class Yr extends jn{constructor(e=new Bn,t=new uw){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(s&&u){bc.set(0,0,0);for(let d=0,h=s.length;d<h;d++){const p=u[d],v=s[d];p!==0&&(Kh.fromBufferAttribute(v,e),c?bc.addScaledVector(Kh,p):bc.addScaledVector(Kh.sub(t),p))}t.add(bc)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),Zo.copy(e.ray).recast(e.near),!(Tc.containsPoint(Zo.origin)===!1&&(Zo.intersectSphere(Tc,ty)===null||Zo.origin.distanceToSquared(ty)>(e.far-e.near)**2))&&(ey.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(ey),!(i.boundingBox!==null&&Zo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}_computeIntersections(e,t,i){let a;const s=this.geometry,c=this.material,u=s.index,d=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,v=s.attributes.normal,g=s.groups,S=s.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,w=g.length;E<w;E++){const x=g[E],_=c[x.materialIndex],C=Math.max(x.start,S.start),M=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let R=C,I=M;R<I;R+=3){const O=u.getX(R),F=u.getX(R+1),de=u.getX(R+2);a=Ic(this,_,e,i,h,p,v,O,F,de),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let x=E,_=w;x<_;x+=3){const C=u.getX(x),M=u.getX(x+1),R=u.getX(x+2);a=Ic(this,c,e,i,h,p,v,C,M,R),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=g.length;E<w;E++){const x=g[E],_=c[x.materialIndex],C=Math.max(x.start,S.start),M=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=C,I=M;R<I;R+=3){const O=R,F=R+1,de=R+2;a=Ic(this,_,e,i,h,p,v,O,F,de),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let x=E,_=w;x<_;x+=3){const C=x,M=x+1,R=x+2;a=Ic(this,c,e,i,h,p,v,C,M,R),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function SI(n,e,t,i,a,s,c,u){let d;if(e.side===or?d=i.intersectTriangle(c,s,a,!0,u):d=i.intersectTriangle(a,s,c,e.side===Ao,u),d===null)return null;Dc.copy(u),Dc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Dc);return h<t.near||h>t.far?null:{distance:h,point:Dc.clone(),object:n}}function Ic(n,e,t,i,a,s,c,u,d,h){n.getVertexPosition(u,es),n.getVertexPosition(d,ts),n.getVertexPosition(h,ns);const p=SI(n,e,t,i,es,ts,ns,Pc);if(p){a&&(Cc.fromBufferAttribute(a,u),Rc.fromBufferAttribute(a,d),Lc.fromBufferAttribute(a,h),p.uv=Xr.getInterpolation(Pc,es,ts,ns,Cc,Rc,Lc,new ht)),s&&(Cc.fromBufferAttribute(s,u),Rc.fromBufferAttribute(s,d),Lc.fromBufferAttribute(s,h),p.uv1=Xr.getInterpolation(Pc,es,ts,ns,Cc,Rc,Lc,new ht),p.uv2=p.uv1),c&&(ny.fromBufferAttribute(c,u),ry.fromBufferAttribute(c,d),iy.fromBufferAttribute(c,h),p.normal=Xr.getInterpolation(Pc,es,ts,ns,ny,ry,iy,new B),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:d,c:h,normal:new B,materialIndex:0};Xr.getNormal(es,ts,ns,v.normal),p.face=v}return p}class Ql extends Bn{constructor(e=1,t=1,i=1,a=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:c};const u=this;a=Math.floor(a),s=Math.floor(s),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,i,t,e,c,s,0),E("z","y","x",1,-1,i,t,-e,c,s,1),E("x","z","y",1,1,e,i,t,a,c,2),E("x","z","y",1,-1,e,i,-t,a,c,3),E("x","y","z",1,-1,e,t,i,a,s,4),E("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(d),this.setAttribute("position",new an(h,3)),this.setAttribute("normal",new an(p,3)),this.setAttribute("uv",new an(v,2));function E(w,x,_,C,M,R,I,O,F,de,b){const N=R/F,ae=I/de,ne=R/2,pe=I/2,H=O/2,Q=F+1,se=de+1;let re=0,X=0;const ie=new B;for(let $=0;$<se;$++){const L=$*ae-pe;for(let z=0;z<Q;z++){const W=z*N-ne;ie[w]=W*C,ie[x]=L*M,ie[_]=H,h.push(ie.x,ie.y,ie.z),ie[w]=0,ie[x]=0,ie[_]=O>0?1:-1,p.push(ie.x,ie.y,ie.z),v.push(z/F),v.push(1-$/de),re+=1}}for(let $=0;$<de;$++)for(let L=0;L<F;L++){const z=g+L+Q*$,W=g+L+Q*($+1),q=g+(L+1)+Q*($+1),ee=g+(L+1)+Q*$;d.push(z,W,ee),d.push(W,q,ee),X+=6}u.addGroup(S,X,b),S+=X,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Xn(n){const e={};for(let t=0;t<n.length;t++){const i=Ms(n[t]);for(const a in i)e[a]=i[a]}return e}function EI(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dw(n){return n.getRenderTarget()===null?n.outputColorSpace:Ot.workingColorSpace}const Km={clone:Ms,merge:Xn};var wI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class To extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wI,this.fragmentShader=MI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=EI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hw extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pr extends hw{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bl*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;s+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,is=1;class AI extends jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new pr(rs,is,e,t);a.layers=this.layers,this.add(a);const s=new pr(rs,is,e,t);s.layers=this.layers,this.add(s);const c=new pr(rs,is,e,t);c.layers=this.layers,this.add(c);const u=new pr(rs,is,e,t);u.layers=this.layers,this.add(u);const d=new pr(rs,is,e,t);d.layers=this.layers,this.add(d);const h=new pr(rs,is,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,c,u,d]=t;for(const h of t)this.remove(h);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,u,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,d),e.setRenderTarget(i,4,a),e.render(t,h),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(v,g,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class pw extends ar{constructor(e,t,i,a,s,c,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,i,a,s,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TI extends da{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Rl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fa?bn:Cr),this.texture=new pw(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ql(5,5,5),s=new To({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:or,blending:yo});s.uniforms.tEquirect.value=t;const c=new Yr(a,s),u=t.minFilter;return t.minFilter===Ul&&(t.minFilter=Tr),new AI(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(s)}}const Zh=new B,bI=new B,CI=new Et;class fo{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Zh.subVectors(i,t).cross(bI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||CI.getNormalMatrix(e),a=this.coplanarPoint(Zh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jo=new ui,Uc=new B;class Pf{constructor(e=new fo,t=new fo,i=new fo,a=new fo,s=new fo,c=new fo){this.planes=[e,t,i,a,s,c]}set(e,t,i,a,s,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(s),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,a=e.elements,s=a[0],c=a[1],u=a[2],d=a[3],h=a[4],p=a[5],v=a[6],g=a[7],S=a[8],E=a[9],w=a[10],x=a[11],_=a[12],C=a[13],M=a[14],R=a[15];if(i[0].setComponents(d-s,g-h,x-S,R-_).normalize(),i[1].setComponents(d+s,g+h,x+S,R+_).normalize(),i[2].setComponents(d+c,g+p,x+E,R+C).normalize(),i[3].setComponents(d-c,g-p,x-E,R-C).normalize(),i[4].setComponents(d-u,g-v,x-w,R-M).normalize(),t===ai)i[5].setComponents(d+u,g+v,x+w,R+M).normalize();else if(t===Fl)i[5].setComponents(u,v,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jo)}intersectsSprite(e){return Jo.center.set(0,0,0),Jo.radius=.7071067811865476,Jo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jo)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Uc.x=a.normal.x>0?e.max.x:e.min.x,Uc.y=a.normal.y>0?e.max.y:e.min.y,Uc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mw(){let n=null,e=!1,t=null,i=null;function a(s,c){t(s,c),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function RI(n,e){const t=e.isWebGL2,i=new WeakMap;function a(h,p){const v=h.array,g=h.usage,S=v.byteLength,E=n.createBuffer();n.bindBuffer(p,E),n.bufferData(p,v,g),h.onUploadCallback();let w;if(v instanceof Float32Array)w=n.FLOAT;else if(v instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)w=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=n.UNSIGNED_SHORT;else if(v instanceof Int16Array)w=n.SHORT;else if(v instanceof Uint32Array)w=n.UNSIGNED_INT;else if(v instanceof Int32Array)w=n.INT;else if(v instanceof Int8Array)w=n.BYTE;else if(v instanceof Uint8Array)w=n.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)w=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:w,bytesPerElement:v.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,p,v){const g=p.array,S=p._updateRange,E=p.updateRanges;if(n.bindBuffer(v,h),S.count===-1&&E.length===0&&n.bufferSubData(v,0,g),E.length!==0){for(let w=0,x=E.length;w<x;w++){const _=E[w];t?n.bufferSubData(v,_.start*g.BYTES_PER_ELEMENT,g,_.start,_.count):n.bufferSubData(v,_.start*g.BYTES_PER_ELEMENT,g.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}S.count!==-1&&(t?n.bufferSubData(v,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count):n.bufferSubData(v,S.offset*g.BYTES_PER_ELEMENT,g.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(n.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const g=i.get(h);(!g||g.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const v=i.get(h);if(v===void 0)i.set(h,a(h,p));else if(v.version<h.version){if(v.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,h,p),v.version=h.version}}return{get:c,remove:u,update:d}}class Zm extends Bn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,c=t/2,u=Math.floor(i),d=Math.floor(a),h=u+1,p=d+1,v=e/u,g=t/d,S=[],E=[],w=[],x=[];for(let _=0;_<p;_++){const C=_*g-c;for(let M=0;M<h;M++){const R=M*v-s;E.push(R,-C,0),w.push(0,0,1),x.push(M/u),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let C=0;C<u;C++){const M=C+h*_,R=C+h*(_+1),I=C+1+h*(_+1),O=C+1+h*_;S.push(M,R,O),S.push(R,I,O)}this.setIndex(S),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(w,3)),this.setAttribute("uv",new an(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zm(e.width,e.height,e.widthSegments,e.heightSegments)}}var LI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PI=`#ifdef USE_ALPHAHASH
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
#endif`,DI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,II=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UI=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,NI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FI=`#ifdef USE_AOMAP
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
#endif`,OI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zI=`#ifdef USE_BATCHING
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
#endif`,kI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,BI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VI=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GI=`#ifdef USE_IRIDESCENCE
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
#endif`,WI=`#ifdef USE_BUMPMAP
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
#endif`,$I=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,JI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,QI=`#define PI 3.141592653589793
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
} // validated`,eU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tU=`vec3 transformedNormal = objectNormal;
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
#endif`,nU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aU="gl_FragColor = linearToOutputTexel( gl_FragColor );",sU=`
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
}`,lU=`#ifdef USE_ENVMAP
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
#endif`,uU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cU=`#ifdef USE_ENVMAP
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
#endif`,fU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dU=`#ifdef USE_ENVMAP
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
#endif`,hU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gU=`#ifdef USE_GRADIENTMAP
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
}`,_U=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EU=`uniform bool receiveShadow;
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
#endif`,wU=`#ifdef USE_ENVMAP
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
#endif`,MU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CU=`PhysicalMaterial material;
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
#endif`,RU=`struct PhysicalMaterial {
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
}`,LU=`
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
#endif`,PU=`#if defined( RE_IndirectDiffuse )
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
#endif`,DU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,FU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,OU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BU=`#if defined( USE_POINTS_UV )
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
#endif`,HU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GU=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WU=`#ifdef USE_MORPHNORMALS
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
#endif`,$U=`#ifdef USE_MORPHTARGETS
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
#endif`,XU=`#ifdef USE_MORPHTARGETS
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
#endif`,jU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JU=`#ifdef USE_NORMALMAP
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
#endif`,QU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pN=`float getShadowMask() {
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
}`,mN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vN=`#ifdef USE_SKINNING
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
#endif`,gN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_N=`#ifdef USE_SKINNING
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
#endif`,yN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wN=`#ifdef USE_TRANSMISSION
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
#endif`,MN=`#ifdef USE_TRANSMISSION
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
#endif`,AN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LN=`uniform sampler2D t2D;
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
}`,PN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NN=`#include <common>
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
}`,FN=`#if DEPTH_PACKING == 3200
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
}`,ON=`#define DISTANCE
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
}`,zN=`#define DISTANCE
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
}`,kN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HN=`uniform float scale;
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
}`,VN=`uniform vec3 diffuse;
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
}`,GN=`#include <common>
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
}`,WN=`uniform vec3 diffuse;
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
}`,$N=`#define LAMBERT
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
}`,XN=`#define LAMBERT
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
}`,jN=`#define MATCAP
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
}`,YN=`#define MATCAP
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
}`,qN=`#define NORMAL
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
}`,KN=`#define NORMAL
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
}`,ZN=`#define PHONG
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
}`,JN=`#define PHONG
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
}`,QN=`#define STANDARD
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
}`,eF=`#define STANDARD
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
}`,tF=`#define TOON
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
}`,nF=`#define TOON
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
}`,rF=`uniform float size;
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
}`,iF=`uniform vec3 diffuse;
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
}`,oF=`#include <common>
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
}`,aF=`uniform vec3 color;
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
}`,sF=`uniform float rotation;
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
}`,lF=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:LI,alphahash_pars_fragment:PI,alphamap_fragment:DI,alphamap_pars_fragment:II,alphatest_fragment:UI,alphatest_pars_fragment:NI,aomap_fragment:FI,aomap_pars_fragment:OI,batching_pars_vertex:zI,batching_vertex:kI,begin_vertex:BI,beginnormal_vertex:HI,bsdfs:VI,iridescence_fragment:GI,bumpmap_pars_fragment:WI,clipping_planes_fragment:$I,clipping_planes_pars_fragment:XI,clipping_planes_pars_vertex:jI,clipping_planes_vertex:YI,color_fragment:qI,color_pars_fragment:KI,color_pars_vertex:ZI,color_vertex:JI,common:QI,cube_uv_reflection_fragment:eU,defaultnormal_vertex:tU,displacementmap_pars_vertex:nU,displacementmap_vertex:rU,emissivemap_fragment:iU,emissivemap_pars_fragment:oU,colorspace_fragment:aU,colorspace_pars_fragment:sU,envmap_fragment:lU,envmap_common_pars_fragment:uU,envmap_pars_fragment:cU,envmap_pars_vertex:fU,envmap_physical_pars_fragment:wU,envmap_vertex:dU,fog_vertex:hU,fog_pars_vertex:pU,fog_fragment:mU,fog_pars_fragment:vU,gradientmap_pars_fragment:gU,lightmap_fragment:_U,lightmap_pars_fragment:yU,lights_lambert_fragment:xU,lights_lambert_pars_fragment:SU,lights_pars_begin:EU,lights_toon_fragment:MU,lights_toon_pars_fragment:AU,lights_phong_fragment:TU,lights_phong_pars_fragment:bU,lights_physical_fragment:CU,lights_physical_pars_fragment:RU,lights_fragment_begin:LU,lights_fragment_maps:PU,lights_fragment_end:DU,logdepthbuf_fragment:IU,logdepthbuf_pars_fragment:UU,logdepthbuf_pars_vertex:NU,logdepthbuf_vertex:FU,map_fragment:OU,map_pars_fragment:zU,map_particle_fragment:kU,map_particle_pars_fragment:BU,metalnessmap_fragment:HU,metalnessmap_pars_fragment:VU,morphcolor_vertex:GU,morphnormal_vertex:WU,morphtarget_pars_vertex:$U,morphtarget_vertex:XU,normal_fragment_begin:jU,normal_fragment_maps:YU,normal_pars_fragment:qU,normal_pars_vertex:KU,normal_vertex:ZU,normalmap_pars_fragment:JU,clearcoat_normal_fragment_begin:QU,clearcoat_normal_fragment_maps:eN,clearcoat_pars_fragment:tN,iridescence_pars_fragment:nN,opaque_fragment:rN,packing:iN,premultiplied_alpha_fragment:oN,project_vertex:aN,dithering_fragment:sN,dithering_pars_fragment:lN,roughnessmap_fragment:uN,roughnessmap_pars_fragment:cN,shadowmap_pars_fragment:fN,shadowmap_pars_vertex:dN,shadowmap_vertex:hN,shadowmask_pars_fragment:pN,skinbase_vertex:mN,skinning_pars_vertex:vN,skinning_vertex:gN,skinnormal_vertex:_N,specularmap_fragment:yN,specularmap_pars_fragment:xN,tonemapping_fragment:SN,tonemapping_pars_fragment:EN,transmission_fragment:wN,transmission_pars_fragment:MN,uv_pars_fragment:AN,uv_pars_vertex:TN,uv_vertex:bN,worldpos_vertex:CN,background_vert:RN,background_frag:LN,backgroundCube_vert:PN,backgroundCube_frag:DN,cube_vert:IN,cube_frag:UN,depth_vert:NN,depth_frag:FN,distanceRGBA_vert:ON,distanceRGBA_frag:zN,equirect_vert:kN,equirect_frag:BN,linedashed_vert:HN,linedashed_frag:VN,meshbasic_vert:GN,meshbasic_frag:WN,meshlambert_vert:$N,meshlambert_frag:XN,meshmatcap_vert:jN,meshmatcap_frag:YN,meshnormal_vert:qN,meshnormal_frag:KN,meshphong_vert:ZN,meshphong_frag:JN,meshphysical_vert:QN,meshphysical_frag:eF,meshtoon_vert:tF,meshtoon_frag:nF,points_vert:rF,points_frag:iF,shadow_vert:oF,shadow_frag:aF,sprite_vert:sF,sprite_frag:lF},Fe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},rr={basic:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Xn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Xn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Xn([Fe.points,Fe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Xn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Xn([Fe.common,Fe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Xn([Fe.sprite,Fe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Xn([Fe.common,Fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Xn([Fe.lights,Fe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};rr.physical={uniforms:Xn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Nc={r:0,b:0,g:0};function uF(n,e,t,i,a,s,c){const u=new nt(0);let d=s===!0?0:1,h,p,v=null,g=0,S=null;function E(x,_){let C=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?w(u,d):M&&M.isColor&&(w(M,1),C=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Rf)?(p===void 0&&(p=new Yr(new Ql(1,1,1),new To({name:"BackgroundCubeMaterial",uniforms:Ms(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(M.colorSpace)!==Xt,(v!==M||g!==M.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,v=M,g=M.version,S=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new Yr(new Zm(2,2),new To({name:"BackgroundMaterial",uniforms:Ms(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:Ao,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Ot.getTransfer(M.colorSpace)!==Xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(v!==M||g!==M.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,v=M,g=M.version,S=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function w(x,_){x.getRGB(Nc,dw(n)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,_,c)}return{getClearColor:function(){return u},setClearColor:function(x,_=1){u.set(x),d=_,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,w(u,d)},render:E}}function cF(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||s!==null,u={},d=x(null);let h=d,p=!1;function v(H,Q,se,re,X){let ie=!1;if(c){const $=w(re,se,Q);h!==$&&(h=$,S(h.object)),ie=_(H,re,se,X),ie&&C(H,re,se,X)}else{const $=Q.wireframe===!0;(h.geometry!==re.id||h.program!==se.id||h.wireframe!==$)&&(h.geometry=re.id,h.program=se.id,h.wireframe=$,ie=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(ie||p)&&(p=!1,de(H,Q,se,re),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function g(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function S(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function E(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function w(H,Q,se){const re=se.wireframe===!0;let X=u[H.id];X===void 0&&(X={},u[H.id]=X);let ie=X[Q.id];ie===void 0&&(ie={},X[Q.id]=ie);let $=ie[re];return $===void 0&&($=x(g()),ie[re]=$),$}function x(H){const Q=[],se=[],re=[];for(let X=0;X<a;X++)Q[X]=0,se[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:se,attributeDivisors:re,object:H,attributes:{},index:null}}function _(H,Q,se,re){const X=h.attributes,ie=Q.attributes;let $=0;const L=se.getAttributes();for(const z in L)if(L[z].location>=0){const q=X[z];let ee=ie[z];if(ee===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),q===void 0||q.attribute!==ee||ee&&q.data!==ee.data)return!0;$++}return h.attributesNum!==$||h.index!==re}function C(H,Q,se,re){const X={},ie=Q.attributes;let $=0;const L=se.getAttributes();for(const z in L)if(L[z].location>=0){let q=ie[z];q===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(q=H.instanceColor));const ee={};ee.attribute=q,q&&q.data&&(ee.data=q.data),X[z]=ee,$++}h.attributes=X,h.attributesNum=$,h.index=re}function M(){const H=h.newAttributes;for(let Q=0,se=H.length;Q<se;Q++)H[Q]=0}function R(H){I(H,0)}function I(H,Q){const se=h.newAttributes,re=h.enabledAttributes,X=h.attributeDivisors;se[H]=1,re[H]===0&&(n.enableVertexAttribArray(H),re[H]=1),X[H]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Q),X[H]=Q)}function O(){const H=h.newAttributes,Q=h.enabledAttributes;for(let se=0,re=Q.length;se<re;se++)Q[se]!==H[se]&&(n.disableVertexAttribArray(se),Q[se]=0)}function F(H,Q,se,re,X,ie,$){$===!0?n.vertexAttribIPointer(H,Q,se,X,ie):n.vertexAttribPointer(H,Q,se,re,X,ie)}function de(H,Q,se,re){if(i.isWebGL2===!1&&(H.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=re.attributes,ie=se.getAttributes(),$=Q.defaultAttributeValues;for(const L in ie){const z=ie[L];if(z.location>=0){let W=X[L];if(W===void 0&&(L==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),L==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),W!==void 0){const q=W.normalized,ee=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const _e=Z.buffer,ve=Z.type,be=Z.bytesPerElement,Oe=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===XE);if(W.isInterleavedBufferAttribute){const ze=W.data,j=ze.stride,Dt=W.offset;if(ze.isInstancedInterleavedBuffer){for(let He=0;He<z.locationSize;He++)I(z.location+He,ze.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let He=0;He<z.locationSize;He++)R(z.location+He);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let He=0;He<z.locationSize;He++)F(z.location+He,ee/z.locationSize,ve,q,j*be,(Dt+ee/z.locationSize*He)*be,Oe)}else{if(W.isInstancedBufferAttribute){for(let ze=0;ze<z.locationSize;ze++)I(z.location+ze,W.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ze=0;ze<z.locationSize;ze++)R(z.location+ze);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ze=0;ze<z.locationSize;ze++)F(z.location+ze,ee/z.locationSize,ve,q,ee*be,ee/z.locationSize*ze*be,Oe)}}else if($!==void 0){const q=$[L];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(z.location,q);break;case 3:n.vertexAttrib3fv(z.location,q);break;case 4:n.vertexAttrib4fv(z.location,q);break;default:n.vertexAttrib1fv(z.location,q)}}}}O()}function b(){ne();for(const H in u){const Q=u[H];for(const se in Q){const re=Q[se];for(const X in re)E(re[X].object),delete re[X];delete Q[se]}delete u[H]}}function N(H){if(u[H.id]===void 0)return;const Q=u[H.id];for(const se in Q){const re=Q[se];for(const X in re)E(re[X].object),delete re[X];delete Q[se]}delete u[H.id]}function ae(H){for(const Q in u){const se=u[Q];if(se[H.id]===void 0)continue;const re=se[H.id];for(const X in re)E(re[X].object),delete re[X];delete se[H.id]}}function ne(){pe(),p=!0,h!==d&&(h=d,S(h.object))}function pe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:ne,resetDefaultState:pe,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfProgram:ae,initAttributes:M,enableAttribute:R,disableUnusedAttributes:O}}function fF(n,e,t,i){const a=i.isWebGL2;let s;function c(p){s=p}function u(p,v){n.drawArrays(s,p,v),t.update(v,s,1)}function d(p,v,g){if(g===0)return;let S,E;if(a)S=n,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](s,p,v,g),t.update(v,s,g)}function h(p,v,g){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g;E++)this.render(p[E],v[E]);else{S.multiDrawArraysWEBGL(s,p,0,v,0,g);let E=0;for(let w=0;w<g;w++)E+=v[w];t.update(E,s,1)}}this.setMode=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function dF(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=s(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),w=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,R=c||e.has("OES_texture_float"),I=M&&R,O=c?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:s,precision:u,logarithmicDepthBuffer:p,maxTextures:v,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:I,maxSamples:O}}function hF(n){const e=this;let t=null,i=0,a=!1,s=!1;const c=new fo,u=new Et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||i!==0||a;return a=g,i=v.length,S},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,_=n.get(v);if(!a||E===null||E.length===0||s&&!x)s?p(null):h();else{const C=s?0:i,M=C*4;let R=_.clippingState||null;d.value=R,R=p(E,g,M,S);for(let I=0;I!==M;++I)R[I]=t[I];_.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,g,S,E){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=d.value,E!==!0||x===null){const _=S+w*4,C=g.matrixWorldInverse;u.getNormalMatrix(C),(x===null||x.length<_)&&(x=new Float32Array(_));for(let M=0,R=S;M!==w;++M,R+=4)c.copy(v[M]).applyMatrix4(C,u),c.normal.toArray(x,R),x[R+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function pF(n){let e=new WeakMap;function t(c,u){return u===kp?c.mapping=Ss:u===Bp&&(c.mapping=Es),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===kp||u===Bp)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new TI(d.height/2);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mF extends hw{constructor(e=-1,t=1,i=1,a=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,c=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,c=s+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ls=4,oy=[.125,.215,.35,.446,.526,.582],ia=20,Jh=new mF,ay=new nt;let Qh=null,ep=0,tp=0;const ta=(1+Math.sqrt(5))/2,os=1/ta,sy=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ta,os),new B(0,ta,-os),new B(os,0,ta),new B(-os,0,ta),new B(ta,os,0),new B(-ta,os,0)];class ly{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Qh=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,ep,tp),e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tr,minFilter:Tr,generateMipmaps:!1,type:Nl,format:br,colorSpace:Ii,depthBuffer:!1},a=uy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uy(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vF(s)),this._blurMaterial=gF(s,e,t)}return a}_compileMaterial(e){const t=new Yr(this._lodPlanes[0],e);this._renderer.compile(t,Jh)}_sceneToCubeUV(e,t,i,a){const u=new pr(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,g=p.toneMapping;p.getClearColor(ay),p.toneMapping=xo,p.autoClear=!1;const S=new uw({name:"PMREM.Background",side:or,depthWrite:!1,depthTest:!1}),E=new Yr(new Ql,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(ay),w=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(u.up.set(0,d[_],0),u.lookAt(h[_],0,0)):C===1?(u.up.set(0,0,d[_]),u.lookAt(0,h[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,h[_]));const M=this._cubeSize;Fc(a,C*M,_>2?M:0,M,M),p.setRenderTarget(a),w&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=v,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ss||e.mapping===Es;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=fy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cy());const s=a?this._cubemapMaterial:this._equirectMaterial,c=new Yr(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const d=this._cubeSize;Fc(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Jh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=sy[(a-1)%sy.length];this._blur(e,a-1,a,s,c)}t.autoClear=i}_blur(e,t,i,a,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",s),this._halfBlur(c,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,v=new Yr(this._lodPlanes[a],h),g=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*ia-1),w=s/E,x=isFinite(s)?1+Math.floor(p*w):ia;x>ia&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ia}`);const _=[];let C=0;for(let F=0;F<ia;++F){const de=F/w,b=Math.exp(-de*de/2);_.push(b),F===0?C+=b:F<x&&(C+=2*b)}for(let F=0;F<_.length;F++)_[F]=_[F]/C;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=E,g.mipInt.value=M-i;const R=this._sizeLods[a],I=3*R*(a>M-ls?a-M+ls:0),O=4*(this._cubeSize-R);Fc(t,I,O,3*R,2*R),d.setRenderTarget(t),d.render(v,Jh)}}function vF(n){const e=[],t=[],i=[];let a=n;const s=n-ls+1+oy.length;for(let c=0;c<s;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>n-ls?d=oy[c-n+ls-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],S=6,E=6,w=3,x=2,_=1,C=new Float32Array(w*E*S),M=new Float32Array(x*E*S),R=new Float32Array(_*E*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,de=O>2?0:-1,b=[F,de,0,F+2/3,de,0,F+2/3,de+1,0,F,de,0,F+2/3,de+1,0,F,de+1,0];C.set(b,w*E*O),M.set(g,x*E*O);const N=[O,O,O,O,O,O];R.set(N,_*E*O)}const I=new Bn;I.setAttribute("position",new mr(C,w)),I.setAttribute("uv",new mr(M,x)),I.setAttribute("faceIndex",new mr(R,_)),e.push(I),a>ls&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uy(n,e,t){const i=new da(n,e,t);return i.texture.mapping=Rf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fc(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function gF(n,e,t){const i=new Float32Array(ia),a=new B(0,1,0);return new To({name:"SphericalGaussianBlur",defines:{n:ia,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jm(),fragmentShader:`

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
		`,blending:yo,depthTest:!1,depthWrite:!1})}function cy(){return new To({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jm(),fragmentShader:`

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
		`,blending:yo,depthTest:!1,depthWrite:!1})}function fy(){return new To({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yo,depthTest:!1,depthWrite:!1})}function Jm(){return`

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
	`}function _F(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===kp||d===Bp,p=d===Ss||d===Es;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let v=e.get(u);return t===null&&(t=new ly(n)),v=h?t.fromEquirectangular(u,v):t.fromCubemap(u,v),e.set(u,v),v.texture}else{if(e.has(u))return e.get(u).texture;{const v=u.image;if(h&&v&&v.height>0||p&&v&&a(v)){t===null&&(t=new ly(n));const g=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",s),g.texture}else return null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function s(u){const d=u.target;d.removeEventListener("dispose",s);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function yF(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function xF(n,e,t,i){const a={},s=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const w=g.morphAttributes[E];for(let x=0,_=w.length;x<_;x++)e.remove(w[x])}g.removeEventListener("dispose",c),delete a[g.id];const S=s.get(g);S&&(e.remove(S),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const E in g)e.update(g[E],n.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const w=S[E];for(let x=0,_=w.length;x<_;x++)e.update(w[x],n.ARRAY_BUFFER)}}function h(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const C=S.array;w=S.version;for(let M=0,R=C.length;M<R;M+=3){const I=C[M+0],O=C[M+1],F=C[M+2];g.push(I,O,O,F,F,I)}}else if(E!==void 0){const C=E.array;w=E.version;for(let M=0,R=C.length/3-1;M<R;M+=3){const I=M+0,O=M+1,F=M+2;g.push(I,O,O,F,F,I)}}else return;const x=new(rw(g)?fw:cw)(g,1);x.version=w;const _=s.get(v);_&&e.remove(_),s.set(v,x)}function p(v){const g=s.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&h(v)}else h(v);return s.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function SF(n,e,t,i){const a=i.isWebGL2;let s;function c(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function p(S,E){n.drawElements(s,E,u,S*d),t.update(E,s,1)}function v(S,E,w){if(w===0)return;let x,_;if(a)x=n,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](s,E,u,S*d,w),t.update(E,s,w)}function g(S,E,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<w;_++)this.render(S[_]/d,E[_]);else{x.multiDrawElementsWEBGL(s,E,0,u,S,0,w);let _=0;for(let C=0;C<w;C++)_+=E[C];t.update(_,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=v,this.renderMultiDraw=g}function EF(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(s/3);break;case n.LINES:t.lines+=u*(s/2);break;case n.LINE_STRIP:t.lines+=u*(s-1);break;case n.LINE_LOOP:t.lines+=u*s;break;case n.POINTS:t.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function wF(n,e){return n[0]-e[0]}function MF(n,e){return Math.abs(e[1])-Math.abs(n[1])}function AF(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,c=new zt,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function d(h,p,v){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=E!==void 0?E.length:0;let x=s.get(p);if(x===void 0||x.count!==w){let Q=function(){pe.dispose(),s.delete(p),p.removeEventListener("dispose",Q)};var S=Q;x!==void 0&&x.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,I=p.morphAttributes.color!==void 0,O=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],de=p.morphAttributes.color||[];let b=0;M===!0&&(b=1),R===!0&&(b=2),I===!0&&(b=3);let N=p.attributes.position.count*b,ae=1;N>e.maxTextureSize&&(ae=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const ne=new Float32Array(N*ae*4*w),pe=new aw(ne,N,ae,w);pe.type=Pi,pe.needsUpdate=!0;const H=b*4;for(let se=0;se<w;se++){const re=O[se],X=F[se],ie=de[se],$=N*ae*4*se;for(let L=0;L<re.count;L++){const z=L*H;M===!0&&(c.fromBufferAttribute(re,L),ne[$+z+0]=c.x,ne[$+z+1]=c.y,ne[$+z+2]=c.z,ne[$+z+3]=0),R===!0&&(c.fromBufferAttribute(X,L),ne[$+z+4]=c.x,ne[$+z+5]=c.y,ne[$+z+6]=c.z,ne[$+z+7]=0),I===!0&&(c.fromBufferAttribute(ie,L),ne[$+z+8]=c.x,ne[$+z+9]=c.y,ne[$+z+10]=c.z,ne[$+z+11]=ie.itemSize===4?c.w:1)}}x={count:w,texture:pe,size:new ht(N,ae)},s.set(p,x),p.addEventListener("dispose",Q)}let _=0;for(let M=0;M<g.length;M++)_+=g[M];const C=p.morphTargetsRelative?1:1-_;v.getUniforms().setValue(n,"morphTargetBaseInfluence",C),v.getUniforms().setValue(n,"morphTargetInfluences",g),v.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),v.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const E=g===void 0?0:g.length;let w=i[p.id];if(w===void 0||w.length!==E){w=[];for(let R=0;R<E;R++)w[R]=[R,0];i[p.id]=w}for(let R=0;R<E;R++){const I=w[R];I[0]=R,I[1]=g[R]}w.sort(MF);for(let R=0;R<8;R++)R<E&&w[R][1]?(u[R][0]=w[R][0],u[R][1]=w[R][1]):(u[R][0]=Number.MAX_SAFE_INTEGER,u[R][1]=0);u.sort(wF);const x=p.morphAttributes.position,_=p.morphAttributes.normal;let C=0;for(let R=0;R<8;R++){const I=u[R],O=I[0],F=I[1];O!==Number.MAX_SAFE_INTEGER&&F?(x&&p.getAttribute("morphTarget"+R)!==x[O]&&p.setAttribute("morphTarget"+R,x[O]),_&&p.getAttribute("morphNormal"+R)!==_[O]&&p.setAttribute("morphNormal"+R,_[O]),a[R]=F,C+=F):(x&&p.hasAttribute("morphTarget"+R)===!0&&p.deleteAttribute("morphTarget"+R),_&&p.hasAttribute("morphNormal"+R)===!0&&p.deleteAttribute("morphNormal"+R),a[R]=0)}const M=p.morphTargetsRelative?1:1-C;v.getUniforms().setValue(n,"morphTargetBaseInfluence",M),v.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:d}}function TF(n,e,t,i){let a=new WeakMap;function s(d){const h=i.render.frame,p=d.geometry,v=e.get(d,p);if(a.get(v)!==h&&(e.update(v),a.set(v,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return v}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:c}}class vw extends ar{constructor(e,t,i,a,s,c,u,d,h,p){if(p=p!==void 0?p:ca,p!==ca&&p!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ca&&(i=vo),i===void 0&&p===ws&&(i=ua),super(null,a,s,c,u,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Tn,this.minFilter=d!==void 0?d:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gw=new ar,_w=new vw(1,1);_w.compareFunction=tw;const yw=new aw,xw=new cI,Sw=new pw,dy=[],hy=[],py=new Float32Array(16),my=new Float32Array(9),vy=new Float32Array(4);function Rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=dy[a];if(s===void 0&&(s=new Float32Array(a),dy[a]=s),e!==0){i.toArray(s,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(s,u)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Df(n,e){let t=hy[e];t===void 0&&(t=new Int32Array(e),hy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bF(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function RF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function LF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function PF(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;vy.set(i),n.uniformMatrix2fv(this.addr,!1,vy),pn(t,i)}}function DF(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;my.set(i),n.uniformMatrix3fv(this.addr,!1,my),pn(t,i)}}function IF(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;py.set(i),n.uniformMatrix4fv(this.addr,!1,py),pn(t,i)}}function UF(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function FF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function OF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function zF(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function BF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function HF(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function VF(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?_w:gw;t.setTexture2D(e||s,a)}function GF(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||xw,a)}function WF(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Sw,a)}function $F(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||yw,a)}function XF(n){switch(n){case 5126:return bF;case 35664:return CF;case 35665:return RF;case 35666:return LF;case 35674:return PF;case 35675:return DF;case 35676:return IF;case 5124:case 35670:return UF;case 35667:case 35671:return NF;case 35668:case 35672:return FF;case 35669:case 35673:return OF;case 5125:return zF;case 36294:return kF;case 36295:return BF;case 36296:return HF;case 35678:case 36198:case 36298:case 36306:case 35682:return VF;case 35679:case 36299:case 36307:return GF;case 35680:case 36300:case 36308:case 36293:return WF;case 36289:case 36303:case 36311:case 36292:return $F}}function jF(n,e){n.uniform1fv(this.addr,e)}function YF(n,e){const t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function qF(n,e){const t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function KF(n,e){const t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function ZF(n,e){const t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function JF(n,e){const t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QF(n,e){const t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eO(n,e){n.uniform1iv(this.addr,e)}function tO(n,e){n.uniform2iv(this.addr,e)}function nO(n,e){n.uniform3iv(this.addr,e)}function rO(n,e){n.uniform4iv(this.addr,e)}function iO(n,e){n.uniform1uiv(this.addr,e)}function oO(n,e){n.uniform2uiv(this.addr,e)}function aO(n,e){n.uniform3uiv(this.addr,e)}function sO(n,e){n.uniform4uiv(this.addr,e)}function lO(n,e,t){const i=this.cache,a=e.length,s=Df(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||gw,s[c])}function uO(n,e,t){const i=this.cache,a=e.length,s=Df(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||xw,s[c])}function cO(n,e,t){const i=this.cache,a=e.length,s=Df(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Sw,s[c])}function fO(n,e,t){const i=this.cache,a=e.length,s=Df(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||yw,s[c])}function dO(n){switch(n){case 5126:return jF;case 35664:return YF;case 35665:return qF;case 35666:return KF;case 35674:return ZF;case 35675:return JF;case 35676:return QF;case 5124:case 35670:return eO;case 35667:case 35671:return tO;case 35668:case 35672:return nO;case 35669:case 35673:return rO;case 5125:return iO;case 36294:return oO;case 36295:return aO;case 36296:return sO;case 35678:case 36198:case 36298:case 36306:case 35682:return lO;case 35679:case 36299:case 36307:return uO;case 35680:case 36300:case 36308:case 36293:return cO;case 36289:case 36303:case 36311:case 36292:return fO}}class hO{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=XF(t.type)}}class pO{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dO(t.type)}}class mO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,c=a.length;s!==c;++s){const u=a[s];u.setValue(e,t[u.id],i)}}}const np=/(\w+)(\])?(\[|\.)?/g;function gy(n,e){n.seq.push(e),n.map[e.id]=e}function vO(n,e,t){const i=n.name,a=i.length;for(np.lastIndex=0;;){const s=np.exec(i),c=np.lastIndex;let u=s[1];const d=s[2]==="]",h=s[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){gy(t,h===void 0?new hO(u,n,e):new pO(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new mO(u),gy(t,v)),t=v}}}class Yc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);vO(s,c,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,c=t.length;s!==c;++s){const u=t[s],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function _y(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gO=37297;let _O=0;function yO(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=a;c<s;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function xO(n){const e=Ot.getPrimaries(Ot.workingColorSpace),t=Ot.getPrimaries(n);let i;switch(e===t?i="":e===tf&&t===ef?i="LinearDisplayP3ToLinearSRGB":e===ef&&t===tf&&(i="LinearSRGBToLinearDisplayP3"),n){case Ii:case Lf:return[i,"LinearTransferOETF"];case bn:case jm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+yO(n.getShaderSource(e),c)}else return a}function SO(n,e){const t=xO(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function EO(n,e){let t;switch(e){case S3:t="Linear";break;case E3:t="Reinhard";break;case w3:t="OptimizedCineon";break;case M3:t="ACESFilmic";break;case A3:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wO(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sl).join(`
`)}function MO(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AO(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),c=s.name;let u=1;s.type===n.FLOAT_MAT2&&(u=2),s.type===n.FLOAT_MAT3&&(u=3),s.type===n.FLOAT_MAT4&&(u=4),t[c]={type:s.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Sl(n){return n!==""}function xy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TO=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(n){return n.replace(TO,CO)}const bO=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function CO(n,e){let t=xt[e];if(t===void 0){const i=bO.get(e);if(i!==void 0)t=xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xp(t)}const RO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ey(n){return n.replace(RO,LO)}function LO(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function wy(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PO(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===WE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qD?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function DO(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ss:case Es:e="ENVMAP_TYPE_CUBE";break;case Rf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IO(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function UO(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $m:e="ENVMAP_BLENDING_MULTIPLY";break;case y3:e="ENVMAP_BLENDING_MIX";break;case x3:e="ENVMAP_BLENDING_ADD";break}return e}function NO(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function FO(n,e,t,i){const a=n.getContext(),s=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=PO(t),h=DO(t),p=IO(t),v=UO(t),g=NO(t),S=t.isWebGL2?"":wO(t),E=MO(s),w=a.createProgram();let x,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Sl).join(`
`),x.length>0&&(x+=`
`),_=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Sl).join(`
`),_.length>0&&(_+=`
`)):(x=[wy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),_=[S,wy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xo?"#define TONE_MAPPING":"",t.toneMapping!==xo?xt.tonemapping_pars_fragment:"",t.toneMapping!==xo?EO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,SO("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sl).join(`
`)),c=Xp(c),c=xy(c,t),c=Sy(c,t),u=Xp(u),u=xy(u,t),u=Sy(u,t),c=Ey(c),u=Ey(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===H0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===H0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=C+x+c,R=C+_+u,I=_y(a,a.VERTEX_SHADER,M),O=_y(a,a.FRAGMENT_SHADER,R);a.attachShader(w,I),a.attachShader(w,O),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(ae){if(n.debug.checkShaderErrors){const ne=a.getProgramInfoLog(w).trim(),pe=a.getShaderInfoLog(I).trim(),H=a.getShaderInfoLog(O).trim();let Q=!0,se=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,w,I,O);else{const re=yy(a,I,"vertex"),X=yy(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+re+`
`+X)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(pe===""||H==="")&&(se=!1);se&&(ae.diagnostics={runnable:Q,programLog:ne,vertexShader:{log:pe,prefix:x},fragmentShader:{log:H,prefix:_}})}a.deleteShader(I),a.deleteShader(O),de=new Yc(a,w),b=AO(a,w)}let de;this.getUniforms=function(){return de===void 0&&F(this),de};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(w,gO)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_O++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=O,this}let OO=0;class zO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kO(e),t.set(e,i)),i}}class kO{constructor(e){this.id=OO++,this.code=e,this.usedTimes=0}}function BO(n,e,t,i,a,s,c){const u=new sw,d=new zO,h=[],p=a.isWebGL2,v=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return b===0?"uv":`uv${b}`}function x(b,N,ae,ne,pe){const H=ne.fog,Q=pe.geometry,se=b.isMeshStandardMaterial?ne.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),X=re&&re.mapping===Rf?re.image.height:null,ie=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const $=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,L=$!==void 0?$.length:0;let z=0;Q.morphAttributes.position!==void 0&&(z=1),Q.morphAttributes.normal!==void 0&&(z=2),Q.morphAttributes.color!==void 0&&(z=3);let W,q,ee,Z;if(ie){const vn=rr[ie];W=vn.vertexShader,q=vn.fragmentShader}else W=b.vertexShader,q=b.fragmentShader,d.update(b),ee=d.getVertexShaderID(b),Z=d.getFragmentShaderID(b);const _e=n.getRenderTarget(),ve=pe.isInstancedMesh===!0,be=pe.isBatchedMesh===!0,Oe=!!b.map,ze=!!b.matcap,j=!!re,Dt=!!b.aoMap,He=!!b.lightMap,le=!!b.bumpMap,ue=!!b.normalMap,xe=!!b.displacementMap,ge=!!b.emissiveMap,Me=!!b.metalnessMap,we=!!b.roughnessMap,Ie=b.anisotropy>0,Ze=b.clearcoat>0,D=b.iridescence>0,T=b.sheen>0,Y=b.transmission>0,Ae=Ie&&!!b.anisotropyMap,ye=Ze&&!!b.clearcoatMap,Ce=Ze&&!!b.clearcoatNormalMap,qe=Ze&&!!b.clearcoatRoughnessMap,De=D&&!!b.iridescenceMap,Be=D&&!!b.iridescenceThicknessMap,lt=T&&!!b.sheenColorMap,At=T&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,It=!!b.specularColorMap,ft=!!b.specularIntensityMap,st=Y&&!!b.transmissionMap,et=Y&&!!b.thicknessMap,$e=!!b.gradientMap,_t=!!b.alphaMap,V=b.alphaTest>0,ke=!!b.alphaHash,Re=!!b.extensions,me=!!Q.attributes.uv1,Ue=!!Q.attributes.uv2,ot=!!Q.attributes.uv3;let wt=xo;return b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(wt=n.toneMapping),{isWebGL2:p,shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:q,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:be,instancing:ve,instancingColor:ve&&pe.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ii,map:Oe,matcap:ze,envMap:j,envMapMode:j&&re.mapping,envMapCubeUVHeight:X,aoMap:Dt,lightMap:He,bumpMap:le,normalMap:ue,displacementMap:g&&xe,emissiveMap:ge,normalMapObjectSpace:ue&&b.normalMapType===O3,normalMapTangentSpace:ue&&b.normalMapType===ew,metalnessMap:Me,roughnessMap:we,anisotropy:Ie,anisotropyMap:Ae,clearcoat:Ze,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:qe,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:Be,sheen:T,sheenColorMap:lt,sheenRoughnessMap:At,specularMap:Pe,specularColorMap:It,specularIntensityMap:ft,transmission:Y,transmissionMap:st,thicknessMap:et,gradientMap:$e,opaque:b.transparent===!1&&b.blending===ds,alphaMap:_t,alphaTest:V,alphaHash:ke,combine:b.combine,mapUv:Oe&&w(b.map.channel),aoMapUv:Dt&&w(b.aoMap.channel),lightMapUv:He&&w(b.lightMap.channel),bumpMapUv:le&&w(b.bumpMap.channel),normalMapUv:ue&&w(b.normalMap.channel),displacementMapUv:xe&&w(b.displacementMap.channel),emissiveMapUv:ge&&w(b.emissiveMap.channel),metalnessMapUv:Me&&w(b.metalnessMap.channel),roughnessMapUv:we&&w(b.roughnessMap.channel),anisotropyMapUv:Ae&&w(b.anisotropyMap.channel),clearcoatMapUv:ye&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:At&&w(b.sheenRoughnessMap.channel),specularMapUv:Pe&&w(b.specularMap.channel),specularColorMapUv:It&&w(b.specularColorMap.channel),specularIntensityMapUv:ft&&w(b.specularIntensityMap.channel),transmissionMapUv:st&&w(b.transmissionMap.channel),thicknessMapUv:et&&w(b.thicknessMap.channel),alphaMapUv:_t&&w(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ue||Ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:Ue,vertexUv3s:ot,pointsUvs:pe.isPoints===!0&&!!Q.attributes.uv&&(Oe||_t),fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:pe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:z,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&ae.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&Ot.getTransfer(b.map.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Li,flipSided:b.side===or,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Re&&b.extensions.derivatives===!0,extensionFragDepth:Re&&b.extensions.fragDepth===!0,extensionDrawBuffers:Re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function _(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ae in b.defines)N.push(ae),N.push(b.defines[ae]);return b.isRawShaderMaterial===!1&&(C(N,b),M(N,b),N.push(n.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function C(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function M(b,N){u.disableAll(),N.isWebGL2&&u.enable(0),N.supportsVertexTextures&&u.enable(1),N.instancing&&u.enable(2),N.instancingColor&&u.enable(3),N.matcap&&u.enable(4),N.envMap&&u.enable(5),N.normalMapObjectSpace&&u.enable(6),N.normalMapTangentSpace&&u.enable(7),N.clearcoat&&u.enable(8),N.iridescence&&u.enable(9),N.alphaTest&&u.enable(10),N.vertexColors&&u.enable(11),N.vertexAlphas&&u.enable(12),N.vertexUv1s&&u.enable(13),N.vertexUv2s&&u.enable(14),N.vertexUv3s&&u.enable(15),N.vertexTangents&&u.enable(16),N.anisotropy&&u.enable(17),N.alphaHash&&u.enable(18),N.batching&&u.enable(19),b.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.skinning&&u.enable(4),N.morphTargets&&u.enable(5),N.morphNormals&&u.enable(6),N.morphColors&&u.enable(7),N.premultipliedAlpha&&u.enable(8),N.shadowMapEnabled&&u.enable(9),N.useLegacyLights&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),b.push(u.mask)}function R(b){const N=E[b.type];let ae;if(N){const ne=rr[N];ae=Km.clone(ne.uniforms)}else ae=b.uniforms;return ae}function I(b,N){let ae;for(let ne=0,pe=h.length;ne<pe;ne++){const H=h[ne];if(H.cacheKey===N){ae=H,++ae.usedTimes;break}}return ae===void 0&&(ae=new FO(n,N,b,s),h.push(ae)),ae}function O(b){if(--b.usedTimes===0){const N=h.indexOf(b);h[N]=h[h.length-1],h.pop(),b.destroy()}}function F(b){d.remove(b)}function de(){d.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:R,acquireProgram:I,releaseProgram:O,releaseShaderCache:F,programs:h,dispose:de}}function HO(){let n=new WeakMap;function e(s){let c=n.get(s);return c===void 0&&(c={},n.set(s,c)),c}function t(s){n.delete(s)}function i(s,c,u){n.get(s)[c]=u}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function VO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function My(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ay(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function c(v,g,S,E,w,x){let _=n[e];return _===void 0?(_={id:v.id,object:v,geometry:g,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:x},n[e]=_):(_.id=v.id,_.object=v,_.geometry=g,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=w,_.group=x),e++,_}function u(v,g,S,E,w,x){const _=c(v,g,S,E,w,x);S.transmission>0?i.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(v,g,S,E,w,x){const _=c(v,g,S,E,w,x);S.transmission>0?i.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(v,g){t.length>1&&t.sort(v||VO),i.length>1&&i.sort(g||My),a.length>1&&a.sort(g||My)}function p(){for(let v=e,g=n.length;v<g;v++){const S=n[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:u,unshift:d,finish:p,sort:h}}function GO(){let n=new WeakMap;function e(i,a){const s=n.get(i);let c;return s===void 0?(c=new Ay,n.set(i,[c])):a>=s.length?(c=new Ay,s.push(c)):c=s[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function WO(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function $O(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XO=0;function jO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YO(n,e){const t=new WO,i=$O(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new B);const s=new B,c=new Gt,u=new Gt;function d(p,v){let g=0,S=0,E=0;for(let ne=0;ne<9;ne++)a.probe[ne].set(0,0,0);let w=0,x=0,_=0,C=0,M=0,R=0,I=0,O=0,F=0,de=0,b=0;p.sort(jO);const N=v===!0?Math.PI:1;for(let ne=0,pe=p.length;ne<pe;ne++){const H=p[ne],Q=H.color,se=H.intensity,re=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Q.r*se*N,S+=Q.g*se*N,E+=Q.b*se*N;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(H.sh.coefficients[ie],se);b++}else if(H.isDirectionalLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*N),H.castShadow){const $=H.shadow,L=i.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,a.directionalShadow[w]=L,a.directionalShadowMap[w]=X,a.directionalShadowMatrix[w]=H.shadow.matrix,R++}a.directional[w]=ie,w++}else if(H.isSpotLight){const ie=t.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(Q).multiplyScalar(se*N),ie.distance=re,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,a.spot[_]=ie;const $=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,$.updateMatrices(H),H.castShadow&&de++),a.spotLightMatrix[_]=$.matrix,H.castShadow){const L=i.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,a.spotShadow[_]=L,a.spotShadowMap[_]=X,O++}_++}else if(H.isRectAreaLight){const ie=t.get(H);ie.color.copy(Q).multiplyScalar(se),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),a.rectArea[C]=ie,C++}else if(H.isPointLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*N),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const $=H.shadow,L=i.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,L.shadowCameraNear=$.camera.near,L.shadowCameraFar=$.camera.far,a.pointShadow[x]=L,a.pointShadowMap[x]=X,a.pointShadowMatrix[x]=H.shadow.matrix,I++}a.point[x]=ie,x++}else if(H.isHemisphereLight){const ie=t.get(H);ie.skyColor.copy(H.color).multiplyScalar(se*N),ie.groundColor.copy(H.groundColor).multiplyScalar(se*N),a.hemi[M]=ie,M++}}C>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=S,a.ambient[2]=E;const ae=a.hash;(ae.directionalLength!==w||ae.pointLength!==x||ae.spotLength!==_||ae.rectAreaLength!==C||ae.hemiLength!==M||ae.numDirectionalShadows!==R||ae.numPointShadows!==I||ae.numSpotShadows!==O||ae.numSpotMaps!==F||ae.numLightProbes!==b)&&(a.directional.length=w,a.spot.length=_,a.rectArea.length=C,a.point.length=x,a.hemi.length=M,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=I,a.pointShadowMap.length=I,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=I,a.spotLightMatrix.length=O+F-de,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=de,a.numLightProbes=b,ae.directionalLength=w,ae.pointLength=x,ae.spotLength=_,ae.rectAreaLength=C,ae.hemiLength=M,ae.numDirectionalShadows=R,ae.numPointShadows=I,ae.numSpotShadows=O,ae.numSpotMaps=F,ae.numLightProbes=b,a.version=XO++)}function h(p,v){let g=0,S=0,E=0,w=0,x=0;const _=v.matrixWorldInverse;for(let C=0,M=p.length;C<M;C++){const R=p[C];if(R.isDirectionalLight){const I=a.directional[g];I.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(_),g++}else if(R.isSpotLight){const I=a.spot[E];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(_),E++}else if(R.isRectAreaLight){const I=a.rectArea[w];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),u.identity(),c.copy(R.matrixWorld),c.premultiply(_),u.extractRotation(c),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),w++}else if(R.isPointLight){const I=a.point[S];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),S++}else if(R.isHemisphereLight){const I=a.hemi[x];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(_),x++}}}return{setup:d,setupView:h,state:a}}function Ty(n,e){const t=new YO(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function c(v){i.push(v)}function u(v){a.push(v)}function d(v){t.setup(i,v)}function h(v){t.setupView(i,v)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function qO(n,e){let t=new WeakMap;function i(s,c=0){const u=t.get(s);let d;return u===void 0?(d=new Ty(n,e),t.set(s,[d])):c>=u.length?(d=new Ty(n,e),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:i,dispose:a}}class KO extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZO extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QO=`uniform sampler2D shadow_pass;
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
}`;function ez(n,e,t){let i=new Pf;const a=new ht,s=new ht,c=new zt,u=new KO({depthPacking:F3}),d=new ZO,h={},p=t.maxTextureSize,v={[Ao]:or,[or]:Ao,[Li]:Li},g=new To({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:JO,fragmentShader:QO}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Bn;E.setAttribute("position",new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Yr(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=WE;let _=this.type;this.render=function(I,O,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const de=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(yo),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ne=_!==Ri&&this.type===Ri,pe=_===Ri&&this.type!==Ri;for(let H=0,Q=I.length;H<Q;H++){const se=I[H],re=se.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);const X=re.getFrameExtents();if(a.multiply(X),s.copy(re.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(s.x=Math.floor(p/X.x),a.x=s.x*X.x,re.mapSize.x=s.x),a.y>p&&(s.y=Math.floor(p/X.y),a.y=s.y*X.y,re.mapSize.y=s.y)),re.map===null||ne===!0||pe===!0){const $=this.type!==Ri?{minFilter:Tn,magFilter:Tn}:{};re.map!==null&&re.map.dispose(),re.map=new da(a.x,a.y,$),re.map.texture.name=se.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();const ie=re.getViewportCount();for(let $=0;$<ie;$++){const L=re.getViewport($);c.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),ae.viewport(c),re.updateMatrices(se,$),i=re.getFrustum(),R(O,F,re.camera,se,this.type)}re.isPointLightShadow!==!0&&this.type===Ri&&C(re,F),re.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(de,b,N)};function C(I,O){const F=e.update(w);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new da(a.x,a.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(O,null,F,g,w,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(O,null,F,S,w,null)}function M(I,O,F,de){let b=null;const N=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)b=N;else if(b=F.isPointLight===!0?d:u,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ae=b.uuid,ne=O.uuid;let pe=h[ae];pe===void 0&&(pe={},h[ae]=pe);let H=pe[ne];H===void 0&&(H=b.clone(),pe[ne]=H),b=H}if(b.visible=O.visible,b.wireframe=O.wireframe,de===Ri?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:v[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ae=n.properties.get(b);ae.light=F}return b}function R(I,O,F,de,b){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Ri)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const ne=e.update(I),pe=I.material;if(Array.isArray(pe)){const H=ne.groups;for(let Q=0,se=H.length;Q<se;Q++){const re=H[Q],X=pe[re.materialIndex];if(X&&X.visible){const ie=M(I,X,de,b);I.onBeforeShadow(n,I,O,F,ne,ie,re),n.renderBufferDirect(F,null,ne,ie,I,re),I.onAfterShadow(n,I,O,F,ne,ie,re)}}}else if(pe.visible){const H=M(I,pe,de,b);I.onBeforeShadow(n,I,O,F,ne,H,null),n.renderBufferDirect(F,null,ne,H,I,null),I.onAfterShadow(n,I,O,F,ne,H,null)}}const ae=I.children;for(let ne=0,pe=ae.length;ne<pe;ne++)R(ae[ne],O,F,de,b)}}function tz(n,e,t){const i=t.isWebGL2;function a(){let V=!1;const ke=new zt;let Re=null;const me=new zt(0,0,0,0);return{setMask:function(Ue){Re!==Ue&&!V&&(n.colorMask(Ue,Ue,Ue,Ue),Re=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,ot,wt,en,vn){vn===!0&&(Ue*=en,ot*=en,wt*=en),ke.set(Ue,ot,wt,en),me.equals(ke)===!1&&(n.clearColor(Ue,ot,wt,en),me.copy(ke))},reset:function(){V=!1,Re=null,me.set(-1,0,0,0)}}}function s(){let V=!1,ke=null,Re=null,me=null;return{setTest:function(Ue){Ue?be(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Ue){ke!==Ue&&!V&&(n.depthMask(Ue),ke=Ue)},setFunc:function(Ue){if(Re!==Ue){switch(Ue){case d3:n.depthFunc(n.NEVER);break;case h3:n.depthFunc(n.ALWAYS);break;case p3:n.depthFunc(n.LESS);break;case Jc:n.depthFunc(n.LEQUAL);break;case m3:n.depthFunc(n.EQUAL);break;case v3:n.depthFunc(n.GEQUAL);break;case g3:n.depthFunc(n.GREATER);break;case _3:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){me!==Ue&&(n.clearDepth(Ue),me=Ue)},reset:function(){V=!1,ke=null,Re=null,me=null}}}function c(){let V=!1,ke=null,Re=null,me=null,Ue=null,ot=null,wt=null,en=null,vn=null;return{setTest:function(Lt){V||(Lt?be(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Lt){ke!==Lt&&!V&&(n.stencilMask(Lt),ke=Lt)},setFunc:function(Lt,cn,Ln){(Re!==Lt||me!==cn||Ue!==Ln)&&(n.stencilFunc(Lt,cn,Ln),Re=Lt,me=cn,Ue=Ln)},setOp:function(Lt,cn,Ln){(ot!==Lt||wt!==cn||en!==Ln)&&(n.stencilOp(Lt,cn,Ln),ot=Lt,wt=cn,en=Ln)},setLocked:function(Lt){V=Lt},setClear:function(Lt){vn!==Lt&&(n.clearStencil(Lt),vn=Lt)},reset:function(){V=!1,ke=null,Re=null,me=null,Ue=null,ot=null,wt=null,en=null,vn=null}}}const u=new a,d=new s,h=new c,p=new WeakMap,v=new WeakMap;let g={},S={},E=new WeakMap,w=[],x=null,_=!1,C=null,M=null,R=null,I=null,O=null,F=null,de=null,b=new nt(0,0,0),N=0,ae=!1,ne=null,pe=null,H=null,Q=null,se=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ie>=2);let L=null,z={};const W=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ee=new zt().fromArray(W),Z=new zt().fromArray(q);function _e(V,ke,Re,me){const Ue=new Uint8Array(4),ot=n.createTexture();n.bindTexture(V,ot),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<Re;wt++)i&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(ke,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(ke+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return ot}const ve={};ve[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(n.DEPTH_TEST),d.setFunc(Jc),ge(!1),Me(l0),be(n.CULL_FACE),ue(yo);function be(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Oe(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function ze(V,ke){return S[V]!==ke?(n.bindFramebuffer(V,ke),S[V]=ke,i&&(V===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=ke),V===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=ke)),!0):!1}function j(V,ke){let Re=w,me=!1;if(V)if(Re=E.get(ke),Re===void 0&&(Re=[],E.set(ke,Re)),V.isWebGLMultipleRenderTargets){const Ue=V.texture;if(Re.length!==Ue.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,wt=Ue.length;ot<wt;ot++)Re[ot]=n.COLOR_ATTACHMENT0+ot;Re.length=Ue.length,me=!0}}else Re[0]!==n.COLOR_ATTACHMENT0&&(Re[0]=n.COLOR_ATTACHMENT0,me=!0);else Re[0]!==n.BACK&&(Re[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Dt(V){return x!==V?(n.useProgram(V),x=V,!0):!1}const He={[ra]:n.FUNC_ADD,[ZD]:n.FUNC_SUBTRACT,[JD]:n.FUNC_REVERSE_SUBTRACT};if(i)He[d0]=n.MIN,He[h0]=n.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(He[d0]=V.MIN_EXT,He[h0]=V.MAX_EXT)}const le={[QD]:n.ZERO,[e3]:n.ONE,[t3]:n.SRC_COLOR,[Op]:n.SRC_ALPHA,[s3]:n.SRC_ALPHA_SATURATE,[o3]:n.DST_COLOR,[r3]:n.DST_ALPHA,[n3]:n.ONE_MINUS_SRC_COLOR,[zp]:n.ONE_MINUS_SRC_ALPHA,[a3]:n.ONE_MINUS_DST_COLOR,[i3]:n.ONE_MINUS_DST_ALPHA,[l3]:n.CONSTANT_COLOR,[u3]:n.ONE_MINUS_CONSTANT_COLOR,[c3]:n.CONSTANT_ALPHA,[f3]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(V,ke,Re,me,Ue,ot,wt,en,vn,Lt){if(V===yo){_===!0&&(Oe(n.BLEND),_=!1);return}if(_===!1&&(be(n.BLEND),_=!0),V!==KD){if(V!==C||Lt!==ae){if((M!==ra||O!==ra)&&(n.blendEquation(n.FUNC_ADD),M=ra,O=ra),Lt)switch(V){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case u0:n.blendFunc(n.ONE,n.ONE);break;case c0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case f0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case u0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case c0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case f0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,I=null,F=null,de=null,b.set(0,0,0),N=0,C=V,ae=Lt}return}Ue=Ue||ke,ot=ot||Re,wt=wt||me,(ke!==M||Ue!==O)&&(n.blendEquationSeparate(He[ke],He[Ue]),M=ke,O=Ue),(Re!==R||me!==I||ot!==F||wt!==de)&&(n.blendFuncSeparate(le[Re],le[me],le[ot],le[wt]),R=Re,I=me,F=ot,de=wt),(en.equals(b)===!1||vn!==N)&&(n.blendColor(en.r,en.g,en.b,vn),b.copy(en),N=vn),C=V,ae=!1}function xe(V,ke){V.side===Li?Oe(n.CULL_FACE):be(n.CULL_FACE);let Re=V.side===or;ke&&(Re=!Re),ge(Re),V.blending===ds&&V.transparent===!1?ue(yo):ue(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const me=V.stencilWrite;h.setTest(me),me&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){ne!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),ne=V)}function Me(V){V!==jD?(be(n.CULL_FACE),V!==pe&&(V===l0?n.cullFace(n.BACK):V===YD?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),pe=V}function we(V){V!==H&&(X&&n.lineWidth(V),H=V)}function Ie(V,ke,Re){V?(be(n.POLYGON_OFFSET_FILL),(Q!==ke||se!==Re)&&(n.polygonOffset(ke,Re),Q=ke,se=Re)):Oe(n.POLYGON_OFFSET_FILL)}function Ze(V){V?be(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function D(V){V===void 0&&(V=n.TEXTURE0+re-1),L!==V&&(n.activeTexture(V),L=V)}function T(V,ke,Re){Re===void 0&&(L===null?Re=n.TEXTURE0+re-1:Re=L);let me=z[Re];me===void 0&&(me={type:void 0,texture:void 0},z[Re]=me),(me.type!==V||me.texture!==ke)&&(L!==Re&&(n.activeTexture(Re),L=Re),n.bindTexture(V,ke||ve[V]),me.type=V,me.texture=ke)}function Y(){const V=z[L];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(V){ee.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function st(V){Z.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function et(V,ke){let Re=v.get(ke);Re===void 0&&(Re=new WeakMap,v.set(ke,Re));let me=Re.get(V);me===void 0&&(me=n.getUniformBlockIndex(ke,V.name),Re.set(V,me))}function $e(V,ke){const me=v.get(ke).get(V);p.get(ke)!==me&&(n.uniformBlockBinding(ke,me,V.__bindingPointIndex),p.set(ke,me))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},L=null,z={},S={},E=new WeakMap,w=[],x=null,_=!1,C=null,M=null,R=null,I=null,O=null,F=null,de=null,b=new nt(0,0,0),N=0,ae=!1,ne=null,pe=null,H=null,Q=null,se=null,ee.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:be,disable:Oe,bindFramebuffer:ze,drawBuffers:j,useProgram:Dt,setBlending:ue,setMaterial:xe,setFlipSided:ge,setCullFace:Me,setLineWidth:we,setPolygonOffset:Ie,setScissorTest:Ze,activeTexture:D,bindTexture:T,unbindTexture:Y,compressedTexImage2D:Ae,compressedTexImage3D:ye,texImage2D:Pe,texImage3D:It,updateUBOMapping:et,uniformBlockBinding:$e,texStorage2D:lt,texStorage3D:At,texSubImage2D:Ce,texSubImage3D:qe,compressedTexSubImage2D:De,compressedTexSubImage3D:Be,scissor:ft,viewport:st,reset:_t}}function nz(n,e,t,i,a,s,c){const u=a.isWebGL2,d=a.maxTextures,h=a.maxCubemapSize,p=a.maxTextureSize,v=a.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let w;const x=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,T){return _?new OffscreenCanvas(D,T):rf("canvas")}function M(D,T,Y,Ae){let ye=1;if((D.width>Ae||D.height>Ae)&&(ye=Ae/Math.max(D.width,D.height)),ye<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Ce=T?nf:Math.floor,qe=Ce(ye*D.width),De=Ce(ye*D.height);w===void 0&&(w=C(qe,De));const Be=Y?C(qe,De):w;return Be.width=qe,Be.height=De,Be.getContext("2d").drawImage(D,0,0,qe,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+qe+"x"+De+")."),Be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function R(D){return $p(D.width)&&$p(D.height)}function I(D){return u?!1:D.wrapS!==jr||D.wrapT!==jr||D.minFilter!==Tn&&D.minFilter!==Tr}function O(D,T){return D.generateMipmaps&&T&&D.minFilter!==Tn&&D.minFilter!==Tr}function F(D){n.generateMipmap(D)}function de(D,T,Y,Ae,ye=!1){if(u===!1)return T;if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ce=T;if(T===n.RED&&(Y===n.FLOAT&&(Ce=n.R32F),Y===n.HALF_FLOAT&&(Ce=n.R16F),Y===n.UNSIGNED_BYTE&&(Ce=n.R8)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Ce=n.R8UI),Y===n.UNSIGNED_SHORT&&(Ce=n.R16UI),Y===n.UNSIGNED_INT&&(Ce=n.R32UI),Y===n.BYTE&&(Ce=n.R8I),Y===n.SHORT&&(Ce=n.R16I),Y===n.INT&&(Ce=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(Ce=n.RG32F),Y===n.HALF_FLOAT&&(Ce=n.RG16F),Y===n.UNSIGNED_BYTE&&(Ce=n.RG8)),T===n.RGBA){const qe=ye?Qc:Ot.getTransfer(Ae);Y===n.FLOAT&&(Ce=n.RGBA32F),Y===n.HALF_FLOAT&&(Ce=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Ce=qe===Xt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Ce=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Ce=n.RGB5_A1)}return(Ce===n.R16F||Ce===n.R32F||Ce===n.RG16F||Ce===n.RG32F||Ce===n.RGBA16F||Ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function b(D,T,Y){return O(D,Y)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==Tr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){return D===Tn||D===p0||D===Rh?n.NEAREST:n.LINEAR}function ae(D){const T=D.target;T.removeEventListener("dispose",ae),pe(T),T.isVideoTexture&&E.delete(T)}function ne(D){const T=D.target;T.removeEventListener("dispose",ne),Q(T)}function pe(D){const T=i.get(D);if(T.__webglInit===void 0)return;const Y=D.source,Ae=x.get(Y);if(Ae){const ye=Ae[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(D),Object.keys(Ae).length===0&&x.delete(Y)}i.remove(D)}function H(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const Y=D.source,Ae=x.get(Y);delete Ae[T.__cacheKey],c.memory.textures--}function Q(D){const T=D.texture,Y=i.get(D),Ae=i.get(T);if(Ae.__webglTexture!==void 0&&(n.deleteTexture(Ae.__webglTexture),c.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(Y.__webglFramebuffer[ye]))for(let Ce=0;Ce<Y.__webglFramebuffer[ye].length;Ce++)n.deleteFramebuffer(Y.__webglFramebuffer[ye][Ce]);else n.deleteFramebuffer(Y.__webglFramebuffer[ye]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[ye])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ye=0;ye<Y.__webglFramebuffer.length;ye++)n.deleteFramebuffer(Y.__webglFramebuffer[ye]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ye=0;ye<Y.__webglColorRenderbuffer.length;ye++)Y.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[ye]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ye=0,Ce=T.length;ye<Ce;ye++){const qe=i.get(T[ye]);qe.__webglTexture&&(n.deleteTexture(qe.__webglTexture),c.memory.textures--),i.remove(T[ye])}i.remove(T),i.remove(D)}let se=0;function re(){se=0}function X(){const D=se;return D>=d&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+d),se+=1,D}function ie(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function $(D,T){const Y=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const Ae=D.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(Y,D,T);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function L(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){be(Y,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function z(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){be(Y,D,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function W(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Oe(Y,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}const q={[Hp]:n.REPEAT,[jr]:n.CLAMP_TO_EDGE,[Vp]:n.MIRRORED_REPEAT},ee={[Tn]:n.NEAREST,[p0]:n.NEAREST_MIPMAP_NEAREST,[Rh]:n.NEAREST_MIPMAP_LINEAR,[Tr]:n.LINEAR,[T3]:n.LINEAR_MIPMAP_NEAREST,[Ul]:n.LINEAR_MIPMAP_LINEAR},Z={[z3]:n.NEVER,[W3]:n.ALWAYS,[k3]:n.LESS,[tw]:n.LEQUAL,[B3]:n.EQUAL,[G3]:n.GEQUAL,[H3]:n.GREATER,[V3]:n.NOTEQUAL};function _e(D,T,Y){if(Y?(n.texParameteri(D,n.TEXTURE_WRAP_S,q[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,q[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,q[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ee[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ee[T.minFilter])):(n.texParameteri(D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==jr||T.wrapT!==jr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(D,n.TEXTURE_MAG_FILTER,N(T.magFilter)),n.texParameteri(D,n.TEXTURE_MIN_FILTER,N(T.minFilter)),T.minFilter!==Tn&&T.minFilter!==Tr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Tn||T.minFilter!==Rh&&T.minFilter!==Ul||T.type===Pi&&e.has("OES_texture_float_linear")===!1||u===!1&&T.type===Nl&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(D,Ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ve(D,T){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",ae));const Ae=T.source;let ye=x.get(Ae);ye===void 0&&(ye={},x.set(Ae,ye));const Ce=ie(T);if(Ce!==D.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ye[Ce].usedTimes++;const qe=ye[D.__cacheKey];qe!==void 0&&(ye[D.__cacheKey].usedTimes--,qe.usedTimes===0&&H(T)),D.__cacheKey=Ce,D.__webglTexture=ye[Ce].texture}return Y}function be(D,T,Y){let Ae=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ae=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ae=n.TEXTURE_3D);const ye=ve(D,T),Ce=T.source;t.bindTexture(Ae,D.__webglTexture,n.TEXTURE0+Y);const qe=i.get(Ce);if(Ce.version!==qe.__version||ye===!0){t.activeTexture(n.TEXTURE0+Y);const De=Ot.getPrimaries(Ot.workingColorSpace),Be=T.colorSpace===Cr?null:Ot.getPrimaries(T.colorSpace),lt=T.colorSpace===Cr||De===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const At=I(T)&&R(T.image)===!1;let Pe=M(T.image,At,!1,p);Pe=Ze(T,Pe);const It=R(Pe)||u,ft=s.convert(T.format,T.colorSpace);let st=s.convert(T.type),et=de(T.internalFormat,ft,st,T.colorSpace,T.isVideoTexture);_e(Ae,T,It);let $e;const _t=T.mipmaps,V=u&&T.isVideoTexture!==!0&&et!==JE,ke=qe.__version===void 0||ye===!0,Re=b(T,Pe,It);if(T.isDepthTexture)et=n.DEPTH_COMPONENT,u?T.type===Pi?et=n.DEPTH_COMPONENT32F:T.type===vo?et=n.DEPTH_COMPONENT24:T.type===ua?et=n.DEPTH24_STENCIL8:et=n.DEPTH_COMPONENT16:T.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ca&&et===n.DEPTH_COMPONENT&&T.type!==Xm&&T.type!==vo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=vo,st=s.convert(T.type)),T.format===ws&&et===n.DEPTH_COMPONENT&&(et=n.DEPTH_STENCIL,T.type!==ua&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ua,st=s.convert(T.type))),ke&&(V?t.texStorage2D(n.TEXTURE_2D,1,et,Pe.width,Pe.height):t.texImage2D(n.TEXTURE_2D,0,et,Pe.width,Pe.height,0,ft,st,null));else if(T.isDataTexture)if(_t.length>0&&It){V&&ke&&t.texStorage2D(n.TEXTURE_2D,Re,et,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,ft,st,$e.data);T.generateMipmaps=!1}else V?(ke&&t.texStorage2D(n.TEXTURE_2D,Re,et,Pe.width,Pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe.width,Pe.height,ft,st,Pe.data)):t.texImage2D(n.TEXTURE_2D,0,et,Pe.width,Pe.height,0,ft,st,Pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,et,_t[0].width,_t[0].height,Pe.depth);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],T.format!==br?ft!==null?V?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Pe.depth,ft,$e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,et,$e.width,$e.height,Pe.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Pe.depth,ft,st,$e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,et,$e.width,$e.height,Pe.depth,0,ft,st,$e.data)}else{V&&ke&&t.texStorage2D(n.TEXTURE_2D,Re,et,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],T.format!==br?ft!==null?V?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,$e.data):t.compressedTexImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,ft,st,$e.data)}else if(T.isDataArrayTexture)V?(ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,et,Pe.width,Pe.height,Pe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,ft,st,Pe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,Pe.width,Pe.height,Pe.depth,0,ft,st,Pe.data);else if(T.isData3DTexture)V?(ke&&t.texStorage3D(n.TEXTURE_3D,Re,et,Pe.width,Pe.height,Pe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,ft,st,Pe.data)):t.texImage3D(n.TEXTURE_3D,0,et,Pe.width,Pe.height,Pe.depth,0,ft,st,Pe.data);else if(T.isFramebufferTexture){if(ke)if(V)t.texStorage2D(n.TEXTURE_2D,Re,et,Pe.width,Pe.height);else{let me=Pe.width,Ue=Pe.height;for(let ot=0;ot<Re;ot++)t.texImage2D(n.TEXTURE_2D,ot,et,me,Ue,0,ft,st,null),me>>=1,Ue>>=1}}else if(_t.length>0&&It){V&&ke&&t.texStorage2D(n.TEXTURE_2D,Re,et,_t[0].width,_t[0].height);for(let me=0,Ue=_t.length;me<Ue;me++)$e=_t[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ft,st,$e):t.texImage2D(n.TEXTURE_2D,me,et,ft,st,$e);T.generateMipmaps=!1}else V?(ke&&t.texStorage2D(n.TEXTURE_2D,Re,et,Pe.width,Pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,st,Pe)):t.texImage2D(n.TEXTURE_2D,0,et,ft,st,Pe);O(T,It)&&F(Ae),qe.__version=Ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Oe(D,T,Y){if(T.image.length!==6)return;const Ae=ve(D,T),ye=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const Ce=i.get(ye);if(ye.version!==Ce.__version||Ae===!0){t.activeTexture(n.TEXTURE0+Y);const qe=Ot.getPrimaries(Ot.workingColorSpace),De=T.colorSpace===Cr?null:Ot.getPrimaries(T.colorSpace),Be=T.colorSpace===Cr||qe===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!lt&&!At?Pe[me]=M(T.image[me],!1,!0,h):Pe[me]=At?T.image[me].image:T.image[me],Pe[me]=Ze(T,Pe[me]);const It=Pe[0],ft=R(It)||u,st=s.convert(T.format,T.colorSpace),et=s.convert(T.type),$e=de(T.internalFormat,st,et,T.colorSpace),_t=u&&T.isVideoTexture!==!0,V=Ce.__version===void 0||Ae===!0;let ke=b(T,It,ft);_e(n.TEXTURE_CUBE_MAP,T,ft);let Re;if(lt){_t&&V&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,$e,It.width,It.height);for(let me=0;me<6;me++){Re=Pe[me].mipmaps;for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];T.format!==br?st!==null?_t?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,et,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,st,et,ot.data)}}}else{Re=T.mipmaps,_t&&V&&(Re.length>0&&ke++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,$e,Pe[0].width,Pe[0].height));for(let me=0;me<6;me++)if(At){_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,st,et,Pe[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,Pe[me].width,Pe[me].height,0,st,et,Pe[me].data);for(let Ue=0;Ue<Re.length;Ue++){const wt=Re[Ue].image[me].image;_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,wt.width,wt.height,st,et,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,wt.width,wt.height,0,st,et,wt.data)}}else{_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,st,et,Pe[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,st,et,Pe[me]);for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];_t?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,st,et,ot.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,st,et,ot.image[me])}}}O(T,ft)&&F(n.TEXTURE_CUBE_MAP),Ce.__version=ye.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ze(D,T,Y,Ae,ye,Ce){const qe=s.convert(Y.format,Y.colorSpace),De=s.convert(Y.type),Be=de(Y.internalFormat,qe,De,Y.colorSpace);if(!i.get(T).__hasExternalTextures){const At=Math.max(1,T.width>>Ce),Pe=Math.max(1,T.height>>Ce);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,Be,At,Pe,T.depth,0,qe,De,null):t.texImage2D(ye,Ce,Be,At,Pe,0,qe,De,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ye,i.get(Y).__webglTexture,0,Me(T)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ye,i.get(Y).__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(D,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let Ae=u===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||we(T)){const ye=T.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Pi?Ae=n.DEPTH_COMPONENT32F:ye.type===vo&&(Ae=n.DEPTH_COMPONENT24));const Ce=Me(T);we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Ae,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const Ae=Me(T);Y&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{const Ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ye=0;ye<Ae.length;ye++){const Ce=Ae[ye],qe=s.convert(Ce.format,Ce.colorSpace),De=s.convert(Ce.type),Be=de(Ce.internalFormat,qe,De,Ce.colorSpace),lt=Me(T);Y&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,Be,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,Be,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Be,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Ae=i.get(T.depthTexture).__webglTexture,ye=Me(T);if(T.depthTexture.format===ca)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0);else if(T.depthTexture.format===ws)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function He(D){const T=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Dt(T.__webglFramebuffer,D)}else if(Y){T.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Ae]),T.__webglDepthbuffer[Ae]=n.createRenderbuffer(),j(T.__webglDepthbuffer[Ae],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),j(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(D,T,Y){const Ae=i.get(D);T!==void 0&&ze(Ae.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&He(D)}function ue(D){const T=D.texture,Y=i.get(D),Ae=i.get(T);D.addEventListener("dispose",ne),D.isWebGLMultipleRenderTargets!==!0&&(Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture()),Ae.__version=T.version,c.memory.textures++);const ye=D.isWebGLCubeRenderTarget===!0,Ce=D.isWebGLMultipleRenderTargets===!0,qe=R(D)||u;if(ye){Y.__webglFramebuffer=[];for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[De]=[];for(let Be=0;Be<T.mipmaps.length;Be++)Y.__webglFramebuffer[De][Be]=n.createFramebuffer()}else Y.__webglFramebuffer[De]=n.createFramebuffer()}else{if(u&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)Y.__webglFramebuffer[De]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ce)if(a.drawBuffers){const De=D.texture;for(let Be=0,lt=De.length;Be<lt;Be++){const At=i.get(De[Be]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&D.samples>0&&we(D)===!1){const De=Ce?T:[T];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Be=0;Be<De.length;Be++){const lt=De[Be];Y.__webglColorRenderbuffer[Be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Be]);const At=s.convert(lt.format,lt.colorSpace),Pe=s.convert(lt.type),It=de(lt.internalFormat,At,Pe,lt.colorSpace,D.isXRRenderTarget===!0),ft=Me(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,It,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Be])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),j(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,Ae.__webglTexture),_e(n.TEXTURE_CUBE_MAP,T,qe);for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)ze(Y.__webglFramebuffer[De][Be],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,Be);else ze(Y.__webglFramebuffer[De],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);O(T,qe)&&F(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){const De=D.texture;for(let Be=0,lt=De.length;Be<lt;Be++){const At=De[Be],Pe=i.get(At);t.bindTexture(n.TEXTURE_2D,Pe.__webglTexture),_e(n.TEXTURE_2D,At,qe),ze(Y.__webglFramebuffer,D,At,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,0),O(At,qe)&&F(n.TEXTURE_2D)}t.unbindTexture()}else{let De=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(u?De=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,Ae.__webglTexture),_e(De,T,qe),u&&T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)ze(Y.__webglFramebuffer[Be],D,T,n.COLOR_ATTACHMENT0,De,Be);else ze(Y.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,De,0);O(T,qe)&&F(De),t.unbindTexture()}D.depthBuffer&&He(D)}function xe(D){const T=R(D)||u,Y=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Ae=0,ye=Y.length;Ae<ye;Ae++){const Ce=Y[Ae];if(O(Ce,T)){const qe=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,De=i.get(Ce).__webglTexture;t.bindTexture(qe,De),F(qe),t.unbindTexture()}}}function ge(D){if(u&&D.samples>0&&we(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Y=D.width,Ae=D.height;let ye=n.COLOR_BUFFER_BIT;const Ce=[],qe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(D),Be=D.isWebGLMultipleRenderTargets===!0;if(Be)for(let lt=0;lt<T.length;lt++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let lt=0;lt<T.length;lt++){Ce.push(n.COLOR_ATTACHMENT0+lt),D.depthBuffer&&Ce.push(qe);const At=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(At===!1&&(D.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),Be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]),At===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[qe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[qe])),Be){const Pe=i.get(T[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,Y,Ae,0,0,Y,Ae,ye,n.NEAREST),S&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Be)for(let lt=0;lt<T.length;lt++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]);const At=i.get(T[lt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,At,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Me(D){return Math.min(v,D.samples)}function we(D){const T=i.get(D);return u&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ie(D){const T=c.render.frame;E.get(D)!==T&&(E.set(D,T),D.update())}function Ze(D,T){const Y=D.colorSpace,Ae=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Wp||Y!==Ii&&Y!==Cr&&(Ot.getTransfer(Y)===Xt?u===!1?e.has("EXT_sRGB")===!0&&Ae===br?(D.format=Wp,D.minFilter=Tr,D.generateMipmaps=!1):T=iw.sRGBToLinear(T):(Ae!==br||ye!==So)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=X,this.resetTextureUnits=re,this.setTexture2D=$,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=we}function rz(n,e,t){const i=t.isWebGL2;function a(s,c=Cr){let u;const d=Ot.getTransfer(c);if(s===So)return n.UNSIGNED_BYTE;if(s===jE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===YE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===b3)return n.BYTE;if(s===C3)return n.SHORT;if(s===Xm)return n.UNSIGNED_SHORT;if(s===XE)return n.INT;if(s===vo)return n.UNSIGNED_INT;if(s===Pi)return n.FLOAT;if(s===Nl)return i?n.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(s===R3)return n.ALPHA;if(s===br)return n.RGBA;if(s===L3)return n.LUMINANCE;if(s===P3)return n.LUMINANCE_ALPHA;if(s===ca)return n.DEPTH_COMPONENT;if(s===ws)return n.DEPTH_STENCIL;if(s===Wp)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(s===D3)return n.RED;if(s===qE)return n.RED_INTEGER;if(s===I3)return n.RG;if(s===KE)return n.RG_INTEGER;if(s===ZE)return n.RGBA_INTEGER;if(s===Lh||s===Ph||s===Dh||s===Ih)if(d===Xt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Lh)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ph)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ih)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Lh)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ph)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dh)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ih)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===m0||s===v0||s===g0||s===_0)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===m0)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===v0)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===g0)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_0)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===JE)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===y0||s===x0)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===y0)return d===Xt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===x0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===S0||s===E0||s===w0||s===M0||s===A0||s===T0||s===b0||s===C0||s===R0||s===L0||s===P0||s===D0||s===I0||s===U0)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===S0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===E0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===w0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===M0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===A0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===T0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===b0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===C0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===R0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===L0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===P0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===D0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===I0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===U0)return d===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uh||s===N0||s===F0)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Uh)return d===Xt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===N0)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===F0)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===U3||s===O0||s===z0||s===k0)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Uh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===O0)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===z0)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===k0)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ua?i?n.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class iz extends pr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class El extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oz={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,i),_=this._getHandJoint(h,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),S=.02,E=.005;h.inputState.pinching&&g>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(oz)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new El;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class az extends _a{constructor(e,t){super();const i=this;let a=null,s=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,g=null,S=null,E=null;const w=t.getContextAttributes();let x=null,_=null;const C=[],M=[],R=new ht;let I=null;const O=new pr;O.layers.enable(1),O.viewport=new zt;const F=new pr;F.layers.enable(2),F.viewport=new zt;const de=[O,F],b=new iz;b.layers.enable(1),b.layers.enable(2);let N=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=C[W];return q===void 0&&(q=new rp,C[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=C[W];return q===void 0&&(q=new rp,C[W]=q),q.getGripSpace()},this.getHand=function(W){let q=C[W];return q===void 0&&(q=new rp,C[W]=q),q.getHandSpace()};function ne(W){const q=M.indexOf(W.inputSource);if(q===-1)return;const ee=C[q];ee!==void 0&&(ee.update(W.inputSource,W.frame,h||c),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function pe(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",H);for(let W=0;W<C.length;W++){const q=M[W];q!==null&&(M[W]=null,C[W].disconnect(q))}N=null,ae=null,e.setRenderTarget(x),S=null,g=null,v=null,a=null,_=null,z.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:a.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(a,t,q),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new da(S.framebufferWidth,S.framebufferHeight,{format:br,type:So,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let q=null,ee=null,Z=null;w.depth&&(Z=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=w.stencil?ws:ca,ee=w.stencil?ua:vo);const _e={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};v=new XRWebGLBinding(a,t),g=v.createProjectionLayer(_e),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),_=new da(g.textureWidth,g.textureHeight,{format:br,type:So,depthTexture:new vw(g.textureWidth,g.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const ve=e.properties.get(_);ve.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),z.setContext(a),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(W){for(let q=0;q<W.removed.length;q++){const ee=W.removed[q],Z=M.indexOf(ee);Z>=0&&(M[Z]=null,C[Z].disconnect(ee))}for(let q=0;q<W.added.length;q++){const ee=W.added[q];let Z=M.indexOf(ee);if(Z===-1){for(let ve=0;ve<C.length;ve++)if(ve>=M.length){M.push(ee),Z=ve;break}else if(M[ve]===null){M[ve]=ee,Z=ve;break}if(Z===-1)break}const _e=C[Z];_e&&_e.connect(ee)}}const Q=new B,se=new B;function re(W,q,ee){Q.setFromMatrixPosition(q.matrixWorld),se.setFromMatrixPosition(ee.matrixWorld);const Z=Q.distanceTo(se),_e=q.projectionMatrix.elements,ve=ee.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Oe=_e[14]/(_e[10]+1),ze=(_e[9]+1)/_e[5],j=(_e[9]-1)/_e[5],Dt=(_e[8]-1)/_e[0],He=(ve[8]+1)/ve[0],le=be*Dt,ue=be*He,xe=Z/(-Dt+He),ge=xe*-Dt;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Me=be+xe,we=Oe+xe,Ie=le-ge,Ze=ue+(Z-ge),D=ze*Oe/we*Me,T=j*Oe/we*Me;W.projectionMatrix.makePerspective(Ie,Ze,D,T,Me,we),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;b.near=F.near=O.near=W.near,b.far=F.far=O.far=W.far,(N!==b.near||ae!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,ae=b.far);const q=W.parent,ee=b.cameras;X(b,q);for(let Z=0;Z<ee.length;Z++)X(ee[Z],q);ee.length===2?re(b,O,F):b.projectionMatrix.copy(O.projectionMatrix),ie(W,b,q)};function ie(W,q,ee){ee===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ol*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(W){d=W,g!==null&&(g.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)};let $=null;function L(W,q){if(p=q.getViewerPose(h||c),E=q,p!==null){const ee=p.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let Z=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let _e=0;_e<ee.length;_e++){const ve=ee[_e];let be=null;if(S!==null)be=S.getViewport(ve);else{const ze=v.getViewSubImage(g,ve);be=ze.viewport,_e===0&&(e.setRenderTargetTextures(_,ze.colorTexture,g.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(_))}let Oe=de[_e];Oe===void 0&&(Oe=new pr,Oe.layers.enable(_e),Oe.viewport=new zt,de[_e]=Oe),Oe.matrix.fromArray(ve.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ve.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(b.matrix.copy(Oe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Z===!0&&b.cameras.push(Oe)}}for(let ee=0;ee<C.length;ee++){const Z=M[ee],_e=C[ee];Z!==null&&_e!==void 0&&_e.update(Z,q,h||c)}$&&$(W,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),E=null}const z=new mw;z.setAnimationLoop(L),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function sz(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,dw(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,C,M,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),v(x,_)):_.isMeshPhongMaterial?(s(x,_),p(x,_)):_.isMeshStandardMaterial?(s(x,_),g(x,_),_.isMeshPhysicalMaterial&&S(x,_,R)):_.isMeshMatcapMaterial?(s(x,_),E(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),w(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?d(x,_,C,M):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===or&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===or&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const C=e.get(_).envMap;if(C&&(x.envMap.value=C,x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*M,t(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,C,M){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*C,x.scale.value=M*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,C){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===or&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const C=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function lz(n,e,t,i){let a={},s={},c=[];const u=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(C,M){const R=M.program;i.uniformBlockBinding(C,R)}function h(C,M){let R=a[C.id];R===void 0&&(E(C),R=p(C),a[C.id]=R,C.addEventListener("dispose",x));const I=M.program;i.updateUBOMapping(C,I);const O=e.render.frame;s[C.id]!==O&&(g(C),s[C.id]=O)}function p(C){const M=v();C.__bindingPointIndex=M;const R=n.createBuffer(),I=C.__size,O=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,I,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,R),R}function v(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const M=a[C.id],R=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let O=0,F=R.length;O<F;O++){const de=R[O];if(S(de,O,I)===!0){const b=de.__offset,N=Array.isArray(de.value)?de.value:[de.value];let ae=0;for(let ne=0;ne<N.length;ne++){const pe=N[ne],H=w(pe);typeof pe=="number"?(de.__data[0]=pe,n.bufferSubData(n.UNIFORM_BUFFER,b+ae,de.__data)):pe.isMatrix3?(de.__data[0]=pe.elements[0],de.__data[1]=pe.elements[1],de.__data[2]=pe.elements[2],de.__data[3]=pe.elements[0],de.__data[4]=pe.elements[3],de.__data[5]=pe.elements[4],de.__data[6]=pe.elements[5],de.__data[7]=pe.elements[0],de.__data[8]=pe.elements[6],de.__data[9]=pe.elements[7],de.__data[10]=pe.elements[8],de.__data[11]=pe.elements[0]):(pe.toArray(de.__data,ae),ae+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,de.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(C,M,R){const I=C.value;if(R[M]===void 0){if(typeof I=="number")R[M]=I;else{const O=Array.isArray(I)?I:[I],F=[];for(let de=0;de<O.length;de++)F.push(O[de].clone());R[M]=F}return!0}else if(typeof I=="number"){if(R[M]!==I)return R[M]=I,!0}else{const O=Array.isArray(R[M])?R[M]:[R[M]],F=Array.isArray(I)?I:[I];for(let de=0;de<O.length;de++){const b=O[de];if(b.equals(F[de])===!1)return b.copy(F[de]),!0}}return!1}function E(C){const M=C.uniforms;let R=0;const I=16;let O=0;for(let F=0,de=M.length;F<de;F++){const b=M[F],N={boundary:0,storage:0},ae=Array.isArray(b.value)?b.value:[b.value];for(let ne=0,pe=ae.length;ne<pe;ne++){const H=ae[ne],Q=w(H);N.boundary+=Q.boundary,N.storage+=Q.storage}if(b.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=R,F>0){O=R%I;const ne=I-O;O!==0&&ne-N.boundary<0&&(R+=I-O,b.__offset=R)}R+=N.storage}return O=R%I,O>0&&(R+=I-O),C.__size=R,C.__cache={},this}function w(C){const M={boundary:0,storage:0};return typeof C=="number"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function x(C){const M=C.target;M.removeEventListener("dispose",x);const R=c.indexOf(M.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete s[M.id]}function _(){for(const C in a)n.deleteBuffer(a[C]);c=[],a={},s={}}return{bind:d,update:h,dispose:_}}class jp{constructor(e={}){const{canvas:t=oI(),context:i=null,depth:a=!0,stencil:s=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=c;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,x=null;const _=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=xo,this.toneMappingExposure=1;const M=this;let R=!1,I=0,O=0,F=null,de=-1,b=null;const N=new zt,ae=new zt;let ne=null;const pe=new nt(0);let H=0,Q=t.width,se=t.height,re=1,X=null,ie=null;const $=new zt(0,0,Q,se),L=new zt(0,0,Q,se);let z=!1;const W=new Pf;let q=!1,ee=!1,Z=null;const _e=new Gt,ve=new ht,be=new B,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return F===null?re:1}let j=i;function Dt(P,J){for(let fe=0;fe<P.length;fe++){const he=P[fe],ce=t.getContext(he,J);if(ce!==null)return ce}return null}try{const P={alpha:!0,depth:a,stencil:s,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cf}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",ke,!1),j===null){const J=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&J.shift(),j=Dt(J,P),j===null)throw Dt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let He,le,ue,xe,ge,Me,we,Ie,Ze,D,T,Y,Ae,ye,Ce,qe,De,Be,lt,At,Pe,It,ft,st;function et(){He=new yF(j),le=new dF(j,He,e),He.init(le),It=new rz(j,He,le),ue=new tz(j,He,le),xe=new EF(j),ge=new HO,Me=new nz(j,He,ue,ge,le,It,xe),we=new pF(M),Ie=new _F(M),Ze=new RI(j,le),ft=new cF(j,He,Ze,le),D=new xF(j,Ze,xe,ft),T=new TF(j,D,Ze,xe),lt=new AF(j,le,Me),qe=new hF(ge),Y=new BO(M,we,Ie,He,le,ft,qe),Ae=new sz(M,ge),ye=new GO,Ce=new qO(He,le),Be=new uF(M,we,Ie,ue,T,g,d),De=new ez(M,T,le),st=new lz(j,xe,le,ue),At=new fF(j,He,xe,le),Pe=new SF(j,He,xe,le),xe.programs=Y.programs,M.capabilities=le,M.extensions=He,M.properties=ge,M.renderLists=ye,M.shadowMap=De,M.state=ue,M.info=xe}et();const $e=new az(M,j);this.xr=$e,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=He.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=He.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(P){P!==void 0&&(re=P,this.setSize(Q,se,!1))},this.getSize=function(P){return P.set(Q,se)},this.setSize=function(P,J,fe=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=P,se=J,t.width=Math.floor(P*re),t.height=Math.floor(J*re),fe===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(Q*re,se*re).floor()},this.setDrawingBufferSize=function(P,J,fe){Q=P,se=J,re=fe,t.width=Math.floor(P*fe),t.height=Math.floor(J*fe),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy($)},this.setViewport=function(P,J,fe,he){P.isVector4?$.set(P.x,P.y,P.z,P.w):$.set(P,J,fe,he),ue.viewport(N.copy($).multiplyScalar(re).floor())},this.getScissor=function(P){return P.copy(L)},this.setScissor=function(P,J,fe,he){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,J,fe,he),ue.scissor(ae.copy(L).multiplyScalar(re).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(P){ue.setScissorTest(z=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){ie=P},this.getClearColor=function(P){return P.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(P=!0,J=!0,fe=!0){let he=0;if(P){let ce=!1;if(F!==null){const Ge=F.texture.format;ce=Ge===ZE||Ge===KE||Ge===qE}if(ce){const Ge=F.texture.type,Qe=Ge===So||Ge===vo||Ge===Xm||Ge===ua||Ge===jE||Ge===YE,at=Be.getClearColor(),Xe=Be.getClearAlpha(),vt=at.r,dt=at.g,pt=at.b;Qe?(S[0]=vt,S[1]=dt,S[2]=pt,S[3]=Xe,j.clearBufferuiv(j.COLOR,0,S)):(E[0]=vt,E[1]=dt,E[2]=pt,E[3]=Xe,j.clearBufferiv(j.COLOR,0,E))}else he|=j.COLOR_BUFFER_BIT}J&&(he|=j.DEPTH_BUFFER_BIT),fe&&(he|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),ye.dispose(),Ce.dispose(),ge.dispose(),we.dispose(),Ie.dispose(),T.dispose(),ft.dispose(),st.dispose(),Y.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",vn),$e.removeEventListener("sessionend",Lt),Z&&(Z.dispose(),Z=null),cn.stop()};function _t(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=xe.autoReset,J=De.enabled,fe=De.autoUpdate,he=De.needsUpdate,ce=De.type;et(),xe.autoReset=P,De.enabled=J,De.autoUpdate=fe,De.needsUpdate=he,De.type=ce}function ke(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Re(P){const J=P.target;J.removeEventListener("dispose",Re),me(J)}function me(P){Ue(P),ge.remove(P)}function Ue(P){const J=ge.get(P).programs;J!==void 0&&(J.forEach(function(fe){Y.releaseProgram(fe)}),P.isShaderMaterial&&Y.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,fe,he,ce,Ge){J===null&&(J=Oe);const Qe=ce.isMesh&&ce.matrixWorld.determinant()<0,at=Nf(P,J,fe,he,ce);ue.setMaterial(he,Qe);let Xe=fe.index,vt=1;if(he.wireframe===!0){if(Xe=D.getWireframeAttribute(fe),Xe===void 0)return;vt=2}const dt=fe.drawRange,pt=fe.attributes.position;let Bt=dt.start*vt,Hn=(dt.start+dt.count)*vt;Ge!==null&&(Bt=Math.max(Bt,Ge.start*vt),Hn=Math.min(Hn,(Ge.start+Ge.count)*vt)),Xe!==null?(Bt=Math.max(Bt,0),Hn=Math.min(Hn,Xe.count)):pt!=null&&(Bt=Math.max(Bt,0),Hn=Math.min(Hn,pt.count));const rn=Hn-Bt;if(rn<0||rn===1/0)return;ft.setup(ce,he,at,fe,Xe);let Yn,Tt=At;if(Xe!==null&&(Yn=Ze.get(Xe),Tt=Pe,Tt.setIndex(Yn)),ce.isMesh)he.wireframe===!0?(ue.setLineWidth(he.wireframeLinewidth*ze()),Tt.setMode(j.LINES)):Tt.setMode(j.TRIANGLES);else if(ce.isLine){let yt=he.linewidth;yt===void 0&&(yt=1),ue.setLineWidth(yt*ze()),ce.isLineSegments?Tt.setMode(j.LINES):ce.isLineLoop?Tt.setMode(j.LINE_LOOP):Tt.setMode(j.LINE_STRIP)}else ce.isPoints?Tt.setMode(j.POINTS):ce.isSprite&&Tt.setMode(j.TRIANGLES);if(ce.isBatchedMesh)Tt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else if(ce.isInstancedMesh)Tt.renderInstances(Bt,rn,ce.count);else if(fe.isInstancedBufferGeometry){const yt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Vn=Math.min(fe.instanceCount,yt);Tt.renderInstances(Bt,rn,Vn)}else Tt.render(Bt,rn)};function ot(P,J,fe){P.transparent===!0&&P.side===Li&&P.forceSinglePass===!1?(P.side=or,P.needsUpdate=!0,Fi(P,J,fe),P.side=Ao,P.needsUpdate=!0,Fi(P,J,fe),P.side=Li):Fi(P,J,fe)}this.compile=function(P,J,fe=null){fe===null&&(fe=P),x=Ce.get(fe),x.init(),C.push(x),fe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(J.layers)&&(x.pushLight(ce),ce.castShadow&&x.pushShadow(ce))}),P!==fe&&P.traverseVisible(function(ce){ce.isLight&&ce.layers.test(J.layers)&&(x.pushLight(ce),ce.castShadow&&x.pushShadow(ce))}),x.setupLights(M._useLegacyLights);const he=new Set;return P.traverse(function(ce){const Ge=ce.material;if(Ge)if(Array.isArray(Ge))for(let Qe=0;Qe<Ge.length;Qe++){const at=Ge[Qe];ot(at,fe,ce),he.add(at)}else ot(Ge,fe,ce),he.add(Ge)}),C.pop(),x=null,he},this.compileAsync=function(P,J,fe=null){const he=this.compile(P,J,fe);return new Promise(ce=>{function Ge(){if(he.forEach(function(Qe){ge.get(Qe).currentProgram.isReady()&&he.delete(Qe)}),he.size===0){ce(P);return}setTimeout(Ge,10)}He.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let wt=null;function en(P){wt&&wt(P)}function vn(){cn.stop()}function Lt(){cn.start()}const cn=new mw;cn.setAnimationLoop(en),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(P){wt=P,$e.setAnimationLoop(P),P===null?cn.stop():cn.start()},$e.addEventListener("sessionstart",vn),$e.addEventListener("sessionend",Lt),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(J),J=$e.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,J,F),x=Ce.get(P,C.length),x.init(),C.push(x),_e.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W.setFromProjectionMatrix(_e),ee=this.localClippingEnabled,q=qe.init(this.clippingPlanes,ee),w=ye.get(P,_.length),w.init(),_.push(w),Ln(P,J,0,M.sortObjects),w.finish(),M.sortObjects===!0&&w.sort(X,ie),this.info.render.frame++,q===!0&&qe.beginShadows();const fe=x.state.shadowsArray;if(De.render(fe,P,J),q===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(w,P),x.setupLights(M._useLegacyLights),J.isArrayCamera){const he=J.cameras;for(let ce=0,Ge=he.length;ce<Ge;ce++){const Qe=he[ce];nu(w,P,Qe,Qe.viewport)}}else nu(w,P,J);F!==null&&(Me.updateMultisampleRenderTarget(F),Me.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(M,P,J),ft.resetDefaultState(),de=-1,b=null,C.pop(),C.length>0?x=C[C.length-1]:x=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function Ln(P,J,fe,he){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)fe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||W.intersectsSprite(P)){he&&be.setFromMatrixPosition(P.matrixWorld).applyMatrix4(_e);const Qe=T.update(P),at=P.material;at.visible&&w.push(P,Qe,at,fe,be.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||W.intersectsObject(P))){const Qe=T.update(P),at=P.material;if(he&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),be.copy(P.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),be.copy(Qe.boundingSphere.center)),be.applyMatrix4(P.matrixWorld).applyMatrix4(_e)),Array.isArray(at)){const Xe=Qe.groups;for(let vt=0,dt=Xe.length;vt<dt;vt++){const pt=Xe[vt],Bt=at[pt.materialIndex];Bt&&Bt.visible&&w.push(P,Qe,Bt,fe,be.z,pt)}}else at.visible&&w.push(P,Qe,at,fe,be.z,null)}}const Ge=P.children;for(let Qe=0,at=Ge.length;Qe<at;Qe++)Ln(Ge[Qe],J,fe,he)}function nu(P,J,fe,he){const ce=P.opaque,Ge=P.transmissive,Qe=P.transparent;x.setupLightsView(fe),q===!0&&qe.setGlobalState(M.clippingPlanes,fe),Ge.length>0&&Po(ce,Ge,J,fe),he&&ue.viewport(N.copy(he)),ce.length>0&&di(ce,J,fe),Ge.length>0&&di(Ge,J,fe),Qe.length>0&&di(Qe,J,fe),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Po(P,J,fe,he){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;const Ge=le.isWebGL2;Z===null&&(Z=new da(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?Nl:So,minFilter:Ul,samples:Ge?4:0})),M.getDrawingBufferSize(ve),Ge?Z.setSize(ve.x,ve.y):Z.setSize(nf(ve.x),nf(ve.y));const Qe=M.getRenderTarget();M.setRenderTarget(Z),M.getClearColor(pe),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const at=M.toneMapping;M.toneMapping=xo,di(P,fe,he),Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z);let Xe=!1;for(let vt=0,dt=J.length;vt<dt;vt++){const pt=J[vt],Bt=pt.object,Hn=pt.geometry,rn=pt.material,Yn=pt.group;if(rn.side===Li&&Bt.layers.test(he.layers)){const Tt=rn.side;rn.side=or,rn.needsUpdate=!0,Do(Bt,fe,he,Hn,rn,Yn),rn.side=Tt,rn.needsUpdate=!0,Xe=!0}}Xe===!0&&(Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z)),M.setRenderTarget(Qe),M.setClearColor(pe,H),M.toneMapping=at}function di(P,J,fe){const he=J.isScene===!0?J.overrideMaterial:null;for(let ce=0,Ge=P.length;ce<Ge;ce++){const Qe=P[ce],at=Qe.object,Xe=Qe.geometry,vt=he===null?Qe.material:he,dt=Qe.group;at.layers.test(fe.layers)&&Do(at,J,fe,Xe,vt,dt)}}function Do(P,J,fe,he,ce,Ge){P.onBeforeRender(M,J,fe,he,ce,Ge),P.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(M,J,fe,he,P,Ge),ce.transparent===!0&&ce.side===Li&&ce.forceSinglePass===!1?(ce.side=or,ce.needsUpdate=!0,M.renderBufferDirect(fe,J,he,ce,P,Ge),ce.side=Ao,ce.needsUpdate=!0,M.renderBufferDirect(fe,J,he,ce,P,Ge),ce.side=Li):M.renderBufferDirect(fe,J,he,ce,P,Ge),P.onAfterRender(M,J,fe,he,ce,Ge)}function Fi(P,J,fe){J.isScene!==!0&&(J=Oe);const he=ge.get(P),ce=x.state.lights,Ge=x.state.shadowsArray,Qe=ce.state.version,at=Y.getParameters(P,ce.state,Ge,J,fe),Xe=Y.getProgramCacheKey(at);let vt=he.programs;he.environment=P.isMeshStandardMaterial?J.environment:null,he.fog=J.fog,he.envMap=(P.isMeshStandardMaterial?Ie:we).get(P.envMap||he.environment),vt===void 0&&(P.addEventListener("dispose",Re),vt=new Map,he.programs=vt);let dt=vt.get(Xe);if(dt!==void 0){if(he.currentProgram===dt&&he.lightsStateVersion===Qe)return iu(P,at),dt}else at.uniforms=Y.getUniforms(P),P.onBuild(fe,at,M),P.onBeforeCompile(at,M),dt=Y.acquireProgram(at,Xe),vt.set(Xe,dt),he.uniforms=at.uniforms;const pt=he.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(pt.clippingPlanes=qe.uniform),iu(P,at),he.needsLights=ou(P),he.lightsStateVersion=Qe,he.needsLights&&(pt.ambientLightColor.value=ce.state.ambient,pt.lightProbe.value=ce.state.probe,pt.directionalLights.value=ce.state.directional,pt.directionalLightShadows.value=ce.state.directionalShadow,pt.spotLights.value=ce.state.spot,pt.spotLightShadows.value=ce.state.spotShadow,pt.rectAreaLights.value=ce.state.rectArea,pt.ltc_1.value=ce.state.rectAreaLTC1,pt.ltc_2.value=ce.state.rectAreaLTC2,pt.pointLights.value=ce.state.point,pt.pointLightShadows.value=ce.state.pointShadow,pt.hemisphereLights.value=ce.state.hemi,pt.directionalShadowMap.value=ce.state.directionalShadowMap,pt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,pt.spotShadowMap.value=ce.state.spotShadowMap,pt.spotLightMatrix.value=ce.state.spotLightMatrix,pt.spotLightMap.value=ce.state.spotLightMap,pt.pointShadowMap.value=ce.state.pointShadowMap,pt.pointShadowMatrix.value=ce.state.pointShadowMatrix),he.currentProgram=dt,he.uniformsList=null,dt}function ru(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=Yc.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function iu(P,J){const fe=ge.get(P);fe.outputColorSpace=J.outputColorSpace,fe.batching=J.batching,fe.instancing=J.instancing,fe.instancingColor=J.instancingColor,fe.skinning=J.skinning,fe.morphTargets=J.morphTargets,fe.morphNormals=J.morphNormals,fe.morphColors=J.morphColors,fe.morphTargetsCount=J.morphTargetsCount,fe.numClippingPlanes=J.numClippingPlanes,fe.numIntersection=J.numClipIntersection,fe.vertexAlphas=J.vertexAlphas,fe.vertexTangents=J.vertexTangents,fe.toneMapping=J.toneMapping}function Nf(P,J,fe,he,ce){J.isScene!==!0&&(J=Oe),Me.resetTextureUnits();const Ge=J.fog,Qe=he.isMeshStandardMaterial?J.environment:null,at=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ii,Xe=(he.isMeshStandardMaterial?Ie:we).get(he.envMap||Qe),vt=he.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,dt=!!fe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),pt=!!fe.morphAttributes.position,Bt=!!fe.morphAttributes.normal,Hn=!!fe.morphAttributes.color;let rn=xo;he.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(rn=M.toneMapping);const Yn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Tt=Yn!==void 0?Yn.length:0,yt=ge.get(he),Vn=x.state.lights;if(q===!0&&(ee===!0||P!==b)){const qn=P===b&&he.id===de;qe.setState(he,P,qn)}let Yt=!1;he.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Vn.state.version||yt.outputColorSpace!==at||ce.isBatchedMesh&&yt.batching===!1||!ce.isBatchedMesh&&yt.batching===!0||ce.isInstancedMesh&&yt.instancing===!1||!ce.isInstancedMesh&&yt.instancing===!0||ce.isSkinnedMesh&&yt.skinning===!1||!ce.isSkinnedMesh&&yt.skinning===!0||ce.isInstancedMesh&&yt.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&yt.instancingColor===!1&&ce.instanceColor!==null||yt.envMap!==Xe||he.fog===!0&&yt.fog!==Ge||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==qe.numPlanes||yt.numIntersection!==qe.numIntersection)||yt.vertexAlphas!==vt||yt.vertexTangents!==dt||yt.morphTargets!==pt||yt.morphNormals!==Bt||yt.morphColors!==Hn||yt.toneMapping!==rn||le.isWebGL2===!0&&yt.morphTargetsCount!==Tt)&&(Yt=!0):(Yt=!0,yt.__version=he.version);let pi=yt.currentProgram;Yt===!0&&(pi=Fi(he,J,ce));let au=!1,qr=!1,Oi=!1;const tn=pi.getUniforms(),_r=yt.uniforms;if(ue.useProgram(pi.program)&&(au=!0,qr=!0,Oi=!0),he.id!==de&&(de=he.id,qr=!0),au||b!==P){tn.setValue(j,"projectionMatrix",P.projectionMatrix),tn.setValue(j,"viewMatrix",P.matrixWorldInverse);const qn=tn.map.cameraPosition;qn!==void 0&&qn.setValue(j,be.setFromMatrixPosition(P.matrixWorld)),le.logarithmicDepthBuffer&&tn.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&tn.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,qr=!0,Oi=!0)}if(ce.isSkinnedMesh){tn.setOptional(j,ce,"bindMatrix"),tn.setOptional(j,ce,"bindMatrixInverse");const qn=ce.skeleton;qn&&(le.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),tn.setValue(j,"boneTexture",qn.boneTexture,Me)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ce.isBatchedMesh&&(tn.setOptional(j,ce,"batchingTexture"),tn.setValue(j,"batchingTexture",ce._matricesTexture,Me));const Ps=fe.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&le.isWebGL2===!0)&&lt.update(ce,fe,pi),(qr||yt.receiveShadow!==ce.receiveShadow)&&(yt.receiveShadow=ce.receiveShadow,tn.setValue(j,"receiveShadow",ce.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(_r.envMap.value=Xe,_r.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),qr&&(tn.setValue(j,"toneMappingExposure",M.toneMappingExposure),yt.needsLights&&hi(_r,Oi),Ge&&he.fog===!0&&Ae.refreshFogUniforms(_r,Ge),Ae.refreshMaterialUniforms(_r,he,re,se,Z),Yc.upload(j,ru(yt),_r,Me)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Yc.upload(j,ru(yt),_r,Me),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&tn.setValue(j,"center",ce.center),tn.setValue(j,"modelViewMatrix",ce.modelViewMatrix),tn.setValue(j,"normalMatrix",ce.normalMatrix),tn.setValue(j,"modelMatrix",ce.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const qn=he.uniformsGroups;for(let Io=0,su=qn.length;Io<su;Io++)if(le.isWebGL2){const ya=qn[Io];st.update(ya,pi),st.bind(ya,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function hi(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function ou(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,J,fe){ge.get(P.texture).__webglTexture=J,ge.get(P.depthTexture).__webglTexture=fe;const he=ge.get(P);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=fe===void 0,he.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,J){const fe=ge.get(P);fe.__webglFramebuffer=J,fe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,fe=0){F=P,I=J,O=fe;let he=!0,ce=null,Ge=!1,Qe=!1;if(P){const Xe=ge.get(P);Xe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(j.FRAMEBUFFER,null),he=!1):Xe.__webglFramebuffer===void 0?Me.setupRenderTarget(P):Xe.__hasExternalTextures&&Me.rebindTextures(P,ge.get(P.texture).__webglTexture,ge.get(P.depthTexture).__webglTexture);const vt=P.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Qe=!0);const dt=ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(dt[J])?ce=dt[J][fe]:ce=dt[J],Ge=!0):le.isWebGL2&&P.samples>0&&Me.useMultisampledRTT(P)===!1?ce=ge.get(P).__webglMultisampledFramebuffer:Array.isArray(dt)?ce=dt[fe]:ce=dt,N.copy(P.viewport),ae.copy(P.scissor),ne=P.scissorTest}else N.copy($).multiplyScalar(re).floor(),ae.copy(L).multiplyScalar(re).floor(),ne=z;if(ue.bindFramebuffer(j.FRAMEBUFFER,ce)&&le.drawBuffers&&he&&ue.drawBuffers(P,ce),ue.viewport(N),ue.scissor(ae),ue.setScissorTest(ne),Ge){const Xe=ge.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xe.__webglTexture,fe)}else if(Qe){const Xe=ge.get(P.texture),vt=J||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,fe||0,vt)}de=-1},this.readRenderTargetPixels=function(P,J,fe,he,ce,Ge,Qe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Qe!==void 0&&(at=at[Qe]),at){ue.bindFramebuffer(j.FRAMEBUFFER,at);try{const Xe=P.texture,vt=Xe.format,dt=Xe.type;if(vt!==br&&It.convert(vt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pt=dt===Nl&&(He.has("EXT_color_buffer_half_float")||le.isWebGL2&&He.has("EXT_color_buffer_float"));if(dt!==So&&It.convert(dt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dt===Pi&&(le.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-he&&fe>=0&&fe<=P.height-ce&&j.readPixels(J,fe,he,ce,It.convert(vt),It.convert(dt),Ge)}finally{const Xe=F!==null?ge.get(F).__webglFramebuffer:null;ue.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(P,J,fe=0){const he=Math.pow(2,-fe),ce=Math.floor(J.image.width*he),Ge=Math.floor(J.image.height*he);Me.setTexture2D(J,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,P.x,P.y,ce,Ge),ue.unbindTexture()},this.copyTextureToTexture=function(P,J,fe,he=0){const ce=J.image.width,Ge=J.image.height,Qe=It.convert(fe.format),at=It.convert(fe.type);Me.setTexture2D(fe,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,fe.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,fe.unpackAlignment),J.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,he,P.x,P.y,ce,Ge,Qe,at,J.image.data):J.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,he,P.x,P.y,J.mipmaps[0].width,J.mipmaps[0].height,Qe,J.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,he,P.x,P.y,Qe,at,J.image),he===0&&fe.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(P,J,fe,he,ce=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=P.max.x-P.min.x+1,Qe=P.max.y-P.min.y+1,at=P.max.z-P.min.z+1,Xe=It.convert(he.format),vt=It.convert(he.type);let dt;if(he.isData3DTexture)Me.setTexture3D(he,0),dt=j.TEXTURE_3D;else if(he.isDataArrayTexture)Me.setTexture2DArray(he,0),dt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,he.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,he.unpackAlignment);const pt=j.getParameter(j.UNPACK_ROW_LENGTH),Bt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Hn=j.getParameter(j.UNPACK_SKIP_PIXELS),rn=j.getParameter(j.UNPACK_SKIP_ROWS),Yn=j.getParameter(j.UNPACK_SKIP_IMAGES),Tt=fe.isCompressedTexture?fe.mipmaps[0]:fe.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Tt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,P.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,P.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,P.min.z),fe.isDataTexture||fe.isData3DTexture?j.texSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,vt,Tt.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,Tt.data)):j.texSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,vt,Tt),j.pixelStorei(j.UNPACK_ROW_LENGTH,pt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Bt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Hn),j.pixelStorei(j.UNPACK_SKIP_ROWS,rn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Yn),ce===0&&he.generateMipmaps&&j.generateMipmap(dt),ue.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Me.setTextureCube(P,0):P.isData3DTexture?Me.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Me.setTexture2DArray(P,0):Me.setTexture2D(P,0),ue.unbindTexture()},this.resetState=function(){I=0,O=0,F=null,ue.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jm?"display-p3":"srgb",t.unpackColorSpace=Ot.workingColorSpace===Lf?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?fa:QE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fa?bn:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uz extends jp{}uz.prototype.isWebGL1Renderer=!0;class Qm{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new Qm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cz extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class fz{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $n=new B;class go{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new mr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new go(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dz extends ar{constructor(e=null,t=1,i=1,a,s,c,u,d,h=Tn,p=Tn,v,g){super(null,c,u,d,h,p,a,s,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function hz(n,e){return n.z-e.z}function pz(n,e){return e.z-n.z}class mz{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const i=this.pool,a=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});const s=i[this.index];a.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const as="batchId",lo=new Gt,by=new Gt,vz=new Gt,Cy=new Gt,ip=new Pf,Oc=new Dr,Qo=new ui,yl=new B,op=new mz,On=new Yr,zc=[];function gz(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const a=n.count;for(let s=0;s<a;s++)for(let c=0;c<i;c++)e.setComponent(s+t,c,n.getComponent(s,c))}else e.array.set(n.array,t*i);e.needsUpdate=!0}class _z extends Yr{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,i=t*2,a){super(new Bn,a),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new dz(t,e,e,br,Pi);this._matricesTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,a=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const u in e.attributes){const d=e.getAttribute(u),{array:h,itemSize:p,normalized:v}=d,g=new h.constructor(i*p),S=new d.constructor(g,p,v);S.setUsage(d.usage),t.setAttribute(u,S)}if(e.getIndex()!==null){const u=i>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new mr(u,1))}const c=a>65536?new Uint32Array(i):new Uint16Array(i);t.setAttribute(as,new mr(c,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(as))throw new Error(`BatchedMesh: Geometry cannot use attribute "${as}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(i===as)continue;if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const a=e.getAttribute(i),s=t.getAttribute(i);if(a.itemSize!==s.itemSize||a.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this._geometryCount,t=this.boundingBox,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,lo),this.getBoundingBoxAt(a,Oc).applyMatrix4(lo),t.union(Oc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this._geometryCount,t=this.boundingSphere,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,lo),this.getBoundingSphereAt(a,Qo).applyMatrix4(lo),t.union(Qo))}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const a={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const c=this._reservedRanges,u=this._drawRanges,d=this._bounds;this._geometryCount!==0&&(s=c[c.length-1]),t===-1?a.vertexCount=e.getAttribute("position").count:a.vertexCount=t,s===null?a.vertexStart=0:a.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),p=h!==null;if(p&&(i===-1?a.indexCount=h.count:a.indexCount=i,s===null?a.indexStart=0:a.indexStart=s.indexStart+s.indexCount),a.indexStart!==-1&&a.indexStart+a.indexCount>this._maxIndexCount||a.vertexStart+a.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const v=this._visibility,g=this._active,S=this._matricesTexture,E=this._matricesTexture.image.data;v.push(!0),g.push(!0);const w=this._geometryCount;this._geometryCount++,vz.toArray(E,w*16),S.needsUpdate=!0,c.push(a),u.push({start:p?a.indexStart:a.vertexStart,count:-1}),d.push({boxInitialized:!1,box:new Dr,sphereInitialized:!1,sphere:new ui});const x=this.geometry.getAttribute(as);for(let _=0;_<a.vertexCount;_++)x.setX(a.vertexStart+_,w);return x.needsUpdate=!0,this.setGeometryAt(w,e),w}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,a=i.getIndex()!==null,s=i.getIndex(),c=t.getIndex(),u=this._reservedRanges[e];if(a&&c.count>u.indexCount||t.attributes.position.count>u.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const d=u.vertexStart,h=u.vertexCount;for(const S in i.attributes){if(S===as)continue;const E=t.getAttribute(S),w=i.getAttribute(S);gz(E,w,d);const x=E.itemSize;for(let _=E.count,C=h;_<C;_++){const M=d+_;for(let R=0;R<x;R++)w.setComponent(M,R,0)}w.needsUpdate=!0}if(a){const S=u.indexStart;for(let E=0;E<c.count;E++)s.setX(S+E,d+c.getX(E));for(let E=c.count,w=u.indexCount;E<w;E++)s.setX(S+E,d);s.needsUpdate=!0}const p=this._bounds[e];t.boundingBox!==null?(p.box.copy(t.boundingBox),p.boxInitialized=!0):p.boxInitialized=!1,t.boundingSphere!==null?(p.sphere.copy(t.boundingSphere),p.sphereInitialized=!0):p.sphereInitialized=!1;const v=this._drawRanges[e],g=t.getAttribute("position");return v.count=a?c.count:g.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.box,c=this.geometry;if(a.boxInitialized===!1){s.makeEmpty();const u=c.index,d=c.attributes.position,h=this._drawRanges[e];for(let p=h.start,v=h.start+h.count;p<v;p++){let g=p;u&&(g=u.getX(g)),s.expandByPoint(yl.fromBufferAttribute(d,g))}a.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.sphere,c=this.geometry;if(a.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,Oc),Oc.getCenter(s.center);const u=c.index,d=c.attributes.position,h=this._drawRanges[e];let p=0;for(let v=h.start,g=h.start+h.count;v<g;v++){let S=v;u&&(S=u.getX(S)),yl.fromBufferAttribute(d,S),p=Math.max(p,s.center.distanceToSquared(yl))}s.radius=Math.sqrt(p),a.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const i=this._active,a=this._matricesTexture,s=this._matricesTexture.image.data,c=this._geometryCount;return e>=c||i[e]===!1?this:(t.toArray(s,e*16),a.needsUpdate=!0,this)}getMatrixAt(e,t){const i=this._active,a=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||i[e]===!1?null:t.fromArray(a,e*16)}setVisibleAt(e,t){const i=this._visibility,a=this._active,s=this._geometryCount;return e>=s||a[e]===!1||i[e]===t?this:(i[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,i=this._active,a=this._geometryCount;return e>=a||i[e]===!1?!1:t[e]}raycast(e,t){const i=this._visibility,a=this._active,s=this._drawRanges,c=this._geometryCount,u=this.matrixWorld,d=this.geometry;On.material=this.material,On.geometry.index=d.index,On.geometry.attributes=d.attributes,On.geometry.boundingBox===null&&(On.geometry.boundingBox=new Dr),On.geometry.boundingSphere===null&&(On.geometry.boundingSphere=new ui);for(let h=0;h<c;h++){if(!i[h]||!a[h])continue;const p=s[h];On.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(h,On.matrixWorld).premultiply(u),this.getBoundingBoxAt(h,On.geometry.boundingBox),this.getBoundingSphereAt(h,On.geometry.boundingSphere),On.raycast(e,zc);for(let v=0,g=zc.length;v<g;v++){const S=zc[v];S.object=this,S.batchId=h,t.push(S)}zc.length=0}On.material=null,On.geometry.index=null,On.geometry.attributes={},On.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,i,a,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const c=a.getIndex(),u=c===null?1:c.array.BYTES_PER_ELEMENT,d=this._visibility,h=this._multiDrawStarts,p=this._multiDrawCounts,v=this._drawRanges,g=this.perObjectFrustumCulled;g&&(Cy.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),ip.setFromProjectionMatrix(Cy,e.isWebGPURenderer?Fl:ai));let S=0;if(this.sortObjects){by.copy(this.matrixWorld).invert(),yl.setFromMatrixPosition(i.matrixWorld).applyMatrix4(by);for(let x=0,_=d.length;x<_;x++)if(d[x]){this.getMatrixAt(x,lo),this.getBoundingSphereAt(x,Qo).applyMatrix4(lo);let C=!1;if(g&&(C=!ip.intersectsSphere(Qo)),!C){const M=yl.distanceTo(Qo.center);op.push(v[x],M)}}const E=op.list,w=this.customSort;w===null?E.sort(s.transparent?pz:hz):w.call(this,E,i);for(let x=0,_=E.length;x<_;x++){const C=E[x];h[S]=C.start*u,p[S]=C.count,S++}op.reset()}else for(let E=0,w=d.length;E<w;E++)if(d[E]){let x=!1;if(g&&(this.getMatrixAt(E,lo),this.getBoundingSphereAt(E,Qo).applyMatrix4(lo),x=!ip.intersectsSphere(Qo)),!x){const _=v[E];h[S]=_.start*u,p[S]=_.count,S++}}this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,i,a,s,c){this.onBeforeRender(e,null,a,s,c)}}class eu extends Cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ry=new B,Ly=new B,Py=new Gt,ap=new qm,kc=new ui;class yz extends jn{constructor(e=new Bn,t=new eu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)Ry.fromBufferAttribute(t,a-1),Ly.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Ry.distanceTo(Ly);e.setAttribute("lineDistance",new an(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(a),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;Py.copy(a).invert(),ap.copy(e.ray).applyMatrix4(Py);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=new B,p=new B,v=new B,g=new B,S=this.isLineSegments?2:1,E=i.index,x=i.attributes.position;if(E!==null){const _=Math.max(0,c.start),C=Math.min(E.count,c.start+c.count);for(let M=_,R=C-1;M<R;M+=S){const I=E.getX(M),O=E.getX(M+1);if(h.fromBufferAttribute(x,I),p.fromBufferAttribute(x,O),ap.distanceSqToSegment(h,p,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const de=e.ray.origin.distanceTo(g);de<e.near||de>e.far||t.push({distance:de,point:v.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,c.start),C=Math.min(x.count,c.start+c.count);for(let M=_,R=C-1;M<R;M+=S){if(h.fromBufferAttribute(x,M),p.fromBufferAttribute(x,M+1),ap.distanceSqToSegment(h,p,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(g);O<e.near||O>e.far||t.push({distance:O,point:v.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}const Dy=new B,Iy=new B;class If extends yz{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)Dy.fromBufferAttribute(t,a),Iy.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Dy.distanceTo(Iy);e.setAttribute("lineDistance",new an(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xz extends Bn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,a=new B,s=new B;if(e.index!==null){const c=e.attributes.position,u=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:u.count,materialIndex:0}]);for(let h=0,p=d.length;h<p;++h){const v=d[h],g=v.start,S=v.count;for(let E=g,w=g+S;E<w;E+=3)for(let x=0;x<3;x++){const _=u.getX(E+x),C=u.getX(E+(x+1)%3);a.fromBufferAttribute(c,_),s.fromBufferAttribute(c,C),Uy(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}}else{const c=e.attributes.position;for(let u=0,d=c.count/3;u<d;u++)for(let h=0;h<3;h++){const p=3*u+h,v=3*u+(h+1)%3;a.fromBufferAttribute(c,p),s.fromBufferAttribute(c,v),Uy(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new an(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Uy(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(a)===!0?!1:(t.add(i),t.add(a),!0)}class Sz extends Cs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ew,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ez extends eu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ew extends jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sp=new Gt,Ny=new B,Fy=new B;class wz{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pf,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ny.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ny),Fy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fy),t.updateMatrixWorld(),sp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oy=new Gt,xl=new B,lp=new B;class Mz extends wz{constructor(){super(new pr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xl.setFromMatrixPosition(e.matrixWorld),i.position.copy(xl),lp.copy(i.position),lp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(lp),i.updateMatrixWorld(),a.makeTranslation(-xl.x,-xl.y,-xl.z),Oy.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oy)}}class Az extends Ew{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Mz}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tz extends Ew{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bz extends Bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Yp extends fz{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class zy{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Cn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ky=new B,Bc=new B;class Cz{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ky.subVectors(e,this.start),Bc.subVectors(this.end,this.start);const i=Bc.dot(Bc);let s=Bc.dot(ky)/i;return t&&(s=Cn(s,0,1)),s}closestPointToPoint(e,t,i){const a=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Rz extends If{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Bn;a.setAttribute("position",new an(t,3)),a.setAttribute("color",new an(i,3));const s=new eu({vertexColors:!0,toneMapped:!1});super(a,s),this.type="AxesHelper"}setColors(e,t,i){const a=new nt,s=this.geometry.attributes.color.array;return a.set(e),a.toArray(s,0),a.toArray(s,3),a.set(t),a.toArray(s,6),a.toArray(s,9),a.set(i),a.toArray(s,12),a.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class ci{constructor(e,t,i,a,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),ci.nextNameID=ci.nextNameID||0,this.$name.id=`lil-gui-name-${++ci.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Lz extends ci{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function qp(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Pz={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:qp,toHexString:qp},zl={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Dz={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=zl.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return zl.toHexString(a)}},Iz={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=zl.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return zl.toHexString(a)}},Uz=[Pz,zl,Dz,Iz];function Nz(n){return Uz.find(e=>e.match(n))}class Fz extends ci{constructor(e,t,i,a){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Nz(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=qp(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class up extends ci{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Oz extends ci{constructor(e,t,i,a,s,c){super(e,t,i,"number"),this._initInput(),this.min(a),this.max(s);const u=c!==void 0;this.step(u?c:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let C=parseFloat(this.$input.value);isNaN(C)||(this._stepExplicit&&(C=this._snap(C)),this.setValue(this._clamp(C)))},i=C=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+C),this.$input.value=this.getValue())},a=C=>{C.key==="Enter"&&this.$input.blur(),C.code==="ArrowUp"&&(C.preventDefault(),i(this._step*this._arrowKeyMultiplier(C))),C.code==="ArrowDown"&&(C.preventDefault(),i(this._step*this._arrowKeyMultiplier(C)*-1))},s=C=>{this._inputFocused&&(C.preventDefault(),i(this._step*this._normalizeMouseWheel(C)))};let c=!1,u,d,h,p,v;const g=5,S=C=>{u=C.clientX,d=h=C.clientY,c=!0,p=this.getValue(),v=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",w)},E=C=>{if(c){const M=C.clientX-u,R=C.clientY-d;Math.abs(R)>g?(C.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>g&&w()}if(!c){const M=C.clientY-h;v-=M*this._step*this._arrowKeyMultiplier(C),p+v>this._max?v=this._max-p:p+v<this._min&&(v=this._min-p),this._snapClampSetValue(p+v)}h=C.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",w)},x=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,C,M,R,I)=>(_-C)/(M-C)*(I-R)+R,t=_=>{const C=this.$slider.getBoundingClientRect();let M=e(_,C.left,C.right,this._min,this._max);this._snapClampSetValue(M)},i=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",s)},a=_=>{t(_.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",s)};let c=!1,u,d;const h=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),c=!1},p=_=>{_.touches.length>1||(this._hasScrollBar?(u=_.touches[0].clientX,d=_.touches[0].clientY,c=!0):h(_),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",g))},v=_=>{if(c){const C=_.touches[0].clientX-u,M=_.touches[0].clientY-d;Math.abs(C)>Math.abs(M)?h(_):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",g))}else _.preventDefault(),t(_.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",g)},S=this._callOnFinishChange.bind(this),E=400;let w;const x=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const M=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(S,E)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class zz extends ci{constructor(e,t,i,a){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class kz extends ci{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Bz=`.lil-gui {
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
}`;function Hz(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let By=!1;class of{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:a,title:s="Controls",closeFolders:c=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!By&&u&&(Hz(Bz),By=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,i,a,s){if(Object(i)===i)return new zz(this,e,t,i);const c=e[t];switch(typeof c){case"number":return new Oz(this,e,t,i,a,s);case"boolean":return new Lz(this,e,t);case"string":return new kz(this,e,t);case"function":return new up(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,i=1){return new Fz(this,e,t,i)}addFolder(e){const t=new of({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof up||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof up)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function cp(n,e,t,i){return new(t||(t=Promise))((function(a,s){function c(h){try{d(i.next(h))}catch(p){s(p)}}function u(h){try{d(i.throw(h))}catch(p){s(p)}}function d(h){var p;h.done?a(h.value):(p=h.value,p instanceof t?p:new t((function(v){v(p)}))).then(c,u)}d((i=i.apply(n,[])).next())}))}class ev{constructor(e,t,i,a){this.size=e,this.width=t,this.height=i,this.charLength=a,this.chars=""}static parse(e){const t=e.split(" "),i=t[0],a=i.split("x");return new ev(i,+a[0],+a[1],+t[1])}get src(){return"data:image/jpeg;base64,"+this.chars}get isValid(){return this.chars.length==this.charLength&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(this.chars)}}class tv{constructor(e,t,i,a){this.src=e,this.gcode=t,this.params=i,this.comment=a}}class Hy extends tv{constructor(e,t,i,a){super(e,t,i,a),this.params=i}}class uo extends tv{constructor(e,t,i,a){super(e,t,void 0,i),this.toolIndex=a}}class Vy{constructor(e,t,i,a=0){this.layer=e,this.commands=t,this.lineNumber=i,this.height=a}}class af{constructor(e){this.lines=[],this.preamble=new Vy(-1,[],0),this.layers=[],this.curZ=0,this.maxZ=0,this.metadata={thumbnails:{}},this.tolerance=0,this.tolerance=e??this.tolerance}parseGCode(e){const t=Array.isArray(e)?e:e.split(`
`);this.lines=this.lines.concat(t);const i=this.lines2commands(t);this.groupIntoLayers(i);const a=this.parseMetadata(i.filter((s=>s.comment))).thumbnails;for(const[s,c]of Object.entries(a))this.metadata.thumbnails[s]=c;return{layers:this.layers,metadata:this.metadata}}lines2commands(e){return e.map((t=>this.parseCommand(t)))}parseCommand(e,t=!0){var i;const a=e.trim().split(";"),s=a[0],c=t&&a[1]||void 0,u=s.split(/([a-zA-Z])/g).slice(1).map((p=>p.trim())),d=u.length?`${(i=u[0])===null||i===void 0?void 0:i.toLowerCase()}${u[1]}`:"",h=this.parseParams(u.slice(2));switch(d){case"g0":case"g00":case"g1":case"g01":case"g2":case"g02":case"g3":case"g03":return new Hy(e,d,h,c);case"t0":return new uo(e,d,c,0);case"t1":return new uo(e,d,c,1);case"t2":return new uo(e,d,c,2);case"t3":return new uo(e,d,c,3);case"t4":return new uo(e,d,c,4);case"t5":return new uo(e,d,c,5);case"t6":return new uo(e,d,c,6);case"t7":return new uo(e,d,c,7);default:return new tv(e,d,h,c)}}parseMove(e){return e.reduce(((t,i)=>{const a=i.charAt(0).toLowerCase();return a!="x"&&a!="y"&&a!="z"&&a!="e"&&a!="r"&&a!="f"&&a!="i"&&a!="j"||(t[a]=parseFloat(i.slice(1))),t}),{})}isAlpha(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90}parseParams(e){return e.reduce(((t,i,a,s)=>{if(a%2==0)return t;let c=s[a-1];return c=c.toLowerCase(),this.isAlpha(c)&&(t[c]=parseFloat(i)),t}),{})}groupIntoLayers(e){var t;for(let i=0;i<e.length;i++){const a=e[i];if(a instanceof Hy){const s=a.params;if(s.z&&(this.curZ=s.z),((t=s.e)!==null&&t!==void 0?t:0)>0&&(s.x!=null||s.y!=null)&&Math.abs(this.curZ-(this.maxZ||-1/0))>this.tolerance){const c=Math.abs(this.curZ-this.maxZ);this.maxZ=this.curZ,this.layers.push(new Vy(this.layers.length,[],i,c))}}this.maxLayer.commands.push(a)}return this.layers}get maxLayer(){var e;return(e=this.layers[this.layers.length-1])!==null&&e!==void 0?e:this.preamble}parseMetadata(e){const t={};let i;for(const a of e){const s=a.comment;if(!s)continue;const c=s.indexOf("thumbnail begin"),u=s.indexOf("thumbnail end");c>-1?i=ev.parse(s.slice(c+15).trim()):i&&(u==-1?i.chars+=s.trim():(i.isValid&&(t[i.size]=i),i=void 0))}return{thumbnails:t}}}af.prototype.parseGcode=af.prototype.parseGCode;const Gy={type:"change"},fp={type:"start"},Wy={type:"end"},Hc=new qm,$y=new fo,Vz=Math.cos(70*nw.DEG2RAD);class Gz extends _a{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Va.ROTATE,MIDDLE:Va.DOLLY,RIGHT:Va.PAN},this.touches={ONE:Ga.ROTATE,TWO:Ga.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(le){le.addEventListener("keydown",ze),this._domElementKeyEvents=le},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ze),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gy),i.update(),s=a.NONE},this.update=(function(){const le=new B,ue=new ha().setFromUnitVectors(e.up,new B(0,1,0)),xe=ue.clone().invert(),ge=new B,Me=new ha,we=new B,Ie=2*Math.PI;return function(Ze=null){const D=i.object.position;le.copy(D).sub(i.target),le.applyQuaternion(ue),u.setFromVector3(le),i.autoRotate&&s===a.NONE&&N((function(ye){return ye!==null?2*Math.PI/60*i.autoRotateSpeed*ye:2*Math.PI/60/60*i.autoRotateSpeed})(Ze)),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let T=i.minAzimuthAngle,Y=i.maxAzimuthAngle;isFinite(T)&&isFinite(Y)&&(T<-Math.PI?T+=Ie:T>Math.PI&&(T-=Ie),Y<-Math.PI?Y+=Ie:Y>Math.PI&&(Y-=Ie),u.theta=T<=Y?Math.max(T,Math.min(Y,u.theta)):u.theta>(T+Y)/2?Math.max(T,u.theta):Math.min(Y,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&O||i.object.isOrthographicCamera?u.radius=X(u.radius):u.radius=X(u.radius*h),le.setFromSpherical(u),le.applyQuaternion(xe),D.copy(i.target).add(le),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let Ae=!1;if(i.zoomToCursor&&O){let ye=null;if(i.object.isPerspectiveCamera){const Ce=le.length();ye=X(Ce*h);const qe=Ce-ye;i.object.position.addScaledVector(R,qe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ce=new B(I.x,I.y,0);Ce.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0;const qe=new B(I.x,I.y,0);qe.unproject(i.object),i.object.position.sub(qe).add(Ce),i.object.updateMatrixWorld(),ye=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ye).add(i.object.position):(Hc.origin.copy(i.object.position),Hc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Hc.direction))<Vz?e.lookAt(i.target):($y.setFromNormalAndCoplanarPoint(i.object.up,i.target),Hc.intersectPlane($y,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0);return h=1,O=!1,!!(Ae||ge.distanceToSquared(i.object.position)>c||8*(1-Me.dot(i.object.quaternion))>c||we.distanceToSquared(i.target)>0)&&(i.dispatchEvent(Gy),ge.copy(i.object.position),Me.copy(i.object.quaternion),we.copy(i.target),!0)}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Oe),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ze),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const c=1e-6,u=new zy,d=new zy;let h=1;const p=new B,v=new ht,g=new ht,S=new ht,E=new ht,w=new ht,x=new ht,_=new ht,C=new ht,M=new ht,R=new B,I=new ht;let O=!1;const F=[],de={};function b(){return Math.pow(.95,i.zoomSpeed)}function N(le){d.theta-=le}function ae(le){d.phi-=le}const ne=(function(){const le=new B;return function(ue,xe){le.setFromMatrixColumn(xe,0),le.multiplyScalar(-ue),p.add(le)}})(),pe=(function(){const le=new B;return function(ue,xe){i.screenSpacePanning===!0?le.setFromMatrixColumn(xe,1):(le.setFromMatrixColumn(xe,0),le.crossVectors(i.object.up,le)),le.multiplyScalar(ue),p.add(le)}})(),H=(function(){const le=new B;return function(ue,xe){const ge=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;le.copy(Me).sub(i.target);let we=le.length();we*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*ue*we/ge.clientHeight,i.object.matrix),pe(2*xe*we/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(ue*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),pe(xe*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Q(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(le){if(!i.zoomToCursor)return;O=!0;const ue=i.domElement.getBoundingClientRect(),xe=le.clientX-ue.left,ge=le.clientY-ue.top,Me=ue.width,we=ue.height;I.x=xe/Me*2-1,I.y=-ge/we*2+1,R.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function X(le){return Math.max(i.minDistance,Math.min(i.maxDistance,le))}function ie(le){v.set(le.clientX,le.clientY)}function $(le){E.set(le.clientX,le.clientY)}function L(){if(F.length===1)v.set(F[0].pageX,F[0].pageY);else{const le=.5*(F[0].pageX+F[1].pageX),ue=.5*(F[0].pageY+F[1].pageY);v.set(le,ue)}}function z(){if(F.length===1)E.set(F[0].pageX,F[0].pageY);else{const le=.5*(F[0].pageX+F[1].pageX),ue=.5*(F[0].pageY+F[1].pageY);E.set(le,ue)}}function W(){const le=F[0].pageX-F[1].pageX,ue=F[0].pageY-F[1].pageY,xe=Math.sqrt(le*le+ue*ue);_.set(0,xe)}function q(le){if(F.length==1)g.set(le.pageX,le.pageY);else{const xe=He(le),ge=.5*(le.pageX+xe.x),Me=.5*(le.pageY+xe.y);g.set(ge,Me)}S.subVectors(g,v).multiplyScalar(i.rotateSpeed);const ue=i.domElement;N(2*Math.PI*S.x/ue.clientHeight),ae(2*Math.PI*S.y/ue.clientHeight),v.copy(g)}function ee(le){if(F.length===1)w.set(le.pageX,le.pageY);else{const ue=He(le),xe=.5*(le.pageX+ue.x),ge=.5*(le.pageY+ue.y);w.set(xe,ge)}x.subVectors(w,E).multiplyScalar(i.panSpeed),H(x.x,x.y),E.copy(w)}function Z(le){const ue=He(le),xe=le.pageX-ue.x,ge=le.pageY-ue.y,Me=Math.sqrt(xe*xe+ge*ge);C.set(0,Me),M.set(0,Math.pow(C.y/_.y,i.zoomSpeed)),Q(M.y),_.copy(C)}function _e(le){i.enabled!==!1&&(F.length===0&&(i.domElement.setPointerCapture(le.pointerId),i.domElement.addEventListener("pointermove",ve),i.domElement.addEventListener("pointerup",be)),(function(ue){F.push(ue)})(le),le.pointerType==="touch"?(function(ue){switch(Dt(ue),F.length){case 1:switch(i.touches.ONE){case Ga.ROTATE:if(i.enableRotate===!1)return;L(),s=a.TOUCH_ROTATE;break;case Ga.PAN:if(i.enablePan===!1)return;z(),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(i.touches.TWO){case Ga.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;i.enableZoom&&W(),i.enablePan&&z(),s=a.TOUCH_DOLLY_PAN;break;case Ga.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;i.enableZoom&&W(),i.enableRotate&&L(),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(fp)})(le):(function(ue){let xe;switch(ue.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Va.DOLLY:if(i.enableZoom===!1)return;(function(ge){re(ge),_.set(ge.clientX,ge.clientY)})(ue),s=a.DOLLY;break;case Va.ROTATE:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enablePan===!1)return;$(ue),s=a.PAN}else{if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}break;case Va.PAN:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}else{if(i.enablePan===!1)return;$(ue),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(fp)})(le))}function ve(le){i.enabled!==!1&&(le.pointerType==="touch"?(function(ue){switch(Dt(ue),s){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;q(ue),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ee(ue),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enablePan&&ee(xe)})(ue),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enableRotate&&q(xe)})(ue),i.update();break;default:s=a.NONE}})(le):(function(ue){switch(s){case a.ROTATE:if(i.enableRotate===!1)return;(function(xe){g.set(xe.clientX,xe.clientY),S.subVectors(g,v).multiplyScalar(i.rotateSpeed);const ge=i.domElement;N(2*Math.PI*S.x/ge.clientHeight),ae(2*Math.PI*S.y/ge.clientHeight),v.copy(g),i.update()})(ue);break;case a.DOLLY:if(i.enableZoom===!1)return;(function(xe){C.set(xe.clientX,xe.clientY),M.subVectors(C,_),M.y>0?Q(b()):M.y<0&&se(b()),_.copy(C),i.update()})(ue);break;case a.PAN:if(i.enablePan===!1)return;(function(xe){w.set(xe.clientX,xe.clientY),x.subVectors(w,E).multiplyScalar(i.panSpeed),H(x.x,x.y),E.copy(w),i.update()})(ue)}})(le))}function be(le){(function(ue){delete de[ue.pointerId];for(let xe=0;xe<F.length;xe++)if(F[xe].pointerId==ue.pointerId)return void F.splice(xe,1)})(le),F.length===0&&(i.domElement.releasePointerCapture(le.pointerId),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(Wy),s=a.NONE}function Oe(le){i.enabled!==!1&&i.enableZoom!==!1&&s===a.NONE&&(le.preventDefault(),i.dispatchEvent(fp),(function(ue){re(ue),ue.deltaY<0?se(b()):ue.deltaY>0&&Q(b()),i.update()})(le),i.dispatchEvent(Wy))}function ze(le){i.enabled!==!1&&i.enablePan!==!1&&(function(ue){let xe=!1;switch(ue.code){case i.keys.UP:ue.ctrlKey||ue.metaKey||ue.shiftKey?ae(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:ue.ctrlKey||ue.metaKey||ue.shiftKey?ae(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:ue.ctrlKey||ue.metaKey||ue.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:ue.ctrlKey||ue.metaKey||ue.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),xe=!0}xe&&(ue.preventDefault(),i.update())})(le)}function j(le){i.enabled!==!1&&le.preventDefault()}function Dt(le){let ue=de[le.pointerId];ue===void 0&&(ue=new ht,de[le.pointerId]=ue),ue.set(le.pageX,le.pageY)}function He(le){const ue=le.pointerId===F[0].pointerId?F[1]:F[0];return de[ue.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Oe,{passive:!1}),this.update()}}Fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},rr.line={uniforms:Km.merge([Fe.common,Fe.fog,Fe.line]),vertexShader:`
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
		`};class ww extends To{constructor(e){super({type:"LineMaterial",uniforms:Km.clone(rr.line.uniforms),vertexShader:rr.line.vertexShader,fragmentShader:rr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Xy=new Dr,Vc=new B;class Mw extends bz{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new an([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new an([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Yp(t,6,1);return this.setAttribute("instanceStart",new go(i,3,0)),this.setAttribute("instanceEnd",new go(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Yp(t,6,1);return this.setAttribute("instanceColorStart",new go(i,3,0)),this.setAttribute("instanceColorEnd",new go(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new xz(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Xy.setFromBufferAttribute(t),this.boundingBox.union(Xy))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)Vc.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Vc)),Vc.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Vc));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const jy=new B,Yy=new B,wn=new zt,Mn=new zt,ti=new zt,dp=new B,hp=new Gt,An=new Cz,qy=new B,Gc=new Dr,Wc=new ui,ni=new zt;let ri,oa;function Ky(n,e,t){return ni.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ni.multiplyScalar(1/ni.w),ni.x=oa/t.width,ni.y=oa/t.height,ni.applyMatrix4(n.projectionMatrixInverse),ni.multiplyScalar(1/ni.w),Math.abs(Math.max(ni.x,ni.y))}class Wz extends Yr{constructor(e=new Mw,t=new ww({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let c=0,u=0,d=t.count;c<d;c++,u+=2)jy.fromBufferAttribute(t,c),Yy.fromBufferAttribute(i,c),a[u]=u===0?0:a[u-1],a[u+1]=a[u]+jy.distanceTo(Yy);const s=new Yp(a,2,1);return e.setAttribute("instanceDistanceStart",new go(s,1,0)),e.setAttribute("instanceDistanceEnd",new go(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,a=e.camera;a!==null||i||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ri=e.ray;const c=this.matrixWorld,u=this.geometry,d=this.material;let h,p;oa=d.linewidth+s,u.boundingSphere===null&&u.computeBoundingSphere(),Wc.copy(u.boundingSphere).applyMatrix4(c),i?h=.5*oa:h=Ky(a,Math.max(a.near,Wc.distanceToPoint(ri.origin)),d.resolution),Wc.radius+=h,ri.intersectsSphere(Wc)!==!1&&(u.boundingBox===null&&u.computeBoundingBox(),Gc.copy(u.boundingBox).applyMatrix4(c),i?p=.5*oa:p=Ky(a,Math.max(a.near,Gc.distanceToPoint(ri.origin)),d.resolution),Gc.expandByScalar(p),ri.intersectsBox(Gc)!==!1&&(i?(function(v,g){const S=v.matrixWorld,E=v.geometry,w=E.attributes.instanceStart,x=E.attributes.instanceEnd;for(let _=0,C=Math.min(E.instanceCount,w.count);_<C;_++){An.start.fromBufferAttribute(w,_),An.end.fromBufferAttribute(x,_),An.applyMatrix4(S);const M=new B,R=new B;ri.distanceSqToSegment(An.start,An.end,R,M),R.distanceTo(M)<.5*oa&&g.push({point:R,pointOnLine:M,distance:ri.origin.distanceTo(R),object:v,face:null,faceIndex:_,uv:null,uv1:null})}})(this,t):(function(v,g,S){const E=g.projectionMatrix,w=v.material.resolution,x=v.matrixWorld,_=v.geometry,C=_.attributes.instanceStart,M=_.attributes.instanceEnd,R=Math.min(_.instanceCount,C.count),I=-g.near;ri.at(1,ti),ti.w=1,ti.applyMatrix4(g.matrixWorldInverse),ti.applyMatrix4(E),ti.multiplyScalar(1/ti.w),ti.x*=w.x/2,ti.y*=w.y/2,ti.z=0,dp.copy(ti),hp.multiplyMatrices(g.matrixWorldInverse,x);for(let O=0,F=R;O<F;O++){if(wn.fromBufferAttribute(C,O),Mn.fromBufferAttribute(M,O),wn.w=1,Mn.w=1,wn.applyMatrix4(hp),Mn.applyMatrix4(hp),wn.z>I&&Mn.z>I)continue;if(wn.z>I){const ne=wn.z-Mn.z,pe=(wn.z-I)/ne;wn.lerp(Mn,pe)}else if(Mn.z>I){const ne=Mn.z-wn.z,pe=(Mn.z-I)/ne;Mn.lerp(wn,pe)}wn.applyMatrix4(E),Mn.applyMatrix4(E),wn.multiplyScalar(1/wn.w),Mn.multiplyScalar(1/Mn.w),wn.x*=w.x/2,wn.y*=w.y/2,Mn.x*=w.x/2,Mn.y*=w.y/2,An.start.copy(wn),An.start.z=0,An.end.copy(Mn),An.end.z=0;const de=An.closestPointToPointParameter(dp,!0);An.at(de,qy);const b=nw.lerp(wn.z,Mn.z,de),N=b>=-1&&b<=1,ae=dp.distanceTo(qy)<.5*oa;if(N&&ae){An.start.fromBufferAttribute(C,O),An.end.fromBufferAttribute(M,O),An.start.applyMatrix4(x),An.end.applyMatrix4(x);const ne=new B,pe=new B;ri.distanceSqToSegment(An.start,An.end,pe,ne),S.push({point:pe,pointOnLine:ne,distance:ri.origin.distanceTo(pe),object:v,face:null,faceIndex:O,uv:null,uv1:null})}}})(this,a,t)))}}class $z extends If{constructor(e,t,i,a,s=4473924,c=8947848){s=new nt(s),c=new nt(c);const u=Math.round(e/t);i=Math.round(i/a)*a/2;const d=[],h=[];let p=0;for(let g=-1*(e=u*t/2);g<=e;g+=t){d.push(g,0,-1*i,g,0,i);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}for(let g=-1*i;g<=i;g+=a){d.push(-1*e,0,g,e,0,g);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}const v=new Bn;v.setAttribute("position",new an(d,3)),v.setAttribute("color",new an(h,3)),super(v,new eu({vertexColors:!0,toneMapped:!1}))}}function Xz(n,e,t,i){const a=(function(c,u,d){c*=.5,u*=.5,d*=.5;const h=new Bn,p=[];return p.push(-c,-u,-d,-c,u,-d,-c,u,-d,c,u,-d,c,u,-d,c,-u,-d,c,-u,-d,-c,-u,-d,-c,-u,d,-c,u,d,-c,u,d,c,u,d,c,u,d,c,-u,d,c,-u,d,-c,-u,d,-c,-u,-d,-c,-u,d,-c,u,-d,-c,u,d,c,u,-d,c,u,d,c,-u,-d,c,-u,d),h.setAttribute("position",new an(p,3)),h})(n,e,t),s=new If(a,new Ez({color:new nt(i),dashSize:3,gapSize:1}));return s.computeLineDistances(),s}var Ll=function(){var n=0,e=document.createElement("div");function t(p){return e.appendChild(p.dom),p}function i(p){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===p?"block":"none";n=p}e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",(function(p){p.preventDefault(),i(++n%e.children.length)}),!1);var a=(performance||Date).now(),s=a,c=0,u=t(new Ll.Panel("FPS","#0ff","#002")),d=t(new Ll.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new Ll.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=s+1e3&&(u.update(1e3*c/(p-s),100),s=p,c=0,h)){var v=performance.memory;h.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};Ll.Panel=function(n,e,t){var i=1/0,a=0,s=Math.round,c=s(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,v=3*c,g=15*c,S=74*c,E=30*c,w=document.createElement("canvas");w.width=u,w.height=d,w.style.cssText="width:80px;height:48px";var x=w.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,u,d),x.fillStyle=e,x.fillText(n,h,p),x.fillRect(v,g,S,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v,g,S,E),{dom:w,update:function(_,C){i=Math.min(i,_),a=Math.max(a,_),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,u,g),x.fillStyle=e,x.fillText(s(_)+" "+n+" ("+s(i)+"-"+s(a)+")",h,p),x.drawImage(w,v+c,g,S-c,E,v,g,S-c,E),x.fillRect(v+S-c,g,c,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v+S-c,g,c,s((1-_/C)*E))}}};var jz=Ll;class Zy{constructor(e,t){this.openFolders=[],this.watchedObject=e,this.options=t,this.gui=new of,this.gui.title("Dev info"),this.setup()}setup(){this.loadOpenFolders(),this.options&&!this.options.renderer||this.setupRedererFolder(),this.options&&!this.options.camera||this.setupCameraFolder(),this.options&&!this.options.parser||this.setupParserFolder(),this.options&&!this.options.buildVolume||this.setupBuildVolumeFolder(),this.options&&!this.options.devHelpers||this.setupDevHelpers()}reset(){this.gui.destroy(),this.gui=new of,this.gui.title("Dev info"),this.setup()}loadOpenFolders(){this.openFolders=JSON.parse(localStorage.getItem("dev-gui-open")||"{}").open||[]}saveOpenFolders(){this.openFolders=this.gui.foldersRecursive().filter((e=>!e._closed)).map((e=>e._title)),console.log(this.openFolders),localStorage.setItem("dev-gui-open",JSON.stringify({open:this.openFolders}))}setupRedererFolder(){const e=this.gui.addFolder("Render Info");this.openFolders.includes("Render Info")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.renderer.info.render,"triangles").listen(),e.add(this.watchedObject.renderer.info.render,"calls").listen(),e.add(this.watchedObject.renderer.info.render,"lines").listen(),e.add(this.watchedObject.renderer.info.render,"points").listen(),e.add(this.watchedObject.renderer.info.memory,"geometries").listen(),e.add(this.watchedObject.renderer.info.memory,"textures").listen(),e.add(this.watchedObject,"_lastRenderTime").listen()}setupCameraFolder(){const e=this.gui.addFolder("Camera");this.openFolders.includes("Camera")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()}));const t=e.addFolder("Camera position");t.add(this.watchedObject.camera.position,"x").listen(),t.add(this.watchedObject.camera.position,"y").listen(),t.add(this.watchedObject.camera.position,"z").listen();const i=e.addFolder("Camera rotation");i.add(this.watchedObject.camera.rotation,"x").listen(),i.add(this.watchedObject.camera.rotation,"y").listen(),i.add(this.watchedObject.camera.rotation,"z").listen()}setupParserFolder(){const e=this.gui.addFolder("Parser");this.openFolders.includes("Parser")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.parser,"curZ").listen(),e.add(this.watchedObject.parser,"maxZ").listen(),e.add(this.watchedObject.parser,"tolerance").listen(),e.add(this.watchedObject.parser.layers,"length").name("layers.count").listen(),e.add(this.watchedObject.parser.lines,"length").name("lines.count").listen()}setupBuildVolumeFolder(){const e=this.gui.addFolder("Build Volume");this.openFolders.includes("Build Volume")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.buildVolume,"x").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"y").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"z").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()}))}setupDevHelpers(){const e=this.gui.addFolder("Dev Helpers");this.openFolders.includes("Dev Helpers")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject,"_wireframe").listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject,"render").listen(),e.add(this.watchedObject,"clear").listen()}}class Yz extends Bn{constructor(e=[new B],t=.6,i=.2,a=8){super(),this.type="ExtrusionGeometry",this.parameters={points:e,lineWidth:t,lineHeight:i,radialSegments:a,closed:!1};const s=new B,c=new B,u=new ht,d=[],h=[],p=[],v=[];function g(S){const[E,w,x]=(function(_){const C=e[_],M=new B,R=new B,I=new B,O=new B;M.copy(C).sub(e[_-1]||C).normalize().add((e[_+1]||C).clone().sub(C).normalize()).normalize();let F=Number.MAX_VALUE;const de=Math.abs(M.x),b=Math.abs(M.y),N=Math.abs(M.z);return de<=F&&(F=de,R.set(1,0,0)),b<=F&&(F=b,R.set(0,1,0)),N<=F&&R.set(0,0,1),O.crossVectors(M,R).normalize(),R.crossVectors(M,O),I.crossVectors(M,R),[C,R,I]})(S);for(let _=0;_<=a;_++){const C=_/a*Math.PI*2,M=Math.sin(C),R=-Math.cos(C);c.x=R*w.x+M*x.x,c.y=R*w.y+M*x.y,c.z=R*w.z+M*x.z,c.normalize(),h.push(c.x,c.y,c.z),s.x=E.x+t*c.x*.5,s.y=E.y+t*c.y*.5,s.z=E.z+i*c.z*.5,d.push(s.x,s.y,s.z)}}(function(){for(let S=0;S<e.length;S++)g(S);g(closed===!1?e.length-1:0),(function(){for(let S=0;S<e.length;S++)for(let E=0;E<=a;E++)u.x=S/e.length,u.y=E/a,p.push(u.x,u.y)})(),(function(){for(let S=1;S<e.length;S++)for(let E=1;E<=a;E++){const w=(a+1)*(S-1)+(E-1),x=(a+1)*S+(E-1),_=(a+1)*S+E,C=(a+1)*(S-1)+E;v.push(w,x,C),v.push(x,_,C)}})()})(),this.setIndex(v),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(p,2))}}class Pl{static get initial(){const e=new Pl;return Object.assign(e,{x:0,y:0,z:0,r:0,e:0,i:0,j:0,t:0}),e}}const pp={h:0,s:0,l:0};class ps{constructor(e){var t,i,a,s,c,u,d,h,p;if(this.minLayerThreshold=.05,this.renderExtrusion=!0,this.renderTravel=!1,this.renderTubes=!1,this.extrusionWidth=.6,this.singleLayerMode=!1,this.initialCameraPosition=[-100,400,450],this.debug=!1,this.inches=!1,this.nonTravelmoves=[],this.disableGradient=!1,this.state=Pl.initial,this.beyondFirstMove=!1,this.disposables=[],this._extrusionColor=ps.defaultExtrusionColor,this.renderLayerIndex=0,this._geometries={},this._backgroundColor=new nt(14737632),this._travelColor=new nt(10027008),this._toolColors={},this.devMode=!1,this._lastRenderTime=0,this._wireframe=!1,this.minLayerThreshold=(t=e.minLayerThreshold)!==null&&t!==void 0?t:this.minLayerThreshold,this.parser=new af(this.minLayerThreshold),this.scene=new cz,this.scene.background=this._backgroundColor,e.backgroundColor!==void 0&&(this.backgroundColor=new nt(e.backgroundColor)),this.targetId=e.targetId,this.endLayer=e.endLayer,this.startLayer=e.startLayer,this.lineWidth=e.lineWidth,this.lineHeight=e.lineHeight,this.buildVolume=e.buildVolume,this.initialCameraPosition=(i=e.initialCameraPosition)!==null&&i!==void 0?i:this.initialCameraPosition,this.debug=(a=e.debug)!==null&&a!==void 0?a:this.debug,this.renderExtrusion=(s=e.renderExtrusion)!==null&&s!==void 0?s:this.renderExtrusion,this.renderTravel=(c=e.renderTravel)!==null&&c!==void 0?c:this.renderTravel,this.nonTravelmoves=(u=e.nonTravelMoves)!==null&&u!==void 0?u:this.nonTravelmoves,this.renderTubes=(d=e.renderTubes)!==null&&d!==void 0?d:this.renderTubes,this.extrusionWidth=(h=e.extrusionWidth)!==null&&h!==void 0?h:this.extrusionWidth,this.devMode=(p=e.devMode)!==null&&p!==void 0?p:this.devMode,this.stats=this.devMode?new jz:void 0,e.extrusionColor!==void 0&&(this.extrusionColor=e.extrusionColor),e.travelColor!==void 0&&(this.travelColor=new nt(e.travelColor)),e.topLayerColor!==void 0&&(this.topLayerColor=new nt(e.topLayerColor)),e.lastSegmentColor!==void 0&&(this.lastSegmentColor=new nt(e.lastSegmentColor)),e.toolColors){this._toolColors={};for(const[S,E]of Object.entries(e.toolColors))this._toolColors[parseInt(S)]=new nt(E)}if(e.disableGradient!==void 0&&(this.disableGradient=e.disableGradient),console.info("Using THREE r"+Cf),console.debug("opts",e),this.targetId&&console.warn("`targetId` is deprecated and will removed in the future. Use `canvas` instead."),e.canvas)this.canvas=e.canvas,this.renderer=new jp({canvas:this.canvas,preserveDrawingBuffer:!0});else{if(!this.targetId)throw Error("Set either opts.canvas or opts.targetId");const S=document.getElementById(this.targetId);if(!S)throw new Error("Unable to find element "+this.targetId);this.renderer=new jp({preserveDrawingBuffer:!0}),this.canvas=this.renderer.domElement,S.appendChild(this.canvas)}this.camera=new pr(25,this.canvas.offsetWidth/this.canvas.offsetHeight,10,5e3),this.camera.position.fromArray(this.initialCameraPosition);const v=this.camera.far,g=.8*v;this.scene.fog=new Qm(this._backgroundColor,g,v),this.resize(),this.controls=new Gz(this.camera,this.renderer.domElement),this.initScene(),this.animate(),e.allowDragNDrop&&this._enableDropHandler(),this.initStats()}get extrusionColor(){return this._extrusionColor}set extrusionColor(e){if(Array.isArray(e)){this._extrusionColor=[];for(const[t,i]of e.entries())this._extrusionColor[t]=new nt(i)}else this._extrusionColor=new nt(e)}get currentToolColor(){var e;return this._extrusionColor===void 0?ps.defaultExtrusionColor:this._extrusionColor instanceof nt?this._extrusionColor:(e=this._extrusionColor[this.state.t])!==null&&e!==void 0?e:ps.defaultExtrusionColor}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=new nt(e),this.scene.background=this._backgroundColor}get travelColor(){return this._travelColor}set travelColor(e){this._travelColor=new nt(e)}get topLayerColor(){return this._topLayerColor}set topLayerColor(e){this._topLayerColor=e!==void 0?new nt(e):void 0}get lastSegmentColor(){return this._lastSegmentColor}set lastSegmentColor(e){this._lastSegmentColor=e!==void 0?new nt(e):void 0}get layers(){return[this.parser.preamble].concat(this.parser.layers.concat())}get maxLayerIndex(){var e;return((e=this.endLayer)!==null&&e!==void 0?e:this.layers.length)-1}get minLayerIndex(){var e;return this.singleLayerMode?this.maxLayerIndex:((e=this.startLayer)!==null&&e!==void 0?e:0)-1}animate(){var e;this.animationFrameId=requestAnimationFrame((()=>this.animate())),this.controls.update(),this.renderer.render(this.scene,this.camera),(e=this.stats)===null||e===void 0||e.update()}processGCode(e){this.parser.parseGCode(e),this.render()}initScene(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);for(;this.disposables.length>0;){const e=this.disposables.pop();e&&e.dispose()}if(this.debug&&this.buildVolume){const e=new Rz(Math.max(this.buildVolume.x/2,this.buildVolume.y/2)+20);this.scene.add(e)}if(this.buildVolume&&this.drawBuildVolume(),this.renderTubes){console.warn("Volumetric rendering is experimental. It may not work as expected or change in the future.");const e=new Tz(13421772,.3*Math.PI),t=new Az(16777215,Math.PI,void 0,.001);t.position.set(0,500,500),this.scene.add(e),this.scene.add(t)}}createGroup(e){const t=new El;return t.name=e,t.quaternion.setFromEuler(new Jl(-Math.PI/2,0,0)),this.buildVolume?t.position.set(-this.buildVolume.x/2,0,this.buildVolume.y/2):t.position.set(-100,0,100),t}render(){const e=performance.now();this.group=this.createGroup("allLayers"),this.state=Pl.initial,this.initScene();for(let t=0;t<this.layers.length;t++)this.renderLayer(t);this.batchGeometries(),this.scene.add(this.group),this.renderer.render(this.scene,this.camera),this._lastRenderTime=performance.now()-e}renderAnimated(e=1){return cp(this,void 0,void 0,(function*(){return this.initScene(),this.renderLayerIndex=0,this.renderFrameLoop(e>0?e:1)}))}renderFrameLoop(e){return new Promise((t=>{const i=()=>{this.renderLayerIndex>this.layers.length-1?t():(this.renderFrame(e),requestAnimationFrame(i))};i()}))}renderFrame(e){this.group=this.createGroup("layer"+this.renderLayerIndex);for(let t=0;t<e&&this.renderLayerIndex+t<this.layers.length;t++)this.renderLayer(this.renderLayerIndex),this.renderLayerIndex++;this.batchGeometries(),this.scene.add(this.group)}renderLayer(e){var t,i,a,s,c,u,d,h;if(e>this.maxLayerIndex)return;const p=this.layers[e],v={extrusion:[],travel:[],z:this.state.z,height:p.height};for(const g of p.commands)if(g.gcode!="g20"){if(g.gcode.startsWith("t")){this.doRenderExtrusion(v,e),v.extrusion=[];const S=g;this.state.t=S.toolIndex}else if(["g0","g00","g1","g01","g2","g02","g3","g03"].indexOf(g.gcode)>-1){const S=g,E={x:(t=S.params.x)!==null&&t!==void 0?t:this.state.x,y:(i=S.params.y)!==null&&i!==void 0?i:this.state.y,z:(a=S.params.z)!==null&&a!==void 0?a:this.state.z,r:(s=S.params.r)!==null&&s!==void 0?s:this.state.r,e:(c=S.params.e)!==null&&c!==void 0?c:this.state.e,i:(u=S.params.i)!==null&&u!==void 0?u:this.state.i,j:(d=S.params.j)!==null&&d!==void 0?d:this.state.j,t:this.state.t};if(e>=this.minLayerIndex){const w=((h=S.params.e)!==null&&h!==void 0?h:0)>0||this.nonTravelmoves.indexOf(g.gcode)>-1;(E.x!=this.state.x||E.y!=this.state.y||E.z!=this.state.z)&&(w&&this.renderExtrusion||!w&&this.renderTravel)&&(g.gcode=="g2"||g.gcode=="g3"||g.gcode=="g02"||g.gcode=="g03"?this.addArcSegment(v,this.state,E,w,g.gcode=="g2"||g.gcode=="g02"):this.addLineSegment(v,this.state,E,w))}this.state.x=E.x,this.state.y=E.y,this.state.z=E.z,this.beyondFirstMove||(this.beyondFirstMove=!0)}}else this.setInches();this.doRenderExtrusion(v,e)}doRenderExtrusion(e,t){var i,a;if(this.renderExtrusion){let s=this.currentToolColor;if(!this.singleLayerMode&&!this.renderTubes&&!this.disableGradient){const c=.1+.7*t/this.layers.length;s.getHSL(pp),s=new nt().setHSL(pp.h,pp.s,c)}if(t==this.layers.length-1){const c=(i=this._topLayerColor)!==null&&i!==void 0?i:s,u=(a=this._lastSegmentColor)!==null&&a!==void 0?a:c,d=e.extrusion.splice(-3),h=e.extrusion.splice(-3);this.renderTubes?(this.addTubeLine(e.extrusion,c.getHex(),e.height),this.addTubeLine([...h,...d],u.getHex(),e.height)):(this.addLine(e.extrusion,c.getHex()),this.addLine([...h,...d],u.getHex()))}else this.renderTubes?this.addTubeLine(e.extrusion,s.getHex(),e.height):this.addLine(e.extrusion,s.getHex())}this.renderTravel&&this.addLine(e.travel,this._travelColor.getHex())}setInches(){this.beyondFirstMove?console.warn("Switching units after movement is already made is discouraged and is not supported."):this.inches=!0}drawBuildVolume(){if(!this.buildVolume)return;this.scene.add(new $z(this.buildVolume.x,10,this.buildVolume.y,10));const e=Xz(this.buildVolume.x,this.buildVolume.z,this.buildVolume.y,8947848);e.position.setY(this.buildVolume.z/2),this.scene.add(e)}clear(){this.resetState(),this.parser=new af(this.minLayerThreshold)}resetState(){var e;this.startLayer=1,this.endLayer=1/0,this.singleLayerMode=!1,this.beyondFirstMove=!1,this.state=Pl.initial,(e=this.devGui)===null||e===void 0||e.reset(),this._geometries={}}resize(){const[e,t]=[this.canvas.offsetWidth,this.canvas.offsetHeight];this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1)}addLineSegment(e,t,i,a){(a?e.extrusion:e.travel).push(t.x,t.y,t.z,i.x,i.y,i.z)}addArcSegment(e,t,i,a,s){const c=a?e.extrusion:e.travel,u=t.x,d=t.y,h=t.z,p=i.x,v=i.y,g=i.z;let S=i.r,E=i.i,w=i.j;if(S){const Q=p-u,se=v-d,re=Math.sqrt(Math.pow(Q/2,2)+Math.pow(se/2,2));S=Math.max(S,re);const X=Math.pow(Q,2)+Math.pow(se,2),ie=Math.pow(S,2)-X/4;let $=Math.sqrt(ie/X);(s&&S<0||!s&&S>0)&&($=-$),E=Q/2+se*$,w=se/2-Q*$}const x=u==p&&d==v,_=u+E,C=d+w,M=Math.sqrt(E*E+w*w),R=Math.atan2(-w,-E),I=Math.atan2(v-C,p-_);let O;x?O=2*Math.PI:(O=s?R-I:I-R,O<0&&(O+=2*Math.PI));let F=M*O/1.8;this.inches&&(F*=25),F<1&&(F=1);let de=O/F;de*=s?-1:1;const b=[];b.push({x:u,y:d,z:h});const N=(h-g)/F;let ae=u,ne=d,pe=h,H=R;for(let Q=0;Q<F-1;Q++)H+=de,ae=_+M*Math.cos(H),ne=C+M*Math.sin(H),pe+=N,b.push({x:ae,y:ne,z:pe});b.push({x:i.x,y:i.y,z:i.z});for(let Q=0;Q<b.length-1;Q++)c.push(b[Q].x,b[Q].y,b[Q].z,b[Q+1].x,b[Q+1].y,b[Q+1].z)}addLine(e,t){var i;if(typeof this.lineWidth=="number"&&this.lineWidth>0)return void this.addThickLine(e,t);const a=new Bn;a.setAttribute("position",new an(e,3)),this.disposables.push(a);const s=new eu({color:t});this.disposables.push(s);const c=new If(a,s);(i=this.group)===null||i===void 0||i.add(c)}addTubeLine(e,t,i=.2){let a=[];const s=[];for(let c=0;c<e.length;c+=6){const u=e.slice(c,c+9),d=new B(u[0],u[1],u[2]),h=new B(u[3],u[4],u[5]),p=new B(u[6],u[7],u[8]);a.push(d),h.equals(p)||(a.push(h),s.push(a),a=[])}s.forEach((c=>{var u;const d=new Yz(c,this.extrusionWidth,this.lineHeight||i,4);(u=this._geometries)[t]||(u[t]=[]),this._geometries[t].push(d)}))}addThickLine(e,t){var i;if(!e.length||!this.lineWidth)return;const a=new Mw;this.disposables.push(a);const s=new ww({color:t,linewidth:this.lineWidth/(1e3*window.devicePixelRatio)});this.disposables.push(s),a.setPositions(e);const c=new Wz(a,s);(i=this.group)===null||i===void 0||i.add(c)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[],this.controls.dispose(),this.renderer.dispose(),this.cancelAnimation()}cancelAnimation(){this.animationFrameId!==void 0&&cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0}_enableDropHandler(){console.warn("Drag and drop is deprecated as a library feature. See the demo how to implement your own."),this.canvas.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.canvas.classList.add("dragging")})),this.canvas.addEventListener("dragleave",(e=>{e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging")})),this.canvas.addEventListener("drop",(e=>cp(this,void 0,void 0,(function*(){var t,i;e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging");const a=((i=(t=e.dataTransfer)===null||t===void 0?void 0:t.files)!==null&&i!==void 0?i:[])[0];this.clear(),yield this._readFromStream(a.stream()),this.render()}))))}batchGeometries(){if(this._geometries)for(const e in this._geometries){const t=this.createBatchMesh(parseInt(e));for(;this._geometries[e].length>0;){const i=this._geometries[e].pop();t.addGeometry(i)}}}createBatchMesh(e){var t;const i=this._geometries[e],a=new Sz({color:e,wireframe:this._wireframe});this.disposables.push(a);const s=i.reduce(((u,d)=>3*d.attributes.position.count+u),0),c=new _z(i.length,s,void 0,a);return this.disposables.push(c),(t=this.group)===null||t===void 0||t.add(c),c}_readFromStream(e){var t,i;return cp(this,void 0,void 0,(function*(){const a=e.getReader();let s,c="",u=0;do{console.debug("reading from stream"),s=yield a.read(),u+=(i=(t=s.value)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0;const h=(d=s.value,new TextDecoder("utf-8").decode(d)),p=h.lastIndexOf(`
`),v=h.slice(0,p);this.parser.parseGCode(c+v),c=h.slice(p)}while(!s.done);var d;console.debug("read from stream",u)}))}initGui(){typeof this.devMode=="boolean"&&this.devMode===!0?this.devGui=new Zy(this):typeof this.devMode=="object"&&(this.devGui=new Zy(this,this.devMode))}initStats(){var e;this.stats&&(typeof this.devMode=="object"&&(this.statsContainer=this.devMode.statsContainer),((e=this.statsContainer)!==null&&e!==void 0?e:document.body).appendChild(this.stats.dom),this.stats.dom.classList.add("stats"),this.initGui())}}ps.defaultExtrusionColor=new nt("hotpink");const qz=function(n){return new ps(n)},Kz="_canvas_1cjd4_5",Zz={canvas:Kz},Jz=({gcode:n,endLayer:e,onMaxLayerIndex:t})=>{const i=Ve.useRef(null),a=Ve.useRef({webgl:null});return Ve.useEffect(()=>{i.current&&!a.current.webgl&&(a.current.webgl=qz({canvas:i.current,lineWidth:4,lineHeight:4,renderTravel:!1,renderExtrusion:!0,renderTubes:!1,startLayer:0,endLayer:e,backgroundColor:"black",buildVolume:{x:220,y:220,z:0}}),a.current.webgl.clear(),a.current.webgl.processGCode(n),t(a.current.webgl.layers.length),a.current.webgl.render())},[]),Ve.useEffect(()=>{i.current&&a.current.webgl&&(a.current.webgl.clear(),a.current.webgl.processGCode(n),t(a.current.webgl.layers.length),a.current.webgl.render())},[n]),Ve.useEffect(()=>{i.current&&a.current.webgl&&(a.current.webgl.endLayer=e,a.current.webgl.render())},[e]),tt.jsx("canvas",{ref:i,className:Zz.canvas})};ex();function Jy(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function Aw(...n){return e=>{let t=!1;const i=n.map(a=>{const s=Jy(a,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let a=0;a<i.length;a++){const s=i[a];typeof s=="function"?s():Jy(n[a],null)}}}}function bo(...n){return Ve.useCallback(Aw(...n),n)}function Kp(n){const e=Qz(n),t=Ve.forwardRef((i,a)=>{const{children:s,...c}=i,u=Ve.Children.toArray(s),d=u.find(tk);if(d){const h=d.props.children,p=u.map(v=>v===d?Ve.Children.count(h)>1?Ve.Children.only(null):Ve.isValidElement(h)?h.props.children:null:v);return tt.jsx(e,{...c,ref:a,children:Ve.isValidElement(h)?Ve.cloneElement(h,void 0,p):null})}return tt.jsx(e,{...c,ref:a,children:s})});return t.displayName=`${n}.Slot`,t}function Qz(n){const e=Ve.forwardRef((t,i)=>{const{children:a,...s}=t;if(Ve.isValidElement(a)){const c=rk(a),u=nk(s,a.props);return a.type!==Ve.Fragment&&(u.ref=i?Aw(i,c):c),Ve.cloneElement(a,u)}return Ve.Children.count(a)>1?Ve.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var ek=Symbol("radix.slottable");function tk(n){return Ve.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===ek}function nk(n,e){const t={...e};for(const i in e){const a=n[i],s=e[i];/^on[A-Z]/.test(i)?a&&s?t[i]=(...u)=>{const d=s(...u);return a(...u),d}:a&&(t[i]=a):i==="style"?t[i]={...a,...s}:i==="className"&&(t[i]=[a,s].filter(Boolean).join(" "))}return{...n,...t}}function rk(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var ik=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],tu=ik.reduce((n,e)=>{const t=Kp(`Primitive.${e}`),i=Ve.forwardRef((a,s)=>{const{asChild:c,...u}=a,d=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),tt.jsx(d,{...u,ref:s})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function Tw(n,e=[]){let t=[];function i(s,c){const u=Ve.createContext(c),d=t.length;t=[...t,c];const h=v=>{const{scope:g,children:S,...E}=v,w=g?.[n]?.[d]||u,x=Ve.useMemo(()=>E,Object.values(E));return tt.jsx(w.Provider,{value:x,children:S})};h.displayName=s+"Provider";function p(v,g){const S=g?.[n]?.[d]||u,E=Ve.useContext(S);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${s}\``)}return[h,p]}const a=()=>{const s=t.map(c=>Ve.createContext(c));return function(u){const d=u?.[n]||s;return Ve.useMemo(()=>({[`__scope${n}`]:{...u,[n]:d}}),[u,d])}};return a.scopeName=n,[i,ok(a,...e)]}function ok(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const c=i.reduce((u,{useScope:d,scopeName:h})=>{const v=d(s)[`__scope${h}`];return{...u,...v}},{});return Ve.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function ak(n){const e=n+"CollectionProvider",[t,i]=Tw(e),[a,s]=t(e,{collectionRef:{current:null},itemMap:new Map}),c=w=>{const{scope:x,children:_}=w,C=co.useRef(null),M=co.useRef(new Map).current;return tt.jsx(a,{scope:x,itemMap:M,collectionRef:C,children:_})};c.displayName=e;const u=n+"CollectionSlot",d=Kp(u),h=co.forwardRef((w,x)=>{const{scope:_,children:C}=w,M=s(u,_),R=bo(x,M.collectionRef);return tt.jsx(d,{ref:R,children:C})});h.displayName=u;const p=n+"CollectionItemSlot",v="data-radix-collection-item",g=Kp(p),S=co.forwardRef((w,x)=>{const{scope:_,children:C,...M}=w,R=co.useRef(null),I=bo(x,R),O=s(p,_);return co.useEffect(()=>(O.itemMap.set(R,{ref:R,...M}),()=>void O.itemMap.delete(R))),tt.jsx(g,{[v]:"",ref:I,children:C})});S.displayName=p;function E(w){const x=s(n+"CollectionConsumer",w);return co.useCallback(()=>{const C=x.collectionRef.current;if(!C)return[];const M=Array.from(C.querySelectorAll(`[${v}]`));return Array.from(x.itemMap.values()).sort((O,F)=>M.indexOf(O.ref.current)-M.indexOf(F.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:c,Slot:h,ItemSlot:S},E,i]}function us(n,e,{checkForDefaultPrevented:t=!0}={}){return function(a){if(n?.(a),t===!1||!a.defaultPrevented)return e?.(a)}}var bw=globalThis?.document?Ve.useLayoutEffect:()=>{},sk=D1[" useInsertionEffect ".trim().toString()]||bw;function lk({prop:n,defaultProp:e,onChange:t=()=>{},caller:i}){const[a,s,c]=uk({defaultProp:e,onChange:t}),u=n!==void 0,d=u?n:a;{const p=Ve.useRef(n!==void 0);Ve.useEffect(()=>{const v=p.current;v!==u&&console.warn(`${i} is changing from ${v?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=u},[u,i])}const h=Ve.useCallback(p=>{if(u){const v=ck(p)?p(n):p;v!==n&&c.current?.(v)}else s(p)},[u,n,s,c]);return[d,h]}function uk({defaultProp:n,onChange:e}){const[t,i]=Ve.useState(n),a=Ve.useRef(t),s=Ve.useRef(e);return sk(()=>{s.current=e},[e]),Ve.useEffect(()=>{a.current!==t&&(s.current?.(t),a.current=t)},[t,a]),[t,i,s]}function ck(n){return typeof n=="function"}var fk=Ve.createContext(void 0);function dk(n){const e=Ve.useContext(fk);return n||e||"ltr"}function hk(n){const e=Ve.useRef({value:n,previous:n});return Ve.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}function pk(n){const[e,t]=Ve.useState(void 0);return bw(()=>{if(n){t({width:n.offsetWidth,height:n.offsetHeight});const i=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const s=a[0];let c,u;if("borderBoxSize"in s){const d=s.borderBoxSize,h=Array.isArray(d)?d[0]:d;c=h.inlineSize,u=h.blockSize}else c=n.offsetWidth,u=n.offsetHeight;t({width:c,height:u})});return i.observe(n,{box:"border-box"}),()=>i.unobserve(n)}else t(void 0)},[n]),e}function Cw(n,[e,t]){return Math.min(t,Math.max(e,n))}var Rw=["PageUp","PageDown"],Lw=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Pw={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Ls="Slider",[Zp,mk,vk]=ak(Ls),[Dw,Vk]=Tw(Ls,[vk]),[gk,Uf]=Dw(Ls),Iw=Ve.forwardRef((n,e)=>{const{name:t,min:i=0,max:a=100,step:s=1,orientation:c="horizontal",disabled:u=!1,minStepsBetweenThumbs:d=0,defaultValue:h=[i],value:p,onValueChange:v=()=>{},onValueCommit:g=()=>{},inverted:S=!1,form:E,...w}=n,x=Ve.useRef(new Set),_=Ve.useRef(0),M=c==="horizontal"?_k:yk,[R=[],I]=lk({prop:p,defaultProp:h,onChange:ae=>{[...x.current][_.current]?.focus(),v(ae)}}),O=Ve.useRef(R);function F(ae){const ne=Mk(R,ae);N(ae,ne)}function de(ae){N(ae,_.current)}function b(){const ae=O.current[_.current];R[_.current]!==ae&&g(R)}function N(ae,ne,{commit:pe}={commit:!1}){const H=Ck(s),Q=Rk(Math.round((ae-i)/s)*s+i,H),se=Cw(Q,[i,a]);I((re=[])=>{const X=Ek(re,se,ne);if(bk(X,d*s)){_.current=X.indexOf(se);const ie=String(X)!==String(re);return ie&&pe&&g(X),ie?X:re}else return re})}return tt.jsx(gk,{scope:n.__scopeSlider,name:t,disabled:u,min:i,max:a,valueIndexToChangeRef:_,thumbs:x.current,values:R,orientation:c,form:E,children:tt.jsx(Zp.Provider,{scope:n.__scopeSlider,children:tt.jsx(Zp.Slot,{scope:n.__scopeSlider,children:tt.jsx(M,{"aria-disabled":u,"data-disabled":u?"":void 0,...w,ref:e,onPointerDown:us(w.onPointerDown,()=>{u||(O.current=R)}),min:i,max:a,inverted:S,onSlideStart:u?void 0:F,onSlideMove:u?void 0:de,onSlideEnd:u?void 0:b,onHomeKeyDown:()=>!u&&N(i,0,{commit:!0}),onEndKeyDown:()=>!u&&N(a,R.length-1,{commit:!0}),onStepKeyDown:({event:ae,direction:ne})=>{if(!u){const Q=Rw.includes(ae.key)||ae.shiftKey&&Lw.includes(ae.key)?10:1,se=_.current,re=R[se],X=s*Q*ne;N(re+X,se,{commit:!0})}}})})})})});Iw.displayName=Ls;var[Uw,Nw]=Dw(Ls,{startEdge:"left",endEdge:"right",size:"width",direction:1}),_k=Ve.forwardRef((n,e)=>{const{min:t,max:i,dir:a,inverted:s,onSlideStart:c,onSlideMove:u,onSlideEnd:d,onStepKeyDown:h,...p}=n,[v,g]=Ve.useState(null),S=bo(e,M=>g(M)),E=Ve.useRef(void 0),w=dk(a),x=w==="ltr",_=x&&!s||!x&&s;function C(M){const R=E.current||v.getBoundingClientRect(),I=[0,R.width],F=nv(I,_?[t,i]:[i,t]);return E.current=R,F(M-R.left)}return tt.jsx(Uw,{scope:n.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width",children:tt.jsx(Fw,{dir:w,"data-orientation":"horizontal",...p,ref:S,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:M=>{const R=C(M.clientX);c?.(R)},onSlideMove:M=>{const R=C(M.clientX);u?.(R)},onSlideEnd:()=>{E.current=void 0,d?.()},onStepKeyDown:M=>{const I=Pw[_?"from-left":"from-right"].includes(M.key);h?.({event:M,direction:I?-1:1})}})})}),yk=Ve.forwardRef((n,e)=>{const{min:t,max:i,inverted:a,onSlideStart:s,onSlideMove:c,onSlideEnd:u,onStepKeyDown:d,...h}=n,p=Ve.useRef(null),v=bo(e,p),g=Ve.useRef(void 0),S=!a;function E(w){const x=g.current||p.current.getBoundingClientRect(),_=[0,x.height],M=nv(_,S?[i,t]:[t,i]);return g.current=x,M(w-x.top)}return tt.jsx(Uw,{scope:n.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:tt.jsx(Fw,{"data-orientation":"vertical",...h,ref:v,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:w=>{const x=E(w.clientY);s?.(x)},onSlideMove:w=>{const x=E(w.clientY);c?.(x)},onSlideEnd:()=>{g.current=void 0,u?.()},onStepKeyDown:w=>{const _=Pw[S?"from-bottom":"from-top"].includes(w.key);d?.({event:w,direction:_?-1:1})}})})}),Fw=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,onSlideStart:i,onSlideMove:a,onSlideEnd:s,onHomeKeyDown:c,onEndKeyDown:u,onStepKeyDown:d,...h}=n,p=Uf(Ls,t);return tt.jsx(tu.span,{...h,ref:e,onKeyDown:us(n.onKeyDown,v=>{v.key==="Home"?(c(v),v.preventDefault()):v.key==="End"?(u(v),v.preventDefault()):Rw.concat(Lw).includes(v.key)&&(d(v),v.preventDefault())}),onPointerDown:us(n.onPointerDown,v=>{const g=v.target;g.setPointerCapture(v.pointerId),v.preventDefault(),p.thumbs.has(g)?g.focus():i(v)}),onPointerMove:us(n.onPointerMove,v=>{v.target.hasPointerCapture(v.pointerId)&&a(v)}),onPointerUp:us(n.onPointerUp,v=>{const g=v.target;g.hasPointerCapture(v.pointerId)&&(g.releasePointerCapture(v.pointerId),s(v))})})}),Ow="SliderTrack",zw=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=Uf(Ow,t);return tt.jsx(tu.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...i,ref:e})});zw.displayName=Ow;var Jp="SliderRange",kw=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=Uf(Jp,t),s=Nw(Jp,t),c=Ve.useRef(null),u=bo(e,c),d=a.values.length,h=a.values.map(g=>Vw(g,a.min,a.max)),p=d>1?Math.min(...h):0,v=100-Math.max(...h);return tt.jsx(tu.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...i,ref:u,style:{...n.style,[s.startEdge]:p+"%",[s.endEdge]:v+"%"}})});kw.displayName=Jp;var Qp="SliderThumb",Bw=Ve.forwardRef((n,e)=>{const t=mk(n.__scopeSlider),[i,a]=Ve.useState(null),s=bo(e,u=>a(u)),c=Ve.useMemo(()=>i?t().findIndex(u=>u.ref.current===i):-1,[t,i]);return tt.jsx(xk,{...n,ref:s,index:c})}),xk=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,index:i,name:a,...s}=n,c=Uf(Qp,t),u=Nw(Qp,t),[d,h]=Ve.useState(null),p=bo(e,C=>h(C)),v=d?c.form||!!d.closest("form"):!0,g=pk(d),S=c.values[i],E=S===void 0?0:Vw(S,c.min,c.max),w=wk(i,c.values.length),x=g?.[u.size],_=x?Ak(x,E,u.direction):0;return Ve.useEffect(()=>{if(d)return c.thumbs.add(d),()=>{c.thumbs.delete(d)}},[d,c.thumbs]),tt.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u.startEdge]:`calc(${E}% + ${_}px)`},children:[tt.jsx(Zp.ItemSlot,{scope:n.__scopeSlider,children:tt.jsx(tu.span,{role:"slider","aria-label":n["aria-label"]||w,"aria-valuemin":c.min,"aria-valuenow":S,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...s,ref:p,style:S===void 0?{display:"none"}:n.style,onFocus:us(n.onFocus,()=>{c.valueIndexToChangeRef.current=i})})}),v&&tt.jsx(Hw,{name:a??(c.name?c.name+(c.values.length>1?"[]":""):void 0),form:c.form,value:S},i)]})});Bw.displayName=Qp;var Sk="RadioBubbleInput",Hw=Ve.forwardRef(({__scopeSlider:n,value:e,...t},i)=>{const a=Ve.useRef(null),s=bo(a,i),c=hk(e);return Ve.useEffect(()=>{const u=a.current;if(!u)return;const d=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(c!==e&&p){const v=new Event("input",{bubbles:!0});p.call(u,e),u.dispatchEvent(v)}},[c,e]),tt.jsx(tu.input,{style:{display:"none"},...t,ref:s,defaultValue:e})});Hw.displayName=Sk;function Ek(n=[],e,t){const i=[...n];return i[t]=e,i.sort((a,s)=>a-s)}function Vw(n,e,t){const s=100/(t-e)*(n-e);return Cw(s,[0,100])}function wk(n,e){return e>2?`Value ${n+1} of ${e}`:e===2?["Minimum","Maximum"][n]:void 0}function Mk(n,e){if(n.length===1)return 0;const t=n.map(a=>Math.abs(a-e)),i=Math.min(...t);return t.indexOf(i)}function Ak(n,e,t){const i=n/2,s=nv([0,50],[0,i]);return(i-s(e)*t)*t}function Tk(n){return n.slice(0,-1).map((e,t)=>n[t+1]-e)}function bk(n,e){if(e>0){const t=Tk(n);return Math.min(...t)>=e}return!0}function nv(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(n[1]-n[0]);return e[0]+i*(t-n[0])}}function Ck(n){return(String(n).split(".")[1]||"").length}function Rk(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}var Lk=Iw,Pk=zw,Dk=kw,Ik=Bw;const Uk="_Root_mtzzd_1",Nk="_Track_mtzzd_12",Fk="_Range_mtzzd_21",Ok="_Thumb_mtzzd_28",$c={Root:Uk,Track:Nk,Range:Fk,Thumb:Ok},zk=n=>tt.jsxs(Lk,{onValueChange:n.onChange,className:$c.Root,orientation:"vertical",defaultValue:[n.value],max:n.max,min:n.min,step:1,children:[tt.jsx(Pk,{className:$c.Track,children:tt.jsx(Dk,{className:$c.Range})}),tt.jsx(Ik,{className:$c.Thumb,"aria-label":"Volume"})]}),kk=(n,e)=>n===e,Bk=({url:n,data:e})=>{const{state:t,dispatch:i}=E2();return JP(()=>(i.runLoadGcodeLines({url:TD({absUrl:n,relUrl:e.gcode})}),()=>{console.log("cleanup")}),kk,e.gcode),tt.jsx(WD,{viewPictures:tt.jsx(XD,{pictures:e.pictures}),viewGcode:tt.jsx(Jz,{gcode:cE(t.gcodeLines,{NotAsked:()=>[],Loading:()=>[],Loaded:a=>a,Error:a=>[]}),endLayer:sa(t.endLayer),onMaxLayerIndex:a=>{i.msg(v2.MsgSetMaxLayer(O_(a)))}}),item:e,viewSlider:tt.jsx(zk,{value:sa(t.endLayer),onChange:([a])=>{i.emitSetEndLayer(O_(a))},min:sa(t.minLayer),max:sa(t.maxLayer)})})},Hk=()=>{const{state:n,dispatch:e}=ID();return Ve.useEffect(()=>{console.log("render",n)}),Ve.useEffect(()=>{const t=CD();e.runFetchIndex({url:t.url})},[]),cE(n.index,{NotAsked:()=>tt.jsx(pc,{}),Loading:()=>tt.jsx(pc,{viewInfo:tt.jsx(tt.Fragment,{children:"Loading"})}),Loaded:t=>tt.jsx(pc,{children:tt.jsx(BD,{items:t.content.map(i=>tt.jsx(Bk,{url:t.url,data:i}))})}),Error:t=>tt.jsx(pc,{viewErrors:tt.jsx(tt.Fragment,{children:"Error: "+t})})})};P1.createRoot(document.getElementById("root")).render(tt.jsx(Hk,{}));
