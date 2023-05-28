var t6=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var oZ=t6((dZ,_f)=>{const n6=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};n6();var qk=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Kk(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var R={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=Symbol.for("react.element"),r6=Symbol.for("react.portal"),i6=Symbol.for("react.fragment"),s6=Symbol.for("react.strict_mode"),o6=Symbol.for("react.profiler"),a6=Symbol.for("react.provider"),l6=Symbol.for("react.context"),u6=Symbol.for("react.forward_ref"),c6=Symbol.for("react.suspense"),d6=Symbol.for("react.memo"),h6=Symbol.for("react.lazy"),nS=Symbol.iterator;function f6(e){return e===null||typeof e!="object"?null:(e=nS&&e[nS]||e["@@iterator"],typeof e=="function"?e:null)}var Qk={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xk=Object.assign,Jk={};function Ul(e,t,n){this.props=e,this.context=t,this.refs=Jk,this.updater=n||Qk}Ul.prototype.isReactComponent={};Ul.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ul.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zk(){}Zk.prototype=Ul.prototype;function U1(e,t,n){this.props=e,this.context=t,this.refs=Jk,this.updater=n||Qk}var B1=U1.prototype=new Zk;B1.constructor=U1;Xk(B1,Ul.prototype);B1.isPureReactComponent=!0;var rS=Array.isArray,eT=Object.prototype.hasOwnProperty,z1={current:null},tT={key:!0,ref:!0,__self:!0,__source:!0};function nT(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)eT.call(t,r)&&!tT.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:id,type:e,key:s,ref:o,props:i,_owner:z1.current}}function p6(e,t){return{$$typeof:id,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function V1(e){return typeof e=="object"&&e!==null&&e.$$typeof===id}function m6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iS=/\/+/g;function s0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?m6(""+e.key):t.toString(36)}function Wh(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case id:case r6:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+s0(o,0):r,rS(i)?(n="",e!=null&&(n=e.replace(iS,"$&/")+"/"),Wh(i,t,n,"",function(c){return c})):i!=null&&(V1(i)&&(i=p6(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(iS,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",rS(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+s0(s,a);o+=Wh(s,t,n,l,i)}else if(l=f6(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+s0(s,a++),o+=Wh(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function dh(e,t,n){if(e==null)return e;var r=[],i=0;return Wh(e,r,"","",function(s){return t.call(n,s,i++)}),r}function g6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fn={current:null},Hh={transition:null},y6={ReactCurrentDispatcher:Fn,ReactCurrentBatchConfig:Hh,ReactCurrentOwner:z1};Me.Children={map:dh,forEach:function(e,t,n){dh(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dh(e,function(){t++}),t},toArray:function(e){return dh(e,function(t){return t})||[]},only:function(e){if(!V1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Me.Component=Ul;Me.Fragment=i6;Me.Profiler=o6;Me.PureComponent=U1;Me.StrictMode=s6;Me.Suspense=c6;Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y6;Me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xk({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=z1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)eT.call(t,l)&&!tT.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:id,type:e.type,key:i,ref:s,props:r,_owner:o}};Me.createContext=function(e){return e={$$typeof:l6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:a6,_context:e},e.Consumer=e};Me.createElement=nT;Me.createFactory=function(e){var t=nT.bind(null,e);return t.type=e,t};Me.createRef=function(){return{current:null}};Me.forwardRef=function(e){return{$$typeof:u6,render:e}};Me.isValidElement=V1;Me.lazy=function(e){return{$$typeof:h6,_payload:{_status:-1,_result:e},_init:g6}};Me.memo=function(e,t){return{$$typeof:d6,type:e,compare:t===void 0?null:t}};Me.startTransition=function(e){var t=Hh.transition;Hh.transition={};try{e()}finally{Hh.transition=t}};Me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Me.useCallback=function(e,t){return Fn.current.useCallback(e,t)};Me.useContext=function(e){return Fn.current.useContext(e)};Me.useDebugValue=function(){};Me.useDeferredValue=function(e){return Fn.current.useDeferredValue(e)};Me.useEffect=function(e,t){return Fn.current.useEffect(e,t)};Me.useId=function(){return Fn.current.useId()};Me.useImperativeHandle=function(e,t,n){return Fn.current.useImperativeHandle(e,t,n)};Me.useInsertionEffect=function(e,t){return Fn.current.useInsertionEffect(e,t)};Me.useLayoutEffect=function(e,t){return Fn.current.useLayoutEffect(e,t)};Me.useMemo=function(e,t){return Fn.current.useMemo(e,t)};Me.useReducer=function(e,t,n){return Fn.current.useReducer(e,t,n)};Me.useRef=function(e){return Fn.current.useRef(e)};Me.useState=function(e){return Fn.current.useState(e)};Me.useSyncExternalStore=function(e,t,n){return Fn.current.useSyncExternalStore(e,t,n)};Me.useTransition=function(){return Fn.current.useTransition()};Me.version="18.2.0";R.exports=Me;var Zt=R.exports,Cy={},j1={exports:{}},ar={},rT={exports:{}},iT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,V){var M=$.length;$.push(V);e:for(;0<M;){var ee=M-1>>>1,U=$[ee];if(0<i(U,V))$[ee]=V,$[M]=U,M=ee;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var V=$[0],M=$.pop();if(M!==V){$[0]=M;e:for(var ee=0,U=$.length,B=U>>>1;ee<B;){var Y=2*(ee+1)-1,z=$[Y],b=Y+1,le=$[b];if(0>i(z,M))b<U&&0>i(le,z)?($[ee]=le,$[b]=M,ee=b):($[ee]=z,$[Y]=M,ee=Y);else if(b<U&&0>i(le,M))$[ee]=le,$[b]=M,ee=b;else break e}}return V}function i($,V){var M=$.sortIndex-V.sortIndex;return M!==0?M:$.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,m=3,x=!1,y=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=$)r(c),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(c)}}function T($){if(_=!1,S($),!y)if(n(l)!==null)y=!0,Te(I);else{var V=n(c);V!==null&&ge(T,V.startTime-$)}}function I($,V){y=!1,_&&(_=!1,C(O),O=-1),x=!0;var M=m;try{for(S(V),p=n(l);p!==null&&(!(p.expirationTime>V)||$&&!j());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,m=p.priorityLevel;var U=ee(p.expirationTime<=V);V=e.unstable_now(),typeof U=="function"?p.callback=U:p===n(l)&&r(l),S(V)}else r(l);p=n(l)}if(p!==null)var B=!0;else{var Y=n(c);Y!==null&&ge(T,Y.startTime-V),B=!1}return B}finally{p=null,m=M,x=!1}}var P=!1,N=null,O=-1,Z=5,F=-1;function j(){return!(e.unstable_now()-F<Z)}function J(){if(N!==null){var $=e.unstable_now();F=$;var V=!0;try{V=N(!0,$)}finally{V?X():(P=!1,N=null)}}else P=!1}var X;if(typeof v=="function")X=function(){v(J)};else if(typeof MessageChannel!="undefined"){var ue=new MessageChannel,oe=ue.port2;ue.port1.onmessage=J,X=function(){oe.postMessage(null)}}else X=function(){k(J,0)};function Te($){N=$,P||(P=!0,X())}function ge($,V){O=k(function(){$(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Te(I))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var M=m;m=V;try{return $()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,V){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var M=m;m=$;try{return V()}finally{m=M}},e.unstable_scheduleCallback=function($,V,M){var ee=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ee+M:ee):M=ee,$){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=M+U,$={id:h++,callback:V,priorityLevel:$,startTime:M,expirationTime:U,sortIndex:-1},M>ee?($.sortIndex=M,t(c,$),n(l)===null&&$===n(c)&&(_?(C(O),O=-1):_=!0,ge(T,M-ee))):($.sortIndex=U,t(l,$),y||x||(y=!0,Te(I))),$},e.unstable_shouldYield=j,e.unstable_wrapCallback=function($){var V=m;return function(){var M=m;m=V;try{return $.apply(this,arguments)}finally{m=M}}}})(iT);rT.exports=iT;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sT=R.exports,ir=rT.exports;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oT=new Set,uc={};function aa(e,t){yl(e,t),yl(e+"Capture",t)}function yl(e,t){for(uc[e]=t,e=0;e<t.length;e++)oT.add(t[e])}var Gi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Sy=Object.prototype.hasOwnProperty,v6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sS={},oS={};function w6(e){return Sy.call(oS,e)?!0:Sy.call(sS,e)?!1:v6.test(e)?oS[e]=!0:(sS[e]=!0,!1)}function _6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x6(e,t,n,r){if(t===null||typeof t=="undefined"||_6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Un(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var cn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){cn[e]=new Un(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];cn[t]=new Un(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){cn[e]=new Un(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){cn[e]=new Un(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){cn[e]=new Un(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){cn[e]=new Un(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){cn[e]=new Un(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){cn[e]=new Un(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){cn[e]=new Un(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y1=/[\-:]([a-z])/g;function W1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y1,W1);cn[t]=new Un(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y1,W1);cn[t]=new Un(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y1,W1);cn[t]=new Un(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){cn[e]=new Un(e,1,!1,e.toLowerCase(),null,!1,!1)});cn.xlinkHref=new Un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){cn[e]=new Un(e,1,!1,e.toLowerCase(),null,!0,!0)});function H1(e,t,n,r){var i=cn.hasOwnProperty(t)?cn[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(x6(t,n,i,r)&&(n=null),r||i===null?w6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var as=sT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hh=Symbol.for("react.element"),La=Symbol.for("react.portal"),$a=Symbol.for("react.fragment"),G1=Symbol.for("react.strict_mode"),Ey=Symbol.for("react.profiler"),aT=Symbol.for("react.provider"),lT=Symbol.for("react.context"),q1=Symbol.for("react.forward_ref"),ky=Symbol.for("react.suspense"),Ty=Symbol.for("react.suspense_list"),K1=Symbol.for("react.memo"),ys=Symbol.for("react.lazy"),uT=Symbol.for("react.offscreen"),aS=Symbol.iterator;function gu(e){return e===null||typeof e!="object"?null:(e=aS&&e[aS]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Object.assign,o0;function Au(e){if(o0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);o0=t&&t[1]||""}return`
`+o0+e}var a0=!1;function l0(e,t){if(!e||a0)return"";a0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{a0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Au(e):""}function C6(e){switch(e.tag){case 5:return Au(e.type);case 16:return Au("Lazy");case 13:return Au("Suspense");case 19:return Au("SuspenseList");case 0:case 2:case 15:return e=l0(e.type,!1),e;case 11:return e=l0(e.type.render,!1),e;case 1:return e=l0(e.type,!0),e;default:return""}}function by(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $a:return"Fragment";case La:return"Portal";case Ey:return"Profiler";case G1:return"StrictMode";case ky:return"Suspense";case Ty:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lT:return(e.displayName||"Context")+".Consumer";case aT:return(e._context.displayName||"Context")+".Provider";case q1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K1:return t=e.displayName||null,t!==null?t:by(e.type)||"Memo";case ys:t=e._payload,e=e._init;try{return by(e(t))}catch{}}return null}function S6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return by(t);case 8:return t===G1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xs(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cT(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E6(e){var t=cT(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fh(e){e._valueTracker||(e._valueTracker=E6(e))}function dT(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cT(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xf(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dy(e,t){var n=t.checked;return xt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function lS(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xs(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hT(e,t){t=t.checked,t!=null&&H1(e,"checked",t,!1)}function Iy(e,t){hT(e,t);var n=Xs(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ay(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ay(e,t.type,Xs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uS(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ay(e,t,n){(t!=="number"||xf(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nu=Array.isArray;function Ja(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xs(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ny(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return xt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cS(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(Nu(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xs(n)}}function fT(e,t){var n=Xs(t.value),r=Xs(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dS(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pT(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oy(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pT(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ph,mT=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ph=ph||document.createElement("div"),ph.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ph.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cc(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k6=["Webkit","ms","Moz","O"];Object.keys(Vu).forEach(function(e){k6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vu[t]=Vu[e]})});function gT(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vu.hasOwnProperty(e)&&Vu[e]?(""+t).trim():t+"px"}function yT(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gT(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var T6=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ry(e,t){if(t){if(T6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function Py(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var My=null;function Q1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ly=null,Za=null,el=null;function hS(e){if(e=ad(e)){if(typeof Ly!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Vp(t),Ly(e.stateNode,e.type,t))}}function vT(e){Za?el?el.push(e):el=[e]:Za=e}function wT(){if(Za){var e=Za,t=el;if(el=Za=null,hS(e),t)for(e=0;e<t.length;e++)hS(t[e])}}function _T(e,t){return e(t)}function xT(){}var u0=!1;function CT(e,t,n){if(u0)return e(t,n);u0=!0;try{return _T(e,t,n)}finally{u0=!1,(Za!==null||el!==null)&&(xT(),wT())}}function dc(e,t){var n=e.stateNode;if(n===null)return null;var r=Vp(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var $y=!1;if(Gi)try{var yu={};Object.defineProperty(yu,"passive",{get:function(){$y=!0}}),window.addEventListener("test",yu,yu),window.removeEventListener("test",yu,yu)}catch{$y=!1}function b6(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var ju=!1,Cf=null,Sf=!1,Fy=null,D6={onError:function(e){ju=!0,Cf=e}};function I6(e,t,n,r,i,s,o,a,l){ju=!1,Cf=null,b6.apply(D6,arguments)}function A6(e,t,n,r,i,s,o,a,l){if(I6.apply(this,arguments),ju){if(ju){var c=Cf;ju=!1,Cf=null}else throw Error(G(198));Sf||(Sf=!0,Fy=c)}}function la(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ST(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fS(e){if(la(e)!==e)throw Error(G(188))}function N6(e){var t=e.alternate;if(!t){if(t=la(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fS(i),e;if(s===r)return fS(i),t;s=s.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function ET(e){return e=N6(e),e!==null?kT(e):null}function kT(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kT(e);if(t!==null)return t;e=e.sibling}return null}var TT=ir.unstable_scheduleCallback,pS=ir.unstable_cancelCallback,O6=ir.unstable_shouldYield,R6=ir.unstable_requestPaint,Ot=ir.unstable_now,P6=ir.unstable_getCurrentPriorityLevel,X1=ir.unstable_ImmediatePriority,bT=ir.unstable_UserBlockingPriority,Ef=ir.unstable_NormalPriority,M6=ir.unstable_LowPriority,DT=ir.unstable_IdlePriority,Fp=null,ni=null;function L6(e){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Fp,e,void 0,(e.current.flags&128)===128)}catch{}}var Fr=Math.clz32?Math.clz32:U6,$6=Math.log,F6=Math.LN2;function U6(e){return e>>>=0,e===0?32:31-($6(e)/F6|0)|0}var mh=64,gh=4194304;function Ou(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kf(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ou(a):(s&=o,s!==0&&(r=Ou(s)))}else o=n&~i,o!==0?r=Ou(o):s!==0&&(r=Ou(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fr(t),i=1<<n,r|=e[n],t&=~i;return r}function B6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Fr(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=B6(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Uy(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function IT(){var e=mh;return mh<<=1,(mh&4194240)===0&&(mh=64),e}function c0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sd(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fr(t),e[t]=n}function V6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fr(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function J1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fr(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var qe=0;function AT(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var NT,Z1,OT,RT,PT,By=!1,yh=[],Ps=null,Ms=null,Ls=null,hc=new Map,fc=new Map,ws=[],j6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mS(e,t){switch(e){case"focusin":case"focusout":Ps=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Ls=null;break;case"pointerover":case"pointerout":hc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fc.delete(t.pointerId)}}function vu(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ad(t),t!==null&&Z1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y6(e,t,n,r,i){switch(t){case"focusin":return Ps=vu(Ps,e,t,n,r,i),!0;case"dragenter":return Ms=vu(Ms,e,t,n,r,i),!0;case"mouseover":return Ls=vu(Ls,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return hc.set(s,vu(hc.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fc.set(s,vu(fc.get(s)||null,e,t,n,r,i)),!0}return!1}function MT(e){var t=Io(e.target);if(t!==null){var n=la(t);if(n!==null){if(t=n.tag,t===13){if(t=ST(n),t!==null){e.blockedOn=t,PT(e.priority,function(){OT(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zy(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);My=r,n.target.dispatchEvent(r),My=null}else return t=ad(n),t!==null&&Z1(t),e.blockedOn=n,!1;t.shift()}return!0}function gS(e,t,n){Gh(e)&&n.delete(t)}function W6(){By=!1,Ps!==null&&Gh(Ps)&&(Ps=null),Ms!==null&&Gh(Ms)&&(Ms=null),Ls!==null&&Gh(Ls)&&(Ls=null),hc.forEach(gS),fc.forEach(gS)}function wu(e,t){e.blockedOn===t&&(e.blockedOn=null,By||(By=!0,ir.unstable_scheduleCallback(ir.unstable_NormalPriority,W6)))}function pc(e){function t(i){return wu(i,e)}if(0<yh.length){wu(yh[0],e);for(var n=1;n<yh.length;n++){var r=yh[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ps!==null&&wu(Ps,e),Ms!==null&&wu(Ms,e),Ls!==null&&wu(Ls,e),hc.forEach(t),fc.forEach(t),n=0;n<ws.length;n++)r=ws[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ws.length&&(n=ws[0],n.blockedOn===null);)MT(n),n.blockedOn===null&&ws.shift()}var tl=as.ReactCurrentBatchConfig,Tf=!0;function H6(e,t,n,r){var i=qe,s=tl.transition;tl.transition=null;try{qe=1,ew(e,t,n,r)}finally{qe=i,tl.transition=s}}function G6(e,t,n,r){var i=qe,s=tl.transition;tl.transition=null;try{qe=4,ew(e,t,n,r)}finally{qe=i,tl.transition=s}}function ew(e,t,n,r){if(Tf){var i=zy(e,t,n,r);if(i===null)_0(e,t,r,bf,n),mS(e,r);else if(Y6(i,e,t,n,r))r.stopPropagation();else if(mS(e,r),t&4&&-1<j6.indexOf(e)){for(;i!==null;){var s=ad(i);if(s!==null&&NT(s),s=zy(e,t,n,r),s===null&&_0(e,t,r,bf,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _0(e,t,r,null,n)}}var bf=null;function zy(e,t,n,r){if(bf=null,e=Q1(r),e=Io(e),e!==null)if(t=la(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ST(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bf=e,null}function LT(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P6()){case X1:return 1;case bT:return 4;case Ef:case M6:return 16;case DT:return 536870912;default:return 16}default:return 16}}var Ts=null,tw=null,qh=null;function $T(){if(qh)return qh;var e,t=tw,n=t.length,r,i="value"in Ts?Ts.value:Ts.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return qh=i.slice(e,1<r?1-r:void 0)}function Kh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vh(){return!0}function yS(){return!1}function lr(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vh:yS,this.isPropagationStopped=yS,this}return xt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vh)},persist:function(){},isPersistent:vh}),t}var Bl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nw=lr(Bl),od=xt({},Bl,{view:0,detail:0}),q6=lr(od),d0,h0,_u,Up=xt({},od,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rw,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_u&&(_u&&e.type==="mousemove"?(d0=e.screenX-_u.screenX,h0=e.screenY-_u.screenY):h0=d0=0,_u=e),d0)},movementY:function(e){return"movementY"in e?e.movementY:h0}}),vS=lr(Up),K6=xt({},Up,{dataTransfer:0}),Q6=lr(K6),X6=xt({},od,{relatedTarget:0}),f0=lr(X6),J6=xt({},Bl,{animationName:0,elapsedTime:0,pseudoElement:0}),Z6=lr(J6),e5=xt({},Bl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t5=lr(e5),n5=xt({},Bl,{data:0}),wS=lr(n5),r5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=s5[e])?!!t[e]:!1}function rw(){return o5}var a5=xt({},od,{key:function(e){if(e.key){var t=r5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rw,charCode:function(e){return e.type==="keypress"?Kh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l5=lr(a5),u5=xt({},Up,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_S=lr(u5),c5=xt({},od,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rw}),d5=lr(c5),h5=xt({},Bl,{propertyName:0,elapsedTime:0,pseudoElement:0}),f5=lr(h5),p5=xt({},Up,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),m5=lr(p5),g5=[9,13,27,32],iw=Gi&&"CompositionEvent"in window,Yu=null;Gi&&"documentMode"in document&&(Yu=document.documentMode);var y5=Gi&&"TextEvent"in window&&!Yu,FT=Gi&&(!iw||Yu&&8<Yu&&11>=Yu),xS=String.fromCharCode(32),CS=!1;function UT(e,t){switch(e){case"keyup":return g5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function BT(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function v5(e,t){switch(e){case"compositionend":return BT(t);case"keypress":return t.which!==32?null:(CS=!0,xS);case"textInput":return e=t.data,e===xS&&CS?null:e;default:return null}}function w5(e,t){if(Fa)return e==="compositionend"||!iw&&UT(e,t)?(e=$T(),qh=tw=Ts=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return FT&&t.locale!=="ko"?null:t.data;default:return null}}var _5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function SS(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_5[e.type]:t==="textarea"}function zT(e,t,n,r){vT(r),t=Df(t,"onChange"),0<t.length&&(n=new nw("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wu=null,mc=null;function x5(e){JT(e,0)}function Bp(e){var t=za(e);if(dT(t))return e}function C5(e,t){if(e==="change")return t}var VT=!1;if(Gi){var p0;if(Gi){var m0="oninput"in document;if(!m0){var ES=document.createElement("div");ES.setAttribute("oninput","return;"),m0=typeof ES.oninput=="function"}p0=m0}else p0=!1;VT=p0&&(!document.documentMode||9<document.documentMode)}function kS(){Wu&&(Wu.detachEvent("onpropertychange",jT),mc=Wu=null)}function jT(e){if(e.propertyName==="value"&&Bp(mc)){var t=[];zT(t,mc,e,Q1(e)),CT(x5,t)}}function S5(e,t,n){e==="focusin"?(kS(),Wu=t,mc=n,Wu.attachEvent("onpropertychange",jT)):e==="focusout"&&kS()}function E5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bp(mc)}function k5(e,t){if(e==="click")return Bp(t)}function T5(e,t){if(e==="input"||e==="change")return Bp(t)}function b5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zr=typeof Object.is=="function"?Object.is:b5;function gc(e,t){if(zr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sy.call(t,i)||!zr(e[i],t[i]))return!1}return!0}function TS(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bS(e,t){var n=TS(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=TS(n)}}function YT(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?YT(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function WT(){for(var e=window,t=xf();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xf(e.document)}return t}function sw(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D5(e){var t=WT(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&YT(n.ownerDocument.documentElement,n)){if(r!==null&&sw(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=bS(n,s);var o=bS(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I5=Gi&&"documentMode"in document&&11>=document.documentMode,Ua=null,Vy=null,Hu=null,jy=!1;function DS(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jy||Ua==null||Ua!==xf(r)||(r=Ua,"selectionStart"in r&&sw(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hu&&gc(Hu,r)||(Hu=r,r=Df(Vy,"onSelect"),0<r.length&&(t=new nw("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ua)))}function wh(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ba={animationend:wh("Animation","AnimationEnd"),animationiteration:wh("Animation","AnimationIteration"),animationstart:wh("Animation","AnimationStart"),transitionend:wh("Transition","TransitionEnd")},g0={},HT={};Gi&&(HT=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function zp(e){if(g0[e])return g0[e];if(!Ba[e])return e;var t=Ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in HT)return g0[e]=t[n];return e}var GT=zp("animationend"),qT=zp("animationiteration"),KT=zp("animationstart"),QT=zp("transitionend"),XT=new Map,IS="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ao(e,t){XT.set(e,t),aa(t,[e])}for(var y0=0;y0<IS.length;y0++){var v0=IS[y0],A5=v0.toLowerCase(),N5=v0[0].toUpperCase()+v0.slice(1);ao(A5,"on"+N5)}ao(GT,"onAnimationEnd");ao(qT,"onAnimationIteration");ao(KT,"onAnimationStart");ao("dblclick","onDoubleClick");ao("focusin","onFocus");ao("focusout","onBlur");ao(QT,"onTransitionEnd");yl("onMouseEnter",["mouseout","mouseover"]);yl("onMouseLeave",["mouseout","mouseover"]);yl("onPointerEnter",["pointerout","pointerover"]);yl("onPointerLeave",["pointerout","pointerover"]);aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));aa("onBeforeInput",["compositionend","keypress","textInput","paste"]);aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O5=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ru));function AS(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,A6(r,t,void 0,e),e.currentTarget=null}function JT(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;AS(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;AS(i,a,c),s=l}}}if(Sf)throw e=Fy,Sf=!1,Fy=null,e}function ot(e,t){var n=t[qy];n===void 0&&(n=t[qy]=new Set);var r=e+"__bubble";n.has(r)||(ZT(t,e,2,!1),n.add(r))}function w0(e,t,n){var r=0;t&&(r|=4),ZT(n,e,r,t)}var _h="_reactListening"+Math.random().toString(36).slice(2);function yc(e){if(!e[_h]){e[_h]=!0,oT.forEach(function(n){n!=="selectionchange"&&(O5.has(n)||w0(n,!1,e),w0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_h]||(t[_h]=!0,w0("selectionchange",!1,t))}}function ZT(e,t,n,r){switch(LT(t)){case 1:var i=H6;break;case 4:i=G6;break;default:i=ew}n=i.bind(null,t,n,e),i=void 0,!$y||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _0(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Io(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}CT(function(){var c=s,h=Q1(n),p=[];e:{var m=XT.get(e);if(m!==void 0){var x=nw,y=e;switch(e){case"keypress":if(Kh(n)===0)break e;case"keydown":case"keyup":x=l5;break;case"focusin":y="focus",x=f0;break;case"focusout":y="blur",x=f0;break;case"beforeblur":case"afterblur":x=f0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Q6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=d5;break;case GT:case qT:case KT:x=Z6;break;case QT:x=f5;break;case"scroll":x=q6;break;case"wheel":x=m5;break;case"copy":case"cut":case"paste":x=t5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=_S}var _=(t&4)!==0,k=!_&&e==="scroll",C=_?m!==null?m+"Capture":null:m;_=[];for(var v=c,S;v!==null;){S=v;var T=S.stateNode;if(S.tag===5&&T!==null&&(S=T,C!==null&&(T=dc(v,C),T!=null&&_.push(vc(v,T,S)))),k)break;v=v.return}0<_.length&&(m=new x(m,y,null,n,h),p.push({event:m,listeners:_}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==My&&(y=n.relatedTarget||n.fromElement)&&(Io(y)||y[qi]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?Io(y):null,y!==null&&(k=la(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(_=vS,T="onMouseLeave",C="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_=_S,T="onPointerLeave",C="onPointerEnter",v="pointer"),k=x==null?m:za(x),S=y==null?m:za(y),m=new _(T,v+"leave",x,n,h),m.target=k,m.relatedTarget=S,T=null,Io(h)===c&&(_=new _(C,v+"enter",y,n,h),_.target=S,_.relatedTarget=k,T=_),k=T,x&&y)t:{for(_=x,C=y,v=0,S=_;S;S=Da(S))v++;for(S=0,T=C;T;T=Da(T))S++;for(;0<v-S;)_=Da(_),v--;for(;0<S-v;)C=Da(C),S--;for(;v--;){if(_===C||C!==null&&_===C.alternate)break t;_=Da(_),C=Da(C)}_=null}else _=null;x!==null&&NS(p,m,x,_,!1),y!==null&&k!==null&&NS(p,k,y,_,!0)}}e:{if(m=c?za(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var I=C5;else if(SS(m))if(VT)I=T5;else{I=E5;var P=S5}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=k5);if(I&&(I=I(e,c))){zT(p,I,n,h);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ay(m,"number",m.value)}switch(P=c?za(c):window,e){case"focusin":(SS(P)||P.contentEditable==="true")&&(Ua=P,Vy=c,Hu=null);break;case"focusout":Hu=Vy=Ua=null;break;case"mousedown":jy=!0;break;case"contextmenu":case"mouseup":case"dragend":jy=!1,DS(p,n,h);break;case"selectionchange":if(I5)break;case"keydown":case"keyup":DS(p,n,h)}var N;if(iw)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Fa?UT(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(FT&&n.locale!=="ko"&&(Fa||O!=="onCompositionStart"?O==="onCompositionEnd"&&Fa&&(N=$T()):(Ts=h,tw="value"in Ts?Ts.value:Ts.textContent,Fa=!0)),P=Df(c,O),0<P.length&&(O=new wS(O,e,null,n,h),p.push({event:O,listeners:P}),N?O.data=N:(N=BT(n),N!==null&&(O.data=N)))),(N=y5?v5(e,n):w5(e,n))&&(c=Df(c,"onBeforeInput"),0<c.length&&(h=new wS("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=N))}JT(p,t)})}function vc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Df(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=dc(e,n),s!=null&&r.unshift(vc(e,s,i)),s=dc(e,t),s!=null&&r.push(vc(e,s,i))),e=e.return}return r}function Da(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function NS(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=dc(n,s),l!=null&&o.unshift(vc(n,l,a))):i||(l=dc(n,s),l!=null&&o.push(vc(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var R5=/\r\n?/g,P5=/\u0000|\uFFFD/g;function OS(e){return(typeof e=="string"?e:""+e).replace(R5,`
`).replace(P5,"")}function xh(e,t,n){if(t=OS(t),OS(e)!==t&&n)throw Error(G(425))}function If(){}var Yy=null,Wy=null;function Hy(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gy=typeof setTimeout=="function"?setTimeout:void 0,M5=typeof clearTimeout=="function"?clearTimeout:void 0,RS=typeof Promise=="function"?Promise:void 0,L5=typeof queueMicrotask=="function"?queueMicrotask:typeof RS!="undefined"?function(e){return RS.resolve(null).then(e).catch($5)}:Gy;function $5(e){setTimeout(function(){throw e})}function x0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pc(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pc(t)}function $s(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function PS(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zl=Math.random().toString(36).slice(2),Qr="__reactFiber$"+zl,wc="__reactProps$"+zl,qi="__reactContainer$"+zl,qy="__reactEvents$"+zl,F5="__reactListeners$"+zl,U5="__reactHandles$"+zl;function Io(e){var t=e[Qr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qi]||n[Qr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=PS(e);e!==null;){if(n=e[Qr])return n;e=PS(e)}return t}e=n,n=e.parentNode}return null}function ad(e){return e=e[Qr]||e[qi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function za(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Vp(e){return e[wc]||null}var Ky=[],Va=-1;function lo(e){return{current:e}}function at(e){0>Va||(e.current=Ky[Va],Ky[Va]=null,Va--)}function nt(e,t){Va++,Ky[Va]=e.current,e.current=t}var Js={},kn=lo(Js),Wn=lo(!1),Yo=Js;function vl(e,t){var n=e.type.contextTypes;if(!n)return Js;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Hn(e){return e=e.childContextTypes,e!=null}function Af(){at(Wn),at(kn)}function MS(e,t,n){if(kn.current!==Js)throw Error(G(168));nt(kn,t),nt(Wn,n)}function eb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,S6(e)||"Unknown",i));return xt({},n,r)}function Nf(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Js,Yo=kn.current,nt(kn,e),nt(Wn,Wn.current),!0}function LS(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=eb(e,t,Yo),r.__reactInternalMemoizedMergedChildContext=e,at(Wn),at(kn),nt(kn,e)):at(Wn),nt(Wn,n)}var Ai=null,jp=!1,C0=!1;function tb(e){Ai===null?Ai=[e]:Ai.push(e)}function B5(e){jp=!0,tb(e)}function uo(){if(!C0&&Ai!==null){C0=!0;var e=0,t=qe;try{var n=Ai;for(qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ai=null,jp=!1}catch(i){throw Ai!==null&&(Ai=Ai.slice(e+1)),TT(X1,uo),i}finally{qe=t,C0=!1}}return null}var ja=[],Ya=0,Of=null,Rf=0,hr=[],fr=0,Wo=null,Ri=1,Pi="";function ko(e,t){ja[Ya++]=Rf,ja[Ya++]=Of,Of=e,Rf=t}function nb(e,t,n){hr[fr++]=Ri,hr[fr++]=Pi,hr[fr++]=Wo,Wo=e;var r=Ri;e=Pi;var i=32-Fr(r)-1;r&=~(1<<i),n+=1;var s=32-Fr(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ri=1<<32-Fr(t)+i|n<<i|r,Pi=s+e}else Ri=1<<s|n<<i|r,Pi=e}function ow(e){e.return!==null&&(ko(e,1),nb(e,1,0))}function aw(e){for(;e===Of;)Of=ja[--Ya],ja[Ya]=null,Rf=ja[--Ya],ja[Ya]=null;for(;e===Wo;)Wo=hr[--fr],hr[fr]=null,Pi=hr[--fr],hr[fr]=null,Ri=hr[--fr],hr[fr]=null}var rr=null,er=null,mt=!1,Rr=null;function rb(e,t){var n=yr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $S(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rr=e,er=$s(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rr=e,er=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wo!==null?{id:Ri,overflow:Pi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rr=e,er=null,!0):!1;default:return!1}}function Qy(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xy(e){if(mt){var t=er;if(t){var n=t;if(!$S(e,t)){if(Qy(e))throw Error(G(418));t=$s(n.nextSibling);var r=rr;t&&$S(e,t)?rb(r,n):(e.flags=e.flags&-4097|2,mt=!1,rr=e)}}else{if(Qy(e))throw Error(G(418));e.flags=e.flags&-4097|2,mt=!1,rr=e}}}function FS(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rr=e}function Ch(e){if(e!==rr)return!1;if(!mt)return FS(e),mt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hy(e.type,e.memoizedProps)),t&&(t=er)){if(Qy(e))throw ib(),Error(G(418));for(;t;)rb(e,t),t=$s(t.nextSibling)}if(FS(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){er=$s(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}er=null}}else er=rr?$s(e.stateNode.nextSibling):null;return!0}function ib(){for(var e=er;e;)e=$s(e.nextSibling)}function wl(){er=rr=null,mt=!1}function lw(e){Rr===null?Rr=[e]:Rr.push(e)}var z5=as.ReactCurrentBatchConfig;function Nr(e,t){if(e&&e.defaultProps){t=xt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Pf=lo(null),Mf=null,Wa=null,uw=null;function cw(){uw=Wa=Mf=null}function dw(e){var t=Pf.current;at(Pf),e._currentValue=t}function Jy(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nl(e,t){Mf=e,uw=Wa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(jn=!0),e.firstContext=null)}function _r(e){var t=e._currentValue;if(uw!==e)if(e={context:e,memoizedValue:t,next:null},Wa===null){if(Mf===null)throw Error(G(308));Wa=e,Mf.dependencies={lanes:0,firstContext:e}}else Wa=Wa.next=e;return t}var Ao=null;function hw(e){Ao===null?Ao=[e]:Ao.push(e)}function sb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hw(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ki(e,r)}function Ki(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vs=!1;function fw(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ob(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ji(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fs(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ki(e,n)}return i=r.interleaved,i===null?(t.next=t,hw(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ki(e,n)}function Qh(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,J1(e,n)}}function US(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lf(e,t,n,r){var i=e.updateQueue;vs=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,x=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(m=t,x=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(x,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(x,p,m):y,m==null)break e;p=xt({},p,m);break e;case 2:vs=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,l=p):h=h.next=x,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Go|=o,e.lanes=o,e.memoizedState=p}}function BS(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var ab=new sT.Component().refs;function Zy(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yp={isMounted:function(e){return(e=e._reactInternals)?la(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ln(),i=Bs(e),s=ji(r,i);s.payload=t,n!=null&&(s.callback=n),t=Fs(e,s,i),t!==null&&(Ur(t,e,i,r),Qh(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ln(),i=Bs(e),s=ji(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Fs(e,s,i),t!==null&&(Ur(t,e,i,r),Qh(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ln(),r=Bs(e),i=ji(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fs(e,i,r),t!==null&&(Ur(t,e,r,n),Qh(t,e,r))}};function zS(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!gc(n,r)||!gc(i,s):!0}function lb(e,t,n){var r=!1,i=Js,s=t.contextType;return typeof s=="object"&&s!==null?s=_r(s):(i=Hn(t)?Yo:kn.current,r=t.contextTypes,s=(r=r!=null)?vl(e,i):Js),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yp,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function VS(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yp.enqueueReplaceState(t,t.state,null)}function ev(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ab,fw(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_r(s):(s=Hn(t)?Yo:kn.current,i.context=vl(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Zy(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yp.enqueueReplaceState(i,i.state,null),Lf(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xu(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===ab&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function Sh(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jS(e){var t=e._init;return t(e._payload)}function ub(e){function t(C,v){if(e){var S=C.deletions;S===null?(C.deletions=[v],C.flags|=16):S.push(v)}}function n(C,v){if(!e)return null;for(;v!==null;)t(C,v),v=v.sibling;return null}function r(C,v){for(C=new Map;v!==null;)v.key!==null?C.set(v.key,v):C.set(v.index,v),v=v.sibling;return C}function i(C,v){return C=zs(C,v),C.index=0,C.sibling=null,C}function s(C,v,S){return C.index=S,e?(S=C.alternate,S!==null?(S=S.index,S<v?(C.flags|=2,v):S):(C.flags|=2,v)):(C.flags|=1048576,v)}function o(C){return e&&C.alternate===null&&(C.flags|=2),C}function a(C,v,S,T){return v===null||v.tag!==6?(v=I0(S,C.mode,T),v.return=C,v):(v=i(v,S),v.return=C,v)}function l(C,v,S,T){var I=S.type;return I===$a?h(C,v,S.props.children,T,S.key):v!==null&&(v.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ys&&jS(I)===v.type)?(T=i(v,S.props),T.ref=xu(C,v,S),T.return=C,T):(T=nf(S.type,S.key,S.props,null,C.mode,T),T.ref=xu(C,v,S),T.return=C,T)}function c(C,v,S,T){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=A0(S,C.mode,T),v.return=C,v):(v=i(v,S.children||[]),v.return=C,v)}function h(C,v,S,T,I){return v===null||v.tag!==7?(v=Fo(S,C.mode,T,I),v.return=C,v):(v=i(v,S),v.return=C,v)}function p(C,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=I0(""+v,C.mode,S),v.return=C,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hh:return S=nf(v.type,v.key,v.props,null,C.mode,S),S.ref=xu(C,null,v),S.return=C,S;case La:return v=A0(v,C.mode,S),v.return=C,v;case ys:var T=v._init;return p(C,T(v._payload),S)}if(Nu(v)||gu(v))return v=Fo(v,C.mode,S,null),v.return=C,v;Sh(C,v)}return null}function m(C,v,S,T){var I=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return I!==null?null:a(C,v,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case hh:return S.key===I?l(C,v,S,T):null;case La:return S.key===I?c(C,v,S,T):null;case ys:return I=S._init,m(C,v,I(S._payload),T)}if(Nu(S)||gu(S))return I!==null?null:h(C,v,S,T,null);Sh(C,S)}return null}function x(C,v,S,T,I){if(typeof T=="string"&&T!==""||typeof T=="number")return C=C.get(S)||null,a(v,C,""+T,I);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case hh:return C=C.get(T.key===null?S:T.key)||null,l(v,C,T,I);case La:return C=C.get(T.key===null?S:T.key)||null,c(v,C,T,I);case ys:var P=T._init;return x(C,v,S,P(T._payload),I)}if(Nu(T)||gu(T))return C=C.get(S)||null,h(v,C,T,I,null);Sh(v,T)}return null}function y(C,v,S,T){for(var I=null,P=null,N=v,O=v=0,Z=null;N!==null&&O<S.length;O++){N.index>O?(Z=N,N=null):Z=N.sibling;var F=m(C,N,S[O],T);if(F===null){N===null&&(N=Z);break}e&&N&&F.alternate===null&&t(C,N),v=s(F,v,O),P===null?I=F:P.sibling=F,P=F,N=Z}if(O===S.length)return n(C,N),mt&&ko(C,O),I;if(N===null){for(;O<S.length;O++)N=p(C,S[O],T),N!==null&&(v=s(N,v,O),P===null?I=N:P.sibling=N,P=N);return mt&&ko(C,O),I}for(N=r(C,N);O<S.length;O++)Z=x(N,C,O,S[O],T),Z!==null&&(e&&Z.alternate!==null&&N.delete(Z.key===null?O:Z.key),v=s(Z,v,O),P===null?I=Z:P.sibling=Z,P=Z);return e&&N.forEach(function(j){return t(C,j)}),mt&&ko(C,O),I}function _(C,v,S,T){var I=gu(S);if(typeof I!="function")throw Error(G(150));if(S=I.call(S),S==null)throw Error(G(151));for(var P=I=null,N=v,O=v=0,Z=null,F=S.next();N!==null&&!F.done;O++,F=S.next()){N.index>O?(Z=N,N=null):Z=N.sibling;var j=m(C,N,F.value,T);if(j===null){N===null&&(N=Z);break}e&&N&&j.alternate===null&&t(C,N),v=s(j,v,O),P===null?I=j:P.sibling=j,P=j,N=Z}if(F.done)return n(C,N),mt&&ko(C,O),I;if(N===null){for(;!F.done;O++,F=S.next())F=p(C,F.value,T),F!==null&&(v=s(F,v,O),P===null?I=F:P.sibling=F,P=F);return mt&&ko(C,O),I}for(N=r(C,N);!F.done;O++,F=S.next())F=x(N,C,O,F.value,T),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?O:F.key),v=s(F,v,O),P===null?I=F:P.sibling=F,P=F);return e&&N.forEach(function(J){return t(C,J)}),mt&&ko(C,O),I}function k(C,v,S,T){if(typeof S=="object"&&S!==null&&S.type===$a&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case hh:e:{for(var I=S.key,P=v;P!==null;){if(P.key===I){if(I=S.type,I===$a){if(P.tag===7){n(C,P.sibling),v=i(P,S.props.children),v.return=C,C=v;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ys&&jS(I)===P.type){n(C,P.sibling),v=i(P,S.props),v.ref=xu(C,P,S),v.return=C,C=v;break e}n(C,P);break}else t(C,P);P=P.sibling}S.type===$a?(v=Fo(S.props.children,C.mode,T,S.key),v.return=C,C=v):(T=nf(S.type,S.key,S.props,null,C.mode,T),T.ref=xu(C,v,S),T.return=C,C=T)}return o(C);case La:e:{for(P=S.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(C,v.sibling),v=i(v,S.children||[]),v.return=C,C=v;break e}else{n(C,v);break}else t(C,v);v=v.sibling}v=A0(S,C.mode,T),v.return=C,C=v}return o(C);case ys:return P=S._init,k(C,v,P(S._payload),T)}if(Nu(S))return y(C,v,S,T);if(gu(S))return _(C,v,S,T);Sh(C,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(C,v.sibling),v=i(v,S),v.return=C,C=v):(n(C,v),v=I0(S,C.mode,T),v.return=C,C=v),o(C)):n(C,v)}return k}var _l=ub(!0),cb=ub(!1),ld={},ri=lo(ld),_c=lo(ld),xc=lo(ld);function No(e){if(e===ld)throw Error(G(174));return e}function pw(e,t){switch(nt(xc,t),nt(_c,e),nt(ri,ld),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oy(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oy(t,e)}at(ri),nt(ri,t)}function xl(){at(ri),at(_c),at(xc)}function db(e){No(xc.current);var t=No(ri.current),n=Oy(t,e.type);t!==n&&(nt(_c,e),nt(ri,n))}function mw(e){_c.current===e&&(at(ri),at(_c))}var wt=lo(0);function $f(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var S0=[];function gw(){for(var e=0;e<S0.length;e++)S0[e]._workInProgressVersionPrimary=null;S0.length=0}var Xh=as.ReactCurrentDispatcher,E0=as.ReactCurrentBatchConfig,Ho=0,_t=null,Vt=null,Jt=null,Ff=!1,Gu=!1,Cc=0,V5=0;function fn(){throw Error(G(321))}function yw(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zr(e[n],t[n]))return!1;return!0}function vw(e,t,n,r,i,s){if(Ho=s,_t=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xh.current=e===null||e.memoizedState===null?H5:G5,e=n(r,i),Gu){s=0;do{if(Gu=!1,Cc=0,25<=s)throw Error(G(301));s+=1,Jt=Vt=null,t.updateQueue=null,Xh.current=q5,e=n(r,i)}while(Gu)}if(Xh.current=Uf,t=Vt!==null&&Vt.next!==null,Ho=0,Jt=Vt=_t=null,Ff=!1,t)throw Error(G(300));return e}function ww(){var e=Cc!==0;return Cc=0,e}function Kr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?_t.memoizedState=Jt=e:Jt=Jt.next=e,Jt}function xr(){if(Vt===null){var e=_t.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var t=Jt===null?_t.memoizedState:Jt.next;if(t!==null)Jt=t,Vt=e;else{if(e===null)throw Error(G(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Jt===null?_t.memoizedState=Jt=e:Jt=Jt.next=e}return Jt}function Sc(e,t){return typeof t=="function"?t(e):t}function k0(e){var t=xr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=Vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ho&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,_t.lanes|=h,Go|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,zr(r,t.memoizedState)||(jn=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,_t.lanes|=s,Go|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function T0(e){var t=xr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);zr(s,t.memoizedState)||(jn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function hb(){}function fb(e,t){var n=_t,r=xr(),i=t(),s=!zr(r.memoizedState,i);if(s&&(r.memoizedState=i,jn=!0),r=r.queue,_w(gb.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Jt!==null&&Jt.memoizedState.tag&1){if(n.flags|=2048,Ec(9,mb.bind(null,n,r,i,t),void 0,null),en===null)throw Error(G(349));(Ho&30)!==0||pb(n,t,i)}return i}function pb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mb(e,t,n,r){t.value=n,t.getSnapshot=r,yb(t)&&vb(e)}function gb(e,t,n){return n(function(){yb(t)&&vb(e)})}function yb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zr(e,n)}catch{return!0}}function vb(e){var t=Ki(e,1);t!==null&&Ur(t,e,1,-1)}function YS(e){var t=Kr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sc,lastRenderedState:e},t.queue=e,e=e.dispatch=W5.bind(null,_t,e),[t.memoizedState,e]}function Ec(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wb(){return xr().memoizedState}function Jh(e,t,n,r){var i=Kr();_t.flags|=e,i.memoizedState=Ec(1|t,n,void 0,r===void 0?null:r)}function Wp(e,t,n,r){var i=xr();r=r===void 0?null:r;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,r!==null&&yw(r,o.deps)){i.memoizedState=Ec(t,n,s,r);return}}_t.flags|=e,i.memoizedState=Ec(1|t,n,s,r)}function WS(e,t){return Jh(8390656,8,e,t)}function _w(e,t){return Wp(2048,8,e,t)}function _b(e,t){return Wp(4,2,e,t)}function xb(e,t){return Wp(4,4,e,t)}function Cb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sb(e,t,n){return n=n!=null?n.concat([e]):null,Wp(4,4,Cb.bind(null,t,e),n)}function xw(){}function Eb(e,t){var n=xr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yw(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kb(e,t){var n=xr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yw(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tb(e,t,n){return(Ho&21)===0?(e.baseState&&(e.baseState=!1,jn=!0),e.memoizedState=n):(zr(n,t)||(n=IT(),_t.lanes|=n,Go|=n,e.baseState=!0),t)}function j5(e,t){var n=qe;qe=n!==0&&4>n?n:4,e(!0);var r=E0.transition;E0.transition={};try{e(!1),t()}finally{qe=n,E0.transition=r}}function bb(){return xr().memoizedState}function Y5(e,t,n){var r=Bs(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Db(e))Ib(t,n);else if(n=sb(e,t,n,r),n!==null){var i=Ln();Ur(n,e,r,i),Ab(n,t,r)}}function W5(e,t,n){var r=Bs(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Db(e))Ib(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zr(a,o)){var l=t.interleaved;l===null?(i.next=i,hw(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=sb(e,t,i,r),n!==null&&(i=Ln(),Ur(n,e,r,i),Ab(n,t,r))}}function Db(e){var t=e.alternate;return e===_t||t!==null&&t===_t}function Ib(e,t){Gu=Ff=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ab(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,J1(e,n)}}var Uf={readContext:_r,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},H5={readContext:_r,useCallback:function(e,t){return Kr().memoizedState=[e,t===void 0?null:t],e},useContext:_r,useEffect:WS,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jh(4194308,4,Cb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jh(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jh(4,2,e,t)},useMemo:function(e,t){var n=Kr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y5.bind(null,_t,e),[r.memoizedState,e]},useRef:function(e){var t=Kr();return e={current:e},t.memoizedState=e},useState:YS,useDebugValue:xw,useDeferredValue:function(e){return Kr().memoizedState=e},useTransition:function(){var e=YS(!1),t=e[0];return e=j5.bind(null,e[1]),Kr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_t,i=Kr();if(mt){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),en===null)throw Error(G(349));(Ho&30)!==0||pb(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,WS(gb.bind(null,r,s,e),[e]),r.flags|=2048,Ec(9,mb.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Kr(),t=en.identifierPrefix;if(mt){var n=Pi,r=Ri;n=(r&~(1<<32-Fr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=V5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G5={readContext:_r,useCallback:Eb,useContext:_r,useEffect:_w,useImperativeHandle:Sb,useInsertionEffect:_b,useLayoutEffect:xb,useMemo:kb,useReducer:k0,useRef:wb,useState:function(){return k0(Sc)},useDebugValue:xw,useDeferredValue:function(e){var t=xr();return Tb(t,Vt.memoizedState,e)},useTransition:function(){var e=k0(Sc)[0],t=xr().memoizedState;return[e,t]},useMutableSource:hb,useSyncExternalStore:fb,useId:bb,unstable_isNewReconciler:!1},q5={readContext:_r,useCallback:Eb,useContext:_r,useEffect:_w,useImperativeHandle:Sb,useInsertionEffect:_b,useLayoutEffect:xb,useMemo:kb,useReducer:T0,useRef:wb,useState:function(){return T0(Sc)},useDebugValue:xw,useDeferredValue:function(e){var t=xr();return Vt===null?t.memoizedState=e:Tb(t,Vt.memoizedState,e)},useTransition:function(){var e=T0(Sc)[0],t=xr().memoizedState;return[e,t]},useMutableSource:hb,useSyncExternalStore:fb,useId:bb,unstable_isNewReconciler:!1};function Cl(e,t){try{var n="",r=t;do n+=C6(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function b0(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function tv(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var K5=typeof WeakMap=="function"?WeakMap:Map;function Nb(e,t,n){n=ji(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zf||(zf=!0,dv=r),tv(e,t)},n}function Ob(e,t,n){n=ji(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){tv(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tv(e,t),typeof r!="function"&&(Us===null?Us=new Set([this]):Us.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function HS(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new K5;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uL.bind(null,e,t,n),t.then(e,e))}function GS(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qS(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ji(-1,1),t.tag=2,Fs(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Q5=as.ReactCurrentOwner,jn=!1;function Rn(e,t,n,r){t.child=e===null?cb(t,null,n,r):_l(t,e.child,n,r)}function KS(e,t,n,r,i){n=n.render;var s=t.ref;return nl(t,i),r=vw(e,t,n,r,s,i),n=ww(),e!==null&&!jn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qi(e,t,i)):(mt&&n&&ow(t),t.flags|=1,Rn(e,t,r,i),t.child)}function QS(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Iw(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Rb(e,t,s,r,i)):(e=nf(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gc,n(o,r)&&e.ref===t.ref)return Qi(e,t,i)}return t.flags|=1,e=zs(s,r),e.ref=t.ref,e.return=t,t.child=e}function Rb(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(gc(s,r)&&e.ref===t.ref)if(jn=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(jn=!0);else return t.lanes=e.lanes,Qi(e,t,i)}return nv(e,t,n,r,i)}function Pb(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ga,Jn),Jn|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,nt(Ga,Jn),Jn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,nt(Ga,Jn),Jn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,nt(Ga,Jn),Jn|=r;return Rn(e,t,i,n),t.child}function Mb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function nv(e,t,n,r,i){var s=Hn(n)?Yo:kn.current;return s=vl(t,s),nl(t,i),n=vw(e,t,n,r,s,i),r=ww(),e!==null&&!jn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qi(e,t,i)):(mt&&r&&ow(t),t.flags|=1,Rn(e,t,n,i),t.child)}function XS(e,t,n,r,i){if(Hn(n)){var s=!0;Nf(t)}else s=!1;if(nl(t,i),t.stateNode===null)Zh(e,t),lb(t,n,r),ev(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_r(c):(c=Hn(n)?Yo:kn.current,c=vl(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&VS(t,o,r,c),vs=!1;var m=t.memoizedState;o.state=m,Lf(t,r,o,i),l=t.memoizedState,a!==r||m!==l||Wn.current||vs?(typeof h=="function"&&(Zy(t,n,h,r),l=t.memoizedState),(a=vs||zS(t,n,a,r,m,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ob(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Nr(t.type,a),o.props=c,p=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_r(l):(l=Hn(n)?Yo:kn.current,l=vl(t,l));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&VS(t,o,r,l),vs=!1,m=t.memoizedState,o.state=m,Lf(t,r,o,i);var y=t.memoizedState;a!==p||m!==y||Wn.current||vs?(typeof x=="function"&&(Zy(t,n,x,r),y=t.memoizedState),(c=vs||zS(t,n,c,r,m,y,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return rv(e,t,n,r,s,i)}function rv(e,t,n,r,i,s){Mb(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&LS(t,n,!1),Qi(e,t,s);r=t.stateNode,Q5.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=_l(t,e.child,null,s),t.child=_l(t,null,a,s)):Rn(e,t,a,s),t.memoizedState=r.state,i&&LS(t,n,!0),t.child}function Lb(e){var t=e.stateNode;t.pendingContext?MS(e,t.pendingContext,t.pendingContext!==t.context):t.context&&MS(e,t.context,!1),pw(e,t.containerInfo)}function JS(e,t,n,r,i){return wl(),lw(i),t.flags|=256,Rn(e,t,n,r),t.child}var iv={dehydrated:null,treeContext:null,retryLane:0};function sv(e){return{baseLanes:e,cachePool:null,transitions:null}}function $b(e,t,n){var r=t.pendingProps,i=wt.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),nt(wt,i&1),e===null)return Xy(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qp(o,r,0,null),e=Fo(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=sv(n),t.memoizedState=iv,e):Cw(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return X5(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=zs(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zs(a,s):(s=Fo(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?sv(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=iv,r}return s=e.child,e=s.sibling,r=zs(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cw(e,t){return t=qp({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Eh(e,t,n,r){return r!==null&&lw(r),_l(t,e.child,null,n),e=Cw(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function X5(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=b0(Error(G(422))),Eh(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=qp({mode:"visible",children:r.children},i,0,null),s=Fo(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&_l(t,e.child,null,o),t.child.memoizedState=sv(o),t.memoizedState=iv,s);if((t.mode&1)===0)return Eh(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(G(419)),r=b0(s,r,void 0),Eh(e,t,o,r)}if(a=(o&e.childLanes)!==0,jn||a){if(r=en,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ki(e,i),Ur(r,e,i,-1))}return Dw(),r=b0(Error(G(421))),Eh(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cL.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,er=$s(i.nextSibling),rr=t,mt=!0,Rr=null,e!==null&&(hr[fr++]=Ri,hr[fr++]=Pi,hr[fr++]=Wo,Ri=e.id,Pi=e.overflow,Wo=t),t=Cw(t,r.children),t.flags|=4096,t)}function ZS(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jy(e.return,t,n)}function D0(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fb(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Rn(e,t,r.children,n),r=wt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ZS(e,n,t);else if(e.tag===19)ZS(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(nt(wt,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$f(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),D0(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$f(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}D0(t,!0,n,null,s);break;case"together":D0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zh(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Go|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=zs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function J5(e,t,n){switch(t.tag){case 3:Lb(t),wl();break;case 5:db(t);break;case 1:Hn(t.type)&&Nf(t);break;case 4:pw(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;nt(Pf,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(nt(wt,wt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?$b(e,t,n):(nt(wt,wt.current&1),e=Qi(e,t,n),e!==null?e.sibling:null);nt(wt,wt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Fb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),nt(wt,wt.current),r)break;return null;case 22:case 23:return t.lanes=0,Pb(e,t,n)}return Qi(e,t,n)}var Ub,ov,Bb,zb;Ub=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ov=function(){};Bb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,No(ri.current);var s=null;switch(n){case"input":i=Dy(e,i),r=Dy(e,r),s=[];break;case"select":i=xt({},i,{value:void 0}),r=xt({},r,{value:void 0}),s=[];break;case"textarea":i=Ny(e,i),r=Ny(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=If)}Ry(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(uc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(uc.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};zb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cu(e,t){if(!mt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Z5(e,t,n){var r=t.pendingProps;switch(aw(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(t),null;case 1:return Hn(t.type)&&Af(),pn(t),null;case 3:return r=t.stateNode,xl(),at(Wn),at(kn),gw(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ch(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rr!==null&&(pv(Rr),Rr=null))),ov(e,t),pn(t),null;case 5:mw(t);var i=No(xc.current);if(n=t.type,e!==null&&t.stateNode!=null)Bb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return pn(t),null}if(e=No(ri.current),Ch(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Qr]=t,r[wc]=s,e=(t.mode&1)!==0,n){case"dialog":ot("cancel",r),ot("close",r);break;case"iframe":case"object":case"embed":ot("load",r);break;case"video":case"audio":for(i=0;i<Ru.length;i++)ot(Ru[i],r);break;case"source":ot("error",r);break;case"img":case"image":case"link":ot("error",r),ot("load",r);break;case"details":ot("toggle",r);break;case"input":lS(r,s),ot("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ot("invalid",r);break;case"textarea":cS(r,s),ot("invalid",r)}Ry(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xh(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xh(r.textContent,a,e),i=["children",""+a]):uc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",r)}switch(n){case"input":fh(r),uS(r,s,!0);break;case"textarea":fh(r),dS(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=If)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pT(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qr]=t,e[wc]=r,Ub(e,t,!1,!1),t.stateNode=e;e:{switch(o=Py(n,r),n){case"dialog":ot("cancel",e),ot("close",e),i=r;break;case"iframe":case"object":case"embed":ot("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ru.length;i++)ot(Ru[i],e);i=r;break;case"source":ot("error",e),i=r;break;case"img":case"image":case"link":ot("error",e),ot("load",e),i=r;break;case"details":ot("toggle",e),i=r;break;case"input":lS(e,r),i=Dy(e,r),ot("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xt({},r,{value:void 0}),ot("invalid",e);break;case"textarea":cS(e,r),i=Ny(e,r),ot("invalid",e);break;default:i=r}Ry(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yT(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mT(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&cc(e,l):typeof l=="number"&&cc(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",e):l!=null&&H1(e,s,l,o))}switch(n){case"input":fh(e),uS(e,r,!1);break;case"textarea":fh(e),dS(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xs(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ja(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ja(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=If)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pn(t),null;case 6:if(e&&t.stateNode!=null)zb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=No(xc.current),No(ri.current),Ch(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qr]=t,(s=r.nodeValue!==n)&&(e=rr,e!==null))switch(e.tag){case 3:xh(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xh(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qr]=t,t.stateNode=r}return pn(t),null;case 13:if(at(wt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(mt&&er!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ib(),wl(),t.flags|=98560,s=!1;else if(s=Ch(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(G(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[Qr]=t}else wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pn(t),s=!1}else Rr!==null&&(pv(Rr),Rr=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(wt.current&1)!==0?Yt===0&&(Yt=3):Dw())),t.updateQueue!==null&&(t.flags|=4),pn(t),null);case 4:return xl(),ov(e,t),e===null&&yc(t.stateNode.containerInfo),pn(t),null;case 10:return dw(t.type._context),pn(t),null;case 17:return Hn(t.type)&&Af(),pn(t),null;case 19:if(at(wt),s=t.memoizedState,s===null)return pn(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Cu(s,!1);else{if(Yt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=$f(e),o!==null){for(t.flags|=128,Cu(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return nt(wt,wt.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ot()>Sl&&(t.flags|=128,r=!0,Cu(s,!1),t.lanes=4194304)}else{if(!r)if(e=$f(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return pn(t),null}else 2*Ot()-s.renderingStartTime>Sl&&n!==1073741824&&(t.flags|=128,r=!0,Cu(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ot(),t.sibling=null,n=wt.current,nt(wt,r?n&1|2:n&1),t):(pn(t),null);case 22:case 23:return bw(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Jn&1073741824)!==0&&(pn(t),t.subtreeFlags&6&&(t.flags|=8192)):pn(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function eL(e,t){switch(aw(t),t.tag){case 1:return Hn(t.type)&&Af(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xl(),at(Wn),at(kn),gw(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return mw(t),null;case 13:if(at(wt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return at(wt),null;case 4:return xl(),null;case 10:return dw(t.type._context),null;case 22:case 23:return bw(),null;case 24:return null;default:return null}}var kh=!1,vn=!1,tL=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Ha(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Et(e,t,r)}else n.current=null}function av(e,t,n){try{n()}catch(r){Et(e,t,r)}}var eE=!1;function nL(e,t){if(Yy=Tf,e=WT(),sw(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wy={focusedElem:e,selectionRange:n},Tf=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,k=y.memoizedState,C=t.stateNode,v=C.getSnapshotBeforeUpdate(t.elementType===t.type?_:Nr(t.type,_),k);C.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(T){Et(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return y=eE,eE=!1,y}function qu(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&av(t,n,s)}i=i.next}while(i!==r)}}function Hp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lv(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vb(e){var t=e.alternate;t!==null&&(e.alternate=null,Vb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qr],delete t[wc],delete t[qy],delete t[F5],delete t[U5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jb(e){return e.tag===5||e.tag===3||e.tag===4}function tE(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=If));else if(r!==4&&(e=e.child,e!==null))for(uv(e,t,n),e=e.sibling;e!==null;)uv(e,t,n),e=e.sibling}function cv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cv(e,t,n),e=e.sibling;e!==null;)cv(e,t,n),e=e.sibling}var sn=null,Or=!1;function ms(e,t,n){for(n=n.child;n!==null;)Yb(e,t,n),n=n.sibling}function Yb(e,t,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Fp,n)}catch{}switch(n.tag){case 5:vn||Ha(n,t);case 6:var r=sn,i=Or;sn=null,ms(e,t,n),sn=r,Or=i,sn!==null&&(Or?(e=sn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):sn.removeChild(n.stateNode));break;case 18:sn!==null&&(Or?(e=sn,n=n.stateNode,e.nodeType===8?x0(e.parentNode,n):e.nodeType===1&&x0(e,n),pc(e)):x0(sn,n.stateNode));break;case 4:r=sn,i=Or,sn=n.stateNode.containerInfo,Or=!0,ms(e,t,n),sn=r,Or=i;break;case 0:case 11:case 14:case 15:if(!vn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&av(n,t,o),i=i.next}while(i!==r)}ms(e,t,n);break;case 1:if(!vn&&(Ha(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Et(n,t,a)}ms(e,t,n);break;case 21:ms(e,t,n);break;case 22:n.mode&1?(vn=(r=vn)||n.memoizedState!==null,ms(e,t,n),vn=r):ms(e,t,n);break;default:ms(e,t,n)}}function nE(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tL),t.forEach(function(r){var i=dL.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ar(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:sn=a.stateNode,Or=!1;break e;case 3:sn=a.stateNode.containerInfo,Or=!0;break e;case 4:sn=a.stateNode.containerInfo,Or=!0;break e}a=a.return}if(sn===null)throw Error(G(160));Yb(s,o,i),sn=null,Or=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Et(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wb(t,e),t=t.sibling}function Wb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ar(t,e),qr(e),r&4){try{qu(3,e,e.return),Hp(3,e)}catch(_){Et(e,e.return,_)}try{qu(5,e,e.return)}catch(_){Et(e,e.return,_)}}break;case 1:Ar(t,e),qr(e),r&512&&n!==null&&Ha(n,n.return);break;case 5:if(Ar(t,e),qr(e),r&512&&n!==null&&Ha(n,n.return),e.flags&32){var i=e.stateNode;try{cc(i,"")}catch(_){Et(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hT(i,s),Py(a,o);var c=Py(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?yT(i,p):h==="dangerouslySetInnerHTML"?mT(i,p):h==="children"?cc(i,p):H1(i,h,p,c)}switch(a){case"input":Iy(i,s);break;case"textarea":fT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Ja(i,!!s.multiple,x,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ja(i,!!s.multiple,s.defaultValue,!0):Ja(i,!!s.multiple,s.multiple?[]:"",!1))}i[wc]=s}catch(_){Et(e,e.return,_)}}break;case 6:if(Ar(t,e),qr(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){Et(e,e.return,_)}}break;case 3:if(Ar(t,e),qr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pc(t.containerInfo)}catch(_){Et(e,e.return,_)}break;case 4:Ar(t,e),qr(e);break;case 13:Ar(t,e),qr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kw=Ot())),r&4&&nE(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(vn=(c=vn)||h,Ar(t,e),vn=c):Ar(t,e),qr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&(e.mode&1)!==0)for(ae=e,h=e.child;h!==null;){for(p=ae=h;ae!==null;){switch(m=ae,x=m.child,m.tag){case 0:case 11:case 14:case 15:qu(4,m,m.return);break;case 1:Ha(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Et(r,n,_)}}break;case 5:Ha(m,m.return);break;case 22:if(m.memoizedState!==null){iE(p);continue}}x!==null?(x.return=m,ae=x):iE(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gT("display",o))}catch(_){Et(e,e.return,_)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(_){Et(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ar(t,e),qr(e),r&4&&nE(e);break;case 21:break;default:Ar(t,e),qr(e)}}function qr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jb(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cc(i,""),r.flags&=-33);var s=tE(e);cv(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=tE(e);uv(e,a,o);break;default:throw Error(G(161))}}catch(l){Et(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rL(e,t,n){ae=e,Hb(e)}function Hb(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||kh;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vn;a=kh;var c=vn;if(kh=o,(vn=l)&&!c)for(ae=i;ae!==null;)o=ae,l=o.child,o.tag===22&&o.memoizedState!==null?sE(i):l!==null?(l.return=o,ae=l):sE(i);for(;s!==null;)ae=s,Hb(s),s=s.sibling;ae=i,kh=a,vn=c}rE(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,ae=s):rE(e)}}function rE(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:vn||Hp(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!vn)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nr(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&BS(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}BS(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&pc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}vn||t.flags&512&&lv(t)}catch(m){Et(t,t.return,m)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function iE(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function sE(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hp(4,t)}catch(l){Et(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Et(t,i,l)}}var s=t.return;try{lv(t)}catch(l){Et(t,s,l)}break;case 5:var o=t.return;try{lv(t)}catch(l){Et(t,o,l)}}}catch(l){Et(t,t.return,l)}if(t===e){ae=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ae=a;break}ae=t.return}}var iL=Math.ceil,Bf=as.ReactCurrentDispatcher,Sw=as.ReactCurrentOwner,wr=as.ReactCurrentBatchConfig,ze=0,en=null,Lt=null,ln=0,Jn=0,Ga=lo(0),Yt=0,kc=null,Go=0,Gp=0,Ew=0,Ku=null,zn=null,kw=0,Sl=1/0,Di=null,zf=!1,dv=null,Us=null,Th=!1,bs=null,Vf=0,Qu=0,hv=null,ef=-1,tf=0;function Ln(){return(ze&6)!==0?Ot():ef!==-1?ef:ef=Ot()}function Bs(e){return(e.mode&1)===0?1:(ze&2)!==0&&ln!==0?ln&-ln:z5.transition!==null?(tf===0&&(tf=IT()),tf):(e=qe,e!==0||(e=window.event,e=e===void 0?16:LT(e.type)),e)}function Ur(e,t,n,r){if(50<Qu)throw Qu=0,hv=null,Error(G(185));sd(e,n,r),((ze&2)===0||e!==en)&&(e===en&&((ze&2)===0&&(Gp|=n),Yt===4&&_s(e,ln)),Gn(e,r),n===1&&ze===0&&(t.mode&1)===0&&(Sl=Ot()+500,jp&&uo()))}function Gn(e,t){var n=e.callbackNode;z6(e,t);var r=kf(e,e===en?ln:0);if(r===0)n!==null&&pS(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pS(n),t===1)e.tag===0?B5(oE.bind(null,e)):tb(oE.bind(null,e)),L5(function(){(ze&6)===0&&uo()}),n=null;else{switch(AT(r)){case 1:n=X1;break;case 4:n=bT;break;case 16:n=Ef;break;case 536870912:n=DT;break;default:n=Ef}n=eD(n,Gb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gb(e,t){if(ef=-1,tf=0,(ze&6)!==0)throw Error(G(327));var n=e.callbackNode;if(rl()&&e.callbackNode!==n)return null;var r=kf(e,e===en?ln:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=jf(e,r);else{t=r;var i=ze;ze|=2;var s=Kb();(en!==e||ln!==t)&&(Di=null,Sl=Ot()+500,$o(e,t));do try{aL();break}catch(a){qb(e,a)}while(1);cw(),Bf.current=s,ze=i,Lt!==null?t=0:(en=null,ln=0,t=Yt)}if(t!==0){if(t===2&&(i=Uy(e),i!==0&&(r=i,t=fv(e,i))),t===1)throw n=kc,$o(e,0),_s(e,r),Gn(e,Ot()),n;if(t===6)_s(e,r);else{if(i=e.current.alternate,(r&30)===0&&!sL(i)&&(t=jf(e,r),t===2&&(s=Uy(e),s!==0&&(r=s,t=fv(e,s))),t===1))throw n=kc,$o(e,0),_s(e,r),Gn(e,Ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:To(e,zn,Di);break;case 3:if(_s(e,r),(r&130023424)===r&&(t=kw+500-Ot(),10<t)){if(kf(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ln(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gy(To.bind(null,e,zn,Di),t);break}To(e,zn,Di);break;case 4:if(_s(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Fr(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iL(r/1960))-r,10<r){e.timeoutHandle=Gy(To.bind(null,e,zn,Di),r);break}To(e,zn,Di);break;case 5:To(e,zn,Di);break;default:throw Error(G(329))}}}return Gn(e,Ot()),e.callbackNode===n?Gb.bind(null,e):null}function fv(e,t){var n=Ku;return e.current.memoizedState.isDehydrated&&($o(e,t).flags|=256),e=jf(e,t),e!==2&&(t=zn,zn=n,t!==null&&pv(t)),e}function pv(e){zn===null?zn=e:zn.push.apply(zn,e)}function sL(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zr(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _s(e,t){for(t&=~Ew,t&=~Gp,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fr(t),r=1<<n;e[n]=-1,t&=~r}}function oE(e){if((ze&6)!==0)throw Error(G(327));rl();var t=kf(e,0);if((t&1)===0)return Gn(e,Ot()),null;var n=jf(e,t);if(e.tag!==0&&n===2){var r=Uy(e);r!==0&&(t=r,n=fv(e,r))}if(n===1)throw n=kc,$o(e,0),_s(e,t),Gn(e,Ot()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,To(e,zn,Di),Gn(e,Ot()),null}function Tw(e,t){var n=ze;ze|=1;try{return e(t)}finally{ze=n,ze===0&&(Sl=Ot()+500,jp&&uo())}}function qo(e){bs!==null&&bs.tag===0&&(ze&6)===0&&rl();var t=ze;ze|=1;var n=wr.transition,r=qe;try{if(wr.transition=null,qe=1,e)return e()}finally{qe=r,wr.transition=n,ze=t,(ze&6)===0&&uo()}}function bw(){Jn=Ga.current,at(Ga)}function $o(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,M5(n)),Lt!==null)for(n=Lt.return;n!==null;){var r=n;switch(aw(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Af();break;case 3:xl(),at(Wn),at(kn),gw();break;case 5:mw(r);break;case 4:xl();break;case 13:at(wt);break;case 19:at(wt);break;case 10:dw(r.type._context);break;case 22:case 23:bw()}n=n.return}if(en=e,Lt=e=zs(e.current,null),ln=Jn=t,Yt=0,kc=null,Ew=Gp=Go=0,zn=Ku=null,Ao!==null){for(t=0;t<Ao.length;t++)if(n=Ao[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ao=null}return e}function qb(e,t){do{var n=Lt;try{if(cw(),Xh.current=Uf,Ff){for(var r=_t.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ff=!1}if(Ho=0,Jt=Vt=_t=null,Gu=!1,Cc=0,Sw.current=null,n===null||n.return===null){Yt=1,kc=t,Lt=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ln,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if((h.mode&1)===0&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=GS(o);if(x!==null){x.flags&=-257,qS(x,o,a,s,t),x.mode&1&&HS(s,c,t),t=x,l=c;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if((t&1)===0){HS(s,c,t),Dw();break e}l=Error(G(426))}}else if(mt&&a.mode&1){var k=GS(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),qS(k,o,a,s,t),lw(Cl(l,a));break e}}s=l=Cl(l,a),Yt!==4&&(Yt=2),Ku===null?Ku=[s]:Ku.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var C=Nb(s,l,t);US(s,C);break e;case 1:a=l;var v=s.type,S=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Us===null||!Us.has(S)))){s.flags|=65536,t&=-t,s.lanes|=t;var T=Ob(s,a,t);US(s,T);break e}}s=s.return}while(s!==null)}Xb(n)}catch(I){t=I,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(1)}function Kb(){var e=Bf.current;return Bf.current=Uf,e===null?Uf:e}function Dw(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||(Go&268435455)===0&&(Gp&268435455)===0||_s(en,ln)}function jf(e,t){var n=ze;ze|=2;var r=Kb();(en!==e||ln!==t)&&(Di=null,$o(e,t));do try{oL();break}catch(i){qb(e,i)}while(1);if(cw(),ze=n,Bf.current=r,Lt!==null)throw Error(G(261));return en=null,ln=0,Yt}function oL(){for(;Lt!==null;)Qb(Lt)}function aL(){for(;Lt!==null&&!O6();)Qb(Lt)}function Qb(e){var t=Zb(e.alternate,e,Jn);e.memoizedProps=e.pendingProps,t===null?Xb(e):Lt=t,Sw.current=null}function Xb(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Z5(n,t,Jn),n!==null){Lt=n;return}}else{if(n=eL(n,t),n!==null){n.flags&=32767,Lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yt=6,Lt=null;return}}if(t=t.sibling,t!==null){Lt=t;return}Lt=t=e}while(t!==null);Yt===0&&(Yt=5)}function To(e,t,n){var r=qe,i=wr.transition;try{wr.transition=null,qe=1,lL(e,t,n,r)}finally{wr.transition=i,qe=r}return null}function lL(e,t,n,r){do rl();while(bs!==null);if((ze&6)!==0)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(V6(e,s),e===en&&(Lt=en=null,ln=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Th||(Th=!0,eD(Ef,function(){return rl(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=wr.transition,wr.transition=null;var o=qe;qe=1;var a=ze;ze|=4,Sw.current=null,nL(e,n),Wb(n,e),D5(Wy),Tf=!!Yy,Wy=Yy=null,e.current=n,rL(n),R6(),ze=a,qe=o,wr.transition=s}else e.current=n;if(Th&&(Th=!1,bs=e,Vf=i),s=e.pendingLanes,s===0&&(Us=null),L6(n.stateNode),Gn(e,Ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zf)throw zf=!1,e=dv,dv=null,e;return(Vf&1)!==0&&e.tag!==0&&rl(),s=e.pendingLanes,(s&1)!==0?e===hv?Qu++:(Qu=0,hv=e):Qu=0,uo(),null}function rl(){if(bs!==null){var e=AT(Vf),t=wr.transition,n=qe;try{if(wr.transition=null,qe=16>e?16:e,bs===null)var r=!1;else{if(e=bs,bs=null,Vf=0,(ze&6)!==0)throw Error(G(331));var i=ze;for(ze|=4,ae=e.current;ae!==null;){var s=ae,o=s.child;if((ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ae=c;ae!==null;){var h=ae;switch(h.tag){case 0:case 11:case 15:qu(8,h,s)}var p=h.child;if(p!==null)p.return=h,ae=p;else for(;ae!==null;){h=ae;var m=h.sibling,x=h.return;if(Vb(h),h===c){ae=null;break}if(m!==null){m.return=x,ae=m;break}ae=x}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:qu(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,ae=C;break e}ae=s.return}}var v=e.current;for(ae=v;ae!==null;){o=ae;var S=o.child;if((o.subtreeFlags&2064)!==0&&S!==null)S.return=o,ae=S;else e:for(o=v;ae!==null;){if(a=ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Hp(9,a)}}catch(I){Et(a,a.return,I)}if(a===o){ae=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,ae=T;break e}ae=a.return}}if(ze=i,uo(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Fp,e)}catch{}r=!0}return r}finally{qe=n,wr.transition=t}}return!1}function aE(e,t,n){t=Cl(n,t),t=Nb(e,t,1),e=Fs(e,t,1),t=Ln(),e!==null&&(sd(e,1,t),Gn(e,t))}function Et(e,t,n){if(e.tag===3)aE(e,e,n);else for(;t!==null;){if(t.tag===3){aE(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Us===null||!Us.has(r))){e=Cl(n,e),e=Ob(t,e,1),t=Fs(t,e,1),e=Ln(),t!==null&&(sd(t,1,e),Gn(t,e));break}}t=t.return}}function uL(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ln(),e.pingedLanes|=e.suspendedLanes&n,en===e&&(ln&n)===n&&(Yt===4||Yt===3&&(ln&130023424)===ln&&500>Ot()-kw?$o(e,0):Ew|=n),Gn(e,t)}function Jb(e,t){t===0&&((e.mode&1)===0?t=1:(t=gh,gh<<=1,(gh&130023424)===0&&(gh=4194304)));var n=Ln();e=Ki(e,t),e!==null&&(sd(e,t,n),Gn(e,n))}function cL(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jb(e,n)}function dL(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),Jb(e,n)}var Zb;Zb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Wn.current)jn=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return jn=!1,J5(e,t,n);jn=(e.flags&131072)!==0}else jn=!1,mt&&(t.flags&1048576)!==0&&nb(t,Rf,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zh(e,t),e=t.pendingProps;var i=vl(t,kn.current);nl(t,n),i=vw(null,t,r,e,i,n);var s=ww();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Hn(r)?(s=!0,Nf(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fw(t),i.updater=Yp,t.stateNode=i,i._reactInternals=t,ev(t,r,e,n),t=rv(null,t,r,!0,s,n)):(t.tag=0,mt&&s&&ow(t),Rn(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zh(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=fL(r),e=Nr(r,e),i){case 0:t=nv(null,t,r,e,n);break e;case 1:t=XS(null,t,r,e,n);break e;case 11:t=KS(null,t,r,e,n);break e;case 14:t=QS(null,t,r,Nr(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nr(r,i),nv(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nr(r,i),XS(e,t,r,i,n);case 3:e:{if(Lb(t),e===null)throw Error(G(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ob(e,t),Lf(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Cl(Error(G(423)),t),t=JS(e,t,r,n,i);break e}else if(r!==i){i=Cl(Error(G(424)),t),t=JS(e,t,r,n,i);break e}else for(er=$s(t.stateNode.containerInfo.firstChild),rr=t,mt=!0,Rr=null,n=cb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wl(),r===i){t=Qi(e,t,n);break e}Rn(e,t,r,n)}t=t.child}return t;case 5:return db(t),e===null&&Xy(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Hy(r,i)?o=null:s!==null&&Hy(r,s)&&(t.flags|=32),Mb(e,t),Rn(e,t,o,n),t.child;case 6:return e===null&&Xy(t),null;case 13:return $b(e,t,n);case 4:return pw(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_l(t,null,r,n):Rn(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nr(r,i),KS(e,t,r,i,n);case 7:return Rn(e,t,t.pendingProps,n),t.child;case 8:return Rn(e,t,t.pendingProps.children,n),t.child;case 12:return Rn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,nt(Pf,r._currentValue),r._currentValue=o,s!==null)if(zr(s.value,o)){if(s.children===i.children&&!Wn.current){t=Qi(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jy(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(G(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jy(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rn(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,nl(t,n),i=_r(i),r=r(i),t.flags|=1,Rn(e,t,r,n),t.child;case 14:return r=t.type,i=Nr(r,t.pendingProps),i=Nr(r.type,i),QS(e,t,r,i,n);case 15:return Rb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nr(r,i),Zh(e,t),t.tag=1,Hn(r)?(e=!0,Nf(t)):e=!1,nl(t,n),lb(t,r,i),ev(t,r,i,n),rv(null,t,r,!0,e,n);case 19:return Fb(e,t,n);case 22:return Pb(e,t,n)}throw Error(G(156,t.tag))};function eD(e,t){return TT(e,t)}function hL(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(e,t,n,r){return new hL(e,t,n,r)}function Iw(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fL(e){if(typeof e=="function")return Iw(e)?1:0;if(e!=null){if(e=e.$$typeof,e===q1)return 11;if(e===K1)return 14}return 2}function zs(e,t){var n=e.alternate;return n===null?(n=yr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nf(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Iw(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case $a:return Fo(n.children,i,s,t);case G1:o=8,i|=8;break;case Ey:return e=yr(12,n,t,i|2),e.elementType=Ey,e.lanes=s,e;case ky:return e=yr(13,n,t,i),e.elementType=ky,e.lanes=s,e;case Ty:return e=yr(19,n,t,i),e.elementType=Ty,e.lanes=s,e;case uT:return qp(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aT:o=10;break e;case lT:o=9;break e;case q1:o=11;break e;case K1:o=14;break e;case ys:o=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=yr(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Fo(e,t,n,r){return e=yr(7,e,r,t),e.lanes=n,e}function qp(e,t,n,r){return e=yr(22,e,r,t),e.elementType=uT,e.lanes=n,e.stateNode={isHidden:!1},e}function I0(e,t,n){return e=yr(6,e,null,t),e.lanes=n,e}function A0(e,t,n){return t=yr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pL(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=c0(0),this.expirationTimes=c0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=c0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Aw(e,t,n,r,i,s,o,a,l){return e=new pL(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=yr(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fw(s),e}function mL(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:La,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tD(e){if(!e)return Js;e=e._reactInternals;e:{if(la(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Hn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(Hn(n))return eb(e,n,t)}return t}function nD(e,t,n,r,i,s,o,a,l){return e=Aw(n,r,!0,e,i,s,o,a,l),e.context=tD(null),n=e.current,r=Ln(),i=Bs(n),s=ji(r,i),s.callback=t!=null?t:null,Fs(n,s,i),e.current.lanes=i,sd(e,i,r),Gn(e,r),e}function Kp(e,t,n,r){var i=t.current,s=Ln(),o=Bs(i);return n=tD(n),t.context===null?t.context=n:t.pendingContext=n,t=ji(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fs(i,t,o),e!==null&&(Ur(e,i,o,s),Qh(e,i,o)),o}function Yf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lE(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nw(e,t){lE(e,t),(e=e.alternate)&&lE(e,t)}function gL(){return null}var rD=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ow(e){this._internalRoot=e}Qp.prototype.render=Ow.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Kp(e,t,null,null)};Qp.prototype.unmount=Ow.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qo(function(){Kp(null,e,null,null)}),t[qi]=null}};function Qp(e){this._internalRoot=e}Qp.prototype.unstable_scheduleHydration=function(e){if(e){var t=RT();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ws.length&&t!==0&&t<ws[n].priority;n++);ws.splice(n,0,e),n===0&&MT(e)}};function Rw(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uE(){}function yL(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Yf(o);s.call(c)}}var o=nD(t,r,e,0,null,!1,!1,"",uE);return e._reactRootContainer=o,e[qi]=o.current,yc(e.nodeType===8?e.parentNode:e),qo(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Yf(l);a.call(c)}}var l=Aw(e,0,!1,null,null,!1,!1,"",uE);return e._reactRootContainer=l,e[qi]=l.current,yc(e.nodeType===8?e.parentNode:e),qo(function(){Kp(t,l,n,r)}),l}function Jp(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Yf(o);a.call(l)}}Kp(t,o,e,i)}else o=yL(n,t,e,i,r);return Yf(o)}NT=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ou(t.pendingLanes);n!==0&&(J1(t,n|1),Gn(t,Ot()),(ze&6)===0&&(Sl=Ot()+500,uo()))}break;case 13:qo(function(){var r=Ki(e,1);if(r!==null){var i=Ln();Ur(r,e,1,i)}}),Nw(e,1)}};Z1=function(e){if(e.tag===13){var t=Ki(e,134217728);if(t!==null){var n=Ln();Ur(t,e,134217728,n)}Nw(e,134217728)}};OT=function(e){if(e.tag===13){var t=Bs(e),n=Ki(e,t);if(n!==null){var r=Ln();Ur(n,e,t,r)}Nw(e,t)}};RT=function(){return qe};PT=function(e,t){var n=qe;try{return qe=e,t()}finally{qe=n}};Ly=function(e,t,n){switch(t){case"input":if(Iy(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vp(r);if(!i)throw Error(G(90));dT(r),Iy(r,i)}}}break;case"textarea":fT(e,n);break;case"select":t=n.value,t!=null&&Ja(e,!!n.multiple,t,!1)}};_T=Tw;xT=qo;var vL={usingClientEntryPoint:!1,Events:[ad,za,Vp,vT,wT,Tw]},Su={findFiberByHostInstance:Io,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wL={bundleType:Su.bundleType,version:Su.version,rendererPackageName:Su.rendererPackageName,rendererConfig:Su.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:as.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ET(e),e===null?null:e.stateNode},findFiberByHostInstance:Su.findFiberByHostInstance||gL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bh.isDisabled&&bh.supportsFiber)try{Fp=bh.inject(wL),ni=bh}catch{}}ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vL;ar.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rw(t))throw Error(G(200));return mL(e,t,null,n)};ar.createRoot=function(e,t){if(!Rw(e))throw Error(G(299));var n=!1,r="",i=rD;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Aw(e,1,!1,null,null,n,!1,r,i),e[qi]=t.current,yc(e.nodeType===8?e.parentNode:e),new Ow(t)};ar.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=ET(t),e=e===null?null:e.stateNode,e};ar.flushSync=function(e){return qo(e)};ar.hydrate=function(e,t,n){if(!Xp(t))throw Error(G(200));return Jp(null,e,t,!0,n)};ar.hydrateRoot=function(e,t,n){if(!Rw(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rD;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=nD(t,null,e,1,n!=null?n:null,i,!1,s,o),e[qi]=t.current,yc(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qp(t)};ar.render=function(e,t,n){if(!Xp(t))throw Error(G(200));return Jp(null,e,t,!1,n)};ar.unmountComponentAtNode=function(e){if(!Xp(e))throw Error(G(40));return e._reactRootContainer?(qo(function(){Jp(null,null,e,!1,function(){e._reactRootContainer=null,e[qi]=null})}),!0):!1};ar.unstable_batchedUpdates=Tw;ar.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xp(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Jp(e,t,n,!1,r)};ar.version="18.2.0-next-9e3b772b8-20220608";function iD(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iD)}catch(e){console.error(e)}}iD(),j1.exports=ar;var cE=j1.exports;Cy.createRoot=cE.createRoot,Cy.hydrateRoot=cE.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tc(){return Tc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tc.apply(this,arguments)}var Ds;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ds||(Ds={}));const dE="popstate";function _L(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return mv("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wf(i)}return CL(t,n,null,e)}function Ft(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Pw(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function xL(){return Math.random().toString(36).substr(2,8)}function hE(e,t){return{usr:e.state,key:e.key,idx:t}}function mv(e,t,n,r){return n===void 0&&(n=null),Tc({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vl(t):t,{state:n,key:t&&t.key||r||xL()})}function Wf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function CL(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ds.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Tc({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Ds.Pop;let k=h(),C=k==null?null:k-c;c=k,l&&l({action:a,location:_.location,delta:C})}function m(k,C){a=Ds.Push;let v=mv(_.location,k,C);n&&n(v,k),c=h()+1;let S=hE(v,c),T=_.createHref(v);try{o.pushState(S,"",T)}catch{i.location.assign(T)}s&&l&&l({action:a,location:_.location,delta:1})}function x(k,C){a=Ds.Replace;let v=mv(_.location,k,C);n&&n(v,k),c=h();let S=hE(v,c),T=_.createHref(v);o.replaceState(S,"",T),s&&l&&l({action:a,location:_.location,delta:0})}function y(k){let C=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof k=="string"?k:Wf(k);return Ft(C,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,C)}let _={get action(){return a},get location(){return e(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dE,p),l=k,()=>{i.removeEventListener(dE,p),l=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let C=y(k);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:m,replace:x,go(k){return o.go(k)}};return _}var fE;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fE||(fE={}));function SL(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vl(t):t,i=Mw(r.pathname||"/",n);if(i==null)return null;let s=sD(e);EL(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=RL(s[a],LL(i));return o}function sD(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ft(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Vs([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ft(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sD(s.children,t,h,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:NL(c,s.index),routesMeta:h})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of oD(s.path))i(s,o,l)}),t}function oD(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=oD(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function EL(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:OL(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kL=/^:\w+$/,TL=3,bL=2,DL=1,IL=10,AL=-2,pE=e=>e==="*";function NL(e,t){let n=e.split("/"),r=n.length;return n.some(pE)&&(r+=AL),t&&(r+=bL),n.filter(i=>!pE(i)).reduce((i,s)=>i+(kL.test(s)?TL:s===""?DL:IL),r)}function OL(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function RL(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=PL({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!h)return null;Object.assign(r,h.params);let p=a.route;s.push({params:r,pathname:Vs([i,h.pathname]),pathnameBase:BL(Vs([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Vs([i,h.pathnameBase]))}return s}function PL(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ML(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{if(h==="*"){let m=a[p]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=$L(a[p]||"",h),c},{}),pathname:s,pathnameBase:o,pattern:e}}function ML(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pw(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function LL(e){try{return decodeURI(e)}catch(t){return Pw(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $L(e,t){try{return decodeURIComponent(e)}catch(n){return Pw(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Mw(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function FL(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vl(e):e;return{pathname:n?n.startsWith("/")?n:UL(n,t):t,search:zL(r),hash:VL(i)}}function UL(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function N0(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aD(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lD(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vl(e):(i=Tc({},e),Ft(!i.pathname||!i.pathname.includes("?"),N0("?","pathname","search",i)),Ft(!i.pathname||!i.pathname.includes("#"),N0("#","pathname","hash",i)),Ft(!i.search||!i.search.includes("#"),N0("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let l=FL(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Vs=e=>e.join("/").replace(/\/\/+/g,"/"),BL=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zL=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,VL=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jL(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const YL=["post","put","patch","delete"];[...YL];/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hf(){return Hf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hf.apply(this,arguments)}const uD=R.exports.createContext(null),WL=R.exports.createContext(null),jl=R.exports.createContext(null),Zp=R.exports.createContext(null),co=R.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),cD=R.exports.createContext(null);function HL(e,t){let{relative:n}=t===void 0?{}:t;ud()||Ft(!1);let{basename:r,navigator:i}=R.exports.useContext(jl),{hash:s,pathname:o,search:a}=hD(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vs([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ud(){return R.exports.useContext(Zp)!=null}function cd(){return ud()||Ft(!1),R.exports.useContext(Zp).location}function dD(e){R.exports.useContext(jl).static||R.exports.useLayoutEffect(e)}function ur(){let{isDataRoute:e}=R.exports.useContext(co);return e?s$():GL()}function GL(){ud()||Ft(!1);let{basename:e,navigator:t}=R.exports.useContext(jl),{matches:n}=R.exports.useContext(co),{pathname:r}=cd(),i=JSON.stringify(aD(n).map(a=>a.pathnameBase)),s=R.exports.useRef(!1);return dD(()=>{s.current=!0}),R.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let c=lD(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Vs([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state,l)},[e,t,i,r])}function Yl(){let{matches:e}=R.exports.useContext(co),t=e[e.length-1];return t?t.params:{}}function hD(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=R.exports.useContext(co),{pathname:i}=cd(),s=JSON.stringify(aD(r).map(o=>o.pathnameBase));return R.exports.useMemo(()=>lD(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function qL(e,t){return KL(e,t)}function KL(e,t,n){ud()||Ft(!1);let{navigator:r}=R.exports.useContext(jl),{matches:i}=R.exports.useContext(co),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=cd(),c;if(t){var h;let _=typeof t=="string"?Vl(t):t;a==="/"||((h=_.pathname)==null?void 0:h.startsWith(a))||Ft(!1),c=_}else c=l;let p=c.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",x=SL(e,{pathname:m}),y=e$(x&&x.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Vs([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Vs([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&y?R.exports.createElement(Zp.Provider,{value:{location:Hf({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ds.Pop}},y):y}function QL(){let e=i$(),t=jL(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return R.exports.createElement(R.exports.Fragment,null,R.exports.createElement("h2",null,"Unexpected Application Error!"),R.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.exports.createElement("pre",{style:i},n):null,s)}const XL=R.exports.createElement(QL,null);class JL extends R.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?R.exports.createElement(co.Provider,{value:this.props.routeContext},R.exports.createElement(cD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZL(e){let{routeContext:t,match:n,children:r}=e,i=R.exports.useContext(uD);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.exports.createElement(co.Provider,{value:t},r)}function e$(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ft(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,p=null;n&&(p=l.route.errorElement||XL);let m=t.concat(s.slice(0,c+1)),x=()=>{let y;return h?y=p:l.route.Component?y=R.exports.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,R.exports.createElement(ZL,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?R.exports.createElement(JL,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:x(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):x()},null)}var gv;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(gv||(gv={}));var bc;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(bc||(bc={}));function t$(e){let t=R.exports.useContext(uD);return t||Ft(!1),t}function n$(e){let t=R.exports.useContext(WL);return t||Ft(!1),t}function r$(e){let t=R.exports.useContext(co);return t||Ft(!1),t}function fD(e){let t=r$(),n=t.matches[t.matches.length-1];return n.route.id||Ft(!1),n.route.id}function i$(){var e;let t=R.exports.useContext(cD),n=n$(bc.UseRouteError),r=fD(bc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function s$(){let{router:e}=t$(gv.UseNavigateStable),t=fD(bc.UseNavigateStable),n=R.exports.useRef(!1);return dD(()=>{n.current=!0}),R.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hf({fromRouteId:t},s)))},[e,t])}function pD(e){Ft(!1)}function o$(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ds.Pop,navigator:s,static:o=!1}=e;ud()&&Ft(!1);let a=t.replace(/^\/*/,"/"),l=R.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Vl(r));let{pathname:c="/",search:h="",hash:p="",state:m=null,key:x="default"}=r,y=R.exports.useMemo(()=>{let _=Mw(c,a);return _==null?null:{location:{pathname:_,search:h,hash:p,state:m,key:x},navigationType:i}},[a,c,h,p,m,x,i]);return y==null?null:R.exports.createElement(jl.Provider,{value:l},R.exports.createElement(Zp.Provider,{children:n,value:y}))}function a$(e){let{children:t,location:n}=e;return qL(yv(t),n)}var mE;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(mE||(mE={}));new Promise(()=>{});function yv(e,t){t===void 0&&(t=[]);let n=[];return R.exports.Children.forEach(e,(r,i)=>{if(!R.exports.isValidElement(r))return;let s=[...t,i];if(r.type===R.exports.Fragment){n.push.apply(n,yv(r.props.children,s));return}r.type!==pD&&Ft(!1),!r.props.index||!r.props.children||Ft(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=yv(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vv(){return vv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vv.apply(this,arguments)}function l$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function u$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function c$(e,t){return e.button===0&&(!t||t==="_self")&&!u$(e)}const d$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function h$(e){let{basename:t,children:n,window:r}=e,i=R.exports.useRef();i.current==null&&(i.current=_L({window:r,v5Compat:!0}));let s=i.current,[o,a]=R.exports.useState({action:s.action,location:s.location});return R.exports.useLayoutEffect(()=>s.listen(a),[s]),R.exports.createElement(o$,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const f$=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",p$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pn=R.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h}=t,p=l$(t,d$),{basename:m}=R.exports.useContext(jl),x,y=!1;if(typeof c=="string"&&p$.test(c)&&(x=c,f$))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),T=Mw(S.pathname,m);S.origin===v.origin&&T!=null?c=T+S.search+S.hash:y=!0}catch{}let _=HL(c,{relative:i}),k=m$(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function C(v){r&&r(v),v.defaultPrevented||k(v)}return R.exports.createElement("a",vv({},p,{href:x||_,onClick:y||s?r:C,ref:n,target:l}))});var gE;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(gE||(gE={}));var yE;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yE||(yE={}));function m$(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=ur(),l=cd(),c=hD(e,{relative:o});return R.exports.useCallback(h=>{if(c$(h,n)){h.preventDefault();let p=r!==void 0?r:Wf(l)===Wf(c);a(e,{replace:p,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,e,s,o])}var Lw={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $w=Symbol.for("react.element"),Fw=Symbol.for("react.portal"),em=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),im=Symbol.for("react.context"),g$=Symbol.for("react.server_context"),sm=Symbol.for("react.forward_ref"),om=Symbol.for("react.suspense"),am=Symbol.for("react.suspense_list"),lm=Symbol.for("react.memo"),um=Symbol.for("react.lazy"),y$=Symbol.for("react.offscreen"),mD;mD=Symbol.for("react.module.reference");function Er(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case $w:switch(e=e.type,e){case em:case nm:case tm:case om:case am:return e;default:switch(e=e&&e.$$typeof,e){case g$:case im:case sm:case um:case lm:case rm:return e;default:return t}}case Fw:return t}}}Qe.ContextConsumer=im;Qe.ContextProvider=rm;Qe.Element=$w;Qe.ForwardRef=sm;Qe.Fragment=em;Qe.Lazy=um;Qe.Memo=lm;Qe.Portal=Fw;Qe.Profiler=nm;Qe.StrictMode=tm;Qe.Suspense=om;Qe.SuspenseList=am;Qe.isAsyncMode=function(){return!1};Qe.isConcurrentMode=function(){return!1};Qe.isContextConsumer=function(e){return Er(e)===im};Qe.isContextProvider=function(e){return Er(e)===rm};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$w};Qe.isForwardRef=function(e){return Er(e)===sm};Qe.isFragment=function(e){return Er(e)===em};Qe.isLazy=function(e){return Er(e)===um};Qe.isMemo=function(e){return Er(e)===lm};Qe.isPortal=function(e){return Er(e)===Fw};Qe.isProfiler=function(e){return Er(e)===nm};Qe.isStrictMode=function(e){return Er(e)===tm};Qe.isSuspense=function(e){return Er(e)===om};Qe.isSuspenseList=function(e){return Er(e)===am};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===em||e===nm||e===tm||e===om||e===am||e===y$||typeof e=="object"&&e!==null&&(e.$$typeof===um||e.$$typeof===lm||e.$$typeof===rm||e.$$typeof===im||e.$$typeof===sm||e.$$typeof===mD||e.getModuleId!==void 0)};Qe.typeOf=Er;Lw.exports=Qe;function v$(e){function t(U,B,Y,z,b){for(var le=0,W=0,we=0,me=0,Be,_e,ne=0,be=0,Ee,dt=Ee=Be=0,Le=0,Bt=0,wo=0,vt=0,Dt=Y.length,Qt=Dt-1,An,ye="",Ne="",au="",ds="",It;Le<Dt;){if(_e=Y.charCodeAt(Le),Le===Qt&&W+me+we+le!==0&&(W!==0&&(_e=W===47?10:47),me=we=le=0,Dt++,Qt++),W+me+we+le===0){if(Le===Qt&&(0<Bt&&(ye=ye.replace(m,"")),0<ye.trim().length)){switch(_e){case 32:case 9:case 59:case 13:case 10:break;default:ye+=Y.charAt(Le)}_e=59}switch(_e){case 123:for(ye=ye.trim(),Be=ye.charCodeAt(0),Ee=1,vt=++Le;Le<Dt;){switch(_e=Y.charCodeAt(Le)){case 123:Ee++;break;case 125:Ee--;break;case 47:switch(_e=Y.charCodeAt(Le+1)){case 42:case 47:e:{for(dt=Le+1;dt<Qt;++dt)switch(Y.charCodeAt(dt)){case 47:if(_e===42&&Y.charCodeAt(dt-1)===42&&Le+2!==dt){Le=dt+1;break e}break;case 10:if(_e===47){Le=dt+1;break e}}Le=dt}}break;case 91:_e++;case 40:_e++;case 34:case 39:for(;Le++<Qt&&Y.charCodeAt(Le)!==_e;);}if(Ee===0)break;Le++}switch(Ee=Y.substring(vt,Le),Be===0&&(Be=(ye=ye.replace(p,"").trim()).charCodeAt(0)),Be){case 64:switch(0<Bt&&(ye=ye.replace(m,"")),_e=ye.charCodeAt(1),_e){case 100:case 109:case 115:case 45:Bt=B;break;default:Bt=Te}if(Ee=t(B,Bt,Ee,_e,b+1),vt=Ee.length,0<$&&(Bt=n(Te,ye,wo),It=a(3,Ee,Bt,B,X,J,vt,_e,b,z),ye=Bt.join(""),It!==void 0&&(vt=(Ee=It.trim()).length)===0&&(_e=0,Ee="")),0<vt)switch(_e){case 115:ye=ye.replace(P,o);case 100:case 109:case 45:Ee=ye+"{"+Ee+"}";break;case 107:ye=ye.replace(v,"$1 $2"),Ee=ye+"{"+Ee+"}",Ee=oe===1||oe===2&&s("@"+Ee,3)?"@-webkit-"+Ee+"@"+Ee:"@"+Ee;break;default:Ee=ye+Ee,z===112&&(Ee=(Ne+=Ee,""))}else Ee="";break;default:Ee=t(B,n(B,ye,wo),Ee,z,b+1)}au+=Ee,Ee=wo=Bt=dt=Be=0,ye="",_e=Y.charCodeAt(++Le);break;case 125:case 59:if(ye=(0<Bt?ye.replace(m,""):ye).trim(),1<(vt=ye.length))switch(dt===0&&(Be=ye.charCodeAt(0),Be===45||96<Be&&123>Be)&&(vt=(ye=ye.replace(" ",":")).length),0<$&&(It=a(1,ye,B,U,X,J,Ne.length,z,b,z))!==void 0&&(vt=(ye=It.trim()).length)===0&&(ye="\0\0"),Be=ye.charCodeAt(0),_e=ye.charCodeAt(1),Be){case 0:break;case 64:if(_e===105||_e===99){ds+=ye+Y.charAt(Le);break}default:ye.charCodeAt(vt-1)!==58&&(Ne+=i(ye,Be,_e,ye.charCodeAt(2)))}wo=Bt=dt=Be=0,ye="",_e=Y.charCodeAt(++Le)}}switch(_e){case 13:case 10:W===47?W=0:1+Be===0&&z!==107&&0<ye.length&&(Bt=1,ye+="\0"),0<$*M&&a(0,ye,B,U,X,J,Ne.length,z,b,z),J=1,X++;break;case 59:case 125:if(W+me+we+le===0){J++;break}default:switch(J++,An=Y.charAt(Le),_e){case 9:case 32:if(me+le+W===0)switch(ne){case 44:case 58:case 9:case 32:An="";break;default:_e!==32&&(An=" ")}break;case 0:An="\\0";break;case 12:An="\\f";break;case 11:An="\\v";break;case 38:me+W+le===0&&(Bt=wo=1,An="\f"+An);break;case 108:if(me+W+le+ue===0&&0<dt)switch(Le-dt){case 2:ne===112&&Y.charCodeAt(Le-3)===58&&(ue=ne);case 8:be===111&&(ue=be)}break;case 58:me+W+le===0&&(dt=Le);break;case 44:W+we+me+le===0&&(Bt=1,An+="\r");break;case 34:case 39:W===0&&(me=me===_e?0:me===0?_e:me);break;case 91:me+W+we===0&&le++;break;case 93:me+W+we===0&&le--;break;case 41:me+W+le===0&&we--;break;case 40:if(me+W+le===0){if(Be===0)switch(2*ne+3*be){case 533:break;default:Be=1}we++}break;case 64:W+we+me+le+dt+Ee===0&&(Ee=1);break;case 42:case 47:if(!(0<me+le+we))switch(W){case 0:switch(2*_e+3*Y.charCodeAt(Le+1)){case 235:W=47;break;case 220:vt=Le,W=42}break;case 42:_e===47&&ne===42&&vt+2!==Le&&(Y.charCodeAt(vt+2)===33&&(Ne+=Y.substring(vt,Le+1)),An="",W=0)}}W===0&&(ye+=An)}be=ne,ne=_e,Le++}if(vt=Ne.length,0<vt){if(Bt=B,0<$&&(It=a(2,Ne,Bt,U,X,J,vt,z,b,z),It!==void 0&&(Ne=It).length===0))return ds+Ne+au;if(Ne=Bt.join(",")+"{"+Ne+"}",oe*ue!==0){switch(oe!==2||s(Ne,2)||(ue=0),ue){case 111:Ne=Ne.replace(T,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(S,"::-webkit-input-$1")+Ne.replace(S,"::-moz-$1")+Ne.replace(S,":-ms-input-$1")+Ne}ue=0}}return ds+Ne+au}function n(U,B,Y){var z=B.trim().split(k);B=z;var b=z.length,le=U.length;switch(le){case 0:case 1:var W=0;for(U=le===0?"":U[0]+" ";W<b;++W)B[W]=r(U,B[W],Y).trim();break;default:var we=W=0;for(B=[];W<b;++W)for(var me=0;me<le;++me)B[we++]=r(U[me]+" ",z[W],Y).trim()}return B}function r(U,B,Y){var z=B.charCodeAt(0);switch(33>z&&(z=(B=B.trim()).charCodeAt(0)),z){case 38:return B.replace(C,"$1"+U.trim());case 58:return U.trim()+B.replace(C,"$1"+U.trim());default:if(0<1*Y&&0<B.indexOf("\f"))return B.replace(C,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+B}function i(U,B,Y,z){var b=U+";",le=2*B+3*Y+4*z;if(le===944){U=b.indexOf(":",9)+1;var W=b.substring(U,b.length-1).trim();return W=b.substring(0,U).trim()+W+";",oe===1||oe===2&&s(W,1)?"-webkit-"+W+W:W}if(oe===0||oe===2&&!s(b,1))return b;switch(le){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace(j,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return W=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+b+"-ms-flex-pack"+W+b;case 1005:return y.test(b)?b.replace(x,":-webkit-")+b.replace(x,":-moz-")+b:b;case 1e3:switch(W=b.substring(13).trim(),B=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(B)){case 226:W=b.replace(I,"tb");break;case 232:W=b.replace(I,"tb-rl");break;case 220:W=b.replace(I,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+W+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(B=(b=U).length-10,W=(b.charCodeAt(B)===33?b.substring(0,B):b).substring(U.indexOf(":",7)+1).trim(),le=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:b=b.replace(W,"-webkit-"+W)+";"+b;break;case 207:case 102:b=b.replace(W,"-webkit-"+(102<le?"inline-":"")+"box")+";"+b.replace(W,"-webkit-"+W)+";"+b.replace(W,"-ms-"+W+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return W=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+W+"-ms-flex-"+W+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(O,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(O,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(F.test(U)===!0)return(W=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),B,Y,z).replace(":fill-available",":stretch"):b.replace(W,"-webkit-"+W)+b.replace(W,"-moz-"+W.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,Y+z===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+b}return b}function s(U,B){var Y=U.indexOf(B===1?":":"{"),z=U.substring(0,B!==3?Y:10);return Y=U.substring(Y+1,U.length-1),V(B!==2?z:z.replace(Z,"$1"),Y,B)}function o(U,B){var Y=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return Y!==B+";"?Y.replace(N," or ($1)").substring(4):"("+B+")"}function a(U,B,Y,z,b,le,W,we,me,Be){for(var _e=0,ne=B,be;_e<$;++_e)switch(be=ge[_e].call(h,U,ne,Y,z,b,le,W,we,me,Be)){case void 0:case!1:case!0:case null:break;default:ne=be}if(ne!==B)return ne}function l(U){switch(U){case void 0:case null:$=ge.length=0;break;default:if(typeof U=="function")ge[$++]=U;else if(typeof U=="object")for(var B=0,Y=U.length;B<Y;++B)l(U[B]);else M=!!U|0}return l}function c(U){return U=U.prefix,U!==void 0&&(V=null,U?typeof U!="function"?oe=1:(oe=2,V=U):oe=0),c}function h(U,B){var Y=U;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),ee=Y,Y=[ee],0<$){var z=a(-1,B,Y,Y,X,J,0,0,0,0);z!==void 0&&typeof z=="string"&&(B=z)}var b=t(Te,Y,B,0,0);return 0<$&&(z=a(-2,b,Y,Y,X,J,b.length,0,0,0),z!==void 0&&(b=z)),ee="",ue=0,J=X=1,b}var p=/^\0+/g,m=/[\0\r\f]/g,x=/: */g,y=/zoo|gra/,_=/([,: ])(transform)/g,k=/,\r+?/g,C=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,S=/::(place)/g,T=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,O=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,J=1,X=1,ue=0,oe=1,Te=[],ge=[],$=0,V=null,M=0,ee="";return h.use=l,h.set=c,e!==void 0&&c(e),h}var w$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var x$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vE=_$(function(e){return x$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),gD={exports:{}},Xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nn=typeof Symbol=="function"&&Symbol.for,Uw=nn?Symbol.for("react.element"):60103,Bw=nn?Symbol.for("react.portal"):60106,cm=nn?Symbol.for("react.fragment"):60107,dm=nn?Symbol.for("react.strict_mode"):60108,hm=nn?Symbol.for("react.profiler"):60114,fm=nn?Symbol.for("react.provider"):60109,pm=nn?Symbol.for("react.context"):60110,zw=nn?Symbol.for("react.async_mode"):60111,mm=nn?Symbol.for("react.concurrent_mode"):60111,gm=nn?Symbol.for("react.forward_ref"):60112,ym=nn?Symbol.for("react.suspense"):60113,C$=nn?Symbol.for("react.suspense_list"):60120,vm=nn?Symbol.for("react.memo"):60115,wm=nn?Symbol.for("react.lazy"):60116,S$=nn?Symbol.for("react.block"):60121,E$=nn?Symbol.for("react.fundamental"):60117,k$=nn?Symbol.for("react.responder"):60118,T$=nn?Symbol.for("react.scope"):60119;function cr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Uw:switch(e=e.type,e){case zw:case mm:case cm:case hm:case dm:case ym:return e;default:switch(e=e&&e.$$typeof,e){case pm:case gm:case wm:case vm:case fm:return e;default:return t}}case Bw:return t}}}function yD(e){return cr(e)===mm}Xe.AsyncMode=zw;Xe.ConcurrentMode=mm;Xe.ContextConsumer=pm;Xe.ContextProvider=fm;Xe.Element=Uw;Xe.ForwardRef=gm;Xe.Fragment=cm;Xe.Lazy=wm;Xe.Memo=vm;Xe.Portal=Bw;Xe.Profiler=hm;Xe.StrictMode=dm;Xe.Suspense=ym;Xe.isAsyncMode=function(e){return yD(e)||cr(e)===zw};Xe.isConcurrentMode=yD;Xe.isContextConsumer=function(e){return cr(e)===pm};Xe.isContextProvider=function(e){return cr(e)===fm};Xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uw};Xe.isForwardRef=function(e){return cr(e)===gm};Xe.isFragment=function(e){return cr(e)===cm};Xe.isLazy=function(e){return cr(e)===wm};Xe.isMemo=function(e){return cr(e)===vm};Xe.isPortal=function(e){return cr(e)===Bw};Xe.isProfiler=function(e){return cr(e)===hm};Xe.isStrictMode=function(e){return cr(e)===dm};Xe.isSuspense=function(e){return cr(e)===ym};Xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cm||e===mm||e===hm||e===dm||e===ym||e===C$||typeof e=="object"&&e!==null&&(e.$$typeof===wm||e.$$typeof===vm||e.$$typeof===fm||e.$$typeof===pm||e.$$typeof===gm||e.$$typeof===E$||e.$$typeof===k$||e.$$typeof===T$||e.$$typeof===S$)};Xe.typeOf=cr;gD.exports=Xe;var Vw=gD.exports,b$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},D$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},I$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jw={};jw[Vw.ForwardRef]=I$;jw[Vw.Memo]=vD;function wE(e){return Vw.isMemo(e)?vD:jw[e.$$typeof]||b$}var A$=Object.defineProperty,N$=Object.getOwnPropertyNames,_E=Object.getOwnPropertySymbols,O$=Object.getOwnPropertyDescriptor,R$=Object.getPrototypeOf,xE=Object.prototype;function wD(e,t,n){if(typeof t!="string"){if(xE){var r=R$(t);r&&r!==xE&&wD(e,r,n)}var i=N$(t);_E&&(i=i.concat(_E(t)));for(var s=wE(e),o=wE(t),a=0;a<i.length;++a){var l=i[a];if(!D$[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=O$(t,l);try{A$(e,l,c)}catch{}}}}return e}var P$=wD;function Zr(){return(Zr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var CE=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},wv=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Lw.exports.typeOf(e)},Gf=Object.freeze([]),js=Object.freeze({});function Dc(e){return typeof e=="function"}function SE(e){return e.displayName||e.name||"Component"}function Yw(e){return e&&typeof e.styledComponentId=="string"}var El=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ww=typeof window!="undefined"&&"HTMLElement"in window,M$=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),L$={};function dd(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var $$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&dd(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,h=r.length;c<h;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),rf=new Map,qf=new Map,Xu=1,Dh=function(e){if(rf.has(e))return rf.get(e);for(;qf.has(Xu);)Xu++;var t=Xu++;return rf.set(e,t),qf.set(t,e),t},F$=function(e){return qf.get(e)},U$=function(e,t){t>=Xu&&(Xu=t+1),rf.set(e,t),qf.set(t,e)},B$="style["+El+'][data-styled-version="5.3.10"]',z$=new RegExp("^"+El+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),V$=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},j$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(z$);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(U$(c,l),V$(e,c,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},Y$=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},_D=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var h=l[c];if(h&&h.nodeType===1&&h.hasAttribute(El))return h}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(El,"active"),r.setAttribute("data-styled-version","5.3.10");var o=Y$();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},W$=function(){function e(n){var r=this.element=_D(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}dd(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),H$=function(){function e(n){var r=this.element=_D(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),G$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),EE=Ww,q$={isServer:!Ww,useCSSOMInjection:!M$},Kf=function(){function e(n,r,i){n===void 0&&(n=js),r===void 0&&(r={}),this.options=Zr({},q$,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ww&&EE&&(EE=!1,function(s){for(var o=document.querySelectorAll(B$),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(El)!=="active"&&(j$(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Dh(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Zr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new G$(o):s?new W$(o):new H$(o),new $$(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Dh(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Dh(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Dh(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=F$(o);if(a!==void 0){var l=n.names.get(a),c=r.getGroup(o);if(l&&c&&l.size){var h=El+".g"+o+'[id="'+a+'"]',p="";l!==void 0&&l.forEach(function(m){m.length>0&&(p+=m+",")}),s+=""+c+h+'{content:"'+p+`"}/*!sc*/
`}}}return s}(this)},e}(),K$=/(a)(d)/gi,kE=function(e){return String.fromCharCode(e+(e>25?39:97))};function _v(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=kE(t%52)+n;return(kE(t%52)+n).replace(K$,"$1-$2")}var qa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xD=function(e){return qa(5381,e)};function CD(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dc(n)&&!Yw(n))return!1}return!0}var Q$=xD("5.3.10"),X$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&CD(t),this.componentId=n,this.baseHash=qa(Q$,n),this.baseStyle=r,Kf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ko(this.rules,t,n,r).join(""),a=_v(qa(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,h=qa(this.baseHash,r.hash),p="",m=0;m<c;m++){var x=this.rules[m];if(typeof x=="string")p+=x;else if(x){var y=Ko(x,t,n,r),_=Array.isArray(y)?y.join(""):y;h=qa(h,_+m),p+=_}}if(p){var k=_v(h>>>0);if(!n.hasNameForId(i,k)){var C=r(p,"."+k,void 0,i);n.insertRules(i,k,C)}s.push(k)}}return s.join(" ")},e}(),J$=/^\s*\/\/.*$/gm,Z$=[":","[",".","#"];function e8(e){var t,n,r,i,s=e===void 0?js:e,o=s.options,a=o===void 0?js:o,l=s.plugins,c=l===void 0?Gf:l,h=new v$(a),p=[],m=function(_){function k(C){if(C)try{_(C+"}")}catch{}}return function(C,v,S,T,I,P,N,O,Z,F){switch(C){case 1:if(Z===0&&v.charCodeAt(0)===64)return _(v+";"),"";break;case 2:if(O===0)return v+"/*|*/";break;case 3:switch(O){case 102:case 112:return _(S[0]+v),"";default:return v+(F===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(k)}}}(function(_){p.push(_)}),x=function(_,k,C){return k===0&&Z$.indexOf(C[n.length])!==-1||C.match(i)?_:"."+t};function y(_,k,C,v){v===void 0&&(v="&");var S=_.replace(J$,""),T=k&&C?C+" "+k+" { "+S+" }":S;return t=v,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(C||!k?"":k,T)}return h.use([].concat(c,[function(_,k,C){_===2&&C.length&&C[0].lastIndexOf(n)>0&&(C[0]=C[0].replace(r,x))},m,function(_){if(_===-2){var k=p;return p=[],k}}])),y.hash=c.length?c.reduce(function(_,k){return k.name||dd(15),qa(_,k.name)},5381).toString():"",y}var SD=Zt.createContext();SD.Consumer;var ED=Zt.createContext(),t8=(ED.Consumer,new Kf),xv=e8();function kD(){return R.exports.useContext(SD)||t8}function TD(){return R.exports.useContext(ED)||xv}var bD=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=xv);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return dd(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=xv),this.name+t.hash},e}(),n8=/([A-Z])/,r8=/([A-Z])/g,i8=/^ms-/,s8=function(e){return"-"+e.toLowerCase()};function TE(e){return n8.test(e)?e.replace(r8,s8).replace(i8,"-ms-"):e}var bE=function(e){return e==null||e===!1||e===""};function Ko(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Ko(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(bE(e))return"";if(Yw(e))return"."+e.styledComponentId;if(Dc(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return Ko(l,t,n,r)}var c;return e instanceof bD?n?(e.inject(n,r),e.getName(r)):e:wv(e)?function h(p,m){var x,y,_=[];for(var k in p)p.hasOwnProperty(k)&&!bE(p[k])&&(Array.isArray(p[k])&&p[k].isCss||Dc(p[k])?_.push(TE(k)+":",p[k],";"):wv(p[k])?_.push.apply(_,h(p[k],k)):_.push(TE(k)+": "+(x=k,(y=p[k])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||x in w$||x.startsWith("--")?String(y).trim():y+"px")+";"));return m?[m+" {"].concat(_,["}"]):_}(e):e.toString()}var DE=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Wl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Dc(e)||wv(e)?DE(Ko(CE(Gf,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:DE(Ko(CE(e,n)))}var DD=function(e,t,n){return n===void 0&&(n=js),e.theme!==n.theme&&e.theme||t||n.theme},o8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,a8=/(^-|-$)/g;function O0(e){return e.replace(o8,"-").replace(a8,"")}var Hw=function(e){return _v(xD(e)>>>0)};function Ih(e){return typeof e=="string"&&!0}var Cv=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},l8=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function u8(e,t,n){var r=e[n];Cv(t)&&Cv(r)?ID(r,t):e[n]=t}function ID(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Cv(o))for(var a in o)l8(a)&&u8(e,o[a],a)}return e}var Gw=Zt.createContext();Gw.Consumer;var R0={};function AD(e,t,n){var r=Yw(e),i=!Ih(e),s=t.attrs,o=s===void 0?Gf:s,a=t.componentId,l=a===void 0?function(v,S){var T=typeof v!="string"?"sc":O0(v);R0[T]=(R0[T]||0)+1;var I=T+"-"+Hw("5.3.10"+T+R0[T]);return S?S+"-"+I:I}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(v){return Ih(v)?"styled."+v:"Styled("+SE(v)+")"}(e):c,p=t.displayName&&t.componentId?O0(t.displayName)+"-"+t.componentId:t.componentId||l,m=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(v,S,T){return e.shouldForwardProp(v,S,T)&&t.shouldForwardProp(v,S,T)}:e.shouldForwardProp);var y,_=new X$(n,p,r?e.componentStyle:void 0),k=_.isStatic&&o.length===0,C=function(v,S){return function(T,I,P,N){var O=T.attrs,Z=T.componentStyle,F=T.defaultProps,j=T.foldedComponentIds,J=T.shouldForwardProp,X=T.styledComponentId,ue=T.target,oe=function(z,b,le){z===void 0&&(z=js);var W=Zr({},b,{theme:z}),we={};return le.forEach(function(me){var Be,_e,ne,be=me;for(Be in Dc(be)&&(be=be(W)),be)W[Be]=we[Be]=Be==="className"?(_e=we[Be],ne=be[Be],_e&&ne?_e+" "+ne:_e||ne):be[Be]}),[W,we]}(DD(I,R.exports.useContext(Gw),F)||js,I,O),Te=oe[0],ge=oe[1],$=function(z,b,le,W){var we=kD(),me=TD(),Be=b?z.generateAndInjectStyles(js,we,me):z.generateAndInjectStyles(le,we,me);return Be}(Z,N,Te),V=P,M=ge.$as||I.$as||ge.as||I.as||ue,ee=Ih(M),U=ge!==I?Zr({},I,{},ge):I,B={};for(var Y in U)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?B.as=U[Y]:(J?J(Y,vE,M):!ee||vE(Y))&&(B[Y]=U[Y]));return I.style&&ge.style!==I.style&&(B.style=Zr({},I.style,{},ge.style)),B.className=Array.prototype.concat(j,X,$!==X?$:null,I.className,ge.className).filter(Boolean).join(" "),B.ref=V,R.exports.createElement(M,B)}(y,v,S,k)};return C.displayName=h,(y=Zt.forwardRef(C)).attrs=m,y.componentStyle=_,y.displayName=h,y.shouldForwardProp=x,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Gf,y.styledComponentId=p,y.target=r?e.target:e,y.withComponent=function(v){var S=t.componentId,T=function(P,N){if(P==null)return{};var O,Z,F={},j=Object.keys(P);for(Z=0;Z<j.length;Z++)O=j[Z],N.indexOf(O)>=0||(F[O]=P[O]);return F}(t,["componentId"]),I=S&&S+"-"+(Ih(v)?v:O0(SE(v)));return AD(v,Zr({},T,{attrs:m,componentId:I}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?ID({},e.defaultProps,v):v}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&P$(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Sv=function(e){return function t(n,r,i){if(i===void 0&&(i=js),!Lw.exports.isValidElementType(r))return dd(1,String(r));var s=function(){return n(r,i,Wl.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Zr({},i,{},o))},s.attrs=function(o){return t(n,r,Zr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(AD,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Sv[e]=Sv(e)});var c8=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=CD(n),Kf.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Ko(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&Kf.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function d8(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Wl.apply(void 0,[e].concat(n)),s="sc-global-"+Hw(JSON.stringify(i)),o=new c8(i,s);function a(c){var h=kD(),p=TD(),m=R.exports.useContext(Gw),x=R.exports.useRef(h.allocateGSInstance(s)).current;return h.server&&l(x,c,h,m,p),R.exports.useLayoutEffect(function(){if(!h.server)return l(x,c,h,m,p),function(){return o.removeStyles(x,h)}},[x,c,h,m,p]),null}function l(c,h,p,m,x){if(o.isStatic)o.renderStyles(c,L$,p,x);else{var y=Zr({},h,{theme:DD(h,m,a.defaultProps)});o.renderStyles(c,y,p,x)}}return Zt.memo(a)}function h8(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Wl.apply(void 0,[e].concat(n)).join(""),s=Hw(i);return new bD(s,i)}var Ge=Sv;const f8=d8`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    
    
    ol, ul, li {
        list-style: none;
    }

    button,input {
        outline: none;
        border: none;
        background: transparent;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }
`,p8=Ge.div`
    min-height: 100vh;
    &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            /* background: rgba(0, 0, 0, 0.39); */
            z-index: -1;
            transition: 0.3s all linear;
        }
    
    &.active {
        position: relative;
        
        &::after {
            background: rgba(0, 0, 0, 0.39);
            z-index: 990;
        }
    }
`,m8=Ge.header`
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  .contents {
    margin: 0 auto;
    display: flex;
    max-width: 1280px;
    padding: 0 16px;
    height: 60px;
    line-height: 60px;
    justify-content: space-between;
    align-items: center;

    .logo {
      h1 {
        font-size: clamp(21px, 2.5vw, 25px);
        letter-spacing: -0.035rem;
        font-weight: 700;
        cursor: pointer;
        font-style: italic;
      }
    }

    .navbar {
      display: flex;
      gap: 12px;
      .users {
        display: flex;
        align-items: center;
        gap: 12px;

        .item {
          min-width: 76px;
          padding: 0 6px;
          text-align: center;

          &.active {
            background-color: rgba(40, 41, 44, 0.04);
            a {
              font-weight: 600;
              color: #000;
              text-decoration: underline 0.5px;
              text-underline-offset: 3px;
            }
          }

          &:hover {
            background-color: rgba(32, 33, 36, 0.04);
          }

          &.user_nickname {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;

            img {
              width: 36px;
              height: 36px;
              object-fit: cover;
              border-radius: 50%;
            }
            a {
              position: relative;
            }
          }

          a,
          span {
            font-size: clamp(12px, 1.5vw, 13.5px);
            font-weight: 400;
            letter-spacing: 0.012rem;
            color: #5f6368;
            display: block;
            width: 100%;
            height: 100%;

            &:hover {
              color: #202124;
            }
          }
        }

        .logOut {
          cursor: pointer;

          span {
            position: relative;
            display: block;
            font-size: clamp(15px, 2vw, 16px);
            width: 100%;
            height: 100%;

            svg {
              width: 20px;
              height: 20px;
              position: absolute;
              top:50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }

      .item_account {
        margin: 0 6px;

        .account {
          padding: 8px 16px;
          width: 100%;
          background: #09f;
          color: #fefefe;
          font-size: clamp(13.5px, 2vw, 14px);
          border-radius: 9999px;
        }
      }

      .list {
        display: flex;
        align-items: center;

        .item {
          min-width: 76px;
          padding: 0 6px;
          text-align: center;

          &.active {
            background-color: rgba(40, 41, 44, 0.04);
            a {
              font-weight: 600;
              color: #000;
              text-decoration: underline 0.5px;
              text-underline-offset: 3px;
            }
          }

          &:hover {
            background-color: rgba(32, 33, 36, 0.04);
          }

          &.user_nickname {
            a {
              position: relative;
            }
          }

          a,
          span {
            display: block;
            width: 100%;
            height: 100%;
            font-size: clamp(12.5px, 1.5vw, 14px);
            font-weight: 500;
            letter-spacing: 0.012rem;
            color: #5f6368;

            &:hover {
              color: #202124;
            }
          }
        }
      }
    }

    .toggle {
      position: relative;
      display: none;
      width: 24px;
      height: 24px;
      cursor: pointer;
      overflow: hidden;
      color: rgba(32, 33, 36, 0.88);

      svg {
        font-weight: 500;
        width: 100%;
        height: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      position: relative;

      /* toggle mode */
      .navbar {
        position: fixed;
        display: block;
        top: 0;
        margin-top: 60px;
        right: -75%;
        height: 100vh;
        z-index: 1500;
        background: #fefefe;
        width: 75%;
        transition: all 0.3s linear;

        &.mobile {
          right: 0;
        }

        .list {
          display: block;
          .item {
            padding: 0;
            border-bottom: 1px solid #ebebeb;
            &.active {
              background-color: rgba(40, 41, 44, 0.04);
              a {
                font-weight: 600;
                color: #000;
                text-decoration: underline 0.5px;
                text-underline-offset: 3px;
              }
            }

            a,
            span {
              font-size: clamp(12px, 1.5vw, 13.5px);
              display: block;
              padding: 6px 16px;
              letter-spacing: -0.15px;
              font-weight: 700;
              text-align: left;
              text-indent: 6px;

              &:hover {
                color: #202124;
              }
            }
          }
        }

        .users {
          width: 100%;
          padding: 12px 6px;
          border-bottom: 1px solid #ebebeb;

          &.sign {
            .item_account {
              display: block;
              width: 100%;
              text-align: center;

              .account {
                font-size: clamp(12px, 1.5vw, 13.5px);
              display: block;
              padding: 6px 16px;
              letter-spacing: 0.78px;
              font-weight: 700;
              text-align: left;
              text-indent: 6px;
              color: #202124;
              background: transparent;
              }
            }
          }

          .item {
            width: 100%;
            &.user_nickname {
              a {
                display: block;
                width: max-content;
                height: max-content;
                padding: 0;
              }
            }
            a,
            span {
              display: block;
              padding: 6px 16px;
              letter-spacing: -0.15px;
              font-weight: 700;
              text-indent: 6px;
              width: 100%;
              height: 100%;
            }
            &.logOut {
            }
          }
        }
      }

      .toggle {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;var ND={exports:{}},OD={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=R.exports;function g8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var y8=typeof Object.is=="function"?Object.is:g8,v8=kl.useState,w8=kl.useEffect,_8=kl.useLayoutEffect,x8=kl.useDebugValue;function C8(e,t){var n=t(),r=v8({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return _8(function(){i.value=n,i.getSnapshot=t,P0(i)&&s({inst:i})},[e,n,t]),w8(function(){return P0(i)&&s({inst:i}),e(function(){P0(i)&&s({inst:i})})},[e]),x8(n),n}function P0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!y8(e,n)}catch{return!0}}function S8(e,t){return t()}var E8=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?S8:C8;OD.useSyncExternalStore=kl.useSyncExternalStore!==void 0?kl.useSyncExternalStore:E8;ND.exports=OD;var RD={exports:{}},PD={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m=R.exports,k8=ND.exports;function T8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var b8=typeof Object.is=="function"?Object.is:T8,D8=k8.useSyncExternalStore,I8=_m.useRef,A8=_m.useEffect,N8=_m.useMemo,O8=_m.useDebugValue;PD.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=I8(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=N8(function(){function l(x){if(!c){if(c=!0,h=x,x=r(x),i!==void 0&&o.hasValue){var y=o.value;if(i(y,x))return p=y}return p=x}if(y=p,b8(h,x))return y;var _=r(x);return i!==void 0&&i(y,_)?y:(h=x,p=_)}var c=!1,h,p,m=n===void 0?null:n;return[function(){return l(t())},m===null?void 0:function(){return l(m())}]},[t,n,r,i]);var a=D8(e,s[0],s[1]);return A8(function(){o.hasValue=!0,o.value=a},[a]),O8(a),a};RD.exports=PD;function R8(e){e()}let MD=R8;const P8=e=>MD=e,M8=()=>MD,Zs=R.exports.createContext(null);function LD(){return R.exports.useContext(Zs)}const L8=()=>{throw new Error("uSES not initialized!")};let $D=L8;const $8=e=>{$D=e},F8=(e,t)=>e===t;function U8(e=Zs){const t=e===Zs?LD:()=>R.exports.useContext(e);return function(r,i=F8){const{store:s,subscription:o,getServerState:a}=t(),l=$D(o.addNestedSub,s.getState,a||s.getState,r,i);return R.exports.useDebugValue(l),l}}const tt=U8();function B8(){const e=M8();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const IE={notify(){},get:()=>[]};function z8(e,t){let n,r=IE;function i(p){return l(),r.subscribe(p)}function s(){r.notify()}function o(){h.onStateChange&&h.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=B8())}function c(){n&&(n(),n=void 0,r.clear(),r=IE)}const h={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:()=>r};return h}const V8=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",j8=V8?R.exports.useLayoutEffect:R.exports.useEffect;var xm={exports:{}},Cm={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y8=R.exports,W8=Symbol.for("react.element"),H8=Symbol.for("react.fragment"),G8=Object.prototype.hasOwnProperty,q8=Y8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K8={key:!0,ref:!0,__self:!0,__source:!0};function FD(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)G8.call(t,r)&&!K8.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:W8,type:e,key:s,ref:o,props:i,_owner:q8.current}}Cm.Fragment=H8;Cm.jsx=FD;Cm.jsxs=FD;xm.exports=Cm;const w=xm.exports.jsx,A=xm.exports.jsxs,Ev=xm.exports.Fragment;function Q8({store:e,context:t,children:n,serverState:r}){const i=R.exports.useMemo(()=>{const a=z8(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),s=R.exports.useMemo(()=>e.getState(),[e]);return j8(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),w((t||Zs).Provider,{value:i,children:n})}function UD(e=Zs){const t=e===Zs?LD:()=>R.exports.useContext(e);return function(){const{store:r}=t();return r}}const X8=UD();function J8(e=Zs){const t=e===Zs?X8:UD(e);return function(){return t().dispatch}}const Gt=J8();$8(RD.exports.useSyncExternalStoreWithSelector);P8(j1.exports.unstable_batchedUpdates);function Mr(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function eo(e){return!!e&&!!e[pt]}function Xi(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===a9}(e)||Array.isArray(e)||!!e[LE]||!!(!((t=e.constructor)===null||t===void 0)&&t[LE])||qw(e)||Kw(e))}function Qo(e,t,n){n===void 0&&(n=!1),Hl(e)===0?(n?Object.keys:sl)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Hl(e){var t=e[pt];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:qw(e)?2:Kw(e)?3:0}function il(e,t){return Hl(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Z8(e,t){return Hl(e)===2?e.get(t):e[t]}function BD(e,t,n){var r=Hl(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function zD(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function qw(e){return s9&&e instanceof Map}function Kw(e){return o9&&e instanceof Set}function bo(e){return e.o||e.t}function Qw(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=jD(e);delete t[pt];for(var n=sl(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Xw(e,t){return t===void 0&&(t=!1),Jw(e)||eo(e)||!Xi(e)||(Hl(e)>1&&(e.set=e.add=e.clear=e.delete=e9),Object.freeze(e),t&&Qo(e,function(n,r){return Xw(r,!0)},!0)),e}function e9(){Mr(2)}function Jw(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ii(e){var t=Dv[e];return t||Mr(18,e),t}function t9(e,t){Dv[e]||(Dv[e]=t)}function kv(){return Ic}function M0(e,t){t&&(ii("Patches"),e.u=[],e.s=[],e.v=t)}function Qf(e){Tv(e),e.p.forEach(n9),e.p=null}function Tv(e){e===Ic&&(Ic=e.l)}function AE(e){return Ic={p:[],l:Ic,h:e,m:!0,_:0}}function n9(e){var t=e[pt];t.i===0||t.i===1?t.j():t.g=!0}function L0(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ii("ES5").S(t,e,r),r?(n[pt].P&&(Qf(t),Mr(4)),Xi(e)&&(e=Xf(t,e),t.l||Jf(t,e)),t.u&&ii("Patches").M(n[pt].t,e,t.u,t.s)):e=Xf(t,n,[]),Qf(t),t.u&&t.v(t.u,t.s),e!==VD?e:void 0}function Xf(e,t,n){if(Jw(t))return t;var r=t[pt];if(!r)return Qo(t,function(a,l){return NE(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Jf(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Qw(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Qo(s,function(a,l){return NE(e,r,i,a,l,n,o)}),Jf(e,i,!1),n&&e.u&&ii("Patches").N(r,n,e.u,e.s)}return r.o}function NE(e,t,n,r,i,s,o){if(eo(i)){var a=Xf(e,i,s&&t&&t.i!==3&&!il(t.R,r)?s.concat(r):void 0);if(BD(n,r,a),!eo(a))return;e.m=!1}else o&&n.add(i);if(Xi(i)&&!Jw(i)){if(!e.h.D&&e._<1)return;Xf(e,i),t&&t.A.l||Jf(e,i)}}function Jf(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Xw(t,n)}function $0(e,t){var n=e[pt];return(n?bo(n):e)[t]}function OE(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function xs(e){e.P||(e.P=!0,e.l&&xs(e.l))}function F0(e){e.o||(e.o=Qw(e.t))}function bv(e,t,n){var r=qw(t)?ii("MapSet").F(t,n):Kw(t)?ii("MapSet").T(t,n):e.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:kv(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,c=Ac;o&&(l=[a],c=Pu);var h=Proxy.revocable(l,c),p=h.revoke,m=h.proxy;return a.k=m,a.j=p,m}(t,n):ii("ES5").J(t,n);return(n?n.A:kv()).p.push(r),r}function r9(e){return eo(e)||Mr(22,e),function t(n){if(!Xi(n))return n;var r,i=n[pt],s=Hl(n);if(i){if(!i.P&&(i.i<4||!ii("ES5").K(i)))return i.t;i.I=!0,r=RE(n,s),i.I=!1}else r=RE(n,s);return Qo(r,function(o,a){i&&Z8(i.t,o)===a||BD(r,o,t(a))}),s===3?new Set(r):r}(e)}function RE(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Qw(e)}function i9(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[pt];return Ac.get(l,s)},set:function(l){var c=this[pt];Ac.set(c,s,l)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][pt];if(!a.P)switch(a.i){case 5:r(a)&&xs(a);break;case 4:n(a)&&xs(a)}}}function n(s){for(var o=s.t,a=s.k,l=sl(a),c=l.length-1;c>=0;c--){var h=l[c];if(h!==pt){var p=o[h];if(p===void 0&&!il(o,h))return!0;var m=a[h],x=m&&m[pt];if(x?x.t!==p:!zD(m,p))return!0}}var y=!!o[pt];return l.length!==sl(o).length+(y?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};t9("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(h,p){if(h){for(var m=Array(p.length),x=0;x<p.length;x++)Object.defineProperty(m,""+x,e(x,!0));return m}var y=jD(p);delete y[pt];for(var _=sl(y),k=0;k<_.length;k++){var C=_[k];y[C]=e(C,h||!!y[C].enumerable)}return Object.create(Object.getPrototypeOf(p),y)}(a,s),c={i:a?5:4,A:o?o.A:kv(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,pt,{value:c,writable:!0}),l},S:function(s,o,a){a?eo(o)&&o[pt].A===s&&t(s.p):(s.u&&function l(c){if(c&&typeof c=="object"){var h=c[pt];if(h){var p=h.t,m=h.k,x=h.R,y=h.i;if(y===4)Qo(m,function(S){S!==pt&&(p[S]!==void 0||il(p,S)?x[S]||l(m[S]):(x[S]=!0,xs(h)))}),Qo(p,function(S){m[S]!==void 0||il(m,S)||(x[S]=!1,xs(h))});else if(y===5){if(r(h)&&(xs(h),x.length=!0),m.length<p.length)for(var _=m.length;_<p.length;_++)x[_]=!1;else for(var k=p.length;k<m.length;k++)x[k]=!0;for(var C=Math.min(m.length,p.length),v=0;v<C;v++)m.hasOwnProperty(v)||(x[v]=!0),x[v]===void 0&&l(m[v])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var PE,Ic,Zw=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",s9=typeof Map!="undefined",o9=typeof Set!="undefined",ME=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",VD=Zw?Symbol.for("immer-nothing"):((PE={})["immer-nothing"]=!0,PE),LE=Zw?Symbol.for("immer-draftable"):"__$immer_draftable",pt=Zw?Symbol.for("immer-state"):"__$immer_state",a9=""+Object.prototype.constructor,sl=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,jD=Object.getOwnPropertyDescriptors||function(e){var t={};return sl(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Dv={},Ac={get:function(e,t){if(t===pt)return e;var n=bo(e);if(!il(n,t))return function(i,s,o){var a,l=OE(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Xi(r)?r:r===$0(e.t,t)?(F0(e),e.o[t]=bv(e.A.h,r,e)):r},has:function(e,t){return t in bo(e)},ownKeys:function(e){return Reflect.ownKeys(bo(e))},set:function(e,t,n){var r=OE(bo(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=$0(bo(e),t),s=i==null?void 0:i[pt];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(zD(n,i)&&(n!==void 0||il(e.t,t)))return!0;F0(e),xs(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return $0(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,F0(e),xs(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=bo(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Mr(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Mr(12)}},Pu={};Qo(Ac,function(e,t){Pu[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Pu.deleteProperty=function(e,t){return Pu.set.call(this,e,t,void 0)},Pu.set=function(e,t,n){return Ac.set.call(this,e[0],t,n,e[0])};var l9=function(){function e(n){var r=this;this.O=ME,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(_){var k=this;_===void 0&&(_=a);for(var C=arguments.length,v=Array(C>1?C-1:0),S=1;S<C;S++)v[S-1]=arguments[S];return l.produce(_,function(T){var I;return(I=s).call.apply(I,[k,T].concat(v))})}}var c;if(typeof s!="function"&&Mr(6),o!==void 0&&typeof o!="function"&&Mr(7),Xi(i)){var h=AE(r),p=bv(r,i,void 0),m=!0;try{c=s(p),m=!1}finally{m?Qf(h):Tv(h)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(_){return M0(h,o),L0(_,h)},function(_){throw Qf(h),_}):(M0(h,o),L0(c,h))}if(!i||typeof i!="object"){if((c=s(i))===void 0&&(c=i),c===VD&&(c=void 0),r.D&&Xw(c,!0),o){var x=[],y=[];ii("Patches").M(i,c,x,y),o(x,y)}return c}Mr(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(c){for(var h=arguments.length,p=Array(h>1?h-1:0),m=1;m<h;m++)p[m-1]=arguments[m];return r.produceWithPatches(c,function(x){return i.apply(void 0,[x].concat(p))})};var o,a,l=r.produce(i,s,function(c,h){o=c,a=h});return typeof Promise!="undefined"&&l instanceof Promise?l.then(function(c){return[c,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Xi(n)||Mr(8),eo(n)&&(n=r9(n));var r=AE(this),i=bv(this,n,void 0);return i[pt].C=!0,Tv(r),i},t.finishDraft=function(n,r){var i=n&&n[pt],s=i.A;return M0(s,r),L0(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!ME&&Mr(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=ii("Patches").$;return eo(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),sr=new l9,YD=sr.produce;sr.produceWithPatches.bind(sr);sr.setAutoFreeze.bind(sr);sr.setUseProxies.bind(sr);sr.applyPatches.bind(sr);sr.createDraft.bind(sr);sr.finishDraft.bind(sr);function Nc(e){return Nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nc(e)}function u9(e,t){if(Nc(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Nc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function c9(e){var t=u9(e,"string");return Nc(t)==="symbol"?t:String(t)}function d9(e,t,n){return t=c9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function FE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$E(Object(n),!0).forEach(function(r){d9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$E(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gn(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var UE=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),U0=function(){return Math.random().toString(36).substring(7).split("").join(".")},Zf={INIT:"@@redux/INIT"+U0(),REPLACE:"@@redux/REPLACE"+U0(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+U0()}};function h9(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function WD(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(gn(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(gn(1));return n(WD)(e,t)}if(typeof e!="function")throw new Error(gn(2));var i=e,s=t,o=[],a=o,l=!1;function c(){a===o&&(a=o.slice())}function h(){if(l)throw new Error(gn(3));return s}function p(_){if(typeof _!="function")throw new Error(gn(4));if(l)throw new Error(gn(5));var k=!0;return c(),a.push(_),function(){if(!!k){if(l)throw new Error(gn(6));k=!1,c();var v=a.indexOf(_);a.splice(v,1),o=null}}}function m(_){if(!h9(_))throw new Error(gn(7));if(typeof _.type=="undefined")throw new Error(gn(8));if(l)throw new Error(gn(9));try{l=!0,s=i(s,_)}finally{l=!1}for(var k=o=a,C=0;C<k.length;C++){var v=k[C];v()}return _}function x(_){if(typeof _!="function")throw new Error(gn(10));i=_,m({type:Zf.REPLACE})}function y(){var _,k=p;return _={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(gn(11));function S(){v.next&&v.next(h())}S();var T=k(S);return{unsubscribe:T}}},_[UE]=function(){return this},_}return m({type:Zf.INIT}),r={dispatch:m,subscribe:p,getState:h,replaceReducer:x},r[UE]=y,r}function f9(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Zf.INIT});if(typeof r=="undefined")throw new Error(gn(12));if(typeof n(void 0,{type:Zf.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(gn(13))})}function p9(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{f9(n)}catch(a){o=a}return function(l,c){if(l===void 0&&(l={}),o)throw o;for(var h=!1,p={},m=0;m<s.length;m++){var x=s[m],y=n[x],_=l[x],k=y(_,c);if(typeof k=="undefined")throw c&&c.type,new Error(gn(14));p[x]=k,h=h||k!==_}return h=h||s.length!==Object.keys(l).length,h?p:l}}function ep(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function m9(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(gn(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(l){return l(o)});return s=ep.apply(void 0,a)(i.dispatch),FE(FE({},i),{},{dispatch:s})}}}function HD(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var GD=HD();GD.withExtraArgument=HD;var BE=GD,qD=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),g9=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(h){return l([c,h])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(h){c=[6,h],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Tl=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},y9=Object.defineProperty,v9=Object.defineProperties,w9=Object.getOwnPropertyDescriptors,zE=Object.getOwnPropertySymbols,_9=Object.prototype.hasOwnProperty,x9=Object.prototype.propertyIsEnumerable,VE=function(e,t,n){return t in e?y9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Ys=function(e,t){for(var n in t||(t={}))_9.call(t,n)&&VE(e,n,t[n]);if(zE)for(var r=0,i=zE(t);r<i.length;r++){var n=i[r];x9.call(t,n)&&VE(e,n,t[n])}return e},B0=function(e,t){return v9(e,w9(t))},C9=function(e,t,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(c){i(c)}},o=function(l){try{a(n.throw(l))}catch(c){i(c)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(e,t)).next())})},S9=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ep:ep.apply(null,arguments)};function E9(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var k9=function(e){qD(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Tl([void 0],n[0].concat(this)))):new(t.bind.apply(t,Tl([void 0],n.concat(this))))},t}(Array),T9=function(e){qD(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Tl([void 0],n[0].concat(this)))):new(t.bind.apply(t,Tl([void 0],n.concat(this))))},t}(Array);function Iv(e){return Xi(e)?YD(e,function(){}):e}function b9(e){return typeof e=="boolean"}function D9(){return function(t){return I9(t)}}function I9(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new k9;return n&&(b9(n)?r.push(BE):r.push(BE.withExtraArgument(n.extraArgument))),r}var A9=!0;function N9(e){var t=D9(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,l=a===void 0?!0:a,c=n.preloadedState,h=c===void 0?void 0:c,p=n.enhancers,m=p===void 0?void 0:p,x;if(typeof i=="function")x=i;else if(E9(i))x=p9(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=o;typeof y=="function"&&(y=y(t));var _=m9.apply(void 0,y),k=ep;l&&(k=S9(Ys({trace:!A9},typeof l=="object"&&l)));var C=new T9(_),v=C;Array.isArray(m)?v=Tl([_],m):typeof m=="function"&&(v=m(C));var S=k.apply(void 0,v);return WD(x,h,S)}function Ws(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Ys(Ys({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function KD(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function O9(e){return typeof e=="function"}function R9(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?KD(t):[t,n,r],s=i[0],o=i[1],a=i[2],l;if(O9(e))l=function(){return Iv(e())};else{var c=Iv(e);l=function(){return c}}function h(p,m){p===void 0&&(p=l());var x=Tl([s[m.type]],o.filter(function(y){var _=y.matcher;return _(m)}).map(function(y){var _=y.reducer;return _}));return x.filter(function(y){return!!y}).length===0&&(x=[a]),x.reduce(function(y,_){if(_)if(eo(y)){var k=y,C=_(k,m);return C===void 0?y:C}else{if(Xi(y))return YD(y,function(v){return _(v,m)});var C=_(y,m);if(C===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return C}return y},p)}return h.getInitialState=l,h}function P9(e,t){return e+"/"+t}function ua(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:Iv(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(h){var p=r[h],m=P9(t,h),x,y;"reducer"in p?(x=p.reducer,y=p.prepare):x=p,s[h]=x,o[m]=x,a[h]=y?Ws(m,y):Ws(m)});function l(){var h=typeof e.extraReducers=="function"?KD(e.extraReducers):[e.extraReducers],p=h[0],m=p===void 0?{}:p,x=h[1],y=x===void 0?[]:x,_=h[2],k=_===void 0?void 0:_,C=Ys(Ys({},m),o);return R9(n,function(v){for(var S in C)v.addCase(S,C[S]);for(var T=0,I=y;T<I.length;T++){var P=I[T];v.addMatcher(P.matcher,P.reducer)}k&&v.addDefaultCase(k)})}var c;return{name:t,reducer:function(h,p){return c||(c=l()),c(h,p)},actions:a,caseReducers:s,getInitialState:function(){return c||(c=l()),c.getInitialState()}}}var M9="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",L9=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=M9[Math.random()*64|0];return t},$9=["name","message","stack","code"],z0=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),jE=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),F9=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=$9;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},qt=function(){function e(t,n,r){var i=Ws(t+"/fulfilled",function(c,h,p,m){return{payload:c,meta:B0(Ys({},m||{}),{arg:p,requestId:h,requestStatus:"fulfilled"})}}),s=Ws(t+"/pending",function(c,h,p){return{payload:void 0,meta:B0(Ys({},p||{}),{arg:h,requestId:c,requestStatus:"pending"})}}),o=Ws(t+"/rejected",function(c,h,p,m,x){return{payload:m,error:(r&&r.serializeError||F9)(c||"Rejected"),meta:B0(Ys({},x||{}),{arg:p,requestId:h,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function l(c){return function(h,p,m){var x=r!=null&&r.idGenerator?r.idGenerator(c):L9(),y=new a,_;function k(v){_=v,y.abort()}var C=function(){return C9(this,null,function(){var v,S,T,I,P,N,O;return g9(this,function(Z){switch(Z.label){case 0:return Z.trys.push([0,4,,5]),I=(v=r==null?void 0:r.condition)==null?void 0:v.call(r,c,{getState:p,extra:m}),B9(I)?[4,I]:[3,2];case 1:I=Z.sent(),Z.label=2;case 2:if(I===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return P=new Promise(function(F,j){return y.signal.addEventListener("abort",function(){return j({name:"AbortError",message:_||"Aborted"})})}),h(s(x,c,(S=r==null?void 0:r.getPendingMeta)==null?void 0:S.call(r,{requestId:x,arg:c},{getState:p,extra:m}))),[4,Promise.race([P,Promise.resolve(n(c,{dispatch:h,getState:p,extra:m,requestId:x,signal:y.signal,abort:k,rejectWithValue:function(F,j){return new z0(F,j)},fulfillWithValue:function(F,j){return new jE(F,j)}})).then(function(F){if(F instanceof z0)throw F;return F instanceof jE?i(F.payload,x,c,F.meta):i(F,x,c)})])];case 3:return T=Z.sent(),[3,5];case 4:return N=Z.sent(),T=N instanceof z0?o(null,x,c,N.payload,N.meta):o(N,x,c),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(T)&&T.meta.condition,O||h(T),[2,T]}})})}();return Object.assign(C,{abort:k,requestId:x,arg:c,unwrap:function(){return C.then(U9)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function U9(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function B9(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var z9=function(e){return e&&typeof e.match=="function"},QD=function(e,t){return z9(e)?e.match(t):e(t)};function V9(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.some(function(r){return QD(r,n)})}}function YE(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.every(function(r){return QD(r,n)})}}function j9(e,t){if(!e||!e.meta)return!1;var n=typeof e.meta.requestId=="string",r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function XD(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Av(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return j9(n,["rejected"])}:XD(e)?function(n){var r=e.map(function(s){return s.rejected}),i=V9.apply(void 0,r);return i(n)}:Av()(e[0])}function Sm(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return e.length===0?function(r){var i=YE(Av.apply(void 0,e),n);return i(r)}:XD(e)?function(r){var i=YE(Av.apply(void 0,e),n);return i(r)}:Sm()(e[0])}var e_="listenerMiddleware";Ws(e_+"/add");Ws(e_+"/removeAll");Ws(e_+"/remove");var WE;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);i9();/**
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
 */const JD=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Y9=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ZD={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,x=c&63;l||(x=64,o||(m=64)),r.push(n[h],n[p],n[m],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(JD(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Y9(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new W9;const m=s<<2|a>>4;if(r.push(m),c!==64){const x=a<<4&240|c>>2;if(r.push(x),p!==64){const y=c<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class W9 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H9=function(e){const t=JD(e);return ZD.encodeByteArray(t,!0)},tp=function(e){return H9(e).replace(/\./g,"")},eI=function(e){try{return ZD.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function G9(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q9=()=>G9().__FIREBASE_DEFAULTS__,K9=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Q9=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&eI(e[1]);return t&&JSON.parse(t)},Em=()=>{try{return q9()||K9()||Q9()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},tI=e=>{var t,n;return(n=(t=Em())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},nI=e=>{const t=tI(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},X9=()=>{var e;return(e=Em())===null||e===void 0?void 0:e.config},rI=e=>{var t;return(t=Em())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class J9{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function iI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[tp(JSON.stringify(n)),tp(JSON.stringify(o)),a].join(".")}/**
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
 */function Tn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z9(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tn())}function eF(){var e;const t=(e=Em())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tF(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function nF(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rF(){const e=Tn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function iF(){try{return typeof indexedDB=="object"}catch{return!1}}function sF(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const oF="FirebaseError";class mi extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=oF,Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hd.prototype.create)}}class hd{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?aF(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mi(i,a,r)}}function aF(e,t){return e.replace(lF,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const lF=/\{\$([^}]+)}/g;function uF(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function np(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(HE(s)&&HE(o)){if(!np(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function HE(e){return e!==null&&typeof e=="object"}/**
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
 */function fd(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mu(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Lu(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function cF(e,t){const n=new dF(e,t);return n.subscribe.bind(n)}class dF{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hF(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=V0),i.error===void 0&&(i.error=V0),i.complete===void 0&&(i.complete=V0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hF(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function V0(){}/**
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
 */function Rt(e){return e&&e._delegate?e._delegate:e}class to{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Do="[DEFAULT]";/**
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
 */class fF{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new J9;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mF(t))try{this.getOrInitializeService({instanceIdentifier:Do})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Do){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Do){return this.instances.has(t)}getOptions(t=Do){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pF(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Do){return this.component?this.component.multipleInstances?t:Do:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pF(e){return e===Do?void 0:e}function mF(e){return e.instantiationMode==="EAGER"}/**
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
 */class gF{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fF(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(je||(je={}));const yF={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},vF=je.INFO,wF={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},_F=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=wF[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class t_{constructor(t){this.name=t,this._logLevel=vF,this._logHandler=_F,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yF[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...t),this._logHandler(this,je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...t),this._logHandler(this,je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,je.INFO,...t),this._logHandler(this,je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,je.WARN,...t),this._logHandler(this,je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...t),this._logHandler(this,je.ERROR,...t)}}const xF=(e,t)=>t.some(n=>e instanceof n);let GE,qE;function CF(){return GE||(GE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SF(){return qE||(qE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sI=new WeakMap,Nv=new WeakMap,oI=new WeakMap,j0=new WeakMap,n_=new WeakMap;function EF(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Hs(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&sI.set(n,e)}).catch(()=>{}),n_.set(t,e),t}function kF(e){if(Nv.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Nv.set(e,t)}let Ov={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Nv.get(e);if(t==="objectStoreNames")return e.objectStoreNames||oI.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hs(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function TF(e){Ov=e(Ov)}function bF(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Y0(this),t,...n);return oI.set(r,t.sort?t.sort():[t]),Hs(r)}:SF().includes(e)?function(...t){return e.apply(Y0(this),t),Hs(sI.get(this))}:function(...t){return Hs(e.apply(Y0(this),t))}}function DF(e){return typeof e=="function"?bF(e):(e instanceof IDBTransaction&&kF(e),xF(e,CF())?new Proxy(e,Ov):e)}function Hs(e){if(e instanceof IDBRequest)return EF(e);if(j0.has(e))return j0.get(e);const t=DF(e);return t!==e&&(j0.set(e,t),n_.set(t,e)),t}const Y0=e=>n_.get(e);function IF(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Hs(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hs(o.result),l.oldVersion,l.newVersion,Hs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const AF=["get","getKey","getAll","getAllKeys","count"],NF=["put","add","delete","clear"],W0=new Map;function KE(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(W0.get(t))return W0.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=NF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return W0.set(t,s),s}TF(e=>({...e,get:(t,n,r)=>KE(t,n)||e.get(t,n,r),has:(t,n)=>!!KE(t,n)||e.has(t,n)}));/**
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
 */class OF{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RF(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rv="@firebase/app",QE="0.9.9";/**
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
 */const Xo=new t_("@firebase/app"),PF="@firebase/app-compat",MF="@firebase/analytics-compat",LF="@firebase/analytics",$F="@firebase/app-check-compat",FF="@firebase/app-check",UF="@firebase/auth",BF="@firebase/auth-compat",zF="@firebase/database",VF="@firebase/database-compat",jF="@firebase/functions",YF="@firebase/functions-compat",WF="@firebase/installations",HF="@firebase/installations-compat",GF="@firebase/messaging",qF="@firebase/messaging-compat",KF="@firebase/performance",QF="@firebase/performance-compat",XF="@firebase/remote-config",JF="@firebase/remote-config-compat",ZF="@firebase/storage",eU="@firebase/storage-compat",tU="@firebase/firestore",nU="@firebase/firestore-compat",rU="firebase",iU="9.21.0";/**
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
 */const Pv="[DEFAULT]",sU={[Rv]:"fire-core",[PF]:"fire-core-compat",[LF]:"fire-analytics",[MF]:"fire-analytics-compat",[FF]:"fire-app-check",[$F]:"fire-app-check-compat",[UF]:"fire-auth",[BF]:"fire-auth-compat",[zF]:"fire-rtdb",[VF]:"fire-rtdb-compat",[jF]:"fire-fn",[YF]:"fire-fn-compat",[WF]:"fire-iid",[HF]:"fire-iid-compat",[GF]:"fire-fcm",[qF]:"fire-fcm-compat",[KF]:"fire-perf",[QF]:"fire-perf-compat",[XF]:"fire-rc",[JF]:"fire-rc-compat",[ZF]:"fire-gcs",[eU]:"fire-gcs-compat",[tU]:"fire-fst",[nU]:"fire-fst-compat","fire-js":"fire-js",[rU]:"fire-js-all"};/**
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
 */const rp=new Map,Mv=new Map;function oU(e,t){try{e.container.addComponent(t)}catch(n){Xo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Jo(e){const t=e.name;if(Mv.has(t))return Xo.debug(`There were multiple attempts to register component ${t}.`),!1;Mv.set(t,e);for(const n of rp.values())oU(n,e);return!0}function km(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const aU={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gs=new hd("app","Firebase",aU);/**
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
 */class lU{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new to("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gs.create("app-deleted",{appName:this._name})}}/**
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
 */const ca=iU;function aI(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Pv,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Gs.create("bad-app-name",{appName:String(i)});if(n||(n=X9()),!n)throw Gs.create("no-options");const s=rp.get(i);if(s){if(np(n,s.options)&&np(r,s.config))return s;throw Gs.create("duplicate-app",{appName:i})}const o=new gF(i);for(const l of Mv.values())o.addComponent(l);const a=new lU(n,r,o);return rp.set(i,a),a}function r_(e=Pv){const t=rp.get(e);if(!t&&e===Pv)return aI();if(!t)throw Gs.create("no-app",{appName:e});return t}function si(e,t,n){var r;let i=(r=sU[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xo.warn(a.join(" "));return}Jo(new to(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const uU="firebase-heartbeat-database",cU=1,Oc="firebase-heartbeat-store";let H0=null;function lI(){return H0||(H0=IF(uU,cU,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oc)}}}).catch(e=>{throw Gs.create("idb-open",{originalErrorMessage:e.message})})),H0}async function dU(e){try{return(await lI()).transaction(Oc).objectStore(Oc).get(uI(e))}catch(t){if(t instanceof mi)Xo.warn(t.message);else{const n=Gs.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xo.warn(n.message)}}}async function XE(e,t){try{const r=(await lI()).transaction(Oc,"readwrite");return await r.objectStore(Oc).put(t,uI(e)),r.done}catch(n){if(n instanceof mi)Xo.warn(n.message);else{const r=Gs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xo.warn(r.message)}}}function uI(e){return`${e.name}!${e.options.appId}`}/**
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
 */const hU=1024,fU=30*24*60*60*1e3;class pU{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gU(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=JE();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=fU}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=JE(),{heartbeatsToSend:n,unsentEntries:r}=mU(this._heartbeatsCache.heartbeats),i=tp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function JE(){return new Date().toISOString().substring(0,10)}function mU(e,t=hU){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ZE(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ZE(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gU{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iF()?sF().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dU(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return XE(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return XE(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ZE(e){return tp(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function yU(e){Jo(new to("platform-logger",t=>new OF(t),"PRIVATE")),Jo(new to("heartbeat",t=>new pU(t),"PRIVATE")),si(Rv,QE,e),si(Rv,QE,"esm2017"),si("fire-js","")}yU("");function i_(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function cI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vU=cI,dI=new hd("auth","Firebase",cI());/**
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
 */const ip=new t_("@firebase/auth");function wU(e,...t){ip.logLevel<=je.WARN&&ip.warn(`Auth (${ca}): ${e}`,...t)}function sf(e,...t){ip.logLevel<=je.ERROR&&ip.error(`Auth (${ca}): ${e}`,...t)}/**
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
 */function Cr(e,...t){throw s_(e,...t)}function oi(e,...t){return s_(e,...t)}function hI(e,t,n){const r=Object.assign(Object.assign({},vU()),{[t]:n});return new hd("auth","Firebase",r).create(t,{appName:e.name})}function _U(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Cr(e,"argument-error"),hI(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function s_(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return dI.create(e,...t)}function ve(e,t,...n){if(!e)throw s_(t,...n)}function Mi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw sf(t),new Error(t)}function Ji(e,t){e||Mi(t)}/**
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
 */function Lv(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function xU(){return e2()==="http:"||e2()==="https:"}function e2(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function CU(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xU()||tF()||"connection"in navigator)?navigator.onLine:!0}function SU(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class pd{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ji(n>t,"Short delay should be less than long delay!"),this.isMobile=Z9()||nF()}get(){return CU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function o_(e,t){Ji(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class fI{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Mi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Mi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Mi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kU=new pd(3e4,6e4);function Gl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ql(e,t,n,r,i={}){return pI(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=fd(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),fI.fetch()(mI(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function pI(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},EU),t);try{const i=new TU(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ah(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ah(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ah(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ah(e,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hI(e,h,c);Cr(e,h)}}catch(i){if(i instanceof mi)throw i;Cr(e,"network-request-failed",{message:String(i)})}}async function md(e,t,n,r,i={}){const s=await ql(e,t,n,r,i);return"mfaPendingCredential"in s&&Cr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function mI(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?o_(e.config,i):`${e.config.apiScheme}://${i}`}class TU{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(oi(this.auth,"network-request-failed")),kU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ah(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=oi(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function bU(e,t){return ql(e,"POST","/v1/accounts:delete",t)}async function DU(e,t){return ql(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ju(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function IU(e,t=!1){const n=Rt(e),r=await n.getIdToken(t),i=a_(r);ve(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ju(G0(i.auth_time)),issuedAtTime:Ju(G0(i.iat)),expirationTime:Ju(G0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function G0(e){return Number(e)*1e3}function a_(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return sf("JWT malformed, contained fewer than 3 sections"),null;try{const i=eI(n);return i?JSON.parse(i):(sf("Failed to decode base64 JWT payload"),null)}catch(i){return sf("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function AU(e){const t=a_(e);return ve(t,"internal-error"),ve(typeof t.exp!="undefined","internal-error"),ve(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Rc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof mi&&NU(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function NU({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class OU{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gI{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ju(this.lastLoginAt),this.creationTime=Ju(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sp(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Rc(e,DU(n,{idToken:r}));ve(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?MU(s.providerUserInfo):[],a=PU(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gI(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function RU(e){const t=Rt(e);await sp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function PU(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function MU(e){return e.map(t=>{var{providerId:n}=t,r=i_(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function LU(e,t){const n=await pI(e,{},async()=>{const r=fd({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=mI(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ve(t.idToken,"internal-error"),ve(typeof t.idToken!="undefined","internal-error"),ve(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):AU(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ve(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LU(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pc;return r&&(ve(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ve(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ve(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pc,this.toJSON())}_performRefresh(){return Mi("not implemented")}}/**
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
 */function gs(e,t){ve(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class Uo{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=i_(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Rc(this,this.stsTokenManager.getToken(this.auth,t));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return IU(this,t)}reload(){return RU(this)}_assign(t){this!==t&&(ve(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Uo(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await sp(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Rc(this,bU(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:T,isAnonymous:I,providerData:P,stsTokenManager:N}=n;ve(S&&N,t,"internal-error");const O=Pc.fromJSON(this.name,N);ve(typeof S=="string",t,"internal-error"),gs(p,t.name),gs(m,t.name),ve(typeof T=="boolean",t,"internal-error"),ve(typeof I=="boolean",t,"internal-error"),gs(x,t.name),gs(y,t.name),gs(_,t.name),gs(k,t.name),gs(C,t.name),gs(v,t.name);const Z=new Uo({uid:S,auth:t,email:m,emailVerified:T,displayName:p,isAnonymous:I,photoURL:y,phoneNumber:x,tenantId:_,stsTokenManager:O,createdAt:C,lastLoginAt:v});return P&&Array.isArray(P)&&(Z.providerData=P.map(F=>Object.assign({},F))),k&&(Z._redirectEventId=k),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Pc;i.updateFromServerResponse(n);const s=new Uo({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await sp(s),s}}/**
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
 */const t2=new Map;function Li(e){Ji(e instanceof Function,"Expected a class definition");let t=t2.get(e);return t?(Ji(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,t2.set(e,t),t)}/**
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
 */class yI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}yI.type="NONE";const n2=yI;/**
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
 */function of(e,t,n){return`firebase:${e}:${t}:${n}`}class ol{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=of(this.userKey,i.apiKey,s),this.fullPersistenceKey=of("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Uo._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ol(Li(n2),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Li(n2);const o=of(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Uo._fromJSON(t,h);c!==s&&(a=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ol(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ol(s,t,r))}}/**
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
 */function r2(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_I(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(CI(t))return"Blackberry";if(SI(t))return"Webos";if(l_(t))return"Safari";if((t.includes("chrome/")||wI(t))&&!t.includes("edge/"))return"Chrome";if(xI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vI(e=Tn()){return/firefox\//i.test(e)}function l_(e=Tn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wI(e=Tn()){return/crios\//i.test(e)}function _I(e=Tn()){return/iemobile/i.test(e)}function xI(e=Tn()){return/android/i.test(e)}function CI(e=Tn()){return/blackberry/i.test(e)}function SI(e=Tn()){return/webos/i.test(e)}function Tm(e=Tn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function $U(e=Tn()){var t;return Tm(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function FU(){return rF()&&document.documentMode===10}function EI(e=Tn()){return Tm(e)||xI(e)||SI(e)||CI(e)||/windows phone/i.test(e)||_I(e)}function UU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function kI(e,t=[]){let n;switch(e){case"Browser":n=r2(Tn());break;case"Worker":n=`${r2(Tn())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ca}/${r}`}async function TI(e,t){return ql(e,"GET","/v2/recaptchaConfig",Gl(e,t))}function i2(e){return e!==void 0&&e.enterprise!==void 0}class bI{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function BU(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function DI(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=oi("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BU().appendChild(r)})}function zU(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const VU="https://www.google.com/recaptcha/enterprise.js?render=",jU="recaptcha-enterprise",YU="NO_RECAPTCHA";class II{constructor(t){this.type=jU,this.auth=da(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{TI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bI(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;i2(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(YU)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&i2(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}DI(VU+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function op(e,t,n,r=!1){const i=new II(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class WU{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class HU{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new s2(this),this.idTokenSubscription=new s2(this),this.beforeStateQueue=new WU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Li(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ol.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await sp(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=SU()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Rt(t):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ve(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Li(t))})}async initializeRecaptchaConfig(){const t=await TI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new bI(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new II(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new hd("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Li(t)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await ol.create(this,[Li(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&wU(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function da(e){return Rt(e)}class s2{constructor(t){this.auth=t,this.observer=null,this.addObserver=cF(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function GU(e,t){const n=km(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(np(s,t!=null?t:{}))return i;Cr(i,"already-initialized")}return n.initialize({options:t})}function qU(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Li);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function KU(e,t,n){const r=da(e);ve(r._canInitEmulator,r,"emulator-config-failed"),ve(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=AI(t),{host:o,port:a}=QU(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||XU()}function AI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function QU(e){const t=AI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:o2(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:o2(o)}}}function o2(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function XU(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class u_{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Mi("not implemented")}_getIdTokenResponse(t){return Mi("not implemented")}_linkToIdToken(t,n){return Mi("not implemented")}_getReauthenticationResolver(t){return Mi("not implemented")}}async function JU(e,t){return ql(e,"POST","/v1/accounts:update",t)}/**
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
 */async function q0(e,t){return md(e,"POST","/v1/accounts:signInWithPassword",Gl(e,t))}/**
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
 */async function ZU(e,t){return md(e,"POST","/v1/accounts:signInWithEmailLink",Gl(e,t))}async function e7(e,t){return md(e,"POST","/v1/accounts:signInWithEmailLink",Gl(e,t))}/**
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
 */class Mc extends u_{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Mc(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Mc(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await op(t,r,"signInWithPassword");return q0(t,i)}else return q0(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await op(t,r,"signInWithPassword");return q0(t,s)}else return Promise.reject(i)});case"emailLink":return ZU(t,{email:this._email,oobCode:this._password});default:Cr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return JU(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return e7(t,{idToken:n,email:this._email,oobCode:this._password});default:Cr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function al(e,t){return md(e,"POST","/v1/accounts:signInWithIdp",Gl(e,t))}/**
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
 */const t7="http://localhost";class Zo extends u_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Zo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Cr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=i_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zo(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return al(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,al(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,al(t,n)}buildRequest(){const t={requestUri:t7,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=fd(n)}return t}}/**
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
 */function n7(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r7(e){const t=Mu(Lu(e)).link,n=t?Mu(Lu(t)).deep_link_id:null,r=Mu(Lu(e)).deep_link_id;return(r?Mu(Lu(r)).link:null)||r||n||t||e}class c_{constructor(t){var n,r,i,s,o,a;const l=Mu(Lu(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=n7((i=l.mode)!==null&&i!==void 0?i:null);ve(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=r7(t);try{return new c_(n)}catch{return null}}}/**
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
 */class Kl{constructor(){this.providerId=Kl.PROVIDER_ID}static credential(t,n){return Mc._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=c_.parseLink(n);return ve(r,"argument-error"),Mc._fromEmailAndCode(t,r.code,r.tenantId)}}Kl.PROVIDER_ID="password";Kl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class d_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gd extends d_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cs extends gd{constructor(){super("facebook.com")}static credential(t){return Zo._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cs.credentialFromTaggedObject(t)}static credentialFromError(t){return Cs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Cs.credential(t.oauthAccessToken)}catch{return null}}}Cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cs.PROVIDER_ID="facebook.com";/**
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
 */class Oi extends gd{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Zo._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Oi.credentialFromTaggedObject(t)}static credentialFromError(t){return Oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Oi.credential(n,r)}catch{return null}}}Oi.GOOGLE_SIGN_IN_METHOD="google.com";Oi.PROVIDER_ID="google.com";/**
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
 */class Ss extends gd{constructor(){super("github.com")}static credential(t){return Zo._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ss.credentialFromTaggedObject(t)}static credentialFromError(t){return Ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ss.credential(t.oauthAccessToken)}catch{return null}}}Ss.GITHUB_SIGN_IN_METHOD="github.com";Ss.PROVIDER_ID="github.com";/**
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
 */class Es extends gd{constructor(){super("twitter.com")}static credential(t,n){return Zo._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Es.credentialFromTaggedObject(t)}static credentialFromError(t){return Es.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Es.credential(n,r)}catch{return null}}}Es.TWITTER_SIGN_IN_METHOD="twitter.com";Es.PROVIDER_ID="twitter.com";/**
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
 */async function K0(e,t){return md(e,"POST","/v1/accounts:signUp",Gl(e,t))}/**
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
 */class ea{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Uo._fromIdTokenResponse(t,r,i),o=a2(r);return new ea({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=a2(r);return new ea({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function a2(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ap extends mi{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ap.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ap(t,n,r,i)}}function NI(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ap._fromErrorAndOperation(e,s,t,r):s})}async function i7(e,t,n=!1){const r=await Rc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ea._forOperation(e,"link",r)}/**
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
 */async function s7(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Rc(e,NI(r,i,t,e),n);ve(s.idToken,r,"internal-error");const o=a_(s.idToken);ve(o,r,"internal-error");const{sub:a}=o;return ve(e.uid===a,r,"user-mismatch"),ea._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cr(r,"user-mismatch"),s}}/**
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
 */async function OI(e,t,n=!1){const r="signIn",i=await NI(e,r,t),s=await ea._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function o7(e,t){return OI(da(e),t)}async function a7(e,t,n){var r;const i=da(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await op(i,s,"signUpPassword");o=K0(i,c)}else o=K0(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await op(i,s,"signUpPassword");return K0(i,h)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await ea._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function l7(e,t,n){return o7(Rt(e),Kl.credential(t,n))}/**
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
 */function RI(e,t){return Rt(e).setPersistence(t)}function u7(e,t,n,r){return Rt(e).onIdTokenChanged(t,n,r)}function c7(e,t,n){return Rt(e).beforeAuthStateChanged(t,n)}function d7(e){return Rt(e).signOut()}const lp="__sak";/**
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
 */class PI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lp,"1"),this.storage.removeItem(lp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function h7(){const e=Tn();return l_(e)||Tm(e)}const f7=1e3,p7=10;class MI extends PI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=h7()&&UU(),this.fallbackToPolling=EI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FU()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,p7):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},f7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}MI.type="LOCAL";const h_=MI;/**
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
 */class LI extends PI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}LI.type="SESSION";const $I=LI;/**
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
 */function m7(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bm{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new bm(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await m7(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bm.receivers=[];/**
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
 */function f_(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class g7{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=f_("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ai(){return window}function y7(e){ai().location.href=e}/**
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
 */function FI(){return typeof ai().WorkerGlobalScope!="undefined"&&typeof ai().importScripts=="function"}async function v7(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w7(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function _7(){return FI()?self:null}/**
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
 */const UI="firebaseLocalStorageDb",x7=1,up="firebaseLocalStorage",BI="fbase_key";class yd{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dm(e,t){return e.transaction([up],t?"readwrite":"readonly").objectStore(up)}function C7(){const e=indexedDB.deleteDatabase(UI);return new yd(e).toPromise()}function $v(){const e=indexedDB.open(UI,x7);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(up,{keyPath:BI})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(up)?t(r):(r.close(),await C7(),t(await $v()))})})}async function l2(e,t,n){const r=Dm(e,!0).put({[BI]:t,value:n});return new yd(r).toPromise()}async function S7(e,t){const n=Dm(e,!1).get(t),r=await new yd(n).toPromise();return r===void 0?null:r.value}function u2(e,t){const n=Dm(e,!0).delete(t);return new yd(n).toPromise()}const E7=800,k7=3;class zI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $v(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>k7)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bm._getInstance(_7()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await v7(),!this.activeServiceWorker)return;this.sender=new g7(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||w7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await $v();return await l2(t,lp,"1"),await u2(t,lp),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>l2(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>S7(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>u2(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Dm(i,!1).getAll();return new yd(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zI.type="LOCAL";const T7=zI;new pd(3e4,6e4);/**
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
 */function VI(e,t){return t?Li(t):(ve(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class p_ extends u_{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return al(t,this._buildIdpRequest())}_linkToIdToken(t,n){return al(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return al(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function b7(e){return OI(e.auth,new p_(e),e.bypassAuthState)}function D7(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),s7(n,new p_(e),e.bypassAuthState)}async function I7(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),i7(n,new p_(e),e.bypassAuthState)}/**
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
 */class jI{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return b7;case"linkViaPopup":case"linkViaRedirect":return I7;case"reauthViaPopup":case"reauthViaRedirect":return D7;default:Cr(this.auth,"internal-error")}}resolve(t){Ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const A7=new pd(2e3,1e4);async function N7(e,t,n){const r=da(e);_U(e,t,d_);const i=VI(r,n);return new Oo(r,"signInViaPopup",t,i).executeNotNull()}class Oo extends jI{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oo.currentPopupAction&&Oo.currentPopupAction.cancel(),Oo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ve(t,this.auth,"internal-error"),t}async onExecution(){Ji(this.filter.length===1,"Popup operations only handle one event");const t=f_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(oi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(oi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,A7.get())};t()}}Oo.currentPopupAction=null;/**
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
 */const O7="pendingRedirect",af=new Map;class R7 extends jI{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=af.get(this.auth._key());if(!t){try{const r=await P7(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}af.set(this.auth._key(),t)}return this.bypassAuthState||af.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function P7(e,t){const n=$7(t),r=L7(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function M7(e,t){af.set(e._key(),t)}function L7(e){return Li(e._redirectPersistence)}function $7(e){return of(O7,e.config.apiKey,e.name)}async function F7(e,t,n=!1){const r=da(e),i=VI(r,t),o=await new R7(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const U7=10*60*1e3;class B7{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!z7(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!YI(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(oi(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=U7&&this.cachedEventUids.clear(),this.cachedEventUids.has(c2(t))}saveEventToCache(t){this.cachedEventUids.add(c2(t)),this.lastProcessedEventTime=Date.now()}}function c2(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function YI({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function z7(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YI(e);default:return!1}}/**
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
 */async function V7(e,t={}){return ql(e,"GET","/v1/projects",t)}/**
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
 */const j7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y7=/^https?/;async function W7(e){if(e.config.emulator)return;const{authorizedDomains:t}=await V7(e);for(const n of t)try{if(H7(n))return}catch{}Cr(e,"unauthorized-domain")}function H7(e){const t=Lv(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Y7.test(n))return!1;if(j7.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const G7=new pd(3e4,6e4);function d2(){const e=ai().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function q7(e){return new Promise((t,n)=>{var r,i,s;function o(){d2(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{d2(),n(oi(e,"network-request-failed"))},timeout:G7.get()})}if(!((i=(r=ai().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ai().gapi)===null||s===void 0)&&s.load)o();else{const a=zU("iframefcb");return ai()[a]=()=>{gapi.load?o():n(oi(e,"network-request-failed"))},DI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw lf=null,t})}let lf=null;function K7(e){return lf=lf||q7(e),lf}/**
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
 */const Q7=new pd(5e3,15e3),X7="__/auth/iframe",J7="emulator/auth/iframe",Z7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tB(e){const t=e.config;ve(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?o_(t,J7):`https://${e.config.authDomain}/${X7}`,r={apiKey:t.apiKey,appName:e.name,v:ca},i=eB.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fd(r).slice(1)}`}async function nB(e){const t=await K7(e),n=ai().gapi;return ve(n,e,"internal-error"),t.open({where:document.body,url:tB(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=oi(e,"network-request-failed"),a=ai().setTimeout(()=>{s(o)},Q7.get());function l(){ai().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const rB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iB=500,sB=600,oB="_blank",aB="http://localhost";class h2{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lB(e,t,n,r=iB,i=sB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rB),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Tn().toLowerCase();n&&(a=wI(c)?oB:n),vI(c)&&(t=t||aB,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[x,y])=>`${m}${x}=${y},`,"");if($U(c)&&a!=="_self")return uB(t||"",a),new h2(null);const p=window.open(t||"",a,h);ve(p,e,"popup-blocked");try{p.focus()}catch{}return new h2(p)}function uB(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cB="__/auth/handler",dB="emulator/auth/handler",hB=encodeURIComponent("fac");async function f2(e,t,n,r,i,s){ve(e.config.authDomain,e,"auth-domain-config-required"),ve(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ca,eventId:i};if(t instanceof d_){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",uF(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(t instanceof gd){const h=t.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await e._getAppCheckToken(),c=l?`#${hB}=${encodeURIComponent(l)}`:"";return`${fB(e)}?${fd(a).slice(1)}${c}`}function fB({config:e}){return e.emulator?o_(e,dB):`https://${e.authDomain}/${cB}`}/**
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
 */const Q0="webStorageSupport";class pB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$I,this._completeRedirectFn=F7,this._overrideRedirectResult=M7}async _openPopup(t,n,r,i){var s;Ji((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await f2(t,n,r,Lv(),i);return lB(t,o,f_())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await f2(t,n,r,Lv(),i);return y7(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ji(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await nB(t),r=new B7(t);return n.register("authEvent",i=>(ve(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Q0,{type:Q0},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Q0];o!==void 0&&n(!!o),Cr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=W7(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return EI()||l_()||Tm()}}const mB=pB;var p2="@firebase/auth",m2="0.23.1";/**
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
 */class gB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vB(e){Jo(new to("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),ve(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kI(e)},c=new HU(r,i,s,l);return qU(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Jo(new to("auth-internal",t=>{const n=da(t.getProvider("auth").getImmediate());return(r=>new gB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(p2,m2,yB(e)),si(p2,m2,"esm2017")}/**
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
 */const wB=5*60,_B=rI("authIdTokenMaxAge")||wB;let g2=null;const xB=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_B)return;const i=n==null?void 0:n.token;g2!==i&&(g2=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CB(e=r_()){const t=km(e,"auth");if(t.isInitialized())return t.getImmediate();const n=GU(e,{popupRedirectResolver:mB,persistence:[T7,h_,$I]}),r=rI("authTokenSyncURL");if(r){const s=xB(r);c7(n,s,()=>s(n.currentUser)),u7(n,o=>s(o))}const i=tI("auth");return i&&KU(n,`http://${i}`),n}vB("Browser");var SB="firebase",EB="9.21.0";/**
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
 */si(SB,EB,"app");var kB=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},re,m_=m_||{},Ce=kB||self;function cp(){}function Im(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function vd(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function TB(e){return Object.prototype.hasOwnProperty.call(e,X0)&&e[X0]||(e[X0]=++bB)}var X0="closure_uid_"+(1e9*Math.random()>>>0),bB=0;function DB(e,t,n){return e.call.apply(e.bind,arguments)}function IB(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function xn(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xn=DB:xn=IB,xn.apply(null,arguments)}function Nh(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function rn(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function ho(){this.s=this.s,this.o=this.o}var AB=0;ho.prototype.s=!1;ho.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),AB!=0)&&TB(this)};ho.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const WI=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function g_(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function y2(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Im(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Cn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Cn.prototype.h=function(){this.defaultPrevented=!0};var NB=function(){if(!Ce.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ce.addEventListener("test",cp,t),Ce.removeEventListener("test",cp,t)}catch{}return e}();function dp(e){return/^[\s\xa0]*$/.test(e)}var v2=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function J0(e,t){return e<t?-1:e>t?1:0}function Am(){var e=Ce.navigator;return e&&(e=e.userAgent)?e:""}function Xr(e){return Am().indexOf(e)!=-1}function y_(e){return y_[" "](e),e}y_[" "]=cp;function HI(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var OB=Xr("Opera"),bl=Xr("Trident")||Xr("MSIE"),GI=Xr("Edge"),Fv=GI||bl,qI=Xr("Gecko")&&!(Am().toLowerCase().indexOf("webkit")!=-1&&!Xr("Edge"))&&!(Xr("Trident")||Xr("MSIE"))&&!Xr("Edge"),RB=Am().toLowerCase().indexOf("webkit")!=-1&&!Xr("Edge");function KI(){var e=Ce.document;return e?e.documentMode:void 0}var hp;e:{var Z0="",ey=function(){var e=Am();if(qI)return/rv:([^\);]+)(\)|;)/.exec(e);if(GI)return/Edge\/([\d\.]+)/.exec(e);if(bl)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(RB)return/WebKit\/(\S+)/.exec(e);if(OB)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ey&&(Z0=ey?ey[1]:""),bl){var ty=KI();if(ty!=null&&ty>parseFloat(Z0)){hp=String(ty);break e}}hp=Z0}var PB={};function MB(){return HI(PB,9,function(){let e=0;const t=v2(String(hp)).split("."),n=v2("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=J0(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||J0(i[2].length==0,s[2].length==0)||J0(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var Uv;if(Ce.document&&bl){var w2=KI();Uv=w2||parseInt(hp,10)||void 0}else Uv=void 0;var LB=Uv;function Lc(e,t){if(Cn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(qI){e:{try{y_(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:$B[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Lc.$.h.call(this)}}rn(Lc,Cn);var $B={2:"touch",3:"pen",4:"mouse"};Lc.prototype.h=function(){Lc.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var wd="closure_listenable_"+(1e6*Math.random()|0),FB=0;function UB(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++FB,this.fa=this.ia=!1}function Nm(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function v_(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function QI(e){const t={};for(const n in e)t[n]=e[n];return t}const _2="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function XI(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<_2.length;s++)n=_2[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Om(e){this.src=e,this.g={},this.h=0}Om.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=zv(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new UB(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Bv(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=WI(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Nm(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function zv(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var w_="closure_lm_"+(1e6*Math.random()|0),ny={};function JI(e,t,n,r,i){if(r&&r.once)return eA(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)JI(e,t[s],n,r,i);return null}return n=C_(n),e&&e[wd]?e.O(t,n,vd(r)?!!r.capture:!!r,i):ZI(e,t,n,!1,r,i)}function ZI(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=vd(i)?!!i.capture:!!i,a=x_(e);if(a||(e[w_]=a=new Om(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=BB(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)NB||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(nA(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BB(){function e(n){return t.call(e.src,e.listener,n)}const t=zB;return e}function eA(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)eA(e,t[s],n,r,i);return null}return n=C_(n),e&&e[wd]?e.P(t,n,vd(r)?!!r.capture:!!r,i):ZI(e,t,n,!0,r,i)}function tA(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)tA(e,t[s],n,r,i);else r=vd(r)?!!r.capture:!!r,n=C_(n),e&&e[wd]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=zv(s,n,r,i),-1<n&&(Nm(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=x_(e))&&(t=e.g[t.toString()],e=-1,t&&(e=zv(t,n,r,i)),(n=-1<e?t[e]:null)&&__(n))}function __(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[wd])Bv(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(nA(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=x_(t))?(Bv(n,e),n.h==0&&(n.src=null,t[w_]=null)):Nm(e)}}}function nA(e){return e in ny?ny[e]:ny[e]="on"+e}function zB(e,t){if(e.fa)e=!0;else{t=new Lc(t,this);var n=e.listener,r=e.la||e.src;e.ia&&__(e),e=n.call(r,t)}return e}function x_(e){return e=e[w_],e instanceof Om?e:null}var ry="__closure_events_fn_"+(1e9*Math.random()>>>0);function C_(e){return typeof e=="function"?e:(e[ry]||(e[ry]=function(t){return e.handleEvent(t)}),e[ry])}function tn(){ho.call(this),this.i=new Om(this),this.S=this,this.J=null}rn(tn,ho);tn.prototype[wd]=!0;tn.prototype.removeEventListener=function(e,t,n,r){tA(this,e,t,n,r)};function un(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Cn(t,e);else if(t instanceof Cn)t.target=t.target||e;else{var i=t;t=new Cn(r,e),XI(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Oh(o,r,!0,t)&&i}if(o=t.g=e,i=Oh(o,r,!0,t)&&i,i=Oh(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Oh(o,r,!1,t)&&i}tn.prototype.N=function(){if(tn.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Nm(n[r]);delete e.g[t],e.h--}}this.J=null};tn.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};tn.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Oh(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bv(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var S_=Ce.JSON.stringify;function VB(){var e=sA;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class jB{constructor(){this.h=this.g=null}add(t,n){const r=rA.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var rA=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new YB,e=>e.reset());class YB{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WB(e){Ce.setTimeout(()=>{throw e},0)}function iA(e,t){Vv||HB(),jv||(Vv(),jv=!0),sA.add(e,t)}var Vv;function HB(){var e=Ce.Promise.resolve(void 0);Vv=function(){e.then(GB)}}var jv=!1,sA=new jB;function GB(){for(var e;e=VB();){try{e.h.call(e.g)}catch(n){WB(n)}var t=rA;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}jv=!1}function Rm(e,t){tn.call(this),this.h=e||1,this.g=t||Ce,this.j=xn(this.qb,this),this.l=Date.now()}rn(Rm,tn);re=Rm.prototype;re.ga=!1;re.T=null;re.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),un(this,"tick"),this.ga&&(E_(this),this.start()))}};re.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function E_(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}re.N=function(){Rm.$.N.call(this),E_(this),delete this.g};function k_(e,t,n){if(typeof e=="function")n&&(e=xn(e,n));else if(e&&typeof e.handleEvent=="function")e=xn(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Ce.setTimeout(e,t||0)}function oA(e){e.g=k_(()=>{e.g=null,e.i&&(e.i=!1,oA(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class qB extends ho{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:oA(this)}N(){super.N(),this.g&&(Ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $c(e){ho.call(this),this.h=e,this.g={}}rn($c,ho);var x2=[];function aA(e,t,n,r){Array.isArray(n)||(n&&(x2[0]=n.toString()),n=x2);for(var i=0;i<n.length;i++){var s=JI(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function lA(e){v_(e.g,function(t,n){this.g.hasOwnProperty(n)&&__(t)},e),e.g={}}$c.prototype.N=function(){$c.$.N.call(this),lA(this)};$c.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pm(){this.g=!0}Pm.prototype.Ea=function(){this.g=!1};function KB(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var p=h.split("_");o=2<=p.length&&p[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function QB(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Ka(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+JB(e,n)+(r?" "+r:"")})}function XB(e,t){e.info(function(){return"TIMEOUT: "+t})}Pm.prototype.info=function(){};function JB(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return S_(n)}catch{return t}}var ha={},C2=null;function Mm(){return C2=C2||new tn}ha.Ta="serverreachability";function uA(e){Cn.call(this,ha.Ta,e)}rn(uA,Cn);function Fc(e){const t=Mm();un(t,new uA(t))}ha.STAT_EVENT="statevent";function cA(e,t){Cn.call(this,ha.STAT_EVENT,e),this.stat=t}rn(cA,Cn);function Mn(e){const t=Mm();un(t,new cA(t,e))}ha.Ua="timingevent";function dA(e,t){Cn.call(this,ha.Ua,e),this.size=t}rn(dA,Cn);function _d(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Ce.setTimeout(function(){e()},t)}var Lm={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function T_(){}T_.prototype.h=null;function S2(e){return e.h||(e.h=e.i())}function fA(){}var xd={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function b_(){Cn.call(this,"d")}rn(b_,Cn);function D_(){Cn.call(this,"c")}rn(D_,Cn);var Yv;function $m(){}rn($m,T_);$m.prototype.g=function(){return new XMLHttpRequest};$m.prototype.i=function(){return{}};Yv=new $m;function Cd(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new $c(this),this.P=ZB,e=Fv?125:void 0,this.V=new Rm(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new pA}function pA(){this.i=null,this.g="",this.h=!1}var ZB=45e3,Wv={},fp={};re=Cd.prototype;re.setTimeout=function(e){this.P=e};function Hv(e,t,n){e.L=1,e.v=Um(Zi(t)),e.s=n,e.S=!0,mA(e,null)}function mA(e,t){e.G=Date.now(),Sd(e),e.A=Zi(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),SA(n.i,"t",r),e.C=0,n=e.l.I,e.h=new pA,e.g=YA(e.l,n?t:null,!e.s),0<e.O&&(e.M=new qB(xn(e.Pa,e,e.g),e.O)),aA(e.U,e.g,"readystatechange",e.nb),t=e.I?QI(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Fc(),KB(e.j,e.u,e.A,e.m,e.W,e.s)}re.nb=function(e){e=e.target;const t=this.M;t&&$i(e)==3?t.l():this.Pa(e)};re.Pa=function(e){try{if(e==this.g)e:{const h=$i(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>h)&&(h!=3||Fv||this.g&&(this.h.h||this.g.ja()||b2(this.g)))){this.J||h!=4||t==7||(t==8||0>=p?Fc(3):Fc(2)),Fm(this);var n=this.g.da();this.aa=n;t:if(gA(this)){var r=b2(this.g);e="";var i=r.length,s=$i(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ro(this),Zu(this);var o="";break t}this.h.i=new Ce.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,QB(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dp(a)){var c=a;break t}}c=null}if(n=c)Ka(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gv(this,n);else{this.i=!1,this.o=3,Mn(12),Ro(this),Zu(this);break e}}this.S?(yA(this,h,o),Fv&&this.i&&h==3&&(aA(this.U,this.V,"tick",this.mb),this.V.start())):(Ka(this.j,this.m,o,null),Gv(this,o)),h==4&&Ro(this),this.i&&!this.J&&(h==4?BA(this.l,this):(this.i=!1,Sd(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Mn(12)):(this.o=0,Mn(13)),Ro(this),Zu(this)}}}catch{}finally{}};function gA(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function yA(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=ez(e,n),i==fp){t==4&&(e.o=4,Mn(14),r=!1),Ka(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Wv){e.o=4,Mn(15),Ka(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ka(e.j,e.m,i,null),Gv(e,i);gA(e)&&i!=fp&&i!=Wv&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Mn(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),M_(t),t.L=!0,Mn(11))):(Ka(e.j,e.m,n,"[Invalid Chunked Response]"),Ro(e),Zu(e))}re.mb=function(){if(this.g){var e=$i(this.g),t=this.g.ja();this.C<t.length&&(Fm(this),yA(this,e,t),this.i&&e!=4&&Sd(this))}};function ez(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?fp:(n=Number(t.substring(n,r)),isNaN(n)?Wv:(r+=1,r+n>t.length?fp:(t=t.substr(r,n),e.C=r+n,t)))}re.cancel=function(){this.J=!0,Ro(this)};function Sd(e){e.Y=Date.now()+e.P,vA(e,e.P)}function vA(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=_d(xn(e.lb,e),t)}function Fm(e){e.B&&(Ce.clearTimeout(e.B),e.B=null)}re.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(XB(this.j,this.A),this.L!=2&&(Fc(),Mn(17)),Ro(this),this.o=2,Zu(this)):vA(this,this.Y-e)};function Zu(e){e.l.H==0||e.J||BA(e.l,e)}function Ro(e){Fm(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,E_(e.V),lA(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Gv(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||qv(n.h,e))){if(!e.K&&qv(n.h,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)gp(n),Vm(n);else break e;P_(n),Mn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=_d(xn(n.ib,n),6e3));if(1>=TA(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Po(n,11)}else if((e.K||n.g==e)&&gp(n),!dp(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const h=c[3];h!=null&&(n.qa=h,n.j.info("VER="+n.qa));const p=c[4];p!=null&&(n.Ga=p,n.j.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const x=e.g;if(x){const y=x.g?x.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(I_(s,s.h),s.h=null))}if(r.F){const _=x.g?x.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,gt(r.G,r.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=jA(r,r.I?r.oa:null,r.Y),o.K){bA(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Fm(a),Sd(a)),r.g=o}else FA(r);0<n.i.length&&jm(n)}else c[0]!="stop"&&c[0]!="close"||Po(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Po(n,7):R_(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Fc(4)}catch{}}function tz(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Im(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function nz(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(Im(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function wA(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Im(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=nz(e),r=tz(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var _A=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rz(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bo(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Bo){this.h=t!==void 0?t:e.h,pp(this,e.j),this.s=e.s,this.g=e.g,mp(this,e.m),this.l=e.l,t=e.i;var n=new Uc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),E2(this,n),this.o=e.o}else e&&(n=String(e).match(_A))?(this.h=!!t,pp(this,n[1]||"",!0),this.s=$u(n[2]||""),this.g=$u(n[3]||"",!0),mp(this,n[4]),this.l=$u(n[5]||"",!0),E2(this,n[6]||"",!0),this.o=$u(n[7]||"")):(this.h=!!t,this.i=new Uc(null,this.h))}Bo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Fu(t,k2,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Fu(t,k2,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Fu(n,n.charAt(0)=="/"?oz:sz,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Fu(n,lz)),e.join("")};function Zi(e){return new Bo(e)}function pp(e,t,n){e.j=n?$u(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mp(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function E2(e,t,n){t instanceof Uc?(e.i=t,uz(e.i,e.h)):(n||(t=Fu(t,az)),e.i=new Uc(t,e.h))}function gt(e,t,n){e.i.set(t,n)}function Um(e){return gt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function $u(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Fu(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,iz),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function iz(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var k2=/[#\/\?@]/g,sz=/[#\?:]/g,oz=/[#\?]/g,az=/[#\?@]/g,lz=/#/g;function Uc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function fo(e){e.g||(e.g=new Map,e.h=0,e.i&&rz(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}re=Uc.prototype;re.add=function(e,t){fo(this),this.i=null,e=Ql(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xA(e,t){fo(e),t=Ql(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function CA(e,t){return fo(e),t=Ql(e,t),e.g.has(t)}re.forEach=function(e,t){fo(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};re.sa=function(){fo(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};re.Z=function(e){fo(this);let t=[];if(typeof e=="string")CA(this,e)&&(t=t.concat(this.g.get(Ql(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};re.set=function(e,t){return fo(this),this.i=null,e=Ql(this,e),CA(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};re.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function SA(e,t,n){xA(e,t),0<n.length&&(e.i=null,e.g.set(Ql(e,t),g_(n)),e.h+=n.length)}re.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ql(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function uz(e,t){t&&!e.j&&(fo(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(xA(this,r),SA(this,i,n))},e)),e.j=t}var cz=class{constructor(e,t){this.h=e,this.g=t}};function EA(e){this.l=e||dz,Ce.PerformanceNavigationTiming?(e=Ce.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Ce.g&&Ce.g.Ka&&Ce.g.Ka()&&Ce.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dz=10;function kA(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function TA(e){return e.h?1:e.g?e.g.size:0}function qv(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function I_(e,t){e.g?e.g.add(t):e.h=t}function bA(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}EA.prototype.cancel=function(){if(this.i=DA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function DA(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return g_(e.i)}function A_(){}A_.prototype.stringify=function(e){return Ce.JSON.stringify(e,void 0)};A_.prototype.parse=function(e){return Ce.JSON.parse(e,void 0)};function hz(){this.g=new A_}function fz(e,t,n){const r=n||"";try{wA(e,function(i,s){let o=i;vd(i)&&(o=S_(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function pz(e,t){const n=new Pm;if(Ce.Image){const r=new Image;r.onload=Nh(Rh,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Nh(Rh,n,r,"TestLoadImage: error",!1,t),r.onabort=Nh(Rh,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Nh(Rh,n,r,"TestLoadImage: timeout",!1,t),Ce.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Rh(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Ed(e){this.l=e.fc||null,this.j=e.ob||!1}rn(Ed,T_);Ed.prototype.g=function(){return new Bm(this.l,this.j)};Ed.prototype.i=function(e){return function(){return e}}({});function Bm(e,t){tn.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=N_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rn(Bm,tn);var N_=0;re=Bm.prototype;re.open=function(e,t){if(this.readyState!=N_)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Bc(this)};re.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Ce).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};re.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kd(this)),this.readyState=N_};re.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Bc(this)),this.g&&(this.readyState=3,Bc(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Ce.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;IA(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function IA(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}re.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kd(this):Bc(this),this.readyState==3&&IA(this)}};re.Za=function(e){this.g&&(this.response=this.responseText=e,kd(this))};re.Ya=function(e){this.g&&(this.response=e,kd(this))};re.ka=function(){this.g&&kd(this)};function kd(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Bc(e)}re.setRequestHeader=function(e,t){this.v.append(e,t)};re.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};re.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Bc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Bm.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var mz=Ce.JSON.parse;function kt(e){tn.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=AA,this.L=this.M=!1}rn(kt,tn);var AA="",gz=/^https?$/i,yz=["POST","PUT"];re=kt.prototype;re.Oa=function(e){this.M=e};re.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yv.g(),this.C=this.u?S2(this.u):S2(Yv),this.g.onreadystatechange=xn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){T2(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Ce.FormData&&e instanceof Ce.FormData,!(0<=WI(yz,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{RA(this),0<this.B&&((this.L=vz(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xn(this.ua,this)):this.A=k_(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){T2(this,s)}};function vz(e){return bl&&MB()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}re.ua=function(){typeof m_!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,un(this,"timeout"),this.abort(8))};function T2(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,NA(e),zm(e)}function NA(e){e.F||(e.F=!0,un(e,"complete"),un(e,"error"))}re.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,un(this,"complete"),un(this,"abort"),zm(this))};re.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zm(this,!0)),kt.$.N.call(this)};re.La=function(){this.s||(this.G||this.v||this.l?OA(this):this.kb())};re.kb=function(){OA(this)};function OA(e){if(e.h&&typeof m_!="undefined"&&(!e.C[1]||$i(e)!=4||e.da()!=2)){if(e.v&&$i(e)==4)k_(e.La,0,e);else if(un(e,"readystatechange"),$i(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.I).match(_A)[1]||null;if(!i&&Ce.self&&Ce.self.location){var s=Ce.self.location.protocol;i=s.substr(0,s.length-1)}r=!gz.test(i?i.toLowerCase():"")}n=r}if(n)un(e,"complete"),un(e,"success");else{e.m=6;try{var o=2<$i(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",NA(e)}}finally{zm(e)}}}}function zm(e,t){if(e.g){RA(e);const n=e.g,r=e.C[0]?cp:null;e.g=null,e.C=null,t||un(e,"ready");try{n.onreadystatechange=r}catch{}}}function RA(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Ce.clearTimeout(e.A),e.A=null)}function $i(e){return e.g?e.g.readyState:0}re.da=function(){try{return 2<$i(this)?this.g.status:-1}catch{return-1}};re.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};re.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),mz(t)}};function b2(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case AA:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}re.Ia=function(){return this.m};re.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function PA(e){let t="";return v_(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function O_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=PA(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):gt(e,t,n))}function Eu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function MA(e){this.Ga=0,this.i=[],this.j=new Pm,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Eu("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Eu("baseRetryDelayMs",5e3,e),this.hb=Eu("retryDelaySeedMs",1e4,e),this.eb=Eu("forwardChannelMaxRetries",2,e),this.xa=Eu("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new EA(e&&e.concurrentRequestLimit),this.Ja=new hz,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}re=MA.prototype;re.qa=8;re.H=1;function R_(e){if(LA(e),e.H==3){var t=e.W++,n=Zi(e.G);gt(n,"SID",e.J),gt(n,"RID",t),gt(n,"TYPE","terminate"),Td(e,n),t=new Cd(e,e.j,t,void 0),t.L=2,t.v=Um(Zi(n)),n=!1,Ce.navigator&&Ce.navigator.sendBeacon&&(n=Ce.navigator.sendBeacon(t.v.toString(),"")),!n&&Ce.Image&&(new Image().src=t.v,n=!0),n||(t.g=YA(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Sd(t)}VA(e)}function Vm(e){e.g&&(M_(e),e.g.cancel(),e.g=null)}function LA(e){Vm(e),e.u&&(Ce.clearTimeout(e.u),e.u=null),gp(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&Ce.clearTimeout(e.m),e.m=null)}function jm(e){kA(e.h)||e.m||(e.m=!0,iA(e.Na,e),e.C=0)}function wz(e,t){return TA(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=_d(xn(e.Na,e,t),zA(e,e.C)),e.C++,!0)}re.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Cd(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=QI(s),XI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=$A(this,i,t),n=Zi(this.G),gt(n,"RID",e),gt(n,"CVER",22),this.F&&gt(n,"X-HTTP-Session-Id",this.F),Td(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(PA(s)))+"&"+t:this.o&&O_(n,this.o,s)),I_(this.h,i),this.bb&&gt(n,"TYPE","init"),this.P?(gt(n,"$req",t),gt(n,"SID","null"),i.ba=!0,Hv(i,n,null)):Hv(i,n,t),this.H=2}}else this.H==3&&(e?D2(this,e):this.i.length==0||kA(this.h)||D2(this))};function D2(e,t){var n;t?n=t.m:n=e.W++;const r=Zi(e.G);gt(r,"SID",e.J),gt(r,"RID",n),gt(r,"AID",e.V),Td(e,r),e.o&&e.s&&O_(r,e.o,e.s),n=new Cd(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=$A(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),I_(e.h,n),Hv(n,r,t)}function Td(e,t){e.ma&&v_(e.ma,function(n,r){gt(t,r,n)}),e.l&&wA({},function(n,r){gt(t,r,n)})}function $A(e,t,n){n=Math.min(e.i.length,n);var r=e.l?xn(e.l.Va,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{fz(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function FA(e){e.g||e.u||(e.ba=1,iA(e.Ma,e),e.A=0)}function P_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=_d(xn(e.Ma,e),zA(e,e.A)),e.A++,!0)}re.Ma=function(){if(this.u=null,UA(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=_d(xn(this.jb,this),e)}};re.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Mn(10),Vm(this),UA(this))};function M_(e){e.B!=null&&(Ce.clearTimeout(e.B),e.B=null)}function UA(e){e.g=new Cd(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Zi(e.wa);gt(t,"RID","rpc"),gt(t,"SID",e.J),gt(t,"CI",e.M?"0":"1"),gt(t,"AID",e.V),gt(t,"TYPE","xmlhttp"),Td(e,t),e.o&&e.s&&O_(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Um(Zi(t)),n.s=null,n.S=!0,mA(n,e)}re.ib=function(){this.v!=null&&(this.v=null,Vm(this),P_(this),Mn(19))};function gp(e){e.v!=null&&(Ce.clearTimeout(e.v),e.v=null)}function BA(e,t){var n=null;if(e.g==t){gp(e),M_(e),e.g=null;var r=2}else if(qv(e.h,t))n=t.F,bA(e.h,t),r=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Mm(),un(r,new dA(r,n)),jm(e)}else FA(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(r==1&&wz(e,t)||r==2&&P_(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Po(e,5);break;case 4:Po(e,10);break;case 3:Po(e,6);break;default:Po(e,2)}}}function zA(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Po(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=xn(e.pb,e);n||(n=new Bo("//www.google.com/images/cleardot.gif"),Ce.location&&Ce.location.protocol=="http"||pp(n,"https"),Um(n)),pz(n.toString(),r)}else Mn(2);e.H=0,e.l&&e.l.za(t),VA(e),LA(e)}re.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Mn(2)):(this.j.info("Failed to ping google.com"),Mn(1))};function VA(e){if(e.H=0,e.pa=[],e.l){const t=DA(e.h);(t.length!=0||e.i.length!=0)&&(y2(e.pa,t),y2(e.pa,e.i),e.h.i.length=0,g_(e.i),e.i.length=0),e.l.ya()}}function jA(e,t,n){var r=n instanceof Bo?Zi(n):new Bo(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),mp(r,r.m);else{var i=Ce.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Bo(null,void 0);r&&pp(s,r),t&&(s.g=t),i&&mp(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&gt(r,n,t),gt(r,"VER",e.qa),Td(e,r),r}function YA(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new kt(new Ed({ob:!0})):new kt(e.va),t.Oa(e.I),t}function WA(){}re=WA.prototype;re.Ba=function(){};re.Aa=function(){};re.za=function(){};re.ya=function(){};re.Va=function(){};function yp(){if(bl&&!(10<=Number(LB)))throw Error("Environmental error: no available transport.")}yp.prototype.g=function(e,t){return new or(e,t)};function or(e,t){tn.call(this),this.g=new MA(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!dp(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!dp(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xl(this)}rn(or,tn);or.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Mn(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=jA(e,null,e.Y),jm(e)};or.prototype.close=function(){R_(this.g)};or.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=S_(e),e=n);t.i.push(new cz(t.fb++,e)),t.H==3&&jm(t)};or.prototype.N=function(){this.g.l=null,delete this.j,R_(this.g),delete this.g,or.$.N.call(this)};function HA(e){b_.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}rn(HA,b_);function GA(){D_.call(this),this.status=1}rn(GA,D_);function Xl(e){this.g=e}rn(Xl,WA);Xl.prototype.Ba=function(){un(this.g,"a")};Xl.prototype.Aa=function(e){un(this.g,new HA(e))};Xl.prototype.za=function(e){un(this.g,new GA)};Xl.prototype.ya=function(){un(this.g,"b")};function _z(){this.blockSize=-1}function Vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rn(Vr,_z);Vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function iy(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Vr.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)iy(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){iy(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){iy(this,r),i=0;break}}this.h=i,this.i+=t};Vr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function Ke(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var xz={};function L_(e){return-128<=e&&128>e?HI(xz,e,function(t){return new Ke([t|0],0>t?-1:0)}):new Ke([e|0],0>e?-1:0)}function ei(e){if(isNaN(e)||!isFinite(e))return ll;if(0>e)return an(ei(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Kv;return new Ke(t,0)}function qA(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return an(qA(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ei(Math.pow(t,8)),r=ll,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=ei(Math.pow(t,s)),r=r.R(s).add(ei(o))):(r=r.R(n),r=r.add(ei(o)))}return r}var Kv=4294967296,ll=L_(0),Qv=L_(1),I2=L_(16777216);re=Ke.prototype;re.ea=function(){if(gr(this))return-an(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Kv+r)*t,t*=Kv}return e};re.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Fi(this))return"0";if(gr(this))return"-"+an(this).toString(e);for(var t=ei(Math.pow(e,6)),n=this,r="";;){var i=wp(n,t).g;n=vp(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Fi(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};re.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Fi(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function gr(e){return e.h==-1}re.X=function(e){return e=vp(this,e),gr(e)?-1:Fi(e)?0:1};function an(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Ke(n,~e.h).add(Qv)}re.abs=function(){return gr(this)?an(this):this};re.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ke(n,n[n.length-1]&-2147483648?-1:0)};function vp(e,t){return e.add(an(t))}re.R=function(e){if(Fi(this)||Fi(e))return ll;if(gr(this))return gr(e)?an(this).R(an(e)):an(an(this).R(e));if(gr(e))return an(this.R(an(e)));if(0>this.X(I2)&&0>e.X(I2))return ei(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Ph(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ph(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ph(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ph(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Ke(n,0)};function Ph(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ku(e,t){this.g=e,this.h=t}function wp(e,t){if(Fi(t))throw Error("division by zero");if(Fi(e))return new ku(ll,ll);if(gr(e))return t=wp(an(e),t),new ku(an(t.g),an(t.h));if(gr(t))return t=wp(e,an(t)),new ku(an(t.g),t.h);if(30<e.g.length){if(gr(e)||gr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Qv,r=t;0>=r.X(e);)n=A2(n),r=A2(r);var i=Ia(n,1),s=Ia(r,1);for(r=Ia(r,2),n=Ia(n,2);!Fi(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ia(r,1),n=Ia(n,1)}return t=vp(e,i.R(t)),new ku(i,t)}for(i=ll;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ei(n),o=s.R(t);gr(o)||0<o.X(e);)n-=r,s=ei(n),o=s.R(t);Fi(s)&&(s=Qv),i=i.add(s),e=vp(e,o)}return new ku(i,e)}re.gb=function(e){return wp(this,e).h};re.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Ke(n,this.h&e.h)};re.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Ke(n,this.h|e.h)};re.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Ke(n,this.h^e.h)};function A2(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Ke(n,e.h)}function Ia(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Ke(i,e.h)}yp.prototype.createWebChannel=yp.prototype.g;or.prototype.send=or.prototype.u;or.prototype.open=or.prototype.m;or.prototype.close=or.prototype.close;Lm.NO_ERROR=0;Lm.TIMEOUT=8;Lm.HTTP_ERROR=6;hA.COMPLETE="complete";fA.EventType=xd;xd.OPEN="a";xd.CLOSE="b";xd.ERROR="c";xd.MESSAGE="d";tn.prototype.listen=tn.prototype.O;kt.prototype.listenOnce=kt.prototype.P;kt.prototype.getLastError=kt.prototype.Sa;kt.prototype.getLastErrorCode=kt.prototype.Ia;kt.prototype.getStatus=kt.prototype.da;kt.prototype.getResponseJson=kt.prototype.Wa;kt.prototype.getResponseText=kt.prototype.ja;kt.prototype.send=kt.prototype.ha;kt.prototype.setWithCredentials=kt.prototype.Oa;Vr.prototype.digest=Vr.prototype.l;Vr.prototype.reset=Vr.prototype.reset;Vr.prototype.update=Vr.prototype.j;Ke.prototype.add=Ke.prototype.add;Ke.prototype.multiply=Ke.prototype.R;Ke.prototype.modulo=Ke.prototype.gb;Ke.prototype.compare=Ke.prototype.X;Ke.prototype.toNumber=Ke.prototype.ea;Ke.prototype.toString=Ke.prototype.toString;Ke.prototype.getBits=Ke.prototype.D;Ke.fromNumber=ei;Ke.fromString=qA;var Cz=function(){return new yp},Sz=function(){return Mm()},sy=Lm,Ez=hA,kz=ha,N2={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Tz=Ed,Mh=fA,bz=kt,Dz=Vr,ul=Ke;const O2="@firebase/firestore";/**
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
 */class yn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yn.UNAUTHENTICATED=new yn(null),yn.GOOGLE_CREDENTIALS=new yn("google-credentials-uid"),yn.FIRST_PARTY=new yn("first-party-uid"),yn.MOCK_USER=new yn("mock-user");/**
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
 */let Jl="9.21.0";/**
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
 */const ta=new t_("@firebase/firestore");function R2(){return ta.logLevel}function ce(e,...t){if(ta.logLevel<=je.DEBUG){const n=t.map($_);ta.debug(`Firestore (${Jl}): ${e}`,...n)}}function es(e,...t){if(ta.logLevel<=je.ERROR){const n=t.map($_);ta.error(`Firestore (${Jl}): ${e}`,...n)}}function Dl(e,...t){if(ta.logLevel<=je.WARN){const n=t.map($_);ta.warn(`Firestore (${Jl}): ${e}`,...n)}}function $_(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function xe(e="Unexpected state"){const t=`FIRESTORE (${Jl}) INTERNAL ASSERTION FAILED: `+e;throw es(t),new Error(t)}function lt(e,t){e||xe()}function ke(e,t){return e}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends mi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class KA{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Iz{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(yn.UNAUTHENTICATED))}shutdown(){}}class Az{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nz{constructor(t){this.t=t,this.currentUser=yn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yi,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yi)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string"),new KA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return lt(t===null||typeof t=="string"),new yn(t)}}class Oz{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=yn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Rz{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new Oz(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(yn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pz{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mz{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(lt(typeof n.token=="string"),this.T=n.token,new Pz(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Lz(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class QA{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Lz(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function He(e,t){return e<t?-1:e>t?1:0}function Il(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Ht{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new fe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new fe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new fe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ht.fromMillis(Date.now())}static fromDate(t){return Ht.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?He(this.nanoseconds,t.nanoseconds):He(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Se{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Se(t)}static min(){return new Se(new Ht(0,0))}static max(){return new Se(new Ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zc{constructor(t,n,r){n===void 0?n=0:n>t.length&&xe(),r===void 0?r=t.length-n:r>t.length-n&&xe(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return zc.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof zc?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class yt extends zc{construct(t,n,r){return new yt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new fe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new yt(n)}static emptyPath(){return new yt([])}}const $z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _n extends zc{construct(t,n,r){return new _n(t,n,r)}static isValidIdentifier(t){return $z.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_n.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _n(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new fe(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new fe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new fe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new fe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _n(n)}static emptyPath(){return new _n([])}}/**
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
 */class pe{constructor(t){this.path=t}static fromPath(t){return new pe(yt.fromString(t))}static fromName(t){return new pe(yt.fromString(t).popFirst(5))}static empty(){return new pe(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&yt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return yt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pe(new yt(t.slice()))}}function Fz(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Se.fromTimestamp(r===1e9?new Ht(n+1,0):new Ht(n,r));return new no(i,pe.empty(),t)}function Uz(e){return new no(e.readTime,e.key,-1)}class no{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new no(Se.min(),pe.empty(),-1)}static max(){return new no(Se.max(),pe.empty(),-1)}}function Bz(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=pe.comparator(e.documentKey,t.documentKey),n!==0?n:He(e.largestBatchId,t.largestBatchId))}/**
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
 */const zz="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vz{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function bd(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==zz)throw e;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&xe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,r)=>{n(t)})}static reject(t){return new Q((n,r)=>{r(t)})}static waitFor(t){return new Q((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=Q.resolve(!1);for(const r of t)n=n.next(i=>i?Q.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new Q((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(t[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new Q((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Dd(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class F_{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}F_.ct=-1;function Ym(e){return e==null}function _p(e){return e===0&&1/e==-1/0}function jz(e){return typeof e=="number"&&Number.isInteger(e)&&!_p(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function P2(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fa(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function XA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ct{constructor(t,n){this.comparator=t,this.root=n||on.EMPTY}insert(t,n){return new Ct(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,on.BLACK,null,null))}remove(t){return new Ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,on.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Lh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Lh(this.root,t,this.comparator,!1)}getReverseIterator(){return new Lh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Lh(this.root,t,this.comparator,!0)}}class Lh{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class on{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:on.RED,this.left=i!=null?i:on.EMPTY,this.right=s!=null?s:on.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new on(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return on.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return on.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw xe();const t=this.left.check();if(t!==this.right.check())throw xe();return t+(this.isRed()?0:1)}}on.EMPTY=null,on.RED=!0,on.BLACK=!1;on.EMPTY=new class{constructor(){this.size=0}get key(){throw xe()}get value(){throw xe()}get color(){throw xe()}get left(){throw xe()}get right(){throw xe()}copy(e,t,n,r,i){return this}insert(e,t,n){return new on(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Sn{constructor(t){this.comparator=t,this.data=new Ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new M2(this.data.getIterator())}getIteratorFrom(t){return new M2(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Sn)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Sn(this.comparator);return n.data=t,n}}class M2{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tr{constructor(t){this.fields=t,t.sort(_n.comparator)}static empty(){return new tr([])}unionWith(t){let n=new Sn(_n.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new tr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Il(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class JA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new JA("Invalid base64 string: "+i):i}}(t);return new bn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new bn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return He(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bn.EMPTY_BYTE_STRING=new bn("");const Yz=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ro(e){if(lt(!!e),typeof e=="string"){let t=0;const n=Yz.exec(e);if(lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Mt(e.seconds),nanos:Mt(e.nanos)}}function Mt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function na(e){return typeof e=="string"?bn.fromBase64String(e):bn.fromUint8Array(e)}/**
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
 */function U_(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function B_(e){const t=e.mapValue.fields.__previous_value__;return U_(t)?B_(t):t}function Vc(e){const t=ro(e.mapValue.fields.__local_write_time__.timestampValue);return new Ht(t.seconds,t.nanos)}/**
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
 */class Wz{constructor(t,n,r,i,s,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class jc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new jc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof jc&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const $h={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ra(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?U_(e)?4:Hz(e)?9007199254740991:10:xe()}function ui(e,t){if(e===t)return!0;const n=ra(e);if(n!==ra(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Vc(e).isEqual(Vc(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ro(r.timestampValue),o=ro(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return na(r.bytesValue).isEqual(na(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Mt(r.geoPointValue.latitude)===Mt(i.geoPointValue.latitude)&&Mt(r.geoPointValue.longitude)===Mt(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Mt(r.integerValue)===Mt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Mt(r.doubleValue),o=Mt(i.doubleValue);return s===o?_p(s)===_p(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return Il(e.arrayValue.values||[],t.arrayValue.values||[],ui);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(P2(s)!==P2(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ui(s[a],o[a])))return!1;return!0}(e,t);default:return xe()}}function Yc(e,t){return(e.values||[]).find(n=>ui(n,t))!==void 0}function Al(e,t){if(e===t)return 0;const n=ra(e),r=ra(t);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Mt(i.integerValue||i.doubleValue),a=Mt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return L2(e.timestampValue,t.timestampValue);case 4:return L2(Vc(e),Vc(t));case 5:return He(e.stringValue,t.stringValue);case 6:return function(i,s){const o=na(i),a=na(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=He(o[l],a[l]);if(c!==0)return c}return He(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=He(Mt(i.latitude),Mt(s.latitude));return o!==0?o:He(Mt(i.longitude),Mt(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Al(o[l],a[l]);if(c)return c}return He(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===$h.mapValue&&s===$h.mapValue)return 0;if(i===$h.mapValue)return 1;if(s===$h.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const p=He(a[h],c[h]);if(p!==0)return p;const m=Al(o[a[h]],l[c[h]]);if(m!==0)return m}return He(a.length,c.length)}(e.mapValue,t.mapValue);default:throw xe()}}function L2(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return He(e,t);const n=ro(e),r=ro(t),i=He(n.seconds,r.seconds);return i!==0?i:He(n.nanos,r.nanos)}function Nl(e){return Xv(e)}function Xv(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=ro(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?na(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,pe.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Xv(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Xv(r.fields[a])}`;return s+"}"}(e.mapValue):xe();var t,n}function Jv(e){return!!e&&"integerValue"in e}function z_(e){return!!e&&"arrayValue"in e}function $2(e){return!!e&&"nullValue"in e}function F2(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function uf(e){return!!e&&"mapValue"in e}function ec(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fa(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ec(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ec(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Hz(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vn{constructor(t){this.value=t}static empty(){return new Vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!uf(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ec(n)}setAll(t){let n=_n.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ec(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());uf(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ui(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];uf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){fa(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Vn(ec(this.value))}}function ZA(e){const t=[];return fa(e.fields,(n,r)=>{const i=new _n([n]);if(uf(r)){const s=ZA(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new tr(t)}/**
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
 */class wn{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new wn(t,0,Se.min(),Se.min(),Se.min(),Vn.empty(),0)}static newFoundDocument(t,n,r,i){return new wn(t,1,n,Se.min(),r,i,0)}static newNoDocument(t,n){return new wn(t,2,n,Se.min(),Se.min(),Vn.empty(),0)}static newUnknownDocument(t,n){return new wn(t,3,n,Se.min(),Se.min(),Vn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xp{constructor(t,n){this.position=t,this.inclusive=n}}function U2(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=pe.comparator(pe.fromName(o.referenceValue),n.key):r=Al(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function B2(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ui(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class tc{constructor(t,n="asc"){this.field=t,this.dir=n}}function Gz(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class e4{}class jt extends e4{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Kz(t,n,r):n==="array-contains"?new Jz(t,r):n==="in"?new Zz(t,r):n==="not-in"?new eV(t,r):n==="array-contains-any"?new tV(t,r):new jt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Qz(t,r):new Xz(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Al(n,this.value)):n!==null&&ra(this.value)===ra(n)&&this.matchesComparison(Al(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return xe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ci extends e4{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new ci(t,n)}matches(t){return t4(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function t4(e){return e.op==="and"}function n4(e){return qz(e)&&t4(e)}function qz(e){for(const t of e.filters)if(t instanceof ci)return!1;return!0}function Zv(e){if(e instanceof jt)return e.field.canonicalString()+e.op.toString()+Nl(e.value);if(n4(e))return e.filters.map(t=>Zv(t)).join(",");{const t=e.filters.map(n=>Zv(n)).join(",");return`${e.op}(${t})`}}function r4(e,t){return e instanceof jt?function(n,r){return r instanceof jt&&n.op===r.op&&n.field.isEqual(r.field)&&ui(n.value,r.value)}(e,t):e instanceof ci?function(n,r){return r instanceof ci&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&r4(s,r.filters[o]),!0):!1}(e,t):void xe()}function i4(e){return e instanceof jt?function(t){return`${t.field.canonicalString()} ${t.op} ${Nl(t.value)}`}(e):e instanceof ci?function(t){return t.op.toString()+" {"+t.getFilters().map(i4).join(" ,")+"}"}(e):"Filter"}class Kz extends jt{constructor(t,n,r){super(t,n,r),this.key=pe.fromName(r.referenceValue)}matches(t){const n=pe.comparator(t.key,this.key);return this.matchesComparison(n)}}class Qz extends jt{constructor(t,n){super(t,"in",n),this.keys=s4("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Xz extends jt{constructor(t,n){super(t,"not-in",n),this.keys=s4("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function s4(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class Jz extends jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return z_(n)&&Yc(n.arrayValue,this.value)}}class Zz extends jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Yc(this.value.arrayValue,n)}}class eV extends jt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Yc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Yc(this.value.arrayValue,n)}}class tV extends jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!z_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yc(this.value.arrayValue,r))}}/**
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
 */class nV{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function z2(e,t=null,n=[],r=[],i=null,s=null,o=null){return new nV(e,t,n,r,i,s,o)}function V_(e){const t=ke(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Zv(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ym(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Nl(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Nl(r)).join(",")),t.ft=n}return t.ft}function j_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Gz(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!r4(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!B2(e.startAt,t.startAt)&&B2(e.endAt,t.endAt)}function e1(e){return pe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Wm{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function rV(e,t,n,r,i,s,o,a){return new Wm(e,t,n,r,i,s,o,a)}function Y_(e){return new Wm(e)}function V2(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function iV(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function sV(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function oV(e){return e.collectionGroup!==null}function cl(e){const t=ke(e);if(t.dt===null){t.dt=[];const n=sV(t),r=iV(t);if(n!==null&&r===null)n.isKeyField()||t.dt.push(new tc(n)),t.dt.push(new tc(_n.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new tc(_n.keyField(),s))}}}return t.dt}function ts(e){const t=ke(e);if(!t._t)if(t.limitType==="F")t._t=z2(t.path,t.collectionGroup,cl(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of cl(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new tc(s.field,o))}const r=t.endAt?new xp(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new xp(t.startAt.position,t.startAt.inclusive):null;t._t=z2(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t._t}function t1(e,t,n){return new Wm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Hm(e,t){return j_(ts(e),ts(t))&&e.limitType===t.limitType}function o4(e){return`${V_(ts(e))}|lt:${e.limitType}`}function n1(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>i4(r)).join(", ")}]`),Ym(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Nl(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Nl(r)).join(",")),`Target(${n})`}(ts(e))}; limitType=${e.limitType})`}function Gm(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):pe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of cl(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=U2(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,cl(n),r)||n.endAt&&!function(i,s,o){const a=U2(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,cl(n),r))}(e,t)}function aV(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function a4(e){return(t,n)=>{let r=!1;for(const i of cl(e)){const s=lV(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lV(e,t,n){const r=e.field.isKeyField()?pe.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Al(a,l):xe()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return xe()}}/**
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
 */class Zl{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){fa(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return XA(this.inner)}size(){return this.innerSize}}/**
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
 */const uV=new Ct(pe.comparator);function ns(){return uV}const l4=new Ct(pe.comparator);function Uu(...e){let t=l4;for(const n of e)t=t.insert(n.key,n);return t}function u4(e){let t=l4;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Mo(){return nc()}function c4(){return nc()}function nc(){return new Zl(e=>e.toString(),(e,t)=>e.isEqual(t))}const cV=new Ct(pe.comparator),dV=new Sn(pe.comparator);function Pe(...e){let t=dV;for(const n of e)t=t.add(n);return t}const hV=new Sn(He);function fV(){return hV}/**
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
 */function d4(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_p(t)?"-0":t}}function h4(e){return{integerValue:""+e}}function f4(e,t){return jz(t)?h4(t):d4(e,t)}/**
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
 */class qm{constructor(){this._=void 0}}function pV(e,t,n){return e instanceof Cp?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&U_(i)&&(i=B_(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof Wc?m4(e,t):e instanceof Hc?g4(e,t):function(r,i){const s=p4(r,i),o=j2(s)+j2(r.wt);return Jv(s)&&Jv(r.wt)?h4(o):d4(r.serializer,o)}(e,t)}function mV(e,t,n){return e instanceof Wc?m4(e,t):e instanceof Hc?g4(e,t):n}function p4(e,t){return e instanceof Gc?Jv(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class Cp extends qm{}class Wc extends qm{constructor(t){super(),this.elements=t}}function m4(e,t){const n=y4(t);for(const r of e.elements)n.some(i=>ui(i,r))||n.push(r);return{arrayValue:{values:n}}}class Hc extends qm{constructor(t){super(),this.elements=t}}function g4(e,t){let n=y4(t);for(const r of e.elements)n=n.filter(i=>!ui(i,r));return{arrayValue:{values:n}}}class Gc extends qm{constructor(t,n){super(),this.serializer=t,this.wt=n}}function j2(e){return Mt(e.integerValue||e.doubleValue)}function y4(e){return z_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class gV{constructor(t,n){this.field=t,this.transform=n}}function yV(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Wc&&r instanceof Wc||n instanceof Hc&&r instanceof Hc?Il(n.elements,r.elements,ui):n instanceof Gc&&r instanceof Gc?ui(n.wt,r.wt):n instanceof Cp&&r instanceof Cp}(e.transform,t.transform)}class vV{constructor(t,n){this.version=t,this.transformResults=n}}class Br{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Br}static exists(t){return new Br(void 0,t)}static updateTime(t){return new Br(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cf(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Km{}function v4(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new _4(e.key,Br.none()):new Id(e.key,e.data,Br.none());{const n=e.data,r=Vn.empty();let i=new Sn(_n.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new po(e.key,r,new tr(i.toArray()),Br.none())}}function wV(e,t,n){e instanceof Id?function(r,i,s){const o=r.value.clone(),a=W2(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof po?function(r,i,s){if(!cf(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=W2(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(w4(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function rc(e,t,n,r){return e instanceof Id?function(i,s,o,a){if(!cf(i.precondition,s))return o;const l=i.value.clone(),c=H2(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof po?function(i,s,o,a){if(!cf(i.precondition,s))return o;const l=H2(i.fieldTransforms,a,s),c=s.data;return c.setAll(w4(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,s,o){return cf(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function _V(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=p4(r.transform,i||null);s!=null&&(n===null&&(n=Vn.empty()),n.set(r.field,s))}return n||null}function Y2(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Il(n,r,(i,s)=>yV(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Id extends Km{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class po extends Km{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function w4(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function W2(e,t,n){const r=new Map;lt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,mV(o,a,n[i]))}return r}function H2(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,pV(s,o,t))}return r}class _4 extends Km{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xV extends Km{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CV{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&wV(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=rc(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=rc(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=c4();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=v4(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Se.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pe())}isEqual(t){return this.batchId===t.batchId&&Il(this.mutations,t.mutations,(n,r)=>Y2(n,r))&&Il(this.baseMutations,t.baseMutations,(n,r)=>Y2(n,r))}}class W_{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){lt(t.mutations.length===r.length);let i=cV;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new W_(t,n,r,i)}}/**
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
 */class SV{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class EV{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Pt,Fe;function kV(e){switch(e){default:return xe();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function x4(e){if(e===void 0)return es("GRPC error has no .code"),H.UNKNOWN;switch(e){case Pt.OK:return H.OK;case Pt.CANCELLED:return H.CANCELLED;case Pt.UNKNOWN:return H.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return H.INTERNAL;case Pt.UNAVAILABLE:return H.UNAVAILABLE;case Pt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Pt.NOT_FOUND:return H.NOT_FOUND;case Pt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Pt.ABORTED:return H.ABORTED;case Pt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Pt.DATA_LOSS:return H.DATA_LOSS;default:return xe()}}(Fe=Pt||(Pt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class H_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fh}static getOrCreateInstance(){return Fh===null&&(Fh=new H_),Fh}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Fh=null;/**
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
 */function TV(){return new TextEncoder}/**
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
 */const bV=new ul([4294967295,4294967295],0);function G2(e){const t=TV().encode(e),n=new Dz;return n.update(t),new Uint8Array(n.digest())}function q2(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ul([n,r],0),new ul([i,s],0)]}class G_{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bu(`Invalid padding: ${n}`);if(r<0)throw new Bu(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Bu(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Bu(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=ul.fromNumber(this.yt)}Tt(t,n,r){let i=t.add(n.multiply(ul.fromNumber(r)));return i.compare(bV)===1&&(i=new ul([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=G2(t),[r,i]=q2(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new G_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=G2(t),[r,i]=q2(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Bu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qm{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ad.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Qm(Se.min(),i,new Ct(He),ns(),Pe())}}class Ad{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ad(r,n,Pe(),Pe(),Pe())}}/**
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
 */class df{constructor(t,n,r,i){this.vt=t,this.removedTargetIds=n,this.key=r,this.Pt=i}}class C4{constructor(t,n){this.targetId=t,this.bt=n}}class S4{constructor(t,n,r=bn.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class K2{constructor(){this.Vt=0,this.St=X2(),this.Dt=bn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Pe(),n=Pe(),r=Pe();return this.St.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:xe()}}),new Ad(this.Dt,this.Ct,t,n,r)}$t(){this.xt=!1,this.St=X2()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class DV{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=ns(),this.jt=Q2(),this.zt=new Ct(He)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const r=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&r.Mt(t.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(t.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(t.resumeToken));break;default:xe()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(t){var n;const r=t.targetId,i=t.bt.count,s=this.ne(r);if(s){const o=s.target;if(e1(o))if(i===0){const a=new pe(o.path);this.Jt(r,a,wn.newNoDocument(a,Se.min()))}else lt(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(t,a);if(l!==0){this.te(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=H_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,h,p){var m,x,y,_,k,C;const v={localCacheCount:h,existenceFilterCount:p.count},S=p.unchangedNames;return S&&(v.bloomFilter={applied:c===0,hashCount:(m=S==null?void 0:S.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(_=(y=(x=S==null?void 0:S.bits)===null||x===void 0?void 0:x.bitmap)===null||y===void 0?void 0:y.length)!==null&&_!==void 0?_:0,padding:(C=(k=S==null?void 0:S.bits)===null||k===void 0?void 0:k.padding)!==null&&C!==void 0?C:0}),v}(l,a,t.bt))}}}}ie(t,n){const{unchangedNames:r,count:i}=t.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=na(s).toUint8Array()}catch(h){if(h instanceof JA)return Dl("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new G_(l,o,a)}catch(h){return Dl(h instanceof Bu?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.yt===0?1:i!==n-this.re(t.targetId,c)?2:0}re(t,n){const r=this.Kt.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(t,s,null),i++)}),i}ue(t){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&e1(a.target)){const l=new pe(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,wn.newNoDocument(l,t))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Pe();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(t));const i=new Qm(t,n,this.zt,this.Qt,r);return this.Qt=ns(),this.jt=Q2(),this.zt=new Ct(He),i}Ht(t,n){if(!this.Zt(t))return;const r=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,r){if(!this.Zt(t))return;const i=this.Xt(t);this.ce(t,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new K2,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new Sn(He),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new K2),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function Q2(){return new Ct(pe.comparator)}function X2(){return new Ct(pe.comparator)}const IV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),NV=(()=>({and:"AND",or:"OR"}))();class OV{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function r1(e,t){return e.useProto3Json||Ym(t)?t:{value:t}}function Sp(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function E4(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function RV(e,t){return Sp(e,t.toTimestamp())}function li(e){return lt(!!e),Se.fromTimestamp(function(t){const n=ro(t);return new Ht(n.seconds,n.nanos)}(e))}function q_(e,t){return function(n){return new yt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function k4(e){const t=yt.fromString(e);return lt(I4(t)),t}function i1(e,t){return q_(e.databaseId,t.path)}function oy(e,t){const n=k4(t);if(n.get(1)!==e.databaseId.projectId)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new pe(T4(n))}function s1(e,t){return q_(e.databaseId,t)}function PV(e){const t=k4(e);return t.length===4?yt.emptyPath():T4(t)}function o1(e){return new yt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function T4(e){return lt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function J2(e,t,n){return{name:i1(e,t),fields:n.value.mapValue.fields}}function MV(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:xe()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(lt(c===void 0||typeof c=="string"),bn.fromBase64String(c||"")):(lt(c===void 0||c instanceof Uint8Array),bn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?H.UNKNOWN:x4(l.code);return new fe(c,l.message||"")}(o);n=new S4(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=oy(e,r.document.name),s=li(r.document.updateTime),o=r.document.createTime?li(r.document.createTime):Se.min(),a=new Vn({mapValue:{fields:r.document.fields}}),l=wn.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new df(c,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=oy(e,r.document),s=r.readTime?li(r.readTime):Se.min(),o=wn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new df([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=oy(e,r.document),s=r.removedTargetIds||[];n=new df([],s,i,null)}else{if(!("filter"in t))return xe();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new EV(i,s),a=r.targetId;n=new C4(a,o)}}return n}function LV(e,t){let n;if(t instanceof Id)n={update:J2(e,t.key,t.value)};else if(t instanceof _4)n={delete:i1(e,t.key)};else if(t instanceof po)n={update:J2(e,t.key,t.data),updateMask:WV(t.fieldMask)};else{if(!(t instanceof xV))return xe();n={verify:i1(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Cp)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Wc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Hc)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Gc)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw xe()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:RV(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:xe()}(e,t.precondition)),n}function $V(e,t){return e&&e.length>0?(lt(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?li(r.updateTime):li(i);return s.isEqual(Se.min())&&(s=li(i)),new vV(s,r.transformResults||[])}(n,t))):[]}function FV(e,t){return{documents:[s1(e,t.path)]}}function UV(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=s1(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=s1(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return D4(ci.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Na(h.field),direction:VV(h.dir)}}(c))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=r1(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function BV(e){let t=PV(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lt(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(h){const p=b4(h);return p instanceof ci&&n4(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(p){return new tc(Oa(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(h)));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Ym(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,m=h.values||[];return new xp(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,m=h.values||[];return new xp(m,p)}(n.endAt)),rV(t,i,o,s,a,"F",l,c)}function zV(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function b4(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Oa(t.unaryFilter.field);return jt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Oa(t.unaryFilter.field);return jt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Oa(t.unaryFilter.field);return jt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Oa(t.unaryFilter.field);return jt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return xe()}}(e):e.fieldFilter!==void 0?function(t){return jt.create(Oa(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xe()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ci.create(t.compositeFilter.filters.map(n=>b4(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return xe()}}(t.compositeFilter.op))}(e):xe()}function VV(e){return IV[e]}function jV(e){return AV[e]}function YV(e){return NV[e]}function Na(e){return{fieldPath:e.canonicalString()}}function Oa(e){return _n.fromServerFormat(e.fieldPath)}function D4(e){return e instanceof jt?function(t){if(t.op==="=="){if(F2(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NAN"}};if($2(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(F2(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NAN"}};if($2(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Na(t.field),op:jV(t.op),value:t.value}}}(e):e instanceof ci?function(t){const n=t.getFilters().map(r=>D4(r));return n.length===1?n[0]:{compositeFilter:{op:YV(t.op),filters:n}}}(e):xe()}function WV(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function I4(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Is{constructor(t,n,r,i,s=Se.min(),o=Se.min(),a=bn.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Is(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class HV{constructor(t){this.le=t}}function GV(e){const t=BV({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?t1(t,t.limit,"L"):t}/**
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
 */class qV{constructor(){this.sn=new KV}addToCollectionParentIndex(t,n){return this.sn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(no.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(no.min())}updateCollectionGroup(t,n,r){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class KV{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Sn(yt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Sn(yt.comparator)).toArray()}}/**
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
 */class Ol{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new Ol(0)}static kn(){return new Ol(-1)}}/**
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
 */class QV{constructor(){this.changes=new Zl(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,wn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class XV{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class JV{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&rc(r.mutation,i,tr.empty(),Ht.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Pe()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Pe()){const i=Mo();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Uu();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Mo();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Pe()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=ns();const o=nc(),a=nc();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof po)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),rc(h.mutation,c,h.mutation.getFieldMask(),Ht.now())):o.set(c.key,tr.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new XV(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(t,n){const r=nc();let i=new Ct((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||tr.empty();h=a.applyToLocalView(c,h),r.set(l,h);const p=(i.get(a.batchId)||Pe()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,p=c4();h.forEach(m=>{if(!s.has(m)){const x=v4(n.get(m),r.get(m));x!==null&&p.set(m,x),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,p))}return Q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):oV(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):Q.resolve(Mo());let a=-1,l=s;return o.next(c=>Q.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?Q.resolve():this.remoteDocumentCache.getEntry(t,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,Pe())).next(h=>({batchId:a,changes:u4(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pe(n)).next(r=>{let i=Uu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Uu();return this.indexManager.getCollectionParents(t,i).next(o=>Q.forEach(o,a=>{const l=function(c,h){return new Wm(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(c=>{c.forEach((h,p)=>{s=s.insert(h,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,wn.newInvalidDocument(c)))});let o=Uu();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&rc(c.mutation,l,tr.empty(),Ht.now()),Gm(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class ZV{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return Q.resolve(this.us.get(n))}saveBundleMetadata(t,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:li(r.createTime)}),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(r){return{name:r.name,query:GV(r.bundledQuery),readTime:li(r.readTime)}}(n)),Q.resolve()}}/**
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
 */class ej{constructor(){this.overlays=new Ct(pe.comparator),this.hs=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Mo();return Q.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.de(t,n,s)}),Q.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),Q.resolve()}getOverlaysForCollection(t,n,r){const i=Mo(),s=n.length+1,o=new pe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return Q.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Ct((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Mo(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Mo(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return Q.resolve(a)}de(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SV(n,r));let s=this.hs.get(n);s===void 0&&(s=Pe(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class K_{constructor(){this.ls=new Sn(Xt.fs),this.ds=new Sn(Xt._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const r=new Xt(t,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.gs(new Xt(t,n))}ys(t,n){t.forEach(r=>this.removeReference(r,n))}ps(t){const n=new pe(new yt([])),r=new Xt(n,t),i=new Xt(n,t+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new pe(new yt([])),r=new Xt(n,t),i=new Xt(n,t+1);let s=Pe();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Xt(t,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Xt{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return pe.comparator(t.key,n.key)||He(t.Es,n.Es)}static _s(t,n){return He(t.Es,n.Es)||pe.comparator(t.key,n.key)}}/**
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
 */class tj{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Sn(Xt.fs)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Xt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(t,n){return Q.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Xt(n,0),i=new Xt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Sn(He);return n.forEach(i=>{const s=new Xt(i,0),o=new Xt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),Q.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;pe.isDocumentKey(s)||(s=s.child(""));const o=new Xt(new pe(s),0);let a=new Sn(He);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Es)),!0)},o),Q.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){lt(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return Q.forEach(n.mutations,i=>{const s=new Xt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=r})}Dn(t){}containsKey(t,n){const r=new Xt(n,0),i=this.Rs.firstAfterOrEqual(r);return Q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nj{constructor(t){this.Ss=t,this.docs=new Ct(pe.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():wn.newInvalidDocument(n))}getEntries(t,n){let r=ns();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():wn.newInvalidDocument(i))}),Q.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=ns();const o=n.path,a=new pe(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Bz(Uz(h),r)<=0||(i.has(h.key)||Gm(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(t,n,r,i){xe()}Ds(t,n){return Q.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new rj(this)}getSize(t){return Q.resolve(this.size)}}class rj extends QV{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(t,i)):this.rs.removeEntry(r)}),Q.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
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
 */class ij{constructor(t){this.persistence=t,this.Cs=new Zl(n=>V_(n),j_),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.xs=0,this.Ns=new K_,this.targetCount=0,this.ks=Ol.Nn()}forEachTarget(t,n){return this.Cs.forEach((r,i)=>n(i)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),Q.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new Ol(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.$n(n),Q.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),Q.waitFor(s).next(()=>i)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cs.get(n)||null;return Q.resolve(r)}addMatchingKeys(t,n,r){return this.Ns.ws(n,r),Q.resolve()}removeMatchingKeys(t,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ns.Ts(n);return Q.resolve(r)}containsKey(t,n){return Q.resolve(this.Ns.containsKey(n))}}/**
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
 */class sj{constructor(t,n){this.Ms={},this.overlays={},this.Os=new F_(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new ij(this),this.indexManager=new qV,this.remoteDocumentCache=function(r){return new nj(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new HV(n),this.Ls=new ZV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ej,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Ms[t.toKey()];return r||(r=new tj(n,this.referenceDelegate),this.Ms[t.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,r){ce("MemoryPersistence","Starting transaction:",t);const i=new oj(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(t,n){return Q.or(Object.values(this.Ms).map(r=>()=>r.containsKey(t,n)))}}class oj extends Vz{constructor(t){super(),this.currentSequenceNumber=t}}class Q_{constructor(t){this.persistence=t,this.Gs=new K_,this.Qs=null}static js(t){return new Q_(t)}get zs(){if(this.Qs)return this.Qs;throw xe()}addReference(t,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),Q.resolve()}removeReference(t,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.zs,r=>{const i=pe.fromPath(r);return this.Ws(t,i).next(s=>{s||n.removeEntry(i,Se.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return Q.or([()=>Q.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
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
 */class X_{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(t,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new X_(t,n.fromCache,r,i)}}/**
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
 */class aj{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Ki(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(V2(n))return Q.resolve(null);let r=ts(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=t1(n,null,"F"),r=ts(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Pe(...s);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(t,t1(n,null,"F")):this.zi(t,c,n,l)}))})))}Ki(t,n,r,i){return V2(n)||i.isEqual(Se.min())?this.Gi(t,n):this.qi.getDocuments(t,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(R2()<=je.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),n1(n)),this.zi(t,o,n,Fz(i,-1)))})}Qi(t,n){let r=new Sn(a4(t));return n.forEach((i,s)=>{Gm(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return R2()<=je.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",n1(n)),this.qi.getDocumentsMatchingQuery(t,n,no.min())}zi(t,n,r,i){return this.qi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class lj{constructor(t,n,r,i){this.persistence=t,this.Wi=n,this.serializer=i,this.Hi=new Ct(He),this.Ji=new Zl(s=>V_(s),j_),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(r)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new JV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function uj(e,t,n,r){return new lj(e,t,n,r)}async function A4(e,t){const n=ke(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Pe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function cj(e,t){const n=ke(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,p=h.keys();let m=Q.resolve();return p.forEach(x=>{m=m.next(()=>c.getEntry(a,x)).next(y=>{const _=l.docVersions.get(x);lt(_!==null),y.version.compareTo(_)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),c.addEntry(y)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Pe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function N4(e){const t=ke(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function dj(e,t){const n=ke(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];t.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;a.push(n.Fs.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Fs.addMatchingKeys(s,h.addedDocuments,p)));let x=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(p)!==null?x=x.withResumeToken(bn.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):h.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(h.resumeToken,r)),i=i.insert(p,x),function(y,_,k){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,x,h)&&a.push(n.Fs.updateTargetData(s,x))});let l=ns(),c=Pe();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(hj(s,o,t.documentUpdates).next(h=>{l=h.er,c=h.nr})),!r.isEqual(Se.min())){const h=n.Fs.getLastRemoteSnapshotVersion(s).next(p=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return Q.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Hi=i,s))}function hj(e,t,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=ns();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Se.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):ce("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:i}})}function fj(e,t){const n=ke(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function pj(e,t){const n=ke(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,t).next(s=>s?(i=s,Q.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Is(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(t,r.targetId)),r})}async function a1(e,t,n){const r=ke(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Dd(o))throw o;ce("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function Z2(e,t,n){const r=ke(e);let i=Se.min(),s=Pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=ke(a),p=h.Ji.get(c);return p!==void 0?Q.resolve(h.Hi.get(p)):h.Fs.getTargetData(l,c)}(r,o,ts(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,t,n?i:Se.min(),n?s:Pe())).next(a=>(mj(r,aV(t),a),{documents:a,sr:s})))}function mj(e,t,n){let r=e.Yi.get(t)||Se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Yi.set(t,r)}class ek{constructor(){this.activeTargetIds=fV()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gj{constructor(){this.Wr=new ek,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,r){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new ek,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class yj{Jr(t){}shutdown(){}}/**
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
 */class tk{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Uh=null;function ay(){return Uh===null?Uh=268435456+Math.round(2147483648*Math.random()):Uh++,"0x"+Uh.toString(16)}/**
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
 */const vj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wj{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
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
 */const mn="WebChannelConnection";class _j extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,r,i,s){const o=ay(),a=this.Io(t,n);ce("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(t,a,l,r).then(c=>(ce("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw Dl("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(t,n,r,i,s,o){return this.po(t,n,r,i,s)}To(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Jl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}Io(t,n){const r=vj[t];return`${this.wo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,r,i){const s=ay();return new Promise((o,a)=>{const l=new bz;l.setWithCredentials(!0),l.listenOnce(Ez.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sy.NO_ERROR:const h=l.getResponseJson();ce(mn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case sy.TIMEOUT:ce(mn,`RPC '${t}' ${s} timed out`),a(new fe(H.DEADLINE_EXCEEDED,"Request time out"));break;case sy.HTTP_ERROR:const p=l.getStatus();if(ce(mn,`RPC '${t}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const x=m==null?void 0:m.error;if(x&&x.status&&x.message){const y=function(_){const k=_.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(k)>=0?k:H.UNKNOWN}(x.status);a(new fe(y,x.message))}else a(new fe(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new fe(H.UNAVAILABLE,"Connection failed."));break;default:xe()}}finally{ce(mn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);ce(mn,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Ro(t,n,r){const i=ay(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Cz(),a=Sz(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Tz({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");ce(mn,`Creating RPC '${t}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let p=!1,m=!1;const x=new wj({io:_=>{m?ce(mn,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(p||(ce(mn,`Opening RPC '${t}' stream ${i} transport.`),h.open(),p=!0),ce(mn,`RPC '${t}' stream ${i} sending:`,_),h.send(_))},ro:()=>h.close()}),y=(_,k,C)=>{_.listen(k,v=>{try{C(v)}catch(S){setTimeout(()=>{throw S},0)}})};return y(h,Mh.EventType.OPEN,()=>{m||ce(mn,`RPC '${t}' stream ${i} transport opened.`)}),y(h,Mh.EventType.CLOSE,()=>{m||(m=!0,ce(mn,`RPC '${t}' stream ${i} transport closed`),x.fo())}),y(h,Mh.EventType.ERROR,_=>{m||(m=!0,Dl(mn,`RPC '${t}' stream ${i} transport errored:`,_),x.fo(new fe(H.UNAVAILABLE,"The operation could not be completed")))}),y(h,Mh.EventType.MESSAGE,_=>{var k;if(!m){const C=_.data[0];lt(!!C);const v=C,S=v.error||((k=v[0])===null||k===void 0?void 0:k.error);if(S){ce(mn,`RPC '${t}' stream ${i} received error:`,S);const T=S.status;let I=function(N){const O=Pt[N];if(O!==void 0)return x4(O)}(T),P=S.message;I===void 0&&(I=H.INTERNAL,P="Unknown error status: "+T+" with message "+S.message),m=!0,x.fo(new fe(I,P)),h.close()}else ce(mn,`RPC '${t}' stream ${i} received:`,C),x._o(C)}}),y(a,kz.STAT_EVENT,_=>{_.stat===N2.PROXY?ce(mn,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===N2.NOPROXY&&ce(mn,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.lo()},0),x}}function ly(){return typeof document!="undefined"?document:null}/**
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
 */function Xm(e){return new OV(e,!0)}/**
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
 */class O4{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&ce("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class R4{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new O4(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(es(n.toString()),es("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{t(()=>{const i=new fe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(t,n){const r=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return ce("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xj extends R4{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=MV(this.serializer,t),r=function(i){if(!("targetChange"in i))return Se.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Se.min():s.readTime?li(s.readTime):Se.min()}(t);return this.listener.eu(n,r)}nu(t){const n={};n.database=o1(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=e1(a)?{documents:FV(i,a)}:{query:UV(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=E4(i,s.resumeToken);const l=r1(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(Se.min())>0){o.readTime=Sp(i,s.snapshotVersion.toTimestamp());const l=r1(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,t);const r=zV(this.serializer,t);r&&(n.labels=r),this.zo(n)}su(t){const n={};n.database=o1(this.serializer),n.removeTarget=t,this.zo(n)}}class Cj extends R4{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(lt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const n=$V(t.writeResults,t.commitTime),r=li(t.commitTime);return this.listener.uu(r,n)}return lt(!t.writeResults||t.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const t={};t.database=o1(this.serializer),this.zo(t)}ou(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>LV(this.serializer,r))};this.zo(n)}}/**
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
 */class Sj extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new fe(H.UNKNOWN,i.toString())})}Ao(t,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new fe(H.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class Ej{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(es(n),this.wu=!1):ce("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class kj{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{pa(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ke(a);l.Au.add(4),await Nd(l),l.Pu.set("Unknown"),l.Au.delete(4),await Jm(l)}(this))})}),this.Pu=new Ej(r,i)}}async function Jm(e){if(pa(e))for(const t of e.Ru)await t(!0)}async function Nd(e){for(const t of e.Ru)await t(!1)}function P4(e,t){const n=ke(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),ex(n)?Z_(n):eu(n).Uo()&&J_(n,t))}function M4(e,t){const n=ke(e),r=eu(n);n.Eu.delete(t),r.Uo()&&L4(n,t),n.Eu.size===0&&(r.Uo()?r.Qo():pa(n)&&n.Pu.set("Unknown"))}function J_(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Se.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}eu(e).nu(t)}function L4(e,t){e.bu.Lt(t),eu(e).su(t)}function Z_(e){e.bu=new DV({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),eu(e).start(),e.Pu.mu()}function ex(e){return pa(e)&&!eu(e).qo()&&e.Eu.size>0}function pa(e){return ke(e).Au.size===0}function $4(e){e.bu=void 0}async function Tj(e){e.Eu.forEach((t,n)=>{J_(e,t)})}async function bj(e,t){$4(e),ex(e)?(e.Pu.pu(t),Z_(e)):e.Pu.set("Unknown")}async function Dj(e,t,n){if(e.Pu.set("Online"),t instanceof S4&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(e,t)}catch(r){ce("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ep(e,r)}else if(t instanceof df?e.bu.Wt(t):t instanceof C4?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Se.min()))try{const r=await N4(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(l);c&&i.Eu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(bn.EMPTY_BYTE_STRING,c.snapshotVersion)),L4(i,a);const h=new Is(c.target,a,l,c.sequenceNumber);J_(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){ce("RemoteStore","Failed to raise snapshot:",r),await Ep(e,r)}}async function Ep(e,t,n){if(!Dd(t))throw t;e.Au.add(1),await Nd(e),e.Pu.set("Offline"),n||(n=()=>N4(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ce("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await Jm(e)})}function F4(e,t){return t().catch(n=>Ep(e,n,t))}async function Zm(e){const t=ke(e),n=io(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;Ij(t);)try{const i=await fj(t.localStore,r);if(i===null){t.Tu.length===0&&n.Qo();break}r=i.batchId,Aj(t,i)}catch(i){await Ep(t,i)}U4(t)&&B4(t)}function Ij(e){return pa(e)&&e.Tu.length<10}function Aj(e,t){e.Tu.push(t);const n=io(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function U4(e){return pa(e)&&!io(e).qo()&&e.Tu.length>0}function B4(e){io(e).start()}async function Nj(e){io(e).au()}async function Oj(e){const t=io(e);for(const n of e.Tu)t.ou(n.mutations)}async function Rj(e,t,n){const r=e.Tu.shift(),i=W_.from(r,t,n);await F4(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Zm(e)}async function Pj(e,t){t&&io(e).ru&&await async function(n,r){if(i=r.code,kV(i)&&i!==H.ABORTED){const s=n.Tu.shift();io(n).Go(),await F4(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Zm(n)}var i}(e,t),U4(e)&&B4(e)}async function nk(e,t){const n=ke(e);n.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const r=pa(n);n.Au.add(3),await Nd(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await Jm(n)}async function Mj(e,t){const n=ke(e);t?(n.Au.delete(2),await Jm(n)):t||(n.Au.add(2),await Nd(n),n.Pu.set("Unknown"))}function eu(e){return e.Vu||(e.Vu=function(t,n,r){const i=ke(t);return i.lu(),new xj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:Tj.bind(null,e),co:bj.bind(null,e),eu:Dj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),ex(e)?Z_(e):e.Pu.set("Unknown")):(await e.Vu.stop(),$4(e))})),e.Vu}function io(e){return e.Su||(e.Su=function(t,n,r){const i=ke(t);return i.lu(),new Cj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:Nj.bind(null,e),co:Pj.bind(null,e),cu:Oj.bind(null,e),uu:Rj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Go(),await Zm(e)):(await e.Su.stop(),e.Tu.length>0&&(ce("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
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
 */class tx{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new tx(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nx(e,t){if(es("AsyncQueue",`${t}: ${e}`),Dd(e))return new fe(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class dl{constructor(t){this.comparator=t?(n,r)=>t(n,r)||pe.comparator(n.key,r.key):(n,r)=>pe.comparator(n.key,r.key),this.keyedMap=Uu(),this.sortedSet=new Ct(this.comparator)}static emptySet(t){return new dl(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof dl)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new dl;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class rk{constructor(){this.Du=new Ct(pe.comparator)}track(t){const n=t.doc.key,r=this.Du.get(n);r?t.type!==0&&r.type===3?this.Du=this.Du.insert(n,t):t.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Du=this.Du.remove(n):t.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):xe():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,r)=>{t.push(r)}),t}}class Rl{constructor(t,n,r,i,s,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rl(t,n,dl.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hm(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Lj{constructor(){this.xu=void 0,this.listeners=[]}}class $j{constructor(){this.queries=new Zl(t=>o4(t),Hm),this.onlineState="Unknown",this.Nu=new Set}}async function z4(e,t){const n=ke(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Lj),i)try{s.xu=await n.onListen(r)}catch(o){const a=nx(o,`Initialization of query '${n1(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&rx(n)}async function V4(e,t){const n=ke(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Fj(e,t){const n=ke(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&rx(n)}function Uj(e,t,n){const r=ke(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function rx(e){e.Nu.forEach(t=>{t.next()})}class j4{constructor(t,n,r){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Rl(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=Rl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
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
 */class Y4{constructor(t){this.key=t}}class W4{constructor(t){this.key=t}}class Bj{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Pe(),this.mutatedKeys=Pe(),this.Zu=a4(t),this.tc=new dl(this.Zu)}get ec(){return this.Ju}nc(t,n){const r=n?n.sc:new rk,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,p)=>{const m=i.get(h),x=Gm(this.query,p)?p:null,y=!!m&&this.mutatedKeys.has(m.key),_=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let k=!1;m&&x?m.data.isEqual(x.data)?y!==_&&(r.track({type:3,doc:x}),k=!0):this.ic(m,x)||(r.track({type:2,doc:x}),k=!0,(l&&this.Zu(x,l)>0||c&&this.Zu(x,c)<0)&&(a=!0)):!m&&x?(r.track({type:0,doc:x}),k=!0):m&&!x&&(r.track({type:1,doc:m}),k=!0,(l||c)&&(a=!0)),k&&(x?(o=o.add(x),s=_?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const s=t.sc.Cu();s.sort((c,h)=>function(p,m){const x=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe()}};return x(p)-x(m)}(c.type,h.type)||this.Zu(c.doc,h.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new Rl(this.query,t.tc,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new rk,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Pe(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return t.forEach(r=>{this.Xu.has(r)||n.push(new W4(r))}),this.Xu.forEach(r=>{t.has(r)||n.push(new Y4(r))}),n}ac(t){this.Ju=t.sr,this.Xu=Pe();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return Rl.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class zj{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Vj{constructor(t){this.key=t,this.lc=!1}}class jj{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Zl(a=>o4(a),Hm),this._c=new Map,this.wc=new Set,this.mc=new Ct(pe.comparator),this.gc=new Map,this.yc=new K_,this.Ic={},this.Tc=new Map,this.Ec=Ol.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Yj(e,t){const n=eY(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await pj(n.localStore,ts(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Wj(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&P4(n.remoteStore,o)}return i}async function Wj(e,t,n,r,i){e.Rc=(p,m,x)=>async function(y,_,k,C){let v=_.view.nc(k);v.ji&&(v=await Z2(y.localStore,_.query,!1).then(({documents:I})=>_.view.nc(I,v)));const S=C&&C.targetChanges.get(_.targetId),T=_.view.applyChanges(v,y.isPrimaryClient,S);return sk(y,_.targetId,T.uc),T.snapshot}(e,p,m,x);const s=await Z2(e.localStore,t,!0),o=new Bj(t,s.sr),a=o.nc(s.documents),l=Ad.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,l);sk(e,n,c.uc);const h=new zj(t,n,o);return e.dc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Hj(e,t){const n=ke(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Hm(s,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await a1(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),M4(n.remoteStore,r.targetId),l1(n,r.targetId)}).catch(bd)):(l1(n,r.targetId),await a1(n.localStore,r.targetId,!0))}async function Gj(e,t,n){const r=tY(e);try{const i=await function(s,o){const a=ke(s),l=Ht.now(),c=o.reduce((m,x)=>m.add(x.key),Pe());let h,p;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let x=ns(),y=Pe();return a.Xi.getEntries(m,c).next(_=>{x=_,x.forEach((k,C)=>{C.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,x)).next(_=>{h=_;const k=[];for(const C of o){const v=_V(C,h.get(C.key).overlayedDocument);v!=null&&k.push(new po(C.key,v,ZA(v.value.mapValue),Br.exists(!0)))}return a.mutationQueue.addMutationBatch(m,l,k,o)}).next(_=>{p=_;const k=_.applyToLocalDocumentSet(h,y);return a.documentOverlayCache.saveOverlays(m,_.batchId,k)})}).then(()=>({batchId:p.batchId,changes:u4(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new Ct(He)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await Od(r,i.changes),await Zm(r.remoteStore)}catch(i){const s=nx(i,"Failed to persist write");n.reject(s)}}async function H4(e,t){const n=ke(e);try{const r=await dj(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?lt(o.lc):i.removedDocuments.size>0&&(lt(o.lc),o.lc=!1))}),await Od(n,r,t)}catch(r){await bd(r)}}function ik(e,t,n){const r=ke(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ke(s);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const p of h.listeners)p.ku(o)&&(l=!0)}),l&&rx(a)}(r.eventManager,t),i.length&&r.fc.eu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function qj(e,t,n){const r=ke(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let o=new Ct(pe.comparator);o=o.insert(s,wn.newNoDocument(s,Se.min()));const a=Pe().add(s),l=new Qm(Se.min(),new Map,new Ct(He),o,a);await H4(r,l),r.mc=r.mc.remove(s),r.gc.delete(t),ix(r)}else await a1(r.localStore,t,!1).then(()=>l1(r,t,n)).catch(bd)}async function Kj(e,t){const n=ke(e),r=t.batch.batchId;try{const i=await cj(n.localStore,t);q4(n,r,null),G4(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Od(n,i)}catch(i){await bd(i)}}async function Qj(e,t,n){const r=ke(e);try{const i=await function(s,o){const a=ke(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(lt(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,t);q4(r,t,n),G4(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Od(r,i)}catch(i){await bd(i)}}function G4(e,t){(e.Tc.get(t)||[]).forEach(n=>{n.resolve()}),e.Tc.delete(t)}function q4(e,t,n){const r=ke(e);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function l1(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(r=>{e.yc.containsKey(r)||K4(e,r)})}function K4(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(M4(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),ix(e))}function sk(e,t,n){for(const r of n)r instanceof Y4?(e.yc.addReference(r.key,t),Xj(e,r)):r instanceof W4?(ce("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||K4(e,r.key)):xe()}function Xj(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ce("SyncEngine","New document in limbo: "+n),e.wc.add(r),ix(e))}function ix(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new pe(yt.fromString(t)),r=e.Ec.next();e.gc.set(r,new Vj(n)),e.mc=e.mc.insert(n,r),P4(e.remoteStore,new Is(ts(Y_(n.path)),r,"TargetPurposeLimboResolution",F_.ct))}}async function Od(e,t,n){const r=ke(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=X_.Bi(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const c=ke(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>Q.forEach(l,p=>Q.forEach(p.$i,m=>c.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>Q.forEach(p.Fi,m=>c.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!Dd(h))throw h;ce("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=c.Hi.get(p),x=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(x);c.Hi=c.Hi.insert(p,y)}}}(r.localStore,s))}async function Jj(e,t){const n=ke(e);if(!n.currentUser.isEqual(t)){ce("SyncEngine","User change. New user:",t.toKey());const r=await A4(n.localStore,t);n.currentUser=t,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new fe(H.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Od(n,r.tr)}}function Zj(e,t){const n=ke(e),r=n.gc.get(t);if(r&&r.lc)return Pe().add(r.key);{let i=Pe();const s=n._c.get(t);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function eY(e){const t=ke(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=H4.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qj.bind(null,t),t.fc.eu=Fj.bind(null,t.eventManager),t.fc.vc=Uj.bind(null,t.eventManager),t}function tY(e){const t=ke(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qj.bind(null,t),t}class ok{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Xm(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return uj(this.persistence,new aj,t.initialUser,this.serializer)}createPersistence(t){return new sj(Q_.js,this.serializer)}createSharedClientState(t){return new gj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nY{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ik(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jj.bind(null,this.syncEngine),await Mj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new $j}createDatastore(t){const n=Xm(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new _j(i));var i;return function(s,o,a,l){return new Sj(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>ik(this.syncEngine,a,0),o=tk.D()?new tk:new yj,new kj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,l,c){const h=new jj(r,i,s,o,a,l);return c&&(h.Ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=ke(t);ce("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Nd(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Q4{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):es("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class rY{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yn.UNAUTHENTICATED,this.clientId=QA.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ce("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ce("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=nx(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function uy(e,t){e.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await A4(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ak(e,t){e.asyncQueue.verifyOperationInProgress();const n=await sY(e);ce("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>nk(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>nk(t.remoteStore,s)),e._onlineComponents=t}function iY(e){return e.name==="FirebaseError"?e.code===H.FAILED_PRECONDITION||e.code===H.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function sY(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await uy(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!iY(n))throw n;Dl("Error using user provided cache. Falling back to memory cache: "+n),await uy(e,new ok)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await uy(e,new ok);return e._offlineComponents}async function X4(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await ak(e,e._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await ak(e,new nY))),e._onlineComponents}function oY(e){return X4(e).then(t=>t.syncEngine)}async function J4(e){const t=await X4(e),n=t.eventManager;return n.onListen=Yj.bind(null,t.syncEngine),n.onUnlisten=Hj.bind(null,t.syncEngine),n}function aY(e,t,n={}){const r=new Yi;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new Q4({next:p=>{s.enqueueAndForget(()=>V4(i,h));const m=p.docs.has(o);!m&&p.fromCache?l.reject(new fe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&a&&a.source==="server"?l.reject(new fe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new j4(Y_(o.path),c,{includeMetadataChanges:!0,Uu:!0});return z4(i,h)}(await J4(e),e.asyncQueue,t,n,r)),r.promise}function lY(e,t,n={}){const r=new Yi;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new Q4({next:p=>{s.enqueueAndForget(()=>V4(i,h)),p.fromCache&&a.source==="server"?l.reject(new fe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new j4(o,c,{includeMetadataChanges:!0,Uu:!0});return z4(i,h)}(await J4(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */const lk=new Map;/**
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
 */function Z4(e,t,n){if(!n)throw new fe(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function uY(e,t,n,r){if(t===!0&&r===!0)throw new fe(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function uk(e){if(!pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ck(e){if(pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sx(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":xe()}function di(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sx(e);throw new fe(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class dk{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new fe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new fe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}uY("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class eg{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dk({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new fe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dk(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Iz;switch(n.type){case"firstParty":return new Rz(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new fe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=lk.get(t);n&&(ce("ComponentProvider","Removing Datastore"),lk.delete(t),n.terminate())}(this),Promise.resolve()}}function cY(e,t,n,r={}){var i;const s=(e=di(e,eg))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&Dl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=yn.MOCK_USER;else{o=iI(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new fe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new yn(l)}e._authCredentials=new Az(new KA(o,a))}}/**
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
 */class qn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new qn(this.firestore,t,this._key)}}class tg{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new tg(this.firestore,t,this._query)}}class qs extends tg{constructor(t,n,r){super(t,n,Y_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qn(this.firestore,null,new pe(t))}withConverter(t){return new qs(this.firestore,t,this._path)}}function mo(e,t,...n){if(e=Rt(e),Z4("collection","path",t),e instanceof eg){const r=yt.fromString(t,...n);return ck(r),new qs(e,null,r)}{if(!(e instanceof qn||e instanceof qs))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yt.fromString(t,...n));return ck(r),new qs(e.firestore,null,r)}}function kr(e,t,...n){if(e=Rt(e),arguments.length===1&&(t=QA.A()),Z4("doc","path",t),e instanceof eg){const r=yt.fromString(t,...n);return uk(r),new qn(e,null,new pe(r))}{if(!(e instanceof qn||e instanceof qs))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yt.fromString(t,...n));return uk(r),new qn(e.firestore,e instanceof qs?e.converter:null,new pe(r))}}/**
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
 */class dY{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new O4(this,"async_queue_retry"),this.Yc=()=>{const n=ly();n&&ce("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=ly();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=ly();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Yi;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!Dd(t))throw t;ce("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw es("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(t,n,r){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const i=tx.createAndSchedule(this,t,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&xe()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class tu extends eg{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new dY,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||eN(this),this._firestoreClient.terminate()}}function hY(e,t){const n=typeof e=="object"?e:r_(),r=typeof e=="string"?e:t||"(default)",i=km(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nI("firestore");s&&cY(i,...s)}return i}function ox(e){return e._firestoreClient||eN(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function eN(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,l,c){return new Wz(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new rY(e._authCredentials,e._appCheckCredentials,e._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Pl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pl(bn.fromBase64String(t))}catch(n){throw new fe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pl(bn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ng{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new fe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _n(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class rg{constructor(t){this._methodName=t}}/**
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
 */class ax{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new fe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new fe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return He(this._lat,t._lat)||He(this._long,t._long)}}/**
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
 */const fY=/^__.*__$/;class pY{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new po(t,this.data,this.fieldMask,n,this.fieldTransforms):new Id(t,this.data,n,this.fieldTransforms)}}class tN{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new po(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function nN(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe()}}class lx{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new lx(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.la(t),i}fa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.oa(),i}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return kp(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if(nN(this.ua)&&fY.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class mY{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Xm(t)}ga(t,n,r,i=!1){return new lx({ua:t,methodName:n,ma:r,path:_n.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ux(e){const t=e._freezeSettings(),n=Xm(e._databaseId);return new mY(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rN(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);cx("Data must be an object, but it was:",o,r);const a=iN(r,o);let l,c;if(s.merge)l=new tr(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=u1(t,p,n);if(!o.contains(m))throw new fe(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);oN(h,m)||h.push(m)}l=new tr(h),c=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,c=o.fieldTransforms;return new pY(new Vn(a),l,c)}class ig extends rg{_toFieldTransform(t){if(t.ua!==2)throw t.ua===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ig}}class gY extends rg{constructor(t,n){super(t),this.pa=n}_toFieldTransform(t){const n=new Gc(t.serializer,f4(t.serializer,this.pa));return new gV(t.path,n)}isEqual(t){return this===t}}function yY(e,t,n,r){const i=e.ga(1,t,n);cx("Data must be an object, but it was:",i,r);const s=[],o=Vn.empty();fa(r,(l,c)=>{const h=dx(t,l,n);c=Rt(c);const p=i.fa(h);if(c instanceof ig)s.push(h);else{const m=sg(c,p);m!=null&&(s.push(h),o.set(h,m))}});const a=new tr(s);return new tN(o,a,i.fieldTransforms)}function vY(e,t,n,r,i,s){const o=e.ga(1,t,n),a=[u1(t,r,n)],l=[i];if(s.length%2!=0)throw new fe(H.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(u1(t,s[m])),l.push(s[m+1]);const c=[],h=Vn.empty();for(let m=a.length-1;m>=0;--m)if(!oN(c,a[m])){const x=a[m];let y=l[m];y=Rt(y);const _=o.fa(x);if(y instanceof ig)c.push(x);else{const k=sg(y,_);k!=null&&(c.push(x),h.set(x,k))}}const p=new tr(c);return new tN(h,p,o.fieldTransforms)}function sg(e,t){if(sN(e=Rt(e)))return cx("Unsupported field value:",t,e),iN(e,t);if(e instanceof rg)return function(n,r){if(!nN(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=sg(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return f4(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ht.fromDate(n);return{timestampValue:Sp(r.serializer,i)}}if(n instanceof Ht){const i=new Ht(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sp(r.serializer,i)}}if(n instanceof ax)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pl)return{bytesValue:E4(r.serializer,n._byteString)};if(n instanceof qn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:q_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${sx(n)}`)}(e,t)}function iN(e,t){const n={};return XA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fa(e,(r,i)=>{const s=sg(i,t.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sN(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ht||e instanceof ax||e instanceof Pl||e instanceof qn||e instanceof rg)}function cx(e,t,n){if(!sN(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=sx(n);throw r==="an object"?t._a(e+" a custom object"):t._a(e+" "+r)}}function u1(e,t,n){if((t=Rt(t))instanceof ng)return t._internalPath;if(typeof t=="string")return dx(e,t);throw kp("Field path arguments must be of type string or ",e,!1,void 0,n)}const wY=new RegExp("[~\\*/\\[\\]]");function dx(e,t,n){if(t.search(wY)>=0)throw kp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ng(...t.split("."))._internalPath}catch{throw kp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function kp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new fe(H.INVALID_ARGUMENT,a+e+l)}function oN(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class aN{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _Y(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(lN("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _Y extends aN{data(){return super.data()}}function lN(e,t){return typeof t=="string"?dx(e,t):t instanceof ng?t._internalPath:t._delegate._internalPath}/**
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
 */function xY(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new fe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class CY{convertValue(t,n="none"){switch(ra(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(na(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw xe()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return fa(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new ax(Mt(t.latitude),Mt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=B_(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vc(t));default:return null}}convertTimestamp(t){const n=ro(t);return new Ht(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=yt.fromString(t);lt(I4(r));const i=new jc(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||es(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function uN(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class zu{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cN extends aN{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new hf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(lN("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hf extends cN{data(t={}){return super.data(t)}}class SY{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new zu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new hf(this._firestore,this._userDataWriter,r.key,r,new zu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new hf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new hf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:EY(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EY(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe()}}/**
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
 */function Rd(e){e=di(e,qn);const t=di(e.firestore,tu);return aY(ox(t),e._key).then(n=>TY(t,e,n))}class dN extends CY{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new qn(this.firestore,null,n)}}function og(e){e=di(e,tg);const t=di(e.firestore,tu),n=ox(t),r=new dN(t);return xY(e._query),lY(n,e._query).then(i=>new SY(t,r,e,i))}function kY(e,t,n){e=di(e,qn);const r=di(e.firestore,tu),i=uN(e.converter,t,n);return hx(r,[rN(ux(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Br.none())])}function ma(e,t,n,...r){e=di(e,qn);const i=di(e.firestore,tu),s=ux(i);let o;return o=typeof(t=Rt(t))=="string"||t instanceof ng?vY(s,"updateDoc",e._key,t,n,r):yY(s,"updateDoc",e._key,t),hx(i,[o.toMutation(e._key,Br.exists(!0))])}function ag(e,t){const n=di(e.firestore,tu),r=kr(e),i=uN(e.converter,t);return hx(n,[rN(ux(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Br.exists(!1))]).then(()=>r)}function hx(e,t){return function(n,r){const i=new Yi;return n.asyncQueue.enqueueAndForget(async()=>Gj(await oY(n),r,i)),i.promise}(ox(e),t)}function TY(e,t,n){const r=n.docs.get(t._key),i=new dN(e);return new cN(e,i,t._key,r,new zu(n.hasPendingWrites,n.fromCache),t.converter)}function lg(e){return new gY("increment",e)}(function(e,t=!0){(function(n){Jl=n})(ca),Jo(new to("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new tu(new Nz(n.getProvider("auth-internal")),new Mz(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new fe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jc(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),si(O2,"3.11.0",e),si(O2,"3.11.0","esm2017")})();/**
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
 */const hN="firebasestorage.googleapis.com",fN="storageBucket",bY=2*60*1e3,DY=10*60*1e3;/**
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
 */class bt extends mi{constructor(t,n,r=0){super(cy(t),`Firebase Storage: ${n} (${cy(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return cy(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function cy(e){return"storage/"+e}function fx(){const e="An unknown error occurred, please check the error payload for server response.";return new bt(Tt.UNKNOWN,e)}function IY(e){return new bt(Tt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function AY(e){return new bt(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NY(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new bt(Tt.UNAUTHENTICATED,e)}function OY(){return new bt(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RY(e){return new bt(Tt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function PY(){return new bt(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MY(){return new bt(Tt.CANCELED,"User canceled the upload/download.")}function LY(e){return new bt(Tt.INVALID_URL,"Invalid URL '"+e+"'.")}function $Y(e){return new bt(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function FY(){return new bt(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fN+"' property when initializing the app?")}function UY(){return new bt(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BY(){return new bt(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zY(e){return new bt(Tt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function c1(e){return new bt(Tt.INVALID_ARGUMENT,e)}function pN(){return new bt(Tt.APP_DELETED,"The Firebase app was deleted.")}function VY(e){return new bt(Tt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ic(e,t){return new bt(Tt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Tu(e){throw new bt(Tt.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class nr{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=nr.makeFromUrl(t,n)}catch{return new nr(t,"")}if(r.path==="")return r;throw $Y(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",x=new RegExp(`^https?://${p}/${h}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},_=n===hN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",C=new RegExp(`^https?://${_}/${i}/${k}`,"i"),S=[{regex:a,indices:l,postModify:s},{regex:x,indices:y,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<S.length;T++){const I=S[T],P=I.regex.exec(t);if(P){const N=P[I.indices.bucket];let O=P[I.indices.path];O||(O=""),r=new nr(N,O),I.postModify(r);break}}if(r==null)throw LY(t);return r}}class jY{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function YY(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...k){c||(c=!0,t.apply(null,k))}function p(k){i=setTimeout(()=>{i=null,e(x,l())},k)}function m(){s&&clearTimeout(s)}function x(k,...C){if(c){m();return}if(k){m(),h.call(null,k,...C);return}if(l()||o){m(),h.call(null,k,...C);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,p(S)}let y=!1;function _(k){y||(y=!0,m(),!c&&(i!==null?(k||(a=2),clearTimeout(i),p(0)):k||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function WY(e){e(!1)}/**
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
 */function HY(e){return e!==void 0}function GY(e){return typeof e=="object"&&!Array.isArray(e)}function px(e){return typeof e=="string"||e instanceof String}function hk(e){return mx()&&e instanceof Blob}function mx(){return typeof Blob!="undefined"&&!eF()}function fk(e,t,n,r){if(r<t)throw c1(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw c1(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function gx(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function mN(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var zo;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(zo||(zo={}));/**
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
 */function qY(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class KY{constructor(t,n,r,i,s,o,a,l,c,h,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,y)=>{this.resolve_=x,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Bh(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===zo.NO_ERROR,l=s.getStatus();if(!a||qY(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===zo.ABORT;r(!1,new Bh(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Bh(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());HY(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=fx();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?pN():MY();o(l)}else{const l=PY();o(l)}};this.canceled_?n(!1,new Bh(!1,null,!0)):this.backoffId_=YY(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&WY(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bh{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function QY(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function XY(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function JY(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ZY(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function eW(e,t,n,r,i,s,o=!0){const a=mN(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return JY(c,t),QY(c,n),XY(c,s),ZY(c,r),new KY(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function tW(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function nW(...e){const t=tW();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(mx())return new Blob(e);throw new bt(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rW(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function iW(e){if(typeof atob=="undefined")throw zY("base-64");return atob(e)}/**
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
 */const ti={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dy{constructor(t,n){this.data=t,this.contentType=n||null}}function sW(e,t){switch(e){case ti.RAW:return new dy(gN(t));case ti.BASE64:case ti.BASE64URL:return new dy(yN(e,t));case ti.DATA_URL:return new dy(aW(t),lW(t))}throw fx()}function gN(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function oW(e){let t;try{t=decodeURIComponent(e)}catch{throw ic(ti.DATA_URL,"Malformed data URL.")}return gN(t)}function yN(e,t){switch(e){case ti.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw ic(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ti.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw ic(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iW(t)}catch(i){throw i.message.includes("polyfill")?i:ic(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class vN{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ic(ti.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uW(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function aW(e){const t=new vN(e);return t.base64?yN(ti.BASE64,t.rest):oW(t.rest)}function lW(e){return new vN(e).contentType}function uW(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class ks{constructor(t,n){let r=0,i="";hk(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(hk(this.data_)){const r=this.data_,i=rW(r,t,n);return i===null?null:new ks(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new ks(r,!0)}}static getBlob(...t){if(mx()){const n=t.map(r=>r instanceof ks?r.data_:r);return new ks(nW.apply(null,n))}else{const n=t.map(o=>px(o)?sW(ti.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ks(i,!0)}}uploadData(){return this.data_}}/**
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
 */function wN(e){let t;try{t=JSON.parse(e)}catch{return null}return GY(t)?t:null}/**
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
 */function cW(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function dW(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function _N(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function hW(e,t){return t}class On{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||hW}}let zh=null;function fW(e){return!px(e)||e.length<2?e:_N(e)}function xN(){if(zh)return zh;const e=[];e.push(new On("bucket")),e.push(new On("generation")),e.push(new On("metageneration")),e.push(new On("name","fullPath",!0));function t(s,o){return fW(o)}const n=new On("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new On("size");return i.xform=r,e.push(i),e.push(new On("timeCreated")),e.push(new On("updated")),e.push(new On("md5Hash",null,!0)),e.push(new On("cacheControl",null,!0)),e.push(new On("contentDisposition",null,!0)),e.push(new On("contentEncoding",null,!0)),e.push(new On("contentLanguage",null,!0)),e.push(new On("contentType",null,!0)),e.push(new On("metadata","customMetadata",!0)),zh=e,zh}function pW(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new nr(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function mW(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return pW(r,e),r}function CN(e,t,n){const r=wN(t);return r===null?null:mW(e,r,n)}function gW(e,t,n,r){const i=wN(t);if(i===null||!px(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=e.bucket,p=e.fullPath,m="/b/"+o(h)+"/o/"+o(p),x=gx(m,n,r),y=mN({alt:"media",token:c});return x+y})[0]}function yW(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class SN{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function EN(e){if(!e)throw fx()}function vW(e,t){function n(r,i){const s=CN(e,i,t);return EN(s!==null),s}return n}function wW(e,t){function n(r,i){const s=CN(e,i,t);return EN(s!==null),gW(s,i,e.host,e._protocol)}return n}function kN(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=OY():i=NY():n.getStatus()===402?i=AY(e.bucket):n.getStatus()===403?i=RY(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function _W(e){const t=kN(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=IY(e.path)),s.serverResponse=i.serverResponse,s}return n}function xW(e,t,n){const r=t.fullServerUrl(),i=gx(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new SN(i,s,wW(e,n),o);return a.errorHandler=_W(t),a}function CW(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function SW(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=CW(null,t)),r}function EW(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let T=0;T<2;T++)S=S+Math.random().toString().slice(2);return S}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=SW(t,r,i),h=yW(c,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",x=ks.getBlob(p,r,m);if(x===null)throw UY();const y={name:c.fullPath},_=gx(s,e.host,e._protocol),k="POST",C=e.maxUploadRetryTime,v=new SN(_,k,vW(e,n),C);return v.urlParams=y,v.headers=o,v.body=x.uploadData(),v.errorHandler=kN(t),v}class kW{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zo.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zo.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zo.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw Tu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Tu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Tu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Tu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Tu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class TW extends kW{initXhr(){this.xhr_.responseType="text"}}function TN(){return new TW}/**
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
 */class ia{constructor(t,n){this._service=t,n instanceof nr?this._location=n:this._location=nr.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ia(t,n)}get root(){const t=new nr(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _N(this._location.path)}get storage(){return this._service}get parent(){const t=cW(this._location.path);if(t===null)return null;const n=new nr(this._location.bucket,t);return new ia(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw VY(t)}}function bW(e,t,n){e._throwIfRoot("uploadBytes");const r=EW(e.storage,e._location,xN(),new ks(t,!0),n);return e.storage.makeRequestWithTokens(r,TN).then(i=>({metadata:i,ref:e}))}function DW(e){e._throwIfRoot("getDownloadURL");const t=xW(e.storage,e._location,xN());return e.storage.makeRequestWithTokens(t,TN).then(n=>{if(n===null)throw BY();return n})}function IW(e,t){const n=dW(e._location.path,t),r=new nr(e._location.bucket,n);return new ia(e.storage,r)}/**
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
 */function AW(e){return/^[A-Za-z]+:\/\//.test(e)}function NW(e,t){return new ia(e,t)}function bN(e,t){if(e instanceof yx){const n=e;if(n._bucket==null)throw FY();const r=new ia(n,n._bucket);return t!=null?bN(r,t):r}else return t!==void 0?IW(e,t):e}function OW(e,t){if(t&&AW(t)){if(e instanceof yx)return NW(e,t);throw c1("To use ref(service, url), the first argument must be a Storage instance.")}else return bN(e,t)}function pk(e,t){const n=t==null?void 0:t[fN];return n==null?null:nr.makeFromBucketSpec(n,e)}function RW(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:iI(i,e.app.options.projectId))}class yx{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=hN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bY,this._maxUploadRetryTime=DY,this._requests=new Set,i!=null?this._bucket=nr.makeFromBucketSpec(i,this._host):this._bucket=pk(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=nr.makeFromBucketSpec(this._url,t):this._bucket=pk(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){fk("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){fk("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ia(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new jY(pN());{const o=eW(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const mk="@firebase/storage",gk="0.11.2";/**
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
 */const DN="storage";function ga(e,t,n){return e=Rt(e),bW(e,t,n)}function ya(e){return e=Rt(e),DW(e)}function Kn(e,t){return e=Rt(e),OW(e,t)}function PW(e=r_(),t){e=Rt(e);const r=km(e,DN).getImmediate({identifier:t}),i=nI("storage");return i&&MW(r,...i),r}function MW(e,t,n,r={}){RW(e,t,n,r)}function LW(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new yx(n,r,i,t,ca)}function $W(){Jo(new to(DN,LW,"PUBLIC").setMultipleInstances(!0)),si(mk,gk,""),si(mk,gk,"esm2017")}$W();const FW={apiKey:"AIzaSyB6eD_2vEo_ZIjZbDoRg7cX92y81sB0Auc",authDomain:"myclothesapp-cf59a.firebaseapp.com",projectId:"myclothesapp-cf59a",storageBucket:"myclothesapp-cf59a.appspot.com",messagingSenderId:"610226156284",appId:"1:610226156284:web:9336ebebf0a17d99eb1d79",measurementId:"G-LNG72F75QC"},IN=aI(FW),rs=CB(IN),Kt=hY(IN),va=PW(),d1=qt("login/googleLogin",async()=>{const e=new Oi,n=(await N7(rs,e)).user;console.log(n);const r=kr(Kt,"users",n.uid);return(await Rd(r)).data()}),h1=qt("auth/login",async e=>{try{const{email:t,password:n}=e;await RI(rs,h_);const i=(await l7(rs,t,n)).user,s=kr(Kt,"users",i.uid),o=await Rd(s);if(!o.exists())throw new Error("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4.");return o.data()}catch(t){return Sm(t.message)}}),f1=qt("auth/signOut",async()=>{try{await d7(rs),await RI(rs,h_)}catch(e){return Sm(e.message)}}),UW=async e=>{const t=Kn(va,"users_photos"),n=Kn(t,e.name);return await ga(n,e),await ya(n)},p1=qt("login/updateUserData",async(e,{getState:t})=>{try{const n=rs.currentUser;if(n){const r=kr(Kt,"users",n.uid),s=t().login.user;let o={...e};if(e.photo){const l=await UW(e.photo);o.photo=l,delete o.photo}const a={...s,...o};return await ma(r,a),e}else throw new Error("\uC0AC\uC6A9\uC790\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}catch(n){return Sm(n.message)}}),BW=()=>e=>{rs.onAuthStateChanged(async t=>{if(t){const n=kr(Kt,"users",t.uid),r=await Rd(n);if(r.exists()){const i=r.data();e({type:"login/loginSuccess",payload:i}),localStorage.setItem("user",JSON.stringify(i))}}else e({type:"login/logout"}),localStorage.removeItem("user")})},zW=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},VW=ua({name:"login",initialState:{user:zW()},extraReducers:e=>{e.addCase(`${d1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${d1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC778 \uC2E4\uD328!"),console.log(n.payload)}),e.addCase(`${h1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${h1.rejected}`,(t,n)=>n.error),e.addCase(`${p1.fulfilled}`,(t,n)=>{t.user={...t.user,...n.payload},t.error=null}),e.addCase(`${p1.rejected}`,(t,n)=>{t.updated=null,t.error=n.payload}),e.addCase(`${f1.fulfilled}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5!"),t.user=null}),e.addCase(`${f1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328!"),console.log(n.payload)})}});var jW=VW.reducer,AN={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yk=Zt.createContext&&Zt.createContext(AN),Ks=globalThis&&globalThis.__assign||function(){return Ks=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ks.apply(this,arguments)},YW=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function NN(e){return e&&e.map(function(t,n){return Zt.createElement(t.tag,Ks({key:n},t.attr),NN(t.child))})}function dn(e){return function(t){return Zt.createElement(WW,Ks({attr:Ks({},e.attr)},t),NN(e.child))}}function WW(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=YW(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Zt.createElement("svg",Ks({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ks(Ks({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Zt.createElement("title",null,s),e.children)};return yk!==void 0?Zt.createElement(yk.Consumer,null,function(n){return t(n)}):t(AN)}function HW(e){return dn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function GW(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}function qW(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"}}]})(e)}function KW(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]})(e)}function QW(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z"}}]})(e)}function XW(e){return dn({tag:"svg",attr:{t:"1569682881658",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zM293 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"}},{tag:"path",attr:{d:"M894 345c-48.1-66-115.3-110.1-189-130v0.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l0.8 132.6c0 3.2 0.5 6.4 1.5 9.4 5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-0.5 0.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102z m505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-0.2-0.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l0.6 0.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z"}},{tag:"path",attr:{d:"M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"}}]})(e)}function ug(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(e)}function JW(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]})(e)}function ZW(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(e)}function eH(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"}}]})(e)}function tH(e){return dn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function nH(e){return dn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"}}]})(e)}const rH=({toggle:e,toggleMenu:t})=>{const[n,r]=R.exports.useState(!1),[i,s]=R.exports.useState(null),o=tt(v=>v.login.user),a=ur(),l=cd(),c=Gt(),h=o==null?void 0:o.nickname,p=o==null?void 0:o.profileImg,m=R.exports.useRef(null),x=()=>{confirm("\uC815\uB9D0 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&(c(f1()),a("/"))},y=v=>{s(v),window.innerWidth<=768&&_()},_=v=>{v==null||v.stopPropagation(),s(null),t()},k=()=>o?A("div",{className:"users",children:[A("li",{className:"item user_nickname",children:[p?w("img",{src:p,alt:h}):null,w(Pn,{to:"/account",onClick:()=>y(null),children:h})]}),w("li",{className:"item logOut",children:w("span",{onClick:x,children:w(ZW,{})})})]}):w("div",{className:"users sign",children:w("li",{className:"item_account",children:w(Pn,{to:"account/login",className:"account",onClick:()=>y(null),children:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"})})});return R.exports.useEffect(()=>{const v=()=>{window.scrollY>=60?r(!0):r(!1)};return window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]),R.exports.useEffect(()=>{const v=S=>{e&&!m.current.contains(S.target)&&_()};return document.addEventListener("click",v),()=>{document.removeEventListener("click",v)}},[e,_]),l.pathname==="/account/signup"||l.pathname==="/account/login"?null:w(m8,{style:{borderBottom:n?"1px solid #f7f2f2":""},children:A("div",{className:"contents",children:[w("div",{className:"logo",children:w("h1",{onClick:()=>{a("/"),s(null)},children:"ModArt"})}),A("ul",{className:`navbar${e?" mobile":""}`,children:[A("div",{className:"list",children:[w("li",{className:`item ${i===0?"active":""}`,children:w(Pn,{to:"/",onClick:y,children:"HOME"})}),w("li",{className:`item ${i===1?"active":""}`,children:w(Pn,{to:"/board",onClick:()=>y(1),children:"OOTD"})}),w("li",{className:`item ${i===2?"active":""}`,children:w(Pn,{to:"/photo",onClick:()=>y(2),children:"Photo"})}),w("li",{className:`item ${i===3?"active":""}`,children:w(Pn,{to:"/today",onClick:()=>y(3),children:"TodayStory"})}),w("li",{className:`item ${i===4?"active":""}`,children:w(Pn,{to:"/qna",onClick:()=>y(4),children:"QnA"})})]}),k()]}),w("div",{className:"toggle",onClick:v=>_(v),ref:m,children:e?w(nH,{}):w(HW,{})})]})})};var iH=Zt.memo(rH);function vk(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sH(e,t,n){return t&&vk(e.prototype,t),n&&vk(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var wk="(prefers-reduced-motion: reduce)",Qa=1,oH=2,Ml=3,nu=4,Pd=5,ff=6,Tp=7,aH={CREATED:Qa,MOUNTED:oH,IDLE:Ml,MOVING:nu,SCROLLING:Pd,DRAGGING:ff,DESTROYED:Tp};function is(e){e.length=0}function go(e,t,n){return Array.prototype.slice.call(e,t,n)}function rt(e){return e.bind.apply(e,[null].concat(go(arguments,1)))}var ON=setTimeout,m1=function(){};function _k(e){return requestAnimationFrame(e)}function cg(e,t){return typeof t===e}function qc(e){return!wx(e)&&cg("object",e)}var vx=Array.isArray,RN=rt(cg,"function"),so=rt(cg,"string"),Md=rt(cg,"undefined");function wx(e){return e===null}function PN(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Ld(e){return vx(e)?e:[e]}function Sr(e,t){Ld(e).forEach(t)}function _x(e,t){return e.indexOf(t)>-1}function pf(e,t){return e.push.apply(e,Ld(t)),e}function Ui(e,t,n){e&&Sr(t,function(r){r&&e.classList[n?"add":"remove"](r)})}function hi(e,t){Ui(e,so(t)?t.split(" "):t,!0)}function $d(e,t){Sr(t,e.appendChild.bind(e))}function xx(e,t){Sr(e,function(n){var r=(t||n).parentNode;r&&r.insertBefore(n,t)})}function Kc(e,t){return PN(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function MN(e,t){var n=e?go(e.children):[];return t?n.filter(function(r){return Kc(r,t)}):n}function Fd(e,t){return t?MN(e,t)[0]:e.firstElementChild}var Qc=Object.keys;function Vo(e,t,n){return e&&(n?Qc(e).reverse():Qc(e)).forEach(function(r){r!=="__proto__"&&t(e[r],r)}),e}function Xc(e){return go(arguments,1).forEach(function(t){Vo(t,function(n,r){e[r]=t[r]})}),e}function As(e){return go(arguments,1).forEach(function(t){Vo(t,function(n,r){vx(n)?e[r]=n.slice():qc(n)?e[r]=As({},qc(e[r])?e[r]:{},n):e[r]=n})}),e}function xk(e,t){Sr(t||Qc(e),function(n){delete e[n]})}function fi(e,t){Sr(e,function(n){Sr(t,function(r){n&&n.removeAttribute(r)})})}function De(e,t,n){qc(t)?Vo(t,function(r,i){De(e,i,r)}):Sr(e,function(r){wx(n)||n===""?fi(r,t):r.setAttribute(t,String(n))})}function hl(e,t,n){var r=document.createElement(e);return t&&(so(t)?hi(r,t):De(r,t)),n&&$d(n,r),r}function Pr(e,t,n){if(Md(n))return getComputedStyle(e)[t];wx(n)||(e.style[t]=""+n)}function Jc(e,t){Pr(e,"display",t)}function LN(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function Lr(e,t){return e.getAttribute(t)}function Ck(e,t){return e&&e.classList.contains(t)}function pr(e){return e.getBoundingClientRect()}function sa(e){Sr(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function $N(e){return Fd(new DOMParser().parseFromString(e,"text/html").body)}function Ni(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function FN(e,t){return e&&e.querySelector(t)}function Cx(e,t){return t?go(e.querySelectorAll(t)):[]}function Bi(e,t){Ui(e,t,!1)}function g1(e){return e.timeStamp}function So(e){return so(e)?e:e?e+"px":""}var Ud="splide",Sx="data-"+Ud;function sc(e,t){if(!e)throw new Error("["+Ud+"] "+(t||""))}var oo=Math.min,bp=Math.max,Dp=Math.floor,Zc=Math.ceil,Yn=Math.abs;function UN(e,t,n){return Yn(e-t)<n}function mf(e,t,n,r){var i=oo(t,n),s=bp(t,n);return r?i<e&&e<s:i<=e&&e<=s}function Ra(e,t,n){var r=oo(t,n),i=bp(t,n);return oo(bp(r,e),i)}function y1(e){return+(e>0)-+(e<0)}function v1(e,t){return Sr(t,function(n){e=e.replace("%s",""+n)}),e}function Ex(e){return e<10?"0"+e:""+e}var Sk={};function lH(e){return""+e+Ex(Sk[e]=(Sk[e]||0)+1)}function BN(){var e=[];function t(o,a,l,c){i(o,a,function(h,p,m){var x="addEventListener"in h,y=x?h.removeEventListener.bind(h,p,l,c):h.removeListener.bind(h,l);x?h.addEventListener(p,l,c):h.addListener(l),e.push([h,p,m,l,y])})}function n(o,a,l){i(o,a,function(c,h,p){e=e.filter(function(m){return m[0]===c&&m[1]===h&&m[2]===p&&(!l||m[3]===l)?(m[4](),!1):!0})})}function r(o,a,l){var c,h=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:h,detail:l}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,h,!1,l)),o.dispatchEvent(c),c}function i(o,a,l){Sr(o,function(c){c&&Sr(a,function(h){h.split(" ").forEach(function(p){var m=p.split(".");l(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),is(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var yo="mounted",w1="ready",ss="move",ru="moved",kx="click",zN="active",VN="inactive",jN="visible",YN="hidden",$t="refresh",$n="updated",Ll="resize",dg="resized",WN="drag",HN="dragging",GN="dragged",hg="scroll",wa="scrolled",uH="overflow",Tx="destroy",qN="arrows:mounted",KN="arrows:updated",QN="pagination:mounted",XN="pagination:updated",bx="navigation:mounted",Dx="autoplay:play",JN="autoplay:playing",Ix="autoplay:pause",Ax="lazyload:loaded",ZN="sk",eO="sh",Ip="ei";function St(e){var t=e?e.event.bus:document.createDocumentFragment(),n=BN();function r(s,o){n.bind(t,Ld(s).join(" "),function(a){o.apply(o,vx(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,go(arguments,1))}return e&&e.event.on(Tx,n.destroy),Xc(n,{bus:t,on:r,off:rt(n.unbind,t),emit:i})}function fg(e,t,n,r){var i=Date.now,s,o=0,a,l=!0,c=0;function h(){if(!l){if(o=e?oo((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();a=_k(h)}}function p(C){C||y(),s=i()-(C?o*e:0),l=!1,a=_k(h)}function m(){l=!0}function x(){s=i(),o=0,n&&n(o)}function y(){a&&cancelAnimationFrame(a),o=0,a=0,l=!0}function _(C){e=C}function k(){return l}return{start:p,rewind:x,pause:m,cancel:y,set:_,isPaused:k}}function cH(e){var t=e;function n(i){t=i}function r(i){return _x(Ld(i),t)}return{set:n,is:r}}function dH(e,t){var n=fg(t||0,e,null,1);return function(){n.isPaused()&&n.start()}}function hH(e,t,n){var r=e.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=BN(),a=[];function l(){var y=n.mediaQuery==="min";Qc(i).sort(function(_,k){return y?+_-+k:+k-+_}).forEach(function(_){h(i[_],"("+(y?"min":"max")+"-width:"+_+"px)")}),h(s,wk),p()}function c(y){y&&o.destroy()}function h(y,_){var k=matchMedia(_);o.bind(k,"change",p),a.push([y,k])}function p(){var y=r.is(Tp),_=n.direction,k=a.reduce(function(C,v){return As(C,v[1].matches?v[0]:{})},{});xk(n),x(k),n.destroy?e.destroy(n.destroy==="completely"):y?(c(!0),e.mount()):_!==n.direction&&e.refresh()}function m(y){matchMedia(wk).matches&&(y?As(n,s):xk(n,Qc(s)))}function x(y,_,k){As(n,y),_&&As(Object.getPrototypeOf(n),y),(k||!r.is(Qa))&&e.emit($n,n)}return{setup:l,destroy:c,reduce:m,set:x}}var pg="Arrow",mg=pg+"Left",gg=pg+"Right",tO=pg+"Up",nO=pg+"Down",Ek="rtl",yg="ttb",hy={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[tO,gg],ArrowRight:[nO,mg]};function fH(e,t,n){function r(s,o,a){a=a||n.direction;var l=a===Ek&&!o?1:a===yg?0:-1;return hy[s]&&hy[s][l]||s.replace(/width|left|right/i,function(c,h){var p=hy[c.toLowerCase()][l]||c;return h>0?p.charAt(0).toUpperCase()+p.slice(1):p})}function i(s){return s*(n.direction===Ek?1:-1)}return{resolve:r,orient:i}}var Wi="role",fl="tabindex",pH="disabled",Wr="aria-",Bd=Wr+"controls",rO=Wr+"current",kk=Wr+"selected",vr=Wr+"label",Nx=Wr+"labelledby",iO=Wr+"hidden",Ox=Wr+"orientation",ed=Wr+"roledescription",Tk=Wr+"live",bk=Wr+"busy",Dk=Wr+"atomic",Rx=[Wi,fl,pH,Bd,rO,vr,Nx,iO,Ox,ed],gi=Ud+"__",vo="is-",fy=Ud,Ik=gi+"track",mH=gi+"list",vg=gi+"slide",sO=vg+"--clone",gH=vg+"__container",Px=gi+"arrows",wg=gi+"arrow",oO=wg+"--prev",aO=wg+"--next",_g=gi+"pagination",lO=_g+"__page",yH=gi+"progress",vH=yH+"__bar",wH=gi+"toggle",_H=gi+"spinner",xH=gi+"sr",CH=vo+"initialized",oa=vo+"active",uO=vo+"prev",cO=vo+"next",_1=vo+"visible",x1=vo+"loading",dO=vo+"focus-in",hO=vo+"overflow",SH=[oa,_1,uO,cO,x1,dO,hO],EH={slide:vg,clone:sO,arrows:Px,arrow:wg,prev:oO,next:aO,pagination:_g,page:lO,spinner:_H};function kH(e,t){if(RN(e.closest))return e.closest(t);for(var n=e;n&&n.nodeType===1&&!Kc(n,t);)n=n.parentElement;return n}var TH=5,Ak=200,fO="touchstart mousedown",py="touchmove mousemove",my="touchend touchcancel mouseup click";function bH(e,t,n){var r=St(e),i=r.on,s=r.bind,o=e.root,a=n.i18n,l={},c=[],h=[],p=[],m,x,y;function _(){S(),T(),v()}function k(){i($t,C),i($t,_),i($n,v),s(document,fO+" keydown",function(N){y=N.type==="keydown"},{capture:!0}),s(o,"focusin",function(){Ui(o,dO,!!y)})}function C(N){var O=Rx.concat("style");is(c),Bi(o,h),Bi(m,p),fi([m,x],O),fi(o,N?O:["style",ed])}function v(){Bi(o,h),Bi(m,p),h=P(fy),p=P(Ik),hi(o,h),hi(m,p),De(o,vr,n.label),De(o,Nx,n.labelledby)}function S(){m=I("."+Ik),x=Fd(m,"."+mH),sc(m&&x,"A track/list element is missing."),pf(c,MN(x,"."+vg+":not(."+sO+")")),Vo({arrows:Px,pagination:_g,prev:oO,next:aO,bar:vH,toggle:wH},function(N,O){l[O]=I("."+N)}),Xc(l,{root:o,track:m,list:x,slides:c})}function T(){var N=o.id||lH(Ud),O=n.role;o.id=N,m.id=m.id||N+"-track",x.id=x.id||N+"-list",!Lr(o,Wi)&&o.tagName!=="SECTION"&&O&&De(o,Wi,O),De(o,ed,a.carousel),De(x,Wi,"presentation")}function I(N){var O=FN(o,N);return O&&kH(O,"."+fy)===o?O:void 0}function P(N){return[N+"--"+n.type,N+"--"+n.direction,n.drag&&N+"--draggable",n.isNavigation&&N+"--nav",N===fy&&oa]}return Xc(l,{setup:_,mount:k,destroy:C})}var $l="slide",iu="loop",zd="fade";function DH(e,t,n,r){var i=St(e),s=i.on,o=i.emit,a=i.bind,l=e.Components,c=e.root,h=e.options,p=h.isNavigation,m=h.updateOnMove,x=h.i18n,y=h.pagination,_=h.slideFocus,k=l.Direction.resolve,C=Lr(r,"style"),v=Lr(r,vr),S=n>-1,T=Fd(r,"."+gH),I;function P(){S||(r.id=c.id+"-slide"+Ex(t+1),De(r,Wi,y?"tabpanel":"group"),De(r,ed,x.slide),De(r,vr,v||v1(x.slideLabel,[t+1,e.length]))),N()}function N(){a(r,"click",rt(o,kx,$)),a(r,"keydown",rt(o,ZN,$)),s([ru,eO,wa],j),s(bx,Z),m&&s(ss,F)}function O(){I=!0,i.destroy(),Bi(r,SH),fi(r,Rx),De(r,"style",C),De(r,vr,v||"")}function Z(){var V=e.splides.map(function(M){var ee=M.splide.Components.Slides.getAt(t);return ee?ee.slide.id:""}).join(" ");De(r,vr,v1(x.slideX,(S?n:t)+1)),De(r,Bd,V),De(r,Wi,_?"button":""),_&&fi(r,ed)}function F(){I||j()}function j(){if(!I){var V=e.index;J(),X(),Ui(r,uO,t===V-1),Ui(r,cO,t===V+1)}}function J(){var V=oe();V!==Ck(r,oa)&&(Ui(r,oa,V),De(r,rO,p&&V||""),o(V?zN:VN,$))}function X(){var V=Te(),M=!V&&(!oe()||S);if(e.state.is([nu,Pd])||De(r,iO,M||""),De(Cx(r,h.focusableNodes||""),fl,M?-1:""),_&&De(r,fl,M?-1:0),V!==Ck(r,_1)&&(Ui(r,_1,V),o(V?jN:YN,$)),!V&&document.activeElement===r){var ee=l.Slides.getAt(e.index);ee&&LN(ee.slide)}}function ue(V,M,ee){Pr(ee&&T||r,V,M)}function oe(){var V=e.index;return V===t||h.cloneStatus&&V===n}function Te(){if(e.is(zd))return oe();var V=pr(l.Elements.track),M=pr(r),ee=k("left",!0),U=k("right",!0);return Dp(V[ee])<=Zc(M[ee])&&Dp(M[U])<=Zc(V[U])}function ge(V,M){var ee=Yn(V-t);return!S&&(h.rewind||e.is(iu))&&(ee=oo(ee,e.length-ee)),ee<=M}var $={index:t,slideIndex:n,slide:r,container:T,isClone:S,mount:P,destroy:O,update:j,style:ue,isWithin:ge};return $}function IH(e,t,n){var r=St(e),i=r.on,s=r.emit,o=r.bind,a=t.Elements,l=a.slides,c=a.list,h=[];function p(){m(),i($t,x),i($t,m)}function m(){l.forEach(function(j,J){_(j,J,-1)})}function x(){I(function(j){j.destroy()}),is(h)}function y(){I(function(j){j.update()})}function _(j,J,X){var ue=DH(e,J,X,j);ue.mount(),h.push(ue),h.sort(function(oe,Te){return oe.index-Te.index})}function k(j){return j?P(function(J){return!J.isClone}):h}function C(j){var J=t.Controller,X=J.toIndex(j),ue=J.hasFocus()?1:n.perPage;return P(function(oe){return mf(oe.index,X,X+ue-1)})}function v(j){return P(j)[0]}function S(j,J){Sr(j,function(X){if(so(X)&&(X=$N(X)),PN(X)){var ue=l[J];ue?xx(X,ue):$d(c,X),hi(X,n.classes.slide),O(X,rt(s,Ll))}}),s($t)}function T(j){sa(P(j).map(function(J){return J.slide})),s($t)}function I(j,J){k(J).forEach(j)}function P(j){return h.filter(RN(j)?j:function(J){return so(j)?Kc(J.slide,j):_x(Ld(j),J.index)})}function N(j,J,X){I(function(ue){ue.style(j,J,X)})}function O(j,J){var X=Cx(j,"img"),ue=X.length;ue?X.forEach(function(oe){o(oe,"load error",function(){--ue||J()})}):J()}function Z(j){return j?l.length:h.length}function F(){return h.length>n.perPage}return{mount:p,destroy:x,update:y,register:_,get:k,getIn:C,getAt:v,add:S,remove:T,forEach:I,filter:P,style:N,getLength:Z,isEnough:F}}function AH(e,t,n){var r=St(e),i=r.on,s=r.bind,o=r.emit,a=t.Slides,l=t.Direction.resolve,c=t.Elements,h=c.root,p=c.track,m=c.list,x=a.getAt,y=a.style,_,k,C;function v(){S(),s(window,"resize load",dH(rt(o,Ll))),i([$n,$t],S),i(Ll,T)}function S(){_=n.direction===yg,Pr(h,"maxWidth",So(n.width)),Pr(p,l("paddingLeft"),I(!1)),Pr(p,l("paddingRight"),I(!0)),T(!0)}function T($){var V=pr(h);($||k.width!==V.width||k.height!==V.height)&&(Pr(p,"height",P()),y(l("marginRight"),So(n.gap)),y("width",O()),y("height",Z(),!0),k=V,o(dg),C!==(C=ge())&&(Ui(h,hO,C),o(uH,C)))}function I($){var V=n.padding,M=l($?"right":"left");return V&&So(V[M]||(qc(V)?0:V))||"0px"}function P(){var $="";return _&&($=N(),sc($,"height or heightRatio is missing."),$="calc("+$+" - "+I(!1)+" - "+I(!0)+")"),$}function N(){return So(n.height||pr(m).width*n.heightRatio)}function O(){return n.autoWidth?null:So(n.fixedWidth)||(_?"":F())}function Z(){return So(n.fixedHeight)||(_?n.autoHeight?null:F():N())}function F(){var $=So(n.gap);return"calc((100%"+($&&" + "+$)+")/"+(n.perPage||1)+($&&" - "+$)+")"}function j(){return pr(m)[l("width")]}function J($,V){var M=x($||0);return M?pr(M.slide)[l("width")]+(V?0:oe()):0}function X($,V){var M=x($);if(M){var ee=pr(M.slide)[l("right")],U=pr(m)[l("left")];return Yn(ee-U)+(V?0:oe())}return 0}function ue($){return X(e.length-1)-X(0)+J(0,$)}function oe(){var $=x(0);return $&&parseFloat(Pr($.slide,l("marginRight")))||0}function Te($){return parseFloat(Pr(p,l("padding"+($?"Right":"Left"))))||0}function ge(){return e.is(zd)||ue(!0)>j()}return{mount:v,resize:T,listSize:j,slideSize:J,sliderSize:ue,totalSize:X,getPadding:Te,isOverflow:ge}}var NH=2;function OH(e,t,n){var r=St(e),i=r.on,s=t.Elements,o=t.Slides,a=t.Direction.resolve,l=[],c;function h(){i($t,p),i([$n,Ll],x),(c=k())&&(y(c),t.Layout.resize(!0))}function p(){m(),h()}function m(){sa(l),is(l),r.destroy()}function x(){var C=k();c!==C&&(c<C||!C)&&r.emit($t)}function y(C){var v=o.get().slice(),S=v.length;if(S){for(;v.length<C;)pf(v,v);pf(v.slice(-C),v.slice(0,C)).forEach(function(T,I){var P=I<C,N=_(T.slide,I);P?xx(N,v[0].slide):$d(s.list,N),pf(l,N),o.register(N,I-C+(P?0:S),T.index)})}}function _(C,v){var S=C.cloneNode(!0);return hi(S,n.classes.clone),S.id=e.root.id+"-clone"+Ex(v+1),S}function k(){var C=n.clones;if(!e.is(iu))C=0;else if(Md(C)){var v=n[a("fixedWidth")]&&t.Layout.slideSize(0),S=v&&Zc(pr(s.track)[a("width")]/v);C=S||n[a("autoWidth")]&&e.length||n.perPage*NH}return C}return{mount:h,destroy:m}}function RH(e,t,n){var r=St(e),i=r.on,s=r.emit,o=e.state.set,a=t.Layout,l=a.slideSize,c=a.getPadding,h=a.totalSize,p=a.listSize,m=a.sliderSize,x=t.Direction,y=x.resolve,_=x.orient,k=t.Elements,C=k.list,v=k.track,S;function T(){S=t.Transition,i([yo,dg,$n,$t],I)}function I(){t.Controller.isBusy()||(t.Scroll.cancel(),N(e.index),t.Slides.update())}function P(M,ee,U,B){M!==ee&&$(M>U)&&(j(),O(F(ue(),M>U),!0)),o(nu),s(ss,ee,U,M),S.start(ee,function(){o(Ml),s(ru,ee,U,M),B&&B()})}function N(M){O(X(M,!0))}function O(M,ee){if(!e.is(zd)){var U=ee?M:Z(M);Pr(C,"transform","translate"+y("X")+"("+U+"px)"),M!==U&&s(eO)}}function Z(M){if(e.is(iu)){var ee=J(M),U=ee>t.Controller.getEnd(),B=ee<0;(B||U)&&(M=F(M,U))}return M}function F(M,ee){var U=M-ge(ee),B=m();return M-=_(B*(Zc(Yn(U)/B)||1))*(ee?1:-1),M}function j(){O(ue(),!0),S.cancel()}function J(M){for(var ee=t.Slides.get(),U=0,B=1/0,Y=0;Y<ee.length;Y++){var z=ee[Y].index,b=Yn(X(z,!0)-M);if(b<=B)B=b,U=z;else break}return U}function X(M,ee){var U=_(h(M-1)-Te(M));return ee?oe(U):U}function ue(){var M=y("left");return pr(C)[M]-pr(v)[M]+_(c(!1))}function oe(M){return n.trimSpace&&e.is($l)&&(M=Ra(M,0,_(m(!0)-p()))),M}function Te(M){var ee=n.focus;return ee==="center"?(p()-l(M,!0))/2:+ee*l(M)||0}function ge(M){return X(M?t.Controller.getEnd():0,!!n.trimSpace)}function $(M){var ee=_(F(ue(),M));return M?ee>=0:ee<=C[y("scrollWidth")]-pr(v)[y("width")]}function V(M,ee){ee=Md(ee)?ue():ee;var U=M!==!0&&_(ee)<_(ge(!1)),B=M!==!1&&_(ee)>_(ge(!0));return U||B}return{mount:T,move:P,jump:N,translate:O,shift:F,cancel:j,toIndex:J,toPosition:X,getPosition:ue,getLimit:ge,exceededLimit:V,reposition:I}}function PH(e,t,n){var r=St(e),i=r.on,s=r.emit,o=t.Move,a=o.getPosition,l=o.getLimit,c=o.toPosition,h=t.Slides,p=h.isEnough,m=h.getLength,x=n.omitEnd,y=e.is(iu),_=e.is($l),k=rt(ue,!1),C=rt(ue,!0),v=n.start||0,S,T=v,I,P,N;function O(){Z(),i([$n,$t,Ip],Z),i(dg,F)}function Z(){I=m(!0),P=n.perMove,N=n.perPage,S=$();var b=Ra(v,0,x?S:I-1);b!==v&&(v=b,o.reposition())}function F(){S!==$()&&s(Ip)}function j(b,le,W){if(!z()){var we=X(b),me=ge(we);me>-1&&(le||me!==v)&&(U(me),o.move(we,me,T,W))}}function J(b,le,W,we){t.Scroll.scroll(b,le,W,function(){var me=ge(o.toIndex(a()));U(x?oo(me,S):me),we&&we()})}function X(b){var le=v;if(so(b)){var W=b.match(/([+\-<>])(\d+)?/)||[],we=W[1],me=W[2];we==="+"||we==="-"?le=oe(v+ +(""+we+(+me||1)),v):we===">"?le=me?V(+me):k(!0):we==="<"&&(le=C(!0))}else le=y?b:Ra(b,0,S);return le}function ue(b,le){var W=P||(Y()?1:N),we=oe(v+W*(b?-1:1),v,!(P||Y()));return we===-1&&_&&!UN(a(),l(!b),1)?b?0:S:le?we:ge(we)}function oe(b,le,W){if(p()||Y()){var we=Te(b);we!==b&&(le=b,b=we,W=!1),b<0||b>S?!P&&(mf(0,b,le,!0)||mf(S,le,b,!0))?b=V(M(b)):y?b=W?b<0?-(I%N||N):I:b:n.rewind?b=b<0?S:0:b=-1:W&&b!==le&&(b=V(M(le)+(b<le?-1:1)))}else b=-1;return b}function Te(b){if(_&&n.trimSpace==="move"&&b!==v)for(var le=a();le===c(b,!0)&&mf(b,0,e.length-1,!n.rewind);)b<v?--b:++b;return b}function ge(b){return y?(b+I)%I||0:b}function $(){for(var b=I-(Y()||y&&P?1:N);x&&b-- >0;)if(c(I-1,!0)!==c(b,!0)){b++;break}return Ra(b,0,I-1)}function V(b){return Ra(Y()?b:N*b,0,S)}function M(b){return Y()?oo(b,S):Dp((b>=S?I-1:b)/N)}function ee(b){var le=o.toIndex(b);return _?Ra(le,0,S):le}function U(b){b!==v&&(T=v,v=b)}function B(b){return b?T:v}function Y(){return!Md(n.focus)||n.isNavigation}function z(){return e.state.is([nu,Pd])&&!!n.waitForTransition}return{mount:O,go:j,scroll:J,getNext:k,getPrev:C,getAdjacent:ue,getEnd:$,setIndex:U,getIndex:B,toIndex:V,toPage:M,toDest:ee,hasFocus:Y,isBusy:z}}var MH="http://www.w3.org/2000/svg",LH="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Vh=40;function $H(e,t,n){var r=St(e),i=r.on,s=r.bind,o=r.emit,a=n.classes,l=n.i18n,c=t.Elements,h=t.Controller,p=c.arrows,m=c.track,x=p,y=c.prev,_=c.next,k,C,v={};function S(){I(),i($n,T)}function T(){P(),S()}function I(){var J=n.arrows;J&&!(y&&_)&&Z(),y&&_&&(Xc(v,{prev:y,next:_}),Jc(x,J?"":"none"),hi(x,C=Px+"--"+n.direction),J&&(N(),j(),De([y,_],Bd,m.id),o(qN,y,_)))}function P(){r.destroy(),Bi(x,C),k?(sa(p?[y,_]:x),y=_=null):fi([y,_],Rx)}function N(){i([yo,ru,$t,wa,Ip],j),s(_,"click",rt(O,">")),s(y,"click",rt(O,"<"))}function O(J){h.go(J,!0)}function Z(){x=p||hl("div",a.arrows),y=F(!0),_=F(!1),k=!0,$d(x,[y,_]),!p&&xx(x,m)}function F(J){var X='<button class="'+a.arrow+" "+(J?a.prev:a.next)+'" type="button"><svg xmlns="'+MH+'" viewBox="0 0 '+Vh+" "+Vh+'" width="'+Vh+'" height="'+Vh+'" focusable="false"><path d="'+(n.arrowPath||LH)+'" />';return $N(X)}function j(){if(y&&_){var J=e.index,X=h.getPrev(),ue=h.getNext(),oe=X>-1&&J<X?l.last:l.prev,Te=ue>-1&&J>ue?l.first:l.next;y.disabled=X<0,_.disabled=ue<0,De(y,vr,oe),De(_,vr,Te),o(KN,y,_,X,ue)}}return{arrows:v,mount:S,destroy:P,update:j}}var FH=Sx+"-interval";function UH(e,t,n){var r=St(e),i=r.on,s=r.bind,o=r.emit,a=fg(n.interval,e.go.bind(e,">"),N),l=a.isPaused,c=t.Elements,h=t.Elements,p=h.root,m=h.toggle,x=n.autoplay,y,_,k=x==="pause";function C(){x&&(v(),m&&De(m,Bd,c.track.id),k||S(),P())}function v(){n.pauseOnHover&&s(p,"mouseenter mouseleave",function(Z){y=Z.type==="mouseenter",I()}),n.pauseOnFocus&&s(p,"focusin focusout",function(Z){_=Z.type==="focusin",I()}),m&&s(m,"click",function(){k?S():T(!0)}),i([ss,hg,$t],a.rewind),i(ss,O)}function S(){l()&&t.Slides.isEnough()&&(a.start(!n.resetProgress),_=y=k=!1,P(),o(Dx))}function T(Z){Z===void 0&&(Z=!0),k=!!Z,P(),l()||(a.pause(),o(Ix))}function I(){k||(y||_?T(!1):S())}function P(){m&&(Ui(m,oa,!k),De(m,vr,n.i18n[k?"play":"pause"]))}function N(Z){var F=c.bar;F&&Pr(F,"width",Z*100+"%"),o(JN,Z)}function O(Z){var F=t.Slides.getAt(Z);a.set(F&&+Lr(F.slide,FH)||n.interval)}return{mount:C,destroy:a.cancel,play:S,pause:T,isPaused:l}}function BH(e,t,n){var r=St(e),i=r.on;function s(){n.cover&&(i(Ax,rt(a,!0)),i([yo,$n,$t],rt(o,!0)))}function o(l){t.Slides.forEach(function(c){var h=Fd(c.container||c.slide,"img");h&&h.src&&a(l,h,c)})}function a(l,c,h){h.style("background",l?'center/cover no-repeat url("'+c.src+'")':"",!0),Jc(c,l?"none":"")}return{mount:s,destroy:rt(o,!1)}}var zH=10,VH=600,jH=.6,YH=1.5,WH=800;function HH(e,t,n){var r=St(e),i=r.on,s=r.emit,o=e.state.set,a=t.Move,l=a.getPosition,c=a.getLimit,h=a.exceededLimit,p=a.translate,m=e.is($l),x,y,_=1;function k(){i(ss,T),i([$n,$t],I)}function C(N,O,Z,F,j){var J=l();if(T(),Z&&(!m||!h())){var X=t.Layout.sliderSize(),ue=y1(N)*X*Dp(Yn(N)/X)||0;N=a.toPosition(t.Controller.toDest(N%X))+ue}var oe=UN(J,N,1);_=1,O=oe?0:O||bp(Yn(N-J)/YH,WH),y=F,x=fg(O,v,rt(S,J,N,j),1),o(Pd),s(hg),x.start()}function v(){o(Ml),y&&y(),s(wa)}function S(N,O,Z,F){var j=l(),J=N+(O-N)*P(F),X=(J-j)*_;p(j+X),m&&!Z&&h()&&(_*=jH,Yn(X)<zH&&C(c(h(!0)),VH,!1,y,!0))}function T(){x&&x.cancel()}function I(){x&&!x.isPaused()&&(T(),v())}function P(N){var O=n.easingFunc;return O?O(N):1-Math.pow(1-N,4)}return{mount:k,destroy:T,scroll:C,cancel:I}}var Pa={passive:!1,capture:!0};function GH(e,t,n){var r=St(e),i=r.on,s=r.emit,o=r.bind,a=r.unbind,l=e.state,c=t.Move,h=t.Scroll,p=t.Controller,m=t.Elements.track,x=t.Media.reduce,y=t.Direction,_=y.resolve,k=y.orient,C=c.getPosition,v=c.exceededLimit,S,T,I,P,N,O=!1,Z,F,j;function J(){o(m,py,m1,Pa),o(m,my,m1,Pa),o(m,fO,ue,Pa),o(m,"click",ge,{capture:!0}),o(m,"dragstart",Ni),i([yo,$n],X)}function X(){var ne=n.drag;_e(!ne),P=ne==="free"}function ue(ne){if(Z=!1,!F){var be=me(ne);we(ne.target)&&(be||!ne.button)&&(p.isBusy()?Ni(ne,!0):(j=be?m:window,N=l.is([nu,Pd]),I=null,o(j,py,oe,Pa),o(j,my,Te,Pa),c.cancel(),h.cancel(),$(ne)))}}function oe(ne){if(l.is(ff)||(l.set(ff),s(WN)),ne.cancelable)if(N){c.translate(S+W(Y(ne)));var be=z(ne)>Ak,Ee=O!==(O=v());(be||Ee)&&$(ne),Z=!0,s(HN),Ni(ne)}else ee(ne)&&(N=M(ne),Ni(ne))}function Te(ne){l.is(ff)&&(l.set(Ml),s(GN)),N&&(V(ne),Ni(ne)),a(j,py,oe),a(j,my,Te),N=!1}function ge(ne){!F&&Z&&Ni(ne,!0)}function $(ne){I=T,T=ne,S=C()}function V(ne){var be=U(ne),Ee=B(be),dt=n.rewind&&n.rewindByDrag;x(!1),P?p.scroll(Ee,0,n.snap):e.is(zd)?p.go(k(y1(be))<0?dt?"<":"-":dt?">":"+"):e.is($l)&&O&&dt?p.go(v(!0)?">":"<"):p.go(p.toDest(Ee),!0),x(!0)}function M(ne){var be=n.dragMinThreshold,Ee=qc(be),dt=Ee&&be.mouse||0,Le=(Ee?be.touch:+be)||10;return Yn(Y(ne))>(me(ne)?Le:dt)}function ee(ne){return Yn(Y(ne))>Yn(Y(ne,!0))}function U(ne){if(e.is(iu)||!O){var be=z(ne);if(be&&be<Ak)return Y(ne)/be}return 0}function B(ne){return C()+y1(ne)*oo(Yn(ne)*(n.flickPower||600),P?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function Y(ne,be){return le(ne,be)-le(b(ne),be)}function z(ne){return g1(ne)-g1(b(ne))}function b(ne){return T===ne&&I||T}function le(ne,be){return(me(ne)?ne.changedTouches[0]:ne)["page"+_(be?"Y":"X")]}function W(ne){return ne/(O&&e.is($l)?TH:1)}function we(ne){var be=n.noDrag;return!Kc(ne,"."+lO+", ."+wg)&&(!be||!Kc(ne,be))}function me(ne){return typeof TouchEvent!="undefined"&&ne instanceof TouchEvent}function Be(){return N}function _e(ne){F=ne}return{mount:J,disable:_e,isDragging:Be}}var qH={Spacebar:" ",Right:gg,Left:mg,Up:tO,Down:nO};function Mx(e){return e=so(e)?e:e.key,qH[e]||e}var Nk="keydown";function KH(e,t,n){var r=St(e),i=r.on,s=r.bind,o=r.unbind,a=e.root,l=t.Direction.resolve,c,h;function p(){m(),i($n,x),i($n,m),i(ss,_)}function m(){var C=n.keyboard;C&&(c=C==="global"?window:a,s(c,Nk,k))}function x(){o(c,Nk)}function y(C){h=C}function _(){var C=h;h=!0,ON(function(){h=C})}function k(C){if(!h){var v=Mx(C);v===l(mg)?e.go("<"):v===l(gg)&&e.go(">")}}return{mount:p,destroy:x,disable:y}}var oc=Sx+"-lazy",gf=oc+"-srcset",QH="["+oc+"], ["+gf+"]";function XH(e,t,n){var r=St(e),i=r.on,s=r.off,o=r.bind,a=r.emit,l=n.lazyLoad==="sequential",c=[ru,wa],h=[];function p(){n.lazyLoad&&(m(),i($t,m))}function m(){is(h),x(),l?C():(s(c),i(c,y),y())}function x(){t.Slides.forEach(function(v){Cx(v.slide,QH).forEach(function(S){var T=Lr(S,oc),I=Lr(S,gf);if(T!==S.src||I!==S.srcset){var P=n.classes.spinner,N=S.parentElement,O=Fd(N,"."+P)||hl("span",P,N);h.push([S,v,O]),S.src||Jc(S,"none")}})})}function y(){h=h.filter(function(v){var S=n.perPage*((n.preloadPages||1)+1)-1;return v[1].isWithin(e.index,S)?_(v):!0}),h.length||s(c)}function _(v){var S=v[0];hi(v[1].slide,x1),o(S,"load error",rt(k,v)),De(S,"src",Lr(S,oc)),De(S,"srcset",Lr(S,gf)),fi(S,oc),fi(S,gf)}function k(v,S){var T=v[0],I=v[1];Bi(I.slide,x1),S.type!=="error"&&(sa(v[2]),Jc(T,""),a(Ax,T,I),a(Ll)),l&&C()}function C(){h.length&&_(h.shift())}return{mount:p,destroy:rt(is,h),check:y}}function JH(e,t,n){var r=St(e),i=r.on,s=r.emit,o=r.bind,a=t.Slides,l=t.Elements,c=t.Controller,h=c.hasFocus,p=c.getIndex,m=c.go,x=t.Direction.resolve,y=l.pagination,_=[],k,C;function v(){S(),i([$n,$t,Ip],v);var F=n.pagination;y&&Jc(y,F?"":"none"),F&&(i([ss,hg,wa],Z),T(),Z(),s(QN,{list:k,items:_},O(e.index)))}function S(){k&&(sa(y?go(k.children):k),Bi(k,C),is(_),k=null),r.destroy()}function T(){var F=e.length,j=n.classes,J=n.i18n,X=n.perPage,ue=h()?c.getEnd()+1:Zc(F/X);k=y||hl("ul",j.pagination,l.track.parentElement),hi(k,C=_g+"--"+N()),De(k,Wi,"tablist"),De(k,vr,J.select),De(k,Ox,N()===yg?"vertical":"");for(var oe=0;oe<ue;oe++){var Te=hl("li",null,k),ge=hl("button",{class:j.page,type:"button"},Te),$=a.getIn(oe).map(function(M){return M.slide.id}),V=!h()&&X>1?J.pageX:J.slideX;o(ge,"click",rt(I,oe)),n.paginationKeyboard&&o(ge,"keydown",rt(P,oe)),De(Te,Wi,"presentation"),De(ge,Wi,"tab"),De(ge,Bd,$.join(" ")),De(ge,vr,v1(V,oe+1)),De(ge,fl,-1),_.push({li:Te,button:ge,page:oe})}}function I(F){m(">"+F,!0)}function P(F,j){var J=_.length,X=Mx(j),ue=N(),oe=-1;X===x(gg,!1,ue)?oe=++F%J:X===x(mg,!1,ue)?oe=(--F+J)%J:X==="Home"?oe=0:X==="End"&&(oe=J-1);var Te=_[oe];Te&&(LN(Te.button),m(">"+oe),Ni(j,!0))}function N(){return n.paginationDirection||n.direction}function O(F){return _[c.toPage(F)]}function Z(){var F=O(p(!0)),j=O(p());if(F){var J=F.button;Bi(J,oa),fi(J,kk),De(J,fl,-1)}if(j){var X=j.button;hi(X,oa),De(X,kk,!0),De(X,fl,"")}s(XN,{list:k,items:_},F,j)}return{items:_,mount:v,destroy:S,getAt:O,update:Z}}var ZH=[" ","Enter"];function eG(e,t,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){e.splides.forEach(function(y){y.isParent||(c(e,y.splide),c(y.splide,e))}),r&&h()}function a(){s.forEach(function(y){y.destroy()}),is(s)}function l(){a(),o()}function c(y,_){var k=St(y);k.on(ss,function(C,v,S){_.go(_.is(iu)?S:C)}),s.push(k)}function h(){var y=St(e),_=y.on;_(kx,m),_(ZN,x),_([yo,$n],p),s.push(y),y.emit(bx,e.splides)}function p(){De(t.Elements.list,Ox,n.direction===yg?"vertical":"")}function m(y){e.go(y.index)}function x(y,_){_x(ZH,Mx(_))&&(m(y),Ni(_))}return{setup:rt(t.Media.set,{slideFocus:Md(i)?r:i},!0),mount:o,destroy:a,remount:l}}function tG(e,t,n){var r=St(e),i=r.bind,s=0;function o(){n.wheel&&i(t.Elements.track,"wheel",a,Pa)}function a(c){if(c.cancelable){var h=c.deltaY,p=h<0,m=g1(c),x=n.wheelMinThreshold||0,y=n.wheelSleep||0;Yn(h)>x&&m-s>y&&(e.go(p?"<":">"),s=m),l(p)&&Ni(c)}}function l(c){return!n.releaseWheel||e.state.is(nu)||t.Controller.getAdjacent(c)!==-1}return{mount:o}}var nG=90;function rG(e,t,n){var r=St(e),i=r.on,s=t.Elements.track,o=n.live&&!n.isNavigation,a=hl("span",xH),l=fg(nG,rt(h,!1));function c(){o&&(m(!t.Autoplay.isPaused()),De(s,Dk,!0),a.textContent="\u2026",i(Dx,rt(m,!0)),i(Ix,rt(m,!1)),i([ru,wa],rt(h,!0)))}function h(x){De(s,bk,x),x?($d(s,a),l.start()):(sa(a),l.cancel())}function p(){fi(s,[Tk,Dk,bk]),sa(a)}function m(x){o&&De(s,Tk,x?"off":"polite")}return{mount:c,disable:m,destroy:p}}var iG=Object.freeze({__proto__:null,Media:hH,Direction:fH,Elements:bH,Slides:IH,Layout:AH,Clones:OH,Move:RH,Controller:PH,Arrows:$H,Autoplay:UH,Cover:BH,Scroll:HH,Drag:GH,Keyboard:KH,LazyLoad:XH,Pagination:JH,Sync:eG,Wheel:tG,Live:rG}),sG={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},oG={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:EH,i18n:sG,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function aG(e,t,n){var r=t.Slides;function i(){St(e).on([yo,$t],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,l){r.style("transition","opacity "+n.speed+"ms "+n.easing),ON(l)}return{mount:i,start:o,cancel:m1}}function lG(e,t,n){var r=t.Move,i=t.Controller,s=t.Scroll,o=t.Elements.list,a=rt(Pr,o,"transition"),l;function c(){St(e).bind(o,"transitionend",function(x){x.target===o&&l&&(p(),l())})}function h(x,y){var _=r.toPosition(x,!0),k=r.getPosition(),C=m(x);Yn(_-k)>=1&&C>=1?n.useScroll?s.scroll(_,C,!1,y):(a("transform "+C+"ms "+n.easing),r.translate(_,!0),l=y):(r.jump(x),y())}function p(){a(""),s.cancel()}function m(x){var y=n.rewindSpeed;if(e.is($l)&&y){var _=i.getIndex(!0),k=i.getEnd();if(_===0&&x>=k||_>=k&&x===0)return y}return n.speed}return{mount:c,start:h,cancel:p}}var uG=function(){function e(n,r){this.event=St(),this.Components={},this.state=cH(Qa),this.splides=[],this._o={},this._E={};var i=so(n)?FN(document,n):n;sc(i,i+" is invalid."),this.root=i,r=As({label:Lr(i,vr)||"",labelledby:Lr(i,Nx)||""},oG,e.defaults,r||{});try{As(r,JSON.parse(Lr(i,Sx)))}catch{sc(!1,"Invalid JSON")}this._o=Object.create(As({},r))}var t=e.prototype;return t.mount=function(r,i){var s=this,o=this.state,a=this.Components;sc(o.is([Qa,Tp]),"Already mounted!"),o.set(Qa),this._C=a,this._T=i||this._T||(this.is(zd)?aG:lG),this._E=r||this._E;var l=Xc({},iG,this._E,{Transition:this._T});return Vo(l,function(c,h){var p=c(s,a,s._o);a[h]=p,p.setup&&p.setup()}),Vo(a,function(c){c.mount&&c.mount()}),this.emit(yo),hi(this.root,CH),o.set(Ml),this.emit(w1),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Ml)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,i){return this.event.on(r,i),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(go(arguments,1))),this},t.add=function(r,i){return this._C.Slides.add(r,i),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit($t),this},t.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(Qa)?St(this).on(w1,this.destroy.bind(this,r)):(Vo(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(Tx),i.destroy(),r&&is(this.splides),s.set(Tp)),this},sH(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Lx=uG;Lx.defaults={};Lx.STATES=aH;var Ok=[[yo,"onMounted"],[w1,"onReady"],[ss,"onMove"],[ru,"onMoved"],[kx,"onClick"],[zN,"onActive"],[VN,"onInactive"],[jN,"onVisible"],[YN,"onHidden"],[$t,"onRefresh"],[$n,"onUpdated"],[Ll,"onResize"],[dg,"onResized"],[WN,"onDrag"],[HN,"onDragging"],[GN,"onDragged"],[hg,"onScroll"],[wa,"onScrolled"],[Tx,"onDestroy"],[qN,"onArrowsMounted"],[KN,"onArrowsUpdated"],[QN,"onPaginationMounted"],[XN,"onPaginationUpdated"],[bx,"onNavigationMounted"],[Dx,"onAutoplayPlay"],[JN,"onAutoplayPlaying"],[Ix,"onAutoplayPause"],[Ax,"onLazyLoadLoaded"]];function $x(...e){return e.filter(Boolean).join(" ")}function Ap(e){return e!==null&&typeof e=="object"}function C1(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((n,r)=>!C1(n,t[r]));if(Ap(e)&&Ap(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!C1(e[i],t[i]))}return e===t}function cG(e,t){return e.length===t.length&&!e.some((n,r)=>n!==t[r])}function dG(e,t){if(e){const n=Object.keys(e);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function S1(e,t){const n=e;return dG(t,(r,i)=>{Array.isArray(r)?n[i]=r.slice():Ap(r)?n[i]=S1(Ap(n[i])?n[i]:{},r):n[i]=r}),n}var hG=({children:e,className:t,...n})=>w("div",{className:$x("splide__track",t),...n,children:w("ul",{className:"splide__list",children:e})}),Fx=class extends Zt.Component{constructor(){super(...arguments),this.splideRef=Zt.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new Lx(r,e),this.bind(this.splide),this.splide.mount(t,n),this.options=S1({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!C1(this.options,e)&&(this.splide.options=e,this.options=S1({},e));const t=this.getSlides();cG(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){Ok.forEach(([t,n])=>{const r=this.props[n];typeof r=="function"&&e.on(t,(...i)=>{r(e,...i)})})}omit(e,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(e,n)&&delete e[n]}),e}render(){const{className:e,tag:t="div",hasTrack:n=!0,children:r,...i}=this.props;return Zt.createElement(t,{className:$x("splide",e),ref:this.splideRef,...this.omit(i,["options",...Ok.map(s=>s[1])])},n?Zt.createElement(hG,null,r):r)}},Ux=({children:e,className:t,...n})=>Zt.createElement("li",{className:$x("splide__slide",t),...n},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 *///! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var pO;function te(){return pO.apply(null,arguments)}function fG(e){pO=e}function jr(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function jo(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Bx(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Ye(e,t))return!1;return!0}function Bn(e){return e===void 0}function os(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Vd(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function mO(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Ns(e,t){for(var n in t)Ye(t,n)&&(e[n]=t[n]);return Ye(t,"toString")&&(e.toString=t.toString),Ye(t,"valueOf")&&(e.valueOf=t.valueOf),e}function yi(e,t,n,r){return UO(e,t,n,r,!0).utc()}function pG(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Ie(e){return e._pf==null&&(e._pf=pG()),e._pf}var E1;Array.prototype.some?E1=Array.prototype.some:E1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function zx(e){if(e._isValid==null){var t=Ie(e),n=E1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function xg(e){var t=yi(NaN);return e!=null?Ns(Ie(t),e):Ie(t).userInvalidated=!0,t}var Rk=te.momentProperties=[],gy=!1;function Vx(e,t){var n,r,i,s=Rk.length;if(Bn(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Bn(t._i)||(e._i=t._i),Bn(t._f)||(e._f=t._f),Bn(t._l)||(e._l=t._l),Bn(t._strict)||(e._strict=t._strict),Bn(t._tzm)||(e._tzm=t._tzm),Bn(t._isUTC)||(e._isUTC=t._isUTC),Bn(t._offset)||(e._offset=t._offset),Bn(t._pf)||(e._pf=Ie(t)),Bn(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=Rk[n],i=t[r],Bn(i)||(e[r]=i);return e}function jd(e){Vx(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),gy===!1&&(gy=!0,te.updateOffset(this),gy=!1)}function Yr(e){return e instanceof jd||e!=null&&e._isAMomentObject!=null}function gO(e){te.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+e)}function Tr(e,t){var n=!0;return Ns(function(){if(te.deprecationHandler!=null&&te.deprecationHandler(null,e),n){var r=[],i,s,o,a=arguments.length;for(s=0;s<a;s++){if(i="",typeof arguments[s]=="object"){i+=`
[`+s+"] ";for(o in arguments[0])Ye(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];r.push(i)}gO(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Pk={};function yO(e,t){te.deprecationHandler!=null&&te.deprecationHandler(e,t),Pk[e]||(gO(t),Pk[e]=!0)}te.suppressDeprecationWarnings=!1;te.deprecationHandler=null;function vi(e){return typeof Function!="undefined"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function mG(e){var t,n;for(n in e)Ye(e,n)&&(t=e[n],vi(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function k1(e,t){var n=Ns({},e),r;for(r in t)Ye(t,r)&&(jo(e[r])&&jo(t[r])?(n[r]={},Ns(n[r],e[r]),Ns(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Ye(e,r)&&!Ye(t,r)&&jo(e[r])&&(n[r]=Ns({},n[r]));return n}function jx(e){e!=null&&this.set(e)}var T1;Object.keys?T1=Object.keys:T1=function(e){var t,n=[];for(t in e)Ye(e,t)&&n.push(t);return n};var gG={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function yG(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return vi(r)?r.call(t,n):r}function pi(e,t,n){var r=""+Math.abs(e),i=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var Yx=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,jh=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,yy={},pl={};function he(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(pl[e]=i),t&&(pl[t[0]]=function(){return pi(i.apply(this,arguments),t[1],t[2])}),n&&(pl[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function vG(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function wG(e){var t=e.match(Yx),n,r;for(n=0,r=t.length;n<r;n++)pl[t[n]]?t[n]=pl[t[n]]:t[n]=vG(t[n]);return function(i){var s="",o;for(o=0;o<r;o++)s+=vi(t[o])?t[o].call(i,e):t[o];return s}}function yf(e,t){return e.isValid()?(t=vO(t,e.localeData()),yy[t]=yy[t]||wG(t),yy[t](e)):e.localeData().invalidDate()}function vO(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(jh.lastIndex=0;n>=0&&jh.test(e);)e=e.replace(jh,r),jh.lastIndex=0,n-=1;return e}var _G={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function xG(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Yx).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var CG="Invalid date";function SG(){return this._invalidDate}var EG="%d",kG=/\d{1,2}/;function TG(e){return this._ordinal.replace("%d",e)}var bG={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function DG(e,t,n,r){var i=this._relativeTime[n];return vi(i)?i(e,t,n,r):i.replace(/%d/i,e)}function IG(e,t){var n=this._relativeTime[e>0?"future":"past"];return vi(n)?n(t):n.replace(/%s/i,t)}var ac={};function Dn(e,t){var n=e.toLowerCase();ac[n]=ac[n+"s"]=ac[t]=e}function br(e){return typeof e=="string"?ac[e]||ac[e.toLowerCase()]:void 0}function Wx(e){var t={},n,r;for(r in e)Ye(e,r)&&(n=br(r),n&&(t[n]=e[r]));return t}var wO={};function In(e,t){wO[e]=t}function AG(e){var t=[],n;for(n in e)Ye(e,n)&&t.push({unit:n,priority:wO[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function Cg(e){return e%4===0&&e%100!==0||e%400===0}function mr(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Re(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=mr(t)),n}function su(e,t){return function(n){return n!=null?(_O(this,e,n),te.updateOffset(this,t),this):Np(this,e)}}function Np(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function _O(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&Cg(e.year())&&e.month()===1&&e.date()===29?(n=Re(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Dg(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function NG(e){return e=br(e),vi(this[e])?this[e]():this}function OG(e,t){if(typeof e=="object"){e=Wx(e);var n=AG(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=br(e),vi(this[e]))return this[e](t);return this}var xO=/\d/,dr=/\d\d/,CO=/\d{3}/,Hx=/\d{4}/,Sg=/[+-]?\d{6}/,ct=/\d\d?/,SO=/\d\d\d\d?/,EO=/\d\d\d\d\d\d?/,Eg=/\d{1,3}/,Gx=/\d{1,4}/,kg=/[+-]?\d{1,6}/,ou=/\d+/,Tg=/[+-]?\d+/,RG=/Z|[+-]\d\d:?\d\d/gi,bg=/Z|[+-]\d\d(?::?\d\d)?/gi,PG=/[+-]?\d+(\.\d{1,3})?/,Yd=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Op;Op={};function se(e,t,n){Op[e]=vi(t)?t:function(r,i){return r&&n?n:t}}function MG(e,t){return Ye(Op,e)?Op[e](t._strict,t._locale):new RegExp(LG(e))}function LG(e){return Zn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,s){return n||r||i||s}))}function Zn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var b1={};function et(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),os(t)&&(r=function(s,o){o[t]=Re(s)}),i=e.length,n=0;n<i;n++)b1[e[n]]=r}function Wd(e,t){et(e,function(n,r,i,s){i._w=i._w||{},t(n,i._w,i,s)})}function $G(e,t,n){t!=null&&Ye(b1,e)&&b1[e](t,n._a,n,e)}var En=0,zi=1,Jr=2,Wt=3,$r=4,Vi=5,Lo=6,FG=7,UG=8;function BG(e,t){return(e%t+t)%t}var Nt;Array.prototype.indexOf?Nt=Array.prototype.indexOf:Nt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Dg(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=BG(t,12);return e+=(t-n)/12,n===1?Cg(e)?29:28:31-n%7%2}he("M",["MM",2],"Mo",function(){return this.month()+1});he("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});he("MMMM",0,0,function(e){return this.localeData().months(this,e)});Dn("month","M");In("month",8);se("M",ct);se("MM",ct,dr);se("MMM",function(e,t){return t.monthsShortRegex(e)});se("MMMM",function(e,t){return t.monthsRegex(e)});et(["M","MM"],function(e,t){t[zi]=Re(e)-1});et(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[zi]=i:Ie(n).invalidMonth=e});var zG="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),kO="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),TO=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,VG=Yd,jG=Yd;function YG(e,t){return e?jr(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||TO).test(t)?"format":"standalone"][e.month()]:jr(this._months)?this._months:this._months.standalone}function WG(e,t){return e?jr(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[TO.test(t)?"format":"standalone"][e.month()]:jr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function HG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=yi([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null):t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null)):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null))}function GG(e,t,n){var r,i,s;if(this._monthsParseExact)return HG.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=yi([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function bO(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=Re(t);else if(t=e.localeData().monthsParse(t),!os(t))return e}return n=Math.min(e.date(),Dg(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function DO(e){return e!=null?(bO(this,e),te.updateOffset(this,!0),this):Np(this,"Month")}function qG(){return Dg(this.year(),this.month())}function KG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||IO.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Ye(this,"_monthsShortRegex")||(this._monthsShortRegex=VG),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function QG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||IO.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Ye(this,"_monthsRegex")||(this._monthsRegex=jG),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function IO(){function e(o,a){return a.length-o.length}var t=[],n=[],r=[],i,s;for(i=0;i<12;i++)s=yi([2e3,i]),t.push(this.monthsShort(s,"")),n.push(this.months(s,"")),r.push(this.months(s,"")),r.push(this.monthsShort(s,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=Zn(t[i]),n[i]=Zn(n[i]);for(i=0;i<24;i++)r[i]=Zn(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}he("Y",0,0,function(){var e=this.year();return e<=9999?pi(e,4):"+"+e});he(0,["YY",2],0,function(){return this.year()%100});he(0,["YYYY",4],0,"year");he(0,["YYYYY",5],0,"year");he(0,["YYYYYY",6,!0],0,"year");Dn("year","y");In("year",1);se("Y",Tg);se("YY",ct,dr);se("YYYY",Gx,Hx);se("YYYYY",kg,Sg);se("YYYYYY",kg,Sg);et(["YYYYY","YYYYYY"],En);et("YYYY",function(e,t){t[En]=e.length===2?te.parseTwoDigitYear(e):Re(e)});et("YY",function(e,t){t[En]=te.parseTwoDigitYear(e)});et("Y",function(e,t){t[En]=parseInt(e,10)});function lc(e){return Cg(e)?366:365}te.parseTwoDigitYear=function(e){return Re(e)+(Re(e)>68?1900:2e3)};var AO=su("FullYear",!0);function XG(){return Cg(this.year())}function JG(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function td(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Rp(e,t,n){var r=7+t-n,i=(7+td(e,0,r).getUTCDay()-t)%7;return-i+r-1}function NO(e,t,n,r,i){var s=(7+n-r)%7,o=Rp(e,r,i),a=1+7*(t-1)+s+o,l,c;return a<=0?(l=e-1,c=lc(l)+a):a>lc(e)?(l=e+1,c=a-lc(e)):(l=e,c=a),{year:l,dayOfYear:c}}function nd(e,t,n){var r=Rp(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,s,o;return i<1?(o=e.year()-1,s=i+Hi(o,t,n)):i>Hi(e.year(),t,n)?(s=i-Hi(e.year(),t,n),o=e.year()+1):(o=e.year(),s=i),{week:s,year:o}}function Hi(e,t,n){var r=Rp(e,t,n),i=Rp(e+1,t,n);return(lc(e)-r+i)/7}he("w",["ww",2],"wo","week");he("W",["WW",2],"Wo","isoWeek");Dn("week","w");Dn("isoWeek","W");In("week",5);In("isoWeek",5);se("w",ct);se("ww",ct,dr);se("W",ct);se("WW",ct,dr);Wd(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=Re(e)});function ZG(e){return nd(e,this._week.dow,this._week.doy).week}var eq={dow:0,doy:6};function tq(){return this._week.dow}function nq(){return this._week.doy}function rq(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function iq(e){var t=nd(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}he("d",0,"do","day");he("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});he("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});he("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});he("e",0,0,"weekday");he("E",0,0,"isoWeekday");Dn("day","d");Dn("weekday","e");Dn("isoWeekday","E");In("day",11);In("weekday",11);In("isoWeekday",11);se("d",ct);se("e",ct);se("E",ct);se("dd",function(e,t){return t.weekdaysMinRegex(e)});se("ddd",function(e,t){return t.weekdaysShortRegex(e)});se("dddd",function(e,t){return t.weekdaysRegex(e)});Wd(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:Ie(n).invalidWeekday=e});Wd(["d","e","E"],function(e,t,n,r){t[r]=Re(e)});function sq(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function oq(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function qx(e,t){return e.slice(t,7).concat(e.slice(0,t))}var aq="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),OO="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),lq="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),uq=Yd,cq=Yd,dq=Yd;function hq(e,t){var n=jr(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?qx(n,this._week.dow):e?n[e.day()]:n}function fq(e){return e===!0?qx(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function pq(e){return e===!0?qx(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function mq(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=yi([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1?i:null):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null):t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1||(i=Nt.call(this._shortWeekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):(i=Nt.call(this._minWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null))}function gq(e,t,n){var r,i,s;if(this._weekdaysParseExact)return mq.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=yi([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function yq(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=sq(e,this.localeData()),this.add(e-t,"d")):t}function vq(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function wq(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=oq(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function _q(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||Kx.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Ye(this,"_weekdaysRegex")||(this._weekdaysRegex=uq),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function xq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||Kx.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Ye(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=cq),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Cq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||Kx.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Ye(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=dq),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Kx(){function e(h,p){return p.length-h.length}var t=[],n=[],r=[],i=[],s,o,a,l,c;for(s=0;s<7;s++)o=yi([2e3,1]).day(s),a=Zn(this.weekdaysMin(o,"")),l=Zn(this.weekdaysShort(o,"")),c=Zn(this.weekdays(o,"")),t.push(a),n.push(l),r.push(c),i.push(a),i.push(l),i.push(c);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Qx(){return this.hours()%12||12}function Sq(){return this.hours()||24}he("H",["HH",2],0,"hour");he("h",["hh",2],0,Qx);he("k",["kk",2],0,Sq);he("hmm",0,0,function(){return""+Qx.apply(this)+pi(this.minutes(),2)});he("hmmss",0,0,function(){return""+Qx.apply(this)+pi(this.minutes(),2)+pi(this.seconds(),2)});he("Hmm",0,0,function(){return""+this.hours()+pi(this.minutes(),2)});he("Hmmss",0,0,function(){return""+this.hours()+pi(this.minutes(),2)+pi(this.seconds(),2)});function RO(e,t){he(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}RO("a",!0);RO("A",!1);Dn("hour","h");In("hour",13);function PO(e,t){return t._meridiemParse}se("a",PO);se("A",PO);se("H",ct);se("h",ct);se("k",ct);se("HH",ct,dr);se("hh",ct,dr);se("kk",ct,dr);se("hmm",SO);se("hmmss",EO);se("Hmm",SO);se("Hmmss",EO);et(["H","HH"],Wt);et(["k","kk"],function(e,t,n){var r=Re(e);t[Wt]=r===24?0:r});et(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});et(["h","hh"],function(e,t,n){t[Wt]=Re(e),Ie(n).bigHour=!0});et("hmm",function(e,t,n){var r=e.length-2;t[Wt]=Re(e.substr(0,r)),t[$r]=Re(e.substr(r)),Ie(n).bigHour=!0});et("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Wt]=Re(e.substr(0,r)),t[$r]=Re(e.substr(r,2)),t[Vi]=Re(e.substr(i)),Ie(n).bigHour=!0});et("Hmm",function(e,t,n){var r=e.length-2;t[Wt]=Re(e.substr(0,r)),t[$r]=Re(e.substr(r))});et("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Wt]=Re(e.substr(0,r)),t[$r]=Re(e.substr(r,2)),t[Vi]=Re(e.substr(i))});function Eq(e){return(e+"").toLowerCase().charAt(0)==="p"}var kq=/[ap]\.?m?\.?/i,Tq=su("Hours",!0);function bq(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var MO={calendar:gG,longDateFormat:_G,invalidDate:CG,ordinal:EG,dayOfMonthOrdinalParse:kG,relativeTime:bG,months:zG,monthsShort:kO,week:eq,weekdays:aq,weekdaysMin:lq,weekdaysShort:OO,meridiemParse:kq},ft={},bu={},rd;function Dq(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Mk(e){return e&&e.toLowerCase().replace("_","-")}function Iq(e){for(var t=0,n,r,i,s;t<e.length;){for(s=Mk(e[t]).split("-"),n=s.length,r=Mk(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=Ig(s.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&Dq(s,r)>=n-1)break;n--}t++}return rd}function Aq(e){return e.match("^[^/\\\\]*$")!=null}function Ig(e){var t=null,n;if(ft[e]===void 0&&typeof _f!="undefined"&&_f&&_f.exports&&Aq(e))try{t=rd._abbr,n=require,n("./locale/"+e),Qs(t)}catch{ft[e]=null}return ft[e]}function Qs(e,t){var n;return e&&(Bn(t)?n=ls(e):n=Xx(e,t),n?rd=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),rd._abbr}function Xx(e,t){if(t!==null){var n,r=MO;if(t.abbr=e,ft[e]!=null)yO("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=ft[e]._config;else if(t.parentLocale!=null)if(ft[t.parentLocale]!=null)r=ft[t.parentLocale]._config;else if(n=Ig(t.parentLocale),n!=null)r=n._config;else return bu[t.parentLocale]||(bu[t.parentLocale]=[]),bu[t.parentLocale].push({name:e,config:t}),null;return ft[e]=new jx(k1(r,t)),bu[e]&&bu[e].forEach(function(i){Xx(i.name,i.config)}),Qs(e),ft[e]}else return delete ft[e],null}function Nq(e,t){if(t!=null){var n,r,i=MO;ft[e]!=null&&ft[e].parentLocale!=null?ft[e].set(k1(ft[e]._config,t)):(r=Ig(e),r!=null&&(i=r._config),t=k1(i,t),r==null&&(t.abbr=e),n=new jx(t),n.parentLocale=ft[e],ft[e]=n),Qs(e)}else ft[e]!=null&&(ft[e].parentLocale!=null?(ft[e]=ft[e].parentLocale,e===Qs()&&Qs(e)):ft[e]!=null&&delete ft[e]);return ft[e]}function ls(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return rd;if(!jr(e)){if(t=Ig(e),t)return t;e=[e]}return Iq(e)}function Oq(){return T1(ft)}function Jx(e){var t,n=e._a;return n&&Ie(e).overflow===-2&&(t=n[zi]<0||n[zi]>11?zi:n[Jr]<1||n[Jr]>Dg(n[En],n[zi])?Jr:n[Wt]<0||n[Wt]>24||n[Wt]===24&&(n[$r]!==0||n[Vi]!==0||n[Lo]!==0)?Wt:n[$r]<0||n[$r]>59?$r:n[Vi]<0||n[Vi]>59?Vi:n[Lo]<0||n[Lo]>999?Lo:-1,Ie(e)._overflowDayOfYear&&(t<En||t>Jr)&&(t=Jr),Ie(e)._overflowWeeks&&t===-1&&(t=FG),Ie(e)._overflowWeekday&&t===-1&&(t=UG),Ie(e).overflow=t),e}var Rq=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Pq=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Mq=/Z|[+-]\d\d(?::?\d\d)?/,Yh=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],vy=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Lq=/^\/?Date\((-?\d+)/i,$q=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Fq={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function LO(e){var t,n,r=e._i,i=Rq.exec(r)||Pq.exec(r),s,o,a,l,c=Yh.length,h=vy.length;if(i){for(Ie(e).iso=!0,t=0,n=c;t<n;t++)if(Yh[t][1].exec(i[1])){o=Yh[t][0],s=Yh[t][2]!==!1;break}if(o==null){e._isValid=!1;return}if(i[3]){for(t=0,n=h;t<n;t++)if(vy[t][1].exec(i[3])){a=(i[2]||" ")+vy[t][0];break}if(a==null){e._isValid=!1;return}}if(!s&&a!=null){e._isValid=!1;return}if(i[4])if(Mq.exec(i[4]))l="Z";else{e._isValid=!1;return}e._f=o+(a||"")+(l||""),eC(e)}else e._isValid=!1}function Uq(e,t,n,r,i,s){var o=[Bq(e),kO.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function Bq(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function zq(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Vq(e,t,n){if(e){var r=OO.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return Ie(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function jq(e,t,n){if(e)return Fq[e];if(t)return 0;var r=parseInt(n,10),i=r%100,s=(r-i)/100;return s*60+i}function $O(e){var t=$q.exec(zq(e._i)),n;if(t){if(n=Uq(t[4],t[3],t[2],t[5],t[6],t[7]),!Vq(t[1],n,e))return;e._a=n,e._tzm=jq(t[8],t[9],t[10]),e._d=td.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),Ie(e).rfc2822=!0}else e._isValid=!1}function Yq(e){var t=Lq.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(LO(e),e._isValid===!1)delete e._isValid;else return;if($O(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:te.createFromInputFallback(e)}te.createFromInputFallback=Tr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ma(e,t,n){return e!=null?e:t!=null?t:n}function Wq(e){var t=new Date(te.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Zx(e){var t,n,r=[],i,s,o;if(!e._d){for(i=Wq(e),e._w&&e._a[Jr]==null&&e._a[zi]==null&&Hq(e),e._dayOfYear!=null&&(o=Ma(e._a[En],i[En]),(e._dayOfYear>lc(o)||e._dayOfYear===0)&&(Ie(e)._overflowDayOfYear=!0),n=td(o,0,e._dayOfYear),e._a[zi]=n.getUTCMonth(),e._a[Jr]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[Wt]===24&&e._a[$r]===0&&e._a[Vi]===0&&e._a[Lo]===0&&(e._nextDay=!0,e._a[Wt]=0),e._d=(e._useUTC?td:JG).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Wt]=24),e._w&&typeof e._w.d!="undefined"&&e._w.d!==s&&(Ie(e).weekdayMismatch=!0)}}function Hq(e){var t,n,r,i,s,o,a,l,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,o=4,n=Ma(t.GG,e._a[En],nd(ut(),1,4).year),r=Ma(t.W,1),i=Ma(t.E,1),(i<1||i>7)&&(l=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,c=nd(ut(),s,o),n=Ma(t.gg,e._a[En],c.year),r=Ma(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(l=!0)):t.e!=null?(i=t.e+s,(t.e<0||t.e>6)&&(l=!0)):i=s),r<1||r>Hi(n,s,o)?Ie(e)._overflowWeeks=!0:l!=null?Ie(e)._overflowWeekday=!0:(a=NO(n,r,i,s,o),e._a[En]=a.year,e._dayOfYear=a.dayOfYear)}te.ISO_8601=function(){};te.RFC_2822=function(){};function eC(e){if(e._f===te.ISO_8601){LO(e);return}if(e._f===te.RFC_2822){$O(e);return}e._a=[],Ie(e).empty=!0;var t=""+e._i,n,r,i,s,o,a=t.length,l=0,c,h;for(i=vO(e._f,e._locale).match(Yx)||[],h=i.length,n=0;n<h;n++)s=i[n],r=(t.match(MG(s,e))||[])[0],r&&(o=t.substr(0,t.indexOf(r)),o.length>0&&Ie(e).unusedInput.push(o),t=t.slice(t.indexOf(r)+r.length),l+=r.length),pl[s]?(r?Ie(e).empty=!1:Ie(e).unusedTokens.push(s),$G(s,r,e)):e._strict&&!r&&Ie(e).unusedTokens.push(s);Ie(e).charsLeftOver=a-l,t.length>0&&Ie(e).unusedInput.push(t),e._a[Wt]<=12&&Ie(e).bigHour===!0&&e._a[Wt]>0&&(Ie(e).bigHour=void 0),Ie(e).parsedDateParts=e._a.slice(0),Ie(e).meridiem=e._meridiem,e._a[Wt]=Gq(e._locale,e._a[Wt],e._meridiem),c=Ie(e).era,c!==null&&(e._a[En]=e._locale.erasConvertYear(c,e._a[En])),Zx(e),Jx(e)}function Gq(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function qq(e){var t,n,r,i,s,o,a=!1,l=e._f.length;if(l===0){Ie(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<l;i++)s=0,o=!1,t=Vx({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],eC(t),zx(t)&&(o=!0),s+=Ie(t).charsLeftOver,s+=Ie(t).unusedTokens.length*10,Ie(t).score=s,a?s<r&&(r=s,n=t):(r==null||s<r||o)&&(r=s,n=t,o&&(a=!0));Ns(e,n||t)}function Kq(e){if(!e._d){var t=Wx(e._i),n=t.day===void 0?t.date:t.day;e._a=mO([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),Zx(e)}}function Qq(e){var t=new jd(Jx(FO(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function FO(e){var t=e._i,n=e._f;return e._locale=e._locale||ls(e._l),t===null||n===void 0&&t===""?xg({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Yr(t)?new jd(Jx(t)):(Vd(t)?e._d=t:jr(n)?qq(e):n?eC(e):Xq(e),zx(e)||(e._d=null),e))}function Xq(e){var t=e._i;Bn(t)?e._d=new Date(te.now()):Vd(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Yq(e):jr(t)?(e._a=mO(t.slice(0),function(n){return parseInt(n,10)}),Zx(e)):jo(t)?Kq(e):os(t)?e._d=new Date(t):te.createFromInputFallback(e)}function UO(e,t,n,r,i){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(jo(e)&&Bx(e)||jr(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=e,s._f=t,s._strict=r,Qq(s)}function ut(e,t,n,r){return UO(e,t,n,r,!1)}var Jq=Tr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ut.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:xg()}),Zq=Tr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ut.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:xg()});function BO(e,t){var n,r;if(t.length===1&&jr(t[0])&&(t=t[0]),!t.length)return ut();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function eK(){var e=[].slice.call(arguments,0);return BO("isBefore",e)}function tK(){var e=[].slice.call(arguments,0);return BO("isAfter",e)}var nK=function(){return Date.now?Date.now():+new Date},Du=["year","quarter","month","week","day","hour","minute","second","millisecond"];function rK(e){var t,n=!1,r,i=Du.length;for(t in e)if(Ye(e,t)&&!(Nt.call(Du,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[Du[r]]){if(n)return!1;parseFloat(e[Du[r]])!==Re(e[Du[r]])&&(n=!0)}return!0}function iK(){return this._isValid}function sK(){return Hr(NaN)}function Ag(e){var t=Wx(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,h=t.millisecond||0;this._isValid=rK(t),this._milliseconds=+h+c*1e3+l*6e4+a*1e3*60*60,this._days=+o+s*7,this._months=+i+r*3+n*12,this._data={},this._locale=ls(),this._bubble()}function vf(e){return e instanceof Ag}function D1(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function oK(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&Re(e[o])!==Re(t[o]))&&s++;return s+i}function zO(e,t){he(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+pi(~~(n/60),2)+t+pi(~~n%60,2)})}zO("Z",":");zO("ZZ","");se("Z",bg);se("ZZ",bg);et(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=tC(bg,e)});var aK=/([\+\-]|\d\d)/gi;function tC(e,t){var n=(t||"").match(e),r,i,s;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(aK)||["-",0,0],s=+(i[1]*60)+Re(i[2]),s===0?0:i[0]==="+"?s:-s)}function nC(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Yr(e)||Vd(e)?e.valueOf():ut(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),te.updateOffset(n,!1),n):ut(e).local()}function I1(e){return-Math.round(e._d.getTimezoneOffset())}te.updateOffset=function(){};function lK(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=tC(bg,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=I1(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?YO(this,Hr(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,te.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:I1(this)}function uK(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function cK(e){return this.utcOffset(0,e)}function dK(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(I1(this),"m")),this}function hK(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=tC(RG,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function fK(e){return this.isValid()?(e=e?ut(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function pK(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function mK(){if(!Bn(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Vx(e,this),e=FO(e),e._a?(t=e._isUTC?yi(e._a):ut(e._a),this._isDSTShifted=this.isValid()&&oK(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function gK(){return this.isValid()?!this._isUTC:!1}function yK(){return this.isValid()?this._isUTC:!1}function VO(){return this.isValid()?this._isUTC&&this._offset===0:!1}var vK=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,wK=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Hr(e,t){var n=e,r=null,i,s,o;return vf(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:os(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=vK.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:Re(r[Jr])*i,h:Re(r[Wt])*i,m:Re(r[$r])*i,s:Re(r[Vi])*i,ms:Re(D1(r[Lo]*1e3))*i}):(r=wK.exec(e))?(i=r[1]==="-"?-1:1,n={y:Eo(r[2],i),M:Eo(r[3],i),w:Eo(r[4],i),d:Eo(r[5],i),h:Eo(r[6],i),m:Eo(r[7],i),s:Eo(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=_K(ut(n.from),ut(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),s=new Ag(n),vf(e)&&Ye(e,"_locale")&&(s._locale=e._locale),vf(e)&&Ye(e,"_isValid")&&(s._isValid=e._isValid),s}Hr.fn=Ag.prototype;Hr.invalid=sK;function Eo(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Lk(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function _K(e,t){var n;return e.isValid()&&t.isValid()?(t=nC(t,e),e.isBefore(t)?n=Lk(e,t):(n=Lk(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function jO(e,t){return function(n,r){var i,s;return r!==null&&!isNaN(+r)&&(yO(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),i=Hr(n,r),YO(this,i,e),this}}function YO(e,t,n,r){var i=t._milliseconds,s=D1(t._days),o=D1(t._months);!e.isValid()||(r=r==null?!0:r,o&&bO(e,Np(e,"Month")+o*n),s&&_O(e,"Date",Np(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&te.updateOffset(e,s||o))}var xK=jO(1,"add"),CK=jO(-1,"subtract");function WO(e){return typeof e=="string"||e instanceof String}function SK(e){return Yr(e)||Vd(e)||WO(e)||os(e)||kK(e)||EK(e)||e===null||e===void 0}function EK(e){var t=jo(e)&&!Bx(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,s,o=r.length;for(i=0;i<o;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function kK(e){var t=jr(e),n=!1;return t&&(n=e.filter(function(r){return!os(r)&&WO(e)}).length===0),t&&n}function TK(e){var t=jo(e)&&!Bx(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,s;for(i=0;i<r.length;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function bK(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function DK(e,t){arguments.length===1&&(arguments[0]?SK(arguments[0])?(e=arguments[0],t=void 0):TK(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||ut(),r=nC(n,this).startOf("day"),i=te.calendarFormat(this,r)||"sameElse",s=t&&(vi(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,ut(n)))}function IK(){return new jd(this)}function AK(e,t){var n=Yr(e)?e:ut(e);return this.isValid()&&n.isValid()?(t=br(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function NK(e,t){var n=Yr(e)?e:ut(e);return this.isValid()&&n.isValid()?(t=br(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function OK(e,t,n,r){var i=Yr(e)?e:ut(e),s=Yr(t)?t:ut(t);return this.isValid()&&i.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function RK(e,t){var n=Yr(e)?e:ut(e),r;return this.isValid()&&n.isValid()?(t=br(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function PK(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function MK(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function LK(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(r=nC(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=br(t),t){case"year":s=wf(this,r)/12;break;case"month":s=wf(this,r);break;case"quarter":s=wf(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:mr(s)}function wf(e,t){if(e.date()<t.date())return-wf(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,s;return t-r<0?(i=e.clone().add(n-1,"months"),s=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),s=(t-r)/(i-r)),-(n+s)||0}te.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";te.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function $K(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function FK(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?yf(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):vi(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",yf(n,"Z")):yf(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function UK(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+i+s)}function BK(e){e||(e=this.isUtc()?te.defaultFormatUtc:te.defaultFormat);var t=yf(this,e);return this.localeData().postformat(t)}function zK(e,t){return this.isValid()&&(Yr(e)&&e.isValid()||ut(e).isValid())?Hr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function VK(e){return this.from(ut(),e)}function jK(e,t){return this.isValid()&&(Yr(e)&&e.isValid()||ut(e).isValid())?Hr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function YK(e){return this.to(ut(),e)}function HO(e){var t;return e===void 0?this._locale._abbr:(t=ls(e),t!=null&&(this._locale=t),this)}var GO=Tr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function qO(){return this._locale}var Pp=1e3,ml=60*Pp,Mp=60*ml,KO=(365*400+97)*24*Mp;function gl(e,t){return(e%t+t)%t}function QO(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-KO:new Date(e,t,n).valueOf()}function XO(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-KO:Date.UTC(e,t,n)}function WK(e){var t,n;if(e=br(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?XO:QO,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=gl(t+(this._isUTC?0:this.utcOffset()*ml),Mp);break;case"minute":t=this._d.valueOf(),t-=gl(t,ml);break;case"second":t=this._d.valueOf(),t-=gl(t,Pp);break}return this._d.setTime(t),te.updateOffset(this,!0),this}function HK(e){var t,n;if(e=br(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?XO:QO,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Mp-gl(t+(this._isUTC?0:this.utcOffset()*ml),Mp)-1;break;case"minute":t=this._d.valueOf(),t+=ml-gl(t,ml)-1;break;case"second":t=this._d.valueOf(),t+=Pp-gl(t,Pp)-1;break}return this._d.setTime(t),te.updateOffset(this,!0),this}function GK(){return this._d.valueOf()-(this._offset||0)*6e4}function qK(){return Math.floor(this.valueOf()/1e3)}function KK(){return new Date(this.valueOf())}function QK(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function XK(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function JK(){return this.isValid()?this.toISOString():null}function ZK(){return zx(this)}function eQ(){return Ns({},Ie(this))}function tQ(){return Ie(this).overflow}function nQ(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}he("N",0,0,"eraAbbr");he("NN",0,0,"eraAbbr");he("NNN",0,0,"eraAbbr");he("NNNN",0,0,"eraName");he("NNNNN",0,0,"eraNarrow");he("y",["y",1],"yo","eraYear");he("y",["yy",2],0,"eraYear");he("y",["yyy",3],0,"eraYear");he("y",["yyyy",4],0,"eraYear");se("N",rC);se("NN",rC);se("NNN",rC);se("NNNN",fQ);se("NNNNN",pQ);et(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?Ie(n).era=i:Ie(n).invalidEra=e});se("y",ou);se("yy",ou);se("yyy",ou);se("yyyy",ou);se("yo",mQ);et(["y","yy","yyy","yyyy"],En);et(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[En]=n._locale.eraYearOrdinalParse(e,i):t[En]=parseInt(e,10)});function rQ(e,t){var n,r,i,s=this._eras||ls("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":i=te(s[n].since).startOf("day"),s[n].since=i.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":i=te(s[n].until).startOf("day").valueOf(),s[n].until=i.valueOf();break}}return s}function iQ(e,t,n){var r,i,s=this.eras(),o,a,l;for(e=e.toUpperCase(),r=0,i=s.length;r<i;++r)if(o=s[r].name.toUpperCase(),a=s[r].abbr.toUpperCase(),l=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return s[r];break;case"NNNN":if(o===e)return s[r];break;case"NNNNN":if(l===e)return s[r];break}else if([o,a,l].indexOf(e)>=0)return s[r]}function sQ(e,t){var n=e.since<=e.until?1:-1;return t===void 0?te(e.since).year():te(e.since).year()+(t-e.offset)*n}function oQ(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function aQ(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function lQ(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function uQ(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-te(i[e].since).year())*n+i[e].offset;return this.year()}function cQ(e){return Ye(this,"_erasNameRegex")||iC.call(this),e?this._erasNameRegex:this._erasRegex}function dQ(e){return Ye(this,"_erasAbbrRegex")||iC.call(this),e?this._erasAbbrRegex:this._erasRegex}function hQ(e){return Ye(this,"_erasNarrowRegex")||iC.call(this),e?this._erasNarrowRegex:this._erasRegex}function rC(e,t){return t.erasAbbrRegex(e)}function fQ(e,t){return t.erasNameRegex(e)}function pQ(e,t){return t.erasNarrowRegex(e)}function mQ(e,t){return t._eraYearOrdinalRegex||ou}function iC(){var e=[],t=[],n=[],r=[],i,s,o=this.eras();for(i=0,s=o.length;i<s;++i)t.push(Zn(o[i].name)),e.push(Zn(o[i].abbr)),n.push(Zn(o[i].narrow)),r.push(Zn(o[i].name)),r.push(Zn(o[i].abbr)),r.push(Zn(o[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}he(0,["gg",2],0,function(){return this.weekYear()%100});he(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ng(e,t){he(0,[e,e.length],0,t)}Ng("gggg","weekYear");Ng("ggggg","weekYear");Ng("GGGG","isoWeekYear");Ng("GGGGG","isoWeekYear");Dn("weekYear","gg");Dn("isoWeekYear","GG");In("weekYear",1);In("isoWeekYear",1);se("G",Tg);se("g",Tg);se("GG",ct,dr);se("gg",ct,dr);se("GGGG",Gx,Hx);se("gggg",Gx,Hx);se("GGGGG",kg,Sg);se("ggggg",kg,Sg);Wd(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=Re(e)});Wd(["gg","GG"],function(e,t,n,r){t[r]=te.parseTwoDigitYear(e)});function gQ(e){return JO.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function yQ(e){return JO.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function vQ(){return Hi(this.year(),1,4)}function wQ(){return Hi(this.isoWeekYear(),1,4)}function _Q(){var e=this.localeData()._week;return Hi(this.year(),e.dow,e.doy)}function xQ(){var e=this.localeData()._week;return Hi(this.weekYear(),e.dow,e.doy)}function JO(e,t,n,r,i){var s;return e==null?nd(this,r,i).year:(s=Hi(e,r,i),t>s&&(t=s),CQ.call(this,e,t,n,r,i))}function CQ(e,t,n,r,i){var s=NO(e,t,n,r,i),o=td(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}he("Q",0,"Qo","quarter");Dn("quarter","Q");In("quarter",7);se("Q",xO);et("Q",function(e,t){t[zi]=(Re(e)-1)*3});function SQ(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}he("D",["DD",2],"Do","date");Dn("date","D");In("date",9);se("D",ct);se("DD",ct,dr);se("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});et(["D","DD"],Jr);et("Do",function(e,t){t[Jr]=Re(e.match(ct)[0])});var ZO=su("Date",!0);he("DDD",["DDDD",3],"DDDo","dayOfYear");Dn("dayOfYear","DDD");In("dayOfYear",4);se("DDD",Eg);se("DDDD",CO);et(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Re(e)});function EQ(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}he("m",["mm",2],0,"minute");Dn("minute","m");In("minute",14);se("m",ct);se("mm",ct,dr);et(["m","mm"],$r);var kQ=su("Minutes",!1);he("s",["ss",2],0,"second");Dn("second","s");In("second",15);se("s",ct);se("ss",ct,dr);et(["s","ss"],Vi);var TQ=su("Seconds",!1);he("S",0,0,function(){return~~(this.millisecond()/100)});he(0,["SS",2],0,function(){return~~(this.millisecond()/10)});he(0,["SSS",3],0,"millisecond");he(0,["SSSS",4],0,function(){return this.millisecond()*10});he(0,["SSSSS",5],0,function(){return this.millisecond()*100});he(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});he(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});he(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});he(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Dn("millisecond","ms");In("millisecond",16);se("S",Eg,xO);se("SS",Eg,dr);se("SSS",Eg,CO);var Os,eR;for(Os="SSSS";Os.length<=9;Os+="S")se(Os,ou);function bQ(e,t){t[Lo]=Re(("0."+e)*1e3)}for(Os="S";Os.length<=9;Os+="S")et(Os,bQ);eR=su("Milliseconds",!1);he("z",0,0,"zoneAbbr");he("zz",0,0,"zoneName");function DQ(){return this._isUTC?"UTC":""}function IQ(){return this._isUTC?"Coordinated Universal Time":""}var K=jd.prototype;K.add=xK;K.calendar=DK;K.clone=IK;K.diff=LK;K.endOf=HK;K.format=BK;K.from=zK;K.fromNow=VK;K.to=jK;K.toNow=YK;K.get=NG;K.invalidAt=tQ;K.isAfter=AK;K.isBefore=NK;K.isBetween=OK;K.isSame=RK;K.isSameOrAfter=PK;K.isSameOrBefore=MK;K.isValid=ZK;K.lang=GO;K.locale=HO;K.localeData=qO;K.max=Zq;K.min=Jq;K.parsingFlags=eQ;K.set=OG;K.startOf=WK;K.subtract=CK;K.toArray=QK;K.toObject=XK;K.toDate=KK;K.toISOString=FK;K.inspect=UK;typeof Symbol!="undefined"&&Symbol.for!=null&&(K[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});K.toJSON=JK;K.toString=$K;K.unix=qK;K.valueOf=GK;K.creationData=nQ;K.eraName=oQ;K.eraNarrow=aQ;K.eraAbbr=lQ;K.eraYear=uQ;K.year=AO;K.isLeapYear=XG;K.weekYear=gQ;K.isoWeekYear=yQ;K.quarter=K.quarters=SQ;K.month=DO;K.daysInMonth=qG;K.week=K.weeks=rq;K.isoWeek=K.isoWeeks=iq;K.weeksInYear=_Q;K.weeksInWeekYear=xQ;K.isoWeeksInYear=vQ;K.isoWeeksInISOWeekYear=wQ;K.date=ZO;K.day=K.days=yq;K.weekday=vq;K.isoWeekday=wq;K.dayOfYear=EQ;K.hour=K.hours=Tq;K.minute=K.minutes=kQ;K.second=K.seconds=TQ;K.millisecond=K.milliseconds=eR;K.utcOffset=lK;K.utc=cK;K.local=dK;K.parseZone=hK;K.hasAlignedHourOffset=fK;K.isDST=pK;K.isLocal=gK;K.isUtcOffset=yK;K.isUtc=VO;K.isUTC=VO;K.zoneAbbr=DQ;K.zoneName=IQ;K.dates=Tr("dates accessor is deprecated. Use date instead.",ZO);K.months=Tr("months accessor is deprecated. Use month instead",DO);K.years=Tr("years accessor is deprecated. Use year instead",AO);K.zone=Tr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",uK);K.isDSTShifted=Tr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",mK);function AQ(e){return ut(e*1e3)}function NQ(){return ut.apply(null,arguments).parseZone()}function tR(e){return e}var We=jx.prototype;We.calendar=yG;We.longDateFormat=xG;We.invalidDate=SG;We.ordinal=TG;We.preparse=tR;We.postformat=tR;We.relativeTime=DG;We.pastFuture=IG;We.set=mG;We.eras=rQ;We.erasParse=iQ;We.erasConvertYear=sQ;We.erasAbbrRegex=dQ;We.erasNameRegex=cQ;We.erasNarrowRegex=hQ;We.months=YG;We.monthsShort=WG;We.monthsParse=GG;We.monthsRegex=QG;We.monthsShortRegex=KG;We.week=ZG;We.firstDayOfYear=nq;We.firstDayOfWeek=tq;We.weekdays=hq;We.weekdaysMin=pq;We.weekdaysShort=fq;We.weekdaysParse=gq;We.weekdaysRegex=_q;We.weekdaysShortRegex=xq;We.weekdaysMinRegex=Cq;We.isPM=Eq;We.meridiem=bq;function Lp(e,t,n,r){var i=ls(),s=yi().set(r,t);return i[n](s,e)}function nR(e,t,n){if(os(e)&&(t=e,e=void 0),e=e||"",t!=null)return Lp(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Lp(e,r,n,"month");return i}function sC(e,t,n,r){typeof e=="boolean"?(os(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,os(t)&&(n=t,t=void 0),t=t||"");var i=ls(),s=e?i._week.dow:0,o,a=[];if(n!=null)return Lp(t,(n+s)%7,r,"day");for(o=0;o<7;o++)a[o]=Lp(t,(o+s)%7,r,"day");return a}function OQ(e,t){return nR(e,t,"months")}function RQ(e,t){return nR(e,t,"monthsShort")}function PQ(e,t,n){return sC(e,t,n,"weekdays")}function MQ(e,t,n){return sC(e,t,n,"weekdaysShort")}function LQ(e,t,n){return sC(e,t,n,"weekdaysMin")}Qs("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=Re(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});te.lang=Tr("moment.lang is deprecated. Use moment.locale instead.",Qs);te.langData=Tr("moment.langData is deprecated. Use moment.localeData instead.",ls);var bi=Math.abs;function $Q(){var e=this._data;return this._milliseconds=bi(this._milliseconds),this._days=bi(this._days),this._months=bi(this._months),e.milliseconds=bi(e.milliseconds),e.seconds=bi(e.seconds),e.minutes=bi(e.minutes),e.hours=bi(e.hours),e.months=bi(e.months),e.years=bi(e.years),this}function rR(e,t,n,r){var i=Hr(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function FQ(e,t){return rR(this,e,t,1)}function UQ(e,t){return rR(this,e,t,-1)}function $k(e){return e<0?Math.floor(e):Math.ceil(e)}function BQ(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,a,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=$k(A1(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=mr(e/1e3),r.seconds=i%60,s=mr(i/60),r.minutes=s%60,o=mr(s/60),r.hours=o%24,t+=mr(o/24),l=mr(iR(t)),n+=l,t-=$k(A1(l)),a=mr(n/12),n%=12,r.days=t,r.months=n,r.years=a,this}function iR(e){return e*4800/146097}function A1(e){return e*146097/4800}function zQ(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=br(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+iR(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(A1(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function VQ(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Re(this._months/12)*31536e6:NaN}function us(e){return function(){return this.as(e)}}var jQ=us("ms"),YQ=us("s"),WQ=us("m"),HQ=us("h"),GQ=us("d"),qQ=us("w"),KQ=us("M"),QQ=us("Q"),XQ=us("y");function JQ(){return Hr(this)}function ZQ(e){return e=br(e),this.isValid()?this[e+"s"]():NaN}function _a(e){return function(){return this.isValid()?this._data[e]:NaN}}var eX=_a("milliseconds"),tX=_a("seconds"),nX=_a("minutes"),rX=_a("hours"),iX=_a("days"),sX=_a("months"),oX=_a("years");function aX(){return mr(this.days()/7)}var Ii=Math.round,Xa={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function lX(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function uX(e,t,n,r){var i=Hr(e).abs(),s=Ii(i.as("s")),o=Ii(i.as("m")),a=Ii(i.as("h")),l=Ii(i.as("d")),c=Ii(i.as("M")),h=Ii(i.as("w")),p=Ii(i.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(m=m||h<=1&&["w"]||h<n.w&&["ww",h]),m=m||c<=1&&["M"]||c<n.M&&["MM",c]||p<=1&&["y"]||["yy",p],m[2]=t,m[3]=+e>0,m[4]=r,lX.apply(null,m)}function cX(e){return e===void 0?Ii:typeof e=="function"?(Ii=e,!0):!1}function dX(e,t){return Xa[e]===void 0?!1:t===void 0?Xa[e]:(Xa[e]=t,e==="s"&&(Xa.ss=t-1),!0)}function hX(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Xa,i,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Xa,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),s=uX(this,!n,r,i),n&&(s=i.pastFuture(+this,s)),i.postformat(s)}var wy=Math.abs;function Aa(e){return(e>0)-(e<0)||+e}function Og(){if(!this.isValid())return this.localeData().invalidDate();var e=wy(this._milliseconds)/1e3,t=wy(this._days),n=wy(this._months),r,i,s,o,a=this.asSeconds(),l,c,h,p;return a?(r=mr(e/60),i=mr(r/60),e%=60,r%=60,s=mr(n/12),n%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",c=Aa(this._months)!==Aa(a)?"-":"",h=Aa(this._days)!==Aa(a)?"-":"",p=Aa(this._milliseconds)!==Aa(a)?"-":"",l+"P"+(s?c+s+"Y":"")+(n?c+n+"M":"")+(t?h+t+"D":"")+(i||r||e?"T":"")+(i?p+i+"H":"")+(r?p+r+"M":"")+(e?p+o+"S":"")):"P0D"}var Ue=Ag.prototype;Ue.isValid=iK;Ue.abs=$Q;Ue.add=FQ;Ue.subtract=UQ;Ue.as=zQ;Ue.asMilliseconds=jQ;Ue.asSeconds=YQ;Ue.asMinutes=WQ;Ue.asHours=HQ;Ue.asDays=GQ;Ue.asWeeks=qQ;Ue.asMonths=KQ;Ue.asQuarters=QQ;Ue.asYears=XQ;Ue.valueOf=VQ;Ue._bubble=BQ;Ue.clone=JQ;Ue.get=ZQ;Ue.milliseconds=eX;Ue.seconds=tX;Ue.minutes=nX;Ue.hours=rX;Ue.days=iX;Ue.weeks=aX;Ue.months=sX;Ue.years=oX;Ue.humanize=hX;Ue.toISOString=Og;Ue.toString=Og;Ue.toJSON=Og;Ue.locale=HO;Ue.localeData=qO;Ue.toIsoString=Tr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Og);Ue.lang=GO;he("X",0,0,"unix");he("x",0,0,"valueOf");se("x",Tg);se("X",PG);et("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});et("x",function(e,t,n){n._d=new Date(Re(e))});//! moment.js
te.version="2.29.4";fG(ut);te.fn=K;te.min=eK;te.max=tK;te.now=nK;te.utc=yi;te.unix=AQ;te.months=OQ;te.isDate=Vd;te.locale=Qs;te.invalid=xg;te.duration=Hr;te.isMoment=Yr;te.weekdays=PQ;te.parseZone=NQ;te.localeData=ls;te.isDuration=vf;te.monthsShort=RQ;te.weekdaysMin=LQ;te.defineLocale=Xx;te.updateLocale=Nq;te.locales=Oq;te.weekdaysShort=MQ;te.normalizeUnits=br;te.relativeTimeRounding=cX;te.relativeTimeThreshold=dX;te.calendarFormat=bK;te.prototype=K;te.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var oC={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(qk,function(){var n;function r(){return n.apply(null,arguments)}function i(u){n=u}function s(u){return u instanceof Array||Object.prototype.toString.call(u)==="[object Array]"}function o(u){return u!=null&&Object.prototype.toString.call(u)==="[object Object]"}function a(u,d){return Object.prototype.hasOwnProperty.call(u,d)}function l(u){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(u).length===0;var d;for(d in u)if(a(u,d))return!1;return!0}function c(u){return u===void 0}function h(u){return typeof u=="number"||Object.prototype.toString.call(u)==="[object Number]"}function p(u){return u instanceof Date||Object.prototype.toString.call(u)==="[object Date]"}function m(u,d){var f=[],g,E=u.length;for(g=0;g<E;++g)f.push(d(u[g],g));return f}function x(u,d){for(var f in d)a(d,f)&&(u[f]=d[f]);return a(d,"toString")&&(u.toString=d.toString),a(d,"valueOf")&&(u.valueOf=d.valueOf),u}function y(u,d,f,g){return PC(u,d,f,g,!0).utc()}function _(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function k(u){return u._pf==null&&(u._pf=_()),u._pf}var C;Array.prototype.some?C=Array.prototype.some:C=function(u){var d=Object(this),f=d.length>>>0,g;for(g=0;g<f;g++)if(g in d&&u.call(this,d[g],g,d))return!0;return!1};function v(u){if(u._isValid==null){var d=k(u),f=C.call(d.parsedDateParts,function(E){return E!=null}),g=!isNaN(u._d.getTime())&&d.overflow<0&&!d.empty&&!d.invalidEra&&!d.invalidMonth&&!d.invalidWeekday&&!d.weekdayMismatch&&!d.nullInput&&!d.invalidFormat&&!d.userInvalidated&&(!d.meridiem||d.meridiem&&f);if(u._strict&&(g=g&&d.charsLeftOver===0&&d.unusedTokens.length===0&&d.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(u))u._isValid=g;else return g}return u._isValid}function S(u){var d=y(NaN);return u!=null?x(k(d),u):k(d).userInvalidated=!0,d}var T=r.momentProperties=[],I=!1;function P(u,d){var f,g,E,D=T.length;if(c(d._isAMomentObject)||(u._isAMomentObject=d._isAMomentObject),c(d._i)||(u._i=d._i),c(d._f)||(u._f=d._f),c(d._l)||(u._l=d._l),c(d._strict)||(u._strict=d._strict),c(d._tzm)||(u._tzm=d._tzm),c(d._isUTC)||(u._isUTC=d._isUTC),c(d._offset)||(u._offset=d._offset),c(d._pf)||(u._pf=k(d)),c(d._locale)||(u._locale=d._locale),D>0)for(f=0;f<D;f++)g=T[f],E=d[g],c(E)||(u[g]=E);return u}function N(u){P(this,u),this._d=new Date(u._d!=null?u._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),I===!1&&(I=!0,r.updateOffset(this),I=!1)}function O(u){return u instanceof N||u!=null&&u._isAMomentObject!=null}function Z(u){r.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+u)}function F(u,d){var f=!0;return x(function(){if(r.deprecationHandler!=null&&r.deprecationHandler(null,u),f){var g=[],E,D,L,de=arguments.length;for(D=0;D<de;D++){if(E="",typeof arguments[D]=="object"){E+=`
[`+D+"] ";for(L in arguments[0])a(arguments[0],L)&&(E+=L+": "+arguments[0][L]+", ");E=E.slice(0,-2)}else E=arguments[D];g.push(E)}Z(u+`
Arguments: `+Array.prototype.slice.call(g).join("")+`
`+new Error().stack),f=!1}return d.apply(this,arguments)},d)}var j={};function J(u,d){r.deprecationHandler!=null&&r.deprecationHandler(u,d),j[u]||(Z(d),j[u]=!0)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null;function X(u){return typeof Function!="undefined"&&u instanceof Function||Object.prototype.toString.call(u)==="[object Function]"}function ue(u){var d,f;for(f in u)a(u,f)&&(d=u[f],X(d)?this[f]=d:this["_"+f]=d);this._config=u,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function oe(u,d){var f=x({},u),g;for(g in d)a(d,g)&&(o(u[g])&&o(d[g])?(f[g]={},x(f[g],u[g]),x(f[g],d[g])):d[g]!=null?f[g]=d[g]:delete f[g]);for(g in u)a(u,g)&&!a(d,g)&&o(u[g])&&(f[g]=x({},f[g]));return f}function Te(u){u!=null&&this.set(u)}var ge;Object.keys?ge=Object.keys:ge=function(u){var d,f=[];for(d in u)a(u,d)&&f.push(d);return f};var $={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function V(u,d,f){var g=this._calendar[u]||this._calendar.sameElse;return X(g)?g.call(d,f):g}function M(u,d,f){var g=""+Math.abs(u),E=d-g.length,D=u>=0;return(D?f?"+":"":"-")+Math.pow(10,Math.max(0,E)).toString().substr(1)+g}var ee=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,B={},Y={};function z(u,d,f,g){var E=g;typeof g=="string"&&(E=function(){return this[g]()}),u&&(Y[u]=E),d&&(Y[d[0]]=function(){return M(E.apply(this,arguments),d[1],d[2])}),f&&(Y[f]=function(){return this.localeData().ordinal(E.apply(this,arguments),u)})}function b(u){return u.match(/\[[\s\S]/)?u.replace(/^\[|\]$/g,""):u.replace(/\\/g,"")}function le(u){var d=u.match(ee),f,g;for(f=0,g=d.length;f<g;f++)Y[d[f]]?d[f]=Y[d[f]]:d[f]=b(d[f]);return function(E){var D="",L;for(L=0;L<g;L++)D+=X(d[L])?d[L].call(E,u):d[L];return D}}function W(u,d){return u.isValid()?(d=we(d,u.localeData()),B[d]=B[d]||le(d),B[d](u)):u.localeData().invalidDate()}function we(u,d){var f=5;function g(E){return d.longDateFormat(E)||E}for(U.lastIndex=0;f>=0&&U.test(u);)u=u.replace(U,g),U.lastIndex=0,f-=1;return u}var me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Be(u){var d=this._longDateFormat[u],f=this._longDateFormat[u.toUpperCase()];return d||!f?d:(this._longDateFormat[u]=f.match(ee).map(function(g){return g==="MMMM"||g==="MM"||g==="DD"||g==="dddd"?g.slice(1):g}).join(""),this._longDateFormat[u])}var _e="Invalid date";function ne(){return this._invalidDate}var be="%d",Ee=/\d{1,2}/;function dt(u){return this._ordinal.replace("%d",u)}var Le={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Bt(u,d,f,g){var E=this._relativeTime[f];return X(E)?E(u,d,f,g):E.replace(/%d/i,u)}function wo(u,d){var f=this._relativeTime[u>0?"future":"past"];return X(f)?f(d):f.replace(/%s/i,d)}var vt={};function Dt(u,d){var f=u.toLowerCase();vt[f]=vt[f+"s"]=vt[d]=u}function Qt(u){return typeof u=="string"?vt[u]||vt[u.toLowerCase()]:void 0}function An(u){var d={},f,g;for(g in u)a(u,g)&&(f=Qt(g),f&&(d[f]=u[g]));return d}var ye={};function Ne(u,d){ye[u]=d}function au(u){var d=[],f;for(f in u)a(u,f)&&d.push({unit:f,priority:ye[f]});return d.sort(function(g,E){return g.priority-E.priority}),d}function ds(u){return u%4===0&&u%100!==0||u%400===0}function It(u){return u<0?Math.ceil(u)||0:Math.floor(u)}function Oe(u){var d=+u,f=0;return d!==0&&isFinite(d)&&(f=It(d)),f}function xa(u,d){return function(f){return f!=null?(pC(this,u,f),r.updateOffset(this,d),this):Hd(this,u)}}function Hd(u,d){return u.isValid()?u._d["get"+(u._isUTC?"UTC":"")+d]():NaN}function pC(u,d,f){u.isValid()&&!isNaN(f)&&(d==="FullYear"&&ds(u.year())&&u.month()===1&&u.date()===29?(f=Oe(f),u._d["set"+(u._isUTC?"UTC":"")+d](f,u.month(),Zd(f,u.month()))):u._d["set"+(u._isUTC?"UTC":"")+d](f))}function wR(u){return u=Qt(u),X(this[u])?this[u]():this}function _R(u,d){if(typeof u=="object"){u=An(u);var f=au(u),g,E=f.length;for(g=0;g<E;g++)this[f[g].unit](u[f[g].unit])}else if(u=Qt(u),X(this[u]))return this[u](d);return this}var mC=/\d/,Qn=/\d\d/,gC=/\d{3}/,Ug=/\d{4}/,Gd=/[+-]?\d{6}/,it=/\d\d?/,yC=/\d\d\d\d?/,vC=/\d\d\d\d\d\d?/,qd=/\d{1,3}/,Bg=/\d{1,4}/,Kd=/[+-]?\d{1,6}/,Ca=/\d+/,Qd=/[+-]?\d+/,xR=/Z|[+-]\d\d:?\d\d/gi,Xd=/Z|[+-]\d\d(?::?\d\d)?/gi,CR=/[+-]?\d+(\.\d{1,3})?/,lu=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Jd;Jd={};function ie(u,d,f){Jd[u]=X(d)?d:function(g,E){return g&&f?f:d}}function SR(u,d){return a(Jd,u)?Jd[u](d._strict,d._locale):new RegExp(ER(u))}function ER(u){return Xn(u.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(d,f,g,E,D){return f||g||E||D}))}function Xn(u){return u.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var zg={};function Je(u,d){var f,g=d,E;for(typeof u=="string"&&(u=[u]),h(d)&&(g=function(D,L){L[d]=Oe(D)}),E=u.length,f=0;f<E;f++)zg[u[f]]=g}function uu(u,d){Je(u,function(f,g,E,D){E._w=E._w||{},d(f,E._w,E,D)})}function kR(u,d,f){d!=null&&a(zg,u)&&zg[u](d,f._a,f,u)}var hn=0,wi=1,Gr=2,zt=3,Dr=4,_i=5,_o=6,TR=7,bR=8;function DR(u,d){return(u%d+d)%d}var At;Array.prototype.indexOf?At=Array.prototype.indexOf:At=function(u){var d;for(d=0;d<this.length;++d)if(this[d]===u)return d;return-1};function Zd(u,d){if(isNaN(u)||isNaN(d))return NaN;var f=DR(d,12);return u+=(d-f)/12,f===1?ds(u)?29:28:31-f%7%2}z("M",["MM",2],"Mo",function(){return this.month()+1}),z("MMM",0,0,function(u){return this.localeData().monthsShort(this,u)}),z("MMMM",0,0,function(u){return this.localeData().months(this,u)}),Dt("month","M"),Ne("month",8),ie("M",it),ie("MM",it,Qn),ie("MMM",function(u,d){return d.monthsShortRegex(u)}),ie("MMMM",function(u,d){return d.monthsRegex(u)}),Je(["M","MM"],function(u,d){d[wi]=Oe(u)-1}),Je(["MMM","MMMM"],function(u,d,f,g){var E=f._locale.monthsParse(u,g,f._strict);E!=null?d[wi]=E:k(f).invalidMonth=u});var IR="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),wC="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),_C=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,AR=lu,NR=lu;function OR(u,d){return u?s(this._months)?this._months[u.month()]:this._months[(this._months.isFormat||_C).test(d)?"format":"standalone"][u.month()]:s(this._months)?this._months:this._months.standalone}function RR(u,d){return u?s(this._monthsShort)?this._monthsShort[u.month()]:this._monthsShort[_C.test(d)?"format":"standalone"][u.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function PR(u,d,f){var g,E,D,L=u.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],g=0;g<12;++g)D=y([2e3,g]),this._shortMonthsParse[g]=this.monthsShort(D,"").toLocaleLowerCase(),this._longMonthsParse[g]=this.months(D,"").toLocaleLowerCase();return f?d==="MMM"?(E=At.call(this._shortMonthsParse,L),E!==-1?E:null):(E=At.call(this._longMonthsParse,L),E!==-1?E:null):d==="MMM"?(E=At.call(this._shortMonthsParse,L),E!==-1?E:(E=At.call(this._longMonthsParse,L),E!==-1?E:null)):(E=At.call(this._longMonthsParse,L),E!==-1?E:(E=At.call(this._shortMonthsParse,L),E!==-1?E:null))}function MR(u,d,f){var g,E,D;if(this._monthsParseExact)return PR.call(this,u,d,f);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),g=0;g<12;g++){if(E=y([2e3,g]),f&&!this._longMonthsParse[g]&&(this._longMonthsParse[g]=new RegExp("^"+this.months(E,"").replace(".","")+"$","i"),this._shortMonthsParse[g]=new RegExp("^"+this.monthsShort(E,"").replace(".","")+"$","i")),!f&&!this._monthsParse[g]&&(D="^"+this.months(E,"")+"|^"+this.monthsShort(E,""),this._monthsParse[g]=new RegExp(D.replace(".",""),"i")),f&&d==="MMMM"&&this._longMonthsParse[g].test(u))return g;if(f&&d==="MMM"&&this._shortMonthsParse[g].test(u))return g;if(!f&&this._monthsParse[g].test(u))return g}}function xC(u,d){var f;if(!u.isValid())return u;if(typeof d=="string"){if(/^\d+$/.test(d))d=Oe(d);else if(d=u.localeData().monthsParse(d),!h(d))return u}return f=Math.min(u.date(),Zd(u.year(),d)),u._d["set"+(u._isUTC?"UTC":"")+"Month"](d,f),u}function CC(u){return u!=null?(xC(this,u),r.updateOffset(this,!0),this):Hd(this,"Month")}function LR(){return Zd(this.year(),this.month())}function $R(u){return this._monthsParseExact?(a(this,"_monthsRegex")||SC.call(this),u?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=AR),this._monthsShortStrictRegex&&u?this._monthsShortStrictRegex:this._monthsShortRegex)}function FR(u){return this._monthsParseExact?(a(this,"_monthsRegex")||SC.call(this),u?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=NR),this._monthsStrictRegex&&u?this._monthsStrictRegex:this._monthsRegex)}function SC(){function u(L,de){return de.length-L.length}var d=[],f=[],g=[],E,D;for(E=0;E<12;E++)D=y([2e3,E]),d.push(this.monthsShort(D,"")),f.push(this.months(D,"")),g.push(this.months(D,"")),g.push(this.monthsShort(D,""));for(d.sort(u),f.sort(u),g.sort(u),E=0;E<12;E++)d[E]=Xn(d[E]),f[E]=Xn(f[E]);for(E=0;E<24;E++)g[E]=Xn(g[E]);this._monthsRegex=new RegExp("^("+g.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}z("Y",0,0,function(){var u=this.year();return u<=9999?M(u,4):"+"+u}),z(0,["YY",2],0,function(){return this.year()%100}),z(0,["YYYY",4],0,"year"),z(0,["YYYYY",5],0,"year"),z(0,["YYYYYY",6,!0],0,"year"),Dt("year","y"),Ne("year",1),ie("Y",Qd),ie("YY",it,Qn),ie("YYYY",Bg,Ug),ie("YYYYY",Kd,Gd),ie("YYYYYY",Kd,Gd),Je(["YYYYY","YYYYYY"],hn),Je("YYYY",function(u,d){d[hn]=u.length===2?r.parseTwoDigitYear(u):Oe(u)}),Je("YY",function(u,d){d[hn]=r.parseTwoDigitYear(u)}),Je("Y",function(u,d){d[hn]=parseInt(u,10)});function cu(u){return ds(u)?366:365}r.parseTwoDigitYear=function(u){return Oe(u)+(Oe(u)>68?1900:2e3)};var EC=xa("FullYear",!0);function UR(){return ds(this.year())}function BR(u,d,f,g,E,D,L){var de;return u<100&&u>=0?(de=new Date(u+400,d,f,g,E,D,L),isFinite(de.getFullYear())&&de.setFullYear(u)):de=new Date(u,d,f,g,E,D,L),de}function du(u){var d,f;return u<100&&u>=0?(f=Array.prototype.slice.call(arguments),f[0]=u+400,d=new Date(Date.UTC.apply(null,f)),isFinite(d.getUTCFullYear())&&d.setUTCFullYear(u)):d=new Date(Date.UTC.apply(null,arguments)),d}function eh(u,d,f){var g=7+d-f,E=(7+du(u,0,g).getUTCDay()-d)%7;return-E+g-1}function kC(u,d,f,g,E){var D=(7+f-g)%7,L=eh(u,g,E),de=1+7*(d-1)+D+L,Ae,Ze;return de<=0?(Ae=u-1,Ze=cu(Ae)+de):de>cu(u)?(Ae=u+1,Ze=de-cu(u)):(Ae=u,Ze=de),{year:Ae,dayOfYear:Ze}}function hu(u,d,f){var g=eh(u.year(),d,f),E=Math.floor((u.dayOfYear()-g-1)/7)+1,D,L;return E<1?(L=u.year()-1,D=E+xi(L,d,f)):E>xi(u.year(),d,f)?(D=E-xi(u.year(),d,f),L=u.year()+1):(L=u.year(),D=E),{week:D,year:L}}function xi(u,d,f){var g=eh(u,d,f),E=eh(u+1,d,f);return(cu(u)-g+E)/7}z("w",["ww",2],"wo","week"),z("W",["WW",2],"Wo","isoWeek"),Dt("week","w"),Dt("isoWeek","W"),Ne("week",5),Ne("isoWeek",5),ie("w",it),ie("ww",it,Qn),ie("W",it),ie("WW",it,Qn),uu(["w","ww","W","WW"],function(u,d,f,g){d[g.substr(0,1)]=Oe(u)});function zR(u){return hu(u,this._week.dow,this._week.doy).week}var VR={dow:0,doy:6};function jR(){return this._week.dow}function YR(){return this._week.doy}function WR(u){var d=this.localeData().week(this);return u==null?d:this.add((u-d)*7,"d")}function HR(u){var d=hu(this,1,4).week;return u==null?d:this.add((u-d)*7,"d")}z("d",0,"do","day"),z("dd",0,0,function(u){return this.localeData().weekdaysMin(this,u)}),z("ddd",0,0,function(u){return this.localeData().weekdaysShort(this,u)}),z("dddd",0,0,function(u){return this.localeData().weekdays(this,u)}),z("e",0,0,"weekday"),z("E",0,0,"isoWeekday"),Dt("day","d"),Dt("weekday","e"),Dt("isoWeekday","E"),Ne("day",11),Ne("weekday",11),Ne("isoWeekday",11),ie("d",it),ie("e",it),ie("E",it),ie("dd",function(u,d){return d.weekdaysMinRegex(u)}),ie("ddd",function(u,d){return d.weekdaysShortRegex(u)}),ie("dddd",function(u,d){return d.weekdaysRegex(u)}),uu(["dd","ddd","dddd"],function(u,d,f,g){var E=f._locale.weekdaysParse(u,g,f._strict);E!=null?d.d=E:k(f).invalidWeekday=u}),uu(["d","e","E"],function(u,d,f,g){d[g]=Oe(u)});function GR(u,d){return typeof u!="string"?u:isNaN(u)?(u=d.weekdaysParse(u),typeof u=="number"?u:null):parseInt(u,10)}function qR(u,d){return typeof u=="string"?d.weekdaysParse(u)%7||7:isNaN(u)?null:u}function Vg(u,d){return u.slice(d,7).concat(u.slice(0,d))}var KR="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),TC="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),QR="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),XR=lu,JR=lu,ZR=lu;function eP(u,d){var f=s(this._weekdays)?this._weekdays:this._weekdays[u&&u!==!0&&this._weekdays.isFormat.test(d)?"format":"standalone"];return u===!0?Vg(f,this._week.dow):u?f[u.day()]:f}function tP(u){return u===!0?Vg(this._weekdaysShort,this._week.dow):u?this._weekdaysShort[u.day()]:this._weekdaysShort}function nP(u){return u===!0?Vg(this._weekdaysMin,this._week.dow):u?this._weekdaysMin[u.day()]:this._weekdaysMin}function rP(u,d,f){var g,E,D,L=u.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],g=0;g<7;++g)D=y([2e3,1]).day(g),this._minWeekdaysParse[g]=this.weekdaysMin(D,"").toLocaleLowerCase(),this._shortWeekdaysParse[g]=this.weekdaysShort(D,"").toLocaleLowerCase(),this._weekdaysParse[g]=this.weekdays(D,"").toLocaleLowerCase();return f?d==="dddd"?(E=At.call(this._weekdaysParse,L),E!==-1?E:null):d==="ddd"?(E=At.call(this._shortWeekdaysParse,L),E!==-1?E:null):(E=At.call(this._minWeekdaysParse,L),E!==-1?E:null):d==="dddd"?(E=At.call(this._weekdaysParse,L),E!==-1||(E=At.call(this._shortWeekdaysParse,L),E!==-1)?E:(E=At.call(this._minWeekdaysParse,L),E!==-1?E:null)):d==="ddd"?(E=At.call(this._shortWeekdaysParse,L),E!==-1||(E=At.call(this._weekdaysParse,L),E!==-1)?E:(E=At.call(this._minWeekdaysParse,L),E!==-1?E:null)):(E=At.call(this._minWeekdaysParse,L),E!==-1||(E=At.call(this._weekdaysParse,L),E!==-1)?E:(E=At.call(this._shortWeekdaysParse,L),E!==-1?E:null))}function iP(u,d,f){var g,E,D;if(this._weekdaysParseExact)return rP.call(this,u,d,f);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),g=0;g<7;g++){if(E=y([2e3,1]).day(g),f&&!this._fullWeekdaysParse[g]&&(this._fullWeekdaysParse[g]=new RegExp("^"+this.weekdays(E,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[g]=new RegExp("^"+this.weekdaysShort(E,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[g]=new RegExp("^"+this.weekdaysMin(E,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[g]||(D="^"+this.weekdays(E,"")+"|^"+this.weekdaysShort(E,"")+"|^"+this.weekdaysMin(E,""),this._weekdaysParse[g]=new RegExp(D.replace(".",""),"i")),f&&d==="dddd"&&this._fullWeekdaysParse[g].test(u))return g;if(f&&d==="ddd"&&this._shortWeekdaysParse[g].test(u))return g;if(f&&d==="dd"&&this._minWeekdaysParse[g].test(u))return g;if(!f&&this._weekdaysParse[g].test(u))return g}}function sP(u){if(!this.isValid())return u!=null?this:NaN;var d=this._isUTC?this._d.getUTCDay():this._d.getDay();return u!=null?(u=GR(u,this.localeData()),this.add(u-d,"d")):d}function oP(u){if(!this.isValid())return u!=null?this:NaN;var d=(this.day()+7-this.localeData()._week.dow)%7;return u==null?d:this.add(u-d,"d")}function aP(u){if(!this.isValid())return u!=null?this:NaN;if(u!=null){var d=qR(u,this.localeData());return this.day(this.day()%7?d:d-7)}else return this.day()||7}function lP(u){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||jg.call(this),u?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=XR),this._weekdaysStrictRegex&&u?this._weekdaysStrictRegex:this._weekdaysRegex)}function uP(u){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||jg.call(this),u?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=JR),this._weekdaysShortStrictRegex&&u?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function cP(u){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||jg.call(this),u?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ZR),this._weekdaysMinStrictRegex&&u?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function jg(){function u(Nn,Ti){return Ti.length-Nn.length}var d=[],f=[],g=[],E=[],D,L,de,Ae,Ze;for(D=0;D<7;D++)L=y([2e3,1]).day(D),de=Xn(this.weekdaysMin(L,"")),Ae=Xn(this.weekdaysShort(L,"")),Ze=Xn(this.weekdays(L,"")),d.push(de),f.push(Ae),g.push(Ze),E.push(de),E.push(Ae),E.push(Ze);d.sort(u),f.sort(u),g.sort(u),E.sort(u),this._weekdaysRegex=new RegExp("^("+E.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+d.join("|")+")","i")}function Yg(){return this.hours()%12||12}function dP(){return this.hours()||24}z("H",["HH",2],0,"hour"),z("h",["hh",2],0,Yg),z("k",["kk",2],0,dP),z("hmm",0,0,function(){return""+Yg.apply(this)+M(this.minutes(),2)}),z("hmmss",0,0,function(){return""+Yg.apply(this)+M(this.minutes(),2)+M(this.seconds(),2)}),z("Hmm",0,0,function(){return""+this.hours()+M(this.minutes(),2)}),z("Hmmss",0,0,function(){return""+this.hours()+M(this.minutes(),2)+M(this.seconds(),2)});function bC(u,d){z(u,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),d)})}bC("a",!0),bC("A",!1),Dt("hour","h"),Ne("hour",13);function DC(u,d){return d._meridiemParse}ie("a",DC),ie("A",DC),ie("H",it),ie("h",it),ie("k",it),ie("HH",it,Qn),ie("hh",it,Qn),ie("kk",it,Qn),ie("hmm",yC),ie("hmmss",vC),ie("Hmm",yC),ie("Hmmss",vC),Je(["H","HH"],zt),Je(["k","kk"],function(u,d,f){var g=Oe(u);d[zt]=g===24?0:g}),Je(["a","A"],function(u,d,f){f._isPm=f._locale.isPM(u),f._meridiem=u}),Je(["h","hh"],function(u,d,f){d[zt]=Oe(u),k(f).bigHour=!0}),Je("hmm",function(u,d,f){var g=u.length-2;d[zt]=Oe(u.substr(0,g)),d[Dr]=Oe(u.substr(g)),k(f).bigHour=!0}),Je("hmmss",function(u,d,f){var g=u.length-4,E=u.length-2;d[zt]=Oe(u.substr(0,g)),d[Dr]=Oe(u.substr(g,2)),d[_i]=Oe(u.substr(E)),k(f).bigHour=!0}),Je("Hmm",function(u,d,f){var g=u.length-2;d[zt]=Oe(u.substr(0,g)),d[Dr]=Oe(u.substr(g))}),Je("Hmmss",function(u,d,f){var g=u.length-4,E=u.length-2;d[zt]=Oe(u.substr(0,g)),d[Dr]=Oe(u.substr(g,2)),d[_i]=Oe(u.substr(E))});function hP(u){return(u+"").toLowerCase().charAt(0)==="p"}var fP=/[ap]\.?m?\.?/i,pP=xa("Hours",!0);function mP(u,d,f){return u>11?f?"pm":"PM":f?"am":"AM"}var IC={calendar:$,longDateFormat:me,invalidDate:_e,ordinal:be,dayOfMonthOrdinalParse:Ee,relativeTime:Le,months:IR,monthsShort:wC,week:VR,weekdays:KR,weekdaysMin:QR,weekdaysShort:TC,meridiemParse:fP},ht={},fu={},pu;function gP(u,d){var f,g=Math.min(u.length,d.length);for(f=0;f<g;f+=1)if(u[f]!==d[f])return f;return g}function AC(u){return u&&u.toLowerCase().replace("_","-")}function yP(u){for(var d=0,f,g,E,D;d<u.length;){for(D=AC(u[d]).split("-"),f=D.length,g=AC(u[d+1]),g=g?g.split("-"):null;f>0;){if(E=th(D.slice(0,f).join("-")),E)return E;if(g&&g.length>=f&&gP(D,g)>=f-1)break;f--}d++}return pu}function vP(u){return u.match("^[^/\\\\]*$")!=null}function th(u){var d=null,f;if(ht[u]===void 0&&!0&&e&&e.exports&&vP(u))try{d=pu._abbr,f=Kk,f("./locale/"+u),hs(d)}catch{ht[u]=null}return ht[u]}function hs(u,d){var f;return u&&(c(d)?f=Ci(u):f=Wg(u,d),f?pu=f:typeof console!="undefined"&&console.warn&&console.warn("Locale "+u+" not found. Did you forget to load it?")),pu._abbr}function Wg(u,d){if(d!==null){var f,g=IC;if(d.abbr=u,ht[u]!=null)J("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),g=ht[u]._config;else if(d.parentLocale!=null)if(ht[d.parentLocale]!=null)g=ht[d.parentLocale]._config;else if(f=th(d.parentLocale),f!=null)g=f._config;else return fu[d.parentLocale]||(fu[d.parentLocale]=[]),fu[d.parentLocale].push({name:u,config:d}),null;return ht[u]=new Te(oe(g,d)),fu[u]&&fu[u].forEach(function(E){Wg(E.name,E.config)}),hs(u),ht[u]}else return delete ht[u],null}function wP(u,d){if(d!=null){var f,g,E=IC;ht[u]!=null&&ht[u].parentLocale!=null?ht[u].set(oe(ht[u]._config,d)):(g=th(u),g!=null&&(E=g._config),d=oe(E,d),g==null&&(d.abbr=u),f=new Te(d),f.parentLocale=ht[u],ht[u]=f),hs(u)}else ht[u]!=null&&(ht[u].parentLocale!=null?(ht[u]=ht[u].parentLocale,u===hs()&&hs(u)):ht[u]!=null&&delete ht[u]);return ht[u]}function Ci(u){var d;if(u&&u._locale&&u._locale._abbr&&(u=u._locale._abbr),!u)return pu;if(!s(u)){if(d=th(u),d)return d;u=[u]}return yP(u)}function _P(){return ge(ht)}function Hg(u){var d,f=u._a;return f&&k(u).overflow===-2&&(d=f[wi]<0||f[wi]>11?wi:f[Gr]<1||f[Gr]>Zd(f[hn],f[wi])?Gr:f[zt]<0||f[zt]>24||f[zt]===24&&(f[Dr]!==0||f[_i]!==0||f[_o]!==0)?zt:f[Dr]<0||f[Dr]>59?Dr:f[_i]<0||f[_i]>59?_i:f[_o]<0||f[_o]>999?_o:-1,k(u)._overflowDayOfYear&&(d<hn||d>Gr)&&(d=Gr),k(u)._overflowWeeks&&d===-1&&(d=TR),k(u)._overflowWeekday&&d===-1&&(d=bR),k(u).overflow=d),u}var xP=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,CP=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,SP=/Z|[+-]\d\d(?::?\d\d)?/,nh=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Gg=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],EP=/^\/?Date\((-?\d+)/i,kP=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,TP={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function NC(u){var d,f,g=u._i,E=xP.exec(g)||CP.exec(g),D,L,de,Ae,Ze=nh.length,Nn=Gg.length;if(E){for(k(u).iso=!0,d=0,f=Ze;d<f;d++)if(nh[d][1].exec(E[1])){L=nh[d][0],D=nh[d][2]!==!1;break}if(L==null){u._isValid=!1;return}if(E[3]){for(d=0,f=Nn;d<f;d++)if(Gg[d][1].exec(E[3])){de=(E[2]||" ")+Gg[d][0];break}if(de==null){u._isValid=!1;return}}if(!D&&de!=null){u._isValid=!1;return}if(E[4])if(SP.exec(E[4]))Ae="Z";else{u._isValid=!1;return}u._f=L+(de||"")+(Ae||""),Kg(u)}else u._isValid=!1}function bP(u,d,f,g,E,D){var L=[DP(u),wC.indexOf(d),parseInt(f,10),parseInt(g,10),parseInt(E,10)];return D&&L.push(parseInt(D,10)),L}function DP(u){var d=parseInt(u,10);return d<=49?2e3+d:d<=999?1900+d:d}function IP(u){return u.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function AP(u,d,f){if(u){var g=TC.indexOf(u),E=new Date(d[0],d[1],d[2]).getDay();if(g!==E)return k(f).weekdayMismatch=!0,f._isValid=!1,!1}return!0}function NP(u,d,f){if(u)return TP[u];if(d)return 0;var g=parseInt(f,10),E=g%100,D=(g-E)/100;return D*60+E}function OC(u){var d=kP.exec(IP(u._i)),f;if(d){if(f=bP(d[4],d[3],d[2],d[5],d[6],d[7]),!AP(d[1],f,u))return;u._a=f,u._tzm=NP(d[8],d[9],d[10]),u._d=du.apply(null,u._a),u._d.setUTCMinutes(u._d.getUTCMinutes()-u._tzm),k(u).rfc2822=!0}else u._isValid=!1}function OP(u){var d=EP.exec(u._i);if(d!==null){u._d=new Date(+d[1]);return}if(NC(u),u._isValid===!1)delete u._isValid;else return;if(OC(u),u._isValid===!1)delete u._isValid;else return;u._strict?u._isValid=!1:r.createFromInputFallback(u)}r.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(u){u._d=new Date(u._i+(u._useUTC?" UTC":""))});function Sa(u,d,f){return u!=null?u:d!=null?d:f}function RP(u){var d=new Date(r.now());return u._useUTC?[d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()]:[d.getFullYear(),d.getMonth(),d.getDate()]}function qg(u){var d,f,g=[],E,D,L;if(!u._d){for(E=RP(u),u._w&&u._a[Gr]==null&&u._a[wi]==null&&PP(u),u._dayOfYear!=null&&(L=Sa(u._a[hn],E[hn]),(u._dayOfYear>cu(L)||u._dayOfYear===0)&&(k(u)._overflowDayOfYear=!0),f=du(L,0,u._dayOfYear),u._a[wi]=f.getUTCMonth(),u._a[Gr]=f.getUTCDate()),d=0;d<3&&u._a[d]==null;++d)u._a[d]=g[d]=E[d];for(;d<7;d++)u._a[d]=g[d]=u._a[d]==null?d===2?1:0:u._a[d];u._a[zt]===24&&u._a[Dr]===0&&u._a[_i]===0&&u._a[_o]===0&&(u._nextDay=!0,u._a[zt]=0),u._d=(u._useUTC?du:BR).apply(null,g),D=u._useUTC?u._d.getUTCDay():u._d.getDay(),u._tzm!=null&&u._d.setUTCMinutes(u._d.getUTCMinutes()-u._tzm),u._nextDay&&(u._a[zt]=24),u._w&&typeof u._w.d!="undefined"&&u._w.d!==D&&(k(u).weekdayMismatch=!0)}}function PP(u){var d,f,g,E,D,L,de,Ae,Ze;d=u._w,d.GG!=null||d.W!=null||d.E!=null?(D=1,L=4,f=Sa(d.GG,u._a[hn],hu(st(),1,4).year),g=Sa(d.W,1),E=Sa(d.E,1),(E<1||E>7)&&(Ae=!0)):(D=u._locale._week.dow,L=u._locale._week.doy,Ze=hu(st(),D,L),f=Sa(d.gg,u._a[hn],Ze.year),g=Sa(d.w,Ze.week),d.d!=null?(E=d.d,(E<0||E>6)&&(Ae=!0)):d.e!=null?(E=d.e+D,(d.e<0||d.e>6)&&(Ae=!0)):E=D),g<1||g>xi(f,D,L)?k(u)._overflowWeeks=!0:Ae!=null?k(u)._overflowWeekday=!0:(de=kC(f,g,E,D,L),u._a[hn]=de.year,u._dayOfYear=de.dayOfYear)}r.ISO_8601=function(){},r.RFC_2822=function(){};function Kg(u){if(u._f===r.ISO_8601){NC(u);return}if(u._f===r.RFC_2822){OC(u);return}u._a=[],k(u).empty=!0;var d=""+u._i,f,g,E,D,L,de=d.length,Ae=0,Ze,Nn;for(E=we(u._f,u._locale).match(ee)||[],Nn=E.length,f=0;f<Nn;f++)D=E[f],g=(d.match(SR(D,u))||[])[0],g&&(L=d.substr(0,d.indexOf(g)),L.length>0&&k(u).unusedInput.push(L),d=d.slice(d.indexOf(g)+g.length),Ae+=g.length),Y[D]?(g?k(u).empty=!1:k(u).unusedTokens.push(D),kR(D,g,u)):u._strict&&!g&&k(u).unusedTokens.push(D);k(u).charsLeftOver=de-Ae,d.length>0&&k(u).unusedInput.push(d),u._a[zt]<=12&&k(u).bigHour===!0&&u._a[zt]>0&&(k(u).bigHour=void 0),k(u).parsedDateParts=u._a.slice(0),k(u).meridiem=u._meridiem,u._a[zt]=MP(u._locale,u._a[zt],u._meridiem),Ze=k(u).era,Ze!==null&&(u._a[hn]=u._locale.erasConvertYear(Ze,u._a[hn])),qg(u),Hg(u)}function MP(u,d,f){var g;return f==null?d:u.meridiemHour!=null?u.meridiemHour(d,f):(u.isPM!=null&&(g=u.isPM(f),g&&d<12&&(d+=12),!g&&d===12&&(d=0)),d)}function LP(u){var d,f,g,E,D,L,de=!1,Ae=u._f.length;if(Ae===0){k(u).invalidFormat=!0,u._d=new Date(NaN);return}for(E=0;E<Ae;E++)D=0,L=!1,d=P({},u),u._useUTC!=null&&(d._useUTC=u._useUTC),d._f=u._f[E],Kg(d),v(d)&&(L=!0),D+=k(d).charsLeftOver,D+=k(d).unusedTokens.length*10,k(d).score=D,de?D<g&&(g=D,f=d):(g==null||D<g||L)&&(g=D,f=d,L&&(de=!0));x(u,f||d)}function $P(u){if(!u._d){var d=An(u._i),f=d.day===void 0?d.date:d.day;u._a=m([d.year,d.month,f,d.hour,d.minute,d.second,d.millisecond],function(g){return g&&parseInt(g,10)}),qg(u)}}function FP(u){var d=new N(Hg(RC(u)));return d._nextDay&&(d.add(1,"d"),d._nextDay=void 0),d}function RC(u){var d=u._i,f=u._f;return u._locale=u._locale||Ci(u._l),d===null||f===void 0&&d===""?S({nullInput:!0}):(typeof d=="string"&&(u._i=d=u._locale.preparse(d)),O(d)?new N(Hg(d)):(p(d)?u._d=d:s(f)?LP(u):f?Kg(u):UP(u),v(u)||(u._d=null),u))}function UP(u){var d=u._i;c(d)?u._d=new Date(r.now()):p(d)?u._d=new Date(d.valueOf()):typeof d=="string"?OP(u):s(d)?(u._a=m(d.slice(0),function(f){return parseInt(f,10)}),qg(u)):o(d)?$P(u):h(d)?u._d=new Date(d):r.createFromInputFallback(u)}function PC(u,d,f,g,E){var D={};return(d===!0||d===!1)&&(g=d,d=void 0),(f===!0||f===!1)&&(g=f,f=void 0),(o(u)&&l(u)||s(u)&&u.length===0)&&(u=void 0),D._isAMomentObject=!0,D._useUTC=D._isUTC=E,D._l=f,D._i=u,D._f=d,D._strict=g,FP(D)}function st(u,d,f,g){return PC(u,d,f,g,!1)}var BP=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var u=st.apply(null,arguments);return this.isValid()&&u.isValid()?u<this?this:u:S()}),zP=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var u=st.apply(null,arguments);return this.isValid()&&u.isValid()?u>this?this:u:S()});function MC(u,d){var f,g;if(d.length===1&&s(d[0])&&(d=d[0]),!d.length)return st();for(f=d[0],g=1;g<d.length;++g)(!d[g].isValid()||d[g][u](f))&&(f=d[g]);return f}function VP(){var u=[].slice.call(arguments,0);return MC("isBefore",u)}function jP(){var u=[].slice.call(arguments,0);return MC("isAfter",u)}var YP=function(){return Date.now?Date.now():+new Date},mu=["year","quarter","month","week","day","hour","minute","second","millisecond"];function WP(u){var d,f=!1,g,E=mu.length;for(d in u)if(a(u,d)&&!(At.call(mu,d)!==-1&&(u[d]==null||!isNaN(u[d]))))return!1;for(g=0;g<E;++g)if(u[mu[g]]){if(f)return!1;parseFloat(u[mu[g]])!==Oe(u[mu[g]])&&(f=!0)}return!0}function HP(){return this._isValid}function GP(){return Ir(NaN)}function rh(u){var d=An(u),f=d.year||0,g=d.quarter||0,E=d.month||0,D=d.week||d.isoWeek||0,L=d.day||0,de=d.hour||0,Ae=d.minute||0,Ze=d.second||0,Nn=d.millisecond||0;this._isValid=WP(d),this._milliseconds=+Nn+Ze*1e3+Ae*6e4+de*1e3*60*60,this._days=+L+D*7,this._months=+E+g*3+f*12,this._data={},this._locale=Ci(),this._bubble()}function ih(u){return u instanceof rh}function Qg(u){return u<0?Math.round(-1*u)*-1:Math.round(u)}function qP(u,d,f){var g=Math.min(u.length,d.length),E=Math.abs(u.length-d.length),D=0,L;for(L=0;L<g;L++)(f&&u[L]!==d[L]||!f&&Oe(u[L])!==Oe(d[L]))&&D++;return D+E}function LC(u,d){z(u,0,0,function(){var f=this.utcOffset(),g="+";return f<0&&(f=-f,g="-"),g+M(~~(f/60),2)+d+M(~~f%60,2)})}LC("Z",":"),LC("ZZ",""),ie("Z",Xd),ie("ZZ",Xd),Je(["Z","ZZ"],function(u,d,f){f._useUTC=!0,f._tzm=Xg(Xd,u)});var KP=/([\+\-]|\d\d)/gi;function Xg(u,d){var f=(d||"").match(u),g,E,D;return f===null?null:(g=f[f.length-1]||[],E=(g+"").match(KP)||["-",0,0],D=+(E[1]*60)+Oe(E[2]),D===0?0:E[0]==="+"?D:-D)}function Jg(u,d){var f,g;return d._isUTC?(f=d.clone(),g=(O(u)||p(u)?u.valueOf():st(u).valueOf())-f.valueOf(),f._d.setTime(f._d.valueOf()+g),r.updateOffset(f,!1),f):st(u).local()}function Zg(u){return-Math.round(u._d.getTimezoneOffset())}r.updateOffset=function(){};function QP(u,d,f){var g=this._offset||0,E;if(!this.isValid())return u!=null?this:NaN;if(u!=null){if(typeof u=="string"){if(u=Xg(Xd,u),u===null)return this}else Math.abs(u)<16&&!f&&(u=u*60);return!this._isUTC&&d&&(E=Zg(this)),this._offset=u,this._isUTC=!0,E!=null&&this.add(E,"m"),g!==u&&(!d||this._changeInProgress?BC(this,Ir(u-g,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?g:Zg(this)}function XP(u,d){return u!=null?(typeof u!="string"&&(u=-u),this.utcOffset(u,d),this):-this.utcOffset()}function JP(u){return this.utcOffset(0,u)}function ZP(u){return this._isUTC&&(this.utcOffset(0,u),this._isUTC=!1,u&&this.subtract(Zg(this),"m")),this}function eM(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var u=Xg(xR,this._i);u!=null?this.utcOffset(u):this.utcOffset(0,!0)}return this}function tM(u){return this.isValid()?(u=u?st(u).utcOffset():0,(this.utcOffset()-u)%60===0):!1}function nM(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function rM(){if(!c(this._isDSTShifted))return this._isDSTShifted;var u={},d;return P(u,this),u=RC(u),u._a?(d=u._isUTC?y(u._a):st(u._a),this._isDSTShifted=this.isValid()&&qP(u._a,d.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function iM(){return this.isValid()?!this._isUTC:!1}function sM(){return this.isValid()?this._isUTC:!1}function $C(){return this.isValid()?this._isUTC&&this._offset===0:!1}var oM=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,aM=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ir(u,d){var f=u,g=null,E,D,L;return ih(u)?f={ms:u._milliseconds,d:u._days,M:u._months}:h(u)||!isNaN(+u)?(f={},d?f[d]=+u:f.milliseconds=+u):(g=oM.exec(u))?(E=g[1]==="-"?-1:1,f={y:0,d:Oe(g[Gr])*E,h:Oe(g[zt])*E,m:Oe(g[Dr])*E,s:Oe(g[_i])*E,ms:Oe(Qg(g[_o]*1e3))*E}):(g=aM.exec(u))?(E=g[1]==="-"?-1:1,f={y:xo(g[2],E),M:xo(g[3],E),w:xo(g[4],E),d:xo(g[5],E),h:xo(g[6],E),m:xo(g[7],E),s:xo(g[8],E)}):f==null?f={}:typeof f=="object"&&("from"in f||"to"in f)&&(L=lM(st(f.from),st(f.to)),f={},f.ms=L.milliseconds,f.M=L.months),D=new rh(f),ih(u)&&a(u,"_locale")&&(D._locale=u._locale),ih(u)&&a(u,"_isValid")&&(D._isValid=u._isValid),D}Ir.fn=rh.prototype,Ir.invalid=GP;function xo(u,d){var f=u&&parseFloat(u.replace(",","."));return(isNaN(f)?0:f)*d}function FC(u,d){var f={};return f.months=d.month()-u.month()+(d.year()-u.year())*12,u.clone().add(f.months,"M").isAfter(d)&&--f.months,f.milliseconds=+d-+u.clone().add(f.months,"M"),f}function lM(u,d){var f;return u.isValid()&&d.isValid()?(d=Jg(d,u),u.isBefore(d)?f=FC(u,d):(f=FC(d,u),f.milliseconds=-f.milliseconds,f.months=-f.months),f):{milliseconds:0,months:0}}function UC(u,d){return function(f,g){var E,D;return g!==null&&!isNaN(+g)&&(J(d,"moment()."+d+"(period, number) is deprecated. Please use moment()."+d+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),D=f,f=g,g=D),E=Ir(f,g),BC(this,E,u),this}}function BC(u,d,f,g){var E=d._milliseconds,D=Qg(d._days),L=Qg(d._months);!u.isValid()||(g=g==null?!0:g,L&&xC(u,Hd(u,"Month")+L*f),D&&pC(u,"Date",Hd(u,"Date")+D*f),E&&u._d.setTime(u._d.valueOf()+E*f),g&&r.updateOffset(u,D||L))}var uM=UC(1,"add"),cM=UC(-1,"subtract");function zC(u){return typeof u=="string"||u instanceof String}function dM(u){return O(u)||p(u)||zC(u)||h(u)||fM(u)||hM(u)||u===null||u===void 0}function hM(u){var d=o(u)&&!l(u),f=!1,g=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],E,D,L=g.length;for(E=0;E<L;E+=1)D=g[E],f=f||a(u,D);return d&&f}function fM(u){var d=s(u),f=!1;return d&&(f=u.filter(function(g){return!h(g)&&zC(u)}).length===0),d&&f}function pM(u){var d=o(u)&&!l(u),f=!1,g=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],E,D;for(E=0;E<g.length;E+=1)D=g[E],f=f||a(u,D);return d&&f}function mM(u,d){var f=u.diff(d,"days",!0);return f<-6?"sameElse":f<-1?"lastWeek":f<0?"lastDay":f<1?"sameDay":f<2?"nextDay":f<7?"nextWeek":"sameElse"}function gM(u,d){arguments.length===1&&(arguments[0]?dM(arguments[0])?(u=arguments[0],d=void 0):pM(arguments[0])&&(d=arguments[0],u=void 0):(u=void 0,d=void 0));var f=u||st(),g=Jg(f,this).startOf("day"),E=r.calendarFormat(this,g)||"sameElse",D=d&&(X(d[E])?d[E].call(this,f):d[E]);return this.format(D||this.localeData().calendar(E,this,st(f)))}function yM(){return new N(this)}function vM(u,d){var f=O(u)?u:st(u);return this.isValid()&&f.isValid()?(d=Qt(d)||"millisecond",d==="millisecond"?this.valueOf()>f.valueOf():f.valueOf()<this.clone().startOf(d).valueOf()):!1}function wM(u,d){var f=O(u)?u:st(u);return this.isValid()&&f.isValid()?(d=Qt(d)||"millisecond",d==="millisecond"?this.valueOf()<f.valueOf():this.clone().endOf(d).valueOf()<f.valueOf()):!1}function _M(u,d,f,g){var E=O(u)?u:st(u),D=O(d)?d:st(d);return this.isValid()&&E.isValid()&&D.isValid()?(g=g||"()",(g[0]==="("?this.isAfter(E,f):!this.isBefore(E,f))&&(g[1]===")"?this.isBefore(D,f):!this.isAfter(D,f))):!1}function xM(u,d){var f=O(u)?u:st(u),g;return this.isValid()&&f.isValid()?(d=Qt(d)||"millisecond",d==="millisecond"?this.valueOf()===f.valueOf():(g=f.valueOf(),this.clone().startOf(d).valueOf()<=g&&g<=this.clone().endOf(d).valueOf())):!1}function CM(u,d){return this.isSame(u,d)||this.isAfter(u,d)}function SM(u,d){return this.isSame(u,d)||this.isBefore(u,d)}function EM(u,d,f){var g,E,D;if(!this.isValid())return NaN;if(g=Jg(u,this),!g.isValid())return NaN;switch(E=(g.utcOffset()-this.utcOffset())*6e4,d=Qt(d),d){case"year":D=sh(this,g)/12;break;case"month":D=sh(this,g);break;case"quarter":D=sh(this,g)/3;break;case"second":D=(this-g)/1e3;break;case"minute":D=(this-g)/6e4;break;case"hour":D=(this-g)/36e5;break;case"day":D=(this-g-E)/864e5;break;case"week":D=(this-g-E)/6048e5;break;default:D=this-g}return f?D:It(D)}function sh(u,d){if(u.date()<d.date())return-sh(d,u);var f=(d.year()-u.year())*12+(d.month()-u.month()),g=u.clone().add(f,"months"),E,D;return d-g<0?(E=u.clone().add(f-1,"months"),D=(d-g)/(g-E)):(E=u.clone().add(f+1,"months"),D=(d-g)/(E-g)),-(f+D)||0}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function kM(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function TM(u){if(!this.isValid())return null;var d=u!==!0,f=d?this.clone().utc():this;return f.year()<0||f.year()>9999?W(f,d?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):X(Date.prototype.toISOString)?d?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",W(f,"Z")):W(f,d?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function bM(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var u="moment",d="",f,g,E,D;return this.isLocal()||(u=this.utcOffset()===0?"moment.utc":"moment.parseZone",d="Z"),f="["+u+'("]',g=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",E="-MM-DD[T]HH:mm:ss.SSS",D=d+'[")]',this.format(f+g+E+D)}function DM(u){u||(u=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var d=W(this,u);return this.localeData().postformat(d)}function IM(u,d){return this.isValid()&&(O(u)&&u.isValid()||st(u).isValid())?Ir({to:this,from:u}).locale(this.locale()).humanize(!d):this.localeData().invalidDate()}function AM(u){return this.from(st(),u)}function NM(u,d){return this.isValid()&&(O(u)&&u.isValid()||st(u).isValid())?Ir({from:this,to:u}).locale(this.locale()).humanize(!d):this.localeData().invalidDate()}function OM(u){return this.to(st(),u)}function VC(u){var d;return u===void 0?this._locale._abbr:(d=Ci(u),d!=null&&(this._locale=d),this)}var jC=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(u){return u===void 0?this.localeData():this.locale(u)});function YC(){return this._locale}var oh=1e3,Ea=60*oh,ah=60*Ea,WC=(365*400+97)*24*ah;function ka(u,d){return(u%d+d)%d}function HC(u,d,f){return u<100&&u>=0?new Date(u+400,d,f)-WC:new Date(u,d,f).valueOf()}function GC(u,d,f){return u<100&&u>=0?Date.UTC(u+400,d,f)-WC:Date.UTC(u,d,f)}function RM(u){var d,f;if(u=Qt(u),u===void 0||u==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?GC:HC,u){case"year":d=f(this.year(),0,1);break;case"quarter":d=f(this.year(),this.month()-this.month()%3,1);break;case"month":d=f(this.year(),this.month(),1);break;case"week":d=f(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":d=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":d=f(this.year(),this.month(),this.date());break;case"hour":d=this._d.valueOf(),d-=ka(d+(this._isUTC?0:this.utcOffset()*Ea),ah);break;case"minute":d=this._d.valueOf(),d-=ka(d,Ea);break;case"second":d=this._d.valueOf(),d-=ka(d,oh);break}return this._d.setTime(d),r.updateOffset(this,!0),this}function PM(u){var d,f;if(u=Qt(u),u===void 0||u==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?GC:HC,u){case"year":d=f(this.year()+1,0,1)-1;break;case"quarter":d=f(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":d=f(this.year(),this.month()+1,1)-1;break;case"week":d=f(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":d=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":d=f(this.year(),this.month(),this.date()+1)-1;break;case"hour":d=this._d.valueOf(),d+=ah-ka(d+(this._isUTC?0:this.utcOffset()*Ea),ah)-1;break;case"minute":d=this._d.valueOf(),d+=Ea-ka(d,Ea)-1;break;case"second":d=this._d.valueOf(),d+=oh-ka(d,oh)-1;break}return this._d.setTime(d),r.updateOffset(this,!0),this}function MM(){return this._d.valueOf()-(this._offset||0)*6e4}function LM(){return Math.floor(this.valueOf()/1e3)}function $M(){return new Date(this.valueOf())}function FM(){var u=this;return[u.year(),u.month(),u.date(),u.hour(),u.minute(),u.second(),u.millisecond()]}function UM(){var u=this;return{years:u.year(),months:u.month(),date:u.date(),hours:u.hours(),minutes:u.minutes(),seconds:u.seconds(),milliseconds:u.milliseconds()}}function BM(){return this.isValid()?this.toISOString():null}function zM(){return v(this)}function VM(){return x({},k(this))}function jM(){return k(this).overflow}function YM(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}z("N",0,0,"eraAbbr"),z("NN",0,0,"eraAbbr"),z("NNN",0,0,"eraAbbr"),z("NNNN",0,0,"eraName"),z("NNNNN",0,0,"eraNarrow"),z("y",["y",1],"yo","eraYear"),z("y",["yy",2],0,"eraYear"),z("y",["yyy",3],0,"eraYear"),z("y",["yyyy",4],0,"eraYear"),ie("N",e0),ie("NN",e0),ie("NNN",e0),ie("NNNN",t3),ie("NNNNN",n3),Je(["N","NN","NNN","NNNN","NNNNN"],function(u,d,f,g){var E=f._locale.erasParse(u,g,f._strict);E?k(f).era=E:k(f).invalidEra=u}),ie("y",Ca),ie("yy",Ca),ie("yyy",Ca),ie("yyyy",Ca),ie("yo",r3),Je(["y","yy","yyy","yyyy"],hn),Je(["yo"],function(u,d,f,g){var E;f._locale._eraYearOrdinalRegex&&(E=u.match(f._locale._eraYearOrdinalRegex)),f._locale.eraYearOrdinalParse?d[hn]=f._locale.eraYearOrdinalParse(u,E):d[hn]=parseInt(u,10)});function WM(u,d){var f,g,E,D=this._eras||Ci("en")._eras;for(f=0,g=D.length;f<g;++f){switch(typeof D[f].since){case"string":E=r(D[f].since).startOf("day"),D[f].since=E.valueOf();break}switch(typeof D[f].until){case"undefined":D[f].until=1/0;break;case"string":E=r(D[f].until).startOf("day").valueOf(),D[f].until=E.valueOf();break}}return D}function HM(u,d,f){var g,E,D=this.eras(),L,de,Ae;for(u=u.toUpperCase(),g=0,E=D.length;g<E;++g)if(L=D[g].name.toUpperCase(),de=D[g].abbr.toUpperCase(),Ae=D[g].narrow.toUpperCase(),f)switch(d){case"N":case"NN":case"NNN":if(de===u)return D[g];break;case"NNNN":if(L===u)return D[g];break;case"NNNNN":if(Ae===u)return D[g];break}else if([L,de,Ae].indexOf(u)>=0)return D[g]}function GM(u,d){var f=u.since<=u.until?1:-1;return d===void 0?r(u.since).year():r(u.since).year()+(d-u.offset)*f}function qM(){var u,d,f,g=this.localeData().eras();for(u=0,d=g.length;u<d;++u)if(f=this.clone().startOf("day").valueOf(),g[u].since<=f&&f<=g[u].until||g[u].until<=f&&f<=g[u].since)return g[u].name;return""}function KM(){var u,d,f,g=this.localeData().eras();for(u=0,d=g.length;u<d;++u)if(f=this.clone().startOf("day").valueOf(),g[u].since<=f&&f<=g[u].until||g[u].until<=f&&f<=g[u].since)return g[u].narrow;return""}function QM(){var u,d,f,g=this.localeData().eras();for(u=0,d=g.length;u<d;++u)if(f=this.clone().startOf("day").valueOf(),g[u].since<=f&&f<=g[u].until||g[u].until<=f&&f<=g[u].since)return g[u].abbr;return""}function XM(){var u,d,f,g,E=this.localeData().eras();for(u=0,d=E.length;u<d;++u)if(f=E[u].since<=E[u].until?1:-1,g=this.clone().startOf("day").valueOf(),E[u].since<=g&&g<=E[u].until||E[u].until<=g&&g<=E[u].since)return(this.year()-r(E[u].since).year())*f+E[u].offset;return this.year()}function JM(u){return a(this,"_erasNameRegex")||t0.call(this),u?this._erasNameRegex:this._erasRegex}function ZM(u){return a(this,"_erasAbbrRegex")||t0.call(this),u?this._erasAbbrRegex:this._erasRegex}function e3(u){return a(this,"_erasNarrowRegex")||t0.call(this),u?this._erasNarrowRegex:this._erasRegex}function e0(u,d){return d.erasAbbrRegex(u)}function t3(u,d){return d.erasNameRegex(u)}function n3(u,d){return d.erasNarrowRegex(u)}function r3(u,d){return d._eraYearOrdinalRegex||Ca}function t0(){var u=[],d=[],f=[],g=[],E,D,L=this.eras();for(E=0,D=L.length;E<D;++E)d.push(Xn(L[E].name)),u.push(Xn(L[E].abbr)),f.push(Xn(L[E].narrow)),g.push(Xn(L[E].name)),g.push(Xn(L[E].abbr)),g.push(Xn(L[E].narrow));this._erasRegex=new RegExp("^("+g.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+d.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+u.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+f.join("|")+")","i")}z(0,["gg",2],0,function(){return this.weekYear()%100}),z(0,["GG",2],0,function(){return this.isoWeekYear()%100});function lh(u,d){z(0,[u,u.length],0,d)}lh("gggg","weekYear"),lh("ggggg","weekYear"),lh("GGGG","isoWeekYear"),lh("GGGGG","isoWeekYear"),Dt("weekYear","gg"),Dt("isoWeekYear","GG"),Ne("weekYear",1),Ne("isoWeekYear",1),ie("G",Qd),ie("g",Qd),ie("GG",it,Qn),ie("gg",it,Qn),ie("GGGG",Bg,Ug),ie("gggg",Bg,Ug),ie("GGGGG",Kd,Gd),ie("ggggg",Kd,Gd),uu(["gggg","ggggg","GGGG","GGGGG"],function(u,d,f,g){d[g.substr(0,2)]=Oe(u)}),uu(["gg","GG"],function(u,d,f,g){d[g]=r.parseTwoDigitYear(u)});function i3(u){return qC.call(this,u,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function s3(u){return qC.call(this,u,this.isoWeek(),this.isoWeekday(),1,4)}function o3(){return xi(this.year(),1,4)}function a3(){return xi(this.isoWeekYear(),1,4)}function l3(){var u=this.localeData()._week;return xi(this.year(),u.dow,u.doy)}function u3(){var u=this.localeData()._week;return xi(this.weekYear(),u.dow,u.doy)}function qC(u,d,f,g,E){var D;return u==null?hu(this,g,E).year:(D=xi(u,g,E),d>D&&(d=D),c3.call(this,u,d,f,g,E))}function c3(u,d,f,g,E){var D=kC(u,d,f,g,E),L=du(D.year,0,D.dayOfYear);return this.year(L.getUTCFullYear()),this.month(L.getUTCMonth()),this.date(L.getUTCDate()),this}z("Q",0,"Qo","quarter"),Dt("quarter","Q"),Ne("quarter",7),ie("Q",mC),Je("Q",function(u,d){d[wi]=(Oe(u)-1)*3});function d3(u){return u==null?Math.ceil((this.month()+1)/3):this.month((u-1)*3+this.month()%3)}z("D",["DD",2],"Do","date"),Dt("date","D"),Ne("date",9),ie("D",it),ie("DD",it,Qn),ie("Do",function(u,d){return u?d._dayOfMonthOrdinalParse||d._ordinalParse:d._dayOfMonthOrdinalParseLenient}),Je(["D","DD"],Gr),Je("Do",function(u,d){d[Gr]=Oe(u.match(it)[0])});var KC=xa("Date",!0);z("DDD",["DDDD",3],"DDDo","dayOfYear"),Dt("dayOfYear","DDD"),Ne("dayOfYear",4),ie("DDD",qd),ie("DDDD",gC),Je(["DDD","DDDD"],function(u,d,f){f._dayOfYear=Oe(u)});function h3(u){var d=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return u==null?d:this.add(u-d,"d")}z("m",["mm",2],0,"minute"),Dt("minute","m"),Ne("minute",14),ie("m",it),ie("mm",it,Qn),Je(["m","mm"],Dr);var f3=xa("Minutes",!1);z("s",["ss",2],0,"second"),Dt("second","s"),Ne("second",15),ie("s",it),ie("ss",it,Qn),Je(["s","ss"],_i);var p3=xa("Seconds",!1);z("S",0,0,function(){return~~(this.millisecond()/100)}),z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),z(0,["SSS",3],0,"millisecond"),z(0,["SSSS",4],0,function(){return this.millisecond()*10}),z(0,["SSSSS",5],0,function(){return this.millisecond()*100}),z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),Dt("millisecond","ms"),Ne("millisecond",16),ie("S",qd,mC),ie("SS",qd,Qn),ie("SSS",qd,gC);var fs,QC;for(fs="SSSS";fs.length<=9;fs+="S")ie(fs,Ca);function m3(u,d){d[_o]=Oe(("0."+u)*1e3)}for(fs="S";fs.length<=9;fs+="S")Je(fs,m3);QC=xa("Milliseconds",!1),z("z",0,0,"zoneAbbr"),z("zz",0,0,"zoneName");function g3(){return this._isUTC?"UTC":""}function y3(){return this._isUTC?"Coordinated Universal Time":""}var q=N.prototype;q.add=uM,q.calendar=gM,q.clone=yM,q.diff=EM,q.endOf=PM,q.format=DM,q.from=IM,q.fromNow=AM,q.to=NM,q.toNow=OM,q.get=wR,q.invalidAt=jM,q.isAfter=vM,q.isBefore=wM,q.isBetween=_M,q.isSame=xM,q.isSameOrAfter=CM,q.isSameOrBefore=SM,q.isValid=zM,q.lang=jC,q.locale=VC,q.localeData=YC,q.max=zP,q.min=BP,q.parsingFlags=VM,q.set=_R,q.startOf=RM,q.subtract=cM,q.toArray=FM,q.toObject=UM,q.toDate=$M,q.toISOString=TM,q.inspect=bM,typeof Symbol!="undefined"&&Symbol.for!=null&&(q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),q.toJSON=BM,q.toString=kM,q.unix=LM,q.valueOf=MM,q.creationData=YM,q.eraName=qM,q.eraNarrow=KM,q.eraAbbr=QM,q.eraYear=XM,q.year=EC,q.isLeapYear=UR,q.weekYear=i3,q.isoWeekYear=s3,q.quarter=q.quarters=d3,q.month=CC,q.daysInMonth=LR,q.week=q.weeks=WR,q.isoWeek=q.isoWeeks=HR,q.weeksInYear=l3,q.weeksInWeekYear=u3,q.isoWeeksInYear=o3,q.isoWeeksInISOWeekYear=a3,q.date=KC,q.day=q.days=sP,q.weekday=oP,q.isoWeekday=aP,q.dayOfYear=h3,q.hour=q.hours=pP,q.minute=q.minutes=f3,q.second=q.seconds=p3,q.millisecond=q.milliseconds=QC,q.utcOffset=QP,q.utc=JP,q.local=ZP,q.parseZone=eM,q.hasAlignedHourOffset=tM,q.isDST=nM,q.isLocal=iM,q.isUtcOffset=sM,q.isUtc=$C,q.isUTC=$C,q.zoneAbbr=g3,q.zoneName=y3,q.dates=F("dates accessor is deprecated. Use date instead.",KC),q.months=F("months accessor is deprecated. Use month instead",CC),q.years=F("years accessor is deprecated. Use year instead",EC),q.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",XP),q.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",rM);function v3(u){return st(u*1e3)}function w3(){return st.apply(null,arguments).parseZone()}function XC(u){return u}var Ve=Te.prototype;Ve.calendar=V,Ve.longDateFormat=Be,Ve.invalidDate=ne,Ve.ordinal=dt,Ve.preparse=XC,Ve.postformat=XC,Ve.relativeTime=Bt,Ve.pastFuture=wo,Ve.set=ue,Ve.eras=WM,Ve.erasParse=HM,Ve.erasConvertYear=GM,Ve.erasAbbrRegex=ZM,Ve.erasNameRegex=JM,Ve.erasNarrowRegex=e3,Ve.months=OR,Ve.monthsShort=RR,Ve.monthsParse=MR,Ve.monthsRegex=FR,Ve.monthsShortRegex=$R,Ve.week=zR,Ve.firstDayOfYear=YR,Ve.firstDayOfWeek=jR,Ve.weekdays=eP,Ve.weekdaysMin=nP,Ve.weekdaysShort=tP,Ve.weekdaysParse=iP,Ve.weekdaysRegex=lP,Ve.weekdaysShortRegex=uP,Ve.weekdaysMinRegex=cP,Ve.isPM=hP,Ve.meridiem=mP;function uh(u,d,f,g){var E=Ci(),D=y().set(g,d);return E[f](D,u)}function JC(u,d,f){if(h(u)&&(d=u,u=void 0),u=u||"",d!=null)return uh(u,d,f,"month");var g,E=[];for(g=0;g<12;g++)E[g]=uh(u,g,f,"month");return E}function n0(u,d,f,g){typeof u=="boolean"?(h(d)&&(f=d,d=void 0),d=d||""):(d=u,f=d,u=!1,h(d)&&(f=d,d=void 0),d=d||"");var E=Ci(),D=u?E._week.dow:0,L,de=[];if(f!=null)return uh(d,(f+D)%7,g,"day");for(L=0;L<7;L++)de[L]=uh(d,(L+D)%7,g,"day");return de}function _3(u,d){return JC(u,d,"months")}function x3(u,d){return JC(u,d,"monthsShort")}function C3(u,d,f){return n0(u,d,f,"weekdays")}function S3(u,d,f){return n0(u,d,f,"weekdaysShort")}function E3(u,d,f){return n0(u,d,f,"weekdaysMin")}hs("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(u){var d=u%10,f=Oe(u%100/10)===1?"th":d===1?"st":d===2?"nd":d===3?"rd":"th";return u+f}}),r.lang=F("moment.lang is deprecated. Use moment.locale instead.",hs),r.langData=F("moment.langData is deprecated. Use moment.localeData instead.",Ci);var Si=Math.abs;function k3(){var u=this._data;return this._milliseconds=Si(this._milliseconds),this._days=Si(this._days),this._months=Si(this._months),u.milliseconds=Si(u.milliseconds),u.seconds=Si(u.seconds),u.minutes=Si(u.minutes),u.hours=Si(u.hours),u.months=Si(u.months),u.years=Si(u.years),this}function ZC(u,d,f,g){var E=Ir(d,f);return u._milliseconds+=g*E._milliseconds,u._days+=g*E._days,u._months+=g*E._months,u._bubble()}function T3(u,d){return ZC(this,u,d,1)}function b3(u,d){return ZC(this,u,d,-1)}function eS(u){return u<0?Math.floor(u):Math.ceil(u)}function D3(){var u=this._milliseconds,d=this._days,f=this._months,g=this._data,E,D,L,de,Ae;return u>=0&&d>=0&&f>=0||u<=0&&d<=0&&f<=0||(u+=eS(r0(f)+d)*864e5,d=0,f=0),g.milliseconds=u%1e3,E=It(u/1e3),g.seconds=E%60,D=It(E/60),g.minutes=D%60,L=It(D/60),g.hours=L%24,d+=It(L/24),Ae=It(tS(d)),f+=Ae,d-=eS(r0(Ae)),de=It(f/12),f%=12,g.days=d,g.months=f,g.years=de,this}function tS(u){return u*4800/146097}function r0(u){return u*146097/4800}function I3(u){if(!this.isValid())return NaN;var d,f,g=this._milliseconds;if(u=Qt(u),u==="month"||u==="quarter"||u==="year")switch(d=this._days+g/864e5,f=this._months+tS(d),u){case"month":return f;case"quarter":return f/3;case"year":return f/12}else switch(d=this._days+Math.round(r0(this._months)),u){case"week":return d/7+g/6048e5;case"day":return d+g/864e5;case"hour":return d*24+g/36e5;case"minute":return d*1440+g/6e4;case"second":return d*86400+g/1e3;case"millisecond":return Math.floor(d*864e5)+g;default:throw new Error("Unknown unit "+u)}}function A3(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Oe(this._months/12)*31536e6:NaN}function Ei(u){return function(){return this.as(u)}}var N3=Ei("ms"),O3=Ei("s"),R3=Ei("m"),P3=Ei("h"),M3=Ei("d"),L3=Ei("w"),$3=Ei("M"),F3=Ei("Q"),U3=Ei("y");function B3(){return Ir(this)}function z3(u){return u=Qt(u),this.isValid()?this[u+"s"]():NaN}function Co(u){return function(){return this.isValid()?this._data[u]:NaN}}var V3=Co("milliseconds"),j3=Co("seconds"),Y3=Co("minutes"),W3=Co("hours"),H3=Co("days"),G3=Co("months"),q3=Co("years");function K3(){return It(this.days()/7)}var ki=Math.round,Ta={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Q3(u,d,f,g,E){return E.relativeTime(d||1,!!f,u,g)}function X3(u,d,f,g){var E=Ir(u).abs(),D=ki(E.as("s")),L=ki(E.as("m")),de=ki(E.as("h")),Ae=ki(E.as("d")),Ze=ki(E.as("M")),Nn=ki(E.as("w")),Ti=ki(E.as("y")),ps=D<=f.ss&&["s",D]||D<f.s&&["ss",D]||L<=1&&["m"]||L<f.m&&["mm",L]||de<=1&&["h"]||de<f.h&&["hh",de]||Ae<=1&&["d"]||Ae<f.d&&["dd",Ae];return f.w!=null&&(ps=ps||Nn<=1&&["w"]||Nn<f.w&&["ww",Nn]),ps=ps||Ze<=1&&["M"]||Ze<f.M&&["MM",Ze]||Ti<=1&&["y"]||["yy",Ti],ps[2]=d,ps[3]=+u>0,ps[4]=g,Q3.apply(null,ps)}function J3(u){return u===void 0?ki:typeof u=="function"?(ki=u,!0):!1}function Z3(u,d){return Ta[u]===void 0?!1:d===void 0?Ta[u]:(Ta[u]=d,u==="s"&&(Ta.ss=d-1),!0)}function e6(u,d){if(!this.isValid())return this.localeData().invalidDate();var f=!1,g=Ta,E,D;return typeof u=="object"&&(d=u,u=!1),typeof u=="boolean"&&(f=u),typeof d=="object"&&(g=Object.assign({},Ta,d),d.s!=null&&d.ss==null&&(g.ss=d.s-1)),E=this.localeData(),D=X3(this,!f,g,E),f&&(D=E.pastFuture(+this,D)),E.postformat(D)}var i0=Math.abs;function ba(u){return(u>0)-(u<0)||+u}function ch(){if(!this.isValid())return this.localeData().invalidDate();var u=i0(this._milliseconds)/1e3,d=i0(this._days),f=i0(this._months),g,E,D,L,de=this.asSeconds(),Ae,Ze,Nn,Ti;return de?(g=It(u/60),E=It(g/60),u%=60,g%=60,D=It(f/12),f%=12,L=u?u.toFixed(3).replace(/\.?0+$/,""):"",Ae=de<0?"-":"",Ze=ba(this._months)!==ba(de)?"-":"",Nn=ba(this._days)!==ba(de)?"-":"",Ti=ba(this._milliseconds)!==ba(de)?"-":"",Ae+"P"+(D?Ze+D+"Y":"")+(f?Ze+f+"M":"")+(d?Nn+d+"D":"")+(E||g||u?"T":"")+(E?Ti+E+"H":"")+(g?Ti+g+"M":"")+(u?Ti+L+"S":"")):"P0D"}var $e=rh.prototype;$e.isValid=HP,$e.abs=k3,$e.add=T3,$e.subtract=b3,$e.as=I3,$e.asMilliseconds=N3,$e.asSeconds=O3,$e.asMinutes=R3,$e.asHours=P3,$e.asDays=M3,$e.asWeeks=L3,$e.asMonths=$3,$e.asQuarters=F3,$e.asYears=U3,$e.valueOf=A3,$e._bubble=D3,$e.clone=B3,$e.get=z3,$e.milliseconds=V3,$e.seconds=j3,$e.minutes=Y3,$e.hours=W3,$e.days=H3,$e.weeks=K3,$e.months=G3,$e.years=q3,$e.humanize=e6,$e.toISOString=ch,$e.toString=ch,$e.toJSON=ch,$e.locale=VC,$e.localeData=YC,$e.toIsoString=F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ch),$e.lang=jC,z("X",0,0,"unix"),z("x",0,0,"valueOf"),ie("x",Qd),ie("X",CR),Je("X",function(u,d,f){f._d=new Date(parseFloat(u)*1e3)}),Je("x",function(u,d,f){f._d=new Date(Oe(u))});//! moment.js
return r.version="2.29.4",i(st),r.fn=q,r.min=VP,r.max=jP,r.now=YP,r.utc=y,r.unix=v3,r.months=_3,r.isDate=p,r.locale=hs,r.invalid=S,r.duration=Ir,r.isMoment=O,r.weekdays=C3,r.parseZone=w3,r.localeData=Ci,r.isDuration=ih,r.monthsShort=x3,r.weekdaysMin=E3,r.defineLocale=Wg,r.updateLocale=wP,r.locales=_P,r.weekdaysShort=S3,r.normalizeUnits=Qt,r.relativeTimeRounding=J3,r.relativeTimeThreshold=Z3,r.calendarFormat=mM,r.prototype=q,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r})})(oC);var _y=oC.exports;(function(e,t){(function(n,r){r(typeof Kk=="function"?oC.exports:n.moment)})(qk,function(n){//! moment.js locale configuration
var r=n.defineLocale("ko",{months:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),monthsShort:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),weekdays:"\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),weekdaysShort:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),weekdaysMin:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\uB144 MMMM D\uC77C",LLL:"YYYY\uB144 MMMM D\uC77C A h:mm",LLLL:"YYYY\uB144 MMMM D\uC77C dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\uB144 MMMM D\uC77C",lll:"YYYY\uB144 MMMM D\uC77C A h:mm",llll:"YYYY\uB144 MMMM D\uC77C dddd A h:mm"},calendar:{sameDay:"\uC624\uB298 LT",nextDay:"\uB0B4\uC77C LT",nextWeek:"dddd LT",lastDay:"\uC5B4\uC81C LT",lastWeek:"\uC9C0\uB09C\uC8FC dddd LT",sameElse:"L"},relativeTime:{future:"%s \uD6C4",past:"%s \uC804",s:"\uBA87 \uCD08",ss:"%d\uCD08",m:"1\uBD84",mm:"%d\uBD84",h:"\uD55C \uC2DC\uAC04",hh:"%d\uC2DC\uAC04",d:"\uD558\uB8E8",dd:"%d\uC77C",M:"\uD55C \uB2EC",MM:"%d\uB2EC",y:"\uC77C \uB144",yy:"%d\uB144"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(i,s){switch(s){case"d":case"D":case"DDD":return i+"\uC77C";case"M":return i+"\uC6D4";case"w":case"W":return i+"\uC8FC";default:return i}},meridiemParse:/오전|오후/,isPM:function(i){return i==="\uC624\uD6C4"},meridiem:function(i,s,o){return i<12?"\uC624\uC804":"\uC624\uD6C4"}});return r})})();const fX=Kn(va,"board_photos"),pX=async e=>{const t=Kn(fX,e.name);return await ga(t,e),await ya(t)},sR=qt("boards/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("boardData is undefined");const{brand:n,height:r,weight:i,title:s,desc:o,photo:a,nickname:l}=e,c=await pX(a);return{id:(await ag(mo(Kt,"boards"),{brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:l,createdAt:Date.now()})).id,brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:l,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Rg=qt("boards/get",async()=>(te.locale("ko"),(await og(mo(Kt,"boards"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=te(),l=te(i);return a.diff(l,"days")<=1?o=l.fromNow():o=l.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),mX=ua({name:"board",initialState:{boards:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(sR.fulfilled,(t,n)=>{const r=n.payload;return{...t,boards:[...t.boards,r],postCount:t.postCount+1}}).addCase(Rg.fulfilled,(t,n)=>({...t,boards:n.payload,postCount:n.payload.length}))}});var gX=mX.reducer;const yX=Wl`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 8px 16px;
  cursor: pointer;
`,vX=Wl`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`,wX=Wl`
  width: 100%;
  display: flex;
  flex-direction: column;
`,_X=h8`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
`,Ut=Ge.section`
  width: 100%;
  padding-top: 60px;
  min-height: 100vh;
  background: #ffffff;

  &.qna_section , 
  &.ootd_section,
  &.photo_section,
  &.today_section,
  &.today_detail_section,
  &.qna_write_section,
  &.qna_section {
    background: #FAFAFA;
  }

  @media screen and (max-width: 768px) {
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`,Pg=Ge.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;


  .title {
    h1 {
      font-size: clamp(16px, 1.5vw, 18px);
    }
    span {
      font-size: clamp(12px, 1vw, 13px);
    }
  }

  .contents {
    margin-top: 20px;

    .no-photos,
    .no-boards {
      padding-left: 20px;
    }
  }
`,xX=Ge.div`
  position: relative;
  max-width: 760px;
  min-height: 500px;
  width: 100%;
  gap: 6px;
  box-shadow: 0 8px 16px rgba(182, 190, 204, 0.5);
  display: flex;

  .toggle {
    position: absolute;
    top: 20px;
    left: 0;
    display: none;
    cursor: pointer;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  .left {
    position: relative;
    flex: 1 1 50%;
    background: #23272b;

    .textbox {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fefefe;
      text-align: center;
      display: flex;
      flex-direction: column;
      width: 100%;

      .title {
        padding: 3px 0;
        letter-spacing: -0.055rem;
        font-size: clamp(26px, 3.5vw, 30px);
        font-weight: 700;
      }

      span {
        display: inline-block;
        letter-spacing: -0.035rem;
        font-size: clamp(20px, 2vw, 26px);
        font-weight: 700;
      }
    }
  }

  .right {
    position: relative;
    padding: 40px 16px 36px 16px;
    flex: 1 1 50%;
    margin-top: auto;

    form {
      .area {
        position: relative;
        width: 100%;

        &.file {
          margin-bottom: 16px;

          label {
            width: 100%;
            height: 52px;
            display: inline-flex;
            position: relative;
            left: 0;
            top: 0;
            align-items: center;
            padding: 6px 12px;
            background: #fe5493;
            color: #fff;
            justify-content: center;
            gap: 20%;

            p {
              line-height: 1.5rem;
            }

            span {
              position: absolute;
              left: 12px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;

              svg {
                width: 100%;
                height: 100%;
              }
            }
          }
        }

        input {
          margin-bottom: 20px;
          border-bottom: 1px solid #999;
          height: 46px;
          font-size: clamp(13.5px, 1.5vw, 15px);
        }

        input:active,
        input:focus {
          border-bottom: 2px solid #09f;
        }

        label {
          position: absolute;
          left: 10px;
          top: -2px;
          font-size: clamp(12px, 1.5vw, 13px);
          transition: top 0.25s ease-in-out;
          color: #625f5f;
          cursor: pointer;
        }

        input:focus + label {
          top: -8px;
        }
      }

      button {
        background: #181818;
        color: #fff;
        height: 52px;
        line-height: 1.5rem;
        font-size: clamp(14px, 1.5vw, 15px);
        transition: background 0.25s ease-in-out;

        &:hover,
        &:active {
          background: #09f;
        }
      }

      a {
        width: 100%;
      }
    }

    .signUp_link {
      margin-top: 12px;
      text-align: center;

      a {
        font-size: clamp(12px, 1.8vw, 14px);
      }
    }

    .socialLogin {
      display: flex;
      flex-direction: column;
      margin-top: 12px;

      button {
        height: 52px;
        font-size: clamp(14px, 1.5vw, 15px);
        line-height: 1.5rem;
      }

      .googleLogin {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #09f;
        color: #fefefe;
        transition: background 0.25s ease-in-out;

        &:hover,
        &:active {
          background: #625f5f;
        }

        .googleIcon {
          position: absolute;
          display: flex;
          left: 12px;
          align-items: center;
          justify-content: center;
          background: #fefefe;
          width: 40px;
          height: 40px;

          svg {
            width: 26px;
            height: 26px;
          }
        }

        .googleText {
        }
      }
    }
  }

  @media screen and (max-width: 646px) {
    flex-direction: column;
    min-height: 100vh;
    box-shadow: none;
    justify-content: space-between;

    .toggle {
      display: block;
    }
    .left {
      width: 100%;
      max-width: 454px;
      display: flex;
      align-items: center;
      background: #ffffff;

      .textbox {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: column;
        top: 0;
        left: 0;
        transform: none;
        color: #181818;
      }
    }

    .right {
      padding: 20px 6px;
    }
  }
`,aC=Ge.div`
  min-width: 220px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 6px;

  .top {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      /* object-fit: fill; */
    }
  }

  .bottom {
    padding-top: 6px;

    .photo_category,
    .today_category {
      vertical-align: middle;
      overflow: hidden;
      color: #222;
      font-weight: 700;
      font-size: clamp(11px, 1.5vw, 12.5px);
    }

    .board_nickname,
    .photo_nickname,
    .today_nickname {
      vertical-align: top;
      display: inline-block;
      overflow: hidden;
      height: 17px;
      line-height: 17px;
      padding-bottom: 2px;
      font-size: clamp(12px, 1.5vw, 13px);
      font-weight: 700;
      color: #222;
      text-overflow: ellipsis;
      width: fit-content;
      white-space: nowrap;
    }

    .board_title,
    .board_desc,
    .photo_title,
    .photo_desc,
    .today_desc,
    .today_title {
      margin-top: 6px;
      max-height: 44px;
      line-height: 16px;
      font-size: clamp(12px, 1.5vw, 13px);
      white-space: normal;
    }

    .photo_title {
      margin-bottom: 3px;
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 180px;
    .top {
      height: 260px;
    }
  }
`,Mg=Ge.div`
  margin: 0 auto;
  max-width: 460px;
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .post_title {
    h1 {
      letter-spacing: -0.035rem;
      font-size: clamp(18px, 2.5vw, 24px);
    }
  }

  form {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;

    .nickname {
      font-size: clamp(14px, 2vw, 16px);
      font-weight: 600;
      min-height: 36px;
      line-height: 36px;
      margin-bottom: 12px;

      span {
        padding-right: 12px;
        font-weight: 500;
        font-size: clamp(12px, 1.5vw, 14px);
      }
    }

    input,
    textarea,
    button {
      outline: none;
    }

    input[type='text'] {
      height: 56px;
      border: 1px solid #e5e8eb;
      padding: 18px 12px;
      transition: all 0.15s ease-in-out;
      font-size: clamp(12.5px, 1.5vw, 15px);
      transition: border-color 0.15s ease-in-out;
      margin-bottom: 12px;

      &::placeholder {
        color: #908787;
      }

      &:focus {
        border: 2px solid #181818;
      }
    }

    select {
      height: 56px;
      padding: 18px 12px;
      margin-bottom: 12px;
    }

    textarea {
      height: 120px;
      padding: 9px 16px;
      font-size: clamp(12.5px, 1.5vw, 15px);
      margin-bottom: 12px;
      transition: border-color 0.15s linear;
      border: 1px solid #e5e8eb;
      resize: none;

      &::placeholder {
        color: #908787;
      }

      &:focus {
        border: 2px solid #181818;
      }
    }

    button[type='submit'] {
      background: #181818;
      height: 56px;
      padding: 12px 20px;
      color: #fefefe;
      font-size: clamp(12.5px, 1.5vw, 15px);
      transition: all 0.2s ease-in-out;

      &:hover,
      &:focus {
        background: transparent;
        color: #222;
      }
    }

    .category-wrap {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 12px;

      label {
        position: relative;
        display: block;
        margin: 16px 0;
        color: #181818;
        font-size: clamp(13px, 1.5vw, 15px);
        cursor: pointer;

        input[type='checkbox'] {
          appearance: none;
        }

        i {
          position: absolute;
          top: 1px;
          left: -8px;
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 1px solid #181818;
          border-radius: 3px;
        }

        input[type='checkbox']:checked ~ i {
          top: 1px;
          border-top: none;
          border-right: none;
          height: 9px;
          width: 18px;
          transform: rotate(-45deg);
          border-color: #09f;
        }

        span {
          position: relative;
          transition: all 0.25s linear;
          margin: 0 16px;

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: #09f;
            transform: translateY(-50%) scaleX(0);
            transform-origin: right;
            transition: transform 0.25s linear;
          }
        }

        input[type='checkbox']:checked ~ span::before {
          transform: translateY(-50%) scaleX(1);
          transform-origin: left;
          transition: transform 0.25s linear;
        }
      }
    }

    .file_label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 56px;
      justify-content: center;
      cursor: pointer;
      background: #181818;
      color: #fff;
      transition: 0.15s all linear;
      opacity: 0.88;
      margin-bottom: 12px;

      p {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: center;
        font-size: clamp(12.5px, 1.5vw, 15px);

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(16px, 1.5vw, 18px);
          svg {
            width: 100%;
            height: 100%;
          }
        }

        .label_text {
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 10px;

    form {
      gap: 9px;
    }
  }
`,CX=Ge.div`
  width: 100%;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.86);
  background: #f8d7da;
  text-align: center;

  p {
    padding: 12px;
    font-size: clamp(14px, 2vw, 15px);
  }
`;Ge.form`
  ${wX}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;const Iu=Ge.input`
  ${yX}
`,xy=Ge.button`
  ${vX}
`;Ge.div`
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 60px;
  max-width: 964px;
  display: flex;
  justify-content: center;
  gap: 20px;

  .snapImg {
    width: 35vw;
    min-height: 500px;

    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .snapInfo {
    width: 50vw;
    .title {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 20px;

      font-size: clamp(16px, 2vw, 18px);

      span {
        color: #b2b2b2;
        font-size: clamp(11px, 1vw, 12px);
      }
    }

    .tr {
      margin-bottom: 12px;
      padding: 6px;

      .th {
        display: inline-block;
        min-width: 100px;
        font-size: clamp(14px, 1vw, 15px);
      }
      .td {
        font-size: clamp(12px, 1vw, 14px);
        font-weight: 600;
      }

      &:last-child {
        .td {
          color: #da2e4b;
          font-size: clamp(16px, 2vw, 20px);
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    gap: 12px;

    .snapImg {
      width: 50vw;
      min-height: 350px;
    }

    .snapInfo {
      .tr {
        display: inline-flex;
        padding: 6px 0;
        margin-bottom: 9px;
        gap: 3px;

        .th {
          display: inline-block;
          min-width: 52px;
          font-size: clamp(14px, 1vw, 15px);
        }
        .td {
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 600;
          word-break: break-all;
        }
      }
    }
  }
`;const SX=Ge.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .loader {
    width: 60px;
    height: 60px;
    border: 12px solid #eeeeee;
    border-top-color: #08f;
    border-radius: 50%;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.16);
    animation: ${_X} 1.5s ease infinite;
  }

  h1 {
    font-size: clamp(18px, 2vw, 22px);
    font-weight: 700;
    letter-spacing: -0.075rem;
  }

`;/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function EX(e){e.length=0}function lC(e,t,n){return Array.prototype.slice.call(e,t,n)}function Lg(e){return e.bind.apply(e,[null].concat(lC(arguments,1)))}function Fk(e){return requestAnimationFrame(e)}function uC(e,t){return typeof t===e}var oR=Array.isArray;Lg(uC,"function");Lg(uC,"string");Lg(uC,"undefined");function aR(e){return oR(e)?e:[e]}function Uk(e,t){aR(e).forEach(t)}var kX=Object.keys;function TX(e,t,n){if(e){var r=kX(e);r=n?r.reverse():r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function bX(e){return lC(arguments,1).forEach(function(t){TX(t,function(n,r){e[r]=t[r]})}),e}var DX=Math.min;function IX(){var e=[];function t(o,a,l,c){i(o,a,function(h,p,m){var x="addEventListener"in h,y=x?h.removeEventListener.bind(h,p,l,c):h.removeListener.bind(h,l);x?h.addEventListener(p,l,c):h.addListener(l),e.push([h,p,m,l,y])})}function n(o,a,l){i(o,a,function(c,h,p){e=e.filter(function(m){return m[0]===c&&m[1]===h&&m[2]===p&&(!l||m[3]===l)?(m[4](),!1):!0})})}function r(o,a,l){var c,h=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:h,detail:l}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,h,!1,l)),o.dispatchEvent(c),c}function i(o,a,l){Uk(o,function(c){c&&Uk(a,function(h){h.split(" ").forEach(function(p){var m=p.split(".");l(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),EX(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var Bk="move",zk="moved",AX="updated",Vk="drag",NX="dragged",jk="scroll",Yk="scrolled",OX="destroy";function RX(e){var t=e?e.event.bus:document.createDocumentFragment(),n=IX();function r(s,o){n.bind(t,aR(s).join(" "),function(a){o.apply(o,oR(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,lC(arguments,1))}return e&&e.event.on(OX,n.destroy),bX(n,{bus:t,on:r,off:Lg(n.unbind,t),emit:i})}function lR(e,t,n,r){var i=Date.now,s,o=0,a,l=!0,c=0;function h(){if(!l){if(o=e?DX((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();Fk(h)}}function p(C){!C&&y(),s=i()-(C?o*e:0),l=!1,Fk(h)}function m(){l=!0}function x(){s=i(),o=0,n&&n(o)}function y(){a&&cancelAnimationFrame(a),o=0,a=0,l=!0}function _(C){e=C}function k(){return l}return{start:p,rewind:x,pause:m,cancel:y,set:_,isPaused:k}}function PX(e,t){var n;function r(){n||(n=lR(t||0,function(){e(),n=null},null,1),n.start())}return r}var MX="is-active",LX="slide",$X="fade";function uR(e,t,n){return Array.prototype.slice.call(e,t,n)}function cC(e){return e.bind(null,...uR(arguments,1))}function $g(e,t){return typeof t===e}function N1(e){return!cR(e)&&$g("object",e)}const FX=Array.isArray;cC($g,"function");cC($g,"string");const UX=cC($g,"undefined");function cR(e){return e===null}function BX(e){return FX(e)?e:[e]}function $p(e,t){BX(e).forEach(t)}function zX(e,t,n){e&&$p(t,r=>{r&&e.classList[n?"add":"remove"](r)})}const VX=Object.keys;function dR(e,t,n){if(e){let r=VX(e);r=n?r.reverse():r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function Wk(e){return uR(arguments,1).forEach(t=>{dR(t,(n,r)=>{e[r]=t[r]})}),e}function jX(e,t){$p(e,n=>{$p(t,r=>{n&&n.removeAttribute(r)})})}function hR(e,t,n){N1(t)?dR(t,(r,i)=>{hR(e,i,r)}):$p(e,r=>{cR(n)||n===""?jX(r,t):r.setAttribute(t,String(n))})}const{min:Hk,max:Gk,floor:lZ,ceil:uZ,abs:cZ}=Math;function YX(e,t,n){const r=Hk(t,n),i=Gk(t,n);return Hk(Gk(r,e),i)}const WX={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},HX={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function dC(e,t,n){const{on:r,off:i,bind:s,unbind:o}=RX(e),{translate:a,getPosition:l,toIndex:c,getLimit:h}=t.Move,{setIndex:p,getIndex:m}=t.Controller,{orient:x}=t.Direction,{toggle:y}=t.Elements,{Live:_}=t,{root:k}=e,C=PX(t.Arrows.update,500);let v={},S,T,I,P,N,O;function Z(){const{autoScroll:B}=n;v=Wk({},WX,N1(B)?B:{})}function F(){e.is($X)||!S&&n.autoScroll!==!1&&(S=lR(0,$),J(),ue())}function j(){S&&(S.cancel(),S=null,O=void 0,i([Bk,Vk,jk,zk,Yk]),o(k,"mouseenter mouseleave focusin focusout"),o(y,"click"))}function J(){v.pauseOnHover&&s(k,"mouseenter mouseleave",B=>{I=B.type==="mouseenter",ge()}),v.pauseOnFocus&&s(k,"focusin focusout",B=>{P=B.type==="focusin",ge()}),v.useToggleButton&&s(y,"click",()=>{T?oe():Te()}),r(AX,X),r([Bk,Vk,jk],()=>{N=!0,Te(!1)}),r([zk,NX,Yk],()=>{N=!1,ge()})}function X(){const{autoScroll:B}=n;B!==!1?(v=Wk({},v,N1(B)?B:{}),F()):j(),S&&!UX(O)&&a(O)}function ue(){v.autoStart&&(document.readyState==="complete"?oe():s(window,"load",oe))}function oe(){U()&&(S.start(!0),_.disable(!0),P=I=T=!1,ee())}function Te(B=!0){T||(T=B,ee(),U()||(S.pause(),_.disable(!1)))}function ge(){T||(I||P||N?Te(!1):oe())}function $(){const B=l(),Y=V(B);B!==Y?(a(Y),M(O=l())):(Te(!1),v.rewind&&e.go(v.speed>0?0:t.Controller.getEnd())),C()}function V(B){const Y=v.speed||1;return B+=x(Y),e.is(LX)&&(B=YX(B,h(!1),h(!0))),B}function M(B){const{length:Y}=e,z=(c(B)+Y)%Y;z!==m()&&(p(z),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function ee(){if(y){const B=T?"startScroll":"pauseScroll";zX(y,MX,!T),hR(y,"aria-label",n.i18n[B]||HX[B])}}function U(){return!S||S.isPaused()}return{setup:Z,mount:F,destroy:j,play:oe,pause:Te,isPaused:U}}const cs=()=>w(Ut,{children:A(SX,{children:[w("div",{className:"loader"}),w("h1",{children:"Loading...wait for website.."})]})}),GX=()=>{const e=tt(c=>c.board.boards),[t,n]=R.exports.useState(e.length),[r,i]=R.exports.useState("16px"),[s,o]=R.exports.useState("left"),a=Gt(),l=R.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return R.exports.useEffect(()=>(a(Rg()),l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[a,l]),w(Ut,{children:A(Pg,{children:[A("div",{className:"title",children:[w("h1",{children:"OOTD"}),w("span",{children:"\uCD5C\uC2E0 OOTD \uB9AC\uC2A4\uD2B8"})]}),w("div",{className:"contents",children:e.length>0?w(Fx,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:2}},extensions:{AutoScroll:dC},children:e.slice(0,10).map(c=>w(Ux,{children:A(aC,{children:[w("div",{className:"top",children:w(Pn,{to:`board/details/${c.id}`,children:w("img",{src:c.photo,alt:"board"})})}),A("div",{className:"bottom",children:[w("p",{className:"board_nickname",children:c.nickname}),w("p",{className:"board_title",children:c.title}),w("p",{className:"board_desc",children:c.desc.length>60?c.desc.slice(0,50)+"...":c.desc})]})]})},c.id))}):w(cs,{})})]})})},qX=Kn(va,"questions_photos"),KX=async e=>{if(e){const t=Kn(qX,e.name);return await ga(t,e),await ya(t)}return null},O1=qt("todays/recommendViews",async(e,{rejectWithValue:t})=>{try{const{qnaId:n}=e,r=kr(Kt,"questions",n);await ma(r,{recommend:lg(1)})}catch(n){return console.error(n),t("\uCD94\uCC9C\uC744 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),R1=qt("questions/incrementViews",async(e,{rejectWithValue:t})=>{try{const{questionId:n}=e,r=kr(Kt,"questions",n);await ma(r,{views:lg(1)})}catch(n){return console.error(n),t("\uC870\uD68C\uC218\uB97C \uC5C5\uB370\uC774\uD2B8 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),P1=qt("question/comment",async(e,{rejectWithValue:t})=>{try{const{questionId:n,commentData:r}=e,i=kr(Kt,"questions",n),s=await Rd(i);if(!s.exists())return t({errorMessage:"\uD574\uB2F9 \uC9C8\uBB38\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."});const a=[...s.data().comments||[],r];return await ma(i,{comments:a}),{questionId:n,commentData:r}}catch(n){return console.error(n),t("\uB313\uAE00\uC744 \uCD94\uAC00 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),M1=qt("question/deleteComment",async(e,{rejectWithValue:t})=>{try{const{questionId:n,commentId:r}=e,i=rs.currentUser;if(!i)return t("\uB85C\uADF8\uC778 \uD6C4\uC5D0 \uB313\uAE00\uC744 \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");const s=kr(Kt,"questions",n),o=await Rd(s);if(!o.exists())return t("\uD574\uB2F9 \uC9C8\uBB38\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");const a=o.data().comments||[],l=a.filter(c=>c.id!==r||c.userId!==i.uid);return l.length===a.length?t("\uB2E4\uB978 \uC0AC\uC6A9\uC790\uC758 \uB313\uAE00\uC740 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."):(await ma(s,{comments:l}),{questionId:n,commentId:r})}catch(n){return console.error(n),t("\uB313\uAE00\uC744 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),fR=qt("question/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("qnaData is Not Fount");const{title:n,desc:r,photo:i,nickname:s}=e,o=await KX(i),a={title:n,desc:r,nickname:s,createdAt:Date.now()};return o&&(a.photo=o),{id:(await ag(mo(Kt,"questions"),a)).id,...a}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Rs=qt("question/get",async()=>(te.locale("ko"),(await og(mo(Kt,"questions"))).docs.map((n,r)=>{const i=n.data(),{createdAt:s,...o}=i;let a;const l=te(),c=te(s);return l.diff(c,"days")<=1?a=c.fromNow():a=c.format("YYYY.MM.DD"),{id:n.id,number:r+1,createdAt:a,comments:i.comments||{},...o}}))),QX=ua({name:"qna",initialState:{questions:[],postCount:0,loading:!1},reducers:{},extraReducers:e=>{e.addCase(fR.fulfilled,(t,n)=>{const r=n.payload;return{...t,questions:[...t.questions,r],postCount:t.postCount+1}}).addCase(Rs.fulfilled,(t,n)=>({...t,questions:n.payload,postCount:n.payload.length})).addCase(R1.pending,(t,n)=>({...t,loading:!0})).addCase(R1.fulfilled,(t,n)=>{if(n.payload&&n.payload.questionId){const r=t.questions.map(i=>i.id===n.payload.questionId?{...i,views:i.views+1}:i);return{...t,questions:r,loading:!1}}return{...t,loading:!1}}).addCase(O1.pending,(t,n)=>({...t,loading:!0})).addCase(O1.fulfilled,(t,n)=>{if(n.payload&&n.payload.qnaId){const r=t.questions.map(i=>i.id===n.payload.qnaId?{...i,recommend:i.recommend+1}:i);return{...t,questions:r,loading:!1}}return{...t,loading:!1}}).addCase(P1.pending,(t,n)=>({...t,loading:!0})).addCase(P1.fulfilled,(t,n)=>{const{questionId:r,commentData:i}=n.payload,s=t.questions.map(o=>o.id===r?(o.comments,{...o,comments:[...o.comments,i]}):o);return{...t,questions:s,loading:!1}}).addCase(M1.pending,(t,n)=>({...t,loading:!0})).addCase(M1.fulfilled,(t,n)=>{const{questionId:r,commentId:i}=n.payload,s=t.questions.map(o=>{if(o.id===r){const a=o.comments.filter(l=>l.id!==i);return{...o,comments:a}}return o});return{...t,questions:s,loading:!1}})}});var XX=QX.reducer;const JX=Ge.div`
  margin: auto;
  width: 100%;
  height: 16rem;
  background: pink;
  overflow: hidden;

  .contents {
    margin: auto;
    color: #181818;
    display: flex;
    max-width: 768px;
    height: 100%;
    padding: 0 16px;

    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;

      p {
        color: #fefefe;
        word-break: break-all;
        line-height: 1.25;
        font-size: clamp(16px, 2vw, 26px);
      }

      span {
        line-height: 1.25;
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(16px, 2vw, 20px);
      }

      .link-btn {
        margin-top: 20px;
        background: #181818;
        border-radius: 4px;
        color: #fefefe;
        padding: 12px 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
      }
    }

    .image {
      width: 100%;
      padding: 20px;

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 13rem;
  }
`,ZX=Ge.article`
  margin: 30px auto 0px auto;
  max-width: 964px;
  position: relative;
  padding: 36px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 6px;
  border: 1px solid #eee;

  .qna_card {
    width: 100%;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    border-top-width: 1px;
    border-bottom-width: 0;
    word-break: break-all;

    .card_header {
      width: 100%;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;

      h1 {
        word-wrap: break-word;
        font-weight: 700;
        margin-bottom: 16px;
        font-size: clamp(16px, 2vw, 24px);

        span {
          margin-right: 6px;
          font-size: clamp(22px, 2.5vw, 26px);
          color: #3772f0;
          font-weight: 500;
        }
      }

      .card_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 6px;

        .inner {
          display: flex;
          gap: 6px;
          font-size: clamp(12px, 1.3vw, 14px);
          align-items: center;

          .profile_img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            overflow: hidden;
          }

          img {
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }

        .date {
          color: #aaa;
          font-size: clamp(12px, 1.3vw, 13px);
        }
      }
    }

    .card_contents {
      padding: 10px 0;
      .card_desc {
        margin-bottom: 6px;
        font-size: clamp(14px, 1vw, 16px);
        line-height: 1.5;
        letter-spacing: -0.025rem;
      }
    }

    .card_footer {
      position: relative;

      .inner {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
        gap: 12px;

        .qna_btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px;
          border-radius: 6px;
          font-size: clamp(12px, 1.5vw, 14px);
          color: #ffffff;

          &:nth-child(1) {
            background: #d472a3;
            &:focus {
              color: #333;
            }
          }
          &:nth-child(2) {
            background: #5fcb5f;
            &:focus {
              color: #333;
            }
          }
          &:nth-child(3) {
            &:focus {
              color: #333;
            }
            background: #09f;
          }

          svg {
            font-size: clamp(18px, 1.5vw, 20px);
          }
        }
      }

      .comment {
        margin-top: 30px;
        padding: 0px 6px;

        .comment_in {
          display: flex;
          flex-direction: column;
          gap: 9px;
          background: #fafafa;
          margin-bottom: 12px;

          .top {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 12px;

            .profile {
              display: flex;
              align-items: center;
              gap: 6px;

              img {
                border-radius: 50%;
                width: 30px;
                height: 30px;
              }

              span {
                font-size: clamp(13px, 1.5vw, 14px);
              }
            }

            .submit {
              font-weight: 700;
              letter-spacing: 0.025rem;
              padding: 8px 12px;
              background: #09f;
              border-radius: 6px;
              color: #fff;
              font-size: clamp(12px, 1.5vw, 14px);
            }
          }

          .bottom {
            padding: 12px;
            width: 100%;

            textarea {
              width: 100%;
              height: 100px;
              resize: none;
              padding: 12px;
              outline: none;
              border: 1px solid #eee;
            }
          }
        }

        .comment_item {
          width: 100%;
          margin: 6px 0;
          padding-bottom: 6px;
          border-bottom: 1px solid #ddd;

          .profile {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .user {
              display: flex;
              align-items: center;
              gap: 6px;

              img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
              }
              span {
                font-size: clamp(12px, 1.5vw, 13px);
              }
            }
            .date {
              font-size: clamp(11px, 1vw, 12px);
              color: #aaa;
            }
          }

          .comment_desc {

            p {
              text-indent: 6px;
              margin: 6px 0;
              line-height: 30px;
              min-height: 30px;
              font-size: clamp(12px, 1.5vw, 14px);
            }

            .delete_comment {
              padding: 6px;
              font-size: clamp(12px, 1vw, 13px);
              color: red;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 16px;

    .qna_card {
      .card_header {
        .card_info {
          display: flex;
          gap: 16px;
          padding: 6px;
          align-items: center;
          justify-content: space-between;

          .inner {
            gap: 9px;

            .profile_img {
              width: 28px;
              height: 28px;
            }
          }
        }
      }

      .card_contents {
        padding: 16px 0px 10px 0px;

        .card_desc {
          margin-bottom: 9px;
        }
      }

      .card_footer {
        .inner {
          justify-content: center;

          .qna_btn {
            justify-content: center;
            gap: 6px;
            padding: 9px 12px;
          }
        }

        .comment {
          margin-top: 16px;
          padding: 6px;

          .comment_in {
            display: flex;
            flex-direction: column;
            gap: 9px;
            background: #fafafa;

            .top {
              .profile {
                gap: 6px;

                img {
                  border-radius: 50%;
                  width: 28px;
                  height: 28px;
                }
              }

              .submit {
                font-weight: 700;
              }
            }

            .bottom {
              padding: 6px 2px 0px 2px;
              border-radius: 6px;
              width: 100%;
              textarea {
              }
            }
          }
        }
      }
    }
  }
`,eJ=Ge.div`
  max-width: 964px;
  margin: 12px auto 0px auto;
  background: #fefefe;

  .qna_list {
    padding: 1px 3px 0 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .qna_card {
      display: flex;
      min-height: 30px;
      align-items: center;
      background: #ffffff;
      border-bottom: 1px solid #fff;
      gap: 12px;
      margin-bottom: 3.5px;
      padding: 0 4px;
      word-break: break-all;

      p {
        display: block;
        font-size: clamp(12px, 1vw, 13px);
      }

      .number {
        width: 5%;
        text-align: center;
      }
      .title {
        text-overflow: ellipsis;
        color: #0c2d43;
        cursor: pointer;
        width: 70%;
        color: #333;

        &:hover {
          color: #770088;
          text-decoration: underline 0.5px;
        }
      }
      .nickname {
        text-align: center;
        width: 10%;
      }

      .date,
      .views {
        text-align: center;
        width: 10%;
      }

      .views {
        width: 15%;
      }

      &:last-child {
        margin-bottom: 0;
      }

      .qna_img {
        img {
          width: 60px;
          height: 50px;
          vertical-align: top;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .qna_list {
      .qna_card {
        min-height: 26px;

        .number {
          width: 5%;
          text-align: center;
        }
        .title {
          width: 50%;
          color: #333;

          &:hover {
            color: #770088;
            text-decoration: underline 0.5px;
          }
        }
        .nickname {
          text-align: center;
          width: 15%;
        }

        .date,
        .views {
          text-align: center;
          width: 10%;
        }
      }
    }
  }
`,tJ=Ge.div`
  width: 100%;
  max-width: 964px;
  padding: 16px;
  margin: 0 auto;
  margin-top: 30px;

  .qna_contents {
    width: 100%;

    .list_item {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .qna_items {
        width: 100%;
        padding: 20px 16px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        background: #fff;
        border: 1px solid #ededed;
        border-radius: 6px;
        transition: all 0.2s linear;

        &.active {
        }

        .inner {
          .qna_title {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 9px;
            font-size: clamp(14px, 1.5vw, 16px);
            font-weight: 500;
            line-height: 1.6;
            color: #333;
            cursor: pointer;

            .qna_q_icon {
              color: #09f;
              font-size: clamp(20px, 2vw, 22px);
            }
          }
        }

        .qna_answer {
          position: relative;
          border-top: 1px solid rgba(226, 220, 220, 0.45);
          padding: 20px 0px 20px 6px;
          overflow: hidden;

          .qna_desc {
            position: relative;
            left: 16px;
            color: #4d5256;
            font-size: clamp(13.5px, 1.5vw, 16px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 16px 9px;

    .qna_contents {
      .list_item {
        .qna_items {
          padding: 12px;

          .qna_answer {
            padding: 12px 0px 6px 0px;
            .qna_desc {
              left: 6px;
              word-break: break-all;
            }
          }
        }
      }
    }
  }
`,nJ=Ge.div`
  margin: 0 auto;
  margin-top: 30px;
  max-width: 964px;
  background: #fff;
  padding: 12px 0px 0px 0px;

  .post_title {
    margin: 0 auto;
    width: 100%;
    text-align: center;

    h1 {
      font-size: clamp(18px, 2vw, 20px);
    }
  }

  .qna_write {
    margin: 0 auto;
    margin-top: 30px;
    padding: 0 16px;
    width: 100%;
    border-width: 1px;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      .nickname {
        padding: 0 16px;
        font-size: clamp(14px, 1.5vw, 16px);
      }

      .qna_cardForm {
        position: relative;
        border-radius: 12px;
        border-width: 1px;
        padding: 16px 16px 20px 16px;

        .title {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          padding-bottom: 1rem;
          align-items: center;
          border-bottom: 1px solid #dedede;

          .q {
            display: inline-flex;
            align-items: center;
            margin-right: 12px;
            font-size: clamp(20px, 2vw, 22px);

            svg {
              width: 26px;
              height: 100%;
              color: #08f;
            }
          }

          input {
            order: 0;
            width: calc(100% - 42px);
            padding: 12px 6px;
          }

          .number_check {
            font-size: clamp(12px, 1vw, 13px);
            --text-opacity: 1;
            color: #b6becc;
            color: rgba(182, 190, 204, var(--text-opacity));
            width: 57px;
          }
        }

        .desc {
          margin: 20px auto;
          min-height: 260px;
          padding: 12px;
          border-bottom: 1px solid #dedede;

          textarea {
            min-height: 260px;
            width: 100%;
            resize: none;
            outline: none;
            border: 0;
            line-height: 1.5;
          }
        }

        .file_input {
          width: 100%;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;

          background: #218832;
          .file_label {
            width: 100%;
            height: 100%;
            p {
              display: inline-flex;
              width: 100%;
              height: 100%;
              align-items: center;
              justify-content: center;
              color: #fefefe;
              cursor: pointer;
              gap: 4px;
              font-size: clamp(14px, 1.5vw, 16px);

              span {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                svg {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }

        .submit {
          margin-top: 12px;
          width: 100%;
          height: 46px;
          background: #181818;
          color: #fefefe;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    min-height: 100vh;

    .qna_write {
      width: 100%;
      form {
        .qna_cardForm {
          padding: 0px;

          .title {
            width: 100%;

            .number_check {
              min-width: 57px;
            }

            .q {
              svg {
                width: 23px;
              }
            }
          }
        }
      }
    }
  }
`,rJ=()=>{const e=tt(s=>s.qna.questions),[t,n]=R.exports.useState([]),r=Gt(),i=s=>{n(o=>{const a=o.indexOf(s);if(a!==-1){const l=[...o];return l.splice(a,1),l}else return[s]})};return R.exports.useEffect(()=>{r(Rs())},[r]),w(Ut,{className:"qna_section",children:A(Pg,{children:[A("div",{className:"title",children:[w("h1",{children:"QnA"}),w("span",{children:"\uCD5C\uC2E0 QnA \uB9AC\uC2A4\uD2B8"})]}),e.length>0?w(tJ,{children:w("div",{className:"qna_contents",children:w("ul",{className:"list_item",children:e.slice(0,7).map(s=>A("li",{className:`qna_items ${t.findIndex(o=>o===s.id)!==-1?"active":""}`,onClick:()=>i(s.id),children:[w("div",{className:"inner",children:A("h3",{className:"qna_title",children:[w("span",{className:"qna_q_icon",children:"Q."}),s.title]})}),t.findIndex(o=>o===s.id)!==-1?w("div",{className:"qna_answer",children:w("p",{className:"qna_desc",children:s.desc})}):null]},s.id))})})}):w(cs,{})]})})},iJ=Kn(va,"photos_png"),sJ=async e=>{if(e){const t=Kn(iJ,e.name);return await ga(t,e),await ya(t)}return null},pR=qt("photos/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await sJ(s);return{id:(await ag(mo(Kt,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Fg=qt("photos/get",async()=>(_y.locale("ko"),(await og(mo(Kt,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=_y(),l=_y(i);return a.diff(l,"days")<=1?o=l.fromNow():o=l.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),oJ=ua({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(pR.fulfilled,(t,n)=>{const r=n.payload;return{...t,photos:[...t.photos,r],postCount:t.postCount+1}}).addCase(Fg.fulfilled,(t,n)=>({...t,photos:n.payload,postCount:n.payload.length}))}});var aJ=oJ.reducer;const lJ=()=>{const e=tt(p=>p.photo.photos),[t,n]=R.exports.useState([]),[r,i]=R.exports.useState(e.length),[s,o]=R.exports.useState("16px"),[a,l]=R.exports.useState("left"),c=Gt(),h=R.exports.useCallback(()=>{window.innerWidth>=1280?(i(5),l("left")):window.innerWidth>=1024?(i(4),o("14px"),l("left")):window.innerWidth>=768?(i(3),o("12px"),l("center")):(i(2),o("10px"),l("center"))},[]);return R.exports.useEffect(()=>(c(Fg()),h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[c,h]),R.exports.useEffect(()=>{const p=[...e].sort((m,x)=>x.createdAt-m.createdAt);n(p)},[e]),w(Ut,{children:A(Pg,{children:[A("div",{className:"title",children:[w("h1",{children:"Photos"}),w("span",{children:"\uCD5C\uC2E0 photo \uB9AC\uC2A4\uD2B8"})]}),w("div",{className:"contents",children:t.length>0?w(Fx,{options:{type:"loop",perPage:r,gap:s,focus:a,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:1.5}},extensions:{AutoScroll:dC},children:t.slice(0,10).map(p=>w(Ux,{children:A(aC,{children:[w("div",{className:"top",children:w(Pn,{to:`photo/details/${p.id}`,children:w("img",{src:p.photo,alt:"photo"})})}),A("div",{className:"bottom",children:[w("p",{className:"photo_category",children:`<${p.category}>`}),w("p",{className:"photo_nickname",children:p.nickname}),w("p",{className:"photo_title",children:p.title}),w("p",{className:"photo_desc",children:p.desc.length>60?p.desc.slice(0,50)+"...":p.desc})]})]})},p.id))}):w(cs,{})})]})})};Ge.main`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    .main_image {
        max-width: 564px;
        width: 100%;
        height: 500px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: middle;
        }
    }
`;var hC="/modart/assets/main.eb927103.gif";const uJ=Kn(va,"todays_photos"),cJ=async e=>{if(e){const t=Kn(uJ,e.name);return await ga(t,e),await ya(t)}return null},L1=qt("todays/recommendViews",async(e,{rejectWithValue:t})=>{try{const{todayId:n}=e,r=kr(Kt,"todays",n);await ma(r,{recommend:lg(1)})}catch(n){return console.error(n),t("\uCD94\uCC9C\uC744 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),$1=qt("todays/incrementViews",async(e,{rejectWithValue:t})=>{try{const{todayId:n}=e,r=kr(Kt,"todays",n);await ma(r,{views:lg(1)})}catch(n){return console.error(n),t("\uC870\uD68C\uC218\uB97C \uC5C5\uB370\uC774\uD2B8 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),mR=qt("todays/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("todaysData Not Found..");const{title:n,desc:r,type:i,photo:s,nickname:o}=e,a=await cJ(s),l={title:n,desc:r,type:i,nickname:o,createdAt:Date.now()};return a&&(l.photo=a),{id:(await ag(mo(Kt,"todays"),l)).id,...l}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Fl=qt("todays/get",async()=>(te.locale("ko"),(await og(mo(Kt,"todays"))).docs.map((n,r)=>{const i=n.data(),{createdAt:s,...o}=i;let a;const l=te(),c=te(s);return l.diff(c,"days")<=1?a=c.fromNow():a=c.format("YYYY.MM.DD"),{id:n.id,number:r+1,createdAt:a,...o}}))),dJ=ua({name:"today",initialState:{todays:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(mR.fulfilled,(t,n)=>{const r=n.payload;return{...t,todays:[...t.todays,r],postCount:t.postCount+1}}).addCase(Fl.fulfilled,(t,n)=>({...t,todays:n.payload,postCount:n.payload.length})).addCase($1.pending,(t,n)=>({...t,loading:!0})).addCase($1.fulfilled,(t,n)=>{if(n.payload&&n.payload.todayId){const r=t.todays.map(i=>i.id===n.payload.todayId?{...i,views:i.views+1}:i);return{...t,todays:r,loading:!1}}return{...t,loading:!1}}).addCase(L1.pending,(t,n)=>({...t,loading:!0})).addCase(L1.fulfilled,(t,n)=>{if(n.payload&&n.payload.todayId){const r=t.todays.map(i=>i.id===n.payload.todayId?{...i,recommend:i.recommend+1}:i);return{...t,todays:r,loading:!1}}return{...t,loading:!1}})}});var hJ=dJ.reducer;const fJ=()=>{const e=tt(h=>h.today.todays),[t,n]=R.exports.useState(e.length),[r,i]=R.exports.useState("16px"),[s,o]=R.exports.useState("left"),a=Gt(),l="https://via.placeholder.com/500x750.png?text=No+Image",c=R.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return R.exports.useEffect(()=>(a(Fl()),c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[a,c]),w(Ut,{children:A(Pg,{children:[A("div",{className:"title",children:[w("h1",{children:"Today Story"}),w("span",{children:"\uCD5C\uC2E0 \uC77C\uC0C1\uC774\uC57C\uAE30 \uB9AC\uC2A4\uD2B8"})]}),e.length>0?w(Fx,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!0,pauseOnFocus:!1,rewind:!1,speed:-1}},extensions:{AutoScroll:dC},children:e.slice(0,10).map(h=>w(Ux,{children:A(aC,{children:[w("div",{className:"top",children:w(Pn,{to:`today/details/${h.id}`,children:h.photo?w("img",{src:h.photo,alt:"today"}):w("img",{src:l,alt:h.title})})}),A("div",{className:"bottom",children:[w("p",{className:"today_category",children:`<${h.type}>`}),w("p",{className:"today_nickname",children:h.nickname}),w("p",{className:"today_title",children:h.title}),w("p",{className:"today_desc",children:h.desc.length>60?h.desc.slice(0,50)+"...":h.desc})]})]})},h.id))}):w(cs,{})]})})},pJ=()=>A(Ev,{children:[w(GX,{}),w(fJ,{}),w(lJ,{}),w(rJ,{})]}),mJ=Ge.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 40px 40px 160px;

  .contents {
    overflow: hidden;
    min-height: 300px;

    .users {
      display: flex;
      padding: 23px 0 23px 23px;
      border: 1px solid #ebebeb;
      border-radius: 10px;
      background-color: #fff;

      .user_detail {
        display: flex;

        .user_thumb {
          position: relative;
          margin-right: 20px;
          width: 100px;
          height: 100px;
          border-radius: 100%;
          flex-shrink: 0;

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border: 1px solid rgba(34, 34, 34, 0.05);
            border-radius: 50%;
          }

          img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }

        .user_info {
          display: flex;
          align-items: center;

          .info_box {
            .name {
              font-size: clamp(16px, 1.5vw, 18px);
              letter-spacing: -0.27px;
              font-weight: 600;
              color: #000;
            }

            .email {
              line-height: 1.2;
              font-size: clamp(12px, 1.25vw, 14px);
              letter-spacing: -0.21px;
              color: rgba(34, 34, 34, 0.5);
            }

            .intro {
              line-height: 1.2;
              font-size: clamp(12px, 1.25vw, 14px);
              margin-bottom: 6px;
            }

            a {
              margin-top: 9px;
              display: inline-flex;
              cursor: pointer;
              align-items: center;
              justify-content: center;
              vertical-align: middle;
              text-align: center;
              color: rgba(34, 34, 34, 0.8);
              background-color: #fff;
              height: 36px;
              line-height: 36px;
              border: 1px solid #ebebeb;
              padding: 6px 12px;
              border-radius: 6px;
              font-size: clamp(12px, 1.5vw, 13.5px);
            }
          }
        }
      }

      .board_detail {
        position: relative;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          bottom: 0;
          background-color: #ebebeb;
          width: 1px;
        }

        .board_item {
          display: inline-block;
          min-width: 159px;
          text-align: center;

          .info {
            display: block;
            line-height: 19px;
            font-size: clamp(16px, 1.8vw, 16px);
            letter-spacing: -0.16px;
            font-weight: 700;
          }
        }

        .title {
          line-height: 19px;
          font-size: clamp(12px, 1.5vw, 13px);
          letter-spacing: -0.07px;
          color: rgba(34, 34, 34, 0.5);
        }
      }

      @media screen and (max-width: 768px) {
        display: block;
        padding: 0;
        background: #f7f6f6;
        border: none;

        .user_detail,
        .board_detail {
          background: #fefefe;
          padding: 12px 0px;
        }

        .user_detail {
          padding: 12px;
        }

        .board_detail {
          margin-top: 12px;
          border-bottom: 1px solid #eee;

          .board_item {
            padding: 6px 0px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0px 100px;
  }
`,gJ=Ge.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 40px 40px 160px;
  min-height: calc(100vh - 60px);

  .contents {
    min-height: 380px;

    .contents_title {
      h3 {
        font-size: clamp(22px, 2vw, 26px);
        padding-bottom: 16px;
        border-bottom: 2px solid #181818;
      }
    }

    .user_profile {
      display: flex;
      display: flex;
      align-items: center;
      padding: 38px 0;
      background-color: #fff;
      border-bottom: 1px solid #ebebeb;

      .user_img {
        width: 90px;
        height: 90px;
        margin-right: 12px;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .user_detail {
        .user_nickname {
          margin-bottom: 12px;
          p {
            font-weight: 700;
            letter-spacing: -0.27px;
            line-height: 1.2;
            color: #000;
            font-size: clamp(18px, 1.5vw, 20px);
          }
        }

        .user_intro {
          margin-bottom: 12px;
          p {
            font-weight: 400;
            letter-spacing: -0.27px;
            line-height: 1.2;
            color: #716a6a;
            font-size: clamp(12.5px, 1vw, 14px);
          }
        }

        .profile_btn {
          display: flex;
          align-items: center;
          gap: 6px;

          .img_change,
          .img_delete {
            display: inline-flex;
            cursor: pointer;
            vertical-align: middle;
            justify-content: center;
            align-items: center;
            border: 1px solid #d3d3d3;
            color: rgba(34, 34, 34, 0.8);
            padding: 0 14px;
            height: 34px;
            border-radius: 10px;
          }

          .img_change {
            label {
              cursor: pointer;

              p {
                letter-spacing: -0.06px;
                font-size: clamp(12px, 1vw, 13px);
              }
            }
          }

          .img_delete {
            p {
              letter-spacing: -0.06px;
              font-size: clamp(12px, 1vw, 13px);
            }
          }
        }
      }
    }

    .profile_info {
      .info_title {
        margin: 12px 0;
        padding-bottom: 6px;
        border-bottom: 1px solid #ebebeb;
      }

      .area {
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        padding: 25px 0 12px;
        position: relative;
        border-bottom: 1px solid #ebebeb;

        &.active {
          border-bottom: none;
        }

        label {
          font-size: clamp(12px, 1vw, 13px);
          letter-spacing: -0.07px;
          font-weight: 400;
          color: rgba(34, 34, 34, 0.5);
        }

        .input_area {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          &.active {
            display: block;
            width: 100%;

            input {
              padding: 7px 0;
              font-size: clamp(14px, 1.5vw, 15px);
              letter-spacing: -0.15px;
              width: 100%;
              line-height: 22px;
              border-bottom: 1px solid rgb(235, 235, 235);
            }

            .btn_area {
              padding-top: 28px;
              text-align: center;

              button {
                padding: 0 38px;
                height: 42px;
                display: inline-flex;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                vertical-align: middle;
                text-align: center;
                border-radius: 12px;
                font-size: 14px;
                letter-spacing: -0.14px;

                &:nth-child(1) {
                  border: 1px solid #d3d3d3;
                  margin-right: 20px;
                }

                &:last-child {
                  background: #181818;
                  color: #ffffff;
                }
              }
            }
          }

          p {
            padding-right: 58px;
            flex: 1;
            padding-top: 8px;
            padding-bottom: 8px;
            font-size: clamp(14px, 1.5vw, 15px);
            letter-spacing: -0.16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .change_btn {
            position: absolute;
            right: 0;
            height: 42px;
            background: #181818;
            padding: 0 20px;
            color: #fefefe;
            border-radius: 6px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 30px 20px 100px;

    .contents {
      .user_profile {
        padding: 26px 0px;
      }
    }
  }
`;var fC="/modart/assets/user.6af8c4bf.png";const yJ=()=>{const e=tt(t=>t.login.user);return console.log(e),w(Ut,{children:w(mJ,{children:e?A("div",{className:"contents",children:[A("div",{className:"users",children:[A("div",{className:"user_detail",children:[w("div",{className:"user_thumb",children:w("img",{src:e.profileImg?e.profileImg:fC,alt:"",style:{maxWidth:"100px",maxHeight:"100px"}})}),w("div",{className:"user_info",children:A("div",{className:"info_box",children:[w("strong",{className:"name",children:e.nickname}),e.intro?w("p",{className:"intro",children:e.intro}):null,w("p",{className:"email",children:e.email}),w(Pn,{to:"/account/edit",children:"\uD504\uB85C\uD544 \uC218\uC815"})]})})]}),A("div",{className:"board_detail",children:[A(Pn,{to:"/",className:"board_item",children:[w("strong",{className:"info",children:"\uAC8C\uC2DC\uAE00"}),w("p",{className:"title",children:"2 (\uAC1C)"})]}),A(Pn,{to:"/",className:"board_item",children:[w("strong",{className:"info",children:"2100P"}),w("p",{className:"title",children:"\uD3EC\uC778\uD2B8"})]})]})]}),w("div",{className:"items"}),w("div",{className:"items"})]}):w(cs,{})})})},vJ=Kn(va,"profile_img"),wJ=async e=>{if(e){const t=Kn(vJ,e.name);return await ga(t,e),await ya(t)}return null},F1=qt("auth/signUp",async e=>{try{const{email:t,password:n,nickname:r,photo:i}=e,o=(await a7(rs,t,n)).user,a=kr(Kt,"users",o.uid),l=await wJ(i);return await kY(a,{uid:o.uid,nickname:r,email:t,profileImg:l||""}),{uid:o.uid,email:t,nickname:r,profileImg:l||""}}catch(t){throw t}}),_J=ua({name:"auth",initialState:null,extraReducers:e=>{e.addCase(F1.fulfilled,(t,n)=>{const{uid:r,email:i,nickname:s}=n.payload;return{...t,uid:r,email:i,nickname:s}}),e.addCase(F1.rejected,(t,n)=>n.error.message)}});var xJ=_J.reducer;function CJ(e){return dn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function SJ(e){return dn({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#8CBCD6",d:"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}},{tag:"circle",attr:{fill:"#B3DDF5",cx:"35",cy:"16",r:"3"}},{tag:"polygon",attr:{fill:"#9AC9E3",points:"20,16 9,32 31,32"}},{tag:"polygon",attr:{fill:"#B3DDF5",points:"31,22 23,32 39,32"}},{tag:"circle",attr:{fill:"#43A047",cx:"38",cy:"38",r:"10"}},{tag:"g",attr:{fill:"#fff"},child:[{tag:"rect",attr:{x:"36",y:"32",width:"4",height:"12"}},{tag:"rect",attr:{x:"32",y:"36",width:"12",height:"4"}}]}]})(e)}function EJ(e){return dn({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}const kJ=({text:e})=>w(CX,{children:w("p",{children:e})}),gR=({text:e,link:t})=>{const[n,r]=R.exports.useState({});R.exports.useState({});const[i,s]=R.exports.useState(!1),[o,a]=R.exports.useState(""),l=Gt(),c=ur(),h=y=>{r({...n,[y.target.name]:y.target.value})};return A(xX,{children:[A("div",{className:"left",children:[w("div",{className:"toggle",onClick:()=>c("/"),children:w(CJ,{})}),A("div",{className:"textbox",children:[w("strong",{className:"title",children:"ModArt"}),w("span",{children:"< \uBAA8\uB4DC\uC544\uD2B8 />"})]})]}),A("div",{className:"right",children:[i&&w(kJ,{text:o}),w("form",{onSubmit:async y=>{y.preventDefault();const _=Object.values(n).every(I=>I!==""),{email:k,password:C,nickname:v,photo:S}=n,T=S||"";if(_){if(e==="\uD68C\uC6D0\uAC00\uC785")try{await l(F1({email:k,password:C,nickname:v,photo:T})).unwrap(),a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),s(!0),c("/account/login")}catch(I){a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),s(!0),console.log(I),setTimeout(()=>{s(!1)},2e3)}else if(e==="\uB85C\uADF8\uC778")try{if(!await l(h1(n)).unwrap()){a("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3);return}c("/")}catch{a("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3)}}},children:e==="\uD68C\uC6D0\uAC00\uC785"?A(Ev,{children:[A("div",{className:"area",children:[w(Iu,{type:"email",name:"email",onChange:h,autoComplete:"off"}),w("label",{htmlFor:"email",children:"Email"})]}),A("div",{className:"area",children:[w(Iu,{type:"password",name:"password",onChange:h,autoComplete:"off"}),w("label",{htmlFor:"password",children:"Password"})]}),A("div",{className:"area",children:[w(Iu,{type:"text",name:"nickname",onChange:h,autoComplete:"off"}),w("label",{htmlFor:"nickname",children:"\uB2C9\uB124\uC784"})]}),A("div",{className:"area file",children:[w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:y=>{const _=y.target.files[0];r({...n,photo:_})}}),A("label",{htmlFor:"photo",className:"file_label",children:[w("span",{children:w(SJ,{})}),w("p",{children:"Profile Image"})]})]}),w(xy,{type:"submit",children:e})]}):A(Ev,{children:[A("div",{className:"area",children:[w(Iu,{type:"email",name:"email",onChange:h}),w("label",{htmlFor:"email",children:"email"})]}),A("div",{className:"area",children:[w(Iu,{type:"password",name:"password",onChange:h}),w("label",{htmlFor:"password",children:"Password"})]}),w(xy,{type:"submit",children:e})]})}),w("div",{className:"socialLogin",children:A(xy,{className:"googleLogin",onClick:async()=>{try{await l(d1()).unwrap(),a("\uAD6C\uAE00\uACC4\uC815 \uB85C\uADF8\uC778 \uB418\uC168\uC2B5\uB2C8\uB2E4."),c("/")}catch(y){a(y.message)}},children:[w("div",{className:"googleIcon",children:w(EJ,{})}),w("p",{className:"googleText",children:"Sign In With Google"})]})}),w("div",{className:"signUp_link",children:w(Pn,{to:`/account/${t==="\uD68C\uC6D0\uAC00\uC785"?"signup":"login"}`,children:t})})]})]})},yR=Ge.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`,TJ=()=>w(yR,{children:w(gR,{text:"\uD68C\uC6D0\uAC00\uC785",link:"\uB85C\uADF8\uC778"})}),bJ=()=>w(yR,{children:w(gR,{text:"\uB85C\uADF8\uC778",link:"\uD68C\uC6D0\uAC00\uC785"})}),DJ=()=>{const e=tt(c=>c.login.user),t=e==null?void 0:e.nickname,n=R.exports.useRef(),[r,i]=R.exports.useState({}),s=Gt(),o=ur(),a=c=>{c.target.name==="photo"?i({...r,[c.target.name]:c.target.files[0]}):i({...r,[c.target.name]:c.target.value})};return R.exports.useEffect(()=>{n.current.focus()},[n]),w(Ut,{children:A(Mg,{children:[w("div",{className:"post_title",children:w("h1",{children:"<OOTD>"})}),A("form",{onSubmit:async c=>{c.preventDefault();try{const h={...r,nickname:t};await s(sR(h)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),o(-1),console.log(r)}catch(h){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(h)}},encType:"multipart/form-data",children:[A("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),t]}),w("input",{ref:n,type:"text",onChange:a,autoComplete:"off",name:"title",placeholder:"\uAE00\uC81C\uBAA9"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"brand",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 ex) \uB098\uC774\uD0A4"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"height",placeholder:"\uD0A4"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"weight",placeholder:"\uBAB8\uBB34\uAC8C"}),w("textarea",{type:"text",name:"desc",onChange:a,placeholder:"contents.."}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:a}),w("label",{htmlFor:"photo",className:"file_label",children:A("p",{children:[w("span",{children:w(ug,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},IJ=()=>(tt(e=>e.login.user),Yl(),w(Ut,{children:w(Mg,{children:w("form",{children:w("p",{className:"nickname"})})})})),AJ=Ge.div`
  background: rgb(49, 53, 51);
  margin: auto;
  width: 100%;
  height: 16rem;
  overflow: hidden;

  .contents {
    margin: auto;
    color: #181818;
    display: flex;
    max-width: 768px;
    height: 100%;
    padding: 0 16px;

    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;

      p {
        color: #fefefe;
        font-size: clamp(16px, 2vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(16px, 1vw, 20px);
      }

      .link-btn {
        margin-top: 20px;
        background: #fefefe;
        border-radius: 4px;
        color: #181818;
        padding: 12px 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
      }
    }

    .image {
      width: 100%;

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 12rem;

    .contents {
      .image {
        width: 75%;
      }
      .text {
      }
    }
  }
`,NJ=Ge.div`
  max-width: 1280px;
  margin: 0 auto;
  background: #ffffff;

  .board_list {
    margin: 12px auto 6px auto;
    max-width: 1280px;
    padding: 1px 3px 1px 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .board_card {
      display: flex;
      min-height: 57px;
      max-height: 70px;
      margin-bottom: 6px;
      border-bottom: 1px solid #ededed;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .board_img {
        img {
          width: 70px;
          height: 100%;
          object-fit: cover;
          vertical-align: top;
          cursor: pointer;
        }
      }

      .items {
        padding: 3px 0px;
        .board_title {
          color: #3262c5;
          font-size: clamp(14.5px, 2vw, 16px);
          cursor: pointer;
          transition: all 0.15s linear;

          &:hover {
            color: #04f;
            text-decoration: underline 0.5px;
          }
        }

        .item_contents {
          .item_brand {
            display: inline-block;
            color: #686868;
            font-size: clamp(11px, 1vw, 12px);
            line-height: 1.5;
            margin-bottom: 2px;
          }

          .sub_items {
            display: flex;
            gap: 6px;

            font-size: clamp(11px, 1.2vw, 13px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .board_card {
      padding: 0 6px;
    }
  }
`,OJ=Ge.div`
  margin: 0px auto;
  margin-top: 30px;
  max-width: 1024px;
  min-height: calc(100vh - 60px);
  padding: 20px 20px 12px 20px;

  .contents {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 12px;

    .board {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 12px;

      .boardImg {
        width: 40%;
        min-height: 400px;
        height: 450px;

        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }

      .boardInfo {
        width: 50%;
        padding: 20px 16px 16px 16px;
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;

          h1 {
            font-size: clamp(16px, 2vw, 20px);
            letter-spacing: -0.025rem;

            span {
              letter-spacing: -0.075rem;
              font-weight: 500;
              font-size: clamp(13px, 1.2vw, 14px);
            }
          }

          .date {
            font-size: clamp(11px, 1vw, 12px);
            letter-spacing: -0.035rem;
          }
        }
        .info {
          .user {
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;

            .user_info {
              display: flex;
              gap: 6px;
              align-items: center;

              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
              }
              p {
                font-size: clamp(13px, 1.5vw, 14px);
              }
            }
            .like {
              p {
                font-size: clamp(12px, 1vw, 13px);
              }
            }
          }

          .area {
            margin-bottom: 12px;

            label {
              font-size: clamp(12px, 1.2vw, 13.5px);
            }

            p {
              font-size: clamp(11px, 1.1vw, 12.5px);
            }

            &:last-child {
              margin-bottom: 0;
            }

            .spec {
              margin-top: 4px;
              p {
                line-height: 1.25;
              }
            }
          }
        }

        .btnbox {
          width: 100%;
          margin-top: 30px;
          text-align: center;

          button {
            padding: 12px 20px;
            font-size: clamp(11px, 1vw, 14px);
            cursor: pointer;
            margin-right: 12px;

            &:nth-child(1) {
              color: red;
            }

            &:nth-child(2) {
              color: #09f;
            }
          }
        }
      }
    }

    .comment {
      padding: 16px 20px 12px 20px;
      width: 100%;
      min-height: 120px;

      .comment_form {
        .users {
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          .profile {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            .profileImg {
              width: 36px;
              height: 36px;
              border-radius: 50%;
            }

            .nickname {
              font-size: clamp(12px, 1vw, 14px);
            }
          }

          .submit_btn {
            cursor: pointer;
            border: 1px solid #cecece;
            padding: 9px 20px;
            border-radius: 4px;
          }
        }
        .form {
          width: 100%;
          padding: 12px;
          textarea {
            resize: none;
            width: 100%;
            height: 100px;
            padding: 12px;
            outline: none;
            border: 1px solid #cecece;
          }
        }
      }

      .comment_list {
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contents {
      .board {
        display: block;

        .boardImg {
          width: 100%;
          min-height: 350px;
          height: 400px;
        }

        .boardInfo {
          width: 100%;
          padding: 12px 6px 6px;
        }
      }
    }
  }
`,RJ=()=>{const{id:e}=Yl(),t=tt(l=>l.board.boards),n=tt(l=>l.login.user),[r,i]=R.exports.useState(!1),s=Gt(),o=t.find(l=>l.id===e),a=()=>{i(!r)};return R.exports.useEffect(()=>{s(Rg())},[s]),w(Ut,{children:w(OJ,{children:o&&A("div",{className:"contents",children:[A("div",{className:"board",children:[w("div",{className:"boardImg",children:w("img",{src:o.photo,alt:o.nickname})}),A("div",{className:"boardInfo",children:[A("div",{className:"title",children:[A("h1",{children:["Information ",w("span",{children:"< \uC2A4\uD0C0\uC77C \uC815\uBCF4 >"})]}),A("p",{className:"date",children:[o.createdAt,"..."]})]}),A("div",{className:"info",children:[A("div",{className:"user",children:[A("div",{className:"user_info",children:[w("img",{src:hC,alt:o.nickname}),w("p",{children:o.nickname})]}),w("div",{className:"like",children:o.like?A("p",{children:[o.like,"(\uD68C)"]}):w("p",{children:"30 (\uD68C)"})})]}),A("div",{className:"area",children:[w("label",{children:"Title"}),w("p",{children:o.title})]}),A("div",{className:"area",children:[w("label",{children:"Brand"}),w("p",{children:o.brand})]}),A("div",{className:"area",children:[w("label",{children:"Spec"}),A("div",{className:"spec",children:[A("p",{children:["Height: ",o.height]}),A("p",{children:["Weight: ",o.weight]})]})]}),A("div",{className:"area",children:[w("label",{children:"Contents"}),w("p",{children:o.desc})]})]}),A("div",{className:"btnbox",children:[w("button",{className:"like",children:"\uC88B\uC544\uC694"}),w("button",{onClick:a,children:r?"\uB313\uAE00\uB2EB\uAE30":"\uB313\uAE00\uB2EC\uAE30"})]})]})]}),r?A("div",{className:"comment",children:[A("div",{className:"comment_form",children:[A("div",{className:"users",children:[A("div",{className:"profile",children:[w("img",{className:"profileImg",src:n.profileImg,alt:n.nickname}),w("p",{className:"nickname",children:n.nickname})]}),w("button",{className:"submit_btn",type:"submit",children:"\uB313\uAE00\uB4F1\uB85D"})]}),w("div",{className:"form",children:w("textarea",{name:"comment",id:"comment"})})]}),w("ul",{className:"comment_list",children:w("li",{})})]}):null]})})})},PJ=Ge.div`
  margin: auto;
  width: 100%;
  height: 16rem;
  background: #88e3ac;
  overflow: hidden;

  .contents {
    margin: auto;
    color: #181818;
    display: flex;
    max-width: 768px;
    height: 100%;
    padding: 0 16px;

    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;

      p {
        color: #fefefe;
        font-size: clamp(16px, 2.5vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(15px, 2vw, 20px);
      }

      .link-btn {
        margin-top: 20px;
        background: #181818;
        border-radius: 4px;
        color: #fefefe;
        padding: 12px 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
      }
    }

    .image {
      padding: 20px;
      width: 100%;

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 13rem;
  }
`,MJ=Ge.div`
  max-width: 1280px;
  background: #ffffff;
  margin: 0 auto;

  .photo_list {
    max-width: 1280px;
    margin: 12px auto 6px auto;
    padding: 6px 3px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .photo_card {
      display: flex;
      min-height: 57px;
      max-height: 70px;
      margin-bottom: 6px;
      border-bottom: 1px solid #fff;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .photo_img {
        cursor: pointer;
        img {
          width: 70px;
          height: 100%;
          vertical-align: top;
        }
      }

      .items {
        padding: 3px 0px;
        .photo_title {
          color: #3262c5;
          font-size: clamp(14.5px, 2vw, 16px);
          cursor: pointer;
          transition: all 0.15s linear;

          &:hover {
            color: #04f;
            text-decoration: underline 0.5px;
          }
        }

        .item_contents {
          .item_category {
            display: inline-block;
            color: #686868;
            font-size: clamp(11px, 1vw, 12px);
            line-height: 1.5;
            margin-bottom: 2px;
          }

          .sub_items {
            display: flex;
            gap: 6px;

            font-size: clamp(11px, 1.2vw, 13px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .photo_card {
      padding: 0 6px;
    }
  }
`,LJ=Ge.div`
  margin: 0 auto;
  max-width: 964px;
  min-height: calc(100vh - 60px);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .contents {
    max-width: 654px;
    width: 100%;
    word-break: break-all;

    .photo_users {
      width: 100%;
      display: flex;
      gap: 12px;
      margin-bottom: 16px;

      .user_img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
          object-fit: cover;
        }
      }

      .user {
        display: flex;
        flex-direction: column;
        p {
          font-weight: 700;
          font-size: clamp(13px, 1.5vw, 16px);
        }

        span {
          line-height: 1;
          color: #9d8e8e;
          font-size: clamp(12px, 1.25vw, 13.5px);
        }
      }
    }

    .snapImg {
      display: block;
      width: 100%;
      height: 450px;
      min-height: 400px;
      background: #fafafafa;
      border-radius: 6px;
      overflow: hidden;

      img {
        vertical-align: top;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }
    }

    .photo_info {
      padding: 12px 6px 0px 6px;

      .icon {
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .link {
          display: flex;
          align-items: center;
          justify-content: center;

          button {
            width: 30px;
            height: 30px;
            margin-right: 12px;
            background: #333;
            border-radius: 50%;
            position: relative;
            color: #fff;

            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 60%;
              height: 60%;
            }

            &:nth-child(1) {
              color: #e7a7a7;
            }
            &:nth-child(2) {
              color: #a7c6e7;
            }
          }
        }

        .date {
          font-size: clamp(12px, 1.5vw, 14px);
          font-weight: 500;
          color: #9d8e8e;
        }
      }

      .photo_title {
        padding-top: 12px;
        .title {
          font-size: clamp(14px, 1.8vw, 17px);
          margin-bottom: 6px;
          letter-spacing: 0.025rem;
        }

        .desc {
          letter-spacing: -0.015rem;
          text-indent: 3px;
          font-size: clamp(13px, 1.4vw, 15px);
        }
        .over {
          margin-left: 6px;
          cursor: pointer;
          color: #7d7373;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 12px;
    .contents {
      .snapImg {
        min-height: 300px;
        height: 350px;
      }
    }
  }
`,$J=()=>{const e=tt(l=>l.login.user),t=tt(l=>l.photo.photos)||null,n=Gt(),r=ur(),[i,s]=R.exports.useState([]),o=()=>e?r("/photo/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),a=l=>{r(`/photo/details/${l.id}`)};return R.exports.useEffect(()=>{n(Fg())},[n]),R.exports.useEffect(()=>{const l=[...t].sort((c,h)=>h.createdAt-c.createdAt);s(l)},[t]),A(Ut,{className:"photo_section",children:[w(PJ,{children:A("div",{className:"contents",children:[A("div",{className:"text",children:[w("p",{children:"Free PhotoZone"}),w("span",{children:"\uC790\uC2E0\uC758 \uC0AC\uC9C4\uC2E4\uB825\uC744 \uBF50\uB0B4\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:o,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(qW,{})})]})}),A(MJ,{children:[w("div",{className:"filter"}),w("ul",{className:"photo_list",children:i.length>0?i.slice(0,10).map(l=>A("li",{className:"photo_card",children:[w("div",{className:"photo_img",onClick:()=>a(l),children:w("img",{src:l.photo,alt:l.title})}),A("div",{className:"items",children:[w("h3",{className:"photo_title",onClick:()=>a(l),children:l.title.length>30?l.title.subString(0,30)+"...":l.title}),A("div",{className:"item_contents",children:[w("span",{className:"item_category",children:l.category}),A("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:l.nickname}),w("span",{className:"item_date",children:l.createdAt})]})]})]})]},l.id)):w(cs,{})})]})]})};(()=>{var e={d:(s,o)=>{for(var a in o)e.o(o,a)&&!e.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},t={};function n(s,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}e.r(t),e.d(t,{default:()=>i});var r=function(){function s(){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(l,c,h,p,m,x){return h>p&&(l=Math.round(l*p/h),h=p),l>c&&(h=Math.round(h*c/l),l=c),m&&h<m&&(l=Math.round(l*m/h),h=m),x&&l<x&&(h=Math.round(h*x/l),l=x),{height:l,width:h}}},{key:"resizeAndRotateImage",value:function(l,c,h,p,m){var x=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",y=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,_=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,k=y/100,C=document.createElement("canvas"),v=l.width,S=l.height,T=this.changeHeightWidth(S,h,v,c,p,m);!_||_!==90&&_!==270?(C.width=T.width,C.height=T.height):(C.width=T.height,C.height=T.width),v=T.width,S=T.height;var I=C.getContext("2d");return I.fillStyle="rgba(0, 0, 0, 0)",I.fillRect(0,0,v,S),I.imageSmoothingEnabled&&I.imageSmoothingQuality&&(I.imageSmoothingQuality="high"),_&&(I.rotate(_*Math.PI/180),_===90?I.translate(0,-C.width):_===180?I.translate(-C.width,-C.height):_===270?I.translate(-C.height,0):_!==0&&_!==360||I.translate(0,0)),I.drawImage(l,0,0,v,S),C.toDataURL("image/".concat(x),k)}},{key:"b64toByteArrays",value:function(l,c){for(var h=atob(l.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),p=[],m=0;m<h.length;m+=512){for(var x=h.slice(m,m+512),y=new Array(x.length),_=0;_<x.length;_++)y[_]=x.charCodeAt(_);var k=new Uint8Array(y);p.push(k)}return p}},{key:"b64toBlob",value:function(l,c){var h=this.b64toByteArrays(l,c);return new Blob(h,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(l,c,h){var p=this.b64toByteArrays(l,h);return new File(p,c,{type:h,lastModified:new Date})}},{key:"createResizedImage",value:function(l,c,h,p,m,x,y){var _=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",k=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,C=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,v=new FileReader;if(!l)throw Error("File Not Found!");if(l.type&&!l.type.includes("image"))throw Error("File Is NOT Image!");v.readAsDataURL(l),v.onload=function(){var S=new Image;S.src=v.result,S.onload=function(){var T=s.resizeAndRotateImage(S,c,h,k,C,p,m,x),I="image/".concat(p);switch(_){case"blob":var P=s.b64toBlob(T,I);y(P);break;case"base64":y(T);break;case"file":var N=l.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(p.toString()),O=s.b64toFile(T,N,I);y(O);break;default:y(T)}}},v.onerror=function(S){throw Error(S)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,l,c,h,p,m,x,y){return r.createResizedImage(s,o,a,l,c,h,p,m,x,y)}}})();const FJ=()=>{const[e,t]=R.exports.useState({}),[n,r]=R.exports.useState([]),i=tt(h=>h.login.user),s=i==null?void 0:i.nickname,o=Gt(),a=ur(),l=h=>{if(h.target.name==="photo")t({...e,[h.target.name]:h.target.files[0]});else if(h.target.name==="category"){const{value:p,checked:m}=h.target;r(m?[...n,p]:n.filter(x=>x!==p))}else t({...e,[h.target.name]:h.target.value})};return w(Ut,{children:A(Mg,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Photos>"})}),A("form",{encType:"multipart/form-data",onSubmit:async h=>{h.preventDefault();try{const p={...e,nickname:s,category:n};await o(pR(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[A("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),A("div",{className:"category-wrap",children:[A("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC790\uC5F0",onChange:l}),w("i",{}),w("span",{children:"\uC790\uC5F0"})]}),A("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC778\uBB3C",onChange:l}),w("i",{}),w("span",{children:"\uC778\uBB3C"})]}),A("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC74C\uC2DD",onChange:l}),w("i",{}),w("span",{children:"\uC74C\uC2DD"})]}),A("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:l}),w("i",{}),w("span",{children:"\uC77C\uC0C1"})]})]}),w("input",{type:"text",placeholder:"\uC81C\uBAA9",name:"title",autoComplete:"off",onChange:l}),w("input",{type:"text",placeholder:"\uC124\uBA85",name:"desc",autoComplete:"off",onChange:l}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:l}),w("label",{htmlFor:"photo",className:"file_label",children:A("p",{children:[w("span",{children:w(ug,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},UJ=()=>{const e=tt(o=>o.login.user),t=tt(o=>o.board.boards)||null,n=ur(),r=Gt(),i=()=>e?n("/board/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),s=o=>{n(`/board/details/${o.id}`)};return R.exports.useEffect(()=>{r(Rg())},[r]),A(Ut,{className:"ootd_section",children:[w(AJ,{children:A("div",{className:"contents",children:[A("div",{className:"text",children:[w("p",{children:"OOTD of the day"}),w("span",{children:"\uC790\uC2E0\uC758 OOTD\uB97C \uACF5\uC720 \uD574\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:i,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(QW,{})})]})}),w(NJ,{children:w("ul",{className:"board_list",children:t.length>0?t.map(o=>A("li",{className:"board_card",children:[w("div",{className:"board_img",onClick:()=>s(o),children:w("img",{src:o.photo,alt:o.title})}),A("div",{className:"items",children:[w("h3",{className:"board_title",onClick:()=>s(o),children:o.title.length>30?o.title.subString(0,30)+"...":o.title}),A("div",{className:"item_contents",children:[w("span",{className:"item_brand",children:o.brand}),A("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:o.nickname}),w("span",{className:"item_date",children:o.createdAt})]})]})]})]},o.id)):w(cs,{})})})]})},BJ=()=>{const{id:e}=Yl();return console.log(e),w("div",{children:"PhotoEdit"})};function zJ(e){return dn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"}}]})(e)}const VJ=()=>{const{id:e}=Yl(),t=tt(o=>o.photo.photos),[n,r]=R.exports.useState(!1),i=Gt();ur();const s=t.find(o=>o.id===e);return R.exports.useEffect(()=>{i(Fg())},[i]),w(Ut,{children:w(LJ,{children:s&&A("div",{className:"contents",children:[A("div",{className:"photo_users",children:[w("div",{className:"user_img",children:w("img",{src:hC,alt:s.nickname})}),A("div",{className:"user",children:[w("p",{children:s.nickname}),w("span",{children:s.category})]})]}),w("div",{className:"snapImg",children:w("img",{src:s.photo,alt:s.nickname})}),A("div",{className:"photo_info",children:[A("div",{className:"icon",children:[A("div",{className:"link",children:[w("button",{className:"like",children:w(GW,{})}),w("button",{className:"comment",children:w(zJ,{})})]}),A("span",{className:"date",children:[s.createdAt," ..."]})]}),A("div",{className:"photo_title",children:[w("h1",{className:"title",children:s.title}),A("p",{className:"desc",children:[s.desc.length>60&&!n?s.desc.slice(0,60):s.desc,s.desc.length>60&&w("span",{className:"over",onClick:()=>r(!n),children:n?"... \uC811\uAE30":"... \uB354\uBCF4\uAE30"})]})]})]})]})})})},jJ=Ge.div`
  margin: auto;
  width: 100%;
  height: 16rem;
  background: #09f;
  overflow: hidden;

  .contents {
    margin: auto;
    color: #181818;
    display: flex;
    max-width: 768px;
    height: 100%;
    padding: 0 16px;

    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;

      p {
        color: #fefefe;
        font-size: clamp(16px, 2vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(16px, 1.6vw, 20px);
      }

      .link-btn {
        margin-top: 20px;
        background: #181818;
        border-radius: 4px;
        color: #fefefe;
        padding: 12px 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
      }
    }

    .image {
      padding: 20px;
      width: 100%;

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 13rem;
  }

`,YJ=Ge.div`
  max-width: 1280px;
  margin: 0 auto;
  background: #ffffff;

  .today_list {
    margin: 12px auto 0px auto;
    max-width: 1280px;
    padding: 3px 0px;
    display: flex;
    flex-direction: column;
    background: #FAFAFA;
    gap: 6px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .today_card {
      display: flex;
      margin: 0px 0px 6px 0px;
      padding: 3px;
      min-height: 57px;
      max-height: 70px;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .today_type {
        min-width: 42px;
        width: 76px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 12px;

        span {
          font-size: clamp(12.5px, 1.5vw, 13.5px);
        }
      }

      .today_img {
        padding-left: 12px;
        img {
          width: 70px;
          height: 100%;
          object-fit: cover;
          vertical-align: top;
          cursor: pointer;
        }
      }

      .items {
        padding: 3px 2px;

        .today_title {
          color: rgb(50, 98, 197);
          font-size: clamp(14.5px, 2vw, 16px);
          cursor: pointer;
          transition: all 0.15s linear 0s;

          &:hover {
            color: rgb(0, 68, 255);
            text-decoration: underline 0.5px;
          }
        }

        .item_type {
          display: inline-block;
          color: rgb(104, 104, 104);
          font-size: clamp(11px, 1vw, 12px);
          line-height: 1.5;
          margin-bottom: 2px;
        }

        .sub_items {
          display: flex;
          gap: 6px;
          font-size: clamp(11px, 1.2vw, 13px);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .today_list {
      gap: 3px;
      .today_card {
        gap: 0px;
        margin: 0px 0px 2px;

        .today_type {
          padding-right: 0px;
          max-width: 70px;
        }

        .today_img {
          padding-left: 0px;
          padding-right: 6px;
        }
      }
    }  
  }
`,WJ=Ge.div`
  margin: 0px auto;
  margin-top: 30px;
  max-width: 964px;
  width: 100%;
  min-height: 460px;
  padding: 0px 6px;
  border-radius: 6px;
  background: #FFFFFF;

  .contents {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .today_header {
        display: flex;
        padding: 16px 12px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        
        .today_title {
          font-size: clamp(16px, 1.5vw, 18px);
          .today_type {
            margin-right: 12px;
            font-size: clamp(12px, 1vw, 13px);
            font-weight: 500;
          }
        }
        
        .today_date {
          font-size: clamp(12px, 1vw, 13px);
          color: #333;
          font-weight: 400;
        }
    }

    .user_info {
      padding: 16px 12px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid #eee;

      .user_nickname {
        font-size: clamp(14px, 1.5vw, 15px);
      }

      .items {
        span {
          margin-right: 12px;
          font-size: clamp(12px, 1vw, 13px);

          &:last-child {
            margin-right: 0px;
          }
        }
      }
    }

    .today_desc {
      padding: 16px 12px;
      
      .desc {
        margin-bottom: 12px;
        display: inline-block;
      min-height: 200px;
      width: 100%;
      padding: 12px 6px 4px 6px;
      }
      
      .recommend {
        margin: 6px auto;
        display: block;
       padding : 12px 20px;
       font-size: clamp(14px, 1.5vw, 16px);
       background: rgba(47, 42, 42, 0.701);
       border-radius: 6px;
       color: #FFF;

      }
    }

    .comment {
      .comment_header {
        width: 100%;
        padding: 12px;
        background: #f3f3f3;
        border-radius: 6px;
        border: 1px solid #ccc;

        p {
          font-size: clamp(13px, 1.5vw, 14px);
        }
      }

      .comment_list {
        margin-top: 16px;

        .comment_item {
          padding: 6px 20px;
          .top {
            display: flex;
            align-items: center;
            margin-bottom: 6px;
            
            img {
              width: 40px;
              height: 40px;
              border-radius: 6px;
              object-fit: cover;
            }
  
            span {
              font-size: clamp(13px, 1.35vw, 14px);
  
              &.comment_name {
                font-weight: 600;
                margin-left: 12px;
              }
  
              &.comment_date {
                margin-left: 12px;
                font-size: clamp(12px, 1.2vw, 13px);
                font-weight: 400;
                color: #888;
              }
            }
          }
  
          .bt {
            padding: 12px 6px;
          }
        }
      }
      
      .comment_form {
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #e8e1e1;
        border-radius: 6px;

        .profile {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          gap: 6px;

          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }
          
          span {
            font-size: clamp(13px, 1.35vw, 14px);
            font-weight: 700;
          }
        }

        .comment_text {
          font-size: clamp(12.5px, 1.5vw, 14px);
          font-weight: 600;
          margin-bottom: 12px;
        }

        form {
          margin-top: 6px;
          width: 100%;
          display: flex;
          gap: 6px;

          input {
            border: 1px solid #ccc;
            padding: 6px 20px;
            width: 100%;
            height: 56px;
            background: #ededed;

            &:focus {
              background: #FFF;
              border: 2px solid #09f;
            }
          }

          button[type="submit"] {
            width: 96px;
            height: 56px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }
        }
      }
    }
  }
`,HJ=()=>{const{id:e}=Yl(),t=tt(l=>l.login.user),r=tt(l=>l.today.todays).find(l=>l.id===e),i=Gt(),s=ur(),o=l=>{i(L1({todayId:l})).then(()=>{i(Fl())}).catch(c=>{console.error("\uCD94\uCC9C\uC744 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",c)})},a=()=>{if(t)return null;confirm("\uB85C\uADF8\uC778 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C~?")?s("account/login"):document.querySelector(".comment_input").disabled=!0};return R.exports.useEffect(()=>{i(Fl())},[i]),w(Ut,{className:"today_detail_section",children:w(WJ,{children:r&&A("div",{className:"contents",children:[A("header",{className:"today_header",children:[A("h2",{className:"today_title",children:[w("span",{className:"today_type",children:`(${r.type})`}),r.title.length>30?r.title.subStr(0,30)+"...":r.title]}),w("p",{className:"today_date",children:r.createdAt})]}),A("div",{className:"user_info",children:[w("p",{className:"user_nickname",children:r.nickname}),A("div",{className:"items",children:[w("span",{children:"\uB313\uAE00"}),A("span",{children:["\uC870\uD68C\uC218 ",r.views]}),A("span",{children:["\uCD94\uCC9C ",r.recommend>0?r.recommend:0]})]})]}),A("div",{className:"today_desc",children:[w("p",{className:"desc",children:r.desc}),w("button",{className:"recommend",onClick:()=>o(r.id),children:"\u{1F44D}\uCD94\uCC9C\uD558\uAE30"})]}),A("div",{className:"comment",children:[w("header",{className:"comment_header",children:w("p",{children:"\uB313\uAE00 2\uAC1C"})}),A("ul",{className:"comment_list",children:[A("li",{className:"comment_item",children:[A("div",{className:"top",children:[w("img",{src:hC,alt:""}),w("span",{className:"comment_name",children:"\uC5B4\uC2EC"}),w("span",{className:"comment_date",children:"3\uBD84 \uC804"})]}),w("div",{className:"bt",children:w("p",{className:"comment_desc",children:"\uC624\uC6B0~!! \uB9F9\uAD6C\uC528 \uBC18\uAC11\uC2B5\uB2C8\uB2E4\u314E\u314E\u314E"})})]}),A("div",{className:"comment_form",children:[A("div",{className:"profile",children:[w("img",{src:t.profileImg,alt:t.nickname}),w("span",{children:t.nickname})]}),w("p",{className:"comment_text",children:"\uB313\uAE00 \uC4F0\uAE30"}),A("form",{children:[w("input",{className:"comment_input",type:"text",placeholder:"\uB313\uAE00...",onClick:a}),w("button",{type:"submit",children:"\uB4F1\uB85D"})]})]})]})]})]})})})},GJ=()=>{const[e,t]=R.exports.useState({photo:null,fileName:""}),n=tt(l=>l.login.user),r=n==null?void 0:n.nickname,i=Gt(),s=ur(),o=l=>{if(l.target.name==="photo"){const c=l.target.file[0];c&&t({...e,photo:c,fileName:c.name})}else t({...e,[l.target.name]:l.target.value})};return w(Ut,{children:A(Mg,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Todays Story>"})}),A("form",{encType:"multipart/form-data",onSubmit:async l=>{l.preventDefault();try{const c={...e,nickname:r};await i(mR(c)).unwrap(),s(-1),console.log(e)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},children:[A("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),r]}),w("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:o}),w("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:o}),A("select",{name:"type",value:e.type||"",placeholder:"\uC885\uB958",autoComplete:"off",onChange:o,children:[w("option",{value:"",children:"\uC885\uB958 \uC120\uD0DD"}),w("option",{value:"\uD328\uC158",children:"\uD328\uC158"}),w("option",{value:"\uC5F0\uC608\uC778",children:"\uC5F0\uC608\uC778"}),w("option",{value:"\uC6B4\uB3D9",children:"\uC6B4\uB3D9"}),w("option",{value:"\uC720\uBA38",children:"\uC720\uBA38"}),w("option",{value:"\uBBF8\uC6A9",children:"\uBBF8\uC6A9"}),w("option",{value:"\uBBF8\uC2A4\uD130\uB9AC",children:"\uBBF8\uC2A4\uD130\uB9AC"})]}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:o}),w("label",{htmlFor:"photo",className:"file_label",children:A("p",{children:[w("span",{children:w(ug,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30",w("span",{className:"label_text",children:e.fileName})]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})};function qJ(e){return dn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"}}]})(e)}const KJ=()=>{const e=tt(h=>h.login.user),t=tt(h=>h.today.todays),[n,r]=R.exports.useState([]),i=ur(),s=Gt(),o="https://via.placeholder.com/500x750.png?text=No+Image",a=()=>e?i("/today/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),l=h=>{s($1({todayId:h})).then(()=>{s(Fl())}).catch(p=>{console.error("Error incrementing Views:",p)})},c=h=>{i(`/today/details/${h.id}`)};return R.exports.useEffect(()=>{s(Fl())},[s]),R.exports.useEffect(()=>{const h=[...t].sort((p,m)=>m.createdAt-p.createdAt);r(h),console.log(h)},[t]),A(Ut,{className:"today_section",children:[w(jJ,{children:A("div",{className:"contents",children:[A("div",{className:"text",children:[w("p",{children:"Free Talking"}),w("span",{children:"\uD558\uB8E8\uC758 \uC77C\uC0C1\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694:)"}),w("button",{className:"link-btn",onClick:a,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(qJ,{})})]})}),w(YJ,{children:w("ul",{className:"today_list",children:n?n.slice(0,10).map(h=>A("li",{className:"today_card",children:[w("div",{className:"today_type",children:w("span",{children:h.type})}),w("div",{className:"today_img",children:h.photo?w("img",{src:h.photo,loading:"lazy",alt:h.title}):w("img",{src:o,loading:"lazy",alt:h.title})}),A("div",{className:"items",children:[w("h3",{className:"today_title",onClick:()=>{c(h),l(h.id)},children:h.title.length>30?h.title.subString(0,30)+"...":h.title}),A("div",{className:"item_contents",children:[w("span",{className:"item_type",children:h.type}),A("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:h.nickname}),w("span",{className:"item_date",children:h.createdAt})]})]})]})]},h.id)):w(cs,{})})})]})},QJ=()=>{const e=tt(a=>a.login.user),t=tt(a=>a.qna.questions),n=ur(),r=Gt(),i=()=>e?n("/qna/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),s=a=>{n(`/qna/details/${a.id}`)},o=a=>{r(R1({questionId:a})).then(()=>{r(Rs())}).catch(l=>{console.error("Error incrementing views:",l)})};return R.exports.useEffect(()=>{r(Rs())},[r]),A(Ut,{className:"qna_section",children:[w(JX,{children:A("div",{className:"contents",children:[A("div",{className:"text",children:[w("p",{children:"Ask me any questions"}),w("span",{children:"\uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC744 \uD574\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:i,children:"\uC9C8\uBB38\uD558\uAE30"})]}),w("div",{className:"image",children:w(KW,{})})]})}),w(eJ,{children:w("ul",{className:"qna_list",children:t&&t.length>0?t.map(a=>A("li",{className:"qna_card",onClick:()=>o(a.id),children:[w("p",{className:"number",children:a.number}),w("p",{className:"title",onClick:()=>s(a),children:a.title}),w("p",{className:"nickname",children:a.nickname}),w("p",{className:"date",children:a.createdAt}),A("p",{className:"views",children:[a.views?a.views:0," \uD68C"]})]},a.id)):w(cs,{})})})]})},XJ=()=>{const{id:e}=Yl(),[t,n]=R.exports.useState(!1),[r,i]=R.exports.useState(""),s=tt(y=>y.qna.questions),o=tt(y=>y.login.user),a=Gt(),l="https://via.placeholder.com/500x750.png?text=No+Image",c=s.find(y=>y.id===e),h=y=>{a(O1({qnaId:y})).then(()=>{a(Rs())}).catch(_=>{console.error("\uC88B\uC544\uC694\uB97C \uD074\uB9AD \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4!",_)})},p=()=>(o||window.alert("\uB85C\uADF8\uC778\uD558\uC5EC\uC57C \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4!"),null),m=y=>{if(!o){window.alert("\uB85C\uADF8\uC778\uD558\uC5EC\uC57C \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4!");return}if(r.trim()===""){window.alert("\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694!");return}const _={text:r,author:o.nickname,profileImg:o.profileImg||"",createdAt:te().format("YYYY-MM-DD HH:mm:ss")};a(P1({questionId:y,commentData:_})).then(()=>{i(""),a(Rs())}).catch(k=>{console.error("\uB313\uAE00\uC744 \uCD94\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",k)})},x=(y,_)=>{o||window.alert("\uB85C\uADF8\uC778 \uD558\uC5EC\uC57C \uC0AD\uC81C \uAC00\uB2A5\uD569\uB2C8\uB2E4!");const k=c.comments[_];if(k&&k.author!==o.nickname){window.alert("\uB2E4\uB978 \uC720\uC800\uC758 \uB313\uAE00\uC740 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4!");return}a(M1({questionId:y,commentId:_})).then(()=>{a(Rs())}).catch(C=>{console.error(C)})};return R.exports.useEffect(()=>{a(Rs())},[a]),w(Ut,{children:w(ZX,{children:c&&A("div",{className:"qna_card",children:[A("header",{className:"card_header",children:[A("h1",{children:[w("span",{children:"Q."}),c.title]}),A("div",{className:"card_info",children:[A("div",{className:"inner",children:[w("div",{className:"profile_img",children:w("img",{src:fC,alt:c.nickname})}),w("span",{children:c.nickname})]}),A("div",{className:"inner",children:[A("span",{children:["\u{1F44D} ",c.recommend]}),w("span",{className:"date",children:c.createdAt})]})]})]}),w("div",{className:"card_contents",children:w("p",{className:"card_desc",children:c.desc})}),A("footer",{className:"card_footer",children:[A("div",{className:"inner",children:[A("button",{className:"qna_btn",onClick:()=>h(c.id),children:[w(JW,{})," \uC88B\uC544\uC694"]}),A("button",{className:"qna_btn",children:[w(tH,{})," \uC2A4\uD06C\uB7A9\uD558\uAE30"]}),A("button",{className:"qna_btn",onClick:()=>n(!t),children:[w(XW,{})," \uB2F5\uBCC0\uD558\uAE30"]})]}),!t&&A("div",{className:"comment",children:[A("div",{className:"comment_in",children:[A("div",{className:"top",children:[o?A("div",{className:"profile",children:[w("img",{src:o.profileImg,alt:o.nickname}),w("span",{children:o.nickname})]}):w(Pn,{to:"/account/login",children:"\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."}),w("button",{className:"submit",onClick:()=>m(c.id),children:"\uB2F5\uBCC0\uB4F1\uB85D"})]}),w("div",{className:"bottom",children:w("textarea",{onClick:p,onChange:y=>i(y.target.value),placeholder:"\uB2F5\uBCC0\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694..",value:r})})]}),c.comments&&Object.keys(c.comments).map(y=>{const _=c.comments[y];return A("div",{className:"comment_item",children:[A("div",{className:"profile",children:[A("div",{className:"user",children:[o&&o.profileImg?w("img",{src:o.profileImg,alt:o.nickname}):w("img",{src:l,alt:_.author}),w("span",{children:_.author})]}),w("span",{className:"date",children:_.createdAt})]}),A("div",{className:"comment_desc",children:[w("p",{children:_.text}),o&&w("button",{className:"delete_comment",onClick:()=>x(c.id,y),children:"\uB313\uAE00 \uC0AD\uC81C"})]})]},y)})]})]})]})})})},JJ=()=>w("div",{children:"QnaEdit"}),ZJ=()=>{const[e,t]=R.exports.useState({}),n=tt(l=>l.login.user),r=n==null?void 0:n.nickname,i=Gt(),s=ur(),o=l=>{if(l.target.name==="photo"){const c=l.target.file[0];c&&t({...e,photo:c,fileName:c.name})}else t({...e,[l.target.name]:l.target.value})};return w(Ut,{className:"qna_write_section",children:A(nJ,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Question>"})}),w("div",{className:"qna_write",children:A("form",{encType:"multipart/form-data",onSubmit:async l=>{l.preventDefault();try{const c={...e,nickname:r};await i(fR(c)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),s(-1)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},children:[w("p",{className:"nickname",children:r}),A("div",{className:"qna_cardForm",children:[A("div",{className:"title",children:[w("span",{className:"q",children:w(eH,{})}),w("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:o}),w("span",{className:"number_check",children:"(0/70\uC790)"})]}),w("div",{className:"desc",children:w("textarea",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:o})}),A("div",{className:"file_input",children:[w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:o}),w("label",{htmlFor:"photo",className:"file_label",children:A("p",{children:[w("span",{children:w(ug,{})}),"\uD30C\uC77C\uB123\uAE30"]})})]}),w("button",{className:"submit",type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})]})})},eZ=()=>w("div",{children:"TodayEdit"}),tZ=()=>{const[e,t]=R.exports.useState({}),[n,r]=R.exports.useState({}),[i,s]=R.exports.useState(null),[o,a]=R.exports.useState(null),l=tt(y=>y.login.user),c=Gt(),h=y=>{t(_=>({..._,name:y==="name"?!_.name:_.name,email:y==="email"?!_.email:_.email,intro:y==="intro"?!_.intro:_.intro,password:y==="password"?!_.password:_.password}))},p=y=>{const{name:_,value:k}=y.target;y.target.name==="photo"?s(y.target.files[0]):r(C=>({...C,[_]:k}))},m=async y=>{try{const _=Kn(va,"users_photos"),k=Kn(_,y.name);return await ga(k,y),await ya(k)}catch(_){return console.log("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",_),null}},x=async y=>{try{let _={};if(e.name&&n.nickname&&(_.nickname=n.nickname,h("name")),e.email&&n.email&&(_.email=n.email,h("email")),e.intro&&n.intro&&(_.intro=n.intro,h("intro")),e.password&&n.password&&(_.password=n.password,h("password")),i){const k=await m(i);_.photo=k,h("photo"),s(null)}if(Object.keys(_).length>0){await c(p1(_)).unwrap();const k={...l,..._};c({type:"login/updateUserData",payload:k})}}catch(_){console.log("\uB370\uC774\uD130 \uC5C5\uB370\uC774\uD2B8\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.",_)}};return R.exports.useEffect(()=>{t({})},[l]),R.exports.useEffect(()=>{if(i){const y=new FileReader;y.onload=_=>{a(_.target.result)},y.readAsDataURL(i)}else a(null)},[i]),w(Ut,{children:w(gJ,{children:A("div",{className:"contents",children:[w("div",{className:"contents_title",children:w("h3",{children:"\uD504\uB85C\uD544 \uAD00\uB9AC"})}),A("div",{className:"user_profile",children:[w("div",{className:"user_img",children:o?w("img",{src:o,alt:l.nickname,style:{maxWidth:"90px",maxHeight:"90px"}}):w("img",{src:l.profileImg?l.profileImg:fC,alt:l.nickname,style:{maxWidth:"90px",maxHeight:"90px"}})}),A("div",{className:"user_detail",children:[w("div",{className:"user_nickname",children:w("p",{className:"nickname",children:l.nickname})}),l.intro?w("div",{className:"user_intro",children:w("p",{children:l.intro})}):null,A("div",{className:"profile_btn",children:[A("div",{className:"img_change",children:[w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:p}),w("label",{htmlFor:"photo",className:"file_label",children:w("p",{children:i?"\uC800\uC7A5\uD558\uAE30":"\uC774\uBBF8\uC9C0\uBCC0\uACBD"})})]}),w("div",{className:"img_delete",children:w("p",{onClick:()=>s(null),children:"\uC0AD\uC81C\uD558\uAE30"})})]})]})]}),A("div",{className:"profile_info",children:[w("div",{className:"info_title",children:w("h3",{children:"\uD504\uB85C\uD544 \uC815\uBCF4"})}),A("div",{className:`area${e.name?" active":""}`,children:[w("label",{children:"\uD504\uB85C\uD544 \uC774\uB984"}),A("div",{className:`input_area${e.name?" active":""}`,children:[e.name?w("input",{type:"text",name:"nickname",placeholder:l.nickname,onChange:p}):w("p",{children:l.nickname}),e.name?A("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>h("name"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",onClick:()=>x(),children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>h("name"),children:"\uBCC0\uACBD"})]})]}),A("div",{className:`area${e.email?" active":""}`,children:[w("label",{children:"Email"}),A("div",{className:`input_area${e.email?" active":""}`,children:[e.email?w("input",{type:"text",name:"email",placeholder:l.email,onChange:p}):w("p",{children:l.email}),e.email?A("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>h("email"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",onClick:()=>x(),children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>h("email"),children:"\uBCC0\uACBD"})]})]}),A("div",{className:`area${e.intro?" active":""}`,children:[w("label",{children:"\uC18C\uAC1C"}),A("div",{className:`input_area${e.intro?" active":""}`,children:[e.intro?w("input",{type:"text",name:"intro",placeholder:l.intro?l.intro:"\uC790\uC2E0\uC744 \uC18C\uAC1C \uD574\uC8FC\uC138\uC694...",onChange:p}):w("p",{children:l.intro?l.intro:"\uC790\uC2E0\uC744 \uC18C\uAC1C \uD574\uC8FC\uC138\uC694..."}),e.intro?A("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>h("intro"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",onClick:()=>x(),children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>h("intro"),children:"\uBCC0\uACBD"})]})]}),A("div",{className:`area${e.password?" active":""}`,children:[w("label",{children:"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD"}),A("div",{className:`input_area${e.password?" active":""}`,children:[e.password?w("input",{type:"password"}):w("p",{children:"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD"}),e.password?A("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>h("password"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",onClick:()=>x(),children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>h("password"),children:"\uBCC0\uACBD"})]})]})]})]})})})},nZ=[{path:"/",element:w(pJ,{})},{path:"/account",element:w(yJ,{})},{path:"/account/:id",element:w(tZ,{})},{path:"/account/signup",element:w(TJ,{})},{path:"/account/login",element:w(bJ,{})},{path:"/board",element:w(UJ,{})},{path:"/board/write",element:w(DJ,{})},{path:"/board/:id",element:w(IJ,{})},{path:"/photo",element:w($J,{})},{path:"/photo/write",element:w(FJ,{})},{path:"/photo/:id",element:w(BJ,{})},{path:"/today",element:w(KJ,{})},{path:"/today/write",element:w(GJ,{})},{path:"/today/:id",element:w(eZ,{})},{path:"/qna",element:w(QJ,{})},{path:"/qna/write",element:w(ZJ,{})},{path:"/qna/:id",element:w(JJ,{})},{path:"/today/details/:id",element:w(HJ,{})},{path:"/board/details/:id",element:w(RJ,{})},{path:"/photo/details/:id",element:w(VJ,{})},{path:"/qna/details/:id",element:w(XJ,{})}];function rZ(){const[e,t]=R.exports.useState(!1),n=()=>{t(i=>!i)},r=()=>{window.innerWidth>768&&t(!1)};return R.exports.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),w(p8,{className:e?" active":"",style:{height:e?"100vh":"auto",overflow:e?"hidden":"auto"},children:A(h$,{basename:"modart",children:[w(f8,{}),w(iH,{toggleMenu:n,toggle:e}),w(a$,{children:nZ.map((i,s)=>w(pD,{path:i.path,element:i.element},s))})]})})}const iZ=ua({name:"users",initialState:{currentUser:null,postCount:0},reducers:{setCurrentUser:(e,t)=>{e.currentUser=t.payload,e.postCount=t.payload?t.payload.postCount:0},incrementPostCount:e=>{e.postCount+=1}}});var sZ=iZ.reducer;const vR=N9({reducer:{auth:xJ,login:jW,users:sZ,board:gX,photo:aJ,today:hJ,qna:XX}});vR.dispatch(BW());Cy.createRoot(document.getElementById("root")).render(w(Q8,{store:vR,children:w(rZ,{})}))});export default oZ();
