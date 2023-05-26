var KL=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var JJ=KL((rZ,yf)=>{const QL=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};QL();var B2=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function z2(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var R={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=Symbol.for("react.element"),XL=Symbol.for("react.portal"),JL=Symbol.for("react.fragment"),ZL=Symbol.for("react.strict_mode"),e6=Symbol.for("react.profiler"),t6=Symbol.for("react.provider"),n6=Symbol.for("react.context"),r6=Symbol.for("react.forward_ref"),i6=Symbol.for("react.suspense"),s6=Symbol.for("react.memo"),o6=Symbol.for("react.lazy"),qS=Symbol.iterator;function a6(e){return e===null||typeof e!="object"?null:(e=qS&&e[qS]||e["@@iterator"],typeof e=="function"?e:null)}var V2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j2=Object.assign,Y2={};function Ll(e,t,n){this.props=e,this.context=t,this.refs=Y2,this.updater=n||V2}Ll.prototype.isReactComponent={};Ll.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ll.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function W2(){}W2.prototype=Ll.prototype;function N1(e,t,n){this.props=e,this.context=t,this.refs=Y2,this.updater=n||V2}var O1=N1.prototype=new W2;O1.constructor=N1;j2(O1,Ll.prototype);O1.isPureReactComponent=!0;var KS=Array.isArray,H2=Object.prototype.hasOwnProperty,R1={current:null},G2={key:!0,ref:!0,__self:!0,__source:!0};function q2(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)H2.call(t,r)&&!G2.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:nd,type:e,key:s,ref:o,props:i,_owner:R1.current}}function l6(e,t){return{$$typeof:nd,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function P1(e){return typeof e=="object"&&e!==null&&e.$$typeof===nd}function u6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var QS=/\/+/g;function n0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u6(""+e.key):t.toString(36)}function Vh(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case nd:case XL:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+n0(o,0):r,KS(i)?(n="",e!=null&&(n=e.replace(QS,"$&/")+"/"),Vh(i,t,n,"",function(c){return c})):i!=null&&(P1(i)&&(i=l6(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(QS,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",KS(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+n0(s,a);o+=Vh(s,t,n,u,i)}else if(u=a6(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+n0(s,a++),o+=Vh(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function lh(e,t,n){if(e==null)return e;var r=[],i=0;return Vh(e,r,"","",function(s){return t.call(n,s,i++)}),r}function c6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Mn={current:null},jh={transition:null},d6={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:jh,ReactCurrentOwner:R1};Me.Children={map:lh,forEach:function(e,t,n){lh(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lh(e,function(){t++}),t},toArray:function(e){return lh(e,function(t){return t})||[]},only:function(e){if(!P1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Me.Component=Ll;Me.Fragment=JL;Me.Profiler=e6;Me.PureComponent=N1;Me.StrictMode=ZL;Me.Suspense=i6;Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d6;Me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=j2({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=R1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)H2.call(t,u)&&!G2.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:nd,type:e.type,key:i,ref:s,props:r,_owner:o}};Me.createContext=function(e){return e={$$typeof:n6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t6,_context:e},e.Consumer=e};Me.createElement=q2;Me.createFactory=function(e){var t=q2.bind(null,e);return t.type=e,t};Me.createRef=function(){return{current:null}};Me.forwardRef=function(e){return{$$typeof:r6,render:e}};Me.isValidElement=P1;Me.lazy=function(e){return{$$typeof:o6,_payload:{_status:-1,_result:e},_init:c6}};Me.memo=function(e,t){return{$$typeof:s6,type:e,compare:t===void 0?null:t}};Me.startTransition=function(e){var t=jh.transition;jh.transition={};try{e()}finally{jh.transition=t}};Me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Me.useCallback=function(e,t){return Mn.current.useCallback(e,t)};Me.useContext=function(e){return Mn.current.useContext(e)};Me.useDebugValue=function(){};Me.useDeferredValue=function(e){return Mn.current.useDeferredValue(e)};Me.useEffect=function(e,t){return Mn.current.useEffect(e,t)};Me.useId=function(){return Mn.current.useId()};Me.useImperativeHandle=function(e,t,n){return Mn.current.useImperativeHandle(e,t,n)};Me.useInsertionEffect=function(e,t){return Mn.current.useInsertionEffect(e,t)};Me.useLayoutEffect=function(e,t){return Mn.current.useLayoutEffect(e,t)};Me.useMemo=function(e,t){return Mn.current.useMemo(e,t)};Me.useReducer=function(e,t,n){return Mn.current.useReducer(e,t,n)};Me.useRef=function(e){return Mn.current.useRef(e)};Me.useState=function(e){return Mn.current.useState(e)};Me.useSyncExternalStore=function(e,t,n){return Mn.current.useSyncExternalStore(e,t,n)};Me.useTransition=function(){return Mn.current.useTransition()};Me.version="18.2.0";R.exports=Me;var Xt=R.exports,wy={},M1={exports:{}},ar={},K2={exports:{}},Q2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,V){var M=$.length;$.push(V);e:for(;0<M;){var ee=M-1>>>1,U=$[ee];if(0<i(U,V))$[ee]=V,$[M]=U,M=ee;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var V=$[0],M=$.pop();if(M!==V){$[0]=M;e:for(var ee=0,U=$.length,B=U>>>1;ee<B;){var Y=2*(ee+1)-1,z=$[Y],D=Y+1,le=$[D];if(0>i(z,M))D<U&&0>i(le,z)?($[ee]=le,$[D]=M,ee=D):($[ee]=z,$[Y]=M,ee=Y);else if(D<U&&0>i(le,M))$[ee]=le,$[D]=M,ee=D;else break e}}return V}function i($,V){var M=$.sortIndex-V.sortIndex;return M!==0?M:$.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,m=3,x=!1,v=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=$)r(c),V.sortIndex=V.expirationTime,t(u,V);else break;V=n(c)}}function T($){if(_=!1,C($),!v)if(n(u)!==null)v=!0,Te(I);else{var V=n(c);V!==null&&ge(T,V.startTime-$)}}function I($,V){v=!1,_&&(_=!1,S(O),O=-1),x=!0;var M=m;try{for(C(V),p=n(u);p!==null&&(!(p.expirationTime>V)||$&&!j());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,m=p.priorityLevel;var U=ee(p.expirationTime<=V);V=e.unstable_now(),typeof U=="function"?p.callback=U:p===n(u)&&r(u),C(V)}else r(u);p=n(u)}if(p!==null)var B=!0;else{var Y=n(c);Y!==null&&ge(T,Y.startTime-V),B=!1}return B}finally{p=null,m=M,x=!1}}var P=!1,A=null,O=-1,Z=5,F=-1;function j(){return!(e.unstable_now()-F<Z)}function J(){if(A!==null){var $=e.unstable_now();F=$;var V=!0;try{V=A(!0,$)}finally{V?X():(P=!1,A=null)}}else P=!1}var X;if(typeof y=="function")X=function(){y(J)};else if(typeof MessageChannel!="undefined"){var ue=new MessageChannel,oe=ue.port2;ue.port1.onmessage=J,X=function(){oe.postMessage(null)}}else X=function(){k(J,0)};function Te($){A=$,P||(P=!0,X())}function ge($,V){O=k(function(){$(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Te(I))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var M=m;m=V;try{return $()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,V){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var M=m;m=$;try{return V()}finally{m=M}},e.unstable_scheduleCallback=function($,V,M){var ee=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ee+M:ee):M=ee,$){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=M+U,$={id:h++,callback:V,priorityLevel:$,startTime:M,expirationTime:U,sortIndex:-1},M>ee?($.sortIndex=M,t(c,$),n(u)===null&&$===n(c)&&(_?(S(O),O=-1):_=!0,ge(T,M-ee))):($.sortIndex=U,t(u,$),v||x||(v=!0,Te(I))),$},e.unstable_shouldYield=j,e.unstable_wrapCallback=function($){var V=m;return function(){var M=m;m=V;try{return $.apply(this,arguments)}finally{m=M}}}})(Q2);K2.exports=Q2;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X2=R.exports,ir=K2.exports;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J2=new Set,oc={};function sa(e,t){ml(e,t),ml(e+"Capture",t)}function ml(e,t){for(oc[e]=t,e=0;e<t.length;e++)J2.add(t[e])}var Hi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),_y=Object.prototype.hasOwnProperty,h6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,XS={},JS={};function f6(e){return _y.call(JS,e)?!0:_y.call(XS,e)?!1:h6.test(e)?JS[e]=!0:(XS[e]=!0,!1)}function p6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function m6(e,t,n,r){if(t===null||typeof t=="undefined"||p6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ln(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ln[e]=new Ln(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ln[t]=new Ln(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ln[e]=new Ln(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ln[e]=new Ln(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ln[e]=new Ln(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ln[e]=new Ln(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ln[e]=new Ln(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ln[e]=new Ln(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ln[e]=new Ln(e,5,!1,e.toLowerCase(),null,!1,!1)});var L1=/[\-:]([a-z])/g;function $1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(L1,$1);ln[t]=new Ln(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(L1,$1);ln[t]=new Ln(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(L1,$1);ln[t]=new Ln(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ln[e]=new Ln(e,1,!1,e.toLowerCase(),null,!1,!1)});ln.xlinkHref=new Ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ln[e]=new Ln(e,1,!1,e.toLowerCase(),null,!0,!0)});function F1(e,t,n,r){var i=ln.hasOwnProperty(t)?ln[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(m6(t,n,i,r)&&(n=null),r||i===null?f6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ss=X2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uh=Symbol.for("react.element"),Pa=Symbol.for("react.portal"),Ma=Symbol.for("react.fragment"),U1=Symbol.for("react.strict_mode"),xy=Symbol.for("react.profiler"),Z2=Symbol.for("react.provider"),eT=Symbol.for("react.context"),B1=Symbol.for("react.forward_ref"),Sy=Symbol.for("react.suspense"),Cy=Symbol.for("react.suspense_list"),z1=Symbol.for("react.memo"),ms=Symbol.for("react.lazy"),tT=Symbol.for("react.offscreen"),ZS=Symbol.iterator;function fu(e){return e===null||typeof e!="object"?null:(e=ZS&&e[ZS]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Object.assign,r0;function Du(e){if(r0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);r0=t&&t[1]||""}return`
`+r0+e}var i0=!1;function s0(e,t){if(!e||i0)return"";i0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{i0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Du(e):""}function g6(e){switch(e.tag){case 5:return Du(e.type);case 16:return Du("Lazy");case 13:return Du("Suspense");case 19:return Du("SuspenseList");case 0:case 2:case 15:return e=s0(e.type,!1),e;case 11:return e=s0(e.type.render,!1),e;case 1:return e=s0(e.type,!0),e;default:return""}}function Ey(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ma:return"Fragment";case Pa:return"Portal";case xy:return"Profiler";case U1:return"StrictMode";case Sy:return"Suspense";case Cy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eT:return(e.displayName||"Context")+".Consumer";case Z2:return(e._context.displayName||"Context")+".Provider";case B1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z1:return t=e.displayName||null,t!==null?t:Ey(e.type)||"Memo";case ms:t=e._payload,e=e._init;try{return Ey(e(t))}catch{}}return null}function y6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ey(t);case 8:return t===U1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qs(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nT(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v6(e){var t=nT(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ch(e){e._valueTracker||(e._valueTracker=v6(e))}function rT(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nT(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vf(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function ky(e,t){var n=t.checked;return xt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function eC(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qs(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function iT(e,t){t=t.checked,t!=null&&F1(e,"checked",t,!1)}function Ty(e,t){iT(e,t);var n=qs(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dy(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dy(e,t.type,qs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tC(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dy(e,t,n){(t!=="number"||vf(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bu=Array.isArray;function Qa(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qs(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function by(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return xt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nC(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(bu(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qs(n)}}function sT(e,t){var n=qs(t.value),r=qs(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rC(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function oT(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Iy(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?oT(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dh,aT=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dh=dh||document.createElement("div"),dh.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dh.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ac(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w6=["Webkit","ms","Moz","O"];Object.keys(Uu).forEach(function(e){w6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Uu[t]=Uu[e]})});function lT(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Uu.hasOwnProperty(e)&&Uu[e]?(""+t).trim():t+"px"}function uT(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lT(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _6=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ay(e,t){if(t){if(_6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function Ny(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oy=null;function V1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ry=null,Xa=null,Ja=null;function iC(e){if(e=sd(e)){if(typeof Ry!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Up(t),Ry(e.stateNode,e.type,t))}}function cT(e){Xa?Ja?Ja.push(e):Ja=[e]:Xa=e}function dT(){if(Xa){var e=Xa,t=Ja;if(Ja=Xa=null,iC(e),t)for(e=0;e<t.length;e++)iC(t[e])}}function hT(e,t){return e(t)}function fT(){}var o0=!1;function pT(e,t,n){if(o0)return e(t,n);o0=!0;try{return hT(e,t,n)}finally{o0=!1,(Xa!==null||Ja!==null)&&(fT(),dT())}}function lc(e,t){var n=e.stateNode;if(n===null)return null;var r=Up(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Py=!1;if(Hi)try{var pu={};Object.defineProperty(pu,"passive",{get:function(){Py=!0}}),window.addEventListener("test",pu,pu),window.removeEventListener("test",pu,pu)}catch{Py=!1}function x6(e,t,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Bu=!1,wf=null,_f=!1,My=null,S6={onError:function(e){Bu=!0,wf=e}};function C6(e,t,n,r,i,s,o,a,u){Bu=!1,wf=null,x6.apply(S6,arguments)}function E6(e,t,n,r,i,s,o,a,u){if(C6.apply(this,arguments),Bu){if(Bu){var c=wf;Bu=!1,wf=null}else throw Error(G(198));_f||(_f=!0,My=c)}}function oa(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mT(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sC(e){if(oa(e)!==e)throw Error(G(188))}function k6(e){var t=e.alternate;if(!t){if(t=oa(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sC(i),e;if(s===r)return sC(i),t;s=s.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function gT(e){return e=k6(e),e!==null?yT(e):null}function yT(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yT(e);if(t!==null)return t;e=e.sibling}return null}var vT=ir.unstable_scheduleCallback,oC=ir.unstable_cancelCallback,T6=ir.unstable_shouldYield,D6=ir.unstable_requestPaint,Ot=ir.unstable_now,b6=ir.unstable_getCurrentPriorityLevel,j1=ir.unstable_ImmediatePriority,wT=ir.unstable_UserBlockingPriority,xf=ir.unstable_NormalPriority,I6=ir.unstable_LowPriority,_T=ir.unstable_IdlePriority,Mp=null,ti=null;function A6(e){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Mp,e,void 0,(e.current.flags&128)===128)}catch{}}var $r=Math.clz32?Math.clz32:R6,N6=Math.log,O6=Math.LN2;function R6(e){return e>>>=0,e===0?32:31-(N6(e)/O6|0)|0}var hh=64,fh=4194304;function Iu(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sf(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Iu(a):(s&=o,s!==0&&(r=Iu(s)))}else o=n&~i,o!==0?r=Iu(o):s!==0&&(r=Iu(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$r(t),i=1<<n,r|=e[n],t&=~i;return r}function P6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-$r(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=P6(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function Ly(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xT(){var e=hh;return hh<<=1,(hh&4194240)===0&&(hh=64),e}function a0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rd(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$r(t),e[t]=n}function L6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$r(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Y1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$r(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var qe=0;function ST(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var CT,W1,ET,kT,TT,$y=!1,ph=[],Ns=null,Os=null,Rs=null,uc=new Map,cc=new Map,ys=[],$6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function aC(e,t){switch(e){case"focusin":case"focusout":Ns=null;break;case"dragenter":case"dragleave":Os=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":uc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cc.delete(t.pointerId)}}function mu(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=sd(t),t!==null&&W1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function F6(e,t,n,r,i){switch(t){case"focusin":return Ns=mu(Ns,e,t,n,r,i),!0;case"dragenter":return Os=mu(Os,e,t,n,r,i),!0;case"mouseover":return Rs=mu(Rs,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return uc.set(s,mu(uc.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cc.set(s,mu(cc.get(s)||null,e,t,n,r,i)),!0}return!1}function DT(e){var t=Do(e.target);if(t!==null){var n=oa(t);if(n!==null){if(t=n.tag,t===13){if(t=mT(n),t!==null){e.blockedOn=t,TT(e.priority,function(){ET(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fy(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oy=r,n.target.dispatchEvent(r),Oy=null}else return t=sd(n),t!==null&&W1(t),e.blockedOn=n,!1;t.shift()}return!0}function lC(e,t,n){Yh(e)&&n.delete(t)}function U6(){$y=!1,Ns!==null&&Yh(Ns)&&(Ns=null),Os!==null&&Yh(Os)&&(Os=null),Rs!==null&&Yh(Rs)&&(Rs=null),uc.forEach(lC),cc.forEach(lC)}function gu(e,t){e.blockedOn===t&&(e.blockedOn=null,$y||($y=!0,ir.unstable_scheduleCallback(ir.unstable_NormalPriority,U6)))}function dc(e){function t(i){return gu(i,e)}if(0<ph.length){gu(ph[0],e);for(var n=1;n<ph.length;n++){var r=ph[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ns!==null&&gu(Ns,e),Os!==null&&gu(Os,e),Rs!==null&&gu(Rs,e),uc.forEach(t),cc.forEach(t),n=0;n<ys.length;n++)r=ys[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ys.length&&(n=ys[0],n.blockedOn===null);)DT(n),n.blockedOn===null&&ys.shift()}var Za=ss.ReactCurrentBatchConfig,Cf=!0;function B6(e,t,n,r){var i=qe,s=Za.transition;Za.transition=null;try{qe=1,H1(e,t,n,r)}finally{qe=i,Za.transition=s}}function z6(e,t,n,r){var i=qe,s=Za.transition;Za.transition=null;try{qe=4,H1(e,t,n,r)}finally{qe=i,Za.transition=s}}function H1(e,t,n,r){if(Cf){var i=Fy(e,t,n,r);if(i===null)y0(e,t,r,Ef,n),aC(e,r);else if(F6(i,e,t,n,r))r.stopPropagation();else if(aC(e,r),t&4&&-1<$6.indexOf(e)){for(;i!==null;){var s=sd(i);if(s!==null&&CT(s),s=Fy(e,t,n,r),s===null&&y0(e,t,r,Ef,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else y0(e,t,r,null,n)}}var Ef=null;function Fy(e,t,n,r){if(Ef=null,e=V1(r),e=Do(e),e!==null)if(t=oa(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mT(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ef=e,null}function bT(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b6()){case j1:return 1;case wT:return 4;case xf:case I6:return 16;case _T:return 536870912;default:return 16}default:return 16}}var Es=null,G1=null,Wh=null;function IT(){if(Wh)return Wh;var e,t=G1,n=t.length,r,i="value"in Es?Es.value:Es.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Wh=i.slice(e,1<r?1-r:void 0)}function Hh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mh(){return!0}function uC(){return!1}function lr(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mh:uC,this.isPropagationStopped=uC,this}return xt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mh)},persist:function(){},isPersistent:mh}),t}var $l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},q1=lr($l),id=xt({},$l,{view:0,detail:0}),V6=lr(id),l0,u0,yu,Lp=xt({},id,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:K1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yu&&(yu&&e.type==="mousemove"?(l0=e.screenX-yu.screenX,u0=e.screenY-yu.screenY):u0=l0=0,yu=e),l0)},movementY:function(e){return"movementY"in e?e.movementY:u0}}),cC=lr(Lp),j6=xt({},Lp,{dataTransfer:0}),Y6=lr(j6),W6=xt({},id,{relatedTarget:0}),c0=lr(W6),H6=xt({},$l,{animationName:0,elapsedTime:0,pseudoElement:0}),G6=lr(H6),q6=xt({},$l,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K6=lr(q6),Q6=xt({},$l,{data:0}),dC=lr(Q6),X6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z6[e])?!!t[e]:!1}function K1(){return e3}var t3=xt({},id,{key:function(e){if(e.key){var t=X6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:K1,charCode:function(e){return e.type==="keypress"?Hh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n3=lr(t3),r3=xt({},Lp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hC=lr(r3),i3=xt({},id,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:K1}),s3=lr(i3),o3=xt({},$l,{propertyName:0,elapsedTime:0,pseudoElement:0}),a3=lr(o3),l3=xt({},Lp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u3=lr(l3),c3=[9,13,27,32],Q1=Hi&&"CompositionEvent"in window,zu=null;Hi&&"documentMode"in document&&(zu=document.documentMode);var d3=Hi&&"TextEvent"in window&&!zu,AT=Hi&&(!Q1||zu&&8<zu&&11>=zu),fC=String.fromCharCode(32),pC=!1;function NT(e,t){switch(e){case"keyup":return c3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OT(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var La=!1;function h3(e,t){switch(e){case"compositionend":return OT(t);case"keypress":return t.which!==32?null:(pC=!0,fC);case"textInput":return e=t.data,e===fC&&pC?null:e;default:return null}}function f3(e,t){if(La)return e==="compositionend"||!Q1&&NT(e,t)?(e=IT(),Wh=G1=Es=null,La=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return AT&&t.locale!=="ko"?null:t.data;default:return null}}var p3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mC(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p3[e.type]:t==="textarea"}function RT(e,t,n,r){cT(r),t=kf(t,"onChange"),0<t.length&&(n=new q1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vu=null,hc=null;function m3(e){YT(e,0)}function $p(e){var t=Ua(e);if(rT(t))return e}function g3(e,t){if(e==="change")return t}var PT=!1;if(Hi){var d0;if(Hi){var h0="oninput"in document;if(!h0){var gC=document.createElement("div");gC.setAttribute("oninput","return;"),h0=typeof gC.oninput=="function"}d0=h0}else d0=!1;PT=d0&&(!document.documentMode||9<document.documentMode)}function yC(){Vu&&(Vu.detachEvent("onpropertychange",MT),hc=Vu=null)}function MT(e){if(e.propertyName==="value"&&$p(hc)){var t=[];RT(t,hc,e,V1(e)),pT(m3,t)}}function y3(e,t,n){e==="focusin"?(yC(),Vu=t,hc=n,Vu.attachEvent("onpropertychange",MT)):e==="focusout"&&yC()}function v3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $p(hc)}function w3(e,t){if(e==="click")return $p(t)}function _3(e,t){if(e==="input"||e==="change")return $p(t)}function x3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Br=typeof Object.is=="function"?Object.is:x3;function fc(e,t){if(Br(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_y.call(t,i)||!Br(e[i],t[i]))return!1}return!0}function vC(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wC(e,t){var n=vC(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vC(n)}}function LT(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?LT(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $T(){for(var e=window,t=vf();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vf(e.document)}return t}function X1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function S3(e){var t=$T(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&LT(n.ownerDocument.documentElement,n)){if(r!==null&&X1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=wC(n,s);var o=wC(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C3=Hi&&"documentMode"in document&&11>=document.documentMode,$a=null,Uy=null,ju=null,By=!1;function _C(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;By||$a==null||$a!==vf(r)||(r=$a,"selectionStart"in r&&X1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ju&&fc(ju,r)||(ju=r,r=kf(Uy,"onSelect"),0<r.length&&(t=new q1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$a)))}function gh(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fa={animationend:gh("Animation","AnimationEnd"),animationiteration:gh("Animation","AnimationIteration"),animationstart:gh("Animation","AnimationStart"),transitionend:gh("Transition","TransitionEnd")},f0={},FT={};Hi&&(FT=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Fp(e){if(f0[e])return f0[e];if(!Fa[e])return e;var t=Fa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in FT)return f0[e]=t[n];return e}var UT=Fp("animationend"),BT=Fp("animationiteration"),zT=Fp("animationstart"),VT=Fp("transitionend"),jT=new Map,xC="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function so(e,t){jT.set(e,t),sa(t,[e])}for(var p0=0;p0<xC.length;p0++){var m0=xC[p0],E3=m0.toLowerCase(),k3=m0[0].toUpperCase()+m0.slice(1);so(E3,"on"+k3)}so(UT,"onAnimationEnd");so(BT,"onAnimationIteration");so(zT,"onAnimationStart");so("dblclick","onDoubleClick");so("focusin","onFocus");so("focusout","onBlur");so(VT,"onTransitionEnd");ml("onMouseEnter",["mouseout","mouseover"]);ml("onMouseLeave",["mouseout","mouseover"]);ml("onPointerEnter",["pointerout","pointerover"]);ml("onPointerLeave",["pointerout","pointerover"]);sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sa("onBeforeInput",["compositionend","keypress","textInput","paste"]);sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Au="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Au));function SC(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,E6(r,t,void 0,e),e.currentTarget=null}function YT(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;SC(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;SC(i,a,c),s=u}}}if(_f)throw e=My,_f=!1,My=null,e}function ot(e,t){var n=t[Wy];n===void 0&&(n=t[Wy]=new Set);var r=e+"__bubble";n.has(r)||(WT(t,e,2,!1),n.add(r))}function g0(e,t,n){var r=0;t&&(r|=4),WT(n,e,r,t)}var yh="_reactListening"+Math.random().toString(36).slice(2);function pc(e){if(!e[yh]){e[yh]=!0,J2.forEach(function(n){n!=="selectionchange"&&(T3.has(n)||g0(n,!1,e),g0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yh]||(t[yh]=!0,g0("selectionchange",!1,t))}}function WT(e,t,n,r){switch(bT(t)){case 1:var i=B6;break;case 4:i=z6;break;default:i=H1}n=i.bind(null,t,n,e),i=void 0,!Py||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function y0(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Do(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}pT(function(){var c=s,h=V1(n),p=[];e:{var m=jT.get(e);if(m!==void 0){var x=q1,v=e;switch(e){case"keypress":if(Hh(n)===0)break e;case"keydown":case"keyup":x=n3;break;case"focusin":v="focus",x=c0;break;case"focusout":v="blur",x=c0;break;case"beforeblur":case"afterblur":x=c0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=cC;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Y6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=s3;break;case UT:case BT:case zT:x=G6;break;case VT:x=a3;break;case"scroll":x=V6;break;case"wheel":x=u3;break;case"copy":case"cut":case"paste":x=K6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=hC}var _=(t&4)!==0,k=!_&&e==="scroll",S=_?m!==null?m+"Capture":null:m;_=[];for(var y=c,C;y!==null;){C=y;var T=C.stateNode;if(C.tag===5&&T!==null&&(C=T,S!==null&&(T=lc(y,S),T!=null&&_.push(mc(y,T,C)))),k)break;y=y.return}0<_.length&&(m=new x(m,v,null,n,h),p.push({event:m,listeners:_}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Oy&&(v=n.relatedTarget||n.fromElement)&&(Do(v)||v[Gi]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=c,v=v?Do(v):null,v!==null&&(k=oa(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=c),x!==v)){if(_=cC,T="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(_=hC,T="onPointerLeave",S="onPointerEnter",y="pointer"),k=x==null?m:Ua(x),C=v==null?m:Ua(v),m=new _(T,y+"leave",x,n,h),m.target=k,m.relatedTarget=C,T=null,Do(h)===c&&(_=new _(S,y+"enter",v,n,h),_.target=C,_.relatedTarget=k,T=_),k=T,x&&v)t:{for(_=x,S=v,y=0,C=_;C;C=Ta(C))y++;for(C=0,T=S;T;T=Ta(T))C++;for(;0<y-C;)_=Ta(_),y--;for(;0<C-y;)S=Ta(S),C--;for(;y--;){if(_===S||S!==null&&_===S.alternate)break t;_=Ta(_),S=Ta(S)}_=null}else _=null;x!==null&&CC(p,m,x,_,!1),v!==null&&k!==null&&CC(p,k,v,_,!0)}}e:{if(m=c?Ua(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var I=g3;else if(mC(m))if(PT)I=_3;else{I=v3;var P=y3}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=w3);if(I&&(I=I(e,c))){RT(p,I,n,h);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Dy(m,"number",m.value)}switch(P=c?Ua(c):window,e){case"focusin":(mC(P)||P.contentEditable==="true")&&($a=P,Uy=c,ju=null);break;case"focusout":ju=Uy=$a=null;break;case"mousedown":By=!0;break;case"contextmenu":case"mouseup":case"dragend":By=!1,_C(p,n,h);break;case"selectionchange":if(C3)break;case"keydown":case"keyup":_C(p,n,h)}var A;if(Q1)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else La?NT(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(AT&&n.locale!=="ko"&&(La||O!=="onCompositionStart"?O==="onCompositionEnd"&&La&&(A=IT()):(Es=h,G1="value"in Es?Es.value:Es.textContent,La=!0)),P=kf(c,O),0<P.length&&(O=new dC(O,e,null,n,h),p.push({event:O,listeners:P}),A?O.data=A:(A=OT(n),A!==null&&(O.data=A)))),(A=d3?h3(e,n):f3(e,n))&&(c=kf(c,"onBeforeInput"),0<c.length&&(h=new dC("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=A))}YT(p,t)})}function mc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kf(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lc(e,n),s!=null&&r.unshift(mc(e,s,i)),s=lc(e,t),s!=null&&r.push(mc(e,s,i))),e=e.return}return r}function Ta(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function CC(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=lc(n,s),u!=null&&o.unshift(mc(n,u,a))):i||(u=lc(n,s),u!=null&&o.push(mc(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var D3=/\r\n?/g,b3=/\u0000|\uFFFD/g;function EC(e){return(typeof e=="string"?e:""+e).replace(D3,`
`).replace(b3,"")}function vh(e,t,n){if(t=EC(t),EC(e)!==t&&n)throw Error(G(425))}function Tf(){}var zy=null,Vy=null;function jy(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yy=typeof setTimeout=="function"?setTimeout:void 0,I3=typeof clearTimeout=="function"?clearTimeout:void 0,kC=typeof Promise=="function"?Promise:void 0,A3=typeof queueMicrotask=="function"?queueMicrotask:typeof kC!="undefined"?function(e){return kC.resolve(null).then(e).catch(N3)}:Yy;function N3(e){setTimeout(function(){throw e})}function v0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),dc(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);dc(t)}function Ps(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function TC(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fl=Math.random().toString(36).slice(2),Kr="__reactFiber$"+Fl,gc="__reactProps$"+Fl,Gi="__reactContainer$"+Fl,Wy="__reactEvents$"+Fl,O3="__reactListeners$"+Fl,R3="__reactHandles$"+Fl;function Do(e){var t=e[Kr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gi]||n[Kr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=TC(e);e!==null;){if(n=e[Kr])return n;e=TC(e)}return t}e=n,n=e.parentNode}return null}function sd(e){return e=e[Kr]||e[Gi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ua(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Up(e){return e[gc]||null}var Hy=[],Ba=-1;function oo(e){return{current:e}}function at(e){0>Ba||(e.current=Hy[Ba],Hy[Ba]=null,Ba--)}function tt(e,t){Ba++,Hy[Ba]=e.current,e.current=t}var Ks={},Sn=oo(Ks),Vn=oo(!1),Vo=Ks;function gl(e,t){var n=e.type.contextTypes;if(!n)return Ks;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function jn(e){return e=e.childContextTypes,e!=null}function Df(){at(Vn),at(Sn)}function DC(e,t,n){if(Sn.current!==Ks)throw Error(G(168));tt(Sn,t),tt(Vn,n)}function HT(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,y6(e)||"Unknown",i));return xt({},n,r)}function bf(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ks,Vo=Sn.current,tt(Sn,e),tt(Vn,Vn.current),!0}function bC(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=HT(e,t,Vo),r.__reactInternalMemoizedMergedChildContext=e,at(Vn),at(Sn),tt(Sn,e)):at(Vn),tt(Vn,n)}var Ii=null,Bp=!1,w0=!1;function GT(e){Ii===null?Ii=[e]:Ii.push(e)}function P3(e){Bp=!0,GT(e)}function ao(){if(!w0&&Ii!==null){w0=!0;var e=0,t=qe;try{var n=Ii;for(qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ii=null,Bp=!1}catch(i){throw Ii!==null&&(Ii=Ii.slice(e+1)),vT(j1,ao),i}finally{qe=t,w0=!1}}return null}var za=[],Va=0,If=null,Af=0,hr=[],fr=0,jo=null,Oi=1,Ri="";function Co(e,t){za[Va++]=Af,za[Va++]=If,If=e,Af=t}function qT(e,t,n){hr[fr++]=Oi,hr[fr++]=Ri,hr[fr++]=jo,jo=e;var r=Oi;e=Ri;var i=32-$r(r)-1;r&=~(1<<i),n+=1;var s=32-$r(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-$r(t)+i|n<<i|r,Ri=s+e}else Oi=1<<s|n<<i|r,Ri=e}function J1(e){e.return!==null&&(Co(e,1),qT(e,1,0))}function Z1(e){for(;e===If;)If=za[--Va],za[Va]=null,Af=za[--Va],za[Va]=null;for(;e===jo;)jo=hr[--fr],hr[fr]=null,Ri=hr[--fr],hr[fr]=null,Oi=hr[--fr],hr[fr]=null}var rr=null,er=null,mt=!1,Or=null;function KT(e,t){var n=yr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function IC(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rr=e,er=Ps(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rr=e,er=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jo!==null?{id:Oi,overflow:Ri}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rr=e,er=null,!0):!1;default:return!1}}function Gy(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qy(e){if(mt){var t=er;if(t){var n=t;if(!IC(e,t)){if(Gy(e))throw Error(G(418));t=Ps(n.nextSibling);var r=rr;t&&IC(e,t)?KT(r,n):(e.flags=e.flags&-4097|2,mt=!1,rr=e)}}else{if(Gy(e))throw Error(G(418));e.flags=e.flags&-4097|2,mt=!1,rr=e}}}function AC(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rr=e}function wh(e){if(e!==rr)return!1;if(!mt)return AC(e),mt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jy(e.type,e.memoizedProps)),t&&(t=er)){if(Gy(e))throw QT(),Error(G(418));for(;t;)KT(e,t),t=Ps(t.nextSibling)}if(AC(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){er=Ps(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}er=null}}else er=rr?Ps(e.stateNode.nextSibling):null;return!0}function QT(){for(var e=er;e;)e=Ps(e.nextSibling)}function yl(){er=rr=null,mt=!1}function ew(e){Or===null?Or=[e]:Or.push(e)}var M3=ss.ReactCurrentBatchConfig;function Ar(e,t){if(e&&e.defaultProps){t=xt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Nf=oo(null),Of=null,ja=null,tw=null;function nw(){tw=ja=Of=null}function rw(e){var t=Nf.current;at(Nf),e._currentValue=t}function Ky(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function el(e,t){Of=e,tw=ja=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Bn=!0),e.firstContext=null)}function _r(e){var t=e._currentValue;if(tw!==e)if(e={context:e,memoizedValue:t,next:null},ja===null){if(Of===null)throw Error(G(308));ja=e,Of.dependencies={lanes:0,firstContext:e}}else ja=ja.next=e;return t}var bo=null;function iw(e){bo===null?bo=[e]:bo.push(e)}function XT(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,iw(t)):(n.next=i.next,i.next=n),t.interleaved=n,qi(e,r)}function qi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gs=!1;function sw(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function JT(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ms(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qi(e,n)}return i=r.interleaved,i===null?(t.next=t,iw(r)):(t.next=i.next,i.next=t),r.interleaved=t,qi(e,n)}function Gh(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Y1(e,n)}}function NC(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Rf(e,t,n,r){var i=e.updateQueue;gs=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,x=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,_=a;switch(m=t,x=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){p=v.call(x,p,m);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,m=typeof v=="function"?v.call(x,p,m):v,m==null)break e;p=xt({},p,m);break e;case 2:gs=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,u=p):h=h.next=x,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Wo|=o,e.lanes=o,e.memoizedState=p}}function OC(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var ZT=new X2.Component().refs;function Qy(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zp={isMounted:function(e){return(e=e._reactInternals)?oa(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Rn(),i=$s(e),s=Vi(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ms(e,s,i),t!==null&&(Fr(t,e,i,r),Gh(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Rn(),i=$s(e),s=Vi(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ms(e,s,i),t!==null&&(Fr(t,e,i,r),Gh(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rn(),r=$s(e),i=Vi(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ms(e,i,r),t!==null&&(Fr(t,e,r,n),Gh(t,e,r))}};function RC(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!fc(n,r)||!fc(i,s):!0}function eD(e,t,n){var r=!1,i=Ks,s=t.contextType;return typeof s=="object"&&s!==null?s=_r(s):(i=jn(t)?Vo:Sn.current,r=t.contextTypes,s=(r=r!=null)?gl(e,i):Ks),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zp,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function PC(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zp.enqueueReplaceState(t,t.state,null)}function Xy(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ZT,sw(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_r(s):(s=jn(t)?Vo:Sn.current,i.context=gl(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Qy(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zp.enqueueReplaceState(i,i.state,null),Rf(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vu(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===ZT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function _h(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function MC(e){var t=e._init;return t(e._payload)}function tD(e){function t(S,y){if(e){var C=S.deletions;C===null?(S.deletions=[y],S.flags|=16):C.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function r(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function i(S,y){return S=Fs(S,y),S.index=0,S.sibling=null,S}function s(S,y,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<y?(S.flags|=2,y):C):(S.flags|=2,y)):(S.flags|=1048576,y)}function o(S){return e&&S.alternate===null&&(S.flags|=2),S}function a(S,y,C,T){return y===null||y.tag!==6?(y=T0(C,S.mode,T),y.return=S,y):(y=i(y,C),y.return=S,y)}function u(S,y,C,T){var I=C.type;return I===Ma?h(S,y,C.props.children,T,C.key):y!==null&&(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ms&&MC(I)===y.type)?(T=i(y,C.props),T.ref=vu(S,y,C),T.return=S,T):(T=Zh(C.type,C.key,C.props,null,S.mode,T),T.ref=vu(S,y,C),T.return=S,T)}function c(S,y,C,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=D0(C,S.mode,T),y.return=S,y):(y=i(y,C.children||[]),y.return=S,y)}function h(S,y,C,T,I){return y===null||y.tag!==7?(y=Lo(C,S.mode,T,I),y.return=S,y):(y=i(y,C),y.return=S,y)}function p(S,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=T0(""+y,S.mode,C),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case uh:return C=Zh(y.type,y.key,y.props,null,S.mode,C),C.ref=vu(S,null,y),C.return=S,C;case Pa:return y=D0(y,S.mode,C),y.return=S,y;case ms:var T=y._init;return p(S,T(y._payload),C)}if(bu(y)||fu(y))return y=Lo(y,S.mode,C,null),y.return=S,y;_h(S,y)}return null}function m(S,y,C,T){var I=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return I!==null?null:a(S,y,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case uh:return C.key===I?u(S,y,C,T):null;case Pa:return C.key===I?c(S,y,C,T):null;case ms:return I=C._init,m(S,y,I(C._payload),T)}if(bu(C)||fu(C))return I!==null?null:h(S,y,C,T,null);_h(S,C)}return null}function x(S,y,C,T,I){if(typeof T=="string"&&T!==""||typeof T=="number")return S=S.get(C)||null,a(y,S,""+T,I);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case uh:return S=S.get(T.key===null?C:T.key)||null,u(y,S,T,I);case Pa:return S=S.get(T.key===null?C:T.key)||null,c(y,S,T,I);case ms:var P=T._init;return x(S,y,C,P(T._payload),I)}if(bu(T)||fu(T))return S=S.get(C)||null,h(y,S,T,I,null);_h(y,T)}return null}function v(S,y,C,T){for(var I=null,P=null,A=y,O=y=0,Z=null;A!==null&&O<C.length;O++){A.index>O?(Z=A,A=null):Z=A.sibling;var F=m(S,A,C[O],T);if(F===null){A===null&&(A=Z);break}e&&A&&F.alternate===null&&t(S,A),y=s(F,y,O),P===null?I=F:P.sibling=F,P=F,A=Z}if(O===C.length)return n(S,A),mt&&Co(S,O),I;if(A===null){for(;O<C.length;O++)A=p(S,C[O],T),A!==null&&(y=s(A,y,O),P===null?I=A:P.sibling=A,P=A);return mt&&Co(S,O),I}for(A=r(S,A);O<C.length;O++)Z=x(A,S,O,C[O],T),Z!==null&&(e&&Z.alternate!==null&&A.delete(Z.key===null?O:Z.key),y=s(Z,y,O),P===null?I=Z:P.sibling=Z,P=Z);return e&&A.forEach(function(j){return t(S,j)}),mt&&Co(S,O),I}function _(S,y,C,T){var I=fu(C);if(typeof I!="function")throw Error(G(150));if(C=I.call(C),C==null)throw Error(G(151));for(var P=I=null,A=y,O=y=0,Z=null,F=C.next();A!==null&&!F.done;O++,F=C.next()){A.index>O?(Z=A,A=null):Z=A.sibling;var j=m(S,A,F.value,T);if(j===null){A===null&&(A=Z);break}e&&A&&j.alternate===null&&t(S,A),y=s(j,y,O),P===null?I=j:P.sibling=j,P=j,A=Z}if(F.done)return n(S,A),mt&&Co(S,O),I;if(A===null){for(;!F.done;O++,F=C.next())F=p(S,F.value,T),F!==null&&(y=s(F,y,O),P===null?I=F:P.sibling=F,P=F);return mt&&Co(S,O),I}for(A=r(S,A);!F.done;O++,F=C.next())F=x(A,S,O,F.value,T),F!==null&&(e&&F.alternate!==null&&A.delete(F.key===null?O:F.key),y=s(F,y,O),P===null?I=F:P.sibling=F,P=F);return e&&A.forEach(function(J){return t(S,J)}),mt&&Co(S,O),I}function k(S,y,C,T){if(typeof C=="object"&&C!==null&&C.type===Ma&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case uh:e:{for(var I=C.key,P=y;P!==null;){if(P.key===I){if(I=C.type,I===Ma){if(P.tag===7){n(S,P.sibling),y=i(P,C.props.children),y.return=S,S=y;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ms&&MC(I)===P.type){n(S,P.sibling),y=i(P,C.props),y.ref=vu(S,P,C),y.return=S,S=y;break e}n(S,P);break}else t(S,P);P=P.sibling}C.type===Ma?(y=Lo(C.props.children,S.mode,T,C.key),y.return=S,S=y):(T=Zh(C.type,C.key,C.props,null,S.mode,T),T.ref=vu(S,y,C),T.return=S,S=T)}return o(S);case Pa:e:{for(P=C.key;y!==null;){if(y.key===P)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){n(S,y.sibling),y=i(y,C.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else t(S,y);y=y.sibling}y=D0(C,S.mode,T),y.return=S,S=y}return o(S);case ms:return P=C._init,k(S,y,P(C._payload),T)}if(bu(C))return v(S,y,C,T);if(fu(C))return _(S,y,C,T);_h(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(n(S,y.sibling),y=i(y,C),y.return=S,S=y):(n(S,y),y=T0(C,S.mode,T),y.return=S,S=y),o(S)):n(S,y)}return k}var vl=tD(!0),nD=tD(!1),od={},ni=oo(od),yc=oo(od),vc=oo(od);function Io(e){if(e===od)throw Error(G(174));return e}function ow(e,t){switch(tt(vc,t),tt(yc,e),tt(ni,od),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Iy(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Iy(t,e)}at(ni),tt(ni,t)}function wl(){at(ni),at(yc),at(vc)}function rD(e){Io(vc.current);var t=Io(ni.current),n=Iy(t,e.type);t!==n&&(tt(yc,e),tt(ni,n))}function aw(e){yc.current===e&&(at(ni),at(yc))}var wt=oo(0);function Pf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _0=[];function lw(){for(var e=0;e<_0.length;e++)_0[e]._workInProgressVersionPrimary=null;_0.length=0}var qh=ss.ReactCurrentDispatcher,x0=ss.ReactCurrentBatchConfig,Yo=0,_t=null,Vt=null,Qt=null,Mf=!1,Yu=!1,wc=0,L3=0;function cn(){throw Error(G(321))}function uw(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Br(e[n],t[n]))return!1;return!0}function cw(e,t,n,r,i,s){if(Yo=s,_t=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qh.current=e===null||e.memoizedState===null?B3:z3,e=n(r,i),Yu){s=0;do{if(Yu=!1,wc=0,25<=s)throw Error(G(301));s+=1,Qt=Vt=null,t.updateQueue=null,qh.current=V3,e=n(r,i)}while(Yu)}if(qh.current=Lf,t=Vt!==null&&Vt.next!==null,Yo=0,Qt=Vt=_t=null,Mf=!1,t)throw Error(G(300));return e}function dw(){var e=wc!==0;return wc=0,e}function qr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?_t.memoizedState=Qt=e:Qt=Qt.next=e,Qt}function xr(){if(Vt===null){var e=_t.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var t=Qt===null?_t.memoizedState:Qt.next;if(t!==null)Qt=t,Vt=e;else{if(e===null)throw Error(G(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Qt===null?_t.memoizedState=Qt=e:Qt=Qt.next=e}return Qt}function _c(e,t){return typeof t=="function"?t(e):t}function S0(e){var t=xr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=Vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Yo&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,_t.lanes|=h,Wo|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Br(r,t.memoizedState)||(Bn=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,_t.lanes|=s,Wo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function C0(e){var t=xr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Br(s,t.memoizedState)||(Bn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function iD(){}function sD(e,t){var n=_t,r=xr(),i=t(),s=!Br(r.memoizedState,i);if(s&&(r.memoizedState=i,Bn=!0),r=r.queue,hw(lD.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,xc(9,aD.bind(null,n,r,i,t),void 0,null),Jt===null)throw Error(G(349));(Yo&30)!==0||oD(n,t,i)}return i}function oD(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function aD(e,t,n,r){t.value=n,t.getSnapshot=r,uD(t)&&cD(e)}function lD(e,t,n){return n(function(){uD(t)&&cD(e)})}function uD(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Br(e,n)}catch{return!0}}function cD(e){var t=qi(e,1);t!==null&&Fr(t,e,1,-1)}function LC(e){var t=qr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_c,lastRenderedState:e},t.queue=e,e=e.dispatch=U3.bind(null,_t,e),[t.memoizedState,e]}function xc(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dD(){return xr().memoizedState}function Kh(e,t,n,r){var i=qr();_t.flags|=e,i.memoizedState=xc(1|t,n,void 0,r===void 0?null:r)}function Vp(e,t,n,r){var i=xr();r=r===void 0?null:r;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,r!==null&&uw(r,o.deps)){i.memoizedState=xc(t,n,s,r);return}}_t.flags|=e,i.memoizedState=xc(1|t,n,s,r)}function $C(e,t){return Kh(8390656,8,e,t)}function hw(e,t){return Vp(2048,8,e,t)}function hD(e,t){return Vp(4,2,e,t)}function fD(e,t){return Vp(4,4,e,t)}function pD(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mD(e,t,n){return n=n!=null?n.concat([e]):null,Vp(4,4,pD.bind(null,t,e),n)}function fw(){}function gD(e,t){var n=xr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uw(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yD(e,t){var n=xr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uw(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vD(e,t,n){return(Yo&21)===0?(e.baseState&&(e.baseState=!1,Bn=!0),e.memoizedState=n):(Br(n,t)||(n=xT(),_t.lanes|=n,Wo|=n,e.baseState=!0),t)}function $3(e,t){var n=qe;qe=n!==0&&4>n?n:4,e(!0);var r=x0.transition;x0.transition={};try{e(!1),t()}finally{qe=n,x0.transition=r}}function wD(){return xr().memoizedState}function F3(e,t,n){var r=$s(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_D(e))xD(t,n);else if(n=XT(e,t,n,r),n!==null){var i=Rn();Fr(n,e,r,i),SD(n,t,r)}}function U3(e,t,n){var r=$s(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_D(e))xD(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Br(a,o)){var u=t.interleaved;u===null?(i.next=i,iw(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=XT(e,t,i,r),n!==null&&(i=Rn(),Fr(n,e,r,i),SD(n,t,r))}}function _D(e){var t=e.alternate;return e===_t||t!==null&&t===_t}function xD(e,t){Yu=Mf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function SD(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Y1(e,n)}}var Lf={readContext:_r,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},B3={readContext:_r,useCallback:function(e,t){return qr().memoizedState=[e,t===void 0?null:t],e},useContext:_r,useEffect:$C,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Kh(4194308,4,pD.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kh(4194308,4,e,t)},useInsertionEffect:function(e,t){return Kh(4,2,e,t)},useMemo:function(e,t){var n=qr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F3.bind(null,_t,e),[r.memoizedState,e]},useRef:function(e){var t=qr();return e={current:e},t.memoizedState=e},useState:LC,useDebugValue:fw,useDeferredValue:function(e){return qr().memoizedState=e},useTransition:function(){var e=LC(!1),t=e[0];return e=$3.bind(null,e[1]),qr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_t,i=qr();if(mt){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),Jt===null)throw Error(G(349));(Yo&30)!==0||oD(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,$C(lD.bind(null,r,s,e),[e]),r.flags|=2048,xc(9,aD.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=qr(),t=Jt.identifierPrefix;if(mt){var n=Ri,r=Oi;n=(r&~(1<<32-$r(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},z3={readContext:_r,useCallback:gD,useContext:_r,useEffect:hw,useImperativeHandle:mD,useInsertionEffect:hD,useLayoutEffect:fD,useMemo:yD,useReducer:S0,useRef:dD,useState:function(){return S0(_c)},useDebugValue:fw,useDeferredValue:function(e){var t=xr();return vD(t,Vt.memoizedState,e)},useTransition:function(){var e=S0(_c)[0],t=xr().memoizedState;return[e,t]},useMutableSource:iD,useSyncExternalStore:sD,useId:wD,unstable_isNewReconciler:!1},V3={readContext:_r,useCallback:gD,useContext:_r,useEffect:hw,useImperativeHandle:mD,useInsertionEffect:hD,useLayoutEffect:fD,useMemo:yD,useReducer:C0,useRef:dD,useState:function(){return C0(_c)},useDebugValue:fw,useDeferredValue:function(e){var t=xr();return Vt===null?t.memoizedState=e:vD(t,Vt.memoizedState,e)},useTransition:function(){var e=C0(_c)[0],t=xr().memoizedState;return[e,t]},useMutableSource:iD,useSyncExternalStore:sD,useId:wD,unstable_isNewReconciler:!1};function _l(e,t){try{var n="",r=t;do n+=g6(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function E0(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Jy(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var j3=typeof WeakMap=="function"?WeakMap:Map;function CD(e,t,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ff||(Ff=!0,lv=r),Jy(e,t)},n}function ED(e,t,n){n=Vi(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jy(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jy(e,t),typeof r!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function FC(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new j3;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=r5.bind(null,e,t,n),t.then(e,e))}function UC(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function BC(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vi(-1,1),t.tag=2,Ms(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Y3=ss.ReactCurrentOwner,Bn=!1;function An(e,t,n,r){t.child=e===null?nD(t,null,n,r):vl(t,e.child,n,r)}function zC(e,t,n,r,i){n=n.render;var s=t.ref;return el(t,i),r=cw(e,t,n,r,s,i),n=dw(),e!==null&&!Bn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ki(e,t,i)):(mt&&n&&J1(t),t.flags|=1,An(e,t,r,i),t.child)}function VC(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!xw(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,kD(e,t,s,r,i)):(e=Zh(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fc,n(o,r)&&e.ref===t.ref)return Ki(e,t,i)}return t.flags|=1,e=Fs(s,r),e.ref=t.ref,e.return=t,t.child=e}function kD(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(fc(s,r)&&e.ref===t.ref)if(Bn=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Bn=!0);else return t.lanes=e.lanes,Ki(e,t,i)}return Zy(e,t,n,r,i)}function TD(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Wa,Jn),Jn|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,tt(Wa,Jn),Jn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,tt(Wa,Jn),Jn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,tt(Wa,Jn),Jn|=r;return An(e,t,i,n),t.child}function DD(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zy(e,t,n,r,i){var s=jn(n)?Vo:Sn.current;return s=gl(t,s),el(t,i),n=cw(e,t,n,r,s,i),r=dw(),e!==null&&!Bn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ki(e,t,i)):(mt&&r&&J1(t),t.flags|=1,An(e,t,n,i),t.child)}function jC(e,t,n,r,i){if(jn(n)){var s=!0;bf(t)}else s=!1;if(el(t,i),t.stateNode===null)Qh(e,t),eD(t,n,r),Xy(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_r(c):(c=jn(n)?Vo:Sn.current,c=gl(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&PC(t,o,r,c),gs=!1;var m=t.memoizedState;o.state=m,Rf(t,r,o,i),u=t.memoizedState,a!==r||m!==u||Vn.current||gs?(typeof h=="function"&&(Qy(t,n,h,r),u=t.memoizedState),(a=gs||RC(t,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,JT(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ar(t.type,a),o.props=c,p=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_r(u):(u=jn(n)?Vo:Sn.current,u=gl(t,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&PC(t,o,r,u),gs=!1,m=t.memoizedState,o.state=m,Rf(t,r,o,i);var v=t.memoizedState;a!==p||m!==v||Vn.current||gs?(typeof x=="function"&&(Qy(t,n,x,r),v=t.memoizedState),(c=gs||RC(t,n,c,r,m,v,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ev(e,t,n,r,s,i)}function ev(e,t,n,r,i,s){DD(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&bC(t,n,!1),Ki(e,t,s);r=t.stateNode,Y3.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=vl(t,e.child,null,s),t.child=vl(t,null,a,s)):An(e,t,a,s),t.memoizedState=r.state,i&&bC(t,n,!0),t.child}function bD(e){var t=e.stateNode;t.pendingContext?DC(e,t.pendingContext,t.pendingContext!==t.context):t.context&&DC(e,t.context,!1),ow(e,t.containerInfo)}function YC(e,t,n,r,i){return yl(),ew(i),t.flags|=256,An(e,t,n,r),t.child}var tv={dehydrated:null,treeContext:null,retryLane:0};function nv(e){return{baseLanes:e,cachePool:null,transitions:null}}function ID(e,t,n){var r=t.pendingProps,i=wt.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),tt(wt,i&1),e===null)return qy(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wp(o,r,0,null),e=Lo(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=nv(n),t.memoizedState=tv,e):pw(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return W3(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Fs(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fs(a,s):(s=Lo(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?nv(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=tv,r}return s=e.child,e=s.sibling,r=Fs(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pw(e,t){return t=Wp({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xh(e,t,n,r){return r!==null&&ew(r),vl(t,e.child,null,n),e=pw(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function W3(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=E0(Error(G(422))),xh(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Wp({mode:"visible",children:r.children},i,0,null),s=Lo(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&vl(t,e.child,null,o),t.child.memoizedState=nv(o),t.memoizedState=tv,s);if((t.mode&1)===0)return xh(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(G(419)),r=E0(s,r,void 0),xh(e,t,o,r)}if(a=(o&e.childLanes)!==0,Bn||a){if(r=Jt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qi(e,i),Fr(r,e,i,-1))}return _w(),r=E0(Error(G(421))),xh(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=i5.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,er=Ps(i.nextSibling),rr=t,mt=!0,Or=null,e!==null&&(hr[fr++]=Oi,hr[fr++]=Ri,hr[fr++]=jo,Oi=e.id,Ri=e.overflow,jo=t),t=pw(t,r.children),t.flags|=4096,t)}function WC(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ky(e.return,t,n)}function k0(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AD(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(An(e,t,r.children,n),r=wt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&WC(e,n,t);else if(e.tag===19)WC(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(tt(wt,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Pf(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),k0(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Pf(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}k0(t,!0,n,null,s);break;case"together":k0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qh(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ki(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wo|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=Fs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function H3(e,t,n){switch(t.tag){case 3:bD(t),yl();break;case 5:rD(t);break;case 1:jn(t.type)&&bf(t);break;case 4:ow(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;tt(Nf,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(tt(wt,wt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ID(e,t,n):(tt(wt,wt.current&1),e=Ki(e,t,n),e!==null?e.sibling:null);tt(wt,wt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return AD(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),tt(wt,wt.current),r)break;return null;case 22:case 23:return t.lanes=0,TD(e,t,n)}return Ki(e,t,n)}var ND,rv,OD,RD;ND=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rv=function(){};OD=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Io(ni.current);var s=null;switch(n){case"input":i=ky(e,i),r=ky(e,r),s=[];break;case"select":i=xt({},i,{value:void 0}),r=xt({},r,{value:void 0}),s=[];break;case"textarea":i=by(e,i),r=by(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Tf)}Ay(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oc.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ot("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};RD=function(e,t,n,r){n!==r&&(t.flags|=4)};function wu(e,t){if(!mt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G3(e,t,n){var r=t.pendingProps;switch(Z1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(t),null;case 1:return jn(t.type)&&Df(),dn(t),null;case 3:return r=t.stateNode,wl(),at(Vn),at(Sn),lw(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wh(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Or!==null&&(dv(Or),Or=null))),rv(e,t),dn(t),null;case 5:aw(t);var i=Io(vc.current);if(n=t.type,e!==null&&t.stateNode!=null)OD(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return dn(t),null}if(e=Io(ni.current),wh(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Kr]=t,r[gc]=s,e=(t.mode&1)!==0,n){case"dialog":ot("cancel",r),ot("close",r);break;case"iframe":case"object":case"embed":ot("load",r);break;case"video":case"audio":for(i=0;i<Au.length;i++)ot(Au[i],r);break;case"source":ot("error",r);break;case"img":case"image":case"link":ot("error",r),ot("load",r);break;case"details":ot("toggle",r);break;case"input":eC(r,s),ot("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ot("invalid",r);break;case"textarea":nC(r,s),ot("invalid",r)}Ay(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vh(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vh(r.textContent,a,e),i=["children",""+a]):oc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",r)}switch(n){case"input":ch(r),tC(r,s,!0);break;case"textarea":ch(r),rC(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tf)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=oT(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Kr]=t,e[gc]=r,ND(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ny(n,r),n){case"dialog":ot("cancel",e),ot("close",e),i=r;break;case"iframe":case"object":case"embed":ot("load",e),i=r;break;case"video":case"audio":for(i=0;i<Au.length;i++)ot(Au[i],e);i=r;break;case"source":ot("error",e),i=r;break;case"img":case"image":case"link":ot("error",e),ot("load",e),i=r;break;case"details":ot("toggle",e),i=r;break;case"input":eC(e,r),i=ky(e,r),ot("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xt({},r,{value:void 0}),ot("invalid",e);break;case"textarea":nC(e,r),i=by(e,r),ot("invalid",e);break;default:i=r}Ay(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?uT(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&aT(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ac(e,u):typeof u=="number"&&ac(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oc.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ot("scroll",e):u!=null&&F1(e,s,u,o))}switch(n){case"input":ch(e),tC(e,r,!1);break;case"textarea":ch(e),rC(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qs(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Qa(e,!!r.multiple,s,!1):r.defaultValue!=null&&Qa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Tf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dn(t),null;case 6:if(e&&t.stateNode!=null)RD(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Io(vc.current),Io(ni.current),wh(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kr]=t,(s=r.nodeValue!==n)&&(e=rr,e!==null))switch(e.tag){case 3:vh(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vh(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kr]=t,t.stateNode=r}return dn(t),null;case 13:if(at(wt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(mt&&er!==null&&(t.mode&1)!==0&&(t.flags&128)===0)QT(),yl(),t.flags|=98560,s=!1;else if(s=wh(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(G(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[Kr]=t}else yl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;dn(t),s=!1}else Or!==null&&(dv(Or),Or=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(wt.current&1)!==0?Yt===0&&(Yt=3):_w())),t.updateQueue!==null&&(t.flags|=4),dn(t),null);case 4:return wl(),rv(e,t),e===null&&pc(t.stateNode.containerInfo),dn(t),null;case 10:return rw(t.type._context),dn(t),null;case 17:return jn(t.type)&&Df(),dn(t),null;case 19:if(at(wt),s=t.memoizedState,s===null)return dn(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)wu(s,!1);else{if(Yt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Pf(e),o!==null){for(t.flags|=128,wu(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return tt(wt,wt.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ot()>xl&&(t.flags|=128,r=!0,wu(s,!1),t.lanes=4194304)}else{if(!r)if(e=Pf(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return dn(t),null}else 2*Ot()-s.renderingStartTime>xl&&n!==1073741824&&(t.flags|=128,r=!0,wu(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ot(),t.sibling=null,n=wt.current,tt(wt,r?n&1|2:n&1),t):(dn(t),null);case 22:case 23:return ww(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Jn&1073741824)!==0&&(dn(t),t.subtreeFlags&6&&(t.flags|=8192)):dn(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function q3(e,t){switch(Z1(t),t.tag){case 1:return jn(t.type)&&Df(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wl(),at(Vn),at(Sn),lw(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return aw(t),null;case 13:if(at(wt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return at(wt),null;case 4:return wl(),null;case 10:return rw(t.type._context),null;case 22:case 23:return ww(),null;case 24:return null;default:return null}}var Sh=!1,mn=!1,K3=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Ya(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Et(e,t,r)}else n.current=null}function iv(e,t,n){try{n()}catch(r){Et(e,t,r)}}var HC=!1;function Q3(e,t){if(zy=Cf,e=$T(),X1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vy={focusedElem:e,selectionRange:n},Cf=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,k=v.memoizedState,S=t.stateNode,y=S.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ar(t.type,_),k);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(T){Et(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return v=HC,HC=!1,v}function Wu(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&iv(t,n,s)}i=i.next}while(i!==r)}}function jp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sv(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function PD(e){var t=e.alternate;t!==null&&(e.alternate=null,PD(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kr],delete t[gc],delete t[Wy],delete t[O3],delete t[R3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function MD(e){return e.tag===5||e.tag===3||e.tag===4}function GC(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||MD(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ov(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tf));else if(r!==4&&(e=e.child,e!==null))for(ov(e,t,n),e=e.sibling;e!==null;)ov(e,t,n),e=e.sibling}function av(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(av(e,t,n),e=e.sibling;e!==null;)av(e,t,n),e=e.sibling}var nn=null,Nr=!1;function fs(e,t,n){for(n=n.child;n!==null;)LD(e,t,n),n=n.sibling}function LD(e,t,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Mp,n)}catch{}switch(n.tag){case 5:mn||Ya(n,t);case 6:var r=nn,i=Nr;nn=null,fs(e,t,n),nn=r,Nr=i,nn!==null&&(Nr?(e=nn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nn.removeChild(n.stateNode));break;case 18:nn!==null&&(Nr?(e=nn,n=n.stateNode,e.nodeType===8?v0(e.parentNode,n):e.nodeType===1&&v0(e,n),dc(e)):v0(nn,n.stateNode));break;case 4:r=nn,i=Nr,nn=n.stateNode.containerInfo,Nr=!0,fs(e,t,n),nn=r,Nr=i;break;case 0:case 11:case 14:case 15:if(!mn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&iv(n,t,o),i=i.next}while(i!==r)}fs(e,t,n);break;case 1:if(!mn&&(Ya(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Et(n,t,a)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:n.mode&1?(mn=(r=mn)||n.memoizedState!==null,fs(e,t,n),mn=r):fs(e,t,n);break;default:fs(e,t,n)}}function qC(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new K3),t.forEach(function(r){var i=s5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ir(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:nn=a.stateNode,Nr=!1;break e;case 3:nn=a.stateNode.containerInfo,Nr=!0;break e;case 4:nn=a.stateNode.containerInfo,Nr=!0;break e}a=a.return}if(nn===null)throw Error(G(160));LD(s,o,i),nn=null,Nr=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Et(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$D(t,e),t=t.sibling}function $D(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ir(t,e),Gr(e),r&4){try{Wu(3,e,e.return),jp(3,e)}catch(_){Et(e,e.return,_)}try{Wu(5,e,e.return)}catch(_){Et(e,e.return,_)}}break;case 1:Ir(t,e),Gr(e),r&512&&n!==null&&Ya(n,n.return);break;case 5:if(Ir(t,e),Gr(e),r&512&&n!==null&&Ya(n,n.return),e.flags&32){var i=e.stateNode;try{ac(i,"")}catch(_){Et(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iT(i,s),Ny(a,o);var c=Ny(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?uT(i,p):h==="dangerouslySetInnerHTML"?aT(i,p):h==="children"?ac(i,p):F1(i,h,p,c)}switch(a){case"input":Ty(i,s);break;case"textarea":sT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Qa(i,!!s.multiple,x,!1):m!==!!s.multiple&&(s.defaultValue!=null?Qa(i,!!s.multiple,s.defaultValue,!0):Qa(i,!!s.multiple,s.multiple?[]:"",!1))}i[gc]=s}catch(_){Et(e,e.return,_)}}break;case 6:if(Ir(t,e),Gr(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){Et(e,e.return,_)}}break;case 3:if(Ir(t,e),Gr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dc(t.containerInfo)}catch(_){Et(e,e.return,_)}break;case 4:Ir(t,e),Gr(e);break;case 13:Ir(t,e),Gr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yw=Ot())),r&4&&qC(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(mn=(c=mn)||h,Ir(t,e),mn=c):Ir(t,e),Gr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&(e.mode&1)!==0)for(ae=e,h=e.child;h!==null;){for(p=ae=h;ae!==null;){switch(m=ae,x=m.child,m.tag){case 0:case 11:case 14:case 15:Wu(4,m,m.return);break;case 1:Ya(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(_){Et(r,n,_)}}break;case 5:Ya(m,m.return);break;case 22:if(m.memoizedState!==null){QC(p);continue}}x!==null?(x.return=m,ae=x):QC(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=lT("display",o))}catch(_){Et(e,e.return,_)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(_){Et(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ir(t,e),Gr(e),r&4&&qC(e);break;case 21:break;default:Ir(t,e),Gr(e)}}function Gr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(MD(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ac(i,""),r.flags&=-33);var s=GC(e);av(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=GC(e);ov(e,a,o);break;default:throw Error(G(161))}}catch(u){Et(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function X3(e,t,n){ae=e,FD(e)}function FD(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sh;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||mn;a=Sh;var c=mn;if(Sh=o,(mn=u)&&!c)for(ae=i;ae!==null;)o=ae,u=o.child,o.tag===22&&o.memoizedState!==null?XC(i):u!==null?(u.return=o,ae=u):XC(i);for(;s!==null;)ae=s,FD(s),s=s.sibling;ae=i,Sh=a,mn=c}KC(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,ae=s):KC(e)}}function KC(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:mn||jp(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!mn)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ar(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&OC(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}OC(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&dc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}mn||t.flags&512&&sv(t)}catch(m){Et(t,t.return,m)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function QC(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function XC(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jp(4,t)}catch(u){Et(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Et(t,i,u)}}var s=t.return;try{sv(t)}catch(u){Et(t,s,u)}break;case 5:var o=t.return;try{sv(t)}catch(u){Et(t,o,u)}}}catch(u){Et(t,t.return,u)}if(t===e){ae=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ae=a;break}ae=t.return}}var J3=Math.ceil,$f=ss.ReactCurrentDispatcher,mw=ss.ReactCurrentOwner,wr=ss.ReactCurrentBatchConfig,ze=0,Jt=null,Lt=null,on=0,Jn=0,Wa=oo(0),Yt=0,Sc=null,Wo=0,Yp=0,gw=0,Hu=null,Fn=null,yw=0,xl=1/0,Di=null,Ff=!1,lv=null,Ls=null,Ch=!1,ks=null,Uf=0,Gu=0,uv=null,Xh=-1,Jh=0;function Rn(){return(ze&6)!==0?Ot():Xh!==-1?Xh:Xh=Ot()}function $s(e){return(e.mode&1)===0?1:(ze&2)!==0&&on!==0?on&-on:M3.transition!==null?(Jh===0&&(Jh=xT()),Jh):(e=qe,e!==0||(e=window.event,e=e===void 0?16:bT(e.type)),e)}function Fr(e,t,n,r){if(50<Gu)throw Gu=0,uv=null,Error(G(185));rd(e,n,r),((ze&2)===0||e!==Jt)&&(e===Jt&&((ze&2)===0&&(Yp|=n),Yt===4&&vs(e,on)),Yn(e,r),n===1&&ze===0&&(t.mode&1)===0&&(xl=Ot()+500,Bp&&ao()))}function Yn(e,t){var n=e.callbackNode;M6(e,t);var r=Sf(e,e===Jt?on:0);if(r===0)n!==null&&oC(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oC(n),t===1)e.tag===0?P3(JC.bind(null,e)):GT(JC.bind(null,e)),A3(function(){(ze&6)===0&&ao()}),n=null;else{switch(ST(r)){case 1:n=j1;break;case 4:n=wT;break;case 16:n=xf;break;case 536870912:n=_T;break;default:n=xf}n=HD(n,UD.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function UD(e,t){if(Xh=-1,Jh=0,(ze&6)!==0)throw Error(G(327));var n=e.callbackNode;if(tl()&&e.callbackNode!==n)return null;var r=Sf(e,e===Jt?on:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Bf(e,r);else{t=r;var i=ze;ze|=2;var s=zD();(Jt!==e||on!==t)&&(Di=null,xl=Ot()+500,Mo(e,t));do try{t5();break}catch(a){BD(e,a)}while(1);nw(),$f.current=s,ze=i,Lt!==null?t=0:(Jt=null,on=0,t=Yt)}if(t!==0){if(t===2&&(i=Ly(e),i!==0&&(r=i,t=cv(e,i))),t===1)throw n=Sc,Mo(e,0),vs(e,r),Yn(e,Ot()),n;if(t===6)vs(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Z3(i)&&(t=Bf(e,r),t===2&&(s=Ly(e),s!==0&&(r=s,t=cv(e,s))),t===1))throw n=Sc,Mo(e,0),vs(e,r),Yn(e,Ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Eo(e,Fn,Di);break;case 3:if(vs(e,r),(r&130023424)===r&&(t=yw+500-Ot(),10<t)){if(Sf(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Rn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yy(Eo.bind(null,e,Fn,Di),t);break}Eo(e,Fn,Di);break;case 4:if(vs(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-$r(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J3(r/1960))-r,10<r){e.timeoutHandle=Yy(Eo.bind(null,e,Fn,Di),r);break}Eo(e,Fn,Di);break;case 5:Eo(e,Fn,Di);break;default:throw Error(G(329))}}}return Yn(e,Ot()),e.callbackNode===n?UD.bind(null,e):null}function cv(e,t){var n=Hu;return e.current.memoizedState.isDehydrated&&(Mo(e,t).flags|=256),e=Bf(e,t),e!==2&&(t=Fn,Fn=n,t!==null&&dv(t)),e}function dv(e){Fn===null?Fn=e:Fn.push.apply(Fn,e)}function Z3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Br(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vs(e,t){for(t&=~gw,t&=~Yp,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$r(t),r=1<<n;e[n]=-1,t&=~r}}function JC(e){if((ze&6)!==0)throw Error(G(327));tl();var t=Sf(e,0);if((t&1)===0)return Yn(e,Ot()),null;var n=Bf(e,t);if(e.tag!==0&&n===2){var r=Ly(e);r!==0&&(t=r,n=cv(e,r))}if(n===1)throw n=Sc,Mo(e,0),vs(e,t),Yn(e,Ot()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Eo(e,Fn,Di),Yn(e,Ot()),null}function vw(e,t){var n=ze;ze|=1;try{return e(t)}finally{ze=n,ze===0&&(xl=Ot()+500,Bp&&ao())}}function Ho(e){ks!==null&&ks.tag===0&&(ze&6)===0&&tl();var t=ze;ze|=1;var n=wr.transition,r=qe;try{if(wr.transition=null,qe=1,e)return e()}finally{qe=r,wr.transition=n,ze=t,(ze&6)===0&&ao()}}function ww(){Jn=Wa.current,at(Wa)}function Mo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I3(n)),Lt!==null)for(n=Lt.return;n!==null;){var r=n;switch(Z1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Df();break;case 3:wl(),at(Vn),at(Sn),lw();break;case 5:aw(r);break;case 4:wl();break;case 13:at(wt);break;case 19:at(wt);break;case 10:rw(r.type._context);break;case 22:case 23:ww()}n=n.return}if(Jt=e,Lt=e=Fs(e.current,null),on=Jn=t,Yt=0,Sc=null,gw=Yp=Wo=0,Fn=Hu=null,bo!==null){for(t=0;t<bo.length;t++)if(n=bo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}bo=null}return e}function BD(e,t){do{var n=Lt;try{if(nw(),qh.current=Lf,Mf){for(var r=_t.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mf=!1}if(Yo=0,Qt=Vt=_t=null,Yu=!1,wc=0,mw.current=null,n===null||n.return===null){Yt=1,Sc=t,Lt=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=on,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if((h.mode&1)===0&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=UC(o);if(x!==null){x.flags&=-257,BC(x,o,a,s,t),x.mode&1&&FC(s,c,t),t=x,u=c;var v=t.updateQueue;if(v===null){var _=new Set;_.add(u),t.updateQueue=_}else v.add(u);break e}else{if((t&1)===0){FC(s,c,t),_w();break e}u=Error(G(426))}}else if(mt&&a.mode&1){var k=UC(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),BC(k,o,a,s,t),ew(_l(u,a));break e}}s=u=_l(u,a),Yt!==4&&(Yt=2),Hu===null?Hu=[s]:Hu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=CD(s,u,t);NC(s,S);break e;case 1:a=u;var y=s.type,C=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ls===null||!Ls.has(C)))){s.flags|=65536,t&=-t,s.lanes|=t;var T=ED(s,a,t);NC(s,T);break e}}s=s.return}while(s!==null)}jD(n)}catch(I){t=I,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(1)}function zD(){var e=$f.current;return $f.current=Lf,e===null?Lf:e}function _w(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Jt===null||(Wo&268435455)===0&&(Yp&268435455)===0||vs(Jt,on)}function Bf(e,t){var n=ze;ze|=2;var r=zD();(Jt!==e||on!==t)&&(Di=null,Mo(e,t));do try{e5();break}catch(i){BD(e,i)}while(1);if(nw(),ze=n,$f.current=r,Lt!==null)throw Error(G(261));return Jt=null,on=0,Yt}function e5(){for(;Lt!==null;)VD(Lt)}function t5(){for(;Lt!==null&&!T6();)VD(Lt)}function VD(e){var t=WD(e.alternate,e,Jn);e.memoizedProps=e.pendingProps,t===null?jD(e):Lt=t,mw.current=null}function jD(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=G3(n,t,Jn),n!==null){Lt=n;return}}else{if(n=q3(n,t),n!==null){n.flags&=32767,Lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yt=6,Lt=null;return}}if(t=t.sibling,t!==null){Lt=t;return}Lt=t=e}while(t!==null);Yt===0&&(Yt=5)}function Eo(e,t,n){var r=qe,i=wr.transition;try{wr.transition=null,qe=1,n5(e,t,n,r)}finally{wr.transition=i,qe=r}return null}function n5(e,t,n,r){do tl();while(ks!==null);if((ze&6)!==0)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(L6(e,s),e===Jt&&(Lt=Jt=null,on=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ch||(Ch=!0,HD(xf,function(){return tl(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=wr.transition,wr.transition=null;var o=qe;qe=1;var a=ze;ze|=4,mw.current=null,Q3(e,n),$D(n,e),S3(Vy),Cf=!!zy,Vy=zy=null,e.current=n,X3(n),D6(),ze=a,qe=o,wr.transition=s}else e.current=n;if(Ch&&(Ch=!1,ks=e,Uf=i),s=e.pendingLanes,s===0&&(Ls=null),A6(n.stateNode),Yn(e,Ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ff)throw Ff=!1,e=lv,lv=null,e;return(Uf&1)!==0&&e.tag!==0&&tl(),s=e.pendingLanes,(s&1)!==0?e===uv?Gu++:(Gu=0,uv=e):Gu=0,ao(),null}function tl(){if(ks!==null){var e=ST(Uf),t=wr.transition,n=qe;try{if(wr.transition=null,qe=16>e?16:e,ks===null)var r=!1;else{if(e=ks,ks=null,Uf=0,(ze&6)!==0)throw Error(G(331));var i=ze;for(ze|=4,ae=e.current;ae!==null;){var s=ae,o=s.child;if((ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(ae=c;ae!==null;){var h=ae;switch(h.tag){case 0:case 11:case 15:Wu(8,h,s)}var p=h.child;if(p!==null)p.return=h,ae=p;else for(;ae!==null;){h=ae;var m=h.sibling,x=h.return;if(PD(h),h===c){ae=null;break}if(m!==null){m.return=x,ae=m;break}ae=x}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Wu(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break e}ae=s.return}}var y=e.current;for(ae=y;ae!==null;){o=ae;var C=o.child;if((o.subtreeFlags&2064)!==0&&C!==null)C.return=o,ae=C;else e:for(o=y;ae!==null;){if(a=ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:jp(9,a)}}catch(I){Et(a,a.return,I)}if(a===o){ae=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,ae=T;break e}ae=a.return}}if(ze=i,ao(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Mp,e)}catch{}r=!0}return r}finally{qe=n,wr.transition=t}}return!1}function ZC(e,t,n){t=_l(n,t),t=CD(e,t,1),e=Ms(e,t,1),t=Rn(),e!==null&&(rd(e,1,t),Yn(e,t))}function Et(e,t,n){if(e.tag===3)ZC(e,e,n);else for(;t!==null;){if(t.tag===3){ZC(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ls===null||!Ls.has(r))){e=_l(n,e),e=ED(t,e,1),t=Ms(t,e,1),e=Rn(),t!==null&&(rd(t,1,e),Yn(t,e));break}}t=t.return}}function r5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Rn(),e.pingedLanes|=e.suspendedLanes&n,Jt===e&&(on&n)===n&&(Yt===4||Yt===3&&(on&130023424)===on&&500>Ot()-yw?Mo(e,0):gw|=n),Yn(e,t)}function YD(e,t){t===0&&((e.mode&1)===0?t=1:(t=fh,fh<<=1,(fh&130023424)===0&&(fh=4194304)));var n=Rn();e=qi(e,t),e!==null&&(rd(e,t,n),Yn(e,n))}function i5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),YD(e,n)}function s5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),YD(e,n)}var WD;WD=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Vn.current)Bn=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Bn=!1,H3(e,t,n);Bn=(e.flags&131072)!==0}else Bn=!1,mt&&(t.flags&1048576)!==0&&qT(t,Af,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qh(e,t),e=t.pendingProps;var i=gl(t,Sn.current);el(t,n),i=cw(null,t,r,e,i,n);var s=dw();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jn(r)?(s=!0,bf(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sw(t),i.updater=zp,t.stateNode=i,i._reactInternals=t,Xy(t,r,e,n),t=ev(null,t,r,!0,s,n)):(t.tag=0,mt&&s&&J1(t),An(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qh(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=a5(r),e=Ar(r,e),i){case 0:t=Zy(null,t,r,e,n);break e;case 1:t=jC(null,t,r,e,n);break e;case 11:t=zC(null,t,r,e,n);break e;case 14:t=VC(null,t,r,Ar(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ar(r,i),Zy(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ar(r,i),jC(e,t,r,i,n);case 3:e:{if(bD(t),e===null)throw Error(G(387));r=t.pendingProps,s=t.memoizedState,i=s.element,JT(e,t),Rf(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=_l(Error(G(423)),t),t=YC(e,t,r,n,i);break e}else if(r!==i){i=_l(Error(G(424)),t),t=YC(e,t,r,n,i);break e}else for(er=Ps(t.stateNode.containerInfo.firstChild),rr=t,mt=!0,Or=null,n=nD(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yl(),r===i){t=Ki(e,t,n);break e}An(e,t,r,n)}t=t.child}return t;case 5:return rD(t),e===null&&qy(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,jy(r,i)?o=null:s!==null&&jy(r,s)&&(t.flags|=32),DD(e,t),An(e,t,o,n),t.child;case 6:return e===null&&qy(t),null;case 13:return ID(e,t,n);case 4:return ow(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vl(t,null,r,n):An(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ar(r,i),zC(e,t,r,i,n);case 7:return An(e,t,t.pendingProps,n),t.child;case 8:return An(e,t,t.pendingProps.children,n),t.child;case 12:return An(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,tt(Nf,r._currentValue),r._currentValue=o,s!==null)if(Br(s.value,o)){if(s.children===i.children&&!Vn.current){t=Ki(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Vi(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ky(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(G(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ky(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}An(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,el(t,n),i=_r(i),r=r(i),t.flags|=1,An(e,t,r,n),t.child;case 14:return r=t.type,i=Ar(r,t.pendingProps),i=Ar(r.type,i),VC(e,t,r,i,n);case 15:return kD(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ar(r,i),Qh(e,t),t.tag=1,jn(r)?(e=!0,bf(t)):e=!1,el(t,n),eD(t,r,i),Xy(t,r,i,n),ev(null,t,r,!0,e,n);case 19:return AD(e,t,n);case 22:return TD(e,t,n)}throw Error(G(156,t.tag))};function HD(e,t){return vT(e,t)}function o5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(e,t,n,r){return new o5(e,t,n,r)}function xw(e){return e=e.prototype,!(!e||!e.isReactComponent)}function a5(e){if(typeof e=="function")return xw(e)?1:0;if(e!=null){if(e=e.$$typeof,e===B1)return 11;if(e===z1)return 14}return 2}function Fs(e,t){var n=e.alternate;return n===null?(n=yr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zh(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")xw(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ma:return Lo(n.children,i,s,t);case U1:o=8,i|=8;break;case xy:return e=yr(12,n,t,i|2),e.elementType=xy,e.lanes=s,e;case Sy:return e=yr(13,n,t,i),e.elementType=Sy,e.lanes=s,e;case Cy:return e=yr(19,n,t,i),e.elementType=Cy,e.lanes=s,e;case tT:return Wp(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z2:o=10;break e;case eT:o=9;break e;case B1:o=11;break e;case z1:o=14;break e;case ms:o=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=yr(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Lo(e,t,n,r){return e=yr(7,e,r,t),e.lanes=n,e}function Wp(e,t,n,r){return e=yr(22,e,r,t),e.elementType=tT,e.lanes=n,e.stateNode={isHidden:!1},e}function T0(e,t,n){return e=yr(6,e,null,t),e.lanes=n,e}function D0(e,t,n){return t=yr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=a0(0),this.expirationTimes=a0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=a0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sw(e,t,n,r,i,s,o,a,u){return e=new l5(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=yr(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sw(s),e}function u5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pa,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function GD(e){if(!e)return Ks;e=e._reactInternals;e:{if(oa(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(jn(n))return HT(e,n,t)}return t}function qD(e,t,n,r,i,s,o,a,u){return e=Sw(n,r,!0,e,i,s,o,a,u),e.context=GD(null),n=e.current,r=Rn(),i=$s(n),s=Vi(r,i),s.callback=t!=null?t:null,Ms(n,s,i),e.current.lanes=i,rd(e,i,r),Yn(e,r),e}function Hp(e,t,n,r){var i=t.current,s=Rn(),o=$s(i);return n=GD(n),t.context===null?t.context=n:t.pendingContext=n,t=Vi(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ms(i,t,o),e!==null&&(Fr(e,i,o,s),Gh(e,i,o)),o}function zf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function eE(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cw(e,t){eE(e,t),(e=e.alternate)&&eE(e,t)}function c5(){return null}var KD=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ew(e){this._internalRoot=e}Gp.prototype.render=Ew.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Hp(e,t,null,null)};Gp.prototype.unmount=Ew.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ho(function(){Hp(null,e,null,null)}),t[Gi]=null}};function Gp(e){this._internalRoot=e}Gp.prototype.unstable_scheduleHydration=function(e){if(e){var t=kT();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ys.length&&t!==0&&t<ys[n].priority;n++);ys.splice(n,0,e),n===0&&DT(e)}};function kw(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tE(){}function d5(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=zf(o);s.call(c)}}var o=qD(t,r,e,0,null,!1,!1,"",tE);return e._reactRootContainer=o,e[Gi]=o.current,pc(e.nodeType===8?e.parentNode:e),Ho(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=zf(u);a.call(c)}}var u=Sw(e,0,!1,null,null,!1,!1,"",tE);return e._reactRootContainer=u,e[Gi]=u.current,pc(e.nodeType===8?e.parentNode:e),Ho(function(){Hp(t,u,n,r)}),u}function Kp(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=zf(o);a.call(u)}}Hp(t,o,e,i)}else o=d5(n,t,e,i,r);return zf(o)}CT=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Iu(t.pendingLanes);n!==0&&(Y1(t,n|1),Yn(t,Ot()),(ze&6)===0&&(xl=Ot()+500,ao()))}break;case 13:Ho(function(){var r=qi(e,1);if(r!==null){var i=Rn();Fr(r,e,1,i)}}),Cw(e,1)}};W1=function(e){if(e.tag===13){var t=qi(e,134217728);if(t!==null){var n=Rn();Fr(t,e,134217728,n)}Cw(e,134217728)}};ET=function(e){if(e.tag===13){var t=$s(e),n=qi(e,t);if(n!==null){var r=Rn();Fr(n,e,t,r)}Cw(e,t)}};kT=function(){return qe};TT=function(e,t){var n=qe;try{return qe=e,t()}finally{qe=n}};Ry=function(e,t,n){switch(t){case"input":if(Ty(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Up(r);if(!i)throw Error(G(90));rT(r),Ty(r,i)}}}break;case"textarea":sT(e,n);break;case"select":t=n.value,t!=null&&Qa(e,!!n.multiple,t,!1)}};hT=vw;fT=Ho;var h5={usingClientEntryPoint:!1,Events:[sd,Ua,Up,cT,dT,vw]},_u={findFiberByHostInstance:Do,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f5={bundleType:_u.bundleType,version:_u.version,rendererPackageName:_u.rendererPackageName,rendererConfig:_u.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ss.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gT(e),e===null?null:e.stateNode},findFiberByHostInstance:_u.findFiberByHostInstance||c5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eh.isDisabled&&Eh.supportsFiber)try{Mp=Eh.inject(f5),ti=Eh}catch{}}ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h5;ar.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kw(t))throw Error(G(200));return u5(e,t,null,n)};ar.createRoot=function(e,t){if(!kw(e))throw Error(G(299));var n=!1,r="",i=KD;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sw(e,1,!1,null,null,n,!1,r,i),e[Gi]=t.current,pc(e.nodeType===8?e.parentNode:e),new Ew(t)};ar.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=gT(t),e=e===null?null:e.stateNode,e};ar.flushSync=function(e){return Ho(e)};ar.hydrate=function(e,t,n){if(!qp(t))throw Error(G(200));return Kp(null,e,t,!0,n)};ar.hydrateRoot=function(e,t,n){if(!kw(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=KD;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qD(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Gi]=t.current,pc(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gp(t)};ar.render=function(e,t,n){if(!qp(t))throw Error(G(200));return Kp(null,e,t,!1,n)};ar.unmountComponentAtNode=function(e){if(!qp(e))throw Error(G(40));return e._reactRootContainer?(Ho(function(){Kp(null,null,e,!1,function(){e._reactRootContainer=null,e[Gi]=null})}),!0):!1};ar.unstable_batchedUpdates=vw;ar.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qp(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Kp(e,t,n,!1,r)};ar.version="18.2.0-next-9e3b772b8-20220608";function QD(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(QD)}catch(e){console.error(e)}}QD(),M1.exports=ar;var nE=M1.exports;wy.createRoot=nE.createRoot,wy.hydrateRoot=nE.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cc(){return Cc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cc.apply(this,arguments)}var Ts;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ts||(Ts={}));const rE="popstate";function p5(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return hv("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vf(i)}return g5(t,n,null,e)}function Ft(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Tw(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function m5(){return Math.random().toString(36).substr(2,8)}function iE(e,t){return{usr:e.state,key:e.key,idx:t}}function hv(e,t,n,r){return n===void 0&&(n=null),Cc({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ul(t):t,{state:n,key:t&&t.key||r||m5()})}function Vf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ul(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ts.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Cc({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Ts.Pop;let k=h(),S=k==null?null:k-c;c=k,u&&u({action:a,location:_.location,delta:S})}function m(k,S){a=Ts.Push;let y=hv(_.location,k,S);n&&n(y,k),c=h()+1;let C=iE(y,c),T=_.createHref(y);try{o.pushState(C,"",T)}catch{i.location.assign(T)}s&&u&&u({action:a,location:_.location,delta:1})}function x(k,S){a=Ts.Replace;let y=hv(_.location,k,S);n&&n(y,k),c=h();let C=iE(y,c),T=_.createHref(y);o.replaceState(C,"",T),s&&u&&u({action:a,location:_.location,delta:0})}function v(k){let S=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:Vf(k);return Ft(S,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,S)}let _={get action(){return a},get location(){return e(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(rE,p),u=k,()=>{i.removeEventListener(rE,p),u=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let S=v(k);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:x,go(k){return o.go(k)}};return _}var sE;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sE||(sE={}));function y5(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ul(t):t,i=Dw(r.pathname||"/",n);if(i==null)return null;let s=XD(e);v5(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=D5(s[a],A5(i));return o}function XD(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ft(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Us([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ft(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),XD(s.children,t,h,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:k5(c,s.index),routesMeta:h})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of JD(s.path))i(s,o,u)}),t}function JD(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=JD(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function v5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:T5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const w5=/^:\w+$/,_5=3,x5=2,S5=1,C5=10,E5=-2,oE=e=>e==="*";function k5(e,t){let n=e.split("/"),r=n.length;return n.some(oE)&&(r+=E5),t&&(r+=x5),n.filter(i=>!oE(i)).reduce((i,s)=>i+(w5.test(s)?_5:s===""?S5:C5),r)}function T5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function D5(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=b5({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let p=a.route;s.push({params:r,pathname:Us([i,h.pathname]),pathnameBase:P5(Us([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Us([i,h.pathnameBase]))}return s}function b5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=I5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{if(h==="*"){let m=a[p]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=N5(a[p]||"",h),c},{}),pathname:s,pathnameBase:o,pattern:e}}function I5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tw(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function A5(e){try{return decodeURI(e)}catch(t){return Tw(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function N5(e,t){try{return decodeURIComponent(e)}catch(n){return Tw(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Dw(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function O5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ul(e):e;return{pathname:n?n.startsWith("/")?n:R5(n,t):t,search:M5(r),hash:L5(i)}}function R5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function b0(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZD(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function eb(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ul(e):(i=Cc({},e),Ft(!i.pathname||!i.pathname.includes("?"),b0("?","pathname","search",i)),Ft(!i.pathname||!i.pathname.includes("#"),b0("#","pathname","hash",i)),Ft(!i.search||!i.search.includes("#"),b0("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let u=O5(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Us=e=>e.join("/").replace(/\/\/+/g,"/"),P5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,L5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const F5=["post","put","patch","delete"];[...F5];/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jf(){return jf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jf.apply(this,arguments)}const tb=R.exports.createContext(null),U5=R.exports.createContext(null),Bl=R.exports.createContext(null),Qp=R.exports.createContext(null),lo=R.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),nb=R.exports.createContext(null);function B5(e,t){let{relative:n}=t===void 0?{}:t;ad()||Ft(!1);let{basename:r,navigator:i}=R.exports.useContext(Bl),{hash:s,pathname:o,search:a}=ib(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Us([r,o])),i.createHref({pathname:u,search:a,hash:s})}function ad(){return R.exports.useContext(Qp)!=null}function ld(){return ad()||Ft(!1),R.exports.useContext(Qp).location}function rb(e){R.exports.useContext(Bl).static||R.exports.useLayoutEffect(e)}function ur(){let{isDataRoute:e}=R.exports.useContext(lo);return e?Z5():z5()}function z5(){ad()||Ft(!1);let{basename:e,navigator:t}=R.exports.useContext(Bl),{matches:n}=R.exports.useContext(lo),{pathname:r}=ld(),i=JSON.stringify(ZD(n).map(a=>a.pathnameBase)),s=R.exports.useRef(!1);return rb(()=>{s.current=!0}),R.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let c=eb(a,JSON.parse(i),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Us([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,i,r])}function zl(){let{matches:e}=R.exports.useContext(lo),t=e[e.length-1];return t?t.params:{}}function ib(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=R.exports.useContext(lo),{pathname:i}=ld(),s=JSON.stringify(ZD(r).map(o=>o.pathnameBase));return R.exports.useMemo(()=>eb(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function V5(e,t){return j5(e,t)}function j5(e,t,n){ad()||Ft(!1);let{navigator:r}=R.exports.useContext(Bl),{matches:i}=R.exports.useContext(lo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=ld(),c;if(t){var h;let _=typeof t=="string"?Ul(t):t;a==="/"||((h=_.pathname)==null?void 0:h.startsWith(a))||Ft(!1),c=_}else c=u;let p=c.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",x=y5(e,{pathname:m}),v=q5(x&&x.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Us([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Us([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&v?R.exports.createElement(Qp.Provider,{value:{location:jf({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ts.Pop}},v):v}function Y5(){let e=J5(),t=$5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return R.exports.createElement(R.exports.Fragment,null,R.exports.createElement("h2",null,"Unexpected Application Error!"),R.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.exports.createElement("pre",{style:i},n):null,s)}const W5=R.exports.createElement(Y5,null);class H5 extends R.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?R.exports.createElement(lo.Provider,{value:this.props.routeContext},R.exports.createElement(nb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G5(e){let{routeContext:t,match:n,children:r}=e,i=R.exports.useContext(tb);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.exports.createElement(lo.Provider,{value:t},r)}function q5(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||Ft(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,c)=>{let h=u.route.id?o==null?void 0:o[u.route.id]:null,p=null;n&&(p=u.route.errorElement||W5);let m=t.concat(s.slice(0,c+1)),x=()=>{let v;return h?v=p:u.route.Component?v=R.exports.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=a,R.exports.createElement(G5,{match:u,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?R.exports.createElement(H5,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:x(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):x()},null)}var fv;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(fv||(fv={}));var Ec;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Ec||(Ec={}));function K5(e){let t=R.exports.useContext(tb);return t||Ft(!1),t}function Q5(e){let t=R.exports.useContext(U5);return t||Ft(!1),t}function X5(e){let t=R.exports.useContext(lo);return t||Ft(!1),t}function sb(e){let t=X5(),n=t.matches[t.matches.length-1];return n.route.id||Ft(!1),n.route.id}function J5(){var e;let t=R.exports.useContext(nb),n=Q5(Ec.UseRouteError),r=sb(Ec.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Z5(){let{router:e}=K5(fv.UseNavigateStable),t=sb(Ec.UseNavigateStable),n=R.exports.useRef(!1);return rb(()=>{n.current=!0}),R.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,jf({fromRouteId:t},s)))},[e,t])}function ob(e){Ft(!1)}function e$(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ts.Pop,navigator:s,static:o=!1}=e;ad()&&Ft(!1);let a=t.replace(/^\/*/,"/"),u=R.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ul(r));let{pathname:c="/",search:h="",hash:p="",state:m=null,key:x="default"}=r,v=R.exports.useMemo(()=>{let _=Dw(c,a);return _==null?null:{location:{pathname:_,search:h,hash:p,state:m,key:x},navigationType:i}},[a,c,h,p,m,x,i]);return v==null?null:R.exports.createElement(Bl.Provider,{value:u},R.exports.createElement(Qp.Provider,{children:n,value:v}))}function t$(e){let{children:t,location:n}=e;return V5(pv(t),n)}var aE;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(aE||(aE={}));new Promise(()=>{});function pv(e,t){t===void 0&&(t=[]);let n=[];return R.exports.Children.forEach(e,(r,i)=>{if(!R.exports.isValidElement(r))return;let s=[...t,i];if(r.type===R.exports.Fragment){n.push.apply(n,pv(r.props.children,s));return}r.type!==ob&&Ft(!1),!r.props.index||!r.props.children||Ft(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pv(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mv(){return mv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mv.apply(this,arguments)}function n$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function r$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function i$(e,t){return e.button===0&&(!t||t==="_self")&&!r$(e)}const s$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function o$(e){let{basename:t,children:n,window:r}=e,i=R.exports.useRef();i.current==null&&(i.current=p5({window:r,v5Compat:!0}));let s=i.current,[o,a]=R.exports.useState({action:s.action,location:s.location});return R.exports.useLayoutEffect(()=>s.listen(a),[s]),R.exports.createElement(e$,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const a$=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",l$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nn=R.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h}=t,p=n$(t,s$),{basename:m}=R.exports.useContext(Bl),x,v=!1;if(typeof c=="string"&&l$.test(c)&&(x=c,a$))try{let y=new URL(window.location.href),C=c.startsWith("//")?new URL(y.protocol+c):new URL(c),T=Dw(C.pathname,m);C.origin===y.origin&&T!=null?c=T+C.search+C.hash:v=!0}catch{}let _=B5(c,{relative:i}),k=u$(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i});function S(y){r&&r(y),y.defaultPrevented||k(y)}return R.exports.createElement("a",mv({},p,{href:x||_,onClick:v||s?r:S,ref:n,target:u}))});var lE;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(lE||(lE={}));var uE;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uE||(uE={}));function u$(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=ur(),u=ld(),c=ib(e,{relative:o});return R.exports.useCallback(h=>{if(i$(h,n)){h.preventDefault();let p=r!==void 0?r:Vf(u)===Vf(c);a(e,{replace:p,state:i,preventScrollReset:s,relative:o})}},[u,a,c,r,i,n,e,s,o])}var bw={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=Symbol.for("react.element"),Aw=Symbol.for("react.portal"),Xp=Symbol.for("react.fragment"),Jp=Symbol.for("react.strict_mode"),Zp=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),c$=Symbol.for("react.server_context"),nm=Symbol.for("react.forward_ref"),rm=Symbol.for("react.suspense"),im=Symbol.for("react.suspense_list"),sm=Symbol.for("react.memo"),om=Symbol.for("react.lazy"),d$=Symbol.for("react.offscreen"),ab;ab=Symbol.for("react.module.reference");function Er(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Iw:switch(e=e.type,e){case Xp:case Zp:case Jp:case rm:case im:return e;default:switch(e=e&&e.$$typeof,e){case c$:case tm:case nm:case om:case sm:case em:return e;default:return t}}case Aw:return t}}}Qe.ContextConsumer=tm;Qe.ContextProvider=em;Qe.Element=Iw;Qe.ForwardRef=nm;Qe.Fragment=Xp;Qe.Lazy=om;Qe.Memo=sm;Qe.Portal=Aw;Qe.Profiler=Zp;Qe.StrictMode=Jp;Qe.Suspense=rm;Qe.SuspenseList=im;Qe.isAsyncMode=function(){return!1};Qe.isConcurrentMode=function(){return!1};Qe.isContextConsumer=function(e){return Er(e)===tm};Qe.isContextProvider=function(e){return Er(e)===em};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Iw};Qe.isForwardRef=function(e){return Er(e)===nm};Qe.isFragment=function(e){return Er(e)===Xp};Qe.isLazy=function(e){return Er(e)===om};Qe.isMemo=function(e){return Er(e)===sm};Qe.isPortal=function(e){return Er(e)===Aw};Qe.isProfiler=function(e){return Er(e)===Zp};Qe.isStrictMode=function(e){return Er(e)===Jp};Qe.isSuspense=function(e){return Er(e)===rm};Qe.isSuspenseList=function(e){return Er(e)===im};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xp||e===Zp||e===Jp||e===rm||e===im||e===d$||typeof e=="object"&&e!==null&&(e.$$typeof===om||e.$$typeof===sm||e.$$typeof===em||e.$$typeof===tm||e.$$typeof===nm||e.$$typeof===ab||e.getModuleId!==void 0)};Qe.typeOf=Er;bw.exports=Qe;function h$(e){function t(U,B,Y,z,D){for(var le=0,W=0,we=0,me=0,Be,_e,ne=0,De=0,Ee,dt=Ee=Be=0,Le=0,Bt=0,yo=0,vt=0,bt=Y.length,qt=bt-1,Dn,ye="",Ne="",iu="",us="",It;Le<bt;){if(_e=Y.charCodeAt(Le),Le===qt&&W+me+we+le!==0&&(W!==0&&(_e=W===47?10:47),me=we=le=0,bt++,qt++),W+me+we+le===0){if(Le===qt&&(0<Bt&&(ye=ye.replace(m,"")),0<ye.trim().length)){switch(_e){case 32:case 9:case 59:case 13:case 10:break;default:ye+=Y.charAt(Le)}_e=59}switch(_e){case 123:for(ye=ye.trim(),Be=ye.charCodeAt(0),Ee=1,vt=++Le;Le<bt;){switch(_e=Y.charCodeAt(Le)){case 123:Ee++;break;case 125:Ee--;break;case 47:switch(_e=Y.charCodeAt(Le+1)){case 42:case 47:e:{for(dt=Le+1;dt<qt;++dt)switch(Y.charCodeAt(dt)){case 47:if(_e===42&&Y.charCodeAt(dt-1)===42&&Le+2!==dt){Le=dt+1;break e}break;case 10:if(_e===47){Le=dt+1;break e}}Le=dt}}break;case 91:_e++;case 40:_e++;case 34:case 39:for(;Le++<qt&&Y.charCodeAt(Le)!==_e;);}if(Ee===0)break;Le++}switch(Ee=Y.substring(vt,Le),Be===0&&(Be=(ye=ye.replace(p,"").trim()).charCodeAt(0)),Be){case 64:switch(0<Bt&&(ye=ye.replace(m,"")),_e=ye.charCodeAt(1),_e){case 100:case 109:case 115:case 45:Bt=B;break;default:Bt=Te}if(Ee=t(B,Bt,Ee,_e,D+1),vt=Ee.length,0<$&&(Bt=n(Te,ye,yo),It=a(3,Ee,Bt,B,X,J,vt,_e,D,z),ye=Bt.join(""),It!==void 0&&(vt=(Ee=It.trim()).length)===0&&(_e=0,Ee="")),0<vt)switch(_e){case 115:ye=ye.replace(P,o);case 100:case 109:case 45:Ee=ye+"{"+Ee+"}";break;case 107:ye=ye.replace(y,"$1 $2"),Ee=ye+"{"+Ee+"}",Ee=oe===1||oe===2&&s("@"+Ee,3)?"@-webkit-"+Ee+"@"+Ee:"@"+Ee;break;default:Ee=ye+Ee,z===112&&(Ee=(Ne+=Ee,""))}else Ee="";break;default:Ee=t(B,n(B,ye,yo),Ee,z,D+1)}iu+=Ee,Ee=yo=Bt=dt=Be=0,ye="",_e=Y.charCodeAt(++Le);break;case 125:case 59:if(ye=(0<Bt?ye.replace(m,""):ye).trim(),1<(vt=ye.length))switch(dt===0&&(Be=ye.charCodeAt(0),Be===45||96<Be&&123>Be)&&(vt=(ye=ye.replace(" ",":")).length),0<$&&(It=a(1,ye,B,U,X,J,Ne.length,z,D,z))!==void 0&&(vt=(ye=It.trim()).length)===0&&(ye="\0\0"),Be=ye.charCodeAt(0),_e=ye.charCodeAt(1),Be){case 0:break;case 64:if(_e===105||_e===99){us+=ye+Y.charAt(Le);break}default:ye.charCodeAt(vt-1)!==58&&(Ne+=i(ye,Be,_e,ye.charCodeAt(2)))}yo=Bt=dt=Be=0,ye="",_e=Y.charCodeAt(++Le)}}switch(_e){case 13:case 10:W===47?W=0:1+Be===0&&z!==107&&0<ye.length&&(Bt=1,ye+="\0"),0<$*M&&a(0,ye,B,U,X,J,Ne.length,z,D,z),J=1,X++;break;case 59:case 125:if(W+me+we+le===0){J++;break}default:switch(J++,Dn=Y.charAt(Le),_e){case 9:case 32:if(me+le+W===0)switch(ne){case 44:case 58:case 9:case 32:Dn="";break;default:_e!==32&&(Dn=" ")}break;case 0:Dn="\\0";break;case 12:Dn="\\f";break;case 11:Dn="\\v";break;case 38:me+W+le===0&&(Bt=yo=1,Dn="\f"+Dn);break;case 108:if(me+W+le+ue===0&&0<dt)switch(Le-dt){case 2:ne===112&&Y.charCodeAt(Le-3)===58&&(ue=ne);case 8:De===111&&(ue=De)}break;case 58:me+W+le===0&&(dt=Le);break;case 44:W+we+me+le===0&&(Bt=1,Dn+="\r");break;case 34:case 39:W===0&&(me=me===_e?0:me===0?_e:me);break;case 91:me+W+we===0&&le++;break;case 93:me+W+we===0&&le--;break;case 41:me+W+le===0&&we--;break;case 40:if(me+W+le===0){if(Be===0)switch(2*ne+3*De){case 533:break;default:Be=1}we++}break;case 64:W+we+me+le+dt+Ee===0&&(Ee=1);break;case 42:case 47:if(!(0<me+le+we))switch(W){case 0:switch(2*_e+3*Y.charCodeAt(Le+1)){case 235:W=47;break;case 220:vt=Le,W=42}break;case 42:_e===47&&ne===42&&vt+2!==Le&&(Y.charCodeAt(vt+2)===33&&(Ne+=Y.substring(vt,Le+1)),Dn="",W=0)}}W===0&&(ye+=Dn)}De=ne,ne=_e,Le++}if(vt=Ne.length,0<vt){if(Bt=B,0<$&&(It=a(2,Ne,Bt,U,X,J,vt,z,D,z),It!==void 0&&(Ne=It).length===0))return us+Ne+iu;if(Ne=Bt.join(",")+"{"+Ne+"}",oe*ue!==0){switch(oe!==2||s(Ne,2)||(ue=0),ue){case 111:Ne=Ne.replace(T,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(C,"::-webkit-input-$1")+Ne.replace(C,"::-moz-$1")+Ne.replace(C,":-ms-input-$1")+Ne}ue=0}}return us+Ne+iu}function n(U,B,Y){var z=B.trim().split(k);B=z;var D=z.length,le=U.length;switch(le){case 0:case 1:var W=0;for(U=le===0?"":U[0]+" ";W<D;++W)B[W]=r(U,B[W],Y).trim();break;default:var we=W=0;for(B=[];W<D;++W)for(var me=0;me<le;++me)B[we++]=r(U[me]+" ",z[W],Y).trim()}return B}function r(U,B,Y){var z=B.charCodeAt(0);switch(33>z&&(z=(B=B.trim()).charCodeAt(0)),z){case 38:return B.replace(S,"$1"+U.trim());case 58:return U.trim()+B.replace(S,"$1"+U.trim());default:if(0<1*Y&&0<B.indexOf("\f"))return B.replace(S,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+B}function i(U,B,Y,z){var D=U+";",le=2*B+3*Y+4*z;if(le===944){U=D.indexOf(":",9)+1;var W=D.substring(U,D.length-1).trim();return W=D.substring(0,U).trim()+W+";",oe===1||oe===2&&s(W,1)?"-webkit-"+W+W:W}if(oe===0||oe===2&&!s(D,1))return D;switch(le){case 1015:return D.charCodeAt(10)===97?"-webkit-"+D+D:D;case 951:return D.charCodeAt(3)===116?"-webkit-"+D+D:D;case 963:return D.charCodeAt(5)===110?"-webkit-"+D+D:D;case 1009:if(D.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+D+D;case 978:return"-webkit-"+D+"-moz-"+D+D;case 1019:case 983:return"-webkit-"+D+"-moz-"+D+"-ms-"+D+D;case 883:if(D.charCodeAt(8)===45)return"-webkit-"+D+D;if(0<D.indexOf("image-set(",11))return D.replace(j,"$1-webkit-$2")+D;break;case 932:if(D.charCodeAt(4)===45)switch(D.charCodeAt(5)){case 103:return"-webkit-box-"+D.replace("-grow","")+"-webkit-"+D+"-ms-"+D.replace("grow","positive")+D;case 115:return"-webkit-"+D+"-ms-"+D.replace("shrink","negative")+D;case 98:return"-webkit-"+D+"-ms-"+D.replace("basis","preferred-size")+D}return"-webkit-"+D+"-ms-"+D+D;case 964:return"-webkit-"+D+"-ms-flex-"+D+D;case 1023:if(D.charCodeAt(8)!==99)break;return W=D.substring(D.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+D+"-ms-flex-pack"+W+D;case 1005:return v.test(D)?D.replace(x,":-webkit-")+D.replace(x,":-moz-")+D:D;case 1e3:switch(W=D.substring(13).trim(),B=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(B)){case 226:W=D.replace(I,"tb");break;case 232:W=D.replace(I,"tb-rl");break;case 220:W=D.replace(I,"lr");break;default:return D}return"-webkit-"+D+"-ms-"+W+D;case 1017:if(D.indexOf("sticky",9)===-1)break;case 975:switch(B=(D=U).length-10,W=(D.charCodeAt(B)===33?D.substring(0,B):D).substring(U.indexOf(":",7)+1).trim(),le=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:D=D.replace(W,"-webkit-"+W)+";"+D;break;case 207:case 102:D=D.replace(W,"-webkit-"+(102<le?"inline-":"")+"box")+";"+D.replace(W,"-webkit-"+W)+";"+D.replace(W,"-ms-"+W+"box")+";"+D}return D+";";case 938:if(D.charCodeAt(5)===45)switch(D.charCodeAt(6)){case 105:return W=D.replace("-items",""),"-webkit-"+D+"-webkit-box-"+W+"-ms-flex-"+W+D;case 115:return"-webkit-"+D+"-ms-flex-item-"+D.replace(O,"")+D;default:return"-webkit-"+D+"-ms-flex-line-pack"+D.replace("align-content","").replace(O,"")+D}break;case 973:case 989:if(D.charCodeAt(3)!==45||D.charCodeAt(4)===122)break;case 931:case 953:if(F.test(U)===!0)return(W=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),B,Y,z).replace(":fill-available",":stretch"):D.replace(W,"-webkit-"+W)+D.replace(W,"-moz-"+W.replace("fill-",""))+D;break;case 962:if(D="-webkit-"+D+(D.charCodeAt(5)===102?"-ms-"+D:"")+D,Y+z===211&&D.charCodeAt(13)===105&&0<D.indexOf("transform",10))return D.substring(0,D.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+D}return D}function s(U,B){var Y=U.indexOf(B===1?":":"{"),z=U.substring(0,B!==3?Y:10);return Y=U.substring(Y+1,U.length-1),V(B!==2?z:z.replace(Z,"$1"),Y,B)}function o(U,B){var Y=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return Y!==B+";"?Y.replace(A," or ($1)").substring(4):"("+B+")"}function a(U,B,Y,z,D,le,W,we,me,Be){for(var _e=0,ne=B,De;_e<$;++_e)switch(De=ge[_e].call(h,U,ne,Y,z,D,le,W,we,me,Be)){case void 0:case!1:case!0:case null:break;default:ne=De}if(ne!==B)return ne}function u(U){switch(U){case void 0:case null:$=ge.length=0;break;default:if(typeof U=="function")ge[$++]=U;else if(typeof U=="object")for(var B=0,Y=U.length;B<Y;++B)u(U[B]);else M=!!U|0}return u}function c(U){return U=U.prefix,U!==void 0&&(V=null,U?typeof U!="function"?oe=1:(oe=2,V=U):oe=0),c}function h(U,B){var Y=U;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),ee=Y,Y=[ee],0<$){var z=a(-1,B,Y,Y,X,J,0,0,0,0);z!==void 0&&typeof z=="string"&&(B=z)}var D=t(Te,Y,B,0,0);return 0<$&&(z=a(-2,D,Y,Y,X,J,D.length,0,0,0),z!==void 0&&(D=z)),ee="",ue=0,J=X=1,D}var p=/^\0+/g,m=/[\0\r\f]/g,x=/: */g,v=/zoo|gra/,_=/([,: ])(transform)/g,k=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,T=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,O=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,J=1,X=1,ue=0,oe=1,Te=[],ge=[],$=0,V=null,M=0,ee="";return h.use=u,h.set=c,e!==void 0&&c(e),h}var f$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function p$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var m$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,cE=p$(function(e){return m$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),lb={exports:{}},Xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var en=typeof Symbol=="function"&&Symbol.for,Nw=en?Symbol.for("react.element"):60103,Ow=en?Symbol.for("react.portal"):60106,am=en?Symbol.for("react.fragment"):60107,lm=en?Symbol.for("react.strict_mode"):60108,um=en?Symbol.for("react.profiler"):60114,cm=en?Symbol.for("react.provider"):60109,dm=en?Symbol.for("react.context"):60110,Rw=en?Symbol.for("react.async_mode"):60111,hm=en?Symbol.for("react.concurrent_mode"):60111,fm=en?Symbol.for("react.forward_ref"):60112,pm=en?Symbol.for("react.suspense"):60113,g$=en?Symbol.for("react.suspense_list"):60120,mm=en?Symbol.for("react.memo"):60115,gm=en?Symbol.for("react.lazy"):60116,y$=en?Symbol.for("react.block"):60121,v$=en?Symbol.for("react.fundamental"):60117,w$=en?Symbol.for("react.responder"):60118,_$=en?Symbol.for("react.scope"):60119;function cr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nw:switch(e=e.type,e){case Rw:case hm:case am:case um:case lm:case pm:return e;default:switch(e=e&&e.$$typeof,e){case dm:case fm:case gm:case mm:case cm:return e;default:return t}}case Ow:return t}}}function ub(e){return cr(e)===hm}Xe.AsyncMode=Rw;Xe.ConcurrentMode=hm;Xe.ContextConsumer=dm;Xe.ContextProvider=cm;Xe.Element=Nw;Xe.ForwardRef=fm;Xe.Fragment=am;Xe.Lazy=gm;Xe.Memo=mm;Xe.Portal=Ow;Xe.Profiler=um;Xe.StrictMode=lm;Xe.Suspense=pm;Xe.isAsyncMode=function(e){return ub(e)||cr(e)===Rw};Xe.isConcurrentMode=ub;Xe.isContextConsumer=function(e){return cr(e)===dm};Xe.isContextProvider=function(e){return cr(e)===cm};Xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nw};Xe.isForwardRef=function(e){return cr(e)===fm};Xe.isFragment=function(e){return cr(e)===am};Xe.isLazy=function(e){return cr(e)===gm};Xe.isMemo=function(e){return cr(e)===mm};Xe.isPortal=function(e){return cr(e)===Ow};Xe.isProfiler=function(e){return cr(e)===um};Xe.isStrictMode=function(e){return cr(e)===lm};Xe.isSuspense=function(e){return cr(e)===pm};Xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===am||e===hm||e===um||e===lm||e===pm||e===g$||typeof e=="object"&&e!==null&&(e.$$typeof===gm||e.$$typeof===mm||e.$$typeof===cm||e.$$typeof===dm||e.$$typeof===fm||e.$$typeof===v$||e.$$typeof===w$||e.$$typeof===_$||e.$$typeof===y$)};Xe.typeOf=cr;lb.exports=Xe;var Pw=lb.exports,x$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mw={};Mw[Pw.ForwardRef]=C$;Mw[Pw.Memo]=cb;function dE(e){return Pw.isMemo(e)?cb:Mw[e.$$typeof]||x$}var E$=Object.defineProperty,k$=Object.getOwnPropertyNames,hE=Object.getOwnPropertySymbols,T$=Object.getOwnPropertyDescriptor,D$=Object.getPrototypeOf,fE=Object.prototype;function db(e,t,n){if(typeof t!="string"){if(fE){var r=D$(t);r&&r!==fE&&db(e,r,n)}var i=k$(t);hE&&(i=i.concat(hE(t)));for(var s=dE(e),o=dE(t),a=0;a<i.length;++a){var u=i[a];if(!S$[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=T$(t,u);try{E$(e,u,c)}catch{}}}}return e}var b$=db;function Jr(){return(Jr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var pE=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},gv=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!bw.exports.typeOf(e)},Yf=Object.freeze([]),Bs=Object.freeze({});function kc(e){return typeof e=="function"}function mE(e){return e.displayName||e.name||"Component"}function Lw(e){return e&&typeof e.styledComponentId=="string"}var Sl=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",$w=typeof window!="undefined"&&"HTMLElement"in window,I$=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),A$={};function ud(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var N$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ud(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,h=r.length;c<h;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),ef=new Map,Wf=new Map,qu=1,kh=function(e){if(ef.has(e))return ef.get(e);for(;Wf.has(qu);)qu++;var t=qu++;return ef.set(e,t),Wf.set(t,e),t},O$=function(e){return Wf.get(e)},R$=function(e,t){t>=qu&&(qu=t+1),ef.set(e,t),Wf.set(t,e)},P$="style["+Sl+'][data-styled-version="5.3.10"]',M$=new RegExp("^"+Sl+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L$=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},$$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(M$);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(R$(c,u),L$(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},F$=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},hb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var h=u[c];if(h&&h.nodeType===1&&h.hasAttribute(Sl))return h}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Sl,"active"),r.setAttribute("data-styled-version","5.3.10");var o=F$();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},U$=function(){function e(n){var r=this.element=hb(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}ud(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),B$=function(){function e(n){var r=this.element=hb(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),z$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),gE=$w,V$={isServer:!$w,useCSSOMInjection:!I$},Hf=function(){function e(n,r,i){n===void 0&&(n=Bs),r===void 0&&(r={}),this.options=Jr({},V$,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&$w&&gE&&(gE=!1,function(s){for(var o=document.querySelectorAll(P$),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(Sl)!=="active"&&($$(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return kh(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Jr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new z$(o):s?new U$(o):new B$(o),new N$(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(kh(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(kh(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(kh(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=O$(o);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(o);if(u&&c&&u.size){var h=Sl+".g"+o+'[id="'+a+'"]',p="";u!==void 0&&u.forEach(function(m){m.length>0&&(p+=m+",")}),s+=""+c+h+'{content:"'+p+`"}/*!sc*/
`}}}return s}(this)},e}(),j$=/(a)(d)/gi,yE=function(e){return String.fromCharCode(e+(e>25?39:97))};function yv(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yE(t%52)+n;return(yE(t%52)+n).replace(j$,"$1-$2")}var Ha=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fb=function(e){return Ha(5381,e)};function pb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kc(n)&&!Lw(n))return!1}return!0}var Y$=fb("5.3.10"),W$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pb(t),this.componentId=n,this.baseHash=Ha(Y$,n),this.baseStyle=r,Hf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Go(this.rules,t,n,r).join(""),a=yv(Ha(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,h=Ha(this.baseHash,r.hash),p="",m=0;m<c;m++){var x=this.rules[m];if(typeof x=="string")p+=x;else if(x){var v=Go(x,t,n,r),_=Array.isArray(v)?v.join(""):v;h=Ha(h,_+m),p+=_}}if(p){var k=yv(h>>>0);if(!n.hasNameForId(i,k)){var S=r(p,"."+k,void 0,i);n.insertRules(i,k,S)}s.push(k)}}return s.join(" ")},e}(),H$=/^\s*\/\/.*$/gm,G$=[":","[",".","#"];function q$(e){var t,n,r,i,s=e===void 0?Bs:e,o=s.options,a=o===void 0?Bs:o,u=s.plugins,c=u===void 0?Yf:u,h=new h$(a),p=[],m=function(_){function k(S){if(S)try{_(S+"}")}catch{}}return function(S,y,C,T,I,P,A,O,Z,F){switch(S){case 1:if(Z===0&&y.charCodeAt(0)===64)return _(y+";"),"";break;case 2:if(O===0)return y+"/*|*/";break;case 3:switch(O){case 102:case 112:return _(C[0]+y),"";default:return y+(F===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(k)}}}(function(_){p.push(_)}),x=function(_,k,S){return k===0&&G$.indexOf(S[n.length])!==-1||S.match(i)?_:"."+t};function v(_,k,S,y){y===void 0&&(y="&");var C=_.replace(H$,""),T=k&&S?S+" "+k+" { "+C+" }":C;return t=y,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(S||!k?"":k,T)}return h.use([].concat(c,[function(_,k,S){_===2&&S.length&&S[0].lastIndexOf(n)>0&&(S[0]=S[0].replace(r,x))},m,function(_){if(_===-2){var k=p;return p=[],k}}])),v.hash=c.length?c.reduce(function(_,k){return k.name||ud(15),Ha(_,k.name)},5381).toString():"",v}var mb=Xt.createContext();mb.Consumer;var gb=Xt.createContext(),K$=(gb.Consumer,new Hf),vv=q$();function yb(){return R.exports.useContext(mb)||K$}function vb(){return R.exports.useContext(gb)||vv}var wb=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=vv);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ud(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=vv),this.name+t.hash},e}(),Q$=/([A-Z])/,X$=/([A-Z])/g,J$=/^ms-/,Z$=function(e){return"-"+e.toLowerCase()};function vE(e){return Q$.test(e)?e.replace(X$,Z$).replace(J$,"-ms-"):e}var wE=function(e){return e==null||e===!1||e===""};function Go(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Go(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(wE(e))return"";if(Lw(e))return"."+e.styledComponentId;if(kc(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return Go(u,t,n,r)}var c;return e instanceof wb?n?(e.inject(n,r),e.getName(r)):e:gv(e)?function h(p,m){var x,v,_=[];for(var k in p)p.hasOwnProperty(k)&&!wE(p[k])&&(Array.isArray(p[k])&&p[k].isCss||kc(p[k])?_.push(vE(k)+":",p[k],";"):gv(p[k])?_.push.apply(_,h(p[k],k)):_.push(vE(k)+": "+(x=k,(v=p[k])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||x in f$||x.startsWith("--")?String(v).trim():v+"px")+";"));return m?[m+" {"].concat(_,["}"]):_}(e):e.toString()}var _E=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Vl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return kc(e)||gv(e)?_E(Go(pE(Yf,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:_E(Go(pE(e,n)))}var _b=function(e,t,n){return n===void 0&&(n=Bs),e.theme!==n.theme&&e.theme||t||n.theme},e8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,t8=/(^-|-$)/g;function I0(e){return e.replace(e8,"-").replace(t8,"")}var Fw=function(e){return yv(fb(e)>>>0)};function Th(e){return typeof e=="string"&&!0}var wv=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},n8=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function r8(e,t,n){var r=e[n];wv(t)&&wv(r)?xb(r,t):e[n]=t}function xb(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(wv(o))for(var a in o)n8(a)&&r8(e,o[a],a)}return e}var Uw=Xt.createContext();Uw.Consumer;var A0={};function Sb(e,t,n){var r=Lw(e),i=!Th(e),s=t.attrs,o=s===void 0?Yf:s,a=t.componentId,u=a===void 0?function(y,C){var T=typeof y!="string"?"sc":I0(y);A0[T]=(A0[T]||0)+1;var I=T+"-"+Fw("5.3.10"+T+A0[T]);return C?C+"-"+I:I}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(y){return Th(y)?"styled."+y:"Styled("+mE(y)+")"}(e):c,p=t.displayName&&t.componentId?I0(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(y,C,T){return e.shouldForwardProp(y,C,T)&&t.shouldForwardProp(y,C,T)}:e.shouldForwardProp);var v,_=new W$(n,p,r?e.componentStyle:void 0),k=_.isStatic&&o.length===0,S=function(y,C){return function(T,I,P,A){var O=T.attrs,Z=T.componentStyle,F=T.defaultProps,j=T.foldedComponentIds,J=T.shouldForwardProp,X=T.styledComponentId,ue=T.target,oe=function(z,D,le){z===void 0&&(z=Bs);var W=Jr({},D,{theme:z}),we={};return le.forEach(function(me){var Be,_e,ne,De=me;for(Be in kc(De)&&(De=De(W)),De)W[Be]=we[Be]=Be==="className"?(_e=we[Be],ne=De[Be],_e&&ne?_e+" "+ne:_e||ne):De[Be]}),[W,we]}(_b(I,R.exports.useContext(Uw),F)||Bs,I,O),Te=oe[0],ge=oe[1],$=function(z,D,le,W){var we=yb(),me=vb(),Be=D?z.generateAndInjectStyles(Bs,we,me):z.generateAndInjectStyles(le,we,me);return Be}(Z,A,Te),V=P,M=ge.$as||I.$as||ge.as||I.as||ue,ee=Th(M),U=ge!==I?Jr({},I,{},ge):I,B={};for(var Y in U)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?B.as=U[Y]:(J?J(Y,cE,M):!ee||cE(Y))&&(B[Y]=U[Y]));return I.style&&ge.style!==I.style&&(B.style=Jr({},I.style,{},ge.style)),B.className=Array.prototype.concat(j,X,$!==X?$:null,I.className,ge.className).filter(Boolean).join(" "),B.ref=V,R.exports.createElement(M,B)}(v,y,C,k)};return S.displayName=h,(v=Xt.forwardRef(S)).attrs=m,v.componentStyle=_,v.displayName=h,v.shouldForwardProp=x,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Yf,v.styledComponentId=p,v.target=r?e.target:e,v.withComponent=function(y){var C=t.componentId,T=function(P,A){if(P==null)return{};var O,Z,F={},j=Object.keys(P);for(Z=0;Z<j.length;Z++)O=j[Z],A.indexOf(O)>=0||(F[O]=P[O]);return F}(t,["componentId"]),I=C&&C+"-"+(Th(y)?y:I0(mE(y)));return Sb(y,Jr({},T,{attrs:m,componentId:I}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?xb({},e.defaultProps,y):y}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&b$(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var _v=function(e){return function t(n,r,i){if(i===void 0&&(i=Bs),!bw.exports.isValidElementType(r))return ud(1,String(r));var s=function(){return n(r,i,Vl.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Jr({},i,{},o))},s.attrs=function(o){return t(n,r,Jr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Sb,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){_v[e]=_v(e)});var i8=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=pb(n),Hf.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Go(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&Hf.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function s8(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Vl.apply(void 0,[e].concat(n)),s="sc-global-"+Fw(JSON.stringify(i)),o=new i8(i,s);function a(c){var h=yb(),p=vb(),m=R.exports.useContext(Uw),x=R.exports.useRef(h.allocateGSInstance(s)).current;return h.server&&u(x,c,h,m,p),R.exports.useLayoutEffect(function(){if(!h.server)return u(x,c,h,m,p),function(){return o.removeStyles(x,h)}},[x,c,h,m,p]),null}function u(c,h,p,m,x){if(o.isStatic)o.renderStyles(c,A$,p,x);else{var v=Jr({},h,{theme:_b(h,m,a.defaultProps)});o.renderStyles(c,v,p,x)}}return Xt.memo(a)}function o8(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Vl.apply(void 0,[e].concat(n)).join(""),s=Fw(i);return new wb(s,i)}var Ge=_v;const a8=s8`
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
`,l8=Ge.div`
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
`,u8=Ge.header`
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
`;var Cb={exports:{}},Eb={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=R.exports;function c8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var d8=typeof Object.is=="function"?Object.is:c8,h8=Cl.useState,f8=Cl.useEffect,p8=Cl.useLayoutEffect,m8=Cl.useDebugValue;function g8(e,t){var n=t(),r=h8({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return p8(function(){i.value=n,i.getSnapshot=t,N0(i)&&s({inst:i})},[e,n,t]),f8(function(){return N0(i)&&s({inst:i}),e(function(){N0(i)&&s({inst:i})})},[e]),m8(n),n}function N0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!d8(e,n)}catch{return!0}}function y8(e,t){return t()}var v8=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?y8:g8;Eb.useSyncExternalStore=Cl.useSyncExternalStore!==void 0?Cl.useSyncExternalStore:v8;Cb.exports=Eb;var kb={exports:{}},Tb={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=R.exports,w8=Cb.exports;function _8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var x8=typeof Object.is=="function"?Object.is:_8,S8=w8.useSyncExternalStore,C8=ym.useRef,E8=ym.useEffect,k8=ym.useMemo,T8=ym.useDebugValue;Tb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=C8(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=k8(function(){function u(x){if(!c){if(c=!0,h=x,x=r(x),i!==void 0&&o.hasValue){var v=o.value;if(i(v,x))return p=v}return p=x}if(v=p,x8(h,x))return v;var _=r(x);return i!==void 0&&i(v,_)?v:(h=x,p=_)}var c=!1,h,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var a=S8(e,s[0],s[1]);return E8(function(){o.hasValue=!0,o.value=a},[a]),T8(a),a};kb.exports=Tb;function D8(e){e()}let Db=D8;const b8=e=>Db=e,I8=()=>Db,Qs=R.exports.createContext(null);function bb(){return R.exports.useContext(Qs)}const A8=()=>{throw new Error("uSES not initialized!")};let Ib=A8;const N8=e=>{Ib=e},O8=(e,t)=>e===t;function R8(e=Qs){const t=e===Qs?bb:()=>R.exports.useContext(e);return function(r,i=O8){const{store:s,subscription:o,getServerState:a}=t(),u=Ib(o.addNestedSub,s.getState,a||s.getState,r,i);return R.exports.useDebugValue(u),u}}const rt=R8();function P8(){const e=I8();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const xE={notify(){},get:()=>[]};function M8(e,t){let n,r=xE;function i(p){return u(),r.subscribe(p)}function s(){r.notify()}function o(){h.onStateChange&&h.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=P8())}function c(){n&&(n(),n=void 0,r.clear(),r=xE)}const h={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>r};return h}const L8=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",$8=L8?R.exports.useLayoutEffect:R.exports.useEffect;var vm={exports:{}},wm={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F8=R.exports,U8=Symbol.for("react.element"),B8=Symbol.for("react.fragment"),z8=Object.prototype.hasOwnProperty,V8=F8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j8={key:!0,ref:!0,__self:!0,__source:!0};function Ab(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)z8.call(t,r)&&!j8.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:U8,type:e,key:s,ref:o,props:i,_owner:V8.current}}wm.Fragment=B8;wm.jsx=Ab;wm.jsxs=Ab;vm.exports=wm;const w=vm.exports.jsx,N=vm.exports.jsxs,xv=vm.exports.Fragment;function Y8({store:e,context:t,children:n,serverState:r}){const i=R.exports.useMemo(()=>{const a=M8(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),s=R.exports.useMemo(()=>e.getState(),[e]);return $8(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),w((t||Qs).Provider,{value:i,children:n})}function Nb(e=Qs){const t=e===Qs?bb:()=>R.exports.useContext(e);return function(){const{store:r}=t();return r}}const W8=Nb();function H8(e=Qs){const t=e===Qs?W8:Nb(e);return function(){return t().dispatch}}const Gt=H8();N8(kb.exports.useSyncExternalStoreWithSelector);b8(M1.exports.unstable_batchedUpdates);function Pr(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Xs(e){return!!e&&!!e[pt]}function Qi(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===tF}(e)||Array.isArray(e)||!!e[bE]||!!(!((t=e.constructor)===null||t===void 0)&&t[bE])||Bw(e)||zw(e))}function qo(e,t,n){n===void 0&&(n=!1),jl(e)===0?(n?Object.keys:rl)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function jl(e){var t=e[pt];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Bw(e)?2:zw(e)?3:0}function nl(e,t){return jl(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function G8(e,t){return jl(e)===2?e.get(t):e[t]}function Ob(e,t,n){var r=jl(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Rb(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Bw(e){return Z8&&e instanceof Map}function zw(e){return eF&&e instanceof Set}function ko(e){return e.o||e.t}function Vw(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Mb(e);delete t[pt];for(var n=rl(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function jw(e,t){return t===void 0&&(t=!1),Yw(e)||Xs(e)||!Qi(e)||(jl(e)>1&&(e.set=e.add=e.clear=e.delete=q8),Object.freeze(e),t&&qo(e,function(n,r){return jw(r,!0)},!0)),e}function q8(){Pr(2)}function Yw(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ri(e){var t=kv[e];return t||Pr(18,e),t}function K8(e,t){kv[e]||(kv[e]=t)}function Sv(){return Tc}function O0(e,t){t&&(ri("Patches"),e.u=[],e.s=[],e.v=t)}function Gf(e){Cv(e),e.p.forEach(Q8),e.p=null}function Cv(e){e===Tc&&(Tc=e.l)}function SE(e){return Tc={p:[],l:Tc,h:e,m:!0,_:0}}function Q8(e){var t=e[pt];t.i===0||t.i===1?t.j():t.g=!0}function R0(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ri("ES5").S(t,e,r),r?(n[pt].P&&(Gf(t),Pr(4)),Qi(e)&&(e=qf(t,e),t.l||Kf(t,e)),t.u&&ri("Patches").M(n[pt].t,e,t.u,t.s)):e=qf(t,n,[]),Gf(t),t.u&&t.v(t.u,t.s),e!==Pb?e:void 0}function qf(e,t,n){if(Yw(t))return t;var r=t[pt];if(!r)return qo(t,function(a,u){return CE(e,r,t,a,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Kf(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Vw(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),qo(s,function(a,u){return CE(e,r,i,a,u,n,o)}),Kf(e,i,!1),n&&e.u&&ri("Patches").N(r,n,e.u,e.s)}return r.o}function CE(e,t,n,r,i,s,o){if(Xs(i)){var a=qf(e,i,s&&t&&t.i!==3&&!nl(t.R,r)?s.concat(r):void 0);if(Ob(n,r,a),!Xs(a))return;e.m=!1}else o&&n.add(i);if(Qi(i)&&!Yw(i)){if(!e.h.D&&e._<1)return;qf(e,i),t&&t.A.l||Kf(e,i)}}function Kf(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&jw(t,n)}function P0(e,t){var n=e[pt];return(n?ko(n):e)[t]}function EE(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function ws(e){e.P||(e.P=!0,e.l&&ws(e.l))}function M0(e){e.o||(e.o=Vw(e.t))}function Ev(e,t,n){var r=Bw(t)?ri("MapSet").F(t,n):zw(t)?ri("MapSet").T(t,n):e.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Sv(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,c=Dc;o&&(u=[a],c=Nu);var h=Proxy.revocable(u,c),p=h.revoke,m=h.proxy;return a.k=m,a.j=p,m}(t,n):ri("ES5").J(t,n);return(n?n.A:Sv()).p.push(r),r}function X8(e){return Xs(e)||Pr(22,e),function t(n){if(!Qi(n))return n;var r,i=n[pt],s=jl(n);if(i){if(!i.P&&(i.i<4||!ri("ES5").K(i)))return i.t;i.I=!0,r=kE(n,s),i.I=!1}else r=kE(n,s);return qo(r,function(o,a){i&&G8(i.t,o)===a||Ob(r,o,t(a))}),s===3?new Set(r):r}(e)}function kE(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Vw(e)}function J8(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[pt];return Dc.get(u,s)},set:function(u){var c=this[pt];Dc.set(c,s,u)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][pt];if(!a.P)switch(a.i){case 5:r(a)&&ws(a);break;case 4:n(a)&&ws(a)}}}function n(s){for(var o=s.t,a=s.k,u=rl(a),c=u.length-1;c>=0;c--){var h=u[c];if(h!==pt){var p=o[h];if(p===void 0&&!nl(o,h))return!0;var m=a[h],x=m&&m[pt];if(x?x.t!==p:!Rb(m,p))return!0}}var v=!!o[pt];return u.length!==rl(o).length+(v?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};K8("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(h,p){if(h){for(var m=Array(p.length),x=0;x<p.length;x++)Object.defineProperty(m,""+x,e(x,!0));return m}var v=Mb(p);delete v[pt];for(var _=rl(v),k=0;k<_.length;k++){var S=_[k];v[S]=e(S,h||!!v[S].enumerable)}return Object.create(Object.getPrototypeOf(p),v)}(a,s),c={i:a?5:4,A:o?o.A:Sv(),P:!1,I:!1,R:{},l:o,t:s,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,pt,{value:c,writable:!0}),u},S:function(s,o,a){a?Xs(o)&&o[pt].A===s&&t(s.p):(s.u&&function u(c){if(c&&typeof c=="object"){var h=c[pt];if(h){var p=h.t,m=h.k,x=h.R,v=h.i;if(v===4)qo(m,function(C){C!==pt&&(p[C]!==void 0||nl(p,C)?x[C]||u(m[C]):(x[C]=!0,ws(h)))}),qo(p,function(C){m[C]!==void 0||nl(m,C)||(x[C]=!1,ws(h))});else if(v===5){if(r(h)&&(ws(h),x.length=!0),m.length<p.length)for(var _=m.length;_<p.length;_++)x[_]=!1;else for(var k=p.length;k<m.length;k++)x[k]=!0;for(var S=Math.min(m.length,p.length),y=0;y<S;y++)m.hasOwnProperty(y)||(x[y]=!0),x[y]===void 0&&u(m[y])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var TE,Tc,Ww=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Z8=typeof Map!="undefined",eF=typeof Set!="undefined",DE=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Pb=Ww?Symbol.for("immer-nothing"):((TE={})["immer-nothing"]=!0,TE),bE=Ww?Symbol.for("immer-draftable"):"__$immer_draftable",pt=Ww?Symbol.for("immer-state"):"__$immer_state",tF=""+Object.prototype.constructor,rl=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Mb=Object.getOwnPropertyDescriptors||function(e){var t={};return rl(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},kv={},Dc={get:function(e,t){if(t===pt)return e;var n=ko(e);if(!nl(n,t))return function(i,s,o){var a,u=EE(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Qi(r)?r:r===P0(e.t,t)?(M0(e),e.o[t]=Ev(e.A.h,r,e)):r},has:function(e,t){return t in ko(e)},ownKeys:function(e){return Reflect.ownKeys(ko(e))},set:function(e,t,n){var r=EE(ko(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=P0(ko(e),t),s=i==null?void 0:i[pt];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Rb(n,i)&&(n!==void 0||nl(e.t,t)))return!0;M0(e),ws(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return P0(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,M0(e),ws(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ko(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Pr(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Pr(12)}},Nu={};qo(Dc,function(e,t){Nu[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Nu.deleteProperty=function(e,t){return Nu.set.call(this,e,t,void 0)},Nu.set=function(e,t,n){return Dc.set.call(this,e[0],t,n,e[0])};var nF=function(){function e(n){var r=this;this.O=DE,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(_){var k=this;_===void 0&&(_=a);for(var S=arguments.length,y=Array(S>1?S-1:0),C=1;C<S;C++)y[C-1]=arguments[C];return u.produce(_,function(T){var I;return(I=s).call.apply(I,[k,T].concat(y))})}}var c;if(typeof s!="function"&&Pr(6),o!==void 0&&typeof o!="function"&&Pr(7),Qi(i)){var h=SE(r),p=Ev(r,i,void 0),m=!0;try{c=s(p),m=!1}finally{m?Gf(h):Cv(h)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(_){return O0(h,o),R0(_,h)},function(_){throw Gf(h),_}):(O0(h,o),R0(c,h))}if(!i||typeof i!="object"){if((c=s(i))===void 0&&(c=i),c===Pb&&(c=void 0),r.D&&jw(c,!0),o){var x=[],v=[];ri("Patches").M(i,c,x,v),o(x,v)}return c}Pr(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(c){for(var h=arguments.length,p=Array(h>1?h-1:0),m=1;m<h;m++)p[m-1]=arguments[m];return r.produceWithPatches(c,function(x){return i.apply(void 0,[x].concat(p))})};var o,a,u=r.produce(i,s,function(c,h){o=c,a=h});return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(c){return[c,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Qi(n)||Pr(8),Xs(n)&&(n=X8(n));var r=SE(this),i=Ev(this,n,void 0);return i[pt].C=!0,Cv(r),i},t.finishDraft=function(n,r){var i=n&&n[pt],s=i.A;return O0(s,r),R0(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!DE&&Pr(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=ri("Patches").$;return Xs(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),sr=new nF,Lb=sr.produce;sr.produceWithPatches.bind(sr);sr.setAutoFreeze.bind(sr);sr.setUseProxies.bind(sr);sr.applyPatches.bind(sr);sr.createDraft.bind(sr);sr.finishDraft.bind(sr);function bc(e){return bc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bc(e)}function rF(e,t){if(bc(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(bc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function iF(e){var t=rF(e,"string");return bc(t)==="symbol"?t:String(t)}function sF(e,t,n){return t=iF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function AE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?IE(Object(n),!0).forEach(function(r){sF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):IE(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fn(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var NE=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),L0=function(){return Math.random().toString(36).substring(7).split("").join(".")},Qf={INIT:"@@redux/INIT"+L0(),REPLACE:"@@redux/REPLACE"+L0(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+L0()}};function oF(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function $b(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(fn(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(fn(1));return n($b)(e,t)}if(typeof e!="function")throw new Error(fn(2));var i=e,s=t,o=[],a=o,u=!1;function c(){a===o&&(a=o.slice())}function h(){if(u)throw new Error(fn(3));return s}function p(_){if(typeof _!="function")throw new Error(fn(4));if(u)throw new Error(fn(5));var k=!0;return c(),a.push(_),function(){if(!!k){if(u)throw new Error(fn(6));k=!1,c();var y=a.indexOf(_);a.splice(y,1),o=null}}}function m(_){if(!oF(_))throw new Error(fn(7));if(typeof _.type=="undefined")throw new Error(fn(8));if(u)throw new Error(fn(9));try{u=!0,s=i(s,_)}finally{u=!1}for(var k=o=a,S=0;S<k.length;S++){var y=k[S];y()}return _}function x(_){if(typeof _!="function")throw new Error(fn(10));i=_,m({type:Qf.REPLACE})}function v(){var _,k=p;return _={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(fn(11));function C(){y.next&&y.next(h())}C();var T=k(C);return{unsubscribe:T}}},_[NE]=function(){return this},_}return m({type:Qf.INIT}),r={dispatch:m,subscribe:p,getState:h,replaceReducer:x},r[NE]=v,r}function aF(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Qf.INIT});if(typeof r=="undefined")throw new Error(fn(12));if(typeof n(void 0,{type:Qf.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(fn(13))})}function lF(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{aF(n)}catch(a){o=a}return function(u,c){if(u===void 0&&(u={}),o)throw o;for(var h=!1,p={},m=0;m<s.length;m++){var x=s[m],v=n[x],_=u[x],k=v(_,c);if(typeof k=="undefined")throw c&&c.type,new Error(fn(14));p[x]=k,h=h||k!==_}return h=h||s.length!==Object.keys(u).length,h?p:u}}function Xf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function uF(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(fn(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(u){return u(o)});return s=Xf.apply(void 0,a)(i.dispatch),AE(AE({},i),{},{dispatch:s})}}}function Fb(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var Ub=Fb();Ub.withExtraArgument=Fb;var OE=Ub,Bb=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),cF=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(h){return u([c,h])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(h){c=[6,h],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},El=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},dF=Object.defineProperty,hF=Object.defineProperties,fF=Object.getOwnPropertyDescriptors,RE=Object.getOwnPropertySymbols,pF=Object.prototype.hasOwnProperty,mF=Object.prototype.propertyIsEnumerable,PE=function(e,t,n){return t in e?dF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},zs=function(e,t){for(var n in t||(t={}))pF.call(t,n)&&PE(e,n,t[n]);if(RE)for(var r=0,i=RE(t);r<i.length;r++){var n=i[r];mF.call(t,n)&&PE(e,n,t[n])}return e},$0=function(e,t){return hF(e,fF(t))},gF=function(e,t,n){return new Promise(function(r,i){var s=function(u){try{a(n.next(u))}catch(c){i(c)}},o=function(u){try{a(n.throw(u))}catch(c){i(c)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(s,o)};a((n=n.apply(e,t)).next())})},yF=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Xf:Xf.apply(null,arguments)};function vF(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var wF=function(e){Bb(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,El([void 0],n[0].concat(this)))):new(t.bind.apply(t,El([void 0],n.concat(this))))},t}(Array),_F=function(e){Bb(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,El([void 0],n[0].concat(this)))):new(t.bind.apply(t,El([void 0],n.concat(this))))},t}(Array);function Tv(e){return Qi(e)?Lb(e,function(){}):e}function xF(e){return typeof e=="boolean"}function SF(){return function(t){return CF(t)}}function CF(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new wF;return n&&(xF(n)?r.push(OE):r.push(OE.withExtraArgument(n.extraArgument))),r}var EF=!0;function kF(e){var t=SF(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,u=a===void 0?!0:a,c=n.preloadedState,h=c===void 0?void 0:c,p=n.enhancers,m=p===void 0?void 0:p,x;if(typeof i=="function")x=i;else if(vF(i))x=lF(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=o;typeof v=="function"&&(v=v(t));var _=uF.apply(void 0,v),k=Xf;u&&(k=yF(zs({trace:!EF},typeof u=="object"&&u)));var S=new _F(_),y=S;Array.isArray(m)?y=El([_],m):typeof m=="function"&&(y=m(S));var C=k.apply(void 0,y);return $b(x,h,C)}function Vs(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return zs(zs({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function zb(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function TF(e){return typeof e=="function"}function DF(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?zb(t):[t,n,r],s=i[0],o=i[1],a=i[2],u;if(TF(e))u=function(){return Tv(e())};else{var c=Tv(e);u=function(){return c}}function h(p,m){p===void 0&&(p=u());var x=El([s[m.type]],o.filter(function(v){var _=v.matcher;return _(m)}).map(function(v){var _=v.reducer;return _}));return x.filter(function(v){return!!v}).length===0&&(x=[a]),x.reduce(function(v,_){if(_)if(Xs(v)){var k=v,S=_(k,m);return S===void 0?v:S}else{if(Qi(v))return Lb(v,function(y){return _(y,m)});var S=_(v,m);if(S===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return S}return v},p)}return h.getInitialState=u,h}function bF(e,t){return e+"/"+t}function aa(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:Tv(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(h){var p=r[h],m=bF(t,h),x,v;"reducer"in p?(x=p.reducer,v=p.prepare):x=p,s[h]=x,o[m]=x,a[h]=v?Vs(m,v):Vs(m)});function u(){var h=typeof e.extraReducers=="function"?zb(e.extraReducers):[e.extraReducers],p=h[0],m=p===void 0?{}:p,x=h[1],v=x===void 0?[]:x,_=h[2],k=_===void 0?void 0:_,S=zs(zs({},m),o);return DF(n,function(y){for(var C in S)y.addCase(C,S[C]);for(var T=0,I=v;T<I.length;T++){var P=I[T];y.addMatcher(P.matcher,P.reducer)}k&&y.addDefaultCase(k)})}var c;return{name:t,reducer:function(h,p){return c||(c=u()),c(h,p)},actions:a,caseReducers:s,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var IF="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",AF=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=IF[Math.random()*64|0];return t},NF=["name","message","stack","code"],F0=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),ME=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),OF=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=NF;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Gn=function(){function e(t,n,r){var i=Vs(t+"/fulfilled",function(c,h,p,m){return{payload:c,meta:$0(zs({},m||{}),{arg:p,requestId:h,requestStatus:"fulfilled"})}}),s=Vs(t+"/pending",function(c,h,p){return{payload:void 0,meta:$0(zs({},p||{}),{arg:h,requestId:c,requestStatus:"pending"})}}),o=Vs(t+"/rejected",function(c,h,p,m,x){return{payload:m,error:(r&&r.serializeError||OF)(c||"Rejected"),meta:$0(zs({},x||{}),{arg:p,requestId:h,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(h,p,m){var x=r!=null&&r.idGenerator?r.idGenerator(c):AF(),v=new a,_;function k(y){_=y,v.abort()}var S=function(){return gF(this,null,function(){var y,C,T,I,P,A,O;return cF(this,function(Z){switch(Z.label){case 0:return Z.trys.push([0,4,,5]),I=(y=r==null?void 0:r.condition)==null?void 0:y.call(r,c,{getState:p,extra:m}),PF(I)?[4,I]:[3,2];case 1:I=Z.sent(),Z.label=2;case 2:if(I===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return P=new Promise(function(F,j){return v.signal.addEventListener("abort",function(){return j({name:"AbortError",message:_||"Aborted"})})}),h(s(x,c,(C=r==null?void 0:r.getPendingMeta)==null?void 0:C.call(r,{requestId:x,arg:c},{getState:p,extra:m}))),[4,Promise.race([P,Promise.resolve(n(c,{dispatch:h,getState:p,extra:m,requestId:x,signal:v.signal,abort:k,rejectWithValue:function(F,j){return new F0(F,j)},fulfillWithValue:function(F,j){return new ME(F,j)}})).then(function(F){if(F instanceof F0)throw F;return F instanceof ME?i(F.payload,x,c,F.meta):i(F,x,c)})])];case 3:return T=Z.sent(),[3,5];case 4:return A=Z.sent(),T=A instanceof F0?o(null,x,c,A.payload,A.meta):o(A,x,c),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(T)&&T.meta.condition,O||h(T),[2,T]}})})}();return Object.assign(S,{abort:k,requestId:x,arg:c,unwrap:function(){return S.then(RF)}})}}return Object.assign(u,{pending:s,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function RF(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function PF(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var MF=function(e){return e&&typeof e.match=="function"},Vb=function(e,t){return MF(e)?e.match(t):e(t)};function LF(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.some(function(r){return Vb(r,n)})}}function LE(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.every(function(r){return Vb(r,n)})}}function $F(e,t){if(!e||!e.meta)return!1;var n=typeof e.meta.requestId=="string",r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function jb(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Dv(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return $F(n,["rejected"])}:jb(e)?function(n){var r=e.map(function(s){return s.rejected}),i=LF.apply(void 0,r);return i(n)}:Dv()(e[0])}function _m(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return e.length===0?function(r){var i=LE(Dv.apply(void 0,e),n);return i(r)}:jb(e)?function(r){var i=LE(Dv.apply(void 0,e),n);return i(r)}:_m()(e[0])}var Hw="listenerMiddleware";Vs(Hw+"/add");Vs(Hw+"/removeAll");Vs(Hw+"/remove");var $E;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);J8();/**
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
 */const Yb=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},FF=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Wb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,x=c&63;u||(x=64,o||(m=64)),r.push(n[h],n[p],n[m],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Yb(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):FF(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new UF;const m=s<<2|a>>4;if(r.push(m),c!==64){const x=a<<4&240|c>>2;if(r.push(x),p!==64){const v=c<<6&192|p;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class UF extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BF=function(e){const t=Yb(e);return Wb.encodeByteArray(t,!0)},Jf=function(e){return BF(e).replace(/\./g,"")},Hb=function(e){try{return Wb.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function zF(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VF=()=>zF().__FIREBASE_DEFAULTS__,jF=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},YF=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hb(e[1]);return t&&JSON.parse(t)},xm=()=>{try{return VF()||jF()||YF()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Gb=e=>{var t,n;return(n=(t=xm())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qb=e=>{const t=Gb(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},WF=()=>{var e;return(e=xm())===null||e===void 0?void 0:e.config},Kb=e=>{var t;return(t=xm())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class HF{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Qb(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Jf(JSON.stringify(n)),Jf(JSON.stringify(o)),a].join(".")}/**
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
 */function Cn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GF(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cn())}function qF(){var e;const t=(e=xm())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KF(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function QF(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XF(){const e=Cn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function JF(){try{return typeof indexedDB=="object"}catch{return!1}}function ZF(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const e9="FirebaseError";class pi extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=e9,Object.setPrototypeOf(this,pi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cd.prototype.create)}}class cd{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?t9(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pi(i,a,r)}}function t9(e,t){return e.replace(n9,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const n9=/\{\$([^}]+)}/g;function r9(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Zf(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(FE(s)&&FE(o)){if(!Zf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function FE(e){return e!==null&&typeof e=="object"}/**
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
 */function dd(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ou(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Ru(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function i9(e,t){const n=new s9(e,t);return n.subscribe.bind(n)}class s9{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");o9(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=U0),i.error===void 0&&(i.error=U0),i.complete===void 0&&(i.complete=U0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o9(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function U0(){}/**
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
 */function Rt(e){return e&&e._delegate?e._delegate:e}class Js{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const To="[DEFAULT]";/**
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
 */class a9{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new HF;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(u9(t))try{this.getOrInitializeService({instanceIdentifier:To})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=To){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=To){return this.instances.has(t)}getOptions(t=To){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:l9(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=To){return this.component?this.component.multipleInstances?t:To:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l9(e){return e===To?void 0:e}function u9(e){return e.instantiationMode==="EAGER"}/**
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
 */class c9{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new a9(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(je||(je={}));const d9={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},h9=je.INFO,f9={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},p9=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=f9[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gw{constructor(t){this.name=t,this._logLevel=h9,this._logHandler=p9,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?d9[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...t),this._logHandler(this,je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...t),this._logHandler(this,je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,je.INFO,...t),this._logHandler(this,je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,je.WARN,...t),this._logHandler(this,je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...t),this._logHandler(this,je.ERROR,...t)}}const m9=(e,t)=>t.some(n=>e instanceof n);let UE,BE;function g9(){return UE||(UE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function y9(){return BE||(BE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xb=new WeakMap,bv=new WeakMap,Jb=new WeakMap,B0=new WeakMap,qw=new WeakMap;function v9(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(js(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Xb.set(n,e)}).catch(()=>{}),qw.set(t,e),t}function w9(e){if(bv.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});bv.set(e,t)}let Iv={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bv.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jb.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return js(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _9(e){Iv=e(Iv)}function x9(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(z0(this),t,...n);return Jb.set(r,t.sort?t.sort():[t]),js(r)}:y9().includes(e)?function(...t){return e.apply(z0(this),t),js(Xb.get(this))}:function(...t){return js(e.apply(z0(this),t))}}function S9(e){return typeof e=="function"?x9(e):(e instanceof IDBTransaction&&w9(e),m9(e,g9())?new Proxy(e,Iv):e)}function js(e){if(e instanceof IDBRequest)return v9(e);if(B0.has(e))return B0.get(e);const t=S9(e);return t!==e&&(B0.set(e,t),qw.set(t,e)),t}const z0=e=>qw.get(e);function C9(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=js(o);return r&&o.addEventListener("upgradeneeded",u=>{r(js(o.result),u.oldVersion,u.newVersion,js(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const E9=["get","getKey","getAll","getAllKeys","count"],k9=["put","add","delete","clear"],V0=new Map;function zE(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(V0.get(t))return V0.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E9.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return V0.set(t,s),s}_9(e=>({...e,get:(t,n,r)=>zE(t,n)||e.get(t,n,r),has:(t,n)=>!!zE(t,n)||e.has(t,n)}));/**
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
 */class T9{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(D9(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function D9(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Av="@firebase/app",VE="0.9.9";/**
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
 */const Ko=new Gw("@firebase/app"),b9="@firebase/app-compat",I9="@firebase/analytics-compat",A9="@firebase/analytics",N9="@firebase/app-check-compat",O9="@firebase/app-check",R9="@firebase/auth",P9="@firebase/auth-compat",M9="@firebase/database",L9="@firebase/database-compat",$9="@firebase/functions",F9="@firebase/functions-compat",U9="@firebase/installations",B9="@firebase/installations-compat",z9="@firebase/messaging",V9="@firebase/messaging-compat",j9="@firebase/performance",Y9="@firebase/performance-compat",W9="@firebase/remote-config",H9="@firebase/remote-config-compat",G9="@firebase/storage",q9="@firebase/storage-compat",K9="@firebase/firestore",Q9="@firebase/firestore-compat",X9="firebase",J9="9.21.0";/**
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
 */const Nv="[DEFAULT]",Z9={[Av]:"fire-core",[b9]:"fire-core-compat",[A9]:"fire-analytics",[I9]:"fire-analytics-compat",[O9]:"fire-app-check",[N9]:"fire-app-check-compat",[R9]:"fire-auth",[P9]:"fire-auth-compat",[M9]:"fire-rtdb",[L9]:"fire-rtdb-compat",[$9]:"fire-fn",[F9]:"fire-fn-compat",[U9]:"fire-iid",[B9]:"fire-iid-compat",[z9]:"fire-fcm",[V9]:"fire-fcm-compat",[j9]:"fire-perf",[Y9]:"fire-perf-compat",[W9]:"fire-rc",[H9]:"fire-rc-compat",[G9]:"fire-gcs",[q9]:"fire-gcs-compat",[K9]:"fire-fst",[Q9]:"fire-fst-compat","fire-js":"fire-js",[X9]:"fire-js-all"};/**
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
 */const ep=new Map,Ov=new Map;function eU(e,t){try{e.container.addComponent(t)}catch(n){Ko.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qo(e){const t=e.name;if(Ov.has(t))return Ko.debug(`There were multiple attempts to register component ${t}.`),!1;Ov.set(t,e);for(const n of ep.values())eU(n,e);return!0}function Sm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const tU={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ys=new cd("app","Firebase",tU);/**
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
 */class nU{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ys.create("app-deleted",{appName:this._name})}}/**
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
 */const la=J9;function Zb(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Nv,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ys.create("bad-app-name",{appName:String(i)});if(n||(n=WF()),!n)throw Ys.create("no-options");const s=ep.get(i);if(s){if(Zf(n,s.options)&&Zf(r,s.config))return s;throw Ys.create("duplicate-app",{appName:i})}const o=new c9(i);for(const u of Ov.values())o.addComponent(u);const a=new nU(n,r,o);return ep.set(i,a),a}function Kw(e=Nv){const t=ep.get(e);if(!t&&e===Nv)return Zb();if(!t)throw Ys.create("no-app",{appName:e});return t}function ii(e,t,n){var r;let i=(r=Z9[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ko.warn(a.join(" "));return}Qo(new Js(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const rU="firebase-heartbeat-database",iU=1,Ic="firebase-heartbeat-store";let j0=null;function eI(){return j0||(j0=C9(rU,iU,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ic)}}}).catch(e=>{throw Ys.create("idb-open",{originalErrorMessage:e.message})})),j0}async function sU(e){try{return(await eI()).transaction(Ic).objectStore(Ic).get(tI(e))}catch(t){if(t instanceof pi)Ko.warn(t.message);else{const n=Ys.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ko.warn(n.message)}}}async function jE(e,t){try{const r=(await eI()).transaction(Ic,"readwrite");return await r.objectStore(Ic).put(t,tI(e)),r.done}catch(n){if(n instanceof pi)Ko.warn(n.message);else{const r=Ys.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ko.warn(r.message)}}}function tI(e){return`${e.name}!${e.options.appId}`}/**
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
 */const oU=1024,aU=30*24*60*60*1e3;class lU{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cU(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=YE();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=aU}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=YE(),{heartbeatsToSend:n,unsentEntries:r}=uU(this._heartbeatsCache.heartbeats),i=Jf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function YE(){return new Date().toISOString().substring(0,10)}function uU(e,t=oU){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),WE(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),WE(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cU{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JF()?ZF().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sU(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jE(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jE(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function WE(e){return Jf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function dU(e){Qo(new Js("platform-logger",t=>new T9(t),"PRIVATE")),Qo(new Js("heartbeat",t=>new lU(t),"PRIVATE")),ii(Av,VE,e),ii(Av,VE,"esm2017"),ii("fire-js","")}dU("");function Qw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function nI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hU=nI,rI=new cd("auth","Firebase",nI());/**
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
 */const tp=new Gw("@firebase/auth");function fU(e,...t){tp.logLevel<=je.WARN&&tp.warn(`Auth (${la}): ${e}`,...t)}function tf(e,...t){tp.logLevel<=je.ERROR&&tp.error(`Auth (${la}): ${e}`,...t)}/**
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
 */function Sr(e,...t){throw Xw(e,...t)}function si(e,...t){return Xw(e,...t)}function iI(e,t,n){const r=Object.assign(Object.assign({},hU()),{[t]:n});return new cd("auth","Firebase",r).create(t,{appName:e.name})}function pU(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Sr(e,"argument-error"),iI(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xw(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return rI.create(e,...t)}function ve(e,t,...n){if(!e)throw Xw(t,...n)}function Pi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw tf(t),new Error(t)}function Xi(e,t){e||Pi(t)}/**
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
 */function Rv(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function mU(){return HE()==="http:"||HE()==="https:"}function HE(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function gU(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mU()||KF()||"connection"in navigator)?navigator.onLine:!0}function yU(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class hd{constructor(t,n){this.shortDelay=t,this.longDelay=n,Xi(n>t,"Short delay should be less than long delay!"),this.isMobile=GF()||QF()}get(){return gU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jw(e,t){Xi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class sI{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wU=new hd(3e4,6e4);function Yl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wl(e,t,n,r,i={}){return oI(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=dd(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),sI.fetch()(aI(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function oI(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},vU),t);try{const i=new _U(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dh(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dh(e,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Dh(e,"email-already-in-use",o);if(u==="USER_DISABLED")throw Dh(e,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw iI(e,h,c);Sr(e,h)}}catch(i){if(i instanceof pi)throw i;Sr(e,"network-request-failed",{message:String(i)})}}async function fd(e,t,n,r,i={}){const s=await Wl(e,t,n,r,i);return"mfaPendingCredential"in s&&Sr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function aI(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Jw(e.config,i):`${e.config.apiScheme}://${i}`}class _U{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(si(this.auth,"network-request-failed")),wU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dh(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=si(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function xU(e,t){return Wl(e,"POST","/v1/accounts:delete",t)}async function SU(e,t){return Wl(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ku(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function CU(e,t=!1){const n=Rt(e),r=await n.getIdToken(t),i=Zw(r);ve(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ku(Y0(i.auth_time)),issuedAtTime:Ku(Y0(i.iat)),expirationTime:Ku(Y0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Y0(e){return Number(e)*1e3}function Zw(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return tf("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hb(n);return i?JSON.parse(i):(tf("Failed to decode base64 JWT payload"),null)}catch(i){return tf("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function EU(e){const t=Zw(e);return ve(t,"internal-error"),ve(typeof t.exp!="undefined","internal-error"),ve(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ac(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pi&&kU(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function kU({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class TU{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lI{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ku(this.lastLoginAt),this.creationTime=Ku(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function np(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ac(e,SU(n,{idToken:r}));ve(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?IU(s.providerUserInfo):[],a=bU(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lI(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function DU(e){const t=Rt(e);await np(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function bU(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function IU(e){return e.map(t=>{var{providerId:n}=t,r=Qw(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AU(e,t){const n=await oI(e,{},async()=>{const r=dd({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=aI(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Nc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ve(t.idToken,"internal-error"),ve(typeof t.idToken!="undefined","internal-error"),ve(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):EU(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ve(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AU(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Nc;return r&&(ve(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ve(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ve(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Nc,this.toJSON())}_performRefresh(){return Pi("not implemented")}}/**
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
 */function ps(e,t){ve(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class $o{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Qw(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ac(this,this.stsTokenManager.getToken(this.auth,t));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return CU(this,t)}reload(){return DU(this)}_assign(t){this!==t&&(ve(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $o(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await np(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ac(this,xU(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:T,isAnonymous:I,providerData:P,stsTokenManager:A}=n;ve(C&&A,t,"internal-error");const O=Nc.fromJSON(this.name,A);ve(typeof C=="string",t,"internal-error"),ps(p,t.name),ps(m,t.name),ve(typeof T=="boolean",t,"internal-error"),ve(typeof I=="boolean",t,"internal-error"),ps(x,t.name),ps(v,t.name),ps(_,t.name),ps(k,t.name),ps(S,t.name),ps(y,t.name);const Z=new $o({uid:C,auth:t,email:m,emailVerified:T,displayName:p,isAnonymous:I,photoURL:v,phoneNumber:x,tenantId:_,stsTokenManager:O,createdAt:S,lastLoginAt:y});return P&&Array.isArray(P)&&(Z.providerData=P.map(F=>Object.assign({},F))),k&&(Z._redirectEventId=k),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Nc;i.updateFromServerResponse(n);const s=new $o({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await np(s),s}}/**
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
 */const GE=new Map;function Mi(e){Xi(e instanceof Function,"Expected a class definition");let t=GE.get(e);return t?(Xi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,GE.set(e,t),t)}/**
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
 */class uI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}uI.type="NONE";const qE=uI;/**
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
 */function nf(e,t,n){return`firebase:${e}:${t}:${n}`}class il{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nf(this.userKey,i.apiKey,s),this.fullPersistenceKey=nf("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$o._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new il(Mi(qE),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mi(qE);const o=nf(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=$o._fromJSON(t,h);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new il(s,t,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new il(s,t,r))}}/**
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
 */function KE(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pI(t))return"Blackberry";if(mI(t))return"Webos";if(e_(t))return"Safari";if((t.includes("chrome/")||dI(t))&&!t.includes("edge/"))return"Chrome";if(fI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cI(e=Cn()){return/firefox\//i.test(e)}function e_(e=Cn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dI(e=Cn()){return/crios\//i.test(e)}function hI(e=Cn()){return/iemobile/i.test(e)}function fI(e=Cn()){return/android/i.test(e)}function pI(e=Cn()){return/blackberry/i.test(e)}function mI(e=Cn()){return/webos/i.test(e)}function Cm(e=Cn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function NU(e=Cn()){var t;return Cm(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function OU(){return XF()&&document.documentMode===10}function gI(e=Cn()){return Cm(e)||fI(e)||mI(e)||pI(e)||/windows phone/i.test(e)||hI(e)}function RU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function yI(e,t=[]){let n;switch(e){case"Browser":n=KE(Cn());break;case"Worker":n=`${KE(Cn())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${la}/${r}`}async function vI(e,t){return Wl(e,"GET","/v2/recaptchaConfig",Yl(e,t))}function QE(e){return e!==void 0&&e.enterprise!==void 0}class wI{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function PU(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function _I(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=si("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PU().appendChild(r)})}function MU(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const LU="https://www.google.com/recaptcha/enterprise.js?render=",$U="recaptcha-enterprise",FU="NO_RECAPTCHA";class xI{constructor(t){this.type=$U,this.auth=ua(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{vI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new wI(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;QE(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(FU)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&QE(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_I(LU+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function rp(e,t,n,r=!1){const i=new xI(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class UU{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const u=t(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class BU{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new XE(this),this.idTokenSubscription=new XE(this),this.beforeStateQueue=new UU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Mi(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await il.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await np(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=yU()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Rt(t):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ve(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mi(t))})}async initializeRecaptchaConfig(){const t=await vI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new wI(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new xI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new cd("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Mi(t)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await il.create(this,[Mi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=yI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&fU(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ua(e){return Rt(e)}class XE{constructor(t){this.auth=t,this.observer=null,this.addObserver=i9(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function zU(e,t){const n=Sm(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zf(s,t!=null?t:{}))return i;Sr(i,"already-initialized")}return n.initialize({options:t})}function VU(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mi);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function jU(e,t,n){const r=ua(e);ve(r._canInitEmulator,r,"emulator-config-failed"),ve(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=SI(t),{host:o,port:a}=YU(t),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WU()}function SI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function YU(e){const t=SI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:JE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:JE(o)}}}function JE(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function WU(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class t_{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Pi("not implemented")}_getIdTokenResponse(t){return Pi("not implemented")}_linkToIdToken(t,n){return Pi("not implemented")}_getReauthenticationResolver(t){return Pi("not implemented")}}async function HU(e,t){return Wl(e,"POST","/v1/accounts:update",t)}/**
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
 */async function W0(e,t){return fd(e,"POST","/v1/accounts:signInWithPassword",Yl(e,t))}/**
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
 */async function GU(e,t){return fd(e,"POST","/v1/accounts:signInWithEmailLink",Yl(e,t))}async function qU(e,t){return fd(e,"POST","/v1/accounts:signInWithEmailLink",Yl(e,t))}/**
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
 */class Oc extends t_{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Oc(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Oc(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await rp(t,r,"signInWithPassword");return W0(t,i)}else return W0(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await rp(t,r,"signInWithPassword");return W0(t,s)}else return Promise.reject(i)});case"emailLink":return GU(t,{email:this._email,oobCode:this._password});default:Sr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return HU(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qU(t,{idToken:n,email:this._email,oobCode:this._password});default:Sr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function sl(e,t){return fd(e,"POST","/v1/accounts:signInWithIdp",Yl(e,t))}/**
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
 */const KU="http://localhost";class Xo extends t_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Xo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Sr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Qw(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xo(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return sl(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,sl(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,sl(t,n)}buildRequest(){const t={requestUri:KU,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=dd(n)}return t}}/**
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
 */function QU(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XU(e){const t=Ou(Ru(e)).link,n=t?Ou(Ru(t)).deep_link_id:null,r=Ou(Ru(e)).deep_link_id;return(r?Ou(Ru(r)).link:null)||r||n||t||e}class n_{constructor(t){var n,r,i,s,o,a;const u=Ou(Ru(t)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=QU((i=u.mode)!==null&&i!==void 0?i:null);ve(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=XU(t);try{return new n_(n)}catch{return null}}}/**
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
 */class Hl{constructor(){this.providerId=Hl.PROVIDER_ID}static credential(t,n){return Oc._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=n_.parseLink(n);return ve(r,"argument-error"),Oc._fromEmailAndCode(t,r.code,r.tenantId)}}Hl.PROVIDER_ID="password";Hl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class r_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pd extends r_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class _s extends pd{constructor(){super("facebook.com")}static credential(t){return Xo._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _s.credentialFromTaggedObject(t)}static credentialFromError(t){return _s.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _s.credential(t.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
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
 */class Ni extends pd{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Xo._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ni.credentialFromTaggedObject(t)}static credentialFromError(t){return Ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ni.credential(n,r)}catch{return null}}}Ni.GOOGLE_SIGN_IN_METHOD="google.com";Ni.PROVIDER_ID="google.com";/**
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
 */class xs extends pd{constructor(){super("github.com")}static credential(t){return Xo._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xs.credentialFromTaggedObject(t)}static credentialFromError(t){return xs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xs.credential(t.oauthAccessToken)}catch{return null}}}xs.GITHUB_SIGN_IN_METHOD="github.com";xs.PROVIDER_ID="github.com";/**
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
 */class Ss extends pd{constructor(){super("twitter.com")}static credential(t,n){return Xo._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ss.credentialFromTaggedObject(t)}static credentialFromError(t){return Ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ss.credential(n,r)}catch{return null}}}Ss.TWITTER_SIGN_IN_METHOD="twitter.com";Ss.PROVIDER_ID="twitter.com";/**
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
 */async function H0(e,t){return fd(e,"POST","/v1/accounts:signUp",Yl(e,t))}/**
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
 */class Jo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await $o._fromIdTokenResponse(t,r,i),o=ZE(r);return new Jo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ZE(r);return new Jo({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ZE(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ip extends pi{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ip.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ip(t,n,r,i)}}function CI(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ip._fromErrorAndOperation(e,s,t,r):s})}async function JU(e,t,n=!1){const r=await Ac(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Jo._forOperation(e,"link",r)}/**
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
 */async function ZU(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ac(e,CI(r,i,t,e),n);ve(s.idToken,r,"internal-error");const o=Zw(s.idToken);ve(o,r,"internal-error");const{sub:a}=o;return ve(e.uid===a,r,"user-mismatch"),Jo._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sr(r,"user-mismatch"),s}}/**
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
 */async function EI(e,t,n=!1){const r="signIn",i=await CI(e,r,t),s=await Jo._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function e7(e,t){return EI(ua(e),t)}async function t7(e,t,n){var r;const i=ua(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await rp(i,s,"signUpPassword");o=H0(i,c)}else o=H0(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await rp(i,s,"signUpPassword");return H0(i,h)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),u=await Jo._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function n7(e,t,n){return e7(Rt(e),Hl.credential(t,n))}/**
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
 */function kI(e,t){return Rt(e).setPersistence(t)}function r7(e,t,n,r){return Rt(e).onIdTokenChanged(t,n,r)}function i7(e,t,n){return Rt(e).beforeAuthStateChanged(t,n)}function s7(e){return Rt(e).signOut()}const sp="__sak";/**
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
 */class TI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sp,"1"),this.storage.removeItem(sp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function o7(){const e=Cn();return e_(e)||Cm(e)}const a7=1e3,l7=10;class DI extends TI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=o7()&&RU(),this.fallbackToPolling=gI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OU()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,l7):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},a7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}DI.type="LOCAL";const i_=DI;/**
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
 */class bI extends TI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}bI.type="SESSION";const II=bI;/**
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
 */function u7(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Em{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Em(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await u7(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Em.receivers=[];/**
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
 */function s_(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class c7{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=s_("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function oi(){return window}function d7(e){oi().location.href=e}/**
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
 */function AI(){return typeof oi().WorkerGlobalScope!="undefined"&&typeof oi().importScripts=="function"}async function h7(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f7(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function p7(){return AI()?self:null}/**
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
 */const NI="firebaseLocalStorageDb",m7=1,op="firebaseLocalStorage",OI="fbase_key";class md{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function km(e,t){return e.transaction([op],t?"readwrite":"readonly").objectStore(op)}function g7(){const e=indexedDB.deleteDatabase(NI);return new md(e).toPromise()}function Pv(){const e=indexedDB.open(NI,m7);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(op,{keyPath:OI})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(op)?t(r):(r.close(),await g7(),t(await Pv()))})})}async function ek(e,t,n){const r=km(e,!0).put({[OI]:t,value:n});return new md(r).toPromise()}async function y7(e,t){const n=km(e,!1).get(t),r=await new md(n).toPromise();return r===void 0?null:r.value}function tk(e,t){const n=km(e,!0).delete(t);return new md(n).toPromise()}const v7=800,w7=3;class RI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>w7)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Em._getInstance(p7()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await h7(),!this.activeServiceWorker)return;this.sender=new c7(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||f7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Pv();return await ek(t,sp,"1"),await tk(t,sp),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ek(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>y7(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tk(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=km(i,!1).getAll();return new md(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),v7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RI.type="LOCAL";const _7=RI;new hd(3e4,6e4);/**
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
 */function PI(e,t){return t?Mi(t):(ve(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class o_ extends t_{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return sl(t,this._buildIdpRequest())}_linkToIdToken(t,n){return sl(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return sl(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function x7(e){return EI(e.auth,new o_(e),e.bypassAuthState)}function S7(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),ZU(n,new o_(e),e.bypassAuthState)}async function C7(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),JU(n,new o_(e),e.bypassAuthState)}/**
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
 */class MI{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return x7;case"linkViaPopup":case"linkViaRedirect":return C7;case"reauthViaPopup":case"reauthViaRedirect":return S7;default:Sr(this.auth,"internal-error")}}resolve(t){Xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const E7=new hd(2e3,1e4);async function k7(e,t,n){const r=ua(e);pU(e,t,r_);const i=PI(r,n);return new Ao(r,"signInViaPopup",t,i).executeNotNull()}class Ao extends MI{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ao.currentPopupAction&&Ao.currentPopupAction.cancel(),Ao.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ve(t,this.auth,"internal-error"),t}async onExecution(){Xi(this.filter.length===1,"Popup operations only handle one event");const t=s_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(si(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(si(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ao.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(si(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,E7.get())};t()}}Ao.currentPopupAction=null;/**
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
 */const T7="pendingRedirect",rf=new Map;class D7 extends MI{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=rf.get(this.auth._key());if(!t){try{const r=await b7(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}rf.set(this.auth._key(),t)}return this.bypassAuthState||rf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b7(e,t){const n=N7(t),r=A7(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function I7(e,t){rf.set(e._key(),t)}function A7(e){return Mi(e._redirectPersistence)}function N7(e){return nf(T7,e.config.apiKey,e.name)}async function O7(e,t,n=!1){const r=ua(e),i=PI(r,t),o=await new D7(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const R7=10*60*1e3;class P7{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!M7(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!LI(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(si(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=R7&&this.cachedEventUids.clear(),this.cachedEventUids.has(nk(t))}saveEventToCache(t){this.cachedEventUids.add(nk(t)),this.lastProcessedEventTime=Date.now()}}function nk(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function LI({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function M7(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LI(e);default:return!1}}/**
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
 */async function L7(e,t={}){return Wl(e,"GET","/v1/projects",t)}/**
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
 */const $7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F7=/^https?/;async function U7(e){if(e.config.emulator)return;const{authorizedDomains:t}=await L7(e);for(const n of t)try{if(B7(n))return}catch{}Sr(e,"unauthorized-domain")}function B7(e){const t=Rv(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!F7.test(n))return!1;if($7.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const z7=new hd(3e4,6e4);function rk(){const e=oi().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function V7(e){return new Promise((t,n)=>{var r,i,s;function o(){rk(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rk(),n(si(e,"network-request-failed"))},timeout:z7.get()})}if(!((i=(r=oi().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=oi().gapi)===null||s===void 0)&&s.load)o();else{const a=MU("iframefcb");return oi()[a]=()=>{gapi.load?o():n(si(e,"network-request-failed"))},_I(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(t=>{throw sf=null,t})}let sf=null;function j7(e){return sf=sf||V7(e),sf}/**
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
 */const Y7=new hd(5e3,15e3),W7="__/auth/iframe",H7="emulator/auth/iframe",G7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K7(e){const t=e.config;ve(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jw(t,H7):`https://${e.config.authDomain}/${W7}`,r={apiKey:t.apiKey,appName:e.name,v:la},i=q7.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${dd(r).slice(1)}`}async function Q7(e){const t=await j7(e),n=oi().gapi;return ve(n,e,"internal-error"),t.open({where:document.body,url:K7(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=si(e,"network-request-failed"),a=oi().setTimeout(()=>{s(o)},Y7.get());function u(){oi().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const X7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J7=500,Z7=600,eB="_blank",tB="http://localhost";class ik{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nB(e,t,n,r=J7,i=Z7){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},X7),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Cn().toLowerCase();n&&(a=dI(c)?eB:n),cI(c)&&(t=t||tB,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[x,v])=>`${m}${x}=${v},`,"");if(NU(c)&&a!=="_self")return rB(t||"",a),new ik(null);const p=window.open(t||"",a,h);ve(p,e,"popup-blocked");try{p.focus()}catch{}return new ik(p)}function rB(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iB="__/auth/handler",sB="emulator/auth/handler",oB=encodeURIComponent("fac");async function sk(e,t,n,r,i,s){ve(e.config.authDomain,e,"auth-domain-config-required"),ve(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:la,eventId:i};if(t instanceof r_){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",r9(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(t instanceof pd){const h=t.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await e._getAppCheckToken(),c=u?`#${oB}=${encodeURIComponent(u)}`:"";return`${aB(e)}?${dd(a).slice(1)}${c}`}function aB({config:e}){return e.emulator?Jw(e,sB):`https://${e.authDomain}/${iB}`}/**
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
 */const G0="webStorageSupport";class lB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=II,this._completeRedirectFn=O7,this._overrideRedirectResult=I7}async _openPopup(t,n,r,i){var s;Xi((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sk(t,n,r,Rv(),i);return nB(t,o,s_())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await sk(t,n,r,Rv(),i);return d7(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Q7(t),r=new P7(t);return n.register("authEvent",i=>(ve(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(G0,{type:G0},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[G0];o!==void 0&&n(!!o),Sr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=U7(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return gI()||e_()||Cm()}}const uB=lB;var ok="@firebase/auth",ak="0.23.1";/**
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
 */class cB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hB(e){Qo(new Js("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),ve(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yI(e)},c=new BU(r,i,s,u);return VU(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Qo(new Js("auth-internal",t=>{const n=ua(t.getProvider("auth").getImmediate());return(r=>new cB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ii(ok,ak,dB(e)),ii(ok,ak,"esm2017")}/**
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
 */const fB=5*60,pB=Kb("authIdTokenMaxAge")||fB;let lk=null;const mB=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pB)return;const i=n==null?void 0:n.token;lk!==i&&(lk=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gB(e=Kw()){const t=Sm(e,"auth");if(t.isInitialized())return t.getImmediate();const n=zU(e,{popupRedirectResolver:uB,persistence:[_7,i_,II]}),r=Kb("authTokenSyncURL");if(r){const s=mB(r);i7(n,s,()=>s(n.currentUser)),r7(n,o=>s(o))}const i=Gb("auth");return i&&jU(n,`http://${i}`),n}hB("Browser");var yB="firebase",vB="9.21.0";/**
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
 */ii(yB,vB,"app");var wB=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},re,a_=a_||{},Se=wB||self;function ap(){}function Tm(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function gd(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _B(e){return Object.prototype.hasOwnProperty.call(e,q0)&&e[q0]||(e[q0]=++xB)}var q0="closure_uid_"+(1e9*Math.random()>>>0),xB=0;function SB(e,t,n){return e.call.apply(e.bind,arguments)}function CB(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function vn(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vn=SB:vn=CB,vn.apply(null,arguments)}function bh(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function tn(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function uo(){this.s=this.s,this.o=this.o}var EB=0;uo.prototype.s=!1;uo.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),EB!=0)&&_B(this)};uo.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function l_(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function uk(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tm(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function wn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}wn.prototype.h=function(){this.defaultPrevented=!0};var kB=function(){if(!Se.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Se.addEventListener("test",ap,t),Se.removeEventListener("test",ap,t)}catch{}return e}();function lp(e){return/^[\s\xa0]*$/.test(e)}var ck=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function K0(e,t){return e<t?-1:e>t?1:0}function Dm(){var e=Se.navigator;return e&&(e=e.userAgent)?e:""}function Qr(e){return Dm().indexOf(e)!=-1}function u_(e){return u_[" "](e),e}u_[" "]=ap;function FI(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var TB=Qr("Opera"),kl=Qr("Trident")||Qr("MSIE"),UI=Qr("Edge"),Mv=UI||kl,BI=Qr("Gecko")&&!(Dm().toLowerCase().indexOf("webkit")!=-1&&!Qr("Edge"))&&!(Qr("Trident")||Qr("MSIE"))&&!Qr("Edge"),DB=Dm().toLowerCase().indexOf("webkit")!=-1&&!Qr("Edge");function zI(){var e=Se.document;return e?e.documentMode:void 0}var up;e:{var Q0="",X0=function(){var e=Dm();if(BI)return/rv:([^\);]+)(\)|;)/.exec(e);if(UI)return/Edge\/([\d\.]+)/.exec(e);if(kl)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(DB)return/WebKit\/(\S+)/.exec(e);if(TB)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(X0&&(Q0=X0?X0[1]:""),kl){var J0=zI();if(J0!=null&&J0>parseFloat(Q0)){up=String(J0);break e}}up=Q0}var bB={};function IB(){return FI(bB,9,function(){let e=0;const t=ck(String(up)).split("."),n=ck("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=K0(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||K0(i[2].length==0,s[2].length==0)||K0(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var Lv;if(Se.document&&kl){var dk=zI();Lv=dk||parseInt(up,10)||void 0}else Lv=void 0;var AB=Lv;function Rc(e,t){if(wn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(BI){e:{try{u_(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:NB[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Rc.$.h.call(this)}}tn(Rc,wn);var NB={2:"touch",3:"pen",4:"mouse"};Rc.prototype.h=function(){Rc.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var yd="closure_listenable_"+(1e6*Math.random()|0),OB=0;function RB(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++OB,this.fa=this.ia=!1}function bm(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function c_(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function VI(e){const t={};for(const n in e)t[n]=e[n];return t}const hk="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jI(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<hk.length;s++)n=hk[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Im(e){this.src=e,this.g={},this.h=0}Im.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Fv(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new RB(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function $v(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=$I(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bm(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Fv(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var d_="closure_lm_"+(1e6*Math.random()|0),Z0={};function YI(e,t,n,r,i){if(r&&r.once)return HI(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)YI(e,t[s],n,r,i);return null}return n=p_(n),e&&e[yd]?e.O(t,n,gd(r)?!!r.capture:!!r,i):WI(e,t,n,!1,r,i)}function WI(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=gd(i)?!!i.capture:!!i,a=f_(e);if(a||(e[d_]=a=new Im(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=PB(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)kB||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(qI(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PB(){function e(n){return t.call(e.src,e.listener,n)}const t=MB;return e}function HI(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)HI(e,t[s],n,r,i);return null}return n=p_(n),e&&e[yd]?e.P(t,n,gd(r)?!!r.capture:!!r,i):WI(e,t,n,!0,r,i)}function GI(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)GI(e,t[s],n,r,i);else r=gd(r)?!!r.capture:!!r,n=p_(n),e&&e[yd]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Fv(s,n,r,i),-1<n&&(bm(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=f_(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Fv(t,n,r,i)),(n=-1<e?t[e]:null)&&h_(n))}function h_(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[yd])$v(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(qI(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=f_(t))?($v(n,e),n.h==0&&(n.src=null,t[d_]=null)):bm(e)}}}function qI(e){return e in Z0?Z0[e]:Z0[e]="on"+e}function MB(e,t){if(e.fa)e=!0;else{t=new Rc(t,this);var n=e.listener,r=e.la||e.src;e.ia&&h_(e),e=n.call(r,t)}return e}function f_(e){return e=e[d_],e instanceof Im?e:null}var ey="__closure_events_fn_"+(1e9*Math.random()>>>0);function p_(e){return typeof e=="function"?e:(e[ey]||(e[ey]=function(t){return e.handleEvent(t)}),e[ey])}function Zt(){uo.call(this),this.i=new Im(this),this.S=this,this.J=null}tn(Zt,uo);Zt.prototype[yd]=!0;Zt.prototype.removeEventListener=function(e,t,n,r){GI(this,e,t,n,r)};function an(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new wn(t,e);else if(t instanceof wn)t.target=t.target||e;else{var i=t;t=new wn(r,e),jI(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ih(o,r,!0,t)&&i}if(o=t.g=e,i=Ih(o,r,!0,t)&&i,i=Ih(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ih(o,r,!1,t)&&i}Zt.prototype.N=function(){if(Zt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)bm(n[r]);delete e.g[t],e.h--}}this.J=null};Zt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Zt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Ih(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&$v(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var m_=Se.JSON.stringify;function LB(){var e=XI;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class $B{constructor(){this.h=this.g=null}add(t,n){const r=KI.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var KI=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new FB,e=>e.reset());class FB{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UB(e){Se.setTimeout(()=>{throw e},0)}function QI(e,t){Uv||BB(),Bv||(Uv(),Bv=!0),XI.add(e,t)}var Uv;function BB(){var e=Se.Promise.resolve(void 0);Uv=function(){e.then(zB)}}var Bv=!1,XI=new $B;function zB(){for(var e;e=LB();){try{e.h.call(e.g)}catch(n){UB(n)}var t=KI;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Bv=!1}function Am(e,t){Zt.call(this),this.h=e||1,this.g=t||Se,this.j=vn(this.qb,this),this.l=Date.now()}tn(Am,Zt);re=Am.prototype;re.ga=!1;re.T=null;re.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),an(this,"tick"),this.ga&&(g_(this),this.start()))}};re.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function g_(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}re.N=function(){Am.$.N.call(this),g_(this),delete this.g};function y_(e,t,n){if(typeof e=="function")n&&(e=vn(e,n));else if(e&&typeof e.handleEvent=="function")e=vn(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Se.setTimeout(e,t||0)}function JI(e){e.g=y_(()=>{e.g=null,e.i&&(e.i=!1,JI(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class VB extends uo{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:JI(this)}N(){super.N(),this.g&&(Se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pc(e){uo.call(this),this.h=e,this.g={}}tn(Pc,uo);var fk=[];function ZI(e,t,n,r){Array.isArray(n)||(n&&(fk[0]=n.toString()),n=fk);for(var i=0;i<n.length;i++){var s=YI(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eA(e){c_(e.g,function(t,n){this.g.hasOwnProperty(n)&&h_(t)},e),e.g={}}Pc.prototype.N=function(){Pc.$.N.call(this),eA(this)};Pc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nm(){this.g=!0}Nm.prototype.Ea=function(){this.g=!1};function jB(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var p=h.split("_");o=2<=p.length&&p[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function YB(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Ga(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+HB(e,n)+(r?" "+r:"")})}function WB(e,t){e.info(function(){return"TIMEOUT: "+t})}Nm.prototype.info=function(){};function HB(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return m_(n)}catch{return t}}var ca={},pk=null;function Om(){return pk=pk||new Zt}ca.Ta="serverreachability";function tA(e){wn.call(this,ca.Ta,e)}tn(tA,wn);function Mc(e){const t=Om();an(t,new tA(t))}ca.STAT_EVENT="statevent";function nA(e,t){wn.call(this,ca.STAT_EVENT,e),this.stat=t}tn(nA,wn);function On(e){const t=Om();an(t,new nA(t,e))}ca.Ua="timingevent";function rA(e,t){wn.call(this,ca.Ua,e),this.size=t}tn(rA,wn);function vd(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Se.setTimeout(function(){e()},t)}var Rm={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},iA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function v_(){}v_.prototype.h=null;function mk(e){return e.h||(e.h=e.i())}function sA(){}var wd={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function w_(){wn.call(this,"d")}tn(w_,wn);function __(){wn.call(this,"c")}tn(__,wn);var zv;function Pm(){}tn(Pm,v_);Pm.prototype.g=function(){return new XMLHttpRequest};Pm.prototype.i=function(){return{}};zv=new Pm;function _d(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Pc(this),this.P=GB,e=Mv?125:void 0,this.V=new Am(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new oA}function oA(){this.i=null,this.g="",this.h=!1}var GB=45e3,Vv={},cp={};re=_d.prototype;re.setTimeout=function(e){this.P=e};function jv(e,t,n){e.L=1,e.v=Lm(Ji(t)),e.s=n,e.S=!0,aA(e,null)}function aA(e,t){e.G=Date.now(),xd(e),e.A=Ji(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),mA(n.i,"t",r),e.C=0,n=e.l.I,e.h=new oA,e.g=LA(e.l,n?t:null,!e.s),0<e.O&&(e.M=new VB(vn(e.Pa,e,e.g),e.O)),ZI(e.U,e.g,"readystatechange",e.nb),t=e.I?VI(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Mc(),jB(e.j,e.u,e.A,e.m,e.W,e.s)}re.nb=function(e){e=e.target;const t=this.M;t&&Li(e)==3?t.l():this.Pa(e)};re.Pa=function(e){try{if(e==this.g)e:{const h=Li(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>h)&&(h!=3||Mv||this.g&&(this.h.h||this.g.ja()||wk(this.g)))){this.J||h!=4||t==7||(t==8||0>=p?Mc(3):Mc(2)),Mm(this);var n=this.g.da();this.aa=n;t:if(lA(this)){var r=wk(this.g);e="";var i=r.length,s=Li(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){No(this),Qu(this);var o="";break t}this.h.i=new Se.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YB(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lp(a)){var c=a;break t}}c=null}if(n=c)Ga(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yv(this,n);else{this.i=!1,this.o=3,On(12),No(this),Qu(this);break e}}this.S?(uA(this,h,o),Mv&&this.i&&h==3&&(ZI(this.U,this.V,"tick",this.mb),this.V.start())):(Ga(this.j,this.m,o,null),Yv(this,o)),h==4&&No(this),this.i&&!this.J&&(h==4?OA(this.l,this):(this.i=!1,xd(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,On(12)):(this.o=0,On(13)),No(this),Qu(this)}}}catch{}finally{}};function lA(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function uA(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=qB(e,n),i==cp){t==4&&(e.o=4,On(14),r=!1),Ga(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Vv){e.o=4,On(15),Ga(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ga(e.j,e.m,i,null),Yv(e,i);lA(e)&&i!=cp&&i!=Vv&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,On(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),D_(t),t.L=!0,On(11))):(Ga(e.j,e.m,n,"[Invalid Chunked Response]"),No(e),Qu(e))}re.mb=function(){if(this.g){var e=Li(this.g),t=this.g.ja();this.C<t.length&&(Mm(this),uA(this,e,t),this.i&&e!=4&&xd(this))}};function qB(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?cp:(n=Number(t.substring(n,r)),isNaN(n)?Vv:(r+=1,r+n>t.length?cp:(t=t.substr(r,n),e.C=r+n,t)))}re.cancel=function(){this.J=!0,No(this)};function xd(e){e.Y=Date.now()+e.P,cA(e,e.P)}function cA(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=vd(vn(e.lb,e),t)}function Mm(e){e.B&&(Se.clearTimeout(e.B),e.B=null)}re.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(WB(this.j,this.A),this.L!=2&&(Mc(),On(17)),No(this),this.o=2,Qu(this)):cA(this,this.Y-e)};function Qu(e){e.l.H==0||e.J||OA(e.l,e)}function No(e){Mm(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,g_(e.V),eA(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Yv(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Wv(n.h,e))){if(!e.K&&Wv(n.h,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)fp(n),Um(n);else break e;T_(n),On(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=vd(vn(n.ib,n),6e3));if(1>=vA(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Oo(n,11)}else if((e.K||n.g==e)&&fp(n),!lp(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const h=c[3];h!=null&&(n.qa=h,n.j.info("VER="+n.qa));const p=c[4];p!=null&&(n.Ga=p,n.j.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const x=e.g;if(x){const v=x.g?x.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(x_(s,s.h),s.h=null))}if(r.F){const _=x.g?x.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,gt(r.G,r.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=MA(r,r.I?r.oa:null,r.Y),o.K){wA(r.h,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Mm(a),xd(a)),r.g=o}else AA(r);0<n.i.length&&Bm(n)}else c[0]!="stop"&&c[0]!="close"||Oo(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Oo(n,7):k_(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Mc(4)}catch{}}function KB(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Tm(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function QB(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(Tm(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function dA(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Tm(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=QB(e),r=KB(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var hA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XB(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fo(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Fo){this.h=t!==void 0?t:e.h,dp(this,e.j),this.s=e.s,this.g=e.g,hp(this,e.m),this.l=e.l,t=e.i;var n=new Lc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),gk(this,n),this.o=e.o}else e&&(n=String(e).match(hA))?(this.h=!!t,dp(this,n[1]||"",!0),this.s=Pu(n[2]||""),this.g=Pu(n[3]||"",!0),hp(this,n[4]),this.l=Pu(n[5]||"",!0),gk(this,n[6]||"",!0),this.o=Pu(n[7]||"")):(this.h=!!t,this.i=new Lc(null,this.h))}Fo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Mu(t,yk,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Mu(t,yk,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Mu(n,n.charAt(0)=="/"?ez:ZB,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Mu(n,nz)),e.join("")};function Ji(e){return new Fo(e)}function dp(e,t,n){e.j=n?Pu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function hp(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function gk(e,t,n){t instanceof Lc?(e.i=t,rz(e.i,e.h)):(n||(t=Mu(t,tz)),e.i=new Lc(t,e.h))}function gt(e,t,n){e.i.set(t,n)}function Lm(e){return gt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Pu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Mu(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,JB),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function JB(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var yk=/[#\/\?@]/g,ZB=/[#\?:]/g,ez=/[#\?]/g,tz=/[#\?@]/g,nz=/#/g;function Lc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function co(e){e.g||(e.g=new Map,e.h=0,e.i&&XB(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}re=Lc.prototype;re.add=function(e,t){co(this),this.i=null,e=Gl(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function fA(e,t){co(e),t=Gl(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function pA(e,t){return co(e),t=Gl(e,t),e.g.has(t)}re.forEach=function(e,t){co(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};re.sa=function(){co(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};re.Z=function(e){co(this);let t=[];if(typeof e=="string")pA(this,e)&&(t=t.concat(this.g.get(Gl(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};re.set=function(e,t){return co(this),this.i=null,e=Gl(this,e),pA(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};re.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function mA(e,t,n){fA(e,t),0<n.length&&(e.i=null,e.g.set(Gl(e,t),l_(n)),e.h+=n.length)}re.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Gl(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function rz(e,t){t&&!e.j&&(co(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(fA(this,r),mA(this,i,n))},e)),e.j=t}var iz=class{constructor(e,t){this.h=e,this.g=t}};function gA(e){this.l=e||sz,Se.PerformanceNavigationTiming?(e=Se.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Se.g&&Se.g.Ka&&Se.g.Ka()&&Se.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sz=10;function yA(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function vA(e){return e.h?1:e.g?e.g.size:0}function Wv(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function x_(e,t){e.g?e.g.add(t):e.h=t}function wA(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}gA.prototype.cancel=function(){if(this.i=_A(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function _A(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return l_(e.i)}function S_(){}S_.prototype.stringify=function(e){return Se.JSON.stringify(e,void 0)};S_.prototype.parse=function(e){return Se.JSON.parse(e,void 0)};function oz(){this.g=new S_}function az(e,t,n){const r=n||"";try{dA(e,function(i,s){let o=i;gd(i)&&(o=m_(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function lz(e,t){const n=new Nm;if(Se.Image){const r=new Image;r.onload=bh(Ah,n,r,"TestLoadImage: loaded",!0,t),r.onerror=bh(Ah,n,r,"TestLoadImage: error",!1,t),r.onabort=bh(Ah,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=bh(Ah,n,r,"TestLoadImage: timeout",!1,t),Se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ah(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Sd(e){this.l=e.fc||null,this.j=e.ob||!1}tn(Sd,v_);Sd.prototype.g=function(){return new $m(this.l,this.j)};Sd.prototype.i=function(e){return function(){return e}}({});function $m(e,t){Zt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=C_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tn($m,Zt);var C_=0;re=$m.prototype;re.open=function(e,t){if(this.readyState!=C_)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$c(this)};re.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Se).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};re.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cd(this)),this.readyState=C_};re.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$c(this)),this.g&&(this.readyState=3,$c(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Se.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xA(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function xA(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}re.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cd(this):$c(this),this.readyState==3&&xA(this)}};re.Za=function(e){this.g&&(this.response=this.responseText=e,Cd(this))};re.Ya=function(e){this.g&&(this.response=e,Cd(this))};re.ka=function(){this.g&&Cd(this)};function Cd(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$c(e)}re.setRequestHeader=function(e,t){this.v.append(e,t)};re.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};re.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $c(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty($m.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var uz=Se.JSON.parse;function kt(e){Zt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=SA,this.L=this.M=!1}tn(kt,Zt);var SA="",cz=/^https?$/i,dz=["POST","PUT"];re=kt.prototype;re.Oa=function(e){this.M=e};re.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zv.g(),this.C=this.u?mk(this.u):mk(zv),this.g.onreadystatechange=vn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){vk(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Se.FormData&&e instanceof Se.FormData,!(0<=$I(dz,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kA(this),0<this.B&&((this.L=hz(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vn(this.ua,this)):this.A=y_(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){vk(this,s)}};function hz(e){return kl&&IB()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}re.ua=function(){typeof a_!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,an(this,"timeout"),this.abort(8))};function vk(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,CA(e),Fm(e)}function CA(e){e.F||(e.F=!0,an(e,"complete"),an(e,"error"))}re.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,an(this,"complete"),an(this,"abort"),Fm(this))};re.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fm(this,!0)),kt.$.N.call(this)};re.La=function(){this.s||(this.G||this.v||this.l?EA(this):this.kb())};re.kb=function(){EA(this)};function EA(e){if(e.h&&typeof a_!="undefined"&&(!e.C[1]||Li(e)!=4||e.da()!=2)){if(e.v&&Li(e)==4)y_(e.La,0,e);else if(an(e,"readystatechange"),Li(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.I).match(hA)[1]||null;if(!i&&Se.self&&Se.self.location){var s=Se.self.location.protocol;i=s.substr(0,s.length-1)}r=!cz.test(i?i.toLowerCase():"")}n=r}if(n)an(e,"complete"),an(e,"success");else{e.m=6;try{var o=2<Li(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",CA(e)}}finally{Fm(e)}}}}function Fm(e,t){if(e.g){kA(e);const n=e.g,r=e.C[0]?ap:null;e.g=null,e.C=null,t||an(e,"ready");try{n.onreadystatechange=r}catch{}}}function kA(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Se.clearTimeout(e.A),e.A=null)}function Li(e){return e.g?e.g.readyState:0}re.da=function(){try{return 2<Li(this)?this.g.status:-1}catch{return-1}};re.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};re.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),uz(t)}};function wk(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case SA:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}re.Ia=function(){return this.m};re.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function TA(e){let t="";return c_(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function E_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=TA(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):gt(e,t,n))}function xu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function DA(e){this.Ga=0,this.i=[],this.j=new Nm,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xu("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xu("baseRetryDelayMs",5e3,e),this.hb=xu("retryDelaySeedMs",1e4,e),this.eb=xu("forwardChannelMaxRetries",2,e),this.xa=xu("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new gA(e&&e.concurrentRequestLimit),this.Ja=new oz,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}re=DA.prototype;re.qa=8;re.H=1;function k_(e){if(bA(e),e.H==3){var t=e.W++,n=Ji(e.G);gt(n,"SID",e.J),gt(n,"RID",t),gt(n,"TYPE","terminate"),Ed(e,n),t=new _d(e,e.j,t,void 0),t.L=2,t.v=Lm(Ji(n)),n=!1,Se.navigator&&Se.navigator.sendBeacon&&(n=Se.navigator.sendBeacon(t.v.toString(),"")),!n&&Se.Image&&(new Image().src=t.v,n=!0),n||(t.g=LA(t.l,null),t.g.ha(t.v)),t.G=Date.now(),xd(t)}PA(e)}function Um(e){e.g&&(D_(e),e.g.cancel(),e.g=null)}function bA(e){Um(e),e.u&&(Se.clearTimeout(e.u),e.u=null),fp(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&Se.clearTimeout(e.m),e.m=null)}function Bm(e){yA(e.h)||e.m||(e.m=!0,QI(e.Na,e),e.C=0)}function fz(e,t){return vA(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=vd(vn(e.Na,e,t),RA(e,e.C)),e.C++,!0)}re.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new _d(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=VI(s),jI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=IA(this,i,t),n=Ji(this.G),gt(n,"RID",e),gt(n,"CVER",22),this.F&&gt(n,"X-HTTP-Session-Id",this.F),Ed(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(TA(s)))+"&"+t:this.o&&E_(n,this.o,s)),x_(this.h,i),this.bb&&gt(n,"TYPE","init"),this.P?(gt(n,"$req",t),gt(n,"SID","null"),i.ba=!0,jv(i,n,null)):jv(i,n,t),this.H=2}}else this.H==3&&(e?_k(this,e):this.i.length==0||yA(this.h)||_k(this))};function _k(e,t){var n;t?n=t.m:n=e.W++;const r=Ji(e.G);gt(r,"SID",e.J),gt(r,"RID",n),gt(r,"AID",e.V),Ed(e,r),e.o&&e.s&&E_(r,e.o,e.s),n=new _d(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=IA(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),x_(e.h,n),jv(n,r,t)}function Ed(e,t){e.ma&&c_(e.ma,function(n,r){gt(t,r,n)}),e.l&&dA({},function(n,r){gt(t,r,n)})}function IA(e,t,n){n=Math.min(e.i.length,n);var r=e.l?vn(e.l.Va,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const h=i[u].g;if(c-=s,0>c)s=Math.max(0,i[u].h-100),a=!1;else try{az(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function AA(e){e.g||e.u||(e.ba=1,QI(e.Ma,e),e.A=0)}function T_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=vd(vn(e.Ma,e),RA(e,e.A)),e.A++,!0)}re.Ma=function(){if(this.u=null,NA(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=vd(vn(this.jb,this),e)}};re.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,On(10),Um(this),NA(this))};function D_(e){e.B!=null&&(Se.clearTimeout(e.B),e.B=null)}function NA(e){e.g=new _d(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ji(e.wa);gt(t,"RID","rpc"),gt(t,"SID",e.J),gt(t,"CI",e.M?"0":"1"),gt(t,"AID",e.V),gt(t,"TYPE","xmlhttp"),Ed(e,t),e.o&&e.s&&E_(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Lm(Ji(t)),n.s=null,n.S=!0,aA(n,e)}re.ib=function(){this.v!=null&&(this.v=null,Um(this),T_(this),On(19))};function fp(e){e.v!=null&&(Se.clearTimeout(e.v),e.v=null)}function OA(e,t){var n=null;if(e.g==t){fp(e),D_(e),e.g=null;var r=2}else if(Wv(e.h,t))n=t.F,wA(e.h,t),r=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Om(),an(r,new rA(r,n)),Bm(e)}else AA(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(r==1&&fz(e,t)||r==2&&T_(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Oo(e,5);break;case 4:Oo(e,10);break;case 3:Oo(e,6);break;default:Oo(e,2)}}}function RA(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Oo(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=vn(e.pb,e);n||(n=new Fo("//www.google.com/images/cleardot.gif"),Se.location&&Se.location.protocol=="http"||dp(n,"https"),Lm(n)),lz(n.toString(),r)}else On(2);e.H=0,e.l&&e.l.za(t),PA(e),bA(e)}re.pb=function(e){e?(this.j.info("Successfully pinged google.com"),On(2)):(this.j.info("Failed to ping google.com"),On(1))};function PA(e){if(e.H=0,e.pa=[],e.l){const t=_A(e.h);(t.length!=0||e.i.length!=0)&&(uk(e.pa,t),uk(e.pa,e.i),e.h.i.length=0,l_(e.i),e.i.length=0),e.l.ya()}}function MA(e,t,n){var r=n instanceof Fo?Ji(n):new Fo(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),hp(r,r.m);else{var i=Se.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Fo(null,void 0);r&&dp(s,r),t&&(s.g=t),i&&hp(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&gt(r,n,t),gt(r,"VER",e.qa),Ed(e,r),r}function LA(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new kt(new Sd({ob:!0})):new kt(e.va),t.Oa(e.I),t}function $A(){}re=$A.prototype;re.Ba=function(){};re.Aa=function(){};re.za=function(){};re.ya=function(){};re.Va=function(){};function pp(){if(kl&&!(10<=Number(AB)))throw Error("Environmental error: no available transport.")}pp.prototype.g=function(e,t){return new or(e,t)};function or(e,t){Zt.call(this),this.g=new DA(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!lp(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!lp(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ql(this)}tn(or,Zt);or.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;On(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=MA(e,null,e.Y),Bm(e)};or.prototype.close=function(){k_(this.g)};or.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=m_(e),e=n);t.i.push(new iz(t.fb++,e)),t.H==3&&Bm(t)};or.prototype.N=function(){this.g.l=null,delete this.j,k_(this.g),delete this.g,or.$.N.call(this)};function FA(e){w_.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}tn(FA,w_);function UA(){__.call(this),this.status=1}tn(UA,__);function ql(e){this.g=e}tn(ql,$A);ql.prototype.Ba=function(){an(this.g,"a")};ql.prototype.Aa=function(e){an(this.g,new FA(e))};ql.prototype.za=function(e){an(this.g,new UA)};ql.prototype.ya=function(){an(this.g,"b")};function pz(){this.blockSize=-1}function zr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tn(zr,pz);zr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ty(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}zr.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ty(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ty(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ty(this,r),i=0;break}}this.h=i,this.i+=t};zr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function Ke(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var mz={};function b_(e){return-128<=e&&128>e?FI(mz,e,function(t){return new Ke([t|0],0>t?-1:0)}):new Ke([e|0],0>e?-1:0)}function Zr(e){if(isNaN(e)||!isFinite(e))return ol;if(0>e)return sn(Zr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Hv;return new Ke(t,0)}function BA(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return sn(BA(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zr(Math.pow(t,8)),r=ol,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Zr(Math.pow(t,s)),r=r.R(s).add(Zr(o))):(r=r.R(n),r=r.add(Zr(o)))}return r}var Hv=4294967296,ol=b_(0),Gv=b_(1),xk=b_(16777216);re=Ke.prototype;re.ea=function(){if(gr(this))return-sn(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Hv+r)*t,t*=Hv}return e};re.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if($i(this))return"0";if(gr(this))return"-"+sn(this).toString(e);for(var t=Zr(Math.pow(e,6)),n=this,r="";;){var i=gp(n,t).g;n=mp(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,$i(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};re.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function $i(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function gr(e){return e.h==-1}re.X=function(e){return e=mp(this,e),gr(e)?-1:$i(e)?0:1};function sn(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Ke(n,~e.h).add(Gv)}re.abs=function(){return gr(this)?sn(this):this};re.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ke(n,n[n.length-1]&-2147483648?-1:0)};function mp(e,t){return e.add(sn(t))}re.R=function(e){if($i(this)||$i(e))return ol;if(gr(this))return gr(e)?sn(this).R(sn(e)):sn(sn(this).R(e));if(gr(e))return sn(this.R(sn(e)));if(0>this.X(xk)&&0>e.X(xk))return Zr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Nh(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Nh(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Nh(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Nh(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Ke(n,0)};function Nh(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Su(e,t){this.g=e,this.h=t}function gp(e,t){if($i(t))throw Error("division by zero");if($i(e))return new Su(ol,ol);if(gr(e))return t=gp(sn(e),t),new Su(sn(t.g),sn(t.h));if(gr(t))return t=gp(e,sn(t)),new Su(sn(t.g),t.h);if(30<e.g.length){if(gr(e)||gr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Gv,r=t;0>=r.X(e);)n=Sk(n),r=Sk(r);var i=Da(n,1),s=Da(r,1);for(r=Da(r,2),n=Da(n,2);!$i(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Da(r,1),n=Da(n,1)}return t=mp(e,i.R(t)),new Su(i,t)}for(i=ol;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zr(n),o=s.R(t);gr(o)||0<o.X(e);)n-=r,s=Zr(n),o=s.R(t);$i(s)&&(s=Gv),i=i.add(s),e=mp(e,o)}return new Su(i,e)}re.gb=function(e){return gp(this,e).h};re.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Ke(n,this.h&e.h)};re.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Ke(n,this.h|e.h)};re.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Ke(n,this.h^e.h)};function Sk(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Ke(n,e.h)}function Da(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Ke(i,e.h)}pp.prototype.createWebChannel=pp.prototype.g;or.prototype.send=or.prototype.u;or.prototype.open=or.prototype.m;or.prototype.close=or.prototype.close;Rm.NO_ERROR=0;Rm.TIMEOUT=8;Rm.HTTP_ERROR=6;iA.COMPLETE="complete";sA.EventType=wd;wd.OPEN="a";wd.CLOSE="b";wd.ERROR="c";wd.MESSAGE="d";Zt.prototype.listen=Zt.prototype.O;kt.prototype.listenOnce=kt.prototype.P;kt.prototype.getLastError=kt.prototype.Sa;kt.prototype.getLastErrorCode=kt.prototype.Ia;kt.prototype.getStatus=kt.prototype.da;kt.prototype.getResponseJson=kt.prototype.Wa;kt.prototype.getResponseText=kt.prototype.ja;kt.prototype.send=kt.prototype.ha;kt.prototype.setWithCredentials=kt.prototype.Oa;zr.prototype.digest=zr.prototype.l;zr.prototype.reset=zr.prototype.reset;zr.prototype.update=zr.prototype.j;Ke.prototype.add=Ke.prototype.add;Ke.prototype.multiply=Ke.prototype.R;Ke.prototype.modulo=Ke.prototype.gb;Ke.prototype.compare=Ke.prototype.X;Ke.prototype.toNumber=Ke.prototype.ea;Ke.prototype.toString=Ke.prototype.toString;Ke.prototype.getBits=Ke.prototype.D;Ke.fromNumber=Zr;Ke.fromString=BA;var gz=function(){return new pp},yz=function(){return Om()},ny=Rm,vz=iA,wz=ca,Ck={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_z=Sd,Oh=sA,xz=kt,Sz=zr,al=Ke;const Ek="@firebase/firestore";/**
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
 */class pn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pn.UNAUTHENTICATED=new pn(null),pn.GOOGLE_CREDENTIALS=new pn("google-credentials-uid"),pn.FIRST_PARTY=new pn("first-party-uid"),pn.MOCK_USER=new pn("mock-user");/**
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
 */let Kl="9.21.0";/**
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
 */const Zo=new Gw("@firebase/firestore");function kk(){return Zo.logLevel}function ce(e,...t){if(Zo.logLevel<=je.DEBUG){const n=t.map(I_);Zo.debug(`Firestore (${Kl}): ${e}`,...n)}}function Zi(e,...t){if(Zo.logLevel<=je.ERROR){const n=t.map(I_);Zo.error(`Firestore (${Kl}): ${e}`,...n)}}function Tl(e,...t){if(Zo.logLevel<=je.WARN){const n=t.map(I_);Zo.warn(`Firestore (${Kl}): ${e}`,...n)}}function I_(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function xe(e="Unexpected state"){const t=`FIRESTORE (${Kl}) INTERNAL ASSERTION FAILED: `+e;throw Zi(t),new Error(t)}function lt(e,t){e||xe()}function ke(e,t){return e}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends pi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ji{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class zA{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cz{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(pn.UNAUTHENTICATED))}shutdown(){}}class Ez{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kz{constructor(t){this.t=t,this.currentUser=pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ji;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ji,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ji)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string"),new zA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return lt(t===null||typeof t=="string"),new pn(t)}}class Tz{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=pn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Dz{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new Tz(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(pn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bz{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iz{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(lt(typeof n.token=="string"),this.T=n.token,new bz(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Az(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class VA{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Az(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function He(e,t){return e<t?-1:e>t?1:0}function Dl(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Ce{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ce(t)}static min(){return new Ce(new Ht(0,0))}static max(){return new Ce(new Ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fc{constructor(t,n,r){n===void 0?n=0:n>t.length&&xe(),r===void 0?r=t.length-n:r>t.length-n&&xe(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Fc.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Fc?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class yt extends Fc{construct(t,n,r){return new yt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new fe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new yt(n)}static emptyPath(){return new yt([])}}const Nz=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yn extends Fc{construct(t,n,r){return new yn(t,n,r)}static isValidIdentifier(t){return Nz.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yn(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new fe(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new fe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new fe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yn(n)}static emptyPath(){return new yn([])}}/**
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
 */class pe{constructor(t){this.path=t}static fromPath(t){return new pe(yt.fromString(t))}static fromName(t){return new pe(yt.fromString(t).popFirst(5))}static empty(){return new pe(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&yt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return yt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pe(new yt(t.slice()))}}function Oz(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new Ht(n+1,0):new Ht(n,r));return new Zs(i,pe.empty(),t)}function Rz(e){return new Zs(e.readTime,e.key,-1)}class Zs{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Zs(Ce.min(),pe.empty(),-1)}static max(){return new Zs(Ce.max(),pe.empty(),-1)}}function Pz(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=pe.comparator(e.documentKey,t.documentKey),n!==0?n:He(e.largestBatchId,t.largestBatchId))}/**
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
 */const Mz="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lz{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function kd(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==Mz)throw e;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&xe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,r)=>{n(t)})}static reject(t){return new Q((n,r)=>{r(t)})}static waitFor(t){return new Q((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=Q.resolve(!1);for(const r of t)n=n.next(i=>i?Q.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new Q((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new Q((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Td(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class A_{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}A_.ct=-1;function zm(e){return e==null}function yp(e){return e===0&&1/e==-1/0}function $z(e){return typeof e=="number"&&Number.isInteger(e)&&!yp(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tk(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function da(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function jA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class St{constructor(t,n){this.comparator=t,this.root=n||rn.EMPTY}insert(t,n){return new St(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,rn.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rh(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rh(this.root,t,this.comparator,!0)}}class Rh{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rn{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:rn.RED,this.left=i!=null?i:rn.EMPTY,this.right=s!=null?s:rn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new rn(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return rn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw xe();const t=this.left.check();if(t!==this.right.check())throw xe();return t+(this.isRed()?0:1)}}rn.EMPTY=null,rn.RED=!0,rn.BLACK=!1;rn.EMPTY=new class{constructor(){this.size=0}get key(){throw xe()}get value(){throw xe()}get color(){throw xe()}get left(){throw xe()}get right(){throw xe()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _n{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dk(this.data.getIterator())}getIteratorFrom(t){return new Dk(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new _n(this.comparator);return n.data=t,n}}class Dk{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tr{constructor(t){this.fields=t,t.sort(yn.comparator)}static empty(){return new tr([])}unionWith(t){let n=new _n(yn.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new tr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Dl(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class YA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class En{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new YA("Invalid base64 string: "+i):i}}(t);return new En(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new En(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return He(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}En.EMPTY_BYTE_STRING=new En("");const Fz=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eo(e){if(lt(!!e),typeof e=="string"){let t=0;const n=Fz.exec(e);if(lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Mt(e.seconds),nanos:Mt(e.nanos)}}function Mt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ea(e){return typeof e=="string"?En.fromBase64String(e):En.fromUint8Array(e)}/**
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
 */function N_(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function O_(e){const t=e.mapValue.fields.__previous_value__;return N_(t)?O_(t):t}function Uc(e){const t=eo(e.mapValue.fields.__local_write_time__.timestampValue);return new Ht(t.seconds,t.nanos)}/**
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
 */class Uz{constructor(t,n,r,i,s,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Bc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Bc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Bc&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ph={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ta(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?N_(e)?4:Bz(e)?9007199254740991:10:xe()}function li(e,t){if(e===t)return!0;const n=ta(e);if(n!==ta(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Uc(e).isEqual(Uc(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=eo(r.timestampValue),o=eo(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return ea(r.bytesValue).isEqual(ea(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Mt(r.geoPointValue.latitude)===Mt(i.geoPointValue.latitude)&&Mt(r.geoPointValue.longitude)===Mt(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Mt(r.integerValue)===Mt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Mt(r.doubleValue),o=Mt(i.doubleValue);return s===o?yp(s)===yp(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return Dl(e.arrayValue.values||[],t.arrayValue.values||[],li);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Tk(s)!==Tk(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!li(s[a],o[a])))return!1;return!0}(e,t);default:return xe()}}function zc(e,t){return(e.values||[]).find(n=>li(n,t))!==void 0}function bl(e,t){if(e===t)return 0;const n=ta(e),r=ta(t);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Mt(i.integerValue||i.doubleValue),a=Mt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return bk(e.timestampValue,t.timestampValue);case 4:return bk(Uc(e),Uc(t));case 5:return He(e.stringValue,t.stringValue);case 6:return function(i,s){const o=ea(i),a=ea(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=He(o[u],a[u]);if(c!==0)return c}return He(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=He(Mt(i.latitude),Mt(s.latitude));return o!==0?o:He(Mt(i.longitude),Mt(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=bl(o[u],a[u]);if(c)return c}return He(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===Ph.mapValue&&s===Ph.mapValue)return 0;if(i===Ph.mapValue)return 1;if(s===Ph.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const p=He(a[h],c[h]);if(p!==0)return p;const m=bl(o[a[h]],u[c[h]]);if(m!==0)return m}return He(a.length,c.length)}(e.mapValue,t.mapValue);default:throw xe()}}function bk(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return He(e,t);const n=eo(e),r=eo(t),i=He(n.seconds,r.seconds);return i!==0?i:He(n.nanos,r.nanos)}function Il(e){return qv(e)}function qv(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=eo(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ea(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,pe.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=qv(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${qv(r.fields[a])}`;return s+"}"}(e.mapValue):xe();var t,n}function Kv(e){return!!e&&"integerValue"in e}function R_(e){return!!e&&"arrayValue"in e}function Ik(e){return!!e&&"nullValue"in e}function Ak(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function of(e){return!!e&&"mapValue"in e}function Xu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return da(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Xu(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Bz(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Un{constructor(t){this.value=t}static empty(){return new Un({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!of(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xu(n)}setAll(t){let n=yn.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());of(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return li(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];of(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){da(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Un(Xu(this.value))}}function WA(e){const t=[];return da(e.fields,(n,r)=>{const i=new yn([n]);if(of(r)){const s=WA(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new tr(t)}/**
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
 */class gn{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new gn(t,0,Ce.min(),Ce.min(),Ce.min(),Un.empty(),0)}static newFoundDocument(t,n,r,i){return new gn(t,1,n,Ce.min(),r,i,0)}static newNoDocument(t,n){return new gn(t,2,n,Ce.min(),Ce.min(),Un.empty(),0)}static newUnknownDocument(t,n){return new gn(t,3,n,Ce.min(),Ce.min(),Un.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vp{constructor(t,n){this.position=t,this.inclusive=n}}function Nk(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=pe.comparator(pe.fromName(o.referenceValue),n.key):r=bl(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ok(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!li(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ju{constructor(t,n="asc"){this.field=t,this.dir=n}}function zz(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class HA{}class jt extends HA{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new jz(t,n,r):n==="array-contains"?new Hz(t,r):n==="in"?new Gz(t,r):n==="not-in"?new qz(t,r):n==="array-contains-any"?new Kz(t,r):new jt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Yz(t,r):new Wz(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bl(n,this.value)):n!==null&&ta(this.value)===ta(n)&&this.matchesComparison(bl(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return xe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ui extends HA{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new ui(t,n)}matches(t){return GA(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function GA(e){return e.op==="and"}function qA(e){return Vz(e)&&GA(e)}function Vz(e){for(const t of e.filters)if(t instanceof ui)return!1;return!0}function Qv(e){if(e instanceof jt)return e.field.canonicalString()+e.op.toString()+Il(e.value);if(qA(e))return e.filters.map(t=>Qv(t)).join(",");{const t=e.filters.map(n=>Qv(n)).join(",");return`${e.op}(${t})`}}function KA(e,t){return e instanceof jt?function(n,r){return r instanceof jt&&n.op===r.op&&n.field.isEqual(r.field)&&li(n.value,r.value)}(e,t):e instanceof ui?function(n,r){return r instanceof ui&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&KA(s,r.filters[o]),!0):!1}(e,t):void xe()}function QA(e){return e instanceof jt?function(t){return`${t.field.canonicalString()} ${t.op} ${Il(t.value)}`}(e):e instanceof ui?function(t){return t.op.toString()+" {"+t.getFilters().map(QA).join(" ,")+"}"}(e):"Filter"}class jz extends jt{constructor(t,n,r){super(t,n,r),this.key=pe.fromName(r.referenceValue)}matches(t){const n=pe.comparator(t.key,this.key);return this.matchesComparison(n)}}class Yz extends jt{constructor(t,n){super(t,"in",n),this.keys=XA("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Wz extends jt{constructor(t,n){super(t,"not-in",n),this.keys=XA("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function XA(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class Hz extends jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return R_(n)&&zc(n.arrayValue,this.value)}}class Gz extends jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&zc(this.value.arrayValue,n)}}class qz extends jt{constructor(t,n){super(t,"not-in",n)}matches(t){if(zc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!zc(this.value.arrayValue,n)}}class Kz extends jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!R_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zc(this.value.arrayValue,r))}}/**
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
 */class Qz{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Rk(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Qz(e,t,n,r,i,s,o)}function P_(e){const t=ke(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Qv(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),zm(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Il(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Il(r)).join(",")),t.ft=n}return t.ft}function M_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zz(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!KA(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ok(e.startAt,t.startAt)&&Ok(e.endAt,t.endAt)}function Xv(e){return pe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Vm{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Xz(e,t,n,r,i,s,o,a){return new Vm(e,t,n,r,i,s,o,a)}function L_(e){return new Vm(e)}function Pk(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Jz(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Zz(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function eV(e){return e.collectionGroup!==null}function ll(e){const t=ke(e);if(t.dt===null){t.dt=[];const n=Zz(t),r=Jz(t);if(n!==null&&r===null)n.isKeyField()||t.dt.push(new Ju(n)),t.dt.push(new Ju(yn.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ju(yn.keyField(),s))}}}return t.dt}function es(e){const t=ke(e);if(!t._t)if(t.limitType==="F")t._t=Rk(t.path,t.collectionGroup,ll(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of ll(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ju(s.field,o))}const r=t.endAt?new vp(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new vp(t.startAt.position,t.startAt.inclusive):null;t._t=Rk(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t._t}function Jv(e,t,n){return new Vm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function jm(e,t){return M_(es(e),es(t))&&e.limitType===t.limitType}function JA(e){return`${P_(es(e))}|lt:${e.limitType}`}function Zv(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>QA(r)).join(", ")}]`),zm(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Il(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Il(r)).join(",")),`Target(${n})`}(es(e))}; limitType=${e.limitType})`}function Ym(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):pe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of ll(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Nk(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ll(n),r)||n.endAt&&!function(i,s,o){const a=Nk(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ll(n),r))}(e,t)}function tV(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ZA(e){return(t,n)=>{let r=!1;for(const i of ll(e)){const s=nV(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nV(e,t,n){const r=e.field.isKeyField()?pe.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?bl(a,u):xe()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return xe()}}/**
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
 */class Ql{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){da(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return jA(this.inner)}size(){return this.innerSize}}/**
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
 */const rV=new St(pe.comparator);function ts(){return rV}const eN=new St(pe.comparator);function Lu(...e){let t=eN;for(const n of e)t=t.insert(n.key,n);return t}function tN(e){let t=eN;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ro(){return Zu()}function nN(){return Zu()}function Zu(){return new Ql(e=>e.toString(),(e,t)=>e.isEqual(t))}const iV=new St(pe.comparator),sV=new _n(pe.comparator);function Pe(...e){let t=sV;for(const n of e)t=t.add(n);return t}const oV=new _n(He);function aV(){return oV}/**
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
 */function rN(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yp(t)?"-0":t}}function iN(e){return{integerValue:""+e}}function sN(e,t){return $z(t)?iN(t):rN(e,t)}/**
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
 */class Wm{constructor(){this._=void 0}}function lV(e,t,n){return e instanceof wp?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&N_(i)&&(i=O_(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof Vc?aN(e,t):e instanceof jc?lN(e,t):function(r,i){const s=oN(r,i),o=Mk(s)+Mk(r.wt);return Kv(s)&&Kv(r.wt)?iN(o):rN(r.serializer,o)}(e,t)}function uV(e,t,n){return e instanceof Vc?aN(e,t):e instanceof jc?lN(e,t):n}function oN(e,t){return e instanceof Yc?Kv(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class wp extends Wm{}class Vc extends Wm{constructor(t){super(),this.elements=t}}function aN(e,t){const n=uN(t);for(const r of e.elements)n.some(i=>li(i,r))||n.push(r);return{arrayValue:{values:n}}}class jc extends Wm{constructor(t){super(),this.elements=t}}function lN(e,t){let n=uN(t);for(const r of e.elements)n=n.filter(i=>!li(i,r));return{arrayValue:{values:n}}}class Yc extends Wm{constructor(t,n){super(),this.serializer=t,this.wt=n}}function Mk(e){return Mt(e.integerValue||e.doubleValue)}function uN(e){return R_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class cV{constructor(t,n){this.field=t,this.transform=n}}function dV(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Vc&&r instanceof Vc||n instanceof jc&&r instanceof jc?Dl(n.elements,r.elements,li):n instanceof Yc&&r instanceof Yc?li(n.wt,r.wt):n instanceof wp&&r instanceof wp}(e.transform,t.transform)}class hV{constructor(t,n){this.version=t,this.transformResults=n}}class Ur{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ur}static exists(t){return new Ur(void 0,t)}static updateTime(t){return new Ur(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function af(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hm{}function cN(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new hN(e.key,Ur.none()):new Dd(e.key,e.data,Ur.none());{const n=e.data,r=Un.empty();let i=new _n(yn.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ho(e.key,r,new tr(i.toArray()),Ur.none())}}function fV(e,t,n){e instanceof Dd?function(r,i,s){const o=r.value.clone(),a=$k(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ho?function(r,i,s){if(!af(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=$k(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(dN(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function ec(e,t,n,r){return e instanceof Dd?function(i,s,o,a){if(!af(i.precondition,s))return o;const u=i.value.clone(),c=Fk(i.fieldTransforms,a,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ho?function(i,s,o,a){if(!af(i.precondition,s))return o;const u=Fk(i.fieldTransforms,a,s),c=s.data;return c.setAll(dN(i)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,s,o){return af(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function pV(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=oN(r.transform,i||null);s!=null&&(n===null&&(n=Un.empty()),n.set(r.field,s))}return n||null}function Lk(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Dl(n,r,(i,s)=>dV(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Dd extends Hm{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ho extends Hm{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dN(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function $k(e,t,n){const r=new Map;lt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,uV(o,a,n[i]))}return r}function Fk(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,lV(s,o,t))}return r}class hN extends Hm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mV extends Hm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gV{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&fV(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ec(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ec(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=nN();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=cN(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pe())}isEqual(t){return this.batchId===t.batchId&&Dl(this.mutations,t.mutations,(n,r)=>Lk(n,r))&&Dl(this.baseMutations,t.baseMutations,(n,r)=>Lk(n,r))}}class $_{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){lt(t.mutations.length===r.length);let i=iV;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $_(t,n,r,i)}}/**
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
 */class yV{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class vV{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Pt,Fe;function wV(e){switch(e){default:return xe();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function fN(e){if(e===void 0)return Zi("GRPC error has no .code"),H.UNKNOWN;switch(e){case Pt.OK:return H.OK;case Pt.CANCELLED:return H.CANCELLED;case Pt.UNKNOWN:return H.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return H.INTERNAL;case Pt.UNAVAILABLE:return H.UNAVAILABLE;case Pt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Pt.NOT_FOUND:return H.NOT_FOUND;case Pt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Pt.ABORTED:return H.ABORTED;case Pt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Pt.DATA_LOSS:return H.DATA_LOSS;default:return xe()}}(Fe=Pt||(Pt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class F_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Mh}static getOrCreateInstance(){return Mh===null&&(Mh=new F_),Mh}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Mh=null;/**
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
 */function _V(){return new TextEncoder}/**
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
 */const xV=new al([4294967295,4294967295],0);function Uk(e){const t=_V().encode(e),n=new Sz;return n.update(t),new Uint8Array(n.digest())}function Bk(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new al([n,r],0),new al([i,s],0)]}class U_{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $u(`Invalid padding: ${n}`);if(r<0)throw new $u(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new $u(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new $u(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=al.fromNumber(this.yt)}Tt(t,n,r){let i=t.add(n.multiply(al.fromNumber(r)));return i.compare(xV)===1&&(i=new al([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=Uk(t),[r,i]=Bk(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new U_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=Uk(t),[r,i]=Bk(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class $u extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gm{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,bd.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Gm(Ce.min(),i,new St(He),ts(),Pe())}}class bd{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new bd(r,n,Pe(),Pe(),Pe())}}/**
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
 */class lf{constructor(t,n,r,i){this.vt=t,this.removedTargetIds=n,this.key=r,this.Pt=i}}class pN{constructor(t,n){this.targetId=t,this.bt=n}}class mN{constructor(t,n,r=En.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zk{constructor(){this.Vt=0,this.St=jk(),this.Dt=En.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Pe(),n=Pe(),r=Pe();return this.St.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:xe()}}),new bd(this.Dt,this.Ct,t,n,r)}$t(){this.xt=!1,this.St=jk()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class SV{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=ts(),this.jt=Vk(),this.zt=new St(He)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const r=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&r.Mt(t.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(t.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(t.resumeToken));break;default:xe()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(t){var n;const r=t.targetId,i=t.bt.count,s=this.ne(r);if(s){const o=s.target;if(Xv(o))if(i===0){const a=new pe(o.path);this.Jt(r,a,gn.newNoDocument(a,Ce.min()))}else lt(i===1);else{const a=this.se(r);if(a!==i){const u=this.ie(t,a);if(u!==0){this.te(r);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=F_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,h,p){var m,x,v,_,k,S;const y={localCacheCount:h,existenceFilterCount:p.count},C=p.unchangedNames;return C&&(y.bloomFilter={applied:c===0,hashCount:(m=C==null?void 0:C.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(_=(v=(x=C==null?void 0:C.bits)===null||x===void 0?void 0:x.bitmap)===null||v===void 0?void 0:v.length)!==null&&_!==void 0?_:0,padding:(S=(k=C==null?void 0:C.bits)===null||k===void 0?void 0:k.padding)!==null&&S!==void 0?S:0}),y}(u,a,t.bt))}}}}ie(t,n){const{unchangedNames:r,count:i}=t.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,c;try{u=ea(s).toUint8Array()}catch(h){if(h instanceof YA)return Tl("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new U_(u,o,a)}catch(h){return Tl(h instanceof $u?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.yt===0?1:i!==n-this.re(t.targetId,c)?2:0}re(t,n){const r=this.Kt.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(t,s,null),i++)}),i}ue(t){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Xv(a.target)){const u=new pe(a.target.path);this.Qt.get(u)!==null||this.ce(o,u)||this.Jt(o,u,gn.newNoDocument(u,t))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Pe();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ne(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(t));const i=new Gm(t,n,this.zt,this.Qt,r);return this.Qt=ts(),this.jt=Vk(),this.zt=new St(He),i}Ht(t,n){if(!this.Zt(t))return;const r=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,r){if(!this.Zt(t))return;const i=this.Xt(t);this.ce(t,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new zk,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new _n(He),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new zk),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function Vk(){return new St(pe.comparator)}function jk(){return new St(pe.comparator)}const CV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),EV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kV=(()=>({and:"AND",or:"OR"}))();class TV{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function e1(e,t){return e.useProto3Json||zm(t)?t:{value:t}}function _p(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gN(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function DV(e,t){return _p(e,t.toTimestamp())}function ai(e){return lt(!!e),Ce.fromTimestamp(function(t){const n=eo(t);return new Ht(n.seconds,n.nanos)}(e))}function B_(e,t){return function(n){return new yt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function yN(e){const t=yt.fromString(e);return lt(xN(t)),t}function t1(e,t){return B_(e.databaseId,t.path)}function ry(e,t){const n=yN(t);if(n.get(1)!==e.databaseId.projectId)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new pe(vN(n))}function n1(e,t){return B_(e.databaseId,t)}function bV(e){const t=yN(e);return t.length===4?yt.emptyPath():vN(t)}function r1(e){return new yt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function vN(e){return lt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Yk(e,t,n){return{name:t1(e,t),fields:n.value.mapValue.fields}}function IV(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:xe()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(lt(c===void 0||typeof c=="string"),En.fromBase64String(c||"")):(lt(c===void 0||c instanceof Uint8Array),En.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?H.UNKNOWN:fN(u.code);return new fe(c,u.message||"")}(o);n=new mN(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ry(e,r.document.name),s=ai(r.document.updateTime),o=r.document.createTime?ai(r.document.createTime):Ce.min(),a=new Un({mapValue:{fields:r.document.fields}}),u=gn.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new lf(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ry(e,r.document),s=r.readTime?ai(r.readTime):Ce.min(),o=gn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new lf([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ry(e,r.document),s=r.removedTargetIds||[];n=new lf([],s,i,null)}else{if(!("filter"in t))return xe();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vV(i,s),a=r.targetId;n=new pN(a,o)}}return n}function AV(e,t){let n;if(t instanceof Dd)n={update:Yk(e,t.key,t.value)};else if(t instanceof hN)n={delete:t1(e,t.key)};else if(t instanceof ho)n={update:Yk(e,t.key,t.data),updateMask:UV(t.fieldMask)};else{if(!(t instanceof mV))return xe();n={verify:t1(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof wp)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof jc)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yc)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw xe()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:DV(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:xe()}(e,t.precondition)),n}function NV(e,t){return e&&e.length>0?(lt(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?ai(r.updateTime):ai(i);return s.isEqual(Ce.min())&&(s=ai(i)),new hV(s,r.transformResults||[])}(n,t))):[]}function OV(e,t){return{documents:[n1(e,t.path)]}}function RV(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=n1(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=n1(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return _N(ui.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Ia(h.field),direction:LV(h.dir)}}(c))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=e1(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function PV(e){let t=bV(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lt(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(h){const p=wN(h);return p instanceof ui&&qA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(p){return new Ju(Aa(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(h)));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,zm(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(h){const p=!!h.before,m=h.values||[];return new vp(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,m=h.values||[];return new vp(m,p)}(n.endAt)),Xz(t,i,o,s,a,"F",u,c)}function MV(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function wN(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Aa(t.unaryFilter.field);return jt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Aa(t.unaryFilter.field);return jt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Aa(t.unaryFilter.field);return jt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Aa(t.unaryFilter.field);return jt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return xe()}}(e):e.fieldFilter!==void 0?function(t){return jt.create(Aa(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xe()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ui.create(t.compositeFilter.filters.map(n=>wN(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return xe()}}(t.compositeFilter.op))}(e):xe()}function LV(e){return CV[e]}function $V(e){return EV[e]}function FV(e){return kV[e]}function Ia(e){return{fieldPath:e.canonicalString()}}function Aa(e){return yn.fromServerFormat(e.fieldPath)}function _N(e){return e instanceof jt?function(t){if(t.op==="=="){if(Ak(t.value))return{unaryFilter:{field:Ia(t.field),op:"IS_NAN"}};if(Ik(t.value))return{unaryFilter:{field:Ia(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ak(t.value))return{unaryFilter:{field:Ia(t.field),op:"IS_NOT_NAN"}};if(Ik(t.value))return{unaryFilter:{field:Ia(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ia(t.field),op:$V(t.op),value:t.value}}}(e):e instanceof ui?function(t){const n=t.getFilters().map(r=>_N(r));return n.length===1?n[0]:{compositeFilter:{op:FV(t.op),filters:n}}}(e):xe()}function UV(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function xN(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Ds{constructor(t,n,r,i,s=Ce.min(),o=Ce.min(),a=En.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Ds(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class BV{constructor(t){this.le=t}}function zV(e){const t=PV({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Jv(t,t.limit,"L"):t}/**
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
 */class VV{constructor(){this.sn=new jV}addToCollectionParentIndex(t,n){return this.sn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(Zs.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(Zs.min())}updateCollectionGroup(t,n,r){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class jV{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new _n(yt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new _n(yt.comparator)).toArray()}}/**
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
 */class Al{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new Al(0)}static kn(){return new Al(-1)}}/**
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
 */class YV{constructor(){this.changes=new Ql(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,gn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class WV{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class HV{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&ec(r.mutation,i,tr.empty(),Ht.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Pe()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Pe()){const i=Ro();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Lu();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ro();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Pe()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=ts();const o=Zu(),a=Zu();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ho)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ec(h.mutation,c,h.mutation.getFieldMask(),Ht.now())):o.set(c.key,tr.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new WV(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Zu();let i=new St((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||tr.empty();h=a.applyToLocalView(c,h),r.set(u,h);const p=(i.get(a.batchId)||Pe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=nN();h.forEach(m=>{if(!s.has(m)){const x=cN(n.get(m),r.get(m));x!==null&&p.set(m,x),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,p))}return Q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):eV(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):Q.resolve(Ro());let a=-1,u=s;return o.next(c=>Q.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?Q.resolve():this.remoteDocumentCache.getEntry(t,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,Pe())).next(h=>({batchId:a,changes:tN(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pe(n)).next(r=>{let i=Lu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Lu();return this.indexManager.getCollectionParents(t,i).next(o=>Q.forEach(o,a=>{const u=function(c,h){return new Vm(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(c=>{c.forEach((h,p)=>{s=s.insert(h,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,gn.newInvalidDocument(c)))});let o=Lu();return s.forEach((a,u)=>{const c=i.get(a);c!==void 0&&ec(c.mutation,u,tr.empty(),Ht.now()),Ym(n,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class GV{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return Q.resolve(this.us.get(n))}saveBundleMetadata(t,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:ai(r.createTime)}),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(r){return{name:r.name,query:zV(r.bundledQuery),readTime:ai(r.readTime)}}(n)),Q.resolve()}}/**
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
 */class qV{constructor(){this.overlays=new St(pe.comparator),this.hs=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ro();return Q.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.de(t,n,s)}),Q.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),Q.resolve()}getOverlaysForCollection(t,n,r){const i=Ro(),s=n.length+1,o=new pe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return Q.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new St((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ro(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ro(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return Q.resolve(a)}de(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yV(n,r));let s=this.hs.get(n);s===void 0&&(s=Pe(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class z_{constructor(){this.ls=new _n(Kt.fs),this.ds=new _n(Kt._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const r=new Kt(t,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.gs(new Kt(t,n))}ys(t,n){t.forEach(r=>this.removeReference(r,n))}ps(t){const n=new pe(new yt([])),r=new Kt(n,t),i=new Kt(n,t+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new pe(new yt([])),r=new Kt(n,t),i=new Kt(n,t+1);let s=Pe();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Kt(t,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Kt{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return pe.comparator(t.key,n.key)||He(t.Es,n.Es)}static _s(t,n){return He(t.Es,n.Es)||pe.comparator(t.key,n.key)}}/**
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
 */class KV{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new _n(Kt.fs)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Kt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(t,n){return Q.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Kt(n,0),i=new Kt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new _n(He);return n.forEach(i=>{const s=new Kt(i,0),o=new Kt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),Q.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;pe.isDocumentKey(s)||(s=s.child(""));const o=new Kt(new pe(s),0);let a=new _n(He);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Es)),!0)},o),Q.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){lt(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return Q.forEach(n.mutations,i=>{const s=new Kt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=r})}Dn(t){}containsKey(t,n){const r=new Kt(n,0),i=this.Rs.firstAfterOrEqual(r);return Q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QV{constructor(t){this.Ss=t,this.docs=new St(pe.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():gn.newInvalidDocument(n))}getEntries(t,n){let r=ts();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gn.newInvalidDocument(i))}),Q.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=ts();const o=n.path,a=new pe(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Pz(Rz(h),r)<=0||(i.has(h.key)||Ym(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(t,n,r,i){xe()}Ds(t,n){return Q.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new XV(this)}getSize(t){return Q.resolve(this.size)}}class XV extends YV{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(t,i)):this.rs.removeEntry(r)}),Q.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
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
 */class JV{constructor(t){this.persistence=t,this.Cs=new Ql(n=>P_(n),M_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.xs=0,this.Ns=new z_,this.targetCount=0,this.ks=Al.Nn()}forEachTarget(t,n){return this.Cs.forEach((r,i)=>n(i)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),Q.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new Al(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.$n(n),Q.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),Q.waitFor(s).next(()=>i)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cs.get(n)||null;return Q.resolve(r)}addMatchingKeys(t,n,r){return this.Ns.ws(n,r),Q.resolve()}removeMatchingKeys(t,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ns.Ts(n);return Q.resolve(r)}containsKey(t,n){return Q.resolve(this.Ns.containsKey(n))}}/**
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
 */class ZV{constructor(t,n){this.Ms={},this.overlays={},this.Os=new A_(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new JV(this),this.indexManager=new VV,this.remoteDocumentCache=function(r){return new QV(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new BV(n),this.Ls=new GV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new qV,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Ms[t.toKey()];return r||(r=new KV(n,this.referenceDelegate),this.Ms[t.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,r){ce("MemoryPersistence","Starting transaction:",t);const i=new ej(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(t,n){return Q.or(Object.values(this.Ms).map(r=>()=>r.containsKey(t,n)))}}class ej extends Lz{constructor(t){super(),this.currentSequenceNumber=t}}class V_{constructor(t){this.persistence=t,this.Gs=new z_,this.Qs=null}static js(t){return new V_(t)}get zs(){if(this.Qs)return this.Qs;throw xe()}addReference(t,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),Q.resolve()}removeReference(t,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.zs,r=>{const i=pe.fromPath(r);return this.Ws(t,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return Q.or([()=>Q.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
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
 */class j_{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(t,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new j_(t,n.fromCache,r,i)}}/**
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
 */class tj{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Ki(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(Pk(n))return Q.resolve(null);let r=es(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jv(n,null,"F"),r=es(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Pe(...s);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Qi(n,a);return this.ji(n,c,o,u.readTime)?this.Ui(t,Jv(n,null,"F")):this.zi(t,c,n,u)}))})))}Ki(t,n,r,i){return Pk(n)||i.isEqual(Ce.min())?this.Gi(t,n):this.qi.getDocuments(t,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(kk()<=je.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zv(n)),this.zi(t,o,n,Oz(i,-1)))})}Qi(t,n){let r=new _n(ZA(t));return n.forEach((i,s)=>{Ym(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return kk()<=je.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Zv(n)),this.qi.getDocumentsMatchingQuery(t,n,Zs.min())}zi(t,n,r,i){return this.qi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class nj{constructor(t,n,r,i){this.persistence=t,this.Wi=n,this.serializer=i,this.Hi=new St(He),this.Ji=new Ql(s=>P_(s),M_),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(r)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new HV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function rj(e,t,n,r){return new nj(e,t,n,r)}async function SN(e,t){const n=ke(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Pe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function ij(e,t){const n=ke(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,p=h.keys();let m=Q.resolve();return p.forEach(x=>{m=m.next(()=>c.getEntry(a,x)).next(v=>{const _=u.docVersions.get(x);lt(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Pe();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function CN(e){const t=ke(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function sj(e,t){const n=ke(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];t.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;a.push(n.Fs.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Fs.addMatchingKeys(s,h.addedDocuments,p)));let x=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(p)!==null?x=x.withResumeToken(En.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):h.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(h.resumeToken,r)),i=i.insert(p,x),function(v,_,k){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,x,h)&&a.push(n.Fs.updateTargetData(s,x))});let u=ts(),c=Pe();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(oj(s,o,t.documentUpdates).next(h=>{u=h.er,c=h.nr})),!r.isEqual(Ce.min())){const h=n.Fs.getLastRemoteSnapshotVersion(s).next(p=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return Q.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Hi=i,s))}function oj(e,t,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=ts();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Ce.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):ce("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{er:o,nr:i}})}function aj(e,t){const n=ke(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function lj(e,t){const n=ke(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,t).next(s=>s?(i=s,Q.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Ds(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(t,r.targetId)),r})}async function i1(e,t,n){const r=ke(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Td(o))throw o;ce("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function Wk(e,t,n){const r=ke(e);let i=Ce.min(),s=Pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=ke(a),p=h.Ji.get(c);return p!==void 0?Q.resolve(h.Hi.get(p)):h.Fs.getTargetData(u,c)}(r,o,es(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,t,n?i:Ce.min(),n?s:Pe())).next(a=>(uj(r,tV(t),a),{documents:a,sr:s})))}function uj(e,t,n){let r=e.Yi.get(t)||Ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Yi.set(t,r)}class Hk{constructor(){this.activeTargetIds=aV()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cj{constructor(){this.Wr=new Hk,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,r){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new Hk,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class dj{Jr(t){}shutdown(){}}/**
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
 */class Gk{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lh=null;function iy(){return Lh===null?Lh=268435456+Math.round(2147483648*Math.random()):Lh++,"0x"+Lh.toString(16)}/**
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
 */const hj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fj{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
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
 */const hn="WebChannelConnection";class pj extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,r,i,s){const o=iy(),a=this.Io(t,n);ce("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const u={};return this.To(u,i,s),this.Eo(t,a,u,r).then(c=>(ce("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw Tl("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(t,n,r,i,s,o){return this.po(t,n,r,i,s)}To(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Kl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}Io(t,n){const r=hj[t];return`${this.wo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,r,i){const s=iy();return new Promise((o,a)=>{const u=new xz;u.setWithCredentials(!0),u.listenOnce(vz.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ny.NO_ERROR:const h=u.getResponseJson();ce(hn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case ny.TIMEOUT:ce(hn,`RPC '${t}' ${s} timed out`),a(new fe(H.DEADLINE_EXCEEDED,"Request time out"));break;case ny.HTTP_ERROR:const p=u.getStatus();if(ce(hn,`RPC '${t}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const x=m==null?void 0:m.error;if(x&&x.status&&x.message){const v=function(_){const k=_.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(k)>=0?k:H.UNKNOWN}(x.status);a(new fe(v,x.message))}else a(new fe(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new fe(H.UNAVAILABLE,"Connection failed."));break;default:xe()}}finally{ce(hn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);ce(hn,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Ro(t,n,r){const i=iy(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=gz(),a=yz(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new _z({})),this.To(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");ce(hn,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let p=!1,m=!1;const x=new fj({io:_=>{m?ce(hn,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(p||(ce(hn,`Opening RPC '${t}' stream ${i} transport.`),h.open(),p=!0),ce(hn,`RPC '${t}' stream ${i} sending:`,_),h.send(_))},ro:()=>h.close()}),v=(_,k,S)=>{_.listen(k,y=>{try{S(y)}catch(C){setTimeout(()=>{throw C},0)}})};return v(h,Oh.EventType.OPEN,()=>{m||ce(hn,`RPC '${t}' stream ${i} transport opened.`)}),v(h,Oh.EventType.CLOSE,()=>{m||(m=!0,ce(hn,`RPC '${t}' stream ${i} transport closed`),x.fo())}),v(h,Oh.EventType.ERROR,_=>{m||(m=!0,Tl(hn,`RPC '${t}' stream ${i} transport errored:`,_),x.fo(new fe(H.UNAVAILABLE,"The operation could not be completed")))}),v(h,Oh.EventType.MESSAGE,_=>{var k;if(!m){const S=_.data[0];lt(!!S);const y=S,C=y.error||((k=y[0])===null||k===void 0?void 0:k.error);if(C){ce(hn,`RPC '${t}' stream ${i} received error:`,C);const T=C.status;let I=function(A){const O=Pt[A];if(O!==void 0)return fN(O)}(T),P=C.message;I===void 0&&(I=H.INTERNAL,P="Unknown error status: "+T+" with message "+C.message),m=!0,x.fo(new fe(I,P)),h.close()}else ce(hn,`RPC '${t}' stream ${i} received:`,S),x._o(S)}}),v(a,wz.STAT_EVENT,_=>{_.stat===Ck.PROXY?ce(hn,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===Ck.NOPROXY&&ce(hn,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.lo()},0),x}}function sy(){return typeof document!="undefined"?document:null}/**
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
 */function qm(e){return new TV(e,!0)}/**
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
 */class EN{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&ce("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class kN{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new EN(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Zi(n.toString()),Zi("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{t(()=>{const i=new fe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(t,n){const r=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return ce("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mj extends kN{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=IV(this.serializer,t),r=function(i){if(!("targetChange"in i))return Ce.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Ce.min():s.readTime?ai(s.readTime):Ce.min()}(t);return this.listener.eu(n,r)}nu(t){const n={};n.database=r1(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Xv(a)?{documents:OV(i,a)}:{query:RV(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=gN(i,s.resumeToken);const u=e1(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo(Ce.min())>0){o.readTime=_p(i,s.snapshotVersion.toTimestamp());const u=e1(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const r=MV(this.serializer,t);r&&(n.labels=r),this.zo(n)}su(t){const n={};n.database=r1(this.serializer),n.removeTarget=t,this.zo(n)}}class gj extends kN{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(lt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const n=NV(t.writeResults,t.commitTime),r=ai(t.commitTime);return this.listener.uu(r,n)}return lt(!t.writeResults||t.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const t={};t.database=r1(this.serializer),this.zo(t)}ou(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>AV(this.serializer,r))};this.zo(n)}}/**
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
 */class yj extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new fe(H.UNKNOWN,i.toString())})}Ao(t,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new fe(H.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class vj{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Zi(n),this.wu=!1):ce("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class wj{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{ha(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=ke(a);u.Au.add(4),await Id(u),u.Pu.set("Unknown"),u.Au.delete(4),await Km(u)}(this))})}),this.Pu=new vj(r,i)}}async function Km(e){if(ha(e))for(const t of e.Ru)await t(!0)}async function Id(e){for(const t of e.Ru)await t(!1)}function TN(e,t){const n=ke(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),H_(n)?W_(n):Xl(n).Uo()&&Y_(n,t))}function DN(e,t){const n=ke(e),r=Xl(n);n.Eu.delete(t),r.Uo()&&bN(n,t),n.Eu.size===0&&(r.Uo()?r.Qo():ha(n)&&n.Pu.set("Unknown"))}function Y_(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ce.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Xl(e).nu(t)}function bN(e,t){e.bu.Lt(t),Xl(e).su(t)}function W_(e){e.bu=new SV({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Xl(e).start(),e.Pu.mu()}function H_(e){return ha(e)&&!Xl(e).qo()&&e.Eu.size>0}function ha(e){return ke(e).Au.size===0}function IN(e){e.bu=void 0}async function _j(e){e.Eu.forEach((t,n)=>{Y_(e,t)})}async function xj(e,t){IN(e),H_(e)?(e.Pu.pu(t),W_(e)):e.Pu.set("Unknown")}async function Sj(e,t,n){if(e.Pu.set("Online"),t instanceof mN&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(e,t)}catch(r){ce("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await xp(e,r)}else if(t instanceof lf?e.bu.Wt(t):t instanceof pN?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Ce.min()))try{const r=await CN(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(u);c&&i.Eu.set(u,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(En.EMPTY_BYTE_STRING,c.snapshotVersion)),bN(i,a);const h=new Ds(c.target,a,u,c.sequenceNumber);Y_(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){ce("RemoteStore","Failed to raise snapshot:",r),await xp(e,r)}}async function xp(e,t,n){if(!Td(t))throw t;e.Au.add(1),await Id(e),e.Pu.set("Offline"),n||(n=()=>CN(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ce("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await Km(e)})}function AN(e,t){return t().catch(n=>xp(e,n,t))}async function Qm(e){const t=ke(e),n=to(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;Cj(t);)try{const i=await aj(t.localStore,r);if(i===null){t.Tu.length===0&&n.Qo();break}r=i.batchId,Ej(t,i)}catch(i){await xp(t,i)}NN(t)&&ON(t)}function Cj(e){return ha(e)&&e.Tu.length<10}function Ej(e,t){e.Tu.push(t);const n=to(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function NN(e){return ha(e)&&!to(e).qo()&&e.Tu.length>0}function ON(e){to(e).start()}async function kj(e){to(e).au()}async function Tj(e){const t=to(e);for(const n of e.Tu)t.ou(n.mutations)}async function Dj(e,t,n){const r=e.Tu.shift(),i=$_.from(r,t,n);await AN(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Qm(e)}async function bj(e,t){t&&to(e).ru&&await async function(n,r){if(i=r.code,wV(i)&&i!==H.ABORTED){const s=n.Tu.shift();to(n).Go(),await AN(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Qm(n)}var i}(e,t),NN(e)&&ON(e)}async function qk(e,t){const n=ke(e);n.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const r=ha(n);n.Au.add(3),await Id(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await Km(n)}async function Ij(e,t){const n=ke(e);t?(n.Au.delete(2),await Km(n)):t||(n.Au.add(2),await Id(n),n.Pu.set("Unknown"))}function Xl(e){return e.Vu||(e.Vu=function(t,n,r){const i=ke(t);return i.lu(),new mj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:_j.bind(null,e),co:xj.bind(null,e),eu:Sj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),H_(e)?W_(e):e.Pu.set("Unknown")):(await e.Vu.stop(),IN(e))})),e.Vu}function to(e){return e.Su||(e.Su=function(t,n,r){const i=ke(t);return i.lu(),new gj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:kj.bind(null,e),co:bj.bind(null,e),cu:Tj.bind(null,e),uu:Dj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Go(),await Qm(e)):(await e.Su.stop(),e.Tu.length>0&&(ce("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
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
 */class G_{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new G_(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function q_(e,t){if(Zi("AsyncQueue",`${t}: ${e}`),Td(e))return new fe(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ul{constructor(t){this.comparator=t?(n,r)=>t(n,r)||pe.comparator(n.key,r.key):(n,r)=>pe.comparator(n.key,r.key),this.keyedMap=Lu(),this.sortedSet=new St(this.comparator)}static emptySet(t){return new ul(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ul)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ul;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Kk{constructor(){this.Du=new St(pe.comparator)}track(t){const n=t.doc.key,r=this.Du.get(n);r?t.type!==0&&r.type===3?this.Du=this.Du.insert(n,t):t.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Du=this.Du.remove(n):t.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):xe():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,r)=>{t.push(r)}),t}}class Nl{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Nl(t,n,ul.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jm(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Aj{constructor(){this.xu=void 0,this.listeners=[]}}class Nj{constructor(){this.queries=new Ql(t=>JA(t),jm),this.onlineState="Unknown",this.Nu=new Set}}async function RN(e,t){const n=ke(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Aj),i)try{s.xu=await n.onListen(r)}catch(o){const a=q_(o,`Initialization of query '${Zv(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&K_(n)}async function PN(e,t){const n=ke(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Oj(e,t){const n=ke(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&K_(n)}function Rj(e,t,n){const r=ke(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function K_(e){e.Nu.forEach(t=>{t.next()})}class MN{constructor(t,n,r){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Nl(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=Nl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
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
 */class LN{constructor(t){this.key=t}}class $N{constructor(t){this.key=t}}class Pj{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Pe(),this.mutatedKeys=Pe(),this.Zu=ZA(t),this.tc=new ul(this.Zu)}get ec(){return this.Ju}nc(t,n){const r=n?n.sc:new Kk,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,p)=>{const m=i.get(h),x=Ym(this.query,p)?p:null,v=!!m&&this.mutatedKeys.has(m.key),_=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let k=!1;m&&x?m.data.isEqual(x.data)?v!==_&&(r.track({type:3,doc:x}),k=!0):this.ic(m,x)||(r.track({type:2,doc:x}),k=!0,(u&&this.Zu(x,u)>0||c&&this.Zu(x,c)<0)&&(a=!0)):!m&&x?(r.track({type:0,doc:x}),k=!0):m&&!x&&(r.track({type:1,doc:m}),k=!0,(u||c)&&(a=!0)),k&&(x?(o=o.add(x),s=_?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const s=t.sc.Cu();s.sort((c,h)=>function(p,m){const x=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe()}};return x(p)-x(m)}(c.type,h.type)||this.Zu(c.doc,h.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,u=a!==this.Yu;return this.Yu=a,s.length!==0||u?{snapshot:new Nl(this.query,t.tc,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Kk,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Pe(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return t.forEach(r=>{this.Xu.has(r)||n.push(new $N(r))}),this.Xu.forEach(r=>{t.has(r)||n.push(new LN(r))}),n}ac(t){this.Ju=t.sr,this.Xu=Pe();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return Nl.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Mj{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Lj{constructor(t){this.key=t,this.lc=!1}}class $j{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Ql(a=>JA(a),jm),this._c=new Map,this.wc=new Set,this.mc=new St(pe.comparator),this.gc=new Map,this.yc=new z_,this.Ic={},this.Tc=new Map,this.Ec=Al.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Fj(e,t){const n=qj(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await lj(n.localStore,es(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Uj(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&TN(n.remoteStore,o)}return i}async function Uj(e,t,n,r,i){e.Rc=(p,m,x)=>async function(v,_,k,S){let y=_.view.nc(k);y.ji&&(y=await Wk(v.localStore,_.query,!1).then(({documents:I})=>_.view.nc(I,y)));const C=S&&S.targetChanges.get(_.targetId),T=_.view.applyChanges(y,v.isPrimaryClient,C);return Xk(v,_.targetId,T.uc),T.snapshot}(e,p,m,x);const s=await Wk(e.localStore,t,!0),o=new Pj(t,s.sr),a=o.nc(s.documents),u=bd.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Xk(e,n,c.uc);const h=new Mj(t,n,o);return e.dc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Bj(e,t){const n=ke(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!jm(s,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await i1(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),DN(n.remoteStore,r.targetId),s1(n,r.targetId)}).catch(kd)):(s1(n,r.targetId),await i1(n.localStore,r.targetId,!0))}async function zj(e,t,n){const r=Kj(e);try{const i=await function(s,o){const a=ke(s),u=Ht.now(),c=o.reduce((m,x)=>m.add(x.key),Pe());let h,p;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let x=ts(),v=Pe();return a.Xi.getEntries(m,c).next(_=>{x=_,x.forEach((k,S)=>{S.isValidDocument()||(v=v.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,x)).next(_=>{h=_;const k=[];for(const S of o){const y=pV(S,h.get(S.key).overlayedDocument);y!=null&&k.push(new ho(S.key,y,WA(y.value.mapValue),Ur.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,k,o)}).next(_=>{p=_;const k=_.applyToLocalDocumentSet(h,v);return a.documentOverlayCache.saveOverlays(m,_.batchId,k)})}).then(()=>({batchId:p.batchId,changes:tN(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ic[s.currentUser.toKey()];u||(u=new St(He)),u=u.insert(o,a),s.Ic[s.currentUser.toKey()]=u}(r,i.batchId,n),await Ad(r,i.changes),await Qm(r.remoteStore)}catch(i){const s=q_(i,"Failed to persist write");n.reject(s)}}async function FN(e,t){const n=ke(e);try{const r=await sj(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?lt(o.lc):i.removedDocuments.size>0&&(lt(o.lc),o.lc=!1))}),await Ad(n,r,t)}catch(r){await kd(r)}}function Qk(e,t,n){const r=ke(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ke(s);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const p of h.listeners)p.ku(o)&&(u=!0)}),u&&K_(a)}(r.eventManager,t),i.length&&r.fc.eu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vj(e,t,n){const r=ke(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let o=new St(pe.comparator);o=o.insert(s,gn.newNoDocument(s,Ce.min()));const a=Pe().add(s),u=new Gm(Ce.min(),new Map,new St(He),o,a);await FN(r,u),r.mc=r.mc.remove(s),r.gc.delete(t),Q_(r)}else await i1(r.localStore,t,!1).then(()=>s1(r,t,n)).catch(kd)}async function jj(e,t){const n=ke(e),r=t.batch.batchId;try{const i=await ij(n.localStore,t);BN(n,r,null),UN(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ad(n,i)}catch(i){await kd(i)}}async function Yj(e,t,n){const r=ke(e);try{const i=await function(s,o){const a=ke(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(lt(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,t);BN(r,t,n),UN(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ad(r,i)}catch(i){await kd(i)}}function UN(e,t){(e.Tc.get(t)||[]).forEach(n=>{n.resolve()}),e.Tc.delete(t)}function BN(e,t,n){const r=ke(e);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function s1(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(r=>{e.yc.containsKey(r)||zN(e,r)})}function zN(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(DN(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),Q_(e))}function Xk(e,t,n){for(const r of n)r instanceof LN?(e.yc.addReference(r.key,t),Wj(e,r)):r instanceof $N?(ce("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||zN(e,r.key)):xe()}function Wj(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ce("SyncEngine","New document in limbo: "+n),e.wc.add(r),Q_(e))}function Q_(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new pe(yt.fromString(t)),r=e.Ec.next();e.gc.set(r,new Lj(n)),e.mc=e.mc.insert(n,r),TN(e.remoteStore,new Ds(es(L_(n.path)),r,"TargetPurposeLimboResolution",A_.ct))}}async function Ad(e,t,n){const r=ke(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,u)=>{o.push(r.Rc(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=j_.Bi(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,u){const c=ke(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>Q.forEach(u,p=>Q.forEach(p.$i,m=>c.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>Q.forEach(p.Fi,m=>c.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!Td(h))throw h;ce("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const m=c.Hi.get(p),x=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(x);c.Hi=c.Hi.insert(p,v)}}}(r.localStore,s))}async function Hj(e,t){const n=ke(e);if(!n.currentUser.isEqual(t)){ce("SyncEngine","User change. New user:",t.toKey());const r=await SN(n.localStore,t);n.currentUser=t,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new fe(H.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ad(n,r.tr)}}function Gj(e,t){const n=ke(e),r=n.gc.get(t);if(r&&r.lc)return Pe().add(r.key);{let i=Pe();const s=n._c.get(t);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function qj(e){const t=ke(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=FN.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vj.bind(null,t),t.fc.eu=Oj.bind(null,t.eventManager),t.fc.vc=Rj.bind(null,t.eventManager),t}function Kj(e){const t=ke(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yj.bind(null,t),t}class Jk{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=qm(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return rj(this.persistence,new tj,t.initialUser,this.serializer)}createPersistence(t){return new ZV(V_.js,this.serializer)}createSharedClientState(t){return new cj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qj{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qk(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hj.bind(null,this.syncEngine),await Ij(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Nj}createDatastore(t){const n=qm(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new pj(i));var i;return function(s,o,a,u){return new yj(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>Qk(this.syncEngine,a,0),o=Gk.D()?new Gk:new dj,new wj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,u,c){const h=new $j(r,i,s,o,a,u);return c&&(h.Ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=ke(t);ce("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Id(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class VN{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):Zi("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Xj{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pn.UNAUTHENTICATED,this.clientId=VA.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ce("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ce("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=q_(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function oy(e,t){e.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await SN(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Zk(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Zj(e);ce("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>qk(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>qk(t.remoteStore,s)),e._onlineComponents=t}function Jj(e){return e.name==="FirebaseError"?e.code===H.FAILED_PRECONDITION||e.code===H.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Zj(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await oy(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Jj(n))throw n;Tl("Error using user provided cache. Falling back to memory cache: "+n),await oy(e,new Jk)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await oy(e,new Jk);return e._offlineComponents}async function jN(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await Zk(e,e._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await Zk(e,new Qj))),e._onlineComponents}function eY(e){return jN(e).then(t=>t.syncEngine)}async function YN(e){const t=await jN(e),n=t.eventManager;return n.onListen=Fj.bind(null,t.syncEngine),n.onUnlisten=Bj.bind(null,t.syncEngine),n}function tY(e,t,n={}){const r=new ji;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new VN({next:p=>{s.enqueueAndForget(()=>PN(i,h));const m=p.docs.has(o);!m&&p.fromCache?u.reject(new fe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&a&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new MN(L_(o.path),c,{includeMetadataChanges:!0,Uu:!0});return RN(i,h)}(await YN(e),e.asyncQueue,t,n,r)),r.promise}function nY(e,t,n={}){const r=new ji;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new VN({next:p=>{s.enqueueAndForget(()=>PN(i,h)),p.fromCache&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new MN(o,c,{includeMetadataChanges:!0,Uu:!0});return RN(i,h)}(await YN(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */const e2=new Map;/**
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
 */function WN(e,t,n){if(!n)throw new fe(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rY(e,t,n,r){if(t===!0&&r===!0)throw new fe(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function t2(e){if(!pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function n2(e){if(pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function X_(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":xe()}function ci(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=X_(e);throw new fe(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class r2{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new fe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new fe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}rY("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Xm{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r2({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new fe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r2(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Cz;switch(n.type){case"firstParty":return new Dz(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new fe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=e2.get(t);n&&(ce("ComponentProvider","Removing Datastore"),e2.delete(t),n.terminate())}(this),Promise.resolve()}}function iY(e,t,n,r={}){var i;const s=(e=ci(e,Xm))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&Tl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=pn.MOCK_USER;else{o=Qb(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new fe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pn(u)}e._authCredentials=new Ez(new zA(o,a))}}/**
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
 */class Wn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ws(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Wn(this.firestore,t,this._key)}}class Jm{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Jm(this.firestore,t,this._query)}}class Ws extends Jm{constructor(t,n,r){super(t,n,L_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Wn(this.firestore,null,new pe(t))}withConverter(t){return new Ws(this.firestore,t,this._path)}}function fo(e,t,...n){if(e=Rt(e),WN("collection","path",t),e instanceof Xm){const r=yt.fromString(t,...n);return n2(r),new Ws(e,null,r)}{if(!(e instanceof Wn||e instanceof Ws))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yt.fromString(t,...n));return n2(r),new Ws(e.firestore,null,r)}}function fa(e,t,...n){if(e=Rt(e),arguments.length===1&&(t=VA.A()),WN("doc","path",t),e instanceof Xm){const r=yt.fromString(t,...n);return t2(r),new Wn(e,null,new pe(r))}{if(!(e instanceof Wn||e instanceof Ws))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yt.fromString(t,...n));return t2(r),new Wn(e.firestore,e instanceof Ws?e.converter:null,new pe(r))}}/**
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
 */class sY{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new EN(this,"async_queue_retry"),this.Yc=()=>{const n=sy();n&&ce("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=sy();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=sy();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new ji;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!Td(t))throw t;ce("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Zi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(t,n,r){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const i=G_.createAndSchedule(this,t,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&xe()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class Jl extends Xm{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new sY,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HN(this),this._firestoreClient.terminate()}}function oY(e,t){const n=typeof e=="object"?e:Kw(),r=typeof e=="string"?e:t||"(default)",i=Sm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=qb("firestore");s&&iY(i,...s)}return i}function J_(e){return e._firestoreClient||HN(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function HN(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,u,c){return new Uz(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Xj(e._authCredentials,e._appCheckCredentials,e._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Ol{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ol(En.fromBase64String(t))}catch(n){throw new fe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ol(En.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Zm{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new fe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class eg{constructor(t){this._methodName=t}}/**
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
 */class Z_{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new fe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new fe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return He(this._lat,t._lat)||He(this._long,t._long)}}/**
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
 */const aY=/^__.*__$/;class lY{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ho(t,this.data,this.fieldMask,n,this.fieldTransforms):new Dd(t,this.data,n,this.fieldTransforms)}}class GN{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ho(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function qN(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe()}}class ex{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new ex(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.la(t),i}fa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.oa(),i}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return Sp(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if(qN(this.ua)&&aY.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class uY{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||qm(t)}ga(t,n,r,i=!1){return new ex({ua:t,methodName:n,ma:r,path:yn.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tx(e){const t=e._freezeSettings(),n=qm(e._databaseId);return new uY(e._databaseId,!!t.ignoreUndefinedProperties,n)}function KN(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);nx("Data must be an object, but it was:",o,r);const a=QN(r,o);let u,c;if(s.merge)u=new tr(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=o1(t,p,n);if(!o.contains(m))throw new fe(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);JN(h,m)||h.push(m)}u=new tr(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new lY(new Un(a),u,c)}class tg extends eg{_toFieldTransform(t){if(t.ua!==2)throw t.ua===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof tg}}class cY extends eg{constructor(t,n){super(t),this.pa=n}_toFieldTransform(t){const n=new Yc(t.serializer,sN(t.serializer,this.pa));return new cV(t.path,n)}isEqual(t){return this===t}}function dY(e,t,n,r){const i=e.ga(1,t,n);nx("Data must be an object, but it was:",i,r);const s=[],o=Un.empty();da(r,(u,c)=>{const h=rx(t,u,n);c=Rt(c);const p=i.fa(h);if(c instanceof tg)s.push(h);else{const m=ng(c,p);m!=null&&(s.push(h),o.set(h,m))}});const a=new tr(s);return new GN(o,a,i.fieldTransforms)}function hY(e,t,n,r,i,s){const o=e.ga(1,t,n),a=[o1(t,r,n)],u=[i];if(s.length%2!=0)throw new fe(H.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(o1(t,s[m])),u.push(s[m+1]);const c=[],h=Un.empty();for(let m=a.length-1;m>=0;--m)if(!JN(c,a[m])){const x=a[m];let v=u[m];v=Rt(v);const _=o.fa(x);if(v instanceof tg)c.push(x);else{const k=ng(v,_);k!=null&&(c.push(x),h.set(x,k))}}const p=new tr(c);return new GN(h,p,o.fieldTransforms)}function ng(e,t){if(XN(e=Rt(e)))return nx("Unsupported field value:",t,e),QN(e,t);if(e instanceof eg)return function(n,r){if(!qN(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ng(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return sN(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ht.fromDate(n);return{timestampValue:_p(r.serializer,i)}}if(n instanceof Ht){const i=new Ht(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_p(r.serializer,i)}}if(n instanceof Z_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ol)return{bytesValue:gN(r.serializer,n._byteString)};if(n instanceof Wn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:B_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${X_(n)}`)}(e,t)}function QN(e,t){const n={};return jA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):da(e,(r,i)=>{const s=ng(i,t.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function XN(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ht||e instanceof Z_||e instanceof Ol||e instanceof Wn||e instanceof eg)}function nx(e,t,n){if(!XN(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=X_(n);throw r==="an object"?t._a(e+" a custom object"):t._a(e+" "+r)}}function o1(e,t,n){if((t=Rt(t))instanceof Zm)return t._internalPath;if(typeof t=="string")return rx(e,t);throw Sp("Field path arguments must be of type string or ",e,!1,void 0,n)}const fY=new RegExp("[~\\*/\\[\\]]");function rx(e,t,n){if(t.search(fY)>=0)throw Sp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zm(...t.split("."))._internalPath}catch{throw Sp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Sp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new fe(H.INVALID_ARGUMENT,a+e+u)}function JN(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class ZN{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pY(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(eO("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pY extends ZN{data(){return super.data()}}function eO(e,t){return typeof t=="string"?rx(e,t):t instanceof Zm?t._internalPath:t._delegate._internalPath}/**
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
 */function mY(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new fe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gY{convertValue(t,n="none"){switch(ta(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ea(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw xe()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return da(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Z_(Mt(t.latitude),Mt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=O_(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Uc(t));default:return null}}convertTimestamp(t){const n=eo(t);return new Ht(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=yt.fromString(t);lt(xN(r));const i=new Bc(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||Zi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function tO(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Fu{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nO extends ZN{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new uf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(eO("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uf extends nO{data(t={}){return super.data(t)}}class yY{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new uf(this._firestore,this._userDataWriter,r.key,r,new Fu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new uf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new uf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:vY(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vY(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe()}}/**
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
 */function ix(e){e=ci(e,Wn);const t=ci(e.firestore,Jl);return tY(J_(t),e._key).then(n=>_Y(t,e,n))}class rO extends gY{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ol(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Wn(this.firestore,null,n)}}function rg(e){e=ci(e,Jm);const t=ci(e.firestore,Jl),n=J_(t),r=new rO(t);return mY(e._query),nY(n,e._query).then(i=>new yY(t,r,e,i))}function wY(e,t,n){e=ci(e,Wn);const r=ci(e.firestore,Jl),i=tO(e.converter,t,n);return sx(r,[KN(tx(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Ur.none())])}function iO(e,t,n,...r){e=ci(e,Wn);const i=ci(e.firestore,Jl),s=tx(i);let o;return o=typeof(t=Rt(t))=="string"||t instanceof Zm?hY(s,"updateDoc",e._key,t,n,r):dY(s,"updateDoc",e._key,t),sx(i,[o.toMutation(e._key,Ur.exists(!0))])}function ig(e,t){const n=ci(e.firestore,Jl),r=fa(e),i=tO(e.converter,t);return sx(n,[KN(tx(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Ur.exists(!1))]).then(()=>r)}function sx(e,t){return function(n,r){const i=new ji;return n.asyncQueue.enqueueAndForget(async()=>zj(await eY(n),r,i)),i.promise}(J_(e),t)}function _Y(e,t,n){const r=n.docs.get(t._key),i=new rO(e);return new nO(e,i,t._key,r,new Fu(n.hasPendingWrites,n.fromCache),t.converter)}function xY(e){return new cY("increment",e)}(function(e,t=!0){(function(n){Kl=n})(la),Qo(new Js("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Jl(new kz(n.getProvider("auth-internal")),new Iz(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new fe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bc(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ii(Ek,"3.11.0",e),ii(Ek,"3.11.0","esm2017")})();/**
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
 */const sO="firebasestorage.googleapis.com",oO="storageBucket",SY=2*60*1e3,CY=10*60*1e3;/**
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
 */class Dt extends pi{constructor(t,n,r=0){super(ay(t),`Firebase Storage: ${n} (${ay(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ay(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function ay(e){return"storage/"+e}function ox(){const e="An unknown error occurred, please check the error payload for server response.";return new Dt(Tt.UNKNOWN,e)}function EY(e){return new Dt(Tt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function kY(e){return new Dt(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TY(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Dt(Tt.UNAUTHENTICATED,e)}function DY(){return new Dt(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bY(e){return new Dt(Tt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function IY(){return new Dt(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AY(){return new Dt(Tt.CANCELED,"User canceled the upload/download.")}function NY(e){return new Dt(Tt.INVALID_URL,"Invalid URL '"+e+"'.")}function OY(e){return new Dt(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function RY(){return new Dt(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+oO+"' property when initializing the app?")}function PY(){return new Dt(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function MY(){return new Dt(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LY(e){return new Dt(Tt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function a1(e){return new Dt(Tt.INVALID_ARGUMENT,e)}function aO(){return new Dt(Tt.APP_DELETED,"The Firebase app was deleted.")}function $Y(e){return new Dt(Tt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function tc(e,t){return new Dt(Tt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Cu(e){throw new Dt(Tt.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class nr{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=nr.makeFromUrl(t,n)}catch{return new nr(t,"")}if(r.path==="")return r;throw OY(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",x=new RegExp(`^https?://${p}/${h}/b/${i}/o${m}`,"i"),v={bucket:1,path:3},_=n===sO?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",S=new RegExp(`^https?://${_}/${i}/${k}`,"i"),C=[{regex:a,indices:u,postModify:s},{regex:x,indices:v,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<C.length;T++){const I=C[T],P=I.regex.exec(t);if(P){const A=P[I.indices.bucket];let O=P[I.indices.path];O||(O=""),r=new nr(A,O),I.postModify(r);break}}if(r==null)throw NY(t);return r}}class FY{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function UY(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...k){c||(c=!0,t.apply(null,k))}function p(k){i=setTimeout(()=>{i=null,e(x,u())},k)}function m(){s&&clearTimeout(s)}function x(k,...S){if(c){m();return}if(k){m(),h.call(null,k,...S);return}if(u()||o){m(),h.call(null,k,...S);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,p(C)}let v=!1;function _(k){v||(v=!0,m(),!c&&(i!==null?(k||(a=2),clearTimeout(i),p(0)):k||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function BY(e){e(!1)}/**
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
 */function zY(e){return e!==void 0}function VY(e){return typeof e=="object"&&!Array.isArray(e)}function ax(e){return typeof e=="string"||e instanceof String}function i2(e){return lx()&&e instanceof Blob}function lx(){return typeof Blob!="undefined"&&!qF()}function s2(e,t,n,r){if(r<t)throw a1(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw a1(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ux(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function lO(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Uo;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Uo||(Uo={}));/**
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
 */function jY(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class YY{constructor(t,n,r,i,s,o,a,u,c,h,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,v)=>{this.resolve_=x,this.reject_=v,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new $h(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Uo.NO_ERROR,u=s.getStatus();if(!a||jY(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Uo.ABORT;r(!1,new $h(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new $h(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());zY(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=ox();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?aO():AY();o(u)}else{const u=IY();o(u)}};this.canceled_?n(!1,new $h(!1,null,!0)):this.backoffId_=UY(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&BY(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $h{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function WY(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function HY(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function GY(e,t){t&&(e["X-Firebase-GMPID"]=t)}function qY(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function KY(e,t,n,r,i,s,o=!0){const a=lO(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return GY(c,t),WY(c,n),HY(c,s),qY(c,r),new YY(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function QY(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function XY(...e){const t=QY();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(lx())return new Blob(e);throw new Dt(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JY(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function ZY(e){if(typeof atob=="undefined")throw LY("base-64");return atob(e)}/**
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
 */const ei={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ly{constructor(t,n){this.data=t,this.contentType=n||null}}function eW(e,t){switch(e){case ei.RAW:return new ly(uO(t));case ei.BASE64:case ei.BASE64URL:return new ly(cO(e,t));case ei.DATA_URL:return new ly(nW(t),rW(t))}throw ox()}function uO(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function tW(e){let t;try{t=decodeURIComponent(e)}catch{throw tc(ei.DATA_URL,"Malformed data URL.")}return uO(t)}function cO(e,t){switch(e){case ei.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw tc(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ei.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw tc(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZY(t)}catch(i){throw i.message.includes("polyfill")?i:tc(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class dO{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw tc(ei.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iW(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function nW(e){const t=new dO(e);return t.base64?cO(ei.BASE64,t.rest):tW(t.rest)}function rW(e){return new dO(e).contentType}function iW(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Cs{constructor(t,n){let r=0,i="";i2(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(i2(this.data_)){const r=this.data_,i=JY(r,t,n);return i===null?null:new Cs(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Cs(r,!0)}}static getBlob(...t){if(lx()){const n=t.map(r=>r instanceof Cs?r.data_:r);return new Cs(XY.apply(null,n))}else{const n=t.map(o=>ax(o)?eW(ei.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Cs(i,!0)}}uploadData(){return this.data_}}/**
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
 */function hO(e){let t;try{t=JSON.parse(e)}catch{return null}return VY(t)?t:null}/**
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
 */function sW(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function oW(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function fO(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function aW(e,t){return t}class In{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||aW}}let Fh=null;function lW(e){return!ax(e)||e.length<2?e:fO(e)}function pO(){if(Fh)return Fh;const e=[];e.push(new In("bucket")),e.push(new In("generation")),e.push(new In("metageneration")),e.push(new In("name","fullPath",!0));function t(s,o){return lW(o)}const n=new In("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new In("size");return i.xform=r,e.push(i),e.push(new In("timeCreated")),e.push(new In("updated")),e.push(new In("md5Hash",null,!0)),e.push(new In("cacheControl",null,!0)),e.push(new In("contentDisposition",null,!0)),e.push(new In("contentEncoding",null,!0)),e.push(new In("contentLanguage",null,!0)),e.push(new In("contentType",null,!0)),e.push(new In("metadata","customMetadata",!0)),Fh=e,Fh}function uW(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new nr(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function cW(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return uW(r,e),r}function mO(e,t,n){const r=hO(t);return r===null?null:cW(e,r,n)}function dW(e,t,n,r){const i=hO(t);if(i===null||!ax(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=e.bucket,p=e.fullPath,m="/b/"+o(h)+"/o/"+o(p),x=ux(m,n,r),v=lO({alt:"media",token:c});return x+v})[0]}function hW(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class gO{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function yO(e){if(!e)throw ox()}function fW(e,t){function n(r,i){const s=mO(e,i,t);return yO(s!==null),s}return n}function pW(e,t){function n(r,i){const s=mO(e,i,t);return yO(s!==null),dW(s,i,e.host,e._protocol)}return n}function vO(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DY():i=TY():n.getStatus()===402?i=kY(e.bucket):n.getStatus()===403?i=bY(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function mW(e){const t=vO(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=EY(e.path)),s.serverResponse=i.serverResponse,s}return n}function gW(e,t,n){const r=t.fullServerUrl(),i=ux(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new gO(i,s,pW(e,n),o);return a.errorHandler=mW(t),a}function yW(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function vW(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=yW(null,t)),r}function wW(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let T=0;T<2;T++)C=C+Math.random().toString().slice(2);return C}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=vW(t,r,i),h=hW(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",x=Cs.getBlob(p,r,m);if(x===null)throw PY();const v={name:c.fullPath},_=ux(s,e.host,e._protocol),k="POST",S=e.maxUploadRetryTime,y=new gO(_,k,fW(e,n),S);return y.urlParams=v,y.headers=o,y.body=x.uploadData(),y.errorHandler=vO(t),y}class _W{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Uo.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Uo.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Uo.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw Cu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Cu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Cu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Cu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Cu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class xW extends _W{initXhr(){this.xhr_.responseType="text"}}function wO(){return new xW}/**
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
 */class na{constructor(t,n){this._service=t,n instanceof nr?this._location=n:this._location=nr.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new na(t,n)}get root(){const t=new nr(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fO(this._location.path)}get storage(){return this._service}get parent(){const t=sW(this._location.path);if(t===null)return null;const n=new nr(this._location.bucket,t);return new na(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw $Y(t)}}function SW(e,t,n){e._throwIfRoot("uploadBytes");const r=wW(e.storage,e._location,pO(),new Cs(t,!0),n);return e.storage.makeRequestWithTokens(r,wO).then(i=>({metadata:i,ref:e}))}function CW(e){e._throwIfRoot("getDownloadURL");const t=gW(e.storage,e._location,pO());return e.storage.makeRequestWithTokens(t,wO).then(n=>{if(n===null)throw MY();return n})}function EW(e,t){const n=oW(e._location.path,t),r=new nr(e._location.bucket,n);return new na(e.storage,r)}/**
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
 */function kW(e){return/^[A-Za-z]+:\/\//.test(e)}function TW(e,t){return new na(e,t)}function _O(e,t){if(e instanceof cx){const n=e;if(n._bucket==null)throw RY();const r=new na(n,n._bucket);return t!=null?_O(r,t):r}else return t!==void 0?EW(e,t):e}function DW(e,t){if(t&&kW(t)){if(e instanceof cx)return TW(e,t);throw a1("To use ref(service, url), the first argument must be a Storage instance.")}else return _O(e,t)}function o2(e,t){const n=t==null?void 0:t[oO];return n==null?null:nr.makeFromBucketSpec(n,e)}function bW(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Qb(i,e.app.options.projectId))}class cx{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=sO,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SY,this._maxUploadRetryTime=CY,this._requests=new Set,i!=null?this._bucket=nr.makeFromBucketSpec(i,this._host):this._bucket=o2(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=nr.makeFromBucketSpec(this._url,t):this._bucket=o2(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){s2("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){s2("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new na(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new FY(aO());{const o=KY(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const a2="@firebase/storage",l2="0.11.2";/**
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
 */const xO="storage";function pa(e,t,n){return e=Rt(e),SW(e,t,n)}function ma(e){return e=Rt(e),CW(e)}function Hn(e,t){return e=Rt(e),DW(e,t)}function IW(e=Kw(),t){e=Rt(e);const r=Sm(e,xO).getImmediate({identifier:t}),i=qb("storage");return i&&AW(r,...i),r}function AW(e,t,n,r={}){bW(e,t,n,r)}function NW(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new cx(n,r,i,t,la)}function OW(){Qo(new Js(xO,NW,"PUBLIC").setMultipleInstances(!0)),ii(a2,l2,""),ii(a2,l2,"esm2017")}OW();const RW={apiKey:"AIzaSyB6eD_2vEo_ZIjZbDoRg7cX92y81sB0Auc",authDomain:"myclothesapp-cf59a.firebaseapp.com",projectId:"myclothesapp-cf59a",storageBucket:"myclothesapp-cf59a.appspot.com",messagingSenderId:"610226156284",appId:"1:610226156284:web:9336ebebf0a17d99eb1d79",measurementId:"G-LNG72F75QC"},SO=Zb(RW),no=gB(SO),qn=oY(SO),ga=IW(),l1=Gn("login/googleLogin",async()=>{const e=new Ni,n=(await k7(no,e)).user;console.log(n);const r=fa(qn,"users",n.uid);return(await ix(r)).data()}),u1=Gn("auth/login",async e=>{try{const{email:t,password:n}=e;await kI(no,i_);const i=(await n7(no,t,n)).user,s=fa(qn,"users",i.uid),o=await ix(s);if(!o.exists())throw new Error("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4.");return o.data()}catch(t){return _m(t.message)}}),c1=Gn("auth/signOut",async()=>{try{await s7(no),await kI(no,i_)}catch(e){return _m(e.message)}}),PW=async e=>{const t=Hn(ga,"users_photos"),n=Hn(t,e.name);return await pa(n,e),await ma(n)},d1=Gn("login/updateUserData",async(e,{getState:t})=>{try{const n=no.currentUser;if(n){const r=fa(qn,"users",n.uid),s=t().login.user;let o={...e};if(e.photo){const u=await PW(e.photo);o.photo=u,delete o.photo}const a={...s,...o};return await iO(r,a),e}else throw new Error("\uC0AC\uC6A9\uC790\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}catch(n){return _m(n.message)}}),MW=()=>e=>{no.onAuthStateChanged(async t=>{if(t){const n=fa(qn,"users",t.uid),r=await ix(n);if(r.exists()){const i=r.data();e({type:"login/loginSuccess",payload:i}),localStorage.setItem("user",JSON.stringify(i))}}else e({type:"login/logout"}),localStorage.removeItem("user")})},LW=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},$W=aa({name:"login",initialState:{user:LW()},extraReducers:e=>{e.addCase(`${l1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${l1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC778 \uC2E4\uD328!"),console.log(n.payload)}),e.addCase(`${u1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${u1.rejected}`,(t,n)=>n.error),e.addCase(`${d1.fulfilled}`,(t,n)=>{t.user={...t.user,...n.payload},t.error=null}),e.addCase(`${d1.rejected}`,(t,n)=>{t.updated=null,t.error=n.payload}),e.addCase(`${c1.fulfilled}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5!"),t.user=null}),e.addCase(`${c1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328!"),console.log(n.payload)})}});var FW=$W.reducer,CO={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u2=Xt.createContext&&Xt.createContext(CO),Hs=globalThis&&globalThis.__assign||function(){return Hs=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Hs.apply(this,arguments)},UW=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function EO(e){return e&&e.map(function(t,n){return Xt.createElement(t.tag,Hs({key:n},t.attr),EO(t.child))})}function Kn(e){return function(t){return Xt.createElement(BW,Hs({attr:Hs({},e.attr)},t),EO(e.child))}}function BW(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=UW(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Xt.createElement("svg",Hs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Hs(Hs({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Xt.createElement("title",null,s),e.children)};return u2!==void 0?Xt.createElement(u2.Consumer,null,function(n){return t(n)}):t(CO)}function zW(e){return Kn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function VW(e){return Kn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}function jW(e){return Kn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"}}]})(e)}function YW(e){return Kn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]})(e)}function WW(e){return Kn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z"}}]})(e)}function sg(e){return Kn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(e)}function HW(e){return Kn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(e)}function GW(e){return Kn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"}}]})(e)}function qW(e){return Kn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"}}]})(e)}const KW=({toggle:e,toggleMenu:t})=>{const[n,r]=R.exports.useState(!1),[i,s]=R.exports.useState(null),o=rt(y=>y.login.user),a=ur(),u=ld(),c=Gt(),h=o==null?void 0:o.nickname,p=o==null?void 0:o.profileImg,m=R.exports.useRef(null),x=()=>{confirm("\uC815\uB9D0 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&(c(c1()),a("/"))},v=y=>{s(y),window.innerWidth<=768&&_()},_=y=>{y==null||y.stopPropagation(),s(null),t()},k=()=>o?N("div",{className:"users",children:[N("li",{className:"item user_nickname",children:[p?w("img",{src:p,alt:h}):null,w(Nn,{to:"/account",onClick:()=>v(null),children:h})]}),w("li",{className:"item logOut",children:w("span",{onClick:x,children:w(HW,{})})})]}):w("div",{className:"users sign",children:w("li",{className:"item_account",children:w(Nn,{to:"account/login",className:"account",onClick:()=>v(null),children:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"})})});return R.exports.useEffect(()=>{const y=()=>{window.scrollY>=60?r(!0):r(!1)};return window.addEventListener("scroll",y),()=>{window.removeEventListener("scroll",y)}},[]),R.exports.useEffect(()=>{const y=C=>{e&&!m.current.contains(C.target)&&_()};return document.addEventListener("click",y),()=>{document.removeEventListener("click",y)}},[e,_]),u.pathname==="/account/signup"||u.pathname==="/account/login"?null:w(u8,{style:{borderBottom:n?"1px solid #f7f2f2":""},children:N("div",{className:"contents",children:[w("div",{className:"logo",children:w("h1",{onClick:()=>{a("/"),s(null)},children:"ModArt"})}),N("ul",{className:`navbar${e?" mobile":""}`,children:[N("div",{className:"list",children:[w("li",{className:`item ${i===0?"active":""}`,children:w(Nn,{to:"/",onClick:v,children:"HOME"})}),w("li",{className:`item ${i===1?"active":""}`,children:w(Nn,{to:"/board",onClick:()=>v(1),children:"OOTD"})}),w("li",{className:`item ${i===2?"active":""}`,children:w(Nn,{to:"/photo",onClick:()=>v(2),children:"Photo"})}),w("li",{className:`item ${i===3?"active":""}`,children:w(Nn,{to:"/today",onClick:()=>v(3),children:"TodayStory"})}),w("li",{className:`item ${i===4?"active":""}`,children:w(Nn,{to:"/qna",onClick:()=>v(4),children:"QnA"})})]}),k()]}),w("div",{className:"toggle",onClick:y=>_(y),ref:m,children:e?w(qW,{}):w(zW,{})})]})})};var QW=Xt.memo(KW);function c2(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function XW(e,t,n){return t&&c2(e.prototype,t),n&&c2(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var d2="(prefers-reduced-motion: reduce)",qa=1,JW=2,Rl=3,Zl=4,Nd=5,cf=6,Cp=7,ZW={CREATED:qa,MOUNTED:JW,IDLE:Rl,MOVING:Zl,SCROLLING:Nd,DRAGGING:cf,DESTROYED:Cp};function ns(e){e.length=0}function po(e,t,n){return Array.prototype.slice.call(e,t,n)}function nt(e){return e.bind.apply(e,[null].concat(po(arguments,1)))}var kO=setTimeout,h1=function(){};function h2(e){return requestAnimationFrame(e)}function og(e,t){return typeof t===e}function Wc(e){return!hx(e)&&og("object",e)}var dx=Array.isArray,TO=nt(og,"function"),ro=nt(og,"string"),Od=nt(og,"undefined");function hx(e){return e===null}function DO(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Rd(e){return dx(e)?e:[e]}function Cr(e,t){Rd(e).forEach(t)}function fx(e,t){return e.indexOf(t)>-1}function df(e,t){return e.push.apply(e,Rd(t)),e}function Fi(e,t,n){e&&Cr(t,function(r){r&&e.classList[n?"add":"remove"](r)})}function di(e,t){Fi(e,ro(t)?t.split(" "):t,!0)}function Pd(e,t){Cr(t,e.appendChild.bind(e))}function px(e,t){Cr(e,function(n){var r=(t||n).parentNode;r&&r.insertBefore(n,t)})}function Hc(e,t){return DO(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function bO(e,t){var n=e?po(e.children):[];return t?n.filter(function(r){return Hc(r,t)}):n}function Md(e,t){return t?bO(e,t)[0]:e.firstElementChild}var Gc=Object.keys;function Bo(e,t,n){return e&&(n?Gc(e).reverse():Gc(e)).forEach(function(r){r!=="__proto__"&&t(e[r],r)}),e}function qc(e){return po(arguments,1).forEach(function(t){Bo(t,function(n,r){e[r]=t[r]})}),e}function bs(e){return po(arguments,1).forEach(function(t){Bo(t,function(n,r){dx(n)?e[r]=n.slice():Wc(n)?e[r]=bs({},Wc(e[r])?e[r]:{},n):e[r]=n})}),e}function f2(e,t){Cr(t||Gc(e),function(n){delete e[n]})}function hi(e,t){Cr(e,function(n){Cr(t,function(r){n&&n.removeAttribute(r)})})}function be(e,t,n){Wc(t)?Bo(t,function(r,i){be(e,i,r)}):Cr(e,function(r){hx(n)||n===""?hi(r,t):r.setAttribute(t,String(n))})}function cl(e,t,n){var r=document.createElement(e);return t&&(ro(t)?di(r,t):be(r,t)),n&&Pd(n,r),r}function Rr(e,t,n){if(Od(n))return getComputedStyle(e)[t];hx(n)||(e.style[t]=""+n)}function Kc(e,t){Rr(e,"display",t)}function IO(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function Mr(e,t){return e.getAttribute(t)}function p2(e,t){return e&&e.classList.contains(t)}function pr(e){return e.getBoundingClientRect()}function ra(e){Cr(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function AO(e){return Md(new DOMParser().parseFromString(e,"text/html").body)}function Ai(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function NO(e,t){return e&&e.querySelector(t)}function mx(e,t){return t?po(e.querySelectorAll(t)):[]}function Ui(e,t){Fi(e,t,!1)}function f1(e){return e.timeStamp}function xo(e){return ro(e)?e:e?e+"px":""}var Ld="splide",gx="data-"+Ld;function nc(e,t){if(!e)throw new Error("["+Ld+"] "+(t||""))}var io=Math.min,Ep=Math.max,kp=Math.floor,Qc=Math.ceil,zn=Math.abs;function OO(e,t,n){return zn(e-t)<n}function hf(e,t,n,r){var i=io(t,n),s=Ep(t,n);return r?i<e&&e<s:i<=e&&e<=s}function Na(e,t,n){var r=io(t,n),i=Ep(t,n);return io(Ep(r,e),i)}function p1(e){return+(e>0)-+(e<0)}function m1(e,t){return Cr(t,function(n){e=e.replace("%s",""+n)}),e}function yx(e){return e<10?"0"+e:""+e}var m2={};function eH(e){return""+e+yx(m2[e]=(m2[e]||0)+1)}function RO(){var e=[];function t(o,a,u,c){i(o,a,function(h,p,m){var x="addEventListener"in h,v=x?h.removeEventListener.bind(h,p,u,c):h.removeListener.bind(h,u);x?h.addEventListener(p,u,c):h.addListener(u),e.push([h,p,m,u,v])})}function n(o,a,u){i(o,a,function(c,h,p){e=e.filter(function(m){return m[0]===c&&m[1]===h&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,h=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:h,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,h,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){Cr(o,function(c){c&&Cr(a,function(h){h.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),ns(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var mo="mounted",g1="ready",rs="move",eu="moved",vx="click",PO="active",MO="inactive",LO="visible",$O="hidden",$t="refresh",Pn="updated",Pl="resize",ag="resized",FO="drag",UO="dragging",BO="dragged",lg="scroll",ya="scrolled",tH="overflow",wx="destroy",zO="arrows:mounted",VO="arrows:updated",jO="pagination:mounted",YO="pagination:updated",_x="navigation:mounted",xx="autoplay:play",WO="autoplay:playing",Sx="autoplay:pause",Cx="lazyload:loaded",HO="sk",GO="sh",Tp="ei";function Ct(e){var t=e?e.event.bus:document.createDocumentFragment(),n=RO();function r(s,o){n.bind(t,Rd(s).join(" "),function(a){o.apply(o,dx(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,po(arguments,1))}return e&&e.event.on(wx,n.destroy),qc(n,{bus:t,on:r,off:nt(n.unbind,t),emit:i})}function ug(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function h(){if(!u){if(o=e?io((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();a=h2(h)}}function p(S){S||v(),s=i()-(S?o*e:0),u=!1,a=h2(h)}function m(){u=!0}function x(){s=i(),o=0,n&&n(o)}function v(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function _(S){e=S}function k(){return u}return{start:p,rewind:x,pause:m,cancel:v,set:_,isPaused:k}}function nH(e){var t=e;function n(i){t=i}function r(i){return fx(Rd(i),t)}return{set:n,is:r}}function rH(e,t){var n=ug(t||0,e,null,1);return function(){n.isPaused()&&n.start()}}function iH(e,t,n){var r=e.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=RO(),a=[];function u(){var v=n.mediaQuery==="min";Gc(i).sort(function(_,k){return v?+_-+k:+k-+_}).forEach(function(_){h(i[_],"("+(v?"min":"max")+"-width:"+_+"px)")}),h(s,d2),p()}function c(v){v&&o.destroy()}function h(v,_){var k=matchMedia(_);o.bind(k,"change",p),a.push([v,k])}function p(){var v=r.is(Cp),_=n.direction,k=a.reduce(function(S,y){return bs(S,y[1].matches?y[0]:{})},{});f2(n),x(k),n.destroy?e.destroy(n.destroy==="completely"):v?(c(!0),e.mount()):_!==n.direction&&e.refresh()}function m(v){matchMedia(d2).matches&&(v?bs(n,s):f2(n,Gc(s)))}function x(v,_,k){bs(n,v),_&&bs(Object.getPrototypeOf(n),v),(k||!r.is(qa))&&e.emit(Pn,n)}return{setup:u,destroy:c,reduce:m,set:x}}var cg="Arrow",dg=cg+"Left",hg=cg+"Right",qO=cg+"Up",KO=cg+"Down",g2="rtl",fg="ttb",uy={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[qO,hg],ArrowRight:[KO,dg]};function sH(e,t,n){function r(s,o,a){a=a||n.direction;var u=a===g2&&!o?1:a===fg?0:-1;return uy[s]&&uy[s][u]||s.replace(/width|left|right/i,function(c,h){var p=uy[c.toLowerCase()][u]||c;return h>0?p.charAt(0).toUpperCase()+p.slice(1):p})}function i(s){return s*(n.direction===g2?1:-1)}return{resolve:r,orient:i}}var Yi="role",dl="tabindex",oH="disabled",Yr="aria-",$d=Yr+"controls",QO=Yr+"current",y2=Yr+"selected",vr=Yr+"label",Ex=Yr+"labelledby",XO=Yr+"hidden",kx=Yr+"orientation",Xc=Yr+"roledescription",v2=Yr+"live",w2=Yr+"busy",_2=Yr+"atomic",Tx=[Yi,dl,oH,$d,QO,vr,Ex,XO,kx,Xc],mi=Ld+"__",go="is-",cy=Ld,x2=mi+"track",aH=mi+"list",pg=mi+"slide",JO=pg+"--clone",lH=pg+"__container",Dx=mi+"arrows",mg=mi+"arrow",ZO=mg+"--prev",eR=mg+"--next",gg=mi+"pagination",tR=gg+"__page",uH=mi+"progress",cH=uH+"__bar",dH=mi+"toggle",hH=mi+"spinner",fH=mi+"sr",pH=go+"initialized",ia=go+"active",nR=go+"prev",rR=go+"next",y1=go+"visible",v1=go+"loading",iR=go+"focus-in",sR=go+"overflow",mH=[ia,y1,nR,rR,v1,iR,sR],gH={slide:pg,clone:JO,arrows:Dx,arrow:mg,prev:ZO,next:eR,pagination:gg,page:tR,spinner:hH};function yH(e,t){if(TO(e.closest))return e.closest(t);for(var n=e;n&&n.nodeType===1&&!Hc(n,t);)n=n.parentElement;return n}var vH=5,S2=200,oR="touchstart mousedown",dy="touchmove mousemove",hy="touchend touchcancel mouseup click";function wH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=e.root,a=n.i18n,u={},c=[],h=[],p=[],m,x,v;function _(){C(),T(),y()}function k(){i($t,S),i($t,_),i(Pn,y),s(document,oR+" keydown",function(A){v=A.type==="keydown"},{capture:!0}),s(o,"focusin",function(){Fi(o,iR,!!v)})}function S(A){var O=Tx.concat("style");ns(c),Ui(o,h),Ui(m,p),hi([m,x],O),hi(o,A?O:["style",Xc])}function y(){Ui(o,h),Ui(m,p),h=P(cy),p=P(x2),di(o,h),di(m,p),be(o,vr,n.label),be(o,Ex,n.labelledby)}function C(){m=I("."+x2),x=Md(m,"."+aH),nc(m&&x,"A track/list element is missing."),df(c,bO(x,"."+pg+":not(."+JO+")")),Bo({arrows:Dx,pagination:gg,prev:ZO,next:eR,bar:cH,toggle:dH},function(A,O){u[O]=I("."+A)}),qc(u,{root:o,track:m,list:x,slides:c})}function T(){var A=o.id||eH(Ld),O=n.role;o.id=A,m.id=m.id||A+"-track",x.id=x.id||A+"-list",!Mr(o,Yi)&&o.tagName!=="SECTION"&&O&&be(o,Yi,O),be(o,Xc,a.carousel),be(x,Yi,"presentation")}function I(A){var O=NO(o,A);return O&&yH(O,"."+cy)===o?O:void 0}function P(A){return[A+"--"+n.type,A+"--"+n.direction,n.drag&&A+"--draggable",n.isNavigation&&A+"--nav",A===cy&&ia]}return qc(u,{setup:_,mount:k,destroy:S})}var Ml="slide",tu="loop",Fd="fade";function _H(e,t,n,r){var i=Ct(e),s=i.on,o=i.emit,a=i.bind,u=e.Components,c=e.root,h=e.options,p=h.isNavigation,m=h.updateOnMove,x=h.i18n,v=h.pagination,_=h.slideFocus,k=u.Direction.resolve,S=Mr(r,"style"),y=Mr(r,vr),C=n>-1,T=Md(r,"."+lH),I;function P(){C||(r.id=c.id+"-slide"+yx(t+1),be(r,Yi,v?"tabpanel":"group"),be(r,Xc,x.slide),be(r,vr,y||m1(x.slideLabel,[t+1,e.length]))),A()}function A(){a(r,"click",nt(o,vx,$)),a(r,"keydown",nt(o,HO,$)),s([eu,GO,ya],j),s(_x,Z),m&&s(rs,F)}function O(){I=!0,i.destroy(),Ui(r,mH),hi(r,Tx),be(r,"style",S),be(r,vr,y||"")}function Z(){var V=e.splides.map(function(M){var ee=M.splide.Components.Slides.getAt(t);return ee?ee.slide.id:""}).join(" ");be(r,vr,m1(x.slideX,(C?n:t)+1)),be(r,$d,V),be(r,Yi,_?"button":""),_&&hi(r,Xc)}function F(){I||j()}function j(){if(!I){var V=e.index;J(),X(),Fi(r,nR,t===V-1),Fi(r,rR,t===V+1)}}function J(){var V=oe();V!==p2(r,ia)&&(Fi(r,ia,V),be(r,QO,p&&V||""),o(V?PO:MO,$))}function X(){var V=Te(),M=!V&&(!oe()||C);if(e.state.is([Zl,Nd])||be(r,XO,M||""),be(mx(r,h.focusableNodes||""),dl,M?-1:""),_&&be(r,dl,M?-1:0),V!==p2(r,y1)&&(Fi(r,y1,V),o(V?LO:$O,$)),!V&&document.activeElement===r){var ee=u.Slides.getAt(e.index);ee&&IO(ee.slide)}}function ue(V,M,ee){Rr(ee&&T||r,V,M)}function oe(){var V=e.index;return V===t||h.cloneStatus&&V===n}function Te(){if(e.is(Fd))return oe();var V=pr(u.Elements.track),M=pr(r),ee=k("left",!0),U=k("right",!0);return kp(V[ee])<=Qc(M[ee])&&kp(M[U])<=Qc(V[U])}function ge(V,M){var ee=zn(V-t);return!C&&(h.rewind||e.is(tu))&&(ee=io(ee,e.length-ee)),ee<=M}var $={index:t,slideIndex:n,slide:r,container:T,isClone:C,mount:P,destroy:O,update:j,style:ue,isWithin:ge};return $}function xH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=r.bind,a=t.Elements,u=a.slides,c=a.list,h=[];function p(){m(),i($t,x),i($t,m)}function m(){u.forEach(function(j,J){_(j,J,-1)})}function x(){I(function(j){j.destroy()}),ns(h)}function v(){I(function(j){j.update()})}function _(j,J,X){var ue=_H(e,J,X,j);ue.mount(),h.push(ue),h.sort(function(oe,Te){return oe.index-Te.index})}function k(j){return j?P(function(J){return!J.isClone}):h}function S(j){var J=t.Controller,X=J.toIndex(j),ue=J.hasFocus()?1:n.perPage;return P(function(oe){return hf(oe.index,X,X+ue-1)})}function y(j){return P(j)[0]}function C(j,J){Cr(j,function(X){if(ro(X)&&(X=AO(X)),DO(X)){var ue=u[J];ue?px(X,ue):Pd(c,X),di(X,n.classes.slide),O(X,nt(s,Pl))}}),s($t)}function T(j){ra(P(j).map(function(J){return J.slide})),s($t)}function I(j,J){k(J).forEach(j)}function P(j){return h.filter(TO(j)?j:function(J){return ro(j)?Hc(J.slide,j):fx(Rd(j),J.index)})}function A(j,J,X){I(function(ue){ue.style(j,J,X)})}function O(j,J){var X=mx(j,"img"),ue=X.length;ue?X.forEach(function(oe){o(oe,"load error",function(){--ue||J()})}):J()}function Z(j){return j?u.length:h.length}function F(){return h.length>n.perPage}return{mount:p,destroy:x,update:v,register:_,get:k,getIn:S,getAt:y,add:C,remove:T,forEach:I,filter:P,style:A,getLength:Z,isEnough:F}}function SH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=r.emit,a=t.Slides,u=t.Direction.resolve,c=t.Elements,h=c.root,p=c.track,m=c.list,x=a.getAt,v=a.style,_,k,S;function y(){C(),s(window,"resize load",rH(nt(o,Pl))),i([Pn,$t],C),i(Pl,T)}function C(){_=n.direction===fg,Rr(h,"maxWidth",xo(n.width)),Rr(p,u("paddingLeft"),I(!1)),Rr(p,u("paddingRight"),I(!0)),T(!0)}function T($){var V=pr(h);($||k.width!==V.width||k.height!==V.height)&&(Rr(p,"height",P()),v(u("marginRight"),xo(n.gap)),v("width",O()),v("height",Z(),!0),k=V,o(ag),S!==(S=ge())&&(Fi(h,sR,S),o(tH,S)))}function I($){var V=n.padding,M=u($?"right":"left");return V&&xo(V[M]||(Wc(V)?0:V))||"0px"}function P(){var $="";return _&&($=A(),nc($,"height or heightRatio is missing."),$="calc("+$+" - "+I(!1)+" - "+I(!0)+")"),$}function A(){return xo(n.height||pr(m).width*n.heightRatio)}function O(){return n.autoWidth?null:xo(n.fixedWidth)||(_?"":F())}function Z(){return xo(n.fixedHeight)||(_?n.autoHeight?null:F():A())}function F(){var $=xo(n.gap);return"calc((100%"+($&&" + "+$)+")/"+(n.perPage||1)+($&&" - "+$)+")"}function j(){return pr(m)[u("width")]}function J($,V){var M=x($||0);return M?pr(M.slide)[u("width")]+(V?0:oe()):0}function X($,V){var M=x($);if(M){var ee=pr(M.slide)[u("right")],U=pr(m)[u("left")];return zn(ee-U)+(V?0:oe())}return 0}function ue($){return X(e.length-1)-X(0)+J(0,$)}function oe(){var $=x(0);return $&&parseFloat(Rr($.slide,u("marginRight")))||0}function Te($){return parseFloat(Rr(p,u("padding"+($?"Right":"Left"))))||0}function ge(){return e.is(Fd)||ue(!0)>j()}return{mount:y,resize:T,listSize:j,slideSize:J,sliderSize:ue,totalSize:X,getPadding:Te,isOverflow:ge}}var CH=2;function EH(e,t,n){var r=Ct(e),i=r.on,s=t.Elements,o=t.Slides,a=t.Direction.resolve,u=[],c;function h(){i($t,p),i([Pn,Pl],x),(c=k())&&(v(c),t.Layout.resize(!0))}function p(){m(),h()}function m(){ra(u),ns(u),r.destroy()}function x(){var S=k();c!==S&&(c<S||!S)&&r.emit($t)}function v(S){var y=o.get().slice(),C=y.length;if(C){for(;y.length<S;)df(y,y);df(y.slice(-S),y.slice(0,S)).forEach(function(T,I){var P=I<S,A=_(T.slide,I);P?px(A,y[0].slide):Pd(s.list,A),df(u,A),o.register(A,I-S+(P?0:C),T.index)})}}function _(S,y){var C=S.cloneNode(!0);return di(C,n.classes.clone),C.id=e.root.id+"-clone"+yx(y+1),C}function k(){var S=n.clones;if(!e.is(tu))S=0;else if(Od(S)){var y=n[a("fixedWidth")]&&t.Layout.slideSize(0),C=y&&Qc(pr(s.track)[a("width")]/y);S=C||n[a("autoWidth")]&&e.length||n.perPage*CH}return S}return{mount:h,destroy:m}}function kH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=e.state.set,a=t.Layout,u=a.slideSize,c=a.getPadding,h=a.totalSize,p=a.listSize,m=a.sliderSize,x=t.Direction,v=x.resolve,_=x.orient,k=t.Elements,S=k.list,y=k.track,C;function T(){C=t.Transition,i([mo,ag,Pn,$t],I)}function I(){t.Controller.isBusy()||(t.Scroll.cancel(),A(e.index),t.Slides.update())}function P(M,ee,U,B){M!==ee&&$(M>U)&&(j(),O(F(ue(),M>U),!0)),o(Zl),s(rs,ee,U,M),C.start(ee,function(){o(Rl),s(eu,ee,U,M),B&&B()})}function A(M){O(X(M,!0))}function O(M,ee){if(!e.is(Fd)){var U=ee?M:Z(M);Rr(S,"transform","translate"+v("X")+"("+U+"px)"),M!==U&&s(GO)}}function Z(M){if(e.is(tu)){var ee=J(M),U=ee>t.Controller.getEnd(),B=ee<0;(B||U)&&(M=F(M,U))}return M}function F(M,ee){var U=M-ge(ee),B=m();return M-=_(B*(Qc(zn(U)/B)||1))*(ee?1:-1),M}function j(){O(ue(),!0),C.cancel()}function J(M){for(var ee=t.Slides.get(),U=0,B=1/0,Y=0;Y<ee.length;Y++){var z=ee[Y].index,D=zn(X(z,!0)-M);if(D<=B)B=D,U=z;else break}return U}function X(M,ee){var U=_(h(M-1)-Te(M));return ee?oe(U):U}function ue(){var M=v("left");return pr(S)[M]-pr(y)[M]+_(c(!1))}function oe(M){return n.trimSpace&&e.is(Ml)&&(M=Na(M,0,_(m(!0)-p()))),M}function Te(M){var ee=n.focus;return ee==="center"?(p()-u(M,!0))/2:+ee*u(M)||0}function ge(M){return X(M?t.Controller.getEnd():0,!!n.trimSpace)}function $(M){var ee=_(F(ue(),M));return M?ee>=0:ee<=S[v("scrollWidth")]-pr(y)[v("width")]}function V(M,ee){ee=Od(ee)?ue():ee;var U=M!==!0&&_(ee)<_(ge(!1)),B=M!==!1&&_(ee)>_(ge(!0));return U||B}return{mount:T,move:P,jump:A,translate:O,shift:F,cancel:j,toIndex:J,toPosition:X,getPosition:ue,getLimit:ge,exceededLimit:V,reposition:I}}function TH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=t.Move,a=o.getPosition,u=o.getLimit,c=o.toPosition,h=t.Slides,p=h.isEnough,m=h.getLength,x=n.omitEnd,v=e.is(tu),_=e.is(Ml),k=nt(ue,!1),S=nt(ue,!0),y=n.start||0,C,T=y,I,P,A;function O(){Z(),i([Pn,$t,Tp],Z),i(ag,F)}function Z(){I=m(!0),P=n.perMove,A=n.perPage,C=$();var D=Na(y,0,x?C:I-1);D!==y&&(y=D,o.reposition())}function F(){C!==$()&&s(Tp)}function j(D,le,W){if(!z()){var we=X(D),me=ge(we);me>-1&&(le||me!==y)&&(U(me),o.move(we,me,T,W))}}function J(D,le,W,we){t.Scroll.scroll(D,le,W,function(){var me=ge(o.toIndex(a()));U(x?io(me,C):me),we&&we()})}function X(D){var le=y;if(ro(D)){var W=D.match(/([+\-<>])(\d+)?/)||[],we=W[1],me=W[2];we==="+"||we==="-"?le=oe(y+ +(""+we+(+me||1)),y):we===">"?le=me?V(+me):k(!0):we==="<"&&(le=S(!0))}else le=v?D:Na(D,0,C);return le}function ue(D,le){var W=P||(Y()?1:A),we=oe(y+W*(D?-1:1),y,!(P||Y()));return we===-1&&_&&!OO(a(),u(!D),1)?D?0:C:le?we:ge(we)}function oe(D,le,W){if(p()||Y()){var we=Te(D);we!==D&&(le=D,D=we,W=!1),D<0||D>C?!P&&(hf(0,D,le,!0)||hf(C,le,D,!0))?D=V(M(D)):v?D=W?D<0?-(I%A||A):I:D:n.rewind?D=D<0?C:0:D=-1:W&&D!==le&&(D=V(M(le)+(D<le?-1:1)))}else D=-1;return D}function Te(D){if(_&&n.trimSpace==="move"&&D!==y)for(var le=a();le===c(D,!0)&&hf(D,0,e.length-1,!n.rewind);)D<y?--D:++D;return D}function ge(D){return v?(D+I)%I||0:D}function $(){for(var D=I-(Y()||v&&P?1:A);x&&D-- >0;)if(c(I-1,!0)!==c(D,!0)){D++;break}return Na(D,0,I-1)}function V(D){return Na(Y()?D:A*D,0,C)}function M(D){return Y()?io(D,C):kp((D>=C?I-1:D)/A)}function ee(D){var le=o.toIndex(D);return _?Na(le,0,C):le}function U(D){D!==y&&(T=y,y=D)}function B(D){return D?T:y}function Y(){return!Od(n.focus)||n.isNavigation}function z(){return e.state.is([Zl,Nd])&&!!n.waitForTransition}return{mount:O,go:j,scroll:J,getNext:k,getPrev:S,getAdjacent:ue,getEnd:$,setIndex:U,getIndex:B,toIndex:V,toPage:M,toDest:ee,hasFocus:Y,isBusy:z}}var DH="http://www.w3.org/2000/svg",bH="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Uh=40;function IH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=r.emit,a=n.classes,u=n.i18n,c=t.Elements,h=t.Controller,p=c.arrows,m=c.track,x=p,v=c.prev,_=c.next,k,S,y={};function C(){I(),i(Pn,T)}function T(){P(),C()}function I(){var J=n.arrows;J&&!(v&&_)&&Z(),v&&_&&(qc(y,{prev:v,next:_}),Kc(x,J?"":"none"),di(x,S=Dx+"--"+n.direction),J&&(A(),j(),be([v,_],$d,m.id),o(zO,v,_)))}function P(){r.destroy(),Ui(x,S),k?(ra(p?[v,_]:x),v=_=null):hi([v,_],Tx)}function A(){i([mo,eu,$t,ya,Tp],j),s(_,"click",nt(O,">")),s(v,"click",nt(O,"<"))}function O(J){h.go(J,!0)}function Z(){x=p||cl("div",a.arrows),v=F(!0),_=F(!1),k=!0,Pd(x,[v,_]),!p&&px(x,m)}function F(J){var X='<button class="'+a.arrow+" "+(J?a.prev:a.next)+'" type="button"><svg xmlns="'+DH+'" viewBox="0 0 '+Uh+" "+Uh+'" width="'+Uh+'" height="'+Uh+'" focusable="false"><path d="'+(n.arrowPath||bH)+'" />';return AO(X)}function j(){if(v&&_){var J=e.index,X=h.getPrev(),ue=h.getNext(),oe=X>-1&&J<X?u.last:u.prev,Te=ue>-1&&J>ue?u.first:u.next;v.disabled=X<0,_.disabled=ue<0,be(v,vr,oe),be(_,vr,Te),o(VO,v,_,X,ue)}}return{arrows:y,mount:C,destroy:P,update:j}}var AH=gx+"-interval";function NH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=r.emit,a=ug(n.interval,e.go.bind(e,">"),A),u=a.isPaused,c=t.Elements,h=t.Elements,p=h.root,m=h.toggle,x=n.autoplay,v,_,k=x==="pause";function S(){x&&(y(),m&&be(m,$d,c.track.id),k||C(),P())}function y(){n.pauseOnHover&&s(p,"mouseenter mouseleave",function(Z){v=Z.type==="mouseenter",I()}),n.pauseOnFocus&&s(p,"focusin focusout",function(Z){_=Z.type==="focusin",I()}),m&&s(m,"click",function(){k?C():T(!0)}),i([rs,lg,$t],a.rewind),i(rs,O)}function C(){u()&&t.Slides.isEnough()&&(a.start(!n.resetProgress),_=v=k=!1,P(),o(xx))}function T(Z){Z===void 0&&(Z=!0),k=!!Z,P(),u()||(a.pause(),o(Sx))}function I(){k||(v||_?T(!1):C())}function P(){m&&(Fi(m,ia,!k),be(m,vr,n.i18n[k?"play":"pause"]))}function A(Z){var F=c.bar;F&&Rr(F,"width",Z*100+"%"),o(WO,Z)}function O(Z){var F=t.Slides.getAt(Z);a.set(F&&+Mr(F.slide,AH)||n.interval)}return{mount:S,destroy:a.cancel,play:C,pause:T,isPaused:u}}function OH(e,t,n){var r=Ct(e),i=r.on;function s(){n.cover&&(i(Cx,nt(a,!0)),i([mo,Pn,$t],nt(o,!0)))}function o(u){t.Slides.forEach(function(c){var h=Md(c.container||c.slide,"img");h&&h.src&&a(u,h,c)})}function a(u,c,h){h.style("background",u?'center/cover no-repeat url("'+c.src+'")':"",!0),Kc(c,u?"none":"")}return{mount:s,destroy:nt(o,!1)}}var RH=10,PH=600,MH=.6,LH=1.5,$H=800;function FH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=e.state.set,a=t.Move,u=a.getPosition,c=a.getLimit,h=a.exceededLimit,p=a.translate,m=e.is(Ml),x,v,_=1;function k(){i(rs,T),i([Pn,$t],I)}function S(A,O,Z,F,j){var J=u();if(T(),Z&&(!m||!h())){var X=t.Layout.sliderSize(),ue=p1(A)*X*kp(zn(A)/X)||0;A=a.toPosition(t.Controller.toDest(A%X))+ue}var oe=OO(J,A,1);_=1,O=oe?0:O||Ep(zn(A-J)/LH,$H),v=F,x=ug(O,y,nt(C,J,A,j),1),o(Nd),s(lg),x.start()}function y(){o(Rl),v&&v(),s(ya)}function C(A,O,Z,F){var j=u(),J=A+(O-A)*P(F),X=(J-j)*_;p(j+X),m&&!Z&&h()&&(_*=MH,zn(X)<RH&&S(c(h(!0)),PH,!1,v,!0))}function T(){x&&x.cancel()}function I(){x&&!x.isPaused()&&(T(),y())}function P(A){var O=n.easingFunc;return O?O(A):1-Math.pow(1-A,4)}return{mount:k,destroy:T,scroll:S,cancel:I}}var Oa={passive:!1,capture:!0};function UH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=r.bind,a=r.unbind,u=e.state,c=t.Move,h=t.Scroll,p=t.Controller,m=t.Elements.track,x=t.Media.reduce,v=t.Direction,_=v.resolve,k=v.orient,S=c.getPosition,y=c.exceededLimit,C,T,I,P,A,O=!1,Z,F,j;function J(){o(m,dy,h1,Oa),o(m,hy,h1,Oa),o(m,oR,ue,Oa),o(m,"click",ge,{capture:!0}),o(m,"dragstart",Ai),i([mo,Pn],X)}function X(){var ne=n.drag;_e(!ne),P=ne==="free"}function ue(ne){if(Z=!1,!F){var De=me(ne);we(ne.target)&&(De||!ne.button)&&(p.isBusy()?Ai(ne,!0):(j=De?m:window,A=u.is([Zl,Nd]),I=null,o(j,dy,oe,Oa),o(j,hy,Te,Oa),c.cancel(),h.cancel(),$(ne)))}}function oe(ne){if(u.is(cf)||(u.set(cf),s(FO)),ne.cancelable)if(A){c.translate(C+W(Y(ne)));var De=z(ne)>S2,Ee=O!==(O=y());(De||Ee)&&$(ne),Z=!0,s(UO),Ai(ne)}else ee(ne)&&(A=M(ne),Ai(ne))}function Te(ne){u.is(cf)&&(u.set(Rl),s(BO)),A&&(V(ne),Ai(ne)),a(j,dy,oe),a(j,hy,Te),A=!1}function ge(ne){!F&&Z&&Ai(ne,!0)}function $(ne){I=T,T=ne,C=S()}function V(ne){var De=U(ne),Ee=B(De),dt=n.rewind&&n.rewindByDrag;x(!1),P?p.scroll(Ee,0,n.snap):e.is(Fd)?p.go(k(p1(De))<0?dt?"<":"-":dt?">":"+"):e.is(Ml)&&O&&dt?p.go(y(!0)?">":"<"):p.go(p.toDest(Ee),!0),x(!0)}function M(ne){var De=n.dragMinThreshold,Ee=Wc(De),dt=Ee&&De.mouse||0,Le=(Ee?De.touch:+De)||10;return zn(Y(ne))>(me(ne)?Le:dt)}function ee(ne){return zn(Y(ne))>zn(Y(ne,!0))}function U(ne){if(e.is(tu)||!O){var De=z(ne);if(De&&De<S2)return Y(ne)/De}return 0}function B(ne){return S()+p1(ne)*io(zn(ne)*(n.flickPower||600),P?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function Y(ne,De){return le(ne,De)-le(D(ne),De)}function z(ne){return f1(ne)-f1(D(ne))}function D(ne){return T===ne&&I||T}function le(ne,De){return(me(ne)?ne.changedTouches[0]:ne)["page"+_(De?"Y":"X")]}function W(ne){return ne/(O&&e.is(Ml)?vH:1)}function we(ne){var De=n.noDrag;return!Hc(ne,"."+tR+", ."+mg)&&(!De||!Hc(ne,De))}function me(ne){return typeof TouchEvent!="undefined"&&ne instanceof TouchEvent}function Be(){return A}function _e(ne){F=ne}return{mount:J,disable:_e,isDragging:Be}}var BH={Spacebar:" ",Right:hg,Left:dg,Up:qO,Down:KO};function bx(e){return e=ro(e)?e:e.key,BH[e]||e}var C2="keydown";function zH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=r.unbind,a=e.root,u=t.Direction.resolve,c,h;function p(){m(),i(Pn,x),i(Pn,m),i(rs,_)}function m(){var S=n.keyboard;S&&(c=S==="global"?window:a,s(c,C2,k))}function x(){o(c,C2)}function v(S){h=S}function _(){var S=h;h=!0,kO(function(){h=S})}function k(S){if(!h){var y=bx(S);y===u(dg)?e.go("<"):y===u(hg)&&e.go(">")}}return{mount:p,destroy:x,disable:v}}var rc=gx+"-lazy",ff=rc+"-srcset",VH="["+rc+"], ["+ff+"]";function jH(e,t,n){var r=Ct(e),i=r.on,s=r.off,o=r.bind,a=r.emit,u=n.lazyLoad==="sequential",c=[eu,ya],h=[];function p(){n.lazyLoad&&(m(),i($t,m))}function m(){ns(h),x(),u?S():(s(c),i(c,v),v())}function x(){t.Slides.forEach(function(y){mx(y.slide,VH).forEach(function(C){var T=Mr(C,rc),I=Mr(C,ff);if(T!==C.src||I!==C.srcset){var P=n.classes.spinner,A=C.parentElement,O=Md(A,"."+P)||cl("span",P,A);h.push([C,y,O]),C.src||Kc(C,"none")}})})}function v(){h=h.filter(function(y){var C=n.perPage*((n.preloadPages||1)+1)-1;return y[1].isWithin(e.index,C)?_(y):!0}),h.length||s(c)}function _(y){var C=y[0];di(y[1].slide,v1),o(C,"load error",nt(k,y)),be(C,"src",Mr(C,rc)),be(C,"srcset",Mr(C,ff)),hi(C,rc),hi(C,ff)}function k(y,C){var T=y[0],I=y[1];Ui(I.slide,v1),C.type!=="error"&&(ra(y[2]),Kc(T,""),a(Cx,T,I),a(Pl)),u&&S()}function S(){h.length&&_(h.shift())}return{mount:p,destroy:nt(ns,h),check:v}}function YH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=r.bind,a=t.Slides,u=t.Elements,c=t.Controller,h=c.hasFocus,p=c.getIndex,m=c.go,x=t.Direction.resolve,v=u.pagination,_=[],k,S;function y(){C(),i([Pn,$t,Tp],y);var F=n.pagination;v&&Kc(v,F?"":"none"),F&&(i([rs,lg,ya],Z),T(),Z(),s(jO,{list:k,items:_},O(e.index)))}function C(){k&&(ra(v?po(k.children):k),Ui(k,S),ns(_),k=null),r.destroy()}function T(){var F=e.length,j=n.classes,J=n.i18n,X=n.perPage,ue=h()?c.getEnd()+1:Qc(F/X);k=v||cl("ul",j.pagination,u.track.parentElement),di(k,S=gg+"--"+A()),be(k,Yi,"tablist"),be(k,vr,J.select),be(k,kx,A()===fg?"vertical":"");for(var oe=0;oe<ue;oe++){var Te=cl("li",null,k),ge=cl("button",{class:j.page,type:"button"},Te),$=a.getIn(oe).map(function(M){return M.slide.id}),V=!h()&&X>1?J.pageX:J.slideX;o(ge,"click",nt(I,oe)),n.paginationKeyboard&&o(ge,"keydown",nt(P,oe)),be(Te,Yi,"presentation"),be(ge,Yi,"tab"),be(ge,$d,$.join(" ")),be(ge,vr,m1(V,oe+1)),be(ge,dl,-1),_.push({li:Te,button:ge,page:oe})}}function I(F){m(">"+F,!0)}function P(F,j){var J=_.length,X=bx(j),ue=A(),oe=-1;X===x(hg,!1,ue)?oe=++F%J:X===x(dg,!1,ue)?oe=(--F+J)%J:X==="Home"?oe=0:X==="End"&&(oe=J-1);var Te=_[oe];Te&&(IO(Te.button),m(">"+oe),Ai(j,!0))}function A(){return n.paginationDirection||n.direction}function O(F){return _[c.toPage(F)]}function Z(){var F=O(p(!0)),j=O(p());if(F){var J=F.button;Ui(J,ia),hi(J,y2),be(J,dl,-1)}if(j){var X=j.button;di(X,ia),be(X,y2,!0),be(X,dl,"")}s(YO,{list:k,items:_},F,j)}return{items:_,mount:y,destroy:C,getAt:O,update:Z}}var WH=[" ","Enter"];function HH(e,t,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){e.splides.forEach(function(v){v.isParent||(c(e,v.splide),c(v.splide,e))}),r&&h()}function a(){s.forEach(function(v){v.destroy()}),ns(s)}function u(){a(),o()}function c(v,_){var k=Ct(v);k.on(rs,function(S,y,C){_.go(_.is(tu)?C:S)}),s.push(k)}function h(){var v=Ct(e),_=v.on;_(vx,m),_(HO,x),_([mo,Pn],p),s.push(v),v.emit(_x,e.splides)}function p(){be(t.Elements.list,kx,n.direction===fg?"vertical":"")}function m(v){e.go(v.index)}function x(v,_){fx(WH,bx(_))&&(m(v),Ai(_))}return{setup:nt(t.Media.set,{slideFocus:Od(i)?r:i},!0),mount:o,destroy:a,remount:u}}function GH(e,t,n){var r=Ct(e),i=r.bind,s=0;function o(){n.wheel&&i(t.Elements.track,"wheel",a,Oa)}function a(c){if(c.cancelable){var h=c.deltaY,p=h<0,m=f1(c),x=n.wheelMinThreshold||0,v=n.wheelSleep||0;zn(h)>x&&m-s>v&&(e.go(p?"<":">"),s=m),u(p)&&Ai(c)}}function u(c){return!n.releaseWheel||e.state.is(Zl)||t.Controller.getAdjacent(c)!==-1}return{mount:o}}var qH=90;function KH(e,t,n){var r=Ct(e),i=r.on,s=t.Elements.track,o=n.live&&!n.isNavigation,a=cl("span",fH),u=ug(qH,nt(h,!1));function c(){o&&(m(!t.Autoplay.isPaused()),be(s,_2,!0),a.textContent="\u2026",i(xx,nt(m,!0)),i(Sx,nt(m,!1)),i([eu,ya],nt(h,!0)))}function h(x){be(s,w2,x),x?(Pd(s,a),u.start()):(ra(a),u.cancel())}function p(){hi(s,[v2,_2,w2]),ra(a)}function m(x){o&&be(s,v2,x?"off":"polite")}return{mount:c,disable:m,destroy:p}}var QH=Object.freeze({__proto__:null,Media:iH,Direction:sH,Elements:wH,Slides:xH,Layout:SH,Clones:EH,Move:kH,Controller:TH,Arrows:IH,Autoplay:NH,Cover:OH,Scroll:FH,Drag:UH,Keyboard:zH,LazyLoad:jH,Pagination:YH,Sync:HH,Wheel:GH,Live:KH}),XH={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},JH={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:gH,i18n:XH,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ZH(e,t,n){var r=t.Slides;function i(){Ct(e).on([mo,$t],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,u){r.style("transition","opacity "+n.speed+"ms "+n.easing),kO(u)}return{mount:i,start:o,cancel:h1}}function eG(e,t,n){var r=t.Move,i=t.Controller,s=t.Scroll,o=t.Elements.list,a=nt(Rr,o,"transition"),u;function c(){Ct(e).bind(o,"transitionend",function(x){x.target===o&&u&&(p(),u())})}function h(x,v){var _=r.toPosition(x,!0),k=r.getPosition(),S=m(x);zn(_-k)>=1&&S>=1?n.useScroll?s.scroll(_,S,!1,v):(a("transform "+S+"ms "+n.easing),r.translate(_,!0),u=v):(r.jump(x),v())}function p(){a(""),s.cancel()}function m(x){var v=n.rewindSpeed;if(e.is(Ml)&&v){var _=i.getIndex(!0),k=i.getEnd();if(_===0&&x>=k||_>=k&&x===0)return v}return n.speed}return{mount:c,start:h,cancel:p}}var tG=function(){function e(n,r){this.event=Ct(),this.Components={},this.state=nH(qa),this.splides=[],this._o={},this._E={};var i=ro(n)?NO(document,n):n;nc(i,i+" is invalid."),this.root=i,r=bs({label:Mr(i,vr)||"",labelledby:Mr(i,Ex)||""},JH,e.defaults,r||{});try{bs(r,JSON.parse(Mr(i,gx)))}catch{nc(!1,"Invalid JSON")}this._o=Object.create(bs({},r))}var t=e.prototype;return t.mount=function(r,i){var s=this,o=this.state,a=this.Components;nc(o.is([qa,Cp]),"Already mounted!"),o.set(qa),this._C=a,this._T=i||this._T||(this.is(Fd)?ZH:eG),this._E=r||this._E;var u=qc({},QH,this._E,{Transition:this._T});return Bo(u,function(c,h){var p=c(s,a,s._o);a[h]=p,p.setup&&p.setup()}),Bo(a,function(c){c.mount&&c.mount()}),this.emit(mo),di(this.root,pH),o.set(Rl),this.emit(g1),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Rl)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,i){return this.event.on(r,i),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(po(arguments,1))),this},t.add=function(r,i){return this._C.Slides.add(r,i),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit($t),this},t.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(qa)?Ct(this).on(g1,this.destroy.bind(this,r)):(Bo(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(wx),i.destroy(),r&&ns(this.splides),s.set(Cp)),this},XW(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Ix=tG;Ix.defaults={};Ix.STATES=ZW;var E2=[[mo,"onMounted"],[g1,"onReady"],[rs,"onMove"],[eu,"onMoved"],[vx,"onClick"],[PO,"onActive"],[MO,"onInactive"],[LO,"onVisible"],[$O,"onHidden"],[$t,"onRefresh"],[Pn,"onUpdated"],[Pl,"onResize"],[ag,"onResized"],[FO,"onDrag"],[UO,"onDragging"],[BO,"onDragged"],[lg,"onScroll"],[ya,"onScrolled"],[wx,"onDestroy"],[zO,"onArrowsMounted"],[VO,"onArrowsUpdated"],[jO,"onPaginationMounted"],[YO,"onPaginationUpdated"],[_x,"onNavigationMounted"],[xx,"onAutoplayPlay"],[WO,"onAutoplayPlaying"],[Sx,"onAutoplayPause"],[Cx,"onLazyLoadLoaded"]];function Ax(...e){return e.filter(Boolean).join(" ")}function Dp(e){return e!==null&&typeof e=="object"}function w1(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((n,r)=>!w1(n,t[r]));if(Dp(e)&&Dp(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!w1(e[i],t[i]))}return e===t}function nG(e,t){return e.length===t.length&&!e.some((n,r)=>n!==t[r])}function rG(e,t){if(e){const n=Object.keys(e);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function _1(e,t){const n=e;return rG(t,(r,i)=>{Array.isArray(r)?n[i]=r.slice():Dp(r)?n[i]=_1(Dp(n[i])?n[i]:{},r):n[i]=r}),n}var iG=({children:e,className:t,...n})=>w("div",{className:Ax("splide__track",t),...n,children:w("ul",{className:"splide__list",children:e})}),Nx=class extends Xt.Component{constructor(){super(...arguments),this.splideRef=Xt.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new Ix(r,e),this.bind(this.splide),this.splide.mount(t,n),this.options=_1({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!w1(this.options,e)&&(this.splide.options=e,this.options=_1({},e));const t=this.getSlides();nG(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){E2.forEach(([t,n])=>{const r=this.props[n];typeof r=="function"&&e.on(t,(...i)=>{r(e,...i)})})}omit(e,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(e,n)&&delete e[n]}),e}render(){const{className:e,tag:t="div",hasTrack:n=!0,children:r,...i}=this.props;return Xt.createElement(t,{className:Ax("splide",e),ref:this.splideRef,...this.omit(i,["options",...E2.map(s=>s[1])])},n?Xt.createElement(iG,null,r):r)}},Ox=({children:e,className:t,...n})=>Xt.createElement("li",{className:Ax("splide__slide",t),...n},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 *///! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var aR;function te(){return aR.apply(null,arguments)}function sG(e){aR=e}function Vr(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function zo(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Rx(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Ye(e,t))return!1;return!0}function $n(e){return e===void 0}function is(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Ud(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function lR(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Is(e,t){for(var n in t)Ye(t,n)&&(e[n]=t[n]);return Ye(t,"toString")&&(e.toString=t.toString),Ye(t,"valueOf")&&(e.valueOf=t.valueOf),e}function gi(e,t,n,r){return OR(e,t,n,r,!0).utc()}function oG(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Ie(e){return e._pf==null&&(e._pf=oG()),e._pf}var x1;Array.prototype.some?x1=Array.prototype.some:x1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Px(e){if(e._isValid==null){var t=Ie(e),n=x1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function yg(e){var t=gi(NaN);return e!=null?Is(Ie(t),e):Ie(t).userInvalidated=!0,t}var k2=te.momentProperties=[],fy=!1;function Mx(e,t){var n,r,i,s=k2.length;if($n(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),$n(t._i)||(e._i=t._i),$n(t._f)||(e._f=t._f),$n(t._l)||(e._l=t._l),$n(t._strict)||(e._strict=t._strict),$n(t._tzm)||(e._tzm=t._tzm),$n(t._isUTC)||(e._isUTC=t._isUTC),$n(t._offset)||(e._offset=t._offset),$n(t._pf)||(e._pf=Ie(t)),$n(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=k2[n],i=t[r],$n(i)||(e[r]=i);return e}function Bd(e){Mx(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),fy===!1&&(fy=!0,te.updateOffset(this),fy=!1)}function jr(e){return e instanceof Bd||e!=null&&e._isAMomentObject!=null}function uR(e){te.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+e)}function kr(e,t){var n=!0;return Is(function(){if(te.deprecationHandler!=null&&te.deprecationHandler(null,e),n){var r=[],i,s,o,a=arguments.length;for(s=0;s<a;s++){if(i="",typeof arguments[s]=="object"){i+=`
[`+s+"] ";for(o in arguments[0])Ye(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];r.push(i)}uR(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var T2={};function cR(e,t){te.deprecationHandler!=null&&te.deprecationHandler(e,t),T2[e]||(uR(t),T2[e]=!0)}te.suppressDeprecationWarnings=!1;te.deprecationHandler=null;function yi(e){return typeof Function!="undefined"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function aG(e){var t,n;for(n in e)Ye(e,n)&&(t=e[n],yi(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function S1(e,t){var n=Is({},e),r;for(r in t)Ye(t,r)&&(zo(e[r])&&zo(t[r])?(n[r]={},Is(n[r],e[r]),Is(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Ye(e,r)&&!Ye(t,r)&&zo(e[r])&&(n[r]=Is({},n[r]));return n}function Lx(e){e!=null&&this.set(e)}var C1;Object.keys?C1=Object.keys:C1=function(e){var t,n=[];for(t in e)Ye(e,t)&&n.push(t);return n};var lG={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function uG(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return yi(r)?r.call(t,n):r}function fi(e,t,n){var r=""+Math.abs(e),i=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var $x=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Bh=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,py={},hl={};function he(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(hl[e]=i),t&&(hl[t[0]]=function(){return fi(i.apply(this,arguments),t[1],t[2])}),n&&(hl[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function cG(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function dG(e){var t=e.match($x),n,r;for(n=0,r=t.length;n<r;n++)hl[t[n]]?t[n]=hl[t[n]]:t[n]=cG(t[n]);return function(i){var s="",o;for(o=0;o<r;o++)s+=yi(t[o])?t[o].call(i,e):t[o];return s}}function pf(e,t){return e.isValid()?(t=dR(t,e.localeData()),py[t]=py[t]||dG(t),py[t](e)):e.localeData().invalidDate()}function dR(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Bh.lastIndex=0;n>=0&&Bh.test(e);)e=e.replace(Bh,r),Bh.lastIndex=0,n-=1;return e}var hG={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function fG(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match($x).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var pG="Invalid date";function mG(){return this._invalidDate}var gG="%d",yG=/\d{1,2}/;function vG(e){return this._ordinal.replace("%d",e)}var wG={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function _G(e,t,n,r){var i=this._relativeTime[n];return yi(i)?i(e,t,n,r):i.replace(/%d/i,e)}function xG(e,t){var n=this._relativeTime[e>0?"future":"past"];return yi(n)?n(t):n.replace(/%s/i,t)}var ic={};function kn(e,t){var n=e.toLowerCase();ic[n]=ic[n+"s"]=ic[t]=e}function Tr(e){return typeof e=="string"?ic[e]||ic[e.toLowerCase()]:void 0}function Fx(e){var t={},n,r;for(r in e)Ye(e,r)&&(n=Tr(r),n&&(t[n]=e[r]));return t}var hR={};function Tn(e,t){hR[e]=t}function SG(e){var t=[],n;for(n in e)Ye(e,n)&&t.push({unit:n,priority:hR[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function vg(e){return e%4===0&&e%100!==0||e%400===0}function mr(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Re(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=mr(t)),n}function nu(e,t){return function(n){return n!=null?(fR(this,e,n),te.updateOffset(this,t),this):bp(this,e)}}function bp(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function fR(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&vg(e.year())&&e.month()===1&&e.date()===29?(n=Re(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Eg(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function CG(e){return e=Tr(e),yi(this[e])?this[e]():this}function EG(e,t){if(typeof e=="object"){e=Fx(e);var n=SG(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=Tr(e),yi(this[e]))return this[e](t);return this}var pR=/\d/,dr=/\d\d/,mR=/\d{3}/,Ux=/\d{4}/,wg=/[+-]?\d{6}/,ct=/\d\d?/,gR=/\d\d\d\d?/,yR=/\d\d\d\d\d\d?/,_g=/\d{1,3}/,Bx=/\d{1,4}/,xg=/[+-]?\d{1,6}/,ru=/\d+/,Sg=/[+-]?\d+/,kG=/Z|[+-]\d\d:?\d\d/gi,Cg=/Z|[+-]\d\d(?::?\d\d)?/gi,TG=/[+-]?\d+(\.\d{1,3})?/,zd=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Ip;Ip={};function se(e,t,n){Ip[e]=yi(t)?t:function(r,i){return r&&n?n:t}}function DG(e,t){return Ye(Ip,e)?Ip[e](t._strict,t._locale):new RegExp(bG(e))}function bG(e){return Zn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,s){return n||r||i||s}))}function Zn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var E1={};function et(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),is(t)&&(r=function(s,o){o[t]=Re(s)}),i=e.length,n=0;n<i;n++)E1[e[n]]=r}function Vd(e,t){et(e,function(n,r,i,s){i._w=i._w||{},t(n,i._w,i,s)})}function IG(e,t,n){t!=null&&Ye(E1,e)&&E1[e](t,n._a,n,e)}var xn=0,Bi=1,Xr=2,Wt=3,Lr=4,zi=5,Po=6,AG=7,NG=8;function OG(e,t){return(e%t+t)%t}var Nt;Array.prototype.indexOf?Nt=Array.prototype.indexOf:Nt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Eg(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=OG(t,12);return e+=(t-n)/12,n===1?vg(e)?29:28:31-n%7%2}he("M",["MM",2],"Mo",function(){return this.month()+1});he("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});he("MMMM",0,0,function(e){return this.localeData().months(this,e)});kn("month","M");Tn("month",8);se("M",ct);se("MM",ct,dr);se("MMM",function(e,t){return t.monthsShortRegex(e)});se("MMMM",function(e,t){return t.monthsRegex(e)});et(["M","MM"],function(e,t){t[Bi]=Re(e)-1});et(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[Bi]=i:Ie(n).invalidMonth=e});var RG="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),vR="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),wR=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,PG=zd,MG=zd;function LG(e,t){return e?Vr(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||wR).test(t)?"format":"standalone"][e.month()]:Vr(this._months)?this._months:this._months.standalone}function $G(e,t){return e?Vr(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[wR.test(t)?"format":"standalone"][e.month()]:Vr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function FG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=gi([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null):t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null)):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null))}function UG(e,t,n){var r,i,s;if(this._monthsParseExact)return FG.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=gi([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function _R(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=Re(t);else if(t=e.localeData().monthsParse(t),!is(t))return e}return n=Math.min(e.date(),Eg(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function xR(e){return e!=null?(_R(this,e),te.updateOffset(this,!0),this):bp(this,"Month")}function BG(){return Eg(this.year(),this.month())}function zG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||SR.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Ye(this,"_monthsShortRegex")||(this._monthsShortRegex=PG),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function VG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||SR.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Ye(this,"_monthsRegex")||(this._monthsRegex=MG),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function SR(){function e(o,a){return a.length-o.length}var t=[],n=[],r=[],i,s;for(i=0;i<12;i++)s=gi([2e3,i]),t.push(this.monthsShort(s,"")),n.push(this.months(s,"")),r.push(this.months(s,"")),r.push(this.monthsShort(s,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=Zn(t[i]),n[i]=Zn(n[i]);for(i=0;i<24;i++)r[i]=Zn(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}he("Y",0,0,function(){var e=this.year();return e<=9999?fi(e,4):"+"+e});he(0,["YY",2],0,function(){return this.year()%100});he(0,["YYYY",4],0,"year");he(0,["YYYYY",5],0,"year");he(0,["YYYYYY",6,!0],0,"year");kn("year","y");Tn("year",1);se("Y",Sg);se("YY",ct,dr);se("YYYY",Bx,Ux);se("YYYYY",xg,wg);se("YYYYYY",xg,wg);et(["YYYYY","YYYYYY"],xn);et("YYYY",function(e,t){t[xn]=e.length===2?te.parseTwoDigitYear(e):Re(e)});et("YY",function(e,t){t[xn]=te.parseTwoDigitYear(e)});et("Y",function(e,t){t[xn]=parseInt(e,10)});function sc(e){return vg(e)?366:365}te.parseTwoDigitYear=function(e){return Re(e)+(Re(e)>68?1900:2e3)};var CR=nu("FullYear",!0);function jG(){return vg(this.year())}function YG(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function Jc(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ap(e,t,n){var r=7+t-n,i=(7+Jc(e,0,r).getUTCDay()-t)%7;return-i+r-1}function ER(e,t,n,r,i){var s=(7+n-r)%7,o=Ap(e,r,i),a=1+7*(t-1)+s+o,u,c;return a<=0?(u=e-1,c=sc(u)+a):a>sc(e)?(u=e+1,c=a-sc(e)):(u=e,c=a),{year:u,dayOfYear:c}}function Zc(e,t,n){var r=Ap(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,s,o;return i<1?(o=e.year()-1,s=i+Wi(o,t,n)):i>Wi(e.year(),t,n)?(s=i-Wi(e.year(),t,n),o=e.year()+1):(o=e.year(),s=i),{week:s,year:o}}function Wi(e,t,n){var r=Ap(e,t,n),i=Ap(e+1,t,n);return(sc(e)-r+i)/7}he("w",["ww",2],"wo","week");he("W",["WW",2],"Wo","isoWeek");kn("week","w");kn("isoWeek","W");Tn("week",5);Tn("isoWeek",5);se("w",ct);se("ww",ct,dr);se("W",ct);se("WW",ct,dr);Vd(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=Re(e)});function WG(e){return Zc(e,this._week.dow,this._week.doy).week}var HG={dow:0,doy:6};function GG(){return this._week.dow}function qG(){return this._week.doy}function KG(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function QG(e){var t=Zc(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}he("d",0,"do","day");he("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});he("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});he("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});he("e",0,0,"weekday");he("E",0,0,"isoWeekday");kn("day","d");kn("weekday","e");kn("isoWeekday","E");Tn("day",11);Tn("weekday",11);Tn("isoWeekday",11);se("d",ct);se("e",ct);se("E",ct);se("dd",function(e,t){return t.weekdaysMinRegex(e)});se("ddd",function(e,t){return t.weekdaysShortRegex(e)});se("dddd",function(e,t){return t.weekdaysRegex(e)});Vd(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:Ie(n).invalidWeekday=e});Vd(["d","e","E"],function(e,t,n,r){t[r]=Re(e)});function XG(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function JG(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function zx(e,t){return e.slice(t,7).concat(e.slice(0,t))}var ZG="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),kR="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),eq="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),tq=zd,nq=zd,rq=zd;function iq(e,t){var n=Vr(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?zx(n,this._week.dow):e?n[e.day()]:n}function sq(e){return e===!0?zx(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function oq(e){return e===!0?zx(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function aq(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=gi([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1?i:null):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null):t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1||(i=Nt.call(this._shortWeekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):(i=Nt.call(this._minWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null))}function lq(e,t,n){var r,i,s;if(this._weekdaysParseExact)return aq.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=gi([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function uq(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=XG(e,this.localeData()),this.add(e-t,"d")):t}function cq(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function dq(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=JG(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function hq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||Vx.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Ye(this,"_weekdaysRegex")||(this._weekdaysRegex=tq),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function fq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||Vx.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Ye(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=nq),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function pq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||Vx.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Ye(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=rq),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vx(){function e(h,p){return p.length-h.length}var t=[],n=[],r=[],i=[],s,o,a,u,c;for(s=0;s<7;s++)o=gi([2e3,1]).day(s),a=Zn(this.weekdaysMin(o,"")),u=Zn(this.weekdaysShort(o,"")),c=Zn(this.weekdays(o,"")),t.push(a),n.push(u),r.push(c),i.push(a),i.push(u),i.push(c);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function jx(){return this.hours()%12||12}function mq(){return this.hours()||24}he("H",["HH",2],0,"hour");he("h",["hh",2],0,jx);he("k",["kk",2],0,mq);he("hmm",0,0,function(){return""+jx.apply(this)+fi(this.minutes(),2)});he("hmmss",0,0,function(){return""+jx.apply(this)+fi(this.minutes(),2)+fi(this.seconds(),2)});he("Hmm",0,0,function(){return""+this.hours()+fi(this.minutes(),2)});he("Hmmss",0,0,function(){return""+this.hours()+fi(this.minutes(),2)+fi(this.seconds(),2)});function TR(e,t){he(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}TR("a",!0);TR("A",!1);kn("hour","h");Tn("hour",13);function DR(e,t){return t._meridiemParse}se("a",DR);se("A",DR);se("H",ct);se("h",ct);se("k",ct);se("HH",ct,dr);se("hh",ct,dr);se("kk",ct,dr);se("hmm",gR);se("hmmss",yR);se("Hmm",gR);se("Hmmss",yR);et(["H","HH"],Wt);et(["k","kk"],function(e,t,n){var r=Re(e);t[Wt]=r===24?0:r});et(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});et(["h","hh"],function(e,t,n){t[Wt]=Re(e),Ie(n).bigHour=!0});et("hmm",function(e,t,n){var r=e.length-2;t[Wt]=Re(e.substr(0,r)),t[Lr]=Re(e.substr(r)),Ie(n).bigHour=!0});et("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Wt]=Re(e.substr(0,r)),t[Lr]=Re(e.substr(r,2)),t[zi]=Re(e.substr(i)),Ie(n).bigHour=!0});et("Hmm",function(e,t,n){var r=e.length-2;t[Wt]=Re(e.substr(0,r)),t[Lr]=Re(e.substr(r))});et("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Wt]=Re(e.substr(0,r)),t[Lr]=Re(e.substr(r,2)),t[zi]=Re(e.substr(i))});function gq(e){return(e+"").toLowerCase().charAt(0)==="p"}var yq=/[ap]\.?m?\.?/i,vq=nu("Hours",!0);function wq(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var bR={calendar:lG,longDateFormat:hG,invalidDate:pG,ordinal:gG,dayOfMonthOrdinalParse:yG,relativeTime:wG,months:RG,monthsShort:vR,week:HG,weekdays:ZG,weekdaysMin:eq,weekdaysShort:kR,meridiemParse:yq},ft={},Eu={},ed;function _q(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function D2(e){return e&&e.toLowerCase().replace("_","-")}function xq(e){for(var t=0,n,r,i,s;t<e.length;){for(s=D2(e[t]).split("-"),n=s.length,r=D2(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=kg(s.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&_q(s,r)>=n-1)break;n--}t++}return ed}function Sq(e){return e.match("^[^/\\\\]*$")!=null}function kg(e){var t=null,n;if(ft[e]===void 0&&typeof yf!="undefined"&&yf&&yf.exports&&Sq(e))try{t=ed._abbr,n=require,n("./locale/"+e),Gs(t)}catch{ft[e]=null}return ft[e]}function Gs(e,t){var n;return e&&($n(t)?n=os(e):n=Yx(e,t),n?ed=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ed._abbr}function Yx(e,t){if(t!==null){var n,r=bR;if(t.abbr=e,ft[e]!=null)cR("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=ft[e]._config;else if(t.parentLocale!=null)if(ft[t.parentLocale]!=null)r=ft[t.parentLocale]._config;else if(n=kg(t.parentLocale),n!=null)r=n._config;else return Eu[t.parentLocale]||(Eu[t.parentLocale]=[]),Eu[t.parentLocale].push({name:e,config:t}),null;return ft[e]=new Lx(S1(r,t)),Eu[e]&&Eu[e].forEach(function(i){Yx(i.name,i.config)}),Gs(e),ft[e]}else return delete ft[e],null}function Cq(e,t){if(t!=null){var n,r,i=bR;ft[e]!=null&&ft[e].parentLocale!=null?ft[e].set(S1(ft[e]._config,t)):(r=kg(e),r!=null&&(i=r._config),t=S1(i,t),r==null&&(t.abbr=e),n=new Lx(t),n.parentLocale=ft[e],ft[e]=n),Gs(e)}else ft[e]!=null&&(ft[e].parentLocale!=null?(ft[e]=ft[e].parentLocale,e===Gs()&&Gs(e)):ft[e]!=null&&delete ft[e]);return ft[e]}function os(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ed;if(!Vr(e)){if(t=kg(e),t)return t;e=[e]}return xq(e)}function Eq(){return C1(ft)}function Wx(e){var t,n=e._a;return n&&Ie(e).overflow===-2&&(t=n[Bi]<0||n[Bi]>11?Bi:n[Xr]<1||n[Xr]>Eg(n[xn],n[Bi])?Xr:n[Wt]<0||n[Wt]>24||n[Wt]===24&&(n[Lr]!==0||n[zi]!==0||n[Po]!==0)?Wt:n[Lr]<0||n[Lr]>59?Lr:n[zi]<0||n[zi]>59?zi:n[Po]<0||n[Po]>999?Po:-1,Ie(e)._overflowDayOfYear&&(t<xn||t>Xr)&&(t=Xr),Ie(e)._overflowWeeks&&t===-1&&(t=AG),Ie(e)._overflowWeekday&&t===-1&&(t=NG),Ie(e).overflow=t),e}var kq=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Tq=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Dq=/Z|[+-]\d\d(?::?\d\d)?/,zh=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],my=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],bq=/^\/?Date\((-?\d+)/i,Iq=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Aq={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function IR(e){var t,n,r=e._i,i=kq.exec(r)||Tq.exec(r),s,o,a,u,c=zh.length,h=my.length;if(i){for(Ie(e).iso=!0,t=0,n=c;t<n;t++)if(zh[t][1].exec(i[1])){o=zh[t][0],s=zh[t][2]!==!1;break}if(o==null){e._isValid=!1;return}if(i[3]){for(t=0,n=h;t<n;t++)if(my[t][1].exec(i[3])){a=(i[2]||" ")+my[t][0];break}if(a==null){e._isValid=!1;return}}if(!s&&a!=null){e._isValid=!1;return}if(i[4])if(Dq.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=o+(a||"")+(u||""),Gx(e)}else e._isValid=!1}function Nq(e,t,n,r,i,s){var o=[Oq(e),vR.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function Oq(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Rq(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Pq(e,t,n){if(e){var r=kR.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return Ie(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Mq(e,t,n){if(e)return Aq[e];if(t)return 0;var r=parseInt(n,10),i=r%100,s=(r-i)/100;return s*60+i}function AR(e){var t=Iq.exec(Rq(e._i)),n;if(t){if(n=Nq(t[4],t[3],t[2],t[5],t[6],t[7]),!Pq(t[1],n,e))return;e._a=n,e._tzm=Mq(t[8],t[9],t[10]),e._d=Jc.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),Ie(e).rfc2822=!0}else e._isValid=!1}function Lq(e){var t=bq.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(IR(e),e._isValid===!1)delete e._isValid;else return;if(AR(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:te.createFromInputFallback(e)}te.createFromInputFallback=kr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ra(e,t,n){return e!=null?e:t!=null?t:n}function $q(e){var t=new Date(te.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Hx(e){var t,n,r=[],i,s,o;if(!e._d){for(i=$q(e),e._w&&e._a[Xr]==null&&e._a[Bi]==null&&Fq(e),e._dayOfYear!=null&&(o=Ra(e._a[xn],i[xn]),(e._dayOfYear>sc(o)||e._dayOfYear===0)&&(Ie(e)._overflowDayOfYear=!0),n=Jc(o,0,e._dayOfYear),e._a[Bi]=n.getUTCMonth(),e._a[Xr]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[Wt]===24&&e._a[Lr]===0&&e._a[zi]===0&&e._a[Po]===0&&(e._nextDay=!0,e._a[Wt]=0),e._d=(e._useUTC?Jc:YG).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Wt]=24),e._w&&typeof e._w.d!="undefined"&&e._w.d!==s&&(Ie(e).weekdayMismatch=!0)}}function Fq(e){var t,n,r,i,s,o,a,u,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,o=4,n=Ra(t.GG,e._a[xn],Zc(ut(),1,4).year),r=Ra(t.W,1),i=Ra(t.E,1),(i<1||i>7)&&(u=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,c=Zc(ut(),s,o),n=Ra(t.gg,e._a[xn],c.year),r=Ra(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+s,(t.e<0||t.e>6)&&(u=!0)):i=s),r<1||r>Wi(n,s,o)?Ie(e)._overflowWeeks=!0:u!=null?Ie(e)._overflowWeekday=!0:(a=ER(n,r,i,s,o),e._a[xn]=a.year,e._dayOfYear=a.dayOfYear)}te.ISO_8601=function(){};te.RFC_2822=function(){};function Gx(e){if(e._f===te.ISO_8601){IR(e);return}if(e._f===te.RFC_2822){AR(e);return}e._a=[],Ie(e).empty=!0;var t=""+e._i,n,r,i,s,o,a=t.length,u=0,c,h;for(i=dR(e._f,e._locale).match($x)||[],h=i.length,n=0;n<h;n++)s=i[n],r=(t.match(DG(s,e))||[])[0],r&&(o=t.substr(0,t.indexOf(r)),o.length>0&&Ie(e).unusedInput.push(o),t=t.slice(t.indexOf(r)+r.length),u+=r.length),hl[s]?(r?Ie(e).empty=!1:Ie(e).unusedTokens.push(s),IG(s,r,e)):e._strict&&!r&&Ie(e).unusedTokens.push(s);Ie(e).charsLeftOver=a-u,t.length>0&&Ie(e).unusedInput.push(t),e._a[Wt]<=12&&Ie(e).bigHour===!0&&e._a[Wt]>0&&(Ie(e).bigHour=void 0),Ie(e).parsedDateParts=e._a.slice(0),Ie(e).meridiem=e._meridiem,e._a[Wt]=Uq(e._locale,e._a[Wt],e._meridiem),c=Ie(e).era,c!==null&&(e._a[xn]=e._locale.erasConvertYear(c,e._a[xn])),Hx(e),Wx(e)}function Uq(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function Bq(e){var t,n,r,i,s,o,a=!1,u=e._f.length;if(u===0){Ie(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)s=0,o=!1,t=Mx({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],Gx(t),Px(t)&&(o=!0),s+=Ie(t).charsLeftOver,s+=Ie(t).unusedTokens.length*10,Ie(t).score=s,a?s<r&&(r=s,n=t):(r==null||s<r||o)&&(r=s,n=t,o&&(a=!0));Is(e,n||t)}function zq(e){if(!e._d){var t=Fx(e._i),n=t.day===void 0?t.date:t.day;e._a=lR([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),Hx(e)}}function Vq(e){var t=new Bd(Wx(NR(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function NR(e){var t=e._i,n=e._f;return e._locale=e._locale||os(e._l),t===null||n===void 0&&t===""?yg({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),jr(t)?new Bd(Wx(t)):(Ud(t)?e._d=t:Vr(n)?Bq(e):n?Gx(e):jq(e),Px(e)||(e._d=null),e))}function jq(e){var t=e._i;$n(t)?e._d=new Date(te.now()):Ud(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Lq(e):Vr(t)?(e._a=lR(t.slice(0),function(n){return parseInt(n,10)}),Hx(e)):zo(t)?zq(e):is(t)?e._d=new Date(t):te.createFromInputFallback(e)}function OR(e,t,n,r,i){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(zo(e)&&Rx(e)||Vr(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=e,s._f=t,s._strict=r,Vq(s)}function ut(e,t,n,r){return OR(e,t,n,r,!1)}var Yq=kr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ut.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:yg()}),Wq=kr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ut.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:yg()});function RR(e,t){var n,r;if(t.length===1&&Vr(t[0])&&(t=t[0]),!t.length)return ut();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function Hq(){var e=[].slice.call(arguments,0);return RR("isBefore",e)}function Gq(){var e=[].slice.call(arguments,0);return RR("isAfter",e)}var qq=function(){return Date.now?Date.now():+new Date},ku=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Kq(e){var t,n=!1,r,i=ku.length;for(t in e)if(Ye(e,t)&&!(Nt.call(ku,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[ku[r]]){if(n)return!1;parseFloat(e[ku[r]])!==Re(e[ku[r]])&&(n=!0)}return!0}function Qq(){return this._isValid}function Xq(){return Wr(NaN)}function Tg(e){var t=Fx(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,u=t.minute||0,c=t.second||0,h=t.millisecond||0;this._isValid=Kq(t),this._milliseconds=+h+c*1e3+u*6e4+a*1e3*60*60,this._days=+o+s*7,this._months=+i+r*3+n*12,this._data={},this._locale=os(),this._bubble()}function mf(e){return e instanceof Tg}function k1(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Jq(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&Re(e[o])!==Re(t[o]))&&s++;return s+i}function PR(e,t){he(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+fi(~~(n/60),2)+t+fi(~~n%60,2)})}PR("Z",":");PR("ZZ","");se("Z",Cg);se("ZZ",Cg);et(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=qx(Cg,e)});var Zq=/([\+\-]|\d\d)/gi;function qx(e,t){var n=(t||"").match(e),r,i,s;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(Zq)||["-",0,0],s=+(i[1]*60)+Re(i[2]),s===0?0:i[0]==="+"?s:-s)}function Kx(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(jr(e)||Ud(e)?e.valueOf():ut(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),te.updateOffset(n,!1),n):ut(e).local()}function T1(e){return-Math.round(e._d.getTimezoneOffset())}te.updateOffset=function(){};function eK(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=qx(Cg,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=T1(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?$R(this,Wr(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,te.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:T1(this)}function tK(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function nK(e){return this.utcOffset(0,e)}function rK(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(T1(this),"m")),this}function iK(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=qx(kG,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function sK(e){return this.isValid()?(e=e?ut(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function oK(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function aK(){if(!$n(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Mx(e,this),e=NR(e),e._a?(t=e._isUTC?gi(e._a):ut(e._a),this._isDSTShifted=this.isValid()&&Jq(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function lK(){return this.isValid()?!this._isUTC:!1}function uK(){return this.isValid()?this._isUTC:!1}function MR(){return this.isValid()?this._isUTC&&this._offset===0:!1}var cK=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,dK=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Wr(e,t){var n=e,r=null,i,s,o;return mf(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:is(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=cK.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:Re(r[Xr])*i,h:Re(r[Wt])*i,m:Re(r[Lr])*i,s:Re(r[zi])*i,ms:Re(k1(r[Po]*1e3))*i}):(r=dK.exec(e))?(i=r[1]==="-"?-1:1,n={y:So(r[2],i),M:So(r[3],i),w:So(r[4],i),d:So(r[5],i),h:So(r[6],i),m:So(r[7],i),s:So(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=hK(ut(n.from),ut(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),s=new Tg(n),mf(e)&&Ye(e,"_locale")&&(s._locale=e._locale),mf(e)&&Ye(e,"_isValid")&&(s._isValid=e._isValid),s}Wr.fn=Tg.prototype;Wr.invalid=Xq;function So(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function b2(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function hK(e,t){var n;return e.isValid()&&t.isValid()?(t=Kx(t,e),e.isBefore(t)?n=b2(e,t):(n=b2(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function LR(e,t){return function(n,r){var i,s;return r!==null&&!isNaN(+r)&&(cR(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),i=Wr(n,r),$R(this,i,e),this}}function $R(e,t,n,r){var i=t._milliseconds,s=k1(t._days),o=k1(t._months);!e.isValid()||(r=r==null?!0:r,o&&_R(e,bp(e,"Month")+o*n),s&&fR(e,"Date",bp(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&te.updateOffset(e,s||o))}var fK=LR(1,"add"),pK=LR(-1,"subtract");function FR(e){return typeof e=="string"||e instanceof String}function mK(e){return jr(e)||Ud(e)||FR(e)||is(e)||yK(e)||gK(e)||e===null||e===void 0}function gK(e){var t=zo(e)&&!Rx(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,s,o=r.length;for(i=0;i<o;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function yK(e){var t=Vr(e),n=!1;return t&&(n=e.filter(function(r){return!is(r)&&FR(e)}).length===0),t&&n}function vK(e){var t=zo(e)&&!Rx(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,s;for(i=0;i<r.length;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function wK(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function _K(e,t){arguments.length===1&&(arguments[0]?mK(arguments[0])?(e=arguments[0],t=void 0):vK(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||ut(),r=Kx(n,this).startOf("day"),i=te.calendarFormat(this,r)||"sameElse",s=t&&(yi(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,ut(n)))}function xK(){return new Bd(this)}function SK(e,t){var n=jr(e)?e:ut(e);return this.isValid()&&n.isValid()?(t=Tr(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function CK(e,t){var n=jr(e)?e:ut(e);return this.isValid()&&n.isValid()?(t=Tr(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function EK(e,t,n,r){var i=jr(e)?e:ut(e),s=jr(t)?t:ut(t);return this.isValid()&&i.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function kK(e,t){var n=jr(e)?e:ut(e),r;return this.isValid()&&n.isValid()?(t=Tr(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function TK(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function DK(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function bK(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(r=Kx(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=Tr(t),t){case"year":s=gf(this,r)/12;break;case"month":s=gf(this,r);break;case"quarter":s=gf(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:mr(s)}function gf(e,t){if(e.date()<t.date())return-gf(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,s;return t-r<0?(i=e.clone().add(n-1,"months"),s=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),s=(t-r)/(i-r)),-(n+s)||0}te.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";te.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function IK(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function AK(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?pf(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):yi(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",pf(n,"Z")):pf(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function NK(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+i+s)}function OK(e){e||(e=this.isUtc()?te.defaultFormatUtc:te.defaultFormat);var t=pf(this,e);return this.localeData().postformat(t)}function RK(e,t){return this.isValid()&&(jr(e)&&e.isValid()||ut(e).isValid())?Wr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function PK(e){return this.from(ut(),e)}function MK(e,t){return this.isValid()&&(jr(e)&&e.isValid()||ut(e).isValid())?Wr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function LK(e){return this.to(ut(),e)}function UR(e){var t;return e===void 0?this._locale._abbr:(t=os(e),t!=null&&(this._locale=t),this)}var BR=kr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function zR(){return this._locale}var Np=1e3,fl=60*Np,Op=60*fl,VR=(365*400+97)*24*Op;function pl(e,t){return(e%t+t)%t}function jR(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-VR:new Date(e,t,n).valueOf()}function YR(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-VR:Date.UTC(e,t,n)}function $K(e){var t,n;if(e=Tr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?YR:jR,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=pl(t+(this._isUTC?0:this.utcOffset()*fl),Op);break;case"minute":t=this._d.valueOf(),t-=pl(t,fl);break;case"second":t=this._d.valueOf(),t-=pl(t,Np);break}return this._d.setTime(t),te.updateOffset(this,!0),this}function FK(e){var t,n;if(e=Tr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?YR:jR,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Op-pl(t+(this._isUTC?0:this.utcOffset()*fl),Op)-1;break;case"minute":t=this._d.valueOf(),t+=fl-pl(t,fl)-1;break;case"second":t=this._d.valueOf(),t+=Np-pl(t,Np)-1;break}return this._d.setTime(t),te.updateOffset(this,!0),this}function UK(){return this._d.valueOf()-(this._offset||0)*6e4}function BK(){return Math.floor(this.valueOf()/1e3)}function zK(){return new Date(this.valueOf())}function VK(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function jK(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function YK(){return this.isValid()?this.toISOString():null}function WK(){return Px(this)}function HK(){return Is({},Ie(this))}function GK(){return Ie(this).overflow}function qK(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}he("N",0,0,"eraAbbr");he("NN",0,0,"eraAbbr");he("NNN",0,0,"eraAbbr");he("NNNN",0,0,"eraName");he("NNNNN",0,0,"eraNarrow");he("y",["y",1],"yo","eraYear");he("y",["yy",2],0,"eraYear");he("y",["yyy",3],0,"eraYear");he("y",["yyyy",4],0,"eraYear");se("N",Qx);se("NN",Qx);se("NNN",Qx);se("NNNN",sQ);se("NNNNN",oQ);et(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?Ie(n).era=i:Ie(n).invalidEra=e});se("y",ru);se("yy",ru);se("yyy",ru);se("yyyy",ru);se("yo",aQ);et(["y","yy","yyy","yyyy"],xn);et(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[xn]=n._locale.eraYearOrdinalParse(e,i):t[xn]=parseInt(e,10)});function KK(e,t){var n,r,i,s=this._eras||os("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":i=te(s[n].since).startOf("day"),s[n].since=i.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":i=te(s[n].until).startOf("day").valueOf(),s[n].until=i.valueOf();break}}return s}function QK(e,t,n){var r,i,s=this.eras(),o,a,u;for(e=e.toUpperCase(),r=0,i=s.length;r<i;++r)if(o=s[r].name.toUpperCase(),a=s[r].abbr.toUpperCase(),u=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return s[r];break;case"NNNN":if(o===e)return s[r];break;case"NNNNN":if(u===e)return s[r];break}else if([o,a,u].indexOf(e)>=0)return s[r]}function XK(e,t){var n=e.since<=e.until?1:-1;return t===void 0?te(e.since).year():te(e.since).year()+(t-e.offset)*n}function JK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function ZK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function eQ(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function tQ(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-te(i[e].since).year())*n+i[e].offset;return this.year()}function nQ(e){return Ye(this,"_erasNameRegex")||Xx.call(this),e?this._erasNameRegex:this._erasRegex}function rQ(e){return Ye(this,"_erasAbbrRegex")||Xx.call(this),e?this._erasAbbrRegex:this._erasRegex}function iQ(e){return Ye(this,"_erasNarrowRegex")||Xx.call(this),e?this._erasNarrowRegex:this._erasRegex}function Qx(e,t){return t.erasAbbrRegex(e)}function sQ(e,t){return t.erasNameRegex(e)}function oQ(e,t){return t.erasNarrowRegex(e)}function aQ(e,t){return t._eraYearOrdinalRegex||ru}function Xx(){var e=[],t=[],n=[],r=[],i,s,o=this.eras();for(i=0,s=o.length;i<s;++i)t.push(Zn(o[i].name)),e.push(Zn(o[i].abbr)),n.push(Zn(o[i].narrow)),r.push(Zn(o[i].name)),r.push(Zn(o[i].abbr)),r.push(Zn(o[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}he(0,["gg",2],0,function(){return this.weekYear()%100});he(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Dg(e,t){he(0,[e,e.length],0,t)}Dg("gggg","weekYear");Dg("ggggg","weekYear");Dg("GGGG","isoWeekYear");Dg("GGGGG","isoWeekYear");kn("weekYear","gg");kn("isoWeekYear","GG");Tn("weekYear",1);Tn("isoWeekYear",1);se("G",Sg);se("g",Sg);se("GG",ct,dr);se("gg",ct,dr);se("GGGG",Bx,Ux);se("gggg",Bx,Ux);se("GGGGG",xg,wg);se("ggggg",xg,wg);Vd(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=Re(e)});Vd(["gg","GG"],function(e,t,n,r){t[r]=te.parseTwoDigitYear(e)});function lQ(e){return WR.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function uQ(e){return WR.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function cQ(){return Wi(this.year(),1,4)}function dQ(){return Wi(this.isoWeekYear(),1,4)}function hQ(){var e=this.localeData()._week;return Wi(this.year(),e.dow,e.doy)}function fQ(){var e=this.localeData()._week;return Wi(this.weekYear(),e.dow,e.doy)}function WR(e,t,n,r,i){var s;return e==null?Zc(this,r,i).year:(s=Wi(e,r,i),t>s&&(t=s),pQ.call(this,e,t,n,r,i))}function pQ(e,t,n,r,i){var s=ER(e,t,n,r,i),o=Jc(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}he("Q",0,"Qo","quarter");kn("quarter","Q");Tn("quarter",7);se("Q",pR);et("Q",function(e,t){t[Bi]=(Re(e)-1)*3});function mQ(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}he("D",["DD",2],"Do","date");kn("date","D");Tn("date",9);se("D",ct);se("DD",ct,dr);se("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});et(["D","DD"],Xr);et("Do",function(e,t){t[Xr]=Re(e.match(ct)[0])});var HR=nu("Date",!0);he("DDD",["DDDD",3],"DDDo","dayOfYear");kn("dayOfYear","DDD");Tn("dayOfYear",4);se("DDD",_g);se("DDDD",mR);et(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Re(e)});function gQ(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}he("m",["mm",2],0,"minute");kn("minute","m");Tn("minute",14);se("m",ct);se("mm",ct,dr);et(["m","mm"],Lr);var yQ=nu("Minutes",!1);he("s",["ss",2],0,"second");kn("second","s");Tn("second",15);se("s",ct);se("ss",ct,dr);et(["s","ss"],zi);var vQ=nu("Seconds",!1);he("S",0,0,function(){return~~(this.millisecond()/100)});he(0,["SS",2],0,function(){return~~(this.millisecond()/10)});he(0,["SSS",3],0,"millisecond");he(0,["SSSS",4],0,function(){return this.millisecond()*10});he(0,["SSSSS",5],0,function(){return this.millisecond()*100});he(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});he(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});he(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});he(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});kn("millisecond","ms");Tn("millisecond",16);se("S",_g,pR);se("SS",_g,dr);se("SSS",_g,mR);var As,GR;for(As="SSSS";As.length<=9;As+="S")se(As,ru);function wQ(e,t){t[Po]=Re(("0."+e)*1e3)}for(As="S";As.length<=9;As+="S")et(As,wQ);GR=nu("Milliseconds",!1);he("z",0,0,"zoneAbbr");he("zz",0,0,"zoneName");function _Q(){return this._isUTC?"UTC":""}function xQ(){return this._isUTC?"Coordinated Universal Time":""}var K=Bd.prototype;K.add=fK;K.calendar=_K;K.clone=xK;K.diff=bK;K.endOf=FK;K.format=OK;K.from=RK;K.fromNow=PK;K.to=MK;K.toNow=LK;K.get=CG;K.invalidAt=GK;K.isAfter=SK;K.isBefore=CK;K.isBetween=EK;K.isSame=kK;K.isSameOrAfter=TK;K.isSameOrBefore=DK;K.isValid=WK;K.lang=BR;K.locale=UR;K.localeData=zR;K.max=Wq;K.min=Yq;K.parsingFlags=HK;K.set=EG;K.startOf=$K;K.subtract=pK;K.toArray=VK;K.toObject=jK;K.toDate=zK;K.toISOString=AK;K.inspect=NK;typeof Symbol!="undefined"&&Symbol.for!=null&&(K[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});K.toJSON=YK;K.toString=IK;K.unix=BK;K.valueOf=UK;K.creationData=qK;K.eraName=JK;K.eraNarrow=ZK;K.eraAbbr=eQ;K.eraYear=tQ;K.year=CR;K.isLeapYear=jG;K.weekYear=lQ;K.isoWeekYear=uQ;K.quarter=K.quarters=mQ;K.month=xR;K.daysInMonth=BG;K.week=K.weeks=KG;K.isoWeek=K.isoWeeks=QG;K.weeksInYear=hQ;K.weeksInWeekYear=fQ;K.isoWeeksInYear=cQ;K.isoWeeksInISOWeekYear=dQ;K.date=HR;K.day=K.days=uq;K.weekday=cq;K.isoWeekday=dq;K.dayOfYear=gQ;K.hour=K.hours=vq;K.minute=K.minutes=yQ;K.second=K.seconds=vQ;K.millisecond=K.milliseconds=GR;K.utcOffset=eK;K.utc=nK;K.local=rK;K.parseZone=iK;K.hasAlignedHourOffset=sK;K.isDST=oK;K.isLocal=lK;K.isUtcOffset=uK;K.isUtc=MR;K.isUTC=MR;K.zoneAbbr=_Q;K.zoneName=xQ;K.dates=kr("dates accessor is deprecated. Use date instead.",HR);K.months=kr("months accessor is deprecated. Use month instead",xR);K.years=kr("years accessor is deprecated. Use year instead",CR);K.zone=kr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",tK);K.isDSTShifted=kr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",aK);function SQ(e){return ut(e*1e3)}function CQ(){return ut.apply(null,arguments).parseZone()}function qR(e){return e}var We=Lx.prototype;We.calendar=uG;We.longDateFormat=fG;We.invalidDate=mG;We.ordinal=vG;We.preparse=qR;We.postformat=qR;We.relativeTime=_G;We.pastFuture=xG;We.set=aG;We.eras=KK;We.erasParse=QK;We.erasConvertYear=XK;We.erasAbbrRegex=rQ;We.erasNameRegex=nQ;We.erasNarrowRegex=iQ;We.months=LG;We.monthsShort=$G;We.monthsParse=UG;We.monthsRegex=VG;We.monthsShortRegex=zG;We.week=WG;We.firstDayOfYear=qG;We.firstDayOfWeek=GG;We.weekdays=iq;We.weekdaysMin=oq;We.weekdaysShort=sq;We.weekdaysParse=lq;We.weekdaysRegex=hq;We.weekdaysShortRegex=fq;We.weekdaysMinRegex=pq;We.isPM=gq;We.meridiem=wq;function Rp(e,t,n,r){var i=os(),s=gi().set(r,t);return i[n](s,e)}function KR(e,t,n){if(is(e)&&(t=e,e=void 0),e=e||"",t!=null)return Rp(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Rp(e,r,n,"month");return i}function Jx(e,t,n,r){typeof e=="boolean"?(is(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,is(t)&&(n=t,t=void 0),t=t||"");var i=os(),s=e?i._week.dow:0,o,a=[];if(n!=null)return Rp(t,(n+s)%7,r,"day");for(o=0;o<7;o++)a[o]=Rp(t,(o+s)%7,r,"day");return a}function EQ(e,t){return KR(e,t,"months")}function kQ(e,t){return KR(e,t,"monthsShort")}function TQ(e,t,n){return Jx(e,t,n,"weekdays")}function DQ(e,t,n){return Jx(e,t,n,"weekdaysShort")}function bQ(e,t,n){return Jx(e,t,n,"weekdaysMin")}Gs("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=Re(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});te.lang=kr("moment.lang is deprecated. Use moment.locale instead.",Gs);te.langData=kr("moment.langData is deprecated. Use moment.localeData instead.",os);var Ti=Math.abs;function IQ(){var e=this._data;return this._milliseconds=Ti(this._milliseconds),this._days=Ti(this._days),this._months=Ti(this._months),e.milliseconds=Ti(e.milliseconds),e.seconds=Ti(e.seconds),e.minutes=Ti(e.minutes),e.hours=Ti(e.hours),e.months=Ti(e.months),e.years=Ti(e.years),this}function QR(e,t,n,r){var i=Wr(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function AQ(e,t){return QR(this,e,t,1)}function NQ(e,t){return QR(this,e,t,-1)}function I2(e){return e<0?Math.floor(e):Math.ceil(e)}function OQ(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,a,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=I2(D1(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=mr(e/1e3),r.seconds=i%60,s=mr(i/60),r.minutes=s%60,o=mr(s/60),r.hours=o%24,t+=mr(o/24),u=mr(XR(t)),n+=u,t-=I2(D1(u)),a=mr(n/12),n%=12,r.days=t,r.months=n,r.years=a,this}function XR(e){return e*4800/146097}function D1(e){return e*146097/4800}function RQ(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=Tr(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+XR(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(D1(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function PQ(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Re(this._months/12)*31536e6:NaN}function as(e){return function(){return this.as(e)}}var MQ=as("ms"),LQ=as("s"),$Q=as("m"),FQ=as("h"),UQ=as("d"),BQ=as("w"),zQ=as("M"),VQ=as("Q"),jQ=as("y");function YQ(){return Wr(this)}function WQ(e){return e=Tr(e),this.isValid()?this[e+"s"]():NaN}function va(e){return function(){return this.isValid()?this._data[e]:NaN}}var HQ=va("milliseconds"),GQ=va("seconds"),qQ=va("minutes"),KQ=va("hours"),QQ=va("days"),XQ=va("months"),JQ=va("years");function ZQ(){return mr(this.days()/7)}var bi=Math.round,Ka={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function eX(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function tX(e,t,n,r){var i=Wr(e).abs(),s=bi(i.as("s")),o=bi(i.as("m")),a=bi(i.as("h")),u=bi(i.as("d")),c=bi(i.as("M")),h=bi(i.as("w")),p=bi(i.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(m=m||h<=1&&["w"]||h<n.w&&["ww",h]),m=m||c<=1&&["M"]||c<n.M&&["MM",c]||p<=1&&["y"]||["yy",p],m[2]=t,m[3]=+e>0,m[4]=r,eX.apply(null,m)}function nX(e){return e===void 0?bi:typeof e=="function"?(bi=e,!0):!1}function rX(e,t){return Ka[e]===void 0?!1:t===void 0?Ka[e]:(Ka[e]=t,e==="s"&&(Ka.ss=t-1),!0)}function iX(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Ka,i,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Ka,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),s=tX(this,!n,r,i),n&&(s=i.pastFuture(+this,s)),i.postformat(s)}var gy=Math.abs;function ba(e){return(e>0)-(e<0)||+e}function bg(){if(!this.isValid())return this.localeData().invalidDate();var e=gy(this._milliseconds)/1e3,t=gy(this._days),n=gy(this._months),r,i,s,o,a=this.asSeconds(),u,c,h,p;return a?(r=mr(e/60),i=mr(r/60),e%=60,r%=60,s=mr(n/12),n%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=a<0?"-":"",c=ba(this._months)!==ba(a)?"-":"",h=ba(this._days)!==ba(a)?"-":"",p=ba(this._milliseconds)!==ba(a)?"-":"",u+"P"+(s?c+s+"Y":"")+(n?c+n+"M":"")+(t?h+t+"D":"")+(i||r||e?"T":"")+(i?p+i+"H":"")+(r?p+r+"M":"")+(e?p+o+"S":"")):"P0D"}var Ue=Tg.prototype;Ue.isValid=Qq;Ue.abs=IQ;Ue.add=AQ;Ue.subtract=NQ;Ue.as=RQ;Ue.asMilliseconds=MQ;Ue.asSeconds=LQ;Ue.asMinutes=$Q;Ue.asHours=FQ;Ue.asDays=UQ;Ue.asWeeks=BQ;Ue.asMonths=zQ;Ue.asQuarters=VQ;Ue.asYears=jQ;Ue.valueOf=PQ;Ue._bubble=OQ;Ue.clone=YQ;Ue.get=WQ;Ue.milliseconds=HQ;Ue.seconds=GQ;Ue.minutes=qQ;Ue.hours=KQ;Ue.days=QQ;Ue.weeks=ZQ;Ue.months=XQ;Ue.years=JQ;Ue.humanize=iX;Ue.toISOString=bg;Ue.toString=bg;Ue.toJSON=bg;Ue.locale=UR;Ue.localeData=zR;Ue.toIsoString=kr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",bg);Ue.lang=BR;he("X",0,0,"unix");he("x",0,0,"valueOf");se("x",Sg);se("X",TG);et("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});et("x",function(e,t,n){n._d=new Date(Re(e))});//! moment.js
te.version="2.29.4";sG(ut);te.fn=K;te.min=Hq;te.max=Gq;te.now=qq;te.utc=gi;te.unix=SQ;te.months=EQ;te.isDate=Ud;te.locale=Gs;te.invalid=yg;te.duration=Wr;te.isMoment=jr;te.weekdays=TQ;te.parseZone=CQ;te.localeData=os;te.isDuration=mf;te.monthsShort=kQ;te.weekdaysMin=bQ;te.defineLocale=Yx;te.updateLocale=Cq;te.locales=Eq;te.weekdaysShort=DQ;te.normalizeUnits=Tr;te.relativeTimeRounding=nX;te.relativeTimeThreshold=rX;te.calendarFormat=wK;te.prototype=K;te.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var Zx={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(B2,function(){var n;function r(){return n.apply(null,arguments)}function i(l){n=l}function s(l){return l instanceof Array||Object.prototype.toString.call(l)==="[object Array]"}function o(l){return l!=null&&Object.prototype.toString.call(l)==="[object Object]"}function a(l,d){return Object.prototype.hasOwnProperty.call(l,d)}function u(l){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(l).length===0;var d;for(d in l)if(a(l,d))return!1;return!0}function c(l){return l===void 0}function h(l){return typeof l=="number"||Object.prototype.toString.call(l)==="[object Number]"}function p(l){return l instanceof Date||Object.prototype.toString.call(l)==="[object Date]"}function m(l,d){var f=[],g,E=l.length;for(g=0;g<E;++g)f.push(d(l[g],g));return f}function x(l,d){for(var f in d)a(d,f)&&(l[f]=d[f]);return a(d,"toString")&&(l.toString=d.toString),a(d,"valueOf")&&(l.valueOf=d.valueOf),l}function v(l,d,f,g){return TS(l,d,f,g,!0).utc()}function _(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function k(l){return l._pf==null&&(l._pf=_()),l._pf}var S;Array.prototype.some?S=Array.prototype.some:S=function(l){var d=Object(this),f=d.length>>>0,g;for(g=0;g<f;g++)if(g in d&&l.call(this,d[g],g,d))return!0;return!1};function y(l){if(l._isValid==null){var d=k(l),f=S.call(d.parsedDateParts,function(E){return E!=null}),g=!isNaN(l._d.getTime())&&d.overflow<0&&!d.empty&&!d.invalidEra&&!d.invalidMonth&&!d.invalidWeekday&&!d.weekdayMismatch&&!d.nullInput&&!d.invalidFormat&&!d.userInvalidated&&(!d.meridiem||d.meridiem&&f);if(l._strict&&(g=g&&d.charsLeftOver===0&&d.unusedTokens.length===0&&d.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(l))l._isValid=g;else return g}return l._isValid}function C(l){var d=v(NaN);return l!=null?x(k(d),l):k(d).userInvalidated=!0,d}var T=r.momentProperties=[],I=!1;function P(l,d){var f,g,E,b=T.length;if(c(d._isAMomentObject)||(l._isAMomentObject=d._isAMomentObject),c(d._i)||(l._i=d._i),c(d._f)||(l._f=d._f),c(d._l)||(l._l=d._l),c(d._strict)||(l._strict=d._strict),c(d._tzm)||(l._tzm=d._tzm),c(d._isUTC)||(l._isUTC=d._isUTC),c(d._offset)||(l._offset=d._offset),c(d._pf)||(l._pf=k(d)),c(d._locale)||(l._locale=d._locale),b>0)for(f=0;f<b;f++)g=T[f],E=d[g],c(E)||(l[g]=E);return l}function A(l){P(this,l),this._d=new Date(l._d!=null?l._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),I===!1&&(I=!0,r.updateOffset(this),I=!1)}function O(l){return l instanceof A||l!=null&&l._isAMomentObject!=null}function Z(l){r.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+l)}function F(l,d){var f=!0;return x(function(){if(r.deprecationHandler!=null&&r.deprecationHandler(null,l),f){var g=[],E,b,L,de=arguments.length;for(b=0;b<de;b++){if(E="",typeof arguments[b]=="object"){E+=`
[`+b+"] ";for(L in arguments[0])a(arguments[0],L)&&(E+=L+": "+arguments[0][L]+", ");E=E.slice(0,-2)}else E=arguments[b];g.push(E)}Z(l+`
Arguments: `+Array.prototype.slice.call(g).join("")+`
`+new Error().stack),f=!1}return d.apply(this,arguments)},d)}var j={};function J(l,d){r.deprecationHandler!=null&&r.deprecationHandler(l,d),j[l]||(Z(d),j[l]=!0)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null;function X(l){return typeof Function!="undefined"&&l instanceof Function||Object.prototype.toString.call(l)==="[object Function]"}function ue(l){var d,f;for(f in l)a(l,f)&&(d=l[f],X(d)?this[f]=d:this["_"+f]=d);this._config=l,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function oe(l,d){var f=x({},l),g;for(g in d)a(d,g)&&(o(l[g])&&o(d[g])?(f[g]={},x(f[g],l[g]),x(f[g],d[g])):d[g]!=null?f[g]=d[g]:delete f[g]);for(g in l)a(l,g)&&!a(d,g)&&o(l[g])&&(f[g]=x({},f[g]));return f}function Te(l){l!=null&&this.set(l)}var ge;Object.keys?ge=Object.keys:ge=function(l){var d,f=[];for(d in l)a(l,d)&&f.push(d);return f};var $={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function V(l,d,f){var g=this._calendar[l]||this._calendar.sameElse;return X(g)?g.call(d,f):g}function M(l,d,f){var g=""+Math.abs(l),E=d-g.length,b=l>=0;return(b?f?"+":"":"-")+Math.pow(10,Math.max(0,E)).toString().substr(1)+g}var ee=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,B={},Y={};function z(l,d,f,g){var E=g;typeof g=="string"&&(E=function(){return this[g]()}),l&&(Y[l]=E),d&&(Y[d[0]]=function(){return M(E.apply(this,arguments),d[1],d[2])}),f&&(Y[f]=function(){return this.localeData().ordinal(E.apply(this,arguments),l)})}function D(l){return l.match(/\[[\s\S]/)?l.replace(/^\[|\]$/g,""):l.replace(/\\/g,"")}function le(l){var d=l.match(ee),f,g;for(f=0,g=d.length;f<g;f++)Y[d[f]]?d[f]=Y[d[f]]:d[f]=D(d[f]);return function(E){var b="",L;for(L=0;L<g;L++)b+=X(d[L])?d[L].call(E,l):d[L];return b}}function W(l,d){return l.isValid()?(d=we(d,l.localeData()),B[d]=B[d]||le(d),B[d](l)):l.localeData().invalidDate()}function we(l,d){var f=5;function g(E){return d.longDateFormat(E)||E}for(U.lastIndex=0;f>=0&&U.test(l);)l=l.replace(U,g),U.lastIndex=0,f-=1;return l}var me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Be(l){var d=this._longDateFormat[l],f=this._longDateFormat[l.toUpperCase()];return d||!f?d:(this._longDateFormat[l]=f.match(ee).map(function(g){return g==="MMMM"||g==="MM"||g==="DD"||g==="dddd"?g.slice(1):g}).join(""),this._longDateFormat[l])}var _e="Invalid date";function ne(){return this._invalidDate}var De="%d",Ee=/\d{1,2}/;function dt(l){return this._ordinal.replace("%d",l)}var Le={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Bt(l,d,f,g){var E=this._relativeTime[f];return X(E)?E(l,d,f,g):E.replace(/%d/i,l)}function yo(l,d){var f=this._relativeTime[l>0?"future":"past"];return X(f)?f(d):f.replace(/%s/i,d)}var vt={};function bt(l,d){var f=l.toLowerCase();vt[f]=vt[f+"s"]=vt[d]=l}function qt(l){return typeof l=="string"?vt[l]||vt[l.toLowerCase()]:void 0}function Dn(l){var d={},f,g;for(g in l)a(l,g)&&(f=qt(g),f&&(d[f]=l[g]));return d}var ye={};function Ne(l,d){ye[l]=d}function iu(l){var d=[],f;for(f in l)a(l,f)&&d.push({unit:f,priority:ye[f]});return d.sort(function(g,E){return g.priority-E.priority}),d}function us(l){return l%4===0&&l%100!==0||l%400===0}function It(l){return l<0?Math.ceil(l)||0:Math.floor(l)}function Oe(l){var d=+l,f=0;return d!==0&&isFinite(d)&&(f=It(d)),f}function wa(l,d){return function(f){return f!=null?(oS(this,l,f),r.updateOffset(this,d),this):jd(this,l)}}function jd(l,d){return l.isValid()?l._d["get"+(l._isUTC?"UTC":"")+d]():NaN}function oS(l,d,f){l.isValid()&&!isNaN(f)&&(d==="FullYear"&&us(l.year())&&l.month()===1&&l.date()===29?(f=Oe(f),l._d["set"+(l._isUTC?"UTC":"")+d](f,l.month(),Qd(f,l.month()))):l._d["set"+(l._isUTC?"UTC":"")+d](f))}function f4(l){return l=qt(l),X(this[l])?this[l]():this}function p4(l,d){if(typeof l=="object"){l=Dn(l);var f=iu(l),g,E=f.length;for(g=0;g<E;g++)this[f[g].unit](l[f[g].unit])}else if(l=qt(l),X(this[l]))return this[l](d);return this}var aS=/\d/,Qn=/\d\d/,lS=/\d{3}/,Lg=/\d{4}/,Yd=/[+-]?\d{6}/,it=/\d\d?/,uS=/\d\d\d\d?/,cS=/\d\d\d\d\d\d?/,Wd=/\d{1,3}/,$g=/\d{1,4}/,Hd=/[+-]?\d{1,6}/,_a=/\d+/,Gd=/[+-]?\d+/,m4=/Z|[+-]\d\d:?\d\d/gi,qd=/Z|[+-]\d\d(?::?\d\d)?/gi,g4=/[+-]?\d+(\.\d{1,3})?/,su=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Kd;Kd={};function ie(l,d,f){Kd[l]=X(d)?d:function(g,E){return g&&f?f:d}}function y4(l,d){return a(Kd,l)?Kd[l](d._strict,d._locale):new RegExp(v4(l))}function v4(l){return Xn(l.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(d,f,g,E,b){return f||g||E||b}))}function Xn(l){return l.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Fg={};function Je(l,d){var f,g=d,E;for(typeof l=="string"&&(l=[l]),h(d)&&(g=function(b,L){L[d]=Oe(b)}),E=l.length,f=0;f<E;f++)Fg[l[f]]=g}function ou(l,d){Je(l,function(f,g,E,b){E._w=E._w||{},d(f,E._w,E,b)})}function w4(l,d,f){d!=null&&a(Fg,l)&&Fg[l](d,f._a,f,l)}var un=0,vi=1,Hr=2,zt=3,Dr=4,wi=5,vo=6,_4=7,x4=8;function S4(l,d){return(l%d+d)%d}var At;Array.prototype.indexOf?At=Array.prototype.indexOf:At=function(l){var d;for(d=0;d<this.length;++d)if(this[d]===l)return d;return-1};function Qd(l,d){if(isNaN(l)||isNaN(d))return NaN;var f=S4(d,12);return l+=(d-f)/12,f===1?us(l)?29:28:31-f%7%2}z("M",["MM",2],"Mo",function(){return this.month()+1}),z("MMM",0,0,function(l){return this.localeData().monthsShort(this,l)}),z("MMMM",0,0,function(l){return this.localeData().months(this,l)}),bt("month","M"),Ne("month",8),ie("M",it),ie("MM",it,Qn),ie("MMM",function(l,d){return d.monthsShortRegex(l)}),ie("MMMM",function(l,d){return d.monthsRegex(l)}),Je(["M","MM"],function(l,d){d[vi]=Oe(l)-1}),Je(["MMM","MMMM"],function(l,d,f,g){var E=f._locale.monthsParse(l,g,f._strict);E!=null?d[vi]=E:k(f).invalidMonth=l});var C4="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),dS="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),hS=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,E4=su,k4=su;function T4(l,d){return l?s(this._months)?this._months[l.month()]:this._months[(this._months.isFormat||hS).test(d)?"format":"standalone"][l.month()]:s(this._months)?this._months:this._months.standalone}function D4(l,d){return l?s(this._monthsShort)?this._monthsShort[l.month()]:this._monthsShort[hS.test(d)?"format":"standalone"][l.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function b4(l,d,f){var g,E,b,L=l.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],g=0;g<12;++g)b=v([2e3,g]),this._shortMonthsParse[g]=this.monthsShort(b,"").toLocaleLowerCase(),this._longMonthsParse[g]=this.months(b,"").toLocaleLowerCase();return f?d==="MMM"?(E=At.call(this._shortMonthsParse,L),E!==-1?E:null):(E=At.call(this._longMonthsParse,L),E!==-1?E:null):d==="MMM"?(E=At.call(this._shortMonthsParse,L),E!==-1?E:(E=At.call(this._longMonthsParse,L),E!==-1?E:null)):(E=At.call(this._longMonthsParse,L),E!==-1?E:(E=At.call(this._shortMonthsParse,L),E!==-1?E:null))}function I4(l,d,f){var g,E,b;if(this._monthsParseExact)return b4.call(this,l,d,f);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),g=0;g<12;g++){if(E=v([2e3,g]),f&&!this._longMonthsParse[g]&&(this._longMonthsParse[g]=new RegExp("^"+this.months(E,"").replace(".","")+"$","i"),this._shortMonthsParse[g]=new RegExp("^"+this.monthsShort(E,"").replace(".","")+"$","i")),!f&&!this._monthsParse[g]&&(b="^"+this.months(E,"")+"|^"+this.monthsShort(E,""),this._monthsParse[g]=new RegExp(b.replace(".",""),"i")),f&&d==="MMMM"&&this._longMonthsParse[g].test(l))return g;if(f&&d==="MMM"&&this._shortMonthsParse[g].test(l))return g;if(!f&&this._monthsParse[g].test(l))return g}}function fS(l,d){var f;if(!l.isValid())return l;if(typeof d=="string"){if(/^\d+$/.test(d))d=Oe(d);else if(d=l.localeData().monthsParse(d),!h(d))return l}return f=Math.min(l.date(),Qd(l.year(),d)),l._d["set"+(l._isUTC?"UTC":"")+"Month"](d,f),l}function pS(l){return l!=null?(fS(this,l),r.updateOffset(this,!0),this):jd(this,"Month")}function A4(){return Qd(this.year(),this.month())}function N4(l){return this._monthsParseExact?(a(this,"_monthsRegex")||mS.call(this),l?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=E4),this._monthsShortStrictRegex&&l?this._monthsShortStrictRegex:this._monthsShortRegex)}function O4(l){return this._monthsParseExact?(a(this,"_monthsRegex")||mS.call(this),l?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=k4),this._monthsStrictRegex&&l?this._monthsStrictRegex:this._monthsRegex)}function mS(){function l(L,de){return de.length-L.length}var d=[],f=[],g=[],E,b;for(E=0;E<12;E++)b=v([2e3,E]),d.push(this.monthsShort(b,"")),f.push(this.months(b,"")),g.push(this.months(b,"")),g.push(this.monthsShort(b,""));for(d.sort(l),f.sort(l),g.sort(l),E=0;E<12;E++)d[E]=Xn(d[E]),f[E]=Xn(f[E]);for(E=0;E<24;E++)g[E]=Xn(g[E]);this._monthsRegex=new RegExp("^("+g.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}z("Y",0,0,function(){var l=this.year();return l<=9999?M(l,4):"+"+l}),z(0,["YY",2],0,function(){return this.year()%100}),z(0,["YYYY",4],0,"year"),z(0,["YYYYY",5],0,"year"),z(0,["YYYYYY",6,!0],0,"year"),bt("year","y"),Ne("year",1),ie("Y",Gd),ie("YY",it,Qn),ie("YYYY",$g,Lg),ie("YYYYY",Hd,Yd),ie("YYYYYY",Hd,Yd),Je(["YYYYY","YYYYYY"],un),Je("YYYY",function(l,d){d[un]=l.length===2?r.parseTwoDigitYear(l):Oe(l)}),Je("YY",function(l,d){d[un]=r.parseTwoDigitYear(l)}),Je("Y",function(l,d){d[un]=parseInt(l,10)});function au(l){return us(l)?366:365}r.parseTwoDigitYear=function(l){return Oe(l)+(Oe(l)>68?1900:2e3)};var gS=wa("FullYear",!0);function R4(){return us(this.year())}function P4(l,d,f,g,E,b,L){var de;return l<100&&l>=0?(de=new Date(l+400,d,f,g,E,b,L),isFinite(de.getFullYear())&&de.setFullYear(l)):de=new Date(l,d,f,g,E,b,L),de}function lu(l){var d,f;return l<100&&l>=0?(f=Array.prototype.slice.call(arguments),f[0]=l+400,d=new Date(Date.UTC.apply(null,f)),isFinite(d.getUTCFullYear())&&d.setUTCFullYear(l)):d=new Date(Date.UTC.apply(null,arguments)),d}function Xd(l,d,f){var g=7+d-f,E=(7+lu(l,0,g).getUTCDay()-d)%7;return-E+g-1}function yS(l,d,f,g,E){var b=(7+f-g)%7,L=Xd(l,g,E),de=1+7*(d-1)+b+L,Ae,Ze;return de<=0?(Ae=l-1,Ze=au(Ae)+de):de>au(l)?(Ae=l+1,Ze=de-au(l)):(Ae=l,Ze=de),{year:Ae,dayOfYear:Ze}}function uu(l,d,f){var g=Xd(l.year(),d,f),E=Math.floor((l.dayOfYear()-g-1)/7)+1,b,L;return E<1?(L=l.year()-1,b=E+_i(L,d,f)):E>_i(l.year(),d,f)?(b=E-_i(l.year(),d,f),L=l.year()+1):(L=l.year(),b=E),{week:b,year:L}}function _i(l,d,f){var g=Xd(l,d,f),E=Xd(l+1,d,f);return(au(l)-g+E)/7}z("w",["ww",2],"wo","week"),z("W",["WW",2],"Wo","isoWeek"),bt("week","w"),bt("isoWeek","W"),Ne("week",5),Ne("isoWeek",5),ie("w",it),ie("ww",it,Qn),ie("W",it),ie("WW",it,Qn),ou(["w","ww","W","WW"],function(l,d,f,g){d[g.substr(0,1)]=Oe(l)});function M4(l){return uu(l,this._week.dow,this._week.doy).week}var L4={dow:0,doy:6};function $4(){return this._week.dow}function F4(){return this._week.doy}function U4(l){var d=this.localeData().week(this);return l==null?d:this.add((l-d)*7,"d")}function B4(l){var d=uu(this,1,4).week;return l==null?d:this.add((l-d)*7,"d")}z("d",0,"do","day"),z("dd",0,0,function(l){return this.localeData().weekdaysMin(this,l)}),z("ddd",0,0,function(l){return this.localeData().weekdaysShort(this,l)}),z("dddd",0,0,function(l){return this.localeData().weekdays(this,l)}),z("e",0,0,"weekday"),z("E",0,0,"isoWeekday"),bt("day","d"),bt("weekday","e"),bt("isoWeekday","E"),Ne("day",11),Ne("weekday",11),Ne("isoWeekday",11),ie("d",it),ie("e",it),ie("E",it),ie("dd",function(l,d){return d.weekdaysMinRegex(l)}),ie("ddd",function(l,d){return d.weekdaysShortRegex(l)}),ie("dddd",function(l,d){return d.weekdaysRegex(l)}),ou(["dd","ddd","dddd"],function(l,d,f,g){var E=f._locale.weekdaysParse(l,g,f._strict);E!=null?d.d=E:k(f).invalidWeekday=l}),ou(["d","e","E"],function(l,d,f,g){d[g]=Oe(l)});function z4(l,d){return typeof l!="string"?l:isNaN(l)?(l=d.weekdaysParse(l),typeof l=="number"?l:null):parseInt(l,10)}function V4(l,d){return typeof l=="string"?d.weekdaysParse(l)%7||7:isNaN(l)?null:l}function Ug(l,d){return l.slice(d,7).concat(l.slice(0,d))}var j4="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),vS="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Y4="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),W4=su,H4=su,G4=su;function q4(l,d){var f=s(this._weekdays)?this._weekdays:this._weekdays[l&&l!==!0&&this._weekdays.isFormat.test(d)?"format":"standalone"];return l===!0?Ug(f,this._week.dow):l?f[l.day()]:f}function K4(l){return l===!0?Ug(this._weekdaysShort,this._week.dow):l?this._weekdaysShort[l.day()]:this._weekdaysShort}function Q4(l){return l===!0?Ug(this._weekdaysMin,this._week.dow):l?this._weekdaysMin[l.day()]:this._weekdaysMin}function X4(l,d,f){var g,E,b,L=l.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],g=0;g<7;++g)b=v([2e3,1]).day(g),this._minWeekdaysParse[g]=this.weekdaysMin(b,"").toLocaleLowerCase(),this._shortWeekdaysParse[g]=this.weekdaysShort(b,"").toLocaleLowerCase(),this._weekdaysParse[g]=this.weekdays(b,"").toLocaleLowerCase();return f?d==="dddd"?(E=At.call(this._weekdaysParse,L),E!==-1?E:null):d==="ddd"?(E=At.call(this._shortWeekdaysParse,L),E!==-1?E:null):(E=At.call(this._minWeekdaysParse,L),E!==-1?E:null):d==="dddd"?(E=At.call(this._weekdaysParse,L),E!==-1||(E=At.call(this._shortWeekdaysParse,L),E!==-1)?E:(E=At.call(this._minWeekdaysParse,L),E!==-1?E:null)):d==="ddd"?(E=At.call(this._shortWeekdaysParse,L),E!==-1||(E=At.call(this._weekdaysParse,L),E!==-1)?E:(E=At.call(this._minWeekdaysParse,L),E!==-1?E:null)):(E=At.call(this._minWeekdaysParse,L),E!==-1||(E=At.call(this._weekdaysParse,L),E!==-1)?E:(E=At.call(this._shortWeekdaysParse,L),E!==-1?E:null))}function J4(l,d,f){var g,E,b;if(this._weekdaysParseExact)return X4.call(this,l,d,f);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),g=0;g<7;g++){if(E=v([2e3,1]).day(g),f&&!this._fullWeekdaysParse[g]&&(this._fullWeekdaysParse[g]=new RegExp("^"+this.weekdays(E,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[g]=new RegExp("^"+this.weekdaysShort(E,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[g]=new RegExp("^"+this.weekdaysMin(E,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[g]||(b="^"+this.weekdays(E,"")+"|^"+this.weekdaysShort(E,"")+"|^"+this.weekdaysMin(E,""),this._weekdaysParse[g]=new RegExp(b.replace(".",""),"i")),f&&d==="dddd"&&this._fullWeekdaysParse[g].test(l))return g;if(f&&d==="ddd"&&this._shortWeekdaysParse[g].test(l))return g;if(f&&d==="dd"&&this._minWeekdaysParse[g].test(l))return g;if(!f&&this._weekdaysParse[g].test(l))return g}}function Z4(l){if(!this.isValid())return l!=null?this:NaN;var d=this._isUTC?this._d.getUTCDay():this._d.getDay();return l!=null?(l=z4(l,this.localeData()),this.add(l-d,"d")):d}function eP(l){if(!this.isValid())return l!=null?this:NaN;var d=(this.day()+7-this.localeData()._week.dow)%7;return l==null?d:this.add(l-d,"d")}function tP(l){if(!this.isValid())return l!=null?this:NaN;if(l!=null){var d=V4(l,this.localeData());return this.day(this.day()%7?d:d-7)}else return this.day()||7}function nP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Bg.call(this),l?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=W4),this._weekdaysStrictRegex&&l?this._weekdaysStrictRegex:this._weekdaysRegex)}function rP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Bg.call(this),l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=H4),this._weekdaysShortStrictRegex&&l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function iP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Bg.call(this),l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=G4),this._weekdaysMinStrictRegex&&l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Bg(){function l(bn,ki){return ki.length-bn.length}var d=[],f=[],g=[],E=[],b,L,de,Ae,Ze;for(b=0;b<7;b++)L=v([2e3,1]).day(b),de=Xn(this.weekdaysMin(L,"")),Ae=Xn(this.weekdaysShort(L,"")),Ze=Xn(this.weekdays(L,"")),d.push(de),f.push(Ae),g.push(Ze),E.push(de),E.push(Ae),E.push(Ze);d.sort(l),f.sort(l),g.sort(l),E.sort(l),this._weekdaysRegex=new RegExp("^("+E.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+d.join("|")+")","i")}function zg(){return this.hours()%12||12}function sP(){return this.hours()||24}z("H",["HH",2],0,"hour"),z("h",["hh",2],0,zg),z("k",["kk",2],0,sP),z("hmm",0,0,function(){return""+zg.apply(this)+M(this.minutes(),2)}),z("hmmss",0,0,function(){return""+zg.apply(this)+M(this.minutes(),2)+M(this.seconds(),2)}),z("Hmm",0,0,function(){return""+this.hours()+M(this.minutes(),2)}),z("Hmmss",0,0,function(){return""+this.hours()+M(this.minutes(),2)+M(this.seconds(),2)});function wS(l,d){z(l,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),d)})}wS("a",!0),wS("A",!1),bt("hour","h"),Ne("hour",13);function _S(l,d){return d._meridiemParse}ie("a",_S),ie("A",_S),ie("H",it),ie("h",it),ie("k",it),ie("HH",it,Qn),ie("hh",it,Qn),ie("kk",it,Qn),ie("hmm",uS),ie("hmmss",cS),ie("Hmm",uS),ie("Hmmss",cS),Je(["H","HH"],zt),Je(["k","kk"],function(l,d,f){var g=Oe(l);d[zt]=g===24?0:g}),Je(["a","A"],function(l,d,f){f._isPm=f._locale.isPM(l),f._meridiem=l}),Je(["h","hh"],function(l,d,f){d[zt]=Oe(l),k(f).bigHour=!0}),Je("hmm",function(l,d,f){var g=l.length-2;d[zt]=Oe(l.substr(0,g)),d[Dr]=Oe(l.substr(g)),k(f).bigHour=!0}),Je("hmmss",function(l,d,f){var g=l.length-4,E=l.length-2;d[zt]=Oe(l.substr(0,g)),d[Dr]=Oe(l.substr(g,2)),d[wi]=Oe(l.substr(E)),k(f).bigHour=!0}),Je("Hmm",function(l,d,f){var g=l.length-2;d[zt]=Oe(l.substr(0,g)),d[Dr]=Oe(l.substr(g))}),Je("Hmmss",function(l,d,f){var g=l.length-4,E=l.length-2;d[zt]=Oe(l.substr(0,g)),d[Dr]=Oe(l.substr(g,2)),d[wi]=Oe(l.substr(E))});function oP(l){return(l+"").toLowerCase().charAt(0)==="p"}var aP=/[ap]\.?m?\.?/i,lP=wa("Hours",!0);function uP(l,d,f){return l>11?f?"pm":"PM":f?"am":"AM"}var xS={calendar:$,longDateFormat:me,invalidDate:_e,ordinal:De,dayOfMonthOrdinalParse:Ee,relativeTime:Le,months:C4,monthsShort:dS,week:L4,weekdays:j4,weekdaysMin:Y4,weekdaysShort:vS,meridiemParse:aP},ht={},cu={},du;function cP(l,d){var f,g=Math.min(l.length,d.length);for(f=0;f<g;f+=1)if(l[f]!==d[f])return f;return g}function SS(l){return l&&l.toLowerCase().replace("_","-")}function dP(l){for(var d=0,f,g,E,b;d<l.length;){for(b=SS(l[d]).split("-"),f=b.length,g=SS(l[d+1]),g=g?g.split("-"):null;f>0;){if(E=Jd(b.slice(0,f).join("-")),E)return E;if(g&&g.length>=f&&cP(b,g)>=f-1)break;f--}d++}return du}function hP(l){return l.match("^[^/\\\\]*$")!=null}function Jd(l){var d=null,f;if(ht[l]===void 0&&!0&&e&&e.exports&&hP(l))try{d=du._abbr,f=z2,f("./locale/"+l),cs(d)}catch{ht[l]=null}return ht[l]}function cs(l,d){var f;return l&&(c(d)?f=xi(l):f=Vg(l,d),f?du=f:typeof console!="undefined"&&console.warn&&console.warn("Locale "+l+" not found. Did you forget to load it?")),du._abbr}function Vg(l,d){if(d!==null){var f,g=xS;if(d.abbr=l,ht[l]!=null)J("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),g=ht[l]._config;else if(d.parentLocale!=null)if(ht[d.parentLocale]!=null)g=ht[d.parentLocale]._config;else if(f=Jd(d.parentLocale),f!=null)g=f._config;else return cu[d.parentLocale]||(cu[d.parentLocale]=[]),cu[d.parentLocale].push({name:l,config:d}),null;return ht[l]=new Te(oe(g,d)),cu[l]&&cu[l].forEach(function(E){Vg(E.name,E.config)}),cs(l),ht[l]}else return delete ht[l],null}function fP(l,d){if(d!=null){var f,g,E=xS;ht[l]!=null&&ht[l].parentLocale!=null?ht[l].set(oe(ht[l]._config,d)):(g=Jd(l),g!=null&&(E=g._config),d=oe(E,d),g==null&&(d.abbr=l),f=new Te(d),f.parentLocale=ht[l],ht[l]=f),cs(l)}else ht[l]!=null&&(ht[l].parentLocale!=null?(ht[l]=ht[l].parentLocale,l===cs()&&cs(l)):ht[l]!=null&&delete ht[l]);return ht[l]}function xi(l){var d;if(l&&l._locale&&l._locale._abbr&&(l=l._locale._abbr),!l)return du;if(!s(l)){if(d=Jd(l),d)return d;l=[l]}return dP(l)}function pP(){return ge(ht)}function jg(l){var d,f=l._a;return f&&k(l).overflow===-2&&(d=f[vi]<0||f[vi]>11?vi:f[Hr]<1||f[Hr]>Qd(f[un],f[vi])?Hr:f[zt]<0||f[zt]>24||f[zt]===24&&(f[Dr]!==0||f[wi]!==0||f[vo]!==0)?zt:f[Dr]<0||f[Dr]>59?Dr:f[wi]<0||f[wi]>59?wi:f[vo]<0||f[vo]>999?vo:-1,k(l)._overflowDayOfYear&&(d<un||d>Hr)&&(d=Hr),k(l)._overflowWeeks&&d===-1&&(d=_4),k(l)._overflowWeekday&&d===-1&&(d=x4),k(l).overflow=d),l}var mP=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gP=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yP=/Z|[+-]\d\d(?::?\d\d)?/,Zd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Yg=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],vP=/^\/?Date\((-?\d+)/i,wP=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,_P={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function CS(l){var d,f,g=l._i,E=mP.exec(g)||gP.exec(g),b,L,de,Ae,Ze=Zd.length,bn=Yg.length;if(E){for(k(l).iso=!0,d=0,f=Ze;d<f;d++)if(Zd[d][1].exec(E[1])){L=Zd[d][0],b=Zd[d][2]!==!1;break}if(L==null){l._isValid=!1;return}if(E[3]){for(d=0,f=bn;d<f;d++)if(Yg[d][1].exec(E[3])){de=(E[2]||" ")+Yg[d][0];break}if(de==null){l._isValid=!1;return}}if(!b&&de!=null){l._isValid=!1;return}if(E[4])if(yP.exec(E[4]))Ae="Z";else{l._isValid=!1;return}l._f=L+(de||"")+(Ae||""),Hg(l)}else l._isValid=!1}function xP(l,d,f,g,E,b){var L=[SP(l),dS.indexOf(d),parseInt(f,10),parseInt(g,10),parseInt(E,10)];return b&&L.push(parseInt(b,10)),L}function SP(l){var d=parseInt(l,10);return d<=49?2e3+d:d<=999?1900+d:d}function CP(l){return l.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function EP(l,d,f){if(l){var g=vS.indexOf(l),E=new Date(d[0],d[1],d[2]).getDay();if(g!==E)return k(f).weekdayMismatch=!0,f._isValid=!1,!1}return!0}function kP(l,d,f){if(l)return _P[l];if(d)return 0;var g=parseInt(f,10),E=g%100,b=(g-E)/100;return b*60+E}function ES(l){var d=wP.exec(CP(l._i)),f;if(d){if(f=xP(d[4],d[3],d[2],d[5],d[6],d[7]),!EP(d[1],f,l))return;l._a=f,l._tzm=kP(d[8],d[9],d[10]),l._d=lu.apply(null,l._a),l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),k(l).rfc2822=!0}else l._isValid=!1}function TP(l){var d=vP.exec(l._i);if(d!==null){l._d=new Date(+d[1]);return}if(CS(l),l._isValid===!1)delete l._isValid;else return;if(ES(l),l._isValid===!1)delete l._isValid;else return;l._strict?l._isValid=!1:r.createFromInputFallback(l)}r.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(l){l._d=new Date(l._i+(l._useUTC?" UTC":""))});function xa(l,d,f){return l!=null?l:d!=null?d:f}function DP(l){var d=new Date(r.now());return l._useUTC?[d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()]:[d.getFullYear(),d.getMonth(),d.getDate()]}function Wg(l){var d,f,g=[],E,b,L;if(!l._d){for(E=DP(l),l._w&&l._a[Hr]==null&&l._a[vi]==null&&bP(l),l._dayOfYear!=null&&(L=xa(l._a[un],E[un]),(l._dayOfYear>au(L)||l._dayOfYear===0)&&(k(l)._overflowDayOfYear=!0),f=lu(L,0,l._dayOfYear),l._a[vi]=f.getUTCMonth(),l._a[Hr]=f.getUTCDate()),d=0;d<3&&l._a[d]==null;++d)l._a[d]=g[d]=E[d];for(;d<7;d++)l._a[d]=g[d]=l._a[d]==null?d===2?1:0:l._a[d];l._a[zt]===24&&l._a[Dr]===0&&l._a[wi]===0&&l._a[vo]===0&&(l._nextDay=!0,l._a[zt]=0),l._d=(l._useUTC?lu:P4).apply(null,g),b=l._useUTC?l._d.getUTCDay():l._d.getDay(),l._tzm!=null&&l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),l._nextDay&&(l._a[zt]=24),l._w&&typeof l._w.d!="undefined"&&l._w.d!==b&&(k(l).weekdayMismatch=!0)}}function bP(l){var d,f,g,E,b,L,de,Ae,Ze;d=l._w,d.GG!=null||d.W!=null||d.E!=null?(b=1,L=4,f=xa(d.GG,l._a[un],uu(st(),1,4).year),g=xa(d.W,1),E=xa(d.E,1),(E<1||E>7)&&(Ae=!0)):(b=l._locale._week.dow,L=l._locale._week.doy,Ze=uu(st(),b,L),f=xa(d.gg,l._a[un],Ze.year),g=xa(d.w,Ze.week),d.d!=null?(E=d.d,(E<0||E>6)&&(Ae=!0)):d.e!=null?(E=d.e+b,(d.e<0||d.e>6)&&(Ae=!0)):E=b),g<1||g>_i(f,b,L)?k(l)._overflowWeeks=!0:Ae!=null?k(l)._overflowWeekday=!0:(de=yS(f,g,E,b,L),l._a[un]=de.year,l._dayOfYear=de.dayOfYear)}r.ISO_8601=function(){},r.RFC_2822=function(){};function Hg(l){if(l._f===r.ISO_8601){CS(l);return}if(l._f===r.RFC_2822){ES(l);return}l._a=[],k(l).empty=!0;var d=""+l._i,f,g,E,b,L,de=d.length,Ae=0,Ze,bn;for(E=we(l._f,l._locale).match(ee)||[],bn=E.length,f=0;f<bn;f++)b=E[f],g=(d.match(y4(b,l))||[])[0],g&&(L=d.substr(0,d.indexOf(g)),L.length>0&&k(l).unusedInput.push(L),d=d.slice(d.indexOf(g)+g.length),Ae+=g.length),Y[b]?(g?k(l).empty=!1:k(l).unusedTokens.push(b),w4(b,g,l)):l._strict&&!g&&k(l).unusedTokens.push(b);k(l).charsLeftOver=de-Ae,d.length>0&&k(l).unusedInput.push(d),l._a[zt]<=12&&k(l).bigHour===!0&&l._a[zt]>0&&(k(l).bigHour=void 0),k(l).parsedDateParts=l._a.slice(0),k(l).meridiem=l._meridiem,l._a[zt]=IP(l._locale,l._a[zt],l._meridiem),Ze=k(l).era,Ze!==null&&(l._a[un]=l._locale.erasConvertYear(Ze,l._a[un])),Wg(l),jg(l)}function IP(l,d,f){var g;return f==null?d:l.meridiemHour!=null?l.meridiemHour(d,f):(l.isPM!=null&&(g=l.isPM(f),g&&d<12&&(d+=12),!g&&d===12&&(d=0)),d)}function AP(l){var d,f,g,E,b,L,de=!1,Ae=l._f.length;if(Ae===0){k(l).invalidFormat=!0,l._d=new Date(NaN);return}for(E=0;E<Ae;E++)b=0,L=!1,d=P({},l),l._useUTC!=null&&(d._useUTC=l._useUTC),d._f=l._f[E],Hg(d),y(d)&&(L=!0),b+=k(d).charsLeftOver,b+=k(d).unusedTokens.length*10,k(d).score=b,de?b<g&&(g=b,f=d):(g==null||b<g||L)&&(g=b,f=d,L&&(de=!0));x(l,f||d)}function NP(l){if(!l._d){var d=Dn(l._i),f=d.day===void 0?d.date:d.day;l._a=m([d.year,d.month,f,d.hour,d.minute,d.second,d.millisecond],function(g){return g&&parseInt(g,10)}),Wg(l)}}function OP(l){var d=new A(jg(kS(l)));return d._nextDay&&(d.add(1,"d"),d._nextDay=void 0),d}function kS(l){var d=l._i,f=l._f;return l._locale=l._locale||xi(l._l),d===null||f===void 0&&d===""?C({nullInput:!0}):(typeof d=="string"&&(l._i=d=l._locale.preparse(d)),O(d)?new A(jg(d)):(p(d)?l._d=d:s(f)?AP(l):f?Hg(l):RP(l),y(l)||(l._d=null),l))}function RP(l){var d=l._i;c(d)?l._d=new Date(r.now()):p(d)?l._d=new Date(d.valueOf()):typeof d=="string"?TP(l):s(d)?(l._a=m(d.slice(0),function(f){return parseInt(f,10)}),Wg(l)):o(d)?NP(l):h(d)?l._d=new Date(d):r.createFromInputFallback(l)}function TS(l,d,f,g,E){var b={};return(d===!0||d===!1)&&(g=d,d=void 0),(f===!0||f===!1)&&(g=f,f=void 0),(o(l)&&u(l)||s(l)&&l.length===0)&&(l=void 0),b._isAMomentObject=!0,b._useUTC=b._isUTC=E,b._l=f,b._i=l,b._f=d,b._strict=g,OP(b)}function st(l,d,f,g){return TS(l,d,f,g,!1)}var PP=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=st.apply(null,arguments);return this.isValid()&&l.isValid()?l<this?this:l:C()}),MP=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=st.apply(null,arguments);return this.isValid()&&l.isValid()?l>this?this:l:C()});function DS(l,d){var f,g;if(d.length===1&&s(d[0])&&(d=d[0]),!d.length)return st();for(f=d[0],g=1;g<d.length;++g)(!d[g].isValid()||d[g][l](f))&&(f=d[g]);return f}function LP(){var l=[].slice.call(arguments,0);return DS("isBefore",l)}function $P(){var l=[].slice.call(arguments,0);return DS("isAfter",l)}var FP=function(){return Date.now?Date.now():+new Date},hu=["year","quarter","month","week","day","hour","minute","second","millisecond"];function UP(l){var d,f=!1,g,E=hu.length;for(d in l)if(a(l,d)&&!(At.call(hu,d)!==-1&&(l[d]==null||!isNaN(l[d]))))return!1;for(g=0;g<E;++g)if(l[hu[g]]){if(f)return!1;parseFloat(l[hu[g]])!==Oe(l[hu[g]])&&(f=!0)}return!0}function BP(){return this._isValid}function zP(){return br(NaN)}function eh(l){var d=Dn(l),f=d.year||0,g=d.quarter||0,E=d.month||0,b=d.week||d.isoWeek||0,L=d.day||0,de=d.hour||0,Ae=d.minute||0,Ze=d.second||0,bn=d.millisecond||0;this._isValid=UP(d),this._milliseconds=+bn+Ze*1e3+Ae*6e4+de*1e3*60*60,this._days=+L+b*7,this._months=+E+g*3+f*12,this._data={},this._locale=xi(),this._bubble()}function th(l){return l instanceof eh}function Gg(l){return l<0?Math.round(-1*l)*-1:Math.round(l)}function VP(l,d,f){var g=Math.min(l.length,d.length),E=Math.abs(l.length-d.length),b=0,L;for(L=0;L<g;L++)(f&&l[L]!==d[L]||!f&&Oe(l[L])!==Oe(d[L]))&&b++;return b+E}function bS(l,d){z(l,0,0,function(){var f=this.utcOffset(),g="+";return f<0&&(f=-f,g="-"),g+M(~~(f/60),2)+d+M(~~f%60,2)})}bS("Z",":"),bS("ZZ",""),ie("Z",qd),ie("ZZ",qd),Je(["Z","ZZ"],function(l,d,f){f._useUTC=!0,f._tzm=qg(qd,l)});var jP=/([\+\-]|\d\d)/gi;function qg(l,d){var f=(d||"").match(l),g,E,b;return f===null?null:(g=f[f.length-1]||[],E=(g+"").match(jP)||["-",0,0],b=+(E[1]*60)+Oe(E[2]),b===0?0:E[0]==="+"?b:-b)}function Kg(l,d){var f,g;return d._isUTC?(f=d.clone(),g=(O(l)||p(l)?l.valueOf():st(l).valueOf())-f.valueOf(),f._d.setTime(f._d.valueOf()+g),r.updateOffset(f,!1),f):st(l).local()}function Qg(l){return-Math.round(l._d.getTimezoneOffset())}r.updateOffset=function(){};function YP(l,d,f){var g=this._offset||0,E;if(!this.isValid())return l!=null?this:NaN;if(l!=null){if(typeof l=="string"){if(l=qg(qd,l),l===null)return this}else Math.abs(l)<16&&!f&&(l=l*60);return!this._isUTC&&d&&(E=Qg(this)),this._offset=l,this._isUTC=!0,E!=null&&this.add(E,"m"),g!==l&&(!d||this._changeInProgress?OS(this,br(l-g,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?g:Qg(this)}function WP(l,d){return l!=null?(typeof l!="string"&&(l=-l),this.utcOffset(l,d),this):-this.utcOffset()}function HP(l){return this.utcOffset(0,l)}function GP(l){return this._isUTC&&(this.utcOffset(0,l),this._isUTC=!1,l&&this.subtract(Qg(this),"m")),this}function qP(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var l=qg(m4,this._i);l!=null?this.utcOffset(l):this.utcOffset(0,!0)}return this}function KP(l){return this.isValid()?(l=l?st(l).utcOffset():0,(this.utcOffset()-l)%60===0):!1}function QP(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function XP(){if(!c(this._isDSTShifted))return this._isDSTShifted;var l={},d;return P(l,this),l=kS(l),l._a?(d=l._isUTC?v(l._a):st(l._a),this._isDSTShifted=this.isValid()&&VP(l._a,d.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function JP(){return this.isValid()?!this._isUTC:!1}function ZP(){return this.isValid()?this._isUTC:!1}function IS(){return this.isValid()?this._isUTC&&this._offset===0:!1}var eM=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,tM=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function br(l,d){var f=l,g=null,E,b,L;return th(l)?f={ms:l._milliseconds,d:l._days,M:l._months}:h(l)||!isNaN(+l)?(f={},d?f[d]=+l:f.milliseconds=+l):(g=eM.exec(l))?(E=g[1]==="-"?-1:1,f={y:0,d:Oe(g[Hr])*E,h:Oe(g[zt])*E,m:Oe(g[Dr])*E,s:Oe(g[wi])*E,ms:Oe(Gg(g[vo]*1e3))*E}):(g=tM.exec(l))?(E=g[1]==="-"?-1:1,f={y:wo(g[2],E),M:wo(g[3],E),w:wo(g[4],E),d:wo(g[5],E),h:wo(g[6],E),m:wo(g[7],E),s:wo(g[8],E)}):f==null?f={}:typeof f=="object"&&("from"in f||"to"in f)&&(L=nM(st(f.from),st(f.to)),f={},f.ms=L.milliseconds,f.M=L.months),b=new eh(f),th(l)&&a(l,"_locale")&&(b._locale=l._locale),th(l)&&a(l,"_isValid")&&(b._isValid=l._isValid),b}br.fn=eh.prototype,br.invalid=zP;function wo(l,d){var f=l&&parseFloat(l.replace(",","."));return(isNaN(f)?0:f)*d}function AS(l,d){var f={};return f.months=d.month()-l.month()+(d.year()-l.year())*12,l.clone().add(f.months,"M").isAfter(d)&&--f.months,f.milliseconds=+d-+l.clone().add(f.months,"M"),f}function nM(l,d){var f;return l.isValid()&&d.isValid()?(d=Kg(d,l),l.isBefore(d)?f=AS(l,d):(f=AS(d,l),f.milliseconds=-f.milliseconds,f.months=-f.months),f):{milliseconds:0,months:0}}function NS(l,d){return function(f,g){var E,b;return g!==null&&!isNaN(+g)&&(J(d,"moment()."+d+"(period, number) is deprecated. Please use moment()."+d+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),b=f,f=g,g=b),E=br(f,g),OS(this,E,l),this}}function OS(l,d,f,g){var E=d._milliseconds,b=Gg(d._days),L=Gg(d._months);!l.isValid()||(g=g==null?!0:g,L&&fS(l,jd(l,"Month")+L*f),b&&oS(l,"Date",jd(l,"Date")+b*f),E&&l._d.setTime(l._d.valueOf()+E*f),g&&r.updateOffset(l,b||L))}var rM=NS(1,"add"),iM=NS(-1,"subtract");function RS(l){return typeof l=="string"||l instanceof String}function sM(l){return O(l)||p(l)||RS(l)||h(l)||aM(l)||oM(l)||l===null||l===void 0}function oM(l){var d=o(l)&&!u(l),f=!1,g=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],E,b,L=g.length;for(E=0;E<L;E+=1)b=g[E],f=f||a(l,b);return d&&f}function aM(l){var d=s(l),f=!1;return d&&(f=l.filter(function(g){return!h(g)&&RS(l)}).length===0),d&&f}function lM(l){var d=o(l)&&!u(l),f=!1,g=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],E,b;for(E=0;E<g.length;E+=1)b=g[E],f=f||a(l,b);return d&&f}function uM(l,d){var f=l.diff(d,"days",!0);return f<-6?"sameElse":f<-1?"lastWeek":f<0?"lastDay":f<1?"sameDay":f<2?"nextDay":f<7?"nextWeek":"sameElse"}function cM(l,d){arguments.length===1&&(arguments[0]?sM(arguments[0])?(l=arguments[0],d=void 0):lM(arguments[0])&&(d=arguments[0],l=void 0):(l=void 0,d=void 0));var f=l||st(),g=Kg(f,this).startOf("day"),E=r.calendarFormat(this,g)||"sameElse",b=d&&(X(d[E])?d[E].call(this,f):d[E]);return this.format(b||this.localeData().calendar(E,this,st(f)))}function dM(){return new A(this)}function hM(l,d){var f=O(l)?l:st(l);return this.isValid()&&f.isValid()?(d=qt(d)||"millisecond",d==="millisecond"?this.valueOf()>f.valueOf():f.valueOf()<this.clone().startOf(d).valueOf()):!1}function fM(l,d){var f=O(l)?l:st(l);return this.isValid()&&f.isValid()?(d=qt(d)||"millisecond",d==="millisecond"?this.valueOf()<f.valueOf():this.clone().endOf(d).valueOf()<f.valueOf()):!1}function pM(l,d,f,g){var E=O(l)?l:st(l),b=O(d)?d:st(d);return this.isValid()&&E.isValid()&&b.isValid()?(g=g||"()",(g[0]==="("?this.isAfter(E,f):!this.isBefore(E,f))&&(g[1]===")"?this.isBefore(b,f):!this.isAfter(b,f))):!1}function mM(l,d){var f=O(l)?l:st(l),g;return this.isValid()&&f.isValid()?(d=qt(d)||"millisecond",d==="millisecond"?this.valueOf()===f.valueOf():(g=f.valueOf(),this.clone().startOf(d).valueOf()<=g&&g<=this.clone().endOf(d).valueOf())):!1}function gM(l,d){return this.isSame(l,d)||this.isAfter(l,d)}function yM(l,d){return this.isSame(l,d)||this.isBefore(l,d)}function vM(l,d,f){var g,E,b;if(!this.isValid())return NaN;if(g=Kg(l,this),!g.isValid())return NaN;switch(E=(g.utcOffset()-this.utcOffset())*6e4,d=qt(d),d){case"year":b=nh(this,g)/12;break;case"month":b=nh(this,g);break;case"quarter":b=nh(this,g)/3;break;case"second":b=(this-g)/1e3;break;case"minute":b=(this-g)/6e4;break;case"hour":b=(this-g)/36e5;break;case"day":b=(this-g-E)/864e5;break;case"week":b=(this-g-E)/6048e5;break;default:b=this-g}return f?b:It(b)}function nh(l,d){if(l.date()<d.date())return-nh(d,l);var f=(d.year()-l.year())*12+(d.month()-l.month()),g=l.clone().add(f,"months"),E,b;return d-g<0?(E=l.clone().add(f-1,"months"),b=(d-g)/(g-E)):(E=l.clone().add(f+1,"months"),b=(d-g)/(E-g)),-(f+b)||0}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function wM(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function _M(l){if(!this.isValid())return null;var d=l!==!0,f=d?this.clone().utc():this;return f.year()<0||f.year()>9999?W(f,d?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):X(Date.prototype.toISOString)?d?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",W(f,"Z")):W(f,d?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function xM(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var l="moment",d="",f,g,E,b;return this.isLocal()||(l=this.utcOffset()===0?"moment.utc":"moment.parseZone",d="Z"),f="["+l+'("]',g=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",E="-MM-DD[T]HH:mm:ss.SSS",b=d+'[")]',this.format(f+g+E+b)}function SM(l){l||(l=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var d=W(this,l);return this.localeData().postformat(d)}function CM(l,d){return this.isValid()&&(O(l)&&l.isValid()||st(l).isValid())?br({to:this,from:l}).locale(this.locale()).humanize(!d):this.localeData().invalidDate()}function EM(l){return this.from(st(),l)}function kM(l,d){return this.isValid()&&(O(l)&&l.isValid()||st(l).isValid())?br({from:this,to:l}).locale(this.locale()).humanize(!d):this.localeData().invalidDate()}function TM(l){return this.to(st(),l)}function PS(l){var d;return l===void 0?this._locale._abbr:(d=xi(l),d!=null&&(this._locale=d),this)}var MS=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(l){return l===void 0?this.localeData():this.locale(l)});function LS(){return this._locale}var rh=1e3,Sa=60*rh,ih=60*Sa,$S=(365*400+97)*24*ih;function Ca(l,d){return(l%d+d)%d}function FS(l,d,f){return l<100&&l>=0?new Date(l+400,d,f)-$S:new Date(l,d,f).valueOf()}function US(l,d,f){return l<100&&l>=0?Date.UTC(l+400,d,f)-$S:Date.UTC(l,d,f)}function DM(l){var d,f;if(l=qt(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?US:FS,l){case"year":d=f(this.year(),0,1);break;case"quarter":d=f(this.year(),this.month()-this.month()%3,1);break;case"month":d=f(this.year(),this.month(),1);break;case"week":d=f(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":d=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":d=f(this.year(),this.month(),this.date());break;case"hour":d=this._d.valueOf(),d-=Ca(d+(this._isUTC?0:this.utcOffset()*Sa),ih);break;case"minute":d=this._d.valueOf(),d-=Ca(d,Sa);break;case"second":d=this._d.valueOf(),d-=Ca(d,rh);break}return this._d.setTime(d),r.updateOffset(this,!0),this}function bM(l){var d,f;if(l=qt(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?US:FS,l){case"year":d=f(this.year()+1,0,1)-1;break;case"quarter":d=f(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":d=f(this.year(),this.month()+1,1)-1;break;case"week":d=f(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":d=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":d=f(this.year(),this.month(),this.date()+1)-1;break;case"hour":d=this._d.valueOf(),d+=ih-Ca(d+(this._isUTC?0:this.utcOffset()*Sa),ih)-1;break;case"minute":d=this._d.valueOf(),d+=Sa-Ca(d,Sa)-1;break;case"second":d=this._d.valueOf(),d+=rh-Ca(d,rh)-1;break}return this._d.setTime(d),r.updateOffset(this,!0),this}function IM(){return this._d.valueOf()-(this._offset||0)*6e4}function AM(){return Math.floor(this.valueOf()/1e3)}function NM(){return new Date(this.valueOf())}function OM(){var l=this;return[l.year(),l.month(),l.date(),l.hour(),l.minute(),l.second(),l.millisecond()]}function RM(){var l=this;return{years:l.year(),months:l.month(),date:l.date(),hours:l.hours(),minutes:l.minutes(),seconds:l.seconds(),milliseconds:l.milliseconds()}}function PM(){return this.isValid()?this.toISOString():null}function MM(){return y(this)}function LM(){return x({},k(this))}function $M(){return k(this).overflow}function FM(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}z("N",0,0,"eraAbbr"),z("NN",0,0,"eraAbbr"),z("NNN",0,0,"eraAbbr"),z("NNNN",0,0,"eraName"),z("NNNNN",0,0,"eraNarrow"),z("y",["y",1],"yo","eraYear"),z("y",["yy",2],0,"eraYear"),z("y",["yyy",3],0,"eraYear"),z("y",["yyyy",4],0,"eraYear"),ie("N",Xg),ie("NN",Xg),ie("NNN",Xg),ie("NNNN",KM),ie("NNNNN",QM),Je(["N","NN","NNN","NNNN","NNNNN"],function(l,d,f,g){var E=f._locale.erasParse(l,g,f._strict);E?k(f).era=E:k(f).invalidEra=l}),ie("y",_a),ie("yy",_a),ie("yyy",_a),ie("yyyy",_a),ie("yo",XM),Je(["y","yy","yyy","yyyy"],un),Je(["yo"],function(l,d,f,g){var E;f._locale._eraYearOrdinalRegex&&(E=l.match(f._locale._eraYearOrdinalRegex)),f._locale.eraYearOrdinalParse?d[un]=f._locale.eraYearOrdinalParse(l,E):d[un]=parseInt(l,10)});function UM(l,d){var f,g,E,b=this._eras||xi("en")._eras;for(f=0,g=b.length;f<g;++f){switch(typeof b[f].since){case"string":E=r(b[f].since).startOf("day"),b[f].since=E.valueOf();break}switch(typeof b[f].until){case"undefined":b[f].until=1/0;break;case"string":E=r(b[f].until).startOf("day").valueOf(),b[f].until=E.valueOf();break}}return b}function BM(l,d,f){var g,E,b=this.eras(),L,de,Ae;for(l=l.toUpperCase(),g=0,E=b.length;g<E;++g)if(L=b[g].name.toUpperCase(),de=b[g].abbr.toUpperCase(),Ae=b[g].narrow.toUpperCase(),f)switch(d){case"N":case"NN":case"NNN":if(de===l)return b[g];break;case"NNNN":if(L===l)return b[g];break;case"NNNNN":if(Ae===l)return b[g];break}else if([L,de,Ae].indexOf(l)>=0)return b[g]}function zM(l,d){var f=l.since<=l.until?1:-1;return d===void 0?r(l.since).year():r(l.since).year()+(d-l.offset)*f}function VM(){var l,d,f,g=this.localeData().eras();for(l=0,d=g.length;l<d;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].name;return""}function jM(){var l,d,f,g=this.localeData().eras();for(l=0,d=g.length;l<d;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].narrow;return""}function YM(){var l,d,f,g=this.localeData().eras();for(l=0,d=g.length;l<d;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].abbr;return""}function WM(){var l,d,f,g,E=this.localeData().eras();for(l=0,d=E.length;l<d;++l)if(f=E[l].since<=E[l].until?1:-1,g=this.clone().startOf("day").valueOf(),E[l].since<=g&&g<=E[l].until||E[l].until<=g&&g<=E[l].since)return(this.year()-r(E[l].since).year())*f+E[l].offset;return this.year()}function HM(l){return a(this,"_erasNameRegex")||Jg.call(this),l?this._erasNameRegex:this._erasRegex}function GM(l){return a(this,"_erasAbbrRegex")||Jg.call(this),l?this._erasAbbrRegex:this._erasRegex}function qM(l){return a(this,"_erasNarrowRegex")||Jg.call(this),l?this._erasNarrowRegex:this._erasRegex}function Xg(l,d){return d.erasAbbrRegex(l)}function KM(l,d){return d.erasNameRegex(l)}function QM(l,d){return d.erasNarrowRegex(l)}function XM(l,d){return d._eraYearOrdinalRegex||_a}function Jg(){var l=[],d=[],f=[],g=[],E,b,L=this.eras();for(E=0,b=L.length;E<b;++E)d.push(Xn(L[E].name)),l.push(Xn(L[E].abbr)),f.push(Xn(L[E].narrow)),g.push(Xn(L[E].name)),g.push(Xn(L[E].abbr)),g.push(Xn(L[E].narrow));this._erasRegex=new RegExp("^("+g.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+d.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+l.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+f.join("|")+")","i")}z(0,["gg",2],0,function(){return this.weekYear()%100}),z(0,["GG",2],0,function(){return this.isoWeekYear()%100});function sh(l,d){z(0,[l,l.length],0,d)}sh("gggg","weekYear"),sh("ggggg","weekYear"),sh("GGGG","isoWeekYear"),sh("GGGGG","isoWeekYear"),bt("weekYear","gg"),bt("isoWeekYear","GG"),Ne("weekYear",1),Ne("isoWeekYear",1),ie("G",Gd),ie("g",Gd),ie("GG",it,Qn),ie("gg",it,Qn),ie("GGGG",$g,Lg),ie("gggg",$g,Lg),ie("GGGGG",Hd,Yd),ie("ggggg",Hd,Yd),ou(["gggg","ggggg","GGGG","GGGGG"],function(l,d,f,g){d[g.substr(0,2)]=Oe(l)}),ou(["gg","GG"],function(l,d,f,g){d[g]=r.parseTwoDigitYear(l)});function JM(l){return BS.call(this,l,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function ZM(l){return BS.call(this,l,this.isoWeek(),this.isoWeekday(),1,4)}function eL(){return _i(this.year(),1,4)}function tL(){return _i(this.isoWeekYear(),1,4)}function nL(){var l=this.localeData()._week;return _i(this.year(),l.dow,l.doy)}function rL(){var l=this.localeData()._week;return _i(this.weekYear(),l.dow,l.doy)}function BS(l,d,f,g,E){var b;return l==null?uu(this,g,E).year:(b=_i(l,g,E),d>b&&(d=b),iL.call(this,l,d,f,g,E))}function iL(l,d,f,g,E){var b=yS(l,d,f,g,E),L=lu(b.year,0,b.dayOfYear);return this.year(L.getUTCFullYear()),this.month(L.getUTCMonth()),this.date(L.getUTCDate()),this}z("Q",0,"Qo","quarter"),bt("quarter","Q"),Ne("quarter",7),ie("Q",aS),Je("Q",function(l,d){d[vi]=(Oe(l)-1)*3});function sL(l){return l==null?Math.ceil((this.month()+1)/3):this.month((l-1)*3+this.month()%3)}z("D",["DD",2],"Do","date"),bt("date","D"),Ne("date",9),ie("D",it),ie("DD",it,Qn),ie("Do",function(l,d){return l?d._dayOfMonthOrdinalParse||d._ordinalParse:d._dayOfMonthOrdinalParseLenient}),Je(["D","DD"],Hr),Je("Do",function(l,d){d[Hr]=Oe(l.match(it)[0])});var zS=wa("Date",!0);z("DDD",["DDDD",3],"DDDo","dayOfYear"),bt("dayOfYear","DDD"),Ne("dayOfYear",4),ie("DDD",Wd),ie("DDDD",lS),Je(["DDD","DDDD"],function(l,d,f){f._dayOfYear=Oe(l)});function oL(l){var d=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return l==null?d:this.add(l-d,"d")}z("m",["mm",2],0,"minute"),bt("minute","m"),Ne("minute",14),ie("m",it),ie("mm",it,Qn),Je(["m","mm"],Dr);var aL=wa("Minutes",!1);z("s",["ss",2],0,"second"),bt("second","s"),Ne("second",15),ie("s",it),ie("ss",it,Qn),Je(["s","ss"],wi);var lL=wa("Seconds",!1);z("S",0,0,function(){return~~(this.millisecond()/100)}),z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),z(0,["SSS",3],0,"millisecond"),z(0,["SSSS",4],0,function(){return this.millisecond()*10}),z(0,["SSSSS",5],0,function(){return this.millisecond()*100}),z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),bt("millisecond","ms"),Ne("millisecond",16),ie("S",Wd,aS),ie("SS",Wd,Qn),ie("SSS",Wd,lS);var ds,VS;for(ds="SSSS";ds.length<=9;ds+="S")ie(ds,_a);function uL(l,d){d[vo]=Oe(("0."+l)*1e3)}for(ds="S";ds.length<=9;ds+="S")Je(ds,uL);VS=wa("Milliseconds",!1),z("z",0,0,"zoneAbbr"),z("zz",0,0,"zoneName");function cL(){return this._isUTC?"UTC":""}function dL(){return this._isUTC?"Coordinated Universal Time":""}var q=A.prototype;q.add=rM,q.calendar=cM,q.clone=dM,q.diff=vM,q.endOf=bM,q.format=SM,q.from=CM,q.fromNow=EM,q.to=kM,q.toNow=TM,q.get=f4,q.invalidAt=$M,q.isAfter=hM,q.isBefore=fM,q.isBetween=pM,q.isSame=mM,q.isSameOrAfter=gM,q.isSameOrBefore=yM,q.isValid=MM,q.lang=MS,q.locale=PS,q.localeData=LS,q.max=MP,q.min=PP,q.parsingFlags=LM,q.set=p4,q.startOf=DM,q.subtract=iM,q.toArray=OM,q.toObject=RM,q.toDate=NM,q.toISOString=_M,q.inspect=xM,typeof Symbol!="undefined"&&Symbol.for!=null&&(q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),q.toJSON=PM,q.toString=wM,q.unix=AM,q.valueOf=IM,q.creationData=FM,q.eraName=VM,q.eraNarrow=jM,q.eraAbbr=YM,q.eraYear=WM,q.year=gS,q.isLeapYear=R4,q.weekYear=JM,q.isoWeekYear=ZM,q.quarter=q.quarters=sL,q.month=pS,q.daysInMonth=A4,q.week=q.weeks=U4,q.isoWeek=q.isoWeeks=B4,q.weeksInYear=nL,q.weeksInWeekYear=rL,q.isoWeeksInYear=eL,q.isoWeeksInISOWeekYear=tL,q.date=zS,q.day=q.days=Z4,q.weekday=eP,q.isoWeekday=tP,q.dayOfYear=oL,q.hour=q.hours=lP,q.minute=q.minutes=aL,q.second=q.seconds=lL,q.millisecond=q.milliseconds=VS,q.utcOffset=YP,q.utc=HP,q.local=GP,q.parseZone=qP,q.hasAlignedHourOffset=KP,q.isDST=QP,q.isLocal=JP,q.isUtcOffset=ZP,q.isUtc=IS,q.isUTC=IS,q.zoneAbbr=cL,q.zoneName=dL,q.dates=F("dates accessor is deprecated. Use date instead.",zS),q.months=F("months accessor is deprecated. Use month instead",pS),q.years=F("years accessor is deprecated. Use year instead",gS),q.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",WP),q.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",XP);function hL(l){return st(l*1e3)}function fL(){return st.apply(null,arguments).parseZone()}function jS(l){return l}var Ve=Te.prototype;Ve.calendar=V,Ve.longDateFormat=Be,Ve.invalidDate=ne,Ve.ordinal=dt,Ve.preparse=jS,Ve.postformat=jS,Ve.relativeTime=Bt,Ve.pastFuture=yo,Ve.set=ue,Ve.eras=UM,Ve.erasParse=BM,Ve.erasConvertYear=zM,Ve.erasAbbrRegex=GM,Ve.erasNameRegex=HM,Ve.erasNarrowRegex=qM,Ve.months=T4,Ve.monthsShort=D4,Ve.monthsParse=I4,Ve.monthsRegex=O4,Ve.monthsShortRegex=N4,Ve.week=M4,Ve.firstDayOfYear=F4,Ve.firstDayOfWeek=$4,Ve.weekdays=q4,Ve.weekdaysMin=Q4,Ve.weekdaysShort=K4,Ve.weekdaysParse=J4,Ve.weekdaysRegex=nP,Ve.weekdaysShortRegex=rP,Ve.weekdaysMinRegex=iP,Ve.isPM=oP,Ve.meridiem=uP;function oh(l,d,f,g){var E=xi(),b=v().set(g,d);return E[f](b,l)}function YS(l,d,f){if(h(l)&&(d=l,l=void 0),l=l||"",d!=null)return oh(l,d,f,"month");var g,E=[];for(g=0;g<12;g++)E[g]=oh(l,g,f,"month");return E}function Zg(l,d,f,g){typeof l=="boolean"?(h(d)&&(f=d,d=void 0),d=d||""):(d=l,f=d,l=!1,h(d)&&(f=d,d=void 0),d=d||"");var E=xi(),b=l?E._week.dow:0,L,de=[];if(f!=null)return oh(d,(f+b)%7,g,"day");for(L=0;L<7;L++)de[L]=oh(d,(L+b)%7,g,"day");return de}function pL(l,d){return YS(l,d,"months")}function mL(l,d){return YS(l,d,"monthsShort")}function gL(l,d,f){return Zg(l,d,f,"weekdays")}function yL(l,d,f){return Zg(l,d,f,"weekdaysShort")}function vL(l,d,f){return Zg(l,d,f,"weekdaysMin")}cs("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(l){var d=l%10,f=Oe(l%100/10)===1?"th":d===1?"st":d===2?"nd":d===3?"rd":"th";return l+f}}),r.lang=F("moment.lang is deprecated. Use moment.locale instead.",cs),r.langData=F("moment.langData is deprecated. Use moment.localeData instead.",xi);var Si=Math.abs;function wL(){var l=this._data;return this._milliseconds=Si(this._milliseconds),this._days=Si(this._days),this._months=Si(this._months),l.milliseconds=Si(l.milliseconds),l.seconds=Si(l.seconds),l.minutes=Si(l.minutes),l.hours=Si(l.hours),l.months=Si(l.months),l.years=Si(l.years),this}function WS(l,d,f,g){var E=br(d,f);return l._milliseconds+=g*E._milliseconds,l._days+=g*E._days,l._months+=g*E._months,l._bubble()}function _L(l,d){return WS(this,l,d,1)}function xL(l,d){return WS(this,l,d,-1)}function HS(l){return l<0?Math.floor(l):Math.ceil(l)}function SL(){var l=this._milliseconds,d=this._days,f=this._months,g=this._data,E,b,L,de,Ae;return l>=0&&d>=0&&f>=0||l<=0&&d<=0&&f<=0||(l+=HS(e0(f)+d)*864e5,d=0,f=0),g.milliseconds=l%1e3,E=It(l/1e3),g.seconds=E%60,b=It(E/60),g.minutes=b%60,L=It(b/60),g.hours=L%24,d+=It(L/24),Ae=It(GS(d)),f+=Ae,d-=HS(e0(Ae)),de=It(f/12),f%=12,g.days=d,g.months=f,g.years=de,this}function GS(l){return l*4800/146097}function e0(l){return l*146097/4800}function CL(l){if(!this.isValid())return NaN;var d,f,g=this._milliseconds;if(l=qt(l),l==="month"||l==="quarter"||l==="year")switch(d=this._days+g/864e5,f=this._months+GS(d),l){case"month":return f;case"quarter":return f/3;case"year":return f/12}else switch(d=this._days+Math.round(e0(this._months)),l){case"week":return d/7+g/6048e5;case"day":return d+g/864e5;case"hour":return d*24+g/36e5;case"minute":return d*1440+g/6e4;case"second":return d*86400+g/1e3;case"millisecond":return Math.floor(d*864e5)+g;default:throw new Error("Unknown unit "+l)}}function EL(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Oe(this._months/12)*31536e6:NaN}function Ci(l){return function(){return this.as(l)}}var kL=Ci("ms"),TL=Ci("s"),DL=Ci("m"),bL=Ci("h"),IL=Ci("d"),AL=Ci("w"),NL=Ci("M"),OL=Ci("Q"),RL=Ci("y");function PL(){return br(this)}function ML(l){return l=qt(l),this.isValid()?this[l+"s"]():NaN}function _o(l){return function(){return this.isValid()?this._data[l]:NaN}}var LL=_o("milliseconds"),$L=_o("seconds"),FL=_o("minutes"),UL=_o("hours"),BL=_o("days"),zL=_o("months"),VL=_o("years");function jL(){return It(this.days()/7)}var Ei=Math.round,Ea={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function YL(l,d,f,g,E){return E.relativeTime(d||1,!!f,l,g)}function WL(l,d,f,g){var E=br(l).abs(),b=Ei(E.as("s")),L=Ei(E.as("m")),de=Ei(E.as("h")),Ae=Ei(E.as("d")),Ze=Ei(E.as("M")),bn=Ei(E.as("w")),ki=Ei(E.as("y")),hs=b<=f.ss&&["s",b]||b<f.s&&["ss",b]||L<=1&&["m"]||L<f.m&&["mm",L]||de<=1&&["h"]||de<f.h&&["hh",de]||Ae<=1&&["d"]||Ae<f.d&&["dd",Ae];return f.w!=null&&(hs=hs||bn<=1&&["w"]||bn<f.w&&["ww",bn]),hs=hs||Ze<=1&&["M"]||Ze<f.M&&["MM",Ze]||ki<=1&&["y"]||["yy",ki],hs[2]=d,hs[3]=+l>0,hs[4]=g,YL.apply(null,hs)}function HL(l){return l===void 0?Ei:typeof l=="function"?(Ei=l,!0):!1}function GL(l,d){return Ea[l]===void 0?!1:d===void 0?Ea[l]:(Ea[l]=d,l==="s"&&(Ea.ss=d-1),!0)}function qL(l,d){if(!this.isValid())return this.localeData().invalidDate();var f=!1,g=Ea,E,b;return typeof l=="object"&&(d=l,l=!1),typeof l=="boolean"&&(f=l),typeof d=="object"&&(g=Object.assign({},Ea,d),d.s!=null&&d.ss==null&&(g.ss=d.s-1)),E=this.localeData(),b=WL(this,!f,g,E),f&&(b=E.pastFuture(+this,b)),E.postformat(b)}var t0=Math.abs;function ka(l){return(l>0)-(l<0)||+l}function ah(){if(!this.isValid())return this.localeData().invalidDate();var l=t0(this._milliseconds)/1e3,d=t0(this._days),f=t0(this._months),g,E,b,L,de=this.asSeconds(),Ae,Ze,bn,ki;return de?(g=It(l/60),E=It(g/60),l%=60,g%=60,b=It(f/12),f%=12,L=l?l.toFixed(3).replace(/\.?0+$/,""):"",Ae=de<0?"-":"",Ze=ka(this._months)!==ka(de)?"-":"",bn=ka(this._days)!==ka(de)?"-":"",ki=ka(this._milliseconds)!==ka(de)?"-":"",Ae+"P"+(b?Ze+b+"Y":"")+(f?Ze+f+"M":"")+(d?bn+d+"D":"")+(E||g||l?"T":"")+(E?ki+E+"H":"")+(g?ki+g+"M":"")+(l?ki+L+"S":"")):"P0D"}var $e=eh.prototype;$e.isValid=BP,$e.abs=wL,$e.add=_L,$e.subtract=xL,$e.as=CL,$e.asMilliseconds=kL,$e.asSeconds=TL,$e.asMinutes=DL,$e.asHours=bL,$e.asDays=IL,$e.asWeeks=AL,$e.asMonths=NL,$e.asQuarters=OL,$e.asYears=RL,$e.valueOf=EL,$e._bubble=SL,$e.clone=PL,$e.get=ML,$e.milliseconds=LL,$e.seconds=$L,$e.minutes=FL,$e.hours=UL,$e.days=BL,$e.weeks=jL,$e.months=zL,$e.years=VL,$e.humanize=qL,$e.toISOString=ah,$e.toString=ah,$e.toJSON=ah,$e.locale=PS,$e.localeData=LS,$e.toIsoString=F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ah),$e.lang=MS,z("X",0,0,"unix"),z("x",0,0,"valueOf"),ie("x",Gd),ie("X",g4),Je("X",function(l,d,f){f._d=new Date(parseFloat(l)*1e3)}),Je("x",function(l,d,f){f._d=new Date(Oe(l))});//! moment.js
return r.version="2.29.4",i(st),r.fn=q,r.min=LP,r.max=$P,r.now=FP,r.utc=v,r.unix=hL,r.months=pL,r.isDate=p,r.locale=cs,r.invalid=C,r.duration=br,r.isMoment=O,r.weekdays=gL,r.parseZone=fL,r.localeData=xi,r.isDuration=th,r.monthsShort=mL,r.weekdaysMin=vL,r.defineLocale=Vg,r.updateLocale=fP,r.locales=pP,r.weekdaysShort=yL,r.normalizeUnits=qt,r.relativeTimeRounding=HL,r.relativeTimeThreshold=GL,r.calendarFormat=uM,r.prototype=q,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r})})(Zx);var yy=Zx.exports;(function(e,t){(function(n,r){r(typeof z2=="function"?Zx.exports:n.moment)})(B2,function(n){//! moment.js locale configuration
var r=n.defineLocale("ko",{months:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),monthsShort:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),weekdays:"\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),weekdaysShort:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),weekdaysMin:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\uB144 MMMM D\uC77C",LLL:"YYYY\uB144 MMMM D\uC77C A h:mm",LLLL:"YYYY\uB144 MMMM D\uC77C dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\uB144 MMMM D\uC77C",lll:"YYYY\uB144 MMMM D\uC77C A h:mm",llll:"YYYY\uB144 MMMM D\uC77C dddd A h:mm"},calendar:{sameDay:"\uC624\uB298 LT",nextDay:"\uB0B4\uC77C LT",nextWeek:"dddd LT",lastDay:"\uC5B4\uC81C LT",lastWeek:"\uC9C0\uB09C\uC8FC dddd LT",sameElse:"L"},relativeTime:{future:"%s \uD6C4",past:"%s \uC804",s:"\uBA87 \uCD08",ss:"%d\uCD08",m:"1\uBD84",mm:"%d\uBD84",h:"\uD55C \uC2DC\uAC04",hh:"%d\uC2DC\uAC04",d:"\uD558\uB8E8",dd:"%d\uC77C",M:"\uD55C \uB2EC",MM:"%d\uB2EC",y:"\uC77C \uB144",yy:"%d\uB144"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(i,s){switch(s){case"d":case"D":case"DDD":return i+"\uC77C";case"M":return i+"\uC6D4";case"w":case"W":return i+"\uC8FC";default:return i}},meridiemParse:/오전|오후/,isPM:function(i){return i==="\uC624\uD6C4"},meridiem:function(i,s,o){return i<12?"\uC624\uC804":"\uC624\uD6C4"}});return r})})();const sX=Hn(ga,"board_photos"),oX=async e=>{const t=Hn(sX,e.name);return await pa(t,e),await ma(t)},JR=Gn("boards/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("boardData is undefined");const{brand:n,height:r,weight:i,title:s,desc:o,photo:a,nickname:u}=e,c=await oX(a);return{id:(await ig(fo(qn,"boards"),{brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()})).id,brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Ig=Gn("boards/get",async()=>(te.locale("ko"),(await rg(fo(qn,"boards"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=te(),u=te(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),aX=aa({name:"board",initialState:{boards:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(JR.fulfilled,(t,n)=>{const r=n.payload;return{...t,boards:[...t.boards,r],postCount:t.postCount+1}}).addCase(Ig.fulfilled,(t,n)=>({...t,boards:n.payload,postCount:n.payload.length}))}});var lX=aX.reducer;const uX=Vl`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 8px 16px;
  cursor: pointer;
`,cX=Vl`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`,dX=Vl`
  width: 100%;
  display: flex;
  flex-direction: column;
`,hX=o8`
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
`,Ag=Ge.div`
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
`,fX=Ge.div`
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
`,eS=Ge.div`
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
`,Ng=Ge.div`
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
`,pX=Ge.div`
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
  ${dX}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;const Tu=Ge.input`
  ${uX}
`,vy=Ge.button`
  ${cX}
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
`;const mX=Ge.div`
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
    animation: ${hX} 1.5s ease infinite;
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
 */function gX(e){e.length=0}function tS(e,t,n){return Array.prototype.slice.call(e,t,n)}function Og(e){return e.bind.apply(e,[null].concat(tS(arguments,1)))}function A2(e){return requestAnimationFrame(e)}function nS(e,t){return typeof t===e}var ZR=Array.isArray;Og(nS,"function");Og(nS,"string");Og(nS,"undefined");function e4(e){return ZR(e)?e:[e]}function N2(e,t){e4(e).forEach(t)}var yX=Object.keys;function vX(e,t,n){if(e){var r=yX(e);r=n?r.reverse():r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function wX(e){return tS(arguments,1).forEach(function(t){vX(t,function(n,r){e[r]=t[r]})}),e}var _X=Math.min;function xX(){var e=[];function t(o,a,u,c){i(o,a,function(h,p,m){var x="addEventListener"in h,v=x?h.removeEventListener.bind(h,p,u,c):h.removeListener.bind(h,u);x?h.addEventListener(p,u,c):h.addListener(u),e.push([h,p,m,u,v])})}function n(o,a,u){i(o,a,function(c,h,p){e=e.filter(function(m){return m[0]===c&&m[1]===h&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,h=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:h,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,h,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){N2(o,function(c){c&&N2(a,function(h){h.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),gX(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var O2="move",R2="moved",SX="updated",P2="drag",CX="dragged",M2="scroll",L2="scrolled",EX="destroy";function kX(e){var t=e?e.event.bus:document.createDocumentFragment(),n=xX();function r(s,o){n.bind(t,e4(s).join(" "),function(a){o.apply(o,ZR(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,tS(arguments,1))}return e&&e.event.on(EX,n.destroy),wX(n,{bus:t,on:r,off:Og(n.unbind,t),emit:i})}function t4(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function h(){if(!u){if(o=e?_X((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();A2(h)}}function p(S){!S&&v(),s=i()-(S?o*e:0),u=!1,A2(h)}function m(){u=!0}function x(){s=i(),o=0,n&&n(o)}function v(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function _(S){e=S}function k(){return u}return{start:p,rewind:x,pause:m,cancel:v,set:_,isPaused:k}}function TX(e,t){var n;function r(){n||(n=t4(t||0,function(){e(),n=null},null,1),n.start())}return r}var DX="is-active",bX="slide",IX="fade";function n4(e,t,n){return Array.prototype.slice.call(e,t,n)}function rS(e){return e.bind(null,...n4(arguments,1))}function Rg(e,t){return typeof t===e}function b1(e){return!r4(e)&&Rg("object",e)}const AX=Array.isArray;rS(Rg,"function");rS(Rg,"string");const NX=rS(Rg,"undefined");function r4(e){return e===null}function OX(e){return AX(e)?e:[e]}function Pp(e,t){OX(e).forEach(t)}function RX(e,t,n){e&&Pp(t,r=>{r&&e.classList[n?"add":"remove"](r)})}const PX=Object.keys;function i4(e,t,n){if(e){let r=PX(e);r=n?r.reverse():r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function $2(e){return n4(arguments,1).forEach(t=>{i4(t,(n,r)=>{e[r]=t[r]})}),e}function MX(e,t){Pp(e,n=>{Pp(t,r=>{n&&n.removeAttribute(r)})})}function s4(e,t,n){b1(t)?i4(t,(r,i)=>{s4(e,i,r)}):Pp(e,r=>{r4(n)||n===""?MX(r,t):r.setAttribute(t,String(n))})}const{min:F2,max:U2,floor:eZ,ceil:tZ,abs:nZ}=Math;function LX(e,t,n){const r=F2(t,n),i=U2(t,n);return F2(U2(r,e),i)}const $X={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},FX={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function iS(e,t,n){const{on:r,off:i,bind:s,unbind:o}=kX(e),{translate:a,getPosition:u,toIndex:c,getLimit:h}=t.Move,{setIndex:p,getIndex:m}=t.Controller,{orient:x}=t.Direction,{toggle:v}=t.Elements,{Live:_}=t,{root:k}=e,S=TX(t.Arrows.update,500);let y={},C,T,I,P,A,O;function Z(){const{autoScroll:B}=n;y=$2({},$X,b1(B)?B:{})}function F(){e.is(IX)||!C&&n.autoScroll!==!1&&(C=t4(0,$),J(),ue())}function j(){C&&(C.cancel(),C=null,O=void 0,i([O2,P2,M2,R2,L2]),o(k,"mouseenter mouseleave focusin focusout"),o(v,"click"))}function J(){y.pauseOnHover&&s(k,"mouseenter mouseleave",B=>{I=B.type==="mouseenter",ge()}),y.pauseOnFocus&&s(k,"focusin focusout",B=>{P=B.type==="focusin",ge()}),y.useToggleButton&&s(v,"click",()=>{T?oe():Te()}),r(SX,X),r([O2,P2,M2],()=>{A=!0,Te(!1)}),r([R2,CX,L2],()=>{A=!1,ge()})}function X(){const{autoScroll:B}=n;B!==!1?(y=$2({},y,b1(B)?B:{}),F()):j(),C&&!NX(O)&&a(O)}function ue(){y.autoStart&&(document.readyState==="complete"?oe():s(window,"load",oe))}function oe(){U()&&(C.start(!0),_.disable(!0),P=I=T=!1,ee())}function Te(B=!0){T||(T=B,ee(),U()||(C.pause(),_.disable(!1)))}function ge(){T||(I||P||A?Te(!1):oe())}function $(){const B=u(),Y=V(B);B!==Y?(a(Y),M(O=u())):(Te(!1),y.rewind&&e.go(y.speed>0?0:t.Controller.getEnd())),S()}function V(B){const Y=y.speed||1;return B+=x(Y),e.is(bX)&&(B=LX(B,h(!1),h(!0))),B}function M(B){const{length:Y}=e,z=(c(B)+Y)%Y;z!==m()&&(p(z),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function ee(){if(v){const B=T?"startScroll":"pauseScroll";RX(v,DX,!T),s4(v,"aria-label",n.i18n[B]||FX[B])}}function U(){return!C||C.isPaused()}return{setup:Z,mount:F,destroy:j,play:oe,pause:Te,isPaused:U}}const ls=()=>w(Ut,{children:N(mX,{children:[w("div",{className:"loader"}),w("h1",{children:"Loading...wait for website.."})]})}),UX=()=>{const e=rt(c=>c.board.boards),[t,n]=R.exports.useState(e.length),[r,i]=R.exports.useState("16px"),[s,o]=R.exports.useState("left"),a=Gt(),u=R.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return R.exports.useEffect(()=>(a(Ig()),u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[a,u]),w(Ut,{children:N(Ag,{children:[N("div",{className:"title",children:[w("h1",{children:"OOTD"}),w("span",{children:"\uCD5C\uC2E0 OOTD \uB9AC\uC2A4\uD2B8"})]}),w("div",{className:"contents",children:e.length>0?w(Nx,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:2}},extensions:{AutoScroll:iS},children:e.slice(0,10).map(c=>w(Ox,{children:N(eS,{children:[w("div",{className:"top",children:w(Nn,{to:`board/details/${c.id}`,children:w("img",{src:c.photo,alt:"board"})})}),N("div",{className:"bottom",children:[w("p",{className:"board_nickname",children:c.nickname}),w("p",{className:"board_title",children:c.title}),w("p",{className:"board_desc",children:c.desc.length>60?c.desc.slice(0,50)+"...":c.desc})]})]})},c.id))}):w(ls,{})})]})})},BX=Hn(ga,"questions_photos"),zX=async e=>{if(e){const t=Hn(BX,e.name);return await pa(t,e),await ma(t)}return null},I1=Gn("questions/incrementViews",async(e,{rejectWithValue:t})=>{try{const{questionId:n}=e,r=fa(qn,"questions",n);await iO(r,{views:xY(1)})}catch(n){return console.error(n),t("\uC870\uD68C\uC218\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),o4=Gn("question/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("qnaData is Not Fount");const{title:n,desc:r,photo:i,nickname:s}=e,o=await zX(i),a={title:n,desc:r,nickname:s,createdAt:Date.now()};return o&&(a.photo=o),{id:(await ig(fo(qn,"questions"),a)).id,...a}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),td=Gn("question/get",async()=>(te.locale("ko"),(await rg(fo(qn,"questions"))).docs.map((n,r)=>{const i=n.data(),{createdAt:s,...o}=i;let a;const u=te(),c=te(s);return u.diff(c,"days")<=1?a=c.fromNow():a=c.format("YYYY.MM.DD"),{id:n.id,number:r+1,createdAt:a,...o}}))),VX=aa({name:"qna",initialState:{questions:[],postCount:0,loading:!1},reducers:{},extraReducers:e=>{e.addCase(o4.fulfilled,(t,n)=>{const r=n.payload;return{...t,questions:[...t.questions,r],postCount:t.postCount+1}}).addCase(td.fulfilled,(t,n)=>({...t,questions:n.payload,postCount:n.payload.length})).addCase(I1.pending,(t,n)=>({...t,loading:!0})).addCase(I1.fulfilled,(t,n)=>{if(n.payload&&n.payload.questionId){const r=t.questions.map(i=>i.id===n.payload.questionId?{...i,views:i.views+1}:i);return{...t,questions:r,loading:!1}}return{...t,loading:!1}})}});var jX=VX.reducer;const YX=Ge.div`
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
`,WX=Ge.article`
  margin: 30px auto 0px auto;
  max-width: 964px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #cecece;

  .qna_card {
    width: 100%;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    border-top-width: 1px;
    border-bottom-width: 0;
    word-break: break-all;

    .card_header {
      width: 100%;
      padding: 0 0 10px;
      border-bottom: 1px solid #e3e3e3;

      h1 {
        word-wrap: break-word;
        font-weight: 700;
        margin-bottom: 12px;
        font-size: clamp(20px, 2.5vw, 24px);
        span {
          margin-right: 6px;
          font-size: clamp(21px, 2.6vw, 25px);
          color: #3772f0;
          font-weight: 500;
        }
      }

      .card_info {
        display: flex;
        align-items: center;
        gap: 6px;

        .inner {
          display: flex;
          gap: 3px;
          font-size: clamp(12px, 1.3vw, 14px);
        }

        .date {
          color: #aaa;
          font-size: clamp(12px, 1.3vw, 14px);
        }
      }
    }

    .card_contents {
      padding: 10px 0;
      .card_desc {
        margin-bottom: 6px;
      }
    }

    .card_footer {
      position: relative;

      .inner {
        display: flex;
      }
    }
  }
`,HX=Ge.div`
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

      p {
        display: block;
        font-size: clamp(12.5px, 1.5vw, 13px);
      }

      .number {
        min-width: 5%;
        text-align: center;
      }
      .title {
        text-overflow: ellipsis;
        color: #0c2d43;
        cursor: pointer;
        min-width: 70%;
        color: #333;

        &:hover {
          color: #770088;
          text-decoration: underline 0.5px;
        }
      }
      .nickname {
        text-align: center;
        min-width: 10%;
      }

      .date,
      .views {
        text-align: center;
        min-width: 5%;
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
`,GX=Ge.div`
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
`,qX=Ge.div`
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
`,KX=()=>{const e=rt(s=>s.qna.questions),[t,n]=R.exports.useState([]),r=Gt(),i=s=>{n(o=>{const a=o.indexOf(s);if(a!==-1){const u=[...o];return u.splice(a,1),u}else return[s]})};return R.exports.useEffect(()=>{r(td())},[r]),w(Ut,{className:"qna_section",children:N(Ag,{children:[N("div",{className:"title",children:[w("h1",{children:"QnA"}),w("span",{children:"\uCD5C\uC2E0 QnA \uB9AC\uC2A4\uD2B8"})]}),e.length>0?w(GX,{children:w("div",{className:"qna_contents",children:w("ul",{className:"list_item",children:e.slice(0,7).map(s=>N("li",{className:`qna_items ${t.findIndex(o=>o===s.id)!==-1?"active":""}`,onClick:()=>i(s.id),children:[w("div",{className:"inner",children:N("h3",{className:"qna_title",children:[w("span",{className:"qna_q_icon",children:"Q."}),s.title]})}),t.findIndex(o=>o===s.id)!==-1?w("div",{className:"qna_answer",children:w("p",{className:"qna_desc",children:s.desc})}):null]},s.id))})})}):w(ls,{})]})})},QX=Hn(ga,"photos_png"),XX=async e=>{if(e){const t=Hn(QX,e.name);return await pa(t,e),await ma(t)}return null},a4=Gn("photos/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await XX(s);return{id:(await ig(fo(qn,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Pg=Gn("photos/get",async()=>(yy.locale("ko"),(await rg(fo(qn,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=yy(),u=yy(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),JX=aa({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(a4.fulfilled,(t,n)=>{const r=n.payload;return{...t,photos:[...t.photos,r],postCount:t.postCount+1}}).addCase(Pg.fulfilled,(t,n)=>({...t,photos:n.payload,postCount:n.payload.length}))}});var ZX=JX.reducer;const eJ=()=>{const e=rt(p=>p.photo.photos),[t,n]=R.exports.useState([]),[r,i]=R.exports.useState(e.length),[s,o]=R.exports.useState("16px"),[a,u]=R.exports.useState("left"),c=Gt(),h=R.exports.useCallback(()=>{window.innerWidth>=1280?(i(5),u("left")):window.innerWidth>=1024?(i(4),o("14px"),u("left")):window.innerWidth>=768?(i(3),o("12px"),u("center")):(i(2),o("10px"),u("center"))},[]);return R.exports.useEffect(()=>(c(Pg()),h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[c,h]),R.exports.useEffect(()=>{const p=[...e].sort((m,x)=>x.createdAt-m.createdAt);n(p)},[e]),w(Ut,{children:N(Ag,{children:[N("div",{className:"title",children:[w("h1",{children:"Photos"}),w("span",{children:"\uCD5C\uC2E0 photo \uB9AC\uC2A4\uD2B8"})]}),w("div",{className:"contents",children:t.length>0?w(Nx,{options:{type:"loop",perPage:r,gap:s,focus:a,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:1.5}},extensions:{AutoScroll:iS},children:t.slice(0,10).map(p=>w(Ox,{children:N(eS,{children:[w("div",{className:"top",children:w(Nn,{to:`photo/details/${p.id}`,children:w("img",{src:p.photo,alt:"photo"})})}),N("div",{className:"bottom",children:[w("p",{className:"photo_category",children:`<${p.category}>`}),w("p",{className:"photo_nickname",children:p.nickname}),w("p",{className:"photo_title",children:p.title}),w("p",{className:"photo_desc",children:p.desc.length>60?p.desc.slice(0,50)+"...":p.desc})]})]})},p.id))}):w(ls,{})})]})})};Ge.main`
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
`;var sS="/modart/assets/main.eb927103.gif";const tJ=Hn(ga,"todays_photos"),nJ=async e=>{if(e){const t=Hn(tJ,e.name);return await pa(t,e),await ma(t)}return null},l4=Gn("todays/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("todaysData Not Found..");const{title:n,desc:r,type:i,photo:s,nickname:o}=e,a=await nJ(s),u={title:n,desc:r,type:i,nickname:o,createdAt:Date.now()};return a&&(u.photo=a),{id:(await ig(fo(qn,"todays"),u)).id,...u}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Mg=Gn("todays/get",async()=>(te.locale("ko"),(await rg(fo(qn,"todays"))).docs.map((n,r)=>{const i=n.data(),{createdAt:s,...o}=i;let a;const u=te(),c=te(s);return u.diff(c,"days")<=1?a=c.fromNow():a=c.format("YYYY.MM.DD"),{id:n.id,number:r+1,createdAt:a,...o}}))),rJ=aa({name:"today",initialState:{todays:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(l4.fulfilled,(t,n)=>{const r=n.payload;return{...t,todays:[...t.todays,r],postCount:t.postCount+1}}).addCase(Mg.fulfilled,(t,n)=>({...t,todays:n.payload,postCount:n.payload.length}))}});var iJ=rJ.reducer;const sJ=()=>{const e=rt(h=>h.today.todays),[t,n]=R.exports.useState(e.length),[r,i]=R.exports.useState("16px"),[s,o]=R.exports.useState("left"),a=Gt(),u="https://via.placeholder.com/500x750.png?text=No+Image",c=R.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return R.exports.useEffect(()=>(a(Mg()),c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[a,c]),w(Ut,{children:N(Ag,{children:[N("div",{className:"title",children:[w("h1",{children:"Today Story"}),w("span",{children:"\uCD5C\uC2E0 \uC77C\uC0C1\uC774\uC57C\uAE30 \uB9AC\uC2A4\uD2B8"})]}),e.length>0?w(Nx,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!0,pauseOnFocus:!1,rewind:!1,speed:-1}},extensions:{AutoScroll:iS},children:e.slice(0,10).map(h=>w(Ox,{children:N(eS,{children:[w("div",{className:"top",children:w(Nn,{to:`today/details/${h.id}`,children:h.photo?w("img",{src:h.photo,alt:"today"}):w("img",{src:u,alt:h.title})})}),N("div",{className:"bottom",children:[w("p",{className:"today_category",children:`<${h.type}>`}),w("p",{className:"today_nickname",children:h.nickname}),w("p",{className:"today_title",children:h.title}),w("p",{className:"today_desc",children:h.desc.length>60?h.desc.slice(0,50)+"...":h.desc})]})]})},h.id))}):w(ls,{})]})})},oJ=()=>N(xv,{children:[w(UX,{}),w(sJ,{}),w(eJ,{}),w(KX,{})]}),aJ=Ge.div`
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
`,lJ=Ge.div`
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
`;var u4="/modart/assets/user.6af8c4bf.png";const uJ=()=>{const e=rt(t=>t.login.user);return console.log(e),w(Ut,{children:w(aJ,{children:e?N("div",{className:"contents",children:[N("div",{className:"users",children:[N("div",{className:"user_detail",children:[w("div",{className:"user_thumb",children:w("img",{src:e.profileImg?e.profileImg:u4,alt:"",style:{maxWidth:"100px",maxHeight:"100px"}})}),w("div",{className:"user_info",children:N("div",{className:"info_box",children:[w("strong",{className:"name",children:e.nickname}),e.intro?w("p",{className:"intro",children:e.intro}):null,w("p",{className:"email",children:e.email}),w(Nn,{to:"/account/edit",children:"\uD504\uB85C\uD544 \uC218\uC815"})]})})]}),N("div",{className:"board_detail",children:[N(Nn,{to:"/",className:"board_item",children:[w("strong",{className:"info",children:"\uAC8C\uC2DC\uAE00"}),w("p",{className:"title",children:"2 (\uAC1C)"})]}),N(Nn,{to:"/",className:"board_item",children:[w("strong",{className:"info",children:"2100P"}),w("p",{className:"title",children:"\uD3EC\uC778\uD2B8"})]})]})]}),w("div",{className:"items"}),w("div",{className:"items"})]}):w(ls,{})})})},cJ=Hn(ga,"profile_img"),dJ=async e=>{if(e){const t=Hn(cJ,e.name);return await pa(t,e),await ma(t)}return null},A1=Gn("auth/signUp",async e=>{try{const{email:t,password:n,nickname:r,photo:i}=e,o=(await t7(no,t,n)).user,a=fa(qn,"users",o.uid),u=await dJ(i);return await wY(a,{uid:o.uid,nickname:r,email:t,profileImg:u||""}),{uid:o.uid,email:t,nickname:r,profileImg:u||""}}catch(t){throw t}}),hJ=aa({name:"auth",initialState:null,extraReducers:e=>{e.addCase(A1.fulfilled,(t,n)=>{const{uid:r,email:i,nickname:s}=n.payload;return{...t,uid:r,email:i,nickname:s}}),e.addCase(A1.rejected,(t,n)=>n.error.message)}});var fJ=hJ.reducer;function pJ(e){return Kn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function mJ(e){return Kn({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#8CBCD6",d:"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}},{tag:"circle",attr:{fill:"#B3DDF5",cx:"35",cy:"16",r:"3"}},{tag:"polygon",attr:{fill:"#9AC9E3",points:"20,16 9,32 31,32"}},{tag:"polygon",attr:{fill:"#B3DDF5",points:"31,22 23,32 39,32"}},{tag:"circle",attr:{fill:"#43A047",cx:"38",cy:"38",r:"10"}},{tag:"g",attr:{fill:"#fff"},child:[{tag:"rect",attr:{x:"36",y:"32",width:"4",height:"12"}},{tag:"rect",attr:{x:"32",y:"36",width:"12",height:"4"}}]}]})(e)}function gJ(e){return Kn({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}const yJ=({text:e})=>w(pX,{children:w("p",{children:e})}),c4=({text:e,link:t})=>{const[n,r]=R.exports.useState({});R.exports.useState({});const[i,s]=R.exports.useState(!1),[o,a]=R.exports.useState(""),u=Gt(),c=ur(),h=v=>{r({...n,[v.target.name]:v.target.value})};return N(fX,{children:[N("div",{className:"left",children:[w("div",{className:"toggle",onClick:()=>c("/"),children:w(pJ,{})}),N("div",{className:"textbox",children:[w("strong",{className:"title",children:"ModArt"}),w("span",{children:"< \uBAA8\uB4DC\uC544\uD2B8 />"})]})]}),N("div",{className:"right",children:[i&&w(yJ,{text:o}),w("form",{onSubmit:async v=>{v.preventDefault();const _=Object.values(n).every(I=>I!==""),{email:k,password:S,nickname:y,photo:C}=n,T=C||"";if(_){if(e==="\uD68C\uC6D0\uAC00\uC785")try{await u(A1({email:k,password:S,nickname:y,photo:T})).unwrap(),a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),s(!0),c("/account/login")}catch(I){a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),s(!0),console.log(I),setTimeout(()=>{s(!1)},2e3)}else if(e==="\uB85C\uADF8\uC778")try{if(!await u(u1(n)).unwrap()){a("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3);return}c("/")}catch{a("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3)}}},children:e==="\uD68C\uC6D0\uAC00\uC785"?N(xv,{children:[N("div",{className:"area",children:[w(Tu,{type:"email",name:"email",onChange:h,autoComplete:"off"}),w("label",{htmlFor:"email",children:"Email"})]}),N("div",{className:"area",children:[w(Tu,{type:"password",name:"password",onChange:h,autoComplete:"off"}),w("label",{htmlFor:"password",children:"Password"})]}),N("div",{className:"area",children:[w(Tu,{type:"text",name:"nickname",onChange:h,autoComplete:"off"}),w("label",{htmlFor:"nickname",children:"\uB2C9\uB124\uC784"})]}),N("div",{className:"area file",children:[w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:v=>{const _=v.target.files[0];r({...n,photo:_})}}),N("label",{htmlFor:"photo",className:"file_label",children:[w("span",{children:w(mJ,{})}),w("p",{children:"Profile Image"})]})]}),w(vy,{type:"submit",children:e})]}):N(xv,{children:[N("div",{className:"area",children:[w(Tu,{type:"email",name:"email",onChange:h}),w("label",{htmlFor:"email",children:"email"})]}),N("div",{className:"area",children:[w(Tu,{type:"password",name:"password",onChange:h}),w("label",{htmlFor:"password",children:"Password"})]}),w(vy,{type:"submit",children:e})]})}),w("div",{className:"socialLogin",children:N(vy,{className:"googleLogin",onClick:async()=>{try{await u(l1()).unwrap(),a("\uAD6C\uAE00\uACC4\uC815 \uB85C\uADF8\uC778 \uB418\uC168\uC2B5\uB2C8\uB2E4."),c("/")}catch(v){a(v.message)}},children:[w("div",{className:"googleIcon",children:w(gJ,{})}),w("p",{className:"googleText",children:"Sign In With Google"})]})}),w("div",{className:"signUp_link",children:w(Nn,{to:`/account/${t==="\uD68C\uC6D0\uAC00\uC785"?"signup":"login"}`,children:t})})]})]})},d4=Ge.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`,vJ=()=>w(d4,{children:w(c4,{text:"\uD68C\uC6D0\uAC00\uC785",link:"\uB85C\uADF8\uC778"})}),wJ=()=>w(d4,{children:w(c4,{text:"\uB85C\uADF8\uC778",link:"\uD68C\uC6D0\uAC00\uC785"})}),_J=()=>{const e=rt(c=>c.login.user),t=e==null?void 0:e.nickname,n=R.exports.useRef(),[r,i]=R.exports.useState({}),s=Gt(),o=ur(),a=c=>{c.target.name==="photo"?i({...r,[c.target.name]:c.target.files[0]}):i({...r,[c.target.name]:c.target.value})};return R.exports.useEffect(()=>{n.current.focus()},[n]),w(Ut,{children:N(Ng,{children:[w("div",{className:"post_title",children:w("h1",{children:"<OOTD>"})}),N("form",{onSubmit:async c=>{c.preventDefault();try{const h={...r,nickname:t};await s(JR(h)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),o(-1),console.log(r)}catch(h){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(h)}},encType:"multipart/form-data",children:[N("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),t]}),w("input",{ref:n,type:"text",onChange:a,autoComplete:"off",name:"title",placeholder:"\uAE00\uC81C\uBAA9"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"brand",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 ex) \uB098\uC774\uD0A4"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"height",placeholder:"\uD0A4"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"weight",placeholder:"\uBAB8\uBB34\uAC8C"}),w("textarea",{type:"text",name:"desc",onChange:a,placeholder:"contents.."}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:a}),w("label",{htmlFor:"photo",className:"file_label",children:N("p",{children:[w("span",{children:w(sg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},xJ=()=>(rt(e=>e.login.user),zl(),w(Ut,{children:w(Ng,{children:w("form",{children:w("p",{className:"nickname"})})})})),SJ=Ge.div`
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
    height: 13rem;

    .contents {
      .image {
        width: 75%;
      }
    }
  }
`,CJ=Ge.div`
  max-width: 1280px;
  margin: 0 auto;
  background: #FFFFFF;

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
`,EJ=Ge.div`
  margin: 0px auto;
  max-width: 1024px;
  min-height: calc(100vh - 60px);
  padding: 20px 20px 12px 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;

  .contents {
    display: flex;
    flex-direction: column;
    width: 100%;

    .board {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 12px;

      .boardImg {
        width: 40%;
        min-height: 500px;
        height: 550px;

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
          .area {
            margin-bottom: 12px;

            &:first-child {
              display: flex;
              gap: 12px;
              align-items: center;
              margin-bottom: 20px;

              .user_img {
                width: 40px;
                height: 40px;
                overflow: hidden;
                border-radius: 50%;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }

              p {
                font-size: clamp(14.5px, 1.5vw, 16px);
              }
            }

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
      }
    }

    .comment {
      padding: 16px 12px 12px 12px;
    }
  }

  @media screen and (max-width: 768px) {
    .contents {
      .board {
        display: block;

        .boardImg {
          width: 100%;
          min-height: 450px;
          height: 500px;
        }

        .boardInfo {
          width: 100%;
          padding: 12px 6px 6px;
        }
      }
    }
  }
`,kJ=()=>{const{id:e}=zl(),t=rt(i=>i.board.boards),n=Gt(),r=t.find(i=>i.id===e);return R.exports.useEffect(()=>{n(Ig())},[n]),w(Ut,{children:w(EJ,{children:r&&N("div",{className:"contents",children:[N("div",{className:"board",children:[w("div",{className:"boardImg",children:w("img",{src:r.photo,alt:r.nickname})}),N("div",{className:"boardInfo",children:[N("div",{className:"title",children:[N("h1",{children:["Information ",w("span",{children:"< \uC2A4\uD0C0\uC77C \uC815\uBCF4 >"})]}),N("p",{className:"date",children:[r.createdAt,"..."]})]}),N("div",{className:"info",children:[N("div",{className:"area",children:[w("div",{className:"user_img",children:w("img",{src:sS,alt:r.nickname})}),w("p",{children:r.nickname})]}),N("div",{className:"area",children:[w("label",{children:"Title"}),w("p",{children:r.title})]}),N("div",{className:"area",children:[w("label",{children:"Brand"}),w("p",{children:r.brand})]}),N("div",{className:"area",children:[w("label",{children:"Spec"}),N("div",{className:"spec",children:[N("p",{children:["Height: ",r.height]}),N("p",{children:["Weight: ",r.weight]})]})]}),N("div",{className:"area",children:[w("label",{children:"Contents"}),w("p",{children:r.desc})]})]})]})]}),N("div",{className:"comment",children:[N("div",{className:"comment_form",children:[w("div",{className:"users"}),w("div",{className:"form"})]}),w("ul",{className:"comment_list",children:w("li",{})})]})]})})})},TJ=Ge.div`
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
`,DJ=Ge.div`
  max-width: 1280px;
  background: #FFFFFF;
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
`,bJ=Ge.div`
  margin: 0 auto;
  max-width: 1280px;
  min-height: calc(100vh - 60px);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */

  .contents {
    max-width: 768px;
    width: 100%;

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
          font-size: clamp(14px, 1.5vw, 16px);
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
      padding: 6px;
      background: #ebe8e8;
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
          button {;
            width: 24px;
            height: 24px;
            margin-right: 12px;

            svg {
              width:100%;
              height: 100%;
            }

            &:first-child {
              color: #df3a24;
            }
          }
        }
      
        .date {
          font-size: clamp(13.5px, 1.5vw, 16px);
          font-weight: 700;
        }
      }
      
      .photo_title {
        padding-top: 12px;
        h1 {
          font-size: clamp(15px, 1.8vw, 17px);
        }

        p {
          font-size: clamp(14px, 1.4vw, 15px);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contents {
      .snapImg {
        min-height: 300px;
        height: 350px;
      }
    }
  }
`,IJ=()=>{const e=rt(u=>u.login.user),t=rt(u=>u.photo.photos)||null,n=Gt(),r=ur(),[i,s]=R.exports.useState([]),o=()=>e?r("/photo/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),a=u=>{r(`/photo/details/${u.id}`)};return R.exports.useEffect(()=>{n(Pg())},[n]),R.exports.useEffect(()=>{const u=[...t].sort((c,h)=>h.createdAt-c.createdAt);s(u)},[t]),N(Ut,{className:"photo_section",children:[w(TJ,{children:N("div",{className:"contents",children:[N("div",{className:"text",children:[w("p",{children:"Free PhotoZone"}),w("span",{children:"\uC790\uC2E0\uC758 \uC0AC\uC9C4\uC2E4\uB825\uC744 \uBF50\uB0B4\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:o,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(jW,{})})]})}),N(DJ,{children:[w("div",{className:"filter"}),w("ul",{className:"photo_list",children:i.length>0?i.slice(0,10).map(u=>N("li",{className:"photo_card",children:[w("div",{className:"photo_img",onClick:()=>a(u),children:w("img",{src:u.photo,alt:u.title})}),N("div",{className:"items",children:[w("h3",{className:"photo_title",onClick:()=>a(u),children:u.title.length>30?u.title.subString(0,30)+"...":u.title}),N("div",{className:"item_contents",children:[w("span",{className:"item_category",children:u.category}),N("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:u.nickname}),w("span",{className:"item_date",children:u.createdAt})]})]})]})]},u.id)):w(ls,{})})]})]})};(()=>{var e={d:(s,o)=>{for(var a in o)e.o(o,a)&&!e.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},t={};function n(s,o){for(var a=0;a<o.length;a++){var u=o[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}e.r(t),e.d(t,{default:()=>i});var r=function(){function s(){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(u,c,h,p,m,x){return h>p&&(u=Math.round(u*p/h),h=p),u>c&&(h=Math.round(h*c/u),u=c),m&&h<m&&(u=Math.round(u*m/h),h=m),x&&u<x&&(h=Math.round(h*x/u),u=x),{height:u,width:h}}},{key:"resizeAndRotateImage",value:function(u,c,h,p,m){var x=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",v=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,_=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,k=v/100,S=document.createElement("canvas"),y=u.width,C=u.height,T=this.changeHeightWidth(C,h,y,c,p,m);!_||_!==90&&_!==270?(S.width=T.width,S.height=T.height):(S.width=T.height,S.height=T.width),y=T.width,C=T.height;var I=S.getContext("2d");return I.fillStyle="rgba(0, 0, 0, 0)",I.fillRect(0,0,y,C),I.imageSmoothingEnabled&&I.imageSmoothingQuality&&(I.imageSmoothingQuality="high"),_&&(I.rotate(_*Math.PI/180),_===90?I.translate(0,-S.width):_===180?I.translate(-S.width,-S.height):_===270?I.translate(-S.height,0):_!==0&&_!==360||I.translate(0,0)),I.drawImage(u,0,0,y,C),S.toDataURL("image/".concat(x),k)}},{key:"b64toByteArrays",value:function(u,c){for(var h=atob(u.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),p=[],m=0;m<h.length;m+=512){for(var x=h.slice(m,m+512),v=new Array(x.length),_=0;_<x.length;_++)v[_]=x.charCodeAt(_);var k=new Uint8Array(v);p.push(k)}return p}},{key:"b64toBlob",value:function(u,c){var h=this.b64toByteArrays(u,c);return new Blob(h,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(u,c,h){var p=this.b64toByteArrays(u,h);return new File(p,c,{type:h,lastModified:new Date})}},{key:"createResizedImage",value:function(u,c,h,p,m,x,v){var _=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",k=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,S=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,y=new FileReader;if(!u)throw Error("File Not Found!");if(u.type&&!u.type.includes("image"))throw Error("File Is NOT Image!");y.readAsDataURL(u),y.onload=function(){var C=new Image;C.src=y.result,C.onload=function(){var T=s.resizeAndRotateImage(C,c,h,k,S,p,m,x),I="image/".concat(p);switch(_){case"blob":var P=s.b64toBlob(T,I);v(P);break;case"base64":v(T);break;case"file":var A=u.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(p.toString()),O=s.b64toFile(T,A,I);v(O);break;default:v(T)}}},y.onerror=function(C){throw Error(C)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,u,c,h,p,m,x,v){return r.createResizedImage(s,o,a,u,c,h,p,m,x,v)}}})();const AJ=()=>{const[e,t]=R.exports.useState({}),[n,r]=R.exports.useState([]),i=rt(h=>h.login.user),s=i==null?void 0:i.nickname,o=Gt(),a=ur(),u=h=>{if(h.target.name==="photo")t({...e,[h.target.name]:h.target.files[0]});else if(h.target.name==="category"){const{value:p,checked:m}=h.target;r(m?[...n,p]:n.filter(x=>x!==p))}else t({...e,[h.target.name]:h.target.value})};return w(Ut,{children:N(Ng,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Photos>"})}),N("form",{encType:"multipart/form-data",onSubmit:async h=>{h.preventDefault();try{const p={...e,nickname:s,category:n};await o(a4(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[N("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),N("div",{className:"category-wrap",children:[N("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC790\uC5F0",onChange:u}),w("i",{}),w("span",{children:"\uC790\uC5F0"})]}),N("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC778\uBB3C",onChange:u}),w("i",{}),w("span",{children:"\uC778\uBB3C"})]}),N("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC74C\uC2DD",onChange:u}),w("i",{}),w("span",{children:"\uC74C\uC2DD"})]}),N("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:u}),w("i",{}),w("span",{children:"\uC77C\uC0C1"})]})]}),w("input",{type:"text",placeholder:"\uC81C\uBAA9",name:"title",autoComplete:"off",onChange:u}),w("input",{type:"text",placeholder:"\uC124\uBA85",name:"desc",autoComplete:"off",onChange:u}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:u}),w("label",{htmlFor:"photo",className:"file_label",children:N("p",{children:[w("span",{children:w(sg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},NJ=()=>{const e=rt(o=>o.login.user),t=rt(o=>o.board.boards)||null,n=ur(),r=Gt(),i=()=>e?n("/board/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),s=o=>{n(`/board/details/${o.id}`)};return R.exports.useEffect(()=>{r(Ig())},[r]),N(Ut,{className:"ootd_section",children:[w(SJ,{children:N("div",{className:"contents",children:[N("div",{className:"text",children:[w("p",{children:"OOTD of the day"}),w("span",{children:"\uC790\uC2E0\uC758 OOTD\uB97C \uACF5\uC720 \uD574\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:i,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(WW,{})})]})}),w(CJ,{children:w("ul",{className:"board_list",children:t.length>0?t.map(o=>N("li",{className:"board_card",children:[w("div",{className:"board_img",onClick:()=>s(o),children:w("img",{src:o.photo,alt:o.title})}),N("div",{className:"items",children:[w("h3",{className:"board_title",onClick:()=>s(o),children:o.title.length>30?o.title.subString(0,30)+"...":o.title}),N("div",{className:"item_contents",children:[w("span",{className:"item_brand",children:o.brand}),N("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:o.nickname}),w("span",{className:"item_date",children:o.createdAt})]})]})]})]},o.id)):w(ls,{})})})]})},OJ=()=>{const{id:e}=zl();return console.log(e),w("div",{children:"PhotoEdit"})};function RJ(e){return Kn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"}}]})(e)}const PJ=()=>{const{id:e}=zl(),t=rt(i=>i.photo.photos),n=Gt();ur();const r=t.find(i=>i.id===e);return R.exports.useEffect(()=>{n(Pg())},[n]),w(Ut,{children:w(bJ,{children:r&&N("div",{className:"contents",children:[N("div",{className:"photo_users",children:[w("div",{className:"user_img",children:w("img",{src:sS,alt:r.nickname})}),N("div",{className:"user",children:[w("p",{children:r.nickname}),w("span",{children:r.category})]})]}),w("div",{className:"snapImg",children:w("img",{src:r.photo,alt:r.nickname})}),N("div",{className:"photo_info",children:[N("div",{className:"icon",children:[N("div",{className:"link",children:[w("button",{className:"like",children:w(VW,{})}),w("button",{className:"comment",children:w(RJ,{})})]}),N("span",{className:"date",children:[r.createdAt," ..."]})]}),N("div",{className:"photo_title",children:[w("h1",{children:r.title}),w("p",{children:r.desc})]})]})]})})})},MJ=Ge.div`
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

`,LJ=Ge.div`
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
`,$J=Ge.div`
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
        display: inline-block;
      min-height: 200px;
      width: 100%;
      padding: 12px 6px 4px 6px;
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
            border-bottom: 1px solid #eee;
          }
        }
      }
      
      .comment_form {
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #e8e1e1;
        border-radius: 6px;

        p {
          font-size: clamp(12.5px, 1.5vw, 14px);
          font-weight: 600;
          margin-bottom: 9px;
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
            background: #ede6e6;

            &:focus {
              background: #FFF;
              border: 1.5px solid #09f;
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
`,FJ=()=>{const{id:e}=zl(),t=rt(a=>a.login.user),r=rt(a=>a.today.todays).find(a=>a.id===e),i=Gt(),s=ur(),o=()=>{if(t)return null;confirm("\uB85C\uADF8\uC778 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C~?")?s("account/login"):document.querySelector(".comment_input").disabled=!0};return R.exports.useEffect(()=>{i(Mg())},[i]),w(Ut,{className:"today_detail_section",children:w($J,{children:r&&N("div",{className:"contents",children:[N("header",{className:"today_header",children:[N("h2",{className:"today_title",children:[w("span",{className:"today_type",children:`(${r.type})`}),r.title.length>30?r.title.subStr(0,30)+"...":r.title]}),w("p",{className:"today_date",children:r.createdAt})]}),N("div",{className:"user_info",children:[w("p",{className:"user_nickname",children:r.nickname}),N("div",{className:"items",children:[w("span",{children:"\uB313\uAE00"}),w("span",{children:"\uC870\uD68C\uC218"}),w("span",{children:"\uCD94\uCC9C"})]})]}),w("div",{className:"today_desc",children:w("p",{className:"desc",children:r.desc})}),N("div",{className:"comment",children:[w("header",{className:"comment_header",children:w("p",{children:"\uB313\uAE00 2\uAC1C"})}),N("ul",{className:"comment_list",children:[N("li",{className:"comment_item",children:[N("div",{className:"top",children:[w("img",{src:sS,alt:""}),w("span",{className:"comment_name",children:"\uC5B4\uC2EC"}),w("span",{className:"comment_date",children:"3\uBD84 \uC804"})]}),w("div",{className:"bt",children:w("p",{className:"comment_desc",children:"\uC624\uC6B0~!! \uB9F9\uAD6C\uC528 \uBC18\uAC11\uC2B5\uB2C8\uB2E4\u314E\u314E\u314E"})})]}),N("div",{className:"comment_form",children:[w("p",{children:"\uB313\uAE00 \uC4F0\uAE30"}),N("form",{children:[w("input",{className:"comment_input",type:"text",placeholder:"\uB313\uAE00...",onClick:o}),w("button",{type:"submit",children:"\uB4F1\uB85D"})]})]})]})]})]})})})},UJ=()=>{const[e,t]=R.exports.useState({photo:null,fileName:""}),n=rt(u=>u.login.user),r=n==null?void 0:n.nickname,i=Gt(),s=ur(),o=u=>{if(u.target.name==="photo"){const c=u.target.file[0];c&&t({...e,photo:c,fileName:c.name})}else t({...e,[u.target.name]:u.target.value})};return w(Ut,{children:N(Ng,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Todays Story>"})}),N("form",{encType:"multipart/form-data",onSubmit:async u=>{u.preventDefault();try{const c={...e,nickname:r};await i(l4(c)).unwrap(),s(-1),console.log(e)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},children:[N("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),r]}),w("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:o}),w("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:o}),N("select",{name:"type",value:e.type||"",placeholder:"\uC885\uB958",autoComplete:"off",onChange:o,children:[w("option",{value:"",children:"\uC885\uB958 \uC120\uD0DD"}),w("option",{value:"\uD328\uC158",children:"\uD328\uC158"}),w("option",{value:"\uC5F0\uC608\uC778",children:"\uC5F0\uC608\uC778"}),w("option",{value:"\uC6B4\uB3D9",children:"\uC6B4\uB3D9"}),w("option",{value:"\uC720\uBA38",children:"\uC720\uBA38"}),w("option",{value:"\uBBF8\uC6A9",children:"\uBBF8\uC6A9"}),w("option",{value:"\uBBF8\uC2A4\uD130\uB9AC",children:"\uBBF8\uC2A4\uD130\uB9AC"})]}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:o}),w("label",{htmlFor:"photo",className:"file_label",children:N("p",{children:[w("span",{children:w(sg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30",w("span",{className:"label_text",children:e.fileName})]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})};function BJ(e){return Kn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"}}]})(e)}const zJ=()=>{const e=rt(c=>c.login.user),t=rt(c=>c.today.todays),[n,r]=R.exports.useState([]),i=ur(),s=Gt(),o="https://via.placeholder.com/500x750.png?text=No+Image",a=()=>e?i("/today/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),u=c=>{i(`/today/details/${c.id}`)};return R.exports.useEffect(()=>{s(Mg())},[s]),R.exports.useEffect(()=>{const c=[...t].sort((h,p)=>p.createdAt-h.createdAt);r(c),console.log(c)},[t]),N(Ut,{className:"today_section",children:[w(MJ,{children:N("div",{className:"contents",children:[N("div",{className:"text",children:[w("p",{children:"Free Talking"}),w("span",{children:"\uD558\uB8E8\uC758 \uC77C\uC0C1\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694:)"}),w("button",{className:"link-btn",onClick:a,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(BJ,{})})]})}),w(LJ,{children:w("ul",{className:"today_list",children:n?n.slice(0,10).map(c=>N("li",{className:"today_card",children:[w("div",{className:"today_type",children:w("span",{children:c.type})}),w("div",{className:"today_img",children:c.photo?w("img",{src:c.photo,loading:"lazy",alt:c.title}):w("img",{src:o,loading:"lazy",alt:c.title})}),N("div",{className:"items",children:[w("h3",{className:"today_title",onClick:()=>u(c),children:c.title.length>30?c.title.subString(0,30)+"...":c.title}),N("div",{className:"item_contents",children:[w("span",{className:"item_type",children:c.type}),N("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:c.nickname}),w("span",{className:"item_date",children:c.createdAt})]})]})]})]},c.id)):w(ls,{})})})]})},VJ=()=>{const e=rt(a=>a.login.user),t=rt(a=>a.qna.questions),n=ur(),r=Gt(),i=()=>e?n("/qna/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),s=a=>{n(`/qna/details/${a.id}`)},o=a=>{r(I1({questionId:a})).then(()=>{r(td())}).catch(u=>{console.error("Error incrementing views:",u)})};return R.exports.useEffect(()=>{r(td())},[r]),N(Ut,{className:"qna_section",children:[w(YX,{children:N("div",{className:"contents",children:[N("div",{className:"text",children:[w("p",{children:"Ask me any questions"}),w("span",{children:"\uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC744 \uD574\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:i,children:"\uC9C8\uBB38\uD558\uAE30"})]}),w("div",{className:"image",children:w(YW,{})})]})}),w(HX,{children:w("ul",{className:"qna_list",children:t&&t.length>0?t.map(a=>N("li",{className:"qna_card",onClick:()=>o(a.id),children:[w("p",{className:"number",children:a.number}),w("p",{className:"title",onClick:()=>s(a.id),children:a.title}),w("p",{className:"nickname",children:a.nickname}),w("p",{className:"date",children:a.createdAt}),w("p",{className:"viwes",children:a.views})]},a.id)):w(ls,{})})})]})},jJ=()=>{const{id:e}=zl(),[t,n]=R.exports.useState(!1),[r,i]=R.exports.useState(""),s=rt(c=>c.qna.questions),o=rt(c=>c.login.user),a=Gt();s.find(c=>c.id===e);const u=()=>(o||window.alert("\uB85C\uADF8\uC778\uD558\uC5EC\uC57C \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4!"),null);return R.exports.useEffect(()=>{a(td())},[a]),w(Ut,{children:w(WX,{children:N("div",{className:"qna_card",children:[N("header",{className:"card_header",children:[N("h1",{children:[w("span",{children:"Q."}),"\uC9C8\uBB38 title"]}),N("div",{className:"card_info",children:[N("div",{className:"inner",children:[w("span",{children:"\uC720\uC800\uC774\uBBF8\uC9C0?!"}),w("span",{children:"\uC720\uC800nickname"})]}),w("span",{className:"date",children:"2023-05-18"})]})]}),w("div",{className:"card_contents",children:w("p",{className:"card_desc",children:"qna\uB0B4\uC6A9"})}),N("footer",{className:"card_footer",children:[N("div",{className:"inner",children:[w("button",{children:"\uC88B\uC544\uC694"}),w("button",{onClick:()=>n(!t),children:"\uB313\uAE00"}),w("button",{children:"\uACF5\uC720\uD558\uAE30"})]}),t?w("div",{className:"comment",children:N("div",{className:"comment_in",children:[N("div",{className:"top",children:[w("span",{children:o?o.nickname:w(Nn,{to:"/account/login",children:"\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."})}),w("button",{children:"\uB4F1\uB85D"})]}),w("div",{className:"bottom",children:w("textarea",{cols:"30",rows:"10",onClick:u,onChange:c=>i(c.target.value),children:"\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."})})]})}):null]})]})})})},YJ=()=>w("div",{children:"QnaEdit"}),WJ=()=>{const[e,t]=R.exports.useState({}),n=rt(u=>u.login.user),r=n==null?void 0:n.nickname,i=Gt(),s=ur(),o=u=>{if(u.target.name==="photo"){const c=u.target.file[0];c&&t({...e,photo:c,fileName:c.name})}else t({...e,[u.target.name]:u.target.value})};return w(Ut,{className:"qna_write_section",children:N(qX,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Question>"})}),w("div",{className:"qna_write",children:N("form",{encType:"multipart/form-data",onSubmit:async u=>{u.preventDefault();try{const c={...e,nickname:r};await i(o4(c)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),s(-1)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},children:[w("p",{className:"nickname",children:r}),N("div",{className:"qna_cardForm",children:[N("div",{className:"title",children:[w("span",{className:"q",children:w(GW,{})}),w("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:o}),w("span",{className:"number_check",children:"(0/70\uC790)"})]}),w("div",{className:"desc",children:w("textarea",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:o})}),N("div",{className:"file_input",children:[w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:o}),w("label",{htmlFor:"photo",className:"file_label",children:N("p",{children:[w("span",{children:w(sg,{})}),"\uD30C\uC77C\uB123\uAE30"]})})]}),w("button",{className:"submit",type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})]})})},HJ=()=>w("div",{children:"TodayEdit"}),GJ=()=>{const[e,t]=R.exports.useState({}),[n,r]=R.exports.useState({}),[i,s]=R.exports.useState(null),[o,a]=R.exports.useState(null),u=rt(v=>v.login.user),c=Gt(),h=v=>{t(_=>({..._,name:v==="name"?!_.name:_.name,email:v==="email"?!_.email:_.email,intro:v==="intro"?!_.intro:_.intro,password:v==="password"?!_.password:_.password}))},p=v=>{const{name:_,value:k}=v.target;v.target.name==="photo"?s(v.target.files[0]):r(S=>({...S,[_]:k}))},m=async v=>{try{const _=Hn(ga,"users_photos"),k=Hn(_,v.name);return await pa(k,v),await ma(k)}catch(_){return console.log("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",_),null}},x=async v=>{try{let _={};if(e.name&&n.nickname&&(_.nickname=n.nickname,h("name")),e.email&&n.email&&(_.email=n.email,h("email")),e.intro&&n.intro&&(_.intro=n.intro,h("intro")),e.password&&n.password&&(_.password=n.password,h("password")),i){const k=await m(i);_.photo=k,h("photo"),s(null)}if(Object.keys(_).length>0){await c(d1(_)).unwrap();const k={...u,..._};c({type:"login/updateUserData",payload:k})}}catch(_){console.log("\uB370\uC774\uD130 \uC5C5\uB370\uC774\uD2B8\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.",_)}};return R.exports.useEffect(()=>{t({})},[u]),R.exports.useEffect(()=>{if(i){const v=new FileReader;v.onload=_=>{a(_.target.result)},v.readAsDataURL(i)}else a(null)},[i]),w(Ut,{children:w(lJ,{children:N("div",{className:"contents",children:[w("div",{className:"contents_title",children:w("h3",{children:"\uD504\uB85C\uD544 \uAD00\uB9AC"})}),N("div",{className:"user_profile",children:[w("div",{className:"user_img",children:o?w("img",{src:o,alt:u.nickname,style:{maxWidth:"90px",maxHeight:"90px"}}):w("img",{src:u.profileImg?u.profileImg:u4,alt:u.nickname,style:{maxWidth:"90px",maxHeight:"90px"}})}),N("div",{className:"user_detail",children:[w("div",{className:"user_nickname",children:w("p",{className:"nickname",children:u.nickname})}),u.intro?w("div",{className:"user_intro",children:w("p",{children:u.intro})}):null,N("div",{className:"profile_btn",children:[N("div",{className:"img_change",children:[w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:p}),w("label",{htmlFor:"photo",className:"file_label",children:w("p",{children:i?"\uC800\uC7A5\uD558\uAE30":"\uC774\uBBF8\uC9C0\uBCC0\uACBD"})})]}),w("div",{className:"img_delete",children:w("p",{onClick:()=>s(null),children:"\uC0AD\uC81C\uD558\uAE30"})})]})]})]}),N("div",{className:"profile_info",children:[w("div",{className:"info_title",children:w("h3",{children:"\uD504\uB85C\uD544 \uC815\uBCF4"})}),N("div",{className:`area${e.name?" active":""}`,children:[w("label",{children:"\uD504\uB85C\uD544 \uC774\uB984"}),N("div",{className:`input_area${e.name?" active":""}`,children:[e.name?w("input",{type:"text",name:"nickname",placeholder:u.nickname,onChange:p}):w("p",{children:u.nickname}),e.name?N("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>h("name"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",onClick:()=>x(),children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>h("name"),children:"\uBCC0\uACBD"})]})]}),N("div",{className:`area${e.email?" active":""}`,children:[w("label",{children:"Email"}),N("div",{className:`input_area${e.email?" active":""}`,children:[e.email?w("input",{type:"text",name:"email",placeholder:u.email,onChange:p}):w("p",{children:u.email}),e.email?N("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>h("email"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",onClick:()=>x(),children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>h("email"),children:"\uBCC0\uACBD"})]})]}),N("div",{className:`area${e.intro?" active":""}`,children:[w("label",{children:"\uC18C\uAC1C"}),N("div",{className:`input_area${e.intro?" active":""}`,children:[e.intro?w("input",{type:"text",name:"intro",placeholder:u.intro?u.intro:"\uC790\uC2E0\uC744 \uC18C\uAC1C \uD574\uC8FC\uC138\uC694...",onChange:p}):w("p",{children:u.intro?u.intro:"\uC790\uC2E0\uC744 \uC18C\uAC1C \uD574\uC8FC\uC138\uC694..."}),e.intro?N("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>h("intro"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",onClick:()=>x(),children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>h("intro"),children:"\uBCC0\uACBD"})]})]}),N("div",{className:`area${e.password?" active":""}`,children:[w("label",{children:"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD"}),N("div",{className:`input_area${e.password?" active":""}`,children:[e.password?w("input",{type:"password"}):w("p",{children:"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD"}),e.password?N("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>h("password"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",onClick:()=>x(),children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>h("password"),children:"\uBCC0\uACBD"})]})]})]})]})})})},qJ=[{path:"/",element:w(oJ,{})},{path:"/account",element:w(uJ,{})},{path:"/account/:id",element:w(GJ,{})},{path:"/account/signup",element:w(vJ,{})},{path:"/account/login",element:w(wJ,{})},{path:"/board",element:w(NJ,{})},{path:"/board/write",element:w(_J,{})},{path:"/board/:id",element:w(xJ,{})},{path:"/photo",element:w(IJ,{})},{path:"/photo/write",element:w(AJ,{})},{path:"/photo/:id",element:w(OJ,{})},{path:"/today",element:w(zJ,{})},{path:"/today/write",element:w(UJ,{})},{path:"/today/:id",element:w(HJ,{})},{path:"/qna",element:w(VJ,{})},{path:"/qna/write",element:w(WJ,{})},{path:"/qna/:id",element:w(YJ,{})},{path:"/today/details/:id",element:w(FJ,{})},{path:"/board/details/:id",element:w(kJ,{})},{path:"/photo/details/:id",element:w(PJ,{})},{path:"/qna/details/:id",element:w(jJ,{})}];function KJ(){const[e,t]=R.exports.useState(!1),n=()=>{t(i=>!i)},r=()=>{window.innerWidth>768&&t(!1)};return R.exports.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),w(l8,{className:e?" active":"",style:{height:e?"100vh":"auto",overflow:e?"hidden":"auto"},children:N(o$,{basename:"modart",children:[w(a8,{}),w(QW,{toggleMenu:n,toggle:e}),w(t$,{children:qJ.map((i,s)=>w(ob,{path:i.path,element:i.element},s))})]})})}const QJ=aa({name:"users",initialState:{currentUser:null,postCount:0},reducers:{setCurrentUser:(e,t)=>{e.currentUser=t.payload,e.postCount=t.payload?t.payload.postCount:0},incrementPostCount:e=>{e.postCount+=1}}});var XJ=QJ.reducer;const h4=kF({reducer:{auth:fJ,login:FW,users:XJ,board:lX,photo:ZX,today:iJ,qna:jX}});h4.dispatch(MW());wy.createRoot(document.getElementById("root")).render(w(Y8,{store:h4,children:w(KJ,{})}))});export default JJ();
