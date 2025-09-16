function uM(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(i,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function xy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var jd={exports:{}},tl={},Yd={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function cM(){if(Zg)return xt;Zg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(L,z,W){this.props=L,this.context=z,this.refs=w,this.updater=W||S}x.prototype.isReactComponent={},x.prototype.setState=function(L,z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,z,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=x.prototype;function C(L,z,W){this.props=L,this.context=z,this.refs=w,this.updater=W||S}var M=C.prototype=new _;M.constructor=C,E(M,x.prototype),M.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function de(L,z,W){var q,ee={},Z=null,_e=null;if(z!=null)for(q in z.ref!==void 0&&(_e=z.ref),z.key!==void 0&&(Z=""+z.key),z)I.call(z,q)&&!F.hasOwnProperty(q)&&(ee[q]=z[q]);var ve=arguments.length-2;if(ve===1)ee.children=W;else if(1<ve){for(var be=Array(ve),Fe=0;Fe<ve;Fe++)be[Fe]=arguments[Fe+2];ee.children=be}if(L&&L.defaultProps)for(q in ve=L.defaultProps,ve)ee[q]===void 0&&(ee[q]=ve[q]);return{$$typeof:n,type:L,key:Z,ref:_e,props:ee,_owner:O.current}}function b(L,z){return{$$typeof:n,type:L.type,key:z,ref:L.ref,props:L.props,_owner:L._owner}}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function ae(L){var z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(W){return z[W]})}var ne=/\/+/g;function pe(L,z){return typeof L=="object"&&L!==null&&L.key!=null?ae(""+L.key):z.toString(36)}function H(L,z,W,q,ee){var Z=typeof L;(Z==="undefined"||Z==="boolean")&&(L=null);var _e=!1;if(L===null)_e=!0;else switch(Z){case"string":case"number":_e=!0;break;case"object":switch(L.$$typeof){case n:case e:_e=!0}}if(_e)return _e=L,ee=ee(_e),L=q===""?"."+pe(_e,0):q,R(ee)?(W="",L!=null&&(W=L.replace(ne,"$&/")+"/"),H(ee,z,W,"",function(Fe){return Fe})):ee!=null&&(N(ee)&&(ee=b(ee,W+(!ee.key||_e&&_e.key===ee.key?"":(""+ee.key).replace(ne,"$&/")+"/")+L)),z.push(ee)),1;if(_e=0,q=q===""?".":q+":",R(L))for(var ve=0;ve<L.length;ve++){Z=L[ve];var be=q+pe(Z,ve);_e+=H(Z,z,W,be,ee)}else if(be=g(L),typeof be=="function")for(L=be.call(L),ve=0;!(Z=L.next()).done;)Z=Z.value,be=q+pe(Z,ve++),_e+=H(Z,z,W,be,ee);else if(Z==="object")throw z=String(L),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return _e}function Q(L,z,W){if(L==null)return L;var q=[],ee=0;return H(L,q,"","",function(Z){return z.call(W,Z,ee++)}),q}function se(L){if(L._status===-1){var z=L._result;z=z(),z.then(function(W){(L._status===0||L._status===-1)&&(L._status=1,L._result=W)},function(W){(L._status===0||L._status===-1)&&(L._status=2,L._result=W)}),L._status===-1&&(L._status=0,L._result=z)}if(L._status===1)return L._result.default;throw L._result}var re={current:null},X={transition:null},ie={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function $(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:Q,forEach:function(L,z,W){Q(L,function(){z.apply(this,arguments)},W)},count:function(L){var z=0;return Q(L,function(){z++}),z},toArray:function(L){return Q(L,function(z){return z})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},xt.Component=x,xt.Fragment=t,xt.Profiler=a,xt.PureComponent=C,xt.StrictMode=i,xt.Suspense=d,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,xt.act=$,xt.cloneElement=function(L,z,W){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var q=E({},L.props),ee=L.key,Z=L.ref,_e=L._owner;if(z!=null){if(z.ref!==void 0&&(Z=z.ref,_e=O.current),z.key!==void 0&&(ee=""+z.key),L.type&&L.type.defaultProps)var ve=L.type.defaultProps;for(be in z)I.call(z,be)&&!F.hasOwnProperty(be)&&(q[be]=z[be]===void 0&&ve!==void 0?ve[be]:z[be])}var be=arguments.length-2;if(be===1)q.children=W;else if(1<be){ve=Array(be);for(var Fe=0;Fe<be;Fe++)ve[Fe]=arguments[Fe+2];q.children=ve}return{$$typeof:n,type:L.type,key:ee,ref:Z,props:q,_owner:_e}},xt.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:s,_context:L},L.Consumer=L},xt.createElement=de,xt.createFactory=function(L){var z=de.bind(null,L);return z.type=L,z},xt.createRef=function(){return{current:null}},xt.forwardRef=function(L){return{$$typeof:u,render:L}},xt.isValidElement=N,xt.lazy=function(L){return{$$typeof:p,_payload:{_status:-1,_result:L},_init:se}},xt.memo=function(L,z){return{$$typeof:h,type:L,compare:z===void 0?null:z}},xt.startTransition=function(L){var z=X.transition;X.transition={};try{L()}finally{X.transition=z}},xt.unstable_act=$,xt.useCallback=function(L,z){return re.current.useCallback(L,z)},xt.useContext=function(L){return re.current.useContext(L)},xt.useDebugValue=function(){},xt.useDeferredValue=function(L){return re.current.useDeferredValue(L)},xt.useEffect=function(L,z){return re.current.useEffect(L,z)},xt.useId=function(){return re.current.useId()},xt.useImperativeHandle=function(L,z,W){return re.current.useImperativeHandle(L,z,W)},xt.useInsertionEffect=function(L,z){return re.current.useInsertionEffect(L,z)},xt.useLayoutEffect=function(L,z){return re.current.useLayoutEffect(L,z)},xt.useMemo=function(L,z){return re.current.useMemo(L,z)},xt.useReducer=function(L,z,W){return re.current.useReducer(L,z,W)},xt.useRef=function(L){return re.current.useRef(L)},xt.useState=function(L){return re.current.useState(L)},xt.useSyncExternalStore=function(L,z,W){return re.current.useSyncExternalStore(L,z,W)},xt.useTransition=function(){return re.current.useTransition()},xt.version="18.3.1",xt}var Jg;function Dp(){return Jg||(Jg=1,Yd.exports=cM()),Yd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function fM(){if(Qg)return tl;Qg=1;var n=Dp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!s.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:S,props:v,_owner:a.current}}return tl.Fragment=t,tl.jsx=c,tl.jsxs=c,tl}var e_;function dM(){return e_||(e_=1,jd.exports=fM()),jd.exports}var tt=dM(),Xu={},qd={exports:{}},tr={},Kd={exports:{}},Zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function hM(){return t_||(t_=1,(function(n){function e(X,ie){var $=X.length;X.push(ie);e:for(;0<$;){var L=$-1>>>1,z=X[L];if(0<a(z,ie))X[L]=ie,X[$]=z,$=L;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ie=X[0],$=X.pop();if($!==ie){X[0]=$;e:for(var L=0,z=X.length,W=z>>>1;L<W;){var q=2*(L+1)-1,ee=X[q],Z=q+1,_e=X[Z];if(0>a(ee,$))Z<z&&0>a(_e,ee)?(X[L]=_e,X[Z]=$,L=Z):(X[L]=ee,X[q]=$,L=q);else if(Z<z&&0>a(_e,$))X[L]=_e,X[Z]=$,L=Z;else break e}}return ie}function a(X,ie){var $=X.sortIndex-ie.sortIndex;return $!==0?$:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,g=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(X){for(var ie=t(h);ie!==null;){if(ie.callback===null)i(h);else if(ie.startTime<=X)i(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function R(X){if(w=!1,M(X),!E)if(t(d)!==null)E=!0,se(I);else{var ie=t(h);ie!==null&&re(R,ie.startTime-X)}}function I(X,ie){E=!1,w&&(w=!1,_(de),de=-1),S=!0;var $=g;try{for(M(ie),v=t(d);v!==null&&(!(v.expirationTime>ie)||X&&!ae());){var L=v.callback;if(typeof L=="function"){v.callback=null,g=v.priorityLevel;var z=L(v.expirationTime<=ie);ie=n.unstable_now(),typeof z=="function"?v.callback=z:v===t(d)&&i(d),M(ie)}else i(d);v=t(d)}if(v!==null)var W=!0;else{var q=t(h);q!==null&&re(R,q.startTime-ie),W=!1}return W}finally{v=null,g=$,S=!1}}var O=!1,F=null,de=-1,b=5,N=-1;function ae(){return!(n.unstable_now()-N<b)}function ne(){if(F!==null){var X=n.unstable_now();N=X;var ie=!0;try{ie=F(!0,X)}finally{ie?pe():(O=!1,F=null)}}else O=!1}var pe;if(typeof C=="function")pe=function(){C(ne)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Q=H.port2;H.port1.onmessage=ne,pe=function(){Q.postMessage(null)}}else pe=function(){x(ne,0)};function se(X){F=X,O||(O=!0,pe())}function re(X,ie){de=x(function(){X(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,se(I))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var $=g;g=ie;try{return X()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var $=g;g=X;try{return ie()}finally{g=$}},n.unstable_scheduleCallback=function(X,ie,$){var L=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?L+$:L):$=L,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=$+z,X={id:p++,callback:ie,priorityLevel:X,startTime:$,expirationTime:z,sortIndex:-1},$>L?(X.sortIndex=$,e(h,X),t(d)===null&&X===t(h)&&(w?(_(de),de=-1):w=!0,re(R,$-L))):(X.sortIndex=z,e(d,X),E||S||(E=!0,se(I))),X},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(X){var ie=g;return function(){var $=g;g=ie;try{return X.apply(this,arguments)}finally{g=$}}}})(Zd)),Zd}var n_;function pM(){return n_||(n_=1,Kd.exports=hM()),Kd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function mM(){if(r_)return tr;r_=1;var n=Dp(),e=pM();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function s(r,o){c(r,o),c(r+"Capture",o)}function c(r,o){for(a[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(r){return d.call(v,r)?!0:d.call(p,r)?!1:h.test(r)?v[r]=!0:(p[r]=!0,!1)}function S(r,o,l,f){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,o,l,f){if(o===null||typeof o>"u"||S(r,o,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function w(r,o,l,f,m,y,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=r,this.type=o,this.sanitizeURL=y,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){x[r]=new w(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];x[o]=new w(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){x[r]=new w(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){x[r]=new w(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){x[r]=new w(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){x[r]=new w(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){x[r]=new w(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){x[r]=new w(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){x[r]=new w(r,5,!1,r.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(_,C);x[o]=new w(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){x[r]=new w(r,1,!1,r.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){x[r]=new w(r,1,!1,r.toLowerCase(),null,!0,!0)});function M(r,o,l,f){var m=x.hasOwnProperty(o)?x[o]:null;(m!==null?m.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,l,m,f)&&(l=null),f||m===null?g(o)&&(l===null?r.removeAttribute(o):r.setAttribute(o,""+l)):m.mustUseProperty?r[m.propertyName]=l===null?m.type===3?!1:"":l:(o=m.attributeName,f=m.attributeNamespace,l===null?r.removeAttribute(o):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?r.setAttributeNS(f,o,l):r.setAttribute(o,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),ae=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,L;function z(r){if(L===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);L=o&&o[1]||""}return`
`+L+r}var W=!1;function q(r,o){if(!r||W)return"";W=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(oe){var f=oe}Reflect.construct(r,[],o)}else{try{o.call()}catch(oe){f=oe}r.call(o.prototype)}else{try{throw Error()}catch(oe){f=oe}r()}}catch(oe){if(oe&&f&&typeof oe.stack=="string"){for(var m=oe.stack.split(`
`),y=f.stack.split(`
`),A=m.length-1,U=y.length-1;1<=A&&0<=U&&m[A]!==y[U];)U--;for(;1<=A&&0<=U;A--,U--)if(m[A]!==y[U]){if(A!==1||U!==1)do if(A--,U--,0>U||m[A]!==y[U]){var k=`
`+m[A].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=A&&0<=U);break}}}finally{W=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?z(r):""}function ee(r){switch(r.tag){case 5:return z(r.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return r=q(r.type,!1),r;case 11:return r=q(r.type.render,!1),r;case 1:return r=q(r.type,!0),r;default:return""}}function Z(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case O:return"Portal";case b:return"Profiler";case de:return"StrictMode";case pe:return"Suspense";case H:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case ae:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case ne:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Q:return o=r.displayName||null,o!==null?o:Z(r.type)||"Memo";case se:o=r._payload,r=r._init;try{return Z(r(o))}catch{}}return null}function _e(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(o);case 8:return o===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Fe(r){var o=be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,y.call(this,A)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Oe(r){r._valueTracker||(r._valueTracker=Fe(r))}function j(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var l=o.getValue(),f="";return r&&(f=be(r)?r.checked?"true":"false":r.value),r=f,r!==l?(o.setValue(r),!0):!1}function Lt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Be(r,o){var l=o.checked;return $({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function le(r,o){var l=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;l=ve(o.value!=null?o.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ue(r,o){o=o.checked,o!=null&&M(r,"checked",o,!1)}function xe(r,o){ue(r,o);var l=ve(o.value),f=o.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Me(r,o.type,l):o.hasOwnProperty("defaultValue")&&Me(r,o.type,ve(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function ge(r,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,l||o===r.value||(r.value=o),r.defaultValue=o}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Me(r,o,l){(o!=="number"||Lt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var we=Array.isArray;function Ie(r,o,l,f){if(r=r.options,o){o={};for(var m=0;m<l.length;m++)o["$"+l[m]]=!0;for(l=0;l<r.length;l++)m=o.hasOwnProperty("$"+r[l].value),r[l].selected!==m&&(r[l].selected=m),m&&f&&(r[l].defaultSelected=!0)}else{for(l=""+ve(l),o=null,m=0;m<r.length;m++){if(r[m].value===l){r[m].selected=!0,f&&(r[m].defaultSelected=!0);return}o!==null||r[m].disabled||(o=r[m])}o!==null&&(o.selected=!0)}}function Ze(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function D(r,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(we(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}r._wrapperState={initialValue:ve(l)}}function T(r,o){var l=ve(o.value),f=ve(o.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),o.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function Y(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function Ae(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?Ae(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ce,qe=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,f,m){MSApp.execUnsafeLocalFunction(function(){return r(o,l,f,m)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function De(r,o){if(o){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=o;return}}r.textContent=o}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(r){lt.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),ke[o]=ke[r]})});function wt(r,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ke.hasOwnProperty(r)&&ke[r]?(""+o).trim():o+"px"}function Pe(r,o){r=r.style;for(var l in o)if(o.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=wt(l,o[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,m):r[l]=m}}var Pt=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(r,o){if(o){if(Pt[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function st(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var et=null;function $e(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var gt=null,V=null,ze=null;function Re(r){if(r=Bs(r)){if(typeof gt!="function")throw Error(t(280));var o=r.stateNode;o&&(o=su(o),gt(r.stateNode,r.type,o))}}function me(r){V?ze?ze.push(r):ze=[r]:V=r}function Ue(){if(V){var r=V,o=ze;if(ze=V=null,Re(r),o)for(r=0;r<o.length;r++)Re(o[r])}}function ot(r,o){return r(o)}function Et(){}var Jt=!1;function vn(r,o,l){if(Jt)return r(o,l);Jt=!0;try{return ot(r,o,l)}finally{Jt=!1,(V!==null||ze!==null)&&(Et(),Ue())}}function bt(r,o){var l=r.stateNode;if(l===null)return null;var f=su(l);if(f===null)return null;l=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var cn=!1;if(u)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){cn=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{cn=!1}function Bl(r,o,l,f,m,y,A,U,k){var oe=Array.prototype.slice.call(arguments,3);try{o.apply(l,oe)}catch(Ee){this.onError(Ee)}}var To=!1,fi=null,bo=!1,Ii=null,Hl={onError:function(r){To=!0,fi=r}};function Vl(r,o,l,f,m,y,A,U,k){To=!1,fi=null,Bl.apply(Hl,arguments)}function mf(r,o,l,f,m,y,A,U,k){if(Vl.apply(this,arguments),To){if(To){var oe=fi;To=!1,fi=null}else throw Error(t(198));bo||(bo=!0,Ii=oe)}}function di(r){var o=r,l=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(l=o.return),r=o.return;while(r)}return o.tag===3?l:null}function Gl(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function P(r){if(di(r)!==r)throw Error(t(188))}function J(r){var o=r.alternate;if(!o){if(o=di(r),o===null)throw Error(t(188));return o!==r?null:r}for(var l=r,f=o;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return P(m),r;if(y===f)return P(m),o;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=y;else{for(var A=!1,U=m.child;U;){if(U===l){A=!0,l=m,f=y;break}if(U===f){A=!0,f=m,l=y;break}U=U.sibling}if(!A){for(U=y.child;U;){if(U===l){A=!0,l=y,f=m;break}if(U===f){A=!0,f=y,l=m;break}U=U.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:o}function fe(r){return r=J(r),r!==null?he(r):null}function he(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=he(r);if(o!==null)return o;r=r.sibling}return null}var ce=e.unstable_scheduleCallback,Ge=e.unstable_cancelCallback,Qe=e.unstable_shouldYield,at=e.unstable_requestPaint,Xe=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,dt=e.unstable_ImmediatePriority,pt=e.unstable_UserBlockingPriority,Bt=e.unstable_NormalPriority,Hn=e.unstable_LowPriority,nn=e.unstable_IdlePriority,Yn=null,Mt=null;function _t(r){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Yn,r,void 0,(r.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:Wl,jt=Math.log,hi=Math.LN2;function Wl(r){return r>>>=0,r===0?32:31-(jt(r)/hi|0)|0}var qr=64,Ui=4194304;function Qt(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function mr(r,o){var l=r.pendingLanes;if(l===0)return 0;var f=0,m=r.suspendedLanes,y=r.pingedLanes,A=l&268435455;if(A!==0){var U=A&~m;U!==0?f=Qt(U):(y&=A,y!==0&&(f=Qt(y)))}else A=l&~m,A!==0?f=Qt(A):y!==0&&(f=Qt(y));if(f===0)return 0;if(o!==0&&o!==f&&(o&m)===0&&(m=f&-f,y=o&-o,m>=y||m===16&&(y&4194240)!==0))return o;if((f&4)!==0&&(f|=l&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)l=31-Vn(o),m=1<<l,f|=r[l],o&=~m;return f}function Es(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qn(r,o){for(var l=r.suspendedLanes,f=r.pingedLanes,m=r.expirationTimes,y=r.pendingLanes;0<y;){var A=31-Vn(y),U=1<<A,k=m[A];k===-1?((U&l)===0||(U&f)!==0)&&(m[A]=Es(U,o)):k<=o&&(r.expiredLanes|=U),y&=~U}}function Co(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function $l(){var r=qr;return qr<<=1,(qr&4194240)===0&&(qr=64),r}function ca(r){for(var o=[],l=0;31>l;l++)o.push(r);return o}function ws(r,o,l){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Vn(o),r[o]=l}function LE(r,o){var l=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var m=31-Vn(l),y=1<<m;o[m]=0,f[m]=-1,r[m]=-1,l&=~y}}function vf(r,o){var l=r.entangledLanes|=o;for(r=r.entanglements;l;){var f=31-Vn(l),m=1<<f;m&o|r[f]&o&&(r[f]|=o),l&=~m}}var It=0;function Rm(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Lm,gf,Pm,Dm,Im,_f=!1,Xl=[],Ni=null,Fi=null,Oi=null,Ms=new Map,As=new Map,zi=[],PE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(r,o){switch(r){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Ms.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(o.pointerId)}}function Ts(r,o,l,f,m,y){return r===null||r.nativeEvent!==y?(r={blockedOn:o,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[m]},o!==null&&(o=Bs(o),o!==null&&gf(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),r)}function DE(r,o,l,f,m){switch(o){case"focusin":return Ni=Ts(Ni,r,o,l,f,m),!0;case"dragenter":return Fi=Ts(Fi,r,o,l,f,m),!0;case"mouseover":return Oi=Ts(Oi,r,o,l,f,m),!0;case"pointerover":var y=m.pointerId;return Ms.set(y,Ts(Ms.get(y)||null,r,o,l,f,m)),!0;case"gotpointercapture":return y=m.pointerId,As.set(y,Ts(As.get(y)||null,r,o,l,f,m)),!0}return!1}function Nm(r){var o=Ro(r.target);if(o!==null){var l=di(o);if(l!==null){if(o=l.tag,o===13){if(o=Gl(l),o!==null){r.blockedOn=o,Im(r.priority,function(){Pm(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function jl(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var l=xf(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);et=f,l.target.dispatchEvent(f),et=null}else return o=Bs(l),o!==null&&gf(o),r.blockedOn=l,!1;o.shift()}return!0}function Fm(r,o,l){jl(r)&&l.delete(o)}function IE(){_f=!1,Ni!==null&&jl(Ni)&&(Ni=null),Fi!==null&&jl(Fi)&&(Fi=null),Oi!==null&&jl(Oi)&&(Oi=null),Ms.forEach(Fm),As.forEach(Fm)}function bs(r,o){r.blockedOn===o&&(r.blockedOn=null,_f||(_f=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,IE)))}function Cs(r){function o(m){return bs(m,r)}if(0<Xl.length){bs(Xl[0],r);for(var l=1;l<Xl.length;l++){var f=Xl[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Ni!==null&&bs(Ni,r),Fi!==null&&bs(Fi,r),Oi!==null&&bs(Oi,r),Ms.forEach(o),As.forEach(o),l=0;l<zi.length;l++)f=zi[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<zi.length&&(l=zi[0],l.blockedOn===null);)Nm(l),l.blockedOn===null&&zi.shift()}var fa=R.ReactCurrentBatchConfig,Yl=!0;function UE(r,o,l,f){var m=It,y=fa.transition;fa.transition=null;try{It=1,yf(r,o,l,f)}finally{It=m,fa.transition=y}}function NE(r,o,l,f){var m=It,y=fa.transition;fa.transition=null;try{It=4,yf(r,o,l,f)}finally{It=m,fa.transition=y}}function yf(r,o,l,f){if(Yl){var m=xf(r,o,l,f);if(m===null)Of(r,o,f,ql,l),Um(r,f);else if(DE(m,r,o,l,f))f.stopPropagation();else if(Um(r,f),o&4&&-1<PE.indexOf(r)){for(;m!==null;){var y=Bs(m);if(y!==null&&Lm(y),y=xf(r,o,l,f),y===null&&Of(r,o,f,ql,l),y===m)break;m=y}m!==null&&f.stopPropagation()}else Of(r,o,f,null,l)}}var ql=null;function xf(r,o,l,f){if(ql=null,r=$e(f),r=Ro(r),r!==null)if(o=di(r),o===null)r=null;else if(l=o.tag,l===13){if(r=Gl(o),r!==null)return r;r=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return ql=r,null}function Om(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case dt:return 1;case pt:return 4;case Bt:case Hn:return 16;case nn:return 536870912;default:return 16}default:return 16}}var ki=null,Sf=null,Kl=null;function zm(){if(Kl)return Kl;var r,o=Sf,l=o.length,f,m="value"in ki?ki.value:ki.textContent,y=m.length;for(r=0;r<l&&o[r]===m[r];r++);var A=l-r;for(f=1;f<=A&&o[l-f]===m[y-f];f++);return Kl=m.slice(r,1<f?1-f:void 0)}function Zl(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Jl(){return!0}function km(){return!1}function sr(r){function o(l,f,m,y,A){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=y,this.target=A,this.currentTarget=null;for(var U in r)r.hasOwnProperty(U)&&(l=r[U],this[U]=l?l(y):y[U]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Jl:km,this.isPropagationStopped=km,this}return $(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),o}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=sr(da),Rs=$({},da,{view:0,detail:0}),FE=sr(Rs),wf,Mf,Ls,Ql=$({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ls&&(Ls&&r.type==="mousemove"?(wf=r.screenX-Ls.screenX,Mf=r.screenY-Ls.screenY):Mf=wf=0,Ls=r),wf)},movementY:function(r){return"movementY"in r?r.movementY:Mf}}),Bm=sr(Ql),OE=$({},Ql,{dataTransfer:0}),zE=sr(OE),kE=$({},Rs,{relatedTarget:0}),Af=sr(kE),BE=$({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),HE=sr(BE),VE=$({},da,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),GE=sr(VE),WE=$({},da,{data:0}),Hm=sr(WE),$E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YE(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=jE[r])?!!o[r]:!1}function Tf(){return YE}var qE=$({},Rs,{key:function(r){if(r.key){var o=$E[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=Zl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?XE[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(r){return r.type==="keypress"?Zl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Zl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),KE=sr(qE),ZE=$({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=sr(ZE),JE=$({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),QE=sr(JE),ew=$({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),tw=sr(ew),nw=$({},Ql,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=sr(nw),iw=[9,13,27,32],bf=u&&"CompositionEvent"in window,Ps=null;u&&"documentMode"in document&&(Ps=document.documentMode);var ow=u&&"TextEvent"in window&&!Ps,Gm=u&&(!bf||Ps&&8<Ps&&11>=Ps),Wm=" ",$m=!1;function Xm(r,o){switch(r){case"keyup":return iw.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ha=!1;function aw(r,o){switch(r){case"compositionend":return jm(o);case"keypress":return o.which!==32?null:($m=!0,Wm);case"textInput":return r=o.data,r===Wm&&$m?null:r;default:return null}}function sw(r,o){if(ha)return r==="compositionend"||!bf&&Xm(r,o)?(r=zm(),Kl=Sf=ki=null,ha=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Gm&&o.locale!=="ko"?null:o.data;default:return null}}var lw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!lw[r.type]:o==="textarea"}function qm(r,o,l,f){me(f),o=iu(o,"onChange"),0<o.length&&(l=new Ef("onChange","change",null,l,f),r.push({event:l,listeners:o}))}var Ds=null,Is=null;function uw(r){hv(r,0)}function eu(r){var o=_a(r);if(j(o))return r}function cw(r,o){if(r==="change")return o}var Km=!1;if(u){var Cf;if(u){var Rf="oninput"in document;if(!Rf){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Rf=typeof Zm.oninput=="function"}Cf=Rf}else Cf=!1;Km=Cf&&(!document.documentMode||9<document.documentMode)}function Jm(){Ds&&(Ds.detachEvent("onpropertychange",Qm),Is=Ds=null)}function Qm(r){if(r.propertyName==="value"&&eu(Is)){var o=[];qm(o,Is,r,$e(r)),vn(uw,o)}}function fw(r,o,l){r==="focusin"?(Jm(),Ds=o,Is=l,Ds.attachEvent("onpropertychange",Qm)):r==="focusout"&&Jm()}function dw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return eu(Is)}function hw(r,o){if(r==="click")return eu(o)}function pw(r,o){if(r==="input"||r==="change")return eu(o)}function mw(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Ur=typeof Object.is=="function"?Object.is:mw;function Us(r,o){if(Ur(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var l=Object.keys(r),f=Object.keys(o);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(o,m)||!Ur(r[m],o[m]))return!1}return!0}function ev(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function tv(r,o){var l=ev(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=o&&f>=o)return{node:l,offset:o-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ev(l)}}function nv(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?nv(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function rv(){for(var r=window,o=Lt();o instanceof r.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)r=o.contentWindow;else break;o=Lt(r.document)}return o}function Lf(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function vw(r){var o=rv(),l=r.focusedElem,f=r.selectionRange;if(o!==l&&l&&l.ownerDocument&&nv(l.ownerDocument.documentElement,l)){if(f!==null&&Lf(l)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(r,l.value.length);else if(r=(o=l.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var m=l.textContent.length,y=Math.min(f.start,m);f=f.end===void 0?y:Math.min(f.end,m),!r.extend&&y>f&&(m=f,f=y,y=m),m=tv(l,y);var A=tv(l,f);m&&A&&(r.rangeCount!==1||r.anchorNode!==m.node||r.anchorOffset!==m.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),r.removeAllRanges(),y>f?(r.addRange(o),r.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),r.addRange(o)))}}for(o=[],r=l;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)r=o[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var gw=u&&"documentMode"in document&&11>=document.documentMode,pa=null,Pf=null,Ns=null,Df=!1;function iv(r,o,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Df||pa==null||pa!==Lt(f)||(f=pa,"selectionStart"in f&&Lf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ns&&Us(Ns,f)||(Ns=f,f=iu(Pf,"onSelect"),0<f.length&&(o=new Ef("onSelect","select",null,o,l),r.push({event:o,listeners:f}),o.target=pa)))}function tu(r,o){var l={};return l[r.toLowerCase()]=o.toLowerCase(),l["Webkit"+r]="webkit"+o,l["Moz"+r]="moz"+o,l}var ma={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},If={},ov={};u&&(ov=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function nu(r){if(If[r])return If[r];if(!ma[r])return r;var o=ma[r],l;for(l in o)if(o.hasOwnProperty(l)&&l in ov)return If[r]=o[l];return r}var av=nu("animationend"),sv=nu("animationiteration"),lv=nu("animationstart"),uv=nu("transitionend"),cv=new Map,fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(r,o){cv.set(r,o),s(o,[r])}for(var Uf=0;Uf<fv.length;Uf++){var Nf=fv[Uf],_w=Nf.toLowerCase(),yw=Nf[0].toUpperCase()+Nf.slice(1);Bi(_w,"on"+yw)}Bi(av,"onAnimationEnd"),Bi(sv,"onAnimationIteration"),Bi(lv,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(uv,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function dv(r,o,l){var f=r.type||"unknown-event";r.currentTarget=l,mf(f,o,void 0,r),r.currentTarget=null}function hv(r,o){o=(o&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],m=f.event;f=f.listeners;e:{var y=void 0;if(o)for(var A=f.length-1;0<=A;A--){var U=f[A],k=U.instance,oe=U.currentTarget;if(U=U.listener,k!==y&&m.isPropagationStopped())break e;dv(m,U,oe),y=k}else for(A=0;A<f.length;A++){if(U=f[A],k=U.instance,oe=U.currentTarget,U=U.listener,k!==y&&m.isPropagationStopped())break e;dv(m,U,oe),y=k}}}if(bo)throw r=Ii,bo=!1,Ii=null,r}function Gt(r,o){var l=o[Gf];l===void 0&&(l=o[Gf]=new Set);var f=r+"__bubble";l.has(f)||(pv(o,r,2,!1),l.add(f))}function Ff(r,o,l){var f=0;o&&(f|=4),pv(l,r,f,o)}var ru="_reactListening"+Math.random().toString(36).slice(2);function Os(r){if(!r[ru]){r[ru]=!0,i.forEach(function(l){l!=="selectionchange"&&(xw.has(l)||Ff(l,!1,r),Ff(l,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[ru]||(o[ru]=!0,Ff("selectionchange",!1,o))}}function pv(r,o,l,f){switch(Om(o)){case 1:var m=UE;break;case 4:m=NE;break;default:m=yf}l=m.bind(null,o,l,r),m=void 0,!cn||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),f?m!==void 0?r.addEventListener(o,l,{capture:!0,passive:m}):r.addEventListener(o,l,!0):m!==void 0?r.addEventListener(o,l,{passive:m}):r.addEventListener(o,l,!1)}function Of(r,o,l,f,m){var y=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var k=A.tag;if((k===3||k===4)&&(k=A.stateNode.containerInfo,k===m||k.nodeType===8&&k.parentNode===m))return;A=A.return}for(;U!==null;){if(A=Ro(U),A===null)return;if(k=A.tag,k===5||k===6){f=y=A;continue e}U=U.parentNode}}f=f.return}vn(function(){var oe=y,Ee=$e(l),Te=[];e:{var Se=cv.get(r);if(Se!==void 0){var We=Ef,Ye=r;switch(r){case"keypress":if(Zl(l)===0)break e;case"keydown":case"keyup":We=KE;break;case"focusin":Ye="focus",We=Af;break;case"focusout":Ye="blur",We=Af;break;case"beforeblur":case"afterblur":We=Af;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=zE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=QE;break;case av:case sv:case lv:We=HE;break;case uv:We=tw;break;case"scroll":We=FE;break;case"wheel":We=rw;break;case"copy":case"cut":case"paste":We=GE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Vm}var Ke=(o&4)!==0,rn=!Ke&&r==="scroll",K=Ke?Se!==null?Se+"Capture":null:Se;Ke=[];for(var G=oe,te;G!==null;){te=G;var Le=te.stateNode;if(te.tag===5&&Le!==null&&(te=Le,K!==null&&(Le=bt(G,K),Le!=null&&Ke.push(zs(G,Le,te)))),rn)break;G=G.return}0<Ke.length&&(Se=new We(Se,Ye,null,l,Ee),Te.push({event:Se,listeners:Ke}))}}if((o&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",We=r==="mouseout"||r==="pointerout",Se&&l!==et&&(Ye=l.relatedTarget||l.fromElement)&&(Ro(Ye)||Ye[pi]))break e;if((We||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,We?(Ye=l.relatedTarget||l.toElement,We=oe,Ye=Ye?Ro(Ye):null,Ye!==null&&(rn=di(Ye),Ye!==rn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(We=null,Ye=oe),We!==Ye)){if(Ke=Bm,Le="onMouseLeave",K="onMouseEnter",G="mouse",(r==="pointerout"||r==="pointerover")&&(Ke=Vm,Le="onPointerLeave",K="onPointerEnter",G="pointer"),rn=We==null?Se:_a(We),te=Ye==null?Se:_a(Ye),Se=new Ke(Le,G+"leave",We,l,Ee),Se.target=rn,Se.relatedTarget=te,Le=null,Ro(Ee)===oe&&(Ke=new Ke(K,G+"enter",Ye,l,Ee),Ke.target=te,Ke.relatedTarget=rn,Le=Ke),rn=Le,We&&Ye)t:{for(Ke=We,K=Ye,G=0,te=Ke;te;te=va(te))G++;for(te=0,Le=K;Le;Le=va(Le))te++;for(;0<G-te;)Ke=va(Ke),G--;for(;0<te-G;)K=va(K),te--;for(;G--;){if(Ke===K||K!==null&&Ke===K.alternate)break t;Ke=va(Ke),K=va(K)}Ke=null}else Ke=null;We!==null&&mv(Te,Se,We,Ke,!1),Ye!==null&&rn!==null&&mv(Te,rn,Ye,Ke,!0)}}e:{if(Se=oe?_a(oe):window,We=Se.nodeName&&Se.nodeName.toLowerCase(),We==="select"||We==="input"&&Se.type==="file")var Je=cw;else if(Ym(Se))if(Km)Je=pw;else{Je=dw;var rt=fw}else(We=Se.nodeName)&&We.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Je=hw);if(Je&&(Je=Je(r,oe))){qm(Te,Je,l,Ee);break e}rt&&rt(r,Se,oe),r==="focusout"&&(rt=Se._wrapperState)&&rt.controlled&&Se.type==="number"&&Me(Se,"number",Se.value)}switch(rt=oe?_a(oe):window,r){case"focusin":(Ym(rt)||rt.contentEditable==="true")&&(pa=rt,Pf=oe,Ns=null);break;case"focusout":Ns=Pf=pa=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,iv(Te,l,Ee);break;case"selectionchange":if(gw)break;case"keydown":case"keyup":iv(Te,l,Ee)}var it;if(bf)e:{switch(r){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else ha?Xm(r,l)&&(ut="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(Gm&&l.locale!=="ko"&&(ha||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&ha&&(it=zm()):(ki=Ee,Sf="value"in ki?ki.value:ki.textContent,ha=!0)),rt=iu(oe,ut),0<rt.length&&(ut=new Hm(ut,r,null,l,Ee),Te.push({event:ut,listeners:rt}),it?ut.data=it:(it=jm(l),it!==null&&(ut.data=it)))),(it=ow?aw(r,l):sw(r,l))&&(oe=iu(oe,"onBeforeInput"),0<oe.length&&(Ee=new Hm("onBeforeInput","beforeinput",null,l,Ee),Te.push({event:Ee,listeners:oe}),Ee.data=it))}hv(Te,o)})}function zs(r,o,l){return{instance:r,listener:o,currentTarget:l}}function iu(r,o){for(var l=o+"Capture",f=[];r!==null;){var m=r,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=bt(r,l),y!=null&&f.unshift(zs(r,y,m)),y=bt(r,o),y!=null&&f.push(zs(r,y,m))),r=r.return}return f}function va(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function mv(r,o,l,f,m){for(var y=o._reactName,A=[];l!==null&&l!==f;){var U=l,k=U.alternate,oe=U.stateNode;if(k!==null&&k===f)break;U.tag===5&&oe!==null&&(U=oe,m?(k=bt(l,y),k!=null&&A.unshift(zs(l,k,U))):m||(k=bt(l,y),k!=null&&A.push(zs(l,k,U)))),l=l.return}A.length!==0&&r.push({event:o,listeners:A})}var Sw=/\r\n?/g,Ew=/\u0000|\uFFFD/g;function vv(r){return(typeof r=="string"?r:""+r).replace(Sw,`
`).replace(Ew,"")}function ou(r,o,l){if(o=vv(o),vv(r)!==o&&l)throw Error(t(425))}function au(){}var zf=null,kf=null;function Bf(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Hf=typeof setTimeout=="function"?setTimeout:void 0,ww=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,Mw=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(r){return gv.resolve(null).then(r).catch(Aw)}:Hf;function Aw(r){setTimeout(function(){throw r})}function Vf(r,o){var l=o,f=0;do{var m=l.nextSibling;if(r.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){r.removeChild(m),Cs(o);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Cs(o)}function Hi(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function _v(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return r;o--}else l==="/$"&&o++}r=r.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Kr="__reactFiber$"+ga,ks="__reactProps$"+ga,pi="__reactContainer$"+ga,Gf="__reactEvents$"+ga,Tw="__reactListeners$"+ga,bw="__reactHandles$"+ga;function Ro(r){var o=r[Kr];if(o)return o;for(var l=r.parentNode;l;){if(o=l[pi]||l[Kr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(r=_v(r);r!==null;){if(l=r[Kr])return l;r=_v(r)}return o}r=l,l=r.parentNode}return null}function Bs(r){return r=r[Kr]||r[pi],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function _a(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function su(r){return r[ks]||null}var Wf=[],ya=-1;function Vi(r){return{current:r}}function Wt(r){0>ya||(r.current=Wf[ya],Wf[ya]=null,ya--)}function Ht(r,o){ya++,Wf[ya]=r.current,r.current=o}var Gi={},Pn=Vi(Gi),Kn=Vi(!1),Lo=Gi;function xa(r,o){var l=r.type.contextTypes;if(!l)return Gi;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=o[y];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=m),m}function Zn(r){return r=r.childContextTypes,r!=null}function lu(){Wt(Kn),Wt(Pn)}function yv(r,o,l){if(Pn.current!==Gi)throw Error(t(168));Ht(Pn,o),Ht(Kn,l)}function xv(r,o,l){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in o))throw Error(t(108,_e(r)||"Unknown",m));return $({},l,f)}function uu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Gi,Lo=Pn.current,Ht(Pn,r),Ht(Kn,Kn.current),!0}function Sv(r,o,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=xv(r,o,Lo),f.__reactInternalMemoizedMergedChildContext=r,Wt(Kn),Wt(Pn),Ht(Pn,r)):Wt(Kn),Ht(Kn,l)}var mi=null,cu=!1,$f=!1;function Ev(r){mi===null?mi=[r]:mi.push(r)}function Cw(r){cu=!0,Ev(r)}function Wi(){if(!$f&&mi!==null){$f=!0;var r=0,o=It;try{var l=mi;for(It=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}mi=null,cu=!1}catch(m){throw mi!==null&&(mi=mi.slice(r+1)),ce(dt,Wi),m}finally{It=o,$f=!1}}return null}var Sa=[],Ea=0,fu=null,du=0,vr=[],gr=0,Po=null,vi=1,gi="";function Do(r,o){Sa[Ea++]=du,Sa[Ea++]=fu,fu=r,du=o}function wv(r,o,l){vr[gr++]=vi,vr[gr++]=gi,vr[gr++]=Po,Po=r;var f=vi;r=gi;var m=32-Vn(f)-1;f&=~(1<<m),l+=1;var y=32-Vn(o)+m;if(30<y){var A=m-m%5;y=(f&(1<<A)-1).toString(32),f>>=A,m-=A,vi=1<<32-Vn(o)+m|l<<m|f,gi=y+r}else vi=1<<y|l<<m|f,gi=r}function Xf(r){r.return!==null&&(Do(r,1),wv(r,1,0))}function jf(r){for(;r===fu;)fu=Sa[--Ea],Sa[Ea]=null,du=Sa[--Ea],Sa[Ea]=null;for(;r===Po;)Po=vr[--gr],vr[gr]=null,gi=vr[--gr],vr[gr]=null,vi=vr[--gr],vr[gr]=null}var lr=null,ur=null,Yt=!1,Nr=null;function Mv(r,o){var l=Sr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=r,o=r.deletions,o===null?(r.deletions=[l],r.flags|=16):o.push(l)}function Av(r,o){switch(r.tag){case 5:var l=r.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,lr=r,ur=Hi(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,lr=r,ur=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Po!==null?{id:vi,overflow:gi}:null,r.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Sr(18,null,null,0),l.stateNode=o,l.return=r,r.child=l,lr=r,ur=null,!0):!1;default:return!1}}function Yf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function qf(r){if(Yt){var o=ur;if(o){var l=o;if(!Av(r,o)){if(Yf(r))throw Error(t(418));o=Hi(l.nextSibling);var f=lr;o&&Av(r,o)?Mv(f,l):(r.flags=r.flags&-4097|2,Yt=!1,lr=r)}}else{if(Yf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Yt=!1,lr=r}}}function Tv(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;lr=r}function hu(r){if(r!==lr)return!1;if(!Yt)return Tv(r),Yt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!Bf(r.type,r.memoizedProps)),o&&(o=ur)){if(Yf(r))throw bv(),Error(t(418));for(;o;)Mv(r,o),o=Hi(o.nextSibling)}if(Tv(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(o===0){ur=Hi(r.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}r=r.nextSibling}ur=null}}else ur=lr?Hi(r.stateNode.nextSibling):null;return!0}function bv(){for(var r=ur;r;)r=Hi(r.nextSibling)}function wa(){ur=lr=null,Yt=!1}function Kf(r){Nr===null?Nr=[r]:Nr.push(r)}var Rw=R.ReactCurrentBatchConfig;function Hs(r,o,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var m=f,y=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(A){var U=m.refs;A===null?delete U[y]:U[y]=A},o._stringRef=y,o)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function pu(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function Cv(r){var o=r._init;return o(r._payload)}function Rv(r){function o(K,G){if(r){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function l(K,G){if(!r)return null;for(;G!==null;)o(K,G),G=G.sibling;return null}function f(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function m(K,G){return K=Ji(K,G),K.index=0,K.sibling=null,K}function y(K,G,te){return K.index=te,r?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function A(K){return r&&K.alternate===null&&(K.flags|=2),K}function U(K,G,te,Le){return G===null||G.tag!==6?(G=Hd(te,K.mode,Le),G.return=K,G):(G=m(G,te),G.return=K,G)}function k(K,G,te,Le){var Je=te.type;return Je===F?Ee(K,G,te.props.children,Le,te.key):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&Cv(Je)===G.type)?(Le=m(G,te.props),Le.ref=Hs(K,G,te),Le.return=K,Le):(Le=zu(te.type,te.key,te.props,null,K.mode,Le),Le.ref=Hs(K,G,te),Le.return=K,Le)}function oe(K,G,te,Le){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Vd(te,K.mode,Le),G.return=K,G):(G=m(G,te.children||[]),G.return=K,G)}function Ee(K,G,te,Le,Je){return G===null||G.tag!==7?(G=Bo(te,K.mode,Le,Je),G.return=K,G):(G=m(G,te),G.return=K,G)}function Te(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Hd(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return te=zu(G.type,G.key,G.props,null,K.mode,te),te.ref=Hs(K,null,G),te.return=K,te;case O:return G=Vd(G,K.mode,te),G.return=K,G;case se:var Le=G._init;return Te(K,Le(G._payload),te)}if(we(G)||ie(G))return G=Bo(G,K.mode,te,null),G.return=K,G;pu(K,G)}return null}function Se(K,G,te,Le){var Je=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Je!==null?null:U(K,G,""+te,Le);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return te.key===Je?k(K,G,te,Le):null;case O:return te.key===Je?oe(K,G,te,Le):null;case se:return Je=te._init,Se(K,G,Je(te._payload),Le)}if(we(te)||ie(te))return Je!==null?null:Ee(K,G,te,Le,null);pu(K,te)}return null}function We(K,G,te,Le,Je){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return K=K.get(te)||null,U(G,K,""+Le,Je);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case I:return K=K.get(Le.key===null?te:Le.key)||null,k(G,K,Le,Je);case O:return K=K.get(Le.key===null?te:Le.key)||null,oe(G,K,Le,Je);case se:var rt=Le._init;return We(K,G,te,rt(Le._payload),Je)}if(we(Le)||ie(Le))return K=K.get(te)||null,Ee(G,K,Le,Je,null);pu(G,Le)}return null}function Ye(K,G,te,Le){for(var Je=null,rt=null,it=G,ut=G=0,yn=null;it!==null&&ut<te.length;ut++){it.index>ut?(yn=it,it=null):yn=it.sibling;var Ct=Se(K,it,te[ut],Le);if(Ct===null){it===null&&(it=yn);break}r&&it&&Ct.alternate===null&&o(K,it),G=y(Ct,G,ut),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct,it=yn}if(ut===te.length)return l(K,it),Yt&&Do(K,ut),Je;if(it===null){for(;ut<te.length;ut++)it=Te(K,te[ut],Le),it!==null&&(G=y(it,G,ut),rt===null?Je=it:rt.sibling=it,rt=it);return Yt&&Do(K,ut),Je}for(it=f(K,it);ut<te.length;ut++)yn=We(it,K,ut,te[ut],Le),yn!==null&&(r&&yn.alternate!==null&&it.delete(yn.key===null?ut:yn.key),G=y(yn,G,ut),rt===null?Je=yn:rt.sibling=yn,rt=yn);return r&&it.forEach(function(Qi){return o(K,Qi)}),Yt&&Do(K,ut),Je}function Ke(K,G,te,Le){var Je=ie(te);if(typeof Je!="function")throw Error(t(150));if(te=Je.call(te),te==null)throw Error(t(151));for(var rt=Je=null,it=G,ut=G=0,yn=null,Ct=te.next();it!==null&&!Ct.done;ut++,Ct=te.next()){it.index>ut?(yn=it,it=null):yn=it.sibling;var Qi=Se(K,it,Ct.value,Le);if(Qi===null){it===null&&(it=yn);break}r&&it&&Qi.alternate===null&&o(K,it),G=y(Qi,G,ut),rt===null?Je=Qi:rt.sibling=Qi,rt=Qi,it=yn}if(Ct.done)return l(K,it),Yt&&Do(K,ut),Je;if(it===null){for(;!Ct.done;ut++,Ct=te.next())Ct=Te(K,Ct.value,Le),Ct!==null&&(G=y(Ct,G,ut),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct);return Yt&&Do(K,ut),Je}for(it=f(K,it);!Ct.done;ut++,Ct=te.next())Ct=We(it,K,ut,Ct.value,Le),Ct!==null&&(r&&Ct.alternate!==null&&it.delete(Ct.key===null?ut:Ct.key),G=y(Ct,G,ut),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct);return r&&it.forEach(function(lM){return o(K,lM)}),Yt&&Do(K,ut),Je}function rn(K,G,te,Le){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case I:e:{for(var Je=te.key,rt=G;rt!==null;){if(rt.key===Je){if(Je=te.type,Je===F){if(rt.tag===7){l(K,rt.sibling),G=m(rt,te.props.children),G.return=K,K=G;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&Cv(Je)===rt.type){l(K,rt.sibling),G=m(rt,te.props),G.ref=Hs(K,rt,te),G.return=K,K=G;break e}l(K,rt);break}else o(K,rt);rt=rt.sibling}te.type===F?(G=Bo(te.props.children,K.mode,Le,te.key),G.return=K,K=G):(Le=zu(te.type,te.key,te.props,null,K.mode,Le),Le.ref=Hs(K,G,te),Le.return=K,K=Le)}return A(K);case O:e:{for(rt=te.key;G!==null;){if(G.key===rt)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){l(K,G.sibling),G=m(G,te.children||[]),G.return=K,K=G;break e}else{l(K,G);break}else o(K,G);G=G.sibling}G=Vd(te,K.mode,Le),G.return=K,K=G}return A(K);case se:return rt=te._init,rn(K,G,rt(te._payload),Le)}if(we(te))return Ye(K,G,te,Le);if(ie(te))return Ke(K,G,te,Le);pu(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(l(K,G.sibling),G=m(G,te),G.return=K,K=G):(l(K,G),G=Hd(te,K.mode,Le),G.return=K,K=G),A(K)):l(K,G)}return rn}var Ma=Rv(!0),Lv=Rv(!1),mu=Vi(null),vu=null,Aa=null,Zf=null;function Jf(){Zf=Aa=vu=null}function Qf(r){var o=mu.current;Wt(mu),r._currentValue=o}function ed(r,o,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===l)break;r=r.return}}function Ta(r,o){vu=r,Zf=Aa=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(Jn=!0),r.firstContext=null)}function _r(r){var o=r._currentValue;if(Zf!==r)if(r={context:r,memoizedValue:o,next:null},Aa===null){if(vu===null)throw Error(t(308));Aa=r,vu.dependencies={lanes:0,firstContext:r}}else Aa=Aa.next=r;return o}var Io=null;function td(r){Io===null?Io=[r]:Io.push(r)}function Pv(r,o,l,f){var m=o.interleaved;return m===null?(l.next=l,td(o)):(l.next=m.next,m.next=l),o.interleaved=l,_i(r,f)}function _i(r,o){r.lanes|=o;var l=r.alternate;for(l!==null&&(l.lanes|=o),l=r,r=r.return;r!==null;)r.childLanes|=o,l=r.alternate,l!==null&&(l.childLanes|=o),l=r,r=r.return;return l.tag===3?l.stateNode:null}var $i=!1;function nd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function yi(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function Xi(r,o,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(At&2)!==0){var m=f.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),f.pending=o,_i(r,l)}return m=f.interleaved,m===null?(o.next=o,td(f)):(o.next=m.next,m.next=o),f.interleaved=o,_i(r,l)}function gu(r,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,vf(r,l)}}function Iv(r,o){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=A:y=y.next=A,l=l.next}while(l!==null);y===null?m=y=o:y=y.next=o}else m=y=o;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=o:r.next=o,l.lastBaseUpdate=o}function _u(r,o,l,f){var m=r.updateQueue;$i=!1;var y=m.firstBaseUpdate,A=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var k=U,oe=k.next;k.next=null,A===null?y=oe:A.next=oe,A=k;var Ee=r.alternate;Ee!==null&&(Ee=Ee.updateQueue,U=Ee.lastBaseUpdate,U!==A&&(U===null?Ee.firstBaseUpdate=oe:U.next=oe,Ee.lastBaseUpdate=k))}if(y!==null){var Te=m.baseState;A=0,Ee=oe=k=null,U=y;do{var Se=U.lane,We=U.eventTime;if((f&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:We,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ye=r,Ke=U;switch(Se=o,We=l,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Te=Ye.call(We,Te,Se);break e}Te=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,Se=typeof Ye=="function"?Ye.call(We,Te,Se):Ye,Se==null)break e;Te=$({},Te,Se);break e;case 2:$i=!0}}U.callback!==null&&U.lane!==0&&(r.flags|=64,Se=m.effects,Se===null?m.effects=[U]:Se.push(U))}else We={eventTime:We,lane:Se,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Ee===null?(oe=Ee=We,k=Te):Ee=Ee.next=We,A|=Se;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;Se=U,U=Se.next,Se.next=null,m.lastBaseUpdate=Se,m.shared.pending=null}}while(!0);if(Ee===null&&(k=Te),m.baseState=k,m.firstBaseUpdate=oe,m.lastBaseUpdate=Ee,o=m.shared.interleaved,o!==null){m=o;do A|=m.lane,m=m.next;while(m!==o)}else y===null&&(m.shared.lanes=0);Fo|=A,r.lanes=A,r.memoizedState=Te}}function Uv(r,o,l){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Vs={},Zr=Vi(Vs),Gs=Vi(Vs),Ws=Vi(Vs);function Uo(r){if(r===Vs)throw Error(t(174));return r}function rd(r,o){switch(Ht(Ws,o),Ht(Gs,r),Ht(Zr,Vs),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ye(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=ye(o,r)}Wt(Zr),Ht(Zr,o)}function ba(){Wt(Zr),Wt(Gs),Wt(Ws)}function Nv(r){Uo(Ws.current);var o=Uo(Zr.current),l=ye(o,r.type);o!==l&&(Ht(Gs,r),Ht(Zr,l))}function id(r){Gs.current===r&&(Wt(Zr),Wt(Gs))}var qt=Vi(0);function yu(r){for(var o=r;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var od=[];function ad(){for(var r=0;r<od.length;r++)od[r]._workInProgressVersionPrimary=null;od.length=0}var xu=R.ReactCurrentDispatcher,sd=R.ReactCurrentBatchConfig,No=0,Kt=null,fn=null,gn=null,Su=!1,$s=!1,Xs=0,Lw=0;function Dn(){throw Error(t(321))}function ld(r,o){if(o===null)return!1;for(var l=0;l<o.length&&l<r.length;l++)if(!Ur(r[l],o[l]))return!1;return!0}function ud(r,o,l,f,m,y){if(No=y,Kt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,xu.current=r===null||r.memoizedState===null?Uw:Nw,r=l(f,m),$s){y=0;do{if($s=!1,Xs=0,25<=y)throw Error(t(301));y+=1,gn=fn=null,o.updateQueue=null,xu.current=Fw,r=l(f,m)}while($s)}if(xu.current=Mu,o=fn!==null&&fn.next!==null,No=0,gn=fn=Kt=null,Su=!1,o)throw Error(t(300));return r}function cd(){var r=Xs!==0;return Xs=0,r}function Jr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Kt.memoizedState=gn=r:gn=gn.next=r,gn}function yr(){if(fn===null){var r=Kt.alternate;r=r!==null?r.memoizedState:null}else r=fn.next;var o=gn===null?Kt.memoizedState:gn.next;if(o!==null)gn=o,fn=r;else{if(r===null)throw Error(t(310));fn=r,r={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},gn===null?Kt.memoizedState=gn=r:gn=gn.next=r}return gn}function js(r,o){return typeof o=="function"?o(r):o}function fd(r){var o=yr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=fn,m=f.baseQueue,y=l.pending;if(y!==null){if(m!==null){var A=m.next;m.next=y.next,y.next=A}f.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,f=f.baseState;var U=A=null,k=null,oe=y;do{var Ee=oe.lane;if((No&Ee)===Ee)k!==null&&(k=k.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),f=oe.hasEagerState?oe.eagerState:r(f,oe.action);else{var Te={lane:Ee,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};k===null?(U=k=Te,A=f):k=k.next=Te,Kt.lanes|=Ee,Fo|=Ee}oe=oe.next}while(oe!==null&&oe!==y);k===null?A=f:k.next=U,Ur(f,o.memoizedState)||(Jn=!0),o.memoizedState=f,o.baseState=A,o.baseQueue=k,l.lastRenderedState=f}if(r=l.interleaved,r!==null){m=r;do y=m.lane,Kt.lanes|=y,Fo|=y,m=m.next;while(m!==r)}else m===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function dd(r){var o=yr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,m=l.pending,y=o.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do y=r(y,A.action),A=A.next;while(A!==m);Ur(y,o.memoizedState)||(Jn=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),l.lastRenderedState=y}return[y,f]}function Fv(){}function Ov(r,o){var l=Kt,f=yr(),m=o(),y=!Ur(f.memoizedState,m);if(y&&(f.memoizedState=m,Jn=!0),f=f.queue,hd(Bv.bind(null,l,f,r),[r]),f.getSnapshot!==o||y||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,Ys(9,kv.bind(null,l,f,m,o),void 0,null),_n===null)throw Error(t(349));(No&30)!==0||zv(l,o,m)}return m}function zv(r,o,l){r.flags|=16384,r={getSnapshot:o,value:l},o=Kt.updateQueue,o===null?(o={lastEffect:null,stores:null},Kt.updateQueue=o,o.stores=[r]):(l=o.stores,l===null?o.stores=[r]:l.push(r))}function kv(r,o,l,f){o.value=l,o.getSnapshot=f,Hv(o)&&Vv(r)}function Bv(r,o,l){return l(function(){Hv(o)&&Vv(r)})}function Hv(r){var o=r.getSnapshot;r=r.value;try{var l=o();return!Ur(r,l)}catch{return!0}}function Vv(r){var o=_i(r,1);o!==null&&kr(o,r,1,-1)}function Gv(r){var o=Jr();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:r},o.queue=r,r=r.dispatch=Iw.bind(null,Kt,r),[o.memoizedState,r]}function Ys(r,o,l,f){return r={tag:r,create:o,destroy:l,deps:f,next:null},o=Kt.updateQueue,o===null?(o={lastEffect:null,stores:null},Kt.updateQueue=o,o.lastEffect=r.next=r):(l=o.lastEffect,l===null?o.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,o.lastEffect=r)),r}function Wv(){return yr().memoizedState}function Eu(r,o,l,f){var m=Jr();Kt.flags|=r,m.memoizedState=Ys(1|o,l,void 0,f===void 0?null:f)}function wu(r,o,l,f){var m=yr();f=f===void 0?null:f;var y=void 0;if(fn!==null){var A=fn.memoizedState;if(y=A.destroy,f!==null&&ld(f,A.deps)){m.memoizedState=Ys(o,l,y,f);return}}Kt.flags|=r,m.memoizedState=Ys(1|o,l,y,f)}function $v(r,o){return Eu(8390656,8,r,o)}function hd(r,o){return wu(2048,8,r,o)}function Xv(r,o){return wu(4,2,r,o)}function jv(r,o){return wu(4,4,r,o)}function Yv(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function qv(r,o,l){return l=l!=null?l.concat([r]):null,wu(4,4,Yv.bind(null,o,r),l)}function pd(){}function Kv(r,o){var l=yr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&ld(o,f[1])?f[0]:(l.memoizedState=[r,o],r)}function Zv(r,o){var l=yr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&ld(o,f[1])?f[0]:(r=r(),l.memoizedState=[r,o],r)}function Jv(r,o,l){return(No&21)===0?(r.baseState&&(r.baseState=!1,Jn=!0),r.memoizedState=l):(Ur(l,o)||(l=$l(),Kt.lanes|=l,Fo|=l,r.baseState=!0),o)}function Pw(r,o){var l=It;It=l!==0&&4>l?l:4,r(!0);var f=sd.transition;sd.transition={};try{r(!1),o()}finally{It=l,sd.transition=f}}function Qv(){return yr().memoizedState}function Dw(r,o,l){var f=Ki(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},eg(r))tg(o,l);else if(l=Pv(r,o,l,f),l!==null){var m=Wn();kr(l,r,f,m),ng(l,o,f)}}function Iw(r,o,l){var f=Ki(r),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(eg(r))tg(o,m);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var A=o.lastRenderedState,U=y(A,l);if(m.hasEagerState=!0,m.eagerState=U,Ur(U,A)){var k=o.interleaved;k===null?(m.next=m,td(o)):(m.next=k.next,k.next=m),o.interleaved=m;return}}catch{}finally{}l=Pv(r,o,m,f),l!==null&&(m=Wn(),kr(l,r,f,m),ng(l,o,f))}}function eg(r){var o=r.alternate;return r===Kt||o!==null&&o===Kt}function tg(r,o){$s=Su=!0;var l=r.pending;l===null?o.next=o:(o.next=l.next,l.next=o),r.pending=o}function ng(r,o,l){if((l&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,l|=f,o.lanes=l,vf(r,l)}}var Mu={readContext:_r,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},Uw={readContext:_r,useCallback:function(r,o){return Jr().memoizedState=[r,o===void 0?null:o],r},useContext:_r,useEffect:$v,useImperativeHandle:function(r,o,l){return l=l!=null?l.concat([r]):null,Eu(4194308,4,Yv.bind(null,o,r),l)},useLayoutEffect:function(r,o){return Eu(4194308,4,r,o)},useInsertionEffect:function(r,o){return Eu(4,2,r,o)},useMemo:function(r,o){var l=Jr();return o=o===void 0?null:o,r=r(),l.memoizedState=[r,o],r},useReducer:function(r,o,l){var f=Jr();return o=l!==void 0?l(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=Dw.bind(null,Kt,r),[f.memoizedState,r]},useRef:function(r){var o=Jr();return r={current:r},o.memoizedState=r},useState:Gv,useDebugValue:pd,useDeferredValue:function(r){return Jr().memoizedState=r},useTransition:function(){var r=Gv(!1),o=r[0];return r=Pw.bind(null,r[1]),Jr().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,l){var f=Kt,m=Jr();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),_n===null)throw Error(t(349));(No&30)!==0||zv(f,o,l)}m.memoizedState=l;var y={value:l,getSnapshot:o};return m.queue=y,$v(Bv.bind(null,f,y,r),[r]),f.flags|=2048,Ys(9,kv.bind(null,f,y,l,o),void 0,null),l},useId:function(){var r=Jr(),o=_n.identifierPrefix;if(Yt){var l=gi,f=vi;l=(f&~(1<<32-Vn(f)-1)).toString(32)+l,o=":"+o+"R"+l,l=Xs++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=Lw++,o=":"+o+"r"+l.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},Nw={readContext:_r,useCallback:Kv,useContext:_r,useEffect:hd,useImperativeHandle:qv,useInsertionEffect:Xv,useLayoutEffect:jv,useMemo:Zv,useReducer:fd,useRef:Wv,useState:function(){return fd(js)},useDebugValue:pd,useDeferredValue:function(r){var o=yr();return Jv(o,fn.memoizedState,r)},useTransition:function(){var r=fd(js)[0],o=yr().memoizedState;return[r,o]},useMutableSource:Fv,useSyncExternalStore:Ov,useId:Qv,unstable_isNewReconciler:!1},Fw={readContext:_r,useCallback:Kv,useContext:_r,useEffect:hd,useImperativeHandle:qv,useInsertionEffect:Xv,useLayoutEffect:jv,useMemo:Zv,useReducer:dd,useRef:Wv,useState:function(){return dd(js)},useDebugValue:pd,useDeferredValue:function(r){var o=yr();return fn===null?o.memoizedState=r:Jv(o,fn.memoizedState,r)},useTransition:function(){var r=dd(js)[0],o=yr().memoizedState;return[r,o]},useMutableSource:Fv,useSyncExternalStore:Ov,useId:Qv,unstable_isNewReconciler:!1};function Fr(r,o){if(r&&r.defaultProps){o=$({},o),r=r.defaultProps;for(var l in r)o[l]===void 0&&(o[l]=r[l]);return o}return o}function md(r,o,l,f){o=r.memoizedState,l=l(f,o),l=l==null?o:$({},o,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Au={isMounted:function(r){return(r=r._reactInternals)?di(r)===r:!1},enqueueSetState:function(r,o,l){r=r._reactInternals;var f=Wn(),m=Ki(r),y=yi(f,m);y.payload=o,l!=null&&(y.callback=l),o=Xi(r,y,m),o!==null&&(kr(o,r,m,f),gu(o,r,m))},enqueueReplaceState:function(r,o,l){r=r._reactInternals;var f=Wn(),m=Ki(r),y=yi(f,m);y.tag=1,y.payload=o,l!=null&&(y.callback=l),o=Xi(r,y,m),o!==null&&(kr(o,r,m,f),gu(o,r,m))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var l=Wn(),f=Ki(r),m=yi(l,f);m.tag=2,o!=null&&(m.callback=o),o=Xi(r,m,f),o!==null&&(kr(o,r,f,l),gu(o,r,f))}};function rg(r,o,l,f,m,y,A){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,y,A):o.prototype&&o.prototype.isPureReactComponent?!Us(l,f)||!Us(m,y):!0}function ig(r,o,l){var f=!1,m=Gi,y=o.contextType;return typeof y=="object"&&y!==null?y=_r(y):(m=Zn(o)?Lo:Pn.current,f=o.contextTypes,y=(f=f!=null)?xa(r,m):Gi),o=new o(l,y),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Au,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=m,r.__reactInternalMemoizedMaskedChildContext=y),o}function og(r,o,l,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,f),o.state!==r&&Au.enqueueReplaceState(o,o.state,null)}function vd(r,o,l,f){var m=r.stateNode;m.props=l,m.state=r.memoizedState,m.refs={},nd(r);var y=o.contextType;typeof y=="object"&&y!==null?m.context=_r(y):(y=Zn(o)?Lo:Pn.current,m.context=xa(r,y)),m.state=r.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(md(r,o,y,l),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&Au.enqueueReplaceState(m,m.state,null),_u(r,l,m,f),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308)}function Ca(r,o){try{var l="",f=o;do l+=ee(f),f=f.return;while(f);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:o,stack:m,digest:null}}function gd(r,o,l){return{value:r,source:null,stack:l??null,digest:o??null}}function _d(r,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var Ow=typeof WeakMap=="function"?WeakMap:Map;function ag(r,o,l){l=yi(-1,l),l.tag=3,l.payload={element:null};var f=o.value;return l.callback=function(){Du||(Du=!0,Id=f),_d(r,o)},l}function sg(r,o,l){l=yi(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=o.value;l.payload=function(){return f(m)},l.callback=function(){_d(r,o)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){_d(r,o),typeof f!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),l}function lg(r,o,l){var f=r.pingCache;if(f===null){f=r.pingCache=new Ow;var m=new Set;f.set(o,m)}else m=f.get(o),m===void 0&&(m=new Set,f.set(o,m));m.has(l)||(m.add(l),r=Zw.bind(null,r,o,l),o.then(r,r))}function ug(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function cg(r,o,l,f,m){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=yi(-1,1),o.tag=2,Xi(l,o,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=m,r)}var zw=R.ReactCurrentOwner,Jn=!1;function Gn(r,o,l,f){o.child=r===null?Lv(o,null,l,f):Ma(o,r.child,l,f)}function fg(r,o,l,f,m){l=l.render;var y=o.ref;return Ta(o,m),f=ud(r,o,l,f,y,m),l=cd(),r!==null&&!Jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~m,xi(r,o,m)):(Yt&&l&&Xf(o),o.flags|=1,Gn(r,o,f,m),o.child)}function dg(r,o,l,f,m){if(r===null){var y=l.type;return typeof y=="function"&&!Bd(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=y,hg(r,o,y,f,m)):(r=zu(l.type,null,f,o,o.mode,m),r.ref=o.ref,r.return=o,o.child=r)}if(y=r.child,(r.lanes&m)===0){var A=y.memoizedProps;if(l=l.compare,l=l!==null?l:Us,l(A,f)&&r.ref===o.ref)return xi(r,o,m)}return o.flags|=1,r=Ji(y,f),r.ref=o.ref,r.return=o,o.child=r}function hg(r,o,l,f,m){if(r!==null){var y=r.memoizedProps;if(Us(y,f)&&r.ref===o.ref)if(Jn=!1,o.pendingProps=f=y,(r.lanes&m)!==0)(r.flags&131072)!==0&&(Jn=!0);else return o.lanes=r.lanes,xi(r,o,m)}return yd(r,o,l,f,m)}function pg(r,o,l){var f=o.pendingProps,m=f.children,y=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(La,cr),cr|=l;else{if((l&1073741824)===0)return r=y!==null?y.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Ht(La,cr),cr|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,Ht(La,cr),cr|=f}else y!==null?(f=y.baseLanes|l,o.memoizedState=null):f=l,Ht(La,cr),cr|=f;return Gn(r,o,m,l),o.child}function mg(r,o){var l=o.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function yd(r,o,l,f,m){var y=Zn(l)?Lo:Pn.current;return y=xa(o,y),Ta(o,m),l=ud(r,o,l,f,y,m),f=cd(),r!==null&&!Jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~m,xi(r,o,m)):(Yt&&f&&Xf(o),o.flags|=1,Gn(r,o,l,m),o.child)}function vg(r,o,l,f,m){if(Zn(l)){var y=!0;uu(o)}else y=!1;if(Ta(o,m),o.stateNode===null)bu(r,o),ig(o,l,f),vd(o,l,f,m),f=!0;else if(r===null){var A=o.stateNode,U=o.memoizedProps;A.props=U;var k=A.context,oe=l.contextType;typeof oe=="object"&&oe!==null?oe=_r(oe):(oe=Zn(l)?Lo:Pn.current,oe=xa(o,oe));var Ee=l.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==f||k!==oe)&&og(o,A,f,oe),$i=!1;var Se=o.memoizedState;A.state=Se,_u(o,f,A,m),k=o.memoizedState,U!==f||Se!==k||Kn.current||$i?(typeof Ee=="function"&&(md(o,l,Ee,f),k=o.memoizedState),(U=$i||rg(o,l,U,f,Se,k,oe))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=k),A.props=f,A.state=k,A.context=oe,f=U):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{A=o.stateNode,Dv(r,o),U=o.memoizedProps,oe=o.type===o.elementType?U:Fr(o.type,U),A.props=oe,Te=o.pendingProps,Se=A.context,k=l.contextType,typeof k=="object"&&k!==null?k=_r(k):(k=Zn(l)?Lo:Pn.current,k=xa(o,k));var We=l.getDerivedStateFromProps;(Ee=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==Te||Se!==k)&&og(o,A,f,k),$i=!1,Se=o.memoizedState,A.state=Se,_u(o,f,A,m);var Ye=o.memoizedState;U!==Te||Se!==Ye||Kn.current||$i?(typeof We=="function"&&(md(o,l,We,f),Ye=o.memoizedState),(oe=$i||rg(o,l,oe,f,Se,Ye,k)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,Ye,k),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,Ye,k)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=Ye),A.props=f,A.state=Ye,A.context=k,f=oe):(typeof A.componentDidUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),f=!1)}return xd(r,o,l,f,y,m)}function xd(r,o,l,f,m,y){mg(r,o);var A=(o.flags&128)!==0;if(!f&&!A)return m&&Sv(o,l,!1),xi(r,o,y);f=o.stateNode,zw.current=o;var U=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&A?(o.child=Ma(o,r.child,null,y),o.child=Ma(o,null,U,y)):Gn(r,o,U,y),o.memoizedState=f.state,m&&Sv(o,l,!0),o.child}function gg(r){var o=r.stateNode;o.pendingContext?yv(r,o.pendingContext,o.pendingContext!==o.context):o.context&&yv(r,o.context,!1),rd(r,o.containerInfo)}function _g(r,o,l,f,m){return wa(),Kf(m),o.flags|=256,Gn(r,o,l,f),o.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Ed(r){return{baseLanes:r,cachePool:null,transitions:null}}function yg(r,o,l){var f=o.pendingProps,m=qt.current,y=!1,A=(o.flags&128)!==0,U;if((U=A)||(U=r!==null&&r.memoizedState===null?!1:(m&2)!==0),U?(y=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(m|=1),Ht(qt,m&1),r===null)return qf(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=f.children,r=f.fallback,y?(f=o.mode,y=o.child,A={mode:"hidden",children:A},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=A):y=ku(A,f,0,null),r=Bo(r,f,l,null),y.return=o,r.return=o,y.sibling=r,o.child=y,o.child.memoizedState=Ed(l),o.memoizedState=Sd,r):wd(o,A));if(m=r.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return kw(r,o,A,f,U,m,l);if(y){y=f.fallback,A=o.mode,m=r.child,U=m.sibling;var k={mode:"hidden",children:f.children};return(A&1)===0&&o.child!==m?(f=o.child,f.childLanes=0,f.pendingProps=k,o.deletions=null):(f=Ji(m,k),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?y=Ji(U,y):(y=Bo(y,A,l,null),y.flags|=2),y.return=o,f.return=o,f.sibling=y,o.child=f,f=y,y=o.child,A=r.child.memoizedState,A=A===null?Ed(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},y.memoizedState=A,y.childLanes=r.childLanes&~l,o.memoizedState=Sd,f}return y=r.child,r=y.sibling,f=Ji(y,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=l),f.return=o,f.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=f,o.memoizedState=null,f}function wd(r,o){return o=ku({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Tu(r,o,l,f){return f!==null&&Kf(f),Ma(o,r.child,null,l),r=wd(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function kw(r,o,l,f,m,y,A){if(l)return o.flags&256?(o.flags&=-257,f=gd(Error(t(422))),Tu(r,o,A,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(y=f.fallback,m=o.mode,f=ku({mode:"visible",children:f.children},m,0,null),y=Bo(y,m,A,null),y.flags|=2,f.return=o,y.return=o,f.sibling=y,o.child=f,(o.mode&1)!==0&&Ma(o,r.child,null,A),o.child.memoizedState=Ed(A),o.memoizedState=Sd,y);if((o.mode&1)===0)return Tu(r,o,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,y=Error(t(419)),f=gd(y,f,void 0),Tu(r,o,A,f)}if(U=(A&r.childLanes)!==0,Jn||U){if(f=_n,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|A))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,_i(r,m),kr(f,r,m,-1))}return kd(),f=gd(Error(t(421))),Tu(r,o,A,f)}return m.data==="$?"?(o.flags|=128,o.child=r.child,o=Jw.bind(null,r),m._reactRetry=o,null):(r=y.treeContext,ur=Hi(m.nextSibling),lr=o,Yt=!0,Nr=null,r!==null&&(vr[gr++]=vi,vr[gr++]=gi,vr[gr++]=Po,vi=r.id,gi=r.overflow,Po=o),o=wd(o,f.children),o.flags|=4096,o)}function xg(r,o,l){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),ed(r.return,o,l)}function Md(r,o,l,f,m){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=m)}function Sg(r,o,l){var f=o.pendingProps,m=f.revealOrder,y=f.tail;if(Gn(r,o,f.children,l),f=qt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&xg(r,l,o);else if(r.tag===19)xg(r,l,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Ht(qt,f),(o.mode&1)===0)o.memoizedState=null;else switch(m){case"forwards":for(l=o.child,m=null;l!==null;)r=l.alternate,r!==null&&yu(r)===null&&(m=l),l=l.sibling;l=m,l===null?(m=o.child,o.child=null):(m=l.sibling,l.sibling=null),Md(o,!1,m,l,y);break;case"backwards":for(l=null,m=o.child,o.child=null;m!==null;){if(r=m.alternate,r!==null&&yu(r)===null){o.child=m;break}r=m.sibling,m.sibling=l,l=m,m=r}Md(o,!0,l,null,y);break;case"together":Md(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function bu(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function xi(r,o,l){if(r!==null&&(o.dependencies=r.dependencies),Fo|=o.lanes,(l&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,l=Ji(r,r.pendingProps),o.child=l,l.return=o;r.sibling!==null;)r=r.sibling,l=l.sibling=Ji(r,r.pendingProps),l.return=o;l.sibling=null}return o.child}function Bw(r,o,l){switch(o.tag){case 3:gg(o),wa();break;case 5:Nv(o);break;case 1:Zn(o.type)&&uu(o);break;case 4:rd(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,m=o.memoizedProps.value;Ht(mu,f._currentValue),f._currentValue=m;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(Ht(qt,qt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?yg(r,o,l):(Ht(qt,qt.current&1),r=xi(r,o,l),r!==null?r.sibling:null);Ht(qt,qt.current&1);break;case 19:if(f=(l&o.childLanes)!==0,(r.flags&128)!==0){if(f)return Sg(r,o,l);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ht(qt,qt.current),f)break;return null;case 22:case 23:return o.lanes=0,pg(r,o,l)}return xi(r,o,l)}var Eg,Ad,wg,Mg;Eg=function(r,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ad=function(){},wg=function(r,o,l,f){var m=r.memoizedProps;if(m!==f){r=o.stateNode,Uo(Zr.current);var y=null;switch(l){case"input":m=Be(r,m),f=Be(r,f),y=[];break;case"select":m=$({},m,{value:void 0}),f=$({},f,{value:void 0}),y=[];break;case"textarea":m=Ze(r,m),f=Ze(r,f),y=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=au)}ft(l,f);var A;l=null;for(oe in m)if(!f.hasOwnProperty(oe)&&m.hasOwnProperty(oe)&&m[oe]!=null)if(oe==="style"){var U=m[oe];for(A in U)U.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?y||(y=[]):(y=y||[]).push(oe,null));for(oe in f){var k=f[oe];if(U=m?.[oe],f.hasOwnProperty(oe)&&k!==U&&(k!=null||U!=null))if(oe==="style")if(U){for(A in U)!U.hasOwnProperty(A)||k&&k.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in k)k.hasOwnProperty(A)&&U[A]!==k[A]&&(l||(l={}),l[A]=k[A])}else l||(y||(y=[]),y.push(oe,l)),l=k;else oe==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(y=y||[]).push(oe,k)):oe==="children"?typeof k!="string"&&typeof k!="number"||(y=y||[]).push(oe,""+k):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(k!=null&&oe==="onScroll"&&Gt("scroll",r),y||U===k||(y=[])):(y=y||[]).push(oe,k))}l&&(y=y||[]).push("style",l);var oe=y;(o.updateQueue=oe)&&(o.flags|=4)}},Mg=function(r,o,l,f){l!==f&&(o.flags|=4)};function qs(r,o){if(!Yt)switch(r.tailMode){case"hidden":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function In(r){var o=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(o)for(var m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=r,m=m.sibling;else for(m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=r,m=m.sibling;return r.subtreeFlags|=f,r.childLanes=l,o}function Hw(r,o,l){var f=o.pendingProps;switch(jf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(o),null;case 1:return Zn(o.type)&&lu(),In(o),null;case 3:return f=o.stateNode,ba(),Wt(Kn),Wt(Pn),ad(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(hu(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Nr!==null&&(Fd(Nr),Nr=null))),Ad(r,o),In(o),null;case 5:id(o);var m=Uo(Ws.current);if(l=o.type,r!==null&&o.stateNode!=null)wg(r,o,l,f,m),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return In(o),null}if(r=Uo(Zr.current),hu(o)){f=o.stateNode,l=o.type;var y=o.memoizedProps;switch(f[Kr]=o,f[ks]=y,r=(o.mode&1)!==0,l){case"dialog":Gt("cancel",f),Gt("close",f);break;case"iframe":case"object":case"embed":Gt("load",f);break;case"video":case"audio":for(m=0;m<Fs.length;m++)Gt(Fs[m],f);break;case"source":Gt("error",f);break;case"img":case"image":case"link":Gt("error",f),Gt("load",f);break;case"details":Gt("toggle",f);break;case"input":le(f,y),Gt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},Gt("invalid",f);break;case"textarea":D(f,y),Gt("invalid",f)}ft(l,y),m=null;for(var A in y)if(y.hasOwnProperty(A)){var U=y[A];A==="children"?typeof U=="string"?f.textContent!==U&&(y.suppressHydrationWarning!==!0&&ou(f.textContent,U,r),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(y.suppressHydrationWarning!==!0&&ou(f.textContent,U,r),m=["children",""+U]):a.hasOwnProperty(A)&&U!=null&&A==="onScroll"&&Gt("scroll",f)}switch(l){case"input":Oe(f),ge(f,y,!0);break;case"textarea":Oe(f),Y(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=au)}f=m,o.updateQueue=f,f!==null&&(o.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Ae(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=A.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=A.createElement(l,{is:f.is}):(r=A.createElement(l),l==="select"&&(A=r,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):r=A.createElementNS(r,l),r[Kr]=o,r[ks]=f,Eg(r,o,!1,!1),o.stateNode=r;e:{switch(A=st(l,f),l){case"dialog":Gt("cancel",r),Gt("close",r),m=f;break;case"iframe":case"object":case"embed":Gt("load",r),m=f;break;case"video":case"audio":for(m=0;m<Fs.length;m++)Gt(Fs[m],r);m=f;break;case"source":Gt("error",r),m=f;break;case"img":case"image":case"link":Gt("error",r),Gt("load",r),m=f;break;case"details":Gt("toggle",r),m=f;break;case"input":le(r,f),m=Be(r,f),Gt("invalid",r);break;case"option":m=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},m=$({},f,{value:void 0}),Gt("invalid",r);break;case"textarea":D(r,f),m=Ze(r,f),Gt("invalid",r);break;default:m=f}ft(l,m),U=m;for(y in U)if(U.hasOwnProperty(y)){var k=U[y];y==="style"?Pe(r,k):y==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(r,k)):y==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&De(r,k):typeof k=="number"&&De(r,""+k):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(a.hasOwnProperty(y)?k!=null&&y==="onScroll"&&Gt("scroll",r):k!=null&&M(r,y,k,A))}switch(l){case"input":Oe(r),ge(r,f,!1);break;case"textarea":Oe(r),Y(r);break;case"option":f.value!=null&&r.setAttribute("value",""+ve(f.value));break;case"select":r.multiple=!!f.multiple,y=f.value,y!=null?Ie(r,!!f.multiple,y,!1):f.defaultValue!=null&&Ie(r,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(r.onclick=au)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return In(o),null;case 6:if(r&&o.stateNode!=null)Mg(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(l=Uo(Ws.current),Uo(Zr.current),hu(o)){if(f=o.stateNode,l=o.memoizedProps,f[Kr]=o,(y=f.nodeValue!==l)&&(r=lr,r!==null))switch(r.tag){case 3:ou(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ou(f.nodeValue,l,(r.mode&1)!==0)}y&&(o.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Kr]=o,o.stateNode=f}return In(o),null;case 13:if(Wt(qt),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Yt&&ur!==null&&(o.mode&1)!==0&&(o.flags&128)===0)bv(),wa(),o.flags|=98560,y=!1;else if(y=hu(o),f!==null&&f.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Kr]=o}else wa(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;In(o),y=!1}else Nr!==null&&(Fd(Nr),Nr=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(qt.current&1)!==0?dn===0&&(dn=3):kd())),o.updateQueue!==null&&(o.flags|=4),In(o),null);case 4:return ba(),Ad(r,o),r===null&&Os(o.stateNode.containerInfo),In(o),null;case 10:return Qf(o.type._context),In(o),null;case 17:return Zn(o.type)&&lu(),In(o),null;case 19:if(Wt(qt),y=o.memoizedState,y===null)return In(o),null;if(f=(o.flags&128)!==0,A=y.rendering,A===null)if(f)qs(y,!1);else{if(dn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(A=yu(r),A!==null){for(o.flags|=128,qs(y,!1),f=A.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=l,l=o.child;l!==null;)y=l,r=f,y.flags&=14680066,A=y.alternate,A===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=A.childLanes,y.lanes=A.lanes,y.child=A.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=A.memoizedProps,y.memoizedState=A.memoizedState,y.updateQueue=A.updateQueue,y.type=A.type,r=A.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Ht(qt,qt.current&1|2),o.child}r=r.sibling}y.tail!==null&&Xe()>Pa&&(o.flags|=128,f=!0,qs(y,!1),o.lanes=4194304)}else{if(!f)if(r=yu(A),r!==null){if(o.flags|=128,f=!0,l=r.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),qs(y,!0),y.tail===null&&y.tailMode==="hidden"&&!A.alternate&&!Yt)return In(o),null}else 2*Xe()-y.renderingStartTime>Pa&&l!==1073741824&&(o.flags|=128,f=!0,qs(y,!1),o.lanes=4194304);y.isBackwards?(A.sibling=o.child,o.child=A):(l=y.last,l!==null?l.sibling=A:o.child=A,y.last=A)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=Xe(),o.sibling=null,l=qt.current,Ht(qt,f?l&1|2:l&1),o):(In(o),null);case 22:case 23:return zd(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(cr&1073741824)!==0&&(In(o),o.subtreeFlags&6&&(o.flags|=8192)):In(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function Vw(r,o){switch(jf(o),o.tag){case 1:return Zn(o.type)&&lu(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return ba(),Wt(Kn),Wt(Pn),ad(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return id(o),null;case 13:if(Wt(qt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));wa()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return Wt(qt),null;case 4:return ba(),null;case 10:return Qf(o.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var Cu=!1,Un=!1,Gw=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ra(r,o){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){en(r,o,f)}else l.current=null}function Td(r,o,l){try{l()}catch(f){en(r,o,f)}}var Ag=!1;function Ww(r,o){if(zf=Yl,r=rv(),Lf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var A=0,U=-1,k=-1,oe=0,Ee=0,Te=r,Se=null;t:for(;;){for(var We;Te!==l||m!==0&&Te.nodeType!==3||(U=A+m),Te!==y||f!==0&&Te.nodeType!==3||(k=A+f),Te.nodeType===3&&(A+=Te.nodeValue.length),(We=Te.firstChild)!==null;)Se=Te,Te=We;for(;;){if(Te===r)break t;if(Se===l&&++oe===m&&(U=A),Se===y&&++Ee===f&&(k=A),(We=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=We}l=U===-1||k===-1?null:{start:U,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(kf={focusedElem:r,selectionRange:l},Yl=!1,je=o;je!==null;)if(o=je,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,je=r;else for(;je!==null;){o=je;try{var Ye=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,rn=Ye.memoizedState,K=o.stateNode,G=K.getSnapshotBeforeUpdate(o.elementType===o.type?Ke:Fr(o.type,Ke),rn);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){en(o,o.return,Le)}if(r=o.sibling,r!==null){r.return=o.return,je=r;break}je=o.return}return Ye=Ag,Ag=!1,Ye}function Ks(r,o,l){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&r)===r){var y=m.destroy;m.destroy=void 0,y!==void 0&&Td(o,l,y)}m=m.next}while(m!==f)}}function Ru(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==o)}}function bd(r){var o=r.ref;if(o!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof o=="function"?o(r):o.current=r}}function Tg(r){var o=r.alternate;o!==null&&(r.alternate=null,Tg(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[Kr],delete o[ks],delete o[Gf],delete o[Tw],delete o[bw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function bg(r){return r.tag===5||r.tag===3||r.tag===4}function Cg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||bg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Cd(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(r,o):l.insertBefore(r,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(r,l)):(o=l,o.appendChild(r)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=au));else if(f!==4&&(r=r.child,r!==null))for(Cd(r,o,l),r=r.sibling;r!==null;)Cd(r,o,l),r=r.sibling}function Rd(r,o,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?l.insertBefore(r,o):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(Rd(r,o,l),r=r.sibling;r!==null;)Rd(r,o,l),r=r.sibling}var Sn=null,Or=!1;function ji(r,o,l){for(l=l.child;l!==null;)Rg(r,o,l),l=l.sibling}function Rg(r,o,l){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Yn,l)}catch{}switch(l.tag){case 5:Un||Ra(l,o);case 6:var f=Sn,m=Or;Sn=null,ji(r,o,l),Sn=f,Or=m,Sn!==null&&(Or?(r=Sn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Sn.removeChild(l.stateNode));break;case 18:Sn!==null&&(Or?(r=Sn,l=l.stateNode,r.nodeType===8?Vf(r.parentNode,l):r.nodeType===1&&Vf(r,l),Cs(r)):Vf(Sn,l.stateNode));break;case 4:f=Sn,m=Or,Sn=l.stateNode.containerInfo,Or=!0,ji(r,o,l),Sn=f,Or=m;break;case 0:case 11:case 14:case 15:if(!Un&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var y=m,A=y.destroy;y=y.tag,A!==void 0&&((y&2)!==0||(y&4)!==0)&&Td(l,o,A),m=m.next}while(m!==f)}ji(r,o,l);break;case 1:if(!Un&&(Ra(l,o),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(U){en(l,o,U)}ji(r,o,l);break;case 21:ji(r,o,l);break;case 22:l.mode&1?(Un=(f=Un)||l.memoizedState!==null,ji(r,o,l),Un=f):ji(r,o,l);break;default:ji(r,o,l)}}function Lg(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new Gw),o.forEach(function(f){var m=Qw.bind(null,r,f);l.has(f)||(l.add(f),f.then(m,m))})}}function zr(r,o){var l=o.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var y=r,A=o,U=A;e:for(;U!==null;){switch(U.tag){case 5:Sn=U.stateNode,Or=!1;break e;case 3:Sn=U.stateNode.containerInfo,Or=!0;break e;case 4:Sn=U.stateNode.containerInfo,Or=!0;break e}U=U.return}if(Sn===null)throw Error(t(160));Rg(y,A,m),Sn=null,Or=!1;var k=m.alternate;k!==null&&(k.return=null),m.return=null}catch(oe){en(m,o,oe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Pg(o,r),o=o.sibling}function Pg(r,o){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zr(o,r),Qr(r),f&4){try{Ks(3,r,r.return),Ru(3,r)}catch(Ke){en(r,r.return,Ke)}try{Ks(5,r,r.return)}catch(Ke){en(r,r.return,Ke)}}break;case 1:zr(o,r),Qr(r),f&512&&l!==null&&Ra(l,l.return);break;case 5:if(zr(o,r),Qr(r),f&512&&l!==null&&Ra(l,l.return),r.flags&32){var m=r.stateNode;try{De(m,"")}catch(Ke){en(r,r.return,Ke)}}if(f&4&&(m=r.stateNode,m!=null)){var y=r.memoizedProps,A=l!==null?l.memoizedProps:y,U=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{U==="input"&&y.type==="radio"&&y.name!=null&&ue(m,y),st(U,A);var oe=st(U,y);for(A=0;A<k.length;A+=2){var Ee=k[A],Te=k[A+1];Ee==="style"?Pe(m,Te):Ee==="dangerouslySetInnerHTML"?qe(m,Te):Ee==="children"?De(m,Te):M(m,Ee,Te,oe)}switch(U){case"input":xe(m,y);break;case"textarea":T(m,y);break;case"select":var Se=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var We=y.value;We!=null?Ie(m,!!y.multiple,We,!1):Se!==!!y.multiple&&(y.defaultValue!=null?Ie(m,!!y.multiple,y.defaultValue,!0):Ie(m,!!y.multiple,y.multiple?[]:"",!1))}m[ks]=y}catch(Ke){en(r,r.return,Ke)}}break;case 6:if(zr(o,r),Qr(r),f&4){if(r.stateNode===null)throw Error(t(162));m=r.stateNode,y=r.memoizedProps;try{m.nodeValue=y}catch(Ke){en(r,r.return,Ke)}}break;case 3:if(zr(o,r),Qr(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Cs(o.containerInfo)}catch(Ke){en(r,r.return,Ke)}break;case 4:zr(o,r),Qr(r);break;case 13:zr(o,r),Qr(r),m=r.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(Dd=Xe())),f&4&&Lg(r);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,r.mode&1?(Un=(oe=Un)||Ee,zr(o,r),Un=oe):zr(o,r),Qr(r),f&8192){if(oe=r.memoizedState!==null,(r.stateNode.isHidden=oe)&&!Ee&&(r.mode&1)!==0)for(je=r,Ee=r.child;Ee!==null;){for(Te=je=Ee;je!==null;){switch(Se=je,We=Se.child,Se.tag){case 0:case 11:case 14:case 15:Ks(4,Se,Se.return);break;case 1:Ra(Se,Se.return);var Ye=Se.stateNode;if(typeof Ye.componentWillUnmount=="function"){f=Se,l=Se.return;try{o=f,Ye.props=o.memoizedProps,Ye.state=o.memoizedState,Ye.componentWillUnmount()}catch(Ke){en(f,l,Ke)}}break;case 5:Ra(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Ug(Te);continue}}We!==null?(We.return=Se,je=We):Ug(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=r;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{m=Te.stateNode,oe?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(U=Te.stateNode,k=Te.memoizedProps.style,A=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=wt("display",A))}catch(Ke){en(r,r.return,Ke)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=oe?"":Te.memoizedProps}catch(Ke){en(r,r.return,Ke)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===r)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===r)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===r)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:zr(o,r),Qr(r),f&4&&Lg(r);break;case 21:break;default:zr(o,r),Qr(r)}}function Qr(r){var o=r.flags;if(o&2){try{e:{for(var l=r.return;l!==null;){if(bg(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(De(m,""),f.flags&=-33);var y=Cg(r);Rd(r,y,m);break;case 3:case 4:var A=f.stateNode.containerInfo,U=Cg(r);Cd(r,U,A);break;default:throw Error(t(161))}}catch(k){en(r,r.return,k)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function $w(r,o,l){je=r,Dg(r)}function Dg(r,o,l){for(var f=(r.mode&1)!==0;je!==null;){var m=je,y=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||Cu;if(!A){var U=m.alternate,k=U!==null&&U.memoizedState!==null||Un;U=Cu;var oe=Un;if(Cu=A,(Un=k)&&!oe)for(je=m;je!==null;)A=je,k=A.child,A.tag===22&&A.memoizedState!==null?Ng(m):k!==null?(k.return=A,je=k):Ng(m);for(;y!==null;)je=y,Dg(y),y=y.sibling;je=m,Cu=U,Un=oe}Ig(r)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,je=y):Ig(r)}}function Ig(r){for(;je!==null;){var o=je;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Un||Ru(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!Un)if(l===null)f.componentDidMount();else{var m=o.elementType===o.type?l.memoizedProps:Fr(o.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&Uv(o,y,f);break;case 3:var A=o.updateQueue;if(A!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Uv(o,A,l)}break;case 5:var U=o.stateNode;if(l===null&&o.flags&4){l=U;var k=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var oe=o.alternate;if(oe!==null){var Ee=oe.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Cs(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||o.flags&512&&bd(o)}catch(Se){en(o,o.return,Se)}}if(o===r){je=null;break}if(l=o.sibling,l!==null){l.return=o.return,je=l;break}je=o.return}}function Ug(r){for(;je!==null;){var o=je;if(o===r){je=null;break}var l=o.sibling;if(l!==null){l.return=o.return,je=l;break}je=o.return}}function Ng(r){for(;je!==null;){var o=je;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Ru(4,o)}catch(k){en(o,l,k)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var m=o.return;try{f.componentDidMount()}catch(k){en(o,m,k)}}var y=o.return;try{bd(o)}catch(k){en(o,y,k)}break;case 5:var A=o.return;try{bd(o)}catch(k){en(o,A,k)}}}catch(k){en(o,o.return,k)}if(o===r){je=null;break}var U=o.sibling;if(U!==null){U.return=o.return,je=U;break}je=o.return}}var Xw=Math.ceil,Lu=R.ReactCurrentDispatcher,Ld=R.ReactCurrentOwner,xr=R.ReactCurrentBatchConfig,At=0,_n=null,an=null,En=0,cr=0,La=Vi(0),dn=0,Zs=null,Fo=0,Pu=0,Pd=0,Js=null,Qn=null,Dd=0,Pa=1/0,Si=null,Du=!1,Id=null,Yi=null,Iu=!1,qi=null,Uu=0,Qs=0,Ud=null,Nu=-1,Fu=0;function Wn(){return(At&6)!==0?Xe():Nu!==-1?Nu:Nu=Xe()}function Ki(r){return(r.mode&1)===0?1:(At&2)!==0&&En!==0?En&-En:Rw.transition!==null?(Fu===0&&(Fu=$l()),Fu):(r=It,r!==0||(r=window.event,r=r===void 0?16:Om(r.type)),r)}function kr(r,o,l,f){if(50<Qs)throw Qs=0,Ud=null,Error(t(185));ws(r,l,f),((At&2)===0||r!==_n)&&(r===_n&&((At&2)===0&&(Pu|=l),dn===4&&Zi(r,En)),er(r,f),l===1&&At===0&&(o.mode&1)===0&&(Pa=Xe()+500,cu&&Wi()))}function er(r,o){var l=r.callbackNode;qn(r,o);var f=mr(r,r===_n?En:0);if(f===0)l!==null&&Ge(l),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(l!=null&&Ge(l),o===1)r.tag===0?Cw(Og.bind(null,r)):Ev(Og.bind(null,r)),Mw(function(){(At&6)===0&&Wi()}),l=null;else{switch(Rm(f)){case 1:l=dt;break;case 4:l=pt;break;case 16:l=Bt;break;case 536870912:l=nn;break;default:l=Bt}l=$g(l,Fg.bind(null,r))}r.callbackPriority=o,r.callbackNode=l}}function Fg(r,o){if(Nu=-1,Fu=0,(At&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Da()&&r.callbackNode!==l)return null;var f=mr(r,r===_n?En:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=Ou(r,f);else{o=f;var m=At;At|=2;var y=kg();(_n!==r||En!==o)&&(Si=null,Pa=Xe()+500,zo(r,o));do try{qw();break}catch(U){zg(r,U)}while(!0);Jf(),Lu.current=y,At=m,an!==null?o=0:(_n=null,En=0,o=dn)}if(o!==0){if(o===2&&(m=Co(r),m!==0&&(f=m,o=Nd(r,m))),o===1)throw l=Zs,zo(r,0),Zi(r,f),er(r,Xe()),l;if(o===6)Zi(r,f);else{if(m=r.current.alternate,(f&30)===0&&!jw(m)&&(o=Ou(r,f),o===2&&(y=Co(r),y!==0&&(f=y,o=Nd(r,y))),o===1))throw l=Zs,zo(r,0),Zi(r,f),er(r,Xe()),l;switch(r.finishedWork=m,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:ko(r,Qn,Si);break;case 3:if(Zi(r,f),(f&130023424)===f&&(o=Dd+500-Xe(),10<o)){if(mr(r,0)!==0)break;if(m=r.suspendedLanes,(m&f)!==f){Wn(),r.pingedLanes|=r.suspendedLanes&m;break}r.timeoutHandle=Hf(ko.bind(null,r,Qn,Si),o);break}ko(r,Qn,Si);break;case 4:if(Zi(r,f),(f&4194240)===f)break;for(o=r.eventTimes,m=-1;0<f;){var A=31-Vn(f);y=1<<A,A=o[A],A>m&&(m=A),f&=~y}if(f=m,f=Xe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Xw(f/1960))-f,10<f){r.timeoutHandle=Hf(ko.bind(null,r,Qn,Si),f);break}ko(r,Qn,Si);break;case 5:ko(r,Qn,Si);break;default:throw Error(t(329))}}}return er(r,Xe()),r.callbackNode===l?Fg.bind(null,r):null}function Nd(r,o){var l=Js;return r.current.memoizedState.isDehydrated&&(zo(r,o).flags|=256),r=Ou(r,o),r!==2&&(o=Qn,Qn=l,o!==null&&Fd(o)),r}function Fd(r){Qn===null?Qn=r:Qn.push.apply(Qn,r)}function jw(r){for(var o=r;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],y=m.getSnapshot;m=m.value;try{if(!Ur(y(),m))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Zi(r,o){for(o&=~Pd,o&=~Pu,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var l=31-Vn(o),f=1<<l;r[l]=-1,o&=~f}}function Og(r){if((At&6)!==0)throw Error(t(327));Da();var o=mr(r,0);if((o&1)===0)return er(r,Xe()),null;var l=Ou(r,o);if(r.tag!==0&&l===2){var f=Co(r);f!==0&&(o=f,l=Nd(r,f))}if(l===1)throw l=Zs,zo(r,0),Zi(r,o),er(r,Xe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,ko(r,Qn,Si),er(r,Xe()),null}function Od(r,o){var l=At;At|=1;try{return r(o)}finally{At=l,At===0&&(Pa=Xe()+500,cu&&Wi())}}function Oo(r){qi!==null&&qi.tag===0&&(At&6)===0&&Da();var o=At;At|=1;var l=xr.transition,f=It;try{if(xr.transition=null,It=1,r)return r()}finally{It=f,xr.transition=l,At=o,(At&6)===0&&Wi()}}function zd(){cr=La.current,Wt(La)}function zo(r,o){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,ww(l)),an!==null)for(l=an.return;l!==null;){var f=l;switch(jf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&lu();break;case 3:ba(),Wt(Kn),Wt(Pn),ad();break;case 5:id(f);break;case 4:ba();break;case 13:Wt(qt);break;case 19:Wt(qt);break;case 10:Qf(f.type._context);break;case 22:case 23:zd()}l=l.return}if(_n=r,an=r=Ji(r.current,null),En=cr=o,dn=0,Zs=null,Pd=Pu=Fo=0,Qn=Js=null,Io!==null){for(o=0;o<Io.length;o++)if(l=Io[o],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,y=l.pending;if(y!==null){var A=y.next;y.next=m,f.next=A}l.pending=f}Io=null}return r}function zg(r,o){do{var l=an;try{if(Jf(),xu.current=Mu,Su){for(var f=Kt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Su=!1}if(No=0,gn=fn=Kt=null,$s=!1,Xs=0,Ld.current=null,l===null||l.return===null){dn=1,Zs=o,an=null;break}e:{var y=r,A=l.return,U=l,k=o;if(o=En,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var oe=k,Ee=U,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var We=ug(A);if(We!==null){We.flags&=-257,cg(We,A,U,y,o),We.mode&1&&lg(y,oe,o),o=We,k=oe;var Ye=o.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(k),o.updateQueue=Ke}else Ye.add(k);break e}else{if((o&1)===0){lg(y,oe,o),kd();break e}k=Error(t(426))}}else if(Yt&&U.mode&1){var rn=ug(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),cg(rn,A,U,y,o),Kf(Ca(k,U));break e}}y=k=Ca(k,U),dn!==4&&(dn=2),Js===null?Js=[y]:Js.push(y),y=A;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var K=ag(y,k,o);Iv(y,K);break e;case 1:U=k;var G=y.type,te=y.stateNode;if((y.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Yi===null||!Yi.has(te)))){y.flags|=65536,o&=-o,y.lanes|=o;var Le=sg(y,U,o);Iv(y,Le);break e}}y=y.return}while(y!==null)}Hg(l)}catch(Je){o=Je,an===l&&l!==null&&(an=l=l.return);continue}break}while(!0)}function kg(){var r=Lu.current;return Lu.current=Mu,r===null?Mu:r}function kd(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(Fo&268435455)===0&&(Pu&268435455)===0||Zi(_n,En)}function Ou(r,o){var l=At;At|=2;var f=kg();(_n!==r||En!==o)&&(Si=null,zo(r,o));do try{Yw();break}catch(m){zg(r,m)}while(!0);if(Jf(),At=l,Lu.current=f,an!==null)throw Error(t(261));return _n=null,En=0,dn}function Yw(){for(;an!==null;)Bg(an)}function qw(){for(;an!==null&&!Qe();)Bg(an)}function Bg(r){var o=Wg(r.alternate,r,cr);r.memoizedProps=r.pendingProps,o===null?Hg(r):an=o,Ld.current=null}function Hg(r){var o=r;do{var l=o.alternate;if(r=o.return,(o.flags&32768)===0){if(l=Hw(l,o,cr),l!==null){an=l;return}}else{if(l=Vw(l,o),l!==null){l.flags&=32767,an=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{dn=6,an=null;return}}if(o=o.sibling,o!==null){an=o;return}an=o=r}while(o!==null);dn===0&&(dn=5)}function ko(r,o,l){var f=It,m=xr.transition;try{xr.transition=null,It=1,Kw(r,o,l,f)}finally{xr.transition=m,It=f}return null}function Kw(r,o,l,f){do Da();while(qi!==null);if((At&6)!==0)throw Error(t(327));l=r.finishedWork;var m=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(LE(r,y),r===_n&&(an=_n=null,En=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Iu||(Iu=!0,$g(Bt,function(){return Da(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=xr.transition,xr.transition=null;var A=It;It=1;var U=At;At|=4,Ld.current=null,Ww(r,l),Pg(l,r),vw(kf),Yl=!!zf,kf=zf=null,r.current=l,$w(l),at(),At=U,It=A,xr.transition=y}else r.current=l;if(Iu&&(Iu=!1,qi=r,Uu=m),y=r.pendingLanes,y===0&&(Yi=null),_t(l.stateNode),er(r,Xe()),o!==null)for(f=r.onRecoverableError,l=0;l<o.length;l++)m=o[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Du)throw Du=!1,r=Id,Id=null,r;return(Uu&1)!==0&&r.tag!==0&&Da(),y=r.pendingLanes,(y&1)!==0?r===Ud?Qs++:(Qs=0,Ud=r):Qs=0,Wi(),null}function Da(){if(qi!==null){var r=Rm(Uu),o=xr.transition,l=It;try{if(xr.transition=null,It=16>r?16:r,qi===null)var f=!1;else{if(r=qi,qi=null,Uu=0,(At&6)!==0)throw Error(t(331));var m=At;for(At|=4,je=r.current;je!==null;){var y=je,A=y.child;if((je.flags&16)!==0){var U=y.deletions;if(U!==null){for(var k=0;k<U.length;k++){var oe=U[k];for(je=oe;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:Ks(8,Ee,y)}var Te=Ee.child;if(Te!==null)Te.return=Ee,je=Te;else for(;je!==null;){Ee=je;var Se=Ee.sibling,We=Ee.return;if(Tg(Ee),Ee===oe){je=null;break}if(Se!==null){Se.return=We,je=Se;break}je=We}}}var Ye=y.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var rn=Ke.sibling;Ke.sibling=null,Ke=rn}while(Ke!==null)}}je=y}}if((y.subtreeFlags&2064)!==0&&A!==null)A.return=y,je=A;else e:for(;je!==null;){if(y=je,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Ks(9,y,y.return)}var K=y.sibling;if(K!==null){K.return=y.return,je=K;break e}je=y.return}}var G=r.current;for(je=G;je!==null;){A=je;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,je=te;else e:for(A=G;je!==null;){if(U=je,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ru(9,U)}}catch(Je){en(U,U.return,Je)}if(U===A){je=null;break e}var Le=U.sibling;if(Le!==null){Le.return=U.return,je=Le;break e}je=U.return}}if(At=m,Wi(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Yn,r)}catch{}f=!0}return f}finally{It=l,xr.transition=o}}return!1}function Vg(r,o,l){o=Ca(l,o),o=ag(r,o,1),r=Xi(r,o,1),o=Wn(),r!==null&&(ws(r,1,o),er(r,o))}function en(r,o,l){if(r.tag===3)Vg(r,r,l);else for(;o!==null;){if(o.tag===3){Vg(o,r,l);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Yi===null||!Yi.has(f))){r=Ca(l,r),r=sg(o,r,1),o=Xi(o,r,1),r=Wn(),o!==null&&(ws(o,1,r),er(o,r));break}}o=o.return}}function Zw(r,o,l){var f=r.pingCache;f!==null&&f.delete(o),o=Wn(),r.pingedLanes|=r.suspendedLanes&l,_n===r&&(En&l)===l&&(dn===4||dn===3&&(En&130023424)===En&&500>Xe()-Dd?zo(r,0):Pd|=l),er(r,o)}function Gg(r,o){o===0&&((r.mode&1)===0?o=1:(o=Ui,Ui<<=1,(Ui&130023424)===0&&(Ui=4194304)));var l=Wn();r=_i(r,o),r!==null&&(ws(r,o,l),er(r,l))}function Jw(r){var o=r.memoizedState,l=0;o!==null&&(l=o.retryLane),Gg(r,l)}function Qw(r,o){var l=0;switch(r.tag){case 13:var f=r.stateNode,m=r.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),Gg(r,l)}var Wg;Wg=function(r,o,l){if(r!==null)if(r.memoizedProps!==o.pendingProps||Kn.current)Jn=!0;else{if((r.lanes&l)===0&&(o.flags&128)===0)return Jn=!1,Bw(r,o,l);Jn=(r.flags&131072)!==0}else Jn=!1,Yt&&(o.flags&1048576)!==0&&wv(o,du,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;bu(r,o),r=o.pendingProps;var m=xa(o,Pn.current);Ta(o,l),m=ud(null,o,f,r,m,l);var y=cd();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Zn(f)?(y=!0,uu(o)):y=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,nd(o),m.updater=Au,o.stateNode=m,m._reactInternals=o,vd(o,f,r,l),o=xd(null,o,f,!0,y,l)):(o.tag=0,Yt&&y&&Xf(o),Gn(null,o,m,l),o=o.child),o;case 16:f=o.elementType;e:{switch(bu(r,o),r=o.pendingProps,m=f._init,f=m(f._payload),o.type=f,m=o.tag=tM(f),r=Fr(f,r),m){case 0:o=yd(null,o,f,r,l);break e;case 1:o=vg(null,o,f,r,l);break e;case 11:o=fg(null,o,f,r,l);break e;case 14:o=dg(null,o,f,Fr(f.type,r),l);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Fr(f,m),yd(r,o,f,m,l);case 1:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Fr(f,m),vg(r,o,f,m,l);case 3:e:{if(gg(o),r===null)throw Error(t(387));f=o.pendingProps,y=o.memoizedState,m=y.element,Dv(r,o),_u(o,f,null,l);var A=o.memoizedState;if(f=A.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){m=Ca(Error(t(423)),o),o=_g(r,o,f,l,m);break e}else if(f!==m){m=Ca(Error(t(424)),o),o=_g(r,o,f,l,m);break e}else for(ur=Hi(o.stateNode.containerInfo.firstChild),lr=o,Yt=!0,Nr=null,l=Lv(o,null,f,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(wa(),f===m){o=xi(r,o,l);break e}Gn(r,o,f,l)}o=o.child}return o;case 5:return Nv(o),r===null&&qf(o),f=o.type,m=o.pendingProps,y=r!==null?r.memoizedProps:null,A=m.children,Bf(f,m)?A=null:y!==null&&Bf(f,y)&&(o.flags|=32),mg(r,o),Gn(r,o,A,l),o.child;case 6:return r===null&&qf(o),null;case 13:return yg(r,o,l);case 4:return rd(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=Ma(o,null,f,l):Gn(r,o,f,l),o.child;case 11:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Fr(f,m),fg(r,o,f,m,l);case 7:return Gn(r,o,o.pendingProps,l),o.child;case 8:return Gn(r,o,o.pendingProps.children,l),o.child;case 12:return Gn(r,o,o.pendingProps.children,l),o.child;case 10:e:{if(f=o.type._context,m=o.pendingProps,y=o.memoizedProps,A=m.value,Ht(mu,f._currentValue),f._currentValue=A,y!==null)if(Ur(y.value,A)){if(y.children===m.children&&!Kn.current){o=xi(r,o,l);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var U=y.dependencies;if(U!==null){A=y.child;for(var k=U.firstContext;k!==null;){if(k.context===f){if(y.tag===1){k=yi(-1,l&-l),k.tag=2;var oe=y.updateQueue;if(oe!==null){oe=oe.shared;var Ee=oe.pending;Ee===null?k.next=k:(k.next=Ee.next,Ee.next=k),oe.pending=k}}y.lanes|=l,k=y.alternate,k!==null&&(k.lanes|=l),ed(y.return,l,o),U.lanes|=l;break}k=k.next}}else if(y.tag===10)A=y.type===o.type?null:y.child;else if(y.tag===18){if(A=y.return,A===null)throw Error(t(341));A.lanes|=l,U=A.alternate,U!==null&&(U.lanes|=l),ed(A,l,o),A=y.sibling}else A=y.child;if(A!==null)A.return=y;else for(A=y;A!==null;){if(A===o){A=null;break}if(y=A.sibling,y!==null){y.return=A.return,A=y;break}A=A.return}y=A}Gn(r,o,m.children,l),o=o.child}return o;case 9:return m=o.type,f=o.pendingProps.children,Ta(o,l),m=_r(m),f=f(m),o.flags|=1,Gn(r,o,f,l),o.child;case 14:return f=o.type,m=Fr(f,o.pendingProps),m=Fr(f.type,m),dg(r,o,f,m,l);case 15:return hg(r,o,o.type,o.pendingProps,l);case 17:return f=o.type,m=o.pendingProps,m=o.elementType===f?m:Fr(f,m),bu(r,o),o.tag=1,Zn(f)?(r=!0,uu(o)):r=!1,Ta(o,l),ig(o,f,m),vd(o,f,m,l),xd(null,o,f,!0,r,l);case 19:return Sg(r,o,l);case 22:return pg(r,o,l)}throw Error(t(156,o.tag))};function $g(r,o){return ce(r,o)}function eM(r,o,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(r,o,l,f){return new eM(r,o,l,f)}function Bd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function tM(r){if(typeof r=="function")return Bd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ne)return 11;if(r===Q)return 14}return 2}function Ji(r,o){var l=r.alternate;return l===null?(l=Sr(r.tag,o,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=o,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,o=r.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function zu(r,o,l,f,m,y){var A=2;if(f=r,typeof r=="function")Bd(r)&&(A=1);else if(typeof r=="string")A=5;else e:switch(r){case F:return Bo(l.children,m,y,o);case de:A=8,m|=8;break;case b:return r=Sr(12,l,o,m|2),r.elementType=b,r.lanes=y,r;case pe:return r=Sr(13,l,o,m),r.elementType=pe,r.lanes=y,r;case H:return r=Sr(19,l,o,m),r.elementType=H,r.lanes=y,r;case re:return ku(l,m,y,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:A=10;break e;case ae:A=9;break e;case ne:A=11;break e;case Q:A=14;break e;case se:A=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=Sr(A,l,o,m),o.elementType=r,o.type=f,o.lanes=y,o}function Bo(r,o,l,f){return r=Sr(7,r,f,o),r.lanes=l,r}function ku(r,o,l,f){return r=Sr(22,r,f,o),r.elementType=re,r.lanes=l,r.stateNode={isHidden:!1},r}function Hd(r,o,l){return r=Sr(6,r,null,o),r.lanes=l,r}function Vd(r,o,l){return o=Sr(4,r.children!==null?r.children:[],r.key,o),o.lanes=l,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function nM(r,o,l,f,m){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ca(0),this.expirationTimes=ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ca(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Gd(r,o,l,f,m,y,A,U,k){return r=new nM(r,o,l,U,k),o===1?(o=1,y===!0&&(o|=8)):o=0,y=Sr(3,null,null,o),r.current=y,y.stateNode=r,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(y),r}function rM(r,o,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:r,containerInfo:o,implementation:l}}function Xg(r){if(!r)return Gi;r=r._reactInternals;e:{if(di(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Zn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Zn(l))return xv(r,l,o)}return o}function jg(r,o,l,f,m,y,A,U,k){return r=Gd(l,f,!0,r,m,y,A,U,k),r.context=Xg(null),l=r.current,f=Wn(),m=Ki(l),y=yi(f,m),y.callback=o??null,Xi(l,y,m),r.current.lanes=m,ws(r,m,f),er(r,f),r}function Bu(r,o,l,f){var m=o.current,y=Wn(),A=Ki(m);return l=Xg(l),o.context===null?o.context=l:o.pendingContext=l,o=yi(y,A),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Xi(m,o,A),r!==null&&(kr(r,m,A,y),gu(r,m,A)),A}function Hu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Yg(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<o?l:o}}function Wd(r,o){Yg(r,o),(r=r.alternate)&&Yg(r,o)}function iM(){return null}var qg=typeof reportError=="function"?reportError:function(r){console.error(r)};function $d(r){this._internalRoot=r}Vu.prototype.render=$d.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));Bu(r,o,null,null)},Vu.prototype.unmount=$d.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;Oo(function(){Bu(null,r,null,null)}),o[pi]=null}};function Vu(r){this._internalRoot=r}Vu.prototype.unstable_scheduleHydration=function(r){if(r){var o=Dm();r={blockedOn:null,target:r,priority:o};for(var l=0;l<zi.length&&o!==0&&o<zi[l].priority;l++);zi.splice(l,0,r),l===0&&Nm(r)}};function Xd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Gu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function oM(r,o,l,f,m){if(m){if(typeof f=="function"){var y=f;f=function(){var oe=Hu(A);y.call(oe)}}var A=jg(o,f,r,0,null,!1,!1,"",Kg);return r._reactRootContainer=A,r[pi]=A.current,Os(r.nodeType===8?r.parentNode:r),Oo(),A}for(;m=r.lastChild;)r.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var oe=Hu(k);U.call(oe)}}var k=Gd(r,0,!1,null,null,!1,!1,"",Kg);return r._reactRootContainer=k,r[pi]=k.current,Os(r.nodeType===8?r.parentNode:r),Oo(function(){Bu(o,k,l,f)}),k}function Wu(r,o,l,f,m){var y=l._reactRootContainer;if(y){var A=y;if(typeof m=="function"){var U=m;m=function(){var k=Hu(A);U.call(k)}}Bu(o,A,r,m)}else A=oM(l,o,r,m,f);return Hu(A)}Lm=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var l=Qt(o.pendingLanes);l!==0&&(vf(o,l|1),er(o,Xe()),(At&6)===0&&(Pa=Xe()+500,Wi()))}break;case 13:Oo(function(){var f=_i(r,1);if(f!==null){var m=Wn();kr(f,r,1,m)}}),Wd(r,1)}},gf=function(r){if(r.tag===13){var o=_i(r,134217728);if(o!==null){var l=Wn();kr(o,r,134217728,l)}Wd(r,134217728)}},Pm=function(r){if(r.tag===13){var o=Ki(r),l=_i(r,o);if(l!==null){var f=Wn();kr(l,r,o,f)}Wd(r,o)}},Dm=function(){return It},Im=function(r,o){var l=It;try{return It=r,o()}finally{It=l}},gt=function(r,o,l){switch(o){case"input":if(xe(r,l),o=l.name,l.type==="radio"&&o!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var f=l[o];if(f!==r&&f.form===r.form){var m=su(f);if(!m)throw Error(t(90));j(f),xe(f,m)}}}break;case"textarea":T(r,l);break;case"select":o=l.value,o!=null&&Ie(r,!!l.multiple,o,!1)}},ot=Od,Et=Oo;var aM={usingClientEntryPoint:!1,Events:[Bs,_a,su,me,Ue,Od]},el={findFiberByHostInstance:Ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sM={bundleType:el.bundleType,version:el.version,rendererPackageName:el.rendererPackageName,rendererConfig:el.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=fe(r),r===null?null:r.stateNode},findFiberByHostInstance:el.findFiberByHostInstance||iM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Yn=$u.inject(sM),Mt=$u}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aM,tr.createPortal=function(r,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(o))throw Error(t(200));return rM(r,o,null,l)},tr.createRoot=function(r,o){if(!Xd(r))throw Error(t(299));var l=!1,f="",m=qg;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=Gd(r,1,!1,null,null,l,!1,f,m),r[pi]=o.current,Os(r.nodeType===8?r.parentNode:r),new $d(o)},tr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=fe(o),r=r===null?null:r.stateNode,r},tr.flushSync=function(r){return Oo(r)},tr.hydrate=function(r,o,l){if(!Gu(o))throw Error(t(200));return Wu(null,r,o,!0,l)},tr.hydrateRoot=function(r,o,l){if(!Xd(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,y="",A=qg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),o=jg(o,null,r,1,l??null,m,!1,y,A),r[pi]=o.current,Os(r),f)for(r=0;r<f.length;r++)l=f[r],m=l._getVersion,m=m(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,m]:o.mutableSourceEagerHydrationData.push(l,m);return new Vu(o)},tr.render=function(r,o,l){if(!Gu(o))throw Error(t(200));return Wu(null,r,o,!1,l)},tr.unmountComponentAtNode=function(r){if(!Gu(r))throw Error(t(40));return r._reactRootContainer?(Oo(function(){Wu(null,null,r,!1,function(){r._reactRootContainer=null,r[pi]=null})}),!0):!1},tr.unstable_batchedUpdates=Od,tr.unstable_renderSubtreeIntoContainer=function(r,o,l,f){if(!Gu(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Wu(r,o,l,!1,f)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var i_;function Sy(){if(i_)return qd.exports;i_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),qd.exports=mM(),qd.exports}var o_;function vM(){if(o_)return Xu;o_=1;var n=Sy();return Xu.createRoot=n.createRoot,Xu.hydrateRoot=n.hydrateRoot,Xu}var gM=vM();const _M=xy(gM);var Ve=Dp();const so=xy(Ve),yM=uM({__proto__:null,default:so},[Ve]);var xM={compose:function(n){return function(e){return function(t){return n(e(t))}}}},SM=function(n){return n.compose},Pr=function(n){return n.identity},Dr={identity:function(n){return n}},EM=function(n){return function(e){return function(t){return function(i){return n(e(t))(e(i))}}}},ai=function(n){return function(e){return function(t){return n(t)(e)}}},zt=function(n){return function(e){return n}};const wM=function(n){return function(e){for(var t=e.length,i=new Array(t),a=0;a<t;a++)i[a]=n(e[a]);return i}},kn=void 0;var Dt=(function(){function n(){}return n.value=new n,n})(),kt=function(n){return n.map},MM=function(n){var e=kt(n);return function(t){return function(i){return e(i)(t)}}},Ey=function(n){return kt(n)(zt(kn))},AM={map:SM(xM)},Al={map:wM},vs=function(n){return n.apply},Tt=function(n){return n.pure},Ip=function(n){var e=Tt(n);return function(t){return function(i){if(t)return i;if(!t)return e(kn);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,i.constructor.name])}}},TM=function(n){var e=vs(n.Apply0()),t=Tt(n);return function(i){return function(a){return e(t(i))(a)}}};const bM=typeof Array.prototype.flatMap=="function"?function(n){return function(e){return n.flatMap(e)}}:function(n){return function(e){for(var t=[],i=n.length,a=0;a<i;a++)for(var s=e(n[a]),c=s.length,u=0;u<c;u++)t.push(s[u]);return t}};var Vc=function(n){return n.discard},CM={bind:bM},mn=function(n){return n.bind},Up=function(n){return ai(mn(n))},wy=function(n){var e=Up(n);return function(t){return function(i){return function(a){return e(t)(i(a))}}}},RM=function(n){var e=mn(n);return function(t){return function(i){return function(a){return e(t(a))(i)}}}},Gc={discard:function(n){return mn(n)}};const LM=function(n){return function(e){return n.length===0?e:e.length===0?n:n.concat(e)}};var Yr=function(n){return n.reflectSymbol};const Np=function(n){return function(e){return e[n]}},Fp=function(n){return function(e){return function(t){var i={};for(var a in t)({}).hasOwnProperty.call(t,a)&&(i[a]=t[a]);return i[n]=e,i}}},PM=function(n){return function(e){var t={};for(var i in e)i!==n&&{}.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}};var Tl={append:LM},Ir=function(n){return n.append},DM=function(n){var e=Ir(n);return{append:function(t){return function(i){return function(a){return e(t(a))(i(a))}}}}},IM=function(n){return n.alt};const UM=2147483647,NM=-2147483648;var My=function(n){return function(e){return n===e}};const FM=My,OM=My,zM=function(n){return function(e){return function(t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!n(e[i])(t[i]))return!1;return!0}}};var es={eq:OM},kM={eqRecord:function(n){return function(e){return function(t){return!0}}}},Ay=function(n){return n.eqRecord},BM=function(){return function(n){return{eq:Ay(n)(Dt.value)}}},HM={eq:FM},ci=function(n){return n.eq},VM=ci(HM),Pc=function(n){return{eq:zM(ci(n))}},Jd=function(n){var e=Ay(n);return function(){return function(t){var i=Yr(t);return function(a){var s=ci(a);return{eqRecord:function(c){return function(u){return function(d){var h=e(Dt.value)(u)(d),p=i(Dt.value),v=Np(p);return s(v(u))(v(d))&&h}}}}}}}},Ty=function(n){var e=ci(n);return function(t){return function(i){return VM(e(t)(i))(!1)}}},Zh=(function(){function n(){}return n.value=new n,n})(),Jh=(function(){function n(){}return n.value=new n,n})(),Dc=(function(){function n(){}return n.value=new n,n})(),GM={eq:function(n){return function(e){return n instanceof Zh&&e instanceof Zh||n instanceof Jh&&e instanceof Jh||n instanceof Dc&&e instanceof Dc}}},WM=function(n){return n.compare},$M=function(n){return n.top},by={top:UM,bottom:NM},XM=function(n){return n.bottom};const jM=function(n){return n.toString()},YM=function(n){var e=n.length;return'"'+n.replace(/[\0-\x1F\x7F"\\]/g,function(t,i){switch(t){case'"':case"\\":return"\\"+t;case"\x07":return"\\a";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v"}var a=i+1,s=a<e&&n[a]>="0"&&n[a]<="9"?"\\&":"";return"\\"+t.charCodeAt(0).toString(10)+s})+'"'};var qM={show:YM},Op={show:jM},oa=function(n){return n.show},ln=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),He=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),nr=(function(){function n(){}return n.value=new n,n})(),KM=function(n){return n.to},zp=function(n){return n.from},ZM=Pr(Dr),Ut=(function(){function n(){}return n.value=new n,n})(),Rt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),gs=function(n){return function(e){return function(t){if(t instanceof Ut)return n;if(t instanceof Rt)return e(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},Wc={map:function(n){return function(e){return e instanceof Rt?new Rt(n(e.value0)):Ut.value}}},JM=kt(Wc),Cy=function(n){return gs(n)(ZM)},Ry={apply:function(n){return function(e){if(n instanceof Rt)return JM(n.value0)(e);if(n instanceof Ut)return Ut.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return Wc}},Ly={bind:function(n){return function(e){if(n instanceof Rt)return e(n.value0);if(n instanceof Ut)return Ut.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,e.constructor.name])}}},QM=(function(){return{pure:Rt.create,Apply0:function(){return Ry}}})(),ct=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),as=function(n){return gs(new ct(n))(mt.create)},aa={map:function(n){return function(e){if(e instanceof ct)return new ct(e.value0);if(e instanceof mt)return new mt(n(e.value0));throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},e1=kt(aa),bl=function(n){return function(e){return function(t){if(t instanceof ct)return n(t.value0);if(t instanceof mt)return e(t.value0);throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},Py={apply:function(n){return function(e){if(n instanceof ct)return new ct(n.value0);if(n instanceof mt)return e1(n.value0)(e);throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return aa}},Cl={bind:bl(function(n){return function(e){return new ct(n)}})(function(n){return function(e){return e(n)}}),Apply0:function(){return Py}},sa=(function(){return{pure:mt.create,Apply0:function(){return Py}}})();const t1=function(n){return function(){return n}},n1=function(n){return function(e){return function(){return e(n())()}}};var kp=function(n){var e=mn(n.Bind1()),t=Tt(n.Applicative0());return function(i){return function(a){return e(i)(function(s){return e(a)(function(c){return t(s(c))})})}}},Dy={mempty:[],Semigroup0:function(){return Tl}},_s=function(n){return n.mempty},r1=function(n){var e=_s(n),t=DM(n.Semigroup0());return{mempty:function(i){return e},Semigroup0:function(){return t}}},Iy=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},i1={Applicative0:function(){return Bp},Bind1:function(){return o1}},o1={bind:n1,Apply0:function(){return Ny(0)}},Bp={pure:t1,Apply0:function(){return Ny(0)}},Uy=Iy("functorEffect","Effect",function(){return{map:TM(Bp)}}),Ny=Iy("applyEffect","Effect",function(){return{apply:kp(i1),Functor0:function(){return Uy(0)}}}),a1=Uy(20);function Fy(n){return n.message}var Rl=function(n){return n.throwError},Hp=function(n){return n.catchError},s1=function(n){var e=Hp(n),t=n.MonadThrow0().Monad0(),i=kt(t.Bind1().Apply0().Functor0()),a=Tt(t.Applicative0());return function(s){return e(i(mt.create)(s))(function(c){return a(ct.create(c))})}},l1=function(n){return n},u1={map:function(n){return function(e){return n(e)}}},Oy={apply:function(n){return function(e){return n(e)}},Functor0:function(){return u1}},zy={bind:function(n){return function(e){return e(n)}},Apply0:function(){return Oy}},ky={pure:l1,Apply0:function(){return Oy}},wo={Applicative0:function(){return ky},Bind1:function(){return zy}};const Ll=function(n){return n},c1=function(n){return function(e){return function(){return n(e())}}},f1=function(n){return function(e){return function(){for(var t=0,i=n.length;t<i;t++)e(n[t])()}}};var d1={map:c1};const h1=function(n){return function(e){return n&&e}},p1=function(n){return function(e){return n||e}},m1=function(n){return!n};var v1=function(n){return n.not},g1=function(n){return n.ff},By=function(n){return n.disj},Qh={ff:!1,tt:!0,implies:function(n){return function(e){return By(Qh)(v1(Qh)(n))(e)}},conj:h1,disj:p1,not:m1},Xt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Vp={map:function(n){return function(e){return new Xt(e.value0,n(e.value1))}}},_1=function(n){return n.value0},y1=function(n){var e=Ir(n);return{apply:function(t){return function(i){return new Xt(e(t.value0)(i.value0),t.value1(i.value1))}},Functor0:function(){return Vp}}},x1=function(n){var e=y1(n.Semigroup0());return{pure:Xt.create(_s(n)),Apply0:function(){return e}}},Hy=function(n){return n.lift},S1=function(n){return n.tell},E1={liftEffect:Pr(Dr)},$c=function(n){return n.liftEffect},w1=kt(aa),Vy=function(n){return n},Gp=function(n){return n},Gy={lift:function(n){var e=mn(n.Bind1()),t=Tt(n.Applicative0());return function(i){return e(i)(function(a){return t(new mt(a))})}}},M1=Hy(Gy),A1=function(n){return function(e){return n(e)}},Wy=function(n){var e=kt(n);return{map:function(t){return A1(e(w1(t)))}}},Wp=function(n){return{Applicative0:function(){return Mo(n)},Bind1:function(){return Pl(n)}}},Pl=function(n){var e=mn(n.Bind1()),t=Tt(n.Applicative0());return{bind:function(i){return function(a){return e(i)(bl(function(s){return t(ct.create(s))})(function(s){var c=a(s);return c}))}},Apply0:function(){return $y(n)}}},$y=function(n){var e=Wy(n.Bind1().Apply0().Functor0());return{apply:kp(Wp(n)),Functor0:function(){return e}}},Mo=function(n){return{pure:(function(){var e=Tt(n.Applicative0());return function(t){return Vy(e(mt.create(t)))}})(),Apply0:function(){return $y(n)}}},$p=function(n){var e=n.Monad0(),t=Wp(e);return{liftEffect:(function(){var i=M1(e),a=$c(n);return function(s){return i(a(s))}})(),Monad0:function(){return t}}},Xc=function(n){var e=Wp(n);return{throwError:(function(){var t=Tt(n.Applicative0());return function(i){return Vy(t(ct.create(i)))}})(),Monad0:function(){return e}}},Xp=function(n){var e=mn(n.Bind1()),t=Tt(n.Applicative0()),i=Xc(n);return{catchError:function(a){return function(s){return e(a)(bl(function(c){var u=s(c);return u})(function(c){return t(mt.create(c))}))}},MonadThrow0:function(){return i}}},T1=function(n){var e=Ir(n);return function(t){var i=t.Bind1(),a=mn(i),s=Tt(t.Applicative0()),c=Wy(i.Apply0().Functor0());return{alt:function(u){return function(d){return a(u)(function(h){if(h instanceof mt)return s(new mt(h.value0));if(h instanceof ct)return a(d)(function(p){if(p instanceof mt)return s(new mt(p.value0));if(p instanceof ct)return s(new ct(e(h.value0)(p.value0)));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): "+[p.constructor.name])});throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): "+[h.constructor.name])})}},Functor0:function(){return c}}}},Xy=function(){return Ll},jp=Xy(),b1=function(){return jp},Dl=function(){return jp},C1=function(){return function(){return function(){return function(){return function(n){return jp}}}}},R1=Dl(),Yp=function(n){return R1(Gp(n))},L1=Pr(Dr),P1=function(n){return n.bimap},jy=function(n){var e=P1(n);return function(t){return e(t)(L1)}},Yy={bimap:function(n){return function(e){return function(t){if(t instanceof ct)return new ct(n(t.value0));if(t instanceof mt)return new mt(e(t.value0));throw new Error("Failed pattern match at Data.Bifunctor (line 38, column 1 - line 40, column 36): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}}},D1=kt(Vp),jc=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),qy=function(n){var e=kt(n);return{dimap:function(t){return function(i){return function(a){return new jc((function(){var s=e(i);return function(c){return s(a.value0(c))}})(),(function(){var s=D1(i);return function(c){return s(a.value1(t(c)))}})())}}}}},tn=function(n){return function(e){return _1(n.value1(e))}},Rn=function(n){return n.value0},Yc=function(n){return function(e){return new jc(n,function(t){return new Xt(e(t),t)})}},I1=function(n){return function(e){return new jc(n,function(t){return new Xt(e(t),t)})}};function qp(n){return n}function Ky(n){return JSON.stringify(n)}function Qd(n){return Object.prototype.toString.call(n)==="[object Array]"}function qc(n,e,t,i,a,s,c){return c==null?n():typeof c=="boolean"?e(c):typeof c=="number"?t(c):typeof c=="string"?i(c):Object.prototype.toString.call(c)==="[object Array]"?a(c):s(c)}function ep(n,e,t,i,a){if(i==null)return a==null?n:t;if(typeof i=="boolean")return typeof a=="boolean"?i===a?n:i===!1?t:e:a==null?e:t;if(typeof i=="number")return typeof a=="number"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"?e:t;if(typeof i=="string")return typeof a=="string"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"||typeof a=="number"?e:t;if(Qd(i))if(Qd(a)){for(var s=0;s<Math.min(i.length,a.length);s++){var c=ep(n,e,t,i[s],a[s]);if(c!==n)return c}return i.length===a.length?n:i.length<a.length?t:e}else return a==null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"?e:t;else{if(a==null)return e;if(typeof a=="boolean")return e;if(typeof a=="number")return e;if(typeof a=="string")return e;if(Qd(a))return e;var u=Object.keys(i),d=Object.keys(a);if(u.length<d.length)return t;if(u.length>d.length)return e;for(var h=u.concat(d).sort(),p=0;p<h.length;p++){var v=h[p];if(i[v]===void 0)return t;if(a[v]===void 0)return e;var g=ep(n,e,t,i[v],a[v]);if(g!==n)return g}return n}}const U1={};function N1(n){return n()}function F1(n,e,t,i){return t in i?e(i[t]):n}const O1=(function(){function n(a,s){this.head=a,this.tail=s}var e={};function t(a){return function(s){return new n(a,s)}}function i(a){for(var s=[],c=0,u=a;u!==e;)s[c++]=u.head,u=u.tail;return s}return function(a,s){return i(a(t)(e)(s))}})(),z1=function(n){return n.length},k1=function(n,e,t,i){return i<0||i>=t.length?e:n(t[i])},B1=function(n,e,t){return t.slice(n,e)};function H1(n){return n}const V1=H1;function G1(n){return n.slice()}const W1=G1,$1=function(n,e){return e.push(n)},Zy=function(e){return function(t){return function(){return e(t)}}},X1=function(e){return function(t){return function(i){return function(){return e(t,i)}}}};var j1=Zy(V1),Y1=Zy(W1),q1=function(n){return function(e){return function(){var i=Y1(e)();return n(i)(),j1(i)()}}},K1=X1($1);const Z1=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=a-1;s>=0;s--)i=n(t[s])(i);return i}}},J1=function(n){return function(e){return function(t){for(var i=e,a=t.length,s=0;s<a;s++)i=n(i)(t[s]);return i}}};var Q1=function(n){return n.empty},eA={append:function(n){return function(e){return n instanceof Rt?n:e}}},tA=(function(){return{mempty:Ut.value,Semigroup0:function(){return eA}}})(),nA=function(n){return n},rA=function(n){var e=By(n);return{append:function(t){return function(i){return e(t)(i)}}}},iA=function(n){var e=rA(n);return{mempty:g1(n),Semigroup0:function(){return e}}},oA=Dl(),aA=C1()()()(),Kc=function(n){return n.foldr},Kp=function(n){return n.foldl},sA=function(n){var e=Kc(n);return function(t){var i=Ir(t.Semigroup0()),a=_s(t);return function(s){return e(function(c){return function(u){return i(s(c))(u)}})(a)}}},Di={foldr:Z1,foldl:J1,foldMap:function(n){return sA(Di)(n)}},Jy=function(n){return n.foldMap},lA=function(n){var e=Jy(n)(tA);return function(t){var i=ci(t);return function(a){var s=e(function(c){var u=i(a)(c.value0);return u?new Rt(c.value1):Ut.value});return function(c){return oA(s(c))}}}},uA=function(n){var e=Jy(n);return function(t){return aA(nA)(e(iA(t)))}};const cA=function(n){return function(e){return function(t){return n(e,t)}}},Zp=function(n){return function(e){return function(t){return function(i){return n(e,t,i)}}}},Qy=function(n){return function(e){return function(t){return function(i){return function(a){return n(e,t,i,a)}}}}},fA=function(n){return function(e){for(var t=e.length,i=Array(t),a=0;a<t;a++)i[a]=n(a)(e[a]);return i}};var ex=function(n){return n.mapWithIndex},tx={mapWithIndex:fA,Functor0:function(){return Al}};const dA=(function(){function n(a){return[a]}function e(a){return function(s){return[a,s]}}function t(a){return function(s){return function(c){return[a,s,c]}}}function i(a){return function(s){return a.concat(s)}}return function(a){return function(s){return function(c){return function(u){return function(d){function h(p,v){switch(v-p){case 0:return c([]);case 1:return s(n)(u(d[p]));case 2:return a(s(e)(u(d[p])))(u(d[p+1]));case 3:return a(a(s(t)(u(d[p])))(u(d[p+1])))(u(d[p+2]));default:var g=p+Math.floor((v-p)/4)*2;return a(s(i)(h(p,g)))(h(g,v))}}return h(0,d.length)}}}}}})();var hA=Pr(Dr),Jp=function(n){return n.traverse},pA=function(n){var e=Jp(n);return function(t){return e(t)(hA)}},Zc={traverse:function(n){var e=n.Apply0();return dA(vs(e))(kt(e.Functor0()))(Tt(n))},sequence:function(n){return pA(Zc)(n)},Functor0:function(){return Al},Foldable1:function(){return Di}},mA=function(n){return n.sequence},vA=Ir(Tl),gA=function(n){return function(e){return q1(K1(e))(n)()}},_A=Zp(B1),yA=function(n){return[n]},xA=(function(){return Qy(k1)(Rt.create)(Ut.value)})(),SA=function(n){return xA(n)(0)},EA=function(n){return cA(O1)(Kc(n))},wA=function(n){return function(e){return _A(n)(z1(e))(e)}},MA=function(n){return function(e){return vA([n])(e)}},AA=ai(mn(CM)),TA=function(n){return AA((function(){var e=gs([])(yA);return function(t){return e(n(t))}})())},bA=TA(Pr(Dr)),CA=Kc(Di),a_=ex(tx),RA=Kp(Di),LA=function(n){return n.foldrWithIndex},PA=function(n){var e=LA(n);return function(t){var i=Ir(t.Semigroup0()),a=_s(t);return function(s){return e(function(c){return function(u){return function(d){return i(s(c)(u))(d)}}})(a)}}},nx={foldrWithIndex:function(n){return function(e){var t=CA(function(a){return function(s){return n(a.value0)(a.value1)(s)}})(e),i=a_(Xt.create);return function(a){return t(i(a))}}},foldlWithIndex:function(n){return function(e){var t=RA(function(a){return function(s){return n(s.value0)(a)(s.value1)}})(e),i=a_(Xt.create);return function(a){return t(i(a))}}},foldMapWithIndex:function(n){return PA(nx)(n)},Foldable0:function(){return Di}},DA=function(n){var e=mA(n.Traversable2()),t=ex(n.FunctorWithIndex0());return function(i){var a=e(i);return function(s){var c=t(s);return function(u){return a(c(u))}}}},IA=function(n){return n.traverseWithIndex},rx={traverseWithIndex:function(n){return DA(rx)(n)},FunctorWithIndex0:function(){return tx},FoldableWithIndex1:function(){return nx},Traversable2:function(){return Zc}};const UA=function(){return{}};function NA(n){return function(e){return function(t){return function(){return t[n]=e,t}}}}var FA=Ey(d1),ss=(function(){return Qy(F1)(Ut.value)(Rt.create)})(),ix=function(n){var e=EA(n);return function(t){return N1(function(){var a=UA();return f1(e(t))(function(s){return FA(NA(s.value0)(s.value1)(a))})(),a})}},OA=ci(GM),zA=function(n){return function(e){return function(t){return t(n)(e)}}},Jc=(function(){return zA(Ut.value)(Rt.create)})(),kA=U1,BA={compare:function(n){return function(e){return ep(Dc.value,Jh.value,Zh.value,n,e)}}},HA={eq:function(n){return function(e){return OA(WM(BA)(n)(e))(Dc.value)}}},VA=function(n){return function(e){return function(t){return qc(zt(n),zt(n),zt(n),e,zt(n),zt(n),t)}}},GA=Jc(VA),WA=function(n){return function(e){return function(t){return qc(zt(n),zt(n),zt(n),zt(n),zt(n),e,t)}}},$A=Jc(WA),XA=function(n){return function(e){return function(t){return qc(zt(n),zt(n),e,zt(n),zt(n),zt(n),t)}}},jA=Jc(XA),YA=function(n){return function(e){return function(t){return qc(zt(n),zt(n),zt(n),zt(n),e,zt(n),t)}}},qA=Jc(YA);const KA=function(n){return function(e){return function(t){return(t|0)===t?n(t):e}}},yl=function(n){return n},ZA=isFinite,JA=Math.trunc?Math.trunc:function(n){return n<0?Math.ceil(n):Math.floor(n)};var s_=$M(by),l_=XM(by),ox=(function(){return KA(Rt.create)(Ut.value)})(),QA=function(n){return ZA(n)?n>=yl(s_)?s_:n<=yl(l_)?l_:Cy(0)(ox(n)):0},eh=function(n){return QA(JA(n))},ax=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),eT=function(n){var e=Q1(n);return function(t){return new ax(t,e)}},Wr=(function(){function n(){}return n.value=new n,n})(),Zt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),tT=function(n){return n},nT=function(n){return new Zt(n.value0,n.value1)},rT=function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof Zt&&h.value1 instanceof Zt&&h.value1.value1 instanceof Zt){a=new Zt(h,d),i=h.value1.value1.value1;return}var p=function(g){return g instanceof Zt&&g.value1 instanceof Zt&&g.value1.value1 instanceof Wr?new Zt(n(g.value0),new Zt(n(g.value1.value0),Wr.value)):g instanceof Zt&&g.value1 instanceof Wr?new Zt(n(g.value0),Wr.value):Wr.value},v=function(g){return function(S){var E=g,w=!1,x;function _(C,M){if(C instanceof Zt&&C.value0 instanceof Zt&&C.value0.value1 instanceof Zt&&C.value0.value1.value1 instanceof Zt){E=C.value1,S=new Zt(n(C.value0.value0),new Zt(n(C.value0.value1.value0),new Zt(n(C.value0.value1.value1.value0),M)));return}return w=!0,M}for(;!w;)x=_(E,S);return x}};return s=!0,v(d)(p(h))}for(;!s;)c=u(a,i);return c}};return e(Wr.value)},iT={map:rT},Qp={foldr:function(n){return function(e){var t=(function(){var a=function(s){return function(c){var u=s,d=!1,h;function p(v,g){if(g instanceof Wr)return d=!0,v;if(g instanceof Zt){u=new Zt(g.value0,v),c=g.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[v.constructor.name,g.constructor.name])}for(;!d;)h=p(u,c);return h}};return a(Wr.value)})(),i=Kp(Qp)(ai(n))(e);return function(a){return i(t(a))}}},foldl:function(n){var e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof Wr)return s=!0,d;if(h instanceof Zt){a=n(d)(h.value0),i=h.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}},oT=Kc(Qp),sx={append:function(n){return function(e){return oT(Zt.create)(e)(n)}}},lx=Ir(sx),aT=(function(){return{mempty:Wr.value,Semigroup0:function(){return sx}}})(),sT={append:function(n){return function(e){return new ax(n.value0,lx(n.value1)(nT(e)))}}},lT={alt:lx,Functor0:function(){return iT}},uT=(function(){return{empty:Wr.value,Alt0:function(){return lT}}})();const cT=function(n){return n.length},fT=function(n){return function(e){return function(t){return function(i){var a=i.indexOf(t);return a===-1?e:n(a)}}}},dT=function(n){return function(e){return e.substr(0,n)}},hT=function(n){return function(e){return e.substring(n)}};var pT=(function(){return fT(Rt.create)(Ut.value)})();const ux=function(n){return function(e){return e.split(n)}},mT=function(n){return function(e){return e.join(n)}};var vT=oa(Op),u_=mn(Cl),em=jy(Yy),tm=Tt(sa),cx=Up(Cl),gT=ix(Qp),_T=wy(Ly),yT=IA(rx)(sa),xT=kt(Al),si=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ST=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),fx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),dx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),nm=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),hx=(function(){function n(){}return n.value=new n,n})(),ET=function(n){var e=Yr(n);return function(){return function(t){return function(i){return function(a){var s=function(d){return function(h){return new Zt(new Xt(d,tn(i)(Np(d)(h))),tn(a)(h))}},c=function(d){return function(h){return u_(Rn(a)(h))(function(p){return u_(em(dx.create(d))((function(){var v=ss(d)(h);if(v instanceof Rt)return Rn(i)(v.value0);if(v instanceof Ut)return new ct(hx.value);throw new Error("Failed pattern match at Data.Codec.Argonaut (line 264, column 29 - line 266, column 34): "+[v.constructor.name])})()))(function(v){return tm(Fp(d)(v)(p))})})}},u=e(t);return I1(c(u))(s(u))}}}}},wT=(function(){return new jc(zt(tm({})),Tt(x1(aT)))})(),MT=function(n){var e=function(t){if(t instanceof si)return"  Expected value of type '"+(t.value0+"'.");if(t instanceof ST)return"  Unexpected value "+(Ky(t.value0)+".");if(t instanceof fx)return"  At array index "+(vT(t.value0)+(`:
`+e(t.value1)));if(t instanceof dx)return"  At object key "+(t.value0+(`:
`+e(t.value1)));if(t instanceof nm)return"  Under '"+(t.value0+(`':
`+e(t.value1)));if(t instanceof hx)return"  No value was found.";throw new Error("Failed pattern match at Data.Codec.Argonaut (line 90, column 8 - line 96, column 43): "+[t.constructor.name])};return`An error occurred while decoding a JSON value:
`+e(n)},Qc=function(n){return function(e){return Yc((function(){var t=gs(new ct(new si(n)))(tm);return function(i){return t(e(i))}})())}},Tr=Qc("String")(GA)(qp),go=Qc("Object")($A)(qp),AT=function(n){return function(e){return Yc(function(t){return em(nm.create(n))(cx(Rn(e))(Rn(go)(t)))})(function(t){return tn(go)(gT(tn(e)(t)))})}},ho=Qc("Array")(qA)(qp),Ic=Qc("Int")(_T(ox)(jA))(function(n){return yl(n)}),ef=function(n){return Yc(function(e){return cx(yT(function(t){return function(i){return em(fx.create(t))(Rn(n)(i))}}))(Rn(ho)(e))})(function(e){return xT(tn(n))(e)})},TT=function(n){var e=Yr(n);return function(){return function(){return function(t){return function(i){return function(a){return Fp(e(t))(i)(a)}}}}}},px=function(n){var e=Yr(n);return function(){return function(){return function(t){return function(i){return function(a){return Fp(e(t))(i)(a)}}}}}},Ao=function(n){var e=Yr(n);return function(){return function(t){return function(i){return Np(e(t))(i)}}}},bT=function(n){var e=Yr(n);return function(){return function(){return function(t){return function(i){return PM(e(t))(i)}}}}},rm={rowListCodec:function(n){return function(e){return wT}}},mx=function(n){return n.rowListCodec},Qo=function(n){var e=mx(n);return function(){return function(){return function(t){var i=Ao(t)(),a=ET(t)();return{rowListCodec:function(s){return function(c){var u=e(Dt.value)(c),d=i(Dt.value)(c);return a(Dt.value)(d)(u)}}}}}}},CT=function(){return function(n){return mx(n)(Dt.value)}},RT=CT(),LT=function(){return function(n){var e=RT(n);return function(t){return function(i){return AT(t)(e(i))}}}},cl={dimap:function(n){return function(e){return function(t){return function(i){return e(t(n(i)))}}}}},tf=function(n){return n.dimap},la={first:function(n){return function(e){return new Xt(n(e.value0),e.value1)}},second:kt(Vp),Profunctor0:function(){return cl}},PT=function(n){return n.first},c_=Xy(),DT=function(n){return function(e){return function(t){var i=tf(t);return function(a){return i(n)(e)(a)}}}},IT=function(){return function(){return function(n){return DT(c_)(c_)(n)}}},UT=IT()(),NT=function(){return function(){return function(n){return UT(n)}}},FT=NT()(),vx=function(){return function(n){return function(e){return FT(e)}}},gx=function(n){return n},ts=function(n){return function(e){return gx(n)(zt(e))}},br=(function(){var n={},e="Pure",t="Throw",i="Catch",a="Sync",s="Async",c="Bind",u="Bracket",d="Fork",h="Sequential",p="Map",v="Apply",g="Alt",S="Cons",E="Resume",w="Release",x="Finalizer",_="Finalized",C="Forked";function M(L,z,W,q){this.tag=L,this._1=z,this._2=W,this._3=q}function R(L){var z=function(W,q,ee){return new M(L,W,q,ee)};return z.tag=L,z}function I(L){return new M(e,void 0)}function O(L){try{L()}catch(z){setTimeout(function(){throw z},0)}}function F(L,z,W){try{return z(W())}catch(q){return L(q)}}function de(L,z,W){try{return z(W)()}catch(q){return W(L(q))(),I}}var b=(function(){var L=1024,z=0,W=0,q=new Array(L),ee=!1;function Z(){var _e;for(ee=!0;z!==0;)z--,_e=q[W],q[W]=void 0,W=(W+1)%L,_e();ee=!1}return{isDraining:function(){return ee},enqueue:function(_e){var ve;z===L&&(ve=ee,Z(),ee=ve),q[(W+z)%L]=_e,z++,ee||Z()}}})();function N(L){var z={},W=0,q=0;return{register:function(ee){var Z=W++;ee.onComplete({rethrow:!0,handler:function(_e){return function(){q--,delete z[Z]}}})(),z[Z]=ee,q++},isEmpty:function(){return q===0},killAll:function(ee,Z){return function(){if(q===0)return Z();var _e=0,ve={};function be(Oe){ve[Oe]=z[Oe].kill(ee,function(j){return function(){delete ve[Oe],_e--,L.isLeft(j)&&L.fromLeft(j)&&setTimeout(function(){throw L.fromLeft(j)},0),_e===0&&Z()}})()}for(var Fe in z)z.hasOwnProperty(Fe)&&(_e++,be(Fe));return z={},W=0,q=0,function(Oe){return new M(a,function(){for(var j in ve)ve.hasOwnProperty(j)&&ve[j]()})}}}}}var ae=0,ne=1,pe=2,H=3,Q=4,se=5,re=6;function X(L,z,W){var q=0,ee=ae,Z=W,_e=null,ve=null,be=null,Fe=null,Oe=null,j=0,Lt=0,Be=null,le=!0;function ue(we){for(var Ie,Ze,D;;)switch(Ie=null,Ze=null,D=null,ee){case pe:ee=ne;try{Z=be(Z),Fe===null?be=null:(be=Fe._1,Fe=Fe._2)}catch(Y){ee=se,_e=L.left(Y),Z=null}break;case H:L.isLeft(Z)?(ee=se,_e=Z,Z=null):be===null?ee=se:(ee=pe,Z=L.fromRight(Z));break;case ne:switch(Z.tag){case c:be&&(Fe=new M(S,be,Fe)),be=Z._2,ee=ne,Z=Z._1;break;case e:be===null?(ee=se,Z=L.right(Z._1)):(ee=pe,Z=Z._1);break;case a:ee=H,Z=F(L.left,L.right,Z._1);break;case s:ee=Q,Z=de(L.left,Z._1,function(Y){return function(){q===we&&(q++,b.enqueue(function(){q===we+1&&(ee=H,Z=Y,ue(q))}))}});return;case t:ee=se,_e=L.left(Z._1),Z=null;break;case i:be===null?Oe=new M(S,Z,Oe,ve):Oe=new M(S,Z,new M(S,new M(E,be,Fe),Oe,ve),ve),be=null,Fe=null,ee=ne,Z=Z._1;break;case u:j++,be===null?Oe=new M(S,Z,Oe,ve):Oe=new M(S,Z,new M(S,new M(E,be,Fe),Oe,ve),ve),be=null,Fe=null,ee=ne,Z=Z._1;break;case d:ee=H,Ie=X(L,z,Z._2),z&&z.register(Ie),Z._1&&Ie.run(),Z=L.right(Ie);break;case h:ee=ne,Z=$(L,z,Z._1);break}break;case se:if(be=null,Fe=null,Oe===null)ee=re,Z=ve||_e||Z;else switch(Ie=Oe._3,D=Oe._1,Oe=Oe._2,D.tag){case i:ve&&ve!==Ie&&j===0?ee=se:_e&&(ee=ne,Z=D._2(L.fromLeft(_e)),_e=null);break;case E:ve&&ve!==Ie&&j===0||_e?ee=se:(be=D._1,Fe=D._2,ee=pe,Z=L.fromRight(Z));break;case u:j--,_e===null&&(Ze=L.fromRight(Z),Oe=new M(S,new M(w,D._2,Ze),Oe,Ie),(ve===Ie||j>0)&&(ee=ne,Z=D._3(Ze)));break;case w:Oe=new M(S,new M(_,Z,_e),Oe,ve),ee=ne,ve&&ve!==Ie&&j===0?Z=D._1.killed(L.fromLeft(ve))(D._2):_e?Z=D._1.failed(L.fromLeft(_e))(D._2):Z=D._1.completed(L.fromRight(Z))(D._2),_e=null,j++;break;case x:j++,Oe=new M(S,new M(_,Z,_e),Oe,ve),ee=ne,Z=D._1;break;case _:j--,ee=se,Z=D._1,_e=D._2;break}break;case re:for(var T in Be)Be.hasOwnProperty(T)&&(le=le&&Be[T].rethrow,O(Be[T].handler(Z)));Be=null,ve&&_e?setTimeout(function(){throw L.fromLeft(_e)},0):L.isLeft(Z)&&le&&setTimeout(function(){if(le)throw L.fromLeft(Z)},0);return;case ae:ee=ne;break;case Q:return}}function xe(we){return function(){if(ee===re)return le=le&&we.rethrow,we.handler(Z)(),function(){};var Ie=Lt++;return Be=Be||{},Be[Ie]=we,function(){Be!==null&&delete Be[Ie]}}}function ge(we,Ie){return function(){if(ee===re)return Ie(L.right(void 0))(),function(){};var Ze=xe({rethrow:!1,handler:function(){return Ie(L.right(void 0))}})();switch(ee){case ae:ve=L.left(we),ee=re,Z=ve,ue(q);break;case Q:ve===null&&(ve=L.left(we)),j===0&&(ee===Q&&(Oe=new M(S,new M(x,Z(we)),Oe,ve)),ee=se,Z=null,_e=null,ue(++q));break;default:ve===null&&(ve=L.left(we)),j===0&&(ee=se,Z=null,_e=null)}return Ze}}function Me(we){return function(){var Ie=xe({rethrow:!1,handler:we})();return ee===ae&&ue(q),Ie}}return{kill:ge,join:Me,onComplete:xe,isSuspended:function(){return ee===ae},run:function(){ee===ae&&(b.isDraining()?ue(q):b.enqueue(function(){ue(q)}))}}}function ie(L,z,W,q){var ee=0,Z={},_e=0,ve={},be=new Error("[ParAff] Early exit"),Fe=null,Oe=n;function j(xe,ge,Me){var we=ge,Ie=null,Ze=null,D=0,T={},Y,Ae;e:for(;;)switch(Y=null,we.tag){case C:if(we._3===n&&(Y=Z[we._1],T[D++]=Y.kill(xe,function(ye){return function(){D--,D===0&&Me(ye)()}})),Ie===null)break e;we=Ie._2,Ze===null?Ie=null:(Ie=Ze._1,Ze=Ze._2);break;case p:we=we._2;break;case v:case g:Ie&&(Ze=new M(S,Ie,Ze)),Ie=we,we=we._1;break}if(D===0)Me(L.right(void 0))();else for(Ae=0,Y=D;Ae<Y;Ae++)T[Ae]=T[Ae]();return T}function Lt(xe,ge,Me){var we,Ie,Ze,D,T,Y;for(L.isLeft(xe)?(we=xe,Ie=null):(Ie=xe,we=null);;){if(Ze=null,D=null,T=null,Y=null,Fe!==null)return;if(ge===null){q(we||Ie)();return}if(ge._3!==n)return;switch(ge.tag){case p:we===null?(ge._3=L.right(ge._1(L.fromRight(Ie))),Ie=ge._3):ge._3=we;break;case v:if(Ze=ge._1._3,D=ge._2._3,we){if(ge._3=we,T=!0,Y=_e++,ve[Y]=j(be,we===Ze?ge._2:ge._1,function(){return function(){delete ve[Y],T?T=!1:Me===null?Lt(we,null,null):Lt(we,Me._1,Me._2)}}),T){T=!1;return}}else{if(Ze===n||D===n)return;Ie=L.right(L.fromRight(Ze)(L.fromRight(D))),ge._3=Ie}break;case g:if(Ze=ge._1._3,D=ge._2._3,Ze===n&&L.isLeft(D)||D===n&&L.isLeft(Ze))return;if(Ze!==n&&L.isLeft(Ze)&&D!==n&&L.isLeft(D))we=Ie===Ze?D:Ze,Ie=null,ge._3=we;else if(ge._3=Ie,T=!0,Y=_e++,ve[Y]=j(be,Ie===Ze?ge._2:ge._1,function(){return function(){delete ve[Y],T?T=!1:Me===null?Lt(Ie,null,null):Lt(Ie,Me._1,Me._2)}}),T){T=!1;return}break}Me===null?ge=null:(ge=Me._1,Me=Me._2)}}function Be(xe){return function(ge){return function(){delete Z[xe._1],xe._3=ge,Lt(ge,xe._2._1,xe._2._2)}}}function le(){var xe=ne,ge=W,Me=null,we=null,Ie,Ze;e:for(;;)switch(Ie=null,Ze=null,xe){case ne:switch(ge.tag){case p:Me&&(we=new M(S,Me,we)),Me=new M(p,ge._1,n,n),ge=ge._2;break;case v:Me&&(we=new M(S,Me,we)),Me=new M(v,n,ge._2,n),ge=ge._1;break;case g:Me&&(we=new M(S,Me,we)),Me=new M(g,n,ge._2,n),ge=ge._1;break;default:Ze=ee++,xe=se,Ie=ge,ge=new M(C,Ze,new M(S,Me,we),n),Ie=X(L,z,Ie),Ie.onComplete({rethrow:!1,handler:Be(ge)})(),Z[Ze]=Ie,z&&z.register(Ie)}break;case se:if(Me===null)break e;Me._1===n?(Me._1=ge,xe=ne,ge=Me._2,Me._2=n):(Me._2=ge,ge=Me,we===null?Me=null:(Me=we._1,we=we._2))}for(Oe=ge,Ze=0;Ze<ee;Ze++)Z[Ze].run()}function ue(xe,ge){Fe=L.left(xe);var Me;for(var we in ve)if(ve.hasOwnProperty(we)){Me=ve[we];for(we in Me)Me.hasOwnProperty(we)&&Me[we]()}ve=null;var Ie=j(xe,Oe,ge);return function(Ze){return new M(s,function(D){return function(){for(var T in Ie)Ie.hasOwnProperty(T)&&Ie[T]();return I}})}}return le(),function(xe){return new M(s,function(ge){return function(){return ue(xe,ge)}})}}function $(L,z,W){return new M(s,function(q){return function(){return ie(L,z,W,q)}})}return M.EMPTY=n,M.Pure=R(e),M.Throw=R(t),M.Catch=R(i),M.Sync=R(a),M.Async=R(s),M.Bind=R(c),M.Bracket=R(u),M.Fork=R(d),M.Seq=R(h),M.ParMap=R(p),M.ParApply=R(v),M.ParAlt=R(g),M.Fiber=X,M.Supervisor=N,M.Scheduler=b,M.nonCanceler=I,M})();const OT=br.Pure,zT=br.Throw;function kT(n){return function(e){return br.Catch(n,e)}}function BT(n){return function(e){return e.tag===br.Pure.tag?br.Pure(n(e._1)):br.Bind(e,function(t){return br.Pure(n(t))})}}function HT(n){return function(e){return br.Bind(n,e)}}const VT=br.Sync,f_=br.Async;function GT(n,e){return function(){return br.Fiber(n,null,e)}}br.Seq;var WT=function(n){return n},$T=function(n){return n},XT=function(n){return function(e){return n(e)}},jT=function(n){var e=kt(n);return{map:function(t){return XT(e(function(i){return new Xt(t(i.value0),i.value1)}))}}},_x=function(n){var e=Ir(n);return function(t){var i=vs(t),a=t.Functor0(),s=kt(a),c=jT(a);return{apply:function(u){return function(d){var h=function(p){return function(v){return new Xt(p.value0(v.value0),e(p.value1)(v.value1))}};return i(s(h)(u))(d)}},Functor0:function(){return c}}}},yx=function(n){var e=Ir(n),t=_x(n);return function(i){var a=mn(i),s=i.Apply0(),c=kt(s.Functor0()),u=t(s);return{bind:function(d){return function(h){return a(d)(function(p){var v=h(p.value0);return c(function(g){return new Xt(g.value0,e(p.value1)(g.value1))})(v)})}},Apply0:function(){return u}}}},xx=function(n){var e=_s(n),t=_x(n.Semigroup0());return function(i){var a=Tt(i),s=t(i.Apply0());return{pure:function(c){return a(new Xt(c,e))},Apply0:function(){return s}}}},YT=function(n){var e=xx(n),t=yx(n.Semigroup0());return function(i){var a=e(i.Applicative0()),s=t(i.Bind1());return{Applicative0:function(){return a},Bind1:function(){return s}}}},qT=function(n){var e=n.Semigroup0(),t=YT(n);return function(i){var a=t(i);return{tell:(function(){var s=Tt(i.Applicative0()),c=Xt.create(kn);return function(u){return WT(s(c(u)))}})(),Semigroup0:function(){return e},Monad1:function(){return a}}}};const KT=function(n){return n()},ZT=function(n){throw new Error(n)};var JT=function(){return ZT},QT=JT(),eb=KT,d_=function(n){return eb(function(){return QT(n)})},tb=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},nb=Ey(a1),Sx={map:BT},rb=(function(){var n=function(i){if(i instanceof mt)return i.value0;if(i instanceof ct)return d_("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[i.constructor.name])},e=function(i){if(i instanceof ct)return i.value0;if(i instanceof mt)return d_("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[i.constructor.name])},t=function(i){if(i instanceof ct)return!0;if(i instanceof mt)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[i.constructor.name])};return{isLeft:t,fromLeft:e,fromRight:n,left:ct.create,right:mt.create}})(),ib=function(n){return GT(rb,n)},ob=function(n){return function(){var t=ib(n)();return t.run(),t}},Ex=function(n){return nb(ob(n))},ar={Applicative0:function(){return Il},Bind1:function(){return im}},im={bind:HT,Apply0:function(){return wx(0)}},Il={pure:OT,Apply0:function(){return wx(0)}},wx=tb("applyAff","Effect.Aff",function(){return{apply:kp(ar),Functor0:function(){return Sx}}}),ab=Tt(Il),Ul={liftEffect:VT,Monad0:function(){return ar}},sb={throwError:zT,Monad0:function(){return ar}},lb={catchError:kT,MonadThrow0:function(){return sb}},ub=zt(ab(kn));const cb=function(n){return function(){console.log(n)}};var nf=function(n){var e=$c(n);return function(t){return e(cb(t))}};function fb(n,e,t,i,a){return function(s,c){var u=n.newXHR(),d=n.fixupUrl(a.url,u);if(u.open(a.method||"GET",d,!0,a.username,a.password),a.headers)try{for(var h=0,p;(p=a.headers[h])!=null;h++)u.setRequestHeader(p.field,p.value)}catch(g){s(g)}var v=function(g){return function(){s(new Error(g))}};return u.onerror=v(t),u.ontimeout=v(e),u.onload=function(){c({status:u.status,statusText:u.statusText,headers:u.getAllResponseHeaders().split(`\r
`).filter(function(g){return g.length>0}).map(function(g){var S=g.indexOf(":");return i(g.substring(0,S))(g.substring(S+2))}),body:u.response})},u.responseType=a.responseType,u.withCredentials=a.withCredentials,u.timeout=a.timeout,u.send(a.content),function(g,S,E){try{u.abort()}catch(w){return S(w)}return E()}}}var Mx="application/json",db="application/x-www-form-urlencoded",hb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),pb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),vb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),gb=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ax=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Tx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_b=function(n){return n instanceof Ax?new Rt(db):n instanceof Tx?new Rt(Mx):Ut.value},h_=Dl(),om=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),am=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),bx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),yb=function(n){if(n instanceof om||n instanceof am)return h_(n.value0);if(n instanceof bx)return n.value1;throw new Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): "+[n.constructor.name])},p_=function(n){if(n instanceof om)return"Accept";if(n instanceof am)return"Content-Type";if(n instanceof bx)return n.value0;throw new Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): "+[n.constructor.name])},sm=Pr(Dr),Cx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Rx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Lx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),rf=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),lm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),um=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),xb=function(n){if(n instanceof Cx)return"arraybuffer";if(n instanceof Rx)return"blob";if(n instanceof Lx)return"document";if(n instanceof rf||n instanceof lm)return"text";if(n instanceof um)return"";throw new Error("Failed pattern match at Affjax.ResponseFormat (line 44, column 3 - line 50, column 19): "+[n.constructor.name])},Sb=function(n){return n instanceof rf?new Rt(Mx):Ut.value},Eb=(function(){return new lm(sm)})(),wb=(function(){return new rf(sm)})(),Mb=(function(){return new um(sm)})(),Ab=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})();function Tb(n,e,t){try{return e(JSON.parse(t))}catch(i){return n(i.message)}}var bb=function(n){return Tb(ct.create,mt.create,n)};function Cb(n){return n.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function Rb(n,e,t){try{return e(Cb(encodeURIComponent(t)).replace(/%20/g,"+"))}catch(i){return n(i)}}function Lb(n,e,t){try{return e(decodeURIComponent(t))}catch(i){return n(i)}}var th=(function(){return Zp(Rb)(zt(Ut.value))(Rt.create)})(),Pb=(function(){return Zp(Lb)(zt(Ut.value))(Rt.create)})(),Db=vs(Ry),m_=kt(Wc),Ib=Jp(Zc)(QM),Ub=function(n){return n},Nb=(function(){var n=function(i){if(i.value1 instanceof Ut)return th(i.value0);if(i.value1 instanceof Rt)return Db(m_(function(a){return function(s){return a+("="+s)}})(th(i.value0)))(th(i.value1.value0));throw new Error("Failed pattern match at Data.FormURLEncoded (line 37, column 16 - line 39, column 114): "+[i.constructor.name])},e=m_(mT("&")),t=Ib(n);return function(i){return e(t(Ub(i)))}})(),Fb=(function(){function n(){}return n.value=new n,n})(),Px=(function(){function n(){}return n.value=new n,n})(),Ob=(function(){function n(){}return n.value=new n,n})(),zb=(function(){function n(){}return n.value=new n,n})(),kb=(function(){function n(){}return n.value=new n,n})(),Bb=(function(){function n(){}return n.value=new n,n})(),Hb=(function(){function n(){}return n.value=new n,n})(),Vb=(function(){function n(){}return n.value=new n,n})(),Gb=(function(){function n(){}return n.value=new n,n})(),Wb=(function(){function n(){}return n.value=new n,n})(),$b=(function(){function n(){}return n.value=new n,n})(),Xb=(function(){function n(){}return n.value=new n,n})(),jb=(function(){function n(){}return n.value=new n,n})(),Yb=(function(){function n(){}return n.value=new n,n})(),qb=(function(){function n(){}return n.value=new n,n})(),Kb=(function(){function n(){}return n.value=new n,n})(),Zb=function(n){return n},Jb={show:function(n){if(n instanceof Fb)return"OPTIONS";if(n instanceof Px)return"GET";if(n instanceof Ob)return"HEAD";if(n instanceof zb)return"POST";if(n instanceof kb)return"PUT";if(n instanceof Bb)return"DELETE";if(n instanceof Hb)return"TRACE";if(n instanceof Vb)return"CONNECT";if(n instanceof Gb)return"PROPFIND";if(n instanceof Wb)return"PROPPATCH";if(n instanceof $b)return"MKCOL";if(n instanceof Xb)return"COPY";if(n instanceof jb)return"MOVE";if(n instanceof Yb)return"LOCK";if(n instanceof qb)return"UNLOCK";if(n instanceof Kb)return"PATCH";throw new Error("Failed pattern match at Data.HTTP.Method (line 43, column 1 - line 59, column 23): "+[n.constructor.name])}},Qb=bl(oa(Jb))(Zb),eC=(function(){var n=eT(uT);return function(e){return tT(n(e))}})(),tC=function(n){return n.value0};const nC=null;function rC(n){return n}var ju=gs(nC)(rC);const iC=function(e){return function(t){return e(t)()}};var oC=function(n){return f_(function(e){return function(){var i=n(function(a){return e(ct.create(a))()},function(a){return e(mt.create(a))()});return function(a){return f_(function(s){return function(){return i(a,function(u){return s(ct.create(u))()},function(u){return s(mt.create(u))()}),ub}})}}})};function v_(n){return Object.prototype.toString.call(n).slice(8,-1)}var aC=oa(qM),sC=oa(Op),Dx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Ix=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),lC=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),uC=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Ho=Ll,cC=Ll,tp=function(n){if(n instanceof Dx)return n.value0;if(n instanceof lC)return"Error at array index "+(sC(n.value0)+(": "+tp(n.value1)));if(n instanceof uC)return"Error at property "+(aC(n.value0)+(": "+tp(n.value1)));if(n instanceof Ix)return"Type mismatch: expected "+(n.value0+(", found "+n.value1));throw new Error("Failed pattern match at Foreign (line 78, column 1 - line 78, column 45): "+[n.constructor.name])},Ux=function(n){var e=Rl(Xc(n));return function(t){return e(eC(t))}},fC=function(n){var e=Tt(Mo(n)),t=Ux(n);return function(i){return function(a){return v_(a)===i?e(cC(a)):t(new Ix(i,v_(a)))}}},nh=Tt(Mo(wo)),dC=Ux(wo),Vo=fC(wo),g_=IM(T1(sT)(wo)),hC=wy(Pl(wo)),Yu=kt(Wc),pC=uA(Di)(Qh),mC=ci(es),vC=Up(Ly),gC=kt(Al),_C=MM(Sx),yC=s1(lb),xC=Tt(Il),Nx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Fx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Ox=(function(){function n(){}return n.value=new n,n})(),zx=(function(){function n(){}return n.value=new n,n})(),kx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),SC=function(n){return function(e){var t=function(p){return p===""?nh(kA):bl(function(v){return dC(Dx.create(v))})(nh)(bb(p))},i=(function(){if(e.responseFormat instanceof Cx)return Vo("ArrayBuffer");if(e.responseFormat instanceof Rx)return Vo("Blob");if(e.responseFormat instanceof Lx)return function(p){return g_(Vo("Document")(p))(g_(Vo("XMLDocument")(p))(Vo("HTMLDocument")(p)))};if(e.responseFormat instanceof rf)return hC(function(p){return e.responseFormat.value0(t(p))})(Vo("String"));if(e.responseFormat instanceof lm)return Vo("String");if(e.responseFormat instanceof um)return zt(e.responseFormat.value0(nh(kn)));throw new Error("Failed pattern match at Affjax (line 274, column 18 - line 283, column 57): "+[e.responseFormat.constructor.name])})(),a=function(p){if(p instanceof hb)return new mt(p.value0(Ho));if(p instanceof pb)return new mt(Ho(p.value0));if(p instanceof mb)return new mt(Ho(p.value0));if(p instanceof vb)return new mt(Ho(p.value0));if(p instanceof gb)return new mt(Ho(p.value0));if(p instanceof Ax)return as("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(Yu(Ho)(Nb(p.value0)));if(p instanceof Tx)return new mt(Ho(Ky(p.value0)));throw new Error("Failed pattern match at Affjax (line 235, column 20 - line 250, column 69): "+[p.constructor.name])},s=function(p){return function(v){return p instanceof Rt&&!pC(EM(mC)(p_)(p.value0))(v)?gA(v)(p.value0):v}},c=function(p){return s(Yu(am.create)(vC(_b)(p)))(s(Yu(om.create)(Sb(e.responseFormat)))(e.headers))},u=function(p){return{method:Qb(e.method),url:e.url,headers:gC(function(v){return{field:p_(v),value:yb(v)}})(c(e.content)),content:p,responseType:xb(e.responseFormat),username:ju(e.username),password:ju(e.password),withCredentials:e.withCredentials,timeout:Cy(0)(Yu(function(v){return v})(e.timeout))}},d=function(p){return _C(yC(oC(fb(n,"AffjaxTimeoutErrorMessageIdent","AffjaxRequestFailedMessageIdent",Ab.create,u(p)))))(function(v){if(v instanceof mt){var g=Yp(i(v.value0.body));if(g instanceof ct)return new ct(new Fx(tC(g.value0),v.value0));if(g instanceof mt)return new mt({headers:v.value0.headers,status:v.value0.status,statusText:v.value0.statusText,body:g.value0});throw new Error("Failed pattern match at Affjax (line 209, column 9 - line 211, column 52): "+[g.constructor.name])}if(v instanceof ct)return new ct((function(){var S=Fy(v.value0),E=S==="AffjaxTimeoutErrorMessageIdent";if(E)return Ox.value;var w=S==="AffjaxRequestFailedMessageIdent";return w?zx.value:new kx(v.value0)})());throw new Error("Failed pattern match at Affjax (line 207, column 144 - line 219, column 28): "+[v.constructor.name])})};if(e.content instanceof Ut)return d(ju(Ut.value));if(e.content instanceof Rt){var h=a(e.content.value0);if(h instanceof mt)return d(ju(new Rt(h.value0)));if(h instanceof ct)return xC(new ct(new Nx(h.value0)));throw new Error("Failed pattern match at Affjax (line 199, column 7 - line 203, column 48): "+[h.constructor.name])}throw new Error("Failed pattern match at Affjax (line 195, column 3 - line 203, column 48): "+[e.content.constructor.name])}},Bx=function(n){if(n instanceof Nx)return"There was a problem with the request content: "+n.value0;if(n instanceof Fx)return"There was a problem with the response body: "+tp(n.value0);if(n instanceof Ox)return"There was a problem making the request: timeout";if(n instanceof zx)return"There was a problem making the request: request failed";if(n instanceof kx)return"There was a problem making the request: "+Fy(n.value0);throw new Error("Failed pattern match at Affjax (line 113, column 14 - line 123, column 66): "+[n.constructor.name])},Go=(function(){return{method:new ct(Px.value),url:"/",headers:[],content:Ut.value,username:Ut.value,password:Ut.value,withCredentials:!1,responseFormat:Mb,timeout:Ut.value}})(),EC=function(n){return function(e){return function(t){return SC(n)({method:Go.method,headers:Go.headers,content:Go.content,username:Go.username,password:Go.password,withCredentials:Go.withCredentials,timeout:Go.timeout,url:t,responseFormat:e})}}},wC=oa(Op),MC={show:function(n){return"(StatusCode "+(wC(n)+")")}},AC={eq:function(n){return function(e){return n===e}}};const TC={newXHR:function(){return new XMLHttpRequest},fixupUrl:function(n){return n||"/"}};var Hx=EC(TC),bC=Hy(Gy),CC={liftAff:Pr(Dr),MonadEffect0:function(){return Ul}},Vx=function(n){return n.liftAff},RC=function(n){var e=n.MonadEffect0(),t=$p(e);return{liftAff:(function(){var i=bC(e.Monad0()),a=Vx(n);return function(s){return i(a(s))}})(),MonadEffect0:function(){return t}}};const LC=function(n){return function(e){return e.join(n)}};var PC=Ir(Tl),DC={genericShowArgs:function(n){return[]}},IC=function(n){return n.genericShowArgs},UC=function(n){var e=IC(n);return function(t){var i=Yr(t);return{"genericShow'":function(a){var s=i(Dt.value),c=e(a);return c.length===0?s:"("+(LC(" ")(PC([s])(c))+")")}}}},np=function(n){return n["genericShow'"]},ei=function(n){var e=np(n);return function(t){var i=np(t);return{"genericShow'":function(a){if(a instanceof ln)return e(a.value0);if(a instanceof He)return i(a.value0);throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): "+[a.constructor.name])}}}},NC=function(n){var e=zp(n);return function(t){var i=np(t);return function(a){return i(e(a))}}},Br=UC(DC),Gx=(function(){function n(){}return n.value=new n,n})(),Wx=(function(){function n(){}return n.value=new n,n})(),$x=(function(){function n(){}return n.value=new n,n})(),Xx=(function(){function n(){}return n.value=new n,n})(),jx=(function(){function n(){}return n.value=new n,n})(),rp=(function(){function n(){}return n.value=new n,n})(),FC=(function(){function n(){}return n.value=new n,n})(),OC=(function(){function n(){}return n.value=new n,n})(),zC=(function(){function n(){}return n.value=new n,n})(),kC=(function(){function n(){}return n.value=new n,n})(),BC=(function(){function n(){}return n.value=new n,n})(),HC={from:function(n){if(n instanceof Gx)return new ln(nr.value);if(n instanceof Wx)return new He(new ln(nr.value));if(n instanceof $x)return new He(new He(new ln(nr.value)));if(n instanceof Xx)return new He(new He(new He(new ln(nr.value))));if(n instanceof jx)return new He(new He(new He(new He(new ln(nr.value)))));if(n instanceof rp)return new He(new He(new He(new He(new He(new ln(nr.value))))));if(n instanceof FC)return new He(new He(new He(new He(new He(new He(new ln(nr.value)))))));if(n instanceof OC)return new He(new He(new He(new He(new He(new He(new He(new ln(nr.value))))))));if(n instanceof zC)return new He(new He(new He(new He(new He(new He(new He(new He(new ln(nr.value)))))))));if(n instanceof kC)return new He(new He(new He(new He(new He(new He(new He(new He(new He(new ln(nr.value))))))))));if(n instanceof BC)return new He(new He(new He(new He(new He(new He(new He(new He(new He(new He(nr.value))))))))));throw new Error("Failed pattern match at GCodeViewer.Error (line 30, column 1 - line 30, column 34): "+[n.constructor.name])}},VC={show:NC(HC)(ei(Br({reflectSymbol:function(){return"Err1"}}))(ei(Br({reflectSymbol:function(){return"Err2"}}))(ei(Br({reflectSymbol:function(){return"Err3"}}))(ei(Br({reflectSymbol:function(){return"Err4"}}))(ei(Br({reflectSymbol:function(){return"Err5"}}))(ei(Br({reflectSymbol:function(){return"Err6"}}))(ei(Br({reflectSymbol:function(){return"XErr7"}}))(ei(Br({reflectSymbol:function(){return"XErr8"}}))(ei(Br({reflectSymbol:function(){return"XErr9"}}))(ei(Br({reflectSymbol:function(){return"XErr10"}}))(Br({reflectSymbol:function(){return"ErrX"}}))))))))))))},GC=oa(VC),fl=function(n){return"Error: "+(n.message+(" ("+(GC(n.code)+")")))},ns=function(n){return function(e){return{message:e,code:n}}},WC=function(n){var e=n.MonadThrow0(),t=Rl(e),i=Tt(e.Monad0().Applicative0());return function(a){return function(s){if(s instanceof ct)return t(a(s.value0));if(s instanceof mt)return i(s.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 43, column 28 - line 45, column 20): "+[s.constructor.name])}}},$C=function(n){var e=Rl(n.MonadThrow0());return function(t){var i=t.MonadEffect0().Monad0(),a=mn(i.Bind1()),s=Vx(t),c=Tt(i.Applicative0());return function(u){return function(d){return a(s(d))(function(h){if(h instanceof ct)return e(u(h.value0));if(h instanceof mt)return c(h.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 38, column 3 - line 40, column 22): "+[h.constructor.name])})}}}},XC=tf(qy(aa)),jC=Dl(),YC=b1(),qC=LT(),Cc=function(n){return n},KC=function(n){return n},cm=function(){return function(n){var e=qC(n);return function(t){var i=Yr(t);return function(a){return XC(jC)(YC)(e(i(Dt.value))(a))}}}},Yx=Pl(ar),ip=mn(Yx),qx=Xp(ar),Kx=$C(qx)(RC(CC)),Zx=Vc(Gc)(Yx),Jx=Mo(ar),Qx=Ip(Jx),eS=Ty(AC),tS=Rl(Xc(ar)),nS=oa(MC),rS=Tt(Jx),ZC=WC(qx),JC=function(n){return ip(Kx((function(){var e=ns(Xx.value);return function(t){return e(Bx(t))}})())(Hx(Eb)(n)))(function(e){return Zx(Qx(eS(e.status)(200))(tS(ns(jx.value)(nS(e.status)))))(function(){return rS(e.body)})})},QC=cm()(Qo(Qo(Qo(rm)()()({reflectSymbol:function(){return"pictures"}}))()()({reflectSymbol:function(){return"name"}}))()()({reflectSymbol:function(){return"gcode"}}))({reflectSymbol:function(){return"IndexFileItem"}})({name:Tr,gcode:Tr,pictures:ef(Tr)}),fm=ef(QC),eR=function(n){return ip(Kx((function(){var e=ns(Gx.value);return function(t){return e(Bx(t))}})())(Hx(wb)(n.url)))(function(e){return Zx(Qx(eS(e.status)(200))(tS(ns($x.value)(nS(e.status)))))(function(){return ip(ZC((function(){var t=ns(Wx.value);return function(i){return t(MT(i))}})())(Rn(fm)(e.body)))(function(t){return rS(t)})})})},tR=function(n){return function(e){var t=tf(e.Profunctor0()),i=PT(e);return function(a){return t(n)(function(s){return s.value1(s.value0)})(i(a))}}},nR=function(n){return function(e){return function(t){return tR(function(i){return new Xt(n(i),function(a){return e(i)(a)})})(t)}}},iS=function(n){var e=Ao(n)(),t=TT(n)()();return function(){return function(){return function(i){return function(a){return nR(e(i))(ai(t(i)))(a)}}}}},of=function(n){var e=iS(n)()();return function(){return function(){return function(t){return e(Dt.value)(t)}}}},Cr=jy(Yy),zn=mn(Cl),uo=Tt(sa),rR=kt(aa),iR=tf(qy(aa)),__=ix(Di),oR=Pr(Dr),Rc=Ip(sa),dl=Vc(Gc)(Cl),y_=Ty(Pc(HA)),Nl=(function(){function n(){}return n.value=new n,n})(),un=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),af=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),aR=function(n){return function(){return function(){return function(e){return function(t){return t}}}}},op=function(n){return n.gCasesEncode},ap=function(n){return n.gCasesDecode},rh=function(n){var e=op(n),t=ap(n);return function(i){var a=op(i),s=ap(i);return function(){return function(){return function(){return function(){return function(c){var u=aR()()(),d=Ao(c)(),h=px(c)()(),p=bT(c)()();return{gCasesEncode:function(v){return function(g){var S=u(Dt.value)(g),E=d(Dt.value)(g),w=h(Dt.value)(E)({});return function(x){if(x instanceof ln)return e(v)(w)(x.value0);if(x instanceof He)return a(v)(S)(x.value0);throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 244, column 7 - line 246, column 47): "+[x.constructor.name])}}},gCasesDecode:function(v){return function(g){return function(S){var E=p(Dt.value)(g),w=d(Dt.value)(g),x=h(Dt.value)(w)({}),_=function(R){return s(v)(E)(S)},C=function(R){return t(v)(x)(S)},M=C();if(M instanceof ct&&M.value0 instanceof Nl)return rR(He.create)(_());if(M instanceof ct&&M.value0 instanceof un)return new ct(new un(M.value0.value0));if(M instanceof mt)return new mt(new ln(M.value0));throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 257, column 5 - line 260, column 34): "+[M.constructor.name])}}}}}}}}}}},sR=function(n){return function(e){return new nm(n,(function(){if(e instanceof Nl)return new si("No case matched");if(e instanceof un)return e.value0;throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 147, column 5 - line 149, column 23): "+[e.constructor.name])})())}},lR=function(n){var e=op(n),t=ap(n);return function(i){var a=zp(i),s=KM(i);return function(c){return function(u){return function(d){var h=e(c)(d),p=(function(){var v=Cr(sR(u)),g=t(c)(d);return function(S){return v(g(S))}})();return iR(a)(s)(Yc(p)(h))}}}}},oS=function(n){return function(e){return function(t){if(n instanceof dm){var i=(function(){return t.length===0?tn(ho)([]):t.length===1&&n.value0.unwrapSingleArguments?t[0]:tn(ho)(t)})(),a=n.value0.mapTag(e);return tn(go)(__([new Xt(a,i)]))}if(n instanceof af){var s=(function(){return t.length===0&&n.value0.omitEmptyArguments?Ut.value:t.length===1&&n.value0.unwrapSingleArguments?new Rt(new Xt(n.value0.valuesKey,t[0])):new Rt(new Xt(n.value0.valuesKey,tn(ho)(t)))})(),a=n.value0.mapTag(e),c=new Rt(new Xt(n.value0.tagKey,tn(Tr)(a)));return tn(go)(__(bA([c,s])))}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 403, column 3 - line 428, column 33): "+[n.constructor.name])}}},uR=(function(){return new af({tagKey:"tag",valuesKey:"values",unwrapSingleArguments:!1,omitEmptyArguments:!1,mapTag:oR})})(),cR=function(n){return function(e){return lR(e)(n)(uR)}},aS=function(n){return function(e){return function(t){return zn(Cr(un.create)(as(new si("Expecting a tag property `"+(n+"`")))(ss(n)(e))))(function(i){return zn(Cr(un.create)(Rn(Tr)(i)))(function(a){return Rc(a!==t)(new ct(Nl.value))})})}}},fR=function(n){return function(e){return function(t){if(n instanceof dm){var i=n.value0.mapTag(t);return zn(Cr(un.create)(Rn(go)(e)))(function(a){return zn(as(Nl.value)(ss(i)(a)))(function(s){return zn(Cr(un.create)(Rn(ho)(s)))(function(c){return dl(Rc(y_(c)([]))(new ct(new un(new si("Expecting an empty array")))))(function(){return uo(kn)})})})})}if(n instanceof af){var i=n.value0.mapTag(t);return zn(Cr(un.create)(Rn(go)(e)))(function(s){return dl(aS(n.value0.tagKey)(s)(i))(function(){return Rc(!n.value0.omitEmptyArguments)(zn(as(new un(new si("Expecting a value property `"+(n.value0.valuesKey+"`"))))(ss(n.value0.valuesKey)(s)))(function(c){return zn(Cr(un.create)(Rn(ho)(c)))(function(u){return dl(Rc(y_(u)([]))(new ct(new un(new si("Expecting an empty array")))))(function(){return uo(kn)})})}))})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 320, column 3 - line 346, column 18): "+[n.constructor.name])}}},dR=function(){return function(n){var e=Yr(n);return{gCasesEncode:function(t){return function(i){return function(a){var s=e(Dt.value);return oS(t)(s)([])}}},gCasesDecode:function(t){return function(i){return function(a){var s=e(Dt.value);return dl(fR(t)(a)(s))(function(){return uo(nr.value)})}}}}}},hR=function(n){return function(e){return function(t){if(n instanceof dm){var i=n.value0.mapTag(t);return zn(Cr(un.create)(Rn(go)(e)))(function(a){return zn(as(Nl.value)(ss(i)(a)))(function(s){return n.value0.unwrapSingleArguments?uo(s):zn(Cr(un.create)(Rn(ho)(s)))(function(c){return c.length===1?uo(c[0]):new ct(new un(new si("Expecting exactly one element")))})})})}if(n instanceof af){var i=n.value0.mapTag(t);return zn(Cr(un.create)(Rn(go)(e)))(function(s){return dl(aS(n.value0.tagKey)(s)(i))(function(){return zn(as(new un(new si("Expecting a value property `"+(n.value0.valuesKey+"`"))))(ss(n.value0.valuesKey)(s)))(function(c){return n.value0.unwrapSingleArguments?uo(c):zn(Cr(un.create)(Rn(ho)(c)))(function(u){return u.length===1?uo(u[0]):new ct(new un(new si("Expecting exactly one element")))})})})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 349, column 49 - line 378, column 71): "+[n.constructor.name])}}},pR=function(){return function(n){var e=Yr(n),t=Ao(n)();return{gCasesEncode:function(i){return function(a){return function(s){var c=e(Dt.value),u=t(Dt.value)(a);return oS(i)(c)([tn(u)(s)])}}},gCasesDecode:function(i){return function(a){return function(s){var c=e(Dt.value);return zn(hR(i)(s)(c))(function(u){var d=t(Dt.value)(a);return zn(Cr(un.create)(Rn(d)(u)))(function(h){return uo(h)})})}}}}}},mR=Al,vR=Di,gR=function(){return function(n){var e=Ao(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Dt.value)(t),s=a(i);return s}}}}},sp=function(n){return n.mkMatcherRep},_R=function(n){return n.mkMatcher1},yR=function(){return function(n){var e=Ao(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Dt.value)(t),s=a(kn);return s}}}}},xR=function(n){var e=zp(n);return function(t){var i=sp(t);return{mkMatcher1:function(a,s){return i(s)(e(a))}}}},SR=function(){return Ll},ER=SR(),wR=function(){return Ll},MR=wR(),ih=function(n){var e=sp(n);return function(t){var i=sp(t);return function(){return{mkMatcherRep:function(a){return function(s){var c=(function(){if(s instanceof ln)return e(MR(a))(s.value0);if(s instanceof He)return i(ER(a))(s.value0);throw new Error("Failed pattern match at Stadium.TL (line 159, column 11 - line 161, column 76): "+[s.constructor.name])})();return c}}}}}},x_=yR(),lp={reflectSymbol:function(){return"NotAsked"}},up={reflectSymbol:function(){return"Loading"}},S_=gR(),cp={reflectSymbol:function(){return"Loaded"}},sS={reflectSymbol:function(){return"Error"}},E_=dR(),w_=pR(),ls=(function(){function n(){}return n.value=new n,n})(),_o=(function(){function n(){}return n.value=new n,n})(),us=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),cs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),lS={to:function(n){if(n instanceof ln)return ls.value;if(n instanceof He&&n.value0 instanceof ln)return _o.value;if(n instanceof He&&n.value0 instanceof He&&n.value0.value0 instanceof ln)return new us(n.value0.value0.value0);if(n instanceof He&&n.value0 instanceof He&&n.value0.value0 instanceof He)return new cs(n.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])},from:function(n){if(n instanceof ls)return new ln(nr.value);if(n instanceof _o)return new He(new ln(nr.value));if(n instanceof us)return new He(new He(new ln(n.value0)));if(n instanceof cs)return new He(new He(new He(n.value0)));throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])}},AR=cR(lS)(rh(E_(lp))(rh(E_(up))(rh(w_(cp))(w_(sS))()()()()(cp))()()()()(up))()()()()(lp)),uS=function(n){var e=ci(n);return{eq:function(t){return function(i){return t instanceof ls&&i instanceof ls||t instanceof _o&&i instanceof _o?!0:t instanceof us&&i instanceof us?e(t.value0)(i.value0):t instanceof cs&&i instanceof cs?t.value0===i.value0:!1}}}},cS=_R(xR(lS)(ih(x_(lp))(ih(x_(up))(ih(S_(cp))(S_(sS))())())())),sf=function(n){return AR("RemoteData")({NotAsked:kn,Loading:kn,Loaded:n,Error:Tr})};const TR=n=>()=>{console.log(...n)};var bR=nf(E1),CR=Tt(Bp),oh=Ir(Tl),hm=function(n){var e=iS(n)()();return function(){return function(){return function(t){return e(Dt.value)(t)}}}},RR=hm({reflectSymbol:function(){return"history"}})()()(la),LR=hm({reflectSymbol:function(){return"historyIndex"}})()()(la),PR=hm({reflectSymbol:function(){return"pubState"}})()()(la),fS=function(n){var e=function(i){var a=function(s){return function(c){return i.updateState(function(u){var d=n.updatePubState(c)(u.pubState);if(d instanceof ct)return function(){return bR(d.value0)(),u};if(d instanceof mt){var h=n.encodeMsg(c);return function(){return TR(oh([tn(Tr)("%c"+h.tag),tn(Tr)("color: white; background: #cc8a21; padding: 2px 4px;")])(oh(gs([])(function(v){return[tn(Tr)("@"+v)]})(s))([h.args,tn(Tr)(`
newState`),n.encodeJsonPubState(d.value0)])))(),gx(RR)(function(v){return oh(v)([{msg:c,pubState:d.value0}])})(ts(LR)(u.historyIndex+1)(ts(PR)(d.value0)(u)))}}throw new Error("Failed pattern match at Stadium.Core (line 103, column 31 - line 126, column 16): "+[d.constructor.name])})}};return{emitMsg:a(Ut.value),emitMsgCtx:function(s){return a(new Rt(s))},readPubState:function(){var c=i.readState();return c.pubState},readPrivState:function(){var c=i.readState();return c.privState},updatePrivState:function(s){return i.updateState(function(c){return CR({pubState:c.pubState,history:c.history,historyIndex:c.historyIndex,privState:s(c.privState)})})}}},t={history:[],historyIndex:0,pubState:n.initPubState,privState:n.initPrivState};return{dispatchers:function(i){return n.dispatchers(e(i))},initState:t,timeTravel:function(i){return kn}}};const dS=n=>()=>{const[e,t]=Ve.useState({state:n.initState}),i={updateState:c=>()=>t(u=>(u.state=c(u.state)(),{...u})),readState:()=>e.state},a=n.dispatchers(i);return{state:e.state.pubState,dispatch:a}},DR=(n,e,t)=>{const i=Ve.useRef(0),a=Ve.useRef(t);return a.current=t,i.current=e(a.current,t)?i.current:i.current+1,Ve.useEffect(()=>n(),[i.current])};var ah=Tt(Mo(wo)),sh=vx(),hS={reflectSymbol:function(){return"startLayer"}},IR=of(hS)()()(la),pS={reflectSymbol:function(){return"endLayer"}},UR=of(pS)()()(la),mS={reflectSymbol:function(){return"gcodeLines"}},NR=of(mS)()()(la),FR={reflectSymbol:function(){return"PubState"}},OR=mn(im),zR=nf(Ul),kR=Tt(Il),vS=$p(Ul),M_=$c(vS),BR=Hp(Xp(ar)),gS=Pl(ar),A_=mn(gS),lh=Vc(Gc)(gS),_S=Mo(ar),HR=Ip(_S),VR=ci(uS(Pc(es))),GR=Rl(Xc(ar)),WR=nf(vS),$R=Tt(_S),XR=Pr(Dr),pm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),mm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),hl=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),jR=function(n){return function(e){if(n instanceof pm)return ah(ts((function(){var t=sh(Cc)(cl);return function(i){return t(IR(i))}})())(n.value0)(e));if(n instanceof mm)return ah(ts((function(){var t=sh(Cc)(cl);return function(i){return t(UR(i))}})())(n.value0)(e));if(n instanceof hl)return ah(ts((function(){var t=sh(Cc)(cl);return function(i){return t(NR(i))}})())(n.value0)(e));throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 60, column 31 - line 71, column 11): "+[n.constructor.name])}},YR=function(n){return{gcodeLines:ls.value,startLayer:n.startLayer,endLayer:n.endLayer}},qR=function(n){if(n instanceof pm)return{tag:"MsgSetStartLayer",args:tn(Ic)(n.value0)};if(n instanceof mm)return{tag:"MsgSetEndLayer",args:tn(Ic)(n.value0)};if(n instanceof hl)return{tag:"MsgSetGcodeLines",args:tn(sf(ef(Tr)))(n.value0)};throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 74, column 13 - line 86, column 6): "+[n.constructor.name])},KR=function(n){var e=function(a){return function(s){return Ex(OR(Gp(a(s)))(function(c){if(c instanceof ct)return zR(fl(c.value0));if(c instanceof mt)return kR(kn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 133, column 5 - line 135, column 27): "+[c.constructor.name])}))()}},t=function(a){var s=(function(){var c=n.emitMsgCtx("loadGcodeLines");return function(u){return M_(c(u))}})();return BR(A_(M_(n.readPubState))(function(c){return lh(HR(VR(c.gcodeLines)(_o.value))(GR(ns(rp.value)("Gcode lines are already loading"))))(function(){return lh(s(new hl(_o.value)))(function(){return A_(JC(a.url))(function(u){var d=ux(`
`)(u);return s(new hl(new us(d)))})})})}))(function(c){return lh(WR(fl(c)))(function(){return c.code instanceof rp?$R(kn):s(new hl(new cs(fl(c))))})})},i=function(a){return function(s){return n.emitMsg(a(s))()}};return{emitSetStartLayer:i(pm.create),emitSetEndLayer:i(mm.create),runLoadGcodeLines:e(t)}},ZR=cm()(Qo(Qo(Qo(rm)()()(hS))()()(mS))()()(pS))(FR)({gcodeLines:sf(ef(Tr)),startLayer:Ic,endLayer:Ic}),JR=function(n){return fS({updatePubState:function(e){return function(t){return Yp(jR(e)(t))}},dispatchers:KR,initPubState:YR(n),initPrivState:{},printError:XR,encodeJsonPubState:tn(ZR),encodeMsg:qR})},QR=function(n){return dS(JR(n))()};const eL=()=>window.location.search;var tL=Dl(),nL=function(n){return tL($T(n))},yS=function(n){return n.bitraverse},rL=function(n){var e=yS(n);return function(t){var i=e(t),a=Tt(t);return function(s){return i(s)(a)}}},xS={bitraverse:function(n){var e=n.Apply0(),t=vs(e),i=kt(e.Functor0());return function(a){return function(s){return function(c){return t(i(Xt.create)(a(c.value0)))(s(c.value1))}}}}},iL=function(n,e,t){var i=0,a;return function(s){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+s+")",e,s);return i=1,a=t(),i=2,a}},T_=yS(xS)(sa),b_=Jp(Zc)(sa),oL=lA(Di)(es),aL=kt(mR),sL=kt(AM),lL=Kp(vR),uL=RM(Cl),cL=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),fL=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dL=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),SS=(function(){function n(){}return n.value=new n,n})(),Rr=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),yo=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),fp=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),fs=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),dp=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),hL=(function(){var n=function(v){return{segments:v.value0.value0,params:v.value0.value1,hash:v.value1}},e=function(v){return function(g){return g===""?[]:ux(v)(g)}},t=function(v){return function(g){return function(S){var E=pT(g)(S);if(E instanceof Rt)return new Xt(dT(E.value0)(S),hT(E.value0+cT(g)|0)(S));if(E instanceof Ut)return v(S);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 191, column 5 - line 193, column 23): "+[E.constructor.name])}}},i=function(v){var g=Pb(v);if(g instanceof Ut)return new ct(new dL(v));if(g instanceof Rt)return new mt(g.value0);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 195, column 29 - line 197, column 22): "+[g.constructor.name])},a=(function(){var v=T_(i)(i),g=t(ai(Xt.create)(""))("=");return function(S){return v(g(S))}})(),s=(function(){var v=b_(a),g=e("&");return function(S){return v(g(S))}})(),c=(function(){var v=e("/");return function(g){return(function(S){return S.length===2&&S[0]===""&&S[1]===""?new mt([""]):b_(i)(S)})(v(g))}})(),u=(function(){var v=T_(c)(s),g=t(ai(Xt.create)(""))("?");return function(S){return v(g(S))}})(),d=kt(aa)(n),h=rL(xS)(sa)(u),p=t(ai(Xt.create)(""))("#");return function(v){return d(h(p(v)))}})(),pL=function(n){return new fs(function(e){var t=oL(n)(e.params);return t instanceof Rt?new yo(e,t.value0):new Rr(new fL(n))})},mL={map:function(n){return function(e){if(e instanceof Rr)return new Rr(e.value0);if(e instanceof yo)return new yo(e.value0,n(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},ES=kt(mL),hp={map:function(n){return function(e){if(e instanceof fp)return new fp(aL(kt(hp)(n))(e.value0));if(e instanceof fs)return new fs(sL(ES(n))(e.value0));if(e instanceof dp)return new dp(e.value0,kt(hp)(n)(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},vL=function(n){return function(e){var t=SA(e.segments);return t instanceof Rt&&n===t.value0?new yo({params:e.params,hash:e.hash,segments:wA(1)(e.segments)},kn):t instanceof Rt?new Rr(new cL(n,t.value0)):new Rr(SS.value)}},wS=iL("runRouteParser","Routing.Duplex.Parser",function(){var n=function(t){return function(i){return function(a){return i instanceof Rr?wS(161)(t)(a):i}}},e=function(t){return function(i){var a=t,s=!1,c;function u(d,h){if(h instanceof fp)return s=!0,lL(n(d))(new Rr(SS.value))(h.value0);if(h instanceof fs)return s=!0,h.value0(d);if(h instanceof dp){var p=vL(h.value0)(d);if(p instanceof Rr)return s=!0,new Rr(p.value0);if(p instanceof yo){a=p.value0,i=h.value1;return}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 157, column 7 - line 159, column 40): "+[p.constructor.name])}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 153, column 14 - line 159, column 40): "+[h.constructor.name])}for(;!s;)c=u(a,i);return c}};return e}),pp=wS(150),gL=function(n){return uL(hL)((function(){var e=ai(pp)(n);return function(t){return(function(i){if(i instanceof Rr)return new ct(i.value0);if(i instanceof yo)return new mt(i.value1);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 200, column 49 - line 202, column 29): "+[i.constructor.name])})(e(t))}})())},_L={apply:function(n){return function(e){return new fs(function(t){var i=pp(t)(n);if(i instanceof Rr)return new Rr(i.value0);if(i instanceof yo)return ES(i.value1)(pp(i.value0)(e));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 81, column 5 - line 83, column 56): "+[i.constructor.name])})}}},yL={pure:(function(){var n=ai(yo.create);return function(e){return fs.create(n(e))}})()},MS={append:function(n){return function(e){return function(t){return e(n(t))}}}},xL=function(n){return function(e){return function(t){return{segments:t.segments,hash:t.hash,params:MA(new Xt(n,e))(t.params)}}}},SL={mempty:Pr(Dr),Semigroup0:function(){return MS}},EL=Ir(MS),wL=Tt(yL),AS=Pr(Dr),ML=vs(_L),AL=kt(hp),vm=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),TL=AS,bL=(function(){return new vm(_s(r1(SL)),wL({}))})(),CL=function(n){var e=Ao(n)(),t=px(n)()();return function(){return function(){return function(){return function(i){return function(a){return function(s){return new vm(function(c){return EL(s.value0(c))(a.value0(e(i)(c)))},ML(AL(ai(t(i)))(s.value1))(a.value1))}}}}}}},RL=function(n){return gL(n.value1)},LL=function(n){return n.params},PL=function(n){return new vm(xL(n),pL(n))},DL={buildParams:function(n){return function(e){return AS}}},TS=function(n){return n.buildParams},IL=function(n){var e=CL(n)()()(),t=Ao(n)(),i=Yr(n);return function(){return function(){return function(){return function(){return function(a){var s=TS(a);return{buildParams:function(c){return function(u){return function(d){return s(Dt.value)(u)(e(Dt.value)(t(Dt.value)(u)(PL(i(Dt.value))))(d))}}}}}}}}}},UL=function(){return function(n){var e=TS(n);return{params:function(t){return e(Dt.value)(t)(bL)}}}},NL=Tt(Mo(wo)),FL=vx(),bS={reflectSymbol:function(){return"index"}},OL=of(bS)()()(la),zL=mn(im),kL=nf(Ul),BL=Tt(Il),CS=Vc(Gc),RS=yx(Tl)(zy),HL=CS(RS),VL=S1(qT(Dy)(wo)),uh=Tt(xx(Dy)(ky)),GL=mn(RS),WL={reflectSymbol:function(){return"url"}},$L=UL()(IL(WL)()()()()(DL)),LS=Pl(ar),C_=mn(LS),qu=$c($p(Ul)),XL={reflectSymbol:function(){return"pictures"}},jL={reflectSymbol:function(){return"name"}},YL={reflectSymbol:function(){return"gcode"}},qL=ci(uS(Pc(KC(BM()(Jd(Jd(Jd(kM)()(XL)(Pc(es)))()(jL)(es))()(YL)(es)))))),KL=Tt(Mo(ar)),ZL=Hp(Xp(ar)),JL=CS(LS),QL={reflectSymbol:function(){return"PubState"}},ch=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),eP=function(n){return function(e){return NL(ts((function(){var t=FL(Cc)(cl);return function(i){return t(OL(i))}})())(n.value0)(e))}},tP=function(n){return function(e){return Ex(zL(Gp(n(e)))(function(t){if(t instanceof ct)return kL(fl(t.value0));if(t instanceof mt)return BL(kn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 105, column 3 - line 107, column 25): "+[t.constructor.name])}))()}},nP=function(n){var e=function(t){var i=LL(t);return function(a){return function(s){return function(c){var u=RL(i(s))(c);if(u instanceof ct)return HL(VL([u.value0]))(function(){return uh(a)});if(u instanceof mt)return uh(u.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 165, column 21 - line 169, column 22): "+[u.constructor.name])}}}};return nL(GL(e($L)({url:"index.json"})({url:TL})(n))(function(t){return uh({url:t.url})}))},rP=(function(){return{index:ls.value}})(),iP=function(){var e=eL(),t=nP(e);return t.value0},oP=function(n){return{tag:"MsgSetIndex",args:tn(sf(fm))(n.value0)}},aP=function(n){var e=function(t){return C_(qu(n.readPubState))(function(i){var a=qL(i.index)(_o.value);return a?KL(kn):ZL(JL(qu(n.emitMsg(new ch(_o.value))))(function(){return C_(eR({url:t.url}))(function(s){return qu(n.emitMsg(new ch(new us(s))))})}))(function(s){return qu(n.emitMsg(new ch(new cs(fl(s)))))})})};return{msg:iC(n.emitMsg),runFetchIndex:tP(e)}},sP=cm()(Qo(rm)()()(bS))(QL)({index:sf(fm)}),lP=fS({updatePubState:function(n){return function(e){return Yp(eP(n)(e))}},dispatchers:aP,initPubState:rP,initPrivState:{},printError:Pr(Dr),encodeJsonPubState:tn(sP),encodeMsg:oP}),uP=dS(lP);const cP="0.0.4",fP="0.0.13",dP="_root_6ggp7_1",hP="_version_6ggp7_5",Ku=({children:n,viewErrors:e,viewInfo:t})=>tt.jsxs("div",{className:dP,children:[tt.jsx("div",{children:n}),tt.jsx("div",{children:e}),tt.jsx("div",{children:t}),tt.jsxs("div",{className:hP,children:[cP," - ",fP]})]}),pP="_root_xmkgg_1",mP={root:pP},vP=({items:n})=>tt.jsx("div",{className:mP.root,children:n.map(e=>e)}),gP="_root_1pmvk_1",_P="_slider_1pmvk_13",yP="_label_1pmvk_22",xP=({viewPictures:n,viewGcode:e,viewSlider:t,item:i})=>tt.jsxs("div",{className:gP,children:[tt.jsx("div",{className:yP,children:i.name}),n,e,tt.jsx("div",{className:_P,children:t})]}),SP="_root_1b3ad_1",EP=({pictures:n})=>tt.jsx("div",{className:SP});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lf="159",Ia={ROTATE:0,DOLLY:1,PAN:2},Ua={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wP=0,R_=1,MP=2,PS=1,AP=2,bi=3,xo=0,ir=1,Ci=2,po=0,rs=1,L_=2,P_=3,D_=4,TP=5,Ko=100,bP=101,CP=102,I_=103,U_=104,RP=200,LP=201,PP=202,DP=203,mp=204,vp=205,IP=206,UP=207,NP=208,FP=209,OP=210,zP=211,kP=212,BP=213,HP=214,VP=0,GP=1,WP=2,Uc=3,$P=4,XP=5,jP=6,YP=7,gm=0,qP=1,KP=2,mo=0,ZP=1,JP=2,QP=3,e2=4,t2=5,DS=300,ds=301,hs=302,gp=303,_p=304,uf=306,yp=1e3,Xr=1001,xp=1002,Tn=1003,N_=1004,fh=1005,wr=1006,n2=1007,xl=1008,vo=1009,r2=1010,i2=1011,_m=1012,IS=1013,co=1014,Ri=1015,Sl=1016,US=1017,NS=1018,ea=1020,o2=1021,Mr=1023,a2=1024,s2=1025,ta=1026,ps=1027,l2=1028,FS=1029,u2=1030,OS=1031,zS=1033,dh=33776,hh=33777,ph=33778,mh=33779,F_=35840,O_=35841,z_=35842,k_=35843,kS=36196,B_=37492,H_=37496,V_=37808,G_=37809,W_=37810,$_=37811,X_=37812,j_=37813,Y_=37814,q_=37815,K_=37816,Z_=37817,J_=37818,Q_=37819,e0=37820,t0=37821,vh=36492,n0=36494,r0=36495,c2=36283,i0=36284,o0=36285,a0=36286,BS=3e3,na=3001,f2=3200,d2=3201,HS=0,h2=1,Ar="",bn="srgb",Pi="srgb-linear",ym="display-p3",cf="display-p3-linear",Nc="linear",$t="srgb",Fc="rec709",Oc="p3",Na=7680,s0=519,p2=512,m2=513,v2=514,VS=515,g2=516,_2=517,y2=518,x2=519,Sp=35044,l0="300 es",Ep=1035,oi=2e3,El=2001;class ua{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,c=a.length;s<c;s++)a[s].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let u0=1234567;const pl=Math.PI/180,wl=180/Math.PI;function Li(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function Cn(n,e,t){return Math.max(e,Math.min(t,n))}function xm(n,e){return(n%e+e)%e}function S2(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function E2(n,e,t){return n!==e?(t-n)/(e-n):0}function ml(n,e,t){return(1-t)*n+t*e}function w2(n,e,t,i){return ml(n,e,1-Math.exp(-t*i))}function M2(n,e=1){return e-Math.abs(xm(n,e*2)-e)}function A2(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function T2(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function b2(n,e){return n+Math.floor(Math.random()*(e-n+1))}function C2(n,e){return n+Math.random()*(e-n)}function R2(n){return n*(.5-Math.random())}function L2(n){n!==void 0&&(u0=n);let e=u0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P2(n){return n*pl}function D2(n){return n*wl}function wp(n){return(n&n-1)===0&&n!==0}function I2(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function U2(n,e,t,i,a){const s=Math.cos,c=Math.sin,u=s(t/2),d=c(t/2),h=s((e+i)/2),p=c((e+i)/2),v=s((e-i)/2),g=c((e-i)/2),S=s((i-e)/2),E=c((i-e)/2);switch(a){case"XYX":n.set(u*p,d*v,d*g,u*h);break;case"YZY":n.set(d*g,u*p,d*v,u*h);break;case"ZXZ":n.set(d*v,d*g,u*p,u*h);break;case"XZX":n.set(u*p,d*E,d*S,u*h);break;case"YXY":n.set(d*S,u*p,d*E,u*h);break;case"ZYZ":n.set(d*E,d*S,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const GS={DEG2RAD:pl,RAD2DEG:wl,generateUUID:Li,clamp:Cn,euclideanModulo:xm,mapLinear:S2,inverseLerp:E2,lerp:ml,damp:w2,pingpong:M2,smoothstep:A2,smootherstep:T2,randInt:b2,randFloat:C2,randFloatSpread:R2,seededRandom:L2,degToRad:P2,radToDeg:D2,isPowerOfTwo:wp,ceilPowerOfTwo:I2,floorPowerOfTwo:zc,setQuaternionFromProperEuler:U2,normalize:Nt,denormalize:ii};class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*i-c*a+e.x,this.y=s*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,i,a,s,c,u,d,h){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h)}set(e,t,i,a,s,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=s,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],v=i[7],g=i[2],S=i[5],E=i[8],w=a[0],x=a[3],_=a[6],C=a[1],M=a[4],R=a[7],I=a[2],O=a[5],F=a[8];return s[0]=c*w+u*C+d*I,s[3]=c*x+u*M+d*O,s[6]=c*_+u*R+d*F,s[1]=h*w+p*C+v*I,s[4]=h*x+p*M+v*O,s[7]=h*_+p*R+v*F,s[2]=g*w+S*C+E*I,s[5]=g*x+S*M+E*O,s[8]=g*_+S*R+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*s*p+i*u*d+a*s*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,g=u*d-p*s,S=h*s-c*d,E=t*v+i*g+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*h-p*i)*w,e[2]=(u*i-a*c)*w,e[3]=g*w,e[4]=(p*t-a*d)*w,e[5]=(a*s-u*t)*w,e[6]=S*w,e[7]=(i*d-h*t)*w,e[8]=(c*t-i*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,c,u){const d=Math.cos(s),h=Math.sin(s);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(gh.makeScale(e,t)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new St;function WS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function N2(){const n=kc("canvas");return n.style.display="block",n}const c0={};function vl(n){n in c0||(c0[n]=!0,console.warn(n))}const f0=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),d0=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zu={[Pi]:{transfer:Nc,primaries:Fc,toReference:n=>n,fromReference:n=>n},[bn]:{transfer:$t,primaries:Fc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cf]:{transfer:Nc,primaries:Oc,toReference:n=>n.applyMatrix3(d0),fromReference:n=>n.applyMatrix3(f0)},[ym]:{transfer:$t,primaries:Oc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(d0),fromReference:n=>n.applyMatrix3(f0).convertLinearToSRGB()}},F2=new Set([Pi,cf]),Ft={enabled:!0,_workingColorSpace:Pi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!F2.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zu[e].toReference,a=Zu[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zu[n].primaries},getTransfer:function(n){return n===Ar?Nc:Zu[n].transfer}};function is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _h(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fa;class $S{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fa===void 0&&(Fa=kc("canvas")),Fa.width=e.width,Fa.height=e.height;const i=Fa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let c=0;c<s.length;c++)s[c]=is(s[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(is(t[i]/255)*255):t[i]=is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O2=0;class XS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=Li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?s.push(yh(a[c].image)):s.push(yh(a[c]))}else s=yh(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function yh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$S.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z2=0;class or extends ua{constructor(e=or.DEFAULT_IMAGE,t=or.DEFAULT_MAPPING,i=Xr,a=Xr,s=wr,c=xl,u=Mr,d=vo,h=or.DEFAULT_ANISOTROPY,p=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=Li(),this.name="",this.source=new XS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(vl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===na?bn:Ar),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==DS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yp:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case xp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yp:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case xp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?na:BS}set encoding(e){vl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===na?bn:Ar}}or.DEFAULT_IMAGE=null;or.DEFAULT_MAPPING=DS;or.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,a=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*s,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*s,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*s,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],S=d[5],E=d[9],w=d[2],x=d[6],_=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,R=(S+1)/2,I=(_+1)/2,O=(p+g)/4,F=(v+w)/4,de=(E+x)/4;return M>R&&M>I?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=O/i,s=F/i):R>I?R<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(R),i=O/a,s=de/a):I<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(I),i=F/s,a=de/s),this.set(i,a,s,t),this}let C=Math.sqrt((x-E)*(x-E)+(v-w)*(v-w)+(g-p)*(g-p));return Math.abs(C)<.001&&(C=1),this.x=(x-E)/C,this.y=(v-w)/C,this.z=(g-p)/C,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k2 extends ua{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(vl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===na?bn:Ar),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new or(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new XS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends k2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jS extends or{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class B2 extends or{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ia{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,c,u){let d=i[a+0],h=i[a+1],p=i[a+2],v=i[a+3];const g=s[c+0],S=s[c+1],E=s[c+2],w=s[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v;return}if(u===1){e[t+0]=g,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==g||h!==S||p!==E){let x=1-u;const _=d*g+h*S+p*E+v*w,C=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const I=Math.sqrt(M),O=Math.atan2(I,_*C);x=Math.sin(x*O)/I,u=Math.sin(u*O)/I}const R=u*C;if(d=d*x+g*R,h=h*x+S*R,p=p*x+E*R,v=v*x+w*R,x===1-u){const I=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=I,h*=I,p*=I,v*=I}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,s,c){const u=i[a],d=i[a+1],h=i[a+2],p=i[a+3],v=s[c],g=s[c+1],S=s[c+2],E=s[c+3];return e[t]=u*E+p*v+d*S-h*g,e[t+1]=d*E+p*g+h*v-u*S,e[t+2]=h*E+p*S+u*g-d*v,e[t+3]=p*E-u*v-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,s=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(a/2),v=u(s/2),g=d(i/2),S=d(a/2),E=d(s/2);switch(c){case"XYZ":this._x=g*p*v+h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v-g*S*E;break;case"YXZ":this._x=g*p*v+h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v+g*S*E;break;case"ZXY":this._x=g*p*v-h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v-g*S*E;break;case"ZYX":this._x=g*p*v-h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v+g*S*E;break;case"YZX":this._x=g*p*v+h*S*E,this._y=h*S*v+g*p*E,this._z=h*p*E-g*S*v,this._w=h*p*v-g*S*E;break;case"XZY":this._x=g*p*v-h*S*E,this._y=h*S*v-g*p*E,this._z=h*p*E+g*S*v,this._w=h*p*v+g*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=i+u+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(s-h)*S,this._z=(c-a)*S}else if(i>u&&i>v){const S=2*Math.sqrt(1+i-u-v);this._w=(p-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(s+h)/S}else if(u>v){const S=2*Math.sqrt(1+u-i-v);this._w=(s-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+v-i-u);this._w=(c-a)/S,this._x=(s+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-s*d,this._y=a*p+c*d+s*u-i*h,this._z=s*p+c*h+i*d-a*u,this._w=c*p-i*u-a*d-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=s,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*a+t*this._y,this._z=S*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),v=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=c*v+this._w*g,this._x=i*v+this._x*g,this._y=a*v+this._y*g,this._z=s*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(h0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(h0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,c=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*c,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*c,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*i),p=2*(u*t-s*a),v=2*(s*i-c*t);return this.x=t+d*h+c*v-u*p,this.y=i+d*p+u*h-s*v,this.z=a+d*v+s*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-s*u,this.y=s*c-i*d,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new B,h0=new ia;class Lr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=s.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Hr):Hr.fromBufferAttribute(s,c),Hr.applyMatrix4(e.matrixWorld),this.expandByPoint(Hr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ju.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ju.copy(i.boundingBox)),Ju.applyMatrix4(e.matrixWorld),this.union(Ju)}const a=e.children;for(let s=0,c=a.length;s<c;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hr),Hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Qu.subVectors(this.max,nl),Oa.subVectors(e.a,nl),za.subVectors(e.b,nl),ka.subVectors(e.c,nl),eo.subVectors(za,Oa),to.subVectors(ka,za),Wo.subVectors(Oa,ka);let t=[0,-eo.z,eo.y,0,-to.z,to.y,0,-Wo.z,Wo.y,eo.z,0,-eo.x,to.z,0,-to.x,Wo.z,0,-Wo.x,-eo.y,eo.x,0,-to.y,to.x,0,-Wo.y,Wo.x,0];return!Sh(t,Oa,za,ka,Qu)||(t=[1,0,0,0,1,0,0,0,1],!Sh(t,Oa,za,ka,Qu))?!1:(ec.crossVectors(eo,to),t=[ec.x,ec.y,ec.z],Sh(t,Oa,za,ka,Qu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new B,new B,new B,new B,new B,new B,new B,new B],Hr=new B,Ju=new Lr,Oa=new B,za=new B,ka=new B,eo=new B,to=new B,Wo=new B,nl=new B,Qu=new B,ec=new B,$o=new B;function Sh(n,e,t,i,a){for(let s=0,c=n.length-3;s<=c;s+=3){$o.fromArray(n,s);const u=a.x*Math.abs($o.x)+a.y*Math.abs($o.y)+a.z*Math.abs($o.z),d=e.dot($o),h=t.dot($o),p=i.dot($o);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const H2=new Lr,rl=new B,Eh=new B;class li{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):H2.setFromPoints(e).getCenter(i);let a=0;for(let s=0,c=e.length;s<c;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const t=rl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(rl,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(Eh)),this.expandByPoint(rl.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new B,wh=new B,tc=new B,no=new B,Mh=new B,nc=new B,Ah=new B;class Sm{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){wh.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),no.copy(this.origin).sub(wh);const s=e.distanceTo(t)*.5,c=-this.direction.dot(tc),u=no.dot(this.direction),d=-no.dot(tc),h=no.lengthSq(),p=Math.abs(1-c*c);let v,g,S,E;if(p>0)if(v=c*d-u,g=c*u-d,E=s*p,v>=0)if(g>=-E)if(g<=E){const w=1/p;v*=w,g*=w,S=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;else g=-s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;else g<=-E?(v=Math.max(0,-(-c*s+u)),g=v>0?-s:Math.min(Math.max(-s,-d),s),S=-v*v+g*(g+2*d)+h):g<=E?(v=0,g=Math.min(Math.max(-s,-d),s),S=g*(g+2*d)+h):(v=Math.max(0,-(c*s+u)),g=v>0?s:Math.min(Math.max(-s,-d),s),S=-v*v+g*(g+2*d)+h);else g=c>0?-s:s,v=Math.max(0,-(c*g+u)),S=-v*v+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(wh).addScaledVector(tc,g),S}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),a=wi.dot(wi)-i*i,s=e.radius*e.radius;if(a>s)return null;const c=Math.sqrt(s-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(s=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||s>a||((s>i||isNaN(i))&&(i=s),(c<a||isNaN(a))&&(a=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,a,s){Mh.subVectors(t,e),nc.subVectors(i,e),Ah.crossVectors(Mh,nc);let c=this.direction.dot(Ah),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;no.subVectors(this.origin,e);const d=u*this.direction.dot(nc.crossVectors(no,nc));if(d<0)return null;const h=u*this.direction.dot(Mh.cross(no));if(h<0||d+h>c)return null;const p=-u*no.dot(Ah);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x)}set(e,t,i,a,s,c,u,d,h,p,v,g,S,E,w,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=a,_[1]=s,_[5]=c,_[9]=u,_[13]=d,_[2]=h,_[6]=p,_[10]=v,_[14]=g,_[3]=S,_[7]=E,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Ba.setFromMatrixColumn(e,0).length(),s=1/Ba.setFromMatrixColumn(e,1).length(),c=1/Ba.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),h=Math.sin(a),p=Math.cos(s),v=Math.sin(s);if(e.order==="XYZ"){const g=c*p,S=c*v,E=u*p,w=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=S+E*h,t[5]=g-w*h,t[9]=-u*d,t[2]=w-g*h,t[6]=E+S*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,S=d*v,E=h*p,w=h*v;t[0]=g+w*u,t[4]=E*u-S,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=S*u-E,t[6]=w+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,S=d*v,E=h*p,w=h*v;t[0]=g-w*u,t[4]=-c*v,t[8]=E+S*u,t[1]=S+E*u,t[5]=c*p,t[9]=w-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,S=c*v,E=u*p,w=u*v;t[0]=d*p,t[4]=E*h-S,t[8]=g*h+w,t[1]=d*v,t[5]=w*h+g,t[9]=S*h-E,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,S=c*h,E=u*d,w=u*h;t[0]=d*p,t[4]=w-g*v,t[8]=E*v+S,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=S*v+E,t[10]=g-w*v}else if(e.order==="XZY"){const g=c*d,S=c*h,E=u*d,w=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+w,t[5]=c*p,t[9]=S*v-E,t[2]=E*v-S,t[6]=u*p,t[10]=w*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V2,e,G2)}lookAt(e,t,i){const a=this.elements;return fr.subVectors(e,t),fr.lengthSq()===0&&(fr.z=1),fr.normalize(),ro.crossVectors(i,fr),ro.lengthSq()===0&&(Math.abs(i.z)===1?fr.x+=1e-4:fr.z+=1e-4,fr.normalize(),ro.crossVectors(i,fr)),ro.normalize(),rc.crossVectors(fr,ro),a[0]=ro.x,a[4]=rc.x,a[8]=fr.x,a[1]=ro.y,a[5]=rc.y,a[9]=fr.y,a[2]=ro.z,a[6]=rc.z,a[10]=fr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],v=i[5],g=i[9],S=i[13],E=i[2],w=i[6],x=i[10],_=i[14],C=i[3],M=i[7],R=i[11],I=i[15],O=a[0],F=a[4],de=a[8],b=a[12],N=a[1],ae=a[5],ne=a[9],pe=a[13],H=a[2],Q=a[6],se=a[10],re=a[14],X=a[3],ie=a[7],$=a[11],L=a[15];return s[0]=c*O+u*N+d*H+h*X,s[4]=c*F+u*ae+d*Q+h*ie,s[8]=c*de+u*ne+d*se+h*$,s[12]=c*b+u*pe+d*re+h*L,s[1]=p*O+v*N+g*H+S*X,s[5]=p*F+v*ae+g*Q+S*ie,s[9]=p*de+v*ne+g*se+S*$,s[13]=p*b+v*pe+g*re+S*L,s[2]=E*O+w*N+x*H+_*X,s[6]=E*F+w*ae+x*Q+_*ie,s[10]=E*de+w*ne+x*se+_*$,s[14]=E*b+w*pe+x*re+_*L,s[3]=C*O+M*N+R*H+I*X,s[7]=C*F+M*ae+R*Q+I*ie,s[11]=C*de+M*ne+R*se+I*$,s[15]=C*b+M*pe+R*re+I*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],S=e[14],E=e[3],w=e[7],x=e[11],_=e[15];return E*(+s*d*v-a*h*v-s*u*g+i*h*g+a*u*S-i*d*S)+w*(+t*d*S-t*h*g+s*c*g-a*c*S+a*h*p-s*d*p)+x*(+t*h*v-t*u*S-s*c*v+i*c*S+s*u*p-i*h*p)+_*(-a*u*p-t*d*v+t*u*g+a*c*v-i*c*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],S=e[11],E=e[12],w=e[13],x=e[14],_=e[15],C=v*x*h-w*g*h+w*d*S-u*x*S-v*d*_+u*g*_,M=E*g*h-p*x*h-E*d*S+c*x*S+p*d*_-c*g*_,R=p*w*h-E*v*h+E*u*S-c*w*S-p*u*_+c*v*_,I=E*v*d-p*w*d-E*u*g+c*w*g+p*u*x-c*v*x,O=t*C+i*M+a*R+s*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=C*F,e[1]=(w*g*s-v*x*s-w*a*S+i*x*S+v*a*_-i*g*_)*F,e[2]=(u*x*s-w*d*s+w*a*h-i*x*h-u*a*_+i*d*_)*F,e[3]=(v*d*s-u*g*s-v*a*h+i*g*h+u*a*S-i*d*S)*F,e[4]=M*F,e[5]=(p*x*s-E*g*s+E*a*S-t*x*S-p*a*_+t*g*_)*F,e[6]=(E*d*s-c*x*s-E*a*h+t*x*h+c*a*_-t*d*_)*F,e[7]=(c*g*s-p*d*s+p*a*h-t*g*h-c*a*S+t*d*S)*F,e[8]=R*F,e[9]=(E*v*s-p*w*s-E*i*S+t*w*S+p*i*_-t*v*_)*F,e[10]=(c*w*s-E*u*s+E*i*h-t*w*h-c*i*_+t*u*_)*F,e[11]=(p*u*s-c*v*s-p*i*h+t*v*h+c*i*S-t*u*S)*F,e[12]=I*F,e[13]=(p*w*a-E*v*a+E*i*g-t*w*g-p*i*x+t*v*x)*F,e[14]=(E*u*a-c*w*a-E*i*d+t*w*d+c*i*x-t*u*x)*F,e[15]=(c*v*a-p*u*a+p*i*d-t*v*d-c*i*g+t*u*g)*F,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,c=e.x,u=e.y,d=e.z,h=s*c,p=s*u;return this.set(h*c+i,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+i,p*d-a*c,0,h*d-a*u,p*d+a*c,s*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,c){return this.set(1,i,s,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,c=t._y,u=t._z,d=t._w,h=s+s,p=c+c,v=u+u,g=s*h,S=s*p,E=s*v,w=c*p,x=c*v,_=u*v,C=d*h,M=d*p,R=d*v,I=i.x,O=i.y,F=i.z;return a[0]=(1-(w+_))*I,a[1]=(S+R)*I,a[2]=(E-M)*I,a[3]=0,a[4]=(S-R)*O,a[5]=(1-(g+_))*O,a[6]=(x+C)*O,a[7]=0,a[8]=(E+M)*F,a[9]=(x-C)*F,a[10]=(1-(g+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Ba.set(a[0],a[1],a[2]).length();const c=Ba.set(a[4],a[5],a[6]).length(),u=Ba.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Vr.copy(this);const h=1/s,p=1/c,v=1/u;return Vr.elements[0]*=h,Vr.elements[1]*=h,Vr.elements[2]*=h,Vr.elements[4]*=p,Vr.elements[5]*=p,Vr.elements[6]*=p,Vr.elements[8]*=v,Vr.elements[9]*=v,Vr.elements[10]*=v,t.setFromRotationMatrix(Vr),i.x=s,i.y=c,i.z=u,this}makePerspective(e,t,i,a,s,c,u=oi){const d=this.elements,h=2*s/(t-e),p=2*s/(i-a),v=(t+e)/(t-e),g=(i+a)/(i-a);let S,E;if(u===oi)S=-(c+s)/(c-s),E=-2*c*s/(c-s);else if(u===El)S=-c/(c-s),E=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,s,c,u=oi){const d=this.elements,h=1/(t-e),p=1/(i-a),v=1/(c-s),g=(t+e)*h,S=(i+a)*p;let E,w;if(u===oi)E=(c+s)*v,w=-2*v;else if(u===El)E=s*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ba=new B,Vr=new Vt,V2=new B(0,0,0),G2=new B(1,1,1),ro=new B,rc=new B,fr=new B,p0=new Vt,m0=new ia;class Fl{constructor(e=0,t=0,i=0,a=Fl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],v=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Cn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return p0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return m0.setFromEuler(this),this.setFromQuaternion(m0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fl.DEFAULT_ORDER="XYZ";class YS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W2=0;const v0=new B,Ha=new ia,Mi=new Vt,ic=new B,il=new B,$2=new B,X2=new ia,g0=new B(1,0,0),_0=new B(0,1,0),y0=new B(0,0,1),j2={type:"added"},Y2={type:"removed"};class jn extends ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W2++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new B,t=new Fl,i=new ia,a=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new St}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new YS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ha.setFromAxisAngle(e,t),this.quaternion.multiply(Ha),this}rotateOnWorldAxis(e,t){return Ha.setFromAxisAngle(e,t),this.quaternion.premultiply(Ha),this}rotateX(e){return this.rotateOnAxis(g0,e)}rotateY(e){return this.rotateOnAxis(_0,e)}rotateZ(e){return this.rotateOnAxis(y0,e)}translateOnAxis(e,t){return v0.copy(e).applyQuaternion(this.quaternion),this.position.add(v0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(g0,e)}translateY(e){return this.translateOnAxis(_0,e)}translateZ(e){return this.translateOnAxis(y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ic.copy(e):ic.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(il,ic,this.up):Mi.lookAt(ic,il,this.up),this.quaternion.setFromRotationMatrix(Mi),a&&(Mi.extractRotation(a.matrixWorld),Ha.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(j2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y2)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,e,$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,X2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,c=a.length;s<c;s++){const u=a[s];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];s(e.shapes,v)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(s(e.materials,this.material[d]));a.material=u}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(s(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),S=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=a,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}jn.DEFAULT_UP=new B(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gr=new B,Ai=new B,Th=new B,Ti=new B,Va=new B,Ga=new B,x0=new B,bh=new B,Ch=new B,Rh=new B;let oc=!1;class $r{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Gr.subVectors(e,t),a.cross(Gr);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Gr.subVectors(a,t),Ai.subVectors(i,t),Th.subVectors(e,t);const c=Gr.dot(Gr),u=Gr.dot(Ai),d=Gr.dot(Th),h=Ai.dot(Ai),p=Ai.dot(Th),v=c*h-u*u;if(v===0)return s.set(-2,-1,-1);const g=1/v,S=(h*d-u*p)*g,E=(c*p-u*d)*g;return s.set(1-S-E,E,S)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ti),Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,i,a,s,c,u,d){return oc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oc=!0),this.getInterpolation(e,t,i,a,s,c,u,d)}static getInterpolation(e,t,i,a,s,c,u,d){return this.getBarycoord(e,t,i,a,Ti),d.setScalar(0),d.addScaledVector(s,Ti.x),d.addScaledVector(c,Ti.y),d.addScaledVector(u,Ti.z),d}static isFrontFacing(e,t,i,a){return Gr.subVectors(i,t),Ai.subVectors(e,t),Gr.cross(Ai).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gr.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Gr.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return oc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oc=!0),$r.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return $r.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return $r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let c,u;Va.subVectors(a,i),Ga.subVectors(s,i),bh.subVectors(e,i);const d=Va.dot(bh),h=Ga.dot(bh);if(d<=0&&h<=0)return t.copy(i);Ch.subVectors(e,a);const p=Va.dot(Ch),v=Ga.dot(Ch);if(p>=0&&v<=p)return t.copy(a);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(Va,c);Rh.subVectors(e,s);const S=Va.dot(Rh),E=Ga.dot(Rh);if(E>=0&&S<=E)return t.copy(s);const w=S*h-d*E;if(w<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(i).addScaledVector(Ga,u);const x=p*E-S*v;if(x<=0&&v-p>=0&&S-E>=0)return x0.subVectors(s,a),u=(v-p)/(v-p+(S-E)),t.copy(a).addScaledVector(x0,u);const _=1/(x+w+g);return c=w*_,u=g*_,t.copy(i).addScaledVector(Va,c).addScaledVector(Ga,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},io={h:0,s:0,l:0},ac={h:0,s:0,l:0};function Lh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ft.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Ft.workingColorSpace){if(e=xm(e,1),t=Cn(t,0,1),i=Cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,c=2*i-s;this.r=Lh(c,s,e+1/3),this.g=Lh(c,s,e),this.b=Lh(c,s,e-1/3)}return Ft.toWorkingColorSpace(this,a),this}setStyle(e,t=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=qS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=_h(e.r),this.g=_h(e.g),this.b=_h(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ft.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Cn(Fn.r*255,0,255))*65536+Math.round(Cn(Fn.g*255,0,255))*256+Math.round(Cn(Fn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Fn.copy(this),t);const i=Fn.r,a=Fn.g,s=Fn.b,c=Math.max(i,a,s),u=Math.min(i,a,s);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case i:d=(a-s)/v+(a<s?6:0);break;case a:d=(s-i)/v+2;break;case s:d=(i-a)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=bn){Ft.fromWorkingColorSpace(Fn.copy(this),e);const t=Fn.r,i=Fn.g,a=Fn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(io),this.setHSL(io.h+e,io.s+t,io.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(io),e.getHSL(ac);const i=ml(io.h,ac.h,t),a=ml(io.s,ac.s,t),s=ml(io.l,ac.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new nt;nt.NAMES=qS;let q2=0;class ys extends ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=rs,this.side=xo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mp,this.blendDst=vp,this.blendEquation=Ko,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==xo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mp&&(i.blendSrc=this.blendSrc),this.blendDst!==vp&&(i.blendDst=this.blendDst),this.blendEquation!==Ko&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Na&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Na&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Na&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}if(t){const s=a(e.textures),c=a(e.images);s.length>0&&(i.textures=s),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class KS extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new B,sc=new ht;class pr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sc.fromBufferAttribute(this,t),sc.applyMatrix3(e),this.setXY(t,sc.x,sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sp&&(e.usage=this.usage),e}}class ZS extends pr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class JS extends pr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class on extends pr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let K2=0;const Er=new Vt,Ph=new jn,Wa=new B,dr=new Lr,ol=new Lr,xn=new B;class Bn extends ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WS(e)?JS:ZS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new St().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Er.makeRotationFromQuaternion(e),this.applyMatrix4(Er),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,t,i){return Er.makeTranslation(e,t,i),this.applyMatrix4(Er),this}scale(e,t,i){return Er.makeScale(e,t,i),this.applyMatrix4(Er),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wa).negate(),this.translate(Wa.x,Wa.y,Wa.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];dr.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,dr.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,dr.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(dr.min),this.boundingBox.expandByPoint(dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(dr.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const u=t[s];ol.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(dr.min,ol.min),dr.expandByPoint(xn),xn.addVectors(dr.max,ol.max),dr.expandByPoint(xn)):(dr.expandByPoint(ol.min),dr.expandByPoint(ol.max))}dr.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)xn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(xn));if(t)for(let s=0,c=t.length;s<c;s++){const u=t[s],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)xn.fromBufferAttribute(u,h),d&&(Wa.fromBufferAttribute(e,h),xn.add(Wa)),a=Math.max(a,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,c=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pr(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let N=0;N<u;N++)h[N]=new B,p[N]=new B;const v=new B,g=new B,S=new B,E=new ht,w=new ht,x=new ht,_=new B,C=new B;function M(N,ae,ne){v.fromArray(a,N*3),g.fromArray(a,ae*3),S.fromArray(a,ne*3),E.fromArray(c,N*2),w.fromArray(c,ae*2),x.fromArray(c,ne*2),g.sub(v),S.sub(v),w.sub(E),x.sub(E);const pe=1/(w.x*x.y-x.x*w.y);isFinite(pe)&&(_.copy(g).multiplyScalar(x.y).addScaledVector(S,-w.y).multiplyScalar(pe),C.copy(S).multiplyScalar(w.x).addScaledVector(g,-x.x).multiplyScalar(pe),h[N].add(_),h[ae].add(_),h[ne].add(_),p[N].add(C),p[ae].add(C),p[ne].add(C))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let N=0,ae=R.length;N<ae;++N){const ne=R[N],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)M(i[Q+0],i[Q+1],i[Q+2])}const I=new B,O=new B,F=new B,de=new B;function b(N){F.fromArray(s,N*3),de.copy(F);const ae=h[N];I.copy(ae),I.sub(F.multiplyScalar(F.dot(ae))).normalize(),O.crossVectors(de,ae);const pe=O.dot(p[N])<0?-1:1;d[N*4]=I.x,d[N*4+1]=I.y,d[N*4+2]=I.z,d[N*4+3]=pe}for(let N=0,ae=R.length;N<ae;++N){const ne=R[N],pe=ne.start,H=ne.count;for(let Q=pe,se=pe+H;Q<se;Q+=3)b(i[Q+0]),b(i[Q+1]),b(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const a=new B,s=new B,c=new B,u=new B,d=new B,h=new B,p=new B,v=new B;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),w=e.getX(g+1),x=e.getX(g+2);a.fromBufferAttribute(t,E),s.fromBufferAttribute(t,w),c.fromBufferAttribute(t,x),p.subVectors(c,s),v.subVectors(a,s),p.cross(v),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),u.add(p),d.add(p),h.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,s),v.subVectors(a,s),p.cross(v),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,g=new h.constructor(d.length*p);let S=0,E=0;for(let w=0,x=d.length;w<x;w++){u.isInterleavedBufferAttribute?S=d[w]*u.data.stride+u.offset:S=d[w]*p;for(let _=0;_<p;_++)g[E++]=h[S++]}return new pr(g,p,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,i);t.setAttribute(u,h)}const s=this.morphAttributes;for(const u in s){const d=[],h=s[u];for(let p=0,v=h.length;p<v;p++){const g=h[p],S=e(g,i);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const S=h[v];p.push(S.toJSON(e.data))}p.length>0&&(a[d]=p,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],v=s[h];for(let g=0,S=v.length;g<S;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S0=new Vt,Xo=new Sm,lc=new li,E0=new B,$a=new B,Xa=new B,ja=new B,Dh=new B,uc=new B,cc=new ht,fc=new ht,dc=new ht,w0=new B,M0=new B,A0=new B,hc=new B,pc=new B;class jr extends jn{constructor(e=new Bn,t=new KS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(s&&u){uc.set(0,0,0);for(let d=0,h=s.length;d<h;d++){const p=u[d],v=s[d];p!==0&&(Dh.fromBufferAttribute(v,e),c?uc.addScaledVector(Dh,p):uc.addScaledVector(Dh.sub(t),p))}t.add(uc)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),Xo.copy(e.ray).recast(e.near),!(lc.containsPoint(Xo.origin)===!1&&(Xo.intersectSphere(lc,E0)===null||Xo.origin.distanceToSquared(E0)>(e.far-e.near)**2))&&(S0.copy(s).invert(),Xo.copy(e.ray).applyMatrix4(S0),!(i.boundingBox!==null&&Xo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xo)))}_computeIntersections(e,t,i){let a;const s=this.geometry,c=this.material,u=s.index,d=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,v=s.attributes.normal,g=s.groups,S=s.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,w=g.length;E<w;E++){const x=g[E],_=c[x.materialIndex],C=Math.max(x.start,S.start),M=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let R=C,I=M;R<I;R+=3){const O=u.getX(R),F=u.getX(R+1),de=u.getX(R+2);a=mc(this,_,e,i,h,p,v,O,F,de),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let x=E,_=w;x<_;x+=3){const C=u.getX(x),M=u.getX(x+1),R=u.getX(x+2);a=mc(this,c,e,i,h,p,v,C,M,R),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=g.length;E<w;E++){const x=g[E],_=c[x.materialIndex],C=Math.max(x.start,S.start),M=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=C,I=M;R<I;R+=3){const O=R,F=R+1,de=R+2;a=mc(this,_,e,i,h,p,v,O,F,de),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let x=E,_=w;x<_;x+=3){const C=x,M=x+1,R=x+2;a=mc(this,c,e,i,h,p,v,C,M,R),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function Z2(n,e,t,i,a,s,c,u){let d;if(e.side===ir?d=i.intersectTriangle(c,s,a,!0,u):d=i.intersectTriangle(a,s,c,e.side===xo,u),d===null)return null;pc.copy(u),pc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(pc);return h<t.near||h>t.far?null:{distance:h,point:pc.clone(),object:n}}function mc(n,e,t,i,a,s,c,u,d,h){n.getVertexPosition(u,$a),n.getVertexPosition(d,Xa),n.getVertexPosition(h,ja);const p=Z2(n,e,t,i,$a,Xa,ja,hc);if(p){a&&(cc.fromBufferAttribute(a,u),fc.fromBufferAttribute(a,d),dc.fromBufferAttribute(a,h),p.uv=$r.getInterpolation(hc,$a,Xa,ja,cc,fc,dc,new ht)),s&&(cc.fromBufferAttribute(s,u),fc.fromBufferAttribute(s,d),dc.fromBufferAttribute(s,h),p.uv1=$r.getInterpolation(hc,$a,Xa,ja,cc,fc,dc,new ht),p.uv2=p.uv1),c&&(w0.fromBufferAttribute(c,u),M0.fromBufferAttribute(c,d),A0.fromBufferAttribute(c,h),p.normal=$r.getInterpolation(hc,$a,Xa,ja,w0,M0,A0,new B),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:d,c:h,normal:new B,materialIndex:0};$r.getNormal($a,Xa,ja,v.normal),p.face=v}return p}class Ol extends Bn{constructor(e=1,t=1,i=1,a=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:c};const u=this;a=Math.floor(a),s=Math.floor(s),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,i,t,e,c,s,0),E("z","y","x",1,-1,i,t,-e,c,s,1),E("x","z","y",1,1,e,i,t,a,c,2),E("x","z","y",1,-1,e,i,-t,a,c,3),E("x","y","z",1,-1,e,t,i,a,s,4),E("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(d),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(p,3)),this.setAttribute("uv",new on(v,2));function E(w,x,_,C,M,R,I,O,F,de,b){const N=R/F,ae=I/de,ne=R/2,pe=I/2,H=O/2,Q=F+1,se=de+1;let re=0,X=0;const ie=new B;for(let $=0;$<se;$++){const L=$*ae-pe;for(let z=0;z<Q;z++){const W=z*N-ne;ie[w]=W*C,ie[x]=L*M,ie[_]=H,h.push(ie.x,ie.y,ie.z),ie[w]=0,ie[x]=0,ie[_]=O>0?1:-1,p.push(ie.x,ie.y,ie.z),v.push(z/F),v.push(1-$/de),re+=1}}for(let $=0;$<de;$++)for(let L=0;L<F;L++){const z=g+L+Q*$,W=g+L+Q*($+1),q=g+(L+1)+Q*($+1),ee=g+(L+1)+Q*$;d.push(z,W,ee),d.push(W,q,ee),X+=6}u.addGroup(S,X,b),S+=X,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Xn(n){const e={};for(let t=0;t<n.length;t++){const i=ms(n[t]);for(const a in i)e[a]=i[a]}return e}function J2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function QS(n){return n.getRenderTarget()===null?n.outputColorSpace:Ft.workingColorSpace}const Em={clone:ms,merge:Xn};var Q2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class So extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q2,this.fragmentShader=eD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=J2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class eE extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hr extends eE{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;s+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ya=-90,qa=1;class tD extends jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new hr(Ya,qa,e,t);a.layers=this.layers,this.add(a);const s=new hr(Ya,qa,e,t);s.layers=this.layers,this.add(s);const c=new hr(Ya,qa,e,t);c.layers=this.layers,this.add(c);const u=new hr(Ya,qa,e,t);u.layers=this.layers,this.add(u);const d=new hr(Ya,qa,e,t);d.layers=this.layers,this.add(d);const h=new hr(Ya,qa,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,c,u,d]=t;for(const h of t)this.remove(h);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,u,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,d),e.setRenderTarget(i,4,a),e.render(t,h),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(v,g,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class tE extends or{constructor(e,t,i,a,s,c,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,i,a,s,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nD extends ra{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(vl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===na?bn:Ar),this.texture=new tE(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ol(5,5,5),s=new So({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ir,blending:po});s.uniforms.tEquirect.value=t;const c=new jr(a,s),u=t.minFilter;return t.minFilter===xl&&(t.minFilter=wr),new tD(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(s)}}const Ih=new B,rD=new B,iD=new St;class lo{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Ih.subVectors(i,t).cross(rD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ih),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iD.getNormalMatrix(e),a=this.coplanarPoint(Ih).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jo=new li,vc=new B;class ff{constructor(e=new lo,t=new lo,i=new lo,a=new lo,s=new lo,c=new lo){this.planes=[e,t,i,a,s,c]}set(e,t,i,a,s,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(s),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){const i=this.planes,a=e.elements,s=a[0],c=a[1],u=a[2],d=a[3],h=a[4],p=a[5],v=a[6],g=a[7],S=a[8],E=a[9],w=a[10],x=a[11],_=a[12],C=a[13],M=a[14],R=a[15];if(i[0].setComponents(d-s,g-h,x-S,R-_).normalize(),i[1].setComponents(d+s,g+h,x+S,R+_).normalize(),i[2].setComponents(d+c,g+p,x+E,R+C).normalize(),i[3].setComponents(d-c,g-p,x-E,R-C).normalize(),i[4].setComponents(d-u,g-v,x-w,R-M).normalize(),t===oi)i[5].setComponents(d+u,g+v,x+w,R+M).normalize();else if(t===El)i[5].setComponents(u,v,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jo)}intersectsSprite(e){return jo.center.set(0,0,0),jo.radius=.7071067811865476,jo.applyMatrix4(e.matrixWorld),this.intersectsSphere(jo)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(vc.x=a.normal.x>0?e.max.x:e.min.x,vc.y=a.normal.y>0?e.max.y:e.min.y,vc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nE(){let n=null,e=!1,t=null,i=null;function a(s,c){t(s,c),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function oD(n,e){const t=e.isWebGL2,i=new WeakMap;function a(h,p){const v=h.array,g=h.usage,S=v.byteLength,E=n.createBuffer();n.bindBuffer(p,E),n.bufferData(p,v,g),h.onUploadCallback();let w;if(v instanceof Float32Array)w=n.FLOAT;else if(v instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)w=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=n.UNSIGNED_SHORT;else if(v instanceof Int16Array)w=n.SHORT;else if(v instanceof Uint32Array)w=n.UNSIGNED_INT;else if(v instanceof Int32Array)w=n.INT;else if(v instanceof Int8Array)w=n.BYTE;else if(v instanceof Uint8Array)w=n.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)w=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:w,bytesPerElement:v.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,p,v){const g=p.array,S=p._updateRange,E=p.updateRanges;if(n.bindBuffer(v,h),S.count===-1&&E.length===0&&n.bufferSubData(v,0,g),E.length!==0){for(let w=0,x=E.length;w<x;w++){const _=E[w];t?n.bufferSubData(v,_.start*g.BYTES_PER_ELEMENT,g,_.start,_.count):n.bufferSubData(v,_.start*g.BYTES_PER_ELEMENT,g.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}S.count!==-1&&(t?n.bufferSubData(v,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count):n.bufferSubData(v,S.offset*g.BYTES_PER_ELEMENT,g.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(n.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const g=i.get(h);(!g||g.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const v=i.get(h);if(v===void 0)i.set(h,a(h,p));else if(v.version<h.version){if(v.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,h,p),v.version=h.version}}return{get:c,remove:u,update:d}}class wm extends Bn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,c=t/2,u=Math.floor(i),d=Math.floor(a),h=u+1,p=d+1,v=e/u,g=t/d,S=[],E=[],w=[],x=[];for(let _=0;_<p;_++){const C=_*g-c;for(let M=0;M<h;M++){const R=M*v-s;E.push(R,-C,0),w.push(0,0,1),x.push(M/u),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let C=0;C<u;C++){const M=C+h*_,R=C+h*(_+1),I=C+1+h*(_+1),O=C+1+h*_;S.push(M,R,O),S.push(R,I,O)}this.setIndex(S),this.setAttribute("position",new on(E,3)),this.setAttribute("normal",new on(w,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wm(e.width,e.height,e.widthSegments,e.heightSegments)}}var aD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sD=`#ifdef USE_ALPHAHASH
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
#endif`,lD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cD=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dD=`#ifdef USE_AOMAP
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
#endif`,hD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pD=`#ifdef USE_BATCHING
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
#endif`,mD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_D=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yD=`#ifdef USE_IRIDESCENCE
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
#endif`,xD=`#ifdef USE_BUMPMAP
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
#endif`,SD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ED=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,CD=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,RD=`#define PI 3.141592653589793
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
} // validated`,LD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PD=`vec3 transformedNormal = objectNormal;
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
#endif`,DD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ID=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ND=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FD="gl_FragColor = linearToOutputTexel( gl_FragColor );",OD=`
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
}`,zD=`#ifdef USE_ENVMAP
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
#endif`,kD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BD=`#ifdef USE_ENVMAP
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
#endif`,HD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VD=`#ifdef USE_ENVMAP
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
#endif`,GD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$D=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jD=`#ifdef USE_GRADIENTMAP
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
}`,YD=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JD=`uniform bool receiveShadow;
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
#endif`,QD=`#ifdef USE_ENVMAP
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
#endif`,e3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i3=`PhysicalMaterial material;
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
#endif`,o3=`struct PhysicalMaterial {
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
}`,a3=`
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
#endif`,s3=`#if defined( RE_IndirectDiffuse )
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
#endif`,l3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,d3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,h3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v3=`#if defined( USE_POINTS_UV )
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
#endif`,g3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x3=`#ifdef USE_MORPHNORMALS
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
#endif`,S3=`#ifdef USE_MORPHTARGETS
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
#endif`,E3=`#ifdef USE_MORPHTARGETS
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
#endif`,w3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C3=`#ifdef USE_NORMALMAP
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
#endif`,R3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W3=`float getShadowMask() {
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
}`,$3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X3=`#ifdef USE_SKINNING
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
#endif`,j3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y3=`#ifdef USE_SKINNING
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
#endif`,q3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q3=`#ifdef USE_TRANSMISSION
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
#endif`,eI=`#ifdef USE_TRANSMISSION
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
#endif`,tI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aI=`uniform sampler2D t2D;
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
}`,sI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lI=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fI=`#include <common>
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
}`,dI=`#if DEPTH_PACKING == 3200
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
}`,hI=`#define DISTANCE
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
}`,pI=`#define DISTANCE
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
}`,mI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gI=`uniform float scale;
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
}`,_I=`uniform vec3 diffuse;
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
}`,yI=`#include <common>
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
}`,xI=`uniform vec3 diffuse;
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
}`,SI=`#define LAMBERT
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
}`,EI=`#define LAMBERT
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
}`,wI=`#define MATCAP
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
}`,MI=`#define MATCAP
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
}`,AI=`#define NORMAL
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
}`,TI=`#define NORMAL
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
}`,bI=`#define PHONG
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
}`,CI=`#define PHONG
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
}`,RI=`#define STANDARD
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
}`,LI=`#define STANDARD
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
}`,PI=`#define TOON
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
}`,DI=`#define TOON
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
}`,II=`uniform float size;
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
}`,UI=`uniform vec3 diffuse;
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
}`,NI=`#include <common>
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
}`,FI=`uniform vec3 color;
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
}`,OI=`uniform float rotation;
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
}`,zI=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:aD,alphahash_pars_fragment:sD,alphamap_fragment:lD,alphamap_pars_fragment:uD,alphatest_fragment:cD,alphatest_pars_fragment:fD,aomap_fragment:dD,aomap_pars_fragment:hD,batching_pars_vertex:pD,batching_vertex:mD,begin_vertex:vD,beginnormal_vertex:gD,bsdfs:_D,iridescence_fragment:yD,bumpmap_pars_fragment:xD,clipping_planes_fragment:SD,clipping_planes_pars_fragment:ED,clipping_planes_pars_vertex:wD,clipping_planes_vertex:MD,color_fragment:AD,color_pars_fragment:TD,color_pars_vertex:bD,color_vertex:CD,common:RD,cube_uv_reflection_fragment:LD,defaultnormal_vertex:PD,displacementmap_pars_vertex:DD,displacementmap_vertex:ID,emissivemap_fragment:UD,emissivemap_pars_fragment:ND,colorspace_fragment:FD,colorspace_pars_fragment:OD,envmap_fragment:zD,envmap_common_pars_fragment:kD,envmap_pars_fragment:BD,envmap_pars_vertex:HD,envmap_physical_pars_fragment:QD,envmap_vertex:VD,fog_vertex:GD,fog_pars_vertex:WD,fog_fragment:$D,fog_pars_fragment:XD,gradientmap_pars_fragment:jD,lightmap_fragment:YD,lightmap_pars_fragment:qD,lights_lambert_fragment:KD,lights_lambert_pars_fragment:ZD,lights_pars_begin:JD,lights_toon_fragment:e3,lights_toon_pars_fragment:t3,lights_phong_fragment:n3,lights_phong_pars_fragment:r3,lights_physical_fragment:i3,lights_physical_pars_fragment:o3,lights_fragment_begin:a3,lights_fragment_maps:s3,lights_fragment_end:l3,logdepthbuf_fragment:u3,logdepthbuf_pars_fragment:c3,logdepthbuf_pars_vertex:f3,logdepthbuf_vertex:d3,map_fragment:h3,map_pars_fragment:p3,map_particle_fragment:m3,map_particle_pars_fragment:v3,metalnessmap_fragment:g3,metalnessmap_pars_fragment:_3,morphcolor_vertex:y3,morphnormal_vertex:x3,morphtarget_pars_vertex:S3,morphtarget_vertex:E3,normal_fragment_begin:w3,normal_fragment_maps:M3,normal_pars_fragment:A3,normal_pars_vertex:T3,normal_vertex:b3,normalmap_pars_fragment:C3,clearcoat_normal_fragment_begin:R3,clearcoat_normal_fragment_maps:L3,clearcoat_pars_fragment:P3,iridescence_pars_fragment:D3,opaque_fragment:I3,packing:U3,premultiplied_alpha_fragment:N3,project_vertex:F3,dithering_fragment:O3,dithering_pars_fragment:z3,roughnessmap_fragment:k3,roughnessmap_pars_fragment:B3,shadowmap_pars_fragment:H3,shadowmap_pars_vertex:V3,shadowmap_vertex:G3,shadowmask_pars_fragment:W3,skinbase_vertex:$3,skinning_pars_vertex:X3,skinning_vertex:j3,skinnormal_vertex:Y3,specularmap_fragment:q3,specularmap_pars_fragment:K3,tonemapping_fragment:Z3,tonemapping_pars_fragment:J3,transmission_fragment:Q3,transmission_pars_fragment:eI,uv_pars_fragment:tI,uv_pars_vertex:nI,uv_vertex:rI,worldpos_vertex:iI,background_vert:oI,background_frag:aI,backgroundCube_vert:sI,backgroundCube_frag:lI,cube_vert:uI,cube_frag:cI,depth_vert:fI,depth_frag:dI,distanceRGBA_vert:hI,distanceRGBA_frag:pI,equirect_vert:mI,equirect_frag:vI,linedashed_vert:gI,linedashed_frag:_I,meshbasic_vert:yI,meshbasic_frag:xI,meshlambert_vert:SI,meshlambert_frag:EI,meshmatcap_vert:wI,meshmatcap_frag:MI,meshnormal_vert:AI,meshnormal_frag:TI,meshphong_vert:bI,meshphong_frag:CI,meshphysical_vert:RI,meshphysical_frag:LI,meshtoon_vert:PI,meshtoon_frag:DI,points_vert:II,points_frag:UI,shadow_vert:NI,shadow_frag:FI,sprite_vert:OI,sprite_frag:zI},Ne={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},rr={basic:{uniforms:Xn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Xn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Xn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Xn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Xn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Xn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Xn([Ne.points,Ne.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Xn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Xn([Ne.common,Ne.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Xn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Xn([Ne.sprite,Ne.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:Xn([Ne.common,Ne.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:Xn([Ne.lights,Ne.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};rr.physical={uniforms:Xn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const gc={r:0,b:0,g:0};function kI(n,e,t,i,a,s,c){const u=new nt(0);let d=s===!0?0:1,h,p,v=null,g=0,S=null;function E(x,_){let C=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?w(u,d):M&&M.isColor&&(w(M,1),C=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===uf)?(p===void 0&&(p=new jr(new Ol(1,1,1),new So({name:"BackgroundCubeMaterial",uniforms:ms(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Ft.getTransfer(M.colorSpace)!==$t,(v!==M||g!==M.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,v=M,g=M.version,S=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new jr(new wm(2,2),new So({name:"BackgroundMaterial",uniforms:ms(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:xo,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Ft.getTransfer(M.colorSpace)!==$t,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(v!==M||g!==M.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,v=M,g=M.version,S=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function w(x,_){x.getRGB(gc,QS(n)),i.buffers.color.setClear(gc.r,gc.g,gc.b,_,c)}return{getClearColor:function(){return u},setClearColor:function(x,_=1){u.set(x),d=_,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,w(u,d)},render:E}}function BI(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||s!==null,u={},d=x(null);let h=d,p=!1;function v(H,Q,se,re,X){let ie=!1;if(c){const $=w(re,se,Q);h!==$&&(h=$,S(h.object)),ie=_(H,re,se,X),ie&&C(H,re,se,X)}else{const $=Q.wireframe===!0;(h.geometry!==re.id||h.program!==se.id||h.wireframe!==$)&&(h.geometry=re.id,h.program=se.id,h.wireframe=$,ie=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(ie||p)&&(p=!1,de(H,Q,se,re),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function g(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function S(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function E(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function w(H,Q,se){const re=se.wireframe===!0;let X=u[H.id];X===void 0&&(X={},u[H.id]=X);let ie=X[Q.id];ie===void 0&&(ie={},X[Q.id]=ie);let $=ie[re];return $===void 0&&($=x(g()),ie[re]=$),$}function x(H){const Q=[],se=[],re=[];for(let X=0;X<a;X++)Q[X]=0,se[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:se,attributeDivisors:re,object:H,attributes:{},index:null}}function _(H,Q,se,re){const X=h.attributes,ie=Q.attributes;let $=0;const L=se.getAttributes();for(const z in L)if(L[z].location>=0){const q=X[z];let ee=ie[z];if(ee===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),q===void 0||q.attribute!==ee||ee&&q.data!==ee.data)return!0;$++}return h.attributesNum!==$||h.index!==re}function C(H,Q,se,re){const X={},ie=Q.attributes;let $=0;const L=se.getAttributes();for(const z in L)if(L[z].location>=0){let q=ie[z];q===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(q=H.instanceColor));const ee={};ee.attribute=q,q&&q.data&&(ee.data=q.data),X[z]=ee,$++}h.attributes=X,h.attributesNum=$,h.index=re}function M(){const H=h.newAttributes;for(let Q=0,se=H.length;Q<se;Q++)H[Q]=0}function R(H){I(H,0)}function I(H,Q){const se=h.newAttributes,re=h.enabledAttributes,X=h.attributeDivisors;se[H]=1,re[H]===0&&(n.enableVertexAttribArray(H),re[H]=1),X[H]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Q),X[H]=Q)}function O(){const H=h.newAttributes,Q=h.enabledAttributes;for(let se=0,re=Q.length;se<re;se++)Q[se]!==H[se]&&(n.disableVertexAttribArray(se),Q[se]=0)}function F(H,Q,se,re,X,ie,$){$===!0?n.vertexAttribIPointer(H,Q,se,X,ie):n.vertexAttribPointer(H,Q,se,re,X,ie)}function de(H,Q,se,re){if(i.isWebGL2===!1&&(H.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=re.attributes,ie=se.getAttributes(),$=Q.defaultAttributeValues;for(const L in ie){const z=ie[L];if(z.location>=0){let W=X[L];if(W===void 0&&(L==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),L==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),W!==void 0){const q=W.normalized,ee=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const _e=Z.buffer,ve=Z.type,be=Z.bytesPerElement,Fe=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===IS);if(W.isInterleavedBufferAttribute){const Oe=W.data,j=Oe.stride,Lt=W.offset;if(Oe.isInstancedInterleavedBuffer){for(let Be=0;Be<z.locationSize;Be++)I(z.location+Be,Oe.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Be=0;Be<z.locationSize;Be++)R(z.location+Be);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Be=0;Be<z.locationSize;Be++)F(z.location+Be,ee/z.locationSize,ve,q,j*be,(Lt+ee/z.locationSize*Be)*be,Fe)}else{if(W.isInstancedBufferAttribute){for(let Oe=0;Oe<z.locationSize;Oe++)I(z.location+Oe,W.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)R(z.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Oe=0;Oe<z.locationSize;Oe++)F(z.location+Oe,ee/z.locationSize,ve,q,ee*be,ee/z.locationSize*Oe*be,Fe)}}else if($!==void 0){const q=$[L];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(z.location,q);break;case 3:n.vertexAttrib3fv(z.location,q);break;case 4:n.vertexAttrib4fv(z.location,q);break;default:n.vertexAttrib1fv(z.location,q)}}}}O()}function b(){ne();for(const H in u){const Q=u[H];for(const se in Q){const re=Q[se];for(const X in re)E(re[X].object),delete re[X];delete Q[se]}delete u[H]}}function N(H){if(u[H.id]===void 0)return;const Q=u[H.id];for(const se in Q){const re=Q[se];for(const X in re)E(re[X].object),delete re[X];delete Q[se]}delete u[H.id]}function ae(H){for(const Q in u){const se=u[Q];if(se[H.id]===void 0)continue;const re=se[H.id];for(const X in re)E(re[X].object),delete re[X];delete se[H.id]}}function ne(){pe(),p=!0,h!==d&&(h=d,S(h.object))}function pe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:ne,resetDefaultState:pe,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfProgram:ae,initAttributes:M,enableAttribute:R,disableUnusedAttributes:O}}function HI(n,e,t,i){const a=i.isWebGL2;let s;function c(p){s=p}function u(p,v){n.drawArrays(s,p,v),t.update(v,s,1)}function d(p,v,g){if(g===0)return;let S,E;if(a)S=n,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](s,p,v,g),t.update(v,s,g)}function h(p,v,g){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g;E++)this.render(p[E],v[E]);else{S.multiDrawArraysWEBGL(s,p,0,v,0,g);let E=0;for(let w=0;w<g;w++)E+=v[w];t.update(E,s,1)}}this.setMode=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function VI(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=s(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),w=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,R=c||e.has("OES_texture_float"),I=M&&R,O=c?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:s,precision:u,logarithmicDepthBuffer:p,maxTextures:v,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:I,maxSamples:O}}function GI(n){const e=this;let t=null,i=0,a=!1,s=!1;const c=new lo,u=new St,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||i!==0||a;return a=g,i=v.length,S},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,_=n.get(v);if(!a||E===null||E.length===0||s&&!x)s?p(null):h();else{const C=s?0:i,M=C*4;let R=_.clippingState||null;d.value=R,R=p(E,g,M,S);for(let I=0;I!==M;++I)R[I]=t[I];_.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,g,S,E){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=d.value,E!==!0||x===null){const _=S+w*4,C=g.matrixWorldInverse;u.getNormalMatrix(C),(x===null||x.length<_)&&(x=new Float32Array(_));for(let M=0,R=S;M!==w;++M,R+=4)c.copy(v[M]).applyMatrix4(C,u),c.normal.toArray(x,R),x[R+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function WI(n){let e=new WeakMap;function t(c,u){return u===gp?c.mapping=ds:u===_p&&(c.mapping=hs),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===gp||u===_p)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new nD(d.height/2);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $I extends eE{constructor(e=-1,t=1,i=1,a=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,c=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,c=s+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ja=4,T0=[.125,.215,.35,.446,.526,.582],Zo=20,Uh=new $I,b0=new nt;let Nh=null,Fh=0,Oh=0;const qo=(1+Math.sqrt(5))/2,Ka=1/qo,C0=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,qo,Ka),new B(0,qo,-Ka),new B(Ka,0,qo),new B(-Ka,0,qo),new B(qo,Ka,0),new B(-qo,Ka,0)];class R0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Nh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Fh,Oh),e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wr,minFilter:wr,generateMipmaps:!1,type:Sl,format:Mr,colorSpace:Pi,depthBuffer:!1},a=L0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XI(s)),this._blurMaterial=jI(s,e,t)}return a}_compileMaterial(e){const t=new jr(this._lodPlanes[0],e);this._renderer.compile(t,Uh)}_sceneToCubeUV(e,t,i,a){const u=new hr(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,g=p.toneMapping;p.getClearColor(b0),p.toneMapping=mo,p.autoClear=!1;const S=new KS({name:"PMREM.Background",side:ir,depthWrite:!1,depthTest:!1}),E=new jr(new Ol,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(b0),w=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(u.up.set(0,d[_],0),u.lookAt(h[_],0,0)):C===1?(u.up.set(0,0,d[_]),u.lookAt(0,h[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,h[_]));const M=this._cubeSize;_c(a,C*M,_>2?M:0,M,M),p.setRenderTarget(a),w&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=v,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ds||e.mapping===hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=D0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P0());const s=a?this._cubemapMaterial:this._equirectMaterial,c=new jr(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const d=this._cubeSize;_c(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Uh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=C0[(a-1)%C0.length];this._blur(e,a-1,a,s,c)}t.autoClear=i}_blur(e,t,i,a,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",s),this._halfBlur(c,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,v=new jr(this._lodPlanes[a],h),g=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*Zo-1),w=s/E,x=isFinite(s)?1+Math.floor(p*w):Zo;x>Zo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Zo}`);const _=[];let C=0;for(let F=0;F<Zo;++F){const de=F/w,b=Math.exp(-de*de/2);_.push(b),F===0?C+=b:F<x&&(C+=2*b)}for(let F=0;F<_.length;F++)_[F]=_[F]/C;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=E,g.mipInt.value=M-i;const R=this._sizeLods[a],I=3*R*(a>M-Ja?a-M+Ja:0),O=4*(this._cubeSize-R);_c(t,I,O,3*R,2*R),d.setRenderTarget(t),d.render(v,Uh)}}function XI(n){const e=[],t=[],i=[];let a=n;const s=n-Ja+1+T0.length;for(let c=0;c<s;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>n-Ja?d=T0[c-n+Ja-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],S=6,E=6,w=3,x=2,_=1,C=new Float32Array(w*E*S),M=new Float32Array(x*E*S),R=new Float32Array(_*E*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,de=O>2?0:-1,b=[F,de,0,F+2/3,de,0,F+2/3,de+1,0,F,de,0,F+2/3,de+1,0,F,de+1,0];C.set(b,w*E*O),M.set(g,x*E*O);const N=[O,O,O,O,O,O];R.set(N,_*E*O)}const I=new Bn;I.setAttribute("position",new pr(C,w)),I.setAttribute("uv",new pr(M,x)),I.setAttribute("faceIndex",new pr(R,_)),e.push(I),a>Ja&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function L0(n,e,t){const i=new ra(n,e,t);return i.texture.mapping=uf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _c(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function jI(n,e,t){const i=new Float32Array(Zo),a=new B(0,1,0);return new So({name:"SphericalGaussianBlur",defines:{n:Zo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Mm(),fragmentShader:`

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
		`,blending:po,depthTest:!1,depthWrite:!1})}function P0(){return new So({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mm(),fragmentShader:`

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
		`,blending:po,depthTest:!1,depthWrite:!1})}function D0(){return new So({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:po,depthTest:!1,depthWrite:!1})}function Mm(){return`

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
	`}function YI(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===gp||d===_p,p=d===ds||d===hs;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let v=e.get(u);return t===null&&(t=new R0(n)),v=h?t.fromEquirectangular(u,v):t.fromCubemap(u,v),e.set(u,v),v.texture}else{if(e.has(u))return e.get(u).texture;{const v=u.image;if(h&&v&&v.height>0||p&&v&&a(v)){t===null&&(t=new R0(n));const g=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",s),g.texture}else return null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function s(u){const d=u.target;d.removeEventListener("dispose",s);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function qI(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function KI(n,e,t,i){const a={},s=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const w=g.morphAttributes[E];for(let x=0,_=w.length;x<_;x++)e.remove(w[x])}g.removeEventListener("dispose",c),delete a[g.id];const S=s.get(g);S&&(e.remove(S),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const E in g)e.update(g[E],n.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const w=S[E];for(let x=0,_=w.length;x<_;x++)e.update(w[x],n.ARRAY_BUFFER)}}function h(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const C=S.array;w=S.version;for(let M=0,R=C.length;M<R;M+=3){const I=C[M+0],O=C[M+1],F=C[M+2];g.push(I,O,O,F,F,I)}}else if(E!==void 0){const C=E.array;w=E.version;for(let M=0,R=C.length/3-1;M<R;M+=3){const I=M+0,O=M+1,F=M+2;g.push(I,O,O,F,F,I)}}else return;const x=new(WS(g)?JS:ZS)(g,1);x.version=w;const _=s.get(v);_&&e.remove(_),s.set(v,x)}function p(v){const g=s.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&h(v)}else h(v);return s.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function ZI(n,e,t,i){const a=i.isWebGL2;let s;function c(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function p(S,E){n.drawElements(s,E,u,S*d),t.update(E,s,1)}function v(S,E,w){if(w===0)return;let x,_;if(a)x=n,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](s,E,u,S*d,w),t.update(E,s,w)}function g(S,E,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<w;_++)this.render(S[_]/d,E[_]);else{x.multiDrawElementsWEBGL(s,E,0,u,S,0,w);let _=0;for(let C=0;C<w;C++)_+=E[C];t.update(_,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=v,this.renderMultiDraw=g}function JI(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(s/3);break;case n.LINES:t.lines+=u*(s/2);break;case n.LINE_STRIP:t.lines+=u*(s-1);break;case n.LINE_LOOP:t.lines+=u*s;break;case n.POINTS:t.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function QI(n,e){return n[0]-e[0]}function eU(n,e){return Math.abs(e[1])-Math.abs(n[1])}function tU(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,c=new Ot,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function d(h,p,v){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=E!==void 0?E.length:0;let x=s.get(p);if(x===void 0||x.count!==w){let Q=function(){pe.dispose(),s.delete(p),p.removeEventListener("dispose",Q)};var S=Q;x!==void 0&&x.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,I=p.morphAttributes.color!==void 0,O=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],de=p.morphAttributes.color||[];let b=0;M===!0&&(b=1),R===!0&&(b=2),I===!0&&(b=3);let N=p.attributes.position.count*b,ae=1;N>e.maxTextureSize&&(ae=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const ne=new Float32Array(N*ae*4*w),pe=new jS(ne,N,ae,w);pe.type=Ri,pe.needsUpdate=!0;const H=b*4;for(let se=0;se<w;se++){const re=O[se],X=F[se],ie=de[se],$=N*ae*4*se;for(let L=0;L<re.count;L++){const z=L*H;M===!0&&(c.fromBufferAttribute(re,L),ne[$+z+0]=c.x,ne[$+z+1]=c.y,ne[$+z+2]=c.z,ne[$+z+3]=0),R===!0&&(c.fromBufferAttribute(X,L),ne[$+z+4]=c.x,ne[$+z+5]=c.y,ne[$+z+6]=c.z,ne[$+z+7]=0),I===!0&&(c.fromBufferAttribute(ie,L),ne[$+z+8]=c.x,ne[$+z+9]=c.y,ne[$+z+10]=c.z,ne[$+z+11]=ie.itemSize===4?c.w:1)}}x={count:w,texture:pe,size:new ht(N,ae)},s.set(p,x),p.addEventListener("dispose",Q)}let _=0;for(let M=0;M<g.length;M++)_+=g[M];const C=p.morphTargetsRelative?1:1-_;v.getUniforms().setValue(n,"morphTargetBaseInfluence",C),v.getUniforms().setValue(n,"morphTargetInfluences",g),v.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),v.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const E=g===void 0?0:g.length;let w=i[p.id];if(w===void 0||w.length!==E){w=[];for(let R=0;R<E;R++)w[R]=[R,0];i[p.id]=w}for(let R=0;R<E;R++){const I=w[R];I[0]=R,I[1]=g[R]}w.sort(eU);for(let R=0;R<8;R++)R<E&&w[R][1]?(u[R][0]=w[R][0],u[R][1]=w[R][1]):(u[R][0]=Number.MAX_SAFE_INTEGER,u[R][1]=0);u.sort(QI);const x=p.morphAttributes.position,_=p.morphAttributes.normal;let C=0;for(let R=0;R<8;R++){const I=u[R],O=I[0],F=I[1];O!==Number.MAX_SAFE_INTEGER&&F?(x&&p.getAttribute("morphTarget"+R)!==x[O]&&p.setAttribute("morphTarget"+R,x[O]),_&&p.getAttribute("morphNormal"+R)!==_[O]&&p.setAttribute("morphNormal"+R,_[O]),a[R]=F,C+=F):(x&&p.hasAttribute("morphTarget"+R)===!0&&p.deleteAttribute("morphTarget"+R),_&&p.hasAttribute("morphNormal"+R)===!0&&p.deleteAttribute("morphNormal"+R),a[R]=0)}const M=p.morphTargetsRelative?1:1-C;v.getUniforms().setValue(n,"morphTargetBaseInfluence",M),v.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:d}}function nU(n,e,t,i){let a=new WeakMap;function s(d){const h=i.render.frame,p=d.geometry,v=e.get(d,p);if(a.get(v)!==h&&(e.update(v),a.set(v,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return v}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:c}}class rE extends or{constructor(e,t,i,a,s,c,u,d,h,p){if(p=p!==void 0?p:ta,p!==ta&&p!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ta&&(i=co),i===void 0&&p===ps&&(i=ea),super(null,a,s,c,u,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Tn,this.minFilter=d!==void 0?d:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const iE=new or,oE=new rE(1,1);oE.compareFunction=VS;const aE=new jS,sE=new B2,lE=new tE,I0=[],U0=[],N0=new Float32Array(16),F0=new Float32Array(9),O0=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=I0[a];if(s===void 0&&(s=new Float32Array(a),I0[a]=s),e!==0){i.toArray(s,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(s,u)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function df(n,e){let t=U0[e];t===void 0&&(t=new Int32Array(e),U0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rU(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function oU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function aU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function sU(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;O0.set(i),n.uniformMatrix2fv(this.addr,!1,O0),pn(t,i)}}function lU(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;F0.set(i),n.uniformMatrix3fv(this.addr,!1,F0),pn(t,i)}}function uU(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;N0.set(i),n.uniformMatrix4fv(this.addr,!1,N0),pn(t,i)}}function cU(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function dU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function hU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function pU(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function vU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function gU(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function _U(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?oE:iE;t.setTexture2D(e||s,a)}function yU(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||sE,a)}function xU(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||lE,a)}function SU(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||aE,a)}function EU(n){switch(n){case 5126:return rU;case 35664:return iU;case 35665:return oU;case 35666:return aU;case 35674:return sU;case 35675:return lU;case 35676:return uU;case 5124:case 35670:return cU;case 35667:case 35671:return fU;case 35668:case 35672:return dU;case 35669:case 35673:return hU;case 5125:return pU;case 36294:return mU;case 36295:return vU;case 36296:return gU;case 35678:case 36198:case 36298:case 36306:case 35682:return _U;case 35679:case 36299:case 36307:return yU;case 35680:case 36300:case 36308:case 36293:return xU;case 36289:case 36303:case 36311:case 36292:return SU}}function wU(n,e){n.uniform1fv(this.addr,e)}function MU(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function AU(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function TU(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function bU(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CU(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RU(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function LU(n,e){n.uniform1iv(this.addr,e)}function PU(n,e){n.uniform2iv(this.addr,e)}function DU(n,e){n.uniform3iv(this.addr,e)}function IU(n,e){n.uniform4iv(this.addr,e)}function UU(n,e){n.uniform1uiv(this.addr,e)}function NU(n,e){n.uniform2uiv(this.addr,e)}function FU(n,e){n.uniform3uiv(this.addr,e)}function OU(n,e){n.uniform4uiv(this.addr,e)}function zU(n,e,t){const i=this.cache,a=e.length,s=df(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||iE,s[c])}function kU(n,e,t){const i=this.cache,a=e.length,s=df(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||sE,s[c])}function BU(n,e,t){const i=this.cache,a=e.length,s=df(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||lE,s[c])}function HU(n,e,t){const i=this.cache,a=e.length,s=df(t,a);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||aE,s[c])}function VU(n){switch(n){case 5126:return wU;case 35664:return MU;case 35665:return AU;case 35666:return TU;case 35674:return bU;case 35675:return CU;case 35676:return RU;case 5124:case 35670:return LU;case 35667:case 35671:return PU;case 35668:case 35672:return DU;case 35669:case 35673:return IU;case 5125:return UU;case 36294:return NU;case 36295:return FU;case 36296:return OU;case 35678:case 36198:case 36298:case 36306:case 35682:return zU;case 35679:case 36299:case 36307:return kU;case 35680:case 36300:case 36308:case 36293:return BU;case 36289:case 36303:case 36311:case 36292:return HU}}class GU{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=EU(t.type)}}class WU{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VU(t.type)}}class $U{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,c=a.length;s!==c;++s){const u=a[s];u.setValue(e,t[u.id],i)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function z0(n,e){n.seq.push(e),n.map[e.id]=e}function XU(n,e,t){const i=n.name,a=i.length;for(zh.lastIndex=0;;){const s=zh.exec(i),c=zh.lastIndex;let u=s[1];const d=s[2]==="]",h=s[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){z0(t,h===void 0?new GU(u,n,e):new WU(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new $U(u),z0(t,v)),t=v}}}class Lc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);XU(s,c,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,c=t.length;s!==c;++s){const u=t[s],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function k0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jU=37297;let YU=0;function qU(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=a;c<s;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function KU(n){const e=Ft.getPrimaries(Ft.workingColorSpace),t=Ft.getPrimaries(n);let i;switch(e===t?i="":e===Oc&&t===Fc?i="LinearDisplayP3ToLinearSRGB":e===Fc&&t===Oc&&(i="LinearSRGBToLinearDisplayP3"),n){case Pi:case cf:return[i,"LinearTransferOETF"];case bn:case ym:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function B0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+qU(n.getShaderSource(e),c)}else return a}function ZU(n,e){const t=KU(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function JU(n,e){let t;switch(e){case ZP:t="Linear";break;case JP:t="Reinhard";break;case QP:t="OptimizedCineon";break;case e2:t="ACESFilmic";break;case t2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function QU(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ll).join(`
`)}function eN(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tN(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),c=s.name;let u=1;s.type===n.FLOAT_MAT2&&(u=2),s.type===n.FLOAT_MAT3&&(u=3),s.type===n.FLOAT_MAT4&&(u=4),t[c]={type:s.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function ll(n){return n!==""}function H0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(n){return n.replace(nN,iN)}const rN=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iN(n,e){let t=yt[e];if(t===void 0){const i=rN.get(e);if(i!==void 0)t=yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mp(t)}const oN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(n){return n.replace(oN,aN)}function aN(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function W0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sN(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===PS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===AP?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function lN(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case hs:e="ENVMAP_TYPE_CUBE";break;case uf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uN(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function cN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gm:e="ENVMAP_BLENDING_MULTIPLY";break;case qP:e="ENVMAP_BLENDING_MIX";break;case KP:e="ENVMAP_BLENDING_ADD";break}return e}function fN(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function dN(n,e,t,i){const a=n.getContext(),s=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=sN(t),h=lN(t),p=uN(t),v=cN(t),g=fN(t),S=t.isWebGL2?"":QU(t),E=eN(s),w=a.createProgram();let x,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ll).join(`
`),x.length>0&&(x+=`
`),_=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ll).join(`
`),_.length>0&&(_+=`
`)):(x=[W0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),_=[S,W0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mo?"#define TONE_MAPPING":"",t.toneMapping!==mo?yt.tonemapping_pars_fragment:"",t.toneMapping!==mo?JU("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,ZU("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ll).join(`
`)),c=Mp(c),c=H0(c,t),c=V0(c,t),u=Mp(u),u=H0(u,t),u=V0(u,t),c=G0(c),u=G0(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===l0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===l0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=C+x+c,R=C+_+u,I=k0(a,a.VERTEX_SHADER,M),O=k0(a,a.FRAGMENT_SHADER,R);a.attachShader(w,I),a.attachShader(w,O),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(ae){if(n.debug.checkShaderErrors){const ne=a.getProgramInfoLog(w).trim(),pe=a.getShaderInfoLog(I).trim(),H=a.getShaderInfoLog(O).trim();let Q=!0,se=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,w,I,O);else{const re=B0(a,I,"vertex"),X=B0(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+re+`
`+X)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(pe===""||H==="")&&(se=!1);se&&(ae.diagnostics={runnable:Q,programLog:ne,vertexShader:{log:pe,prefix:x},fragmentShader:{log:H,prefix:_}})}a.deleteShader(I),a.deleteShader(O),de=new Lc(a,w),b=tN(a,w)}let de;this.getUniforms=function(){return de===void 0&&F(this),de};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(w,jU)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YU++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=O,this}let hN=0;class pN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mN(e),t.set(e,i)),i}}class mN{constructor(e){this.id=hN++,this.code=e,this.usedTimes=0}}function vN(n,e,t,i,a,s,c){const u=new YS,d=new pN,h=[],p=a.isWebGL2,v=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return b===0?"uv":`uv${b}`}function x(b,N,ae,ne,pe){const H=ne.fog,Q=pe.geometry,se=b.isMeshStandardMaterial?ne.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),X=re&&re.mapping===uf?re.image.height:null,ie=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const $=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,L=$!==void 0?$.length:0;let z=0;Q.morphAttributes.position!==void 0&&(z=1),Q.morphAttributes.normal!==void 0&&(z=2),Q.morphAttributes.color!==void 0&&(z=3);let W,q,ee,Z;if(ie){const vn=rr[ie];W=vn.vertexShader,q=vn.fragmentShader}else W=b.vertexShader,q=b.fragmentShader,d.update(b),ee=d.getVertexShaderID(b),Z=d.getFragmentShaderID(b);const _e=n.getRenderTarget(),ve=pe.isInstancedMesh===!0,be=pe.isBatchedMesh===!0,Fe=!!b.map,Oe=!!b.matcap,j=!!re,Lt=!!b.aoMap,Be=!!b.lightMap,le=!!b.bumpMap,ue=!!b.normalMap,xe=!!b.displacementMap,ge=!!b.emissiveMap,Me=!!b.metalnessMap,we=!!b.roughnessMap,Ie=b.anisotropy>0,Ze=b.clearcoat>0,D=b.iridescence>0,T=b.sheen>0,Y=b.transmission>0,Ae=Ie&&!!b.anisotropyMap,ye=Ze&&!!b.clearcoatMap,Ce=Ze&&!!b.clearcoatNormalMap,qe=Ze&&!!b.clearcoatRoughnessMap,De=D&&!!b.iridescenceMap,ke=D&&!!b.iridescenceThicknessMap,lt=T&&!!b.sheenColorMap,wt=T&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Pt=!!b.specularColorMap,ft=!!b.specularIntensityMap,st=Y&&!!b.transmissionMap,et=Y&&!!b.thicknessMap,$e=!!b.gradientMap,gt=!!b.alphaMap,V=b.alphaTest>0,ze=!!b.alphaHash,Re=!!b.extensions,me=!!Q.attributes.uv1,Ue=!!Q.attributes.uv2,ot=!!Q.attributes.uv3;let Et=mo;return b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Et=n.toneMapping),{isWebGL2:p,shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:q,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:be,instancing:ve,instancingColor:ve&&pe.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Pi,map:Fe,matcap:Oe,envMap:j,envMapMode:j&&re.mapping,envMapCubeUVHeight:X,aoMap:Lt,lightMap:Be,bumpMap:le,normalMap:ue,displacementMap:g&&xe,emissiveMap:ge,normalMapObjectSpace:ue&&b.normalMapType===h2,normalMapTangentSpace:ue&&b.normalMapType===HS,metalnessMap:Me,roughnessMap:we,anisotropy:Ie,anisotropyMap:Ae,clearcoat:Ze,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:qe,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:ke,sheen:T,sheenColorMap:lt,sheenRoughnessMap:wt,specularMap:Pe,specularColorMap:Pt,specularIntensityMap:ft,transmission:Y,transmissionMap:st,thicknessMap:et,gradientMap:$e,opaque:b.transparent===!1&&b.blending===rs,alphaMap:gt,alphaTest:V,alphaHash:ze,combine:b.combine,mapUv:Fe&&w(b.map.channel),aoMapUv:Lt&&w(b.aoMap.channel),lightMapUv:Be&&w(b.lightMap.channel),bumpMapUv:le&&w(b.bumpMap.channel),normalMapUv:ue&&w(b.normalMap.channel),displacementMapUv:xe&&w(b.displacementMap.channel),emissiveMapUv:ge&&w(b.emissiveMap.channel),metalnessMapUv:Me&&w(b.metalnessMap.channel),roughnessMapUv:we&&w(b.roughnessMap.channel),anisotropyMapUv:Ae&&w(b.anisotropyMap.channel),clearcoatMapUv:ye&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&w(b.sheenRoughnessMap.channel),specularMapUv:Pe&&w(b.specularMap.channel),specularColorMapUv:Pt&&w(b.specularColorMap.channel),specularIntensityMapUv:ft&&w(b.specularIntensityMap.channel),transmissionMapUv:st&&w(b.transmissionMap.channel),thicknessMapUv:et&&w(b.thicknessMap.channel),alphaMapUv:gt&&w(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ue||Ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:Ue,vertexUv3s:ot,pointsUvs:pe.isPoints===!0&&!!Q.attributes.uv&&(Fe||gt),fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:pe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:z,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&ae.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&b.map.isVideoTexture===!0&&Ft.getTransfer(b.map.colorSpace)===$t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ci,flipSided:b.side===ir,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Re&&b.extensions.derivatives===!0,extensionFragDepth:Re&&b.extensions.fragDepth===!0,extensionDrawBuffers:Re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function _(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ae in b.defines)N.push(ae),N.push(b.defines[ae]);return b.isRawShaderMaterial===!1&&(C(N,b),M(N,b),N.push(n.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function C(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function M(b,N){u.disableAll(),N.isWebGL2&&u.enable(0),N.supportsVertexTextures&&u.enable(1),N.instancing&&u.enable(2),N.instancingColor&&u.enable(3),N.matcap&&u.enable(4),N.envMap&&u.enable(5),N.normalMapObjectSpace&&u.enable(6),N.normalMapTangentSpace&&u.enable(7),N.clearcoat&&u.enable(8),N.iridescence&&u.enable(9),N.alphaTest&&u.enable(10),N.vertexColors&&u.enable(11),N.vertexAlphas&&u.enable(12),N.vertexUv1s&&u.enable(13),N.vertexUv2s&&u.enable(14),N.vertexUv3s&&u.enable(15),N.vertexTangents&&u.enable(16),N.anisotropy&&u.enable(17),N.alphaHash&&u.enable(18),N.batching&&u.enable(19),b.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.skinning&&u.enable(4),N.morphTargets&&u.enable(5),N.morphNormals&&u.enable(6),N.morphColors&&u.enable(7),N.premultipliedAlpha&&u.enable(8),N.shadowMapEnabled&&u.enable(9),N.useLegacyLights&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),b.push(u.mask)}function R(b){const N=E[b.type];let ae;if(N){const ne=rr[N];ae=Em.clone(ne.uniforms)}else ae=b.uniforms;return ae}function I(b,N){let ae;for(let ne=0,pe=h.length;ne<pe;ne++){const H=h[ne];if(H.cacheKey===N){ae=H,++ae.usedTimes;break}}return ae===void 0&&(ae=new dN(n,N,b,s),h.push(ae)),ae}function O(b){if(--b.usedTimes===0){const N=h.indexOf(b);h[N]=h[h.length-1],h.pop(),b.destroy()}}function F(b){d.remove(b)}function de(){d.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:R,acquireProgram:I,releaseProgram:O,releaseShaderCache:F,programs:h,dispose:de}}function gN(){let n=new WeakMap;function e(s){let c=n.get(s);return c===void 0&&(c={},n.set(s,c)),c}function t(s){n.delete(s)}function i(s,c,u){n.get(s)[c]=u}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function _N(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function X0(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function c(v,g,S,E,w,x){let _=n[e];return _===void 0?(_={id:v.id,object:v,geometry:g,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:x},n[e]=_):(_.id=v.id,_.object=v,_.geometry=g,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=w,_.group=x),e++,_}function u(v,g,S,E,w,x){const _=c(v,g,S,E,w,x);S.transmission>0?i.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(v,g,S,E,w,x){const _=c(v,g,S,E,w,x);S.transmission>0?i.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(v,g){t.length>1&&t.sort(v||_N),i.length>1&&i.sort(g||$0),a.length>1&&a.sort(g||$0)}function p(){for(let v=e,g=n.length;v<g;v++){const S=n[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:u,unshift:d,finish:p,sort:h}}function yN(){let n=new WeakMap;function e(i,a){const s=n.get(i);let c;return s===void 0?(c=new X0,n.set(i,[c])):a>=s.length?(c=new X0,s.push(c)):c=s[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function xN(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function SN(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let EN=0;function wN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function MN(n,e){const t=new xN,i=SN(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new B);const s=new B,c=new Vt,u=new Vt;function d(p,v){let g=0,S=0,E=0;for(let ne=0;ne<9;ne++)a.probe[ne].set(0,0,0);let w=0,x=0,_=0,C=0,M=0,R=0,I=0,O=0,F=0,de=0,b=0;p.sort(wN);const N=v===!0?Math.PI:1;for(let ne=0,pe=p.length;ne<pe;ne++){const H=p[ne],Q=H.color,se=H.intensity,re=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Q.r*se*N,S+=Q.g*se*N,E+=Q.b*se*N;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(H.sh.coefficients[ie],se);b++}else if(H.isDirectionalLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*N),H.castShadow){const $=H.shadow,L=i.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,a.directionalShadow[w]=L,a.directionalShadowMap[w]=X,a.directionalShadowMatrix[w]=H.shadow.matrix,R++}a.directional[w]=ie,w++}else if(H.isSpotLight){const ie=t.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(Q).multiplyScalar(se*N),ie.distance=re,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,a.spot[_]=ie;const $=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,$.updateMatrices(H),H.castShadow&&de++),a.spotLightMatrix[_]=$.matrix,H.castShadow){const L=i.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,a.spotShadow[_]=L,a.spotShadowMap[_]=X,O++}_++}else if(H.isRectAreaLight){const ie=t.get(H);ie.color.copy(Q).multiplyScalar(se),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),a.rectArea[C]=ie,C++}else if(H.isPointLight){const ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*N),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const $=H.shadow,L=i.get(H);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,L.shadowCameraNear=$.camera.near,L.shadowCameraFar=$.camera.far,a.pointShadow[x]=L,a.pointShadowMap[x]=X,a.pointShadowMatrix[x]=H.shadow.matrix,I++}a.point[x]=ie,x++}else if(H.isHemisphereLight){const ie=t.get(H);ie.skyColor.copy(H.color).multiplyScalar(se*N),ie.groundColor.copy(H.groundColor).multiplyScalar(se*N),a.hemi[M]=ie,M++}}C>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=S,a.ambient[2]=E;const ae=a.hash;(ae.directionalLength!==w||ae.pointLength!==x||ae.spotLength!==_||ae.rectAreaLength!==C||ae.hemiLength!==M||ae.numDirectionalShadows!==R||ae.numPointShadows!==I||ae.numSpotShadows!==O||ae.numSpotMaps!==F||ae.numLightProbes!==b)&&(a.directional.length=w,a.spot.length=_,a.rectArea.length=C,a.point.length=x,a.hemi.length=M,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=I,a.pointShadowMap.length=I,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=I,a.spotLightMatrix.length=O+F-de,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=de,a.numLightProbes=b,ae.directionalLength=w,ae.pointLength=x,ae.spotLength=_,ae.rectAreaLength=C,ae.hemiLength=M,ae.numDirectionalShadows=R,ae.numPointShadows=I,ae.numSpotShadows=O,ae.numSpotMaps=F,ae.numLightProbes=b,a.version=EN++)}function h(p,v){let g=0,S=0,E=0,w=0,x=0;const _=v.matrixWorldInverse;for(let C=0,M=p.length;C<M;C++){const R=p[C];if(R.isDirectionalLight){const I=a.directional[g];I.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(_),g++}else if(R.isSpotLight){const I=a.spot[E];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(_),E++}else if(R.isRectAreaLight){const I=a.rectArea[w];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),u.identity(),c.copy(R.matrixWorld),c.premultiply(_),u.extractRotation(c),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),w++}else if(R.isPointLight){const I=a.point[S];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),S++}else if(R.isHemisphereLight){const I=a.hemi[x];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(_),x++}}}return{setup:d,setupView:h,state:a}}function j0(n,e){const t=new MN(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function c(v){i.push(v)}function u(v){a.push(v)}function d(v){t.setup(i,v)}function h(v){t.setupView(i,v)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function AN(n,e){let t=new WeakMap;function i(s,c=0){const u=t.get(s);let d;return u===void 0?(d=new j0(n,e),t.set(s,[d])):c>=u.length?(d=new j0(n,e),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:i,dispose:a}}class TN extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bN extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RN=`uniform sampler2D shadow_pass;
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
}`;function LN(n,e,t){let i=new ff;const a=new ht,s=new ht,c=new Ot,u=new TN({depthPacking:d2}),d=new bN,h={},p=t.maxTextureSize,v={[xo]:ir,[ir]:xo,[Ci]:Ci},g=new So({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:CN,fragmentShader:RN}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Bn;E.setAttribute("position",new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new jr(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PS;let _=this.type;this.render=function(I,O,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const de=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(po),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ne=_!==bi&&this.type===bi,pe=_===bi&&this.type!==bi;for(let H=0,Q=I.length;H<Q;H++){const se=I[H],re=se.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);const X=re.getFrameExtents();if(a.multiply(X),s.copy(re.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(s.x=Math.floor(p/X.x),a.x=s.x*X.x,re.mapSize.x=s.x),a.y>p&&(s.y=Math.floor(p/X.y),a.y=s.y*X.y,re.mapSize.y=s.y)),re.map===null||ne===!0||pe===!0){const $=this.type!==bi?{minFilter:Tn,magFilter:Tn}:{};re.map!==null&&re.map.dispose(),re.map=new ra(a.x,a.y,$),re.map.texture.name=se.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();const ie=re.getViewportCount();for(let $=0;$<ie;$++){const L=re.getViewport($);c.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),ae.viewport(c),re.updateMatrices(se,$),i=re.getFrustum(),R(O,F,re.camera,se,this.type)}re.isPointLightShadow!==!0&&this.type===bi&&C(re,F),re.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(de,b,N)};function C(I,O){const F=e.update(w);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ra(a.x,a.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(O,null,F,g,w,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(O,null,F,S,w,null)}function M(I,O,F,de){let b=null;const N=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)b=N;else if(b=F.isPointLight===!0?d:u,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ae=b.uuid,ne=O.uuid;let pe=h[ae];pe===void 0&&(pe={},h[ae]=pe);let H=pe[ne];H===void 0&&(H=b.clone(),pe[ne]=H),b=H}if(b.visible=O.visible,b.wireframe=O.wireframe,de===bi?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:v[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ae=n.properties.get(b);ae.light=F}return b}function R(I,O,F,de,b){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===bi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const ne=e.update(I),pe=I.material;if(Array.isArray(pe)){const H=ne.groups;for(let Q=0,se=H.length;Q<se;Q++){const re=H[Q],X=pe[re.materialIndex];if(X&&X.visible){const ie=M(I,X,de,b);I.onBeforeShadow(n,I,O,F,ne,ie,re),n.renderBufferDirect(F,null,ne,ie,I,re),I.onAfterShadow(n,I,O,F,ne,ie,re)}}}else if(pe.visible){const H=M(I,pe,de,b);I.onBeforeShadow(n,I,O,F,ne,H,null),n.renderBufferDirect(F,null,ne,H,I,null),I.onAfterShadow(n,I,O,F,ne,H,null)}}const ae=I.children;for(let ne=0,pe=ae.length;ne<pe;ne++)R(ae[ne],O,F,de,b)}}function PN(n,e,t){const i=t.isWebGL2;function a(){let V=!1;const ze=new Ot;let Re=null;const me=new Ot(0,0,0,0);return{setMask:function(Ue){Re!==Ue&&!V&&(n.colorMask(Ue,Ue,Ue,Ue),Re=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,ot,Et,Jt,vn){vn===!0&&(Ue*=Jt,ot*=Jt,Et*=Jt),ze.set(Ue,ot,Et,Jt),me.equals(ze)===!1&&(n.clearColor(Ue,ot,Et,Jt),me.copy(ze))},reset:function(){V=!1,Re=null,me.set(-1,0,0,0)}}}function s(){let V=!1,ze=null,Re=null,me=null;return{setTest:function(Ue){Ue?be(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(Ue){ze!==Ue&&!V&&(n.depthMask(Ue),ze=Ue)},setFunc:function(Ue){if(Re!==Ue){switch(Ue){case VP:n.depthFunc(n.NEVER);break;case GP:n.depthFunc(n.ALWAYS);break;case WP:n.depthFunc(n.LESS);break;case Uc:n.depthFunc(n.LEQUAL);break;case $P:n.depthFunc(n.EQUAL);break;case XP:n.depthFunc(n.GEQUAL);break;case jP:n.depthFunc(n.GREATER);break;case YP:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){me!==Ue&&(n.clearDepth(Ue),me=Ue)},reset:function(){V=!1,ze=null,Re=null,me=null}}}function c(){let V=!1,ze=null,Re=null,me=null,Ue=null,ot=null,Et=null,Jt=null,vn=null;return{setTest:function(bt){V||(bt?be(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(bt){ze!==bt&&!V&&(n.stencilMask(bt),ze=bt)},setFunc:function(bt,cn,Ln){(Re!==bt||me!==cn||Ue!==Ln)&&(n.stencilFunc(bt,cn,Ln),Re=bt,me=cn,Ue=Ln)},setOp:function(bt,cn,Ln){(ot!==bt||Et!==cn||Jt!==Ln)&&(n.stencilOp(bt,cn,Ln),ot=bt,Et=cn,Jt=Ln)},setLocked:function(bt){V=bt},setClear:function(bt){vn!==bt&&(n.clearStencil(bt),vn=bt)},reset:function(){V=!1,ze=null,Re=null,me=null,Ue=null,ot=null,Et=null,Jt=null,vn=null}}}const u=new a,d=new s,h=new c,p=new WeakMap,v=new WeakMap;let g={},S={},E=new WeakMap,w=[],x=null,_=!1,C=null,M=null,R=null,I=null,O=null,F=null,de=null,b=new nt(0,0,0),N=0,ae=!1,ne=null,pe=null,H=null,Q=null,se=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ie>=2);let L=null,z={};const W=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ee=new Ot().fromArray(W),Z=new Ot().fromArray(q);function _e(V,ze,Re,me){const Ue=new Uint8Array(4),ot=n.createTexture();n.bindTexture(V,ot),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<Re;Et++)i&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(ze,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(ze+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return ot}const ve={};ve[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(n.DEPTH_TEST),d.setFunc(Uc),ge(!1),Me(R_),be(n.CULL_FACE),ue(po);function be(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Fe(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function Oe(V,ze){return S[V]!==ze?(n.bindFramebuffer(V,ze),S[V]=ze,i&&(V===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=ze),V===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=ze)),!0):!1}function j(V,ze){let Re=w,me=!1;if(V)if(Re=E.get(ze),Re===void 0&&(Re=[],E.set(ze,Re)),V.isWebGLMultipleRenderTargets){const Ue=V.texture;if(Re.length!==Ue.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Et=Ue.length;ot<Et;ot++)Re[ot]=n.COLOR_ATTACHMENT0+ot;Re.length=Ue.length,me=!0}}else Re[0]!==n.COLOR_ATTACHMENT0&&(Re[0]=n.COLOR_ATTACHMENT0,me=!0);else Re[0]!==n.BACK&&(Re[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Lt(V){return x!==V?(n.useProgram(V),x=V,!0):!1}const Be={[Ko]:n.FUNC_ADD,[bP]:n.FUNC_SUBTRACT,[CP]:n.FUNC_REVERSE_SUBTRACT};if(i)Be[I_]=n.MIN,Be[U_]=n.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Be[I_]=V.MIN_EXT,Be[U_]=V.MAX_EXT)}const le={[RP]:n.ZERO,[LP]:n.ONE,[PP]:n.SRC_COLOR,[mp]:n.SRC_ALPHA,[OP]:n.SRC_ALPHA_SATURATE,[NP]:n.DST_COLOR,[IP]:n.DST_ALPHA,[DP]:n.ONE_MINUS_SRC_COLOR,[vp]:n.ONE_MINUS_SRC_ALPHA,[FP]:n.ONE_MINUS_DST_COLOR,[UP]:n.ONE_MINUS_DST_ALPHA,[zP]:n.CONSTANT_COLOR,[kP]:n.ONE_MINUS_CONSTANT_COLOR,[BP]:n.CONSTANT_ALPHA,[HP]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(V,ze,Re,me,Ue,ot,Et,Jt,vn,bt){if(V===po){_===!0&&(Fe(n.BLEND),_=!1);return}if(_===!1&&(be(n.BLEND),_=!0),V!==TP){if(V!==C||bt!==ae){if((M!==Ko||O!==Ko)&&(n.blendEquation(n.FUNC_ADD),M=Ko,O=Ko),bt)switch(V){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case L_:n.blendFunc(n.ONE,n.ONE);break;case P_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case D_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case L_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case P_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case D_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,I=null,F=null,de=null,b.set(0,0,0),N=0,C=V,ae=bt}return}Ue=Ue||ze,ot=ot||Re,Et=Et||me,(ze!==M||Ue!==O)&&(n.blendEquationSeparate(Be[ze],Be[Ue]),M=ze,O=Ue),(Re!==R||me!==I||ot!==F||Et!==de)&&(n.blendFuncSeparate(le[Re],le[me],le[ot],le[Et]),R=Re,I=me,F=ot,de=Et),(Jt.equals(b)===!1||vn!==N)&&(n.blendColor(Jt.r,Jt.g,Jt.b,vn),b.copy(Jt),N=vn),C=V,ae=!1}function xe(V,ze){V.side===Ci?Fe(n.CULL_FACE):be(n.CULL_FACE);let Re=V.side===ir;ze&&(Re=!Re),ge(Re),V.blending===rs&&V.transparent===!1?ue(po):ue(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const me=V.stencilWrite;h.setTest(me),me&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){ne!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),ne=V)}function Me(V){V!==wP?(be(n.CULL_FACE),V!==pe&&(V===R_?n.cullFace(n.BACK):V===MP?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),pe=V}function we(V){V!==H&&(X&&n.lineWidth(V),H=V)}function Ie(V,ze,Re){V?(be(n.POLYGON_OFFSET_FILL),(Q!==ze||se!==Re)&&(n.polygonOffset(ze,Re),Q=ze,se=Re)):Fe(n.POLYGON_OFFSET_FILL)}function Ze(V){V?be(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function D(V){V===void 0&&(V=n.TEXTURE0+re-1),L!==V&&(n.activeTexture(V),L=V)}function T(V,ze,Re){Re===void 0&&(L===null?Re=n.TEXTURE0+re-1:Re=L);let me=z[Re];me===void 0&&(me={type:void 0,texture:void 0},z[Re]=me),(me.type!==V||me.texture!==ze)&&(L!==Re&&(n.activeTexture(Re),L=Re),n.bindTexture(V,ze||ve[V]),me.type=V,me.texture=ze)}function Y(){const V=z[L];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(V){ee.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function st(V){Z.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function et(V,ze){let Re=v.get(ze);Re===void 0&&(Re=new WeakMap,v.set(ze,Re));let me=Re.get(V);me===void 0&&(me=n.getUniformBlockIndex(ze,V.name),Re.set(V,me))}function $e(V,ze){const me=v.get(ze).get(V);p.get(ze)!==me&&(n.uniformBlockBinding(ze,me,V.__bindingPointIndex),p.set(ze,me))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},L=null,z={},S={},E=new WeakMap,w=[],x=null,_=!1,C=null,M=null,R=null,I=null,O=null,F=null,de=null,b=new nt(0,0,0),N=0,ae=!1,ne=null,pe=null,H=null,Q=null,se=null,ee.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:be,disable:Fe,bindFramebuffer:Oe,drawBuffers:j,useProgram:Lt,setBlending:ue,setMaterial:xe,setFlipSided:ge,setCullFace:Me,setLineWidth:we,setPolygonOffset:Ie,setScissorTest:Ze,activeTexture:D,bindTexture:T,unbindTexture:Y,compressedTexImage2D:Ae,compressedTexImage3D:ye,texImage2D:Pe,texImage3D:Pt,updateUBOMapping:et,uniformBlockBinding:$e,texStorage2D:lt,texStorage3D:wt,texSubImage2D:Ce,texSubImage3D:qe,compressedTexSubImage2D:De,compressedTexSubImage3D:ke,scissor:ft,viewport:st,reset:gt}}function DN(n,e,t,i,a,s,c){const u=a.isWebGL2,d=a.maxTextures,h=a.maxCubemapSize,p=a.maxTextureSize,v=a.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let w;const x=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,T){return _?new OffscreenCanvas(D,T):kc("canvas")}function M(D,T,Y,Ae){let ye=1;if((D.width>Ae||D.height>Ae)&&(ye=Ae/Math.max(D.width,D.height)),ye<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Ce=T?zc:Math.floor,qe=Ce(ye*D.width),De=Ce(ye*D.height);w===void 0&&(w=C(qe,De));const ke=Y?C(qe,De):w;return ke.width=qe,ke.height=De,ke.getContext("2d").drawImage(D,0,0,qe,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+qe+"x"+De+")."),ke}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function R(D){return wp(D.width)&&wp(D.height)}function I(D){return u?!1:D.wrapS!==Xr||D.wrapT!==Xr||D.minFilter!==Tn&&D.minFilter!==wr}function O(D,T){return D.generateMipmaps&&T&&D.minFilter!==Tn&&D.minFilter!==wr}function F(D){n.generateMipmap(D)}function de(D,T,Y,Ae,ye=!1){if(u===!1)return T;if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ce=T;if(T===n.RED&&(Y===n.FLOAT&&(Ce=n.R32F),Y===n.HALF_FLOAT&&(Ce=n.R16F),Y===n.UNSIGNED_BYTE&&(Ce=n.R8)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Ce=n.R8UI),Y===n.UNSIGNED_SHORT&&(Ce=n.R16UI),Y===n.UNSIGNED_INT&&(Ce=n.R32UI),Y===n.BYTE&&(Ce=n.R8I),Y===n.SHORT&&(Ce=n.R16I),Y===n.INT&&(Ce=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(Ce=n.RG32F),Y===n.HALF_FLOAT&&(Ce=n.RG16F),Y===n.UNSIGNED_BYTE&&(Ce=n.RG8)),T===n.RGBA){const qe=ye?Nc:Ft.getTransfer(Ae);Y===n.FLOAT&&(Ce=n.RGBA32F),Y===n.HALF_FLOAT&&(Ce=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Ce=qe===$t?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Ce=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Ce=n.RGB5_A1)}return(Ce===n.R16F||Ce===n.R32F||Ce===n.RG16F||Ce===n.RG32F||Ce===n.RGBA16F||Ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function b(D,T,Y){return O(D,Y)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==wr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){return D===Tn||D===N_||D===fh?n.NEAREST:n.LINEAR}function ae(D){const T=D.target;T.removeEventListener("dispose",ae),pe(T),T.isVideoTexture&&E.delete(T)}function ne(D){const T=D.target;T.removeEventListener("dispose",ne),Q(T)}function pe(D){const T=i.get(D);if(T.__webglInit===void 0)return;const Y=D.source,Ae=x.get(Y);if(Ae){const ye=Ae[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(D),Object.keys(Ae).length===0&&x.delete(Y)}i.remove(D)}function H(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const Y=D.source,Ae=x.get(Y);delete Ae[T.__cacheKey],c.memory.textures--}function Q(D){const T=D.texture,Y=i.get(D),Ae=i.get(T);if(Ae.__webglTexture!==void 0&&(n.deleteTexture(Ae.__webglTexture),c.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(Y.__webglFramebuffer[ye]))for(let Ce=0;Ce<Y.__webglFramebuffer[ye].length;Ce++)n.deleteFramebuffer(Y.__webglFramebuffer[ye][Ce]);else n.deleteFramebuffer(Y.__webglFramebuffer[ye]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[ye])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ye=0;ye<Y.__webglFramebuffer.length;ye++)n.deleteFramebuffer(Y.__webglFramebuffer[ye]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ye=0;ye<Y.__webglColorRenderbuffer.length;ye++)Y.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[ye]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ye=0,Ce=T.length;ye<Ce;ye++){const qe=i.get(T[ye]);qe.__webglTexture&&(n.deleteTexture(qe.__webglTexture),c.memory.textures--),i.remove(T[ye])}i.remove(T),i.remove(D)}let se=0;function re(){se=0}function X(){const D=se;return D>=d&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+d),se+=1,D}function ie(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function $(D,T){const Y=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const Ae=D.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(Y,D,T);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function L(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){be(Y,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function z(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){be(Y,D,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function W(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Fe(Y,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}const q={[yp]:n.REPEAT,[Xr]:n.CLAMP_TO_EDGE,[xp]:n.MIRRORED_REPEAT},ee={[Tn]:n.NEAREST,[N_]:n.NEAREST_MIPMAP_NEAREST,[fh]:n.NEAREST_MIPMAP_LINEAR,[wr]:n.LINEAR,[n2]:n.LINEAR_MIPMAP_NEAREST,[xl]:n.LINEAR_MIPMAP_LINEAR},Z={[p2]:n.NEVER,[x2]:n.ALWAYS,[m2]:n.LESS,[VS]:n.LEQUAL,[v2]:n.EQUAL,[y2]:n.GEQUAL,[g2]:n.GREATER,[_2]:n.NOTEQUAL};function _e(D,T,Y){if(Y?(n.texParameteri(D,n.TEXTURE_WRAP_S,q[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,q[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,q[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ee[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ee[T.minFilter])):(n.texParameteri(D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==Xr||T.wrapT!==Xr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(D,n.TEXTURE_MAG_FILTER,N(T.magFilter)),n.texParameteri(D,n.TEXTURE_MIN_FILTER,N(T.minFilter)),T.minFilter!==Tn&&T.minFilter!==wr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Tn||T.minFilter!==fh&&T.minFilter!==xl||T.type===Ri&&e.has("OES_texture_float_linear")===!1||u===!1&&T.type===Sl&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(D,Ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ve(D,T){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",ae));const Ae=T.source;let ye=x.get(Ae);ye===void 0&&(ye={},x.set(Ae,ye));const Ce=ie(T);if(Ce!==D.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ye[Ce].usedTimes++;const qe=ye[D.__cacheKey];qe!==void 0&&(ye[D.__cacheKey].usedTimes--,qe.usedTimes===0&&H(T)),D.__cacheKey=Ce,D.__webglTexture=ye[Ce].texture}return Y}function be(D,T,Y){let Ae=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ae=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ae=n.TEXTURE_3D);const ye=ve(D,T),Ce=T.source;t.bindTexture(Ae,D.__webglTexture,n.TEXTURE0+Y);const qe=i.get(Ce);if(Ce.version!==qe.__version||ye===!0){t.activeTexture(n.TEXTURE0+Y);const De=Ft.getPrimaries(Ft.workingColorSpace),ke=T.colorSpace===Ar?null:Ft.getPrimaries(T.colorSpace),lt=T.colorSpace===Ar||De===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const wt=I(T)&&R(T.image)===!1;let Pe=M(T.image,wt,!1,p);Pe=Ze(T,Pe);const Pt=R(Pe)||u,ft=s.convert(T.format,T.colorSpace);let st=s.convert(T.type),et=de(T.internalFormat,ft,st,T.colorSpace,T.isVideoTexture);_e(Ae,T,Pt);let $e;const gt=T.mipmaps,V=u&&T.isVideoTexture!==!0&&et!==kS,ze=qe.__version===void 0||ye===!0,Re=b(T,Pe,Pt);if(T.isDepthTexture)et=n.DEPTH_COMPONENT,u?T.type===Ri?et=n.DEPTH_COMPONENT32F:T.type===co?et=n.DEPTH_COMPONENT24:T.type===ea?et=n.DEPTH24_STENCIL8:et=n.DEPTH_COMPONENT16:T.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ta&&et===n.DEPTH_COMPONENT&&T.type!==_m&&T.type!==co&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=co,st=s.convert(T.type)),T.format===ps&&et===n.DEPTH_COMPONENT&&(et=n.DEPTH_STENCIL,T.type!==ea&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ea,st=s.convert(T.type))),ze&&(V?t.texStorage2D(n.TEXTURE_2D,1,et,Pe.width,Pe.height):t.texImage2D(n.TEXTURE_2D,0,et,Pe.width,Pe.height,0,ft,st,null));else if(T.isDataTexture)if(gt.length>0&&Pt){V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,gt[0].width,gt[0].height);for(let me=0,Ue=gt.length;me<Ue;me++)$e=gt[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,ft,st,$e.data);T.generateMipmaps=!1}else V?(ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,Pe.width,Pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe.width,Pe.height,ft,st,Pe.data)):t.texImage2D(n.TEXTURE_2D,0,et,Pe.width,Pe.height,0,ft,st,Pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,et,gt[0].width,gt[0].height,Pe.depth);for(let me=0,Ue=gt.length;me<Ue;me++)$e=gt[me],T.format!==Mr?ft!==null?V?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Pe.depth,ft,$e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,et,$e.width,$e.height,Pe.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$e.width,$e.height,Pe.depth,ft,st,$e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,et,$e.width,$e.height,Pe.depth,0,ft,st,$e.data)}else{V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,gt[0].width,gt[0].height);for(let me=0,Ue=gt.length;me<Ue;me++)$e=gt[me],T.format!==Mr?ft!==null?V?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,$e.data):t.compressedTexImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$e.width,$e.height,ft,st,$e.data):t.texImage2D(n.TEXTURE_2D,me,et,$e.width,$e.height,0,ft,st,$e.data)}else if(T.isDataArrayTexture)V?(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,et,Pe.width,Pe.height,Pe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,ft,st,Pe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,Pe.width,Pe.height,Pe.depth,0,ft,st,Pe.data);else if(T.isData3DTexture)V?(ze&&t.texStorage3D(n.TEXTURE_3D,Re,et,Pe.width,Pe.height,Pe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,ft,st,Pe.data)):t.texImage3D(n.TEXTURE_3D,0,et,Pe.width,Pe.height,Pe.depth,0,ft,st,Pe.data);else if(T.isFramebufferTexture){if(ze)if(V)t.texStorage2D(n.TEXTURE_2D,Re,et,Pe.width,Pe.height);else{let me=Pe.width,Ue=Pe.height;for(let ot=0;ot<Re;ot++)t.texImage2D(n.TEXTURE_2D,ot,et,me,Ue,0,ft,st,null),me>>=1,Ue>>=1}}else if(gt.length>0&&Pt){V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,gt[0].width,gt[0].height);for(let me=0,Ue=gt.length;me<Ue;me++)$e=gt[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ft,st,$e):t.texImage2D(n.TEXTURE_2D,me,et,ft,st,$e);T.generateMipmaps=!1}else V?(ze&&t.texStorage2D(n.TEXTURE_2D,Re,et,Pe.width,Pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,st,Pe)):t.texImage2D(n.TEXTURE_2D,0,et,ft,st,Pe);O(T,Pt)&&F(Ae),qe.__version=Ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Fe(D,T,Y){if(T.image.length!==6)return;const Ae=ve(D,T),ye=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const Ce=i.get(ye);if(ye.version!==Ce.__version||Ae===!0){t.activeTexture(n.TEXTURE0+Y);const qe=Ft.getPrimaries(Ft.workingColorSpace),De=T.colorSpace===Ar?null:Ft.getPrimaries(T.colorSpace),ke=T.colorSpace===Ar||qe===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!lt&&!wt?Pe[me]=M(T.image[me],!1,!0,h):Pe[me]=wt?T.image[me].image:T.image[me],Pe[me]=Ze(T,Pe[me]);const Pt=Pe[0],ft=R(Pt)||u,st=s.convert(T.format,T.colorSpace),et=s.convert(T.type),$e=de(T.internalFormat,st,et,T.colorSpace),gt=u&&T.isVideoTexture!==!0,V=Ce.__version===void 0||Ae===!0;let ze=b(T,Pt,ft);_e(n.TEXTURE_CUBE_MAP,T,ft);let Re;if(lt){gt&&V&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,$e,Pt.width,Pt.height);for(let me=0;me<6;me++){Re=Pe[me].mipmaps;for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];T.format!==Mr?st!==null?gt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,ot.width,ot.height,st,et,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,$e,ot.width,ot.height,0,st,et,ot.data)}}}else{Re=T.mipmaps,gt&&V&&(Re.length>0&&ze++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,$e,Pe[0].width,Pe[0].height));for(let me=0;me<6;me++)if(wt){gt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,st,et,Pe[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,Pe[me].width,Pe[me].height,0,st,et,Pe[me].data);for(let Ue=0;Ue<Re.length;Ue++){const Et=Re[Ue].image[me].image;gt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,Et.width,Et.height,st,et,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,Et.width,Et.height,0,st,et,Et.data)}}else{gt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,st,et,Pe[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$e,st,et,Pe[me]);for(let Ue=0;Ue<Re.length;Ue++){const ot=Re[Ue];gt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,st,et,ot.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,$e,st,et,ot.image[me])}}}O(T,ft)&&F(n.TEXTURE_CUBE_MAP),Ce.__version=ye.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Oe(D,T,Y,Ae,ye,Ce){const qe=s.convert(Y.format,Y.colorSpace),De=s.convert(Y.type),ke=de(Y.internalFormat,qe,De,Y.colorSpace);if(!i.get(T).__hasExternalTextures){const wt=Math.max(1,T.width>>Ce),Pe=Math.max(1,T.height>>Ce);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,ke,wt,Pe,T.depth,0,qe,De,null):t.texImage2D(ye,Ce,ke,wt,Pe,0,qe,De,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ye,i.get(Y).__webglTexture,0,Me(T)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ye,i.get(Y).__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(D,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let Ae=u===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||we(T)){const ye=T.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Ri?Ae=n.DEPTH_COMPONENT32F:ye.type===co&&(Ae=n.DEPTH_COMPONENT24));const Ce=Me(T);we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Ae,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const Ae=Me(T);Y&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{const Ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ye=0;ye<Ae.length;ye++){const Ce=Ae[ye],qe=s.convert(Ce.format,Ce.colorSpace),De=s.convert(Ce.type),ke=de(Ce.internalFormat,qe,De,Ce.colorSpace),lt=Me(T);Y&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,ke,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,ke,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ke,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Ae=i.get(T.depthTexture).__webglTexture,ye=Me(T);if(T.depthTexture.format===ta)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0);else if(T.depthTexture.format===ps)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function Be(D){const T=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Lt(T.__webglFramebuffer,D)}else if(Y){T.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Ae]),T.__webglDepthbuffer[Ae]=n.createRenderbuffer(),j(T.__webglDepthbuffer[Ae],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),j(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(D,T,Y){const Ae=i.get(D);T!==void 0&&Oe(Ae.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Be(D)}function ue(D){const T=D.texture,Y=i.get(D),Ae=i.get(T);D.addEventListener("dispose",ne),D.isWebGLMultipleRenderTargets!==!0&&(Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture()),Ae.__version=T.version,c.memory.textures++);const ye=D.isWebGLCubeRenderTarget===!0,Ce=D.isWebGLMultipleRenderTargets===!0,qe=R(D)||u;if(ye){Y.__webglFramebuffer=[];for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[De]=[];for(let ke=0;ke<T.mipmaps.length;ke++)Y.__webglFramebuffer[De][ke]=n.createFramebuffer()}else Y.__webglFramebuffer[De]=n.createFramebuffer()}else{if(u&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)Y.__webglFramebuffer[De]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ce)if(a.drawBuffers){const De=D.texture;for(let ke=0,lt=De.length;ke<lt;ke++){const wt=i.get(De[ke]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&D.samples>0&&we(D)===!1){const De=Ce?T:[T];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ke=0;ke<De.length;ke++){const lt=De[ke];Y.__webglColorRenderbuffer[ke]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ke]);const wt=s.convert(lt.format,lt.colorSpace),Pe=s.convert(lt.type),Pt=de(lt.internalFormat,wt,Pe,lt.colorSpace,D.isXRRenderTarget===!0),ft=Me(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Pt,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ke])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),j(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,Ae.__webglTexture),_e(n.TEXTURE_CUBE_MAP,T,qe);for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Oe(Y.__webglFramebuffer[De][ke],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ke);else Oe(Y.__webglFramebuffer[De],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);O(T,qe)&&F(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){const De=D.texture;for(let ke=0,lt=De.length;ke<lt;ke++){const wt=De[ke],Pe=i.get(wt);t.bindTexture(n.TEXTURE_2D,Pe.__webglTexture),_e(n.TEXTURE_2D,wt,qe),Oe(Y.__webglFramebuffer,D,wt,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,0),O(wt,qe)&&F(n.TEXTURE_2D)}t.unbindTexture()}else{let De=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(u?De=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,Ae.__webglTexture),_e(De,T,qe),u&&T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Oe(Y.__webglFramebuffer[ke],D,T,n.COLOR_ATTACHMENT0,De,ke);else Oe(Y.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,De,0);O(T,qe)&&F(De),t.unbindTexture()}D.depthBuffer&&Be(D)}function xe(D){const T=R(D)||u,Y=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Ae=0,ye=Y.length;Ae<ye;Ae++){const Ce=Y[Ae];if(O(Ce,T)){const qe=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,De=i.get(Ce).__webglTexture;t.bindTexture(qe,De),F(qe),t.unbindTexture()}}}function ge(D){if(u&&D.samples>0&&we(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Y=D.width,Ae=D.height;let ye=n.COLOR_BUFFER_BIT;const Ce=[],qe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(D),ke=D.isWebGLMultipleRenderTargets===!0;if(ke)for(let lt=0;lt<T.length;lt++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let lt=0;lt<T.length;lt++){Ce.push(n.COLOR_ATTACHMENT0+lt),D.depthBuffer&&Ce.push(qe);const wt=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(wt===!1&&(D.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),ke&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]),wt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[qe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[qe])),ke){const Pe=i.get(T[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,Y,Ae,0,0,Y,Ae,ye,n.NEAREST),S&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ke)for(let lt=0;lt<T.length;lt++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,De.__webglColorRenderbuffer[lt]);const wt=i.get(T[lt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,wt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Me(D){return Math.min(v,D.samples)}function we(D){const T=i.get(D);return u&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ie(D){const T=c.render.frame;E.get(D)!==T&&(E.set(D,T),D.update())}function Ze(D,T){const Y=D.colorSpace,Ae=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Ep||Y!==Pi&&Y!==Ar&&(Ft.getTransfer(Y)===$t?u===!1?e.has("EXT_sRGB")===!0&&Ae===Mr?(D.format=Ep,D.minFilter=wr,D.generateMipmaps=!1):T=$S.sRGBToLinear(T):(Ae!==Mr||ye!==vo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=X,this.resetTextureUnits=re,this.setTexture2D=$,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=we}function IN(n,e,t){const i=t.isWebGL2;function a(s,c=Ar){let u;const d=Ft.getTransfer(c);if(s===vo)return n.UNSIGNED_BYTE;if(s===US)return n.UNSIGNED_SHORT_4_4_4_4;if(s===NS)return n.UNSIGNED_SHORT_5_5_5_1;if(s===r2)return n.BYTE;if(s===i2)return n.SHORT;if(s===_m)return n.UNSIGNED_SHORT;if(s===IS)return n.INT;if(s===co)return n.UNSIGNED_INT;if(s===Ri)return n.FLOAT;if(s===Sl)return i?n.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(s===o2)return n.ALPHA;if(s===Mr)return n.RGBA;if(s===a2)return n.LUMINANCE;if(s===s2)return n.LUMINANCE_ALPHA;if(s===ta)return n.DEPTH_COMPONENT;if(s===ps)return n.DEPTH_STENCIL;if(s===Ep)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(s===l2)return n.RED;if(s===FS)return n.RED_INTEGER;if(s===u2)return n.RG;if(s===OS)return n.RG_INTEGER;if(s===zS)return n.RGBA_INTEGER;if(s===dh||s===hh||s===ph||s===mh)if(d===$t)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===dh)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ph)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===dh)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hh)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ph)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mh)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===F_||s===O_||s===z_||s===k_)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===F_)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===O_)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===z_)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===k_)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kS)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===B_||s===H_)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===B_)return d===$t?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===H_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===V_||s===G_||s===W_||s===$_||s===X_||s===j_||s===Y_||s===q_||s===K_||s===Z_||s===J_||s===Q_||s===e0||s===t0)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===V_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===G_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===W_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===X_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===j_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Y_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===q_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===K_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Z_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===J_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Q_)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===e0)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===t0)return d===$t?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vh||s===n0||s===r0)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===vh)return d===$t?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===n0)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===r0)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===c2||s===i0||s===o0||s===a0)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===vh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===i0)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===o0)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===a0)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ea?i?n.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class UN extends hr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ul extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NN={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,i),_=this._getHandJoint(h,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),S=.02,E=.005;h.inputState.pinching&&g>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(NN)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class FN extends ua{constructor(e,t){super();const i=this;let a=null,s=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,g=null,S=null,E=null;const w=t.getContextAttributes();let x=null,_=null;const C=[],M=[],R=new ht;let I=null;const O=new hr;O.layers.enable(1),O.viewport=new Ot;const F=new hr;F.layers.enable(2),F.viewport=new Ot;const de=[O,F],b=new UN;b.layers.enable(1),b.layers.enable(2);let N=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=C[W];return q===void 0&&(q=new kh,C[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=C[W];return q===void 0&&(q=new kh,C[W]=q),q.getGripSpace()},this.getHand=function(W){let q=C[W];return q===void 0&&(q=new kh,C[W]=q),q.getHandSpace()};function ne(W){const q=M.indexOf(W.inputSource);if(q===-1)return;const ee=C[q];ee!==void 0&&(ee.update(W.inputSource,W.frame,h||c),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function pe(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",H);for(let W=0;W<C.length;W++){const q=M[W];q!==null&&(M[W]=null,C[W].disconnect(q))}N=null,ae=null,e.setRenderTarget(x),S=null,g=null,v=null,a=null,_=null,z.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:a.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(a,t,q),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new ra(S.framebufferWidth,S.framebufferHeight,{format:Mr,type:vo,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let q=null,ee=null,Z=null;w.depth&&(Z=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=w.stencil?ps:ta,ee=w.stencil?ea:co);const _e={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};v=new XRWebGLBinding(a,t),g=v.createProjectionLayer(_e),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),_=new ra(g.textureWidth,g.textureHeight,{format:Mr,type:vo,depthTexture:new rE(g.textureWidth,g.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const ve=e.properties.get(_);ve.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),z.setContext(a),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(W){for(let q=0;q<W.removed.length;q++){const ee=W.removed[q],Z=M.indexOf(ee);Z>=0&&(M[Z]=null,C[Z].disconnect(ee))}for(let q=0;q<W.added.length;q++){const ee=W.added[q];let Z=M.indexOf(ee);if(Z===-1){for(let ve=0;ve<C.length;ve++)if(ve>=M.length){M.push(ee),Z=ve;break}else if(M[ve]===null){M[ve]=ee,Z=ve;break}if(Z===-1)break}const _e=C[Z];_e&&_e.connect(ee)}}const Q=new B,se=new B;function re(W,q,ee){Q.setFromMatrixPosition(q.matrixWorld),se.setFromMatrixPosition(ee.matrixWorld);const Z=Q.distanceTo(se),_e=q.projectionMatrix.elements,ve=ee.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Fe=_e[14]/(_e[10]+1),Oe=(_e[9]+1)/_e[5],j=(_e[9]-1)/_e[5],Lt=(_e[8]-1)/_e[0],Be=(ve[8]+1)/ve[0],le=be*Lt,ue=be*Be,xe=Z/(-Lt+Be),ge=xe*-Lt;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Me=be+xe,we=Fe+xe,Ie=le-ge,Ze=ue+(Z-ge),D=Oe*Fe/we*Me,T=j*Fe/we*Me;W.projectionMatrix.makePerspective(Ie,Ze,D,T,Me,we),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;b.near=F.near=O.near=W.near,b.far=F.far=O.far=W.far,(N!==b.near||ae!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,ae=b.far);const q=W.parent,ee=b.cameras;X(b,q);for(let Z=0;Z<ee.length;Z++)X(ee[Z],q);ee.length===2?re(b,O,F):b.projectionMatrix.copy(O.projectionMatrix),ie(W,b,q)};function ie(W,q,ee){ee===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=wl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(W){d=W,g!==null&&(g.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)};let $=null;function L(W,q){if(p=q.getViewerPose(h||c),E=q,p!==null){const ee=p.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let Z=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let _e=0;_e<ee.length;_e++){const ve=ee[_e];let be=null;if(S!==null)be=S.getViewport(ve);else{const Oe=v.getViewSubImage(g,ve);be=Oe.viewport,_e===0&&(e.setRenderTargetTextures(_,Oe.colorTexture,g.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(_))}let Fe=de[_e];Fe===void 0&&(Fe=new hr,Fe.layers.enable(_e),Fe.viewport=new Ot,de[_e]=Fe),Fe.matrix.fromArray(ve.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ve.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(b.matrix.copy(Fe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Z===!0&&b.cameras.push(Fe)}}for(let ee=0;ee<C.length;ee++){const Z=M[ee],_e=C[ee];Z!==null&&_e!==void 0&&_e.update(Z,q,h||c)}$&&$(W,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),E=null}const z=new nE;z.setAnimationLoop(L),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function ON(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,QS(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,C,M,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),v(x,_)):_.isMeshPhongMaterial?(s(x,_),p(x,_)):_.isMeshStandardMaterial?(s(x,_),g(x,_),_.isMeshPhysicalMaterial&&S(x,_,R)):_.isMeshMatcapMaterial?(s(x,_),E(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),w(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?d(x,_,C,M):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===ir&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===ir&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const C=e.get(_).envMap;if(C&&(x.envMap.value=C,x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*M,t(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,C,M){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*C,x.scale.value=M*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,C){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ir&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const C=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function zN(n,e,t,i){let a={},s={},c=[];const u=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(C,M){const R=M.program;i.uniformBlockBinding(C,R)}function h(C,M){let R=a[C.id];R===void 0&&(E(C),R=p(C),a[C.id]=R,C.addEventListener("dispose",x));const I=M.program;i.updateUBOMapping(C,I);const O=e.render.frame;s[C.id]!==O&&(g(C),s[C.id]=O)}function p(C){const M=v();C.__bindingPointIndex=M;const R=n.createBuffer(),I=C.__size,O=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,I,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,R),R}function v(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const M=a[C.id],R=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let O=0,F=R.length;O<F;O++){const de=R[O];if(S(de,O,I)===!0){const b=de.__offset,N=Array.isArray(de.value)?de.value:[de.value];let ae=0;for(let ne=0;ne<N.length;ne++){const pe=N[ne],H=w(pe);typeof pe=="number"?(de.__data[0]=pe,n.bufferSubData(n.UNIFORM_BUFFER,b+ae,de.__data)):pe.isMatrix3?(de.__data[0]=pe.elements[0],de.__data[1]=pe.elements[1],de.__data[2]=pe.elements[2],de.__data[3]=pe.elements[0],de.__data[4]=pe.elements[3],de.__data[5]=pe.elements[4],de.__data[6]=pe.elements[5],de.__data[7]=pe.elements[0],de.__data[8]=pe.elements[6],de.__data[9]=pe.elements[7],de.__data[10]=pe.elements[8],de.__data[11]=pe.elements[0]):(pe.toArray(de.__data,ae),ae+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,de.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(C,M,R){const I=C.value;if(R[M]===void 0){if(typeof I=="number")R[M]=I;else{const O=Array.isArray(I)?I:[I],F=[];for(let de=0;de<O.length;de++)F.push(O[de].clone());R[M]=F}return!0}else if(typeof I=="number"){if(R[M]!==I)return R[M]=I,!0}else{const O=Array.isArray(R[M])?R[M]:[R[M]],F=Array.isArray(I)?I:[I];for(let de=0;de<O.length;de++){const b=O[de];if(b.equals(F[de])===!1)return b.copy(F[de]),!0}}return!1}function E(C){const M=C.uniforms;let R=0;const I=16;let O=0;for(let F=0,de=M.length;F<de;F++){const b=M[F],N={boundary:0,storage:0},ae=Array.isArray(b.value)?b.value:[b.value];for(let ne=0,pe=ae.length;ne<pe;ne++){const H=ae[ne],Q=w(H);N.boundary+=Q.boundary,N.storage+=Q.storage}if(b.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=R,F>0){O=R%I;const ne=I-O;O!==0&&ne-N.boundary<0&&(R+=I-O,b.__offset=R)}R+=N.storage}return O=R%I,O>0&&(R+=I-O),C.__size=R,C.__cache={},this}function w(C){const M={boundary:0,storage:0};return typeof C=="number"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function x(C){const M=C.target;M.removeEventListener("dispose",x);const R=c.indexOf(M.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete s[M.id]}function _(){for(const C in a)n.deleteBuffer(a[C]);c=[],a={},s={}}return{bind:d,update:h,dispose:_}}class Ap{constructor(e={}){const{canvas:t=N2(),context:i=null,depth:a=!0,stencil:s=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=c;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,x=null;const _=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=mo,this.toneMappingExposure=1;const M=this;let R=!1,I=0,O=0,F=null,de=-1,b=null;const N=new Ot,ae=new Ot;let ne=null;const pe=new nt(0);let H=0,Q=t.width,se=t.height,re=1,X=null,ie=null;const $=new Ot(0,0,Q,se),L=new Ot(0,0,Q,se);let z=!1;const W=new ff;let q=!1,ee=!1,Z=null;const _e=new Vt,ve=new ht,be=new B,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return F===null?re:1}let j=i;function Lt(P,J){for(let fe=0;fe<P.length;fe++){const he=P[fe],ce=t.getContext(he,J);if(ce!==null)return ce}return null}try{const P={alpha:!0,depth:a,stencil:s,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lf}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",ze,!1),j===null){const J=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&J.shift(),j=Lt(J,P),j===null)throw Lt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Be,le,ue,xe,ge,Me,we,Ie,Ze,D,T,Y,Ae,ye,Ce,qe,De,ke,lt,wt,Pe,Pt,ft,st;function et(){Be=new qI(j),le=new VI(j,Be,e),Be.init(le),Pt=new IN(j,Be,le),ue=new PN(j,Be,le),xe=new JI(j),ge=new gN,Me=new DN(j,Be,ue,ge,le,Pt,xe),we=new WI(M),Ie=new YI(M),Ze=new oD(j,le),ft=new BI(j,Be,Ze,le),D=new KI(j,Ze,xe,ft),T=new nU(j,D,Ze,xe),lt=new tU(j,le,Me),qe=new GI(ge),Y=new vN(M,we,Ie,Be,le,ft,qe),Ae=new ON(M,ge),ye=new yN,Ce=new AN(Be,le),ke=new kI(M,we,Ie,ue,T,g,d),De=new LN(M,T,le),st=new zN(j,xe,le,ue),wt=new HI(j,Be,xe,le),Pe=new ZI(j,Be,xe,le),xe.programs=Y.programs,M.capabilities=le,M.extensions=Be,M.properties=ge,M.renderLists=ye,M.shadowMap=De,M.state=ue,M.info=xe}et();const $e=new FN(M,j);this.xr=$e,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=Be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(P){P!==void 0&&(re=P,this.setSize(Q,se,!1))},this.getSize=function(P){return P.set(Q,se)},this.setSize=function(P,J,fe=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=P,se=J,t.width=Math.floor(P*re),t.height=Math.floor(J*re),fe===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(Q*re,se*re).floor()},this.setDrawingBufferSize=function(P,J,fe){Q=P,se=J,re=fe,t.width=Math.floor(P*fe),t.height=Math.floor(J*fe),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy($)},this.setViewport=function(P,J,fe,he){P.isVector4?$.set(P.x,P.y,P.z,P.w):$.set(P,J,fe,he),ue.viewport(N.copy($).multiplyScalar(re).floor())},this.getScissor=function(P){return P.copy(L)},this.setScissor=function(P,J,fe,he){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,J,fe,he),ue.scissor(ae.copy(L).multiplyScalar(re).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(P){ue.setScissorTest(z=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){ie=P},this.getClearColor=function(P){return P.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(P=!0,J=!0,fe=!0){let he=0;if(P){let ce=!1;if(F!==null){const Ge=F.texture.format;ce=Ge===zS||Ge===OS||Ge===FS}if(ce){const Ge=F.texture.type,Qe=Ge===vo||Ge===co||Ge===_m||Ge===ea||Ge===US||Ge===NS,at=ke.getClearColor(),Xe=ke.getClearAlpha(),vt=at.r,dt=at.g,pt=at.b;Qe?(S[0]=vt,S[1]=dt,S[2]=pt,S[3]=Xe,j.clearBufferuiv(j.COLOR,0,S)):(E[0]=vt,E[1]=dt,E[2]=pt,E[3]=Xe,j.clearBufferiv(j.COLOR,0,E))}else he|=j.COLOR_BUFFER_BIT}J&&(he|=j.DEPTH_BUFFER_BIT),fe&&(he|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),ye.dispose(),Ce.dispose(),ge.dispose(),we.dispose(),Ie.dispose(),T.dispose(),ft.dispose(),st.dispose(),Y.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",vn),$e.removeEventListener("sessionend",bt),Z&&(Z.dispose(),Z=null),cn.stop()};function gt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=xe.autoReset,J=De.enabled,fe=De.autoUpdate,he=De.needsUpdate,ce=De.type;et(),xe.autoReset=P,De.enabled=J,De.autoUpdate=fe,De.needsUpdate=he,De.type=ce}function ze(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Re(P){const J=P.target;J.removeEventListener("dispose",Re),me(J)}function me(P){Ue(P),ge.remove(P)}function Ue(P){const J=ge.get(P).programs;J!==void 0&&(J.forEach(function(fe){Y.releaseProgram(fe)}),P.isShaderMaterial&&Y.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,fe,he,ce,Ge){J===null&&(J=Fe);const Qe=ce.isMesh&&ce.matrixWorld.determinant()<0,at=mf(P,J,fe,he,ce);ue.setMaterial(he,Qe);let Xe=fe.index,vt=1;if(he.wireframe===!0){if(Xe=D.getWireframeAttribute(fe),Xe===void 0)return;vt=2}const dt=fe.drawRange,pt=fe.attributes.position;let Bt=dt.start*vt,Hn=(dt.start+dt.count)*vt;Ge!==null&&(Bt=Math.max(Bt,Ge.start*vt),Hn=Math.min(Hn,(Ge.start+Ge.count)*vt)),Xe!==null?(Bt=Math.max(Bt,0),Hn=Math.min(Hn,Xe.count)):pt!=null&&(Bt=Math.max(Bt,0),Hn=Math.min(Hn,pt.count));const nn=Hn-Bt;if(nn<0||nn===1/0)return;ft.setup(ce,he,at,fe,Xe);let Yn,Mt=wt;if(Xe!==null&&(Yn=Ze.get(Xe),Mt=Pe,Mt.setIndex(Yn)),ce.isMesh)he.wireframe===!0?(ue.setLineWidth(he.wireframeLinewidth*Oe()),Mt.setMode(j.LINES)):Mt.setMode(j.TRIANGLES);else if(ce.isLine){let _t=he.linewidth;_t===void 0&&(_t=1),ue.setLineWidth(_t*Oe()),ce.isLineSegments?Mt.setMode(j.LINES):ce.isLineLoop?Mt.setMode(j.LINE_LOOP):Mt.setMode(j.LINE_STRIP)}else ce.isPoints?Mt.setMode(j.POINTS):ce.isSprite&&Mt.setMode(j.TRIANGLES);if(ce.isBatchedMesh)Mt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else if(ce.isInstancedMesh)Mt.renderInstances(Bt,nn,ce.count);else if(fe.isInstancedBufferGeometry){const _t=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Vn=Math.min(fe.instanceCount,_t);Mt.renderInstances(Bt,nn,Vn)}else Mt.render(Bt,nn)};function ot(P,J,fe){P.transparent===!0&&P.side===Ci&&P.forceSinglePass===!1?(P.side=ir,P.needsUpdate=!0,Ii(P,J,fe),P.side=xo,P.needsUpdate=!0,Ii(P,J,fe),P.side=Ci):Ii(P,J,fe)}this.compile=function(P,J,fe=null){fe===null&&(fe=P),x=Ce.get(fe),x.init(),C.push(x),fe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(J.layers)&&(x.pushLight(ce),ce.castShadow&&x.pushShadow(ce))}),P!==fe&&P.traverseVisible(function(ce){ce.isLight&&ce.layers.test(J.layers)&&(x.pushLight(ce),ce.castShadow&&x.pushShadow(ce))}),x.setupLights(M._useLegacyLights);const he=new Set;return P.traverse(function(ce){const Ge=ce.material;if(Ge)if(Array.isArray(Ge))for(let Qe=0;Qe<Ge.length;Qe++){const at=Ge[Qe];ot(at,fe,ce),he.add(at)}else ot(Ge,fe,ce),he.add(Ge)}),C.pop(),x=null,he},this.compileAsync=function(P,J,fe=null){const he=this.compile(P,J,fe);return new Promise(ce=>{function Ge(){if(he.forEach(function(Qe){ge.get(Qe).currentProgram.isReady()&&he.delete(Qe)}),he.size===0){ce(P);return}setTimeout(Ge,10)}Be.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Et=null;function Jt(P){Et&&Et(P)}function vn(){cn.stop()}function bt(){cn.start()}const cn=new nE;cn.setAnimationLoop(Jt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(P){Et=P,$e.setAnimationLoop(P),P===null?cn.stop():cn.start()},$e.addEventListener("sessionstart",vn),$e.addEventListener("sessionend",bt),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(J),J=$e.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,J,F),x=Ce.get(P,C.length),x.init(),C.push(x),_e.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W.setFromProjectionMatrix(_e),ee=this.localClippingEnabled,q=qe.init(this.clippingPlanes,ee),w=ye.get(P,_.length),w.init(),_.push(w),Ln(P,J,0,M.sortObjects),w.finish(),M.sortObjects===!0&&w.sort(X,ie),this.info.render.frame++,q===!0&&qe.beginShadows();const fe=x.state.shadowsArray;if(De.render(fe,P,J),q===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(w,P),x.setupLights(M._useLegacyLights),J.isArrayCamera){const he=J.cameras;for(let ce=0,Ge=he.length;ce<Ge;ce++){const Qe=he[ce];Bl(w,P,Qe,Qe.viewport)}}else Bl(w,P,J);F!==null&&(Me.updateMultisampleRenderTarget(F),Me.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(M,P,J),ft.resetDefaultState(),de=-1,b=null,C.pop(),C.length>0?x=C[C.length-1]:x=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function Ln(P,J,fe,he){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)fe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||W.intersectsSprite(P)){he&&be.setFromMatrixPosition(P.matrixWorld).applyMatrix4(_e);const Qe=T.update(P),at=P.material;at.visible&&w.push(P,Qe,at,fe,be.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||W.intersectsObject(P))){const Qe=T.update(P),at=P.material;if(he&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),be.copy(P.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),be.copy(Qe.boundingSphere.center)),be.applyMatrix4(P.matrixWorld).applyMatrix4(_e)),Array.isArray(at)){const Xe=Qe.groups;for(let vt=0,dt=Xe.length;vt<dt;vt++){const pt=Xe[vt],Bt=at[pt.materialIndex];Bt&&Bt.visible&&w.push(P,Qe,Bt,fe,be.z,pt)}}else at.visible&&w.push(P,Qe,at,fe,be.z,null)}}const Ge=P.children;for(let Qe=0,at=Ge.length;Qe<at;Qe++)Ln(Ge[Qe],J,fe,he)}function Bl(P,J,fe,he){const ce=P.opaque,Ge=P.transmissive,Qe=P.transparent;x.setupLightsView(fe),q===!0&&qe.setGlobalState(M.clippingPlanes,fe),Ge.length>0&&To(ce,Ge,J,fe),he&&ue.viewport(N.copy(he)),ce.length>0&&fi(ce,J,fe),Ge.length>0&&fi(Ge,J,fe),Qe.length>0&&fi(Qe,J,fe),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function To(P,J,fe,he){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;const Ge=le.isWebGL2;Z===null&&(Z=new ra(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")?Sl:vo,minFilter:xl,samples:Ge?4:0})),M.getDrawingBufferSize(ve),Ge?Z.setSize(ve.x,ve.y):Z.setSize(zc(ve.x),zc(ve.y));const Qe=M.getRenderTarget();M.setRenderTarget(Z),M.getClearColor(pe),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const at=M.toneMapping;M.toneMapping=mo,fi(P,fe,he),Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z);let Xe=!1;for(let vt=0,dt=J.length;vt<dt;vt++){const pt=J[vt],Bt=pt.object,Hn=pt.geometry,nn=pt.material,Yn=pt.group;if(nn.side===Ci&&Bt.layers.test(he.layers)){const Mt=nn.side;nn.side=ir,nn.needsUpdate=!0,bo(Bt,fe,he,Hn,nn,Yn),nn.side=Mt,nn.needsUpdate=!0,Xe=!0}}Xe===!0&&(Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z)),M.setRenderTarget(Qe),M.setClearColor(pe,H),M.toneMapping=at}function fi(P,J,fe){const he=J.isScene===!0?J.overrideMaterial:null;for(let ce=0,Ge=P.length;ce<Ge;ce++){const Qe=P[ce],at=Qe.object,Xe=Qe.geometry,vt=he===null?Qe.material:he,dt=Qe.group;at.layers.test(fe.layers)&&bo(at,J,fe,Xe,vt,dt)}}function bo(P,J,fe,he,ce,Ge){P.onBeforeRender(M,J,fe,he,ce,Ge),P.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(M,J,fe,he,P,Ge),ce.transparent===!0&&ce.side===Ci&&ce.forceSinglePass===!1?(ce.side=ir,ce.needsUpdate=!0,M.renderBufferDirect(fe,J,he,ce,P,Ge),ce.side=xo,ce.needsUpdate=!0,M.renderBufferDirect(fe,J,he,ce,P,Ge),ce.side=Ci):M.renderBufferDirect(fe,J,he,ce,P,Ge),P.onAfterRender(M,J,fe,he,ce,Ge)}function Ii(P,J,fe){J.isScene!==!0&&(J=Fe);const he=ge.get(P),ce=x.state.lights,Ge=x.state.shadowsArray,Qe=ce.state.version,at=Y.getParameters(P,ce.state,Ge,J,fe),Xe=Y.getProgramCacheKey(at);let vt=he.programs;he.environment=P.isMeshStandardMaterial?J.environment:null,he.fog=J.fog,he.envMap=(P.isMeshStandardMaterial?Ie:we).get(P.envMap||he.environment),vt===void 0&&(P.addEventListener("dispose",Re),vt=new Map,he.programs=vt);let dt=vt.get(Xe);if(dt!==void 0){if(he.currentProgram===dt&&he.lightsStateVersion===Qe)return Vl(P,at),dt}else at.uniforms=Y.getUniforms(P),P.onBuild(fe,at,M),P.onBeforeCompile(at,M),dt=Y.acquireProgram(at,Xe),vt.set(Xe,dt),he.uniforms=at.uniforms;const pt=he.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(pt.clippingPlanes=qe.uniform),Vl(P,at),he.needsLights=Gl(P),he.lightsStateVersion=Qe,he.needsLights&&(pt.ambientLightColor.value=ce.state.ambient,pt.lightProbe.value=ce.state.probe,pt.directionalLights.value=ce.state.directional,pt.directionalLightShadows.value=ce.state.directionalShadow,pt.spotLights.value=ce.state.spot,pt.spotLightShadows.value=ce.state.spotShadow,pt.rectAreaLights.value=ce.state.rectArea,pt.ltc_1.value=ce.state.rectAreaLTC1,pt.ltc_2.value=ce.state.rectAreaLTC2,pt.pointLights.value=ce.state.point,pt.pointLightShadows.value=ce.state.pointShadow,pt.hemisphereLights.value=ce.state.hemi,pt.directionalShadowMap.value=ce.state.directionalShadowMap,pt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,pt.spotShadowMap.value=ce.state.spotShadowMap,pt.spotLightMatrix.value=ce.state.spotLightMatrix,pt.spotLightMap.value=ce.state.spotLightMap,pt.pointShadowMap.value=ce.state.pointShadowMap,pt.pointShadowMatrix.value=ce.state.pointShadowMatrix),he.currentProgram=dt,he.uniformsList=null,dt}function Hl(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=Lc.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function Vl(P,J){const fe=ge.get(P);fe.outputColorSpace=J.outputColorSpace,fe.batching=J.batching,fe.instancing=J.instancing,fe.instancingColor=J.instancingColor,fe.skinning=J.skinning,fe.morphTargets=J.morphTargets,fe.morphNormals=J.morphNormals,fe.morphColors=J.morphColors,fe.morphTargetsCount=J.morphTargetsCount,fe.numClippingPlanes=J.numClippingPlanes,fe.numIntersection=J.numClipIntersection,fe.vertexAlphas=J.vertexAlphas,fe.vertexTangents=J.vertexTangents,fe.toneMapping=J.toneMapping}function mf(P,J,fe,he,ce){J.isScene!==!0&&(J=Fe),Me.resetTextureUnits();const Ge=J.fog,Qe=he.isMeshStandardMaterial?J.environment:null,at=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Pi,Xe=(he.isMeshStandardMaterial?Ie:we).get(he.envMap||Qe),vt=he.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,dt=!!fe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),pt=!!fe.morphAttributes.position,Bt=!!fe.morphAttributes.normal,Hn=!!fe.morphAttributes.color;let nn=mo;he.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(nn=M.toneMapping);const Yn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Mt=Yn!==void 0?Yn.length:0,_t=ge.get(he),Vn=x.state.lights;if(q===!0&&(ee===!0||P!==b)){const qn=P===b&&he.id===de;qe.setState(he,P,qn)}let jt=!1;he.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Vn.state.version||_t.outputColorSpace!==at||ce.isBatchedMesh&&_t.batching===!1||!ce.isBatchedMesh&&_t.batching===!0||ce.isInstancedMesh&&_t.instancing===!1||!ce.isInstancedMesh&&_t.instancing===!0||ce.isSkinnedMesh&&_t.skinning===!1||!ce.isSkinnedMesh&&_t.skinning===!0||ce.isInstancedMesh&&_t.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&_t.instancingColor===!1&&ce.instanceColor!==null||_t.envMap!==Xe||he.fog===!0&&_t.fog!==Ge||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==qe.numPlanes||_t.numIntersection!==qe.numIntersection)||_t.vertexAlphas!==vt||_t.vertexTangents!==dt||_t.morphTargets!==pt||_t.morphNormals!==Bt||_t.morphColors!==Hn||_t.toneMapping!==nn||le.isWebGL2===!0&&_t.morphTargetsCount!==Mt)&&(jt=!0):(jt=!0,_t.__version=he.version);let hi=_t.currentProgram;jt===!0&&(hi=Ii(he,J,ce));let Wl=!1,qr=!1,Ui=!1;const Qt=hi.getUniforms(),mr=_t.uniforms;if(ue.useProgram(hi.program)&&(Wl=!0,qr=!0,Ui=!0),he.id!==de&&(de=he.id,qr=!0),Wl||b!==P){Qt.setValue(j,"projectionMatrix",P.projectionMatrix),Qt.setValue(j,"viewMatrix",P.matrixWorldInverse);const qn=Qt.map.cameraPosition;qn!==void 0&&qn.setValue(j,be.setFromMatrixPosition(P.matrixWorld)),le.logarithmicDepthBuffer&&Qt.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Qt.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,qr=!0,Ui=!0)}if(ce.isSkinnedMesh){Qt.setOptional(j,ce,"bindMatrix"),Qt.setOptional(j,ce,"bindMatrixInverse");const qn=ce.skeleton;qn&&(le.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),Qt.setValue(j,"boneTexture",qn.boneTexture,Me)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ce.isBatchedMesh&&(Qt.setOptional(j,ce,"batchingTexture"),Qt.setValue(j,"batchingTexture",ce._matricesTexture,Me));const Es=fe.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&le.isWebGL2===!0)&&lt.update(ce,fe,hi),(qr||_t.receiveShadow!==ce.receiveShadow)&&(_t.receiveShadow=ce.receiveShadow,Qt.setValue(j,"receiveShadow",ce.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(mr.envMap.value=Xe,mr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),qr&&(Qt.setValue(j,"toneMappingExposure",M.toneMappingExposure),_t.needsLights&&di(mr,Ui),Ge&&he.fog===!0&&Ae.refreshFogUniforms(mr,Ge),Ae.refreshMaterialUniforms(mr,he,re,se,Z),Lc.upload(j,Hl(_t),mr,Me)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Lc.upload(j,Hl(_t),mr,Me),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Qt.setValue(j,"center",ce.center),Qt.setValue(j,"modelViewMatrix",ce.modelViewMatrix),Qt.setValue(j,"normalMatrix",ce.normalMatrix),Qt.setValue(j,"modelMatrix",ce.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const qn=he.uniformsGroups;for(let Co=0,$l=qn.length;Co<$l;Co++)if(le.isWebGL2){const ca=qn[Co];st.update(ca,hi),st.bind(ca,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function di(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function Gl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,J,fe){ge.get(P.texture).__webglTexture=J,ge.get(P.depthTexture).__webglTexture=fe;const he=ge.get(P);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=fe===void 0,he.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,J){const fe=ge.get(P);fe.__webglFramebuffer=J,fe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,fe=0){F=P,I=J,O=fe;let he=!0,ce=null,Ge=!1,Qe=!1;if(P){const Xe=ge.get(P);Xe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(j.FRAMEBUFFER,null),he=!1):Xe.__webglFramebuffer===void 0?Me.setupRenderTarget(P):Xe.__hasExternalTextures&&Me.rebindTextures(P,ge.get(P.texture).__webglTexture,ge.get(P.depthTexture).__webglTexture);const vt=P.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Qe=!0);const dt=ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(dt[J])?ce=dt[J][fe]:ce=dt[J],Ge=!0):le.isWebGL2&&P.samples>0&&Me.useMultisampledRTT(P)===!1?ce=ge.get(P).__webglMultisampledFramebuffer:Array.isArray(dt)?ce=dt[fe]:ce=dt,N.copy(P.viewport),ae.copy(P.scissor),ne=P.scissorTest}else N.copy($).multiplyScalar(re).floor(),ae.copy(L).multiplyScalar(re).floor(),ne=z;if(ue.bindFramebuffer(j.FRAMEBUFFER,ce)&&le.drawBuffers&&he&&ue.drawBuffers(P,ce),ue.viewport(N),ue.scissor(ae),ue.setScissorTest(ne),Ge){const Xe=ge.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xe.__webglTexture,fe)}else if(Qe){const Xe=ge.get(P.texture),vt=J||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,fe||0,vt)}de=-1},this.readRenderTargetPixels=function(P,J,fe,he,ce,Ge,Qe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Qe!==void 0&&(at=at[Qe]),at){ue.bindFramebuffer(j.FRAMEBUFFER,at);try{const Xe=P.texture,vt=Xe.format,dt=Xe.type;if(vt!==Mr&&Pt.convert(vt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pt=dt===Sl&&(Be.has("EXT_color_buffer_half_float")||le.isWebGL2&&Be.has("EXT_color_buffer_float"));if(dt!==vo&&Pt.convert(dt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dt===Ri&&(le.isWebGL2||Be.has("OES_texture_float")||Be.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-he&&fe>=0&&fe<=P.height-ce&&j.readPixels(J,fe,he,ce,Pt.convert(vt),Pt.convert(dt),Ge)}finally{const Xe=F!==null?ge.get(F).__webglFramebuffer:null;ue.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(P,J,fe=0){const he=Math.pow(2,-fe),ce=Math.floor(J.image.width*he),Ge=Math.floor(J.image.height*he);Me.setTexture2D(J,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,P.x,P.y,ce,Ge),ue.unbindTexture()},this.copyTextureToTexture=function(P,J,fe,he=0){const ce=J.image.width,Ge=J.image.height,Qe=Pt.convert(fe.format),at=Pt.convert(fe.type);Me.setTexture2D(fe,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,fe.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,fe.unpackAlignment),J.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,he,P.x,P.y,ce,Ge,Qe,at,J.image.data):J.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,he,P.x,P.y,J.mipmaps[0].width,J.mipmaps[0].height,Qe,J.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,he,P.x,P.y,Qe,at,J.image),he===0&&fe.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(P,J,fe,he,ce=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=P.max.x-P.min.x+1,Qe=P.max.y-P.min.y+1,at=P.max.z-P.min.z+1,Xe=Pt.convert(he.format),vt=Pt.convert(he.type);let dt;if(he.isData3DTexture)Me.setTexture3D(he,0),dt=j.TEXTURE_3D;else if(he.isDataArrayTexture)Me.setTexture2DArray(he,0),dt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,he.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,he.unpackAlignment);const pt=j.getParameter(j.UNPACK_ROW_LENGTH),Bt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Hn=j.getParameter(j.UNPACK_SKIP_PIXELS),nn=j.getParameter(j.UNPACK_SKIP_ROWS),Yn=j.getParameter(j.UNPACK_SKIP_IMAGES),Mt=fe.isCompressedTexture?fe.mipmaps[0]:fe.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Mt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Mt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,P.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,P.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,P.min.z),fe.isDataTexture||fe.isData3DTexture?j.texSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,vt,Mt.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,Mt.data)):j.texSubImage3D(dt,ce,J.x,J.y,J.z,Ge,Qe,at,Xe,vt,Mt),j.pixelStorei(j.UNPACK_ROW_LENGTH,pt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Bt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Hn),j.pixelStorei(j.UNPACK_SKIP_ROWS,nn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Yn),ce===0&&he.generateMipmaps&&j.generateMipmap(dt),ue.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Me.setTextureCube(P,0):P.isData3DTexture?Me.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Me.setTexture2DArray(P,0):Me.setTexture2D(P,0),ue.unbindTexture()},this.resetState=function(){I=0,O=0,F=null,ue.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ym?"display-p3":"srgb",t.unpackColorSpace=Ft.workingColorSpace===cf?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?na:BS}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===na?bn:Pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kN extends Ap{}kN.prototype.isWebGL1Renderer=!0;class Am{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new Am(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class BN extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class HN{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $n=new B;class fo{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new pr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class VN extends or{constructor(e=null,t=1,i=1,a,s,c,u,d,h=Tn,p=Tn,v,g){super(null,c,u,d,h,p,a,s,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function GN(n,e){return n.z-e.z}function WN(n,e){return e.z-n.z}class $N{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const i=this.pool,a=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});const s=i[this.index];a.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const Za="batchId",oo=new Vt,Y0=new Vt,XN=new Vt,q0=new Vt,Bh=new ff,yc=new Lr,Yo=new li,al=new B,Hh=new $N,On=new jr,xc=[];function jN(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const a=n.count;for(let s=0;s<a;s++)for(let c=0;c<i;c++)e.setComponent(s+t,c,n.getComponent(s,c))}else e.array.set(n.array,t*i);e.needsUpdate=!0}class YN extends jr{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,i=t*2,a){super(new Bn,a),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new VN(t,e,e,Mr,Ri);this._matricesTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,a=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const u in e.attributes){const d=e.getAttribute(u),{array:h,itemSize:p,normalized:v}=d,g=new h.constructor(i*p),S=new d.constructor(g,p,v);S.setUsage(d.usage),t.setAttribute(u,S)}if(e.getIndex()!==null){const u=i>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new pr(u,1))}const c=a>65536?new Uint32Array(i):new Uint16Array(i);t.setAttribute(Za,new pr(c,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Za))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Za}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(i===Za)continue;if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const a=e.getAttribute(i),s=t.getAttribute(i);if(a.itemSize!==s.itemSize||a.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this._geometryCount,t=this.boundingBox,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,oo),this.getBoundingBoxAt(a,yc).applyMatrix4(oo),t.union(yc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this._geometryCount,t=this.boundingSphere,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,oo),this.getBoundingSphereAt(a,Yo).applyMatrix4(oo),t.union(Yo))}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const a={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const c=this._reservedRanges,u=this._drawRanges,d=this._bounds;this._geometryCount!==0&&(s=c[c.length-1]),t===-1?a.vertexCount=e.getAttribute("position").count:a.vertexCount=t,s===null?a.vertexStart=0:a.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),p=h!==null;if(p&&(i===-1?a.indexCount=h.count:a.indexCount=i,s===null?a.indexStart=0:a.indexStart=s.indexStart+s.indexCount),a.indexStart!==-1&&a.indexStart+a.indexCount>this._maxIndexCount||a.vertexStart+a.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const v=this._visibility,g=this._active,S=this._matricesTexture,E=this._matricesTexture.image.data;v.push(!0),g.push(!0);const w=this._geometryCount;this._geometryCount++,XN.toArray(E,w*16),S.needsUpdate=!0,c.push(a),u.push({start:p?a.indexStart:a.vertexStart,count:-1}),d.push({boxInitialized:!1,box:new Lr,sphereInitialized:!1,sphere:new li});const x=this.geometry.getAttribute(Za);for(let _=0;_<a.vertexCount;_++)x.setX(a.vertexStart+_,w);return x.needsUpdate=!0,this.setGeometryAt(w,e),w}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,a=i.getIndex()!==null,s=i.getIndex(),c=t.getIndex(),u=this._reservedRanges[e];if(a&&c.count>u.indexCount||t.attributes.position.count>u.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const d=u.vertexStart,h=u.vertexCount;for(const S in i.attributes){if(S===Za)continue;const E=t.getAttribute(S),w=i.getAttribute(S);jN(E,w,d);const x=E.itemSize;for(let _=E.count,C=h;_<C;_++){const M=d+_;for(let R=0;R<x;R++)w.setComponent(M,R,0)}w.needsUpdate=!0}if(a){const S=u.indexStart;for(let E=0;E<c.count;E++)s.setX(S+E,d+c.getX(E));for(let E=c.count,w=u.indexCount;E<w;E++)s.setX(S+E,d);s.needsUpdate=!0}const p=this._bounds[e];t.boundingBox!==null?(p.box.copy(t.boundingBox),p.boxInitialized=!0):p.boxInitialized=!1,t.boundingSphere!==null?(p.sphere.copy(t.boundingSphere),p.sphereInitialized=!0):p.sphereInitialized=!1;const v=this._drawRanges[e],g=t.getAttribute("position");return v.count=a?c.count:g.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.box,c=this.geometry;if(a.boxInitialized===!1){s.makeEmpty();const u=c.index,d=c.attributes.position,h=this._drawRanges[e];for(let p=h.start,v=h.start+h.count;p<v;p++){let g=p;u&&(g=u.getX(g)),s.expandByPoint(al.fromBufferAttribute(d,g))}a.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],s=a.sphere,c=this.geometry;if(a.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,yc),yc.getCenter(s.center);const u=c.index,d=c.attributes.position,h=this._drawRanges[e];let p=0;for(let v=h.start,g=h.start+h.count;v<g;v++){let S=v;u&&(S=u.getX(S)),al.fromBufferAttribute(d,S),p=Math.max(p,s.center.distanceToSquared(al))}s.radius=Math.sqrt(p),a.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const i=this._active,a=this._matricesTexture,s=this._matricesTexture.image.data,c=this._geometryCount;return e>=c||i[e]===!1?this:(t.toArray(s,e*16),a.needsUpdate=!0,this)}getMatrixAt(e,t){const i=this._active,a=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||i[e]===!1?null:t.fromArray(a,e*16)}setVisibleAt(e,t){const i=this._visibility,a=this._active,s=this._geometryCount;return e>=s||a[e]===!1||i[e]===t?this:(i[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,i=this._active,a=this._geometryCount;return e>=a||i[e]===!1?!1:t[e]}raycast(e,t){const i=this._visibility,a=this._active,s=this._drawRanges,c=this._geometryCount,u=this.matrixWorld,d=this.geometry;On.material=this.material,On.geometry.index=d.index,On.geometry.attributes=d.attributes,On.geometry.boundingBox===null&&(On.geometry.boundingBox=new Lr),On.geometry.boundingSphere===null&&(On.geometry.boundingSphere=new li);for(let h=0;h<c;h++){if(!i[h]||!a[h])continue;const p=s[h];On.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(h,On.matrixWorld).premultiply(u),this.getBoundingBoxAt(h,On.geometry.boundingBox),this.getBoundingSphereAt(h,On.geometry.boundingSphere),On.raycast(e,xc);for(let v=0,g=xc.length;v<g;v++){const S=xc[v];S.object=this,S.batchId=h,t.push(S)}xc.length=0}On.material=null,On.geometry.index=null,On.geometry.attributes={},On.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,i,a,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const c=a.getIndex(),u=c===null?1:c.array.BYTES_PER_ELEMENT,d=this._visibility,h=this._multiDrawStarts,p=this._multiDrawCounts,v=this._drawRanges,g=this.perObjectFrustumCulled;g&&(q0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Bh.setFromProjectionMatrix(q0,e.isWebGPURenderer?El:oi));let S=0;if(this.sortObjects){Y0.copy(this.matrixWorld).invert(),al.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Y0);for(let x=0,_=d.length;x<_;x++)if(d[x]){this.getMatrixAt(x,oo),this.getBoundingSphereAt(x,Yo).applyMatrix4(oo);let C=!1;if(g&&(C=!Bh.intersectsSphere(Yo)),!C){const M=al.distanceTo(Yo.center);Hh.push(v[x],M)}}const E=Hh.list,w=this.customSort;w===null?E.sort(s.transparent?WN:GN):w.call(this,E,i);for(let x=0,_=E.length;x<_;x++){const C=E[x];h[S]=C.start*u,p[S]=C.count,S++}Hh.reset()}else for(let E=0,w=d.length;E<w;E++)if(d[E]){let x=!1;if(g&&(this.getMatrixAt(E,oo),this.getBoundingSphereAt(E,Yo).applyMatrix4(oo),x=!Bh.intersectsSphere(Yo)),!x){const _=v[E];h[S]=_.start*u,p[S]=_.count,S++}}this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,i,a,s,c){this.onBeforeRender(e,null,a,s,c)}}class zl extends ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const K0=new B,Z0=new B,J0=new Vt,Vh=new Sm,Sc=new li;class qN extends jn{constructor(e=new Bn,t=new zl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)K0.fromBufferAttribute(t,a-1),Z0.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=K0.distanceTo(Z0);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(a),Sc.radius+=s,e.ray.intersectsSphere(Sc)===!1)return;J0.copy(a).invert(),Vh.copy(e.ray).applyMatrix4(J0);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=new B,p=new B,v=new B,g=new B,S=this.isLineSegments?2:1,E=i.index,x=i.attributes.position;if(E!==null){const _=Math.max(0,c.start),C=Math.min(E.count,c.start+c.count);for(let M=_,R=C-1;M<R;M+=S){const I=E.getX(M),O=E.getX(M+1);if(h.fromBufferAttribute(x,I),p.fromBufferAttribute(x,O),Vh.distanceSqToSegment(h,p,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const de=e.ray.origin.distanceTo(g);de<e.near||de>e.far||t.push({distance:de,point:v.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,c.start),C=Math.min(x.count,c.start+c.count);for(let M=_,R=C-1;M<R;M+=S){if(h.fromBufferAttribute(x,M),p.fromBufferAttribute(x,M+1),Vh.distanceSqToSegment(h,p,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(g);O<e.near||O>e.far||t.push({distance:O,point:v.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const u=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}const Q0=new B,ey=new B;class hf extends qN{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)Q0.fromBufferAttribute(t,a),ey.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Q0.distanceTo(ey);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class KN extends Bn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,a=new B,s=new B;if(e.index!==null){const c=e.attributes.position,u=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:u.count,materialIndex:0}]);for(let h=0,p=d.length;h<p;++h){const v=d[h],g=v.start,S=v.count;for(let E=g,w=g+S;E<w;E+=3)for(let x=0;x<3;x++){const _=u.getX(E+x),C=u.getX(E+(x+1)%3);a.fromBufferAttribute(c,_),s.fromBufferAttribute(c,C),ty(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}}else{const c=e.attributes.position;for(let u=0,d=c.count/3;u<d;u++)for(let h=0;h<3;h++){const p=3*u+h,v=3*u+(h+1)%3;a.fromBufferAttribute(c,p),s.fromBufferAttribute(c,v),ty(a,s,i)===!0&&(t.push(a.x,a.y,a.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new on(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ty(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(a)===!0?!1:(t.add(i),t.add(a),!0)}class ZN extends ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=HS,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JN extends zl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class uE extends jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Gh=new Vt,ny=new B,ry=new B;class QN{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ff,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ny.setFromMatrixPosition(e.matrixWorld),t.position.copy(ny),ry.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ry),t.updateMatrixWorld(),Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const iy=new Vt,sl=new B,Wh=new B;class eF extends QN{constructor(){super(new hr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),sl.setFromMatrixPosition(e.matrixWorld),i.position.copy(sl),Wh.copy(i.position),Wh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wh),i.updateMatrixWorld(),a.makeTranslation(-sl.x,-sl.y,-sl.z),iy.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iy)}}class tF extends uE{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new eF}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nF extends uE{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rF extends Bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Tp extends HN{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class oy{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Cn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ay=new B,Ec=new B;class iF{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ay.subVectors(e,this.start),Ec.subVectors(this.end,this.start);const i=Ec.dot(Ec);let s=Ec.dot(ay)/i;return t&&(s=Cn(s,0,1)),s}closestPointToPoint(e,t,i){const a=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class oF extends hf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Bn;a.setAttribute("position",new on(t,3)),a.setAttribute("color",new on(i,3));const s=new zl({vertexColors:!0,toneMapped:!1});super(a,s),this.type="AxesHelper"}setColors(e,t,i){const a=new nt,s=this.geometry.attributes.color.array;return a.set(e),a.toArray(s,0),a.toArray(s,3),a.set(t),a.toArray(s,6),a.toArray(s,9),a.set(i),a.toArray(s,12),a.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lf);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class ui{constructor(e,t,i,a,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),ui.nextNameID=ui.nextNameID||0,this.$name.id=`lil-gui-name-${++ui.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class aF extends ui{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function bp(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const sF={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:bp,toHexString:bp},Ml={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},lF={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Ml.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return Ml.toHexString(a)}},uF={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Ml.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return Ml.toHexString(a)}},cF=[sF,Ml,lF,uF];function fF(n){return cF.find(e=>e.match(n))}class dF extends ui{constructor(e,t,i,a){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=fF(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=bp(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class $h extends ui{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class hF extends ui{constructor(e,t,i,a,s,c){super(e,t,i,"number"),this._initInput(),this.min(a),this.max(s);const u=c!==void 0;this.step(u?c:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let C=parseFloat(this.$input.value);isNaN(C)||(this._stepExplicit&&(C=this._snap(C)),this.setValue(this._clamp(C)))},i=C=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+C),this.$input.value=this.getValue())},a=C=>{C.key==="Enter"&&this.$input.blur(),C.code==="ArrowUp"&&(C.preventDefault(),i(this._step*this._arrowKeyMultiplier(C))),C.code==="ArrowDown"&&(C.preventDefault(),i(this._step*this._arrowKeyMultiplier(C)*-1))},s=C=>{this._inputFocused&&(C.preventDefault(),i(this._step*this._normalizeMouseWheel(C)))};let c=!1,u,d,h,p,v;const g=5,S=C=>{u=C.clientX,d=h=C.clientY,c=!0,p=this.getValue(),v=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",w)},E=C=>{if(c){const M=C.clientX-u,R=C.clientY-d;Math.abs(R)>g?(C.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>g&&w()}if(!c){const M=C.clientY-h;v-=M*this._step*this._arrowKeyMultiplier(C),p+v>this._max?v=this._max-p:p+v<this._min&&(v=this._min-p),this._snapClampSetValue(p+v)}h=C.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",w)},x=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,C,M,R,I)=>(_-C)/(M-C)*(I-R)+R,t=_=>{const C=this.$slider.getBoundingClientRect();let M=e(_,C.left,C.right,this._min,this._max);this._snapClampSetValue(M)},i=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",s)},a=_=>{t(_.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",s)};let c=!1,u,d;const h=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),c=!1},p=_=>{_.touches.length>1||(this._hasScrollBar?(u=_.touches[0].clientX,d=_.touches[0].clientY,c=!0):h(_),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",g))},v=_=>{if(c){const C=_.touches[0].clientX-u,M=_.touches[0].clientY-d;Math.abs(C)>Math.abs(M)?h(_):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",g))}else _.preventDefault(),t(_.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",g)},S=this._callOnFinishChange.bind(this),E=400;let w;const x=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const M=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(S,E)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class pF extends ui{constructor(e,t,i,a){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class mF extends ui{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const vF=`.lil-gui {
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
}`;function gF(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let sy=!1;class Bc{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:a,title:s="Controls",closeFolders:c=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!sy&&u&&(gF(vF),sy=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,i,a,s){if(Object(i)===i)return new pF(this,e,t,i);const c=e[t];switch(typeof c){case"number":return new hF(this,e,t,i,a,s);case"boolean":return new aF(this,e,t);case"string":return new mF(this,e,t);case"function":return new $h(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,i=1){return new dF(this,e,t,i)}addFolder(e){const t=new Bc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof $h||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof $h)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function Xh(n,e,t,i){return new(t||(t=Promise))((function(a,s){function c(h){try{d(i.next(h))}catch(p){s(p)}}function u(h){try{d(i.throw(h))}catch(p){s(p)}}function d(h){var p;h.done?a(h.value):(p=h.value,p instanceof t?p:new t((function(v){v(p)}))).then(c,u)}d((i=i.apply(n,[])).next())}))}class Tm{constructor(e,t,i,a){this.size=e,this.width=t,this.height=i,this.charLength=a,this.chars=""}static parse(e){const t=e.split(" "),i=t[0],a=i.split("x");return new Tm(i,+a[0],+a[1],+t[1])}get src(){return"data:image/jpeg;base64,"+this.chars}get isValid(){return this.chars.length==this.charLength&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(this.chars)}}class bm{constructor(e,t,i,a){this.src=e,this.gcode=t,this.params=i,this.comment=a}}class ly extends bm{constructor(e,t,i,a){super(e,t,i,a),this.params=i}}class ao extends bm{constructor(e,t,i,a){super(e,t,void 0,i),this.toolIndex=a}}class uy{constructor(e,t,i,a=0){this.layer=e,this.commands=t,this.lineNumber=i,this.height=a}}class Hc{constructor(e){this.lines=[],this.preamble=new uy(-1,[],0),this.layers=[],this.curZ=0,this.maxZ=0,this.metadata={thumbnails:{}},this.tolerance=0,this.tolerance=e??this.tolerance}parseGCode(e){const t=Array.isArray(e)?e:e.split(`
`);this.lines=this.lines.concat(t);const i=this.lines2commands(t);this.groupIntoLayers(i);const a=this.parseMetadata(i.filter((s=>s.comment))).thumbnails;for(const[s,c]of Object.entries(a))this.metadata.thumbnails[s]=c;return{layers:this.layers,metadata:this.metadata}}lines2commands(e){return e.map((t=>this.parseCommand(t)))}parseCommand(e,t=!0){var i;const a=e.trim().split(";"),s=a[0],c=t&&a[1]||void 0,u=s.split(/([a-zA-Z])/g).slice(1).map((p=>p.trim())),d=u.length?`${(i=u[0])===null||i===void 0?void 0:i.toLowerCase()}${u[1]}`:"",h=this.parseParams(u.slice(2));switch(d){case"g0":case"g00":case"g1":case"g01":case"g2":case"g02":case"g3":case"g03":return new ly(e,d,h,c);case"t0":return new ao(e,d,c,0);case"t1":return new ao(e,d,c,1);case"t2":return new ao(e,d,c,2);case"t3":return new ao(e,d,c,3);case"t4":return new ao(e,d,c,4);case"t5":return new ao(e,d,c,5);case"t6":return new ao(e,d,c,6);case"t7":return new ao(e,d,c,7);default:return new bm(e,d,h,c)}}parseMove(e){return e.reduce(((t,i)=>{const a=i.charAt(0).toLowerCase();return a!="x"&&a!="y"&&a!="z"&&a!="e"&&a!="r"&&a!="f"&&a!="i"&&a!="j"||(t[a]=parseFloat(i.slice(1))),t}),{})}isAlpha(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90}parseParams(e){return e.reduce(((t,i,a,s)=>{if(a%2==0)return t;let c=s[a-1];return c=c.toLowerCase(),this.isAlpha(c)&&(t[c]=parseFloat(i)),t}),{})}groupIntoLayers(e){var t;for(let i=0;i<e.length;i++){const a=e[i];if(a instanceof ly){const s=a.params;if(s.z&&(this.curZ=s.z),((t=s.e)!==null&&t!==void 0?t:0)>0&&(s.x!=null||s.y!=null)&&Math.abs(this.curZ-(this.maxZ||-1/0))>this.tolerance){const c=Math.abs(this.curZ-this.maxZ);this.maxZ=this.curZ,this.layers.push(new uy(this.layers.length,[],i,c))}}this.maxLayer.commands.push(a)}return this.layers}get maxLayer(){var e;return(e=this.layers[this.layers.length-1])!==null&&e!==void 0?e:this.preamble}parseMetadata(e){const t={};let i;for(const a of e){const s=a.comment;if(!s)continue;const c=s.indexOf("thumbnail begin"),u=s.indexOf("thumbnail end");c>-1?i=Tm.parse(s.slice(c+15).trim()):i&&(u==-1?i.chars+=s.trim():(i.isValid&&(t[i.size]=i),i=void 0))}return{thumbnails:t}}}Hc.prototype.parseGcode=Hc.prototype.parseGCode;const cy={type:"change"},jh={type:"start"},fy={type:"end"},wc=new Sm,dy=new lo,_F=Math.cos(70*GS.DEG2RAD);class yF extends ua{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ia.ROTATE,MIDDLE:Ia.DOLLY,RIGHT:Ia.PAN},this.touches={ONE:Ua.ROTATE,TWO:Ua.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(le){le.addEventListener("keydown",Oe),this._domElementKeyEvents=le},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cy),i.update(),s=a.NONE},this.update=(function(){const le=new B,ue=new ia().setFromUnitVectors(e.up,new B(0,1,0)),xe=ue.clone().invert(),ge=new B,Me=new ia,we=new B,Ie=2*Math.PI;return function(Ze=null){const D=i.object.position;le.copy(D).sub(i.target),le.applyQuaternion(ue),u.setFromVector3(le),i.autoRotate&&s===a.NONE&&N((function(ye){return ye!==null?2*Math.PI/60*i.autoRotateSpeed*ye:2*Math.PI/60/60*i.autoRotateSpeed})(Ze)),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let T=i.minAzimuthAngle,Y=i.maxAzimuthAngle;isFinite(T)&&isFinite(Y)&&(T<-Math.PI?T+=Ie:T>Math.PI&&(T-=Ie),Y<-Math.PI?Y+=Ie:Y>Math.PI&&(Y-=Ie),u.theta=T<=Y?Math.max(T,Math.min(Y,u.theta)):u.theta>(T+Y)/2?Math.max(T,u.theta):Math.min(Y,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&O||i.object.isOrthographicCamera?u.radius=X(u.radius):u.radius=X(u.radius*h),le.setFromSpherical(u),le.applyQuaternion(xe),D.copy(i.target).add(le),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let Ae=!1;if(i.zoomToCursor&&O){let ye=null;if(i.object.isPerspectiveCamera){const Ce=le.length();ye=X(Ce*h);const qe=Ce-ye;i.object.position.addScaledVector(R,qe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ce=new B(I.x,I.y,0);Ce.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0;const qe=new B(I.x,I.y,0);qe.unproject(i.object),i.object.position.sub(qe).add(Ce),i.object.updateMatrixWorld(),ye=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ye).add(i.object.position):(wc.origin.copy(i.object.position),wc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(wc.direction))<_F?e.lookAt(i.target):(dy.setFromNormalAndCoplanarPoint(i.object.up,i.target),wc.intersectPlane(dy,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Ae=!0);return h=1,O=!1,!!(Ae||ge.distanceToSquared(i.object.position)>c||8*(1-Me.dot(i.object.quaternion))>c||we.distanceToSquared(i.target)>0)&&(i.dispatchEvent(cy),ge.copy(i.object.position),Me.copy(i.object.quaternion),we.copy(i.target),!0)}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Fe),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Oe),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const c=1e-6,u=new oy,d=new oy;let h=1;const p=new B,v=new ht,g=new ht,S=new ht,E=new ht,w=new ht,x=new ht,_=new ht,C=new ht,M=new ht,R=new B,I=new ht;let O=!1;const F=[],de={};function b(){return Math.pow(.95,i.zoomSpeed)}function N(le){d.theta-=le}function ae(le){d.phi-=le}const ne=(function(){const le=new B;return function(ue,xe){le.setFromMatrixColumn(xe,0),le.multiplyScalar(-ue),p.add(le)}})(),pe=(function(){const le=new B;return function(ue,xe){i.screenSpacePanning===!0?le.setFromMatrixColumn(xe,1):(le.setFromMatrixColumn(xe,0),le.crossVectors(i.object.up,le)),le.multiplyScalar(ue),p.add(le)}})(),H=(function(){const le=new B;return function(ue,xe){const ge=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;le.copy(Me).sub(i.target);let we=le.length();we*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*ue*we/ge.clientHeight,i.object.matrix),pe(2*xe*we/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(ue*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),pe(xe*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Q(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(le){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=le:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(le){if(!i.zoomToCursor)return;O=!0;const ue=i.domElement.getBoundingClientRect(),xe=le.clientX-ue.left,ge=le.clientY-ue.top,Me=ue.width,we=ue.height;I.x=xe/Me*2-1,I.y=-ge/we*2+1,R.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function X(le){return Math.max(i.minDistance,Math.min(i.maxDistance,le))}function ie(le){v.set(le.clientX,le.clientY)}function $(le){E.set(le.clientX,le.clientY)}function L(){if(F.length===1)v.set(F[0].pageX,F[0].pageY);else{const le=.5*(F[0].pageX+F[1].pageX),ue=.5*(F[0].pageY+F[1].pageY);v.set(le,ue)}}function z(){if(F.length===1)E.set(F[0].pageX,F[0].pageY);else{const le=.5*(F[0].pageX+F[1].pageX),ue=.5*(F[0].pageY+F[1].pageY);E.set(le,ue)}}function W(){const le=F[0].pageX-F[1].pageX,ue=F[0].pageY-F[1].pageY,xe=Math.sqrt(le*le+ue*ue);_.set(0,xe)}function q(le){if(F.length==1)g.set(le.pageX,le.pageY);else{const xe=Be(le),ge=.5*(le.pageX+xe.x),Me=.5*(le.pageY+xe.y);g.set(ge,Me)}S.subVectors(g,v).multiplyScalar(i.rotateSpeed);const ue=i.domElement;N(2*Math.PI*S.x/ue.clientHeight),ae(2*Math.PI*S.y/ue.clientHeight),v.copy(g)}function ee(le){if(F.length===1)w.set(le.pageX,le.pageY);else{const ue=Be(le),xe=.5*(le.pageX+ue.x),ge=.5*(le.pageY+ue.y);w.set(xe,ge)}x.subVectors(w,E).multiplyScalar(i.panSpeed),H(x.x,x.y),E.copy(w)}function Z(le){const ue=Be(le),xe=le.pageX-ue.x,ge=le.pageY-ue.y,Me=Math.sqrt(xe*xe+ge*ge);C.set(0,Me),M.set(0,Math.pow(C.y/_.y,i.zoomSpeed)),Q(M.y),_.copy(C)}function _e(le){i.enabled!==!1&&(F.length===0&&(i.domElement.setPointerCapture(le.pointerId),i.domElement.addEventListener("pointermove",ve),i.domElement.addEventListener("pointerup",be)),(function(ue){F.push(ue)})(le),le.pointerType==="touch"?(function(ue){switch(Lt(ue),F.length){case 1:switch(i.touches.ONE){case Ua.ROTATE:if(i.enableRotate===!1)return;L(),s=a.TOUCH_ROTATE;break;case Ua.PAN:if(i.enablePan===!1)return;z(),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(i.touches.TWO){case Ua.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;i.enableZoom&&W(),i.enablePan&&z(),s=a.TOUCH_DOLLY_PAN;break;case Ua.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;i.enableZoom&&W(),i.enableRotate&&L(),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(jh)})(le):(function(ue){let xe;switch(ue.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Ia.DOLLY:if(i.enableZoom===!1)return;(function(ge){re(ge),_.set(ge.clientX,ge.clientY)})(ue),s=a.DOLLY;break;case Ia.ROTATE:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enablePan===!1)return;$(ue),s=a.PAN}else{if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}break;case Ia.PAN:if(ue.ctrlKey||ue.metaKey||ue.shiftKey){if(i.enableRotate===!1)return;ie(ue),s=a.ROTATE}else{if(i.enablePan===!1)return;$(ue),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(jh)})(le))}function ve(le){i.enabled!==!1&&(le.pointerType==="touch"?(function(ue){switch(Lt(ue),s){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;q(ue),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ee(ue),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enablePan&&ee(xe)})(ue),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enableRotate&&q(xe)})(ue),i.update();break;default:s=a.NONE}})(le):(function(ue){switch(s){case a.ROTATE:if(i.enableRotate===!1)return;(function(xe){g.set(xe.clientX,xe.clientY),S.subVectors(g,v).multiplyScalar(i.rotateSpeed);const ge=i.domElement;N(2*Math.PI*S.x/ge.clientHeight),ae(2*Math.PI*S.y/ge.clientHeight),v.copy(g),i.update()})(ue);break;case a.DOLLY:if(i.enableZoom===!1)return;(function(xe){C.set(xe.clientX,xe.clientY),M.subVectors(C,_),M.y>0?Q(b()):M.y<0&&se(b()),_.copy(C),i.update()})(ue);break;case a.PAN:if(i.enablePan===!1)return;(function(xe){w.set(xe.clientX,xe.clientY),x.subVectors(w,E).multiplyScalar(i.panSpeed),H(x.x,x.y),E.copy(w),i.update()})(ue)}})(le))}function be(le){(function(ue){delete de[ue.pointerId];for(let xe=0;xe<F.length;xe++)if(F[xe].pointerId==ue.pointerId)return void F.splice(xe,1)})(le),F.length===0&&(i.domElement.releasePointerCapture(le.pointerId),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(fy),s=a.NONE}function Fe(le){i.enabled!==!1&&i.enableZoom!==!1&&s===a.NONE&&(le.preventDefault(),i.dispatchEvent(jh),(function(ue){re(ue),ue.deltaY<0?se(b()):ue.deltaY>0&&Q(b()),i.update()})(le),i.dispatchEvent(fy))}function Oe(le){i.enabled!==!1&&i.enablePan!==!1&&(function(ue){let xe=!1;switch(ue.code){case i.keys.UP:ue.ctrlKey||ue.metaKey||ue.shiftKey?ae(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:ue.ctrlKey||ue.metaKey||ue.shiftKey?ae(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:ue.ctrlKey||ue.metaKey||ue.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:ue.ctrlKey||ue.metaKey||ue.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),xe=!0}xe&&(ue.preventDefault(),i.update())})(le)}function j(le){i.enabled!==!1&&le.preventDefault()}function Lt(le){let ue=de[le.pointerId];ue===void 0&&(ue=new ht,de[le.pointerId]=ue),ue.set(le.pageX,le.pageY)}function Be(le){const ue=le.pointerId===F[0].pointerId?F[1]:F[0];return de[ue.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Fe,{passive:!1}),this.update()}}Ne.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},rr.line={uniforms:Em.merge([Ne.common,Ne.fog,Ne.line]),vertexShader:`
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
		`};class cE extends So{constructor(e){super({type:"LineMaterial",uniforms:Em.clone(rr.line.uniforms),vertexShader:rr.line.vertexShader,fragmentShader:rr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const hy=new Lr,Mc=new B;class fE extends rF{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new on([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new on([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Tp(t,6,1);return this.setAttribute("instanceStart",new fo(i,3,0)),this.setAttribute("instanceEnd",new fo(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Tp(t,6,1);return this.setAttribute("instanceColorStart",new fo(i,3,0)),this.setAttribute("instanceColorEnd",new fo(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new KN(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),hy.setFromBufferAttribute(t),this.boundingBox.union(hy))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let a=0;for(let s=0,c=e.count;s<c;s++)Mc.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Mc)),Mc.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Mc));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const py=new B,my=new B,wn=new Ot,Mn=new Ot,ti=new Ot,Yh=new B,qh=new Vt,An=new iF,vy=new B,Ac=new Lr,Tc=new li,ni=new Ot;let ri,Jo;function gy(n,e,t){return ni.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ni.multiplyScalar(1/ni.w),ni.x=Jo/t.width,ni.y=Jo/t.height,ni.applyMatrix4(n.projectionMatrixInverse),ni.multiplyScalar(1/ni.w),Math.abs(Math.max(ni.x,ni.y))}class xF extends jr{constructor(e=new fE,t=new cE({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let c=0,u=0,d=t.count;c<d;c++,u+=2)py.fromBufferAttribute(t,c),my.fromBufferAttribute(i,c),a[u]=u===0?0:a[u-1],a[u+1]=a[u]+py.distanceTo(my);const s=new Tp(a,2,1);return e.setAttribute("instanceDistanceStart",new fo(s,1,0)),e.setAttribute("instanceDistanceEnd",new fo(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,a=e.camera;a!==null||i||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ri=e.ray;const c=this.matrixWorld,u=this.geometry,d=this.material;let h,p;Jo=d.linewidth+s,u.boundingSphere===null&&u.computeBoundingSphere(),Tc.copy(u.boundingSphere).applyMatrix4(c),i?h=.5*Jo:h=gy(a,Math.max(a.near,Tc.distanceToPoint(ri.origin)),d.resolution),Tc.radius+=h,ri.intersectsSphere(Tc)!==!1&&(u.boundingBox===null&&u.computeBoundingBox(),Ac.copy(u.boundingBox).applyMatrix4(c),i?p=.5*Jo:p=gy(a,Math.max(a.near,Ac.distanceToPoint(ri.origin)),d.resolution),Ac.expandByScalar(p),ri.intersectsBox(Ac)!==!1&&(i?(function(v,g){const S=v.matrixWorld,E=v.geometry,w=E.attributes.instanceStart,x=E.attributes.instanceEnd;for(let _=0,C=Math.min(E.instanceCount,w.count);_<C;_++){An.start.fromBufferAttribute(w,_),An.end.fromBufferAttribute(x,_),An.applyMatrix4(S);const M=new B,R=new B;ri.distanceSqToSegment(An.start,An.end,R,M),R.distanceTo(M)<.5*Jo&&g.push({point:R,pointOnLine:M,distance:ri.origin.distanceTo(R),object:v,face:null,faceIndex:_,uv:null,uv1:null})}})(this,t):(function(v,g,S){const E=g.projectionMatrix,w=v.material.resolution,x=v.matrixWorld,_=v.geometry,C=_.attributes.instanceStart,M=_.attributes.instanceEnd,R=Math.min(_.instanceCount,C.count),I=-g.near;ri.at(1,ti),ti.w=1,ti.applyMatrix4(g.matrixWorldInverse),ti.applyMatrix4(E),ti.multiplyScalar(1/ti.w),ti.x*=w.x/2,ti.y*=w.y/2,ti.z=0,Yh.copy(ti),qh.multiplyMatrices(g.matrixWorldInverse,x);for(let O=0,F=R;O<F;O++){if(wn.fromBufferAttribute(C,O),Mn.fromBufferAttribute(M,O),wn.w=1,Mn.w=1,wn.applyMatrix4(qh),Mn.applyMatrix4(qh),wn.z>I&&Mn.z>I)continue;if(wn.z>I){const ne=wn.z-Mn.z,pe=(wn.z-I)/ne;wn.lerp(Mn,pe)}else if(Mn.z>I){const ne=Mn.z-wn.z,pe=(Mn.z-I)/ne;Mn.lerp(wn,pe)}wn.applyMatrix4(E),Mn.applyMatrix4(E),wn.multiplyScalar(1/wn.w),Mn.multiplyScalar(1/Mn.w),wn.x*=w.x/2,wn.y*=w.y/2,Mn.x*=w.x/2,Mn.y*=w.y/2,An.start.copy(wn),An.start.z=0,An.end.copy(Mn),An.end.z=0;const de=An.closestPointToPointParameter(Yh,!0);An.at(de,vy);const b=GS.lerp(wn.z,Mn.z,de),N=b>=-1&&b<=1,ae=Yh.distanceTo(vy)<.5*Jo;if(N&&ae){An.start.fromBufferAttribute(C,O),An.end.fromBufferAttribute(M,O),An.start.applyMatrix4(x),An.end.applyMatrix4(x);const ne=new B,pe=new B;ri.distanceSqToSegment(An.start,An.end,pe,ne),S.push({point:pe,pointOnLine:ne,distance:ri.origin.distanceTo(pe),object:v,face:null,faceIndex:O,uv:null,uv1:null})}}})(this,a,t)))}}class SF extends hf{constructor(e,t,i,a,s=4473924,c=8947848){s=new nt(s),c=new nt(c);const u=Math.round(e/t);i=Math.round(i/a)*a/2;const d=[],h=[];let p=0;for(let g=-1*(e=u*t/2);g<=e;g+=t){d.push(g,0,-1*i,g,0,i);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}for(let g=-1*i;g<=i;g+=a){d.push(-1*e,0,g,e,0,g);const S=g===0?s:c;S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3,S.toArray(h,p),p+=3}const v=new Bn;v.setAttribute("position",new on(d,3)),v.setAttribute("color",new on(h,3)),super(v,new zl({vertexColors:!0,toneMapped:!1}))}}function EF(n,e,t,i){const a=(function(c,u,d){c*=.5,u*=.5,d*=.5;const h=new Bn,p=[];return p.push(-c,-u,-d,-c,u,-d,-c,u,-d,c,u,-d,c,u,-d,c,-u,-d,c,-u,-d,-c,-u,-d,-c,-u,d,-c,u,d,-c,u,d,c,u,d,c,u,d,c,-u,d,c,-u,d,-c,-u,d,-c,-u,-d,-c,-u,d,-c,u,-d,-c,u,d,c,u,-d,c,u,d,c,-u,-d,c,-u,d),h.setAttribute("position",new on(p,3)),h})(n,e,t),s=new hf(a,new JN({color:new nt(i),dashSize:3,gapSize:1}));return s.computeLineDistances(),s}var gl=function(){var n=0,e=document.createElement("div");function t(p){return e.appendChild(p.dom),p}function i(p){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===p?"block":"none";n=p}e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",(function(p){p.preventDefault(),i(++n%e.children.length)}),!1);var a=(performance||Date).now(),s=a,c=0,u=t(new gl.Panel("FPS","#0ff","#002")),d=t(new gl.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new gl.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=s+1e3&&(u.update(1e3*c/(p-s),100),s=p,c=0,h)){var v=performance.memory;h.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};gl.Panel=function(n,e,t){var i=1/0,a=0,s=Math.round,c=s(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,v=3*c,g=15*c,S=74*c,E=30*c,w=document.createElement("canvas");w.width=u,w.height=d,w.style.cssText="width:80px;height:48px";var x=w.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,u,d),x.fillStyle=e,x.fillText(n,h,p),x.fillRect(v,g,S,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v,g,S,E),{dom:w,update:function(_,C){i=Math.min(i,_),a=Math.max(a,_),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,u,g),x.fillStyle=e,x.fillText(s(_)+" "+n+" ("+s(i)+"-"+s(a)+")",h,p),x.drawImage(w,v+c,g,S-c,E,v,g,S-c,E),x.fillRect(v+S-c,g,c,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v+S-c,g,c,s((1-_/C)*E))}}};var wF=gl;class _y{constructor(e,t){this.openFolders=[],this.watchedObject=e,this.options=t,this.gui=new Bc,this.gui.title("Dev info"),this.setup()}setup(){this.loadOpenFolders(),this.options&&!this.options.renderer||this.setupRedererFolder(),this.options&&!this.options.camera||this.setupCameraFolder(),this.options&&!this.options.parser||this.setupParserFolder(),this.options&&!this.options.buildVolume||this.setupBuildVolumeFolder(),this.options&&!this.options.devHelpers||this.setupDevHelpers()}reset(){this.gui.destroy(),this.gui=new Bc,this.gui.title("Dev info"),this.setup()}loadOpenFolders(){this.openFolders=JSON.parse(localStorage.getItem("dev-gui-open")||"{}").open||[]}saveOpenFolders(){this.openFolders=this.gui.foldersRecursive().filter((e=>!e._closed)).map((e=>e._title)),console.log(this.openFolders),localStorage.setItem("dev-gui-open",JSON.stringify({open:this.openFolders}))}setupRedererFolder(){const e=this.gui.addFolder("Render Info");this.openFolders.includes("Render Info")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.renderer.info.render,"triangles").listen(),e.add(this.watchedObject.renderer.info.render,"calls").listen(),e.add(this.watchedObject.renderer.info.render,"lines").listen(),e.add(this.watchedObject.renderer.info.render,"points").listen(),e.add(this.watchedObject.renderer.info.memory,"geometries").listen(),e.add(this.watchedObject.renderer.info.memory,"textures").listen(),e.add(this.watchedObject,"_lastRenderTime").listen()}setupCameraFolder(){const e=this.gui.addFolder("Camera");this.openFolders.includes("Camera")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()}));const t=e.addFolder("Camera position");t.add(this.watchedObject.camera.position,"x").listen(),t.add(this.watchedObject.camera.position,"y").listen(),t.add(this.watchedObject.camera.position,"z").listen();const i=e.addFolder("Camera rotation");i.add(this.watchedObject.camera.rotation,"x").listen(),i.add(this.watchedObject.camera.rotation,"y").listen(),i.add(this.watchedObject.camera.rotation,"z").listen()}setupParserFolder(){const e=this.gui.addFolder("Parser");this.openFolders.includes("Parser")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.parser,"curZ").listen(),e.add(this.watchedObject.parser,"maxZ").listen(),e.add(this.watchedObject.parser,"tolerance").listen(),e.add(this.watchedObject.parser.layers,"length").name("layers.count").listen(),e.add(this.watchedObject.parser.lines,"length").name("lines.count").listen()}setupBuildVolumeFolder(){const e=this.gui.addFolder("Build Volume");this.openFolders.includes("Build Volume")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.buildVolume,"x").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"y").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"z").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()}))}setupDevHelpers(){const e=this.gui.addFolder("Dev Helpers");this.openFolders.includes("Dev Helpers")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject,"_wireframe").listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject,"render").listen(),e.add(this.watchedObject,"clear").listen()}}class MF extends Bn{constructor(e=[new B],t=.6,i=.2,a=8){super(),this.type="ExtrusionGeometry",this.parameters={points:e,lineWidth:t,lineHeight:i,radialSegments:a,closed:!1};const s=new B,c=new B,u=new ht,d=[],h=[],p=[],v=[];function g(S){const[E,w,x]=(function(_){const C=e[_],M=new B,R=new B,I=new B,O=new B;M.copy(C).sub(e[_-1]||C).normalize().add((e[_+1]||C).clone().sub(C).normalize()).normalize();let F=Number.MAX_VALUE;const de=Math.abs(M.x),b=Math.abs(M.y),N=Math.abs(M.z);return de<=F&&(F=de,R.set(1,0,0)),b<=F&&(F=b,R.set(0,1,0)),N<=F&&R.set(0,0,1),O.crossVectors(M,R).normalize(),R.crossVectors(M,O),I.crossVectors(M,R),[C,R,I]})(S);for(let _=0;_<=a;_++){const C=_/a*Math.PI*2,M=Math.sin(C),R=-Math.cos(C);c.x=R*w.x+M*x.x,c.y=R*w.y+M*x.y,c.z=R*w.z+M*x.z,c.normalize(),h.push(c.x,c.y,c.z),s.x=E.x+t*c.x*.5,s.y=E.y+t*c.y*.5,s.z=E.z+i*c.z*.5,d.push(s.x,s.y,s.z)}}(function(){for(let S=0;S<e.length;S++)g(S);g(closed===!1?e.length-1:0),(function(){for(let S=0;S<e.length;S++)for(let E=0;E<=a;E++)u.x=S/e.length,u.y=E/a,p.push(u.x,u.y)})(),(function(){for(let S=1;S<e.length;S++)for(let E=1;E<=a;E++){const w=(a+1)*(S-1)+(E-1),x=(a+1)*S+(E-1),_=(a+1)*S+E,C=(a+1)*(S-1)+E;v.push(w,x,C),v.push(x,_,C)}})()})(),this.setIndex(v),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(p,2))}}class _l{static get initial(){const e=new _l;return Object.assign(e,{x:0,y:0,z:0,r:0,e:0,i:0,j:0,t:0}),e}}const Kh={h:0,s:0,l:0};class os{constructor(e){var t,i,a,s,c,u,d,h,p;if(this.minLayerThreshold=.05,this.renderExtrusion=!0,this.renderTravel=!1,this.renderTubes=!1,this.extrusionWidth=.6,this.singleLayerMode=!1,this.initialCameraPosition=[-100,400,450],this.debug=!1,this.inches=!1,this.nonTravelmoves=[],this.disableGradient=!1,this.state=_l.initial,this.beyondFirstMove=!1,this.disposables=[],this._extrusionColor=os.defaultExtrusionColor,this.renderLayerIndex=0,this._geometries={},this._backgroundColor=new nt(14737632),this._travelColor=new nt(10027008),this._toolColors={},this.devMode=!1,this._lastRenderTime=0,this._wireframe=!1,this.minLayerThreshold=(t=e.minLayerThreshold)!==null&&t!==void 0?t:this.minLayerThreshold,this.parser=new Hc(this.minLayerThreshold),this.scene=new BN,this.scene.background=this._backgroundColor,e.backgroundColor!==void 0&&(this.backgroundColor=new nt(e.backgroundColor)),this.targetId=e.targetId,this.endLayer=e.endLayer,this.startLayer=e.startLayer,this.lineWidth=e.lineWidth,this.lineHeight=e.lineHeight,this.buildVolume=e.buildVolume,this.initialCameraPosition=(i=e.initialCameraPosition)!==null&&i!==void 0?i:this.initialCameraPosition,this.debug=(a=e.debug)!==null&&a!==void 0?a:this.debug,this.renderExtrusion=(s=e.renderExtrusion)!==null&&s!==void 0?s:this.renderExtrusion,this.renderTravel=(c=e.renderTravel)!==null&&c!==void 0?c:this.renderTravel,this.nonTravelmoves=(u=e.nonTravelMoves)!==null&&u!==void 0?u:this.nonTravelmoves,this.renderTubes=(d=e.renderTubes)!==null&&d!==void 0?d:this.renderTubes,this.extrusionWidth=(h=e.extrusionWidth)!==null&&h!==void 0?h:this.extrusionWidth,this.devMode=(p=e.devMode)!==null&&p!==void 0?p:this.devMode,this.stats=this.devMode?new wF:void 0,e.extrusionColor!==void 0&&(this.extrusionColor=e.extrusionColor),e.travelColor!==void 0&&(this.travelColor=new nt(e.travelColor)),e.topLayerColor!==void 0&&(this.topLayerColor=new nt(e.topLayerColor)),e.lastSegmentColor!==void 0&&(this.lastSegmentColor=new nt(e.lastSegmentColor)),e.toolColors){this._toolColors={};for(const[S,E]of Object.entries(e.toolColors))this._toolColors[parseInt(S)]=new nt(E)}if(e.disableGradient!==void 0&&(this.disableGradient=e.disableGradient),console.info("Using THREE r"+lf),console.debug("opts",e),this.targetId&&console.warn("`targetId` is deprecated and will removed in the future. Use `canvas` instead."),e.canvas)this.canvas=e.canvas,this.renderer=new Ap({canvas:this.canvas,preserveDrawingBuffer:!0});else{if(!this.targetId)throw Error("Set either opts.canvas or opts.targetId");const S=document.getElementById(this.targetId);if(!S)throw new Error("Unable to find element "+this.targetId);this.renderer=new Ap({preserveDrawingBuffer:!0}),this.canvas=this.renderer.domElement,S.appendChild(this.canvas)}this.camera=new hr(25,this.canvas.offsetWidth/this.canvas.offsetHeight,10,5e3),this.camera.position.fromArray(this.initialCameraPosition);const v=this.camera.far,g=.8*v;this.scene.fog=new Am(this._backgroundColor,g,v),this.resize(),this.controls=new yF(this.camera,this.renderer.domElement),this.initScene(),this.animate(),e.allowDragNDrop&&this._enableDropHandler(),this.initStats()}get extrusionColor(){return this._extrusionColor}set extrusionColor(e){if(Array.isArray(e)){this._extrusionColor=[];for(const[t,i]of e.entries())this._extrusionColor[t]=new nt(i)}else this._extrusionColor=new nt(e)}get currentToolColor(){var e;return this._extrusionColor===void 0?os.defaultExtrusionColor:this._extrusionColor instanceof nt?this._extrusionColor:(e=this._extrusionColor[this.state.t])!==null&&e!==void 0?e:os.defaultExtrusionColor}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=new nt(e),this.scene.background=this._backgroundColor}get travelColor(){return this._travelColor}set travelColor(e){this._travelColor=new nt(e)}get topLayerColor(){return this._topLayerColor}set topLayerColor(e){this._topLayerColor=e!==void 0?new nt(e):void 0}get lastSegmentColor(){return this._lastSegmentColor}set lastSegmentColor(e){this._lastSegmentColor=e!==void 0?new nt(e):void 0}get layers(){return[this.parser.preamble].concat(this.parser.layers.concat())}get maxLayerIndex(){var e;return((e=this.endLayer)!==null&&e!==void 0?e:this.layers.length)-1}get minLayerIndex(){var e;return this.singleLayerMode?this.maxLayerIndex:((e=this.startLayer)!==null&&e!==void 0?e:0)-1}animate(){var e;this.animationFrameId=requestAnimationFrame((()=>this.animate())),this.controls.update(),this.renderer.render(this.scene,this.camera),(e=this.stats)===null||e===void 0||e.update()}processGCode(e){this.parser.parseGCode(e),this.render()}initScene(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);for(;this.disposables.length>0;){const e=this.disposables.pop();e&&e.dispose()}if(this.debug&&this.buildVolume){const e=new oF(Math.max(this.buildVolume.x/2,this.buildVolume.y/2)+20);this.scene.add(e)}if(this.buildVolume&&this.drawBuildVolume(),this.renderTubes){console.warn("Volumetric rendering is experimental. It may not work as expected or change in the future.");const e=new nF(13421772,.3*Math.PI),t=new tF(16777215,Math.PI,void 0,.001);t.position.set(0,500,500),this.scene.add(e),this.scene.add(t)}}createGroup(e){const t=new ul;return t.name=e,t.quaternion.setFromEuler(new Fl(-Math.PI/2,0,0)),this.buildVolume?t.position.set(-this.buildVolume.x/2,0,this.buildVolume.y/2):t.position.set(-100,0,100),t}render(){const e=performance.now();this.group=this.createGroup("allLayers"),this.state=_l.initial,this.initScene();for(let t=0;t<this.layers.length;t++)this.renderLayer(t);this.batchGeometries(),this.scene.add(this.group),this.renderer.render(this.scene,this.camera),this._lastRenderTime=performance.now()-e}renderAnimated(e=1){return Xh(this,void 0,void 0,(function*(){return this.initScene(),this.renderLayerIndex=0,this.renderFrameLoop(e>0?e:1)}))}renderFrameLoop(e){return new Promise((t=>{const i=()=>{this.renderLayerIndex>this.layers.length-1?t():(this.renderFrame(e),requestAnimationFrame(i))};i()}))}renderFrame(e){this.group=this.createGroup("layer"+this.renderLayerIndex);for(let t=0;t<e&&this.renderLayerIndex+t<this.layers.length;t++)this.renderLayer(this.renderLayerIndex),this.renderLayerIndex++;this.batchGeometries(),this.scene.add(this.group)}renderLayer(e){var t,i,a,s,c,u,d,h;if(e>this.maxLayerIndex)return;const p=this.layers[e],v={extrusion:[],travel:[],z:this.state.z,height:p.height};for(const g of p.commands)if(g.gcode!="g20"){if(g.gcode.startsWith("t")){this.doRenderExtrusion(v,e),v.extrusion=[];const S=g;this.state.t=S.toolIndex}else if(["g0","g00","g1","g01","g2","g02","g3","g03"].indexOf(g.gcode)>-1){const S=g,E={x:(t=S.params.x)!==null&&t!==void 0?t:this.state.x,y:(i=S.params.y)!==null&&i!==void 0?i:this.state.y,z:(a=S.params.z)!==null&&a!==void 0?a:this.state.z,r:(s=S.params.r)!==null&&s!==void 0?s:this.state.r,e:(c=S.params.e)!==null&&c!==void 0?c:this.state.e,i:(u=S.params.i)!==null&&u!==void 0?u:this.state.i,j:(d=S.params.j)!==null&&d!==void 0?d:this.state.j,t:this.state.t};if(e>=this.minLayerIndex){const w=((h=S.params.e)!==null&&h!==void 0?h:0)>0||this.nonTravelmoves.indexOf(g.gcode)>-1;(E.x!=this.state.x||E.y!=this.state.y||E.z!=this.state.z)&&(w&&this.renderExtrusion||!w&&this.renderTravel)&&(g.gcode=="g2"||g.gcode=="g3"||g.gcode=="g02"||g.gcode=="g03"?this.addArcSegment(v,this.state,E,w,g.gcode=="g2"||g.gcode=="g02"):this.addLineSegment(v,this.state,E,w))}this.state.x=E.x,this.state.y=E.y,this.state.z=E.z,this.beyondFirstMove||(this.beyondFirstMove=!0)}}else this.setInches();this.doRenderExtrusion(v,e)}doRenderExtrusion(e,t){var i,a;if(this.renderExtrusion){let s=this.currentToolColor;if(!this.singleLayerMode&&!this.renderTubes&&!this.disableGradient){const c=.1+.7*t/this.layers.length;s.getHSL(Kh),s=new nt().setHSL(Kh.h,Kh.s,c)}if(t==this.layers.length-1){const c=(i=this._topLayerColor)!==null&&i!==void 0?i:s,u=(a=this._lastSegmentColor)!==null&&a!==void 0?a:c,d=e.extrusion.splice(-3),h=e.extrusion.splice(-3);this.renderTubes?(this.addTubeLine(e.extrusion,c.getHex(),e.height),this.addTubeLine([...h,...d],u.getHex(),e.height)):(this.addLine(e.extrusion,c.getHex()),this.addLine([...h,...d],u.getHex()))}else this.renderTubes?this.addTubeLine(e.extrusion,s.getHex(),e.height):this.addLine(e.extrusion,s.getHex())}this.renderTravel&&this.addLine(e.travel,this._travelColor.getHex())}setInches(){this.beyondFirstMove?console.warn("Switching units after movement is already made is discouraged and is not supported."):this.inches=!0}drawBuildVolume(){if(!this.buildVolume)return;this.scene.add(new SF(this.buildVolume.x,10,this.buildVolume.y,10));const e=EF(this.buildVolume.x,this.buildVolume.z,this.buildVolume.y,8947848);e.position.setY(this.buildVolume.z/2),this.scene.add(e)}clear(){this.resetState(),this.parser=new Hc(this.minLayerThreshold)}resetState(){var e;this.startLayer=1,this.endLayer=1/0,this.singleLayerMode=!1,this.beyondFirstMove=!1,this.state=_l.initial,(e=this.devGui)===null||e===void 0||e.reset(),this._geometries={}}resize(){const[e,t]=[this.canvas.offsetWidth,this.canvas.offsetHeight];this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1)}addLineSegment(e,t,i,a){(a?e.extrusion:e.travel).push(t.x,t.y,t.z,i.x,i.y,i.z)}addArcSegment(e,t,i,a,s){const c=a?e.extrusion:e.travel,u=t.x,d=t.y,h=t.z,p=i.x,v=i.y,g=i.z;let S=i.r,E=i.i,w=i.j;if(S){const Q=p-u,se=v-d,re=Math.sqrt(Math.pow(Q/2,2)+Math.pow(se/2,2));S=Math.max(S,re);const X=Math.pow(Q,2)+Math.pow(se,2),ie=Math.pow(S,2)-X/4;let $=Math.sqrt(ie/X);(s&&S<0||!s&&S>0)&&($=-$),E=Q/2+se*$,w=se/2-Q*$}const x=u==p&&d==v,_=u+E,C=d+w,M=Math.sqrt(E*E+w*w),R=Math.atan2(-w,-E),I=Math.atan2(v-C,p-_);let O;x?O=2*Math.PI:(O=s?R-I:I-R,O<0&&(O+=2*Math.PI));let F=M*O/1.8;this.inches&&(F*=25),F<1&&(F=1);let de=O/F;de*=s?-1:1;const b=[];b.push({x:u,y:d,z:h});const N=(h-g)/F;let ae=u,ne=d,pe=h,H=R;for(let Q=0;Q<F-1;Q++)H+=de,ae=_+M*Math.cos(H),ne=C+M*Math.sin(H),pe+=N,b.push({x:ae,y:ne,z:pe});b.push({x:i.x,y:i.y,z:i.z});for(let Q=0;Q<b.length-1;Q++)c.push(b[Q].x,b[Q].y,b[Q].z,b[Q+1].x,b[Q+1].y,b[Q+1].z)}addLine(e,t){var i;if(typeof this.lineWidth=="number"&&this.lineWidth>0)return void this.addThickLine(e,t);const a=new Bn;a.setAttribute("position",new on(e,3)),this.disposables.push(a);const s=new zl({color:t});this.disposables.push(s);const c=new hf(a,s);(i=this.group)===null||i===void 0||i.add(c)}addTubeLine(e,t,i=.2){let a=[];const s=[];for(let c=0;c<e.length;c+=6){const u=e.slice(c,c+9),d=new B(u[0],u[1],u[2]),h=new B(u[3],u[4],u[5]),p=new B(u[6],u[7],u[8]);a.push(d),h.equals(p)||(a.push(h),s.push(a),a=[])}s.forEach((c=>{var u;const d=new MF(c,this.extrusionWidth,this.lineHeight||i,4);(u=this._geometries)[t]||(u[t]=[]),this._geometries[t].push(d)}))}addThickLine(e,t){var i;if(!e.length||!this.lineWidth)return;const a=new fE;this.disposables.push(a);const s=new cE({color:t,linewidth:this.lineWidth/(1e3*window.devicePixelRatio)});this.disposables.push(s),a.setPositions(e);const c=new xF(a,s);(i=this.group)===null||i===void 0||i.add(c)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[],this.controls.dispose(),this.renderer.dispose(),this.cancelAnimation()}cancelAnimation(){this.animationFrameId!==void 0&&cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0}_enableDropHandler(){console.warn("Drag and drop is deprecated as a library feature. See the demo how to implement your own."),this.canvas.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.canvas.classList.add("dragging")})),this.canvas.addEventListener("dragleave",(e=>{e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging")})),this.canvas.addEventListener("drop",(e=>Xh(this,void 0,void 0,(function*(){var t,i;e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging");const a=((i=(t=e.dataTransfer)===null||t===void 0?void 0:t.files)!==null&&i!==void 0?i:[])[0];this.clear(),yield this._readFromStream(a.stream()),this.render()}))))}batchGeometries(){if(this._geometries)for(const e in this._geometries){const t=this.createBatchMesh(parseInt(e));for(;this._geometries[e].length>0;){const i=this._geometries[e].pop();t.addGeometry(i)}}}createBatchMesh(e){var t;const i=this._geometries[e],a=new ZN({color:e,wireframe:this._wireframe});this.disposables.push(a);const s=i.reduce(((u,d)=>3*d.attributes.position.count+u),0),c=new YN(i.length,s,void 0,a);return this.disposables.push(c),(t=this.group)===null||t===void 0||t.add(c),c}_readFromStream(e){var t,i;return Xh(this,void 0,void 0,(function*(){const a=e.getReader();let s,c="",u=0;do{console.debug("reading from stream"),s=yield a.read(),u+=(i=(t=s.value)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0;const h=(d=s.value,new TextDecoder("utf-8").decode(d)),p=h.lastIndexOf(`
`),v=h.slice(0,p);this.parser.parseGCode(c+v),c=h.slice(p)}while(!s.done);var d;console.debug("read from stream",u)}))}initGui(){typeof this.devMode=="boolean"&&this.devMode===!0?this.devGui=new _y(this):typeof this.devMode=="object"&&(this.devGui=new _y(this,this.devMode))}initStats(){var e;this.stats&&(typeof this.devMode=="object"&&(this.statsContainer=this.devMode.statsContainer),((e=this.statsContainer)!==null&&e!==void 0?e:document.body).appendChild(this.stats.dom),this.stats.dom.classList.add("stats"),this.initGui())}}os.defaultExtrusionColor=new nt("hotpink");const AF=function(n){return new os(n)},TF="_canvas_1cjd4_5",bF={canvas:TF},CF=({gcode:n,endLayer:e})=>{const t=Ve.useRef(null),i=Ve.useRef({webgl:null});return Ve.useEffect(()=>{t.current&&!i.current.webgl&&(i.current.webgl=AF({canvas:t.current,lineWidth:4,lineHeight:4,renderTravel:!1,renderExtrusion:!0,renderTubes:!1,startLayer:0,endLayer:100,backgroundColor:"black",buildVolume:{x:220,y:220,z:0}}),i.current.webgl.processGCode(n),i.current.webgl.render())},[]),Ve.useEffect(()=>{t.current&&i.current.webgl&&i.current.webgl.processGCode(n)},[n]),Ve.useEffect(()=>{t.current&&i.current.webgl&&(i.current.webgl.endLayer=e,i.current.webgl.render())},[e]),tt.jsx("canvas",{ref:t,className:bF.canvas})};Sy();function yy(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function dE(...n){return e=>{let t=!1;const i=n.map(a=>{const s=yy(a,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let a=0;a<i.length;a++){const s=i[a];typeof s=="function"?s():yy(n[a],null)}}}}function Eo(...n){return Ve.useCallback(dE(...n),n)}function Cp(n){const e=RF(n),t=Ve.forwardRef((i,a)=>{const{children:s,...c}=i,u=Ve.Children.toArray(s),d=u.find(PF);if(d){const h=d.props.children,p=u.map(v=>v===d?Ve.Children.count(h)>1?Ve.Children.only(null):Ve.isValidElement(h)?h.props.children:null:v);return tt.jsx(e,{...c,ref:a,children:Ve.isValidElement(h)?Ve.cloneElement(h,void 0,p):null})}return tt.jsx(e,{...c,ref:a,children:s})});return t.displayName=`${n}.Slot`,t}function RF(n){const e=Ve.forwardRef((t,i)=>{const{children:a,...s}=t;if(Ve.isValidElement(a)){const c=IF(a),u=DF(s,a.props);return a.type!==Ve.Fragment&&(u.ref=i?dE(i,c):c),Ve.cloneElement(a,u)}return Ve.Children.count(a)>1?Ve.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var LF=Symbol("radix.slottable");function PF(n){return Ve.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===LF}function DF(n,e){const t={...e};for(const i in e){const a=n[i],s=e[i];/^on[A-Z]/.test(i)?a&&s?t[i]=(...u)=>{const d=s(...u);return a(...u),d}:a&&(t[i]=a):i==="style"?t[i]={...a,...s}:i==="className"&&(t[i]=[a,s].filter(Boolean).join(" "))}return{...n,...t}}function IF(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var UF=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],kl=UF.reduce((n,e)=>{const t=Cp(`Primitive.${e}`),i=Ve.forwardRef((a,s)=>{const{asChild:c,...u}=a,d=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),tt.jsx(d,{...u,ref:s})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function hE(n,e=[]){let t=[];function i(s,c){const u=Ve.createContext(c),d=t.length;t=[...t,c];const h=v=>{const{scope:g,children:S,...E}=v,w=g?.[n]?.[d]||u,x=Ve.useMemo(()=>E,Object.values(E));return tt.jsx(w.Provider,{value:x,children:S})};h.displayName=s+"Provider";function p(v,g){const S=g?.[n]?.[d]||u,E=Ve.useContext(S);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${s}\``)}return[h,p]}const a=()=>{const s=t.map(c=>Ve.createContext(c));return function(u){const d=u?.[n]||s;return Ve.useMemo(()=>({[`__scope${n}`]:{...u,[n]:d}}),[u,d])}};return a.scopeName=n,[i,NF(a,...e)]}function NF(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const c=i.reduce((u,{useScope:d,scopeName:h})=>{const v=d(s)[`__scope${h}`];return{...u,...v}},{});return Ve.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function FF(n){const e=n+"CollectionProvider",[t,i]=hE(e),[a,s]=t(e,{collectionRef:{current:null},itemMap:new Map}),c=w=>{const{scope:x,children:_}=w,C=so.useRef(null),M=so.useRef(new Map).current;return tt.jsx(a,{scope:x,itemMap:M,collectionRef:C,children:_})};c.displayName=e;const u=n+"CollectionSlot",d=Cp(u),h=so.forwardRef((w,x)=>{const{scope:_,children:C}=w,M=s(u,_),R=Eo(x,M.collectionRef);return tt.jsx(d,{ref:R,children:C})});h.displayName=u;const p=n+"CollectionItemSlot",v="data-radix-collection-item",g=Cp(p),S=so.forwardRef((w,x)=>{const{scope:_,children:C,...M}=w,R=so.useRef(null),I=Eo(x,R),O=s(p,_);return so.useEffect(()=>(O.itemMap.set(R,{ref:R,...M}),()=>void O.itemMap.delete(R))),tt.jsx(g,{[v]:"",ref:I,children:C})});S.displayName=p;function E(w){const x=s(n+"CollectionConsumer",w);return so.useCallback(()=>{const C=x.collectionRef.current;if(!C)return[];const M=Array.from(C.querySelectorAll(`[${v}]`));return Array.from(x.itemMap.values()).sort((O,F)=>M.indexOf(O.ref.current)-M.indexOf(F.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:c,Slot:h,ItemSlot:S},E,i]}function Qa(n,e,{checkForDefaultPrevented:t=!0}={}){return function(a){if(n?.(a),t===!1||!a.defaultPrevented)return e?.(a)}}var pE=globalThis?.document?Ve.useLayoutEffect:()=>{},OF=yM[" useInsertionEffect ".trim().toString()]||pE;function zF({prop:n,defaultProp:e,onChange:t=()=>{},caller:i}){const[a,s,c]=kF({defaultProp:e,onChange:t}),u=n!==void 0,d=u?n:a;{const p=Ve.useRef(n!==void 0);Ve.useEffect(()=>{const v=p.current;v!==u&&console.warn(`${i} is changing from ${v?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=u},[u,i])}const h=Ve.useCallback(p=>{if(u){const v=BF(p)?p(n):p;v!==n&&c.current?.(v)}else s(p)},[u,n,s,c]);return[d,h]}function kF({defaultProp:n,onChange:e}){const[t,i]=Ve.useState(n),a=Ve.useRef(t),s=Ve.useRef(e);return OF(()=>{s.current=e},[e]),Ve.useEffect(()=>{a.current!==t&&(s.current?.(t),a.current=t)},[t,a]),[t,i,s]}function BF(n){return typeof n=="function"}var HF=Ve.createContext(void 0);function VF(n){const e=Ve.useContext(HF);return n||e||"ltr"}function GF(n){const e=Ve.useRef({value:n,previous:n});return Ve.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}function WF(n){const[e,t]=Ve.useState(void 0);return pE(()=>{if(n){t({width:n.offsetWidth,height:n.offsetHeight});const i=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const s=a[0];let c,u;if("borderBoxSize"in s){const d=s.borderBoxSize,h=Array.isArray(d)?d[0]:d;c=h.inlineSize,u=h.blockSize}else c=n.offsetWidth,u=n.offsetHeight;t({width:c,height:u})});return i.observe(n,{box:"border-box"}),()=>i.unobserve(n)}else t(void 0)},[n]),e}function mE(n,[e,t]){return Math.min(t,Math.max(e,n))}var vE=["PageUp","PageDown"],gE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],_E={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Ss="Slider",[Rp,$F,XF]=FF(Ss),[yE,_O]=hE(Ss,[XF]),[jF,pf]=yE(Ss),xE=Ve.forwardRef((n,e)=>{const{name:t,min:i=0,max:a=100,step:s=1,orientation:c="horizontal",disabled:u=!1,minStepsBetweenThumbs:d=0,defaultValue:h=[i],value:p,onValueChange:v=()=>{},onValueCommit:g=()=>{},inverted:S=!1,form:E,...w}=n,x=Ve.useRef(new Set),_=Ve.useRef(0),M=c==="horizontal"?YF:qF,[R=[],I]=zF({prop:p,defaultProp:h,onChange:ae=>{[...x.current][_.current]?.focus(),v(ae)}}),O=Ve.useRef(R);function F(ae){const ne=eO(R,ae);N(ae,ne)}function de(ae){N(ae,_.current)}function b(){const ae=O.current[_.current];R[_.current]!==ae&&g(R)}function N(ae,ne,{commit:pe}={commit:!1}){const H=iO(s),Q=oO(Math.round((ae-i)/s)*s+i,H),se=mE(Q,[i,a]);I((re=[])=>{const X=JF(re,se,ne);if(rO(X,d*s)){_.current=X.indexOf(se);const ie=String(X)!==String(re);return ie&&pe&&g(X),ie?X:re}else return re})}return tt.jsx(jF,{scope:n.__scopeSlider,name:t,disabled:u,min:i,max:a,valueIndexToChangeRef:_,thumbs:x.current,values:R,orientation:c,form:E,children:tt.jsx(Rp.Provider,{scope:n.__scopeSlider,children:tt.jsx(Rp.Slot,{scope:n.__scopeSlider,children:tt.jsx(M,{"aria-disabled":u,"data-disabled":u?"":void 0,...w,ref:e,onPointerDown:Qa(w.onPointerDown,()=>{u||(O.current=R)}),min:i,max:a,inverted:S,onSlideStart:u?void 0:F,onSlideMove:u?void 0:de,onSlideEnd:u?void 0:b,onHomeKeyDown:()=>!u&&N(i,0,{commit:!0}),onEndKeyDown:()=>!u&&N(a,R.length-1,{commit:!0}),onStepKeyDown:({event:ae,direction:ne})=>{if(!u){const Q=vE.includes(ae.key)||ae.shiftKey&&gE.includes(ae.key)?10:1,se=_.current,re=R[se],X=s*Q*ne;N(re+X,se,{commit:!0})}}})})})})});xE.displayName=Ss;var[SE,EE]=yE(Ss,{startEdge:"left",endEdge:"right",size:"width",direction:1}),YF=Ve.forwardRef((n,e)=>{const{min:t,max:i,dir:a,inverted:s,onSlideStart:c,onSlideMove:u,onSlideEnd:d,onStepKeyDown:h,...p}=n,[v,g]=Ve.useState(null),S=Eo(e,M=>g(M)),E=Ve.useRef(void 0),w=VF(a),x=w==="ltr",_=x&&!s||!x&&s;function C(M){const R=E.current||v.getBoundingClientRect(),I=[0,R.width],F=Cm(I,_?[t,i]:[i,t]);return E.current=R,F(M-R.left)}return tt.jsx(SE,{scope:n.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width",children:tt.jsx(wE,{dir:w,"data-orientation":"horizontal",...p,ref:S,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:M=>{const R=C(M.clientX);c?.(R)},onSlideMove:M=>{const R=C(M.clientX);u?.(R)},onSlideEnd:()=>{E.current=void 0,d?.()},onStepKeyDown:M=>{const I=_E[_?"from-left":"from-right"].includes(M.key);h?.({event:M,direction:I?-1:1})}})})}),qF=Ve.forwardRef((n,e)=>{const{min:t,max:i,inverted:a,onSlideStart:s,onSlideMove:c,onSlideEnd:u,onStepKeyDown:d,...h}=n,p=Ve.useRef(null),v=Eo(e,p),g=Ve.useRef(void 0),S=!a;function E(w){const x=g.current||p.current.getBoundingClientRect(),_=[0,x.height],M=Cm(_,S?[i,t]:[t,i]);return g.current=x,M(w-x.top)}return tt.jsx(SE,{scope:n.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:tt.jsx(wE,{"data-orientation":"vertical",...h,ref:v,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:w=>{const x=E(w.clientY);s?.(x)},onSlideMove:w=>{const x=E(w.clientY);c?.(x)},onSlideEnd:()=>{g.current=void 0,u?.()},onStepKeyDown:w=>{const _=_E[S?"from-bottom":"from-top"].includes(w.key);d?.({event:w,direction:_?-1:1})}})})}),wE=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,onSlideStart:i,onSlideMove:a,onSlideEnd:s,onHomeKeyDown:c,onEndKeyDown:u,onStepKeyDown:d,...h}=n,p=pf(Ss,t);return tt.jsx(kl.span,{...h,ref:e,onKeyDown:Qa(n.onKeyDown,v=>{v.key==="Home"?(c(v),v.preventDefault()):v.key==="End"?(u(v),v.preventDefault()):vE.concat(gE).includes(v.key)&&(d(v),v.preventDefault())}),onPointerDown:Qa(n.onPointerDown,v=>{const g=v.target;g.setPointerCapture(v.pointerId),v.preventDefault(),p.thumbs.has(g)?g.focus():i(v)}),onPointerMove:Qa(n.onPointerMove,v=>{v.target.hasPointerCapture(v.pointerId)&&a(v)}),onPointerUp:Qa(n.onPointerUp,v=>{const g=v.target;g.hasPointerCapture(v.pointerId)&&(g.releasePointerCapture(v.pointerId),s(v))})})}),ME="SliderTrack",AE=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=pf(ME,t);return tt.jsx(kl.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...i,ref:e})});AE.displayName=ME;var Lp="SliderRange",TE=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,...i}=n,a=pf(Lp,t),s=EE(Lp,t),c=Ve.useRef(null),u=Eo(e,c),d=a.values.length,h=a.values.map(g=>RE(g,a.min,a.max)),p=d>1?Math.min(...h):0,v=100-Math.max(...h);return tt.jsx(kl.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...i,ref:u,style:{...n.style,[s.startEdge]:p+"%",[s.endEdge]:v+"%"}})});TE.displayName=Lp;var Pp="SliderThumb",bE=Ve.forwardRef((n,e)=>{const t=$F(n.__scopeSlider),[i,a]=Ve.useState(null),s=Eo(e,u=>a(u)),c=Ve.useMemo(()=>i?t().findIndex(u=>u.ref.current===i):-1,[t,i]);return tt.jsx(KF,{...n,ref:s,index:c})}),KF=Ve.forwardRef((n,e)=>{const{__scopeSlider:t,index:i,name:a,...s}=n,c=pf(Pp,t),u=EE(Pp,t),[d,h]=Ve.useState(null),p=Eo(e,C=>h(C)),v=d?c.form||!!d.closest("form"):!0,g=WF(d),S=c.values[i],E=S===void 0?0:RE(S,c.min,c.max),w=QF(i,c.values.length),x=g?.[u.size],_=x?tO(x,E,u.direction):0;return Ve.useEffect(()=>{if(d)return c.thumbs.add(d),()=>{c.thumbs.delete(d)}},[d,c.thumbs]),tt.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u.startEdge]:`calc(${E}% + ${_}px)`},children:[tt.jsx(Rp.ItemSlot,{scope:n.__scopeSlider,children:tt.jsx(kl.span,{role:"slider","aria-label":n["aria-label"]||w,"aria-valuemin":c.min,"aria-valuenow":S,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...s,ref:p,style:S===void 0?{display:"none"}:n.style,onFocus:Qa(n.onFocus,()=>{c.valueIndexToChangeRef.current=i})})}),v&&tt.jsx(CE,{name:a??(c.name?c.name+(c.values.length>1?"[]":""):void 0),form:c.form,value:S},i)]})});bE.displayName=Pp;var ZF="RadioBubbleInput",CE=Ve.forwardRef(({__scopeSlider:n,value:e,...t},i)=>{const a=Ve.useRef(null),s=Eo(a,i),c=GF(e);return Ve.useEffect(()=>{const u=a.current;if(!u)return;const d=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(c!==e&&p){const v=new Event("input",{bubbles:!0});p.call(u,e),u.dispatchEvent(v)}},[c,e]),tt.jsx(kl.input,{style:{display:"none"},...t,ref:s,defaultValue:e})});CE.displayName=ZF;function JF(n=[],e,t){const i=[...n];return i[t]=e,i.sort((a,s)=>a-s)}function RE(n,e,t){const s=100/(t-e)*(n-e);return mE(s,[0,100])}function QF(n,e){return e>2?`Value ${n+1} of ${e}`:e===2?["Minimum","Maximum"][n]:void 0}function eO(n,e){if(n.length===1)return 0;const t=n.map(a=>Math.abs(a-e)),i=Math.min(...t);return t.indexOf(i)}function tO(n,e,t){const i=n/2,s=Cm([0,50],[0,i]);return(i-s(e)*t)*t}function nO(n){return n.slice(0,-1).map((e,t)=>n[t+1]-e)}function rO(n,e){if(e>0){const t=nO(n);return Math.min(...t)>=e}return!0}function Cm(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(n[1]-n[0]);return e[0]+i*(t-n[0])}}function iO(n){return(String(n).split(".")[1]||"").length}function oO(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}var aO=xE,sO=AE,lO=TE,uO=bE;const cO="_Root_mtzzd_1",fO="_Track_mtzzd_12",dO="_Range_mtzzd_21",hO="_Thumb_mtzzd_28",bc={Root:cO,Track:fO,Range:dO,Thumb:hO},pO=n=>tt.jsxs(aO,{onValueChange:n.onChange,className:bc.Root,orientation:"vertical",defaultValue:[n.value],max:100,step:1,children:[tt.jsx(sO,{className:bc.Track,children:tt.jsx(lO,{className:bc.Range})}),tt.jsx(uO,{className:bc.Thumb,"aria-label":"Volume"})]}),mO=(n,e)=>n===e,vO=({data:n})=>{const{state:e,dispatch:t}=QR({startLayer:eh(0),endLayer:eh(50)});return DR(()=>(console.log("useEffectEq",n.gcode),t.runLoadGcodeLines({url:n.gcode}),()=>{console.log("cleanup")}),mO,n.gcode),tt.jsx(xP,{viewPictures:tt.jsx(EP,{pictures:n.pictures}),viewGcode:tt.jsx(CF,{gcode:cS(e.gcodeLines,{NotAsked:()=>[],Loading:()=>[],Loaded:i=>i,Error:i=>[]}),endLayer:yl(e.endLayer)}),item:n,viewSlider:tt.jsx(pO,{value:yl(e.endLayer),onChange:i=>{t.emitSetEndLayer(eh(i))}})})},gO=()=>{const{state:n,dispatch:e}=uP();return Ve.useEffect(()=>{console.log("render",n)}),Ve.useEffect(()=>{const t=iP();e.runFetchIndex({url:t.url})},[]),cS(n.index,{NotAsked:()=>tt.jsx(Ku,{}),Loading:()=>tt.jsx(Ku,{viewInfo:tt.jsx(tt.Fragment,{children:"Loading"})}),Loaded:t=>tt.jsx(Ku,{children:tt.jsx(vP,{items:t.map(i=>tt.jsx(vO,{data:i}))})}),Error:t=>tt.jsx(Ku,{viewErrors:tt.jsx(tt.Fragment,{children:"Error: "+t})})})};_M.createRoot(document.getElementById("root")).render(tt.jsx(gO,{}));
