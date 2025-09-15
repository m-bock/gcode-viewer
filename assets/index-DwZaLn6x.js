(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function ww(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bd={exports:{}},Zs={},kd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Mw(){if(Og)return _t;Og=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(C,z,W){this.props=C,this.context=z,this.refs=w,this.updater=W||S}x.prototype.isReactComponent={},x.prototype.setState=function(C,z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,z,"setState")},x.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function y(){}y.prototype=x.prototype;function R(C,z,W){this.props=C,this.context=z,this.refs=w,this.updater=W||S}var M=R.prototype=new y;M.constructor=R,E(M,x.prototype),M.isPureReactComponent=!0;var D=Array.isArray,U=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function ce(C,z,W){var Y,Q={},Z=null,_e=null;if(z!=null)for(Y in z.ref!==void 0&&(_e=z.ref),z.key!==void 0&&(Z=""+z.key),z)U.call(z,Y)&&!F.hasOwnProperty(Y)&&(Q[Y]=z[Y]);var ve=arguments.length-2;if(ve===1)Q.children=W;else if(1<ve){for(var be=Array(ve),Fe=0;Fe<ve;Fe++)be[Fe]=arguments[Fe+2];Q.children=be}if(C&&C.defaultProps)for(Y in ve=C.defaultProps,ve)Q[Y]===void 0&&(Q[Y]=ve[Y]);return{$$typeof:n,type:C,key:Z,ref:_e,props:Q,_owner:O.current}}function b(C,z){return{$$typeof:n,type:C.type,key:z,ref:C.ref,props:C.props,_owner:C._owner}}function N(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function he(C){var z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(W){return z[W]})}var re=/\/+/g;function pe(C,z){return typeof C=="object"&&C!==null&&C.key!=null?he(""+C.key):z.toString(36)}function H(C,z,W,Y,Q){var Z=typeof C;(Z==="undefined"||Z==="boolean")&&(C=null);var _e=!1;if(C===null)_e=!0;else switch(Z){case"string":case"number":_e=!0;break;case"object":switch(C.$$typeof){case n:case e:_e=!0}}if(_e)return _e=C,Q=Q(_e),C=Y===""?"."+pe(_e,0):Y,D(Q)?(W="",C!=null&&(W=C.replace(re,"$&/")+"/"),H(Q,z,W,"",function(Fe){return Fe})):Q!=null&&(N(Q)&&(Q=b(Q,W+(!Q.key||_e&&_e.key===Q.key?"":(""+Q.key).replace(re,"$&/")+"/")+C)),z.push(Q)),1;if(_e=0,Y=Y===""?".":Y+":",D(C))for(var ve=0;ve<C.length;ve++){Z=C[ve];var be=Y+pe(Z,ve);_e+=H(Z,z,W,be,Q)}else if(be=g(C),typeof be=="function")for(C=be.call(C),ve=0;!(Z=C.next()).done;)Z=Z.value,be=Y+pe(Z,ve++),_e+=H(Z,z,W,be,Q);else if(Z==="object")throw z=String(C),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return _e}function ee(C,z,W){if(C==null)return C;var Y=[],Q=0;return H(C,Y,"","",function(Z){return z.call(W,Z,Q++)}),Y}function fe(C){if(C._status===-1){var z=C._result;z=z(),z.then(function(W){(C._status===0||C._status===-1)&&(C._status=1,C._result=W)},function(W){(C._status===0||C._status===-1)&&(C._status=2,C._result=W)}),C._status===-1&&(C._status=0,C._result=z)}if(C._status===1)return C._result.default;throw C._result}var ie={current:null},q={transition:null},ne={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:q,ReactCurrentOwner:O};function $(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ee,forEach:function(C,z,W){ee(C,function(){z.apply(this,arguments)},W)},count:function(C){var z=0;return ee(C,function(){z++}),z},toArray:function(C){return ee(C,function(z){return z})||[]},only:function(C){if(!N(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},_t.Component=x,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=R,_t.StrictMode=i,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,_t.act=$,_t.cloneElement=function(C,z,W){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var Y=E({},C.props),Q=C.key,Z=C.ref,_e=C._owner;if(z!=null){if(z.ref!==void 0&&(Z=z.ref,_e=O.current),z.key!==void 0&&(Q=""+z.key),C.type&&C.type.defaultProps)var ve=C.type.defaultProps;for(be in z)U.call(z,be)&&!F.hasOwnProperty(be)&&(Y[be]=z[be]===void 0&&ve!==void 0?ve[be]:z[be])}var be=arguments.length-2;if(be===1)Y.children=W;else if(1<be){ve=Array(be);for(var Fe=0;Fe<be;Fe++)ve[Fe]=arguments[Fe+2];Y.children=ve}return{$$typeof:n,type:C.type,key:Q,ref:Z,props:Y,_owner:_e}},_t.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:l,_context:C},C.Consumer=C},_t.createElement=ce,_t.createFactory=function(C){var z=ce.bind(null,C);return z.type=C,z},_t.createRef=function(){return{current:null}},_t.forwardRef=function(C){return{$$typeof:u,render:C}},_t.isValidElement=N,_t.lazy=function(C){return{$$typeof:m,_payload:{_status:-1,_result:C},_init:fe}},_t.memo=function(C,z){return{$$typeof:p,type:C,compare:z===void 0?null:z}},_t.startTransition=function(C){var z=q.transition;q.transition={};try{C()}finally{q.transition=z}},_t.unstable_act=$,_t.useCallback=function(C,z){return ie.current.useCallback(C,z)},_t.useContext=function(C){return ie.current.useContext(C)},_t.useDebugValue=function(){},_t.useDeferredValue=function(C){return ie.current.useDeferredValue(C)},_t.useEffect=function(C,z){return ie.current.useEffect(C,z)},_t.useId=function(){return ie.current.useId()},_t.useImperativeHandle=function(C,z,W){return ie.current.useImperativeHandle(C,z,W)},_t.useInsertionEffect=function(C,z){return ie.current.useInsertionEffect(C,z)},_t.useLayoutEffect=function(C,z){return ie.current.useLayoutEffect(C,z)},_t.useMemo=function(C,z){return ie.current.useMemo(C,z)},_t.useReducer=function(C,z,W){return ie.current.useReducer(C,z,W)},_t.useRef=function(C){return ie.current.useRef(C)},_t.useState=function(C){return ie.current.useState(C)},_t.useSyncExternalStore=function(C,z,W){return ie.current.useSyncExternalStore(C,z,W)},_t.useTransition=function(){return ie.current.useTransition()},_t.version="18.3.1",_t}var zg;function yp(){return zg||(zg=1,kd.exports=Mw()),kd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Aw(){if(Bg)return Zs;Bg=1;var n=yp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(u,d,p){var m,v={},g=null,S=null;p!==void 0&&(g=""+p),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)i.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:u,key:g,ref:S,props:v,_owner:a.current}}return Zs.Fragment=t,Zs.jsx=f,Zs.jsxs=f,Zs}var kg;function Tw(){return kg||(kg=1,Bd.exports=Aw()),Bd.exports}var Kt=Tw(),ku={},Hd={exports:{}},er={},Vd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function bw(){return Hg||(Hg=1,(function(n){function e(q,ne){var $=q.length;q.push(ne);e:for(;0<$;){var C=$-1>>>1,z=q[C];if(0<a(z,ne))q[C]=ne,q[$]=z,$=C;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var ne=q[0],$=q.pop();if($!==ne){q[0]=$;e:for(var C=0,z=q.length,W=z>>>1;C<W;){var Y=2*(C+1)-1,Q=q[Y],Z=Y+1,_e=q[Z];if(0>a(Q,$))Z<z&&0>a(_e,Q)?(q[C]=_e,q[Z]=$,C=Z):(q[C]=Q,q[Y]=$,C=Y);else if(Z<z&&0>a(_e,$))q[C]=_e,q[Z]=$,C=Z;else break e}}return ne}function a(q,ne){var $=q.sortIndex-ne.sortIndex;return $!==0?$:q.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var f=Date,u=f.now();n.unstable_now=function(){return f.now()-u}}var d=[],p=[],m=1,v=null,g=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(q){for(var ne=t(p);ne!==null;){if(ne.callback===null)i(p);else if(ne.startTime<=q)i(p),ne.sortIndex=ne.expirationTime,e(d,ne);else break;ne=t(p)}}function D(q){if(w=!1,M(q),!E)if(t(d)!==null)E=!0,fe(U);else{var ne=t(p);ne!==null&&ie(D,ne.startTime-q)}}function U(q,ne){E=!1,w&&(w=!1,y(ce),ce=-1),S=!0;var $=g;try{for(M(ne),v=t(d);v!==null&&(!(v.expirationTime>ne)||q&&!he());){var C=v.callback;if(typeof C=="function"){v.callback=null,g=v.priorityLevel;var z=C(v.expirationTime<=ne);ne=n.unstable_now(),typeof z=="function"?v.callback=z:v===t(d)&&i(d),M(ne)}else i(d);v=t(d)}if(v!==null)var W=!0;else{var Y=t(p);Y!==null&&ie(D,Y.startTime-ne),W=!1}return W}finally{v=null,g=$,S=!1}}var O=!1,F=null,ce=-1,b=5,N=-1;function he(){return!(n.unstable_now()-N<b)}function re(){if(F!==null){var q=n.unstable_now();N=q;var ne=!0;try{ne=F(!0,q)}finally{ne?pe():(O=!1,F=null)}}else O=!1}var pe;if(typeof R=="function")pe=function(){R(re)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ee=H.port2;H.port1.onmessage=re,pe=function(){ee.postMessage(null)}}else pe=function(){x(re,0)};function fe(q){F=q,O||(O=!0,pe())}function ie(q,ne){ce=x(function(){q(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,fe(U))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(q){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var $=g;g=ne;try{return q()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,ne){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var $=g;g=q;try{return ne()}finally{g=$}},n.unstable_scheduleCallback=function(q,ne,$){var C=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?C+$:C):$=C,q){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=$+z,q={id:m++,callback:ne,priorityLevel:q,startTime:$,expirationTime:z,sortIndex:-1},$>C?(q.sortIndex=$,e(p,q),t(d)===null&&q===t(p)&&(w?(y(ce),ce=-1):w=!0,ie(D,$-C))):(q.sortIndex=z,e(d,q),E||S||(E=!0,fe(U))),q},n.unstable_shouldYield=he,n.unstable_wrapCallback=function(q){var ne=g;return function(){var $=g;g=ne;try{return q.apply(this,arguments)}finally{g=$}}}})(Gd)),Gd}var Vg;function Cw(){return Vg||(Vg=1,Vd.exports=bw()),Vd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Rw(){if(Gg)return er;Gg=1;var n=yp(),e=Cw();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,s=1;s<arguments.length;s++)o+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function l(r,o){f(r,o),f(r+"Capture",o)}function f(r,o){for(a[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(r){return d.call(v,r)?!0:d.call(m,r)?!1:p.test(r)?v[r]=!0:(m[r]=!0,!1)}function S(r,o,s,c){if(s!==null&&s.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,o,s,c){if(o===null||typeof o>"u"||S(r,o,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function w(r,o,s,c,h,_,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=s,this.propertyName=r,this.type=o,this.sanitizeURL=_,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){x[r]=new w(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];x[o]=new w(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){x[r]=new w(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){x[r]=new w(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){x[r]=new w(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){x[r]=new w(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){x[r]=new w(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){x[r]=new w(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){x[r]=new w(r,5,!1,r.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(y,R);x[o]=new w(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(y,R);x[o]=new w(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(y,R);x[o]=new w(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){x[r]=new w(r,1,!1,r.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){x[r]=new w(r,1,!1,r.toLowerCase(),null,!0,!0)});function M(r,o,s,c){var h=x.hasOwnProperty(o)?x[o]:null;(h!==null?h.type!==0:c||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,s,h,c)&&(s=null),c||h===null?g(o)&&(s===null?r.removeAttribute(o):r.setAttribute(o,""+s)):h.mustUseProperty?r[h.propertyName]=s===null?h.type===3?!1:"":s:(o=h.attributeName,c=h.attributeNamespace,s===null?r.removeAttribute(o):(h=h.type,s=h===3||h===4&&s===!0?"":""+s,c?r.setAttributeNS(c,o,s):r.setAttribute(o,s))))}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),he=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),q=Symbol.iterator;function ne(r){return r===null||typeof r!="object"?null:(r=q&&r[q]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,C;function z(r){if(C===void 0)try{throw Error()}catch(s){var o=s.stack.trim().match(/\n( *(at )?)/);C=o&&o[1]||""}return`
`+C+r}var W=!1;function Y(r,o){if(!r||W)return"";W=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(oe){var c=oe}Reflect.construct(r,[],o)}else{try{o.call()}catch(oe){c=oe}r.call(o.prototype)}else{try{throw Error()}catch(oe){c=oe}r()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),_=c.stack.split(`
`),A=h.length-1,I=_.length-1;1<=A&&0<=I&&h[A]!==_[I];)I--;for(;1<=A&&0<=I;A--,I--)if(h[A]!==_[I]){if(A!==1||I!==1)do if(A--,I--,0>I||h[A]!==_[I]){var B=`
`+h[A].replace(" at new "," at ");return r.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",r.displayName)),B}while(1<=A&&0<=I);break}}}finally{W=!1,Error.prepareStackTrace=s}return(r=r?r.displayName||r.name:"")?z(r):""}function Q(r){switch(r.tag){case 5:return z(r.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return r=Y(r.type,!1),r;case 11:return r=Y(r.type.render,!1),r;case 1:return r=Y(r.type,!0),r;default:return""}}function Z(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case O:return"Portal";case b:return"Profiler";case ce:return"StrictMode";case pe:return"Suspense";case H:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case he:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case re:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ee:return o=r.displayName||null,o!==null?o:Z(r.type)||"Memo";case fe:o=r._payload,r=r._init;try{return Z(r(o))}catch{}}return null}function _e(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(o);case 8:return o===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Fe(r){var o=be(r)?"checked":"value",s=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),c=""+r[o];if(!r.hasOwnProperty(o)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,_=s.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return h.call(this)},set:function(A){c=""+A,_.call(this,A)}}),Object.defineProperty(r,o,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Oe(r){r._valueTracker||(r._valueTracker=Fe(r))}function X(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var s=o.getValue(),c="";return r&&(c=be(r)?r.checked?"true":"false":r.value),r=c,r!==s?(o.setValue(r),!0):!1}function Ct(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ke(r,o){var s=o.checked;return $({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??r._wrapperState.initialChecked})}function ae(r,o){var s=o.defaultValue==null?"":o.defaultValue,c=o.checked!=null?o.checked:o.defaultChecked;s=ve(o.value!=null?o.value:s),r._wrapperState={initialChecked:c,initialValue:s,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function se(r,o){o=o.checked,o!=null&&M(r,"checked",o,!1)}function xe(r,o){se(r,o);var s=ve(o.value),c=o.type;if(s!=null)c==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+s):r.value!==""+s&&(r.value=""+s);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Me(r,o.type,s):o.hasOwnProperty("defaultValue")&&Me(r,o.type,ve(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function ge(r,o,s){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var c=o.type;if(!(c!=="submit"&&c!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,s||o===r.value||(r.value=o),r.defaultValue=o}s=r.name,s!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,s!==""&&(r.name=s)}function Me(r,o,s){(o!=="number"||Ct(r.ownerDocument)!==r)&&(s==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+s&&(r.defaultValue=""+s))}var we=Array.isArray;function Ie(r,o,s,c){if(r=r.options,o){o={};for(var h=0;h<s.length;h++)o["$"+s[h]]=!0;for(s=0;s<r.length;s++)h=o.hasOwnProperty("$"+r[s].value),r[s].selected!==h&&(r[s].selected=h),h&&c&&(r[s].defaultSelected=!0)}else{for(s=""+ve(s),o=null,h=0;h<r.length;h++){if(r[h].value===s){r[h].selected=!0,c&&(r[h].defaultSelected=!0);return}o!==null||r[h].disabled||(o=r[h])}o!==null&&(o.selected=!0)}}function Ke(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function P(r,o){var s=o.value;if(s==null){if(s=o.children,o=o.defaultValue,s!=null){if(o!=null)throw Error(t(92));if(we(s)){if(1<s.length)throw Error(t(93));s=s[0]}o=s}o==null&&(o=""),s=o}r._wrapperState={initialValue:ve(s)}}function T(r,o){var s=ve(o.value),c=ve(o.defaultValue);s!=null&&(s=""+s,s!==r.value&&(r.value=s),o.defaultValue==null&&r.defaultValue!==s&&(r.defaultValue=s)),c!=null&&(r.defaultValue=""+c)}function j(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function Ae(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?Ae(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ce,Ye=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,s,c,h){MSApp.execUnsafeLocalFunction(function(){return r(o,s,c,h)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function De(r,o){if(o){var s=r.firstChild;if(s&&s===r.lastChild&&s.nodeType===3){s.nodeValue=o;return}}r.textContent=o}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(r){at.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),Be[o]=Be[r]})});function St(r,o,s){return o==null||typeof o=="boolean"||o===""?"":s||typeof o!="number"||o===0||Be.hasOwnProperty(r)&&Be[r]?(""+o).trim():o+"px"}function Pe(r,o){r=r.style;for(var s in o)if(o.hasOwnProperty(s)){var c=s.indexOf("--")===0,h=St(s,o[s],c);s==="float"&&(s="cssFloat"),c?r.setProperty(s,h):r[s]=h}}var Rt=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(r,o){if(o){if(Rt[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ot(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qe=null;function We(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var mt=null,V=null,ze=null;function Re(r){if(r=Fs(r)){if(typeof mt!="function")throw Error(t(280));var o=r.stateNode;o&&(o=tu(o),mt(r.stateNode,r.type,o))}}function me(r){V?ze?ze.push(r):ze=[r]:V=r}function Ue(){if(V){var r=V,o=ze;if(ze=V=null,Re(r),o)for(r=0;r<o.length;r++)Re(o[r])}}function rt(r,o){return r(o)}function xt(){}var Zt=!1;function mn(r,o,s){if(Zt)return r(o,s);Zt=!0;try{return rt(r,o,s)}finally{Zt=!1,(V!==null||ze!==null)&&(xt(),Ue())}}function At(r,o){var s=r.stateNode;if(s===null)return null;var c=tu(s);if(c===null)return null;s=c[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(s&&typeof s!="function")throw Error(t(231,o,typeof s));return s}var un=!1;if(u)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){un=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{un=!1}function Ul(r,o,s,c,h,_,A,I,B){var oe=Array.prototype.slice.call(arguments,3);try{o.apply(s,oe)}catch(Ee){this.onError(Ee)}}var Mo=!1,ci=null,Ao=!1,Di=null,Nl={onError:function(r){Mo=!0,ci=r}};function Fl(r,o,s,c,h,_,A,I,B){Mo=!1,ci=null,Ul.apply(Nl,arguments)}function sf(r,o,s,c,h,_,A,I,B){if(Fl.apply(this,arguments),Mo){if(Mo){var oe=ci;Mo=!1,ci=null}else throw Error(t(198));Ao||(Ao=!0,Di=oe)}}function fi(r){var o=r,s=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(s=o.return),r=o.return;while(r)}return o.tag===3?s:null}function Ol(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function L(r){if(fi(r)!==r)throw Error(t(188))}function J(r){var o=r.alternate;if(!o){if(o=fi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var s=r,c=o;;){var h=s.return;if(h===null)break;var _=h.alternate;if(_===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===s)return L(h),r;if(_===c)return L(h),o;_=_.sibling}throw Error(t(188))}if(s.return!==c.return)s=h,c=_;else{for(var A=!1,I=h.child;I;){if(I===s){A=!0,s=h,c=_;break}if(I===c){A=!0,c=h,s=_;break}I=I.sibling}if(!A){for(I=_.child;I;){if(I===s){A=!0,s=_,c=h;break}if(I===c){A=!0,c=_,s=h;break}I=I.sibling}if(!A)throw Error(t(189))}}if(s.alternate!==c)throw Error(t(190))}if(s.tag!==3)throw Error(t(188));return s.stateNode.current===s?r:o}function ue(r){return r=J(r),r!==null?de(r):null}function de(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=de(r);if(o!==null)return o;r=r.sibling}return null}var le=e.unstable_scheduleCallback,Ve=e.unstable_cancelCallback,Je=e.unstable_shouldYield,it=e.unstable_requestPaint,$e=e.unstable_now,pt=e.unstable_getCurrentPriorityLevel,ct=e.unstable_ImmediatePriority,dt=e.unstable_UserBlockingPriority,zt=e.unstable_NormalPriority,kn=e.unstable_LowPriority,tn=e.unstable_IdlePriority,jn=null,Et=null;function vt(r){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(jn,r,void 0,(r.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:zl,$t=Math.log,di=Math.LN2;function zl(r){return r>>>=0,r===0?32:31-($t(r)/di|0)|0}var Yr=64,Ii=4194304;function Jt(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function pr(r,o){var s=r.pendingLanes;if(s===0)return 0;var c=0,h=r.suspendedLanes,_=r.pingedLanes,A=s&268435455;if(A!==0){var I=A&~h;I!==0?c=Jt(I):(_&=A,_!==0&&(c=Jt(_)))}else A=s&~h,A!==0?c=Jt(A):_!==0&&(c=Jt(_));if(c===0)return 0;if(o!==0&&o!==c&&(o&h)===0&&(h=c&-c,_=o&-o,h>=_||h===16&&(_&4194240)!==0))return o;if((c&4)!==0&&(c|=s&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=c;0<o;)s=31-Hn(o),h=1<<s,c|=r[s],o&=~h;return c}function _s(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(r,o){for(var s=r.suspendedLanes,c=r.pingedLanes,h=r.expirationTimes,_=r.pendingLanes;0<_;){var A=31-Hn(_),I=1<<A,B=h[A];B===-1?((I&s)===0||(I&c)!==0)&&(h[A]=_s(I,o)):B<=o&&(r.expiredLanes|=I),_&=~I}}function To(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Bl(){var r=Yr;return Yr<<=1,(Yr&4194240)===0&&(Yr=64),r}function la(r){for(var o=[],s=0;31>s;s++)o.push(r);return o}function ys(r,o,s){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Hn(o),r[o]=s}function WS(r,o){var s=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<s;){var h=31-Hn(s),_=1<<h;o[h]=0,c[h]=-1,r[h]=-1,s&=~_}}function lf(r,o){var s=r.entangledLanes|=o;for(r=r.entanglements;s;){var c=31-Hn(s),h=1<<c;h&o|r[c]&o&&(r[c]|=o),s&=~h}}var Pt=0;function mm(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var vm,uf,gm,_m,ym,cf=!1,kl=[],Ui=null,Ni=null,Fi=null,xs=new Map,Ss=new Map,Oi=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(r,o){switch(r){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":xs.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(o.pointerId)}}function Es(r,o,s,c,h,_){return r===null||r.nativeEvent!==_?(r={blockedOn:o,domEventName:s,eventSystemFlags:c,nativeEvent:_,targetContainers:[h]},o!==null&&(o=Fs(o),o!==null&&uf(o)),r):(r.eventSystemFlags|=c,o=r.targetContainers,h!==null&&o.indexOf(h)===-1&&o.push(h),r)}function XS(r,o,s,c,h){switch(o){case"focusin":return Ui=Es(Ui,r,o,s,c,h),!0;case"dragenter":return Ni=Es(Ni,r,o,s,c,h),!0;case"mouseover":return Fi=Es(Fi,r,o,s,c,h),!0;case"pointerover":var _=h.pointerId;return xs.set(_,Es(xs.get(_)||null,r,o,s,c,h)),!0;case"gotpointercapture":return _=h.pointerId,Ss.set(_,Es(Ss.get(_)||null,r,o,s,c,h)),!0}return!1}function Sm(r){var o=bo(r.target);if(o!==null){var s=fi(o);if(s!==null){if(o=s.tag,o===13){if(o=Ol(s),o!==null){r.blockedOn=o,ym(r.priority,function(){gm(s)});return}}else if(o===3&&s.stateNode.current.memoizedState.isDehydrated){r.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Hl(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var s=df(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(s===null){s=r.nativeEvent;var c=new s.constructor(s.type,s);Qe=c,s.target.dispatchEvent(c),Qe=null}else return o=Fs(s),o!==null&&uf(o),r.blockedOn=s,!1;o.shift()}return!0}function Em(r,o,s){Hl(r)&&s.delete(o)}function jS(){cf=!1,Ui!==null&&Hl(Ui)&&(Ui=null),Ni!==null&&Hl(Ni)&&(Ni=null),Fi!==null&&Hl(Fi)&&(Fi=null),xs.forEach(Em),Ss.forEach(Em)}function ws(r,o){r.blockedOn===o&&(r.blockedOn=null,cf||(cf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jS)))}function Ms(r){function o(h){return ws(h,r)}if(0<kl.length){ws(kl[0],r);for(var s=1;s<kl.length;s++){var c=kl[s];c.blockedOn===r&&(c.blockedOn=null)}}for(Ui!==null&&ws(Ui,r),Ni!==null&&ws(Ni,r),Fi!==null&&ws(Fi,r),xs.forEach(o),Ss.forEach(o),s=0;s<Oi.length;s++)c=Oi[s],c.blockedOn===r&&(c.blockedOn=null);for(;0<Oi.length&&(s=Oi[0],s.blockedOn===null);)Sm(s),s.blockedOn===null&&Oi.shift()}var ua=D.ReactCurrentBatchConfig,Vl=!0;function YS(r,o,s,c){var h=Pt,_=ua.transition;ua.transition=null;try{Pt=1,ff(r,o,s,c)}finally{Pt=h,ua.transition=_}}function qS(r,o,s,c){var h=Pt,_=ua.transition;ua.transition=null;try{Pt=4,ff(r,o,s,c)}finally{Pt=h,ua.transition=_}}function ff(r,o,s,c){if(Vl){var h=df(r,o,s,c);if(h===null)Rf(r,o,c,Gl,s),xm(r,c);else if(XS(h,r,o,s,c))c.stopPropagation();else if(xm(r,c),o&4&&-1<$S.indexOf(r)){for(;h!==null;){var _=Fs(h);if(_!==null&&vm(_),_=df(r,o,s,c),_===null&&Rf(r,o,c,Gl,s),_===h)break;h=_}h!==null&&c.stopPropagation()}else Rf(r,o,c,null,s)}}var Gl=null;function df(r,o,s,c){if(Gl=null,r=We(c),r=bo(r),r!==null)if(o=fi(r),o===null)r=null;else if(s=o.tag,s===13){if(r=Ol(o),r!==null)return r;r=null}else if(s===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Gl=r,null}function wm(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pt()){case ct:return 1;case dt:return 4;case zt:case kn:return 16;case tn:return 536870912;default:return 16}default:return 16}}var zi=null,hf=null,Wl=null;function Mm(){if(Wl)return Wl;var r,o=hf,s=o.length,c,h="value"in zi?zi.value:zi.textContent,_=h.length;for(r=0;r<s&&o[r]===h[r];r++);var A=s-r;for(c=1;c<=A&&o[s-c]===h[_-c];c++);return Wl=h.slice(r,1<c?1-c:void 0)}function $l(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Xl(){return!0}function Am(){return!1}function ar(r){function o(s,c,h,_,A){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var I in r)r.hasOwnProperty(I)&&(s=r[I],this[I]=s?s(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Xl:Am,this.isPropagationStopped=Am,this}return $(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),o}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=ar(ca),As=$({},ca,{view:0,detail:0}),KS=ar(As),mf,vf,Ts,jl=$({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ts&&(Ts&&r.type==="mousemove"?(mf=r.screenX-Ts.screenX,vf=r.screenY-Ts.screenY):vf=mf=0,Ts=r),mf)},movementY:function(r){return"movementY"in r?r.movementY:vf}}),Tm=ar(jl),ZS=$({},jl,{dataTransfer:0}),JS=ar(ZS),QS=$({},As,{relatedTarget:0}),gf=ar(QS),eE=$({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),tE=ar(eE),nE=$({},ca,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),rE=ar(nE),iE=$({},ca,{data:0}),bm=ar(iE),oE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lE(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=sE[r])?!!o[r]:!1}function _f(){return lE}var uE=$({},As,{key:function(r){if(r.key){var o=oE[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=$l(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?aE[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(r){return r.type==="keypress"?$l(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?$l(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),cE=ar(uE),fE=$({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=ar(fE),dE=$({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),hE=ar(dE),pE=$({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),mE=ar(pE),vE=$({},jl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),gE=ar(vE),_E=[9,13,27,32],yf=u&&"CompositionEvent"in window,bs=null;u&&"documentMode"in document&&(bs=document.documentMode);var yE=u&&"TextEvent"in window&&!bs,Rm=u&&(!yf||bs&&8<bs&&11>=bs),Lm=" ",Pm=!1;function Dm(r,o){switch(r){case"keyup":return _E.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var fa=!1;function xE(r,o){switch(r){case"compositionend":return Im(o);case"keypress":return o.which!==32?null:(Pm=!0,Lm);case"textInput":return r=o.data,r===Lm&&Pm?null:r;default:return null}}function SE(r,o){if(fa)return r==="compositionend"||!yf&&Dm(r,o)?(r=Mm(),Wl=hf=zi=null,fa=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Rm&&o.locale!=="ko"?null:o.data;default:return null}}var EE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!EE[r.type]:o==="textarea"}function Nm(r,o,s,c){me(c),o=Jl(o,"onChange"),0<o.length&&(s=new pf("onChange","change",null,s,c),r.push({event:s,listeners:o}))}var Cs=null,Rs=null;function wE(r){Qm(r,0)}function Yl(r){var o=va(r);if(X(o))return r}function ME(r,o){if(r==="change")return o}var Fm=!1;if(u){var xf;if(u){var Sf="oninput"in document;if(!Sf){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),Sf=typeof Om.oninput=="function"}xf=Sf}else xf=!1;Fm=xf&&(!document.documentMode||9<document.documentMode)}function zm(){Cs&&(Cs.detachEvent("onpropertychange",Bm),Rs=Cs=null)}function Bm(r){if(r.propertyName==="value"&&Yl(Rs)){var o=[];Nm(o,Rs,r,We(r)),mn(wE,o)}}function AE(r,o,s){r==="focusin"?(zm(),Cs=o,Rs=s,Cs.attachEvent("onpropertychange",Bm)):r==="focusout"&&zm()}function TE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Yl(Rs)}function bE(r,o){if(r==="click")return Yl(o)}function CE(r,o){if(r==="input"||r==="change")return Yl(o)}function RE(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Ir=typeof Object.is=="function"?Object.is:RE;function Ls(r,o){if(Ir(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!d.call(o,h)||!Ir(r[h],o[h]))return!1}return!0}function km(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Hm(r,o){var s=km(r);r=0;for(var c;s;){if(s.nodeType===3){if(c=r+s.textContent.length,r<=o&&c>=o)return{node:s,offset:o-r};r=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=km(s)}}function Vm(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?Vm(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function Gm(){for(var r=window,o=Ct();o instanceof r.HTMLIFrameElement;){try{var s=typeof o.contentWindow.location.href=="string"}catch{s=!1}if(s)r=o.contentWindow;else break;o=Ct(r.document)}return o}function Ef(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function LE(r){var o=Gm(),s=r.focusedElem,c=r.selectionRange;if(o!==s&&s&&s.ownerDocument&&Vm(s.ownerDocument.documentElement,s)){if(c!==null&&Ef(s)){if(o=c.start,r=c.end,r===void 0&&(r=o),"selectionStart"in s)s.selectionStart=o,s.selectionEnd=Math.min(r,s.value.length);else if(r=(o=s.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var h=s.textContent.length,_=Math.min(c.start,h);c=c.end===void 0?_:Math.min(c.end,h),!r.extend&&_>c&&(h=c,c=_,_=h),h=Hm(s,_);var A=Hm(s,c);h&&A&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(h.node,h.offset),r.removeAllRanges(),_>c?(r.addRange(o),r.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),r.addRange(o)))}}for(o=[],r=s;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<o.length;s++)r=o[s],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var PE=u&&"documentMode"in document&&11>=document.documentMode,da=null,wf=null,Ps=null,Mf=!1;function Wm(r,o,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Mf||da==null||da!==Ct(c)||(c=da,"selectionStart"in c&&Ef(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ps&&Ls(Ps,c)||(Ps=c,c=Jl(wf,"onSelect"),0<c.length&&(o=new pf("onSelect","select",null,o,s),r.push({event:o,listeners:c}),o.target=da)))}function ql(r,o){var s={};return s[r.toLowerCase()]=o.toLowerCase(),s["Webkit"+r]="webkit"+o,s["Moz"+r]="moz"+o,s}var ha={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},Af={},$m={};u&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function Kl(r){if(Af[r])return Af[r];if(!ha[r])return r;var o=ha[r],s;for(s in o)if(o.hasOwnProperty(s)&&s in $m)return Af[r]=o[s];return r}var Xm=Kl("animationend"),jm=Kl("animationiteration"),Ym=Kl("animationstart"),qm=Kl("transitionend"),Km=new Map,Zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(r,o){Km.set(r,o),l(o,[r])}for(var Tf=0;Tf<Zm.length;Tf++){var bf=Zm[Tf],DE=bf.toLowerCase(),IE=bf[0].toUpperCase()+bf.slice(1);Bi(DE,"on"+IE)}Bi(Xm,"onAnimationEnd"),Bi(jm,"onAnimationIteration"),Bi(Ym,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(qm,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Jm(r,o,s){var c=r.type||"unknown-event";r.currentTarget=s,sf(c,o,void 0,r),r.currentTarget=null}function Qm(r,o){o=(o&4)!==0;for(var s=0;s<r.length;s++){var c=r[s],h=c.event;c=c.listeners;e:{var _=void 0;if(o)for(var A=c.length-1;0<=A;A--){var I=c[A],B=I.instance,oe=I.currentTarget;if(I=I.listener,B!==_&&h.isPropagationStopped())break e;Jm(h,I,oe),_=B}else for(A=0;A<c.length;A++){if(I=c[A],B=I.instance,oe=I.currentTarget,I=I.listener,B!==_&&h.isPropagationStopped())break e;Jm(h,I,oe),_=B}}}if(Ao)throw r=Di,Ao=!1,Di=null,r}function Ht(r,o){var s=o[Nf];s===void 0&&(s=o[Nf]=new Set);var c=r+"__bubble";s.has(c)||(ev(o,r,2,!1),s.add(c))}function Cf(r,o,s){var c=0;o&&(c|=4),ev(s,r,c,o)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Is(r){if(!r[Zl]){r[Zl]=!0,i.forEach(function(s){s!=="selectionchange"&&(UE.has(s)||Cf(s,!1,r),Cf(s,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Zl]||(o[Zl]=!0,Cf("selectionchange",!1,o))}}function ev(r,o,s,c){switch(wm(o)){case 1:var h=YS;break;case 4:h=qS;break;default:h=ff}s=h.bind(null,o,s,r),h=void 0,!un||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(h=!0),c?h!==void 0?r.addEventListener(o,s,{capture:!0,passive:h}):r.addEventListener(o,s,!0):h!==void 0?r.addEventListener(o,s,{passive:h}):r.addEventListener(o,s,!1)}function Rf(r,o,s,c,h){var _=c;if((o&1)===0&&(o&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(A===4)for(A=c.return;A!==null;){var B=A.tag;if((B===3||B===4)&&(B=A.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;A=A.return}for(;I!==null;){if(A=bo(I),A===null)return;if(B=A.tag,B===5||B===6){c=_=A;continue e}I=I.parentNode}}c=c.return}mn(function(){var oe=_,Ee=We(s),Te=[];e:{var Se=Km.get(r);if(Se!==void 0){var Ge=pf,je=r;switch(r){case"keypress":if($l(s)===0)break e;case"keydown":case"keyup":Ge=cE;break;case"focusin":je="focus",Ge=gf;break;case"focusout":je="blur",Ge=gf;break;case"beforeblur":case"afterblur":Ge=gf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=hE;break;case Xm:case jm:case Ym:Ge=tE;break;case qm:Ge=mE;break;case"scroll":Ge=KS;break;case"wheel":Ge=gE;break;case"copy":case"cut":case"paste":Ge=rE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Cm}var qe=(o&4)!==0,nn=!qe&&r==="scroll",K=qe?Se!==null?Se+"Capture":null:Se;qe=[];for(var G=oe,te;G!==null;){te=G;var Le=te.stateNode;if(te.tag===5&&Le!==null&&(te=Le,K!==null&&(Le=At(G,K),Le!=null&&qe.push(Us(G,Le,te)))),nn)break;G=G.return}0<qe.length&&(Se=new Ge(Se,je,null,s,Ee),Te.push({event:Se,listeners:qe}))}}if((o&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",Ge=r==="mouseout"||r==="pointerout",Se&&s!==Qe&&(je=s.relatedTarget||s.fromElement)&&(bo(je)||je[hi]))break e;if((Ge||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,Ge?(je=s.relatedTarget||s.toElement,Ge=oe,je=je?bo(je):null,je!==null&&(nn=fi(je),je!==nn||je.tag!==5&&je.tag!==6)&&(je=null)):(Ge=null,je=oe),Ge!==je)){if(qe=Tm,Le="onMouseLeave",K="onMouseEnter",G="mouse",(r==="pointerout"||r==="pointerover")&&(qe=Cm,Le="onPointerLeave",K="onPointerEnter",G="pointer"),nn=Ge==null?Se:va(Ge),te=je==null?Se:va(je),Se=new qe(Le,G+"leave",Ge,s,Ee),Se.target=nn,Se.relatedTarget=te,Le=null,bo(Ee)===oe&&(qe=new qe(K,G+"enter",je,s,Ee),qe.target=te,qe.relatedTarget=nn,Le=qe),nn=Le,Ge&&je)t:{for(qe=Ge,K=je,G=0,te=qe;te;te=pa(te))G++;for(te=0,Le=K;Le;Le=pa(Le))te++;for(;0<G-te;)qe=pa(qe),G--;for(;0<te-G;)K=pa(K),te--;for(;G--;){if(qe===K||K!==null&&qe===K.alternate)break t;qe=pa(qe),K=pa(K)}qe=null}else qe=null;Ge!==null&&tv(Te,Se,Ge,qe,!1),je!==null&&nn!==null&&tv(Te,nn,je,qe,!0)}}e:{if(Se=oe?va(oe):window,Ge=Se.nodeName&&Se.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&Se.type==="file")var Ze=ME;else if(Um(Se))if(Fm)Ze=CE;else{Ze=TE;var tt=AE}else(Ge=Se.nodeName)&&Ge.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Ze=bE);if(Ze&&(Ze=Ze(r,oe))){Nm(Te,Ze,s,Ee);break e}tt&&tt(r,Se,oe),r==="focusout"&&(tt=Se._wrapperState)&&tt.controlled&&Se.type==="number"&&Me(Se,"number",Se.value)}switch(tt=oe?va(oe):window,r){case"focusin":(Um(tt)||tt.contentEditable==="true")&&(da=tt,wf=oe,Ps=null);break;case"focusout":Ps=wf=da=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,Wm(Te,s,Ee);break;case"selectionchange":if(PE)break;case"keydown":case"keyup":Wm(Te,s,Ee)}var nt;if(yf)e:{switch(r){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else fa?Dm(r,s)&&(st="onCompositionEnd"):r==="keydown"&&s.keyCode===229&&(st="onCompositionStart");st&&(Rm&&s.locale!=="ko"&&(fa||st!=="onCompositionStart"?st==="onCompositionEnd"&&fa&&(nt=Mm()):(zi=Ee,hf="value"in zi?zi.value:zi.textContent,fa=!0)),tt=Jl(oe,st),0<tt.length&&(st=new bm(st,r,null,s,Ee),Te.push({event:st,listeners:tt}),nt?st.data=nt:(nt=Im(s),nt!==null&&(st.data=nt)))),(nt=yE?xE(r,s):SE(r,s))&&(oe=Jl(oe,"onBeforeInput"),0<oe.length&&(Ee=new bm("onBeforeInput","beforeinput",null,s,Ee),Te.push({event:Ee,listeners:oe}),Ee.data=nt))}Qm(Te,o)})}function Us(r,o,s){return{instance:r,listener:o,currentTarget:s}}function Jl(r,o){for(var s=o+"Capture",c=[];r!==null;){var h=r,_=h.stateNode;h.tag===5&&_!==null&&(h=_,_=At(r,s),_!=null&&c.unshift(Us(r,_,h)),_=At(r,o),_!=null&&c.push(Us(r,_,h))),r=r.return}return c}function pa(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function tv(r,o,s,c,h){for(var _=o._reactName,A=[];s!==null&&s!==c;){var I=s,B=I.alternate,oe=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&oe!==null&&(I=oe,h?(B=At(s,_),B!=null&&A.unshift(Us(s,B,I))):h||(B=At(s,_),B!=null&&A.push(Us(s,B,I)))),s=s.return}A.length!==0&&r.push({event:o,listeners:A})}var NE=/\r\n?/g,FE=/\u0000|\uFFFD/g;function nv(r){return(typeof r=="string"?r:""+r).replace(NE,`
`).replace(FE,"")}function Ql(r,o,s){if(o=nv(o),nv(r)!==o&&s)throw Error(t(425))}function eu(){}var Lf=null,Pf=null;function Df(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,OE=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,zE=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(r){return rv.resolve(null).then(r).catch(BE)}:If;function BE(r){setTimeout(function(){throw r})}function Uf(r,o){var s=o,c=0;do{var h=s.nextSibling;if(r.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(c===0){r.removeChild(h),Ms(o);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=h}while(s);Ms(o)}function ki(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function iv(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var s=r.data;if(s==="$"||s==="$!"||s==="$?"){if(o===0)return r;o--}else s==="/$"&&o++}r=r.previousSibling}return null}var ma=Math.random().toString(36).slice(2),qr="__reactFiber$"+ma,Ns="__reactProps$"+ma,hi="__reactContainer$"+ma,Nf="__reactEvents$"+ma,kE="__reactListeners$"+ma,HE="__reactHandles$"+ma;function bo(r){var o=r[qr];if(o)return o;for(var s=r.parentNode;s;){if(o=s[hi]||s[qr]){if(s=o.alternate,o.child!==null||s!==null&&s.child!==null)for(r=iv(r);r!==null;){if(s=r[qr])return s;r=iv(r)}return o}r=s,s=r.parentNode}return null}function Fs(r){return r=r[qr]||r[hi],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function va(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function tu(r){return r[Ns]||null}var Ff=[],ga=-1;function Hi(r){return{current:r}}function Vt(r){0>ga||(r.current=Ff[ga],Ff[ga]=null,ga--)}function Bt(r,o){ga++,Ff[ga]=r.current,r.current=o}var Vi={},Ln=Hi(Vi),qn=Hi(!1),Co=Vi;function _a(r,o){var s=r.type.contextTypes;if(!s)return Vi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===o)return c.__reactInternalMemoizedMaskedChildContext;var h={},_;for(_ in s)h[_]=o[_];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=h),h}function Kn(r){return r=r.childContextTypes,r!=null}function nu(){Vt(qn),Vt(Ln)}function ov(r,o,s){if(Ln.current!==Vi)throw Error(t(168));Bt(Ln,o),Bt(qn,s)}function av(r,o,s){var c=r.stateNode;if(o=o.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var h in c)if(!(h in o))throw Error(t(108,_e(r)||"Unknown",h));return $({},s,c)}function ru(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Vi,Co=Ln.current,Bt(Ln,r),Bt(qn,qn.current),!0}function sv(r,o,s){var c=r.stateNode;if(!c)throw Error(t(169));s?(r=av(r,o,Co),c.__reactInternalMemoizedMergedChildContext=r,Vt(qn),Vt(Ln),Bt(Ln,r)):Vt(qn),Bt(qn,s)}var pi=null,iu=!1,Of=!1;function lv(r){pi===null?pi=[r]:pi.push(r)}function VE(r){iu=!0,lv(r)}function Gi(){if(!Of&&pi!==null){Of=!0;var r=0,o=Pt;try{var s=pi;for(Pt=1;r<s.length;r++){var c=s[r];do c=c(!0);while(c!==null)}pi=null,iu=!1}catch(h){throw pi!==null&&(pi=pi.slice(r+1)),le(ct,Gi),h}finally{Pt=o,Of=!1}}return null}var ya=[],xa=0,ou=null,au=0,mr=[],vr=0,Ro=null,mi=1,vi="";function Lo(r,o){ya[xa++]=au,ya[xa++]=ou,ou=r,au=o}function uv(r,o,s){mr[vr++]=mi,mr[vr++]=vi,mr[vr++]=Ro,Ro=r;var c=mi;r=vi;var h=32-Hn(c)-1;c&=~(1<<h),s+=1;var _=32-Hn(o)+h;if(30<_){var A=h-h%5;_=(c&(1<<A)-1).toString(32),c>>=A,h-=A,mi=1<<32-Hn(o)+h|s<<h|c,vi=_+r}else mi=1<<_|s<<h|c,vi=r}function zf(r){r.return!==null&&(Lo(r,1),uv(r,1,0))}function Bf(r){for(;r===ou;)ou=ya[--xa],ya[xa]=null,au=ya[--xa],ya[xa]=null;for(;r===Ro;)Ro=mr[--vr],mr[vr]=null,vi=mr[--vr],mr[vr]=null,mi=mr[--vr],mr[vr]=null}var sr=null,lr=null,Xt=!1,Ur=null;function cv(r,o){var s=xr(5,null,null,0);s.elementType="DELETED",s.stateNode=o,s.return=r,o=r.deletions,o===null?(r.deletions=[s],r.flags|=16):o.push(s)}function fv(r,o){switch(r.tag){case 5:var s=r.type;return o=o.nodeType!==1||s.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,sr=r,lr=ki(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,sr=r,lr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(s=Ro!==null?{id:mi,overflow:vi}:null,r.memoizedState={dehydrated:o,treeContext:s,retryLane:1073741824},s=xr(18,null,null,0),s.stateNode=o,s.return=r,r.child=s,sr=r,lr=null,!0):!1;default:return!1}}function kf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Hf(r){if(Xt){var o=lr;if(o){var s=o;if(!fv(r,o)){if(kf(r))throw Error(t(418));o=ki(s.nextSibling);var c=sr;o&&fv(r,o)?cv(c,s):(r.flags=r.flags&-4097|2,Xt=!1,sr=r)}}else{if(kf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xt=!1,sr=r}}}function dv(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;sr=r}function su(r){if(r!==sr)return!1;if(!Xt)return dv(r),Xt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!Df(r.type,r.memoizedProps)),o&&(o=lr)){if(kf(r))throw hv(),Error(t(418));for(;o;)cv(r,o),o=ki(o.nextSibling)}if(dv(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var s=r.data;if(s==="/$"){if(o===0){lr=ki(r.nextSibling);break e}o--}else s!=="$"&&s!=="$!"&&s!=="$?"||o++}r=r.nextSibling}lr=null}}else lr=sr?ki(r.stateNode.nextSibling):null;return!0}function hv(){for(var r=lr;r;)r=ki(r.nextSibling)}function Sa(){lr=sr=null,Xt=!1}function Vf(r){Ur===null?Ur=[r]:Ur.push(r)}var GE=D.ReactCurrentBatchConfig;function Os(r,o,s){if(r=s.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(t(309));var c=s.stateNode}if(!c)throw Error(t(147,r));var h=c,_=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(A){var I=h.refs;A===null?delete I[_]:I[_]=A},o._stringRef=_,o)}if(typeof r!="string")throw Error(t(284));if(!s._owner)throw Error(t(290,r))}return r}function lu(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function pv(r){var o=r._init;return o(r._payload)}function mv(r){function o(K,G){if(r){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function s(K,G){if(!r)return null;for(;G!==null;)o(K,G),G=G.sibling;return null}function c(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function h(K,G){return K=Zi(K,G),K.index=0,K.sibling=null,K}function _(K,G,te){return K.index=te,r?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function A(K){return r&&K.alternate===null&&(K.flags|=2),K}function I(K,G,te,Le){return G===null||G.tag!==6?(G=Id(te,K.mode,Le),G.return=K,G):(G=h(G,te),G.return=K,G)}function B(K,G,te,Le){var Ze=te.type;return Ze===F?Ee(K,G,te.props.children,Le,te.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===fe&&pv(Ze)===G.type)?(Le=h(G,te.props),Le.ref=Os(K,G,te),Le.return=K,Le):(Le=Du(te.type,te.key,te.props,null,K.mode,Le),Le.ref=Os(K,G,te),Le.return=K,Le)}function oe(K,G,te,Le){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Ud(te,K.mode,Le),G.return=K,G):(G=h(G,te.children||[]),G.return=K,G)}function Ee(K,G,te,Le,Ze){return G===null||G.tag!==7?(G=zo(te,K.mode,Le,Ze),G.return=K,G):(G=h(G,te),G.return=K,G)}function Te(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Id(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return te=Du(G.type,G.key,G.props,null,K.mode,te),te.ref=Os(K,null,G),te.return=K,te;case O:return G=Ud(G,K.mode,te),G.return=K,G;case fe:var Le=G._init;return Te(K,Le(G._payload),te)}if(we(G)||ne(G))return G=zo(G,K.mode,te,null),G.return=K,G;lu(K,G)}return null}function Se(K,G,te,Le){var Ze=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ze!==null?null:I(K,G,""+te,Le);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===Ze?B(K,G,te,Le):null;case O:return te.key===Ze?oe(K,G,te,Le):null;case fe:return Ze=te._init,Se(K,G,Ze(te._payload),Le)}if(we(te)||ne(te))return Ze!==null?null:Ee(K,G,te,Le,null);lu(K,te)}return null}function Ge(K,G,te,Le,Ze){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return K=K.get(te)||null,I(G,K,""+Le,Ze);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case U:return K=K.get(Le.key===null?te:Le.key)||null,B(G,K,Le,Ze);case O:return K=K.get(Le.key===null?te:Le.key)||null,oe(G,K,Le,Ze);case fe:var tt=Le._init;return Ge(K,G,te,tt(Le._payload),Ze)}if(we(Le)||ne(Le))return K=K.get(te)||null,Ee(G,K,Le,Ze,null);lu(G,Le)}return null}function je(K,G,te,Le){for(var Ze=null,tt=null,nt=G,st=G=0,_n=null;nt!==null&&st<te.length;st++){nt.index>st?(_n=nt,nt=null):_n=nt.sibling;var Tt=Se(K,nt,te[st],Le);if(Tt===null){nt===null&&(nt=_n);break}r&&nt&&Tt.alternate===null&&o(K,nt),G=_(Tt,G,st),tt===null?Ze=Tt:tt.sibling=Tt,tt=Tt,nt=_n}if(st===te.length)return s(K,nt),Xt&&Lo(K,st),Ze;if(nt===null){for(;st<te.length;st++)nt=Te(K,te[st],Le),nt!==null&&(G=_(nt,G,st),tt===null?Ze=nt:tt.sibling=nt,tt=nt);return Xt&&Lo(K,st),Ze}for(nt=c(K,nt);st<te.length;st++)_n=Ge(nt,K,st,te[st],Le),_n!==null&&(r&&_n.alternate!==null&&nt.delete(_n.key===null?st:_n.key),G=_(_n,G,st),tt===null?Ze=_n:tt.sibling=_n,tt=_n);return r&&nt.forEach(function(Ji){return o(K,Ji)}),Xt&&Lo(K,st),Ze}function qe(K,G,te,Le){var Ze=ne(te);if(typeof Ze!="function")throw Error(t(150));if(te=Ze.call(te),te==null)throw Error(t(151));for(var tt=Ze=null,nt=G,st=G=0,_n=null,Tt=te.next();nt!==null&&!Tt.done;st++,Tt=te.next()){nt.index>st?(_n=nt,nt=null):_n=nt.sibling;var Ji=Se(K,nt,Tt.value,Le);if(Ji===null){nt===null&&(nt=_n);break}r&&nt&&Ji.alternate===null&&o(K,nt),G=_(Ji,G,st),tt===null?Ze=Ji:tt.sibling=Ji,tt=Ji,nt=_n}if(Tt.done)return s(K,nt),Xt&&Lo(K,st),Ze;if(nt===null){for(;!Tt.done;st++,Tt=te.next())Tt=Te(K,Tt.value,Le),Tt!==null&&(G=_(Tt,G,st),tt===null?Ze=Tt:tt.sibling=Tt,tt=Tt);return Xt&&Lo(K,st),Ze}for(nt=c(K,nt);!Tt.done;st++,Tt=te.next())Tt=Ge(nt,K,st,Tt.value,Le),Tt!==null&&(r&&Tt.alternate!==null&&nt.delete(Tt.key===null?st:Tt.key),G=_(Tt,G,st),tt===null?Ze=Tt:tt.sibling=Tt,tt=Tt);return r&&nt.forEach(function(Ew){return o(K,Ew)}),Xt&&Lo(K,st),Ze}function nn(K,G,te,Le){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var Ze=te.key,tt=G;tt!==null;){if(tt.key===Ze){if(Ze=te.type,Ze===F){if(tt.tag===7){s(K,tt.sibling),G=h(tt,te.props.children),G.return=K,K=G;break e}}else if(tt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===fe&&pv(Ze)===tt.type){s(K,tt.sibling),G=h(tt,te.props),G.ref=Os(K,tt,te),G.return=K,K=G;break e}s(K,tt);break}else o(K,tt);tt=tt.sibling}te.type===F?(G=zo(te.props.children,K.mode,Le,te.key),G.return=K,K=G):(Le=Du(te.type,te.key,te.props,null,K.mode,Le),Le.ref=Os(K,G,te),Le.return=K,K=Le)}return A(K);case O:e:{for(tt=te.key;G!==null;){if(G.key===tt)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){s(K,G.sibling),G=h(G,te.children||[]),G.return=K,K=G;break e}else{s(K,G);break}else o(K,G);G=G.sibling}G=Ud(te,K.mode,Le),G.return=K,K=G}return A(K);case fe:return tt=te._init,nn(K,G,tt(te._payload),Le)}if(we(te))return je(K,G,te,Le);if(ne(te))return qe(K,G,te,Le);lu(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(s(K,G.sibling),G=h(G,te),G.return=K,K=G):(s(K,G),G=Id(te,K.mode,Le),G.return=K,K=G),A(K)):s(K,G)}return nn}var Ea=mv(!0),vv=mv(!1),uu=Hi(null),cu=null,wa=null,Gf=null;function Wf(){Gf=wa=cu=null}function $f(r){var o=uu.current;Vt(uu),r._currentValue=o}function Xf(r,o,s){for(;r!==null;){var c=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,c!==null&&(c.childLanes|=o)):c!==null&&(c.childLanes&o)!==o&&(c.childLanes|=o),r===s)break;r=r.return}}function Ma(r,o){cu=r,Gf=wa=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(Zn=!0),r.firstContext=null)}function gr(r){var o=r._currentValue;if(Gf!==r)if(r={context:r,memoizedValue:o,next:null},wa===null){if(cu===null)throw Error(t(308));wa=r,cu.dependencies={lanes:0,firstContext:r}}else wa=wa.next=r;return o}var Po=null;function jf(r){Po===null?Po=[r]:Po.push(r)}function gv(r,o,s,c){var h=o.interleaved;return h===null?(s.next=s,jf(o)):(s.next=h.next,h.next=s),o.interleaved=s,gi(r,c)}function gi(r,o){r.lanes|=o;var s=r.alternate;for(s!==null&&(s.lanes|=o),s=r,r=r.return;r!==null;)r.childLanes|=o,s=r.alternate,s!==null&&(s.childLanes|=o),s=r,r=r.return;return s.tag===3?s.stateNode:null}var Wi=!1;function Yf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function _i(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function $i(r,o,s){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var h=c.pending;return h===null?o.next=o:(o.next=h.next,h.next=o),c.pending=o,gi(r,s)}return h=c.interleaved,h===null?(o.next=o,jf(c)):(o.next=h.next,h.next=o),c.interleaved=o,gi(r,s)}function fu(r,o,s){if(o=o.updateQueue,o!==null&&(o=o.shared,(s&4194240)!==0)){var c=o.lanes;c&=r.pendingLanes,s|=c,o.lanes=s,lf(r,s)}}function yv(r,o){var s=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,_=null;if(s=s.firstBaseUpdate,s!==null){do{var A={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};_===null?h=_=A:_=_.next=A,s=s.next}while(s!==null);_===null?h=_=o:_=_.next=o}else h=_=o;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:c.shared,effects:c.effects},r.updateQueue=s;return}r=s.lastBaseUpdate,r===null?s.firstBaseUpdate=o:r.next=o,s.lastBaseUpdate=o}function du(r,o,s,c){var h=r.updateQueue;Wi=!1;var _=h.firstBaseUpdate,A=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var B=I,oe=B.next;B.next=null,A===null?_=oe:A.next=oe,A=B;var Ee=r.alternate;Ee!==null&&(Ee=Ee.updateQueue,I=Ee.lastBaseUpdate,I!==A&&(I===null?Ee.firstBaseUpdate=oe:I.next=oe,Ee.lastBaseUpdate=B))}if(_!==null){var Te=h.baseState;A=0,Ee=oe=B=null,I=_;do{var Se=I.lane,Ge=I.eventTime;if((c&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:Ge,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=r,qe=I;switch(Se=o,Ge=s,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Te=je.call(Ge,Te,Se);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,Se=typeof je=="function"?je.call(Ge,Te,Se):je,Se==null)break e;Te=$({},Te,Se);break e;case 2:Wi=!0}}I.callback!==null&&I.lane!==0&&(r.flags|=64,Se=h.effects,Se===null?h.effects=[I]:Se.push(I))}else Ge={eventTime:Ge,lane:Se,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Ee===null?(oe=Ee=Ge,B=Te):Ee=Ee.next=Ge,A|=Se;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;Se=I,I=Se.next,Se.next=null,h.lastBaseUpdate=Se,h.shared.pending=null}}while(!0);if(Ee===null&&(B=Te),h.baseState=B,h.firstBaseUpdate=oe,h.lastBaseUpdate=Ee,o=h.shared.interleaved,o!==null){h=o;do A|=h.lane,h=h.next;while(h!==o)}else _===null&&(h.shared.lanes=0);Uo|=A,r.lanes=A,r.memoizedState=Te}}function xv(r,o,s){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var c=r[o],h=c.callback;if(h!==null){if(c.callback=null,c=s,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var zs={},Kr=Hi(zs),Bs=Hi(zs),ks=Hi(zs);function Do(r){if(r===zs)throw Error(t(174));return r}function qf(r,o){switch(Bt(ks,o),Bt(Bs,r),Bt(Kr,zs),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ye(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=ye(o,r)}Vt(Kr),Bt(Kr,o)}function Aa(){Vt(Kr),Vt(Bs),Vt(ks)}function Sv(r){Do(ks.current);var o=Do(Kr.current),s=ye(o,r.type);o!==s&&(Bt(Bs,r),Bt(Kr,s))}function Kf(r){Bs.current===r&&(Vt(Kr),Vt(Bs))}var jt=Hi(0);function hu(r){for(var o=r;o!==null;){if(o.tag===13){var s=o.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Zf=[];function Jf(){for(var r=0;r<Zf.length;r++)Zf[r]._workInProgressVersionPrimary=null;Zf.length=0}var pu=D.ReactCurrentDispatcher,Qf=D.ReactCurrentBatchConfig,Io=0,Yt=null,cn=null,vn=null,mu=!1,Hs=!1,Vs=0,WE=0;function Pn(){throw Error(t(321))}function ed(r,o){if(o===null)return!1;for(var s=0;s<o.length&&s<r.length;s++)if(!Ir(r[s],o[s]))return!1;return!0}function td(r,o,s,c,h,_){if(Io=_,Yt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,pu.current=r===null||r.memoizedState===null?YE:qE,r=s(c,h),Hs){_=0;do{if(Hs=!1,Vs=0,25<=_)throw Error(t(301));_+=1,vn=cn=null,o.updateQueue=null,pu.current=KE,r=s(c,h)}while(Hs)}if(pu.current=_u,o=cn!==null&&cn.next!==null,Io=0,vn=cn=Yt=null,mu=!1,o)throw Error(t(300));return r}function nd(){var r=Vs!==0;return Vs=0,r}function Zr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Yt.memoizedState=vn=r:vn=vn.next=r,vn}function _r(){if(cn===null){var r=Yt.alternate;r=r!==null?r.memoizedState:null}else r=cn.next;var o=vn===null?Yt.memoizedState:vn.next;if(o!==null)vn=o,cn=r;else{if(r===null)throw Error(t(310));cn=r,r={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},vn===null?Yt.memoizedState=vn=r:vn=vn.next=r}return vn}function Gs(r,o){return typeof o=="function"?o(r):o}function rd(r){var o=_r(),s=o.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=r;var c=cn,h=c.baseQueue,_=s.pending;if(_!==null){if(h!==null){var A=h.next;h.next=_.next,_.next=A}c.baseQueue=h=_,s.pending=null}if(h!==null){_=h.next,c=c.baseState;var I=A=null,B=null,oe=_;do{var Ee=oe.lane;if((Io&Ee)===Ee)B!==null&&(B=B.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:r(c,oe.action);else{var Te={lane:Ee,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};B===null?(I=B=Te,A=c):B=B.next=Te,Yt.lanes|=Ee,Uo|=Ee}oe=oe.next}while(oe!==null&&oe!==_);B===null?A=c:B.next=I,Ir(c,o.memoizedState)||(Zn=!0),o.memoizedState=c,o.baseState=A,o.baseQueue=B,s.lastRenderedState=c}if(r=s.interleaved,r!==null){h=r;do _=h.lane,Yt.lanes|=_,Uo|=_,h=h.next;while(h!==r)}else h===null&&(s.lanes=0);return[o.memoizedState,s.dispatch]}function id(r){var o=_r(),s=o.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=r;var c=s.dispatch,h=s.pending,_=o.memoizedState;if(h!==null){s.pending=null;var A=h=h.next;do _=r(_,A.action),A=A.next;while(A!==h);Ir(_,o.memoizedState)||(Zn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),s.lastRenderedState=_}return[_,c]}function Ev(){}function wv(r,o){var s=Yt,c=_r(),h=o(),_=!Ir(c.memoizedState,h);if(_&&(c.memoizedState=h,Zn=!0),c=c.queue,od(Tv.bind(null,s,c,r),[r]),c.getSnapshot!==o||_||vn!==null&&vn.memoizedState.tag&1){if(s.flags|=2048,Ws(9,Av.bind(null,s,c,h,o),void 0,null),gn===null)throw Error(t(349));(Io&30)!==0||Mv(s,o,h)}return h}function Mv(r,o,s){r.flags|=16384,r={getSnapshot:o,value:s},o=Yt.updateQueue,o===null?(o={lastEffect:null,stores:null},Yt.updateQueue=o,o.stores=[r]):(s=o.stores,s===null?o.stores=[r]:s.push(r))}function Av(r,o,s,c){o.value=s,o.getSnapshot=c,bv(o)&&Cv(r)}function Tv(r,o,s){return s(function(){bv(o)&&Cv(r)})}function bv(r){var o=r.getSnapshot;r=r.value;try{var s=o();return!Ir(r,s)}catch{return!0}}function Cv(r){var o=gi(r,1);o!==null&&zr(o,r,1,-1)}function Rv(r){var o=Zr();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:r},o.queue=r,r=r.dispatch=jE.bind(null,Yt,r),[o.memoizedState,r]}function Ws(r,o,s,c){return r={tag:r,create:o,destroy:s,deps:c,next:null},o=Yt.updateQueue,o===null?(o={lastEffect:null,stores:null},Yt.updateQueue=o,o.lastEffect=r.next=r):(s=o.lastEffect,s===null?o.lastEffect=r.next=r:(c=s.next,s.next=r,r.next=c,o.lastEffect=r)),r}function Lv(){return _r().memoizedState}function vu(r,o,s,c){var h=Zr();Yt.flags|=r,h.memoizedState=Ws(1|o,s,void 0,c===void 0?null:c)}function gu(r,o,s,c){var h=_r();c=c===void 0?null:c;var _=void 0;if(cn!==null){var A=cn.memoizedState;if(_=A.destroy,c!==null&&ed(c,A.deps)){h.memoizedState=Ws(o,s,_,c);return}}Yt.flags|=r,h.memoizedState=Ws(1|o,s,_,c)}function Pv(r,o){return vu(8390656,8,r,o)}function od(r,o){return gu(2048,8,r,o)}function Dv(r,o){return gu(4,2,r,o)}function Iv(r,o){return gu(4,4,r,o)}function Uv(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function Nv(r,o,s){return s=s!=null?s.concat([r]):null,gu(4,4,Uv.bind(null,o,r),s)}function ad(){}function Fv(r,o){var s=_r();o=o===void 0?null:o;var c=s.memoizedState;return c!==null&&o!==null&&ed(o,c[1])?c[0]:(s.memoizedState=[r,o],r)}function Ov(r,o){var s=_r();o=o===void 0?null:o;var c=s.memoizedState;return c!==null&&o!==null&&ed(o,c[1])?c[0]:(r=r(),s.memoizedState=[r,o],r)}function zv(r,o,s){return(Io&21)===0?(r.baseState&&(r.baseState=!1,Zn=!0),r.memoizedState=s):(Ir(s,o)||(s=Bl(),Yt.lanes|=s,Uo|=s,r.baseState=!0),o)}function $E(r,o){var s=Pt;Pt=s!==0&&4>s?s:4,r(!0);var c=Qf.transition;Qf.transition={};try{r(!1),o()}finally{Pt=s,Qf.transition=c}}function Bv(){return _r().memoizedState}function XE(r,o,s){var c=qi(r);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},kv(r))Hv(o,s);else if(s=gv(r,o,s,c),s!==null){var h=Gn();zr(s,r,c,h),Vv(s,o,c)}}function jE(r,o,s){var c=qi(r),h={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(kv(r))Hv(o,h);else{var _=r.alternate;if(r.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var A=o.lastRenderedState,I=_(A,s);if(h.hasEagerState=!0,h.eagerState=I,Ir(I,A)){var B=o.interleaved;B===null?(h.next=h,jf(o)):(h.next=B.next,B.next=h),o.interleaved=h;return}}catch{}finally{}s=gv(r,o,h,c),s!==null&&(h=Gn(),zr(s,r,c,h),Vv(s,o,c))}}function kv(r){var o=r.alternate;return r===Yt||o!==null&&o===Yt}function Hv(r,o){Hs=mu=!0;var s=r.pending;s===null?o.next=o:(o.next=s.next,s.next=o),r.pending=o}function Vv(r,o,s){if((s&4194240)!==0){var c=o.lanes;c&=r.pendingLanes,s|=c,o.lanes=s,lf(r,s)}}var _u={readContext:gr,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},YE={readContext:gr,useCallback:function(r,o){return Zr().memoizedState=[r,o===void 0?null:o],r},useContext:gr,useEffect:Pv,useImperativeHandle:function(r,o,s){return s=s!=null?s.concat([r]):null,vu(4194308,4,Uv.bind(null,o,r),s)},useLayoutEffect:function(r,o){return vu(4194308,4,r,o)},useInsertionEffect:function(r,o){return vu(4,2,r,o)},useMemo:function(r,o){var s=Zr();return o=o===void 0?null:o,r=r(),s.memoizedState=[r,o],r},useReducer:function(r,o,s){var c=Zr();return o=s!==void 0?s(o):o,c.memoizedState=c.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},c.queue=r,r=r.dispatch=XE.bind(null,Yt,r),[c.memoizedState,r]},useRef:function(r){var o=Zr();return r={current:r},o.memoizedState=r},useState:Rv,useDebugValue:ad,useDeferredValue:function(r){return Zr().memoizedState=r},useTransition:function(){var r=Rv(!1),o=r[0];return r=$E.bind(null,r[1]),Zr().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,s){var c=Yt,h=Zr();if(Xt){if(s===void 0)throw Error(t(407));s=s()}else{if(s=o(),gn===null)throw Error(t(349));(Io&30)!==0||Mv(c,o,s)}h.memoizedState=s;var _={value:s,getSnapshot:o};return h.queue=_,Pv(Tv.bind(null,c,_,r),[r]),c.flags|=2048,Ws(9,Av.bind(null,c,_,s,o),void 0,null),s},useId:function(){var r=Zr(),o=gn.identifierPrefix;if(Xt){var s=vi,c=mi;s=(c&~(1<<32-Hn(c)-1)).toString(32)+s,o=":"+o+"R"+s,s=Vs++,0<s&&(o+="H"+s.toString(32)),o+=":"}else s=WE++,o=":"+o+"r"+s.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},qE={readContext:gr,useCallback:Fv,useContext:gr,useEffect:od,useImperativeHandle:Nv,useInsertionEffect:Dv,useLayoutEffect:Iv,useMemo:Ov,useReducer:rd,useRef:Lv,useState:function(){return rd(Gs)},useDebugValue:ad,useDeferredValue:function(r){var o=_r();return zv(o,cn.memoizedState,r)},useTransition:function(){var r=rd(Gs)[0],o=_r().memoizedState;return[r,o]},useMutableSource:Ev,useSyncExternalStore:wv,useId:Bv,unstable_isNewReconciler:!1},KE={readContext:gr,useCallback:Fv,useContext:gr,useEffect:od,useImperativeHandle:Nv,useInsertionEffect:Dv,useLayoutEffect:Iv,useMemo:Ov,useReducer:id,useRef:Lv,useState:function(){return id(Gs)},useDebugValue:ad,useDeferredValue:function(r){var o=_r();return cn===null?o.memoizedState=r:zv(o,cn.memoizedState,r)},useTransition:function(){var r=id(Gs)[0],o=_r().memoizedState;return[r,o]},useMutableSource:Ev,useSyncExternalStore:wv,useId:Bv,unstable_isNewReconciler:!1};function Nr(r,o){if(r&&r.defaultProps){o=$({},o),r=r.defaultProps;for(var s in r)o[s]===void 0&&(o[s]=r[s]);return o}return o}function sd(r,o,s,c){o=r.memoizedState,s=s(c,o),s=s==null?o:$({},o,s),r.memoizedState=s,r.lanes===0&&(r.updateQueue.baseState=s)}var yu={isMounted:function(r){return(r=r._reactInternals)?fi(r)===r:!1},enqueueSetState:function(r,o,s){r=r._reactInternals;var c=Gn(),h=qi(r),_=_i(c,h);_.payload=o,s!=null&&(_.callback=s),o=$i(r,_,h),o!==null&&(zr(o,r,h,c),fu(o,r,h))},enqueueReplaceState:function(r,o,s){r=r._reactInternals;var c=Gn(),h=qi(r),_=_i(c,h);_.tag=1,_.payload=o,s!=null&&(_.callback=s),o=$i(r,_,h),o!==null&&(zr(o,r,h,c),fu(o,r,h))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var s=Gn(),c=qi(r),h=_i(s,c);h.tag=2,o!=null&&(h.callback=o),o=$i(r,h,c),o!==null&&(zr(o,r,c,s),fu(o,r,c))}};function Gv(r,o,s,c,h,_,A){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,_,A):o.prototype&&o.prototype.isPureReactComponent?!Ls(s,c)||!Ls(h,_):!0}function Wv(r,o,s){var c=!1,h=Vi,_=o.contextType;return typeof _=="object"&&_!==null?_=gr(_):(h=Kn(o)?Co:Ln.current,c=o.contextTypes,_=(c=c!=null)?_a(r,h):Vi),o=new o(s,_),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=yu,r.stateNode=o,o._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=_),o}function $v(r,o,s,c){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(s,c),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(s,c),o.state!==r&&yu.enqueueReplaceState(o,o.state,null)}function ld(r,o,s,c){var h=r.stateNode;h.props=s,h.state=r.memoizedState,h.refs={},Yf(r);var _=o.contextType;typeof _=="object"&&_!==null?h.context=gr(_):(_=Kn(o)?Co:Ln.current,h.context=_a(r,_)),h.state=r.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(sd(r,o,_,s),h.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(o=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),o!==h.state&&yu.enqueueReplaceState(h,h.state,null),du(r,s,h,c),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function Ta(r,o){try{var s="",c=o;do s+=Q(c),c=c.return;while(c);var h=s}catch(_){h=`
Error generating stack: `+_.message+`
`+_.stack}return{value:r,source:o,stack:h,digest:null}}function ud(r,o,s){return{value:r,source:null,stack:s??null,digest:o??null}}function cd(r,o){try{console.error(o.value)}catch(s){setTimeout(function(){throw s})}}var ZE=typeof WeakMap=="function"?WeakMap:Map;function Xv(r,o,s){s=_i(-1,s),s.tag=3,s.payload={element:null};var c=o.value;return s.callback=function(){Tu||(Tu=!0,Ad=c),cd(r,o)},s}function jv(r,o,s){s=_i(-1,s),s.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;s.payload=function(){return c(h)},s.callback=function(){cd(r,o)}}var _=r.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(s.callback=function(){cd(r,o),typeof c!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),s}function Yv(r,o,s){var c=r.pingCache;if(c===null){c=r.pingCache=new ZE;var h=new Set;c.set(o,h)}else h=c.get(o),h===void 0&&(h=new Set,c.set(o,h));h.has(s)||(h.add(s),r=fw.bind(null,r,o,s),o.then(r,r))}function qv(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function Kv(r,o,s,c,h){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(o=_i(-1,1),o.tag=2,$i(s,o,1))),s.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var JE=D.ReactCurrentOwner,Zn=!1;function Vn(r,o,s,c){o.child=r===null?vv(o,null,s,c):Ea(o,r.child,s,c)}function Zv(r,o,s,c,h){s=s.render;var _=o.ref;return Ma(o,h),c=td(r,o,s,c,_,h),s=nd(),r!==null&&!Zn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~h,yi(r,o,h)):(Xt&&s&&zf(o),o.flags|=1,Vn(r,o,c,h),o.child)}function Jv(r,o,s,c,h){if(r===null){var _=s.type;return typeof _=="function"&&!Dd(_)&&_.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(o.tag=15,o.type=_,Qv(r,o,_,c,h)):(r=Du(s.type,null,c,o,o.mode,h),r.ref=o.ref,r.return=o,o.child=r)}if(_=r.child,(r.lanes&h)===0){var A=_.memoizedProps;if(s=s.compare,s=s!==null?s:Ls,s(A,c)&&r.ref===o.ref)return yi(r,o,h)}return o.flags|=1,r=Zi(_,c),r.ref=o.ref,r.return=o,o.child=r}function Qv(r,o,s,c,h){if(r!==null){var _=r.memoizedProps;if(Ls(_,c)&&r.ref===o.ref)if(Zn=!1,o.pendingProps=c=_,(r.lanes&h)!==0)(r.flags&131072)!==0&&(Zn=!0);else return o.lanes=r.lanes,yi(r,o,h)}return fd(r,o,s,c,h)}function eg(r,o,s){var c=o.pendingProps,h=c.children,_=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Ca,ur),ur|=s;else{if((s&1073741824)===0)return r=_!==null?_.baseLanes|s:s,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Bt(Ca,ur),ur|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:s,Bt(Ca,ur),ur|=c}else _!==null?(c=_.baseLanes|s,o.memoizedState=null):c=s,Bt(Ca,ur),ur|=c;return Vn(r,o,h,s),o.child}function tg(r,o){var s=o.ref;(r===null&&s!==null||r!==null&&r.ref!==s)&&(o.flags|=512,o.flags|=2097152)}function fd(r,o,s,c,h){var _=Kn(s)?Co:Ln.current;return _=_a(o,_),Ma(o,h),s=td(r,o,s,c,_,h),c=nd(),r!==null&&!Zn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~h,yi(r,o,h)):(Xt&&c&&zf(o),o.flags|=1,Vn(r,o,s,h),o.child)}function ng(r,o,s,c,h){if(Kn(s)){var _=!0;ru(o)}else _=!1;if(Ma(o,h),o.stateNode===null)Su(r,o),Wv(o,s,c),ld(o,s,c,h),c=!0;else if(r===null){var A=o.stateNode,I=o.memoizedProps;A.props=I;var B=A.context,oe=s.contextType;typeof oe=="object"&&oe!==null?oe=gr(oe):(oe=Kn(s)?Co:Ln.current,oe=_a(o,oe));var Ee=s.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I!==c||B!==oe)&&$v(o,A,c,oe),Wi=!1;var Se=o.memoizedState;A.state=Se,du(o,c,A,h),B=o.memoizedState,I!==c||Se!==B||qn.current||Wi?(typeof Ee=="function"&&(sd(o,s,Ee,c),B=o.memoizedState),(I=Wi||Gv(o,s,I,c,Se,B,oe))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=c,o.memoizedState=B),A.props=c,A.state=B,A.context=oe,c=I):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),c=!1)}else{A=o.stateNode,_v(r,o),I=o.memoizedProps,oe=o.type===o.elementType?I:Nr(o.type,I),A.props=oe,Te=o.pendingProps,Se=A.context,B=s.contextType,typeof B=="object"&&B!==null?B=gr(B):(B=Kn(s)?Co:Ln.current,B=_a(o,B));var Ge=s.getDerivedStateFromProps;(Ee=typeof Ge=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I!==Te||Se!==B)&&$v(o,A,c,B),Wi=!1,Se=o.memoizedState,A.state=Se,du(o,c,A,h);var je=o.memoizedState;I!==Te||Se!==je||qn.current||Wi?(typeof Ge=="function"&&(sd(o,s,Ge,c),je=o.memoizedState),(oe=Wi||Gv(o,s,oe,c,Se,je,B)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,je,B),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,je,B)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||I===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||I===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),o.memoizedProps=c,o.memoizedState=je),A.props=c,A.state=je,A.context=B,c=oe):(typeof A.componentDidUpdate!="function"||I===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||I===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),c=!1)}return dd(r,o,s,c,_,h)}function dd(r,o,s,c,h,_){tg(r,o);var A=(o.flags&128)!==0;if(!c&&!A)return h&&sv(o,s,!1),yi(r,o,_);c=o.stateNode,JE.current=o;var I=A&&typeof s.getDerivedStateFromError!="function"?null:c.render();return o.flags|=1,r!==null&&A?(o.child=Ea(o,r.child,null,_),o.child=Ea(o,null,I,_)):Vn(r,o,I,_),o.memoizedState=c.state,h&&sv(o,s,!0),o.child}function rg(r){var o=r.stateNode;o.pendingContext?ov(r,o.pendingContext,o.pendingContext!==o.context):o.context&&ov(r,o.context,!1),qf(r,o.containerInfo)}function ig(r,o,s,c,h){return Sa(),Vf(h),o.flags|=256,Vn(r,o,s,c),o.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function pd(r){return{baseLanes:r,cachePool:null,transitions:null}}function og(r,o,s){var c=o.pendingProps,h=jt.current,_=!1,A=(o.flags&128)!==0,I;if((I=A)||(I=r!==null&&r.memoizedState===null?!1:(h&2)!==0),I?(_=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),Bt(jt,h&1),r===null)return Hf(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=c.children,r=c.fallback,_?(c=o.mode,_=o.child,A={mode:"hidden",children:A},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Iu(A,c,0,null),r=zo(r,c,s,null),_.return=o,r.return=o,_.sibling=r,o.child=_,o.child.memoizedState=pd(s),o.memoizedState=hd,r):md(o,A));if(h=r.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return QE(r,o,A,c,I,h,s);if(_){_=c.fallback,A=o.mode,h=r.child,I=h.sibling;var B={mode:"hidden",children:c.children};return(A&1)===0&&o.child!==h?(c=o.child,c.childLanes=0,c.pendingProps=B,o.deletions=null):(c=Zi(h,B),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?_=Zi(I,_):(_=zo(_,A,s,null),_.flags|=2),_.return=o,c.return=o,c.sibling=_,o.child=c,c=_,_=o.child,A=r.child.memoizedState,A=A===null?pd(s):{baseLanes:A.baseLanes|s,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=r.childLanes&~s,o.memoizedState=hd,c}return _=r.child,r=_.sibling,c=Zi(_,{mode:"visible",children:c.children}),(o.mode&1)===0&&(c.lanes=s),c.return=o,c.sibling=null,r!==null&&(s=o.deletions,s===null?(o.deletions=[r],o.flags|=16):s.push(r)),o.child=c,o.memoizedState=null,c}function md(r,o){return o=Iu({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function xu(r,o,s,c){return c!==null&&Vf(c),Ea(o,r.child,null,s),r=md(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function QE(r,o,s,c,h,_,A){if(s)return o.flags&256?(o.flags&=-257,c=ud(Error(t(422))),xu(r,o,A,c)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(_=c.fallback,h=o.mode,c=Iu({mode:"visible",children:c.children},h,0,null),_=zo(_,h,A,null),_.flags|=2,c.return=o,_.return=o,c.sibling=_,o.child=c,(o.mode&1)!==0&&Ea(o,r.child,null,A),o.child.memoizedState=pd(A),o.memoizedState=hd,_);if((o.mode&1)===0)return xu(r,o,A,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,_=Error(t(419)),c=ud(_,c,void 0),xu(r,o,A,c)}if(I=(A&r.childLanes)!==0,Zn||I){if(c=gn,c!==null){switch(A&-A){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|A))!==0?0:h,h!==0&&h!==_.retryLane&&(_.retryLane=h,gi(r,h),zr(c,r,h,-1))}return Pd(),c=ud(Error(t(421))),xu(r,o,A,c)}return h.data==="$?"?(o.flags|=128,o.child=r.child,o=dw.bind(null,r),h._reactRetry=o,null):(r=_.treeContext,lr=ki(h.nextSibling),sr=o,Xt=!0,Ur=null,r!==null&&(mr[vr++]=mi,mr[vr++]=vi,mr[vr++]=Ro,mi=r.id,vi=r.overflow,Ro=o),o=md(o,c.children),o.flags|=4096,o)}function ag(r,o,s){r.lanes|=o;var c=r.alternate;c!==null&&(c.lanes|=o),Xf(r.return,o,s)}function vd(r,o,s,c,h){var _=r.memoizedState;_===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=s,_.tailMode=h)}function sg(r,o,s){var c=o.pendingProps,h=c.revealOrder,_=c.tail;if(Vn(r,o,c.children,s),c=jt.current,(c&2)!==0)c=c&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ag(r,s,o);else if(r.tag===19)ag(r,s,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Bt(jt,c),(o.mode&1)===0)o.memoizedState=null;else switch(h){case"forwards":for(s=o.child,h=null;s!==null;)r=s.alternate,r!==null&&hu(r)===null&&(h=s),s=s.sibling;s=h,s===null?(h=o.child,o.child=null):(h=s.sibling,s.sibling=null),vd(o,!1,h,s,_);break;case"backwards":for(s=null,h=o.child,o.child=null;h!==null;){if(r=h.alternate,r!==null&&hu(r)===null){o.child=h;break}r=h.sibling,h.sibling=s,s=h,h=r}vd(o,!0,s,null,_);break;case"together":vd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Su(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function yi(r,o,s){if(r!==null&&(o.dependencies=r.dependencies),Uo|=o.lanes,(s&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,s=Zi(r,r.pendingProps),o.child=s,s.return=o;r.sibling!==null;)r=r.sibling,s=s.sibling=Zi(r,r.pendingProps),s.return=o;s.sibling=null}return o.child}function ew(r,o,s){switch(o.tag){case 3:rg(o),Sa();break;case 5:Sv(o);break;case 1:Kn(o.type)&&ru(o);break;case 4:qf(o,o.stateNode.containerInfo);break;case 10:var c=o.type._context,h=o.memoizedProps.value;Bt(uu,c._currentValue),c._currentValue=h;break;case 13:if(c=o.memoizedState,c!==null)return c.dehydrated!==null?(Bt(jt,jt.current&1),o.flags|=128,null):(s&o.child.childLanes)!==0?og(r,o,s):(Bt(jt,jt.current&1),r=yi(r,o,s),r!==null?r.sibling:null);Bt(jt,jt.current&1);break;case 19:if(c=(s&o.childLanes)!==0,(r.flags&128)!==0){if(c)return sg(r,o,s);o.flags|=128}if(h=o.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Bt(jt,jt.current),c)break;return null;case 22:case 23:return o.lanes=0,eg(r,o,s)}return yi(r,o,s)}var lg,gd,ug,cg;lg=function(r,o){for(var s=o.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break;for(;s.sibling===null;){if(s.return===null||s.return===o)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},gd=function(){},ug=function(r,o,s,c){var h=r.memoizedProps;if(h!==c){r=o.stateNode,Do(Kr.current);var _=null;switch(s){case"input":h=ke(r,h),c=ke(r,c),_=[];break;case"select":h=$({},h,{value:void 0}),c=$({},c,{value:void 0}),_=[];break;case"textarea":h=Ke(r,h),c=Ke(r,c),_=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=eu)}ut(s,c);var A;s=null;for(oe in h)if(!c.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var I=h[oe];for(A in I)I.hasOwnProperty(A)&&(s||(s={}),s[A]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?_||(_=[]):(_=_||[]).push(oe,null));for(oe in c){var B=c[oe];if(I=h?.[oe],c.hasOwnProperty(oe)&&B!==I&&(B!=null||I!=null))if(oe==="style")if(I){for(A in I)!I.hasOwnProperty(A)||B&&B.hasOwnProperty(A)||(s||(s={}),s[A]="");for(A in B)B.hasOwnProperty(A)&&I[A]!==B[A]&&(s||(s={}),s[A]=B[A])}else s||(_||(_=[]),_.push(oe,s)),s=B;else oe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(_=_||[]).push(oe,B)):oe==="children"?typeof B!="string"&&typeof B!="number"||(_=_||[]).push(oe,""+B):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(B!=null&&oe==="onScroll"&&Ht("scroll",r),_||I===B||(_=[])):(_=_||[]).push(oe,B))}s&&(_=_||[]).push("style",s);var oe=_;(o.updateQueue=oe)&&(o.flags|=4)}},cg=function(r,o,s,c){s!==c&&(o.flags|=4)};function $s(r,o){if(!Xt)switch(r.tailMode){case"hidden":o=r.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?r.tail=null:s.sibling=null;break;case"collapsed":s=r.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Dn(r){var o=r.alternate!==null&&r.alternate.child===r.child,s=0,c=0;if(o)for(var h=r.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=c,r.childLanes=s,o}function tw(r,o,s){var c=o.pendingProps;switch(Bf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(o),null;case 1:return Kn(o.type)&&nu(),Dn(o),null;case 3:return c=o.stateNode,Aa(),Vt(qn),Vt(Ln),Jf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(su(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ur!==null&&(Cd(Ur),Ur=null))),gd(r,o),Dn(o),null;case 5:Kf(o);var h=Do(ks.current);if(s=o.type,r!==null&&o.stateNode!=null)ug(r,o,s,c,h),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!c){if(o.stateNode===null)throw Error(t(166));return Dn(o),null}if(r=Do(Kr.current),su(o)){c=o.stateNode,s=o.type;var _=o.memoizedProps;switch(c[qr]=o,c[Ns]=_,r=(o.mode&1)!==0,s){case"dialog":Ht("cancel",c),Ht("close",c);break;case"iframe":case"object":case"embed":Ht("load",c);break;case"video":case"audio":for(h=0;h<Ds.length;h++)Ht(Ds[h],c);break;case"source":Ht("error",c);break;case"img":case"image":case"link":Ht("error",c),Ht("load",c);break;case"details":Ht("toggle",c);break;case"input":ae(c,_),Ht("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Ht("invalid",c);break;case"textarea":P(c,_),Ht("invalid",c)}ut(s,_),h=null;for(var A in _)if(_.hasOwnProperty(A)){var I=_[A];A==="children"?typeof I=="string"?c.textContent!==I&&(_.suppressHydrationWarning!==!0&&Ql(c.textContent,I,r),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&Ql(c.textContent,I,r),h=["children",""+I]):a.hasOwnProperty(A)&&I!=null&&A==="onScroll"&&Ht("scroll",c)}switch(s){case"input":Oe(c),ge(c,_,!0);break;case"textarea":Oe(c),j(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=eu)}c=h,o.updateQueue=c,c!==null&&(o.flags|=4)}else{A=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Ae(s)),r==="http://www.w3.org/1999/xhtml"?s==="script"?(r=A.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=A.createElement(s,{is:c.is}):(r=A.createElement(s),s==="select"&&(A=r,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):r=A.createElementNS(r,s),r[qr]=o,r[Ns]=c,lg(r,o,!1,!1),o.stateNode=r;e:{switch(A=ot(s,c),s){case"dialog":Ht("cancel",r),Ht("close",r),h=c;break;case"iframe":case"object":case"embed":Ht("load",r),h=c;break;case"video":case"audio":for(h=0;h<Ds.length;h++)Ht(Ds[h],r);h=c;break;case"source":Ht("error",r),h=c;break;case"img":case"image":case"link":Ht("error",r),Ht("load",r),h=c;break;case"details":Ht("toggle",r),h=c;break;case"input":ae(r,c),h=ke(r,c),Ht("invalid",r);break;case"option":h=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},h=$({},c,{value:void 0}),Ht("invalid",r);break;case"textarea":P(r,c),h=Ke(r,c),Ht("invalid",r);break;default:h=c}ut(s,h),I=h;for(_ in I)if(I.hasOwnProperty(_)){var B=I[_];_==="style"?Pe(r,B):_==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ye(r,B)):_==="children"?typeof B=="string"?(s!=="textarea"||B!=="")&&De(r,B):typeof B=="number"&&De(r,""+B):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?B!=null&&_==="onScroll"&&Ht("scroll",r):B!=null&&M(r,_,B,A))}switch(s){case"input":Oe(r),ge(r,c,!1);break;case"textarea":Oe(r),j(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ve(c.value));break;case"select":r.multiple=!!c.multiple,_=c.value,_!=null?Ie(r,!!c.multiple,_,!1):c.defaultValue!=null&&Ie(r,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=eu)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Dn(o),null;case 6:if(r&&o.stateNode!=null)cg(r,o,r.memoizedProps,c);else{if(typeof c!="string"&&o.stateNode===null)throw Error(t(166));if(s=Do(ks.current),Do(Kr.current),su(o)){if(c=o.stateNode,s=o.memoizedProps,c[qr]=o,(_=c.nodeValue!==s)&&(r=sr,r!==null))switch(r.tag){case 3:Ql(c.nodeValue,s,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ql(c.nodeValue,s,(r.mode&1)!==0)}_&&(o.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[qr]=o,o.stateNode=c}return Dn(o),null;case 13:if(Vt(jt),c=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xt&&lr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)hv(),Sa(),o.flags|=98560,_=!1;else if(_=su(o),c!==null&&c.dehydrated!==null){if(r===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[qr]=o}else Sa(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Dn(o),_=!1}else Ur!==null&&(Cd(Ur),Ur=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=s,o):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(jt.current&1)!==0?fn===0&&(fn=3):Pd())),o.updateQueue!==null&&(o.flags|=4),Dn(o),null);case 4:return Aa(),gd(r,o),r===null&&Is(o.stateNode.containerInfo),Dn(o),null;case 10:return $f(o.type._context),Dn(o),null;case 17:return Kn(o.type)&&nu(),Dn(o),null;case 19:if(Vt(jt),_=o.memoizedState,_===null)return Dn(o),null;if(c=(o.flags&128)!==0,A=_.rendering,A===null)if(c)$s(_,!1);else{if(fn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(A=hu(r),A!==null){for(o.flags|=128,$s(_,!1),c=A.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),o.subtreeFlags=0,c=s,s=o.child;s!==null;)_=s,r=c,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=r,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,r=A.dependencies,_.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s=s.sibling;return Bt(jt,jt.current&1|2),o.child}r=r.sibling}_.tail!==null&&$e()>Ra&&(o.flags|=128,c=!0,$s(_,!1),o.lanes=4194304)}else{if(!c)if(r=hu(A),r!==null){if(o.flags|=128,c=!0,s=r.updateQueue,s!==null&&(o.updateQueue=s,o.flags|=4),$s(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!Xt)return Dn(o),null}else 2*$e()-_.renderingStartTime>Ra&&s!==1073741824&&(o.flags|=128,c=!0,$s(_,!1),o.lanes=4194304);_.isBackwards?(A.sibling=o.child,o.child=A):(s=_.last,s!==null?s.sibling=A:o.child=A,_.last=A)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=$e(),o.sibling=null,s=jt.current,Bt(jt,c?s&1|2:s&1),o):(Dn(o),null);case 22:case 23:return Ld(),c=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(o.flags|=8192),c&&(o.mode&1)!==0?(ur&1073741824)!==0&&(Dn(o),o.subtreeFlags&6&&(o.flags|=8192)):Dn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function nw(r,o){switch(Bf(o),o.tag){case 1:return Kn(o.type)&&nu(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return Aa(),Vt(qn),Vt(Ln),Jf(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return Kf(o),null;case 13:if(Vt(jt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Sa()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return Vt(jt),null;case 4:return Aa(),null;case 10:return $f(o.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Eu=!1,In=!1,rw=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function ba(r,o){var s=r.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){Qt(r,o,c)}else s.current=null}function _d(r,o,s){try{s()}catch(c){Qt(r,o,c)}}var fg=!1;function iw(r,o){if(Lf=Vl,r=Gm(),Ef(r)){if("selectionStart"in r)var s={start:r.selectionStart,end:r.selectionEnd};else e:{s=(s=r.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break e}var A=0,I=-1,B=-1,oe=0,Ee=0,Te=r,Se=null;t:for(;;){for(var Ge;Te!==s||h!==0&&Te.nodeType!==3||(I=A+h),Te!==_||c!==0&&Te.nodeType!==3||(B=A+c),Te.nodeType===3&&(A+=Te.nodeValue.length),(Ge=Te.firstChild)!==null;)Se=Te,Te=Ge;for(;;){if(Te===r)break t;if(Se===s&&++oe===h&&(I=A),Se===_&&++Ee===c&&(B=A),(Ge=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=Ge}s=I===-1||B===-1?null:{start:I,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Pf={focusedElem:r,selectionRange:s},Vl=!1,Xe=o;Xe!==null;)if(o=Xe,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,Xe=r;else for(;Xe!==null;){o=Xe;try{var je=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,nn=je.memoizedState,K=o.stateNode,G=K.getSnapshotBeforeUpdate(o.elementType===o.type?qe:Nr(o.type,qe),nn);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){Qt(o,o.return,Le)}if(r=o.sibling,r!==null){r.return=o.return,Xe=r;break}Xe=o.return}return je=fg,fg=!1,je}function Xs(r,o,s){var c=o.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&r)===r){var _=h.destroy;h.destroy=void 0,_!==void 0&&_d(o,s,_)}h=h.next}while(h!==c)}}function wu(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&r)===r){var c=s.create;s.destroy=c()}s=s.next}while(s!==o)}}function yd(r){var o=r.ref;if(o!==null){var s=r.stateNode;switch(r.tag){case 5:r=s;break;default:r=s}typeof o=="function"?o(r):o.current=r}}function dg(r){var o=r.alternate;o!==null&&(r.alternate=null,dg(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[qr],delete o[Ns],delete o[Nf],delete o[kE],delete o[HE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function hg(r){return r.tag===5||r.tag===3||r.tag===4}function pg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||hg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function xd(r,o,s){var c=r.tag;if(c===5||c===6)r=r.stateNode,o?s.nodeType===8?s.parentNode.insertBefore(r,o):s.insertBefore(r,o):(s.nodeType===8?(o=s.parentNode,o.insertBefore(r,s)):(o=s,o.appendChild(r)),s=s._reactRootContainer,s!=null||o.onclick!==null||(o.onclick=eu));else if(c!==4&&(r=r.child,r!==null))for(xd(r,o,s),r=r.sibling;r!==null;)xd(r,o,s),r=r.sibling}function Sd(r,o,s){var c=r.tag;if(c===5||c===6)r=r.stateNode,o?s.insertBefore(r,o):s.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Sd(r,o,s),r=r.sibling;r!==null;)Sd(r,o,s),r=r.sibling}var xn=null,Fr=!1;function Xi(r,o,s){for(s=s.child;s!==null;)mg(r,o,s),s=s.sibling}function mg(r,o,s){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(jn,s)}catch{}switch(s.tag){case 5:In||ba(s,o);case 6:var c=xn,h=Fr;xn=null,Xi(r,o,s),xn=c,Fr=h,xn!==null&&(Fr?(r=xn,s=s.stateNode,r.nodeType===8?r.parentNode.removeChild(s):r.removeChild(s)):xn.removeChild(s.stateNode));break;case 18:xn!==null&&(Fr?(r=xn,s=s.stateNode,r.nodeType===8?Uf(r.parentNode,s):r.nodeType===1&&Uf(r,s),Ms(r)):Uf(xn,s.stateNode));break;case 4:c=xn,h=Fr,xn=s.stateNode.containerInfo,Fr=!0,Xi(r,o,s),xn=c,Fr=h;break;case 0:case 11:case 14:case 15:if(!In&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var _=h,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&_d(s,o,A),h=h.next}while(h!==c)}Xi(r,o,s);break;case 1:if(!In&&(ba(s,o),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(I){Qt(s,o,I)}Xi(r,o,s);break;case 21:Xi(r,o,s);break;case 22:s.mode&1?(In=(c=In)||s.memoizedState!==null,Xi(r,o,s),In=c):Xi(r,o,s);break;default:Xi(r,o,s)}}function vg(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var s=r.stateNode;s===null&&(s=r.stateNode=new rw),o.forEach(function(c){var h=hw.bind(null,r,c);s.has(c)||(s.add(c),c.then(h,h))})}}function Or(r,o){var s=o.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c];try{var _=r,A=o,I=A;e:for(;I!==null;){switch(I.tag){case 5:xn=I.stateNode,Fr=!1;break e;case 3:xn=I.stateNode.containerInfo,Fr=!0;break e;case 4:xn=I.stateNode.containerInfo,Fr=!0;break e}I=I.return}if(xn===null)throw Error(t(160));mg(_,A,h),xn=null,Fr=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(oe){Qt(h,o,oe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)gg(o,r),o=o.sibling}function gg(r,o){var s=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Or(o,r),Jr(r),c&4){try{Xs(3,r,r.return),wu(3,r)}catch(qe){Qt(r,r.return,qe)}try{Xs(5,r,r.return)}catch(qe){Qt(r,r.return,qe)}}break;case 1:Or(o,r),Jr(r),c&512&&s!==null&&ba(s,s.return);break;case 5:if(Or(o,r),Jr(r),c&512&&s!==null&&ba(s,s.return),r.flags&32){var h=r.stateNode;try{De(h,"")}catch(qe){Qt(r,r.return,qe)}}if(c&4&&(h=r.stateNode,h!=null)){var _=r.memoizedProps,A=s!==null?s.memoizedProps:_,I=r.type,B=r.updateQueue;if(r.updateQueue=null,B!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&se(h,_),ot(I,A);var oe=ot(I,_);for(A=0;A<B.length;A+=2){var Ee=B[A],Te=B[A+1];Ee==="style"?Pe(h,Te):Ee==="dangerouslySetInnerHTML"?Ye(h,Te):Ee==="children"?De(h,Te):M(h,Ee,Te,oe)}switch(I){case"input":xe(h,_);break;case"textarea":T(h,_);break;case"select":var Se=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!_.multiple;var Ge=_.value;Ge!=null?Ie(h,!!_.multiple,Ge,!1):Se!==!!_.multiple&&(_.defaultValue!=null?Ie(h,!!_.multiple,_.defaultValue,!0):Ie(h,!!_.multiple,_.multiple?[]:"",!1))}h[Ns]=_}catch(qe){Qt(r,r.return,qe)}}break;case 6:if(Or(o,r),Jr(r),c&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,_=r.memoizedProps;try{h.nodeValue=_}catch(qe){Qt(r,r.return,qe)}}break;case 3:if(Or(o,r),Jr(r),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ms(o.containerInfo)}catch(qe){Qt(r,r.return,qe)}break;case 4:Or(o,r),Jr(r);break;case 13:Or(o,r),Jr(r),h=r.child,h.flags&8192&&(_=h.memoizedState!==null,h.stateNode.isHidden=_,!_||h.alternate!==null&&h.alternate.memoizedState!==null||(Md=$e())),c&4&&vg(r);break;case 22:if(Ee=s!==null&&s.memoizedState!==null,r.mode&1?(In=(oe=In)||Ee,Or(o,r),In=oe):Or(o,r),Jr(r),c&8192){if(oe=r.memoizedState!==null,(r.stateNode.isHidden=oe)&&!Ee&&(r.mode&1)!==0)for(Xe=r,Ee=r.child;Ee!==null;){for(Te=Xe=Ee;Xe!==null;){switch(Se=Xe,Ge=Se.child,Se.tag){case 0:case 11:case 14:case 15:Xs(4,Se,Se.return);break;case 1:ba(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){c=Se,s=Se.return;try{o=c,je.props=o.memoizedProps,je.state=o.memoizedState,je.componentWillUnmount()}catch(qe){Qt(c,s,qe)}}break;case 5:ba(Se,Se.return);break;case 22:if(Se.memoizedState!==null){xg(Te);continue}}Ge!==null?(Ge.return=Se,Xe=Ge):xg(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=r;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{h=Te.stateNode,oe?(_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=Te.stateNode,B=Te.memoizedProps.style,A=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=St("display",A))}catch(qe){Qt(r,r.return,qe)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=oe?"":Te.memoizedProps}catch(qe){Qt(r,r.return,qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===r)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===r)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===r)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Or(o,r),Jr(r),c&4&&vg(r);break;case 21:break;default:Or(o,r),Jr(r)}}function Jr(r){var o=r.flags;if(o&2){try{e:{for(var s=r.return;s!==null;){if(hg(s)){var c=s;break e}s=s.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(De(h,""),c.flags&=-33);var _=pg(r);Sd(r,_,h);break;case 3:case 4:var A=c.stateNode.containerInfo,I=pg(r);xd(r,I,A);break;default:throw Error(t(161))}}catch(B){Qt(r,r.return,B)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function ow(r,o,s){Xe=r,_g(r)}function _g(r,o,s){for(var c=(r.mode&1)!==0;Xe!==null;){var h=Xe,_=h.child;if(h.tag===22&&c){var A=h.memoizedState!==null||Eu;if(!A){var I=h.alternate,B=I!==null&&I.memoizedState!==null||In;I=Eu;var oe=In;if(Eu=A,(In=B)&&!oe)for(Xe=h;Xe!==null;)A=Xe,B=A.child,A.tag===22&&A.memoizedState!==null?Sg(h):B!==null?(B.return=A,Xe=B):Sg(h);for(;_!==null;)Xe=_,_g(_),_=_.sibling;Xe=h,Eu=I,In=oe}yg(r)}else(h.subtreeFlags&8772)!==0&&_!==null?(_.return=h,Xe=_):yg(r)}}function yg(r){for(;Xe!==null;){var o=Xe;if((o.flags&8772)!==0){var s=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:In||wu(5,o);break;case 1:var c=o.stateNode;if(o.flags&4&&!In)if(s===null)c.componentDidMount();else{var h=o.elementType===o.type?s.memoizedProps:Nr(o.type,s.memoizedProps);c.componentDidUpdate(h,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&xv(o,_,c);break;case 3:var A=o.updateQueue;if(A!==null){if(s=null,o.child!==null)switch(o.child.tag){case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}xv(o,A,s)}break;case 5:var I=o.stateNode;if(s===null&&o.flags&4){s=I;var B=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&s.focus();break;case"img":B.src&&(s.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var oe=o.alternate;if(oe!==null){var Ee=oe.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Ms(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||o.flags&512&&yd(o)}catch(Se){Qt(o,o.return,Se)}}if(o===r){Xe=null;break}if(s=o.sibling,s!==null){s.return=o.return,Xe=s;break}Xe=o.return}}function xg(r){for(;Xe!==null;){var o=Xe;if(o===r){Xe=null;break}var s=o.sibling;if(s!==null){s.return=o.return,Xe=s;break}Xe=o.return}}function Sg(r){for(;Xe!==null;){var o=Xe;try{switch(o.tag){case 0:case 11:case 15:var s=o.return;try{wu(4,o)}catch(B){Qt(o,s,B)}break;case 1:var c=o.stateNode;if(typeof c.componentDidMount=="function"){var h=o.return;try{c.componentDidMount()}catch(B){Qt(o,h,B)}}var _=o.return;try{yd(o)}catch(B){Qt(o,_,B)}break;case 5:var A=o.return;try{yd(o)}catch(B){Qt(o,A,B)}}}catch(B){Qt(o,o.return,B)}if(o===r){Xe=null;break}var I=o.sibling;if(I!==null){I.return=o.return,Xe=I;break}Xe=o.return}}var aw=Math.ceil,Mu=D.ReactCurrentDispatcher,Ed=D.ReactCurrentOwner,yr=D.ReactCurrentBatchConfig,wt=0,gn=null,on=null,Sn=0,ur=0,Ca=Hi(0),fn=0,js=null,Uo=0,Au=0,wd=0,Ys=null,Jn=null,Md=0,Ra=1/0,xi=null,Tu=!1,Ad=null,ji=null,bu=!1,Yi=null,Cu=0,qs=0,Td=null,Ru=-1,Lu=0;function Gn(){return(wt&6)!==0?$e():Ru!==-1?Ru:Ru=$e()}function qi(r){return(r.mode&1)===0?1:(wt&2)!==0&&Sn!==0?Sn&-Sn:GE.transition!==null?(Lu===0&&(Lu=Bl()),Lu):(r=Pt,r!==0||(r=window.event,r=r===void 0?16:wm(r.type)),r)}function zr(r,o,s,c){if(50<qs)throw qs=0,Td=null,Error(t(185));ys(r,s,c),((wt&2)===0||r!==gn)&&(r===gn&&((wt&2)===0&&(Au|=s),fn===4&&Ki(r,Sn)),Qn(r,c),s===1&&wt===0&&(o.mode&1)===0&&(Ra=$e()+500,iu&&Gi()))}function Qn(r,o){var s=r.callbackNode;Yn(r,o);var c=pr(r,r===gn?Sn:0);if(c===0)s!==null&&Ve(s),r.callbackNode=null,r.callbackPriority=0;else if(o=c&-c,r.callbackPriority!==o){if(s!=null&&Ve(s),o===1)r.tag===0?VE(wg.bind(null,r)):lv(wg.bind(null,r)),zE(function(){(wt&6)===0&&Gi()}),s=null;else{switch(mm(c)){case 1:s=ct;break;case 4:s=dt;break;case 16:s=zt;break;case 536870912:s=tn;break;default:s=zt}s=Pg(s,Eg.bind(null,r))}r.callbackPriority=o,r.callbackNode=s}}function Eg(r,o){if(Ru=-1,Lu=0,(wt&6)!==0)throw Error(t(327));var s=r.callbackNode;if(La()&&r.callbackNode!==s)return null;var c=pr(r,r===gn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||o)o=Pu(r,c);else{o=c;var h=wt;wt|=2;var _=Ag();(gn!==r||Sn!==o)&&(xi=null,Ra=$e()+500,Fo(r,o));do try{uw();break}catch(I){Mg(r,I)}while(!0);Wf(),Mu.current=_,wt=h,on!==null?o=0:(gn=null,Sn=0,o=fn)}if(o!==0){if(o===2&&(h=To(r),h!==0&&(c=h,o=bd(r,h))),o===1)throw s=js,Fo(r,0),Ki(r,c),Qn(r,$e()),s;if(o===6)Ki(r,c);else{if(h=r.current.alternate,(c&30)===0&&!sw(h)&&(o=Pu(r,c),o===2&&(_=To(r),_!==0&&(c=_,o=bd(r,_))),o===1))throw s=js,Fo(r,0),Ki(r,c),Qn(r,$e()),s;switch(r.finishedWork=h,r.finishedLanes=c,o){case 0:case 1:throw Error(t(345));case 2:Oo(r,Jn,xi);break;case 3:if(Ki(r,c),(c&130023424)===c&&(o=Md+500-$e(),10<o)){if(pr(r,0)!==0)break;if(h=r.suspendedLanes,(h&c)!==c){Gn(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=If(Oo.bind(null,r,Jn,xi),o);break}Oo(r,Jn,xi);break;case 4:if(Ki(r,c),(c&4194240)===c)break;for(o=r.eventTimes,h=-1;0<c;){var A=31-Hn(c);_=1<<A,A=o[A],A>h&&(h=A),c&=~_}if(c=h,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*aw(c/1960))-c,10<c){r.timeoutHandle=If(Oo.bind(null,r,Jn,xi),c);break}Oo(r,Jn,xi);break;case 5:Oo(r,Jn,xi);break;default:throw Error(t(329))}}}return Qn(r,$e()),r.callbackNode===s?Eg.bind(null,r):null}function bd(r,o){var s=Ys;return r.current.memoizedState.isDehydrated&&(Fo(r,o).flags|=256),r=Pu(r,o),r!==2&&(o=Jn,Jn=s,o!==null&&Cd(o)),r}function Cd(r){Jn===null?Jn=r:Jn.push.apply(Jn,r)}function sw(r){for(var o=r;;){if(o.flags&16384){var s=o.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var h=s[c],_=h.getSnapshot;h=h.value;try{if(!Ir(_(),h))return!1}catch{return!1}}}if(s=o.child,o.subtreeFlags&16384&&s!==null)s.return=o,o=s;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ki(r,o){for(o&=~wd,o&=~Au,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var s=31-Hn(o),c=1<<s;r[s]=-1,o&=~c}}function wg(r){if((wt&6)!==0)throw Error(t(327));La();var o=pr(r,0);if((o&1)===0)return Qn(r,$e()),null;var s=Pu(r,o);if(r.tag!==0&&s===2){var c=To(r);c!==0&&(o=c,s=bd(r,c))}if(s===1)throw s=js,Fo(r,0),Ki(r,o),Qn(r,$e()),s;if(s===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,Oo(r,Jn,xi),Qn(r,$e()),null}function Rd(r,o){var s=wt;wt|=1;try{return r(o)}finally{wt=s,wt===0&&(Ra=$e()+500,iu&&Gi())}}function No(r){Yi!==null&&Yi.tag===0&&(wt&6)===0&&La();var o=wt;wt|=1;var s=yr.transition,c=Pt;try{if(yr.transition=null,Pt=1,r)return r()}finally{Pt=c,yr.transition=s,wt=o,(wt&6)===0&&Gi()}}function Ld(){ur=Ca.current,Vt(Ca)}function Fo(r,o){r.finishedWork=null,r.finishedLanes=0;var s=r.timeoutHandle;if(s!==-1&&(r.timeoutHandle=-1,OE(s)),on!==null)for(s=on.return;s!==null;){var c=s;switch(Bf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&nu();break;case 3:Aa(),Vt(qn),Vt(Ln),Jf();break;case 5:Kf(c);break;case 4:Aa();break;case 13:Vt(jt);break;case 19:Vt(jt);break;case 10:$f(c.type._context);break;case 22:case 23:Ld()}s=s.return}if(gn=r,on=r=Zi(r.current,null),Sn=ur=o,fn=0,js=null,wd=Au=Uo=0,Jn=Ys=null,Po!==null){for(o=0;o<Po.length;o++)if(s=Po[o],c=s.interleaved,c!==null){s.interleaved=null;var h=c.next,_=s.pending;if(_!==null){var A=_.next;_.next=h,c.next=A}s.pending=c}Po=null}return r}function Mg(r,o){do{var s=on;try{if(Wf(),pu.current=_u,mu){for(var c=Yt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}mu=!1}if(Io=0,vn=cn=Yt=null,Hs=!1,Vs=0,Ed.current=null,s===null||s.return===null){fn=1,js=o,on=null;break}e:{var _=r,A=s.return,I=s,B=o;if(o=Sn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=B,Ee=I,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ge=qv(A);if(Ge!==null){Ge.flags&=-257,Kv(Ge,A,I,_,o),Ge.mode&1&&Yv(_,oe,o),o=Ge,B=oe;var je=o.updateQueue;if(je===null){var qe=new Set;qe.add(B),o.updateQueue=qe}else je.add(B);break e}else{if((o&1)===0){Yv(_,oe,o),Pd();break e}B=Error(t(426))}}else if(Xt&&I.mode&1){var nn=qv(A);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),Kv(nn,A,I,_,o),Vf(Ta(B,I));break e}}_=B=Ta(B,I),fn!==4&&(fn=2),Ys===null?Ys=[_]:Ys.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var K=Xv(_,B,o);yv(_,K);break e;case 1:I=B;var G=_.type,te=_.stateNode;if((_.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(ji===null||!ji.has(te)))){_.flags|=65536,o&=-o,_.lanes|=o;var Le=jv(_,I,o);yv(_,Le);break e}}_=_.return}while(_!==null)}bg(s)}catch(Ze){o=Ze,on===s&&s!==null&&(on=s=s.return);continue}break}while(!0)}function Ag(){var r=Mu.current;return Mu.current=_u,r===null?_u:r}function Pd(){(fn===0||fn===3||fn===2)&&(fn=4),gn===null||(Uo&268435455)===0&&(Au&268435455)===0||Ki(gn,Sn)}function Pu(r,o){var s=wt;wt|=2;var c=Ag();(gn!==r||Sn!==o)&&(xi=null,Fo(r,o));do try{lw();break}catch(h){Mg(r,h)}while(!0);if(Wf(),wt=s,Mu.current=c,on!==null)throw Error(t(261));return gn=null,Sn=0,fn}function lw(){for(;on!==null;)Tg(on)}function uw(){for(;on!==null&&!Je();)Tg(on)}function Tg(r){var o=Lg(r.alternate,r,ur);r.memoizedProps=r.pendingProps,o===null?bg(r):on=o,Ed.current=null}function bg(r){var o=r;do{var s=o.alternate;if(r=o.return,(o.flags&32768)===0){if(s=tw(s,o,ur),s!==null){on=s;return}}else{if(s=nw(s,o),s!==null){s.flags&=32767,on=s;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{fn=6,on=null;return}}if(o=o.sibling,o!==null){on=o;return}on=o=r}while(o!==null);fn===0&&(fn=5)}function Oo(r,o,s){var c=Pt,h=yr.transition;try{yr.transition=null,Pt=1,cw(r,o,s,c)}finally{yr.transition=h,Pt=c}return null}function cw(r,o,s,c){do La();while(Yi!==null);if((wt&6)!==0)throw Error(t(327));s=r.finishedWork;var h=r.finishedLanes;if(s===null)return null;if(r.finishedWork=null,r.finishedLanes=0,s===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var _=s.lanes|s.childLanes;if(WS(r,_),r===gn&&(on=gn=null,Sn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||bu||(bu=!0,Pg(zt,function(){return La(),null})),_=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||_){_=yr.transition,yr.transition=null;var A=Pt;Pt=1;var I=wt;wt|=4,Ed.current=null,iw(r,s),gg(s,r),LE(Pf),Vl=!!Lf,Pf=Lf=null,r.current=s,ow(s),it(),wt=I,Pt=A,yr.transition=_}else r.current=s;if(bu&&(bu=!1,Yi=r,Cu=h),_=r.pendingLanes,_===0&&(ji=null),vt(s.stateNode),Qn(r,$e()),o!==null)for(c=r.onRecoverableError,s=0;s<o.length;s++)h=o[s],c(h.value,{componentStack:h.stack,digest:h.digest});if(Tu)throw Tu=!1,r=Ad,Ad=null,r;return(Cu&1)!==0&&r.tag!==0&&La(),_=r.pendingLanes,(_&1)!==0?r===Td?qs++:(qs=0,Td=r):qs=0,Gi(),null}function La(){if(Yi!==null){var r=mm(Cu),o=yr.transition,s=Pt;try{if(yr.transition=null,Pt=16>r?16:r,Yi===null)var c=!1;else{if(r=Yi,Yi=null,Cu=0,(wt&6)!==0)throw Error(t(331));var h=wt;for(wt|=4,Xe=r.current;Xe!==null;){var _=Xe,A=_.child;if((Xe.flags&16)!==0){var I=_.deletions;if(I!==null){for(var B=0;B<I.length;B++){var oe=I[B];for(Xe=oe;Xe!==null;){var Ee=Xe;switch(Ee.tag){case 0:case 11:case 15:Xs(8,Ee,_)}var Te=Ee.child;if(Te!==null)Te.return=Ee,Xe=Te;else for(;Xe!==null;){Ee=Xe;var Se=Ee.sibling,Ge=Ee.return;if(dg(Ee),Ee===oe){Xe=null;break}if(Se!==null){Se.return=Ge,Xe=Se;break}Xe=Ge}}}var je=_.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var nn=qe.sibling;qe.sibling=null,qe=nn}while(qe!==null)}}Xe=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,Xe=A;else e:for(;Xe!==null;){if(_=Xe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Xs(9,_,_.return)}var K=_.sibling;if(K!==null){K.return=_.return,Xe=K;break e}Xe=_.return}}var G=r.current;for(Xe=G;Xe!==null;){A=Xe;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,Xe=te;else e:for(A=G;Xe!==null;){if(I=Xe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:wu(9,I)}}catch(Ze){Qt(I,I.return,Ze)}if(I===A){Xe=null;break e}var Le=I.sibling;if(Le!==null){Le.return=I.return,Xe=Le;break e}Xe=I.return}}if(wt=h,Gi(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(jn,r)}catch{}c=!0}return c}finally{Pt=s,yr.transition=o}}return!1}function Cg(r,o,s){o=Ta(s,o),o=Xv(r,o,1),r=$i(r,o,1),o=Gn(),r!==null&&(ys(r,1,o),Qn(r,o))}function Qt(r,o,s){if(r.tag===3)Cg(r,r,s);else for(;o!==null;){if(o.tag===3){Cg(o,r,s);break}else if(o.tag===1){var c=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ji===null||!ji.has(c))){r=Ta(s,r),r=jv(o,r,1),o=$i(o,r,1),r=Gn(),o!==null&&(ys(o,1,r),Qn(o,r));break}}o=o.return}}function fw(r,o,s){var c=r.pingCache;c!==null&&c.delete(o),o=Gn(),r.pingedLanes|=r.suspendedLanes&s,gn===r&&(Sn&s)===s&&(fn===4||fn===3&&(Sn&130023424)===Sn&&500>$e()-Md?Fo(r,0):wd|=s),Qn(r,o)}function Rg(r,o){o===0&&((r.mode&1)===0?o=1:(o=Ii,Ii<<=1,(Ii&130023424)===0&&(Ii=4194304)));var s=Gn();r=gi(r,o),r!==null&&(ys(r,o,s),Qn(r,s))}function dw(r){var o=r.memoizedState,s=0;o!==null&&(s=o.retryLane),Rg(r,s)}function hw(r,o){var s=0;switch(r.tag){case 13:var c=r.stateNode,h=r.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(o),Rg(r,s)}var Lg;Lg=function(r,o,s){if(r!==null)if(r.memoizedProps!==o.pendingProps||qn.current)Zn=!0;else{if((r.lanes&s)===0&&(o.flags&128)===0)return Zn=!1,ew(r,o,s);Zn=(r.flags&131072)!==0}else Zn=!1,Xt&&(o.flags&1048576)!==0&&uv(o,au,o.index);switch(o.lanes=0,o.tag){case 2:var c=o.type;Su(r,o),r=o.pendingProps;var h=_a(o,Ln.current);Ma(o,s),h=td(null,o,c,r,h,s);var _=nd();return o.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Kn(c)?(_=!0,ru(o)):_=!1,o.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Yf(o),h.updater=yu,o.stateNode=h,h._reactInternals=o,ld(o,c,r,s),o=dd(null,o,c,!0,_,s)):(o.tag=0,Xt&&_&&zf(o),Vn(null,o,h,s),o=o.child),o;case 16:c=o.elementType;e:{switch(Su(r,o),r=o.pendingProps,h=c._init,c=h(c._payload),o.type=c,h=o.tag=mw(c),r=Nr(c,r),h){case 0:o=fd(null,o,c,r,s);break e;case 1:o=ng(null,o,c,r,s);break e;case 11:o=Zv(null,o,c,r,s);break e;case 14:o=Jv(null,o,c,Nr(c.type,r),s);break e}throw Error(t(306,c,""))}return o;case 0:return c=o.type,h=o.pendingProps,h=o.elementType===c?h:Nr(c,h),fd(r,o,c,h,s);case 1:return c=o.type,h=o.pendingProps,h=o.elementType===c?h:Nr(c,h),ng(r,o,c,h,s);case 3:e:{if(rg(o),r===null)throw Error(t(387));c=o.pendingProps,_=o.memoizedState,h=_.element,_v(r,o),du(o,c,null,s);var A=o.memoizedState;if(c=A.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){h=Ta(Error(t(423)),o),o=ig(r,o,c,s,h);break e}else if(c!==h){h=Ta(Error(t(424)),o),o=ig(r,o,c,s,h);break e}else for(lr=ki(o.stateNode.containerInfo.firstChild),sr=o,Xt=!0,Ur=null,s=vv(o,null,c,s),o.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Sa(),c===h){o=yi(r,o,s);break e}Vn(r,o,c,s)}o=o.child}return o;case 5:return Sv(o),r===null&&Hf(o),c=o.type,h=o.pendingProps,_=r!==null?r.memoizedProps:null,A=h.children,Df(c,h)?A=null:_!==null&&Df(c,_)&&(o.flags|=32),tg(r,o),Vn(r,o,A,s),o.child;case 6:return r===null&&Hf(o),null;case 13:return og(r,o,s);case 4:return qf(o,o.stateNode.containerInfo),c=o.pendingProps,r===null?o.child=Ea(o,null,c,s):Vn(r,o,c,s),o.child;case 11:return c=o.type,h=o.pendingProps,h=o.elementType===c?h:Nr(c,h),Zv(r,o,c,h,s);case 7:return Vn(r,o,o.pendingProps,s),o.child;case 8:return Vn(r,o,o.pendingProps.children,s),o.child;case 12:return Vn(r,o,o.pendingProps.children,s),o.child;case 10:e:{if(c=o.type._context,h=o.pendingProps,_=o.memoizedProps,A=h.value,Bt(uu,c._currentValue),c._currentValue=A,_!==null)if(Ir(_.value,A)){if(_.children===h.children&&!qn.current){o=yi(r,o,s);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var I=_.dependencies;if(I!==null){A=_.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(_.tag===1){B=_i(-1,s&-s),B.tag=2;var oe=_.updateQueue;if(oe!==null){oe=oe.shared;var Ee=oe.pending;Ee===null?B.next=B:(B.next=Ee.next,Ee.next=B),oe.pending=B}}_.lanes|=s,B=_.alternate,B!==null&&(B.lanes|=s),Xf(_.return,s,o),I.lanes|=s;break}B=B.next}}else if(_.tag===10)A=_.type===o.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=s,I=A.alternate,I!==null&&(I.lanes|=s),Xf(A,s,o),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===o){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Vn(r,o,h.children,s),o=o.child}return o;case 9:return h=o.type,c=o.pendingProps.children,Ma(o,s),h=gr(h),c=c(h),o.flags|=1,Vn(r,o,c,s),o.child;case 14:return c=o.type,h=Nr(c,o.pendingProps),h=Nr(c.type,h),Jv(r,o,c,h,s);case 15:return Qv(r,o,o.type,o.pendingProps,s);case 17:return c=o.type,h=o.pendingProps,h=o.elementType===c?h:Nr(c,h),Su(r,o),o.tag=1,Kn(c)?(r=!0,ru(o)):r=!1,Ma(o,s),Wv(o,c,h),ld(o,c,h,s),dd(null,o,c,!0,r,s);case 19:return sg(r,o,s);case 22:return eg(r,o,s)}throw Error(t(156,o.tag))};function Pg(r,o){return le(r,o)}function pw(r,o,s,c){this.tag=r,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xr(r,o,s,c){return new pw(r,o,s,c)}function Dd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function mw(r){if(typeof r=="function")return Dd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===re)return 11;if(r===ee)return 14}return 2}function Zi(r,o){var s=r.alternate;return s===null?(s=xr(r.tag,o,r.key,r.mode),s.elementType=r.elementType,s.type=r.type,s.stateNode=r.stateNode,s.alternate=r,r.alternate=s):(s.pendingProps=o,s.type=r.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=r.flags&14680064,s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,o=r.dependencies,s.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},s.sibling=r.sibling,s.index=r.index,s.ref=r.ref,s}function Du(r,o,s,c,h,_){var A=2;if(c=r,typeof r=="function")Dd(r)&&(A=1);else if(typeof r=="string")A=5;else e:switch(r){case F:return zo(s.children,h,_,o);case ce:A=8,h|=8;break;case b:return r=xr(12,s,o,h|2),r.elementType=b,r.lanes=_,r;case pe:return r=xr(13,s,o,h),r.elementType=pe,r.lanes=_,r;case H:return r=xr(19,s,o,h),r.elementType=H,r.lanes=_,r;case ie:return Iu(s,h,_,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:A=10;break e;case he:A=9;break e;case re:A=11;break e;case ee:A=14;break e;case fe:A=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=xr(A,s,o,h),o.elementType=r,o.type=c,o.lanes=_,o}function zo(r,o,s,c){return r=xr(7,r,c,o),r.lanes=s,r}function Iu(r,o,s,c){return r=xr(22,r,c,o),r.elementType=ie,r.lanes=s,r.stateNode={isHidden:!1},r}function Id(r,o,s){return r=xr(6,r,null,o),r.lanes=s,r}function Ud(r,o,s){return o=xr(4,r.children!==null?r.children:[],r.key,o),o.lanes=s,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function vw(r,o,s,c,h){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Nd(r,o,s,c,h,_,A,I,B){return r=new vw(r,o,s,I,B),o===1?(o=1,_===!0&&(o|=8)):o=0,_=xr(3,null,null,o),r.current=_,_.stateNode=r,_.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(_),r}function gw(r,o,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:r,containerInfo:o,implementation:s}}function Dg(r){if(!r)return Vi;r=r._reactInternals;e:{if(fi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Kn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var s=r.type;if(Kn(s))return av(r,s,o)}return o}function Ig(r,o,s,c,h,_,A,I,B){return r=Nd(s,c,!0,r,h,_,A,I,B),r.context=Dg(null),s=r.current,c=Gn(),h=qi(s),_=_i(c,h),_.callback=o??null,$i(s,_,h),r.current.lanes=h,ys(r,h,c),Qn(r,c),r}function Uu(r,o,s,c){var h=o.current,_=Gn(),A=qi(h);return s=Dg(s),o.context===null?o.context=s:o.pendingContext=s,o=_i(_,A),o.payload={element:r},c=c===void 0?null:c,c!==null&&(o.callback=c),r=$i(h,o,A),r!==null&&(zr(r,h,A,_),fu(r,h,A)),A}function Nu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Ug(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var s=r.retryLane;r.retryLane=s!==0&&s<o?s:o}}function Fd(r,o){Ug(r,o),(r=r.alternate)&&Ug(r,o)}function _w(){return null}var Ng=typeof reportError=="function"?reportError:function(r){console.error(r)};function Od(r){this._internalRoot=r}Fu.prototype.render=Od.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));Uu(r,o,null,null)},Fu.prototype.unmount=Od.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;No(function(){Uu(null,r,null,null)}),o[hi]=null}};function Fu(r){this._internalRoot=r}Fu.prototype.unstable_scheduleHydration=function(r){if(r){var o=_m();r={blockedOn:null,target:r,priority:o};for(var s=0;s<Oi.length&&o!==0&&o<Oi[s].priority;s++);Oi.splice(s,0,r),s===0&&Sm(r)}};function zd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ou(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function yw(r,o,s,c,h){if(h){if(typeof c=="function"){var _=c;c=function(){var oe=Nu(A);_.call(oe)}}var A=Ig(o,c,r,0,null,!1,!1,"",Fg);return r._reactRootContainer=A,r[hi]=A.current,Is(r.nodeType===8?r.parentNode:r),No(),A}for(;h=r.lastChild;)r.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var oe=Nu(B);I.call(oe)}}var B=Nd(r,0,!1,null,null,!1,!1,"",Fg);return r._reactRootContainer=B,r[hi]=B.current,Is(r.nodeType===8?r.parentNode:r),No(function(){Uu(o,B,s,c)}),B}function zu(r,o,s,c,h){var _=s._reactRootContainer;if(_){var A=_;if(typeof h=="function"){var I=h;h=function(){var B=Nu(A);I.call(B)}}Uu(o,A,r,h)}else A=yw(s,o,r,h,c);return Nu(A)}vm=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var s=Jt(o.pendingLanes);s!==0&&(lf(o,s|1),Qn(o,$e()),(wt&6)===0&&(Ra=$e()+500,Gi()))}break;case 13:No(function(){var c=gi(r,1);if(c!==null){var h=Gn();zr(c,r,1,h)}}),Fd(r,1)}},uf=function(r){if(r.tag===13){var o=gi(r,134217728);if(o!==null){var s=Gn();zr(o,r,134217728,s)}Fd(r,134217728)}},gm=function(r){if(r.tag===13){var o=qi(r),s=gi(r,o);if(s!==null){var c=Gn();zr(s,r,o,c)}Fd(r,o)}},_m=function(){return Pt},ym=function(r,o){var s=Pt;try{return Pt=r,o()}finally{Pt=s}},mt=function(r,o,s){switch(o){case"input":if(xe(r,s),o=s.name,s.type==="radio"&&o!=null){for(s=r;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<s.length;o++){var c=s[o];if(c!==r&&c.form===r.form){var h=tu(c);if(!h)throw Error(t(90));X(c),xe(c,h)}}}break;case"textarea":T(r,s);break;case"select":o=s.value,o!=null&&Ie(r,!!s.multiple,o,!1)}},rt=Rd,xt=No;var xw={usingClientEntryPoint:!1,Events:[Fs,va,tu,me,Ue,Rd]},Ks={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sw={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ue(r),r===null?null:r.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||_w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{jn=Bu.inject(Sw),Et=Bu}catch{}}return er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw,er.createPortal=function(r,o){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(o))throw Error(t(200));return gw(r,o,null,s)},er.createRoot=function(r,o){if(!zd(r))throw Error(t(299));var s=!1,c="",h=Ng;return o!=null&&(o.unstable_strictMode===!0&&(s=!0),o.identifierPrefix!==void 0&&(c=o.identifierPrefix),o.onRecoverableError!==void 0&&(h=o.onRecoverableError)),o=Nd(r,1,!1,null,null,s,!1,c,h),r[hi]=o.current,Is(r.nodeType===8?r.parentNode:r),new Od(o)},er.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ue(o),r=r===null?null:r.stateNode,r},er.flushSync=function(r){return No(r)},er.hydrate=function(r,o,s){if(!Ou(o))throw Error(t(200));return zu(null,r,o,!0,s)},er.hydrateRoot=function(r,o,s){if(!zd(r))throw Error(t(405));var c=s!=null&&s.hydratedSources||null,h=!1,_="",A=Ng;if(s!=null&&(s.unstable_strictMode===!0&&(h=!0),s.identifierPrefix!==void 0&&(_=s.identifierPrefix),s.onRecoverableError!==void 0&&(A=s.onRecoverableError)),o=Ig(o,null,r,1,s??null,h,!1,_,A),r[hi]=o.current,Is(r),c)for(r=0;r<c.length;r++)s=c[r],h=s._getVersion,h=h(s._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[s,h]:o.mutableSourceEagerHydrationData.push(s,h);return new Fu(o)},er.render=function(r,o,s){if(!Ou(o))throw Error(t(200));return zu(null,r,o,!1,s)},er.unmountComponentAtNode=function(r){if(!Ou(r))throw Error(t(40));return r._reactRootContainer?(No(function(){zu(null,null,r,!1,function(){r._reactRootContainer=null,r[hi]=null})}),!0):!1},er.unstable_batchedUpdates=Rd,er.unstable_renderSubtreeIntoContainer=function(r,o,s,c){if(!Ou(s))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return zu(r,o,s,!1,c)},er.version="18.3.1-next-f1338f8080-20240426",er}var Wg;function Lw(){if(Wg)return Hd.exports;Wg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Hd.exports=Rw(),Hd.exports}var $g;function Pw(){if($g)return ku;$g=1;var n=Lw();return ku.createRoot=n.createRoot,ku.hydrateRoot=n.hydrateRoot,ku}var Dw=Pw();const Iw=ww(Dw);var co=yp(),Uw={compose:function(n){return function(e){return function(t){return n(e(t))}}}},Nw=function(n){return n.compose},Lr=function(n){return n.identity},Pr={identity:function(n){return n}},Fw=function(n){return function(e){return function(t){return function(i){return n(e(t))(e(i))}}}},oi=function(n){return function(e){return function(t){return n(t)(e)}}},Ft=function(n){return function(e){return n}};const Ow=function(n){return function(e){for(var t=e.length,i=new Array(t),a=0;a<t;a++)i[a]=n(e[a]);return i}},zn=void 0;var Lt=(function(){function n(){}return n.value=new n,n})(),Ot=function(n){return n.map},zw=function(n){var e=Ot(n);return function(t){return function(i){return e(i)(t)}}},ry=function(n){return Ot(n)(Ft(zn))},Bw={map:Nw(Uw)},xl={map:Ow},hs=function(n){return n.apply},Mt=function(n){return n.pure},xp=function(n){var e=Mt(n);return function(t){return function(i){if(t)return i;if(!t)return e(zn);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,i.constructor.name])}}},kw=function(n){var e=hs(n.Apply0()),t=Mt(n);return function(i){return function(a){return e(t(i))(a)}}};const Hw=typeof Array.prototype.flatMap=="function"?function(n){return function(e){return n.flatMap(e)}}:function(n){return function(e){for(var t=[],i=n.length,a=0;a<i;a++)for(var l=e(n[a]),f=l.length,u=0;u<f;u++)t.push(l[u]);return t}};var Nc=function(n){return n.discard},Vw={bind:Hw},pn=function(n){return n.bind},Sp=function(n){return oi(pn(n))},iy=function(n){var e=Sp(n);return function(t){return function(i){return function(a){return e(t)(i(a))}}}},Gw=function(n){var e=pn(n);return function(t){return function(i){return function(a){return e(t(a))(i)}}}},Fc={discard:function(n){return pn(n)}};const Ww=function(n){return function(e){return n.length===0?e:e.length===0?n:n.concat(e)}};var jr=function(n){return n.reflectSymbol};const Ep=function(n){return function(e){return e[n]}},wp=function(n){return function(e){return function(t){var i={};for(var a in t)({}).hasOwnProperty.call(t,a)&&(i[a]=t[a]);return i[n]=e,i}}},$w=function(n){return function(e){var t={};for(var i in e)i!==n&&{}.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}};var Sl={append:Ww},Dr=function(n){return n.append},Xw=function(n){var e=Dr(n);return{append:function(t){return function(i){return function(a){return e(t(a))(i(a))}}}}},jw=function(n){return n.alt},oy=function(n){return function(e){return n===e}};const Yw=oy,qw=oy,Kw=function(n){return function(e){return function(t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!n(e[i])(t[i]))return!1;return!0}}};var Za={eq:qw},Zw={eqRecord:function(n){return function(e){return function(t){return!0}}}},ay=function(n){return n.eqRecord},Jw=function(){return function(n){return{eq:ay(n)(Lt.value)}}},Qw={eq:Yw},ui=function(n){return n.eq},eM=ui(Qw),Mc=function(n){return{eq:Kw(ui(n))}},Wd=function(n){var e=ay(n);return function(){return function(t){var i=jr(t);return function(a){var l=ui(a);return{eqRecord:function(f){return function(u){return function(d){var p=e(Lt.value)(u)(d),m=i(Lt.value),v=Ep(m);return l(v(u))(v(d))&&p}}}}}}}},sy=function(n){var e=ui(n);return function(t){return function(i){return eM(e(t)(i))(!1)}}},Vh=(function(){function n(){}return n.value=new n,n})(),Gh=(function(){function n(){}return n.value=new n,n})(),Ac=(function(){function n(){}return n.value=new n,n})(),tM={eq:function(n){return function(e){return n instanceof Vh&&e instanceof Vh||n instanceof Gh&&e instanceof Gh||n instanceof Ac&&e instanceof Ac}}},nM=function(n){return n.compare};const rM=function(n){return n.toString()},iM=function(n){var e=n.length;return'"'+n.replace(/[\0-\x1F\x7F"\\]/g,function(t,i){switch(t){case'"':case"\\":return"\\"+t;case"\x07":return"\\a";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v"}var a=i+1,l=a<e&&n[a]>="0"&&n[a]<="9"?"\\&":"";return"\\"+t.charCodeAt(0).toString(10)+l})+'"'};var oM={show:iM},Mp={show:rM},ra=function(n){return n.show},sn=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),He=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),tr=(function(){function n(){}return n.value=new n,n})(),aM=function(n){return n.to},Ap=function(n){return n.from},sM=Lr(Pr),Dt=(function(){function n(){}return n.value=new n,n})(),bt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ps=function(n){return function(e){return function(t){if(t instanceof Dt)return n;if(t instanceof bt)return e(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},Oc={map:function(n){return function(e){return e instanceof bt?new bt(n(e.value0)):Dt.value}}},lM=Ot(Oc),uM=function(n){return ps(n)(sM)},ly={apply:function(n){return function(e){if(n instanceof bt)return lM(n.value0)(e);if(n instanceof Dt)return Dt.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return Oc}},uy={bind:function(n){return function(e){if(n instanceof bt)return e(n.value0);if(n instanceof Dt)return Dt.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[n.constructor.name,e.constructor.name])}}},cM=(function(){return{pure:bt.create,Apply0:function(){return ly}}})(),lt=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ht=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),rs=function(n){return ps(new lt(n))(ht.create)},ia={map:function(n){return function(e){if(e instanceof lt)return new lt(e.value0);if(e instanceof ht)return new ht(n(e.value0));throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},fM=Ot(ia),El=function(n){return function(e){return function(t){if(t instanceof lt)return n(t.value0);if(t instanceof ht)return e(t.value0);throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}},cy={apply:function(n){return function(e){if(n instanceof lt)return new lt(n.value0);if(n instanceof ht)return fM(n.value0)(e);throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): "+[n.constructor.name,e.constructor.name])}},Functor0:function(){return ia}},wl={bind:El(function(n){return function(e){return new lt(n)}})(function(n){return function(e){return e(n)}}),Apply0:function(){return cy}},oa=(function(){return{pure:ht.create,Apply0:function(){return cy}}})();const dM=function(n){return function(){return n}},hM=function(n){return function(e){return function(){return e(n())()}}};var Tp=function(n){var e=pn(n.Bind1()),t=Mt(n.Applicative0());return function(i){return function(a){return e(i)(function(l){return e(a)(function(f){return t(l(f))})})}}},fy={mempty:[],Semigroup0:function(){return Sl}},ms=function(n){return n.mempty},pM=function(n){var e=ms(n),t=Xw(n.Semigroup0());return{mempty:function(i){return e},Semigroup0:function(){return t}}},dy=function(n,e,t){var i=0,a;return function(l){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+l+")",e,l);return i=1,a=t(),i=2,a}},mM={Applicative0:function(){return bp},Bind1:function(){return vM}},vM={bind:hM,Apply0:function(){return py(0)}},bp={pure:dM,Apply0:function(){return py(0)}},hy=dy("functorEffect","Effect",function(){return{map:kw(bp)}}),py=dy("applyEffect","Effect",function(){return{apply:Tp(mM),Functor0:function(){return hy(0)}}}),gM=hy(20);function my(n){return n.message}var Ml=function(n){return n.throwError},Cp=function(n){return n.catchError},_M=function(n){var e=Cp(n),t=n.MonadThrow0().Monad0(),i=Ot(t.Bind1().Apply0().Functor0()),a=Mt(t.Applicative0());return function(l){return e(i(ht.create)(l))(function(f){return a(lt.create(f))})}},yM=function(n){return n},xM={map:function(n){return function(e){return n(e)}}},vy={apply:function(n){return function(e){return n(e)}},Functor0:function(){return xM}},gy={bind:function(n){return function(e){return e(n)}},Apply0:function(){return vy}},_y={pure:yM,Apply0:function(){return vy}},So={Applicative0:function(){return _y},Bind1:function(){return gy}};const Al=function(n){return n},SM=function(n){return function(e){return function(){return n(e())}}},EM=function(n){return function(e){return function(){for(var t=0,i=n.length;t<i;t++)e(n[t])()}}};var wM={map:SM};const MM=function(n){return function(e){return n&&e}},AM=function(n){return function(e){return n||e}},TM=function(n){return!n};var bM=function(n){return n.not},CM=function(n){return n.ff},yy=function(n){return n.disj},Wh={ff:!1,tt:!0,implies:function(n){return function(e){return yy(Wh)(bM(Wh)(n))(e)}},conj:MM,disj:AM,not:TM},Wt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Rp={map:function(n){return function(e){return new Wt(e.value0,n(e.value1))}}},RM=function(n){return n.value0},LM=function(n){var e=Dr(n);return{apply:function(t){return function(i){return new Wt(e(t.value0)(i.value0),t.value1(i.value1))}},Functor0:function(){return Rp}}},PM=function(n){var e=LM(n.Semigroup0());return{pure:Wt.create(ms(n)),Apply0:function(){return e}}},xy=function(n){return n.lift},DM=function(n){return n.tell},IM={liftEffect:Lr(Pr)},zc=function(n){return n.liftEffect},UM=Ot(ia),Sy=function(n){return n},Lp=function(n){return n},Ey={lift:function(n){var e=pn(n.Bind1()),t=Mt(n.Applicative0());return function(i){return e(i)(function(a){return t(new ht(a))})}}},NM=xy(Ey),FM=function(n){return function(e){return n(e)}},wy=function(n){var e=Ot(n);return{map:function(t){return FM(e(UM(t)))}}},Pp=function(n){return{Applicative0:function(){return Eo(n)},Bind1:function(){return Tl(n)}}},Tl=function(n){var e=pn(n.Bind1()),t=Mt(n.Applicative0());return{bind:function(i){return function(a){return e(i)(El(function(l){return t(lt.create(l))})(function(l){var f=a(l);return f}))}},Apply0:function(){return My(n)}}},My=function(n){var e=wy(n.Bind1().Apply0().Functor0());return{apply:Tp(Pp(n)),Functor0:function(){return e}}},Eo=function(n){return{pure:(function(){var e=Mt(n.Applicative0());return function(t){return Sy(e(ht.create(t)))}})(),Apply0:function(){return My(n)}}},Dp=function(n){var e=n.Monad0(),t=Pp(e);return{liftEffect:(function(){var i=NM(e),a=zc(n);return function(l){return i(a(l))}})(),Monad0:function(){return t}}},Bc=function(n){var e=Pp(n);return{throwError:(function(){var t=Mt(n.Applicative0());return function(i){return Sy(t(lt.create(i)))}})(),Monad0:function(){return e}}},Ip=function(n){var e=pn(n.Bind1()),t=Mt(n.Applicative0()),i=Bc(n);return{catchError:function(a){return function(l){return e(a)(El(function(f){var u=l(f);return u})(function(f){return t(ht.create(f))}))}},MonadThrow0:function(){return i}}},OM=function(n){var e=Dr(n);return function(t){var i=t.Bind1(),a=pn(i),l=Mt(t.Applicative0()),f=wy(i.Apply0().Functor0());return{alt:function(u){return function(d){return a(u)(function(p){if(p instanceof ht)return l(new ht(p.value0));if(p instanceof lt)return a(d)(function(m){if(m instanceof ht)return l(new ht(m.value0));if(m instanceof lt)return l(new lt(e(p.value0)(m.value0)));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): "+[m.constructor.name])});throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): "+[p.constructor.name])})}},Functor0:function(){return f}}}},Ay=function(){return Al},Up=Ay(),zM=function(){return Up},bl=function(){return Up},BM=function(){return function(){return function(){return function(){return function(n){return Up}}}}},kM=bl(),Np=function(n){return kM(Lp(n))},HM=Lr(Pr),VM=function(n){return n.bimap},Ty=function(n){var e=VM(n);return function(t){return e(t)(HM)}},by={bimap:function(n){return function(e){return function(t){if(t instanceof lt)return new lt(n(t.value0));if(t instanceof ht)return new ht(e(t.value0));throw new Error("Failed pattern match at Data.Bifunctor (line 38, column 1 - line 40, column 36): "+[n.constructor.name,e.constructor.name,t.constructor.name])}}}},GM=Ot(Rp),kc=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Cy=function(n){var e=Ot(n);return{dimap:function(t){return function(i){return function(a){return new kc((function(){var l=e(i);return function(f){return l(a.value0(f))}})(),(function(){var l=GM(i);return function(f){return l(a.value1(t(f)))}})())}}}}},en=function(n){return function(e){return RM(n.value1(e))}},Cn=function(n){return n.value0},Hc=function(n){return function(e){return new kc(n,function(t){return new Wt(e(t),t)})}},WM=function(n){return function(e){return new kc(n,function(t){return new Wt(e(t),t)})}};function Fp(n){return n}function Ry(n){return JSON.stringify(n)}function $d(n){return Object.prototype.toString.call(n)==="[object Array]"}function Vc(n,e,t,i,a,l,f){return f==null?n():typeof f=="boolean"?e(f):typeof f=="number"?t(f):typeof f=="string"?i(f):Object.prototype.toString.call(f)==="[object Array]"?a(f):l(f)}function $h(n,e,t,i,a){if(i==null)return a==null?n:t;if(typeof i=="boolean")return typeof a=="boolean"?i===a?n:i===!1?t:e:a==null?e:t;if(typeof i=="number")return typeof a=="number"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"?e:t;if(typeof i=="string")return typeof a=="string"?i===a?n:i<a?t:e:a==null||typeof a=="boolean"||typeof a=="number"?e:t;if($d(i))if($d(a)){for(var l=0;l<Math.min(i.length,a.length);l++){var f=$h(n,e,t,i[l],a[l]);if(f!==n)return f}return i.length===a.length?n:i.length<a.length?t:e}else return a==null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"?e:t;else{if(a==null)return e;if(typeof a=="boolean")return e;if(typeof a=="number")return e;if(typeof a=="string")return e;if($d(a))return e;var u=Object.keys(i),d=Object.keys(a);if(u.length<d.length)return t;if(u.length>d.length)return e;for(var p=u.concat(d).sort(),m=0;m<p.length;m++){var v=p[m];if(i[v]===void 0)return t;if(a[v]===void 0)return e;var g=$h(n,e,t,i[v],a[v]);if(g!==n)return g}return n}}const $M={};function XM(n){return n()}function jM(n,e,t,i){return t in i?e(i[t]):n}const YM=(function(){function n(a,l){this.head=a,this.tail=l}var e={};function t(a){return function(l){return new n(a,l)}}function i(a){for(var l=[],f=0,u=a;u!==e;)l[f++]=u.head,u=u.tail;return l}return function(a,l){return i(a(t)(e)(l))}})(),qM=function(n){return n.length},KM=function(n,e,t,i){return i<0||i>=t.length?e:n(t[i])},ZM=function(n,e,t){return t.slice(n,e)};function JM(n){return n}const QM=JM;function e1(n){return n.slice()}const t1=e1,n1=function(n,e){return e.push(n)},Ly=function(e){return function(t){return function(){return e(t)}}},r1=function(e){return function(t){return function(i){return function(){return e(t,i)}}}};var i1=Ly(QM),o1=Ly(t1),a1=function(n){return function(e){return function(){var i=o1(e)();return n(i)(),i1(i)()}}},s1=r1(n1);const l1=function(n){return function(e){return function(t){for(var i=e,a=t.length,l=a-1;l>=0;l--)i=n(t[l])(i);return i}}},u1=function(n){return function(e){return function(t){for(var i=e,a=t.length,l=0;l<a;l++)i=n(i)(t[l]);return i}}};var c1=function(n){return n.empty},f1={append:function(n){return function(e){return n instanceof bt?n:e}}},d1=(function(){return{mempty:Dt.value,Semigroup0:function(){return f1}}})(),h1=function(n){return n},p1=function(n){var e=yy(n);return{append:function(t){return function(i){return e(t)(i)}}}},m1=function(n){var e=p1(n);return{mempty:CM(n),Semigroup0:function(){return e}}},v1=bl(),g1=BM()()()(),Gc=function(n){return n.foldr},Op=function(n){return n.foldl},_1=function(n){var e=Gc(n);return function(t){var i=Dr(t.Semigroup0()),a=ms(t);return function(l){return e(function(f){return function(u){return i(l(f))(u)}})(a)}}},Pi={foldr:l1,foldl:u1,foldMap:function(n){return _1(Pi)(n)}},Py=function(n){return n.foldMap},y1=function(n){var e=Py(n)(d1);return function(t){var i=ui(t);return function(a){var l=e(function(f){var u=i(a)(f.value0);return u?new bt(f.value1):Dt.value});return function(f){return v1(l(f))}}}},x1=function(n){var e=Py(n);return function(t){return g1(h1)(e(m1(t)))}};const S1=function(n){return function(e){return function(t){return n(e,t)}}},zp=function(n){return function(e){return function(t){return function(i){return n(e,t,i)}}}},Dy=function(n){return function(e){return function(t){return function(i){return function(a){return n(e,t,i,a)}}}}},E1=function(n){return function(e){for(var t=e.length,i=Array(t),a=0;a<t;a++)i[a]=n(a)(e[a]);return i}};var Iy=function(n){return n.mapWithIndex},Uy={mapWithIndex:E1,Functor0:function(){return xl}};const w1=(function(){function n(a){return[a]}function e(a){return function(l){return[a,l]}}function t(a){return function(l){return function(f){return[a,l,f]}}}function i(a){return function(l){return a.concat(l)}}return function(a){return function(l){return function(f){return function(u){return function(d){function p(m,v){switch(v-m){case 0:return f([]);case 1:return l(n)(u(d[m]));case 2:return a(l(e)(u(d[m])))(u(d[m+1]));case 3:return a(a(l(t)(u(d[m])))(u(d[m+1])))(u(d[m+2]));default:var g=m+Math.floor((v-m)/4)*2;return a(l(i)(p(m,g)))(p(g,v))}}return p(0,d.length)}}}}}})();var M1=Lr(Pr),Bp=function(n){return n.traverse},A1=function(n){var e=Bp(n);return function(t){return e(t)(M1)}},Wc={traverse:function(n){var e=n.Apply0();return w1(hs(e))(Ot(e.Functor0()))(Mt(n))},sequence:function(n){return A1(Wc)(n)},Functor0:function(){return xl},Foldable1:function(){return Pi}},T1=function(n){return n.sequence},b1=Dr(Sl),C1=function(n){return function(e){return a1(s1(e))(n)()}},R1=zp(ZM),L1=function(n){return[n]},P1=(function(){return Dy(KM)(bt.create)(Dt.value)})(),D1=function(n){return P1(n)(0)},I1=function(n){return S1(YM)(Gc(n))},U1=function(n){return function(e){return R1(n)(qM(e))(e)}},N1=function(n){return function(e){return b1([n])(e)}},F1=oi(pn(Vw)),O1=function(n){return F1((function(){var e=ps([])(L1);return function(t){return e(n(t))}})())},z1=O1(Lr(Pr)),B1=Gc(Pi),Xg=Iy(Uy),k1=Op(Pi),H1=function(n){return n.foldrWithIndex},V1=function(n){var e=H1(n);return function(t){var i=Dr(t.Semigroup0()),a=ms(t);return function(l){return e(function(f){return function(u){return function(d){return i(l(f)(u))(d)}}})(a)}}},Ny={foldrWithIndex:function(n){return function(e){var t=B1(function(a){return function(l){return n(a.value0)(a.value1)(l)}})(e),i=Xg(Wt.create);return function(a){return t(i(a))}}},foldlWithIndex:function(n){return function(e){var t=k1(function(a){return function(l){return n(l.value0)(a)(l.value1)}})(e),i=Xg(Wt.create);return function(a){return t(i(a))}}},foldMapWithIndex:function(n){return V1(Ny)(n)},Foldable0:function(){return Pi}},G1=function(n){var e=T1(n.Traversable2()),t=Iy(n.FunctorWithIndex0());return function(i){var a=e(i);return function(l){var f=t(l);return function(u){return a(f(u))}}}},W1=function(n){return n.traverseWithIndex},Fy={traverseWithIndex:function(n){return G1(Fy)(n)},FunctorWithIndex0:function(){return Uy},FoldableWithIndex1:function(){return Ny},Traversable2:function(){return Wc}};const $1=function(){return{}};function X1(n){return function(e){return function(t){return function(){return t[n]=e,t}}}}var j1=ry(wM),is=(function(){return Dy(jM)(Dt.value)(bt.create)})(),Oy=function(n){var e=I1(n);return function(t){return XM(function(){var a=$1();return EM(e(t))(function(l){return j1(X1(l.value0)(l.value1)(a))})(),a})}},Y1=ui(tM),q1=function(n){return function(e){return function(t){return t(n)(e)}}},$c=(function(){return q1(Dt.value)(bt.create)})(),K1=$M,Z1={compare:function(n){return function(e){return $h(Ac.value,Gh.value,Vh.value,n,e)}}},J1={eq:function(n){return function(e){return Y1(nM(Z1)(n)(e))(Ac.value)}}},Q1=function(n){return function(e){return function(t){return Vc(Ft(n),Ft(n),Ft(n),e,Ft(n),Ft(n),t)}}},eA=$c(Q1),tA=function(n){return function(e){return function(t){return Vc(Ft(n),Ft(n),Ft(n),Ft(n),Ft(n),e,t)}}},nA=$c(tA),rA=function(n){return function(e){return function(t){return Vc(Ft(n),Ft(n),e,Ft(n),Ft(n),Ft(n),t)}}},iA=$c(rA),oA=function(n){return function(e){return function(t){return Vc(Ft(n),Ft(n),Ft(n),Ft(n),e,Ft(n),t)}}},aA=$c(oA);const sA=function(n){return function(e){return function(t){return(t|0)===t?n(t):e}}},lA=function(n){return n};var uA=(function(){return sA(bt.create)(Dt.value)})(),zy=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),cA=function(n){var e=c1(n);return function(t){return new zy(t,e)}},Gr=(function(){function n(){}return n.value=new n,n})(),qt=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),fA=function(n){return n},dA=function(n){return new qt(n.value0,n.value1)},hA=function(n){var e=function(t){return function(i){var a=t,l=!1,f;function u(d,p){if(p instanceof qt&&p.value1 instanceof qt&&p.value1.value1 instanceof qt){a=new qt(p,d),i=p.value1.value1.value1;return}var m=function(g){return g instanceof qt&&g.value1 instanceof qt&&g.value1.value1 instanceof Gr?new qt(n(g.value0),new qt(n(g.value1.value0),Gr.value)):g instanceof qt&&g.value1 instanceof Gr?new qt(n(g.value0),Gr.value):Gr.value},v=function(g){return function(S){var E=g,w=!1,x;function y(R,M){if(R instanceof qt&&R.value0 instanceof qt&&R.value0.value1 instanceof qt&&R.value0.value1.value1 instanceof qt){E=R.value1,S=new qt(n(R.value0.value0),new qt(n(R.value0.value1.value0),new qt(n(R.value0.value1.value1.value0),M)));return}return w=!0,M}for(;!w;)x=y(E,S);return x}};return l=!0,v(d)(m(p))}for(;!l;)f=u(a,i);return f}};return e(Gr.value)},pA={map:hA},kp={foldr:function(n){return function(e){var t=(function(){var a=function(l){return function(f){var u=l,d=!1,p;function m(v,g){if(g instanceof Gr)return d=!0,v;if(g instanceof qt){u=new qt(g.value0,v),f=g.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[v.constructor.name,g.constructor.name])}for(;!d;)p=m(u,f);return p}};return a(Gr.value)})(),i=Op(kp)(oi(n))(e);return function(a){return i(t(a))}}},foldl:function(n){var e=function(t){return function(i){var a=t,l=!1,f;function u(d,p){if(p instanceof Gr)return l=!0,d;if(p instanceof qt){a=n(d)(p.value0),i=p.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[p.constructor.name])}for(;!l;)f=u(a,i);return f}};return e}},mA=Gc(kp),By={append:function(n){return function(e){return mA(qt.create)(e)(n)}}},ky=Dr(By),vA=(function(){return{mempty:Gr.value,Semigroup0:function(){return By}}})(),gA={append:function(n){return function(e){return new zy(n.value0,ky(n.value1)(dA(e)))}}},_A={alt:ky,Functor0:function(){return pA}},yA=(function(){return{empty:Gr.value,Alt0:function(){return _A}}})();const xA=function(n){return n.length},SA=function(n){return function(e){return function(t){return function(i){var a=i.indexOf(t);return a===-1?e:n(a)}}}},EA=function(n){return function(e){return e.substr(0,n)}},wA=function(n){return function(e){return e.substring(n)}};var MA=(function(){return SA(bt.create)(Dt.value)})();const Hy=function(n){return function(e){return e.split(n)}},AA=function(n){return function(e){return e.join(n)}};var TA=ra(Mp),jg=pn(wl),Hp=Ty(by),Vp=Mt(oa),Vy=Sp(wl),bA=Oy(kp),CA=iy(uy),RA=W1(Fy)(oa),LA=Ot(xl),ai=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),PA=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Gy=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Wy=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Gp=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),$y=(function(){function n(){}return n.value=new n,n})(),DA=function(n){var e=jr(n);return function(){return function(t){return function(i){return function(a){var l=function(d){return function(p){return new qt(new Wt(d,en(i)(Ep(d)(p))),en(a)(p))}},f=function(d){return function(p){return jg(Cn(a)(p))(function(m){return jg(Hp(Wy.create(d))((function(){var v=is(d)(p);if(v instanceof bt)return Cn(i)(v.value0);if(v instanceof Dt)return new lt($y.value);throw new Error("Failed pattern match at Data.Codec.Argonaut (line 264, column 29 - line 266, column 34): "+[v.constructor.name])})()))(function(v){return Vp(wp(d)(v)(m))})})}},u=e(t);return WM(f(u))(l(u))}}}}},IA=(function(){return new kc(Ft(Vp({})),Mt(PM(vA)))})(),UA=function(n){var e=function(t){if(t instanceof ai)return"  Expected value of type '"+(t.value0+"'.");if(t instanceof PA)return"  Unexpected value "+(Ry(t.value0)+".");if(t instanceof Gy)return"  At array index "+(TA(t.value0)+(`:
`+e(t.value1)));if(t instanceof Wy)return"  At object key "+(t.value0+(`:
`+e(t.value1)));if(t instanceof Gp)return"  Under '"+(t.value0+(`':
`+e(t.value1)));if(t instanceof $y)return"  No value was found.";throw new Error("Failed pattern match at Data.Codec.Argonaut (line 90, column 8 - line 96, column 43): "+[t.constructor.name])};return`An error occurred while decoding a JSON value:
`+e(n)},Xc=function(n){return function(e){return Hc((function(){var t=ps(new lt(new ai(n)))(Vp);return function(i){return t(e(i))}})())}},Ar=Xc("String")(eA)(Fp),vo=Xc("Object")(nA)(Fp),NA=function(n){return function(e){return Hc(function(t){return Hp(Gp.create(n))(Vy(Cn(e))(Cn(vo)(t)))})(function(t){return en(vo)(bA(en(e)(t)))})}},fo=Xc("Array")(aA)(Fp),Tc=Xc("Int")(CA(uA)(iA))(function(n){return lA(n)}),jc=function(n){return Hc(function(e){return Vy(RA(function(t){return function(i){return Hp(Gy.create(t))(Cn(n)(i))}}))(Cn(fo)(e))})(function(e){return LA(en(n))(e)})},FA=function(n){var e=jr(n);return function(){return function(){return function(t){return function(i){return function(a){return wp(e(t))(i)(a)}}}}}},Xy=function(n){var e=jr(n);return function(){return function(){return function(t){return function(i){return function(a){return wp(e(t))(i)(a)}}}}}},wo=function(n){var e=jr(n);return function(){return function(t){return function(i){return Ep(e(t))(i)}}}},OA=function(n){var e=jr(n);return function(){return function(){return function(t){return function(i){return $w(e(t))(i)}}}}},Wp={rowListCodec:function(n){return function(e){return IA}}},jy=function(n){return n.rowListCodec},Zo=function(n){var e=jy(n);return function(){return function(){return function(t){var i=wo(t)(),a=DA(t)();return{rowListCodec:function(l){return function(f){var u=e(Lt.value)(f),d=i(Lt.value)(f);return a(Lt.value)(d)(u)}}}}}}},zA=function(){return function(n){return jy(n)(Lt.value)}},BA=zA(),kA=function(){return function(n){var e=BA(n);return function(t){return function(i){return NA(t)(e(i))}}}},al={dimap:function(n){return function(e){return function(t){return function(i){return e(t(n(i)))}}}}},Yc=function(n){return n.dimap},aa={first:function(n){return function(e){return new Wt(n(e.value0),e.value1)}},second:Ot(Rp),Profunctor0:function(){return al}},HA=function(n){return n.first},Yg=Ay(),VA=function(n){return function(e){return function(t){var i=Yc(t);return function(a){return i(n)(e)(a)}}}},GA=function(){return function(){return function(n){return VA(Yg)(Yg)(n)}}},WA=GA()(),$A=function(){return function(){return function(n){return WA(n)}}},XA=$A()(),Yy=function(){return function(n){return function(e){return XA(e)}}},qy=function(n){return n},Ja=function(n){return function(e){return qy(n)(Ft(e))}},Tr=(function(){var n={},e="Pure",t="Throw",i="Catch",a="Sync",l="Async",f="Bind",u="Bracket",d="Fork",p="Sequential",m="Map",v="Apply",g="Alt",S="Cons",E="Resume",w="Release",x="Finalizer",y="Finalized",R="Forked";function M(C,z,W,Y){this.tag=C,this._1=z,this._2=W,this._3=Y}function D(C){var z=function(W,Y,Q){return new M(C,W,Y,Q)};return z.tag=C,z}function U(C){return new M(e,void 0)}function O(C){try{C()}catch(z){setTimeout(function(){throw z},0)}}function F(C,z,W){try{return z(W())}catch(Y){return C(Y)}}function ce(C,z,W){try{return z(W)()}catch(Y){return W(C(Y))(),U}}var b=(function(){var C=1024,z=0,W=0,Y=new Array(C),Q=!1;function Z(){var _e;for(Q=!0;z!==0;)z--,_e=Y[W],Y[W]=void 0,W=(W+1)%C,_e();Q=!1}return{isDraining:function(){return Q},enqueue:function(_e){var ve;z===C&&(ve=Q,Z(),Q=ve),Y[(W+z)%C]=_e,z++,Q||Z()}}})();function N(C){var z={},W=0,Y=0;return{register:function(Q){var Z=W++;Q.onComplete({rethrow:!0,handler:function(_e){return function(){Y--,delete z[Z]}}})(),z[Z]=Q,Y++},isEmpty:function(){return Y===0},killAll:function(Q,Z){return function(){if(Y===0)return Z();var _e=0,ve={};function be(Oe){ve[Oe]=z[Oe].kill(Q,function(X){return function(){delete ve[Oe],_e--,C.isLeft(X)&&C.fromLeft(X)&&setTimeout(function(){throw C.fromLeft(X)},0),_e===0&&Z()}})()}for(var Fe in z)z.hasOwnProperty(Fe)&&(_e++,be(Fe));return z={},W=0,Y=0,function(Oe){return new M(a,function(){for(var X in ve)ve.hasOwnProperty(X)&&ve[X]()})}}}}}var he=0,re=1,pe=2,H=3,ee=4,fe=5,ie=6;function q(C,z,W){var Y=0,Q=he,Z=W,_e=null,ve=null,be=null,Fe=null,Oe=null,X=0,Ct=0,ke=null,ae=!0;function se(we){for(var Ie,Ke,P;;)switch(Ie=null,Ke=null,P=null,Q){case pe:Q=re;try{Z=be(Z),Fe===null?be=null:(be=Fe._1,Fe=Fe._2)}catch(j){Q=fe,_e=C.left(j),Z=null}break;case H:C.isLeft(Z)?(Q=fe,_e=Z,Z=null):be===null?Q=fe:(Q=pe,Z=C.fromRight(Z));break;case re:switch(Z.tag){case f:be&&(Fe=new M(S,be,Fe)),be=Z._2,Q=re,Z=Z._1;break;case e:be===null?(Q=fe,Z=C.right(Z._1)):(Q=pe,Z=Z._1);break;case a:Q=H,Z=F(C.left,C.right,Z._1);break;case l:Q=ee,Z=ce(C.left,Z._1,function(j){return function(){Y===we&&(Y++,b.enqueue(function(){Y===we+1&&(Q=H,Z=j,se(Y))}))}});return;case t:Q=fe,_e=C.left(Z._1),Z=null;break;case i:be===null?Oe=new M(S,Z,Oe,ve):Oe=new M(S,Z,new M(S,new M(E,be,Fe),Oe,ve),ve),be=null,Fe=null,Q=re,Z=Z._1;break;case u:X++,be===null?Oe=new M(S,Z,Oe,ve):Oe=new M(S,Z,new M(S,new M(E,be,Fe),Oe,ve),ve),be=null,Fe=null,Q=re,Z=Z._1;break;case d:Q=H,Ie=q(C,z,Z._2),z&&z.register(Ie),Z._1&&Ie.run(),Z=C.right(Ie);break;case p:Q=re,Z=$(C,z,Z._1);break}break;case fe:if(be=null,Fe=null,Oe===null)Q=ie,Z=ve||_e||Z;else switch(Ie=Oe._3,P=Oe._1,Oe=Oe._2,P.tag){case i:ve&&ve!==Ie&&X===0?Q=fe:_e&&(Q=re,Z=P._2(C.fromLeft(_e)),_e=null);break;case E:ve&&ve!==Ie&&X===0||_e?Q=fe:(be=P._1,Fe=P._2,Q=pe,Z=C.fromRight(Z));break;case u:X--,_e===null&&(Ke=C.fromRight(Z),Oe=new M(S,new M(w,P._2,Ke),Oe,Ie),(ve===Ie||X>0)&&(Q=re,Z=P._3(Ke)));break;case w:Oe=new M(S,new M(y,Z,_e),Oe,ve),Q=re,ve&&ve!==Ie&&X===0?Z=P._1.killed(C.fromLeft(ve))(P._2):_e?Z=P._1.failed(C.fromLeft(_e))(P._2):Z=P._1.completed(C.fromRight(Z))(P._2),_e=null,X++;break;case x:X++,Oe=new M(S,new M(y,Z,_e),Oe,ve),Q=re,Z=P._1;break;case y:X--,Q=fe,Z=P._1,_e=P._2;break}break;case ie:for(var T in ke)ke.hasOwnProperty(T)&&(ae=ae&&ke[T].rethrow,O(ke[T].handler(Z)));ke=null,ve&&_e?setTimeout(function(){throw C.fromLeft(_e)},0):C.isLeft(Z)&&ae&&setTimeout(function(){if(ae)throw C.fromLeft(Z)},0);return;case he:Q=re;break;case ee:return}}function xe(we){return function(){if(Q===ie)return ae=ae&&we.rethrow,we.handler(Z)(),function(){};var Ie=Ct++;return ke=ke||{},ke[Ie]=we,function(){ke!==null&&delete ke[Ie]}}}function ge(we,Ie){return function(){if(Q===ie)return Ie(C.right(void 0))(),function(){};var Ke=xe({rethrow:!1,handler:function(){return Ie(C.right(void 0))}})();switch(Q){case he:ve=C.left(we),Q=ie,Z=ve,se(Y);break;case ee:ve===null&&(ve=C.left(we)),X===0&&(Q===ee&&(Oe=new M(S,new M(x,Z(we)),Oe,ve)),Q=fe,Z=null,_e=null,se(++Y));break;default:ve===null&&(ve=C.left(we)),X===0&&(Q=fe,Z=null,_e=null)}return Ke}}function Me(we){return function(){var Ie=xe({rethrow:!1,handler:we})();return Q===he&&se(Y),Ie}}return{kill:ge,join:Me,onComplete:xe,isSuspended:function(){return Q===he},run:function(){Q===he&&(b.isDraining()?se(Y):b.enqueue(function(){se(Y)}))}}}function ne(C,z,W,Y){var Q=0,Z={},_e=0,ve={},be=new Error("[ParAff] Early exit"),Fe=null,Oe=n;function X(xe,ge,Me){var we=ge,Ie=null,Ke=null,P=0,T={},j,Ae;e:for(;;)switch(j=null,we.tag){case R:if(we._3===n&&(j=Z[we._1],T[P++]=j.kill(xe,function(ye){return function(){P--,P===0&&Me(ye)()}})),Ie===null)break e;we=Ie._2,Ke===null?Ie=null:(Ie=Ke._1,Ke=Ke._2);break;case m:we=we._2;break;case v:case g:Ie&&(Ke=new M(S,Ie,Ke)),Ie=we,we=we._1;break}if(P===0)Me(C.right(void 0))();else for(Ae=0,j=P;Ae<j;Ae++)T[Ae]=T[Ae]();return T}function Ct(xe,ge,Me){var we,Ie,Ke,P,T,j;for(C.isLeft(xe)?(we=xe,Ie=null):(Ie=xe,we=null);;){if(Ke=null,P=null,T=null,j=null,Fe!==null)return;if(ge===null){Y(we||Ie)();return}if(ge._3!==n)return;switch(ge.tag){case m:we===null?(ge._3=C.right(ge._1(C.fromRight(Ie))),Ie=ge._3):ge._3=we;break;case v:if(Ke=ge._1._3,P=ge._2._3,we){if(ge._3=we,T=!0,j=_e++,ve[j]=X(be,we===Ke?ge._2:ge._1,function(){return function(){delete ve[j],T?T=!1:Me===null?Ct(we,null,null):Ct(we,Me._1,Me._2)}}),T){T=!1;return}}else{if(Ke===n||P===n)return;Ie=C.right(C.fromRight(Ke)(C.fromRight(P))),ge._3=Ie}break;case g:if(Ke=ge._1._3,P=ge._2._3,Ke===n&&C.isLeft(P)||P===n&&C.isLeft(Ke))return;if(Ke!==n&&C.isLeft(Ke)&&P!==n&&C.isLeft(P))we=Ie===Ke?P:Ke,Ie=null,ge._3=we;else if(ge._3=Ie,T=!0,j=_e++,ve[j]=X(be,Ie===Ke?ge._2:ge._1,function(){return function(){delete ve[j],T?T=!1:Me===null?Ct(Ie,null,null):Ct(Ie,Me._1,Me._2)}}),T){T=!1;return}break}Me===null?ge=null:(ge=Me._1,Me=Me._2)}}function ke(xe){return function(ge){return function(){delete Z[xe._1],xe._3=ge,Ct(ge,xe._2._1,xe._2._2)}}}function ae(){var xe=re,ge=W,Me=null,we=null,Ie,Ke;e:for(;;)switch(Ie=null,Ke=null,xe){case re:switch(ge.tag){case m:Me&&(we=new M(S,Me,we)),Me=new M(m,ge._1,n,n),ge=ge._2;break;case v:Me&&(we=new M(S,Me,we)),Me=new M(v,n,ge._2,n),ge=ge._1;break;case g:Me&&(we=new M(S,Me,we)),Me=new M(g,n,ge._2,n),ge=ge._1;break;default:Ke=Q++,xe=fe,Ie=ge,ge=new M(R,Ke,new M(S,Me,we),n),Ie=q(C,z,Ie),Ie.onComplete({rethrow:!1,handler:ke(ge)})(),Z[Ke]=Ie,z&&z.register(Ie)}break;case fe:if(Me===null)break e;Me._1===n?(Me._1=ge,xe=re,ge=Me._2,Me._2=n):(Me._2=ge,ge=Me,we===null?Me=null:(Me=we._1,we=we._2))}for(Oe=ge,Ke=0;Ke<Q;Ke++)Z[Ke].run()}function se(xe,ge){Fe=C.left(xe);var Me;for(var we in ve)if(ve.hasOwnProperty(we)){Me=ve[we];for(we in Me)Me.hasOwnProperty(we)&&Me[we]()}ve=null;var Ie=X(xe,Oe,ge);return function(Ke){return new M(l,function(P){return function(){for(var T in Ie)Ie.hasOwnProperty(T)&&Ie[T]();return U}})}}return ae(),function(xe){return new M(l,function(ge){return function(){return se(xe,ge)}})}}function $(C,z,W){return new M(l,function(Y){return function(){return ne(C,z,W,Y)}})}return M.EMPTY=n,M.Pure=D(e),M.Throw=D(t),M.Catch=D(i),M.Sync=D(a),M.Async=D(l),M.Bind=D(f),M.Bracket=D(u),M.Fork=D(d),M.Seq=D(p),M.ParMap=D(m),M.ParApply=D(v),M.ParAlt=D(g),M.Fiber=q,M.Supervisor=N,M.Scheduler=b,M.nonCanceler=U,M})();const jA=Tr.Pure,YA=Tr.Throw;function qA(n){return function(e){return Tr.Catch(n,e)}}function KA(n){return function(e){return e.tag===Tr.Pure.tag?Tr.Pure(n(e._1)):Tr.Bind(e,function(t){return Tr.Pure(n(t))})}}function ZA(n){return function(e){return Tr.Bind(n,e)}}const JA=Tr.Sync,qg=Tr.Async;function QA(n,e){return function(){return Tr.Fiber(n,null,e)}}Tr.Seq;var eT=function(n){return n},tT=function(n){return n},nT=function(n){return function(e){return n(e)}},rT=function(n){var e=Ot(n);return{map:function(t){return nT(e(function(i){return new Wt(t(i.value0),i.value1)}))}}},Ky=function(n){var e=Dr(n);return function(t){var i=hs(t),a=t.Functor0(),l=Ot(a),f=rT(a);return{apply:function(u){return function(d){var p=function(m){return function(v){return new Wt(m.value0(v.value0),e(m.value1)(v.value1))}};return i(l(p)(u))(d)}},Functor0:function(){return f}}}},Zy=function(n){var e=Dr(n),t=Ky(n);return function(i){var a=pn(i),l=i.Apply0(),f=Ot(l.Functor0()),u=t(l);return{bind:function(d){return function(p){return a(d)(function(m){var v=p(m.value0);return f(function(g){return new Wt(g.value0,e(m.value1)(g.value1))})(v)})}},Apply0:function(){return u}}}},Jy=function(n){var e=ms(n),t=Ky(n.Semigroup0());return function(i){var a=Mt(i),l=t(i.Apply0());return{pure:function(f){return a(new Wt(f,e))},Apply0:function(){return l}}}},iT=function(n){var e=Jy(n),t=Zy(n.Semigroup0());return function(i){var a=e(i.Applicative0()),l=t(i.Bind1());return{Applicative0:function(){return a},Bind1:function(){return l}}}},oT=function(n){var e=n.Semigroup0(),t=iT(n);return function(i){var a=t(i);return{tell:(function(){var l=Mt(i.Applicative0()),f=Wt.create(zn);return function(u){return eT(l(f(u)))}})(),Semigroup0:function(){return e},Monad1:function(){return a}}}};const aT=function(n){return n()},sT=function(n){throw new Error(n)};var lT=function(){return sT},uT=lT(),cT=aT,Kg=function(n){return cT(function(){return uT(n)})},fT=function(n,e,t){var i=0,a;return function(l){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+l+")",e,l);return i=1,a=t(),i=2,a}},dT=ry(gM),Qy={map:KA},hT=(function(){var n=function(i){if(i instanceof ht)return i.value0;if(i instanceof lt)return Kg("unsafeFromRight: Left");throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): "+[i.constructor.name])},e=function(i){if(i instanceof lt)return i.value0;if(i instanceof ht)return Kg("unsafeFromLeft: Right");throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): "+[i.constructor.name])},t=function(i){if(i instanceof lt)return!0;if(i instanceof ht)return!1;throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): "+[i.constructor.name])};return{isLeft:t,fromLeft:e,fromRight:n,left:lt.create,right:ht.create}})(),pT=function(n){return QA(hT,n)},mT=function(n){return function(){var t=pT(n)();return t.run(),t}},ex=function(n){return dT(mT(n))},or={Applicative0:function(){return Cl},Bind1:function(){return $p}},$p={bind:ZA,Apply0:function(){return tx(0)}},Cl={pure:jA,Apply0:function(){return tx(0)}},tx=fT("applyAff","Effect.Aff",function(){return{apply:Tp(or),Functor0:function(){return Qy}}}),vT=Mt(Cl),Rl={liftEffect:JA,Monad0:function(){return or}},gT={throwError:YA,Monad0:function(){return or}},_T={catchError:qA,MonadThrow0:function(){return gT}},yT=Ft(vT(zn));const xT=function(n){return function(){console.log(n)}};var qc=function(n){var e=zc(n);return function(t){return e(xT(t))}};function ST(n,e,t,i,a){return function(l,f){var u=n.newXHR(),d=n.fixupUrl(a.url,u);if(u.open(a.method||"GET",d,!0,a.username,a.password),a.headers)try{for(var p=0,m;(m=a.headers[p])!=null;p++)u.setRequestHeader(m.field,m.value)}catch(g){l(g)}var v=function(g){return function(){l(new Error(g))}};return u.onerror=v(t),u.ontimeout=v(e),u.onload=function(){f({status:u.status,statusText:u.statusText,headers:u.getAllResponseHeaders().split(`\r
`).filter(function(g){return g.length>0}).map(function(g){var S=g.indexOf(":");return i(g.substring(0,S))(g.substring(S+2))}),body:u.response})},u.responseType=a.responseType,u.withCredentials=a.withCredentials,u.timeout=a.timeout,u.send(a.content),function(g,S,E){try{u.abort()}catch(w){return S(w)}return E()}}}var nx="application/json",ET="application/x-www-form-urlencoded",wT=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),MT=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),AT=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),TT=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),bT=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),rx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ix=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),CT=function(n){return n instanceof rx?new bt(ET):n instanceof ix?new bt(nx):Dt.value},Zg=bl(),Xp=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),jp=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ox=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),RT=function(n){if(n instanceof Xp||n instanceof jp)return Zg(n.value0);if(n instanceof ox)return n.value1;throw new Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): "+[n.constructor.name])},Jg=function(n){if(n instanceof Xp)return"Accept";if(n instanceof jp)return"Content-Type";if(n instanceof ox)return n.value0;throw new Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): "+[n.constructor.name])},Yp=Lr(Pr),ax=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),sx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),lx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Kc=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),qp=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Kp=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),LT=function(n){if(n instanceof ax)return"arraybuffer";if(n instanceof sx)return"blob";if(n instanceof lx)return"document";if(n instanceof Kc||n instanceof qp)return"text";if(n instanceof Kp)return"";throw new Error("Failed pattern match at Affjax.ResponseFormat (line 44, column 3 - line 50, column 19): "+[n.constructor.name])},PT=function(n){return n instanceof Kc?new bt(nx):Dt.value},DT=(function(){return new qp(Yp)})(),IT=(function(){return new Kc(Yp)})(),UT=(function(){return new Kp(Yp)})(),NT=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})();function FT(n,e,t){try{return e(JSON.parse(t))}catch(i){return n(i.message)}}var OT=function(n){return FT(lt.create,ht.create,n)};function zT(n){return n.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function BT(n,e,t){try{return e(zT(encodeURIComponent(t)).replace(/%20/g,"+"))}catch(i){return n(i)}}function kT(n,e,t){try{return e(decodeURIComponent(t))}catch(i){return n(i)}}var Xd=(function(){return zp(BT)(Ft(Dt.value))(bt.create)})(),HT=(function(){return zp(kT)(Ft(Dt.value))(bt.create)})(),VT=hs(ly),Qg=Ot(Oc),GT=Bp(Wc)(cM),WT=function(n){return n},$T=(function(){var n=function(i){if(i.value1 instanceof Dt)return Xd(i.value0);if(i.value1 instanceof bt)return VT(Qg(function(a){return function(l){return a+("="+l)}})(Xd(i.value0)))(Xd(i.value1.value0));throw new Error("Failed pattern match at Data.FormURLEncoded (line 37, column 16 - line 39, column 114): "+[i.constructor.name])},e=Qg(AA("&")),t=GT(n);return function(i){return e(t(WT(i)))}})(),XT=(function(){function n(){}return n.value=new n,n})(),ux=(function(){function n(){}return n.value=new n,n})(),jT=(function(){function n(){}return n.value=new n,n})(),YT=(function(){function n(){}return n.value=new n,n})(),qT=(function(){function n(){}return n.value=new n,n})(),KT=(function(){function n(){}return n.value=new n,n})(),ZT=(function(){function n(){}return n.value=new n,n})(),JT=(function(){function n(){}return n.value=new n,n})(),QT=(function(){function n(){}return n.value=new n,n})(),eb=(function(){function n(){}return n.value=new n,n})(),tb=(function(){function n(){}return n.value=new n,n})(),nb=(function(){function n(){}return n.value=new n,n})(),rb=(function(){function n(){}return n.value=new n,n})(),ib=(function(){function n(){}return n.value=new n,n})(),ob=(function(){function n(){}return n.value=new n,n})(),ab=(function(){function n(){}return n.value=new n,n})(),sb=function(n){return n},lb={show:function(n){if(n instanceof XT)return"OPTIONS";if(n instanceof ux)return"GET";if(n instanceof jT)return"HEAD";if(n instanceof YT)return"POST";if(n instanceof qT)return"PUT";if(n instanceof KT)return"DELETE";if(n instanceof ZT)return"TRACE";if(n instanceof JT)return"CONNECT";if(n instanceof QT)return"PROPFIND";if(n instanceof eb)return"PROPPATCH";if(n instanceof tb)return"MKCOL";if(n instanceof nb)return"COPY";if(n instanceof rb)return"MOVE";if(n instanceof ib)return"LOCK";if(n instanceof ob)return"UNLOCK";if(n instanceof ab)return"PATCH";throw new Error("Failed pattern match at Data.HTTP.Method (line 43, column 1 - line 59, column 23): "+[n.constructor.name])}},ub=El(ra(lb))(sb),cb=(function(){var n=cA(yA);return function(e){return fA(n(e))}})(),fb=function(n){return n.value0};const db=null;function hb(n){return n}var Hu=ps(db)(hb);const pb=function(e){return function(t){return e(t)()}};var mb=function(n){return qg(function(e){return function(){var i=n(function(a){return e(lt.create(a))()},function(a){return e(ht.create(a))()});return function(a){return qg(function(l){return function(){return i(a,function(u){return l(lt.create(u))()},function(u){return l(ht.create(u))()}),yT}})}}})};function e_(n){return Object.prototype.toString.call(n).slice(8,-1)}var vb=ra(oM),gb=ra(Mp),cx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),fx=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),_b=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),yb=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),Bo=Al,xb=Al,Xh=function(n){if(n instanceof cx)return n.value0;if(n instanceof _b)return"Error at array index "+(gb(n.value0)+(": "+Xh(n.value1)));if(n instanceof yb)return"Error at property "+(vb(n.value0)+(": "+Xh(n.value1)));if(n instanceof fx)return"Type mismatch: expected "+(n.value0+(", found "+n.value1));throw new Error("Failed pattern match at Foreign (line 78, column 1 - line 78, column 45): "+[n.constructor.name])},dx=function(n){var e=Ml(Bc(n));return function(t){return e(cb(t))}},Sb=function(n){var e=Mt(Eo(n)),t=dx(n);return function(i){return function(a){return e_(a)===i?e(xb(a)):t(new fx(i,e_(a)))}}},jd=Mt(Eo(So)),Eb=dx(So),ko=Sb(So),t_=jw(OM(gA)(So)),wb=iy(Tl(So)),Vu=Ot(Oc),Mb=x1(Pi)(Wh),Ab=ui(Za),Tb=Sp(uy),bb=Ot(xl),Cb=zw(Qy),Rb=_M(_T),Lb=Mt(Cl),hx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),px=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),mx=(function(){function n(){}return n.value=new n,n})(),vx=(function(){function n(){}return n.value=new n,n})(),gx=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Pb=function(n){return function(e){var t=function(m){return m===""?jd(K1):El(function(v){return Eb(cx.create(v))})(jd)(OT(m))},i=(function(){if(e.responseFormat instanceof ax)return ko("ArrayBuffer");if(e.responseFormat instanceof sx)return ko("Blob");if(e.responseFormat instanceof lx)return function(m){return t_(ko("Document")(m))(t_(ko("XMLDocument")(m))(ko("HTMLDocument")(m)))};if(e.responseFormat instanceof Kc)return wb(function(m){return e.responseFormat.value0(t(m))})(ko("String"));if(e.responseFormat instanceof qp)return ko("String");if(e.responseFormat instanceof Kp)return Ft(e.responseFormat.value0(jd(zn)));throw new Error("Failed pattern match at Affjax (line 274, column 18 - line 283, column 57): "+[e.responseFormat.constructor.name])})(),a=function(m){if(m instanceof wT)return new ht(m.value0(Bo));if(m instanceof MT)return new ht(Bo(m.value0));if(m instanceof AT)return new ht(Bo(m.value0));if(m instanceof TT)return new ht(Bo(m.value0));if(m instanceof bT)return new ht(Bo(m.value0));if(m instanceof rx)return rs("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(Vu(Bo)($T(m.value0)));if(m instanceof ix)return new ht(Bo(Ry(m.value0)));throw new Error("Failed pattern match at Affjax (line 235, column 20 - line 250, column 69): "+[m.constructor.name])},l=function(m){return function(v){return m instanceof bt&&!Mb(Fw(Ab)(Jg)(m.value0))(v)?C1(v)(m.value0):v}},f=function(m){return l(Vu(jp.create)(Tb(CT)(m)))(l(Vu(Xp.create)(PT(e.responseFormat)))(e.headers))},u=function(m){return{method:ub(e.method),url:e.url,headers:bb(function(v){return{field:Jg(v),value:RT(v)}})(f(e.content)),content:m,responseType:LT(e.responseFormat),username:Hu(e.username),password:Hu(e.password),withCredentials:e.withCredentials,timeout:uM(0)(Vu(function(v){return v})(e.timeout))}},d=function(m){return Cb(Rb(mb(ST(n,"AffjaxTimeoutErrorMessageIdent","AffjaxRequestFailedMessageIdent",NT.create,u(m)))))(function(v){if(v instanceof ht){var g=Np(i(v.value0.body));if(g instanceof lt)return new lt(new px(fb(g.value0),v.value0));if(g instanceof ht)return new ht({headers:v.value0.headers,status:v.value0.status,statusText:v.value0.statusText,body:g.value0});throw new Error("Failed pattern match at Affjax (line 209, column 9 - line 211, column 52): "+[g.constructor.name])}if(v instanceof lt)return new lt((function(){var S=my(v.value0),E=S==="AffjaxTimeoutErrorMessageIdent";if(E)return mx.value;var w=S==="AffjaxRequestFailedMessageIdent";return w?vx.value:new gx(v.value0)})());throw new Error("Failed pattern match at Affjax (line 207, column 144 - line 219, column 28): "+[v.constructor.name])})};if(e.content instanceof Dt)return d(Hu(Dt.value));if(e.content instanceof bt){var p=a(e.content.value0);if(p instanceof ht)return d(Hu(new bt(p.value0)));if(p instanceof lt)return Lb(new lt(new hx(p.value0)));throw new Error("Failed pattern match at Affjax (line 199, column 7 - line 203, column 48): "+[p.constructor.name])}throw new Error("Failed pattern match at Affjax (line 195, column 3 - line 203, column 48): "+[e.content.constructor.name])}},_x=function(n){if(n instanceof hx)return"There was a problem with the request content: "+n.value0;if(n instanceof px)return"There was a problem with the response body: "+Xh(n.value0);if(n instanceof mx)return"There was a problem making the request: timeout";if(n instanceof vx)return"There was a problem making the request: request failed";if(n instanceof gx)return"There was a problem making the request: "+my(n.value0);throw new Error("Failed pattern match at Affjax (line 113, column 14 - line 123, column 66): "+[n.constructor.name])},Ho=(function(){return{method:new lt(ux.value),url:"/",headers:[],content:Dt.value,username:Dt.value,password:Dt.value,withCredentials:!1,responseFormat:UT,timeout:Dt.value}})(),Db=function(n){return function(e){return function(t){return Pb(n)({method:Ho.method,headers:Ho.headers,content:Ho.content,username:Ho.username,password:Ho.password,withCredentials:Ho.withCredentials,timeout:Ho.timeout,url:t,responseFormat:e})}}},Ib=ra(Mp),Ub={show:function(n){return"(StatusCode "+(Ib(n)+")")}},Nb={eq:function(n){return function(e){return n===e}}};const Fb={newXHR:function(){return new XMLHttpRequest},fixupUrl:function(n){return n||"/"}};var yx=Db(Fb),Ob=xy(Ey),zb={liftAff:Lr(Pr),MonadEffect0:function(){return Rl}},xx=function(n){return n.liftAff},Bb=function(n){var e=n.MonadEffect0(),t=Dp(e);return{liftAff:(function(){var i=Ob(e.Monad0()),a=xx(n);return function(l){return i(a(l))}})(),MonadEffect0:function(){return t}}};const kb=function(n){return function(e){return e.join(n)}};var Hb=Dr(Sl),Vb={genericShowArgs:function(n){return[]}},Gb=function(n){return n.genericShowArgs},Wb=function(n){var e=Gb(n);return function(t){var i=jr(t);return{"genericShow'":function(a){var l=i(Lt.value),f=e(a);return f.length===0?l:"("+(kb(" ")(Hb([l])(f))+")")}}}},jh=function(n){return n["genericShow'"]},Qr=function(n){var e=jh(n);return function(t){var i=jh(t);return{"genericShow'":function(a){if(a instanceof sn)return e(a.value0);if(a instanceof He)return i(a.value0);throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): "+[a.constructor.name])}}}},$b=function(n){var e=Ap(n);return function(t){var i=jh(t);return function(a){return i(e(a))}}},Br=Wb(Vb),Sx=(function(){function n(){}return n.value=new n,n})(),Ex=(function(){function n(){}return n.value=new n,n})(),wx=(function(){function n(){}return n.value=new n,n})(),Mx=(function(){function n(){}return n.value=new n,n})(),Ax=(function(){function n(){}return n.value=new n,n})(),Yh=(function(){function n(){}return n.value=new n,n})(),Xb=(function(){function n(){}return n.value=new n,n})(),jb=(function(){function n(){}return n.value=new n,n})(),Yb=(function(){function n(){}return n.value=new n,n})(),qb=(function(){function n(){}return n.value=new n,n})(),Kb=(function(){function n(){}return n.value=new n,n})(),Zb={from:function(n){if(n instanceof Sx)return new sn(tr.value);if(n instanceof Ex)return new He(new sn(tr.value));if(n instanceof wx)return new He(new He(new sn(tr.value)));if(n instanceof Mx)return new He(new He(new He(new sn(tr.value))));if(n instanceof Ax)return new He(new He(new He(new He(new sn(tr.value)))));if(n instanceof Yh)return new He(new He(new He(new He(new He(new sn(tr.value))))));if(n instanceof Xb)return new He(new He(new He(new He(new He(new He(new sn(tr.value)))))));if(n instanceof jb)return new He(new He(new He(new He(new He(new He(new He(new sn(tr.value))))))));if(n instanceof Yb)return new He(new He(new He(new He(new He(new He(new He(new He(new sn(tr.value)))))))));if(n instanceof qb)return new He(new He(new He(new He(new He(new He(new He(new He(new He(new sn(tr.value))))))))));if(n instanceof Kb)return new He(new He(new He(new He(new He(new He(new He(new He(new He(new He(tr.value))))))))));throw new Error("Failed pattern match at GCodeViewer.Error (line 30, column 1 - line 30, column 34): "+[n.constructor.name])}},Jb={show:$b(Zb)(Qr(Br({reflectSymbol:function(){return"Err1"}}))(Qr(Br({reflectSymbol:function(){return"Err2"}}))(Qr(Br({reflectSymbol:function(){return"Err3"}}))(Qr(Br({reflectSymbol:function(){return"Err4"}}))(Qr(Br({reflectSymbol:function(){return"Err5"}}))(Qr(Br({reflectSymbol:function(){return"Err6"}}))(Qr(Br({reflectSymbol:function(){return"XErr7"}}))(Qr(Br({reflectSymbol:function(){return"XErr8"}}))(Qr(Br({reflectSymbol:function(){return"XErr9"}}))(Qr(Br({reflectSymbol:function(){return"XErr10"}}))(Br({reflectSymbol:function(){return"ErrX"}}))))))))))))},Qb=ra(Jb),sl=function(n){return"Error: "+(n.message+(" ("+(Qb(n.code)+")")))},Qa=function(n){return function(e){return{message:e,code:n}}},eC=function(n){var e=n.MonadThrow0(),t=Ml(e),i=Mt(e.Monad0().Applicative0());return function(a){return function(l){if(l instanceof lt)return t(a(l.value0));if(l instanceof ht)return i(l.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 43, column 28 - line 45, column 20): "+[l.constructor.name])}}},tC=function(n){var e=Ml(n.MonadThrow0());return function(t){var i=t.MonadEffect0().Monad0(),a=pn(i.Bind1()),l=xx(t),f=Mt(i.Applicative0());return function(u){return function(d){return a(l(d))(function(p){if(p instanceof lt)return e(u(p.value0));if(p instanceof ht)return f(p.value0);throw new Error("Failed pattern match at GCodeViewer.Error (line 38, column 3 - line 40, column 22): "+[p.constructor.name])})}}}},nC=Yc(Cy(ia)),rC=bl(),iC=zM(),oC=kA(),Sc=function(n){return n},aC=function(n){return n},Zp=function(){return function(n){var e=oC(n);return function(t){var i=jr(t);return function(a){return nC(rC)(iC)(e(i(Lt.value))(a))}}}},Tx=Tl(or),qh=pn(Tx),bx=Ip(or),Cx=tC(bx)(Bb(zb)),Rx=Nc(Fc)(Tx),Lx=Eo(or),Px=xp(Lx),Dx=sy(Nb),Ix=Ml(Bc(or)),Ux=ra(Ub),Nx=Mt(Lx),sC=eC(bx),lC=function(n){return qh(Cx((function(){var e=Qa(Mx.value);return function(t){return e(_x(t))}})())(yx(DT)(n)))(function(e){return Rx(Px(Dx(e.status)(200))(Ix(Qa(Ax.value)(Ux(e.status)))))(function(){return Nx(e.body)})})},uC=Zp()(Zo(Zo(Zo(Wp)()()({reflectSymbol:function(){return"pictures"}}))()()({reflectSymbol:function(){return"name"}}))()()({reflectSymbol:function(){return"gcode"}}))({reflectSymbol:function(){return"IndexFileItem"}})({name:Ar,gcode:Ar,pictures:jc(Ar)}),Jp=jc(uC),cC=function(n){return qh(Cx((function(){var e=Qa(Sx.value);return function(t){return e(_x(t))}})())(yx(IT)(n.url)))(function(e){return Rx(Px(Dx(e.status)(200))(Ix(Qa(wx.value)(Ux(e.status)))))(function(){return qh(sC((function(){var t=Qa(Ex.value);return function(i){return t(UA(i))}})())(Cn(Jp)(e.body)))(function(t){return Nx(t)})})})},fC=function(n){return function(e){var t=Yc(e.Profunctor0()),i=HA(e);return function(a){return t(n)(function(l){return l.value1(l.value0)})(i(a))}}},dC=function(n){return function(e){return function(t){return fC(function(i){return new Wt(n(i),function(a){return e(i)(a)})})(t)}}},Fx=function(n){var e=wo(n)(),t=FA(n)()();return function(){return function(){return function(i){return function(a){return dC(e(i))(oi(t(i)))(a)}}}}},Zc=function(n){var e=Fx(n)()();return function(){return function(){return function(t){return e(Lt.value)(t)}}}},br=Ty(by),On=pn(wl),so=Mt(oa),hC=Ot(ia),pC=Yc(Cy(ia)),n_=Oy(Pi),mC=Lr(Pr),Ec=xp(oa),ll=Nc(Fc)(wl),r_=sy(Mc(J1)),Ll=(function(){function n(){}return n.value=new n,n})(),ln=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Qp=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Jc=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),vC=function(n){return function(){return function(){return function(e){return function(t){return t}}}}},Kh=function(n){return n.gCasesEncode},Zh=function(n){return n.gCasesDecode},Yd=function(n){var e=Kh(n),t=Zh(n);return function(i){var a=Kh(i),l=Zh(i);return function(){return function(){return function(){return function(){return function(f){var u=vC()()(),d=wo(f)(),p=Xy(f)()(),m=OA(f)()();return{gCasesEncode:function(v){return function(g){var S=u(Lt.value)(g),E=d(Lt.value)(g),w=p(Lt.value)(E)({});return function(x){if(x instanceof sn)return e(v)(w)(x.value0);if(x instanceof He)return a(v)(S)(x.value0);throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 244, column 7 - line 246, column 47): "+[x.constructor.name])}}},gCasesDecode:function(v){return function(g){return function(S){var E=m(Lt.value)(g),w=d(Lt.value)(g),x=p(Lt.value)(w)({}),y=function(D){return l(v)(E)(S)},R=function(D){return t(v)(x)(S)},M=R();if(M instanceof lt&&M.value0 instanceof Ll)return hC(He.create)(y());if(M instanceof lt&&M.value0 instanceof ln)return new lt(new ln(M.value0.value0));if(M instanceof ht)return new ht(new sn(M.value0));throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 257, column 5 - line 260, column 34): "+[M.constructor.name])}}}}}}}}}}},gC=function(n){return function(e){return new Gp(n,(function(){if(e instanceof Ll)return new ai("No case matched");if(e instanceof ln)return e.value0;throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 147, column 5 - line 149, column 23): "+[e.constructor.name])})())}},_C=function(n){var e=Kh(n),t=Zh(n);return function(i){var a=Ap(i),l=aM(i);return function(f){return function(u){return function(d){var p=e(f)(d),m=(function(){var v=br(gC(u)),g=t(f)(d);return function(S){return v(g(S))}})();return pC(a)(l)(Hc(m)(p))}}}}},Ox=function(n){return function(e){return function(t){if(n instanceof Qp){var i=(function(){return t.length===0?en(fo)([]):t.length===1&&n.value0.unwrapSingleArguments?t[0]:en(fo)(t)})(),a=n.value0.mapTag(e);return en(vo)(n_([new Wt(a,i)]))}if(n instanceof Jc){var l=(function(){return t.length===0&&n.value0.omitEmptyArguments?Dt.value:t.length===1&&n.value0.unwrapSingleArguments?new bt(new Wt(n.value0.valuesKey,t[0])):new bt(new Wt(n.value0.valuesKey,en(fo)(t)))})(),a=n.value0.mapTag(e),f=new bt(new Wt(n.value0.tagKey,en(Ar)(a)));return en(vo)(n_(z1([f,l])))}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 403, column 3 - line 428, column 33): "+[n.constructor.name])}}},yC=(function(){return new Jc({tagKey:"tag",valuesKey:"values",unwrapSingleArguments:!1,omitEmptyArguments:!1,mapTag:mC})})(),xC=function(n){return function(e){return _C(e)(n)(yC)}},zx=function(n){return function(e){return function(t){return On(br(ln.create)(rs(new ai("Expecting a tag property `"+(n+"`")))(is(n)(e))))(function(i){return On(br(ln.create)(Cn(Ar)(i)))(function(a){return Ec(a!==t)(new lt(Ll.value))})})}}},SC=function(n){return function(e){return function(t){if(n instanceof Qp){var i=n.value0.mapTag(t);return On(br(ln.create)(Cn(vo)(e)))(function(a){return On(rs(Ll.value)(is(i)(a)))(function(l){return On(br(ln.create)(Cn(fo)(l)))(function(f){return ll(Ec(r_(f)([]))(new lt(new ln(new ai("Expecting an empty array")))))(function(){return so(zn)})})})})}if(n instanceof Jc){var i=n.value0.mapTag(t);return On(br(ln.create)(Cn(vo)(e)))(function(l){return ll(zx(n.value0.tagKey)(l)(i))(function(){return Ec(!n.value0.omitEmptyArguments)(On(rs(new ln(new ai("Expecting a value property `"+(n.value0.valuesKey+"`"))))(is(n.value0.valuesKey)(l)))(function(f){return On(br(ln.create)(Cn(fo)(f)))(function(u){return ll(Ec(r_(u)([]))(new lt(new ln(new ai("Expecting an empty array")))))(function(){return so(zn)})})}))})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 320, column 3 - line 346, column 18): "+[n.constructor.name])}}},EC=function(){return function(n){var e=jr(n);return{gCasesEncode:function(t){return function(i){return function(a){var l=e(Lt.value);return Ox(t)(l)([])}}},gCasesDecode:function(t){return function(i){return function(a){var l=e(Lt.value);return ll(SC(t)(a)(l))(function(){return so(tr.value)})}}}}}},wC=function(n){return function(e){return function(t){if(n instanceof Qp){var i=n.value0.mapTag(t);return On(br(ln.create)(Cn(vo)(e)))(function(a){return On(rs(Ll.value)(is(i)(a)))(function(l){return n.value0.unwrapSingleArguments?so(l):On(br(ln.create)(Cn(fo)(l)))(function(f){return f.length===1?so(f[0]):new lt(new ln(new ai("Expecting exactly one element")))})})})}if(n instanceof Jc){var i=n.value0.mapTag(t);return On(br(ln.create)(Cn(vo)(e)))(function(l){return ll(zx(n.value0.tagKey)(l)(i))(function(){return On(rs(new ln(new ai("Expecting a value property `"+(n.value0.valuesKey+"`"))))(is(n.value0.valuesKey)(l)))(function(f){return n.value0.unwrapSingleArguments?so(f):On(br(ln.create)(Cn(fo)(f)))(function(u){return u.length===1?so(u[0]):new lt(new ln(new ai("Expecting exactly one element")))})})})})}throw new Error("Failed pattern match at Data.Codec.Argonaut.Sum (line 349, column 49 - line 378, column 71): "+[n.constructor.name])}}},MC=function(){return function(n){var e=jr(n),t=wo(n)();return{gCasesEncode:function(i){return function(a){return function(l){var f=e(Lt.value),u=t(Lt.value)(a);return Ox(i)(f)([en(u)(l)])}}},gCasesDecode:function(i){return function(a){return function(l){var f=e(Lt.value);return On(wC(i)(l)(f))(function(u){var d=t(Lt.value)(a);return On(br(ln.create)(Cn(d)(u)))(function(p){return so(p)})})}}}}}},AC=xl,TC=Pi,bC=function(){return function(n){var e=wo(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Lt.value)(t),l=a(i);return l}}}}},Jh=function(n){return n.mkMatcherRep},CC=function(n){return n.mkMatcher1},RC=function(){return function(n){var e=wo(n)();return{mkMatcherRep:function(t){return function(i){var a=e(Lt.value)(t),l=a(zn);return l}}}}},LC=function(n){var e=Ap(n);return function(t){var i=Jh(t);return{mkMatcher1:function(a,l){return i(l)(e(a))}}}},PC=function(){return Al},DC=PC(),IC=function(){return Al},UC=IC(),qd=function(n){var e=Jh(n);return function(t){var i=Jh(t);return function(){return{mkMatcherRep:function(a){return function(l){var f=(function(){if(l instanceof sn)return e(UC(a))(l.value0);if(l instanceof He)return i(DC(a))(l.value0);throw new Error("Failed pattern match at Stadium.TL (line 159, column 11 - line 161, column 76): "+[l.constructor.name])})();return f}}}}}},i_=RC(),Qh={reflectSymbol:function(){return"NotAsked"}},ep={reflectSymbol:function(){return"Loading"}},o_=bC(),tp={reflectSymbol:function(){return"Loaded"}},Bx={reflectSymbol:function(){return"Error"}},a_=EC(),s_=MC(),os=(function(){function n(){}return n.value=new n,n})(),go=(function(){function n(){}return n.value=new n,n})(),as=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ss=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),kx={to:function(n){if(n instanceof sn)return os.value;if(n instanceof He&&n.value0 instanceof sn)return go.value;if(n instanceof He&&n.value0 instanceof He&&n.value0.value0 instanceof sn)return new as(n.value0.value0.value0);if(n instanceof He&&n.value0 instanceof He&&n.value0.value0 instanceof He)return new ss(n.value0.value0.value0);throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])},from:function(n){if(n instanceof os)return new sn(tr.value);if(n instanceof go)return new He(new sn(tr.value));if(n instanceof as)return new He(new He(new sn(n.value0)));if(n instanceof ss)return new He(new He(new He(n.value0)));throw new Error("Failed pattern match at GCodeViewer.RemoteData (line 25, column 1 - line 25, column 41): "+[n.constructor.name])}},NC=xC(kx)(Yd(a_(Qh))(Yd(a_(ep))(Yd(s_(tp))(s_(Bx))()()()()(tp))()()()()(ep))()()()()(Qh)),Hx=function(n){var e=ui(n);return{eq:function(t){return function(i){return t instanceof os&&i instanceof os||t instanceof go&&i instanceof go?!0:t instanceof as&&i instanceof as?e(t.value0)(i.value0):t instanceof ss&&i instanceof ss?t.value0===i.value0:!1}}}},Vx=CC(LC(kx)(qd(i_(Qh))(qd(i_(ep))(qd(o_(tp))(o_(Bx))())())())),Qc=function(n){return NC("RemoteData")({NotAsked:zn,Loading:zn,Loaded:n,Error:Ar})};const FC=n=>()=>{console.log(...n)};var OC=qc(IM),zC=Mt(bp),Kd=Dr(Sl),em=function(n){var e=Fx(n)()();return function(){return function(){return function(t){return e(Lt.value)(t)}}}},BC=em({reflectSymbol:function(){return"history"}})()()(aa),kC=em({reflectSymbol:function(){return"historyIndex"}})()()(aa),HC=em({reflectSymbol:function(){return"pubState"}})()()(aa),Gx=function(n){var e=function(i){var a=function(l){return function(f){return i.updateState(function(u){var d=n.updatePubState(f)(u.pubState);if(d instanceof lt)return function(){return OC(d.value0)(),u};if(d instanceof ht){var p=n.encodeMsg(f);return function(){return FC(Kd([en(Ar)("%c"+p.tag),en(Ar)("color: white; background: #cc8a21; padding: 2px 4px;")])(Kd(ps([])(function(v){return[en(Ar)("@"+v)]})(l))([p.args,en(Ar)(`
newState`),n.encodeJsonPubState(d.value0)])))(),qy(BC)(function(v){return Kd(v)([{msg:f,pubState:d.value0}])})(Ja(kC)(u.historyIndex+1)(Ja(HC)(d.value0)(u)))}}throw new Error("Failed pattern match at Stadium.Core (line 103, column 31 - line 126, column 16): "+[d.constructor.name])})}};return{emitMsg:a(Dt.value),emitMsgCtx:function(l){return a(new bt(l))},readPubState:function(){var f=i.readState();return f.pubState},readPrivState:function(){var f=i.readState();return f.privState},updatePrivState:function(l){return i.updateState(function(f){return zC({pubState:f.pubState,history:f.history,historyIndex:f.historyIndex,privState:l(f.privState)})})}}},t={history:[],historyIndex:0,pubState:n.initPubState,privState:n.initPrivState};return{dispatchers:function(i){return n.dispatchers(e(i))},initState:t,timeTravel:function(i){return zn}}};const Wx=n=>()=>{const[e,t]=co.useState({state:n.initState}),i={updateState:f=>()=>t(u=>(u.state=f(u.state)(),{...u})),readState:()=>e.state},a=n.dispatchers(i);return{state:e.state.pubState,dispatch:a}},VC=(n,e,t)=>{const i=co.useRef(0),a=co.useRef(t);return a.current=t,i.current=e(a.current,t)?i.current:i.current+1,co.useEffect(()=>n(),[i.current])};var Zd=Mt(Eo(So)),Jd=Yy(),$x={reflectSymbol:function(){return"startLayer"}},GC=Zc($x)()()(aa),Xx={reflectSymbol:function(){return"endLayer"}},WC=Zc(Xx)()()(aa),jx={reflectSymbol:function(){return"gcodeLines"}},$C=Zc(jx)()()(aa),XC={reflectSymbol:function(){return"PubState"}},jC=pn($p),YC=qc(Rl),qC=Mt(Cl),Yx=Dp(Rl),l_=zc(Yx),KC=Cp(Ip(or)),qx=Tl(or),u_=pn(qx),Qd=Nc(Fc)(qx),Kx=Eo(or),ZC=xp(Kx),JC=ui(Hx(Mc(Za))),QC=Ml(Bc(or)),eR=qc(Yx),tR=Mt(Kx),tm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),nm=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ul=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),nR=function(n){return function(e){if(n instanceof tm)return Zd(Ja((function(){var t=Jd(Sc)(al);return function(i){return t(GC(i))}})())(n.value0)(e));if(n instanceof nm)return Zd(Ja((function(){var t=Jd(Sc)(al);return function(i){return t(WC(i))}})())(n.value0)(e));if(n instanceof ul)return Zd(Ja((function(){var t=Jd(Sc)(al);return function(i){return t($C(i))}})())(n.value0)(e));throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 55, column 31 - line 66, column 11): "+[n.constructor.name])}},rR=(function(){return{gcodeLines:os.value,startLayer:0,endLayer:0}})(),iR=function(n){if(n instanceof tm)return{tag:"MsgSetStartLayer",args:en(Tc)(n.value0)};if(n instanceof nm)return{tag:"MsgSetEndLayer",args:en(Tc)(n.value0)};if(n instanceof ul)return{tag:"MsgSetGcodeLines",args:en(Qc(jc(Ar)))(n.value0)};throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 69, column 13 - line 81, column 6): "+[n.constructor.name])},oR=function(n){var e=function(a){return function(l){return ex(jC(Lp(a(l)))(function(f){if(f instanceof lt)return YC(sl(f.value0));if(f instanceof ht)return qC(zn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.Viewer (line 128, column 5 - line 130, column 27): "+[f.constructor.name])}))()}},t=function(a){var l=(function(){var f=n.emitMsgCtx("loadGcodeLines");return function(u){return l_(f(u))}})();return KC(u_(l_(n.readPubState))(function(f){return Qd(ZC(JC(f.gcodeLines)(go.value))(QC(Qa(Yh.value)("Gcode lines are already loading"))))(function(){return Qd(l(new ul(go.value)))(function(){return u_(lC(a.url))(function(u){var d=Hy(`
`)(u);return l(new ul(new as(d)))})})})}))(function(f){return Qd(eR(sl(f)))(function(){return f.code instanceof Yh?tR(zn):l(new ul(new ss(sl(f))))})})},i=function(a){return function(l){return n.emitMsg(a(l))()}};return{emitSetStartLayer:i(tm.create),emitSetEndLayer:i(nm.create),runLoadGcodeLines:e(t)}},aR=Zp()(Zo(Zo(Zo(Wp)()()($x))()()(jx))()()(Xx))(XC)({gcodeLines:Qc(jc(Ar)),startLayer:Tc,endLayer:Tc}),sR=Gx({updatePubState:function(n){return function(e){return Np(nR(n)(e))}},dispatchers:oR,initPubState:rR,initPrivState:{},printError:Lr(Pr),encodeJsonPubState:en(aR),encodeMsg:iR}),lR=Wx(sR);const uR=()=>window.location.search;var cR=bl(),fR=function(n){return cR(tT(n))},Zx=function(n){return n.bitraverse},dR=function(n){var e=Zx(n);return function(t){var i=e(t),a=Mt(t);return function(l){return i(l)(a)}}},Jx={bitraverse:function(n){var e=n.Apply0(),t=hs(e),i=Ot(e.Functor0());return function(a){return function(l){return function(f){return t(i(Wt.create)(a(f.value0)))(l(f.value1))}}}}},hR=function(n,e,t){var i=0,a;return function(l){if(i===2)return a;if(i===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+e+", line "+l+")",e,l);return i=1,a=t(),i=2,a}},c_=Zx(Jx)(oa),f_=Bp(Wc)(oa),pR=y1(Pi)(Za),mR=Ot(AC),vR=Ot(Bw),gR=Op(TC),_R=Gw(wl),yR=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),xR=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),SR=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),Qx=(function(){function n(){}return n.value=new n,n})(),Cr=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),_o=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),np=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),ls=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),rp=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),ER=(function(){var n=function(v){return{segments:v.value0.value0,params:v.value0.value1,hash:v.value1}},e=function(v){return function(g){return g===""?[]:Hy(v)(g)}},t=function(v){return function(g){return function(S){var E=MA(g)(S);if(E instanceof bt)return new Wt(EA(E.value0)(S),wA(E.value0+xA(g)|0)(S));if(E instanceof Dt)return v(S);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 191, column 5 - line 193, column 23): "+[E.constructor.name])}}},i=function(v){var g=HT(v);if(g instanceof Dt)return new lt(new SR(v));if(g instanceof bt)return new ht(g.value0);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 195, column 29 - line 197, column 22): "+[g.constructor.name])},a=(function(){var v=c_(i)(i),g=t(oi(Wt.create)(""))("=");return function(S){return v(g(S))}})(),l=(function(){var v=f_(a),g=e("&");return function(S){return v(g(S))}})(),f=(function(){var v=e("/");return function(g){return(function(S){return S.length===2&&S[0]===""&&S[1]===""?new ht([""]):f_(i)(S)})(v(g))}})(),u=(function(){var v=c_(f)(l),g=t(oi(Wt.create)(""))("?");return function(S){return v(g(S))}})(),d=Ot(ia)(n),p=dR(Jx)(oa)(u),m=t(oi(Wt.create)(""))("#");return function(v){return d(p(m(v)))}})(),wR=function(n){return new ls(function(e){var t=pR(n)(e.params);return t instanceof bt?new _o(e,t.value0):new Cr(new xR(n))})},MR={map:function(n){return function(e){if(e instanceof Cr)return new Cr(e.value0);if(e instanceof _o)return new _o(e.value0,n(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},eS=Ot(MR),ip={map:function(n){return function(e){if(e instanceof np)return new np(mR(Ot(ip)(n))(e.value0));if(e instanceof ls)return new ls(vR(eS(n))(e.value0));if(e instanceof rp)return new rp(e.value0,Ot(ip)(n)(e.value1));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}},AR=function(n){return function(e){var t=D1(e.segments);return t instanceof bt&&n===t.value0?new _o({params:e.params,hash:e.hash,segments:U1(1)(e.segments)},zn):t instanceof bt?new Cr(new yR(n,t.value0)):new Cr(Qx.value)}},tS=hR("runRouteParser","Routing.Duplex.Parser",function(){var n=function(t){return function(i){return function(a){return i instanceof Cr?tS(161)(t)(a):i}}},e=function(t){return function(i){var a=t,l=!1,f;function u(d,p){if(p instanceof np)return l=!0,gR(n(d))(new Cr(Qx.value))(p.value0);if(p instanceof ls)return l=!0,p.value0(d);if(p instanceof rp){var m=AR(p.value0)(d);if(m instanceof Cr)return l=!0,new Cr(m.value0);if(m instanceof _o){a=m.value0,i=p.value1;return}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 157, column 7 - line 159, column 40): "+[m.constructor.name])}throw new Error("Failed pattern match at Routing.Duplex.Parser (line 153, column 14 - line 159, column 40): "+[p.constructor.name])}for(;!l;)f=u(a,i);return f}};return e}),op=tS(150),TR=function(n){return _R(ER)((function(){var e=oi(op)(n);return function(t){return(function(i){if(i instanceof Cr)return new lt(i.value0);if(i instanceof _o)return new ht(i.value1);throw new Error("Failed pattern match at Routing.Duplex.Parser (line 200, column 49 - line 202, column 29): "+[i.constructor.name])})(e(t))}})())},bR={apply:function(n){return function(e){return new ls(function(t){var i=op(t)(n);if(i instanceof Cr)return new Cr(i.value0);if(i instanceof _o)return eS(i.value1)(op(i.value0)(e));throw new Error("Failed pattern match at Routing.Duplex.Parser (line 81, column 5 - line 83, column 56): "+[i.constructor.name])})}}},CR={pure:(function(){var n=oi(_o.create);return function(e){return ls.create(n(e))}})()},nS={append:function(n){return function(e){return function(t){return e(n(t))}}}},RR=function(n){return function(e){return function(t){return{segments:t.segments,hash:t.hash,params:N1(new Wt(n,e))(t.params)}}}},LR={mempty:Lr(Pr),Semigroup0:function(){return nS}},PR=Dr(nS),DR=Mt(CR),rS=Lr(Pr),IR=hs(bR),UR=Ot(ip),rm=(function(){function n(e,t){this.value0=e,this.value1=t}return n.create=function(e){return function(t){return new n(e,t)}},n})(),NR=rS,FR=(function(){return new rm(ms(pM(LR)),DR({}))})(),OR=function(n){var e=wo(n)(),t=Xy(n)()();return function(){return function(){return function(){return function(i){return function(a){return function(l){return new rm(function(f){return PR(l.value0(f))(a.value0(e(i)(f)))},IR(UR(oi(t(i)))(l.value1))(a.value1))}}}}}}},zR=function(n){return TR(n.value1)},BR=function(n){return n.params},kR=function(n){return new rm(RR(n),wR(n))},HR={buildParams:function(n){return function(e){return rS}}},iS=function(n){return n.buildParams},VR=function(n){var e=OR(n)()()(),t=wo(n)(),i=jr(n);return function(){return function(){return function(){return function(){return function(a){var l=iS(a);return{buildParams:function(f){return function(u){return function(d){return l(Lt.value)(u)(e(Lt.value)(t(Lt.value)(u)(kR(i(Lt.value))))(d))}}}}}}}}}},GR=function(){return function(n){var e=iS(n);return{params:function(t){return e(Lt.value)(t)(FR)}}}},WR=Mt(Eo(So)),$R=Yy(),oS={reflectSymbol:function(){return"index"}},XR=Zc(oS)()()(aa),jR=pn($p),YR=qc(Rl),qR=Mt(Cl),aS=Nc(Fc),sS=Zy(Sl)(gy),KR=aS(sS),ZR=DM(oT(fy)(So)),eh=Mt(Jy(fy)(_y)),JR=pn(sS),QR={reflectSymbol:function(){return"url"}},eL=GR()(VR(QR)()()()()(HR)),lS=Tl(or),d_=pn(lS),Gu=zc(Dp(Rl)),tL={reflectSymbol:function(){return"pictures"}},nL={reflectSymbol:function(){return"name"}},rL={reflectSymbol:function(){return"gcode"}},iL=ui(Hx(Mc(aC(Jw()(Wd(Wd(Wd(Zw)()(tL)(Mc(Za)))()(nL)(Za))()(rL)(Za)))))),oL=Mt(Eo(or)),aL=Cp(Ip(or)),sL=aS(lS),lL={reflectSymbol:function(){return"PubState"}},th=(function(){function n(e){this.value0=e}return n.create=function(e){return new n(e)},n})(),uL=function(n){return function(e){return WR(Ja((function(){var t=$R(Sc)(al);return function(i){return t(XR(i))}})())(n.value0)(e))}},cL=function(n){return function(e){return ex(jR(Lp(n(e)))(function(t){if(t instanceof lt)return YR(sl(t.value0));if(t instanceof ht)return qR(zn);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 105, column 3 - line 107, column 25): "+[t.constructor.name])}))()}},fL=function(n){var e=function(t){var i=BR(t);return function(a){return function(l){return function(f){var u=zR(i(l))(f);if(u instanceof lt)return KR(ZR([u.value0]))(function(){return eh(a)});if(u instanceof ht)return eh(u.value0);throw new Error("Failed pattern match at GCodeViewer.StateMachines.App (line 165, column 21 - line 169, column 22): "+[u.constructor.name])}}}};return fR(JR(e(eL)({url:"index.json"})({url:NR})(n))(function(t){return eh({url:t.url})}))},dL=(function(){return{index:os.value}})(),hL=function(){var e=uR(),t=fL(e);return t.value0},pL=function(n){return{tag:"MsgSetIndex",args:en(Qc(Jp))(n.value0)}},mL=function(n){var e=function(t){return d_(Gu(n.readPubState))(function(i){var a=iL(i.index)(go.value);return a?oL(zn):aL(sL(Gu(n.emitMsg(new th(go.value))))(function(){return d_(cC({url:t.url}))(function(l){return Gu(n.emitMsg(new th(new as(l))))})}))(function(l){return Gu(n.emitMsg(new th(new ss(sl(l)))))})})};return{msg:pb(n.emitMsg),runFetchIndex:cL(e)}},vL=Zp()(Zo(Wp)()()(oS))(lL)({index:Qc(Jp)}),gL=Gx({updatePubState:function(n){return function(e){return Np(uL(n)(e))}},dispatchers:mL,initPubState:dL,initPrivState:{},printError:Lr(Pr),encodeJsonPubState:en(vL),encodeMsg:pL}),_L=Wx(gL);const yL="0.0.3",xL="_root_6ggp7_1",SL="_version_6ggp7_5",Wu=({children:n,viewErrors:e,viewInfo:t})=>Kt.jsxs("div",{className:xL,children:[Kt.jsx("div",{children:n}),Kt.jsx("div",{children:e}),Kt.jsx("div",{children:t}),Kt.jsx("div",{className:SL,children:yL})]}),EL="_root_xmkgg_1",wL={root:EL},ML=({items:n})=>Kt.jsx("div",{className:wL.root,children:n.map(e=>e)}),AL="_root_126vu_1",TL=({viewPictures:n,viewGcode:e})=>Kt.jsxs("div",{className:AL,children:[n,e]}),bL="_root_1b3ad_1",CL=({pictures:n})=>Kt.jsx("div",{className:bL});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="159",Pa={ROTATE:0,DOLLY:1,PAN:2},Da={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RL=0,h_=1,LL=2,uS=1,PL=2,Ti=3,yo=0,rr=1,bi=2,ho=0,es=1,p_=2,m_=3,v_=4,DL=5,Yo=100,IL=101,UL=102,g_=103,__=104,NL=200,FL=201,OL=202,zL=203,ap=204,sp=205,BL=206,kL=207,HL=208,VL=209,GL=210,WL=211,$L=212,XL=213,jL=214,YL=0,qL=1,KL=2,bc=3,ZL=4,JL=5,QL=6,eP=7,im=0,tP=1,nP=2,po=0,rP=1,iP=2,oP=3,aP=4,sP=5,cS=300,us=301,cs=302,lp=303,up=304,tf=306,cp=1e3,$r=1001,fp=1002,An=1003,y_=1004,nh=1005,Er=1006,lP=1007,ml=1008,mo=1009,uP=1010,cP=1011,om=1012,fS=1013,lo=1014,Ci=1015,vl=1016,dS=1017,hS=1018,Jo=1020,fP=1021,wr=1023,dP=1024,hP=1025,Qo=1026,fs=1027,pP=1028,pS=1029,mP=1030,mS=1031,vS=1033,rh=33776,ih=33777,oh=33778,ah=33779,x_=35840,S_=35841,E_=35842,w_=35843,gS=36196,M_=37492,A_=37496,T_=37808,b_=37809,C_=37810,R_=37811,L_=37812,P_=37813,D_=37814,I_=37815,U_=37816,N_=37817,F_=37818,O_=37819,z_=37820,B_=37821,sh=36492,k_=36494,H_=36495,vP=36283,V_=36284,G_=36285,W_=36286,_S=3e3,ea=3001,gP=3200,_P=3201,yS=0,yP=1,Mr="",Tn="srgb",Li="srgb-linear",am="display-p3",nf="display-p3-linear",Cc="linear",Gt="srgb",Rc="rec709",Lc="p3",Ia=7680,$_=519,xP=512,SP=513,EP=514,xS=515,wP=516,MP=517,AP=518,TP=519,dp=35044,X_="300 es",hp=1035,ii=2e3,gl=2001;class sa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let j_=1234567;const cl=Math.PI/180,_l=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function bn(n,e,t){return Math.max(e,Math.min(t,n))}function sm(n,e){return(n%e+e)%e}function bP(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function CP(n,e,t){return n!==e?(t-n)/(e-n):0}function fl(n,e,t){return(1-t)*n+t*e}function RP(n,e,t,i){return fl(n,e,1-Math.exp(-t*i))}function LP(n,e=1){return e-Math.abs(sm(n,e*2)-e)}function PP(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function DP(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function IP(n,e){return n+Math.floor(Math.random()*(e-n+1))}function UP(n,e){return n+Math.random()*(e-n)}function NP(n){return n*(.5-Math.random())}function FP(n){n!==void 0&&(j_=n);let e=j_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OP(n){return n*cl}function zP(n){return n*_l}function pp(n){return(n&n-1)===0&&n!==0}function BP(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kP(n,e,t,i,a){const l=Math.cos,f=Math.sin,u=l(t/2),d=f(t/2),p=l((e+i)/2),m=f((e+i)/2),v=l((e-i)/2),g=f((e-i)/2),S=l((i-e)/2),E=f((i-e)/2);switch(a){case"XYX":n.set(u*m,d*v,d*g,u*p);break;case"YZY":n.set(d*g,u*m,d*v,u*p);break;case"ZXZ":n.set(d*v,d*g,u*m,u*p);break;case"XZX":n.set(u*m,d*E,d*S,u*p);break;case"YXY":n.set(d*S,u*m,d*E,u*p);break;case"ZYZ":n.set(d*E,d*S,u*m,u*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const SS={DEG2RAD:cl,RAD2DEG:_l,generateUUID:Ri,clamp:bn,euclideanModulo:sm,mapLinear:bP,inverseLerp:CP,lerp:fl,damp:RP,pingpong:LP,smoothstep:PP,smootherstep:DP,randInt:IP,randFloat:UP,randFloatSpread:NP,seededRandom:FP,degToRad:OP,radToDeg:zP,isPowerOfTwo:pp,ceilPowerOfTwo:BP,floorPowerOfTwo:Pc,setQuaternionFromProperEuler:kP,normalize:It,denormalize:ri};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*i-f*a+e.x,this.y=l*a+f*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,t,i,a,l,f,u,d,p){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,f,u,d,p)}set(e,t,i,a,l,f,u,d,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=u,m[3]=t,m[4]=l,m[5]=d,m[6]=i,m[7]=f,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,f=i[0],u=i[3],d=i[6],p=i[1],m=i[4],v=i[7],g=i[2],S=i[5],E=i[8],w=a[0],x=a[3],y=a[6],R=a[1],M=a[4],D=a[7],U=a[2],O=a[5],F=a[8];return l[0]=f*w+u*R+d*U,l[3]=f*x+u*M+d*O,l[6]=f*y+u*D+d*F,l[1]=p*w+m*R+v*U,l[4]=p*x+m*M+v*O,l[7]=p*y+m*D+v*F,l[2]=g*w+S*R+E*U,l[5]=g*x+S*M+E*O,l[8]=g*y+S*D+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8];return t*f*m-t*u*p-i*l*m+i*u*d+a*l*p-a*f*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8],v=m*f-u*p,g=u*d-m*l,S=p*l-f*d,E=t*v+i*g+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*p-m*i)*w,e[2]=(u*i-a*f)*w,e[3]=g*w,e[4]=(m*t-a*d)*w,e[5]=(a*l-u*t)*w,e[6]=S*w,e[7]=(i*d-p*t)*w,e[8]=(f*t-i*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,f,u){const d=Math.cos(l),p=Math.sin(l);return this.set(i*d,i*p,-i*(d*f+p*u)+f+e,-a*p,a*d,-a*(-p*f+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(lh.makeScale(e,t)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new yt;function ES(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Dc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function HP(){const n=Dc("canvas");return n.style.display="block",n}const Y_={};function dl(n){n in Y_||(Y_[n]=!0,console.warn(n))}const q_=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),K_=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$u={[Li]:{transfer:Cc,primaries:Rc,toReference:n=>n,fromReference:n=>n},[Tn]:{transfer:Gt,primaries:Rc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[nf]:{transfer:Cc,primaries:Lc,toReference:n=>n.applyMatrix3(K_),fromReference:n=>n.applyMatrix3(q_)},[am]:{transfer:Gt,primaries:Lc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(K_),fromReference:n=>n.applyMatrix3(q_).convertLinearToSRGB()}},VP=new Set([Li,nf]),Ut={enabled:!0,_workingColorSpace:Li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!VP.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=$u[e].toReference,a=$u[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $u[n].primaries},getTransfer:function(n){return n===Mr?Cc:$u[n].transfer}};function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function uh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ua;class wS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ua===void 0&&(Ua=Dc("canvas")),Ua.width=e.width,Ua.height=e.height;const i=Ua.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ua}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=ts(l[f]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ts(t[i]/255)*255):t[i]=ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GP=0;class MS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GP++}),this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,u=a.length;f<u;f++)a[f].isDataTexture?l.push(ch(a[f].image)):l.push(ch(a[f]))}else l=ch(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function ch(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WP=0;class ir extends sa{constructor(e=ir.DEFAULT_IMAGE,t=ir.DEFAULT_MAPPING,i=$r,a=$r,l=Er,f=ml,u=wr,d=mo,p=ir.DEFAULT_ANISOTROPY,m=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WP++}),this.uuid=Ri(),this.name="",this.source=new MS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(dl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===ea?Tn:Mr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cp:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cp:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tn?ea:_S}set encoding(e){dl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ea?Tn:Mr}}ir.DEFAULT_IMAGE=null;ir.DEFAULT_MAPPING=cS;ir.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*i+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*i+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*i+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*i+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const d=e.elements,p=d[0],m=d[4],v=d[8],g=d[1],S=d[5],E=d[9],w=d[2],x=d[6],y=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(p+1)/2,D=(S+1)/2,U=(y+1)/2,O=(m+g)/4,F=(v+w)/4,ce=(E+x)/4;return M>D&&M>U?M<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(M),a=O/i,l=F/i):D>U?D<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(D),i=O/a,l=ce/a):U<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),i=F/l,a=ce/l),this.set(i,a,l,t),this}let R=Math.sqrt((x-E)*(x-E)+(v-w)*(v-w)+(g-m)*(g-m));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(v-w)/R,this.z=(g-m)/R,this.w=Math.acos((p+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $P extends sa{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(dl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ea?Tn:Mr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Er,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ir(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new MS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends $P{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class AS extends ir{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class XP extends ir{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,f,u){let d=i[a+0],p=i[a+1],m=i[a+2],v=i[a+3];const g=l[f+0],S=l[f+1],E=l[f+2],w=l[f+3];if(u===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(u===1){e[t+0]=g,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||d!==g||p!==S||m!==E){let x=1-u;const y=d*g+p*S+m*E+v*w,R=y>=0?1:-1,M=1-y*y;if(M>Number.EPSILON){const U=Math.sqrt(M),O=Math.atan2(U,y*R);x=Math.sin(x*O)/U,u=Math.sin(u*O)/U}const D=u*R;if(d=d*x+g*D,p=p*x+S*D,m=m*x+E*D,v=v*x+w*D,x===1-u){const U=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=U,p*=U,m*=U,v*=U}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,l,f){const u=i[a],d=i[a+1],p=i[a+2],m=i[a+3],v=l[f],g=l[f+1],S=l[f+2],E=l[f+3];return e[t]=u*E+m*v+d*S-p*g,e[t+1]=d*E+m*g+p*v-u*S,e[t+2]=p*E+m*S+u*g-d*v,e[t+3]=m*E-u*v-d*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,l=e._z,f=e._order,u=Math.cos,d=Math.sin,p=u(i/2),m=u(a/2),v=u(l/2),g=d(i/2),S=d(a/2),E=d(l/2);switch(f){case"XYZ":this._x=g*m*v+p*S*E,this._y=p*S*v-g*m*E,this._z=p*m*E+g*S*v,this._w=p*m*v-g*S*E;break;case"YXZ":this._x=g*m*v+p*S*E,this._y=p*S*v-g*m*E,this._z=p*m*E-g*S*v,this._w=p*m*v+g*S*E;break;case"ZXY":this._x=g*m*v-p*S*E,this._y=p*S*v+g*m*E,this._z=p*m*E+g*S*v,this._w=p*m*v-g*S*E;break;case"ZYX":this._x=g*m*v-p*S*E,this._y=p*S*v+g*m*E,this._z=p*m*E-g*S*v,this._w=p*m*v+g*S*E;break;case"YZX":this._x=g*m*v+p*S*E,this._y=p*S*v+g*m*E,this._z=p*m*E-g*S*v,this._w=p*m*v-g*S*E;break;case"XZY":this._x=g*m*v-p*S*E,this._y=p*S*v-g*m*E,this._z=p*m*E+g*S*v,this._w=p*m*v+g*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],f=t[1],u=t[5],d=t[9],p=t[2],m=t[6],v=t[10],g=i+u+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(i>u&&i>v){const S=2*Math.sqrt(1+i-u-v);this._w=(m-d)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(u>v){const S=2*Math.sqrt(1+u-i-v);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-i-u);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,f=e._w,u=t._x,d=t._y,p=t._z,m=t._w;return this._x=i*m+f*u+a*p-l*d,this._y=a*m+f*d+l*u-i*p,this._z=l*m+f*p+i*d-a*u,this._w=f*m-i*u-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,l=this._z,f=this._w;let u=f*e._w+i*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=i,this._y=a,this._z=l,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*i+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(d),m=Math.atan2(p,u),v=Math.sin((1-t)*m)/p,g=Math.sin(t*m)/p;return this._w=f*v+this._w*g,this._x=i*v+this._x*g,this._y=a*v+this._y*g,this._z=l*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(l),i*Math.cos(l),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Z_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Z_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,f=e.y,u=e.z,d=e.w,p=2*(f*a-u*i),m=2*(u*t-l*a),v=2*(l*i-f*t);return this.x=t+d*p+f*v-u*m,this.y=i+d*m+u*p-l*v,this.z=a+d*v+l*m-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,f=t.x,u=t.y,d=t.z;return this.x=a*d-l*u,this.y=l*f-i*d,this.z=i*u-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new k,Z_=new na;class Rr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=l.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,kr):kr.fromBufferAttribute(l,f),kr.applyMatrix4(e.matrixWorld),this.expandByPoint(kr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xu.copy(i.boundingBox)),Xu.applyMatrix4(e.matrixWorld),this.union(Xu)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kr),kr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),ju.subVectors(this.max,Js),Na.subVectors(e.a,Js),Fa.subVectors(e.b,Js),Oa.subVectors(e.c,Js),Qi.subVectors(Fa,Na),eo.subVectors(Oa,Fa),Vo.subVectors(Na,Oa);let t=[0,-Qi.z,Qi.y,0,-eo.z,eo.y,0,-Vo.z,Vo.y,Qi.z,0,-Qi.x,eo.z,0,-eo.x,Vo.z,0,-Vo.x,-Qi.y,Qi.x,0,-eo.y,eo.x,0,-Vo.y,Vo.x,0];return!dh(t,Na,Fa,Oa,ju)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,Na,Fa,Oa,ju))?!1:(Yu.crossVectors(Qi,eo),t=[Yu.x,Yu.y,Yu.z],dh(t,Na,Fa,Oa,ju))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new k,new k,new k,new k,new k,new k,new k,new k],kr=new k,Xu=new Rr,Na=new k,Fa=new k,Oa=new k,Qi=new k,eo=new k,Vo=new k,Js=new k,ju=new k,Yu=new k,Go=new k;function dh(n,e,t,i,a){for(let l=0,f=n.length-3;l<=f;l+=3){Go.fromArray(n,l);const u=a.x*Math.abs(Go.x)+a.y*Math.abs(Go.y)+a.z*Math.abs(Go.z),d=e.dot(Go),p=t.dot(Go),m=i.dot(Go);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>u)return!1}return!0}const jP=new Rr,Qs=new k,hh=new k;class si{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jP.setFromPoints(e).getCenter(i);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Qs,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(hh)),this.expandByPoint(Qs.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new k,ph=new k,qu=new k,to=new k,mh=new k,Ku=new k,vh=new k;class lm{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ph.copy(e).add(t).multiplyScalar(.5),qu.copy(t).sub(e).normalize(),to.copy(this.origin).sub(ph);const l=e.distanceTo(t)*.5,f=-this.direction.dot(qu),u=to.dot(this.direction),d=-to.dot(qu),p=to.lengthSq(),m=Math.abs(1-f*f);let v,g,S,E;if(m>0)if(v=f*d-u,g=f*u-d,E=l*m,v>=0)if(g>=-E)if(g<=E){const w=1/m;v*=w,g*=w,S=v*(v+f*g+2*u)+g*(f*v+g+2*d)+p}else g=l,v=Math.max(0,-(f*g+u)),S=-v*v+g*(g+2*d)+p;else g=-l,v=Math.max(0,-(f*g+u)),S=-v*v+g*(g+2*d)+p;else g<=-E?(v=Math.max(0,-(-f*l+u)),g=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+g*(g+2*d)+p):g<=E?(v=0,g=Math.min(Math.max(-l,-d),l),S=g*(g+2*d)+p):(v=Math.max(0,-(f*l+u)),g=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+g*(g+2*d)+p);else g=f>0?-l:l,v=Math.max(0,-(f*g+u)),S=-v*v+g*(g+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(ph).addScaledVector(qu,g),S}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),a=Ei.dot(Ei)-i*i,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),u=i-f,d=i+f;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,f,u,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(i=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(i=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),m>=0?(l=(e.min.y-g.y)*m,f=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,f=(e.min.y-g.y)*m),i>f||l>a||((l>i||isNaN(i))&&(i=l),(f<a||isNaN(a))&&(a=f),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,a,l){mh.subVectors(t,e),Ku.subVectors(i,e),vh.crossVectors(mh,Ku);let f=this.direction.dot(vh),u;if(f>0){if(a)return null;u=1}else if(f<0)u=-1,f=-f;else return null;to.subVectors(this.origin,e);const d=u*this.direction.dot(Ku.crossVectors(to,Ku));if(d<0)return null;const p=u*this.direction.dot(mh.cross(to));if(p<0||d+p>f)return null;const m=-u*to.dot(vh);return m<0?null:this.at(m/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,i,a,l,f,u,d,p,m,v,g,S,E,w,x){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,f,u,d,p,m,v,g,S,E,w,x)}set(e,t,i,a,l,f,u,d,p,m,v,g,S,E,w,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=l,y[5]=f,y[9]=u,y[13]=d,y[2]=p,y[6]=m,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=w,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/za.setFromMatrixColumn(e,0).length(),l=1/za.setFromMatrixColumn(e,1).length(),f=1/za.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*f,t[9]=i[9]*f,t[10]=i[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,f=Math.cos(i),u=Math.sin(i),d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=f*m,S=f*v,E=u*m,w=u*v;t[0]=d*m,t[4]=-d*v,t[8]=p,t[1]=S+E*p,t[5]=g-w*p,t[9]=-u*d,t[2]=w-g*p,t[6]=E+S*p,t[10]=f*d}else if(e.order==="YXZ"){const g=d*m,S=d*v,E=p*m,w=p*v;t[0]=g+w*u,t[4]=E*u-S,t[8]=f*p,t[1]=f*v,t[5]=f*m,t[9]=-u,t[2]=S*u-E,t[6]=w+g*u,t[10]=f*d}else if(e.order==="ZXY"){const g=d*m,S=d*v,E=p*m,w=p*v;t[0]=g-w*u,t[4]=-f*v,t[8]=E+S*u,t[1]=S+E*u,t[5]=f*m,t[9]=w-g*u,t[2]=-f*p,t[6]=u,t[10]=f*d}else if(e.order==="ZYX"){const g=f*m,S=f*v,E=u*m,w=u*v;t[0]=d*m,t[4]=E*p-S,t[8]=g*p+w,t[1]=d*v,t[5]=w*p+g,t[9]=S*p-E,t[2]=-p,t[6]=u*d,t[10]=f*d}else if(e.order==="YZX"){const g=f*d,S=f*p,E=u*d,w=u*p;t[0]=d*m,t[4]=w-g*v,t[8]=E*v+S,t[1]=v,t[5]=f*m,t[9]=-u*m,t[2]=-p*m,t[6]=S*v+E,t[10]=g-w*v}else if(e.order==="XZY"){const g=f*d,S=f*p,E=u*d,w=u*p;t[0]=d*m,t[4]=-v,t[8]=p*m,t[1]=g*v+w,t[5]=f*m,t[9]=S*v-E,t[2]=E*v-S,t[6]=u*m,t[10]=w*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YP,e,qP)}lookAt(e,t,i){const a=this.elements;return cr.subVectors(e,t),cr.lengthSq()===0&&(cr.z=1),cr.normalize(),no.crossVectors(i,cr),no.lengthSq()===0&&(Math.abs(i.z)===1?cr.x+=1e-4:cr.z+=1e-4,cr.normalize(),no.crossVectors(i,cr)),no.normalize(),Zu.crossVectors(cr,no),a[0]=no.x,a[4]=Zu.x,a[8]=cr.x,a[1]=no.y,a[5]=Zu.y,a[9]=cr.y,a[2]=no.z,a[6]=Zu.z,a[10]=cr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,f=i[0],u=i[4],d=i[8],p=i[12],m=i[1],v=i[5],g=i[9],S=i[13],E=i[2],w=i[6],x=i[10],y=i[14],R=i[3],M=i[7],D=i[11],U=i[15],O=a[0],F=a[4],ce=a[8],b=a[12],N=a[1],he=a[5],re=a[9],pe=a[13],H=a[2],ee=a[6],fe=a[10],ie=a[14],q=a[3],ne=a[7],$=a[11],C=a[15];return l[0]=f*O+u*N+d*H+p*q,l[4]=f*F+u*he+d*ee+p*ne,l[8]=f*ce+u*re+d*fe+p*$,l[12]=f*b+u*pe+d*ie+p*C,l[1]=m*O+v*N+g*H+S*q,l[5]=m*F+v*he+g*ee+S*ne,l[9]=m*ce+v*re+g*fe+S*$,l[13]=m*b+v*pe+g*ie+S*C,l[2]=E*O+w*N+x*H+y*q,l[6]=E*F+w*he+x*ee+y*ne,l[10]=E*ce+w*re+x*fe+y*$,l[14]=E*b+w*pe+x*ie+y*C,l[3]=R*O+M*N+D*H+U*q,l[7]=R*F+M*he+D*ee+U*ne,l[11]=R*ce+M*re+D*fe+U*$,l[15]=R*b+M*pe+D*ie+U*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],f=e[1],u=e[5],d=e[9],p=e[13],m=e[2],v=e[6],g=e[10],S=e[14],E=e[3],w=e[7],x=e[11],y=e[15];return E*(+l*d*v-a*p*v-l*u*g+i*p*g+a*u*S-i*d*S)+w*(+t*d*S-t*p*g+l*f*g-a*f*S+a*p*m-l*d*m)+x*(+t*p*v-t*u*S-l*f*v+i*f*S+l*u*m-i*p*m)+y*(-a*u*m-t*d*v+t*u*g+a*f*v-i*f*g+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8],v=e[9],g=e[10],S=e[11],E=e[12],w=e[13],x=e[14],y=e[15],R=v*x*p-w*g*p+w*d*S-u*x*S-v*d*y+u*g*y,M=E*g*p-m*x*p-E*d*S+f*x*S+m*d*y-f*g*y,D=m*w*p-E*v*p+E*u*S-f*w*S-m*u*y+f*v*y,U=E*v*d-m*w*d-E*u*g+f*w*g+m*u*x-f*v*x,O=t*R+i*M+a*D+l*U;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=R*F,e[1]=(w*g*l-v*x*l-w*a*S+i*x*S+v*a*y-i*g*y)*F,e[2]=(u*x*l-w*d*l+w*a*p-i*x*p-u*a*y+i*d*y)*F,e[3]=(v*d*l-u*g*l-v*a*p+i*g*p+u*a*S-i*d*S)*F,e[4]=M*F,e[5]=(m*x*l-E*g*l+E*a*S-t*x*S-m*a*y+t*g*y)*F,e[6]=(E*d*l-f*x*l-E*a*p+t*x*p+f*a*y-t*d*y)*F,e[7]=(f*g*l-m*d*l+m*a*p-t*g*p-f*a*S+t*d*S)*F,e[8]=D*F,e[9]=(E*v*l-m*w*l-E*i*S+t*w*S+m*i*y-t*v*y)*F,e[10]=(f*w*l-E*u*l+E*i*p-t*w*p-f*i*y+t*u*y)*F,e[11]=(m*u*l-f*v*l-m*i*p+t*v*p+f*i*S-t*u*S)*F,e[12]=U*F,e[13]=(m*w*a-E*v*a+E*i*g-t*w*g-m*i*x+t*v*x)*F,e[14]=(E*u*a-f*w*a-E*i*d+t*w*d+f*i*x-t*u*x)*F,e[15]=(f*v*a-m*u*a+m*i*d-t*v*d-f*i*g+t*u*g)*F,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,f=e.x,u=e.y,d=e.z,p=l*f,m=l*u;return this.set(p*f+i,p*u-a*d,p*d+a*u,0,p*u+a*d,m*u+i,m*d-a*f,0,p*d-a*u,m*d+a*f,l*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,f){return this.set(1,i,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,f=t._y,u=t._z,d=t._w,p=l+l,m=f+f,v=u+u,g=l*p,S=l*m,E=l*v,w=f*m,x=f*v,y=u*v,R=d*p,M=d*m,D=d*v,U=i.x,O=i.y,F=i.z;return a[0]=(1-(w+y))*U,a[1]=(S+D)*U,a[2]=(E-M)*U,a[3]=0,a[4]=(S-D)*O,a[5]=(1-(g+y))*O,a[6]=(x+R)*O,a[7]=0,a[8]=(E+M)*F,a[9]=(x-R)*F,a[10]=(1-(g+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let l=za.set(a[0],a[1],a[2]).length();const f=za.set(a[4],a[5],a[6]).length(),u=za.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Hr.copy(this);const p=1/l,m=1/f,v=1/u;return Hr.elements[0]*=p,Hr.elements[1]*=p,Hr.elements[2]*=p,Hr.elements[4]*=m,Hr.elements[5]*=m,Hr.elements[6]*=m,Hr.elements[8]*=v,Hr.elements[9]*=v,Hr.elements[10]*=v,t.setFromRotationMatrix(Hr),i.x=l,i.y=f,i.z=u,this}makePerspective(e,t,i,a,l,f,u=ii){const d=this.elements,p=2*l/(t-e),m=2*l/(i-a),v=(t+e)/(t-e),g=(i+a)/(i-a);let S,E;if(u===ii)S=-(f+l)/(f-l),E=-2*f*l/(f-l);else if(u===gl)S=-f/(f-l),E=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,l,f,u=ii){const d=this.elements,p=1/(t-e),m=1/(i-a),v=1/(f-l),g=(t+e)*p,S=(i+a)*m;let E,w;if(u===ii)E=(f+l)*v,w=-2*v;else if(u===gl)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const za=new k,Hr=new kt,YP=new k(0,0,0),qP=new k(1,1,1),no=new k,Zu=new k,cr=new k,J_=new kt,Q_=new na;class Pl{constructor(e=0,t=0,i=0,a=Pl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],f=a[4],u=a[8],d=a[1],p=a[5],m=a[9],v=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(bn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-bn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-bn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return J_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pl.DEFAULT_ORDER="XYZ";class TS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KP=0;const e0=new k,Ba=new na,wi=new kt,Ju=new k,el=new k,ZP=new k,JP=new na,t0=new k(1,0,0),n0=new k(0,1,0),r0=new k(0,0,1),QP={type:"added"},e2={type:"removed"};class Xn extends sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KP++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new k,t=new Pl,i=new na,a=new k(1,1,1);function l(){i.setFromEuler(t,!1)}function f(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new kt},normalMatrix:{value:new yt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new TS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.multiply(Ba),this}rotateOnWorldAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.premultiply(Ba),this}rotateX(e){return this.rotateOnAxis(t0,e)}rotateY(e){return this.rotateOnAxis(n0,e)}rotateZ(e){return this.rotateOnAxis(r0,e)}translateOnAxis(e,t){return e0.copy(e).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t0,e)}translateY(e){return this.translateOnAxis(n0,e)}translateZ(e){return this.translateOnAxis(r0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ju.copy(e):Ju.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(el,Ju,this.up):wi.lookAt(Ju,el,this.up),this.quaternion.setFromRotationMatrix(wi),a&&(wi.extractRotation(a.matrixWorld),Ba.setFromRotationMatrix(wi),this.quaternion.premultiply(Ba.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(QP)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e2)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const f=this.children[i].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,e,ZP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,JP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const l=t[i];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,p=this.material.length;d<p;d++)u.push(l(e.materials,this.material[d]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(l(e.animations,d))}}if(t){const u=f(e.geometries),d=f(e.materials),p=f(e.textures),m=f(e.images),v=f(e.shapes),g=f(e.skeletons),S=f(e.animations),E=f(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=a,i;function f(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Xn.DEFAULT_UP=new k(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vr=new k,Mi=new k,gh=new k,Ai=new k,ka=new k,Ha=new k,i0=new k,_h=new k,yh=new k,xh=new k;let Qu=!1;class Wr{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Vr.subVectors(e,t),a.cross(Vr);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){Vr.subVectors(a,t),Mi.subVectors(i,t),gh.subVectors(e,t);const f=Vr.dot(Vr),u=Vr.dot(Mi),d=Vr.dot(gh),p=Mi.dot(Mi),m=Mi.dot(gh),v=f*p-u*u;if(v===0)return l.set(-2,-1,-1);const g=1/v,S=(p*d-u*m)*g,E=(f*m-u*d)*g;return l.set(1-S-E,E,S)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ai),Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,i,a,l,f,u,d){return Qu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qu=!0),this.getInterpolation(e,t,i,a,l,f,u,d)}static getInterpolation(e,t,i,a,l,f,u,d){return this.getBarycoord(e,t,i,a,Ai),d.setScalar(0),d.addScaledVector(l,Ai.x),d.addScaledVector(f,Ai.y),d.addScaledVector(u,Ai.z),d}static isFrontFacing(e,t,i,a){return Vr.subVectors(i,t),Mi.subVectors(e,t),Vr.cross(Mi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vr.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Vr.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,l){return Qu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qu=!0),Wr.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}getInterpolation(e,t,i,a,l){return Wr.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return Wr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let f,u;ka.subVectors(a,i),Ha.subVectors(l,i),_h.subVectors(e,i);const d=ka.dot(_h),p=Ha.dot(_h);if(d<=0&&p<=0)return t.copy(i);yh.subVectors(e,a);const m=ka.dot(yh),v=Ha.dot(yh);if(m>=0&&v<=m)return t.copy(a);const g=d*v-m*p;if(g<=0&&d>=0&&m<=0)return f=d/(d-m),t.copy(i).addScaledVector(ka,f);xh.subVectors(e,l);const S=ka.dot(xh),E=Ha.dot(xh);if(E>=0&&S<=E)return t.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return u=p/(p-E),t.copy(i).addScaledVector(Ha,u);const x=m*E-S*v;if(x<=0&&v-m>=0&&S-E>=0)return i0.subVectors(l,a),u=(v-m)/(v-m+(S-E)),t.copy(a).addScaledVector(i0,u);const y=1/(x+w+g);return f=w*y,u=g*y,t.copy(i).addScaledVector(ka,f).addScaledVector(Ha,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ro={h:0,s:0,l:0},ec={h:0,s:0,l:0};function Sh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Ut.workingColorSpace){if(e=sm(e,1),t=bn(t,0,1),i=bn(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,f=2*i-l;this.r=Sh(f,l,e+1/3),this.g=Sh(f,l,e),this.b=Sh(f,l,e-1/3)}return Ut.toWorkingColorSpace(this,a),this}setStyle(e,t=Tn){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],u=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=bS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=uh(e.r),this.g=uh(e.g),this.b=uh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Ut.fromWorkingColorSpace(Nn.copy(this),e),Math.round(bn(Nn.r*255,0,255))*65536+Math.round(bn(Nn.g*255,0,255))*256+Math.round(bn(Nn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Nn.copy(this),t);const i=Nn.r,a=Nn.g,l=Nn.b,f=Math.max(i,a,l),u=Math.min(i,a,l);let d,p;const m=(u+f)/2;if(u===f)d=0,p=0;else{const v=f-u;switch(p=m<=.5?v/(f+u):v/(2-f-u),f){case i:d=(a-l)/v+(a<l?6:0);break;case a:d=(l-i)/v+2;break;case l:d=(i-a)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Tn){Ut.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,i=Nn.g,a=Nn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ro),this.setHSL(ro.h+e,ro.s+t,ro.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ro),e.getHSL(ec);const i=fl(ro.h,ec.h,t),a=fl(ro.s,ec.s,t),l=fl(ro.l,ec.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new et;et.NAMES=bS;let t2=0;class vs extends sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=es,this.side=yo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ap,this.blendDst=sp,this.blendEquation=Yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=bc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==yo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ap&&(i.blendSrc=this.blendSrc),this.blendDst!==sp&&(i.blendDst=this.blendDst),this.blendEquation!==Yo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const f=[];for(const u in l){const d=l[u];delete d.metadata,f.push(d)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(i.textures=l),f.length>0&&(i.images=f)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class CS extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new k,tc=new ft;class hr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array),l=It(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dp&&(e.usage=this.usage),e}}class RS extends hr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class LS extends hr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends hr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let n2=0;const Sr=new kt,Eh=new Xn,Va=new k,fr=new Rr,tl=new Rr,yn=new k;class Bn extends sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ES(e)?LS:RS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new yt().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,i){return Sr.makeTranslation(e,t,i),this.applyMatrix4(Sr),this}scale(e,t,i){return Sr.makeScale(e,t,i),this.applyMatrix4(Sr),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Va).negate(),this.translate(Va.x,Va.y,Va.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const l=e[i];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];fr.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,fr.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,fr.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(fr.min),this.boundingBox.expandByPoint(fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(fr.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const u=t[l];tl.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(fr.min,tl.min),fr.expandByPoint(yn),yn.addVectors(fr.max,tl.max),fr.expandByPoint(yn)):(fr.expandByPoint(tl.min),fr.expandByPoint(tl.max))}fr.getCenter(i);let a=0;for(let l=0,f=e.count;l<f;l++)yn.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(yn));if(t)for(let l=0,f=t.length;l<f;l++){const u=t[l],d=this.morphTargetsRelative;for(let p=0,m=u.count;p<m;p++)yn.fromBufferAttribute(u,p),d&&(Va.fromBufferAttribute(e,p),yn.add(Va)),a=Math.max(a,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,l=t.normal.array,f=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hr(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,p=[],m=[];for(let N=0;N<u;N++)p[N]=new k,m[N]=new k;const v=new k,g=new k,S=new k,E=new ft,w=new ft,x=new ft,y=new k,R=new k;function M(N,he,re){v.fromArray(a,N*3),g.fromArray(a,he*3),S.fromArray(a,re*3),E.fromArray(f,N*2),w.fromArray(f,he*2),x.fromArray(f,re*2),g.sub(v),S.sub(v),w.sub(E),x.sub(E);const pe=1/(w.x*x.y-x.x*w.y);isFinite(pe)&&(y.copy(g).multiplyScalar(x.y).addScaledVector(S,-w.y).multiplyScalar(pe),R.copy(S).multiplyScalar(w.x).addScaledVector(g,-x.x).multiplyScalar(pe),p[N].add(y),p[he].add(y),p[re].add(y),m[N].add(R),m[he].add(R),m[re].add(R))}let D=this.groups;D.length===0&&(D=[{start:0,count:i.length}]);for(let N=0,he=D.length;N<he;++N){const re=D[N],pe=re.start,H=re.count;for(let ee=pe,fe=pe+H;ee<fe;ee+=3)M(i[ee+0],i[ee+1],i[ee+2])}const U=new k,O=new k,F=new k,ce=new k;function b(N){F.fromArray(l,N*3),ce.copy(F);const he=p[N];U.copy(he),U.sub(F.multiplyScalar(F.dot(he))).normalize(),O.crossVectors(ce,he);const pe=O.dot(m[N])<0?-1:1;d[N*4]=U.x,d[N*4+1]=U.y,d[N*4+2]=U.z,d[N*4+3]=pe}for(let N=0,he=D.length;N<he;++N){const re=D[N],pe=re.start,H=re.count;for(let ee=pe,fe=pe+H;ee<fe;ee+=3)b(i[ee+0]),b(i[ee+1]),b(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const a=new k,l=new k,f=new k,u=new k,d=new k,p=new k,m=new k,v=new k;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),w=e.getX(g+1),x=e.getX(g+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),f.fromBufferAttribute(t,x),m.subVectors(f,l),v.subVectors(a,l),m.cross(v),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,w),p.fromBufferAttribute(i,x),u.add(m),d.add(m),p.add(m),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),f.fromBufferAttribute(t,g+2),m.subVectors(f,l),v.subVectors(a,l),m.cross(v),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(u,d){const p=u.array,m=u.itemSize,v=u.normalized,g=new p.constructor(d.length*m);let S=0,E=0;for(let w=0,x=d.length;w<x;w++){u.isInterleavedBufferAttribute?S=d[w]*u.data.stride+u.offset:S=d[w]*m;for(let y=0;y<m;y++)g[E++]=p[S++]}return new hr(g,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],p=e(d,i);t.setAttribute(u,p)}const l=this.morphAttributes;for(const u in l){const d=[],p=l[u];for(let m=0,v=p.length;m<v;m++){const g=p[m],S=e(g,i);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,d=f.length;u<d;u++){const p=f[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const p=i[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let g=0,S=v.length;g<S;g++)m.push(v[g].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,m=f.length;p<m;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o0=new kt,Wo=new lm,nc=new si,a0=new k,Ga=new k,Wa=new k,$a=new k,wh=new k,rc=new k,ic=new ft,oc=new ft,ac=new ft,s0=new k,l0=new k,u0=new k,sc=new k,lc=new k;class Xr extends Xn{constructor(e=new Bn,t=new CS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,f=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){rc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=u[d],v=l[d];m!==0&&(wh.fromBufferAttribute(v,e),f?rc.addScaledVector(wh,m):rc.addScaledVector(wh.sub(t),m))}t.add(rc)}return t}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(l),Wo.copy(e.ray).recast(e.near),!(nc.containsPoint(Wo.origin)===!1&&(Wo.intersectSphere(nc,a0)===null||Wo.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(o0.copy(l).invert(),Wo.copy(e.ray).applyMatrix4(o0),!(i.boundingBox!==null&&Wo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wo)))}_computeIntersections(e,t,i){let a;const l=this.geometry,f=this.material,u=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,g=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const x=g[E],y=f[x.materialIndex],R=Math.max(x.start,S.start),M=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let D=R,U=M;D<U;D+=3){const O=u.getX(D),F=u.getX(D+1),ce=u.getX(D+2);a=uc(this,y,e,i,p,m,v,O,F,ce),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let x=E,y=w;x<y;x+=3){const R=u.getX(x),M=u.getX(x+1),D=u.getX(x+2);a=uc(this,f,e,i,p,m,v,R,M,D),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const x=g[E],y=f[x.materialIndex],R=Math.max(x.start,S.start),M=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let D=R,U=M;D<U;D+=3){const O=D,F=D+1,ce=D+2;a=uc(this,y,e,i,p,m,v,O,F,ce),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let x=E,y=w;x<y;x+=3){const R=x,M=x+1,D=x+2;a=uc(this,f,e,i,p,m,v,R,M,D),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function r2(n,e,t,i,a,l,f,u){let d;if(e.side===rr?d=i.intersectTriangle(f,l,a,!0,u):d=i.intersectTriangle(a,l,f,e.side===yo,u),d===null)return null;lc.copy(u),lc.applyMatrix4(n.matrixWorld);const p=t.ray.origin.distanceTo(lc);return p<t.near||p>t.far?null:{distance:p,point:lc.clone(),object:n}}function uc(n,e,t,i,a,l,f,u,d,p){n.getVertexPosition(u,Ga),n.getVertexPosition(d,Wa),n.getVertexPosition(p,$a);const m=r2(n,e,t,i,Ga,Wa,$a,sc);if(m){a&&(ic.fromBufferAttribute(a,u),oc.fromBufferAttribute(a,d),ac.fromBufferAttribute(a,p),m.uv=Wr.getInterpolation(sc,Ga,Wa,$a,ic,oc,ac,new ft)),l&&(ic.fromBufferAttribute(l,u),oc.fromBufferAttribute(l,d),ac.fromBufferAttribute(l,p),m.uv1=Wr.getInterpolation(sc,Ga,Wa,$a,ic,oc,ac,new ft),m.uv2=m.uv1),f&&(s0.fromBufferAttribute(f,u),l0.fromBufferAttribute(f,d),u0.fromBufferAttribute(f,p),m.normal=Wr.getInterpolation(sc,Ga,Wa,$a,s0,l0,u0,new k),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:u,b:d,c:p,normal:new k,materialIndex:0};Wr.getNormal(Ga,Wa,$a,v.normal),m.face=v}return m}class Dl extends Bn{constructor(e=1,t=1,i=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:f};const u=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const d=[],p=[],m=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,i,t,e,f,l,0),E("z","y","x",1,-1,i,t,-e,f,l,1),E("x","z","y",1,1,e,i,t,a,f,2),E("x","z","y",1,-1,e,i,-t,a,f,3),E("x","y","z",1,-1,e,t,i,a,l,4),E("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(d),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(m,3)),this.setAttribute("uv",new rn(v,2));function E(w,x,y,R,M,D,U,O,F,ce,b){const N=D/F,he=U/ce,re=D/2,pe=U/2,H=O/2,ee=F+1,fe=ce+1;let ie=0,q=0;const ne=new k;for(let $=0;$<fe;$++){const C=$*he-pe;for(let z=0;z<ee;z++){const W=z*N-re;ne[w]=W*R,ne[x]=C*M,ne[y]=H,p.push(ne.x,ne.y,ne.z),ne[w]=0,ne[x]=0,ne[y]=O>0?1:-1,m.push(ne.x,ne.y,ne.z),v.push(z/F),v.push(1-$/ce),ie+=1}}for(let $=0;$<ce;$++)for(let C=0;C<F;C++){const z=g+C+ee*$,W=g+C+ee*($+1),Y=g+(C+1)+ee*($+1),Q=g+(C+1)+ee*$;d.push(z,W,Q),d.push(W,Y,Q),q+=6}u.addGroup(S,q,b),S+=q,g+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function $n(n){const e={};for(let t=0;t<n.length;t++){const i=ds(n[t]);for(const a in i)e[a]=i[a]}return e}function i2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function PS(n){return n.getRenderTarget()===null?n.outputColorSpace:Ut.workingColorSpace}const um={clone:ds,merge:$n};var o2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xo extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o2,this.fragmentShader=a2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=i2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class DS extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dr extends DS{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cl*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/d,t-=f.offsetY*i/p,a*=f.width/d,i*=f.height/p}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xa=-90,ja=1;class s2 extends Xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new dr(Xa,ja,e,t);a.layers=this.layers,this.add(a);const l=new dr(Xa,ja,e,t);l.layers=this.layers,this.add(l);const f=new dr(Xa,ja,e,t);f.layers=this.layers,this.add(f);const u=new dr(Xa,ja,e,t);u.layers=this.layers,this.add(u);const d=new dr(Xa,ja,e,t);d.layers=this.layers,this.add(d);const p=new dr(Xa,ja,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,l,f,u,d]=t;for(const p of t)this.remove(p);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,u,d,p,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,l),e.setRenderTarget(i,1,a),e.render(t,f),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,d),e.setRenderTarget(i,4,a),e.render(t,p),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,m),e.setRenderTarget(v,g,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class IS extends ir{constructor(e,t,i,a,l,f,u,d,p,m){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,i,a,l,f,u,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l2 extends ta{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(dl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ea?Tn:Mr),this.texture=new IS(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Er}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Dl(5,5,5),l=new xo({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rr,blending:ho});l.uniforms.tEquirect.value=t;const f=new Xr(a,l),u=t.minFilter;return t.minFilter===ml&&(t.minFilter=Er),new s2(1,10,this).update(e,f),t.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,i,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,i,a);e.setRenderTarget(l)}}const Mh=new k,u2=new k,c2=new yt;class ao{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Mh.subVectors(i,t).cross(u2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Mh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||c2.getNormalMatrix(e),a=this.coplanarPoint(Mh).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $o=new si,cc=new k;class rf{constructor(e=new ao,t=new ao,i=new ao,a=new ao,l=new ao,f=new ao){this.planes=[e,t,i,a,l,f]}set(e,t,i,a,l,f){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(l),u[5].copy(f),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){const i=this.planes,a=e.elements,l=a[0],f=a[1],u=a[2],d=a[3],p=a[4],m=a[5],v=a[6],g=a[7],S=a[8],E=a[9],w=a[10],x=a[11],y=a[12],R=a[13],M=a[14],D=a[15];if(i[0].setComponents(d-l,g-p,x-S,D-y).normalize(),i[1].setComponents(d+l,g+p,x+S,D+y).normalize(),i[2].setComponents(d+f,g+m,x+E,D+R).normalize(),i[3].setComponents(d-f,g-m,x-E,D-R).normalize(),i[4].setComponents(d-u,g-v,x-w,D-M).normalize(),t===ii)i[5].setComponents(d+u,g+v,x+w,D+M).normalize();else if(t===gl)i[5].setComponents(u,v,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$o.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$o.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($o)}intersectsSprite(e){return $o.center.set(0,0,0),$o.radius=.7071067811865476,$o.applyMatrix4(e.matrixWorld),this.intersectsSphere($o)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(cc.x=a.normal.x>0?e.max.x:e.min.x,cc.y=a.normal.y>0?e.max.y:e.min.y,cc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function US(){let n=null,e=!1,t=null,i=null;function a(l,f){t(l,f),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function f2(n,e){const t=e.isWebGL2,i=new WeakMap;function a(p,m){const v=p.array,g=p.usage,S=v.byteLength,E=n.createBuffer();n.bindBuffer(m,E),n.bufferData(m,v,g),p.onUploadCallback();let w;if(v instanceof Float32Array)w=n.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)w=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=n.UNSIGNED_SHORT;else if(v instanceof Int16Array)w=n.SHORT;else if(v instanceof Uint32Array)w=n.UNSIGNED_INT;else if(v instanceof Int32Array)w=n.INT;else if(v instanceof Int8Array)w=n.BYTE;else if(v instanceof Uint8Array)w=n.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)w=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:w,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,m,v){const g=m.array,S=m._updateRange,E=m.updateRanges;if(n.bindBuffer(v,p),S.count===-1&&E.length===0&&n.bufferSubData(v,0,g),E.length!==0){for(let w=0,x=E.length;w<x;w++){const y=E[w];t?n.bufferSubData(v,y.start*g.BYTES_PER_ELEMENT,g,y.start,y.count):n.bufferSubData(v,y.start*g.BYTES_PER_ELEMENT,g.subarray(y.start,y.start+y.count))}m.clearUpdateRanges()}S.count!==-1&&(t?n.bufferSubData(v,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count):n.bufferSubData(v,S.offset*g.BYTES_PER_ELEMENT,g.subarray(S.offset,S.offset+S.count)),S.count=-1),m.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=i.get(p);m&&(n.deleteBuffer(m.buffer),i.delete(p))}function d(p,m){if(p.isGLBufferAttribute){const g=i.get(p);(!g||g.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=i.get(p);if(v===void 0)i.set(p,a(p,m));else if(v.version<p.version){if(v.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(v.buffer,p,m),v.version=p.version}}return{get:f,remove:u,update:d}}class cm extends Bn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,f=t/2,u=Math.floor(i),d=Math.floor(a),p=u+1,m=d+1,v=e/u,g=t/d,S=[],E=[],w=[],x=[];for(let y=0;y<m;y++){const R=y*g-f;for(let M=0;M<p;M++){const D=M*v-l;E.push(D,-R,0),w.push(0,0,1),x.push(M/u),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let R=0;R<u;R++){const M=R+p*y,D=R+p*(y+1),U=R+1+p*(y+1),O=R+1+p*y;S.push(M,D,O),S.push(D,U,O)}this.setIndex(S),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(w,3)),this.setAttribute("uv",new rn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cm(e.width,e.height,e.widthSegments,e.heightSegments)}}var d2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h2=`#ifdef USE_ALPHAHASH
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
#endif`,p2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_2=`#ifdef USE_AOMAP
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
#endif`,y2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x2=`#ifdef USE_BATCHING
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
#endif`,S2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,E2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A2=`#ifdef USE_IRIDESCENCE
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
#endif`,T2=`#ifdef USE_BUMPMAP
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
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,U2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N2=`#define PI 3.141592653589793
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
} // validated`,F2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O2=`vec3 transformedNormal = objectNormal;
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
#endif`,z2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V2="gl_FragColor = linearToOutputTexel( gl_FragColor );",G2=`
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
}`,W2=`#ifdef USE_ENVMAP
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
#endif`,$2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X2=`#ifdef USE_ENVMAP
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
#endif`,j2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y2=`#ifdef USE_ENVMAP
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
#endif`,q2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q2=`#ifdef USE_GRADIENTMAP
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
}`,eD=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iD=`uniform bool receiveShadow;
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
#endif`,oD=`#ifdef USE_ENVMAP
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
#endif`,aD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cD=`PhysicalMaterial material;
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
#endif`,fD=`struct PhysicalMaterial {
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
}`,dD=`
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
#endif`,hD=`#if defined( RE_IndirectDiffuse )
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
#endif`,pD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mD=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vD=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gD=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_D=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ED=`#if defined( USE_POINTS_UV )
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
#endif`,wD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AD=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TD=`#ifdef USE_MORPHNORMALS
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
#endif`,bD=`#ifdef USE_MORPHTARGETS
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
#endif`,CD=`#ifdef USE_MORPHTARGETS
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
#endif`,RD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ID=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UD=`#ifdef USE_NORMALMAP
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
#endif`,ND=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$D=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KD=`float getShadowMask() {
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
}`,ZD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JD=`#ifdef USE_SKINNING
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
#endif`,QD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e3=`#ifdef USE_SKINNING
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
#endif`,t3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o3=`#ifdef USE_TRANSMISSION
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
#endif`,a3=`#ifdef USE_TRANSMISSION
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
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d3=`uniform sampler2D t2D;
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
}`,h3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g3=`#include <common>
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
}`,_3=`#if DEPTH_PACKING == 3200
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
}`,y3=`#define DISTANCE
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
}`,x3=`#define DISTANCE
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
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w3=`uniform float scale;
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
}`,M3=`uniform vec3 diffuse;
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
}`,A3=`#include <common>
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
}`,T3=`uniform vec3 diffuse;
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
}`,b3=`#define LAMBERT
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
}`,C3=`#define LAMBERT
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
}`,R3=`#define MATCAP
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
}`,L3=`#define MATCAP
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
}`,P3=`#define NORMAL
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
}`,D3=`#define NORMAL
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
}`,I3=`#define PHONG
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
}`,U3=`#define PHONG
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
}`,N3=`#define STANDARD
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
}`,F3=`#define STANDARD
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
}`,O3=`#define TOON
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
}`,z3=`#define TOON
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
}`,B3=`uniform float size;
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
}`,k3=`uniform vec3 diffuse;
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
}`,H3=`#include <common>
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
}`,V3=`uniform vec3 color;
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
}`,G3=`uniform float rotation;
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
}`,W3=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:d2,alphahash_pars_fragment:h2,alphamap_fragment:p2,alphamap_pars_fragment:m2,alphatest_fragment:v2,alphatest_pars_fragment:g2,aomap_fragment:_2,aomap_pars_fragment:y2,batching_pars_vertex:x2,batching_vertex:S2,begin_vertex:E2,beginnormal_vertex:w2,bsdfs:M2,iridescence_fragment:A2,bumpmap_pars_fragment:T2,clipping_planes_fragment:b2,clipping_planes_pars_fragment:C2,clipping_planes_pars_vertex:R2,clipping_planes_vertex:L2,color_fragment:P2,color_pars_fragment:D2,color_pars_vertex:I2,color_vertex:U2,common:N2,cube_uv_reflection_fragment:F2,defaultnormal_vertex:O2,displacementmap_pars_vertex:z2,displacementmap_vertex:B2,emissivemap_fragment:k2,emissivemap_pars_fragment:H2,colorspace_fragment:V2,colorspace_pars_fragment:G2,envmap_fragment:W2,envmap_common_pars_fragment:$2,envmap_pars_fragment:X2,envmap_pars_vertex:j2,envmap_physical_pars_fragment:oD,envmap_vertex:Y2,fog_vertex:q2,fog_pars_vertex:K2,fog_fragment:Z2,fog_pars_fragment:J2,gradientmap_pars_fragment:Q2,lightmap_fragment:eD,lightmap_pars_fragment:tD,lights_lambert_fragment:nD,lights_lambert_pars_fragment:rD,lights_pars_begin:iD,lights_toon_fragment:aD,lights_toon_pars_fragment:sD,lights_phong_fragment:lD,lights_phong_pars_fragment:uD,lights_physical_fragment:cD,lights_physical_pars_fragment:fD,lights_fragment_begin:dD,lights_fragment_maps:hD,lights_fragment_end:pD,logdepthbuf_fragment:mD,logdepthbuf_pars_fragment:vD,logdepthbuf_pars_vertex:gD,logdepthbuf_vertex:_D,map_fragment:yD,map_pars_fragment:xD,map_particle_fragment:SD,map_particle_pars_fragment:ED,metalnessmap_fragment:wD,metalnessmap_pars_fragment:MD,morphcolor_vertex:AD,morphnormal_vertex:TD,morphtarget_pars_vertex:bD,morphtarget_vertex:CD,normal_fragment_begin:RD,normal_fragment_maps:LD,normal_pars_fragment:PD,normal_pars_vertex:DD,normal_vertex:ID,normalmap_pars_fragment:UD,clearcoat_normal_fragment_begin:ND,clearcoat_normal_fragment_maps:FD,clearcoat_pars_fragment:OD,iridescence_pars_fragment:zD,opaque_fragment:BD,packing:kD,premultiplied_alpha_fragment:HD,project_vertex:VD,dithering_fragment:GD,dithering_pars_fragment:WD,roughnessmap_fragment:$D,roughnessmap_pars_fragment:XD,shadowmap_pars_fragment:jD,shadowmap_pars_vertex:YD,shadowmap_vertex:qD,shadowmask_pars_fragment:KD,skinbase_vertex:ZD,skinning_pars_vertex:JD,skinning_vertex:QD,skinnormal_vertex:e3,specularmap_fragment:t3,specularmap_pars_fragment:n3,tonemapping_fragment:r3,tonemapping_pars_fragment:i3,transmission_fragment:o3,transmission_pars_fragment:a3,uv_pars_fragment:s3,uv_pars_vertex:l3,uv_vertex:u3,worldpos_vertex:c3,background_vert:f3,background_frag:d3,backgroundCube_vert:h3,backgroundCube_frag:p3,cube_vert:m3,cube_frag:v3,depth_vert:g3,depth_frag:_3,distanceRGBA_vert:y3,distanceRGBA_frag:x3,equirect_vert:S3,equirect_frag:E3,linedashed_vert:w3,linedashed_frag:M3,meshbasic_vert:A3,meshbasic_frag:T3,meshlambert_vert:b3,meshlambert_frag:C3,meshmatcap_vert:R3,meshmatcap_frag:L3,meshnormal_vert:P3,meshnormal_frag:D3,meshphong_vert:I3,meshphong_frag:U3,meshphysical_vert:N3,meshphysical_frag:F3,meshtoon_vert:O3,meshtoon_frag:z3,points_vert:B3,points_frag:k3,shadow_vert:H3,shadow_frag:V3,sprite_vert:G3,sprite_frag:W3},Ne={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},nr={basic:{uniforms:$n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:$n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:$n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:$n([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:$n([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:$n([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:$n([Ne.points,Ne.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:$n([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:$n([Ne.common,Ne.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:$n([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:$n([Ne.sprite,Ne.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:$n([Ne.common,Ne.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:$n([Ne.lights,Ne.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};nr.physical={uniforms:$n([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const fc={r:0,b:0,g:0};function $3(n,e,t,i,a,l,f){const u=new et(0);let d=l===!0?0:1,p,m,v=null,g=0,S=null;function E(x,y){let R=!1,M=y.isScene===!0?y.background:null;M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M===null?w(u,d):M&&M.isColor&&(w(M,1),R=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,f):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(n.autoClear||R)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===tf)?(m===void 0&&(m=new Xr(new Dl(1,1,1),new xo({name:"BackgroundCubeMaterial",uniforms:ds(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=M,m.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,m.material.toneMapped=Ut.getTransfer(M.colorSpace)!==Gt,(v!==M||g!==M.version||S!==n.toneMapping)&&(m.material.needsUpdate=!0,v=M,g=M.version,S=n.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):M&&M.isTexture&&(p===void 0&&(p=new Xr(new cm(2,2),new xo({name:"BackgroundMaterial",uniforms:ds(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:yo,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=M,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(M.colorSpace)!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),p.material.uniforms.uvTransform.value.copy(M.matrix),(v!==M||g!==M.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,v=M,g=M.version,S=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function w(x,y){x.getRGB(fc,PS(n)),i.buffers.color.setClear(fc.r,fc.g,fc.b,y,f)}return{getClearColor:function(){return u},setClearColor:function(x,y=1){u.set(x),d=y,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,w(u,d)},render:E}}function X3(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:e.get("OES_vertex_array_object"),f=i.isWebGL2||l!==null,u={},d=x(null);let p=d,m=!1;function v(H,ee,fe,ie,q){let ne=!1;if(f){const $=w(ie,fe,ee);p!==$&&(p=$,S(p.object)),ne=y(H,ie,fe,q),ne&&R(H,ie,fe,q)}else{const $=ee.wireframe===!0;(p.geometry!==ie.id||p.program!==fe.id||p.wireframe!==$)&&(p.geometry=ie.id,p.program=fe.id,p.wireframe=$,ne=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(ne||m)&&(m=!1,ce(H,ee,fe,ie),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function g(){return i.isWebGL2?n.createVertexArray():l.createVertexArrayOES()}function S(H){return i.isWebGL2?n.bindVertexArray(H):l.bindVertexArrayOES(H)}function E(H){return i.isWebGL2?n.deleteVertexArray(H):l.deleteVertexArrayOES(H)}function w(H,ee,fe){const ie=fe.wireframe===!0;let q=u[H.id];q===void 0&&(q={},u[H.id]=q);let ne=q[ee.id];ne===void 0&&(ne={},q[ee.id]=ne);let $=ne[ie];return $===void 0&&($=x(g()),ne[ie]=$),$}function x(H){const ee=[],fe=[],ie=[];for(let q=0;q<a;q++)ee[q]=0,fe[q]=0,ie[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:fe,attributeDivisors:ie,object:H,attributes:{},index:null}}function y(H,ee,fe,ie){const q=p.attributes,ne=ee.attributes;let $=0;const C=fe.getAttributes();for(const z in C)if(C[z].location>=0){const Y=q[z];let Q=ne[z];if(Q===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),Y===void 0||Y.attribute!==Q||Q&&Y.data!==Q.data)return!0;$++}return p.attributesNum!==$||p.index!==ie}function R(H,ee,fe,ie){const q={},ne=ee.attributes;let $=0;const C=fe.getAttributes();for(const z in C)if(C[z].location>=0){let Y=ne[z];Y===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor));const Q={};Q.attribute=Y,Y&&Y.data&&(Q.data=Y.data),q[z]=Q,$++}p.attributes=q,p.attributesNum=$,p.index=ie}function M(){const H=p.newAttributes;for(let ee=0,fe=H.length;ee<fe;ee++)H[ee]=0}function D(H){U(H,0)}function U(H,ee){const fe=p.newAttributes,ie=p.enabledAttributes,q=p.attributeDivisors;fe[H]=1,ie[H]===0&&(n.enableVertexAttribArray(H),ie[H]=1),q[H]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,ee),q[H]=ee)}function O(){const H=p.newAttributes,ee=p.enabledAttributes;for(let fe=0,ie=ee.length;fe<ie;fe++)ee[fe]!==H[fe]&&(n.disableVertexAttribArray(fe),ee[fe]=0)}function F(H,ee,fe,ie,q,ne,$){$===!0?n.vertexAttribIPointer(H,ee,fe,q,ne):n.vertexAttribPointer(H,ee,fe,ie,q,ne)}function ce(H,ee,fe,ie){if(i.isWebGL2===!1&&(H.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const q=ie.attributes,ne=fe.getAttributes(),$=ee.defaultAttributeValues;for(const C in ne){const z=ne[C];if(z.location>=0){let W=q[C];if(W===void 0&&(C==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),C==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),W!==void 0){const Y=W.normalized,Q=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const _e=Z.buffer,ve=Z.type,be=Z.bytesPerElement,Fe=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===fS);if(W.isInterleavedBufferAttribute){const Oe=W.data,X=Oe.stride,Ct=W.offset;if(Oe.isInstancedInterleavedBuffer){for(let ke=0;ke<z.locationSize;ke++)U(z.location+ke,Oe.meshPerAttribute);H.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let ke=0;ke<z.locationSize;ke++)D(z.location+ke);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ke=0;ke<z.locationSize;ke++)F(z.location+ke,Q/z.locationSize,ve,Y,X*be,(Ct+Q/z.locationSize*ke)*be,Fe)}else{if(W.isInstancedBufferAttribute){for(let Oe=0;Oe<z.locationSize;Oe++)U(z.location+Oe,W.meshPerAttribute);H.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)D(z.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Oe=0;Oe<z.locationSize;Oe++)F(z.location+Oe,Q/z.locationSize,ve,Y,Q*be,Q/z.locationSize*Oe*be,Fe)}}else if($!==void 0){const Y=$[C];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(z.location,Y);break;case 3:n.vertexAttrib3fv(z.location,Y);break;case 4:n.vertexAttrib4fv(z.location,Y);break;default:n.vertexAttrib1fv(z.location,Y)}}}}O()}function b(){re();for(const H in u){const ee=u[H];for(const fe in ee){const ie=ee[fe];for(const q in ie)E(ie[q].object),delete ie[q];delete ee[fe]}delete u[H]}}function N(H){if(u[H.id]===void 0)return;const ee=u[H.id];for(const fe in ee){const ie=ee[fe];for(const q in ie)E(ie[q].object),delete ie[q];delete ee[fe]}delete u[H.id]}function he(H){for(const ee in u){const fe=u[ee];if(fe[H.id]===void 0)continue;const ie=fe[H.id];for(const q in ie)E(ie[q].object),delete ie[q];delete fe[H.id]}}function re(){pe(),m=!0,p!==d&&(p=d,S(p.object))}function pe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:re,resetDefaultState:pe,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfProgram:he,initAttributes:M,enableAttribute:D,disableUnusedAttributes:O}}function j3(n,e,t,i){const a=i.isWebGL2;let l;function f(m){l=m}function u(m,v){n.drawArrays(l,m,v),t.update(v,l,1)}function d(m,v,g){if(g===0)return;let S,E;if(a)S=n,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](l,m,v,g),t.update(v,l,g)}function p(m,v,g){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g;E++)this.render(m[E],v[E]);else{S.multiDrawArraysWEBGL(l,m,0,v,0,g);let E=0;for(let w=0;w<g;w++)E+=v[w];t.update(E,l,1)}}this.setMode=f,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function Y3(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=f||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),w=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,D=f||e.has("OES_texture_float"),U=M&&D,O=f?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:m,maxTextures:v,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:R,vertexTextures:M,floatFragmentTextures:D,floatVertexTextures:U,maxSamples:O}}function q3(n){const e=this;let t=null,i=0,a=!1,l=!1;const f=new ao,u=new yt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||i!==0||a;return a=g,i=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,y=n.get(v);if(!a||E===null||E.length===0||l&&!x)l?m(null):p();else{const R=l?0:i,M=R*4;let D=y.clippingState||null;d.value=D,D=m(E,g,M,S);for(let U=0;U!==M;++U)D[U]=t[U];y.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(v,g,S,E){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=d.value,E!==!0||x===null){const y=S+w*4,R=g.matrixWorldInverse;u.getNormalMatrix(R),(x===null||x.length<y)&&(x=new Float32Array(y));for(let M=0,D=S;M!==w;++M,D+=4)f.copy(v[M]).applyMatrix4(R,u),f.normal.toArray(x,D),x[D+3]=f.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function K3(n){let e=new WeakMap;function t(f,u){return u===lp?f.mapping=us:u===up&&(f.mapping=cs),f}function i(f){if(f&&f.isTexture){const u=f.mapping;if(u===lp||u===up)if(e.has(f)){const d=e.get(f).texture;return t(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new l2(d.height/2);return p.fromEquirectangularTexture(n,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const u=f.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}class Z3 extends DS{constructor(e=-1,t=1,i=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,f=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,f,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ka=4,c0=[.125,.215,.35,.446,.526,.582],qo=20,Ah=new Z3,f0=new et;let Th=null,bh=0,Ch=0;const jo=(1+Math.sqrt(5))/2,Ya=1/jo,d0=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,jo,Ya),new k(0,jo,-Ya),new k(Ya,0,jo),new k(-Ya,0,jo),new k(jo,Ya,0),new k(-jo,Ya,0)];class h0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Th=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,bh,Ch),e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Er,minFilter:Er,generateMipmaps:!1,type:vl,format:wr,colorSpace:Li,depthBuffer:!1},a=p0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J3(l)),this._blurMaterial=Q3(l,e,t)}return a}_compileMaterial(e){const t=new Xr(this._lodPlanes[0],e);this._renderer.compile(t,Ah)}_sceneToCubeUV(e,t,i,a){const u=new dr(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,g=m.toneMapping;m.getClearColor(f0),m.toneMapping=po,m.autoClear=!1;const S=new CS({name:"PMREM.Background",side:rr,depthWrite:!1,depthTest:!1}),E=new Xr(new Dl,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(f0),w=!0);for(let y=0;y<6;y++){const R=y%3;R===0?(u.up.set(0,d[y],0),u.lookAt(p[y],0,0)):R===1?(u.up.set(0,0,d[y]),u.lookAt(0,p[y],0)):(u.up.set(0,d[y],0),u.lookAt(0,0,p[y]));const M=this._cubeSize;dc(a,R*M,y>2?M:0,M,M),m.setRenderTarget(a),w&&m.render(E,u),m.render(e,u)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=g,m.autoClear=v,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===us||e.mapping===cs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new Xr(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const d=this._cubeSize;dc(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(f,Ah)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=d0[(a-1)%d0.length];this._blur(e,a-1,a,l,f)}t.autoClear=i}_blur(e,t,i,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,i,a,"latitudinal",l),this._halfBlur(f,e,i,i,a,"longitudinal",l)}_halfBlur(e,t,i,a,l,f,u){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Xr(this._lodPlanes[a],p),g=p.uniforms,S=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*qo-1),w=l/E,x=isFinite(l)?1+Math.floor(m*w):qo;x>qo&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qo}`);const y=[];let R=0;for(let F=0;F<qo;++F){const ce=F/w,b=Math.exp(-ce*ce/2);y.push(b),F===0?R+=b:F<x&&(R+=2*b)}for(let F=0;F<y.length;F++)y[F]=y[F]/R;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=f==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=E,g.mipInt.value=M-i;const D=this._sizeLods[a],U=3*D*(a>M-Ka?a-M+Ka:0),O=4*(this._cubeSize-D);dc(t,U,O,3*D,2*D),d.setRenderTarget(t),d.render(v,Ah)}}function J3(n){const e=[],t=[],i=[];let a=n;const l=n-Ka+1+c0.length;for(let f=0;f<l;f++){const u=Math.pow(2,a);t.push(u);let d=1/u;f>n-Ka?d=c0[f-n+Ka-1]:f===0&&(d=0),i.push(d);const p=1/(u-2),m=-p,v=1+p,g=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,E=6,w=3,x=2,y=1,R=new Float32Array(w*E*S),M=new Float32Array(x*E*S),D=new Float32Array(y*E*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,ce=O>2?0:-1,b=[F,ce,0,F+2/3,ce,0,F+2/3,ce+1,0,F,ce,0,F+2/3,ce+1,0,F,ce+1,0];R.set(b,w*E*O),M.set(g,x*E*O);const N=[O,O,O,O,O,O];D.set(N,y*E*O)}const U=new Bn;U.setAttribute("position",new hr(R,w)),U.setAttribute("uv",new hr(M,x)),U.setAttribute("faceIndex",new hr(D,y)),e.push(U),a>Ka&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function p0(n,e,t){const i=new ta(n,e,t);return i.texture.mapping=tf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dc(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Q3(n,e,t){const i=new Float32Array(qo),a=new k(0,1,0);return new xo({name:"SphericalGaussianBlur",defines:{n:qo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fm(),fragmentShader:`

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
		`,blending:ho,depthTest:!1,depthWrite:!1})}function m0(){return new xo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fm(),fragmentShader:`

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
		`,blending:ho,depthTest:!1,depthWrite:!1})}function v0(){return new xo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ho,depthTest:!1,depthWrite:!1})}function fm(){return`

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
	`}function eI(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,p=d===lp||d===up,m=d===us||d===cs;if(p||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let v=e.get(u);return t===null&&(t=new h0(n)),v=p?t.fromEquirectangular(u,v):t.fromCubemap(u,v),e.set(u,v),v.texture}else{if(e.has(u))return e.get(u).texture;{const v=u.image;if(p&&v&&v.height>0||m&&v&&a(v)){t===null&&(t=new h0(n));const g=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",l),g.texture}else return null}}}return u}function a(u){let d=0;const p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p}function l(u){const d=u.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:f}}function tI(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function nI(n,e,t,i){const a={},l=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const w=g.morphAttributes[E];for(let x=0,y=w.length;x<y;x++)e.remove(w[x])}g.removeEventListener("dispose",f),delete a[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return a[g.id]===!0||(g.addEventListener("dispose",f),a[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const E in g)e.update(g[E],n.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const w=S[E];for(let x=0,y=w.length;x<y;x++)e.update(w[x],n.ARRAY_BUFFER)}}function p(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const R=S.array;w=S.version;for(let M=0,D=R.length;M<D;M+=3){const U=R[M+0],O=R[M+1],F=R[M+2];g.push(U,O,O,F,F,U)}}else if(E!==void 0){const R=E.array;w=E.version;for(let M=0,D=R.length/3-1;M<D;M+=3){const U=M+0,O=M+1,F=M+2;g.push(U,O,O,F,F,U)}}else return;const x=new(ES(g)?LS:RS)(g,1);x.version=w;const y=l.get(v);y&&e.remove(y),l.set(v,x)}function m(v){const g=l.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:u,update:d,getWireframeAttribute:m}}function rI(n,e,t,i){const a=i.isWebGL2;let l;function f(S){l=S}let u,d;function p(S){u=S.type,d=S.bytesPerElement}function m(S,E){n.drawElements(l,E,u,S*d),t.update(E,l,1)}function v(S,E,w){if(w===0)return;let x,y;if(a)x=n,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](l,E,u,S*d,w),t.update(E,l,w)}function g(S,E,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<w;y++)this.render(S[y]/d,E[y]);else{x.multiDrawElementsWEBGL(l,E,0,u,S,0,w);let y=0;for(let R=0;R<w;R++)y+=E[R];t.update(y,l,1)}}this.setMode=f,this.setIndex=p,this.render=m,this.renderInstances=v,this.renderMultiDraw=g}function iI(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,f,u){switch(t.calls++,f){case n.TRIANGLES:t.triangles+=u*(l/3);break;case n.LINES:t.lines+=u*(l/2);break;case n.LINE_STRIP:t.lines+=u*(l-1);break;case n.LINE_LOOP:t.lines+=u*l;break;case n.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function oI(n,e){return n[0]-e[0]}function aI(n,e){return Math.abs(e[1])-Math.abs(n[1])}function sI(n,e,t){const i={},a=new Float32Array(8),l=new WeakMap,f=new Nt,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function d(p,m,v){const g=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,w=E!==void 0?E.length:0;let x=l.get(m);if(x===void 0||x.count!==w){let ee=function(){pe.dispose(),l.delete(m),m.removeEventListener("dispose",ee)};var S=ee;x!==void 0&&x.texture.dispose();const M=m.morphAttributes.position!==void 0,D=m.morphAttributes.normal!==void 0,U=m.morphAttributes.color!==void 0,O=m.morphAttributes.position||[],F=m.morphAttributes.normal||[],ce=m.morphAttributes.color||[];let b=0;M===!0&&(b=1),D===!0&&(b=2),U===!0&&(b=3);let N=m.attributes.position.count*b,he=1;N>e.maxTextureSize&&(he=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const re=new Float32Array(N*he*4*w),pe=new AS(re,N,he,w);pe.type=Ci,pe.needsUpdate=!0;const H=b*4;for(let fe=0;fe<w;fe++){const ie=O[fe],q=F[fe],ne=ce[fe],$=N*he*4*fe;for(let C=0;C<ie.count;C++){const z=C*H;M===!0&&(f.fromBufferAttribute(ie,C),re[$+z+0]=f.x,re[$+z+1]=f.y,re[$+z+2]=f.z,re[$+z+3]=0),D===!0&&(f.fromBufferAttribute(q,C),re[$+z+4]=f.x,re[$+z+5]=f.y,re[$+z+6]=f.z,re[$+z+7]=0),U===!0&&(f.fromBufferAttribute(ne,C),re[$+z+8]=f.x,re[$+z+9]=f.y,re[$+z+10]=f.z,re[$+z+11]=ne.itemSize===4?f.w:1)}}x={count:w,texture:pe,size:new ft(N,he)},l.set(m,x),m.addEventListener("dispose",ee)}let y=0;for(let M=0;M<g.length;M++)y+=g[M];const R=m.morphTargetsRelative?1:1-y;v.getUniforms().setValue(n,"morphTargetBaseInfluence",R),v.getUniforms().setValue(n,"morphTargetInfluences",g),v.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),v.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const E=g===void 0?0:g.length;let w=i[m.id];if(w===void 0||w.length!==E){w=[];for(let D=0;D<E;D++)w[D]=[D,0];i[m.id]=w}for(let D=0;D<E;D++){const U=w[D];U[0]=D,U[1]=g[D]}w.sort(aI);for(let D=0;D<8;D++)D<E&&w[D][1]?(u[D][0]=w[D][0],u[D][1]=w[D][1]):(u[D][0]=Number.MAX_SAFE_INTEGER,u[D][1]=0);u.sort(oI);const x=m.morphAttributes.position,y=m.morphAttributes.normal;let R=0;for(let D=0;D<8;D++){const U=u[D],O=U[0],F=U[1];O!==Number.MAX_SAFE_INTEGER&&F?(x&&m.getAttribute("morphTarget"+D)!==x[O]&&m.setAttribute("morphTarget"+D,x[O]),y&&m.getAttribute("morphNormal"+D)!==y[O]&&m.setAttribute("morphNormal"+D,y[O]),a[D]=F,R+=F):(x&&m.hasAttribute("morphTarget"+D)===!0&&m.deleteAttribute("morphTarget"+D),y&&m.hasAttribute("morphNormal"+D)===!0&&m.deleteAttribute("morphNormal"+D),a[D]=0)}const M=m.morphTargetsRelative?1:1-R;v.getUniforms().setValue(n,"morphTargetBaseInfluence",M),v.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:d}}function lI(n,e,t,i){let a=new WeakMap;function l(d){const p=i.render.frame,m=d.geometry,v=e.get(d,m);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==p&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==p&&(g.update(),a.set(g,p))}return v}function f(){a=new WeakMap}function u(d){const p=d.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class NS extends ir{constructor(e,t,i,a,l,f,u,d,p,m){if(m=m!==void 0?m:Qo,m!==Qo&&m!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Qo&&(i=lo),i===void 0&&m===fs&&(i=Jo),super(null,a,l,f,u,d,m,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:An,this.minFilter=d!==void 0?d:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const FS=new ir,OS=new NS(1,1);OS.compareFunction=xS;const zS=new AS,BS=new XP,kS=new IS,g0=[],_0=[],y0=new Float32Array(16),x0=new Float32Array(9),S0=new Float32Array(4);function gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let l=g0[a];if(l===void 0&&(l=new Float32Array(a),g0[a]=l),e!==0){i.toArray(l,0);for(let f=1,u=0;f!==e;++f)u+=t,n[f].toArray(l,u)}return l}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function of(n,e){let t=_0[e];t===void 0&&(t=new Int32Array(e),_0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function fI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function dI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function hI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;S0.set(i),n.uniformMatrix2fv(this.addr,!1,S0),hn(t,i)}}function pI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;x0.set(i),n.uniformMatrix3fv(this.addr,!1,x0),hn(t,i)}}function mI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;y0.set(i),n.uniformMatrix4fv(this.addr,!1,y0),hn(t,i)}}function vI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function _I(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function yI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function xI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function EI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function wI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function MI(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const l=this.type===n.SAMPLER_2D_SHADOW?OS:FS;t.setTexture2D(e||l,a)}function AI(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||BS,a)}function TI(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||kS,a)}function bI(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||zS,a)}function CI(n){switch(n){case 5126:return uI;case 35664:return cI;case 35665:return fI;case 35666:return dI;case 35674:return hI;case 35675:return pI;case 35676:return mI;case 5124:case 35670:return vI;case 35667:case 35671:return gI;case 35668:case 35672:return _I;case 35669:case 35673:return yI;case 5125:return xI;case 36294:return SI;case 36295:return EI;case 36296:return wI;case 35678:case 36198:case 36298:case 36306:case 35682:return MI;case 35679:case 36299:case 36307:return AI;case 35680:case 36300:case 36308:case 36293:return TI;case 36289:case 36303:case 36311:case 36292:return bI}}function RI(n,e){n.uniform1fv(this.addr,e)}function LI(n,e){const t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function PI(n,e){const t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function DI(n,e){const t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function II(n,e){const t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UI(n,e){const t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NI(n,e){const t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FI(n,e){n.uniform1iv(this.addr,e)}function OI(n,e){n.uniform2iv(this.addr,e)}function zI(n,e){n.uniform3iv(this.addr,e)}function BI(n,e){n.uniform4iv(this.addr,e)}function kI(n,e){n.uniform1uiv(this.addr,e)}function HI(n,e){n.uniform2uiv(this.addr,e)}function VI(n,e){n.uniform3uiv(this.addr,e)}function GI(n,e){n.uniform4uiv(this.addr,e)}function WI(n,e,t){const i=this.cache,a=e.length,l=of(t,a);dn(i,l)||(n.uniform1iv(this.addr,l),hn(i,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||FS,l[f])}function $I(n,e,t){const i=this.cache,a=e.length,l=of(t,a);dn(i,l)||(n.uniform1iv(this.addr,l),hn(i,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||BS,l[f])}function XI(n,e,t){const i=this.cache,a=e.length,l=of(t,a);dn(i,l)||(n.uniform1iv(this.addr,l),hn(i,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||kS,l[f])}function jI(n,e,t){const i=this.cache,a=e.length,l=of(t,a);dn(i,l)||(n.uniform1iv(this.addr,l),hn(i,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||zS,l[f])}function YI(n){switch(n){case 5126:return RI;case 35664:return LI;case 35665:return PI;case 35666:return DI;case 35674:return II;case 35675:return UI;case 35676:return NI;case 5124:case 35670:return FI;case 35667:case 35671:return OI;case 35668:case 35672:return zI;case 35669:case 35673:return BI;case 5125:return kI;case 36294:return HI;case 36295:return VI;case 36296:return GI;case 35678:case 36198:case 36298:case 36306:case 35682:return WI;case 35679:case 36299:case 36307:return $I;case 35680:case 36300:case 36308:case 36293:return XI;case 36289:case 36303:case 36311:case 36292:return jI}}class qI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CI(t.type)}}class KI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YI(t.type)}}class ZI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const u=a[l];u.setValue(e,t[u.id],i)}}}const Rh=/(\w+)(\])?(\[|\.)?/g;function E0(n,e){n.seq.push(e),n.map[e.id]=e}function JI(n,e,t){const i=n.name,a=i.length;for(Rh.lastIndex=0;;){const l=Rh.exec(i),f=Rh.lastIndex;let u=l[1];const d=l[2]==="]",p=l[3];if(d&&(u=u|0),p===void 0||p==="["&&f+2===a){E0(t,p===void 0?new qI(u,n,e):new KI(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new ZI(u),E0(t,v)),t=v}}}class wc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);JI(l,f,this)}}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,f=t.length;l!==f;++l){const u=t[l],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&i.push(f)}return i}}function w0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QI=37297;let eU=0;function tU(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const u=f+1;i.push(`${u===e?">":" "} ${u}: ${t[f]}`)}return i.join(`
`)}function nU(n){const e=Ut.getPrimaries(Ut.workingColorSpace),t=Ut.getPrimaries(n);let i;switch(e===t?i="":e===Lc&&t===Rc?i="LinearDisplayP3ToLinearSRGB":e===Rc&&t===Lc&&(i="LinearSRGBToLinearDisplayP3"),n){case Li:case nf:return[i,"LinearTransferOETF"];case Tn:case am:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function M0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+tU(n.getShaderSource(e),f)}else return a}function rU(n,e){const t=nU(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function iU(n,e){let t;switch(e){case rP:t="Linear";break;case iP:t="Reinhard";break;case oP:t="OptimizedCineon";break;case aP:t="ACESFilmic";break;case sP:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oU(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(il).join(`
`)}function aU(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sU(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=n.getActiveAttrib(e,a),f=l.name;let u=1;l.type===n.FLOAT_MAT2&&(u=2),l.type===n.FLOAT_MAT3&&(u=3),l.type===n.FLOAT_MAT4&&(u=4),t[f]={type:l.type,location:n.getAttribLocation(e,f),locationSize:u}}return t}function il(n){return n!==""}function A0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lU=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(n){return n.replace(lU,cU)}const uU=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cU(n,e){let t=gt[e];if(t===void 0){const i=uU.get(e);if(i!==void 0)t=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mp(t)}const fU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(n){return n.replace(fU,dU)}function dU(n,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function C0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hU(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===PL?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function pU(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case cs:e="ENVMAP_TYPE_CUBE";break;case tf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mU(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function vU(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case im:e="ENVMAP_BLENDING_MULTIPLY";break;case tP:e="ENVMAP_BLENDING_MIX";break;case nP:e="ENVMAP_BLENDING_ADD";break}return e}function gU(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _U(n,e,t,i){const a=n.getContext(),l=t.defines;let f=t.vertexShader,u=t.fragmentShader;const d=hU(t),p=pU(t),m=mU(t),v=vU(t),g=gU(t),S=t.isWebGL2?"":oU(t),E=aU(l),w=a.createProgram();let x,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(il).join(`
`),x.length>0&&(x+=`
`),y=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(il).join(`
`),y.length>0&&(y+=`
`)):(x=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),y=[S,C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==po?"#define TONE_MAPPING":"",t.toneMapping!==po?gt.tonemapping_pars_fragment:"",t.toneMapping!==po?iU("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,rU("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(il).join(`
`)),f=mp(f),f=A0(f,t),f=T0(f,t),u=mp(u),u=A0(u,t),u=T0(u,t),f=b0(f),u=b0(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===X_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===X_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=R+x+f,D=R+y+u,U=w0(a,a.VERTEX_SHADER,M),O=w0(a,a.FRAGMENT_SHADER,D);a.attachShader(w,U),a.attachShader(w,O),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(he){if(n.debug.checkShaderErrors){const re=a.getProgramInfoLog(w).trim(),pe=a.getShaderInfoLog(U).trim(),H=a.getShaderInfoLog(O).trim();let ee=!0,fe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,w,U,O);else{const ie=M0(a,U,"vertex"),q=M0(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+ie+`
`+q)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(pe===""||H==="")&&(fe=!1);fe&&(he.diagnostics={runnable:ee,programLog:re,vertexShader:{log:pe,prefix:x},fragmentShader:{log:H,prefix:y}})}a.deleteShader(U),a.deleteShader(O),ce=new wc(a,w),b=sU(a,w)}let ce;this.getUniforms=function(){return ce===void 0&&F(this),ce};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(w,QI)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eU++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=O,this}let yU=0;class xU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(i),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new SU(e),t.set(e,i)),i}}class SU{constructor(e){this.id=yU++,this.code=e,this.usedTimes=0}}function EU(n,e,t,i,a,l,f){const u=new TS,d=new xU,p=[],m=a.isWebGL2,v=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return b===0?"uv":`uv${b}`}function x(b,N,he,re,pe){const H=re.fog,ee=pe.geometry,fe=b.isMeshStandardMaterial?re.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||fe),q=ie&&ie.mapping===tf?ie.image.height:null,ne=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const $=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,C=$!==void 0?$.length:0;let z=0;ee.morphAttributes.position!==void 0&&(z=1),ee.morphAttributes.normal!==void 0&&(z=2),ee.morphAttributes.color!==void 0&&(z=3);let W,Y,Q,Z;if(ne){const mn=nr[ne];W=mn.vertexShader,Y=mn.fragmentShader}else W=b.vertexShader,Y=b.fragmentShader,d.update(b),Q=d.getVertexShaderID(b),Z=d.getFragmentShaderID(b);const _e=n.getRenderTarget(),ve=pe.isInstancedMesh===!0,be=pe.isBatchedMesh===!0,Fe=!!b.map,Oe=!!b.matcap,X=!!ie,Ct=!!b.aoMap,ke=!!b.lightMap,ae=!!b.bumpMap,se=!!b.normalMap,xe=!!b.displacementMap,ge=!!b.emissiveMap,Me=!!b.metalnessMap,we=!!b.roughnessMap,Ie=b.anisotropy>0,Ke=b.clearcoat>0,P=b.iridescence>0,T=b.sheen>0,j=b.transmission>0,Ae=Ie&&!!b.anisotropyMap,ye=Ke&&!!b.clearcoatMap,Ce=Ke&&!!b.clearcoatNormalMap,Ye=Ke&&!!b.clearcoatRoughnessMap,De=P&&!!b.iridescenceMap,Be=P&&!!b.iridescenceThicknessMap,at=T&&!!b.sheenColorMap,St=T&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Rt=!!b.specularColorMap,ut=!!b.specularIntensityMap,ot=j&&!!b.transmissionMap,Qe=j&&!!b.thicknessMap,We=!!b.gradientMap,mt=!!b.alphaMap,V=b.alphaTest>0,ze=!!b.alphaHash,Re=!!b.extensions,me=!!ee.attributes.uv1,Ue=!!ee.attributes.uv2,rt=!!ee.attributes.uv3;let xt=po;return b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(xt=n.toneMapping),{isWebGL2:m,shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:Y,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:be,instancing:ve,instancingColor:ve&&pe.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Li,map:Fe,matcap:Oe,envMap:X,envMapMode:X&&ie.mapping,envMapCubeUVHeight:q,aoMap:Ct,lightMap:ke,bumpMap:ae,normalMap:se,displacementMap:g&&xe,emissiveMap:ge,normalMapObjectSpace:se&&b.normalMapType===yP,normalMapTangentSpace:se&&b.normalMapType===yS,metalnessMap:Me,roughnessMap:we,anisotropy:Ie,anisotropyMap:Ae,clearcoat:Ke,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,iridescence:P,iridescenceMap:De,iridescenceThicknessMap:Be,sheen:T,sheenColorMap:at,sheenRoughnessMap:St,specularMap:Pe,specularColorMap:Rt,specularIntensityMap:ut,transmission:j,transmissionMap:ot,thicknessMap:Qe,gradientMap:We,opaque:b.transparent===!1&&b.blending===es,alphaMap:mt,alphaTest:V,alphaHash:ze,combine:b.combine,mapUv:Fe&&w(b.map.channel),aoMapUv:Ct&&w(b.aoMap.channel),lightMapUv:ke&&w(b.lightMap.channel),bumpMapUv:ae&&w(b.bumpMap.channel),normalMapUv:se&&w(b.normalMap.channel),displacementMapUv:xe&&w(b.displacementMap.channel),emissiveMapUv:ge&&w(b.emissiveMap.channel),metalnessMapUv:Me&&w(b.metalnessMap.channel),roughnessMapUv:we&&w(b.roughnessMap.channel),anisotropyMapUv:Ae&&w(b.anisotropyMap.channel),clearcoatMapUv:ye&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:at&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&w(b.sheenRoughnessMap.channel),specularMapUv:Pe&&w(b.specularMap.channel),specularColorMapUv:Rt&&w(b.specularColorMap.channel),specularIntensityMapUv:ut&&w(b.specularIntensityMap.channel),transmissionMapUv:ot&&w(b.transmissionMap.channel),thicknessMapUv:Qe&&w(b.thicknessMap.channel),alphaMapUv:mt&&w(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(se||Ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:Ue,vertexUv3s:rt,pointsUvs:pe.isPoints===!0&&!!ee.attributes.uv&&(Fe||mt),fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:pe.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:z,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&he.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&b.map.isVideoTexture===!0&&Ut.getTransfer(b.map.colorSpace)===Gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bi,flipSided:b.side===rr,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Re&&b.extensions.derivatives===!0,extensionFragDepth:Re&&b.extensions.fragDepth===!0,extensionDrawBuffers:Re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function y(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const he in b.defines)N.push(he),N.push(b.defines[he]);return b.isRawShaderMaterial===!1&&(R(N,b),M(N,b),N.push(n.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function R(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function M(b,N){u.disableAll(),N.isWebGL2&&u.enable(0),N.supportsVertexTextures&&u.enable(1),N.instancing&&u.enable(2),N.instancingColor&&u.enable(3),N.matcap&&u.enable(4),N.envMap&&u.enable(5),N.normalMapObjectSpace&&u.enable(6),N.normalMapTangentSpace&&u.enable(7),N.clearcoat&&u.enable(8),N.iridescence&&u.enable(9),N.alphaTest&&u.enable(10),N.vertexColors&&u.enable(11),N.vertexAlphas&&u.enable(12),N.vertexUv1s&&u.enable(13),N.vertexUv2s&&u.enable(14),N.vertexUv3s&&u.enable(15),N.vertexTangents&&u.enable(16),N.anisotropy&&u.enable(17),N.alphaHash&&u.enable(18),N.batching&&u.enable(19),b.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.skinning&&u.enable(4),N.morphTargets&&u.enable(5),N.morphNormals&&u.enable(6),N.morphColors&&u.enable(7),N.premultipliedAlpha&&u.enable(8),N.shadowMapEnabled&&u.enable(9),N.useLegacyLights&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),b.push(u.mask)}function D(b){const N=E[b.type];let he;if(N){const re=nr[N];he=um.clone(re.uniforms)}else he=b.uniforms;return he}function U(b,N){let he;for(let re=0,pe=p.length;re<pe;re++){const H=p[re];if(H.cacheKey===N){he=H,++he.usedTimes;break}}return he===void 0&&(he=new _U(n,N,b,l),p.push(he)),he}function O(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),b.destroy()}}function F(b){d.remove(b)}function ce(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:D,acquireProgram:U,releaseProgram:O,releaseShaderCache:F,programs:p,dispose:ce}}function wU(){let n=new WeakMap;function e(l){let f=n.get(l);return f===void 0&&(f={},n.set(l,f)),f}function t(l){n.delete(l)}function i(l,f,u){n.get(l)[f]=u}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function MU(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function R0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function L0(){const n=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function f(v,g,S,E,w,x){let y=n[e];return y===void 0?(y={id:v.id,object:v,geometry:g,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:x},n[e]=y):(y.id=v.id,y.object=v,y.geometry=g,y.material=S,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=w,y.group=x),e++,y}function u(v,g,S,E,w,x){const y=f(v,g,S,E,w,x);S.transmission>0?i.push(y):S.transparent===!0?a.push(y):t.push(y)}function d(v,g,S,E,w,x){const y=f(v,g,S,E,w,x);S.transmission>0?i.unshift(y):S.transparent===!0?a.unshift(y):t.unshift(y)}function p(v,g){t.length>1&&t.sort(v||MU),i.length>1&&i.sort(g||R0),a.length>1&&a.sort(g||R0)}function m(){for(let v=e,g=n.length;v<g;v++){const S=n[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:u,unshift:d,finish:m,sort:p}}function AU(){let n=new WeakMap;function e(i,a){const l=n.get(i);let f;return l===void 0?(f=new L0,n.set(i,[f])):a>=l.length?(f=new L0,l.push(f)):f=l[a],f}function t(){n=new WeakMap}return{get:e,dispose:t}}function TU(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new et};break;case"SpotLight":t={position:new k,direction:new k,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function bU(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CU=0;function RU(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LU(n,e){const t=new TU,i=bU(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new k);const l=new k,f=new kt,u=new kt;function d(m,v){let g=0,S=0,E=0;for(let re=0;re<9;re++)a.probe[re].set(0,0,0);let w=0,x=0,y=0,R=0,M=0,D=0,U=0,O=0,F=0,ce=0,b=0;m.sort(RU);const N=v===!0?Math.PI:1;for(let re=0,pe=m.length;re<pe;re++){const H=m[re],ee=H.color,fe=H.intensity,ie=H.distance,q=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ee.r*fe*N,S+=ee.g*fe*N,E+=ee.b*fe*N;else if(H.isLightProbe){for(let ne=0;ne<9;ne++)a.probe[ne].addScaledVector(H.sh.coefficients[ne],fe);b++}else if(H.isDirectionalLight){const ne=t.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity*N),H.castShadow){const $=H.shadow,C=i.get(H);C.shadowBias=$.bias,C.shadowNormalBias=$.normalBias,C.shadowRadius=$.radius,C.shadowMapSize=$.mapSize,a.directionalShadow[w]=C,a.directionalShadowMap[w]=q,a.directionalShadowMatrix[w]=H.shadow.matrix,D++}a.directional[w]=ne,w++}else if(H.isSpotLight){const ne=t.get(H);ne.position.setFromMatrixPosition(H.matrixWorld),ne.color.copy(ee).multiplyScalar(fe*N),ne.distance=ie,ne.coneCos=Math.cos(H.angle),ne.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ne.decay=H.decay,a.spot[y]=ne;const $=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,$.updateMatrices(H),H.castShadow&&ce++),a.spotLightMatrix[y]=$.matrix,H.castShadow){const C=i.get(H);C.shadowBias=$.bias,C.shadowNormalBias=$.normalBias,C.shadowRadius=$.radius,C.shadowMapSize=$.mapSize,a.spotShadow[y]=C,a.spotShadowMap[y]=q,O++}y++}else if(H.isRectAreaLight){const ne=t.get(H);ne.color.copy(ee).multiplyScalar(fe),ne.halfWidth.set(H.width*.5,0,0),ne.halfHeight.set(0,H.height*.5,0),a.rectArea[R]=ne,R++}else if(H.isPointLight){const ne=t.get(H);if(ne.color.copy(H.color).multiplyScalar(H.intensity*N),ne.distance=H.distance,ne.decay=H.decay,H.castShadow){const $=H.shadow,C=i.get(H);C.shadowBias=$.bias,C.shadowNormalBias=$.normalBias,C.shadowRadius=$.radius,C.shadowMapSize=$.mapSize,C.shadowCameraNear=$.camera.near,C.shadowCameraFar=$.camera.far,a.pointShadow[x]=C,a.pointShadowMap[x]=q,a.pointShadowMatrix[x]=H.shadow.matrix,U++}a.point[x]=ne,x++}else if(H.isHemisphereLight){const ne=t.get(H);ne.skyColor.copy(H.color).multiplyScalar(fe*N),ne.groundColor.copy(H.groundColor).multiplyScalar(fe*N),a.hemi[M]=ne,M++}}R>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=S,a.ambient[2]=E;const he=a.hash;(he.directionalLength!==w||he.pointLength!==x||he.spotLength!==y||he.rectAreaLength!==R||he.hemiLength!==M||he.numDirectionalShadows!==D||he.numPointShadows!==U||he.numSpotShadows!==O||he.numSpotMaps!==F||he.numLightProbes!==b)&&(a.directional.length=w,a.spot.length=y,a.rectArea.length=R,a.point.length=x,a.hemi.length=M,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=O+F-ce,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=ce,a.numLightProbes=b,he.directionalLength=w,he.pointLength=x,he.spotLength=y,he.rectAreaLength=R,he.hemiLength=M,he.numDirectionalShadows=D,he.numPointShadows=U,he.numSpotShadows=O,he.numSpotMaps=F,he.numLightProbes=b,a.version=CU++)}function p(m,v){let g=0,S=0,E=0,w=0,x=0;const y=v.matrixWorldInverse;for(let R=0,M=m.length;R<M;R++){const D=m[R];if(D.isDirectionalLight){const U=a.directional[g];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),g++}else if(D.isSpotLight){const U=a.spot[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),E++}else if(D.isRectAreaLight){const U=a.rectArea[w];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),u.identity(),f.copy(D.matrixWorld),f.premultiply(y),u.extractRotation(f),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),w++}else if(D.isPointLight){const U=a.point[S];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),S++}else if(D.isHemisphereLight){const U=a.hemi[x];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(y),x++}}}return{setup:d,setupView:p,state:a}}function P0(n,e){const t=new LU(n,e),i=[],a=[];function l(){i.length=0,a.length=0}function f(v){i.push(v)}function u(v){a.push(v)}function d(v){t.setup(i,v)}function p(v){t.setupView(i,v)}return{init:l,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:d,setupLightsView:p,pushLight:f,pushShadow:u}}function PU(n,e){let t=new WeakMap;function i(l,f=0){const u=t.get(l);let d;return u===void 0?(d=new P0(n,e),t.set(l,[d])):f>=u.length?(d=new P0(n,e),u.push(d)):d=u[f],d}function a(){t=new WeakMap}return{get:i,dispose:a}}class DU extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IU extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NU=`uniform sampler2D shadow_pass;
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
}`;function FU(n,e,t){let i=new rf;const a=new ft,l=new ft,f=new Nt,u=new DU({depthPacking:_P}),d=new IU,p={},m=t.maxTextureSize,v={[yo]:rr,[rr]:yo,[bi]:bi},g=new xo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:UU,fragmentShader:NU}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Bn;E.setAttribute("position",new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Xr(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uS;let y=this.type;this.render=function(U,O,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const ce=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),he=n.state;he.setBlending(ho),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const re=y!==Ti&&this.type===Ti,pe=y===Ti&&this.type!==Ti;for(let H=0,ee=U.length;H<ee;H++){const fe=U[H],ie=fe.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;a.copy(ie.mapSize);const q=ie.getFrameExtents();if(a.multiply(q),l.copy(ie.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/q.x),a.x=l.x*q.x,ie.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/q.y),a.y=l.y*q.y,ie.mapSize.y=l.y)),ie.map===null||re===!0||pe===!0){const $=this.type!==Ti?{minFilter:An,magFilter:An}:{};ie.map!==null&&ie.map.dispose(),ie.map=new ta(a.x,a.y,$),ie.map.texture.name=fe.name+".shadowMap",ie.camera.updateProjectionMatrix()}n.setRenderTarget(ie.map),n.clear();const ne=ie.getViewportCount();for(let $=0;$<ne;$++){const C=ie.getViewport($);f.set(l.x*C.x,l.y*C.y,l.x*C.z,l.y*C.w),he.viewport(f),ie.updateMatrices(fe,$),i=ie.getFrustum(),D(O,F,ie.camera,fe,this.type)}ie.isPointLightShadow!==!0&&this.type===Ti&&R(ie,F),ie.needsUpdate=!1}y=this.type,x.needsUpdate=!1,n.setRenderTarget(ce,b,N)};function R(U,O){const F=e.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ta(a.x,a.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(O,null,F,g,w,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(O,null,F,S,w,null)}function M(U,O,F,ce){let b=null;const N=F.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(N!==void 0)b=N;else if(b=F.isPointLight===!0?d:u,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const he=b.uuid,re=O.uuid;let pe=p[he];pe===void 0&&(pe={},p[he]=pe);let H=pe[re];H===void 0&&(H=b.clone(),pe[re]=H),b=H}if(b.visible=O.visible,b.wireframe=O.wireframe,ce===Ti?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:v[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const he=n.properties.get(b);he.light=F}return b}function D(U,O,F,ce,b){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&b===Ti)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,U.matrixWorld);const re=e.update(U),pe=U.material;if(Array.isArray(pe)){const H=re.groups;for(let ee=0,fe=H.length;ee<fe;ee++){const ie=H[ee],q=pe[ie.materialIndex];if(q&&q.visible){const ne=M(U,q,ce,b);U.onBeforeShadow(n,U,O,F,re,ne,ie),n.renderBufferDirect(F,null,re,ne,U,ie),U.onAfterShadow(n,U,O,F,re,ne,ie)}}}else if(pe.visible){const H=M(U,pe,ce,b);U.onBeforeShadow(n,U,O,F,re,H,null),n.renderBufferDirect(F,null,re,H,U,null),U.onAfterShadow(n,U,O,F,re,H,null)}}const he=U.children;for(let re=0,pe=he.length;re<pe;re++)D(he[re],O,F,ce,b)}}function OU(n,e,t){const i=t.isWebGL2;function a(){let V=!1;const ze=new Nt;let Re=null;const me=new Nt(0,0,0,0);return{setMask:function(Ue){Re!==Ue&&!V&&(n.colorMask(Ue,Ue,Ue,Ue),Re=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,rt,xt,Zt,mn){mn===!0&&(Ue*=Zt,rt*=Zt,xt*=Zt),ze.set(Ue,rt,xt,Zt),me.equals(ze)===!1&&(n.clearColor(Ue,rt,xt,Zt),me.copy(ze))},reset:function(){V=!1,Re=null,me.set(-1,0,0,0)}}}function l(){let V=!1,ze=null,Re=null,me=null;return{setTest:function(Ue){Ue?be(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(Ue){ze!==Ue&&!V&&(n.depthMask(Ue),ze=Ue)},setFunc:function(Ue){if(Re!==Ue){switch(Ue){case YL:n.depthFunc(n.NEVER);break;case qL:n.depthFunc(n.ALWAYS);break;case KL:n.depthFunc(n.LESS);break;case bc:n.depthFunc(n.LEQUAL);break;case ZL:n.depthFunc(n.EQUAL);break;case JL:n.depthFunc(n.GEQUAL);break;case QL:n.depthFunc(n.GREATER);break;case eP:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){me!==Ue&&(n.clearDepth(Ue),me=Ue)},reset:function(){V=!1,ze=null,Re=null,me=null}}}function f(){let V=!1,ze=null,Re=null,me=null,Ue=null,rt=null,xt=null,Zt=null,mn=null;return{setTest:function(At){V||(At?be(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(At){ze!==At&&!V&&(n.stencilMask(At),ze=At)},setFunc:function(At,un,Rn){(Re!==At||me!==un||Ue!==Rn)&&(n.stencilFunc(At,un,Rn),Re=At,me=un,Ue=Rn)},setOp:function(At,un,Rn){(rt!==At||xt!==un||Zt!==Rn)&&(n.stencilOp(At,un,Rn),rt=At,xt=un,Zt=Rn)},setLocked:function(At){V=At},setClear:function(At){mn!==At&&(n.clearStencil(At),mn=At)},reset:function(){V=!1,ze=null,Re=null,me=null,Ue=null,rt=null,xt=null,Zt=null,mn=null}}}const u=new a,d=new l,p=new f,m=new WeakMap,v=new WeakMap;let g={},S={},E=new WeakMap,w=[],x=null,y=!1,R=null,M=null,D=null,U=null,O=null,F=null,ce=null,b=new et(0,0,0),N=0,he=!1,re=null,pe=null,H=null,ee=null,fe=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ne=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),q=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=ne>=2);let C=null,z={};const W=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),Q=new Nt().fromArray(W),Z=new Nt().fromArray(Y);function _e(V,ze,Re,me){const Ue=new Uint8Array(4),rt=n.createTexture();n.bindTexture(V,rt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xt=0;xt<Re;xt++)i&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(ze,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(ze+xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return rt}const ve={};ve[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),be(n.DEPTH_TEST),d.setFunc(bc),ge(!1),Me(h_),be(n.CULL_FACE),se(ho);function be(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Fe(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function Oe(V,ze){return S[V]!==ze?(n.bindFramebuffer(V,ze),S[V]=ze,i&&(V===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=ze),V===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=ze)),!0):!1}function X(V,ze){let Re=w,me=!1;if(V)if(Re=E.get(ze),Re===void 0&&(Re=[],E.set(ze,Re)),V.isWebGLMultipleRenderTargets){const Ue=V.texture;if(Re.length!==Ue.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,xt=Ue.length;rt<xt;rt++)Re[rt]=n.COLOR_ATTACHMENT0+rt;Re.length=Ue.length,me=!0}}else Re[0]!==n.COLOR_ATTACHMENT0&&(Re[0]=n.COLOR_ATTACHMENT0,me=!0);else Re[0]!==n.BACK&&(Re[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Ct(V){return x!==V?(n.useProgram(V),x=V,!0):!1}const ke={[Yo]:n.FUNC_ADD,[IL]:n.FUNC_SUBTRACT,[UL]:n.FUNC_REVERSE_SUBTRACT};if(i)ke[g_]=n.MIN,ke[__]=n.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(ke[g_]=V.MIN_EXT,ke[__]=V.MAX_EXT)}const ae={[NL]:n.ZERO,[FL]:n.ONE,[OL]:n.SRC_COLOR,[ap]:n.SRC_ALPHA,[GL]:n.SRC_ALPHA_SATURATE,[HL]:n.DST_COLOR,[BL]:n.DST_ALPHA,[zL]:n.ONE_MINUS_SRC_COLOR,[sp]:n.ONE_MINUS_SRC_ALPHA,[VL]:n.ONE_MINUS_DST_COLOR,[kL]:n.ONE_MINUS_DST_ALPHA,[WL]:n.CONSTANT_COLOR,[$L]:n.ONE_MINUS_CONSTANT_COLOR,[XL]:n.CONSTANT_ALPHA,[jL]:n.ONE_MINUS_CONSTANT_ALPHA};function se(V,ze,Re,me,Ue,rt,xt,Zt,mn,At){if(V===ho){y===!0&&(Fe(n.BLEND),y=!1);return}if(y===!1&&(be(n.BLEND),y=!0),V!==DL){if(V!==R||At!==he){if((M!==Yo||O!==Yo)&&(n.blendEquation(n.FUNC_ADD),M=Yo,O=Yo),At)switch(V){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case p_:n.blendFunc(n.ONE,n.ONE);break;case m_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case v_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case p_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case m_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case v_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,U=null,F=null,ce=null,b.set(0,0,0),N=0,R=V,he=At}return}Ue=Ue||ze,rt=rt||Re,xt=xt||me,(ze!==M||Ue!==O)&&(n.blendEquationSeparate(ke[ze],ke[Ue]),M=ze,O=Ue),(Re!==D||me!==U||rt!==F||xt!==ce)&&(n.blendFuncSeparate(ae[Re],ae[me],ae[rt],ae[xt]),D=Re,U=me,F=rt,ce=xt),(Zt.equals(b)===!1||mn!==N)&&(n.blendColor(Zt.r,Zt.g,Zt.b,mn),b.copy(Zt),N=mn),R=V,he=!1}function xe(V,ze){V.side===bi?Fe(n.CULL_FACE):be(n.CULL_FACE);let Re=V.side===rr;ze&&(Re=!Re),ge(Re),V.blending===es&&V.transparent===!1?se(ho):se(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const me=V.stencilWrite;p.setTest(me),me&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){re!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),re=V)}function Me(V){V!==RL?(be(n.CULL_FACE),V!==pe&&(V===h_?n.cullFace(n.BACK):V===LL?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),pe=V}function we(V){V!==H&&(q&&n.lineWidth(V),H=V)}function Ie(V,ze,Re){V?(be(n.POLYGON_OFFSET_FILL),(ee!==ze||fe!==Re)&&(n.polygonOffset(ze,Re),ee=ze,fe=Re)):Fe(n.POLYGON_OFFSET_FILL)}function Ke(V){V?be(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function P(V){V===void 0&&(V=n.TEXTURE0+ie-1),C!==V&&(n.activeTexture(V),C=V)}function T(V,ze,Re){Re===void 0&&(C===null?Re=n.TEXTURE0+ie-1:Re=C);let me=z[Re];me===void 0&&(me={type:void 0,texture:void 0},z[Re]=me),(me.type!==V||me.texture!==ze)&&(C!==Re&&(n.activeTexture(Re),C=Re),n.bindTexture(V,ze||ve[V]),me.type=V,me.texture=ze)}function j(){const V=z[C];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(V){Q.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Q.copy(V))}function ot(V){Z.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function Qe(V,ze){let Re=v.get(ze);Re===void 0&&(Re=new WeakMap,v.set(ze,Re));let me=Re.get(V);me===void 0&&(me=n.getUniformBlockIndex(ze,V.name),Re.set(V,me))}function We(V,ze){const me=v.get(ze).get(V);m.get(ze)!==me&&(n.uniformBlockBinding(ze,me,V.__bindingPointIndex),m.set(ze,me))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},C=null,z={},S={},E=new WeakMap,w=[],x=null,y=!1,R=null,M=null,D=null,U=null,O=null,F=null,ce=null,b=new et(0,0,0),N=0,he=!1,re=null,pe=null,H=null,ee=null,fe=null,Q.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:be,disable:Fe,bindFramebuffer:Oe,drawBuffers:X,useProgram:Ct,setBlending:se,setMaterial:xe,setFlipSided:ge,setCullFace:Me,setLineWidth:we,setPolygonOffset:Ie,setScissorTest:Ke,activeTexture:P,bindTexture:T,unbindTexture:j,compressedTexImage2D:Ae,compressedTexImage3D:ye,texImage2D:Pe,texImage3D:Rt,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:at,texStorage3D:St,texSubImage2D:Ce,texSubImage3D:Ye,compressedTexSubImage2D:De,compressedTexSubImage3D:Be,scissor:ut,viewport:ot,reset:mt}}function zU(n,e,t,i,a,l,f){const u=a.isWebGL2,d=a.maxTextures,p=a.maxCubemapSize,m=a.maxTextureSize,v=a.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let w;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,T){return y?new OffscreenCanvas(P,T):Dc("canvas")}function M(P,T,j,Ae){let ye=1;if((P.width>Ae||P.height>Ae)&&(ye=Ae/Math.max(P.width,P.height)),ye<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const Ce=T?Pc:Math.floor,Ye=Ce(ye*P.width),De=Ce(ye*P.height);w===void 0&&(w=R(Ye,De));const Be=j?R(Ye,De):w;return Be.width=Ye,Be.height=De,Be.getContext("2d").drawImage(P,0,0,Ye,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ye+"x"+De+")."),Be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function D(P){return pp(P.width)&&pp(P.height)}function U(P){return u?!1:P.wrapS!==$r||P.wrapT!==$r||P.minFilter!==An&&P.minFilter!==Er}function O(P,T){return P.generateMipmaps&&T&&P.minFilter!==An&&P.minFilter!==Er}function F(P){n.generateMipmap(P)}function ce(P,T,j,Ae,ye=!1){if(u===!1)return T;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ce=T;if(T===n.RED&&(j===n.FLOAT&&(Ce=n.R32F),j===n.HALF_FLOAT&&(Ce=n.R16F),j===n.UNSIGNED_BYTE&&(Ce=n.R8)),T===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(Ce=n.R8UI),j===n.UNSIGNED_SHORT&&(Ce=n.R16UI),j===n.UNSIGNED_INT&&(Ce=n.R32UI),j===n.BYTE&&(Ce=n.R8I),j===n.SHORT&&(Ce=n.R16I),j===n.INT&&(Ce=n.R32I)),T===n.RG&&(j===n.FLOAT&&(Ce=n.RG32F),j===n.HALF_FLOAT&&(Ce=n.RG16F),j===n.UNSIGNED_BYTE&&(Ce=n.RG8)),T===n.RGBA){const Ye=ye?Cc:Ut.getTransfer(Ae);j===n.FLOAT&&(Ce=n.RGBA32F),j===n.HALF_FLOAT&&(Ce=n.RGBA16F),j===n.UNSIGNED_BYTE&&(Ce=Ye===Gt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(Ce=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(Ce=n.RGB5_A1)}return(Ce===n.R16F||Ce===n.R32F||Ce===n.RG16F||Ce===n.RG32F||Ce===n.RGBA16F||Ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function b(P,T,j){return O(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==Er?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function N(P){return P===An||P===y_||P===nh?n.NEAREST:n.LINEAR}function he(P){const T=P.target;T.removeEventListener("dispose",he),pe(T),T.isVideoTexture&&E.delete(T)}function re(P){const T=P.target;T.removeEventListener("dispose",re),ee(T)}function pe(P){const T=i.get(P);if(T.__webglInit===void 0)return;const j=P.source,Ae=x.get(j);if(Ae){const ye=Ae[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(P),Object.keys(Ae).length===0&&x.delete(j)}i.remove(P)}function H(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const j=P.source,Ae=x.get(j);delete Ae[T.__cacheKey],f.memory.textures--}function ee(P){const T=P.texture,j=i.get(P),Ae=i.get(T);if(Ae.__webglTexture!==void 0&&(n.deleteTexture(Ae.__webglTexture),f.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(j.__webglFramebuffer[ye]))for(let Ce=0;Ce<j.__webglFramebuffer[ye].length;Ce++)n.deleteFramebuffer(j.__webglFramebuffer[ye][Ce]);else n.deleteFramebuffer(j.__webglFramebuffer[ye]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ye])}else{if(Array.isArray(j.__webglFramebuffer))for(let ye=0;ye<j.__webglFramebuffer.length;ye++)n.deleteFramebuffer(j.__webglFramebuffer[ye]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ye=0;ye<j.__webglColorRenderbuffer.length;ye++)j.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ye]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ye=0,Ce=T.length;ye<Ce;ye++){const Ye=i.get(T[ye]);Ye.__webglTexture&&(n.deleteTexture(Ye.__webglTexture),f.memory.textures--),i.remove(T[ye])}i.remove(T),i.remove(P)}let fe=0;function ie(){fe=0}function q(){const P=fe;return P>=d&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+d),fe+=1,P}function ne(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function $(P,T){const j=i.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const Ae=P.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(j,P,T);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+T)}function C(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){be(j,P,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+T)}function z(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){be(j,P,T);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+T)}function W(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){Fe(j,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+T)}const Y={[cp]:n.REPEAT,[$r]:n.CLAMP_TO_EDGE,[fp]:n.MIRRORED_REPEAT},Q={[An]:n.NEAREST,[y_]:n.NEAREST_MIPMAP_NEAREST,[nh]:n.NEAREST_MIPMAP_LINEAR,[Er]:n.LINEAR,[lP]:n.LINEAR_MIPMAP_NEAREST,[ml]:n.LINEAR_MIPMAP_LINEAR},Z={[xP]:n.NEVER,[TP]:n.ALWAYS,[SP]:n.LESS,[xS]:n.LEQUAL,[EP]:n.EQUAL,[AP]:n.GEQUAL,[wP]:n.GREATER,[MP]:n.NOTEQUAL};function _e(P,T,j){if(j?(n.texParameteri(P,n.TEXTURE_WRAP_S,Y[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Y[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Y[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Q[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Q[T.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==$r||T.wrapT!==$r)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,N(T.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,N(T.minFilter)),T.minFilter!==An&&T.minFilter!==Er&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===An||T.minFilter!==nh&&T.minFilter!==ml||T.type===Ci&&e.has("OES_texture_float_linear")===!1||u===!1&&T.type===vl&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(P,Ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ve(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",he));const Ae=T.source;let ye=x.get(Ae);ye===void 0&&(ye={},x.set(Ae,ye));const Ce=ne(T);if(Ce!==P.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:n.createTexture(),usedTimes:0},f.memory.textures++,j=!0),ye[Ce].usedTimes++;const Ye=ye[P.__cacheKey];Ye!==void 0&&(ye[P.__cacheKey].usedTimes--,Ye.usedTimes===0&&H(T)),P.__cacheKey=Ce,P.__webglTexture=ye[Ce].texture}return j}function be(P,T,j){let Ae=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ae=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ae=n.TEXTURE_3D);const ye=ve(P,T),Ce=T.source;t.bindTexture(Ae,P.__webglTexture,n.TEXTURE0+j);const Ye=i.get(Ce);if(Ce.version!==Ye.__version||ye===!0){t.activeTexture(n.TEXTURE0+j);const De=Ut.getPrimaries(Ut.workingColorSpace),Be=T.colorSpace===Mr?null:Ut.getPrimaries(T.colorSpace),at=T.colorSpace===Mr||De===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const St=U(T)&&D(T.image)===!1;let Pe=M(T.image,St,!1,m);Pe=Ke(T,Pe);const Rt=D(Pe)||u,ut=l.convert(T.format,T.colorSpace);let ot=l.convert(T.type),Qe=ce(T.internalFormat,ut,ot,T.colorSpace,T.isVideoTexture);_e(Ae,T,Rt);let We;const mt=T.mipmaps,V=u&&T.isVideoTexture!==!0&&Qe!==gS,ze=Ye.__version===void 0||ye===!0,Re=b(T,Pe,Rt);if(T.isDepthTexture)Qe=n.DEPTH_COMPONENT,u?T.type===Ci?Qe=n.DEPTH_COMPONENT32F:T.type===lo?Qe=n.DEPTH_COMPONENT24:T.type===Jo?Qe=n.DEPTH24_STENCIL8:Qe=n.DEPTH_COMPONENT16:T.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Qo&&Qe===n.DEPTH_COMPONENT&&T.type!==om&&T.type!==lo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=lo,ot=l.convert(T.type)),T.format===fs&&Qe===n.DEPTH_COMPONENT&&(Qe=n.DEPTH_STENCIL,T.type!==Jo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Jo,ot=l.convert(T.type))),ze&&(V?t.texStorage2D(n.TEXTURE_2D,1,Qe,Pe.width,Pe.height):t.texImage2D(n.TEXTURE_2D,0,Qe,Pe.width,Pe.height,0,ut,ot,null));else if(T.isDataTexture)if(mt.length>0&&Rt){V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,Qe,mt[0].width,mt[0].height);for(let me=0,Ue=mt.length;me<Ue;me++)We=mt[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,We.width,We.height,ut,ot,We.data):t.texImage2D(n.TEXTURE_2D,me,Qe,We.width,We.height,0,ut,ot,We.data);T.generateMipmaps=!1}else V?(ze&&t.texStorage2D(n.TEXTURE_2D,Re,Qe,Pe.width,Pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe.width,Pe.height,ut,ot,Pe.data)):t.texImage2D(n.TEXTURE_2D,0,Qe,Pe.width,Pe.height,0,ut,ot,Pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Qe,mt[0].width,mt[0].height,Pe.depth);for(let me=0,Ue=mt.length;me<Ue;me++)We=mt[me],T.format!==wr?ut!==null?V?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,We.width,We.height,Pe.depth,ut,We.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Qe,We.width,We.height,Pe.depth,0,We.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,We.width,We.height,Pe.depth,ut,ot,We.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Qe,We.width,We.height,Pe.depth,0,ut,ot,We.data)}else{V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,Qe,mt[0].width,mt[0].height);for(let me=0,Ue=mt.length;me<Ue;me++)We=mt[me],T.format!==wr?ut!==null?V?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,We.width,We.height,ut,We.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Qe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,We.width,We.height,ut,ot,We.data):t.texImage2D(n.TEXTURE_2D,me,Qe,We.width,We.height,0,ut,ot,We.data)}else if(T.isDataArrayTexture)V?(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Qe,Pe.width,Pe.height,Pe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,ut,ot,Pe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Qe,Pe.width,Pe.height,Pe.depth,0,ut,ot,Pe.data);else if(T.isData3DTexture)V?(ze&&t.texStorage3D(n.TEXTURE_3D,Re,Qe,Pe.width,Pe.height,Pe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,ut,ot,Pe.data)):t.texImage3D(n.TEXTURE_3D,0,Qe,Pe.width,Pe.height,Pe.depth,0,ut,ot,Pe.data);else if(T.isFramebufferTexture){if(ze)if(V)t.texStorage2D(n.TEXTURE_2D,Re,Qe,Pe.width,Pe.height);else{let me=Pe.width,Ue=Pe.height;for(let rt=0;rt<Re;rt++)t.texImage2D(n.TEXTURE_2D,rt,Qe,me,Ue,0,ut,ot,null),me>>=1,Ue>>=1}}else if(mt.length>0&&Rt){V&&ze&&t.texStorage2D(n.TEXTURE_2D,Re,Qe,mt[0].width,mt[0].height);for(let me=0,Ue=mt.length;me<Ue;me++)We=mt[me],V?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ut,ot,We):t.texImage2D(n.TEXTURE_2D,me,Qe,ut,ot,We);T.generateMipmaps=!1}else V?(ze&&t.texStorage2D(n.TEXTURE_2D,Re,Qe,Pe.width,Pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,ot,Pe)):t.texImage2D(n.TEXTURE_2D,0,Qe,ut,ot,Pe);O(T,Rt)&&F(Ae),Ye.__version=Ce.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Fe(P,T,j){if(T.image.length!==6)return;const Ae=ve(P,T),ye=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+j);const Ce=i.get(ye);if(ye.version!==Ce.__version||Ae===!0){t.activeTexture(n.TEXTURE0+j);const Ye=Ut.getPrimaries(Ut.workingColorSpace),De=T.colorSpace===Mr?null:Ut.getPrimaries(T.colorSpace),Be=T.colorSpace===Mr||Ye===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const at=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!at&&!St?Pe[me]=M(T.image[me],!1,!0,p):Pe[me]=St?T.image[me].image:T.image[me],Pe[me]=Ke(T,Pe[me]);const Rt=Pe[0],ut=D(Rt)||u,ot=l.convert(T.format,T.colorSpace),Qe=l.convert(T.type),We=ce(T.internalFormat,ot,Qe,T.colorSpace),mt=u&&T.isVideoTexture!==!0,V=Ce.__version===void 0||Ae===!0;let ze=b(T,Rt,ut);_e(n.TEXTURE_CUBE_MAP,T,ut);let Re;if(at){mt&&V&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,We,Rt.width,Rt.height);for(let me=0;me<6;me++){Re=Pe[me].mipmaps;for(let Ue=0;Ue<Re.length;Ue++){const rt=Re[Ue];T.format!==wr?ot!==null?mt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,rt.width,rt.height,ot,rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,We,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,rt.width,rt.height,ot,Qe,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,We,rt.width,rt.height,0,ot,Qe,rt.data)}}}else{Re=T.mipmaps,mt&&V&&(Re.length>0&&ze++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,We,Pe[0].width,Pe[0].height));for(let me=0;me<6;me++)if(St){mt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,ot,Qe,Pe[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,We,Pe[me].width,Pe[me].height,0,ot,Qe,Pe[me].data);for(let Ue=0;Ue<Re.length;Ue++){const xt=Re[Ue].image[me].image;mt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,xt.width,xt.height,ot,Qe,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,We,xt.width,xt.height,0,ot,Qe,xt.data)}}else{mt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ot,Qe,Pe[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,We,ot,Qe,Pe[me]);for(let Ue=0;Ue<Re.length;Ue++){const rt=Re[Ue];mt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,ot,Qe,rt.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,We,ot,Qe,rt.image[me])}}}O(T,ut)&&F(n.TEXTURE_CUBE_MAP),Ce.__version=ye.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Oe(P,T,j,Ae,ye,Ce){const Ye=l.convert(j.format,j.colorSpace),De=l.convert(j.type),Be=ce(j.internalFormat,Ye,De,j.colorSpace);if(!i.get(T).__hasExternalTextures){const St=Math.max(1,T.width>>Ce),Pe=Math.max(1,T.height>>Ce);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,Be,St,Pe,T.depth,0,Ye,De,null):t.texImage2D(ye,Ce,Be,St,Pe,0,Ye,De,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ye,i.get(j).__webglTexture,0,Me(T)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ye,i.get(j).__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function X(P,T,j){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let Ae=u===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||we(T)){const ye=T.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Ci?Ae=n.DEPTH_COMPONENT32F:ye.type===lo&&(Ae=n.DEPTH_COMPONENT24));const Ce=Me(T);we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Ae,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const Ae=Me(T);j&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const Ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ye=0;ye<Ae.length;ye++){const Ce=Ae[ye],Ye=l.convert(Ce.format,Ce.colorSpace),De=l.convert(Ce.type),Be=ce(Ce.internalFormat,Ye,De,Ce.colorSpace),at=Me(T);j&&we(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,Be,T.width,T.height):we(T)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,Be,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Be,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Ae=i.get(T.depthTexture).__webglTexture,ye=Me(T);if(T.depthTexture.format===Qo)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ae,0);else if(T.depthTexture.format===fs)we(T)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function ke(P){const T=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ct(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Ae]),T.__webglDepthbuffer[Ae]=n.createRenderbuffer(),X(T.__webglDepthbuffer[Ae],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),X(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(P,T,j){const Ae=i.get(P);T!==void 0&&Oe(Ae.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&ke(P)}function se(P){const T=P.texture,j=i.get(P),Ae=i.get(T);P.addEventListener("dispose",re),P.isWebGLMultipleRenderTargets!==!0&&(Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture()),Ae.__version=T.version,f.memory.textures++);const ye=P.isWebGLCubeRenderTarget===!0,Ce=P.isWebGLMultipleRenderTargets===!0,Ye=D(P)||u;if(ye){j.__webglFramebuffer=[];for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[De]=[];for(let Be=0;Be<T.mipmaps.length;Be++)j.__webglFramebuffer[De][Be]=n.createFramebuffer()}else j.__webglFramebuffer[De]=n.createFramebuffer()}else{if(u&&T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)j.__webglFramebuffer[De]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ce)if(a.drawBuffers){const De=P.texture;for(let Be=0,at=De.length;Be<at;Be++){const St=i.get(De[Be]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&P.samples>0&&we(P)===!1){const De=Ce?T:[T];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Be=0;Be<De.length;Be++){const at=De[Be];j.__webglColorRenderbuffer[Be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Be]);const St=l.convert(at.format,at.colorSpace),Pe=l.convert(at.type),Rt=ce(at.internalFormat,St,Pe,at.colorSpace,P.isXRRenderTarget===!0),ut=Me(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Rt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,j.__webglColorRenderbuffer[Be])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),X(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,Ae.__webglTexture),_e(n.TEXTURE_CUBE_MAP,T,Ye);for(let De=0;De<6;De++)if(u&&T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)Oe(j.__webglFramebuffer[De][Be],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,Be);else Oe(j.__webglFramebuffer[De],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);O(T,Ye)&&F(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){const De=P.texture;for(let Be=0,at=De.length;Be<at;Be++){const St=De[Be],Pe=i.get(St);t.bindTexture(n.TEXTURE_2D,Pe.__webglTexture),_e(n.TEXTURE_2D,St,Ye),Oe(j.__webglFramebuffer,P,St,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,0),O(St,Ye)&&F(n.TEXTURE_2D)}t.unbindTexture()}else{let De=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(u?De=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,Ae.__webglTexture),_e(De,T,Ye),u&&T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)Oe(j.__webglFramebuffer[Be],P,T,n.COLOR_ATTACHMENT0,De,Be);else Oe(j.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,De,0);O(T,Ye)&&F(De),t.unbindTexture()}P.depthBuffer&&ke(P)}function xe(P){const T=D(P)||u,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let Ae=0,ye=j.length;Ae<ye;Ae++){const Ce=j[Ae];if(O(Ce,T)){const Ye=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,De=i.get(Ce).__webglTexture;t.bindTexture(Ye,De),F(Ye),t.unbindTexture()}}}function ge(P){if(u&&P.samples>0&&we(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,Ae=P.height;let ye=n.COLOR_BUFFER_BIT;const Ce=[],Ye=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(P),Be=P.isWebGLMultipleRenderTargets===!0;if(Be)for(let at=0;at<T.length;at++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let at=0;at<T.length;at++){Ce.push(n.COLOR_ATTACHMENT0+at),P.depthBuffer&&Ce.push(Ye);const St=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(St===!1&&(P.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),Be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[at]),St===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ye])),Be){const Pe=i.get(T[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,j,Ae,0,0,j,Ae,ye,n.NEAREST),S&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Be)for(let at=0;at<T.length;at++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,De.__webglColorRenderbuffer[at]);const St=i.get(T[at]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,St,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Me(P){return Math.min(v,P.samples)}function we(P){const T=i.get(P);return u&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ie(P){const T=f.render.frame;E.get(P)!==T&&(E.set(P,T),P.update())}function Ke(P,T){const j=P.colorSpace,Ae=P.format,ye=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===hp||j!==Li&&j!==Mr&&(Ut.getTransfer(j)===Gt?u===!1?e.has("EXT_sRGB")===!0&&Ae===wr?(P.format=hp,P.minFilter=Er,P.generateMipmaps=!1):T=wS.sRGBToLinear(T):(Ae!==wr||ye!==mo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}this.allocateTextureUnit=q,this.resetTextureUnits=ie,this.setTexture2D=$,this.setTexture2DArray=C,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=ae,this.setupRenderTarget=se,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=we}function BU(n,e,t){const i=t.isWebGL2;function a(l,f=Mr){let u;const d=Ut.getTransfer(f);if(l===mo)return n.UNSIGNED_BYTE;if(l===dS)return n.UNSIGNED_SHORT_4_4_4_4;if(l===hS)return n.UNSIGNED_SHORT_5_5_5_1;if(l===uP)return n.BYTE;if(l===cP)return n.SHORT;if(l===om)return n.UNSIGNED_SHORT;if(l===fS)return n.INT;if(l===lo)return n.UNSIGNED_INT;if(l===Ci)return n.FLOAT;if(l===vl)return i?n.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===fP)return n.ALPHA;if(l===wr)return n.RGBA;if(l===dP)return n.LUMINANCE;if(l===hP)return n.LUMINANCE_ALPHA;if(l===Qo)return n.DEPTH_COMPONENT;if(l===fs)return n.DEPTH_STENCIL;if(l===hp)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===pP)return n.RED;if(l===pS)return n.RED_INTEGER;if(l===mP)return n.RG;if(l===mS)return n.RG_INTEGER;if(l===vS)return n.RGBA_INTEGER;if(l===rh||l===ih||l===oh||l===ah)if(d===Gt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===rh)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===ih)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===oh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===ah)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===rh)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===ih)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===oh)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===ah)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===x_||l===S_||l===E_||l===w_)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===x_)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===S_)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===E_)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===w_)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===gS)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===M_||l===A_)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===M_)return d===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===A_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===T_||l===b_||l===C_||l===R_||l===L_||l===P_||l===D_||l===I_||l===U_||l===N_||l===F_||l===O_||l===z_||l===B_)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===T_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===b_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===C_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===R_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===L_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===P_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===D_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===I_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===U_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===N_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===F_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===O_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===z_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===B_)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===sh||l===k_||l===H_)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===sh)return d===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===k_)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===H_)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===vP||l===V_||l===G_||l===W_)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===sh)return u.COMPRESSED_RED_RGTC1_EXT;if(l===V_)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===G_)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===W_)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Jo?i?n.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[l]!==void 0?n[l]:null}return{convert:a}}class kU extends dr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ol extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HU={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,f=null;const u=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,i),y=this._getHandJoint(p,w);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=m.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(HU)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ol;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class VU extends sa{constructor(e,t){super();const i=this;let a=null,l=1,f=null,u="local-floor",d=1,p=null,m=null,v=null,g=null,S=null,E=null;const w=t.getContextAttributes();let x=null,y=null;const R=[],M=[],D=new ft;let U=null;const O=new dr;O.layers.enable(1),O.viewport=new Nt;const F=new dr;F.layers.enable(2),F.viewport=new Nt;const ce=[O,F],b=new kU;b.layers.enable(1),b.layers.enable(2);let N=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=R[W];return Y===void 0&&(Y=new Lh,R[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=R[W];return Y===void 0&&(Y=new Lh,R[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=R[W];return Y===void 0&&(Y=new Lh,R[W]=Y),Y.getHandSpace()};function re(W){const Y=M.indexOf(W.inputSource);if(Y===-1)return;const Q=R[Y];Q!==void 0&&(Q.update(W.inputSource,W.frame,p||f),Q.dispatchEvent({type:W.type,data:W.inputSource}))}function pe(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",H);for(let W=0;W<R.length;W++){const Y=M[W];Y!==null&&(M[W]=null,R[W].disconnect(Y))}N=null,he=null,e.setRenderTarget(x),S=null,g=null,v=null,a=null,y=null,z.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){l=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:a.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Y),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),y=new ta(S.framebufferWidth,S.framebufferHeight,{format:wr,type:mo,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let Y=null,Q=null,Z=null;w.depth&&(Z=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=w.stencil?fs:Qo,Q=w.stencil?Jo:lo);const _e={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:l};v=new XRWebGLBinding(a,t),g=v.createProjectionLayer(_e),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),y=new ta(g.textureWidth,g.textureHeight,{format:wr,type:mo,depthTexture:new NS(g.textureWidth,g.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const ve=e.properties.get(y);ve.__ignoreDepthValues=g.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await a.requestReferenceSpace(u),z.setContext(a),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(W){for(let Y=0;Y<W.removed.length;Y++){const Q=W.removed[Y],Z=M.indexOf(Q);Z>=0&&(M[Z]=null,R[Z].disconnect(Q))}for(let Y=0;Y<W.added.length;Y++){const Q=W.added[Y];let Z=M.indexOf(Q);if(Z===-1){for(let ve=0;ve<R.length;ve++)if(ve>=M.length){M.push(Q),Z=ve;break}else if(M[ve]===null){M[ve]=Q,Z=ve;break}if(Z===-1)break}const _e=R[Z];_e&&_e.connect(Q)}}const ee=new k,fe=new k;function ie(W,Y,Q){ee.setFromMatrixPosition(Y.matrixWorld),fe.setFromMatrixPosition(Q.matrixWorld);const Z=ee.distanceTo(fe),_e=Y.projectionMatrix.elements,ve=Q.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Fe=_e[14]/(_e[10]+1),Oe=(_e[9]+1)/_e[5],X=(_e[9]-1)/_e[5],Ct=(_e[8]-1)/_e[0],ke=(ve[8]+1)/ve[0],ae=be*Ct,se=be*ke,xe=Z/(-Ct+ke),ge=xe*-Ct;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Me=be+xe,we=Fe+xe,Ie=ae-ge,Ke=se+(Z-ge),P=Oe*Fe/we*Me,T=X*Fe/we*Me;W.projectionMatrix.makePerspective(Ie,Ke,P,T,Me,we),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;b.near=F.near=O.near=W.near,b.far=F.far=O.far=W.far,(N!==b.near||he!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,he=b.far);const Y=W.parent,Q=b.cameras;q(b,Y);for(let Z=0;Z<Q.length;Z++)q(Q[Z],Y);Q.length===2?ie(b,O,F):b.projectionMatrix.copy(O.projectionMatrix),ne(W,b,Y)};function ne(W,Y,Q){Q===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(Q.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_l*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(W){d=W,g!==null&&(g.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)};let $=null;function C(W,Y){if(m=Y.getViewerPose(p||f),E=Y,m!==null){const Q=m.views;S!==null&&(e.setRenderTargetFramebuffer(y,S.framebuffer),e.setRenderTarget(y));let Z=!1;Q.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let _e=0;_e<Q.length;_e++){const ve=Q[_e];let be=null;if(S!==null)be=S.getViewport(ve);else{const Oe=v.getViewSubImage(g,ve);be=Oe.viewport,_e===0&&(e.setRenderTargetTextures(y,Oe.colorTexture,g.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(y))}let Fe=ce[_e];Fe===void 0&&(Fe=new dr,Fe.layers.enable(_e),Fe.viewport=new Nt,ce[_e]=Fe),Fe.matrix.fromArray(ve.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ve.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(b.matrix.copy(Fe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Z===!0&&b.cameras.push(Fe)}}for(let Q=0;Q<R.length;Q++){const Z=M[Q],_e=R[Q];Z!==null&&_e!==void 0&&_e.update(Z,Y,p||f)}$&&$(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),E=null}const z=new US;z.setAnimationLoop(C),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function GU(n,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function i(x,y){y.color.getRGB(x.fogColor.value,PS(n)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function a(x,y,R,M,D){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),v(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),g(x,y),y.isMeshPhysicalMaterial&&S(x,y,D)):y.isMeshMatcapMaterial?(l(x,y),E(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),w(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&u(x,y)):y.isPointsMaterial?d(x,y,R,M):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===rr&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===rr&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const R=e.get(y).envMap;if(R&&(x.envMap.value=R,x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*M,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function u(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,R,M){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*R,x.scale.value=M*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,R){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===rr&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function w(x,y){const R=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function WU(n,e,t,i){let a={},l={},f=[];const u=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(R,M){const D=M.program;i.uniformBlockBinding(R,D)}function p(R,M){let D=a[R.id];D===void 0&&(E(R),D=m(R),a[R.id]=D,R.addEventListener("dispose",x));const U=M.program;i.updateUBOMapping(R,U);const O=e.render.frame;l[R.id]!==O&&(g(R),l[R.id]=O)}function m(R){const M=v();R.__bindingPointIndex=M;const D=n.createBuffer(),U=R.__size,O=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,U,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,D),D}function v(){for(let R=0;R<u;R++)if(f.indexOf(R)===-1)return f.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const M=a[R.id],D=R.uniforms,U=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let O=0,F=D.length;O<F;O++){const ce=D[O];if(S(ce,O,U)===!0){const b=ce.__offset,N=Array.isArray(ce.value)?ce.value:[ce.value];let he=0;for(let re=0;re<N.length;re++){const pe=N[re],H=w(pe);typeof pe=="number"?(ce.__data[0]=pe,n.bufferSubData(n.UNIFORM_BUFFER,b+he,ce.__data)):pe.isMatrix3?(ce.__data[0]=pe.elements[0],ce.__data[1]=pe.elements[1],ce.__data[2]=pe.elements[2],ce.__data[3]=pe.elements[0],ce.__data[4]=pe.elements[3],ce.__data[5]=pe.elements[4],ce.__data[6]=pe.elements[5],ce.__data[7]=pe.elements[0],ce.__data[8]=pe.elements[6],ce.__data[9]=pe.elements[7],ce.__data[10]=pe.elements[8],ce.__data[11]=pe.elements[0]):(pe.toArray(ce.__data,he),he+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,ce.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(R,M,D){const U=R.value;if(D[M]===void 0){if(typeof U=="number")D[M]=U;else{const O=Array.isArray(U)?U:[U],F=[];for(let ce=0;ce<O.length;ce++)F.push(O[ce].clone());D[M]=F}return!0}else if(typeof U=="number"){if(D[M]!==U)return D[M]=U,!0}else{const O=Array.isArray(D[M])?D[M]:[D[M]],F=Array.isArray(U)?U:[U];for(let ce=0;ce<O.length;ce++){const b=O[ce];if(b.equals(F[ce])===!1)return b.copy(F[ce]),!0}}return!1}function E(R){const M=R.uniforms;let D=0;const U=16;let O=0;for(let F=0,ce=M.length;F<ce;F++){const b=M[F],N={boundary:0,storage:0},he=Array.isArray(b.value)?b.value:[b.value];for(let re=0,pe=he.length;re<pe;re++){const H=he[re],ee=w(H);N.boundary+=ee.boundary,N.storage+=ee.storage}if(b.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=D,F>0){O=D%U;const re=U-O;O!==0&&re-N.boundary<0&&(D+=U-O,b.__offset=D)}D+=N.storage}return O=D%U,O>0&&(D+=U-O),R.__size=D,R.__cache={},this}function w(R){const M={boundary:0,storage:0};return typeof R=="number"?(M.boundary=4,M.storage=4):R.isVector2?(M.boundary=8,M.storage=8):R.isVector3||R.isColor?(M.boundary=16,M.storage=12):R.isVector4?(M.boundary=16,M.storage=16):R.isMatrix3?(M.boundary=48,M.storage=48):R.isMatrix4?(M.boundary=64,M.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),M}function x(R){const M=R.target;M.removeEventListener("dispose",x);const D=f.indexOf(M.__bindingPointIndex);f.splice(D,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete l[M.id]}function y(){for(const R in a)n.deleteBuffer(a[R]);f=[],a={},l={}}return{bind:d,update:p,dispose:y}}class vp{constructor(e={}){const{canvas:t=HP(),context:i=null,depth:a=!0,stencil:l=!0,alpha:f=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=f;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,x=null;const y=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this._useLegacyLights=!1,this.toneMapping=po,this.toneMappingExposure=1;const M=this;let D=!1,U=0,O=0,F=null,ce=-1,b=null;const N=new Nt,he=new Nt;let re=null;const pe=new et(0);let H=0,ee=t.width,fe=t.height,ie=1,q=null,ne=null;const $=new Nt(0,0,ee,fe),C=new Nt(0,0,ee,fe);let z=!1;const W=new rf;let Y=!1,Q=!1,Z=null;const _e=new kt,ve=new ft,be=new k,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return F===null?ie:1}let X=i;function Ct(L,J){for(let ue=0;ue<L.length;ue++){const de=L[ue],le=t.getContext(de,J);if(le!==null)return le}return null}try{const L={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ef}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",ze,!1),X===null){const J=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&J.shift(),X=Ct(J,L),X===null)throw Ct(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ke,ae,se,xe,ge,Me,we,Ie,Ke,P,T,j,Ae,ye,Ce,Ye,De,Be,at,St,Pe,Rt,ut,ot;function Qe(){ke=new tI(X),ae=new Y3(X,ke,e),ke.init(ae),Rt=new BU(X,ke,ae),se=new OU(X,ke,ae),xe=new iI(X),ge=new wU,Me=new zU(X,ke,se,ge,ae,Rt,xe),we=new K3(M),Ie=new eI(M),Ke=new f2(X,ae),ut=new X3(X,ke,Ke,ae),P=new nI(X,Ke,xe,ut),T=new lI(X,P,Ke,xe),at=new sI(X,ae,Me),Ye=new q3(ge),j=new EU(M,we,Ie,ke,ae,ut,Ye),Ae=new GU(M,ge),ye=new AU,Ce=new PU(ke,ae),Be=new $3(M,we,Ie,se,T,g,d),De=new FU(M,T,ae),ot=new WU(X,xe,ae,se),St=new j3(X,ke,xe,ae),Pe=new rI(X,ke,xe,ae),xe.programs=j.programs,M.capabilities=ae,M.extensions=ke,M.properties=ge,M.renderLists=ye,M.shadowMap=De,M.state=se,M.info=xe}Qe();const We=new VU(M,X);this.xr=We,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=ke.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ke.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(L){L!==void 0&&(ie=L,this.setSize(ee,fe,!1))},this.getSize=function(L){return L.set(ee,fe)},this.setSize=function(L,J,ue=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=L,fe=J,t.width=Math.floor(L*ie),t.height=Math.floor(J*ie),ue===!0&&(t.style.width=L+"px",t.style.height=J+"px"),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(ee*ie,fe*ie).floor()},this.setDrawingBufferSize=function(L,J,ue){ee=L,fe=J,ie=ue,t.width=Math.floor(L*ue),t.height=Math.floor(J*ue),this.setViewport(0,0,L,J)},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy($)},this.setViewport=function(L,J,ue,de){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,J,ue,de),se.viewport(N.copy($).multiplyScalar(ie).floor())},this.getScissor=function(L){return L.copy(C)},this.setScissor=function(L,J,ue,de){L.isVector4?C.set(L.x,L.y,L.z,L.w):C.set(L,J,ue,de),se.scissor(he.copy(C).multiplyScalar(ie).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(L){se.setScissorTest(z=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){ne=L},this.getClearColor=function(L){return L.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(L=!0,J=!0,ue=!0){let de=0;if(L){let le=!1;if(F!==null){const Ve=F.texture.format;le=Ve===vS||Ve===mS||Ve===pS}if(le){const Ve=F.texture.type,Je=Ve===mo||Ve===lo||Ve===om||Ve===Jo||Ve===dS||Ve===hS,it=Be.getClearColor(),$e=Be.getClearAlpha(),pt=it.r,ct=it.g,dt=it.b;Je?(S[0]=pt,S[1]=ct,S[2]=dt,S[3]=$e,X.clearBufferuiv(X.COLOR,0,S)):(E[0]=pt,E[1]=ct,E[2]=dt,E[3]=$e,X.clearBufferiv(X.COLOR,0,E))}else de|=X.COLOR_BUFFER_BIT}J&&(de|=X.DEPTH_BUFFER_BIT),ue&&(de|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),ye.dispose(),Ce.dispose(),ge.dispose(),we.dispose(),Ie.dispose(),T.dispose(),ut.dispose(),ot.dispose(),j.dispose(),We.dispose(),We.removeEventListener("sessionstart",mn),We.removeEventListener("sessionend",At),Z&&(Z.dispose(),Z=null),un.stop()};function mt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const L=xe.autoReset,J=De.enabled,ue=De.autoUpdate,de=De.needsUpdate,le=De.type;Qe(),xe.autoReset=L,De.enabled=J,De.autoUpdate=ue,De.needsUpdate=de,De.type=le}function ze(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Re(L){const J=L.target;J.removeEventListener("dispose",Re),me(J)}function me(L){Ue(L),ge.remove(L)}function Ue(L){const J=ge.get(L).programs;J!==void 0&&(J.forEach(function(ue){j.releaseProgram(ue)}),L.isShaderMaterial&&j.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,ue,de,le,Ve){J===null&&(J=Fe);const Je=le.isMesh&&le.matrixWorld.determinant()<0,it=sf(L,J,ue,de,le);se.setMaterial(de,Je);let $e=ue.index,pt=1;if(de.wireframe===!0){if($e=P.getWireframeAttribute(ue),$e===void 0)return;pt=2}const ct=ue.drawRange,dt=ue.attributes.position;let zt=ct.start*pt,kn=(ct.start+ct.count)*pt;Ve!==null&&(zt=Math.max(zt,Ve.start*pt),kn=Math.min(kn,(Ve.start+Ve.count)*pt)),$e!==null?(zt=Math.max(zt,0),kn=Math.min(kn,$e.count)):dt!=null&&(zt=Math.max(zt,0),kn=Math.min(kn,dt.count));const tn=kn-zt;if(tn<0||tn===1/0)return;ut.setup(le,de,it,ue,$e);let jn,Et=St;if($e!==null&&(jn=Ke.get($e),Et=Pe,Et.setIndex(jn)),le.isMesh)de.wireframe===!0?(se.setLineWidth(de.wireframeLinewidth*Oe()),Et.setMode(X.LINES)):Et.setMode(X.TRIANGLES);else if(le.isLine){let vt=de.linewidth;vt===void 0&&(vt=1),se.setLineWidth(vt*Oe()),le.isLineSegments?Et.setMode(X.LINES):le.isLineLoop?Et.setMode(X.LINE_LOOP):Et.setMode(X.LINE_STRIP)}else le.isPoints?Et.setMode(X.POINTS):le.isSprite&&Et.setMode(X.TRIANGLES);if(le.isBatchedMesh)Et.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else if(le.isInstancedMesh)Et.renderInstances(zt,tn,le.count);else if(ue.isInstancedBufferGeometry){const vt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Hn=Math.min(ue.instanceCount,vt);Et.renderInstances(zt,tn,Hn)}else Et.render(zt,tn)};function rt(L,J,ue){L.transparent===!0&&L.side===bi&&L.forceSinglePass===!1?(L.side=rr,L.needsUpdate=!0,Di(L,J,ue),L.side=yo,L.needsUpdate=!0,Di(L,J,ue),L.side=bi):Di(L,J,ue)}this.compile=function(L,J,ue=null){ue===null&&(ue=L),x=Ce.get(ue),x.init(),R.push(x),ue.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(x.pushLight(le),le.castShadow&&x.pushShadow(le))}),L!==ue&&L.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(x.pushLight(le),le.castShadow&&x.pushShadow(le))}),x.setupLights(M._useLegacyLights);const de=new Set;return L.traverse(function(le){const Ve=le.material;if(Ve)if(Array.isArray(Ve))for(let Je=0;Je<Ve.length;Je++){const it=Ve[Je];rt(it,ue,le),de.add(it)}else rt(Ve,ue,le),de.add(Ve)}),R.pop(),x=null,de},this.compileAsync=function(L,J,ue=null){const de=this.compile(L,J,ue);return new Promise(le=>{function Ve(){if(de.forEach(function(Je){ge.get(Je).currentProgram.isReady()&&de.delete(Je)}),de.size===0){le(L);return}setTimeout(Ve,10)}ke.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let xt=null;function Zt(L){xt&&xt(L)}function mn(){un.stop()}function At(){un.start()}const un=new US;un.setAnimationLoop(Zt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(L){xt=L,We.setAnimationLoop(L),L===null?un.stop():un.start()},We.addEventListener("sessionstart",mn),We.addEventListener("sessionend",At),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(J),J=We.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,J,F),x=Ce.get(L,R.length),x.init(),R.push(x),_e.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W.setFromProjectionMatrix(_e),Q=this.localClippingEnabled,Y=Ye.init(this.clippingPlanes,Q),w=ye.get(L,y.length),w.init(),y.push(w),Rn(L,J,0,M.sortObjects),w.finish(),M.sortObjects===!0&&w.sort(q,ne),this.info.render.frame++,Y===!0&&Ye.beginShadows();const ue=x.state.shadowsArray;if(De.render(ue,L,J),Y===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(w,L),x.setupLights(M._useLegacyLights),J.isArrayCamera){const de=J.cameras;for(let le=0,Ve=de.length;le<Ve;le++){const Je=de[le];Ul(w,L,Je,Je.viewport)}}else Ul(w,L,J);F!==null&&(Me.updateMultisampleRenderTarget(F),Me.updateRenderTargetMipmap(F)),L.isScene===!0&&L.onAfterRender(M,L,J),ut.resetDefaultState(),ce=-1,b=null,R.pop(),R.length>0?x=R[R.length-1]:x=null,y.pop(),y.length>0?w=y[y.length-1]:w=null};function Rn(L,J,ue,de){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)ue=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||W.intersectsSprite(L)){de&&be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(_e);const Je=T.update(L),it=L.material;it.visible&&w.push(L,Je,it,ue,be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||W.intersectsObject(L))){const Je=T.update(L),it=L.material;if(de&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),be.copy(L.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),be.copy(Je.boundingSphere.center)),be.applyMatrix4(L.matrixWorld).applyMatrix4(_e)),Array.isArray(it)){const $e=Je.groups;for(let pt=0,ct=$e.length;pt<ct;pt++){const dt=$e[pt],zt=it[dt.materialIndex];zt&&zt.visible&&w.push(L,Je,zt,ue,be.z,dt)}}else it.visible&&w.push(L,Je,it,ue,be.z,null)}}const Ve=L.children;for(let Je=0,it=Ve.length;Je<it;Je++)Rn(Ve[Je],J,ue,de)}function Ul(L,J,ue,de){const le=L.opaque,Ve=L.transmissive,Je=L.transparent;x.setupLightsView(ue),Y===!0&&Ye.setGlobalState(M.clippingPlanes,ue),Ve.length>0&&Mo(le,Ve,J,ue),de&&se.viewport(N.copy(de)),le.length>0&&ci(le,J,ue),Ve.length>0&&ci(Ve,J,ue),Je.length>0&&ci(Je,J,ue),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Mo(L,J,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const Ve=ae.isWebGL2;Z===null&&(Z=new ta(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")?vl:mo,minFilter:ml,samples:Ve?4:0})),M.getDrawingBufferSize(ve),Ve?Z.setSize(ve.x,ve.y):Z.setSize(Pc(ve.x),Pc(ve.y));const Je=M.getRenderTarget();M.setRenderTarget(Z),M.getClearColor(pe),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const it=M.toneMapping;M.toneMapping=po,ci(L,ue,de),Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z);let $e=!1;for(let pt=0,ct=J.length;pt<ct;pt++){const dt=J[pt],zt=dt.object,kn=dt.geometry,tn=dt.material,jn=dt.group;if(tn.side===bi&&zt.layers.test(de.layers)){const Et=tn.side;tn.side=rr,tn.needsUpdate=!0,Ao(zt,ue,de,kn,tn,jn),tn.side=Et,tn.needsUpdate=!0,$e=!0}}$e===!0&&(Me.updateMultisampleRenderTarget(Z),Me.updateRenderTargetMipmap(Z)),M.setRenderTarget(Je),M.setClearColor(pe,H),M.toneMapping=it}function ci(L,J,ue){const de=J.isScene===!0?J.overrideMaterial:null;for(let le=0,Ve=L.length;le<Ve;le++){const Je=L[le],it=Je.object,$e=Je.geometry,pt=de===null?Je.material:de,ct=Je.group;it.layers.test(ue.layers)&&Ao(it,J,ue,$e,pt,ct)}}function Ao(L,J,ue,de,le,Ve){L.onBeforeRender(M,J,ue,de,le,Ve),L.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),le.onBeforeRender(M,J,ue,de,L,Ve),le.transparent===!0&&le.side===bi&&le.forceSinglePass===!1?(le.side=rr,le.needsUpdate=!0,M.renderBufferDirect(ue,J,de,le,L,Ve),le.side=yo,le.needsUpdate=!0,M.renderBufferDirect(ue,J,de,le,L,Ve),le.side=bi):M.renderBufferDirect(ue,J,de,le,L,Ve),L.onAfterRender(M,J,ue,de,le,Ve)}function Di(L,J,ue){J.isScene!==!0&&(J=Fe);const de=ge.get(L),le=x.state.lights,Ve=x.state.shadowsArray,Je=le.state.version,it=j.getParameters(L,le.state,Ve,J,ue),$e=j.getProgramCacheKey(it);let pt=de.programs;de.environment=L.isMeshStandardMaterial?J.environment:null,de.fog=J.fog,de.envMap=(L.isMeshStandardMaterial?Ie:we).get(L.envMap||de.environment),pt===void 0&&(L.addEventListener("dispose",Re),pt=new Map,de.programs=pt);let ct=pt.get($e);if(ct!==void 0){if(de.currentProgram===ct&&de.lightsStateVersion===Je)return Fl(L,it),ct}else it.uniforms=j.getUniforms(L),L.onBuild(ue,it,M),L.onBeforeCompile(it,M),ct=j.acquireProgram(it,$e),pt.set($e,ct),de.uniforms=it.uniforms;const dt=de.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(dt.clippingPlanes=Ye.uniform),Fl(L,it),de.needsLights=Ol(L),de.lightsStateVersion=Je,de.needsLights&&(dt.ambientLightColor.value=le.state.ambient,dt.lightProbe.value=le.state.probe,dt.directionalLights.value=le.state.directional,dt.directionalLightShadows.value=le.state.directionalShadow,dt.spotLights.value=le.state.spot,dt.spotLightShadows.value=le.state.spotShadow,dt.rectAreaLights.value=le.state.rectArea,dt.ltc_1.value=le.state.rectAreaLTC1,dt.ltc_2.value=le.state.rectAreaLTC2,dt.pointLights.value=le.state.point,dt.pointLightShadows.value=le.state.pointShadow,dt.hemisphereLights.value=le.state.hemi,dt.directionalShadowMap.value=le.state.directionalShadowMap,dt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,dt.spotShadowMap.value=le.state.spotShadowMap,dt.spotLightMatrix.value=le.state.spotLightMatrix,dt.spotLightMap.value=le.state.spotLightMap,dt.pointShadowMap.value=le.state.pointShadowMap,dt.pointShadowMatrix.value=le.state.pointShadowMatrix),de.currentProgram=ct,de.uniformsList=null,ct}function Nl(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=wc.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function Fl(L,J){const ue=ge.get(L);ue.outputColorSpace=J.outputColorSpace,ue.batching=J.batching,ue.instancing=J.instancing,ue.instancingColor=J.instancingColor,ue.skinning=J.skinning,ue.morphTargets=J.morphTargets,ue.morphNormals=J.morphNormals,ue.morphColors=J.morphColors,ue.morphTargetsCount=J.morphTargetsCount,ue.numClippingPlanes=J.numClippingPlanes,ue.numIntersection=J.numClipIntersection,ue.vertexAlphas=J.vertexAlphas,ue.vertexTangents=J.vertexTangents,ue.toneMapping=J.toneMapping}function sf(L,J,ue,de,le){J.isScene!==!0&&(J=Fe),Me.resetTextureUnits();const Ve=J.fog,Je=de.isMeshStandardMaterial?J.environment:null,it=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Li,$e=(de.isMeshStandardMaterial?Ie:we).get(de.envMap||Je),pt=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ct=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),dt=!!ue.morphAttributes.position,zt=!!ue.morphAttributes.normal,kn=!!ue.morphAttributes.color;let tn=po;de.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(tn=M.toneMapping);const jn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Et=jn!==void 0?jn.length:0,vt=ge.get(de),Hn=x.state.lights;if(Y===!0&&(Q===!0||L!==b)){const Yn=L===b&&de.id===ce;Ye.setState(de,L,Yn)}let $t=!1;de.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Hn.state.version||vt.outputColorSpace!==it||le.isBatchedMesh&&vt.batching===!1||!le.isBatchedMesh&&vt.batching===!0||le.isInstancedMesh&&vt.instancing===!1||!le.isInstancedMesh&&vt.instancing===!0||le.isSkinnedMesh&&vt.skinning===!1||!le.isSkinnedMesh&&vt.skinning===!0||le.isInstancedMesh&&vt.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&vt.instancingColor===!1&&le.instanceColor!==null||vt.envMap!==$e||de.fog===!0&&vt.fog!==Ve||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Ye.numPlanes||vt.numIntersection!==Ye.numIntersection)||vt.vertexAlphas!==pt||vt.vertexTangents!==ct||vt.morphTargets!==dt||vt.morphNormals!==zt||vt.morphColors!==kn||vt.toneMapping!==tn||ae.isWebGL2===!0&&vt.morphTargetsCount!==Et)&&($t=!0):($t=!0,vt.__version=de.version);let di=vt.currentProgram;$t===!0&&(di=Di(de,J,le));let zl=!1,Yr=!1,Ii=!1;const Jt=di.getUniforms(),pr=vt.uniforms;if(se.useProgram(di.program)&&(zl=!0,Yr=!0,Ii=!0),de.id!==ce&&(ce=de.id,Yr=!0),zl||b!==L){Jt.setValue(X,"projectionMatrix",L.projectionMatrix),Jt.setValue(X,"viewMatrix",L.matrixWorldInverse);const Yn=Jt.map.cameraPosition;Yn!==void 0&&Yn.setValue(X,be.setFromMatrixPosition(L.matrixWorld)),ae.logarithmicDepthBuffer&&Jt.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Jt.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,Yr=!0,Ii=!0)}if(le.isSkinnedMesh){Jt.setOptional(X,le,"bindMatrix"),Jt.setOptional(X,le,"bindMatrixInverse");const Yn=le.skeleton;Yn&&(ae.floatVertexTextures?(Yn.boneTexture===null&&Yn.computeBoneTexture(),Jt.setValue(X,"boneTexture",Yn.boneTexture,Me)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}le.isBatchedMesh&&(Jt.setOptional(X,le,"batchingTexture"),Jt.setValue(X,"batchingTexture",le._matricesTexture,Me));const _s=ue.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0&&ae.isWebGL2===!0)&&at.update(le,ue,di),(Yr||vt.receiveShadow!==le.receiveShadow)&&(vt.receiveShadow=le.receiveShadow,Jt.setValue(X,"receiveShadow",le.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(pr.envMap.value=$e,pr.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Yr&&(Jt.setValue(X,"toneMappingExposure",M.toneMappingExposure),vt.needsLights&&fi(pr,Ii),Ve&&de.fog===!0&&Ae.refreshFogUniforms(pr,Ve),Ae.refreshMaterialUniforms(pr,de,ie,fe,Z),wc.upload(X,Nl(vt),pr,Me)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(wc.upload(X,Nl(vt),pr,Me),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Jt.setValue(X,"center",le.center),Jt.setValue(X,"modelViewMatrix",le.modelViewMatrix),Jt.setValue(X,"normalMatrix",le.normalMatrix),Jt.setValue(X,"modelMatrix",le.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const Yn=de.uniformsGroups;for(let To=0,Bl=Yn.length;To<Bl;To++)if(ae.isWebGL2){const la=Yn[To];ot.update(la,di),ot.bind(la,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function fi(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function Ol(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(L,J,ue){ge.get(L.texture).__webglTexture=J,ge.get(L.depthTexture).__webglTexture=ue;const de=ge.get(L);de.__hasExternalTextures=!0,de.__hasExternalTextures&&(de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,J){const ue=ge.get(L);ue.__webglFramebuffer=J,ue.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(L,J=0,ue=0){F=L,U=J,O=ue;let de=!0,le=null,Ve=!1,Je=!1;if(L){const $e=ge.get(L);$e.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(X.FRAMEBUFFER,null),de=!1):$e.__webglFramebuffer===void 0?Me.setupRenderTarget(L):$e.__hasExternalTextures&&Me.rebindTextures(L,ge.get(L.texture).__webglTexture,ge.get(L.depthTexture).__webglTexture);const pt=L.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Je=!0);const ct=ge.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ct[J])?le=ct[J][ue]:le=ct[J],Ve=!0):ae.isWebGL2&&L.samples>0&&Me.useMultisampledRTT(L)===!1?le=ge.get(L).__webglMultisampledFramebuffer:Array.isArray(ct)?le=ct[ue]:le=ct,N.copy(L.viewport),he.copy(L.scissor),re=L.scissorTest}else N.copy($).multiplyScalar(ie).floor(),he.copy(C).multiplyScalar(ie).floor(),re=z;if(se.bindFramebuffer(X.FRAMEBUFFER,le)&&ae.drawBuffers&&de&&se.drawBuffers(L,le),se.viewport(N),se.scissor(he),se.setScissorTest(re),Ve){const $e=ge.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,$e.__webglTexture,ue)}else if(Je){const $e=ge.get(L.texture),pt=J||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,$e.__webglTexture,ue||0,pt)}ce=-1},this.readRenderTargetPixels=function(L,J,ue,de,le,Ve,Je){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Je!==void 0&&(it=it[Je]),it){se.bindFramebuffer(X.FRAMEBUFFER,it);try{const $e=L.texture,pt=$e.format,ct=$e.type;if(pt!==wr&&Rt.convert(pt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const dt=ct===vl&&(ke.has("EXT_color_buffer_half_float")||ae.isWebGL2&&ke.has("EXT_color_buffer_float"));if(ct!==mo&&Rt.convert(ct)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ct===Ci&&(ae.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-de&&ue>=0&&ue<=L.height-le&&X.readPixels(J,ue,de,le,Rt.convert(pt),Rt.convert(ct),Ve)}finally{const $e=F!==null?ge.get(F).__webglFramebuffer:null;se.bindFramebuffer(X.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(L,J,ue=0){const de=Math.pow(2,-ue),le=Math.floor(J.image.width*de),Ve=Math.floor(J.image.height*de);Me.setTexture2D(J,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,L.x,L.y,le,Ve),se.unbindTexture()},this.copyTextureToTexture=function(L,J,ue,de=0){const le=J.image.width,Ve=J.image.height,Je=Rt.convert(ue.format),it=Rt.convert(ue.type);Me.setTexture2D(ue,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ue.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ue.unpackAlignment),J.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,de,L.x,L.y,le,Ve,Je,it,J.image.data):J.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,de,L.x,L.y,J.mipmaps[0].width,J.mipmaps[0].height,Je,J.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,de,L.x,L.y,Je,it,J.image),de===0&&ue.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(L,J,ue,de,le=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=L.max.x-L.min.x+1,Je=L.max.y-L.min.y+1,it=L.max.z-L.min.z+1,$e=Rt.convert(de.format),pt=Rt.convert(de.type);let ct;if(de.isData3DTexture)Me.setTexture3D(de,0),ct=X.TEXTURE_3D;else if(de.isDataArrayTexture)Me.setTexture2DArray(de,0),ct=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,de.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,de.unpackAlignment);const dt=X.getParameter(X.UNPACK_ROW_LENGTH),zt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),kn=X.getParameter(X.UNPACK_SKIP_PIXELS),tn=X.getParameter(X.UNPACK_SKIP_ROWS),jn=X.getParameter(X.UNPACK_SKIP_IMAGES),Et=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Et.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,L.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,L.min.z),ue.isDataTexture||ue.isData3DTexture?X.texSubImage3D(ct,le,J.x,J.y,J.z,Ve,Je,it,$e,pt,Et.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(ct,le,J.x,J.y,J.z,Ve,Je,it,$e,Et.data)):X.texSubImage3D(ct,le,J.x,J.y,J.z,Ve,Je,it,$e,pt,Et),X.pixelStorei(X.UNPACK_ROW_LENGTH,dt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,zt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,kn),X.pixelStorei(X.UNPACK_SKIP_ROWS,tn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,jn),le===0&&de.generateMipmaps&&X.generateMipmap(ct),se.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Me.setTextureCube(L,0):L.isData3DTexture?Me.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Me.setTexture2DArray(L,0):Me.setTexture2D(L,0),se.unbindTexture()},this.resetState=function(){U=0,O=0,F=null,se.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===am?"display-p3":"srgb",t.unpackColorSpace=Ut.workingColorSpace===nf?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tn?ea:_S}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ea?Tn:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $U extends vp{}$U.prototype.isWebGL1Renderer=!0;class dm{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=i}clone(){return new dm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class XU extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jU{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wn=new k;class uo{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array),l=It(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new hr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class YU extends ir{constructor(e=null,t=1,i=1,a,l,f,u,d,p=An,m=An,v,g){super(null,f,u,d,p,m,a,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function qU(n,e){return n.z-e.z}function KU(n,e){return e.z-n.z}class ZU{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const i=this.pool,a=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});const l=i[this.index];a.push(l),this.index++,l.start=e.start,l.count=e.count,l.z=t}reset(){this.list.length=0,this.index=0}}const qa="batchId",io=new kt,D0=new kt,JU=new kt,I0=new kt,Ph=new rf,hc=new Rr,Xo=new si,nl=new k,Dh=new ZU,Fn=new Xr,pc=[];function QU(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const a=n.count;for(let l=0;l<a;l++)for(let f=0;f<i;f++)e.setComponent(l+t,f,n.getComponent(l,f))}else e.array.set(n.array,t*i);e.needsUpdate=!0}class eN extends Xr{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,i=t*2,a){super(new Bn,a),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new YU(t,e,e,wr,Ci);this._matricesTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,a=this._maxGeometryCount,l=this._maxIndexCount;if(this._geometryInitialized===!1){for(const u in e.attributes){const d=e.getAttribute(u),{array:p,itemSize:m,normalized:v}=d,g=new p.constructor(i*m),S=new d.constructor(g,m,v);S.setUsage(d.usage),t.setAttribute(u,S)}if(e.getIndex()!==null){const u=i>65536?new Uint32Array(l):new Uint16Array(l);t.setIndex(new hr(u,1))}const f=a>65536?new Uint32Array(i):new Uint16Array(i);t.setAttribute(qa,new hr(f,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(qa))throw new Error(`BatchedMesh: Geometry cannot use attribute "${qa}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(i===qa)continue;if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const a=e.getAttribute(i),l=t.getAttribute(i);if(a.itemSize!==l.itemSize||a.normalized!==l.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this._geometryCount,t=this.boundingBox,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,io),this.getBoundingBoxAt(a,hc).applyMatrix4(io),t.union(hc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this._geometryCount,t=this.boundingSphere,i=this._active;t.makeEmpty();for(let a=0;a<e;a++)i[a]!==!1&&(this.getMatrixAt(a,io),this.getBoundingSphereAt(a,Xo).applyMatrix4(io),t.union(Xo))}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const a={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let l=null;const f=this._reservedRanges,u=this._drawRanges,d=this._bounds;this._geometryCount!==0&&(l=f[f.length-1]),t===-1?a.vertexCount=e.getAttribute("position").count:a.vertexCount=t,l===null?a.vertexStart=0:a.vertexStart=l.vertexStart+l.vertexCount;const p=e.getIndex(),m=p!==null;if(m&&(i===-1?a.indexCount=p.count:a.indexCount=i,l===null?a.indexStart=0:a.indexStart=l.indexStart+l.indexCount),a.indexStart!==-1&&a.indexStart+a.indexCount>this._maxIndexCount||a.vertexStart+a.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const v=this._visibility,g=this._active,S=this._matricesTexture,E=this._matricesTexture.image.data;v.push(!0),g.push(!0);const w=this._geometryCount;this._geometryCount++,JU.toArray(E,w*16),S.needsUpdate=!0,f.push(a),u.push({start:m?a.indexStart:a.vertexStart,count:-1}),d.push({boxInitialized:!1,box:new Rr,sphereInitialized:!1,sphere:new si});const x=this.geometry.getAttribute(qa);for(let y=0;y<a.vertexCount;y++)x.setX(a.vertexStart+y,w);return x.needsUpdate=!0,this.setGeometryAt(w,e),w}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,a=i.getIndex()!==null,l=i.getIndex(),f=t.getIndex(),u=this._reservedRanges[e];if(a&&f.count>u.indexCount||t.attributes.position.count>u.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const d=u.vertexStart,p=u.vertexCount;for(const S in i.attributes){if(S===qa)continue;const E=t.getAttribute(S),w=i.getAttribute(S);QU(E,w,d);const x=E.itemSize;for(let y=E.count,R=p;y<R;y++){const M=d+y;for(let D=0;D<x;D++)w.setComponent(M,D,0)}w.needsUpdate=!0}if(a){const S=u.indexStart;for(let E=0;E<f.count;E++)l.setX(S+E,d+f.getX(E));for(let E=f.count,w=u.indexCount;E<w;E++)l.setX(S+E,d);l.needsUpdate=!0}const m=this._bounds[e];t.boundingBox!==null?(m.box.copy(t.boundingBox),m.boxInitialized=!0):m.boxInitialized=!1,t.boundingSphere!==null?(m.sphere.copy(t.boundingSphere),m.sphereInitialized=!0):m.sphereInitialized=!1;const v=this._drawRanges[e],g=t.getAttribute("position");return v.count=a?f.count:g.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],l=a.box,f=this.geometry;if(a.boxInitialized===!1){l.makeEmpty();const u=f.index,d=f.attributes.position,p=this._drawRanges[e];for(let m=p.start,v=p.start+p.count;m<v;m++){let g=m;u&&(g=u.getX(g)),l.expandByPoint(nl.fromBufferAttribute(d,g))}a.boxInitialized=!0}return t.copy(l),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const a=this._bounds[e],l=a.sphere,f=this.geometry;if(a.sphereInitialized===!1){l.makeEmpty(),this.getBoundingBoxAt(e,hc),hc.getCenter(l.center);const u=f.index,d=f.attributes.position,p=this._drawRanges[e];let m=0;for(let v=p.start,g=p.start+p.count;v<g;v++){let S=v;u&&(S=u.getX(S)),nl.fromBufferAttribute(d,S),m=Math.max(m,l.center.distanceToSquared(nl))}l.radius=Math.sqrt(m),a.sphereInitialized=!0}return t.copy(l),t}setMatrixAt(e,t){const i=this._active,a=this._matricesTexture,l=this._matricesTexture.image.data,f=this._geometryCount;return e>=f||i[e]===!1?this:(t.toArray(l,e*16),a.needsUpdate=!0,this)}getMatrixAt(e,t){const i=this._active,a=this._matricesTexture.image.data,l=this._geometryCount;return e>=l||i[e]===!1?null:t.fromArray(a,e*16)}setVisibleAt(e,t){const i=this._visibility,a=this._active,l=this._geometryCount;return e>=l||a[e]===!1||i[e]===t?this:(i[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,i=this._active,a=this._geometryCount;return e>=a||i[e]===!1?!1:t[e]}raycast(e,t){const i=this._visibility,a=this._active,l=this._drawRanges,f=this._geometryCount,u=this.matrixWorld,d=this.geometry;Fn.material=this.material,Fn.geometry.index=d.index,Fn.geometry.attributes=d.attributes,Fn.geometry.boundingBox===null&&(Fn.geometry.boundingBox=new Rr),Fn.geometry.boundingSphere===null&&(Fn.geometry.boundingSphere=new si);for(let p=0;p<f;p++){if(!i[p]||!a[p])continue;const m=l[p];Fn.geometry.setDrawRange(m.start,m.count),this.getMatrixAt(p,Fn.matrixWorld).premultiply(u),this.getBoundingBoxAt(p,Fn.geometry.boundingBox),this.getBoundingSphereAt(p,Fn.geometry.boundingSphere),Fn.raycast(e,pc);for(let v=0,g=pc.length;v<g;v++){const S=pc[v];S.object=this,S.batchId=p,t.push(S)}pc.length=0}Fn.material=null,Fn.geometry.index=null,Fn.geometry.attributes={},Fn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,i,a,l){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const f=a.getIndex(),u=f===null?1:f.array.BYTES_PER_ELEMENT,d=this._visibility,p=this._multiDrawStarts,m=this._multiDrawCounts,v=this._drawRanges,g=this.perObjectFrustumCulled;g&&(I0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Ph.setFromProjectionMatrix(I0,e.isWebGPURenderer?gl:ii));let S=0;if(this.sortObjects){D0.copy(this.matrixWorld).invert(),nl.setFromMatrixPosition(i.matrixWorld).applyMatrix4(D0);for(let x=0,y=d.length;x<y;x++)if(d[x]){this.getMatrixAt(x,io),this.getBoundingSphereAt(x,Xo).applyMatrix4(io);let R=!1;if(g&&(R=!Ph.intersectsSphere(Xo)),!R){const M=nl.distanceTo(Xo.center);Dh.push(v[x],M)}}const E=Dh.list,w=this.customSort;w===null?E.sort(l.transparent?KU:qU):w.call(this,E,i);for(let x=0,y=E.length;x<y;x++){const R=E[x];p[S]=R.start*u,m[S]=R.count,S++}Dh.reset()}else for(let E=0,w=d.length;E<w;E++)if(d[E]){let x=!1;if(g&&(this.getMatrixAt(E,io),this.getBoundingSphereAt(E,Xo).applyMatrix4(io),x=!Ph.intersectsSphere(Xo)),!x){const y=v[E];p[S]=y.start*u,m[S]=y.count,S++}}this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,i,a,l,f){this.onBeforeRender(e,null,a,l,f)}}class Il extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const U0=new k,N0=new k,F0=new kt,Ih=new lm,mc=new si;class tN extends Xn{constructor(e=new Bn,t=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,l=t.count;a<l;a++)U0.fromBufferAttribute(t,a-1),N0.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=U0.distanceTo(N0);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(a),mc.radius+=l,e.ray.intersectsSphere(mc)===!1)return;F0.copy(a).invert(),Ih.copy(e.ray).applyMatrix4(F0);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=new k,m=new k,v=new k,g=new k,S=this.isLineSegments?2:1,E=i.index,x=i.attributes.position;if(E!==null){const y=Math.max(0,f.start),R=Math.min(E.count,f.start+f.count);for(let M=y,D=R-1;M<D;M+=S){const U=E.getX(M),O=E.getX(M+1);if(p.fromBufferAttribute(x,U),m.fromBufferAttribute(x,O),Ih.distanceSqToSegment(p,m,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const ce=e.ray.origin.distanceTo(g);ce<e.near||ce>e.far||t.push({distance:ce,point:v.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,f.start),R=Math.min(x.count,f.start+f.count);for(let M=y,D=R-1;M<D;M+=S){if(p.fromBufferAttribute(x,M),m.fromBufferAttribute(x,M+1),Ih.distanceSqToSegment(p,m,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(g);O<e.near||O>e.far||t.push({distance:O,point:v.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}const O0=new k,z0=new k;class af extends tN{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,l=t.count;a<l;a+=2)O0.fromBufferAttribute(t,a),z0.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+O0.distanceTo(z0);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nN extends Bn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,a=new k,l=new k;if(e.index!==null){const f=e.attributes.position,u=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:u.count,materialIndex:0}]);for(let p=0,m=d.length;p<m;++p){const v=d[p],g=v.start,S=v.count;for(let E=g,w=g+S;E<w;E+=3)for(let x=0;x<3;x++){const y=u.getX(E+x),R=u.getX(E+(x+1)%3);a.fromBufferAttribute(f,y),l.fromBufferAttribute(f,R),B0(a,l,i)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}}else{const f=e.attributes.position;for(let u=0,d=f.count/3;u<d;u++)for(let p=0;p<3;p++){const m=3*u+p,v=3*u+(p+1)%3;a.fromBufferAttribute(f,m),l.fromBufferAttribute(f,v),B0(a,l,i)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new rn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function B0(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(a)===!0?!1:(t.add(i),t.add(a),!0)}class rN extends vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yS,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iN extends Il{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class HS extends Xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Uh=new kt,k0=new k,H0=new k;class oN{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;k0.setFromMatrixPosition(e.matrixWorld),t.position.copy(k0),H0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(H0),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const V0=new kt,rl=new k,Nh=new k;class aN extends oN{constructor(){super(new dr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),rl.setFromMatrixPosition(e.matrixWorld),i.position.copy(rl),Nh.copy(i.position),Nh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nh),i.updateMatrixWorld(),a.makeTranslation(-rl.x,-rl.y,-rl.z),V0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V0)}}class sN extends HS{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new aN}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lN extends HS{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uN extends Bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class gp extends jU{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class G0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const W0=new k,vc=new k;class cN{constructor(e=new k,t=new k){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){W0.subVectors(e,this.start),vc.subVectors(this.end,this.start);const i=vc.dot(vc);let l=vc.dot(W0)/i;return t&&(l=bn(l,0,1)),l}closestPointToPoint(e,t,i){const a=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class fN extends af{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Bn;a.setAttribute("position",new rn(t,3)),a.setAttribute("color",new rn(i,3));const l=new Il({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,i){const a=new et,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(i),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class li{constructor(e,t,i,a,l="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(l),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),li.nextNameID=li.nextNameID||0,this.$name.id=`lil-gui-name-${++li.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",f=>f.stopPropagation()),this.domElement.addEventListener("keyup",f=>f.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class dN extends li{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function _p(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const hN={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:_p,toHexString:_p},yl={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},pN={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=yl.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return yl.toHexString(a)}},mN={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=yl.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const a=n*i<<16^e*i<<8^t*i<<0;return yl.toHexString(a)}},vN=[hN,yl,pN,mN];function gN(n){return vN.find(e=>e.match(n))}class _N extends li{constructor(e,t,i,a){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=gN(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const l=_p(this.$text.value);l&&this._setValueFromHexString(l)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Fh extends li{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class yN extends li{constructor(e,t,i,a,l,f){super(e,t,i,"number"),this._initInput(),this.min(a),this.max(l);const u=f!==void 0;this.step(u?f:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let R=parseFloat(this.$input.value);isNaN(R)||(this._stepExplicit&&(R=this._snap(R)),this.setValue(this._clamp(R)))},i=R=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+R),this.$input.value=this.getValue())},a=R=>{R.key==="Enter"&&this.$input.blur(),R.code==="ArrowUp"&&(R.preventDefault(),i(this._step*this._arrowKeyMultiplier(R))),R.code==="ArrowDown"&&(R.preventDefault(),i(this._step*this._arrowKeyMultiplier(R)*-1))},l=R=>{this._inputFocused&&(R.preventDefault(),i(this._step*this._normalizeMouseWheel(R)))};let f=!1,u,d,p,m,v;const g=5,S=R=>{u=R.clientX,d=p=R.clientY,f=!0,m=this.getValue(),v=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",w)},E=R=>{if(f){const M=R.clientX-u,D=R.clientY-d;Math.abs(D)>g?(R.preventDefault(),this.$input.blur(),f=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>g&&w()}if(!f){const M=R.clientY-p;v-=M*this._step*this._arrowKeyMultiplier(R),m+v>this._max?v=this._max-m:m+v<this._min&&(v=this._min-m),this._snapClampSetValue(m+v)}p=R.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",w)},x=()=>{this._inputFocused=!0},y=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",l,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",y)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(y,R,M,D,U)=>(y-R)/(M-R)*(U-D)+D,t=y=>{const R=this.$slider.getBoundingClientRect();let M=e(y,R.left,R.right,this._min,this._max);this._snapClampSetValue(M)},i=y=>{this._setDraggingStyle(!0),t(y.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",l)},a=y=>{t(y.clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",l)};let f=!1,u,d;const p=y=>{y.preventDefault(),this._setDraggingStyle(!0),t(y.touches[0].clientX),f=!1},m=y=>{y.touches.length>1||(this._hasScrollBar?(u=y.touches[0].clientX,d=y.touches[0].clientY,f=!0):p(y),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",g))},v=y=>{if(f){const R=y.touches[0].clientX-u,M=y.touches[0].clientY-d;Math.abs(R)>Math.abs(M)?p(y):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",g))}else y.preventDefault(),t(y.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",g)},S=this._callOnFinishChange.bind(this),E=400;let w;const x=y=>{if(Math.abs(y.deltaX)<Math.abs(y.deltaY)&&this._hasScrollBar)return;y.preventDefault();const M=this._normalizeMouseWheel(y)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(S,E)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",m,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class xN extends li{constructor(e,t,i,a){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class SN extends li{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const EN=`.lil-gui {
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
}`;function wN(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let $0=!1;class Ic{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:a,title:l="Controls",closeFolders:f=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{(p.code==="Enter"||p.code==="Space")&&(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(l),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!$0&&u&&(wN(EN),$0=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=f}add(e,t,i,a,l){if(Object(i)===i)return new xN(this,e,t,i);const f=e[t];switch(typeof f){case"number":return new yN(this,e,t,i,a,l);case"boolean":return new dN(this,e,t);case"string":return new SN(this,e,t);case"function":return new Fh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,f)}addColor(e,t,i=1){return new _N(this,e,t,i)}addFolder(e){const t=new Ic({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Fh||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Fh)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=l=>{l.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function Oh(n,e,t,i){return new(t||(t=Promise))((function(a,l){function f(p){try{d(i.next(p))}catch(m){l(m)}}function u(p){try{d(i.throw(p))}catch(m){l(m)}}function d(p){var m;p.done?a(p.value):(m=p.value,m instanceof t?m:new t((function(v){v(m)}))).then(f,u)}d((i=i.apply(n,[])).next())}))}class hm{constructor(e,t,i,a){this.size=e,this.width=t,this.height=i,this.charLength=a,this.chars=""}static parse(e){const t=e.split(" "),i=t[0],a=i.split("x");return new hm(i,+a[0],+a[1],+t[1])}get src(){return"data:image/jpeg;base64,"+this.chars}get isValid(){return this.chars.length==this.charLength&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(this.chars)}}class pm{constructor(e,t,i,a){this.src=e,this.gcode=t,this.params=i,this.comment=a}}class X0 extends pm{constructor(e,t,i,a){super(e,t,i,a),this.params=i}}class oo extends pm{constructor(e,t,i,a){super(e,t,void 0,i),this.toolIndex=a}}class j0{constructor(e,t,i,a=0){this.layer=e,this.commands=t,this.lineNumber=i,this.height=a}}class Uc{constructor(e){this.lines=[],this.preamble=new j0(-1,[],0),this.layers=[],this.curZ=0,this.maxZ=0,this.metadata={thumbnails:{}},this.tolerance=0,this.tolerance=e??this.tolerance}parseGCode(e){const t=Array.isArray(e)?e:e.split(`
`);this.lines=this.lines.concat(t);const i=this.lines2commands(t);this.groupIntoLayers(i);const a=this.parseMetadata(i.filter((l=>l.comment))).thumbnails;for(const[l,f]of Object.entries(a))this.metadata.thumbnails[l]=f;return{layers:this.layers,metadata:this.metadata}}lines2commands(e){return e.map((t=>this.parseCommand(t)))}parseCommand(e,t=!0){var i;const a=e.trim().split(";"),l=a[0],f=t&&a[1]||void 0,u=l.split(/([a-zA-Z])/g).slice(1).map((m=>m.trim())),d=u.length?`${(i=u[0])===null||i===void 0?void 0:i.toLowerCase()}${u[1]}`:"",p=this.parseParams(u.slice(2));switch(d){case"g0":case"g00":case"g1":case"g01":case"g2":case"g02":case"g3":case"g03":return new X0(e,d,p,f);case"t0":return new oo(e,d,f,0);case"t1":return new oo(e,d,f,1);case"t2":return new oo(e,d,f,2);case"t3":return new oo(e,d,f,3);case"t4":return new oo(e,d,f,4);case"t5":return new oo(e,d,f,5);case"t6":return new oo(e,d,f,6);case"t7":return new oo(e,d,f,7);default:return new pm(e,d,p,f)}}parseMove(e){return e.reduce(((t,i)=>{const a=i.charAt(0).toLowerCase();return a!="x"&&a!="y"&&a!="z"&&a!="e"&&a!="r"&&a!="f"&&a!="i"&&a!="j"||(t[a]=parseFloat(i.slice(1))),t}),{})}isAlpha(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90}parseParams(e){return e.reduce(((t,i,a,l)=>{if(a%2==0)return t;let f=l[a-1];return f=f.toLowerCase(),this.isAlpha(f)&&(t[f]=parseFloat(i)),t}),{})}groupIntoLayers(e){var t;for(let i=0;i<e.length;i++){const a=e[i];if(a instanceof X0){const l=a.params;if(l.z&&(this.curZ=l.z),((t=l.e)!==null&&t!==void 0?t:0)>0&&(l.x!=null||l.y!=null)&&Math.abs(this.curZ-(this.maxZ||-1/0))>this.tolerance){const f=Math.abs(this.curZ-this.maxZ);this.maxZ=this.curZ,this.layers.push(new j0(this.layers.length,[],i,f))}}this.maxLayer.commands.push(a)}return this.layers}get maxLayer(){var e;return(e=this.layers[this.layers.length-1])!==null&&e!==void 0?e:this.preamble}parseMetadata(e){const t={};let i;for(const a of e){const l=a.comment;if(!l)continue;const f=l.indexOf("thumbnail begin"),u=l.indexOf("thumbnail end");f>-1?i=hm.parse(l.slice(f+15).trim()):i&&(u==-1?i.chars+=l.trim():(i.isValid&&(t[i.size]=i),i=void 0))}return{thumbnails:t}}}Uc.prototype.parseGcode=Uc.prototype.parseGCode;const Y0={type:"change"},zh={type:"start"},q0={type:"end"},gc=new lm,K0=new ao,MN=Math.cos(70*SS.DEG2RAD);class AN extends sa{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pa.ROTATE,MIDDLE:Pa.DOLLY,RIGHT:Pa.PAN},this.touches={ONE:Da.ROTATE,TWO:Da.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(ae){ae.addEventListener("keydown",Oe),this._domElementKeyEvents=ae},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Y0),i.update(),l=a.NONE},this.update=(function(){const ae=new k,se=new na().setFromUnitVectors(e.up,new k(0,1,0)),xe=se.clone().invert(),ge=new k,Me=new na,we=new k,Ie=2*Math.PI;return function(Ke=null){const P=i.object.position;ae.copy(P).sub(i.target),ae.applyQuaternion(se),u.setFromVector3(ae),i.autoRotate&&l===a.NONE&&N((function(ye){return ye!==null?2*Math.PI/60*i.autoRotateSpeed*ye:2*Math.PI/60/60*i.autoRotateSpeed})(Ke)),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let T=i.minAzimuthAngle,j=i.maxAzimuthAngle;isFinite(T)&&isFinite(j)&&(T<-Math.PI?T+=Ie:T>Math.PI&&(T-=Ie),j<-Math.PI?j+=Ie:j>Math.PI&&(j-=Ie),u.theta=T<=j?Math.max(T,Math.min(j,u.theta)):u.theta>(T+j)/2?Math.max(T,u.theta):Math.min(j,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&O||i.object.isOrthographicCamera?u.radius=q(u.radius):u.radius=q(u.radius*p),ae.setFromSpherical(u),ae.applyQuaternion(xe),P.copy(i.target).add(ae),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),m.set(0,0,0));let Ae=!1;if(i.zoomToCursor&&O){let ye=null;if(i.object.isPerspectiveCamera){const Ce=ae.length();ye=q(Ce*p);const Ye=Ce-ye;i.object.position.addScaledVector(D,Ye),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ce=new k(U.x,U.y,0);Ce.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),i.object.updateProjectionMatrix(),Ae=!0;const Ye=new k(U.x,U.y,0);Ye.unproject(i.object),i.object.position.sub(Ye).add(Ce),i.object.updateMatrixWorld(),ye=ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ye).add(i.object.position):(gc.origin.copy(i.object.position),gc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(gc.direction))<MN?e.lookAt(i.target):(K0.setFromNormalAndCoplanarPoint(i.object.up,i.target),gc.intersectPlane(K0,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),i.object.updateProjectionMatrix(),Ae=!0);return p=1,O=!1,!!(Ae||ge.distanceToSquared(i.object.position)>f||8*(1-Me.dot(i.object.quaternion))>f||we.distanceToSquared(i.target)>0)&&(i.dispatchEvent(Y0),ge.copy(i.object.position),Me.copy(i.object.quaternion),we.copy(i.target),!0)}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",X),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",Fe),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Oe),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const f=1e-6,u=new G0,d=new G0;let p=1;const m=new k,v=new ft,g=new ft,S=new ft,E=new ft,w=new ft,x=new ft,y=new ft,R=new ft,M=new ft,D=new k,U=new ft;let O=!1;const F=[],ce={};function b(){return Math.pow(.95,i.zoomSpeed)}function N(ae){d.theta-=ae}function he(ae){d.phi-=ae}const re=(function(){const ae=new k;return function(se,xe){ae.setFromMatrixColumn(xe,0),ae.multiplyScalar(-se),m.add(ae)}})(),pe=(function(){const ae=new k;return function(se,xe){i.screenSpacePanning===!0?ae.setFromMatrixColumn(xe,1):(ae.setFromMatrixColumn(xe,0),ae.crossVectors(i.object.up,ae)),ae.multiplyScalar(se),m.add(ae)}})(),H=(function(){const ae=new k;return function(se,xe){const ge=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;ae.copy(Me).sub(i.target);let we=ae.length();we*=Math.tan(i.object.fov/2*Math.PI/180),re(2*se*we/ge.clientHeight,i.object.matrix),pe(2*xe*we/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(re(se*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),pe(xe*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function ee(ae){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p/=ae:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function fe(ae){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p*=ae:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(ae){if(!i.zoomToCursor)return;O=!0;const se=i.domElement.getBoundingClientRect(),xe=ae.clientX-se.left,ge=ae.clientY-se.top,Me=se.width,we=se.height;U.x=xe/Me*2-1,U.y=-ge/we*2+1,D.set(U.x,U.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(ae){return Math.max(i.minDistance,Math.min(i.maxDistance,ae))}function ne(ae){v.set(ae.clientX,ae.clientY)}function $(ae){E.set(ae.clientX,ae.clientY)}function C(){if(F.length===1)v.set(F[0].pageX,F[0].pageY);else{const ae=.5*(F[0].pageX+F[1].pageX),se=.5*(F[0].pageY+F[1].pageY);v.set(ae,se)}}function z(){if(F.length===1)E.set(F[0].pageX,F[0].pageY);else{const ae=.5*(F[0].pageX+F[1].pageX),se=.5*(F[0].pageY+F[1].pageY);E.set(ae,se)}}function W(){const ae=F[0].pageX-F[1].pageX,se=F[0].pageY-F[1].pageY,xe=Math.sqrt(ae*ae+se*se);y.set(0,xe)}function Y(ae){if(F.length==1)g.set(ae.pageX,ae.pageY);else{const xe=ke(ae),ge=.5*(ae.pageX+xe.x),Me=.5*(ae.pageY+xe.y);g.set(ge,Me)}S.subVectors(g,v).multiplyScalar(i.rotateSpeed);const se=i.domElement;N(2*Math.PI*S.x/se.clientHeight),he(2*Math.PI*S.y/se.clientHeight),v.copy(g)}function Q(ae){if(F.length===1)w.set(ae.pageX,ae.pageY);else{const se=ke(ae),xe=.5*(ae.pageX+se.x),ge=.5*(ae.pageY+se.y);w.set(xe,ge)}x.subVectors(w,E).multiplyScalar(i.panSpeed),H(x.x,x.y),E.copy(w)}function Z(ae){const se=ke(ae),xe=ae.pageX-se.x,ge=ae.pageY-se.y,Me=Math.sqrt(xe*xe+ge*ge);R.set(0,Me),M.set(0,Math.pow(R.y/y.y,i.zoomSpeed)),ee(M.y),y.copy(R)}function _e(ae){i.enabled!==!1&&(F.length===0&&(i.domElement.setPointerCapture(ae.pointerId),i.domElement.addEventListener("pointermove",ve),i.domElement.addEventListener("pointerup",be)),(function(se){F.push(se)})(ae),ae.pointerType==="touch"?(function(se){switch(Ct(se),F.length){case 1:switch(i.touches.ONE){case Da.ROTATE:if(i.enableRotate===!1)return;C(),l=a.TOUCH_ROTATE;break;case Da.PAN:if(i.enablePan===!1)return;z(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case Da.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;i.enableZoom&&W(),i.enablePan&&z(),l=a.TOUCH_DOLLY_PAN;break;case Da.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;i.enableZoom&&W(),i.enableRotate&&C(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(zh)})(ae):(function(se){let xe;switch(se.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Pa.DOLLY:if(i.enableZoom===!1)return;(function(ge){ie(ge),y.set(ge.clientX,ge.clientY)})(se),l=a.DOLLY;break;case Pa.ROTATE:if(se.ctrlKey||se.metaKey||se.shiftKey){if(i.enablePan===!1)return;$(se),l=a.PAN}else{if(i.enableRotate===!1)return;ne(se),l=a.ROTATE}break;case Pa.PAN:if(se.ctrlKey||se.metaKey||se.shiftKey){if(i.enableRotate===!1)return;ne(se),l=a.ROTATE}else{if(i.enablePan===!1)return;$(se),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(zh)})(ae))}function ve(ae){i.enabled!==!1&&(ae.pointerType==="touch"?(function(se){switch(Ct(se),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Y(se),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;Q(se),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enablePan&&Q(xe)})(se),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;(function(xe){i.enableZoom&&Z(xe),i.enableRotate&&Y(xe)})(se),i.update();break;default:l=a.NONE}})(ae):(function(se){switch(l){case a.ROTATE:if(i.enableRotate===!1)return;(function(xe){g.set(xe.clientX,xe.clientY),S.subVectors(g,v).multiplyScalar(i.rotateSpeed);const ge=i.domElement;N(2*Math.PI*S.x/ge.clientHeight),he(2*Math.PI*S.y/ge.clientHeight),v.copy(g),i.update()})(se);break;case a.DOLLY:if(i.enableZoom===!1)return;(function(xe){R.set(xe.clientX,xe.clientY),M.subVectors(R,y),M.y>0?ee(b()):M.y<0&&fe(b()),y.copy(R),i.update()})(se);break;case a.PAN:if(i.enablePan===!1)return;(function(xe){w.set(xe.clientX,xe.clientY),x.subVectors(w,E).multiplyScalar(i.panSpeed),H(x.x,x.y),E.copy(w),i.update()})(se)}})(ae))}function be(ae){(function(se){delete ce[se.pointerId];for(let xe=0;xe<F.length;xe++)if(F[xe].pointerId==se.pointerId)return void F.splice(xe,1)})(ae),F.length===0&&(i.domElement.releasePointerCapture(ae.pointerId),i.domElement.removeEventListener("pointermove",ve),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(q0),l=a.NONE}function Fe(ae){i.enabled!==!1&&i.enableZoom!==!1&&l===a.NONE&&(ae.preventDefault(),i.dispatchEvent(zh),(function(se){ie(se),se.deltaY<0?fe(b()):se.deltaY>0&&ee(b()),i.update()})(ae),i.dispatchEvent(q0))}function Oe(ae){i.enabled!==!1&&i.enablePan!==!1&&(function(se){let xe=!1;switch(se.code){case i.keys.UP:se.ctrlKey||se.metaKey||se.shiftKey?he(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:se.ctrlKey||se.metaKey||se.shiftKey?he(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:se.ctrlKey||se.metaKey||se.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:se.ctrlKey||se.metaKey||se.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),xe=!0}xe&&(se.preventDefault(),i.update())})(ae)}function X(ae){i.enabled!==!1&&ae.preventDefault()}function Ct(ae){let se=ce[ae.pointerId];se===void 0&&(se=new ft,ce[ae.pointerId]=se),se.set(ae.pageX,ae.pageY)}function ke(ae){const se=ae.pointerId===F[0].pointerId?F[1]:F[0];return ce[se.pointerId]}i.domElement.addEventListener("contextmenu",X),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",Fe,{passive:!1}),this.update()}}Ne.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ft(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},nr.line={uniforms:um.merge([Ne.common,Ne.fog,Ne.line]),vertexShader:`
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
		`};class VS extends xo{constructor(e){super({type:"LineMaterial",uniforms:um.clone(nr.line.uniforms),vertexShader:nr.line.vertexShader,fragmentShader:nr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Z0=new Rr,_c=new k;class GS extends uN{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new rn([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new rn([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new gp(t,6,1);return this.setAttribute("instanceStart",new uo(i,3,0)),this.setAttribute("instanceEnd",new uo(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new gp(t,6,1);return this.setAttribute("instanceColorStart",new uo(i,3,0)),this.setAttribute("instanceColorEnd",new uo(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new nN(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Z0.setFromBufferAttribute(t),this.boundingBox.union(Z0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let a=0;for(let l=0,f=e.count;l<f;l++)_c.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(_c)),_c.fromBufferAttribute(t,l),a=Math.max(a,i.distanceToSquared(_c));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const J0=new k,Q0=new k,En=new Nt,wn=new Nt,ei=new Nt,Bh=new k,kh=new kt,Mn=new cN,ey=new k,yc=new Rr,xc=new si,ti=new Nt;let ni,Ko;function ty(n,e,t){return ti.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ti.multiplyScalar(1/ti.w),ti.x=Ko/t.width,ti.y=Ko/t.height,ti.applyMatrix4(n.projectionMatrixInverse),ti.multiplyScalar(1/ti.w),Math.abs(Math.max(ti.x,ti.y))}class TN extends Xr{constructor(e=new GS,t=new VS({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let f=0,u=0,d=t.count;f<d;f++,u+=2)J0.fromBufferAttribute(t,f),Q0.fromBufferAttribute(i,f),a[u]=u===0?0:a[u-1],a[u+1]=a[u]+J0.distanceTo(Q0);const l=new gp(a,2,1);return e.setAttribute("instanceDistanceStart",new uo(l,1,0)),e.setAttribute("instanceDistanceEnd",new uo(l,1,1)),this}raycast(e,t){const i=this.material.worldUnits,a=e.camera;a!==null||i||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const l=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ni=e.ray;const f=this.matrixWorld,u=this.geometry,d=this.material;let p,m;Ko=d.linewidth+l,u.boundingSphere===null&&u.computeBoundingSphere(),xc.copy(u.boundingSphere).applyMatrix4(f),i?p=.5*Ko:p=ty(a,Math.max(a.near,xc.distanceToPoint(ni.origin)),d.resolution),xc.radius+=p,ni.intersectsSphere(xc)!==!1&&(u.boundingBox===null&&u.computeBoundingBox(),yc.copy(u.boundingBox).applyMatrix4(f),i?m=.5*Ko:m=ty(a,Math.max(a.near,yc.distanceToPoint(ni.origin)),d.resolution),yc.expandByScalar(m),ni.intersectsBox(yc)!==!1&&(i?(function(v,g){const S=v.matrixWorld,E=v.geometry,w=E.attributes.instanceStart,x=E.attributes.instanceEnd;for(let y=0,R=Math.min(E.instanceCount,w.count);y<R;y++){Mn.start.fromBufferAttribute(w,y),Mn.end.fromBufferAttribute(x,y),Mn.applyMatrix4(S);const M=new k,D=new k;ni.distanceSqToSegment(Mn.start,Mn.end,D,M),D.distanceTo(M)<.5*Ko&&g.push({point:D,pointOnLine:M,distance:ni.origin.distanceTo(D),object:v,face:null,faceIndex:y,uv:null,uv1:null})}})(this,t):(function(v,g,S){const E=g.projectionMatrix,w=v.material.resolution,x=v.matrixWorld,y=v.geometry,R=y.attributes.instanceStart,M=y.attributes.instanceEnd,D=Math.min(y.instanceCount,R.count),U=-g.near;ni.at(1,ei),ei.w=1,ei.applyMatrix4(g.matrixWorldInverse),ei.applyMatrix4(E),ei.multiplyScalar(1/ei.w),ei.x*=w.x/2,ei.y*=w.y/2,ei.z=0,Bh.copy(ei),kh.multiplyMatrices(g.matrixWorldInverse,x);for(let O=0,F=D;O<F;O++){if(En.fromBufferAttribute(R,O),wn.fromBufferAttribute(M,O),En.w=1,wn.w=1,En.applyMatrix4(kh),wn.applyMatrix4(kh),En.z>U&&wn.z>U)continue;if(En.z>U){const re=En.z-wn.z,pe=(En.z-U)/re;En.lerp(wn,pe)}else if(wn.z>U){const re=wn.z-En.z,pe=(wn.z-U)/re;wn.lerp(En,pe)}En.applyMatrix4(E),wn.applyMatrix4(E),En.multiplyScalar(1/En.w),wn.multiplyScalar(1/wn.w),En.x*=w.x/2,En.y*=w.y/2,wn.x*=w.x/2,wn.y*=w.y/2,Mn.start.copy(En),Mn.start.z=0,Mn.end.copy(wn),Mn.end.z=0;const ce=Mn.closestPointToPointParameter(Bh,!0);Mn.at(ce,ey);const b=SS.lerp(En.z,wn.z,ce),N=b>=-1&&b<=1,he=Bh.distanceTo(ey)<.5*Ko;if(N&&he){Mn.start.fromBufferAttribute(R,O),Mn.end.fromBufferAttribute(M,O),Mn.start.applyMatrix4(x),Mn.end.applyMatrix4(x);const re=new k,pe=new k;ni.distanceSqToSegment(Mn.start,Mn.end,pe,re),S.push({point:pe,pointOnLine:re,distance:ni.origin.distanceTo(pe),object:v,face:null,faceIndex:O,uv:null,uv1:null})}}})(this,a,t)))}}class bN extends af{constructor(e,t,i,a,l=4473924,f=8947848){l=new et(l),f=new et(f);const u=Math.round(e/t);i=Math.round(i/a)*a/2;const d=[],p=[];let m=0;for(let g=-1*(e=u*t/2);g<=e;g+=t){d.push(g,0,-1*i,g,0,i);const S=g===0?l:f;S.toArray(p,m),m+=3,S.toArray(p,m),m+=3,S.toArray(p,m),m+=3,S.toArray(p,m),m+=3}for(let g=-1*i;g<=i;g+=a){d.push(-1*e,0,g,e,0,g);const S=g===0?l:f;S.toArray(p,m),m+=3,S.toArray(p,m),m+=3,S.toArray(p,m),m+=3,S.toArray(p,m),m+=3}const v=new Bn;v.setAttribute("position",new rn(d,3)),v.setAttribute("color",new rn(p,3)),super(v,new Il({vertexColors:!0,toneMapped:!1}))}}function CN(n,e,t,i){const a=(function(f,u,d){f*=.5,u*=.5,d*=.5;const p=new Bn,m=[];return m.push(-f,-u,-d,-f,u,-d,-f,u,-d,f,u,-d,f,u,-d,f,-u,-d,f,-u,-d,-f,-u,-d,-f,-u,d,-f,u,d,-f,u,d,f,u,d,f,u,d,f,-u,d,f,-u,d,-f,-u,d,-f,-u,-d,-f,-u,d,-f,u,-d,-f,u,d,f,u,-d,f,u,d,f,-u,-d,f,-u,d),p.setAttribute("position",new rn(m,3)),p})(n,e,t),l=new af(a,new iN({color:new et(i),dashSize:3,gapSize:1}));return l.computeLineDistances(),l}var hl=function(){var n=0,e=document.createElement("div");function t(m){return e.appendChild(m.dom),m}function i(m){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===m?"block":"none";n=m}e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",(function(m){m.preventDefault(),i(++n%e.children.length)}),!1);var a=(performance||Date).now(),l=a,f=0,u=t(new hl.Panel("FPS","#0ff","#002")),d=t(new hl.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=t(new hl.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){f++;var m=(performance||Date).now();if(d.update(m-a,200),m>=l+1e3&&(u.update(1e3*f/(m-l),100),l=m,f=0,p)){var v=performance.memory;p.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return m},update:function(){a=this.end()},domElement:e,setMode:i}};hl.Panel=function(n,e,t){var i=1/0,a=0,l=Math.round,f=l(window.devicePixelRatio||1),u=80*f,d=48*f,p=3*f,m=2*f,v=3*f,g=15*f,S=74*f,E=30*f,w=document.createElement("canvas");w.width=u,w.height=d,w.style.cssText="width:80px;height:48px";var x=w.getContext("2d");return x.font="bold "+9*f+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,u,d),x.fillStyle=e,x.fillText(n,p,m),x.fillRect(v,g,S,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v,g,S,E),{dom:w,update:function(y,R){i=Math.min(i,y),a=Math.max(a,y),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,u,g),x.fillStyle=e,x.fillText(l(y)+" "+n+" ("+l(i)+"-"+l(a)+")",p,m),x.drawImage(w,v+f,g,S-f,E,v,g,S-f,E),x.fillRect(v+S-f,g,f,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v+S-f,g,f,l((1-y/R)*E))}}};var RN=hl;class ny{constructor(e,t){this.openFolders=[],this.watchedObject=e,this.options=t,this.gui=new Ic,this.gui.title("Dev info"),this.setup()}setup(){this.loadOpenFolders(),this.options&&!this.options.renderer||this.setupRedererFolder(),this.options&&!this.options.camera||this.setupCameraFolder(),this.options&&!this.options.parser||this.setupParserFolder(),this.options&&!this.options.buildVolume||this.setupBuildVolumeFolder(),this.options&&!this.options.devHelpers||this.setupDevHelpers()}reset(){this.gui.destroy(),this.gui=new Ic,this.gui.title("Dev info"),this.setup()}loadOpenFolders(){this.openFolders=JSON.parse(localStorage.getItem("dev-gui-open")||"{}").open||[]}saveOpenFolders(){this.openFolders=this.gui.foldersRecursive().filter((e=>!e._closed)).map((e=>e._title)),console.log(this.openFolders),localStorage.setItem("dev-gui-open",JSON.stringify({open:this.openFolders}))}setupRedererFolder(){const e=this.gui.addFolder("Render Info");this.openFolders.includes("Render Info")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.renderer.info.render,"triangles").listen(),e.add(this.watchedObject.renderer.info.render,"calls").listen(),e.add(this.watchedObject.renderer.info.render,"lines").listen(),e.add(this.watchedObject.renderer.info.render,"points").listen(),e.add(this.watchedObject.renderer.info.memory,"geometries").listen(),e.add(this.watchedObject.renderer.info.memory,"textures").listen(),e.add(this.watchedObject,"_lastRenderTime").listen()}setupCameraFolder(){const e=this.gui.addFolder("Camera");this.openFolders.includes("Camera")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()}));const t=e.addFolder("Camera position");t.add(this.watchedObject.camera.position,"x").listen(),t.add(this.watchedObject.camera.position,"y").listen(),t.add(this.watchedObject.camera.position,"z").listen();const i=e.addFolder("Camera rotation");i.add(this.watchedObject.camera.rotation,"x").listen(),i.add(this.watchedObject.camera.rotation,"y").listen(),i.add(this.watchedObject.camera.rotation,"z").listen()}setupParserFolder(){const e=this.gui.addFolder("Parser");this.openFolders.includes("Parser")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.parser,"curZ").listen(),e.add(this.watchedObject.parser,"maxZ").listen(),e.add(this.watchedObject.parser,"tolerance").listen(),e.add(this.watchedObject.parser.layers,"length").name("layers.count").listen(),e.add(this.watchedObject.parser.lines,"length").name("lines.count").listen()}setupBuildVolumeFolder(){const e=this.gui.addFolder("Build Volume");this.openFolders.includes("Build Volume")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject.buildVolume,"x").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"y").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject.buildVolume,"z").min(0).max(600).listen().onChange((()=>{this.watchedObject.render()}))}setupDevHelpers(){const e=this.gui.addFolder("Dev Helpers");this.openFolders.includes("Dev Helpers")||e.close(),e.onOpenClose((()=>{this.saveOpenFolders()})),e.add(this.watchedObject,"_wireframe").listen().onChange((()=>{this.watchedObject.render()})),e.add(this.watchedObject,"render").listen(),e.add(this.watchedObject,"clear").listen()}}class LN extends Bn{constructor(e=[new k],t=.6,i=.2,a=8){super(),this.type="ExtrusionGeometry",this.parameters={points:e,lineWidth:t,lineHeight:i,radialSegments:a,closed:!1};const l=new k,f=new k,u=new ft,d=[],p=[],m=[],v=[];function g(S){const[E,w,x]=(function(y){const R=e[y],M=new k,D=new k,U=new k,O=new k;M.copy(R).sub(e[y-1]||R).normalize().add((e[y+1]||R).clone().sub(R).normalize()).normalize();let F=Number.MAX_VALUE;const ce=Math.abs(M.x),b=Math.abs(M.y),N=Math.abs(M.z);return ce<=F&&(F=ce,D.set(1,0,0)),b<=F&&(F=b,D.set(0,1,0)),N<=F&&D.set(0,0,1),O.crossVectors(M,D).normalize(),D.crossVectors(M,O),U.crossVectors(M,D),[R,D,U]})(S);for(let y=0;y<=a;y++){const R=y/a*Math.PI*2,M=Math.sin(R),D=-Math.cos(R);f.x=D*w.x+M*x.x,f.y=D*w.y+M*x.y,f.z=D*w.z+M*x.z,f.normalize(),p.push(f.x,f.y,f.z),l.x=E.x+t*f.x*.5,l.y=E.y+t*f.y*.5,l.z=E.z+i*f.z*.5,d.push(l.x,l.y,l.z)}}(function(){for(let S=0;S<e.length;S++)g(S);g(closed===!1?e.length-1:0),(function(){for(let S=0;S<e.length;S++)for(let E=0;E<=a;E++)u.x=S/e.length,u.y=E/a,m.push(u.x,u.y)})(),(function(){for(let S=1;S<e.length;S++)for(let E=1;E<=a;E++){const w=(a+1)*(S-1)+(E-1),x=(a+1)*S+(E-1),y=(a+1)*S+E,R=(a+1)*(S-1)+E;v.push(w,x,R),v.push(x,y,R)}})()})(),this.setIndex(v),this.setAttribute("position",new rn(d,3)),this.setAttribute("normal",new rn(p,3)),this.setAttribute("uv",new rn(m,2))}}class pl{static get initial(){const e=new pl;return Object.assign(e,{x:0,y:0,z:0,r:0,e:0,i:0,j:0,t:0}),e}}const Hh={h:0,s:0,l:0};class ns{constructor(e){var t,i,a,l,f,u,d,p,m;if(this.minLayerThreshold=.05,this.renderExtrusion=!0,this.renderTravel=!1,this.renderTubes=!1,this.extrusionWidth=.6,this.singleLayerMode=!1,this.initialCameraPosition=[-100,400,450],this.debug=!1,this.inches=!1,this.nonTravelmoves=[],this.disableGradient=!1,this.state=pl.initial,this.beyondFirstMove=!1,this.disposables=[],this._extrusionColor=ns.defaultExtrusionColor,this.renderLayerIndex=0,this._geometries={},this._backgroundColor=new et(14737632),this._travelColor=new et(10027008),this._toolColors={},this.devMode=!1,this._lastRenderTime=0,this._wireframe=!1,this.minLayerThreshold=(t=e.minLayerThreshold)!==null&&t!==void 0?t:this.minLayerThreshold,this.parser=new Uc(this.minLayerThreshold),this.scene=new XU,this.scene.background=this._backgroundColor,e.backgroundColor!==void 0&&(this.backgroundColor=new et(e.backgroundColor)),this.targetId=e.targetId,this.endLayer=e.endLayer,this.startLayer=e.startLayer,this.lineWidth=e.lineWidth,this.lineHeight=e.lineHeight,this.buildVolume=e.buildVolume,this.initialCameraPosition=(i=e.initialCameraPosition)!==null&&i!==void 0?i:this.initialCameraPosition,this.debug=(a=e.debug)!==null&&a!==void 0?a:this.debug,this.renderExtrusion=(l=e.renderExtrusion)!==null&&l!==void 0?l:this.renderExtrusion,this.renderTravel=(f=e.renderTravel)!==null&&f!==void 0?f:this.renderTravel,this.nonTravelmoves=(u=e.nonTravelMoves)!==null&&u!==void 0?u:this.nonTravelmoves,this.renderTubes=(d=e.renderTubes)!==null&&d!==void 0?d:this.renderTubes,this.extrusionWidth=(p=e.extrusionWidth)!==null&&p!==void 0?p:this.extrusionWidth,this.devMode=(m=e.devMode)!==null&&m!==void 0?m:this.devMode,this.stats=this.devMode?new RN:void 0,e.extrusionColor!==void 0&&(this.extrusionColor=e.extrusionColor),e.travelColor!==void 0&&(this.travelColor=new et(e.travelColor)),e.topLayerColor!==void 0&&(this.topLayerColor=new et(e.topLayerColor)),e.lastSegmentColor!==void 0&&(this.lastSegmentColor=new et(e.lastSegmentColor)),e.toolColors){this._toolColors={};for(const[S,E]of Object.entries(e.toolColors))this._toolColors[parseInt(S)]=new et(E)}if(e.disableGradient!==void 0&&(this.disableGradient=e.disableGradient),console.info("Using THREE r"+ef),console.debug("opts",e),this.targetId&&console.warn("`targetId` is deprecated and will removed in the future. Use `canvas` instead."),e.canvas)this.canvas=e.canvas,this.renderer=new vp({canvas:this.canvas,preserveDrawingBuffer:!0});else{if(!this.targetId)throw Error("Set either opts.canvas or opts.targetId");const S=document.getElementById(this.targetId);if(!S)throw new Error("Unable to find element "+this.targetId);this.renderer=new vp({preserveDrawingBuffer:!0}),this.canvas=this.renderer.domElement,S.appendChild(this.canvas)}this.camera=new dr(25,this.canvas.offsetWidth/this.canvas.offsetHeight,10,5e3),this.camera.position.fromArray(this.initialCameraPosition);const v=this.camera.far,g=.8*v;this.scene.fog=new dm(this._backgroundColor,g,v),this.resize(),this.controls=new AN(this.camera,this.renderer.domElement),this.initScene(),this.animate(),e.allowDragNDrop&&this._enableDropHandler(),this.initStats()}get extrusionColor(){return this._extrusionColor}set extrusionColor(e){if(Array.isArray(e)){this._extrusionColor=[];for(const[t,i]of e.entries())this._extrusionColor[t]=new et(i)}else this._extrusionColor=new et(e)}get currentToolColor(){var e;return this._extrusionColor===void 0?ns.defaultExtrusionColor:this._extrusionColor instanceof et?this._extrusionColor:(e=this._extrusionColor[this.state.t])!==null&&e!==void 0?e:ns.defaultExtrusionColor}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=new et(e),this.scene.background=this._backgroundColor}get travelColor(){return this._travelColor}set travelColor(e){this._travelColor=new et(e)}get topLayerColor(){return this._topLayerColor}set topLayerColor(e){this._topLayerColor=e!==void 0?new et(e):void 0}get lastSegmentColor(){return this._lastSegmentColor}set lastSegmentColor(e){this._lastSegmentColor=e!==void 0?new et(e):void 0}get layers(){return[this.parser.preamble].concat(this.parser.layers.concat())}get maxLayerIndex(){var e;return((e=this.endLayer)!==null&&e!==void 0?e:this.layers.length)-1}get minLayerIndex(){var e;return this.singleLayerMode?this.maxLayerIndex:((e=this.startLayer)!==null&&e!==void 0?e:0)-1}animate(){var e;this.animationFrameId=requestAnimationFrame((()=>this.animate())),this.controls.update(),this.renderer.render(this.scene,this.camera),(e=this.stats)===null||e===void 0||e.update()}processGCode(e){this.parser.parseGCode(e),this.render()}initScene(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);for(;this.disposables.length>0;){const e=this.disposables.pop();e&&e.dispose()}if(this.debug&&this.buildVolume){const e=new fN(Math.max(this.buildVolume.x/2,this.buildVolume.y/2)+20);this.scene.add(e)}if(this.buildVolume&&this.drawBuildVolume(),this.renderTubes){console.warn("Volumetric rendering is experimental. It may not work as expected or change in the future.");const e=new lN(13421772,.3*Math.PI),t=new sN(16777215,Math.PI,void 0,.001);t.position.set(0,500,500),this.scene.add(e),this.scene.add(t)}}createGroup(e){const t=new ol;return t.name=e,t.quaternion.setFromEuler(new Pl(-Math.PI/2,0,0)),this.buildVolume?t.position.set(-this.buildVolume.x/2,0,this.buildVolume.y/2):t.position.set(-100,0,100),t}render(){const e=performance.now();this.group=this.createGroup("allLayers"),this.state=pl.initial,this.initScene();for(let t=0;t<this.layers.length;t++)this.renderLayer(t);this.batchGeometries(),this.scene.add(this.group),this.renderer.render(this.scene,this.camera),this._lastRenderTime=performance.now()-e}renderAnimated(e=1){return Oh(this,void 0,void 0,(function*(){return this.initScene(),this.renderLayerIndex=0,this.renderFrameLoop(e>0?e:1)}))}renderFrameLoop(e){return new Promise((t=>{const i=()=>{this.renderLayerIndex>this.layers.length-1?t():(this.renderFrame(e),requestAnimationFrame(i))};i()}))}renderFrame(e){this.group=this.createGroup("layer"+this.renderLayerIndex);for(let t=0;t<e&&this.renderLayerIndex+t<this.layers.length;t++)this.renderLayer(this.renderLayerIndex),this.renderLayerIndex++;this.batchGeometries(),this.scene.add(this.group)}renderLayer(e){var t,i,a,l,f,u,d,p;if(e>this.maxLayerIndex)return;const m=this.layers[e],v={extrusion:[],travel:[],z:this.state.z,height:m.height};for(const g of m.commands)if(g.gcode!="g20"){if(g.gcode.startsWith("t")){this.doRenderExtrusion(v,e),v.extrusion=[];const S=g;this.state.t=S.toolIndex}else if(["g0","g00","g1","g01","g2","g02","g3","g03"].indexOf(g.gcode)>-1){const S=g,E={x:(t=S.params.x)!==null&&t!==void 0?t:this.state.x,y:(i=S.params.y)!==null&&i!==void 0?i:this.state.y,z:(a=S.params.z)!==null&&a!==void 0?a:this.state.z,r:(l=S.params.r)!==null&&l!==void 0?l:this.state.r,e:(f=S.params.e)!==null&&f!==void 0?f:this.state.e,i:(u=S.params.i)!==null&&u!==void 0?u:this.state.i,j:(d=S.params.j)!==null&&d!==void 0?d:this.state.j,t:this.state.t};if(e>=this.minLayerIndex){const w=((p=S.params.e)!==null&&p!==void 0?p:0)>0||this.nonTravelmoves.indexOf(g.gcode)>-1;(E.x!=this.state.x||E.y!=this.state.y||E.z!=this.state.z)&&(w&&this.renderExtrusion||!w&&this.renderTravel)&&(g.gcode=="g2"||g.gcode=="g3"||g.gcode=="g02"||g.gcode=="g03"?this.addArcSegment(v,this.state,E,w,g.gcode=="g2"||g.gcode=="g02"):this.addLineSegment(v,this.state,E,w))}this.state.x=E.x,this.state.y=E.y,this.state.z=E.z,this.beyondFirstMove||(this.beyondFirstMove=!0)}}else this.setInches();this.doRenderExtrusion(v,e)}doRenderExtrusion(e,t){var i,a;if(this.renderExtrusion){let l=this.currentToolColor;if(!this.singleLayerMode&&!this.renderTubes&&!this.disableGradient){const f=.1+.7*t/this.layers.length;l.getHSL(Hh),l=new et().setHSL(Hh.h,Hh.s,f)}if(t==this.layers.length-1){const f=(i=this._topLayerColor)!==null&&i!==void 0?i:l,u=(a=this._lastSegmentColor)!==null&&a!==void 0?a:f,d=e.extrusion.splice(-3),p=e.extrusion.splice(-3);this.renderTubes?(this.addTubeLine(e.extrusion,f.getHex(),e.height),this.addTubeLine([...p,...d],u.getHex(),e.height)):(this.addLine(e.extrusion,f.getHex()),this.addLine([...p,...d],u.getHex()))}else this.renderTubes?this.addTubeLine(e.extrusion,l.getHex(),e.height):this.addLine(e.extrusion,l.getHex())}this.renderTravel&&this.addLine(e.travel,this._travelColor.getHex())}setInches(){this.beyondFirstMove?console.warn("Switching units after movement is already made is discouraged and is not supported."):this.inches=!0}drawBuildVolume(){if(!this.buildVolume)return;this.scene.add(new bN(this.buildVolume.x,10,this.buildVolume.y,10));const e=CN(this.buildVolume.x,this.buildVolume.z,this.buildVolume.y,8947848);e.position.setY(this.buildVolume.z/2),this.scene.add(e)}clear(){this.resetState(),this.parser=new Uc(this.minLayerThreshold)}resetState(){var e;this.startLayer=1,this.endLayer=1/0,this.singleLayerMode=!1,this.beyondFirstMove=!1,this.state=pl.initial,(e=this.devGui)===null||e===void 0||e.reset(),this._geometries={}}resize(){const[e,t]=[this.canvas.offsetWidth,this.canvas.offsetHeight];this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1)}addLineSegment(e,t,i,a){(a?e.extrusion:e.travel).push(t.x,t.y,t.z,i.x,i.y,i.z)}addArcSegment(e,t,i,a,l){const f=a?e.extrusion:e.travel,u=t.x,d=t.y,p=t.z,m=i.x,v=i.y,g=i.z;let S=i.r,E=i.i,w=i.j;if(S){const ee=m-u,fe=v-d,ie=Math.sqrt(Math.pow(ee/2,2)+Math.pow(fe/2,2));S=Math.max(S,ie);const q=Math.pow(ee,2)+Math.pow(fe,2),ne=Math.pow(S,2)-q/4;let $=Math.sqrt(ne/q);(l&&S<0||!l&&S>0)&&($=-$),E=ee/2+fe*$,w=fe/2-ee*$}const x=u==m&&d==v,y=u+E,R=d+w,M=Math.sqrt(E*E+w*w),D=Math.atan2(-w,-E),U=Math.atan2(v-R,m-y);let O;x?O=2*Math.PI:(O=l?D-U:U-D,O<0&&(O+=2*Math.PI));let F=M*O/1.8;this.inches&&(F*=25),F<1&&(F=1);let ce=O/F;ce*=l?-1:1;const b=[];b.push({x:u,y:d,z:p});const N=(p-g)/F;let he=u,re=d,pe=p,H=D;for(let ee=0;ee<F-1;ee++)H+=ce,he=y+M*Math.cos(H),re=R+M*Math.sin(H),pe+=N,b.push({x:he,y:re,z:pe});b.push({x:i.x,y:i.y,z:i.z});for(let ee=0;ee<b.length-1;ee++)f.push(b[ee].x,b[ee].y,b[ee].z,b[ee+1].x,b[ee+1].y,b[ee+1].z)}addLine(e,t){var i;if(typeof this.lineWidth=="number"&&this.lineWidth>0)return void this.addThickLine(e,t);const a=new Bn;a.setAttribute("position",new rn(e,3)),this.disposables.push(a);const l=new Il({color:t});this.disposables.push(l);const f=new af(a,l);(i=this.group)===null||i===void 0||i.add(f)}addTubeLine(e,t,i=.2){let a=[];const l=[];for(let f=0;f<e.length;f+=6){const u=e.slice(f,f+9),d=new k(u[0],u[1],u[2]),p=new k(u[3],u[4],u[5]),m=new k(u[6],u[7],u[8]);a.push(d),p.equals(m)||(a.push(p),l.push(a),a=[])}l.forEach((f=>{var u;const d=new LN(f,this.extrusionWidth,this.lineHeight||i,4);(u=this._geometries)[t]||(u[t]=[]),this._geometries[t].push(d)}))}addThickLine(e,t){var i;if(!e.length||!this.lineWidth)return;const a=new GS;this.disposables.push(a);const l=new VS({color:t,linewidth:this.lineWidth/(1e3*window.devicePixelRatio)});this.disposables.push(l),a.setPositions(e);const f=new TN(a,l);(i=this.group)===null||i===void 0||i.add(f)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[],this.controls.dispose(),this.renderer.dispose(),this.cancelAnimation()}cancelAnimation(){this.animationFrameId!==void 0&&cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0}_enableDropHandler(){console.warn("Drag and drop is deprecated as a library feature. See the demo how to implement your own."),this.canvas.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.canvas.classList.add("dragging")})),this.canvas.addEventListener("dragleave",(e=>{e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging")})),this.canvas.addEventListener("drop",(e=>Oh(this,void 0,void 0,(function*(){var t,i;e.stopPropagation(),e.preventDefault(),this.canvas.classList.remove("dragging");const a=((i=(t=e.dataTransfer)===null||t===void 0?void 0:t.files)!==null&&i!==void 0?i:[])[0];this.clear(),yield this._readFromStream(a.stream()),this.render()}))))}batchGeometries(){if(this._geometries)for(const e in this._geometries){const t=this.createBatchMesh(parseInt(e));for(;this._geometries[e].length>0;){const i=this._geometries[e].pop();t.addGeometry(i)}}}createBatchMesh(e){var t;const i=this._geometries[e],a=new rN({color:e,wireframe:this._wireframe});this.disposables.push(a);const l=i.reduce(((u,d)=>3*d.attributes.position.count+u),0),f=new eN(i.length,l,void 0,a);return this.disposables.push(f),(t=this.group)===null||t===void 0||t.add(f),f}_readFromStream(e){var t,i;return Oh(this,void 0,void 0,(function*(){const a=e.getReader();let l,f="",u=0;do{console.debug("reading from stream"),l=yield a.read(),u+=(i=(t=l.value)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0;const p=(d=l.value,new TextDecoder("utf-8").decode(d)),m=p.lastIndexOf(`
`),v=p.slice(0,m);this.parser.parseGCode(f+v),f=p.slice(m)}while(!l.done);var d;console.debug("read from stream",u)}))}initGui(){typeof this.devMode=="boolean"&&this.devMode===!0?this.devGui=new ny(this):typeof this.devMode=="object"&&(this.devGui=new ny(this,this.devMode))}initStats(){var e;this.stats&&(typeof this.devMode=="object"&&(this.statsContainer=this.devMode.statsContainer),((e=this.statsContainer)!==null&&e!==void 0?e:document.body).appendChild(this.stats.dom),this.stats.dom.classList.add("stats"),this.initGui())}}ns.defaultExtrusionColor=new et("hotpink");const PN=function(n){return new ns(n)},DN="_canvas_1cjd4_5",IN={canvas:DN},UN=({gcode:n})=>{const e=co.useRef(null);return co.useEffect(()=>{if(e.current){const t=e.current;PN({canvas:t,lineWidth:4,lineHeight:4,renderTravel:!1,renderExtrusion:!0,renderTubes:!1,startLayer:10,endLayer:20,backgroundColor:"black",buildVolume:{x:220,y:220,z:0}}).processGCode(n)}},[n]),Kt.jsx("canvas",{ref:e,className:IN.canvas})},NN=(n,e)=>n===e,FN=({data:n})=>{const{state:e,dispatch:t}=lR();return VC(()=>(console.log("useEffectEq",n.gcode),t.runLoadGcodeLines({url:n.gcode}),()=>{console.log("cleanup")}),NN,n.gcode),Kt.jsx(TL,{viewPictures:Kt.jsx(CL,{pictures:n.pictures}),viewGcode:Kt.jsx(UN,{gcode:Vx(e.gcodeLines,{NotAsked:()=>[],Loading:()=>[],Loaded:i=>i,Error:i=>[]})}),item:n})},ON=()=>{const{state:n,dispatch:e}=_L();return co.useEffect(()=>{console.log("render",n)}),co.useEffect(()=>{const t=hL();e.runFetchIndex({url:t.url})},[]),Vx(n.index,{NotAsked:()=>Kt.jsx(Wu,{}),Loading:()=>Kt.jsx(Wu,{viewInfo:Kt.jsx(Kt.Fragment,{children:"Loading"})}),Loaded:t=>Kt.jsx(Wu,{children:Kt.jsx(ML,{items:t.map(i=>Kt.jsx(FN,{data:i}))})}),Error:t=>Kt.jsx(Wu,{viewErrors:Kt.jsx(Kt.Fragment,{children:"Error: "+t})})})};Iw.createRoot(document.getElementById("root")).render(Kt.jsx(ON,{}));
