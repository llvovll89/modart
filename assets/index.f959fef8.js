var WL=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var YJ=WL((KJ,mf)=>{const HL=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};HL();var U2=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function B2(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=Symbol.for("react.element"),GL=Symbol.for("react.portal"),qL=Symbol.for("react.fragment"),KL=Symbol.for("react.strict_mode"),QL=Symbol.for("react.profiler"),XL=Symbol.for("react.provider"),JL=Symbol.for("react.context"),ZL=Symbol.for("react.forward_ref"),e6=Symbol.for("react.suspense"),t6=Symbol.for("react.memo"),n6=Symbol.for("react.lazy"),Gx=Symbol.iterator;function r6(e){return e===null||typeof e!="object"?null:(e=Gx&&e[Gx]||e["@@iterator"],typeof e=="function"?e:null)}var z2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V2=Object.assign,j2={};function Ol(e,t,n){this.props=e,this.context=t,this.refs=j2,this.updater=n||z2}Ol.prototype.isReactComponent={};Ol.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ol.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Y2(){}Y2.prototype=Ol.prototype;function I1(e,t,n){this.props=e,this.context=t,this.refs=j2,this.updater=n||z2}var A1=I1.prototype=new Y2;A1.constructor=I1;V2(A1,Ol.prototype);A1.isPureReactComponent=!0;var qx=Array.isArray,W2=Object.prototype.hasOwnProperty,N1={current:null},H2={key:!0,ref:!0,__self:!0,__source:!0};function G2(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)W2.call(t,r)&&!H2.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xc,type:e,key:s,ref:o,props:i,_owner:N1.current}}function i6(e,t){return{$$typeof:Xc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function O1(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xc}function s6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kx=/\/+/g;function t0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?s6(""+e.key):t.toString(36)}function Bh(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xc:case GL:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+t0(o,0):r,qx(i)?(n="",e!=null&&(n=e.replace(Kx,"$&/")+"/"),Bh(i,t,n,"",function(c){return c})):i!=null&&(O1(i)&&(i=i6(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kx,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",qx(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+t0(s,a);o+=Bh(s,t,n,u,i)}else if(u=r6(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+t0(s,a++),o+=Bh(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function oh(e,t,n){if(e==null)return e;var r=[],i=0;return Bh(e,r,"","",function(s){return t.call(n,s,i++)}),r}function o6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Mn={current:null},zh={transition:null},a6={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:zh,ReactCurrentOwner:N1};Me.Children={map:oh,forEach:function(e,t,n){oh(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oh(e,function(){t++}),t},toArray:function(e){return oh(e,function(t){return t})||[]},only:function(e){if(!O1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Me.Component=Ol;Me.Fragment=qL;Me.Profiler=QL;Me.PureComponent=I1;Me.StrictMode=KL;Me.Suspense=e6;Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a6;Me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=V2({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=N1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)W2.call(t,u)&&!H2.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xc,type:e.type,key:i,ref:s,props:r,_owner:o}};Me.createContext=function(e){return e={$$typeof:JL,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:XL,_context:e},e.Consumer=e};Me.createElement=G2;Me.createFactory=function(e){var t=G2.bind(null,e);return t.type=e,t};Me.createRef=function(){return{current:null}};Me.forwardRef=function(e){return{$$typeof:ZL,render:e}};Me.isValidElement=O1;Me.lazy=function(e){return{$$typeof:n6,_payload:{_status:-1,_result:e},_init:o6}};Me.memo=function(e,t){return{$$typeof:t6,type:e,compare:t===void 0?null:t}};Me.startTransition=function(e){var t=zh.transition;zh.transition={};try{e()}finally{zh.transition=t}};Me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Me.useCallback=function(e,t){return Mn.current.useCallback(e,t)};Me.useContext=function(e){return Mn.current.useContext(e)};Me.useDebugValue=function(){};Me.useDeferredValue=function(e){return Mn.current.useDeferredValue(e)};Me.useEffect=function(e,t){return Mn.current.useEffect(e,t)};Me.useId=function(){return Mn.current.useId()};Me.useImperativeHandle=function(e,t,n){return Mn.current.useImperativeHandle(e,t,n)};Me.useInsertionEffect=function(e,t){return Mn.current.useInsertionEffect(e,t)};Me.useLayoutEffect=function(e,t){return Mn.current.useLayoutEffect(e,t)};Me.useMemo=function(e,t){return Mn.current.useMemo(e,t)};Me.useReducer=function(e,t,n){return Mn.current.useReducer(e,t,n)};Me.useRef=function(e){return Mn.current.useRef(e)};Me.useState=function(e){return Mn.current.useState(e)};Me.useSyncExternalStore=function(e,t,n){return Mn.current.useSyncExternalStore(e,t,n)};Me.useTransition=function(){return Mn.current.useTransition()};Me.version="18.2.0";L.exports=Me;var Qt=L.exports,yv={},R1={exports:{}},rr={},q2={exports:{}},K2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,V){var P=$.length;$.push(V);e:for(;0<P;){var ee=P-1>>>1,U=$[ee];if(0<i(U,V))$[ee]=V,$[P]=U,P=ee;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var V=$[0],P=$.pop();if(P!==V){$[0]=P;e:for(var ee=0,U=$.length,B=U>>>1;ee<B;){var Y=2*(ee+1)-1,z=$[Y],D=Y+1,le=$[D];if(0>i(z,P))D<U&&0>i(le,z)?($[ee]=le,$[D]=P,ee=D):($[ee]=z,$[Y]=P,ee=Y);else if(D<U&&0>i(le,P))$[ee]=le,$[D]=P,ee=D;else break e}}return V}function i($,V){var P=$.sortIndex-V.sortIndex;return P!==0?P:$.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,m=3,w=!1,_=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=$)r(c),V.sortIndex=V.expirationTime,t(u,V);else break;V=n(c)}}function T($){if(S=!1,C($),!_)if(n(u)!==null)_=!0,Te(I);else{var V=n(c);V!==null&&ge(T,V.startTime-$)}}function I($,V){_=!1,S&&(S=!1,x(O),O=-1),w=!0;var P=m;try{for(C(V),p=n(u);p!==null&&(!(p.expirationTime>V)||$&&!j());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,m=p.priorityLevel;var U=ee(p.expirationTime<=V);V=e.unstable_now(),typeof U=="function"?p.callback=U:p===n(u)&&r(u),C(V)}else r(u);p=n(u)}if(p!==null)var B=!0;else{var Y=n(c);Y!==null&&ge(T,Y.startTime-V),B=!1}return B}finally{p=null,m=P,w=!1}}var R=!1,A=null,O=-1,Z=5,F=-1;function j(){return!(e.unstable_now()-F<Z)}function J(){if(A!==null){var $=e.unstable_now();F=$;var V=!0;try{V=A(!0,$)}finally{V?X():(R=!1,A=null)}}else R=!1}var X;if(typeof v=="function")X=function(){v(J)};else if(typeof MessageChannel!="undefined"){var ue=new MessageChannel,oe=ue.port2;ue.port1.onmessage=J,X=function(){oe.postMessage(null)}}else X=function(){k(J,0)};function Te($){A=$,R||(R=!0,X())}function ge($,V){O=k(function(){$(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){_||w||(_=!0,Te(I))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var P=m;m=V;try{return $()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,V){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var P=m;m=$;try{return V()}finally{m=P}},e.unstable_scheduleCallback=function($,V,P){var ee=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ee+P:ee):P=ee,$){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=P+U,$={id:h++,callback:V,priorityLevel:$,startTime:P,expirationTime:U,sortIndex:-1},P>ee?($.sortIndex=P,t(c,$),n(u)===null&&$===n(c)&&(S?(x(O),O=-1):S=!0,ge(T,P-ee))):($.sortIndex=U,t(u,$),_||w||(_=!0,Te(I))),$},e.unstable_shouldYield=j,e.unstable_wrapCallback=function($){var V=m;return function(){var P=m;m=V;try{return $.apply(this,arguments)}finally{m=P}}}})(K2);q2.exports=K2;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q2=L.exports,er=q2.exports;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X2=new Set,rc={};function sa(e,t){dl(e,t),dl(e+"Capture",t)}function dl(e,t){for(rc[e]=t,e=0;e<t.length;e++)X2.add(t[e])}var Hi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),wv=Object.prototype.hasOwnProperty,l6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qx={},Xx={};function u6(e){return wv.call(Xx,e)?!0:wv.call(Qx,e)?!1:l6.test(e)?Xx[e]=!0:(Qx[e]=!0,!1)}function c6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d6(e,t,n,r){if(t===null||typeof t=="undefined"||c6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ln(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ln[e]=new Ln(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ln[t]=new Ln(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ln[e]=new Ln(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ln[e]=new Ln(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ln[e]=new Ln(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ln[e]=new Ln(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ln[e]=new Ln(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ln[e]=new Ln(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ln[e]=new Ln(e,5,!1,e.toLowerCase(),null,!1,!1)});var P1=/[\-:]([a-z])/g;function M1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P1,M1);ln[t]=new Ln(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P1,M1);ln[t]=new Ln(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P1,M1);ln[t]=new Ln(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ln[e]=new Ln(e,1,!1,e.toLowerCase(),null,!1,!1)});ln.xlinkHref=new Ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ln[e]=new Ln(e,1,!1,e.toLowerCase(),null,!0,!0)});function L1(e,t,n,r){var i=ln.hasOwnProperty(t)?ln[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(d6(t,n,i,r)&&(n=null),r||i===null?u6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ss=Q2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ah=Symbol.for("react.element"),Aa=Symbol.for("react.portal"),Na=Symbol.for("react.fragment"),$1=Symbol.for("react.strict_mode"),_v=Symbol.for("react.profiler"),J2=Symbol.for("react.provider"),Z2=Symbol.for("react.context"),F1=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),xv=Symbol.for("react.suspense_list"),U1=Symbol.for("react.memo"),ms=Symbol.for("react.lazy"),eT=Symbol.for("react.offscreen"),Jx=Symbol.iterator;function cu(e){return e===null||typeof e!="object"?null:(e=Jx&&e[Jx]||e["@@iterator"],typeof e=="function"?e:null)}var St=Object.assign,n0;function Cu(e){if(n0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);n0=t&&t[1]||""}return`
`+n0+e}var r0=!1;function i0(e,t){if(!e||r0)return"";r0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{r0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cu(e):""}function h6(e){switch(e.tag){case 5:return Cu(e.type);case 16:return Cu("Lazy");case 13:return Cu("Suspense");case 19:return Cu("SuspenseList");case 0:case 2:case 15:return e=i0(e.type,!1),e;case 11:return e=i0(e.type.render,!1),e;case 1:return e=i0(e.type,!0),e;default:return""}}function Ev(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Na:return"Fragment";case Aa:return"Portal";case _v:return"Profiler";case $1:return"StrictMode";case Sv:return"Suspense";case xv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z2:return(e.displayName||"Context")+".Consumer";case J2:return(e._context.displayName||"Context")+".Provider";case F1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U1:return t=e.displayName||null,t!==null?t:Ev(e.type)||"Memo";case ms:t=e._payload,e=e._init;try{return Ev(e(t))}catch{}}return null}function f6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ev(t);case 8:return t===$1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qs(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tT(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p6(e){var t=tT(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lh(e){e._valueTracker||(e._valueTracker=p6(e))}function nT(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tT(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gf(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cv(e,t){var n=t.checked;return St({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Zx(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qs(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rT(e,t){t=t.checked,t!=null&&L1(e,"checked",t,!1)}function kv(e,t){rT(e,t);var n=qs(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tv(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tv(e,t.type,qs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eE(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tv(e,t,n){(t!=="number"||gf(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ku=Array.isArray;function Ha(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qs(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Dv(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return St({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tE(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(ku(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qs(n)}}function iT(e,t){var n=qs(t.value),r=qs(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nE(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sT(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bv(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sT(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uh,oT=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uh=uh||document.createElement("div"),uh.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uh.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ic(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m6=["Webkit","ms","Moz","O"];Object.keys(Lu).forEach(function(e){m6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lu[t]=Lu[e]})});function aT(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lu.hasOwnProperty(e)&&Lu[e]?(""+t).trim():t+"px"}function lT(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=aT(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var g6=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iv(e,t){if(t){if(g6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function Av(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nv=null;function B1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ov=null,Ga=null,qa=null;function rE(e){if(e=ed(e)){if(typeof Ov!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Fp(t),Ov(e.stateNode,e.type,t))}}function uT(e){Ga?qa?qa.push(e):qa=[e]:Ga=e}function cT(){if(Ga){var e=Ga,t=qa;if(qa=Ga=null,rE(e),t)for(e=0;e<t.length;e++)rE(t[e])}}function dT(e,t){return e(t)}function hT(){}var s0=!1;function fT(e,t,n){if(s0)return e(t,n);s0=!0;try{return dT(e,t,n)}finally{s0=!1,(Ga!==null||qa!==null)&&(hT(),cT())}}function sc(e,t){var n=e.stateNode;if(n===null)return null;var r=Fp(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Rv=!1;if(Hi)try{var du={};Object.defineProperty(du,"passive",{get:function(){Rv=!0}}),window.addEventListener("test",du,du),window.removeEventListener("test",du,du)}catch{Rv=!1}function v6(e,t,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var $u=!1,vf=null,yf=!1,Pv=null,y6={onError:function(e){$u=!0,vf=e}};function w6(e,t,n,r,i,s,o,a,u){$u=!1,vf=null,v6.apply(y6,arguments)}function _6(e,t,n,r,i,s,o,a,u){if(w6.apply(this,arguments),$u){if($u){var c=vf;$u=!1,vf=null}else throw Error(G(198));yf||(yf=!0,Pv=c)}}function oa(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pT(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iE(e){if(oa(e)!==e)throw Error(G(188))}function S6(e){var t=e.alternate;if(!t){if(t=oa(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return iE(i),e;if(s===r)return iE(i),t;s=s.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function mT(e){return e=S6(e),e!==null?gT(e):null}function gT(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gT(e);if(t!==null)return t;e=e.sibling}return null}var vT=er.unstable_scheduleCallback,sE=er.unstable_cancelCallback,x6=er.unstable_shouldYield,E6=er.unstable_requestPaint,Ot=er.unstable_now,C6=er.unstable_getCurrentPriorityLevel,z1=er.unstable_ImmediatePriority,yT=er.unstable_UserBlockingPriority,wf=er.unstable_NormalPriority,k6=er.unstable_LowPriority,wT=er.unstable_IdlePriority,Pp=null,ei=null;function T6(e){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Pp,e,void 0,(e.current.flags&128)===128)}catch{}}var Lr=Math.clz32?Math.clz32:I6,D6=Math.log,b6=Math.LN2;function I6(e){return e>>>=0,e===0?32:31-(D6(e)/b6|0)|0}var ch=64,dh=4194304;function Tu(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _f(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Tu(a):(s&=o,s!==0&&(r=Tu(s)))}else o=n&~i,o!==0?r=Tu(o):s!==0&&(r=Tu(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lr(t),i=1<<n,r|=e[n],t&=~i;return r}function A6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Lr(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=A6(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function Mv(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _T(){var e=ch;return ch<<=1,(ch&4194240)===0&&(ch=64),e}function o0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lr(t),e[t]=n}function O6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Lr(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function V1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lr(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var qe=0;function ST(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xT,j1,ET,CT,kT,Lv=!1,hh=[],Ns=null,Os=null,Rs=null,oc=new Map,ac=new Map,vs=[],R6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oE(e,t){switch(e){case"focusin":case"focusout":Ns=null;break;case"dragenter":case"dragleave":Os=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":oc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ac.delete(t.pointerId)}}function hu(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ed(t),t!==null&&j1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function P6(e,t,n,r,i){switch(t){case"focusin":return Ns=hu(Ns,e,t,n,r,i),!0;case"dragenter":return Os=hu(Os,e,t,n,r,i),!0;case"mouseover":return Rs=hu(Rs,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return oc.set(s,hu(oc.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ac.set(s,hu(ac.get(s)||null,e,t,n,r,i)),!0}return!1}function TT(e){var t=Do(e.target);if(t!==null){var n=oa(t);if(n!==null){if(t=n.tag,t===13){if(t=pT(n),t!==null){e.blockedOn=t,kT(e.priority,function(){ET(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$v(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nv=r,n.target.dispatchEvent(r),Nv=null}else return t=ed(n),t!==null&&j1(t),e.blockedOn=n,!1;t.shift()}return!0}function aE(e,t,n){Vh(e)&&n.delete(t)}function M6(){Lv=!1,Ns!==null&&Vh(Ns)&&(Ns=null),Os!==null&&Vh(Os)&&(Os=null),Rs!==null&&Vh(Rs)&&(Rs=null),oc.forEach(aE),ac.forEach(aE)}function fu(e,t){e.blockedOn===t&&(e.blockedOn=null,Lv||(Lv=!0,er.unstable_scheduleCallback(er.unstable_NormalPriority,M6)))}function lc(e){function t(i){return fu(i,e)}if(0<hh.length){fu(hh[0],e);for(var n=1;n<hh.length;n++){var r=hh[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ns!==null&&fu(Ns,e),Os!==null&&fu(Os,e),Rs!==null&&fu(Rs,e),oc.forEach(t),ac.forEach(t),n=0;n<vs.length;n++)r=vs[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vs.length&&(n=vs[0],n.blockedOn===null);)TT(n),n.blockedOn===null&&vs.shift()}var Ka=ss.ReactCurrentBatchConfig,Sf=!0;function L6(e,t,n,r){var i=qe,s=Ka.transition;Ka.transition=null;try{qe=1,Y1(e,t,n,r)}finally{qe=i,Ka.transition=s}}function $6(e,t,n,r){var i=qe,s=Ka.transition;Ka.transition=null;try{qe=4,Y1(e,t,n,r)}finally{qe=i,Ka.transition=s}}function Y1(e,t,n,r){if(Sf){var i=$v(e,t,n,r);if(i===null)g0(e,t,r,xf,n),oE(e,r);else if(P6(i,e,t,n,r))r.stopPropagation();else if(oE(e,r),t&4&&-1<R6.indexOf(e)){for(;i!==null;){var s=ed(i);if(s!==null&&xT(s),s=$v(e,t,n,r),s===null&&g0(e,t,r,xf,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else g0(e,t,r,null,n)}}var xf=null;function $v(e,t,n,r){if(xf=null,e=B1(r),e=Do(e),e!==null)if(t=oa(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pT(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xf=e,null}function DT(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C6()){case z1:return 1;case yT:return 4;case wf:case k6:return 16;case wT:return 536870912;default:return 16}default:return 16}}var Cs=null,W1=null,jh=null;function bT(){if(jh)return jh;var e,t=W1,n=t.length,r,i="value"in Cs?Cs.value:Cs.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return jh=i.slice(e,1<r?1-r:void 0)}function Yh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fh(){return!0}function lE(){return!1}function ir(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fh:lE,this.isPropagationStopped=lE,this}return St(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fh)},persist:function(){},isPersistent:fh}),t}var Rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},H1=ir(Rl),Zc=St({},Rl,{view:0,detail:0}),F6=ir(Zc),a0,l0,pu,Mp=St({},Zc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:G1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pu&&(pu&&e.type==="mousemove"?(a0=e.screenX-pu.screenX,l0=e.screenY-pu.screenY):l0=a0=0,pu=e),a0)},movementY:function(e){return"movementY"in e?e.movementY:l0}}),uE=ir(Mp),U6=St({},Mp,{dataTransfer:0}),B6=ir(U6),z6=St({},Zc,{relatedTarget:0}),u0=ir(z6),V6=St({},Rl,{animationName:0,elapsedTime:0,pseudoElement:0}),j6=ir(V6),Y6=St({},Rl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W6=ir(Y6),H6=St({},Rl,{data:0}),cE=ir(H6),G6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K6[e])?!!t[e]:!1}function G1(){return Q6}var X6=St({},Zc,{key:function(e){if(e.key){var t=G6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:G1,charCode:function(e){return e.type==="keypress"?Yh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J6=ir(X6),Z6=St({},Mp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dE=ir(Z6),e3=St({},Zc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:G1}),t3=ir(e3),n3=St({},Rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),r3=ir(n3),i3=St({},Mp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s3=ir(i3),o3=[9,13,27,32],q1=Hi&&"CompositionEvent"in window,Fu=null;Hi&&"documentMode"in document&&(Fu=document.documentMode);var a3=Hi&&"TextEvent"in window&&!Fu,IT=Hi&&(!q1||Fu&&8<Fu&&11>=Fu),hE=String.fromCharCode(32),fE=!1;function AT(e,t){switch(e){case"keyup":return o3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function NT(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oa=!1;function l3(e,t){switch(e){case"compositionend":return NT(t);case"keypress":return t.which!==32?null:(fE=!0,hE);case"textInput":return e=t.data,e===hE&&fE?null:e;default:return null}}function u3(e,t){if(Oa)return e==="compositionend"||!q1&&AT(e,t)?(e=bT(),jh=W1=Cs=null,Oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return IT&&t.locale!=="ko"?null:t.data;default:return null}}var c3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pE(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!c3[e.type]:t==="textarea"}function OT(e,t,n,r){uT(r),t=Ef(t,"onChange"),0<t.length&&(n=new H1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Uu=null,uc=null;function d3(e){jT(e,0)}function Lp(e){var t=Ma(e);if(nT(t))return e}function h3(e,t){if(e==="change")return t}var RT=!1;if(Hi){var c0;if(Hi){var d0="oninput"in document;if(!d0){var mE=document.createElement("div");mE.setAttribute("oninput","return;"),d0=typeof mE.oninput=="function"}c0=d0}else c0=!1;RT=c0&&(!document.documentMode||9<document.documentMode)}function gE(){Uu&&(Uu.detachEvent("onpropertychange",PT),uc=Uu=null)}function PT(e){if(e.propertyName==="value"&&Lp(uc)){var t=[];OT(t,uc,e,B1(e)),fT(d3,t)}}function f3(e,t,n){e==="focusin"?(gE(),Uu=t,uc=n,Uu.attachEvent("onpropertychange",PT)):e==="focusout"&&gE()}function p3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lp(uc)}function m3(e,t){if(e==="click")return Lp(t)}function g3(e,t){if(e==="input"||e==="change")return Lp(t)}function v3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ur=typeof Object.is=="function"?Object.is:v3;function cc(e,t){if(Ur(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wv.call(t,i)||!Ur(e[i],t[i]))return!1}return!0}function vE(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yE(e,t){var n=vE(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vE(n)}}function MT(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?MT(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function LT(){for(var e=window,t=gf();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gf(e.document)}return t}function K1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function y3(e){var t=LT(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&MT(n.ownerDocument.documentElement,n)){if(r!==null&&K1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=yE(n,s);var o=yE(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var w3=Hi&&"documentMode"in document&&11>=document.documentMode,Ra=null,Fv=null,Bu=null,Uv=!1;function wE(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uv||Ra==null||Ra!==gf(r)||(r=Ra,"selectionStart"in r&&K1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bu&&cc(Bu,r)||(Bu=r,r=Ef(Fv,"onSelect"),0<r.length&&(t=new H1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ra)))}function ph(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pa={animationend:ph("Animation","AnimationEnd"),animationiteration:ph("Animation","AnimationIteration"),animationstart:ph("Animation","AnimationStart"),transitionend:ph("Transition","TransitionEnd")},h0={},$T={};Hi&&($T=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function $p(e){if(h0[e])return h0[e];if(!Pa[e])return e;var t=Pa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $T)return h0[e]=t[n];return e}var FT=$p("animationend"),UT=$p("animationiteration"),BT=$p("animationstart"),zT=$p("transitionend"),VT=new Map,_E="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function so(e,t){VT.set(e,t),sa(t,[e])}for(var f0=0;f0<_E.length;f0++){var p0=_E[f0],_3=p0.toLowerCase(),S3=p0[0].toUpperCase()+p0.slice(1);so(_3,"on"+S3)}so(FT,"onAnimationEnd");so(UT,"onAnimationIteration");so(BT,"onAnimationStart");so("dblclick","onDoubleClick");so("focusin","onFocus");so("focusout","onBlur");so(zT,"onTransitionEnd");dl("onMouseEnter",["mouseout","mouseover"]);dl("onMouseLeave",["mouseout","mouseover"]);dl("onPointerEnter",["pointerout","pointerover"]);dl("onPointerLeave",["pointerout","pointerover"]);sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sa("onBeforeInput",["compositionend","keypress","textInput","paste"]);sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Du));function SE(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_6(r,t,void 0,e),e.currentTarget=null}function jT(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;SE(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;SE(i,a,c),s=u}}}if(yf)throw e=Pv,yf=!1,Pv=null,e}function ot(e,t){var n=t[Yv];n===void 0&&(n=t[Yv]=new Set);var r=e+"__bubble";n.has(r)||(YT(t,e,2,!1),n.add(r))}function m0(e,t,n){var r=0;t&&(r|=4),YT(n,e,r,t)}var mh="_reactListening"+Math.random().toString(36).slice(2);function dc(e){if(!e[mh]){e[mh]=!0,X2.forEach(function(n){n!=="selectionchange"&&(x3.has(n)||m0(n,!1,e),m0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mh]||(t[mh]=!0,m0("selectionchange",!1,t))}}function YT(e,t,n,r){switch(DT(t)){case 1:var i=L6;break;case 4:i=$6;break;default:i=Y1}n=i.bind(null,t,n,e),i=void 0,!Rv||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function g0(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Do(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}fT(function(){var c=s,h=B1(n),p=[];e:{var m=VT.get(e);if(m!==void 0){var w=H1,_=e;switch(e){case"keypress":if(Yh(n)===0)break e;case"keydown":case"keyup":w=J6;break;case"focusin":_="focus",w=u0;break;case"focusout":_="blur",w=u0;break;case"beforeblur":case"afterblur":w=u0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=uE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=B6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=t3;break;case FT:case UT:case BT:w=j6;break;case zT:w=r3;break;case"scroll":w=F6;break;case"wheel":w=s3;break;case"copy":case"cut":case"paste":w=W6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=dE}var S=(t&4)!==0,k=!S&&e==="scroll",x=S?m!==null?m+"Capture":null:m;S=[];for(var v=c,C;v!==null;){C=v;var T=C.stateNode;if(C.tag===5&&T!==null&&(C=T,x!==null&&(T=sc(v,x),T!=null&&S.push(hc(v,T,C)))),k)break;v=v.return}0<S.length&&(m=new w(m,_,null,n,h),p.push({event:m,listeners:S}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Nv&&(_=n.relatedTarget||n.fromElement)&&(Do(_)||_[Gi]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(_=n.relatedTarget||n.toElement,w=c,_=_?Do(_):null,_!==null&&(k=oa(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(w=null,_=c),w!==_)){if(S=uE,T="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(S=dE,T="onPointerLeave",x="onPointerEnter",v="pointer"),k=w==null?m:Ma(w),C=_==null?m:Ma(_),m=new S(T,v+"leave",w,n,h),m.target=k,m.relatedTarget=C,T=null,Do(h)===c&&(S=new S(x,v+"enter",_,n,h),S.target=C,S.relatedTarget=k,T=S),k=T,w&&_)t:{for(S=w,x=_,v=0,C=S;C;C=xa(C))v++;for(C=0,T=x;T;T=xa(T))C++;for(;0<v-C;)S=xa(S),v--;for(;0<C-v;)x=xa(x),C--;for(;v--;){if(S===x||x!==null&&S===x.alternate)break t;S=xa(S),x=xa(x)}S=null}else S=null;w!==null&&xE(p,m,w,S,!1),_!==null&&k!==null&&xE(p,k,_,S,!0)}}e:{if(m=c?Ma(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var I=h3;else if(pE(m))if(RT)I=g3;else{I=p3;var R=f3}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=m3);if(I&&(I=I(e,c))){OT(p,I,n,h);break e}R&&R(e,m,c),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Tv(m,"number",m.value)}switch(R=c?Ma(c):window,e){case"focusin":(pE(R)||R.contentEditable==="true")&&(Ra=R,Fv=c,Bu=null);break;case"focusout":Bu=Fv=Ra=null;break;case"mousedown":Uv=!0;break;case"contextmenu":case"mouseup":case"dragend":Uv=!1,wE(p,n,h);break;case"selectionchange":if(w3)break;case"keydown":case"keyup":wE(p,n,h)}var A;if(q1)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Oa?AT(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(IT&&n.locale!=="ko"&&(Oa||O!=="onCompositionStart"?O==="onCompositionEnd"&&Oa&&(A=bT()):(Cs=h,W1="value"in Cs?Cs.value:Cs.textContent,Oa=!0)),R=Ef(c,O),0<R.length&&(O=new cE(O,e,null,n,h),p.push({event:O,listeners:R}),A?O.data=A:(A=NT(n),A!==null&&(O.data=A)))),(A=a3?l3(e,n):u3(e,n))&&(c=Ef(c,"onBeforeInput"),0<c.length&&(h=new cE("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=A))}jT(p,t)})}function hc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ef(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=sc(e,n),s!=null&&r.unshift(hc(e,s,i)),s=sc(e,t),s!=null&&r.push(hc(e,s,i))),e=e.return}return r}function xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xE(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=sc(n,s),u!=null&&o.unshift(hc(n,u,a))):i||(u=sc(n,s),u!=null&&o.push(hc(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var E3=/\r\n?/g,C3=/\u0000|\uFFFD/g;function EE(e){return(typeof e=="string"?e:""+e).replace(E3,`
`).replace(C3,"")}function gh(e,t,n){if(t=EE(t),EE(e)!==t&&n)throw Error(G(425))}function Cf(){}var Bv=null,zv=null;function Vv(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jv=typeof setTimeout=="function"?setTimeout:void 0,k3=typeof clearTimeout=="function"?clearTimeout:void 0,CE=typeof Promise=="function"?Promise:void 0,T3=typeof queueMicrotask=="function"?queueMicrotask:typeof CE!="undefined"?function(e){return CE.resolve(null).then(e).catch(D3)}:jv;function D3(e){setTimeout(function(){throw e})}function v0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),lc(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);lc(t)}function Ps(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kE(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pl=Math.random().toString(36).slice(2),qr="__reactFiber$"+Pl,fc="__reactProps$"+Pl,Gi="__reactContainer$"+Pl,Yv="__reactEvents$"+Pl,b3="__reactListeners$"+Pl,I3="__reactHandles$"+Pl;function Do(e){var t=e[qr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gi]||n[qr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kE(e);e!==null;){if(n=e[qr])return n;e=kE(e)}return t}e=n,n=e.parentNode}return null}function ed(e){return e=e[qr]||e[Gi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ma(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Fp(e){return e[fc]||null}var Wv=[],La=-1;function oo(e){return{current:e}}function at(e){0>La||(e.current=Wv[La],Wv[La]=null,La--)}function tt(e,t){La++,Wv[La]=e.current,e.current=t}var Ks={},xn=oo(Ks),Vn=oo(!1),Vo=Ks;function hl(e,t){var n=e.type.contextTypes;if(!n)return Ks;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function jn(e){return e=e.childContextTypes,e!=null}function kf(){at(Vn),at(xn)}function TE(e,t,n){if(xn.current!==Ks)throw Error(G(168));tt(xn,t),tt(Vn,n)}function WT(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,f6(e)||"Unknown",i));return St({},n,r)}function Tf(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ks,Vo=xn.current,tt(xn,e),tt(Vn,Vn.current),!0}function DE(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=WT(e,t,Vo),r.__reactInternalMemoizedMergedChildContext=e,at(Vn),at(xn),tt(xn,e)):at(Vn),tt(Vn,n)}var Ii=null,Up=!1,y0=!1;function HT(e){Ii===null?Ii=[e]:Ii.push(e)}function A3(e){Up=!0,HT(e)}function ao(){if(!y0&&Ii!==null){y0=!0;var e=0,t=qe;try{var n=Ii;for(qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ii=null,Up=!1}catch(i){throw Ii!==null&&(Ii=Ii.slice(e+1)),vT(z1,ao),i}finally{qe=t,y0=!1}}return null}var $a=[],Fa=0,Df=null,bf=0,dr=[],hr=0,jo=null,Oi=1,Ri="";function Eo(e,t){$a[Fa++]=bf,$a[Fa++]=Df,Df=e,bf=t}function GT(e,t,n){dr[hr++]=Oi,dr[hr++]=Ri,dr[hr++]=jo,jo=e;var r=Oi;e=Ri;var i=32-Lr(r)-1;r&=~(1<<i),n+=1;var s=32-Lr(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-Lr(t)+i|n<<i|r,Ri=s+e}else Oi=1<<s|n<<i|r,Ri=e}function Q1(e){e.return!==null&&(Eo(e,1),GT(e,1,0))}function X1(e){for(;e===Df;)Df=$a[--Fa],$a[Fa]=null,bf=$a[--Fa],$a[Fa]=null;for(;e===jo;)jo=dr[--hr],dr[hr]=null,Ri=dr[--hr],dr[hr]=null,Oi=dr[--hr],dr[hr]=null}var Zn=null,Qn=null,mt=!1,Nr=null;function qT(e,t){var n=gr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bE(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Zn=e,Qn=Ps(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Zn=e,Qn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jo!==null?{id:Oi,overflow:Ri}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Zn=e,Qn=null,!0):!1;default:return!1}}function Hv(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gv(e){if(mt){var t=Qn;if(t){var n=t;if(!bE(e,t)){if(Hv(e))throw Error(G(418));t=Ps(n.nextSibling);var r=Zn;t&&bE(e,t)?qT(r,n):(e.flags=e.flags&-4097|2,mt=!1,Zn=e)}}else{if(Hv(e))throw Error(G(418));e.flags=e.flags&-4097|2,mt=!1,Zn=e}}}function IE(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zn=e}function vh(e){if(e!==Zn)return!1;if(!mt)return IE(e),mt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vv(e.type,e.memoizedProps)),t&&(t=Qn)){if(Hv(e))throw KT(),Error(G(418));for(;t;)qT(e,t),t=Ps(t.nextSibling)}if(IE(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qn=Ps(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qn=null}}else Qn=Zn?Ps(e.stateNode.nextSibling):null;return!0}function KT(){for(var e=Qn;e;)e=Ps(e.nextSibling)}function fl(){Qn=Zn=null,mt=!1}function J1(e){Nr===null?Nr=[e]:Nr.push(e)}var N3=ss.ReactCurrentBatchConfig;function Ir(e,t){if(e&&e.defaultProps){t=St({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var If=oo(null),Af=null,Ua=null,Z1=null;function ew(){Z1=Ua=Af=null}function tw(e){var t=If.current;at(If),e._currentValue=t}function qv(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qa(e,t){Af=e,Z1=Ua=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Bn=!0),e.firstContext=null)}function wr(e){var t=e._currentValue;if(Z1!==e)if(e={context:e,memoizedValue:t,next:null},Ua===null){if(Af===null)throw Error(G(308));Ua=e,Af.dependencies={lanes:0,firstContext:e}}else Ua=Ua.next=e;return t}var bo=null;function nw(e){bo===null?bo=[e]:bo.push(e)}function QT(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,nw(t)):(n.next=i.next,i.next=n),t.interleaved=n,qi(e,r)}function qi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gs=!1;function rw(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function XT(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ms(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qi(e,n)}return i=r.interleaved,i===null?(t.next=t,nw(r)):(t.next=i.next,i.next=t),r.interleaved=t,qi(e,n)}function Wh(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,V1(e,n)}}function AE(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Nf(e,t,n,r){var i=e.updateQueue;gs=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,S=a;switch(m=t,w=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(w,p,m);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,m=typeof _=="function"?_.call(w,p,m):_,m==null)break e;p=St({},p,m);break e;case 2:gs=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=w,u=p):h=h.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Wo|=o,e.lanes=o,e.memoizedState=p}}function NE(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var JT=new Q2.Component().refs;function Kv(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:St({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bp={isMounted:function(e){return(e=e._reactInternals)?oa(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Rn(),i=$s(e),s=Vi(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ms(e,s,i),t!==null&&($r(t,e,i,r),Wh(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Rn(),i=$s(e),s=Vi(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ms(e,s,i),t!==null&&($r(t,e,i,r),Wh(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rn(),r=$s(e),i=Vi(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ms(e,i,r),t!==null&&($r(t,e,r,n),Wh(t,e,r))}};function OE(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!cc(n,r)||!cc(i,s):!0}function ZT(e,t,n){var r=!1,i=Ks,s=t.contextType;return typeof s=="object"&&s!==null?s=wr(s):(i=jn(t)?Vo:xn.current,r=t.contextTypes,s=(r=r!=null)?hl(e,i):Ks),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bp,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function RE(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bp.enqueueReplaceState(t,t.state,null)}function Qv(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=JT,rw(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=wr(s):(s=jn(t)?Vo:xn.current,i.context=hl(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Kv(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bp.enqueueReplaceState(i,i.state,null),Nf(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mu(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===JT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function yh(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function PE(e){var t=e._init;return t(e._payload)}function eD(e){function t(x,v){if(e){var C=x.deletions;C===null?(x.deletions=[v],x.flags|=16):C.push(v)}}function n(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=Fs(x,v),x.index=0,x.sibling=null,x}function s(x,v,C){return x.index=C,e?(C=x.alternate,C!==null?(C=C.index,C<v?(x.flags|=2,v):C):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,v,C,T){return v===null||v.tag!==6?(v=k0(C,x.mode,T),v.return=x,v):(v=i(v,C),v.return=x,v)}function u(x,v,C,T){var I=C.type;return I===Na?h(x,v,C.props.children,T,C.key):v!==null&&(v.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ms&&PE(I)===v.type)?(T=i(v,C.props),T.ref=mu(x,v,C),T.return=x,T):(T=Xh(C.type,C.key,C.props,null,x.mode,T),T.ref=mu(x,v,C),T.return=x,T)}function c(x,v,C,T){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=T0(C,x.mode,T),v.return=x,v):(v=i(v,C.children||[]),v.return=x,v)}function h(x,v,C,T,I){return v===null||v.tag!==7?(v=Lo(C,x.mode,T,I),v.return=x,v):(v=i(v,C),v.return=x,v)}function p(x,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=k0(""+v,x.mode,C),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ah:return C=Xh(v.type,v.key,v.props,null,x.mode,C),C.ref=mu(x,null,v),C.return=x,C;case Aa:return v=T0(v,x.mode,C),v.return=x,v;case ms:var T=v._init;return p(x,T(v._payload),C)}if(ku(v)||cu(v))return v=Lo(v,x.mode,C,null),v.return=x,v;yh(x,v)}return null}function m(x,v,C,T){var I=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return I!==null?null:a(x,v,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ah:return C.key===I?u(x,v,C,T):null;case Aa:return C.key===I?c(x,v,C,T):null;case ms:return I=C._init,m(x,v,I(C._payload),T)}if(ku(C)||cu(C))return I!==null?null:h(x,v,C,T,null);yh(x,C)}return null}function w(x,v,C,T,I){if(typeof T=="string"&&T!==""||typeof T=="number")return x=x.get(C)||null,a(v,x,""+T,I);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ah:return x=x.get(T.key===null?C:T.key)||null,u(v,x,T,I);case Aa:return x=x.get(T.key===null?C:T.key)||null,c(v,x,T,I);case ms:var R=T._init;return w(x,v,C,R(T._payload),I)}if(ku(T)||cu(T))return x=x.get(C)||null,h(v,x,T,I,null);yh(v,T)}return null}function _(x,v,C,T){for(var I=null,R=null,A=v,O=v=0,Z=null;A!==null&&O<C.length;O++){A.index>O?(Z=A,A=null):Z=A.sibling;var F=m(x,A,C[O],T);if(F===null){A===null&&(A=Z);break}e&&A&&F.alternate===null&&t(x,A),v=s(F,v,O),R===null?I=F:R.sibling=F,R=F,A=Z}if(O===C.length)return n(x,A),mt&&Eo(x,O),I;if(A===null){for(;O<C.length;O++)A=p(x,C[O],T),A!==null&&(v=s(A,v,O),R===null?I=A:R.sibling=A,R=A);return mt&&Eo(x,O),I}for(A=r(x,A);O<C.length;O++)Z=w(A,x,O,C[O],T),Z!==null&&(e&&Z.alternate!==null&&A.delete(Z.key===null?O:Z.key),v=s(Z,v,O),R===null?I=Z:R.sibling=Z,R=Z);return e&&A.forEach(function(j){return t(x,j)}),mt&&Eo(x,O),I}function S(x,v,C,T){var I=cu(C);if(typeof I!="function")throw Error(G(150));if(C=I.call(C),C==null)throw Error(G(151));for(var R=I=null,A=v,O=v=0,Z=null,F=C.next();A!==null&&!F.done;O++,F=C.next()){A.index>O?(Z=A,A=null):Z=A.sibling;var j=m(x,A,F.value,T);if(j===null){A===null&&(A=Z);break}e&&A&&j.alternate===null&&t(x,A),v=s(j,v,O),R===null?I=j:R.sibling=j,R=j,A=Z}if(F.done)return n(x,A),mt&&Eo(x,O),I;if(A===null){for(;!F.done;O++,F=C.next())F=p(x,F.value,T),F!==null&&(v=s(F,v,O),R===null?I=F:R.sibling=F,R=F);return mt&&Eo(x,O),I}for(A=r(x,A);!F.done;O++,F=C.next())F=w(A,x,O,F.value,T),F!==null&&(e&&F.alternate!==null&&A.delete(F.key===null?O:F.key),v=s(F,v,O),R===null?I=F:R.sibling=F,R=F);return e&&A.forEach(function(J){return t(x,J)}),mt&&Eo(x,O),I}function k(x,v,C,T){if(typeof C=="object"&&C!==null&&C.type===Na&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ah:e:{for(var I=C.key,R=v;R!==null;){if(R.key===I){if(I=C.type,I===Na){if(R.tag===7){n(x,R.sibling),v=i(R,C.props.children),v.return=x,x=v;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ms&&PE(I)===R.type){n(x,R.sibling),v=i(R,C.props),v.ref=mu(x,R,C),v.return=x,x=v;break e}n(x,R);break}else t(x,R);R=R.sibling}C.type===Na?(v=Lo(C.props.children,x.mode,T,C.key),v.return=x,x=v):(T=Xh(C.type,C.key,C.props,null,x.mode,T),T.ref=mu(x,v,C),T.return=x,x=T)}return o(x);case Aa:e:{for(R=C.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(x,v.sibling),v=i(v,C.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else t(x,v);v=v.sibling}v=T0(C,x.mode,T),v.return=x,x=v}return o(x);case ms:return R=C._init,k(x,v,R(C._payload),T)}if(ku(C))return _(x,v,C,T);if(cu(C))return S(x,v,C,T);yh(x,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,C),v.return=x,x=v):(n(x,v),v=k0(C,x.mode,T),v.return=x,x=v),o(x)):n(x,v)}return k}var pl=eD(!0),tD=eD(!1),td={},ti=oo(td),pc=oo(td),mc=oo(td);function Io(e){if(e===td)throw Error(G(174));return e}function iw(e,t){switch(tt(mc,t),tt(pc,e),tt(ti,td),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bv(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bv(t,e)}at(ti),tt(ti,t)}function ml(){at(ti),at(pc),at(mc)}function nD(e){Io(mc.current);var t=Io(ti.current),n=bv(t,e.type);t!==n&&(tt(pc,e),tt(ti,n))}function sw(e){pc.current===e&&(at(ti),at(pc))}var wt=oo(0);function Of(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var w0=[];function ow(){for(var e=0;e<w0.length;e++)w0[e]._workInProgressVersionPrimary=null;w0.length=0}var Hh=ss.ReactCurrentDispatcher,_0=ss.ReactCurrentBatchConfig,Yo=0,_t=null,Vt=null,Kt=null,Rf=!1,zu=!1,gc=0,O3=0;function cn(){throw Error(G(321))}function aw(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ur(e[n],t[n]))return!1;return!0}function lw(e,t,n,r,i,s){if(Yo=s,_t=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hh.current=e===null||e.memoizedState===null?L3:$3,e=n(r,i),zu){s=0;do{if(zu=!1,gc=0,25<=s)throw Error(G(301));s+=1,Kt=Vt=null,t.updateQueue=null,Hh.current=F3,e=n(r,i)}while(zu)}if(Hh.current=Pf,t=Vt!==null&&Vt.next!==null,Yo=0,Kt=Vt=_t=null,Rf=!1,t)throw Error(G(300));return e}function uw(){var e=gc!==0;return gc=0,e}function Gr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?_t.memoizedState=Kt=e:Kt=Kt.next=e,Kt}function _r(){if(Vt===null){var e=_t.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var t=Kt===null?_t.memoizedState:Kt.next;if(t!==null)Kt=t,Vt=e;else{if(e===null)throw Error(G(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Kt===null?_t.memoizedState=Kt=e:Kt=Kt.next=e}return Kt}function vc(e,t){return typeof t=="function"?t(e):t}function S0(e){var t=_r(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=Vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Yo&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,_t.lanes|=h,Wo|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Ur(r,t.memoizedState)||(Bn=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,_t.lanes|=s,Wo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function x0(e){var t=_r(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ur(s,t.memoizedState)||(Bn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function rD(){}function iD(e,t){var n=_t,r=_r(),i=t(),s=!Ur(r.memoizedState,i);if(s&&(r.memoizedState=i,Bn=!0),r=r.queue,cw(aD.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,yc(9,oD.bind(null,n,r,i,t),void 0,null),Xt===null)throw Error(G(349));(Yo&30)!==0||sD(n,t,i)}return i}function sD(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function oD(e,t,n,r){t.value=n,t.getSnapshot=r,lD(t)&&uD(e)}function aD(e,t,n){return n(function(){lD(t)&&uD(e)})}function lD(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ur(e,n)}catch{return!0}}function uD(e){var t=qi(e,1);t!==null&&$r(t,e,1,-1)}function ME(e){var t=Gr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vc,lastRenderedState:e},t.queue=e,e=e.dispatch=M3.bind(null,_t,e),[t.memoizedState,e]}function yc(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cD(){return _r().memoizedState}function Gh(e,t,n,r){var i=Gr();_t.flags|=e,i.memoizedState=yc(1|t,n,void 0,r===void 0?null:r)}function zp(e,t,n,r){var i=_r();r=r===void 0?null:r;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,r!==null&&aw(r,o.deps)){i.memoizedState=yc(t,n,s,r);return}}_t.flags|=e,i.memoizedState=yc(1|t,n,s,r)}function LE(e,t){return Gh(8390656,8,e,t)}function cw(e,t){return zp(2048,8,e,t)}function dD(e,t){return zp(4,2,e,t)}function hD(e,t){return zp(4,4,e,t)}function fD(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pD(e,t,n){return n=n!=null?n.concat([e]):null,zp(4,4,fD.bind(null,t,e),n)}function dw(){}function mD(e,t){var n=_r();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aw(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gD(e,t){var n=_r();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aw(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vD(e,t,n){return(Yo&21)===0?(e.baseState&&(e.baseState=!1,Bn=!0),e.memoizedState=n):(Ur(n,t)||(n=_T(),_t.lanes|=n,Wo|=n,e.baseState=!0),t)}function R3(e,t){var n=qe;qe=n!==0&&4>n?n:4,e(!0);var r=_0.transition;_0.transition={};try{e(!1),t()}finally{qe=n,_0.transition=r}}function yD(){return _r().memoizedState}function P3(e,t,n){var r=$s(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wD(e))_D(t,n);else if(n=QT(e,t,n,r),n!==null){var i=Rn();$r(n,e,r,i),SD(n,t,r)}}function M3(e,t,n){var r=$s(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wD(e))_D(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ur(a,o)){var u=t.interleaved;u===null?(i.next=i,nw(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=QT(e,t,i,r),n!==null&&(i=Rn(),$r(n,e,r,i),SD(n,t,r))}}function wD(e){var t=e.alternate;return e===_t||t!==null&&t===_t}function _D(e,t){zu=Rf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function SD(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,V1(e,n)}}var Pf={readContext:wr,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},L3={readContext:wr,useCallback:function(e,t){return Gr().memoizedState=[e,t===void 0?null:t],e},useContext:wr,useEffect:LE,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gh(4194308,4,fD.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gh(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gh(4,2,e,t)},useMemo:function(e,t){var n=Gr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=P3.bind(null,_t,e),[r.memoizedState,e]},useRef:function(e){var t=Gr();return e={current:e},t.memoizedState=e},useState:ME,useDebugValue:dw,useDeferredValue:function(e){return Gr().memoizedState=e},useTransition:function(){var e=ME(!1),t=e[0];return e=R3.bind(null,e[1]),Gr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_t,i=Gr();if(mt){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),Xt===null)throw Error(G(349));(Yo&30)!==0||sD(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,LE(aD.bind(null,r,s,e),[e]),r.flags|=2048,yc(9,oD.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Gr(),t=Xt.identifierPrefix;if(mt){var n=Ri,r=Oi;n=(r&~(1<<32-Lr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=O3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$3={readContext:wr,useCallback:mD,useContext:wr,useEffect:cw,useImperativeHandle:pD,useInsertionEffect:dD,useLayoutEffect:hD,useMemo:gD,useReducer:S0,useRef:cD,useState:function(){return S0(vc)},useDebugValue:dw,useDeferredValue:function(e){var t=_r();return vD(t,Vt.memoizedState,e)},useTransition:function(){var e=S0(vc)[0],t=_r().memoizedState;return[e,t]},useMutableSource:rD,useSyncExternalStore:iD,useId:yD,unstable_isNewReconciler:!1},F3={readContext:wr,useCallback:mD,useContext:wr,useEffect:cw,useImperativeHandle:pD,useInsertionEffect:dD,useLayoutEffect:hD,useMemo:gD,useReducer:x0,useRef:cD,useState:function(){return x0(vc)},useDebugValue:dw,useDeferredValue:function(e){var t=_r();return Vt===null?t.memoizedState=e:vD(t,Vt.memoizedState,e)},useTransition:function(){var e=x0(vc)[0],t=_r().memoizedState;return[e,t]},useMutableSource:rD,useSyncExternalStore:iD,useId:yD,unstable_isNewReconciler:!1};function gl(e,t){try{var n="",r=t;do n+=h6(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function E0(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Xv(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var U3=typeof WeakMap=="function"?WeakMap:Map;function xD(e,t,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lf||(Lf=!0,ay=r),Xv(e,t)},n}function ED(e,t,n){n=Vi(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xv(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xv(e,t),typeof r!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function $E(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new U3;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Z3.bind(null,e,t,n),t.then(e,e))}function FE(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function UE(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vi(-1,1),t.tag=2,Ms(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var B3=ss.ReactCurrentOwner,Bn=!1;function An(e,t,n,r){t.child=e===null?tD(t,null,n,r):pl(t,e.child,n,r)}function BE(e,t,n,r,i){n=n.render;var s=t.ref;return Qa(t,i),r=lw(e,t,n,r,s,i),n=uw(),e!==null&&!Bn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ki(e,t,i)):(mt&&n&&Q1(t),t.flags|=1,An(e,t,r,i),t.child)}function zE(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ww(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,CD(e,t,s,r,i)):(e=Xh(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:cc,n(o,r)&&e.ref===t.ref)return Ki(e,t,i)}return t.flags|=1,e=Fs(s,r),e.ref=t.ref,e.return=t,t.child=e}function CD(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(cc(s,r)&&e.ref===t.ref)if(Bn=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Bn=!0);else return t.lanes=e.lanes,Ki(e,t,i)}return Jv(e,t,n,r,i)}function kD(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(za,qn),qn|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,tt(za,qn),qn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,tt(za,qn),qn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,tt(za,qn),qn|=r;return An(e,t,i,n),t.child}function TD(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jv(e,t,n,r,i){var s=jn(n)?Vo:xn.current;return s=hl(t,s),Qa(t,i),n=lw(e,t,n,r,s,i),r=uw(),e!==null&&!Bn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ki(e,t,i)):(mt&&r&&Q1(t),t.flags|=1,An(e,t,n,i),t.child)}function VE(e,t,n,r,i){if(jn(n)){var s=!0;Tf(t)}else s=!1;if(Qa(t,i),t.stateNode===null)qh(e,t),ZT(t,n,r),Qv(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=wr(c):(c=jn(n)?Vo:xn.current,c=hl(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&RE(t,o,r,c),gs=!1;var m=t.memoizedState;o.state=m,Nf(t,r,o,i),u=t.memoizedState,a!==r||m!==u||Vn.current||gs?(typeof h=="function"&&(Kv(t,n,h,r),u=t.memoizedState),(a=gs||OE(t,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,XT(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ir(t.type,a),o.props=c,p=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=wr(u):(u=jn(n)?Vo:xn.current,u=hl(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&RE(t,o,r,u),gs=!1,m=t.memoizedState,o.state=m,Nf(t,r,o,i);var _=t.memoizedState;a!==p||m!==_||Vn.current||gs?(typeof w=="function"&&(Kv(t,n,w,r),_=t.memoizedState),(c=gs||OE(t,n,c,r,m,_,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Zv(e,t,n,r,s,i)}function Zv(e,t,n,r,i,s){TD(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&DE(t,n,!1),Ki(e,t,s);r=t.stateNode,B3.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pl(t,e.child,null,s),t.child=pl(t,null,a,s)):An(e,t,a,s),t.memoizedState=r.state,i&&DE(t,n,!0),t.child}function DD(e){var t=e.stateNode;t.pendingContext?TE(e,t.pendingContext,t.pendingContext!==t.context):t.context&&TE(e,t.context,!1),iw(e,t.containerInfo)}function jE(e,t,n,r,i){return fl(),J1(i),t.flags|=256,An(e,t,n,r),t.child}var ey={dehydrated:null,treeContext:null,retryLane:0};function ty(e){return{baseLanes:e,cachePool:null,transitions:null}}function bD(e,t,n){var r=t.pendingProps,i=wt.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),tt(wt,i&1),e===null)return Gv(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yp(o,r,0,null),e=Lo(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ty(n),t.memoizedState=ey,e):hw(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return z3(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Fs(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fs(a,s):(s=Lo(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ty(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ey,r}return s=e.child,e=s.sibling,r=Fs(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hw(e,t){return t=Yp({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wh(e,t,n,r){return r!==null&&J1(r),pl(t,e.child,null,n),e=hw(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function z3(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=E0(Error(G(422))),wh(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Yp({mode:"visible",children:r.children},i,0,null),s=Lo(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&pl(t,e.child,null,o),t.child.memoizedState=ty(o),t.memoizedState=ey,s);if((t.mode&1)===0)return wh(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(G(419)),r=E0(s,r,void 0),wh(e,t,o,r)}if(a=(o&e.childLanes)!==0,Bn||a){if(r=Xt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qi(e,i),$r(r,e,i,-1))}return yw(),r=E0(Error(G(421))),wh(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=e5.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Qn=Ps(i.nextSibling),Zn=t,mt=!0,Nr=null,e!==null&&(dr[hr++]=Oi,dr[hr++]=Ri,dr[hr++]=jo,Oi=e.id,Ri=e.overflow,jo=t),t=hw(t,r.children),t.flags|=4096,t)}function YE(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qv(e.return,t,n)}function C0(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ID(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(An(e,t,r.children,n),r=wt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&YE(e,n,t);else if(e.tag===19)YE(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(tt(wt,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Of(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),C0(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Of(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}C0(t,!0,n,null,s);break;case"together":C0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qh(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ki(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wo|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=Fs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function V3(e,t,n){switch(t.tag){case 3:DD(t),fl();break;case 5:nD(t);break;case 1:jn(t.type)&&Tf(t);break;case 4:iw(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;tt(If,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(tt(wt,wt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?bD(e,t,n):(tt(wt,wt.current&1),e=Ki(e,t,n),e!==null?e.sibling:null);tt(wt,wt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ID(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),tt(wt,wt.current),r)break;return null;case 22:case 23:return t.lanes=0,kD(e,t,n)}return Ki(e,t,n)}var AD,ny,ND,OD;AD=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ny=function(){};ND=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Io(ti.current);var s=null;switch(n){case"input":i=Cv(e,i),r=Cv(e,r),s=[];break;case"select":i=St({},i,{value:void 0}),r=St({},r,{value:void 0}),s=[];break;case"textarea":i=Dv(e,i),r=Dv(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Cf)}Iv(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(rc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(rc.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ot("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};OD=function(e,t,n,r){n!==r&&(t.flags|=4)};function gu(e,t){if(!mt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function j3(e,t,n){var r=t.pendingProps;switch(X1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(t),null;case 1:return jn(t.type)&&kf(),dn(t),null;case 3:return r=t.stateNode,ml(),at(Vn),at(xn),ow(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vh(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nr!==null&&(cy(Nr),Nr=null))),ny(e,t),dn(t),null;case 5:sw(t);var i=Io(mc.current);if(n=t.type,e!==null&&t.stateNode!=null)ND(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return dn(t),null}if(e=Io(ti.current),vh(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[qr]=t,r[fc]=s,e=(t.mode&1)!==0,n){case"dialog":ot("cancel",r),ot("close",r);break;case"iframe":case"object":case"embed":ot("load",r);break;case"video":case"audio":for(i=0;i<Du.length;i++)ot(Du[i],r);break;case"source":ot("error",r);break;case"img":case"image":case"link":ot("error",r),ot("load",r);break;case"details":ot("toggle",r);break;case"input":Zx(r,s),ot("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ot("invalid",r);break;case"textarea":tE(r,s),ot("invalid",r)}Iv(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gh(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gh(r.textContent,a,e),i=["children",""+a]):rc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",r)}switch(n){case"input":lh(r),eE(r,s,!0);break;case"textarea":lh(r),nE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cf)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sT(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qr]=t,e[fc]=r,AD(e,t,!1,!1),t.stateNode=e;e:{switch(o=Av(n,r),n){case"dialog":ot("cancel",e),ot("close",e),i=r;break;case"iframe":case"object":case"embed":ot("load",e),i=r;break;case"video":case"audio":for(i=0;i<Du.length;i++)ot(Du[i],e);i=r;break;case"source":ot("error",e),i=r;break;case"img":case"image":case"link":ot("error",e),ot("load",e),i=r;break;case"details":ot("toggle",e),i=r;break;case"input":Zx(e,r),i=Cv(e,r),ot("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=St({},r,{value:void 0}),ot("invalid",e);break;case"textarea":tE(e,r),i=Dv(e,r),ot("invalid",e);break;default:i=r}Iv(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?lT(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&oT(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ic(e,u):typeof u=="number"&&ic(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(rc.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ot("scroll",e):u!=null&&L1(e,s,u,o))}switch(n){case"input":lh(e),eE(e,r,!1);break;case"textarea":lh(e),nE(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qs(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ha(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ha(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Cf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dn(t),null;case 6:if(e&&t.stateNode!=null)OD(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Io(mc.current),Io(ti.current),vh(t)){if(r=t.stateNode,n=t.memoizedProps,r[qr]=t,(s=r.nodeValue!==n)&&(e=Zn,e!==null))switch(e.tag){case 3:gh(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gh(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qr]=t,t.stateNode=r}return dn(t),null;case 13:if(at(wt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(mt&&Qn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)KT(),fl(),t.flags|=98560,s=!1;else if(s=vh(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(G(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[qr]=t}else fl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;dn(t),s=!1}else Nr!==null&&(cy(Nr),Nr=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(wt.current&1)!==0?Yt===0&&(Yt=3):yw())),t.updateQueue!==null&&(t.flags|=4),dn(t),null);case 4:return ml(),ny(e,t),e===null&&dc(t.stateNode.containerInfo),dn(t),null;case 10:return tw(t.type._context),dn(t),null;case 17:return jn(t.type)&&kf(),dn(t),null;case 19:if(at(wt),s=t.memoizedState,s===null)return dn(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)gu(s,!1);else{if(Yt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Of(e),o!==null){for(t.flags|=128,gu(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return tt(wt,wt.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ot()>vl&&(t.flags|=128,r=!0,gu(s,!1),t.lanes=4194304)}else{if(!r)if(e=Of(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return dn(t),null}else 2*Ot()-s.renderingStartTime>vl&&n!==1073741824&&(t.flags|=128,r=!0,gu(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ot(),t.sibling=null,n=wt.current,tt(wt,r?n&1|2:n&1),t):(dn(t),null);case 22:case 23:return vw(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(qn&1073741824)!==0&&(dn(t),t.subtreeFlags&6&&(t.flags|=8192)):dn(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function Y3(e,t){switch(X1(t),t.tag){case 1:return jn(t.type)&&kf(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ml(),at(Vn),at(xn),ow(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return sw(t),null;case 13:if(at(wt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));fl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return at(wt),null;case 4:return ml(),null;case 10:return tw(t.type._context),null;case 22:case 23:return vw(),null;case 24:return null;default:return null}}var _h=!1,mn=!1,W3=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Ba(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ct(e,t,r)}else n.current=null}function ry(e,t,n){try{n()}catch(r){Ct(e,t,r)}}var WE=!1;function H3(e,t){if(Bv=Sf,e=LT(),K1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zv={focusedElem:e,selectionRange:n},Sf=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,k=_.memoizedState,x=t.stateNode,v=x.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ir(t.type,S),k);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(T){Ct(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return _=WE,WE=!1,_}function Vu(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ry(t,n,s)}i=i.next}while(i!==r)}}function Vp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function iy(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function RD(e){var t=e.alternate;t!==null&&(e.alternate=null,RD(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qr],delete t[fc],delete t[Yv],delete t[b3],delete t[I3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function PD(e){return e.tag===5||e.tag===3||e.tag===4}function HE(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||PD(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sy(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cf));else if(r!==4&&(e=e.child,e!==null))for(sy(e,t,n),e=e.sibling;e!==null;)sy(e,t,n),e=e.sibling}function oy(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oy(e,t,n),e=e.sibling;e!==null;)oy(e,t,n),e=e.sibling}var nn=null,Ar=!1;function fs(e,t,n){for(n=n.child;n!==null;)MD(e,t,n),n=n.sibling}function MD(e,t,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Pp,n)}catch{}switch(n.tag){case 5:mn||Ba(n,t);case 6:var r=nn,i=Ar;nn=null,fs(e,t,n),nn=r,Ar=i,nn!==null&&(Ar?(e=nn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nn.removeChild(n.stateNode));break;case 18:nn!==null&&(Ar?(e=nn,n=n.stateNode,e.nodeType===8?v0(e.parentNode,n):e.nodeType===1&&v0(e,n),lc(e)):v0(nn,n.stateNode));break;case 4:r=nn,i=Ar,nn=n.stateNode.containerInfo,Ar=!0,fs(e,t,n),nn=r,Ar=i;break;case 0:case 11:case 14:case 15:if(!mn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&ry(n,t,o),i=i.next}while(i!==r)}fs(e,t,n);break;case 1:if(!mn&&(Ba(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ct(n,t,a)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:n.mode&1?(mn=(r=mn)||n.memoizedState!==null,fs(e,t,n),mn=r):fs(e,t,n);break;default:fs(e,t,n)}}function GE(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new W3),t.forEach(function(r){var i=t5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function br(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:nn=a.stateNode,Ar=!1;break e;case 3:nn=a.stateNode.containerInfo,Ar=!0;break e;case 4:nn=a.stateNode.containerInfo,Ar=!0;break e}a=a.return}if(nn===null)throw Error(G(160));MD(s,o,i),nn=null,Ar=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ct(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)LD(t,e),t=t.sibling}function LD(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(br(t,e),Hr(e),r&4){try{Vu(3,e,e.return),Vp(3,e)}catch(S){Ct(e,e.return,S)}try{Vu(5,e,e.return)}catch(S){Ct(e,e.return,S)}}break;case 1:br(t,e),Hr(e),r&512&&n!==null&&Ba(n,n.return);break;case 5:if(br(t,e),Hr(e),r&512&&n!==null&&Ba(n,n.return),e.flags&32){var i=e.stateNode;try{ic(i,"")}catch(S){Ct(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rT(i,s),Av(a,o);var c=Av(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?lT(i,p):h==="dangerouslySetInnerHTML"?oT(i,p):h==="children"?ic(i,p):L1(i,h,p,c)}switch(a){case"input":kv(i,s);break;case"textarea":iT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Ha(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ha(i,!!s.multiple,s.defaultValue,!0):Ha(i,!!s.multiple,s.multiple?[]:"",!1))}i[fc]=s}catch(S){Ct(e,e.return,S)}}break;case 6:if(br(t,e),Hr(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){Ct(e,e.return,S)}}break;case 3:if(br(t,e),Hr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lc(t.containerInfo)}catch(S){Ct(e,e.return,S)}break;case 4:br(t,e),Hr(e);break;case 13:br(t,e),Hr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mw=Ot())),r&4&&GE(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(mn=(c=mn)||h,br(t,e),mn=c):br(t,e),Hr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&(e.mode&1)!==0)for(ae=e,h=e.child;h!==null;){for(p=ae=h;ae!==null;){switch(m=ae,w=m.child,m.tag){case 0:case 11:case 14:case 15:Vu(4,m,m.return);break;case 1:Ba(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(S){Ct(r,n,S)}}break;case 5:Ba(m,m.return);break;case 22:if(m.memoizedState!==null){KE(p);continue}}w!==null?(w.return=m,ae=w):KE(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=aT("display",o))}catch(S){Ct(e,e.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){Ct(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:br(t,e),Hr(e),r&4&&GE(e);break;case 21:break;default:br(t,e),Hr(e)}}function Hr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(PD(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ic(i,""),r.flags&=-33);var s=HE(e);oy(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=HE(e);sy(e,a,o);break;default:throw Error(G(161))}}catch(u){Ct(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function G3(e,t,n){ae=e,$D(e)}function $D(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_h;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||mn;a=_h;var c=mn;if(_h=o,(mn=u)&&!c)for(ae=i;ae!==null;)o=ae,u=o.child,o.tag===22&&o.memoizedState!==null?QE(i):u!==null?(u.return=o,ae=u):QE(i);for(;s!==null;)ae=s,$D(s),s=s.sibling;ae=i,_h=a,mn=c}qE(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,ae=s):qE(e)}}function qE(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:mn||Vp(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!mn)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ir(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&NE(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}NE(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&lc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}mn||t.flags&512&&iy(t)}catch(m){Ct(t,t.return,m)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function KE(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function QE(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vp(4,t)}catch(u){Ct(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ct(t,i,u)}}var s=t.return;try{iy(t)}catch(u){Ct(t,s,u)}break;case 5:var o=t.return;try{iy(t)}catch(u){Ct(t,o,u)}}}catch(u){Ct(t,t.return,u)}if(t===e){ae=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ae=a;break}ae=t.return}}var q3=Math.ceil,Mf=ss.ReactCurrentDispatcher,fw=ss.ReactCurrentOwner,yr=ss.ReactCurrentBatchConfig,ze=0,Xt=null,Lt=null,on=0,qn=0,za=oo(0),Yt=0,wc=null,Wo=0,jp=0,pw=0,ju=null,Fn=null,mw=0,vl=1/0,Di=null,Lf=!1,ay=null,Ls=null,Sh=!1,ks=null,$f=0,Yu=0,ly=null,Kh=-1,Qh=0;function Rn(){return(ze&6)!==0?Ot():Kh!==-1?Kh:Kh=Ot()}function $s(e){return(e.mode&1)===0?1:(ze&2)!==0&&on!==0?on&-on:N3.transition!==null?(Qh===0&&(Qh=_T()),Qh):(e=qe,e!==0||(e=window.event,e=e===void 0?16:DT(e.type)),e)}function $r(e,t,n,r){if(50<Yu)throw Yu=0,ly=null,Error(G(185));Jc(e,n,r),((ze&2)===0||e!==Xt)&&(e===Xt&&((ze&2)===0&&(jp|=n),Yt===4&&ys(e,on)),Yn(e,r),n===1&&ze===0&&(t.mode&1)===0&&(vl=Ot()+500,Up&&ao()))}function Yn(e,t){var n=e.callbackNode;N6(e,t);var r=_f(e,e===Xt?on:0);if(r===0)n!==null&&sE(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sE(n),t===1)e.tag===0?A3(XE.bind(null,e)):HT(XE.bind(null,e)),T3(function(){(ze&6)===0&&ao()}),n=null;else{switch(ST(r)){case 1:n=z1;break;case 4:n=yT;break;case 16:n=wf;break;case 536870912:n=wT;break;default:n=wf}n=WD(n,FD.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function FD(e,t){if(Kh=-1,Qh=0,(ze&6)!==0)throw Error(G(327));var n=e.callbackNode;if(Xa()&&e.callbackNode!==n)return null;var r=_f(e,e===Xt?on:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ff(e,r);else{t=r;var i=ze;ze|=2;var s=BD();(Xt!==e||on!==t)&&(Di=null,vl=Ot()+500,Mo(e,t));do try{X3();break}catch(a){UD(e,a)}while(1);ew(),Mf.current=s,ze=i,Lt!==null?t=0:(Xt=null,on=0,t=Yt)}if(t!==0){if(t===2&&(i=Mv(e),i!==0&&(r=i,t=uy(e,i))),t===1)throw n=wc,Mo(e,0),ys(e,r),Yn(e,Ot()),n;if(t===6)ys(e,r);else{if(i=e.current.alternate,(r&30)===0&&!K3(i)&&(t=Ff(e,r),t===2&&(s=Mv(e),s!==0&&(r=s,t=uy(e,s))),t===1))throw n=wc,Mo(e,0),ys(e,r),Yn(e,Ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Co(e,Fn,Di);break;case 3:if(ys(e,r),(r&130023424)===r&&(t=mw+500-Ot(),10<t)){if(_f(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Rn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jv(Co.bind(null,e,Fn,Di),t);break}Co(e,Fn,Di);break;case 4:if(ys(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Lr(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q3(r/1960))-r,10<r){e.timeoutHandle=jv(Co.bind(null,e,Fn,Di),r);break}Co(e,Fn,Di);break;case 5:Co(e,Fn,Di);break;default:throw Error(G(329))}}}return Yn(e,Ot()),e.callbackNode===n?FD.bind(null,e):null}function uy(e,t){var n=ju;return e.current.memoizedState.isDehydrated&&(Mo(e,t).flags|=256),e=Ff(e,t),e!==2&&(t=Fn,Fn=n,t!==null&&cy(t)),e}function cy(e){Fn===null?Fn=e:Fn.push.apply(Fn,e)}function K3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ur(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ys(e,t){for(t&=~pw,t&=~jp,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lr(t),r=1<<n;e[n]=-1,t&=~r}}function XE(e){if((ze&6)!==0)throw Error(G(327));Xa();var t=_f(e,0);if((t&1)===0)return Yn(e,Ot()),null;var n=Ff(e,t);if(e.tag!==0&&n===2){var r=Mv(e);r!==0&&(t=r,n=uy(e,r))}if(n===1)throw n=wc,Mo(e,0),ys(e,t),Yn(e,Ot()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Co(e,Fn,Di),Yn(e,Ot()),null}function gw(e,t){var n=ze;ze|=1;try{return e(t)}finally{ze=n,ze===0&&(vl=Ot()+500,Up&&ao())}}function Ho(e){ks!==null&&ks.tag===0&&(ze&6)===0&&Xa();var t=ze;ze|=1;var n=yr.transition,r=qe;try{if(yr.transition=null,qe=1,e)return e()}finally{qe=r,yr.transition=n,ze=t,(ze&6)===0&&ao()}}function vw(){qn=za.current,at(za)}function Mo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k3(n)),Lt!==null)for(n=Lt.return;n!==null;){var r=n;switch(X1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kf();break;case 3:ml(),at(Vn),at(xn),ow();break;case 5:sw(r);break;case 4:ml();break;case 13:at(wt);break;case 19:at(wt);break;case 10:tw(r.type._context);break;case 22:case 23:vw()}n=n.return}if(Xt=e,Lt=e=Fs(e.current,null),on=qn=t,Yt=0,wc=null,pw=jp=Wo=0,Fn=ju=null,bo!==null){for(t=0;t<bo.length;t++)if(n=bo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}bo=null}return e}function UD(e,t){do{var n=Lt;try{if(ew(),Hh.current=Pf,Rf){for(var r=_t.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rf=!1}if(Yo=0,Kt=Vt=_t=null,zu=!1,gc=0,fw.current=null,n===null||n.return===null){Yt=1,wc=t,Lt=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=on,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if((h.mode&1)===0&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=FE(o);if(w!==null){w.flags&=-257,UE(w,o,a,s,t),w.mode&1&&$E(s,c,t),t=w,u=c;var _=t.updateQueue;if(_===null){var S=new Set;S.add(u),t.updateQueue=S}else _.add(u);break e}else{if((t&1)===0){$E(s,c,t),yw();break e}u=Error(G(426))}}else if(mt&&a.mode&1){var k=FE(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),UE(k,o,a,s,t),J1(gl(u,a));break e}}s=u=gl(u,a),Yt!==4&&(Yt=2),ju===null?ju=[s]:ju.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=xD(s,u,t);AE(s,x);break e;case 1:a=u;var v=s.type,C=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ls===null||!Ls.has(C)))){s.flags|=65536,t&=-t,s.lanes|=t;var T=ED(s,a,t);AE(s,T);break e}}s=s.return}while(s!==null)}VD(n)}catch(I){t=I,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(1)}function BD(){var e=Mf.current;return Mf.current=Pf,e===null?Pf:e}function yw(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Xt===null||(Wo&268435455)===0&&(jp&268435455)===0||ys(Xt,on)}function Ff(e,t){var n=ze;ze|=2;var r=BD();(Xt!==e||on!==t)&&(Di=null,Mo(e,t));do try{Q3();break}catch(i){UD(e,i)}while(1);if(ew(),ze=n,Mf.current=r,Lt!==null)throw Error(G(261));return Xt=null,on=0,Yt}function Q3(){for(;Lt!==null;)zD(Lt)}function X3(){for(;Lt!==null&&!x6();)zD(Lt)}function zD(e){var t=YD(e.alternate,e,qn);e.memoizedProps=e.pendingProps,t===null?VD(e):Lt=t,fw.current=null}function VD(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=j3(n,t,qn),n!==null){Lt=n;return}}else{if(n=Y3(n,t),n!==null){n.flags&=32767,Lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yt=6,Lt=null;return}}if(t=t.sibling,t!==null){Lt=t;return}Lt=t=e}while(t!==null);Yt===0&&(Yt=5)}function Co(e,t,n){var r=qe,i=yr.transition;try{yr.transition=null,qe=1,J3(e,t,n,r)}finally{yr.transition=i,qe=r}return null}function J3(e,t,n,r){do Xa();while(ks!==null);if((ze&6)!==0)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(O6(e,s),e===Xt&&(Lt=Xt=null,on=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Sh||(Sh=!0,WD(wf,function(){return Xa(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=yr.transition,yr.transition=null;var o=qe;qe=1;var a=ze;ze|=4,fw.current=null,H3(e,n),LD(n,e),y3(zv),Sf=!!Bv,zv=Bv=null,e.current=n,G3(n),E6(),ze=a,qe=o,yr.transition=s}else e.current=n;if(Sh&&(Sh=!1,ks=e,$f=i),s=e.pendingLanes,s===0&&(Ls=null),T6(n.stateNode),Yn(e,Ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lf)throw Lf=!1,e=ay,ay=null,e;return($f&1)!==0&&e.tag!==0&&Xa(),s=e.pendingLanes,(s&1)!==0?e===ly?Yu++:(Yu=0,ly=e):Yu=0,ao(),null}function Xa(){if(ks!==null){var e=ST($f),t=yr.transition,n=qe;try{if(yr.transition=null,qe=16>e?16:e,ks===null)var r=!1;else{if(e=ks,ks=null,$f=0,(ze&6)!==0)throw Error(G(331));var i=ze;for(ze|=4,ae=e.current;ae!==null;){var s=ae,o=s.child;if((ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(ae=c;ae!==null;){var h=ae;switch(h.tag){case 0:case 11:case 15:Vu(8,h,s)}var p=h.child;if(p!==null)p.return=h,ae=p;else for(;ae!==null;){h=ae;var m=h.sibling,w=h.return;if(RD(h),h===c){ae=null;break}if(m!==null){m.return=w,ae=m;break}ae=w}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Vu(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,ae=x;break e}ae=s.return}}var v=e.current;for(ae=v;ae!==null;){o=ae;var C=o.child;if((o.subtreeFlags&2064)!==0&&C!==null)C.return=o,ae=C;else e:for(o=v;ae!==null;){if(a=ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Vp(9,a)}}catch(I){Ct(a,a.return,I)}if(a===o){ae=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,ae=T;break e}ae=a.return}}if(ze=i,ao(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Pp,e)}catch{}r=!0}return r}finally{qe=n,yr.transition=t}}return!1}function JE(e,t,n){t=gl(n,t),t=xD(e,t,1),e=Ms(e,t,1),t=Rn(),e!==null&&(Jc(e,1,t),Yn(e,t))}function Ct(e,t,n){if(e.tag===3)JE(e,e,n);else for(;t!==null;){if(t.tag===3){JE(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ls===null||!Ls.has(r))){e=gl(n,e),e=ED(t,e,1),t=Ms(t,e,1),e=Rn(),t!==null&&(Jc(t,1,e),Yn(t,e));break}}t=t.return}}function Z3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Rn(),e.pingedLanes|=e.suspendedLanes&n,Xt===e&&(on&n)===n&&(Yt===4||Yt===3&&(on&130023424)===on&&500>Ot()-mw?Mo(e,0):pw|=n),Yn(e,t)}function jD(e,t){t===0&&((e.mode&1)===0?t=1:(t=dh,dh<<=1,(dh&130023424)===0&&(dh=4194304)));var n=Rn();e=qi(e,t),e!==null&&(Jc(e,t,n),Yn(e,n))}function e5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jD(e,n)}function t5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),jD(e,n)}var YD;YD=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Vn.current)Bn=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Bn=!1,V3(e,t,n);Bn=(e.flags&131072)!==0}else Bn=!1,mt&&(t.flags&1048576)!==0&&GT(t,bf,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qh(e,t),e=t.pendingProps;var i=hl(t,xn.current);Qa(t,n),i=lw(null,t,r,e,i,n);var s=uw();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jn(r)?(s=!0,Tf(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rw(t),i.updater=Bp,t.stateNode=i,i._reactInternals=t,Qv(t,r,e,n),t=Zv(null,t,r,!0,s,n)):(t.tag=0,mt&&s&&Q1(t),An(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qh(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=r5(r),e=Ir(r,e),i){case 0:t=Jv(null,t,r,e,n);break e;case 1:t=VE(null,t,r,e,n);break e;case 11:t=BE(null,t,r,e,n);break e;case 14:t=zE(null,t,r,Ir(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),Jv(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),VE(e,t,r,i,n);case 3:e:{if(DD(t),e===null)throw Error(G(387));r=t.pendingProps,s=t.memoizedState,i=s.element,XT(e,t),Nf(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=gl(Error(G(423)),t),t=jE(e,t,r,n,i);break e}else if(r!==i){i=gl(Error(G(424)),t),t=jE(e,t,r,n,i);break e}else for(Qn=Ps(t.stateNode.containerInfo.firstChild),Zn=t,mt=!0,Nr=null,n=tD(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fl(),r===i){t=Ki(e,t,n);break e}An(e,t,r,n)}t=t.child}return t;case 5:return nD(t),e===null&&Gv(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Vv(r,i)?o=null:s!==null&&Vv(r,s)&&(t.flags|=32),TD(e,t),An(e,t,o,n),t.child;case 6:return e===null&&Gv(t),null;case 13:return bD(e,t,n);case 4:return iw(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pl(t,null,r,n):An(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),BE(e,t,r,i,n);case 7:return An(e,t,t.pendingProps,n),t.child;case 8:return An(e,t,t.pendingProps.children,n),t.child;case 12:return An(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,tt(If,r._currentValue),r._currentValue=o,s!==null)if(Ur(s.value,o)){if(s.children===i.children&&!Vn.current){t=Ki(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Vi(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qv(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(G(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qv(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}An(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qa(t,n),i=wr(i),r=r(i),t.flags|=1,An(e,t,r,n),t.child;case 14:return r=t.type,i=Ir(r,t.pendingProps),i=Ir(r.type,i),zE(e,t,r,i,n);case 15:return CD(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),qh(e,t),t.tag=1,jn(r)?(e=!0,Tf(t)):e=!1,Qa(t,n),ZT(t,r,i),Qv(t,r,i,n),Zv(null,t,r,!0,e,n);case 19:return ID(e,t,n);case 22:return kD(e,t,n)}throw Error(G(156,t.tag))};function WD(e,t){return vT(e,t)}function n5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gr(e,t,n,r){return new n5(e,t,n,r)}function ww(e){return e=e.prototype,!(!e||!e.isReactComponent)}function r5(e){if(typeof e=="function")return ww(e)?1:0;if(e!=null){if(e=e.$$typeof,e===F1)return 11;if(e===U1)return 14}return 2}function Fs(e,t){var n=e.alternate;return n===null?(n=gr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xh(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ww(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Na:return Lo(n.children,i,s,t);case $1:o=8,i|=8;break;case _v:return e=gr(12,n,t,i|2),e.elementType=_v,e.lanes=s,e;case Sv:return e=gr(13,n,t,i),e.elementType=Sv,e.lanes=s,e;case xv:return e=gr(19,n,t,i),e.elementType=xv,e.lanes=s,e;case eT:return Yp(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J2:o=10;break e;case Z2:o=9;break e;case F1:o=11;break e;case U1:o=14;break e;case ms:o=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=gr(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Lo(e,t,n,r){return e=gr(7,e,r,t),e.lanes=n,e}function Yp(e,t,n,r){return e=gr(22,e,r,t),e.elementType=eT,e.lanes=n,e.stateNode={isHidden:!1},e}function k0(e,t,n){return e=gr(6,e,null,t),e.lanes=n,e}function T0(e,t,n){return t=gr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function i5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=o0(0),this.expirationTimes=o0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=o0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _w(e,t,n,r,i,s,o,a,u){return e=new i5(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=gr(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rw(s),e}function s5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Aa,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function HD(e){if(!e)return Ks;e=e._reactInternals;e:{if(oa(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(jn(n))return WT(e,n,t)}return t}function GD(e,t,n,r,i,s,o,a,u){return e=_w(n,r,!0,e,i,s,o,a,u),e.context=HD(null),n=e.current,r=Rn(),i=$s(n),s=Vi(r,i),s.callback=t!=null?t:null,Ms(n,s,i),e.current.lanes=i,Jc(e,i,r),Yn(e,r),e}function Wp(e,t,n,r){var i=t.current,s=Rn(),o=$s(i);return n=HD(n),t.context===null?t.context=n:t.pendingContext=n,t=Vi(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ms(i,t,o),e!==null&&($r(e,i,o,s),Wh(e,i,o)),o}function Uf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ZE(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sw(e,t){ZE(e,t),(e=e.alternate)&&ZE(e,t)}function o5(){return null}var qD=typeof reportError=="function"?reportError:function(e){console.error(e)};function xw(e){this._internalRoot=e}Hp.prototype.render=xw.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Wp(e,t,null,null)};Hp.prototype.unmount=xw.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ho(function(){Wp(null,e,null,null)}),t[Gi]=null}};function Hp(e){this._internalRoot=e}Hp.prototype.unstable_scheduleHydration=function(e){if(e){var t=CT();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vs.length&&t!==0&&t<vs[n].priority;n++);vs.splice(n,0,e),n===0&&TT(e)}};function Ew(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eC(){}function a5(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Uf(o);s.call(c)}}var o=GD(t,r,e,0,null,!1,!1,"",eC);return e._reactRootContainer=o,e[Gi]=o.current,dc(e.nodeType===8?e.parentNode:e),Ho(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Uf(u);a.call(c)}}var u=_w(e,0,!1,null,null,!1,!1,"",eC);return e._reactRootContainer=u,e[Gi]=u.current,dc(e.nodeType===8?e.parentNode:e),Ho(function(){Wp(t,u,n,r)}),u}function qp(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Uf(o);a.call(u)}}Wp(t,o,e,i)}else o=a5(n,t,e,i,r);return Uf(o)}xT=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tu(t.pendingLanes);n!==0&&(V1(t,n|1),Yn(t,Ot()),(ze&6)===0&&(vl=Ot()+500,ao()))}break;case 13:Ho(function(){var r=qi(e,1);if(r!==null){var i=Rn();$r(r,e,1,i)}}),Sw(e,1)}};j1=function(e){if(e.tag===13){var t=qi(e,134217728);if(t!==null){var n=Rn();$r(t,e,134217728,n)}Sw(e,134217728)}};ET=function(e){if(e.tag===13){var t=$s(e),n=qi(e,t);if(n!==null){var r=Rn();$r(n,e,t,r)}Sw(e,t)}};CT=function(){return qe};kT=function(e,t){var n=qe;try{return qe=e,t()}finally{qe=n}};Ov=function(e,t,n){switch(t){case"input":if(kv(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fp(r);if(!i)throw Error(G(90));nT(r),kv(r,i)}}}break;case"textarea":iT(e,n);break;case"select":t=n.value,t!=null&&Ha(e,!!n.multiple,t,!1)}};dT=gw;hT=Ho;var l5={usingClientEntryPoint:!1,Events:[ed,Ma,Fp,uT,cT,gw]},vu={findFiberByHostInstance:Do,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},u5={bundleType:vu.bundleType,version:vu.version,rendererPackageName:vu.rendererPackageName,rendererConfig:vu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ss.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mT(e),e===null?null:e.stateNode},findFiberByHostInstance:vu.findFiberByHostInstance||o5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var xh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xh.isDisabled&&xh.supportsFiber)try{Pp=xh.inject(u5),ei=xh}catch{}}rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l5;rr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ew(t))throw Error(G(200));return s5(e,t,null,n)};rr.createRoot=function(e,t){if(!Ew(e))throw Error(G(299));var n=!1,r="",i=qD;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_w(e,1,!1,null,null,n,!1,r,i),e[Gi]=t.current,dc(e.nodeType===8?e.parentNode:e),new xw(t)};rr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=mT(t),e=e===null?null:e.stateNode,e};rr.flushSync=function(e){return Ho(e)};rr.hydrate=function(e,t,n){if(!Gp(t))throw Error(G(200));return qp(null,e,t,!0,n)};rr.hydrateRoot=function(e,t,n){if(!Ew(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=qD;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=GD(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Gi]=t.current,dc(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Hp(t)};rr.render=function(e,t,n){if(!Gp(t))throw Error(G(200));return qp(null,e,t,!1,n)};rr.unmountComponentAtNode=function(e){if(!Gp(e))throw Error(G(40));return e._reactRootContainer?(Ho(function(){qp(null,null,e,!1,function(){e._reactRootContainer=null,e[Gi]=null})}),!0):!1};rr.unstable_batchedUpdates=gw;rr.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gp(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return qp(e,t,n,!1,r)};rr.version="18.2.0-next-9e3b772b8-20220608";function KD(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KD)}catch(e){console.error(e)}}KD(),R1.exports=rr;var tC=R1.exports;yv.createRoot=tC.createRoot,yv.hydrateRoot=tC.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _c(){return _c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_c.apply(this,arguments)}var Ts;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ts||(Ts={}));const nC="popstate";function c5(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return dy("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bf(i)}return h5(t,n,null,e)}function Ft(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Cw(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function d5(){return Math.random().toString(36).substr(2,8)}function rC(e,t){return{usr:e.state,key:e.key,idx:t}}function dy(e,t,n,r){return n===void 0&&(n=null),_c({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ml(t):t,{state:n,key:t&&t.key||r||d5()})}function Bf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ml(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ts.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(_c({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Ts.Pop;let k=h(),x=k==null?null:k-c;c=k,u&&u({action:a,location:S.location,delta:x})}function m(k,x){a=Ts.Push;let v=dy(S.location,k,x);n&&n(v,k),c=h()+1;let C=rC(v,c),T=S.createHref(v);try{o.pushState(C,"",T)}catch{i.location.assign(T)}s&&u&&u({action:a,location:S.location,delta:1})}function w(k,x){a=Ts.Replace;let v=dy(S.location,k,x);n&&n(v,k),c=h();let C=rC(v,c),T=S.createHref(v);o.replaceState(C,"",T),s&&u&&u({action:a,location:S.location,delta:0})}function _(k){let x=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof k=="string"?k:Bf(k);return Ft(x,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,x)}let S={get action(){return a},get location(){return e(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(nC,p),u=k,()=>{i.removeEventListener(nC,p),u=null}},createHref(k){return t(i,k)},createURL:_,encodeLocation(k){let x=_(k);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:w,go(k){return o.go(k)}};return S}var iC;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(iC||(iC={}));function f5(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ml(t):t,i=kw(r.pathname||"/",n);if(i==null)return null;let s=QD(e);p5(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=E5(s[a],T5(i));return o}function QD(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ft(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Us([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ft(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),QD(s.children,t,h,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:S5(c,s.index),routesMeta:h})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of XD(s.path))i(s,o,u)}),t}function XD(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=XD(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function p5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:x5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const m5=/^:\w+$/,g5=3,v5=2,y5=1,w5=10,_5=-2,sC=e=>e==="*";function S5(e,t){let n=e.split("/"),r=n.length;return n.some(sC)&&(r+=_5),t&&(r+=v5),n.filter(i=>!sC(i)).reduce((i,s)=>i+(m5.test(s)?g5:s===""?y5:w5),r)}function x5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function E5(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=C5({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let p=a.route;s.push({params:r,pathname:Us([i,h.pathname]),pathnameBase:A5(Us([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Us([i,h.pathnameBase]))}return s}function C5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=k5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{if(h==="*"){let m=a[p]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=D5(a[p]||"",h),c},{}),pathname:s,pathnameBase:o,pattern:e}}function k5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Cw(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function T5(e){try{return decodeURI(e)}catch(t){return Cw(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function D5(e,t){try{return decodeURIComponent(e)}catch(n){return Cw(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function kw(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function b5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ml(e):e;return{pathname:n?n.startsWith("/")?n:I5(n,t):t,search:N5(r),hash:O5(i)}}function I5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function D0(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function JD(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ZD(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ml(e):(i=_c({},e),Ft(!i.pathname||!i.pathname.includes("?"),D0("?","pathname","search",i)),Ft(!i.pathname||!i.pathname.includes("#"),D0("#","pathname","hash",i)),Ft(!i.search||!i.search.includes("#"),D0("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let u=b5(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Us=e=>e.join("/").replace(/\/\/+/g,"/"),A5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function R5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const P5=["post","put","patch","delete"];[...P5];/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zf(){return zf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zf.apply(this,arguments)}const eb=L.exports.createContext(null),M5=L.exports.createContext(null),Ll=L.exports.createContext(null),Kp=L.exports.createContext(null),lo=L.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),tb=L.exports.createContext(null);function L5(e,t){let{relative:n}=t===void 0?{}:t;nd()||Ft(!1);let{basename:r,navigator:i}=L.exports.useContext(Ll),{hash:s,pathname:o,search:a}=rb(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Us([r,o])),i.createHref({pathname:u,search:a,hash:s})}function nd(){return L.exports.useContext(Kp)!=null}function rd(){return nd()||Ft(!1),L.exports.useContext(Kp).location}function nb(e){L.exports.useContext(Ll).static||L.exports.useLayoutEffect(e)}function sr(){let{isDataRoute:e}=L.exports.useContext(lo);return e?K5():$5()}function $5(){nd()||Ft(!1);let{basename:e,navigator:t}=L.exports.useContext(Ll),{matches:n}=L.exports.useContext(lo),{pathname:r}=rd(),i=JSON.stringify(JD(n).map(a=>a.pathnameBase)),s=L.exports.useRef(!1);return nb(()=>{s.current=!0}),L.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let c=ZD(a,JSON.parse(i),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Us([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,i,r])}function $l(){let{matches:e}=L.exports.useContext(lo),t=e[e.length-1];return t?t.params:{}}function rb(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=L.exports.useContext(lo),{pathname:i}=rd(),s=JSON.stringify(JD(r).map(o=>o.pathnameBase));return L.exports.useMemo(()=>ZD(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function F5(e,t){return U5(e,t)}function U5(e,t,n){nd()||Ft(!1);let{navigator:r}=L.exports.useContext(Ll),{matches:i}=L.exports.useContext(lo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=rd(),c;if(t){var h;let S=typeof t=="string"?Ml(t):t;a==="/"||((h=S.pathname)==null?void 0:h.startsWith(a))||Ft(!1),c=S}else c=u;let p=c.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",w=f5(e,{pathname:m}),_=Y5(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:Us([a,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:Us([a,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n);return t&&_?L.exports.createElement(Kp.Provider,{value:{location:zf({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ts.Pop}},_):_}function B5(){let e=q5(),t=R5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return L.exports.createElement(L.exports.Fragment,null,L.exports.createElement("h2",null,"Unexpected Application Error!"),L.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.exports.createElement("pre",{style:i},n):null,s)}const z5=L.exports.createElement(B5,null);class V5 extends L.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?L.exports.createElement(lo.Provider,{value:this.props.routeContext},L.exports.createElement(tb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j5(e){let{routeContext:t,match:n,children:r}=e,i=L.exports.useContext(eb);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.exports.createElement(lo.Provider,{value:t},r)}function Y5(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||Ft(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,c)=>{let h=u.route.id?o==null?void 0:o[u.route.id]:null,p=null;n&&(p=u.route.errorElement||z5);let m=t.concat(s.slice(0,c+1)),w=()=>{let _;return h?_=p:u.route.Component?_=L.exports.createElement(u.route.Component,null):u.route.element?_=u.route.element:_=a,L.exports.createElement(j5,{match:u,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:_})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?L.exports.createElement(V5,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:w(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):w()},null)}var hy;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(hy||(hy={}));var Sc;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Sc||(Sc={}));function W5(e){let t=L.exports.useContext(eb);return t||Ft(!1),t}function H5(e){let t=L.exports.useContext(M5);return t||Ft(!1),t}function G5(e){let t=L.exports.useContext(lo);return t||Ft(!1),t}function ib(e){let t=G5(),n=t.matches[t.matches.length-1];return n.route.id||Ft(!1),n.route.id}function q5(){var e;let t=L.exports.useContext(tb),n=H5(Sc.UseRouteError),r=ib(Sc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function K5(){let{router:e}=W5(hy.UseNavigateStable),t=ib(Sc.UseNavigateStable),n=L.exports.useRef(!1);return nb(()=>{n.current=!0}),L.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,zf({fromRouteId:t},s)))},[e,t])}function sb(e){Ft(!1)}function Q5(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ts.Pop,navigator:s,static:o=!1}=e;nd()&&Ft(!1);let a=t.replace(/^\/*/,"/"),u=L.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ml(r));let{pathname:c="/",search:h="",hash:p="",state:m=null,key:w="default"}=r,_=L.exports.useMemo(()=>{let S=kw(c,a);return S==null?null:{location:{pathname:S,search:h,hash:p,state:m,key:w},navigationType:i}},[a,c,h,p,m,w,i]);return _==null?null:L.exports.createElement(Ll.Provider,{value:u},L.exports.createElement(Kp.Provider,{children:n,value:_}))}function X5(e){let{children:t,location:n}=e;return F5(fy(t),n)}var oC;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(oC||(oC={}));new Promise(()=>{});function fy(e,t){t===void 0&&(t=[]);let n=[];return L.exports.Children.forEach(e,(r,i)=>{if(!L.exports.isValidElement(r))return;let s=[...t,i];if(r.type===L.exports.Fragment){n.push.apply(n,fy(r.props.children,s));return}r.type!==sb&&Ft(!1),!r.props.index||!r.props.children||Ft(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=fy(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function py(){return py=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},py.apply(this,arguments)}function J5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Z5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function e$(e,t){return e.button===0&&(!t||t==="_self")&&!Z5(e)}const t$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function n$(e){let{basename:t,children:n,window:r}=e,i=L.exports.useRef();i.current==null&&(i.current=c5({window:r,v5Compat:!0}));let s=i.current,[o,a]=L.exports.useState({action:s.action,location:s.location});return L.exports.useLayoutEffect(()=>s.listen(a),[s]),L.exports.createElement(Q5,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const r$=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",i$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nn=L.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h}=t,p=J5(t,t$),{basename:m}=L.exports.useContext(Ll),w,_=!1;if(typeof c=="string"&&i$.test(c)&&(w=c,r$))try{let v=new URL(window.location.href),C=c.startsWith("//")?new URL(v.protocol+c):new URL(c),T=kw(C.pathname,m);C.origin===v.origin&&T!=null?c=T+C.search+C.hash:_=!0}catch{}let S=L5(c,{relative:i}),k=s$(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i});function x(v){r&&r(v),v.defaultPrevented||k(v)}return L.exports.createElement("a",py({},p,{href:w||S,onClick:_||s?r:x,ref:n,target:u}))});var aC;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(aC||(aC={}));var lC;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lC||(lC={}));function s$(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=sr(),u=rd(),c=rb(e,{relative:o});return L.exports.useCallback(h=>{if(e$(h,n)){h.preventDefault();let p=r!==void 0?r:Bf(u)===Bf(c);a(e,{replace:p,state:i,preventScrollReset:s,relative:o})}},[u,a,c,r,i,n,e,s,o])}var Tw={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dw=Symbol.for("react.element"),bw=Symbol.for("react.portal"),Qp=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Jp=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),em=Symbol.for("react.context"),o$=Symbol.for("react.server_context"),tm=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.suspense_list"),im=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),a$=Symbol.for("react.offscreen"),ob;ob=Symbol.for("react.module.reference");function Er(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dw:switch(e=e.type,e){case Qp:case Jp:case Xp:case nm:case rm:return e;default:switch(e=e&&e.$$typeof,e){case o$:case em:case tm:case sm:case im:case Zp:return e;default:return t}}case bw:return t}}}Qe.ContextConsumer=em;Qe.ContextProvider=Zp;Qe.Element=Dw;Qe.ForwardRef=tm;Qe.Fragment=Qp;Qe.Lazy=sm;Qe.Memo=im;Qe.Portal=bw;Qe.Profiler=Jp;Qe.StrictMode=Xp;Qe.Suspense=nm;Qe.SuspenseList=rm;Qe.isAsyncMode=function(){return!1};Qe.isConcurrentMode=function(){return!1};Qe.isContextConsumer=function(e){return Er(e)===em};Qe.isContextProvider=function(e){return Er(e)===Zp};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dw};Qe.isForwardRef=function(e){return Er(e)===tm};Qe.isFragment=function(e){return Er(e)===Qp};Qe.isLazy=function(e){return Er(e)===sm};Qe.isMemo=function(e){return Er(e)===im};Qe.isPortal=function(e){return Er(e)===bw};Qe.isProfiler=function(e){return Er(e)===Jp};Qe.isStrictMode=function(e){return Er(e)===Xp};Qe.isSuspense=function(e){return Er(e)===nm};Qe.isSuspenseList=function(e){return Er(e)===rm};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Qp||e===Jp||e===Xp||e===nm||e===rm||e===a$||typeof e=="object"&&e!==null&&(e.$$typeof===sm||e.$$typeof===im||e.$$typeof===Zp||e.$$typeof===em||e.$$typeof===tm||e.$$typeof===ob||e.getModuleId!==void 0)};Qe.typeOf=Er;Tw.exports=Qe;function l$(e){function t(U,B,Y,z,D){for(var le=0,W=0,we=0,me=0,Be,_e,ne=0,De=0,Ce,dt=Ce=Be=0,Le=0,Bt=0,vo=0,yt=0,bt=Y.length,Gt=bt-1,Dn,ve="",Ne="",tu="",us="",It;Le<bt;){if(_e=Y.charCodeAt(Le),Le===Gt&&W+me+we+le!==0&&(W!==0&&(_e=W===47?10:47),me=we=le=0,bt++,Gt++),W+me+we+le===0){if(Le===Gt&&(0<Bt&&(ve=ve.replace(m,"")),0<ve.trim().length)){switch(_e){case 32:case 9:case 59:case 13:case 10:break;default:ve+=Y.charAt(Le)}_e=59}switch(_e){case 123:for(ve=ve.trim(),Be=ve.charCodeAt(0),Ce=1,yt=++Le;Le<bt;){switch(_e=Y.charCodeAt(Le)){case 123:Ce++;break;case 125:Ce--;break;case 47:switch(_e=Y.charCodeAt(Le+1)){case 42:case 47:e:{for(dt=Le+1;dt<Gt;++dt)switch(Y.charCodeAt(dt)){case 47:if(_e===42&&Y.charCodeAt(dt-1)===42&&Le+2!==dt){Le=dt+1;break e}break;case 10:if(_e===47){Le=dt+1;break e}}Le=dt}}break;case 91:_e++;case 40:_e++;case 34:case 39:for(;Le++<Gt&&Y.charCodeAt(Le)!==_e;);}if(Ce===0)break;Le++}switch(Ce=Y.substring(yt,Le),Be===0&&(Be=(ve=ve.replace(p,"").trim()).charCodeAt(0)),Be){case 64:switch(0<Bt&&(ve=ve.replace(m,"")),_e=ve.charCodeAt(1),_e){case 100:case 109:case 115:case 45:Bt=B;break;default:Bt=Te}if(Ce=t(B,Bt,Ce,_e,D+1),yt=Ce.length,0<$&&(Bt=n(Te,ve,vo),It=a(3,Ce,Bt,B,X,J,yt,_e,D,z),ve=Bt.join(""),It!==void 0&&(yt=(Ce=It.trim()).length)===0&&(_e=0,Ce="")),0<yt)switch(_e){case 115:ve=ve.replace(R,o);case 100:case 109:case 45:Ce=ve+"{"+Ce+"}";break;case 107:ve=ve.replace(v,"$1 $2"),Ce=ve+"{"+Ce+"}",Ce=oe===1||oe===2&&s("@"+Ce,3)?"@-webkit-"+Ce+"@"+Ce:"@"+Ce;break;default:Ce=ve+Ce,z===112&&(Ce=(Ne+=Ce,""))}else Ce="";break;default:Ce=t(B,n(B,ve,vo),Ce,z,D+1)}tu+=Ce,Ce=vo=Bt=dt=Be=0,ve="",_e=Y.charCodeAt(++Le);break;case 125:case 59:if(ve=(0<Bt?ve.replace(m,""):ve).trim(),1<(yt=ve.length))switch(dt===0&&(Be=ve.charCodeAt(0),Be===45||96<Be&&123>Be)&&(yt=(ve=ve.replace(" ",":")).length),0<$&&(It=a(1,ve,B,U,X,J,Ne.length,z,D,z))!==void 0&&(yt=(ve=It.trim()).length)===0&&(ve="\0\0"),Be=ve.charCodeAt(0),_e=ve.charCodeAt(1),Be){case 0:break;case 64:if(_e===105||_e===99){us+=ve+Y.charAt(Le);break}default:ve.charCodeAt(yt-1)!==58&&(Ne+=i(ve,Be,_e,ve.charCodeAt(2)))}vo=Bt=dt=Be=0,ve="",_e=Y.charCodeAt(++Le)}}switch(_e){case 13:case 10:W===47?W=0:1+Be===0&&z!==107&&0<ve.length&&(Bt=1,ve+="\0"),0<$*P&&a(0,ve,B,U,X,J,Ne.length,z,D,z),J=1,X++;break;case 59:case 125:if(W+me+we+le===0){J++;break}default:switch(J++,Dn=Y.charAt(Le),_e){case 9:case 32:if(me+le+W===0)switch(ne){case 44:case 58:case 9:case 32:Dn="";break;default:_e!==32&&(Dn=" ")}break;case 0:Dn="\\0";break;case 12:Dn="\\f";break;case 11:Dn="\\v";break;case 38:me+W+le===0&&(Bt=vo=1,Dn="\f"+Dn);break;case 108:if(me+W+le+ue===0&&0<dt)switch(Le-dt){case 2:ne===112&&Y.charCodeAt(Le-3)===58&&(ue=ne);case 8:De===111&&(ue=De)}break;case 58:me+W+le===0&&(dt=Le);break;case 44:W+we+me+le===0&&(Bt=1,Dn+="\r");break;case 34:case 39:W===0&&(me=me===_e?0:me===0?_e:me);break;case 91:me+W+we===0&&le++;break;case 93:me+W+we===0&&le--;break;case 41:me+W+le===0&&we--;break;case 40:if(me+W+le===0){if(Be===0)switch(2*ne+3*De){case 533:break;default:Be=1}we++}break;case 64:W+we+me+le+dt+Ce===0&&(Ce=1);break;case 42:case 47:if(!(0<me+le+we))switch(W){case 0:switch(2*_e+3*Y.charCodeAt(Le+1)){case 235:W=47;break;case 220:yt=Le,W=42}break;case 42:_e===47&&ne===42&&yt+2!==Le&&(Y.charCodeAt(yt+2)===33&&(Ne+=Y.substring(yt,Le+1)),Dn="",W=0)}}W===0&&(ve+=Dn)}De=ne,ne=_e,Le++}if(yt=Ne.length,0<yt){if(Bt=B,0<$&&(It=a(2,Ne,Bt,U,X,J,yt,z,D,z),It!==void 0&&(Ne=It).length===0))return us+Ne+tu;if(Ne=Bt.join(",")+"{"+Ne+"}",oe*ue!==0){switch(oe!==2||s(Ne,2)||(ue=0),ue){case 111:Ne=Ne.replace(T,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(C,"::-webkit-input-$1")+Ne.replace(C,"::-moz-$1")+Ne.replace(C,":-ms-input-$1")+Ne}ue=0}}return us+Ne+tu}function n(U,B,Y){var z=B.trim().split(k);B=z;var D=z.length,le=U.length;switch(le){case 0:case 1:var W=0;for(U=le===0?"":U[0]+" ";W<D;++W)B[W]=r(U,B[W],Y).trim();break;default:var we=W=0;for(B=[];W<D;++W)for(var me=0;me<le;++me)B[we++]=r(U[me]+" ",z[W],Y).trim()}return B}function r(U,B,Y){var z=B.charCodeAt(0);switch(33>z&&(z=(B=B.trim()).charCodeAt(0)),z){case 38:return B.replace(x,"$1"+U.trim());case 58:return U.trim()+B.replace(x,"$1"+U.trim());default:if(0<1*Y&&0<B.indexOf("\f"))return B.replace(x,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+B}function i(U,B,Y,z){var D=U+";",le=2*B+3*Y+4*z;if(le===944){U=D.indexOf(":",9)+1;var W=D.substring(U,D.length-1).trim();return W=D.substring(0,U).trim()+W+";",oe===1||oe===2&&s(W,1)?"-webkit-"+W+W:W}if(oe===0||oe===2&&!s(D,1))return D;switch(le){case 1015:return D.charCodeAt(10)===97?"-webkit-"+D+D:D;case 951:return D.charCodeAt(3)===116?"-webkit-"+D+D:D;case 963:return D.charCodeAt(5)===110?"-webkit-"+D+D:D;case 1009:if(D.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+D+D;case 978:return"-webkit-"+D+"-moz-"+D+D;case 1019:case 983:return"-webkit-"+D+"-moz-"+D+"-ms-"+D+D;case 883:if(D.charCodeAt(8)===45)return"-webkit-"+D+D;if(0<D.indexOf("image-set(",11))return D.replace(j,"$1-webkit-$2")+D;break;case 932:if(D.charCodeAt(4)===45)switch(D.charCodeAt(5)){case 103:return"-webkit-box-"+D.replace("-grow","")+"-webkit-"+D+"-ms-"+D.replace("grow","positive")+D;case 115:return"-webkit-"+D+"-ms-"+D.replace("shrink","negative")+D;case 98:return"-webkit-"+D+"-ms-"+D.replace("basis","preferred-size")+D}return"-webkit-"+D+"-ms-"+D+D;case 964:return"-webkit-"+D+"-ms-flex-"+D+D;case 1023:if(D.charCodeAt(8)!==99)break;return W=D.substring(D.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+D+"-ms-flex-pack"+W+D;case 1005:return _.test(D)?D.replace(w,":-webkit-")+D.replace(w,":-moz-")+D:D;case 1e3:switch(W=D.substring(13).trim(),B=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(B)){case 226:W=D.replace(I,"tb");break;case 232:W=D.replace(I,"tb-rl");break;case 220:W=D.replace(I,"lr");break;default:return D}return"-webkit-"+D+"-ms-"+W+D;case 1017:if(D.indexOf("sticky",9)===-1)break;case 975:switch(B=(D=U).length-10,W=(D.charCodeAt(B)===33?D.substring(0,B):D).substring(U.indexOf(":",7)+1).trim(),le=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:D=D.replace(W,"-webkit-"+W)+";"+D;break;case 207:case 102:D=D.replace(W,"-webkit-"+(102<le?"inline-":"")+"box")+";"+D.replace(W,"-webkit-"+W)+";"+D.replace(W,"-ms-"+W+"box")+";"+D}return D+";";case 938:if(D.charCodeAt(5)===45)switch(D.charCodeAt(6)){case 105:return W=D.replace("-items",""),"-webkit-"+D+"-webkit-box-"+W+"-ms-flex-"+W+D;case 115:return"-webkit-"+D+"-ms-flex-item-"+D.replace(O,"")+D;default:return"-webkit-"+D+"-ms-flex-line-pack"+D.replace("align-content","").replace(O,"")+D}break;case 973:case 989:if(D.charCodeAt(3)!==45||D.charCodeAt(4)===122)break;case 931:case 953:if(F.test(U)===!0)return(W=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),B,Y,z).replace(":fill-available",":stretch"):D.replace(W,"-webkit-"+W)+D.replace(W,"-moz-"+W.replace("fill-",""))+D;break;case 962:if(D="-webkit-"+D+(D.charCodeAt(5)===102?"-ms-"+D:"")+D,Y+z===211&&D.charCodeAt(13)===105&&0<D.indexOf("transform",10))return D.substring(0,D.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+D}return D}function s(U,B){var Y=U.indexOf(B===1?":":"{"),z=U.substring(0,B!==3?Y:10);return Y=U.substring(Y+1,U.length-1),V(B!==2?z:z.replace(Z,"$1"),Y,B)}function o(U,B){var Y=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return Y!==B+";"?Y.replace(A," or ($1)").substring(4):"("+B+")"}function a(U,B,Y,z,D,le,W,we,me,Be){for(var _e=0,ne=B,De;_e<$;++_e)switch(De=ge[_e].call(h,U,ne,Y,z,D,le,W,we,me,Be)){case void 0:case!1:case!0:case null:break;default:ne=De}if(ne!==B)return ne}function u(U){switch(U){case void 0:case null:$=ge.length=0;break;default:if(typeof U=="function")ge[$++]=U;else if(typeof U=="object")for(var B=0,Y=U.length;B<Y;++B)u(U[B]);else P=!!U|0}return u}function c(U){return U=U.prefix,U!==void 0&&(V=null,U?typeof U!="function"?oe=1:(oe=2,V=U):oe=0),c}function h(U,B){var Y=U;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),ee=Y,Y=[ee],0<$){var z=a(-1,B,Y,Y,X,J,0,0,0,0);z!==void 0&&typeof z=="string"&&(B=z)}var D=t(Te,Y,B,0,0);return 0<$&&(z=a(-2,D,Y,Y,X,J,D.length,0,0,0),z!==void 0&&(D=z)),ee="",ue=0,J=X=1,D}var p=/^\0+/g,m=/[\0\r\f]/g,w=/: */g,_=/zoo|gra/,S=/([,: ])(transform)/g,k=/,\r+?/g,x=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,T=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,O=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,J=1,X=1,ue=0,oe=1,Te=[],ge=[],$=0,V=null,P=0,ee="";return h.use=u,h.set=c,e!==void 0&&c(e),h}var u$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function c$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var d$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uC=c$(function(e){return d$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ab={exports:{}},Xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=typeof Symbol=="function"&&Symbol.for,Iw=Zt?Symbol.for("react.element"):60103,Aw=Zt?Symbol.for("react.portal"):60106,om=Zt?Symbol.for("react.fragment"):60107,am=Zt?Symbol.for("react.strict_mode"):60108,lm=Zt?Symbol.for("react.profiler"):60114,um=Zt?Symbol.for("react.provider"):60109,cm=Zt?Symbol.for("react.context"):60110,Nw=Zt?Symbol.for("react.async_mode"):60111,dm=Zt?Symbol.for("react.concurrent_mode"):60111,hm=Zt?Symbol.for("react.forward_ref"):60112,fm=Zt?Symbol.for("react.suspense"):60113,h$=Zt?Symbol.for("react.suspense_list"):60120,pm=Zt?Symbol.for("react.memo"):60115,mm=Zt?Symbol.for("react.lazy"):60116,f$=Zt?Symbol.for("react.block"):60121,p$=Zt?Symbol.for("react.fundamental"):60117,m$=Zt?Symbol.for("react.responder"):60118,g$=Zt?Symbol.for("react.scope"):60119;function or(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Iw:switch(e=e.type,e){case Nw:case dm:case om:case lm:case am:case fm:return e;default:switch(e=e&&e.$$typeof,e){case cm:case hm:case mm:case pm:case um:return e;default:return t}}case Aw:return t}}}function lb(e){return or(e)===dm}Xe.AsyncMode=Nw;Xe.ConcurrentMode=dm;Xe.ContextConsumer=cm;Xe.ContextProvider=um;Xe.Element=Iw;Xe.ForwardRef=hm;Xe.Fragment=om;Xe.Lazy=mm;Xe.Memo=pm;Xe.Portal=Aw;Xe.Profiler=lm;Xe.StrictMode=am;Xe.Suspense=fm;Xe.isAsyncMode=function(e){return lb(e)||or(e)===Nw};Xe.isConcurrentMode=lb;Xe.isContextConsumer=function(e){return or(e)===cm};Xe.isContextProvider=function(e){return or(e)===um};Xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Iw};Xe.isForwardRef=function(e){return or(e)===hm};Xe.isFragment=function(e){return or(e)===om};Xe.isLazy=function(e){return or(e)===mm};Xe.isMemo=function(e){return or(e)===pm};Xe.isPortal=function(e){return or(e)===Aw};Xe.isProfiler=function(e){return or(e)===lm};Xe.isStrictMode=function(e){return or(e)===am};Xe.isSuspense=function(e){return or(e)===fm};Xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===om||e===dm||e===lm||e===am||e===fm||e===h$||typeof e=="object"&&e!==null&&(e.$$typeof===mm||e.$$typeof===pm||e.$$typeof===um||e.$$typeof===cm||e.$$typeof===hm||e.$$typeof===p$||e.$$typeof===m$||e.$$typeof===g$||e.$$typeof===f$)};Xe.typeOf=or;ab.exports=Xe;var Ow=ab.exports,v$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},y$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ub={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rw={};Rw[Ow.ForwardRef]=w$;Rw[Ow.Memo]=ub;function cC(e){return Ow.isMemo(e)?ub:Rw[e.$$typeof]||v$}var _$=Object.defineProperty,S$=Object.getOwnPropertyNames,dC=Object.getOwnPropertySymbols,x$=Object.getOwnPropertyDescriptor,E$=Object.getPrototypeOf,hC=Object.prototype;function cb(e,t,n){if(typeof t!="string"){if(hC){var r=E$(t);r&&r!==hC&&cb(e,r,n)}var i=S$(t);dC&&(i=i.concat(dC(t)));for(var s=cC(e),o=cC(t),a=0;a<i.length;++a){var u=i[a];if(!y$[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=x$(t,u);try{_$(e,u,c)}catch{}}}}return e}var C$=cb;function Xr(){return(Xr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var fC=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},my=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Tw.exports.typeOf(e)},Vf=Object.freeze([]),Bs=Object.freeze({});function xc(e){return typeof e=="function"}function pC(e){return e.displayName||e.name||"Component"}function Pw(e){return e&&typeof e.styledComponentId=="string"}var yl=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Mw=typeof window!="undefined"&&"HTMLElement"in window,k$=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),T$={};function id(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var D$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&id(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,h=r.length;c<h;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Jh=new Map,jf=new Map,Wu=1,Eh=function(e){if(Jh.has(e))return Jh.get(e);for(;jf.has(Wu);)Wu++;var t=Wu++;return Jh.set(e,t),jf.set(t,e),t},b$=function(e){return jf.get(e)},I$=function(e,t){t>=Wu&&(Wu=t+1),Jh.set(e,t),jf.set(t,e)},A$="style["+yl+'][data-styled-version="5.3.10"]',N$=new RegExp("^"+yl+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),O$=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},R$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(N$);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(I$(c,u),O$(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},P$=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},db=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var h=u[c];if(h&&h.nodeType===1&&h.hasAttribute(yl))return h}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(yl,"active"),r.setAttribute("data-styled-version","5.3.10");var o=P$();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},M$=function(){function e(n){var r=this.element=db(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}id(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),L$=function(){function e(n){var r=this.element=db(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),$$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),mC=Mw,F$={isServer:!Mw,useCSSOMInjection:!k$},Yf=function(){function e(n,r,i){n===void 0&&(n=Bs),r===void 0&&(r={}),this.options=Xr({},F$,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Mw&&mC&&(mC=!1,function(s){for(var o=document.querySelectorAll(A$),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(yl)!=="active"&&(R$(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Eh(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Xr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new $$(o):s?new M$(o):new L$(o),new D$(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Eh(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Eh(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Eh(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=b$(o);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(o);if(u&&c&&u.size){var h=yl+".g"+o+'[id="'+a+'"]',p="";u!==void 0&&u.forEach(function(m){m.length>0&&(p+=m+",")}),s+=""+c+h+'{content:"'+p+`"}/*!sc*/
`}}}return s}(this)},e}(),U$=/(a)(d)/gi,gC=function(e){return String.fromCharCode(e+(e>25?39:97))};function gy(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=gC(t%52)+n;return(gC(t%52)+n).replace(U$,"$1-$2")}var Va=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hb=function(e){return Va(5381,e)};function fb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xc(n)&&!Pw(n))return!1}return!0}var B$=hb("5.3.10"),z$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fb(t),this.componentId=n,this.baseHash=Va(B$,n),this.baseStyle=r,Yf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Go(this.rules,t,n,r).join(""),a=gy(Va(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,h=Va(this.baseHash,r.hash),p="",m=0;m<c;m++){var w=this.rules[m];if(typeof w=="string")p+=w;else if(w){var _=Go(w,t,n,r),S=Array.isArray(_)?_.join(""):_;h=Va(h,S+m),p+=S}}if(p){var k=gy(h>>>0);if(!n.hasNameForId(i,k)){var x=r(p,"."+k,void 0,i);n.insertRules(i,k,x)}s.push(k)}}return s.join(" ")},e}(),V$=/^\s*\/\/.*$/gm,j$=[":","[",".","#"];function Y$(e){var t,n,r,i,s=e===void 0?Bs:e,o=s.options,a=o===void 0?Bs:o,u=s.plugins,c=u===void 0?Vf:u,h=new l$(a),p=[],m=function(S){function k(x){if(x)try{S(x+"}")}catch{}}return function(x,v,C,T,I,R,A,O,Z,F){switch(x){case 1:if(Z===0&&v.charCodeAt(0)===64)return S(v+";"),"";break;case 2:if(O===0)return v+"/*|*/";break;case 3:switch(O){case 102:case 112:return S(C[0]+v),"";default:return v+(F===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(k)}}}(function(S){p.push(S)}),w=function(S,k,x){return k===0&&j$.indexOf(x[n.length])!==-1||x.match(i)?S:"."+t};function _(S,k,x,v){v===void 0&&(v="&");var C=S.replace(V$,""),T=k&&x?x+" "+k+" { "+C+" }":C;return t=v,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(x||!k?"":k,T)}return h.use([].concat(c,[function(S,k,x){S===2&&x.length&&x[0].lastIndexOf(n)>0&&(x[0]=x[0].replace(r,w))},m,function(S){if(S===-2){var k=p;return p=[],k}}])),_.hash=c.length?c.reduce(function(S,k){return k.name||id(15),Va(S,k.name)},5381).toString():"",_}var pb=Qt.createContext();pb.Consumer;var mb=Qt.createContext(),W$=(mb.Consumer,new Yf),vy=Y$();function gb(){return L.exports.useContext(pb)||W$}function vb(){return L.exports.useContext(mb)||vy}var yb=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=vy);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return id(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=vy),this.name+t.hash},e}(),H$=/([A-Z])/,G$=/([A-Z])/g,q$=/^ms-/,K$=function(e){return"-"+e.toLowerCase()};function vC(e){return H$.test(e)?e.replace(G$,K$).replace(q$,"-ms-"):e}var yC=function(e){return e==null||e===!1||e===""};function Go(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Go(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(yC(e))return"";if(Pw(e))return"."+e.styledComponentId;if(xc(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return Go(u,t,n,r)}var c;return e instanceof yb?n?(e.inject(n,r),e.getName(r)):e:my(e)?function h(p,m){var w,_,S=[];for(var k in p)p.hasOwnProperty(k)&&!yC(p[k])&&(Array.isArray(p[k])&&p[k].isCss||xc(p[k])?S.push(vC(k)+":",p[k],";"):my(p[k])?S.push.apply(S,h(p[k],k)):S.push(vC(k)+": "+(w=k,(_=p[k])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||w in u$||w.startsWith("--")?String(_).trim():_+"px")+";"));return m?[m+" {"].concat(S,["}"]):S}(e):e.toString()}var wC=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Fl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return xc(e)||my(e)?wC(Go(fC(Vf,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:wC(Go(fC(e,n)))}var wb=function(e,t,n){return n===void 0&&(n=Bs),e.theme!==n.theme&&e.theme||t||n.theme},Q$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X$=/(^-|-$)/g;function b0(e){return e.replace(Q$,"-").replace(X$,"")}var Lw=function(e){return gy(hb(e)>>>0)};function Ch(e){return typeof e=="string"&&!0}var yy=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},J$=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Z$(e,t,n){var r=e[n];yy(t)&&yy(r)?_b(r,t):e[n]=t}function _b(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(yy(o))for(var a in o)J$(a)&&Z$(e,o[a],a)}return e}var $w=Qt.createContext();$w.Consumer;var I0={};function Sb(e,t,n){var r=Pw(e),i=!Ch(e),s=t.attrs,o=s===void 0?Vf:s,a=t.componentId,u=a===void 0?function(v,C){var T=typeof v!="string"?"sc":b0(v);I0[T]=(I0[T]||0)+1;var I=T+"-"+Lw("5.3.10"+T+I0[T]);return C?C+"-"+I:I}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(v){return Ch(v)?"styled."+v:"Styled("+pC(v)+")"}(e):c,p=t.displayName&&t.componentId?b0(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(v,C,T){return e.shouldForwardProp(v,C,T)&&t.shouldForwardProp(v,C,T)}:e.shouldForwardProp);var _,S=new z$(n,p,r?e.componentStyle:void 0),k=S.isStatic&&o.length===0,x=function(v,C){return function(T,I,R,A){var O=T.attrs,Z=T.componentStyle,F=T.defaultProps,j=T.foldedComponentIds,J=T.shouldForwardProp,X=T.styledComponentId,ue=T.target,oe=function(z,D,le){z===void 0&&(z=Bs);var W=Xr({},D,{theme:z}),we={};return le.forEach(function(me){var Be,_e,ne,De=me;for(Be in xc(De)&&(De=De(W)),De)W[Be]=we[Be]=Be==="className"?(_e=we[Be],ne=De[Be],_e&&ne?_e+" "+ne:_e||ne):De[Be]}),[W,we]}(wb(I,L.exports.useContext($w),F)||Bs,I,O),Te=oe[0],ge=oe[1],$=function(z,D,le,W){var we=gb(),me=vb(),Be=D?z.generateAndInjectStyles(Bs,we,me):z.generateAndInjectStyles(le,we,me);return Be}(Z,A,Te),V=R,P=ge.$as||I.$as||ge.as||I.as||ue,ee=Ch(P),U=ge!==I?Xr({},I,{},ge):I,B={};for(var Y in U)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?B.as=U[Y]:(J?J(Y,uC,P):!ee||uC(Y))&&(B[Y]=U[Y]));return I.style&&ge.style!==I.style&&(B.style=Xr({},I.style,{},ge.style)),B.className=Array.prototype.concat(j,X,$!==X?$:null,I.className,ge.className).filter(Boolean).join(" "),B.ref=V,L.exports.createElement(P,B)}(_,v,C,k)};return x.displayName=h,(_=Qt.forwardRef(x)).attrs=m,_.componentStyle=S,_.displayName=h,_.shouldForwardProp=w,_.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Vf,_.styledComponentId=p,_.target=r?e.target:e,_.withComponent=function(v){var C=t.componentId,T=function(R,A){if(R==null)return{};var O,Z,F={},j=Object.keys(R);for(Z=0;Z<j.length;Z++)O=j[Z],A.indexOf(O)>=0||(F[O]=R[O]);return F}(t,["componentId"]),I=C&&C+"-"+(Ch(v)?v:b0(pC(v)));return Sb(v,Xr({},T,{attrs:m,componentId:I}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?_b({},e.defaultProps,v):v}}),Object.defineProperty(_,"toString",{value:function(){return"."+_.styledComponentId}}),i&&C$(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var wy=function(e){return function t(n,r,i){if(i===void 0&&(i=Bs),!Tw.exports.isValidElementType(r))return id(1,String(r));var s=function(){return n(r,i,Fl.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Xr({},i,{},o))},s.attrs=function(o){return t(n,r,Xr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Sb,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){wy[e]=wy(e)});var eF=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=fb(n),Yf.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Go(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&Yf.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function tF(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Fl.apply(void 0,[e].concat(n)),s="sc-global-"+Lw(JSON.stringify(i)),o=new eF(i,s);function a(c){var h=gb(),p=vb(),m=L.exports.useContext($w),w=L.exports.useRef(h.allocateGSInstance(s)).current;return h.server&&u(w,c,h,m,p),L.exports.useLayoutEffect(function(){if(!h.server)return u(w,c,h,m,p),function(){return o.removeStyles(w,h)}},[w,c,h,m,p]),null}function u(c,h,p,m,w){if(o.isStatic)o.renderStyles(c,T$,p,w);else{var _=Xr({},h,{theme:wb(h,m,a.defaultProps)});o.renderStyles(c,_,p,w)}}return Qt.memo(a)}function nF(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Fl.apply(void 0,[e].concat(n)).join(""),s=Lw(i);return new yb(s,i)}var Ge=wy;const rF=tF`
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
`,iF=Ge.div`
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
`,sF=Ge.header`
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
            a,
            span {
              display: block;
              padding: 6px 16px;
              letter-spacing: -0.15px;
              font-weight: 700;
              text-indent: 6px;
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
`;var xb={exports:{}},Eb={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=L.exports;function oF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var aF=typeof Object.is=="function"?Object.is:oF,lF=wl.useState,uF=wl.useEffect,cF=wl.useLayoutEffect,dF=wl.useDebugValue;function hF(e,t){var n=t(),r=lF({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return cF(function(){i.value=n,i.getSnapshot=t,A0(i)&&s({inst:i})},[e,n,t]),uF(function(){return A0(i)&&s({inst:i}),e(function(){A0(i)&&s({inst:i})})},[e]),dF(n),n}function A0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!aF(e,n)}catch{return!0}}function fF(e,t){return t()}var pF=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?fF:hF;Eb.useSyncExternalStore=wl.useSyncExternalStore!==void 0?wl.useSyncExternalStore:pF;xb.exports=Eb;var Cb={exports:{}},kb={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=L.exports,mF=xb.exports;function gF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vF=typeof Object.is=="function"?Object.is:gF,yF=mF.useSyncExternalStore,wF=gm.useRef,_F=gm.useEffect,SF=gm.useMemo,xF=gm.useDebugValue;kb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=wF(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=SF(function(){function u(w){if(!c){if(c=!0,h=w,w=r(w),i!==void 0&&o.hasValue){var _=o.value;if(i(_,w))return p=_}return p=w}if(_=p,vF(h,w))return _;var S=r(w);return i!==void 0&&i(_,S)?_:(h=w,p=S)}var c=!1,h,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var a=yF(e,s[0],s[1]);return _F(function(){o.hasValue=!0,o.value=a},[a]),xF(a),a};Cb.exports=kb;function EF(e){e()}let Tb=EF;const CF=e=>Tb=e,kF=()=>Tb,Qs=L.exports.createContext(null);function Db(){return L.exports.useContext(Qs)}const TF=()=>{throw new Error("uSES not initialized!")};let bb=TF;const DF=e=>{bb=e},bF=(e,t)=>e===t;function IF(e=Qs){const t=e===Qs?Db:()=>L.exports.useContext(e);return function(r,i=bF){const{store:s,subscription:o,getServerState:a}=t(),u=bb(o.addNestedSub,s.getState,a||s.getState,r,i);return L.exports.useDebugValue(u),u}}const rt=IF();function AF(){const e=kF();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const _C={notify(){},get:()=>[]};function NF(e,t){let n,r=_C;function i(p){return u(),r.subscribe(p)}function s(){r.notify()}function o(){h.onStateChange&&h.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=AF())}function c(){n&&(n(),n=void 0,r.clear(),r=_C)}const h={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>r};return h}const OF=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",RF=OF?L.exports.useLayoutEffect:L.exports.useEffect;var vm={exports:{}},ym={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PF=L.exports,MF=Symbol.for("react.element"),LF=Symbol.for("react.fragment"),$F=Object.prototype.hasOwnProperty,FF=PF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UF={key:!0,ref:!0,__self:!0,__source:!0};function Ib(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)$F.call(t,r)&&!UF.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:MF,type:e,key:s,ref:o,props:i,_owner:FF.current}}ym.Fragment=LF;ym.jsx=Ib;ym.jsxs=Ib;vm.exports=ym;const y=vm.exports.jsx,N=vm.exports.jsxs,_y=vm.exports.Fragment;function BF({store:e,context:t,children:n,serverState:r}){const i=L.exports.useMemo(()=>{const a=NF(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),s=L.exports.useMemo(()=>e.getState(),[e]);return RF(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),y((t||Qs).Provider,{value:i,children:n})}function Ab(e=Qs){const t=e===Qs?Db:()=>L.exports.useContext(e);return function(){const{store:r}=t();return r}}const zF=Ab();function VF(e=Qs){const t=e===Qs?zF:Ab(e);return function(){return t().dispatch}}const en=VF();DF(Cb.exports.useSyncExternalStoreWithSelector);CF(R1.exports.unstable_batchedUpdates);function Rr(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Xs(e){return!!e&&!!e[pt]}function Qi(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===XF}(e)||Array.isArray(e)||!!e[DC]||!!(!((t=e.constructor)===null||t===void 0)&&t[DC])||Fw(e)||Uw(e))}function qo(e,t,n){n===void 0&&(n=!1),Ul(e)===0?(n?Object.keys:Za)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ul(e){var t=e[pt];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Fw(e)?2:Uw(e)?3:0}function Ja(e,t){return Ul(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function jF(e,t){return Ul(e)===2?e.get(t):e[t]}function Nb(e,t,n){var r=Ul(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Ob(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Fw(e){return KF&&e instanceof Map}function Uw(e){return QF&&e instanceof Set}function ko(e){return e.o||e.t}function Bw(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Pb(e);delete t[pt];for(var n=Za(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function zw(e,t){return t===void 0&&(t=!1),Vw(e)||Xs(e)||!Qi(e)||(Ul(e)>1&&(e.set=e.add=e.clear=e.delete=YF),Object.freeze(e),t&&qo(e,function(n,r){return zw(r,!0)},!0)),e}function YF(){Rr(2)}function Vw(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ni(e){var t=Cy[e];return t||Rr(18,e),t}function WF(e,t){Cy[e]||(Cy[e]=t)}function Sy(){return Ec}function N0(e,t){t&&(ni("Patches"),e.u=[],e.s=[],e.v=t)}function Wf(e){xy(e),e.p.forEach(HF),e.p=null}function xy(e){e===Ec&&(Ec=e.l)}function SC(e){return Ec={p:[],l:Ec,h:e,m:!0,_:0}}function HF(e){var t=e[pt];t.i===0||t.i===1?t.j():t.g=!0}function O0(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ni("ES5").S(t,e,r),r?(n[pt].P&&(Wf(t),Rr(4)),Qi(e)&&(e=Hf(t,e),t.l||Gf(t,e)),t.u&&ni("Patches").M(n[pt].t,e,t.u,t.s)):e=Hf(t,n,[]),Wf(t),t.u&&t.v(t.u,t.s),e!==Rb?e:void 0}function Hf(e,t,n){if(Vw(t))return t;var r=t[pt];if(!r)return qo(t,function(a,u){return xC(e,r,t,a,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Gf(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Bw(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),qo(s,function(a,u){return xC(e,r,i,a,u,n,o)}),Gf(e,i,!1),n&&e.u&&ni("Patches").N(r,n,e.u,e.s)}return r.o}function xC(e,t,n,r,i,s,o){if(Xs(i)){var a=Hf(e,i,s&&t&&t.i!==3&&!Ja(t.R,r)?s.concat(r):void 0);if(Nb(n,r,a),!Xs(a))return;e.m=!1}else o&&n.add(i);if(Qi(i)&&!Vw(i)){if(!e.h.D&&e._<1)return;Hf(e,i),t&&t.A.l||Gf(e,i)}}function Gf(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&zw(t,n)}function R0(e,t){var n=e[pt];return(n?ko(n):e)[t]}function EC(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function ws(e){e.P||(e.P=!0,e.l&&ws(e.l))}function P0(e){e.o||(e.o=Bw(e.t))}function Ey(e,t,n){var r=Fw(t)?ni("MapSet").F(t,n):Uw(t)?ni("MapSet").T(t,n):e.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Sy(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,c=Cc;o&&(u=[a],c=bu);var h=Proxy.revocable(u,c),p=h.revoke,m=h.proxy;return a.k=m,a.j=p,m}(t,n):ni("ES5").J(t,n);return(n?n.A:Sy()).p.push(r),r}function GF(e){return Xs(e)||Rr(22,e),function t(n){if(!Qi(n))return n;var r,i=n[pt],s=Ul(n);if(i){if(!i.P&&(i.i<4||!ni("ES5").K(i)))return i.t;i.I=!0,r=CC(n,s),i.I=!1}else r=CC(n,s);return qo(r,function(o,a){i&&jF(i.t,o)===a||Nb(r,o,t(a))}),s===3?new Set(r):r}(e)}function CC(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Bw(e)}function qF(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[pt];return Cc.get(u,s)},set:function(u){var c=this[pt];Cc.set(c,s,u)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][pt];if(!a.P)switch(a.i){case 5:r(a)&&ws(a);break;case 4:n(a)&&ws(a)}}}function n(s){for(var o=s.t,a=s.k,u=Za(a),c=u.length-1;c>=0;c--){var h=u[c];if(h!==pt){var p=o[h];if(p===void 0&&!Ja(o,h))return!0;var m=a[h],w=m&&m[pt];if(w?w.t!==p:!Ob(m,p))return!0}}var _=!!o[pt];return u.length!==Za(o).length+(_?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};WF("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(h,p){if(h){for(var m=Array(p.length),w=0;w<p.length;w++)Object.defineProperty(m,""+w,e(w,!0));return m}var _=Pb(p);delete _[pt];for(var S=Za(_),k=0;k<S.length;k++){var x=S[k];_[x]=e(x,h||!!_[x].enumerable)}return Object.create(Object.getPrototypeOf(p),_)}(a,s),c={i:a?5:4,A:o?o.A:Sy(),P:!1,I:!1,R:{},l:o,t:s,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,pt,{value:c,writable:!0}),u},S:function(s,o,a){a?Xs(o)&&o[pt].A===s&&t(s.p):(s.u&&function u(c){if(c&&typeof c=="object"){var h=c[pt];if(h){var p=h.t,m=h.k,w=h.R,_=h.i;if(_===4)qo(m,function(C){C!==pt&&(p[C]!==void 0||Ja(p,C)?w[C]||u(m[C]):(w[C]=!0,ws(h)))}),qo(p,function(C){m[C]!==void 0||Ja(m,C)||(w[C]=!1,ws(h))});else if(_===5){if(r(h)&&(ws(h),w.length=!0),m.length<p.length)for(var S=m.length;S<p.length;S++)w[S]=!1;else for(var k=p.length;k<m.length;k++)w[k]=!0;for(var x=Math.min(m.length,p.length),v=0;v<x;v++)m.hasOwnProperty(v)||(w[v]=!0),w[v]===void 0&&u(m[v])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var kC,Ec,jw=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",KF=typeof Map!="undefined",QF=typeof Set!="undefined",TC=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Rb=jw?Symbol.for("immer-nothing"):((kC={})["immer-nothing"]=!0,kC),DC=jw?Symbol.for("immer-draftable"):"__$immer_draftable",pt=jw?Symbol.for("immer-state"):"__$immer_state",XF=""+Object.prototype.constructor,Za=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Pb=Object.getOwnPropertyDescriptors||function(e){var t={};return Za(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Cy={},Cc={get:function(e,t){if(t===pt)return e;var n=ko(e);if(!Ja(n,t))return function(i,s,o){var a,u=EC(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Qi(r)?r:r===R0(e.t,t)?(P0(e),e.o[t]=Ey(e.A.h,r,e)):r},has:function(e,t){return t in ko(e)},ownKeys:function(e){return Reflect.ownKeys(ko(e))},set:function(e,t,n){var r=EC(ko(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=R0(ko(e),t),s=i==null?void 0:i[pt];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Ob(n,i)&&(n!==void 0||Ja(e.t,t)))return!0;P0(e),ws(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return R0(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,P0(e),ws(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ko(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Rr(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Rr(12)}},bu={};qo(Cc,function(e,t){bu[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),bu.deleteProperty=function(e,t){return bu.set.call(this,e,t,void 0)},bu.set=function(e,t,n){return Cc.set.call(this,e[0],t,n,e[0])};var JF=function(){function e(n){var r=this;this.O=TC,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(S){var k=this;S===void 0&&(S=a);for(var x=arguments.length,v=Array(x>1?x-1:0),C=1;C<x;C++)v[C-1]=arguments[C];return u.produce(S,function(T){var I;return(I=s).call.apply(I,[k,T].concat(v))})}}var c;if(typeof s!="function"&&Rr(6),o!==void 0&&typeof o!="function"&&Rr(7),Qi(i)){var h=SC(r),p=Ey(r,i,void 0),m=!0;try{c=s(p),m=!1}finally{m?Wf(h):xy(h)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(S){return N0(h,o),O0(S,h)},function(S){throw Wf(h),S}):(N0(h,o),O0(c,h))}if(!i||typeof i!="object"){if((c=s(i))===void 0&&(c=i),c===Rb&&(c=void 0),r.D&&zw(c,!0),o){var w=[],_=[];ni("Patches").M(i,c,w,_),o(w,_)}return c}Rr(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(c){for(var h=arguments.length,p=Array(h>1?h-1:0),m=1;m<h;m++)p[m-1]=arguments[m];return r.produceWithPatches(c,function(w){return i.apply(void 0,[w].concat(p))})};var o,a,u=r.produce(i,s,function(c,h){o=c,a=h});return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(c){return[c,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Qi(n)||Rr(8),Xs(n)&&(n=GF(n));var r=SC(this),i=Ey(this,n,void 0);return i[pt].C=!0,xy(r),i},t.finishDraft=function(n,r){var i=n&&n[pt],s=i.A;return N0(s,r),O0(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!TC&&Rr(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=ni("Patches").$;return Xs(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),tr=new JF,Mb=tr.produce;tr.produceWithPatches.bind(tr);tr.setAutoFreeze.bind(tr);tr.setUseProxies.bind(tr);tr.applyPatches.bind(tr);tr.createDraft.bind(tr);tr.finishDraft.bind(tr);function kc(e){return kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kc(e)}function ZF(e,t){if(kc(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(kc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function e8(e){var t=ZF(e,"string");return kc(t)==="symbol"?t:String(t)}function t8(e,t,n){return t=e8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bC(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function IC(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bC(Object(n),!0).forEach(function(r){t8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bC(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fn(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var AC=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),M0=function(){return Math.random().toString(36).substring(7).split("").join(".")},qf={INIT:"@@redux/INIT"+M0(),REPLACE:"@@redux/REPLACE"+M0(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+M0()}};function n8(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Lb(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(fn(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(fn(1));return n(Lb)(e,t)}if(typeof e!="function")throw new Error(fn(2));var i=e,s=t,o=[],a=o,u=!1;function c(){a===o&&(a=o.slice())}function h(){if(u)throw new Error(fn(3));return s}function p(S){if(typeof S!="function")throw new Error(fn(4));if(u)throw new Error(fn(5));var k=!0;return c(),a.push(S),function(){if(!!k){if(u)throw new Error(fn(6));k=!1,c();var v=a.indexOf(S);a.splice(v,1),o=null}}}function m(S){if(!n8(S))throw new Error(fn(7));if(typeof S.type=="undefined")throw new Error(fn(8));if(u)throw new Error(fn(9));try{u=!0,s=i(s,S)}finally{u=!1}for(var k=o=a,x=0;x<k.length;x++){var v=k[x];v()}return S}function w(S){if(typeof S!="function")throw new Error(fn(10));i=S,m({type:qf.REPLACE})}function _(){var S,k=p;return S={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(fn(11));function C(){v.next&&v.next(h())}C();var T=k(C);return{unsubscribe:T}}},S[AC]=function(){return this},S}return m({type:qf.INIT}),r={dispatch:m,subscribe:p,getState:h,replaceReducer:w},r[AC]=_,r}function r8(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:qf.INIT});if(typeof r=="undefined")throw new Error(fn(12));if(typeof n(void 0,{type:qf.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(fn(13))})}function i8(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{r8(n)}catch(a){o=a}return function(u,c){if(u===void 0&&(u={}),o)throw o;for(var h=!1,p={},m=0;m<s.length;m++){var w=s[m],_=n[w],S=u[w],k=_(S,c);if(typeof k=="undefined")throw c&&c.type,new Error(fn(14));p[w]=k,h=h||k!==S}return h=h||s.length!==Object.keys(u).length,h?p:u}}function Kf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function s8(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(fn(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(u){return u(o)});return s=Kf.apply(void 0,a)(i.dispatch),IC(IC({},i),{},{dispatch:s})}}}function $b(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var Fb=$b();Fb.withExtraArgument=$b;var NC=Fb,Ub=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),o8=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(h){return u([c,h])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(h){c=[6,h],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},_l=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},a8=Object.defineProperty,l8=Object.defineProperties,u8=Object.getOwnPropertyDescriptors,OC=Object.getOwnPropertySymbols,c8=Object.prototype.hasOwnProperty,d8=Object.prototype.propertyIsEnumerable,RC=function(e,t,n){return t in e?a8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},zs=function(e,t){for(var n in t||(t={}))c8.call(t,n)&&RC(e,n,t[n]);if(OC)for(var r=0,i=OC(t);r<i.length;r++){var n=i[r];d8.call(t,n)&&RC(e,n,t[n])}return e},L0=function(e,t){return l8(e,u8(t))},h8=function(e,t,n){return new Promise(function(r,i){var s=function(u){try{a(n.next(u))}catch(c){i(c)}},o=function(u){try{a(n.throw(u))}catch(c){i(c)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(s,o)};a((n=n.apply(e,t)).next())})},f8=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Kf:Kf.apply(null,arguments)};function p8(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var m8=function(e){Ub(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,_l([void 0],n[0].concat(this)))):new(t.bind.apply(t,_l([void 0],n.concat(this))))},t}(Array),g8=function(e){Ub(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,_l([void 0],n[0].concat(this)))):new(t.bind.apply(t,_l([void 0],n.concat(this))))},t}(Array);function ky(e){return Qi(e)?Mb(e,function(){}):e}function v8(e){return typeof e=="boolean"}function y8(){return function(t){return w8(t)}}function w8(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new m8;return n&&(v8(n)?r.push(NC):r.push(NC.withExtraArgument(n.extraArgument))),r}var _8=!0;function S8(e){var t=y8(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,u=a===void 0?!0:a,c=n.preloadedState,h=c===void 0?void 0:c,p=n.enhancers,m=p===void 0?void 0:p,w;if(typeof i=="function")w=i;else if(p8(i))w=i8(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(t));var S=s8.apply(void 0,_),k=Kf;u&&(k=f8(zs({trace:!_8},typeof u=="object"&&u)));var x=new g8(S),v=x;Array.isArray(m)?v=_l([S],m):typeof m=="function"&&(v=m(x));var C=k.apply(void 0,v);return Lb(w,h,C)}function Vs(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return zs(zs({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Bb(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function x8(e){return typeof e=="function"}function E8(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Bb(t):[t,n,r],s=i[0],o=i[1],a=i[2],u;if(x8(e))u=function(){return ky(e())};else{var c=ky(e);u=function(){return c}}function h(p,m){p===void 0&&(p=u());var w=_l([s[m.type]],o.filter(function(_){var S=_.matcher;return S(m)}).map(function(_){var S=_.reducer;return S}));return w.filter(function(_){return!!_}).length===0&&(w=[a]),w.reduce(function(_,S){if(S)if(Xs(_)){var k=_,x=S(k,m);return x===void 0?_:x}else{if(Qi(_))return Mb(_,function(v){return S(v,m)});var x=S(_,m);if(x===void 0){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return x}return _},p)}return h.getInitialState=u,h}function C8(e,t){return e+"/"+t}function aa(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:ky(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(h){var p=r[h],m=C8(t,h),w,_;"reducer"in p?(w=p.reducer,_=p.prepare):w=p,s[h]=w,o[m]=w,a[h]=_?Vs(m,_):Vs(m)});function u(){var h=typeof e.extraReducers=="function"?Bb(e.extraReducers):[e.extraReducers],p=h[0],m=p===void 0?{}:p,w=h[1],_=w===void 0?[]:w,S=h[2],k=S===void 0?void 0:S,x=zs(zs({},m),o);return E8(n,function(v){for(var C in x)v.addCase(C,x[C]);for(var T=0,I=_;T<I.length;T++){var R=I[T];v.addMatcher(R.matcher,R.reducer)}k&&v.addDefaultCase(k)})}var c;return{name:t,reducer:function(h,p){return c||(c=u()),c(h,p)},actions:a,caseReducers:s,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var k8="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",T8=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=k8[Math.random()*64|0];return t},D8=["name","message","stack","code"],$0=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),PC=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),b8=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=D8;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},ar=function(){function e(t,n,r){var i=Vs(t+"/fulfilled",function(c,h,p,m){return{payload:c,meta:L0(zs({},m||{}),{arg:p,requestId:h,requestStatus:"fulfilled"})}}),s=Vs(t+"/pending",function(c,h,p){return{payload:void 0,meta:L0(zs({},p||{}),{arg:h,requestId:c,requestStatus:"pending"})}}),o=Vs(t+"/rejected",function(c,h,p,m,w){return{payload:m,error:(r&&r.serializeError||b8)(c||"Rejected"),meta:L0(zs({},w||{}),{arg:p,requestId:h,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(h,p,m){var w=r!=null&&r.idGenerator?r.idGenerator(c):T8(),_=new a,S;function k(v){S=v,_.abort()}var x=function(){return h8(this,null,function(){var v,C,T,I,R,A,O;return o8(this,function(Z){switch(Z.label){case 0:return Z.trys.push([0,4,,5]),I=(v=r==null?void 0:r.condition)==null?void 0:v.call(r,c,{getState:p,extra:m}),A8(I)?[4,I]:[3,2];case 1:I=Z.sent(),Z.label=2;case 2:if(I===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return R=new Promise(function(F,j){return _.signal.addEventListener("abort",function(){return j({name:"AbortError",message:S||"Aborted"})})}),h(s(w,c,(C=r==null?void 0:r.getPendingMeta)==null?void 0:C.call(r,{requestId:w,arg:c},{getState:p,extra:m}))),[4,Promise.race([R,Promise.resolve(n(c,{dispatch:h,getState:p,extra:m,requestId:w,signal:_.signal,abort:k,rejectWithValue:function(F,j){return new $0(F,j)},fulfillWithValue:function(F,j){return new PC(F,j)}})).then(function(F){if(F instanceof $0)throw F;return F instanceof PC?i(F.payload,w,c,F.meta):i(F,w,c)})])];case 3:return T=Z.sent(),[3,5];case 4:return A=Z.sent(),T=A instanceof $0?o(null,w,c,A.payload,A.meta):o(A,w,c),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(T)&&T.meta.condition,O||h(T),[2,T]}})})}();return Object.assign(x,{abort:k,requestId:w,arg:c,unwrap:function(){return x.then(I8)}})}}return Object.assign(u,{pending:s,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function I8(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function A8(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var N8=function(e){return e&&typeof e.match=="function"},zb=function(e,t){return N8(e)?e.match(t):e(t)};function O8(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.some(function(r){return zb(r,n)})}}function MC(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.every(function(r){return zb(r,n)})}}function R8(e,t){if(!e||!e.meta)return!1;var n=typeof e.meta.requestId=="string",r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function Vb(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Ty(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return R8(n,["rejected"])}:Vb(e)?function(n){var r=e.map(function(s){return s.rejected}),i=O8.apply(void 0,r);return i(n)}:Ty()(e[0])}function wm(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return e.length===0?function(r){var i=MC(Ty.apply(void 0,e),n);return i(r)}:Vb(e)?function(r){var i=MC(Ty.apply(void 0,e),n);return i(r)}:wm()(e[0])}var Yw="listenerMiddleware";Vs(Yw+"/add");Vs(Yw+"/removeAll");Vs(Yw+"/remove");var LC;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);qF();/**
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
 */const jb=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},P8=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Yb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[h],n[p],n[m],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jb(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):P8(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new M8;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),p!==64){const _=c<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class M8 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L8=function(e){const t=jb(e);return Yb.encodeByteArray(t,!0)},Qf=function(e){return L8(e).replace(/\./g,"")},Wb=function(e){try{return Yb.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function $8(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const F8=()=>$8().__FIREBASE_DEFAULTS__,U8=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},B8=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Wb(e[1]);return t&&JSON.parse(t)},_m=()=>{try{return F8()||U8()||B8()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Hb=e=>{var t,n;return(n=(t=_m())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Gb=e=>{const t=Hb(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},z8=()=>{var e;return(e=_m())===null||e===void 0?void 0:e.config},qb=e=>{var t;return(t=_m())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class V8{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Kb(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Qf(JSON.stringify(n)),Qf(JSON.stringify(o)),a].join(".")}/**
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
 */function En(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function j8(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function Y8(){var e;const t=(e=_m())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function W8(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function H8(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G8(){const e=En();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function q8(){try{return typeof indexedDB=="object"}catch{return!1}}function K8(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Q8="FirebaseError";class pi extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Q8,Object.setPrototypeOf(this,pi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sd.prototype.create)}}class sd{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?X8(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pi(i,a,r)}}function X8(e,t){return e.replace(J8,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const J8=/\{\$([^}]+)}/g;function Z8(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Xf(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if($C(s)&&$C(o)){if(!Xf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $C(e){return e!==null&&typeof e=="object"}/**
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
 */function od(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Iu(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Au(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function e9(e,t){const n=new t9(e,t);return n.subscribe.bind(n)}class t9{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");n9(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=F0),i.error===void 0&&(i.error=F0),i.complete===void 0&&(i.complete=F0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n9(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function F0(){}/**
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
 */class r9{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new V8;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(s9(t))try{this.getOrInitializeService({instanceIdentifier:To})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=To){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=To){return this.instances.has(t)}getOptions(t=To){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:i9(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=To){return this.component?this.component.multipleInstances?t:To:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function i9(e){return e===To?void 0:e}function s9(e){return e.instantiationMode==="EAGER"}/**
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
 */class o9{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new r9(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(je||(je={}));const a9={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},l9=je.INFO,u9={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},c9=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=u9[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ww{constructor(t){this.name=t,this._logLevel=l9,this._logHandler=c9,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?a9[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...t),this._logHandler(this,je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...t),this._logHandler(this,je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,je.INFO,...t),this._logHandler(this,je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,je.WARN,...t),this._logHandler(this,je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...t),this._logHandler(this,je.ERROR,...t)}}const d9=(e,t)=>t.some(n=>e instanceof n);let FC,UC;function h9(){return FC||(FC=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f9(){return UC||(UC=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qb=new WeakMap,Dy=new WeakMap,Xb=new WeakMap,U0=new WeakMap,Hw=new WeakMap;function p9(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(js(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Qb.set(n,e)}).catch(()=>{}),Hw.set(t,e),t}function m9(e){if(Dy.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Dy.set(e,t)}let by={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xb.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return js(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function g9(e){by=e(by)}function v9(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(B0(this),t,...n);return Xb.set(r,t.sort?t.sort():[t]),js(r)}:f9().includes(e)?function(...t){return e.apply(B0(this),t),js(Qb.get(this))}:function(...t){return js(e.apply(B0(this),t))}}function y9(e){return typeof e=="function"?v9(e):(e instanceof IDBTransaction&&m9(e),d9(e,h9())?new Proxy(e,by):e)}function js(e){if(e instanceof IDBRequest)return p9(e);if(U0.has(e))return U0.get(e);const t=y9(e);return t!==e&&(U0.set(e,t),Hw.set(t,e)),t}const B0=e=>Hw.get(e);function w9(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=js(o);return r&&o.addEventListener("upgradeneeded",u=>{r(js(o.result),u.oldVersion,u.newVersion,js(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _9=["get","getKey","getAll","getAllKeys","count"],S9=["put","add","delete","clear"],z0=new Map;function BC(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(z0.get(t))return z0.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_9.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return z0.set(t,s),s}g9(e=>({...e,get:(t,n,r)=>BC(t,n)||e.get(t,n,r),has:(t,n)=>!!BC(t,n)||e.has(t,n)}));/**
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
 */class x9{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E9(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E9(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Iy="@firebase/app",zC="0.9.9";/**
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
 */const Ko=new Ww("@firebase/app"),C9="@firebase/app-compat",k9="@firebase/analytics-compat",T9="@firebase/analytics",D9="@firebase/app-check-compat",b9="@firebase/app-check",I9="@firebase/auth",A9="@firebase/auth-compat",N9="@firebase/database",O9="@firebase/database-compat",R9="@firebase/functions",P9="@firebase/functions-compat",M9="@firebase/installations",L9="@firebase/installations-compat",$9="@firebase/messaging",F9="@firebase/messaging-compat",U9="@firebase/performance",B9="@firebase/performance-compat",z9="@firebase/remote-config",V9="@firebase/remote-config-compat",j9="@firebase/storage",Y9="@firebase/storage-compat",W9="@firebase/firestore",H9="@firebase/firestore-compat",G9="firebase",q9="9.21.0";/**
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
 */const Ay="[DEFAULT]",K9={[Iy]:"fire-core",[C9]:"fire-core-compat",[T9]:"fire-analytics",[k9]:"fire-analytics-compat",[b9]:"fire-app-check",[D9]:"fire-app-check-compat",[I9]:"fire-auth",[A9]:"fire-auth-compat",[N9]:"fire-rtdb",[O9]:"fire-rtdb-compat",[R9]:"fire-fn",[P9]:"fire-fn-compat",[M9]:"fire-iid",[L9]:"fire-iid-compat",[$9]:"fire-fcm",[F9]:"fire-fcm-compat",[U9]:"fire-perf",[B9]:"fire-perf-compat",[z9]:"fire-rc",[V9]:"fire-rc-compat",[j9]:"fire-gcs",[Y9]:"fire-gcs-compat",[W9]:"fire-fst",[H9]:"fire-fst-compat","fire-js":"fire-js",[G9]:"fire-js-all"};/**
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
 */const Jf=new Map,Ny=new Map;function Q9(e,t){try{e.container.addComponent(t)}catch(n){Ko.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qo(e){const t=e.name;if(Ny.has(t))return Ko.debug(`There were multiple attempts to register component ${t}.`),!1;Ny.set(t,e);for(const n of Jf.values())Q9(n,e);return!0}function Sm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const X9={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ys=new sd("app","Firebase",X9);/**
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
 */class J9{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ys.create("app-deleted",{appName:this._name})}}/**
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
 */const la=q9;function Jb(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ay,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ys.create("bad-app-name",{appName:String(i)});if(n||(n=z8()),!n)throw Ys.create("no-options");const s=Jf.get(i);if(s){if(Xf(n,s.options)&&Xf(r,s.config))return s;throw Ys.create("duplicate-app",{appName:i})}const o=new o9(i);for(const u of Ny.values())o.addComponent(u);const a=new J9(n,r,o);return Jf.set(i,a),a}function Gw(e=Ay){const t=Jf.get(e);if(!t&&e===Ay)return Jb();if(!t)throw Ys.create("no-app",{appName:e});return t}function ri(e,t,n){var r;let i=(r=K9[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ko.warn(a.join(" "));return}Qo(new Js(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Z9="firebase-heartbeat-database",eU=1,Tc="firebase-heartbeat-store";let V0=null;function Zb(){return V0||(V0=w9(Z9,eU,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Tc)}}}).catch(e=>{throw Ys.create("idb-open",{originalErrorMessage:e.message})})),V0}async function tU(e){try{return(await Zb()).transaction(Tc).objectStore(Tc).get(eI(e))}catch(t){if(t instanceof pi)Ko.warn(t.message);else{const n=Ys.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ko.warn(n.message)}}}async function VC(e,t){try{const r=(await Zb()).transaction(Tc,"readwrite");return await r.objectStore(Tc).put(t,eI(e)),r.done}catch(n){if(n instanceof pi)Ko.warn(n.message);else{const r=Ys.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ko.warn(r.message)}}}function eI(e){return`${e.name}!${e.options.appId}`}/**
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
 */const nU=1024,rU=30*24*60*60*1e3;class iU{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oU(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jC();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=rU}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jC(),{heartbeatsToSend:n,unsentEntries:r}=sU(this._heartbeatsCache.heartbeats),i=Qf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jC(){return new Date().toISOString().substring(0,10)}function sU(e,t=nU){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),YC(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),YC(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oU{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q8()?K8().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tU(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return VC(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return VC(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function YC(e){return Qf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function aU(e){Qo(new Js("platform-logger",t=>new x9(t),"PRIVATE")),Qo(new Js("heartbeat",t=>new iU(t),"PRIVATE")),ri(Iy,zC,e),ri(Iy,zC,"esm2017"),ri("fire-js","")}aU("");function qw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function tI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lU=tI,nI=new sd("auth","Firebase",tI());/**
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
 */const Zf=new Ww("@firebase/auth");function uU(e,...t){Zf.logLevel<=je.WARN&&Zf.warn(`Auth (${la}): ${e}`,...t)}function Zh(e,...t){Zf.logLevel<=je.ERROR&&Zf.error(`Auth (${la}): ${e}`,...t)}/**
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
 */function Sr(e,...t){throw Kw(e,...t)}function ii(e,...t){return Kw(e,...t)}function rI(e,t,n){const r=Object.assign(Object.assign({},lU()),{[t]:n});return new sd("auth","Firebase",r).create(t,{appName:e.name})}function cU(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Sr(e,"argument-error"),rI(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kw(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return nI.create(e,...t)}function ye(e,t,...n){if(!e)throw Kw(t,...n)}function Pi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zh(t),new Error(t)}function Xi(e,t){e||Pi(t)}/**
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
 */function Oy(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function dU(){return WC()==="http:"||WC()==="https:"}function WC(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function hU(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dU()||W8()||"connection"in navigator)?navigator.onLine:!0}function fU(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ad{constructor(t,n){this.shortDelay=t,this.longDelay=n,Xi(n>t,"Short delay should be less than long delay!"),this.isMobile=j8()||H8()}get(){return hU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qw(e,t){Xi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class iI{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mU=new ad(3e4,6e4);function Bl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zl(e,t,n,r,i={}){return sI(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=od(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),iI.fetch()(oI(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function sI(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},pU),t);try{const i=new gU(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kh(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw kh(e,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw kh(e,"email-already-in-use",o);if(u==="USER_DISABLED")throw kh(e,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rI(e,h,c);Sr(e,h)}}catch(i){if(i instanceof pi)throw i;Sr(e,"network-request-failed",{message:String(i)})}}async function ld(e,t,n,r,i={}){const s=await zl(e,t,n,r,i);return"mfaPendingCredential"in s&&Sr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function oI(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Qw(e.config,i):`${e.config.apiScheme}://${i}`}class gU{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ii(this.auth,"network-request-failed")),mU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kh(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ii(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function vU(e,t){return zl(e,"POST","/v1/accounts:delete",t)}async function yU(e,t){return zl(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Hu(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wU(e,t=!1){const n=Rt(e),r=await n.getIdToken(t),i=Xw(r);ye(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hu(j0(i.auth_time)),issuedAtTime:Hu(j0(i.iat)),expirationTime:Hu(j0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function j0(e){return Number(e)*1e3}function Xw(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Zh("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wb(n);return i?JSON.parse(i):(Zh("Failed to decode base64 JWT payload"),null)}catch(i){return Zh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _U(e){const t=Xw(e);return ye(t,"internal-error"),ye(typeof t.exp!="undefined","internal-error"),ye(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Dc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pi&&SU(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function SU({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class xU{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aI{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hu(this.lastLoginAt),this.creationTime=Hu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ep(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Dc(e,yU(n,{idToken:r}));ye(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?kU(s.providerUserInfo):[],a=CU(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aI(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function EU(e){const t=Rt(e);await ep(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function CU(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function kU(e){return e.map(t=>{var{providerId:n}=t,r=qw(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TU(e,t){const n=await sI(e,{},async()=>{const r=od({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=oI(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class bc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ye(t.idToken,"internal-error"),ye(typeof t.idToken!="undefined","internal-error"),ye(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):_U(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ye(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TU(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bc;return r&&(ye(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ye(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ye(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bc,this.toJSON())}_performRefresh(){return Pi("not implemented")}}/**
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
 */function ps(e,t){ye(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class $o{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=qw(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Dc(this,this.stsTokenManager.getToken(this.auth,t));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return wU(this,t)}reload(){return EU(this)}_assign(t){this!==t&&(ye(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $o(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ep(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Dc(this,vU(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:T,isAnonymous:I,providerData:R,stsTokenManager:A}=n;ye(C&&A,t,"internal-error");const O=bc.fromJSON(this.name,A);ye(typeof C=="string",t,"internal-error"),ps(p,t.name),ps(m,t.name),ye(typeof T=="boolean",t,"internal-error"),ye(typeof I=="boolean",t,"internal-error"),ps(w,t.name),ps(_,t.name),ps(S,t.name),ps(k,t.name),ps(x,t.name),ps(v,t.name);const Z=new $o({uid:C,auth:t,email:m,emailVerified:T,displayName:p,isAnonymous:I,photoURL:_,phoneNumber:w,tenantId:S,stsTokenManager:O,createdAt:x,lastLoginAt:v});return R&&Array.isArray(R)&&(Z.providerData=R.map(F=>Object.assign({},F))),k&&(Z._redirectEventId=k),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new bc;i.updateFromServerResponse(n);const s=new $o({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ep(s),s}}/**
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
 */const HC=new Map;function Mi(e){Xi(e instanceof Function,"Expected a class definition");let t=HC.get(e);return t?(Xi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,HC.set(e,t),t)}/**
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
 */class lI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}lI.type="NONE";const GC=lI;/**
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
 */function ef(e,t,n){return`firebase:${e}:${t}:${n}`}class el{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ef(this.userKey,i.apiKey,s),this.fullPersistenceKey=ef("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$o._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new el(Mi(GC),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mi(GC);const o=ef(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=$o._fromJSON(t,h);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new el(s,t,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new el(s,t,r))}}/**
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
 */function qC(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(uI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fI(t))return"Blackberry";if(pI(t))return"Webos";if(Jw(t))return"Safari";if((t.includes("chrome/")||cI(t))&&!t.includes("edge/"))return"Chrome";if(hI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uI(e=En()){return/firefox\//i.test(e)}function Jw(e=En()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cI(e=En()){return/crios\//i.test(e)}function dI(e=En()){return/iemobile/i.test(e)}function hI(e=En()){return/android/i.test(e)}function fI(e=En()){return/blackberry/i.test(e)}function pI(e=En()){return/webos/i.test(e)}function xm(e=En()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function DU(e=En()){var t;return xm(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function bU(){return G8()&&document.documentMode===10}function mI(e=En()){return xm(e)||hI(e)||pI(e)||fI(e)||/windows phone/i.test(e)||dI(e)}function IU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gI(e,t=[]){let n;switch(e){case"Browser":n=qC(En());break;case"Worker":n=`${qC(En())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${la}/${r}`}async function vI(e,t){return zl(e,"GET","/v2/recaptchaConfig",Bl(e,t))}function KC(e){return e!==void 0&&e.enterprise!==void 0}class yI{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function AU(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function wI(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ii("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AU().appendChild(r)})}function NU(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const OU="https://www.google.com/recaptcha/enterprise.js?render=",RU="recaptcha-enterprise",PU="NO_RECAPTCHA";class _I{constructor(t){this.type=RU,this.auth=ua(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{vI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new yI(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;KC(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(PU)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&KC(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wI(OU+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function tp(e,t,n,r=!1){const i=new _I(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class MU{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const u=t(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class LU{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new QC(this),this.idTokenSubscription=new QC(this),this.beforeStateQueue=new MU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Mi(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await el.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ep(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fU()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Rt(t):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ye(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mi(t))})}async initializeRecaptchaConfig(){const t=await vI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new yI(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new _I(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new sd("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Mi(t)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await el.create(this,[Mi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ye(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=gI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&uU(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ua(e){return Rt(e)}class QC{constructor(t){this.auth=t,this.observer=null,this.addObserver=e9(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function $U(e,t){const n=Sm(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xf(s,t!=null?t:{}))return i;Sr(i,"already-initialized")}return n.initialize({options:t})}function FU(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mi);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function UU(e,t,n){const r=ua(e);ye(r._canInitEmulator,r,"emulator-config-failed"),ye(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=SI(t),{host:o,port:a}=BU(t),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zU()}function SI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function BU(e){const t=SI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:XC(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:XC(o)}}}function XC(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function zU(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Zw{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Pi("not implemented")}_getIdTokenResponse(t){return Pi("not implemented")}_linkToIdToken(t,n){return Pi("not implemented")}_getReauthenticationResolver(t){return Pi("not implemented")}}async function VU(e,t){return zl(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Y0(e,t){return ld(e,"POST","/v1/accounts:signInWithPassword",Bl(e,t))}/**
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
 */async function jU(e,t){return ld(e,"POST","/v1/accounts:signInWithEmailLink",Bl(e,t))}async function YU(e,t){return ld(e,"POST","/v1/accounts:signInWithEmailLink",Bl(e,t))}/**
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
 */class Ic extends Zw{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ic(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ic(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await tp(t,r,"signInWithPassword");return Y0(t,i)}else return Y0(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await tp(t,r,"signInWithPassword");return Y0(t,s)}else return Promise.reject(i)});case"emailLink":return jU(t,{email:this._email,oobCode:this._password});default:Sr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return VU(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YU(t,{idToken:n,email:this._email,oobCode:this._password});default:Sr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function tl(e,t){return ld(e,"POST","/v1/accounts:signInWithIdp",Bl(e,t))}/**
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
 */const WU="http://localhost";class Xo extends Zw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Xo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Sr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=qw(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xo(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return tl(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,tl(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,tl(t,n)}buildRequest(){const t={requestUri:WU,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=od(n)}return t}}/**
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
 */function HU(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GU(e){const t=Iu(Au(e)).link,n=t?Iu(Au(t)).deep_link_id:null,r=Iu(Au(e)).deep_link_id;return(r?Iu(Au(r)).link:null)||r||n||t||e}class e_{constructor(t){var n,r,i,s,o,a;const u=Iu(Au(t)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=HU((i=u.mode)!==null&&i!==void 0?i:null);ye(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=GU(t);try{return new e_(n)}catch{return null}}}/**
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
 */class Vl{constructor(){this.providerId=Vl.PROVIDER_ID}static credential(t,n){return Ic._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=e_.parseLink(n);return ye(r,"argument-error"),Ic._fromEmailAndCode(t,r.code,r.tenantId)}}Vl.PROVIDER_ID="password";Vl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class t_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ud extends t_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class _s extends ud{constructor(){super("facebook.com")}static credential(t){return Xo._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _s.credentialFromTaggedObject(t)}static credentialFromError(t){return _s.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _s.credential(t.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
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
 */class Ni extends ud{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Xo._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ni.credentialFromTaggedObject(t)}static credentialFromError(t){return Ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ni.credential(n,r)}catch{return null}}}Ni.GOOGLE_SIGN_IN_METHOD="google.com";Ni.PROVIDER_ID="google.com";/**
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
 */class Ss extends ud{constructor(){super("github.com")}static credential(t){return Xo._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ss.credentialFromTaggedObject(t)}static credentialFromError(t){return Ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ss.credential(t.oauthAccessToken)}catch{return null}}}Ss.GITHUB_SIGN_IN_METHOD="github.com";Ss.PROVIDER_ID="github.com";/**
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
 */class xs extends ud{constructor(){super("twitter.com")}static credential(t,n){return Xo._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xs.credentialFromTaggedObject(t)}static credentialFromError(t){return xs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return xs.credential(n,r)}catch{return null}}}xs.TWITTER_SIGN_IN_METHOD="twitter.com";xs.PROVIDER_ID="twitter.com";/**
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
 */async function W0(e,t){return ld(e,"POST","/v1/accounts:signUp",Bl(e,t))}/**
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
 */class Jo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await $o._fromIdTokenResponse(t,r,i),o=JC(r);return new Jo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=JC(r);return new Jo({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function JC(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class np extends pi{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,np.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new np(t,n,r,i)}}function xI(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?np._fromErrorAndOperation(e,s,t,r):s})}async function qU(e,t,n=!1){const r=await Dc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Jo._forOperation(e,"link",r)}/**
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
 */async function KU(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Dc(e,xI(r,i,t,e),n);ye(s.idToken,r,"internal-error");const o=Xw(s.idToken);ye(o,r,"internal-error");const{sub:a}=o;return ye(e.uid===a,r,"user-mismatch"),Jo._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sr(r,"user-mismatch"),s}}/**
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
 */async function EI(e,t,n=!1){const r="signIn",i=await xI(e,r,t),s=await Jo._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function QU(e,t){return EI(ua(e),t)}async function XU(e,t,n){var r;const i=ua(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await tp(i,s,"signUpPassword");o=W0(i,c)}else o=W0(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await tp(i,s,"signUpPassword");return W0(i,h)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),u=await Jo._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function JU(e,t,n){return QU(Rt(e),Vl.credential(t,n))}/**
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
 */function CI(e,t){return Rt(e).setPersistence(t)}function ZU(e,t,n,r){return Rt(e).onIdTokenChanged(t,n,r)}function e7(e,t,n){return Rt(e).beforeAuthStateChanged(t,n)}function t7(e){return Rt(e).signOut()}const rp="__sak";/**
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
 */class kI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rp,"1"),this.storage.removeItem(rp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function n7(){const e=En();return Jw(e)||xm(e)}const r7=1e3,i7=10;class TI extends kI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=n7()&&IU(),this.fallbackToPolling=mI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bU()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,i7):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},r7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}TI.type="LOCAL";const n_=TI;/**
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
 */class DI extends kI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}DI.type="SESSION";const bI=DI;/**
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
 */function s7(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Em{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Em(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await s7(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Em.receivers=[];/**
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
 */function r_(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class o7{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=r_("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function si(){return window}function a7(e){si().location.href=e}/**
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
 */function II(){return typeof si().WorkerGlobalScope!="undefined"&&typeof si().importScripts=="function"}async function l7(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function u7(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function c7(){return II()?self:null}/**
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
 */const AI="firebaseLocalStorageDb",d7=1,ip="firebaseLocalStorage",NI="fbase_key";class cd{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cm(e,t){return e.transaction([ip],t?"readwrite":"readonly").objectStore(ip)}function h7(){const e=indexedDB.deleteDatabase(AI);return new cd(e).toPromise()}function Ry(){const e=indexedDB.open(AI,d7);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ip,{keyPath:NI})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ip)?t(r):(r.close(),await h7(),t(await Ry()))})})}async function ZC(e,t,n){const r=Cm(e,!0).put({[NI]:t,value:n});return new cd(r).toPromise()}async function f7(e,t){const n=Cm(e,!1).get(t),r=await new cd(n).toPromise();return r===void 0?null:r.value}function ek(e,t){const n=Cm(e,!0).delete(t);return new cd(n).toPromise()}const p7=800,m7=3;class OI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ry(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>m7)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return II()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Em._getInstance(c7()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await l7(),!this.activeServiceWorker)return;this.sender=new o7(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||u7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ry();return await ZC(t,rp,"1"),await ek(t,rp),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ZC(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>f7(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ek(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Cm(i,!1).getAll();return new cd(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),p7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OI.type="LOCAL";const g7=OI;new ad(3e4,6e4);/**
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
 */function RI(e,t){return t?Mi(t):(ye(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class i_ extends Zw{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return tl(t,this._buildIdpRequest())}_linkToIdToken(t,n){return tl(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return tl(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function v7(e){return EI(e.auth,new i_(e),e.bypassAuthState)}function y7(e){const{auth:t,user:n}=e;return ye(n,t,"internal-error"),KU(n,new i_(e),e.bypassAuthState)}async function w7(e){const{auth:t,user:n}=e;return ye(n,t,"internal-error"),qU(n,new i_(e),e.bypassAuthState)}/**
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
 */class PI{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return v7;case"linkViaPopup":case"linkViaRedirect":return w7;case"reauthViaPopup":case"reauthViaRedirect":return y7;default:Sr(this.auth,"internal-error")}}resolve(t){Xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _7=new ad(2e3,1e4);async function S7(e,t,n){const r=ua(e);cU(e,t,t_);const i=RI(r,n);return new Ao(r,"signInViaPopup",t,i).executeNotNull()}class Ao extends PI{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ao.currentPopupAction&&Ao.currentPopupAction.cancel(),Ao.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ye(t,this.auth,"internal-error"),t}async onExecution(){Xi(this.filter.length===1,"Popup operations only handle one event");const t=r_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ao.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_7.get())};t()}}Ao.currentPopupAction=null;/**
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
 */const x7="pendingRedirect",tf=new Map;class E7 extends PI{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=tf.get(this.auth._key());if(!t){try{const r=await C7(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}tf.set(this.auth._key(),t)}return this.bypassAuthState||tf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C7(e,t){const n=D7(t),r=T7(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function k7(e,t){tf.set(e._key(),t)}function T7(e){return Mi(e._redirectPersistence)}function D7(e){return ef(x7,e.config.apiKey,e.name)}async function b7(e,t,n=!1){const r=ua(e),i=RI(r,t),o=await new E7(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const I7=10*60*1e3;class A7{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!N7(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!MI(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ii(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=I7&&this.cachedEventUids.clear(),this.cachedEventUids.has(tk(t))}saveEventToCache(t){this.cachedEventUids.add(tk(t)),this.lastProcessedEventTime=Date.now()}}function tk(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function MI({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function N7(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MI(e);default:return!1}}/**
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
 */async function O7(e,t={}){return zl(e,"GET","/v1/projects",t)}/**
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
 */const R7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P7=/^https?/;async function M7(e){if(e.config.emulator)return;const{authorizedDomains:t}=await O7(e);for(const n of t)try{if(L7(n))return}catch{}Sr(e,"unauthorized-domain")}function L7(e){const t=Oy(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P7.test(n))return!1;if(R7.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $7=new ad(3e4,6e4);function nk(){const e=si().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function F7(e){return new Promise((t,n)=>{var r,i,s;function o(){nk(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nk(),n(ii(e,"network-request-failed"))},timeout:$7.get()})}if(!((i=(r=si().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=si().gapi)===null||s===void 0)&&s.load)o();else{const a=NU("iframefcb");return si()[a]=()=>{gapi.load?o():n(ii(e,"network-request-failed"))},wI(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(t=>{throw nf=null,t})}let nf=null;function U7(e){return nf=nf||F7(e),nf}/**
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
 */const B7=new ad(5e3,15e3),z7="__/auth/iframe",V7="emulator/auth/iframe",j7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W7(e){const t=e.config;ye(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qw(t,V7):`https://${e.config.authDomain}/${z7}`,r={apiKey:t.apiKey,appName:e.name,v:la},i=Y7.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${od(r).slice(1)}`}async function H7(e){const t=await U7(e),n=si().gapi;return ye(n,e,"internal-error"),t.open({where:document.body,url:W7(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ii(e,"network-request-failed"),a=si().setTimeout(()=>{s(o)},B7.get());function u(){si().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const G7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q7=500,K7=600,Q7="_blank",X7="http://localhost";class rk{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function J7(e,t,n,r=q7,i=K7){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},G7),{width:r.toString(),height:i.toString(),top:s,left:o}),c=En().toLowerCase();n&&(a=cI(c)?Q7:n),uI(c)&&(t=t||X7,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[w,_])=>`${m}${w}=${_},`,"");if(DU(c)&&a!=="_self")return Z7(t||"",a),new rk(null);const p=window.open(t||"",a,h);ye(p,e,"popup-blocked");try{p.focus()}catch{}return new rk(p)}function Z7(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eB="__/auth/handler",tB="emulator/auth/handler",nB=encodeURIComponent("fac");async function ik(e,t,n,r,i,s){ye(e.config.authDomain,e,"auth-domain-config-required"),ye(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:la,eventId:i};if(t instanceof t_){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Z8(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(t instanceof ud){const h=t.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await e._getAppCheckToken(),c=u?`#${nB}=${encodeURIComponent(u)}`:"";return`${rB(e)}?${od(a).slice(1)}${c}`}function rB({config:e}){return e.emulator?Qw(e,tB):`https://${e.authDomain}/${eB}`}/**
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
 */const H0="webStorageSupport";class iB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bI,this._completeRedirectFn=b7,this._overrideRedirectResult=k7}async _openPopup(t,n,r,i){var s;Xi((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ik(t,n,r,Oy(),i);return J7(t,o,r_())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await ik(t,n,r,Oy(),i);return a7(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await H7(t),r=new A7(t);return n.register("authEvent",i=>(ye(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(H0,{type:H0},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[H0];o!==void 0&&n(!!o),Sr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=M7(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return mI()||Jw()||xm()}}const sB=iB;var sk="@firebase/auth",ok="0.23.1";/**
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
 */class oB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lB(e){Qo(new Js("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),ye(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gI(e)},c=new LU(r,i,s,u);return FU(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Qo(new Js("auth-internal",t=>{const n=ua(t.getProvider("auth").getImmediate());return(r=>new oB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ri(sk,ok,aB(e)),ri(sk,ok,"esm2017")}/**
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
 */const uB=5*60,cB=qb("authIdTokenMaxAge")||uB;let ak=null;const dB=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cB)return;const i=n==null?void 0:n.token;ak!==i&&(ak=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hB(e=Gw()){const t=Sm(e,"auth");if(t.isInitialized())return t.getImmediate();const n=$U(e,{popupRedirectResolver:sB,persistence:[g7,n_,bI]}),r=qb("authTokenSyncURL");if(r){const s=dB(r);e7(n,s,()=>s(n.currentUser)),ZU(n,o=>s(o))}const i=Hb("auth");return i&&UU(n,`http://${i}`),n}lB("Browser");var fB="firebase",pB="9.21.0";/**
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
 */ri(fB,pB,"app");var mB=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},re,s_=s_||{},xe=mB||self;function sp(){}function km(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function dd(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function gB(e){return Object.prototype.hasOwnProperty.call(e,G0)&&e[G0]||(e[G0]=++vB)}var G0="closure_uid_"+(1e9*Math.random()>>>0),vB=0;function yB(e,t,n){return e.call.apply(e.bind,arguments)}function wB(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function yn(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yn=yB:yn=wB,yn.apply(null,arguments)}function Th(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function tn(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function uo(){this.s=this.s,this.o=this.o}var _B=0;uo.prototype.s=!1;uo.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),_B!=0)&&gB(this)};uo.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const LI=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function o_(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function lk(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(km(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function wn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}wn.prototype.h=function(){this.defaultPrevented=!0};var SB=function(){if(!xe.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{xe.addEventListener("test",sp,t),xe.removeEventListener("test",sp,t)}catch{}return e}();function op(e){return/^[\s\xa0]*$/.test(e)}var uk=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function q0(e,t){return e<t?-1:e>t?1:0}function Tm(){var e=xe.navigator;return e&&(e=e.userAgent)?e:""}function Kr(e){return Tm().indexOf(e)!=-1}function a_(e){return a_[" "](e),e}a_[" "]=sp;function $I(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var xB=Kr("Opera"),Sl=Kr("Trident")||Kr("MSIE"),FI=Kr("Edge"),Py=FI||Sl,UI=Kr("Gecko")&&!(Tm().toLowerCase().indexOf("webkit")!=-1&&!Kr("Edge"))&&!(Kr("Trident")||Kr("MSIE"))&&!Kr("Edge"),EB=Tm().toLowerCase().indexOf("webkit")!=-1&&!Kr("Edge");function BI(){var e=xe.document;return e?e.documentMode:void 0}var ap;e:{var K0="",Q0=function(){var e=Tm();if(UI)return/rv:([^\);]+)(\)|;)/.exec(e);if(FI)return/Edge\/([\d\.]+)/.exec(e);if(Sl)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(EB)return/WebKit\/(\S+)/.exec(e);if(xB)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Q0&&(K0=Q0?Q0[1]:""),Sl){var X0=BI();if(X0!=null&&X0>parseFloat(K0)){ap=String(X0);break e}}ap=K0}var CB={};function kB(){return $I(CB,9,function(){let e=0;const t=uk(String(ap)).split("."),n=uk("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=q0(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||q0(i[2].length==0,s[2].length==0)||q0(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var My;if(xe.document&&Sl){var ck=BI();My=ck||parseInt(ap,10)||void 0}else My=void 0;var TB=My;function Ac(e,t){if(wn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(UI){e:{try{a_(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:DB[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ac.$.h.call(this)}}tn(Ac,wn);var DB={2:"touch",3:"pen",4:"mouse"};Ac.prototype.h=function(){Ac.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var hd="closure_listenable_"+(1e6*Math.random()|0),bB=0;function IB(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++bB,this.fa=this.ia=!1}function Dm(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function l_(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function zI(e){const t={};for(const n in e)t[n]=e[n];return t}const dk="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function VI(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<dk.length;s++)n=dk[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function bm(e){this.src=e,this.g={},this.h=0}bm.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=$y(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new IB(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Ly(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=LI(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Dm(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function $y(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var u_="closure_lm_"+(1e6*Math.random()|0),J0={};function jI(e,t,n,r,i){if(r&&r.once)return WI(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)jI(e,t[s],n,r,i);return null}return n=h_(n),e&&e[hd]?e.O(t,n,dd(r)?!!r.capture:!!r,i):YI(e,t,n,!1,r,i)}function YI(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=dd(i)?!!i.capture:!!i,a=d_(e);if(a||(e[u_]=a=new bm(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=AB(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)SB||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(GI(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AB(){function e(n){return t.call(e.src,e.listener,n)}const t=NB;return e}function WI(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)WI(e,t[s],n,r,i);return null}return n=h_(n),e&&e[hd]?e.P(t,n,dd(r)?!!r.capture:!!r,i):YI(e,t,n,!0,r,i)}function HI(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)HI(e,t[s],n,r,i);else r=dd(r)?!!r.capture:!!r,n=h_(n),e&&e[hd]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=$y(s,n,r,i),-1<n&&(Dm(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=d_(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$y(t,n,r,i)),(n=-1<e?t[e]:null)&&c_(n))}function c_(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[hd])Ly(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(GI(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=d_(t))?(Ly(n,e),n.h==0&&(n.src=null,t[u_]=null)):Dm(e)}}}function GI(e){return e in J0?J0[e]:J0[e]="on"+e}function NB(e,t){if(e.fa)e=!0;else{t=new Ac(t,this);var n=e.listener,r=e.la||e.src;e.ia&&c_(e),e=n.call(r,t)}return e}function d_(e){return e=e[u_],e instanceof bm?e:null}var Z0="__closure_events_fn_"+(1e9*Math.random()>>>0);function h_(e){return typeof e=="function"?e:(e[Z0]||(e[Z0]=function(t){return e.handleEvent(t)}),e[Z0])}function Jt(){uo.call(this),this.i=new bm(this),this.S=this,this.J=null}tn(Jt,uo);Jt.prototype[hd]=!0;Jt.prototype.removeEventListener=function(e,t,n,r){HI(this,e,t,n,r)};function an(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new wn(t,e);else if(t instanceof wn)t.target=t.target||e;else{var i=t;t=new wn(r,e),VI(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Dh(o,r,!0,t)&&i}if(o=t.g=e,i=Dh(o,r,!0,t)&&i,i=Dh(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Dh(o,r,!1,t)&&i}Jt.prototype.N=function(){if(Jt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Dm(n[r]);delete e.g[t],e.h--}}this.J=null};Jt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Jt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Dh(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Ly(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var f_=xe.JSON.stringify;function OB(){var e=QI;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class RB{constructor(){this.h=this.g=null}add(t,n){const r=qI.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qI=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new PB,e=>e.reset());class PB{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MB(e){xe.setTimeout(()=>{throw e},0)}function KI(e,t){Fy||LB(),Uy||(Fy(),Uy=!0),QI.add(e,t)}var Fy;function LB(){var e=xe.Promise.resolve(void 0);Fy=function(){e.then($B)}}var Uy=!1,QI=new RB;function $B(){for(var e;e=OB();){try{e.h.call(e.g)}catch(n){MB(n)}var t=qI;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Uy=!1}function Im(e,t){Jt.call(this),this.h=e||1,this.g=t||xe,this.j=yn(this.qb,this),this.l=Date.now()}tn(Im,Jt);re=Im.prototype;re.ga=!1;re.T=null;re.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),an(this,"tick"),this.ga&&(p_(this),this.start()))}};re.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function p_(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}re.N=function(){Im.$.N.call(this),p_(this),delete this.g};function m_(e,t,n){if(typeof e=="function")n&&(e=yn(e,n));else if(e&&typeof e.handleEvent=="function")e=yn(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:xe.setTimeout(e,t||0)}function XI(e){e.g=m_(()=>{e.g=null,e.i&&(e.i=!1,XI(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class FB extends uo{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:XI(this)}N(){super.N(),this.g&&(xe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nc(e){uo.call(this),this.h=e,this.g={}}tn(Nc,uo);var hk=[];function JI(e,t,n,r){Array.isArray(n)||(n&&(hk[0]=n.toString()),n=hk);for(var i=0;i<n.length;i++){var s=jI(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ZI(e){l_(e.g,function(t,n){this.g.hasOwnProperty(n)&&c_(t)},e),e.g={}}Nc.prototype.N=function(){Nc.$.N.call(this),ZI(this)};Nc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Am(){this.g=!0}Am.prototype.Ea=function(){this.g=!1};function UB(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var p=h.split("_");o=2<=p.length&&p[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function BB(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ja(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+VB(e,n)+(r?" "+r:"")})}function zB(e,t){e.info(function(){return"TIMEOUT: "+t})}Am.prototype.info=function(){};function VB(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return f_(n)}catch{return t}}var ca={},fk=null;function Nm(){return fk=fk||new Jt}ca.Ta="serverreachability";function eA(e){wn.call(this,ca.Ta,e)}tn(eA,wn);function Oc(e){const t=Nm();an(t,new eA(t))}ca.STAT_EVENT="statevent";function tA(e,t){wn.call(this,ca.STAT_EVENT,e),this.stat=t}tn(tA,wn);function On(e){const t=Nm();an(t,new tA(t,e))}ca.Ua="timingevent";function nA(e,t){wn.call(this,ca.Ua,e),this.size=t}tn(nA,wn);function fd(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return xe.setTimeout(function(){e()},t)}var Om={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function g_(){}g_.prototype.h=null;function pk(e){return e.h||(e.h=e.i())}function iA(){}var pd={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function v_(){wn.call(this,"d")}tn(v_,wn);function y_(){wn.call(this,"c")}tn(y_,wn);var By;function Rm(){}tn(Rm,g_);Rm.prototype.g=function(){return new XMLHttpRequest};Rm.prototype.i=function(){return{}};By=new Rm;function md(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Nc(this),this.P=jB,e=Py?125:void 0,this.V=new Im(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new sA}function sA(){this.i=null,this.g="",this.h=!1}var jB=45e3,zy={},lp={};re=md.prototype;re.setTimeout=function(e){this.P=e};function Vy(e,t,n){e.L=1,e.v=Mm(Ji(t)),e.s=n,e.S=!0,oA(e,null)}function oA(e,t){e.G=Date.now(),gd(e),e.A=Ji(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),pA(n.i,"t",r),e.C=0,n=e.l.I,e.h=new sA,e.g=MA(e.l,n?t:null,!e.s),0<e.O&&(e.M=new FB(yn(e.Pa,e,e.g),e.O)),JI(e.U,e.g,"readystatechange",e.nb),t=e.I?zI(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Oc(),UB(e.j,e.u,e.A,e.m,e.W,e.s)}re.nb=function(e){e=e.target;const t=this.M;t&&Li(e)==3?t.l():this.Pa(e)};re.Pa=function(e){try{if(e==this.g)e:{const h=Li(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>h)&&(h!=3||Py||this.g&&(this.h.h||this.g.ja()||yk(this.g)))){this.J||h!=4||t==7||(t==8||0>=p?Oc(3):Oc(2)),Pm(this);var n=this.g.da();this.aa=n;t:if(aA(this)){var r=yk(this.g);e="";var i=r.length,s=Li(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){No(this),Gu(this);var o="";break t}this.h.i=new xe.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BB(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!op(a)){var c=a;break t}}c=null}if(n=c)ja(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jy(this,n);else{this.i=!1,this.o=3,On(12),No(this),Gu(this);break e}}this.S?(lA(this,h,o),Py&&this.i&&h==3&&(JI(this.U,this.V,"tick",this.mb),this.V.start())):(ja(this.j,this.m,o,null),jy(this,o)),h==4&&No(this),this.i&&!this.J&&(h==4?NA(this.l,this):(this.i=!1,gd(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,On(12)):(this.o=0,On(13)),No(this),Gu(this)}}}catch{}finally{}};function aA(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function lA(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=YB(e,n),i==lp){t==4&&(e.o=4,On(14),r=!1),ja(e.j,e.m,null,"[Incomplete Response]");break}else if(i==zy){e.o=4,On(15),ja(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ja(e.j,e.m,i,null),jy(e,i);aA(e)&&i!=lp&&i!=zy&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,On(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),k_(t),t.L=!0,On(11))):(ja(e.j,e.m,n,"[Invalid Chunked Response]"),No(e),Gu(e))}re.mb=function(){if(this.g){var e=Li(this.g),t=this.g.ja();this.C<t.length&&(Pm(this),lA(this,e,t),this.i&&e!=4&&gd(this))}};function YB(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?lp:(n=Number(t.substring(n,r)),isNaN(n)?zy:(r+=1,r+n>t.length?lp:(t=t.substr(r,n),e.C=r+n,t)))}re.cancel=function(){this.J=!0,No(this)};function gd(e){e.Y=Date.now()+e.P,uA(e,e.P)}function uA(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=fd(yn(e.lb,e),t)}function Pm(e){e.B&&(xe.clearTimeout(e.B),e.B=null)}re.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(zB(this.j,this.A),this.L!=2&&(Oc(),On(17)),No(this),this.o=2,Gu(this)):uA(this,this.Y-e)};function Gu(e){e.l.H==0||e.J||NA(e.l,e)}function No(e){Pm(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,p_(e.V),ZI(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function jy(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Yy(n.h,e))){if(!e.K&&Yy(n.h,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)dp(n),Fm(n);else break e;C_(n),On(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=fd(yn(n.ib,n),6e3));if(1>=vA(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Oo(n,11)}else if((e.K||n.g==e)&&dp(n),!op(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const h=c[3];h!=null&&(n.qa=h,n.j.info("VER="+n.qa));const p=c[4];p!=null&&(n.Ga=p,n.j.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const w=e.g;if(w){const _=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.h;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(w_(s,s.h),s.h=null))}if(r.F){const S=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,gt(r.G,r.F,S))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=PA(r,r.I?r.oa:null,r.Y),o.K){yA(r.h,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Pm(a),gd(a)),r.g=o}else IA(r);0<n.i.length&&Um(n)}else c[0]!="stop"&&c[0]!="close"||Oo(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Oo(n,7):E_(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Oc(4)}catch{}}function WB(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(km(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function HB(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(km(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function cA(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(km(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=HB(e),r=WB(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var dA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GB(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fo(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Fo){this.h=t!==void 0?t:e.h,up(this,e.j),this.s=e.s,this.g=e.g,cp(this,e.m),this.l=e.l,t=e.i;var n=new Rc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),mk(this,n),this.o=e.o}else e&&(n=String(e).match(dA))?(this.h=!!t,up(this,n[1]||"",!0),this.s=Nu(n[2]||""),this.g=Nu(n[3]||"",!0),cp(this,n[4]),this.l=Nu(n[5]||"",!0),mk(this,n[6]||"",!0),this.o=Nu(n[7]||"")):(this.h=!!t,this.i=new Rc(null,this.h))}Fo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ou(t,gk,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ou(t,gk,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ou(n,n.charAt(0)=="/"?QB:KB,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ou(n,JB)),e.join("")};function Ji(e){return new Fo(e)}function up(e,t,n){e.j=n?Nu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function cp(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function mk(e,t,n){t instanceof Rc?(e.i=t,ZB(e.i,e.h)):(n||(t=Ou(t,XB)),e.i=new Rc(t,e.h))}function gt(e,t,n){e.i.set(t,n)}function Mm(e){return gt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Nu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ou(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,qB),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function qB(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gk=/[#\/\?@]/g,KB=/[#\?:]/g,QB=/[#\?]/g,XB=/[#\?@]/g,JB=/#/g;function Rc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function co(e){e.g||(e.g=new Map,e.h=0,e.i&&GB(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}re=Rc.prototype;re.add=function(e,t){co(this),this.i=null,e=jl(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function hA(e,t){co(e),t=jl(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function fA(e,t){return co(e),t=jl(e,t),e.g.has(t)}re.forEach=function(e,t){co(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};re.sa=function(){co(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};re.Z=function(e){co(this);let t=[];if(typeof e=="string")fA(this,e)&&(t=t.concat(this.g.get(jl(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};re.set=function(e,t){return co(this),this.i=null,e=jl(this,e),fA(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};re.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function pA(e,t,n){hA(e,t),0<n.length&&(e.i=null,e.g.set(jl(e,t),o_(n)),e.h+=n.length)}re.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function jl(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ZB(e,t){t&&!e.j&&(co(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(hA(this,r),pA(this,i,n))},e)),e.j=t}var ez=class{constructor(e,t){this.h=e,this.g=t}};function mA(e){this.l=e||tz,xe.PerformanceNavigationTiming?(e=xe.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(xe.g&&xe.g.Ka&&xe.g.Ka()&&xe.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tz=10;function gA(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function vA(e){return e.h?1:e.g?e.g.size:0}function Yy(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function w_(e,t){e.g?e.g.add(t):e.h=t}function yA(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}mA.prototype.cancel=function(){if(this.i=wA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function wA(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return o_(e.i)}function __(){}__.prototype.stringify=function(e){return xe.JSON.stringify(e,void 0)};__.prototype.parse=function(e){return xe.JSON.parse(e,void 0)};function nz(){this.g=new __}function rz(e,t,n){const r=n||"";try{cA(e,function(i,s){let o=i;dd(i)&&(o=f_(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function iz(e,t){const n=new Am;if(xe.Image){const r=new Image;r.onload=Th(bh,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Th(bh,n,r,"TestLoadImage: error",!1,t),r.onabort=Th(bh,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Th(bh,n,r,"TestLoadImage: timeout",!1,t),xe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function bh(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function vd(e){this.l=e.fc||null,this.j=e.ob||!1}tn(vd,g_);vd.prototype.g=function(){return new Lm(this.l,this.j)};vd.prototype.i=function(e){return function(){return e}}({});function Lm(e,t){Jt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=S_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tn(Lm,Jt);var S_=0;re=Lm.prototype;re.open=function(e,t){if(this.readyState!=S_)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pc(this)};re.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||xe).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};re.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yd(this)),this.readyState=S_};re.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pc(this)),this.g&&(this.readyState=3,Pc(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof xe.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_A(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function _A(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}re.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?yd(this):Pc(this),this.readyState==3&&_A(this)}};re.Za=function(e){this.g&&(this.response=this.responseText=e,yd(this))};re.Ya=function(e){this.g&&(this.response=e,yd(this))};re.ka=function(){this.g&&yd(this)};function yd(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pc(e)}re.setRequestHeader=function(e,t){this.v.append(e,t)};re.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};re.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Pc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Lm.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var sz=xe.JSON.parse;function kt(e){Jt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=SA,this.L=this.M=!1}tn(kt,Jt);var SA="",oz=/^https?$/i,az=["POST","PUT"];re=kt.prototype;re.Oa=function(e){this.M=e};re.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():By.g(),this.C=this.u?pk(this.u):pk(By),this.g.onreadystatechange=yn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){vk(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=xe.FormData&&e instanceof xe.FormData,!(0<=LI(az,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{CA(this),0<this.B&&((this.L=lz(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yn(this.ua,this)):this.A=m_(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){vk(this,s)}};function lz(e){return Sl&&kB()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}re.ua=function(){typeof s_!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,an(this,"timeout"),this.abort(8))};function vk(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,xA(e),$m(e)}function xA(e){e.F||(e.F=!0,an(e,"complete"),an(e,"error"))}re.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,an(this,"complete"),an(this,"abort"),$m(this))};re.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$m(this,!0)),kt.$.N.call(this)};re.La=function(){this.s||(this.G||this.v||this.l?EA(this):this.kb())};re.kb=function(){EA(this)};function EA(e){if(e.h&&typeof s_!="undefined"&&(!e.C[1]||Li(e)!=4||e.da()!=2)){if(e.v&&Li(e)==4)m_(e.La,0,e);else if(an(e,"readystatechange"),Li(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.I).match(dA)[1]||null;if(!i&&xe.self&&xe.self.location){var s=xe.self.location.protocol;i=s.substr(0,s.length-1)}r=!oz.test(i?i.toLowerCase():"")}n=r}if(n)an(e,"complete"),an(e,"success");else{e.m=6;try{var o=2<Li(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",xA(e)}}finally{$m(e)}}}}function $m(e,t){if(e.g){CA(e);const n=e.g,r=e.C[0]?sp:null;e.g=null,e.C=null,t||an(e,"ready");try{n.onreadystatechange=r}catch{}}}function CA(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(xe.clearTimeout(e.A),e.A=null)}function Li(e){return e.g?e.g.readyState:0}re.da=function(){try{return 2<Li(this)?this.g.status:-1}catch{return-1}};re.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};re.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),sz(t)}};function yk(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case SA:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}re.Ia=function(){return this.m};re.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kA(e){let t="";return l_(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function x_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=kA(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):gt(e,t,n))}function yu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function TA(e){this.Ga=0,this.i=[],this.j=new Am,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=yu("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=yu("baseRetryDelayMs",5e3,e),this.hb=yu("retryDelaySeedMs",1e4,e),this.eb=yu("forwardChannelMaxRetries",2,e),this.xa=yu("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new mA(e&&e.concurrentRequestLimit),this.Ja=new nz,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}re=TA.prototype;re.qa=8;re.H=1;function E_(e){if(DA(e),e.H==3){var t=e.W++,n=Ji(e.G);gt(n,"SID",e.J),gt(n,"RID",t),gt(n,"TYPE","terminate"),wd(e,n),t=new md(e,e.j,t,void 0),t.L=2,t.v=Mm(Ji(n)),n=!1,xe.navigator&&xe.navigator.sendBeacon&&(n=xe.navigator.sendBeacon(t.v.toString(),"")),!n&&xe.Image&&(new Image().src=t.v,n=!0),n||(t.g=MA(t.l,null),t.g.ha(t.v)),t.G=Date.now(),gd(t)}RA(e)}function Fm(e){e.g&&(k_(e),e.g.cancel(),e.g=null)}function DA(e){Fm(e),e.u&&(xe.clearTimeout(e.u),e.u=null),dp(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&xe.clearTimeout(e.m),e.m=null)}function Um(e){gA(e.h)||e.m||(e.m=!0,KI(e.Na,e),e.C=0)}function uz(e,t){return vA(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=fd(yn(e.Na,e,t),OA(e,e.C)),e.C++,!0)}re.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new md(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=zI(s),VI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=bA(this,i,t),n=Ji(this.G),gt(n,"RID",e),gt(n,"CVER",22),this.F&&gt(n,"X-HTTP-Session-Id",this.F),wd(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(kA(s)))+"&"+t:this.o&&x_(n,this.o,s)),w_(this.h,i),this.bb&&gt(n,"TYPE","init"),this.P?(gt(n,"$req",t),gt(n,"SID","null"),i.ba=!0,Vy(i,n,null)):Vy(i,n,t),this.H=2}}else this.H==3&&(e?wk(this,e):this.i.length==0||gA(this.h)||wk(this))};function wk(e,t){var n;t?n=t.m:n=e.W++;const r=Ji(e.G);gt(r,"SID",e.J),gt(r,"RID",n),gt(r,"AID",e.V),wd(e,r),e.o&&e.s&&x_(r,e.o,e.s),n=new md(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=bA(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),w_(e.h,n),Vy(n,r,t)}function wd(e,t){e.ma&&l_(e.ma,function(n,r){gt(t,r,n)}),e.l&&cA({},function(n,r){gt(t,r,n)})}function bA(e,t,n){n=Math.min(e.i.length,n);var r=e.l?yn(e.l.Va,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const h=i[u].g;if(c-=s,0>c)s=Math.max(0,i[u].h-100),a=!1;else try{rz(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function IA(e){e.g||e.u||(e.ba=1,KI(e.Ma,e),e.A=0)}function C_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=fd(yn(e.Ma,e),OA(e,e.A)),e.A++,!0)}re.Ma=function(){if(this.u=null,AA(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=fd(yn(this.jb,this),e)}};re.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,On(10),Fm(this),AA(this))};function k_(e){e.B!=null&&(xe.clearTimeout(e.B),e.B=null)}function AA(e){e.g=new md(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ji(e.wa);gt(t,"RID","rpc"),gt(t,"SID",e.J),gt(t,"CI",e.M?"0":"1"),gt(t,"AID",e.V),gt(t,"TYPE","xmlhttp"),wd(e,t),e.o&&e.s&&x_(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Mm(Ji(t)),n.s=null,n.S=!0,oA(n,e)}re.ib=function(){this.v!=null&&(this.v=null,Fm(this),C_(this),On(19))};function dp(e){e.v!=null&&(xe.clearTimeout(e.v),e.v=null)}function NA(e,t){var n=null;if(e.g==t){dp(e),k_(e),e.g=null;var r=2}else if(Yy(e.h,t))n=t.F,yA(e.h,t),r=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Nm(),an(r,new nA(r,n)),Um(e)}else IA(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(r==1&&uz(e,t)||r==2&&C_(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Oo(e,5);break;case 4:Oo(e,10);break;case 3:Oo(e,6);break;default:Oo(e,2)}}}function OA(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Oo(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=yn(e.pb,e);n||(n=new Fo("//www.google.com/images/cleardot.gif"),xe.location&&xe.location.protocol=="http"||up(n,"https"),Mm(n)),iz(n.toString(),r)}else On(2);e.H=0,e.l&&e.l.za(t),RA(e),DA(e)}re.pb=function(e){e?(this.j.info("Successfully pinged google.com"),On(2)):(this.j.info("Failed to ping google.com"),On(1))};function RA(e){if(e.H=0,e.pa=[],e.l){const t=wA(e.h);(t.length!=0||e.i.length!=0)&&(lk(e.pa,t),lk(e.pa,e.i),e.h.i.length=0,o_(e.i),e.i.length=0),e.l.ya()}}function PA(e,t,n){var r=n instanceof Fo?Ji(n):new Fo(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),cp(r,r.m);else{var i=xe.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Fo(null,void 0);r&&up(s,r),t&&(s.g=t),i&&cp(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&gt(r,n,t),gt(r,"VER",e.qa),wd(e,r),r}function MA(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new kt(new vd({ob:!0})):new kt(e.va),t.Oa(e.I),t}function LA(){}re=LA.prototype;re.Ba=function(){};re.Aa=function(){};re.za=function(){};re.ya=function(){};re.Va=function(){};function hp(){if(Sl&&!(10<=Number(TB)))throw Error("Environmental error: no available transport.")}hp.prototype.g=function(e,t){return new nr(e,t)};function nr(e,t){Jt.call(this),this.g=new TA(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!op(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!op(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yl(this)}tn(nr,Jt);nr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;On(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=PA(e,null,e.Y),Um(e)};nr.prototype.close=function(){E_(this.g)};nr.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=f_(e),e=n);t.i.push(new ez(t.fb++,e)),t.H==3&&Um(t)};nr.prototype.N=function(){this.g.l=null,delete this.j,E_(this.g),delete this.g,nr.$.N.call(this)};function $A(e){v_.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}tn($A,v_);function FA(){y_.call(this),this.status=1}tn(FA,y_);function Yl(e){this.g=e}tn(Yl,LA);Yl.prototype.Ba=function(){an(this.g,"a")};Yl.prototype.Aa=function(e){an(this.g,new $A(e))};Yl.prototype.za=function(e){an(this.g,new FA)};Yl.prototype.ya=function(){an(this.g,"b")};function cz(){this.blockSize=-1}function Br(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tn(Br,cz);Br.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ev(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Br.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ev(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ev(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ev(this,r),i=0;break}}this.h=i,this.i+=t};Br.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function Ke(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var dz={};function T_(e){return-128<=e&&128>e?$I(dz,e,function(t){return new Ke([t|0],0>t?-1:0)}):new Ke([e|0],0>e?-1:0)}function Jr(e){if(isNaN(e)||!isFinite(e))return nl;if(0>e)return sn(Jr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Wy;return new Ke(t,0)}function UA(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return sn(UA(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jr(Math.pow(t,8)),r=nl,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Jr(Math.pow(t,s)),r=r.R(s).add(Jr(o))):(r=r.R(n),r=r.add(Jr(o)))}return r}var Wy=4294967296,nl=T_(0),Hy=T_(1),_k=T_(16777216);re=Ke.prototype;re.ea=function(){if(mr(this))return-sn(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Wy+r)*t,t*=Wy}return e};re.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if($i(this))return"0";if(mr(this))return"-"+sn(this).toString(e);for(var t=Jr(Math.pow(e,6)),n=this,r="";;){var i=pp(n,t).g;n=fp(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,$i(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};re.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function $i(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function mr(e){return e.h==-1}re.X=function(e){return e=fp(this,e),mr(e)?-1:$i(e)?0:1};function sn(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Ke(n,~e.h).add(Hy)}re.abs=function(){return mr(this)?sn(this):this};re.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ke(n,n[n.length-1]&-2147483648?-1:0)};function fp(e,t){return e.add(sn(t))}re.R=function(e){if($i(this)||$i(e))return nl;if(mr(this))return mr(e)?sn(this).R(sn(e)):sn(sn(this).R(e));if(mr(e))return sn(this.R(sn(e)));if(0>this.X(_k)&&0>e.X(_k))return Jr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Ih(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Ih(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ih(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ih(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Ke(n,0)};function Ih(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function wu(e,t){this.g=e,this.h=t}function pp(e,t){if($i(t))throw Error("division by zero");if($i(e))return new wu(nl,nl);if(mr(e))return t=pp(sn(e),t),new wu(sn(t.g),sn(t.h));if(mr(t))return t=pp(e,sn(t)),new wu(sn(t.g),t.h);if(30<e.g.length){if(mr(e)||mr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Hy,r=t;0>=r.X(e);)n=Sk(n),r=Sk(r);var i=Ea(n,1),s=Ea(r,1);for(r=Ea(r,2),n=Ea(n,2);!$i(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ea(r,1),n=Ea(n,1)}return t=fp(e,i.R(t)),new wu(i,t)}for(i=nl;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jr(n),o=s.R(t);mr(o)||0<o.X(e);)n-=r,s=Jr(n),o=s.R(t);$i(s)&&(s=Hy),i=i.add(s),e=fp(e,o)}return new wu(i,e)}re.gb=function(e){return pp(this,e).h};re.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Ke(n,this.h&e.h)};re.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Ke(n,this.h|e.h)};re.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Ke(n,this.h^e.h)};function Sk(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Ke(n,e.h)}function Ea(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Ke(i,e.h)}hp.prototype.createWebChannel=hp.prototype.g;nr.prototype.send=nr.prototype.u;nr.prototype.open=nr.prototype.m;nr.prototype.close=nr.prototype.close;Om.NO_ERROR=0;Om.TIMEOUT=8;Om.HTTP_ERROR=6;rA.COMPLETE="complete";iA.EventType=pd;pd.OPEN="a";pd.CLOSE="b";pd.ERROR="c";pd.MESSAGE="d";Jt.prototype.listen=Jt.prototype.O;kt.prototype.listenOnce=kt.prototype.P;kt.prototype.getLastError=kt.prototype.Sa;kt.prototype.getLastErrorCode=kt.prototype.Ia;kt.prototype.getStatus=kt.prototype.da;kt.prototype.getResponseJson=kt.prototype.Wa;kt.prototype.getResponseText=kt.prototype.ja;kt.prototype.send=kt.prototype.ha;kt.prototype.setWithCredentials=kt.prototype.Oa;Br.prototype.digest=Br.prototype.l;Br.prototype.reset=Br.prototype.reset;Br.prototype.update=Br.prototype.j;Ke.prototype.add=Ke.prototype.add;Ke.prototype.multiply=Ke.prototype.R;Ke.prototype.modulo=Ke.prototype.gb;Ke.prototype.compare=Ke.prototype.X;Ke.prototype.toNumber=Ke.prototype.ea;Ke.prototype.toString=Ke.prototype.toString;Ke.prototype.getBits=Ke.prototype.D;Ke.fromNumber=Jr;Ke.fromString=UA;var hz=function(){return new hp},fz=function(){return Nm()},tv=Om,pz=rA,mz=ca,xk={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gz=vd,Ah=iA,vz=kt,yz=Br,rl=Ke;const Ek="@firebase/firestore";/**
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
 */let Wl="9.21.0";/**
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
 */const Zo=new Ww("@firebase/firestore");function Ck(){return Zo.logLevel}function ce(e,...t){if(Zo.logLevel<=je.DEBUG){const n=t.map(D_);Zo.debug(`Firestore (${Wl}): ${e}`,...n)}}function Zi(e,...t){if(Zo.logLevel<=je.ERROR){const n=t.map(D_);Zo.error(`Firestore (${Wl}): ${e}`,...n)}}function xl(e,...t){if(Zo.logLevel<=je.WARN){const n=t.map(D_);Zo.warn(`Firestore (${Wl}): ${e}`,...n)}}function D_(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function Se(e="Unexpected state"){const t=`FIRESTORE (${Wl}) INTERNAL ASSERTION FAILED: `+e;throw Zi(t),new Error(t)}function lt(e,t){e||Se()}function ke(e,t){return e}/**
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
 */class BA{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wz{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(pn.UNAUTHENTICATED))}shutdown(){}}class _z{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sz{constructor(t){this.t=t,this.currentUser=pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ji;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ji,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ji)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string"),new BA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return lt(t===null||typeof t=="string"),new pn(t)}}class xz{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=pn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ez{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new xz(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(pn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cz{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kz{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(lt(typeof n.token=="string"),this.T=n.token,new Cz(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Tz(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class zA{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Tz(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function He(e,t){return e<t?-1:e>t?1:0}function El(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Ee{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ee(t)}static min(){return new Ee(new Ht(0,0))}static max(){return new Ee(new Ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Mc{constructor(t,n,r){n===void 0?n=0:n>t.length&&Se(),r===void 0?r=t.length-n:r>t.length-n&&Se(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Mc.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Mc?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class vt extends Mc{construct(t,n,r){return new vt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new fe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new vt(n)}static emptyPath(){return new vt([])}}const Dz=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vn extends Mc{construct(t,n,r){return new vn(t,n,r)}static isValidIdentifier(t){return Dz.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vn(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new fe(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new fe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new fe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vn(n)}static emptyPath(){return new vn([])}}/**
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
 */class pe{constructor(t){this.path=t}static fromPath(t){return new pe(vt.fromString(t))}static fromName(t){return new pe(vt.fromString(t).popFirst(5))}static empty(){return new pe(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&vt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return vt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pe(new vt(t.slice()))}}function bz(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ee.fromTimestamp(r===1e9?new Ht(n+1,0):new Ht(n,r));return new Zs(i,pe.empty(),t)}function Iz(e){return new Zs(e.readTime,e.key,-1)}class Zs{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Zs(Ee.min(),pe.empty(),-1)}static max(){return new Zs(Ee.max(),pe.empty(),-1)}}function Az(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=pe.comparator(e.documentKey,t.documentKey),n!==0?n:He(e.largestBatchId,t.largestBatchId))}/**
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
 */const Nz="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Oz{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function _d(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==Nz)throw e;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,r)=>{n(t)})}static reject(t){return new Q((n,r)=>{r(t)})}static waitFor(t){return new Q((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=Q.resolve(!1);for(const r of t)n=n.next(i=>i?Q.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new Q((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new Q((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Sd(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class b_{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}b_.ct=-1;function Bm(e){return e==null}function mp(e){return e===0&&1/e==-1/0}function Rz(e){return typeof e=="number"&&Number.isInteger(e)&&!mp(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function kk(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function da(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function VA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class xt{constructor(t,n){this.comparator=t,this.root=n||rn.EMPTY}insert(t,n){return new xt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,rn.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nh(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nh(this.root,t,this.comparator,!0)}}class Nh{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rn{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:rn.RED,this.left=i!=null?i:rn.EMPTY,this.right=s!=null?s:rn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new rn(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return rn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const t=this.left.check();if(t!==this.right.check())throw Se();return t+(this.isRed()?0:1)}}rn.EMPTY=null,rn.RED=!0,rn.BLACK=!1;rn.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _n{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tk(this.data.getIterator())}getIteratorFrom(t){return new Tk(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new _n(this.comparator);return n.data=t,n}}class Tk{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xn{constructor(t){this.fields=t,t.sort(vn.comparator)}static empty(){return new Xn([])}unionWith(t){let n=new _n(vn.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Xn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return El(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class jA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Cn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new jA("Invalid base64 string: "+i):i}}(t);return new Cn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new Cn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return He(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Cn.EMPTY_BYTE_STRING=new Cn("");const Pz=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eo(e){if(lt(!!e),typeof e=="string"){let t=0;const n=Pz.exec(e);if(lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Mt(e.seconds),nanos:Mt(e.nanos)}}function Mt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ea(e){return typeof e=="string"?Cn.fromBase64String(e):Cn.fromUint8Array(e)}/**
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
 */function I_(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function A_(e){const t=e.mapValue.fields.__previous_value__;return I_(t)?A_(t):t}function Lc(e){const t=eo(e.mapValue.fields.__local_write_time__.timestampValue);return new Ht(t.seconds,t.nanos)}/**
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
 */class Mz{constructor(t,n,r,i,s,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class $c{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new $c("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof $c&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Oh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ta(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?I_(e)?4:Lz(e)?9007199254740991:10:Se()}function ai(e,t){if(e===t)return!0;const n=ta(e);if(n!==ta(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Lc(e).isEqual(Lc(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=eo(r.timestampValue),o=eo(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return ea(r.bytesValue).isEqual(ea(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Mt(r.geoPointValue.latitude)===Mt(i.geoPointValue.latitude)&&Mt(r.geoPointValue.longitude)===Mt(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Mt(r.integerValue)===Mt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Mt(r.doubleValue),o=Mt(i.doubleValue);return s===o?mp(s)===mp(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return El(e.arrayValue.values||[],t.arrayValue.values||[],ai);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(kk(s)!==kk(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ai(s[a],o[a])))return!1;return!0}(e,t);default:return Se()}}function Fc(e,t){return(e.values||[]).find(n=>ai(n,t))!==void 0}function Cl(e,t){if(e===t)return 0;const n=ta(e),r=ta(t);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Mt(i.integerValue||i.doubleValue),a=Mt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Dk(e.timestampValue,t.timestampValue);case 4:return Dk(Lc(e),Lc(t));case 5:return He(e.stringValue,t.stringValue);case 6:return function(i,s){const o=ea(i),a=ea(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=He(o[u],a[u]);if(c!==0)return c}return He(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=He(Mt(i.latitude),Mt(s.latitude));return o!==0?o:He(Mt(i.longitude),Mt(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Cl(o[u],a[u]);if(c)return c}return He(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===Oh.mapValue&&s===Oh.mapValue)return 0;if(i===Oh.mapValue)return 1;if(s===Oh.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const p=He(a[h],c[h]);if(p!==0)return p;const m=Cl(o[a[h]],u[c[h]]);if(m!==0)return m}return He(a.length,c.length)}(e.mapValue,t.mapValue);default:throw Se()}}function Dk(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return He(e,t);const n=eo(e),r=eo(t),i=He(n.seconds,r.seconds);return i!==0?i:He(n.nanos,r.nanos)}function kl(e){return Gy(e)}function Gy(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=eo(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ea(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,pe.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Gy(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Gy(r.fields[a])}`;return s+"}"}(e.mapValue):Se();var t,n}function qy(e){return!!e&&"integerValue"in e}function N_(e){return!!e&&"arrayValue"in e}function bk(e){return!!e&&"nullValue"in e}function Ik(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rf(e){return!!e&&"mapValue"in e}function qu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return da(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=qu(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Lz(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Un{constructor(t){this.value=t}static empty(){return new Un({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!rf(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=qu(n)}setAll(t){let n=vn.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());rf(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ai(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];rf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){da(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Un(qu(this.value))}}function YA(e){const t=[];return da(e.fields,(n,r)=>{const i=new vn([n]);if(rf(r)){const s=YA(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Xn(t)}/**
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
 */class gn{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new gn(t,0,Ee.min(),Ee.min(),Ee.min(),Un.empty(),0)}static newFoundDocument(t,n,r,i){return new gn(t,1,n,Ee.min(),r,i,0)}static newNoDocument(t,n){return new gn(t,2,n,Ee.min(),Ee.min(),Un.empty(),0)}static newUnknownDocument(t,n){return new gn(t,3,n,Ee.min(),Ee.min(),Un.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gp{constructor(t,n){this.position=t,this.inclusive=n}}function Ak(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=pe.comparator(pe.fromName(o.referenceValue),n.key):r=Cl(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nk(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ai(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ku{constructor(t,n="asc"){this.field=t,this.dir=n}}function $z(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class WA{}class jt extends WA{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Uz(t,n,r):n==="array-contains"?new Vz(t,r):n==="in"?new jz(t,r):n==="not-in"?new Yz(t,r):n==="array-contains-any"?new Wz(t,r):new jt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Bz(t,r):new zz(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cl(n,this.value)):n!==null&&ta(this.value)===ta(n)&&this.matchesComparison(Cl(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class li extends WA{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new li(t,n)}matches(t){return HA(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function HA(e){return e.op==="and"}function GA(e){return Fz(e)&&HA(e)}function Fz(e){for(const t of e.filters)if(t instanceof li)return!1;return!0}function Ky(e){if(e instanceof jt)return e.field.canonicalString()+e.op.toString()+kl(e.value);if(GA(e))return e.filters.map(t=>Ky(t)).join(",");{const t=e.filters.map(n=>Ky(n)).join(",");return`${e.op}(${t})`}}function qA(e,t){return e instanceof jt?function(n,r){return r instanceof jt&&n.op===r.op&&n.field.isEqual(r.field)&&ai(n.value,r.value)}(e,t):e instanceof li?function(n,r){return r instanceof li&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&qA(s,r.filters[o]),!0):!1}(e,t):void Se()}function KA(e){return e instanceof jt?function(t){return`${t.field.canonicalString()} ${t.op} ${kl(t.value)}`}(e):e instanceof li?function(t){return t.op.toString()+" {"+t.getFilters().map(KA).join(" ,")+"}"}(e):"Filter"}class Uz extends jt{constructor(t,n,r){super(t,n,r),this.key=pe.fromName(r.referenceValue)}matches(t){const n=pe.comparator(t.key,this.key);return this.matchesComparison(n)}}class Bz extends jt{constructor(t,n){super(t,"in",n),this.keys=QA("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class zz extends jt{constructor(t,n){super(t,"not-in",n),this.keys=QA("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function QA(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class Vz extends jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return N_(n)&&Fc(n.arrayValue,this.value)}}class jz extends jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Fc(this.value.arrayValue,n)}}class Yz extends jt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Fc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Fc(this.value.arrayValue,n)}}class Wz extends jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!N_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fc(this.value.arrayValue,r))}}/**
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
 */class Hz{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Ok(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Hz(e,t,n,r,i,s,o)}function O_(e){const t=ke(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ky(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bm(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>kl(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>kl(r)).join(",")),t.ft=n}return t.ft}function R_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!$z(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!qA(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Nk(e.startAt,t.startAt)&&Nk(e.endAt,t.endAt)}function Qy(e){return pe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class zm{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Gz(e,t,n,r,i,s,o,a){return new zm(e,t,n,r,i,s,o,a)}function P_(e){return new zm(e)}function Rk(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function qz(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Kz(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Qz(e){return e.collectionGroup!==null}function il(e){const t=ke(e);if(t.dt===null){t.dt=[];const n=Kz(t),r=qz(t);if(n!==null&&r===null)n.isKeyField()||t.dt.push(new Ku(n)),t.dt.push(new Ku(vn.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ku(vn.keyField(),s))}}}return t.dt}function es(e){const t=ke(e);if(!t._t)if(t.limitType==="F")t._t=Ok(t.path,t.collectionGroup,il(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of il(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ku(s.field,o))}const r=t.endAt?new gp(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new gp(t.startAt.position,t.startAt.inclusive):null;t._t=Ok(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t._t}function Xy(e,t,n){return new zm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Vm(e,t){return R_(es(e),es(t))&&e.limitType===t.limitType}function XA(e){return`${O_(es(e))}|lt:${e.limitType}`}function Jy(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>KA(r)).join(", ")}]`),Bm(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>kl(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>kl(r)).join(",")),`Target(${n})`}(es(e))}; limitType=${e.limitType})`}function jm(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):pe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of il(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ak(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,il(n),r)||n.endAt&&!function(i,s,o){const a=Ak(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,il(n),r))}(e,t)}function Xz(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function JA(e){return(t,n)=>{let r=!1;for(const i of il(e)){const s=Jz(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jz(e,t,n){const r=e.field.isKeyField()?pe.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Cl(a,u):Se()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Se()}}/**
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
 */class Hl{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){da(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return VA(this.inner)}size(){return this.innerSize}}/**
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
 */const Zz=new xt(pe.comparator);function ts(){return Zz}const ZA=new xt(pe.comparator);function Ru(...e){let t=ZA;for(const n of e)t=t.insert(n.key,n);return t}function eN(e){let t=ZA;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ro(){return Qu()}function tN(){return Qu()}function Qu(){return new Hl(e=>e.toString(),(e,t)=>e.isEqual(t))}const eV=new xt(pe.comparator),tV=new _n(pe.comparator);function Pe(...e){let t=tV;for(const n of e)t=t.add(n);return t}const nV=new _n(He);function rV(){return nV}/**
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
 */function nN(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mp(t)?"-0":t}}function rN(e){return{integerValue:""+e}}function iV(e,t){return Rz(t)?rN(t):nN(e,t)}/**
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
 */class Ym{constructor(){this._=void 0}}function sV(e,t,n){return e instanceof vp?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&I_(i)&&(i=A_(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof Uc?sN(e,t):e instanceof Bc?oN(e,t):function(r,i){const s=iN(r,i),o=Pk(s)+Pk(r.wt);return qy(s)&&qy(r.wt)?rN(o):nN(r.serializer,o)}(e,t)}function oV(e,t,n){return e instanceof Uc?sN(e,t):e instanceof Bc?oN(e,t):n}function iN(e,t){return e instanceof yp?qy(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class vp extends Ym{}class Uc extends Ym{constructor(t){super(),this.elements=t}}function sN(e,t){const n=aN(t);for(const r of e.elements)n.some(i=>ai(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bc extends Ym{constructor(t){super(),this.elements=t}}function oN(e,t){let n=aN(t);for(const r of e.elements)n=n.filter(i=>!ai(i,r));return{arrayValue:{values:n}}}class yp extends Ym{constructor(t,n){super(),this.serializer=t,this.wt=n}}function Pk(e){return Mt(e.integerValue||e.doubleValue)}function aN(e){return N_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function aV(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Uc&&r instanceof Uc||n instanceof Bc&&r instanceof Bc?El(n.elements,r.elements,ai):n instanceof yp&&r instanceof yp?ai(n.wt,r.wt):n instanceof vp&&r instanceof vp}(e.transform,t.transform)}class lV{constructor(t,n){this.version=t,this.transformResults=n}}class Fr{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Fr}static exists(t){return new Fr(void 0,t)}static updateTime(t){return new Fr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sf(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Wm{}function lN(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new cN(e.key,Fr.none()):new xd(e.key,e.data,Fr.none());{const n=e.data,r=Un.empty();let i=new _n(vn.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ho(e.key,r,new Xn(i.toArray()),Fr.none())}}function uV(e,t,n){e instanceof xd?function(r,i,s){const o=r.value.clone(),a=Lk(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ho?function(r,i,s){if(!sf(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Lk(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(uN(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function Xu(e,t,n,r){return e instanceof xd?function(i,s,o,a){if(!sf(i.precondition,s))return o;const u=i.value.clone(),c=$k(i.fieldTransforms,a,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ho?function(i,s,o,a){if(!sf(i.precondition,s))return o;const u=$k(i.fieldTransforms,a,s),c=s.data;return c.setAll(uN(i)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,s,o){return sf(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function cV(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=iN(r.transform,i||null);s!=null&&(n===null&&(n=Un.empty()),n.set(r.field,s))}return n||null}function Mk(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&El(n,r,(i,s)=>aV(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class xd extends Wm{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ho extends Wm{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function uN(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Lk(e,t,n){const r=new Map;lt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,oV(o,a,n[i]))}return r}function $k(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sV(s,o,t))}return r}class cN extends Wm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dV extends Wm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hV{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&uV(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Xu(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Xu(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=tN();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=lN(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pe())}isEqual(t){return this.batchId===t.batchId&&El(this.mutations,t.mutations,(n,r)=>Mk(n,r))&&El(this.baseMutations,t.baseMutations,(n,r)=>Mk(n,r))}}class M_{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){lt(t.mutations.length===r.length);let i=eV;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new M_(t,n,r,i)}}/**
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
 */class fV{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class pV{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Pt,Fe;function mV(e){switch(e){default:return Se();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function dN(e){if(e===void 0)return Zi("GRPC error has no .code"),H.UNKNOWN;switch(e){case Pt.OK:return H.OK;case Pt.CANCELLED:return H.CANCELLED;case Pt.UNKNOWN:return H.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return H.INTERNAL;case Pt.UNAVAILABLE:return H.UNAVAILABLE;case Pt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Pt.NOT_FOUND:return H.NOT_FOUND;case Pt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Pt.ABORTED:return H.ABORTED;case Pt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Pt.DATA_LOSS:return H.DATA_LOSS;default:return Se()}}(Fe=Pt||(Pt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class L_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Rh}static getOrCreateInstance(){return Rh===null&&(Rh=new L_),Rh}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Rh=null;/**
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
 */function gV(){return new TextEncoder}/**
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
 */const vV=new rl([4294967295,4294967295],0);function Fk(e){const t=gV().encode(e),n=new yz;return n.update(t),new Uint8Array(n.digest())}function Uk(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new rl([n,r],0),new rl([i,s],0)]}class $_{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pu(`Invalid padding: ${n}`);if(r<0)throw new Pu(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Pu(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Pu(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=rl.fromNumber(this.yt)}Tt(t,n,r){let i=t.add(n.multiply(rl.fromNumber(r)));return i.compare(vV)===1&&(i=new rl([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=Fk(t),[r,i]=Uk(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new $_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=Fk(t),[r,i]=Uk(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Pu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hm{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ed.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Hm(Ee.min(),i,new xt(He),ts(),Pe())}}class Ed{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ed(r,n,Pe(),Pe(),Pe())}}/**
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
 */class of{constructor(t,n,r,i){this.vt=t,this.removedTargetIds=n,this.key=r,this.Pt=i}}class hN{constructor(t,n){this.targetId=t,this.bt=n}}class fN{constructor(t,n,r=Cn.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Bk{constructor(){this.Vt=0,this.St=Vk(),this.Dt=Cn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Pe(),n=Pe(),r=Pe();return this.St.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Se()}}),new Ed(this.Dt,this.Ct,t,n,r)}$t(){this.xt=!1,this.St=Vk()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class yV{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=ts(),this.jt=zk(),this.zt=new xt(He)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const r=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&r.Mt(t.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(t.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(t.resumeToken));break;default:Se()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(t){var n;const r=t.targetId,i=t.bt.count,s=this.ne(r);if(s){const o=s.target;if(Qy(o))if(i===0){const a=new pe(o.path);this.Jt(r,a,gn.newNoDocument(a,Ee.min()))}else lt(i===1);else{const a=this.se(r);if(a!==i){const u=this.ie(t,a);if(u!==0){this.te(r);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=L_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,h,p){var m,w,_,S,k,x;const v={localCacheCount:h,existenceFilterCount:p.count},C=p.unchangedNames;return C&&(v.bloomFilter={applied:c===0,hashCount:(m=C==null?void 0:C.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(S=(_=(w=C==null?void 0:C.bits)===null||w===void 0?void 0:w.bitmap)===null||_===void 0?void 0:_.length)!==null&&S!==void 0?S:0,padding:(x=(k=C==null?void 0:C.bits)===null||k===void 0?void 0:k.padding)!==null&&x!==void 0?x:0}),v}(u,a,t.bt))}}}}ie(t,n){const{unchangedNames:r,count:i}=t.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,c;try{u=ea(s).toUint8Array()}catch(h){if(h instanceof jA)return xl("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new $_(u,o,a)}catch(h){return xl(h instanceof Pu?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.yt===0?1:i!==n-this.re(t.targetId,c)?2:0}re(t,n){const r=this.Kt.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(t,s,null),i++)}),i}ue(t){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Qy(a.target)){const u=new pe(a.target.path);this.Qt.get(u)!==null||this.ce(o,u)||this.Jt(o,u,gn.newNoDocument(u,t))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Pe();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ne(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(t));const i=new Hm(t,n,this.zt,this.Qt,r);return this.Qt=ts(),this.jt=zk(),this.zt=new xt(He),i}Ht(t,n){if(!this.Zt(t))return;const r=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,r){if(!this.Zt(t))return;const i=this.Xt(t);this.ce(t,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new Bk,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new _n(He),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new Bk),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function zk(){return new xt(pe.comparator)}function Vk(){return new xt(pe.comparator)}const wV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_V=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),SV=(()=>({and:"AND",or:"OR"}))();class xV{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Zy(e,t){return e.useProto3Json||Bm(t)?t:{value:t}}function wp(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pN(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function EV(e,t){return wp(e,t.toTimestamp())}function oi(e){return lt(!!e),Ee.fromTimestamp(function(t){const n=eo(t);return new Ht(n.seconds,n.nanos)}(e))}function F_(e,t){return function(n){return new vt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function mN(e){const t=vt.fromString(e);return lt(wN(t)),t}function e1(e,t){return F_(e.databaseId,t.path)}function nv(e,t){const n=mN(t);if(n.get(1)!==e.databaseId.projectId)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new pe(gN(n))}function t1(e,t){return F_(e.databaseId,t)}function CV(e){const t=mN(e);return t.length===4?vt.emptyPath():gN(t)}function n1(e){return new vt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function gN(e){return lt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function jk(e,t,n){return{name:e1(e,t),fields:n.value.mapValue.fields}}function kV(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Se()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(lt(c===void 0||typeof c=="string"),Cn.fromBase64String(c||"")):(lt(c===void 0||c instanceof Uint8Array),Cn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?H.UNKNOWN:dN(u.code);return new fe(c,u.message||"")}(o);n=new fN(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=nv(e,r.document.name),s=oi(r.document.updateTime),o=r.document.createTime?oi(r.document.createTime):Ee.min(),a=new Un({mapValue:{fields:r.document.fields}}),u=gn.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new of(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=nv(e,r.document),s=r.readTime?oi(r.readTime):Ee.min(),o=gn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new of([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=nv(e,r.document),s=r.removedTargetIds||[];n=new of([],s,i,null)}else{if(!("filter"in t))return Se();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new pV(i,s),a=r.targetId;n=new hN(a,o)}}return n}function TV(e,t){let n;if(t instanceof xd)n={update:jk(e,t.key,t.value)};else if(t instanceof cN)n={delete:e1(e,t.key)};else if(t instanceof ho)n={update:jk(e,t.key,t.data),updateMask:MV(t.fieldMask)};else{if(!(t instanceof dV))return Se();n={verify:e1(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof vp)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Uc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bc)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yp)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw Se()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:EV(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se()}(e,t.precondition)),n}function DV(e,t){return e&&e.length>0?(lt(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?oi(r.updateTime):oi(i);return s.isEqual(Ee.min())&&(s=oi(i)),new lV(s,r.transformResults||[])}(n,t))):[]}function bV(e,t){return{documents:[t1(e,t.path)]}}function IV(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=t1(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=t1(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return yN(li.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:ka(h.field),direction:OV(h.dir)}}(c))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Zy(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function AV(e){let t=CV(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lt(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(h){const p=vN(h);return p instanceof li&&GA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(p){return new Ku(Ta(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(h)));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Bm(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(h){const p=!!h.before,m=h.values||[];return new gp(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,m=h.values||[];return new gp(m,p)}(n.endAt)),Gz(t,i,o,s,a,"F",u,c)}function NV(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function vN(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ta(t.unaryFilter.field);return jt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ta(t.unaryFilter.field);return jt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ta(t.unaryFilter.field);return jt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ta(t.unaryFilter.field);return jt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(e):e.fieldFilter!==void 0?function(t){return jt.create(Ta(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return li.create(t.compositeFilter.filters.map(n=>vN(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(e):Se()}function OV(e){return wV[e]}function RV(e){return _V[e]}function PV(e){return SV[e]}function ka(e){return{fieldPath:e.canonicalString()}}function Ta(e){return vn.fromServerFormat(e.fieldPath)}function yN(e){return e instanceof jt?function(t){if(t.op==="=="){if(Ik(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NAN"}};if(bk(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ik(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NAN"}};if(bk(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ka(t.field),op:RV(t.op),value:t.value}}}(e):e instanceof li?function(t){const n=t.getFilters().map(r=>yN(r));return n.length===1?n[0]:{compositeFilter:{op:PV(t.op),filters:n}}}(e):Se()}function MV(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function wN(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Ds{constructor(t,n,r,i,s=Ee.min(),o=Ee.min(),a=Cn.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Ds(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class LV{constructor(t){this.le=t}}function $V(e){const t=AV({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Xy(t,t.limit,"L"):t}/**
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
 */class FV{constructor(){this.sn=new UV}addToCollectionParentIndex(t,n){return this.sn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(Zs.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(Zs.min())}updateCollectionGroup(t,n,r){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class UV{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new _n(vt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new _n(vt.comparator)).toArray()}}/**
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
 */class Tl{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new Tl(0)}static kn(){return new Tl(-1)}}/**
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
 */class BV{constructor(){this.changes=new Hl(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,gn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class zV{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class VV{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Xu(r.mutation,i,Xn.empty(),Ht.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Pe()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Pe()){const i=Ro();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ru();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ro();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Pe()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=ts();const o=Qu(),a=Qu();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ho)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Xu(h.mutation,c,h.mutation.getFieldMask(),Ht.now())):o.set(c.key,Xn.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new zV(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Qu();let i=new xt((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Xn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const p=(i.get(a.batchId)||Pe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=tN();h.forEach(m=>{if(!s.has(m)){const w=lN(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,p))}return Q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Qz(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):Q.resolve(Ro());let a=-1,u=s;return o.next(c=>Q.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?Q.resolve():this.remoteDocumentCache.getEntry(t,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,Pe())).next(h=>({batchId:a,changes:eN(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pe(n)).next(r=>{let i=Ru();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Ru();return this.indexManager.getCollectionParents(t,i).next(o=>Q.forEach(o,a=>{const u=function(c,h){return new zm(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(c=>{c.forEach((h,p)=>{s=s.insert(h,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,gn.newInvalidDocument(c)))});let o=Ru();return s.forEach((a,u)=>{const c=i.get(a);c!==void 0&&Xu(c.mutation,u,Xn.empty(),Ht.now()),jm(n,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class jV{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return Q.resolve(this.us.get(n))}saveBundleMetadata(t,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:oi(r.createTime)}),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(r){return{name:r.name,query:$V(r.bundledQuery),readTime:oi(r.readTime)}}(n)),Q.resolve()}}/**
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
 */class YV{constructor(){this.overlays=new xt(pe.comparator),this.hs=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ro();return Q.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.de(t,n,s)}),Q.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),Q.resolve()}getOverlaysForCollection(t,n,r){const i=Ro(),s=n.length+1,o=new pe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return Q.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new xt((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ro(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ro(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return Q.resolve(a)}de(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fV(n,r));let s=this.hs.get(n);s===void 0&&(s=Pe(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class U_{constructor(){this.ls=new _n(qt.fs),this.ds=new _n(qt._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const r=new qt(t,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.gs(new qt(t,n))}ys(t,n){t.forEach(r=>this.removeReference(r,n))}ps(t){const n=new pe(new vt([])),r=new qt(n,t),i=new qt(n,t+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new pe(new vt([])),r=new qt(n,t),i=new qt(n,t+1);let s=Pe();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new qt(t,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class qt{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return pe.comparator(t.key,n.key)||He(t.Es,n.Es)}static _s(t,n){return He(t.Es,n.Es)||pe.comparator(t.key,n.key)}}/**
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
 */class WV{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new _n(qt.fs)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new qt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(t,n){return Q.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new qt(n,0),i=new qt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new _n(He);return n.forEach(i=>{const s=new qt(i,0),o=new qt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),Q.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;pe.isDocumentKey(s)||(s=s.child(""));const o=new qt(new pe(s),0);let a=new _n(He);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Es)),!0)},o),Q.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){lt(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return Q.forEach(n.mutations,i=>{const s=new qt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=r})}Dn(t){}containsKey(t,n){const r=new qt(n,0),i=this.Rs.firstAfterOrEqual(r);return Q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HV{constructor(t){this.Ss=t,this.docs=new xt(pe.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():gn.newInvalidDocument(n))}getEntries(t,n){let r=ts();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gn.newInvalidDocument(i))}),Q.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=ts();const o=n.path,a=new pe(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Az(Iz(h),r)<=0||(i.has(h.key)||jm(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Se()}Ds(t,n){return Q.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new GV(this)}getSize(t){return Q.resolve(this.size)}}class GV extends BV{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(t,i)):this.rs.removeEntry(r)}),Q.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
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
 */class qV{constructor(t){this.persistence=t,this.Cs=new Hl(n=>O_(n),R_),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.xs=0,this.Ns=new U_,this.targetCount=0,this.ks=Tl.Nn()}forEachTarget(t,n){return this.Cs.forEach((r,i)=>n(i)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),Q.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new Tl(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.$n(n),Q.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),Q.waitFor(s).next(()=>i)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cs.get(n)||null;return Q.resolve(r)}addMatchingKeys(t,n,r){return this.Ns.ws(n,r),Q.resolve()}removeMatchingKeys(t,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ns.Ts(n);return Q.resolve(r)}containsKey(t,n){return Q.resolve(this.Ns.containsKey(n))}}/**
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
 */class KV{constructor(t,n){this.Ms={},this.overlays={},this.Os=new b_(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new qV(this),this.indexManager=new FV,this.remoteDocumentCache=function(r){return new HV(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new LV(n),this.Ls=new jV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new YV,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Ms[t.toKey()];return r||(r=new WV(n,this.referenceDelegate),this.Ms[t.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,r){ce("MemoryPersistence","Starting transaction:",t);const i=new QV(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(t,n){return Q.or(Object.values(this.Ms).map(r=>()=>r.containsKey(t,n)))}}class QV extends Oz{constructor(t){super(),this.currentSequenceNumber=t}}class B_{constructor(t){this.persistence=t,this.Gs=new U_,this.Qs=null}static js(t){return new B_(t)}get zs(){if(this.Qs)return this.Qs;throw Se()}addReference(t,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),Q.resolve()}removeReference(t,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.zs,r=>{const i=pe.fromPath(r);return this.Ws(t,i).next(s=>{s||n.removeEntry(i,Ee.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return Q.or([()=>Q.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
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
 */class z_{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(t,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new z_(t,n.fromCache,r,i)}}/**
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
 */class XV{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Ki(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(Rk(n))return Q.resolve(null);let r=es(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xy(n,null,"F"),r=es(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Pe(...s);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Qi(n,a);return this.ji(n,c,o,u.readTime)?this.Ui(t,Xy(n,null,"F")):this.zi(t,c,n,u)}))})))}Ki(t,n,r,i){return Rk(n)||i.isEqual(Ee.min())?this.Gi(t,n):this.qi.getDocuments(t,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(Ck()<=je.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jy(n)),this.zi(t,o,n,bz(i,-1)))})}Qi(t,n){let r=new _n(JA(t));return n.forEach((i,s)=>{jm(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return Ck()<=je.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Jy(n)),this.qi.getDocumentsMatchingQuery(t,n,Zs.min())}zi(t,n,r,i){return this.qi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class JV{constructor(t,n,r,i){this.persistence=t,this.Wi=n,this.serializer=i,this.Hi=new xt(He),this.Ji=new Hl(s=>O_(s),R_),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(r)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new VV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function ZV(e,t,n,r){return new JV(e,t,n,r)}async function _N(e,t){const n=ke(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Pe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function ej(e,t){const n=ke(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,p=h.keys();let m=Q.resolve();return p.forEach(w=>{m=m.next(()=>c.getEntry(a,w)).next(_=>{const S=u.docVersions.get(w);lt(S!==null),_.version.compareTo(S)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Pe();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function SN(e){const t=ke(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function tj(e,t){const n=ke(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];t.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;a.push(n.Fs.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Fs.addMatchingKeys(s,h.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(p)!==null?w=w.withResumeToken(Cn.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),i=i.insert(p,w),function(_,S,k){return _.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,w,h)&&a.push(n.Fs.updateTargetData(s,w))});let u=ts(),c=Pe();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(nj(s,o,t.documentUpdates).next(h=>{u=h.er,c=h.nr})),!r.isEqual(Ee.min())){const h=n.Fs.getLastRemoteSnapshotVersion(s).next(p=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return Q.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Hi=i,s))}function nj(e,t,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=ts();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Ee.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):ce("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{er:o,nr:i}})}function rj(e,t){const n=ke(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function ij(e,t){const n=ke(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,t).next(s=>s?(i=s,Q.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Ds(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(t,r.targetId)),r})}async function r1(e,t,n){const r=ke(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sd(o))throw o;ce("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function Yk(e,t,n){const r=ke(e);let i=Ee.min(),s=Pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=ke(a),p=h.Ji.get(c);return p!==void 0?Q.resolve(h.Hi.get(p)):h.Fs.getTargetData(u,c)}(r,o,es(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,t,n?i:Ee.min(),n?s:Pe())).next(a=>(sj(r,Xz(t),a),{documents:a,sr:s})))}function sj(e,t,n){let r=e.Yi.get(t)||Ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Yi.set(t,r)}class Wk{constructor(){this.activeTargetIds=rV()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class oj{constructor(){this.Wr=new Wk,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,r){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new Wk,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class aj{Jr(t){}shutdown(){}}/**
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
 */class Hk{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ph=null;function rv(){return Ph===null?Ph=268435456+Math.round(2147483648*Math.random()):Ph++,"0x"+Ph.toString(16)}/**
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
 */const lj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uj{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
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
 */const hn="WebChannelConnection";class cj extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,r,i,s){const o=rv(),a=this.Io(t,n);ce("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const u={};return this.To(u,i,s),this.Eo(t,a,u,r).then(c=>(ce("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw xl("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(t,n,r,i,s,o){return this.po(t,n,r,i,s)}To(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Wl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}Io(t,n){const r=lj[t];return`${this.wo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,r,i){const s=rv();return new Promise((o,a)=>{const u=new vz;u.setWithCredentials(!0),u.listenOnce(pz.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case tv.NO_ERROR:const h=u.getResponseJson();ce(hn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case tv.TIMEOUT:ce(hn,`RPC '${t}' ${s} timed out`),a(new fe(H.DEADLINE_EXCEEDED,"Request time out"));break;case tv.HTTP_ERROR:const p=u.getStatus();if(ce(hn,`RPC '${t}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const _=function(S){const k=S.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(k)>=0?k:H.UNKNOWN}(w.status);a(new fe(_,w.message))}else a(new fe(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new fe(H.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{ce(hn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);ce(hn,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Ro(t,n,r){const i=rv(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=hz(),a=fz(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new gz({})),this.To(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");ce(hn,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let p=!1,m=!1;const w=new uj({io:S=>{m?ce(hn,`Not sending because RPC '${t}' stream ${i} is closed:`,S):(p||(ce(hn,`Opening RPC '${t}' stream ${i} transport.`),h.open(),p=!0),ce(hn,`RPC '${t}' stream ${i} sending:`,S),h.send(S))},ro:()=>h.close()}),_=(S,k,x)=>{S.listen(k,v=>{try{x(v)}catch(C){setTimeout(()=>{throw C},0)}})};return _(h,Ah.EventType.OPEN,()=>{m||ce(hn,`RPC '${t}' stream ${i} transport opened.`)}),_(h,Ah.EventType.CLOSE,()=>{m||(m=!0,ce(hn,`RPC '${t}' stream ${i} transport closed`),w.fo())}),_(h,Ah.EventType.ERROR,S=>{m||(m=!0,xl(hn,`RPC '${t}' stream ${i} transport errored:`,S),w.fo(new fe(H.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ah.EventType.MESSAGE,S=>{var k;if(!m){const x=S.data[0];lt(!!x);const v=x,C=v.error||((k=v[0])===null||k===void 0?void 0:k.error);if(C){ce(hn,`RPC '${t}' stream ${i} received error:`,C);const T=C.status;let I=function(A){const O=Pt[A];if(O!==void 0)return dN(O)}(T),R=C.message;I===void 0&&(I=H.INTERNAL,R="Unknown error status: "+T+" with message "+C.message),m=!0,w.fo(new fe(I,R)),h.close()}else ce(hn,`RPC '${t}' stream ${i} received:`,x),w._o(x)}}),_(a,mz.STAT_EVENT,S=>{S.stat===xk.PROXY?ce(hn,`RPC '${t}' stream ${i} detected buffering proxy`):S.stat===xk.NOPROXY&&ce(hn,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.lo()},0),w}}function iv(){return typeof document!="undefined"?document:null}/**
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
 */function Gm(e){return new xV(e,!0)}/**
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
 */class xN{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&ce("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class EN{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new xN(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Zi(n.toString()),Zi("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{t(()=>{const i=new fe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(t,n){const r=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return ce("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dj extends EN{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=kV(this.serializer,t),r=function(i){if(!("targetChange"in i))return Ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Ee.min():s.readTime?oi(s.readTime):Ee.min()}(t);return this.listener.eu(n,r)}nu(t){const n={};n.database=n1(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Qy(a)?{documents:bV(i,a)}:{query:IV(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=pN(i,s.resumeToken);const u=Zy(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo(Ee.min())>0){o.readTime=wp(i,s.snapshotVersion.toTimestamp());const u=Zy(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const r=NV(this.serializer,t);r&&(n.labels=r),this.zo(n)}su(t){const n={};n.database=n1(this.serializer),n.removeTarget=t,this.zo(n)}}class hj extends EN{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(lt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const n=DV(t.writeResults,t.commitTime),r=oi(t.commitTime);return this.listener.uu(r,n)}return lt(!t.writeResults||t.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const t={};t.database=n1(this.serializer),this.zo(t)}ou(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>TV(this.serializer,r))};this.zo(n)}}/**
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
 */class fj extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new fe(H.UNKNOWN,i.toString())})}Ao(t,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new fe(H.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class pj{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
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
 */class mj{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{ha(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=ke(a);u.Au.add(4),await Cd(u),u.Pu.set("Unknown"),u.Au.delete(4),await qm(u)}(this))})}),this.Pu=new pj(r,i)}}async function qm(e){if(ha(e))for(const t of e.Ru)await t(!0)}async function Cd(e){for(const t of e.Ru)await t(!1)}function CN(e,t){const n=ke(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),Y_(n)?j_(n):Gl(n).Uo()&&V_(n,t))}function kN(e,t){const n=ke(e),r=Gl(n);n.Eu.delete(t),r.Uo()&&TN(n,t),n.Eu.size===0&&(r.Uo()?r.Qo():ha(n)&&n.Pu.set("Unknown"))}function V_(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ee.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Gl(e).nu(t)}function TN(e,t){e.bu.Lt(t),Gl(e).su(t)}function j_(e){e.bu=new yV({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Gl(e).start(),e.Pu.mu()}function Y_(e){return ha(e)&&!Gl(e).qo()&&e.Eu.size>0}function ha(e){return ke(e).Au.size===0}function DN(e){e.bu=void 0}async function gj(e){e.Eu.forEach((t,n)=>{V_(e,t)})}async function vj(e,t){DN(e),Y_(e)?(e.Pu.pu(t),j_(e)):e.Pu.set("Unknown")}async function yj(e,t,n){if(e.Pu.set("Online"),t instanceof fN&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(e,t)}catch(r){ce("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _p(e,r)}else if(t instanceof of?e.bu.Wt(t):t instanceof hN?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Ee.min()))try{const r=await SN(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(u);c&&i.Eu.set(u,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(Cn.EMPTY_BYTE_STRING,c.snapshotVersion)),TN(i,a);const h=new Ds(c.target,a,u,c.sequenceNumber);V_(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){ce("RemoteStore","Failed to raise snapshot:",r),await _p(e,r)}}async function _p(e,t,n){if(!Sd(t))throw t;e.Au.add(1),await Cd(e),e.Pu.set("Offline"),n||(n=()=>SN(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ce("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await qm(e)})}function bN(e,t){return t().catch(n=>_p(e,n,t))}async function Km(e){const t=ke(e),n=to(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;wj(t);)try{const i=await rj(t.localStore,r);if(i===null){t.Tu.length===0&&n.Qo();break}r=i.batchId,_j(t,i)}catch(i){await _p(t,i)}IN(t)&&AN(t)}function wj(e){return ha(e)&&e.Tu.length<10}function _j(e,t){e.Tu.push(t);const n=to(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function IN(e){return ha(e)&&!to(e).qo()&&e.Tu.length>0}function AN(e){to(e).start()}async function Sj(e){to(e).au()}async function xj(e){const t=to(e);for(const n of e.Tu)t.ou(n.mutations)}async function Ej(e,t,n){const r=e.Tu.shift(),i=M_.from(r,t,n);await bN(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Km(e)}async function Cj(e,t){t&&to(e).ru&&await async function(n,r){if(i=r.code,mV(i)&&i!==H.ABORTED){const s=n.Tu.shift();to(n).Go(),await bN(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Km(n)}var i}(e,t),IN(e)&&AN(e)}async function Gk(e,t){const n=ke(e);n.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const r=ha(n);n.Au.add(3),await Cd(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await qm(n)}async function kj(e,t){const n=ke(e);t?(n.Au.delete(2),await qm(n)):t||(n.Au.add(2),await Cd(n),n.Pu.set("Unknown"))}function Gl(e){return e.Vu||(e.Vu=function(t,n,r){const i=ke(t);return i.lu(),new dj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:gj.bind(null,e),co:vj.bind(null,e),eu:yj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),Y_(e)?j_(e):e.Pu.set("Unknown")):(await e.Vu.stop(),DN(e))})),e.Vu}function to(e){return e.Su||(e.Su=function(t,n,r){const i=ke(t);return i.lu(),new hj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:Sj.bind(null,e),co:Cj.bind(null,e),cu:xj.bind(null,e),uu:Ej.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Go(),await Km(e)):(await e.Su.stop(),e.Tu.length>0&&(ce("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
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
 */class W_{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new W_(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function H_(e,t){if(Zi("AsyncQueue",`${t}: ${e}`),Sd(e))return new fe(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class sl{constructor(t){this.comparator=t?(n,r)=>t(n,r)||pe.comparator(n.key,r.key):(n,r)=>pe.comparator(n.key,r.key),this.keyedMap=Ru(),this.sortedSet=new xt(this.comparator)}static emptySet(t){return new sl(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof sl)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new sl;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class qk{constructor(){this.Du=new xt(pe.comparator)}track(t){const n=t.doc.key,r=this.Du.get(n);r?t.type!==0&&r.type===3?this.Du=this.Du.insert(n,t):t.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Du=this.Du.remove(n):t.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):Se():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,r)=>{t.push(r)}),t}}class Dl{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Dl(t,n,sl.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Vm(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Tj{constructor(){this.xu=void 0,this.listeners=[]}}class Dj{constructor(){this.queries=new Hl(t=>XA(t),Vm),this.onlineState="Unknown",this.Nu=new Set}}async function NN(e,t){const n=ke(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Tj),i)try{s.xu=await n.onListen(r)}catch(o){const a=H_(o,`Initialization of query '${Jy(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&G_(n)}async function ON(e,t){const n=ke(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bj(e,t){const n=ke(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&G_(n)}function Ij(e,t,n){const r=ke(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function G_(e){e.Nu.forEach(t=>{t.next()})}class RN{constructor(t,n,r){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Dl(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=Dl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
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
 */class PN{constructor(t){this.key=t}}class MN{constructor(t){this.key=t}}class Aj{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Pe(),this.mutatedKeys=Pe(),this.Zu=JA(t),this.tc=new sl(this.Zu)}get ec(){return this.Ju}nc(t,n){const r=n?n.sc:new qk,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,p)=>{const m=i.get(h),w=jm(this.query,p)?p:null,_=!!m&&this.mutatedKeys.has(m.key),S=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let k=!1;m&&w?m.data.isEqual(w.data)?_!==S&&(r.track({type:3,doc:w}),k=!0):this.ic(m,w)||(r.track({type:2,doc:w}),k=!0,(u&&this.Zu(w,u)>0||c&&this.Zu(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),k=!0):m&&!w&&(r.track({type:1,doc:m}),k=!0,(u||c)&&(a=!0)),k&&(w?(o=o.add(w),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const s=t.sc.Cu();s.sort((c,h)=>function(p,m){const w=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return w(p)-w(m)}(c.type,h.type)||this.Zu(c.doc,h.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,u=a!==this.Yu;return this.Yu=a,s.length!==0||u?{snapshot:new Dl(this.query,t.tc,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new qk,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Pe(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return t.forEach(r=>{this.Xu.has(r)||n.push(new MN(r))}),this.Xu.forEach(r=>{t.has(r)||n.push(new PN(r))}),n}ac(t){this.Ju=t.sr,this.Xu=Pe();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return Dl.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Nj{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Oj{constructor(t){this.key=t,this.lc=!1}}class Rj{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Hl(a=>XA(a),Vm),this._c=new Map,this.wc=new Set,this.mc=new xt(pe.comparator),this.gc=new Map,this.yc=new U_,this.Ic={},this.Tc=new Map,this.Ec=Tl.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Pj(e,t){const n=Yj(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await ij(n.localStore,es(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Mj(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&CN(n.remoteStore,o)}return i}async function Mj(e,t,n,r,i){e.Rc=(p,m,w)=>async function(_,S,k,x){let v=S.view.nc(k);v.ji&&(v=await Yk(_.localStore,S.query,!1).then(({documents:I})=>S.view.nc(I,v)));const C=x&&x.targetChanges.get(S.targetId),T=S.view.applyChanges(v,_.isPrimaryClient,C);return Qk(_,S.targetId,T.uc),T.snapshot}(e,p,m,w);const s=await Yk(e.localStore,t,!0),o=new Aj(t,s.sr),a=o.nc(s.documents),u=Ed.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Qk(e,n,c.uc);const h=new Nj(t,n,o);return e.dc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Lj(e,t){const n=ke(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Vm(s,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await r1(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),kN(n.remoteStore,r.targetId),i1(n,r.targetId)}).catch(_d)):(i1(n,r.targetId),await r1(n.localStore,r.targetId,!0))}async function $j(e,t,n){const r=Wj(e);try{const i=await function(s,o){const a=ke(s),u=Ht.now(),c=o.reduce((m,w)=>m.add(w.key),Pe());let h,p;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=ts(),_=Pe();return a.Xi.getEntries(m,c).next(S=>{w=S,w.forEach((k,x)=>{x.isValidDocument()||(_=_.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,w)).next(S=>{h=S;const k=[];for(const x of o){const v=cV(x,h.get(x.key).overlayedDocument);v!=null&&k.push(new ho(x.key,v,YA(v.value.mapValue),Fr.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,k,o)}).next(S=>{p=S;const k=S.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(m,S.batchId,k)})}).then(()=>({batchId:p.batchId,changes:eN(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ic[s.currentUser.toKey()];u||(u=new xt(He)),u=u.insert(o,a),s.Ic[s.currentUser.toKey()]=u}(r,i.batchId,n),await kd(r,i.changes),await Km(r.remoteStore)}catch(i){const s=H_(i,"Failed to persist write");n.reject(s)}}async function LN(e,t){const n=ke(e);try{const r=await tj(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?lt(o.lc):i.removedDocuments.size>0&&(lt(o.lc),o.lc=!1))}),await kd(n,r,t)}catch(r){await _d(r)}}function Kk(e,t,n){const r=ke(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ke(s);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const p of h.listeners)p.ku(o)&&(u=!0)}),u&&G_(a)}(r.eventManager,t),i.length&&r.fc.eu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Fj(e,t,n){const r=ke(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let o=new xt(pe.comparator);o=o.insert(s,gn.newNoDocument(s,Ee.min()));const a=Pe().add(s),u=new Hm(Ee.min(),new Map,new xt(He),o,a);await LN(r,u),r.mc=r.mc.remove(s),r.gc.delete(t),q_(r)}else await r1(r.localStore,t,!1).then(()=>i1(r,t,n)).catch(_d)}async function Uj(e,t){const n=ke(e),r=t.batch.batchId;try{const i=await ej(n.localStore,t);FN(n,r,null),$N(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kd(n,i)}catch(i){await _d(i)}}async function Bj(e,t,n){const r=ke(e);try{const i=await function(s,o){const a=ke(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(lt(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,t);FN(r,t,n),$N(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await kd(r,i)}catch(i){await _d(i)}}function $N(e,t){(e.Tc.get(t)||[]).forEach(n=>{n.resolve()}),e.Tc.delete(t)}function FN(e,t,n){const r=ke(e);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function i1(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(r=>{e.yc.containsKey(r)||UN(e,r)})}function UN(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(kN(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),q_(e))}function Qk(e,t,n){for(const r of n)r instanceof PN?(e.yc.addReference(r.key,t),zj(e,r)):r instanceof MN?(ce("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||UN(e,r.key)):Se()}function zj(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ce("SyncEngine","New document in limbo: "+n),e.wc.add(r),q_(e))}function q_(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new pe(vt.fromString(t)),r=e.Ec.next();e.gc.set(r,new Oj(n)),e.mc=e.mc.insert(n,r),CN(e.remoteStore,new Ds(es(P_(n.path)),r,"TargetPurposeLimboResolution",b_.ct))}}async function kd(e,t,n){const r=ke(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,u)=>{o.push(r.Rc(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=z_.Bi(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,u){const c=ke(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>Q.forEach(u,p=>Q.forEach(p.$i,m=>c.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>Q.forEach(p.Fi,m=>c.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!Sd(h))throw h;ce("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const m=c.Hi.get(p),w=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(w);c.Hi=c.Hi.insert(p,_)}}}(r.localStore,s))}async function Vj(e,t){const n=ke(e);if(!n.currentUser.isEqual(t)){ce("SyncEngine","User change. New user:",t.toKey());const r=await _N(n.localStore,t);n.currentUser=t,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new fe(H.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await kd(n,r.tr)}}function jj(e,t){const n=ke(e),r=n.gc.get(t);if(r&&r.lc)return Pe().add(r.key);{let i=Pe();const s=n._c.get(t);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function Yj(e){const t=ke(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=LN.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Fj.bind(null,t),t.fc.eu=bj.bind(null,t.eventManager),t.fc.vc=Ij.bind(null,t.eventManager),t}function Wj(e){const t=ke(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bj.bind(null,t),t}class Xk{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Gm(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return ZV(this.persistence,new XV,t.initialUser,this.serializer)}createPersistence(t){return new KV(B_.js,this.serializer)}createSharedClientState(t){return new oj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hj{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kk(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vj.bind(null,this.syncEngine),await kj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Dj}createDatastore(t){const n=Gm(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new cj(i));var i;return function(s,o,a,u){return new fj(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>Kk(this.syncEngine,a,0),o=Hk.D()?new Hk:new aj,new mj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,u,c){const h=new Rj(r,i,s,o,a,u);return c&&(h.Ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=ke(t);ce("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Cd(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class BN{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):Zi("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Gj{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pn.UNAUTHENTICATED,this.clientId=zA.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ce("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ce("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=H_(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function sv(e,t){e.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _N(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Jk(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Kj(e);ce("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Gk(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Gk(t.remoteStore,s)),e._onlineComponents=t}function qj(e){return e.name==="FirebaseError"?e.code===H.FAILED_PRECONDITION||e.code===H.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Kj(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await sv(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!qj(n))throw n;xl("Error using user provided cache. Falling back to memory cache: "+n),await sv(e,new Xk)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await sv(e,new Xk);return e._offlineComponents}async function zN(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await Jk(e,e._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await Jk(e,new Hj))),e._onlineComponents}function Qj(e){return zN(e).then(t=>t.syncEngine)}async function VN(e){const t=await zN(e),n=t.eventManager;return n.onListen=Pj.bind(null,t.syncEngine),n.onUnlisten=Lj.bind(null,t.syncEngine),n}function Xj(e,t,n={}){const r=new ji;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new BN({next:p=>{s.enqueueAndForget(()=>ON(i,h));const m=p.docs.has(o);!m&&p.fromCache?u.reject(new fe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&a&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new RN(P_(o.path),c,{includeMetadataChanges:!0,Uu:!0});return NN(i,h)}(await VN(e),e.asyncQueue,t,n,r)),r.promise}function Jj(e,t,n={}){const r=new ji;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new BN({next:p=>{s.enqueueAndForget(()=>ON(i,h)),p.fromCache&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new RN(o,c,{includeMetadataChanges:!0,Uu:!0});return NN(i,h)}(await VN(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */const Zk=new Map;/**
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
 */function jN(e,t,n){if(!n)throw new fe(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Zj(e,t,n,r){if(t===!0&&r===!0)throw new fe(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function e2(e){if(!pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function t2(e){if(pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function K_(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Se()}function ui(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=K_(e);throw new fe(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class n2{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new fe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new fe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zj("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Qm{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n2({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new fe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n2(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wz;switch(n.type){case"firstParty":return new Ez(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new fe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Zk.get(t);n&&(ce("ComponentProvider","Removing Datastore"),Zk.delete(t),n.terminate())}(this),Promise.resolve()}}function eY(e,t,n,r={}){var i;const s=(e=ui(e,Qm))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&xl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=pn.MOCK_USER;else{o=Kb(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new fe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pn(u)}e._authCredentials=new _z(new BA(o,a))}}/**
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
 */class Wn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ws(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Wn(this.firestore,t,this._key)}}class Xm{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Xm(this.firestore,t,this._query)}}class Ws extends Xm{constructor(t,n,r){super(t,n,P_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Wn(this.firestore,null,new pe(t))}withConverter(t){return new Ws(this.firestore,t,this._path)}}function fo(e,t,...n){if(e=Rt(e),jN("collection","path",t),e instanceof Qm){const r=vt.fromString(t,...n);return t2(r),new Ws(e,null,r)}{if(!(e instanceof Wn||e instanceof Ws))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vt.fromString(t,...n));return t2(r),new Ws(e.firestore,null,r)}}function ql(e,t,...n){if(e=Rt(e),arguments.length===1&&(t=zA.A()),jN("doc","path",t),e instanceof Qm){const r=vt.fromString(t,...n);return e2(r),new Wn(e,null,new pe(r))}{if(!(e instanceof Wn||e instanceof Ws))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vt.fromString(t,...n));return e2(r),new Wn(e.firestore,e instanceof Ws?e.converter:null,new pe(r))}}/**
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
 */class tY{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new xN(this,"async_queue_retry"),this.Yc=()=>{const n=iv();n&&ce("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=iv();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=iv();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new ji;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!Sd(t))throw t;ce("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Zi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(t,n,r){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const i=W_.createAndSchedule(this,t,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&Se()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class Kl extends Qm{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new tY,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||YN(this),this._firestoreClient.terminate()}}function nY(e,t){const n=typeof e=="object"?e:Gw(),r=typeof e=="string"?e:t||"(default)",i=Sm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gb("firestore");s&&eY(i,...s)}return i}function Q_(e){return e._firestoreClient||YN(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function YN(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,u,c){return new Mz(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Gj(e._authCredentials,e._appCheckCredentials,e._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class bl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bl(Cn.fromBase64String(t))}catch(n){throw new fe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new bl(Cn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Jm{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new fe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class X_{constructor(t){this._methodName=t}}/**
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
 */class J_{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new fe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new fe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return He(this._lat,t._lat)||He(this._long,t._long)}}/**
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
 */const rY=/^__.*__$/;class iY{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ho(t,this.data,this.fieldMask,n,this.fieldTransforms):new xd(t,this.data,n,this.fieldTransforms)}}class WN{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ho(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function HN(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class Z_{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new Z_(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.la(t),i}fa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.oa(),i}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return Sp(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if(HN(this.ua)&&rY.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class sY{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Gm(t)}ga(t,n,r,i=!1){return new Z_({ua:t,methodName:n,ma:r,path:vn.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eS(e){const t=e._freezeSettings(),n=Gm(e._databaseId);return new sY(e._databaseId,!!t.ignoreUndefinedProperties,n)}function GN(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);tS("Data must be an object, but it was:",o,r);const a=qN(r,o);let u,c;if(s.merge)u=new Xn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=s1(t,p,n);if(!o.contains(m))throw new fe(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);QN(h,m)||h.push(m)}u=new Xn(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new iY(new Un(a),u,c)}class Zm extends X_{_toFieldTransform(t){if(t.ua!==2)throw t.ua===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zm}}function oY(e,t,n,r){const i=e.ga(1,t,n);tS("Data must be an object, but it was:",i,r);const s=[],o=Un.empty();da(r,(u,c)=>{const h=nS(t,u,n);c=Rt(c);const p=i.fa(h);if(c instanceof Zm)s.push(h);else{const m=eg(c,p);m!=null&&(s.push(h),o.set(h,m))}});const a=new Xn(s);return new WN(o,a,i.fieldTransforms)}function aY(e,t,n,r,i,s){const o=e.ga(1,t,n),a=[s1(t,r,n)],u=[i];if(s.length%2!=0)throw new fe(H.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(s1(t,s[m])),u.push(s[m+1]);const c=[],h=Un.empty();for(let m=a.length-1;m>=0;--m)if(!QN(c,a[m])){const w=a[m];let _=u[m];_=Rt(_);const S=o.fa(w);if(_ instanceof Zm)c.push(w);else{const k=eg(_,S);k!=null&&(c.push(w),h.set(w,k))}}const p=new Xn(c);return new WN(h,p,o.fieldTransforms)}function eg(e,t){if(KN(e=Rt(e)))return tS("Unsupported field value:",t,e),qN(e,t);if(e instanceof X_)return function(n,r){if(!HN(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=eg(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iV(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ht.fromDate(n);return{timestampValue:wp(r.serializer,i)}}if(n instanceof Ht){const i=new Ht(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wp(r.serializer,i)}}if(n instanceof J_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bl)return{bytesValue:pN(r.serializer,n._byteString)};if(n instanceof Wn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:F_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${K_(n)}`)}(e,t)}function qN(e,t){const n={};return VA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):da(e,(r,i)=>{const s=eg(i,t.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function KN(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ht||e instanceof J_||e instanceof bl||e instanceof Wn||e instanceof X_)}function tS(e,t,n){if(!KN(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=K_(n);throw r==="an object"?t._a(e+" a custom object"):t._a(e+" "+r)}}function s1(e,t,n){if((t=Rt(t))instanceof Jm)return t._internalPath;if(typeof t=="string")return nS(e,t);throw Sp("Field path arguments must be of type string or ",e,!1,void 0,n)}const lY=new RegExp("[~\\*/\\[\\]]");function nS(e,t,n){if(t.search(lY)>=0)throw Sp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jm(...t.split("."))._internalPath}catch{throw Sp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Sp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new fe(H.INVALID_ARGUMENT,a+e+u)}function QN(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class XN{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new uY(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(JN("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uY extends XN{data(){return super.data()}}function JN(e,t){return typeof t=="string"?nS(e,t):t instanceof Jm?t._internalPath:t._delegate._internalPath}/**
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
 */function cY(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new fe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dY{convertValue(t,n="none"){switch(ta(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ea(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Se()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return da(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new J_(Mt(t.latitude),Mt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=A_(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Lc(t));default:return null}}convertTimestamp(t){const n=eo(t);return new Ht(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=vt.fromString(t);lt(wN(r));const i=new $c(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||Zi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ZN(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Mu{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eO extends XN{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new af(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(JN("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class af extends eO{data(t={}){return super.data(t)}}class hY{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Mu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new af(this._firestore,this._userDataWriter,r.key,r,new Mu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new af(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Mu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new af(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Mu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:fY(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fY(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}/**
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
 */function rS(e){e=ui(e,Wn);const t=ui(e.firestore,Kl);return Xj(Q_(t),e._key).then(n=>gY(t,e,n))}class tO extends dY{constructor(t){super(),this.firestore=t}convertBytes(t){return new bl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Wn(this.firestore,null,n)}}function tg(e){e=ui(e,Xm);const t=ui(e.firestore,Kl),n=Q_(t),r=new tO(t);return cY(e._query),Jj(n,e._query).then(i=>new hY(t,r,e,i))}function pY(e,t,n){e=ui(e,Wn);const r=ui(e.firestore,Kl),i=ZN(e.converter,t,n);return iS(r,[GN(eS(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Fr.none())])}function mY(e,t,n,...r){e=ui(e,Wn);const i=ui(e.firestore,Kl),s=eS(i);let o;return o=typeof(t=Rt(t))=="string"||t instanceof Jm?aY(s,"updateDoc",e._key,t,n,r):oY(s,"updateDoc",e._key,t),iS(i,[o.toMutation(e._key,Fr.exists(!0))])}function ng(e,t){const n=ui(e.firestore,Kl),r=ql(e),i=ZN(e.converter,t);return iS(n,[GN(eS(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Fr.exists(!1))]).then(()=>r)}function iS(e,t){return function(n,r){const i=new ji;return n.asyncQueue.enqueueAndForget(async()=>$j(await Qj(n),r,i)),i.promise}(Q_(e),t)}function gY(e,t,n){const r=n.docs.get(t._key),i=new tO(e);return new eO(e,i,t._key,r,new Mu(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Wl=n})(la),Qo(new Js("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Kl(new Sz(n.getProvider("auth-internal")),new kz(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new fe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $c(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ri(Ek,"3.11.0",e),ri(Ek,"3.11.0","esm2017")})();/**
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
 */const nO="firebasestorage.googleapis.com",rO="storageBucket",vY=2*60*1e3,yY=10*60*1e3;/**
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
 */class Dt extends pi{constructor(t,n,r=0){super(ov(t),`Firebase Storage: ${n} (${ov(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ov(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function ov(e){return"storage/"+e}function sS(){const e="An unknown error occurred, please check the error payload for server response.";return new Dt(Tt.UNKNOWN,e)}function wY(e){return new Dt(Tt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function _Y(e){return new Dt(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SY(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Dt(Tt.UNAUTHENTICATED,e)}function xY(){return new Dt(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function EY(e){return new Dt(Tt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function CY(){return new Dt(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kY(){return new Dt(Tt.CANCELED,"User canceled the upload/download.")}function TY(e){return new Dt(Tt.INVALID_URL,"Invalid URL '"+e+"'.")}function DY(e){return new Dt(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function bY(){return new Dt(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rO+"' property when initializing the app?")}function IY(){return new Dt(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AY(){return new Dt(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NY(e){return new Dt(Tt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function o1(e){return new Dt(Tt.INVALID_ARGUMENT,e)}function iO(){return new Dt(Tt.APP_DELETED,"The Firebase app was deleted.")}function OY(e){return new Dt(Tt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ju(e,t){return new Dt(Tt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function _u(e){throw new Dt(Tt.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class Jn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Jn.makeFromUrl(t,n)}catch{return new Jn(t,"")}if(r.path==="")return r;throw DY(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${h}/b/${i}/o${m}`,"i"),_={bucket:1,path:3},S=n===nO?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",x=new RegExp(`^https?://${S}/${i}/${k}`,"i"),C=[{regex:a,indices:u,postModify:s},{regex:w,indices:_,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<C.length;T++){const I=C[T],R=I.regex.exec(t);if(R){const A=R[I.indices.bucket];let O=R[I.indices.path];O||(O=""),r=new Jn(A,O),I.postModify(r);break}}if(r==null)throw TY(t);return r}}class RY{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function PY(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...k){c||(c=!0,t.apply(null,k))}function p(k){i=setTimeout(()=>{i=null,e(w,u())},k)}function m(){s&&clearTimeout(s)}function w(k,...x){if(c){m();return}if(k){m(),h.call(null,k,...x);return}if(u()||o){m(),h.call(null,k,...x);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,p(C)}let _=!1;function S(k){_||(_=!0,m(),!c&&(i!==null?(k||(a=2),clearTimeout(i),p(0)):k||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,S(!0)},n),S}function MY(e){e(!1)}/**
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
 */function LY(e){return e!==void 0}function $Y(e){return typeof e=="object"&&!Array.isArray(e)}function oS(e){return typeof e=="string"||e instanceof String}function r2(e){return aS()&&e instanceof Blob}function aS(){return typeof Blob!="undefined"&&!Y8()}function i2(e,t,n,r){if(r<t)throw o1(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw o1(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function lS(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function sO(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function FY(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class UY{constructor(t,n,r,i,s,o,a,u,c,h,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,_)=>{this.resolve_=w,this.reject_=_,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Mh(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Uo.NO_ERROR,u=s.getStatus();if(!a||FY(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Uo.ABORT;r(!1,new Mh(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Mh(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());LY(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=sS();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?iO():kY();o(u)}else{const u=CY();o(u)}};this.canceled_?n(!1,new Mh(!1,null,!0)):this.backoffId_=PY(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&MY(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mh{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function BY(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function zY(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function VY(e,t){t&&(e["X-Firebase-GMPID"]=t)}function jY(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function YY(e,t,n,r,i,s,o=!0){const a=sO(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return VY(c,t),BY(c,n),zY(c,s),jY(c,r),new UY(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function WY(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function HY(...e){const t=WY();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(aS())return new Blob(e);throw new Dt(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function GY(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function qY(e){if(typeof atob=="undefined")throw NY("base-64");return atob(e)}/**
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
 */const Zr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class av{constructor(t,n){this.data=t,this.contentType=n||null}}function KY(e,t){switch(e){case Zr.RAW:return new av(oO(t));case Zr.BASE64:case Zr.BASE64URL:return new av(aO(e,t));case Zr.DATA_URL:return new av(XY(t),JY(t))}throw sS()}function oO(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function QY(e){let t;try{t=decodeURIComponent(e)}catch{throw Ju(Zr.DATA_URL,"Malformed data URL.")}return oO(t)}function aO(e,t){switch(e){case Zr.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw Ju(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Zr.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw Ju(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=qY(t)}catch(i){throw i.message.includes("polyfill")?i:Ju(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class lO{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Ju(Zr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ZY(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function XY(e){const t=new lO(e);return t.base64?aO(Zr.BASE64,t.rest):QY(t.rest)}function JY(e){return new lO(e).contentType}function ZY(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Es{constructor(t,n){let r=0,i="";r2(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(r2(this.data_)){const r=this.data_,i=GY(r,t,n);return i===null?null:new Es(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Es(r,!0)}}static getBlob(...t){if(aS()){const n=t.map(r=>r instanceof Es?r.data_:r);return new Es(HY.apply(null,n))}else{const n=t.map(o=>oS(o)?KY(Zr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Es(i,!0)}}uploadData(){return this.data_}}/**
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
 */function uO(e){let t;try{t=JSON.parse(e)}catch{return null}return $Y(t)?t:null}/**
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
 */function eW(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function tW(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function cO(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function nW(e,t){return t}class In{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||nW}}let Lh=null;function rW(e){return!oS(e)||e.length<2?e:cO(e)}function dO(){if(Lh)return Lh;const e=[];e.push(new In("bucket")),e.push(new In("generation")),e.push(new In("metageneration")),e.push(new In("name","fullPath",!0));function t(s,o){return rW(o)}const n=new In("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new In("size");return i.xform=r,e.push(i),e.push(new In("timeCreated")),e.push(new In("updated")),e.push(new In("md5Hash",null,!0)),e.push(new In("cacheControl",null,!0)),e.push(new In("contentDisposition",null,!0)),e.push(new In("contentEncoding",null,!0)),e.push(new In("contentLanguage",null,!0)),e.push(new In("contentType",null,!0)),e.push(new In("metadata","customMetadata",!0)),Lh=e,Lh}function iW(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Jn(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function sW(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return iW(r,e),r}function hO(e,t,n){const r=uO(t);return r===null?null:sW(e,r,n)}function oW(e,t,n,r){const i=uO(t);if(i===null||!oS(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=e.bucket,p=e.fullPath,m="/b/"+o(h)+"/o/"+o(p),w=lS(m,n,r),_=sO({alt:"media",token:c});return w+_})[0]}function aW(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class fO{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pO(e){if(!e)throw sS()}function lW(e,t){function n(r,i){const s=hO(e,i,t);return pO(s!==null),s}return n}function uW(e,t){function n(r,i){const s=hO(e,i,t);return pO(s!==null),oW(s,i,e.host,e._protocol)}return n}function mO(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=xY():i=SY():n.getStatus()===402?i=_Y(e.bucket):n.getStatus()===403?i=EY(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function cW(e){const t=mO(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=wY(e.path)),s.serverResponse=i.serverResponse,s}return n}function dW(e,t,n){const r=t.fullServerUrl(),i=lS(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new fO(i,s,uW(e,n),o);return a.errorHandler=cW(t),a}function hW(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function fW(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=hW(null,t)),r}function pW(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let T=0;T<2;T++)C=C+Math.random().toString().slice(2);return C}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=fW(t,r,i),h=aW(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",w=Es.getBlob(p,r,m);if(w===null)throw IY();const _={name:c.fullPath},S=lS(s,e.host,e._protocol),k="POST",x=e.maxUploadRetryTime,v=new fO(S,k,lW(e,n),x);return v.urlParams=_,v.headers=o,v.body=w.uploadData(),v.errorHandler=mO(t),v}class mW{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Uo.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Uo.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Uo.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw _u("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _u("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _u("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _u("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _u("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class gW extends mW{initXhr(){this.xhr_.responseType="text"}}function gO(){return new gW}/**
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
 */class na{constructor(t,n){this._service=t,n instanceof Jn?this._location=n:this._location=Jn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new na(t,n)}get root(){const t=new Jn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cO(this._location.path)}get storage(){return this._service}get parent(){const t=eW(this._location.path);if(t===null)return null;const n=new Jn(this._location.bucket,t);return new na(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw OY(t)}}function vW(e,t,n){e._throwIfRoot("uploadBytes");const r=pW(e.storage,e._location,dO(),new Es(t,!0),n);return e.storage.makeRequestWithTokens(r,gO).then(i=>({metadata:i,ref:e}))}function yW(e){e._throwIfRoot("getDownloadURL");const t=dW(e.storage,e._location,dO());return e.storage.makeRequestWithTokens(t,gO).then(n=>{if(n===null)throw AY();return n})}function wW(e,t){const n=tW(e._location.path,t),r=new Jn(e._location.bucket,n);return new na(e.storage,r)}/**
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
 */function _W(e){return/^[A-Za-z]+:\/\//.test(e)}function SW(e,t){return new na(e,t)}function vO(e,t){if(e instanceof uS){const n=e;if(n._bucket==null)throw bY();const r=new na(n,n._bucket);return t!=null?vO(r,t):r}else return t!==void 0?wW(e,t):e}function xW(e,t){if(t&&_W(t)){if(e instanceof uS)return SW(e,t);throw o1("To use ref(service, url), the first argument must be a Storage instance.")}else return vO(e,t)}function s2(e,t){const n=t==null?void 0:t[rO];return n==null?null:Jn.makeFromBucketSpec(n,e)}function EW(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Kb(i,e.app.options.projectId))}class uS{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nO,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vY,this._maxUploadRetryTime=yY,this._requests=new Set,i!=null?this._bucket=Jn.makeFromBucketSpec(i,this._host):this._bucket=s2(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Jn.makeFromBucketSpec(this._url,t):this._bucket=s2(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){i2("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){i2("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new na(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new RY(iO());{const o=YY(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const o2="@firebase/storage",a2="0.11.2";/**
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
 */const yO="storage";function Td(e,t,n){return e=Rt(e),vW(e,t,n)}function Dd(e){return e=Rt(e),yW(e)}function ci(e,t){return e=Rt(e),xW(e,t)}function CW(e=Gw(),t){e=Rt(e);const r=Sm(e,yO).getImmediate({identifier:t}),i=Gb("storage");return i&&kW(r,...i),r}function kW(e,t,n,r={}){EW(e,t,n,r)}function TW(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new uS(n,r,i,t,la)}function DW(){Qo(new Js(yO,TW,"PUBLIC").setMultipleInstances(!0)),ri(o2,a2,""),ri(o2,a2,"esm2017")}DW();const bW={apiKey:"AIzaSyB6eD_2vEo_ZIjZbDoRg7cX92y81sB0Auc",authDomain:"myclothesapp-cf59a.firebaseapp.com",projectId:"myclothesapp-cf59a",storageBucket:"myclothesapp-cf59a.appspot.com",messagingSenderId:"610226156284",appId:"1:610226156284:web:9336ebebf0a17d99eb1d79",measurementId:"G-LNG72F75QC"},wO=Jb(bW),no=hB(wO),lr=nY(wO),bd=CW(),a1=ar("login/googleLogin",async()=>{const e=new Ni,n=(await S7(no,e)).user;console.log(n);const r=ql(lr,"users",n.uid);return(await rS(r)).data()}),l1=ar("auth/login",async e=>{try{const{email:t,password:n}=e;await CI(no,n_);const i=(await JU(no,t,n)).user,s=ql(lr,"users",i.uid),o=await rS(s);if(!o.exists())throw new Error("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4.");return o.data()}catch(t){return wm(t.message)}}),u1=ar("auth/signOut",async()=>{try{await t7(no),await CI(no,n_)}catch(e){return wm(e.message)}}),IW=async e=>{const t=ci(bd,"users_photos"),n=ci(t,e.name);return await Td(n,e),await Dd(n)},c1=ar("login/updateUserData",async(e,{getState:t})=>{try{const n=no.currentUser;if(n){const r=ql(lr,"users",n.uid),s=t().login.user;let o={...e};if(e.photo){const u=await IW(e.photo);o.photo=u,delete o.photo}const a={...s,...o};return await mY(r,a),e}else throw new Error("\uC0AC\uC6A9\uC790\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}catch(n){return wm(n.message)}}),AW=()=>e=>{no.onAuthStateChanged(async t=>{if(t){const n=ql(lr,"users",t.uid),r=await rS(n);if(r.exists()){const i=r.data();e({type:"login/loginSuccess",payload:i}),localStorage.setItem("user",JSON.stringify(i))}}else e({type:"login/logout"}),localStorage.removeItem("user")})},NW=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},OW=aa({name:"login",initialState:{user:NW()},extraReducers:e=>{e.addCase(`${a1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${a1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC778 \uC2E4\uD328!"),console.log(n.payload)}),e.addCase(`${l1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${l1.rejected}`,(t,n)=>n.error),e.addCase(`${c1.fulfilled}`,(t,n)=>{t.user={...t.user,...n.payload},t.error=null}),e.addCase(`${c1.rejected}`,(t,n)=>{t.updated=null,t.error=n.payload}),e.addCase(`${u1.fulfilled}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5!"),t.user=null}),e.addCase(`${u1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328!"),console.log(n.payload)})}});var RW=OW.reducer,_O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l2=Qt.createContext&&Qt.createContext(_O),Hs=globalThis&&globalThis.__assign||function(){return Hs=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Hs.apply(this,arguments)},PW=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function SO(e){return e&&e.map(function(t,n){return Qt.createElement(t.tag,Hs({key:n},t.attr),SO(t.child))})}function ur(e){return function(t){return Qt.createElement(MW,Hs({attr:Hs({},e.attr)},t),SO(e.child))}}function MW(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=PW(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Qt.createElement("svg",Hs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Hs(Hs({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Qt.createElement("title",null,s),e.children)};return l2!==void 0?Qt.createElement(l2.Consumer,null,function(n){return t(n)}):t(_O)}function LW(e){return ur({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function $W(e){return ur({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}function FW(e){return ur({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"}}]})(e)}function UW(e){return ur({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]})(e)}function BW(e){return ur({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z"}}]})(e)}function rg(e){return ur({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(e)}function zW(e){return ur({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(e)}function VW(e){return ur({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"}}]})(e)}function jW(e){return ur({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"}}]})(e)}const YW=({toggle:e,toggleMenu:t})=>{const[n,r]=L.exports.useState(!1),[i,s]=L.exports.useState(null),o=rt(k=>k.login.user),a=sr(),u=rd(),c=en(),h=o==null?void 0:o.nickname,p=()=>{confirm("\uC815\uB9D0 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&(c(u1()),a("/"))},m=k=>{s(k),window.innerWidth<=768&&w()},w=()=>{s(null),t()},_=()=>o?N("div",{className:"users",children:[y("li",{className:"item user_nickname",children:y(Nn,{to:"/account",onClick:()=>m(null),children:h})}),y("li",{className:"item logOut",children:y("span",{onClick:p,children:y(zW,{})})})]}):y("div",{className:"users sign",children:y("li",{className:"item_account",children:y(Nn,{to:"account/login",className:"account",onClick:()=>m(null),children:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"})})});return L.exports.useEffect(()=>{const k=()=>{window.scrollY>=60?r(!0):r(!1)};return window.addEventListener("scroll",k),()=>{window.removeEventListener("scroll",k)}},[]),u.pathname==="/account/signup"||u.pathname==="/account/login"?null:y(sF,{style:{borderBottom:n?"1px solid #e3e3e3":""},children:N("div",{className:"contents",children:[y("div",{className:"logo",children:y("h1",{onClick:()=>{a("/"),s(null)},children:"ModArt"})}),N("ul",{className:`navbar${e?" mobile":""}`,children:[N("div",{className:"list",children:[y("li",{className:`item ${i===0?"active":""}`,children:y(Nn,{to:"/",onClick:m,children:"HOME"})}),y("li",{className:`item ${i===1?"active":""}`,children:y(Nn,{to:"/board",onClick:()=>m(1),children:"OOTD"})}),y("li",{className:`item ${i===2?"active":""}`,children:y(Nn,{to:"/photo",onClick:()=>m(2),children:"Photo"})}),y("li",{className:`item ${i===3?"active":""}`,children:y(Nn,{to:"/today",onClick:()=>m(3),children:"TodayStory"})}),y("li",{className:`item ${i===4?"active":""}`,children:y(Nn,{to:"/qna",onClick:()=>m(4),children:"QnA"})})]}),_()]}),y("div",{className:"toggle",onClick:w,children:e?y(jW,{}):y(LW,{})})]})})};var WW=Qt.memo(YW);function u2(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function HW(e,t,n){return t&&u2(e.prototype,t),n&&u2(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var c2="(prefers-reduced-motion: reduce)",Ya=1,GW=2,Il=3,Ql=4,Id=5,lf=6,xp=7,qW={CREATED:Ya,MOUNTED:GW,IDLE:Il,MOVING:Ql,SCROLLING:Id,DRAGGING:lf,DESTROYED:xp};function ns(e){e.length=0}function po(e,t,n){return Array.prototype.slice.call(e,t,n)}function nt(e){return e.bind.apply(e,[null].concat(po(arguments,1)))}var xO=setTimeout,d1=function(){};function d2(e){return requestAnimationFrame(e)}function ig(e,t){return typeof t===e}function zc(e){return!dS(e)&&ig("object",e)}var cS=Array.isArray,EO=nt(ig,"function"),ro=nt(ig,"string"),Ad=nt(ig,"undefined");function dS(e){return e===null}function CO(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Nd(e){return cS(e)?e:[e]}function xr(e,t){Nd(e).forEach(t)}function hS(e,t){return e.indexOf(t)>-1}function uf(e,t){return e.push.apply(e,Nd(t)),e}function Fi(e,t,n){e&&xr(t,function(r){r&&e.classList[n?"add":"remove"](r)})}function di(e,t){Fi(e,ro(t)?t.split(" "):t,!0)}function Od(e,t){xr(t,e.appendChild.bind(e))}function fS(e,t){xr(e,function(n){var r=(t||n).parentNode;r&&r.insertBefore(n,t)})}function Vc(e,t){return CO(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function kO(e,t){var n=e?po(e.children):[];return t?n.filter(function(r){return Vc(r,t)}):n}function Rd(e,t){return t?kO(e,t)[0]:e.firstElementChild}var jc=Object.keys;function Bo(e,t,n){return e&&(n?jc(e).reverse():jc(e)).forEach(function(r){r!=="__proto__"&&t(e[r],r)}),e}function Yc(e){return po(arguments,1).forEach(function(t){Bo(t,function(n,r){e[r]=t[r]})}),e}function bs(e){return po(arguments,1).forEach(function(t){Bo(t,function(n,r){cS(n)?e[r]=n.slice():zc(n)?e[r]=bs({},zc(e[r])?e[r]:{},n):e[r]=n})}),e}function h2(e,t){xr(t||jc(e),function(n){delete e[n]})}function hi(e,t){xr(e,function(n){xr(t,function(r){n&&n.removeAttribute(r)})})}function be(e,t,n){zc(t)?Bo(t,function(r,i){be(e,i,r)}):xr(e,function(r){dS(n)||n===""?hi(r,t):r.setAttribute(t,String(n))})}function ol(e,t,n){var r=document.createElement(e);return t&&(ro(t)?di(r,t):be(r,t)),n&&Od(n,r),r}function Or(e,t,n){if(Ad(n))return getComputedStyle(e)[t];dS(n)||(e.style[t]=""+n)}function Wc(e,t){Or(e,"display",t)}function TO(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function Pr(e,t){return e.getAttribute(t)}function f2(e,t){return e&&e.classList.contains(t)}function fr(e){return e.getBoundingClientRect()}function ra(e){xr(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function DO(e){return Rd(new DOMParser().parseFromString(e,"text/html").body)}function Ai(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function bO(e,t){return e&&e.querySelector(t)}function pS(e,t){return t?po(e.querySelectorAll(t)):[]}function Ui(e,t){Fi(e,t,!1)}function h1(e){return e.timeStamp}function So(e){return ro(e)?e:e?e+"px":""}var Pd="splide",mS="data-"+Pd;function Zu(e,t){if(!e)throw new Error("["+Pd+"] "+(t||""))}var io=Math.min,Ep=Math.max,Cp=Math.floor,Hc=Math.ceil,zn=Math.abs;function IO(e,t,n){return zn(e-t)<n}function cf(e,t,n,r){var i=io(t,n),s=Ep(t,n);return r?i<e&&e<s:i<=e&&e<=s}function Da(e,t,n){var r=io(t,n),i=Ep(t,n);return io(Ep(r,e),i)}function f1(e){return+(e>0)-+(e<0)}function p1(e,t){return xr(t,function(n){e=e.replace("%s",""+n)}),e}function gS(e){return e<10?"0"+e:""+e}var p2={};function KW(e){return""+e+gS(p2[e]=(p2[e]||0)+1)}function AO(){var e=[];function t(o,a,u,c){i(o,a,function(h,p,m){var w="addEventListener"in h,_=w?h.removeEventListener.bind(h,p,u,c):h.removeListener.bind(h,u);w?h.addEventListener(p,u,c):h.addListener(u),e.push([h,p,m,u,_])})}function n(o,a,u){i(o,a,function(c,h,p){e=e.filter(function(m){return m[0]===c&&m[1]===h&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,h=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:h,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,h,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){xr(o,function(c){c&&xr(a,function(h){h.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),ns(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var mo="mounted",m1="ready",rs="move",Xl="moved",vS="click",NO="active",OO="inactive",RO="visible",PO="hidden",$t="refresh",Pn="updated",Al="resize",sg="resized",MO="drag",LO="dragging",$O="dragged",og="scroll",fa="scrolled",QW="overflow",yS="destroy",FO="arrows:mounted",UO="arrows:updated",BO="pagination:mounted",zO="pagination:updated",wS="navigation:mounted",_S="autoplay:play",VO="autoplay:playing",SS="autoplay:pause",xS="lazyload:loaded",jO="sk",YO="sh",kp="ei";function Et(e){var t=e?e.event.bus:document.createDocumentFragment(),n=AO();function r(s,o){n.bind(t,Nd(s).join(" "),function(a){o.apply(o,cS(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,po(arguments,1))}return e&&e.event.on(yS,n.destroy),Yc(n,{bus:t,on:r,off:nt(n.unbind,t),emit:i})}function ag(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function h(){if(!u){if(o=e?io((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();a=d2(h)}}function p(x){x||_(),s=i()-(x?o*e:0),u=!1,a=d2(h)}function m(){u=!0}function w(){s=i(),o=0,n&&n(o)}function _(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function S(x){e=x}function k(){return u}return{start:p,rewind:w,pause:m,cancel:_,set:S,isPaused:k}}function XW(e){var t=e;function n(i){t=i}function r(i){return hS(Nd(i),t)}return{set:n,is:r}}function JW(e,t){var n=ag(t||0,e,null,1);return function(){n.isPaused()&&n.start()}}function ZW(e,t,n){var r=e.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=AO(),a=[];function u(){var _=n.mediaQuery==="min";jc(i).sort(function(S,k){return _?+S-+k:+k-+S}).forEach(function(S){h(i[S],"("+(_?"min":"max")+"-width:"+S+"px)")}),h(s,c2),p()}function c(_){_&&o.destroy()}function h(_,S){var k=matchMedia(S);o.bind(k,"change",p),a.push([_,k])}function p(){var _=r.is(xp),S=n.direction,k=a.reduce(function(x,v){return bs(x,v[1].matches?v[0]:{})},{});h2(n),w(k),n.destroy?e.destroy(n.destroy==="completely"):_?(c(!0),e.mount()):S!==n.direction&&e.refresh()}function m(_){matchMedia(c2).matches&&(_?bs(n,s):h2(n,jc(s)))}function w(_,S,k){bs(n,_),S&&bs(Object.getPrototypeOf(n),_),(k||!r.is(Ya))&&e.emit(Pn,n)}return{setup:u,destroy:c,reduce:m,set:w}}var lg="Arrow",ug=lg+"Left",cg=lg+"Right",WO=lg+"Up",HO=lg+"Down",m2="rtl",dg="ttb",lv={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[WO,cg],ArrowRight:[HO,ug]};function eH(e,t,n){function r(s,o,a){a=a||n.direction;var u=a===m2&&!o?1:a===dg?0:-1;return lv[s]&&lv[s][u]||s.replace(/width|left|right/i,function(c,h){var p=lv[c.toLowerCase()][u]||c;return h>0?p.charAt(0).toUpperCase()+p.slice(1):p})}function i(s){return s*(n.direction===m2?1:-1)}return{resolve:r,orient:i}}var Yi="role",al="tabindex",tH="disabled",jr="aria-",Md=jr+"controls",GO=jr+"current",g2=jr+"selected",vr=jr+"label",ES=jr+"labelledby",qO=jr+"hidden",CS=jr+"orientation",Gc=jr+"roledescription",v2=jr+"live",y2=jr+"busy",w2=jr+"atomic",kS=[Yi,al,tH,Md,GO,vr,ES,qO,CS,Gc],mi=Pd+"__",go="is-",uv=Pd,_2=mi+"track",nH=mi+"list",hg=mi+"slide",KO=hg+"--clone",rH=hg+"__container",TS=mi+"arrows",fg=mi+"arrow",QO=fg+"--prev",XO=fg+"--next",pg=mi+"pagination",JO=pg+"__page",iH=mi+"progress",sH=iH+"__bar",oH=mi+"toggle",aH=mi+"spinner",lH=mi+"sr",uH=go+"initialized",ia=go+"active",ZO=go+"prev",eR=go+"next",g1=go+"visible",v1=go+"loading",tR=go+"focus-in",nR=go+"overflow",cH=[ia,g1,ZO,eR,v1,tR,nR],dH={slide:hg,clone:KO,arrows:TS,arrow:fg,prev:QO,next:XO,pagination:pg,page:JO,spinner:aH};function hH(e,t){if(EO(e.closest))return e.closest(t);for(var n=e;n&&n.nodeType===1&&!Vc(n,t);)n=n.parentElement;return n}var fH=5,S2=200,rR="touchstart mousedown",cv="touchmove mousemove",dv="touchend touchcancel mouseup click";function pH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=e.root,a=n.i18n,u={},c=[],h=[],p=[],m,w,_;function S(){C(),T(),v()}function k(){i($t,x),i($t,S),i(Pn,v),s(document,rR+" keydown",function(A){_=A.type==="keydown"},{capture:!0}),s(o,"focusin",function(){Fi(o,tR,!!_)})}function x(A){var O=kS.concat("style");ns(c),Ui(o,h),Ui(m,p),hi([m,w],O),hi(o,A?O:["style",Gc])}function v(){Ui(o,h),Ui(m,p),h=R(uv),p=R(_2),di(o,h),di(m,p),be(o,vr,n.label),be(o,ES,n.labelledby)}function C(){m=I("."+_2),w=Rd(m,"."+nH),Zu(m&&w,"A track/list element is missing."),uf(c,kO(w,"."+hg+":not(."+KO+")")),Bo({arrows:TS,pagination:pg,prev:QO,next:XO,bar:sH,toggle:oH},function(A,O){u[O]=I("."+A)}),Yc(u,{root:o,track:m,list:w,slides:c})}function T(){var A=o.id||KW(Pd),O=n.role;o.id=A,m.id=m.id||A+"-track",w.id=w.id||A+"-list",!Pr(o,Yi)&&o.tagName!=="SECTION"&&O&&be(o,Yi,O),be(o,Gc,a.carousel),be(w,Yi,"presentation")}function I(A){var O=bO(o,A);return O&&hH(O,"."+uv)===o?O:void 0}function R(A){return[A+"--"+n.type,A+"--"+n.direction,n.drag&&A+"--draggable",n.isNavigation&&A+"--nav",A===uv&&ia]}return Yc(u,{setup:S,mount:k,destroy:x})}var Nl="slide",Jl="loop",Ld="fade";function mH(e,t,n,r){var i=Et(e),s=i.on,o=i.emit,a=i.bind,u=e.Components,c=e.root,h=e.options,p=h.isNavigation,m=h.updateOnMove,w=h.i18n,_=h.pagination,S=h.slideFocus,k=u.Direction.resolve,x=Pr(r,"style"),v=Pr(r,vr),C=n>-1,T=Rd(r,"."+rH),I;function R(){C||(r.id=c.id+"-slide"+gS(t+1),be(r,Yi,_?"tabpanel":"group"),be(r,Gc,w.slide),be(r,vr,v||p1(w.slideLabel,[t+1,e.length]))),A()}function A(){a(r,"click",nt(o,vS,$)),a(r,"keydown",nt(o,jO,$)),s([Xl,YO,fa],j),s(wS,Z),m&&s(rs,F)}function O(){I=!0,i.destroy(),Ui(r,cH),hi(r,kS),be(r,"style",x),be(r,vr,v||"")}function Z(){var V=e.splides.map(function(P){var ee=P.splide.Components.Slides.getAt(t);return ee?ee.slide.id:""}).join(" ");be(r,vr,p1(w.slideX,(C?n:t)+1)),be(r,Md,V),be(r,Yi,S?"button":""),S&&hi(r,Gc)}function F(){I||j()}function j(){if(!I){var V=e.index;J(),X(),Fi(r,ZO,t===V-1),Fi(r,eR,t===V+1)}}function J(){var V=oe();V!==f2(r,ia)&&(Fi(r,ia,V),be(r,GO,p&&V||""),o(V?NO:OO,$))}function X(){var V=Te(),P=!V&&(!oe()||C);if(e.state.is([Ql,Id])||be(r,qO,P||""),be(pS(r,h.focusableNodes||""),al,P?-1:""),S&&be(r,al,P?-1:0),V!==f2(r,g1)&&(Fi(r,g1,V),o(V?RO:PO,$)),!V&&document.activeElement===r){var ee=u.Slides.getAt(e.index);ee&&TO(ee.slide)}}function ue(V,P,ee){Or(ee&&T||r,V,P)}function oe(){var V=e.index;return V===t||h.cloneStatus&&V===n}function Te(){if(e.is(Ld))return oe();var V=fr(u.Elements.track),P=fr(r),ee=k("left",!0),U=k("right",!0);return Cp(V[ee])<=Hc(P[ee])&&Cp(P[U])<=Hc(V[U])}function ge(V,P){var ee=zn(V-t);return!C&&(h.rewind||e.is(Jl))&&(ee=io(ee,e.length-ee)),ee<=P}var $={index:t,slideIndex:n,slide:r,container:T,isClone:C,mount:R,destroy:O,update:j,style:ue,isWithin:ge};return $}function gH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=t.Elements,u=a.slides,c=a.list,h=[];function p(){m(),i($t,w),i($t,m)}function m(){u.forEach(function(j,J){S(j,J,-1)})}function w(){I(function(j){j.destroy()}),ns(h)}function _(){I(function(j){j.update()})}function S(j,J,X){var ue=mH(e,J,X,j);ue.mount(),h.push(ue),h.sort(function(oe,Te){return oe.index-Te.index})}function k(j){return j?R(function(J){return!J.isClone}):h}function x(j){var J=t.Controller,X=J.toIndex(j),ue=J.hasFocus()?1:n.perPage;return R(function(oe){return cf(oe.index,X,X+ue-1)})}function v(j){return R(j)[0]}function C(j,J){xr(j,function(X){if(ro(X)&&(X=DO(X)),CO(X)){var ue=u[J];ue?fS(X,ue):Od(c,X),di(X,n.classes.slide),O(X,nt(s,Al))}}),s($t)}function T(j){ra(R(j).map(function(J){return J.slide})),s($t)}function I(j,J){k(J).forEach(j)}function R(j){return h.filter(EO(j)?j:function(J){return ro(j)?Vc(J.slide,j):hS(Nd(j),J.index)})}function A(j,J,X){I(function(ue){ue.style(j,J,X)})}function O(j,J){var X=pS(j,"img"),ue=X.length;ue?X.forEach(function(oe){o(oe,"load error",function(){--ue||J()})}):J()}function Z(j){return j?u.length:h.length}function F(){return h.length>n.perPage}return{mount:p,destroy:w,update:_,register:S,get:k,getIn:x,getAt:v,add:C,remove:T,forEach:I,filter:R,style:A,getLength:Z,isEnough:F}}function vH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=t.Slides,u=t.Direction.resolve,c=t.Elements,h=c.root,p=c.track,m=c.list,w=a.getAt,_=a.style,S,k,x;function v(){C(),s(window,"resize load",JW(nt(o,Al))),i([Pn,$t],C),i(Al,T)}function C(){S=n.direction===dg,Or(h,"maxWidth",So(n.width)),Or(p,u("paddingLeft"),I(!1)),Or(p,u("paddingRight"),I(!0)),T(!0)}function T($){var V=fr(h);($||k.width!==V.width||k.height!==V.height)&&(Or(p,"height",R()),_(u("marginRight"),So(n.gap)),_("width",O()),_("height",Z(),!0),k=V,o(sg),x!==(x=ge())&&(Fi(h,nR,x),o(QW,x)))}function I($){var V=n.padding,P=u($?"right":"left");return V&&So(V[P]||(zc(V)?0:V))||"0px"}function R(){var $="";return S&&($=A(),Zu($,"height or heightRatio is missing."),$="calc("+$+" - "+I(!1)+" - "+I(!0)+")"),$}function A(){return So(n.height||fr(m).width*n.heightRatio)}function O(){return n.autoWidth?null:So(n.fixedWidth)||(S?"":F())}function Z(){return So(n.fixedHeight)||(S?n.autoHeight?null:F():A())}function F(){var $=So(n.gap);return"calc((100%"+($&&" + "+$)+")/"+(n.perPage||1)+($&&" - "+$)+")"}function j(){return fr(m)[u("width")]}function J($,V){var P=w($||0);return P?fr(P.slide)[u("width")]+(V?0:oe()):0}function X($,V){var P=w($);if(P){var ee=fr(P.slide)[u("right")],U=fr(m)[u("left")];return zn(ee-U)+(V?0:oe())}return 0}function ue($){return X(e.length-1)-X(0)+J(0,$)}function oe(){var $=w(0);return $&&parseFloat(Or($.slide,u("marginRight")))||0}function Te($){return parseFloat(Or(p,u("padding"+($?"Right":"Left"))))||0}function ge(){return e.is(Ld)||ue(!0)>j()}return{mount:v,resize:T,listSize:j,slideSize:J,sliderSize:ue,totalSize:X,getPadding:Te,isOverflow:ge}}var yH=2;function wH(e,t,n){var r=Et(e),i=r.on,s=t.Elements,o=t.Slides,a=t.Direction.resolve,u=[],c;function h(){i($t,p),i([Pn,Al],w),(c=k())&&(_(c),t.Layout.resize(!0))}function p(){m(),h()}function m(){ra(u),ns(u),r.destroy()}function w(){var x=k();c!==x&&(c<x||!x)&&r.emit($t)}function _(x){var v=o.get().slice(),C=v.length;if(C){for(;v.length<x;)uf(v,v);uf(v.slice(-x),v.slice(0,x)).forEach(function(T,I){var R=I<x,A=S(T.slide,I);R?fS(A,v[0].slide):Od(s.list,A),uf(u,A),o.register(A,I-x+(R?0:C),T.index)})}}function S(x,v){var C=x.cloneNode(!0);return di(C,n.classes.clone),C.id=e.root.id+"-clone"+gS(v+1),C}function k(){var x=n.clones;if(!e.is(Jl))x=0;else if(Ad(x)){var v=n[a("fixedWidth")]&&t.Layout.slideSize(0),C=v&&Hc(fr(s.track)[a("width")]/v);x=C||n[a("autoWidth")]&&e.length||n.perPage*yH}return x}return{mount:h,destroy:m}}function _H(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=e.state.set,a=t.Layout,u=a.slideSize,c=a.getPadding,h=a.totalSize,p=a.listSize,m=a.sliderSize,w=t.Direction,_=w.resolve,S=w.orient,k=t.Elements,x=k.list,v=k.track,C;function T(){C=t.Transition,i([mo,sg,Pn,$t],I)}function I(){t.Controller.isBusy()||(t.Scroll.cancel(),A(e.index),t.Slides.update())}function R(P,ee,U,B){P!==ee&&$(P>U)&&(j(),O(F(ue(),P>U),!0)),o(Ql),s(rs,ee,U,P),C.start(ee,function(){o(Il),s(Xl,ee,U,P),B&&B()})}function A(P){O(X(P,!0))}function O(P,ee){if(!e.is(Ld)){var U=ee?P:Z(P);Or(x,"transform","translate"+_("X")+"("+U+"px)"),P!==U&&s(YO)}}function Z(P){if(e.is(Jl)){var ee=J(P),U=ee>t.Controller.getEnd(),B=ee<0;(B||U)&&(P=F(P,U))}return P}function F(P,ee){var U=P-ge(ee),B=m();return P-=S(B*(Hc(zn(U)/B)||1))*(ee?1:-1),P}function j(){O(ue(),!0),C.cancel()}function J(P){for(var ee=t.Slides.get(),U=0,B=1/0,Y=0;Y<ee.length;Y++){var z=ee[Y].index,D=zn(X(z,!0)-P);if(D<=B)B=D,U=z;else break}return U}function X(P,ee){var U=S(h(P-1)-Te(P));return ee?oe(U):U}function ue(){var P=_("left");return fr(x)[P]-fr(v)[P]+S(c(!1))}function oe(P){return n.trimSpace&&e.is(Nl)&&(P=Da(P,0,S(m(!0)-p()))),P}function Te(P){var ee=n.focus;return ee==="center"?(p()-u(P,!0))/2:+ee*u(P)||0}function ge(P){return X(P?t.Controller.getEnd():0,!!n.trimSpace)}function $(P){var ee=S(F(ue(),P));return P?ee>=0:ee<=x[_("scrollWidth")]-fr(v)[_("width")]}function V(P,ee){ee=Ad(ee)?ue():ee;var U=P!==!0&&S(ee)<S(ge(!1)),B=P!==!1&&S(ee)>S(ge(!0));return U||B}return{mount:T,move:R,jump:A,translate:O,shift:F,cancel:j,toIndex:J,toPosition:X,getPosition:ue,getLimit:ge,exceededLimit:V,reposition:I}}function SH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=t.Move,a=o.getPosition,u=o.getLimit,c=o.toPosition,h=t.Slides,p=h.isEnough,m=h.getLength,w=n.omitEnd,_=e.is(Jl),S=e.is(Nl),k=nt(ue,!1),x=nt(ue,!0),v=n.start||0,C,T=v,I,R,A;function O(){Z(),i([Pn,$t,kp],Z),i(sg,F)}function Z(){I=m(!0),R=n.perMove,A=n.perPage,C=$();var D=Da(v,0,w?C:I-1);D!==v&&(v=D,o.reposition())}function F(){C!==$()&&s(kp)}function j(D,le,W){if(!z()){var we=X(D),me=ge(we);me>-1&&(le||me!==v)&&(U(me),o.move(we,me,T,W))}}function J(D,le,W,we){t.Scroll.scroll(D,le,W,function(){var me=ge(o.toIndex(a()));U(w?io(me,C):me),we&&we()})}function X(D){var le=v;if(ro(D)){var W=D.match(/([+\-<>])(\d+)?/)||[],we=W[1],me=W[2];we==="+"||we==="-"?le=oe(v+ +(""+we+(+me||1)),v):we===">"?le=me?V(+me):k(!0):we==="<"&&(le=x(!0))}else le=_?D:Da(D,0,C);return le}function ue(D,le){var W=R||(Y()?1:A),we=oe(v+W*(D?-1:1),v,!(R||Y()));return we===-1&&S&&!IO(a(),u(!D),1)?D?0:C:le?we:ge(we)}function oe(D,le,W){if(p()||Y()){var we=Te(D);we!==D&&(le=D,D=we,W=!1),D<0||D>C?!R&&(cf(0,D,le,!0)||cf(C,le,D,!0))?D=V(P(D)):_?D=W?D<0?-(I%A||A):I:D:n.rewind?D=D<0?C:0:D=-1:W&&D!==le&&(D=V(P(le)+(D<le?-1:1)))}else D=-1;return D}function Te(D){if(S&&n.trimSpace==="move"&&D!==v)for(var le=a();le===c(D,!0)&&cf(D,0,e.length-1,!n.rewind);)D<v?--D:++D;return D}function ge(D){return _?(D+I)%I||0:D}function $(){for(var D=I-(Y()||_&&R?1:A);w&&D-- >0;)if(c(I-1,!0)!==c(D,!0)){D++;break}return Da(D,0,I-1)}function V(D){return Da(Y()?D:A*D,0,C)}function P(D){return Y()?io(D,C):Cp((D>=C?I-1:D)/A)}function ee(D){var le=o.toIndex(D);return S?Da(le,0,C):le}function U(D){D!==v&&(T=v,v=D)}function B(D){return D?T:v}function Y(){return!Ad(n.focus)||n.isNavigation}function z(){return e.state.is([Ql,Id])&&!!n.waitForTransition}return{mount:O,go:j,scroll:J,getNext:k,getPrev:x,getAdjacent:ue,getEnd:$,setIndex:U,getIndex:B,toIndex:V,toPage:P,toDest:ee,hasFocus:Y,isBusy:z}}var xH="http://www.w3.org/2000/svg",EH="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",$h=40;function CH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=n.classes,u=n.i18n,c=t.Elements,h=t.Controller,p=c.arrows,m=c.track,w=p,_=c.prev,S=c.next,k,x,v={};function C(){I(),i(Pn,T)}function T(){R(),C()}function I(){var J=n.arrows;J&&!(_&&S)&&Z(),_&&S&&(Yc(v,{prev:_,next:S}),Wc(w,J?"":"none"),di(w,x=TS+"--"+n.direction),J&&(A(),j(),be([_,S],Md,m.id),o(FO,_,S)))}function R(){r.destroy(),Ui(w,x),k?(ra(p?[_,S]:w),_=S=null):hi([_,S],kS)}function A(){i([mo,Xl,$t,fa,kp],j),s(S,"click",nt(O,">")),s(_,"click",nt(O,"<"))}function O(J){h.go(J,!0)}function Z(){w=p||ol("div",a.arrows),_=F(!0),S=F(!1),k=!0,Od(w,[_,S]),!p&&fS(w,m)}function F(J){var X='<button class="'+a.arrow+" "+(J?a.prev:a.next)+'" type="button"><svg xmlns="'+xH+'" viewBox="0 0 '+$h+" "+$h+'" width="'+$h+'" height="'+$h+'" focusable="false"><path d="'+(n.arrowPath||EH)+'" />';return DO(X)}function j(){if(_&&S){var J=e.index,X=h.getPrev(),ue=h.getNext(),oe=X>-1&&J<X?u.last:u.prev,Te=ue>-1&&J>ue?u.first:u.next;_.disabled=X<0,S.disabled=ue<0,be(_,vr,oe),be(S,vr,Te),o(UO,_,S,X,ue)}}return{arrows:v,mount:C,destroy:R,update:j}}var kH=mS+"-interval";function TH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=ag(n.interval,e.go.bind(e,">"),A),u=a.isPaused,c=t.Elements,h=t.Elements,p=h.root,m=h.toggle,w=n.autoplay,_,S,k=w==="pause";function x(){w&&(v(),m&&be(m,Md,c.track.id),k||C(),R())}function v(){n.pauseOnHover&&s(p,"mouseenter mouseleave",function(Z){_=Z.type==="mouseenter",I()}),n.pauseOnFocus&&s(p,"focusin focusout",function(Z){S=Z.type==="focusin",I()}),m&&s(m,"click",function(){k?C():T(!0)}),i([rs,og,$t],a.rewind),i(rs,O)}function C(){u()&&t.Slides.isEnough()&&(a.start(!n.resetProgress),S=_=k=!1,R(),o(_S))}function T(Z){Z===void 0&&(Z=!0),k=!!Z,R(),u()||(a.pause(),o(SS))}function I(){k||(_||S?T(!1):C())}function R(){m&&(Fi(m,ia,!k),be(m,vr,n.i18n[k?"play":"pause"]))}function A(Z){var F=c.bar;F&&Or(F,"width",Z*100+"%"),o(VO,Z)}function O(Z){var F=t.Slides.getAt(Z);a.set(F&&+Pr(F.slide,kH)||n.interval)}return{mount:x,destroy:a.cancel,play:C,pause:T,isPaused:u}}function DH(e,t,n){var r=Et(e),i=r.on;function s(){n.cover&&(i(xS,nt(a,!0)),i([mo,Pn,$t],nt(o,!0)))}function o(u){t.Slides.forEach(function(c){var h=Rd(c.container||c.slide,"img");h&&h.src&&a(u,h,c)})}function a(u,c,h){h.style("background",u?'center/cover no-repeat url("'+c.src+'")':"",!0),Wc(c,u?"none":"")}return{mount:s,destroy:nt(o,!1)}}var bH=10,IH=600,AH=.6,NH=1.5,OH=800;function RH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=e.state.set,a=t.Move,u=a.getPosition,c=a.getLimit,h=a.exceededLimit,p=a.translate,m=e.is(Nl),w,_,S=1;function k(){i(rs,T),i([Pn,$t],I)}function x(A,O,Z,F,j){var J=u();if(T(),Z&&(!m||!h())){var X=t.Layout.sliderSize(),ue=f1(A)*X*Cp(zn(A)/X)||0;A=a.toPosition(t.Controller.toDest(A%X))+ue}var oe=IO(J,A,1);S=1,O=oe?0:O||Ep(zn(A-J)/NH,OH),_=F,w=ag(O,v,nt(C,J,A,j),1),o(Id),s(og),w.start()}function v(){o(Il),_&&_(),s(fa)}function C(A,O,Z,F){var j=u(),J=A+(O-A)*R(F),X=(J-j)*S;p(j+X),m&&!Z&&h()&&(S*=AH,zn(X)<bH&&x(c(h(!0)),IH,!1,_,!0))}function T(){w&&w.cancel()}function I(){w&&!w.isPaused()&&(T(),v())}function R(A){var O=n.easingFunc;return O?O(A):1-Math.pow(1-A,4)}return{mount:k,destroy:T,scroll:x,cancel:I}}var ba={passive:!1,capture:!0};function PH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=r.unbind,u=e.state,c=t.Move,h=t.Scroll,p=t.Controller,m=t.Elements.track,w=t.Media.reduce,_=t.Direction,S=_.resolve,k=_.orient,x=c.getPosition,v=c.exceededLimit,C,T,I,R,A,O=!1,Z,F,j;function J(){o(m,cv,d1,ba),o(m,dv,d1,ba),o(m,rR,ue,ba),o(m,"click",ge,{capture:!0}),o(m,"dragstart",Ai),i([mo,Pn],X)}function X(){var ne=n.drag;_e(!ne),R=ne==="free"}function ue(ne){if(Z=!1,!F){var De=me(ne);we(ne.target)&&(De||!ne.button)&&(p.isBusy()?Ai(ne,!0):(j=De?m:window,A=u.is([Ql,Id]),I=null,o(j,cv,oe,ba),o(j,dv,Te,ba),c.cancel(),h.cancel(),$(ne)))}}function oe(ne){if(u.is(lf)||(u.set(lf),s(MO)),ne.cancelable)if(A){c.translate(C+W(Y(ne)));var De=z(ne)>S2,Ce=O!==(O=v());(De||Ce)&&$(ne),Z=!0,s(LO),Ai(ne)}else ee(ne)&&(A=P(ne),Ai(ne))}function Te(ne){u.is(lf)&&(u.set(Il),s($O)),A&&(V(ne),Ai(ne)),a(j,cv,oe),a(j,dv,Te),A=!1}function ge(ne){!F&&Z&&Ai(ne,!0)}function $(ne){I=T,T=ne,C=x()}function V(ne){var De=U(ne),Ce=B(De),dt=n.rewind&&n.rewindByDrag;w(!1),R?p.scroll(Ce,0,n.snap):e.is(Ld)?p.go(k(f1(De))<0?dt?"<":"-":dt?">":"+"):e.is(Nl)&&O&&dt?p.go(v(!0)?">":"<"):p.go(p.toDest(Ce),!0),w(!0)}function P(ne){var De=n.dragMinThreshold,Ce=zc(De),dt=Ce&&De.mouse||0,Le=(Ce?De.touch:+De)||10;return zn(Y(ne))>(me(ne)?Le:dt)}function ee(ne){return zn(Y(ne))>zn(Y(ne,!0))}function U(ne){if(e.is(Jl)||!O){var De=z(ne);if(De&&De<S2)return Y(ne)/De}return 0}function B(ne){return x()+f1(ne)*io(zn(ne)*(n.flickPower||600),R?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function Y(ne,De){return le(ne,De)-le(D(ne),De)}function z(ne){return h1(ne)-h1(D(ne))}function D(ne){return T===ne&&I||T}function le(ne,De){return(me(ne)?ne.changedTouches[0]:ne)["page"+S(De?"Y":"X")]}function W(ne){return ne/(O&&e.is(Nl)?fH:1)}function we(ne){var De=n.noDrag;return!Vc(ne,"."+JO+", ."+fg)&&(!De||!Vc(ne,De))}function me(ne){return typeof TouchEvent!="undefined"&&ne instanceof TouchEvent}function Be(){return A}function _e(ne){F=ne}return{mount:J,disable:_e,isDragging:Be}}var MH={Spacebar:" ",Right:cg,Left:ug,Up:WO,Down:HO};function DS(e){return e=ro(e)?e:e.key,MH[e]||e}var x2="keydown";function LH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.unbind,a=e.root,u=t.Direction.resolve,c,h;function p(){m(),i(Pn,w),i(Pn,m),i(rs,S)}function m(){var x=n.keyboard;x&&(c=x==="global"?window:a,s(c,x2,k))}function w(){o(c,x2)}function _(x){h=x}function S(){var x=h;h=!0,xO(function(){h=x})}function k(x){if(!h){var v=DS(x);v===u(ug)?e.go("<"):v===u(cg)&&e.go(">")}}return{mount:p,destroy:w,disable:_}}var ec=mS+"-lazy",df=ec+"-srcset",$H="["+ec+"], ["+df+"]";function FH(e,t,n){var r=Et(e),i=r.on,s=r.off,o=r.bind,a=r.emit,u=n.lazyLoad==="sequential",c=[Xl,fa],h=[];function p(){n.lazyLoad&&(m(),i($t,m))}function m(){ns(h),w(),u?x():(s(c),i(c,_),_())}function w(){t.Slides.forEach(function(v){pS(v.slide,$H).forEach(function(C){var T=Pr(C,ec),I=Pr(C,df);if(T!==C.src||I!==C.srcset){var R=n.classes.spinner,A=C.parentElement,O=Rd(A,"."+R)||ol("span",R,A);h.push([C,v,O]),C.src||Wc(C,"none")}})})}function _(){h=h.filter(function(v){var C=n.perPage*((n.preloadPages||1)+1)-1;return v[1].isWithin(e.index,C)?S(v):!0}),h.length||s(c)}function S(v){var C=v[0];di(v[1].slide,v1),o(C,"load error",nt(k,v)),be(C,"src",Pr(C,ec)),be(C,"srcset",Pr(C,df)),hi(C,ec),hi(C,df)}function k(v,C){var T=v[0],I=v[1];Ui(I.slide,v1),C.type!=="error"&&(ra(v[2]),Wc(T,""),a(xS,T,I),a(Al)),u&&x()}function x(){h.length&&S(h.shift())}return{mount:p,destroy:nt(ns,h),check:_}}function UH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=t.Slides,u=t.Elements,c=t.Controller,h=c.hasFocus,p=c.getIndex,m=c.go,w=t.Direction.resolve,_=u.pagination,S=[],k,x;function v(){C(),i([Pn,$t,kp],v);var F=n.pagination;_&&Wc(_,F?"":"none"),F&&(i([rs,og,fa],Z),T(),Z(),s(BO,{list:k,items:S},O(e.index)))}function C(){k&&(ra(_?po(k.children):k),Ui(k,x),ns(S),k=null),r.destroy()}function T(){var F=e.length,j=n.classes,J=n.i18n,X=n.perPage,ue=h()?c.getEnd()+1:Hc(F/X);k=_||ol("ul",j.pagination,u.track.parentElement),di(k,x=pg+"--"+A()),be(k,Yi,"tablist"),be(k,vr,J.select),be(k,CS,A()===dg?"vertical":"");for(var oe=0;oe<ue;oe++){var Te=ol("li",null,k),ge=ol("button",{class:j.page,type:"button"},Te),$=a.getIn(oe).map(function(P){return P.slide.id}),V=!h()&&X>1?J.pageX:J.slideX;o(ge,"click",nt(I,oe)),n.paginationKeyboard&&o(ge,"keydown",nt(R,oe)),be(Te,Yi,"presentation"),be(ge,Yi,"tab"),be(ge,Md,$.join(" ")),be(ge,vr,p1(V,oe+1)),be(ge,al,-1),S.push({li:Te,button:ge,page:oe})}}function I(F){m(">"+F,!0)}function R(F,j){var J=S.length,X=DS(j),ue=A(),oe=-1;X===w(cg,!1,ue)?oe=++F%J:X===w(ug,!1,ue)?oe=(--F+J)%J:X==="Home"?oe=0:X==="End"&&(oe=J-1);var Te=S[oe];Te&&(TO(Te.button),m(">"+oe),Ai(j,!0))}function A(){return n.paginationDirection||n.direction}function O(F){return S[c.toPage(F)]}function Z(){var F=O(p(!0)),j=O(p());if(F){var J=F.button;Ui(J,ia),hi(J,g2),be(J,al,-1)}if(j){var X=j.button;di(X,ia),be(X,g2,!0),be(X,al,"")}s(zO,{list:k,items:S},F,j)}return{items:S,mount:v,destroy:C,getAt:O,update:Z}}var BH=[" ","Enter"];function zH(e,t,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){e.splides.forEach(function(_){_.isParent||(c(e,_.splide),c(_.splide,e))}),r&&h()}function a(){s.forEach(function(_){_.destroy()}),ns(s)}function u(){a(),o()}function c(_,S){var k=Et(_);k.on(rs,function(x,v,C){S.go(S.is(Jl)?C:x)}),s.push(k)}function h(){var _=Et(e),S=_.on;S(vS,m),S(jO,w),S([mo,Pn],p),s.push(_),_.emit(wS,e.splides)}function p(){be(t.Elements.list,CS,n.direction===dg?"vertical":"")}function m(_){e.go(_.index)}function w(_,S){hS(BH,DS(S))&&(m(_),Ai(S))}return{setup:nt(t.Media.set,{slideFocus:Ad(i)?r:i},!0),mount:o,destroy:a,remount:u}}function VH(e,t,n){var r=Et(e),i=r.bind,s=0;function o(){n.wheel&&i(t.Elements.track,"wheel",a,ba)}function a(c){if(c.cancelable){var h=c.deltaY,p=h<0,m=h1(c),w=n.wheelMinThreshold||0,_=n.wheelSleep||0;zn(h)>w&&m-s>_&&(e.go(p?"<":">"),s=m),u(p)&&Ai(c)}}function u(c){return!n.releaseWheel||e.state.is(Ql)||t.Controller.getAdjacent(c)!==-1}return{mount:o}}var jH=90;function YH(e,t,n){var r=Et(e),i=r.on,s=t.Elements.track,o=n.live&&!n.isNavigation,a=ol("span",lH),u=ag(jH,nt(h,!1));function c(){o&&(m(!t.Autoplay.isPaused()),be(s,w2,!0),a.textContent="\u2026",i(_S,nt(m,!0)),i(SS,nt(m,!1)),i([Xl,fa],nt(h,!0)))}function h(w){be(s,y2,w),w?(Od(s,a),u.start()):(ra(a),u.cancel())}function p(){hi(s,[v2,w2,y2]),ra(a)}function m(w){o&&be(s,v2,w?"off":"polite")}return{mount:c,disable:m,destroy:p}}var WH=Object.freeze({__proto__:null,Media:ZW,Direction:eH,Elements:pH,Slides:gH,Layout:vH,Clones:wH,Move:_H,Controller:SH,Arrows:CH,Autoplay:TH,Cover:DH,Scroll:RH,Drag:PH,Keyboard:LH,LazyLoad:FH,Pagination:UH,Sync:zH,Wheel:VH,Live:YH}),HH={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},GH={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:dH,i18n:HH,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function qH(e,t,n){var r=t.Slides;function i(){Et(e).on([mo,$t],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,u){r.style("transition","opacity "+n.speed+"ms "+n.easing),xO(u)}return{mount:i,start:o,cancel:d1}}function KH(e,t,n){var r=t.Move,i=t.Controller,s=t.Scroll,o=t.Elements.list,a=nt(Or,o,"transition"),u;function c(){Et(e).bind(o,"transitionend",function(w){w.target===o&&u&&(p(),u())})}function h(w,_){var S=r.toPosition(w,!0),k=r.getPosition(),x=m(w);zn(S-k)>=1&&x>=1?n.useScroll?s.scroll(S,x,!1,_):(a("transform "+x+"ms "+n.easing),r.translate(S,!0),u=_):(r.jump(w),_())}function p(){a(""),s.cancel()}function m(w){var _=n.rewindSpeed;if(e.is(Nl)&&_){var S=i.getIndex(!0),k=i.getEnd();if(S===0&&w>=k||S>=k&&w===0)return _}return n.speed}return{mount:c,start:h,cancel:p}}var QH=function(){function e(n,r){this.event=Et(),this.Components={},this.state=XW(Ya),this.splides=[],this._o={},this._E={};var i=ro(n)?bO(document,n):n;Zu(i,i+" is invalid."),this.root=i,r=bs({label:Pr(i,vr)||"",labelledby:Pr(i,ES)||""},GH,e.defaults,r||{});try{bs(r,JSON.parse(Pr(i,mS)))}catch{Zu(!1,"Invalid JSON")}this._o=Object.create(bs({},r))}var t=e.prototype;return t.mount=function(r,i){var s=this,o=this.state,a=this.Components;Zu(o.is([Ya,xp]),"Already mounted!"),o.set(Ya),this._C=a,this._T=i||this._T||(this.is(Ld)?qH:KH),this._E=r||this._E;var u=Yc({},WH,this._E,{Transition:this._T});return Bo(u,function(c,h){var p=c(s,a,s._o);a[h]=p,p.setup&&p.setup()}),Bo(a,function(c){c.mount&&c.mount()}),this.emit(mo),di(this.root,uH),o.set(Il),this.emit(m1),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Il)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,i){return this.event.on(r,i),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(po(arguments,1))),this},t.add=function(r,i){return this._C.Slides.add(r,i),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit($t),this},t.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(Ya)?Et(this).on(m1,this.destroy.bind(this,r)):(Bo(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(yS),i.destroy(),r&&ns(this.splides),s.set(xp)),this},HW(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),bS=QH;bS.defaults={};bS.STATES=qW;var E2=[[mo,"onMounted"],[m1,"onReady"],[rs,"onMove"],[Xl,"onMoved"],[vS,"onClick"],[NO,"onActive"],[OO,"onInactive"],[RO,"onVisible"],[PO,"onHidden"],[$t,"onRefresh"],[Pn,"onUpdated"],[Al,"onResize"],[sg,"onResized"],[MO,"onDrag"],[LO,"onDragging"],[$O,"onDragged"],[og,"onScroll"],[fa,"onScrolled"],[yS,"onDestroy"],[FO,"onArrowsMounted"],[UO,"onArrowsUpdated"],[BO,"onPaginationMounted"],[zO,"onPaginationUpdated"],[wS,"onNavigationMounted"],[_S,"onAutoplayPlay"],[VO,"onAutoplayPlaying"],[SS,"onAutoplayPause"],[xS,"onLazyLoadLoaded"]];function IS(...e){return e.filter(Boolean).join(" ")}function Tp(e){return e!==null&&typeof e=="object"}function y1(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((n,r)=>!y1(n,t[r]));if(Tp(e)&&Tp(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!y1(e[i],t[i]))}return e===t}function XH(e,t){return e.length===t.length&&!e.some((n,r)=>n!==t[r])}function JH(e,t){if(e){const n=Object.keys(e);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function w1(e,t){const n=e;return JH(t,(r,i)=>{Array.isArray(r)?n[i]=r.slice():Tp(r)?n[i]=w1(Tp(n[i])?n[i]:{},r):n[i]=r}),n}var ZH=({children:e,className:t,...n})=>y("div",{className:IS("splide__track",t),...n,children:y("ul",{className:"splide__list",children:e})}),AS=class extends Qt.Component{constructor(){super(...arguments),this.splideRef=Qt.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new bS(r,e),this.bind(this.splide),this.splide.mount(t,n),this.options=w1({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!y1(this.options,e)&&(this.splide.options=e,this.options=w1({},e));const t=this.getSlides();XH(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){E2.forEach(([t,n])=>{const r=this.props[n];typeof r=="function"&&e.on(t,(...i)=>{r(e,...i)})})}omit(e,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(e,n)&&delete e[n]}),e}render(){const{className:e,tag:t="div",hasTrack:n=!0,children:r,...i}=this.props;return Qt.createElement(t,{className:IS("splide",e),ref:this.splideRef,...this.omit(i,["options",...E2.map(s=>s[1])])},n?Qt.createElement(ZH,null,r):r)}},NS=({children:e,className:t,...n})=>Qt.createElement("li",{className:IS("splide__slide",t),...n},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 *///! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var iR;function te(){return iR.apply(null,arguments)}function eG(e){iR=e}function zr(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function zo(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function OS(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Ye(e,t))return!1;return!0}function $n(e){return e===void 0}function is(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function $d(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function sR(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Is(e,t){for(var n in t)Ye(t,n)&&(e[n]=t[n]);return Ye(t,"toString")&&(e.toString=t.toString),Ye(t,"valueOf")&&(e.valueOf=t.valueOf),e}function gi(e,t,n,r){return IR(e,t,n,r,!0).utc()}function tG(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Ie(e){return e._pf==null&&(e._pf=tG()),e._pf}var _1;Array.prototype.some?_1=Array.prototype.some:_1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function RS(e){if(e._isValid==null){var t=Ie(e),n=_1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function mg(e){var t=gi(NaN);return e!=null?Is(Ie(t),e):Ie(t).userInvalidated=!0,t}var C2=te.momentProperties=[],hv=!1;function PS(e,t){var n,r,i,s=C2.length;if($n(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),$n(t._i)||(e._i=t._i),$n(t._f)||(e._f=t._f),$n(t._l)||(e._l=t._l),$n(t._strict)||(e._strict=t._strict),$n(t._tzm)||(e._tzm=t._tzm),$n(t._isUTC)||(e._isUTC=t._isUTC),$n(t._offset)||(e._offset=t._offset),$n(t._pf)||(e._pf=Ie(t)),$n(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=C2[n],i=t[r],$n(i)||(e[r]=i);return e}function Fd(e){PS(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),hv===!1&&(hv=!0,te.updateOffset(this),hv=!1)}function Vr(e){return e instanceof Fd||e!=null&&e._isAMomentObject!=null}function oR(e){te.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+e)}function Cr(e,t){var n=!0;return Is(function(){if(te.deprecationHandler!=null&&te.deprecationHandler(null,e),n){var r=[],i,s,o,a=arguments.length;for(s=0;s<a;s++){if(i="",typeof arguments[s]=="object"){i+=`
[`+s+"] ";for(o in arguments[0])Ye(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];r.push(i)}oR(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var k2={};function aR(e,t){te.deprecationHandler!=null&&te.deprecationHandler(e,t),k2[e]||(oR(t),k2[e]=!0)}te.suppressDeprecationWarnings=!1;te.deprecationHandler=null;function vi(e){return typeof Function!="undefined"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function nG(e){var t,n;for(n in e)Ye(e,n)&&(t=e[n],vi(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function S1(e,t){var n=Is({},e),r;for(r in t)Ye(t,r)&&(zo(e[r])&&zo(t[r])?(n[r]={},Is(n[r],e[r]),Is(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Ye(e,r)&&!Ye(t,r)&&zo(e[r])&&(n[r]=Is({},n[r]));return n}function MS(e){e!=null&&this.set(e)}var x1;Object.keys?x1=Object.keys:x1=function(e){var t,n=[];for(t in e)Ye(e,t)&&n.push(t);return n};var rG={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function iG(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return vi(r)?r.call(t,n):r}function fi(e,t,n){var r=""+Math.abs(e),i=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var LS=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Fh=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,fv={},ll={};function he(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(ll[e]=i),t&&(ll[t[0]]=function(){return fi(i.apply(this,arguments),t[1],t[2])}),n&&(ll[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function sG(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function oG(e){var t=e.match(LS),n,r;for(n=0,r=t.length;n<r;n++)ll[t[n]]?t[n]=ll[t[n]]:t[n]=sG(t[n]);return function(i){var s="",o;for(o=0;o<r;o++)s+=vi(t[o])?t[o].call(i,e):t[o];return s}}function hf(e,t){return e.isValid()?(t=lR(t,e.localeData()),fv[t]=fv[t]||oG(t),fv[t](e)):e.localeData().invalidDate()}function lR(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Fh.lastIndex=0;n>=0&&Fh.test(e);)e=e.replace(Fh,r),Fh.lastIndex=0,n-=1;return e}var aG={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function lG(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(LS).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var uG="Invalid date";function cG(){return this._invalidDate}var dG="%d",hG=/\d{1,2}/;function fG(e){return this._ordinal.replace("%d",e)}var pG={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function mG(e,t,n,r){var i=this._relativeTime[n];return vi(i)?i(e,t,n,r):i.replace(/%d/i,e)}function gG(e,t){var n=this._relativeTime[e>0?"future":"past"];return vi(n)?n(t):n.replace(/%s/i,t)}var tc={};function kn(e,t){var n=e.toLowerCase();tc[n]=tc[n+"s"]=tc[t]=e}function kr(e){return typeof e=="string"?tc[e]||tc[e.toLowerCase()]:void 0}function $S(e){var t={},n,r;for(r in e)Ye(e,r)&&(n=kr(r),n&&(t[n]=e[r]));return t}var uR={};function Tn(e,t){uR[e]=t}function vG(e){var t=[],n;for(n in e)Ye(e,n)&&t.push({unit:n,priority:uR[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function gg(e){return e%4===0&&e%100!==0||e%400===0}function pr(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Re(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=pr(t)),n}function Zl(e,t){return function(n){return n!=null?(cR(this,e,n),te.updateOffset(this,t),this):Dp(this,e)}}function Dp(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function cR(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&gg(e.year())&&e.month()===1&&e.date()===29?(n=Re(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),xg(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function yG(e){return e=kr(e),vi(this[e])?this[e]():this}function wG(e,t){if(typeof e=="object"){e=$S(e);var n=vG(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=kr(e),vi(this[e]))return this[e](t);return this}var dR=/\d/,cr=/\d\d/,hR=/\d{3}/,FS=/\d{4}/,vg=/[+-]?\d{6}/,ct=/\d\d?/,fR=/\d\d\d\d?/,pR=/\d\d\d\d\d\d?/,yg=/\d{1,3}/,US=/\d{1,4}/,wg=/[+-]?\d{1,6}/,eu=/\d+/,_g=/[+-]?\d+/,_G=/Z|[+-]\d\d:?\d\d/gi,Sg=/Z|[+-]\d\d(?::?\d\d)?/gi,SG=/[+-]?\d+(\.\d{1,3})?/,Ud=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,bp;bp={};function se(e,t,n){bp[e]=vi(t)?t:function(r,i){return r&&n?n:t}}function xG(e,t){return Ye(bp,e)?bp[e](t._strict,t._locale):new RegExp(EG(e))}function EG(e){return Kn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,s){return n||r||i||s}))}function Kn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var E1={};function et(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),is(t)&&(r=function(s,o){o[t]=Re(s)}),i=e.length,n=0;n<i;n++)E1[e[n]]=r}function Bd(e,t){et(e,function(n,r,i,s){i._w=i._w||{},t(n,i._w,i,s)})}function CG(e,t,n){t!=null&&Ye(E1,e)&&E1[e](t,n._a,n,e)}var Sn=0,Bi=1,Qr=2,Wt=3,Mr=4,zi=5,Po=6,kG=7,TG=8;function DG(e,t){return(e%t+t)%t}var Nt;Array.prototype.indexOf?Nt=Array.prototype.indexOf:Nt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function xg(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=DG(t,12);return e+=(t-n)/12,n===1?gg(e)?29:28:31-n%7%2}he("M",["MM",2],"Mo",function(){return this.month()+1});he("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});he("MMMM",0,0,function(e){return this.localeData().months(this,e)});kn("month","M");Tn("month",8);se("M",ct);se("MM",ct,cr);se("MMM",function(e,t){return t.monthsShortRegex(e)});se("MMMM",function(e,t){return t.monthsRegex(e)});et(["M","MM"],function(e,t){t[Bi]=Re(e)-1});et(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[Bi]=i:Ie(n).invalidMonth=e});var bG="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),mR="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),gR=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,IG=Ud,AG=Ud;function NG(e,t){return e?zr(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||gR).test(t)?"format":"standalone"][e.month()]:zr(this._months)?this._months:this._months.standalone}function OG(e,t){return e?zr(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[gR.test(t)?"format":"standalone"][e.month()]:zr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function RG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=gi([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null):t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null)):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null))}function PG(e,t,n){var r,i,s;if(this._monthsParseExact)return RG.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=gi([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function vR(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=Re(t);else if(t=e.localeData().monthsParse(t),!is(t))return e}return n=Math.min(e.date(),xg(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function yR(e){return e!=null?(vR(this,e),te.updateOffset(this,!0),this):Dp(this,"Month")}function MG(){return xg(this.year(),this.month())}function LG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||wR.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Ye(this,"_monthsShortRegex")||(this._monthsShortRegex=IG),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function $G(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||wR.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Ye(this,"_monthsRegex")||(this._monthsRegex=AG),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function wR(){function e(o,a){return a.length-o.length}var t=[],n=[],r=[],i,s;for(i=0;i<12;i++)s=gi([2e3,i]),t.push(this.monthsShort(s,"")),n.push(this.months(s,"")),r.push(this.months(s,"")),r.push(this.monthsShort(s,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=Kn(t[i]),n[i]=Kn(n[i]);for(i=0;i<24;i++)r[i]=Kn(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}he("Y",0,0,function(){var e=this.year();return e<=9999?fi(e,4):"+"+e});he(0,["YY",2],0,function(){return this.year()%100});he(0,["YYYY",4],0,"year");he(0,["YYYYY",5],0,"year");he(0,["YYYYYY",6,!0],0,"year");kn("year","y");Tn("year",1);se("Y",_g);se("YY",ct,cr);se("YYYY",US,FS);se("YYYYY",wg,vg);se("YYYYYY",wg,vg);et(["YYYYY","YYYYYY"],Sn);et("YYYY",function(e,t){t[Sn]=e.length===2?te.parseTwoDigitYear(e):Re(e)});et("YY",function(e,t){t[Sn]=te.parseTwoDigitYear(e)});et("Y",function(e,t){t[Sn]=parseInt(e,10)});function nc(e){return gg(e)?366:365}te.parseTwoDigitYear=function(e){return Re(e)+(Re(e)>68?1900:2e3)};var _R=Zl("FullYear",!0);function FG(){return gg(this.year())}function UG(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function qc(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ip(e,t,n){var r=7+t-n,i=(7+qc(e,0,r).getUTCDay()-t)%7;return-i+r-1}function SR(e,t,n,r,i){var s=(7+n-r)%7,o=Ip(e,r,i),a=1+7*(t-1)+s+o,u,c;return a<=0?(u=e-1,c=nc(u)+a):a>nc(e)?(u=e+1,c=a-nc(e)):(u=e,c=a),{year:u,dayOfYear:c}}function Kc(e,t,n){var r=Ip(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,s,o;return i<1?(o=e.year()-1,s=i+Wi(o,t,n)):i>Wi(e.year(),t,n)?(s=i-Wi(e.year(),t,n),o=e.year()+1):(o=e.year(),s=i),{week:s,year:o}}function Wi(e,t,n){var r=Ip(e,t,n),i=Ip(e+1,t,n);return(nc(e)-r+i)/7}he("w",["ww",2],"wo","week");he("W",["WW",2],"Wo","isoWeek");kn("week","w");kn("isoWeek","W");Tn("week",5);Tn("isoWeek",5);se("w",ct);se("ww",ct,cr);se("W",ct);se("WW",ct,cr);Bd(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=Re(e)});function BG(e){return Kc(e,this._week.dow,this._week.doy).week}var zG={dow:0,doy:6};function VG(){return this._week.dow}function jG(){return this._week.doy}function YG(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function WG(e){var t=Kc(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}he("d",0,"do","day");he("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});he("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});he("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});he("e",0,0,"weekday");he("E",0,0,"isoWeekday");kn("day","d");kn("weekday","e");kn("isoWeekday","E");Tn("day",11);Tn("weekday",11);Tn("isoWeekday",11);se("d",ct);se("e",ct);se("E",ct);se("dd",function(e,t){return t.weekdaysMinRegex(e)});se("ddd",function(e,t){return t.weekdaysShortRegex(e)});se("dddd",function(e,t){return t.weekdaysRegex(e)});Bd(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:Ie(n).invalidWeekday=e});Bd(["d","e","E"],function(e,t,n,r){t[r]=Re(e)});function HG(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function GG(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function BS(e,t){return e.slice(t,7).concat(e.slice(0,t))}var qG="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),xR="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),KG="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),QG=Ud,XG=Ud,JG=Ud;function ZG(e,t){var n=zr(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?BS(n,this._week.dow):e?n[e.day()]:n}function eq(e){return e===!0?BS(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function tq(e){return e===!0?BS(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function nq(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=gi([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1?i:null):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null):t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1||(i=Nt.call(this._shortWeekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):(i=Nt.call(this._minWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null))}function rq(e,t,n){var r,i,s;if(this._weekdaysParseExact)return nq.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=gi([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function iq(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=HG(e,this.localeData()),this.add(e-t,"d")):t}function sq(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function oq(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=GG(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function aq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||zS.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Ye(this,"_weekdaysRegex")||(this._weekdaysRegex=QG),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function lq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||zS.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Ye(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=XG),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function uq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||zS.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Ye(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=JG),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function zS(){function e(h,p){return p.length-h.length}var t=[],n=[],r=[],i=[],s,o,a,u,c;for(s=0;s<7;s++)o=gi([2e3,1]).day(s),a=Kn(this.weekdaysMin(o,"")),u=Kn(this.weekdaysShort(o,"")),c=Kn(this.weekdays(o,"")),t.push(a),n.push(u),r.push(c),i.push(a),i.push(u),i.push(c);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function VS(){return this.hours()%12||12}function cq(){return this.hours()||24}he("H",["HH",2],0,"hour");he("h",["hh",2],0,VS);he("k",["kk",2],0,cq);he("hmm",0,0,function(){return""+VS.apply(this)+fi(this.minutes(),2)});he("hmmss",0,0,function(){return""+VS.apply(this)+fi(this.minutes(),2)+fi(this.seconds(),2)});he("Hmm",0,0,function(){return""+this.hours()+fi(this.minutes(),2)});he("Hmmss",0,0,function(){return""+this.hours()+fi(this.minutes(),2)+fi(this.seconds(),2)});function ER(e,t){he(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}ER("a",!0);ER("A",!1);kn("hour","h");Tn("hour",13);function CR(e,t){return t._meridiemParse}se("a",CR);se("A",CR);se("H",ct);se("h",ct);se("k",ct);se("HH",ct,cr);se("hh",ct,cr);se("kk",ct,cr);se("hmm",fR);se("hmmss",pR);se("Hmm",fR);se("Hmmss",pR);et(["H","HH"],Wt);et(["k","kk"],function(e,t,n){var r=Re(e);t[Wt]=r===24?0:r});et(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});et(["h","hh"],function(e,t,n){t[Wt]=Re(e),Ie(n).bigHour=!0});et("hmm",function(e,t,n){var r=e.length-2;t[Wt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r)),Ie(n).bigHour=!0});et("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Wt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r,2)),t[zi]=Re(e.substr(i)),Ie(n).bigHour=!0});et("Hmm",function(e,t,n){var r=e.length-2;t[Wt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r))});et("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Wt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r,2)),t[zi]=Re(e.substr(i))});function dq(e){return(e+"").toLowerCase().charAt(0)==="p"}var hq=/[ap]\.?m?\.?/i,fq=Zl("Hours",!0);function pq(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var kR={calendar:rG,longDateFormat:aG,invalidDate:uG,ordinal:dG,dayOfMonthOrdinalParse:hG,relativeTime:pG,months:bG,monthsShort:mR,week:zG,weekdays:qG,weekdaysMin:KG,weekdaysShort:xR,meridiemParse:hq},ft={},Su={},Qc;function mq(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function T2(e){return e&&e.toLowerCase().replace("_","-")}function gq(e){for(var t=0,n,r,i,s;t<e.length;){for(s=T2(e[t]).split("-"),n=s.length,r=T2(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=Eg(s.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&mq(s,r)>=n-1)break;n--}t++}return Qc}function vq(e){return e.match("^[^/\\\\]*$")!=null}function Eg(e){var t=null,n;if(ft[e]===void 0&&typeof mf!="undefined"&&mf&&mf.exports&&vq(e))try{t=Qc._abbr,n=require,n("./locale/"+e),Gs(t)}catch{ft[e]=null}return ft[e]}function Gs(e,t){var n;return e&&($n(t)?n=os(e):n=jS(e,t),n?Qc=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Qc._abbr}function jS(e,t){if(t!==null){var n,r=kR;if(t.abbr=e,ft[e]!=null)aR("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=ft[e]._config;else if(t.parentLocale!=null)if(ft[t.parentLocale]!=null)r=ft[t.parentLocale]._config;else if(n=Eg(t.parentLocale),n!=null)r=n._config;else return Su[t.parentLocale]||(Su[t.parentLocale]=[]),Su[t.parentLocale].push({name:e,config:t}),null;return ft[e]=new MS(S1(r,t)),Su[e]&&Su[e].forEach(function(i){jS(i.name,i.config)}),Gs(e),ft[e]}else return delete ft[e],null}function yq(e,t){if(t!=null){var n,r,i=kR;ft[e]!=null&&ft[e].parentLocale!=null?ft[e].set(S1(ft[e]._config,t)):(r=Eg(e),r!=null&&(i=r._config),t=S1(i,t),r==null&&(t.abbr=e),n=new MS(t),n.parentLocale=ft[e],ft[e]=n),Gs(e)}else ft[e]!=null&&(ft[e].parentLocale!=null?(ft[e]=ft[e].parentLocale,e===Gs()&&Gs(e)):ft[e]!=null&&delete ft[e]);return ft[e]}function os(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Qc;if(!zr(e)){if(t=Eg(e),t)return t;e=[e]}return gq(e)}function wq(){return x1(ft)}function YS(e){var t,n=e._a;return n&&Ie(e).overflow===-2&&(t=n[Bi]<0||n[Bi]>11?Bi:n[Qr]<1||n[Qr]>xg(n[Sn],n[Bi])?Qr:n[Wt]<0||n[Wt]>24||n[Wt]===24&&(n[Mr]!==0||n[zi]!==0||n[Po]!==0)?Wt:n[Mr]<0||n[Mr]>59?Mr:n[zi]<0||n[zi]>59?zi:n[Po]<0||n[Po]>999?Po:-1,Ie(e)._overflowDayOfYear&&(t<Sn||t>Qr)&&(t=Qr),Ie(e)._overflowWeeks&&t===-1&&(t=kG),Ie(e)._overflowWeekday&&t===-1&&(t=TG),Ie(e).overflow=t),e}var _q=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Sq=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,xq=/Z|[+-]\d\d(?::?\d\d)?/,Uh=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],pv=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Eq=/^\/?Date\((-?\d+)/i,Cq=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,kq={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function TR(e){var t,n,r=e._i,i=_q.exec(r)||Sq.exec(r),s,o,a,u,c=Uh.length,h=pv.length;if(i){for(Ie(e).iso=!0,t=0,n=c;t<n;t++)if(Uh[t][1].exec(i[1])){o=Uh[t][0],s=Uh[t][2]!==!1;break}if(o==null){e._isValid=!1;return}if(i[3]){for(t=0,n=h;t<n;t++)if(pv[t][1].exec(i[3])){a=(i[2]||" ")+pv[t][0];break}if(a==null){e._isValid=!1;return}}if(!s&&a!=null){e._isValid=!1;return}if(i[4])if(xq.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=o+(a||"")+(u||""),HS(e)}else e._isValid=!1}function Tq(e,t,n,r,i,s){var o=[Dq(e),mR.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function Dq(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function bq(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Iq(e,t,n){if(e){var r=xR.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return Ie(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Aq(e,t,n){if(e)return kq[e];if(t)return 0;var r=parseInt(n,10),i=r%100,s=(r-i)/100;return s*60+i}function DR(e){var t=Cq.exec(bq(e._i)),n;if(t){if(n=Tq(t[4],t[3],t[2],t[5],t[6],t[7]),!Iq(t[1],n,e))return;e._a=n,e._tzm=Aq(t[8],t[9],t[10]),e._d=qc.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),Ie(e).rfc2822=!0}else e._isValid=!1}function Nq(e){var t=Eq.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(TR(e),e._isValid===!1)delete e._isValid;else return;if(DR(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:te.createFromInputFallback(e)}te.createFromInputFallback=Cr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ia(e,t,n){return e!=null?e:t!=null?t:n}function Oq(e){var t=new Date(te.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function WS(e){var t,n,r=[],i,s,o;if(!e._d){for(i=Oq(e),e._w&&e._a[Qr]==null&&e._a[Bi]==null&&Rq(e),e._dayOfYear!=null&&(o=Ia(e._a[Sn],i[Sn]),(e._dayOfYear>nc(o)||e._dayOfYear===0)&&(Ie(e)._overflowDayOfYear=!0),n=qc(o,0,e._dayOfYear),e._a[Bi]=n.getUTCMonth(),e._a[Qr]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[Wt]===24&&e._a[Mr]===0&&e._a[zi]===0&&e._a[Po]===0&&(e._nextDay=!0,e._a[Wt]=0),e._d=(e._useUTC?qc:UG).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Wt]=24),e._w&&typeof e._w.d!="undefined"&&e._w.d!==s&&(Ie(e).weekdayMismatch=!0)}}function Rq(e){var t,n,r,i,s,o,a,u,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,o=4,n=Ia(t.GG,e._a[Sn],Kc(ut(),1,4).year),r=Ia(t.W,1),i=Ia(t.E,1),(i<1||i>7)&&(u=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,c=Kc(ut(),s,o),n=Ia(t.gg,e._a[Sn],c.year),r=Ia(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+s,(t.e<0||t.e>6)&&(u=!0)):i=s),r<1||r>Wi(n,s,o)?Ie(e)._overflowWeeks=!0:u!=null?Ie(e)._overflowWeekday=!0:(a=SR(n,r,i,s,o),e._a[Sn]=a.year,e._dayOfYear=a.dayOfYear)}te.ISO_8601=function(){};te.RFC_2822=function(){};function HS(e){if(e._f===te.ISO_8601){TR(e);return}if(e._f===te.RFC_2822){DR(e);return}e._a=[],Ie(e).empty=!0;var t=""+e._i,n,r,i,s,o,a=t.length,u=0,c,h;for(i=lR(e._f,e._locale).match(LS)||[],h=i.length,n=0;n<h;n++)s=i[n],r=(t.match(xG(s,e))||[])[0],r&&(o=t.substr(0,t.indexOf(r)),o.length>0&&Ie(e).unusedInput.push(o),t=t.slice(t.indexOf(r)+r.length),u+=r.length),ll[s]?(r?Ie(e).empty=!1:Ie(e).unusedTokens.push(s),CG(s,r,e)):e._strict&&!r&&Ie(e).unusedTokens.push(s);Ie(e).charsLeftOver=a-u,t.length>0&&Ie(e).unusedInput.push(t),e._a[Wt]<=12&&Ie(e).bigHour===!0&&e._a[Wt]>0&&(Ie(e).bigHour=void 0),Ie(e).parsedDateParts=e._a.slice(0),Ie(e).meridiem=e._meridiem,e._a[Wt]=Pq(e._locale,e._a[Wt],e._meridiem),c=Ie(e).era,c!==null&&(e._a[Sn]=e._locale.erasConvertYear(c,e._a[Sn])),WS(e),YS(e)}function Pq(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function Mq(e){var t,n,r,i,s,o,a=!1,u=e._f.length;if(u===0){Ie(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)s=0,o=!1,t=PS({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],HS(t),RS(t)&&(o=!0),s+=Ie(t).charsLeftOver,s+=Ie(t).unusedTokens.length*10,Ie(t).score=s,a?s<r&&(r=s,n=t):(r==null||s<r||o)&&(r=s,n=t,o&&(a=!0));Is(e,n||t)}function Lq(e){if(!e._d){var t=$S(e._i),n=t.day===void 0?t.date:t.day;e._a=sR([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),WS(e)}}function $q(e){var t=new Fd(YS(bR(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function bR(e){var t=e._i,n=e._f;return e._locale=e._locale||os(e._l),t===null||n===void 0&&t===""?mg({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Vr(t)?new Fd(YS(t)):($d(t)?e._d=t:zr(n)?Mq(e):n?HS(e):Fq(e),RS(e)||(e._d=null),e))}function Fq(e){var t=e._i;$n(t)?e._d=new Date(te.now()):$d(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Nq(e):zr(t)?(e._a=sR(t.slice(0),function(n){return parseInt(n,10)}),WS(e)):zo(t)?Lq(e):is(t)?e._d=new Date(t):te.createFromInputFallback(e)}function IR(e,t,n,r,i){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(zo(e)&&OS(e)||zr(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=e,s._f=t,s._strict=r,$q(s)}function ut(e,t,n,r){return IR(e,t,n,r,!1)}var Uq=Cr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ut.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:mg()}),Bq=Cr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ut.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:mg()});function AR(e,t){var n,r;if(t.length===1&&zr(t[0])&&(t=t[0]),!t.length)return ut();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function zq(){var e=[].slice.call(arguments,0);return AR("isBefore",e)}function Vq(){var e=[].slice.call(arguments,0);return AR("isAfter",e)}var jq=function(){return Date.now?Date.now():+new Date},xu=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Yq(e){var t,n=!1,r,i=xu.length;for(t in e)if(Ye(e,t)&&!(Nt.call(xu,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[xu[r]]){if(n)return!1;parseFloat(e[xu[r]])!==Re(e[xu[r]])&&(n=!0)}return!0}function Wq(){return this._isValid}function Hq(){return Yr(NaN)}function Cg(e){var t=$S(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,u=t.minute||0,c=t.second||0,h=t.millisecond||0;this._isValid=Yq(t),this._milliseconds=+h+c*1e3+u*6e4+a*1e3*60*60,this._days=+o+s*7,this._months=+i+r*3+n*12,this._data={},this._locale=os(),this._bubble()}function ff(e){return e instanceof Cg}function C1(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Gq(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&Re(e[o])!==Re(t[o]))&&s++;return s+i}function NR(e,t){he(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+fi(~~(n/60),2)+t+fi(~~n%60,2)})}NR("Z",":");NR("ZZ","");se("Z",Sg);se("ZZ",Sg);et(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=GS(Sg,e)});var qq=/([\+\-]|\d\d)/gi;function GS(e,t){var n=(t||"").match(e),r,i,s;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(qq)||["-",0,0],s=+(i[1]*60)+Re(i[2]),s===0?0:i[0]==="+"?s:-s)}function qS(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Vr(e)||$d(e)?e.valueOf():ut(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),te.updateOffset(n,!1),n):ut(e).local()}function k1(e){return-Math.round(e._d.getTimezoneOffset())}te.updateOffset=function(){};function Kq(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=GS(Sg,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=k1(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?PR(this,Yr(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,te.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:k1(this)}function Qq(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Xq(e){return this.utcOffset(0,e)}function Jq(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(k1(this),"m")),this}function Zq(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=GS(_G,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function eK(e){return this.isValid()?(e=e?ut(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function tK(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function nK(){if(!$n(this._isDSTShifted))return this._isDSTShifted;var e={},t;return PS(e,this),e=bR(e),e._a?(t=e._isUTC?gi(e._a):ut(e._a),this._isDSTShifted=this.isValid()&&Gq(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function rK(){return this.isValid()?!this._isUTC:!1}function iK(){return this.isValid()?this._isUTC:!1}function OR(){return this.isValid()?this._isUTC&&this._offset===0:!1}var sK=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,oK=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Yr(e,t){var n=e,r=null,i,s,o;return ff(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:is(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=sK.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:Re(r[Qr])*i,h:Re(r[Wt])*i,m:Re(r[Mr])*i,s:Re(r[zi])*i,ms:Re(C1(r[Po]*1e3))*i}):(r=oK.exec(e))?(i=r[1]==="-"?-1:1,n={y:xo(r[2],i),M:xo(r[3],i),w:xo(r[4],i),d:xo(r[5],i),h:xo(r[6],i),m:xo(r[7],i),s:xo(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=aK(ut(n.from),ut(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),s=new Cg(n),ff(e)&&Ye(e,"_locale")&&(s._locale=e._locale),ff(e)&&Ye(e,"_isValid")&&(s._isValid=e._isValid),s}Yr.fn=Cg.prototype;Yr.invalid=Hq;function xo(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function D2(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function aK(e,t){var n;return e.isValid()&&t.isValid()?(t=qS(t,e),e.isBefore(t)?n=D2(e,t):(n=D2(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function RR(e,t){return function(n,r){var i,s;return r!==null&&!isNaN(+r)&&(aR(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),i=Yr(n,r),PR(this,i,e),this}}function PR(e,t,n,r){var i=t._milliseconds,s=C1(t._days),o=C1(t._months);!e.isValid()||(r=r==null?!0:r,o&&vR(e,Dp(e,"Month")+o*n),s&&cR(e,"Date",Dp(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&te.updateOffset(e,s||o))}var lK=RR(1,"add"),uK=RR(-1,"subtract");function MR(e){return typeof e=="string"||e instanceof String}function cK(e){return Vr(e)||$d(e)||MR(e)||is(e)||hK(e)||dK(e)||e===null||e===void 0}function dK(e){var t=zo(e)&&!OS(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,s,o=r.length;for(i=0;i<o;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function hK(e){var t=zr(e),n=!1;return t&&(n=e.filter(function(r){return!is(r)&&MR(e)}).length===0),t&&n}function fK(e){var t=zo(e)&&!OS(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,s;for(i=0;i<r.length;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function pK(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function mK(e,t){arguments.length===1&&(arguments[0]?cK(arguments[0])?(e=arguments[0],t=void 0):fK(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||ut(),r=qS(n,this).startOf("day"),i=te.calendarFormat(this,r)||"sameElse",s=t&&(vi(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,ut(n)))}function gK(){return new Fd(this)}function vK(e,t){var n=Vr(e)?e:ut(e);return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function yK(e,t){var n=Vr(e)?e:ut(e);return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function wK(e,t,n,r){var i=Vr(e)?e:ut(e),s=Vr(t)?t:ut(t);return this.isValid()&&i.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function _K(e,t){var n=Vr(e)?e:ut(e),r;return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function SK(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function xK(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function EK(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(r=qS(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=kr(t),t){case"year":s=pf(this,r)/12;break;case"month":s=pf(this,r);break;case"quarter":s=pf(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:pr(s)}function pf(e,t){if(e.date()<t.date())return-pf(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,s;return t-r<0?(i=e.clone().add(n-1,"months"),s=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),s=(t-r)/(i-r)),-(n+s)||0}te.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";te.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function CK(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function kK(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?hf(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):vi(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",hf(n,"Z")):hf(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function TK(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+i+s)}function DK(e){e||(e=this.isUtc()?te.defaultFormatUtc:te.defaultFormat);var t=hf(this,e);return this.localeData().postformat(t)}function bK(e,t){return this.isValid()&&(Vr(e)&&e.isValid()||ut(e).isValid())?Yr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function IK(e){return this.from(ut(),e)}function AK(e,t){return this.isValid()&&(Vr(e)&&e.isValid()||ut(e).isValid())?Yr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function NK(e){return this.to(ut(),e)}function LR(e){var t;return e===void 0?this._locale._abbr:(t=os(e),t!=null&&(this._locale=t),this)}var $R=Cr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function FR(){return this._locale}var Ap=1e3,ul=60*Ap,Np=60*ul,UR=(365*400+97)*24*Np;function cl(e,t){return(e%t+t)%t}function BR(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-UR:new Date(e,t,n).valueOf()}function zR(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-UR:Date.UTC(e,t,n)}function OK(e){var t,n;if(e=kr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?zR:BR,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=cl(t+(this._isUTC?0:this.utcOffset()*ul),Np);break;case"minute":t=this._d.valueOf(),t-=cl(t,ul);break;case"second":t=this._d.valueOf(),t-=cl(t,Ap);break}return this._d.setTime(t),te.updateOffset(this,!0),this}function RK(e){var t,n;if(e=kr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?zR:BR,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Np-cl(t+(this._isUTC?0:this.utcOffset()*ul),Np)-1;break;case"minute":t=this._d.valueOf(),t+=ul-cl(t,ul)-1;break;case"second":t=this._d.valueOf(),t+=Ap-cl(t,Ap)-1;break}return this._d.setTime(t),te.updateOffset(this,!0),this}function PK(){return this._d.valueOf()-(this._offset||0)*6e4}function MK(){return Math.floor(this.valueOf()/1e3)}function LK(){return new Date(this.valueOf())}function $K(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function FK(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function UK(){return this.isValid()?this.toISOString():null}function BK(){return RS(this)}function zK(){return Is({},Ie(this))}function VK(){return Ie(this).overflow}function jK(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}he("N",0,0,"eraAbbr");he("NN",0,0,"eraAbbr");he("NNN",0,0,"eraAbbr");he("NNNN",0,0,"eraName");he("NNNNN",0,0,"eraNarrow");he("y",["y",1],"yo","eraYear");he("y",["yy",2],0,"eraYear");he("y",["yyy",3],0,"eraYear");he("y",["yyyy",4],0,"eraYear");se("N",KS);se("NN",KS);se("NNN",KS);se("NNNN",eQ);se("NNNNN",tQ);et(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?Ie(n).era=i:Ie(n).invalidEra=e});se("y",eu);se("yy",eu);se("yyy",eu);se("yyyy",eu);se("yo",nQ);et(["y","yy","yyy","yyyy"],Sn);et(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Sn]=n._locale.eraYearOrdinalParse(e,i):t[Sn]=parseInt(e,10)});function YK(e,t){var n,r,i,s=this._eras||os("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":i=te(s[n].since).startOf("day"),s[n].since=i.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":i=te(s[n].until).startOf("day").valueOf(),s[n].until=i.valueOf();break}}return s}function WK(e,t,n){var r,i,s=this.eras(),o,a,u;for(e=e.toUpperCase(),r=0,i=s.length;r<i;++r)if(o=s[r].name.toUpperCase(),a=s[r].abbr.toUpperCase(),u=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return s[r];break;case"NNNN":if(o===e)return s[r];break;case"NNNNN":if(u===e)return s[r];break}else if([o,a,u].indexOf(e)>=0)return s[r]}function HK(e,t){var n=e.since<=e.until?1:-1;return t===void 0?te(e.since).year():te(e.since).year()+(t-e.offset)*n}function GK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function qK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function KK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function QK(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-te(i[e].since).year())*n+i[e].offset;return this.year()}function XK(e){return Ye(this,"_erasNameRegex")||QS.call(this),e?this._erasNameRegex:this._erasRegex}function JK(e){return Ye(this,"_erasAbbrRegex")||QS.call(this),e?this._erasAbbrRegex:this._erasRegex}function ZK(e){return Ye(this,"_erasNarrowRegex")||QS.call(this),e?this._erasNarrowRegex:this._erasRegex}function KS(e,t){return t.erasAbbrRegex(e)}function eQ(e,t){return t.erasNameRegex(e)}function tQ(e,t){return t.erasNarrowRegex(e)}function nQ(e,t){return t._eraYearOrdinalRegex||eu}function QS(){var e=[],t=[],n=[],r=[],i,s,o=this.eras();for(i=0,s=o.length;i<s;++i)t.push(Kn(o[i].name)),e.push(Kn(o[i].abbr)),n.push(Kn(o[i].narrow)),r.push(Kn(o[i].name)),r.push(Kn(o[i].abbr)),r.push(Kn(o[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}he(0,["gg",2],0,function(){return this.weekYear()%100});he(0,["GG",2],0,function(){return this.isoWeekYear()%100});function kg(e,t){he(0,[e,e.length],0,t)}kg("gggg","weekYear");kg("ggggg","weekYear");kg("GGGG","isoWeekYear");kg("GGGGG","isoWeekYear");kn("weekYear","gg");kn("isoWeekYear","GG");Tn("weekYear",1);Tn("isoWeekYear",1);se("G",_g);se("g",_g);se("GG",ct,cr);se("gg",ct,cr);se("GGGG",US,FS);se("gggg",US,FS);se("GGGGG",wg,vg);se("ggggg",wg,vg);Bd(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=Re(e)});Bd(["gg","GG"],function(e,t,n,r){t[r]=te.parseTwoDigitYear(e)});function rQ(e){return VR.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function iQ(e){return VR.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function sQ(){return Wi(this.year(),1,4)}function oQ(){return Wi(this.isoWeekYear(),1,4)}function aQ(){var e=this.localeData()._week;return Wi(this.year(),e.dow,e.doy)}function lQ(){var e=this.localeData()._week;return Wi(this.weekYear(),e.dow,e.doy)}function VR(e,t,n,r,i){var s;return e==null?Kc(this,r,i).year:(s=Wi(e,r,i),t>s&&(t=s),uQ.call(this,e,t,n,r,i))}function uQ(e,t,n,r,i){var s=SR(e,t,n,r,i),o=qc(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}he("Q",0,"Qo","quarter");kn("quarter","Q");Tn("quarter",7);se("Q",dR);et("Q",function(e,t){t[Bi]=(Re(e)-1)*3});function cQ(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}he("D",["DD",2],"Do","date");kn("date","D");Tn("date",9);se("D",ct);se("DD",ct,cr);se("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});et(["D","DD"],Qr);et("Do",function(e,t){t[Qr]=Re(e.match(ct)[0])});var jR=Zl("Date",!0);he("DDD",["DDDD",3],"DDDo","dayOfYear");kn("dayOfYear","DDD");Tn("dayOfYear",4);se("DDD",yg);se("DDDD",hR);et(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Re(e)});function dQ(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}he("m",["mm",2],0,"minute");kn("minute","m");Tn("minute",14);se("m",ct);se("mm",ct,cr);et(["m","mm"],Mr);var hQ=Zl("Minutes",!1);he("s",["ss",2],0,"second");kn("second","s");Tn("second",15);se("s",ct);se("ss",ct,cr);et(["s","ss"],zi);var fQ=Zl("Seconds",!1);he("S",0,0,function(){return~~(this.millisecond()/100)});he(0,["SS",2],0,function(){return~~(this.millisecond()/10)});he(0,["SSS",3],0,"millisecond");he(0,["SSSS",4],0,function(){return this.millisecond()*10});he(0,["SSSSS",5],0,function(){return this.millisecond()*100});he(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});he(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});he(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});he(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});kn("millisecond","ms");Tn("millisecond",16);se("S",yg,dR);se("SS",yg,cr);se("SSS",yg,hR);var As,YR;for(As="SSSS";As.length<=9;As+="S")se(As,eu);function pQ(e,t){t[Po]=Re(("0."+e)*1e3)}for(As="S";As.length<=9;As+="S")et(As,pQ);YR=Zl("Milliseconds",!1);he("z",0,0,"zoneAbbr");he("zz",0,0,"zoneName");function mQ(){return this._isUTC?"UTC":""}function gQ(){return this._isUTC?"Coordinated Universal Time":""}var K=Fd.prototype;K.add=lK;K.calendar=mK;K.clone=gK;K.diff=EK;K.endOf=RK;K.format=DK;K.from=bK;K.fromNow=IK;K.to=AK;K.toNow=NK;K.get=yG;K.invalidAt=VK;K.isAfter=vK;K.isBefore=yK;K.isBetween=wK;K.isSame=_K;K.isSameOrAfter=SK;K.isSameOrBefore=xK;K.isValid=BK;K.lang=$R;K.locale=LR;K.localeData=FR;K.max=Bq;K.min=Uq;K.parsingFlags=zK;K.set=wG;K.startOf=OK;K.subtract=uK;K.toArray=$K;K.toObject=FK;K.toDate=LK;K.toISOString=kK;K.inspect=TK;typeof Symbol!="undefined"&&Symbol.for!=null&&(K[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});K.toJSON=UK;K.toString=CK;K.unix=MK;K.valueOf=PK;K.creationData=jK;K.eraName=GK;K.eraNarrow=qK;K.eraAbbr=KK;K.eraYear=QK;K.year=_R;K.isLeapYear=FG;K.weekYear=rQ;K.isoWeekYear=iQ;K.quarter=K.quarters=cQ;K.month=yR;K.daysInMonth=MG;K.week=K.weeks=YG;K.isoWeek=K.isoWeeks=WG;K.weeksInYear=aQ;K.weeksInWeekYear=lQ;K.isoWeeksInYear=sQ;K.isoWeeksInISOWeekYear=oQ;K.date=jR;K.day=K.days=iq;K.weekday=sq;K.isoWeekday=oq;K.dayOfYear=dQ;K.hour=K.hours=fq;K.minute=K.minutes=hQ;K.second=K.seconds=fQ;K.millisecond=K.milliseconds=YR;K.utcOffset=Kq;K.utc=Xq;K.local=Jq;K.parseZone=Zq;K.hasAlignedHourOffset=eK;K.isDST=tK;K.isLocal=rK;K.isUtcOffset=iK;K.isUtc=OR;K.isUTC=OR;K.zoneAbbr=mQ;K.zoneName=gQ;K.dates=Cr("dates accessor is deprecated. Use date instead.",jR);K.months=Cr("months accessor is deprecated. Use month instead",yR);K.years=Cr("years accessor is deprecated. Use year instead",_R);K.zone=Cr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Qq);K.isDSTShifted=Cr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",nK);function vQ(e){return ut(e*1e3)}function yQ(){return ut.apply(null,arguments).parseZone()}function WR(e){return e}var We=MS.prototype;We.calendar=iG;We.longDateFormat=lG;We.invalidDate=cG;We.ordinal=fG;We.preparse=WR;We.postformat=WR;We.relativeTime=mG;We.pastFuture=gG;We.set=nG;We.eras=YK;We.erasParse=WK;We.erasConvertYear=HK;We.erasAbbrRegex=JK;We.erasNameRegex=XK;We.erasNarrowRegex=ZK;We.months=NG;We.monthsShort=OG;We.monthsParse=PG;We.monthsRegex=$G;We.monthsShortRegex=LG;We.week=BG;We.firstDayOfYear=jG;We.firstDayOfWeek=VG;We.weekdays=ZG;We.weekdaysMin=tq;We.weekdaysShort=eq;We.weekdaysParse=rq;We.weekdaysRegex=aq;We.weekdaysShortRegex=lq;We.weekdaysMinRegex=uq;We.isPM=dq;We.meridiem=pq;function Op(e,t,n,r){var i=os(),s=gi().set(r,t);return i[n](s,e)}function HR(e,t,n){if(is(e)&&(t=e,e=void 0),e=e||"",t!=null)return Op(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Op(e,r,n,"month");return i}function XS(e,t,n,r){typeof e=="boolean"?(is(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,is(t)&&(n=t,t=void 0),t=t||"");var i=os(),s=e?i._week.dow:0,o,a=[];if(n!=null)return Op(t,(n+s)%7,r,"day");for(o=0;o<7;o++)a[o]=Op(t,(o+s)%7,r,"day");return a}function wQ(e,t){return HR(e,t,"months")}function _Q(e,t){return HR(e,t,"monthsShort")}function SQ(e,t,n){return XS(e,t,n,"weekdays")}function xQ(e,t,n){return XS(e,t,n,"weekdaysShort")}function EQ(e,t,n){return XS(e,t,n,"weekdaysMin")}Gs("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=Re(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});te.lang=Cr("moment.lang is deprecated. Use moment.locale instead.",Gs);te.langData=Cr("moment.langData is deprecated. Use moment.localeData instead.",os);var Ti=Math.abs;function CQ(){var e=this._data;return this._milliseconds=Ti(this._milliseconds),this._days=Ti(this._days),this._months=Ti(this._months),e.milliseconds=Ti(e.milliseconds),e.seconds=Ti(e.seconds),e.minutes=Ti(e.minutes),e.hours=Ti(e.hours),e.months=Ti(e.months),e.years=Ti(e.years),this}function GR(e,t,n,r){var i=Yr(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function kQ(e,t){return GR(this,e,t,1)}function TQ(e,t){return GR(this,e,t,-1)}function b2(e){return e<0?Math.floor(e):Math.ceil(e)}function DQ(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,a,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=b2(T1(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=pr(e/1e3),r.seconds=i%60,s=pr(i/60),r.minutes=s%60,o=pr(s/60),r.hours=o%24,t+=pr(o/24),u=pr(qR(t)),n+=u,t-=b2(T1(u)),a=pr(n/12),n%=12,r.days=t,r.months=n,r.years=a,this}function qR(e){return e*4800/146097}function T1(e){return e*146097/4800}function bQ(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=kr(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+qR(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(T1(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function IQ(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Re(this._months/12)*31536e6:NaN}function as(e){return function(){return this.as(e)}}var AQ=as("ms"),NQ=as("s"),OQ=as("m"),RQ=as("h"),PQ=as("d"),MQ=as("w"),LQ=as("M"),$Q=as("Q"),FQ=as("y");function UQ(){return Yr(this)}function BQ(e){return e=kr(e),this.isValid()?this[e+"s"]():NaN}function pa(e){return function(){return this.isValid()?this._data[e]:NaN}}var zQ=pa("milliseconds"),VQ=pa("seconds"),jQ=pa("minutes"),YQ=pa("hours"),WQ=pa("days"),HQ=pa("months"),GQ=pa("years");function qQ(){return pr(this.days()/7)}var bi=Math.round,Wa={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function KQ(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function QQ(e,t,n,r){var i=Yr(e).abs(),s=bi(i.as("s")),o=bi(i.as("m")),a=bi(i.as("h")),u=bi(i.as("d")),c=bi(i.as("M")),h=bi(i.as("w")),p=bi(i.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(m=m||h<=1&&["w"]||h<n.w&&["ww",h]),m=m||c<=1&&["M"]||c<n.M&&["MM",c]||p<=1&&["y"]||["yy",p],m[2]=t,m[3]=+e>0,m[4]=r,KQ.apply(null,m)}function XQ(e){return e===void 0?bi:typeof e=="function"?(bi=e,!0):!1}function JQ(e,t){return Wa[e]===void 0?!1:t===void 0?Wa[e]:(Wa[e]=t,e==="s"&&(Wa.ss=t-1),!0)}function ZQ(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Wa,i,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Wa,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),s=QQ(this,!n,r,i),n&&(s=i.pastFuture(+this,s)),i.postformat(s)}var mv=Math.abs;function Ca(e){return(e>0)-(e<0)||+e}function Tg(){if(!this.isValid())return this.localeData().invalidDate();var e=mv(this._milliseconds)/1e3,t=mv(this._days),n=mv(this._months),r,i,s,o,a=this.asSeconds(),u,c,h,p;return a?(r=pr(e/60),i=pr(r/60),e%=60,r%=60,s=pr(n/12),n%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=a<0?"-":"",c=Ca(this._months)!==Ca(a)?"-":"",h=Ca(this._days)!==Ca(a)?"-":"",p=Ca(this._milliseconds)!==Ca(a)?"-":"",u+"P"+(s?c+s+"Y":"")+(n?c+n+"M":"")+(t?h+t+"D":"")+(i||r||e?"T":"")+(i?p+i+"H":"")+(r?p+r+"M":"")+(e?p+o+"S":"")):"P0D"}var Ue=Cg.prototype;Ue.isValid=Wq;Ue.abs=CQ;Ue.add=kQ;Ue.subtract=TQ;Ue.as=bQ;Ue.asMilliseconds=AQ;Ue.asSeconds=NQ;Ue.asMinutes=OQ;Ue.asHours=RQ;Ue.asDays=PQ;Ue.asWeeks=MQ;Ue.asMonths=LQ;Ue.asQuarters=$Q;Ue.asYears=FQ;Ue.valueOf=IQ;Ue._bubble=DQ;Ue.clone=UQ;Ue.get=BQ;Ue.milliseconds=zQ;Ue.seconds=VQ;Ue.minutes=jQ;Ue.hours=YQ;Ue.days=WQ;Ue.weeks=qQ;Ue.months=HQ;Ue.years=GQ;Ue.humanize=ZQ;Ue.toISOString=Tg;Ue.toString=Tg;Ue.toJSON=Tg;Ue.locale=LR;Ue.localeData=FR;Ue.toIsoString=Cr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Tg);Ue.lang=$R;he("X",0,0,"unix");he("x",0,0,"valueOf");se("x",_g);se("X",SG);et("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});et("x",function(e,t,n){n._d=new Date(Re(e))});//! moment.js
te.version="2.29.4";eG(ut);te.fn=K;te.min=zq;te.max=Vq;te.now=jq;te.utc=gi;te.unix=vQ;te.months=wQ;te.isDate=$d;te.locale=Gs;te.invalid=mg;te.duration=Yr;te.isMoment=Vr;te.weekdays=SQ;te.parseZone=yQ;te.localeData=os;te.isDuration=ff;te.monthsShort=_Q;te.weekdaysMin=EQ;te.defineLocale=jS;te.updateLocale=yq;te.locales=wq;te.weekdaysShort=xQ;te.normalizeUnits=kr;te.relativeTimeRounding=XQ;te.relativeTimeThreshold=JQ;te.calendarFormat=pK;te.prototype=K;te.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var JS={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(U2,function(){var n;function r(){return n.apply(null,arguments)}function i(l){n=l}function s(l){return l instanceof Array||Object.prototype.toString.call(l)==="[object Array]"}function o(l){return l!=null&&Object.prototype.toString.call(l)==="[object Object]"}function a(l,d){return Object.prototype.hasOwnProperty.call(l,d)}function u(l){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(l).length===0;var d;for(d in l)if(a(l,d))return!1;return!0}function c(l){return l===void 0}function h(l){return typeof l=="number"||Object.prototype.toString.call(l)==="[object Number]"}function p(l){return l instanceof Date||Object.prototype.toString.call(l)==="[object Date]"}function m(l,d){var f=[],g,E=l.length;for(g=0;g<E;++g)f.push(d(l[g],g));return f}function w(l,d){for(var f in d)a(d,f)&&(l[f]=d[f]);return a(d,"toString")&&(l.toString=d.toString),a(d,"valueOf")&&(l.valueOf=d.valueOf),l}function _(l,d,f,g){return kx(l,d,f,g,!0).utc()}function S(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function k(l){return l._pf==null&&(l._pf=S()),l._pf}var x;Array.prototype.some?x=Array.prototype.some:x=function(l){var d=Object(this),f=d.length>>>0,g;for(g=0;g<f;g++)if(g in d&&l.call(this,d[g],g,d))return!0;return!1};function v(l){if(l._isValid==null){var d=k(l),f=x.call(d.parsedDateParts,function(E){return E!=null}),g=!isNaN(l._d.getTime())&&d.overflow<0&&!d.empty&&!d.invalidEra&&!d.invalidMonth&&!d.invalidWeekday&&!d.weekdayMismatch&&!d.nullInput&&!d.invalidFormat&&!d.userInvalidated&&(!d.meridiem||d.meridiem&&f);if(l._strict&&(g=g&&d.charsLeftOver===0&&d.unusedTokens.length===0&&d.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(l))l._isValid=g;else return g}return l._isValid}function C(l){var d=_(NaN);return l!=null?w(k(d),l):k(d).userInvalidated=!0,d}var T=r.momentProperties=[],I=!1;function R(l,d){var f,g,E,b=T.length;if(c(d._isAMomentObject)||(l._isAMomentObject=d._isAMomentObject),c(d._i)||(l._i=d._i),c(d._f)||(l._f=d._f),c(d._l)||(l._l=d._l),c(d._strict)||(l._strict=d._strict),c(d._tzm)||(l._tzm=d._tzm),c(d._isUTC)||(l._isUTC=d._isUTC),c(d._offset)||(l._offset=d._offset),c(d._pf)||(l._pf=k(d)),c(d._locale)||(l._locale=d._locale),b>0)for(f=0;f<b;f++)g=T[f],E=d[g],c(E)||(l[g]=E);return l}function A(l){R(this,l),this._d=new Date(l._d!=null?l._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),I===!1&&(I=!0,r.updateOffset(this),I=!1)}function O(l){return l instanceof A||l!=null&&l._isAMomentObject!=null}function Z(l){r.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+l)}function F(l,d){var f=!0;return w(function(){if(r.deprecationHandler!=null&&r.deprecationHandler(null,l),f){var g=[],E,b,M,de=arguments.length;for(b=0;b<de;b++){if(E="",typeof arguments[b]=="object"){E+=`
[`+b+"] ";for(M in arguments[0])a(arguments[0],M)&&(E+=M+": "+arguments[0][M]+", ");E=E.slice(0,-2)}else E=arguments[b];g.push(E)}Z(l+`
Arguments: `+Array.prototype.slice.call(g).join("")+`
`+new Error().stack),f=!1}return d.apply(this,arguments)},d)}var j={};function J(l,d){r.deprecationHandler!=null&&r.deprecationHandler(l,d),j[l]||(Z(d),j[l]=!0)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null;function X(l){return typeof Function!="undefined"&&l instanceof Function||Object.prototype.toString.call(l)==="[object Function]"}function ue(l){var d,f;for(f in l)a(l,f)&&(d=l[f],X(d)?this[f]=d:this["_"+f]=d);this._config=l,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function oe(l,d){var f=w({},l),g;for(g in d)a(d,g)&&(o(l[g])&&o(d[g])?(f[g]={},w(f[g],l[g]),w(f[g],d[g])):d[g]!=null?f[g]=d[g]:delete f[g]);for(g in l)a(l,g)&&!a(d,g)&&o(l[g])&&(f[g]=w({},f[g]));return f}function Te(l){l!=null&&this.set(l)}var ge;Object.keys?ge=Object.keys:ge=function(l){var d,f=[];for(d in l)a(l,d)&&f.push(d);return f};var $={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function V(l,d,f){var g=this._calendar[l]||this._calendar.sameElse;return X(g)?g.call(d,f):g}function P(l,d,f){var g=""+Math.abs(l),E=d-g.length,b=l>=0;return(b?f?"+":"":"-")+Math.pow(10,Math.max(0,E)).toString().substr(1)+g}var ee=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,B={},Y={};function z(l,d,f,g){var E=g;typeof g=="string"&&(E=function(){return this[g]()}),l&&(Y[l]=E),d&&(Y[d[0]]=function(){return P(E.apply(this,arguments),d[1],d[2])}),f&&(Y[f]=function(){return this.localeData().ordinal(E.apply(this,arguments),l)})}function D(l){return l.match(/\[[\s\S]/)?l.replace(/^\[|\]$/g,""):l.replace(/\\/g,"")}function le(l){var d=l.match(ee),f,g;for(f=0,g=d.length;f<g;f++)Y[d[f]]?d[f]=Y[d[f]]:d[f]=D(d[f]);return function(E){var b="",M;for(M=0;M<g;M++)b+=X(d[M])?d[M].call(E,l):d[M];return b}}function W(l,d){return l.isValid()?(d=we(d,l.localeData()),B[d]=B[d]||le(d),B[d](l)):l.localeData().invalidDate()}function we(l,d){var f=5;function g(E){return d.longDateFormat(E)||E}for(U.lastIndex=0;f>=0&&U.test(l);)l=l.replace(U,g),U.lastIndex=0,f-=1;return l}var me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Be(l){var d=this._longDateFormat[l],f=this._longDateFormat[l.toUpperCase()];return d||!f?d:(this._longDateFormat[l]=f.match(ee).map(function(g){return g==="MMMM"||g==="MM"||g==="DD"||g==="dddd"?g.slice(1):g}).join(""),this._longDateFormat[l])}var _e="Invalid date";function ne(){return this._invalidDate}var De="%d",Ce=/\d{1,2}/;function dt(l){return this._ordinal.replace("%d",l)}var Le={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Bt(l,d,f,g){var E=this._relativeTime[f];return X(E)?E(l,d,f,g):E.replace(/%d/i,l)}function vo(l,d){var f=this._relativeTime[l>0?"future":"past"];return X(f)?f(d):f.replace(/%s/i,d)}var yt={};function bt(l,d){var f=l.toLowerCase();yt[f]=yt[f+"s"]=yt[d]=l}function Gt(l){return typeof l=="string"?yt[l]||yt[l.toLowerCase()]:void 0}function Dn(l){var d={},f,g;for(g in l)a(l,g)&&(f=Gt(g),f&&(d[f]=l[g]));return d}var ve={};function Ne(l,d){ve[l]=d}function tu(l){var d=[],f;for(f in l)a(l,f)&&d.push({unit:f,priority:ve[f]});return d.sort(function(g,E){return g.priority-E.priority}),d}function us(l){return l%4===0&&l%100!==0||l%400===0}function It(l){return l<0?Math.ceil(l)||0:Math.floor(l)}function Oe(l){var d=+l,f=0;return d!==0&&isFinite(d)&&(f=It(d)),f}function ma(l,d){return function(f){return f!=null?(sx(this,l,f),r.updateOffset(this,d),this):zd(this,l)}}function zd(l,d){return l.isValid()?l._d["get"+(l._isUTC?"UTC":"")+d]():NaN}function sx(l,d,f){l.isValid()&&!isNaN(f)&&(d==="FullYear"&&us(l.year())&&l.month()===1&&l.date()===29?(f=Oe(f),l._d["set"+(l._isUTC?"UTC":"")+d](f,l.month(),qd(f,l.month()))):l._d["set"+(l._isUTC?"UTC":"")+d](f))}function u4(l){return l=Gt(l),X(this[l])?this[l]():this}function c4(l,d){if(typeof l=="object"){l=Dn(l);var f=tu(l),g,E=f.length;for(g=0;g<E;g++)this[f[g].unit](l[f[g].unit])}else if(l=Gt(l),X(this[l]))return this[l](d);return this}var ox=/\d/,Hn=/\d\d/,ax=/\d{3}/,Mg=/\d{4}/,Vd=/[+-]?\d{6}/,it=/\d\d?/,lx=/\d\d\d\d?/,ux=/\d\d\d\d\d\d?/,jd=/\d{1,3}/,Lg=/\d{1,4}/,Yd=/[+-]?\d{1,6}/,ga=/\d+/,Wd=/[+-]?\d+/,d4=/Z|[+-]\d\d:?\d\d/gi,Hd=/Z|[+-]\d\d(?::?\d\d)?/gi,h4=/[+-]?\d+(\.\d{1,3})?/,nu=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Gd;Gd={};function ie(l,d,f){Gd[l]=X(d)?d:function(g,E){return g&&f?f:d}}function f4(l,d){return a(Gd,l)?Gd[l](d._strict,d._locale):new RegExp(p4(l))}function p4(l){return Gn(l.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(d,f,g,E,b){return f||g||E||b}))}function Gn(l){return l.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var $g={};function Je(l,d){var f,g=d,E;for(typeof l=="string"&&(l=[l]),h(d)&&(g=function(b,M){M[d]=Oe(b)}),E=l.length,f=0;f<E;f++)$g[l[f]]=g}function ru(l,d){Je(l,function(f,g,E,b){E._w=E._w||{},d(f,E._w,E,b)})}function m4(l,d,f){d!=null&&a($g,l)&&$g[l](d,f._a,f,l)}var un=0,yi=1,Wr=2,zt=3,Tr=4,wi=5,yo=6,g4=7,v4=8;function y4(l,d){return(l%d+d)%d}var At;Array.prototype.indexOf?At=Array.prototype.indexOf:At=function(l){var d;for(d=0;d<this.length;++d)if(this[d]===l)return d;return-1};function qd(l,d){if(isNaN(l)||isNaN(d))return NaN;var f=y4(d,12);return l+=(d-f)/12,f===1?us(l)?29:28:31-f%7%2}z("M",["MM",2],"Mo",function(){return this.month()+1}),z("MMM",0,0,function(l){return this.localeData().monthsShort(this,l)}),z("MMMM",0,0,function(l){return this.localeData().months(this,l)}),bt("month","M"),Ne("month",8),ie("M",it),ie("MM",it,Hn),ie("MMM",function(l,d){return d.monthsShortRegex(l)}),ie("MMMM",function(l,d){return d.monthsRegex(l)}),Je(["M","MM"],function(l,d){d[yi]=Oe(l)-1}),Je(["MMM","MMMM"],function(l,d,f,g){var E=f._locale.monthsParse(l,g,f._strict);E!=null?d[yi]=E:k(f).invalidMonth=l});var w4="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),cx="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),dx=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,_4=nu,S4=nu;function x4(l,d){return l?s(this._months)?this._months[l.month()]:this._months[(this._months.isFormat||dx).test(d)?"format":"standalone"][l.month()]:s(this._months)?this._months:this._months.standalone}function E4(l,d){return l?s(this._monthsShort)?this._monthsShort[l.month()]:this._monthsShort[dx.test(d)?"format":"standalone"][l.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function C4(l,d,f){var g,E,b,M=l.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],g=0;g<12;++g)b=_([2e3,g]),this._shortMonthsParse[g]=this.monthsShort(b,"").toLocaleLowerCase(),this._longMonthsParse[g]=this.months(b,"").toLocaleLowerCase();return f?d==="MMM"?(E=At.call(this._shortMonthsParse,M),E!==-1?E:null):(E=At.call(this._longMonthsParse,M),E!==-1?E:null):d==="MMM"?(E=At.call(this._shortMonthsParse,M),E!==-1?E:(E=At.call(this._longMonthsParse,M),E!==-1?E:null)):(E=At.call(this._longMonthsParse,M),E!==-1?E:(E=At.call(this._shortMonthsParse,M),E!==-1?E:null))}function k4(l,d,f){var g,E,b;if(this._monthsParseExact)return C4.call(this,l,d,f);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),g=0;g<12;g++){if(E=_([2e3,g]),f&&!this._longMonthsParse[g]&&(this._longMonthsParse[g]=new RegExp("^"+this.months(E,"").replace(".","")+"$","i"),this._shortMonthsParse[g]=new RegExp("^"+this.monthsShort(E,"").replace(".","")+"$","i")),!f&&!this._monthsParse[g]&&(b="^"+this.months(E,"")+"|^"+this.monthsShort(E,""),this._monthsParse[g]=new RegExp(b.replace(".",""),"i")),f&&d==="MMMM"&&this._longMonthsParse[g].test(l))return g;if(f&&d==="MMM"&&this._shortMonthsParse[g].test(l))return g;if(!f&&this._monthsParse[g].test(l))return g}}function hx(l,d){var f;if(!l.isValid())return l;if(typeof d=="string"){if(/^\d+$/.test(d))d=Oe(d);else if(d=l.localeData().monthsParse(d),!h(d))return l}return f=Math.min(l.date(),qd(l.year(),d)),l._d["set"+(l._isUTC?"UTC":"")+"Month"](d,f),l}function fx(l){return l!=null?(hx(this,l),r.updateOffset(this,!0),this):zd(this,"Month")}function T4(){return qd(this.year(),this.month())}function D4(l){return this._monthsParseExact?(a(this,"_monthsRegex")||px.call(this),l?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=_4),this._monthsShortStrictRegex&&l?this._monthsShortStrictRegex:this._monthsShortRegex)}function b4(l){return this._monthsParseExact?(a(this,"_monthsRegex")||px.call(this),l?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=S4),this._monthsStrictRegex&&l?this._monthsStrictRegex:this._monthsRegex)}function px(){function l(M,de){return de.length-M.length}var d=[],f=[],g=[],E,b;for(E=0;E<12;E++)b=_([2e3,E]),d.push(this.monthsShort(b,"")),f.push(this.months(b,"")),g.push(this.months(b,"")),g.push(this.monthsShort(b,""));for(d.sort(l),f.sort(l),g.sort(l),E=0;E<12;E++)d[E]=Gn(d[E]),f[E]=Gn(f[E]);for(E=0;E<24;E++)g[E]=Gn(g[E]);this._monthsRegex=new RegExp("^("+g.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}z("Y",0,0,function(){var l=this.year();return l<=9999?P(l,4):"+"+l}),z(0,["YY",2],0,function(){return this.year()%100}),z(0,["YYYY",4],0,"year"),z(0,["YYYYY",5],0,"year"),z(0,["YYYYYY",6,!0],0,"year"),bt("year","y"),Ne("year",1),ie("Y",Wd),ie("YY",it,Hn),ie("YYYY",Lg,Mg),ie("YYYYY",Yd,Vd),ie("YYYYYY",Yd,Vd),Je(["YYYYY","YYYYYY"],un),Je("YYYY",function(l,d){d[un]=l.length===2?r.parseTwoDigitYear(l):Oe(l)}),Je("YY",function(l,d){d[un]=r.parseTwoDigitYear(l)}),Je("Y",function(l,d){d[un]=parseInt(l,10)});function iu(l){return us(l)?366:365}r.parseTwoDigitYear=function(l){return Oe(l)+(Oe(l)>68?1900:2e3)};var mx=ma("FullYear",!0);function I4(){return us(this.year())}function A4(l,d,f,g,E,b,M){var de;return l<100&&l>=0?(de=new Date(l+400,d,f,g,E,b,M),isFinite(de.getFullYear())&&de.setFullYear(l)):de=new Date(l,d,f,g,E,b,M),de}function su(l){var d,f;return l<100&&l>=0?(f=Array.prototype.slice.call(arguments),f[0]=l+400,d=new Date(Date.UTC.apply(null,f)),isFinite(d.getUTCFullYear())&&d.setUTCFullYear(l)):d=new Date(Date.UTC.apply(null,arguments)),d}function Kd(l,d,f){var g=7+d-f,E=(7+su(l,0,g).getUTCDay()-d)%7;return-E+g-1}function gx(l,d,f,g,E){var b=(7+f-g)%7,M=Kd(l,g,E),de=1+7*(d-1)+b+M,Ae,Ze;return de<=0?(Ae=l-1,Ze=iu(Ae)+de):de>iu(l)?(Ae=l+1,Ze=de-iu(l)):(Ae=l,Ze=de),{year:Ae,dayOfYear:Ze}}function ou(l,d,f){var g=Kd(l.year(),d,f),E=Math.floor((l.dayOfYear()-g-1)/7)+1,b,M;return E<1?(M=l.year()-1,b=E+_i(M,d,f)):E>_i(l.year(),d,f)?(b=E-_i(l.year(),d,f),M=l.year()+1):(M=l.year(),b=E),{week:b,year:M}}function _i(l,d,f){var g=Kd(l,d,f),E=Kd(l+1,d,f);return(iu(l)-g+E)/7}z("w",["ww",2],"wo","week"),z("W",["WW",2],"Wo","isoWeek"),bt("week","w"),bt("isoWeek","W"),Ne("week",5),Ne("isoWeek",5),ie("w",it),ie("ww",it,Hn),ie("W",it),ie("WW",it,Hn),ru(["w","ww","W","WW"],function(l,d,f,g){d[g.substr(0,1)]=Oe(l)});function N4(l){return ou(l,this._week.dow,this._week.doy).week}var O4={dow:0,doy:6};function R4(){return this._week.dow}function P4(){return this._week.doy}function M4(l){var d=this.localeData().week(this);return l==null?d:this.add((l-d)*7,"d")}function L4(l){var d=ou(this,1,4).week;return l==null?d:this.add((l-d)*7,"d")}z("d",0,"do","day"),z("dd",0,0,function(l){return this.localeData().weekdaysMin(this,l)}),z("ddd",0,0,function(l){return this.localeData().weekdaysShort(this,l)}),z("dddd",0,0,function(l){return this.localeData().weekdays(this,l)}),z("e",0,0,"weekday"),z("E",0,0,"isoWeekday"),bt("day","d"),bt("weekday","e"),bt("isoWeekday","E"),Ne("day",11),Ne("weekday",11),Ne("isoWeekday",11),ie("d",it),ie("e",it),ie("E",it),ie("dd",function(l,d){return d.weekdaysMinRegex(l)}),ie("ddd",function(l,d){return d.weekdaysShortRegex(l)}),ie("dddd",function(l,d){return d.weekdaysRegex(l)}),ru(["dd","ddd","dddd"],function(l,d,f,g){var E=f._locale.weekdaysParse(l,g,f._strict);E!=null?d.d=E:k(f).invalidWeekday=l}),ru(["d","e","E"],function(l,d,f,g){d[g]=Oe(l)});function $4(l,d){return typeof l!="string"?l:isNaN(l)?(l=d.weekdaysParse(l),typeof l=="number"?l:null):parseInt(l,10)}function F4(l,d){return typeof l=="string"?d.weekdaysParse(l)%7||7:isNaN(l)?null:l}function Fg(l,d){return l.slice(d,7).concat(l.slice(0,d))}var U4="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),vx="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),B4="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),z4=nu,V4=nu,j4=nu;function Y4(l,d){var f=s(this._weekdays)?this._weekdays:this._weekdays[l&&l!==!0&&this._weekdays.isFormat.test(d)?"format":"standalone"];return l===!0?Fg(f,this._week.dow):l?f[l.day()]:f}function W4(l){return l===!0?Fg(this._weekdaysShort,this._week.dow):l?this._weekdaysShort[l.day()]:this._weekdaysShort}function H4(l){return l===!0?Fg(this._weekdaysMin,this._week.dow):l?this._weekdaysMin[l.day()]:this._weekdaysMin}function G4(l,d,f){var g,E,b,M=l.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],g=0;g<7;++g)b=_([2e3,1]).day(g),this._minWeekdaysParse[g]=this.weekdaysMin(b,"").toLocaleLowerCase(),this._shortWeekdaysParse[g]=this.weekdaysShort(b,"").toLocaleLowerCase(),this._weekdaysParse[g]=this.weekdays(b,"").toLocaleLowerCase();return f?d==="dddd"?(E=At.call(this._weekdaysParse,M),E!==-1?E:null):d==="ddd"?(E=At.call(this._shortWeekdaysParse,M),E!==-1?E:null):(E=At.call(this._minWeekdaysParse,M),E!==-1?E:null):d==="dddd"?(E=At.call(this._weekdaysParse,M),E!==-1||(E=At.call(this._shortWeekdaysParse,M),E!==-1)?E:(E=At.call(this._minWeekdaysParse,M),E!==-1?E:null)):d==="ddd"?(E=At.call(this._shortWeekdaysParse,M),E!==-1||(E=At.call(this._weekdaysParse,M),E!==-1)?E:(E=At.call(this._minWeekdaysParse,M),E!==-1?E:null)):(E=At.call(this._minWeekdaysParse,M),E!==-1||(E=At.call(this._weekdaysParse,M),E!==-1)?E:(E=At.call(this._shortWeekdaysParse,M),E!==-1?E:null))}function q4(l,d,f){var g,E,b;if(this._weekdaysParseExact)return G4.call(this,l,d,f);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),g=0;g<7;g++){if(E=_([2e3,1]).day(g),f&&!this._fullWeekdaysParse[g]&&(this._fullWeekdaysParse[g]=new RegExp("^"+this.weekdays(E,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[g]=new RegExp("^"+this.weekdaysShort(E,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[g]=new RegExp("^"+this.weekdaysMin(E,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[g]||(b="^"+this.weekdays(E,"")+"|^"+this.weekdaysShort(E,"")+"|^"+this.weekdaysMin(E,""),this._weekdaysParse[g]=new RegExp(b.replace(".",""),"i")),f&&d==="dddd"&&this._fullWeekdaysParse[g].test(l))return g;if(f&&d==="ddd"&&this._shortWeekdaysParse[g].test(l))return g;if(f&&d==="dd"&&this._minWeekdaysParse[g].test(l))return g;if(!f&&this._weekdaysParse[g].test(l))return g}}function K4(l){if(!this.isValid())return l!=null?this:NaN;var d=this._isUTC?this._d.getUTCDay():this._d.getDay();return l!=null?(l=$4(l,this.localeData()),this.add(l-d,"d")):d}function Q4(l){if(!this.isValid())return l!=null?this:NaN;var d=(this.day()+7-this.localeData()._week.dow)%7;return l==null?d:this.add(l-d,"d")}function X4(l){if(!this.isValid())return l!=null?this:NaN;if(l!=null){var d=F4(l,this.localeData());return this.day(this.day()%7?d:d-7)}else return this.day()||7}function J4(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Ug.call(this),l?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=z4),this._weekdaysStrictRegex&&l?this._weekdaysStrictRegex:this._weekdaysRegex)}function Z4(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Ug.call(this),l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=V4),this._weekdaysShortStrictRegex&&l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function eP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Ug.call(this),l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=j4),this._weekdaysMinStrictRegex&&l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ug(){function l(bn,ki){return ki.length-bn.length}var d=[],f=[],g=[],E=[],b,M,de,Ae,Ze;for(b=0;b<7;b++)M=_([2e3,1]).day(b),de=Gn(this.weekdaysMin(M,"")),Ae=Gn(this.weekdaysShort(M,"")),Ze=Gn(this.weekdays(M,"")),d.push(de),f.push(Ae),g.push(Ze),E.push(de),E.push(Ae),E.push(Ze);d.sort(l),f.sort(l),g.sort(l),E.sort(l),this._weekdaysRegex=new RegExp("^("+E.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+d.join("|")+")","i")}function Bg(){return this.hours()%12||12}function tP(){return this.hours()||24}z("H",["HH",2],0,"hour"),z("h",["hh",2],0,Bg),z("k",["kk",2],0,tP),z("hmm",0,0,function(){return""+Bg.apply(this)+P(this.minutes(),2)}),z("hmmss",0,0,function(){return""+Bg.apply(this)+P(this.minutes(),2)+P(this.seconds(),2)}),z("Hmm",0,0,function(){return""+this.hours()+P(this.minutes(),2)}),z("Hmmss",0,0,function(){return""+this.hours()+P(this.minutes(),2)+P(this.seconds(),2)});function yx(l,d){z(l,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),d)})}yx("a",!0),yx("A",!1),bt("hour","h"),Ne("hour",13);function wx(l,d){return d._meridiemParse}ie("a",wx),ie("A",wx),ie("H",it),ie("h",it),ie("k",it),ie("HH",it,Hn),ie("hh",it,Hn),ie("kk",it,Hn),ie("hmm",lx),ie("hmmss",ux),ie("Hmm",lx),ie("Hmmss",ux),Je(["H","HH"],zt),Je(["k","kk"],function(l,d,f){var g=Oe(l);d[zt]=g===24?0:g}),Je(["a","A"],function(l,d,f){f._isPm=f._locale.isPM(l),f._meridiem=l}),Je(["h","hh"],function(l,d,f){d[zt]=Oe(l),k(f).bigHour=!0}),Je("hmm",function(l,d,f){var g=l.length-2;d[zt]=Oe(l.substr(0,g)),d[Tr]=Oe(l.substr(g)),k(f).bigHour=!0}),Je("hmmss",function(l,d,f){var g=l.length-4,E=l.length-2;d[zt]=Oe(l.substr(0,g)),d[Tr]=Oe(l.substr(g,2)),d[wi]=Oe(l.substr(E)),k(f).bigHour=!0}),Je("Hmm",function(l,d,f){var g=l.length-2;d[zt]=Oe(l.substr(0,g)),d[Tr]=Oe(l.substr(g))}),Je("Hmmss",function(l,d,f){var g=l.length-4,E=l.length-2;d[zt]=Oe(l.substr(0,g)),d[Tr]=Oe(l.substr(g,2)),d[wi]=Oe(l.substr(E))});function nP(l){return(l+"").toLowerCase().charAt(0)==="p"}var rP=/[ap]\.?m?\.?/i,iP=ma("Hours",!0);function sP(l,d,f){return l>11?f?"pm":"PM":f?"am":"AM"}var _x={calendar:$,longDateFormat:me,invalidDate:_e,ordinal:De,dayOfMonthOrdinalParse:Ce,relativeTime:Le,months:w4,monthsShort:cx,week:O4,weekdays:U4,weekdaysMin:B4,weekdaysShort:vx,meridiemParse:rP},ht={},au={},lu;function oP(l,d){var f,g=Math.min(l.length,d.length);for(f=0;f<g;f+=1)if(l[f]!==d[f])return f;return g}function Sx(l){return l&&l.toLowerCase().replace("_","-")}function aP(l){for(var d=0,f,g,E,b;d<l.length;){for(b=Sx(l[d]).split("-"),f=b.length,g=Sx(l[d+1]),g=g?g.split("-"):null;f>0;){if(E=Qd(b.slice(0,f).join("-")),E)return E;if(g&&g.length>=f&&oP(b,g)>=f-1)break;f--}d++}return lu}function lP(l){return l.match("^[^/\\\\]*$")!=null}function Qd(l){var d=null,f;if(ht[l]===void 0&&!0&&e&&e.exports&&lP(l))try{d=lu._abbr,f=B2,f("./locale/"+l),cs(d)}catch{ht[l]=null}return ht[l]}function cs(l,d){var f;return l&&(c(d)?f=Si(l):f=zg(l,d),f?lu=f:typeof console!="undefined"&&console.warn&&console.warn("Locale "+l+" not found. Did you forget to load it?")),lu._abbr}function zg(l,d){if(d!==null){var f,g=_x;if(d.abbr=l,ht[l]!=null)J("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),g=ht[l]._config;else if(d.parentLocale!=null)if(ht[d.parentLocale]!=null)g=ht[d.parentLocale]._config;else if(f=Qd(d.parentLocale),f!=null)g=f._config;else return au[d.parentLocale]||(au[d.parentLocale]=[]),au[d.parentLocale].push({name:l,config:d}),null;return ht[l]=new Te(oe(g,d)),au[l]&&au[l].forEach(function(E){zg(E.name,E.config)}),cs(l),ht[l]}else return delete ht[l],null}function uP(l,d){if(d!=null){var f,g,E=_x;ht[l]!=null&&ht[l].parentLocale!=null?ht[l].set(oe(ht[l]._config,d)):(g=Qd(l),g!=null&&(E=g._config),d=oe(E,d),g==null&&(d.abbr=l),f=new Te(d),f.parentLocale=ht[l],ht[l]=f),cs(l)}else ht[l]!=null&&(ht[l].parentLocale!=null?(ht[l]=ht[l].parentLocale,l===cs()&&cs(l)):ht[l]!=null&&delete ht[l]);return ht[l]}function Si(l){var d;if(l&&l._locale&&l._locale._abbr&&(l=l._locale._abbr),!l)return lu;if(!s(l)){if(d=Qd(l),d)return d;l=[l]}return aP(l)}function cP(){return ge(ht)}function Vg(l){var d,f=l._a;return f&&k(l).overflow===-2&&(d=f[yi]<0||f[yi]>11?yi:f[Wr]<1||f[Wr]>qd(f[un],f[yi])?Wr:f[zt]<0||f[zt]>24||f[zt]===24&&(f[Tr]!==0||f[wi]!==0||f[yo]!==0)?zt:f[Tr]<0||f[Tr]>59?Tr:f[wi]<0||f[wi]>59?wi:f[yo]<0||f[yo]>999?yo:-1,k(l)._overflowDayOfYear&&(d<un||d>Wr)&&(d=Wr),k(l)._overflowWeeks&&d===-1&&(d=g4),k(l)._overflowWeekday&&d===-1&&(d=v4),k(l).overflow=d),l}var dP=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,hP=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,fP=/Z|[+-]\d\d(?::?\d\d)?/,Xd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],jg=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pP=/^\/?Date\((-?\d+)/i,mP=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,gP={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function xx(l){var d,f,g=l._i,E=dP.exec(g)||hP.exec(g),b,M,de,Ae,Ze=Xd.length,bn=jg.length;if(E){for(k(l).iso=!0,d=0,f=Ze;d<f;d++)if(Xd[d][1].exec(E[1])){M=Xd[d][0],b=Xd[d][2]!==!1;break}if(M==null){l._isValid=!1;return}if(E[3]){for(d=0,f=bn;d<f;d++)if(jg[d][1].exec(E[3])){de=(E[2]||" ")+jg[d][0];break}if(de==null){l._isValid=!1;return}}if(!b&&de!=null){l._isValid=!1;return}if(E[4])if(fP.exec(E[4]))Ae="Z";else{l._isValid=!1;return}l._f=M+(de||"")+(Ae||""),Wg(l)}else l._isValid=!1}function vP(l,d,f,g,E,b){var M=[yP(l),cx.indexOf(d),parseInt(f,10),parseInt(g,10),parseInt(E,10)];return b&&M.push(parseInt(b,10)),M}function yP(l){var d=parseInt(l,10);return d<=49?2e3+d:d<=999?1900+d:d}function wP(l){return l.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function _P(l,d,f){if(l){var g=vx.indexOf(l),E=new Date(d[0],d[1],d[2]).getDay();if(g!==E)return k(f).weekdayMismatch=!0,f._isValid=!1,!1}return!0}function SP(l,d,f){if(l)return gP[l];if(d)return 0;var g=parseInt(f,10),E=g%100,b=(g-E)/100;return b*60+E}function Ex(l){var d=mP.exec(wP(l._i)),f;if(d){if(f=vP(d[4],d[3],d[2],d[5],d[6],d[7]),!_P(d[1],f,l))return;l._a=f,l._tzm=SP(d[8],d[9],d[10]),l._d=su.apply(null,l._a),l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),k(l).rfc2822=!0}else l._isValid=!1}function xP(l){var d=pP.exec(l._i);if(d!==null){l._d=new Date(+d[1]);return}if(xx(l),l._isValid===!1)delete l._isValid;else return;if(Ex(l),l._isValid===!1)delete l._isValid;else return;l._strict?l._isValid=!1:r.createFromInputFallback(l)}r.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(l){l._d=new Date(l._i+(l._useUTC?" UTC":""))});function va(l,d,f){return l!=null?l:d!=null?d:f}function EP(l){var d=new Date(r.now());return l._useUTC?[d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()]:[d.getFullYear(),d.getMonth(),d.getDate()]}function Yg(l){var d,f,g=[],E,b,M;if(!l._d){for(E=EP(l),l._w&&l._a[Wr]==null&&l._a[yi]==null&&CP(l),l._dayOfYear!=null&&(M=va(l._a[un],E[un]),(l._dayOfYear>iu(M)||l._dayOfYear===0)&&(k(l)._overflowDayOfYear=!0),f=su(M,0,l._dayOfYear),l._a[yi]=f.getUTCMonth(),l._a[Wr]=f.getUTCDate()),d=0;d<3&&l._a[d]==null;++d)l._a[d]=g[d]=E[d];for(;d<7;d++)l._a[d]=g[d]=l._a[d]==null?d===2?1:0:l._a[d];l._a[zt]===24&&l._a[Tr]===0&&l._a[wi]===0&&l._a[yo]===0&&(l._nextDay=!0,l._a[zt]=0),l._d=(l._useUTC?su:A4).apply(null,g),b=l._useUTC?l._d.getUTCDay():l._d.getDay(),l._tzm!=null&&l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),l._nextDay&&(l._a[zt]=24),l._w&&typeof l._w.d!="undefined"&&l._w.d!==b&&(k(l).weekdayMismatch=!0)}}function CP(l){var d,f,g,E,b,M,de,Ae,Ze;d=l._w,d.GG!=null||d.W!=null||d.E!=null?(b=1,M=4,f=va(d.GG,l._a[un],ou(st(),1,4).year),g=va(d.W,1),E=va(d.E,1),(E<1||E>7)&&(Ae=!0)):(b=l._locale._week.dow,M=l._locale._week.doy,Ze=ou(st(),b,M),f=va(d.gg,l._a[un],Ze.year),g=va(d.w,Ze.week),d.d!=null?(E=d.d,(E<0||E>6)&&(Ae=!0)):d.e!=null?(E=d.e+b,(d.e<0||d.e>6)&&(Ae=!0)):E=b),g<1||g>_i(f,b,M)?k(l)._overflowWeeks=!0:Ae!=null?k(l)._overflowWeekday=!0:(de=gx(f,g,E,b,M),l._a[un]=de.year,l._dayOfYear=de.dayOfYear)}r.ISO_8601=function(){},r.RFC_2822=function(){};function Wg(l){if(l._f===r.ISO_8601){xx(l);return}if(l._f===r.RFC_2822){Ex(l);return}l._a=[],k(l).empty=!0;var d=""+l._i,f,g,E,b,M,de=d.length,Ae=0,Ze,bn;for(E=we(l._f,l._locale).match(ee)||[],bn=E.length,f=0;f<bn;f++)b=E[f],g=(d.match(f4(b,l))||[])[0],g&&(M=d.substr(0,d.indexOf(g)),M.length>0&&k(l).unusedInput.push(M),d=d.slice(d.indexOf(g)+g.length),Ae+=g.length),Y[b]?(g?k(l).empty=!1:k(l).unusedTokens.push(b),m4(b,g,l)):l._strict&&!g&&k(l).unusedTokens.push(b);k(l).charsLeftOver=de-Ae,d.length>0&&k(l).unusedInput.push(d),l._a[zt]<=12&&k(l).bigHour===!0&&l._a[zt]>0&&(k(l).bigHour=void 0),k(l).parsedDateParts=l._a.slice(0),k(l).meridiem=l._meridiem,l._a[zt]=kP(l._locale,l._a[zt],l._meridiem),Ze=k(l).era,Ze!==null&&(l._a[un]=l._locale.erasConvertYear(Ze,l._a[un])),Yg(l),Vg(l)}function kP(l,d,f){var g;return f==null?d:l.meridiemHour!=null?l.meridiemHour(d,f):(l.isPM!=null&&(g=l.isPM(f),g&&d<12&&(d+=12),!g&&d===12&&(d=0)),d)}function TP(l){var d,f,g,E,b,M,de=!1,Ae=l._f.length;if(Ae===0){k(l).invalidFormat=!0,l._d=new Date(NaN);return}for(E=0;E<Ae;E++)b=0,M=!1,d=R({},l),l._useUTC!=null&&(d._useUTC=l._useUTC),d._f=l._f[E],Wg(d),v(d)&&(M=!0),b+=k(d).charsLeftOver,b+=k(d).unusedTokens.length*10,k(d).score=b,de?b<g&&(g=b,f=d):(g==null||b<g||M)&&(g=b,f=d,M&&(de=!0));w(l,f||d)}function DP(l){if(!l._d){var d=Dn(l._i),f=d.day===void 0?d.date:d.day;l._a=m([d.year,d.month,f,d.hour,d.minute,d.second,d.millisecond],function(g){return g&&parseInt(g,10)}),Yg(l)}}function bP(l){var d=new A(Vg(Cx(l)));return d._nextDay&&(d.add(1,"d"),d._nextDay=void 0),d}function Cx(l){var d=l._i,f=l._f;return l._locale=l._locale||Si(l._l),d===null||f===void 0&&d===""?C({nullInput:!0}):(typeof d=="string"&&(l._i=d=l._locale.preparse(d)),O(d)?new A(Vg(d)):(p(d)?l._d=d:s(f)?TP(l):f?Wg(l):IP(l),v(l)||(l._d=null),l))}function IP(l){var d=l._i;c(d)?l._d=new Date(r.now()):p(d)?l._d=new Date(d.valueOf()):typeof d=="string"?xP(l):s(d)?(l._a=m(d.slice(0),function(f){return parseInt(f,10)}),Yg(l)):o(d)?DP(l):h(d)?l._d=new Date(d):r.createFromInputFallback(l)}function kx(l,d,f,g,E){var b={};return(d===!0||d===!1)&&(g=d,d=void 0),(f===!0||f===!1)&&(g=f,f=void 0),(o(l)&&u(l)||s(l)&&l.length===0)&&(l=void 0),b._isAMomentObject=!0,b._useUTC=b._isUTC=E,b._l=f,b._i=l,b._f=d,b._strict=g,bP(b)}function st(l,d,f,g){return kx(l,d,f,g,!1)}var AP=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=st.apply(null,arguments);return this.isValid()&&l.isValid()?l<this?this:l:C()}),NP=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=st.apply(null,arguments);return this.isValid()&&l.isValid()?l>this?this:l:C()});function Tx(l,d){var f,g;if(d.length===1&&s(d[0])&&(d=d[0]),!d.length)return st();for(f=d[0],g=1;g<d.length;++g)(!d[g].isValid()||d[g][l](f))&&(f=d[g]);return f}function OP(){var l=[].slice.call(arguments,0);return Tx("isBefore",l)}function RP(){var l=[].slice.call(arguments,0);return Tx("isAfter",l)}var PP=function(){return Date.now?Date.now():+new Date},uu=["year","quarter","month","week","day","hour","minute","second","millisecond"];function MP(l){var d,f=!1,g,E=uu.length;for(d in l)if(a(l,d)&&!(At.call(uu,d)!==-1&&(l[d]==null||!isNaN(l[d]))))return!1;for(g=0;g<E;++g)if(l[uu[g]]){if(f)return!1;parseFloat(l[uu[g]])!==Oe(l[uu[g]])&&(f=!0)}return!0}function LP(){return this._isValid}function $P(){return Dr(NaN)}function Jd(l){var d=Dn(l),f=d.year||0,g=d.quarter||0,E=d.month||0,b=d.week||d.isoWeek||0,M=d.day||0,de=d.hour||0,Ae=d.minute||0,Ze=d.second||0,bn=d.millisecond||0;this._isValid=MP(d),this._milliseconds=+bn+Ze*1e3+Ae*6e4+de*1e3*60*60,this._days=+M+b*7,this._months=+E+g*3+f*12,this._data={},this._locale=Si(),this._bubble()}function Zd(l){return l instanceof Jd}function Hg(l){return l<0?Math.round(-1*l)*-1:Math.round(l)}function FP(l,d,f){var g=Math.min(l.length,d.length),E=Math.abs(l.length-d.length),b=0,M;for(M=0;M<g;M++)(f&&l[M]!==d[M]||!f&&Oe(l[M])!==Oe(d[M]))&&b++;return b+E}function Dx(l,d){z(l,0,0,function(){var f=this.utcOffset(),g="+";return f<0&&(f=-f,g="-"),g+P(~~(f/60),2)+d+P(~~f%60,2)})}Dx("Z",":"),Dx("ZZ",""),ie("Z",Hd),ie("ZZ",Hd),Je(["Z","ZZ"],function(l,d,f){f._useUTC=!0,f._tzm=Gg(Hd,l)});var UP=/([\+\-]|\d\d)/gi;function Gg(l,d){var f=(d||"").match(l),g,E,b;return f===null?null:(g=f[f.length-1]||[],E=(g+"").match(UP)||["-",0,0],b=+(E[1]*60)+Oe(E[2]),b===0?0:E[0]==="+"?b:-b)}function qg(l,d){var f,g;return d._isUTC?(f=d.clone(),g=(O(l)||p(l)?l.valueOf():st(l).valueOf())-f.valueOf(),f._d.setTime(f._d.valueOf()+g),r.updateOffset(f,!1),f):st(l).local()}function Kg(l){return-Math.round(l._d.getTimezoneOffset())}r.updateOffset=function(){};function BP(l,d,f){var g=this._offset||0,E;if(!this.isValid())return l!=null?this:NaN;if(l!=null){if(typeof l=="string"){if(l=Gg(Hd,l),l===null)return this}else Math.abs(l)<16&&!f&&(l=l*60);return!this._isUTC&&d&&(E=Kg(this)),this._offset=l,this._isUTC=!0,E!=null&&this.add(E,"m"),g!==l&&(!d||this._changeInProgress?Nx(this,Dr(l-g,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?g:Kg(this)}function zP(l,d){return l!=null?(typeof l!="string"&&(l=-l),this.utcOffset(l,d),this):-this.utcOffset()}function VP(l){return this.utcOffset(0,l)}function jP(l){return this._isUTC&&(this.utcOffset(0,l),this._isUTC=!1,l&&this.subtract(Kg(this),"m")),this}function YP(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var l=Gg(d4,this._i);l!=null?this.utcOffset(l):this.utcOffset(0,!0)}return this}function WP(l){return this.isValid()?(l=l?st(l).utcOffset():0,(this.utcOffset()-l)%60===0):!1}function HP(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function GP(){if(!c(this._isDSTShifted))return this._isDSTShifted;var l={},d;return R(l,this),l=Cx(l),l._a?(d=l._isUTC?_(l._a):st(l._a),this._isDSTShifted=this.isValid()&&FP(l._a,d.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function qP(){return this.isValid()?!this._isUTC:!1}function KP(){return this.isValid()?this._isUTC:!1}function bx(){return this.isValid()?this._isUTC&&this._offset===0:!1}var QP=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,XP=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Dr(l,d){var f=l,g=null,E,b,M;return Zd(l)?f={ms:l._milliseconds,d:l._days,M:l._months}:h(l)||!isNaN(+l)?(f={},d?f[d]=+l:f.milliseconds=+l):(g=QP.exec(l))?(E=g[1]==="-"?-1:1,f={y:0,d:Oe(g[Wr])*E,h:Oe(g[zt])*E,m:Oe(g[Tr])*E,s:Oe(g[wi])*E,ms:Oe(Hg(g[yo]*1e3))*E}):(g=XP.exec(l))?(E=g[1]==="-"?-1:1,f={y:wo(g[2],E),M:wo(g[3],E),w:wo(g[4],E),d:wo(g[5],E),h:wo(g[6],E),m:wo(g[7],E),s:wo(g[8],E)}):f==null?f={}:typeof f=="object"&&("from"in f||"to"in f)&&(M=JP(st(f.from),st(f.to)),f={},f.ms=M.milliseconds,f.M=M.months),b=new Jd(f),Zd(l)&&a(l,"_locale")&&(b._locale=l._locale),Zd(l)&&a(l,"_isValid")&&(b._isValid=l._isValid),b}Dr.fn=Jd.prototype,Dr.invalid=$P;function wo(l,d){var f=l&&parseFloat(l.replace(",","."));return(isNaN(f)?0:f)*d}function Ix(l,d){var f={};return f.months=d.month()-l.month()+(d.year()-l.year())*12,l.clone().add(f.months,"M").isAfter(d)&&--f.months,f.milliseconds=+d-+l.clone().add(f.months,"M"),f}function JP(l,d){var f;return l.isValid()&&d.isValid()?(d=qg(d,l),l.isBefore(d)?f=Ix(l,d):(f=Ix(d,l),f.milliseconds=-f.milliseconds,f.months=-f.months),f):{milliseconds:0,months:0}}function Ax(l,d){return function(f,g){var E,b;return g!==null&&!isNaN(+g)&&(J(d,"moment()."+d+"(period, number) is deprecated. Please use moment()."+d+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),b=f,f=g,g=b),E=Dr(f,g),Nx(this,E,l),this}}function Nx(l,d,f,g){var E=d._milliseconds,b=Hg(d._days),M=Hg(d._months);!l.isValid()||(g=g==null?!0:g,M&&hx(l,zd(l,"Month")+M*f),b&&sx(l,"Date",zd(l,"Date")+b*f),E&&l._d.setTime(l._d.valueOf()+E*f),g&&r.updateOffset(l,b||M))}var ZP=Ax(1,"add"),eM=Ax(-1,"subtract");function Ox(l){return typeof l=="string"||l instanceof String}function tM(l){return O(l)||p(l)||Ox(l)||h(l)||rM(l)||nM(l)||l===null||l===void 0}function nM(l){var d=o(l)&&!u(l),f=!1,g=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],E,b,M=g.length;for(E=0;E<M;E+=1)b=g[E],f=f||a(l,b);return d&&f}function rM(l){var d=s(l),f=!1;return d&&(f=l.filter(function(g){return!h(g)&&Ox(l)}).length===0),d&&f}function iM(l){var d=o(l)&&!u(l),f=!1,g=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],E,b;for(E=0;E<g.length;E+=1)b=g[E],f=f||a(l,b);return d&&f}function sM(l,d){var f=l.diff(d,"days",!0);return f<-6?"sameElse":f<-1?"lastWeek":f<0?"lastDay":f<1?"sameDay":f<2?"nextDay":f<7?"nextWeek":"sameElse"}function oM(l,d){arguments.length===1&&(arguments[0]?tM(arguments[0])?(l=arguments[0],d=void 0):iM(arguments[0])&&(d=arguments[0],l=void 0):(l=void 0,d=void 0));var f=l||st(),g=qg(f,this).startOf("day"),E=r.calendarFormat(this,g)||"sameElse",b=d&&(X(d[E])?d[E].call(this,f):d[E]);return this.format(b||this.localeData().calendar(E,this,st(f)))}function aM(){return new A(this)}function lM(l,d){var f=O(l)?l:st(l);return this.isValid()&&f.isValid()?(d=Gt(d)||"millisecond",d==="millisecond"?this.valueOf()>f.valueOf():f.valueOf()<this.clone().startOf(d).valueOf()):!1}function uM(l,d){var f=O(l)?l:st(l);return this.isValid()&&f.isValid()?(d=Gt(d)||"millisecond",d==="millisecond"?this.valueOf()<f.valueOf():this.clone().endOf(d).valueOf()<f.valueOf()):!1}function cM(l,d,f,g){var E=O(l)?l:st(l),b=O(d)?d:st(d);return this.isValid()&&E.isValid()&&b.isValid()?(g=g||"()",(g[0]==="("?this.isAfter(E,f):!this.isBefore(E,f))&&(g[1]===")"?this.isBefore(b,f):!this.isAfter(b,f))):!1}function dM(l,d){var f=O(l)?l:st(l),g;return this.isValid()&&f.isValid()?(d=Gt(d)||"millisecond",d==="millisecond"?this.valueOf()===f.valueOf():(g=f.valueOf(),this.clone().startOf(d).valueOf()<=g&&g<=this.clone().endOf(d).valueOf())):!1}function hM(l,d){return this.isSame(l,d)||this.isAfter(l,d)}function fM(l,d){return this.isSame(l,d)||this.isBefore(l,d)}function pM(l,d,f){var g,E,b;if(!this.isValid())return NaN;if(g=qg(l,this),!g.isValid())return NaN;switch(E=(g.utcOffset()-this.utcOffset())*6e4,d=Gt(d),d){case"year":b=eh(this,g)/12;break;case"month":b=eh(this,g);break;case"quarter":b=eh(this,g)/3;break;case"second":b=(this-g)/1e3;break;case"minute":b=(this-g)/6e4;break;case"hour":b=(this-g)/36e5;break;case"day":b=(this-g-E)/864e5;break;case"week":b=(this-g-E)/6048e5;break;default:b=this-g}return f?b:It(b)}function eh(l,d){if(l.date()<d.date())return-eh(d,l);var f=(d.year()-l.year())*12+(d.month()-l.month()),g=l.clone().add(f,"months"),E,b;return d-g<0?(E=l.clone().add(f-1,"months"),b=(d-g)/(g-E)):(E=l.clone().add(f+1,"months"),b=(d-g)/(E-g)),-(f+b)||0}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function mM(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function gM(l){if(!this.isValid())return null;var d=l!==!0,f=d?this.clone().utc():this;return f.year()<0||f.year()>9999?W(f,d?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):X(Date.prototype.toISOString)?d?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",W(f,"Z")):W(f,d?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function vM(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var l="moment",d="",f,g,E,b;return this.isLocal()||(l=this.utcOffset()===0?"moment.utc":"moment.parseZone",d="Z"),f="["+l+'("]',g=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",E="-MM-DD[T]HH:mm:ss.SSS",b=d+'[")]',this.format(f+g+E+b)}function yM(l){l||(l=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var d=W(this,l);return this.localeData().postformat(d)}function wM(l,d){return this.isValid()&&(O(l)&&l.isValid()||st(l).isValid())?Dr({to:this,from:l}).locale(this.locale()).humanize(!d):this.localeData().invalidDate()}function _M(l){return this.from(st(),l)}function SM(l,d){return this.isValid()&&(O(l)&&l.isValid()||st(l).isValid())?Dr({from:this,to:l}).locale(this.locale()).humanize(!d):this.localeData().invalidDate()}function xM(l){return this.to(st(),l)}function Rx(l){var d;return l===void 0?this._locale._abbr:(d=Si(l),d!=null&&(this._locale=d),this)}var Px=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(l){return l===void 0?this.localeData():this.locale(l)});function Mx(){return this._locale}var th=1e3,ya=60*th,nh=60*ya,Lx=(365*400+97)*24*nh;function wa(l,d){return(l%d+d)%d}function $x(l,d,f){return l<100&&l>=0?new Date(l+400,d,f)-Lx:new Date(l,d,f).valueOf()}function Fx(l,d,f){return l<100&&l>=0?Date.UTC(l+400,d,f)-Lx:Date.UTC(l,d,f)}function EM(l){var d,f;if(l=Gt(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?Fx:$x,l){case"year":d=f(this.year(),0,1);break;case"quarter":d=f(this.year(),this.month()-this.month()%3,1);break;case"month":d=f(this.year(),this.month(),1);break;case"week":d=f(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":d=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":d=f(this.year(),this.month(),this.date());break;case"hour":d=this._d.valueOf(),d-=wa(d+(this._isUTC?0:this.utcOffset()*ya),nh);break;case"minute":d=this._d.valueOf(),d-=wa(d,ya);break;case"second":d=this._d.valueOf(),d-=wa(d,th);break}return this._d.setTime(d),r.updateOffset(this,!0),this}function CM(l){var d,f;if(l=Gt(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?Fx:$x,l){case"year":d=f(this.year()+1,0,1)-1;break;case"quarter":d=f(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":d=f(this.year(),this.month()+1,1)-1;break;case"week":d=f(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":d=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":d=f(this.year(),this.month(),this.date()+1)-1;break;case"hour":d=this._d.valueOf(),d+=nh-wa(d+(this._isUTC?0:this.utcOffset()*ya),nh)-1;break;case"minute":d=this._d.valueOf(),d+=ya-wa(d,ya)-1;break;case"second":d=this._d.valueOf(),d+=th-wa(d,th)-1;break}return this._d.setTime(d),r.updateOffset(this,!0),this}function kM(){return this._d.valueOf()-(this._offset||0)*6e4}function TM(){return Math.floor(this.valueOf()/1e3)}function DM(){return new Date(this.valueOf())}function bM(){var l=this;return[l.year(),l.month(),l.date(),l.hour(),l.minute(),l.second(),l.millisecond()]}function IM(){var l=this;return{years:l.year(),months:l.month(),date:l.date(),hours:l.hours(),minutes:l.minutes(),seconds:l.seconds(),milliseconds:l.milliseconds()}}function AM(){return this.isValid()?this.toISOString():null}function NM(){return v(this)}function OM(){return w({},k(this))}function RM(){return k(this).overflow}function PM(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}z("N",0,0,"eraAbbr"),z("NN",0,0,"eraAbbr"),z("NNN",0,0,"eraAbbr"),z("NNNN",0,0,"eraName"),z("NNNNN",0,0,"eraNarrow"),z("y",["y",1],"yo","eraYear"),z("y",["yy",2],0,"eraYear"),z("y",["yyy",3],0,"eraYear"),z("y",["yyyy",4],0,"eraYear"),ie("N",Qg),ie("NN",Qg),ie("NNN",Qg),ie("NNNN",WM),ie("NNNNN",HM),Je(["N","NN","NNN","NNNN","NNNNN"],function(l,d,f,g){var E=f._locale.erasParse(l,g,f._strict);E?k(f).era=E:k(f).invalidEra=l}),ie("y",ga),ie("yy",ga),ie("yyy",ga),ie("yyyy",ga),ie("yo",GM),Je(["y","yy","yyy","yyyy"],un),Je(["yo"],function(l,d,f,g){var E;f._locale._eraYearOrdinalRegex&&(E=l.match(f._locale._eraYearOrdinalRegex)),f._locale.eraYearOrdinalParse?d[un]=f._locale.eraYearOrdinalParse(l,E):d[un]=parseInt(l,10)});function MM(l,d){var f,g,E,b=this._eras||Si("en")._eras;for(f=0,g=b.length;f<g;++f){switch(typeof b[f].since){case"string":E=r(b[f].since).startOf("day"),b[f].since=E.valueOf();break}switch(typeof b[f].until){case"undefined":b[f].until=1/0;break;case"string":E=r(b[f].until).startOf("day").valueOf(),b[f].until=E.valueOf();break}}return b}function LM(l,d,f){var g,E,b=this.eras(),M,de,Ae;for(l=l.toUpperCase(),g=0,E=b.length;g<E;++g)if(M=b[g].name.toUpperCase(),de=b[g].abbr.toUpperCase(),Ae=b[g].narrow.toUpperCase(),f)switch(d){case"N":case"NN":case"NNN":if(de===l)return b[g];break;case"NNNN":if(M===l)return b[g];break;case"NNNNN":if(Ae===l)return b[g];break}else if([M,de,Ae].indexOf(l)>=0)return b[g]}function $M(l,d){var f=l.since<=l.until?1:-1;return d===void 0?r(l.since).year():r(l.since).year()+(d-l.offset)*f}function FM(){var l,d,f,g=this.localeData().eras();for(l=0,d=g.length;l<d;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].name;return""}function UM(){var l,d,f,g=this.localeData().eras();for(l=0,d=g.length;l<d;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].narrow;return""}function BM(){var l,d,f,g=this.localeData().eras();for(l=0,d=g.length;l<d;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].abbr;return""}function zM(){var l,d,f,g,E=this.localeData().eras();for(l=0,d=E.length;l<d;++l)if(f=E[l].since<=E[l].until?1:-1,g=this.clone().startOf("day").valueOf(),E[l].since<=g&&g<=E[l].until||E[l].until<=g&&g<=E[l].since)return(this.year()-r(E[l].since).year())*f+E[l].offset;return this.year()}function VM(l){return a(this,"_erasNameRegex")||Xg.call(this),l?this._erasNameRegex:this._erasRegex}function jM(l){return a(this,"_erasAbbrRegex")||Xg.call(this),l?this._erasAbbrRegex:this._erasRegex}function YM(l){return a(this,"_erasNarrowRegex")||Xg.call(this),l?this._erasNarrowRegex:this._erasRegex}function Qg(l,d){return d.erasAbbrRegex(l)}function WM(l,d){return d.erasNameRegex(l)}function HM(l,d){return d.erasNarrowRegex(l)}function GM(l,d){return d._eraYearOrdinalRegex||ga}function Xg(){var l=[],d=[],f=[],g=[],E,b,M=this.eras();for(E=0,b=M.length;E<b;++E)d.push(Gn(M[E].name)),l.push(Gn(M[E].abbr)),f.push(Gn(M[E].narrow)),g.push(Gn(M[E].name)),g.push(Gn(M[E].abbr)),g.push(Gn(M[E].narrow));this._erasRegex=new RegExp("^("+g.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+d.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+l.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+f.join("|")+")","i")}z(0,["gg",2],0,function(){return this.weekYear()%100}),z(0,["GG",2],0,function(){return this.isoWeekYear()%100});function rh(l,d){z(0,[l,l.length],0,d)}rh("gggg","weekYear"),rh("ggggg","weekYear"),rh("GGGG","isoWeekYear"),rh("GGGGG","isoWeekYear"),bt("weekYear","gg"),bt("isoWeekYear","GG"),Ne("weekYear",1),Ne("isoWeekYear",1),ie("G",Wd),ie("g",Wd),ie("GG",it,Hn),ie("gg",it,Hn),ie("GGGG",Lg,Mg),ie("gggg",Lg,Mg),ie("GGGGG",Yd,Vd),ie("ggggg",Yd,Vd),ru(["gggg","ggggg","GGGG","GGGGG"],function(l,d,f,g){d[g.substr(0,2)]=Oe(l)}),ru(["gg","GG"],function(l,d,f,g){d[g]=r.parseTwoDigitYear(l)});function qM(l){return Ux.call(this,l,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function KM(l){return Ux.call(this,l,this.isoWeek(),this.isoWeekday(),1,4)}function QM(){return _i(this.year(),1,4)}function XM(){return _i(this.isoWeekYear(),1,4)}function JM(){var l=this.localeData()._week;return _i(this.year(),l.dow,l.doy)}function ZM(){var l=this.localeData()._week;return _i(this.weekYear(),l.dow,l.doy)}function Ux(l,d,f,g,E){var b;return l==null?ou(this,g,E).year:(b=_i(l,g,E),d>b&&(d=b),eL.call(this,l,d,f,g,E))}function eL(l,d,f,g,E){var b=gx(l,d,f,g,E),M=su(b.year,0,b.dayOfYear);return this.year(M.getUTCFullYear()),this.month(M.getUTCMonth()),this.date(M.getUTCDate()),this}z("Q",0,"Qo","quarter"),bt("quarter","Q"),Ne("quarter",7),ie("Q",ox),Je("Q",function(l,d){d[yi]=(Oe(l)-1)*3});function tL(l){return l==null?Math.ceil((this.month()+1)/3):this.month((l-1)*3+this.month()%3)}z("D",["DD",2],"Do","date"),bt("date","D"),Ne("date",9),ie("D",it),ie("DD",it,Hn),ie("Do",function(l,d){return l?d._dayOfMonthOrdinalParse||d._ordinalParse:d._dayOfMonthOrdinalParseLenient}),Je(["D","DD"],Wr),Je("Do",function(l,d){d[Wr]=Oe(l.match(it)[0])});var Bx=ma("Date",!0);z("DDD",["DDDD",3],"DDDo","dayOfYear"),bt("dayOfYear","DDD"),Ne("dayOfYear",4),ie("DDD",jd),ie("DDDD",ax),Je(["DDD","DDDD"],function(l,d,f){f._dayOfYear=Oe(l)});function nL(l){var d=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return l==null?d:this.add(l-d,"d")}z("m",["mm",2],0,"minute"),bt("minute","m"),Ne("minute",14),ie("m",it),ie("mm",it,Hn),Je(["m","mm"],Tr);var rL=ma("Minutes",!1);z("s",["ss",2],0,"second"),bt("second","s"),Ne("second",15),ie("s",it),ie("ss",it,Hn),Je(["s","ss"],wi);var iL=ma("Seconds",!1);z("S",0,0,function(){return~~(this.millisecond()/100)}),z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),z(0,["SSS",3],0,"millisecond"),z(0,["SSSS",4],0,function(){return this.millisecond()*10}),z(0,["SSSSS",5],0,function(){return this.millisecond()*100}),z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),bt("millisecond","ms"),Ne("millisecond",16),ie("S",jd,ox),ie("SS",jd,Hn),ie("SSS",jd,ax);var ds,zx;for(ds="SSSS";ds.length<=9;ds+="S")ie(ds,ga);function sL(l,d){d[yo]=Oe(("0."+l)*1e3)}for(ds="S";ds.length<=9;ds+="S")Je(ds,sL);zx=ma("Milliseconds",!1),z("z",0,0,"zoneAbbr"),z("zz",0,0,"zoneName");function oL(){return this._isUTC?"UTC":""}function aL(){return this._isUTC?"Coordinated Universal Time":""}var q=A.prototype;q.add=ZP,q.calendar=oM,q.clone=aM,q.diff=pM,q.endOf=CM,q.format=yM,q.from=wM,q.fromNow=_M,q.to=SM,q.toNow=xM,q.get=u4,q.invalidAt=RM,q.isAfter=lM,q.isBefore=uM,q.isBetween=cM,q.isSame=dM,q.isSameOrAfter=hM,q.isSameOrBefore=fM,q.isValid=NM,q.lang=Px,q.locale=Rx,q.localeData=Mx,q.max=NP,q.min=AP,q.parsingFlags=OM,q.set=c4,q.startOf=EM,q.subtract=eM,q.toArray=bM,q.toObject=IM,q.toDate=DM,q.toISOString=gM,q.inspect=vM,typeof Symbol!="undefined"&&Symbol.for!=null&&(q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),q.toJSON=AM,q.toString=mM,q.unix=TM,q.valueOf=kM,q.creationData=PM,q.eraName=FM,q.eraNarrow=UM,q.eraAbbr=BM,q.eraYear=zM,q.year=mx,q.isLeapYear=I4,q.weekYear=qM,q.isoWeekYear=KM,q.quarter=q.quarters=tL,q.month=fx,q.daysInMonth=T4,q.week=q.weeks=M4,q.isoWeek=q.isoWeeks=L4,q.weeksInYear=JM,q.weeksInWeekYear=ZM,q.isoWeeksInYear=QM,q.isoWeeksInISOWeekYear=XM,q.date=Bx,q.day=q.days=K4,q.weekday=Q4,q.isoWeekday=X4,q.dayOfYear=nL,q.hour=q.hours=iP,q.minute=q.minutes=rL,q.second=q.seconds=iL,q.millisecond=q.milliseconds=zx,q.utcOffset=BP,q.utc=VP,q.local=jP,q.parseZone=YP,q.hasAlignedHourOffset=WP,q.isDST=HP,q.isLocal=qP,q.isUtcOffset=KP,q.isUtc=bx,q.isUTC=bx,q.zoneAbbr=oL,q.zoneName=aL,q.dates=F("dates accessor is deprecated. Use date instead.",Bx),q.months=F("months accessor is deprecated. Use month instead",fx),q.years=F("years accessor is deprecated. Use year instead",mx),q.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",zP),q.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",GP);function lL(l){return st(l*1e3)}function uL(){return st.apply(null,arguments).parseZone()}function Vx(l){return l}var Ve=Te.prototype;Ve.calendar=V,Ve.longDateFormat=Be,Ve.invalidDate=ne,Ve.ordinal=dt,Ve.preparse=Vx,Ve.postformat=Vx,Ve.relativeTime=Bt,Ve.pastFuture=vo,Ve.set=ue,Ve.eras=MM,Ve.erasParse=LM,Ve.erasConvertYear=$M,Ve.erasAbbrRegex=jM,Ve.erasNameRegex=VM,Ve.erasNarrowRegex=YM,Ve.months=x4,Ve.monthsShort=E4,Ve.monthsParse=k4,Ve.monthsRegex=b4,Ve.monthsShortRegex=D4,Ve.week=N4,Ve.firstDayOfYear=P4,Ve.firstDayOfWeek=R4,Ve.weekdays=Y4,Ve.weekdaysMin=H4,Ve.weekdaysShort=W4,Ve.weekdaysParse=q4,Ve.weekdaysRegex=J4,Ve.weekdaysShortRegex=Z4,Ve.weekdaysMinRegex=eP,Ve.isPM=nP,Ve.meridiem=sP;function ih(l,d,f,g){var E=Si(),b=_().set(g,d);return E[f](b,l)}function jx(l,d,f){if(h(l)&&(d=l,l=void 0),l=l||"",d!=null)return ih(l,d,f,"month");var g,E=[];for(g=0;g<12;g++)E[g]=ih(l,g,f,"month");return E}function Jg(l,d,f,g){typeof l=="boolean"?(h(d)&&(f=d,d=void 0),d=d||""):(d=l,f=d,l=!1,h(d)&&(f=d,d=void 0),d=d||"");var E=Si(),b=l?E._week.dow:0,M,de=[];if(f!=null)return ih(d,(f+b)%7,g,"day");for(M=0;M<7;M++)de[M]=ih(d,(M+b)%7,g,"day");return de}function cL(l,d){return jx(l,d,"months")}function dL(l,d){return jx(l,d,"monthsShort")}function hL(l,d,f){return Jg(l,d,f,"weekdays")}function fL(l,d,f){return Jg(l,d,f,"weekdaysShort")}function pL(l,d,f){return Jg(l,d,f,"weekdaysMin")}cs("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(l){var d=l%10,f=Oe(l%100/10)===1?"th":d===1?"st":d===2?"nd":d===3?"rd":"th";return l+f}}),r.lang=F("moment.lang is deprecated. Use moment.locale instead.",cs),r.langData=F("moment.langData is deprecated. Use moment.localeData instead.",Si);var xi=Math.abs;function mL(){var l=this._data;return this._milliseconds=xi(this._milliseconds),this._days=xi(this._days),this._months=xi(this._months),l.milliseconds=xi(l.milliseconds),l.seconds=xi(l.seconds),l.minutes=xi(l.minutes),l.hours=xi(l.hours),l.months=xi(l.months),l.years=xi(l.years),this}function Yx(l,d,f,g){var E=Dr(d,f);return l._milliseconds+=g*E._milliseconds,l._days+=g*E._days,l._months+=g*E._months,l._bubble()}function gL(l,d){return Yx(this,l,d,1)}function vL(l,d){return Yx(this,l,d,-1)}function Wx(l){return l<0?Math.floor(l):Math.ceil(l)}function yL(){var l=this._milliseconds,d=this._days,f=this._months,g=this._data,E,b,M,de,Ae;return l>=0&&d>=0&&f>=0||l<=0&&d<=0&&f<=0||(l+=Wx(Zg(f)+d)*864e5,d=0,f=0),g.milliseconds=l%1e3,E=It(l/1e3),g.seconds=E%60,b=It(E/60),g.minutes=b%60,M=It(b/60),g.hours=M%24,d+=It(M/24),Ae=It(Hx(d)),f+=Ae,d-=Wx(Zg(Ae)),de=It(f/12),f%=12,g.days=d,g.months=f,g.years=de,this}function Hx(l){return l*4800/146097}function Zg(l){return l*146097/4800}function wL(l){if(!this.isValid())return NaN;var d,f,g=this._milliseconds;if(l=Gt(l),l==="month"||l==="quarter"||l==="year")switch(d=this._days+g/864e5,f=this._months+Hx(d),l){case"month":return f;case"quarter":return f/3;case"year":return f/12}else switch(d=this._days+Math.round(Zg(this._months)),l){case"week":return d/7+g/6048e5;case"day":return d+g/864e5;case"hour":return d*24+g/36e5;case"minute":return d*1440+g/6e4;case"second":return d*86400+g/1e3;case"millisecond":return Math.floor(d*864e5)+g;default:throw new Error("Unknown unit "+l)}}function _L(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Oe(this._months/12)*31536e6:NaN}function Ei(l){return function(){return this.as(l)}}var SL=Ei("ms"),xL=Ei("s"),EL=Ei("m"),CL=Ei("h"),kL=Ei("d"),TL=Ei("w"),DL=Ei("M"),bL=Ei("Q"),IL=Ei("y");function AL(){return Dr(this)}function NL(l){return l=Gt(l),this.isValid()?this[l+"s"]():NaN}function _o(l){return function(){return this.isValid()?this._data[l]:NaN}}var OL=_o("milliseconds"),RL=_o("seconds"),PL=_o("minutes"),ML=_o("hours"),LL=_o("days"),$L=_o("months"),FL=_o("years");function UL(){return It(this.days()/7)}var Ci=Math.round,_a={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function BL(l,d,f,g,E){return E.relativeTime(d||1,!!f,l,g)}function zL(l,d,f,g){var E=Dr(l).abs(),b=Ci(E.as("s")),M=Ci(E.as("m")),de=Ci(E.as("h")),Ae=Ci(E.as("d")),Ze=Ci(E.as("M")),bn=Ci(E.as("w")),ki=Ci(E.as("y")),hs=b<=f.ss&&["s",b]||b<f.s&&["ss",b]||M<=1&&["m"]||M<f.m&&["mm",M]||de<=1&&["h"]||de<f.h&&["hh",de]||Ae<=1&&["d"]||Ae<f.d&&["dd",Ae];return f.w!=null&&(hs=hs||bn<=1&&["w"]||bn<f.w&&["ww",bn]),hs=hs||Ze<=1&&["M"]||Ze<f.M&&["MM",Ze]||ki<=1&&["y"]||["yy",ki],hs[2]=d,hs[3]=+l>0,hs[4]=g,BL.apply(null,hs)}function VL(l){return l===void 0?Ci:typeof l=="function"?(Ci=l,!0):!1}function jL(l,d){return _a[l]===void 0?!1:d===void 0?_a[l]:(_a[l]=d,l==="s"&&(_a.ss=d-1),!0)}function YL(l,d){if(!this.isValid())return this.localeData().invalidDate();var f=!1,g=_a,E,b;return typeof l=="object"&&(d=l,l=!1),typeof l=="boolean"&&(f=l),typeof d=="object"&&(g=Object.assign({},_a,d),d.s!=null&&d.ss==null&&(g.ss=d.s-1)),E=this.localeData(),b=zL(this,!f,g,E),f&&(b=E.pastFuture(+this,b)),E.postformat(b)}var e0=Math.abs;function Sa(l){return(l>0)-(l<0)||+l}function sh(){if(!this.isValid())return this.localeData().invalidDate();var l=e0(this._milliseconds)/1e3,d=e0(this._days),f=e0(this._months),g,E,b,M,de=this.asSeconds(),Ae,Ze,bn,ki;return de?(g=It(l/60),E=It(g/60),l%=60,g%=60,b=It(f/12),f%=12,M=l?l.toFixed(3).replace(/\.?0+$/,""):"",Ae=de<0?"-":"",Ze=Sa(this._months)!==Sa(de)?"-":"",bn=Sa(this._days)!==Sa(de)?"-":"",ki=Sa(this._milliseconds)!==Sa(de)?"-":"",Ae+"P"+(b?Ze+b+"Y":"")+(f?Ze+f+"M":"")+(d?bn+d+"D":"")+(E||g||l?"T":"")+(E?ki+E+"H":"")+(g?ki+g+"M":"")+(l?ki+M+"S":"")):"P0D"}var $e=Jd.prototype;$e.isValid=LP,$e.abs=mL,$e.add=gL,$e.subtract=vL,$e.as=wL,$e.asMilliseconds=SL,$e.asSeconds=xL,$e.asMinutes=EL,$e.asHours=CL,$e.asDays=kL,$e.asWeeks=TL,$e.asMonths=DL,$e.asQuarters=bL,$e.asYears=IL,$e.valueOf=_L,$e._bubble=yL,$e.clone=AL,$e.get=NL,$e.milliseconds=OL,$e.seconds=RL,$e.minutes=PL,$e.hours=ML,$e.days=LL,$e.weeks=UL,$e.months=$L,$e.years=FL,$e.humanize=YL,$e.toISOString=sh,$e.toString=sh,$e.toJSON=sh,$e.locale=Rx,$e.localeData=Mx,$e.toIsoString=F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",sh),$e.lang=Px,z("X",0,0,"unix"),z("x",0,0,"valueOf"),ie("x",Wd),ie("X",h4),Je("X",function(l,d,f){f._d=new Date(parseFloat(l)*1e3)}),Je("x",function(l,d,f){f._d=new Date(Oe(l))});//! moment.js
return r.version="2.29.4",i(st),r.fn=q,r.min=OP,r.max=RP,r.now=PP,r.utc=_,r.unix=lL,r.months=cL,r.isDate=p,r.locale=cs,r.invalid=C,r.duration=Dr,r.isMoment=O,r.weekdays=hL,r.parseZone=uL,r.localeData=Si,r.isDuration=Zd,r.monthsShort=dL,r.weekdaysMin=pL,r.defineLocale=zg,r.updateLocale=uP,r.locales=cP,r.weekdaysShort=fL,r.normalizeUnits=Gt,r.relativeTimeRounding=VL,r.relativeTimeThreshold=jL,r.calendarFormat=sM,r.prototype=q,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r})})(JS);var gv=JS.exports;(function(e,t){(function(n,r){r(typeof B2=="function"?JS.exports:n.moment)})(U2,function(n){//! moment.js locale configuration
var r=n.defineLocale("ko",{months:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),monthsShort:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),weekdays:"\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),weekdaysShort:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),weekdaysMin:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\uB144 MMMM D\uC77C",LLL:"YYYY\uB144 MMMM D\uC77C A h:mm",LLLL:"YYYY\uB144 MMMM D\uC77C dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\uB144 MMMM D\uC77C",lll:"YYYY\uB144 MMMM D\uC77C A h:mm",llll:"YYYY\uB144 MMMM D\uC77C dddd A h:mm"},calendar:{sameDay:"\uC624\uB298 LT",nextDay:"\uB0B4\uC77C LT",nextWeek:"dddd LT",lastDay:"\uC5B4\uC81C LT",lastWeek:"\uC9C0\uB09C\uC8FC dddd LT",sameElse:"L"},relativeTime:{future:"%s \uD6C4",past:"%s \uC804",s:"\uBA87 \uCD08",ss:"%d\uCD08",m:"1\uBD84",mm:"%d\uBD84",h:"\uD55C \uC2DC\uAC04",hh:"%d\uC2DC\uAC04",d:"\uD558\uB8E8",dd:"%d\uC77C",M:"\uD55C \uB2EC",MM:"%d\uB2EC",y:"\uC77C \uB144",yy:"%d\uB144"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(i,s){switch(s){case"d":case"D":case"DDD":return i+"\uC77C";case"M":return i+"\uC6D4";case"w":case"W":return i+"\uC8FC";default:return i}},meridiemParse:/오전|오후/,isPM:function(i){return i==="\uC624\uD6C4"},meridiem:function(i,s,o){return i<12?"\uC624\uC804":"\uC624\uD6C4"}});return r})})();const eX=ci(bd,"board_photos"),tX=async e=>{const t=ci(eX,e.name);return await Td(t,e),await Dd(t)},KR=ar("boards/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("boardData is undefined");const{brand:n,height:r,weight:i,title:s,desc:o,photo:a,nickname:u}=e,c=await tX(a);return{id:(await ng(fo(lr,"boards"),{brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()})).id,brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Dg=ar("boards/get",async()=>(te.locale("ko"),(await tg(fo(lr,"boards"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=te(),u=te(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),nX=aa({name:"board",initialState:{boards:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(KR.fulfilled,(t,n)=>{const r=n.payload;return{...t,boards:[...t.boards,r],postCount:t.postCount+1}}).addCase(Dg.fulfilled,(t,n)=>({...t,boards:n.payload,postCount:n.payload.length}))}});var rX=nX.reducer;const iX=Fl`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 8px 16px;
  cursor: pointer;
`,sX=Fl`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`,oX=Fl`
  width: 100%;
  display: flex;
  flex-direction: column;
`,aX=nF`
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
  &.today_detail_section {
    background: #FAFAFA;
  }

  @media screen and (max-width: 768px) {
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`,bg=Ge.div`
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
`,lX=Ge.div`
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
        height: 56px;
        line-height: 1.5rem;
        font-size: 16px;
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
        height: 56px;
        font-size: 16px;
        line-height: 1.5rem;
      }

      .googleLogin {
        display: flex;
        align-items: center;
        gap: 20%;
        background: #09f;
        color: #fefefe;
        transition: background 0.25s ease-in-out;

        &:hover,
        &:active {
          background: #625f5f;
        }

        .googleIcon {
          display: flex;
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
`,ZS=Ge.div`
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
`,Ig=Ge.div`
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
`,uX=Ge.div`
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
  ${oX}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;const Eu=Ge.input`
  ${iX}
`,vv=Ge.button`
  ${sX}
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
`;const cX=Ge.div`
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
    animation: ${aX} 1.5s ease infinite;
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
 */function dX(e){e.length=0}function ex(e,t,n){return Array.prototype.slice.call(e,t,n)}function Ag(e){return e.bind.apply(e,[null].concat(ex(arguments,1)))}function I2(e){return requestAnimationFrame(e)}function tx(e,t){return typeof t===e}var QR=Array.isArray;Ag(tx,"function");Ag(tx,"string");Ag(tx,"undefined");function XR(e){return QR(e)?e:[e]}function A2(e,t){XR(e).forEach(t)}var hX=Object.keys;function fX(e,t,n){if(e){var r=hX(e);r=n?r.reverse():r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function pX(e){return ex(arguments,1).forEach(function(t){fX(t,function(n,r){e[r]=t[r]})}),e}var mX=Math.min;function gX(){var e=[];function t(o,a,u,c){i(o,a,function(h,p,m){var w="addEventListener"in h,_=w?h.removeEventListener.bind(h,p,u,c):h.removeListener.bind(h,u);w?h.addEventListener(p,u,c):h.addListener(u),e.push([h,p,m,u,_])})}function n(o,a,u){i(o,a,function(c,h,p){e=e.filter(function(m){return m[0]===c&&m[1]===h&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,h=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:h,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,h,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){A2(o,function(c){c&&A2(a,function(h){h.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),dX(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var N2="move",O2="moved",vX="updated",R2="drag",yX="dragged",P2="scroll",M2="scrolled",wX="destroy";function _X(e){var t=e?e.event.bus:document.createDocumentFragment(),n=gX();function r(s,o){n.bind(t,XR(s).join(" "),function(a){o.apply(o,QR(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,ex(arguments,1))}return e&&e.event.on(wX,n.destroy),pX(n,{bus:t,on:r,off:Ag(n.unbind,t),emit:i})}function JR(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function h(){if(!u){if(o=e?mX((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();I2(h)}}function p(x){!x&&_(),s=i()-(x?o*e:0),u=!1,I2(h)}function m(){u=!0}function w(){s=i(),o=0,n&&n(o)}function _(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function S(x){e=x}function k(){return u}return{start:p,rewind:w,pause:m,cancel:_,set:S,isPaused:k}}function SX(e,t){var n;function r(){n||(n=JR(t||0,function(){e(),n=null},null,1),n.start())}return r}var xX="is-active",EX="slide",CX="fade";function ZR(e,t,n){return Array.prototype.slice.call(e,t,n)}function nx(e){return e.bind(null,...ZR(arguments,1))}function Ng(e,t){return typeof t===e}function D1(e){return!e4(e)&&Ng("object",e)}const kX=Array.isArray;nx(Ng,"function");nx(Ng,"string");const TX=nx(Ng,"undefined");function e4(e){return e===null}function DX(e){return kX(e)?e:[e]}function Rp(e,t){DX(e).forEach(t)}function bX(e,t,n){e&&Rp(t,r=>{r&&e.classList[n?"add":"remove"](r)})}const IX=Object.keys;function t4(e,t,n){if(e){let r=IX(e);r=n?r.reverse():r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function L2(e){return ZR(arguments,1).forEach(t=>{t4(t,(n,r)=>{e[r]=t[r]})}),e}function AX(e,t){Rp(e,n=>{Rp(t,r=>{n&&n.removeAttribute(r)})})}function n4(e,t,n){D1(t)?t4(t,(r,i)=>{n4(e,i,r)}):Rp(e,r=>{e4(n)||n===""?AX(r,t):r.setAttribute(t,String(n))})}const{min:$2,max:F2,floor:HJ,ceil:GJ,abs:qJ}=Math;function NX(e,t,n){const r=$2(t,n),i=F2(t,n);return $2(F2(r,e),i)}const OX={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},RX={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function rx(e,t,n){const{on:r,off:i,bind:s,unbind:o}=_X(e),{translate:a,getPosition:u,toIndex:c,getLimit:h}=t.Move,{setIndex:p,getIndex:m}=t.Controller,{orient:w}=t.Direction,{toggle:_}=t.Elements,{Live:S}=t,{root:k}=e,x=SX(t.Arrows.update,500);let v={},C,T,I,R,A,O;function Z(){const{autoScroll:B}=n;v=L2({},OX,D1(B)?B:{})}function F(){e.is(CX)||!C&&n.autoScroll!==!1&&(C=JR(0,$),J(),ue())}function j(){C&&(C.cancel(),C=null,O=void 0,i([N2,R2,P2,O2,M2]),o(k,"mouseenter mouseleave focusin focusout"),o(_,"click"))}function J(){v.pauseOnHover&&s(k,"mouseenter mouseleave",B=>{I=B.type==="mouseenter",ge()}),v.pauseOnFocus&&s(k,"focusin focusout",B=>{R=B.type==="focusin",ge()}),v.useToggleButton&&s(_,"click",()=>{T?oe():Te()}),r(vX,X),r([N2,R2,P2],()=>{A=!0,Te(!1)}),r([O2,yX,M2],()=>{A=!1,ge()})}function X(){const{autoScroll:B}=n;B!==!1?(v=L2({},v,D1(B)?B:{}),F()):j(),C&&!TX(O)&&a(O)}function ue(){v.autoStart&&(document.readyState==="complete"?oe():s(window,"load",oe))}function oe(){U()&&(C.start(!0),S.disable(!0),R=I=T=!1,ee())}function Te(B=!0){T||(T=B,ee(),U()||(C.pause(),S.disable(!1)))}function ge(){T||(I||R||A?Te(!1):oe())}function $(){const B=u(),Y=V(B);B!==Y?(a(Y),P(O=u())):(Te(!1),v.rewind&&e.go(v.speed>0?0:t.Controller.getEnd())),x()}function V(B){const Y=v.speed||1;return B+=w(Y),e.is(EX)&&(B=NX(B,h(!1),h(!0))),B}function P(B){const{length:Y}=e,z=(c(B)+Y)%Y;z!==m()&&(p(z),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function ee(){if(_){const B=T?"startScroll":"pauseScroll";bX(_,xX,!T),n4(_,"aria-label",n.i18n[B]||RX[B])}}function U(){return!C||C.isPaused()}return{setup:Z,mount:F,destroy:j,play:oe,pause:Te,isPaused:U}}const ls=()=>y(Ut,{children:N(cX,{children:[y("div",{className:"loader"}),y("h1",{children:"Loading...wait for website.."})]})}),PX=()=>{const e=rt(c=>c.board.boards),[t,n]=L.exports.useState(e.length),[r,i]=L.exports.useState("16px"),[s,o]=L.exports.useState("left"),a=en(),u=L.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return L.exports.useEffect(()=>(a(Dg()),u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[a,u]),y(Ut,{children:N(bg,{children:[N("div",{className:"title",children:[y("h1",{children:"OOTD"}),y("span",{children:"\uCD5C\uC2E0 OOTD \uB9AC\uC2A4\uD2B8"})]}),y("div",{className:"contents",children:e.length>0?y(AS,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:2}},extensions:{AutoScroll:rx},children:e.slice(0,10).map(c=>y(NS,{children:N(ZS,{children:[y("div",{className:"top",children:y(Nn,{to:`board/details/${c.id}`,children:y("img",{src:c.photo,alt:"board"})})}),N("div",{className:"bottom",children:[y("p",{className:"board_nickname",children:c.nickname}),y("p",{className:"board_title",children:c.title}),y("p",{className:"board_desc",children:c.desc.length>60?c.desc.slice(0,50)+"...":c.desc})]})]})},c.id))}):y(ls,{})})]})})},MX=ci(bd,"questions_photos"),LX=async e=>{if(e){const t=ci(MX,e.name);return await Td(t,e),await Dd(t)}return null},r4=ar("question/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("qnaData is Not Fount");const{title:n,desc:r,photo:i,nickname:s}=e,o=await LX(i),a={title:n,desc:r,nickname:s,createdAt:Date.now()};return o&&(a.photo=o),{id:(await ng(fo(lr,"questions"),a)).id,...a}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),ix=ar("question/get",async()=>(te.locale("ko"),(await tg(fo(lr,"questions"))).docs.map((n,r)=>{const i=n.data(),{createdAt:s,...o}=i;let a;const u=te(),c=te(s);return u.diff(c,"days")<=1?a=c.fromNow():a=c.format("YYYY.MM.DD"),{id:n.id,number:r+1,createdAt:a,...o}}))),$X=aa({name:"qna",initialState:{questions:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(r4.fulfilled,(t,n)=>{const r=n.payload;return{...t,questions:[...t.questions,r],postCount:t.postCount+1}}).addCase(ix.fulfilled,(t,n)=>({...t,questions:n.payload,postCount:n.payload.length}))}});var FX=$X.reducer;const UX=Ge.div`
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
        font-size: clamp(20px, 2.5vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(18px, 2vw, 20px);
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

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }
`,BX=Ge.article`
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
`,zX=Ge.div`
  width: 100%;
  background: #fefefe;

  .qna_list {
    max-width: 1280px;
    margin: 12px auto 0px auto;
    padding: 1px 3px 0 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .qna_card {
      display: flex;
      min-height: 57px;
      margin-bottom: 6px;
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
      gap: 12px;

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
`,VX=Ge.div`
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
            font-size: clamp(15px, 1.5vw, 16px);
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
            font-size: clamp(14px, 1.5vw, 16px);
          }
        }
      }
    }
  }
`,jX=Ge.div`
  margin: 0 auto;
  margin-top: 30px;
  max-width: 992px;

  .post_title {
    margin: 0 auto;
    width: 100%;
    text-align: center;

    h1 {
      font-size: clamp(18px, 2vw, 20px);
    }
  }

  .qna_write {
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 0 16px;
    width: 80%;
    border: 1px solid #fafafa;
    border-width: 1px;

    form {
      display: flex;
      flex-direction: column;

      .nickname {
        padding: 0 16px;
        font-size: clamp(16px, 1.5vw, 18px);
      }

      .qna_cardForm {
        position: relative;
        border-radius: 12px;
        border-width: 1px;
        padding: 0 16px;

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
            padding: 1rem 0;
          }

          .number_check {
            font-size: 0.75rem;
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
`,YX=()=>{const e=rt(s=>s.qna.questions),[t,n]=L.exports.useState([]),r=en(),i=s=>{n(o=>{const a=o.indexOf(s);if(a!==-1){const u=[...o];return u.splice(a,1),u}else return[s]})};return L.exports.useEffect(()=>{r(ix())},[r]),y(Ut,{className:"qna_section",children:N(bg,{children:[N("div",{className:"title",children:[y("h1",{children:"QnA"}),y("span",{children:"\uCD5C\uC2E0 QnA \uB9AC\uC2A4\uD2B8"})]}),e.length>0?y(VX,{children:y("div",{className:"qna_contents",children:y("ul",{className:"list_item",children:e.slice(0,7).map(s=>N("li",{className:`qna_items ${t.findIndex(o=>o===s.id)!==-1?"active":""}`,onClick:()=>i(s.id),children:[y("div",{className:"inner",children:N("h3",{className:"qna_title",children:[y("span",{className:"qna_q_icon",children:"Q."}),s.title]})}),t.findIndex(o=>o===s.id)!==-1?y("div",{className:"qna_answer",children:y("p",{className:"qna_desc",children:s.desc})}):null]},s.id))})})}):y(ls,{})]})})},WX=ci(bd,"photos_png"),HX=async e=>{const t=ci(WX,e.name);return await Td(t,e),await Dd(t)},i4=ar("photos/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await HX(s);return{id:(await ng(fo(lr,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Og=ar("photos/get",async()=>(gv.locale("ko"),(await tg(fo(lr,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=gv(),u=gv(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),GX=aa({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(i4.fulfilled,(t,n)=>{const r=n.payload;return{...t,photos:[...t.photos,r],postCount:t.postCount+1}}).addCase(Og.fulfilled,(t,n)=>({...t,photos:n.payload,postCount:n.payload.length}))}});var qX=GX.reducer;const KX=()=>{const e=rt(p=>p.photo.photos),[t,n]=L.exports.useState([]),[r,i]=L.exports.useState(e.length),[s,o]=L.exports.useState("16px"),[a,u]=L.exports.useState("left"),c=en(),h=L.exports.useCallback(()=>{window.innerWidth>=1280?(i(5),u("left")):window.innerWidth>=1024?(i(4),o("14px"),u("left")):window.innerWidth>=768?(i(3),o("12px"),u("center")):(i(2),o("10px"),u("center"))},[]);return L.exports.useEffect(()=>(c(Og()),h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[c,h]),L.exports.useEffect(()=>{const p=[...e].sort((m,w)=>w.createdAt-m.createdAt);n(p)},[e]),y(Ut,{children:N(bg,{children:[N("div",{className:"title",children:[y("h1",{children:"Photos"}),y("span",{children:"\uCD5C\uC2E0 photo \uB9AC\uC2A4\uD2B8"})]}),y("div",{className:"contents",children:t.length>0?y(AS,{options:{type:"loop",perPage:r,gap:s,focus:a,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:1.5}},extensions:{AutoScroll:rx},children:t.slice(0,10).map(p=>y(NS,{children:N(ZS,{children:[y("div",{className:"top",children:y(Nn,{to:`photo/details/${p.id}`,children:y("img",{src:p.photo,alt:"photo"})})}),N("div",{className:"bottom",children:[y("p",{className:"photo_category",children:`<${p.category}>`}),y("p",{className:"photo_nickname",children:p.nickname}),y("p",{className:"photo_title",children:p.title}),y("p",{className:"photo_desc",children:p.desc.length>60?p.desc.slice(0,50)+"...":p.desc})]})]})},p.id))}):y(ls,{})})]})})};Ge.main`
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
`;var Rg="/modart/assets/main.eb927103.gif";const QX=ci(bd,"todays_photos"),XX=async e=>{if(e){const t=ci(QX,e.name);return await Td(t,e),await Dd(t)}return null},s4=ar("todays/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("todaysData Not Found..");const{title:n,desc:r,type:i,photo:s,nickname:o}=e,a=await XX(s),u={title:n,desc:r,type:i,nickname:o,createdAt:Date.now()};return a&&(u.photo=a),{id:(await ng(fo(lr,"todays"),u)).id,...u}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Pg=ar("todays/get",async()=>(te.locale("ko"),(await tg(fo(lr,"todays"))).docs.map((n,r)=>{const i=n.data(),{createdAt:s,...o}=i;let a;const u=te(),c=te(s);return u.diff(c,"days")<=1?a=c.fromNow():a=c.format("YYYY.MM.DD"),{id:n.id,number:r+1,createdAt:a,...o}}))),JX=aa({name:"today",initialState:{todays:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(s4.fulfilled,(t,n)=>{const r=n.payload;return{...t,todays:[...t.todays,r],postCount:t.postCount+1}}).addCase(Pg.fulfilled,(t,n)=>({...t,todays:n.payload,postCount:n.payload.length}))}});var ZX=JX.reducer;const eJ=()=>{const e=rt(h=>h.today.todays),[t,n]=L.exports.useState(e.length),[r,i]=L.exports.useState("16px"),[s,o]=L.exports.useState("left"),a=en(),u="https://via.placeholder.com/500x750.png?text=No+Image",c=L.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return L.exports.useEffect(()=>(a(Pg()),c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[a,c]),y(Ut,{children:N(bg,{children:[N("div",{className:"title",children:[y("h1",{children:"Today Story"}),y("span",{children:"\uCD5C\uC2E0 \uC77C\uC0C1\uC774\uC57C\uAE30 \uB9AC\uC2A4\uD2B8"})]}),e.length>0?y(AS,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!0,pauseOnFocus:!1,rewind:!1,speed:-1}},extensions:{AutoScroll:rx},children:e.slice(0,10).map(h=>y(NS,{children:N(ZS,{children:[y("div",{className:"top",children:y(Nn,{to:`today/details/${h.id}`,children:h.photo?y("img",{src:h.photo,alt:"today"}):y("img",{src:u,alt:h.title})})}),N("div",{className:"bottom",children:[y("p",{className:"today_category",children:`<${h.type}>`}),y("p",{className:"today_nickname",children:h.nickname}),y("p",{className:"today_title",children:h.title}),y("p",{className:"today_desc",children:h.desc.length>60?h.desc.slice(0,50)+"...":h.desc})]})]})},h.id))}):y(ls,{})]})})},tJ=()=>N(_y,{children:[y(PX,{}),y(eJ,{}),y(KX,{}),y(YX,{})]}),nJ=Ge.div`
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
          margin-right: 12px;
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
        }

        .user_detail {
          padding: 12px 6px;
        }

        .board_detail {
          margin-top: 12px;

          .board_item {
            padding: 6px 0px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0px 160px;
  }
`,rJ=Ge.div`
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
                  color: #FFFFFF;
                }
              }
            }
          }

          p {
            padding-right: 58px;
            flex: 1;
            padding-top: 8px;
            padding-bottom: 8px;
            font-size: 16px;
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
            color: #FEFEFE;
            border-radius: 6px;
          }
        }
      }
    }
  }
`,iJ=()=>{const e=rt(t=>t.login.user);return y(Ut,{children:y(nJ,{children:e?N("div",{className:"contents",children:[N("div",{className:"users",children:[N("div",{className:"user_detail",children:[y("div",{className:"user_thumb",children:y("img",{src:"",alt:""})}),y("div",{className:"user_info",children:N("div",{className:"info_box",children:[y("strong",{className:"name",children:e.nickname}),e.intro?y("p",{className:"intro",children:e.intro}):null,y("p",{className:"email",children:e.email}),y(Nn,{to:"/account/edit",children:"\uD504\uB85C\uD544 \uC218\uC815"})]})})]}),N("div",{className:"board_detail",children:[N(Nn,{to:"/",className:"board_item",children:[y("strong",{className:"info",children:"\uAC8C\uC2DC\uAE00"}),y("p",{className:"title",children:"2 (\uAC1C)"})]}),N(Nn,{to:"/",className:"board_item",children:[y("strong",{className:"info",children:"2100P"}),y("p",{className:"title",children:"\uD3EC\uC778\uD2B8"})]})]})]}),y("div",{className:"items"}),y("div",{className:"items"})]}):y(ls,{})})})},b1=ar("auth/signUp",async e=>{try{const{email:t,password:n,nickname:r}=e,s=(await XU(no,t,n)).user;return await pY(ql(lr,"users",s.uid),{uid:s.uid,nickname:r,email:t}),{uid:s.uid,email:t,nickname:r}}catch(t){throw t}}),sJ=aa({name:"auth",initialState:null,extraReducers:e=>{e.addCase(b1.fulfilled,(t,n)=>{const{uid:r,email:i,nickname:s}=n.payload;return{...t,uid:r,email:i,nickname:s}}),e.addCase(b1.rejected,(t,n)=>n.error.message)}});var oJ=sJ.reducer;function aJ(e){return ur({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function lJ(e){return ur({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}const uJ=({text:e})=>y(uX,{children:y("p",{children:e})}),o4=({text:e,link:t})=>{const[n,r]=L.exports.useState({});L.exports.useState({});const[i,s]=L.exports.useState(!1),[o,a]=L.exports.useState(""),u=en(),c=sr(),h=w=>{r({...n,[w.target.name]:w.target.value})};return N(lX,{children:[N("div",{className:"left",children:[y("div",{className:"toggle",onClick:()=>c("/"),children:y(aJ,{})}),N("div",{className:"textbox",children:[y("strong",{className:"title",children:"ModArt"}),y("span",{children:"< \uBAA8\uB4DC\uC544\uD2B8 />"})]})]}),N("div",{className:"right",children:[i&&y(uJ,{text:o}),y("form",{onSubmit:async w=>{if(w.preventDefault(),Object.values(n).every(S=>S!=="")){if(e==="\uD68C\uC6D0\uAC00\uC785")try{await u(b1(n)).unwrap(),a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),s(!0),c("/account/login")}catch{a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),s(!0),setTimeout(()=>{s(!1)},2e3)}else if(e==="\uB85C\uADF8\uC778")try{if(!await u(l1(n)).unwrap()){a("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3);return}c("/")}catch{a("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3)}}},children:e==="\uD68C\uC6D0\uAC00\uC785"?N(_y,{children:[N("div",{className:"area",children:[y(Eu,{type:"email",name:"email",onChange:h,autoComplete:"off"}),y("label",{htmlFor:"email",children:"Email"})]}),N("div",{className:"area",children:[y(Eu,{type:"password",name:"password",onChange:h,autoComplete:"off"}),y("label",{htmlFor:"password",children:"Password"})]}),N("div",{className:"area",children:[y(Eu,{type:"text",name:"nickname",onChange:h,autoComplete:"off"}),y("label",{htmlFor:"nickname",children:"\uB2C9\uB124\uC784"})]}),y(vv,{type:"submit",children:e})]}):N(_y,{children:[N("div",{className:"area",children:[y(Eu,{type:"email",name:"email",onChange:h}),y("label",{htmlFor:"email",children:"email"})]}),N("div",{className:"area",children:[y(Eu,{type:"password",name:"password",onChange:h}),y("label",{htmlFor:"password",children:"Password"})]}),y(vv,{type:"submit",children:e})]})}),y("div",{className:"socialLogin",children:N(vv,{className:"googleLogin",onClick:async()=>{try{await u(a1()).unwrap(),a("\uAD6C\uAE00\uACC4\uC815 \uB85C\uADF8\uC778 \uB418\uC168\uC2B5\uB2C8\uB2E4."),c("/")}catch(w){a(w.message)}},children:[y("div",{className:"googleIcon",children:y(lJ,{})}),y("p",{className:"googleText",children:"Sign In With Google"})]})}),y("div",{className:"signUp_link",children:y(Nn,{to:`/account/${t==="\uD68C\uC6D0\uAC00\uC785"?"signup":"login"}`,children:t})})]})]})},a4=Ge.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`,cJ=()=>y(a4,{children:y(o4,{text:"\uD68C\uC6D0\uAC00\uC785",link:"\uB85C\uADF8\uC778"})}),dJ=()=>y(a4,{children:y(o4,{text:"\uB85C\uADF8\uC778",link:"\uD68C\uC6D0\uAC00\uC785"})}),hJ=()=>{const e=rt(c=>c.login.user),t=e==null?void 0:e.nickname,n=L.exports.useRef(),[r,i]=L.exports.useState({}),s=en(),o=sr(),a=c=>{c.target.name==="photo"?i({...r,[c.target.name]:c.target.files[0]}):i({...r,[c.target.name]:c.target.value})};return L.exports.useEffect(()=>{n.current.focus()},[n]),y(Ut,{children:N(Ig,{children:[y("div",{className:"post_title",children:y("h1",{children:"<OOTD>"})}),N("form",{onSubmit:async c=>{c.preventDefault();try{const h={...r,nickname:t};await s(KR(h)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),o(-1),console.log(r)}catch(h){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(h)}},encType:"multipart/form-data",children:[N("p",{className:"nickname",children:[y("span",{className:"author",children:"\uC791\uC131\uC790"}),t]}),y("input",{ref:n,type:"text",onChange:a,autoComplete:"off",name:"title",placeholder:"\uAE00\uC81C\uBAA9"}),y("input",{type:"text",onChange:a,autoComplete:"off",name:"brand",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 ex) \uB098\uC774\uD0A4"}),y("input",{type:"text",onChange:a,autoComplete:"off",name:"height",placeholder:"\uD0A4"}),y("input",{type:"text",onChange:a,autoComplete:"off",name:"weight",placeholder:"\uBAB8\uBB34\uAC8C"}),y("textarea",{type:"text",name:"desc",onChange:a,placeholder:"contents.."}),y("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:a}),y("label",{htmlFor:"photo",className:"file_label",children:N("p",{children:[y("span",{children:y(rg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),y("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},fJ=()=>(rt(e=>e.login.user),$l(),y(Ut,{children:y(Ig,{children:y("form",{children:y("p",{className:"nickname"})})})})),pJ=Ge.div`
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
        font-size: clamp(20px, 2.5vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(18px, 2vw, 20px);
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
    height: 14rem;

    .contents {
      .image {
        width: 75%;
      }
    }
  }
`,mJ=Ge.div`
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
`,gJ=Ge.div`
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
`,vJ=()=>{const{id:e}=$l(),t=rt(i=>i.board.boards),n=en(),r=t.find(i=>i.id===e);return L.exports.useEffect(()=>{n(Dg())},[n]),y(Ut,{children:y(gJ,{children:r&&N("div",{className:"contents",children:[N("div",{className:"board",children:[y("div",{className:"boardImg",children:y("img",{src:r.photo,alt:r.nickname})}),N("div",{className:"boardInfo",children:[N("div",{className:"title",children:[N("h1",{children:["Information ",y("span",{children:"< \uC2A4\uD0C0\uC77C \uC815\uBCF4 >"})]}),N("p",{className:"date",children:[r.createdAt,"..."]})]}),N("div",{className:"info",children:[N("div",{className:"area",children:[y("div",{className:"user_img",children:y("img",{src:Rg,alt:r.nickname})}),y("p",{children:r.nickname})]}),N("div",{className:"area",children:[y("label",{children:"Title"}),y("p",{children:r.title})]}),N("div",{className:"area",children:[y("label",{children:"Brand"}),y("p",{children:r.brand})]}),N("div",{className:"area",children:[y("label",{children:"Spec"}),N("div",{className:"spec",children:[N("p",{children:["Height: ",r.height]}),N("p",{children:["Weight: ",r.weight]})]})]}),N("div",{className:"area",children:[y("label",{children:"Contents"}),y("p",{children:r.desc})]})]})]})]}),N("div",{className:"comment",children:[N("div",{className:"comment_form",children:[y("div",{className:"users"}),y("div",{className:"form"})]}),y("ul",{className:"comment_list",children:y("li",{})})]})]})})})},yJ=Ge.div`
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
        font-size: clamp(20px, 2.5vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(18px, 2vw, 20px);
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
    /* .contents {
      .image {
        width: 75%;
      }
    } */
  }
`,wJ=Ge.div`
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
`,_J=Ge.div`
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
`,SJ=()=>{const e=rt(u=>u.login.user),t=rt(u=>u.photo.photos)||null,n=en(),r=sr(),[i,s]=L.exports.useState([]),o=()=>e?r("/photo/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),a=u=>{r(`/photo/details/${u.id}`)};return L.exports.useEffect(()=>{n(Og())},[n]),L.exports.useEffect(()=>{const u=[...t].sort((c,h)=>h.createdAt-c.createdAt);s(u)},[t]),N(Ut,{className:"photo_section",children:[y(yJ,{children:N("div",{className:"contents",children:[N("div",{className:"text",children:[y("p",{children:"Free PhotoZone"}),y("span",{children:"\uC790\uC2E0\uC758 \uC0AC\uC9C4\uC2E4\uB825\uC744 \uBF50\uB0B4\uC8FC\uC138\uC694!"}),y("button",{className:"link-btn",onClick:o,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),y("div",{className:"image",children:y(FW,{})})]})}),N(wJ,{children:[y("div",{className:"filter"}),y("ul",{className:"photo_list",children:i.length>0?i.slice(0,10).map(u=>N("li",{className:"photo_card",children:[y("div",{className:"photo_img",onClick:()=>a(u),children:y("img",{src:u.photo,alt:u.title})}),N("div",{className:"items",children:[y("h3",{className:"photo_title",onClick:()=>a(u),children:u.title.length>30?u.title.subString(0,30)+"...":u.title}),N("div",{className:"item_contents",children:[y("span",{className:"item_category",children:u.category}),N("div",{className:"sub_items",children:[y("span",{className:"item_nickname",children:u.nickname}),y("span",{className:"item_date",children:u.createdAt})]})]})]})]},u.id)):y(ls,{})})]})]})};(()=>{var e={d:(s,o)=>{for(var a in o)e.o(o,a)&&!e.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},t={};function n(s,o){for(var a=0;a<o.length;a++){var u=o[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}e.r(t),e.d(t,{default:()=>i});var r=function(){function s(){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(u,c,h,p,m,w){return h>p&&(u=Math.round(u*p/h),h=p),u>c&&(h=Math.round(h*c/u),u=c),m&&h<m&&(u=Math.round(u*m/h),h=m),w&&u<w&&(h=Math.round(h*w/u),u=w),{height:u,width:h}}},{key:"resizeAndRotateImage",value:function(u,c,h,p,m){var w=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",_=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,S=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,k=_/100,x=document.createElement("canvas"),v=u.width,C=u.height,T=this.changeHeightWidth(C,h,v,c,p,m);!S||S!==90&&S!==270?(x.width=T.width,x.height=T.height):(x.width=T.height,x.height=T.width),v=T.width,C=T.height;var I=x.getContext("2d");return I.fillStyle="rgba(0, 0, 0, 0)",I.fillRect(0,0,v,C),I.imageSmoothingEnabled&&I.imageSmoothingQuality&&(I.imageSmoothingQuality="high"),S&&(I.rotate(S*Math.PI/180),S===90?I.translate(0,-x.width):S===180?I.translate(-x.width,-x.height):S===270?I.translate(-x.height,0):S!==0&&S!==360||I.translate(0,0)),I.drawImage(u,0,0,v,C),x.toDataURL("image/".concat(w),k)}},{key:"b64toByteArrays",value:function(u,c){for(var h=atob(u.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),p=[],m=0;m<h.length;m+=512){for(var w=h.slice(m,m+512),_=new Array(w.length),S=0;S<w.length;S++)_[S]=w.charCodeAt(S);var k=new Uint8Array(_);p.push(k)}return p}},{key:"b64toBlob",value:function(u,c){var h=this.b64toByteArrays(u,c);return new Blob(h,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(u,c,h){var p=this.b64toByteArrays(u,h);return new File(p,c,{type:h,lastModified:new Date})}},{key:"createResizedImage",value:function(u,c,h,p,m,w,_){var S=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",k=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,x=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,v=new FileReader;if(!u)throw Error("File Not Found!");if(u.type&&!u.type.includes("image"))throw Error("File Is NOT Image!");v.readAsDataURL(u),v.onload=function(){var C=new Image;C.src=v.result,C.onload=function(){var T=s.resizeAndRotateImage(C,c,h,k,x,p,m,w),I="image/".concat(p);switch(S){case"blob":var R=s.b64toBlob(T,I);_(R);break;case"base64":_(T);break;case"file":var A=u.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(p.toString()),O=s.b64toFile(T,A,I);_(O);break;default:_(T)}}},v.onerror=function(C){throw Error(C)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,u,c,h,p,m,w,_){return r.createResizedImage(s,o,a,u,c,h,p,m,w,_)}}})();const xJ=()=>{const[e,t]=L.exports.useState({}),[n,r]=L.exports.useState([]),i=rt(h=>h.login.user),s=i==null?void 0:i.nickname,o=en(),a=sr(),u=h=>{if(h.target.name==="photo")t({...e,[h.target.name]:h.target.files[0]});else if(h.target.name==="category"){const{value:p,checked:m}=h.target;r(m?[...n,p]:n.filter(w=>w!==p))}else t({...e,[h.target.name]:h.target.value})};return y(Ut,{children:N(Ig,{children:[y("div",{className:"post_title",children:y("h1",{children:"<Photos>"})}),N("form",{encType:"multipart/form-data",onSubmit:async h=>{h.preventDefault();try{const p={...e,nickname:s,category:n};await o(i4(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[N("p",{className:"nickname",children:[y("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),N("div",{className:"category-wrap",children:[N("label",{children:[y("input",{type:"checkbox",name:"category",value:"\uC790\uC5F0",onChange:u}),y("i",{}),y("span",{children:"\uC790\uC5F0"})]}),N("label",{children:[y("input",{type:"checkbox",name:"category",value:"\uC778\uBB3C",onChange:u}),y("i",{}),y("span",{children:"\uC778\uBB3C"})]}),N("label",{children:[y("input",{type:"checkbox",name:"category",value:"\uC74C\uC2DD",onChange:u}),y("i",{}),y("span",{children:"\uC74C\uC2DD"})]}),N("label",{children:[y("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:u}),y("i",{}),y("span",{children:"\uC77C\uC0C1"})]})]}),y("input",{type:"text",placeholder:"\uC81C\uBAA9",name:"title",autoComplete:"off",onChange:u}),y("input",{type:"text",placeholder:"\uC124\uBA85",name:"desc",autoComplete:"off",onChange:u}),y("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:u}),y("label",{htmlFor:"photo",className:"file_label",children:N("p",{children:[y("span",{children:y(rg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),y("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},EJ=()=>{const e=rt(o=>o.login.user),t=rt(o=>o.board.boards)||null,n=sr(),r=en(),i=()=>e?n("/board/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),s=o=>{n(`/board/details/${o.id}`)};return L.exports.useEffect(()=>{r(Dg())},[r]),N(Ut,{className:"ootd_section",children:[y(pJ,{children:N("div",{className:"contents",children:[N("div",{className:"text",children:[y("p",{children:"OOTD of the day"}),y("span",{children:"\uC790\uC2E0\uC758 OOTD\uB97C \uACF5\uC720 \uD574\uC8FC\uC138\uC694!"}),y("button",{className:"link-btn",onClick:i,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),y("div",{className:"image",children:y(BW,{})})]})}),y(mJ,{children:y("ul",{className:"board_list",children:t.length>0?t.map(o=>N("li",{className:"board_card",children:[y("div",{className:"board_img",onClick:()=>s(o),children:y("img",{src:o.photo,alt:o.title})}),N("div",{className:"items",children:[y("h3",{className:"board_title",onClick:()=>s(o),children:o.title.length>30?o.title.subString(0,30)+"...":o.title}),N("div",{className:"item_contents",children:[y("span",{className:"item_brand",children:o.brand}),N("div",{className:"sub_items",children:[y("span",{className:"item_nickname",children:o.nickname}),y("span",{className:"item_date",children:o.createdAt})]})]})]})]},o.id)):y(ls,{})})})]})},CJ=()=>{const{id:e}=$l();return console.log(e),y("div",{children:"PhotoEdit"})};function kJ(e){return ur({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"}}]})(e)}const TJ=()=>{const{id:e}=$l(),t=rt(i=>i.photo.photos),n=en();sr();const r=t.find(i=>i.id===e);return L.exports.useEffect(()=>{n(Og())},[n]),y(Ut,{children:y(_J,{children:r&&N("div",{className:"contents",children:[N("div",{className:"photo_users",children:[y("div",{className:"user_img",children:y("img",{src:Rg,alt:r.nickname})}),N("div",{className:"user",children:[y("p",{children:r.nickname}),y("span",{children:r.category})]})]}),y("div",{className:"snapImg",children:y("img",{src:r.photo,alt:r.nickname})}),N("div",{className:"photo_info",children:[N("div",{className:"icon",children:[N("div",{className:"link",children:[y("button",{className:"like",children:y($W,{})}),y("button",{className:"comment",children:y(kJ,{})})]}),N("span",{className:"date",children:[r.createdAt," ..."]})]}),N("div",{className:"photo_title",children:[y("h1",{children:r.title}),y("p",{children:r.desc})]})]})]})})})},DJ=Ge.div`
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
        font-size: clamp(20px, 2.5vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(18px, 2vw, 20px);
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
`,bJ=Ge.div`
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
`,IJ=Ge.div`
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
`,AJ=()=>{const{id:e}=$l(),t=rt(a=>a.login.user),r=rt(a=>a.today.todays).find(a=>a.id===e),i=en(),s=sr(),o=()=>{if(t)return null;confirm("\uB85C\uADF8\uC778 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C~?")?s("account/login"):document.querySelector(".comment_input").disabled=!0};return L.exports.useEffect(()=>{i(Pg())},[i]),y(Ut,{className:"today_detail_section",children:y(IJ,{children:r&&N("div",{className:"contents",children:[N("header",{className:"today_header",children:[N("h2",{className:"today_title",children:[y("span",{className:"today_type",children:`(${r.type})`}),r.title.length>30?r.title.subStr(0,30)+"...":r.title]}),y("p",{className:"today_date",children:r.createdAt})]}),N("div",{className:"user_info",children:[y("p",{className:"user_nickname",children:r.nickname}),N("div",{className:"items",children:[y("span",{children:"\uB313\uAE00"}),y("span",{children:"\uC870\uD68C\uC218"}),y("span",{children:"\uCD94\uCC9C"})]})]}),y("div",{className:"today_desc",children:y("p",{className:"desc",children:r.desc})}),N("div",{className:"comment",children:[y("header",{className:"comment_header",children:y("p",{children:"\uB313\uAE00 2\uAC1C"})}),N("ul",{className:"comment_list",children:[N("li",{className:"comment_item",children:[N("div",{className:"top",children:[y("img",{src:Rg,alt:""}),y("span",{className:"comment_name",children:"\uC5B4\uC2EC"}),y("span",{className:"comment_date",children:"3\uBD84 \uC804"})]}),y("div",{className:"bt",children:y("p",{className:"comment_desc",children:"\uC624\uC6B0~!! \uB9F9\uAD6C\uC528 \uBC18\uAC11\uC2B5\uB2C8\uB2E4\u314E\u314E\u314E"})})]}),N("div",{className:"comment_form",children:[y("p",{children:"\uB313\uAE00 \uC4F0\uAE30"}),N("form",{children:[y("input",{className:"comment_input",type:"text",placeholder:"\uB313\uAE00...",onClick:o}),y("button",{type:"submit",children:"\uB4F1\uB85D"})]})]})]})]})]})})})},NJ=()=>{const[e,t]=L.exports.useState({photo:null,fileName:""}),n=rt(u=>u.login.user),r=n==null?void 0:n.nickname,i=en(),s=sr(),o=u=>{if(u.target.name==="photo"){const c=u.target.file[0];c&&t({...e,photo:c,fileName:c.name})}else t({...e,[u.target.name]:u.target.value})};return y(Ut,{children:N(Ig,{children:[y("div",{className:"post_title",children:y("h1",{children:"<Todays Story>"})}),N("form",{encType:"multipart/form-data",onSubmit:async u=>{u.preventDefault();try{const c={...e,nickname:r};await i(s4(c)).unwrap(),s(-1),console.log(e)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},children:[N("p",{className:"nickname",children:[y("span",{className:"author",children:"\uC791\uC131\uC790"}),r]}),y("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:o}),y("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:o}),N("select",{name:"type",value:e.type||"",placeholder:"\uC885\uB958",autoComplete:"off",onChange:o,children:[y("option",{value:"",children:"\uC885\uB958 \uC120\uD0DD"}),y("option",{value:"\uD328\uC158",children:"\uD328\uC158"}),y("option",{value:"\uC5F0\uC608\uC778",children:"\uC5F0\uC608\uC778"}),y("option",{value:"\uC6B4\uB3D9",children:"\uC6B4\uB3D9"}),y("option",{value:"\uC720\uBA38",children:"\uC720\uBA38"}),y("option",{value:"\uBBF8\uC6A9",children:"\uBBF8\uC6A9"}),y("option",{value:"\uBBF8\uC2A4\uD130\uB9AC",children:"\uBBF8\uC2A4\uD130\uB9AC"})]}),y("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:o}),y("label",{htmlFor:"photo",className:"file_label",children:N("p",{children:[y("span",{children:y(rg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30",y("span",{className:"label_text",children:e.fileName})]})}),y("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})};function OJ(e){return ur({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"}}]})(e)}const RJ=()=>{const e=rt(c=>c.login.user),t=rt(c=>c.today.todays),[n,r]=L.exports.useState([]),i=sr(),s=en(),o="https://via.placeholder.com/500x750.png?text=No+Image",a=()=>e?i("/today/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),u=c=>{i(`/today/details/${c.id}`)};return L.exports.useEffect(()=>{s(Pg())},[s]),L.exports.useEffect(()=>{const c=[...t].sort((h,p)=>p.createdAt-h.createdAt);r(c),console.log(c)},[t]),N(Ut,{className:"today_section",children:[y(DJ,{children:N("div",{className:"contents",children:[N("div",{className:"text",children:[y("p",{children:"Free Talking"}),y("span",{children:"\uD558\uB8E8\uC758 \uC77C\uC0C1\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694:)"}),y("button",{className:"link-btn",onClick:a,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),y("div",{className:"image",children:y(OJ,{})})]})}),y(bJ,{children:y("ul",{className:"today_list",children:n?n.slice(0,10).map(c=>N("li",{className:"today_card",children:[y("div",{className:"today_type",children:y("span",{children:c.type})}),y("div",{className:"today_img",children:c.photo?y("img",{src:c.photo,loading:"lazy",alt:c.title}):y("img",{src:o,loading:"lazy",alt:c.title})}),N("div",{className:"items",children:[y("h3",{className:"today_title",onClick:()=>u(c),children:c.title.length>30?c.title.subString(0,30)+"...":c.title}),N("div",{className:"item_contents",children:[y("span",{className:"item_type",children:c.type}),N("div",{className:"sub_items",children:[y("span",{className:"item_nickname",children:c.nickname}),y("span",{className:"item_date",children:c.createdAt})]})]})]})]},c.id)):y(ls,{})})})]})},PJ=()=>{const e=rt(i=>i.login.user),t=rt(i=>i.qna.questions),n=sr();return N(Ut,{children:[y(UX,{children:N("div",{className:"contents",children:[N("div",{className:"text",children:[y("p",{children:"Ask me any questions"}),y("span",{children:"\uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC744 \uD574\uC8FC\uC138\uC694!"}),y("button",{className:"link-btn",onClick:()=>e?n("/qna/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uC9C8\uBB38\uD558\uAE30"})]}),y("div",{className:"image",children:y(UW,{})})]})}),y(zX,{children:y("ul",{className:"qna_list",children:t.length>0?t.slice(0,10).map(i=>y("li",{className:"qna_card"},i.id)):y(ls,{})})})]})},MJ=()=>{const{id:e}=$l(),[t,n]=L.exports.useState(!1),r=rt(u=>u.qna.questions),i=rt(u=>u.login.user),s=en(),o=r.find(u=>u.id===e);console.log(o);const a=()=>(i||window.alert("\uB85C\uADF8\uC778\uD558\uC5EC\uC57C \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4!"),null);return L.exports.useEffect(()=>{s(ix())},[s]),y(Ut,{children:y(BX,{children:N("div",{className:"qna_card",children:[N("header",{className:"card_header",children:[N("h1",{children:[y("span",{children:"Q."}),"\uC9C8\uBB38 title"]}),N("div",{className:"card_info",children:[N("div",{className:"inner",children:[y("span",{children:"\uC720\uC800\uC774\uBBF8\uC9C0?!"}),y("span",{children:"\uC720\uC800nickname"})]}),y("span",{className:"date",children:"2023-05-18"})]})]}),y("div",{className:"card_contents",children:y("p",{className:"card_desc",children:"qna\uB0B4\uC6A9"})}),N("footer",{className:"card_footer",children:[N("div",{className:"inner",children:[y("button",{children:"\uC88B\uC544\uC694"}),y("button",{onClick:()=>n(!t),children:"\uB313\uAE00"}),y("button",{children:"\uACF5\uC720\uD558\uAE30"})]}),t?y("div",{className:"comment",children:N("div",{className:"comment_in",children:[N("div",{className:"top",children:[y("span",{children:i?i.nickname:y(Nn,{to:"/account/login",children:"\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."})}),y("button",{children:"\uB4F1\uB85D"})]}),y("div",{className:"bottom",children:y("textarea",{cols:"30",rows:"10",onClick:a,children:"\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."})})]})}):null]})]})})})},LJ=()=>y("div",{children:"QnaEdit"}),$J=()=>{const[e,t]=L.exports.useState({}),n=rt(u=>u.login.user),r=n==null?void 0:n.nickname,i=en(),s=sr(),o=u=>{if(u.target.name==="photo"){const c=u.target.file[0];c&&t({...e,photo:c,fileName:c.name})}else t({...e,[u.target.name]:u.target.value})};return y(Ut,{children:N(jX,{children:[y("div",{className:"post_title",children:y("h1",{children:"<Question>"})}),y("div",{className:"qna_write",children:N("form",{encType:"multipart/form-data",onSubmit:async u=>{u.preventDefault();try{const c={...e,nickname:r};await i(r4(c)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),s(-1)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},children:[y("p",{className:"nickname",children:r}),N("div",{className:"qna_cardForm",children:[N("div",{className:"title",children:[y("span",{className:"q",children:y(VW,{})}),y("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:o}),y("span",{className:"number_check",children:"(0/70\uC790)"})]}),y("div",{className:"desc",children:y("textarea",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:o})}),N("div",{className:"file_input",children:[y("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:o}),y("label",{htmlFor:"photo",className:"file_label",children:N("p",{children:[y("span",{children:y(rg,{})}),"\uD30C\uC77C\uB123\uAE30"]})})]}),y("button",{className:"submit",type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})]})})},FJ=()=>y("div",{children:"TodayEdit"}),UJ=()=>{const[e,t]=L.exports.useState({}),[n,r]=L.exports.useState({}),i=rt(c=>c.login.user),s=en(),o=c=>{t(h=>({...h,name:c==="name"?!h.name:h.name,email:c==="email"?!h.email:h.email,intro:c==="intro"?!h.intro:h.intro,password:c==="password"?!h.password:h.password}))},a=c=>{const{name:h,value:p}=c.target;c.target.name==="photo"?r(m=>({...m,[h]:c.target.files[0]})):r(m=>({...m,[h]:p}))},u=async c=>{console.log("\uD568\uC218\uD638\uCD9C");try{let h={};if(e.name&&n.nickname&&(h.nickname=n.nickname,o(c)),e.email&&n.email&&(h.email=n.email,o(c)),e.intro&&n.intro&&(h.intro=n.intro,o(c)),e.password&&n.password&&(h.password=n.password,o(c)),e.photo&&n.photo&&(h.photo=n.photo,o(c)),Object.keys(h).length>0){await s(c1(h)).unwrap();const p={...i,...h};s({type:"login/updateUserData",payload:p})}}catch(h){console.log("\uB370\uC774\uD130 \uC5C5\uB370\uC774\uD2B8\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.",h)}};return L.exports.useEffect(()=>{t({})},[i]),y(Ut,{children:y(rJ,{children:N("div",{className:"contents",children:[y("div",{className:"contents_title",children:y("h3",{children:"\uD504\uB85C\uD544 \uAD00\uB9AC"})}),N("div",{className:"user_profile",children:[y("div",{className:"user_img",children:y("img",{src:i.photo?i.photo:Rg,alt:i.nickname})}),N("div",{className:"user_detail",children:[y("div",{className:"user_nickname",children:y("p",{className:"nickname",children:i.nickname})}),i.intro?y("div",{className:"user_intro",children:y("p",{children:i.intro})}):null,N("div",{className:"profile_btn",children:[N("div",{className:"img_change",children:[y("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:a}),y("label",{htmlFor:"photo",className:"file_label",children:y("p",{children:"\uC774\uBBF8\uC9C0\uBCC0\uACBD"})})]}),y("div",{className:"img_delete",children:y("p",{children:"\uC0AD\uC81C\uD558\uAE30"})})]})]})]}),N("div",{className:"profile_info",children:[y("div",{className:"info_title",children:y("h3",{children:"\uD504\uB85C\uD544 \uC815\uBCF4"})}),N("div",{className:`area${e.name?" active":""}`,children:[y("label",{children:"\uD504\uB85C\uD544 \uC774\uB984"}),N("div",{className:`input_area${e.name?" active":""}`,children:[e.name?y("input",{type:"text",name:"nickname",placeholder:i.nickname,onChange:a}):y("p",{children:i.nickname}),e.name?N("div",{className:"btn_area",children:[y("button",{className:"back",onClick:()=>o("name"),children:"\uB3CC\uC544\uAC00\uAE30"}),y("button",{className:"submit",onClick:()=>u("name"),children:"\uC800\uC7A5\uD558\uAE30"})]}):y("button",{className:"change_btn",onClick:()=>o("name"),children:"\uBCC0\uACBD"})]})]}),N("div",{className:`area${e.email?" active":""}`,children:[y("label",{children:"Email"}),N("div",{className:`input_area${e.email?" active":""}`,children:[e.email?y("input",{type:"text",name:"email",placeholder:i.email,onChange:a}):y("p",{children:i.email}),e.email?N("div",{className:"btn_area",children:[y("button",{className:"back",onClick:()=>o("email"),children:"\uB3CC\uC544\uAC00\uAE30"}),y("button",{className:"submit",onClick:()=>u("email"),children:"\uC800\uC7A5\uD558\uAE30"})]}):y("button",{className:"change_btn",onClick:()=>o("email"),children:"\uBCC0\uACBD"})]})]}),N("div",{className:`area${e.intro?" active":""}`,children:[y("label",{children:"\uC18C\uAC1C"}),N("div",{className:`input_area${e.intro?" active":""}`,children:[e.intro?y("input",{type:"text",name:"intro",placeholder:i.intro?i.intro:"\uC790\uC2E0\uC744 \uC18C\uAC1C \uD574\uC8FC\uC138\uC694...",onChange:a}):y("p",{children:i.intro?i.intro:"\uC790\uC2E0\uC744 \uC18C\uAC1C \uD574\uC8FC\uC138\uC694..."}),e.intro?N("div",{className:"btn_area",children:[y("button",{className:"back",onClick:()=>o("intro"),children:"\uB3CC\uC544\uAC00\uAE30"}),y("button",{className:"submit",onClick:()=>u("intro"),children:"\uC800\uC7A5\uD558\uAE30"})]}):y("button",{className:"change_btn",onClick:()=>o("intro"),children:"\uBCC0\uACBD"})]})]}),N("div",{className:`area${e.password?" active":""}`,children:[y("label",{children:"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD"}),N("div",{className:`input_area${e.password?" active":""}`,children:[e.password?y("input",{type:"password"}):y("p",{children:"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD"}),e.password?N("div",{className:"btn_area",children:[y("button",{className:"back",onClick:()=>o("password"),children:"\uB3CC\uC544\uAC00\uAE30"}),y("button",{className:"submit",onClick:()=>u("password"),children:"\uC800\uC7A5\uD558\uAE30"})]}):y("button",{className:"change_btn",onClick:()=>o("password"),children:"\uBCC0\uACBD"})]})]})]})]})})})},BJ=[{path:"/",element:y(tJ,{})},{path:"/account",element:y(iJ,{})},{path:"/account/:id",element:y(UJ,{})},{path:"/account/signup",element:y(cJ,{})},{path:"/account/login",element:y(dJ,{})},{path:"/board",element:y(EJ,{})},{path:"/board/write",element:y(hJ,{})},{path:"/board/:id",element:y(fJ,{})},{path:"/photo",element:y(SJ,{})},{path:"/photo/write",element:y(xJ,{})},{path:"/photo/:id",element:y(CJ,{})},{path:"/today",element:y(RJ,{})},{path:"/today/write",element:y(NJ,{})},{path:"/today/:id",element:y(FJ,{})},{path:"/qna",element:y(PJ,{})},{path:"/qna/write",element:y($J,{})},{path:"/qna/:id",element:y(LJ,{})},{path:"/today/details/:id",element:y(AJ,{})},{path:"/board/details/:id",element:y(vJ,{})},{path:"/photo/details/:id",element:y(TJ,{})},{path:"/qna/details/:id",element:y(MJ,{})}];function zJ(){const[e,t]=L.exports.useState(!1),n=()=>{t(i=>!i)},r=()=>{window.innerWidth>768&&t(!1)};return L.exports.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),y(iF,{className:e?" active":"",style:{height:e?"100vh":"auto",overflow:e?"hidden":"auto"},children:N(n$,{basename:"modart",children:[y(rF,{}),y(WW,{toggleMenu:n,toggle:e}),y(X5,{children:BJ.map((i,s)=>y(sb,{path:i.path,element:i.element},s))})]})})}const VJ=aa({name:"users",initialState:{currentUser:null,postCount:0},reducers:{setCurrentUser:(e,t)=>{e.currentUser=t.payload,e.postCount=t.payload?t.payload.postCount:0},incrementPostCount:e=>{e.postCount+=1}}});var jJ=VJ.reducer;const l4=S8({reducer:{auth:oJ,login:RW,users:jJ,board:rX,photo:qX,today:ZX,qna:FX}});l4.dispatch(AW());yv.createRoot(document.getElementById("root")).render(y(BF,{store:l4,children:y(zJ,{})}))});export default YJ();
